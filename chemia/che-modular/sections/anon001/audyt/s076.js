

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const E = C.ENGINE = C.ENGINE || {};
const D = C.DOM;
const $ = D.$, esc = D.esc;

function setStatus(report){
  const ok = !!report?.ok;
  const dot = $('status-dot'), label = $('status-label'), ver = $('status-version');
  if(dot) dot.className = 'dot ' + (ok ? 'good' : 'bad');
  if(label) label.textContent = ok ? 'READY' : 'BLOCKED';
  if(ver) ver.textContent = `ENGINE ${E.version} · DATA ${E.dataVersion} · CONTRACT ${E.contractVersion}`;
}
function overview(report){
  const metrics = $('ov-metrics');
  if(metrics){
    const all = E.all();
    const groups = Object.keys(report.summary || {});
    const tot = groups.reduce((s,k)=> s + (report.summary[k]?.total||0), 0);
    const fail = groups.reduce((s,k)=> s + (report.summary[k]?.failed||0), 0);
    metrics.innerHTML = [
      ['MODUŁY', all.length, 'wewnętrznych'],
      ['TESTY', tot, fail ? fail + ' błędów' : 'wszystkie OK'],
      ['KONTRAKT', report.contract.ok ? 'OK' : report.contract.issues.length + ' uwag', 'architektura'],
      ['WERSJA', E.version, 'data ' + E.dataVersion]
    ].map(([k, v, sub])=> `<div class="eu-metric"><b>${esc(v)}</b><small>${esc(k)} · ${esc(sub)}</small></div>`).join('');
  }
  const mods = $('ov-modules');
  if(mods){
    mods.textContent = E.all().map(m=>
      `${m.name.padEnd(12)} ${m.layer.padEnd(14)} v${m.version}  ${m.loaded ? '[OK]' : '[brak]'}  deps: ${m.depends.join(', ') || '—'}`
    ).join('\n');
  }
  const aud = $('ov-audit');
  if(aud){
    aud.textContent = Object.entries(report.summary || {}).map(([k,v])=>
      `${k.padEnd(12)} ${String(v.total).padStart(3)} testów  ${v.failed ? '× ' + v.failed + ' błędów' : '✓ OK'}`
    ).join('\n') + '\n\n' + `STATUS: ${report.ok ? 'READY' : 'BLOCKED'}`;
  }
  const full = $('audit-out');
  if(full) full.textContent = JSON.stringify(report, null, 2);
  const apiOut = $('api-out');
  if(apiOut) apiOut.textContent = JSON.stringify({
    PUBLIC: Object.keys(E.PUBLIC || {}),
    CONTRACT: { rules: E.CONTRACT.rules, errors: E.CONTRACT.errors, layers: E.CONTRACT.layers },
    MODULES: E.modules
  }, null, 2);
}
function tabs(){
  const buttons = document.querySelectorAll('.eu-tabs button[data-tab], .tabnav button[data-tab]');
  const paneNodes = document.querySelectorAll('.eu-tab, .tabpane');
  const activate = (button, tabKey) => {
    const targetTab = tabKey || (button && button.dataset && button.dataset.tab);
    if(typeof showTab === 'function' && document.querySelector('.tabnav button[data-tab="' + targetTab + '"]')){
      showTab(targetTab);
      return;
    }
    buttons.forEach(x => {
      const isCurrent = x === button;
      x.classList.toggle('active', isCurrent);
      x.classList.toggle('on', isCurrent);
    });
    paneNodes.forEach(x => {
      const isCurrent = x.dataset && x.dataset.tab === targetTab;
      x.classList.toggle('active', isCurrent);
      x.classList.toggle('show', isCurrent);
    });
    const which = targetTab;
    if(which === 'audit'){ const r = E.AUDIT.run(); setStatus(r); overview(r); }
    if(which === 'division') E.DIVISION.render();
    if(which === 'thermo') initThermo();
    if(which === 'electro') initElectro();
    if(which === 'atom') initAtomTab();
    if(which === 'nucleus') initNucleusTab();
    if(which === 'isotope') initIsotopeTab();
    if(which === 'spectra') initSpectraTab();
  };
  buttons.forEach(b => {
    b.addEventListener('click', ()=> activate(b, b.dataset.tab));
  });
}
function initAtomTab(){
  const sel = $('at-sym');
  if(sel && !sel.options.length){
    (C.DATA?.ELEMENTS_118 || []).forEach(e=>{
      const o = document.createElement('option'); o.value = e.s; o.textContent = `${e.s} · ${e.n}`;
      sel.appendChild(o);
    });
    sel.value = 'O';
  }
  const btn = $('at-run'); if(!btn) return;
  btn.onclick = ()=>{
    const sym = sel.value;
    const charge = Number($('at-charge').value) || 0;
    const am = C.ATOM.build(sym, charge);
    const out = $('at-out');
    if(!am){ out.innerHTML = '<div class="lab-note">Nieznany pierwiastek.</div>'; return; }
    out.innerHTML = `
      <div class="at-kv">
        <div><small>Z</small><b>${am.Z}</b></div>
        <div><small>Neutrony</small><b>${am.neutrons}</b></div>
        <div><small>Elektrony</small><b>${am.electronCount}</b></div>
        <div><small>Walencyjne</small><b>${am.valenceElectronCount}</b></div>
        <div><small>Rdzeniowe</small><b>${am.coreElectronCount}</b></div>
        <div><small>Niesparowane</small><b>${am.unpairedCount}</b></div>
      </div>
      <div class="at-kv">
        <div style="grid-column:1/-1"><small>Konfiguracja pełna</small><b>${esc(am.configFull)}</b></div>
        <div style="grid-column:1/-1"><small>Konfiguracja powłokowa</small><b>${esc(am.configShells)}</b></div>
        <div style="grid-column:1/-1"><small>Walencyjne podpowłoki</small><b>${esc(am.valenceSubshells.join(', '))}</b></div>
        <div style="grid-column:1/-1"><small>Rdzeniowe podpowłoki</small><b>${esc(am.coreSubshells.join(', ') || '—')}</b></div>
      </div>
    `;
     
    const els = C.ATOM.electrons(sym, charge);
    const eHost = $('at-electrons');
    if(eHost){
      let rows = els.map(e=>{
        const cls = e.isValence ? 'is-valence' : 'is-core';
        return `<tr class="${cls}"><td>${e.index}</td><td>${e.subshell}</td><td>${e.n}</td><td>${e.l}</td><td>${e.ml}</td><td>${e.ms>0?'↑':'↓'}</td><td>${e.isValence?'wal.':'rdz.'}</td><td>${e.isUnpaired?'niespar.':'—'}</td></tr>`;
      }).join('');
      eHost.innerHTML = `<div style="max-height:340px;overflow:auto"><table class="at-table"><thead><tr><th>#</th><th>orb</th><th>n</th><th>l</th><th>ml</th><th>spin</th><th>klasa</th><th>stan</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }
     
    const lHost = $('at-levels');
    if(lHost){
      const p1 = C.ATOM.forPrimary(sym);
      const p2 = C.ATOM.forSecondary(sym, charge);
      const p3 = C.ATOM.forHighSchool(sym);
      const p4 = C.ATOM.forUniversity(sym);
      lHost.innerHTML = `
        <div class="at-list">
          <div class="at-cat"><b>E7</b><small>${p1.shells.map(s=>s.shell+'='+s.electrons).join(' · ')} · wal=${p1.valence}</small></div>
          <div class="at-cat"><b>E8</b><small>${esc(p2.configShort)} (${esc(p2.ionLabel)})</small></div>
          <div class="at-cat"><b>LO</b><small>orbitale: ${p3.orbitals.length} · niespar.: ${p3.unpaired}</small></div>
          <div class="at-cat"><b>Studia</b><small>term: ${esc(p4.termSymbol?.term||'—')} · Z_eff: ${p4.effectiveZ.toFixed(1)}</small></div>
        </div>
        <div class="lab-note" style="margin-top:10px">
          E7: powłoki · E8: konfiguracja · LO: liczby kwantowe · Studia: termy i jądro.
        </div>
      `;
    }
  };
   
  const molSel = $('at-mol');
  if(molSel && !molSel.options.length){
    Object.keys(C.DATA?.MOLECULES || {}).forEach(id=>{
      const o = document.createElement('option'); o.value = id; o.textContent = id;
      molSel.appendChild(o);
    });
    molSel.value = 'H2O';
  }
  const molBtn = $('at-mol-run');
  if(molBtn) molBtn.onclick = ()=>{
    const mid = molSel.value;
    const aid = Number($('at-mol-atom').value) || 0;
    const r = C.ATOM.bondingElectrons(mid, aid);
    const out = $('at-mol-out');
    if(!r.ok){ out.innerHTML = '<div class="lab-note">' + esc(r.reason) + '</div>'; return; }
    out.innerHTML = `
      <div class="at-kv">
        <div><small>Atom</small><b>${esc(r.element)} (id ${r.atomId})</b></div>
        <div><small>Walencyjne</small><b>${r.valenceElectronCount}</b></div>
        <div><small>Wiążące</small><b>${r.bondingCount}</b></div>
        <div><small>Wolne pary</small><b>${r.lonePairCount}</b></div>
        <div><small>ÎŁ rząd wiązań</small><b>${r.bondOrderSum}</b></div>
        <div><small>Hybrydyzacja</small><b>${esc(C.ATOM.hybridization(mid, aid)||'—')}</b></div>
      </div>
    `;
  };
  btn.click();
}
function initNucleusTab(){
  const sel = $('nu-sym');
  if(sel && !sel.options.length){
    (C.DATA?.ELEMENTS_118 || []).forEach(e=>{
      const o = document.createElement('option'); o.value = e.s; o.textContent = `${e.s} · ${e.n}`;
      sel.appendChild(o);
    });
    sel.value = 'Fe';
    $('nu-a').value = '56';
  }
  const btn = $('nu-run'); if(!btn) return;
  btn.onclick = ()=>{
    const sym = sel.value;
    const A = Number($('nu-a').value);
    const n = C.NUCLEUS.build(sym, A);
    const out = $('nu-out');
    if(!n){ out.innerHTML = '<div class="lab-note">Nieznany nuklid.</div>'; return; }
    out.innerHTML = `
      <div class="at-kv">
        <div><small>Nuklid</small><b>${esc(n.isotopeLabel)}</b></div>
        <div><small>Protony Z</small><b>${n.Z}</b></div>
        <div><small>Neutrony N</small><b>${n.N}</b></div>
        <div><small>Promień</small><b>${n.radiusFm.toFixed(2)} fm</b></div>
        <div><small>B (Bethe-Weizsäcker)</small><b>${n.bindingEnergyMeV.toFixed(2)} MeV</b></div>
        <div><small>B/A</small><b>${n.bindingEnergyPerNucleon.toFixed(3)} MeV/nukleon</b></div>
        <div><small>Defekt masy</small><b>${n.massDefectAmu.toFixed(4)} u</b></div>
        <div><small>Stabilność</small><b>${n.stability.stable ? 'stabilny' : (n.stability.halfLife || 'niestabilny')}</b></div>
        <div><small>Tryb rozpadu</small><b>${esc(n.decay || '—')}</b></div>
      </div>
      <div class="lab-note" style="margin-top:12px">
        Model Bethego-Weizsäcker: B = aV·A − aS·A^(2/3) − aC·Z(Z−1)/A^(1/3) − aA·(A−2Z)²/A + Î´
      </div>
    `;
  };
  btn.click();
}
function initIsotopeTab(){
  const sel = $('iso-sym');
  if(sel && !sel.options.length){
    Object.keys(C.DATA?.ISOTOPES || {}).forEach(sym=>{
      const o = document.createElement('option'); o.value = sym; o.textContent = sym;
      sel.appendChild(o);
    });
    sel.value = 'C';
  }
  const btn = $('iso-run'); if(!btn) return;
  btn.onclick = ()=>{
    const sym = sel.value;
    const list = C.ISOTOPE.list(sym);
    const out = $('iso-out');
    if(!list.length){ out.innerHTML = '<div class="lab-note">Brak danych izotopowych.</div>'; return; }
    const rows = list.map(iso=>`
      <tr>
        <td>${sym}-${iso.A}</td>
        <td>${iso.atomicMass.toFixed(6)}</td>
        <td>${(iso.abundance*100).toFixed(4)}%</td>
        <td>${iso.stable ? 'stabilny' : (iso.halfLife||'—')}</td>
        <td>${esc(iso.decayMode||'—')}</td>
        <td>${esc((iso.applications||[]).join(', ')||'—')}</td>
      </tr>
    `).join('');
    const avg = C.ISOTOPE.averageMass(sym);
    out.innerHTML = `
      <div class="at-kv">
        <div><small>Liczba izotopów</small><b>${list.length}</b></div>
        <div><small>Średnia masa</small><b>${avg ? avg.toFixed(4) + ' u' : '—'}</b></div>
      </div>
      <table class="at-table" style="margin-top:12px">
        <thead><tr><th>Nuklid</th><th>Masa [u]</th><th>Abundancja</th><th>Stabilność</th><th>Rozpad</th><th>Zastosowania</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  };
  btn.click();
}
function initSpectraTab(){
  const sel = $('sp-sym');
  if(sel && !sel.options.length){
    Object.keys(C.DATA?.ATOMIC_SPECTRA || {}).filter(k=> k !== 'RYDBERG').forEach(sym=>{
      const o = document.createElement('option'); o.value = sym; o.textContent = sym;
      sel.appendChild(o);
    });
    sel.value = 'H';
  }
  const btn = $('sp-run'); if(!btn) return;
  btn.onclick = ()=>{
    const sym = sel.value;
    const a = C.SPECTRA.atomic(sym);
    const out = $('sp-out');
    if(!a.ok){ out.innerHTML = '<div class="lab-note">' + esc(a.reason) + '</div>'; return; }
    const lines = a.lines || [];
    const rows = lines.map(l=>`
      <tr>
        <td>${esc(l.series||'—')}</td>
        <td>${l.wavelength} nm</td>
        <td>${l.energy} eV</td>
        <td>${esc(l.region||'—')}</td>
        <td>${esc(l.color||'—')}</td>
      </tr>
    `).join('');
    out.innerHTML = `
      <div class="at-kv">
        <div><small>Pierwiastek</small><b>${esc(sym)}</b></div>
        <div><small>Liczba linii</small><b>${lines.length}</b></div>
      </div>
      <table class="at-table" style="margin-top:12px">
        <thead><tr><th>Seria</th><th>Î» [nm]</th><th>E [eV]</th><th>Region</th><th>Barwa</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  };
  const rBtn = $('ry-run');
  if(rBtn) rBtn.onclick = ()=>{
    const n1 = Number($('ry-n1').value);
    const n2 = Number($('ry-n2').value);
    const Z = Number($('ry-z').value);
    const r = C.SPECTRA.rydberg(n1, n2, Z);
    const out = $('ry-out');
    if(!r){ out.innerHTML = '<div class="lab-note">Niepoprawne n₁ < n₂.</div>'; return; }
    out.innerHTML = `<div class="at-kv">
      <div><small>Î»</small><b>${r.wavelength.toFixed(2)} nm</b></div>
      <div><small>E</small><b>${r.energy.toFixed(3)} eV</b></div>
      <div><small>Region</small><b>${esc(C.SPECTRA.region(r.wavelength))}</b></div>
    </div>`;
  };
  btn.click();
  if(rBtn) rBtn.click();
}
function initThermo(){
  const rxSel = $('th-rx');
  if(rxSel && !rxSel.options.length){
    Object.keys(C.DATA?.REACTIONS || {}).forEach(id=>{
      const o = document.createElement('option'); o.value = id; o.textContent = id;
      rxSel.appendChild(o);
    });
  }
  const runBtn = $('th-run');
  if(runBtn) runBtn.onclick = ()=>{
    const id = rxSel.value;
    const T = Number($('th-temp').value) || 298.15;
    const r = C.THERMO.reactionGibbs(id, T);
    const out = $('th-out');
    if(!r.ok){ out.innerHTML = '<div class="lab-note">Brak danych termochemicznych.</div>'; return; }
    out.innerHTML = `
      <div class="lab-kv">
        <div><small>ΔH°</small><b>${r.dH.toFixed(2)} kJ/mol</b></div>
        <div><small>ΔS°</small><b>${r.dS.toFixed(2)} J/(mol·K)</b></div>
        <div><small>ΔG° (${r.T.toFixed(1)} K)</small><b>${r.dG.toFixed(2)} kJ/mol</b></div>
        <div><small>Charakter</small><b>${r.spontaneous ? 'samorzutny' : 'niesamorzutny'}</b></div>
      </div>
      <div class="lab-note" style="margin-top:10px">Reakcja: ${esc(C.REACTION.equation(id))}</div>
    `;
  };
  const arBtn = $('ar-run');
  if(arBtn) arBtn.onclick = ()=>{
    const k0 = Number($('ar-k0').value);
    const Ea = Number($('ar-ea').value);
    const T = Number($('th-temp').value) || 298.15;
    const r = C.THERMO.arrhenius(k0, Ea, T);
    const out = $('ar-out');
    if(!r.ok){ out.innerHTML = '<div class="lab-note">Błąd danych.</div>'; return; }
    out.innerHTML = `<div class="lab-kv">
      <div><small>k₀</small><b>${k0.toExponential(2)} 1/s</b></div>
      <div><small>Ea</small><b>${Ea} kJ/mol</b></div>
      <div><small>T</small><b>${T} K</b></div>
      <div><small>k</small><b>${r.value.k.toExponential(3)} 1/s</b></div>
    </div>`;
  };
}
function initElectro(){
  const cat = $('el-cath'), an = $('el-anod');
  if(cat && !cat.options.length){
    C.ELECTRO.pairs().forEach(p=>{
      const o = document.createElement('option'); o.value = p; o.textContent = p;
      cat.appendChild(o); an.appendChild(o.cloneNode(true));
    });
    cat.value = 'Cu2+/Cu'; an.value = 'Zn2+/Zn';
  }
  const runBtn = $('el-run');
  if(runBtn) runBtn.onclick = ()=>{
    const r = C.ELECTRO.cellPotential(cat.value, an.value);
    const out = $('el-out');
    if(!r.ok){ out.innerHTML = '<div class="lab-note">Nieznana para redoks.</div>'; return; }
    out.innerHTML = `
      <div class="lab-kv">
        <div><small>Katoda</small><b>${esc(r.cathode)}</b></div>
        <div><small>Anoda</small><b>${esc(r.anode)}</b></div>
        <div><small>E° ogniwa</small><b>${r.E0.toFixed(3)} V</b></div>
        <div><small>Charakter</small><b>${r.E0 > 0 ? 'samorzutne' : 'niesamorzutne'}</b></div>
      </div>
    `;
  };
  const neBtn = $('ne-run');
  if(neBtn) neBtn.onclick = ()=>{
    const E0 = Number($('ne-e0').value);
    const n = Number($('ne-n').value);
    const Q = Number($('ne-q').value);
    const T = Number($('ne-t').value);
    const r = C.ELECTRO.nernst(E0, n, Q, T);
    const out = $('ne-out');
    if(!r.ok){ out.innerHTML = '<div class="lab-note">Błąd danych.</div>'; return; }
    out.innerHTML = `<div class="lab-kv">
      <div><small>E°</small><b>${r.value.E0} V</b></div>
      <div><small>n</small><b>${r.value.n}</b></div>
      <div><small>Q</small><b>${r.value.Q}</b></div>
      <div><small>E</small><b>${r.value.E.toFixed(4)} V</b></div>
    </div>`;
  };
}
function runtimeUIAudit(){
  const requiredTabs = ['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'];
  const missingTabs = requiredTabs.filter(k=>!document.getElementById('tab-'+k) && !document.querySelector('.tabpane[data-tab="'+k+'"]'));
  const missingButtons = requiredTabs.filter(k=>!document.querySelector('.eu-tabs button[data-tab="'+k+'"]') && !document.querySelector('.tabnav button[data-tab="'+k+'"]'));
  const requiredControls = ['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];
  const missingControls = requiredControls.filter(id=>!document.getElementById(id));
  const ok = !missingTabs.length && !missingButtons.length && !missingControls.length;
  const result = {version:'2.86',ok,requiredTabs,missingTabs,missingButtons,missingControls,checkedAt:new Date().toISOString()};
  C.RUNTIME_UI_AUDIT = result;
  return result;
}
function boot(){
  runtimeUIAudit();
  const report = E.AUDIT.run();
  setStatus(report);
  overview(report);
  tabs();
  const uiAudit = $('ov-audit');
  if(uiAudit && C.RUNTIME_UI_AUDIT && !C.RUNTIME_UI_AUDIT.ok){
    uiAudit.textContent += '\n\nUI: BRAKI ' + JSON.stringify(C.RUNTIME_UI_AUDIT);
  }
  const runBtn = $('run-audit');
  if(runBtn) runBtn.onclick = ()=>{ const r = E.AUDIT.run(); setStatus(r); overview(r); };
  const auditRefresh = $('audit-refresh');
  if(auditRefresh) auditRefresh.onclick = ()=>{ const r = E.AUDIT.run(); setStatus(r); overview(r); };
  try { C.VIEW?.autoMount?.(document); } catch(_){}
  try { C.UI?.PERIODIC?.init?.(); } catch(_){}
  try { C.UI?.LAB?.init?.(); } catch(_){}
  try { initThermo(); } catch(_){}
  try { initElectro(); } catch(_){}
   
  try { initAtomTab(); } catch(_){}
  try { initNucleusTab(); } catch(_){}
  try { initIsotopeTab(); } catch(_){}
  try { initSpectraTab(); } catch(_){}
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
else boot();
})(window);

try{ const _CHE_BOOT=window.CHE||{}; if(_CHE_BOOT.STRUCTURE_AUDIT) _CHE_BOOT.STRUCTURE_AUDIT_RESULT=_CHE_BOOT.STRUCTURE_AUDIT.run(); }catch(e){ (window.CHE||{}).STRUCTURE_AUDIT_RESULT=[{id:'STR-BOOT',name:'structure audit',ok:false,detail:String(e)}]; }

} catch (err) {
  try { console.warn('[CHE module 76]', err && err.message ? err.message : err); } catch(_){}
}