

defineView('obtaining-three', {
  title:'Trzy drogi otrzymywania kwasów', tag:'E8',
  hint:'Tlenek + woda, niemetal + wodór, sól + mocniejszy kwas. Warunki: światło / iskra / Δ.',
  foot:'Wszystkie kończą się tym samym efektem: w wodzie kwas daje H₃O⁺ i resztę kwasową → pH < 7.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> schemat dydaktyczny oparty o centralne typy reakcji · kontekst lekcji <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    V.flowchart(host, { vb:[760, 400], boxes:[
      {x:5,y:10,w:150,h:96,kind:'bl',title:'Tlenek kwasowy',lines:['SO₃, N₂O₅, CO₂']},
      {x:232,y:10,w:498,h:96,kind:'tl',title:'kwas tlenowy',lines:['SO₃ + H₂O → H₂SO₄','N₂O₅ + H₂O → 2 HNO₃  ;  CO₂ + H₂O ⇌ H₂CO₃','Uwaga: SiO₂ z wodą nie reaguje']},
      {x:5,y:122,w:150,h:96,kind:'bl',title:'Niemetal + wodór',lines:['Cl₂, Br₂, S']},
      {x:232,y:122,w:498,h:96,kind:'tl',title:'kwas beztlenowy',lines:['H₂ + Cl₂ → 2 HCl (światło)','H₂ + S → H₂S (Δ)','gazowy HCl dopiero w wodzie tworzy kwas']},
      {x:5,y:234,w:150,h:96,kind:'bl',title:'Sól + kwas',lines:['NaCl, Na₂SiO₃']},
      {x:232,y:234,w:498,h:96,kind:'tl',title:'kwas słabszy / lotny / osad',lines:['NaCl + H₂SO₄(stęż.) → NaHSO₄ + HCl↑','Na₂SiO₃ + 2 HCl → H₂SiO₃↓ + 2 NaCl','wypierany kwas musi być słabszy lub lotny']},
      {x:5,y:352,w:725,h:40,kind:'am',title:'Wspólny efekt: w wodzie kwas daje H₃O⁺ i resztę kwasową → pH < 7'},
    ], arrows:[
      {x1:155,y1:58,x2:230,y2:58,label:'+ H₂O'},
      {x1:155,y1:170,x2:230,y2:170,label:'światło / Δ'},
      {x1:155,y1:282,x2:230,y2:282,label:'Δ / osad'},
    ]});
  }
});

defineView('obtaining-hcl-steps', {
  title:'Otrzymywanie kwasu solnego — etapy', tag:'UND',
  hint:'Od soli do roztworu: gaz otrzymany z NaCl rozpuszczamy w wodzie.',
  foot:'HCl(g) ≠ HCl(aq). W wilgotnym powietrzu HCl(g) tworzy białą mgłę — kropelki kwaśnego roztworu.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> centralny schemat otrzymywania · produkt <b>HCl</b> · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    V.flowchart(host, { vb:[735, 172], boxes:[
      {x:5,y:10,w:140,h:72,kind:'bl',title:'1. Substraty',lines:['NaCl + H₂SO₄(stęż.)','pod dygestorium']},
      {x:175,y:10,w:230,h:72,kind:'am',title:'2. Reakcja',lines:['NaCl + H₂SO₄ → NaHSO₄ + HCl↑','wydziela się gazowy HCl']},
      {x:437,y:10,w:130,h:72,kind:'tl',title:'3. Woda',lines:['gaz HCl przez wodę','rozpuszcza się']},
      {x:599,y:10,w:131,h:72,kind:'gr',title:'4. Produkt',lines:['HCl(aq)','kwas chlorowodorowy']},
      {x:5,y:100,w:725,h:60,kind:'gy',title:'HCl(g) ≠ HCl(aq)',lines:['W wilgotnym powietrzu HCl(g) tworzy białą mgłę — kropelki kwaśnego roztworu, nie „biały gaz".']},
    ], arrows:[
      {x1:147,y1:46,x2:173,y2:46},{x1:407,y1:46,x2:435,y2:46},{x1:569,y1:46,x2:597,y2:46},
    ]});
  }
});

defineView('ion-vs-diss', {
  title:'Jonizacja vs dysocjacja — różnica', tag:'AMB',
  hint:'Jonizacja: cząsteczka kowalencyjna + woda → jony. Dysocjacja: kryształ jonowy → jony (już istniały w krysztale).',
  foot:'HCl ulega jonizacji. NaCl ulega dysocjacji. Efekt w wodzie podobny — jony w roztworze.',
  build(host) {
    V.flowchart(host, { vb:[735, 260], boxes:[
      {x:5,y:8,w:355,h:36,kind:'bl',title:'JONIZACJA — HCl w wodzie'},
      {x:375,y:8,w:355,h:36,kind:'am',title:'DYSOCJACJA — NaCl w wodzie'},
      {x:5,y:58,w:355,h:80,kind:'bx',title:'cząsteczka kowalencyjna + woda → jony',lines:['HCl(g) + H₂O → H₃O⁺ + Cl⁻','proton przechodzi z HCl na wodę']},
      {x:375,y:58,w:355,h:80,kind:'bx',title:'kryształ jonowy → rozdzielone jony',lines:['NaCl(s) → Na⁺(aq) + Cl⁻(aq)','jony istniały już w krysztale']},
      {x:5,y:154,w:355,h:96,kind:'gy',title:'Efekt',lines:['w roztworze: H₃O⁺ (kwas) + Cl⁻','pH < 7 — odczyn kwasowy','cząsteczki HCl praktycznie znikają (mocny)']},
      {x:375,y:154,w:355,h:96,kind:'gy',title:'Efekt',lines:['w roztworze: Na⁺ + Cl⁻ (obojętne)','pH ≈ 7 — odczyn obojętny','kryształ znika, jony swobodne']},
    ]});
  }
});

defineView('diss-three-levels', {
  title:'Trzy poziomy zapisu dysocjacji', tag:'AMB',
  hint:'Ten sam proces zapisany szkolnie, dokładniej (z wodą) i stopniowo.',
  foot:'→ oznacza dysocjację praktycznie całkowitą (mocny), ⇌ — równowagę (słaby).',
  build(host) {
    V.table(host, {
      columns:['Kwas','Szkolny zapis','Dokładniej (z wodą)','Stopniowo','α'],
      rows:[
        ['<b>HCl</b> (mocny, 1-protonowy)','HCl → H⁺ + Cl⁻','HCl + H₂O → H₃O⁺ + Cl⁻','jeden stopień','≈ 1'],
        ['<b>H₂SO₄</b> (mocny, 2-protonowy)','H₂SO₄ → 2 H⁺ + SO₄²⁻','H₂SO₄ + 2 H₂O → 2 H₃O⁺ + SO₄²⁻','I: → · II: ⇌','α₁ ≈ 1, α₂ < 1'],
        ['<b>CH₃COOH</b> (słaby, 1-protonowy)','CH₃COOH ⇌ H⁺ + CH₃COO⁻','CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻','jeden stopień','≈ 0,01 (1%)'],
      ]
    });
  }
});

defineView('acid-table', {
  title:'Tabela mocy kwasów', tag:'E8',
  hint:'Mocne i słabe kwasy — porównanie α i zapisu dysocjacji.',
  foot:'Źródło: CHE.DATA.ACID_STRENGTH. Lekcja może zawęzić listę, nie zmieniając bazy.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    const raw=(CHE.DATA&&CHE.DATA.ACID_STRENGTH)||[];
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('acid-table',{acids:raw.map(r=>r.n||r.id||r.formula)}):{};
    let rows=raw.map(r=>{
      const name=r.n||r.id||r.formula||'?';
      const cls=r.c||r.class||'';
      const a=r.a!=null?('α ≈ '+r.a):'—';
      const col=cls.indexOf('moc')>=0?'var(--c-e8)':'var(--c-warn)';
      const arrow=cls.indexOf('moc')>=0?'→':'⇌';
      return ['<b>'+name+'</b>','<b style="color:'+col+'">'+(cls||'—')+'</b>',a,arrow+' H⁺ + reszta'];
    });
    if(opts.acids&&opts.acids.length){
      const allow=opts.acids.map(String);
      const filtered=rows.filter(row=>allow.some(a=>row[0].indexOf(a)>=0));
      if(filtered.length) rows=filtered;
    }
    if(!rows.length){
      rows=[['<b>HCl</b>','mocny','α ≈ 1','→ H⁺ + Cl⁻'],['<b>CH₃COOH</b>','słaby','α ≈ 0,01','⇌ H⁺ + CH₃COO⁻']];
    }
    V.table(host,{columns:['Kwas','Moc','α','Zapis'],rows:rows});
    if(opts._lesson){
      const n=document.createElement('div');n.className='note';n.style.marginTop='8px';
      n.innerHTML='<b>Źródło:</b> CHE.DATA.ACID_STRENGTH → filtr lekcji <b>'+opts._lesson+'</b>.';
      host.appendChild(n);
    }
  }
});

defineView('hf-paradox', {
  title:'Paradoks HF — dlaczego słaby', tag:'AMB',
  hint:'F jest najbardziej elektroujemny, a jednak HF jest słabym kwasem w wodzie.',
  foot:'W grupie 17 moc rośnie w dół: HF ≪ HCl < HBr < HI. Wbrew elektroujemności. O mocy decyduje wypadkowa kilku czynników.',
  build(host) {
    V.flowchart(host, { vb:[760, 260], boxes:[
      {x:5,y:8,w:750,h:60,kind:'am',title:'Fakty',lines:['F — najbardziej elektroujemny pierwiastek','Intuicja: HF powinien być mocnym kwasem']},
      {x:5,y:88,w:370,h:80,kind:'bl',title:'Wyjaśnienie 1',lines:['wiązanie H–F bardzo silne i krótkie','trudno oderwać proton']},
      {x:385,y:88,w:370,h:80,kind:'bl',title:'Wyjaśnienie 2',lines:['wiązania wodorowe F···H–O–H','stabilizują cząsteczkę HF']},
      {x:5,y:188,w:750,h:60,kind:'gy',title:'Porównanie w grupie 17',lines:['HF ≪ HCl < HBr < HI — moc rośnie w dół grupy']},
    ]});
  }
});

defineView('ka-pka-table', {
  title:'Ka, pKa, moc — tabela', tag:'ZA',
  hint:'Ka — stała równowagi jonizacji. pKa = −log Ka. Mniejsze pKa = mocniejszy kwas.',
  foot:'HCl: pKa ≈ −7 · HNO₃: ≈ −1,4 · H₂SO₄ (I): ≈ −3 · HF: 3,17 · CH₃COOH: 4,76 · H₂CO₃: 6,37 · H₂S: 7,00.',
  build(host) {
    V.flowchart(host, { vb:[760, 280], boxes:[
      {x:5,y:8,w:750,h:80,kind:'bx',title:'Ka = [H₃O⁺][A⁻] / [HA]   ·   pKa = −log Ka',lines:['większe Ka = mocniejszy kwas','mniejsze pKa = mocniejszy kwas']},
      {x:5,y:100,w:750,h:170,kind:'gy',title:'Wartości orientacyjne (25 °C)',lines:[
        'HCl:       Ka ≈ 10⁷,    pKa ≈ −7     → bardzo mocny',
        'HNO₃:      Ka ≈ 24,     pKa ≈ −1,4   → mocny',
        'H₂SO₄ (I): Ka ≈ 10³,    pKa ≈ −3     → mocny',
        'HF:        Ka ≈ 6,8·10⁻⁴, pKa ≈ 3,17 → słaby',
        'CH₃COOH:   Ka ≈ 1,8·10⁻⁵, pKa ≈ 4,76 → słaby',
        'H₂CO₃:     Ka ≈ 4,3·10⁻⁷, pKa ≈ 6,37 → słaby',
        'H₂S:       Ka ≈ 1,0·10⁻⁷, pKa ≈ 7,00 → bardzo słaby']},
    ]});
  }
});

defineView('ph-ladder', {
  title:'Obliczanie pH — od stężenia do pH', tag:'UND',
  hint:'Najpierw ustal moc kwasu, potem wybierz wzór. √(Ka·c) stosuje się dla słabych przy α < 5%.',
  foot:'Skala logarytmiczna: pH 2 ma 10× więcej H₃O⁺ niż pH 3. ÷10 stężenia = pH +1.',
  build(host) {
    V.flowchart(host, { vb:[735, 290], boxes:[
      {x:90,y:8,w:180,h:40,kind:'tl',title:'Kwas o stężeniu c',hint:'Zacznij od ustalenia, jaki to kwas i jakie ma stężenie molowe c [mol/dm³].'},
      {x:90,y:64,w:180,h:40,kind:'am',title:'Mocny czy słaby?',more:'Mocne (HCl, HBr, HI, HNO₃, H₂SO₄ w I stopniu) dysocjują praktycznie całkowicie, słabe (CH₃COOH, H₂CO₃, HF, H₂S) tylko częściowo. Rozstrzyga Ka albo stopień dysocjacji α.'},
      {x:5,y:134,w:170,h:120,kind:'gr',title:'Mocny',more:'Dysocjacja całkowita, więc [H₃O⁺] = c. Dla H₂SO₄ w prostych zadaniach liczy się tylko I stopień; II stopień jest znacznie słabszy.',lines:['[H₃O⁺] = c','(H₂SO₄ I st.: ≈ c)','pH = −log c','np. 0,01 M HCl → pH 2']},
      {x:185,y:134,w:170,h:120,kind:'bl',title:'Słaby',hint:'Sprawdź, czy α < 5%. Jeśli nie, użyj pełnego równania kwadratowego.',more:'Z prawa rozcieńczeń Ostwalda: Ka = α²c/(1−α) ≈ α²c, stąd α = √(Ka/c) i [H₃O⁺] = √(Ka·c).',lines:['[H₃O⁺] = α·c','lub ≈ √(Ka·c)','pH = −log [H₃O⁺]','1 M CH₃COOH → pH ≈ 2,4']},
      {x:430,y:10,w:290,h:46,kind:'tl',title:'HCl 0,1 M → pH = 1',more:'HCl jest mocny, więc [H₃O⁺] = 0,1 = 10⁻¹ mol/dm³, a pH = −log 10⁻¹ = 1.'},
      {x:430,y:76,w:290,h:46,kind:'bl',title:'HCl 0,01 M → pH = 2',more:'[H₃O⁺] = 10⁻² mol/dm³, więc pH = 2. To 10× mniej jonów niż w roztworze 0,1 M.'},
      {x:430,y:142,w:290,h:46,kind:'am',title:'HCl 0,001 M → pH = 3',more:'[H₃O⁺] = 10⁻³ mol/dm³, więc pH = 3. Każde rozcieńczenie 10× podnosi pH o 1.'},
      {x:430,y:210,w:290,h:62,kind:'gy',title:'Skala logarytmiczna',hint:'Różnica 2 jednostek pH to 100× różnica stężenia.',more:'pH = −log[H₃O⁺]. Dlatego pH nie uśrednia się jak zwykłych liczb, tylko przelicza z powrotem na stężenia.',lines:['1 jednostka pH = 10× różnica [H₃O⁺]','pH 2 ma 10× więcej H₃O⁺ niż pH 3']},
    ], arrows:[
      {x1:180,y1:48,x2:180,y2:62},
      {x1:140,y1:104,x2:90,y2:132},
      {x1:220,y1:104,x2:270,y2:132},
      {x1:575,y1:56,x2:575,y2:74,label:'÷10 → pH +1'},
      {x1:575,y1:122,x2:575,y2:140,label:'÷10 → pH +1'},
    ]});
  }
});

function reactionsMerged(host,predictDefault){
  host.innerHTML='';
  const E=CHE.REACTION,CO=CHE.COLORS,KEY='che-react-predict',W=['sol-water'];

  const G=CHE.LAB.GFX,RXK=['mgHcl','znHcl','feHcl','alHcl','cuHcl','agHcl','cuoH2so4','caco3Hcl','hclNaOH','hclNaOH+php','agno3Hcl','cuHno3'];
  const R=RXK.filter(x=>G.rx.get(x)).map(x=>{const s=G.rx.get(x);return {rx:x,k:s.noRx?null:(s.rxKey||x),n:s.n,out:(s.out||['nic']).slice(),why:s.why||'',teacher:s.teacher,noRx:s.noRx,eq:s.eq}});
  const nCat=R.length;
  G.rx.list(s=>s.src==='CHE.COLORS').forEach(id=>{const d=CO.get(id),s=G.rx.get(id);if(d)R.push({rx:id,db:d,n:d.name,out:s.out.slice(),why:d.obs})});
  let predict;try{const v=localStorage.getItem(KEY);predict=v===null?!!predictDefault:v==='1'}catch(_){predict=!!predictDefault}
  const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
  const rbar=el('div','r'),rbar2=el('div','r','<b>Osady i wypieranie (CHE.COLORS):</b>'),tog=el('div','r','<label style="display:flex;gap:8px;align-items:center;font-weight:700"><input type="checkbox" class="pt"> Tryb przewidywania (najpierw zaznacz, co zobaczysz)</label>');
  const pred=el('div','r','<b>Predykcja:</b> <button data-k="gaz">gaz</button><button data-k="osad">osad</button><button data-k="barwa">zmiana barwy</button><button data-k="nic">brak zmian</button>');
  const cv=document.createElement('canvas');cv.dataset.h=340;cv.style.background='var(--surface-soft)';cv.style.borderRadius='var(--r-sm)';
  const controls=el('div','r','<button class="go">▶ wykonaj doświadczenie</button><button class="reset">↺ od nowa</button>');
  const detail=el('div','metric-grid'),note=el('div','note');
  host.append(rbar,rbar2,tog,pred,cv,controls,detail,note);
  let cur=0,chosen=new Set(),t0=null,done=false,tNow=0;
  const pt=tog.querySelector('.pt');pt.checked=predict;
  function data(r){
    if(r.db)return {eq:r.db.name,type:'reakcja barwna (osad / wypieranie)',cond:'—',obs:r.db.obs,prod:CO.get(r.db.after).name,bal:'—',saf:'',src:'CHE.COLORS (rekord reakcji)'};
    const d=r.k&&E&&E.get&&E.get(r.k);
    if(d){const PF=x=>String(x||'').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>'₀₁₂₃₄₅₆₇₈₉'[c])),TN=(CHE.DATA&&CHE.DATA.REACTION_TYPE_NAMES)||{};return {eq:PF(E.equation(r.k)),type:TN[d.type]||d.type,cond:d.conditions||'—',obs:d.observation||'—',prod:PF((d.productKeys||[]).join(', '))||'—',bal:d.balance&&d.balance.ok?'OK':'BŁĄD',saf:(d.safety||[]).join(' '),src:'CHE.REACTION (silnik)'}}
    return {eq:r.eq||'—',type:r.noRx?'brak reakcji':'brak rekordu w silniku',cond:'—',obs:r.noRx?'brak zjawisk':'—',prod:'—',bal:'—',saf:'',src:'zapis lokalny widoku (brak rekordu w CHE.REACTION)'}}
  function showData(){const d=data(R[cur]);detail.innerHTML='';
    [['Równanie',d.eq],['Typ',d.type],['Warunki',d.cond],['Obserwacja',d.obs],['Produkty',d.prod],['Bilans',d.bal]].forEach(([a,b])=>detail.appendChild(el('div',null,'<b>'+a+'</b><strong style="font-size:13px">'+b+'</strong>')))}
  function setMode(){pred.style.display=predict?'':'none';pt.checked=predict;reset()}
  function reset(){chosen.clear();t0=null;done=false;pred.querySelectorAll('[data-k]').forEach(b=>b.classList.remove('on'));controls.querySelector('.go').disabled=false;showData();
    [...rbar.querySelectorAll('button'),...rbar2.querySelectorAll('button')].forEach(b=>b.classList.toggle('on',+b.dataset.i===cur));
    note.textContent=(R[cur].teacher?'Tylko pokaz nauczyciela (toksyczny NO₂). ':'')+(predict?'Najpierw predykcja, potem obserwacja.':'Uruchom zlewkę i obserwuj.')}
  R.forEach((r,i)=>{const b=el('button',null,r.n);b.type='button';b.dataset.i=i;b.onclick=()=>{cur=i;reset()};(i<nCat?rbar:rbar2).appendChild(b)});
  pt.onchange=()=>{predict=pt.checked;try{localStorage.setItem(KEY,predict?'1':'0')}catch(_){}setMode()};
  pred.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{if(t0!==null&&!done)return;const k=b.dataset.k;if(k==='nic')chosen.clear();else chosen.delete('nic');chosen.has(k)?chosen.delete(k):chosen.add(k);if(k==='nic')chosen.add('nic');pred.querySelectorAll('[data-k]').forEach(x=>x.classList.toggle('on',chosen.has(x.dataset.k)))});
  controls.querySelector('.reset').onclick=reset;
  controls.querySelector('.go').onclick=()=>{if(predict&&!chosen.size){note.textContent='Najpierw wybierz predykcję (albo wyłącz tryb przewidywania).';return}t0=tNow;done=false;controls.querySelector('.go').disabled=true};
  setMode();
  M.add(cv,(ctx,w,h,time)=>{
    tNow=time;const r=R[cur],p=t0===null?0:Math.min(1,(time-t0)/6),e=p*p*(3-2*p);
    if(t0!==null&&!done&&p>=1){done=true;controls.querySelector('.go').disabled=false;const d=data(r);
      const ok=r.out.length===chosen.size&&r.out.every(x=>chosen.has(x));
      note.innerHTML=(predict?(ok?'✓ <b>Predykcja zgodna.</b> ':'<b>Porównaj predykcję z obserwacją.</b> '):'')+r.why+'<br><b>Zjawisko:</b> '+r.out.join(', ')+(d.saf?'<br><b>BHP:</b> '+d.saf:'')+'<br><small>Źródło danych: '+d.src+'.</small>'}
    const bw=Math.min(w*.5,300),bx=(w-bw)/2,by=54,bh=h-96,TH=G.theme();
    G.canvasDraw(ctx,w,h,time,G.rx.state(r.rx,p),{rect:{x:bx,y:by+bh*.12,w:bw,h:bh*.88},key:cur+'|'+t0});
    ctx.fillStyle=TH.text;ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,24);
    ctx.fillStyle=TH.mut;ctx.font='600 12px Inter,system-ui';ctx.fillText(t0===null?'przed doświadczeniem':p<1?'reakcja trwa…':'obserwacja zakończona',w/2,42);
  });
}
 
defineView('reakcje-kwasu-v03', {
  title:'Reakcje kwasów — zlewka modułowa · CHE.LAB v1.02', tag:'LAB',
  hint:'Odczynniki (chipy) → jedna zlewka → równanie, obserwacja, pH, BHP. Wspólna sesja LAB; pH słabych kwasów korzysta z CHE.EQUILIBRIUM gdy dostępne.',
  foot:'Silnik: CHE.LAB v1.02 · dane własne modułu + CHE.EQUILIBRIUM.weakAcidPH · preset acids (bez Na/K/Ca).',
  build(host){
    if(window.CHE&&CHE.LABVIEW){
      CHE.LABVIEW.mount(host,{preset:'acids', session:'viz-reakcje-kwasu'});
    } else if(typeof reactionsMerged==='function'){
      reactionsMerged(host,true);
    } else {
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW — wczytaj che-lab-engine-v001.</div>';
    }
  }
});

defineView('lab-library-v001',{title:'Biblioteka elementów laboratorium · v1.0',tag:'LAB',hint:'Naczynia, przyrządy, aparatura, cząsteczki i efekty: jedno źródło GFX dla wszystkich lekcji. Przeglądaj, poprawiaj, uzupełniaj, dopiero potem składaj laby.',foot:'API: CHE.LAB.GFX.mount({vessel,effects,get}) · CHE.LAB.LIBRARY.mount(host).',build(host){CHE.LAB.LIBRARY.mount(host)}});

defineView('lab-beaker-v102', {
  title:'CHE.LAB — uniwersalna zlewka (pełny panel) · v1.02', tag:'LAB',
  hint:'Samodzielny moduł laboratoryjny: kontrolki, zlewka, obserwacje, równanie, pH ze skalą i probówkami, BHP, kolejność, dziennik.',
  foot:'API: CHE.LABVIEW.mount / panel. Sesja współdzielona przez session id. Preset acids lub własna lista panels.',
  build(host){
    if(!(window.CHE&&CHE.LABVIEW)){
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW (che-lab-engine-v001).</div>';
      return;
    }
    CHE.LABVIEW.mount(host,{
      preset:'acids',
      session:'viz-lab-beaker-v102',
      titles:true,
      toggle:true
    });
  }
});

defineView('lab-stations-v102', {
  title:'CHE.LAB — stanowiska (zlewka, gaz, chłodnica, palnik, miareczkowanie) · v1.02', tag:'LAB',
  hint:'Multi-lab: kolba, przewód gazowy, odbiornik, chłodnica, spalanie, termika, miareczkowanie, wykresy i przepływ stanowiska.',
  foot:'Preset stations · CHE.LABVIEW · panele: flask, gasLine, gasTrap, cooler, combustion, thermal, titration…',
  build(host){
    if(!(window.CHE&&CHE.LABVIEW)){
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW (che-lab-engine-v001).</div>';
      return;
    }
    CHE.LABVIEW.mount(host,{
      preset:'stations',
      session:'viz-lab-stations-v102',
      titles:true,
      toggle:true
    });
  }
});

defineView('neutralization', {
  title:'Zobojętnianie — wspólny model reakcji', tag:'AMB',
  hint:'Wybierz zapis reakcji. Równanie cząsteczkowe pochodzi z CHE.REACTION; zapis jonowy pokazuje sedno procesu.',
  foot:'Dla HCl + NaOH skrócone jonowo: H⁺ + OH⁻ → H₂O. Dane reakcji, bilans i obserwacja są centralne.',
  build(host) {
    host.innerHTML='';
    const LC=CHE.LESSON_CONTEXT;
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('neutralization',{pairs:[['HCl','NaOH']], reactionId:'hclNaOH'}):{reactionId:'hclNaOH'};
    const rid=opts.reactionId||'hclNaOH';
     
    const rx=CHE.REACTION.get(rid);
    const box=document.createElement('div'); box.className='metric-grid';
    const mk=(label,val)=>{const d=document.createElement('div');d.innerHTML='<b>'+label+'</b><strong style="font-size:14px">'+val+'</strong>';return d;};
    const eq=CHE.REACTION.equation(rid);
    const balance=rx?.balance?.ok?'OK':'BŁĄD';
    box.append(mk('Równanie cząsteczkowe',eq),mk('Bilans atomów i ładunku',balance),mk('Typ',rx?.type||'—'));
    if(opts._lesson){ const ctx=document.createElement('div'); ctx.className='note'; ctx.innerHTML='<b>Źródło:</b> CHE.REACTION · kontekst lekcji <b>'+opts._lesson+'</b> (filtr UI, nie osobna baza).'; host.appendChild(ctx); }
    const svgHost=document.createElement('div');
    const explain=document.createElement('div'); explain.className='note';
    V.flowchart(svgHost,{vb:[735,330],boxes:[
      {x:5,y:8,w:725,h:62,kind:'tl',title:'Cząsteczkowe',lines:[eq]},
      {x:5,y:84,w:725,h:62,kind:'bl',title:'Jonowe pełne',lines:['Na⁺ + OH⁻ + H⁺ + Cl⁻ → Na⁺ + Cl⁻ + H₂O']},
      {x:5,y:160,w:725,h:62,kind:'gr',title:'Jonowe skrócone',lines:['H⁺ + OH⁻ → H₂O']},
      {x:5,y:236,w:725,h:78,kind:'gy',title:'Dane z CHE.REACTION',lines:[(rx?.observation||'')+' · '+(rx?.conditions||'brak dodatkowych warunków'), 'BHP: '+((rx?.safety||[]).join(' ')||'standardowe środki ostrożności')]}
    ],arrows:[{x1:367,y1:70,x2:367,y2:82},{x1:367,y1:146,x2:367,y2:158}]});
    const step=document.createElement('div');step.className='r';
    ['Cząsteczkowe','Jonowe pełne','Jonowe skrócone','Obserwacja / warunek'].forEach((t,i)=>{const b=document.createElement('button');b.textContent=t;b.onclick=()=>{explain.innerHTML='<b>Etap '+(i+1)+':</b> '+(i===0?eq:i===1?'Dysocjacja mocnych elektrolitów pokazuje wszystkie jony.':i===2?'Jony Na⁺ i Cl⁻ są obserwatorami; reagują H⁺ i OH⁻.':((rx?.observation||'Brak obserwacji.')+' '+(rx?.conditions||'')));};step.appendChild(b)});
    host.append(box,svgHost,step,explain);
  }
});

defineView('compound-cards', {
  title:'Karty związków — HCl, H₂SO₄, CH₃COOH, H₂CO₃', tag:'UND',
  hint:'Wzór · nazwy · reszta · moc · otrzymywanie · reakcje · zastosowanie · ciekawostka.',
  foot:'Kontrola: liczba kwaśnych H = ładunek reszty kwasowej.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT; if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> karty z centralnych substancji · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    host.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'cheat-cards';
    CHE.DATA.COMPOUNDS.forEach(c => {
      const card = document.createElement('div');
      card.className = 'compound-card';
      const tagLabel = c.tag === 'mocny' ? 'MOCNY' : c.tag === 'sredni' ? 'ŚREDNI' : 'SŁABY';
      card.innerHTML = `
        <div class="compound-head">
          <span class="f">${c.f}</span>
          <span class="n">${c.n}</span>
          <span class="tag ${c.tag}">${tagLabel}</span>
        </div>
        ${c.rows.map(([k, v]) => `<div class="compound-row"><b>${k}</b><span>${v}</span></div>`).join('')}`;
      grid.appendChild(card);
    });
    host.appendChild(grid);
  }
});

defineView('safety', {
  title:'Bezpieczeństwo — pierwsza pomoc i zasady', tag:'E8',
  hint:'Trzy scenariusze: skóra/oczy, połknięcie, wdychanie oparów.',
  foot:'Nie neutralizuj kwasu na skórze zasadą — reakcja wydziela ciepło.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT; if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> BHP z silnika dydaktycznego · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    V.flowchart(host, { vb:[760, 260], boxes:[
      {x:5,y:6,w:751,h:44,kind:'rd',title:'Zawsze: okulary · rękawice · fartuch · KWAS WLEWAMY DO WODY'},
      {x:5,y:64,w:245,h:124,kind:'bl',title:'Skóra lub oczy',lines:['1. zdejmij odzież','2. płucz wodą min. 15 min','3. oczy: płucz i jedź do lekarza','4. zgłoś nauczycielowi']},
      {x:256,y:64,w:245,h:124,kind:'am',title:'Połknięcie',lines:['1. NIE wywołuj wymiotów','2. wypłucz usta wodą','3. dzwoń 112 / 999','4. pokaż etykietę']},
      {x:507,y:64,w:249,h:124,kind:'gr',title:'Wdychanie oparów',lines:['1. wyjdź na świeże powietrze','2. przewietrz pomieszczenie','3. nie wracaj do oparów','4. duszność → dzwoń 112']},
      {x:5,y:200,w:751,h:48,kind:'gy',title:'Dlaczego „kwas do wody"',lines:['Wlewanie wody do stężonego H₂SO₄ miejscowo gotuje wodę i rozpryskuje kwas.']},
    ]});
  }
});

defineView('carboxyl', {
  title:'Grupa karboksylowa — który H jest kwaśny', tag:'AMB',
  hint:'W kwasach organicznych R–COOH tylko H z grupy karboksylowej oddaje proton.',
  foot:'R–COOH to wzór ogólny kwasów karboksylowych. Najprostszy: HCOOH (mrówkowy).',
  build(host) {
    V.molecule2D(host, { vb:[520, 300], mol: CHE.DATA.MOL2D.carboxyl });
  }
});

defineView('timeline', {
  title:'Historia pojęcia kwasu — 5 scen', tag:'UND',
  hint:'Kliknij kropkę lub użyj przycisków. Autoplay przewija sceny automatycznie.',
  foot:'Na poziomie E8 wystarczą teorie Arrheniusa i Brønsteda.',
  build(host) {
    host.innerHTML = '';
    const stage = document.createElement('div');
    stage.style.cssText = 'min-height:220px;background:var(--surface-soft);border:1px solid var(--border);border-radius:12px;padding:24px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;text-align:center';
    const dots = document.createElement('div');
    dots.style.cssText = 'display:flex;justify-content:center;gap:8px;margin:14px 0 8px';
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap';
    controls.innerHTML = `
      <button class="prev" style="padding:8px 14px;border:1px solid var(--border-strong);border-radius:8px;background:var(--surface);cursor:pointer;font:700 .82rem var(--sans)">← Poprzedni</button>
      <span class="prog" style="font:700 12.5px var(--mono);color:var(--text-muted)">1 / 5</span>
      <button class="next" style="padding:8px 14px;border:1px solid var(--border-strong);border-radius:8px;background:var(--surface);cursor:pointer;font:700 .82rem var(--sans)">Następny →</button>
      <button class="auto" style="padding:8px 14px;border:1px solid var(--border-strong);border-radius:8px;background:var(--surface);cursor:pointer;font:700 .82rem var(--sans)">▶ Autoplay</button>`;
    host.append(stage, dots, controls);
    let cur = 0, timer = null;
    const TL = CHE.DATA.TIMELINE;
    TL.forEach((_, i) => {
      const d = document.createElement('button');
      d.style.cssText = 'width:12px;height:12px;border-radius:50%;background:var(--border-strong);border:2px solid transparent;cursor:pointer;padding:0;transition:all .2s';
      d.addEventListener('click', () => { stop(); cur = i; render(); });
      dots.appendChild(d);
    });
    const prev = controls.querySelector('.prev');
    const next = controls.querySelector('.next');
    const auto = controls.querySelector('.auto');
    const prog = controls.querySelector('.prog');
    prev.onclick = () => { stop(); if (cur > 0) { cur--; render(); } };
    next.onclick = () => { stop(); if (cur < TL.length - 1) { cur++; render(); } };
    auto.onclick = () => {
      if (timer) { stop(); return; }
      if (cur >= TL.length - 1) cur = 0;
      render();
      timer = setInterval(() => { if (cur >= TL.length - 1) { stop(); return; } cur++; render(); }, 2000);
    };
    function stop() { if (timer) { clearInterval(timer); timer = null; auto.textContent = '▶ Autoplay'; } }
    function render() {
      const s = TL[cur];
      stage.innerHTML = `
        <div style="font:800 28px var(--mono);color:var(--accent);letter-spacing:1px">${s.year}</div>
        <div style="font:800 17px var(--sans);color:var(--text)">${s.who}</div>
        <div style="font-size:13.5px;color:var(--text-soft);max-width:560px;line-height:1.65">${s.desc}</div>`;
      [...dots.children].forEach((d, i) => {
        d.style.background = i === cur ? 'var(--accent)' : 'var(--border-strong)';
        d.style.transform = i === cur ? 'scale(1.25)' : 'scale(1)';
        d.style.boxShadow = i === cur ? '0 0 0 3px var(--accent-glow)' : 'none';
      });
      prog.textContent = (cur + 1) + ' / ' + TL.length;
      prev.disabled = cur === 0; next.disabled = cur === TL.length - 1;
      prev.style.opacity = cur === 0 ? 0.4 : 1;
      next.style.opacity = cur === TL.length - 1 ? 0.4 : 1;
      if (timer) auto.textContent = '⏸ Stop';
    }
    render();
  }
});