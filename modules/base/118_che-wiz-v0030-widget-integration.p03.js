/* ============================================================
   WIDGET 29: mapa-reakcji
   ============================================================ */
CHE.define('mapaReakcji', ({root}) => {
  const maps = {
    'Na':{svg:'<svg viewBox="0 0 720 160"><rect x="20" y="50" width="120" height="60" rx="10" fill="#f59e0b" stroke="#92400e" stroke-width="2"/><text x="80" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">Na</text><line x1="140" y1="80" x2="180" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="180" y="50" width="120" height="60" rx="10" fill="#2e7d4f" stroke="#14532d" stroke-width="2"/><text x="240" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">Na₂O</text><line x1="300" y1="80" x2="340" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="340" y="50" width="140" height="60" rx="10" fill="#2b5e9c" stroke="#1e3a5f" stroke-width="2"/><text x="410" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">NaOH</text><line x1="480" y1="80" x2="520" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="520" y="50" width="140" height="60" rx="10" fill="#6b3fa0" stroke="#4a1a6b" stroke-width="2"/><text x="590" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">NaCl</text></svg>',cap:'Na → Na₂O → NaOH → NaCl. Tlenek zasadowy.'},
    'S':{svg:'<svg viewBox="0 0 720 160"><rect x="20" y="50" width="120" height="60" rx="10" fill="#eab308" stroke="#78350f" stroke-width="2"/><text x="80" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">S</text><line x1="140" y1="80" x2="180" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="180" y="50" width="120" height="60" rx="10" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/><text x="240" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">SO₃</text><line x1="300" y1="80" x2="340" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="340" y="50" width="140" height="60" rx="10" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/><text x="410" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">H₂SO₄</text><line x1="480" y1="80" x2="520" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="520" y="50" width="140" height="60" rx="10" fill="#6b3fa0" stroke="#4a1a6b" stroke-width="2"/><text x="590" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">Na₂SO₄</text></svg>',cap:'S → SO₃ → H₂SO₄ → Na₂SO₄. Tlenek kwasowy.'},
    'C':{svg:'<svg viewBox="0 0 720 160"><rect x="20" y="50" width="120" height="60" rx="10" fill="#334155" stroke="#0f172a" stroke-width="2"/><text x="80" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">C</text><line x1="140" y1="80" x2="180" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="180" y="50" width="120" height="60" rx="10" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/><text x="240" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">CO₂</text><line x1="300" y1="80" x2="340" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="340" y="50" width="140" height="60" rx="10" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/><text x="410" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">H₂CO₃</text><line x1="480" y1="80" x2="520" y2="80" stroke="#0d6868" stroke-width="3"/><rect x="520" y="50" width="140" height="60" rx="10" fill="#6b3fa0" stroke="#4a1a6b" stroke-width="2"/><text x="590" y="86" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Inter">Na₂CO₃</text></svg>',cap:'C → CO₂ → H₂CO₃ → Na₂CO₃. Tlenek kwasowy.'}
  };
  const centralMap={
    Na:['hclNaOH'],
    S:['so3H2o'],
    C:['caco3Hcl']
  };
  Object.entries(centralMap).forEach(([k,ids])=>{
    const rs=ids.map(id=>CHE.REACTION?.get?.(id)).filter(Boolean);
    if(rs.length){
      maps[k].central=rs;
      const eq=CHE.REACTION?.equation?.(ids[0]);
      const meta=rs[0];
      maps[k].cap += '  ·  CHE: '+(eq||'')+(meta.conditions?'  ·  '+meta.conditions:'');
    }
  });
  const stage = root.querySelector('.reaction-map');
  const cap = root.querySelector('.rm-cap');
  return {
    mount(){
      root.querySelectorAll('[data-rm]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-rm]').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          const m = maps[b.dataset.rm];
          stage.innerHTML = m.svg;
          cap.textContent = m.cap;
        });
      });
      stage.innerHTML = maps['Na'].svg;
      cap.textContent = maps['Na'].cap;
    },
    reset(){}
  };
});

/* ============================================================
   WIDGET 30: adaptQuiz
   ============================================================ */
CHE.define('adaptQuiz', ({root}) => {
  const BANKS = {
    A:[
      {q:'Wzór tlenku sodu?',opts:['NaO','Na₂O','NaO₂','Na₂O₂'],ok:1,fb:'Na(I) + O(II) → Na₂O.'},
      {q:'CaO + H₂O → ?',opts:['CaO₂','Ca(OH)₂','CaH₂','Ca + H₂O₂'],ok:1,fb:'Tlenek zasadowy + woda → wodorotlenek.'},
      {q:'Charakter CO₂?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:1,fb:'Niemetal → kwasowy.'},
      {q:'Nazwa Fe₂O₃?',opts:['tlenek żelaza','tlenek żelaza(II)','tlenek żelaza(III)','tlenek żelazowy'],ok:2,fb:'Fe na +III.'},
      {q:'Wykrywanie CO₂?',opts:['woda bromowa','woda wapienna','fenoloftaleina','papierek'],ok:1,fb:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.'}
    ],
    B:[
      {q:'SO₃ + H₂O → ?',opts:['H₂SO₃','H₂SO₄','H₂S','SO₂'],ok:1,fb:'SO₃ to S(VI).'},
      {q:'MgO + H₂O w szkole:',opts:['gwałtownie','praktycznie nie','daje MgO₂','wybucha'],ok:1,fb:'Bardzo słabo.'},
      {q:'Nazwa Cu₂O?',opts:['tlenek miedzi','tlenek miedzi(II)','tlenek miedzi(I)','tlenek dwumiedzi'],ok:2,fb:'Cyfra rzymska obowiązkowa.'},
      {q:'Popraw FeO₃.',opts:['Fe₃O₂','Fe₂O₃','FeO','Fe₂O'],ok:1,fb:'W–K–S–K: 2·III = 3·II.'},
      {q:'Kolor CuO?',opts:['biały','czerwony','czarny','zielony'],ok:2,fb:'CuO — czarny.'}
    ],
    C:[
      {q:'Charakter Al₂O₃?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:3,fb:'Amfoteryczny.'},
      {q:'P₂O₅ — jaka jest cząsteczka?',opts:['PO₂','P₂O₃','P₄O₁₀','P₄O₆'],ok:2,fb:'Empiryczny P₂O₅; cząsteczka P₄O₁₀.'},
      {q:'SO₂ — geometria?',opts:['liniowa','kątowa','trygonalna','tetraedryczna'],ok:1,fb:'AX₂E — kątowa.'},
      {q:'Redukcja Fe₂O₃ węglem?',opts:['Fe₂O₃ + C → Fe + CO','2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂','Fe₂O₃ + 3 C → 2 Fe + 3 CO','nie zachodzi'],ok:1,fb:'Klasyczna redukcja metalurgiczna.'},
      {q:'Fe₃O₄ — co to?',opts:['tlenek żelaza(III)','tlenek mieszany Fe(II,III)','tlenek żelaza(II)','wodorotlenek żelaza'],ok:1,fb:'FeO·Fe₂O₃.'}
    ]
  };
  const wrap = root.querySelector('.adapt-quiz');
  function renderBank(lvl){
    const qs = BANKS[lvl];
    let answered = 0, correct = 0;
    wrap.innerHTML = '';
    qs.forEach((item, qi) => {
      const d = document.createElement('div');
      d.className = 'quiz-q';
      d.innerHTML = '<h5>' + (qi+1) + '. ' + item.q + '</h5><div class="quiz-opts"></div><div class="quiz-fb"></div>';
      const opts = d.querySelector('.quiz-opts');
      item.opts.forEach((o, oi) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'quiz-opt';
        b.textContent = o;
        b.addEventListener('click', () => {
          if(d.dataset.done) return;
          d.dataset.done = '1';
          answered++;
          opts.querySelectorAll('.quiz-opt').forEach((x, j) => {
            x.disabled = true;
            if(j === item.ok) x.classList.add('correct');
          });
          const fb = d.querySelector('.quiz-fb');
          if(oi === item.ok){
            correct++;
            b.classList.add('correct');
            fb.className = 'quiz-fb show ok';
            fb.textContent = '✓ ' + item.fb;
          } else {
            b.classList.add('wrong');
            fb.className = 'quiz-fb show bad';
            fb.textContent = '✕ ' + item.fb;
          }
          if(answered === qs.length){
            const sc = document.createElement('div');
            sc.style = 'text-align:center;padding:14px;background:var(--surface-soft);border-radius:var(--r-md);margin-top:12px;font-weight:800;color:var(--accent);';
            sc.textContent = 'Wynik poziomu ' + lvl + ': ' + correct + ' / ' + qs.length + ' (' + Math.round(100*correct/qs.length) + '%)';
            wrap.appendChild(sc);
          }
        });
        opts.appendChild(b);
      });
      wrap.appendChild(d);
    });
  }
  return {
    mount(){
      root.querySelectorAll('[data-lvl]').forEach(b => {
        b.addEventListener('click', () => {
          root.querySelectorAll('[data-lvl]').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          renderBank(b.dataset.lvl);
        });
      });
      renderBank('A');
    },
    reset(){ renderBank('A'); }
  };
});

/* ============================================================
   WIDGET 31: quiz
   ============================================================ */
CHE.define('quiz', ({root}) => {
  const Q = [
    {q:'Wzór tlenku żelaza(III)?',opts:['FeO₃','Fe₂O₃','FeO','Fe₃O₂'],ok:1,fb:'W–K–S–K: Fe(III), O(II) → Fe₂O₃.'},
    {q:'Charakter CO₂?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:1,fb:'Niemetal → kwasowy.'},
    {q:'CaO + H₂O → ?',opts:['CaO₂','Ca(OH)₂','2 CaOH','Ca + H₂O₂'],ok:1,fb:'Tlenek zasadowy + woda → wodorotlenek.'},
    {q:'CO (szkolnie) to tlenek:',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:2,fb:'CO, NO, N₂O — obojętne.'},
    {q:'SO₃ + H₂O → ?',opts:['H₂SO₃','H₂SO₄','SO₂ + H₂','H₂S'],ok:1,fb:'SO₃ to S(VI) → H₂SO₄.'},
    {q:'Al₂O₃ reaguje z HCl i NaOH. Charakter?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:3,fb:'Amfoteryczny.'},
    {q:'Mn₂O₇ — charakter?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:1,fb:'Wyjątek: metal na +VII → kwasowy.'},
    {q:'Wykrywanie CO₂?',opts:['woda bromowa','woda wapienna','papierek uniwersalny','fenoloftaleina'],ok:1,fb:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.'}
  ];
  const wrap = root.querySelector('.quiz-wrap');
  const scoreEl = root.querySelector('.quiz-score');
  let answered = 0, correct = 0;
  return {
    mount(){
      Q.forEach((item, qi) => {
        const d = document.createElement('div');
        d.className = 'quiz-q';
        d.innerHTML = '<h5>' + (qi+1) + '. ' + item.q + '</h5><div class="quiz-opts"></div><div class="quiz-fb"></div>';
        const opts = d.querySelector('.quiz-opts');
        item.opts.forEach((o, oi) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'quiz-opt';
          b.textContent = o;
          b.addEventListener('click', () => {
            if(d.dataset.done) return;
            d.dataset.done = '1';
            answered++;
            opts.querySelectorAll('.quiz-opt').forEach((x, j) => {
              x.disabled = true;
              if(j === item.ok) x.classList.add('correct');
            });
            const fb = d.querySelector('.quiz-fb');
            if(oi === item.ok){
              correct++;
              b.classList.add('correct');
              fb.className = 'quiz-fb show ok';
              fb.textContent = '✓ ' + item.fb;
            } else {
              b.classList.add('wrong');
              fb.className = 'quiz-fb show bad';
              fb.textContent = '✕ ' + item.fb;
            }
            if(answered === Q.length){
              scoreEl.className = 'quiz-score show';
              scoreEl.textContent = 'Wynik: ' + correct + ' / ' + Q.length + ' (' + Math.round(100*correct/Q.length) + '%).';
            }
          });
          opts.appendChild(b);
        });
        wrap.appendChild(d);
      });
    },
    reset(){
      answered = 0; correct = 0;
      wrap.innerHTML = '';
      scoreEl.className = 'quiz-score';
      this.mount();
    }
  };
});

/* ============================================================
   WIDGET 32: flashcards
   ============================================================ */
CHE.define('flashcards', ({root}) => {
  const cards = [
    ['Co to tlenek?','Związek tlenu z innym pierwiastkiem'],
    ['Na₂O + H₂O → ?','2 NaOH'],
    ['CaO + H₂O → ?','Ca(OH)₂'],
    ['SO₃ + H₂O → ?','H₂SO₄'],
    ['Charakter CO₂','kwasowy'],
    ['Charakter CO','obojętny (szkolnie)'],
    ['Charakter Al₂O₃','amfoteryczny'],
    ['Fe₂O₃ — nazwa','tlenek żelaza(III)'],
    ['Tlenki obojętne','CO, NO, N₂O'],
    ['Kolor CuO','czarny'],
    ['Kolor Fe₂O₃','rdzawy'],
    ['Wykrywanie CO₂','woda wapienna']
  ];
  const grid = root.querySelector('.flashcard-grid');
  return {
    mount(){
      grid.innerHTML = cards.map(c =>
        '<button class="flashcard" type="button">' +
        '<span class="front">' + c[0] + '</span>' +
        '<span class="back">' + c[1] + '</span>' +
        '</button>'
      ).join('');
      grid.querySelectorAll('.flashcard').forEach(b => {
        b.addEventListener('click', () => b.classList.toggle('flipped'));
      });
    },
    reset(){}
  };
});


C.WIZ_V0030={version:'0.30',source:'CHE.wiz.v00.30',
   migrationLayer:'CHE.WIDGET_API v0.05',widgetCount:C.LEGACY_WIDGETS?.size||0,sourceOfTruth:'FULL_ENGINE'};
})();
</script>