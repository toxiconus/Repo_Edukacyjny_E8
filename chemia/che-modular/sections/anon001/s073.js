

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DOM;
const $ = D.$, $$ = D.$$, esc = D.esc;
const typeLabel = { metal:'metal', nonmetal:'niemetal', metalloid:'metaloid', halogen:'halogen', noble:'gaz szlachetny', lanthanide:'lantanowiec', actinide:'aktynowiec' };
const typeClass = { metal:'pd-metal', nonmetal:'pd-nonmetal', metalloid:'pd-metalloid', halogen:'pd-halogen', noble:'pd-noble', lanthanide:'pd-lanthanide', actinide:'pd-actinide' };
let selected = 'O';
let currentQuery = '';
let currentFilter = 'all';
function data(){ return Array.isArray(C.DATA?.ELEMENTS_118) ? C.DATA.ELEMENTS_118 : []; }
function visible(e, q, filter){
  const text = (e.s + ' ' + e.n + ' ' + e.z).toLowerCase();
  return (!q || text.includes(q)) && (filter === 'all' || e.t === filter);
}
function renderCell(e, row, col){
  const dim = !visible(e, currentQuery, currentFilter);
  const isActive = selected === e.s;
  const ariaLabel = `${e.n}, liczba atomowa ${e.z}, grupa ${e.g??'—'}, okres ${e.p}, ${typeLabel[e.t]||e.t}`;
  return `<button class="pd-cell ${typeClass[e.t]||''} ${dim?'dim':''} ${isActive?'active':''}" data-sym="${esc(e.s)}" style="grid-column:${col};grid-row:${row}" title="${ariaLabel}" aria-label="${ariaLabel}">
    <span class="pd-z">${e.z}</span>
    <span class="pd-sym">${esc(e.s)}</span>
    <span class="pd-name">${esc(e.n)}</span>
    <span class="pd-mass">${e.mass}</span>
  </button>`;
}
function render(){
  const grid = $('pd-grid'), fb = $('pd-fblock');
  if(!grid || !fb) return;
  currentQuery = ($('pd-search').value || '').trim().toLowerCase();
  currentFilter = $('pd-filter').value;
  let html = '';
  for(let c = 1; c <= 18; c++) html += `<div class="pd-hdr" style="grid-column:${c};grid-row:1">${c}</div>`;
  for(let r = 1; r <= 7; r++) html += `<div class="pd-per" style="grid-column:1;grid-row:${r+1}">${r}</div>`;
  data().forEach(e=>{
    if(e.t === 'lanthanide' || e.t === 'actinide') return;
    if(!e.g) return;
    html += renderCell(e, e.p + 1, e.g);
  });
  html += `<button class="pd-placeholder" style="grid-column:3;grid-row:7" data-jump="lanthanide">57–71<br>Lantanowce</button>`;
  html += `<button class="pd-placeholder" style="grid-column:3;grid-row:8" data-jump="actinide">89–103<br>Aktynowce</button>`;
  grid.innerHTML = html;
  let fh = '<div class="pd-frow"><div class="pd-flabel">Ln</div>';
  data().filter(e=> e.t === 'lanthanide').forEach(e=>{
    const dim = !visible(e, currentQuery, currentFilter);
    fh += `<button class="pd-cell pd-fcell ${typeClass[e.t]} ${dim?'dim':''} ${selected===e.s?'active':''}" data-sym="${esc(e.s)}" aria-label="${esc(e.n)}">
      <span class="pd-z">${e.z}</span><span class="pd-sym">${esc(e.s)}</span><span class="pd-name">${esc(e.n)}</span>
    </button>`;
  });
  fh += '</div><div class="pd-frow"><div class="pd-flabel">An</div>';
  data().filter(e=> e.t === 'actinide').forEach(e=>{
    const dim = !visible(e, currentQuery, currentFilter);
    fh += `<button class="pd-cell pd-fcell ${typeClass[e.t]} ${dim?'dim':''} ${selected===e.s?'active':''}" data-sym="${esc(e.s)}" aria-label="${esc(e.n)}">
      <span class="pd-z">${e.z}</span><span class="pd-sym">${esc(e.s)}</span><span class="pd-name">${esc(e.n)}</span>
    </button>`;
  });
  fh += '</div>';
  fb.innerHTML = fh;
  $$('[data-sym]', grid).forEach(b=> b.onclick = ()=>{ selected = b.dataset.sym; render(); });
  $$('[data-sym]', fb).forEach(b=> b.onclick = ()=>{ selected = b.dataset.sym; render(); });
  $$('[data-jump]', grid).forEach(b=> b.onclick = ()=>{ const e = data().find(x=> x.t === b.dataset.jump); if(e){ selected = e.s; render(); } });
  inspect();
}
function inspect(){
  const e = data().find(x=> x.s === selected) || data().find(x=> x.s === 'O');
  if(!e) return;
  const obj = C.ENGINE?.PUBLIC?.object?.({ type:'atom', id:e.s });
  const insp = $('pd-inspector');
  if(!insp) return;
  const stateStr = [1,7,8,9,17,2,10,18,36,54,86,118].includes(e.z) ? 'gaz'
                 : [35,80].includes(e.z) ? 'ciecz' : 'stały';
  const meta = C.DATA?.ATOM_META?.[e.s] || {};
  const am = C.ATOM?.build?.(e.s);
  insp.innerHTML = `
    <div class="el-hero">
      <div class="el-sym"><small>Z = ${e.z}</small><b>${esc(e.s)}</b><small>${esc(typeLabel[e.t]||e.t)}</small></div>
      <div>
        <div class="el-title">${esc(e.n)}</div>
        <div class="el-sub">Grupa ${e.g??'—'} · okres ${e.p} · blok ${esc(e.block||'—')}</div>
        <div class="el-pills">
          <span class="el-pill">CHE.DATA</span>
          <span class="el-pill">CHE.ATOM</span>
          <span class="el-pill">v${C.ENGINE?.version}</span>
        </div>
      </div>
    </div>
    <div class="el-facts">
      <div class="el-fact"><small>Masa atomowa</small><b>${esc(e.mass)} u</b></div>
      <div class="el-fact"><small>Elektroujemność</small><b>${e.en===null?'—':esc(e.en)}</b></div>
      <div class="el-fact"><small>Protony / Neutrony</small><b>${e.z} / ${meta.neutrons??'—'}</b></div>
      <div class="el-fact"><small>Walencyjne</small><b>${meta.valence??'—'}</b></div>
      <div class="el-fact"><small>Powłoki</small><b>${(meta.shells||[]).join(' · ')||'—'}</b></div>
      <div class="el-fact"><small>Konfiguracja</small><b style="font-family:var(--mono);font-size:11px">${esc(C.MOLECULE?.orbitalSummary?.(e.s)||'—')}</b></div>
    </div>
    <pre class="el-json">${esc(JSON.stringify({
      source:obj?.source||'CHE.DATA',
      version:obj?.version||C.ENGINE?.version,
      relationsCount:obj?.relations?.length||0,
      atom: am ? { Z:am.Z, configFull:am.configFull, valence:am.valenceSubshells, core:am.coreSubshells, unpaired:am.unpairedCount } : null
    }, null, 2))}</pre>
  `;
}
function legend(){
  const map = [
    ['metal','Metale','#dceaf0'],['nonmetal','Niemetale','#e2eee8'],
    ['metalloid','Metaloidy','#eee9d8'],['halogen','Halogeny','#e9eddc'],
    ['noble','Gazy szlachetne','#e4e9f1'],['lanthanide','Lantanowce','#e9e2ef'],
    ['actinide','Aktynowce','#e9e2ef']
  ];
  const el = $('pd-legend');
  if(el) el.innerHTML = map.map(([k,l,c])=>`<span><i style="background:${c}"></i>${l}</span>`).join('');
}
function init(){
  if(!$('pd-search')) return;
  $('pd-search').oninput = render;
  $('pd-filter').onchange = render;
  $('pd-reset').onclick = ()=>{ $('pd-search').value = ''; $('pd-filter').value = 'all'; selected = 'O'; render(); };
  legend(); render();
}
C.UI = C.UI || {};
C.UI.PERIODIC = { init, render };
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();
})(window);

} catch (err) {
  try { console.warn('[CHE module 73]', err && err.message ? err.message : err); } catch(_){}
}