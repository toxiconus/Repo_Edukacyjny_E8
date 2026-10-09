const rs = (A, B) => {
  const a = [];
  for(let i = 0; i < 3; i++) for(let j = 0; j < 3; j++) for(let k = 0; k < 3; k++) a.push([(i + j + k) % 2 ? B : A, i - 1, j - 1, k - 1]);
  return a;
};
const cup = (() => {
  const a = [];
  for(const x of [0, 4]) for(const y of [0, 4]) for(const z of [0, 4]) a.push(['O', x - 2, y - 2, z - 2]);
  a.push(['O', 0, 0, 0]);
  [[1,1,1],[3,3,1],[3,1,3],[1,3,3]].forEach(p => a.push(['Cu', p[0] - 2, p[1] - 2, p[2] - 2]));
  return a;
})();
const CD = {
  NaCl:{f:'NaCl',n:'chlorek sodu, halit',a:rs('Na','Cl'),b:1.01,k:.55,R:1.9,d:'Jony Na⁺ i Cl⁻ tworzą sieć typu NaCl (dwie przenikające się sieci fcc), liczba koordynacyjna 6:6. Energia sieciowa ok. 787 kJ/mol.'},
  Fe2O3:{f:'Fe₂O₃',n:'tlenek żelaza(III), hematyt',a:[['Fe',0,0,0],['O',1,0,0],['O',-1,0,0],['O',0,1,0],['O',0,-1,0],['O',0,0,1],['O',0,0,-1]],b:1.05,k:.5,R:1.7,d:'Czerwonobrunatna ruda żelaza i pigment. Każdy Fe³⁺ ma sześć sąsiadów O²⁻ w zniekształconym oktaedrze.'},
  FeO:{f:'FeO',n:'tlenek żelaza(II), wüstyt',a:rs('Fe','O'),b:1.01,k:.5,R:1.9,d:'Struktura typu NaCl, lecz niestechiometryczna (Fe₁₋ₓO), bo część żelaza występuje jako Fe³⁺ z lukami w sieci kationów.'},
  Cu2O:{f:'Cu₂O',n:'tlenek miedzi(I), kupryt',a:cup,b:1.8,k:.42,R:3.2,d:'Czerwony tlenek. Cu⁺ ma liniową koordynację 2 (O–Cu–O), a O²⁻ tetraedr czterech Cu⁺.'},
  H2O:{m:1,f:'H₂O',n:'woda',a:[['O',0,-.3,2],['H',-.85,.45,0],['H',.85,.45,0]],bn:[[0,1,1],[0,2,1]],d:'Cząsteczka kątowa (104,5°): dwie pary wolne tlenu odpychają wiązania O–H. Duża różnica χ daje silny dipol i wiązania wodorowe.'},
  CO2:{m:1,f:'CO₂',n:'dwutlenek węgla',a:[['C',0,0,0],['O',-1.3,0,2],['O',1.3,0,2]],bn:[[0,1,2],[0,2,2]],d:'Liniowa (180°), dwa wiązania podwójne C=O. Każde wiązanie jest polarne, ale dipole się znoszą.'},
  HCl:{m:1,f:'HCl',n:'chlorowodór',a:[['H',-.9,0,0],['Cl',.9,0,3]],bn:[[0,1,1]],d:'Dwuatomowa, silnie polarna (Δχ ≈ 0,96). W wodzie dysocjuje całkowicie: mocny kwas.'},
  CH4:{m:1,f:'CH₄',n:'metan',a:[['C',0,0,0],['H',-.9,-.9,0],['H',.9,-.9,0],['H',-.9,.9,0],['H',.9,.9,0]],bn:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],d:'Tetraedr (109,5°). Cztery równocenne wiązania C–H, sp³, symetria znosi dipole.'},
  NH3:{m:1,f:'NH₃',n:'amoniak',a:[['N',0,-.35,1],['H',-.95,.5,0],['H',.95,.5,0],['H',0,.95,0]],bn:[[0,1,1],[0,2,1],[0,3,1]],d:'Piramida trygonalna (ok. 107°) z parą wolną na azocie. Silny dipol, wiązania wodorowe, zasadowość.'},
  N2:{m:1,f:'N₂',n:'azot cząsteczkowy',a:[['N',-.6,0,1],['N',.6,0,1]],bn:[[0,1,3]],d:'Wiązanie potrójne N≡N (ok. 945 kJ/mol) czyni cząsteczkę wyjątkowo trwałą i obojętną.'},
  H2:{m:1,f:'H₂',n:'wodór cząsteczkowy',a:[['H',-.6,0,0],['H',.6,0,0]],bn:[[0,1,1]],d:'Forma pierwiastkowa wodoru: jedno wiązanie σ z nakładania orbitali 1s. Energia wiązania ~436 kJ/mol.'},
  Cl2:{m:1,f:'Cl₂',n:'chlor cząsteczkowy',a:[['Cl',-.8,0,3],['Cl',.8,0,3]],bn:[[0,1,1]],d:'Pojedyncze wiązanie Cl–Cl i trzy pary wolne na atomie. Silny utleniacz (E° = 1,36 V).'},
  CH3COOH:{m:1,f:'CH₃COOH',n:'kwas octowy (etanowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',0,-1.25,2],['O',.87,.25,2],['H',1.74,-.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1]],fg:[{n:'grupa karboksylowa –COOH',at:[1,2,3,4]},{n:'grupa metylowa –CH₃',at:[0,5,6,7]}],d:'Najprostszy kwas karboksylowy. Grupa –COOH łączy karbonyl C=O i hydroksyl –OH; polaryzacja wiązania O–H pozwala odszczepić proton (słaby kwas, pKa 4,76). Tworzy dimery przez wiązania wodorowe.'},
  C2H5OH:{m:1,f:'C₂H₅OH',n:'etanol (alkohol etylowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',.87,.25,2],['H',1.74,-.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0],['H',0,-1.25,0],['H',0,.75,0]],bn:[[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]],fg:[{n:'grupa hydroksylowa –OH',at:[2,3]}],d:'Alkohol z grupą hydroksylową –OH przy węglu sp³. Grupa –OH tworzy wiązania wodorowe (stąd wysoka temperatura wrzenia względem eteru o tej samej masie) i nadaje mieszalność z wodą.'},
  CH3CHO:{m:1,f:'CH₃CHO',n:'etanal (aldehyd octowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',0,-1.25,2],['H',.87,.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1]],fg:[{n:'grupa aldehydowa –CHO',at:[1,2,3]},{n:'grupa metylowa –CH₃',at:[0,4,5,6]}],d:'Aldehyd: grupa karbonylowa C=O na końcu łańcucha, z atomem H przy węglu karbonylowym. Łatwo się utlenia do kwasu (tu: octowego), co odróżnia aldehydy od ketonów.'},
  C3H6O:{m:1,f:'C₃H₆O',n:'propanon (aceton)',s:1.55,a:[['C',-.87,.5,0],['C',0,0,0],['O',0,-1,2],['C',.87,.5,0],['H',-.87,1.5,0],['H',-1.74,0,0],['H',-1.74,1,0],['H',.87,1.5,0],['H',1.74,0,0],['H',1.74,1,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1],[3,8,1],[3,9,1]],fg:[{n:'grupa karbonylowa (keton) >C=O',at:[1,2]}],d:'Najprostszy keton: grupa karbonylowa C=O między dwoma grupami metylowymi. Polarne wiązanie C=O daje duży dipol; rozpuszczalnik mieszalny z wodą. Trudniej się utlenia niż aldehyd.'},
  CH3NH2:{m:1,f:'CH₃NH₂',n:'metyloamina',s:1.55,a:[['C',-.87,.25,0],['N',0,-.25,1],['H',.87,.25,0],['H',0,-1.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,1],[1,3,1],[0,4,1],[0,5,1],[0,6,1]],fg:[{n:'grupa aminowa –NH₂',at:[1,2,3]},{n:'grupa metylowa –CH₃',at:[0,4,5,6]}],d:'Najprostsza amina pierwszorzędowa. Wolna para elektronowa na azocie czyni ją zasadą (akceptor protonu) i nukleofilem; tworzy wiązania wodorowe.'},
  C6H6:{m:1,f:'C₆H₆',n:'benzen',s:1.55,ar:1,a:[['C',0.0,-1.0,0],['C',0.866,-0.5,0],['C',0.866,0.5,0],['C',0.0,1.0,0],['C',-0.866,0.5,0],['C',-0.866,-0.5,0],['H',0.0,-1.95,0],['H',1.689,-0.975,0],['H',1.689,0.975,0],['H',0.0,1.95,0],['H',-1.689,0.975,0],['H',-1.689,-0.975,0]],bn:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]],fg:[{n:'pierścień aromatyczny (benzenowy)',at:[0,1,2,3,4,5]}],d:'Płaski sześciokąt z sześciu atomów C sp². Sześć elektronów π jest zdelokalizowanych nad pierścieniem (stąd koło we wzorze), więc wszystkie wiązania C–C mają tę samą długość 139 pm, pośrednią między pojedynczym a podwójnym. Układ aromatyczny jest wyjątkowo trwały.'},
  CaO:{f:'CaO',n:'tlenek wapnia, wapno palone',a:[['Ca',0,0,0],['O',1.4,0,0]],b:1.1,k:.5,R:1.8,d:'Tlenek zasadowy. Z woda daje Ca(OH)2.'},
  CuO:{f:'CuO',n:'tlenek miedzi(II)',a:[['Cu',0,0,0],['O',1.3,0,0]],b:1.05,k:.5,R:1.7,d:'Czarny tlenek. Z kwasem daje sol miedzi(II).'},
  SO2:{f:'SO2',n:'tlenek siarki(IV)',a:[['S',0,0,0],['O',1.2,0.4,0],['O',-1.2,0.4,0]],b:1,k:.45,R:1.6,d:'Bezwodnik kwasu siarkowego(IV).'},
  SO3:{f:'SO3',n:'tlenek siarki(VI)',a:[['S',0,0,0],['O',1.2,0,0],['O',-0.6,1.0,0],['O',-0.6,-1.0,0]],b:1,k:.45,R:1.6,d:'Bezwodnik kwasu siarkowego(VI).'},
  H2SO4:{f:'H₂SO₄',n:'kwas siarkowy(VI)',d:'Kwas tlenowy. Z wodą dysocjuje.'},
  NaOH:{f:'NaOH',n:'wodorotlenek sodu',a:[['Na',0,0,0],['O',1.2,0,0],['H',2.0,0,0]],b:1,k:.5,R:1.7,d:'Mocna zasada. W wodzie jony Na+ i OH-.'},
  CaOH2:{f:'Ca(OH)2',n:'wodorotlenek wapnia',a:[['Ca',0,0,0],['O',1.2,0.4,0],['O',1.2,-0.4,0]],b:1.05,k:.5,R:1.8,d:'Woda wapienna. Z CO2 metnieje.'},
  MgO:{f:'MgO',n:'tlenek magnezu',a:[['Mg',0,0,0],['O',1.3,0,0]],b:1.05,k:.5,R:1.7,d:'Tlenek zasadowy. Z woda reaguje slabo.'},
  Al2O3:{f:'Al2O3',n:'tlenek glinu',a:[['Al',0,0,0],['O',1.2,0,0],['O',-0.6,1,0],['O',-0.6,-1,0]],b:1,k:.45,R:1.6,d:'Tlenek amfoteryczny.'},
  Na2SO4:{f:'Na2SO4',n:'siarczan sodu',a:[['Na',-1.4,0,0],['S',0,0,0],['O',1.1,0,0],['Na',1.8,0.6,0]],b:1,k:.45,R:1.6,d:'Sol kwasu siarkowego(VI).'},
  CaCO3:{f:'CaCO3',n:'weglan wapnia',a:[['Ca',0,0,0],['C',1.3,0,0],['O',2.2,0,0]],b:1.05,k:.5,R:1.7,d:'Kred, wapien. Z kwasem daje CO2.'},
  AgCl:{f:'AgCl',n:'chlorek srebra',a:[['Ag',0,0,0],['Cl',1.4,0,0]],b:1.05,k:.5,R:1.8,d:'Osad bialy, trudno rozpuszczalny.'},
  KCl:{f:'KCl',n:'chlorek potasu',a:[['K',0,0,0],['Cl',1.4,0,0]],b:1.05,k:.5,R:1.8,d:'Sol. W wodzie jony K+ i Cl-.'},
  Na2CO3:{f:'Na2CO3',n:'weglan sodu',a:[['Na',-1.2,0,0],['C',0,0,0],['O',1.1,0,0],['Na',1.6,0.5,0]],b:1,k:.45,R:1.6,d:'Soda. W wodzie odczyn zasadowy.'},
  CuSO4:{f:'CuSO4',n:'siarczan miedzi(II)',a:[['Cu',0,0,0],['S',1.4,0,0],['O',2.3,0,0]],b:1,k:.45,R:1.6,d:'Bezwodny bialy, uwodniony niebieski.'},
  HNO3:{f:'HNO3',n:'kwas azotowy(V)',a:[['N',0,0,0],['O',1.1,0,0],['O',-0.5,1,0],['O',-0.5,-1,0]],b:1,k:.4,R:1.5,d:'Kwas tlenowy, utleniacz.'},
  O2:{m:1,f:'O₂',n:'tlen cząsteczkowy',a:[['O',-.6,0,2],['O',.6,0,2]],bn:[[0,1,2]],d:'Wiązanie podwójne O=O. Tlen jest paramagnetyczny — wyjaśnia to teoria orbitali molekularnych.'}
};
Object.entries(window.CHE?.DATA?.MOLECULES||{}).forEach(([id,m])=>{
  const atoms=m.atoms||[],comp={};
  atoms.forEach(a=>{comp[a.element]=(comp[a.element]||0)+1;});
  if(!atoms.length)return;
  const base=CD[id]||{};
  CD[id]=Object.assign(base,{m:1,f:base.f||m.name,n:base.n||m.label||m.name,
    a:atoms.map(a=>[a.element,a.x,a.y,a.z]),bn:(m.bonds||[]).map(b=>[b.a,b.b,b.order||1]),
    comp,geo:base.geo||m.geometry,d:base.d||m.note||''});
});
const X = {
  NaCl:{comp:{Na:1,Cl:1},geo:'sieć fcc, LK 6:6',mp:1074,bp:1686,rho:2.165},
  Fe2O3:{comp:{Fe:2,O:3},geo:'oktaedr FeO₆',mp:1838,rho:5.24},
  FeO:{comp:{Fe:1,O:1},geo:'sieć typu NaCl, LK 6:6',mp:1650,rho:5.745},
  Cu2O:{comp:{Cu:2,O:1},geo:'Cu liniowo (LK 2), O tetraedrycznie (LK 4)',mp:1508,rho:6.0},
  H2O:{comp:{H:2,O:1},geo:'kątowa, 104,5°',hyb:'sp³',mu:1.85,mp:273.15,bp:373.15,rho:0.997},
  CO2:{comp:{C:1,O:2},geo:'liniowa, 180°',hyb:'sp',mu:0,mp:216.6,bp:194.7,rho:0.00184},
  HCl:{comp:{H:1,Cl:1},geo:'liniowa (dwuatomowa)',mu:1.08,mp:158.9,bp:188.1},
  CH4:{comp:{C:1,H:4},geo:'tetraedr, 109,5°',hyb:'sp³',mu:0,mp:90.7,bp:111.7},
  NH3:{comp:{N:1,H:3},geo:'piramida trygonalna, ~107°',hyb:'sp³',mu:1.47,mp:195.4,bp:239.8},
  N2:{comp:{N:2},geo:'liniowa (N≡N)',hyb:'sp',mu:0,mp:63.15,bp:77.36},
  H2:{comp:{H:2},geo:'liniowa (H–H)',mu:0,mp:13.99,bp:20.28},
  Cl2:{comp:{Cl:2},geo:'liniowa (Cl–Cl)',mu:0,mp:171.6,bp:239.1},
  O2:{comp:{O:2},geo:'liniowa (O=O)',hyb:'sp²',mu:0,mp:54.36,bp:90.2},
  CH3COOH:{comp:{C:2,H:4,O:2},geo:'grupa –COOH płaska (120°)',hyb:'sp³ (CH₃), sp² (C karboksylowy)',mu:1.74,mp:289.8,bp:391.2,rho:1.049},
  C2H5OH:{comp:{C:2,H:6,O:1},geo:'zygzak C–C–O, kątowa przy O',hyb:'sp³',mu:1.69,mp:159.1,bp:351.4,rho:0.789},
  CH3CHO:{comp:{C:2,H:4,O:1},geo:'grupa –CHO płaska (120°)',hyb:'sp³ (CH₃), sp² (C=O)',mu:2.69,mp:150.2,bp:293.3,rho:0.784},
  C3H6O:{comp:{C:3,H:6,O:1},geo:'C–CO–C płaskie, ~116°',hyb:'sp³ (CH₃), sp² (C=O)',mu:2.88,mp:178.5,bp:329.2,rho:0.784},
  CH3NH2:{comp:{C:1,H:5,N:1},geo:'piramidalna przy N',hyb:'sp³',mu:1.31,mp:180.1,bp:266.8,rho:0.656},
  C6H6:{comp:{C:6,H:6},geo:'płaski sześciokąt, 120°',hyb:'sp²',mu:0,mp:278.7,bp:353.2,rho:0.8765}
};
for(const k in X) Object.assign(CD[k], X[k]);
Object.keys(CD).forEach(k=>{CD[k].id=k});
const EC = {N:'#6f8fd0',H:'#c3cdd7',C:'#a8a49a',Na:'#c98ba8',Cl:'#7fd19a',Fe:'#e0674a',O:'#e0524f',Cu:'#e8a33d'};
const ER = {N:.8,H:.5,C:.8,Na:1.05,Cl:1.2,Fe:.9,O:.8,Cu:.95};

function molRows(c){const m=MOL.find(q=>q.f===c.f);if(!m)return '';return `<div class="kv" style="margin-top:6px"><span>wiązanie</span><b>${m.bl}</b><span>kąt</span><b>${m.an}</b></div>`}
function cprops(c){
  const cp = c.comp || {}, els = Object.keys(cp);
  const M = els.reduce((t, k) => t + cp[k] * ((DB[k] || {}).m || 0), 0);
  const en = els.map(k => (DB[k] || {}).en).filter(v => v != null);
  const d = els.length === 1 ? 0 : en.length > 1 ? Math.max(...en) - Math.min(...en) : null;
  const bt = d == null ? '' : !c.m ? (d > 1.7 ? 'jonowe' : 'jonowe z udziałem kowalencyjności') : d > 1.7 ? 'jonowe' : d > .4 ? 'kowalencyjne spolaryzowane' : 'kowalencyjne niespolaryzowane';
  const bar = M ? `<div style="display:flex;height:10px;margin:12px 0 5px;border-radius:5px;overflow:hidden">${els.map(k => `<i title="${k}" style="display:block;width:${cp[k]*DB[k].m/M*100}%;background:${EC[k]}"></i>`).join('')}</div><div class="sub">udział masowy: ${els.map(k => k + ' ' + (cp[k]*DB[k].m/M*100).toFixed(1) + '%').join(' · ')}</div>` : '';
  const rows = [
    ['klasa', spCls(c.id)], ['budowa', c.m ? 'cząsteczkowa' : 'kryształ jonowy (sieć)'],
    ['M', M ? (+M.toFixed(2)) + ' u' : null],
    ['Δχ', d != null ? d.toFixed(2) + (bt ? ' (' + bt + ')' : '') : null],
    ['geometria', c.geo], ['hybrydyzacja', c.hyb], ['μ', c.mu != null ? c.mu + ' D' : null],
    ['T topn.', c.mp ? `${c.mp} K · ${K2C(c.mp)}°C` : null],
    ['T wrz.', c.bp ? `${c.bp} K · ${K2C(c.bp)}°C` : null],
    ['ρ', c.rho ? c.rho + ' g/cm³' : null]
  ].filter(r => r[1]);
  return bar + `<div class="kv">${rows.map(r => `<span>${r[0]}</span><b>${r[1]}</b>`).join('')}</div>`;
}

let cur = null, rx = .5, ry = .6, drag = 0, spc = 0, lab = 1, spn = 1;

function cmpUI(){
  if(curKind!=='sp'||!cur) return;
  const L = related();
  $('clist').innerHTML = `<div class="sub" style="padding:4px 8px">wspólne pierwiastki z ${CD[cur].f}:</div>` + L.map(k => `<button data-k="${k}" class="${k === cur ? 'on' : ''}">${CD[k].f} <span>${CD[k].n.split(',')[0]}</span></button>`).join('');
  const c = cur && CD[cur];
  $('cinfo').innerHTML = c ? `<h2>${c.f}</h2><div class="sub" style="margin-bottom:4px">${c.n}</div>${fgSvg(c)}${cprops(c)}${molRows(c)}<p style="margin:12px 0;line-height:1.6">${c.d}</p><div class="sub" style="margin-bottom:6px">Skład:</div><div style="display:flex;flex-wrap:wrap;gap:4px">${spEls(cur).map(q => `<button data-g="${q}" style="padding:5px 11px;background:var(--panel-2);border:1px solid var(--line);border-radius:6px;color:var(--tx)">${q}${c.comp[q]>1?'<sub>'+c.comp[q]+'</sub>':''}</button>`).join('')}</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:14px"><button id="m1" style="padding:5px 11px;background:${spc?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${spc?'#fff':'var(--tx)'}">rozmiar atomów</button><button id="m2" style="padding:5px 11px;background:${lab?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${lab?'#fff':'var(--tx)'}">etykiety</button><button id="m3" style="padding:5px 11px;background:${spn?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${spn?'#fff':'var(--tx)'}">autoobrót</button></div>` : '';
  document.querySelectorAll('#clist [data-k]').forEach(b => b.onclick = () => pick(b.dataset.k, 'sp', 'forms'));
  document.querySelectorAll('#cinfo [data-g]').forEach(b => b.onclick = () => go(b.dataset.g));
  [['m1', () => spc = !spc], ['m2', () => lab = !lab], ['m3', () => spn = !spn]].forEach(([i, f]) => {
    const b = $(i); if(b) b.onclick = () => { f(); cmpUI(); };
  });
}

