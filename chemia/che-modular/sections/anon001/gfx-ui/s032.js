

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DOM;
const views = new Map();
const TAG_CLASS = { E8:'e8', UND:'und', AMB:'amb', ZA:'za', MOTION:'motion' };
function define(name, spec){ views.set(name, spec); }
function mount(host){
  const name = host.dataset.che;
  const spec = views.get(name);
  if(!spec) return;
  host.classList.add('viz-card');
  const head = D.el('div', { class:'viz-head' });
  const h4 = D.el('h4', null, spec.title); head.appendChild(h4);
  if(spec.tag){ const tag = D.el('span', { class:'viz-tag ' + (TAG_CLASS[spec.tag] || '') }, spec.tag); head.appendChild(tag); }
  try { const st = C.VIEW_STATUS && C.VIEW_STATUS[name]; if(st){ const b = D.el('span', { class:'viz-status viz-status-' + st.k, title:st.note || '' }, st.k==='dubel' ? 'DUBEL → ' + st.ref : st.k==='engine' ? 'PRZEPIĄĆ NA SILNIK' : 'ROZWIJAĆ'); head.appendChild(b); } } catch(_){}
  host.appendChild(head);
  const body = D.el('div', { class:'viz-body' }); host.appendChild(body);
  try { spec.build(body, host); }
  catch(e){
    body.innerHTML = '<div class="lab-note">Błąd widoku: ' + D.esc(e.message || e) + '</div>';
  }
  try { if(C.EXPLAIN) C.EXPLAIN.attach(host, name); } catch(_){}
}
function autoMount(root){
  root = root || document;
  D.$$('[data-che]', root).forEach(mount);
}
define('molecule-cv', {
  title:'Karta cząsteczki', tag:'UND',
  hint:'Wszystkie dane pochodzą z CHE.MOLECULE i CHE.PROFILE.',
  build(body){
    const id = C.MOLECULE?.getCurrent?.() || 'H2O';
    const m = C.MOLECULE.get(id);
    if(!m){ body.innerHTML = '<div class="lab-note">Brak modelu.</div>'; return; }
    body.innerHTML =
      '<div class="lab-eq">' + D.esc(m.formula) + '</div>' +
      '<div class="lab-kv">' +
        '<div><small>Geometria</small><b>' + D.esc(m.geometry||'—') + '</b></div>' +
        '<div><small>Wiązania</small><b>' + m.bonds.length + '</b></div>' +
        '<div><small>Kąty</small><b>' + (m.angles.map(a=>a.deg+'°').join(', ')||'—') + '</b></div>' +
        '<div><small>e⁻ łącznie</small><b>' + (m.totalElectrons??'—') + '</b></div>' +
      '</div>' +
      '<div class="lab-note" style="margin-top:10px">' + D.esc(m.note||'') + '</div>';
  }
});
define('molecule-2d', {
  title:'Struktura 2D', tag:'UND',
  hint:'Rząd wiązania i kąty z CHE.MOLECULE.',
  build(body){
    const id = C.MOLECULE?.getCurrent?.() || 'H2O';
    const m = C.MOLECULE.get(id);
    if(!m){ body.innerHTML = '<div class="lab-note">Brak modelu.</div>'; return; }
    body.innerHTML = '<div class="lab-stage"></div>';
    const stage = body.querySelector('.lab-stage');
    const svg = D.svg('svg', { viewBox:'0 0 520 320', preserveAspectRatio:'xMidYMid meet' });
    stage.appendChild(svg);
    const atoms = m.atoms, bonds = m.bonds;
    const cx = 260, cy = 160, scale = 1.4;
    const pos = a => ({ x: cx + (Number(a.x)||0)*scale, y: cy + (Number(a.y)||0)*scale });
    bonds.forEach(b=>{
      const a = atoms.find(x=>x.id===b.a), q = atoms.find(x=>x.id===b.b);
      if(!a || !q) return;
      const p1 = pos(a), p2 = pos(q);
      const dx = p2.x-p1.x, dy = p2.y-p1.y, len = Math.hypot(dx,dy)||1;
      const nx = -dy/len, ny = dx/len;
      const offs = b.order === 2 ? [-4,4] : [0];
      offs.forEach(f=>{
        svg.appendChild(D.svg('line', { x1:p1.x+nx*f, y1:p1.y+ny*f, x2:p2.x+nx*f, y2:p2.y+ny*f, stroke:'#5c6c73', 'stroke-width':5, 'stroke-linecap':'round' }));
      });
    });
    atoms.forEach(a=>{
      const p = pos(a);
      const E = C.DATA.ELEM?.[a.element] || { r:20, s:'#64748b', t:'#0f172a' };
      svg.appendChild(D.svg('circle', { cx:p.x, cy:p.y, r:E.r, fill:E.c2||'#8b7bb8', stroke:E.s, 'stroke-width':2 }));
      svg.appendChild(D.svg('text', { x:p.x, y:p.y+5, 'text-anchor':'middle', 'font-size':16, 'font-weight':800, fill:E.t, 'pointer-events':'none' }, a.element));
    });
    (m.angles||[]).forEach(ang=>{
      const c = atoms.find(x=>x.id === ang.atoms[1]); if(!c) return;
      const p = pos(c);
      svg.appendChild(D.svg('text', { x:p.x+12, y:p.y-14, 'font-size':12, 'font-weight':800, fill:'#176b8c' }, ang.deg + '°'));
    });
  }
});
 
define('molecule-orbitals', {
  title:'Orbitale atomowe', tag:'UND',
  hint:'Obsada podpowłok z CHE.MOLECULE.electronConfiguration.',
  build(body){
    const id = C.MOLECULE?.getCurrent?.() || 'H2O';
    const m = C.MOLECULE.get(id);
    if(!m){ body.innerHTML = '<div class="lab-note">Brak modelu.</div>'; return; }
    const symbol = m.atoms[0]?.element || 'O';
    const atomModel = C.ATOM?.build?.(symbol);
    const electrons = C.ATOM?.electrons?.(symbol) || [];
    let html = '<h4 style="margin:0 0 10px">' + D.esc(symbol) + ' · ' + D.esc(C.MOLECULE.orbitalSummary(symbol)) + '</h4>';
    html += '<div style="display:grid;gap:8px">';
    (atomModel?.subshells||[]).forEach(ss=>{
      const isV = atomModel.valenceSubshells.includes(ss.name);
      let boxes = '';
      for(let i=0;i<ss.orbitalCount;i++){
        const inThis = electrons.filter(e=> e.subshell===ss.name && e.orbitalIndex===i);
        const arrows = inThis.map(e=> e.ms>0 ? '↑' : '↓').join('');
        boxes += '<span class="lab-box" style="' + (isV?'background:#d6eef5;':'') + '">' + arrows + '</span>';
      }
      html += '<div class="lab-orb-row"><span class="lab-orb-lbl">' + D.esc(ss.name) + (isV?'·w':'·r') + '</span><div class="lab-boxes">' + boxes + '</div><span class="lab-cap">' + ss.count + ' e⁻' + (isV?' walenc.':'') + '</span></div>';
    });
    html += '</div>';
    body.innerHTML = html;
  }
});
define('reaction', {
  title:'Reakcja', tag:'ZA',
  hint:'Bilans i równanie z CHE.REACTION.',
  build(body){
    const ids = Object.keys(C.DATA?.REACTIONS || {});
    if(!ids.length){ body.innerHTML = '<div class="lab-note">Brak reakcji.</div>'; return; }
    const id = ids[0];
    const r = C.REACTION.get(id);
    if(!r){ body.innerHTML = '<div class="lab-note">Brak reakcji.</div>'; return; }
    const th = C.THERMO?.reactionGibbs?.(id) || null;
    body.innerHTML =
      '<div class="lab-eq">' + D.esc(C.REACTION.equation(id)) + '</div>' +
      '<div class="lab-kv">' +
        '<div><small>Typ</small><b>' + D.esc(r.type) + '</b></div>' +
        '<div><small>Bilans</small><b>' + (r.balance.ok ? 'POPRAWNY' : 'DO KONTROLI') + '</b></div>' +
        '<div><small>Warunki</small><b>' + D.esc(r.conditions||'—') + '</b></div>' +
        '<div><small>ΔG° (298 K)</small><b>' + (th && th.ok ? th.dG.toFixed(1) + ' kJ/mol' : '—') + '</b></div>' +
      '</div>' +
      '<div class="lab-note" style="margin-top:10px">' + D.esc(r.observation||'') + '</div>' +
      '<div class="lab-toolbar" style="margin-top:12px"><label class="lab-tag">Postęp Îľ</label><input type="range" min="0" max="100" value="50" style="flex:1"></div>';
  }
});
define('substance', {
  title:'Substancja', tag:'E8',
  hint:'Profil z CHE.DATA + warstwy pochodne.',
  build(body){
    const ids = Object.keys(C.DATA?.SUBSTANCES || {});
    if(!ids.length){ body.innerHTML = '<div class="lab-note">Brak substancji.</div>'; return; }
    const id = ids[0];
    const p = C.PROFILE?.substance?.(id) || C.DATA.SUBSTANCES[id];
    const phy = p.physical, th = p.thermochem, sol = p.solubility;
    body.innerHTML =
      '<h4 style="margin:0 0 8px">' + D.esc(p.name||id) + '</h4>' +
      '<div class="lab-kv">' +
        '<div><small>Wzór</small><b>' + D.esc(p.formula||id) + '</b></div>' +
        '<div><small>Masa</small><b>' + D.esc(p.molarMass??'—') + ' g/mol</b></div>' +
        '<div><small>Rola</small><b>' + D.esc(p.role||'—') + '</b></div>' +
        '<div><small>Stan</small><b>' + D.esc(p.state||'—') + '</b></div>' +
      '</div>' +
      (phy ? '<div class="lab-note" style="margin-top:10px">Fizyczne: mp ' + phy.mp + ' K · bp ' + phy.bp + ' K · Ď ' + phy.density + ' g/cm³</div>' : '') +
      (th ? '<div class="lab-note" style="margin-top:6px">Termochemia: ΔHf° = ' + th.dHf + ' kJ/mol · S° = ' + th.S + ' J/(mol·K)</div>' : '') +
      (sol ? '<div class="lab-note" style="margin-top:6px">Rozpuszczalność 20°C: ' + sol.water20_gL + ' g/L</div>' : '');
  }
});
C.VIEW = { version:'2.17', define, mount, autoMount, views };
})(window);

} catch (err) {
  try { console.warn('[CHE module 32]', err && err.message ? err.message : err); } catch(_){}
}