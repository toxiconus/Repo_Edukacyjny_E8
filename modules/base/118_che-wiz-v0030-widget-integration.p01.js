<script id="che-wiz-v0030-widget-integration">
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
// v00.30: tylko warstwa widgetów. Chemia, dane i API pozostają po stronie pełnego silnika.
CHE.define('ionization', ({root}) => {
  const svg = root.querySelector('.ion-svg');
  const text = root.querySelector('.ion-text');
  const txt = [
    'Krok 0: HCl i H₂O osobno.',
    'Krok 1: cząsteczki się zbliżają; H w HCl ma δ⁺, O w H₂O ma δ⁻.',
    'Krok 2: proton H⁺ przeskakuje z Cl na wolną parę elektronową tlenu.',
    'Krok 3: powstają jony: H₃O⁺ (kwasowy odczyn) i Cl⁻.'
  ];
  let i = 0;
  function set(n){
    i = n;
    svg.setAttribute('data-s', i);
    text.textContent = txt[i];
  }
  return {
    mount(){
      root.querySelector('[data-act="step"]').addEventListener('click', () => set(Math.min(3, i+1)));
      root.querySelector('[data-act="reset"]').addEventListener('click', () => set(0));
      set(0);
    },
    reset(){ set(0); }
  };
});

/* ============================================================
   WIDGET 2: bracketAnim
   ============================================================ */
CHE.define('bracketAnim', ({root}) => {
  const stages = {
    '1':{html:'CaOH<span class="err-part">₂</span>',caption:'Błędny zapis. Indeks 2 wydaje się dotyczyć tylko H.'},
    '2':{html:'CaO<span class="err-part">H₂</span>',caption:'Problem: indeks 2 objął tylko H. Ale wodorotlenek ma dwie grupy OH⁻.'},
    '3':{html:'Ca<span class="ok-bracket">(OH)₂</span>',caption:'Poprawnie. Nawias obejmuje całą grupę OH⁻.'},
    '4':{html:'Ca<span class="ok-bracket">(O₂H₂)</span>',caption:'Ca(OH)₂ = Ca₁O₂H₂. Indeks za nawiasem mnoży wszystkie atomy wewnątrz.'}
  };
  let timer = null;
  function show(k){
    root.querySelector('.br-display').innerHTML = stages[k].html;
    root.querySelector('.br-caption').innerHTML = stages[k].caption;
    root.querySelectorAll('.br-stage-btn').forEach(b => b.classList.toggle('active', b.dataset.br === k));
  }
  return {
    mount(){
      root.querySelectorAll('.br-stage-btn').forEach(b => {
        b.addEventListener('click', () => {
          if(timer){ clearInterval(timer); timer = null; }
          show(b.dataset.br);
        });
      });
      root.querySelector('[data-act="play"]').addEventListener('click', () => {
        if(timer){ clearInterval(timer); timer = null; return; }
        const btns = Array.from(root.querySelectorAll('.br-stage-btn'));
        let idx = 0;
        btns[0].click();
        timer = setInterval(() => {
          idx++;
          if(idx >= btns.length){ clearInterval(timer); timer = null; return; }
          btns[idx].click();
        }, 1200);
      });
      show('1');
    },
    reset(){ show('1'); }
  };
});

/* ============================================================
   WIDGET 3: dwStage
   ============================================================ */
CHE.define('dwStage', ({root}) => {
  const scenes = {
    cao: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#f6f8fa"/><text x="250" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5568">CaO + H₂O → Ca(OH)₂</text><circle cx="120" cy="130" r="30" fill="#b06f1c"/><text x="120" y="137" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">Ca</text><circle cx="220" cy="130" r="22" fill="#ef4444"/><text x="220" y="137" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">O</text><text x="270" y="135" text-anchor="middle" font-size="20" fill="#8892a0">+</text><circle cx="360" cy="130" r="18" fill="#bae6fd"/><text x="360" y="136" text-anchor="middle" font-size="11" fill="#1e3a5f" font-weight="700">H₂O</text><text x="250" y="220" text-anchor="middle" font-size="12" fill="#4a5568" font-style="italic">Tlenek zasadowy + woda → wodorotlenek</text></svg>', cap:'CaO reaguje z wodą. Powstaje Ca(OH)₂.'},
    so3: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#f6f8fa"/><text x="250" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5568">SO₃ + H₂O → H₂SO₄</text><circle cx="120" cy="130" r="30" fill="#eab308"/><text x="120" y="137" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">S</text><circle cx="200" cy="110" r="18" fill="#ef4444"/><circle cx="200" cy="150" r="18" fill="#ef4444"/><circle cx="240" cy="130" r="18" fill="#ef4444"/><text x="290" y="135" text-anchor="middle" font-size="20" fill="#8892a0">+</text><circle cx="370" cy="130" r="18" fill="#bae6fd"/><text x="370" y="136" text-anchor="middle" font-size="11" fill="#1e3a5f" font-weight="700">H₂O</text><text x="250" y="220" text-anchor="middle" font-size="12" fill="#4a5568" font-style="italic">Tlenek kwasowy + woda → kwas</text></svg>', cap:'SO₃ reaguje z wodą. Powstaje H₂SO₄.'},
    co2: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#f6f8fa"/><text x="250" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5568">CO₂ + H₂O ⇌ H₂CO₃</text><circle cx="120" cy="130" r="26" fill="#334155"/><text x="120" y="137" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">C</text><circle cx="200" cy="130" r="20" fill="#ef4444"/><circle cx="260" cy="130" r="20" fill="#ef4444"/><text x="310" y="135" text-anchor="middle" font-size="20" fill="#8892a0">+</text><circle cx="390" cy="130" r="18" fill="#bae6fd"/><text x="390" y="136" text-anchor="middle" font-size="11" fill="#1e3a5f" font-weight="700">H₂O</text><text x="250" y="220" text-anchor="middle" font-size="12" fill="#4a5568" font-style="italic">Słaby kwas — równowaga przesunięta w lewo</text></svg>', cap:'CO₂ reaguje z wodą, ale H₂CO₃ jest słaby i nietrwały.'},
    cuo: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#eaf1f9"/><text x="250" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#1e3a5f">CuO + H₂O → brak reakcji</text><circle cx="150" cy="130" r="30" fill="#b83a45"/><text x="150" y="137" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">Cu</text><circle cx="220" cy="130" r="22" fill="#ef4444"/><circle cx="360" cy="130" r="20" fill="#bae6fd"/><text x="360" y="136" text-anchor="middle" font-size="11" fill="#1e3a5f">H₂O</text><text x="250" y="220" text-anchor="middle" font-size="12" fill="#7f1d1d" font-style="italic">CuO nie reaguje z wodą. Z kwasem tak.</text></svg>', cap:'CuO praktycznie nie reaguje z wodą. Z kwasem — tak.'}
  };
  function render(k){
    root.querySelector('.dw-stage').innerHTML = scenes[k].svg;
    root.querySelector('.dw-caption').textContent = scenes[k].cap;
  }
  return {
    mount(){
      root.querySelectorAll('.dw-mode-btn').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('.dw-mode-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          render(b.dataset.dw);
        });
      });
      render('cao');
    },
    reset(){ render('cao'); }
  };
});

/* ============================================================
   WIDGET 4: dissWidget
   ============================================================ */
CHE.define('dissWidget', ({root}) => {
  const scenes = {
    krystal: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#f6f8fa"/><text x="250" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#4a5568">Wrzucamy kryształ NaOH do wody</text><rect x="180" y="90" width="140" height="140" rx="12" fill="#fcf4e6" stroke="#b06f1c" stroke-width="3"/><text x="250" y="150" text-anchor="middle" font-size="20" font-weight="900" fill="#7a4510">NaOH</text><text x="250" y="175" text-anchor="middle" font-size="11" fill="#7a4510">(kryształ)</text></svg>', cap:'NaOH to substancja stała. Wrzucamy ją do wody.'},
    rozpad: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#f6f8fa"/><text x="250" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#4a5568">Rozpad na jony</text><circle cx="150" cy="130" r="28" fill="#b06f1c"/><text x="150" y="136" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">Na⁺</text><text x="250" y="135" text-anchor="middle" font-size="24" fill="#8892a0">+</text><circle cx="350" cy="130" r="32" fill="#b83a45"/><text x="350" y="136" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">OH⁻</text></svg>', cap:'NaOH → Na⁺ + OH⁻. Powstają swobodne jony.'},
    hydratacja: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#f6f8fa"/><text x="250" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#4a5568">Hydratacja</text><circle cx="150" cy="140" r="50" fill="#fcf4e6" opacity="0.7"/><circle cx="150" cy="140" r="28" fill="#b06f1c"/><text x="150" y="146" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">Na⁺</text><circle cx="100" cy="110" r="9" fill="#bae6fd"/><circle cx="200" cy="110" r="9" fill="#bae6fd"/><circle cx="100" cy="170" r="9" fill="#bae6fd"/><circle cx="200" cy="170" r="9" fill="#bae6fd"/><circle cx="350" cy="140" r="60" fill="#fbeced" opacity="0.7"/><circle cx="350" cy="140" r="32" fill="#b83a45"/><text x="350" y="146" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">OH⁻</text><circle cx="290" cy="110" r="10" fill="#bae6fd"/><circle cx="410" cy="110" r="10" fill="#bae6fd"/><circle cx="290" cy="175" r="10" fill="#bae6fd"/><circle cx="410" cy="175" r="10" fill="#bae6fd"/></svg>', cap:'Jony otaczają się cząsteczkami wody — hydratacja.'},
    cuoh: {svg:'<svg viewBox="0 0 500 260"><rect width="500" height="260" fill="#eaf1f9"/><text x="250" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a5f">Cu(OH)₂ — nie rozpuszcza się</text><rect x="180" y="70" width="140" height="140" rx="12" fill="#3b82f6" stroke="#1e40af" stroke-width="3"/><text x="250" y="130" text-anchor="middle" font-size="16" font-weight="900" fill="#fff">Cu(OH)₂</text><text x="250" y="155" text-anchor="middle" font-size="11" fill="#dbeafe">sieć krystaliczna</text><text x="250" y="235" text-anchor="middle" font-size="12" fill="#7f1d1d" font-style="italic">Woda nie wyciąga jonów — zostaje osad</text></svg>', cap:'Cu(OH)₂ praktycznie nierozpuszczalny. Woda nie wyciąga jonów z sieci.'}
  };
  function render(k){
    root.querySelector('.dw-stage').innerHTML = scenes[k].svg;
    root.querySelector('.dw-caption').textContent = scenes[k].cap;
  }
  return {
    mount(){
      root.querySelectorAll('.dw-mode-btn').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('.dw-mode-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          render(b.dataset.diss);
        });
      });
      render('krystal');
    },
    reset(){ render('krystal'); }
  };
});

/* ============================================================
   WIDGET 5: timelineAnim
   ============================================================ */
CHE.define('timelineAnim', ({root}) => {
  const scenes = [
    {year:'1887',who:'Svante Arrhenius',desc:'Teoria dysocjacji elektrolitycznej: kwas = źródło H⁺, zasada = źródło OH⁻ w wodzie. Nobel 1903.'},
    {year:'1923',who:'Johannes Brønsted',desc:'Teoria protonowa: kwas = donor H⁺, zasada = akceptor H⁺. NH₃ jest zasadą mimo braku OH⁻.'},
    {year:'1923',who:'Thomas Lowry',desc:'Niezależnie od Brønsteda ta sama teoria protonowa. Pary sprzężone kwas–zasada.'},
    {year:'1923',who:'Gilbert Lewis',desc:'Teoria elektronowa: kwas = akceptor pary elektronowej, zasada = donor. Najszersza teoria.'},
    {year:'XX w.',who:'Rozwój teorii',desc:'Teoria Pearsona (HSAB), Usanovicha, chemia supramolekularna. Na E8 wystarczy Arrhenius i Brønsted.'}
  ];
  let current = 0;
  function render(){
    const s = scenes[current];
    root.querySelector('.ta-stage').innerHTML =
      '<div class="ta-scene"><div class="ta-year">' + s.year + '</div>' +
      '<div class="ta-who">' + s.who + '</div>' +
      '<div class="ta-desc">' + s.desc + '</div></div>';
    root.querySelector('.ta-progress').textContent = (current+1) + ' / ' + scenes.length;
    root.querySelector('[data-ta="prev"]').disabled = current === 0;
    root.querySelector('[data-ta="next"]').disabled = current === scenes.length - 1;
    root.querySelectorAll('.ta-dot').forEach((d,i) => d.classList.toggle('active', i === current));
  }
  return {
    mount(){
      const dots = root.querySelector('.ta-dots');
      scenes.forEach((s,i) => {
        const d = document.createElement('button');
        d.className = 'ta-dot' + (i === 0 ? ' active' : '');
        d.type = 'button';
        d.setAttribute('aria-label', 'Przejdź do ' + s.year);
        d.addEventListener('click', () => { current = i; render(); });
        dots.appendChild(d);
      });
      root.querySelector('[data-ta="prev"]').addEventListener('click', () => { if(current > 0){ current--; render(); }});
      root.querySelector('[data-ta="next"]').addEventListener('click', () => { if(current < scenes.length-1){ current++; render(); }});
      render();
    },
    reset(){ current = 0; render(); }
  };
});

/* ============================================================
   WIDGET 6: particleSim (dawniej ionLab)
   ============================================================ */
CHE.define('particleSim', ({root}) => {
  const CONFIGS = {
    fecl3: {cationName:'Fe³⁺', ratio:3, cationCount:6, ohCount:18, precipColor:'#7c2d12', cationColor:'#2e7d4f', ohColor:'#b83a45'},
    cuso4: {cationName:'Cu²⁺', ratio:2, cationCount:6, ohCount:12, precipColor:'#3b82f6', cationColor:'#b83a45', ohColor:'#b83a45'},
    mgcl2: {cationName:'Mg²⁺', ratio:2, cationCount:6, ohCount:12, precipColor:'#9aa4ad', cationColor:'#b06f1c', ohColor:'#b83a45'}
  };
  let configKey = 'fecl3';
  let simInst = null;
  const canvas = root.querySelector('canvas');
  function build(){
    if(simInst) simInst.stop();
    const cfg = CONFIGS[configKey];
    const preset = {
      particles: [
        {type:'cation', count:cfg.cationCount, r:15, color:cfg.cationColor, label:cfg.cationName, speed:1},
        {type:'oh', count:cfg.ohCount, r:11, color:cfg.ohColor, label:'OH⁻', speed:1.2}
      ],
      reaction: {cation:'cation', anion:'oh', ratio:cfg.ratio, product:cfg.cationName, color:cfg.precipColor}
    };
    simInst = new CHE.sim.ParticleSim({
      canvas,
      config: preset,
      onCounters: ({particles, clusters}) => {
        const cat = simInst.particles.filter(p => p.type === 'cation').length;
        const oh = simInst.particles.filter(p => p.type === 'oh').length;
        root.querySelectorAll('.il-value')[0].textContent = cat;
        root.querySelectorAll('.il-value')[1].textContent = oh;
        root.querySelectorAll('.il-value')[2].textContent = clusters;
      },
      onCluster: () => {
        root.querySelector('.il-feedback').textContent = 'Reakcja trwa. Klaster = 1 ' + cfg.cationName + ' + ' + cfg.ratio + ' OH⁻.';
      }
    });
    simInst.reset();
    root.querySelector('.il-feedback').textContent = 'Start: naciśnij ▶, aby uruchomić.';
  }
  return {
    mount(){
      root.querySelectorAll('.il-picker').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('.il-picker').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          configKey = b.dataset.ion;
          build();
        });
      });
      root.querySelector('[data-act="play"]').addEventListener('click', () => {
        if(simInst.running) simInst.stop(); else simInst.start();
      });
      root.querySelector('[data-act="reset"]').addEventListener('click', build);
      window.addEventListener('resize', () => { if(simInst){ simInst._resize(); simInst.draw(); }});
      build();
    },
    reset(){ build(); },
    destroy(){ if(simInst) simInst.stop(); }
  };
});

/* ============================================================
   WIDGET 7: acidReactor
   ============================================================ */
CHE.define('acidReactor', ({root}) => {
  const lq = root.querySelector('.rx-liquid');
  const so = root.querySelector('.rx-solid');
  const pr = root.querySelector('.rx-precip');
  const bb = root.querySelector('.rx-bubbles');
  const fu = root.querySelector('.rx-fumes');
  const lb = root.querySelector('.rx-label');
  const result = root.querySelector('.result-card');
  let tm = null;
  /* v0.33: zlewka GFX (wspólny silnik) zamiast zlewki z elementów DOM */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX, RK = {metal:'znHcl',oxide:'cuoHcl',base:'hclNaOH+php',carbonate:'caco3Hcl',silverNitrate:'agno3Hcl',copperNitric:'cuHno3'};
  let gctl = null;
  if (GX && GX.rx) { const bk = root.querySelector('.rx-beaker'); if (bk) { const h = document.createElement('div'); h.className = 'rx-gfx'; h.style.cssText = 'width:min(100%,300px);flex:0 0 auto'; bk.style.display = 'none'; bk.parentNode.insertBefore(h, bk); gctl = GX.rx.mount(h, 'znHcl', {height:230, dur:5}); } }
  const R = {
    metal:{l0:'rgba(220,235,240,.65)',l1:'rgba(220,235,240,.65)',s:'linear-gradient(#b8c0c8,#7d8791)',shrink:.35,bub:1,txt:'Zn rozpuszcza się, wydziela się <b>H₂↑</b> (bąbelki gazu).',eq:'Zn + 2 HCl → ZnCl₂ + H₂↑'},
    oxide:{l0:'rgba(220,235,240,.65)',l1:'rgba(60,170,160,.65)',s:'linear-gradient(#333,#111)',shrink:0,bub:0,txt:'Czarny <b>CuO</b> znika, roztwór zabarwia się na niebiesko (<b>Cu²⁺</b>).',eq:'CuO + 2 HCl → CuCl₂ + H₂O'},
    base:{l0:'rgba(226,40,130,.55)',l1:'rgba(230,240,245,.55)',s:null,bub:0,txt:'Z fenoloftaleiną: malinowy → <b>bezbarwny</b>. Zobojętnienie.',eq:'NaOH + HCl → NaCl + H₂O'},
    carbonate:{l0:'rgba(220,235,240,.65)',l1:'rgba(220,235,240,.65)',s:'linear-gradient(#fafafa,#d8dde3)',shrink:.4,bub:2,txt:'Kreda musuje: intensywnie wydziela się <b>CO₂↑</b>.',eq:'CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑'},
    silverNitrate:{l0:'rgba(220,235,240,.65)',l1:'rgba(220,235,240,.65)',s:null,bub:0,precip:1,txt:'Zmętnienie i biały osad <b>AgCl↓</b> opada na dno.',eq:'AgNO₃ + HCl → AgCl↓ + HNO₃'},
    copperNitric:{l0:'rgba(220,235,240,.65)',l1:'rgba(60,160,190,.75)',s:'linear-gradient(#d98a4a,#a8571f)',shrink:.2,bub:1,fume:1,txt:'Brązowy <b>NO₂↑</b> (toksyczny!), roztwór niebieski. Tylko pokaz.',eq:'Cu + 4 HNO₃ (stęż.) → Cu(NO₃)₂ + 2 NO₂↑ + 2 H₂O'}
  };
  function clear(){
    if(tm){ clearInterval(tm); tm = null; }
    bb.innerHTML = ''; pr.innerHTML = ''; fu.innerHTML = '';
    so.style.opacity = 0; so.style.height = '24px';
  }
  function spawn(parent, cls, n, setup){
    for(let i = 0; i < n; i++){
      const e = document.createElement('i');
      e.className = cls;
      setup(e);
      parent.appendChild(e);
      e.addEventListener('animationend', () => e.remove());
    }
  }
  function run(k){
    const c = R[k];
    if(!c) return;
    if(gctl){ clear(); gctl.set(RK[k]); gctl.play(); lb.innerHTML = c.txt; result.className = 'result-card info'; result.innerHTML = '<b>Równanie:</b> ' + c.eq; return; }
    clear();
    lq.style.transition = 'none';
    lq.style.background = c.l0;
    void lq.offsetWidth;
    lq.style.transition = '';
    if(c.s){
      so.style.background = c.s;
      so.style.opacity = 1;
      setTimeout(() => {
        so.style.height = (24 * c.shrink) + 'px';
        if(!c.shrink) so.style.opacity = 0;
      }, 60);
    }
    setTimeout(() => { lq.style.background = c.l1; }, 60);
    let t = 0;
    tm = setInterval(() => {
      t++;
      if(t > 26){ clearInterval(tm); tm = null; return; }
      if(c.bub) spawn(bb, 'rx-b', c.bub, e => {
        const s = 4 + Math.random() * 7;
        e.style.width = e.style.height = s + 'px';
        e.style.left = (20 + Math.random() * 80) + 'px';
        e.style.setProperty('--dx', (Math.random()*16-8) + 'px');
      });
      if(c.precip) spawn(pr, 'rx-p', 2, e => { e.style.left = (14 + Math.random()*90) + 'px'; });
      if(c.fume) spawn(fu, 'rx-f', 1, e => {
        e.style.left = (30 + Math.random()*50) + 'px';
        e.style.setProperty('--dx', (Math.random()*30-15) + 'px');
      });
    }, 150);
    lb.innerHTML = c.txt;
    result.className = 'result-card info';
    result.innerHTML = '<b>Równanie:</b> ' + c.eq;
  }
  return {
    mount(){
      root.querySelectorAll('[data-r]').forEach(b => {
        b.addEventListener('click', () => run(b.dataset.r));
      });
    },
    reset(){ clear(); if(gctl) gctl.reset(); }
  };
});

/* ============================================================
   WIDGET 8: titration
   ============================================================ */
CHE.define('titration', ({root}) => {
  const cv = root.querySelector('.titr-canvas');
  const sel = root.querySelector('.titr-type');
  const sl = root.querySelector('.titr-vol');
  const fl = root.querySelector('.titr-flask');
  const vOut = root.querySelector('.titr-v');
  const phOut = root.querySelector('.titr-ph');
  const indOut = root.querySelector('.titr-ind');
  const info = root.querySelector('.result-card');
  /* v0.33: biureta + kolba z GFX; barwa wskaźnika z CHE.COLORS (fenoloftaleina / oranż metylowy) */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX; let gst = null;
  if (GX && GX.mount && fl) { const h = document.createElement('div'); h.style.cssText = 'width:150px;flex:0 0 150px'; fl.style.display = 'none'; fl.parentNode.insertBefore(h, fl);
    gst = {liquid:[238,246,245], level:.3, titrant:{V:50, Vmax:50, drip:0, color:[205,228,238]}, T:25};
    GX.mount(h, {height:230, parts:[{id:'burette', x:.3, y:0, w:.4, h:.56, get:()=>gst}, {id:'flask', x:.12, y:.6, w:.76, h:.4, get:()=>gst}]}); }
  const W = 760, H = 330;
  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const Kw = 1e-14, Ka = 1.8e-5, Kn = Kw / 1.8e-5, V0 = 25, C = 0.1, VE = 25, VMAX = 50;
  const L = 52, R = W - 16, T = 18, B = H - 38;
  function bis(f){
    let lo = -14, hi = 0;
    for(let k = 0; k < 60; k++){
      const mid = (lo + hi) / 2;
      if(f(Math.pow(10, mid)) > 0) hi = mid; else lo = mid;
    }
    return -(lo + hi) / 2;
  }
  function pH(type, V){
    const Vt = V0 + V, na = C * V0 / Vt, nb = C * V / Vt;
    if(type === 'strongStrong') return bis(h => h + nb - Kw/h - na);
    if(type === 'weakStrong') return bis(h => nb + h - Kw/h - na * Ka / (Ka + h));
    return bis(h => na * h / (h + Kn) + h - Kw/h - nb);
  }
  function X(v){ return L + (R - L) * v / VMAX; }
  function Y(p){ return B - (B - T) * p / 14; }
  function ind(type, p){
    if(type === 'strongWeak'){
      return p < 3.1 ? ['#e5262e','oranż: czerwony'] : p < 4.4 ? ['#f08a24','oranż: pomarańczowy'] : ['#f2d33b','oranż: żółty'];
    }
    const a = p < 8.2 ? 0 : Math.min(1, (p - 8.2) / 1.8);
    return [a ? 'rgba(226,40,130,' + (.15 + .75*a) + ')' : '#eef6f5',
      p < 8.2 ? 'fenoloftaleina: bezbarwna' : 'fenoloftaleina: ' + (a < .6 ? 'różowa' : 'malinowa')];
  }
  function draw(V){
    const type = sel.value;
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, T, 0, B);
    g.addColorStop(0, 'rgba(74,75,181,.10)');
    g.addColorStop(.5, 'rgba(92,184,92,.07)');
    g.addColorStop(1, 'rgba(229,38,46,.10)');
    ctx.fillStyle = g; ctx.fillRect(L, T, R - L, B - T);
    ctx.font = '11px "JetBrains Mono",monospace';
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for(let p = 0; p <= 14; p += 2){
      ctx.strokeStyle = p === 7 ? '#94a3b8' : '#e5e9ee';
      ctx.setLineDash(p === 7 ? [4,4] : []);
      ctx.beginPath(); ctx.moveTo(L, Y(p)); ctx.lineTo(R, Y(p)); ctx.stroke();
      ctx.fillStyle = '#4a5568'; ctx.fillText(p, L - 8, Y(p));
    }
    ctx.setLineDash([]); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for(let v = 0; v <= VMAX; v += 10){ ctx.fillStyle = '#4a5568'; ctx.fillText(v, X(v), B + 6); }
    ctx.fillText('V titranta [cm³]', (L + R) / 2, B + 20);
    function path(to){
      ctx.beginPath();
      for(let vv = 0; vv <= to + 1e-9; vv += 0.1){
        const x = X(vv), y = Y(pH(type, vv));
        vv === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
    }
    ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(13,104,104,.18)';
    path(VMAX); ctx.stroke();
    const lg = ctx.createLinearGradient(L, 0, R, 0);
    lg.addColorStop(0, '#0d6868'); lg.addColorStop(1, '#2b5e9c');
    ctx.strokeStyle = lg; ctx.lineWidth = 4;
    path(V); ctx.stroke();
    const pe = pH(type, VE);
    ctx.setLineDash([6,5]); ctx.strokeStyle = '#b06f1c'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(X(VE), T); ctx.lineTo(X(VE), B); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#b06f1c'; ctx.beginPath(); ctx.arc(X(VE), Y(pe), 5, 0, 7); ctx.fill();
    const cp = pH(type, V), cx = X(V), cy = Y(cp);
    const rg = ctx.createRadialGradient(cx, cy, 2, cx, cy, 16);
    rg.addColorStop(0, 'rgba(13,104,104,.45)');
    rg.addColorStop(1, 'rgba(13,104,104,0)');
    ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(cx, cy, 16, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.strokeStyle = '#0d6868'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(cx, cy, 6, 0, 7); ctx.fill(); ctx.stroke();
    const c = ind(type, cp);
    fl.style.background = c[0];
    if (gst) { const idc = type === 'strongWeak' ? 'ind-oranz-metylowy' : 'ind-fenoloftaleina', col = GX.colors.at(idc, cp); if (col) gst.liquid = col; gst.level = .28 + .3 * V / VMAX; gst.titrant.V = VMAX - V; gst.titrant.drip = raf ? .8 : 0; }
    vOut.textContent = V.toFixed(1).replace('.', ',') + ' cm³';
    phOut.textContent = cp.toFixed(2).replace('.', ',');
    indOut.textContent = c[1];
    info.className = 'result-card info';
    info.textContent = 'Punkt równoważnikowy przy V = ' + VE + ' cm³. ' + (type === 'strongStrong' ? 'pH = 7.' : type === 'weakStrong' ? 'pH > 7 (sól słabego kwasu).' : 'pH < 7 (sól słabej zasady).');
  }
  function upd(){ draw(parseFloat(sl.value)); }
  let raf = null;
  return {
    mount(){
      root.querySelector('[data-act="play"]').addEventListener('click', () => {
        if(raf){ cancelAnimationFrame(raf); raf = null; root.querySelector('[data-act="play"]').textContent = '▶ Dodawaj titrant'; return; }
        if(parseFloat(sl.value) >= VMAX - .1) sl.value = 0;
        root.querySelector('[data-act="play"]').textContent = '⏸ Pauza';
        (function loop(){
          const v = parseFloat(sl.value) + .12;
          if(v >= VMAX){
            sl.value = VMAX; upd();
            cancelAnimationFrame(raf); raf = null;
            root.querySelector('[data-act="play"]').textContent = '▶ Dodawaj titrant';
            return;
          }
          sl.value = v; upd();
          raf = requestAnimationFrame(loop);
        })();
      });
      sl.addEventListener('input', upd);
      sel.addEventListener('change', upd);
      upd();
    },
    reset(){ sl.value = 0; upd(); }
  };
});

/* ============================================================
   WIDGET 9: burnRun
   ============================================================ */
CHE.define('burnRun', ({root}) => {
  const fuel = root.querySelector('.burn-fuel');
  const o2 = root.querySelector('.burn-o2');
  const o2Val = root.querySelector('.burn-o2-val');
  const flame = root.querySelector('.burn-flame');
  const eq = root.querySelector('.burn-eq');
  const status = root.querySelector('.sim-status');
  o2.addEventListener('input', () => { o2Val.textContent = o2.value + '%'; });
  /* v0.33: palnik GFX, barwa/sadza/T z CHE.PHYS.flame (φ = 100 / %O₂); węgiel: żarzenie w tyglu (CHE.PHYS.glow) */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX, PH = window.CHE && CHE.PHYS; let gst = null;
  if (GX && GX.mount && flame) { const h = document.createElement('div'); h.style.cssText = 'width:min(100%,300px)'; flame.style.display = 'none'; flame.parentNode.insertBefore(h, flame);
    gst = {mode:'CH4', flame:{on:0, power:.85, air:100, fuel:'CH4'}, level:0, T:25, solids:[{col:[30,30,30], eq:3, t:'chips', shape:'chips'}], lid:false};
    GX.mount(h, {height:230, state:gst, parts:[{id:'burner', x:.1, y:.02, w:.8, h:.98, show:S=>S.mode!=='C'}, {id:'tripod', x:.15, y:.5, w:.7, h:.5, show:S=>S.mode==='C', get:()=>({heat:gst.heat||0})}, {id:'crucible', x:.3, y:.22, w:.4, h:.34, show:S=>S.mode==='C'}], get:()=>gst}); }
  root.querySelector('[data-act="burn"]').addEventListener('click', () => {
    const f = fuel.value, pct = +o2.value;
    let eqTxt = '', statusTxt = '', cls = '';
    flame.className = 'burn-flame';
    const sz = Math.max(20, pct * 0.6);
    flame.style.width = sz + 'px';
    flame.style.height = (sz * 2) + 'px';
    if(pct >= 80){
      if(f === 'C') eqTxt = 'C + O₂ → CO₂';
      else if(f === 'CH4') eqTxt = 'CH₄ + 2 O₂ → CO₂ + 2 H₂O';
      else eqTxt = 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O';
      statusTxt = 'Spalanie całkowite — produkty: CO₂ (+ H₂O).';
      cls = 'ok';
      flame.style.background = 'radial-gradient(circle at 50% 80%,#dbeafe 0%,#60a5fa 30%,#2563eb 60%,transparent 90%)';
    } else if(pct >= 30){
      if(f === 'C') eqTxt = '2 C + O₂ → 2 CO';
      else if(f === 'CH4') eqTxt = '2 CH₄ + 3 O₂ → 2 CO + 4 H₂O';
      else eqTxt = '2 C₃H₈ + 7 O₂ → 6 CO + 8 H₂O';
      statusTxt = 'Spalanie niecałkowite — powstaje CO (czad). Niebezpieczne!';
      cls = 'warn';
      flame.style.background = 'radial-gradient(circle at 50% 80%,#fef3c7 0%,#fbbf24 30%,#f97316 60%,transparent 90%)';
    } else {
      if(f === 'C') eqTxt = 'C + O₂ → CO₂ + C (sadza)';
      else eqTxt = 'CH₄ + O₂ → C + 2 H₂O (sadza)';
      statusTxt = 'Bardzo mało tlenu — powstaje sadza (C) i CO.';
      cls = 'bad';
      flame.style.background = 'radial-gradient(circle at 50% 80%,#fef3c7 0%,#dc2626 30%,#7f1d1d 60%,transparent 90%)';
    }
    eq.textContent = eqTxt;
    status.className = 'sim-status ' + cls;
    status.textContent = statusTxt;
    if (gst && PH) { gst.mode = f; if (f === 'C') { const gl = PH.glow(450 + pct * 7); gst.heat = 1 + pct / 50; gst.solids = [{col:gl.rgb.map((v,i)=>Math.round(30 + (v - 30) * Math.max(.15, gl.a))), eq:3, t:'chips', shape:'chips'}]; status.textContent += ' Żarzenie: ' + gl.name + ' (~' + (450 + pct * 7) + ' °C).'; }
      else { const F = PH.flame({fuel:f, phi:100 / Math.max(5, pct), power:.85}); gst.flame = {on:1, power:.85, fuel:f, phi:F.phi, air:pct}; status.textContent += ' Płomień: ' + F.label + '.'; } }
  });
  return { mount(){}, reset(){} };
});

/* ============================================================
   WIDGET 10: co2
   ============================================================ */
CHE.define('co2', ({root}) => {
  const liquid = root.querySelector('.tube-liquid');
  const bubbles = root.querySelector('.co2-bubbles');
  const status = root.querySelector('.sim-status');
  const fb = root.querySelector('.result-card');
  /* v0.33: probówka GFX: pęcherzyki CO₂ + zmętnienie CaCO₃ (GFX.rx 'caOH2Co2') */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX; let gctl = null;
  if (GX && GX.rx) { const tb = root.querySelector('.tube'); if (tb) { const h = document.createElement('div'); h.style.cssText = 'width:min(100%,200px)'; tb.style.display = 'none'; tb.parentNode.insertBefore(h, tb); gctl = GX.rx.mount(h, 'caOH2Co2', {vessel:'testTube', height:230, dur:5}); } }
  return {
    mount(){
      root.querySelector('[data-act="blow"]').addEventListener('click', () => {
        liquid.classList.add('turbid'); if (gctl) gctl.play();
        status.className = 'sim-status warn';
        status.textContent = 'Woda wapienna zmętniała (biały osad CaCO₃).';
        fb.className = 'result-card ok';
        fb.innerHTML = '<b>Obserwacja:</b> woda wapienna zmętniała, powstał biały osad.<br>' +
          '<b>Wniosek:</b> obecny CO₂ — powstał CaCO₃.<br>' +
          '<b>Równanie:</b> CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O';
        bubbles.innerHTML = '';
        for(let i = 0; i < 10; i++){
          const b = document.createElement('div');
          b.className = 'co2-bubble';
          b.style.left = (20 + Math.random()*60) + '%';
          b.style.animationDelay = (Math.random()*1.5) + 's';
          bubbles.appendChild(b);
        }
      });
      root.querySelector('[data-act="reset"]').addEventListener('click', () => {
        liquid.classList.remove('turbid'); if (gctl) gctl.reset();
        bubbles.innerHTML = '';
        status.className = 'sim-status';
        status.textContent = 'Woda wapienna — klarowna.';
        fb.className = 'result-card info';
        fb.textContent = 'Równanie: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O';
      });
    },
    reset(){ root.querySelector('[data-act="reset"]').click(); }
  };
});

/* ============================================================
   WIDGET 11: neutralSim
   ============================================================ */
CHE.define('neutralSim', ({root}) => {
  let acidAdded = 0;
  const acidCm = root.querySelector('.ns-acid-cm');
  const baseCm = root.querySelector('.ns-base-cm');
  const baseV = root.querySelector('.ns-base-v');
  const acidStep = root.querySelector('.ns-acid-step');
  const acidMolesEl = root.querySelector('.ns-acid-moles');
  const baseMolesEl = root.querySelector('.ns-base-moles');
  const excessEl = root.querySelector('.ns-excess');
  const statusEl = root.querySelector('.ns-status');
  /* v0.38: biureta + kolba GFX, pH z bilansu (mocny kwas + mocna zasada), barwa fenoloftaleiny z CHE.COLORS */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX; let gst = null, phEl = null, gapi = null;
  if (GX && GX.mount && statusEl) { const h = document.createElement('div'); h.style.cssText = 'display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:10px'; const g = document.createElement('div'); g.style.cssText = 'width:170px;flex:0 0 170px'; phEl = document.createElement('div'); phEl.style.cssText = 'flex:1 1 200px;font:600 13px Inter,system-ui'; h.append(g, phEl); statusEl.parentNode.insertBefore(h, statusEl);
    gst = {liquid:[238,246,245], level:.35, titrant:{V:50, Vmax:50, drip:0, color:[205,228,238]}, T:25, dropReq:0};
    gapi = GX.mount(g, {height:230, parts:[{id:'burette', x:.3, y:0, w:.4, h:.56, get:()=>gst}, {id:'flask', x:.1, y:.6, w:.8, h:.4, get:()=>gst}]}); }
  function getParams(){
    return {
      acidCm: parseFloat(acidCm.value) || 0.1,
      baseCm: parseFloat(baseCm.value) || 0.1,
      baseV: parseFloat(baseV.value) || 50,
      acidStep: parseFloat(acidStep.value) || 5
    };
  }
  function update(){
    const p = getParams();
    const acidMoles = acidAdded * p.acidCm / 1000;
    const baseMoles = p.baseV * p.baseCm / 1000;
    const diff = baseMoles - acidMoles;
    if (gst) { const Vt = (p.baseV + acidAdded) / 1000; const pH = Math.abs(diff) < 1e-9 ? 7 : diff > 0 ? 14 + Math.log10(diff / Vt) : -Math.log10(-diff / Vt); const c = GX.colors.at('ind-fenoloftaleina', pH); if (c) gst.liquid = c; gst.level = Math.min(.8, .3 + .4 * acidAdded / Math.max(10, p.baseV * 2)); gst.titrant.V = Math.max(0, 50 - (acidAdded % 50));
      let net = ''; try { net = CHE.IONIC.equations('hclNaOH').net } catch(_) {} phEl.innerHTML = '<div style="font-size:22px;font-weight:800">pH ≈ ' + pH.toFixed(2).replace('.', ',') + '</div>' + (Math.abs(diff) < 1e-9 ? 'punkt równoważnikowy' : diff > 0 ? 'nadmiar zasady: [OH⁻] = ' + (diff / Vt).toExponential(1).replace('.', ',') + ' mol/dm³' : 'nadmiar kwasu: [H₃O⁺] = ' + (-diff / Vt).toExponential(1).replace('.', ',') + ' mol/dm³') + '<br><span style="opacity:.7">V całkowita ' + Math.round(Vt * 1000) + ' cm³ · jonowo: ' + net + '</span>'; }
    acidMolesEl.textContent = acidMoles.toFixed(3);
    baseMolesEl.textContent = baseMoles.toFixed(3);
    if(Math.abs(diff) < 0.0001){
      excessEl.textContent = '0.000';
      excessEl.className = 'ns-value ok';
      statusEl.className = 'ns-status eq';
      statusEl.textContent = 'Punkt zobojętnienia — odczyn obojętny';
    } else if(diff > 0){
      excessEl.textContent = diff.toFixed(3);
      excessEl.className = 'ns-value';
      statusEl.className = 'ns-status base';
      statusEl.textContent = 'Roztwór zasadowy — fenoloftaleina malinowa';
    } else {
      excessEl.textContent = Math.abs(diff).toFixed(3);
      excessEl.className = 'ns-value warn';
      statusEl.className = 'ns-status acid';
      statusEl.textContent = 'Nadmiar kwasu — fenoloftaleina bezbarwna';
    }
  }
  return {
    mount(){
      root.querySelector('[data-act="add"]').addEventListener('click', () => {
        acidAdded += getParams().acidStep; if (gst) gst.dropReq++;
        update();
      });
      root.querySelector('[data-act="reset"]').addEventListener('click', () => {
        acidAdded = 0; update();
      });
      [acidCm, baseCm, baseV, acidStep].forEach(el => {
        el.addEventListener('input', () => { acidAdded = 0; update(); });
      });
      update();
    },
    reset(){ acidAdded = 0; update(); }
  };
});

/* ============================================================
   WIDGET 12: buffer
   ============================================================ */
CHE.define('buffer', ({root}) => {
  const fill = root.querySelector('#bufferFillDemo');
  const phEl = root.querySelector('.buf-ph');
  const capEl = root.querySelector('.buf-cap');
  const stateEl = root.querySelector('.buf-state');
  let ph = 4.8, cap = 100;
  function render(){
    phEl.textContent = ph.toFixed(2).replace('.', ',');
    capEl.textContent = Math.round(cap) + '%';
    fill.style.width = Math.max(cap, 3) + '%';
    fill.style.backgroundColor = 'hsl(' + Math.round(cap * 1.2) + ',55%,42%)';
    stateEl.textContent = cap > 60 ? 'stabilny' : cap > 20 ? 'słabnie' : cap > 0 ? 'na wyczerpaniu' : 'wyczerpany';
  }
  function consume(d){
    if(cap <= 0){ ph = Math.max(2, Math.min(12, ph + d * 10)); render(); return; }
    ph = Math.max(2, Math.min(12, ph + d * (cap > 20 ? 1 : 3)));
    cap = Math.max(0, cap - 8);
    render();
  }
  return {
    mount(){
      root.querySelector('[data-act="addH"]').addEventListener('click', () => consume(-.08));
      root.querySelector('[data-act="addOH"]').addEventListener('click', () => consume(.08));
      root.querySelector('[data-act="reset"]').addEventListener('click', () => { ph = 4.8; cap = 100; render(); });
      render();
    },
    reset(){ ph = 4.8; cap = 100; render(); }
  };
});

/* ============================================================
   WIDGET 13: phWskazniki
   ============================================================ */
CHE.define('phWskazniki', ({root}) => {
  const r = root.querySelector('.ph-range');
  const m = root.querySelector('.ph-marker');
  const valEl = root.querySelector('.ph-value');
  const typeEl = root.querySelector('.ph-type');
  const indEl = root.querySelector('.ph-indicator');
  const flask = root.querySelector('.ph-flask');
  const colorName = root.querySelector('.ph-color-name');
  const stops = [
    [0,[229,38,46],'czerwony'],[2,[239,90,40],'pomarańczowo-czerwony'],
    [4,[246,162,30],'pomarańczowy'],[6,[215,217,58],'żółty'],
    [7,[92,184,92],'zielony'],[8,[33,168,154],'zielononiebieski'],
    [10,[47,127,193],'niebieski'],[12,[74,75,181],'granatowy'],
    [14,[107,45,143],'fioletowy']
  ];
  function col(p){
    for(let k = 1; k < stops.length; k++){
      if(p <= stops[k][0]){
        const a = stops[k-1], b = stops[k], f = (p - a[0]) / (b[0] - a[0]);
        const c = a[1].map((v,j) => Math.round(v + (b[1][j] - v) * f));
        return {rgb: 'rgb(' + c + ')', name: f < .5 ? a[2] : b[2]};
      }
    }
    return {rgb: 'rgb(107,45,143)', name: 'fioletowy'};
  }
  function render(){
    const p = parseFloat(r.value);
    valEl.textContent = p.toFixed(1);
    typeEl.textContent = p < 7 ? 'kwasowy' : p > 7 ? 'zasadowy' : 'obojętny';
    let s;
    if(p < 3.1) s = 'oranż: czerwony';
    else if(p < 4.4) s = 'oranż: pomarańczowy';
    else if(p < 7) s = 'oranż: żółty';
    else if(p < 8.2) s = 'fenoloftaleina: bezbarwna';
    else if(p < 10) s = 'fenoloftaleina: różowa';
    else s = 'fenoloftaleina: malinowa';
    indEl.textContent = s;
    m.style.left = (p / 14 * 100) + '%';
    m.setAttribute('data-v', p.toFixed(1));
    const c = col(p);
    flask.style.background = c.rgb;
    colorName.textContent = c.name;
  }
  return {
    mount(){
      r.addEventListener('input', render);
      root.querySelectorAll('[data-ph]').forEach(b => {
        b.addEventListener('click', () => { r.value = b.dataset.ph; render(); });
      });
      render();
    },
    reset(){ r.value = 7; render(); }
  };
});

