#!/usr/bin/env python3
"""Paczka „GOTOWE” — prompt eksport/GOTOWE_PROMPT.md + całe lekcje (bez dzielenia), jedna lub kilka w jednym md.
Model zwraca każdą lekcję w całości między <<<PLIK KOD i PLIK>>> (sama treść, audyt na końcu pliku);
wczytuje to narzedzia/wczytaj_odpowiedz.py odp*.md [--zapisz] — bez ręcznych poprawek.
Użycie: python3 eksport/paczka_gotowa.py NAZWA plik1.md [plik2.md …] [--olimpiada] [--uwaga "tekst"]
Wynik: eksport/out/GOTOWE_<NAZWA>.md"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'narzedzia'))
import porownaj_lekcje as P

a = sys.argv[1:]
if len(a) < 2: print(__doc__); sys.exit(2)
olim, uwaga = False, ''
if '--uwaga' in a: i = a.index('--uwaga'); uwaga = a[i+1]; del a[i:i+2]
if '--olimpiada' in a: a.remove('--olimpiada'); olim = True
nazwa, pliki = a[0], [Path(x) for x in a[1:]]
prompt = (ROOT / 'eksport' / 'GOTOWE_PROMPT.md').read_text()
if olim: prompt += '\n\n' + (ROOT / 'eksport' / 'OLIMPIADA_DODATEK.md').read_text()
kody, czesci = [], []
for f in pliki:
    t = f.read_text()
    m = re.search(r'^kod:\s*(\S.*)$', t, re.M); kod = m.group(1).strip() if m else f.stem
    m = re.search(r'^tytul:\s*(\S.*)$', t, re.M); tyt = m.group(1).strip() if m else f.stem
    nr = [int(x) for x in re.findall(r'^::: (?:karta exam|adv) \| Zadanie (\d+)', t, re.M)]
    L = P.liczniki(t)
    nag = [f'# LEKCJA {kod} — {tyt}', '',
           f'- KOD: {kod} (znacznik odpowiedzi: `<<<PLIK {kod}`)',
           f'- NASTĘPNE ZADANIE: {max(nr) + 1 if nr else 1}',
           '- PRZED: ' + ', '.join(f'{x} {v}' for x, v in L.items() if x != 'znaki')]
    if uwaga: nag.append(f'- UWAGA AUTORA: {uwaga}')
    kody.append(kod); czesci.append('\n'.join(nag) + '\n\n' + t.rstrip() + '\n')
spis = f'# PACZKA {nazwa} — lekcje: ' + ', '.join(kody) + f'\n\nOpracuj je po kolei, jedną na turę (po „dalej” następna). Odpowiedź: sama treść — tylko pliki między `<<<PLIK <KOD>` i `PLIK>>>`.'
out = ROOT / 'eksport' / 'out'; out.mkdir(exist_ok=True)
f = out / f'GOTOWE_{nazwa}.md'
f.write_text(prompt + '\n\n---\n\n' + spis + '\n\n---\n\n' + '\n\n---\n\n'.join(czesci))
print(f'{f.relative_to(ROOT)}: {round(f.stat().st_size/1024)} KB, lekcje: {", ".join(kody)}')
