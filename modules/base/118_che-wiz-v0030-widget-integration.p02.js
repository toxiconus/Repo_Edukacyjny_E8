/* ============================================================
   WIDGET 14: indLab
   ============================================================ */
CHE.define('indLab', ({root}) => {
  let sol = null, ind = null, pred = null;
  // v0.12: scenariusz dydaktyczny pozostaje lokalny, ale fakty o substancji pochodzą z centralnego profilu.
  const scenario = {
    hcl:{formula:'HCl',correct:'acid'},
    water:{formula:'H2O',correct:'neutral'},
    naoh:{formula:'NaOH',correct:'base'},
    caoh:{formula:'Ca(OH)2',correct:'base'},
    cuoh:{formula:'Cu(OH)2',correct:'neutral'}
  };
  function dataFor(key){
    const x=scenario[key];
    const s=x && (CHE.WIDGET_API?.substance?.(x.formula)||CHE.SUBSTANCE?.get?.(x.formula)||CHE.WIDGET_API?.byFormula?.(x.formula)?.[0]);
    const name=s?.name||x?.formula||key;
    const character=s?.properties?.character || s?.character || (x.correct==='acid'?'kwasowy':x.correct==='base'?'zasadowy':'obojętny');
    return {correct:x.correct,comment:name+' — odczyn '+character+'.'};
  }
  return {
    mount(){
      root.querySelectorAll('[data-sol]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-sol]').forEach(x => x.classList.remove('selected'));
          b.classList.add('selected');
          sol = b.dataset.sol;
        });
      });
      root.querySelectorAll('[data-ind]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-ind]').forEach(x => x.classList.remove('selected'));
          b.classList.add('selected');
          ind = b.dataset.ind;
        });
      });
      root.querySelectorAll('[data-pred]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-pred]').forEach(x => x.classList.remove('selected'));
          b.classList.add('selected');
          pred = b.dataset.pred;
        });
      });
      root.querySelector('[data-act="check"]').addEventListener('click', () => {
        const result = root.querySelector('.lab-result');
        if(!sol || !ind || !pred){
          result.className = 'lab-result info';
          result.textContent = 'Uzupełnij wszystkie kroki.';
          return;
        }
        const d = dataFor(sol);
        if(pred === d.correct){
          result.className = 'lab-result ok';
          result.innerHTML = '<b>Dobrze.</b> ' + d.comment;
        } else {
          result.className = 'lab-result bad';
          result.innerHTML = '<b>Nie do końca.</b> ' + d.comment;
        }
      });
    },
    reset(){
      sol = ind = pred = null;
      root.querySelectorAll('.lab-opt').forEach(x => x.classList.remove('selected'));
      root.querySelector('.lab-result').className = 'lab-result';
      root.querySelector('.lab-result').textContent = '';
    }
  };
});

/* ============================================================
   WIDGET 15: stoichSolver
   ============================================================ */
CHE.define('stoichSolver', ({root}) => {
  const REACTIONS = {
    mg:    {eq:'2 Mg + O₂ → 2 MgO',         sub:'Mg',   subCoef:2, prod:'MgO',  prodCoef:2},
    caco3: {eq:'CaCO₃ → CaO + CO₂',         sub:'CaCO₃',subCoef:1, prod:'CO₂',  prodCoef:1},
    zn:    {eq:'Zn + 2 HCl → ZnCl₂ + H₂',   sub:'Zn',   subCoef:1, prod:'H₂',   prodCoef:1},
    cuo:   {eq:'CuO + H₂SO₄ → CuSO₄ + H₂O', sub:'CuO',  subCoef:1, prod:'CuSO₄',prodCoef:1}
  };
  const sel = root.querySelector('.st-eq');
  const mass = root.querySelector('.st-mass');
  const out = root.querySelector('.result-card');
  function render(){
    const r = REACTIONS[sel.value];
    const m = parseFloat(mass.value);
    if(isNaN(m) || m <= 0){
      out.className = 'result-card bad';
      out.textContent = 'Podaj poprawną masę > 0.';
      return;
    }
    const mSub = CHE.WIDGET_API.molarMass(r.sub);
    const mProd = CHE.WIDGET_API.molarMass(r.prod);
    const nSub = m / mSub;
    const nProd = nSub * (r.prodCoef / r.subCoef);
    const mProdMass = nProd * mProd;
    out.className = 'result-card ok';
    out.innerHTML =
      '<div style="font-family:JetBrains Mono,monospace;font-weight:700;margin-bottom:6px;">' + r.eq + '</div>' +
      '<div>1. M(' + r.sub + ') = ' + mSub.toFixed(2) + ' g/mol</div>' +
      '<div>2. n(' + r.sub + ') = ' + m + ' / ' + mSub.toFixed(2) + ' = <b>' + nSub.toFixed(4) + ' mol</b></div>' +
      '<div>3. Stosunek ' + r.subCoef + ':' + r.prodCoef + ' → n(' + r.prod + ') = ' + nProd.toFixed(4) + ' mol</div>' +
      '<div>4. M(' + r.prod + ') = ' + mProd.toFixed(2) + ' g/mol</div>' +
      '<div>5. m(' + r.prod + ') = ' + nProd.toFixed(4) + ' × ' + mProd.toFixed(2) + ' = <b>' + mProdMass.toFixed(3) + ' g</b></div>';
  }
  return {
    mount(){
      root.querySelector('[data-act="calc"]').addEventListener('click', render);
      sel.addEventListener('change', render);
      mass.addEventListener('input', render);
      render();
    },
    reset(){ mass.value = 4.8; sel.value = 'mg'; render(); }
  };
});

/* ============================================================
   WIDGET 16: oxideBuilder
   ============================================================ */
CHE.define('oxideBuilder', ({root}) => {
  const pool = root.querySelector('.bld-pool');
  const ws = root.querySelector('.oxideb-ws');
  const fb = root.querySelector('.oxideb-fb');
  let sel = null;
  function render(){
    if(!sel){
      ws.textContent = 'Wybierz pierwiastek…';
      fb.className = 'result-card info';
      fb.textContent = 'W–K–S–K: wartościowość pierwiastka i tlenu (II) → skrzyżuj → skróć.';
      return;
    }
    const el = CHE.WIDGET_API.element(sel) || CHE.CHEM?.element?.(sel);
    const vals = el?.valences || el?.v || CHE.CHEM?.valences?.(sel) || [];
    const v = Number(vals[vals.length - 1] || 1);
    const formula = CHE.WIDGET_API.formula(sel, v, 2);
    ws.textContent = formula;
    fb.className = 'result-card ok';
    fb.innerHTML = '<strong>' + formula + '</strong> — tlenek ' + sel +
      '. Kontrola: ' + v + '×(' + v + ') = 2×2.';
  }
  return {
    mount(){
      ['Na','K','Ca','Mg','Al','Fe','Cu','S','C','P'].forEach(sym => {
        const el = CHE.WIDGET_API.element(sym) || CHE.CHEM?.element?.(sym);
        const b = document.createElement('button');
        b.type = 'button';
        const vals = el?.valences || el?.v || CHE.CHEM?.valences?.(sym) || [];
        b.textContent = sym + ' (' + vals.join(',') + ')';
        b.addEventListener('click', () => {
          pool.querySelectorAll('button').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          sel = sym;
          render();
        });
        pool.appendChild(b);
      });
      render();
    },
    reset(){ sel = null; pool.querySelectorAll('button').forEach(x => x.classList.remove('active')); render(); }
  };
});

/* ============================================================
   WIDGET 17: balansatorEl
   ============================================================ */
CHE.define('balansatorEl', ({root}) => {
  const cations = {
    na:{symbol:'Na',color:'#2b5e9c'}, ca:{symbol:'Ca',color:'#b06f1c'}, al:{symbol:'Al',color:'#6b3fa0'}
  };
  Object.values(cations).forEach(c=>c.charge=Math.abs(CHE.WIDGET_API.charge(c.symbol,1)));
  let current = 'na', oh = 0;
  const stage = root.querySelector('.stage-box');
  const charge = root.querySelector('.bal-charge');
  function render(){
    const c = cations[current];
    const sum = c.charge - oh;
    let svg = '<svg viewBox="0 0 400 140" style="width:100%;max-width:360px;height:auto;display:block;margin:0 auto;">';
    svg += '<circle cx="200" cy="70" r="26" fill="' + c.color + '" stroke="#fff" stroke-width="2"/>';
    svg += '<text x="200" y="76" text-anchor="middle" fill="#fff" font-size="15" font-weight="800" font-family="Inter">' + c.symbol + '</text>';
    for(let i = 0; i < oh; i++){
      const ang = (i / Math.max(1, oh)) * 360 - 90;
      const rad = ang * Math.PI / 180;
      const ox = 200 + Math.cos(rad) * 70, oy = 70 + Math.sin(rad) * 50;
      svg += '<line x1="' + (200 + Math.cos(rad) * 26) + '" y1="' + (70 + Math.sin(rad) * 26) + '" x2="' + ox + '" y2="' + oy + '" stroke="#64748b" stroke-width="2" stroke-dasharray="5 4"/>';
      svg += '<circle cx="' + ox + '" cy="' + oy + '" r="16" fill="#fbeced" stroke="#b83a45" stroke-width="2"/>';
      svg += '<text x="' + ox + '" y="' + (oy + 4) + '" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="800">OH⁻</text>';
    }
    svg += '</svg>';
    stage.innerHTML = svg;
    if(sum === 0){
      charge.className = 'result-card ok bal-charge';
      charge.innerHTML = 'Suma ładunków: <b>0</b> ✓ — wzór gotowy!';
    } else {
      charge.className = 'result-card warn bal-charge';
      charge.innerHTML = 'Suma ładunków: <b>' + (sum > 0 ? '+' + sum : sum) + '</b> — jeszcze nie zero.';
    }
  }
  return {
    mount(){
      root.querySelectorAll('[data-bal]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-bal]').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          current = b.dataset.bal; oh = 0; render();
        });
      });
      root.querySelector('[data-act="add"]').addEventListener('click', () => { if(oh < 4){ oh++; render(); }});
      root.querySelector('[data-act="remove"]').addEventListener('click', () => { if(oh > 0){ oh--; render(); }});
      root.querySelector('[data-act="reset"]').addEventListener('click', () => { oh = 0; render(); });
      render();
    },
    reset(){ oh = 0; current = 'na'; render(); }
  };
});

/* ============================================================
   WIDGET 18: builderEl
   ============================================================ */
CHE.define('builderEl', ({root}) => {
  const cations = {
    na:{symbol:'Na',color:'#2b5e9c',name:'wodorotlenek sodu'},
    ca:{symbol:'Ca',color:'#b06f1c',name:'wodorotlenek wapnia'},
    al:{symbol:'Al',color:'#6b3fa0',name:'wodorotlenek glinu'},
    fe3:{symbol:'Fe',color:'#2e7d4f',name:'wodorotlenek żelaza(III)'}
  };
  Object.values(cations).forEach(c=>c.charge=Math.abs(CHE.WIDGET_API.charge(c.symbol, c.symbol==='Fe'?3:1)));
  let selected = null, ohCount = 0;
  const ws = root.querySelector('.bld-ws');
  const fb = root.querySelector('.bld-fb');
  function render(){
    if(!selected){
      ws.textContent = 'Wybierz kation…';
      fb.className = 'result-card info';
      fb.textContent = 'Wybierz kation i dodaj grupy OH⁻.';
      return;
    }
    const c = cations[selected];
    const sub = n => String(n).replace(/\d/g, d => '₀₁₂₃₄₅₆₇₈₉'[d]);
    const formula = ohCount === 0 ? c.symbol : (ohCount === 1 ? c.symbol + 'OH' : c.symbol + '(OH)' + (ohCount > 1 ? sub(ohCount) : ''));
    ws.innerHTML = '<span style="color:' + c.color + ';">' + formula + '</span>';
    const sum = c.charge - ohCount;
    if(sum === 0){
      fb.className = 'result-card ok';
      fb.innerHTML = '<b>OK!</b> To ' + c.name + '. Suma ładunków = 0.';
    } else if(sum > 0){
      fb.className = 'result-card info';
      fb.textContent = 'Zostało +' + sum + '. Dodaj jeszcze ' + sum + ' OH⁻.';
    } else {
      fb.className = 'result-card bad';
      fb.textContent = 'Za dużo o ' + Math.abs(sum) + '. Usuń ' + Math.abs(sum) + ' OH⁻.';
    }
  }
  return {
    mount(){
      root.querySelectorAll('[data-bld]').forEach(b => {
        b.addEventListener('click', () => { selected = b.dataset.bld; ohCount = 0; render(); });
      });
      root.querySelector('[data-act="add"]').addEventListener('click', () => { if(selected && ohCount < 5){ ohCount++; render(); }});
      root.querySelector('[data-act="remove"]').addEventListener('click', () => { if(selected && ohCount > 0){ ohCount--; render(); }});
      root.querySelector('[data-act="clear"]').addEventListener('click', () => { selected = null; ohCount = 0; render(); });
      render();
    },
    reset(){ selected = null; ohCount = 0; render(); }
  };
});

/* ============================================================
   WIDGET 19: reszta
   ============================================================ */
CHE.define('reszta', ({root}) => {
  const sel = root.querySelector('.reszta-sel');
  const out = root.querySelector('.result-card');
  function render(){
    const v = sel.value.split('|');
    out.className = 'result-card info';
    out.innerHTML = '<b>' + v[0] + '</b> → reszta: <b>' + v[1] + '</b> → przykładowa sól: <b>' + v[2] + '</b>';
  }
  return {
    mount(){ sel.addEventListener('change', render); render(); },
    reset(){ sel.value = 'HCl|Cl⁻|NaCl'; render(); }
  };
});

/* ============================================================
   WIDGET 20: ionAssemblyO
   ============================================================ */
CHE.define('ionAssemblyO', ({root}) => {
  const map = {};
  ['Na','Ca','Al','Fe'].forEach(sym=>{
    const vals=CHE.WIDGET_API.valences(sym);
    const v= sym==='Fe' ? 3 : (vals[0] || 1);
    const anion=-2, nCat=Math.abs(anion), nO=Math.abs(v);
    const g=(a,b)=>b?g(b,a%b):a, gg=g(nCat,nO);
    const catCount=nO/gg, oCount=nCat/gg;
    const formula=sym+(catCount===1?'':catCount)+(oCount===1?'O':'O'+oCount);
    const charge=CHeCharge(sym,v);
    map[sym]={c:sym+formatCharge(charge),p:formula,n:catCount+'×'+sym+formatCharge(charge)+' + '+oCount+'×O²⁻ → '+formula+'. Kontrola ładunku: '+(catCount*charge)+' + '+(oCount*anion)+' = 0.'};
  });
  function CHeCharge(sym,v){ return sym==='Fe' ? 3 : Math.abs(CHE.WIDGET_API.charge(sym,v)); }
  function formatCharge(q){ return q===1?'⁺':q===2?'²⁺':q===3?'³⁺':(q>0?String(q)+'⁺':''); }
  const cation = root.querySelector('.ia-cation');
  const product = root.querySelector('.ia-product');
  const note = root.querySelector('.ia-note');
  return {
    mount(){
      root.querySelectorAll('[data-ion]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-ion]').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          const d = map[b.dataset.ion];
          cation.textContent = d.c;
          product.textContent = d.p;
          note.innerHTML = d.n;
        });
      });
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 21: charSim
   ============================================================ */
CHE.define('charSim', ({root}) => {
  const data = {
    'Na2O':{ch:'zasadowy',h2o:'Na₂O + H₂O → 2 NaOH',extra:'Reaguje z wodą — powstaje wodorotlenek sodu.',cls:'ok',color:'#2e7d4f'},
    'CaO':{ch:'zasadowy',h2o:'CaO + H₂O → Ca(OH)₂',extra:'Wapno palone gaśnie w wodzie. Reakcja egzotermiczna.',cls:'ok',color:'#2e7d4f'},
    'MgO':{ch:'zasadowy',h2o:'MgO + H₂O → praktycznie nie',extra:'Z wodą bardzo słabo. Z kwasami tak.',cls:'warn',color:'#b06f1c'},
    'Al2O3':{ch:'amfoteryczny',h2o:'Al₂O₃ + H₂O → nie',extra:'Reaguje z kwasem i z zasadą.',cls:'ok',color:'#6b3fa0'},
    'ZnO':{ch:'amfoteryczny',h2o:'ZnO + H₂O → nie',extra:'Reaguje z kwasem i z zasadą.',cls:'ok',color:'#6b3fa0'},
    'Fe2O3':{ch:'zasadowy',h2o:'Fe₂O₃ + H₂O → nie',extra:'Z kwasem: Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O.',cls:'warn',color:'#b06f1c'},
    'CuO':{ch:'zasadowy',h2o:'CuO + H₂O → nie',extra:'Z kwasem: CuO + H₂SO₄ → CuSO₄ + H₂O.',cls:'warn',color:'#b06f1c'},
    'CO2':{ch:'kwasowy',h2o:'CO₂ + H₂O → H₂CO₃ (słaby)',extra:'Z zasadą: CO₂ + 2 NaOH → Na₂CO₃ + H₂O.',cls:'ok',color:'#2b5e9c'},
    'SO2':{ch:'kwasowy',h2o:'SO₂ + H₂O → H₂SO₃',extra:'Z zasadą: SO₂ + 2 KOH → K₂SO₃ + H₂O.',cls:'ok',color:'#2b5e9c'},
    'SO3':{ch:'kwasowy',h2o:'SO₃ + H₂O → H₂SO₄',extra:'Z zasadą: SO₃ + 2 NaOH → Na₂SO₄ + H₂O.',cls:'ok',color:'#2b5e9c'},
    'SiO2':{ch:'kwasowy',h2o:'SiO₂ + H₂O → praktycznie nie',extra:'Z mocnymi zasadami, zwykle po ogrzaniu.',cls:'warn',color:'#b06f1c'},
    'CO':{ch:'obojętny',h2o:'CO + H₂O → nie',extra:'Nie reaguje z kwasami ani zasadami.',cls:'warn',color:'#8892a0'},
    'Mn2O7':{ch:'kwasowy (wyjątek)',h2o:'Mn₂O₇ + H₂O → 2 HMnO₄',extra:'Metal na +VII → charakter kwasowy.',cls:'ok',color:'#2b5e9c'},
    'CrO3':{ch:'kwasowy (wyjątek)',h2o:'CrO₃ + H₂O → H₂CrO₄',extra:'Metal na +VI → charakter kwasowy.',cls:'ok',color:'#2b5e9c'}
  };
  // v0.12: klasyfikacja jest scenariuszem dydaktycznym; równania są rozwiązywane z centralnego CHE.REACTION, gdy rekord istnieje.
  function centralEquation(formula){
    const rx=Object.values(CHE.DATA?.REACTIONS||{}).find(r=>{
      const q=String(r?.equation||r?.eq||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c));
      return q.includes(formula.replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)));
    });
    return rx?.equation || rx?.eq || null;
  }
  const stage = root.querySelector('.stage-box');
  const fb = root.querySelector('.char-fb');
  return {
    mount(){
      root.querySelectorAll('[data-ox]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-ox]').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          const d = data[b.dataset.ox];
          if(!d){ fb.className = 'result-card bad'; fb.textContent = 'Brak danych.'; return; }
          stage.innerHTML = '<div style="font-family:JetBrains Mono,monospace;font-size:1.15rem;font-weight:800;color:var(--accent-dark);">' + b.textContent + '</div>' +
            '<div style="font-size:1.4rem;font-weight:800;color:' + d.color + ';margin:6px 0;">' + d.ch + '</div>' +
            '<div style="font-family:JetBrains Mono,monospace;font-size:0.92rem;color:var(--text-soft);">' + d.h2o + '</div>';
          fb.className = 'result-card ' + d.cls;
          fb.textContent = d.extra;
        });
      });
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 22: wodorGrid
   ============================================================ */
CHE.define('wodorGrid', ({root}) => {
  const items = [
    {symbol:'Li',val:'+1',formula:'LiOH',sol:'good',solText:'dobrze rozpuszczalny',odczyn:'silnie zasadowy',color:null,precip:false,use:'Odczynnik laboratoryjny, ogniwa litowe.'},
    {symbol:'Na',val:'+1',formula:'NaOH',sol:'good',solText:'bardzo dobrze',odczyn:'silnie zasadowy',color:null,precip:false,use:'Środek do udrażniania rur, produkcja mydła.'},
    {symbol:'K',val:'+1',formula:'KOH',sol:'good',solText:'bardzo dobrze',odczyn:'silnie zasadowy',color:null,precip:false,use:'Mydło potasowe, baterie alkaliczne.'},
    {symbol:'Ca',val:'+2',formula:'Ca(OH)₂',sol:'mid',solText:'trudno rozpuszczalny',odczyn:'zasadowy',color:'#e2e8f0',colorName:'biały',precip:true,use:'Woda wapienna do wykrywania CO₂, zaprawa budowlana.'},
    {symbol:'Ba',val:'+2',formula:'Ba(OH)₂',sol:'good',solText:'rozpuszczalny',odczyn:'zasadowy',color:null,precip:false,use:'Odczynnik laboratoryjny (Ba²⁺ toksyczny).'},
    {symbol:'Al',val:'+3',formula:'Al(OH)₃',sol:'bad',solText:'praktycznie nierozpuszczalny',odczyn:'—',color:'#f1f5f9',colorName:'biały',precip:true,use:'Lek na zgagę, amfoteryczny.'},
    {symbol:'Cu',val:'+2',formula:'Cu(OH)₂',sol:'bad',solText:'praktycznie nierozpuszczalny',odczyn:'—',color:'#3b82f6',colorName:'niebieski',precip:true,use:'Niebieski osad — znak Cu(II).'},
    {symbol:'Fe',val:'+3',formula:'Fe(OH)₃',sol:'bad',solText:'praktycznie nierozpuszczalny',odczyn:'—',color:'#7c2d12',colorName:'brunatny',precip:true,use:'Klasyczna reakcja strącania Fe(III).'}
  ];
  items.forEach(it=>{
    const central=CHE.WIDGET_API.byFormula(it.formula)[0] || CHE.WIDGET_API.substance(it.formula);
    if(central){ it.central=central; if(central.name) it.name=central.name; }
  });
  const grid = root.querySelector('.wg-tiles');
  const detail = root.querySelector('.wg-detail');
  function showDetail(idx){
    const it = items[idx];
    const swatch = it.color
      ? '<span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:' + it.color + ';vertical-align:middle;margin-right:6px;border:1px solid #94a3b8;"></span>' + it.colorName
      : '—';
    detail.innerHTML = '<h5>' + it.symbol + ' → ' + it.formula + '</h5>' +
      '<div style="font-size:13px;line-height:1.8;margin-top:6px;">' +
      '<b>Wartościowość:</b> ' + it.val + '<br>' +
      '<b>Rozpuszczalność:</b> ' + it.solText + '<br>' +
      '<b>Odczyn:</b> ' + it.odczyn + '<br>' +
      '<b>Barwa osadu:</b> ' + swatch + '<br>' +
      '<b>Zastosowanie:</b> ' + it.use + '</div>';
  }
  return {
    mount(){
      items.forEach((it, idx) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'wg-tile ' + it.sol;
        const sym = it.sol === 'good' ? '✓' : (it.sol === 'mid' ? '~' : '×');
        tile.innerHTML = '<span class="wg-badge">' + sym + '</span>' +
          '<span class="wg-symbol">' + it.symbol + '</span>' +
          '<span class="wg-val">' + it.val + '</span>' +
          '<span class="wg-formula">' + it.formula + '</span>';
        tile.addEventListener('click', () => {
          grid.querySelectorAll('.wg-tile').forEach(t => t.classList.remove('active'));
          tile.classList.add('active');
          showDetail(idx);
        });
        grid.appendChild(tile);
      });
      showDetail(1);
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 23: trendBars
   ============================================================ */
CHE.define('trendBars', ({root}) => {
  const data = [
    {f:'Na₂O',ch:'zasadowy',cls:'base',h:90,info:'Na(+I). Silnie zasadowy. Z wodą: Na₂O + H₂O → 2 NaOH.'},
    {f:'MgO',ch:'zasadowy',cls:'base',h:85,info:'Mg(+II). Zasadowy. Z wodą praktycznie nie.'},
    {f:'Al₂O₃',ch:'amfoteryczny',cls:'amph',h:70,info:'Al(+III). Amfoteryczny. Z kwasem i zasadą.'},
    {f:'SiO₂',ch:'kwasowy',cls:'acid',h:55,info:'Si(+IV). Kwasowy. Z wodą praktycznie nie.'},
    {f:'P₄O₁₀',ch:'kwasowy',cls:'acid',h:60,info:'P(+V). Kwasowy. Z wodą: P₄O₁₀ + 6 H₂O → 4 H₃PO₄.'},
    {f:'SO₃',ch:'kwasowy',cls:'acid',h:75,info:'S(+VI). Silnie kwasowy. Z wodą: SO₃ + H₂O → H₂SO₄.'},
    {f:'Cl₂O₇',ch:'kwasowy',cls:'acid',h:90,info:'Cl(+VII). Silnie kwasowy.'}
  ];
  // MIGRATED v0.06: dane opisowe preferują wspólny CHE.DATA/CHE.REACTION.
  data.forEach(d=>{
    const f=String(d.f||'').replace(/[₂₃₄₅₆₇₈₉₀]/g,m=>String('₂₃₄₅₆₇₈₉₀'.indexOf(m)));
    const sub=CHE.WIDGET_API?.byFormula?.(f)?.[0] || CHE.WIDGET_API?.substance?.(f);
    if(sub){ if(sub.name) d.name=sub.name; if(sub.properties?.character) d.ch=sub.properties.character; }
  });
  const bars = root.querySelector('.trend-bars');
  const detail = root.querySelector('.trend-detail');
  return {
    mount(){
      data.forEach(d => {
        const b = document.createElement('div');
        b.className = 'trend-bar ' + d.cls;
        b.innerHTML = '<div class="tb-fill" style="height:' + d.h + 'px;"></div>' +
          '<div class="tb-label">' + d.f + '</div>' +
          '<div class="tb-char">' + d.ch + '</div>';
        b.addEventListener('click', () => {
          detail.innerHTML = '<strong>' + d.f + '</strong> — ' + d.ch + '. ' + d.info;
        });
        bars.appendChild(b);
      });
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 24: oxGallery
   ============================================================ */
CHE.define('oxGallery', ({root}) => {
  const items = [
    {f:'CuO',name:'tlenek miedzi(II)',col:'#1e293b',fg:'#f8fafc',note:'Czarny proszek.'},
    {f:'Cu₂O',name:'tlenek miedzi(I)',col:'#b91c1c',fg:'#fff',note:'Czerwony (kupryt).'},
    {f:'Fe₂O₃',name:'tlenek żelaza(III)',col:'#9a3412',fg:'#fff',note:'Rdzawy; hematyt.'},
    {f:'Fe₃O₄',name:'tlenek żelaza(II,III)',col:'#0f172a',fg:'#e2e8f0',note:'Czarny magnetyt.'},
    {f:'ZnO',name:'tlenek cynku',col:'#f8fafc',fg:'#0f172a',note:'Biały.'},
    {f:'PbO',name:'tlenek ołowiu(II)',col:'#eab308',fg:'#422006',note:'Żółty (litargit).'},
    {f:'MgO',name:'tlenek magnezu',col:'#f1f5f9',fg:'#334155',note:'Biały.'},
    {f:'CaO',name:'tlenek wapnia',col:'#e2e8f0',fg:'#1e293b',note:'Biały; wapno palone.'},
    {f:'MnO₂',name:'tlenek manganu(IV)',col:'#3f3f46',fg:'#fafafa',note:'Brunatnoczarny.'},
    {f:'Cr₂O₃',name:'tlenek chromu(III)',col:'#166534',fg:'#fff',note:'Zielony.'}
  ];
  items.forEach(it=>{
    const central=CHE.WIDGET_API.byFormula(it.f)[0] || CHE.WIDGET_API.substance(it.f);
    if(central){
      it.central=central;
      if(central.name) it.name=central.name;
      if(central.notes?.length) it.note=central.notes[0];
      else if(central.properties?.appearance) it.note=central.properties.appearance;
    }
  });
  const grid = root.querySelector('.ox-gallery');
  const stage = root.querySelector('.oxg-stage');
  return {
    mount(){
      items.forEach(it => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'ox-tile';
        b.style.background = it.col;
        b.style.color = it.fg;
        b.innerHTML = '<div class="ox-f">' + it.f + '</div><div class="ox-n">' + it.name + '</div>';
        b.addEventListener('click', () => {
          grid.querySelectorAll('.ox-tile').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          stage.innerHTML = '<strong>' + it.f + '</strong> — ' + it.name + '. ' + it.note;
        });
        grid.appendChild(b);
      });
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 25: periodicMini
   ============================================================ */
CHE.define('periodicMini', ({root}) => {
  const els = [
    {sym:'Li',z:3,type:'metal',v:'I',ox:'Li₂O',ch:'zasadowy'},
    {sym:'Be',z:4,type:'metal',v:'II',ox:'BeO',ch:'amfoteryczny'},
    {sym:'B',z:5,type:'metalloid',v:'III',ox:'B₂O₃',ch:'kwasowy'},
    {sym:'C',z:6,type:'nonmetal',v:'II, IV',ox:'CO/CO₂',ch:'obojętny/kwasowy'},
    {sym:'N',z:7,type:'nonmetal',v:'I–V',ox:'N₂O…N₂O₅',ch:'obojętny/kwasowy'},
    {sym:'O',z:8,type:'nonmetal',v:'II',ox:'—',ch:'—'},
    {sym:'F',z:9,type:'halogen',v:'I',ox:'OF₂',ch:'—'},
    {sym:'Ne',z:10,type:'noble',v:'—',ox:'—',ch:'—'},
    {sym:'Na',z:11,type:'metal',v:'I',ox:'Na₂O',ch:'zasadowy'},
    {sym:'Mg',z:12,type:'metal',v:'II',ox:'MgO',ch:'zasadowy'},
    {sym:'Al',z:13,type:'metal',v:'III',ox:'Al₂O₃',ch:'amfoteryczny'},
    {sym:'Si',z:14,type:'metalloid',v:'IV',ox:'SiO₂',ch:'kwasowy'},
    {sym:'P',z:15,type:'nonmetal',v:'III, V',ox:'P₂O₃/P₂O₅',ch:'kwasowy'},
    {sym:'S',z:16,type:'nonmetal',v:'IV, VI',ox:'SO₂/SO₃',ch:'kwasowy'},
    {sym:'Cl',z:17,type:'halogen',v:'I–VII',ox:'Cl₂O…Cl₂O₇',ch:'kwasowy'},
    {sym:'Ar',z:18,type:'noble',v:'—',ox:'—',ch:'—'},
    {sym:'K',z:19,type:'metal',v:'I',ox:'K₂O',ch:'zasadowy'},
    {sym:'Ca',z:20,type:'metal',v:'II',ox:'CaO',ch:'zasadowy'},
    {sym:'Cr',z:24,type:'metal',v:'II, III, VI',ox:'Cr₂O₃/CrO₃',ch:'zasadowy/kwasowy'},
    {sym:'Mn',z:25,type:'metal',v:'II, IV, VII',ox:'MnO/MnO₂/Mn₂O₇',ch:'zasadowy→kwasowy'},
    {sym:'Fe',z:26,type:'metal',v:'II, III',ox:'FeO/Fe₂O₃',ch:'zasadowy'},
    {sym:'Cu',z:29,type:'metal',v:'I, II',ox:'Cu₂O/CuO',ch:'zasadowy'},
    {sym:'Zn',z:30,type:'metal',v:'II',ox:'ZnO',ch:'amfoteryczny'},
    {sym:'Ag',z:47,type:'metal',v:'I',ox:'Ag₂O',ch:'zasadowy'}
  ];
  const grid = root.querySelector('.periodic-mini');
  const stage = root.querySelector('.pm-stage');
  return {
    mount(){
      els.forEach(e => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = e.type;
        b.title = e.sym + ' — wartościowość: ' + e.v;
        b.innerHTML = '<span class="pm-z">' + e.z + '</span>' +
          '<span class="pm-sym">' + e.sym + '</span>' +
          '<span class="pm-v">' + (e.v === '—' ? '·' : e.v) + '</span>';
        b.addEventListener('click', () => {
          grid.querySelectorAll('button').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          stage.innerHTML = '<div style="font-size:22px;font-weight:900;font-family:JetBrains Mono,monospace;">' + e.sym +
            ' <span style="font-size:14px;font-weight:700;color:var(--text-soft);">Z=' + e.z + '</span></div>' +
            '<div style="margin-top:8px;"><strong>Wartościowość:</strong> ' + e.v + '</div>' +
            '<div><strong>Tlenek:</strong> ' + e.ox + '</div>' +
            '<div><strong>Charakter:</strong> ' + e.ch + '</div>';
        });
        grid.appendChild(b);
      });
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 26: vseprStage
   ============================================================ */
CHE.define('vseprStage', ({root}) => {
  /* v0.08: VSEPR renderer is a projection only. Chemistry comes from CHE.DATA/CHE.GEOMETRY. */
  const C=window.CHE=window.CHE||{};
  C.DATA=C.DATA||{};
  C.DATA.VSEPR_CASES=C.DATA.VSEPR_CASES||{
    CO2:{formula:'CO₂',center:'C1',atoms:[{id:'O1',element:'O',position2D:{x:0,y:0}},{id:'C1',element:'C',position2D:{x:2.5,y:0},metadata:{lonePairs:0}},{id:'O2',element:'O',position2D:{x:5,y:0}}],bonds:[{id:'b1',atomA:'O1',atomB:'C1',order:2},{id:'b2',atomA:'C1',atomB:'O2',order:2}]},
    SO2:{formula:'SO₂',center:'S1',atoms:[{id:'O1',element:'O',position2D:{x:0,y:1}},{id:'S1',element:'S',position2D:{x:2.5,y:0},metadata:{lonePairs:1}},{id:'O2',element:'O',position2D:{x:5,y:1}}],bonds:[{id:'b1',atomA:'S1',atomB:'O1',order:2},{id:'b2',atomA:'S1',atomB:'O2',order:2}]},
    SO3:{formula:'SO₃',center:'S1',atoms:[{id:'O1',element:'O',position2D:{x:2.5,y:0}},{id:'O2',element:'O',position2D:{x:0,y:3}},{id:'S1',element:'S',position2D:{x:2.5,y:2},metadata:{lonePairs:0}},{id:'O3',element:'O',position2D:{x:5,y:3}}],bonds:[{id:'b1',atomA:'S1',atomB:'O1',order:2},{id:'b2',atomA:'S1',atomB:'O2',order:2},{id:'b3',atomA:'S1',atomB:'O3',order:2}]},
    H2O:{formula:'H₂O',center:'O1',atoms:[{id:'H1',element:'H',position2D:{x:0,y:0}},{id:'O1',element:'O',position2D:{x:2.5,y:1.2},metadata:{lonePairs:2}},{id:'H2',element:'H',position2D:{x:5,y:0}}],bonds:[{id:'b1',atomA:'O1',atomB:'H1',order:1},{id:'b2',atomA:'O1',atomB:'H2',order:1}]},
    N2O:{formula:'N₂O',center:'N2',atoms:[{id:'N1',element:'N',position2D:{x:0,y:0}},{id:'N2',element:'N',position2D:{x:2.5,y:0},metadata:{lonePairs:0}},{id:'O1',element:'O',position2D:{x:5,y:0}}],bonds:[{id:'b1',atomA:'N1',atomB:'N2',order:2},{id:'b2',atomA:'N2',atomB:'O1',order:2}]},
    NO2:{formula:'NO₂',center:'N1',atoms:[{id:'O1',element:'O',position2D:{x:0,y:1}},{id:'N1',element:'N',position2D:{x:2.5,y:0},metadata:{lonePairs:1}},{id:'O2',element:'O',position2D:{x:5,y:1}}],bonds:[{id:'b1',atomA:'N1',atomB:'O1',order:2},{id:'b2',atomA:'N1',atomB:'O2',order:1}]}
  };
  const cases=C.DATA.VSEPR_CASES;
  const stage=root.querySelector('.vsepr-stage'), cap=root.querySelector('.vsepr-cap');
  const radii={H:22,C:34,N:32,O:30,S:34};
  const labels={H:'#0f172a',C:'#fff',N:'#fff',O:'#fff',S:'#fff'};
  function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function render(key){
    const raw=cases[key]; if(!raw){return;}
    const structure=C.STRUCTURE?.canonicalize?.(raw)||raw;
    const geo=C.GEOMETRY?.geometry?.(structure,{source:'VSEPR'})?.value;
    const vsepr=C.GEOMETRY?.vsepr?.(structure,raw.center)?.value;
    const coords=geo?.layout2D?.atoms||{};
    const atoms=structure.atoms||raw.atoms;
    const bonds=structure.bonds||raw.bonds;
    const scale=65, ox=45, oy=55;
    const pts={};
    atoms.forEach(a=>{const p=coords[a.id]||a.position2D||{x:0,y:0};pts[a.id]={x:ox+p.x*scale,y:oy+p.y*scale};});
    const minx=Math.min(...Object.values(pts).map(p=>p.x)), maxx=Math.max(...Object.values(pts).map(p=>p.x));
    const w=Math.max(500,maxx-minx+90);
    let svg=`<svg viewBox="0 0 ${w} 260" role="img" aria-label="${esc(raw.formula)} — VSEPR">`;
    svg+=`<text x="${w/2}" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#e8edf3">${esc(raw.formula)} · ${esc(vsepr?.molecularGeometry||'nieokreślona')} · ${vsepr?.idealAngles?.[0]??'—'}°</text>`;
    bonds.forEach(b=>{const a=pts[b.atomA],d=pts[b.atomB];if(!a||!d)return;const order=Math.max(1,Number(b.order)||1);for(let i=0;i<order;i++){const off=(i-(order-1)/2)*6;const dx=d.x-a.x,dy=d.y-a.y,L=Math.hypot(dx,dy)||1;const nx=-dy/L,ny=dx/L;svg+=`<line x1="${a.x+nx*off}" y1="${a.y+ny*off}" x2="${d.x+nx*off}" y2="${d.y+ny*off}" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>`;}});
    atoms.forEach(a=>{const p=pts[a.id],r=radii[a.element]||28, fill=a.element==='O'?'#ef4444':a.element==='N'?'#3b82f6':a.element==='S'?'#eab308':a.element==='H'?'#f1f5f9':'#334155';svg+=`<circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${fill}"/><text x="${p.x}" y="${p.y+7}" text-anchor="middle" font-size="18" font-weight="900" fill="${labels[a.element]||'#fff'}">${esc(a.element)}</text>`;});
    const c=pts[raw.center]; const lp=Number(vsepr?.domains?.lonePairs||0); for(let i=0;i<lp;i++){const ang=(-Math.PI/2)+(i-Math.max(0,lp-1)/2)*0.45;const x=c.x+Math.cos(ang)*52,y=c.y+Math.sin(ang)*52;svg+=`<circle cx="${x-5}" cy="${y}" r="6" fill="#fbbf24"/><circle cx="${x+5}" cy="${y}" r="6" fill="#fbbf24"/>`;}
    if(vsepr?.idealAngles?.[0]&&((vsepr.domains?.bonding||0)>=2))svg+=`<text x="${c.x}" y="${Math.min(235,c.y+65)}" text-anchor="middle" font-size="13" font-weight="800" fill="#fbbf24">kąt idealny: ${vsepr.idealAngles[0]}°</text>`;
    svg+='</svg>'; stage.innerHTML=svg;
    cap.textContent=`${raw.formula} — ${vsepr?.molecularGeometry||'brak klasyfikacji'}; domeny: ${vsepr?.domains?.stericNumber??'—'} (wiązania ${vsepr?.domains?.bonding??'—'}, wolne pary ${vsepr?.domains?.lonePairs??'—'}). Źródło: CHE.GEOMETRY.`;
  }
  return {mount(){root.querySelectorAll('[data-vs]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-vs]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.vs);}));render('CO2');},reset(){render('CO2');}};
});

/* ============================================================
   WIDGET 27: obsInferenceLab
   ============================================================ */
CHE.define('obsInferenceLab', ({root}) => {
  const data = {
    lime:{obs:'Woda wapienna mętnieje i pojawia się biały osad.',inf:'Wniosek: w próbce obecny jest CO₂; powstał CaCO₃.',eq:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O'},
    cao:{obs:'Naczynie wyraźnie się ogrzewa; powstaje zawiesina.',inf:'Wniosek: zachodzi egzotermiczna reakcja CaO z wodą.',eq:'CaO + H₂O → Ca(OH)₂'},
    cuo:{obs:'Czarny CuO znika, roztwór staje się niebieski.',inf:'Wniosek: CuO reaguje z kwasem; powstaje Cu²⁺.',eq:'CuO + H₂SO₄ → CuSO₄ + H₂O'},
    burn:{obs:'Magnez świeci bardzo jasnym światłem, powstaje biały produkt.',inf:'Wniosek: magnez reaguje z tlenem, tworząc MgO.',eq:'2 Mg + O₂ → 2 MgO'}
  };
  const rxMap={lime:'caco3Hcl',cuo:'cuoH2so4',cao:'',burn:''};
  Object.entries(rxMap).forEach(([k,id])=>{
    if(!id) return;
    const r=CHE.REACTION?.get?.(id); if(!r) return;
    if(r.observation) data[k].obs=r.observation;
    if(r.safety?.length) data[k].bhp=r.safety.join(' ');
    const eq=CHE.REACTION?.equation?.(id); if(eq) data[k].eq=eq;
  });
  const stage = root.querySelector('.obs-stage');
  return {
    mount(){
      root.querySelectorAll('[data-obs]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-obs]').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          const d = data[b.dataset.obs];
          stage.innerHTML = '<strong>Obserwacja:</strong> ' + d.obs + '<br>' +
            '<strong>Wniosek:</strong> ' + d.inf + '<br>' +
            '<strong>Równanie:</strong> <span class="formula">' + d.eq + '</span>';
        });
      });
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 28: metodaWidgetEl
   ============================================================ */
CHE.define('metodaWidgetEl', ({root}) => {
  const methods = {
    tlenek:{
      title:'Metoda 1: Tlenek metalu + woda → wodorotlenek',
      eq:['Na₂O + H₂O → 2NaOH','CaO + H₂O → Ca(OH)₂'],
      when:'Dotyczy niektórych tlenków zasadowych metali aktywnych.',
      why:'W tlenku występuje O²⁻; w reakcji z wodą powstają aniony OH⁻.',
      trap:'CuO, Fe₂O₃, Al₂O₃ praktycznie nie reagują z wodą. MgO bardzo słabo.',
      hint:'Sprawdź, czy dany tlenek rzeczywiście reaguje z wodą.',
      bhp:'Reakcja CaO + H₂O jest silnie egzotermiczna. Nie dotykaj CaO mokrymi rękami.'
    },
    metal:{
      title:'Metoda 2: Metal aktywny + woda → wodorotlenek + wodór↑',
      eq:['2Na + 2H₂O → 2NaOH + H₂↑','2K + 2H₂O → 2KOH + H₂↑','Ca + 2H₂O → Ca(OH)₂ + H₂↑'],
      when:'Dotyczy wybranych aktywnych metali, m.in. Li, Na, K, Ca, Ba.',
      why:'Metal oddaje elektrony, woda je przyjmuje; powstaje H₂ i OH⁻.',
      trap:'Nie każdy metal reaguje z zimną wodą. Mg reaguje bardzo wolno.',
      hint:'Po stronie produktów szukaj wodorotlenku oraz wodoru H₂↑.',
      bhp:'Doświadczenie wyłącznie jako pokaz nauczyciela. Sód reaguje gwałtownie.'
    },
    sol:{
      title:'Metoda 3: Sól metalu + zasada → wodorotlenek↓ + sól',
      eq:['FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl','CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄'],
      when:'Stosujemy, gdy powstający wodorotlenek jest trudno rozpuszczalny.',
      why:'Kation metalu + aniony OH⁻ → trudno rozpuszczalny wodorotlenek.',
      trap:'Nie każdy wodorotlenek wytrąci się jako osad.',
      hint:'Najpierw napisz poprawny wzór wodorotlenku, potem dobierz współczynniki.',
      bhp:'NaOH jest żrący. Pracuj w okularach i rękawicach.'
    }
  };
  const methodRx={
    tlenek:['so3H2o','cuoH2so4'],
    metal:['znHcl'],
    sol:['cuoH2so4','agno3Hcl']
  };
  Object.entries(methodRx).forEach(([k,ids])=>{
    const eqs=ids.map(id=>CHE.REACTION?.equation?.(id)).filter(Boolean);
    if(eqs.length) methods[k].eq=eqs;
  });
  const view = root.querySelector('.metoda-view');
  function render(key){
    const m = methods[key];
    view.innerHTML = '<div class="met-title">' + m.title + '</div>' +
      m.eq.map(l => '<div class="met-eq">' + l + '</div>').join('') +
      '<div class="met-block"><b>Kiedy:</b> ' + m.when + '</div>' +
      '<div class="met-block"><b>Dlaczego:</b> ' + m.why + '</div>' +
      '<div class="met-block"><b>Pułapka:</b> ' + m.trap + '</div>' +
      '<div class="met-block"><b>Wskazówka:</b> ' + m.hint + '</div>' +
      '<div class="met-block met-bhp"><b>BHP:</b> ' + m.bhp + '</div>';
  }
  return {
    mount(){
      root.querySelectorAll('.metoda-btn').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('.metoda-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          render(b.dataset.met);
        });
      });
      render('tlenek');
    },
    reset(){ render('tlenek'); }
  };
});

