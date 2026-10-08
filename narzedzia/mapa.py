#!/usr/bin/env python3
"""Generuje MAPA.md: lista plików repo z rozmiarem i flagą „duży”.
Uruchom z katalogu głównego: python3 narzedzia/mapa.py  (zero tokenów, zamiast ls/find)."""
import os, subprocess

PROG = 50 * 1024
POMIN = ('.specstory/', '.vscode/', '.claude/')
ZWIN = ('chemia/archiwum',)
NIE_CZYTAC = ('che-viz.js', '/dist/', '.specstory/', 'chemia/archiwum/', '/modules/_anon')

pliki = subprocess.run(['git', 'ls-files'], capture_output=True, text=True).stdout.split('\n')
grupy = {}
for p in filter(None, pliki):
    if p.startswith(POMIN) or not os.path.exists(p):
        continue
    folder = os.path.dirname(p) or '.'
    grupy.setdefault(folder, []).append((p, os.path.getsize(p)))

def kb(n):
    return f'{n/1024/1024:.1f} MB' if n >= 1024 * 1024 else f'{n/1024:.0f} KB'

out = ['# MAPA repo (generowana: `python3 narzedzia/mapa.py`)', '',
       '⚠ = ponad 50 KB: tylko `grep -n` + `sed -n a,bp`. ⛔ = nie czytać (wynik builda / zamrożone / historia).',
       'Pominięte: ' + ', '.join(POMIN), '']
for folder in sorted(grupy):
    lst = sorted(grupy[folder])
    out.append(f'## {folder}  ({len(lst)} pl., {kb(sum(s for _, s in lst))})')
    zwin = folder.startswith(ZWIN) or len(lst) > 12
    if zwin:
        duze = [x for x in lst if x[1] > PROG]
        out.append(f'- (zwinięte; `ls {folder}`){" — duże:" if duze else ""}')
        lst = duze[:8]
    for p, s in lst:
        znak = '⛔' if any(x in '/' + p for x in NIE_CZYTAC) else ('⚠' if s > PROG else '')
        out.append(f'- {znak}`{os.path.basename(p)}` {kb(s)}')
    out.append('')
open('MAPA.md', 'w', encoding='utf-8').write('\n'.join(out))
print('MAPA.md:', sum(len(v) for v in grupy.values()), 'plików')
