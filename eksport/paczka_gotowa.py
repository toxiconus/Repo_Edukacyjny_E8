#!/usr/bin/env python3
"""Paczka „GOTOWE” — prompt eksport/GOTOWE_PROMPT.md + lekcja (lub jej części) z nagłówkiem dla modelu.
Model zwraca pełne sekcje między <<<PLIK i PLIK>>>, wczytuje je narzedzia/wczytaj_odpowiedz.py (bez ręcznych poprawek).
Użycie: python3 eksport/paczka_gotowa.py NAZWA plik.md [--max KB] [--olimpiada] [--uwaga "tekst"]
  --max KB  maks. tekst lekcji w jednej paczce (domyślnie 40 → paczka ≈ 50 KB; tyle czyta większość modeli)
Wynik: eksport/out/GOTOWE_<NAZWA>_cz<k>z<n>.md"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'narzedzia'))
import porownaj_lekcje as P

a = sys.argv[1:]
if len(a) < 2: print(__doc__); sys.exit(2)
mx, olim, uwaga = 40.0, False, ''
if '--max' in a: i = a.index('--max'); mx = float(a[i+1]); del a[i:i+2]
if '--uwaga' in a: i = a.index('--uwaga'); uwaga = a[i+1]; del a[i:i+2]
if '--olimpiada' in a: a.remove('--olimpiada'); olim = True
nazwa, plik = a[0], Path(a[1])
t = plik.read_text()
fm, body = ('', t)
if t.startswith('---') and '\n---\n' in t[3:]:
    k = t.index('\n---\n', 3) + 5; fm, body = t[:k], t[k:]
kod = (re.search(r'^kod:\s*(.*)$', fm, re.M) or re.search('', '')).group(1) if fm else plik.stem
tyt = (re.search(r'^tytul:\s*(.*)$', fm, re.M).group(1) if fm and re.search(r'^tytul:', fm, re.M) else plik.stem)
nr = [int(x) for x in re.findall(r'^::: (?:karta exam|adv) \| Zadanie (\d+)', t, re.M)]
nast = max(nr) + 1 if nr else 1
# podział na sekcje
idx = [m.start() for m in re.finditer(r'^## ', body, re.M)]
wstep = body[:idx[0]] if idx else body
sek = [body[idx[i]:(idx[i+1] if i+1 < len(idx) else len(body))] for i in range(len(idx))]
czesci, cur = [], wstep
for s in sek:
    if cur.strip() and len((cur + s).encode()) / 1024 > mx and re.search(r'^## ', cur, re.M):
        czesci.append(cur); cur = ''
    cur += s
czesci.append(cur)
n = len(czesci)
prompt = (ROOT / 'eksport' / 'GOTOWE_PROMPT.md').read_text()
if olim: prompt += '\n\n' + (ROOT / 'eksport' / 'OLIMPIADA_DODATEK.md').read_text()
out = ROOT / 'eksport' / 'out'; out.mkdir(exist_ok=True)
for k, c in enumerate(czesci, 1):
    tekst = (fm + c) if k == 1 else c
    L = P.liczniki(('---\nx\n---\n' + c))
    hs = re.findall(r'^## (.*?)(?:\s*\{#.*)?$', c, re.M)
    zakres = f'{hs[0]} … {hs[-1]}' if hs else '(wstęp)'
    nag = [f'# PACZKA — {kod} · {tyt} · część {k}/{n}', '',
           f'- KOD: {kod}', f'- CZĘŚĆ: {k}/{n}' + (' (z frontmatterem — zwróć go)' if k == 1 else ' (bez frontmattera — nie zwracaj go)'),
           f'- SEKCJE W TEJ CZĘŚCI: {zakres}',
           f'- NASTĘPNE ZADANIE: {nast + 30 * (k - 1)}',
           '- PRZED (ta część): ' + ', '.join(f'{x} {v}' for x, v in L.items() if x != 'znaki')]
    if n > 1: nag.append(f'- Pozostałe części lekcji opracowuje się osobno — zwracasz TYLKO sekcje z tej części (od „{hs[0] if hs else ""}” do „{hs[-1] if hs else ""}”). Wykład „od zera” dopisz w części, w której są definicje i początek tematu.')
    if uwaga: nag.append(f'- UWAGA AUTORA: {uwaga}')
    f = out / f'GOTOWE_{nazwa}_cz{k}z{n}.md'
    f.write_text(prompt + '\n\n---\n\n' + '\n'.join(nag) + '\n\n---\n\n' + tekst)
    print(f'{f.relative_to(ROOT)}: {round(f.stat().st_size/1024)} KB, sekcje: {len(hs)}')
