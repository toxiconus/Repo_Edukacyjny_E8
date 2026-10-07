#!/usr/bin/env python3
"""md → HTML lekcji BIO. Parser wspólny z chemią (chemia/che/narzedzia/md2html.py), wygląd i grafiki własne.
Użycie: python3 biologia/bio/narzedzia/md2html_bio.py [md/L010_*.md ...]   → biologia/bio/dist/<plik>.html (+ index.html)
Wynik: jeden samodzielny plik HTML (style + bio-viz.js w środku) — działa offline i na telefonie.

Dodatki składni (ponad SZABLON_LEKCJI.md chemii):
  @viz <id> {klucz="wartość" ...} | Tytuł | podpis     → grafika z biblioteki szablon/bio-viz.js (lista: BIO_KATALOG.md)
  ::: mity | nagłówek                                   → karty „mit → poprawka”, linie:  mit || poprawka
  ::: drzewo                                            → mapa pojęć z listy wcięć (2 spacje = poziom)
"""
import os, io, re, sys, json, importlib.util, html as H, tempfile

BIO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.path.dirname(os.path.dirname(BIO))
spec = importlib.util.spec_from_file_location('che_md2html', os.path.join(REPO, 'chemia', 'che', 'narzedzia', 'md2html.py'))
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
m.ROOT = BIO
SZ = os.path.join(BIO, 'szablon')

_open = open
def _bio_open(path, *a, **k):
    # parser dokleja szablon/rozszerzenia.js + szablon/lekcja.js — u nas rozszerzenia = biblioteka grafik
    if os.path.dirname(os.path.abspath(path)) == SZ:
        b = os.path.basename(path)
        if b == 'rozszerzenia.js': path = os.path.join(SZ, 'bio-viz.js')
        elif b == 'lekcja.css':  # baza wspólna z chemią + warstwa bio
            return io.StringIO(''.join(_open(os.path.join(SZ, f), encoding='utf-8').read() + '\n' for f in ('baza-wspolna.css', 'bio-warstwa.css')))
    return _open(path, *a, **k)
m.open = _bio_open

def viz_line(st):
    head, *titles = [p.strip() for p in st[5:].split(' | ')]
    mm = re.match(r'([\w-]+)\s*(?:\{(.*)\})?\s*$', head)
    if not mm: raise SyntaxError('zła linia @viz: ' + st)
    vid, opts = mm.group(1), {}
    for k, v in re.findall(r'([\w-]+)="([^"]*)"', mm.group(2) or ''): opts[k] = v
    t = m.inline(titles[0]) if titles else ''
    cap = m.inline(titles[1]) if len(titles) > 1 else ''
    fc = ''
    if t or cap:
        fc = '<figcaption>%s%s</figcaption>' % ('<b>%s</b>' % t if t else '', ' <span>%s</span>' % cap if cap else '')
    return '<figure class="bio-fig" data-bio-viz="%s" data-opt="%s"><div class="bio-fig-body"></div>%s</figure>' % (
        vid, H.escape(json.dumps(opts, ensure_ascii=False), quote=True), fc)

def mity(title, body):
    cards = []
    for x in body:
        if '||' in x:
            a, b = [p.strip() for p in x.split('||', 1)]
            cards.append('<div class="myth"><p class="myth-x"><span>Mit</span>%s</p><p class="myth-ok"><span>Poprawnie</span>%s</p></div>' % (m.inline(a), m.inline(b)))
    hd = '<div class="myth-head">%s</div>' % m.inline(title) if title else ''
    return '<div class="myth-grid">%s%s</div>' % (hd, ''.join(cards))

def drzewo(body):
    out = ['<div class="bio-tree">']; stack = []
    for x in body:
        if not x.strip(): continue
        lv = (len(x) - len(x.lstrip(' '))) // 2
        t = re.sub(r'^[-*]\s*', '', x.strip())
        while stack and stack[-1] >= lv: out.append('</li></ul>' if len(stack) == 1 or True else ''); stack.pop()
        out.append('<ul><li><span>%s</span>' % m.inline(t)); stack.append(lv)
    while stack: out.append('</li></ul>'); stack.pop()
    out.append('</div>')
    # scal „</li></ul><ul><li>” na tym samym poziomie w rodzeństwo
    s = ''.join(out)
    for _ in range(50):
        s2 = s.replace('</li></ul><ul><li>', '</li><li>')
        if s2 == s: break
        s = s2
    return s

def preprocess(text):
    L = text.split('\n'); out = []; i = 0
    while i < len(L):
        st = L[i].strip()
        if st.startswith('@viz '):
            out += ['', viz_line(st), '']; i += 1; continue
        if st.startswith('::: mity') or st == '::: drzewo':
            j = i + 1
            while L[j].strip() != ':::': j += 1
            title = st.split(' | ', 1)[1] if ' | ' in st else ''
            html = mity(title, L[i + 1:j]) if st.startswith('::: mity') else drzewo(L[i + 1:j])
            out += ['::: html', html, ':::']; i = j + 1; continue
        out.append(L[i]); i += 1
    return '\n'.join(out)

BAR = ('<div class="bio-bar" role="toolbar" aria-label="Narzędzia lekcji">'
       '<a class="bio-bar-btn" href="#spis" aria-label="Spis treści">Spis</a>'
       '<span class="bio-bar-title">%s</span>'
       '<a class="bio-bar-btn" href="#main" aria-label="Na górę">↑</a></div>')

def build(path):
    src = _open(path, encoding='utf-8').read()
    tmp = tempfile.NamedTemporaryFile('w', suffix='.md', delete=False, encoding='utf-8')
    tmp.write(preprocess(src)); tmp.close()
    try: meta, doc = m.render(tmp.name)
    finally: os.unlink(tmp.name)
    title = re.sub(r'<[^>]+>', '', m.inline(meta.get('tytul', '')))
    doc = doc.replace('<title>%s · ' % meta.get('kod', ''), '<title>BIO %s · ' % meta.get('kod', ''), 1)
    doc = doc.replace('<details class="toc-item" open>', '<details class="toc-item" id="spis" open>', 1)
    doc = doc.replace('<main class="page" id="main">', (BAR % H.escape(meta.get('kod', '') + ' · ' + title)) + '\n<main class="page" id="main">', 1)
    return meta, doc

if __name__ == '__main__':
    mdd = os.path.join(BIO, 'md'); dist = os.path.join(BIO, 'dist'); os.makedirs(dist, exist_ok=True)
    args = sys.argv[1:] or sorted(os.path.join(mdd, f) for f in os.listdir(mdd) if f.endswith('.md'))
    for p in args:
        meta, doc = build(p)
        fn = os.path.splitext(os.path.basename(p))[0]
        _open(os.path.join(dist, fn + '.html'), 'w', encoding='utf-8').write(doc)
        print('ok', fn, len(doc))
    allm = [(f[:-3], m.front(_open(os.path.join(mdd, f), encoding='utf-8').read())[0]) for f in sorted(os.listdir(mdd)) if f.endswith('.md')]
    _open(os.path.join(dist, 'index.html'), 'w', encoding='utf-8').write(m.index(allm))
