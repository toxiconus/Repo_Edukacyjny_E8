#!/usr/bin/env python3
"""md → HTML lekcji dowolnego przedmiotu, na wspólnym szablonie (szablon/).

Użycie:
  python3 narzedzia/lekcja_html.py -p pol polski/podstawy/POL.02.G03.przymiotnik.md [...]   [-o katalog]
  python3 narzedzia/lekcja_html.py -p bio biologia/bio/md/BIO.02.L010.dna_od_zera.md
Przedmioty (-p): che, bio, pol, ang, oli — motyw w szablon/motywy/<p>.css. Domyślne wyjście: <katalog pliku>/../html/.
Wynik: jeden samodzielny plik HTML (style, skrypt i grafiki przedmiotu w środku) — działa offline i na telefonie.

Parser: wspólny z chemią (chemia/che-modular/tools/md2html.py — dialekt SZABLON_LEKCJI). Dodatki ponad chemię:
  @viz <id> {k="v"} | Tytuł | podpis   grafika z biblioteki przedmiotu (bio: bio-viz.js)
  @opis tekst                          OBOWIĄZKOWO pod każdą grafiką: co widać + wniosek (HTML: <!-- OPIS -->)
  ::: mity | nagłówek                  linie:  mit || poprawnie
  ::: drzewo                           mapa pojęć z listy wcięć (2 spacje = poziom)
  ::: cytat | źródło                   cytat z lektury/tekstu (krój szeryfowy)
  ::: dialog                           linie:  A: wypowiedź || tłumaczenie (opcjonalnie)
  ::: slowka | Wyraz | Znaczenie | Przykład   linie:  wyraz || znaczenie || przykład
Nagłówki „## 6. Tytuł” bez {#id} dostają numer i kotwicę automatycznie (spis treści działa w każdym pliku).
"""
import os, re, sys, json, argparse, importlib.util, html as H

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SZ = os.path.join(REPO, 'szablon')
_spec = importlib.util.spec_from_file_location('che_md2html', os.path.join(REPO, 'chemia', 'che-modular', 'tools', 'md2html.py'))
m = importlib.util.module_from_spec(_spec); _spec.loader.exec_module(m)
sys.path.insert(0, os.path.join(REPO, 'narzedzia'))
import opis_wizualizacji as OPIS

_leaf = m.leaf
def _leaf_wciecie(blk, ctx):   # lista zaczynająca się od wcięcia (np. po akapicie) — zdejmij wspólne wcięcie
    ind = len(blk[0]) - len(blk[0].lstrip(' '))
    if ind: blk = [x[ind:] if not x[:ind].strip() else x for x in blk]
    return _leaf(blk, ctx)
m.leaf = _leaf_wciecie

PRZEDMIOTY = {'che': 'Chemia', 'bio': 'Biologia', 'pol': 'Język polski', 'ang': 'Język angielski', 'oli': 'Olimpiada'}
VIZ = {'bio': os.path.join(REPO, 'biologia', 'bio', 'szablon', 'bio-viz.js')}   # biblioteki grafik przedmiotów

def rd(p): return open(p, encoding='utf-8').read()

def viz_line(st, p):
    head, *titles = [x.strip() for x in st[5:].split(' | ')]
    mm = re.match(r'([\w-]+)\s*(?:\{(.*)\})?\s*$', head)
    if not mm: raise SyntaxError('zła linia @viz: ' + st)
    vid, opts = mm.group(1), dict(re.findall(r'([\w-]+)="([^"]*)"', mm.group(2) or ''))
    t = m.inline(titles[0]) if titles else ''
    cap = m.inline(titles[1]) if len(titles) > 1 else ''
    fc = '<figcaption>%s%s</figcaption>' % ('<b>%s</b>' % t if t else '', ' <span>%s</span>' % cap if cap else '') if (t or cap) else ''
    attr = 'data-bio-viz' if p == 'bio' else 'data-viz'
    extra = ' bio-fig' if p == 'bio' else ''
    return '<figure class="lk-fig%s" %s="%s" data-opt="%s"><div class="lk-fig-body%s"></div>%s</figure>' % (
        extra, attr, vid, H.escape(json.dumps(opts, ensure_ascii=False), quote=True), extra and ' bio-fig-body', fc)

def mity(title, body):
    cards = ['<div class="myth"><p class="myth-x"><span>Mit</span>%s</p><p class="myth-ok"><span>Poprawnie</span>%s</p></div>' % tuple(
        m.inline(x.strip()) for x in ln.split('||', 1)) for ln in body if '||' in ln]
    return '<div class="myth-grid">%s%s</div>' % ('<div class="myth-head">%s</div>' % m.inline(title) if title else '', ''.join(cards))

def drzewo(body):
    out = ['<div class="lk-tree">']; stack = []
    for x in body:
        if not x.strip(): continue
        lv = (len(x) - len(x.lstrip(' '))) // 2
        while stack and stack[-1] >= lv: out.append('</li></ul>'); stack.pop()
        out.append('<ul><li><span>%s</span>' % m.inline(re.sub(r'^[-*]\s*', '', x.strip()))); stack.append(lv)
    out += ['</li></ul>'] * len(stack) + ['</div>']
    s = ''.join(out)
    while '</li></ul><ul><li>' in s: s = s.replace('</li></ul><ul><li>', '</li><li>')
    return s

def cytat(title, body):
    paras = '\n'.join(body).strip().split('\n\n')
    bq = ''.join('<p>%s</p>' % m.inline(p.replace('\n', '<br>')) for p in paras if p.strip())
    return '<figure class="lk-quote"><blockquote>%s</blockquote>%s</figure>' % (bq, '<figcaption>%s</figcaption>' % m.inline(title) if title else '')

def dialog(body):
    rows, first = [], None
    for ln in body:
        mm = re.match(r'\s*([^:]{1,24}):\s+(.*)$', ln)
        if not mm: continue
        who, say = mm.group(1).strip(), mm.group(2)
        first = first or who
        say, _, tr = say.partition('||')
        rows.append('<div class="lk-line%s"><span class="lk-who">%s</span><div class="lk-say">%s%s</div></div>' % (
            '' if who == first else ' b', m.inline(who), m.inline(say.strip()), '<small>%s</small>' % m.inline(tr.strip()) if tr.strip() else ''))
    return '<div class="lk-dialog">%s</div>' % ''.join(rows)

def slowka(titles, body):
    hd = titles or ['Wyraz', 'Znaczenie', 'Przykład']
    rows = ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % m.inline(c.strip()) for c in ln.split('||')) for ln in body if '||' in ln)
    return '<div class="table-wrap"><table class="lk-vocab"><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (
        ''.join('<th>%s</th>' % m.inline(h) for h in hd), rows)

def bloki_kodu(L):
    """```…``` → <pre> w jednej linii (żaden późniejszy krok nie zmienia jego treści; układ ASCII zostaje)."""
    out = []; i = 0
    while i < len(L):
        mm = re.match(r'\s*```\s*([\w-]*)\s*$', L[i])
        if mm:
            j = i + 1
            while j < len(L) and not L[j].strip().startswith('```'): j += 1
            body = H.escape('\n'.join(L[i + 1:j])).replace('\n', '&#10;')
            out += ['', '::: html', '<pre class="lk-pre" data-jezyk="%s"><code>%s</code></pre>' % (mm.group(1) or 'tekst', body), ':::', '']
            i = j + 1; continue
        out.append(L[i]); i += 1
    return out

def poziomy(L):
    """Ujednolica nagłówki: tytuł „# …” na górze znika (jest w nagłówku lekcji), najpłytszy poziom
    występujący ≥3 razy (lub najgłębszy obecny) staje się sekcją „##”, głębsze — „###”/„####”."""
    kod = False; idx = []
    for i, ln in enumerate(L):
        mm = re.match(r'(#{1,4}) (\S.*)$', ln) if not kod else None
        if mm: idx.append((i, len(mm.group(1))))
    if not idx: return L
    lv = [l for _, l in idx]
    if lv.count(1) == 1 and idx[0][1] == 1:   # tytuł
        L[idx[0][0]] = ''; idx = idx[1:]; lv = lv[1:]
    if not idx: return L
    sec = next((k for k in range(1, 5) if lv.count(k) >= 3), max(lv))
    for i, l in idx:
        nowy = 2 if l <= sec else min(4, 2 + l - sec)
        L[i] = '#' * nowy + L[i][l:]
    return L

def preprocess(text, p):
    L = text.split('\n'); fm = 0
    if L and L[0].strip() == '---':   # front matter zostaje bez zmian
        fm = next((k for k in range(1, len(L)) if L[k].strip() == '---'), 0) + 1
    out = L[:fm]; L = poziomy(bloki_kodu(L[fm:])); i = 0; nsec = 0
    while i < len(L):
        st = L[i].strip()
        if st.startswith('@viz '):
            out += ['', viz_line(st, p), '']; i += 1; continue
        if st.startswith('@opis '):
            out += ['::: html', OPIS.komentarz(st[6:]), ':::']; i += 1; continue
        mm = re.match(r':::\s*(mity|drzewo|cytat|dialog|slowka)\b(.*)$', st)
        if mm:
            j = i + 1
            while j < len(L) and L[j].strip() != ':::': j += 1
            if j == len(L): raise SyntaxError('niezamknięty ::: %s (linia %d)' % (mm.group(1), i + 1))
            parts = [x.strip() for x in mm.group(2).split('|')][1:]
            kind, body = mm.group(1), L[i + 1:j]
            h = {'mity': lambda: mity(parts[0] if parts else '', body), 'drzewo': lambda: drzewo(body),
                 'cytat': lambda: cytat(parts[0] if parts else '', body), 'dialog': lambda: dialog(body),
                 'slowka': lambda: slowka(parts, body)}[kind]()
            out += ['::: html', h, ':::']; i = j + 1; continue
        if st.startswith('## ') and '{#' not in st:   # automatyczna kotwica + numer
            nsec += 1; t = st[3:].strip()
            if ' | ' not in t:
                mn = re.match(r'(\d+[A-Za-z]?(?:\.\d+)*)\.?\s+(.*)$', t)
                t = '%s | %s' % (mn.group(1), mn.group(2)) if mn else t
            out.append('## %s {#s%d}' % (t, nsec)); i += 1; continue
        if st.startswith('<!--') and st.endswith('-->'):   # komentarz w jednej linii — osobny blok, żeby nie połknął akapitu
            out += [L[i], '']; i += 1; continue
        if re.fullmatch(r'(-{3,}|\*{3,}|_{3,})', st):   # linia pozioma
            out += ['::: html', '<hr class="lk-hr"/>', ':::']; i += 1; continue
        out.append(L[i]); i += 1
    s = '\n'.join(out)
    return re.sub(r'\[\[([^\]:\[]+)\]\]', r'[[contest:\1]]', s)   # [[LKO]] → plakietka

def z_nazwy(path):
    """kod z nazwy pliku: PRZ.NN.KOD.slug (np. BIO.02.L011.jak_dna…) albo dawne KOD_slug"""
    b = os.path.basename(path)
    mm = re.match(r'[A-Z]{3}\.[\w]+\.([A-Z]+\d*[A-Za-z]?)\.', b) or re.match(r'(?:PL_|EN_)?([A-Z]+\d+[A-Z]?)_', b)
    return mm.group(1) if mm else ''

def render(path, p):
    surowy = rd(path)
    meta0, body0 = m.front(surowy)
    pierwszy = re.search(r'(?m)^# (.+)$', body0)   # „# KOD — Tytuł” w plikach bez nagłówka YAML
    text = m.aliasy(preprocess(surowy, p))
    meta, body = m.front(text)
    if not meta.get('kod'): meta['kod'] = z_nazwy(path)
    if not meta.get('tytul') and pierwszy:
        t = pierwszy.group(1).strip()
        mm = re.match(r'(?:%s\s*[—–-]\s*)(.+)$' % re.escape(meta['kod']), t) if meta['kod'] else None
        meta['tytul'] = mm.group(1) if mm else t
    lines = body.split('\n')
    ctx = m.Ctx(meta)
    main = m.parse_blocks(lines, ctx)
    kod, tyt = meta.get('kod', ''), m.inline(meta.get('tytul', ''))
    czysty = re.sub(r'<[^>]+>', '', tyt)
    kicker = meta.get('kicker') or ('%s, lekcja %s' % (PRZEDMIOTY[p], kod) if kod else PRZEDMIOTY[p])
    leads = ''.join('<p class="lead">%s</p>' % m.inline(x) for x in meta.get('lead', '').split('\n') if x)
    info = [(k, meta[k]) for k in ('zakres', 'powiazania', 'czas') if meta.get(k)]
    metah = '<div class="lk-meta">%s</div>' % ''.join('<span><b>%s:</b> %s</span>' % ({'zakres': 'Zakres', 'powiazania': 'Powiązania', 'czas': 'Czas'}[k], m.inline(v)) for k, v in info) if info else ''
    hero = ('<section class="hero card"><div class="hero-kicker">%s</div><h1>%s</h1>%s<div class="tag-row">%s</div>%s'
            '<button type="button" class="adv-toggle" id="advToggle" aria-pressed="false">Pokaż treści akademickie</button>%s</section>') % (
        m.inline(kicker), tyt, leads, m.inline(meta.get('plakietki', '')), metah,
        ''.join('<p class="mini-note">%s</p>' % m.inline(x) for x in meta.get('uwaga', '').split('\n') if x))
    toc = ['<a class="toc-link" href="#minimum">Minimum E8</a>'] if 'id="minimum"' in main else []
    for sid, num, t in ctx.toc:
        if sid:
            lab = (num + '. ' if num and re.match(r'[\dA-Z.]+$', num) else '') + re.sub(r'<[^>]+>', '', m.inline(t))
            toc.append('<a class="toc-link" href="#%s">%s</a>' % (sid, lab))
    tochtml = '<details class="toc-item" id="spis" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links">%s</nav></details>' % ''.join(toc)
    if '<section class="minimum-card"' in main:
        k = main.index('</section>', main.index('<section class="minimum-card"')) + len('</section>')
        main = main[:k] + '\n' + tochtml + main[k:]
    else:
        main = tochtml + '\n' + main
    foot = '<footer class="footer"><p>%s</p></footer>' % m.inline(meta['stopka']) if meta.get('stopka') else ''
    css = '\n'.join(rd(os.path.join(SZ, f)) for f in ('baza.css', 'ulepszenia.css', os.path.join('motywy', p + '.css')))
    own = '\n'.join(m.collect('styl', lines))
    js = (rd(VIZ[p]) + '\n' if p in VIZ else '') + rd(os.path.join(SZ, 'lekcja.js'))
    bar = ('<header class="lk-bar"><span class="lk-subj"><i></i>%s</span><span class="lk-title">%s</span>'
           '<a class="lk-btn" href="#spis" aria-label="Spis treści">Spis</a>'
           '<button class="lk-btn" id="lkMotyw" type="button" aria-label="Przełącz tryb jasny lub ciemny"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor"/></svg></button>'
           '<a class="lk-btn" href="#main" aria-label="Na górę">↑</a><span class="lk-prog" aria-hidden="true"></span></header>') % (
        H.escape(PRZEDMIOTY[p]), H.escape((kod + ' ' if kod else '') + czysty))
    doc = ('<!DOCTYPE html>\n<html lang="pl" data-przedmiot="%s">\n<head>\n<meta charset="utf-8"/>\n<meta name="viewport" content="width=device-width,initial-scale=1"/>\n'
           '<title>%s · %s</title>\n<style id="lekcja-css">\n%s\n</style>\n%s</head>\n<body>\n<a class="skip-link" href="#main">Przejdź do treści</a>\n%s\n'
           '<main class="page" id="main">\n%s\n%s\n%s\n</main>\n<script>\n%s\n</script>\n</body>\n</html>\n') % (
        p, H.escape(kod), H.escape(czysty), css, ('<style id="lekcja-wlasne">\n%s\n</style>\n' % own) if own else '',
        bar, hero, main, foot, js)
    return meta, doc

def main():
    ap = argparse.ArgumentParser(description='md → HTML lekcji (wspólny szablon)')
    ap.add_argument('-p', '--przedmiot', required=True, choices=sorted(PRZEDMIOTY))
    ap.add_argument('-o', '--out', help='katalog wyjściowy')
    ap.add_argument('--bez-opisu', action='store_true', help='nie sprawdzaj @opis (tylko podgląd starych plików)')
    ap.add_argument('pliki', nargs='+')
    a = ap.parse_args()
    if not a.bez_opisu: OPIS.egzekwuj(a.pliki)
    bledy = 0
    for f in a.pliki:
        try: meta, doc = render(f, a.przedmiot)
        except Exception as e:
            bledy += 1; print('BŁĄD', f, '—', type(e).__name__, e); continue
        out = a.out or os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(f))), 'html')
        os.makedirs(out, exist_ok=True)
        dst = os.path.join(out, os.path.splitext(os.path.basename(f))[0] + '.html')
        open(dst, 'w', encoding='utf-8').write(doc)
        print('ok', os.path.relpath(dst, REPO), len(doc) // 1024, 'KB')
    if bledy: sys.exit(1)

if __name__ == '__main__':
    main()
