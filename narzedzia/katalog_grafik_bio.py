#!/usr/bin/env python3
"""Zbiorczy katalog grafik biologii -> biologia/plany/KATALOG_GRAFIK_BIO.md.
Sprawdź go PRZED zrobieniem nowego rysunku: użyj/ulepsz istniejący (nowe komponenty BIO, stare HTML, specyfikacje 'WARSTWA WIZUALNA' w md)."""
import re, glob, os, collections
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.join(R, 'biologia')
out = ['# KATALOG GRAFIK BIOLOGII — wygenerowany (`python3 narzedzia/katalog_grafik_bio.py`), nie edytować', '',
       'Zasada: przed nowym rysunkiem sprawdź tę listę — używamy i ulepszamy istniejące (nowe i stare), nie dublujemy.', '']
# 1. komponenty BIO
defs = collections.OrderedDict()
for f in ('bio-viz.js', 'bio-rysunki.js'):
    s = open(os.path.join(B, 'bio/szablon', f), encoding='utf-8').read()
    for m in re.finditer(r"BIO\.define\('([\w-]+)',\{opis:'((?:[^'\\]|\\.)*)'", s):
        defs[m.group(1)] = (m.group(2).replace("\\'", "'"), f)
for m in re.finditer(r"^\s*(\w+):\{(?:lin:1,)?t:'([^']+)'", open(os.path.join(B, 'bio/szablon/bio-rysunki.js'), encoding='utf-8').read(), re.M):
    pass
use = collections.defaultdict(list)
for f in sorted(glob.glob(os.path.join(B, 'bio/md/*.md'))):
    s = open(f, encoding='utf-8').read(); n = os.path.basename(f)[:-3]
    for m in re.finditer(r'^@viz ([\w-]+)(?:\s*\{([^}]*)\})?', s, re.M):
        use[m.group(1)].append(n + (' [' + m.group(2).strip() + ']' if m.group(2) else ''))
out += ['## 1. Komponenty BIO (nowe, `biologia/bio/szablon/`) — %d' % len(defs), '', '| id | opis | plik | użyte w |', '|---|---|---|---|']
for k, (o, f) in defs.items():
    u = '; '.join(use.get(k, [])) or '**nieużyte**'
    out.append('| %s | %s | %s | %s |' % (k, o[:170].replace('|', '\\|'), f, u.replace('|', '\\|')[:200]))
# 2. stare HTML
out += ['', '## 2. Stare lekcje/wizualizacje HTML (`biologia/`) — źródło do przeniesienia/ulepszenia', '', '| plik | svg | animacje | widgety (nagłówki) |', '|---|---|---|---|']
for f in sorted(glob.glob(os.path.join(B, '*.html')) + glob.glob(os.path.join(B, 'wizualizacje/*.html'))):
    if 'INDEKS' in f: continue
    s = open(f, encoding='utf-8', errors='replace').read()
    hs = [re.sub(r'<[^>]*>', '', h).strip() for h in re.findall(r'<h[23][^>]*>.*?</h[23]>', s, re.S)]
    hs = [h for h in hs if re.search(r'model|animac|symulac|interakt|trener|widget|diagram|oś ', h, re.I)][:6]
    out.append('| %s | %d | %d | %s |' % (os.path.relpath(f, B), s.count('<svg'), len(re.findall(r'requestAnimationFrame|@keyframes|setInterval', s)), '; '.join(hs).replace('|', '/')[:200]))
# 3. specyfikacje w md starych lekcji
out += ['', '## 3. Specyfikacje „WARSTWA WIZUALNA” w starych md (`biologia/md/`) — do zrobienia lub już pokryte', '']
for f in sorted(glob.glob(os.path.join(B, 'md/*.md'))):
    s = open(f, encoding='utf-8').read()
    m = re.search(r'## WARSTWA WIZUALNA[^\n]*\n(.*?)(?=\n## )', s, re.S)
    if m:
        out.append('- **%s**: %s' % (os.path.basename(f)[:-3], ' '.join(m.group(1).split())[:330]))
out += ['', '## 4. Chemia (`chemia/che-modular/KATALOG_WIZUALIZACJI.md`)', '', 'Brak gotowych modeli biologicznych; do rozważenia na potrzeby bio: `CHE.sim.ParticleSim` (ruch cząsteczek — dyfuzja/osmoza), styl `CHE.GFX.STYL`.', '']
open(os.path.join(B, 'plany/KATALOG_GRAFIK_BIO.md'), 'w', encoding='utf-8').write('\n'.join(out))
print('ok', len(defs), 'komponentów')
