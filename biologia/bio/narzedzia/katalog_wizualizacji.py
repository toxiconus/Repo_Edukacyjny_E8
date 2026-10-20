#!/usr/bin/env python3
"""Generuje biologia/bio/BIO_KATALOG.md z plików biologia/bio/szablon/wizualizacje/<id>.js.
Użycie: python3 biologia/bio/narzedzia/katalog_wizualizacji.py   (po każdej zmianie grafiki albo lekcji)
Kolumny: id · plik · co pokazuje · opcje · animacja · lekcje (gdzie użyta, z md/*.md przez @viz).
„Co pokazuje” i „Opcje” są ręczne — zachowują się z poprzedniego katalogu (wiersz o tym samym id).
Gdy grafika nie ma wpisu w md ani w katalogu, lekcje = „—”."""
import re, os, glob
BIO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIZ = os.path.join(BIO, 'szablon', 'wizualizacje')
KAT = os.path.join(BIO, 'BIO_KATALOG.md')
MD = os.path.join(BIO, 'md')

stare = {}
if os.path.exists(KAT):
    for ln in open(KAT, encoding='utf-8'):
        m = re.match(r'\| ([\w-]+) \| (.*?) \| (.*?) \| (.*?) \|\s*$', ln.rstrip('\n'))
        if m and m.group(1) != 'id': stare[m.group(1)] = (m.group(2), m.group(3))

lekcje = {}
for f in sorted(glob.glob(os.path.join(MD, '*.md'))):
    kod = os.path.basename(f).split('.')[2] if os.path.basename(f).count('.') >= 3 else os.path.basename(f)
    for vid in re.findall(r'^@viz\s+([\w-]+)', open(f, encoding='utf-8').read(), re.M):
        lekcje.setdefault(vid, [])
        if kod not in lekcje[vid]: lekcje[vid].append(kod)

wiersze, bledy = [], []
for f in sorted(glob.glob(os.path.join(WIZ, '*.js'))):
    vid = os.path.basename(f)[:-3]
    src = open(f, encoding='utf-8').read()
    m = re.search(r"BIO\.define\('([^']+)',\{opis:'((?:[^'\\]|\\.)*)'", src)
    if not m or m.group(1) != vid: bledy.append(vid); continue
    opis = m.group(2).replace('\\\'', "'")
    anim = 'tak' if 'BIO.fx.auto(' in src else 'nie'
    co, opc = stare.get(vid, (opis, '—'))
    lek = ', '.join(lekcje.get(vid, [])) or '—'
    wiersze.append(f'| {vid} | `szablon/wizualizacje/{vid}.js` | {co} | {opc} | {anim} | {lek} |')

naglowek = '''# Katalog grafik BIO (`szablon/wizualizacje/<id>.js`)

Każda grafika to osobny plik; lekcja dołącza do swojego HTML tylko grafiki, których używa (`@viz`) plus rdzeń `szablon/bio-core.js`.
Wspólne narzędzia (S, H, svg, T, btn, chain, ICO…) są w rdzeniu jako `BIO.Lh["<grupa>.<nazwa>"]`; grafika dostaje je aliasami na górze pliku.
Użycie w md lekcji: `@viz <id> {opcja="wartość"} | Tytuł | podpis` + linia `@opis` (obowiązkowa).
Nowa grafika: plik `szablon/wizualizacje/<id>.js` z `BIO.define('<id>',{opis:'…',mount(el,opt,fig){…}})`, potem `python3 biologia/bio/narzedzia/katalog_wizualizacji.py`.
Zasady: statyczny widok + kliknięcie = wyjaśnienie (`BIO.fx.info`); ruch tylko na żądanie ucznia lub autoodtwarzanie (`BIO.fx.auto`, „animacja: tak”). Kolory tylko ze zmiennych CSS (`--nt-A`, `--sugar`, `--nucleus`…). Tylko tryb dzienny.

| id | plik | Co pokazuje | Opcje | Animacja | Lekcje |
|---|---|---|---|---|---|
'''
open(KAT, 'w', encoding='utf-8').write(naglowek + '\n'.join(wiersze) + '\n')
print(f'wierszy: {len(wiersze)}, z animacją: {sum(1 for w in wiersze if "| tak |" in w)}, bez użycia w lekcji: {sum(1 for w in wiersze if w.endswith("| — |"))}')
if bledy: print('UWAGA: plik nie zawiera BIO.define o tym samym id:', ', '.join(bledy))
