

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
D.INDICATORS = [
  {name:'oranż metylowy',lo:3.1,hi:4.4,cLo:'#dc2626',cHi:'#facc15'},
  {name:'lakmus',lo:4.5,hi:8.3,cLo:'#dc2626',cHi:'#2563eb'},
  {name:'błękit bromotymolowy',lo:6.0,hi:7.6,cLo:'#eab308',cHi:'#2563eb'},
  {name:'fenoloftaleina',lo:8.2,hi:10.0,cLo:'transparent',cHi:'#db2777'}
];
D.INDICATOR_RANGES = D.INDICATORS.map(x=>({name:x.name,lo:x.lo,hi:x.hi}));
D.METAL_SERIES = ['K','Ca','Na','Mg','Al','Zn','Fe','Sn','Pb','H','Cu','Ag','Au'];
D.METAL_ACTIVE = ['K','Ca','Na','Mg','Al','Zn','Fe','Sn','Pb'];
D.ACID_STRENGTH = [
  {n:'HCl',a:1,c:'mocny'},{n:'HBr',a:1,c:'mocny'},{n:'HI',a:1,c:'mocny'},{n:'HNO₃',a:1,c:'mocny'},
  {n:'H₂SO₄ (I)',a:1,c:'mocny'},{n:'H₃PO₄',a:0.23,c:'średni'},{n:'HF',a:0.079,c:'średni'},
  {n:'CH₃COOH',a:0.013,c:'słaby'},{n:'H₂CO₃',a:0.0021,c:'słaby'},{n:'H₂S',a:0.001,c:'słaby'}
];
D.CONCEPTS = [
  {l:'definicja',c:'#2b5e9c',x:150,y:70,t:'Kwas Brønsteda: donor H⁺.'},
  {l:'nazewnictwo',c:'#2b5e9c',x:450,y:50,t:'Beztlenowe: -wodorowy. Tlenowe: -owy z cyfrą.'},
  {l:'wzór HₙR',c:'#2b5e9c',x:750,y:70,t:'H + reszta kwasowa.'},
  {l:'dysocjacja',c:'#6b3fa0',x:100,y:235,t:'HA + H₂O ⇌ H₃O⁺ + A⁻.'},
  {l:'reakcje',c:'#b06f1c',x:800,y:235,t:'metal · tlenek · wodorotlenek · węglan'},
  {l:'pH',c:'#2e7d4f',x:150,y:400,t:'pH < 7 kwasowy.'},
  {l:'zastosowania',c:'#2e7d4f',x:450,y:425,t:'żołądek · akumulatory · ocet'},
  {l:'BHP',c:'#b83a45',x:750,y:400,t:'Zawsze kwas do wody.'}
];
D.TIMELINE = [
  {year:'1887',who:'Svante Arrhenius',desc:'Teoria dysocjacji elektrolitycznej.'},
  {year:'1923',who:'Johannes Brønsted',desc:'Teoria protonowa: kwas = donor H⁺.'},
  {year:'1923',who:'Thomas Lowry',desc:'Niezależnie ta sama teoria protonowa.'},
  {year:'1923',who:'Gilbert Lewis',desc:'Teoria elektronowa: kwas = akceptor pary e⁻.'},
  {year:'XX w.',who:'Rozwój teorii',desc:'Pearson (HSAB), Usanovich, chemia supramolekularna.'}
];
D.COMPOUNDS = [
  {f:'HCl',n:'kwas chlorowodorowy · kwas solny (aq)',tag:'mocny',rows:[
    ['Reszta','Cl⁻ (chlorkowa)'],['Moc','Î± ≈ 1, pKa ≈ −7'],
    ['Otrzymywanie','H₂ + Cl₂ → 2 HCl; NaCl + H₂SO₄ → NaHSO₄ + HCl↑'],
    ['Reakcje','Zn + 2 HCl → ZnCl₂ + H₂↑ · NaOH + HCl → NaCl + H₂O'],
    ['Zastosowanie','żołądek (pH 1,5–2), odkamienianie, PVC']]},
  {f:'H₂SO₄',n:'kwas siarkowy(VI)',tag:'mocny',rows:[
    ['Reszta','SO₄²⁻'],['Moc','α₁ ≈ 1, α₂ < 1; pKa₁ ≈ −3'],
    ['Otrzymywanie','SO₃ + H₂O → H₂SO₄'],
    ['Reakcje','H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O'],
    ['Zastosowanie','akumulatory, nawozy, produkcja metali']]},
  {f:'CH₃COOH',n:'kwas octowy · etanowy',tag:'slaby',rows:[
    ['Reszta','CH₃COO⁻'],['Moc','α ≈ 0,01 dla 0,1 M, pKa = 4,76'],
    ['Otrzymywanie','Fermentacja octowa'],
    ['Reakcje','CH₃COOH + NaOH → CH₃COONa + H₂O'],
    ['Zastosowanie','ocet 5–10%, konserwant E260']]},
  {f:'H₂CO₃',n:'kwas węglowy',tag:'slaby',rows:[
    ['Reszta','CO₃²⁻'],['Moc','α << 1, pKa₁ = 6,37'],
    ['Otrzymywanie','CO₂ + H₂O ⇌ H₂CO₃'],
    ['Reakcje','H₂CO₃ + 2 NaOH → Na₂CO₃ + 2 H₂O'],
    ['Zastosowanie','napoje gazowane, bufor krwi (pH 7,4)']]},
  {f:'H₂S',n:'siarkowodór',tag:'gaz · toksyczny',rows:[
    ['Budowa','cząsteczka kątowa H–S–H'],['Stan (25 °C)','gaz'],
    ['Termochemia gazu','ΔfH° = −20,6 kJ/mol; S° = 205,81 J/(mol·K); Cp°(298,15 K) ≈ 34,20 J/(mol·K)'],
    ['Warunki','298,15 K; 1 bar · wartości dla fazy gazowej'],
    ['Źródło','NIST Chemistry WebBook SRD 69 · Cox, Wagman et al. 1984; Chase 1998 · https://webbook.nist.gov/cgi/cbook.cgi?ID=C7783064&Units=SI&Mask=1']]},
  {f:'SO₂',n:'dwutlenek siarki',tag:'gaz · toksyczny',rows:[
    ['Budowa','cząsteczka kątowa i polarna'],['Stan (25 °C)','gaz'],
    ['Termochemia gazu','ΔfH° = −296,81 kJ/mol; S° = 248,223 J/(mol·K); Cp°(298,15 K) ≈ 39,87 J/(mol·K)'],
    ['Warunki','298,15 K; 1 bar · wartości dla fazy gazowej'],
    ['Źródło','NIST Chemistry WebBook SRD 69 · Cox, Wagman et al. 1984; Chase 1998 · https://webbook.nist.gov/cgi/cbook.cgi?ID=C7446095&Units=SI&Mask=1']]},
  {f:'HCN',n:'cyjanowodór',tag:'gaz · silnie toksyczny',rows:[
    ['Budowa','cząsteczka liniowa H–C≡N'],['Stan (25 °C)','gaz'],
    ['Termochemia gazu','ΔfH° = 135,14 kJ/mol; S° = 201,82 J/(mol·K); Cp°(298,15 K) ≈ 35,85 J/(mol·K)'],
    ['Warunki','298,15 K; 1 bar · wartości dla fazy gazowej'],
    ['Źródło','NIST Chemistry WebBook SRD 69 · Chase 1998 · https://webbook.nist.gov/cgi/cbook.cgi?ID=C74908&Units=SI&Mask=1']]},
  {f:'H₂O₂',n:'nadtlenek wodoru',tag:'nadtlenek · utleniacz',rows:[
    ['Budowa','wiązanie nadtlenkowe O–O; szkic 2D uproszczony'],['Stan (25 °C)','czysta substancja: ciecz'],
    ['Termochemia gazu','ΔfH° = −136,11 kJ/mol; S° = 232,95 J/(mol·K); Cp°(298,15 K) ≈ 43,08 J/(mol·K)'],
    ['Warunki','298,15 K; 1 bar · podane wartości termochemiczne dotyczą fazy gazowej'],
    ['Źródło','NIST Chemistry WebBook SRD 69 · Chase 1998 · https://webbook.nist.gov/cgi/cbook.cgi?ID=C7722841&Units=SI&Mask=1']]},
  {f:'CO',n:'tlenek węgla(II)',tag:'gaz · silnie toksyczny',rows:[
    ['Budowa','cząsteczka dwuatomowa C≡O'],['Stan (25 °C)','gaz'],
    ['Termochemia gazu','ΔfH° = −110,53 kJ/mol; S° = 197,660 J/(mol·K); Cp°(298,15 K) ≈ 29,15 J/(mol·K)'],
    ['Warunki','298,15 K; 1 bar · wartości dla fazy gazowej'],
    ['Źródło','NIST Chemistry WebBook SRD 69 · Cox, Wagman et al. 1984; Chase 1998 · https://webbook.nist.gov/cgi/cbook.cgi?ID=C630080&Units=SI&Mask=1']]}
];
D.MODEL_LIMITS = {
  temperatureK:298.15, idealSolution:true, activityCoefficients:'pomijane',
  waterKw:1e-14, polyprotic:'idealny rozkład równowagowy',
  pKaReference:'wartości zaokrąglone; zależne od temperatury i definicji układu'
};
C.deepFreeze(D.INDICATORS); C.deepFreeze(D.INDICATOR_RANGES); C.deepFreeze(D.METAL_SERIES);
C.deepFreeze(D.METAL_ACTIVE); C.deepFreeze(D.ACID_STRENGTH); C.deepFreeze(D.CONCEPTS);
C.deepFreeze(D.TIMELINE); C.deepFreeze(D.COMPOUNDS); C.deepFreeze(D.MODEL_LIMITS);
})(window);

} catch (err) {
  try { console.warn('[CHE module 6]', err && err.message ? err.message : err); } catch(_){}
}