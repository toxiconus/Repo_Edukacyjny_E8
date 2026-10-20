#!/usr/bin/env python3
"""Dzieli długą lekcję MD na części (granice sekcji ##) tak, by paczka AI zmieściła się w oknie modelu.
Użycie: python3 eksport/podziel_lekcje.py plik.md [--max KB] [--od "nagłówek"]
  --max KB   maks. rozmiar części (domyślnie 32 KB — paczka z poleceniem ≈ 48–50 KB, tyle czytają najsłabsze modele)
  --do TEKST zakończ przed sekcją, której nagłówek zawiera TEKST
  --od TEKST zacznij od sekcji, której nagłówek zawiera TEKST (np. reszta lekcji po częściowym W1)
Wynik: eksport/out/czesci/<stem>.czN.md (frontmatter + uwaga „CZĘŚĆ k/n, sekcje …”). Potem: paczka_ai.py ulepsz NAZWA plik_czesci.
Przy scalaniu odpowiedzi części wstawia się z powrotem w miejsce tych samych sekcji oryginału."""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
a = sys.argv[1:]
if not a: print(__doc__); sys.exit(2)
mx = 32; od = None; do = None
if '--do' in a: i = a.index('--do'); do = a[i+1]; del a[i:i+2]
if '--max' in a: i = a.index('--max'); mx = float(a[i+1]); del a[i:i+2]
if '--od' in a: i = a.index('--od'); od = a[i+1]; del a[i:i+2]
f = Path(a[0]); t = f.read_text()
fm = ''
if t.startswith('---') and '\n---\n' in t[3:]:
    j = t.index('\n---\n', 3) + 5; fm, t = t[:j], t[j:]
parts = re.split(r'(?m)^(?=## )', t)
wstep, sek = (parts[0], parts[1:]) if not parts[0].startswith('## ') else ('', parts)
sek = [x for x in sek if not re.match(r'## (AUDYT|Status kontroli|Pochodzenie)', x)]
if od:
    k = next(i for i, x in enumerate(sek) if od in x.split('\n')[0]); sek = sek[k:]; wstep = ''
if do:
    k = next(i for i, x in enumerate(sek) if do in x.split('\n')[0]); sek = sek[:k]
grupy, cur = [], wstep
for x in sek:
    if cur and len((cur + x).encode()) > mx * 1024: grupy.append(cur); cur = ''
    cur += x
if cur:
    if grupy and len(cur.encode()) < 8 * 1024: grupy[-1] += cur
    else: grupy.append(cur)
out = ROOT / 'eksport' / 'out' / 'czesci'; out.mkdir(parents=True, exist_ok=True)
for n, g in enumerate(grupy, 1):
    nag = [l[3:].split('{#')[0].strip() for l in g.split('\n') if l.startswith('## ')]
    uw = (f"\n> **CZĘŚĆ {n}/{len(grupy)} lekcji {f.stem}** — sekcje: {nag[0] if nag else '(wstęp)'} … {nag[-1] if nag else ''}. "
          "Pozostałe części dostaniesz osobno albo już je opracowano. Pracuj TYLKO nad tą częścią, nie dopisuj sekcji z innych części "
          "(wykład, test, fiszki, słownik i warstwę olimpijską dopisuj tylko, jeśli ich w lekcji nie ma — sprawdź listę sekcji w nagłówku).\n\n")
    p = out / f'{f.stem}.cz{n}.md'; p.write_text(fm + uw + g)
    print(f'{p.relative_to(ROOT)}: {len(p.read_bytes())//1024} KB, sekcje: {len(nag)}')
