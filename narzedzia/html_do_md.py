#!/usr/bin/env python3
"""Ręcznie robiona lekcja HTML (szablon PODSTAWA PLUS: karty, part-heading, exercise, flashcard…) → md w dialekcie szablonu.
Użycie: python3 narzedzia/html_do_md.py -p pol -k L004 wejscie.html wyjscie.md
Zachowuje treść; elementy czysto interaktywne (pasek postępu, filtry, przyciski) pomija. Odpowiedzi do pól „wpisz”
próbuje odczytać ze skryptu lekcji; własne SVG zostają jako ::: html z automatycznym @opis i znacznikiem GFX do przeniesienia."""
import re, sys, argparse, html as H
from bs4 import BeautifulSoup, Comment, NavigableString, Tag

TYPY = {'card-remember': 'basic', 'card-correct': 'basic', 'card-hint': 'understand', 'card-understand': 'understand',
        'card-trap': 'warning', 'card-warning': 'warning', 'card-error': 'error', 'card-ambitious': 'extra',
        'card-extra': 'extra', 'card-new': 'new', 'card-exam': 'exam', 'card-gray': '-', 'card-basic': 'basic', 'card-practice': 'understand'}
POZIOM = {'level-basic': 'basic', 'level-training': 'understand', 'level-understand': 'understand', 'level-exam': 'exam',
          'level-ambitious': 'extra', 'level-extra': 'extra', 'level-new': 'new', 'level-contest': 'contest'}
SPAN_ZOSTAW = {'correct-text', 'error-text', 'en', 'eng', 'pl', 'ex', 'hl-operator', 'hl-main-verb', 'hl-key', 'hl', 'hl-warn',
               'hl-new', 'formula', 'tag', 'ipa', 'przyklad'}
POMIN_KLASY = {'top-panel', 'progress-bar-wrap', 'view-filters', 'hide-all-wrap', 'today-tasks', 'toc-actions', 'toc-checklist',
               'answer-toggle', 'hint-toggle', 'audio-btn', 'result-icon', 'btn', 'toc-wrapper', 'toc-overlay', 'fab', 'bottom-nav',
               'header-wrapper', 'resume-dropdown', 'table-scroll-hint', 'progress-label'}

STR = r"""'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`"""

def js_tablice(js):
    """{nazwa: [ {pole: wartość} ]} dla tablic obiektów z pytaniami (q + odpowiedź)."""
    wynik = {}
    for mm in re.finditer(r'(?:const|var|let)?\s*(\w+)\s*=\s*\[\s*\{', js):
        nazwa, i = mm.group(1), mm.end() - 1
        d, j = 0, js.index('[', mm.start())   # od '['
        k = j
        while k < len(js):
            ch = js[k]
            if ch in '\'"`':
                q = ch; k += 1
                while k < len(js) and js[k] != q: k += 2 if js[k] == '\\' else 1
            elif ch == '[': d += 1
            elif ch == ']':
                d -= 1
                if d == 0: break
            k += 1
        tekst = js[j:k + 1]
        obiekty = []
        for ob in re.finditer(r'\{((?:[^{}]|\{[^{}]*\})*)\}', tekst):
            pola = {}
            for pm in re.finditer(r'(\w+)\s*:\s*(?:%s|\[([^\]]*)\])' % STR, ob.group(1)):
                key = pm.group(1)
                if pm.group(5) is not None:
                    pola[key] = [next(x for x in g if x is not None) for g in re.findall(STR, pm.group(5))]
                else:
                    v = next((x for x in pm.group(2, 3, 4) if x is not None), '')
                    pola[key] = v.replace("\\'", "'").replace('\\"', '"').replace('\\n', ' ')
            if 'q' in pola: obiekty.append(pola)
        if obiekty: wynik[nazwa] = obiekty
    return wynik

def md_pytania(nazwa, ob):
    """tablica pytań z JS → md (test wyboru albo pytania z odpowiedziami)"""
    odp = lambda o: o.get('correct') or o.get('c') or o.get('answer') or o.get('a') or ''
    if all(isinstance(o.get('options') or o.get('opts'), list) for o in ob):
        L = ['', '::: test']
        for o in ob:
            L.append('? ' + re.sub(r'^\d+\.\s*', '', o['q']))
            for x in (o.get('options') or o.get('opts')):
                L.append(('+ ' if x == odp(o) else '- ') + x)
            if o.get('e') or o.get('h'): L.append('! ' + (o.get('e') or o.get('h')))
        return L + [':::', '']
    L = ['']
    for i, o in enumerate(ob, 1):
        L.append('%d. %s' % (i, re.sub(r'^\d+\.\s*', '', o['q'])))
    L += ['', '::: odp | Odpowiedzi']
    for i, o in enumerate(ob, 1):
        ex = o.get('e') or o.get('h') or ''
        L.append('%d. **%s**%s' % (i, odp(o), (' — ' + ex) if ex else ''))
    return L + [':::', '']

def klasy(t): return set(t.get('class', [])) if isinstance(t, Tag) else set()

class Konw:
    def __init__(self, soup, skrypt, p):
        self.s, self.js, self.p, self.svg = soup, skrypt, p, 0
        self.dane = js_tablice(skrypt); self.wstawione = set(); self.kont = {}
        for nazwa in self.dane:   # kontener: element z id użyty w funkcjach korzystających z tablicy
            for mm in re.finditer(r'\b%s\b' % re.escape(nazwa), skrypt):
                if re.match(r'\s*=\s*\[', skrypt[mm.end():mm.end() + 5]): continue   # definicja tablicy
                fs = skrypt.rfind('function', 0, mm.start())   # od początku funkcji, która używa tablicy
                okno = skrypt[max(fs, mm.start() - 600) if fs >= 0 else mm.start():mm.start() + 900]
                for idm in re.findall(r"getElementById\(['\"]([\w-]+)['\"]\)", okno):
                    el = soup.find(id=idm)
                    if el is not None and len(el.get_text(strip=True)) < 40 and nazwa not in self.kont.values():
                        self.kont[idm] = nazwa; break
                if nazwa in self.kont.values(): break

    # ------------------------------------------------ inline
    def inl(self, el):
        out = []; prev = None
        for c in el.children:
            if isinstance(c, Tag) and isinstance(prev, Tag) and c.name == 'span' and prev.name == 'span': out.append(' ')   # chipy obok siebie
            prev = c
            if isinstance(c, Comment): continue
            if isinstance(c, NavigableString):
                out.append(re.sub(r'\s+', ' ', str(c))); continue
            if not isinstance(c, Tag) or c.name in ('script', 'style', 'input', 'button') or klasy(c) & POMIN_KLASY: continue
            k = klasy(c)
            if c.name == 'br': out.append('<br>')
            elif c.name in ('strong', 'b'):
                t = self.inl(c).strip(); out.append('**%s**' % t if t else '')
            elif c.name in ('em', 'i'):
                t = self.inl(c).strip(); out.append('<em>%s</em>' % t if t else '')
            elif c.name in ('sub', 'sup', 'u', 'mark', 'small', 'kbd'):
                out.append('<%s>%s</%s>' % (c.name, self.inl(c), c.name))
            elif c.name == 'code': out.append('`%s`' % c.get_text())
            elif c.name == 'a':
                href = c.get('href', '')
                t = self.inl(c).strip()
                out.append('[%s](%s)' % (t, href) if href and not href.startswith(('#', 'javascript')) else t)
            elif c.name == 'span' and any(x.endswith('num') or x.startswith('num') for x in k) and re.fullmatch(r'\s*[\dA-Z.]{1,4}\s*', c.get_text()):
                out.append(c.get_text(strip=True).rstrip('.') + '. ')
            elif c.name == 'span' and k & set(POZIOM):
                typ = POZIOM[next(iter(k & set(POZIOM)))]; out.append('[[%s:%s]]' % (typ, c.get_text(' ', strip=True)))
            elif c.name == 'span' and k & SPAN_ZOSTAW:
                out.append('<span class="%s">%s</span>' % (' '.join(sorted(k & SPAN_ZOSTAW)), self.inl(c)))
            elif c.name == 'svg': out.append('')
            else: out.append(self.inl(c))
        s = ''.join(out)
        return re.sub(r'[ \t]+', ' ', s)

    # ------------------------------------------------ bloki
    def bloki(self, el):
        out = []; vocab = []
        def flush():
            if vocab:
                out.append('::: slowka | Wyraz | Znaczenie | Przykład'); out.extend(vocab); out.append(':::'); out.append(''); vocab.clear()
        kids = [c for c in el.children if not isinstance(c, Comment)]
        buf = []   # inline rodzeństwo tekstowe
        def flush_inline():
            t = ''.join(buf).strip(); buf.clear()
            if t.startswith('<'): t = '&#8203;' + t   # akapit od znacznika inline — parser nie może wziąć go za blok HTML
            if t: out.extend([t, ''])
        for c in kids:
            if isinstance(c, NavigableString):
                if str(c).strip(): buf.append(re.sub(r'\s+', ' ', str(c)))
                continue
            if not isinstance(c, Tag): continue
            if c.name in ('strong', 'b', 'em', 'i', 'span', 'a', 'code', 'sub', 'sup', 'br', 'u', 'mark', 'small') and not (klasy(c) & {'part-num', 'card-label'}):
                if buf and not buf[-1].endswith(' '): buf.append(' ')
                buf.append(self.inl(BeautifulSoup('<x>%s</x>' % str(c), 'html.parser').x)); continue
            flush_inline()
            k = klasy(c)
            if 'vocab-item' in k:
                g = lambda cl: c.find(class_=cl)
                vocab.append(' || '.join(self.inl(g(x)).strip() if g(x) else '' for x in ('en', 'pl', 'ex'))); continue
            flush()
            out.extend(self.blok(c))
        flush_inline(); flush()
        return out

    def blok(self, c):
        k = klasy(c); n = c.name
        if isinstance(c, Tag) and c.get('id') in self.kont and self.kont[c['id']] not in self.wstawione:
            nazwa = self.kont[c['id']]; self.wstawione.add(nazwa)
            return md_pytania(nazwa, self.dane[nazwa])
        if n in ('script', 'style', 'input', 'button', 'nav', 'noscript', 'template') and 'flashcard' not in k: return []
        if k & POMIN_KLASY: return []
        if n == 'details' and k & {'toc-item'}: return []
        if n == 'a' and 'toc-anchor' in k: return []
        if n in ('h1', 'h2', 'h3', 'h4', 'h5'):
            t = self.inl(c).strip()
            return ['', '#' * min(4, int(n[1]) if n != 'h1' else 2) + ' ' + t, ''] if t else []
        if 'part-heading' in k:
            num = c.find(class_='part-num'); nt = num.get_text(' ', strip=True) if num else ''
            if num: num.extract()
            t = re.sub(r'^[·:–—-]\s*', '', self.inl(c).strip())
            if not t: return ['', '::: html', '<div class="lk-czesc">%s</div>' % H.escape(nt), ':::', '']
            return ['', '## %s%s' % (re.sub(r'^(Część|Part)\s*', '', nt) + ' | ' if nt else '', t), '']
        if n == 'svg' or (n in ('figure', 'div') and c.find('svg') and not c.find(['p', 'table', 'ul', 'ol', 'h2', 'h3']) and len(c.get_text(strip=True)) < 400 and c.find('svg').find('text')):
            return self.grafika(c)
        if 'flashcard-grid' in k or (n == 'button' and 'flashcard' in k):
            cards = c.find_all(class_='flashcard') if 'flashcard-grid' in k else [c]
            rows = []
            for f in cards:
                fr, bk, tg = f.find(class_='front'), f.find(class_='back'), f.find(class_='card-tag')
                tag = ''
                if tg:
                    tc = next((x[4:] for x in klasy(tg) if x.startswith('tag-')), 'basic')
                    tag = ' | %s:%s' % (tc, tg.get_text(' ', strip=True))
                rows.append('%s | %s%s' % (self.inl(fr).strip() if fr else '', self.inl(bk).strip() if bk else '', tag))
            return ['', '::: fiszki'] + rows + [':::', '']
        if 'card' in k and n in ('div', 'section', 'article', 'aside'):
            typ = next((TYPY[x] for x in k if x in TYPY), '-')
            lab = c.find(class_=['card-label', 'card-head'], recursive=False) or c.find(class_='card-label')
            lt = ''
            if lab: lt = self.inl(lab).strip(); lab.extract()
            return ['', '::: karta %s%s' % (typ, ' | ' + lt if lt else '')] + self.bloki(c) + [':::', '']
        if k & {'korekta', 'box-cke', 'mistake-box', 'curiosity', 'highlight-box'}:
            typ = {'korekta': 'warning', 'box-cke': 'exam', 'mistake-box': 'error', 'curiosity': 'new', 'highlight-box': 'understand'}[next(iter(k & {'korekta', 'box-cke', 'mistake-box', 'curiosity', 'highlight-box'}))]
            tl = c.find(class_=re.compile('title|label')) or (c.find('strong', recursive=False) if 'mistake-box' in k else None)
            lt = ''
            if tl: lt = self.inl(tl).strip(); tl.extract()
            for w in c.find_all(class_='wrong'): w.insert(0, '✗ ')
            return ['', '::: karta %s%s' % (typ, ' | ' + lt if lt else '')] + self.bloki(c) + [':::', '']
        if 'mm-recall' in k:
            qs = []
            for b in c.find_all('button'):
                mm = re.search(r"mmReveal\(this,\s*'((?:[^'\\]|\\.)*)'", b.get('onclick', ''))
                qs.append((b.get_text(' ', strip=True), mm.group(1).replace("\\'", "'") if mm else ''))
            sm = c.find('summary')
            o = ['', '::: karta understand | %s' % (sm.get_text(' ', strip=True) if sm else 'Sprawdź się przed nauką')]
            for i, (q, a) in enumerate(qs, 1):
                o += ['%d. %s' % (i, q)]
            o += ['', '::: odp | Odpowiedzi'] + ['%d. %s' % (i, a) for i, (q, a) in enumerate(qs, 1)] + [':::']
            o += [self.inl(x).strip() for x in c.find_all('p')] + [':::', '']
            return o
        if 'exercise' in k:
            return self.cwiczenie(c)
        if k & {'answer-content', 'hint-content'}:
            lab = 'Podpowiedzi' if 'hint-content' in k else 'Odpowiedź'
            return ['', '::: odp | %s' % lab] + self.bloki(c) + [':::', '']
        if 'hint-level' in k:
            return ['- ' + self.inl(c).strip()]
        if n == 'details':
            sm = c.find('summary'); st = self.inl(sm).strip() if sm else 'Rozwiń'
            if sm: sm.extract()
            return ['', '::: odp | %s' % st] + self.bloki(c) + [':::', '']
        if n == 'table': return self.tabela(c)
        if n in ('ul', 'ol'): return self.lista(c, 0) + ['']
        if 'ex-title' in k:
            nm = c.find(class_='ex-num')
            if nm: nm.replace_with(nm.get_text(strip=True) + ('. ' if nm.get_text(strip=True).isalnum() else ' '))
        if 'reveal' in k or 'reveal-ans' in k:
            return ['', '::: odp | Odpowiedź'] + self.bloki(c) + [':::', '']
        if n in ('p', 'figcaption', 'dt', 'dd', 'label') or 'ex-title' in k or 'task' in k:
            t = self.inl(c).strip()
            if t.startswith('<'): t = '&#8203;' + t
            if 'ex-title' in k and t: t = '**%s**' % t if not t.startswith('**') else t
            return [t, ''] if t else []
        if n == 'blockquote':
            return ['', '::: cytat'] + self.bloki(c) + [':::', '']
        if n == 'hr': return ['', '---', '']
        if n == 'img':
            alt = c.get('alt', '')
            return ['![%s](%s)' % (alt, c.get('src', '')), '@opis %s' % (alt or 'Obraz z lekcji — opis do uzupełnienia.'), '']
        if 'step-flow' in k or 'ion-assembly' in k:
            return ['', '::: html', re.sub(r'\s+', ' ', str(c)), ':::', '@opis %s' % self.opis_tekst(c), '']
        if 'example' in k and not c.find(['p', 'ul', 'ol', 'table', 'div']):
            t = self.inl(c).strip()
            return ['::: div.przyklad', t, ':::', ''] if t else []
        return self.bloki(c)

    def opis_tekst(self, c):
        t = c.get_text(' · ', strip=True)
        return ('Schemat z lekcji; elementy: ' + t[:400]) if t else 'Schemat z lekcji — opis do uzupełnienia.'

    def grafika(self, c):
        self.svg += 1
        sv = c if c.name == 'svg' else c.find('svg')
        etyk = [t.get_text(' ', strip=True) for t in sv.find_all('text')]
        cap = ''
        if c.name != 'svg':
            fc = c.find(['figcaption', 'h4', 'h5', 'strong'])
            cap = fc.get_text(' ', strip=True) if fc else ''
        opis = (cap + ': ' if cap else 'Schemat: ') + ('napisy na rysunku — ' + ' · '.join(x for x in etyk if x)[:450] if etyk else 'rysunek bez napisów') + \
               '. Wniosek: [do dopracowania przy przeniesieniu do biblioteki grafik].'
        return ['', '<!-- GFX: własne SVG z dawnego HTML — przenieść do biblioteki grafik przedmiotu -->', '::: html',
                '<figure class="lk-fig lk-fig-stare"><div class="lk-fig-body">%s</div>%s</figure>' % (re.sub(r'\s+', ' ', str(sv)), '<figcaption><b>%s</b></figcaption>' % H.escape(cap) if cap else ''),
                ':::', '@opis ' + opis, '']

    def odpowiedzi_js(self, ids):
        """odpowiedzi do pól input z funkcji sprawdzającej w skrypcie (heurystyka)"""
        if not ids or not self.js: return []
        pref = re.sub(r'\d+$', '', ids[0])
        for mm in re.finditer(r'\[([^\[\]]{3,2000})\]', self.js):
            arr = re.findall(r"""['"]([^'"]{1,120})['"]""", mm.group(1))
            ctx = self.js[max(0, mm.start() - 400):mm.start()]
            if len(arr) == len(ids) and (pref in ctx or pref in self.js[mm.end():mm.end() + 400]):
                return arr
        return []

    def cwiczenie(self, c):
        o = ['']
        rows = c.find_all(class_='fitb-row')
        if rows:
            tit = c.find(class_='ex-title')
            if tit:
                nm = tit.find(class_='ex-num')
                if nm: nm.replace_with(nm.get_text(strip=True) + ('. ' if nm.get_text(strip=True).isalnum() else ' '))
                o += ['**%s**' % self.inl(tit).strip(), '']
            pola = [r.find(['input', 'select']) for r in rows]
            ids = [x['id'] for x in pola if x is not None and x.get('id')]
            opcje = {}
            for r in rows:
                sel = r.find('select')
                if sel:
                    ops = [(o.get('value', ''), o.get_text(' ', strip=True)) for o in sel.find_all('option') if o.get('value')]
                    opcje.update(ops)
                    sel.replace_with(' (%s)' % ' / '.join(t for _, t in ops))
            ans = [opcje.get(a, a) for a in self.odpowiedzi_js(ids)]
            odkr = []   # odpowiedzi ukryte w div.reveal zaraz po wierszu
            for r in rows:
                wew = r.find(class_=['reveal', 'reveal-ans'])
                if wew is not None:
                    odkr.append(self.inl(wew).strip()); wew.extract(); continue
                nx = r.find_next_sibling()
                if nx is not None and klasy(nx) & {'reveal', 'reveal-ans', 'answer-content'}:
                    odkr.append(self.inl(nx).strip()); nx.extract()
            if odkr and not ans: ans = odkr
            otwarte = all(r.find('textarea') for r in rows)
            for r in rows:
                t = self.inl(r).strip()
                mm = re.match(r'^(?:\*\*)?(\d+)\.(?:\*\*)?\s*(.*)$', t)
                o.append('%s. %s' % (mm.group(1), mm.group(2)) if mm else '1. ' + t)
            o += ['', '::: odp | Odpowiedzi'] + (['%d. %s' % (i, a) for i, a in enumerate(ans, 1)] if ans else ['Odpowiedź otwarta — oceń według kryteriów z lekcji.'] if otwarte else ['Odpowiedzi: DO UZUPEŁNIENIA (w dawnym HTML sprawdzał je skrypt).']) + [':::', '']
            for r in rows: r.extract()
            if tit: tit.extract()
            rest = self.bloki(c)
            return o + rest
        return o + self.bloki(c) + ['']

    def tabela(self, t):
        rows = t.find_all('tr')
        if not rows: return []
        cell = lambda x: self.inl(x).strip().replace('|', '\\|').replace('\n', ' ') or ' '
        out = ['']
        for i, r in enumerate(rows):
            cs = r.find_all(['td', 'th'])
            out.append('| ' + ' | '.join(cell(x) for x in cs) + ' |')
            if i == 0: out.append('|' + '---|' * len(cs))
        return out + ['']

    def lista(self, l, d):
        o = []
        for i, li in enumerate(l.find_all('li', recursive=False), 1):
            sub = [x for x in li.find_all(['ul', 'ol'], recursive=False)]
            for x in sub: x.extract()
            t = self.inl(li).strip()
            o.append('  ' * d + ('%d. ' % i if l.name == 'ol' else '- ') + t)
            for x in sub: o += self.lista(x, d + 1)
        return o

def konwertuj(src, p, kod):
    raw = open(src, encoding='utf-8').read()
    s = BeautifulSoup(raw, 'html.parser')
    js = '\n'.join(x.get_text() for x in s.find_all('script'))
    k = Konw(s, js, p)
    tp = s.find(class_='top-panel')
    tytul = (tp.find(class_='title').get_text(' ', strip=True) if tp and tp.find(class_='title') else '') or \
            re.sub(r'\s*[|·–-]\s*(Egzamin|E8).*$', '', s.title.get_text(strip=True) if s.title else kod)
    lead = []
    if tp:
        for cl in ('subtitle', 'lesson-title'):
            x = tp.find(class_=cl)
            if x: lead.append(x.get_text(' ', strip=True))
    stopka = ''
    ft = s.find('footer')
    if ft:
        ps = [x.get_text(' ', strip=True) for x in ft.find_all('p')] or [ft.get_text(' ', strip=True)]
        stopka = ps[0][:300]; reszta_stopki = ps[1:]
        ft.extract()
    else: reszta_stopki = []
    root = s.body or s
    for x in root.find_all(class_=lambda c: c and set(c.split() if isinstance(c, str) else c) & {'top-panel'}): x.extract()
    body = k.bloki(root)
    reszta = [x for x in k.dane if x not in k.wstawione]
    if reszta:
        body += ['', '## Zadania z dawnej wersji interaktywnej', '']
        for x in reszta: body += md_pytania(x, k.dane[x])
    md = '\n'.join(body)
    if reszta_stopki: md += '\n\n' + '\n'.join('<p class="mini-note">%s</p>' % H.escape(x) for x in reszta_stopki if x)
    md = re.sub(r'(?m)^(?!&#8203;)(<(?:span|em|strong|sub|sup|a|u|mark|small|code|b|i)\b)', r'&#8203;\1', md)   # linia od znacznika inline ≠ blok HTML
    md = re.sub(r'\n{3,}', '\n\n', md).strip() + '\n'
    fm = ['---', 'kod: %s' % kod, 'przedmiot: %s' % {'pol': 'polski', 'ang': 'angielski', 'bio': 'biologia', 'che': 'chemia'}[p],
          'tytul: %s' % tytul.replace('\n', ' ')]
    if lead: fm.append('lead: %s' % ' — '.join(lead))
    if stopka: fm.append('stopka: %s' % stopka)
    fm += ['zrodlo: %s (konwersja html_do_md.py, 2026-10-09)' % src.split('/')[-1],
           'stan: KONWERSJA Z HTML — sprawdzić odpowiedzi „DO UZUPEŁNIENIA” i grafiki GFX', '---', '']
    return '\n'.join(fm) + md, k.svg

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('-p', required=True); ap.add_argument('-k', required=True)
    ap.add_argument('wej'); ap.add_argument('wyj')
    a = ap.parse_args()
    md, n = konwertuj(a.wej, a.p, a.k)
    open(a.wyj, 'w', encoding='utf-8').write(md)
    print('ok', a.wyj, len(md) // 1024, 'KB', 'svg', n, 'brak odpowiedzi', md.count('DO UZUPEŁNIENIA (w dawnym'))
