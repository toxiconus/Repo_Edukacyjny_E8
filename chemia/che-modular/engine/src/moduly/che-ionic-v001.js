

(function(){
const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
const CAT=['Na','K','NH4','Mg','Ca','Ba','Al','Zn','Mn','Fe2','Fe3','Ni','Cu','Ag','Pb','Sn'];
const CATN={Na:'Na⁺',K:'K⁺',NH4:'NH₄⁺',Mg:'Mg²⁺',Ca:'Ca²⁺',Ba:'Ba²⁺',Al:'Al³⁺',Zn:'Zn²⁺',Mn:'Mn²⁺',Fe2:'Fe²⁺',Fe3:'Fe³⁺',Ni:'Ni²⁺',Cu:'Cu²⁺',Ag:'Ag⁺',Pb:'Pb²⁺',Sn:'Sn²⁺'};
const AN={OH:{q:-1,n:'OH⁻',name:'wodorotlenek'},Cl:{q:-1,n:'Cl⁻',name:'chlorek'},Br:{q:-1,n:'Br⁻',name:'bromek'},I:{q:-1,n:'I⁻',name:'jodek'},F:{q:-1,n:'F⁻',name:'fluorek'},NO3:{q:-1,n:'NO₃⁻',name:'azotan(V)'},CH3COO:{q:-1,n:'CH₃COO⁻',name:'octan'},
 S:{q:-2,n:'S²⁻',name:'siarczek'},SO3:{q:-2,n:'SO₃²⁻',name:'siarczan(IV)'},SO4:{q:-2,n:'SO₄²⁻',name:'siarczan(VI)'},CO3:{q:-2,n:'CO₃²⁻',name:'węglan'},SiO3:{q:-2,n:'SiO₃²⁻',name:'krzemian'},PO4:{q:-3,n:'PO₄³⁻',name:'fosforan(V)'},HCO3:{q:-1,n:'HCO₃⁻',name:'wodorowęglan'},HSO4:{q:-1,n:'HSO₄⁻',name:'wodorosiarczan(VI)'}};
 
const T={
 OH:    'R R R N T R N N N N N N N — N N',
 Cl:    'R R R R R R R R R R R R R N T R',
 Br:    'R R R R R R R R R R R R R N T R',
 I:     'R R R R R R R R R R — R — N N R',
 NO3:   'R R R R R R R R R R R R R R R —',
 CH3COO:'R R R R R R R R R R R R R T R —',
 SO4:   'R R R R T N R R R R R R R T N R',
 SO3:   'R R R T N N — N N N — N — N N —',
 CO3:   'R R R N N N — N N N — N N N N —',
 PO4:   'R R R N N N N N N N N N N N N N',
 S:     'R R R — — R — N N N — N N N N N',
 SiO3:  'R R — N N N N N N N — N N N N —',
 F:     'R R R N N T T T T T T T T R T R',
 HCO3:  'R R R R R R — — — R — — — — — —'
};
const TAB={};Object.keys(T).forEach(a=>{const v=T[a].trim().split(/\s+/);TAB[a]={};CAT.forEach((c,i)=>TAB[a][c]=v[i])});
D.SOLUBILITY_TABLE={version:'1.0',temperatureC:20,legend:{R:'dobrze rozpuszczalny (> 1 g / 100 g H₂O)',T:'trudno rozpuszczalny (0,1–1 g)',N:'praktycznie nierozpuszczalny (< 0,1 g)','—':'nie istnieje w roztworze wodnym / rozkłada się'},
 cations:CAT.map(c=>({id:c,ion:CATN[c]})),anions:Object.keys(T).map(a=>({id:a,ion:AN[a].n,name:AN[a].name})),table:TAB,
 source:'szkolna tabela rozpuszczalności (20 °C) — dane edukacyjne; F⁻ i SiO₃²⁻ orientacyjnie',status:'EDUCATIONAL'};
 
const ANS=Object.keys(AN).sort((a,b)=>b.length-a.length);
const SUB='₀₁₂₃₄₅₆₇₈₉',pf=s=>String(s).replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>SUB[c]));
const SUP=q=>{const a=Math.abs(q),d=a>1?String(a).replace(/\d/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[c]):'';return d+(q>0?'⁺':'⁻')};
function parseSalt(f){f=String(f).replace(/\s/g,'');const ma=f.match(/^CH3COO(NH4|[A-Z][a-z]?)$/);if(ma)return{cat:ma[1],cid:ma[1],catN:1,an:'CH3COO',anN:1,qc:1};
 let m=f.match(/^\(CH3COO\)(\d)([A-Z][a-z]?)$/);if(m){const q=+m[1];return{cat:m[2],cid:m[2]==='Fe'?(q===3?'Fe3':'Fe2'):m[2],catN:1,an:'CH3COO',anN:q,qc:q}}
 m=f.match(/^(NH4|\(NH4\)\d|[A-Z][a-z]?)(\d*)(.*)$/);if(!m)return null;let cat=m[1],catN=+(m[2]||1),rest=m[3];
 if(cat.startsWith('(NH4)')){catN=+cat.slice(5);cat='NH4'}
 if(!rest)return null;let an=null,anN=1;
 const pm=rest.match(/^\(([A-Za-z0-9]+)\)(\d+)$/);if(pm){an=pm[1];anN=+pm[2]}else if(AN[rest]){an=rest;anN=1}else{const k=rest.match(/^(.*?)(\d+)$/);if(k&&AN[k[1]]){an=k[1];anN=+k[2]}}
 if(!AN[an])return null;const qc=-AN[an].q*anN/catN;if(!(qc>0)||qc%1)return null;
 let cid=cat==='Fe'?(qc===3?'Fe3':'Fe2'):cat;return{cat,cid,catN,an,anN,qc}}
function solubility(f){const p=parseSalt(f);if(!p)return null;const row=TAB[p.an];return row&&row[p.cid]!=null?{...p,s:row[p.cid]}:{...p,s:null}}
 
const STRONG_BASES=['NaOH','KOH','Ba(OH)2','Ca(OH)2','LiOH'];
function species(f){const A=D.ACID_SYSTEMS||{},S=D.SUBSTANCES||{};f=String(f);
 if(f==='H2O')return{kind:'mol',state:'l',ions:null};
 const sub=Object.values(S).find(x=>x&&x.formula===f)||S[f];
 const acid=A[f]||Object.values(A).find(a=>String(a.formula).replace(/[₀-₉]/g,c=>SUB.indexOf(c))===f);
 if(acid){if(acid.strong||acid.strongFirst){if(f==='H2SO4')return{kind:'ions',ions:[[2,'H⁺'],[1,'SO₄²⁻']],note:'mocny kwas (szkolnie: dysocjacja całkowita)'};return{kind:'ions',ions:[[1,'H⁺'],[1,acid.anion||(AN[f.slice(1)]||{}).n||f.slice(1)+'⁻']],note:'mocny kwas'}}
  return{kind:'mol',state:'aq',ions:null,note:'słaby kwas — zapis cząsteczkowy'}}
 if(/^(H2|O2|N2|Cl2|CO2|SO2|NO2|NO|NH3|H2S|CH4)$/.test(f))return{kind:'mol',state:f==='NH3'||f==='CO2'||f==='SO2'?'g':'g',ions:null,note:'gaz'};
 if(/^[A-Z][a-z]?$/.test(f))return{kind:'mol',state:'s',ions:null,note:'pierwiastek'};
 if(/^[A-Z][a-z]?\d*O\d*$/.test(f)&&f!=='H2O')return{kind:'mol',state:'s',ions:null,note:'tlenek'};
 const p=solubility(f);if(p&&p.s){const ion=[[p.catN,(CATN[p.cid]||p.cat+SUP(p.qc))],[p.anN,AN[p.an].n]];
  if(p.s==='R'||(p.s==='T'&&STRONG_BASES.indexOf(f)>=0&&p.an==='OH'))return{kind:'ions',ions:ion,sol:p.s,note:p.s==='T'?'słabo rozpuszczalna zasada — w roztworze zapis jonowy':''};
  if(p.s==='N'||p.s==='T')return{kind:'mol',state:'s',ions:null,sol:p.s,note:p.s==='N'?'osad (nierozpuszczalny)':'osad (trudno rozpuszczalny)'};
  return{kind:'mol',state:'?',ions:null,sol:p.s,note:'nie istnieje w roztworze'}}
 return{kind:'mol',state:sub&&sub.state||'?',ions:null,note:'brak danych o dysocjacji'}}
 
function side(list,arrowSide){const terms=[];list.forEach(x=>{const sp=species(x.formula);if(sp.kind==='ions')sp.ions.forEach(io=>terms.push({c:io[0]*x.coef,t:io[1],ion:true}));else terms.push({c:x.coef,t:pf(x.formula)+(sp.state==='s'&&arrowSide==='p'&&sp.note!=='pierwiastek'?'↓':(sp.state==='g'&&arrowSide==='p')?'↑':''),base:pf(x.formula),ion:false,note:sp.note})});return terms}
const fmtT=ts=>ts.map(t=>(t.c>1?t.c+' ':'')+t.t).join(' + ');
function equations(rid){const R=C.REACTION,r=R&&R.get?R.get(rid):null;if(!r)return null;const L=side(r.reactants,'r'),P=side(r.products,'p');
 const key=t=>t.ion?t.t:t.base;const mapL={},mapP={};L.forEach(t=>mapL[key(t)]=(mapL[key(t)]||0)+t.c);P.forEach(t=>mapP[key(t)]=(mapP[key(t)]||0)+t.c);
 const spect=[];Object.keys(mapL).forEach(k=>{if(mapP[k]&&L.find(t=>key(t)===k).ion){const m=Math.min(mapL[k],mapP[k]);spect.push([m,k])}});
 const cut=(ts,mp)=>{const left={};spect.forEach(s=>left[s[1]]=s[0]);return ts.map(t=>{const k=key(t);if(left[k]){const d=Math.min(left[k],t.c);left[k]-=d;return {...t,c:t.c-d}}return t}).filter(t=>t.c>0)};
 let nl=cut(L),np=cut(P);const g=[...nl,...np].map(t=>t.c).reduce((a,b)=>{while(b){[a,b]=[b,a%b]}return a},0)||1;if(g>1){nl=nl.map(t=>({...t,c:t.c/g}));np=np.map(t=>({...t,c:t.c/g}))}
 const mol=R.equation(rid).replace(/->/g,'→');
  
 const ionic=L.some(t=>t.ion)||P.some(t=>t.ion),NA='nie dotyczy — reakcja bez udziału jonów w roztworze';
 if(!ionic)return{id:rid,ionic:false,molecular:pf(mol),full:NA,net:NA,spectators:[],notes:[...L,...P].filter(t=>t.note).map(t=>t.base+': '+t.note)};
 return{id:rid,ionic:true,molecular:pf(mol),full:fmtT(L)+' → '+fmtT(P),net:nl.length&&np.length?fmtT(nl)+' → '+fmtT(np):'brak (wszystkie jony są obserwatorami — reakcja nie zachodzi)',spectators:spect.map(s=>(s[0]>1?s[0]+' ':'')+s[1]),notes:[...L,...P].filter(t=>t.note).map(t=>t.base+': '+t.note)}}
const GEN={Na:'sodu',K:'potasu',NH4:'amonu',Mg:'magnezu',Ca:'wapnia',Ba:'baru',Al:'glinu',Zn:'cynku',Mn:'manganu(II)',Fe2:'żelaza(II)',Fe3:'żelaza(III)',Ni:'niklu(II)',Cu:'miedzi(II)',Ag:'srebra',Pb:'ołowiu(II)',Sn:'cyny(II)'};
const QC={Na:1,K:1,NH4:1,Mg:2,Ca:2,Ba:2,Al:3,Zn:2,Mn:2,Fe2:2,Fe3:3,Ni:2,Cu:2,Ag:1,Pb:2,Sn:2};
function compound(cid,an){const qc=QC[cid],qa=-AN[an].q;if(!qc)return null;const g=(a,b)=>b?g(b,a%b):a,k=g(qc,qa),nc=qa/k,na=qc/k,sym=/^Fe[23]$/.test(cid)?'Fe':cid,poly=an.length>1&&an!=='OH'?true:an==='OH';
 const cs=(sym==='NH4'&&nc>1?'(NH4)':sym)+(nc>1?nc:''),mono=/^(Cl|Br|I|F|S)$/.test(an),as=an==='CH3COO'?null:((na>1&&!mono)?'('+an+')'+na:an+(na>1?na:''));
 const f=an==='CH3COO'?(na>1?'(CH3COO)'+na+sym:'CH3COO'+sym):cs+as;const name=AN[an].name+' '+GEN[cid];return{formula:f,pretty:pf(f),name,sol:TAB[an]&&TAB[an][cid]}}
 
const STRONGB=['Na','K','Ca','Ba','Li'],ANACID={Cl:'HCl',Br:'HBr',I:'HI',NO3:'HNO3',SO4:'H2SO4',CH3COO:'CH3COOH',CO3:'H2CO3',HCO3:'H2CO3',PO4:'H3PO4',S:'H2S',SO3:'H2SO3',F:'HF',SiO3:'H2SiO3'};
function saltReaction(f){const p=parseSalt(f);if(!p||p.an==='OH')return null;const A=D.ACID_SYSTEMS||{},a=A[ANACID[p.an]],strongA=!!(a&&(a.strong||a.strongFirst))||p.an==='SO4',strongB=STRONGB.indexOf(p.cid)>=0;
 const r=strongA&&strongB?'obojętny':strongA?'kwasowy':strongB?'zasadowy':'zależy od mocy kwasu i zasady';
 const eq=strongA&&strongB?'brak hydrolizy':strongA?(p.cid==='NH4'?'NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺':(CATN[p.cid]||p.cat)+' + 2 H₂O ⇌ '+(p.cid==='Fe2'||p.cid==='Fe3'?'Fe':p.cid)+'OH'+(p.qc-1>1?SUP(p.qc-1):'⁺')+' + H₃O⁺'):strongB?(AN[p.an].n+' + H₂O ⇌ '+({CO3:'HCO₃⁻',CH3COO:'CH₃COOH',PO4:'HPO₄²⁻',S:'HS⁻',SO3:'HSO₃⁻',F:'HF',HCO3:'H₂CO₃',SiO3:'HSiO₃⁻'}[p.an]||'H'+p.an)+' + OH⁻'):'hydrolizują oba jony';
 return{formula:f,odczyn:r,equation:eq,cationFromStrongBase:strongB,anionFromStrongAcid:strongA}}
C.IONIC={version:'1.1',saltReaction,compound,cationName:c=>GEN[c],table:D.SOLUBILITY_TABLE,solubility,species,equations,parseSalt,
 explain:f=>{const s=solubility(f);return s&&s.s?pf(f)+': '+(D.SOLUBILITY_TABLE.legend[s.s]||s.s)+' (kation '+(CATN[s.cid]||s.cat)+', anion '+AN[s.an].n+')':null}};
})();
