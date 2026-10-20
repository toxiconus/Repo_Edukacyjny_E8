#!/usr/bin/env python3
"""Logi analizy zmian w lekcjach — znacznik „::: log”.

Log to blok w md, zwijany w HTML (domyślnie zamknięty):

    ::: log | Analiza zmian — 2026-10-12
    ...treść logu (może zawierać zagnieżdżone ::: karta …)...
    :::

Użycie:
    python3 narzedzia/logi_zmian.py            # lista: które lekcje mają log i ile linii
    python3 narzedzia/logi_zmian.py --usun     # wycina wszystkie logi (wersja końcowa)
    python3 narzedzia/logi_zmian.py --usun --plik lekcja.md ...   # tylko wskazane pliki

Skanowane są lekcje w chemia/lekcje_md, biologia/bio/md, polski/lekcje_md, polski/podstawy,
angielski i olimpiada (bez archiwum, plany, audyty i .specstory).
"""
import argparse, glob, os, re, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOTS = ['chemia/lekcje_md', 'biologia/bio/md', 'polski/lekcje_md', 'polski/podstawy', 'angielski', 'olimpiada']
POMIJAJ = ('archiwum', 'plany', 'audyt', '.specstory')
OPEN = re.compile(r'^\s*:::\s*log\b')

def wytnij(L):
    """Zwraca (nowe_linie, liczba_usunietych_blokow, liczba_usunietych_linii)."""
    out, n, nl = [], 0, 0
    i = 0
    while i < len(L):
        if OPEN.match(L[i]):
            depth, j = 1, i + 1
            while j < len(L):
                t = L[j].strip()
                if t == ':::':
                    depth -= 1
                    if depth == 0: break
                elif t.startswith(':::'):
                    depth += 1
                j += 1
            if j >= len(L):
                raise SyntaxError('niezamknięty ::: log (linia %d)' % (i + 1))
            n += 1; nl += j - i + 1
            i = j + 1
            # usuń jedną pustą linię, która zostałaby po bloku
            if i < len(L) and not L[i].strip() and out and not out[-1].strip():
                i += 1
            continue
        out.append(L[i]); i += 1
    return out, n, nl

def pliki():
    for r in ROOTS:
        for p in glob.glob(os.path.join(REPO, r, '**', '*.md'), recursive=True):
            rel = os.path.relpath(p, REPO)
            if any(x in rel for x in POMIJAJ):
                continue
            yield p

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--usun', action='store_true', help='wytnij wszystkie bloki ::: log (zapisuje pliki)')
    ap.add_argument('--plik', nargs='*', help='ogranicz do wskazanych plików')
    a = ap.parse_args()
    cele = [os.path.abspath(p) for p in a.plik] if a.plik else list(pliki())
    razem_b = razem_l = 0
    for p in sorted(cele):
        L = open(p, encoding='utf-8').read().split('\n')
        nowe, n, nl = wytnij(L)
        if not n:
            continue
        rel = os.path.relpath(p, REPO)
        razem_b += n; razem_l += nl
        if a.usun:
            open(p, 'w', encoding='utf-8').write('\n'.join(nowe))
            print('usunięto %d log(ów), %d linii: %s' % (n, nl, rel))
        else:
            print('%3d log(ów), %4d linii: %s' % (n, nl, rel))
    print('razem: %d logów, %d linii %s' % (razem_b, razem_l, '(usunięte)' if a.usun else '(tylko podgląd)'))

if __name__ == '__main__':
    sys.exit(main())
