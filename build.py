#!/usr/bin/env python3
"""Build CHE_lab (etap 2, bez bazy v0_30 i patch_big): manifest.json → out/CHE_lab_wizualizacje_v0_NN_GFX16.html (+ prune, clean)
+ mały plik biblioteki GFX. Opcje: --lessons (przebuduj lekcje z lesson/*_build.py), --data (generatory src/gen_*.py), --check (porównaj z out/_pre_ref.html).
Edytujesz: modules/base/* (baza), src/* (silniki, dane, widoki, GFX), lesson/*_build.py (lekcje). Spis: docs/INDEX_KODU.md (python3 tools/index.py)."""
import os, sys, json, re, subprocess
ROOT = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, os.path.join(ROOT, 'tools'))
from assemble import assemble
OUT = os.path.join(ROOT, 'out'); os.makedirs(OUT, exist_ok=True)
man = json.load(open(os.path.join(ROOT, 'manifest.json'), encoding='utf-8'))
V = man['version'].replace('.', '_').replace('0_', 'v0_', 1)
def run(cmd, cwd=ROOT):
    r = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True); print((r.stdout + r.stderr).strip().split('\n')[0][:200])
    if r.returncode: sys.exit('BŁĄD: ' + ' '.join(cmd))
if '--data' in sys.argv:
    for g in sorted(os.listdir(os.path.join(ROOT, 'src'))):
        if g.startswith('gen_') and g.endswith('.py'): run([sys.executable, os.path.join('src', g)])
if '--lessons' in sys.argv:
    # N01, N02, N03 (od v0_54) i N04 Sole (od v0_56) — edycja ręczna lesson/*_new.html; ich buildery zamrożone (historia przebudowy)
    for b in ('fiz_elektro_build.py',):
        if os.path.exists(os.path.join(ROOT, 'lesson', b)): run([sys.executable, b], cwd=os.path.join(ROOT, 'lesson'))
doc = assemble(man)
doc = doc.replace('__CHE_APP_VERSION__', man['version'])  # wersja na stronie startowej (CHE.APP_VERSION)
if '--check' in sys.argv:
    ref = open(os.path.join(OUT, '_pre_ref.html'), encoding='utf-8').read(); print('CHECK', 'OK — identyczny z wzorcem' if ref == doc else 'RÓŻNICA (zmiany względem wzorca)')
# GFX: blok + mały plik biblioteki
block = '\n'.join(open(os.path.join(ROOT, 'src', f), encoding='utf-8').read().rstrip('\n') for f in man['gfx_order']) + '\n'
block = block.replace('/*@@LIB_EXT@@*/', open(os.path.join(ROOT, man['gfx_ext']), encoding='utf-8').read().rstrip('\n'))
open(os.path.join(OUT, 'CHE_GFX_blok_v1_7.js'), 'w', encoding='utf-8').write(block)
exec(open(os.path.join(ROOT, 'tools', '_small_parts.py'), encoding='utf-8').read())
colors = re.search(r'<script id="che-colors-v001">.*?</script>', doc, re.S).group(0)
open(os.path.join(OUT, 'CHE_biblioteka_v0_07.html'), 'w', encoding='utf-8').write(head + colors + '\n' + shim + block + tail)
name = 'CHE_lab_wizualizacje_%s_GFX16.html' % V; out = os.path.join(OUT, name)
open(out, 'w', encoding='utf-8').write(doc)
env = dict(os.environ, NODE_PATH=subprocess.run(['npm', 'root', '-g'], capture_output=True, text=True).stdout.strip())
for t in ('prune.js', 'clean.js'):
    r = subprocess.run(['node', os.path.join(ROOT, 'tools', t), out], capture_output=True, text=True, env=env); print((r.stdout or r.stderr).strip()[:220])
subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'index.py')], capture_output=True)
print('wynik:', name, os.path.getsize(out), '| blok GFX', len(block))
