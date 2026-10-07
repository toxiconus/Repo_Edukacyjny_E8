#!/usr/bin/env python3
"""Jednorazowo: istniejąca lekcja HTML (lesson/*_new.html z v0_57) → md w formacie SZABLON_LEKCJI.md.
Co nie ma skrótu md, zostaje jako HTML (dozwolone w md). Użycie: python3 html2md.py wej.html wyj.md KOD"""
import re, sys, json
from bs4 import BeautifulSoup, NavigableString, Comment, Tag

INLINE = set('a abbr b bdi bdo br cite code data dfn em i kbd mark q s samp small span strong sub sup time u var wbr img input label select option button'.split())
BLOCK_TAGS = set('div section article aside details summary figure figcaption table thead tbody tfoot tr td th ul ol li dl dt dd '
                 'p h1 h2 h3 h4 h5 h6 pre blockquote nav header footer main form fieldset hr svg canvas iframe video audio style script template'.split())
ADV_SNIP = re.compile(r'^\(function\(\)\{var b=document\.getElementById\("advToggle"\).*\}\)\(\);$', re.S)

def attrs_of(t):
    return {k: v for k, v in t.attrs.items()}

def cls(t): return t.get('class') or []

def only_attrs(t, allowed):
    return all(k in allowed for k in t.attrs)

def is_inline_only(t):
    for d in t.descendants:
        if isinstance(d, Tag) and (d.name not in INLINE or d.name == 'button' and 'che-prac-go' in cls(d)): return False
    return True

def esc_text(s, para_start=False):
    s = s.replace('\\', '\\\\') if False else s
    s = s.replace('&', '&amp;') if re.search(r'&#?\w+;', s) else s
    s = s.replace('*', '\\*').replace('`', '\\`')
    s = re.sub(r'<(?![\s\d=]|$)', '&lt;', s)
    s = s.replace('[[', '\\[[')
    s = re.sub(r'\[([^\[\]]*)\]\(', r'\\[\1](', s)
    return s

def raw(t):
    s = str(t)
    return re.sub(r'\n\s*\n', '\n', s)

def inl(t):
    """zawartość inline elementu → md inline"""
    out = []
    for c in t.children:
        if isinstance(c, Comment): out.append('<!--%s-->' % c); continue
        if isinstance(c, NavigableString):
            out.append(esc_text(str(c).replace('\n', ' ') if True else str(c))); continue
        n = c.name
        if n in ('strong',) and not c.attrs and c.get_text() and not c.find('strong'): out.append('**%s**' % inl(c)); continue
        if n == 'em' and not c.attrs and c.get_text() and not c.find('em'): out.append('*%s*' % inl(c)); continue
        if n == 'code' and not c.attrs and not c.find(True) and '`' not in c.get_text(): out.append('`%s`' % c.get_text()); continue
        if n == 'a' and list(c.attrs) == ['href'] and c.get_text() and not c.find(True) and '(' not in c['href'] and ' ' not in c['href'] and ']' not in c.get_text() and '[' not in c.get_text():
            out.append('[%s](%s)' % (esc_text(c.get_text()), c['href'])); continue
        if n == 'span' and list(c.attrs) == ['class'] and len(cls(c)) == 2 and cls(c)[0] == 'level-badge' and cls(c)[1].startswith('level-') and not c.find(True) and ']' not in c.get_text():
            out.append('[[%s:%s]]' % (cls(c)[1][6:], c.get_text())); continue
        out.append(raw(c).replace('\n', ' ') if n != 'pre' else raw(c))
    s = ''.join(out)
    return s

def trailing(t, skip=('class', 'id')):
    a = []
    if t.get('id'): a.append('#' + t['id'])
    for c in cls(t): a.append('.' + c)
    return (' {%s}' % ' '.join(a)) if a else ''

def head_attrs(t, drop_cls=(), extra_ok=True):
    """{#id .c style="…"} dla nagłówka kontenera"""
    a = []
    if t.get('id'): a.append('#' + t['id'])
    for c in cls(t):
        if c not in drop_cls: a.append('.' + c)
    for k, v in t.attrs.items():
        if k in ('id', 'class'): continue
        if v is None or v == '': a.append(k)
        else: a.append('%s="%s"' % (k, str(v).replace('"', '&quot;')))
    return (' {%s}' % ' '.join(a)) if a else ''

def elems(t):
    return [c for c in t.children if isinstance(c, Tag)]

def has_text(t):
    return any(isinstance(c, NavigableString) and not isinstance(c, Comment) and c.strip() for c in t.children)

class Conv:
    def __init__(self, code): self.code = code; self.scripts = []

    def blocks(self, t):
        out = []
        for c in t.children:
            if isinstance(c, Comment): out.append('<!--%s-->' % c); continue
            if isinstance(c, NavigableString):
                if c.strip(): out.append(esc_text(c.strip()))
                continue
            r = self.block(c)
            if r is not None: out.append(r)
        return '\n\n'.join(out)

    def cont(self, head, t_or_text):
        body = t_or_text if isinstance(t_or_text, str) else self.blocks(t_or_text)
        return '::: %s\n%s\n:::' % (head, body)

    def block(self, t):
        n = t.name; c = cls(t)
        if n == 'script':
            self.scripts.append(t.string or ''); return None
        if n in ('style',): return '::: html\n%s\n:::' % str(t)
        # sekcja z nagłówkiem części
        if n == 'section' and t.get('id') and elems(t) and elems(t)[0].name == 'div' and cls(elems(t)[0]) == ['part-heading'] and not has_text(t) and only_attrs(t, ('id', 'class')):
            ph = elems(t)[0]; pn = ph.find('span', class_='part-num', recursive=False)
            num = ''
            if pn is not None and elems(ph)[0] is pn and list(pn.attrs) == ['class']:
                num = pn.get_text(); pn.extract()
            title = inl(ph).strip()
            ph.extract()
            return '## %s | %s%s\n\n%s' % (num, title, trailing(t), self.blocks(t))
        if n in ('h3', 'h4', 'h5', 'h6') and only_attrs(t, ('id', 'class')) and is_inline_only(t):
            return '%s %s%s' % ('#' * int(n[1]), inl(t).strip(), trailing(t))
        if n == 'p' and is_inline_only(t):
            s = inl(t).strip()
            if not s: return raw(t)
            if not t.attrs:
                if s.startswith(('#', '>', '- ', '* ', '|', '$$', '@', ':::')) or re.match(r'\d+\. ', s) or (s.startswith('<') and s[1:2].isalpha()): s = '\\' + s
                return s
            if c[:1] == ['mini-note'] and only_attrs(t, ('class', 'id')):
                rest = [x for x in c[1:]]
                tr = (' {%s}' % ' '.join((['#' + t['id']] if t.get('id') else []) + ['.' + x for x in rest])) if (rest or t.get('id')) else ''
                return '> ' + s + tr
            if only_attrs(t, ('class', 'id')):
                if s.startswith(('#', '>', '- ', '* ', '|', '$$', '@', ':::')) or re.match(r'\d+\. ', s) or (s.startswith('<') and s[1:2].isalpha()): s = '\\' + s
                return s + trailing(t)
            return raw(t)
        if n in ('ul', 'ol') and not t.attrs and not has_text(t) and all(li.name == 'li' and not li.attrs and is_inline_only(li) and inl(li).strip() for li in elems(t)):
            items = []
            for i, li in enumerate(elems(t)):
                s = re.sub(r'\s*\n\s*', ' ', inl(li).strip())
                items.append(('%d. ' % (i + 1) if n == 'ol' else '- ') + s)
            return '\n'.join(items)
        if n == 'div' and c == ['formula-lg'] and list(t.attrs) == ['class'] and is_inline_only(t):
            return '$$ ' + inl(t).strip()
        if n == 'div' and c and c[0] == 'card' and all(x == 'card' or x.startswith('card-') for x in c):
            typ = [x[5:] for x in c if x.startswith('card-')]
            if len(typ) <= 1:
                es = elems(t); lab = ''
                if es and es[0].name == 'span' and cls(es[0]) == ['card-label'] and list(es[0].attrs) == ['class'] and ' | ' not in es[0].get_text():
                    lab = ' | ' + inl(es[0]).strip(); es[0].extract()
                if not has_text(t):
                    ha = head_attrs(t, drop_cls=c)
                    return self.cont('karta %s%s%s' % (typ[0] if typ else '-', ha, lab), t)
        if n == 'details' and c == ['answer']:
            es = elems(t)
            if es and es[0].name == 'summary' and not es[0].attrs and is_inline_only(es[0]) and not has_text(t):
                sm = inl(es[0]).strip(); es[0].extract()
                if ' | ' not in sm: return self.cont('odp%s | %s' % (head_attrs(t, drop_cls=c), sm), t)
        if n == 'details' and c == ['adv'] and only_attrs(t, ('class',)):
            es = elems(t)
            if len(es) == 2 and es[0].name == 'summary' and es[1].name == 'div' and cls(es[1]) == ['adv-body'] and list(es[1].attrs) == ['class'] and not has_text(t):
                sm = es[0]; tg = sm.find('span', class_='adv-tag', recursive=False); tag = ''
                if tg is not None and list(tg.attrs) == ['class']:
                    tag = inl(tg).strip(); tg.extract()
                if is_inline_only(sm) and ' | ' not in sm.get_text():
                    return self.cont('adv | %s%s' % (inl(sm).strip(), (' | ' + tag) if tag else ''), es[1])
        if n in ('section', 'div') and 'minimum-card' in c and t.get('id') == 'minimum':
            es = elems(t)
            if es and es[0].name == 'h3' and not es[0].attrs and is_inline_only(es[0]):
                h = inl(es[0]).strip(); es[0].extract()
                return self.cont('minimum | %s' % h, t)
        if n == 'details' and 'toc-item' in c: return None
        if n == 'div' and c == ['layer-legend']:
            rows = []
            ok = True
            for r in elems(t):
                sp = elems(r)
                if cls(r) == ['layer-row'] and len(sp) == 2 and cls(sp[0])[:1] == ['dot'] and len(cls(sp[0])) == 2:
                    rows.append('- %s | %s' % (cls(sp[0])[1], inl(sp[1]).strip()))
                else: ok = False
            if ok: return self.cont('warstwy', '\n'.join(rows))
        if n == 'div' and c == ['core-path']:
            es = elems(t)
            if es and cls(es[0]) == ['cp-title'] and is_inline_only(es[0]):
                h = inl(es[0]).strip(); es[0].extract()
                ha = ' {#%s}' % t['id'] if t.get('id') else ''
                return self.cont('rdzen%s | %s' % (ha, h), t)
        if n == 'div' and c == ['exp-card'] and list(t.attrs) == ['class']:
            es = elems(t)
            if len(es) >= 2 and es[0].name == 'h5' and not es[0].attrs and es[1].name == 'div' and cls(es[1]) == ['exp-grid'] and not has_text(t):
                g = elems(es[1]); lines = []; ok = len(g) % 2 == 0 and not has_text(es[1])
                for i in range(0, len(g) - 1, 2):
                    b, s = g[i], g[i + 1]
                    if not (b.name == 'b' and not b.attrs and s.name == 'span' and (not s.attrs or cls(s) == ['formula'] and list(s.attrs) == ['class']) and ':' not in b.get_text()):
                        ok = False; break
                    v = re.sub(r'\s*\n\s*', ' ', inl(s).strip())
                    lines.append('%s%s %s' % (inl(b).strip(), '::' if s.attrs else ':', v))
                if ok and ' | ' not in es[0].get_text():
                    title = inl(es[0]).strip(); es[0].extract(); es[1].extract()
                    rest = self.blocks(t)
                    return '::: dosw | %s\n%s%s\n:::' % (title, '\n'.join(lines), ('\n\n' + rest) if rest else '')
        if n == 'button' and c == ['che-prac-go'] and set(t.attrs) == {'class', 'data-k', 'data-prac', 'type'} and is_inline_only(t):
            return '@zlewka %s %s | %s' % (t['data-prac'], t['data-k'] or '-', inl(t).strip())
        if n == 'div' and c == ['che-lesson-viz-ref'] and set(t.attrs) == {'class', 'data-che-lesson-viz'}:
            es = elems(t); b = es[0] if len(es) == 1 else None
            if b is not None and b.name == 'button':
                vid = t['data-che-lesson-viz']; oc = b.get('onclick', '')
                m = re.search(r"visualId:'([^']+)',lessonId:'([^']+)'", oc)
                bb = elems(b)
                if m and m.group(1) == vid and m.group(2) == self.code and b.get('data-che-open-viz') == vid and len(bb) == 2 and bb[0].name == 'b' and bb[1].name == 'span' and not has_text(b):
                    return '@model %s | %s | %s' % (vid, inl(bb[0]).strip(), inl(bb[1]).strip())
        if n == 'table' and c == ['klinika-table'] and list(t.attrs) == ['class']:
            th = [x.get_text() for x in t.select('thead th')]
            rows = []; ok = len(th) == 3
            for tr in t.select('tbody tr'):
                td = tr.find_all('td', recursive=False)
                if not (cls(tr) == ['error-row'] and len(td) == 3 and cls(td[0]) == ['col-blad'] and td[0].get('data-label') == 'Błąd' and cls(td[1]) == ['col-ok'] and td[1].get('data-label') == 'Poprawa' and td[2].attrs == {'data-label': 'Dlaczego'} and all(is_inline_only(x) for x in td)):
                    ok = False; break
                rows.append('| %s |' % ' | '.join(inl(x).strip().replace('|', '\\|') for x in td))
            if ok and len(t.select('tbody tr')) == len(t.find_all('tr')) - 1:
                return '::: klinika | %s\n%s\n:::' % (' | '.join(th), '\n'.join(rows))
        if n == 'dl' and only_attrs(t, ('class',)) and not has_text(t):
            items = []; ok = True
            for d in elems(t):
                dd = elems(d)
                if d.name == 'div' and cls(d) == ['def-item'] and list(d.attrs) == ['class'] and len(dd) == 2 and dd[0].name == 'dt' and dd[1].name == 'dd' and not dd[0].attrs and not dd[1].attrs and is_inline_only(dd[0]) and is_inline_only(dd[1]) and ' :: ' not in d.get_text():
                    items.append('%s :: %s' % (inl(dd[0]).strip(), re.sub(r'\s*\n\s*', ' ', inl(dd[1]).strip())))
                else: ok = False; break
            if ok: return self.cont('slownik%s' % head_attrs(t), '\n'.join(items))
        if n == 'div' and 'flashcard-grid' in c and all(x.name == 'button' and 'flashcard' in cls(x) for x in elems(t)) and elems(t):
            lines = []; ok = True
            for b in elems(t):
                f = b.find('span', class_='front'); bk = b.find('span', class_='back'); tg = b.find('span', class_='card-tag')
                if f is None or bk is None or ' | ' in b.get_text(): ok = False; break
                tag = ''
                if tg is not None:
                    tc = [x for x in cls(tg) if x.startswith('tag-')]
                    tag = ' | %s:%s' % (tc[0][4:] if tc else '', inl(tg).strip())
                lines.append('%s | %s%s' % (re.sub(r'\s*\n\s*', ' ', inl(f).strip()), re.sub(r'\s*\n\s*', ' ', inl(bk).strip()), tag))
            if ok: return self.cont('fiszki%s' % head_attrs(t, drop_cls=('flashcard-grid',)), '\n'.join(lines))
        if n == 'footer' and c == ['footer']:
            ps = elems(t)
            if ps: self.footer = inl(ps[0]).strip(); return None
        # ogólny kontener (zawartość blokowa)
        if n in ('div', 'section', 'article', 'aside', 'figure', 'nav', 'header', 'blockquote', 'ul', 'ol', 'li', 'dl', 'details', 'main', 'figcaption') and not has_text(t) and elems(t) and not any(x.name in INLINE and x.name not in ('button',) for x in elems(t)) and not is_inline_only(t):
            spec = n + ''.join('.' + x for x in c) + ('#' + t['id'] if t.get('id') and re.match(r'[\w-]+$', t['id']) else '')
            other = {k: v for k, v in t.attrs.items() if k not in ('class', 'id')}
            if t.get('id') and not re.match(r'[\w-]+$', t['id']): other['id'] = t['id']
            if all(re.match(r'[\w-]+$', x) for x in c):
                oa = (' {%s}' % ' '.join(k if v in (None, '') else '%s="%s"' % (k, str(v).replace('"', '&quot;')) for k, v in other.items())) if other else ''
                if n == 'details':
                    es = elems(t)
                    if es[0].name == 'summary' and not es[0].attrs and is_inline_only(es[0]) and ' | ' not in es[0].get_text():
                        sm = inl(es[0]).strip(); es[0].extract()
                        return self.cont('%s%s | %s' % (spec, oa, sm), t)
                    return '::: html\n%s\n:::' % str(t) if '\n\n' in str(t) else raw(t)
                return self.cont(spec + oa, t)
        s = raw(t)
        if '\n:::' in s: s = s.replace('\n:::', '\n :::')
        return s

def parse_js_array(js, var):
    m = re.search(r'var %s=(\[.*?\]);var ' % var, js, re.S)
    return json.loads(m.group(1)) if m else None

def convert(path, code, out):
    soup = BeautifulSoup(open(path, encoding='utf-8').read(), 'html.parser')
    cv = Conv(code); cv.footer = ''
    main = soup.find('main')
    hero = main.find('section', class_='hero')
    meta = {'kod': code}
    meta['kicker'] = inl(hero.find(class_='hero-kicker')).strip()
    meta['tytul'] = inl(hero.find('h1')).strip()
    meta['lead'] = [inl(p).strip() for p in hero.find_all('p', class_='lead')]
    meta['plakietki'] = inl(hero.find(class_='tag-row')).strip()
    meta['uwaga'] = [inl(p).strip() for p in hero.find_all('p', class_='mini-note')]
    hero.extract()
    for sk in main.find_all('a', class_='skip-link'): sk.extract()
    for sk in soup.find_all('a', class_='skip-link'): sk.extract()
    # treść
    body = cv.blocks(main)
    for t in soup.body.children:
        if isinstance(t, Tag) and t.name == 'script': cv.scripts.append(t.string or '')
        elif isinstance(t, Tag) and t.name == 'footer': cv.block(t)
    # skrypty: fiszki/test z danych (N04, FIZ-01) → bloki md; przełącznik adv → wspólny lekcja.js
    keep = []
    for js in cv.scripts:
        js = js.strip()
        if ADV_SNIP.match(js): continue
        if js.startswith("/* ==== Flashcards ==== */"): continue
        if js.startswith('function toggleFlashcard(card){card.classList.toggle(\'flipped\');}'):
            js = js[len('function toggleFlashcard(card){card.classList.toggle(\'flipped\');}'):].strip()
        cards = parse_js_array(js, 'cards'); qs = parse_js_array(js, 'qs')
        if cards is not None and qs is not None:
            fz = '::: fiszki\n%s\n:::' % '\n'.join('%s | %s' % (a, b) for a, b in cards)
            ts = '::: test\n%s\n:::' % '\n\n'.join('? %s\n%s' % (q, '\n'.join(('+ ' if i == ok else '- ') + o for i, o in enumerate(op))) for q, op, ok in qs)
            body = body.replace('::: html\n<div class="flashcard-grid" id="flashcards"></div>\n:::', fz).replace('<div class="flashcard-grid" id="flashcards"></div>', fz)
            body = re.sub(r'<div id="quizWrap"></div>\s*<div class="quiz-score" id="quizScore"></div>', lambda m: ts, body)
            continue
        if js: keep.append(js)
    fm = ['---', 'kod: ' + code, 'uid: ', 'tytul: ' + meta['tytul'], 'opis: ', 'kicker: ' + meta['kicker']]
    fm += ['lead: ' + x for x in meta['lead']] + ['plakietki: ' + meta['plakietki']] + ['uwaga: ' + x for x in meta['uwaga']]
    fm += ['stopka: ' + cv.footer, '---', '']
    tail = ''.join('\n\n::: skrypt\n%s\n:::' % k for k in keep)
    open(out, 'w', encoding='utf-8').write('\n'.join(fm) + body + tail + '\n')

if __name__ == '__main__':
    convert(sys.argv[1], sys.argv[3], sys.argv[2])
