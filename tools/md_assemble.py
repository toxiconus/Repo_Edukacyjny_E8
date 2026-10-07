# -*- coding: utf-8 -*-
"""Składa pełny kanon md: znaczniki <!-- @include KOD#k --> → treść części z sources/chemia/lekcje/KOD.md.
Użycie: python3 tools/md_assemble.py kanon_z_include.md wynik.md"""
import os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); LES = os.path.join(ROOT, 'sources', 'chemia', 'lekcje')
import glob
UID = {'N01': 'CHE.02.N01.tlenki', 'N02': 'CHE.02.N02.wodorotlenki', 'N03': 'CHE.02.N03.kwasy', 'N04': 'CHE.02.N04.sole'}
def lesson_file(code):
    g = glob.glob(os.path.join(LES, '*.%s.*.md' % code))
    return g[0] if g else os.path.join(LES, (UID.get(code) or code) + '.md')
def parts(code):
    t = open(lesson_file(code), encoding='utf-8').read().split('\n'); P, cur, buf = {}, None, []
    for l in t:
        m = re.match(r'<!-- @part (\S+)#(\d+) ', l); e = re.match(r'<!-- @end (\S+)#(\d+) -->', l)
        if m: cur, buf = int(m.group(2)), []
        elif e: P[cur] = buf; cur = None
        elif cur is not None: buf.append(l)
    return P
def assemble(src):
    C = {}; out = []
    for l in open(src, encoding='utf-8').read().split('\n'):
        m = re.fullmatch(r'<!-- @include (\S+)#(\d+) -->', l)
        if m:
            code = m.group(1); C.setdefault(code, parts(code)); out += C[code][int(m.group(2))]
        else: out.append(l)
    return '\n'.join(out)
if __name__ == '__main__':
    r = assemble(sys.argv[1]); open(sys.argv[2], 'w', encoding='utf-8').write(r); print('kanon:', len(r), 'znaków')
