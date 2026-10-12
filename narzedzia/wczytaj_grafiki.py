#!/usr/bin/env python3
"""Wczytuje odpowiedź modelu na eksport/GRAFIKI_PROMPT.md (bloki <<<GRAFIKA id przedmiot … GRAFIKA>>> + KATALOG: + OPIS:).
Użycie: python3 narzedzia/wczytaj_grafiki.py odp1.md [odp2.md …] [--wstaw]
  - zapisuje każdą grafikę jako podgląd: <przedmiot>/szablon/nowe/<id>.html (+ <id>.opis.txt, <id>.katalog.txt),
  - sprawdza: znaczniki VIZ, id, globalne zmienne, kolory na sztywno, zewnętrzne zasoby, rozmiar; test w Chromium (błędy JS, czy coś narysowano),
  - --wstaw (tylko bio): dopisuje kod do biologia/bio/szablon/bio-viz.js (VIZ.→BIO., vz-→bv-) i wiersz do BIO_KATALOG.md;
    pol/ang zostają w nowe/ (biblioteki pol-viz.js nie mają jeszcze pomocników VIZ)."""
import re, sys, subprocess, json
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
a = sys.argv[1:]
if not a: print(__doc__); sys.exit(2)
wstaw = '--wstaw' in a; a = [x for x in a if x != '--wstaw']
txt = ''.join(Path(x).read_text() + '\n' for x in a)
KAT = {'bio': ROOT/'biologia/bio', 'pol': ROOT/'polski', 'ang': ROOT/'angielski'}
LIB = {'bio': (ROOT/'biologia/bio/szablon/bio-viz.js', ROOT/'biologia/bio/BIO_KATALOG.md')}
bloki = re.findall(r'<<<GRAFIKA[ \t]+(\S+)[ \t]+(\S+)[^\n]*\n(.*?)\n\s*GRAFIKA>>>(.*?)(?=<<<GRAFIKA|\Z)', txt, re.S)
if not bloki: print('BŁĄD: brak bloków <<<GRAFIKA … GRAFIKA>>>'); sys.exit(1)
wyn = []
for gid, prz, html, ogon in bloki:
    html = re.sub(r'^\s*```[a-z]*\s*\n|\n\s*```\s*$', '', html.strip())
    kat = (re.search(r'^KATALOG:\s*(\|.*\|)\s*$', ogon, re.M) or [None, ''])[1]
    opis = (re.search(r'^OPIS:\s*(@opis .*)$', ogon, re.M) or [None, ''])[1]
    blad, ostrz = [], []
    m = re.search(r'/\*\s*>>>\s*VIZ\s+(\S+)\s*\*/(.*?)/\*\s*<<<\s*VIZ\s*\*/', html, re.S)
    if not m: blad.append('brak znaczników /* >>> VIZ id */ … /* <<< VIZ */'); kod = ''
    else:
        kod = m.group(2).strip()
        if m.group(1) != gid: blad.append(f'id w znaczniku ({m.group(1)}) ≠ {gid}')
        if f"VIZ.define('{gid}'" not in kod and f'VIZ.define("{gid}"' not in kod: blad.append('brak VIZ.define z tym id')
        if re.search(r'#[0-9a-fA-F]{3,6}\b|rgb\(', kod): ostrz.append('kolor wpisany na sztywno')
        if re.search(r'https?://|fetch\(|localStorage|alert\(', kod): blad.append('zasób zewnętrzny / fetch / localStorage / alert')
        if re.search(r'^(var|let|const|function)\s', kod, re.M): blad.append('zmienna lub funkcja globalna poza VIZ.define')
        if len(kod.encode()) > 20000: ostrz.append(f'kod {len(kod.encode())//1024} KB')
    if not kat: ostrz.append('brak linii KATALOG')
    if not opis: blad.append('brak linii OPIS: @opis …')
    if prz not in KAT: blad.append(f'nieznany przedmiot {prz}'); prz = 'bio'
    d = KAT[prz] / 'szablon' / 'nowe'; d.mkdir(parents=True, exist_ok=True)
    f = d / f'{gid}.html'; f.write_text(html)
    (d / f'{gid}.opis.txt').write_text(opis + '\n'); (d / f'{gid}.katalog.txt').write_text(kat + '\n')
    test = subprocess.run([sys.executable, '-c', '''
import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":900}); e=[]
    pg.on("pageerror",lambda x:e.append(str(x))); pg.on("console",lambda m:e.append(m.text) if m.type=="error" else None)
    pg.goto("file://"+sys.argv[1]); pg.wait_for_timeout(1200)
    n=pg.evaluate("document.querySelectorAll(\\".viz-body svg *, .viz-body button, .viz-body input\\").length")
    w=pg.evaluate("document.documentElement.scrollWidth")
    print(n, w, "|".join(e)[:300]); b.close()''', str(f)], capture_output=True, text=True, timeout=60)
    out = (test.stdout.strip() or test.stderr.strip()[-200:]).split(' ', 2)
    try:
        n, w = int(out[0]), int(out[1]); err = out[2] if len(out) > 2 else ''
        if err: blad.append('błąd JS: ' + err)
        if n < 5: blad.append(f'prawie nic nie narysowano ({n} elementów)')
        if w > 400: ostrz.append(f'szersze niż ekran telefonu ({w} px)')
    except Exception: ostrz.append('test przeglądarki nie zadziałał: ' + ' '.join(out)[:120])
    ok = not blad
    if ok and wstaw and prz in LIB and kod:
        lib, katf = LIB[prz]
        L = lib.read_text()
        if f"BIO.define('{gid}'" in L: ostrz.append('już jest w bibliotece — nie dopisuję')
        else:
            k2 = kod.replace('VIZ.', 'BIO.').replace("'vz-", "'bv-").replace('"vz-', '"bv-').replace(' vz-', ' bv-')
            lib.write_text(L.rstrip() + f'\n\n/* {gid} — z odpowiedzi GRAFIKI_PROMPT */\n' + k2 + '\n')
            if kat: katf.write_text(katf.read_text().rstrip() + '\n' + kat + '\n')
            ostrz.append('WSTAWIONO do ' + lib.name)
    wyn.append((gid, prz, ok))
    print(('✅ ' if ok else '❌ ') + f'{gid} [{prz}] → {f.relative_to(ROOT)}' + ''.join('\n   ❌ ' + x for x in blad) + ''.join('\n   ⚠ ' + x for x in ostrz))
print(f'\nRazem: {len(wyn)}, poprawnych: {sum(1 for x in wyn if x[2])}')
sys.exit(0 if all(x[2] for x in wyn) else 1)
