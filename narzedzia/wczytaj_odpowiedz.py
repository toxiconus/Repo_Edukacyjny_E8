#!/usr/bin/env python3
"""Wczytuje odpowiedź modelu na paczkę GOTOWE (eksport/GOTOWE_PROMPT.md) i wstawia ją do lekcji.
Użycie: python3 narzedzia/wczytaj_odpowiedz.py lekcja.md odp1.md [odp2.md …] [--zapisz]
  - zbiera tekst spomiędzy <<<PLIK i PLIK>>> ze wszystkich tur (w podanej kolejności),
  - podmienia frontmatter (gdy jest) i zakres sekcji, których numery pojawiają się w odpowiedzi
    (nowe sekcje z literą, np. „8a”, wchodzą w ten zakres),
  - poprawia cudzysłowy „…" → „…”, sprawdza: bilans bloków :::, cyrylicę, LaTeX, bloki kodu, uwagi dla autora,
    duplikaty fiszek/haseł/pytań/numerów zadań, @viz bez @opis, „W1/FULL” w stan:, utratę treści (porownaj_lekcje).
Bez --zapisz wynik idzie do eksport/out/<lekcja>.nowa.md; z --zapisz nadpisuje lekcję (gdy brak błędów krytycznych)."""
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import porownaj_lekcje as P
ROOT = Path(__file__).resolve().parent.parent

a = sys.argv[1:]
if len(a) < 2: print(__doc__); sys.exit(2)
zapisz = '--zapisz' in a; a = [x for x in a if x != '--zapisz']
lek = Path(a[0]); odp = ''.join(Path(x).read_text() + '\n' for x in a[1:])
kaw = re.findall(r'<<<PLIK[^\n]*\n(.*?)\n\s*PLIK>>>', odp, re.S)
if not kaw: print('BŁĄD: brak znaczników <<<PLIK … PLIK>>> w odpowiedzi'); sys.exit(1)
nowe = '\n'.join(k.strip('\n') for k in kaw).replace('\r', '')
nowe = re.sub(r'„([^"”„\n]*)"', r'„\1”', nowe)
stary = lek.read_text()

def rozbij(t):
    fm = ''
    if t.lstrip().startswith('---') and '\n---\n' in t.lstrip()[3:]:
        t = t.lstrip(); k = t.index('\n---\n', 3) + 5; fm, t = t[:k], t[k:]
    idx = [m.start() for m in re.finditer(r'^## ', t, re.M)]
    wst = t[:idx[0]] if idx else t
    sek = [t[idx[i]:(idx[i+1] if i+1 < len(idx) else len(t))] for i in range(len(idx))]
    return fm, wst, sek
num = lambda s: re.match(r'## ([0-9]+[a-z]?)', s).group(1) if re.match(r'## ([0-9]+[a-z]?)', s) else s.split('\n')[0]
fmN, wstN, sekN = rozbij(nowe)
fmS, wstS, sekS = rozbij(stary)
nrN = {num(s) for s in sekN}
traf = [i for i, s in enumerate(sekS) if num(s) in nrN]
krit, ostrz = [], []
if not traf and sekN: krit.append('żaden numer sekcji z odpowiedzi nie pasuje do lekcji')
i0, i1 = (traf[0], traf[-1]) if traf else (len(sekS), len(sekS) - 1)
brak = [num(s) for s in sekS[i0:i1+1] if num(s) not in nrN]
if brak: krit.append('w odpowiedzi brak sekcji z zakresu: ' + ', '.join(brak))
fm = fmN if fmN else fmS
wst = wstN if (wstN.strip() and (fmN or i0 == 0)) else wstS
wynik = fm + wst.rstrip('\n') + '\n\n' + ''.join(s.rstrip('\n') + '\n\n' for s in sekS[:i0] + sekN + sekS[i1+1:])
wynik = wynik.rstrip('\n') + '\n'
if wynik.startswith('\n'): wynik = wynik.lstrip('\n')
L = wynik.split('\n')
otw = sum(1 for l in L if re.match(r'^:::\s*\S', l)); zam = sum(1 for l in L if l.strip() == ':::')
if otw != zam: krit.append(f'bloki ::: — otwarć {otw}, zamknięć {zam}')
for i, l in enumerate(L, 1):
    if re.search(r'[Ѐ-ӿ]', l): krit.append(f'cyrylica w linii {i}: {l[:60]}')
    if l.startswith('```'): krit.append(f'blok kodu w linii {i}')
    if re.search(r'\$[^$\s][^$]*\$|\\frac|\\cdot', l): ostrz.append(f'LaTeX w linii {i}: {l[:60]}')
    if re.search(r'(doklej|wklej tu|bez zmian\b|z oryginału|niewidoczn|KONIEC (ULEPSZ|FRAGM|CZĘŚ)|sprawdź duplikat|CIĄG DALSZY)', l, re.I): ostrz.append(f'uwaga dla autora w linii {i}: {l[:70]}')
    if re.match(r'@(viz|model|zlewka) ', l) and not any(x.startswith('@opis ') for x in L[i:i+3]): krit.append(f'grafika bez @opis w linii {i}')
st = re.search(r'^stan:.*$', fm, re.M)
if st and re.search(r'\bW1\b|FULL', st.group(0)): ostrz.append('stan: zawiera W1/FULL — zmieniam na ULEPSZONA'); wynik = wynik.replace(st.group(0), re.sub(r'W1 ?FULL|FULL|W1', 'ULEPSZONA', st.group(0)), 1)
def dup(nazwa, klucze):
    w = [k for k in klucze]; d = sorted({k for k in w if w.count(k) > 1})
    if d: ostrz.append(f'duplikaty {nazwa}: ' + '; '.join(d[:8]))
B = P.body(wynik)
dup('fiszek', [x.split('|')[0].strip().lower() for x in P.fiszki(B)] if isinstance(P.fiszki(B), list) else [])
dup('haseł słownika', [x.split('::')[0].strip().lower() for x in P.slownik(B)] if isinstance(P.slownik(B), list) else [])
dup('pytań testu', [l[2:].strip().lower() for l in L if l.startswith('? ')])
dup('numerów zadań', re.findall(r'^::: (?:karta exam|adv) \| Zadanie (\d+)', wynik, re.M))
out = lek if (zapisz and not krit) else ROOT / 'eksport' / 'out' / (lek.stem + '.nowa.md')
out.parent.mkdir(exist_ok=True); out.write_text(wynik)
print(f'Sekcje z odpowiedzi: {len(sekN)} (zastąpiono {i1 - i0 + 1} oryginalnych), frontmatter: {"nowy" if fmN else "stary"}')
P.porownaj(stary, wynik)
for x in krit: print('❌ ' + x)
for x in ostrz: print('⚠ ' + x)
print(('ZAPISANO: ' if out == lek else 'PODGLĄD: ') + str(out) + ('' if not (zapisz and krit) else '  (nie nadpisano lekcji — są błędy krytyczne)'))
sys.exit(1 if krit else 0)
