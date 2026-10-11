"""Porównanie wersji lekcji „przed” i „po” (np. odpowiedź innego AI) — pilnuje, żeby nie stracić danych.

Użycie:
  python3 narzedzia/porownaj_lekcje.py PRZED.md PO.md          # raport różnic
  python3 narzedzia/porownaj_lekcje.py --liczniki plik.md ...   # same liczniki (do nagłówka paczki)
Raport: KB przed/po, liczniki elementów (sekcje, zadania, test, fiszki, słownik, grafiki, opisy, ciekawostki,
mini-wykłady), sekcje usunięte/dodane, utracone kody grafik, identyfikatory {#id}, hasła słownika, fiszki,
pytania testowe oraz linie treści, których nie ma w nowej wersji (po normalizacji). Kod wyjścia 1, gdy coś zginęło.
"""
import re, sys
from pathlib import Path

def body(t):
    return t.split('\n---\n', 1)[1] if t.startswith('---') and '\n---\n' in t else t

def liczniki(t):
    b = body(t)
    L = b.split('\n')
    return {
        'KB': round(len(b.encode('utf-8')) / 1024, 1),
        'znaki': len(b),
        'sekcje ##': sum(1 for l in L if l.startswith('## ')),
        'zadania (karta exam)': sum(1 for l in L if l.startswith('::: karta exam')),
        'pytania testowe': sum(1 for l in L if l.startswith('? ')),
        'fiszki': len(fiszki(b)),
        'hasła słownika': len(slownik(b)),
        'grafiki (@viz/@model/@zlewka)': sum(1 for l in L if re.match(r'@(viz|model|zlewka) ', l)),
        'opisy @opis': sum(1 for l in L if l.startswith('@opis ')),
        'ciekawostki (karta extra)': sum(1 for l in L if l.startswith('::: karta extra')),
        'mini-wykłady (W skrócie)': sum(1 for l in L if re.match(r'::: karta .*\| W skrócie', l)),
        'doświadczenia (dosw)': sum(1 for l in L if l.startswith('::: dosw')),
        'błędy w klinice': sum(1 for l in klinika(b)),
    }

def blok(b, nazwa):
    out, w = [], False
    for l in b.split('\n'):
        if l.startswith('::: ' + nazwa):
            w = True; continue
        if w and l.strip() == ':::':
            w = False; continue
        if w:
            out.append(l)
    return out

def fiszki(b):
    return [l.split(' | ')[0].strip() for l in blok(b, 'fiszki') if ' | ' in l]

def slownik(b):
    return [l.split(' :: ')[0].strip() for l in blok(b, 'slownik') if ' :: ' in l]

def klinika(b):
    return [l for l in blok(b, 'klinika') if l.strip().startswith('|')]

def sekcje(b):
    return [re.sub(r'\s*\{#.*?\}|\s*\[\[.*?\]\]', '', l[3:]).split(' | ', 1)[-1].strip() for l in b.split('\n') if l.startswith('## ')]

def norm(l):
    l = re.sub(r'[*_`>#|]', ' ', l.lower())
    return re.sub(r'\s+', ' ', l).strip()

def zbior(b, rx):
    return set(re.findall(rx, b))

def porownaj(a, c):
    A, B = body(a), body(c)
    la, lb = liczniki(a), liczniki(c)
    bad = False
    print('| miara | przed | po | zmiana |\n|---|---|---|---|')
    for k in la:
        d = lb[k] - la[k]
        flag = ' ⚠' if d < 0 and k not in ('znaki',) else ''
        if flag and k != 'KB': bad = True
        dz = f'{d:+.1f}' if isinstance(d, float) else f'{d:+d}'
        print(f'| {k} | {la[k]} | {lb[k]} | {dz}{flag} |')
    def lista(nazwa, x, y):
        nonlocal bad
        ub = [i for i in x if i not in y]
        if ub:
            bad = True
            print(f'\n**Brak w nowej wersji — {nazwa} ({len(ub)}):** ' + ' · '.join(map(str, ub[:40])) + (' …' if len(ub) > 40 else ''))
    sa, sb = sekcje(A), sekcje(B)
    lista('sekcje', sa, sb)
    nowe = [s for s in sb if s not in sa]
    if nowe: print(f'\n**Nowe sekcje ({len(nowe)}):** ' + ' · '.join(nowe))
    lista('kody grafik', sorted(zbior(A, r'@(?:viz|model) (\S+)')), zbior(B, r'@(?:viz|model) (\S+)'))
    lista('identyfikatory {#id}', sorted(zbior(A, r'\{#([\w-]+)\}')), zbior(B, r'\{#([\w-]+)\}'))
    lista('hasła słownika', slownik(A), set(slownik(B)))
    lista('fiszki', fiszki(A), set(fiszki(B)))
    lista('pytania testowe', [l[2:].strip() for l in A.split('\n') if l.startswith('? ')], {l[2:].strip() for l in B.split('\n') if l.startswith('? ')})
    nb = norm(B)
    zgin = []
    for l in A.split('\n'):
        n = norm(l)
        if len(n) < 40 or l.startswith(('@opis', ':::', '---')):
            continue
        # linia „zginęła”, jeśli nie ma jej ani w całości, ani jej dłuższego fragmentu (pierwsze 60 znaków)
        if n not in nb and n[:60] not in nb:
            zgin.append(l.strip()[:140])
    if zgin:
        print(f'\n**Linie treści zmienione lub usunięte ({len(zgin)}) — sprawdź, czy treść nie zginęła:**')
        for z in zgin[:60]:
            print('- ' + z)
        if len(zgin) > 60: print(f'- … i {len(zgin) - 60} więcej')
    print('\nWYNIK: ' + ('⚠ możliwa utrata danych — sprawdź listy powyżej' if bad else 'OK — żaden licznik nie zmalał, sekcje i hasła zachowane'))
    return 1 if bad else 0

if __name__ == '__main__':
    a = sys.argv[1:]
    if not a:
        print(__doc__); sys.exit(2)
    if a[0] == '--liczniki':
        for f in a[1:]:
            c = liczniki(Path(f).read_text())
            print(f'{Path(f).name}: ' + ', '.join(f'{k} {v}' for k, v in c.items()))
        sys.exit(0)
    sys.exit(porownaj(Path(a[0]).read_text(), Path(a[1]).read_text()))
