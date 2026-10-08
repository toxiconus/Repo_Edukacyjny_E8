

(function(){
const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
const SUB='₀₁₂₃₄₅₆₇₈₉',SUP={'+':'⁺','-':'⁻','1':'¹','2':'²','3':'³','4':'⁴'};
const pf=s=>String(s).replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,d=>SUB[d]));
const ion=(sym,q)=>sym+(Math.abs(q)>1?SUP[Math.abs(q)]:'')+(q>0?'⁺':'⁻');
const fmt=(v,d)=>(Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',',');

const T=[
 ['LiOH','wodorotlenek litu','Li',1,null,'#f8fafc','biały','mocna',0,'AMB',{oxide:'li2oH2o',metal:'liH2o'},['najmniej rozpuszczalny z wodorotlenków litowców, ale nadal dobrze rozpuszczalny'],-23.6,null,12.8,'R'],
 ['NaOH','wodorotlenek sodu','Na',1,'Na','#f8fafc','biały','mocna',0,'E8',{oxide:'na2oH2o',metal:'naH2o',acid:'hclNaOH',co2:'naohCo2'},['higroskopijny — „rozpływa się” na powietrzu','żrący; roztwór = zasada sodowa (ług sodowy)','rozpuszczanie silnie egzotermiczne'],-44.5,null,109,null],
 ['KOH','wodorotlenek potasu','K',1,'K','#f8fafc','biały','mocna',0,'E8',{oxide:'k2oH2o',metal:'kH2o',acid:'kohHcl',co2:'co2Koh'},['higroskopijny, żrący; jeszcze lepiej rozpuszczalny niż NaOH','mydła potasowe (płynne), baterie alkaliczne'],-57.6,null,112,null],
 ['Ca(OH)2','wodorotlenek wapnia','Ca',2,'Ca','#f1f5f9','biały','mocna',0,'E8',{oxide:'caoH2o',metal:'caH2o',precip:'cacl2Naoh',acid:'caoh2Hcl',heat:'caoh2Heat',co2:'caoh2Co2'},['wapno gaszone; mleko wapienne = zawiesina, woda wapienna = klarowny roztwór nasycony','słabo rozpuszczalny, ale rozpuszczona część dysocjuje praktycznie całkowicie'],-16.7,12.4,0.173,null],
 ['Ba(OH)2','wodorotlenek baru','Ba',2,'Ba','#f8fafc','biały','mocna',0,'AMB',{oxide:'baoH2o',metal:'baH2o',acid:'baoh2Hcl',co2:'baoh2Co2'},['związki baru są trujące — nie do doświadczeń uczniowskich','rozpuszczalność ok. 3,9 g/100 g (jako hydrat Ba(OH)₂·8H₂O)'],null,null,3.9,null],
 ['Mg(OH)2','wodorotlenek magnezu','Mg',2,'Mg','#f8fafc','biały','—',0,'E8',{oxide:'mgoH2o',metal:'mgH2oHot',precip:'mgcl2Naoh',acid:'mgoh2Hcl',heat:'mgoh2Heat'},['mleko magnezowe — lek zobojętniający kwas żołądkowy','MgO reaguje z wodą bardzo powoli'],null,10.4,0.0009,null],
 ['Al(OH)3','wodorotlenek glinu','Al',3,'Al','#f8fafc','biały, galaretowaty','—',1,'E8',{precip:'alcl3Naoh',acid:'aloh3Hcl',base:'aloh3Naoh',heat:'aloh3Heat'},['amfoteryczny: reaguje z kwasami i z mocnymi zasadami','leki na zgagę; uzdatnianie wody'],null,null,0.0001,null],
 ['Zn(OH)2','wodorotlenek cynku','Zn',2,'Zn','#f8fafc','biały','—',1,'E8',{precip:'znso4Naoh',acid:'znoh2Hcl',base:'znoh2Naoh',heat:'znoh2Heat'},['amfoteryczny'],null,null,0.0001,null],
 ['Fe(OH)2','wodorotlenek żelaza(II)','Fe',2,'Fe2','#9cbf8f','zielonkawy (brunatnieje na powietrzu)','—',0,'E8',{precip:'feso4Naoh',air:'feoh2O2'},['na powietrzu utlenia się do Fe(OH)₃'],null,null,0.0001,null],
 ['Fe(OH)3','wodorotlenek żelaza(III)','Fe',3,'Fe3','#8b4513','rdzawobrunatny','—',0,'E8',{precip:'fecl3Naoh',acid:'feoh3Hcl',heat:'feoh3Heat'},['składnik rdzy'],null,null,0.00001,null],
 ['Cu(OH)2','wodorotlenek miedzi(II)','Cu',2,'Cu','#4f9fe0','niebieski, galaretowaty','—',0,'E8',{precip:'cuso4Naoh',acid:'cuoh2H2so4',heat:'cuoh2Heat'},['po ogrzaniu czernieje (CuO)'],null,null,0.0001,null],
 ['Ni(OH)2','wodorotlenek niklu(II)','Ni',2,'Ni','#7fd38a','jasnozielony','—',0,'AMB',{precip:'niso4Naoh'},['akumulatory Ni-MH'],null,null,0.0001,null],
 ['Mn(OH)2','wodorotlenek manganu(II)','Mn',2,'Mn','#efe6d2','biały / beżowy (brunatnieje)','—',0,'AMB',{precip:'mnso4Naoh'},['na powietrzu utlenia się (brunatnieje)'],null,null,0.0003,null],
 ['Pb(OH)2','wodorotlenek ołowiu(II)','Pb',2,'Pb','#f8fafc','biały','—',1,'AMB',{precip:'pbno32Naoh',base:'pboh2Naoh'},['amfoteryczny; związki ołowiu trujące'],null,null,0.0001,null],
 ['Sn(OH)2','wodorotlenek cyny(II)','Sn',2,'Sn','#f8fafc','biały','—',1,'LO',{},['amfoteryczny'],null,null,0.0001,null],
 ['Cr(OH)3','wodorotlenek chromu(III)','Cr',3,null,'#6b8f71','szarozielony','—',1,'LO',{},['amfoteryczny'],null,null,0.0001,'N'],
 ['AgOH','wodorotlenek srebra(I)','Ag',1,'Ag','#4a3426','— (od razu brunatny Ag₂O)','—',0,'AMB',{precip:'agno3Naoh',heat:'agohDec'},['nietrwały: 2AgOH → Ag₂O + H₂O; nie mów „nie istnieje” — to zbyt duże uproszczenie'],null,null,null,null],
 ['CuOH','wodorotlenek miedzi(I)','Cu',1,null,'#b45309','— (przechodzi w Cu₂O)','—',0,'LO',{heat:'cuohDec'},['nietrwały: 2CuOH → Cu₂O + H₂O'],null,null,null,'—'],
 ['NH4OH','„wodorotlenek amonu” (zapis szkolny)','NH4',1,'NH4','#f8fafc','— (roztwór)','słaba',0,'AMB',{},['tradycyjny skrót: dokładniej NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ — nie ma trwałej cząsteczki NH₄OH','woda amoniakalna ma odczyn zasadowy'],null,11.1,null,null]
];
const K=['f','name','metal','q','cid','hex','color','strength','amph','level','rx','notes','dHsol','phSat','sg','sOwn'];
const ROWS=T.map(r=>{const o={};K.forEach((k,i)=>o[k]=r[i]);o.amph=!!o.amph;o.pretty=pf(o.f);o.cation=o.metal==='NH4'?'NH₄⁺':ion(o.metal,o.q);return Object.freeze(o)});
const BY={};ROWS.forEach(r=>BY[r.f]=r);
 
const SOLHEAT={NaOH:{dH:-44.5,name:'NaOH',M:40.00},KOH:{dH:-57.6,name:'KOH',M:56.11},LiOH:{dH:-23.6,name:'LiOH',M:23.95},'Ca(OH)2':{dH:-16.7,name:'Ca(OH)₂',M:74.09,limit:0.17},NH4NO3:{dH:25.7,name:'NH₄NO₃ (porównanie)',M:80.04},NaCl:{dH:3.9,name:'NaCl (porównanie)',M:58.44}};
const ACIDS={HCl:{n:1,an:'Cl',ion:'Cl⁻',name:'kwas solny',saltSuffix:'chlorek'},HNO3:{n:1,an:'NO3',ion:'NO₃⁻',name:'kwas azotowy(V)',saltSuffix:'azotan(V)'},H2SO4:{n:2,an:'SO4',ion:'SO₄²⁻',name:'kwas siarkowy(VI)',saltSuffix:'siarczan(VI)'}};
const POLY={NO3:1,SO4:1,OH:1,NH4:1,CO3:1,PO4:1};
D.HYDROXIDES=Object.freeze(ROWS);
function solTab(cid){const t=D.SOLUBILITY_TABLE&&D.SOLUBILITY_TABLE.table&&D.SOLUBILITY_TABLE.table.OH;return t&&cid?t[cid]:null}
function atoms(f){f=String(f).replace(/[₀-₉]/g,c=>SUB.indexOf(c)).replace(/\s/g,'');let i=0;
 function grp(){const o={};while(i<f.length&&f[i]!==')'){if(f[i]==='('){i++;const inn=grp();i++;const m=f.slice(i).match(/^\d*/)[0];i+=m.length;const n=+(m||1);for(const k in inn)o[k]=(o[k]||0)+inn[k]*n}
  else{const m=f.slice(i).match(/^([A-Z][a-z]?)(\d*)/);if(!m)return o;i+=m[0].length;o[m[1]]=(o[m[1]]||0)+(+(m[2]||1))}}return o}
 return grp()}
function eqText(k){const r=(D.REACTIONS||{})[k];if(!r)return null;const d=(D.REACTION_DATA||{})[k]||{},typ=d.type||'';
 const GAS={H2:1,CO2:1,NH3:1,O2:1},ppt=f=>{const h=BY[f];if(h)return(sol(f).s==='N'||sol(f).s==='T')&&!/rozkład|utlenianie/.test(typ);return /^(BaSO4|CaCO3|BaCO3|Ag2O|CaSO4)$/.test(f)&&!/rozkład/.test(typ)};
 const side=(a,p)=>a.map(x=>(x.coef>1?x.coef+' ':'')+pf(x.formula)+(p&&GAS[x.formula]?'↑':p&&ppt(x.formula)&&!r.reactants.some(y=>y.formula===x.formula)?'↓':'')).join(' + ');
 return side(r.reactants,0)+' → '+side(r.products,1)}
function sol(f){const r=BY[f];if(!r)return{s:null};let s=r.sOwn||solTab(r.cid)||null;
 const L={R:'dobrze rozpuszczalny',T:'trudno (słabo) rozpuszczalny',N:'praktycznie nierozpuszczalny','—':'nietrwały w wodzie / nie istnieje w roztworze'};
 let odczyn,ph=null;
 if(r.metal==='NH4'){odczyn='zasadowy (słaba zasada)';ph=r.phSat}
 else if(s==='R'){odczyn='silnie zasadowy';ph=null}
 else if(s==='T'){odczyn='zasadowy (roztwór nasycony)';ph=r.phSat}
 else if(s==='N'&&r.phSat){odczyn='słabo zasadowy (zawiesina)';ph=r.phSat}
 else if(s==='N'){odczyn='brak wyraźnego odczynu zasadowego (osad)';}
 else odczyn='—';
 return{s,label:L[s]||'—',odczyn,ph,base:s==='R'||s==='T'||r.metal==='NH4',g100:r.sg,source:r.sOwn?'CHE.HYDROXIDES':'D.SOLUBILITY_TABLE'}}
function build(metal,q){const r=ROWS.find(x=>x.metal===metal&&x.q===q);const f=r?r.f:(metal+(q>1?'(OH)'+q:'OH'));const c=metal==='NH4'?'NH₄⁺':ion(metal,q);
 const steps=['Kation: '+c+' (ładunek +'+q+').','Anion OH⁻ ma zawsze ładunek −1 — to jeden „klocek”.','Potrzeba '+q+' '+(q===1?'grupy':'grup')+' OH⁻, bo (+'+q+') + '+q+'·(−1) = 0.',
  q>1?'Grup OH⁻ jest więcej niż jedna → nawias: '+pf(f)+' (indeks za nawiasem mnoży całą grupę).':'Jedna grupa OH⁻ → bez nawiasu: '+pf(f)+'.',
  'Skład: '+Object.entries(atoms(f)).map(([k,v])=>v+' '+k).join(', ')+'.'];
 return{f,pretty:pf(f),name:r?r.name:'wodorotlenek ('+metal+')',nOH:q,bracket:q>1,cation:c,charge:'(+'+q+') + '+q+'·(−1) = 0',steps,row:r||null}}
 
function check(input,metal,q){const s=String(input||'').replace(/\s/g,'').replace(/[₀-₉]/g,c=>SUB.indexOf(c)),ok=build(metal,q),want=atoms(ok.f),got=atoms(s);
 const same=(a,b)=>Object.keys(a).length===Object.keys(b).length&&Object.keys(a).every(k=>a[k]===b[k]);
 if(s===ok.f)return{ok:true,code:'ok',msg:'Poprawnie: '+ok.pretty+' — '+ok.name+'.'};
 if(!s)return{ok:false,code:'empty',msg:'Wpisz wzór.'};
 if(got[metal]==null&&metal!=='NH4')return{ok:false,code:'metal',msg:'We wzorze brak symbolu metalu '+metal+'.'};
 if(new RegExp('^'+metal+'OH\\d+$').test(s))return{ok:false,code:'bracket',msg:'Brak nawiasu: w '+pf(s)+' indeks dotyczy tylko wodoru (skład '+Object.entries(got).map(([k,v])=>v+' '+k).join(', ')+'). Poprawnie: '+ok.pretty+' — '+q+' całe grupy OH⁻.'};
 if(q===1&&s===metal+'(OH)')return{ok:false,code:'bracket1',msg:'Nawias jest zbędny przy jednej grupie OH⁻: pisz '+ok.pretty+'.'};
 if(same(want,got))return{ok:false,code:'form',msg:'Skład się zgadza, ale zapis gubi grupę OH⁻ — pisz '+ok.pretty+'.'};
 const m=s.match(/^(?:[A-Z][a-z]?|NH4)(?:\(OH\)(\d+)|OH)$/);if(m){const k=+(m[1]||1);return{ok:false,code:'count',msg:'Liczba grup OH⁻: '+k+'. Suma ładunków (+'+q+') + '+k+'·(−1) = '+(q-k>0?'+':'')+(q-k)+' ≠ 0. Potrzeba '+q+'.'}}
 return{ok:false,code:'other',msg:'To nie jest poprawny wzór wodorotlenku dla '+ok.cation+'. Oczekiwany: '+ok.pretty+'.'}}
function dissociation(f){const r=BY[f];if(!r)return null;const S=sol(f);
 if(r.metal==='NH4')return{eq:'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',note:'woda amoniakalna: tylko część cząsteczek NH₃ reaguje z wodą (słaba zasada)'};
 const right=r.cation+' + '+(r.q>1?r.q:'')+'OH⁻';
 if(S.s==='R')return{eq:pf(f)+' → '+right,note:'dobrze rozpuszczalny, dysocjuje praktycznie całkowicie (mocna zasada)'};
 if(S.s==='T')return{eq:pf(f)+'(s) ⇌ '+right,note:'rozpuszcza się niewiele; rozpuszczona część dysocjuje całkowicie — dlatego woda wapienna ma wyraźny odczyn zasadowy'};
 if(S.s==='N')return{eq:pf(f)+'(s) — praktycznie nie przechodzi do roztworu',note:'nie zapisujemy dysocjacji osadu; do roztworu trafia znikoma ilość jonów OH⁻'};
 return{eq:'—',note:'nietrwały'}}
const METHOD={oxide:'tlenek metalu + woda',metal:'metal aktywny + woda',precip:'sól metalu + zasada (strącanie)'};
function obtain(f){const r=BY[f];if(!r)return[];const S=sol(f);return['oxide','metal','precip'].map(m=>{const k=r.rx[m];
 if(k&&(D.REACTIONS||{})[k]){const d=(D.REACTION_DATA||{})[k]||{};return{method:m,title:METHOD[m],ok:true,rx:k,eq:eqText(k),cond:d.conditions||'',obs:d.observation||'',safety:(d.safety||[]).join(' '),level:d.level||'E8',note:d.note||''}}
 let why;if(m==='oxide')why=r.metal==='NH4'?'nie dotyczy (brak metalu)':'tlenek tego metalu praktycznie nie reaguje z wodą — „tlenek zasadowy” nie oznacza „reaguje z wodą”';
 else if(m==='metal')why=r.metal==='NH4'?'nie dotyczy':'metal zbyt mało aktywny — nie wypiera wodoru z wody w warunkach szkolnych';
 else why=S.s==='R'?'wodorotlenek dobrze rozpuszczalny — nie wytrąci się jako osad':'brak typowej reakcji szkolnej w silniku';
 return{method:m,title:METHOD[m],ok:false,rx:null,eq:null,why}})}
function saltFormula(metal,q,an,n){const g=gcd(q,n),a=n/g,b=q/g;const A=b>1?(POLY[an]?'('+an+')'+b:an+b):an;return{f:metal+(a>1?a:'')+A,a,b}}
function gcd(a,b){return b?gcd(b,a%b):a}
 
function neutralEq(f,acid){const r=BY[f],A=ACIDS[acid];if(!r||!A||r.metal==='NH4')return null;
 const k=Object.keys(D.REACTIONS||{}).find(k=>{const x=D.REACTIONS[k],fs=x.reactants.map(y=>y.formula).sort().join('|');return fs===[f,acid].sort().join('|')&&x.products.some(p=>p.formula==='H2O')});
 if(k)return{rx:k,eq:eqText(k),src:'D.REACTIONS'};
 const s=saltFormula(r.metal,r.q,A.an,A.n),w=s.a*r.q;
 return{rx:null,eq:(s.a>1?s.a+' ':'')+pf(f)+' + '+(s.b>1?s.b+' ':'')+pf(acid)+' → '+pf(s.f)+' + '+(w>1?w+' ':'')+'H₂O',src:'CHE.HYDROXIDES.neutralEq',salt:s.f}}
const REAGENTS=['H2O','HCl','HNO3','H2SO4','NaOH','CO2','ogrzewanie','powietrze'];
function predict(f,g){const r=BY[f];if(!r)return null;const S=sol(f),RX=D.REACTIONS||{};
 const find=(fs)=>Object.keys(RX).find(k=>RX[k].reactants.map(y=>y.formula).sort().join('|')===fs.sort().join('|'));
 const res=(k,extra)=>{const d=(D.REACTION_DATA||{})[k]||{};return Object.assign({ok:true,rx:k,eq:eqText(k),type:d.type||'',obs:d.observation||'',cond:d.conditions||'',level:d.level||'E8',note:d.note||''},extra||{})};
 if(ACIDS[g]){const n=neutralEq(f,g);if(n&&n.rx)return res(n.rx,{why:'wodorotlenek + kwas → sól + woda (zobojętnianie): H⁺ + OH⁻ → H₂O'});
  if(n)return{ok:true,rx:null,eq:n.eq,type:'zobojętnianie',obs:S.s==='N'?'osad roztwarza się':'brak widocznych zmian; zanik barwy fenoloftaleiny',why:'każdy wodorotlenek metalu reaguje z mocnym kwasem; równanie z reguły: liczba H⁺ = liczba OH⁻',level:'E8'};
  return{ok:true,rx:null,eq:'NH₃ + '+pf(g)+' → sól amonowa',type:'zobojętnianie',why:'woda amoniakalna zobojętnia kwasy (powstaje sól amonowa)'}}
 if(g==='NaOH'){if(f==='NaOH')return{ok:false,why:'ta sama substancja — brak reakcji'};
  if(r.amph){const k=r.rx.base;return k?res(k,{why:'amfoteryczny — reaguje także z mocną zasadą (jon kompleksowy, poziom LO)'}):{ok:true,rx:null,eq:'— (jon kompleksowy, poziom LO)',why:'amfoteryczny — roztwarza się w nadmiarze mocnej zasady'}}
  return{ok:false,why:'wodorotlenek o charakterze zasadowym nie reaguje z zasadą'}}
 if(g==='H2O'){const d=dissociation(f);return{ok:S.base,physical:true,eq:d.eq,why:S.label+' — '+d.note,obs:S.s==='R'?'klarowny roztwór, odczyn '+S.odczyn:S.s==='T'?'część się rozpuszcza (zawiesina → po odstaniu klarowny roztwór nasycony)':'osad nie znika'}}
 if(g==='CO2'){const k=r.rx.co2||find([f,'CO2']);if(k)return res(k,{why:'zasada + tlenek kwasowy → sól + woda'});return{ok:false,why:S.base?'reaguje (zasada + tlenek kwasowy), brak rekordu w silniku':'osad praktycznie nie reaguje z CO₂ w warunkach szkolnych'}}
 if(g==='ogrzewanie'){const k=r.rx.heat;if(k)return res(k,{why:'wodorotlenki metali (poza litowcami) przy ogrzewaniu tracą wodę → tlenek'});return{ok:false,why:r.metal==='Na'||r.metal==='K'||r.metal==='Li'?'topi się (NaOH ok. 318 °C), nie rozkłada w warunkach szkolnych':'brak rekordu w silniku'}}
 if(g==='powietrze'){const k=r.rx.air;if(k)return res(k,{why:'tlen z powietrza utlenia Fe²⁺ do Fe³⁺'});if(r.rx.co2)return{ok:true,rx:r.rx.co2,eq:eqText(r.rx.co2),why:'zasady pochłaniają CO₂ z powietrza (dlatego NaOH przechowujemy szczelnie)'};return{ok:false,why:'stabilny na powietrzu'}}
 return null}
 
function neutral(o){const r=BY[o.base],A=ACIDS[o.acid];if(!r||!A)return null;const S=sol(o.base);
 const nOH=o.cB*o.VB/1000*r.q,nH=o.cA*o.VA/1000*A.n,V=(o.VB+o.VA)/1000,c=(nH-nOH)/V,Kw=1e-14;
 const H=c>=0?(c+Math.sqrt(c*c+4*Kw))/2:Kw/((-c+Math.sqrt(c*c+4*Kw))/2),pH=-Math.log10(H);
 const Veq=nOH/(o.cA*A.n)*1000,salt=saltFormula(r.metal,r.q,A.an,A.n).f;
 const ppt=(o.base==='Ba(OH)2'&&o.acid==='H2SO4')?'BaSO4':(o.base==='Ca(OH)2'&&o.acid==='H2SO4')?'CaSO4':null;
 return{nOH0:nOH,nH,excessOH:Math.max(0,nOH-nH),excessH:Math.max(0,nH-nOH),pH,Veq,salt,saltPretty:pf(salt),ppt,water:Math.min(nOH,nH),
  state:Math.abs(nOH-nH)<1e-9?'równoważnik — roztwór obojętny':nOH>nH?'nadmiar OH⁻ — odczyn zasadowy':'nadmiar H⁺ — odczyn kwasowy',
  warn:S.s==='T'&&o.cB>0.02?'Ca(OH)₂ rozpuszcza się tylko do ok. 0,02 mol/dm³ — wyższe stężenie to zawiesina (mleko wapienne)':S.s==='N'?'wodorotlenek nierozpuszczalny — to zawiesina, nie roztwór':''}}
function curve(o,n){const out=[],Vmax=o.Vmax||Math.max(2*(o.cB*o.VB*(BY[o.base]||{q:1}).q)/(o.cA*(ACIDS[o.acid]||{n:1}).n),1);for(let i=0;i<=(n||80);i++){const VA=Vmax*i/(n||80);out.push({V:VA,pH:neutral(Object.assign({},o,{VA})).pH})}return out}
 
function heat(f,m,mW,T0){const h=SOLHEAT[f];if(!h)return null;const n=m/h.M,Q=-h.dH*n*1000,dT=Q/((mW+m)*4.18);
 return{f,name:h.name,dH:h.dH,n,Q,dT,T:(T0==null?20:T0)+dT,kind:h.dH<0?'egzotermiczne (temperatura rośnie)':'endotermiczne (temperatura spada)',limit:h.limit||null}}
 
const KSP={'Ca(OH)2':5.5e-6,'Mg(OH)2':5.6e-12,'Fe(OH)2':4.9e-17,'Fe(OH)3':2.8e-39,'Cu(OH)2':2.2e-20,'Zn(OH)2':3e-17,'Al(OH)3':1.3e-33,'Ni(OH)2':5.5e-16,'Mn(OH)2':2e-13};
function satpH(f){const r=BY[f],K=KSP[f];if(!r||!K)return null;const n=r.q,s=Math.pow(K/Math.pow(n,n),1/(n+1)),oh=n*s,pH=14+Math.log10(Math.max(oh,1e-7));return{f,Ksp:K,n,s,OH:oh,pH:Math.max(7,pH),note:oh<1e-6?'[OH⁻] z osadu mniejsze niż w czystej wodze — odczyn praktycznie obojętny':''}}
function precipitations(){return Object.keys(D.REACTION_DATA||{}).filter(k=>(D.REACTION_DATA[k].type==='strącanie wodorotlenku'||/^(cuso4Naoh|fecl3Naoh)$/.test(k))&&D.REACTIONS[k])}
function get(f){return BY[f]||null}
function list(flt){return ROWS.filter(r=>!flt||(typeof flt==='function'?flt(r):r.level===flt))}
function cations(){return ROWS.filter(r=>r.metal!=='NH4'&&r.sg!==null&&r.level!=='LO').map(r=>({metal:r.metal,q:r.q,ion:r.cation,f:r.f}))}
function audit(){const t=[],ok=(n,v,d)=>t.push([n,!!v,d||'']);const RX=D.REACTIONS||{};
 ok('build Ca²⁺ → Ca(OH)₂',build('Ca',2).f==='Ca(OH)2');ok('build Na⁺ → NaOH (bez nawiasu)',build('Na',1).f==='NaOH'&&!build('Na',1).bracket);
 ok('check: CaOH2 → błąd nawiasu',check('CaOH2','Ca',2).code==='bracket');ok('check: Ca(OH)2 → ok',check('Ca(OH)₂','Ca',2).ok);ok('check: Al(OH)2 → zła liczba OH⁻',check('Al(OH)2','Al',3).code==='count');
 const miss=[];ROWS.forEach(r=>Object.values(r.rx).forEach(k=>{if(!RX[k])miss.push(r.f+':'+k)}));ok('wszystkie klucze rx istnieją w D.REACTIONS',!miss.length,miss.join(', '));
 ok('Cu(OH)₂ praktycznie nierozpuszczalny (z SOLUBILITY_TABLE)',sol('Cu(OH)2').s==='N');ok('Ca(OH)₂ trudno rozpuszczalny',sol('Ca(OH)2').s==='T');ok('NaOH dobrze rozpuszczalny',sol('NaOH').s==='R');
 const ox=[];Object.values(D.OXIDES||{}).forEach(o=>{const k=o&&o.water&&o.water.rx;if(!k||!RX[k])return;const p=RX[k].products.map(x=>x.formula).find(x=>BY[x]);if(p&&BY[p].rx.oxide!==k)ox.push(p+'≠'+k)});
 ok('spójność z N01: tlenek + woda → ten sam klucz reakcji',!ox.length,ox.join(', '));
 const n1=neutral({base:'NaOH',acid:'HCl',cB:.1,VB:50,cA:.1,VA:50});ok('NaOH 0,1 M 50 cm³ + HCl 0,1 M 50 cm³ → pH 7',n1&&Math.abs(n1.pH-7)<.01,n1&&n1.pH.toFixed(2));
 const n2=neutral({base:'Ca(OH)2',acid:'HCl',cB:.01,VB:50,cA:.1,VA:5});ok('Ca(OH)₂: 2 OH⁻ na jednostkę — Veq = 10 cm³',n2&&Math.abs(n2.Veq-10)<1e-9);
 const g=neutralEq('Al(OH)3','H2SO4');ok('zobojętnianie Al(OH)₃ + H₂SO₄ zbilansowane',g&&/2 Al\(OH\)₃ \+ 3 H₂SO₄ → Al₂\(SO₄\)₃ \+ 6 H₂O/.test(g.eq),g&&g.eq);
 const h=heat('NaOH',4,100);ok('4 g NaOH w 100 g wody → ok. +10 K',h&&Math.abs(h.dT-10.2)<.5,h&&h.dT.toFixed(1));
 const sc=satpH('Ca(OH)2'),sm=satpH('Mg(OH)2');ok('Ksp → pH nasyconego Ca(OH)₂ ≈ pH zmierzone (12,4)',sc&&Math.abs(sc.pH-12.4)<.15,sc&&sc.pH.toFixed(2));ok('Ksp → pH zawiesiny Mg(OH)₂ ≈ 10,4',sm&&Math.abs(sm.pH-10.4)<.15,sm&&sm.pH.toFixed(2));
 ok('strącanie: co najmniej 8 reakcji',precipitations().length>=8,precipitations().length);
 ok('predict: Fe(OH)₃ + NaOH → brak reakcji',predict('Fe(OH)3','NaOH').ok===false);ok('predict: Al(OH)₃ + NaOH → reakcja',predict('Al(OH)3','NaOH').ok===true);
 return{ok:t.every(x=>x[1]),tests:t}}
C.HYDROXIDES={version:'1.0',get,list,cations,atoms,pretty:pf,ion,build,check,solubility:sol,dissociation,obtain,neutralEq,saltFormula,predict,REAGENTS,ACIDS,neutral,curve,heat,SOLHEAT,precipitations,KSP,satpH,eq:eqText,audit};
})();
