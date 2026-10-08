try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DOM;
const $ = D.$, esc = D.esc;
let current = 'H2O';
let view = 'cv';
let rxCurrent = null;
let subCurrent = null;
function molIds(){ return Object.keys(C.DATA?.MOLECULES || {}); }
function molecule(){ return C.MOLECULE?.canonical?.(current) || C.MOLECULE?.get?.(current); }
function canonicalStructure(m){
  if(!m || !C.STRUCTURE?.createMolecule) return null;
  const atoms=(m.atoms||[]).map((a,i)=>({id:String(a.id||`atom-${i+1}`),element:a.element||a.symbol,isotope:a.isotope??null,formalCharge:a.formalCharge??a.charge??0,position2D:{x:Number(a.x??a.position2D?.x)||0,y:Number(a.y??a.position2D?.y)||0},position3D:{x:Number(a.x??a.position3D?.x)||0,y:Number(a.y??a.position3D?.y)||0,z:Number(a.z??a.position3D?.z)||0}}));
  const bonds=(m.bonds||[]).map((b,i)=>({id:String(b.id||`bond-${i+1}`),atomA:String(b.atomA??atoms[Number(b.a)]?.id),atomB:String(b.atomB??atoms[Number(b.b)]?.id),order:Number(b.order)||1,type:b.type}));
  return C.STRUCTURE.createMolecule({id:m.id,name:m.name,formula:m.formula,charge:m.charge,atoms,bonds,resonance:m.resonance,stereochemistry:m.stereochemistry});
}
function renderModel(m){
  const s=canonicalStructure(m); if(!s) return null;
  return {s,atoms:s.atoms.map(a=>({a,x:Number(a.position2D?.x)||0,y:Number(a.position2D?.y)||0,z:Number(a.position3D?.z)||0,x3:Number(a.position3D?.x)||0,y3:Number(a.position3D?.y)||0})),bonds:s.bonds.map(b=>({b,a:s.atoms.findIndex(x=>x.id===b.atomA),d:s.atoms.findIndex(x=>x.id===b.atomB)}))};
}
function renderFG(){ const s=canonicalStructure(molecule()); if(!s||!C.RENDER2D) return '<div class="lab-note">Brak modułu wzorów 2D.</div>'; return `<div class="eu-card eu-card-pad"><h3 style="margin:0 0 10px">${esc(s.name||current)} · ${esc(s.formula||'')}</h3>${C.RENDER2D.panel(s)}</div>`; }
function profile(){ return C.PROFILE?.molecule?.(current); }
function atomColor(s){ return (C.DATA.ELEM?.[s]?.c2) || '#aab5b8'; }
function stage2D(m){
  if(!m) return '<div class="lab-note">Brak modelu.</div>';
  const rm=renderModel(m); if(!rm) return '<div class="lab-note">Brak modelu kanonicznego.</div>';
  const atoms = rm.atoms, bonds = rm.bonds;
  if(!atoms.length) return '<div class="lab-note">Brak atomów.</div>';
  const xs = atoms.map(a=> Number(a.x)||0), ys = atoms.map(a=> Number(a.y)||0);
  const minx = Math.min(...xs), maxx = Math.max(...xs);
  const miny = Math.min(...ys), maxy = Math.max(...ys);
  const sx = 480/Math.max(1, maxx-minx+140), sy = 320/Math.max(1, maxy-miny+140);
  const scale = Math.min(sx, sy, 2.2);
  const ox = 300 - (minx+maxx)*scale/2, oy = 200 - (miny+maxy)*scale/2;
  const pos = a => ({ x:(Number(a.x)||0)*scale+ox, y:(Number(a.y)||0)*scale+oy });
  let lines = '';
  bonds.forEach(b=>{
    const a = atoms[b.a], d = atoms[b.d];
    if(!a || !d) return;
    const p = pos(a), q = pos(d), order = Number(b.order)||1;
    if(order === 1){
      lines += `<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="#5c6c73" stroke-width="4" stroke-linecap="round"/>`;
    } else {
      const dx = q.y-p.y, dy = -(q.x-p.x), len = Math.hypot(dx,dy)||1;
      for(let k=0; k<order; k++){
        const off = (k-(order-1)/2)*5;
        const nx = dx/len*off, ny = dy/len*off;
        lines += `<line x1="${p.x+nx}" y1="${p.y+ny}" x2="${q.x+nx}" y2="${q.y+ny}" stroke="#5c6c73" stroke-width="4" stroke-linecap="round"/>`;
      }
    }
  });
  let angles = '';
  (C.STRUCTURE?.angles?.(rm.s)?.value||[]).forEach(ang=>{
    const ic = ang.center;
    const c = atoms.find(x=> x.a.id === ic);
    if(!c) return;
    const p = pos(c);
    angles += `<text x="${p.x+12}" y="${p.y-14}" font-size="12" font-weight="800" fill="#176b8c" font-family="var(--mono)">${Number(ang.angleDeg).toFixed(1)}°</text>`;
  });
  const circles = atoms.map(a=>{
    const p = pos({x:a.x,y:a.y});
    const r = a.a.element === 'H' ? 17 : 23;
    const isAcid = false;
    const dark = ['H'].includes(a.a.element);
    return `<g>
      <circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${atomColor(a.a.element)}" stroke="#314149" stroke-width="1.5"/>
      ${isAcid ? `<circle cx="${p.x}" cy="${p.y}" r="${r+7}" fill="none" stroke="#b83a45" stroke-width="2.5"/>` : ''}
      <text x="${p.x}" y="${p.y+5}" text-anchor="middle" font-size="${a.a.element==='H'?15:17}" font-weight="800" fill="${dark?'#26363d':'#ffffff'}" pointer-events="none">${esc(a.a.element)}</text>
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">${lines}${angles}${circles}</svg>`;
}
function renderCV(){
  const m = molecule() || {};
  const g = C.MOLECULE?.geometrySummary?.(current) || {};
  const p = profile() || {};
  return `<div class="lab-grid">
    <article class="eu-card eu-card-pad">
      <span class="lab-tag">001v001 · molecule cv</span>
      <h3 style="margin:6px 0">${esc(m.formula||current)} — karta laboratoryjna</h3>
      <div class="lab-stage">${stage2D(m)}</div>
      <div class="lab-note" style="margin-top:10px">Model kanoniczny z CHE.MOLECULE. Substancje i reakcje z CHE.PROFILE.</div>
    </article>
    <aside class="eu-card eu-card-pad">
      <span class="lab-tag">profil obiektu</span>
      <h3 style="margin:6px 0">${esc(m.name||m.formula||current)}</h3>
      <div class="lab-kv">
        <div><small>Wzór</small><b>${esc(m.formula||'—')}</b></div>
        <div><small>Ładunek</small><b>${esc(m.charge??0)}</b></div>
        <div><small>e⁻ walencyjne</small><b>${C.MOLECULE?.valenceElectrons?.(current)??'—'}</b></div>
        <div><small>Geometria</small><b>${esc(g.geometry||'—')}</b></div>
        <div><small>Kąty</small><b>${(m.angles||[]).map(a=>a.deg+'°').join(', ')||'—'}</b></div>
        <div><small>Wiązania</small><b>${(m.bonds||[]).length}</b></div>
      </div>
      <div class="lab-side-list">
        <div class="lab-row"><span>Substancje</span><b>${(p.substances||[]).length}</b></div>
        <div class="lab-row"><span>Reakcje</span><b>${(p.reactions||[]).length}</b></div>
      </div>
      <div class="lab-note" style="margin-top:12px">${esc(m.note||'')}</div>
    </aside>
  </div>`;
}
function render2D(){
  const m = molecule() || {};
  return `<div class="lab-grid">
    <article class="eu-card eu-card-pad">
      <span class="lab-tag">002v001 · canonical 2d</span>
      <h3 style="margin:6px 0">Struktura 2D</h3>
      <div class="lab-stage">${stage2D(m)}</div>
    </article>
    <aside class="eu-card eu-card-pad">
      <span class="lab-tag">wiązania</span>
      <div class="lab-side-list">
        ${(m.bonds||[]).map(b=>`<div class="lab-row"><span>${esc(m.atoms?.[b.a]?.element)} — ${esc(m.atoms?.[b.b]?.element)}</span><b>${esc(C.MOLECULE?.bondLabel?.(b.order)||b.order)}</b></div>`).join('')}
      </div>
      <div class="lab-note" style="margin-top:12px">Kąty: ${(m.angles||[]).map(a=>esc(a.deg)+'°').join(' · ')||'brak jawnych danych'}</div>
    </aside>
  </div>`;
}
function render3D(){
  const m = molecule() || {};
  return `<div class="lab-grid">
    <article class="eu-card eu-card-pad">
      <span class="lab-tag">003v001 · 3d model</span>
      <h3 style="margin:6px 0">Model przestrzenny</h3>
      <div class="lab-stage" id="lab-3d-stage" style="min-height:420px;cursor:grab">
        <canvas id="lab-3d-canvas" width="900" height="420" style="width:100%;height:420px;display:block"></canvas>
        <div style="position:absolute;left:14px;top:14px;background:rgba(255,255,255,.92);border:1px solid var(--line);border-radius:6px;padding:8px 12px;font:11px var(--sans);color:var(--text)">
          <b>${esc(m.name||m.formula||current)}</b><br>
          <span>${esc(m.geometry||'—')} · ${(m.angles||[]).map(a=>a.deg+'°').join(', ')||'—'}</span>
        </div>
        <div style="position:absolute;right:12px;top:12px;display:flex;gap:6px"><button class="lab-btn" data-3d="reset">Reset</button></div>
        <div style="position:absolute;left:10px;bottom:9px;background:rgba(255,255,255,.92);border:1px solid var(--line);border-radius:5px;padding:5px 8px;font:9px var(--mono);color:#53646c">
          obrót: przeciąganie · zoom: kółko · źródło: CHE.MOLECULE
        </div>
      </div>
    </article>
    <aside class="eu-card eu-card-pad">
      <span class="lab-tag">geometria</span>
      <h3 style="margin:6px 0">${esc(m.formula||current)}</h3>
      <div class="lab-kv">
        <div><small>Geometria</small><b>${esc(m.geometry||'—')}</b></div>
        <div><small>Kąty</small><b>${(m.angles||[]).map(a=>a.deg+'°').join(', ')||'—'}</b></div>
        <div><small>e⁻ łącznie</small><b>${m.totalElectrons??'—'}</b></div>
        <div><small>Rząd</small><b>${(m.bonds||[]).map(b=>b.order).join(' · ')}</b></div>
      </div>
      <div class="lab-note" style="margin-top:12px">Wizualizacja dydaktyczna modelu chemicznego.</div>
    </aside>
  </div>`;
}
function orbitalRows(symbol){
  const atomModel = C.ATOM?.build?.(symbol);
  const electrons = C.ATOM?.electrons?.(symbol) || [];
  if(!atomModel) return '<div class="lab-note">Brak modelu elektronowego.</div>';
  return atomModel.subshells.map(ss=>{
    const isV = atomModel.valenceSubshells.includes(ss.name);
    let boxes = '';
    for(let i=0; i<ss.orbitalCount; i++){
      const inThis = electrons.filter(e=> e.subshell===ss.name && e.orbitalIndex===i);
      const arrows = inThis.map(e=> e.ms>0 ? '↑' : '↓').join('');
      boxes += `<span class="lab-box" style="${isV?'background:#d6eef5;':''}">${arrows}</span>`;
    }
    return `<div class="lab-orb-row">
      <span class="lab-orb-lbl">${esc(ss.name)}${isV?'·w':'·r'}</span>
      <div class="lab-boxes">${boxes}</div>
      <span class="lab-cap">${ss.count} e⁻</span>
    </div>`;
  }).join('');
}
function renderOrb(){
  const m = molecule() || {};
  const atoms = m.atoms || [];
  const initialSymbol = atoms[0]?.element || 'O';
  const am = C.ATOM?.build?.(initialSymbol);
  return `<div class="lab-grid">
    <article class="eu-card eu-card-pad">
      <span class="lab-tag">004v001 · electron model</span>
      <h3 style="margin:6px 0">Elektrony i podpowłoki</h3>
      <div class="lab-toolbar">
        <select id="lab-atom-select" class="lab-select">
          ${atoms.map((a,i)=>`<option value="${i}">atom ${i+1} · ${esc(a.element)}</option>`).join('')}
        </select>
      </div>
      <div id="lab-orbital-host" class="lab-orbitals">${orbitalRows(initialSymbol)}</div>
    </article>
    <aside class="eu-card eu-card-pad">
      <span class="lab-tag">atom</span>
      <h3 style="margin:6px 0" id="lab-orb-sym">${esc(initialSymbol)}</h3>
      <div class="lab-kv">
        <div><small>Numer atomowy</small><b>${C.DATA?.ATOM_META?.[initialSymbol]?.Z??'—'}</b></div>
        <div><small>Walencyjne</small><b>${am?.valenceElectronCount??'—'}</b></div>
        <div><small>Konfiguracja</small><b style="font:11px var(--mono)">${esc(C.MOLECULE?.orbitalSummary?.(initialSymbol)||'—')}</b></div>
        <div><small>Niesparowane</small><b>${am?.unpairedCount??'—'}</b></div>
      </div>
      <div class="lab-note" style="margin-top:12px">Obsada podpowłok z CHE.ATOM.electrons. ·w = walencyjna, ·r = rdzeniowa.</div>
    </aside>
  </div>`;
}
function renderRx(){
  const ids = Object.keys(C.DATA?.REACTIONS || {});
  if(!rxCurrent || !ids.includes(rxCurrent)) rxCurrent = ids[0];
  const r = C.REACTION?.get?.(rxCurrent);
  if(!r) return '<div class="eu-card eu-card-pad"><div class="lab-note">Brak reakcji.</div></div>';
  const th = C.THERMO?.reactionGibbs?.(rxCurrent) || null;
  return `<div class="lab-shell">
    <div class="eu-card eu-card-pad">
      <div class="lab-toolbar">
        <span class="lab-tag">005v001 · reaction bench</span>
        <select id="lab-rx-select" class="lab-select">${ids.map(id=>`<option value="${esc(id)}" ${id===rxCurrent?'selected':''}>${esc(id)}</option>`).join('')}</select>
      </div>
      <div class="lab-eq" style="margin-top:12px">${esc(C.REACTION.equation(rxCurrent))}</div>
      <div class="eu-grid eu-grid-2" style="margin-top:12px">
        <div class="eu-card eu-card-pad">
          <span class="lab-tag">warunki</span>
          <div class="lab-side-list">
            <div class="lab-row"><span>Typ</span><b>${esc(r.type)}</b></div>
            <div class="lab-row"><span>Warunki</span><b>${esc(r.conditions||'—')}</b></div>
            <div class="lab-row"><span>Obserwacja</span><b>${esc(r.observation||'—')}</b></div>
            <div class="lab-row"><span>Bilans</span><b>${r.balance?.ok?'POPRAWNY':'DO KONTROLI'}</b></div>
            <div class="lab-row"><span>ΔG° (298 K)</span><b>${th&&th.ok?th.dG.toFixed(1)+' kJ/mol':'brak danych'}</b></div>
          </div>
        </div>
        <div class="eu-card eu-card-pad">
          <span class="lab-tag">postęp Îľ</span>
          <input id="lab-rx-progress" class="lab-range" type="range" min="0" max="100" value="50" style="width:100%">
          <div class="lab-meter"><i id="lab-rx-bar" style="width:50%"></i></div>
          <div class="lab-row" style="margin-top:8px"><span>Îľ</span><b id="lab-xi">0.50</b></div>
        </div>
      </div>
    </div>
  </div>`;
}

let editorSession = null;
function editorStart(){
  const m=molecule(); if(!m||!C.EDITOR) return null;
  if(!editorSession || editorSession.base?.id!==m.id) editorSession=C.EDITOR.create(canonicalStructure(m),{source:'CHE.UI.LAB'});
  return editorSession;
}
function editorStatus(ed){
  if(!ed) return '<div class="lab-note">Edytor niedostępny.</div>';
  const v=ed.validation||{};
  const cls=v.status==='VALID'?'good':v.status==='VALID_WITH_WARNING'?'warn':'bad';
  return `<div class="lab-row"><span>Status grafu</span><b class="${cls}">${esc(v.status||'—')}</b></div>
    <div class="lab-row"><span>Wzór</span><b>${esc(ed.graph.formula||'—')}</b></div>
    <div class="lab-row"><span>Atomów / wiązań</span><b>${ed.graph.atoms.length} / ${ed.graph.bonds.length}</b></div>
    <div class="lab-row"><span>Historia</span><b>${ed.cursor+1}/${ed.history.length}</b></div>`;
}
function renderEditor(){
  const ed=editorStart(); if(!ed) return '<div class="lab-note">Brak modelu do edycji.</div>';
  const atoms=ed.graph.atoms, bonds=ed.graph.bonds;
  const atomOpts=atoms.map(a=>`<option value="${esc(a.id)}">${esc(a.element)} · ${esc(a.id)}</option>`).join('');
  return `<div class="lab-grid">
    <article class="eu-card eu-card-pad">
      <span class="lab-tag">007v001 · canonical graph editor</span>
      <h3 style="margin:6px 0">Budowanie wzoru z grafu</h3>
      <div class="lab-toolbar" style="margin-top:10px">
        <select id="ed-element" class="lab-select"><option>H</option><option>C</option><option>N</option><option>O</option><option>F</option><option>Cl</option><option>Br</option><option>I</option><option>S</option><option>P</option><option>Na</option><option>Mg</option><option>Ca</option><option>Fe</option><option>Cu</option></select>
        <input id="ed-charge" class="lab-range" type="number" step="1" value="0" style="width:70px" title="ładunek formalny">
        <button class="lab-btn" id="ed-add-atom">+ Atom</button>
      </div>
      <div class="lab-toolbar" style="margin-top:8px">
        <select id="ed-a" class="lab-select" style="flex:1">${atomOpts}</select>
        <select id="ed-b" class="lab-select" style="flex:1">${atomOpts}</select>
        <select id="ed-order" class="lab-select"><option value="1">pojedyncze</option><option value="2">podwójne</option><option value="3">potrójne</option><option value="1.5">aromatyczne</option></select>
        <button class="lab-btn" id="ed-add-bond">+ Wiązanie</button>
      </div>
      <div class="lab-toolbar" style="margin-top:8px">
        <button class="lab-btn" id="ed-undo">↶ Cofnij</button><button class="lab-btn" id="ed-redo">↷ Ponów</button>
        <button class="lab-btn" id="ed-reset">Reset</button><button class="lab-btn" id="ed-reaction">Zbuduj reakcję</button>
      </div>
      <div class="lab-stage" style="margin-top:12px">${stage2D(ed.graph)}</div>
    </article>
    <aside class="eu-card eu-card-pad">
      <span class="lab-tag">graf kanoniczny</span>
      <div class="lab-side-list" id="ed-status">${editorStatus(ed)}</div>
      <span class="lab-tag" style="display:block;margin-top:14px">Atomy</span>
      <div class="lab-side-list">${atoms.map(a=>`<div class="lab-row"><span>${esc(a.element)} <small>${esc(a.id)}</small></span><b>${a.formalCharge||0}</b></div>`).join('')}</div>
      <span class="lab-tag" style="display:block;margin-top:14px">Wiązania</span>
      <div class="lab-side-list">${bonds.map(b=>`<div class="lab-row"><span>${esc(b.atomA)} — ${esc(b.atomB)}</span><b>${esc(b.order)}</b></div>`).join('')}</div>
      <span class="lab-tag" style="display:block;margin-top:14px">Grupy funkcyjne</span>
      <div class="lab-note">${ed.functionalGroups.length?ed.functionalGroups.map(x=>esc(x.name?.pl||x.type)).join(' · '):'brak rozpoznanych grup'}</div>
      <pre id="ed-reaction-out" class="eu-code" style="margin-top:12px;max-height:220px;display:none"></pre>
    </aside>
  </div>`;
}
function bindEditor(){
  const ed=editorStart(); if(!ed) return;
  const rerender=()=>{render();};
  $('ed-add-atom')?.addEventListener('click',()=>{C.EDITOR.addAtom(ed,{element:$('ed-element').value,formalCharge:Number($('ed-charge').value||0)});rerender();});
  $('ed-add-bond')?.addEventListener('click',()=>{const a=$('ed-a').value,b=$('ed-b').value;if(!a||!b||a===b)return;C.EDITOR.addBond(ed,{atomA:a,atomB:b,order:Number($('ed-order').value)});rerender();});
  $('ed-undo')?.addEventListener('click',()=>{C.EDITOR.undo(ed);rerender();});
  $('ed-redo')?.addEventListener('click',()=>{C.EDITOR.redo(ed);rerender();});
  $('ed-reset')?.addEventListener('click',()=>{C.EDITOR.reset(ed);rerender();});
  $('ed-reaction')?.addEventListener('click',()=>{const r=C.EDITOR.reaction(ed,{conditions:{notes:['utworzone przez edytor grafu']}});const out=$('ed-reaction-out');if(out){out.style.display='block';out.textContent=JSON.stringify(r.ok?r.value:r,null,2);}});
}
function renderSub(){
  const ids = Object.keys(C.DATA?.SUBSTANCES || {});
  if(!subCurrent || !ids.includes(subCurrent)) subCurrent = ids[0];
  const x = C.DATA.SUBSTANCES[subCurrent] || {};
  const p = C.DATA.PHYSICAL_PROPS?.[subCurrent] || null;
  const t = C.DATA.THERMOCHEM?.[subCurrent] || null;
  const s = C.DATA.SOLUBILITY?.[subCurrent] || null;
  return `<div class="lab-grid">
    <article class="eu-card eu-card-pad">
      <span class="lab-tag">006v001 · substance profile</span>
      <div class="lab-toolbar" style="margin-top:10px">
        <select id="lab-sub-select" class="lab-select">${ids.map(id=>`<option value="${esc(id)}" ${id===subCurrent?'selected':''}>${esc(id)}</option>`).join('')}</select>
      </div>
      <h3 style="margin:10px 0 6px">${esc(x.name||subCurrent)}</h3>
      <div class="lab-kv">
        <div><small>Wzór</small><b>${esc(x.formula||subCurrent)}</b></div>
        <div><small>Masa molowa</small><b>${esc(x.molarMass??'—')} g/mol</b></div>
        <div><small>Rola</small><b>${esc(x.role||'—')}</b></div>
        <div><small>Stan</small><b>${esc(x.state||'—')}</b></div>
      </div>
      ${p?`<span class="lab-tag" style="display:block;margin-top:14px">Właściwości fizyczne</span><div class="lab-side-list">
        <div class="lab-row"><span>Temperatura topnienia</span><b>${p.mp} K</b></div>
        <div class="lab-row"><span>Temperatura wrzenia</span><b>${p.bp} K</b></div>
        <div class="lab-row"><span>Gęstość</span><b>${p.density} g/cm³</b></div>
        <div class="lab-row"><span>Barwa</span><b>${esc(p.color||'—')}</b></div>
      </div>`:''}
      ${t?`<span class="lab-tag" style="display:block;margin-top:14px">Termochemia</span><div class="lab-side-list">
        <div class="lab-row"><span>ΔHf°</span><b>${t.dHf} kJ/mol</b></div>
        <div class="lab-row"><span>S°</span><b>${t.S} J/(mol·K)</b></div>
        <div class="lab-row"><span>Cp</span><b>${t.Cp} J/(mol·K)</b></div>
      </div>`:''}
      ${s?`<span class="lab-tag" style="display:block;margin-top:14px">Rozpuszczalność</span><div class="lab-side-list">
        <div class="lab-row"><span>Ksp</span><b>${s.Ksp===null?'—':s.Ksp.toExponential(2)}</b></div>
        <div class="lab-row"><span>Rozpuszczalność 20°C</span><b>${s.water20_gL} g/L</b></div>
      </div>`:''}
    </article>
    <aside class="eu-card eu-card-pad">
      <span class="lab-tag">relacje</span>
      <div class="lab-note">Profil z CHE.DATA + warstwy pochodne.</div>
      <pre class="eu-code" style="margin-top:10px">${esc(JSON.stringify({ id:subCurrent, source:'CHE.DATA', version:C.ENGINE?.version, data:{formula:x.formula,molarMass:x.molarMass,role:x.role,state:x.state} }, null, 2))}</pre>
    </aside>
  </div>`;
}
function render3DScene(){
  const stage = $('lab-3d-stage'), canvas = $('lab-3d-canvas'), m = molecule();
  if(!stage || !canvas || !m) return;
  const ctx = canvas.getContext('2d'); if(!ctx) return;
  const W = canvas.width, H = canvas.height;
  const rm = renderModel(m); if(!rm) return;
  let rx = 0.35, ry = 0.55, zoom = 1, dragging = false, lastX = 0, lastY = 0, auto = true, raf = 0;
  const COLORS = { H:'#f1f5f9', C:'#334155', N:'#3b82f6', O:'#ef4444', F:'#22c55e', Cl:'#22c55e', S:'#eab308', P:'#f97316' };
  const RAD = { H:.5, C:.78, N:.72, O:.68, F:.58, Cl:.99, S:1.05, P:1.08 };
  function pts(){
    const ca = Math.cos(rx), sa = Math.sin(rx), cb = Math.cos(ry), sb = Math.sin(ry);
    return rm.atoms.map(a=>{
      const x = a.x3, y = a.y3, z = a.z;
      let y1 = y*ca - z*sa, z1 = y*sa + z*ca;
      let x1 = x*cb + z1*sb, z2 = -x*sb + z1*cb;
      const persp = 520/(520+z2*2.2);
      return { a, x:W/2+x1*4*persp*zoom, y:H/2-y1*4*persp*zoom, z:z2, scale:persp*zoom };
    });
  }
  function sphere(cx, cy, r, base){
    const grad = ctx.createRadialGradient(cx-r*.34, cy-r*.38, r*.08, cx, cy, r);
    grad.addColorStop(0,'#ffffff'); grad.addColorStop(.18,base); grad.addColorStop(.72,base); grad.addColorStop(1,'#17212a');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.48)'; ctx.lineWidth = 1.2; ctx.stroke();
  }
  function draw(){
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#eef3f5'; ctx.fillRect(0, 0, W, H);
    const P = pts();
    for(const b of rm.bonds){
      const a = P[b.a], q = P[b.d]; if(!a || !q) continue;
      const dx = q.x-a.x, dy = q.y-a.y, len = Math.hypot(dx,dy)||1;
      const nx = -dy/len, ny = dx/len;
      const order = Number(b.order)||1;
      const offs = order===3?[-5,0,5]:order>=2?[-3.5,3.5]:[0];
      for(const off of offs){
        ctx.strokeStyle = order>=2?'#7c5d18':'#596a72';
        ctx.lineWidth = order>=2?5:6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(a.x+nx*off, a.y+ny*off);
        ctx.lineTo(q.x+nx*off, q.y+ny*off);
        ctx.stroke();
      }
    }
    [...P].sort((a,b)=>a.z-b.z).forEach(p=>{
      const r = (RAD[p.a.element]||.8)*24*Math.max(.72,Math.min(1.35,p.scale));
      sphere(p.x, p.y, r, COLORS[p.a.element]||'#8b7bb8');
      ctx.fillStyle = ['H'].includes(p.a.element)?'#26363d':'#ffffff';
      ctx.font = '800 ' + Math.max(14, 19*p.scale) + 'px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(p.a.element, p.x, p.y);
    });
  }
  function loop(){ if(auto && !dragging) ry += 0.0035; draw(); raf = requestAnimationFrame(loop); }
  stage.onpointerdown = e => { dragging = true; lastX = e.clientX; lastY = e.clientY; stage.setPointerCapture?.(e.pointerId); };
  stage.onpointermove = e => {
    if(!dragging) return;
    ry += (e.clientX-lastX)*.009;
    rx += (e.clientY-lastY)*.009;
    lastX = e.clientX; lastY = e.clientY;
  };
  stage.onpointerup = ()=>{ dragging = false; };
  stage.onpointercancel = ()=>{ dragging = false; };
  stage.onwheel = e => { e.preventDefault(); zoom = Math.max(.55, Math.min(2.2, zoom*(e.deltaY<0?1.08:.93))); };
  const resetBtn = stage.querySelector('[data-3d="reset"]');
  if(resetBtn) resetBtn.onclick = ()=>{ rx=.35; ry=.55; zoom=1; };
  cancelAnimationFrame(raf); loop();
}
function render(){
  fillSelect();
  const host = $('lab-host'); if(!host) return;
  let html = '';
  if(view === 'cv') html = renderCV();
  else if(view === '2d') html = render2D();
  else if(view === 'fg') html = renderFG();
  else if(view === '3d') html = render3D();
  else if(view === 'orb') html = renderOrb();
  else if(view === 'rx') html = renderRx();
  else if(view === 'sub') html = renderSub();
  else if(view === 'edit') html = renderEditor();
  else if(view === 'redox') html = renderRedox();
  host.innerHTML = html;
  if(view === '3d') render3DScene();
  if(view === 'orb'){
    const sel = $('lab-atom-select');
    if(sel) sel.onchange = e=>{
      const a = molecule()?.atoms?.[Number(e.target.value)];
      const symbol = a?.element || 'O';
      $('lab-orbital-host').innerHTML = orbitalRows(symbol);
      const sym = $('lab-orb-sym'); if(sym) sym.textContent = symbol;
      const am = C.ATOM?.build?.(symbol);
      if(am) sym.nextElementSibling && sym.nextElementSibling.querySelector?.('.lab-kv')?.children?.[0]?.querySelector?.('b')?.replaceChildren?.(document.createTextNode(am.Z));
    };
  }
  if(view === 'rx'){
    const sel = $('lab-rx-select');
    if(sel) sel.onchange = e=>{ rxCurrent = e.target.value; render(); };
    const range = $('lab-rx-progress');
    if(range) range.oninput = e=>{ $('lab-rx-bar').style.width = e.target.value+'%'; $('lab-xi').textContent = (Number(e.target.value)/100).toFixed(2); };
  }
  if(view === 'edit') bindEditor();
  if(view === 'sub'){
    const sel = $('lab-sub-select');
    if(sel) sel.onchange = e=>{ subCurrent = e.target.value; render(); };
  }
}
function fillSelect(){
  const sel = $('lab-mol'); if(!sel) return;
  const ids = molIds();
  if(sel.options.length === ids.length && sel.dataset.built === ids.join(',')) return;
  sel.innerHTML = ids.map(id=>{
    const m = C.MOLECULE?.get?.(id);
    return `<option value="${esc(id)}" ${id===current?'selected':''}>${esc(m?.formula||m?.name||id)} · ${esc(id)}</option>`;
  }).join('');
  sel.dataset.built = ids.join(',');
}
function setMolecule(id){ if(C.MOLECULE?.get?.(id)){ current = id; C.MOLECULE.select?.(id, { source:'lab-suite' }); render(); } }
function setView(v){
  if(!['cv','2d','fg','3d','orb','rx','sub','edit','redox'].includes(v)) return;
  view = v;
  document.querySelectorAll('[data-view]').forEach(b=> b.classList.toggle('active', b.dataset.view === v));
  render();
}
function init(){
  const sel = $('lab-mol'); if(!sel) return;
  sel.onchange = e => setMolecule(e.target.value);
  document.querySelectorAll('[data-view]').forEach(b=> b.onclick = ()=> setView(b.dataset.view));
  const rnd = $('lab-random');
  if(rnd) rnd.onclick = ()=>{ const ids = molIds(); if(ids.length){ current = ids[Math.floor(Math.random()*ids.length)]; render(); } };
  render();
}
C.UI.LAB = { init, render, setView, setMolecule };
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();
})(window);

} catch (err) {
  try { console.warn('[CHE module 74]', err && err.message ? err.message : err); } catch(_){}
}

