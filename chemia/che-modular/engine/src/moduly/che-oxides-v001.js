

(function(){
const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
 
const T=[
 ['Li2O','tlenek litu','Li',1,'zasadowy','jonowy',['li2oH2o','reaguje → LiOH'],[null,'tak (sól + woda)'],[null,'nie'],'#f8fafc','biały','s','AMB',[]],
 ['Na2O','tlenek sodu','Na',1,'zasadowy','jonowy',['na2oH2o','reaguje → NaOH'],['na2oHno3','tak'],[null,'nie'],'#f8fafc','biały','s','E8',[]],
 ['K2O','tlenek potasu','K',1,'zasadowy','jonowy',['k2oH2o','reaguje → KOH'],[null,'tak'],[null,'nie'],'#f8fafc','biały / jasnożółty','s','E8',[]],
 ['MgO','tlenek magnezu','Mg',2,'zasadowy','jonowy',['mgoH2o','powoli i w niewielkim stopniu — Mg(OH)₂ trudno rozpuszczalny (fenoloftaleina słabo różowa)'],['mgoHcl','tak'],[null,'nie'],'#f1f5f9','biały','s','E8',['zasadowy ≠ „musi reagować z wodą”']],
 ['CaO','tlenek wapnia (wapno palone)','Ca',2,'zasadowy','jonowy',['caoH2o','reaguje gwałtownie, egzotermicznie → Ca(OH)₂'],['caoHcl','tak'],[null,'nie'],'#e2e8f0','biały','s','E8',['gaszenie wapna — silnie egzotermiczne']],
 ['BeO','tlenek berylu','Be',2,'amfoteryczny','jonowo-kowalencyjny',[null,'nie'],[null,'tak'],[null,'tak (mocne zasady)'],'#f8fafc','biały','s','AMB',['Li₂O — zasadowy, BeO — amfoteryczny: nie łączyć w jeden opis']],
 ['Al2O3','tlenek glinu','Al',3,'amfoteryczny','jonowy (sieć)',[null,'praktycznie nie'],['al2o3Hcl','tak'],['al2o3NaohAq','tak — z mocnymi zasadami'],'#f8fafc','biały','s','E8',['pasywacja glinu — cienka szczelna warstwa','NaAlO₂ — zapis zależny od warunków; w roztworze [Al(OH)₄]⁻']],
 ['ZnO','tlenek cynku','Zn',2,'amfoteryczny','jonowo-kowalencyjny',[null,'praktycznie nie'],['znoHcl','tak'],['znoNaohAq','tak — z mocnymi zasadami'],'#f8fafc','biały (na gorąco żółty)','s','E8',['Na₂ZnO₂ — zapis uproszczony']],
 ['FeO','tlenek żelaza(II)','Fe',2,'zasadowy','jonowy',[null,'praktycznie nie'],[null,'tak'],[null,'nie'],'#1f2937','czarny','s','AMB',[]],
 ['Fe2O3','tlenek żelaza(III)','Fe',3,'zasadowy','jonowy',[null,'praktycznie nie'],['fe2o3Hcl','tak'],[null,'nie (szkolnie)'],'#9a3412','czerwonobrunatny (hematyt)','s','E8',['rdza ≠ czysty Fe₂O₃ (mieszanina uwodnionych tlenków i wodorotlenków)']],
 ['Fe3O4','tlenek żelaza(II,III)','Fe',null,'mieszany','jonowy',[null,'nie'],[null,'tak'],[null,'nie'],'#111827','czarny (magnetyt, magnetyczny)','s','AMB',['tlenek mieszany: FeO·Fe₂O₃ — stopień „+8/3” to średnia, nie realny stopień']],
 ['Cu2O','tlenek miedzi(I)','Cu',1,'zasadowy','jonowy',[null,'nie'],[null,'tak'],[null,'nie'],'#b91c1c','czerwony (kupryt)','s','AMB',[]],
 ['CuO','tlenek miedzi(II)','Cu',2,'zasadowy','jonowy',[null,'praktycznie nie'],['cuoH2so4','tak — roztwór niebieski (jony Cu²⁺)'],[null,'nie'],'#1e293b','czarny','s','E8',['niebieska barwa roztworu = jony Cu²⁺, nie „cząsteczki CuSO₄”']],
 ['Ag2O','tlenek srebra(I)','Ag',1,'zasadowy','jonowy',[null,'nie'],[null,'tak'],[null,'nie'],'#3f3f46','brunatnoczarny','s','ZA',['rozkłada się podczas ogrzewania']],
 ['HgO','tlenek rtęci(II)','Hg',2,'zasadowy','jonowo-kowalencyjny',[null,'nie'],[null,'tak'],[null,'nie'],'#dc2626','czerwony lub żółty (zależnie od otrzymywania)','s','AMB',['toksyczny; rozkład termiczny — historycznie tlen (Priestley)']],
 ['PbO','tlenek ołowiu(II)','Pb',2,'amfoteryczny','jonowo-kowalencyjny',[null,'nie'],[null,'tak'],[null,'tak'],'#eab308','żółty (masykot)','s','ZA',['toksyczny']],
 ['MnO','tlenek manganu(II)','Mn',2,'zasadowy','jonowy',[null,'nie'],[null,'tak'],[null,'nie'],'#4d7c0f','szarozielony','s','ZA',['ten sam metal: MnO zasadowy → MnO₂ amfoteryczny → Mn₂O₇ kwasowy']],
 ['MnO2','tlenek manganu(IV)','Mn',4,'amfoteryczny','jonowy',[null,'nie'],[null,'tak (redoks)'],[null,'słabo'],'#3f3f46','brunatnoczarny','s','AMB',['katalizator rozkładu H₂O₂']],
 ['CrO','tlenek chromu(II)','Cr',2,'zasadowy','jonowy',[null,'nie'],[null,'tak'],[null,'nie'],'#111827','czarny','s','ZA',['ten sam metal: CrO zasadowy → Cr₂O₃ amfoteryczny → CrO₃ kwasowy']],
 ['Cr2O3','tlenek chromu(III)','Cr',3,'amfoteryczny','jonowy',[null,'nie'],[null,'tak'],[null,'tak'],'#166534','zielony (pigment)','s','ZA',[]],
 ['CrO3','tlenek chromu(VI)','Cr',6,'kwasowy','kowalencyjny',['cro3H2o','reaguje → H₂CrO₄'],[null,'nie'],[null,'tak'],'#b91c1c','ciemnoczerwony','s','AMB',['metal na wysokim stopniu utlenienia → charakter kwasowy']],
 ['Mn2O7','tlenek manganu(VII)','Mn',7,'kwasowy','kowalencyjny',['mn2o7H2o','reaguje → HMnO₄'],[null,'nie'],[null,'tak'],'#4c1d95','ciemnozielona oleista ciecz','l','AMB',['metal na +VII → tlenek kwasowy']],
 ['TiO2','tlenek tytanu(IV) (biel tytanowa)','Ti',4,'amfoteryczny','jonowy',[null,'nie'],[null,'bardzo słabo'],[null,'bardzo słabo'],'#f8fafc','biały','s','ZA',['na E8: pigment i filtr UV — NIE wzorcowy tlenek amfoteryczny (tym są Al₂O₃, ZnO)']],
 ['B2O3','tlenek boru','B',3,'kwasowy','kowalencyjny',[null,'reaguje powoli → H₃BO₃'],[null,'nie'],[null,'tak'],'#f8fafc','bezbarwny / biały','s','AMB',[]],
 ['CO2','tlenek węgla(IV)','C',4,'kwasowy','kowalencyjny',['co2H2o','reaguje słabo → H₂CO₃ (nietrwały)'],[null,'nie'],['naohCo2','tak — produkt zależy od stosunku molowego'],null,'bezbarwny gaz','g','E8',['gaz cieplarniany, nie typowy składnik smogu','zmętnienie wody wapiennej — test']],
 ['CO','tlenek węgla(II) (czad)','C',2,'obojętny','kowalencyjny',[null,'nie (model szkolny)'],[null,'nie'],[null,'nie'],null,'bezbarwny, bezwonny gaz','g','E8',['obojętny ≠ bierny: reduktor, trucizna (wiąże hemoglobinę ok. 200–250× silniej niż O₂ — przybliżenie)']],
 ['SiO2','tlenek krzemu(IV) (krzemionka)','Si',4,'kwasowy','kowalencyjna sieć',[null,'praktycznie nie'],['sio2Hf','tylko z HF'],['sio2Naoh','tak — z mocnymi zasadami, zwykle po ogrzaniu (Δ)'],'#f8fafc','bezbarwny (kwarc), biały (piasek)','s','E8',['nie zapisuj SiO₂ + H₂O → H₂SiO₃ jako zwykłej reakcji w wodzie']],
 ['N2O','tlenek azotu(I)','N',1,'obojętny','kowalencyjny',[null,'nie (szkolnie)'],[null,'nie'],[null,'nie'],null,'bezbarwny gaz','g','AMB',['silny gaz cieplarniany (wartości ok. 270–300× CO₂ — zależnie od horyzontu)']],
 ['NO','tlenek azotu(II)','N',2,'obojętny','kowalencyjny',[null,'nie (szkolnie)'],[null,'nie'],[null,'nie'],null,'bezbarwny gaz','g','E8',['z O₂ → NO₂; biologiczny czynnik sygnałowy']],
 ['N2O3','tlenek azotu(III)','N',3,'kwasowy','kowalencyjny',['n2o3H2o','reaguje → HNO₂'],[null,'nie'],[null,'tak'],'#1d4ed8','niebieska ciecz (w niskiej T)','l','ZA',[]],
 ['NO2','tlenek azotu(IV)','N',4,'kwasowy','kowalencyjny',['no2H2o','reaguje (dysproporcjonowanie) → HNO₃ + NO'],[null,'nie'],[null,'tak'],'#b45309','brunatny gaz','g','AMB',['składnik smogu i kwaśnych deszczy']],
 ['N2O5','tlenek azotu(V)','N',5,'kwasowy','kowalencyjny',['n2o5H2o','reaguje → HNO₃'],[null,'nie'],[null,'tak'],'#f8fafc','bezbarwne kryształy','s','E8',[]],
 ['P2O5','tlenek fosforu(V) (zapis empiryczny)','P',5,'kwasowy','kowalencyjny',['p2o5H2o','reaguje gwałtownie → H₃PO₄'],[null,'nie'],[null,'tak'],'#f8fafc','biały','s','E8',['P₂O₅ — wzór empiryczny; P₄O₁₀ — wzór cząsteczkowy']],
 ['P4O10','tlenek fosforu(V) (wzór cząsteczkowy)','P',5,'kwasowy','kowalencyjny',['p4o10H2o','reaguje → H₃PO₄'],[null,'nie'],[null,'tak'],'#f8fafc','biały','s','AMB',['to ta sama substancja co P₂O₅ — inny rodzaj wzoru']],
 ['SO2','tlenek siarki(IV)','S',4,'kwasowy','kowalencyjny',['so2H2o','reaguje → H₂SO₃'],[null,'nie'],['so2Naoh','tak'],null,'bezbarwny gaz o duszącym zapachu','g','E8',['konserwant E220; kwaśne deszcze']],
 ['SO3','tlenek siarki(VI)','S',6,'kwasowy','kowalencyjny',['so3H2o','reaguje gwałtownie → H₂SO₄'],[null,'nie'],['so3Naoh','tak'],'#f8fafc','biały (ciało stałe) / bezbarwna ciecz','s','E8',['w smogu SO₃ jest znacznie mniej niż SO₂']],
 ['Cl2O7','tlenek chloru(VII)','Cl',7,'kwasowy','kowalencyjny',['cl2o7H2o','reaguje → HClO₄'],[null,'nie'],[null,'tak'],null,'bezbarwna oleista ciecz','l','ZA',[]],
 ['H2O','woda (tlenek wodoru)','H',1,'obojętny','kowalencyjny',[null,'—'],[null,'—'],[null,'—'],null,'bezbarwna ciecz','l','E8',['formalnie tlenek wodoru; w dziale „Tlenki” omawiana osobno (rozróżnienie organizacyjne)']]
];
const NOT_OXIDES=[
 ['Na2O2','nadtlenek sodu','grupa nadtlenkowa O₂²⁻, tlen −I'],
 ['H2O2','nadtlenek wodoru','grupa nadtlenkowa, tlen −I'],
 ['KO2','ponadtlenek potasu','jon ponadtlenkowy O₂⁻, tlen −½'],
 ['OF2','fluorek tlenu','tlen na +II — fluor bardziej elektroujemny'],
 ['O3','ozon','odmiana alotropowa tlenu, nie związek']];
const OX={},keys=['f','name','el','ox','char','bond','water','acid','base','color','colorName','state','level','notes'];
T.forEach(r=>{const o={};keys.forEach((k,i)=>o[k]=r[i]);o.water={rx:r[6][0],text:r[6][1]};o.acid={rx:r[7][0],text:r[7][1]};o.base={rx:r[8][0],text:r[8][1]};OX[o.f]=o});
D.OXIDES=OX;D.NOT_OXIDES=NOT_OXIDES;
 
D.OXIDE_STATES={Li:[1],Na:[1],K:[1],Be:[2],Mg:[2],Ca:[2],Ba:[2],Al:[3],Zn:[2],Fe:[2,3],Cu:[1,2],Ag:[1],Hg:[2],Pb:[2,4],Mn:[2,4,7],Cr:[2,3,6],Ti:[4],B:[3],C:[2,4],Si:[4],N:[1,2,3,4,5],P:[3,5],S:[4,6],Cl:[1,7],H:[1]};
D.CHAR_COLORS={zasadowy:'#2e7d4f',kwasowy:'#2b5e9c',amfoteryczny:'#6b3fa0',obojętny:'#64748b',mieszany:'#b06f1c'};
const SUB='₀₁₂₃₄₅₆₇₈₉',CPX={'NaAl(OH)4':'Na[Al(OH)4]','Na2Zn(OH)4':'Na2[Zn(OH)4]','Na2Be(OH)4':'Na2[Be(OH)4]','Na2Pb(OH)4':'Na2[Pb(OH)4]','KAl(OH)4':'K[Al(OH)4]','K2Zn(OH)4':'K2[Zn(OH)4]'},pf=s=>String(CPX[s]||s).replace(/\d/g,d=>SUB[d]),pfe=e=>String(e).replace(/(^|[\s+])([A-Z][A-Za-z0-9()]*)/g,(m,a,f)=>a+pf(f)),ROM=['','I','II','III','IV','V','VI','VII','VIII'];
const gcd=(a,b)=>b?gcd(b,a%b):a;
function eq(k){try{return k&&C.REACTION&&C.REACTION.get(k)?pfe(C.REACTION.equation(k)):null}catch(_){return null}}
const API={version:'1.1',get:f=>OX[f]||null,list:()=>Object.keys(OX),byChar:c=>Object.keys(OX).filter(f=>OX[f].char===c),pretty:pf,
  
 threeQuestions(f){const o=OX[f];if(!o)return null;const ab=o.char==='zasadowy'?['z kwasem',o.acid]:o.char==='kwasowy'?['z zasadą',o.base]:o.char==='amfoteryczny'?['z kwasem i z zasadą',o.acid]:['z kwasem / zasadą',{rx:null,text:'nie (model szkolny)'}];
  return[{q:'Jaki charakter?',a:o.char},{q:'Czy reaguje z wodą?',a:o.water.text,eq:eq(o.water.rx)},{q:'Czy reaguje '+ab[0]+'?',a:ab[1].text,eq:eq(ab[1].rx)}].concat(o.char==='amfoteryczny'?[{q:'…a z mocną zasadą?',a:o.base.text,eq:eq(o.base.rx)}]:[])},
  
 build(el,ox){if(!(ox>0))return null;const raw={el:2,O:ox},g=gcd(2,ox),n={el:2/g,O:ox/g};const fs=(a,b)=>el+(a>1?a:'')+'O'+(b>1?b:'');
  const ionic=['Li','Na','K','Mg','Ca','Ba','Al','Zn','Fe','Cu','Ag'].indexOf(el)>=0&&ox<=3;
  return{el,ox,raw:fs(raw.el,raw.O),formula:fs(n.el,n.O),pretty:pf(fs(n.el,n.O)),nEl:n.el,nO:n.O,reduced:g>1,ionic,
   steps:[(ionic?'jon '+el+(ox>1?'⁰¹²³⁴⁵⁶⁷'[ox]:'')+'⁺ i jon O²⁻':el+' na stopniu +'+ROM[ox]+', tlen −II'),'„na krzyż”: '+pf(fs(raw.el,raw.O)),g>1?'skróć indeksy przez '+g+' → '+pf(fs(n.el,n.O)):'indeksy już najprostsze',
    'kontrola: '+n.el+'·(+'+ox+') + '+n.O+'·(−2) = '+(n.el*ox-2*n.O)],name:'tlenek '+({Li:'litu',Na:'sodu',K:'potasu',Be:'berylu',Mg:'magnezu',Ca:'wapnia',Ba:'baru',Al:'glinu',Zn:'cynku',Fe:'żelaza',Cu:'miedzi',Ag:'srebra',Hg:'rtęci',Pb:'ołowiu',Ti:'tytanu',Mn:'manganu',Cr:'chromu',B:'boru',C:'węgla',Si:'krzemu',N:'azotu',P:'fosforu',S:'siarki',Cl:'chloru',H:'wodoru'}[el]||el)+((D.OXIDE_STATES[el]||[]).length>1?'('+ROM[ox]+')':'')}},
  
 oxState(formula){const no=NOT_OXIDES.find(x=>x[0]===formula);if(no)return{error:pf(formula)+' to nie tlenek: '+no[1]+' ('+no[2]+')'};let at;try{at=C.CHEM.parseFormula(formula)}catch(_){at=null}
  if(!at||!at.O)return{error:'brak tlenu we wzorze'};const others=Object.keys(at).filter(k=>k!=='O');if(!others.length)return{error:'pierwiastek tlen (O₂/O₃), nie związek'};if(others.length>1)return{error:'więcej niż jeden pierwiastek oprócz tlenu — to nie prosty tlenek'};
  const e=others[0],x=2*at.O/at[e];return{el:e,ox:x,integer:Number.isInteger(x),check:at[e]+'·('+(x>0?'+':'')+(Number.isInteger(x)?x:x.toFixed(2))+') + '+at.O+'·(−2) = 0',note:Number.isInteger(x)?'':'stopień ułamkowy = średnia (tlenek mieszany, np. Fe₃O₄ = FeO·Fe₂O₃)'}},
  
 trend(period){const P={2:['Li2O','BeO','B2O3','CO2','N2O5'],3:['Na2O','MgO','Al2O3','SiO2','P4O10','SO3','Cl2O7']}[period]||[];const E=D.ELEMENTS_118||[];
  return P.map(f=>{const o=OX[f],e=E.find(x=>x.s===o.el)||{};return{f,el:o.el,ox:o.ox,char:o.char,en:e.en,water:o.water.text}})},
 audit(){const t=[],R=C.REACTION;const ok=(n,v,d)=>t.push([n,!!v,d||'']);
  const miss=[];Object.values(OX).forEach(o=>['water','acid','base'].forEach(k=>{const rx=o[k].rx;if(rx&&!(R&&R.get(rx)))miss.push(o.f+'.'+k+'='+rx)}));ok('reakcje tlenków istnieją w CHE.REACTION',!miss.length,miss.join(', '));
  const badOx=Object.values(OX).filter(o=>o.ox&&o.f!=='Fe3O4').filter(o=>{const s=API.oxState(o.f);return !s||s.error||s.ox!==o.ox});ok('stopień utlenienia = wzór (tlen −II)',!badOx.length,badOx.map(o=>o.f).join(', '));
  const S=D.SUBSTANCES||{},noS=Object.keys(OX).filter(f=>!S[f]);ok('tlenki mają rekord SUBSTANCES',!noS.length,noS.join(', '));
  ok('Fe₃O₄ → stopień ułamkowy',API.oxState('Fe3O4').integer===false);ok('Na₂O₂ rozpoznany jako nadtlenek',!!API.oxState('Na2O2').error);
  ok('konstruktor: Ca(II) → CaO (skrócenie Ca₂O₂)',(API.build('Ca',2)||{}).formula==='CaO');ok('konstruktor: Al(III) → Al₂O₃',(API.build('Al',3)||{}).formula==='Al2O3');ok('konstruktor: S(VI) → SO₃',(API.build('S',6)||{}).formula==='SO3');
  const tr=API.trend(3).map(x=>x.en);ok('okres 3: elektroujemność rośnie',tr.every((v,i)=>!i||v>tr[i-1]));
  const p1=API.predict('CaO','H2O'),p2=API.predict('CuO','HCl'),p3=API.predict('CO2','NaOH'),p4=API.predict('SO3','HCl'),p5=API.predict('Fe2O3','H2SO4');ok('predict: CaO+H₂O → Ca(OH)₂',p1&&p1.occurs&&/Ca\(OH\)/.test(p1.equation));ok('predict: CuO+HCl → CuCl₂ + H₂O (bilans 1:2)',p2&&/2 HCl/.test(p2.equation)&&/CuCl₂/.test(p2.equation));ok('predict: CO₂+NaOH → Na₂CO₃',p3&&/Na₂CO₃/.test(p3.equation));ok('predict: SO₃+HCl — brak',p4&&!p4.occurs);ok('predict: Fe₂O₃+H₂SO₄ → Fe₂(SO₄)₃ + 3 H₂O',p5&&/Fe₂\(SO₄\)₃ \+ 3 H₂O/.test(p5.equation||''));
  return{ok:t.every(x=>x[1]),tests:t}}};

const REAG={H2O:{kind:'woda',name:'woda'},HCl:{kind:'kwas',name:'kwas solny',an:'Cl'},H2SO4:{kind:'kwas',name:'kwas siarkowy(VI)',an:'SO4'},HNO3:{kind:'kwas',name:'kwas azotowy(V)',an:'NO3'},
 NaOH:{kind:'zasada',name:'zasada sodowa (roztwór)',cat:'Na'},KOH:{kind:'zasada',name:'zasada potasowa (roztwór)',cat:'K'}};
const SALT_OF_ACIDIC={CO2:'CO3',SO2:'SO3',SO3:'SO4',N2O5:'NO3',N2O3:'NO2',P2O5:'PO4',P4O10:'PO4',SiO2:'SiO3',Cl2O7:'ClO4',Mn2O7:'MnO4',CrO3:'CrO4'};
const ANQ={CO3:2,SO3:2,SO4:2,NO3:1,NO2:1,PO4:3,SiO3:2,ClO4:1,MnO4:1,CrO4:2,Cl:1};
const AMPH_AQ={Al2O3:'NaAl(OH)4',ZnO:'Na2Zn(OH)4',BeO:'Na2Be(OH)4',PbO:'Na2Pb(OH)4'};const ACID_SPECIAL={MnO2:'reakcja z kwasem solnym jest redoksem: MnO₂ + 4 HCl → MnCl₂ + Cl₂↑ + 2 H₂O (otrzymywanie chloru) — nie „sól + woda”.',TiO2:'praktycznie nie reaguje z rozcieńczonymi kwasami (TiO₂ — pigment).',PbO2:'reakcje PbO₂ z kwasami są redoksami (silny utleniacz) — poziom LO.',SnO2:'praktycznie nie reaguje z rozcieńczonymi kwasami.'};
function saltFormula(cat,cq,an){const aq=ANQ[an]||1,g=gcd(cq,aq),nc=aq/g,na=cq/g,poly=an.length>2||/\d/.test(an);return cat+(nc>1?nc:'')+(na>1&&poly?'('+an+')'+na:an+(na>1?na:''))}
function cationOf(o){if(o.el==='Cu'&&o.ox===1)return null;return o.el}
 
function balance(re,pr){const P=f=>{try{return C.CHEM.parseFormula(f)}catch(_){return null}},sp=re.concat(pr).map(P);if(sp.some(x=>!x))return null;const el=[...new Set(sp.flatMap(x=>Object.keys(x)))],n=sp.length,co=new Array(n).fill(1);
 function ok(){return el.every(e=>{let a=0;for(let i=0;i<n;i++)a+=(i<re.length?1:-1)*co[i]*(sp[i][e]||0);return a===0})}
 function rec(i){if(i===n)return ok();for(let c=1;c<=12;c++){co[i]=c;if(rec(i+1))return true}return false}
 return rec(0)?co.slice():null}
function eqStr(re,pr,co){const t=(a,o)=>a.map((f,i)=>(co[i+o]>1?co[i+o]+' ':'')+pf(f)).join(' + ');return t(re,0)+' → '+t(pr,re.length)}
function match(k,re,pr){const d=k&&(D.REACTIONS||{})[k];if(!d)return null;const A=d.reactants.map(x=>x.formula).sort().join(),B=d.products.map(x=>x.formula).sort().join();return A===re.slice().sort().join()&&B===pr.slice().sort().join()?k:null}
API.reagents=REAG;API.prettyEq=pfe;API.balance=balance;
API.predict=function(f,r){const o=OX[f],R=REAG[r];if(!o||!R)return null;const st=[];const ch=o.char;
 st.push('1. Rozpoznaj: '+pf(f)+' — '+o.name+' (tlen −II, jeden inny pierwiastek → tlenek).');
 st.push('2. Stopień utlenienia: '+o.el+(o.ox?' +'+ROM[o.ox]||o.ox:' średnio +8/3 (tlenek mieszany)')+'.');
 st.push('3. Charakter: '+ch+'.');st.push('4. Drugi reagent: '+R.name+' → '+R.kind+'.');
 const out={f,r,char:ch,kind:R.kind,occurs:false,steps:st,rx:null,equation:null,schema:'',note:''};
 const fin=(re,pr,schema,rx)=>{out.schema=schema;st.push('5. Schemat: '+schema+'.');let e=rx?eq(rx):null;if(!e){const co=balance(re,pr);e=co?eqStr(re,pr,co):null}out.equation=e;out.rx=rx||null;out.occurs=!!e;st.push('6. Produkty: '+pr.map(pf).join(' + ')+'.');st.push('7. Równanie i bilans: '+(e||'—')+'.');return out};
 const no=(why)=>{out.schema='brak typowej reakcji';out.note=why;st.push('5. Schemat: '+why);st.push('6.–7. Reakcja nie zachodzi (w modelu szkolnym).');return out};
 if(R.kind==='woda'){if(o.water.rx){const d=(D.REACTIONS||{})[o.water.rx];return fin(d.reactants.map(x=>x.formula),d.products.map(x=>x.formula),ch==='zasadowy'?'tlenek zasadowy + woda → wodorotlenek':'tlenek kwasowy + woda → kwas',o.water.rx)}
  return no(o.water.text&&/słabo|powoli/.test(o.water.text)?'reaguje bardzo słabo: '+o.water.text:'z wodą nie reaguje ('+(o.water.text||'nie')+'). Charakter ≠ reakcja z wodą.')}
 if(R.kind==='kwas'){if(ch==='kwasowy')return no('tlenek kwasowy nie reaguje z kwasem (oba „kwasowe”).');if(ch==='obojętny')return no('tlenek obojętny nie reaguje z kwasami ani zasadami.');
  if(ACID_SPECIAL[f])return no(ACID_SPECIAL[f]);const cat=cationOf(o);if(!cat||!o.ox||!Number.isInteger(o.ox))return no('reaguje (sól + woda), ale zapis wykracza poza model szkolny.');const salt=saltFormula(cat,o.ox,R.an);
  const known=match(o.acid.rx,[f,r],[salt,'H2O']);
  return fin([f,r],[salt,'H2O'],(ch==='amfoteryczny'?'tlenek amfoteryczny':'tlenek zasadowy')+' + kwas → sól + woda',known)}
 if(R.kind==='zasada'){if(ch==='zasadowy'||ch==='mieszany')return no('tlenek zasadowy nie reaguje z zasadą.');if(ch==='obojętny')return no('tlenek obojętny nie reaguje z kwasami ani zasadami.');
  if(ch==='amfoteryczny'){const pr=AMPH_AQ[f];if(!pr)return no('reaguje z mocną zasadą, ale zapis produktu (hydroksokompleks) — poziom LO.');const p2=R.cat==='K'?pr.replace(/^Na/,'K'):pr;const known=match(o.base.rx,R.cat==='K'?[f,'KOH','H2O']:[f,'NaOH','H2O'],[p2]);
   return fin(R.cat==='K'?[f,'KOH','H2O']:[f,'NaOH','H2O'],[p2],'tlenek amfoteryczny + mocna zasada (roztwór) → hydroksokompleks',known)}
  const an=SALT_OF_ACIDIC[f];if(!an)return no('reaguje z zasadą, ale produkt wykracza poza model szkolny.');const salt=saltFormula(R.cat,1,an);
  const known=match(o.base.rx,[f,r],[salt,'H2O']);
  return fin([f,r],[salt,'H2O'],'tlenek kwasowy + zasada → sól + woda'+(f==='SiO2'?' (stężona zasada, ogrzewanie)':''),known)}
 return no('?')};
C.OXIDES=API;
})();
