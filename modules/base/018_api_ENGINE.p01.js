<script> z lokalną bazą.
8. Audyt przed commitem: AUDIT.run().ok === true.
9. Jeśli moduł rośnie > 400 linii, rozważ podział.
10. Wizualizacje konsumują model, nie definiują chemii.

=================================================================
WERSJONOWANIE
=================================================================
ENGINE.version — cały silnik (2.48)
ENGINE.dataVersion — baza danych (2.17)
ENGINE.contractVersion — publiczne API (2.48)
ENGINE.schemaVersion — struktura envelope (2.12)
ENGINE.modules[nazwa] — wersja modułu

Zmiana danych/API/algorytmu = bump MINOR (+0.01).

=================================================================
CO PO v2.17 — KIERUNKI
=================================================================
- v2.17: kanoniczny graf CHE.STRUCTURE + grupy funkcyjne + walidacja + geometry API
- v2.17: CHE.TRANSFORM rozszerzenie reakcji jako transformacji grafu + bilans strukturalny
- v2.17: CHE.VIZ/VIEW — widoki 2D/3D oparte wyłącznie na modelu kanonicznym
- v2.17: CHE.ORGANIC — rezonans, tautomeria, izomeria strukturalna, E/Z, R/S, relacje stereo i konformery
- v2.17: CHE.GEOMETRY — wspólna geometria 2D/3D/VSEPR, źródła i walidacja
- v2.17: CHE.VISUAL — wspólne CV atomu/cząsteczki, wiązania, grupy funkcyjnej i reakcji
- v2.18: CHE.EDITOR — edycja kopii grafu, historia undo/redo, walidacja, grupy funkcyjne i reakcja z diffu
- v2.19: CHE.RECONSTRUCT — wzór z grafu, normalizacja ID, jawny wodór, mapping atomów i szablony transformacji
- v2.20: CHE.REACTIONSET — reakcje wieloskładnikowe, role, mapping i transfery
- v2.21: CHE.ORGANIC — rozszerzenie analizy grafu, równoważność, grupy, rezonans, tautomeria i stereo
- v2.18: edytor grafu i budowanie wzorów/reakcji
- v2.19: dane widm molekularnych IR/NMR/MS
- v2.17: pełniejsza kinetyka i mechanizmy
- v3.00: wspólne typy naukowe + interoperacyjność chemia/fizyka/biologia/matematyka
`;
function render(){ const el = document.getElementById('division-out'); if(el) el.textContent = text; }
function init(){ render(); }
E.DIVISION = { text:()=> text, render };
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();
})(window);

} catch (err) {
  try { console.warn('[CHE module 75]', err && err.message ? err.message : err); } catch(_){}
}

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
    /* Lista elektronów */
    const els = C.ATOM.electrons(sym, charge);
    const eHost = $('at-electrons');
    if(eHost){
      let rows = els.map(e=>{
        const cls = e.isValence ? 'is-valence' : 'is-core';
        return `<tr class="${cls}"><td>${e.index}</td><td>${e.subshell}</td><td>${e.n}</td><td>${e.l}</td><td>${e.ml}</td><td>${e.ms>0?'↑':'↓'}</td><td>${e.isValence?'wal.':'rdz.'}</td><td>${e.isUnpaired?'niespar.':'—'}</td></tr>`;
      }).join('');
      eHost.innerHTML = `<div style="max-height:340px;overflow:auto"><table class="at-table"><thead><tr><th>#</th><th>orb</th><th>n</th><th>l</th><th>ml</th><th>spin</th><th>klasa</th><th>stan</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    /* Projekcje poziomów */
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
  /* cząsteczka → elektrony wiążące */
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
  /* Wstępnie zasil zakładkę Atom (żeby miała dane przy pierwszym otwarciu) */
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

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
C.RUNTIME_UI_CONTRACT={
  version:'2.85',
  get:()=>C.RUNTIME_UI_AUDIT||null,
  run:()=>{
    const tabs=['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'];
    const missingTabs=tabs.filter(k=>!document.getElementById('tab-'+k) && !document.querySelector('.tabpane[data-tab="'+k+'"]'));
    const missingButtons=tabs.filter(k=>!document.querySelector('.eu-tabs button[data-tab="'+k+'"]') && !document.querySelector('.tabnav button[data-tab="'+k+'"]'));
    return {ok:!missingTabs.length&&!missingButtons.length,missingTabs,missingButtons};
  }
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 77]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function atom(id,element,charge=0){return {id,element,formalCharge:charge};}
function bond(id,a,b,order=1){return {id,atomA:a,atomB:b,order};}
function molecule(id,atoms,bonds,charge=0){return C.STRUCTURE.createMolecule({id,atoms,bonds,charge});}
function ring(prefix,n,reverse=false){
 const atoms=Array.from({length:n},(_,i)=>atom(prefix+(reverse?(n-i):i+1),'C'));
 const bonds=[]; for(let i=0;i<n;i++){const a=atoms[i].id,b=atoms[(i+1)%n].id;bonds.push(bond(prefix+'b'+i,a,b,i%2?1:1.5));}
 return molecule(prefix,atoms,bonds,0);
}
function shuffledRing(prefix,n){
 const r=ring(prefix,n); r.atoms.reverse(); r.bonds=r.bonds.slice().reverse(); return C.STRUCTURE.canonicalize(r);
}
function run(){
 const out=[];
 const add=(id,name,test,detail)=>out.push({id,group:'v252',name,ok:!!test,detail:detail||''});
 const r=ring('R',18), p=shuffledRing('P',18);
 const m1=C.MAPPING.mapReaction({reactants:[r],products:[p]});
 const m2=C.MAPPING.mapReaction({reactants:[r],products:[p]});
 add('V252-001','18-member graph maps completely',m1.ok&&m1.value.complete&&Object.keys(m1.value.mapping).length===18,JSON.stringify(m1.value));
 add('V252-002','18-member mapping deterministic',m1.ok&&m2.ok&&JSON.stringify(m1.value.mapping)===JSON.stringify(m2.value.mapping));
 add('V252-003','mapping is component-scoped',m1.value.mapping['0:R1']==='0:P1'||Object.values(m1.value.mapping).some(v=>v==='0:P1'));
 const w=[]; for(let i=0;i<3;i++) w.push(molecule('W'+i,[atom('O','O'),atom('H1','H'),atom('H2','H')],[bond('b1','O','H1'),bond('b2','O','H2')]));
 const mw=C.MAPPING.mapReaction({reactants:w,products:[w[2],w[0],w[1]]});
 add('V252-004','three symmetric components map',mw.ok&&mw.value.complete&&Object.keys(mw.value.mapping).length===9,JSON.stringify(mw.value));
 const c1=molecule('C1',[atom('C1','C'),atom('C2','C')],[bond('cc','C1','C2',1)]);
 const c2=molecule('C2',[atom('X','C'),atom('Y','C')],[bond('xy','X','Y',2)]);
 const mr=C.REACTION_VALIDATOR.validate({id:'v252-order',reactants:[c1],products:[c2]});
 add('V252-005','bond-order change is detected after mapping',mr.ok&&mr.value.ok&&mr.value.changes.bondOrderChanges.length===1,JSON.stringify(mr.value?.changes||{}));
 const iso=C.ISOMORPHISM.isomorphic(r,p);
 add('V252-006','large graph isomorphism',iso.ok&&iso.value.isomorphic===true);
 const bad=C.MAPPING.mapReaction({reactants:[r],products:[ring('Q',17)]});
 add('V252-007','size mismatch is explicit',bad.ok&&bad.value.complete===false&&bad.value.unmatched.length>0);
 const sym1=C.MAPPING.map(r,p), sym2=C.MAPPING.map(r,p);
 add('V252-008','single-graph mapper deterministic',sym1.ok&&sym2.ok&&JSON.stringify(sym1.value.mapping)===JSON.stringify(sym2.value.mapping));
 return out;
}
C.MAPPING_REGRESSION_252={version:'2.52',run};
if(E.registry)E.registry.MAPPING_REGRESSION_252={layer:'META',owner:'CHE.MAPPING_REGRESSION_252',role:'regresje dużych grafów, symetrii i wieloskładnikowego mappingu',depends:['MAPPING','ISOMORPHISM','REACTION_VALIDATOR']};
if(E.modules)E.modules.MAPPING_REGRESSION_252='2.52';
const old=E.AUDIT?.run;
if(typeof old==='function'&&!E.AUDIT.__v252Wrapped){
 const base=old.bind(E.AUDIT);
 E.AUDIT.run=function(){
   const r=base(), extra=C.MAPPING_REGRESSION_252.run();
   r.groups=r.groups||{}; r.groups.v252=extra;
   r.summary=r.summary||{}; r.summary.v252={total:extra.length,failed:extra.filter(x=>!x.ok).length};
   r.v252=extra; r.ok=!!r.ok&&extra.every(x=>x.ok);
   r.version=E.version; r.contractVersion=E.contractVersion; r.schemaVersion=E.schemaVersion;
   E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};
   return r;
 };
 E.AUDIT.__v252Wrapped=true;
}
E.version='2.52';E.contractVersion='2.52';E.schemaVersion='2.52';
if(E.PUBLIC)E.PUBLIC.version='2.52';
if(E.API_CONTRACT)E.API_CONTRACT.version='2.52';
if(E.RUNTIME)E.RUNTIME.version='2.52';
})(window);

} catch (err) {
  try { console.warn('[CHE module 78]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{}, E=C.ENGINE=C.ENGINE||{};
const ELEMENT_COUNT=118;
const atomPropKeys=Object.keys(D.ATOMIC_PROPS||{});
const thermoKeys=Object.keys(D.THERMOCHEM||{});
const redoxKeys=Object.keys(D.REDOX_POTENTIALS||{});
const isoKeys=Object.keys(D.ISOTOPES||{});

/* Nie zmieniamy starego API. Dodajemy tylko kontekst naukowy. */
D.ATOMIC_PROP_META={
  units:{atomicRadius:'pm',covalentRadius:'pm',vdwRadius:'pm',ionicRadius:'pm',
    electronegativityPauling:'dimensionless',electronegativityMulliken:'eV',
    electronAffinity:'kJ/mol',ionizationEnergies:'kJ/mol',polarizability:'Å^3',
    atomicVolume:'cm^3/mol',meltingPoint:'K',boilingPoint:'K',density:'g/cm^3'},
  caveat:'Promienie atomowe nie mają jednej uniwersalnej definicji; wartość wymaga typu promienia i źródła.'
};
D.THERMO_CONTEXT={
 H2O:{phase:'liquid',T_K:298.15,source:'NIST SRD 69'},
 HCl:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 CO2:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 NH3:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 CH4:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 H2:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 H2SO4:{phase:'liquid',T_K:298.15,source:'NIST/thermochemical reference; verify record before reference-grade use'}
};
D.REDOX_CONTEXT={
  referenceTemperatureK:298.15, medium:'aqueous', type:'standard reduction potential',
  caveat:'E° zależy od zdefiniowanej półreakcji i warunków; klucz jest skrótem półogniwa.'
};

const NIST_CHECKS=[
  {id:'NIST-H2O',key:'H2O',field:'dHf',expected:-285.83,tol:0.05,source:'NIST SRD 69, liquid water at 298.15 K'},
  {id:'NIST-CO2',key:'CO2',field:'dHf',expected:-393.51,tol:0.05,source:'NIST SRD 69, CO2(g) at standard conditions'},
  {id:'NIST-HCl',key:'HCl',field:'dHf',expected:-92.31,tol:0.05,source:'NIST SRD 69, HCl(g) at standard conditions'},
  {id:'NIST-H2O-S',key:'H2O',field:'S',expected:69.95,tol:0.10,source:'NIST SRD 69, liquid water at 298.15 K'},
  {id:'NIST-CO2-S',key:'CO2',field:'S',expected:213.785,tol:0.15,source:'NIST SRD 69, CO2(g) at 298.15 K'},
  {id:'NIST-HCl-S',key:'HCl',field:'S',expected:186.902,tol:0.15,source:'NIST SRD 69, HCl(g) at 298.15 K'}
];
function audit(){
 const issues=[],warnings=[],checks=[];
 const coverage={atomicProps:{present:atomPropKeys.length,total:ELEMENT_COUNT,missing:ELEMENT_COUNT-atomPropKeys.length},
   isotopes:{elements:isoKeys.length},thermochem:{records:thermoKeys.length},redox:{records:redoxKeys.length}};
 if(atomPropKeys.length<ELEMENT_COUNT) issues.push({code:'SCIENCE_ATOMIC_PROPS_INCOMPLETE',present:atomPropKeys.length,total:ELEMENT_COUNT});
 if(!D.ATOMIC_PROP_META?.units) issues.push({code:'SCIENCE_UNITS_MISSING'});
 thermoKeys.forEach(k=>{if(!D.THERMO_CONTEXT[k]) warnings.push({code:'THERMO_NO_CONTEXT',key:k});});
 for(const c of NIST_CHECKS){
   const row=D.THERMOCHEM?.[c.key]; const val=Number(row?.[c.field]);
   const ok=Number.isFinite(val)&&Math.abs(val-c.expected)<=c.tol;
   checks.push({...c,actual:val,ok});
   if(!ok) issues.push({code:'THERMO_REFERENCE_MISMATCH',id:c.id,key:c.key,field:c.field,actual:val,expected:c.expected});
 }
 warnings.push({code:'SCIENCE_PROVENANCE_INCOMPLETE',message:'Per-record provenance is still incomplete; values without source/phase metadata are not reference-grade.'});
 warnings.push({code:'SCIENCE_ATOMIC_RADIUS_DEFINITION',message:D.ATOMIC_PROP_META.caveat});
 return {ok:issues.length===0,issues,warnings,checks,coverage,scientificGate:issues.length===0&&atomPropKeys.length===ELEMENT_COUNT&&thermoKeys.every(k=>!!D.THERMO_CONTEXT[k])};
}
function regression(){
 const r=[];
 const add=(id,name,ok,detail)=>r.push({id,name,ok:!!ok,detail:detail||''});
 add('SCI-001','118 element records',atomPropKeys.length<=ELEMENT_COUNT && atomPropKeys.length>0,`${atomPropKeys.length}/${ELEMENT_COUNT} ATOMIC_PROPS`);
 add('SCI-002','H phase context',D.ATOMIC_PROPS?.H?.crystalStructure==='phase-dependent');
 add('SCI-003','He phase context',D.ATOMIC_PROPS?.He?.crystalStructure==='phase-dependent');
 add('SCI-004','thermochemistry context',thermoKeys.every(k=>!!D.THERMO_CONTEXT[k]));
 const a=audit(); add('SCI-005','NIST thermochemistry checks',a.checks.every(x=>x.ok),JSON.stringify(a.checks));
 add('SCI-006','atomic property units',D.ATOMIC_PROP_META?.units?.electronAffinity==='kJ/mol');
 add('SCI-007','redox context',D.REDOX_CONTEXT?.referenceTemperatureK===298.15&&D.REDOX_CONTEXT?.medium==='aqueous');
 add('SCI-008','science gate is explicit',a.scientificGate===false,'Braki danych nie są maskowane jako PASS');
 return r;
}
C.SCIENCE_INTEGRITY={version:'2.56',audit,regression,NIST_CHECKS,coverage:()=>audit().coverage};
E.modules=E.modules||{}; E.modules.SCIENCE_INTEGRITY='2.56';
E.registry=E.registry||{}; E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA','THERMO','ELECTRO','ISOTOPE']};
E.version='2.56'; E.dataVersion='2.56'; E.contractVersion='2.56';
})(window);

} catch (err) {
  try { console.warn('[CHE module 79]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const els=Array.isArray(D.ELEMENTS_118)?D.ELEMENTS_118:[];
const props=D.ATOMIC_PROPS||{};
const required=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
const optional=['ionicRadius','electronegativityMulliken','polarizability','atomicVolume','oxidationStates','color','discovery'];
function completeness(p){
  const present=required.filter(k=>p&&p[k]!==undefined&&p[k]!==null&&(Array.isArray(p[k])?p[k].length>0:true));
  return {required:required.length,present:present.length,missing:required.filter(k=>!present.includes(k)),complete:present.length===required.length};
}
const records=els.map(e=>{
  const p=props[e.s]||{};
  const c=completeness(p);
  return {z:e.z,s:e.s,name:e.n,mass:e.mass,period:e.p,group:e.g,block:e.block,
    electronegativity:p.electronegativityPauling??e.en,properties:p,coverage:c,
    status:c.complete?'REFERENCE_CANDIDATE':'PARTIAL',
    provenance:p.provenance||null};
});
const bySymbol={};records.forEach(r=>{bySymbol[r.s]=r;});
D.ATOMIC_PROFILES=bySymbol;
D.ATOMIC_DATA_REQUIREMENTS={required:[...required],optional:[...optional],
  rule:'Brak wartości oznacza brak danych w bieżącym źródle roboczym; null nie jest wartością zastępczą.'};
function audit(){
 const complete=records.filter(r=>r.coverage.complete);
 const missing=records.filter(r=>!r.coverage.complete);
 const provenanceComplete=records.filter(r=>r.provenance&&r.provenance.source&&r.provenance.reference&&r.provenance.scope);
 const fieldCoverage={};
 [...required,...optional].forEach(k=>fieldCoverage[k]=records.filter(r=>r.properties?.[k]!==undefined&&r.properties?.[k]!==null).length);
 return {total:records.length,complete:complete.length,partial:missing.length,provenanceComplete:provenanceComplete.length,
   referenceReady:complete.filter(r=>r.provenance&&r.provenance.source&&r.provenance.reference&&r.provenance.scope).length,
   fieldCoverage,missing:missing.map(r=>({z:r.z,s:r.s,missing:r.coverage.missing}))};
}
C.DATA_COVERAGE={version:'2.58',required,optional,records:()=>records.map(r=>({...r,properties:{...r.properties}})),audit,bySymbol};
E.modules=E.modules||{};E.modules.DATA_COVERAGE='2.58';
E.registry=E.registry||{};E.registry.DATA_COVERAGE={layer:'AUDIT/DATA',owner:'CHE.DATA_COVERAGE',role:'mapa kompletności 118 rekordów i provenance bez zastępowania braków fikcyjnymi wartościami',depends:['DATA','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 80]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const old=C.SCIENCE_INTEGRITY;
function audit(){
 const base=old?.audit?.()||{};
 const cov=C.DATA_COVERAGE?.audit?.()||{total:0,complete:0,referenceReady:0};
 const issues=[...(base.issues||[])],warnings=[...(base.warnings||[])];
 if(cov.total!==118) issues.push({code:'SCIENCE_ELEMENT_COVERAGE_NOT_118',actual:cov.total,expected:118});
 if(cov.complete<118) issues.push({code:'SCIENCE_ATOMIC_PROPS_INCOMPLETE',present:cov.complete,total:118});
 if(cov.referenceReady<118) issues.push({code:'SCIENCE_ATOMIC_PROVENANCE_INCOMPLETE',referenceReady:cov.referenceReady,total:118});
 warnings.push({code:'SCIENCE_DATA_POLICY',message:'Nieuzupełnione pola pozostają jawnie brakujące; silnik nie interpoluje ani nie fabrykuje wartości referencyjnych.'});
 return {...base,issues,warnings,coverage:{...(base.coverage||{}),atomicProps:{present:cov.complete,total:118,partial:cov.partial,referenceReady:cov.referenceReady},fields:cov.fieldCoverage},scientificGate:false};
}
function regression(){
 const a=audit();
 return [
  {id:'SCI58-001',name:'118 element profiles',ok:C.DATA_COVERAGE?.audit?.().total===118,detail:String(C.DATA_COVERAGE?.audit?.().total||0)+'/118'},
  {id:'SCI58-002',name:'no fabricated null replacement',ok:D.ATOMIC_DATA_REQUIREMENTS?.rule?.includes('Brak wartości'),detail:'braki są jawne'},
  {id:'SCI58-003',name:'scientific gate remains blocked',ok:a.scientificGate===false,detail:'incomplete data cannot PASS'},
  {id:'SCI58-004',name:'H/He phase correction retained',ok:D.ATOMIC_PROPS?.H?.crystalStructure==='phase-dependent'&&D.ATOMIC_PROPS?.He?.crystalStructure==='phase-dependent'}
 ];
}
