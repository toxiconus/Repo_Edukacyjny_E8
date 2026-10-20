"""Samokontrola Claude: które lekcje nie mają pełnego wykładu, mini-wykładu („W skrócie”) lub ciekawostek (karta extra).
Użycie: python3 narzedzia/sprawdz_wyklady.py [katalog ...]   (domyślnie polski/podstawy biologia/bio/md)
Zasada (CLAUDE.md, decyzja użytkownika): każda lekcja ma wykład „od zera”, mini-wykłady w suchych miejscach i ciekawostki.
"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
dirs = sys.argv[1:] or ['polski/podstawy', 'biologia/bio/md']
brak = 0
for d in dirs:
    for f in sorted((ROOT / d).glob('*.md')):
        t = f.read_text()
        if re.search(r'^stan: PUSTY', t, re.M):
            continue
        w = bool(re.search(r'^#+ .*Wykład', t, re.M))
        m = bool(re.search(r'W skrócie|Mini-wykład', t))
        c = bool(re.search(r'karta extra|Ciekawostk', t))
        if not (w and m and c):
            brak += 1
            print(f"{f.name[:48]:48} wykład:{'✔' if w else '✘'} mini:{'✔' if m else '✘'} ciekawostki:{'✔' if c else '✘'}")
print(f"— lekcji z brakami: {brak}")
