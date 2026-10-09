(function(){
  const C = window.CHE;
  if(!C || !C.DATA){
    window.__CHE_LAB_BRIDGE__ = { active:false, reason:'CHE not loaded' };
    return;
  }
  const D = C.DATA;
  const EL = D.ELEMENTS_118 || [];
  const AP = D.ATOMIC_PROPS || {};
  const ISO = D.ISOTOPES || {};
  const FIE = D.FIRST_IONIZATION_ENERGY || {};
  const META = D.ATOM_META || {};
  const bySym = {};
  EL.forEach(e => { bySym[e.s] = e; });

  const TMAP = {
    metal:'metal', nonmetal:'niemetal', metalloid:'półmetal',
    halogen:'fluorowiec', noble:'gaz szlachetny',
    lanthanide:'lantanowiec', actinide:'aktynowiec'
  };
  const STMAP = { gas:'gaz', solid:'ciało stałe', liquid:'ciecz', plasma:'plazma' };

  function pctAb(v){
    if(v == null || v === '') return 0;
    const n = Number(v);
    if(!Number.isFinite(n)) return 0;
    
    return n > 0 && n <= 1.0000001 ? +(n * 100).toPrecision(6) : n;
  }

  function mapIso(rawIso){
    const out = [];
    if(!rawIso) return out;
    if(Array.isArray(rawIso)){
      rawIso.forEach(x=>{
        if(!x) return;
        const A = x.A != null ? x.A : (x.massNumber != null ? x.massNumber : x.a);
        if(A == null) return;
        const ab = pctAb(x.ab != null ? x.ab : x.abundance);
        const hl = x.hl || x.halfLife || x.half_life || undefined;
        const item = { A: +A, ab };
        if(hl) item.hl = hl;
        if(x.decayMode) item.dm = x.decayMode;
        if(x.stable === false && !hl) item.hl = item.hl || '?';
        out.push(item);
      });
    } else if(typeof rawIso === 'object'){
      Object.keys(rawIso).forEach(A=>{
        const x = rawIso[A];
        if(x && typeof x === 'object')
          out.push({ A:+A, ab:pctAb(x.ab != null ? x.ab : x.abundance), hl:x.hl||x.halfLife||undefined });
        else if(typeof x === 'number')
          out.push({ A:+A, ab:pctAb(x) });
      });
    }
    out.sort((a,b)=>a.A-b.A);
    return out;
  }

  function engProps(sym){
    const e = bySym[sym];
    const p = AP[sym] || {};
    const meta = META[sym] || {};
    if(!e && !Object.keys(p).length && !Object.keys(meta).length) return null;

    const ion = {};
    if(p.ionicRadius){
      Object.keys(p.ionicRadius).forEach(k=>{
        const v = p.ionicRadius[k];
        if(v != null) ion[k] = v;
      });
    }

    let ie = Array.isArray(p.ionizationEnergies) ? p.ionizationEnergies.slice() : null;
    if((!ie || !ie.length) && FIE[sym] != null){
      const v = FIE[sym];
      ie = Array.isArray(v) ? v.slice() : (typeof v === 'object' && v.value != null ? [v.value] : [v]);
    }

    const isoList = mapIso(ISO[sym]);

    const stRaw = p.stateSTP || null;
    const st = stRaw ? (STMAP[String(stRaw).toLowerCase()] || stRaw) : undefined;

    return {
      z: e ? e.z : (meta.Z || null),
      s: sym,
      n: e ? e.n : (meta.name || sym),
      m: e && e.mass != null ? e.mass : (meta.mass != null ? meta.mass : null),
      b: e ? e.block : (meta.block || null),
      g: e ? e.g : (meta.group != null ? meta.group : null),
      p: e ? e.p : (meta.period != null ? meta.period : null),
      t: e ? (TMAP[e.t] || e.t) : null,
      en: (e && e.en != null) ? e.en : (p.electronegativityPauling != null ? p.electronegativityPauling : null),
      ar: p.atomicRadius != null ? p.atomicRadius : null,
      cr: p.covalentRadius != null ? p.covalentRadius : null,
      vdw: p.vdwRadius != null ? p.vdwRadius : null,
      ion: Object.keys(ion).length ? ion : undefined,
      ea: p.electronAffinity != null ? p.electronAffinity : null,
      ie: ie && ie.length ? ie.map(Number) : undefined,
      ox: Array.isArray(p.oxidationStates) ? p.oxidationStates.slice() : undefined,
      pol: p.polarizability != null ? p.polarizability : null,
      mp: p.meltingPoint != null ? p.meltingPoint : null,
      bp: p.boilingPoint != null ? p.boilingPoint : null,
      rho: p.density != null ? p.density : null,
      st: st,
      cs: p.crystalStructure || undefined,
      iso: isoList.length ? isoList : undefined,
      _src: 'CHE'
    };
  }

  function mergePreferLocal(local, eng){
    if(!eng) return local;
    if(!local) return Object.assign({}, eng);
    const out = Object.assign({}, eng, local);
    
    ['m','en','ar','cr','vdw','ea','pol','mp','bp','rho','st','cs','b','g','p','t','n','z'].forEach(k=>{
      if(local[k] == null || local[k] === '') out[k] = eng[k];
      else out[k] = local[k];
    });
    if((!local.ie || !local.ie.length) && eng.ie) out.ie = eng.ie;
    if((!local.ox || !local.ox.length) && eng.ox) out.ox = eng.ox;
    if((!local.ion || !Object.keys(local.ion).length) && eng.ion) out.ion = eng.ion;
    
    if((!local.iso || !local.iso.length) && eng.iso) out.iso = eng.iso;
    else if(local.iso && eng.iso && eng.iso.length > local.iso.length) out.iso = eng.iso;
    out.f = local.f; 
    out._src = local.f ? 'CHE+local' : 'CHE';
    return out;
  }

  let filled = 0, enrichedDB = 0;

  if(typeof ENG !== 'undefined'){
    EL.forEach(e=>{
      const props = engProps(e.s);
      if(!props) return;
      ENG[e.s] = mergePreferLocal(ENG[e.s], props);
      filled++;
    });
  }

  if(typeof DB !== 'undefined'){
    
    Object.keys(DB).forEach(sym=>{
      const props = engProps(sym);
      if(!props) return;
      DB[sym] = mergePreferLocal(DB[sym], props);
      enrichedDB++;
    });
    
    EL.forEach(e=>{
      if(DB[e.s]) return;
      const props = engProps(e.s);
      if(!props) return;
      
      const rich = props.ie || props.ar || props.iso || props.mp != null;
      if(rich){
        DB[e.s] = Object.assign({ f: [] }, props);
        enrichedDB++;
      }
    });
  }

  const _fill = typeof fill === 'function' ? fill : null;
  const cfgFromAtom = (symbol, charge)=>{
    try{
      if(!C.ATOM || !C.ATOM.build) return null;
      const a = C.ATOM.build(symbol, charge || 0);
      if(!a || !a.subshells) return null;
      const cfg = {};
      a.subshells.forEach(ss=>{ if(ss.count) cfg[ss.name] = ss.count; });
      return cfg;
    }catch(_){ return null; }
  };

  if(_fill && C.ATOM && C.ATOM.build){
    window.fill = function(Z, raw){
      if(raw) return _fill(Z, true);
      try{
        const s = (typeof SYM !== 'undefined' && SYM[Z-1]) ? SYM[Z-1] : null;
        if(s){
          const cfg = cfgFromAtom(s, 0);
          if(cfg && Object.keys(cfg).length) return cfg;
        }
      }catch(_){}
      return _fill(Z, raw);
    };
  }

  if(typeof state === 'function'){
    const _state = state;
    window.state = function(){
      const base = _state();
      try{
        if(!C.ATOM || !C.ATOM.build) return base;
        const s = (base.e && (base.e.s || sym)) || sym;
        const ch = typeof chg !== 'undefined' ? chg : 0;
        const c0 = cfgFromAtom(s, 0) || base.c0;
        let c = c0;
        if(ch !== 0){
          const ci = cfgFromAtom(s, ch);
          if(ci) c = ci;
          else {
            
            if(ch > 0 && typeof strip === 'function') c = strip(c0, ch);
            if(ch < 0 && typeof add === 'function') c = add(c0, -ch);
          }
        }
        return { e: base.e, c0, c };
      }catch(_){ return base; }
    };
  }

  const nucCache = {};
  function nucleusInfo(symbol, A){
    const key = symbol + ':' + (A || '');
    if(nucCache[key]) return nucCache[key];
    try{
      if(C.NUCLEUS && C.NUCLEUS.build){
        const n = C.NUCLEUS.build(symbol, A);
        if(n){
          nucCache[key] = {
            A: n.A, N: n.N, Z: n.Z,
            B: n.bindingEnergyMeV,
            BpA: n.bindingEnergyPerNucleon,
            r: n.radiusFm,
            stab: n.stability
          };
          return nucCache[key];
        }
      }
    }catch(_){}
    return null;
  }
  window.__CHE_NUCLEUS__ = nucleusInfo;

  if(typeof DB !== 'undefined' && C.NUCLEUS){
    Object.keys(DB).forEach(sym=>{
      const d = DB[sym];
      if(d.f && d.f.length) return;
      const n = nucleusInfo(sym);
      if(n && n.BpA != null){
        d.f = ['Energia wiązania na nukleon (model): ok. ' + Number(n.BpA).toFixed(2) + ' MeV (CHE.NUCLEUS).'];
      }
    });
  }

  let e8 = false;
  try{ e8 = !!(C.LEVELS && C.LEVELS.E8 && C.EDUCATION && C.EDUCATION.E8); }catch(_){}

  window.__CHE_LAB_BRIDGE__ = {
    active: true,
    version: (C.ENGINE && C.ENGINE.version) || 'CHE',
    dataVersion: (C.ENGINE && C.ENGINE.dataVersion) || null,
    elements: EL.length,
    atomicProps: Object.keys(AP).length,
    isotopes: Object.keys(ISO).length,
    fie: Object.keys(FIE).length,
    engFilled: filled,
    dbEnriched: enrichedDB,
    atomApi: !!(C.ATOM && C.ATOM.build),
    nucleusApi: !!(C.NUCLEUS && C.NUCLEUS.build),
    e8: e8,
    cfgSample: (function(){
      try{
        const a = C.ATOM && C.ATOM.build && C.ATOM.build('Fe', 0);
        return a && a.configFull;
      }catch(_){ return null; }
    })()
  };
  try{ console.info('[CHE↔Lab bridge v052]', window.__CHE_LAB_BRIDGE__); }catch(_){}
})();

(function(){
  if(!window.__CHE_LAB_BRIDGE__ || !window.__CHE_LAB_BRIDGE__.active) return;
  const C = window.CHE;
  const D = C && C.DATA;

  if(typeof REDOX !== 'undefined' && D && D.REDOX_POTENTIALS){
    Object.keys(D.REDOX_POTENTIALS).forEach(k=>{
      if(REDOX[k] == null) REDOX[k] = D.REDOX_POTENTIALS[k];
    });
  }

  if(typeof datasheet === 'function'){
    const _ds = datasheet;
    datasheet = function(){
      let html = _ds();
      try{
        const e = (typeof E === 'function') ? E() : null;
        const s = (typeof sym !== 'undefined') ? sym : (e && e.s);
        const A = (typeof isoA !== 'undefined' && isoA) ? isoA : null;
        const n = window.__CHE_NUCLEUS__ && window.__CHE_NUCLEUS__(s, A || undefined);
        const r = (a,b)=>`<div class="dr${b==null||b===''?' na':''}"><span>${a}</span><b>${b==null||b===''?'—':b}</b></div>`;
        const g = (t,x)=>`<div class="dg"><h5>${t}</h5>${x.join('')}</div>`;
        if(n){
          const rows = [
            r('Izotop modelowy', s + '-' + n.A + ' (Z=' + n.Z + ', N=' + n.N + ')'),
            r('Energia wiązania B', n.B != null ? (+n.B).toFixed(2) + ' <u>MeV</u>' : null),
            r('B / A', n.BpA != null ? (+n.BpA).toFixed(3) + ' <u>MeV</u>' : null),
            r('Promień jądra (≈)', n.r != null ? (+n.r).toFixed(2) + ' <u>fm</u>' : null),
            r('Stabilność (model)', n.stab ? (n.stab.stable ? 'stabilny' : (n.stab.decayMode || n.stab.halfLife || 'niestabilny')) : null)
          ];
          html += g('Jądro (CHE.NUCLEUS)', rows);
        }
        const br = window.__CHE_LAB_BRIDGE__;
        html += g('Źródło danych',[
          r('Mostek', 'CHE v' + (br.version||'') + (br.atomApi?' · ATOM':'') + (br.nucleusApi?' · NUC':'')),
          r('Karta lokalna', e && e._src ? e._src : (e && e.f && e.f.length ? 'local+CHE' : 'CHE')),
          r('Pierwiastki w silniku', br.elements),
          r('Konfiguracja z', br.atomApi ? 'CHE.ATOM.build' : 'lab fill()')
        ]);
      }catch(_){}
      return html;
    };
  }

  if(typeof notes === 'function'){
    const _nt = notes;
    notes = function(){
      let html = _nt();
      try{
        if(!C.ATOM || !C.ATOM.forSecondary) return html;
        const s = typeof sym !== 'undefined' ? sym : null;
        const ch = typeof chg !== 'undefined' ? chg : 0;
        if(!s) return html;
        const p = C.ATOM.forSecondary(s, ch);
        if(!p) return html;
        const ion = p.ionLabel || '';
        html += '<div class="nl"><b>CHE.ATOM · projekcja E8</b><br>'
          + s + (ch ? (ch>0?'⁺'+ch:'⁻'+(-ch)) : '') + ' — ' + ion + '<br>'
          + 'Konfiguracja: <span class="mono">' + (p.configFull||'—') + '</span>'
          + (p.configShort ? '<br>Skrót: <span class="mono">' + p.configShort + '</span>' : '')
          + (p.valence != null ? '<br>e⁻ walencyjne (model): <b>' + p.valence + '</b>' : '')
          + '</div>';
        if(C.ATOM.termSymbol && !ch){
          const t = C.ATOM.termSymbol(s);
          if(t){
            const term = typeof t === 'string' ? t : t.term;
            html += '<div class="nl"><b>Symbol termu (uproszczenie)</b>: ' + term + '</div>';
          }
        }
      }catch(_){}
      return html;
    };
  }

  function enrichCaps(){
    try{
      const e = typeof E === 'function' ? E() : null;
      if(!e) return;
      const cp = document.getElementById('cp-iso'),isotopes=isotopeData(e);
      if(cp && isotopes.length){
        const stable = isotopes.filter(i=>!i.hl && i.ab).length;
        const radio = isotopes.filter(i=>i.hl).length;
        const verified = isotopes.filter(i=>i.abundanceProvenance?.provider==='CIAAW').length;
        const top = isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0];
        cp.innerHTML = '<b>' + isotopes.length + '</b> nuklidów w bazie · stabilne: ' + stable
          + (radio ? ' · promieniotwórcze: ' + radio : '')
          + (top ? ' · dominuje <sup>' + top.A + '</sup>' + (typeof sym!=='undefined'?sym:'') + ' (' + top.ab + ' %)' : '')
          + (verified ? ' · abundancje CIAAW 2024: ' + verified : ' · lokalne dane bez weryfikacji źródłowej')
          + (window.__CHE_LAB_BRIDGE__.isotopes ? ' · źródło: CHE.ISOTOPES + lab' : '');
      }
      const n = window.__CHE_NUCLEUS__ && window.__CHE_NUCLEUS__(typeof sym!=='undefined'?sym:null);
      const cph = document.getElementById('cp-ph');
      if(cph && n && n.BpA != null){
        const prev = cph.textContent || '';
        if(!/B\/A/.test(prev)){
          cph.innerHTML = (cph.innerHTML || prev || '')
            + (prev ? '<br>' : '')
            + 'Jądro modelowe: B/A ≈ <b>' + (+n.BpA).toFixed(2) + ' MeV</b>, R ≈ ' + (+n.r).toFixed(2) + ' fm (CHE.NUCLEUS).';
        }
      }
    }catch(_){}
  }

  if(typeof extra === 'function'){
    const _ex = extra;
    extra = function(){
      _ex();
      enrichCaps();
      try{
        
        const nt = document.getElementById('nt');
        if(nt && typeof notes === 'function') nt.innerHTML = notes();
      }catch(_){}
    };
  }

  try{
    const note = document.querySelector('.model-note');
    if(note && !note.dataset.che){
      note.dataset.che = '1';
      note.innerHTML += ' <span style="color:var(--v)">Konfiguracje i jony: CHE.ATOM · izotopy/IE: CHE.DATA · jądro: CHE.NUCLEUS.</span>';
    }
  }catch(_){}

  try{
    const tools = document.querySelector('.ds-tools') || document.querySelector('.tabpane[data-tab=ds]');
    if(tools && !document.getElementById('che-export-btn')){
      const b = document.createElement('button');
      b.id = 'che-export-btn';
      b.type = 'button';
      b.textContent = 'Eksport CHE (JSON)';
      b.title = 'Pobierz pakiet danych silnika';
      b.style.marginLeft = '8px';
      b.onclick = function(){
        if(window.CHE_DATA_PACK && CHE_DATA_PACK.downloadJSON) CHE_DATA_PACK.downloadJSON();
        else if(window.CHE && CHE.DATA){
          const blob = new Blob([JSON.stringify({
            version: CHE.ENGINE && CHE.ENGINE.version,
            elements: CHE.DATA.ELEMENTS_118,
            props: CHE.DATA.ATOMIC_PROPS,
            isotopes: CHE.DATA.ISOTOPES
          }, null, 2)], {type:'application/json'});
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'che_data_pack.json';
          a.click();
        } else alert('Brak CHE_DATA_PACK / CHE.DATA');
      };
      if(tools.classList && tools.classList.contains('ds-tools')) tools.appendChild(b);
      else {
        const w = document.createElement('div');
        w.className = 'ds-tools';
        w.appendChild(b);
        tools.insertBefore(w, tools.firstChild);
      }
    }
  }catch(_){}

  window.__CHE_LAB_UI__ = { version:'054.03', caps:true, datasheet:true, notes:true, redoxMerged:true };
  try{ console.info('[CHE Lab UI v054.03]', window.__CHE_LAB_UI__); }catch(_){}
})();

