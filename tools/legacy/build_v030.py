#!/usr/bin/env python3
"""Buduje: (1) mały plik biblioteki (podgląd), (2) próbnie wpięty duży plik (podmiana bloku GFX+LIBRARY)."""
import re, sys, os
SRC = os.path.join(os.path.dirname(__file__), 'src')
import glob
BIG_IN = (glob.glob('/root/.claude/uploads/*/*CHE_lab_wizualizacje_v0_30_GFX_biblioteka.html')+glob.glob('/mnt/user-data/uploads/CHE_lab_wizualizacje_v0_30_GFX_biblioteka.html'))[0]
OUT = os.path.join(os.path.dirname(__file__), 'out')
os.makedirs(OUT, exist_ok=True)
order = ['p0_phys.js', 'p0b_sim.js', 'p1_core.js', 'x_free.js', 'p2_free_add.js', 'x_app.js', 'p4_apparatus.js', 'x_instr.js', 'x_elektro.js', 'p3_engine.js', 'p5_tail.js', 'p5c_rx.js', 'x_ions.js', 'x_rx_n01.js', 'p5b_return.js', 'p6_library.js']
block = '\n'.join(open(os.path.join(SRC, f), encoding='utf-8').read().rstrip('\n') for f in order) + '\n'
block = block.replace('/*@@LIB_EXT@@*/', open(os.path.join(SRC, 'p6b_lib_phys.js'), encoding='utf-8').read().rstrip('\n'))
assert '@@LIB_EXT@@' not in block
open(os.path.join(OUT, 'CHE_GFX_blok_v1_7.js'), 'w', encoding='utf-8').write(block)

big = open(BIG_IN, encoding='utf-8').read()
# CHE.COLORS (verbatim z dużego pliku) → mały plik pokazuje prawdziwe barwy wskaźników
m = re.search(r'<script id="che-colors-v001">.*?</script>', big, re.S)
colors_script = m.group(0)

head = '''<!DOCTYPE html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CHE · Biblioteka GFX</title><style>
:root{--panel:#fff;--border:#e2e8f0;--surface-soft:#f1f5f9;--accent:#2563eb;--bg:#f8fafc;--text:#1e293b;color-scheme:light}
@media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--panel:#1e293b;--border:#334155;--surface-soft:#0b1220;--bg:#0f172a;--text:#e2e8f0;color-scheme:dark}}
:root[data-theme="dark"]{--panel:#1e293b;--border:#334155;--surface-soft:#0b1220;--bg:#0f172a;--text:#e2e8f0;color-scheme:dark}
body{margin:0 auto;font:14px/1.45 system-ui,sans-serif;background:var(--bg);color:var(--text);padding:12px 16px;max-width:1180px}
header{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between}h1{font-size:18px;margin:4px 0}h1 small{font-weight:400;opacity:.6}
.th button{border:1px solid var(--border);background:var(--panel);color:inherit;border-radius:999px;padding:4px 10px;font:inherit;font-size:12px;cursor:pointer}.th button.on{background:var(--accent);color:#fff;border-color:var(--accent)}
p.lead{margin:2px 0 10px;font-size:12px;opacity:.72}
</style></head><body><header><h1>CHE · Biblioteka GFX <small>plik v0.07 · CHE.PHYS 1.1 · GFX 1.7 · katalog 1.2</small></h1><div class="th"><button data-t="">Auto</button><button data-t="light">Jasny</button><button data-t="dark">Ciemny</button></div></header>
<p class="lead">Blok PHYS + GFX + LIBRARY jest 1:1 tym, co trafia do dużego pliku (od <code>CHE.PHYS</code> do <code>/CHE.LAB.LIBRARY</code>). Barwy wskaźników z CHE.COLORS (kopiowane z dużego pliku); pH i kolor cieczy LAB — atrapy.</p><div id=main></div>
'''
shim = '''<script>
(function(){
const g=window,C=window.CHE=window.CHE||{};C.LAB=C.LAB||{};
const WATER=[205,228,238];function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function pH(S){return 7}function liquidColor(S){return WATER.slice()}
'''
tail = '''C.LAB.LIBRARY.mount(document.getElementById("main"));
})();
(function(){const b=document.querySelectorAll('.th button'),set=t=>{if(t)document.documentElement.setAttribute('data-theme',t);else document.documentElement.removeAttribute('data-theme');b.forEach(x=>x.classList.toggle('on',x.dataset.t===t))};b.forEach(x=>x.onclick=()=>set(x.dataset.t));set('')})();
</script></body></html>
'''
small = head + colors_script + '\n' + shim + block + tail
open(os.path.join(OUT, 'CHE_biblioteka_v0_07.html'), 'w', encoding='utf-8').write(small)

# --- duży plik: podmiana bloku ---
s = big.index('/* ===== CHE.LAB.GFX v1.0')
e = big.index('/* ===== /CHE.LAB.LIBRARY ===== */') + len('/* ===== /CHE.LAB.LIBRARY ===== */\n')
nb = big[:s] + block + big[e:]
# stary rysunek przewodu (vesselCanvas 'gasLine') → rurka GFX łącząca kolbę i zbieranie gazu
old_gl = "P.gasLine=(h,lab,o)=>vesselCanvas(h,lab,o,'gasLine');"
assert old_gl in nb
new_gl = ("P.gasLine=(h,lab,o)=>{o=o||{};GFX.mount(h,{lab,height:o.height||250,parts:[{id:'flask',x:.04,y:.38,w:.28,h:.5,get:()=>Object.assign(GFX.fromLab(lab),{stopper:'tube'})},{id:'gasCollect',x:.42,y:.12,w:.56,h:.8,get:()=>{const S=lab.S||{};return{gas:Math.min(1,S.gasT||0),gasV:Math.min(1,(S.gasV||0)/100)}}}],"
          "links:[{pts:[[.18,.3],[.18,.2],[.38,.2],[.38,.44],[.42,.44]],flow:()=>Math.min(1,(lab.S&&lab.S.gasT)||0)}]});const i=el('div');i.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';i.innerHTML='<b>Przewód gazowy:</b> rurka GFX łączy kolbę z odbieralnikiem; przepływ = gaz z sesji LAB.';h.appendChild(i)};")
nb = nb.replace(old_gl, new_gl)
# vesselCanvas nieużywany → usuń (stare rysunki kolby/probówki/chłodnicy/przewodu)
vs = nb.index('function vesselCanvas(')
ve = nb.index('\nP.cooler=', vs)
assert 'vesselCanvas(' not in nb[ve:] and 'vesselCanvas(' not in nb[:vs], 'vesselCanvas nadal używany'
nb = nb[:vs] + '/* v0.31: usunięto vesselCanvas (stare rysunki kolby/probówki/chłodnicy/przewodu) — wszystko z GFX */' + nb[ve:]
# nowe panele przenośne (gfxVessel) dla nowych elementów
old_list = "[['pipette','<b>Pipeta:</b>"
assert old_list in nb
nb = nb.replace(old_list, "[['dropper','<b>Kroplomierz:</b> pojedyncze krople wskaźnika lub odczynnika.'],['dropFunnel','<b>Wkraplacz:</b> kranik i krople do naczynia poniżej.'],['crucible','<b>Tygiel:</b> porcelana; prażenie ciał stałych.'],['watchGlass','<b>Szkiełko zegarkowe:</b> mała ilość substancji.'],['conductivity','<b>Tester przewodnictwa:</b> żarówka świeci, gdy w roztworze są jony.'],['pHscale','<b>Skala pH:</b> barwy wskaźnika i pH z sesji LAB.'],['hotplate','<b>Mieszadło magnetyczne:</b> grzanie i obroty.'],['tubeRack','<b>Statyw z probówkami:</b> szereg prób obok siebie.'],['gasCollect','<b>Zbieranie gazu nad wodą:</b> odwrócony cylinder w wannie.'],['pipette','<b>Pipeta:</b>", 1)
import sys as _s; _s.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import patch_big
nb, plog = patch_big.patch(nb)
print('\n'.join('  patch: ' + x for x in plog))
open(os.path.join(OUT, 'CHE_lab_wizualizacje_v0_52_GFX16.html'), 'w', encoding='utf-8').write(nb)
open(os.path.join(OUT, '_pre_prune.html'), 'w', encoding='utf-8').write(nb)  # wejście dla tools/split.py (etap 2)
import subprocess; print(subprocess.run(['node', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tools', 'prune.js'), os.path.join(OUT, 'CHE_lab_wizualizacje_v0_52_GFX16.html')], capture_output=True, text=True, env=dict(os.environ, NODE_PATH=subprocess.run(['npm','root','-g'],capture_output=True,text=True).stdout.strip())).stdout.strip())
print(subprocess.run(['node', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tools', 'clean.js'), os.path.join(OUT, 'CHE_lab_wizualizacje_v0_52_GFX16.html')], capture_output=True, text=True, env=dict(os.environ, NODE_PATH=subprocess.run(['npm','root','-g'],capture_output=True,text=True).stdout.strip())).stdout.strip())
print('blok', len(block), 'mały', len(small), 'duży', len(nb))
