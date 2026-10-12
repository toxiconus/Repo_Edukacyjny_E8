#!/usr/bin/env python3
"""Paczka „GOTOWE” — prompt eksport/GOTOWE_PROMPT.md + całe lekcje (bez dzielenia), jedna lub kilka w jednym md.
Model zwraca każdą lekcję w całości między <<<PLIK KOD i PLIK>>> (sama treść, audyt na końcu pliku);
wczytuje to narzedzia/wczytaj_odpowiedz.py odp*.md [--zapisz] — bez ręcznych poprawek.
Użycie: python3 eksport/paczka_gotowa.py NAZWA [plik1.md …] [--napisz zrodlo.md=cel.md …] [--olimpiada] [--uwaga "tekst"]
  plik.md            — TRYB ULEPSZ (gotowa lekcja)
  --napisz Z=C       — TRYB NAPISZ: Z = szkielet/materiał roboczy, C = docelowy plik lekcji (nowy); KOD = część nazwy C
                       (np. BIO.07.U11.… → U11, X04_… → X04); mapowanie KOD → C zapisuje eksport/GOTOWE_cele.json
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
napisz = []
while '--napisz' in a:
    i = a.index('--napisz'); z, c = a[i+1].split('=', 1); napisz.append((Path(z), Path(c))); del a[i:i+2]
nazwa, pliki = a[0], [Path(x) for x in a[1:]]
import json
REJ = ROOT / 'eksport' / 'GOTOWE_cele.json'
cele = json.loads(REJ.read_text()) if REJ.exists() else {}
REJZ = ROOT / 'eksport' / 'GOTOWE_zrodla.json'
zrodla = json.loads(REJZ.read_text()) if REJZ.exists() else {}
def kod_z(c):
    m = re.match(r'[A-Z]{3}\.\d\d\.([A-Z0-9]+)\.', c.name) or re.match(r'([A-Z]+\d+[A-Z]?)_', c.name)
    return m.group(1) if m else c.stem
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
    nag.insert(2, '- TRYB: ULEPSZ')
    kody.append(kod); czesci.append('\n'.join(nag) + '\n\n' + t.rstrip() + '\n')
for z, c in napisz:
    t = z.read_text(); kod = kod_z(c)
    m = re.search(r'^tytul:\s*"?([^"\n]*)"?$', t, re.M); tyt = m.group(1).strip() if m else c.stem
    if not m:
        h = re.search(r'^#\s+(?:L\d+\w*\s*[—–-]\s*)?(.+)$', t, re.M); tyt = h.group(1).strip() if h else c.stem
    if re.match(r'^(LEKCJA\s+)?L\d+\w*\s*[—–-]', tyt): tyt = re.sub(r'^(LEKCJA\s+)?L\d+\w*\s*[—–-]\s*', '', tyt).strip().capitalize()
    przed = 'CHEMIA' if 'chemia' in str(c) else 'BIOLOGIA' if 'biologia' in str(c) else 'POLSKI' if 'polski' in str(c) else 'ANGIELSKI'
    uid = c.stem if c.name.count('.') > 2 else ''
    wzor = ['---', f'kod: {kod}'] + ([f'uid: {uid}'] if uid else []) + [f'tytul: {tyt}', 'opis: <hasła tematów rozdzielone „ · ”>',
            f'kicker: {kod} · {przed} · <dział> · <poziom: E8 / KONKURS>', 'lead: <jedno-dwa zdania zachęty: o czym i po co>',
            'lead: <najważniejsze umiejętności lekcji>', 'plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]][[extra:AMBITNE]]',
            'uwaga: <zakres podstawy / konkursu; które liczby są orientacyjne>', f'stopka: **{przed} {kod} v1.0** · {tyt} · 2026',
            'stan: ULEPSZONA — <model>, <data>; do sprawdzenia', '---']
    nag = [f'# LEKCJA {kod} — {tyt}', '', '- TRYB: NAPISZ (z materiału roboczego poniżej napisz pełną lekcję — punkt 0 polecenia)',
           f'- KOD: {kod} (znacznik odpowiedzi: `<<<PLIK {kod}`)', '- NASTĘPNE ZADANIE: 1',
           '- WZÓR FRONTMATTERA (uzupełnij pola w < >):', ''] + ['    ' + x for x in wzor]
    if uwaga: nag.append(f'- UWAGA AUTORA: {uwaga}')
    cele[kod] = str(c.relative_to(ROOT) if c.is_absolute() else c)
    zrodla[kod] = str(z.relative_to(ROOT) if z.is_absolute() else z)
    nag.append(f'- UWAGA: numery i kody wewnątrz materiału (np. „L006”, „L011”) są stare — w odpowiedzi używaj wyłącznie KOD {kod}.')
    t = re.sub(r'^#\s+LEKCJA\b', '### (materiał) lekcja', t, flags=re.M)
    kody.append(kod); czesci.append('\n'.join(nag) + '\n\n**MATERIAŁ ROBOCZY:**\n\n' + t.rstrip() + '\n')
if napisz: REJ.write_text(json.dumps(cele, ensure_ascii=False, indent=1))
if napisz: REJZ.write_text(json.dumps(zrodla, ensure_ascii=False, indent=1))
spis = f'# PACZKA {nazwa} — lekcje: ' + ', '.join(kody) + f'\n\nOpracuj je po kolei, jedną na turę (po „dalej” następna). Odpowiedź: sama treść — tylko pliki między `<<<PLIK <KOD>` i `PLIK>>>`.'
out = ROOT / 'eksport' / 'out'; out.mkdir(exist_ok=True)
f = out / f'GOTOWE_{nazwa}.md'
f.write_text(prompt + '\n\n---\n\n' + spis + '\n\n---\n\n' + '\n\n---\n\n'.join(czesci))
print(f'{f.relative_to(ROOT)}: {round(f.stat().st_size/1024)} KB, lekcje: {", ".join(kody)}')
