"""Automatyczna ocena odpowiedzi różnych AI na tę samą paczkę — żeby szybko odrzucić najsłabsze.

Użycie: python3 narzedzia/ocen_odpowiedzi.py odp_glm.txt odp_gemini.txt odp_grok.txt ...
Liczy: rozmiar, elementy lekcji (wykład, mini-wykłady, ciekawostki, zadania z kluczem i punktacją, test w składni,
fiszki, słownik, klinika, doświadczenia, źródła) oraz naruszenia zasad (bloki kodu, ASCII, cytowania, nagłówki #,
harmonogramy powtórek, minuty, nowe kody @viz, brak raportu przed/po). Wynik: tabela + punkty (więcej = lepiej).
To tylko sito — merytorykę i tak sprawdza Claude przy scalaniu.
"""
import re, sys
from pathlib import Path

PLUS = [  # (nazwa, wzorzec, punkty za trafienie, maks. trafień)
    ('wykład', r'^##+ .*Wykład', 6, 1),
    ('mini-wykłady „W skrócie”', r'W skrócie', 2, 4),
    ('ciekawostki (karta extra)', r'^::: karta extra', 1.5, 6),
    ('zadania (karta exam)', r'^::: karta exam', 1, 18),
    ('zadania z punktacją', r'karta exam \| [^\n]*\(\d+ pkt\)', 0.5, 18),
    ('klucze ::: odp', r'^::: odp', 0.5, 18),
    ('test w składni (? + - !)', r'^\? ', 0.5, 16),
    ('fiszki w składni', r'^[^|\n]{2,60} \| [^|\n]+ \| \w+:\w+', 0.3, 25),
    ('słownik w składni', r'^[^:\n]{2,50} :: ', 0.3, 25),
    ('klinika błędów', r'^::: klinika|Klinika błędów', 2, 1),
    ('doświadczenie ::: dosw', r'^::: dosw', 2, 3),
    ('mnemotechniki', r'mnemotechnik|::: wskazowki', 1, 2),
    ('raport przed/po', r'\| *(Miara|miara) *\|', 3, 1),
    ('źródła', r'^#+ *Źródła|^\*\*Źródła', 2, 1),
    ('co widzę / czego brak w paczce', r'nie ma w paczce|brak w paczce|nie widzę|widzę cały|nie mam w paczce|dokumentu .* nie ma', 2, 1),
    ('oznaczenie (konkurs)', r'\(konkurs\)', 0.2, 15),
]
MINUS = [
    ('bloki kodu ```', r'^```(?!markdown\s*$)', 1.5, 10),
    ('rysunki ASCII', r'[│┌┐└┘├┤─]|-{3,}>|={3,}>|\+={3,}', 1, 10),
    ('znaczniki cytowań', r'【[^】]*】|「[^」]*」|\[\d+\]', 0.3, 30),
    ('nagłówki H1 w lekcji', r'^# (?!LEKCJA|RAPORT|TRYB|PACZKA|MATERIAŁ)', 0.5, 10),
    ('harmonogram powtórek', r'(?i)dzień \d|po (1 dniu|tygodniu|miesiącu)|system powtórek|harmonogram', 3, 3),
    ('minuty / limity czasu', r'\(\d+ ?min\)|\b\d+ ?min\b(?! po)', 0.5, 10),
    ('nowe kody @viz/@model/@zlewka', r'^@(viz|model|zlewka) [\w-]*[A-Z_]', 1, 10),
    ('HTML w treści', r'<details|<ol|<li', 0.3, 20),
]

def ocen(t):
    L = t.split('\n')
    plus, minus, det = 0, 0, {}
    for n, rx, pk, mx in PLUS:
        c = sum(1 for l in L if re.search(rx, l, re.I if 'W skrócie' not in rx else 0))
        det[n] = c; plus += min(c, mx) * pk
    for n, rx, pk, mx in MINUS:
        c = sum(len(re.findall(rx, l)) for l in L) if 'cytowań' in n else sum(1 for l in L if re.search(rx, l))
        det[n] = c; minus += min(c, mx) * pk
    kb = len(t.encode()) / 1024
    plus += min(kb, 60) / 6  # objętość — do 10 pkt
    return round(plus - minus, 1), round(plus, 1), round(minus, 1), kb, det

def main():
    pl = sys.argv[1:]
    if not pl:
        print(__doc__); sys.exit(2)
    W = [(Path(p).name[:34],) + ocen(Path(p).read_text(errors='ignore')) for p in pl]
    W.sort(key=lambda w: -w[1])
    print('| miejsce | plik | wynik | plusy | minusy | KB |\n|---|---|---|---|---|---|')
    for i, w in enumerate(W, 1):
        print(f'| {i} | {w[0]} | **{w[1]}** | {w[2]} | {w[3]} | {w[4]:.0f} |')
    print('\nSzczegóły (liczba trafień):')
    for w in W:
        d = w[5]
        print(f'- **{w[0]}**: ' + ', '.join(f'{k} {v}' for k, v in d.items() if v))
    print(f'\nSugestia: do scalania weź 1–2 najlepsze; pomiń odpowiedzi z wynikiem poniżej połowy zwycięzcy ({W[0][1] / 2:.1f}).')

if __name__ == '__main__':
    main()
