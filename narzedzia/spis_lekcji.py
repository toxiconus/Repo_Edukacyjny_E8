#!/usr/bin/env python3
"""Spis lekcji wszystkich przedmiotów: rozmiar KB, wizualizacje (@klocek/@model/@zlewka) i pokrycie @opis.
Użycie (z katalogu głównego repo):  python3 narzedzia/spis_lekcji.py   → SPIS_LEKCJI.md
Źródła: chemia/che-modular/lessons-md/gotowe, biologia/bio/md, olimpiada (pliki lekcji), polski/lekcje, polski/podstawy (md).
Rozróżnia lekcje (pliki) od list tematów (plany: chemia/plany/CHE_SPIS_TRESCI.md, polski/POL_SPIS_TRESCI_v2.md)."""
import glob, os, re, datetime
WIZ = re.compile(r'^@(klocek|model|zlewka)\b', re.M)
OPIS = re.compile(r'^@opis\b', re.M)
ZRODLA = [
    ('chemia (che-modular)', 'chemia/che-modular/lessons-md/gotowe/*.md'),
    ('biologia', 'biologia/bio/md/*.md'),
    ('polski (lekcje)', 'polski/lekcje/*.md'),
    ('polski (podstawy)', 'polski/podstawy/*.md'),
]
out = ['# SPIS LEKCJI (generowany: `python3 narzedzia/spis_lekcji.py`)', '',
       'Stan: %s. KB = rozmiar pliku md. Wiz. = liczba @klocek/@model/@zlewka; @opis = liczba opisów (powinna być równa wiz.).' % datetime.date.today(),
       'Listy tematów (plan) są osobno: `chemia/plany/CHE_SPIS_TRESCI.md`, `polski/POL_SPIS_TRESCI_v2.md`, `olimpiada/OLIMPIADA_8_MASTER.md`.', '']
tot = 0
for nazwa, wz in ZRODLA:
    fs = sorted(glob.glob(wz))
    if not fs: continue
    out += ['## %s (%d lekcji)' % (nazwa, len(fs)), '', '| plik | KB | wiz. | @opis | uwagi |', '|---|---:|---:|---:|---|']
    for f in fs:
        t = open(f, encoding='utf-8', errors='replace').read()
        v, o = len(WIZ.findall(t)), len(OPIS.findall(t)); kb = os.path.getsize(f) // 1024; tot += kb
        uw = 'dług @opis: %d (zob. narzedzia/opis_dlug.json)' % (v - o) if v > o else ''
        if re.search(r'poza zakresem LKO 2025/26', t): uw += (' ' if uw else '') + 'oznaczenia „poza zakresem 2025/26” — sprawdzić z 2026/27'
        out.append('| `%s` | %d | %d | %d | %s |' % (os.path.basename(f), kb, v, o, uw))
    out.append('')
out.append('Razem: %d KB.' % tot)
open('SPIS_LEKCJI.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('SPIS_LEKCJI.md', tot, 'KB')
