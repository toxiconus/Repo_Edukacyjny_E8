# części małego pliku biblioteki (z dawnego build.py)
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
