<script id="che-lab-engine-v001">
/* CHE.LAB v1.02 — uniwersalna zlewka modułowa (wpięta do silnika głównego).
   API: CHE.LAB / CHE.LABVIEW.mount / CHE.LABVIEW.panel
   Widoki: reakcje-kwasu-v03, lab-beaker-v102
*/
/* CHE.LAB v1.02 — uniwersalna zlewka: silnik regułowy + widok. Lekcje wybierają odczynniki: CHE.LABVIEW.mount(host,{groups:[...],only:[...]}) */
(function(g){'use strict';
const C=g.CHE=g.CHE||{};
const SUB='₀₁₂₃₄₅₆₇₈₉',sub=n=>String(n).replace(/\d/g,d=>SUB[d]);
const pretty=f=>f.replace(/([A-Za-z)])(\d+)/g,(m,a,d)=>a+sub(d));
const gcd=(a,b)=>b?gcd(b,a%b):a;const chg=(n,sg)=>(n>1?'²³'[n-2]:'')+sg;
function parse(f){const st=[{}];let i=0;const add=(o,k,n)=>o[k]=(o[k]||0)+n;
 while(i<f.length){const c=f[i];
  if(c==='('){st.push({});i++}
  else if(c===')'){i++;let n='';while(/\d/.test(f[i]||''))n+=f[i++];n=+n||1;const t=st.pop();for(const k in t)add(st[st.length-1],k,t[k]*n)}
  else{let s=c;i++;while(/[a-z]/.test(f[i]||''))s+=f[i++];let n='';while(/\d/.test(f[i]||''))n+=f[i++];add(st[st.length-1],s,+n||1)}}
 return st[0]}
function balance(R,P){const L=R.concat(P),pr=L.map(parse),els=[...new Set(pr.flatMap(o=>Object.keys(o)))],k=L.length,M=k>5?5:8;
 let best=null,bs=1e9,co=new Array(k).fill(1);
 (function rec(i){if(i===k){const s=co.reduce((a,b)=>a+b,0);if(s>=bs)return;
   for(const e of els){let d=0;for(let j=0;j<k;j++)d+=(j<R.length?1:-1)*co[j]*(pr[j][e]||0);if(d)return}
   bs=s;best=co.slice();return}
  for(let c=1;c<=M;c++){co[i]=c;rec(i+1)}})(0);
 return best}
const eqStr=(R,P,co)=>{const f=(a,o)=>a.map((x,i)=>(co[o+i]>1?co[o+i]+' ':'')+pretty(x)).join(' + ');return f(R,0)+' → '+f(P,R.length)};
/* wzór soli z jonów */
function salt(cs,cc,as,ac,poly){const d=gcd(cc,ac),n=ac/d,m=cc/d;const an=(m>1&&poly?'('+as+')':as)+(m>1?m:'');return as==='CH3COO'?an+cs+(n>1?n:''):cs+(n>1?n:'')+an}

/* ---------- BAZA ODCZYNNIKÓW ---------- */
const MET={Mg:{v:2,a:9,c:[185,190,196]},Zn:{v:2,a:7,c:[150,158,168]},Fe:{v:2,a:6,c:[110,115,122],pass:1},Al:{v:3,a:8,c:[205,210,216],pass:1},Cu:{v:2,a:-1,c:[196,112,68]},Ag:{v:1,a:-2,c:[216,219,224]},
 Na:{v:1,a:12,c:[228,228,232],w:1},K:{v:1,a:13,c:[228,228,232],w:1},Ca:{v:2,a:11,c:[225,225,228],w:1}};
const ACID={HCl:{n:1,as:'Cl',strong:1,l:'HCl'},H2SO4:{n:2,as:'SO4',poly:1,strong:1,l:'H₂SO₄'},HNO3:{n:1,as:'NO3',poly:1,strong:1,ox:1,l:'HNO₃ (stęż.) – pokaz nauczyciela'},CH3COOH:{n:1,as:'CH3COO',poly:1,l:'CH₃COOH (ocet, słaby)'}};
const BASE={NaOH:{cs:'Na',cc:1,l:'NaOH'},KOH:{cs:'K',cc:1,l:'KOH'},'Ca(OH)2':{cs:'Ca',cc:2,l:'Ca(OH)₂ (woda wapienna)'}};
const OXI={CuO:{M:'Cu',v:2,col:[35,35,35],l:'CuO (czarny)'},MgO:{M:'Mg',v:2,col:[240,240,240],l:'MgO'},ZnO:{M:'Zn',v:2,col:[245,245,240],l:'ZnO'},Fe2O3:{M:'Fe',v:3,col:[150,70,50],l:'Fe₂O₃ (rdza)'},CaO:{M:'Ca',v:2,col:[245,245,245],l:'CaO (wapno palone)'}};
const CARB={CaCO3:{M:'Ca',v:2,col:[248,248,248],l:'CaCO₃ (kreda)'},Na2CO3:{M:'Na',v:1,col:[250,250,250],sol:1,l:'Na₂CO₃ (soda)'}};
const SALT={AgNO3:{cs:'Ag',cc:1,as:'NO3',ac:1,poly:1,l:'AgNO₃'},BaCl2:{cs:'Ba',cc:2,as:'Cl',ac:1,l:'BaCl₂'},CuSO4:{cs:'Cu',cc:2,as:'SO4',ac:2,poly:1,l:'CuSO₄'},ZnSO4:{cs:'Zn',cc:2,as:'SO4',ac:2,poly:1,l:'ZnSO₄'},
 FeCl3:{cs:'Fe',cc:3,as:'Cl',ac:1,l:'FeCl₃'},NaCl:{cs:'Na',cc:1,as:'Cl',ac:1,l:'NaCl'},Na2SO4:{cs:'Na',cc:1,as:'SO4',ac:2,poly:1,l:'Na₂SO₄'}};
const IND={phph:{l:'fenoloftaleina'},mo:{l:'oranż metylowy'},btb:{l:'błękit bromotymolowy'},uni:{l:'wskaźnik uniwersalny'}};
const GROUPS=[['water','Woda',{water:{l:'Woda destylowana'}}],['acid','Kwasy',ACID],['base','Zasady',BASE],['metal','Metale',Object.fromEntries(Object.keys(MET).map(k=>[k,{l:k+(MET[k].w?' (reaguje z wodą – pokaz)':'')}]))],
 ['oxide','Tlenki metali',OXI],['carb','Węglany',CARB],['salt','Sole (roztwory)',SALT],['ind','Wskaźniki',IND]];
const KIND={};GROUPS.forEach(([k,,o])=>Object.keys(o).forEach(id=>KIND[id]=k));
/* trudno rozpuszczalne: kation|anion → [barwa, nazwa] */
const INS={'Ag|Cl':[[250,250,250],'AgCl'],'Ba|SO4':[[250,250,250],'BaSO4'],'Ca|SO4':[[250,250,250],'CaSO4'],'Ba|CO3':[[248,248,248],'BaCO3'],'Ca|CO3':[[248,248,248],'CaCO3'],'Ag|CO3':[[235,225,150],'Ag2CO3'],
 'Cu|OH':[[100,160,230],'Cu(OH)2'],'Fe|OH':[[170,85,45],'Fe(OH)3'],'Zn|OH':[[245,245,245],'Zn(OH)2'],'Mg|OH':[[245,245,245],'Mg(OH)2'],'Al|OH':[[245,245,245],'Al(OH)3']};
const ION_COL={Cu:[70,155,215],Fe2:[190,225,195],Fe3:[235,190,90]};
const WATER=[205,228,238];

/* ---------- STAN I REGUŁY ---------- */
const newState=(emp)=>({T:25,hot:0,V:emp?0:1,emp:!!emp,concAcid:0,splash:0,bhp:[],banner:null,seq:[],H:0,OH:0,weakH:0,weakA:0,ions:[],ans:[],solids:[],ppts:[],acids:[],bases:[],ind:null,carbSol:0,gas:null,gasT:0,heat:0,fumes:0,log:[]});
const PKA=4.745;
function pH(S){const k=0.1/Math.max(S.V,.3),OHn=S.OH+0.01*S.carbSol,Hn=S.H,HA=Math.min(S.weakH||0,Math.max(Hn,0)),sH=Math.max(0,Hn-HA),A=S.weakA||0;
  if(OHn>Hn+1e-3){const p=14+Math.log10(k*(OHn-Hn));const cap=S.bases.length&&S.bases.every(b=>b==='Ca(OH)2')?12.6:14;return Math.min(cap,p)}
  if(sH>1e-4)return Math.max(-1,-Math.log10(k*sH));
  if(HA>1e-4){if(A>1e-4)return PKA+Math.log10(Math.max(A,1e-12)/Math.max(HA,1e-12));const c=k*HA;try{const w=C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH&&C.EQUILIBRIUM.weakAcidPH(c,1.8e-5);if(isFinite(w))return w}catch(_){}return -Math.log10(Math.sqrt(1.8e-5*c))}
  if(A>1e-4)return 7+.5*(PKA+Math.log10(k*A));
  return 7}
function ion(S,list,k,ch,src,eq,ps,pc,pp,fe){list.push({k,ch,src,eq,ps,pc,pp});}
function ev(S,R,P,type,obs,o){const co=balance(R,P);return Object.assign({eq:co?eqStr(R,P,co):R.concat(P).map(pretty).join(' → '),type,obs,gas:null,ppt:null,heat:0,warn:''},o||{})}
function insol(c,a){return INS[c.k+'|'+a.k]}
function settle(S,news,evs){/* wytrącanie osadów dla nowych jonów */
 news.forEach(n=>{const opp=n.an?S.ions:S.ans;opp.forEach(o=>{
  const c=n.an?o:n,a=n.an?n:o;if(c.eq<=0.01||a.eq<=0.01)return;const r=insol(c,a);if(!r)return;
  const x=Math.min(c.eq*a.ch/ c.ch>0?Math.min(c.eq,a.eq):0,c.eq,a.eq);if(x<=0)return;
  const pf=salt(c.k,c.ch,a.k,a.ch,a.k==='OH'||a.k==='CO3'||a.k==='SO4'),
        other=salt(a.ps,a.pc,c.ps,c.pc,c.pp);
  const R=[c.src,a.src],P=[pf+'↓',other].filter(Boolean);
  const e=ev(S,R,[pf,other],'strącanie osadu','Powstaje osad '+pretty(pf)+'.',{ppt:{f:pf,col:r[0],eq:x}});
  c.eq-=x;a.eq-=x;if(a.k==='OH')S.OH=Math.max(0,S.OH-x);
  const p=S.ppts.find(q=>q.f===pf);p?p.eq+=x:S.ppts.push({f:pf,col:r[0],eq:x});evs.push(e)})})}
function caSO4(S,x,e,txt){const p=S.ppts.find(q=>q.f==='CaSO4');p?p.eq+=x*.5:S.ppts.push({f:'CaSO4',col:[250,250,250],eq:x*.5});e.eq=e.eq.replace('CaSO₄','CaSO₄↓');e.obs=txt;e.ppt={f:'CaSO4'}}
function neutral(S,evs){const x=Math.min(S.H,S.OH);if(x<=0.01||!S.acids.length||!S.bases.length)return;
 const A=ACID[S.acids[S.acids.length-1]],a=S.acids[S.acids.length-1],b=S.bases[S.bases.length-1],B=BASE[b];
 const sf=salt(B.cs,B.cc,A.as,A.n,A.poly);const _ha=Math.min(S.weakH||0,S.H),_sH=Math.max(0,S.H-_ha),_fw=Math.max(0,x-_sH);S.weakH=Math.max(0,(S.weakH||0)-_fw);S.weakA=(S.weakA||0)+_fw;S.H-=x;S.OH-=x;S.heat=3;
 evs.push(ev(S,[a,b],[sf,'H2O'],'zobojętnianie','Brak gazu i osadu; roztwór się ogrzewa, zmienia się pH.',{heat:1}));if(sf==='CaSO4')caSO4(S,x,evs[evs.length-1],'Roztwór się ogrzewa; powstaje biały, trudno rozpuszczalny CaSO₄ (zawiesina).');
 ion(S,S.ions,B.cs,B.cc,sf,x,A.as,A.n,A.poly)}
function acidSolids(S,a,evs){const A=ACID[a];let any=false;
 const order=S.solids.slice().sort((p,q)=>(p.t==='carb'?0:p.t==='oxide'?1:2)-(q.t==='carb'?0:q.t==='oxide'?1:2));
 for(const s of order){if(S.H<=0.01)break;if(s.eq<=0.01)continue;
  if(s.t==='carb'){const x=Math.min(S.H,s.eq),sf=salt(s.M,s.v,A.as,A.n,A.poly);s.eq-=x;S.H-=x;S.gas='CO2';S.gasT=4;any=true;
   evs.push(ev(S,[s.id,a],[sf,'H2O','CO2'],'węglan + kwas','Intensywne pęcherzyki CO₂; woda wapienna by się zmętniła.',{gas:'CO₂'}));if(sf==='CaSO4')caSO4(S,x,evs[evs.length-1],'Pęcherzyki CO₂; powstający CaSO₄ jest trudno rozpuszczalny i otacza kredę – reakcja zwalnia.');ion(S,S.ions,s.M,s.v,sf,x,A.as,A.n,A.poly);if(s.sol)S.carbSol=Math.max(0,S.carbSol-x)}
  else if(s.t==='oxide'){const x=Math.min(S.H,s.eq),sf=salt(s.M,s.v,A.as,A.n,A.poly);s.eq-=x;S.H-=x;any=true;S.heat=Math.max(S.heat,1.5);
   evs.push(ev(S,[s.id,a],[sf,'H2O'],'tlenek metalu + kwas','Ciało stałe znika, roztwór zmienia barwę (jon '+s.M+'). Brak gazu.',{}));if(sf==='CaSO4')caSO4(S,x,evs[evs.length-1],'Ciało stałe znika, ale powstaje trudno rozpuszczalny, biały CaSO₄.');ion(S,S.ions,s.M,s.v,sf,x,A.as,A.n,A.poly,s.id==='Fe2O3'?3:0)}
  else if(s.t==='metal'){const m=MET[s.M];
   if(A.ox){if(m.pass){evs.push(ev(S,[s.M,a],[s.M],'brak reakcji','Stężony HNO₃ pasywuje '+s.M+' (warstwa tlenku) – reakcja praktycznie nie idzie.',{type:'brak reakcji'}));evs[evs.length-1].eq=s.M+' + HNO₃(stęż.) → brak reakcji (pasywacja)';continue}
    const x=Math.min(S.H,s.eq),sf=salt(s.M,m.v,'NO3',1,1);s.eq-=x;S.H-=x;S.gas='NO2';S.gasT=5;S.fumes=5;any=true;
    evs.push(ev(S,[s.M,a],[sf,'NO2','H2O'],'metal + kwas utleniający','Brunatny NO₂↑ (toksyczny!), NIE wydziela się H₂. Roztwór barwi się jonem '+s.M+'.',{gas:'NO₂',warn:'Toksyczny gaz – tylko pokaz nauczyciela.'}));ion(S,S.ions,s.M,m.v,sf,x,'NO3',1,1)}
   else if(m.a>0){const x=Math.min(S.H,s.eq),sf=salt(s.M,m.v,A.as,A.n,A.poly);s.eq-=x;S.H-=x;S.gas='H2';S.gasT=4;any=true;S.heat=Math.max(S.heat,m.a>=9?2:m.a>=7?1.2:.7);
    evs.push(ev(S,[s.M,a],[sf,'H2'],'metal + kwas','Pęcherzyki H₂↑ ('+(m.a>=9?'gwałtownie':m.a>=6?'wolniej':'umiarkowanie')+'); metal się zmniejsza. Próba wodoru: „szczek”.',{gas:'H₂',warn:m.w?'Metal bardzo aktywny – reakcja gwałtowna, tylko pokaz.':''}));ion(S,S.ions,s.M,m.v,sf,x,A.as,A.n,A.poly,s.M==='Fe'?2:0)}
   else if(!s.noted){s.noted=1;evs.push(ev(S,[s.M,a],[s.M],'brak reakcji',s.M+' stoi w szeregu aktywności za wodorem – nie wypiera H₂ z kwasów nieutleniających.',{}));evs[evs.length-1].eq=s.M+' + '+pretty(a)+' → brak reakcji'}}}
 return any}
function addAcid(S,id,amt,evs){const A=ACID[id],a=amt;S.acids.push(id);S.H+=a;if(!A.strong)S.weakH+=a;S.heat=Math.max(S.heat,A.strong&&S.V<2?0.8:0);
 const an={k:A.as,ch:A.n,src:id,eq:a,ps:'H',pc:1,pp:0,an:1};S.ans.push(an);
 acidSolids(S,id,evs);neutral(S,evs);
 if(!evs.length)evs.push(ev(S,['H2O',id],[id],'roztwór kwasu','Kwas rozcieńczony w wodzie: odczyn kwasowy, brak widocznych zmian.',{eq:pretty(id)+' → '+(A.n>1?A.n+' ':'')+'H⁺ + '+pretty(A.as)+chg(A.n,'⁻')}));
 settle(S,[an],evs)}
function addBase(S,id,amt,evs){const B=BASE[id];S.bases.push(id);S.OH+=amt;const c={k:B.cs,ch:B.cc,src:id,eq:amt,ps:'OH',pc:1,pp:1};S.ions.push(c);
 const an={k:'OH',ch:1,src:id,eq:amt,ps:B.cs,pc:B.cc,pp:0,an:1};S.ans.push(an);neutral(S,evs);settle(S,[an],evs);
 if(!evs.length)evs.push(ev(S,[id],[id],'roztwór zasady','Roztwór zasady: odczyn zasadowy, brak widocznych zmian bez wskaźnika.',{eq:pretty(id)+' → '+B.cs+chg(B.cc,'⁺')+' + '+(B.cc>1?B.cc+' ':'')+'OH⁻'}))}
function addMetal(S,k,amt,evs){const m=MET[k];
 if(m.w&&S.H<=0.01){const hf=salt(k,m.v,'OH',1,1);S.OH+=amt*.9;S.gas='H2';S.gasT=4;S.heat=3;S.bases.push(hf);BASE[hf]=BASE[hf]||{cs:k,cc:m.v};
  evs.push(ev(S,[k,'H2O'],[hf,'H2'],'metal + woda','Metal pływa/ szybko się zużywa, wydziela się H₂↑, roztwór silnie zasadowy (z fenoloftaleiną – malinowy).',{gas:'H₂',heat:1,warn:'Reakcja gwałtowna – tylko pokaz nauczyciela.'}));S.ions.push({k,ch:m.v,src:hf,eq:amt,ps:'OH',pc:1,pp:1});return}
 /* wypieranie z soli */
 const tgt=S.ions.filter(i=>MET[i.k]&&MET[i.k].a<m.a&&i.eq>.01&&!m.w&&!INS[i.k+'|X']);
 if(tgt.length&&S.H<=0.01){const t=tgt[0],x=Math.min(amt,t.eq),sf=salt(k,m.v,t.ps,t.pc,t.pp);t.eq-=x;
  const mm=MET[t.k];S.ppts.push({f:t.k+'(met)',col:mm.c,eq:x*.8,metal:1});
  S.ions.push({k,ch:m.v,src:sf,eq:x,ps:t.ps,pc:t.pc,pp:t.pp});
  evs.push(ev(S,[k,t.src],[sf,t.k],'reakcja wypierania','Na metalu osadza się '+t.k+'; barwa roztworu się zmienia (znika jon '+t.k+').',{}));if(amt-x>.01)S.solids.push({id:k,t:'metal',M:k,eq:amt-x,col:m.c});return}
 S.solids.push({id:k,t:'metal',M:k,eq:amt,col:m.c});
 if(S.H>0.01)acidSolids(S,S.acids[S.acids.length-1],evs);
 if(!evs.length)evs.push(ev(S,[k],[k],'brak reakcji','Metal leży na dnie – brak widocznej reakcji w tych warunkach.',{eq:k+' + '+(S.acids.length?'kwas':'woda')+' → brak reakcji'}))}
function addOxide(S,k,amt,evs){const o=OXI[k];S.solids.push({id:k,t:'oxide',M:o.M,v:o.v,eq:amt,col:o.col});
 if(S.H>0.01){acidSolids(S,S.acids[S.acids.length-1],evs);return}
 if(k==='CaO'){S.heat=3;const s=S.solids[S.solids.length-1];s.eq=0;S.OH+=amt*.8;S.bases.push('Ca(OH)2');S.ions.push({k:'Ca',ch:2,src:'Ca(OH)2',eq:amt,ps:'OH',pc:1,pp:1});S.ans.push({k:'OH',ch:1,src:'Ca(OH)2',eq:amt,ps:'Ca',pc:2,pp:0,an:1});
  evs.push(ev(S,['CaO','H2O'],['Ca(OH)2'],'tlenek zasadowy + woda','Wapno gaszone: mocne ogrzanie, powstaje zasadowy roztwór Ca(OH)₂.',{heat:1}));return}
 evs.push(ev(S,[k],[k],'brak reakcji','Tlenek nie reaguje z wodą (osiada na dnie). Zadziała dopiero kwas.',{eq:k+' + H₂O → brak reakcji'}))}
function addCarb(S,k,amt,evs){const o=CARB[k];S.solids.push({id:k,t:'carb',M:o.M,v:o.v,eq:amt,col:o.col,sol:o.sol});
 if(o.sol){S.carbSol+=amt;S.ions.push({k:'Na',ch:1,src:k,eq:amt,ps:'CO3',pc:2,pp:1});S.ans.push({k:'CO3',ch:2,src:k,eq:amt,ps:'Na',pc:1,pp:0,an:1})}
 if(S.H>0.01){acidSolids(S,S.acids[S.acids.length-1],evs);return}
 evs.push(ev(S,[k],[k],o.sol?'sól rozpuszczalna':'brak reakcji',o.sol?'Soda rozpuszcza się; roztwór ma odczyn zasadowy (hydroliza CO₃²⁻).':'Kreda nie rozpuszcza się w wodzie – leży na dnie. Zadziała dopiero kwas.',{eq:o.sol?'Na2CO3 → 2 Na⁺ + CO₃²⁻'.replace('Na2CO3','Na₂CO₃'):k+' → brak reakcji (nierozp.)'}));
 if(o.sol)settle(S,[S.ans[S.ans.length-1]],evs)}
function addSalt(S,k,amt,evs){const s=SALT[k];const c={k:s.cs,ch:s.cc,src:k,eq:amt,ps:s.as,pc:s.ac,pp:s.poly};const a={k:s.as,ch:s.ac,src:k,eq:amt,ps:s.cs,pc:s.cc,pp:0,an:1};S.ions.push(c);S.ans.push(a);
 S.solids.filter(x=>x.t==='metal'&&MET[x.M].a>MET[s.cs]?.a).forEach(x=>{if(x.eq<=.01||S.H>.01)return;const y=Math.min(x.eq,amt),sf=salt(x.M,MET[x.M].v,s.as,s.ac,s.poly);x.eq-=y;c.eq-=y;S.ppts.push({f:s.cs+'(met)',col:MET[s.cs].c,eq:y*.8,metal:1});S.ions.push({k:x.M,ch:MET[x.M].v,src:sf,eq:y,ps:s.as,pc:s.ac,pp:s.poly});
  evs.push(ev(S,[x.M,k],[sf,s.cs],'reakcja wypierania','Na metalu osadza się '+s.cs+'; barwa roztworu się zmienia.',{}))});
 settle(S,[c,a],evs);
 if(!evs.length)evs.push(ev(S,[k],[k],'roztwór soli','Sól rozpuszcza się; jony '+s.cs+' i '+s.as+' w roztworze.',{eq:pretty(k)+' → '+((s.ac/gcd(s.cc,s.ac))>1?(s.ac/gcd(s.cc,s.ac))+' ':'')+s.cs+chg(s.cc,'⁺')+' + '+((s.cc/gcd(s.cc,s.ac))>1?(s.cc/gcd(s.cc,s.ac))+' ':'')+pretty(s.as)+chg(s.ac,'⁻')}))}
function add(S,id,amt,conc){const k=KIND[id],evs=[];amt=amt||2;S.bhp=[];S.heat=0;const bad=t=>S.bhp.push(['bad',t]),ok=t=>S.bhp.push(['ok',t]),warn=t=>S.bhp.push(['warn',t]);
 const A=ACID[id];conc=!!conc||!!(A&&A.ox);
 if(k==='water'&&S.concAcid>0&&S.V<1){bad('Woda wlana do stężonego kwasu! Lżejsza woda zostaje na wierzchu, gwałtownie się nagrzewa, wrze i rozpryskuje żrący kwas. Zawsze: KWAS DO WODY, powoli, mieszając.');S.splash=3;S.heat=4;S.hot=45;S.banner=['bad','Rozprysk kwasu! Woda do kwasu to błąd',4]}
 if(k==='water'&&S.concAcid>0)S.concAcid=0;
 if(k==='acid'&&conc){if(S.V>=1&&S.OH<=.01){ok('Poprawna kolejność: kwas do wody. Ciepło rozchodzi się w całej objętości. Dodawaj małymi porcjami i mieszaj.');S.banner=['ok','Kwas do wody – poprawnie',3];if(A.n>1)S.heat=Math.max(S.heat,2)}
  else if(S.OH>.01){bad('Stężony kwas na zasadę: gwałtowne zobojętnianie wydziela dużo ciepła i może rozpryskać zlewkę. Najpierw rozcieńcz.');S.splash=2.5;S.heat=4;S.banner=['bad','Gwałtowne zobojętnianie – rozprysk',4]}
  else{S.concAcid+=amt;warn('W zlewce jest stężony kwas bez wody. Nie dolewaj do niego wody – rozcieńczanie robi się odwrotnie: kwas do wody.');}}
 if(k==='base'&&conc&&S.H>.01){bad('Stężona zasada na kwas: silnie egzotermiczne zobojętnianie, ryzyko rozprysku. Używaj roztworów rozcieńczonych i dodawaj po kropli.');S.splash=2;S.heat=4;S.banner=['bad','Gwałtowna reakcja – rozprysk',4]}
 if(k==='base'&&S.concAcid>0){bad('Zasada dodana do stężonego kwasu: gwałtowna, silnie egzotermiczna reakcja.');S.splash=2.5;S.heat=4;S.banner=['bad','Gwałtowna reakcja – rozprysk',4]}
 if(k==='metal'&&MET[id].w&&S.H>.01){bad(id+' w kwasie reaguje gwałtownie: szybkie wydzielanie H₂ może zapalić się lub wybuchnąć. Tego nie robimy w szkole.');S.splash=2.5;S.banner=['bad','Gwałtowna reakcja metalu z kwasem',4]}
 if(k==='metal'&&MET[id].w&&S.H<=.01)warn('Metale 1. i 2. grupy reagują z wodą gwałtownie – tylko pokaz nauczyciela, mały kawałek, osłona.');
 if(k==='acid'&&A.ox)warn('HNO₃ stęż.: żrący, wydziela toksyczne tlenki azotu. Tylko pokaz nauczyciela pod dygestorium.');
 if(k==='acid'&&S.V<.5&&!conc)ok('Rozcieńczony kwas – możesz dodać go do wody. Pamiętaj o okularach i rękawicach.');
 if(k==='water'){S.V+=1;const ox=S.solids.find(s=>s.t==='oxide'&&s.id==='CaO'&&s.eq>.01);
  if(ox){const o=OXI.CaO;ox.eq=0;S.OH+=amt*.4;S.heat=2;evs.push(ev(S,['CaO','H2O'],['Ca(OH)2'],'tlenek zasadowy + woda','Wapno gaszone: ogrzanie, roztwór zasadowy.',{heat:1}))}
  else evs.push(ev(S,['H2O'],['H2O'],'rozcieńczanie','Zlewka jest rozcieńczana – stężenia jonów maleją, pH zbliża się do 7.',{eq:'H₂O (rozpuszczalnik)'}));}
 else if(k==='acid')addAcid(S,id,amt,evs);else if(k==='base')addBase(S,id,amt,evs);else if(k==='metal')addMetal(S,id,amt,evs);
 else if(k==='oxide')addOxide(S,id,amt,evs);else if(k==='carb')addCarb(S,id,amt,evs);else if(k==='salt')addSalt(S,id,amt,evs);
 else if(k==='ind'){S.ind=id;evs.push(ev(S,[],[],'wskaźnik','Wskaźnik pokazuje odczyn: '+IND[id].l+' przy pH ≈ '+pH(S).toFixed(1)+'.',{eq:IND[id].l+' – barwa zależy od pH'}))}
 S.T=Math.min(99,S.T+S.heat*5+S.hot);S.hot=0;S.log.push({id,evs,T:S.T});return evs}
/* barwa wskaźnika dla pH → [r,g,b,alpha] */
const lerp=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t)),clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const UNI=[[229,38,46],[239,90,40],[246,162,30],[232,194,44],[215,217,58],[92,184,92],[33,168,154],[47,127,193],[74,75,181],[107,45,143]];
function indCol(ind,p){
 if(ind==='phph'){const t=clamp((p-8.2)/1.8,0,1);return[...lerp([230,60,140],[200,20,110],t),t*.85]}
 if(ind==='mo')return[...(p<3.1?[221,40,40]:p<4.4?lerp([230,120,30],[250,200,30],(p-3.1)/1.3):[250,200,30]),.8];
 if(ind==='btb')return[...(p<6?[234,200,40]:p<7.6?lerp([110,185,90],[40,100,200],(p-6.8)/.8<0?0:(p-6.8)/.8>1?1:(p-6.8)/.8):[40,100,200]),.75];
 const i=clamp(Math.floor(p/14*9.999),0,9);return[...UNI[i],.8]}
function liquidColor(S){let c=WATER.slice();
 const cu=S.ions.some(i=>i.k==='Cu'&&i.eq>.05),f3=S.ions.some(i=>i.k==='Fe'&&i.ch===3&&i.eq>.05),f2=S.ions.some(i=>i.k==='Fe'&&i.ch===2&&i.eq>.05);
 if(cu)c=lerp(c,ION_COL.Cu,.8);else if(f3)c=lerp(c,ION_COL.Fe3,.7);else if(f2)c=lerp(c,ION_COL.Fe2,.5);
 if(S.ind){const k=indCol(S.ind,pH(S));c=lerp(c,k.slice(0,3),k[3])}return c}
/* ZALEŻNOŚCI ZEWNĘTRZNE (jedyne miejsca, gdzie moduł sięga poza siebie) */
const DEPS=[['CHE.EQUILIBRIUM.weakAcidPH / bufferPH / titrationPH','pH słabych kwasów, bufor, miareczkowanie',()=>!!(C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH),'wzór wewnętrzny LAB'],['CHE.COLORS (rgb/hex jonów i osadów)','barwy Cu²⁺, Fe³⁺, AgCl…',()=>!!(C.COLORS&&(C.COLORS.rgb||C.COLORS.get)),'tabele ION_COL / INS'],['CHE.DATA.METAL_SERIES / INDICATORS / SOLUBILITY','szereg aktywności, zakresy wskaźników, Ksp',()=>!!(C.DATA&&C.DATA.METAL_SERIES),'wbudowane MET / IND / INS'],['zmienne CSS / tokeny silnika (--panel→--surface)','wygląd paneli',()=>true,'fallback w module']];
const OWN=['MET (aktywność, wartościowość, barwa metali)','ACID / BASE (kwasy, zasady, moc)','OXI / CARB / SALT (tlenki, węglany, sole)','INS (reguły rozpuszczalności i barwy osadów)','ION_COL (barwy jonów)','IND + indCol (wskaźniki i ich barwy)'];

C.LAB={version:'1.02',DEPS,OWN,GROUPS,MET,KIND,ACID,BASE,OXI,CARB,SALT,IND,INS,ION_COL,UNI,
  newState,add,pH,liquidColor,indCol,balance,parse,pretty,salt,
  tables:null, engineBound:false};
C.LAB.tables={MET,ACID,BASE,OXI,CARB,SALT,IND,INS,ION_COL,UNI,GROUPS};
/** Podpięcie pod silnik główny: DATA / COLORS / EQUILIBRIUM (bez kopiowania logiki). */
C.LAB.syncFromEngine=function(){
  const D=(C.DATA||{}), Col=C.COLORS, Eq=C.EQUILIBRIUM, Rx=C.REACTION;
  const hexRgb=h=>{if(!h||typeof h!=='string')return null;const m=/^#?([0-9a-f]{6})$/i.exec(h.trim());if(!m)return null;const n=parseInt(m[1],16);return[(n>>16)&255,(n>>8)&255,n&255]};
  const fromCol=id=>{try{if(!Col)return null;if(typeof Col.rgb==='function'){const a=Col.rgb(id);if(Array.isArray(a)&&a.length>=3)return a.map(Number)}if(typeof Col.at==='function'){const a=Col.at(id);if(Array.isArray(a)&&a.length>=3)return a.map(Number)}if(typeof Col.hex==='function')return hexRgb(Col.hex(id));if(typeof Col.get==='function'){const r=Col.get(id);if(r&&r.hex)return hexRgb(r.hex)}}catch(_){}return null};
  const subLabel=id=>{
    try{
      const S=D.SUBSTANCES||{};
      const row=S[id]||S[String(id).replace(/₀-₉/g,(_,i,s)=>s)]||null;
      if(!row)return null;
      const name=row.name||row.label||row.title;
      const f=row.formula||id;
      if(name&&f&&name!==f)return pretty?pretty(f)+' — '+name:f+' — '+name;
      return name||f||null;
    }catch(_){return null}
  };
  /* szereg aktywności */
  if(Array.isArray(D.METAL_SERIES)&&D.METAL_SERIES.length){
    const rank={};D.METAL_SERIES.forEach((sym,i)=>{rank[sym]=D.METAL_SERIES.length-i});
    Object.keys(MET).forEach(k=>{if(rank[k]!=null)MET[k].a=rank[k]-(rank.H!=null?rank.H:0)});
  }
  /* barwy */
  const ionMap={Cu:'ion-cu2',Fe2:'ion-fe2',Fe3:'ion-fe3'};
  Object.keys(ionMap).forEach(k=>{const rgb=fromCol(ionMap[k]);if(rgb)ION_COL[k]=rgb});
  const pptMap={'Ag|Cl':'ppt-agcl','Ba|SO4':'ppt-baso4','Ca|CO3':'ppt-caco3','Cu|OH':'ppt-cu-oh-2','Fe|OH':'ppt-fe-oh-3','Zn|OH':'ppt-zn-oh-2','Al|OH':'ppt-al-oh-3','Mg|OH':'ppt-zn-oh-2'};
  Object.keys(pptMap).forEach(k=>{const rgb=fromCol(pptMap[k]);if(rgb&&INS[k])INS[k][0]=rgb});
  const metalCol={Cu:'metal-cu',Ag:'metal-ag',Fe:'metal-fe',Zn:'metal-zn',Al:'metal-al',Mg:'metal-mg'};
  Object.keys(metalCol).forEach(k=>{const rgb=fromCol(metalCol[k]);if(rgb&&MET[k])MET[k].c=rgb});
  /* Ksp → INS */
  const sol=D.SOLUBILITY||{};
  Object.keys(sol).forEach(f=>{
    const row=sol[f]; if(!row||!(row.Ksp>0)||row.Ksp>1e-3)return;
    const map={AgCl:'Ag|Cl',CaCO3:'Ca|CO3',BaSO4:'Ba|SO4',CaSO4:'Ca|SO4'};
    const key=map[f]; if(!key)return;
    if(!INS[key])INS[key]=[[250,250,250],f];
  });
  /* wskaźniki */
  const byName={};
  (D.INDICATORS||[]).forEach(x=>{byName[String(x.name||'').toLowerCase()]=x});
  const mapInd={phph:'fenoloftaleina',mo:'oranż metylowy',btb:'błękit bromotymolowy'};
  Object.keys(mapInd).forEach(id=>{
    const src=byName[mapInd[id]]; if(!src||!IND[id])return;
    IND[id].lo=src.lo; IND[id].hi=src.hi; IND[id].fromEngine=true;
  });
  /* etykiety odczynników z SUBSTANCES */
  const applyLab=(table)=>{
    if(!table)return;
    Object.keys(table).forEach(id=>{
      const lab=subLabel(id); if(!lab)return;
      if(table[id]&&typeof table[id]==='object'){
        if(!table[id].l0)table[id].l0=table[id].l;
        table[id].l=lab;
        table[id].fromEngine=true;
      }
    });
  };
  applyLab(ACID); applyLab(BASE); applyLab(OXI); applyLab(CARB); applyLab(SALT);
  Object.keys(MET).forEach(id=>{
    const lab=subLabel(id); if(!lab||!MET[id])return;
    /* metale w GROUPS budowane z klucza — etykieta w controls idzie z MET przez GROUPS map */
  });
  /* przebuduj etykiety metali w GROUPS */
  GROUPS.forEach(g=>{
    if(g[0]!=='metal')return;
    const ob=g[2];
    Object.keys(ob).forEach(id=>{
      const lab=subLabel(id);
      if(lab)ob[id].l=lab+(MET[id]&&MET[id].w?' (reaguje z wodą – pokaz)':'');
      else if(MET[id]&&MET[id].w)ob[id].l=id+' (reaguje z wodą – pokaz)';
    });
  });
  /* indeks reakcji silnika: klucz = posortowane substraty */
  const rxIndex={};
  const asciiForm=f=>String(f||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>String('₀₁₂₃₄₅₆₇₈₉'.indexOf(c))).replace(/\s/g,'');
  try{
    const list=(Rx&&typeof Rx.list==='function')?Rx.list():Object.keys(D.REACTIONS||{}).map(id=>({id,...((D.REACTIONS||{})[id]||{}),...(D.REACTION_DATA||{})[id]}));
    (list||[]).forEach(r=>{
      if(!r||!r.id)return;
      const mats=(r.reactants||[]).map(x=>asciiForm(x.formula||x.id||x)).filter(Boolean).sort();
      if(!mats.length)return;
      rxIndex[mats.join('+')]=r;
      rxIndex[mats.map(s=>s.toLowerCase()).join('+')]=r;
      rxIndex[mats.map(s=>s.replace(/\d+/g,'')).join('+')]=r;
    });
  }catch(_){}
  C.LAB.rxIndex=rxIndex;
  C.LAB.engineBound={
    equilibrium:!!(Eq&&Eq.weakAcidPH),
    colors:!!Col,
    data:!!D.METAL_SERIES,
    indicators:!!(D.INDICATORS&&D.INDICATORS.length),
    substances:!!(D.SUBSTANCES&&Object.keys(D.SUBSTANCES).length),
    reaction:!!(Rx&&typeof Rx.get==='function')||!!(D.REACTIONS&&Object.keys(D.REACTIONS).length),
    rxIndexSize:Object.keys(rxIndex).length,
    at:Date.now()
  };
  try{if(Col&&Array.isArray(Col.consumers)&&!Col.consumers.includes('lab-beaker-v102'))Col.consumers.push('lab-beaker-v102','reakcje-kwasu-v03')}catch(_){ }
  return C.LAB.engineBound;
};

/** Wzbogać zdarzenia LAB o równanie/obserwację/BHP z CHE.REACTION, gdy da się zmapować substraty. */
C.LAB.enrichEvents=function(S,evs){
  if(!Array.isArray(evs)||!evs.length)return evs;
  const idx=C.LAB.rxIndex||{};
  const Rx=C.REACTION;
  const norm=f=>{
    let s=String(f||'');
    s=s.replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>String('₀₁₂₃₄₅₆₇₈₉'.indexOf(c)));
    s=s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,'');
    s=s.replace(/\(aq\)|\(s\)|\(g\)|\(l\)/gi,'');
    s=s.replace(/[↑↓·]/g,'').replace(/\s+/g,'');
    s=s.replace(/[⁺⁻±]/g,'');
    return s;
  };
  const keyOf=mats=>mats.map(norm).filter(Boolean).sort().join('+');
  const guessIds=(mats)=>{
    const a=mats.map(norm);
    if(a.length<2)return [];
    const [x,y]=a.length===2?a:[a[0],a[1]];
    const low=s=>s.toLowerCase();
    const combos=[
      low(x)+low(y), low(y)+low(x),
      low(x)+low(y.replace(/[0-9]/g,'')), low(y.replace(/[0-9]/g,''))+low(x),
      /* konwencje katalogu */
      low(x)+'Hcl', low(x)+'hcl', low(x)+'H2so4', low(x)+'h2so4',
      low(x)+'Hno3', low(x)+'hno3',
      'hcl'+low(y), 'h2so4'+low(y), 'hno3'+low(y)
    ];
    /* specjalne mapowania */
    const set=new Set(a.map(low));
    if(set.has('hcl')&&set.has('naoh'))combos.push('hclNaOH','hclnaoh');
    if(set.has('h2so4')&&set.has('naoh'))combos.push('h2so4Naoh','h2so4naoh');
    if(set.has('caco3')&&set.has('hcl'))combos.push('caco3Hcl','caco3hcl');
    if(set.has('cuo')&&set.has('h2so4'))combos.push('cuoH2so4','cuoh2so4');
    if(set.has('cuo')&&set.has('hcl'))combos.push('cuoHcl','cuohcl');
    if(set.has('agno3')&&set.has('hcl'))combos.push('agno3Hcl','agno3hcl');
    if(set.has('agno3')&&set.has('nacl'))combos.push('agno3Nacl','agno3nacl');
    if(set.has('mg')&&set.has('hcl'))combos.push('mgHcl','mghcl');
    if(set.has('zn')&&set.has('hcl'))combos.push('znHcl','znhcl');
    if(set.has('fe')&&set.has('hcl'))combos.push('feHcl','fehcl');
    if(set.has('cu')&&set.has('hno3'))combos.push('cuHno3','cuhno3');
    if(set.has('cao')&&set.has('h2o'))combos.push('caoH2o');
    if(set.has('na2o')&&set.has('h2o'))combos.push('na2oH2o');
    if(set.has('so3')&&set.has('h2o'))combos.push('so3H2o','so3h2o');
    return combos;
  };
  evs.forEach(e=>{
    if(!e||e.engineId)return;
    const left=(String(e.eq||'').split('→')[0]||'').split('->')[0];
    const mats=left.split('+').map(s=>s.replace(/^\s*\d+(\.\d+)?\s*/,'').trim()).filter(Boolean);
    if(mats.length<2)return;
    const key=keyOf(mats);
    let r=idx[key];
    if(!r&&Rx&&typeof Rx.get==='function'){
      for(const g of guessIds(mats)){
        const hit=Rx.get(g); if(hit){r=hit;break}
      }
    }
    if(!r){
      /* przeszukaj cały indeks: podzbiór kluczowych formuł */
      const need=new Set(mats.map(norm).map(s=>s.toLowerCase()));
      for(const [k,row] of Object.entries(idx)){
        const parts=k.split('+').map(s=>s.toLowerCase());
        if(need.size&&[...need].every(n=>parts.some(p=>p===n||p.replace(/\d+/g,'')===n.replace(/\d+/g,'')))){r=row;break}
      }
    }
    if(!r)return;
    e.engineId=r.id;
    if(r.observation){
      if(!e.obs||e.obs.length<12)e.obs=r.observation;
      else if(e.obs.indexOf(r.observation)<0)e.obs=e.obs+' · '+r.observation;
    }
    if(r.type&&(!e.type||e.type==='roztwór kwasu'||e.type==='roztwór zasady'))e.type=r.type;
    if(Array.isArray(r.safety)&&r.safety.length){
      if(!e.warn)e.warn=r.safety[0];
      e.safety=r.safety.slice();
    }
    try{
      if(Rx&&typeof Rx.equation==='function'){const eq=Rx.equation(r.id); if(eq)e.eqEngine=eq;}
      else if(r.reactants&&r.products){
        const fmt=side=>side.map(x=>(x.coef&&x.coef!==1?x.coef+' ':'')+(x.formula||'')).join(' + ');
        e.eqEngine=fmt(r.reactants)+' → '+fmt(r.products);
      }
    }catch(_){}
  });
  return evs;
};

/* Opakuj add: po każdej porcji odczynnika wzbogacaj zdarzenia z katalogu REACTION */
(function(){
  if(C.LAB._addWrapped)return;
  const _add=C.LAB.add;
  if(typeof _add!=='function')return;
  C.LAB.add=function(S,id,amt,conc){
    const evs=_add(S,id,amt,conc);
    try{C.LAB.enrichEvents(S,evs)}catch(_){}
    return evs;
  };
  C.LAB._addWrapped=true;
})();

/** Wspólne API pH — ten sam silnik dla LAB, titration-merged i paneli lekcji */
C.LAB.phAPI={
  version:'1.02',
  source:()=> (C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH)?'CHE.EQUILIBRIUM+LAB.state':'LAB.internal',
  fromState:function(S){return (C.LAB.pH||function(){return 7})(S)},
  weakAcid:function(c,Ka){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.weakAcidPH)return Eq.weakAcidPH(c,Ka==null?1.8e-5:Ka);c=Number(c);Ka=Number(Ka==null?1.8e-5:Ka);return (c>0&&Ka>0)?-Math.log10(Math.sqrt(Ka*c)):7},
  buffer:function(pKa,base,acid){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.bufferPH)return Eq.bufferPH(pKa,base,acid);return Number(pKa)+Math.log10(Number(base)/Number(acid))},
  titration:function(opt){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.titrationPH)return Eq.titrationPH(opt||{});return NaN},
  strongNeutralization:function(aM,aV,bM,bV){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.strongNeutralizationPH)return Eq.strongNeutralizationPH(aM,aV,bM,bV);return NaN}
};
if(C.EQUILIBRIUM&&!C.EQUILIBRIUM.fromLabState){
  C.EQUILIBRIUM.fromLabState=function(S){return C.LAB.phAPI.fromState(S)};
}


/* pH: preferuj EQUILIBRIUM.weakAcidPH / bufferPH gdy silnik jest */
(function(){
  const _pH=pH;
  C.LAB.pH=function(S){
    try{
      const Eq=C.EQUILIBRIUM; if(!Eq)return _pH(S);
      const k=0.1/Math.max(S.V,.3), OHn=S.OH+0.01*S.carbSol, Hn=S.H;
      const HA=Math.min(S.weakH||0,Math.max(Hn,0)), sH=Math.max(0,Hn-HA), A=S.weakA||0;
      if(OHn>Hn+1e-3){const p=14+Math.log10(k*(OHn-Hn));const cap=S.bases.length&&S.bases.every(b=>b==='Ca(OH)2')?12.6:14;return Math.min(cap,p)}
      if(sH>1e-4)return Math.max(-1,-Math.log10(k*sH));
      if(HA>1e-4&&A>1e-4&&typeof Eq.bufferPH==='function'){
        const v=Eq.bufferPH(4.745, k*A, k*HA); if(isFinite(v))return v;
      }
      if(HA>1e-4&&A<=1e-4&&typeof Eq.weakAcidPH==='function'){
        const v=Eq.weakAcidPH(k*HA,1.8e-5); if(isFinite(v))return v;
      }
      if(A>1e-4&&HA<=1e-4&&typeof Eq.bufferPH==='function'){
        /* hydroliza soli słabego kwasu — przybliżenie jak wcześniej */
        return 7+.5*(4.745+Math.log10(k*A));
      }
    }catch(_){}
    return _pH(S);
  };
  /* panele i silnik regułowy wołają lokalne pH — podmień referencję */
})();

/* local pH already uses EQUILIBRIUM when present */


/* ---------- SESJA (wspólny stan) + PANELE (osobno osadzalne) ---------- */
/* ---------- STANOWISKA MULTI-LAB v0.71 ---------- */
const HEAT={version:'0.74',ambient:25,defaultLoss:0.018,clampMin:-50,clampMax:2400,step:0.5,
  SI:{power:'W',energy:'J',mass:'kg',cp:'J/(kg·K)',flow:'kg/s',area:'m²',U:'W/(m²·K)',temperature:'°C'},
  transfer:function(q,mass,cp){return mass>0&&cp>0?q/(mass*cp):0},
  loss:function(U,A,T,ambient){return Math.max(0,(U||0)*(A||0)*(T-ambient))},
  exchanger:function(Tin,Tload,flow,UA,cp){const m=Math.max(0,flow||0),c=cp||4180,cap=m*c;if(cap<=0||UA<=0)return{q:0,Tout:Tin,NTU:0,eps:0};const NTU=UA/cap,eps=1-Math.exp(-NTU);const q=Math.max(0,cap*eps*(Tload-Tin));return{q:q,Tout:Tin+(q/cap),NTU:NTU,eps:eps,capacityRate:cap}},
  net:function(source,cooling,loss,T,ambient){return (source||0)-(cooling||0)-((T-ambient)*(loss||0))}
};
const GASPHYS={version:'0.74',R:8.314462618,standardT:273.15+25,standardP:101325,MW:{CO2:.04401,CO:.02801,H2O:.01801528,O2:.0319988,H2:.002016,CH4:.01604,C3H8:.04410,Mg:.024305,MgO:.040304,fuel:.044},
  saturationWaterPa(Tc){const T=Math.max(1,Math.min(100,Number(Tc)||25));const A=8.07131,B=1730.63,C=233.426;return Math.pow(10,A-B/(C+T))*133.322368;},
  waterPhase(Tc,pPa,waterMol){const ps=Math.min(Math.max(0,Number(pPa)||101325),101325),sat=this.saturationWaterPa(Tc);const maxVap=Math.max(0,ps>0?waterMol*Math.min(1,sat/ps):waterMol);return {vaporMol:maxVap,liquidMol:Math.max(0,waterMol-maxVap),vaporFraction:waterMol>0?maxVap/waterMol:0};},
  mixtureMolMass(moles){let n=0,m=0;Object.keys(moles||{}).forEach(k=>{const x=Math.max(0,Number(moles[k])||0),mw=this.MW[k]||this.MW.fuel;n+=x;m+=x*mw});return n?m/n:0;},
  idealVolume(nMol,Tc,pPa){return Math.max(0,nMol)*this.R*(Math.max(-273.14,Number(Tc)||25)+273.15)/Math.max(1000,Number(pPa)||101325);}};
const SCENARIOS={gasCapture:{id:'gasCapture',title:'Zbieranie gazu',station:'gas',start:'w',panels:['controls','beaker','gasLine','gasTrap','gasAnalysis','measureChart','workflow','stationBoard']},titration:{id:'titration',title:'Miareczkowanie modelowe',station:'titration',start:'w',panels:['titration','measureChart','comparisonChart','workflow']},thermal:{id:'thermal',title:'Ogrzewanie i chłodzenie',station:'thermal',start:'w',panels:['stationBoard','flask','cooler','thermal','temp','measureChart','workflow']},precipitation:{id:'precipitation',title:'Strącanie osadu',station:'precipitation',start:'w',panels:['controls','beaker','obs','reactionTable','measureChart','workflow']},combustion:{id:'combustion',title:'Spalanie dydaktyczne',station:'combustion',start:'w',panels:['combustion','measureChart','comparisonChart','workflow']}};
const STATIONS={
 gas:{id:'gas',title:'Zbieranie i analiza gazu',nodes:[
  ['source','Źródło reakcji','reaction',[],['reaction']],['line','Przewód gazowy','gasFlow',['gasFlow'],['gasFlow']],['receiver','Odbiornik gazu','gasVolume',['gasVolume'],['gasVolume']],['analysis','Analiza gazu','interpretation',['gas'],['interpretation']],['chart','Wykres','measurement',['measurement'],['measurement']]
 ],edges:[['source','reaction','line','gasFlow'],['line','gasFlow','receiver','gasVolume'],['receiver','gasVolume','analysis','gas'],['receiver','gasVolume','chart','measurement']]},
 titration:{id:'titration',title:'Miareczkowanie',nodes:[
  ['sample','Próbka','pH',[],['pH']],['titrant','Titrant','titrant',[],['titrant']],['station','Stacja miareczkowania','titrationPH',['titrant'],['titrationPH']],['chart','Krzywa pH(V)','measurement',['measurement'],['measurement']]
 ],edges:[['titrant','titrant','station','titrant'],['station','titrationPH','chart','measurement'],['sample','pH','chart','measurement']]},
 thermal:{id:'thermal',title:'Ogrzewanie i chłodzenie',nodes:[
  ['source','Źródło ciepła','heatSource',[],['heatSource']],
  ['vessel','Naczynie','temperature',['heatSource','coolingPower'],['temperature']],
  ['cooler','Chłodnica / wymiennik','coolingPower',['temperature'],['coolingPower','coolantOutletTemperature']],
  ['chart','Wykres T(t)','measurement',['temperature','coolantOutletTemperature'],['measurement']]
 ],edges:[['source','heatSource','vessel','heatSource'],['vessel','temperature','cooler','temperature'],['cooler','coolingPower','vessel','coolingPower'],['vessel','temperature','chart','temperature'],['cooler','coolantOutletTemperature','chart','coolantOutletTemperature']]},
 precipitation:{id:'precipitation',title:'Reakcja strącania',nodes:[
  ['reactants','Odczynniki','reaction',[],['reaction']],['vessel','Naczynie','reaction',['reaction'],['reaction']],['solid','Osad','observation',['observation'],['observation']],['chart','Dziennik obserwacji','measurement',['measurement'],['measurement']]
 ],edges:[['reactants','reaction','vessel','reaction'],['vessel','reaction','solid','observation'],['solid','observation','chart','measurement']]},
 combustion:{id:'combustion',title:'Spalanie — dopływ gazu, powietrza i skład paliwa',nodes:[
  ['fuel','Paliwo','fuel',[],['fuel']],
  ['air','Dopływ powietrza','air',[],['air']],
  ['composition','Skład C/H/O','composition',[],['composition']],
  ['mixer','Mieszanie w palniku','mixture',['fuel','air','composition'],['mixture']],
  ['flame','Płomień / spalanie','energy',['mixture'],['energy','products','temperature']],
  ['products','Produkty spalania','products',['products'],['products']],
  ['chart','Temperatura i energia','measurement',['measurement'],['measurement']]
 ],edges:[['fuel','fuel','mixer','fuel'],['air','air','mixer','air'],['composition','composition','mixer','composition'],['mixer','mixture','flame','mixture'],['flame','products','products','products'],['flame','energy','chart','measurement']]}
};
function createWorkflow(lab){
 const wf={version:'0.74',nodes:[],edges:[],bindings:{},subscriptions:[],active:false,
  addNode(id,type,label,ports){if(!id)return null;const old=wf.nodes.find(n=>n.id===id);if(old)return old;const p=ports||{};const n={id,type:type||id,label:label||id,ports:{input:Array.isArray(p.input)?p.input.slice():[],output:Array.isArray(p.output)?p.output.slice():[]}};wf.nodes.push(n);return n},
  removeNode(id){wf.disconnectNode(id);delete wf.bindings[id];wf.nodes=wf.nodes.filter(n=>n.id!==id);return true},
  connect(from,fromPort,to,toPort){if(!wf.nodes.some(n=>n.id===from)||!wf.nodes.some(n=>n.id===to))return null;const a=wf.nodes.find(n=>n.id===from),b=wf.nodes.find(n=>n.id===to);if(!a.ports.output.includes(fromPort)||!b.ports.input.includes(toPort))return null;const e={from,fromPort,to,toPort};if(!wf.edges.some(x=>x.from===from&&x.to===to&&x.fromPort===fromPort&&x.toPort===toPort))wf.edges.push(e);return e},
  disconnectNode(id){wf.edges=wf.edges.filter(e=>e.from!==id&&e.to!==id)},
  clear(){wf.deactivate();wf.nodes=[];wf.edges=[];wf.bindings={}},
  bind(id,module){if(!wf.nodes.some(n=>n.id===id)||!module)return false;wf.bindings[id]=module;return true},
  loadPreset(name){const d=STATIONS[name];if(!d)return false;wf.clear();d.nodes.forEach(n=>wf.addNode(n[0],n[0],n[1],{input:n[3],output:n[4]}));d.edges.forEach(e=>wf.connect(e[0],e[1],e[2],e[3]));const v=wf.validate();if(!v.ok)return false;wf.activate();lab.emit('workflow',wf.snapshot());return true},
  validate(){const errors=[];const connectedIn=new Set(),connectedOut=new Set();wf.edges.forEach(e=>{const a=wf.nodes.find(n=>n.id===e.from),b=wf.nodes.find(n=>n.id===e.to);if(!a)errors.push('brak źródła '+e.from);if(!b)errors.push('brak celu '+e.to);if(a&&!a.ports.output.includes(e.fromPort))errors.push('brak wyjścia '+e.from+'.'+e.fromPort);if(b&&!b.ports.input.includes(e.toPort))errors.push('brak wejścia '+e.to+'.'+e.toPort);connectedOut.add(e.from+'|'+e.fromPort);connectedIn.add(e.to+'|'+e.toPort)});wf.nodes.forEach(n=>{if(!n.ports.input.length&&!n.ports.output.length)errors.push('węzeł bez portów '+n.id)});return{ok:!errors.length,errors,nodes:wf.nodes.length,edges:wf.edges.length,closed:!errors.length}},
  routeValue(port){const S=lab.S||{};const cb=lab.combustionState||{};const pHnow=pH(S);if(port==='reaction'||port==='observation')return {state:S,last:lab.last};if(port==='gasFlow')return {t:lab.t,gas:S.gas,gasT:S.gasT,volume:S.V};if(port==='gasVolume')return {gas:S.gas,volume:Number(S.gasT||0)};if(port==='temperature')return {t:lab.t,value:S.T,unit:'°C'};if(port==='cooledTemperature')return {t:lab.t,value:25+(S.T-25)*.35,unit:'°C'};if(port==='pH')return {t:lab.t,value:pHnow,unit:'pH'};if(port==='titrationPH')return {t:lab.t,value:pHnow,unit:'pH'};if(port==='fuel')return {fuel:cb.fuel||lab.inputs.fuel||'CH4',gasFlow:Number(cb.gasFlow??55)};if(port==='air')return {airFlow:Number(cb.airFlow??100),oxygenFraction:.21};if(port==='composition')return {C:Number(cb.C??75),H:Number(cb.H??25),O:Number(cb.O??0)};if(port==='mixture')return {fuel:cb.fuel||'CH4',gasFlow:Number(cb.gasFlow??0),airFlow:Number(cb.airFlow??0),composition:{C:Number(cb.C??75),H:Number(cb.H??25),O:Number(cb.O??0)}};if(port==='energy')return {value:Number(cb.powerW??0),unit:'W',temperature:Number(cb.temperature??25),energy:Number(cb.energyJ??0),energyUnit:'J'};if(port==='products')return {products:Array.isArray(cb.products)?cb.products.slice():[]};if(port==='measurement')return lab.measurements[lab.measurements.length-1]||null;return lab.inputs[port]??null},
  run(data){let delivered=0;wf.edges.forEach(e=>{const target=wf.bindings[e.to]||lab;if(target&&typeof target.receive==='function'){target.receive(e.toPort,data);delivered++}});lab.emit('workflowRun',{value:data,delivered,graph:wf.snapshot()});return{value:data,delivered}},
  activate(){wf.deactivate();if(!wf.validate().ok)return false;const events={reaction:'add',observation:'add',gasFlow:'tick',gasVolume:'tick',temperature:'tick',cooledTemperature:'tick',pH:'tick',titrationPH:'tick',measurement:'measurement',fuel:'combustion',oxidant:'combustion',air:'combustion',composition:'combustion',mixture:'combustion',energy:'combustion',products:'combustion'};wf.edges.forEach(e=>{const ev=events[e.fromPort];if(!ev)return;const off=lab.on(ev,()=>{const data=wf.routeValue(e.fromPort);const target=wf.bindings[e.to]||lab;if(target&&typeof target.receive==='function')target.receive(e.toPort,data);lab.emit('route',{edge:e,data})});wf.subscriptions.push(off)});wf.active=true;return true},
  deactivate(){wf.subscriptions.splice(0).forEach(f=>{try{f()}catch(_){}});wf.active=false},
  snapshot(){return JSON.parse(JSON.stringify({version:wf.version,nodes:wf.nodes,edges:wf.edges,active:wf.active}))},
  restore(x){if(!x||!Array.isArray(x.nodes)||!Array.isArray(x.edges))return false;wf.deactivate();wf.nodes=JSON.parse(JSON.stringify(x.nodes));wf.edges=JSON.parse(JSON.stringify(x.edges));wf.bindings={};if(x.active)wf.activate();return wf.validate().ok}
 };return wf
}
const SESS={},STARTS={w:['z wodą'],e:['pusta zlewka'],hs:['stężony H₂SO₄ w zlewce','H2SO4','stęż. H₂SO₄'],hc:['stężony HCl w zlewce','HCl','stęż. HCl'],nb:['stężony NaOH w zlewce','NaOH','stęż. NaOH']};
const PNAMES=['selfTest','chemistryAudit','coreConsistencyAudit','gasCoreAudit','gasParallelAudit','reactionCore','precipitation','graphAudit','scenarios','stationBoard','experimentIO','controls','beaker','gasTrap','flask','testTube','cooler','gasLine','pHmeter','thermometer','effectLab','library','paper','pipette','balance','molTank','roundFlask','volFlask','funnel','petri','evapDish','bhp','seq','obs','eq','ph','temp','steps','log','reactionTable','measureChart','comparisonChart','titration','combustion','thermal','splash','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureStation','reactionCatalog','linkView','workflow'];/* v0.80: pakiet gazowy: próbka, separacja, absorpcja, niepewność i bilans */
const TITLES={selfTest:'Autodiagnostyka modułu',graphAudit:'Audyt grafów',scenarios:'Scenariusze doświadczeń',experimentIO:'Zapis i odtworzenie eksperymentu',stationBoard:'Stanowiska Multi-Lab',workflow:'Przepływ stanowiska',src:'Źródła danych modułu',flask:'Kolba reakcyjna',testTube:'Probówka',cooler:'Chłodnica',pHmeter:'pH-metr cyfrowy',library:'Biblioteka elementów',paper:'Papierki wskaźnikowe',pipette:'Pipeta',balance:'Waga',molTank:'Zbiornik cząsteczek',roundFlask:'Kolba okrągłodenna',volFlask:'Kolba miarowa',funnel:'Lejek',petri:'Szalka Petriego',evapDish:'Parownica',effectLab:'Laboratorium efektów',thermometer:'Termometr',gasLine:'Przewód gazowy',linkView:'Przepływ między modułami',controls:'Odczynniki',beaker:'Zlewka',bhp:'BHP',seq:'Kolejność dodawania',obs:'Obserwacja',eq:'Równanie reakcji',ph:'pH i wskaźniki',temp:'Temperatura w czasie',steps:'pH w kolejnych krokach',log:'Dziennik',reactionTable:'Tabela reakcji',measureChart:'Wykres pomiaru',gasTrap:'Odbiornik gazu',combustion:'Stanowisko spalania',thermal:'Stanowisko cieplne',splash:'Zdarzenie: rozprysk',titration:'Miareczkowanie',gasAnalysis:'Analiza gazu',gasMeasurement:'Pomiar próbki gazu',gasCompare:'Porównanie gazu przed i po kondensacji',gasSample:'Pobieranie próbki gazu',gasSeparator:'Separacja gazu i kondensatu',gasAbsorber:'Absorber składnika gazowego',gasUncertainty:'Niepewność pomiaru gazu',gasBalance:'Bilans gazowy doświadczenia',measureStation:'Stacja pomiarowa',reactionCatalog:'Katalog reakcji',comparisonChart:'Porównanie pomiarów',reactionCore:'Wspólny rdzeń reakcji',chemistryAudit:'Audyt wspólnego rdzenia',coreConsistencyAudit:'Końcowy audyt wspólnego modelu',gasCoreAudit:'Audyt wspólnego modelu gazu',gasParallelAudit:'Audyt równoległych modeli gazu',precipitation:'Stanowisko strącania'};
const FULL={controls:1,bhp:1,seq:1,eq:1,log:1};
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const sty='padding:10px 8px;border-radius:10px;border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a);font:600 14px Inter,system-ui;min-height:44px;';
const css=(c,a)=>'rgba('+Math.round(c[0])+','+Math.round(c[1])+','+Math.round(c[2])+','+(a==null?1:a)+')';
const LBCSS=`
/* CHE.LAB bridge → tokeny silnika głównego */
:root{
  --surface:var(--panel,#ffffff);
  --surface-soft:var(--panel-2,#f1f5f8);
  --border:var(--line,#d5dee6);
  --border-strong:var(--line-2,#b8c5d1);
  --text:var(--tx,#17212b);
  --text-muted:var(--mut,#53616e);
  --accent:var(--v,#b85f00);
  --accent-soft:rgba(184,95,0,.12);
  --sans:var(--sans,'Inter',system-ui,sans-serif);
}
html[data-theme="dark"]{
  --surface:var(--panel,#1e293b);
  --surface-soft:var(--panel-2,#0f172a);
  --border:var(--line,#334155);
  --text:var(--tx,#e2e8f0);
  --text-muted:var(--mut,#94a3b8);
  --accent:var(--c,#2dd4bf);
  --accent-soft:rgba(45,212,191,.12);
}

.lb-h{margin:0 0 8px;font:800 11px var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.lb-sub{margin:12px 0 5px;font:700 11px var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.05em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.lb-chips{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.lb-chip,.lb-btn{appearance:none;-webkit-appearance:none;box-sizing:border-box;min-height:36px;padding:6px 13px;border:1px solid var(--border-strong,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a);font:600 13px/1.2 var(--sans,Inter,system-ui,sans-serif);cursor:pointer;transition:background .15s,border-color .15s}
.lb-chip{border-radius:999px}.lb-btn{border-radius:10px}
.lb-chip.sm{min-height:30px;padding:3px 11px;font-size:12px}
.lb-chip:hover,.lb-btn:hover{border-color:var(--accent,#0d6868)}
.lb-chip[aria-pressed=true],.lb-btn.pri{background:var(--accent,#0d6868);border-color:var(--accent,#0d6868);color:#fff}
.lb-chip:focus-visible,.lb-btn:focus-visible,.lb-sels select:focus-visible{outline:2px solid var(--accent,#0d6868);outline-offset:2px}
.lb-act{display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-top:12px}.lb-act .lb-btn{min-height:44px;font-size:14px;font-weight:700}
.lb-sels{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.lb-sels label{display:block;margin-bottom:3px;font:700 11px var(--sans,system-ui);color:var(--text-muted,#64748b)}
.lb-sels select{width:100%;box-sizing:border-box;min-height:42px;padding:6px 8px;border-radius:10px;border:1px solid var(--border-strong,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a);font:600 14px var(--sans,system-ui)}
.lb-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(128px,1fr));gap:8px}
.lb-tile{min-width:0;padding:9px 11px;border:1px solid var(--border,#e2e8f0);border-radius:12px;background:var(--surface-soft,#f1f5f9)}
.lb-tile small{display:block;margin-bottom:2px;font:700 10px var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.lb-tile b{display:flex;align-items:center;flex-wrap:wrap;gap:3px 6px;font:700 13.5px/1.3 var(--sans,system-ui);overflow-wrap:anywhere}
.lb-sw{flex:0 0 16px;width:16px;height:16px;border-radius:5px;border:1px solid rgba(0,0,0,.28);display:inline-block}
.lb-call{margin-top:8px;padding:9px 12px;border-left:4px solid var(--accent,#0d6868);border-radius:4px 12px 12px 4px;background:var(--accent-soft,#e6f2f1);font-size:13px;line-height:1.5;color:var(--text,#0f172a)}
.lb-call:first-child{margin-top:0}.lb-call b{margin-right:4px}
.lb-call.bad{border-color:#b91c1c;background:rgba(185,28,28,.09)}.lb-call.bad b{color:#b91c1c}
.lb-call.warn{border-color:#b45309;background:rgba(180,83,9,.10)}.lb-call.warn b{color:#b45309}
.lb-call.ok{border-color:#15803d;background:rgba(21,128,61,.09)}.lb-call.ok b{color:#15803d}
.lb-note{margin-top:6px;font-size:12px;line-height:1.45;color:var(--text-muted,#64748b)}
.lb-eqbox{margin-top:6px;padding:10px 12px;border:1px solid var(--border,#e2e8f0);border-radius:12px;background:var(--surface-soft,#f1f5f9)}.lb-eqbox:first-child{margin-top:0}
.lb-eq{font:700 15px/1.4 var(--mono,ui-monospace,Menlo,monospace);color:var(--text,#0f172a);overflow-wrap:anywhere}
.lb-pill{display:inline-block;padding:3px 10px;border-radius:999px;background:var(--accent-soft,#e6f2f1);font:600 13px var(--sans,system-ui)}
.lb-arr{color:var(--text-muted,#64748b)}
.lb-phv{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px}.lb-phv b{font:800 26px var(--mono,ui-monospace,Menlo,monospace)}.lb-phv span{font-size:13px;font-weight:700;color:var(--text-muted,#64748b)}
.lb-scale{position:relative;margin:34px 0 4px}
.lb-bar{height:16px;border-radius:8px;border:1px solid var(--border-strong,#94a3b8)}
.lb-cur{position:absolute;top:-6px;height:28px;width:0;border-left:2px solid var(--text,#0f172a);transition:left .35s ease;pointer-events:none}
.lb-cur b{position:absolute;top:-24px;left:0;transform:translateX(-50%);padding:2px 7px;border-radius:6px;background:var(--text,#0f172a);color:var(--surface,#fff);font:800 11px var(--mono,ui-monospace,Menlo,monospace);white-space:nowrap}
.lb-ax{position:relative;height:14px;margin-top:8px;font:700 10px var(--mono,ui-monospace,Menlo,monospace);color:var(--text-muted,#64748b)}.lb-ax span{position:absolute;transform:translateX(-50%)}
.lb-read{display:flex;flex-wrap:wrap;gap:4px 14px;margin:8px 0;font:700 12.5px var(--mono,ui-monospace,Menlo,monospace)}
.lb-tubes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:8px}
.lb-tube{text-align:center;font-size:11.5px;line-height:1.25;min-width:0}
.lb-tube svg{display:block;width:min(100%,54px);height:auto;margin:0 auto 3px;overflow:visible;color:var(--border-strong,#94a3b8)}
.lb-tube .liq{transition:fill .8s ease}
.lb-tube b{display:block;color:var(--text,#0f172a);overflow-wrap:anywhere}.lb-tube span{color:var(--text-muted,#64748b)}
@media(max-width:340px){.lb-tubes{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(prefers-reduced-motion:reduce){.lb-cur,.lb-tube .liq{transition:none}}
`;
function injectCss(){if(typeof document==='undefined'||document.getElementById('che-lab-css'))return;const st=document.createElement('style');st.id='che-lab-css';st.textContent=LBCSS;document.head.appendChild(st)}
const f1=v=>v.toFixed(1).replace('.',','),SUPD={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
const sci=x=>{if(!(x>0))return '0';let e=Math.floor(Math.log10(x)+1e-9),m=x/Math.pow(10,e);if(m.toFixed(1)==='10.0'){m=1;e++}return m.toFixed(1).replace('.',',')+'·10'+String(e).split('').map(ch=>SUPD[ch]).join('')};
const UNIN=['czerwony','czerwony','pomarańczowy','żółty','żółtozielony','zielony','turkusowy','niebieski','granatowy','fioletowy'];
function indName(ind,p){if(ind==='phph')return p<8.2?'bezbarwny':p<10?'różowy':'malinowy';if(ind==='mo')return p<3.1?'czerwony':p<4.4?'pomarańczowy':'żółty';if(ind==='btb')return p<6?'żółty':p<7.6?'zielony':'niebieski';return UNIN[clamp(Math.floor(p/14*9.999),0,9)]}
function liqName(S){if(S.ind)return indName(S.ind,pH(S));if(S.ions.some(i=>i.k==='Cu'&&i.eq>.05))return 'niebieski (Cu²⁺)';if(S.ions.some(i=>i.k==='Fe'&&i.ch===3&&i.eq>.05))return 'żółtobrązowy (Fe³⁺)';if(S.ions.some(i=>i.k==='Fe'&&i.ch===2&&i.eq>.05))return 'bladozielony (Fe²⁺)';return 'bezbarwny'}
const phWord=p=>p<3?'kwasowy (silnie)':p<6.9?'kwasowy':p<=7.1?'obojętny':p<11?'zasadowy':'zasadowy (silnie)';

function session(id,opt){injectCss();id=id||('s'+Math.random());if(SESS[id])return SESS[id];
 const lab=SESS[id]={id,opt:opt||{},S:null,subs:{},hist:[],measurements:[],marks:[],steps:[],seq:[],last:null,incidents:0,t:0,tmr:null,start:'w',hosts:[]};
 lab.workflow=createWorkflow(lab);lab.record=(kind,value,unit,meta)=>{const row={t:lab.t,kind,value,unit:unit||'',meta:meta||{}};lab.measurements.push(row);if(lab.measurements.length>2000)lab.measurements.shift();lab.emit('measurement',row);return row};
 lab.series=(kind)=>lab.measurements.filter(x=>x.kind===kind);lab.measurementSchema={temperature:{unit:'°C',domain:'thermal',source:'thermalState.T',model:true},thermalTemperature:{unit:'°C',domain:'thermal',source:'thermalState.T',model:true},heatPower:{unit:'W',domain:'thermal',source:'heatSource.powerW',model:true},combustionPower:{unit:'W',domain:'combustion',source:'combustionState.powerW',model:true},combustionEnergy:{unit:'J',domain:'combustion',source:'combustionState.energyJ',model:true},combustionFuelFlow:{unit:'kg/s',domain:'combustion',source:'combustionState.massFlow',model:true},combustionO2Flow:{unit:'kg/s',domain:'combustion',source:'combustionState.o2Available',model:true},exhaustMassFlow:{unit:'kg/s',domain:'combustion',source:'combustionState.productMass.total',model:true},energy:{unit:'J',domain:'thermal',source:'thermal.integratedPower',model:true},mass:{unit:'kg',domain:'mass',source:'thermalState.mass',model:true},heatCapacity:{unit:'J/(kg·K)',domain:'thermal',source:'thermalState.cp',model:true},coolantFlow:{unit:'kg/s',domain:'thermal',source:'cooler.flow',model:true},heatTransfer:{unit:'W',domain:'thermal',source:'cooler.heatTransfer',model:true},pressure:{unit:'arb',domain:'pressure',source:'manual/model',model:true},pH:{unit:'pH',domain:'chemical',source:'pH(state)',model:true},volume:{unit:'u',domain:'quantity',source:'state.V',model:true},gasVolume:{unit:'L',domain:'gas',source:'gasTrap.volume',model:true},exhaustMoles:{unit:'mol',domain:'gas',source:'gasTrap.gasMoles',model:true},condensedWater:{unit:'kg',domain:'gas',source:'gasTrap.liquidWater',model:true},pressure:{unit:'arb',domain:'pressure',source:'manual/model',model:true},mass:{unit:'g',domain:'mass',source:'manual/model',model:false}};;lab.measurementSchema.gasSampleVolume={unit:'L',domain:'gas',source:'gasSample.volume',model:true};
lab.measurementSchema.gasSampleMoles={unit:'mol',domain:'gas',source:'gasSample.moles',model:true};
lab.measurementSchema.gasComposition={unit:'mol%',domain:'gas',source:'gasSample.composition',model:true};
lab.measurementSchema.gasUncertainty={unit:'relative',domain:'measurement',source:'gasUncertainty',model:true};
lab.measurementSchema.absorbedGas={unit:'mol',domain:'gas',source:'gasAbsorber.absorbed',model:true};
lab.measurementSchema.condensate={unit:'kg',domain:'gas',source:'gasSeparator.condensate',model:true}
 lab.on=(e,f)=>{(lab.subs[e]=lab.subs[e]||[]).push(f);return ()=>{const a=lab.subs[e]||[],i=a.indexOf(f);if(i>=0)a.splice(i,1)}};lab.emit=(e,d)=>(lab.subs[e]||[]).slice().forEach(f=>{try{f(d)}catch(x){console.warn('CHE.LAB panel',x)}});lab.inputs={};lab.receive=(port,data)=>{lab.inputs[port]=data;lab.emit('input:'+port,data);return data};
 lab.chemistry={version:'0.95',substances:{},reactions:[],last:null,reset:function(){this.substances={};this.reactions=[];this.last=null},upsert:function(id,n,phase,meta){if(!id)return null;const x=this.substances[id]||{id:id,amountMol:0,massKg:0,phase:phase||'unknown'};if(Number.isFinite(n))x.amountMol=Math.max(0,x.amountMol+n);if(phase)x.phase=phase;Object.assign(x,meta||{});this.substances[id]=x;return x},snapshot:function(){return JSON.parse(JSON.stringify({version:this.version,substances:this.substances,reactions:this.reactions.slice(-200),last:this.last}))},
 syncSubstance:function(id,nMol,phase,meta){const mw=Number(meta&&meta.molarMass)||0;let x=this.substances[id]||{id:id,amountMol:0,massKg:0,phase:phase||'unknown'};x.amountMol=Math.max(0,Number(nMol)||0);if(mw>0)x.massKg=x.amountMol*mw;if(phase)x.phase=phase;Object.assign(x,meta||{});this.substances[id]=x;return x},
 syncGas:function(g){if(!g)return null;const defs={CO2:['CO₂',.04401,'gas'],CO:['CO',.02801,'gas'],H2O:['H₂O',.01801528,'gas'],O2:['O₂',.0319988,'gas'],fuel:['paliwo resztkowe',.044,'gas'],MgO:['MgO',.040304,'solid'],H2O_liquid:['H₂O',.01801528,'liquid']};const out={};Object.keys(defs).forEach(k=>{const d=defs[k];const n=k==='H2O_liquid'?Number(g.liquidWaterMoles||0):k==='H2O'?Number(g.vaporMoles!=null?g.vaporMoles:(g.moles&&g.moles[k]||0)):Number(g.moles&&g.moles[k]||0);out[k]=this.syncSubstance(k,n,d[2],{name:d[0],formula:d[0],molarMass:d[1],source:'gasTrap'});});this.gasSnapshot={time:lab.t,pressure:Number(g.pressure||0),temperature:Number(g.temp||25),volumeL:Number(g.volume||0),substances:JSON.parse(JSON.stringify(out))};return out},gasAmount:function(id,phase){const x=this.substances[id];return x&&(!phase||x.phase===phase)?Number(x.amountMol||0):0},auditGas:function(g){const issues=[];const defs=['CO2','CO','H2O','O2','fuel'];defs.forEach(k=>{const local=k==='H2O'?Number(g&&g.vaporMoles||0):Number(g&&g.moles&&g.moles[k]||0),central=this.gasAmount(k,'gas');if(Math.abs(local-central)>1e-10*Math.max(1,Math.abs(local),Math.abs(central)))issues.push(k+': lokal '+local+' != central '+central)});return {ok:!issues.length,issues}}};
 lab.tick=()=>{if(!lab.hosts.some(h=>h.isConnected)){clearInterval(lab.tmr);lab.tmr=null;return}lab.t+=.5;const S=lab.S;S.T+=(25-S.T)*.04;const phv=pH(S);lab.hist.push({t:lab.t,T:S.T,pH:phv,V:S.V,gasT:S.gasT});if(lab.hist.length>800)lab.hist.shift();lab.record('temperature',S.T,'°C');lab.record('pH',phv,'pH',{source:'CHE.LAB.pH(state)',central:true});lab.record('volume',S.V,'u');if(Number.isFinite(S.gasT))lab.record('gasSignal',S.gasT,'arb');lab.emit('tick')};
 lab.reset=st=>{lab.start=st||lab.start||'w';const S=newState(lab.start!=='w');lab.seq=[];
  const d=STARTS[lab.start];if(d&&d[1]){add(S,d[1],4,true);S.bhp=[];S.log=[];S.heat=0;S.T=25;S.banner=null;S.splash=0;lab.seq.push('(start) '+d[2])}
  lab.S=S;lab.chemistry.reset();lab.hist=[{t:lab.t,T:25,pH:pH(S),V:S.V,gasT:S.gasT}];lab.measurements=[];lab.marks=[];lab.steps=[{l:'start',pH:pH(S),T:25}];lab.last=null;lab.incidents=0;lab.emit('reset');
  if(!lab.tmr&&typeof setInterval==='function')lab.tmr=setInterval(lab.tick,500)};
 lab.add=(rid,amt,conc,pred,label)=>{const S=lab.S,before=liquidColor(S),res=add(S,rid,amt,conc),after=liquidColor(S),ph=new Set();
  res.forEach(e=>{if(e.gas)ph.add('gaz');if(e.ppt)ph.add('osad');if(e.type==='reakcja wypierania'||e.type==='metal + woda')ph.add('barwa')});
  if(Math.hypot(after[0]-before[0],after[1]-before[1],after[2]-before[2])>30||res.some(e=>/barw/.test(e.obs)&&!/wskaźnik|brak reakcji/.test(e.type)))ph.add('barwa');
  let msg='';if(pred){const ok=pred==='nic'?!ph.size:ph.has(pred);msg=(ok?'Predykcja trafna. ':'Inaczej niż przewidywano. ')+'Zaobserwowano: '+([...ph].join(', ')||'brak zmian')+'.'}
  if(S.bhp.some(b=>b[0]==='bad'))lab.incidents++;
  lab.seq.push(((conc&&/^(acid|base)$/.test(KIND[rid]))?'stęż. ':'')+(label||rid).replace(/ –.*/,''));lab.marks.push(lab.t);
  lab.steps.push({l:String(lab.steps.length),pH:pH(S),T:S.T});lab.hist.push({t:lab.t,T:S.T});lab.last={id:rid,res,ph:[...ph],msg};lab.emit('add');return res};
 lab.snapshot=()=>({version:C.LAB.version,session:lab.id,start:lab.start,t:lab.t,state:JSON.parse(JSON.stringify(lab.S||{})),hist:lab.hist.slice(-800),measurements:lab.measurements.slice(-2000),marks:lab.marks.slice(),steps:lab.steps.slice(),seq:lab.seq.slice(),last:lab.last?JSON.parse(JSON.stringify(lab.last)):null,incidents:lab.incidents,inputs:JSON.parse(JSON.stringify(lab.inputs||{})),workflow:lab.workflow?lab.workflow.snapshot():null,chemistry:lab.chemistry.snapshot()});
 lab.restore=snap=>{if(!snap||!snap.state)return false;lab.start=snap.start||lab.start;lab.t=Number(snap.t)||0;lab.S=JSON.parse(JSON.stringify(snap.state));lab.hist=Array.isArray(snap.hist)?snap.hist.slice(-800):[];lab.measurements=Array.isArray(snap.measurements)?snap.measurements.slice(-2000):[];lab.marks=Array.isArray(snap.marks)?snap.marks.slice():[];lab.steps=Array.isArray(snap.steps)?snap.steps.slice():[];lab.seq=Array.isArray(snap.seq)?snap.seq.slice():[];lab.last=snap.last?JSON.parse(JSON.stringify(snap.last)):null;lab.incidents=Number(snap.incidents)||0;lab.inputs=JSON.parse(JSON.stringify(snap.inputs||{}));if(snap.workflow)lab.workflow.restore(snap.workflow);if(snap.chemistry){lab.chemistry.substances=JSON.parse(JSON.stringify(snap.chemistry.substances||{}));lab.chemistry.reactions=(snap.chemistry.reactions||[]).slice();lab.chemistry.last=snap.chemistry.last||null}lab.emit('restore',snap);lab.emit('reset');return true};
 lab.exportJSON=()=>JSON.stringify(lab.snapshot(),null,2);
 lab.importJSON=text=>{try{return lab.restore(JSON.parse(text))}catch(e){return false}};
 lab.bindPanel=(nodeId,module)=>lab.workflow.bind(nodeId,module);
 lab.destroy=()=>{if(lab.tmr){clearInterval(lab.tmr);lab.tmr=null}LINKER.connections.slice().filter(x=>x.source===lab||x.target===lab).forEach(x=>LINKER.disconnect(x));Object.keys(lab.subs).forEach(k=>lab.subs[k].splice(0));lab.hosts.slice().forEach(h=>{if(h&&h.parentNode)h.parentNode.removeChild(h)});lab.hosts=[];lab.destroyed=true;delete SESS[lab.id];return true};
 lab.release=()=>{if(lab.hosts.every(h=>!h||!h.isConnected))return lab.destroy();return false};
 lab.reset(opt&&opt.start);return lab}
function cvInit(cv,h){const dpr=Math.min(window.devicePixelRatio||1,2),W=cv.clientWidth||300;cv.width=W*dpr;cv.height=h*dpr;const c=cv.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,h);return{c,W,H:h}}
const P={};
P.controls=(h,lab,o)=>{const only=o.only&&new Set(o.only),grp=o.groups&&new Set(o.groups),ex=new Set(o.exclude||[]);
 const groups=GROUPS.filter(([gk,,ob])=>{if(grp&&!grp.has(gk))return false;const ids=Object.keys(ob).filter(i=>(!only||only.has(i))&&!ex.has(i));return ids.length}).map(([gk,gl,ob])=>({gk,gl,ids:Object.keys(ob).filter(i=>(!only||only.has(i))&&!ex.has(i)),ob}));
 const sl=(o.starts||Object.keys(STARTS)).filter(k=>STARTS[k]);
 let gIdx=0,rid=groups[0]&&groups[0].ids[0],amt=2,conc=0,pred='';
 const paint=()=>{
  const g=groups[gIdx]||{ids:[],ob:{},gl:''};
  h.innerHTML='<div class="lb-sub">Start zlewki</div><div class="lb-chips stc">'+sl.map(k=>'<button type="button" class="lb-chip sm" data-st="'+k+'" aria-pressed="'+(lab.start===k)+'">'+STARTS[k][0]+'</button>').join('')+'</div>'+
   '<div class="lb-sub">Grupa</div><div class="lb-chips gc">'+groups.map((g,i)=>'<button type="button" class="lb-chip sm" data-g="'+i+'" aria-pressed="'+(i===gIdx)+'">'+g.gl+'</button>').join('')+'</div>'+
   '<div class="lb-sub">Odczynnik</div><div class="lb-chips rc">'+g.ids.map(i=>'<button type="button" class="lb-chip" data-r="'+i+'" aria-pressed="'+(i===rid)+'">'+(g.ob[i].l||i)+'</button>').join('')+'</div>'+
   '<div class="lb-sels" style="margin-top:10px"><label>Porcja<select class="am"><option value="1">mała</option><option value="2">średnia</option><option value="4">duża</option></select></label>'+
   '<label>Stężenie<select class="cn"><option value="0">rozcieńczone</option><option value="1">stężone</option></select></label>'+
   '<label>Przewidywanie<select class="pd"><option value="">wyłączone</option><option value="gaz">gaz</option><option value="osad">osad</option><option value="barwa">zmiana barwy</option><option value="nic">brak zmian</option></select></label></div>'+
   '<div class="lb-act"><button type="button" class="lb-btn pri go">Dodaj do zlewki</button><button type="button" class="lb-btn rs">Nowa próba</button></div><div class="pm lb-note"></div>';
  h.querySelector('.am').value=String(amt);h.querySelector('.cn').value=String(conc);h.querySelector('.pd').value=pred;
  h.querySelectorAll('[data-st]').forEach(b=>b.onclick=()=>{lab.reset(b.getAttribute('data-st'));paint()});
  h.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{gIdx=+b.getAttribute('data-g');rid=groups[gIdx].ids[0];paint()});
  h.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{rid=b.getAttribute('data-r');paint()});
  h.querySelector('.am').onchange=e=>{amt=+e.target.value};h.querySelector('.cn').onchange=e=>{conc=+e.target.value};h.querySelector('.pd').onchange=e=>{pred=e.target.value};
  h.querySelector('.go').onclick=()=>{const label=(groups[gIdx].ob[rid]&&groups[gIdx].ob[rid].l)||rid;lab.add(rid,amt,!!conc,pred,label);pred='';const pd=h.querySelector('.pd');if(pd)pd.value='';};
  h.querySelector('.rs').onclick=()=>{lab.reset(lab.start);paint()};
 };
 lab.on('add',()=>{const pm=h.querySelector('.pm');if(pm&&lab.last)pm.innerHTML=lab.last.msg||''});
 lab.on('reset',()=>{const pm=h.querySelector('.pm');if(pm)pm.innerHTML=''});
 paint()};
P.beaker=(h,lab,o)=>{o=o||{};const fx=Object.assign({liquid:1,meniscus:1,glass:1,precipitate:1,solids:1,bubbles:1,fumes:1,heatGlow:1,heatConvection:1,splash:1,ripples:1,steam:1,condensation:1,labels:1},o.effects||{});const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||340)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);
 let S=lab.S;const bub=[],drops=[],bpool={};const bw0=()=>Math.min(W*.62,280)*.8;let liq=WATER.slice(),pop=0,last=0;
 lab.on('add',()=>{pop=1});lab.on('reset',()=>{bub.length=0;drops.length=0;liq=WATER.slice()});
 const ctx=cv.getContext('2d');let W=0,H=0,dpr=1;
 function size(){dpr=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 if(g.ResizeObserver)new ResizeObserver(size).observe(cv);size();
 const rnd=(i)=>{const x=Math.sin(i*127.1)*43758.5453;return x-Math.floor(x)},css=(c,a)=>'rgba('+c[0]+','+c[1]+','+c[2]+','+(a==null?1:a)+')';
 function frame(t){if(!cv.isConnected)return;S=lab.S;const dt=Math.min(.05,(t-last)/1000||0);last=t;if(!W){size()}
  const tgt=liquidColor(S);liq=liq.map((v,i)=>v+(tgt[i]-v)*Math.min(1,dt*3));
  S.gasT=Math.max(0,S.gasT-dt);S.heat=Math.max(0,S.heat-dt);S.fumes=Math.max(0,S.fumes-dt);if(S.banner){S.banner[2]-=dt;if(S.banner[2]<=0)S.banner=null}if(S.splash>0){const n=Math.ceil(S.splash*dt*40);for(let i=0;i<n;i++)drops.push({x:W/2+(Math.random()-.5)*bw0(),y:H*.5,vx:(Math.random()-.5)*260,vy:-180-Math.random()*220,r:2+Math.random()*3});S.splash=Math.max(0,S.splash-dt)}pop=Math.max(0,pop-dt*2);
  ctx.clearRect(0,0,W,H);const dark=document.documentElement.getAttribute('data-theme')==='dark';
  const bw=Math.min(W*.72,320),bx=(W-bw)/2,by=28,bot=H-48,bh=bot-by,lvl=clamp(.28+.18*Math.min(S.V,4),.28,.82),top=bot-bh*lvl;
  const path=()=>{ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx,bot-16);ctx.quadraticCurveTo(bx,bot,bx+16,bot);ctx.lineTo(bx+bw-16,bot);ctx.quadraticCurveTo(bx+bw,bot,bx+bw,bot-16);ctx.lineTo(bx+bw,by)};
  if(fx.heatGlow&&S.heat>0){ctx.save();ctx.shadowColor='rgba(255,140,40,'+Math.min(1,S.heat/2)+')';ctx.shadowBlur=26;path();ctx.strokeStyle='rgba(255,140,40,.8)';ctx.lineWidth=6;ctx.stroke();ctx.restore()}
  ctx.save();path();ctx.closePath();ctx.clip();
  if(fx.liquid)ctx.fillStyle=css(liq,.72),ctx.fillRect(bx,top+Math.sin(t/400)*1.2,bw,bot-top);
  if(fx.meniscus){ctx.fillStyle='rgba(255,255,255,.25)';ctx.fillRect(bx,top,bw,3);}
  /* rant + podziałka */
  ctx.restore();ctx.save();
  ctx.strokeStyle='rgba(148,163,184,.85)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(bx-1,by);ctx.lineTo(bx+bw+1,by);ctx.stroke();
  ctx.strokeStyle='rgba(100,116,139,.55)';ctx.fillStyle='rgba(100,116,139,.75)';ctx.font='600 9px Inter,system-ui';ctx.textAlign='right';ctx.lineWidth=1;
  for(let u=0;u<=4;u++){const y=bot-bh*(.28+.18*u);if(y<by+6||y>bot-2)continue;ctx.beginPath();ctx.moveTo(bx+bw-11,y);ctx.lineTo(bx+bw-2,y);ctx.stroke();ctx.fillText(String(u+1),bx+bw-13,y+3);}
  ctx.save();path();ctx.closePath();ctx.clip();
  /* osady */
  let ph0=0;if(fx.precipitate)S.ppts.forEach((q,i)=>{if(q.eq<=.02)return;const hh=clamp(q.eq*7,4,34);ctx.fillStyle=css(q.col,q.metal?.95:.9);ctx.fillRect(bx,bot-ph0-hh,bw,hh);ph0+=hh;
   if(!q.metal&&pop>0){ctx.fillStyle=css(q.col,.35*Math.min(1,pop));ctx.fillRect(bx,top,bw,bot-top)}});
  /* ciała stałe */
  let sx=bx+bw*.18;if(fx.solids)S.solids.forEach((s,i)=>{if(s.eq<=.02)return;const k=clamp(s.eq/4,.15,1),w=bw*.2*(s.t==='metal'?.7:1)*(.5+k*.5),h=s.t==='metal'?(26+14*k):(14+8*k);
   ctx.fillStyle=css(s.col);ctx.beginPath();if(ctx.roundRect)ctx.roundRect(sx,bot-ph0-h-2,w,h,4);else ctx.rect(sx,bot-ph0-h-2,w,h);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=1;ctx.stroke();sx+=w+8;if(sx>bx+bw-w)sx=bx+bw*.18});
  /* bąbelki */
  if(fx.bubbles&&S.gasT>0){const n=Math.floor(S.gasT*dt*22+.3);for(let i=0;i<n;i++)if(Math.random()<.55)bub.push({x:bx+18+Math.random()*(bw-36),y:bot-18-ph0,r:1.5+Math.random()*3,v:22+Math.random()*36,p:Math.random()*6})}
  if(fx.bubbles)for(let i=bub.length-1;i>=0;i--){const b=bub[i];b.y-=b.v*dt;b.x+=Math.sin(t/200+b.p)*.4;if(b.y<top){bub.splice(i,1);continue}ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fillStyle='rgba(255,255,255,.55)';ctx.fill();ctx.strokeStyle='rgba(80,100,120,.45)';ctx.stroke()}
  ctx.restore();
  if(fx.fumes&&S.fumes>0)for(let i=0;i<12;i++){const f=((t/2600)+rnd(i))%1;ctx.beginPath();ctx.arc(bx+bw*.25+rnd(i+3)*bw*.5+Math.sin(t/700+i)*12,by-f*40,10+f*16,0,7);ctx.fillStyle='rgba(170,90,30,'+.3*(1-f)*Math.min(1,S.fumes)+')';ctx.fill()}
  if(fx.glass){path();ctx.strokeStyle=dark?'#94a3b8':'#64748b';ctx.lineWidth=4;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();
  ctx.beginPath();ctx.moveTo(bx+8,by+14);ctx.lineTo(bx+8,bot-26);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.stroke();}
  if(fx.splash)for(let i=drops.length-1;i>=0;i--){const d=drops[i];d.vy+=620*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;if(d.y>H){drops.splice(i,1);continue}ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,7);ctx.fillStyle=css(liq,.9);ctx.fill();ctx.strokeStyle='rgba(180,40,40,.7)';ctx.stroke()}
  if(fx.heatConvection&&S.heat>2.2)for(let i=0;i<5;i++){const f=((t/1500)+rnd(i+20))%1;ctx.beginPath();ctx.arc(bx+bw*(.2+.15*i)+Math.sin(t/500+i)*8,by-f*50,8+f*14,0,7);ctx.fillStyle='rgba(235,240,245,'+.45*(1-f)+')';ctx.fill()}
  if(S.banner){const bd=S.banner[0]==='bad';ctx.fillStyle=bd?'rgba(185,28,28,.92)':'rgba(21,128,61,.92)';ctx.beginPath();if(ctx.roundRect)ctx.roundRect(10,H-96,W-20,30,8);else ctx.rect(10,H-96,W-20,30);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 13px Inter,system-ui';ctx.textAlign='center';ctx.fillText(S.banner[1],W/2,H-76)}
  if(fx.labels){ctx.fillStyle=dark?'#e2e8f0':'#1e293b';ctx.textAlign='center';ctx.font='800 14px Inter,system-ui';
  const last_=S.log.length?S.log[S.log.length-1].evs[0]:null,st_=STARTS[lab.start];ctx.fillText(last_?last_.type:(S.emp?'pusta zlewka':st_&&st_[2]?st_[2]:'czysta woda'),W/2,22);
  ctx.font='600 12px Inter,system-ui';ctx.fillText('pH ≈ '+pH(S).toFixed(1).replace('.',',')+(S.ind?' · '+IND[S.ind].l:''),W/2,H-26);
  ctx.font='600 11px Inter,system-ui';ctx.fillStyle=dark?'#94a3b8':'#64748b';ctx.fillText(last_&&last_.eq.length<46?last_.eq:'',W/2,H-10);}
  {const ov=['ripples','steam','condensation'].filter(k=>fx[k]);if(ov.length)GFX.draw('beaker',ctx,{x:bx,y:by,w:bw,h:bot-by},{level:lvl,liquid:liq,T:S.T,pop:pop},{t,dt,pool:bpool,only:ov})}
  requestAnimationFrame(frame)}
 requestAnimationFrame(frame)};
P.bhp=(h,lab)=>{const ic={bad:'BŁĄD',ok:'OK',warn:'UWAGA'};
  const r=()=>{const b=lab.S.bhp,bad=b.some(x=>x[0]==='bad');
   h.innerHTML=(b.length?b.map(x=>'<div class="lb-call '+x[0]+'"><b>'+ic[x[0]]+' · BHP</b> '+x[1]+'</div>').join(''):'<div class="lb-call"><b>BHP</b> Okulary, rękawice, kwas do wody. Ostrzeżenia pojawią się po dodaniu odczynnika.</div>')+
   (bad?'<div class="lb-call bad"><b>Postępowanie</b> Odsuń się od zlewki, zawiadom nauczyciela, skórę i oczy płucz wodą min. 15 min.</div>':'')+(lab.incidents?'<div class="lb-note">Incydenty w tej próbie: <b>'+lab.incidents+'</b></div>':'')};
  lab.on('add',r);lab.on('reset',r);r()};
P.seq=(h,lab)=>{const r=()=>{h.innerHTML=lab.seq.length?'<div class="lb-chips">'+lab.seq.map((x,i)=>'<span class="lb-pill">'+(i+1)+'. '+x+'</span>').join('<span class="lb-arr">→</span>')+'</div>':'<div class="lb-note" style="margin:0">Zlewka jest '+(lab.S.emp?'pusta':'z wodą')+'. Kolejność dodawania pojawi się tutaj.</div>'};lab.on('add',r);lab.on('reset',r);r()};
/* nazwy jonów z ładunkiem — z tabeli rozpuszczalności silnika (CHE.DATA.SOLUBILITY_TABLE.cations/anions) */
const ionNames=list=>{const TB=(window.CHE&&CHE.DATA&&CHE.DATA.SOLUBILITY_TABLE)||{},CN={},AN={},SUPC=q=>(q>1?String(q).replace(/\d/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[c]):'');(TB.cations||[]).forEach(c=>CN[c.id]=c.ion);(TB.anions||[]).forEach(a=>AN[a.id]=a.ion);
  const out=[];list.forEach(i=>{const c=CN[i.k]||(String(i.k).replace(/\d+$/,'')+SUPC(i.ch||1)+'⁺');if(out.indexOf(c)<0)out.push(c);if(i.ps){const a=AN[i.ps]||i.ps;if(out.indexOf(a)<0)out.push(a)}});return out};
P.obs=(h,lab)=>{const sw=c=>'<i class="lb-sw" style="background:'+css(c)+'"></i>',tile=(k,v)=>'<div class="lb-tile"><small>'+k+'</small><b>'+v+'</b></div>';
  const r=()=>{const S=lab.S,l=lab.last,pp=S.ppts.filter(q=>q.eq>.02),so=S.solids.filter(s=>s.eq>.02),ions=ionNames(S.ions.filter(i=>i.eq>.05)),T=S.T;
   let x='<div class="lb-tiles">'+tile('Roztwór',sw(liquidColor(S))+liqName(S))+
    tile('Osad',pp.length?pp.map(q=>sw(q.col)+pretty(q.metal?q.f.replace('(met)',''):q.f)).join(' '):'—')+
    tile('Ciało stałe',so.length?so.map(s=>sw(s.col)+pretty(s.id)).join(' '):'—')+
    tile('Jony',ions.join(', ')||'—')+
    tile('Temperatura',T.toFixed(0)+' °C'+(T>=90?' <span style="color:#b91c1c">wrzenie!</span>':''))+
    tile('Zjawiska',l?(l.ph.join(', ')||'brak zmian'):'—')+'</div>';
   if(l)x+='<div class="lb-call" style="margin-top:8px"><b>Obserwacja</b> '+l.res.map(e=>e.obs).join(' ')+'</div>';h.innerHTML=x};
  lab.on('add',r);lab.on('reset',r);r()};
P.eq=(h,lab)=>{const r=()=>{const l=lab.last;h.innerHTML=l?l.res.map(e=>'<div class="lb-eqbox"><div class="lb-eq">'+e.eq+'</div><div class="lb-note" style="margin-top:2px">'+e.type+'</div></div>').join(''):'<div class="lb-note" style="margin:0">Równanie zbilansowane przez silnik pojawi się po pierwszej reakcji.</div>'};lab.on('add',r);lab.on('reset',r);r()};
P.ph=(h,lab)=>{const IDS=['phph','mo','btb','uni'];
  h.innerHTML='<div class="lb-phv"><b class="v"></b><span class="w"></span></div><div class="lb-scale"><div class="lb-bar" style="background:linear-gradient(90deg,'+UNI.map(c=>css(c)).join(',')+')"></div><div class="lb-cur"><b></b></div><div class="lb-ax">'+Array.from({length:15},(_,i)=>'<span style="left:'+(i/14*100)+'%">'+i+'</span>').join('')+'</div></div><div class="lb-read"></div>'+
   '<div class="lb-tubes">'+IDS.map(k=>'<div class="lb-tube" data-k="'+k+'"><svg viewBox="0 0 44 96" aria-hidden="true"><path class="liq" d="M9 38H35V72a13 13 0 0 1-26 0Z"/><path d="M8 6V72a14 14 0 0 0 28 0V6M4 6H40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg><b>'+IND[k].l+'</b><span></span></div>').join('')+'</div>'+
   '<div class="lb-note">'+((C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH)?'Obliczenia: CHE.EQUILIBRIUM (słabe kwasy), bufor Hendersona–Hasselbalcha i model mocnych elektrolitów. ':'Model uproszczony (bufor, słabe kwasy, mocne elektrolity). ')+'pH poglądowe (porcje, nie mole).</div>';
  const q=s=>h.querySelector(s);
  const r=()=>{const p=pH(lab.S),x=clamp(p,0,14),oh=14-p;
   q('.v').textContent='pH '+f1(p);q('.w').textContent=phWord(p);
   const cur=q('.lb-cur');cur.style.left=(x/14*100)+'%';cur.firstChild.textContent='pH '+f1(p);
   q('.lb-read').innerHTML='<span>[H₃O⁺] '+sci(Math.pow(10,-p))+' M</span><span>[OH⁻] '+sci(Math.pow(10,-oh))+' M</span><span>pOH '+f1(oh)+'</span>';
   IDS.forEach(k=>{const c=indCol(k,p),t=q('[data-k="'+k+'"]');t.querySelector('.liq').style.fill=css(lerp([240,246,248],c.slice(0,3),Math.min(1,c[3]*1.15)));t.querySelector('span').textContent=indName(k,p)})};
  lab.on('add',r);lab.on('reset',r);r()};
P.temp=(h,lab)=>{const cv=el('canvas');cv.style.cssText='width:100%;height:150px;display:block';h.appendChild(cv);
 const r=()=>{if(!cv.isConnected)return;const{c,W,H}=cvInit(cv,150),L=34,B=H-20,T0=8,Y=t=>B-(B-T0)*(t-20)/80,hs=lab.hist,t1=hs[hs.length-1].t,t0=Math.max(hs[0].t,t1-120),X=t=>L+(W-L-6)*(t-t0)/Math.max(30,t1-t0);
  c.font='10px Inter,system-ui';c.fillStyle='#64748b';c.textAlign='right';[20,40,60,80,100].forEach(v=>{c.strokeStyle=v===100?'rgba(185,28,28,.5)':'rgba(100,116,139,.2)';c.beginPath();c.moveTo(L,Y(v));c.lineTo(W-6,Y(v));c.stroke();c.fillText(v+'°',L-4,Y(v)+3)});
  lab.marks.forEach(m=>{if(m<t0)return;c.strokeStyle='rgba(13,104,104,.5)';c.setLineDash([3,3]);c.beginPath();c.moveTo(X(m),T0);c.lineTo(X(m),B);c.stroke();c.setLineDash([])});
  c.strokeStyle='#e0661c';c.lineWidth=2.5;c.beginPath();hs.forEach((p,i)=>{if(p.t<t0)return;const x=X(p.t),y=Y(clamp(p.T,20,100));i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.fillStyle='#64748b';c.textAlign='left';c.fillText('czas →  (linie przerywane = dodanie odczynnika)',L,H-4)};
 lab.on('tick',r);lab.on('add',r);lab.on('reset',r);if(typeof ResizeObserver!=='undefined')new ResizeObserver(r).observe(cv);setTimeout(r,0)};
P.measureChart=(h,lab,o)=>{o=o||{};const kind=o.kind||'pH',label=o.label||kind,unit=o.unit||'';const cv=el('canvas');cv.style.cssText='width:100%;height:170px;display:block';h.appendChild(cv);const r=()=>{if(!cv.isConnected)return;const{c,W,H}=cvInit(cv,170),rows=lab.series(kind);c.clearRect(0,0,W,H);const L=38,R=8,T=10,B=28;const vals=rows.map(x=>Number(x.value)).filter(Number.isFinite);if(!vals.length){c.fillStyle='#64748b';c.font='12px Inter,system-ui';c.fillText('Brak pomiarów tego typu.',L,28);return}let lo=Math.min(...vals),hi=Math.max(...vals);if(lo===hi){lo-=1;hi+=1}const t0=rows[0].t,t1=rows[rows.length-1].t||t0+1,X=t=>L+(W-L-R)*(t-t0)/Math.max(1,t1-t0),Y=v=>T-(v-lo)/(hi-lo)*(H-T-B);c.font='10px Inter,system-ui';c.fillStyle='#64748b';c.textAlign='right';for(let i=0;i<4;i++){const v=lo+(hi-lo)*i/3,y=Y(v);c.strokeStyle='rgba(100,116,139,.18)';c.beginPath();c.moveTo(L,y);c.lineTo(W-R,y);c.stroke();c.fillText(v.toFixed(1),L-5,y+3)}c.strokeStyle='#2563eb';c.lineWidth=2;c.beginPath();rows.forEach((q,i)=>{const x=X(q.t),y=Y(Number(q.value));i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.textAlign='left';c.fillText(label+(unit?' ['+unit+']':''),L, H-7)};lab.on('tick',r);lab.on('reset',r);lab.on('measurement',r);if(typeof ResizeObserver!=='undefined')new ResizeObserver(r).observe(cv);setTimeout(r,0)};
P.steps=(h,lab)=>{const cv=el('canvas');cv.style.cssText='width:100%;height:150px;display:block';h.appendChild(cv);
 const r=()=>{if(!cv.isConnected)return;const{c,W,H}=cvInit(cv,150),L=26,B=H-22,T0=8,st=lab.steps,bw=Math.min(46,(W-L-6)/st.length-6),Y=p=>B-(B-T0)*clamp(p,0,14)/14;
  c.font='10px Inter,system-ui';c.textAlign='right';c.fillStyle='#64748b';[0,7,14].forEach(v=>{c.strokeStyle=v===7?'rgba(100,116,139,.5)':'rgba(100,116,139,.2)';c.beginPath();c.moveTo(L,Y(v));c.lineTo(W-6,Y(v));c.stroke();c.fillText(v,L-4,Y(v)+3)});
  st.forEach((s,i)=>{const x=L+8+i*(bw+6),k=clamp(Math.floor(s.pH/14*9.999),0,9);c.fillStyle=css(UNI[k]);c.fillRect(x,Math.min(Y(s.pH),Y(7)),bw,Math.abs(Y(s.pH)-Y(7))||2);c.fillStyle='#334155';c.textAlign='center';c.fillText(s.pH.toFixed(1),x+bw/2,Y(s.pH)+(s.pH<7?12:-3));c.fillStyle='#64748b';c.fillText(i?(lab.seq[i-1+(lab.seq[0]&&/^\(start/.test(lab.seq[0])?1:0)]||String(i)).slice(0,9):'start',x+bw/2,H-6)})};
 lab.on('add',r);lab.on('reset',r);if(typeof ResizeObserver!=='undefined')new ResizeObserver(r).observe(cv);setTimeout(r,0)};
P.src=(h)=>{h.innerHTML='<div class="lb-sub" style="margin-top:0">Pobiera z zewnątrz</div>'+DEPS.map(d=>'<div class="lb-eqbox"><div class="lb-eq" style="font-size:12px">'+d[0]+'</div><div class="lb-note">'+d[1]+' · '+(d[2]()?'<b style="color:#15803d">znaleziono</b>':'<b style="color:#b45309">brak → '+d[3]+'</b>')+'</div></div>').join('')+'<div class="lb-sub">Dane własne modułu</div><div class="lb-note" style="margin:0">'+OWN.map(x=>'• '+x).join('<br>')+'</div>'};
P.log=(h,lab)=>{const r=()=>{const rows=lab.S.log.slice(-6).reverse();
  h.innerHTML=rows.length?rows.map(l=>l.evs.map(e=>'<div class="lb-eqbox"><div class="lb-note" style="margin:0 0 2px"><b>+ '+pretty(l.id)+'</b> · '+e.type+(e.warn?' · <span style="color:#b91c1c">'+e.warn+'</span>':'')+'</div><div class="lb-eq" style="font-size:13px">'+e.eq+'</div><div class="lb-note">'+e.obs+'</div></div>').join('')).join(''):'<div class="lb-note" style="margin:0">Dziennik reakcji pojawi się po dodaniu odczynnika.</div>'};
  lab.on('add',r);lab.on('reset',r);r()};
P.gasTrap=(h,lab,o)=>{o=o||{};const linked=o.linked!==false;const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||300)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);
 const data={gas:null,volume:0,signal:0,temp:25,pressure:101325,last:0,exhaustMass:0,composition:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0,total:0},moles:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0},vaporMoles:0,liquidWaterMoles:0,source:'none',preCondensation:{moles:{CO2:0,CO:0,H2O:0,O2:0,fuel:0},volume:0}};lab.gasTrapState=data;let W=0,H=0,dpr=1,ctx=cv.getContext('2d');
 const reset=()=>{if(lab.chemistry&&lab.chemistry.substances){['CO2','CO','H2O','O2','fuel','MgO','H2O_liquid'].forEach(k=>{if(lab.chemistry.substances[k])delete lab.chemistry.substances[k]})}data.gas=null;data.volume=0;data.signal=0;data.temp=25;data.pressure=101325;data.last=lab.t;data.exhaustMass=0;data.composition={CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0,total:0};data.moles={CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0};data.vaporMoles=0;data.liquidWaterMoles=0;data.source='none';data.preCondensation={moles:{CO2:0,CO:0,H2O:0,O2:0,fuel:0},volume:0};render()};
 const collectTick=()=>{if(!linked)return;const now=lab.t,dt=Math.max(0,now-data.last);data.last=now;if(data.signal>0){/* sygnał lokalny: odbiornik działa także bez renderera zlewki */data.volume=Math.min(100,data.volume+data.signal*dt*.9);data.signal=Math.max(0,data.signal-dt*1.6);lab.record('gasVolume',data.volume,'u',{gas:data.gas})}};
 const addGas=()=>{const S=lab.S;if(!linked||!S)return;if(Number.isFinite(S.gasT)&&S.gasT>0){data.gas=S.gas||data.gas;data.signal=Math.max(data.signal,S.gasT);data.temp=S.T;data.last=lab.t;data.volume=Math.min(100,data.volume+S.gasT*.35);lab.record('gasVolume',data.volume,'u',{gas:data.gas,event:'gas_formed'})}};
 function size(){dpr=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth||300;H=cv.clientHeight||300;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 function txt(t,x,y,size,weight,align){ctx.fillStyle=document.documentElement.getAttribute('data-theme')==='dark'?'#e2e8f0':'#1e293b';ctx.font=(weight||600)+' '+size+'px Inter,system-ui';ctx.textAlign=align||'left';ctx.fillText(t,x,y)}
 function render(){if(!cv.isConnected)return;size();ctx.clearRect(0,0,W,H);const dark=document.documentElement.getAttribute('data-theme')==='dark';
  const bx=W*.13,by=44,bw=W*.74,bot=H-34,bh=bot-by;txt('WEJŚCIE',bx+8,24,10,800);txt('WYJŚCIE / PRÓBKA',bx+bw-8,24,10,800,'right');
  ctx.strokeStyle=dark?'#94a3b8':'#64748b';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(bx-38,by+24);ctx.lineTo(bx,by+24);ctx.moveTo(bx+bw,by+24);ctx.lineTo(bx+bw+38,by+24);ctx.stroke();
  ctx.fillStyle=dark?'rgba(148,163,184,.08)':'rgba(100,116,139,.08)';ctx.strokeStyle=dark?'#94a3b8':'#64748b';ctx.lineWidth=3;ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx,by,bw,bh,18);else ctx.rect(bx,by,bw,bh);ctx.fill();ctx.stroke();
  const fill=clamp(data.volume/100,.03,.86),fy=bot-bh*fill;ctx.fillStyle=data.gas==='NO2'?'rgba(196,92,36,.34)':data.gas==='CO2'?'rgba(160,170,180,.25)':data.gas==='H2'?'rgba(120,170,220,.18)':'rgba(100,150,180,.16)';ctx.fillRect(bx+3,fy,bw-6,bot-fy);
  ctx.strokeStyle='rgba(100,116,139,.28)';ctx.lineWidth=1;for(let i=0;i<6;i++){const y=by+bh*(i/6);ctx.beginPath();ctx.moveTo(bx+8,y);ctx.lineTo(bx+bw-8,y);ctx.stroke()}
  if(data.gas&&data.signal>0){for(let i=0;i<10;i++){const x=bx+18+((i*47)%Math.max(30,bw-36));const y=bot-12-((i*31+performance.now()/8)%Math.max(20,bh*.65));ctx.beginPath();ctx.arc(x,y,2+(i%3),0,7);ctx.fillStyle='rgba(255,255,255,.55)';ctx.fill()}}
  txt(data.gas?'Gaz: '+data.gas:'Brak wykrytego gazu',W/2,by+28,16,800,'center');txt('zebrano: '+data.volume.toFixed(2)+' L',W/2,bot-12,12,700,'center');txt('masa spalin: '+data.exhaustMass.toFixed(5)+' kg',W/2,bot-28,11,600,'center');txt('H₂O(g): '+data.vaporMoles.toFixed(4)+' mol · H₂O(l): '+data.liquidWaterMoles.toFixed(4)+' mol',W/2,bot-44,10,600,'center');
  txt('Sygnał: '+data.signal.toFixed(1)+' arb',bx+8,H-8,11,600);txt('T: '+data.temp.toFixed(0)+' °C',bx+bw-8,H-8,11,600,'right');
  requestAnimationFrame(render)}
 lab.on('tick',()=>{collectTick();const x=lab.inputs&&lab.inputs.combustionProducts;if(x&&x.active!==false&&Number(x.massFlow)>0){const dt=Math.max(0,lab.t-(data._exhLast||lab.t));data._exhLast=lab.t;const dm=Number(x.massFlow)*dt;data.exhaustMass+=dm;data.source='combustion';data.temp=Number(x.temperature||data.temp);lab.receive('gasSample',data);const keys=['CO2','CO','H2O','O2','fuel','MgO'];keys.forEach(k=>{const dmK=Math.max(0,Number(x[k]||0)*dt);data.composition[k]=(data.composition[k]||0)+dmK;const mw=GASPHYS.MW[k]||GASPHYS.MW.fuel;data.moles[k]=(data.moles[k]||0)+dmK/mw});data.composition.total=(data.composition.total||0)+dm;data.pressure=Number(x.pressure||101325);const wp=GASPHYS.waterPhase(data.temp,data.pressure,data.moles.H2O||0);data.preCondensation.moles={CO2:data.moles.CO2||0,CO:data.moles.CO||0,H2O:data.moles.H2O||0,O2:data.moles.O2||0,fuel:data.moles.fuel||0};data.preCondensation.volume=GASPHYS.idealVolume((data.moles.CO2||0)+(data.moles.CO||0)+(data.moles.H2O||0)+(data.moles.O2||0)+(data.moles.fuel||0),data.temp,data.pressure)*1000;data.vaporMoles=wp.vaporMol;data.condensedWaterMoles=wp.liquidMol;data.liquidWaterMoles=wp.liquidMol;const gasMoles=(data.moles.CO2||0)+(data.moles.CO||0)+(data.vaporMoles||0)+(data.moles.O2||0)+(data.moles.fuel||0);data.volume=Math.min(1000,GASPHYS.idealVolume(gasMoles,data.temp,data.pressure)*1000);data.gas='spaliny';data.signal=Math.min(100,data.signal+Math.max(0,Number(x.molarFlow||0))*4);lab.chemistry.syncGas(data);lab.inputs.gasSubstances=lab.chemistry.substances;lab.emit('chemistry',lab.chemistry.snapshot());lab.record('exhaustMass',data.exhaustMass,'kg',{source:'combustion'});lab.record('exhaustMoles',gasMoles,'mol',{source:'combustion',waterVapor:data.vaporMoles,waterLiquid:data.liquidWaterMoles});lab.record('exhaustVolume',data.volume,'L',{source:'combustion',temperature:data.temp,pressure:data.pressure});lab.record('condensedWater',data.liquidWaterMoles*GASPHYS.MW.H2O,'kg',{source:'combustion'});}});lab.on('add',()=>{addGas()});lab.on('input:combustionProducts',x=>{if(x){data.gas='spaliny';data.temp=Number(x.temperature||data.temp);data.source='combustion'}});lab.on('reset',reset);if(g.ResizeObserver)new ResizeObserver(size).observe(cv);render();
 const info=el('div');info.style.cssText='margin-top:7px;font-size:12.5px;color:var(--text-muted,#64748b)';h.appendChild(info);
 const update=()=>{const gas=data.gas;let test='Brak gazu do analizy.';if(gas==='CO2')test='Analiza modelowa: CO₂ — gaz niepalny; możliwy test obecności opisany przez osobny moduł.';else if(gas==='H2')test='Analiza modelowa: H₂ — gaz palny; nie wykonuj testu płomieniem w tym module.';else if(gas==='NO2')test='Analiza modelowa: NO₂ — gaz toksyczny; analiza wyłącznie jako model/obserwacja pod kontrolą nauczyciela.';info.innerHTML='<b>Analiza:</b> '+test+(linked?'':' <span>(tryb izolowany — bez pobierania stanu zlewki)</span>')};lab.on('tick',update);lab.on('add',update);lab.on('reset',update);update()};

P.gasMeasurement=(h,lab,o)=>{o=o||{};const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const controls=el('div');controls.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';controls.innerHTML='<label>Ciśnienie próbki <input class="gp" type="range" min=70 max=120 step=.5 value=101.3 style="width:100%"><output class="gpv">101.3</output> kPa</label><label>Temperatura próbki <input class="gt" type="range" min=-20 max=300 value=25 style="width:100%"><output class="gtv">25</output> °C</label><label>Objętość próbki <input class="gv" type="range" min=.1 max=20 step=.1 value=1 style="width:100%"><output class="gvv">1.0</output> L</label>';box.appendChild(controls);const out=el('div');out.style.cssText='font-size:12.5px;color:var(--text-muted,#64748b)';box.appendChild(out);const st={p:101300,T:25,V:0.001};const q=s=>controls.querySelector(s);function render(){const trap=lab.gasTrapState||lab.inputs&&lab.inputs.gasSample||null;const source=trap||{};const p=st.p,T=st.T,V=st.V;const n=p*V/(GASPHYS.R*(T+273.15));const rows=[];if(source.moles){Object.keys(source.moles).forEach(k=>{const mol=Number(source.moles[k]||0);if(mol>0)rows.push([k,mol,(100*mol/Math.max(n,1e-12)).toFixed(2)]);});}const total=rows.reduce((a,x)=>a+Number(x[1]),0);out.innerHTML='<div style="'+cardSty+'"><b>Pomiar:</b> n = '+n.toFixed(5)+' mol · p = '+(p/1000).toFixed(1)+' kPa · T = '+T.toFixed(1)+' °C · V = '+(V*1000).toFixed(1)+' mL</div>'+(rows.length?'<div style="'+cardSty+';overflow:auto"><table style="width:100%;border-collapse:collapse"><tr><th style="text-align:left">Składnik</th><th style="text-align:left">mol</th><th style="text-align:left">udział molowy</th></tr>'+rows.map(x=>'<tr><td>'+x[0]+'</td><td>'+Number(x[1]).toFixed(5)+'</td><td>'+x[2]+'%</td></tr>').join('')+'</table></div>':'<small>Brak próbki z odbiornika. Stanowisko może też działać jako niezależny pomiar ręczny.</small>');}q('.gp').oninput=e=>{st.p=+e.target.value*1000;q('.gpv').value=(st.p/1000).toFixed(1);render()};q('.gt').oninput=e=>{st.T=+e.target.value;q('.gtv').value=st.T;render()};q('.gv').oninput=e=>{st.V=+e.target.value/1000;q('.gvv').value=(st.V*1000).toFixed(1);render()};lab.on('tick',render);lab.on('input:gasSample',render);lab.on('reset',render);render()};
P.gasCompare=(h,lab,o)=>{o=o||{};const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const render=()=>{const d=lab.gasTrapState||{};const pre=d.preCondensation||{};const post={moles:d.moles||{},volume:d.volume||0,temp:d.temp||25,pressure:d.pressure||101325};const keys=['CO2','CO','H2O','O2','fuel'];const row=k=>{const a=Number(pre.moles&&pre.moles[k]||0),b=Number(post.moles&&post.moles[k]||0);return '<tr><td>'+k+'</td><td>'+a.toFixed(5)+'</td><td>'+b.toFixed(5)+'</td><td>'+Math.max(0,a-b).toFixed(5)+'</td></tr>'};const cond=Number(post.condensedWaterMoles||d.liquidWaterMoles||0);box.innerHTML='<div style="'+cardSty+'"><b>Porównanie fazowe</b><br>Przed kondensacją: mieszanina zawiera także H₂O(g). Po kondensacji: H₂O(l) jest usuwana z fazy gazowej.</div><div style="'+cardSty+';overflow:auto"><table style="width:100%;border-collapse:collapse"><tr><th>Składnik</th><th>przed [mol]</th><th>po [mol]</th><th>różnica [mol]</th></tr>'+keys.map(row).join('')+'</table></div><div style="'+cardSty+'">Skroplona woda: <b>'+cond.toFixed(5)+' mol</b> · '+(cond*GASPHYS.MW.H2O*1000).toFixed(2)+' g</div>';};lab.on('tick',render);lab.on('reset',render);render()};
P.thermal=(h,lab,o)=>{o=o||{};const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||300)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px;margin-top:7px';c.innerHTML='<label>Temperatura początkowa <input class="t0" type="range" min=-20 max=200 value=25 style="width:100%"><output class="t0v">25</output> °C</label><label>Wymiana z otoczeniem U·A <input class="loss" type="range" min=0 max=100 value=20 style="width:100%"><output class="lv">20</output> W/K</label><label>Otoczenie <input class="amb" type="range" min=-20 max=60 value=25 style="width:100%"><output class="av">25</output> °C</label><label>Masa próbki <input class="mass" type="range" min=1 max=500 value=100 style="width:100%"><output class="mv">100</output> g</label><label>Ciepło właściwe <input class="cp" type="range" min=300 max=5000 value=4180 step=10 style="width:100%"><output class="cpv">4180</output> J/kg·K</label>';h.appendChild(c);const out=el('div');out.style.cssText='margin-top:7px;font-size:12.5px;color:var(--text-muted,#64748b)';h.appendChild(out);const st={T:25,t0:25,ambient:25,loss:.018,mass:.1,cp:4180,history:[],cooling:0,coolantOut:25,integratedPower:0};lab.thermalState=st;const q=s=>c.querySelector(s);function calc(){const hs=lab.inputs&&lab.inputs.heatSource;const source=hs&&hs.active?Number(hs.powerW??hs.power??0):0;const forced=Number(lab.inputs&&lab.inputs.coolingPower||0);const natural=HEAT.net(source,forced,st.loss,st.T,st.ambient);const dT=HEAT.transfer(natural*HEAT.step,st.mass,st.cp);st.T=Math.max(HEAT.clampMin,Math.min(HEAT.clampMax,st.T+dT));st.cooling=forced;st.history.push({t:lab.t,T:st.T});if(st.history.length>400)st.history.shift();const cool=lab.inputs&&lab.inputs.cooler;st.coolantOut=Number(cool&&cool.Tout!=null?cool.Tout:st.ambient);st.integratedPower=(st.integratedPower||0)+natural*HEAT.step;lab.S.T=st.T;lab.record('thermalTemperature',st.T,'°C',{heatSource:hs?hs.source:'none',power:source,cooling:forced,ambient:st.ambient,mass:st.mass,cp:st.cp,coolantOutlet:st.coolantOut});lab.emit('thermal',{temperature:st.T,sourcePower:source,coolingPower:forced,ambient:st.ambient,netPower:natural,coolantOutletTemperature:st.coolantOut});}q('.t0').oninput=e=>{st.t0=+e.target.value;st.T=st.t0;q('.t0v').value=st.t0};q('.loss').oninput=e=>{st.loss=+e.target.value/1000;q('.lv').value=e.target.value};q('.amb').oninput=e=>{st.ambient=+e.target.value;q('.av').value=e.target.value};q('.mass').oninput=e=>{st.mass=+e.target.value/1000;q('.mv').value=e.target.value};q('.cp').oninput=e=>{st.cp=+e.target.value;q('.cpv').value=e.target.value};const ctx=cv.getContext('2d');function draw(){const W=cv.clientWidth||320,H=cv.clientHeight||300;cv.width=W*2;cv.height=H*2;ctx.setTransform(2,0,0,2,0,0);ctx.clearRect(0,0,W,H);const a=st.history;ctx.strokeStyle='#64748b';ctx.lineWidth=2;ctx.beginPath();a.forEach((p,i)=>{const x=8+i*Math.max(1,(W-16)/400),y=H-18-Math.min(H-36,Math.max(0,(p.T+50)/2450*(H-36)));i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();ctx.fillStyle='currentColor';ctx.font='12px Inter';ctx.fillText('T = '+st.T.toFixed(1)+' °C',8,18);ctx.fillText('chłodzenie = '+st.cooling.toFixed(0)+' W',8,34);requestAnimationFrame(draw)}lab.on('tick',calc);lab.on('reset',()=>{st.T=st.t0;st.history=[];st.integratedPower=0});draw();out.innerHTML='<b>Bilans:</b> źródło ciepła − chłodzenie przez wymiennik − straty do otoczenia. Zmiana temperatury wynika z bilansu energii oraz masy i ciepła właściwego. To model dydaktyczny, nie pełny solver CFD.';};
P.combustion=(h,lab,o)=>{o=o||{};
 const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||360)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);
 const controls=el('div');controls.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px;margin-top:7px';
 controls.innerHTML='<label>Paliwo<select class="fuel" style="'+sty+';width:100%"><option value="H2">wodór H₂</option><option value="CH4" selected>metan CH₄</option><option value="C3H8">propan C₃H₈</option><option value="Mg">magnez Mg</option><option value="custom">paliwo C/H/O</option></select></label>'+
 '<label>Przepływ gazu <input class="gas" type="range" min="0" max="100" value="55" style="width:100%"><output class="gasv">55</output> %</label>'+
 '<label>Dopływ powietrza <input class="air" type="range" min="0" max="160" value="100" style="width:100%"><output class="airv">100</output> %</label>'+
 '<label>Udział C <input class="c" type="range" min="0" max="100" value="75" style="width:100%"><output class="cv">75</output> % mas.</label>'+
 '<label>Udział H <input class="hh" type="range" min="0" max="100" value="25" style="width:100%"><output class="hv">25</output> % mas.</label>'+
 '<label>Udział O <input class="oo" type="range" min="0" max="100" value="0" style="width:100%"><output class="ov">0</output> % mas.</label>';
 h.appendChild(controls);
 {const fxr=el('div');fxr.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:7px;align-items:center';fxr.innerHTML='<label style="font-size:12px">Barwa płomienia <select class="fc" style="'+sty+'"><option value="">z mieszanki (λ, φ)</option>'+Object.keys(GFX.flameColors).map(k=>'<option value="'+k+'">'+k+' — '+GFX.flameNames[k]+'</option>').join('')+'</select></label><button class="exp" style="'+sty+'">Wybuch mieszaniny</button><button class="spk" style="'+sty+'">Iskry</button><button class="rfx" style="'+sty+'">Reset efektów</button>';h.appendChild(fxr);
 fxr.querySelector('.fc').onchange=e=>{state.flameRGB=e.target.value?GFX.flameColors[e.target.value]:null};
 fxr.querySelector('.exp').onclick=()=>{const bp=render.bp=render.bp||{};GFX.trigger(bp,'explosion',state.fuel==='H2'?{color:[140,185,255],smoke:.5,smokeColor:[190,200,215]}:{});};
 fxr.querySelector('.spk').onclick=e=>{state.sparks=!state.sparks;e.target.style.outline=state.sparks?'2px solid var(--accent,#0d6868)':''};
 fxr.querySelector('.rfx').onclick=()=>{render.bp=null};lab.on('reset',()=>{render.bp=null})}
 const buttons=el('div');buttons.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:7px';buttons.innerHTML='<button class="ign" style="'+sty+'background:var(--accent,#0d6868);color:#fff">Uruchom / podtrzymaj płomień</button><button class="stop" style="'+sty+'">Zatrzymaj gaz</button><button class="airset" style="'+sty+'">Powietrze nominalne</button>';h.appendChild(buttons);
 const info=el('div');info.style.cssText='margin-top:7px;font-size:12.5px;color:var(--text-muted,#64748b)';h.appendChild(info);
 const state={fuel:'CH4',gas:55,air:100,C:75,H:25,O:0,on:false,temp:25,power:0,phi:1,lambda:1,oxygen:0,products:[],color:'normalny',flame:'stabilny',soot:0,co:0,massFlow:0,airMassFlow:0,o2Required:0,o2Available:0,fuelLHV:0,combustionEfficiency:0,powerW:0,energyJ:0,productMass:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,total:0}};lab.combustionState=state;
 const preset={H2:[0,100,0],CH4:[75,25,0],C3H8:[81.8,18.2,0],Mg:[0,0,0]};
 const q=s=>controls.querySelector(s), norm=()=>{let a=Math.max(0,state.C)+Math.max(0,state.H)+Math.max(0,state.O);if(!a)a=1;return {C:state.C/a*100,H:state.H/a*100,O:state.O/a*100}};
 function fuelFormula(){if(state.fuel==='H2')return {C:0,H:2,O:0,M:2};if(state.fuel==='CH4')return {C:1,H:4,O:0,M:16};if(state.fuel==='C3H8')return {C:3,H:8,O:0,M:44};if(state.fuel==='Mg')return {C:0,H:0,O:0,M:24.3};const n=norm();return {C:n.C/12,H:n.H/1,O:n.O/16,M:100};}
 function stoichO2(){const f=fuelFormula();if(state.fuel==='Mg')return 0.5;return Math.max(0,f.C+f.H/4-f.O/2)}
 function calc(){
   const f=fuelFormula();
   const n=norm();
   const gas=state.gas/100;
   const air=state.air/100;
   const M=f.M;
   // Stechiometria na bazie molowej: C + H/4 - O/2 mol O₂ na mol paliwa.
   const o2reqMol=Math.max(0,stoichO2());
   const fuelMolFlow=M>0?state.massFlow/M:0;
   const o2MassPerKgFuel=o2reqMol>0?(o2reqMol*32)/(M):0;
   // Powietrze 100% oznacza nominalny przepływ stechiometryczny dla danego paliwa.
   const mdot=1.0e-5*gas;
   const stoichAirRatio=o2MassPerKgFuel/0.232;
   const airMassFlow=mdot*stoichAirRatio*air;
   const o2Available=airMassFlow*0.232;
   const o2Required=mdot*o2MassPerKgFuel;
   const lambda=o2Required>0?o2Available/o2Required:1;
   const phi=lambda>0?1/lambda:10;
   state.massFlow=mdot;state.airMassFlow=airMassFlow;state.o2Required=o2Required;state.o2Available=o2Available;
   state.phi=phi;state.lambda=lambda;state.oxygen=o2Available;
   const mix=Math.min(1,Math.sqrt(gas)*Math.min(1.3,air));
   const stoichFit=Math.exp(-Math.pow(Math.log(Math.max(phi,.05)),2)/0.42);
   const dilution=0.42*Math.max(0,air-1)+0.22*Math.max(0,1-air);
   let Tmax=25+(state.fuel==='Mg'?3000:2200);
   Tmax*=mix*(0.45+0.55*stoichFit);Tmax*=Math.max(.18,1-dilution);Tmax=Math.min(Tmax,state.fuel==='Mg'?3100:2300);
   if(state.fuel==='Mg')Tmax*=Math.max(.35,Math.min(1,air));
   state.temp=state.on?Math.max(25,Tmax):25;
   const fuelKey=state.fuel==='custom'?'custom':state.fuel;
   const LHV={H2:120e6,CH4:50.0e6,C3H8:46.4e6,Mg:24.7e6,custom:35e6}[fuelKey]||35e6;
   const airFactor=Math.min(1.15,Math.max(0,air));
   const mixEff=Math.max(0,Math.min(1,stoichFit*(0.55+0.45*Math.min(1,airFactor))));
   const combustionEff=Math.max(0.08,Math.min(0.92,mixEff*(state.fuel==='Mg'?0.78:0.92)));
   state.fuelLHV=LHV;state.combustionEfficiency=combustionEff;state.powerW=state.on?mdot*LHV*combustionEff:0;state.power=Math.min(1,state.powerW/1200);
   // Bilans produktów. Przy niedoborze O₂ część węgla przechodzi do CO; model nie rozwiązuje kinetyki.
   const carbonKg=mdot*(n.C/100), hydrogenKg=mdot*(n.H/100), oxygenFuelKg=mdot*(n.O/100);
   const o2Used=Math.min(o2Available,o2Required)*combustionEff;
   const rich=lambda<1;
   let carbonToCO2=carbonKg,carbonToCO=0;
   if(rich){const fracCO=Math.min(.65,(1-lambda)*.8);carbonToCO=carbonKg*fracCO;carbonToCO2=carbonKg-carbonToCO;}
   const co2Mass=carbonToCO2*(44/12);
   const coMass=carbonToCO*(28/12);
   const h2oMass=hydrogenKg*9;
   const excessO2=Math.max(0,o2Available-o2Used);
   const unburnedFuel=state.on?Math.max(0,mdot*0.001*(1-combustionEff)):0;
   const exhaustMass=co2Mass+coMass+h2oMass+excessO2+unburnedFuel;
   let mgOMass=0;if(state.fuel==='Mg'){const mgBurned=mdot*combustionEff;const mgO2=Math.min(o2Available,mgBurned*(16/24.3));mgOMass=mgBurned*(40.3/24.3);state.productMass={MgO:mgOMass,O2:Math.max(0,o2Available-mgO2),total:mgOMass+Math.max(0,o2Available-mgO2)+Math.max(0,mdot-mgBurned)};}else state.productMass={CO2:co2Mass,CO:coMass,H2O:h2oMass,O2:excessO2,fuel:unburnedFuel,total:exhaustMass};
   state.products=[];
   if(!state.on||state.power<.05){state.color='brak';state.flame='brak płomienia';return}
   if(state.fuel==='Mg')state.products=air<.25?['MgO (ograniczone)']:['MgO'];
   else {state.products=co2Mass>0?['CO₂']:[];if(coMass>1e-10)state.products.push('CO');if(h2oMass>1e-10)state.products.push('H₂O');if(excessO2>1e-10)state.products.push('O₂ (nadmiar)');if(unburnedFuel>1e-10)state.products.push('paliwo (resztkowe)')}
   state.soot=(state.fuel==='Mg'||state.fuel==='H2')?0:(rich?Math.min(1,(phi-1)*1.7):0);
   state.co=(state.fuel==='H2'||state.fuel==='Mg')?0:(rich?Math.min(1,(phi-1)*1.4):0);
   state.color=rich?'żółty / kopcący':lambda>1.25?'blady / niebieski':'niebieski / intensywny';
   const near=Math.abs(phi-1)<=.15;state.flame=state.soot>.25?'niestabilny, świecący i kopcący':near?'stabilny, gorący':'stabilny, chłodniejszy';
   if(air<.35)state.flame='niedobór tlenu — płomień niestabilny';
 }
 function sync(){q('.gasv').value=state.gas;q('.airv').value=state.air;q('.cv').value=Math.round(state.C);q('.hv').value=Math.round(state.H);q('.ov').value=Math.round(state.O);q('.gas').value=state.gas;q('.air').value=state.air;q('.c').value=state.C;q('.hh').value=state.H;q('.oo').value=state.O;q('.fuel').value=state.fuel;}
 function update(){calc();const f=fuelFormula();const n=norm();const mode=state.phi>1.15?'mieszanka bogata — za mało O₂':state.phi<.75?'mieszanka uboga — nadmiar O₂':'okolice stechiometrii';info.innerHTML='<b>Bilans:</b> φ='+state.phi.toFixed(2)+' · λ='+state.lambda.toFixed(2)+' · O₂ z dopływu='+state.oxygen.toFixed(2)+' arb · <b>'+mode+'</b><br><b>Płomień:</b> '+state.color+'; '+state.flame+' · <b>T modelowa:</b> '+Math.round(state.temp)+' °C · <b>Moc względna:</b> '+Math.round(state.power*100)+'%<br><b>Produkty:</b> '+(state.products.join(', ')||'—')+(state.co>0.05?' · CO zwiększone w modelu':'')+(state.soot>0.05?' · możliwa sadza':'')+'<br><small>Skład paliwa dla trybu C/H/O: C '+n.C.toFixed(1)+'%, H '+n.H.toFixed(1)+'%, O '+n.O.toFixed(1)+'%. Model bilansuje zapotrzebowanie na O₂ i wpływ niedoboru/nadmiaru powietrza; nie jest pełną kinetyką ani CFD.</small>';info.innerHTML='<b>Bilans:</b> φ='+state.phi.toFixed(2)+' · λ='+state.lambda.toFixed(2)+' · O₂ dostępny='+state.o2Available.toExponential(2)+' kg/s · O₂ wymagany='+state.o2Required.toExponential(2)+' kg/s · <b>'+mode+'</b><br><b>Płomień:</b> '+state.color+'; '+state.flame+' · <b>T modelowa:</b> '+Math.round(state.temp)+' °C · <b>Moc:</b> '+state.powerW.toFixed(0)+' W<br><b>Przepływ paliwa:</b> '+(state.massFlow*1000).toFixed(3)+' g/s · <b>Sprawność modelowa:</b> '+(state.combustionEfficiency*100).toFixed(1)+'% · <b>Energia:</b> '+(state.energyJ/1000).toFixed(1)+' kJ<br><b>Produkty:</b> '+(state.products.join(', ')||'—')+(state.co>0.05?' · CO zwiększone w modelu':'')+(state.soot>0.05?' · możliwa sadza':'')+'<br><small>Model wykorzystuje orientacyjną wartość opałową paliwa i modelowany przepływ masowy. Moc jest w W, energia w J; to nadal model dydaktyczny, nie pełna kinetyka ani CFD.</small>';lab.record('combustionTemperature',state.temp,'°C',{fuel:state.fuel,phi:state.phi,lambda:state.lambda,airFlow:state.air,gasFlow:state.gas});lab.record('combustionPower',state.powerW,'W',{gasFlow:state.gas,airFlow:state.air,massFlow:state.massFlow,efficiency:state.combustionEfficiency});lab.record('combustionEnergy',state.energyJ,'J',{fuel:state.fuel});lab.emit('combustion',{fuel:state.fuel,gasFlow:state.gas,airFlow:state.air,C:state.C,H:state.H,O:state.O,phi:state.phi,lambda:state.lambda,temperature:state.temp,power:state.power,powerW:state.powerW,energyJ:state.energyJ,massFlow:state.massFlow,airMassFlow:state.airMassFlow,o2Required:state.o2Required,o2Available:state.o2Available,efficiency:state.combustionEfficiency,products:state.products,productMass:state.productMass,exhaustMassFlow:state.productMass.total,oxygen:state.oxygen,soot:state.soot,co:state.co});lab.receive('combustionProducts',{source:'combustion',fuel:state.fuel,massFlow:state.productMass.total,products:state.products,CO2:state.productMass.CO2,CO:state.productMass.CO,H2O:state.productMass.H2O,O2:state.productMass.O2,unburnedFuel:state.productMass.fuel});lab.inputs.heatSource={source:'combustion',powerW:state.powerW,energyJ:state.energyJ,temperature:state.temp,efficiency:state.combustionEfficiency,active:state.on};lab.receive('heatSource',lab.inputs.heatSource);}
 q('.fuel').onchange=e=>{state.fuel=e.target.value;if(preset[state.fuel]){[state.C,state.H,state.O]=preset[state.fuel]}sync();update()};q('.gas').oninput=e=>{state.gas=+e.target.value;state.on=state.gas>0;update()};q('.air').oninput=e=>{state.air=+e.target.value;update()};q('.c').oninput=e=>{state.C=+e.target.value;state.fuel='custom';update()};q('.hh').oninput=e=>{state.H=+e.target.value;state.fuel='custom';update()};q('.oo').oninput=e=>{state.O=+e.target.value;state.fuel='custom';update()};
 buttons.querySelector('.ign').onclick=()=>{state.on=true;update()};buttons.querySelector('.stop').onclick=()=>{state.on=false;state.gas=0;state.productMass={CO2:0,CO:0,H2O:0,O2:0,fuel:0,total:0};update()};buttons.querySelector('.airset').onclick=()=>{state.air=100;update()};
 let W=0,H=0,dpr=1,ctx=cv.getContext('2d'),last=0;
 function size(){dpr=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth||320;H=cv.clientHeight||360;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 function txt(t,x,y,n,w,a){ctx.fillStyle=document.documentElement.getAttribute('data-theme')==='dark'?'#e2e8f0':'#1e293b';ctx.font=(w||700)+' '+n+'px Inter,system-ui';ctx.textAlign=a||'left';ctx.fillText(t,x,y)}
 function render(t){if(!cv.isConnected)return;size();const dt=Math.min(.05,(t-last)/1000||0);last=t;ctx.clearRect(0,0,W,H);const cx=W/2,base=H-54;GFX.draw('burner',ctx,{x:cx-90,y:base-250,w:180,h:256},{flame:(state.on&&state.fuel!=='Mg')?{on:1,power:state.power,phi:state.phi,soot:state.soot,temp:state.temp,air:state.air,color:state.flameRGB||null,fuel:(C.PHYS&&C.PHYS.fuels[state.fuel])?state.fuel:'CH4'}:null,fx:(state.on&&state.fuel==='Mg'&&state.power>.05)?{metalBurn:{metal:'Mg',power:Math.max(.3,state.power*1.5)},sparks:state.sparks?{}:undefined}:(state.sparks?{sparks:{}}:null)},{t,dt,pool:(render.bp=render.bp||{})});
   txt('Paliwo: '+(state.fuel==='custom'?'C/H/O':state.fuel),cx,24,14,800,'center');txt('gaz '+Math.round(state.gas)+'% · powietrze '+Math.round(state.air)+'%',cx,44,12,600,'center');txt('φ '+state.phi.toFixed(2)+' · λ '+state.lambda.toFixed(2),cx,64,12,700,'center');txt('T modelowa: '+Math.round(state.temp)+' °C',12,H-18,11,700);txt('moc: '+Math.round(state.power*100)+'%',W-12,H-18,11,700,'right');requestAnimationFrame(render)}
 sync();update();lab.on('tick',()=>{if(state.on)state.energyJ+=state.powerW*HEAT.step;update()});lab.on('reset',()=>{state.energyJ=0;state.powerW=0;state.on=false;state.gas=0;state.productMass={CO2:0,CO:0,H2O:0,O2:0,fuel:0,total:0};update()});requestAnimationFrame(render);
};
P.splash=(h,lab,o)=>{o=o||{};const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||280)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);const bar=el('div');bar.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:7px';bar.innerHTML='<select class="vol" style="'+sty+'flex:1"><option value="1">mały impuls</option><option value="2" selected>średni impuls</option><option value="4">duży impuls</option></select><select class="dir" style="'+sty+'flex:1"><option value="-1">w lewo</option><option value="0" selected>pionowo</option><option value="1">w prawo</option></select><button class="fire" style="'+sty+'background:var(--accent,#0d6868);color:#fff">Wywołaj zdarzenie</button>';h.appendChild(bar);const info=el('div');info.style.cssText='margin-top:6px;font-size:12.5px;color:var(--text-muted,#64748b)';h.appendChild(info);let drops=[],W=0,H=0,last=0,dpr=1,ctx=cv.getContext('2d'),count=0;
 function size(){dpr=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth||320;H=cv.clientHeight||280;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 bar.querySelector('.fire').onclick=()=>{const n=+bar.querySelector('.vol').value,dir=+bar.querySelector('.dir').value;for(let i=0;i<10*n;i++)drops.push({x:W/2,y:H*.58,vx:dir*90+(Math.random()-.5)*120,vy:-80-Math.random()*100*n,r:2+Math.random()*2});count+=n;lab.record('splashIntensity',n,'u',{direction:dir});lab.emit('splash',{intensity:n,direction:dir})};
 function frame(t){if(!cv.isConnected)return;size();const dt=Math.min(.05,(t-last)/1000||0);last=t;ctx.clearRect(0,0,W,H);ctx.strokeStyle='#64748b';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(W*.2,H*.76);ctx.lineTo(W*.8,H*.76);ctx.stroke();for(let i=drops.length-1;i>=0;i--){const d=drops[i];d.vy+=260*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;if(d.y>H*.76||d.x<0||d.x>W){drops.splice(i,1);continue}ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,7);ctx.fillStyle='rgba(40,130,180,.65)';ctx.fill()}ctx.fillStyle='rgba(100,116,139,.18)';ctx.beginPath();ctx.ellipse(W/2,H*.76,70,10,0,0,7);ctx.fill();info.innerHTML='<b>Zdarzenia:</b> '+count+' u · tor i energia są modelem dydaktycznym.';requestAnimationFrame(frame)}requestAnimationFrame(frame)};
P.titration=(h,lab,o)=>{o=o||{};const cv=el('canvas');cv.style.cssText='width:100%;height:210px;display:block';h.appendChild(cv);const bar=el('div');bar.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:7px';bar.innerHTML='<button class="add" style="'+sty+'background:var(--accent,#0d6868);color:#fff">Dodaj porcję titranta</button><button class="reset" style="'+sty+'">Nowe miareczkowanie</button>';h.appendChild(bar);const info=el('div');info.style.cssText='margin-top:6px;font-size:12.5px;color:var(--text-muted,#64748b)';h.appendChild(info);let rows=[],vol=0,eq=8,cvctx=cv.getContext('2d');const nAcid=0.8,cBase=0.1,V0=50;const pHmodel=v=>{try{const Eq=C.EQUILIBRIUM;if(Eq&&typeof Eq.titrationPH==='function'){const Cc=nAcid/(V0/1000);const Vadd=v;const p=Eq.titrationPH({type:'strongStrong',C:Cc,V0:V0/1000,V:Vadd/1000});if(isFinite(p))return p;}}catch(_){}const nB=v*cBase,nA=nAcid,Vml=V0+v;if(nB<nA-1e-9){const h=(nA-nB)/(Vml/1000);return Math.max(0,-Math.log10(Math.max(h,1e-14)));}if(Math.abs(nB-nA)<1e-9)return 7;const oh=(nB-nA)/(Vml/1000);return Math.min(14,14+Math.log10(Math.max(oh,1e-14)));};const add=()=>{vol+=1;const p=pHmodel(vol);rows.push({v:vol,p});lab.record('titrantVolume',vol,'mL');lab.record('titrationPH',p,'pH',{volume:vol});draw();const atEq=Math.abs(vol-eq)<0.51?' · <b>punkt równoważnikowy</b>':'';info.innerHTML='<b>V(NaOH):</b> '+vol+' mL · <b>pH:</b> '+p.toFixed(2)+' · model: 0,8 mmol HCl + 0,1 M NaOH (PE ≈ '+eq+' mL)'+atEq};const reset=()=>{rows=[];vol=0;draw();info.innerHTML='Model gotowy. Dodawanie porcji tworzy krzywą pH(V).'};bar.querySelector('.add').onclick=add;bar.querySelector('.reset').onclick=reset;
 function draw(){if(!cv.isConnected)return;const dpr=Math.min(g.devicePixelRatio||1,2),W=cv.clientWidth||320,H=cv.clientHeight||210;cv.width=W*dpr;cv.height=H*dpr;cvctx.setTransform(dpr,0,0,dpr,0,0);cvctx.clearRect(0,0,W,H);const L=34,R=10,T=12,B=28,X=v=>L+(W-L-R)*v/16,Y=p=>T+(H-T-B)*(12-p)/10;cvctx.strokeStyle='rgba(100,116,139,.22)';for(let i=0;i<=4;i++){const y=T+(H-T-B)*i/4;cvctx.beginPath();cvctx.moveTo(L,y);cvctx.lineTo(W-R,y);cvctx.stroke()}cvctx.font='10px Inter,system-ui';cvctx.fillStyle='#64748b';cvctx.fillText('pH',8,T+4);cvctx.fillText('V titranta [u]',W-88,H-6);if(!rows.length)return;cvctx.strokeStyle='#2563eb';cvctx.lineWidth=2;cvctx.beginPath();rows.forEach((q,i)=>{const x=X(q.v),y=Y(q.p);i?cvctx.lineTo(x,y):cvctx.moveTo(x,y)});cvctx.stroke();rows.forEach(q=>{cvctx.beginPath();cvctx.arc(X(q.v),Y(q.p),3,0,7);cvctx.fillStyle='#2563eb';cvctx.fill()})}reset()};
P.comparisonChart=(h,lab,o)=>{o=o||{};const kinds=o.kinds||['temperature','pH','gasVolume'];const cv=el('canvas');cv.style.cssText='width:100%;height:210px;display:block';h.appendChild(cv);const r=()=>{const dpr=Math.min(g.devicePixelRatio||1,2),W=cv.clientWidth||320,H=cv.clientHeight||210,c=cv.getContext('2d');cv.width=W*dpr;cv.height=H*dpr;c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,H);const L=42,R=12,T=12,B=30;let all=[];kinds.forEach(k=>all=all.concat(lab.series(k).map(x=>+x.value).filter(Number.isFinite)));if(!all.length){c.fillStyle='#64748b';c.font='12px Inter,system-ui';c.fillText('Brak wspólnych pomiarów.',L,28);return}let lo=Math.min(...all),hi=Math.max(...all);if(lo===hi){lo-=1;hi+=1}const trows=lab.measurements.filter(x=>kinds.includes(x.kind));const t0=trows.length?trows[0].t:0,t1=trows.length?trows[trows.length-1].t:t0+1;const X=t=>L+(W-L-R)*(t-t0)/Math.max(1,t1-t0),Y=v=>T+(H-T-B)*(hi-v)/Math.max(1,hi-lo);c.font='10px Inter,system-ui';kinds.forEach((k,ix)=>{const rows=lab.series(k);if(!rows.length)return;c.strokeStyle=['#2563eb','#16a34a','#d97706'][ix%3];c.lineWidth=2;c.beginPath();rows.forEach((q,i)=>{const x=X(q.t),y=Y(+q.value);i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.fillStyle=c.strokeStyle;c.fillText(k, L+ix*90, H-7)});};lab.on('measurement',r);lab.on('reset',r);r()};
P.gasAnalysis=(h,lab,o)=>{o=o||{};const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const read=()=>{const x=lab.inputs&&lab.inputs.combustionProducts;const S=lab.S,g=S.gas;let title=x?'Spaliny ze spalania':(g||'Brak gazu');let c=x?x:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,total:0};const total=Math.max(1e-12,Number(c.total||0));const pct=k=>(100*Number(c[k]||0)/total).toFixed(2);const props=x?'Źródło: stanowisko spalania. Skład jest wynikiem bieżącego bilansu masowego.':(g==='CO₂'?'niepalny; modelowa identyfikacja':g==='H₂'?'palny; nie uruchamiaj testu płomieniem w tym module':g==='NO₂'?'toksyczny; analiza tylko jako model dydaktyczny':'brak danych');box.innerHTML='<div style="'+cardSty+'"><b>Próbka:</b> '+title+'<br><b>CO₂:</b> '+pct('CO2')+'% · <b>CO:</b> '+pct('CO')+'% · <b>H₂O:</b> '+pct('H2O')+'%<br><b>O₂:</b> '+pct('O2')+'% · <b>paliwo:</b> '+pct('fuel')+'%</div><div style="'+cardSty+'"><b>Interpretacja:</b> '+props+(x?' <br><b>Przepływ spalin:</b> '+Number(x.massFlow||0).toExponential(3)+' kg/s':'')+'</div>';};lab.on('tick',read);lab.on('input:combustionProducts',read);lab.on('add',read);lab.on('reset',read);read()};
P.measureStation=(h,lab,o)=>{o=o||{};const kinds=[['mass','Masa','g'],['volume','Objętość','u'],['temperature','Temperatura','°C'],['pressure','Ciśnienie','arb']];const grid=el('div');grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px';h.appendChild(grid);kinds.forEach(([k,l,u])=>{const c=el('div');c.style.cssText=cardSty;c.innerHTML='<b>'+l+'</b><div class="v" style="font-size:20px;margin:4px 0">—</div><small>'+u+' · model</small>';grid.appendChild(c);c.dataset.kind=k});const controls=el('div');controls.style.cssText='display:flex;gap:6px;margin-top:7px';controls.innerHTML='<input class="val" type="number" step="0.1" value="1" style="'+sty+'flex:1"><select class="kind" style="'+sty+'flex:1"><option value="mass">Masa</option><option value="volume">Objętość</option><option value="pressure">Ciśnienie</option></select><button class="rec" style="'+sty+'background:var(--accent,#0d6868);color:#fff">Zapisz pomiar</button>';h.appendChild(controls);const msg=el('div');msg.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';h.appendChild(msg);controls.querySelector('.rec').onclick=()=>{const k=controls.querySelector('.kind').value,v=+controls.querySelector('.val').value;lab.record(k,v,k==='mass'?'g':k==='volume'?'u':'arb',{manual:true});msg.textContent='Zapisano: '+v+' '+(k==='mass'?'g':k==='volume'?'u':'arb')};const r=()=>kinds.forEach(([k])=>{const rows=lab.series(k),x=grid.querySelector('[data-kind="'+k+'"] .v');if(x)x.textContent=rows.length?Number(rows[rows.length-1].value).toFixed(2):'—'});lab.on('measurement',r);lab.on('reset',r);r()};
P.reactionCatalog=(h,lab)=>{const rows=[['Kwas + metal','Mg + 2 HCl → MgCl₂ + H₂','gaz; reakcja wypierania','kontrola gazu i BHP'],['Węglan + kwas','CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂','gaz; pienienie','CO₂ jako produkt modelu'],['Metal + woda','2 Na + 2 H₂O → 2 NaOH + H₂','gaz; ogrzewanie','tylko pokaz dydaktyczny'],['Tlenek zasadowy + woda','CaO + H₂O → Ca(OH)₂','wydzielanie ciepła','mocne ogrzanie modelowane'],['Kwas + zasada','HCl + NaOH → NaCl + H₂O','neutralizacja','zmiana pH'],['Strącanie','2 AgNO₃ + BaCl₂ → 2 AgCl + Ba(NO₃)₂','osad','obserwacja osadu']];h.innerHTML='<div style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Typ</th><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Równanie</th><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Efekt</th><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Uwagi</th></tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(x=>'<td style="padding:5px;border-bottom:1px solid var(--border)">'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><small style="display:block;margin-top:6px;color:var(--text-muted)">Katalog jest biblioteką dydaktyczną; szczegóły warunków doświadczeń powinny pochodzić z centralnego CHE.DATA.</small>'};
P.reactionTable=(h,lab)=>{const r=()=>{const rows=[];(lab.S.log||[]).forEach(l=>(l.evs||[]).forEach(e=>rows.push({t:l.id,type:e.type,eq:e.eq,obs:e.obs,warn:e.warn||''})));h.innerHTML=rows.length?'<div style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Krok</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Typ</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Równanie</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Obserwacja</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">BHP</th></tr></thead><tbody>'+rows.map(x=>'<tr><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+x.t+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+x.type+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0);font-family:var(--mono,monospace)">'+x.eq+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+x.obs+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+(x.warn||'—')+'</td></tr>').join('')+'</tbody></table></div>':'<small>Tabela zapełni się po zajściu reakcji.</small>'};lab.on('add',r);lab.on('reset',r);r()};


/* ---------- PAKIET GAZOWY v0.80 ---------- */
P.gasSample=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Objętość próbki <input class=sv type=range min=.05 max=10 step=.05 value=1 style=width:100%><output class=svv>1.00</output> L</label><label>Temperatura <input class=st type=range min=-20 max=300 value=25 style=width:100%><output class=stv>25</output> °C</label><label>Ciśnienie <input class=sp type=range min=70 max=120 step=.5 value=101.3 style=width:100%><output class=spv>101.3</output> kPa</label><button class=take>Pobierz próbkę</button>';box.appendChild(c);const out=el('div');box.appendChild(out);const st={V:.001,T:25,p:101325,sample:null};lab.gasSampleState=st;const q=x=>c.querySelector(x);function render(){const sample=st.sample;if(!sample){out.innerHTML='<div style="'+cardSty+'">Brak pobranej próbki.</div>';return}const n=Object.values(sample.moles||{}).reduce((a,v)=>a+Number(v||0),0),keys=['CO2','CO','H2O','O2','fuel'];out.innerHTML='<div style="'+cardSty+'"><b>Próbka:</b> '+(sample.V*1000).toFixed(1)+' mL · '+sample.T.toFixed(1)+' °C · '+(sample.p/1000).toFixed(1)+' kPa · n='+n.toFixed(6)+' mol</div><div style="'+cardSty+'">'+keys.map(k=>k+': '+(100*Number(sample.moles[k]||0)/Math.max(n,1e-15)).toFixed(2)+'%').join(' · ')+'</div>'}q('.sv').oninput=e=>{st.V=+e.target.value/1000;q('.svv').value=(+e.target.value).toFixed(2)};q('.st').oninput=e=>{st.T=+e.target.value;q('.stv').value=st.T};q('.sp').oninput=e=>{st.p=+e.target.value*1000;q('.spv').value=(st.p/1000).toFixed(1)};q('.take').onclick=()=>{const cs=lab.chemistry.substances||{},m={};Object.keys(cs).forEach(k=>{const x=cs[k];if(x.phase==='gas'&&Number(x.amountMol)>0)m[k]=Number(x.amountMol)});st.sample={moles:m,T:st.T,p:st.p,V:st.V,source:'CHE.LAB.chemistry',time:lab.t};lab.receive('gasSample',st.sample);lab.record('gasSampleVolume',st.V*1000,'L',{source:st.sample.source});lab.record('gasSampleMoles',Object.values(m).reduce((a,v)=>a+v,0),'mol',{source:st.sample.source});lab.emit('gasSampleTaken',st.sample);render()};lab.on('chemistry',render);lab.on('reset',()=>{st.sample=null;render()});render()};
P.gasSeparator=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const out=el('div');box.appendChild(out);const render=()=>{const c=lab.chemistry.substances||{},gas=Object.values(c).filter(x=>x.phase==='gas').reduce((a,x)=>a+Number(x.amountMol||0),0),cond=Number(c.H2O_liquid&&c.H2O_liquid.amountMol||0),solid=Number(c.MgO&&c.MgO.amountMol||0),mw=GASPHYS.MW||{};out.innerHTML='<div style="'+cardSty+'"><b>Separacja faz:</b> gaz '+gas.toFixed(6)+' mol · H₂O(g) '+Number(c.H2O&&c.H2O.amountMol||0).toFixed(6)+' mol · H₂O(l) '+cond.toFixed(6)+' mol · MgO(s) '+solid.toFixed(6)+' mol</div><div style="'+cardSty+'">Kondensat H₂O: '+(cond*(mw.H2O||.01801528)*1000).toFixed(3)+' g · MgO(s): '+(solid*(mw.MgO||.0403044)*1000).toFixed(3)+' g</div>'};lab.on('chemistry',render);lab.on('reset',render);render()};
P.gasAbsorber=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Składnik <select class=ak><option value=CO2>CO₂</option><option value=CO>CO</option><option value=H2O>H₂O(g)</option></select></label><label>Skuteczność <input class=ae type=range min=0 max=100 value=80><output class=aev>80</output>%</label><button class=abs>Zastosuj absorber</button>';box.appendChild(c);const out=el('div');box.appendChild(out);const st={component:'CO2',eff:.8,absorbed:0};lab.gasAbsorberState=st;const render=()=>{const x=lab.chemistry.substances[st.component],before=Number(x&&x.amountMol||0),removed=before*st.eff;out.innerHTML='<div style="'+cardSty+'"><b>'+st.component+':</b> przed '+before.toFixed(6)+' mol · po '+(before-removed).toFixed(6)+' mol · usunięto '+removed.toFixed(6)+' mol</div>'};c.querySelector('.ak').onchange=e=>{st.component=e.target.value;render()};c.querySelector('.ae').oninput=e=>{st.eff=+e.target.value/100;c.querySelector('.aev').value=e.target.value;render()};c.querySelector('.abs').onclick=()=>{const x=lab.chemistry.substances[st.component];if(!x)return;const old=Number(x.amountMol||0),removed=old*st.eff;x.amountMol=old-removed;x.massKg=x.amountMol*Number(x.molarMass||0);st.absorbed+=removed;lab.record('absorbedGas',removed,'mol',{component:st.component,efficiency:st.eff,source:'CHE.LAB.chemistry'});lab.emit('gasAbsorbed',{component:st.component,removed,remaining:x.amountMol});render()};lab.on('chemistry',render);lab.on('reset',()=>{st.absorbed=0;render()});render()};
P.gasUncertainty=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.innerHTML='<label>u(V) [%] <input class=uvv type=number step=.01 value=2></label> <label>u(T) [K] <input class=utt type=number step=.1 value=.5></label> <label>u(p) [%] <input class=upp type=number step=.01 value=.5></label>';box.appendChild(c);const out=el('div');box.appendChild(out);function render(){const g=lab.chemistry.gasSnapshot||{},T=Math.max(Number(g.temperature||25)+273.15,1),uV=+c.querySelector('.uvv').value/100,uT=+c.querySelector('.utt').value/T,uP=+c.querySelector('.upp').value/100,ur=Math.sqrt(uV*uV+uT*uT+uP*uP);lab.inputs.gasUncertainty=ur;out.innerHTML='<div style="'+cardSty+'"><b>Niepewność względna:</b> ±'+(100*ur).toFixed(2)+'% · wspólne V, T i p.</div>'}['uvv','utt','upp'].forEach(k=>c.querySelector('.'+k).oninput=render);lab.on('chemistry',render);render()};
P.gasBalance=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const out=el('div');box.appendChild(out);const render=()=>{const g=lab.chemistry.gasSnapshot||{},a=lab.chemistry.auditGas(lab.gasTrapState||{}),chem=lab.chemistry.last||null;const gasMol=Object.values(lab.chemistry.substances||{}).filter(x=>x.phase==='gas').reduce((z,x)=>z+Number(x.amountMol||0),0);out.innerHTML='<div style="'+cardSty+'"><b>Wspólny bilans gazu:</b> '+gasMol.toFixed(6)+' mol w fazie gazowej · '+(Number(g.volumeL||0)).toFixed(3)+' L · '+(Number(g.temperature||25)).toFixed(1)+' °C</div><div style="'+cardSty+'"><b>Synchronizacja:</b> '+(a.ok?'PASS':'BLOCK')+(a.issues.length?' · '+a.issues.join('; '):' · gasTrap i CHE.LAB.chemistry są zgodne')+'</div>'+(chem?'<div style="'+cardSty+'">Ostatnia reakcja: '+(chem.equation||chem.id||'—')+'</div>':'')};lab.on('chemistry',render);lab.on('tick',render);lab.on('reset',render);render()};

