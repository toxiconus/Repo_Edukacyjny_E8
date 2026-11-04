/* KLOCEK: zlewka-rx — doświadczenie w zlewce / probówce (SVG, silniczek rx-lite: ciało stałe, bąbelki, piana, opary, osad, ogrzewanie, barwa wskaźnika).
   Wymaga ../lite/rx-lite.js (w manifeście przed tym plikiem). Opcje: k = klucz doświadczenia (zob. SPECS niżej), dur = czas animacji w s (6).
   Klik „powtórz” odtwarza animację. Dane kwasów (N04) są tu, bo rx-lite czyta specyfikacje w tym samym formacie co lab-dane.json. */
(function () {
  var C = window.CHE = window.CHE || {};
  var SPECS = {
    liH2o: {n: 'Li + H₂O (+ fenoloftaleina)', l0: ['ind-fenoloftaleina', 7], l1: ['ind-fenoloftaleina', 13], solid: {col: [205, 211, 218], eq: 4, end: .2, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: .7, eq: '2 Li + 2 H₂O → 2 LiOH + H₂↑'},
    naH2o: {n: 'Na + H₂O (+ fenoloftaleina)', l0: ['ind-fenoloftaleina', 7], l1: ['ind-fenoloftaleina', 13], solid: {col: [226, 229, 233], eq: 3, end: 0, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: 1.8, heat: .3, eq: '2 Na + 2 H₂O → 2 NaOH + H₂↑'},
    kH2o: {n: 'K + H₂O (+ fenoloftaleina)', l0: ['ind-fenoloftaleina', 7], l1: ['ind-fenoloftaleina', 13], solid: {col: [238, 240, 243], eq: 2, end: 0, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: 3, heat: .6, eq: '2 K + 2 H₂O → 2 KOH + H₂↑ (gwałtownie)'},
    znHcl: {n: 'Zn + HCl', solid: {col: [150, 158, 170], eq: 4, end: .4, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: 1.6, eq: 'Zn + 2 HCl → ZnCl₂ + H₂↑'},
    mgHcl: {n: 'Mg + HCl', solid: {col: [190, 196, 204], eq: 3, end: .1, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: 2.6, heat: 0, eq: 'Mg + 2 HCl → MgCl₂ + H₂↑'},
    feHcl: {n: 'Fe + HCl (wolno)', solid: {col: [110, 112, 118], eq: 4, end: .8, t: 'chips', shape: 'chips'}, l1: 'ion-fe2', gas: 'H2', bubN: .5, eq: 'Fe + 2 HCl → FeCl₂ + H₂↑'},
    cuHcl: {n: 'Cu + HCl — brak reakcji', solid: {col: [184, 115, 51], eq: 4, end: 1, t: 'chips', shape: 'chips'}, bubN: 0, eq: 'Cu + HCl → (brak reakcji)'},
    caco3Hcl: {n: 'CaCO₃ + HCl', solid: {col: [242, 242, 236], eq: 4, end: .3, t: 'chips', shape: 'chips'}, gas: 'CO2', bubN: 1.8, foam: .3, eq: 'CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑'},
    naohHclPhph: {n: 'NaOH + HCl (fenoloftaleina)', l0: ['ind-fenoloftaleina', 13], l1: ['ind-fenoloftaleina', 7], eq: 'NaOH + HCl → NaCl + H₂O'},
    cuoH2so4: {n: 'CuO + H₂SO₄ (ogrzewanie)', vessel: 'tube', heat: 1, T: 60, solid: {col: [28, 28, 30], eq: 3, end: 0, t: 'powder', shape: 'powder'}, l1: 'ion-cu2', eq: 'CuO + H₂SO₄ → CuSO₄ + H₂O'},
    cukierH2so4: {n: 'Cukier + stężony H₂SO₄ (pokaz nauczyciela)', solid: {col: [250, 250, 246], eq: 4, end: .2, t: 'powder', shape: 'powder'}, l0: '#e9f2f6', l1: '#2a1b10', foam: 1.4, fumes: 1, teacher: 1, eq: 'C₁₂H₂₂O₁₁ → 12 C + 11 H₂O (odwodnienie)'},
    hclDymi: {n: 'Stężony HCl „dymi”', gas: 'HCl', bubN: .3, fumes: 1, teacher: 1, eq: 'HCl(g) + H₂O(para) → mgiełka kropelek kwasu'},
    sodaOcet: {n: 'Soda oczyszczona + ocet', solid: {col: [246, 246, 240], eq: 4, end: 0, t: 'powder', shape: 'powder'}, gas: 'CO2', bubN: 2.4, foam: .9, eq: 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑'},
    skorupkaOcet: {n: 'Skorupka jajka + ocet', solid: {col: [236, 228, 210], eq: 4, end: .4, t: 'chips', shape: 'chips'}, gas: 'CO2', bubN: 1, eq: 'CaCO₃ + 2 CH₃COOH → (CH₃COO)₂Ca + H₂O + CO₂↑'},
    mgOcet: {n: 'Mg + ocet (słaby kwas)', solid: {col: [190, 196, 204], eq: 3, end: .6, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: .6, eq: 'Mg + 2 CH₃COOH → (CH₃COO)₂Mg + H₂↑'},
    mgH2so4: {n: 'Mg + H₂SO₄ (rozc.)', solid: {col: [190, 196, 204], eq: 3, end: .1, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: 2.4, eq: 'Mg + H₂SO₄ → MgSO₄ + H₂↑'},
    znH2so4: {n: 'Zn + H₂SO₄ (rozc.)', solid: {col: [150, 158, 170], eq: 4, end: .4, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: 1.5, eq: 'Zn + H₂SO₄ → ZnSO₄ + H₂↑'},
    znOcet: {n: 'Zn + ocet (słaby kwas)', solid: {col: [150, 158, 170], eq: 4, end: .8, t: 'chips', shape: 'chips'}, gas: 'H2', bubN: .25, eq: 'Zn + 2 CH₃COOH → (CH₃COO)₂Zn + H₂↑'},
    co2H2oUni: {n: 'CO₂ + H₂O (+ wskaźnik uniwersalny)', l0: ['ind-uniwersalny', 7], l1: ['ind-uniwersalny', 5], gas: 'CO2', bubN: 1.2, eq: 'CO₂ + H₂O ⇌ H₂CO₃ (słaby kwas)'},
    so2H2oUni: {n: 'SO₂ + H₂O (+ wskaźnik; pokaz)', l0: ['ind-uniwersalny', 7], l1: ['ind-uniwersalny', 3], bubN: 1, teacher: 1, eq: 'SO₂ + H₂O ⇌ H₂SO₃'},
    p4o10H2o: {n: 'P₄O₁₀ + H₂O (+ wskaźnik; pokaz)', l0: ['ind-uniwersalny', 7], l1: ['ind-uniwersalny', 1], solid: {col: [250, 250, 250], eq: 4, end: 0, t: 'powder', shape: 'powder'}, heat: .8, T: 50, teacher: 1, eq: 'P₄O₁₀ + 6 H₂O → 4 H₃PO₄'},
    hclH2oOranz: {n: 'HCl(g) + H₂O (+ oranż metylowy)', l0: ['ind-oranz-metylowy', 7], l1: ['ind-oranz-metylowy', 1], gas: 'HCl', bubN: .5, eq: 'HCl + H₂O → H₃O⁺ + Cl⁻'},
    h2sH2oUni: {n: 'H₂S + H₂O (+ wskaźnik uniwersalny)', l0: ['ind-uniwersalny', 7], l1: ['ind-uniwersalny', 4], gas: 'H2S', bubN: .5, eq: 'H₂S + H₂O ⇌ H₃O⁺ + HS⁻ (kwas słaby)'},
    naclH2so4: {n: 'NaCl + H₂SO₄ (stęż.; pokaz)', solid: {col: [250, 250, 250], eq: 4, end: 0, t: 'powder', shape: 'powder'}, gas: 'HCl', fumes: 1, bubN: 1.1, heat: .6, T: 50, teacher: 1, eq: 'NaCl + H₂SO₄ → NaHSO₄ + HCl↑'},
    na2sio3Hcl: {n: 'Na₂SiO₃ + HCl: osad kwasu', ppt: 'ppt-caco3', bubN: 0, eq: 'Na₂SiO₃ + 2 HCl → H₂SiO₃↓ + 2 NaCl'},
    phphKontrola: {n: 'NaOH + H₂O (kontrola, bez kwasu)', l0: ['ind-fenoloftaleina', 13], l1: ['ind-fenoloftaleina', 13], eq: 'NaOH + H₂O → barwa malinowa zostaje'},
    cuoH2so4Zimno: {n: 'CuO + H₂SO₄ na zimno (wolno)', vessel: 'tube', solid: {col: [28, 28, 30], eq: 3, end: .75, t: 'powder', shape: 'powder'}, l1: 'ion-cu2', eq: 'CuO + H₂SO₄ → CuSO₄ + H₂O (na zimno bardzo wolno)'},
    sodaHcl: {n: 'Soda oczyszczona + HCl', solid: {col: [246, 246, 240], eq: 4, end: 0, t: 'powder', shape: 'powder'}, gas: 'CO2', bubN: 3.2, foam: 1.1, eq: 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑'},
    rdzaHcl: {n: 'Rdza + HCl', solid: {col: [150, 82, 40], eq: 3, end: .05, t: 'powder', shape: 'powder'}, l1: 'ion-fe3', bubN: 0, eq: 'Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O'},
    rdzaOcet: {n: 'Rdza + ocet', solid: {col: [150, 82, 40], eq: 3, end: .15, t: 'powder', shape: 'powder'}, l1: 'ion-fe3', bubN: 0, eq: 'Fe₂O₃ + 6 CH₃COOH → 2 Fe(CH₃COO)₃ + 3 H₂O'}
  };
  if (C.RXL) C.RXL.data({specs: SPECS});
  KLOCKI.def('zlewka-rx', {
    opis: 'Doświadczenie w zlewce lub probówce: ciało stałe, bąbelki gazu, piana, opary, ogrzewanie i zmiana barwy cieczy; przycisk „powtórz” odtwarza animację.',
    domyslne: {k: 'znHcl', dur: 6},
    html: function (host, opc) {
      host.style.display = 'block';
      if (!C.RXL) { host.textContent = 'Brak silniczka rx-lite.'; return; }
      var box = document.createElement('div'); host.appendChild(box);
      var m = C.RXL.mount(box, opc.k, {dur: Number(opc.dur) || 6, auto: false});
      var I = C.RXL.info(opc.k), bar = document.createElement('div');
      bar.style.cssText = 'display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center;margin-top:6px;font-size:13px';
      var b = KLOCKI.ui.btn('▶ start', function () { m.play(); }); bar.appendChild(b);
      if (I.gas) { var s = document.createElement('span'); s.style.color = 'var(--muted,#5b6b73)'; s.textContent = 'Gaz: ' + I.gas.name + ' — ' + I.gas.test; bar.appendChild(s); }
      if ((SPECS[opc.k] || {}).teacher) { var t = document.createElement('b'); t.style.color = '#b83a45'; t.textContent = 'pokaz nauczyciela'; bar.appendChild(t); }
      host.appendChild(bar);
    }
  });

  /* KLOCEK: zlewki-rx — kilka zlewek obok siebie, jeden przycisk „wrzuć” startuje wszystkie naraz (jak pracownia f06: litowce + woda). */
  var ZESTAWY = {
    'litowce-woda': ['liH2o', 'naH2o', 'kH2o'],
    'metale-hcl': ['mgHcl', 'znHcl', 'cuHcl'],
    'moc-kwasu': ['mgHcl', 'mgOcet'],
    'kwasy-tlenowe': ['co2H2oUni', 'so2H2oUni', 'p4o10H2o'],
    'kwasy-z-gazu': ['hclH2oOranz', 'h2sH2oUni'],
    'kwasy-z-soli': ['naclH2so4', 'na2sio3Hcl'],
    'mg-kwasy': ['mgHcl', 'mgH2so4', 'mgOcet'],
    'zn-kwasy': ['znHcl', 'znH2so4', 'znOcet'],
    'weglan-kwasy': ['caco3Hcl', 'skorupkaOcet', 'sodaOcet']
  };
  KLOCKI.def('zlewki-rx', {
    opis: 'Kilka zlewek naraz (np. Mg, Zn i Cu w HCl); przycisk „wrzuć” uruchamia wszystkie animacje jednocześnie, pod każdą równanie.',
    domyslne: {zestaw: 'metale-hcl', k: '', dur: 6},
    html: function (host, opc) {
      host.style.display = 'block';
      if (!C.RXL) { host.textContent = 'Brak silniczka rx-lite.'; return; }
      var lista = opc.k ? String(opc.k).split(',').map(function (x) { return x.trim(); }) : (ZESTAWY[opc.zestaw] || ZESTAWY['metale-hcl']);
      var siatka = document.createElement('div');
      siatka.style.cssText = 'display:grid;grid-template-columns:repeat(' + Math.min(3, lista.length) + ',minmax(0,1fr));gap:6px';   // zawsze obok siebie (też na telefonie)
      var ms = [];
      siatka.className = 'zrx';
      if (!document.getElementById('zrx-css')) { var st = document.createElement('style'); st.id = 'zrx-css'; st.textContent = '.zrx .cap{font-size:clamp(11px,3vw,14px);line-height:1.2}'; document.head.appendChild(st); }
      lista.forEach(function (k) {
        var kom = document.createElement('div'), box = document.createElement('div');
        kom.appendChild(box);
        ms.push(C.RXL.mount(box, k, {dur: Number(opc.dur) || 6, auto: false}));
        var e = document.createElement('div'); e.style.cssText = 'text-align:center;font-size:clamp(10px,2.6vw,13px);line-height:1.25;margin-top:2px;overflow-wrap:anywhere';
        e.textContent = (SPECS[k] || {}).eq || ''; kom.appendChild(e); siatka.appendChild(kom);
      });
      host.appendChild(siatka);
      var bar = document.createElement('div'); bar.style.cssText = 'text-align:center;margin-top:8px';
      bar.appendChild(KLOCKI.ui.btn('▶ wrzuć metale / odczynnik', function () { ms.forEach(function (m) { m.play(); }); }));
      host.appendChild(bar);
    }
  });
})();
