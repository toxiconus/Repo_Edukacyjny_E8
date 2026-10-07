# -*- coding: utf-8 -*-
"""Składanie z manifest.json → out/_pre_prune.html (identyczne z wynikiem patch_big) → prune.js → clean.js → wynik.
Użycie: python3 tools/assemble.py [--check plik_wzorcowy_pre] [--out nazwa.html]"""
import os, sys, json, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def rd(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
def assemble(man):
    out = []
    for m in man['pieces']:
        if m['t'] == 'base' or m['t'] == 'src': out.append(rd(m['f']))
        elif m['t'] == 'lesson': out.append(json.dumps(rd(m['f']), ensure_ascii=False).replace('</', '<\\/'))
        elif m['t'] == 'gfx':
            b = '\n'.join(rd('src/' + f).rstrip('\n') for f in man['gfx_order']) + '\n'
            out.append(b.replace('/*@@LIB_EXT@@*/', rd(man['gfx_ext']).rstrip('\n')))
    return ''.join(out)
if __name__ == '__main__':
    man = json.load(open(os.path.join(ROOT, 'manifest.json'), encoding='utf-8'))
    doc = assemble(man)
    a = sys.argv
    if '--check' in a:
        ref = open(a[a.index('--check') + 1], encoding='utf-8').read()
        if doc == ref: print('CHECK OK: złożony plik identyczny ze wzorcem (%d znaków)' % len(doc))
        else:
            i = next((k for k in range(min(len(doc), len(ref))) if doc[k] != ref[k]), min(len(doc), len(ref)))
            print('CHECK FAIL przy znaku', i, '| złożony:', repr(doc[i:i + 80]), '| wzorzec:', repr(ref[i:i + 80])); sys.exit(1)
    if '--out' in a:
        name = a[a.index('--out') + 1]; out = os.path.join(ROOT, 'out', name)
        open(out, 'w', encoding='utf-8').write(doc)
        env = dict(os.environ, NODE_PATH=subprocess.run(['npm', 'root', '-g'], capture_output=True, text=True).stdout.strip())
        for t in ('prune.js', 'clean.js'):
            r = subprocess.run(['node', os.path.join(ROOT, 'tools', t), out], capture_output=True, text=True, env=env); print((r.stdout or r.stderr).strip()[:300])
        print('wynik:', out, os.path.getsize(out))
