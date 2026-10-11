"""Lekka lekcja chemii: wspólny szablon (szablon/) + tylko modele użyte w lekcji, bez silnika che-viz.js.
Użycie: python3 tools/lite.py lessons-md/gotowe/R03A_*.md [...]  → dist/lite/<plik>.html
Model trafia do wersji lekkiej, gdy jego blok w engine/src/lekcja/rozszerzenia.js nie korzysta z silnika
(LAB/GFX, dane reakcji itp.). Pozostałe @model i @zlewka zostają jako przycisk z informacją — raport na końcu."""
import os, re, sys, json, html as H, importlib.util
TOOLS = os.path.dirname(os.path.abspath(__file__)); CM = os.path.dirname(TOOLS); REPO = os.path.dirname(os.path.dirname(CM))
spec = importlib.util.spec_from_file_location('lekcja_html', os.path.join(REPO, 'narzedzia', 'lekcja_html.py'))
LH = importlib.util.module_from_spec(spec); spec.loader.exec_module(LH)
SRC = os.path.join(CM, 'engine', 'src')
CIEZKIE = ('C.LAB', 'CHE.LAB', 'GFX', 'CHE.STECH', 'CHE.IONIC', 'CHE.REACTION', 'CHE.RX', 'CHE.PHYS', 'CHE.COLORS', 'CHE.EL', 'CHE.DATA', 'C.DATA')

def rd(p): return open(p, encoding='utf-8').read()

def bloki():
    """top-level IIFE z rozszerzenia.js: [(tekst, [id modeli])]"""
    s = rd(os.path.join(SRC, 'lekcja', 'rozszerzenia.js')).split('\n'); out = []; cur = None
    for ln in s:
        if cur is None and ln.startswith('(function(){'): cur = [ln]; continue
        if cur is not None:
            cur.append(ln)
            if ln.startswith('})();'):
                t = '\n'.join(cur); out.append((t, re.findall(r"define\('([\w-]+)'", t))); cur = None
    return out

def lite(path):
    meta, doc = LH.render(path, 'che')
    ids = re.findall(r'data-che-lesson-viz="([\w-]+)"', doc)
    B = bloki(); uzyte, brak = [], []
    for vid in dict.fromkeys(ids):
        b = next((x for x in B if vid in x[1]), None)
        if b and not any(c in b[0].replace('C.DATA||{}', '') for c in CIEZKIE):   # C.DATA||{} = zależność opcjonalna
            if b[0] not in uzyte: uzyte.append(b[0])
        else: brak.append(vid)
    ok = set(v for b in uzyte for v in re.findall(r"define\('([\w-]+)'", b))
    def fig(mm):
        vid, t, d = mm.group(1), mm.group(2), mm.group(3)
        if vid not in ok:
            return '<div class="che-lesson-viz-ref lk-offline"><button type="button" disabled><b>%s</b><span>%s — model dostępny w pełnej wersji lekcji (z silnikiem CHE)</span></button></div>' % (t, d)
        return '<figure class="lk-fig che-fig" data-che-viz="%s"><div class="lk-fig-body"></div><figcaption><b>%s</b> <span>%s</span></figcaption></figure>' % (vid, t, d)
    doc = re.sub(r'<div class="che-lesson-viz-ref" data-che-lesson-viz="([\w-]+)">.*?<b>(.*?)</b><span>(.*?)</span></button></div>', fig, doc, flags=re.S)
    nz = len(re.findall(r'class="che-prac-go"', doc))
    doc = re.sub(r'<button class="che-prac-go"[^>]*>(.*?)</button>', r'<button class="che-prac-go lk-offline" type="button" disabled>\1 — w pełnej wersji lekcji</button>', doc, flags=re.S)
    css = rd(os.path.join(SRC, 'lekcja', 'nawigacja.css')) + '\n.lk-hint{font-size:13px;opacity:.75;margin:0 0 8px}.lk-err{color:#b91c1c}.lk-offline button,.lk-offline{opacity:.6;cursor:default}.che-lite-host{overflow-x:auto}\n'
    doc = doc.replace('</style>\n', '\n' + css + '</style>\n', 1)
    js = rd(os.path.join(SRC, 'lite', 'che-lite.js')) + '\n' + '\n'.join(uzyte) + '\nCHE.LITE_MOUNT();\n' + rd(os.path.join(SRC, 'lekcja', 'nawigacja.js'))
    i = doc.rindex('</body>'); doc = doc[:i] + '<script>\n' + js + '\n</script>\n' + doc[i:]
    return doc, sorted(ok & set(ids)), brak, nz

if __name__ == '__main__':
    out = os.path.join(CM, 'dist', 'lite'); os.makedirs(out, exist_ok=True)
    for f in sys.argv[1:]:
        LH.OPIS.egzekwuj([f])
        doc, ok, brak, nz = lite(f)
        dst = os.path.join(out, os.path.splitext(os.path.basename(f))[0] + '.html'); open(dst, 'w', encoding='utf-8').write(doc)
        print('ok %s %d KB · modele lekkie: %s · tylko w pełnej wersji: %s · zlewki: %d' % (os.path.basename(dst), len(doc.encode()) // 1024, ', '.join(ok) or '—', ', '.join(brak) or '—', nz))
