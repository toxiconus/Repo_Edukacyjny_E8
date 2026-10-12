#!/usr/bin/env python3
"""Logiczne limity lekcji (nie rozmiar): fiszki, testy, zadania, ciekawostki, mini-wykłady, słownik, sekcje, powtórzenia.
Użycie: python3 narzedzia/limity_lekcji.py plik.md [plik2.md …]   (bez argumentów: wszystkie lekcje BIO i CHE gotowe)
Lekcja może mieć w frontmatterze `typ: test` albo `typ: powtorka` — wtedy obowiązują wyższe limity na testy, fiszki, zadania i słownik.
Zasady, które sprawdza, wynikają z pracy nad lekcjami: jedna fiszka = jeden termin z lekcji, test = krótka kontrola
(nie drugi podręcznik), zadania i ciekawostki w rozsądnej liczbie, żaden długi akapit nie powtarza się w tej samej lekcji.
Progi są orientacyjne (⚠). Kod wyjścia 1 tylko przy braku wykładu lub powtórzonych akapitach (❌)."""
import re, sys, glob, os
from collections import Counter
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LIMIT = {  # (zwykła, test/powtórka)
    'fiszki': (30, 60), 'testy': (5, 25), 'zadania': (6, 15), 'slownik': (25, 60),
    'sekcje': (25, 40),
}
ZAWSZE = {'ciekawostki_max': 5, 'ciekawostki_min': 3, 'mini_max': 5, 'wyklad_min': 1}

def policz(text):
    fm = re.match(r'---\n(.*?)\n---', text, re.S)
    typ = re.search(r'^typ:\s*(\S+)', fm.group(1), re.M).group(1) if fm and re.search(r'^typ:', fm.group(1), re.M) else 'zwykla'
    wyn = {'typ': typ}
    L = text.split('\n')
    wyn['sekcje'] = sum(1 for l in L if l.startswith('## '))
    wyn['wyklad'] = sum(1 for l in L if l.startswith('## ') and re.search(r'Wykład', l))
    wyn['testy'] = sum(1 for l in L if l.startswith('? '))
    wyn['zadania'] = sum(1 for l in L if re.match(r'::: karta exam', l))
    wyn['ciekawostki'] = sum(1 for l in L if re.match(r'::: karta extra', l))
    wyn['mini'] = sum(1 for l in L if re.match(r'::: karta understand \| W skrócie', l))
    fisz, slow, w = 0, 0, None
    for l in L:
        if re.match(r'^:::\s*fiszki', l): w = 'f'; continue
        if re.match(r'^:::\s*slownik', l): w = 's'; continue
        if l.strip() == ':::': w = None; continue
        if w == 'f' and '|' in l and l.strip(): fisz += 1
        if w == 's' and '::' in l and l.strip(): slow += 1
    wyn['fiszki'], wyn['slownik'] = fisz, slow
    akap = Counter(l.strip() for l in L if len(l.strip()) >= 60 and not l.lstrip().startswith(('|', '?', '+', '-', '!', '$$', '@', '::', '<')))
    wyn['powtorki'] = sum(1 for k, v in akap.items() if v > 1)
    return wyn

def sprawdz(path):
    w = policz(open(path, encoding='utf-8').read())
    t = 1 if w['typ'] in ('test', 'powtorka') else 0
    bledy, uwagi = [], []
    # progi orientacyjne: tylko uwagi (temat może wymagać więcej)
    for k in ('fiszki', 'testy', 'zadania', 'slownik'):
        lim = LIMIT[k][t]
        if w[k] > lim: uwagi.append(f'{k} {w[k]} > orientacyjnie {lim} — czy wynika z tematu?')
    if w['sekcje'] > LIMIT['sekcje'][t]: uwagi.append(f"sekcje {w['sekcje']} — rozważ podział lekcji na dwie")
    if w['ciekawostki'] > ZAWSZE['ciekawostki_max']: uwagi.append(f"ciekawostki {w['ciekawostki']} > orientacyjnie {ZAWSZE['ciekawostki_max']}")
    if w['ciekawostki'] < ZAWSZE['ciekawostki_min']: uwagi.append(f"ciekawostki {w['ciekawostki']} < {ZAWSZE['ciekawostki_min']}")
    if w['mini'] > ZAWSZE['mini_max']: uwagi.append(f"mini-wykłady {w['mini']} > orientacyjnie {ZAWSZE['mini_max']}")
    # twarde: brak wykładu i powtórzone akapity
    if w['wyklad'] < 1: bledy.append('brak sekcji „Wykład — …”')
    if w['powtorki']: bledy.append(f"powtórzone akapity: {w['powtorki']}")
    return w, bledy, uwagi

if __name__ == '__main__':
    pliki = sys.argv[1:] or sorted(glob.glob(os.path.join(ROOT, 'biologia/bio/md/*.md')) + glob.glob(os.path.join(ROOT, 'chemia/che-modular/lessons-md/gotowe/*.md')))
    zle = 0
    for p in pliki:
        w, bledy, uwagi = sprawdz(p)
        nazwa = os.path.basename(p)[:28]
        print(f"{'❌' if bledy else ('⚠' if uwagi else '✅')} {nazwa:28} typ={w['typ']:9} fiszki={w['fiszki']:3} testy={w['testy']:3} zadania={w['zadania']:2} extra={w['ciekawostki']} mini={w['mini']} sekcje={w['sekcje']:2} powt={w['powtorki']}" + ''.join(f'\n     ❌ {b}' for b in bledy) + ''.join(f'\n     ⚠ {u}' for u in uwagi))
        zle += 1 if bledy else 0
    print(f'\nLekcji z przekroczeniem: {zle} z {len(pliki)}')
    sys.exit(1 if zle else 0)
