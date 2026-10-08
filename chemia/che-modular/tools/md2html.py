#!/usr/bin/env python3
"""md → HTML lekcji CHE (format: SZABLON_LEKCJI.md).
Użycie: python3 md2html.py md/N04_sole.md [...]   → dist/N04_sole.html (+ dist/index.html)
Wspólne: engine/src/lekcja/lekcja.css, lekcja.js (wklejane do każdej lekcji), dist/che-viz.js (z modułów: tools/silnik.py)."""
import os, re, sys, json, html as H

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MD = os.path.join(ROOT, 'lessons-md', 'gotowe')
BLOCK_TAGS = set('div section article aside details summary figure figcaption table thead tbody tfoot tr td th ul ol li dl dt dd '
                 'p h1 h2 h3 h4 h5 h6 pre blockquote nav header footer main form fieldset hr svg canvas iframe video audio '
                 'style script template'.split())
LEVELS = {'basic', 'understand', 'extra', 'exam', 'new', 'contest'}

# ---------------------------------------------------------------- inline
def esc_text(s):
    s = re.sub(r'&(?!#?\w+;)', '&amp;', s)
    return re.sub(r'<(?=[\s\d=]|$)', '&lt;', s)

def inline(s):
    """md inline → HTML. Znaczniki HTML przechodzą bez zmian."""
    if not s: return ''
    store = []
    def keep(x):
        store.append(x); return '\x00%d\x00' % (len(store) - 1)
    s = s.replace('\\*', keep('*')).replace('\\`', keep('`')).replace('\\[', keep('['))
    s = re.sub(r'`([^`]+)`', lambda m: keep('<code>' + esc_text(m.group(1)) + '</code>'), s)
    s = re.sub(r'<[A-Za-z/!][^<>]*>', lambda m: keep(m.group(0)), s)
    s = esc_text(s)
    s = re.sub(r'\[\[(\w+):([^\]]+)\]\]', lambda m: keep('<span class="level-badge level-%s">' % m.group(1)) + m.group(2) + keep('</span>'), s)
    s = re.sub(r'\[([^\[\]\x00]+)\]\(([^()\s]+)\)', lambda m: keep('<a href="%s">' % m.group(2)) + m.group(1) + keep('</a>'), s)
    s = re.sub(r'\*\*(.+?)\*\*', lambda m: keep('<strong>') + m.group(1) + keep('</strong>'), s)
    s = re.sub(r'(?<![\w*])\*(?=\S)(.+?)(?<=\S)\*(?![\w*])', lambda m: keep('<em>') + m.group(1) + keep('</em>'), s)
    for _ in range(4):
        s = re.sub('\x00(\\d+)\x00', lambda m: store[int(m.group(1))], s)
    return s

# ---------------------------------------------------------------- atrybuty
ATTR_RE = re.compile(r'''([#.][\w-]+)|([\w:-]+)(?:=("[^"]*"|'[^']*'|[^\s"']+))?''')
def parse_attrs(s):
    """'#id .a .b style="x" open' → dict (class jako lista)."""
    d = {}
    for m in ATTR_RE.finditer(s or ''):
        if m.group(1):
            t = m.group(1)
            if t[0] == '#': d['id'] = t[1:]
            else: d.setdefault('class', []).append(t[1:])
        elif m.group(2):
            v = m.group(3)
            if v is None: d[m.group(2)] = None
            else: d[m.group(2)] = H.unescape(v[1:-1] if v[0] in '"\'' else v)
    return d

def attr_html(d):
    out = []
    for k, v in d.items():
        if k == 'class':
            if v: out.append('class="%s"' % ' '.join(v))
        elif v is None: out.append(k)
        else: out.append('%s="%s"' % (k, H.escape(v, quote=True)))
    return (' ' + ' '.join(out)) if out else ''

def split_trailing_attrs(s):
    m = re.search(r'\s\{([#.][^{}]*)\}\s*$', s)
    if m: return s[:m.start()], parse_attrs(m.group(1))
    return s, {}

def tag_spec(spec):
    """'div.card.card-basic#x' → ('div', {...})"""
    m = re.match(r'([a-z][\w-]*)((?:[.#][\w-]+)*)$', spec)
    if not m: return None
    return m.group(1), parse_attrs(re.sub(r'([.#])', r' \1', m.group(2)))

# ---------------------------------------------------------------- bloki
class Ctx:
    def __init__(self, meta): self.meta = meta; self.toc = []

def parse_blocks(lines, ctx):
    """Lista linii → HTML. Kontenery ::: … ::: (zagnieżdżane), sekcje ##."""
    out = []; i = 0; n = len(lines); section_open = False
    while i < n:
        ln = lines[i]; st = ln.strip()
        if not st: i += 1; continue
        # kontener
        if st.startswith(':::') and st != ':::':
            depth = 1; j = i + 1
            while j < n:
                t = lines[j].strip()
                if t == ':::': depth -= 1
                elif t.startswith(':::') and not lines[i].strip().startswith('::: html') and not lines[i].strip().startswith('::: skrypt') and not lines[i].strip().startswith('::: styl'):
                    depth += 1
                if depth == 0: break
                j += 1
            if depth: raise SyntaxError('niezamknięty kontener w linii %d: %s' % (i + 1, st))
            out.append(container(st[3:].strip(), lines[i + 1:j], ctx)); i = j + 1; continue
        # sekcja
        if st.startswith('## '):
            if section_open: out.append('</section>')
            head, at = split_trailing_attrs(st[3:])
            num, _, title = head.partition(' | ') if ' | ' in head else ('', '', head)
            sid = at.get('id', '')
            ctx.toc.append((sid, num.strip(), re.sub(r'\[\[\w+:[^\]]+\]\]', '', title).strip()))
            pn = '<span class="part-num">%s</span> ' % num.strip() if num.strip() else ''
            out.append('<section%s>\n<div class="part-heading">%s%s</div>' % (attr_html(at), pn, inline(title.strip())))
            section_open = True; i += 1; continue
        # nagłówki
        m = re.match(r'(#{3,6}) (.*)$', st)
        if m:
            t, at = split_trailing_attrs(m.group(2)); lv = len(m.group(1))
            out.append('<h%d%s>%s</h%d>' % (lv, attr_html(at), inline(t), lv)); i += 1; continue
        # @model / @zlewka
        if st.startswith('@model '):
            parts = [p.strip() for p in st[7:].split(' | ')]
            vid = parts[0]; t = parts[1] if len(parts) > 1 else vid; d = parts[2] if len(parts) > 2 else ''
            code = ctx.meta.get('kod', '')
            out.append('<div class="che-lesson-viz-ref" data-che-lesson-viz="%s"><button type="button" data-che-open-viz="%s" '
                       'onclick="parent.postMessage({type:\'CHE_LESSON_OPEN_VISUAL\',visualId:\'%s\',lessonId:\'%s\'},\'*\')">'
                       '<b>%s</b><span>%s</span></button></div>' % (vid, vid, vid, code, inline(t), inline(d)))
            i += 1; continue
        if st.startswith('@zlewka '):
            head, _, label = st[8:].partition(' | ')
            prac, k = head.split(None, 1)
            if k.strip() == '-': k = ''
            out.append('<button class="che-prac-go" data-k="%s" data-prac="%s" type="button">%s</button>' % (H.escape(k.strip()), prac, inline(label or 'Zobacz w zlewce (pracownia GFX)')))
            i += 1; continue
        # wzór
        if st.startswith('$$ '):
            t, at = split_trailing_attrs(st[3:]); at.setdefault('class', []).insert(0, 'formula-lg')
            out.append('<div%s>%s</div>' % (attr_html(at), inline(t))); i += 1; continue
        # akapit / lista / tabela / surowy HTML — do pustej linii
        j = i
        while j < n and lines[j].strip() and not lines[j].strip().startswith(':::') and not (j > i and re.match(r'(#{2,6} |@model |@zlewka |\$\$ )', lines[j].strip())):
            j += 1
        blk = [x.rstrip() for x in lines[i:j]]; i = j
        out.append(leaf(blk, ctx))
    if section_open: out.append('</section>')
    return '\n'.join(x for x in out if x)

def first_tag(s):
    m = re.match(r'<([a-zA-Z][\w-]*)', s.strip()); return m.group(1).lower() if m else None

def leaf(blk, ctx):
    s0 = blk[0].strip()
    if s0.startswith('<') and first_tag(s0): return '\n'.join(blk)
    if s0.startswith('<!--'): return '\n'.join(blk)
    if re.match(r'[-*] ', s0) or re.match(r'\d+\. ', s0):
        ordered = bool(re.match(r'\d+\. ', s0)); items = []
        for x in blk:
            m = re.match(r'\s*(?:[-*]|\d+\.) (.*)$', x)
            if m and not x.startswith('  '): items.append(m.group(1))
            else: items[-1] += '\n' + x.strip()
        tag = 'ol' if ordered else 'ul'
        st = re.match(r'(\d+)\. ', s0); st = ' start="%s"' % st.group(1) if ordered and st.group(1) != '1' else ''
        return '<%s%s>\n%s\n</%s>' % (tag, st, '\n'.join('<li>%s</li>' % inline(t) for t in items), tag)
    if s0.startswith('|'):
        return table(blk)
    if s0.startswith('> '):
        t, at = split_trailing_attrs('\n'.join(x.strip()[2:] if x.strip().startswith('> ') else x.strip() for x in blk))
        at.setdefault('class', []).insert(0, 'mini-note')
        return '<p%s>%s</p>' % (attr_html(at), inline(t))
    t, at = split_trailing_attrs('\n'.join(x.strip() for x in blk))
    if t.startswith('\\'): t = t[1:]
    return '<p%s>%s</p>' % (attr_html(at), inline(t))

def cells(row):
    row = row.strip()
    if row.startswith('|'): row = row[1:]
    if row.endswith('|') and not row.endswith('\\|'): row = row[:-1]
    return [c.strip().replace('\\|', '|') for c in re.split(r'(?<!\\)\|', row)]

def table(blk):
    rows = [cells(r) for r in blk]
    head = None
    if len(rows) > 1 and all(re.match(r':?-{3,}:?$', c) for c in rows[1]):
        head = rows[0]; rows = rows[2:]
    o = ['<div class="table-wrap"><table>']
    if head: o.append('<thead><tr>%s</tr></thead>' % ''.join('<th>%s</th>' % inline(c) for c in head))
    o.append('<tbody>')
    for r in rows: o.append('<tr>%s</tr>' % ''.join('<td>%s</td>' % inline(c) for c in r))
    o.append('</tbody></table></div>')
    return '\n'.join(o)

# ---------------------------------------------------------------- kontenery
def parse_head(h):
    """'karta basic {#x} | etykieta | b' → name, args[], attrs{}, titles[]"""
    titles = []
    if ' | ' in h:
        h, *titles = h.split(' | ')
    elif h.endswith(' |'): h = h[:-2]
    at = {}
    m = re.search(r'\s\{(.*)\}\s*$', h)
    if m: at = parse_attrs(m.group(1)); h = h[:m.start()]
    parts = h.split()
    return parts[0], parts[1:], at, [t.strip() for t in titles]

def merge_cls(at, *cls):
    at = dict(at); at['class'] = list(cls) + at.get('class', []); return at

# nazwane kontenery (SYSTEM.md §3) → element z klasą
NAZWANE = {'regula': 'div.rule-box', 'checklista': 'div.checklist', 'bilans': 'div.bil',
           'historia': 'figure.hist-card', 'nie-myl': 'div.dont-confuse', 'wskazowki': 'div.tips-box'}

def container(head, body, ctx):
    hs = head.strip()
    for k, v in NAZWANE.items():
        if re.match(r':::\s*%s(\s|$|\|)' % re.escape(k), hs):
            head = hs.replace(k, v, 1); break
    name, args, at, titles = parse_head(head)
    inner = lambda: parse_blocks(body, ctx)
    t0 = titles[0] if titles else ''
    if name == 'html': return '\n'.join(body)
    if name == 'skrypt': return '<script>\n%s\n</script>' % '\n'.join(body)
    if name == 'styl': return ''  # zbierane osobno
    if name == 'karta':
        typ = args[0] if args else '-'
        cls = ['card'] + (['card-' + typ] if typ != '-' else [])
        lab = '<span class="card-label">%s</span>\n' % inline(t0) if titles else ''
        return '<div%s>\n%s%s\n</div>' % (attr_html(merge_cls(at, *cls)), lab, inner())
    if name == 'odp':
        return '<details%s><summary>%s</summary>\n%s\n</details>' % (attr_html(merge_cls(at, 'answer')), inline(t0), inner())
    if name == 'adv':
        tag = ' <span class="adv-tag">%s</span>' % inline(titles[1]) if len(titles) > 1 else ''
        return '<details%s><summary>%s%s</summary><div class="adv-body">\n%s\n</div></details>' % (attr_html(merge_cls(at, 'adv')), inline(t0), tag, inner())
    if name == 'minimum':
        at = dict(at); at.setdefault('id', 'minimum')
        return '<section%s><h3>%s</h3>\n%s\n</section>' % (attr_html(merge_cls(at, 'minimum-card')), inline(t0), inner())
    if name == 'rdzen':
        at = dict(at)
        return '<div%s>\n<div class="cp-title">%s</div>\n%s\n</div>' % (attr_html(merge_cls(at, 'core-path')), inline(t0), inner())
    if name == 'warstwy':
        rows = []
        for x in body:
            m = re.match(r'\s*- (\w+) \| (.*)$', x)
            if m: rows.append('<div class="layer-row"><span class="dot %s"></span><span>%s</span></div>' % (m.group(1), inline(m.group(2))))
        return '<div%s>\n%s\n</div>' % (attr_html(merge_cls(at, 'layer-legend')), '\n'.join(rows))
    if name == 'dosw':
        k = 0; grid = []
        while k < len(body) and body[k].strip():
            m = re.match(r'\s*([^:]+?)(::?) (.*)$', body[k])
            if not m: break
            v = inline(m.group(3))
            grid.append('<b>%s</b><span%s>%s</span>' % (inline(m.group(1)), ' class="formula"' if m.group(2) == '::' else '', v)); k += 1
        rest = parse_blocks(body[k:], ctx)
        return '<div%s><h5>%s</h5><div class="exp-grid">%s</div>%s</div>' % (attr_html(merge_cls(at, 'exp-card')), inline(t0), ''.join(grid), rest)
    if name == 'klinika':
        hd = titles or ['Błąd', 'Poprawnie', 'Dlaczego?']
        rows = [cells(x) for x in body if x.strip().startswith('|')]
        tr = ''.join('<tr class="error-row"><td class="col-blad" data-label="Błąd">%s</td><td class="col-ok" data-label="Poprawa">%s</td><td data-label="Dlaczego">%s</td></tr>' % tuple(inline(c) for c in r[:3]) for r in rows)
        return '<table%s><thead><tr>%s</tr></thead><tbody>%s</tbody></table>' % (attr_html(merge_cls(at, 'klinika-table')), ''.join('<th>%s</th>' % inline(h) for h in hd), tr)
    if name == 'slownik':
        items = []
        for x in body:
            if ' :: ' in x:
                a, b = x.strip().split(' :: ', 1)
                items.append('<div class="def-item"><dt>%s</dt><dd>%s</dd></div>' % (inline(a), inline(b)))
        return '<dl%s>%s</dl>' % (attr_html(at), ''.join(items))
    if name == 'fiszki':
        at = dict(at); at.setdefault('id', 'flashcards')
        cards = []
        for x in body:
            if not x.strip(): continue
            p = [c.strip() for c in x.strip().split(' | ')]
            tag = ''
            if len(p) > 2 and p[2]:
                tc, _, tt = p[2].partition(':')
                tag = '<span class="card-tag tag-%s">%s</span>' % (tc, inline(tt))
            cards.append('<button class="flashcard" type="button"><span class="front">%s</span><span class="back">%s</span>%s</button>' % (inline(p[0]), inline(p[1] if len(p) > 1 else ''), tag))
        return '<div%s>%s</div>' % (attr_html(merge_cls(at, 'flashcard-grid')), ''.join(cards))
    if name == 'test':
        qs = []; cur = None
        for x in body:
            s = x.strip()
            if s.startswith('? '): cur = {'q': s[2:], 'o': [], 'ok': 0, 'fb': ''}; qs.append(cur)
            elif s.startswith(('- ', '+ ')) and cur is not None:
                if s[0] == '+': cur['ok'] = len(cur['o'])
                cur['o'].append(s[2:])
            elif s.startswith('! ') and cur is not None: cur['fb'] = s[2:]
        o = []
        for i, q in enumerate(qs):
            ops = ''.join('<button type="button" class="quiz-opt" data-a="%d">%s</button>' % (j, inline(t)) for j, t in enumerate(q['o']))
            fb = ' data-fb="%s"' % H.escape(inline(q['fb']), quote=True) if q['fb'] else ''
            o.append('<div class="quiz-q" data-ok="%d"%s><h5>%d. %s</h5><div class="quiz-opts">%s</div></div>' % (q['ok'], fb, i + 1, inline(q['q']), ops))
        return '<div class="che-quiz" id="quizWrap">%s</div><div class="quiz-score" id="quizScore"></div>' % ''.join(o)
    # ogólny: ::: tag.klasa#id {atrybuty} — element z zawartością blokową
    ts = tag_spec(name)
    if not ts: raise SyntaxError('nieznany kontener: ' + head)
    tag, a0 = ts
    a0 = {**a0, **{k: v for k, v in at.items() if k != 'class'}}
    if at.get('class'): a0['class'] = a0.get('class', []) + at['class']
    body_html = inner()
    if titles:  # ::: details.x | podsumowanie
        body_html = '<summary>%s</summary>\n%s' % (inline(t0), body_html)
    return '<%s%s>\n%s\n</%s>' % (tag, attr_html(a0), body_html, tag)

# ---------------------------------------------------------------- lekcja
def front(text):
    meta = {}; body = text
    if text.startswith('---\n'):
        end = text.index('\n---\n', 4)
        for ln in text[4:end].split('\n'):
            if ':' in ln:
                k, v = ln.split(':', 1); k = k.strip(); v = v.strip()
                if k in meta: meta[k] = meta[k] + '\n' + v
                else: meta[k] = v
        body = text[end + 5:]
    for ang, pl in (('code', 'kod'), ('title', 'tytul'), ('subject', 'przedmiot'), ('description', 'opis')):
        if ang in meta and pl not in meta: meta[pl] = meta[ang]   # frontmatter prototypu ZIP
    return meta, body

def collect(name, lines):
    """zawartość wszystkich bloków ::: name (styl/skrypt na poziomie głównym)"""
    out = []; i = 0
    while i < len(lines):
        if lines[i].strip() == '::: ' + name:
            j = i + 1
            while lines[j].strip() != ':::': j += 1
            out.append('\n'.join(lines[i + 1:j])); i = j
        i += 1
    return out

# aliasy prototypu ZIP ($-makra) → kanon (SYSTEM.md §3); kanon przechodzi bez zmian
CALLOUT = {'bhp': 'warning', 'warn': 'warning', 'info': 'understand'}

def aliasy(text):
    out, stack = [], []
    lines = text.split('\n')
    i = 0
    while i < len(lines):
        ln = lines[i]; st = ln.strip()
        m = re.match(r'\$(karta|callout)\s+typ=(\w+)\s*(?:"([^"]*)")?\s*$', st)
        if m:
            typ = m.group(2) if m.group(1) == 'karta' else CALLOUT.get(m.group(2), 'understand')
            out.append('::: karta %s%s' % (typ, (' | ' + m.group(3)) if m.group(3) else '')); stack.append(':::'); i += 1; continue
        if st in ('$fiszka_talia', '$fiszki_panel') or st.startswith('$fiszki_panel '):
            out.append('::: fiszki'); stack.append(':::'); i += 1; continue
        if st == '$tabela_bledy':   # wiersze prototypu: temat | dobrze | źle → | źle | dobrze | temat |
            out.append('::: klinika | Błąd | Poprawnie | Temat'); i += 1
            while i < len(lines) and lines[i].strip() != '$end':
                c = [x.strip() for x in lines[i].strip().strip('|').split('|')]
                if len(c) >= 3: out.append('| %s | %s | %s |' % (c[2], c[1], c[0]))
                i += 1
            out.append(':::'); i += 1; continue
        if st == '$end':
            out.append(stack.pop() if stack else ':::'); i += 1; continue
        m = re.match(r'\$(?:fiszka|flip)\s+"([^"]*)"\s*\|\s*"([^"]*)"(?:\s+tag=(\w+))?', st)
        if m:
            row = '%s | %s%s' % (m.group(1), m.group(2), (' | %s:' % m.group(3)) if m.group(3) else '')
            if stack: out.append(row)
            else: out += ['::: fiszki', row, ':::']
            i += 1; continue
        m = re.match(r'\$gfx\s+view=([\w.-]+)(?:.*caption="([^"]*)")?', st) or re.match(r'\{\{gfx:([\w.-]+)\}\}()', st)
        if m:
            out.append('@model %s | %s | ' % (m.group(1), m.group(2) or 'Model')); i += 1; continue
        if st in ('@header', '@toc'):
            while i < len(lines) and lines[i].strip() != '@end': i += 1
            i += 1; continue
        out.append(ln); i += 1
    return '\n'.join(out)

def render(path):
    text = aliasy(open(path, encoding='utf-8').read())
    meta, body = front(text)
    lines = body.split('\n')
    ctx = Ctx(meta)
    main = parse_blocks(lines, ctx)
    leads = ''.join('<p class="lead">%s</p>' % inline(x) for x in meta.get('lead', '').split('\n') if x)
    hero = ('<section class="hero card"><div class="hero-kicker">%s</div><h1>%s</h1>%s<div class="tag-row">%s</div>'
            '<button type="button" class="adv-toggle" id="advToggle" aria-pressed="false">Pokaż treści akademickie</button>%s</section>') % (
        inline(meta.get('kicker', '')), inline(meta.get('tytul', '')), leads, inline(meta.get('plakietki', '')),
        ''.join('<p class="mini-note">%s</p>' % inline(x) for x in meta.get('uwaga', '').split('\n') if x))
    # spis treści z ## (minimum na początku, jeśli jest)
    toc = []
    if 'id="minimum"' in main: toc.append('<a class="toc-link" href="#minimum">Minimum E8</a>')
    for sid, num, t in ctx.toc:
        if not sid: continue
        lab = (num + '. ' if num and re.match(r'[\dA-Z.]+$', num) else '') + re.sub(r'<[^>]+>', '', inline(t))
        toc.append('<a class="toc-link" href="#%s">%s</a>' % (sid, lab))
    tochtml = '<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links">%s</nav></details>' % ''.join(toc)
    # wstaw spis po minimum (albo po hero)
    if '<section class="minimum-card"' in main:
        k = main.index('</section>', main.index('<section class="minimum-card"')) + len('</section>')
        main = main[:k] + '\n' + tochtml + main[k:]
    else:
        main = tochtml + '\n' + main
    foot = ''
    if meta.get('stopka'):
        foot = '<footer class="footer">\n<p>%s</p>\n<p style="opacity:0.7;">Ucz się świadomie, nie na pamięć.</p>\n</footer>' % inline(meta['stopka'])
    css = open(os.path.join(ROOT, 'engine', 'src', 'lekcja', 'lekcja.css'), encoding='utf-8').read()
    js = open(os.path.join(ROOT, 'engine', 'src', 'lekcja', 'rozszerzenia.js'), encoding='utf-8').read() + '\n' + open(os.path.join(ROOT, 'engine', 'src', 'lekcja', 'lekcja.js'), encoding='utf-8').read()
    own_css = '\n'.join(collect('styl', lines))
    doc = ('<!DOCTYPE html>\n<html lang="pl">\n<head>\n<meta charset="utf-8"/>\n<meta content="width=device-width,initial-scale=1.0" name="viewport"/>\n'
           '<title>%s · %s</title>\n<style id="che-lekcja-css">\n%s\n</style>\n%s</head>\n<body>\n'
           '<script>\n%s\n</script>\n<a class="skip-link" href="#main">Przejdź do treści</a>\n<main class="page" id="main">\n%s\n%s\n%s\n</main>\n'
           '</body>\n</html>\n') % (
        meta.get('kod', ''), re.sub(r'<[^>]+>', '', inline(meta.get('tytul', ''))), css,
        ('<style id="che-lekcja-wlasne">\n%s\n</style>\n' % own_css) if own_css else '', js, hero, main, foot)
    return meta, doc

def page(meta, doc, fn):
    """strona w dist/: treść lekcji (JSON) + che-viz.js + start"""
    kod = meta.get('kod', ''); sid = 'che-lekcja-src'
    return ('<!DOCTYPE html>\n<html lang="pl">\n<head>\n<meta charset="utf-8"/>\n'
            '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>\n'
            '<title>%s · %s</title>\n'
            # ekran startowy aplikacji (#che-landing) silnik chowa dopiero stylem z końca che-viz.js — do tego czasu był widoczny
            '<style id="che-bez-startu">#che-landing,#che-project-shell{display:none!important}</style>\n</head>\n<body class="che-landing">\n'
            '<script type="application/json" id="%s">%s</script>\n<script src="che-viz.js"></script>\n'
            '<script>if(!window.CHE||!CHE.STANDALONE)document.body.innerHTML=\'<p style="font:16px system-ui;padding:20px">Nie wczytano pliku che-viz.js. Na telefonie otwórz wersję z folderu <b>jeden_plik</b>.</p>\'</script>\n'
            '<script>CHE.STANDALONE.open(%s,{source:%s,title:%s,uid:%s})</script>\n</body>\n</html>\n') % (
        kod, H.escape(re.sub(r'<[^>]+>', '', meta.get('tytul', ''))), sid,
        json.dumps(doc, ensure_ascii=False).replace('</', '<\\/'), json.dumps(kod), json.dumps(sid),
        json.dumps(re.sub(r'<[^>]+>', '', meta.get('tytul', '')), ensure_ascii=False), json.dumps(meta.get('uid', '')))

def index(metas):
    rows = ''.join('<a class="k" href="%s.html"><b>%s</b><span>%s</span><small>%s</small></a>' % (
        fn, m.get('kod', ''), H.escape(re.sub(r'<[^>]+>', '', m.get('tytul', ''))), H.escape(m.get('opis', ''))) for fn, m in metas)
    tpl = open(os.path.join(ROOT, 'engine', 'src', 'lekcja', 'index.html'), encoding='utf-8').read()
    return tpl.replace('<!--LEKCJE-->', rows)

if __name__ == '__main__':
    args = sys.argv[1:] or sorted(os.path.join(MD, f) for f in os.listdir(MD) if f.endswith('.md'))
    metas = []
    for p in args:
        meta, doc = render(p)
        fn = os.path.splitext(os.path.basename(p))[0]
        pg = page(meta, doc, fn)
        open(os.path.join(ROOT, 'dist', fn + '.html'), 'w', encoding='utf-8').write(pg)
        # wersja jednoplikowa (telefon, e-mail): che-viz.js wklejony do środka
        os.makedirs(os.path.join(ROOT, 'dist', 'jeden_plik'), exist_ok=True)
        # silnik: odchudzony dla tej lekcji (dist/viz/<lekcja>.js, tools/silnik.py / odchudz.py) albo pełny
        vp = os.path.join(ROOT, 'dist', 'viz', fn + '.js')
        if not os.path.exists(vp): vp = os.path.join(ROOT, 'dist', 'viz', 'wspolny.js')
        if not os.path.exists(vp): vp = os.path.join(ROOT, 'dist', 'che-viz.js')
        viz = open(vp, encoding='utf-8').read().replace('</', '<\\/')
        a, b = pg.split('<script src="che-viz.js"></script>', 1)
        one = a + '<script>\n' + viz + '\n</script>' + b
        # w pliku pojedynczym nie ma spisu obok — chowamy przycisk „Spis lekcji”
        one = one.replace('</body>', '<script>(function(n){var t=setInterval(function(){var b=document.getElementById("che-lfs-close");if(b||++n>100){clearInterval(t);if(b)b.style.display="none"}},50)})(0)</script>\n</body>', 1)
        open(os.path.join(ROOT, 'dist', 'jeden_plik', fn + '.html'), 'w', encoding='utf-8').write(one)
        os.makedirs(os.path.join(ROOT, 'dist', '_tresc'), exist_ok=True)
        open(os.path.join(ROOT, 'dist', '_tresc', fn + '.html'), 'w', encoding='utf-8').write(doc)
        metas.append((fn, meta)); print('ok', fn, len(doc))
    allm = []
    for f in sorted(os.listdir(MD)):
        if f.endswith('.md'):
            allm.append((f[:-3], front(open(os.path.join(MD, f), encoding='utf-8').read())[0]))
    open(os.path.join(ROOT, 'dist', 'index.html'), 'w', encoding='utf-8').write(index(allm))
