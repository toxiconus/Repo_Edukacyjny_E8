#!/usr/bin/env python3
"""Generuje chemia/che-modular/engine/src/klocki/KATALOG.md — jeden spis wszystkich klocków (nazwa, plik, opis, domyślne opcje, lekcje, które ich używają)
oraz rodziny wizualizacji o podobnej funkcji (kandydaci do uwspólnienia). Nie edytować KATALOG.md ręcznie."""
import re, glob, os, collections
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
K = os.path.join(ROOT, 'chemia/che-modular/engine/src/klocki')
defs = {}
for f in sorted(glob.glob(K + '/*.js')):
    s = open(f, encoding='utf-8').read(); fn = os.path.basename(f)
    for m in re.finditer(r"KLOCKI\.def\('([^']+)',\s*(?=\{(.{0,1500}))", s, re.S):
        body = m.group(2)
        o = re.search(r"opis:\s*'((?:[^'\\]|\\.)*)'", body); d = re.search(r"domyslne:\s*(\{[^}]*\})", body)
        defs[m.group(1)] = (fn, o.group(1) if o else '', d.group(1) if d else '')
    for m in re.finditer(r"defineView\('([^']+)',\s*\{\s*title:'([^']*)'", s):   # porty z visual-library (przez mostek model_widok.js)
        defs.setdefault(m.group(1), (fn, m.group(2), '(port; opcje z widoku)'))
use = collections.defaultdict(lambda: collections.Counter())
for f in glob.glob(ROOT + '/chemia/lekcje_md/*/*.md') + glob.glob(ROOT + '/chemia/che-modular/lessons-md/gotowe/*.md'):
    kod = os.path.basename(f).split('.md')[0].split('_')[0] if 'lessons-md' in f else '.'.join(os.path.basename(f).split('.')[2:3])
    for m in re.finditer(r'^@klocek\s+([\w-]+)', open(f, encoding='utf-8').read(), re.M): use[m.group(1)][kod] += 1
RODZINY = [
 ('Skala pH i wskaźniki', ['ph-indicators-v03'], 'scalone 2026-11-04: ph-skala usunięta, substancje z życia są zakładką „Z życia” w panelu'),
 ('Miareczkowanie', ['titration-merged'], 'jedna wersja (moja miareczkowanie usunięta)'),
 ('Kwaśne deszcze', ['acid-rain-v01'], 'scalone 2026-11-04: kwasne-deszcze usunięty, marmur dodany do acid-rain-v01'),
 ('Bufor', ['bufor'], 'oryginał kw-bufor-v01 (GFX, pH-metry) jeszcze nieprzeniesiony'),
 ('Przewodnictwo / elektroliza', ['przewodnictwo'], 'scalone 2026-11-04: tester-przewodnictwa usunięty, N04 i FIZ01 używają przewodnictwo (N05 nadal @model gfx-scene-conductivity)'),
 ('Probówki / zlewki z reakcją', ['probowki', 'probowki-odczyn', 'probowki-wybor', 'zlewka-rx', 'zlewki-rx'], 'pięć klocków „naczynie + reakcja”: probówki (odczyn/wybór) i zlewki z silniczkiem rx-lite; litowce+woda = zestaw zlewki-rx'),
 ('Wzory cząsteczek 2D', ['wzor-2d'], 'jeden klocek (SMILES, grupy, kwaśny H, kulki, kąty); dawny molekula-2d scalony i usunięty'),
 ('Reszty kwasowe / właściwości kwasów', ['kwasy-reszty', 'kwasy-rozcienczanie'], 'odpowiedniki kw-reszty-v01, kw-wlasciwosci-v01 z dużego silnika (nieprzeniesione)'),
]
out = ['# Katalog klocków (generowany: `python3 narzedzia/katalog_klockow.py`, wołany z `odswiez_wszystko.py`)', '',
       'Przed napisaniem nowego klocka sprawdź tu rodzinę i użycia — nie twórz dubla, rozbuduj istniejący. Nazwa → `@klocek nazwa {opcje} | podpis` + obowiązkowy `@opis`.', '',
       '## Rodziny o podobnej funkcji (kandydaci do uwspólnienia)', '', '| Rodzina | Klocki | Uwaga |', '|---|---|---|']
for n, ks, u in RODZINY:
    out.append('| %s | %s | %s |' % (n, ', '.join('`%s`' % k for k in ks if k in defs), u))
out += ['', '## Wszystkie klocki (%d)' % len(defs), '', '| Klocek | Plik | Opis | Domyślne | Użycia (lekcja×liczba) |', '|---|---|---|---|---|']
for n in sorted(defs):
    fn, o, d = defs[n]
    out.append('| `%s` | %s | %s | %s | %s |' % (n, fn, o.replace('|', '/')[:170], d.replace('|', '/')[:70], ', '.join('%s×%d' % kv for kv in sorted(use[n].items())) or '—'))
open(K + '/KATALOG.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('katalog klocków: %d klocków → klocki/KATALOG.md' % len(defs))
