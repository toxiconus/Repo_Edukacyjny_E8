#!/usr/bin/env python3
"""Pełny ZIP przekazania dla innych modeli: md + html lekcji, małe silniki, narzędzia, dokumenty.
Użycie: python3 narzedzia/zipuj_przekazanie.py [plik_wyjsciowy.zip]
Domyślnie: scratchpad/../ lub /tmp/przekazanie_e8.zip. Pomija: .git, dist, modules, eksport/out, archiwum, cache.
Reguła (decyzja Rafała): gdy każe zipować -> ZIP od razu na chat."""
import os, sys, zipfile, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/przekazanie_e8.zip'

DOKUMENTY = ['CLAUDE.md', 'README.md', 'PRZEKAZANIE.md', 'MAPA.md', 'WERYFIKACJA.md', 'SPIS_WSZYSTKICH.md',
             'chemia/che-modular/PRZEKAZANIE.md', 'chemia/che-modular/PROGRESS.md', 'chemia/che-modular/SYSTEM.md',
             'chemia/che-modular/STANDARD_LEKCJI.md', 'chemia/che-modular/KATALOG_MODELI.md',
             'biologia/bio/PRZEKAZANIE.md', 'biologia/bio/BIO_KATALOG.md', 'olimpiada/PRZEKAZANIE.md']
KATALOGI = [
    # md lekcji
    'chemia/che-modular/lessons-md/gotowe', 'biologia/bio/md', 'polski', 'olimpiada/LKO_pakiet/md', 'angielski',
    # html lekcji (wygenerowane — do podglądu i przekazania)
    'chemia/html', 'biologia/html', 'polski/html', 'olimpiada/html', 'olimpiada/LKO_pakiet/html', 'angielski/html',
    # małe silniki i narzędzia
    'chemia/che-modular/engine', 'chemia/che-modular/tools', 'biologia/bio/narzedzia', 'szablon', 'narzedzia',
    # olimpiada: ZAWSZE w ZIP (źródła, plany, zestawy, terminy, html) — decyzja Rafała
    'olimpiada', 'olimpiada/zrodla', 'olimpiada/LKO_pakiet',
]
POMIJAJ = {'.git', 'dist', 'modules', 'archiwum', '.specstory', 'node_modules', '__pycache__', 'out', 'html_podglad'}
POMIJAJ_EXT = {'.zip', '.pyc'}

def wybrane():
    for d in DOKUMENTY:
        p = os.path.join(ROOT, d)
        if os.path.isfile(p):
            yield p, d
    for k in KATALOGI:
        base = os.path.join(ROOT, k)
        for dp, dn, fn in os.walk(base):
            dn[:] = [x for x in dn if x not in POMIJAJ]
            for f in fn:
                if os.path.splitext(f)[1] in POMIJAJ_EXT:
                    continue
                p = os.path.join(dp, f)
                yield p, os.path.relpath(p, ROOT)

def main():
    n = 0
    widziane = set()
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        for p, rel in wybrane():
            if rel in widziane:
                continue
            widziane.add(rel)
            z.write(p, rel); n += 1
        z.writestr('PRZEKAZANIE_ZIP.txt',
            f"ZIP przekazania E8 — wygenerowano {datetime.date.today().isoformat()}, {n} plików.\n"
            "Zawartość: dokumenty startowe (CLAUDE.md, PRZEKAZANIE, MAPA, WERYFIKACJA), md lekcji\n"
            "(chemia, biologia, polski, olimpiada/LKO, angielski), html lekcji, małe silniki i narzędzia\n"
            "(chemia engine + tools, bio narzedzia, szablon, narzedzia). Pominięte: .git, dist, modules\n"
            "(odtwarza sh tools/pobierz_moduly.sh), eksport/out, archiwum.\n"
            "Start: CLAUDE.md -> PRZEKAZANIE.md -> przekazanie przedmiotu.\n")
    print(f"{OUT}: {n} plików, {os.path.getsize(OUT)//1024} KB")

if __name__ == '__main__':
    main()
