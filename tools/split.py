# -*- coding: utf-8 -*-
"""Etap 2: rozcięcie wyniku przed prune/clean (out/_pre_prune.html) na moduły + manifest.json.
Kawałki rozpoznawane w dokumencie (w tej kolejności, bez nakładania):
  gfx    — blok GFX z build.py (src/p*.js, x_*.js wg kolejności) — edytujemy src/
  src    — pliki src/*.js|*.css wstawione dosłownie przez patch_big (dane, silniki, widoki, atlas…)
  lesson — lekcje lesson/*_new.html wstawione jako JSON (json.dumps(...).replace('</','<\\/'))
  base   — reszta (baza v0_30 po łatkach) → modules/base/NNN_<etykieta>.<html|js|css>, cięte na granicach <script>/<style>
Wynik: manifest.json + modules/base/*. Sprawdzenie: tools/assemble.py musi odtworzyć _pre_prune.html bajt w bajt."""
import os, re, json, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRE = os.path.join(ROOT, 'out', '_pre_prune.html')
doc = open(PRE, encoding='utf-8').read()
sys.path.insert(0, ROOT)
GFX_ORDER = ['p0_phys.js', 'p0b_sim.js', 'p1_core.js', 'x_free.js', 'p2_free_add.js', 'x_app.js', 'p4_apparatus.js', 'x_instr.js', 'x_elektro.js', 'p3_engine.js', 'p5_tail.js', 'p5c_rx.js', 'x_ions.js', 'x_rx_n01.js', 'p5b_return.js', 'p6_library.js']
def rd(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
def gfx_block():
    b = '\n'.join(rd('src/' + f).rstrip('\n') for f in GFX_ORDER) + '\n'
    return b.replace('/*@@LIB_EXT@@*/', rd('src/p6b_lib_phys.js').rstrip('\n'))
def lesson_json(p): return json.dumps(rd(p), ensure_ascii=False).replace('</', '<\\/')
cands = [('gfx', None, gfx_block())]
skip = set(GFX_ORDER) | {'p6b_lib_phys.js', 'orig_block.js'}
for f in sorted(os.listdir(os.path.join(ROOT, 'src'))):
    if f in skip or not re.search(r'\.(js|css)$', f): continue
    cands.append(('src', 'src/' + f, rd('src/' + f)))
for f in sorted(os.listdir(os.path.join(ROOT, 'lesson'))):
    if f.endswith('_new.html'): cands.append(('lesson', 'lesson/' + f, lesson_json('lesson/' + f)))
found = []
for t, f, txt in cands:
    if len(txt) < 200: continue
    n = doc.count(txt)
    if n == 1: found.append((doc.index(txt), doc.index(txt) + len(txt), t, f))
    elif n > 1: print('UWAGA: wielokrotnie', f, n)
found.sort()
clean = []
for a, b, t, f in found:
    if clean and a < clean[-1][1]:
        print('pomijam nakładające się', f, 'w', clean[-1][3]); continue
    clean.append((a, b, t, f))
missing = [f for t, f, _ in cands if f and not any(x[3] == f for x in clean)]
BASE = os.path.join(ROOT, 'modules', 'base'); os.makedirs(BASE, exist_ok=True)
for x in os.listdir(BASE): os.remove(os.path.join(BASE, x))
man, nb, pos = [], 0, 0
TAG = re.compile(r'(?=<script\b)|(?=<style\b)|(?<=</script>)|(?<=</style>)')
def label(ch):
    m = re.match(r'\s*<(script|style)([^>]*)>', ch)
    if m:
        i = re.search(r'id="([^"]+)"', m.group(2)); typ = 'json' if 'application/json' in m.group(2) else ('css' if m.group(1) == 'style' else 'js')
        if i: return re.sub(r'[^\w-]+', '_', i.group(1))[:40], typ
        body = ch[m.end():m.end() + 400]
        w = re.search(r'(?:CHE|C)\.([A-Z][A-Z_]{2,})\s*=|function\s+(\w+)|/\*\s*=*\s*([\w .:–-]{4,40})', body)
        return (re.sub(r'[^\w-]+', '_', next(g for g in w.groups() if g).strip())[:40] if w else 'anon'), typ
    if re.match(r'\s*</(script|style)>', ch): return 'tail', 'js'
    k = ch.find('<script')
    if 0 <= k < 4000 and len(ch) > 3 * (k + 1):
        lb, typ = label(ch[k:]); return lb, typ
    t = re.search(r'id="([^"]+)"', ch[:400]); return ('html_' + re.sub(r'[^\w-]+', '_', t.group(1))[:30] if t else 'html'), 'html'
def emit_base(txt):
    global nb
    parts = [p for p in TAG.split(txt) if p]
    # sklej bardzo małe kawałki (np. "\n") z poprzednimi, by nie mnożyć plików
    merged = []
    for p_ in parts:
        if merged and (len(p_) < 300 and not p_.lstrip().startswith('<script') and not p_.lstrip().startswith('<style')): merged[-1] += p_
        else: merged.append(p_)
    for ch in merged:
        nb += 1; lab, typ = label(ch)
        if lab in ('html', 'anon') and ('<script' in ch or typ != 'html'):
            ap = re.findall(r'\b(?:C|CHE)\.([A-Z][A-Z0-9_]{2,})\s*=(?!=)', ch)
            if ap: lab = 'api_' + '_'.join(dict.fromkeys(ap).keys().__iter__().__next__() for _ in [0])
            if '<script' in ch and typ == 'html': typ = 'js'
        ext = {'json': 'json.html', 'css': 'css', 'js': 'js', 'html': 'html'}[typ]
        fn = '%03d_%s.%s' % (nb, lab, ext); open(os.path.join(BASE, fn), 'w', encoding='utf-8').write(ch)
        man.append({'t': 'base', 'f': 'modules/base/' + fn})
for a, b, t, f in clean:
    if a > pos: emit_base(doc[pos:a])
    man.append({'t': t, 'f': f} if f else {'t': t})
    pos = b
if pos < len(doc): emit_base(doc[pos:])
# moduły > 1500 linii dzielimy na części (granice: komentarze sekcji / początki IIFE na początku linii), sklejane bez separatora
BOUND = re.compile(r'^(?:/\*\s*=|//\s*=|\(function|;\(function|\(\(\)\s*=>|<script|</script>|<section|<div class="tabpane"|C\.[A-Z_]+\s*=|CHE\.[A-Z_]+\s*=)')
def chunk(path):
    lines = open(path, encoding='utf-8').read().split('\n')
    if len(lines) <= 1500: return [path]
    out, cur, i0 = [], [], 0
    for i, ln in enumerate(lines):
        if len(cur) >= 700 and (BOUND.match(ln) or len(cur) >= 1400):
            out.append(cur); cur = []
        cur.append(ln)
    out.append(cur)
    base, ext = path.rsplit('.', 1) if not path.endswith('.json.html') else (path[:-10], 'json.html')
    files = []
    for k, part in enumerate(out):
        fn = '%s.p%02d.%s' % (base, k + 1, ext); txt = '\n'.join(part) + ('\n' if k < len(out) - 1 else '')
        open(fn, 'w', encoding='utf-8').write(txt); files.append(fn)
    os.remove(path); return files
man2 = []
for m in man:
    if m['t'] == 'base':
        for fp in chunk(os.path.join(ROOT, m['f'])): man2.append({'t': 'base', 'f': os.path.relpath(fp, ROOT)})
    else: man2.append(m)
man = man2
json.dump({'version': '0.52', 'source': 'out/_pre_prune.html', 'gfx_order': GFX_ORDER, 'gfx_ext': 'src/p6b_lib_phys.js', 'pieces': man}, open(os.path.join(ROOT, 'manifest.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('kawałki:', len(man), '| base:', nb, '| src:', sum(1 for m in man if m['t'] == 'src'), '| lekcje:', sum(1 for m in man if m['t'] == 'lesson'), '| gfx:', sum(1 for m in man if m['t'] == 'gfx'))
print('nieznalezione dosłownie (zostają w base):', ', '.join(missing) or '—')
