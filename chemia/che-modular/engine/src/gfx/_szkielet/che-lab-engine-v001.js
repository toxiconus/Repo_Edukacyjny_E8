

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
 
function salt(cs,cc,as,ac,poly){const d=gcd(cc,ac),n=ac/d,m=cc/d;const an=(m>1&&poly?'('+as+')':as)+(m>1?m:'');return as==='CH3COO'?an+cs+(n>1?n:''):cs+(n>1?n:'')+an}

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
 
const INS={'Ag|Cl':[[250,250,250],'AgCl'],'Ba|SO4':[[250,250,250],'BaSO4'],'Ca|SO4':[[250,250,250],'CaSO4'],'Ba|CO3':[[248,248,248],'BaCO3'],'Ca|CO3':[[248,248,248],'CaCO3'],'Ag|CO3':[[235,225,150],'Ag2CO3'],
 'Cu|OH':[[100,160,230],'Cu(OH)2'],'Fe|OH':[[170,85,45],'Fe(OH)3'],'Zn|OH':[[245,245,245],'Zn(OH)2'],'Mg|OH':[[245,245,245],'Mg(OH)2'],'Al|OH':[[245,245,245],'Al(OH)3']};
const ION_COL={Cu:[70,155,215],Fe2:[190,225,195],Fe3:[235,190,90]};
const WATER=[205,228,238];

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
function settle(S,news,evs){ 
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
 
const DEPS=[['CHE.EQUILIBRIUM.weakAcidPH / bufferPH / titrationPH','pH słabych kwasów, bufor, miareczkowanie',()=>!!(C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH),'wzór wewnętrzny LAB'],['CHE.COLORS (rgb/hex jonów i osadów)','barwy Cu²⁺, Fe³⁺, AgCl…',()=>!!(C.COLORS&&(C.COLORS.rgb||C.COLORS.get)),'tabele ION_COL / INS'],['CHE.DATA.METAL_SERIES / INDICATORS / SOLUBILITY','szereg aktywności, zakresy wskaźników, Ksp',()=>!!(C.DATA&&C.DATA.METAL_SERIES),'wbudowane MET / IND / INS'],['zmienne CSS / tokeny silnika (--panel→--surface)','wygląd paneli',()=>true,'fallback w module']];
const OWN=['MET (aktywność, wartościowość, barwa metali)','ACID / BASE (kwasy, zasady, moc)','OXI / CARB / SALT (tlenki, węglany, sole)','INS (reguły rozpuszczalności i barwy osadów)','ION_COL (barwy jonów)','IND + indCol (wskaźniki i ich barwy)'];

C.LAB={version:'1.02',DEPS,OWN,GROUPS,MET,KIND,ACID,BASE,OXI,CARB,SALT,IND,INS,ION_COL,UNI,
  newState,add,pH,liquidColor,indCol,balance,parse,pretty,salt,
  tables:null, engineBound:false};
C.LAB.tables={MET,ACID,BASE,OXI,CARB,SALT,IND,INS,ION_COL,UNI,GROUPS};
 
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
   
  if(Array.isArray(D.METAL_SERIES)&&D.METAL_SERIES.length){
    const rank={};D.METAL_SERIES.forEach((sym,i)=>{rank[sym]=D.METAL_SERIES.length-i});
    Object.keys(MET).forEach(k=>{if(rank[k]!=null)MET[k].a=rank[k]-(rank.H!=null?rank.H:0)});
  }
   
  const ionMap={Cu:'ion-cu2',Fe2:'ion-fe2',Fe3:'ion-fe3'};
  Object.keys(ionMap).forEach(k=>{const rgb=fromCol(ionMap[k]);if(rgb)ION_COL[k]=rgb});
  const pptMap={'Ag|Cl':'ppt-agcl','Ba|SO4':'ppt-baso4','Ca|CO3':'ppt-caco3','Cu|OH':'ppt-cu-oh-2','Fe|OH':'ppt-fe-oh-3','Zn|OH':'ppt-zn-oh-2','Al|OH':'ppt-al-oh-3','Mg|OH':'ppt-zn-oh-2'};
  Object.keys(pptMap).forEach(k=>{const rgb=fromCol(pptMap[k]);if(rgb&&INS[k])INS[k][0]=rgb});
  const metalCol={Cu:'metal-cu',Ag:'metal-ag',Fe:'metal-fe',Zn:'metal-zn',Al:'metal-al',Mg:'metal-mg'};
  Object.keys(metalCol).forEach(k=>{const rgb=fromCol(metalCol[k]);if(rgb&&MET[k])MET[k].c=rgb});
   
  const sol=D.SOLUBILITY||{};
  Object.keys(sol).forEach(f=>{
    const row=sol[f]; if(!row||!(row.Ksp>0)||row.Ksp>1e-3)return;
    const map={AgCl:'Ag|Cl',CaCO3:'Ca|CO3',BaSO4:'Ba|SO4',CaSO4:'Ca|SO4'};
    const key=map[f]; if(!key)return;
    if(!INS[key])INS[key]=[[250,250,250],f];
  });
   
  const byName={};
  (D.INDICATORS||[]).forEach(x=>{byName[String(x.name||'').toLowerCase()]=x});
  const mapInd={phph:'fenoloftaleina',mo:'oranż metylowy',btb:'błękit bromotymolowy'};
  Object.keys(mapInd).forEach(id=>{
    const src=byName[mapInd[id]]; if(!src||!IND[id])return;
    IND[id].lo=src.lo; IND[id].hi=src.hi; IND[id].fromEngine=true;
  });
   
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
     
  });
   
  GROUPS.forEach(g=>{
    if(g[0]!=='metal')return;
    const ob=g[2];
    Object.keys(ob).forEach(id=>{
      const lab=subLabel(id);
      if(lab)ob[id].l=lab+(MET[id]&&MET[id].w?' (reaguje z wodą – pokaz)':'');
      else if(MET[id]&&MET[id].w)ob[id].l=id+' (reaguje z wodą – pokaz)';
    });
  });
   
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
       
      low(x)+'Hcl', low(x)+'hcl', low(x)+'H2so4', low(x)+'h2so4',
      low(x)+'Hno3', low(x)+'hno3',
      'hcl'+low(y), 'h2so4'+low(y), 'hno3'+low(y)
    ];
     
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
         
        return 7+.5*(4.745+Math.log10(k*A));
      }
    }catch(_){}
    return _pH(S);
  };
   
})();

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
const PNAMES=['selfTest','chemistryAudit','coreConsistencyAudit','gasCoreAudit','gasParallelAudit','reactionCore','precipitation','graphAudit','scenarios','stationBoard','experimentIO','controls','beaker','gasTrap','flask','testTube','cooler','gasLine','pHmeter','thermometer','effectLab','library','paper','pipette','balance','molTank','roundFlask','volFlask','funnel','petri','evapDish','bhp','seq','obs','eq','ph','temp','steps','log','reactionTable','measureChart','comparisonChart','titration','combustion','thermal','splash','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureStation','reactionCatalog','linkView','workflow']; 
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
   
  ctx.restore();ctx.save();
  ctx.strokeStyle='rgba(148,163,184,.85)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(bx-1,by);ctx.lineTo(bx+bw+1,by);ctx.stroke();
  ctx.strokeStyle='rgba(100,116,139,.55)';ctx.fillStyle='rgba(100,116,139,.75)';ctx.font='600 9px Inter,system-ui';ctx.textAlign='right';ctx.lineWidth=1;
  for(let u=0;u<=4;u++){const y=bot-bh*(.28+.18*u);if(y<by+6||y>bot-2)continue;ctx.beginPath();ctx.moveTo(bx+bw-11,y);ctx.lineTo(bx+bw-2,y);ctx.stroke();ctx.fillText(String(u+1),bx+bw-13,y+3);}
  ctx.save();path();ctx.closePath();ctx.clip();
   
  let ph0=0;if(fx.precipitate)S.ppts.forEach((q,i)=>{if(q.eq<=.02)return;const hh=clamp(q.eq*7,4,34);ctx.fillStyle=css(q.col,q.metal?.95:.9);ctx.fillRect(bx,bot-ph0-hh,bw,hh);ph0+=hh;
   if(!q.metal&&pop>0){ctx.fillStyle=css(q.col,.35*Math.min(1,pop));ctx.fillRect(bx,top,bw,bot-top)}});
   
  let sx=bx+bw*.18;if(fx.solids)S.solids.forEach((s,i)=>{if(s.eq<=.02)return;const k=clamp(s.eq/4,.15,1),w=bw*.2*(s.t==='metal'?.7:1)*(.5+k*.5),h=s.t==='metal'?(26+14*k):(14+8*k);
   ctx.fillStyle=css(s.col);ctx.beginPath();if(ctx.roundRect)ctx.roundRect(sx,bot-ph0-h-2,w,h,4);else ctx.rect(sx,bot-ph0-h-2,w,h);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=1;ctx.stroke();sx+=w+8;if(sx>bx+bw-w)sx=bx+bw*.18});
   
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
 const collectTick=()=>{if(!linked)return;const now=lab.t,dt=Math.max(0,now-data.last);data.last=now;if(data.signal>0){ data.volume=Math.min(100,data.volume+data.signal*dt*.9);data.signal=Math.max(0,data.signal-dt*1.6);lab.record('gasVolume',data.volume,'u',{gas:data.gas})}};
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
   
   const o2reqMol=Math.max(0,stoichO2());
   const fuelMolFlow=M>0?state.massFlow/M:0;
   const o2MassPerKgFuel=o2reqMol>0?(o2reqMol*32)/(M):0;
   
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

P.gasSample=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Objętość próbki <input class=sv type=range min=.05 max=10 step=.05 value=1 style=width:100%><output class=svv>1.00</output> L</label><label>Temperatura <input class=st type=range min=-20 max=300 value=25 style=width:100%><output class=stv>25</output> °C</label><label>Ciśnienie <input class=sp type=range min=70 max=120 step=.5 value=101.3 style=width:100%><output class=spv>101.3</output> kPa</label><button class=take>Pobierz próbkę</button>';box.appendChild(c);const out=el('div');box.appendChild(out);const st={V:.001,T:25,p:101325,sample:null};lab.gasSampleState=st;const q=x=>c.querySelector(x);function render(){const sample=st.sample;if(!sample){out.innerHTML='<div style="'+cardSty+'">Brak pobranej próbki.</div>';return}const n=Object.values(sample.moles||{}).reduce((a,v)=>a+Number(v||0),0),keys=['CO2','CO','H2O','O2','fuel'];out.innerHTML='<div style="'+cardSty+'"><b>Próbka:</b> '+(sample.V*1000).toFixed(1)+' mL · '+sample.T.toFixed(1)+' °C · '+(sample.p/1000).toFixed(1)+' kPa · n='+n.toFixed(6)+' mol</div><div style="'+cardSty+'">'+keys.map(k=>k+': '+(100*Number(sample.moles[k]||0)/Math.max(n,1e-15)).toFixed(2)+'%').join(' · ')+'</div>'}q('.sv').oninput=e=>{st.V=+e.target.value/1000;q('.svv').value=(+e.target.value).toFixed(2)};q('.st').oninput=e=>{st.T=+e.target.value;q('.stv').value=st.T};q('.sp').oninput=e=>{st.p=+e.target.value*1000;q('.spv').value=(st.p/1000).toFixed(1)};q('.take').onclick=()=>{const cs=lab.chemistry.substances||{},m={};Object.keys(cs).forEach(k=>{const x=cs[k];if(x.phase==='gas'&&Number(x.amountMol)>0)m[k]=Number(x.amountMol)});st.sample={moles:m,T:st.T,p:st.p,V:st.V,source:'CHE.LAB.chemistry',time:lab.t};lab.receive('gasSample',st.sample);lab.record('gasSampleVolume',st.V*1000,'L',{source:st.sample.source});lab.record('gasSampleMoles',Object.values(m).reduce((a,v)=>a+v,0),'mol',{source:st.sample.source});lab.emit('gasSampleTaken',st.sample);render()};lab.on('chemistry',render);lab.on('reset',()=>{st.sample=null;render()});render()};
P.gasSeparator=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const out=el('div');box.appendChild(out);const render=()=>{const c=lab.chemistry.substances||{},gas=Object.values(c).filter(x=>x.phase==='gas').reduce((a,x)=>a+Number(x.amountMol||0),0),cond=Number(c.H2O_liquid&&c.H2O_liquid.amountMol||0),solid=Number(c.MgO&&c.MgO.amountMol||0),mw=GASPHYS.MW||{};out.innerHTML='<div style="'+cardSty+'"><b>Separacja faz:</b> gaz '+gas.toFixed(6)+' mol · H₂O(g) '+Number(c.H2O&&c.H2O.amountMol||0).toFixed(6)+' mol · H₂O(l) '+cond.toFixed(6)+' mol · MgO(s) '+solid.toFixed(6)+' mol</div><div style="'+cardSty+'">Kondensat H₂O: '+(cond*(mw.H2O||.01801528)*1000).toFixed(3)+' g · MgO(s): '+(solid*(mw.MgO||.0403044)*1000).toFixed(3)+' g</div>'};lab.on('chemistry',render);lab.on('reset',render);render()};
P.gasAbsorber=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Składnik <select class=ak><option value=CO2>CO₂</option><option value=CO>CO</option><option value=H2O>H₂O(g)</option></select></label><label>Skuteczność <input class=ae type=range min=0 max=100 value=80><output class=aev>80</output>%</label><button class=abs>Zastosuj absorber</button>';box.appendChild(c);const out=el('div');box.appendChild(out);const st={component:'CO2',eff:.8,absorbed:0};lab.gasAbsorberState=st;const render=()=>{const x=lab.chemistry.substances[st.component],before=Number(x&&x.amountMol||0),removed=before*st.eff;out.innerHTML='<div style="'+cardSty+'"><b>'+st.component+':</b> przed '+before.toFixed(6)+' mol · po '+(before-removed).toFixed(6)+' mol · usunięto '+removed.toFixed(6)+' mol</div>'};c.querySelector('.ak').onchange=e=>{st.component=e.target.value;render()};c.querySelector('.ae').oninput=e=>{st.eff=+e.target.value/100;c.querySelector('.aev').value=e.target.value;render()};c.querySelector('.abs').onclick=()=>{const x=lab.chemistry.substances[st.component];if(!x)return;const old=Number(x.amountMol||0),removed=old*st.eff;x.amountMol=old-removed;x.massKg=x.amountMol*Number(x.molarMass||0);st.absorbed+=removed;lab.record('absorbedGas',removed,'mol',{component:st.component,efficiency:st.eff,source:'CHE.LAB.chemistry'});lab.emit('gasAbsorbed',{component:st.component,removed,remaining:x.amountMol});render()};lab.on('chemistry',render);lab.on('reset',()=>{st.absorbed=0;render()});render()};
P.gasUncertainty=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.innerHTML='<label>u(V) [%] <input class=uvv type=number step=.01 value=2></label> <label>u(T) [K] <input class=utt type=number step=.1 value=.5></label> <label>u(p) [%] <input class=upp type=number step=.01 value=.5></label>';box.appendChild(c);const out=el('div');box.appendChild(out);function render(){const g=lab.chemistry.gasSnapshot||{},T=Math.max(Number(g.temperature||25)+273.15,1),uV=+c.querySelector('.uvv').value/100,uT=+c.querySelector('.utt').value/T,uP=+c.querySelector('.upp').value/100,ur=Math.sqrt(uV*uV+uT*uT+uP*uP);lab.inputs.gasUncertainty=ur;out.innerHTML='<div style="'+cardSty+'"><b>Niepewność względna:</b> ±'+(100*ur).toFixed(2)+'% · wspólne V, T i p.</div>'}['uvv','utt','upp'].forEach(k=>c.querySelector('.'+k).oninput=render);lab.on('chemistry',render);render()};
P.gasBalance=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const out=el('div');box.appendChild(out);const render=()=>{const g=lab.chemistry.gasSnapshot||{},a=lab.chemistry.auditGas(lab.gasTrapState||{}),chem=lab.chemistry.last||null;const gasMol=Object.values(lab.chemistry.substances||{}).filter(x=>x.phase==='gas').reduce((z,x)=>z+Number(x.amountMol||0),0);out.innerHTML='<div style="'+cardSty+'"><b>Wspólny bilans gazu:</b> '+gasMol.toFixed(6)+' mol w fazie gazowej · '+(Number(g.volumeL||0)).toFixed(3)+' L · '+(Number(g.temperature||25)).toFixed(1)+' °C</div><div style="'+cardSty+'"><b>Synchronizacja:</b> '+(a.ok?'PASS':'BLOCK')+(a.issues.length?' · '+a.issues.join('; '):' · gasTrap i CHE.LAB.chemistry są zgodne')+'</div>'+(chem?'<div style="'+cardSty+'">Ostatnia reakcja: '+(chem.equation||chem.id||'—')+'</div>':'')};lab.on('chemistry',render);lab.on('tick',render);lab.on('reset',render);render()};

(function(){
const P={version:'1.1'},R=8.314462618,G=9.81,M_AIR=28.96,P0=101.325;
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*cl(t,0,1)),sstep=(a,b,x)=>{const t=cl((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const hex=h=>{h=String(h||'').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');const n=parseInt(h,16);return isFinite(n)?[n>>16&255,n>>8&255,n&255]:null};
const COL=(id)=>{const K=C.COLORS;try{if(K&&K.get){const r=K.get(id);if(r&&r.hex)return hex(r.hex)}}catch(_){}return null};
 
const tab=(T,x)=>{if(x<=T[0][0])return T[0][1];for(let i=1;i<T.length;i++)if(x<=T[i][0]){const a=T[i-1],b=T[i];return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0])}return T[T.length-1][1]};

const MM={H2:2.016,He:4.003,CH4:16.04,NH3:17.03,H2O:18.02,C2H2:26.04,CO:28.01,N2:28.01,C2H4:28.05,NO:30.01,O2:32.00,H2S:34.08,HCl:36.46,Ar:39.95,CO2:44.01,C3H8:44.10,N2O:44.01,NO2:46.01,C2H5OH:46.07,C4H10:58.12,SO2:64.07,Cl2:70.90,O3:48.00,CH3COCH3:58.08};
P.molarMass=f=>{try{const m=C.CHEM&&C.CHEM.molarMass&&C.CHEM.molarMass(f);const v=typeof m==='number'?m:m&&(m.value||m.M||m.molarMass);if(v>0)return v}catch(_){}return MM[f]||null};

P.blackbody=Tk=>{const t=cl(Tk,600,40000)/100;let r,g,b;
 r=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592);
 g=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492);
 b=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[r,g,b].map(v=>Math.round(cl(v,0,255)))};
 
P.glow=Tc=>{const Tk=Tc+273.15,a=sstep(500,1300,Tc);const name=Tc<500?'brak żarzenia':Tc<650?'ciemnowiśniowy':Tc<850?'wiśniowy':Tc<1000?'jasnoczerwony':Tc<1200?'pomarańczowy':Tc<1400?'żółty':'biały';return{rgb:P.blackbody(Tk),a,name}};

const FL_FB={Li:[225,29,72],Na:[255,179,0],K:[179,136,255],Ca:[234,88,12],Sr:[220,38,38],Ba:[163,230,53],Cu:[34,197,94],B:[74,222,128],Rb:[192,132,252],Cs:[129,140,248]};
const FL_NM={Li:'lit — karminowy',Na:'sód — żółty',K:'potas — fioletowy (przez szkło kobaltowe)',Ca:'wapń — ceglastoczerwony',Sr:'stront — karminowoczerwony',Ba:'bar — żółtozielony',Cu:'miedź — zielony / niebieskozielony',B:'bor — zielony',Rb:'rubid — czerwonofioletowy',Cs:'cez — niebieskofioletowy'};
P.flameColor=sym=>{if(!sym)return null;const s=String(sym);return COL('flame-'+s.toLowerCase())||FL_FB[s]||null};
P.flameName=sym=>FL_NM[sym]||sym;
P.flameColors=()=>{const o={};Object.keys(FL_FB).forEach(k=>o[k]=P.flameColor(k));try{(C.COLORS&&C.COLORS.list?C.COLORS.list('flame'):[]).forEach(r=>{const k=r.name;if(k&&!o[k])o[k]=hex(r.hex)})}catch(_){}return o};
P.flameNames=()=>{const o={};Object.keys(P.flameColors()).forEach(k=>o[k]=P.flameName(k));return o};

const FUELS={
 CH4:{name:'metan (gaz ziemny)',C:1,H:4,O:0,Tad:2223,lum:1.3,SL:.37,lhv:50.0,vis:1},
 C3H8:{name:'propan',C:3,H:8,O:0,Tad:2268,lum:1.25,SL:.43,lhv:46.4,vis:1},
 C4H10:{name:'butan (zapalniczka)',C:4,H:10,O:0,Tad:2243,lum:1.2,SL:.41,lhv:45.7,vis:1},
 C2H5OH:{name:'etanol (lampa spirytusowa)',C:2,H:6,O:1,Tad:2193,lum:1.9,SL:.42,lhv:26.8,vis:.8,diffSoot:.15},
 H2:{name:'wodór',C:0,H:2,O:0,Tad:2483,lum:99,SL:2.1,lhv:120,vis:.22,diffSoot:0},
 CO:{name:'tlenek węgla(II)',C:1,H:0,O:1,Tad:2383,lum:99,SL:.45,lhv:10.1,vis:.75,diffSoot:0},
 C2H2:{name:'acetylen',C:2,H:2,O:0,Tad:2500,lum:1.05,SL:1.5,lhv:48.2,vis:1,diffSoot:.95},
 C25H52:{name:'parafina (świeca)',C:25,H:52,O:0,Tad:2200,lum:1.0,SL:.4,lhv:42,vis:1,diff:1,diffSoot:.7}
};
P.fuels=FUELS;
P.o2Need=f=>{const F=FUELS[f]||FUELS.CH4;return F.C+F.H/4-F.O/2};
 
P.phi=(fuel,fuelFlow,airFlow)=>{const need=P.o2Need(fuel)*fuelFlow,av=.2095*airFlow;return av>0?need/av:9};
const BLUE_CORE=[45,95,235],BLUE_OUT=[95,160,255],H2_COL=[175,200,255];
 
P.flame=o=>{o=o||{};const id=FUELS[o.fuel]?o.fuel:'CH4',F=FUELS[id],power=cl(o.power==null?1:o.power,0,1),diff=o.diffusion!=null?!!o.diffusion:!!F.diff;
 let phi=o.phi!=null?o.phi:o.air!=null?1/Math.max(.08,o.air):1;if(diff)phi=Math.max(phi,2.2);
  
 const dT=phi-1.05,eff=Math.max(.35,1-(phi<1.05?.9:.55)*dT*dT);let Tk=diff?.78*F.Tad:300+(F.Tad-300)*eff;Tk*=.9+.1*power;
  
 let soot=diff?(F.diffSoot==null?.6:F.diffSoot):sstep(F.lum-.1,F.lum+.45,phi);if(o.soot!=null)soot=Math.max(soot,o.soot);
 const lumRGB=mix(P.blackbody(Math.min(Tk,2000)),[255,226,140],.6) ,salt=o.salt?P.flameColor(o.salt):null;
 let outer=id==='H2'?H2_COL:mix(BLUE_OUT,lumRGB,soot),core=soot>.65?mix([255,220,140],lumRGB,.4):id==='H2'?[205,220,255]:BLUE_CORE;
 if(salt){outer=mix(outer,salt,.85);core=mix(core,salt,.35)}
 const regime=diff?'dyfuzyjny (świecący)':phi<.75?'mieszanka uboga (nadmiar O₂)':phi<=1.15?'około stechiometrii':'mieszanka bogata (za mało O₂)';
 const products=['CO₂','H₂O'].filter((x,i)=>i?F.H>0:F.C>0);if(F.C>0&&phi>1.1)products.push('CO');if(F.C>0&&soot>.3)products.push('C (sadza)');
  
 const h=power*(diff?1.25:1)*(1+.55*Math.max(0,phi-1)),cone=diff?0:cl(.42*power*(.37/F.SL)*(phi>1?1+.4*(phi-1):1),.08,.8);
 return{fuel:id,fuelName:F.name,phi,lambda:1/phi,T:Tk,Tc:Tk-273.15,soot,outer:outer.map(Math.round),core:core.map(Math.round),alpha:(salt?Math.max(.65,F.vis):F.vis)*(.35+.65*Math.sqrt(power)),
  h,cone,flickerHz:diff?12:8+4*power,regime,products,salt:o.salt||null,saltName:o.salt?P.flameName(o.salt):null,luminous:soot>.3||!!salt,
  label:(diff?'płomień dyfuzyjny':soot>.3?'płomień świecący, kopcący':'płomień nieświecący (niebieski)')+' · ~'+Math.round(Tk-273.15)+' °C'}};

const GASES={
 H2:{name:'wodór',col:null,smell:'bez zapachu',flam:1,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'zapalony – charakterystyczny „pyk” (mieszanina z powietrzem)'},
 O2:{name:'tlen',col:null,smell:'bez zapachu',flam:0,ox:1,tox:0,sol:'słabo',aq:'—',test:'tlące się łuczywko zapala się'},
 N2:{name:'azot',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'gasi płomień, nie mętni wody wapiennej'},
 CO2:{name:'tlenek węgla(IV)',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'umiarkowanie',aq:'słabo kwasowy',test:'mętnieje woda wapienna; gasi płomień'},
 CO:{name:'tlenek węgla(II)',col:null,smell:'bez zapachu',flam:1,ox:0,tox:3,sol:'bardzo słabo',aq:'—',test:'pali się niebieskim płomieniem (tylko pokaz)'},
 NH3:{name:'amoniak',col:null,smell:'ostry, duszący',flam:0,ox:0,tox:2,sol:'bardzo dobrze',aq:'zasadowy',test:'wilgotny papierek uniwersalny – niebieski'},
 HCl:{name:'chlorowodór',col:null,smell:'ostry, drażniący',flam:0,ox:0,tox:2,sol:'bardzo dobrze',aq:'kwasowy',test:'z NH₃ biały dym NH₄Cl; wilgotny papierek – czerwony'},
 Cl2:{name:'chlor',col:[190,210,80],smell:'duszący',flam:0,ox:1,tox:3,sol:'umiarkowanie',aq:'kwasowy, odbarwia',test:'żółtozielony; odbarwia wilgotny papierek'},
 NO2:{name:'tlenek azotu(IV)',col:'gas-no2',smell:'duszący',flam:0,ox:1,tox:3,sol:'reaguje z wodą',aq:'kwasowy',test:'brunatny gaz (tylko pokaz nauczyciela)'},
 NO:{name:'tlenek azotu(II)',col:null,smell:'—',flam:0,ox:0,tox:2,sol:'słabo',aq:'—',test:'na powietrzu brunatnieje (→ NO₂)'},
 SO2:{name:'tlenek siarki(IV)',col:null,smell:'ostry, duszący (palona siarka)',flam:0,ox:0,tox:2,sol:'dobrze',aq:'kwasowy',test:'odbarwia KMnO₄; wilgotny papierek – czerwony'},
 H2S:{name:'siarkowodór',col:null,smell:'zgniłych jaj',flam:1,ox:0,tox:3,sol:'umiarkowanie',aq:'słabo kwasowy',test:'czernieje papierek z octanem ołowiu'},
 CH4:{name:'metan',col:null,smell:'bez zapachu',flam:1,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'pali się niebieskim płomieniem'},
 C3H8:{name:'propan',col:null,smell:'bez zapachu (nawaniany)',flam:1,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'pali się'},
 C2H2:{name:'acetylen',col:null,smell:'słaby (technicz. czosnkowy)',flam:1,ox:0,tox:0,sol:'słabo',aq:'—',test:'kopcący płomień'},
 He:{name:'hel',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'—'},
 Ar:{name:'argon',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'słabo',aq:'—',test:'—'},
 H2O:{name:'para wodna',col:null,smell:'—',flam:0,ox:0,tox:0,sol:'—',aq:'obojętny',test:'skrapla się; bezwodny CuSO₄ niebieszczeje'},
 O3:{name:'ozon',col:[170,200,255],smell:'ostry, „burzowy”',flam:0,ox:1,tox:2,sol:'słabo',aq:'—',test:'—'}
};
P.gases=GASES;
 
P.gas=(f,Tc,pk)=>{const g=GASES[f]||{name:f},M=P.molarMass(f)||29,T=(Tc==null?20:Tc)+273.15,p=pk||P0,rho=p*M/(R*T),rel=M/M_AIR;
 const col=Array.isArray(g.col)?g.col:g.col?COL(g.col):null;
 return Object.assign({},g,{formula:f,M,rho,rel,buoy:cl((1-rel)*1.4,-1,1),moves:rel<.97?'unosi się (lżejszy od powietrza)':rel>1.03?'opada (cięższy od powietrza)':'miesza się z powietrzem',
  color:col,colorName:col?(g.col==='gas-no2'?'brunatny':'barwny'):'bezbarwny',collect:rel<.97?'nad wodą lub do naczynia odwróconego dnem do góry':rel>1.03?(g.sol==='bardzo dobrze'||g.sol==='dobrze'?'do naczynia ustawionego dnem w dół (wypieranie powietrza)':'nad wodą lub do naczynia dnem w dół'):'nad wodą'})};

const ANT={H2O:{name:'woda',r:[[1,100,8.07131,1730.63,233.426],[99,374,8.14019,1810.94,244.485]]},C2H5OH:{name:'etanol',r:[[-57,80,8.20417,1642.89,230.3],[77,243,7.68117,1332.04,199.2]]},CH3COCH3:{name:'aceton',r:[[-26,77,7.02447,1161.0,224.0]]}};
P.solvents=ANT;
P.vaporPressure=(Tc,sub)=>{const S=ANT[sub]||ANT.H2O;let a=S.r[0];for(const q of S.r)if(Tc>=q[0])a=q;return Math.pow(10,a[2]-a[3]/(a[4]+Tc))*.133322}; 
P.boilingPoint=(pk,sub)=>{const S=ANT[sub]||ANT.H2O,p=(pk||P0)/.133322;let best=null;for(const a of S.r){const T=a[3]/(a[2]-Math.log10(p))-a[4];if(T>=a[0]-2&&T<=a[1]+2){best=T;break}}if(best==null){const a=S.r[S.r.length-1];best=a[3]/(a[2]-Math.log10(p))-a[4]}return best};
 
P.boil=(Tc,o)=>{o=o||{};const sub=o.sub||'H2O',p=o.p||P0,Tb=P.boilingPoint(p,sub),T=Tc==null?25:Tc,pv=P.vaporPressure(Math.min(T,Tb+5),sub),x=pv/p;
 const steam=sstep(.28,1,x),cond=sstep(.12,.45,x),nuc=sstep(Tb-14,Tb-2,T),full=sstep(Tb-1.5,Tb+.5,T);
 const regime=T>=Tb-.5?'wrzenie':nuc>.05?'pęcherzyki pary przy dnie (zanikają w chłodniejszej cieczy)':steam>.05?'intensywne parowanie':'parowanie z powierzchni';
 return{sub,Tb,pv,x,steam,cond,bubbles:Math.max(nuc*.35,full),collapse:1-full,regime,boiling:T>=Tb-.5}};

const RISE=[[.1,.3],[.2,1.2],[.5,6],[1,13],[1.5,18],[2,22],[3,23],[5,22],[8,24],[15,28]];
P.bubbleRise=dmm=>tab(RISE,cl(dmm,.05,20));
 
P.bubbleRate=(o)=>{o=o||{};const T=(o.T==null?25:o.T)+273.15,V=o.V!=null?o.V:(o.n||0)*R*T/(o.p||P0)*1000,d=o.d||2,Vb=Math.PI*Math.pow(d/10,3)/6;return{V,perSec:V/Vb,d,rise:P.bubbleRise(d)}};
 
P.bubbleGrow=(depthCm)=>Math.cbrt((P0+G*1000*depthCm/100/1000)/P0);

const PPT={'ppt-agcl':['serowaty',5.56,60],'ppt-agbr':['serowaty',6.47,50],'ppt-agi':['serowaty',5.68,40],'ppt-baso4':['drobny',4.5,2],'ppt-caco3':['drobny',2.71,5],'ppt-cu-oh-2':['kłaczkowaty',1.15,80],'ppt-fe-oh-3':['kłaczkowaty',1.1,90],'ppt-fe-oh-2':['kłaczkowaty',1.12,80],'ppt-al-oh-3':['kłaczkowaty',1.08,100],'ppt-zn-oh-2':['kłaczkowaty',1.12,70],'ppt-mg-oh-2':['kłaczkowaty',1.15,60],'ppt-ni-oh-2':['kłaczkowaty',1.12,70],'ppt-co-oh-2':['kłaczkowaty',1.12,70],'ppt-mn-oh-2':['kłaczkowaty',1.12,70],'ppt-cr-oh-3':['kłaczkowaty',1.1,80],'ppt-pbi2':['krystaliczny',6.16,30],'ppt-pbcl2':['krystaliczny',5.85,40],'ppt-cus':['drobny',4.6,3],'ppt-pbs':['drobny',7.6,3],'ppt-ag2s':['drobny',7.2,3],'ppt-fes':['drobny',4.8,4],'ppt-zns':['drobny',4.1,3],'ppt-cds':['drobny',4.8,3],'ppt-ag2cro4':['krystaliczny',5.6,20],'ppt-pbcro4':['drobny',6.1,5],'ppt-bacro4':['drobny',4.5,4],'ppt-caso4':['krystaliczny',2.96,25],'ppt-pbso4':['drobny',6.3,4],'ppt-ag3po4':['serowaty',6.37,30]};
 
P.stokes=(dum,rhoP,o)=>{o=o||{};const mu=o.mu||1.0e-3,rl=(o.rhoL||1.0)*1000,d=dum*1e-6;return Math.max(0,(rhoP*1000-rl)*G*d*d/(18*mu))*1000};
P.ppt=(id)=>{const q=PPT[id]||['kłaczkowaty',1.15,60],v=P.stokes(q[2],q[1]);let name=null;try{const r=C.COLORS&&C.COLORS.get&&C.COLORS.get(id);name=r&&r.name}catch(_){}
 return{id,name,habit:q[0],rho:q[1],d:q[2],v,settle10cm:100/Math.max(v,1e-3),haze:q[0]==='drobny'?1:q[0]==='kłaczkowaty'?.55:.25}};

P.vRms=(M,Tc)=>Math.sqrt(3*R*((Tc==null?25:Tc)+273.15)/(M/1000)); 
P.vMean=(M,Tc)=>Math.sqrt(8*R*((Tc==null?25:Tc)+273.15)/(Math.PI*M/1000));
P.vProb=(M,Tc)=>Math.sqrt(2*R*((Tc==null?25:Tc)+273.15)/(M/1000));
 
P.maxwellSample=(M,Tc,rnd)=>{rnd=rnd||Math.random;const s=Math.sqrt(R*((Tc==null?25:Tc)+273.15)/(M/1000)),n=()=>Math.sqrt(-2*Math.log(1-rnd()))*Math.cos(6.2831853*rnd());return Math.hypot(n()*s,n()*s,n()*s)};
 
P.maxwellPDF=(v,M,Tc)=>{const m=M/1000,T=(Tc==null?25:Tc)+273.15,a=m/(2*R*T);return 4*Math.PI*Math.pow(a/Math.PI,1.5)*v*v*Math.exp(-a*v*v)};
 
P.graham=(MA,MB)=>Math.sqrt(MB/MA);
 
P.speedScale=Tc=>Math.sqrt(Math.max(.05,((Tc==null?25:Tc)+273.15)/298.15));

P.audit=()=>{const t=[['Coulomb: 1 µC·1 µC/1 m ≈ 8,99 mN',Math.abs(P.electro.coulomb(1e-6,1e-6,1)-8.99e-3)<1e-4],['elektroskop: indukcja zachowuje ładunek',P.electro.electroscope(0,6,.1,false).Q===0],['wrzenie wody 101,3 kPa ≈ 100 °C',Math.abs(P.boilingPoint(101.325,'H2O')-100)<.5],['wrzenie etanolu ≈ 78 °C',Math.abs(P.boilingPoint(101.325,'C2H5OH')-78.3)<1],['wrzenie wody 70 kPa ≈ 90 °C',Math.abs(P.boilingPoint(70,'H2O')-90)<1.5],
 ['CO₂ cięższy od powietrza',P.gas('CO2').rel>1.4],['H₂ lżejszy',P.gas('H2').rel<.1],['v_rms N₂ 25°C ≈ 515 m/s',Math.abs(P.vRms(28.01,25)-515)<5],['ciało czarne 1500 K czerwonopomarańczowe',P.blackbody(1500)[2]<120],
 ['metan φ=1 ≈ 1950 °C',Math.abs(P.flame({fuel:'CH4',phi:1}).Tc-1950)<120],['metan bogaty świeci',P.flame({fuel:'CH4',phi:1.7}).soot>.6],['barwa Na z CHE.COLORS',!!P.flameColor('Na')]];
 return{ok:t.every(x=>x[1]),tests:t.map(x=>({name:x[0],ok:x[1]}))}};
 
const EC={e:1.602176634e-19,k:8.9875517923e9,eps0:8.8541878128e-12,me:9.1093837015e-31,mp:1.67262192369e-27};
P.electro={CONST:EC,
 coulomb:(q1,q2,r,er)=>EC.k*q1*q2/((er||1)*r*r),           
 field:(q,r,er)=>EC.k*q/((er||1)*r*r),
 fieldAt:(Q,x,y)=>{let ex=0,ey=0;Q.forEach(c=>{const dx=x-c.x,dy=y-c.y,r2=dx*dx+dy*dy+1e-9,r=Math.sqrt(r2),f=EC.k*c.q/r2;ex+=f*dx/r;ey+=f*dy/r});return{x:ex,y:ey}},
 potential:(q,r)=>EC.k*q/r,electrons:q=>q/EC.e,
 share:(q1,q2)=>{const s=(q1+q2)/2;return[s,s]},                 
  
 contact:(qs,Rs)=>{const Q=qs.reduce((a,b)=>a+b,0),R=Rs||qs.map(()=>1),S=R.reduce((a,b)=>a+b,0);return R.map(r=>Q*r/S)},
  
 ground:q=>({after:0,toEarth:q,electrons:Math.abs(q)/EC.e,dir:q<0?'elektrony odpływają z ciała do ziemi':q>0?'elektrony napływają z ziemi do ciała':'brak przepływu'}),
  
 transfer:(qa,qb)=>{const d=qb-qa;return{dq:d,electrons:Math.abs(d)/EC.e,dir:d<0?'ciało przyjęło elektrony':d>0?'ciało oddało elektrony':'bez zmian'}},
  
 electroscope:(Q,qr,d,ground)=>{const s=qr*0.5/(1+Math.pow(Math.max(0,d)/0.18,2));const Qt=ground?-2*s:Q,leaves=Qt/2+s,ball=Qt/2-s;return{Q:Qt,ball,leaves,theta:55*(1-Math.exp(-Math.abs(leaves)/4)),induced:s}},
  
 relax:(rho,L,A,Cap)=>rho*(L||0.3)/(A||1e-4)*(Cap||10e-12)};
C.PHYS=P;
})();

(function(){
C.sim=C.sim||{};
const PH=()=>C.PHYS,TAU=Math.PI*2;
const hexRgb=h=>{if(Array.isArray(h))return h;h=String(h||'#888').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');const n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255]};
const css=(c,a)=>'rgba('+c.map(v=>v|0).join(',')+','+(a==null?1:a)+')';
class ParticleSim{
 constructor(o){this.o=o||{};this.canvas=o.canvas;this.ctx=this.canvas.getContext('2d');this.cfg=o.config||{particles:[]};this.T=o.T==null?25:o.T;
  this.particles=[];this.groups=[];this.solid=[];this.clusters=0;this.running=false;this._raf=0;this._last=0;this._seed=1;this._quiet=true;this._resize();this.reset();this._quiet=false }
 _rnd(){this._seed=(this._seed*16807)%2147483647;return(this._seed-1)/2147483646}
 _resize(){const c=this.canvas,dpr=Math.min(2,(window.devicePixelRatio||1)),r=c.getBoundingClientRect(),w=Math.max(200,r.width||c.clientWidth||+c.getAttribute('width')||600),h=Math.max(140,r.height||c.clientHeight||+c.dataset.h||+c.getAttribute('height')||300);
  if(c.width!==Math.round(w*dpr)||c.height!==Math.round(h*dpr)){c.width=Math.round(w*dpr);c.height=Math.round(h*dpr)}this.ctx.setTransform(dpr,0,0,dpr,0,0);
  const sx=this.w?w/this.w:1,sy=this.h?h/this.h:1;this.w=w;this.h=h;if(sx!==1||sy!==1)this.particles.forEach(p=>{p.x*=sx;p.y*=sy})}
 setT(T){this.T=T}
 reset(){this._seed=7;this.particles=[];this.groups=[];this.solid=[];this.clusters=0;const W=this.w,H=this.h*.86;
  (this.cfg.particles||[]).forEach(s=>{for(let i=0;i<(s.count||0);i++){const r=s.r||12,a=this._rnd()*TAU,v=40*(s.speed||1);
   this.particles.push({type:s.type,label:s.label||s.type,color:hexRgb(s.color),r,x:r+this._rnd()*(W-2*r),y:r+this._rnd()*(H-2*r),vx:Math.cos(a)*v,vy:Math.sin(a)*v,speed:s.speed||1,bound:null,phase:this._rnd()*TAU})}});
  this._count();this.draw()}
 start(){if(this.running)return;this.running=true;this._last=0;const loop=t=>{if(!this.running)return;if(!this.canvas.isConnected){this.stop();return}const dt=this._last?Math.min(.05,(t-this._last)/1000):0;this._last=t;this.step(dt);this.draw();this._raf=requestAnimationFrame(loop)};this._raf=requestAnimationFrame(loop)}
 stop(){this.running=false;if(this._raf)cancelAnimationFrame(this._raf);this._raf=0}
 step(dt){if(!dt)return;const rx=this.cfg.reaction||{},W=this.w,H=this.h,floor=H-this._solidH(),k=PH()?PH().speedScale(this.T):1,ps=this.particles;
  for(const p of ps){if(p.bound)continue;
    
   const vT=55*k*p.speed*(12/p.r);p.vx+=(this._rnd()-.5)*vT*3*dt*4;p.vy+=(this._rnd()-.5)*vT*3*dt*4;const v=Math.hypot(p.vx,p.vy)||1,f=1+(vT/v-1)*Math.min(1,dt*2);p.vx*=f;p.vy*=f;
   p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<p.r){p.x=p.r;p.vx=Math.abs(p.vx)}if(p.x>W-p.r){p.x=W-p.r;p.vx=-Math.abs(p.vx)}if(p.y<p.r){p.y=p.r;p.vy=Math.abs(p.vy)}if(p.y>floor-p.r){p.y=floor-p.r;p.vy=-Math.abs(p.vy)}}
   
  for(let i=0;i<ps.length;i++){const a=ps[i];if(a.bound)continue;for(let j=i+1;j<ps.length;j++){const b=ps[j];if(b.bound)continue;const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy),m=a.r+b.r;if(d>=m||d<1e-6)continue;
   const cat=a.type===rx.cation?a:b.type===rx.cation?b:null,an=a.type===rx.anion?a:b.type===rx.anion?b:null;
   if(cat&&an&&cat!==an&&this._bind(cat,an))continue;
   const nx=dx/d,ny=dy/d,ov=(m-d)/2;a.x-=nx*ov;a.y-=ny*ov;b.x+=nx*ov;b.y+=ny*ov;const p=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;if(p>0){a.vx-=p*nx;a.vy-=p*ny;b.vx+=p*nx;b.vy+=p*ny}}}
   
  for(let gi=this.groups.length-1;gi>=0;gi--){const g=this.groups[gi],c=g.cat;g.t+=dt;g.members.forEach((m,i)=>{const ang=g.t*1.2+i*TAU/Math.max(1,rx.ratio||1),R=c.r+m.r*.85;m.x+=(c.x+Math.cos(ang)*R-m.x)*Math.min(1,dt*8);m.y+=(c.y+Math.sin(ang)*R-m.y)*Math.min(1,dt*8)});
   if(g.members.length>=(rx.ratio||1)){g.full=(g.full||0)+dt;if(g.full>.35){this._precip(g);this.groups.splice(gi,1)}}}
  this.solid.forEach(s=>{if(s.landed)return;s.vy=Math.min(s.vy+120*dt,s.vmax);s.y+=s.vy*dt;s.x+=Math.sin(s.y*.05+s.ph)*.3;const top=this.h-this._solidH(s);if(s.y>=top-s.r){s.y=top-s.r;s.landed=true}});
  this._count()}
 _bind(cat,an){const rx=this.cfg.reaction||{};let g=this.groups.find(q=>q.cat===cat);if(!g){if(cat.bound)return false;g={cat,members:[],t:0};this.groups.push(g)}if(g.members.length>=(rx.ratio||1))return false;an.bound=cat;g.members.push(an);cat.bound=null;cat.vx*=.6;cat.vy*=.6;if(this.o.onBind)this.o.onBind({cat,an});return true}
 _precip(g){const rx=this.cfg.reaction||{},col=hexRgb(rx.color||'#94a3b8');const ids=new Set([g.cat,...g.members]);this.particles=this.particles.filter(p=>!ids.has(p));
  const pp=PH()&&rx.pptId?PH().ppt(rx.pptId):null,vmax=pp?Math.max(30,Math.min(160,20+pp.v*12)):70;
  this.solid.push({x:g.cat.x,y:g.cat.y,r:g.cat.r*.9,vy:0,vmax,col,ph:this._rnd()*TAU,landed:false,label:rx.product||''});this.clusters++;if(this.o.onCluster)this.o.onCluster({product:rx.product,clusters:this.clusters})}
 _solidH(ex){const n=this.solid.filter(s=>s.landed&&s!==ex).length,per=Math.max(1,Math.floor(this.w/22));return Math.ceil(n/per)*9}
 _count(){if(!this._quiet&&this.o.onCounters)this.o.onCounters({particles:this.particles.filter(p=>!p.bound).length,clusters:this.clusters})}
 draw(){const c=this.ctx,W=this.w,H=this.h;c.clearRect(0,0,W,H);const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(205,228,238,.35)');g.addColorStop(1,'rgba(160,200,220,.45)');c.fillStyle=g;c.fillRect(0,0,W,H);
   
  this.solid.forEach(s=>{c.fillStyle=css(s.col,.95);c.beginPath();for(let a=0;a<7;a++){const an=a/7*TAU+s.ph,rr=s.r*(.75+.25*Math.sin(a*2.3+s.ph));c.lineTo(s.x+Math.cos(an)*rr,s.y+Math.sin(an)*rr*.8)}c.closePath();c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke()});
   
  c.strokeStyle='rgba(30,41,59,.35)';c.lineWidth=1.5;this.groups.forEach(gq=>gq.members.forEach(m=>{c.beginPath();c.moveTo(gq.cat.x,gq.cat.y);c.lineTo(m.x,m.y);c.stroke()}));
  c.textAlign='center';c.textBaseline='middle';
  this.particles.forEach(p=>{const gr=c.createRadialGradient(p.x-p.r*.35,p.y-p.r*.35,1,p.x,p.y,p.r);gr.addColorStop(0,css(p.color.map(v=>Math.min(255,v+70))));gr.addColorStop(1,css(p.color));c.fillStyle=gr;c.beginPath();c.arc(p.x,p.y,p.r,0,TAU);c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke();
   c.fillStyle='#fff';c.font='700 '+Math.max(8,Math.round(p.r*.72))+'px system-ui,sans-serif';c.fillText(p.label,p.x,p.y+.5)});
  c.textAlign='left';c.textBaseline='alphabetic';c.fillStyle='rgba(30,41,59,.75)';c.font='600 11px system-ui,sans-serif';c.fillText('T = '+Math.round(this.T)+' °C · ruch cieplny ∝ √T',8,14)}
}
ParticleSim.v=1;
C.sim.ParticleSim=ParticleSim;
})();

const GFX=(function(){
const E={},V={},SC={};
const rnd=i=>{const x=Math.sin(i*127.1)*43758.5453;return x-Math.floor(x)};
const rgba=(c,a)=>'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+(a==null?1:a)+')';
const cl01=v=>Math.max(0,Math.min(1,v));
const th=()=>{const a=document.documentElement.getAttribute('data-theme'),d=a?a==='dark':!!(g.matchMedia&&g.matchMedia('(prefers-color-scheme: dark)').matches);
 return{dark:d,glass:d?'#94a3b8':'#64748b',glassHi:d?'rgba(226,232,240,.28)':'rgba(255,255,255,.85)',tint:d?'rgba(148,163,184,.07)':'rgba(190,214,232,.18)',text:d?'#e2e8f0':'#1e293b',mut:d?'#94a3b8':'#64748b',hi:'rgba(255,255,255,.5)',metal:d?'#475569':'#94a3b8',metalD:d?'#334155':'#64748b',metalL:d?'#64748b':'#cbd5e1',shadow:d?'rgba(0,0,0,.35)':'rgba(15,23,42,.13)',bg:d?'#0b1220':'#f1f5f9',paper:d?'#1e293b':'#ffffff',wood:d?'#7c5a3a':'#b08154'}};
const tc=T=>{const k=Math.max(0,Math.min(1,(T-10)/80));return[60+k*195,150-k*40,235-k*195]};
function effect(id,def){E[id]=Object.assign({id,layer:'in',portable:true,independent:true},def);if(C.LAB.VISUALS&&C.LAB.VISUALS.effectRegistry)C.LAB.VISUALS.effectRegistry[id]={id,portable:true,independent:true,enabledByDefault:true};return E[id]}
function vessel(id,def){V[id]=Object.assign({id,hmax:1,pad:0,lw:4},def);return V[id]}
const rr=(c,x,y,w,h,r)=>{c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h)};
const fmt=(x,n)=>(+x).toFixed(n).replace('.',',');
const font=(c,w,s,m)=>{c.font=w+' '+s+'px '+(m?'ui-monospace,monospace':'Inter,system-ui,sans-serif')};
const txt=(c,s,x,y,col,al,sz,w)=>{c.fillStyle=col;c.textAlign=al||'left';font(c,w||600,sz||11);c.fillText(s,x,y)};

const rc=(c,x,y,w,h,r)=>{c.beginPath();c.moveTo(x,y);c.lineTo(x,y+h-r);c.quadraticCurveTo(x,y+h,x+r,y+h);c.lineTo(x+w-r,y+h);c.quadraticCurveTo(x+w,y+h,x+w,y+h-r);c.lineTo(x+w,y)};
/*@@GFX vessels/beaker@@*/
/*@@GFX vessels/testTube@@*/
/*@@GFX vessels/cylinder@@*/
/*@@GFX vessels/flask@@*/
/*@@GFX vessels/roundFlask@@*/
/*@@GFX vessels/volFlask@@*/
/*@@GFX vessels/funnel@@*/
/*@@GFX vessels/petri@@*/
/*@@GFX vessels/evapDish@@*/
/*@@GFX vessels/crucible@@*/
/*@@GFX vessels/watchGlass@@*/
 
const dfG=r=>{const cx=r.x+r.w/2,n=Math.min(r.w*.08,8),R=Math.min(r.w*.42,r.h*.22),yb=r.y+r.h*.62,yt=r.y+r.h*.1,cy=yb-R*1.15;return{cx,n,R,yb,yt,cy}};
/*@@GFX vessels/dropFunnel@@*/

/*@@GFX effects/heatGlow@@*/
 
/*@@GFX effects/liquid@@*/
/*@@GFX effects/meniscus@@*/

const PPT_LOOK={serowaty:{per:1800,n:22,a:2.6,b:2.2,haze:.28,al:.85},'kłaczkowaty':{per:4200,n:18,a:4.5,b:3.2,haze:.36,al:.5},krystaliczny:{per:1300,n:30,a:1.4,b:1.4,haze:.14,al:.95,cr:1},drobny:{per:6500,n:60,a:1,b:1,haze:.46,al:.7}};
/*@@GFX effects/precipitate@@*/
/*@@GFX effects/plume@@*/
 
/*@@GFX effects/turbidity@@*/
 
const shapeOf=s=>s.shape||(s.t==='metal'?'strip':'chips');
/*@@GFX effects/solids@@*/
 
/*@@GFX effects/bubbles@@*/
/*@@GFX effects/foam@@*/
/*@@GFX effects/ripples@@*/
 
/*@@GFX effects/dropMix@@*/
 
/*@@GFX effects/schlieren@@*/
 
/*@@GFX effects/stirBar@@*/
/*@@GFX effects/condensation@@*/
/*@@GFX effects/fumes@@*/
/*@@GFX effects/steam@@*/
/*@@GFX effects/heatConvection@@*/
/*@@GFX effects/splash@@*/
 
/*@@GFX effects/scale@@*/
 
/*@@GFX effects/label@@*/
 
/*@@GFX effects/stopper@@*/
 
/*@@GFX effects/tap@@*/

function drips(c,env,st,x,y,col,rate,r,sz){const p=env.pool,d=p.drops=p.drops||[],dt=env.dt||.016;if(rate>0&&Math.random()<Math.min(1.5,rate)*dt*6)d.push({x,y,v:0});
 const req=st.dropReq||0;if(p.dq==null)p.dq=req;while(p.dq<req){d.push({x,y,v:0});p.dq++}
 const land=st.landY!=null&&env.H?st.landY*env.H:r.y+r.h+(st.landY!=null?st.landY:0);
 for(let i=d.length-1;i>=0;i--){const q=d[i];q.v+=900*dt;q.y+=q.v*dt;if(q.y>=land){d.splice(i,1);if(typeof st.onDrop==='function')st.onDrop(col);continue}c.fillStyle=rgba(col,.92);c.beginPath();c.moveTo(q.x,q.y-sz*2.4);c.quadraticCurveTo(q.x+sz,q.y-sz*.5,q.x+sz,q.y);c.arc(q.x,q.y,sz,0,Math.PI);c.quadraticCurveTo(q.x-sz,q.y-sz*.5,q.x,q.y-sz*2.4);c.fill();c.strokeStyle='rgba(60,80,100,.35)';c.lineWidth=.8;c.stroke()}}

const lg=(c,k)=>c.map(v=>Math.round(v+(255-v)*k));
const FLAME_COLORS=(C.PHYS&&C.PHYS.flameColors())||{Li:[225,45,70],Na:[255,196,40],K:[190,125,235],Ca:[255,115,45],Sr:[245,40,45],Ba:[150,225,95],Cu:[50,225,165]}; 
const FLAME_NAMES=(C.PHYS&&C.PHYS.flameNames())||{};
const METALS={Mg:{flame:[255,255,255],glow:[255,252,240],ash:[240,240,235],smoke:[240,240,240],sparks:[255,250,225],dur:7,bright:1.5,sparkRate:45,ribbon:'#aab3bb'},Fe:{flame:[255,185,70],glow:[255,170,60],ash:[55,45,42],smoke:[100,95,92],sparks:[255,205,95],dur:10,bright:.65,sparkRate:75,ribbon:'#6b7280'},Na:{flame:[255,200,40],glow:[255,225,120],ash:[235,235,230],smoke:[235,235,230],sparks:[255,215,70],dur:6,bright:1,sparkRate:20,ribbon:'#cbd5e1'},Zn:{flame:[170,235,255],glow:[220,250,255],ash:[240,240,240],smoke:[235,240,245],sparks:[200,240,255],dur:8,bright:.9,sparkRate:25,ribbon:'#94a3b8'},Cu:{flame:[50,225,165],glow:[160,255,220],ash:[30,30,32],smoke:[60,90,80],sparks:[90,240,190],dur:9,bright:.7,sparkRate:15,ribbon:'#c2703a'}};
function emit(pool,n,o,x,y){const sp=pool.sp=pool.sp||[];for(let i=0;i<n&&sp.length<700;i++){const an=(o.angle||0)*Math.PI/180+(Math.random()-.5)*(o.spread==null?1:o.spread),v=o.speed*(.35+Math.random()*.85);sp.push({x,y,vx:Math.cos(an)*v,vy:Math.sin(an)*v,life:o.life*(.5+Math.random()*.7),age:0,col:o.color,g:o.gravity,s:o.size*(.6+Math.random()*.8)})}}
function trigger(pool,id,opts){const f=E[id];if(!f)return null;const o=Object.assign({},f.defaults,opts||{}),ev={id,o,age:0,dur:o.dur||f.dur||.5,fired:0};(pool.events=pool.events||[]).push(ev);return ev}
/*@@GFX effects/flame@@*/
/*@@GFX effects/sparks@@*/
/*@@GFX effects/metalBurn@@*/
/*@@GFX effects/explosion@@*/
/*@@GFX effects/flash@@*/
function hexOf(c){return '#'+c.map(v=>('0'+Math.round(v).toString(16)).slice(-2)).join('')}
function rgbOf(h){return[1,3,5].map(i=>parseInt(h.substr(i,2),16))}
function optionsPanel(host,id,o,cb){host.innerHTML='';const f=E[id];if(!f||!f.schema)return;const d=f.defaults||{};Object.keys(f.schema).forEach(k=>{const s=f.schema[k],row=document.createElement('label');row.style.cssText='display:grid;grid-template-columns:120px 1fr auto;gap:6px;align-items:center;font-size:12px';row.innerHTML='<span>'+s.l+'</span>';let inp;
if(s.t==='range'){inp=document.createElement('input');inp.type='range';inp.min=s.min;inp.max=s.max;inp.step=s.step||.05;inp.value=o[k]!=null?o[k]:d[k];const out=document.createElement('output');out.textContent=inp.value;inp.oninput=()=>{o[k]=+inp.value;out.textContent=inp.value;cb&&cb(k)};row.append(inp,out)}
else if(s.t==='color'){inp=document.createElement('input');inp.type='color';inp.value=hexOf(o[k]||d[k]||[255,200,60]);inp.oninput=()=>{o[k]=rgbOf(inp.value);cb&&cb(k)};const b=document.createElement('button');b.type='button';b.textContent='auto';b.onclick=()=>{delete o[k];if(d[k])inp.value=hexOf(d[k]);cb&&cb(k)};row.append(inp,b)}
else{inp=document.createElement('select');(s.opts||[]).forEach(x=>{const q=document.createElement('option');q.value=q.textContent=x;inp.appendChild(q)});inp.value=o[k]||d[k];inp.onchange=()=>{o[k]=inp.value;cb&&cb(k)};row.append(inp,document.createElement('span'))}
host.appendChild(row)})}
const PRESETS=[{label:'Spalanie magnezu',id:'metalBurn',o:{metal:'Mg'}},{label:'Wełna stalowa (iskry)',id:'metalBurn',o:{metal:'Fe'}},{label:'Spalanie sodu (żółty)',id:'metalBurn',o:{metal:'Na'}},{label:'Spalanie miedzi (zielone)',id:'metalBurn',o:{metal:'Cu'}},{label:'Płomień — metan',id:'flame',o:{phi:1,power:.8}},{label:'Płomień — kopcący',id:'flame',o:{phi:1.4,soot:.6,power:.9}},{label:'Płomień — lit (czerwony)',id:'flame',o:{color:FLAME_COLORS.Li,power:.8}},{label:'Płomień — sód (żółty)',id:'flame',o:{color:FLAME_COLORS.Na,power:.8}},{label:'Płomień — potas (fioletowy)',id:'flame',o:{color:FLAME_COLORS.K,power:.8}},{label:'Płomień — bar (zielony)',id:'flame',o:{color:FLAME_COLORS.Ba,power:.8}},{label:'Płomień — miedź (niebieskozielony)',id:'flame',o:{color:FLAME_COLORS.Cu,power:.8}},{label:'Wybuch H₂ + O₂ (niebieski)',id:'explosion',o:{color:[140,185,255],size:1.1,smoke:.5,smokeColor:[190,200,215]}},{label:'Wybuch — ognisty',id:'explosion',o:{}},{label:'Iskry',id:'sparks',o:{rate:90}},{label:'Błysk',id:'flash',o:{}}];
/*@@GFX vessels/stage@@*/
 
/*@@GFX effects/splint@@*/
/*@@GFX effects/pop@@*/
PRESETS.push({label:'Łuczywko płonące',id:'splint',o:{mode:'flame'}},{label:'Łuczywko tlące się (test na O₂)',id:'splint',o:{mode:'glow'}},{label:'„Pyk!" — wodór',id:'pop',o:{}});
 
/*@@GFX vessels/anchor@@*/
 
function burner(c,r,st,env){const T=env.th,f=st.flame||{},cx=r.x+r.w/2,base=r.y+r.h-6,tw=Math.min(r.w*.14,16),top=base-64;
c.strokeStyle=T.glass;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(cx-58,base);c.lineTo(cx+58,base);c.stroke();
c.fillStyle=T.dark?'#475569':'#94a3b8';c.fillRect(cx-34,base-10,68,10);c.fillRect(cx-tw,base-64,tw*2,54);
c.fillStyle=T.dark?'#334155':'#64748b';c.fillRect(cx-tw-3,base-40,tw*2+6,9);
const air=Math.max(0,Math.min(1.6,(f.air==null?100:f.air)/100));c.fillStyle='rgba(15,23,42,'+(.35+.25*(1-Math.min(1,air)))+')';c.fillRect(cx-tw-2,base-37,tw*2+4,3);
if(!f.on||!(f.power>.05)){c.fillStyle='rgba(120,140,160,.25)';c.beginPath();c.arc(cx,base-68,4,0,7);c.fill()}
else env.fx=Object.assign({},env.fx,{flame:{power:Math.min(1,f.power),phi:f.phi==null?(1/Math.max(.08,air)):f.phi,soot:f.soot||0,temp:f.temp||900,color:f.color||null,fuel:f.fuel||'CH4',salt:f.salt||''}});
return{x:cx,y:top}}
/*@@GFX vessels/burner@@*/
 
function cooler(c,r,st,env){const T=env.th,k=st.coolant||{Tin:15,Tout:15,flow:.0004,q:0},t=env.t,x0=r.x+r.w*.16,x1=r.x+r.w*.84,cy=r.y+r.h/2,jh=Math.min(r.h*.5,70),ih=jh*.28;
const g=c.createLinearGradient(x0,0,x1,0);g.addColorStop(0,rgba(tc(k.Tout),.55));g.addColorStop(1,rgba(tc(k.Tin),.55));c.fillStyle=g;c.fillRect(x0,cy-jh/2,x1-x0,jh);
const sp=Math.min(1,(k.flow||0)/.0008),dir=-1;c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.5;c.setLineDash([8,12]);c.lineDashOffset=dir*t/1000*(10+90*sp);[-.28,.28].forEach(o=>{c.beginPath();c.moveTo(x1,cy+jh*o);c.lineTo(x0,cy+jh*o);c.stroke()});c.setLineDash([]);
c.fillStyle=T.dark?'rgba(15,23,42,.8)':'rgba(255,255,255,.8)';c.fillRect(x0-14,cy-ih/2,x1-x0+28,ih);
const vap=Math.max(0,Math.min(1,((st.T==null?25:st.T)-30)/70));for(let i=0;i<10;i++){const u=((t/2000)+rnd(i))%1,x=x0-14+u*(x1-x0+28),a=vap*(1-u)*.5;c.fillStyle='rgba(235,240,248,'+a+')';c.beginPath();c.arc(x,cy-ih*.1+Math.sin(t/300+i)*2,3+3*(1-u),0,7);c.fill()}
const cd=Math.min(1,(k.q||0)/80)*vap;c.fillStyle='rgba(120,180,230,.85)';for(let i=0;i<6;i++){const u=((t/1500)+rnd(i+12))%1,x=x0+(x1-x0)*(.45+.55*u);if(rnd(i+5)>cd+.3)continue;c.beginPath();c.arc(x,cy+ih*.3+u*ih*.2,2.2,0,7);c.fill()}
c.strokeStyle=T.glass;c.lineWidth=4;c.lineJoin='round';c.strokeRect(x0,cy-jh/2,x1-x0,jh);c.lineWidth=3;c.beginPath();c.moveTo(x0-14,cy-ih/2);c.lineTo(x1+14,cy-ih/2);c.moveTo(x0-14,cy+ih/2);c.lineTo(x1+14,cy+ih/2);c.stroke();
c.lineWidth=5;c.beginPath();c.moveTo(x0+16,cy-jh/2);c.lineTo(x0+16,cy-jh/2-18);c.moveTo(x1-16,cy+jh/2);c.lineTo(x1-16,cy+jh/2+18);c.stroke();
c.fillStyle=T.text;c.font='700 11px Inter,system-ui';c.textAlign='left';c.fillText('woda wyj. '+(+k.Tout||0).toFixed(1)+' °C',x0+22,cy-jh/2-8);c.textAlign='right';c.fillText('woda wej. '+(+k.Tin||0).toFixed(1)+' °C',x1-22,cy+jh/2+30);c.textAlign='left';c.fillStyle=T.mut;c.fillText('para →  ← skropliny',x0,r.y+10)}
/*@@GFX vessels/cooler@@*/

const IND_FB={'ind-oranz-metylowy':p=>mc([220,38,38],[250,204,21],sm(p,3.1,4.4)),'ind-kapusta':p=>{const S=[[0,[220,38,38]],[4,[192,38,211]],[7,[109,91,208]],[9,[20,184,166]],[11,[34,197,94]],[14,[250,204,21]]];for(let i=1;i<S.length;i++)if(p<=S[i][0])return mc(S[i-1][1],S[i][1],(p-S[i-1][0])/(S[i][0]-S[i-1][0]));return S[S.length-1][1]},'ind-fenoloftaleina':p=>mc(WATER,[219,39,119],sm(p,8.2,10)),'ind-bbt':p=>mc([250,204,21],[37,99,235],sm(p,6,7.6))};
const indCol=(id,p)=>{const a=colors.at(id,p);if(a)return a;const f=IND_FB[id]||PHF[id];return f?f(p):WATER.slice()};
const indName=(id,p)=>{try{const s=C.COLORS&&C.COLORS.state&&C.COLORS.state(id,p);if(s)return s.label}catch(_){}return ''};
 
function stand(c,r,st,env){const T=env.th,X=f=>env.W?(env.X0||0)+f*env.W:r.x+f*r.w,Y=f=>env.H?f*env.H:r.y+f*r.h,rx=r.x+Math.min(14,r.w*.1),b=r.y+r.h,front=st.layer==='front',both=st.layer==='both',cl=st.clamps||[{x:.62,y:.3}];
 if(!front||both){c.fillStyle=T.metalD;rr(c,r.x,b-10,Math.max(80,r.w*.8),10,3);c.fill();const g1=c.createLinearGradient(rx-3,0,rx+3,0);g1.addColorStop(0,T.metalL);g1.addColorStop(1,T.metalD);c.fillStyle=g1;c.fillRect(rx-3,r.y,6,b-10-r.y);c.fillStyle=T.metalD;c.beginPath();c.arc(rx,r.y,3,0,7);c.fill()}
 cl.forEach(k=>{const y=Y(k.y),x=X(k.x),jw=(k.w>1?k.w:(k.w||.05)*(env.W||r.w))/2;if(!front||both){c.fillStyle=T.metal;c.fillRect(rx+6,y-2.5,Math.max(0,x-jw-rx-10),5);c.fillStyle=T.metalD;rr(c,rx-7,y-7,14,14,2);c.fill();c.fillStyle=T.metalL;c.beginPath();c.arc(rx-10,y,3,0,7);c.fill()}
  if(k.ring){if(front){c.strokeStyle=T.metal;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,jw+5,4,0,0,Math.PI);c.stroke()}else{c.strokeStyle=T.metalD;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,jw+5,4,0,Math.PI,7);c.stroke()}return}
  if(front||both){c.lineCap='round';c.strokeStyle=T.metalD;c.lineWidth=4;c.beginPath();c.moveTo(x-jw-10,y);c.lineTo(x-jw-3,y-8);c.moveTo(x-jw-10,y);c.lineTo(x-jw-3,y+8);c.moveTo(x+jw+3,y-8);c.quadraticCurveTo(x+jw+9,y,x+jw+3,y+8);c.stroke();c.fillStyle=T.wood;rr(c,x-jw-4,y-8,4,16,1);c.fill();rr(c,x+jw,y-8,4,16,1);c.fill();c.fillStyle=T.metalL;c.beginPath();c.arc(x+jw+11,y,3,0,7);c.fill()}})}
/*@@GFX vessels/stand@@*/
 
function tripod(c,r,st,env){const T=env.th,cx=r.x+r.w/2,w=r.w,y0=r.y+5,b=r.y+r.h,k=cl01((st.heat||0)/3);c.lineCap='round';c.strokeStyle=T.metal;c.lineWidth=3;c.beginPath();c.moveTo(cx+w*.05,y0+4);c.lineTo(cx+w*.12,b);c.stroke();c.strokeStyle=T.metalD;c.lineWidth=4;c.beginPath();c.moveTo(cx-w*.36,y0+4);c.lineTo(cx-w*.46,b);c.moveTo(cx+w*.36,y0+4);c.lineTo(cx+w*.46,b);c.moveTo(cx-w*.4,y0+5);c.lineTo(cx+w*.4,y0+5);c.stroke();
 c.fillStyle=T.metal;c.fillRect(cx-w*.48,r.y,w*.96,4);c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=.7;for(let x=cx-w*.47;x<cx+w*.47;x+=4){c.beginPath();c.moveTo(x,r.y);c.lineTo(x+3,r.y+4);c.stroke()}
 c.fillStyle=T.dark?'#cbd5e1':'#e7e5e4';rr(c,cx-w*.2,r.y-1,w*.4,6,3);c.fill();if(k>0){const g1=c.createRadialGradient(cx,r.y+2,1,cx,r.y+2,w*.24);g1.addColorStop(0,'rgba(255,90,30,'+(.9*k)+')');g1.addColorStop(1,'rgba(255,90,30,0)');c.fillStyle=g1;c.fillRect(cx-w*.26,r.y-4,w*.52,12)}return{x:cx,y:r.y-2}}
/*@@GFX vessels/tripod@@*/
 
function spiritLamp(c,r,st,env){const T=env.th,L=st.lamp||{on:1,lv:.6},cx=r.x+r.w/2,b=r.y+r.h-3,bw=Math.min(r.w*.75,96),bh=Math.min(r.h*.42,64),ny=b-bh;
 c.save();rr(c,cx-bw/2,ny,bw,bh,[bh*.5,bh*.5,8,8]);c.fillStyle=T.tint;c.fill();c.clip();c.fillStyle='rgba(196,214,236,.55)';c.fillRect(cx-bw/2,b-bh*cl01(L.lv==null?.6:L.lv),bw,bh);highlights({hl:.15},c,{x:cx-bw/2,y:ny,w:bw,h:bh},T);c.restore();
 rr(c,cx-bw/2,ny,bw,bh,[bh*.5,bh*.5,8,8]);c.strokeStyle=T.glass;c.lineWidth=3;c.stroke();c.fillStyle=T.metal;rr(c,cx-11,ny-10,22,12,2);c.fill();c.fillStyle='#f5f5f4';c.fillRect(cx-3,ny-22,6,12);c.fillStyle='#292524';c.fillRect(cx-3,ny-24,6,3);
 if(L.on){env.fx=Object.assign({},env.fx,{flame:{power:.42,phi:1.32,soot:0,temp:700,size:.6,flicker:1.4,glow:.8,fuel:'C2H5OH',diffusion:true,salt:L.salt||''}})}else{c.strokeStyle=T.glass;c.lineWidth=2.5;c.fillStyle=T.tint;rr(c,cx-14,ny-34,28,26,[12,12,2,2]);c.fill();c.stroke()}
 return{x:cx,y:ny-22}}
/*@@GFX vessels/spiritLamp@@*/
 
function hotplate(c,r,st,env){const T=env.th,w=Math.min(r.w,230),x=r.x+(r.w-w)/2,h=Math.min(r.h*.8,46),y=r.y+r.h-h,k=cl01((st.heat||0)/3),s=cl01(st.stir||0);
 c.fillStyle=T.dark?'#334155':'#e5e7eb';c.strokeStyle=T.glass;c.lineWidth=2;rr(c,x,y,w,h,8);c.fill();c.stroke();c.fillStyle=T.dark?'#cbd5e1':'#f8fafc';rr(c,x+8,y-7,w-16,9,3);c.fill();c.stroke();if(k>0){c.fillStyle='rgba(239,68,68,'+(.7*k)+')';rr(c,x+8,y-7,w-16,9,3);c.fill()}
 [[.25,k,'grzanie'],[.75,s,'obroty']].forEach(([f,v,l])=>{const kx=x+w*f,ky=y+h*.5,a=-2.36+v*4.71;c.fillStyle=T.dark?'#1e293b':'#475569';c.beginPath();c.arc(kx,ky,9,0,7);c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(kx,ky);c.lineTo(kx+Math.cos(a)*7,ky+Math.sin(a)*7);c.stroke();txt(c,l,kx+14,ky+4,T.mut,'left',9)});
 c.fillStyle=k>0?'#ef4444':(T.dark?'#475569':'#cbd5e1');c.beginPath();c.arc(x+w*.5,y+h*.5,3.5,0,7);c.fill();return{x:x+w/2,y:y-7}}
/*@@GFX vessels/hotplate@@*/
 
function dropper(c,r,st,env){const T=env.th,d=st.dropper||{lv:.5,color:[219,39,119]},p=env.pool,cx=r.x+r.w/2,bR=Math.min(r.w*.22,14),t0=r.y+bR*2+6,tb=r.y+r.h-18,tip=r.y+r.h-2,w=9,col=d.color||[205,228,238];
 if((st.dropReq||0)>(p.dq==null?st.dropReq||0:p.dq))p.sq=1;p.sq=Math.max(0,(p.sq||0)-(env.dt||.016)*3);const sq=p.sq;
 c.fillStyle=T.dark?'#991b1b':'#dc2626';c.beginPath();c.ellipse(cx,r.y+bR+1,bR*(.78-.25*sq),bR,0,0,7);c.fill();c.fillRect(cx-w/2-2,r.y+bR*2-2,w+4,8);
 const lv=cl01(d.lv==null?.5:d.lv),ly=tb-(tb-t0)*lv;c.fillStyle=rgba(col,.8);c.beginPath();c.moveTo(cx-w/2+1.5,ly);c.lineTo(cx+w/2-1.5,ly);c.lineTo(cx+w/2-1.5,tb);c.lineTo(cx+1,tip-2);c.lineTo(cx-1,tip-2);c.lineTo(cx-w/2+1.5,tb);c.closePath();c.fill();
 c.strokeStyle=T.glass;c.lineWidth=2.5;c.lineJoin='round';c.beginPath();c.moveTo(cx-w/2,t0);c.lineTo(cx-w/2,tb);c.lineTo(cx-1.2,tip);c.lineTo(cx+1.2,tip);c.lineTo(cx+w/2,tb);c.lineTo(cx+w/2,t0);c.stroke();
 drips(c,env,st,cx,tip+2,col,d.drip||0,r,2.6)}
/*@@GFX vessels/dropper@@*/
 
function gasCollect(c,r,st,env){const T=env.th,p=env.pool,tx0=r.x+r.w*.06,tx1=r.x+r.w*.98,ty=r.y+r.h*.55,tb=r.y+r.h-4,wy=ty+10,cx=r.x+r.w*.64,cw=Math.min(r.w*.2,50),cy0=r.y+8,cy1=tb-16,gv=cl01(st.gasV||0),gy=cy0+(cy1-cy0-12)*gv,W=st.water||[205,228,238],gc=st.gasColor;
 c.fillStyle=rgba(W,.5);c.fillRect(tx0,wy,tx1-tx0,tb-wy);c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=1.5;c.beginPath();c.moveTo(tx0,wy);c.lineTo(tx1,wy);c.stroke();
 const inY=r.y+r.h*.4,tx=tx0+16;tube(c,[[r.x,inY],[tx,inY],[tx,tb-9],[cx-2,tb-9],[cx-2,cy1+6]],{flow:st.gas||0,t:env.t,th:T});
 c.fillStyle=gc?rgba(gc,.35):(T.dark?'rgba(226,232,240,.08)':'rgba(255,255,255,.55)');c.fillRect(cx-cw/2,cy0,cw,gy-cy0);c.fillStyle=rgba(W,.62);c.fillRect(cx-cw/2,gy,cw,cy1-gy);c.strokeStyle='rgba(255,255,255,.7)';c.beginPath();c.moveTo(cx-cw/2,gy);c.lineTo(cx+cw/2,gy);c.stroke();
 const b=p.bub=p.bub||[];if((st.gas||0)>0&&Math.random()<st.gas*(env.dt||.016)*14)b.push({y:cy1+4,x:cx+(Math.random()-.5)*6,r:2+Math.random()*3});for(let i=b.length-1;i>=0;i--){const q=b[i];q.y-=60*(env.dt||.016);q.x+=Math.sin((env.t||0)/180+i)*.3;if(q.y<gy+q.r){b.splice(i,1);continue}c.beginPath();c.arc(q.x,q.y,q.r,0,7);c.fillStyle='rgba(255,255,255,.55)';c.fill();c.strokeStyle='rgba(80,100,120,.45)';c.lineWidth=1;c.stroke()}
 c.strokeStyle=T.glass;c.lineWidth=3;c.beginPath();c.moveTo(cx-cw/2,cy1);c.lineTo(cx-cw/2,cy0+6);c.quadraticCurveTo(cx-cw/2,cy0,cx-cw/2+6,cy0);c.lineTo(cx+cw/2-6,cy0);c.quadraticCurveTo(cx+cw/2,cy0,cx+cw/2,cy0+6);c.lineTo(cx+cw/2,cy1);c.stroke();
 c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;font(c,600,8);c.textAlign='right';const mx=st.gasMax||100;for(let i=0;i<=10;i++){const y=cy0+(cy1-cy0-12)*i/10;c.beginPath();c.moveTo(cx+cw/2-(i%5?4:8),y);c.lineTo(cx+cw/2,y);c.stroke();if(!(i%5))c.fillText(Math.round(mx*i/10),cx+cw/2-10,y+3)}
 c.save();rc(c,tx0,ty,tx1-tx0,tb-ty,10);c.strokeStyle=T.glass;c.lineWidth=3.5;c.stroke();c.restore();txt(c,'V = '+fmt(gv*mx,0)+' cm³',cx+cw/2+8,cy0+14,T.text,'left',11,800)}
/*@@GFX vessels/gasCollect@@*/
 
function tubeRack(c,r,st,env){const T=env.th,tubes=st.tubes||[{label:'1',liquid:[229,38,46],level:.5},{label:'2',liquid:[246,162,30],level:.5},{label:'3',liquid:[92,184,92],level:.5},{label:'4',liquid:[74,75,181],level:.5}],n=tubes.length,pt=r.y+r.h*.34,pb=r.y+r.h-4,gap=r.w/n,tw=Math.min(gap*.55,34);
 c.fillStyle=T.wood;c.globalAlpha=.75;c.fillRect(r.x+4,pt,7,pb-pt);c.fillRect(r.x+r.w-11,pt,7,pb-pt);c.globalAlpha=1;rr(c,r.x,pb-9,r.w,9,3);c.fill();
 tubes.forEach((q,i)=>{const x=r.x+gap*(i+.5)-tw/2,pool=env.pool['t'+i]=env.pool['t'+i]||{events:[]},s=Object.assign({level:.5,liquid:WATER.slice()},q,{label:null});body('testTube',V.testTube,c,{x,y:r.y+4,w:tw,h:pb-14-r.y-4},s,Object.assign({},env,{pool,only:null,opt:{}}))});
 rr(c,r.x,pt-6,r.w,13,3);c.fillStyle=T.wood;c.fill();c.strokeStyle='rgba(0,0,0,.2)';c.lineWidth=1;c.stroke();tubes.forEach((q,i)=>{if(q.label)txt(c,q.label,r.x+gap*(i+.5),pt+4,'#fff','center',10,800)})}
/*@@GFX vessels/tubeRack@@*/
 
function conductivity(c,r,st,env){const T=env.th,k=cl01(st.cond||0),p=env.pool,bx=r.x+r.w*.16,bw=r.w*.68,by=r.y+r.h*.42,bh=r.h*.55,lv=cl01(st.level==null?.6:st.level),ltop=by+bh-bh*lv,e1=bx+bw*.32,e2=bx+bw*.68,ey0=by-26,ey1=by+bh-16,wy=r.y+r.h*.27,bt={x:r.x+r.w*.1,y:r.y+12,w:48,h:20},bl={x:r.x+r.w*.8,y:r.y+30};
 body('beaker',V.beaker,c,{x:bx,y:by,w:bw,h:bh},Object.assign({},st,{label:null}),Object.assign({},env,{pool:p.bk=p.bk||{events:[]},only:null,opt:{effects:{scale:0}}}));
 const wire=(pts,on)=>{c.lineJoin=c.lineCap='round';c.beginPath();pts.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.strokeStyle=T.dark?'#94a3b8':'#334155';c.lineWidth=2.2;c.stroke();if(on){c.setLineDash([3,7]);c.lineDashOffset=-(env.t||0)/1000*40*k;c.strokeStyle='rgba(250,204,21,.95)';c.lineWidth=2;c.stroke();c.setLineDash([])}};
 const on=k>.12;wire([[e1,ey0],[e1,wy],[bt.x+8,wy],[bt.x+8,bt.y+bt.h]],on);wire([[bt.x+bt.w,bt.y+bt.h/2],[bl.x-5,bt.y+bt.h/2],[bl.x-5,bl.y+24]],on);wire([[bl.x+5,bl.y+26],[bl.x+5,wy],[e2,wy],[e2,ey0]],on);
  
const EL=st.el||null;[e1,e2].forEach((x,i)=>{c.fillStyle='#3f3f46';rr(c,x-4,ey0,8,ey1-ey0,2);c.fill();c.fillStyle='#71717a';c.fillRect(x-4,ey0,8,5);const g=EL?(i?EL.an:EL.cat):null;
 if(g&&k>.12){const nb=Math.round(3+5*g.n*k),col=g.col||[255,255,255];for(let j=0;j<nb;j++){const u=((env.t||0)/1400*(.6+k)+rnd(j+i*9))%1,y=ey1-(ey1-ltop)*u;if(y>ltop+3){c.beginPath();c.arc(x+(j%2?6:-6),y,1.2+rnd(j)*1.3,0,7);c.fillStyle='rgba('+col.join(',')+','+(.75*k)+')';c.fill();c.strokeStyle='rgba(80,100,120,'+(.5*k)+')';c.lineWidth=.6;c.stroke()}}}
 const lab=(i?'anoda (+)':'katoda (−)')+(g&&k>.12?': '+g.f:'');font(c,800,9);const lw=c.measureText(lab).width+8,lx=Math.max(r.x+2,Math.min(r.x+r.w-lw-2,x-lw/2)),ly=ey1+6;c.fillStyle=T.dark?'rgba(30,41,59,.9)':'rgba(255,255,255,.9)';rr(c,lx,ly,lw,13,3);c.fill();txt(c,lab,lx+lw/2,ly+10,i?'#b91c1c':'#1d4ed8','center',9,800)});
 c.fillStyle=T.dark?'#475569':'#1f2937';rr(c,bt.x,bt.y,bt.w,bt.h,3);c.fill();c.fillStyle='#f59e0b';c.fillRect(bt.x+bt.w-12,bt.y,12,bt.h);txt(c,'−',bt.x+8,bt.y+14,'#fff','center',12,800);txt(c,'+',bt.x+bt.w-6,bt.y+14,'#1f2937','center',12,800);txt(c,'4,5 V',bt.x+bt.w/2-4,bt.y+bt.h+12,T.mut,'center',9);
 if(k>0){const g1=c.createRadialGradient(bl.x,bl.y,2,bl.x,bl.y,18+55*k);g1.addColorStop(0,'rgba(255,226,120,'+(.85*k)+')');g1.addColorStop(1,'rgba(255,200,60,0)');c.fillStyle=g1;c.beginPath();c.arc(bl.x,bl.y,18+55*k,0,7);c.fill()}
 c.fillStyle='rgba(255,250,225,'+(.18+.75*k)+')';c.strokeStyle=T.glass;c.lineWidth=2;c.beginPath();c.arc(bl.x,bl.y,15,0,7);c.fill();c.stroke();c.strokeStyle=k>.08?'#f59e0b':'#78716c';c.lineWidth=1.4;c.beginPath();c.moveTo(bl.x-5,bl.y+12);c.lineTo(bl.x-4,bl.y);for(let i=0;i<5;i++)c.lineTo(bl.x-4+i*2,bl.y+(i%2?-3:0));c.lineTo(bl.x+5,bl.y+12);c.stroke();c.fillStyle=T.metal;c.fillRect(bl.x-7,bl.y+14,14,12);
 txt(c,k>.6?'świeci jasno':k>.15?'świeci słabo':'nie świeci',(bt.x+bt.w+bl.x-20)/2,bt.y+bt.h/2-6,T.text,'center',11,800);if(st.label){font(c,800,12);const lw=c.measureText(st.label).width+12,ly=by+bh*.8;c.fillStyle=T.dark?'rgba(30,41,59,.92)':'rgba(255,255,255,.93)';rr(c,bx+bw/2-lw/2,ly,lw,18,4);c.fill();c.strokeStyle=T.glass;c.lineWidth=1;c.stroke();txt(c,st.label,bx+bw/2,ly+13,T.text,'center',12,800)}}
/*@@GFX vessels/conductivity@@*/
 
function pHscale(c,r,st,env){const T=env.th,ind=st.ind||'ind-uniwersalny',x0=r.x+14,x1=r.x+r.w-14,h=Math.min(18,r.h*.22),y=r.y+Math.max(r.h*.38,24),X=p=>x0+(x1-x0)*p/14;const g1=c.createLinearGradient(x0,0,x1,0);for(let p=0;p<=14;p+=.5)g1.addColorStop(p/14,rgba(indCol(ind,p)));c.fillStyle=g1;rr(c,x0,y,x1-x0,h,5);c.fill();c.strokeStyle='rgba(0,0,0,.2)';c.lineWidth=1;c.stroke();
 c.strokeStyle=T.mut;for(let p=0;p<=14;p++){c.beginPath();c.moveTo(X(p),y+h);c.lineTo(X(p),y+h+(p%7?4:8));c.stroke();txt(c,String(p),X(p),y+h+16,T.mut,'center',9)}
 const by=y+h+26;[[0,6.8,'kwasowy','#dc2626'],[6.8,7.2,'',''],[7.2,14,'zasadowy','#2563eb']].forEach(([a,b,l,col])=>{if(!l)return;c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.moveTo(X(a),by-4);c.lineTo(X(a),by);c.lineTo(X(b),by);c.lineTo(X(b),by-4);c.stroke();txt(c,l,(X(a)+X(b))/2,by+13,col,'center',10,800)});txt(c,'7 — obojętny',X(7),by+27,T.mut,'center',9,700);
 (st.marks||[]).forEach((m,i)=>{const x=X(m.pH);c.fillStyle=T.text;c.beginPath();c.arc(x,y-4,2.5,0,7);c.fill();txt(c,m.label,x,y-9-(i%2)*11,T.mut,'center',9,600)});
 if(st.pH!=null&&!st.hide){const v=Math.max(0,Math.min(14,st.pH)),x=X(v);c.fillStyle=T.text;c.beginPath();c.moveTo(x,y-1);c.lineTo(x-6,y-10);c.lineTo(x+6,y-10);c.closePath();c.fill();txt(c,'pH '+fmt(v,1),x,y-14,T.text,'center',11,800)}}
/*@@GFX vessels/pHscale@@*/
const pHcol=p=>'hsl('+Math.round(Math.max(0,Math.min(14,p))/14*250)+',70%,48%)';
function smooth(env,k,target,rate){const p=env.pool;if(p[k]==null||!isFinite(p[k]))p[k]=target;p[k]+=(target-p[k])*Math.min(1,(env.dt||.016)*rate);return p[k]}
function pHmeter(c,r,st,env){const T=env.th,w=Math.min(r.w,150),x=r.x+(r.w-w)/2,bh=Math.min(r.h*.5,95),tgt=st.pH==null?7:st.pH,v=smooth(env,'ph',tgt,2.2),stable=Math.abs(v-tgt)<.02;
c.fillStyle=T.dark?'#1e293b':'#e2e8f0';c.strokeStyle=T.glass;c.lineWidth=3;rr(c,x,r.y,w,bh,12);c.fill();c.stroke();
c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,x+8,r.y+8,w-16,bh*.52,6);c.fill();
c.fillStyle=T.dark?'#7cffb2':'#10361f';c.font='800 '+Math.round(bh*.34)+'px ui-monospace,monospace';c.textAlign='center';c.fillText(fmt(v,2),x+w/2,r.y+8+bh*.38);c.font='700 10px ui-monospace,monospace';c.fillText('pH · '+fmt(st.T==null?25:st.T,1)+' °C',x+w/2,r.y+8+bh*.5);
const g=c.createLinearGradient(x+10,0,x+w-10,0);for(let i=0;i<=14;i+=2)g.addColorStop(i/14,pHcol(i));c.fillStyle=g;rr(c,x+10,r.y+bh*.68,w-20,7,3);c.fill();const px=x+10+(w-20)*Math.max(0,Math.min(1,v/14));c.fillStyle=T.text;c.beginPath();c.moveTo(px,r.y+bh*.68-2);c.lineTo(px-4,r.y+bh*.68-8);c.lineTo(px+4,r.y+bh*.68-8);c.fill();
c.fillStyle=stable?'#22c55e':'#f59e0b';c.beginPath();c.arc(x+w-14,r.y+bh-9,4,0,7);c.fill();c.fillStyle=T.mut;c.font='600 9px Inter,system-ui';c.textAlign='left';c.fillText(stable?'stabilny':'ustala się…',x+12,r.y+bh-6);
const ex=x+w/2,ey=r.y+bh,eb=r.y+r.h-14;c.strokeStyle=T.glass;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(ex,ey);c.lineTo(ex,eb);c.stroke();c.fillStyle=pHcol(v);c.beginPath();c.arc(ex,eb+2,7,0,7);c.fill();c.strokeStyle=T.glass;c.lineWidth=2;c.stroke()}
/*@@GFX vessels/pHmeter@@*/
function thermometer(c,r,st,env){const T=env.th,t=smooth(env,'T',st.T==null?25:st.T,2.5),cx=r.x+Math.min(r.w*.35,34),top=r.y+12,bR=Math.min(11,r.w*.14),by=r.y+r.h-bR-30,bot=by-bR*.6,lo=st.lo==null?-20:st.lo,hi=st.hi==null?120:st.hi,y=bot-(bot-top)*Math.max(0,Math.min(1,(t-lo)/(hi-lo))),tw=5.5,col=t>70?'#ef4444':t<5?'#3b82f6':'#f97316';
 c.fillStyle=T.tint;rr(c,cx-tw,top-tw,tw*2,by-top+tw,tw);c.fill();c.beginPath();c.arc(cx,by,bR+3,0,7);c.fill();
 c.fillStyle=col;c.fillRect(cx-2.5,y,5,by-y);c.beginPath();c.arc(cx,by,bR,0,7);c.fill();c.fillStyle='rgba(255,255,255,.45)';c.beginPath();c.arc(cx-bR*.35,by-bR*.35,bR*.3,0,7);c.fill();
 c.strokeStyle=T.glass;c.lineWidth=2.5;c.beginPath();c.moveTo(cx-tw,by-bR*.9);c.lineTo(cx-tw,top);c.arc(cx,top,tw,Math.PI,0);c.lineTo(cx+tw,by-bR*.9);c.arc(cx,by,bR+3,-1.1,Math.PI+1.1);c.stroke();
 c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;font(c,600,9);c.textAlign='left';const step=(hi-lo)>100?10:5;for(let v=Math.ceil(lo/step)*step;v<=hi;v+=step){const yy=bot-(bot-top)*(v-lo)/(hi-lo),maj=!(v%(step*2));c.beginPath();c.moveTo(cx+tw+2,yy);c.lineTo(cx+tw+(maj?11:6),yy);c.stroke();if(maj)c.fillText(v,cx+tw+14,yy+3)}
 const lw=Math.min(r.w-8,78),lx=Math.max(r.x+2,cx-lw/2);c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,lx,r.y+r.h-20,lw,18,4);c.fill();c.fillStyle=T.dark?'#7cffb2':'#10361f';font(c,800,12,1);c.textAlign='center';c.fillText(fmt(t,1)+' °C',lx+lw/2,r.y+r.h-7)}
/*@@GFX vessels/thermometer@@*/
function burette(c,r,st,env){const T=env.th,b=st.titrant||{V:0,Vmax:50,drip:0,color:[205,228,238]},cx=r.x+r.w/2,w=26,top=r.y+8,bot=r.y+r.h-34,fl=bot-top,lv=1-Math.max(0,Math.min(1,b.V/b.Vmax));
c.fillStyle=rgba(b.color||[205,228,238],.7);c.fillRect(cx-w/2+2,top+fl*(1-lv),w-4,fl*lv);c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';c.strokeRect(cx-w/2,top,w,fl);
c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;c.font='600 9px Inter,system-ui';c.textAlign='left';for(let v=0;v<=b.Vmax;v+=5){const y=top+fl*v/b.Vmax;c.beginPath();c.moveTo(cx+w/2,y);c.lineTo(cx+w/2+(v%10?5:9),y);c.stroke();if(!(v%10))c.fillText(v,cx+w/2+12,y+3)}
c.fillStyle=T.glass;c.fillRect(cx-3,bot,6,16);c.fillRect(cx-10,bot+6,20,4);c.fillRect(cx-1.5,bot+16,3,8);
drips(c,env,st,cx,bot+24,b.color||[205,228,238],b.drip||0,r,2.6);
c.fillStyle=T.text;c.font='800 11px Inter,system-ui';c.textAlign='center';c.fillText(fmt(b.V,2)+' cm³',cx,r.y+r.h-6)}
/*@@GFX vessels/burette@@*/
 
/*@@GFX vessels/roundFlask__2@@*/
/*@@GFX vessels/volFlask__2@@*/
/*@@GFX vessels/funnel__2@@*/
/*@@GFX vessels/petri__2@@*/
/*@@GFX vessels/evapDish__2@@*/
/*@@GFX effects/ringMark@@*/
 
function pipette(c,r,st,env){const T=env.th,p=st.pip||{lv:.6,drip:0,color:[205,228,238]},cx=r.x+r.w/2,bR=Math.min(r.w*.2,16),top=r.y+bR*2+8,bot=r.y+r.h-30,w=10,tipY=bot+16,fl=bot-top,lv=Math.max(0,Math.min(1,p.lv==null?.6:p.lv));
c.fillStyle=T.dark?'#7f1d1d':'#dc2626';c.beginPath();c.ellipse(cx,r.y+bR+2,bR*.8,bR,0,0,7);c.fill();c.fillRect(cx-w/2-1,r.y+bR*2,w+2,8);
if(lv>.45){c.fillStyle=rgba(p.color||[205,228,238],.6);c.beginPath();c.ellipse(cx,top+fl*.45,w*1.1,fl*.17,0,0,7);c.fill()}
c.fillStyle=rgba(p.color||[205,228,238],.75);c.fillRect(cx-w/2+1.5,bot-fl*lv,w-3,fl*lv+4);
c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';c.beginPath();c.ellipse(cx,top+fl*.45,w*1.1,fl*.17,0,0,7);c.stroke();c.beginPath();c.moveTo(cx-w/2,top);c.lineTo(cx-w/2,bot);c.lineTo(cx-1.5,tipY);c.lineTo(cx+1.5,tipY);c.lineTo(cx+w/2,bot);c.lineTo(cx+w/2,top);c.stroke();
c.strokeStyle=T.mut;c.lineWidth=1.5;c.beginPath();c.moveTo(cx-w/2-6,top+fl*.1);c.lineTo(cx+w/2+6,top+fl*.1);c.stroke();
drips(c,env,st,cx,tipY,p.color||[205,228,238],p.drip||0,r,2.4)}
/*@@GFX vessels/pipette@@*/
 
function balance(c,r,st,env){const T=env.th,m=smooth(env,'m',st.mass==null?0:st.mass,4),w=Math.min(r.w,170),x=r.x+(r.w-w)/2,by=r.y+r.h-44,cx=x+w/2;
c.fillStyle=T.dark?'#1e293b':'#e2e8f0';c.strokeStyle=T.glass;c.lineWidth=3;rr(c,x,by,w,40,8);c.fill();c.stroke();
c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,cx-34,by+7,68,22,4);c.fill();c.fillStyle=T.dark?'#7cffb2':'#10361f';c.font='800 14px ui-monospace,monospace';c.textAlign='center';c.fillText(fmt(m,2)+' g',cx,by+23);
c.fillStyle=T.mut;c.fillRect(cx-3,by-12,6,12);c.fillStyle=T.dark?'#475569':'#94a3b8';rr(c,cx-w*.36,by-18,w*.72,7,3);c.fill();
if(m>.005){const k=Math.min(1,m/40);c.fillStyle=rgba(st.massCol||[238,238,232],.95);c.beginPath();c.ellipse(cx,by-19,8+30*k,2+10*k,0,Math.PI,0);c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke()}}
/*@@GFX vessels/balance@@*/
 
const sm=(x,a,b)=>Math.max(0,Math.min(1,(x-a)/(b-a))),mc=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
const PHF={'ind-uniwersalny':p=>{const U=[[229,38,46],[239,90,40],[246,162,30],[232,194,44],[215,217,58],[92,184,92],[33,168,154],[47,127,193],[74,75,181],[107,45,143]],k=Math.max(0,Math.min(8.999,p/14*9)),i=Math.floor(k);return mc(U[i],U[i+1],k-i)},'ind-lakmus':p=>mc([220,38,38],[37,99,235],sm(p,4.5,8.3)),'ind-fenoloftaleina':()=>[219,39,119]};
const phCol=(id,p)=>colors.at(id,p)||PHF[id](p);
const PAPERS={universal:{n:'uniwers.',dry:[238,228,172],f:p=>phCol('ind-uniwersalny',p),rd:p=>'pH ≈ '+Math.round(p)},litmusRed:{n:'lakmus cz.',dry:[226,96,104],f:p=>mc([226,96,104],phCol('ind-lakmus',p),sm(p,7,8.5)),rd:p=>p>8.3?'zasadowy':'bez zmiany'},litmusBlue:{n:'lakmus nb.',dry:[86,112,206],f:p=>mc([86,112,206],phCol('ind-lakmus',p),1-sm(p,4.8,6.8)),rd:p=>p<4.5?'kwaśny':'bez zmiany'},phenol:{n:'fenolft.',dry:[247,245,240],f:p=>mc([247,245,240],phCol('ind-fenoloftaleina',10),sm(p,8.2,10)),rd:p=>p>8.2?'zasadowy':'bez zmiany'}};
function paper(c,r,st,env){const T=env.th,list=st.papers||['universal','litmusRed','litmusBlue','phenol'],n=list.length,pH=st.pH==null?7:st.pH,pool=env.pool,dip=smooth(env,'dip',st.dip==null?1:st.dip,3),y0=r.y+r.h-70,top=r.y+8,len=r.h-102+34*dip,tipY=top+len,gap=r.w/n,sw=Math.min(gap*.52,34);
if(pool.fr!==st.fresh){pool.fr=st.fresh;pool.pw=0;pool.p0=null}
let wet=pool.pw||0;if(dip>.7){wet+=(46-wet)*Math.min(1,(env.dt||.016)*1.2);pool.p0=pH}pool.pw=wet;const pc=pool.p0==null?pH:pool.p0;
c.fillStyle=rgba(st.liquid||[205,228,238],.5);rr(c,r.x+8,y0,r.w-16,r.y+r.h-34-y0,6);c.fill();
list.forEach((id,i)=>{const P=PAPERS[id]||PAPERS.universal,x=r.x+gap*(i+.5)-sw/2;c.fillStyle=rgba(P.dry);rr(c,x,top,sw,len,2);c.fill();
if(wet>1){const wh=Math.min(len,wet);c.fillStyle=rgba(P.f(pc));rr(c,x,tipY-wh,sw,wh,2);c.fill()}
c.strokeStyle='rgba(0,0,0,.18)';c.lineWidth=1;rr(c,x,top,sw,len,2);c.stroke();c.fillStyle=T.dark?'#475569':'#94a3b8';c.fillRect(x-3,top-5,sw+6,8);
c.textAlign='center';c.fillStyle=T.mut;c.font='600 9px Inter,system-ui';c.fillText(P.n,x+sw/2,r.y+r.h-20);if(wet>30){c.fillStyle=T.text;c.font='700 9px Inter,system-ui';c.fillText(P.rd(pc),x+sw/2,r.y+r.h-8)}});
c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';rr(c,r.x+8,y0-6,r.w-16,r.y+r.h-34-y0+6,10);c.stroke()}
/*@@GFX vessels/paper@@*/
 
const ELC={H:'#f1f5f9',C:'#334155',N:'#3b82f6',O:'#ef4444',F:'#a3e635',Cl:'#22c55e',Br:'#9f1239',I:'#7c3aed',S:'#eab308',P:'#f97316',Na:'#a855f7',K:'#c084fc',Ca:'#fb923c',Mg:'#10b981',Cu:'#f59e0b',Fe:'#78716c',Zn:'#94a3b8',Ag:'#cbd5e1'},ELR={Na:.95,K:1.1,Mg:.85,Ca:1.0,Zn:.8,H:.5,C:.78,N:.72,O:.68,F:.58,Cl:.99,S:1.05,P:1.08};
const CHG={'F-':'−','Br-':'−','HSO4-':'−','H2PO4-':'−','NH4+':'+','HCO3-':'−','H3O+':'+','OH-':'−','Cl-':'−','Na+':'+','H+':'+','K+':'+','Zn2+':'2+','Mg2+':'2+','Ca2+':'2+','SO42-':'2−','NO3-':'−','CH3COO-':'−'};
const SUB=x=>x.replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[d]),MNAME=id=>{const q=CHG[id];if(!q)return SUB(id);return SUB(id.slice(0,id.length-(q.length>1?2:1)))+q.replace('2','²').replace('+','⁺').replace('−','⁻')};
const MOLS={HF:[['H',-.5,0],['F',.45,0]],'F-':[['F',0,0]],HBr:[['H',-.7,0],['Br',.7,0]],'Br-':[['Br',0,0]],HNO3:[['N',0,0],['O',0,-1.1],['O',-.95,.6],['O',.95,.6],['H',-1.75,1.05]],'HSO4-':[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1],['H',-1.8,-.5]],H3PO4:[['P',0,0],['O',0,-1.15],['O',-1.1,.3],['O',1.1,.3],['O',0,1.15],['H',-1.85,-.15],['H',1.85,-.15],['H',.55,1.85]],'H2PO4-':[['P',0,0],['O',0,-1.15],['O',-1.1,.3],['O',1.1,.3],['O',0,1.15],['H',-1.85,-.15],['H',1.85,-.15]],'NH4+':[['N',0,0],['H',-.85,.6],['H',.85,.6],['H',0,-.95],['H',0,.2]],H2O:[['O',0,0],['H',-.8,.6],['H',.8,.6]],CO2:[['C',0,0],['O',-1.2,0],['O',1.2,0]],H2:[['H',-.37,0],['H',.37,0]],O2:[['O',-.6,0],['O',.6,0]],N2:[['N',-.55,0],['N',.55,0]],NH3:[['N',0,0],['H',-.85,.6],['H',.85,.6],['H',0,-.95]],CH4:[['C',0,0],['H',-.8,-.8],['H',.8,-.8],['H',-.8,.8],['H',.8,.8]],HCl:[['H',-.6,0],['Cl',.6,0]],Na:[['Na',0,0]],Cl:[['Cl',0,0]],'H3O+':[['O',0,0],['H',-.82,.55],['H',.82,.55],['H',0,-.98]],'OH-':[['O',0,0],['H',.9,0]],'Cl-':[['Cl',0,0]],'Na+':[['Na',0,0]],'H+':[['H',0,0]],'K+':[['K',0,0]],'Zn2+':[['Zn',0,0]],'Mg2+':[['Mg',0,0]],'Ca2+':[['Ca',0,0]],'SO42-':[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1]],'NO3-':[['N',0,0],['O',0,-1.1],['O',-.95,.6],['O',.95,.6]],H2SO4:[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1],['H',-1.8,-.5],['H',1.8,.5]],CH3COOH:[['C',-.75,0],['C',.6,0],['O',1.25,-.95],['O',1.25,.95],['H',2.05,1.15],['H',-1.5,-.7],['H',-1.5,.7],['H',-.75,-1.05]],'CH3COO-':[['C',-.75,0],['C',.6,0],['O',1.25,-.95],['O',1.25,.95],['H',-1.5,-.7],['H',-1.5,.7],['H',-.75,-1.05]],NaOH:[['Na',-.9,0],['O',.4,0],['H',1.25,0]],C6H12O6:[['C',-1.1,-.6],['C',0,-1.25],['C',1.1,-.6],['C',1.1,.6],['O',0,1.25],['C',-1.1,.6],['O',-2.05,-1.15],['O',0,-2.35],['O',2.05,-1.15],['O',2.05,1.15]]};
function molAtoms(id){if(MOLS[id])return MOLS[id];try{const M=C.MOLECULE&&C.MOLECULE.get&&C.MOLECULE.get(id);if(M&&M.atoms&&M.atoms.length){let mx=0,my=0;M.atoms.forEach(a=>{mx+=+a.x||0;my+=+a.y||0});mx/=M.atoms.length;my/=M.atoms.length;return MOLS[id]=M.atoms.map(a=>[a.element||a.symbol||'C',(+a.x||0)-mx,(+a.y||0)-my])}}catch(_){}return MOLS.H2O}
function molTank(c,r,st,env){const T=env.th,pool=env.pool,mt=pool.mt=pool.mt||{list:[]},dt=Math.min(.05,env.dt||.016),ph=st.phase||'gas',sp=Math.sqrt(Math.max(.05,((st.T==null?25:st.T)+273)/298)),bx=r.x+6,bw=r.w-12,by=r.y+8,bh=r.h-14,spec=st.mol||[{id:'H2O',n:10}];
const want={};let N=0;spec.forEach(s=>{want[s.id]=(want[s.id]||0)+s.n;N+=s.n});const cnt={};
mt.list=mt.list.filter(p=>{if(!(p.id in want))return false;cnt[p.id]=(cnt[p.id]||0)+1;return cnt[p.id]<=want[p.id]});
Object.keys(want).forEach(id=>{for(let i=(cnt[id]||0);i<want[id];i++)mt.list.push({id,x:bx+Math.random()*bw,y:by+Math.random()*bh,vx:(Math.random()-.5)*60,vy:(Math.random()-.5)*60,a:Math.random()*6.28,w:(Math.random()-.5)*2})});
const s=Math.max(6,Math.min(15,Math.sqrt(bw*bh/Math.max(N,1))/3.3)),k=mt.list.length,cols=Math.max(1,Math.ceil(Math.sqrt(k*bw/Math.max(1,bh*.55)))),rows=Math.max(1,Math.ceil(k/cols));
if(ph==='liquid'){c.fillStyle=rgba(st.liquid||[205,228,238],.3);c.fillRect(bx,by+bh*.14,bw,bh*.86)}
mt.list.forEach((p,i)=>{if(ph==='solid'){const cw=bw/cols,ch=Math.min(cw,bh*.6/rows),t=env.t||0;p.x=bx+cw*(i%cols+.5)+Math.sin(t/90*sp+i*1.7)*1.4*sp;p.y=by+bh-ch*(Math.floor(i/cols)+.5)-2+Math.cos(t/110*sp+i*2.3)*1.4*sp;return}
const v0=(ph==='gas'?70:26)*sp,top=ph==='gas'?by:by+bh*.14;p.vx+=(Math.random()-.5)*v0*dt*8;p.vy+=(Math.random()-.5)*v0*dt*8+0;const v=Math.hypot(p.vx,p.vy),mx=v0*(ph==='gas'?2.2:1.6);if(v>mx){p.vx*=mx/v;p.vy*=mx/v}
p.x+=p.vx*dt;p.y+=p.vy*dt;p.a+=p.w*dt*(ph==='gas'?3:1);const m=s*1.2;if(p.x<bx+m){p.x=bx+m;p.vx=Math.abs(p.vx)}if(p.x>bx+bw-m){p.x=bx+bw-m;p.vx=-Math.abs(p.vx)}if(p.y<top+m){p.y=top+m;p.vy=Math.abs(p.vy)}if(p.y>by+bh-m){p.y=by+bh-m;p.vy=-Math.abs(p.vy)}});
mt.list.forEach(p=>{const at=molAtoms(p.id),cs=Math.cos(p.a),sn=Math.sin(p.a),pts=at.map(a=>[p.x+(a[1]*cs-a[2]*sn)*s,p.y+(a[1]*sn+a[2]*cs)*s,a[0]]);
c.strokeStyle=T.dark?'#94a3b8':'#64748b';c.lineWidth=Math.max(1.5,s*.22);c.lineCap='round';
for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j];if(Math.hypot(a[0]-b[0],a[1]-b[1])<((ELR[a[2]]||.8)+(ELR[b[2]]||.8))*1.25*s){c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke()}}
pts.forEach(q=>{c.fillStyle=ELC[q[2]]||'#a1a1aa';c.beginPath();c.arc(q[0],q[1],(ELR[q[2]]||.8)*s*.62,0,7);c.fill();c.strokeStyle='rgba(0,0,0,.35)';c.lineWidth=1;c.stroke()});const q=CHG[p.id];if(q){const bx=p.x+s*1.05,by=p.y-s*1.05,br=Math.max(5,s*.48);c.fillStyle=q.indexOf('+')>=0?'#ea580c':'#2563eb';c.beginPath();c.arc(bx,by,br,0,7);c.fill();c.fillStyle='#fff';c.font='800 '+Math.round(br*1.25)+'px Inter,system-ui';c.textAlign='center';c.fillText(q,bx,by+br*.45)}});
c.strokeStyle=T.glass;c.lineWidth=4;c.lineJoin='round';rc(c,r.x+2,r.y+4,r.w-4,r.h-8,14);c.stroke();
c.fillStyle=T.mut;c.font='600 10px Inter,system-ui';c.textAlign='left';c.fillText(spec.map(q=>MNAME(q.id)+'×'+q.n).join('  ')+' · '+({gas:'gaz',liquid:'ciecz',solid:'ciało stałe'}[ph]||ph),r.x+10,r.y+r.h-12)}
/*@@GFX vessels/molTank@@*/

const ELX=(function(){
const POS='#dc2626',NEG='#2563eb',PE=()=>C.PHYS&&C.PHYS.electro;
function charge(c,x,y,s,r,a){if(!s)return;r=r||6;c.globalAlpha=a==null?1:a;c.fillStyle=s>0?POS:NEG;c.beginPath();c.arc(x,y,r,0,7);c.fill();c.strokeStyle='#fff';c.lineWidth=Math.max(1.2,r*.27);c.beginPath();c.moveTo(x-r*.55,y);c.lineTo(x+r*.55,y);if(s>0){c.moveTo(x,y-r*.55);c.lineTo(x,y+r*.55)}c.stroke();c.globalAlpha=1}
 
function rod(c,x0,y0,x1,y1,o){o=o||{};const T=o.th||th(),len=Math.hypot(x1-x0,y1-y0),ang=Math.atan2(y1-y0,x1-x0),w=o.width||18,q=Math.round(o.q||0);c.save();c.translate(x0,y0);c.rotate(ang);
 c.fillStyle=o.col||'#1f2937';c.strokeStyle=T.mut;c.lineWidth=1;rr(c,0,-w/2,len,w,w/2);c.fill();c.stroke();
 if(o.pairs!==false)for(let i=0;i<8;i++){const xx=14+i*(len-28)/7;charge(c,xx,-3,1,4,.18);charge(c,xx+6,3,-1,4,.18)}
 const n=Math.abs(q);for(let i=0;i<n;i++)charge(c,len-14-i*((len-28)/Math.max(1,n)),0,q,Math.min(6,w*.36));c.restore()}
 
function cloth(c,x,y,w,h,o){o=o||{};const T=o.th||th(),q=Math.round(o.q||0);c.globalAlpha=o.alpha==null?1:o.alpha;c.fillStyle=o.col||'#cbd5e1';c.strokeStyle=T.mut;c.lineWidth=1;rr(c,x,y,w,h,10);c.fill();c.stroke();
 for(let i=0;i<Math.abs(q);i++)charge(c,x+10+(i%6)*14,y+12+Math.floor(i/6)*14,q,5);if(o.name){c.fillStyle=T.text;c.font='700 11px system-ui';c.textAlign='center';c.fillText(o.name,x+w/2,y+h+16)}c.globalAlpha=1}
 
function pendulum(c,px,py,L,phi,o){o=o||{};const T=o.th||th(),bR=o.r||13,bx=px+L*Math.sin(phi),by=py+L*Math.cos(phi);c.strokeStyle=T.mut;c.lineWidth=1.2;c.beginPath();c.moveTo(px-30,py);c.lineTo(px+30,py);c.stroke();c.beginPath();c.moveTo(px,py);c.lineTo(bx,by);c.stroke();
 const g=c.createRadialGradient(bx-4,by-4,2,bx,by,bR);g.addColorStop(0,'#fff');g.addColorStop(1,'#a8b3c2');c.fillStyle=g;c.beginPath();c.arc(bx,by,bR,0,7);c.fill();c.strokeStyle=T.mut;c.stroke();
 if(!o.q&&o.polar&&o.polar.s){const ex=o.polar.x-bx,ey=o.polar.y-by,l=Math.hypot(ex,ey)||1;charge(c,bx+ex/l*7,by+ey/l*7,-o.polar.s,4.5);charge(c,bx-ex/l*7,by-ey/l*7,o.polar.s,4.5)}
 else if(o.q){charge(c,bx,by,o.q,6);c.fillStyle=T.text;c.font='700 10px system-ui';c.textAlign='center';c.fillText((o.q>0?'+':'')+Math.round(o.q),bx,by+bR+12)}return{x:bx,y:by,r:bR}}
 
function electroscope(c,r,st,o){o=o||{};const T=o.th||th(),cx=r.x+r.w*(st.cx==null?.42:st.cx),top=r.y+r.h*.18,ballR=Math.min(20,r.w*.06+8),jh=r.h*.62,jw=Math.min(180,r.w*.42);
 c.strokeStyle=T.mut;c.lineWidth=2;c.fillStyle='rgba(186,230,253,.18)';rr(c,cx-jw/2,top+r.h*.2,jw,jh,16);c.fill();c.stroke();c.fillStyle='#57534e';c.fillRect(cx-28,top+r.h*.17,56,18);
 c.strokeStyle='#94a3b8';c.lineWidth=6;c.beginPath();c.moveTo(cx,top+ballR);c.lineTo(cx,top+r.h*.53);c.stroke();
 const gr=c.createRadialGradient(cx-6,top-6,3,cx,top,ballR);gr.addColorStop(0,'#fff');gr.addColorStop(1,'#94a3b8');c.fillStyle=gr;c.beginPath();c.arc(cx,top,ballR,0,7);c.fill();
 const thd=st.theta!=null?st.theta:55*(1-Math.exp(-Math.abs(st.leaves||0)/4)),ly=top+r.h*.53,ll=Math.min(80,r.h*.22),ang=thd*Math.PI/360;c.fillStyle='#fcd34d';c.strokeStyle='#b45309';c.lineWidth=1;
 [-1,1].forEach(s=>{c.save();c.translate(cx,ly);c.rotate(s*ang);c.beginPath();c.moveTo(-3,0);c.lineTo(3,0);c.lineTo(5,ll);c.lineTo(-5,ll);c.closePath();c.fill();c.stroke();const nl=Math.round(Math.abs(st.leaves||0));for(let i=0;i<Math.min(nl,6);i++)charge(c,0,14+i*11,st.leaves,4.5);c.restore()});
 const nb=Math.min(8,Math.round(Math.abs(st.ball||0)));for(let i=0;i<nb;i++){const a=-Math.PI*.9+i*(Math.PI*.8/Math.max(1,nb-1));charge(c,cx+Math.cos(a)*(ballR-6),top+Math.sin(a)*(ballR-6),st.ball,4.5)}
 if(st.ground){c.strokeStyle='#16a34a';c.lineWidth=3;c.beginPath();c.moveTo(cx-ballR,top);c.lineTo(cx-jw/2-20,top);c.lineTo(cx-jw/2-20,r.y+r.h-14);c.stroke();for(let i=0;i<3;i++){c.beginPath();c.moveTo(cx-jw/2-36+i*6,r.y+r.h-12+i*4);c.lineTo(cx-jw/2-4-i*6,r.y+r.h-12+i*4);c.stroke()}c.fillStyle='#16a34a';c.font='700 11px system-ui';c.textAlign='center';c.fillText('ziemia',cx-jw/2-20,top-8)}
 if(st.rod){const d=st.rod.d==null?1:st.rod.d,tx=cx+ballR+6+d*r.w*.36,ty=top-d*30;rod(c,tx,ty,tx+Math.cos(-.35)*r.w*.3,ty+Math.sin(-.35)*r.w*.3,{q:0,col:st.rod.col||(st.rod.q<0?'#1f2937':'#bae6fd'),pairs:false,th:T});
  for(let i=0;i<Math.abs(Math.round(st.rod.q||0));i++)charge(c,tx+Math.cos(-.35)*(10+i*14),ty+Math.sin(-.35)*(10+i*14),st.rod.q,5)}
 return{cx,top,ballR,theta:thd}}
 
function fieldLines(c,w,h,Q,o){o=o||{};const T=o.th||th(),P=PE();if(!P)return;c.strokeStyle=o.col||(T.dark?'rgba(148,163,184,.45)':'rgba(71,85,105,.4)');c.lineWidth=1;
 Q.forEach((q0,ci)=>{if(!q0.q)return;const n=o.n||Math.round(8+Math.abs(q0.q)*(o.scale||2e6));for(let i=0;i<n;i++){const an=2*Math.PI*i/n,s=q0.q>0?1:-1;let px=q0.x+Math.cos(an)*14,py=q0.y+Math.sin(an)*14;c.beginPath();c.moveTo(px,py);
  for(let k=0;k<700;k++){const f=P.fieldAt(Q,px,py),m=Math.hypot(f.x,f.y)||1;px+=s*3*f.x/m;py+=s*3*f.y/m;c.lineTo(px,py);if(px<0||px>w||py<0||py>h)break;if(Q.some((u,ui)=>ui!==ci&&u.q&&Math.hypot(px-u.x,py-u.y)<12))break;
   if(k===50){let aa=Math.atan2(s*f.y,s*f.x);if(s<0)aa+=Math.PI;c.moveTo(px,py);c.lineTo(px-6*Math.cos(aa-.45),py-6*Math.sin(aa-.45));c.moveTo(px,py);c.lineTo(px-6*Math.cos(aa+.45),py-6*Math.sin(aa+.45));c.moveTo(px,py)}}c.stroke()}})}
function pointCharge(c,x,y,q,label,o){o=o||{};const T=o.th||th();c.fillStyle=q>0?POS:q<0?NEG:'#94a3b8';c.beginPath();c.arc(x,y,14,0,7);c.fill();c.fillStyle='#fff';c.font='800 13px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(q>0?'+':q<0?'−':'0',x,y+1);c.textBaseline='alphabetic';if(label){c.fillStyle=T.text;c.font='700 12px system-ui';c.fillText(label,x,y+34)}}
function arrow(c,x,y,dx,len,col){if(!len)return;const ex=x+dx*len;c.strokeStyle=col||'#ea580c';c.fillStyle=col||'#ea580c';c.lineWidth=3.5;c.beginPath();c.moveTo(x,y);c.lineTo(ex,y);c.stroke();c.beginPath();c.moveTo(ex+dx*8,y);c.lineTo(ex-dx*2,y-7);c.lineTo(ex-dx*2,y+7);c.fill()}
 
function bar(c,xs,y0,xe,q,o){o=o||{};const T=o.th||th(),N=q.length-2,cw=(xe-xs)/N;const gr=c.createRadialGradient(xs-36,y0-8,3,xs-30,y0,26);gr.addColorStop(0,'#fff');gr.addColorStop(1,'#94a3b8');c.fillStyle=gr;c.beginPath();c.arc(xs-30,y0,26,0,7);c.fill();
 for(let j=0;j<Math.min(10,Math.round(q[0]/2));j++){const an=j/10*6.28;charge(c,xs-30+Math.cos(an)*15,y0+Math.sin(an)*15,1,4.5)}c.fillStyle=o.col||'#c2703d';c.strokeStyle=T.mut;c.fillRect(xs,y0-10,xe-xs,20);c.strokeRect(xs,y0-10,xe-xs,20);
 for(let i=1;i<=N;i++){const a=Math.min(1,q[i]/1.2);if(a>.08)charge(c,xs+(i-.5)*cw,y0,1,Math.min(6,cw*.45),a)}
 const ex=xe+46,ang=Math.min(60,55*(1-Math.exp(-Math.abs(q[N+1])/1.2)))*Math.PI/360;c.strokeStyle='#94a3b8';c.lineWidth=4;c.beginPath();c.moveTo(xe,y0);c.lineTo(ex,y0);c.lineTo(ex,y0+50);c.stroke();c.fillStyle='#fcd34d';c.strokeStyle='#b45309';c.lineWidth=1;[-1,1].forEach(s=>{c.save();c.translate(ex,y0+50);c.rotate(s*ang);c.fillRect(-3,0,6,50);c.strokeRect(-3,0,6,50);c.restore()})}
 
function sphere(c,x,y,R,q,o){o=o||{};const T=o.th||th(),g=c.createRadialGradient(x-R*.35,y-R*.35,2,x,y,R);g.addColorStop(0,'#fff');g.addColorStop(1,'#94a3b8');c.fillStyle=g;c.beginPath();c.arc(x,y,R,0,7);c.fill();c.strokeStyle=T.mut;c.lineWidth=1;c.stroke();
 const n=Math.min(12,Math.round(Math.abs(q)*(o.scale||1)));for(let i=0;i<n;i++){const a=i/n*6.283,rr2=R*.62;charge(c,x+Math.cos(a)*rr2,y+Math.sin(a)*rr2,q,Math.max(4,R*.16))}
 if(o.label){c.fillStyle=T.text;c.font='800 15px system-ui';c.textAlign='center';c.fillText(o.label,x,y-R-10)}if(o.value){c.font='700 13px system-ui';c.fillStyle=q>0?POS:q<0?NEG:T.mut;c.fillText(o.value,x,y+R+20)}}
 
function spark(c,x1,y1,x2,y2,a,seed){const n=9,dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;let s=seed||1;const rnd=()=>(s=(s*9301+49297)%233280)/233280-.5;c.save();c.globalAlpha=a==null?1:a;c.strokeStyle='#e0e7ff';c.shadowColor='#818cf8';c.shadowBlur=12;c.lineWidth=2.5;c.beginPath();c.moveTo(x1,y1);for(let i=1;i<n;i++){const t=i/n,o=rnd()*l*.18;c.lineTo(x1+dx*t+nx*o,y1+dy*t+ny*o)}c.lineTo(x2,y2);c.stroke();c.restore()}
return{charge,sphere,rod,cloth,pendulum,electroscope,fieldLines,pointCharge,arrow,bar,spark,POS,NEG}})();
 
/*@@GFX vessels/electroscope@@*/
/*@@GFX vessels/chargedRod@@*/
/*@@GFX vessels/pendulum@@*/
/*@@GFX vessels/fieldMap@@*/
/*@@GFX vessels/chargeBar@@*/
/*@@GFX effects/discharge@@*/
 
const padOf=(v,r)=>typeof v.pad==='function'?v.pad(r):v.pad;
 
function shadowOf(v,c,r,T){const y=r.y+r.h+2;const g1=c.createRadialGradient(r.x+r.w/2,y,2,r.x+r.w/2,y,r.w*.55);g1.addColorStop(0,T.shadow);g1.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g1;c.beginPath();c.ellipse(r.x+r.w/2,y,r.w*.55,6,0,0,7);c.fill()}
function highlights(v,c,r,T){const hx=r.x+r.w*(v.hl||.1),hw=Math.max(3,Math.min(9,r.w*.05)),gr=c.createLinearGradient(0,r.y,0,r.y+r.h);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.2,'rgba(255,255,255,'+(T.dark?.14:.42)+')');gr.addColorStop(.85,'rgba(255,255,255,'+(T.dark?.05:.16)+')');gr.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=gr;rr(c,hx,r.y+r.h*.06,hw,r.h*.86,hw/2);c.fill();c.globalAlpha=.5;rr(c,r.x+r.w*.86,r.y+r.h*.16,Math.max(2,hw*.35),r.h*.58,2);c.fill();c.globalAlpha=1}
function outline(v,c,r,T,porc){c.save();v.path(c,r);c.lineJoin=c.lineCap='round';const col=porc?(T.dark?'#cbd5e1':'#94a3b8'):T.glass;c.strokeStyle=col;c.lineWidth=v.lw;c.stroke();if(!porc){c.strokeStyle=T.glassHi;c.lineWidth=1.1;c.stroke()}
 if(v.rim){const m=v.rim(r),x0=m[0],x1=m[1],y=m[2];c.strokeStyle=col;c.lineWidth=v.lw*.9;c.beginPath();if(!m[3]){c.moveTo(x0-3.5,y);c.lineTo(x0+1,y)}c.moveTo(x1-1,y);c.lineTo(x1+3.5,y);c.stroke();c.globalAlpha=.42;c.lineWidth=1.2;c.beginPath();c.ellipse((x0+x1)/2,y,Math.max(1,(x1-x0)/2),Math.min(4,(x1-x0)*.07),0,0,7);c.stroke()}c.restore()}
function free(c,r,st,env,an){const pool=env.pool,evs=pool.events,cfgAll=Object.assign({},st.fx,env.fx),offs=(env.opt&&env.opt.effects)||{},e0={c,r,st,env,T:env.th,t:env.t||0,dt:env.dt||.016,pool,anchor:an||st.anchor||{x:r.x+r.w/2,y:r.y+r.h*.72}};
 Object.keys(E).forEach(k=>{const f=E[k];if(!f.free||offs[k]===0||offs[k]===false)return;if(env.only&&env.only.indexOf(k)<0)return;const cfg=cfgAll[k],mine=evs.filter(x=>x.id===k),alive=f.alive&&f.alive(pool);if(!cfg&&!mine.length&&!alive)return;
 const e=Object.assign({},e0,{o:Object.assign({},f.defaults,(env.opt&&env.opt.fx&&env.opt.fx[k])||{},cfg&&cfg!==true?cfg:{}),active:!!cfg,evs:mine});c.save();f.draw(e);c.restore()});
 for(let i=evs.length-1;i>=0;i--){const v=evs[i];v.age+=e0.dt;if(v.age>v.dur)evs.splice(i,1)}}
function body(id,v,c,r,st,env){const on=(env.opt&&env.opt.effects)||{},only=env.only,use=k=>only?only.indexOf(k)>=0:(on[k]!==0&&on[k]!==false),T=env.th,pool=env.pool;pool.events=pool.events||[];
 const lv=cl01(st.level==null?.5:st.level),bot=r.y+r.h-padOf(v,r),top=bot-v.hmax*r.h*lv,full=use('glass'),porc=v.mat==='porcelain',t=env.t||0;
 const vort=Math.max(0,st.stir||0)*(st.vortex===false?0:1),depth=Math.min(28,(bot-top)*.4)*vort,men=Math.min(3.5,r.w*.03),sl=1+(st.slosh||0)*3;
 const e={c,r,st,env,top,bot,T,t,dt:env.dt||.016,pool,use,v,path:()=>v.path(c,r)};
 e.surf=x=>{const u=(x-r.x)/r.w,d=Math.abs(2*u-1);return top-men*Math.pow(d,6)+Math.sin(t/400+x/22)*1.3*sl+(depth?depth*Math.pow(Math.max(0,1-Math.abs(u-.5)/.32),2):0)};
 const run=l=>Object.keys(E).forEach(k=>{const f=E[k];if(!f.free&&f.layer===l&&use(k)&&(!f.vessels||f.vessels.indexOf(v.id)>=0)){e.o=Object.assign({},f.defaults,(env.opt&&env.opt.fx&&env.opt.fx[k])||{},(st.fx&&st.fx[k]&&st.fx[k]!==true)?st.fx[k]:{});e.evs=pool.events.filter(x=>x.id===k);c.save();f.draw(e);c.restore()}});
 if(full&&v.shadow)shadowOf(v,c,r,T);
 if(full){c.save();v.path(c,r);c.closePath();c.fillStyle=porc?(T.dark?'rgba(226,232,240,.16)':'rgba(255,255,255,.75)'):T.tint;c.fill();c.restore()}
 run('back');c.save();v.path(c,r);c.closePath();c.clip();run('in');if(full&&!porc)highlights(v,c,r,T);c.restore();
 if(full){outline(v,c,r,T,porc);if(v.deco){c.save();v.deco(c,r,T,st);c.restore()}}
 run('front')}
function draw(id,c,r,st,env){const v=V[id];if(!v)return;env=env||{};env.th=env.th||th();const pool=env.pool=env.pool||{};pool.events=pool.events||[];st=st||{};env.fx=null;
 const sh=pool.events.find(x=>x.id==='explosion'&&x.o.shake);let sx=0,sy=0;if(sh){const k=Math.pow(Math.max(0,1-sh.age/.6),2)*6*sh.o.shake*sh.o.size;sx=(Math.random()-.5)*k;sy=(Math.random()-.5)*k}
 c.save();c.translate(sx,sy);let an=null;if(v.custom)an=v.custom(c,r,st,env);else body(id,v,c,r,st,env);free(c,r,st,env,an);c.restore()}
 
function tube(c,pts,o){o=o||{};const T=o.th||th();if(!pts||pts.length<2)return;const w=o.w||8;c.save();c.lineJoin=c.lineCap='round';const P=()=>{c.beginPath();pts.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]))};
 P();c.strokeStyle=T.glass;c.lineWidth=w;c.stroke();P();c.strokeStyle=T.dark?'#1e293b':'#eef4f8';c.lineWidth=w-3.5;c.stroke();if(o.liquid){P();c.strokeStyle=rgba(o.liquid,.85);c.lineWidth=w-4;c.stroke()}
 if(o.flow>0){P();c.setLineDash([5,9]);c.lineDashOffset=-(o.t||0)/1000*70*Math.min(2,o.flow);c.strokeStyle=rgba(o.color||[148,170,190],.95);c.lineWidth=2.4;c.stroke();c.setLineDash([])}c.restore()}
 
function fromLab(lab){const S=lab.S||{};let ph=7;try{ph=pH(S)}catch(_){}const t=lab.thermalState,b=lab.combustionState,k=lab.coolerState;return{pH:ph,titrant:lab.titrationState||null,liquid:liquidColor(S),level:clamp(.28+.18*Math.min(S.V||1,4),.28,.82),ppts:S.ppts||[],solids:S.solids||[],gas:Math.min(1,S.gasT||0),heat:S.heat||0,fumes:S.fumes||0,pop:0,T:t?t.T:(S.T!=null?S.T:25),flame:b&&b.on?{on:1,power:b.power,phi:b.phi,soot:b.soot,temp:b.temp,air:b.air,color:b.flameRGB||null}:null,coolant:k?{Tin:k.Tin,Tout:k.Tout,flow:k.flow,q:k.q}:null}}
 
function mount(host,spec){spec=spec||{};const cv=document.createElement('canvas');cv.style.cssText='width:100%;height:'+(spec.height||260)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';host.appendChild(cv);
 const c=cv.getContext('2d'),parts=(spec.parts||[{id:spec.vessel||'beaker',x:.1,y:.06,w:.8,h:.88}]).map(p=>Object.assign({},p,{pool:{events:[]}})),S=spec.state;let raf=0,last=0,W=0,H=0,dead=0,seen=0,vis=true;
 const sz=()=>{const d=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth||320;H=cv.clientHeight||260;cv.width=W*d;cv.height=H*d;c.setTransform(d,0,0,d,0,0)};if(g.ResizeObserver)new ResizeObserver(sz).observe(cv);sz();
 if(g.IntersectionObserver){const io=new IntersectionObserver(es=>{vis=es[es.length-1].isIntersecting});io.observe(cv)}
 const lab=spec.lab,popTimer={v:0};if(lab&&lab.on)lab.on('add',()=>{popTimer.v=1});
 const find=i=>typeof i==='string'?parts.find(q=>q.name===i||q.id===i):parts[i||0];
 const api={canvas:cv,state:S,parts,trigger:(id,o,i)=>{const p=find(i);return p?trigger(p.pool,id,o):null},pool:i=>{const p=find(i);return p&&p.pool},reset:()=>parts.forEach(p=>{p.pool={events:[]}}),destroy(){dead=1;cancelAnimationFrame(raf);if(cv.parentNode)cv.parentNode.removeChild(cv)}};
 function frame(t){if(dead)return;if(!cv.isConnected){if(seen){dead=1;return}raf=requestAnimationFrame(frame);return}seen=1;const dt=Math.min(.05,(t-last)/1000||0);last=t;if(!W)sz();
  if(spec.tick&&S)spec.tick(S,dt,t,api);if(!vis){raf=requestAnimationFrame(frame);return}
  c.clearRect(0,0,W,H);popTimer.v=Math.max(0,popTimer.v-dt*2);const T=th();
  const bw=spec.aspect?Math.min(W,H*spec.aspect):W,bx=(W-bw)/2;parts.forEach(p=>{if(p.show&&!p.show(S))return;let st=p.get?p.get(S,api):spec.get?spec.get():lab?fromLab(lab):(S||{});if(!st)return;if(p.s)st=Object.assign({},st,p.s);if(lab)st.pop=popTimer.v;if(spec.fx)st.fx=Object.assign({},spec.fx,st.fx);
   if(p.clip){c.save();c.beginPath();c.rect(bx+p.clip[0]*bw,p.clip[1]*H,p.clip[2]*bw,p.clip[3]*H);c.clip()}draw(p.id,c,{x:bx+p.x*bw,y:p.y*H,w:p.w*bw,h:p.h*H},st,{t,dt,pool:p.pool,only:spec.only,opt:{effects:spec.effects,fx:spec.fxOpt},W:bw,H,X0:bx,th:T});if(p.clip)c.restore()});
  const L=typeof spec.links==='function'?spec.links(S):spec.links;if(L)L.forEach(l=>{if(l.show&&!l.show(S))return;tube(c,l.pts.map(q=>[bx+q[0]*bw,q[1]*H]),{flow:typeof l.flow==='function'?l.flow(S):l.flow,color:l.color,t,w:l.w,liquid:typeof l.liquid==='function'?l.liquid(S):l.liquid,th:T})});
  if(spec.overlay){c.save();c.translate(bx,0);spec.overlay(c,bw,H,S,t,T);c.restore()}raf=requestAnimationFrame(frame)}
 raf=requestAnimationFrame(frame);return api}
 
function mountEffect(id,host,opt){opt=opt||{};const wrap=document.createElement('div');wrap.dataset.effect=id;wrap.style.cssText='position:relative;border:1px solid var(--border,#e2e8f0);border-radius:12px;overflow:hidden';host.appendChild(wrap);const f=E[id]||{};
 const demo={liquid:[205,228,238],level:.55,gas:1,heat:3,fumes:1,splash:1,T:95,pop:0,ppts:[{col:[248,250,252],eq:1.2}],solids:[{col:[154,167,179],eq:3,t:'metal',shape:'granule'}],turb:.6,schl:1,stir:.8,label:'HCl',stopper:true};let n=0;
 const m=mount(wrap,{height:opt.height||170,vessel:f.free?'stage':(f.vessels?f.vessels[0]:'beaker'),only:f.free?[id]:['glass','liquid','meniscus',id],get:()=>{n++;demo.fx=f.free&&!f.oneShot?{[id]:{}}:null;if((f.oneShot||f.evented)&&n%170===1&&m)m.trigger(id);demo.pop=id==='ripples'||id==='precipitate'?1-((n%120)/120):0;demo.splash=id==='splash'?1:0;return demo}});return{host:wrap,destroy:()=>{m.destroy();if(wrap.parentNode)wrap.parentNode.removeChild(wrap)}}}
 
const colors={water:()=>{const K=C.COLORS;return K&&K.water?K.water.slice():WATER.slice()},at:(id,p)=>{const K=C.COLORS;try{return K&&K.at?K.at(id,p):null}catch(_){return null}},rgb:h=>{const K=C.COLORS;if(Array.isArray(h))return h.slice();if(K&&K.rgb)try{return K.rgb(h)}catch(_){}return WATER.slice()},mix:(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*Math.max(0,Math.min(1,t)))),ind:(id,p)=>indCol(id,p),indName};
 
function fromReaction(sp,p,extra){sp=sp||{};p=Math.max(0,Math.min(1,p||0));const e=p*p*(3-2*p),out=sp.out||[],has=k=>out.indexOf(k)>=0,l0=sp.l0?colors.rgb(sp.l0):colors.water();let liq=sp.l1?colors.mix(l0,colors.rgb(sp.l1),e):l0;
  
 if(has('barwa')&&(sp.colId||!sp.l1)){const c=colors.at(sp.colId||'ion-cu2');if(c)liq=colors.mix(liq,colors.rgb(c),.45*e)}
 const ppts=[],pc=sp.pptCol||(has('osad')||sp.ppt?colors.at(sp.ppt||'ppt-agcl'):null);if(pc)ppts.push({col:colors.rgb(pc),eq:2.6*Math.max(0,(p-.25)/.75),metal:false,id:sp.ppt||(has('osad')&&!sp.pptCol?'ppt-agcl':null),habit:sp.habit||null});
 const solids=sp.solid?[{col:sp.solid.col2?colors.mix(colors.rgb(sp.solid.col),colors.rgb(sp.solid.col2),e):colors.rgb(sp.solid.col),eq:(sp.solid.eq||4)*(1-e*(1-(sp.solid.end||0))),t:sp.solid.t||'metal',shape:sp.solid.shape}]:[];
 const env=Math.max(0,Math.min(1,Math.sin(p*Math.PI*.9)+.15))*(p>=1?0:1),plume=sp.solid&&sp.l1&&p>0&&p<1?{col:colors.rgb(sp.l1),k:Math.sin(p*Math.PI)}:null;
 return Object.assign({liquid:liq,level:sp.level||.78,ppts,solids,plume,gas:has('gaz')&&p>0?env:0,foam:sp.foam&&p>0?env*.9:0,bubSize:sp.bubSize||1,bubN:sp.bubN||1,fumes:sp.fumes&&p>0&&p<1.01?Math.min(1,p*4):0,fumeColor:sp.fumeColor||(typeof sp.fumes==='string'&&colors.at(sp.fumes))||null,fumeGas:sp.fumeGas||(sp.fumes==='gas-no2'?'NO2':null),heat:sp.heat&&p>0&&p<1?sp.heat:0,pop:pc?Math.min(1,p*3)*(1-.55*p):0,T:sp.T==null?25:sp.T,turb:sp.turb?sp.turb*e:0},extra||{})}
 
const CP=new WeakMap();
function canvasDraw(ctx,w,h,time,st,o){o=o||{};const key=ctx.canvas||ctx,P=CP.get(key)||{pool:{events:[]},last:time};CP.set(key,P);if(o.key!==undefined&&P.key!==o.key){P.pool={events:[]};P.key=o.key} const dt=Math.min(.05,Math.max(0,time-P.last));P.last=time;const r=o.rect||{x:w*.18,y:55,w:w*.64,h:h-88};draw(o.vessel||'beaker',ctx,r,st,{t:time*1000,dt,pool:P.pool,only:o.only,opt:{effects:o.effects}});return r}

const UI=(()=>{const css='.gx-ui{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px}.gx-ui button,.gx-ui select{border:1px solid var(--border,#e2e8f0);background:var(--panel,var(--surface,#fff));color:inherit;padding:6px 11px;border-radius:999px;font:inherit;font-size:13px;cursor:pointer;min-height:32px}.gx-ui button.pri{background:var(--accent,#2563eb);border-color:var(--accent,#2563eb);color:#fff}.gx-ui label{display:inline-flex;gap:6px;align-items:center;font-size:12px}.gx-ui input[type=range]{width:120px}.gx-ui output{min-width:34px;font-variant-numeric:tabular-nums}.gx-note{margin-top:8px;font-size:13px;line-height:1.45;padding:8px 11px;border-radius:10px;background:rgba(100,116,139,.11)}.gx-note b{font-weight:700}';
 const mk=(t,cls,tx)=>{const e=document.createElement(t);if(cls)e.className=cls;if(tx!=null)e.textContent=tx;return e};
 return{ensure(){if(!document.getElementById('che-gfx-css')){const s=mk('style');s.id='che-gfx-css';s.textContent=css;document.head.appendChild(s)}},
 row(h){const d=mk('div','gx-ui');h.appendChild(d);return d},
 btn(h,t,fn,pri){const b=mk('button',pri?'pri':null,t);b.type='button';b.onclick=fn;h.appendChild(b);return b},
 sel(h,opts,v,fn,l){const s=mk('select');opts.forEach(([k,t])=>{const o=mk('option',null,t);o.value=k;s.appendChild(o)});if(v!=null)s.value=v;s.onchange=()=>fn(s.value);if(l){const lb=mk('label',null,l+' ');lb.appendChild(s);h.appendChild(lb)}else h.appendChild(s);return s},
 range(h,l,min,max,step,v,fn,f){const lb=mk('label',null,l+' '),i=mk('input'),o=mk('output',null,f?f(v):v);i.type='range';i.min=min;i.max=max;i.step=step;i.value=v;i.oninput=()=>{o.textContent=f?f(+i.value):i.value;fn(+i.value)};lb.append(i,o);h.appendChild(lb);return i},
 chk(h,l,v,fn){const lb=mk('label'),i=mk('input');i.type='checkbox';i.checked=!!v;i.onchange=()=>fn(i.checked);lb.append(i,document.createTextNode(' '+l));h.appendChild(lb);return i},
 note(h,html){const d=mk('div','gx-note');d.innerHTML=html||'';h.appendChild(d);return d}}})();
const head=(c,T,W,a,b,right)=>{const x=right?W-12:12,al=right?'right':'left';txt(c,a,x,20,T.text,al,13,800);if(b)txt(c,b,x,37,T.mut,al,11,600)};

function sceneReg(id,def){SC[id]=Object.assign({id},def);return SC[id]}
function scene(host,id,opt){opt=opt||{};const D=SC[id];if(!D)return null;UI.ensure();const box=document.createElement('div');host.appendChild(box);const S=Object.assign(D.init?D.init(opt):{},{t:0});let upd=null,acc=0;
 const m=mount(box,{height:opt.height||D.height||320,aspect:opt.aspect||D.aspect,parts:D.parts,links:D.links,state:S,tick:(S,dt,t,api)=>{S.t+=dt;if(D.tick)D.tick(S,dt,t,api);acc+=dt;if(upd&&acc>.2){acc=0;upd(S)}},overlay:D.overlay});S.api=m;
 const ui=document.createElement('div');box.appendChild(ui);const api={id,m,S,ui,box,reset(){Object.keys(S).forEach(k=>delete S[k]);Object.assign(S,D.init?D.init(opt):{},{t:0,api:m});m.reset();if(upd)upd(S)},destroy(){m.destroy();if(box.parentNode)box.parentNode.removeChild(box)}};
 if(D.ui){upd=D.ui(ui,S,m,api)||null;if(upd)upd(S)}return api}
const ACID=[214,230,240],ACIDC=[236,230,200];
const SOLS={HCl:{n:'kwas solny HCl',pH:1,f:'HCl'},CH3COOH:{n:'ocet (CH₃COOH)',pH:2.9,f:'CH₃COOH'},H2CO3:{n:'woda gazowana (H₂CO₃)',pH:4.5,f:'H₂CO₃'},H2O:{n:'woda destylowana',pH:7,f:'H₂O'},NaHCO3:{n:'soda oczyszczona (NaHCO₃)',pH:8.3,f:'NaHCO₃'},NH3:{n:'woda amoniakalna',pH:11.3,f:'NH₃·H₂O'},NaOH:{n:'zasada sodowa NaOH',pH:13,f:'NaOH'}};
const INDS=[['ind-uniwersalny','wskaźnik uniwersalny'],['ind-lakmus','lakmus'],['ind-fenoloftaleina','fenoloftaleina'],['ind-oranz-metylowy','oranż metylowy'],['ind-kapusta','sok z czerwonej kapusty']];
const indBottle=id=>id==='ind-fenoloftaleina'?[236,240,244]:id==='ind-oranz-metylowy'?[245,140,30]:indCol(id,6.8);
const odczyn=p=>p<6.8?'kwasowy':p>7.2?'zasadowy':'obojętny';

const MRX={Mg:{k:.10,col:[217,221,226],sh:'strip',eq:'Mg + 2HCl → MgCl₂ + H₂↑',heat:1,obs:'Gwałtowne wydzielanie gazu, probówka wyraźnie się ogrzewa, magnez szybko znika.'},Zn:{k:.04,col:[154,167,179],sh:'granule',eq:'Zn + 2HCl → ZnCl₂ + H₂↑',obs:'Równomierne wydzielanie pęcherzyków gazu na powierzchni granulek cynku.'},Fe:{k:.014,col:[120,124,130],sh:'granule',eq:'Fe + 2HCl → FeCl₂ + H₂↑',obs:'Powolne wydzielanie gazu; roztwór z czasem bladozielony (jony Fe²⁺).',l1:[167,201,160]},Cu:{k:0,col:[184,115,51],sh:'strip',eq:'Cu + HCl → reakcja nie zachodzi',obs:'Brak objawów reakcji — miedź jest mniej aktywna niż wodór (szereg aktywności).'}};
/*@@GFX scenes/acidMetal@@*/

/*@@GFX scenes/indicator@@*/

/*@@GFX scenes/indicatorRack@@*/

const tpH=S=>{const nA=S.ca*S.Va/1000,nB=S.cb*S.V/1000,Vt=(S.Va+S.V)/1000,d=(nA-nB)/Vt,Hc=d/2+Math.sqrt(d*d/4+1e-14);return-Math.log10(Hc)};
const tLv=S=>Math.min(1,(S.Va+S.V)/62);
/*@@GFX scenes/titration@@*/

/*@@GFX scenes/dilution@@*/

const CSOL={dist:{n:'woda destylowana',f:'H₂O',cond:.02,mol:[{id:'H2O',n:16}],t:'nieelektrolit (prawie nie przewodzi)'},sugar:{n:'roztwór cukru',f:'C₆H₁₂O₆',cond:.02,mol:[{id:'C6H12O6',n:3},{id:'H2O',n:12}],t:'nieelektrolit — cząsteczki nie rozpadają się na jony'},HCl:{n:'kwas solny',f:'HCl(aq)',cond:1,el:{cat:{f:'H₂',n:1},an:{f:'Cl₂',n:.6,col:[214,232,140]},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻',rx:'elHcl'},mol:[{id:'H3O+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny — HCl całkowicie zdysocjowany: H₃O⁺ + Cl⁻'},H2SO4:{n:'kwas siarkowy(VI)',f:'H₂SO₄(aq)',cond:1,el:{cat:{f:'H₂',n:1},an:{f:'O₂',n:.5},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ (jony SO₄²⁻ nie utleniają się)',rx:'elH2o'},mol:[{id:'H3O+',n:6},{id:'SO42-',n:3},{id:'H2O',n:8}],t:'elektrolit mocny: 2H₃O⁺ + SO₄²⁻'},CH3COOH:{n:'kwas octowy',f:'CH₃COOH(aq)',cond:.3,el:{cat:{f:'H₂',n:.5},an:{f:'O₂',n:.25},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ — mało jonów, więc gazu niewiele',rx:'elH2o'},mol:[{id:'CH3COOH',n:5},{id:'H3O+',n:1},{id:'CH3COO-',n:1},{id:'H2O',n:9}],t:'elektrolit słaby — zdysocjowana tylko niewielka część cząsteczek'},NaOH:{n:'zasada sodowa',f:'NaOH(aq)',cond:.95,el:{cat:{f:'H₂',n:1},an:{f:'O₂',n:.5},eq:'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ (Na⁺ się nie redukuje) · anoda (+): 4 OH⁻ → O₂↑ + 2 H₂O + 4 e⁻',rx:'elH2o'},mol:[{id:'Na+',n:6},{id:'OH-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny: Na⁺ + OH⁻'},NaCl:{n:'roztwór soli kuchennej',f:'NaCl(aq)',cond:.9,el:{cat:{f:'H₂',n:1},an:{f:'Cl₂',n:.6,col:[214,232,140]},eq:'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻ (w roztworze stężonym)',rx:'elNacl'},mol:[{id:'Na+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny: Na⁺ + Cl⁻'}};
/*@@GFX scenes/conductivity@@*/

const GRX={H2:{n:'Zn + 2HCl → ZnCl₂ + H₂↑',sol:{col:[154,167,179],t:'metal',shape:'granule'},k:1,foam:0,txt:'Wodór słabo rozpuszcza się w wodzie, więc zbiera się go metodą wypierania wody.'},CO2:{n:'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',sol:{col:[240,240,232],t:'solid',shape:'chips'},k:.75,foam:.6,txt:'CO₂ częściowo rozpuszcza się w wodzie — zbiera się wolniej; lepiej zbierać go metodą wypierania powietrza.'}};
/*@@GFX scenes/gasCollection@@*/

/*@@GFX scenes/carbonate@@*/

/*@@GFX scenes/heating@@*/

const RX={};
 
const RXMAP={'rx-zn-cuso4':'znCuso4','rx-fe-cuso4':'feCuso4','rx-cu-agno3':'cuAgno3','rx-cu-naoh':'cuso4Naoh','rx-fe3-naoh':'fecl3Naoh','rx-ag-cl':'agno3Nacl','rx-pb-i':'pbno32Ki','rx-ba-so4':'bacl2H2so4','rx-ca-co2':'caoh2Co2'};
const RXDEF={
 mgHcl:{n:'Mg + HCl',solid:{col:'metal-mg',eq:4,end:.15,t:'metal'},out:['gaz'],gas:'H2',bubN:1.5,heat:1.2,T:34,why:'Mg jest przed H w szeregu aktywności – wypiera wodór; roztwór się ogrzewa.'},
 znHcl:{n:'Zn + HCl',solid:{col:'metal-zn',eq:4,end:.35,t:'metal',shape:'granule'},out:['gaz'],gas:'H2',bubN:1.1,why:'Zn jest przed H – pęcherzyki wodoru na powierzchni granulek.'},
 feHcl:{n:'Fe + HCl',solid:{col:'metal-fe',eq:4,end:.6,t:'metal',shape:'chips'},l1:'ion-fe2',out:['gaz'],gas:'H2',bubN:.6,bubSize:.8,why:'Fe jest przed H – reakcja wolniejsza; roztwór bladozielony (Fe²⁺).'},
 alHcl:{n:'Al + HCl',solid:{col:'metal-al',eq:4,end:.35,t:'metal'},out:['gaz'],gas:'H2',bubN:1.2,why:'Al jest przed H; z początku wolno (warstwa Al₂O₃).',eq:'2 Al + 6 HCl → 2 AlCl₃ + 3 H₂↑'},
 cuHcl:{n:'Cu + HCl',solid:{col:'metal-cu',eq:4,end:1,t:'metal'},out:['nic'],noRx:1,eq:'Cu + HCl → brak reakcji',why:'Cu jest za H w szeregu – nie wypiera wodoru.'},
 agHcl:{n:'Ag + HCl',solid:{col:'metal-ag',eq:4,end:1,t:'metal'},out:['nic'],noRx:1,eq:'Ag + HCl → brak reakcji',why:'Ag jest za H w szeregu.'},
 cuoH2so4:{n:'CuO + H₂SO₄',solid:{col:'solid-cuo',eq:4,end:0,t:'powder',shape:'powder'},l1:'ion-cu2',out:['barwa'],heat:.6,T:45,why:'Czarny CuO znika, roztwór niebieszczeje (Cu²⁺). Brak gazu. Ogrzewanie przyspiesza.'},
 cuoHcl:{n:'CuO + HCl',solid:{col:'solid-cuo',eq:4,end:0,t:'powder',shape:'powder'},l1:[94,196,201],out:['barwa'],why:'CuO roztwarza się; roztwór CuCl₂ zielononiebieski.'},
 caco3Hcl:{n:'CaCO₃ + HCl',solid:{col:'ppt-caco3',eq:4,end:.3,t:'chips',shape:'chips'},out:['gaz'],gas:'CO2',bubN:1.6,bubSize:1.4,foam:1,why:'Węglan + kwas → CO₂ (burzenie; woda wapienna mętnieje).'},
 hclNaOH:{n:'NaOH + HCl',out:['nic'],heat:.4,T:31,why:'Zobojętnianie: brak gazu i osadu; roztwór lekko się ogrzewa. Zmianę pH widać dopiero ze wskaźnikiem.'},
 'hclNaOH+php':{rxKey:'hclNaOH',n:'NaOH + HCl + fenoloftaleina',l0:['ind-fenoloftaleina',11],l1:['ind-fenoloftaleina',5],out:['barwa'],why:'Fenoloftaleina malinowa w zasadzie (pH > 10), bezbarwna po zobojętnieniu.'},
 agno3Hcl:{n:'AgNO₃ + HCl',ppt:'ppt-agcl',out:['osad'],why:'Biały, serowaty osad AgCl (ciemnieje na świetle).'},
 cuHno3:{n:'Cu + HNO₃ (stęż.)',solid:{col:'metal-cu',eq:4,end:.2,t:'metal'},l1:'ion-cu2',out:['gaz','barwa'],gas:'NO2',fumes:'gas-no2',bubN:1.2,heat:1,T:40,teacher:1,why:'HNO₃ utlenia – nie powstaje H₂, tylko brunatny NO₂ (cięższy od powietrza – opada). Tylko pokaz nauczyciela.'},
 h2so4Dil:{physical:1,n:'Rozcieńczanie H₂SO₄ (kwas do wody!)',out:['nic'],schl:1,heat:1.5,T:70,why:'Silnie egzotermiczne – smugi mieszania i ogrzanie. Zawsze kwas do wody.'},
 naH2o:{rxKey:'naH2o',n:'Na + H₂O (+ fenoloftaleina)', bubFrom:'bottom',l0:['ind-fenoloftaleina',7],l1:['ind-fenoloftaleina',13],out:['gaz','barwa'],gas:'H2',bubN:2,heat:1.5,T:45,splash:.3,teacher:1,why:'Sód topi się w kulkę i biega po powierzchni; wydziela się H₂, roztwór zasadowy (malinowy).'},
 h2so4Sugar:{rxKey:'sugarH2so4',n:'Cukier + stęż. H₂SO₄ (zwęglanie)',level:.03,solid:{col:[248,247,240],col2:[24,20,18],eq:4,end:1,t:'powder',shape:'powder'},out:['barwa'],heat:2.6,T:105,fumes:true,fumeColor:[150,150,150],fumeGas:'SO2',teacher:1,eq:'C₁₂H₂₂O₁₁ →(H₂SO₄ stęż.) 12 C + 11 H₂O',why:'H₂SO₄ odwadnia cukier: zostaje czarny węgiel, ciepło odparowuje wodę (para), część węgla utlenia się (SO₂, CO₂). Tylko pokaz nauczyciela.'},
 hno3Protein:{qualitative:1,n:'Białko + stęż. HNO₃ (reakcja ksantoproteinowa)',l0:[236,234,224],l1:[250,240,205],ppt:[232,196,40],habit:'kłaczkowaty',out:['osad','barwa'],teacher:1,eq:'białko (reszty aromatyczne) + HNO₃ → żółte nitrozwiązki',why:'HNO₃ ścina białko i nitruje pierścienie aromatyczne aminokwasów — żółty osad (wykrywanie białek). Dlatego HNO₃ barwi skórę na żółto.'},
 hno3Light:{rxKey:'hno3Decomp',n:'HNO₃ na świetle żółknie',l1:[240,214,120],out:['barwa'],fumes:true,fumeColor:[146,64,14],fumeGas:'NO2',eq:'4 HNO₃ →(hν) 4 NO₂ + O₂ + 2 H₂O',why:'Rozkład pod wpływem światła; rozpuszczony brunatny NO₂ barwi kwas na żółto — dlatego HNO₃ trzyma się w ciemnych butelkach.'},
 hclFume:{physical:1,n:'Stężony HCl „dymi”',out:['nic'],fumes:true,fumeColor:[232,238,244],fumeGas:'HCl',eq:'HCl(aq, stęż.) → HCl(g)↑; HCl(g) + H₂O(para) → mgiełka kropelek kwasu',why:'Z 36% roztworu ulatnia się chlorowodór; z wilgocią powietrza tworzy białą mgiełkę (nie „biały gaz”). Gaz jest cięższy od powietrza.'},
 caOH2Co2:{rxKey:'caoh2Co2',n:'Ca(OH)₂ + CO₂ (woda wapienna)',ppt:'ppt-caco3',out:['osad'],turb:.8,gas:'CO2',bubN:.8,why:'CO₂ wdmuchiwany do wody wapiennej – zmętnienie (CaCO₃).'}
};
const rxCol=x=>Array.isArray(x)&&typeof x[0]==='string'?(colors.at(x[0],x[1])||colors.water()):Array.isArray(x)?x:typeof x==='string'?(x[0]==='#'?colors.rgb(x):colors.at(x)||colors.water()):null;
function rxResolve(sp){const o=Object.assign({},sp);if(sp.l0!=null)o.l0=rxCol(sp.l0);if(sp.l1!=null)o.l1=rxCol(sp.l1);if(sp.solid)o.solid=Object.assign({},sp.solid,{col:rxCol(sp.solid.col),col2:sp.solid.col2?rxCol(sp.solid.col2):null});
 if(sp.ppt){o.pptCol=rxCol(sp.ppt);o.out=(sp.out||[]).concat(['osad']).filter((v,i,a)=>a.indexOf(v)===i)}
 if(sp.out&&sp.out.indexOf('gaz')>=0&&!sp.gas)o.gas='H2';o.out=(o.out||sp.out||[]).slice();if(o.out.indexOf('gaz')<0&&sp.gas&&!sp.noRx&&sp.turb==null)o.out.push('gaz');
 if(sp.turb){o.turb=sp.turb}if(sp.gas&&!o.fumeGas&&sp.fumes)o.fumeGas=sp.gas;return o}
function rxReg(k,sp){RX[k]=Object.assign({key:k},sp);return RX[k]}
Object.keys(RXDEF).forEach(k=>rxReg(k,RXDEF[k]));
 
try{(C.COLORS&&C.COLORS.list?C.COLORS.list('reaction'):[]).forEach(d=>{if(RX[d.id])return;const a=C.COLORS.get(d.after),isP=a&&a.kind==='precipitate';
 const dist=(a,b)=>a&&b?Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]):0,cb=C.COLORS.at(d.before),ca=C.COLORS.at(isP?'sol-water':d.after),out=[];if(isP)out.push('osad');if(dist(cb,ca)>40||d.solidBefore)out.push('barwa');if(!out.length)out.push('nic');
 rxReg(d.id,{n:d.name,l0:d.before,l1:isP?'sol-water':d.after,ppt:isP?d.after:null,solid:d.solidBefore?{col:d.solidBefore,col2:d.solidAfter||null,eq:4,end:1,t:'metal'}:null,out,why:d.obs,src:'CHE.COLORS',rxKey:RXMAP[d.id]||undefined})})}catch(_){}
function rxState(k,p,extra){const sp=RX[k];if(!sp)return null;const o=rxResolve(sp),eP=Math.max(0,Math.min(1,p||0)),e=eP*eP*(3-2*eP);
 const st=fromReaction(Object.assign({},o,{out:sp.noRx?[]:o.out}),sp.noRx?0:eP,extra);
 if(sp.T!=null)st.T=25+(sp.T-25)*Math.sin(Math.min(1,eP)*Math.PI*.9+.1)*(eP>0?1:0);if(sp.schl)st.schl=eP>0&&eP<1?Math.sin(eP*Math.PI):0;if(sp.splash&&eP>0&&eP<.8)st.splash=sp.splash;
 if(sp.turb)st.turb=sp.turb*e;if(o.fumeGas)st.fumeGas=o.fumeGas;if(sp.gas)st.gasId=sp.gas;return st}
function rxInfo(k){const sp=RX[k];if(!sp)return null;const E=C.REACTION,rk=sp.rxKey||k,d=E&&E.get&&E.get(rk);const PH=C.PHYS,gas=sp.gas&&PH?PH.gas(sp.gas):null;
 const SUB='₀₁₂₃₄₅₆₇₈₉',pretty=x=>String(x||'').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>SUB[c])).replace(/->/g,'→');
 return{key:k,name:sp.n,eq:pretty(d&&E.equation?E.equation(rk):sp.eq||'—'),type:d?((C.DATA&&C.DATA.REACTION_TYPE_NAMES&&C.DATA.REACTION_TYPE_NAMES[d.type])||d.type):sp.noRx?'brak reakcji':'—',obs:d&&d.observation||sp.why||'—',why:sp.why||'',safety:d&&d.safety?d.safety.join(' '):'',out:sp.out||[],teacher:!!sp.teacher,
  gas:gas?{formula:sp.gas,name:gas.name,moves:gas.moves,test:gas.test,color:gas.colorName}:null,src:d?'CHE.REACTION':sp.src||'GFX.rx'}}
function rxMount(host,k,o){o=o||{};let key=k,t0=null,p=0;const dur=o.dur||6;
 const api=mount(host,{vessel:o.vessel||'beaker',height:o.height||260,state:{},tick:(S,dt)=>{if(t0!=null){p=Math.min(1,p+dt/dur);if(p>=1&&o.onEnd&&!S.ended){S.ended=1;o.onEnd(key)}}},get:()=>rxState(key,p)});
 const ctl={api,play(){t0=1;p=0;api.state.ended=0;api.reset()},reset(){t0=null;p=0;api.reset()},set(nk){key=nk;this.reset()},get key(){return key},get progress(){return p}};if(o.auto)ctl.play();return ctl}
const rx={get:k=>RX[k]||null,list:f=>Object.keys(RX).filter(k=>!f||(typeof f==='function'?f(RX[k]):RX[k].out&&RX[k].out.indexOf(f)>=0)),register:rxReg,state:rxState,info:rxInfo,mount:rxMount,resolve:k=>RX[k]?rxResolve(RX[k]):null};

const IONX=(function(){
const TAU=Math.PI*2,COL={OH:'#2563eb',H:'#dc2626',cat:'#64748b',an:'#16a34a',w:'#38bdf8'};
function drawIon(c,x,y,r,label,col,a){c.globalAlpha=a==null?1:a;const g=c.createRadialGradient(x-r*.35,y-r*.35,r*.15,x,y,r);g.addColorStop(0,'#ffffff');g.addColorStop(.35,col);g.addColorStop(1,col);c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();
 c.strokeStyle='rgba(15,23,42,.35)';c.lineWidth=1;c.stroke();if(label){c.fillStyle='#fff';c.font='800 '+Math.max(8,Math.round(r*.78))+'px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(label,x,y+.5)}c.globalAlpha=1}
 
function drawWater(c,x,y,s,ang,a){c.globalAlpha=a==null?1:a;const hx=Math.cos(ang),hy=Math.sin(ang);[-.9,.9].forEach(d=>{const ax=Math.cos(ang+d),ay=Math.sin(ang+d);c.fillStyle='#f8fafc';c.strokeStyle='rgba(15,23,42,.35)';c.beginPath();c.arc(x+ax*s*.9,y+ay*s*.9,s*.45,0,TAU);c.fill();c.stroke()});
 c.fillStyle='#ef4444';c.beginPath();c.arc(x,y,s*.62,0,TAU);c.fill();c.strokeStyle='rgba(15,23,42,.35)';c.stroke();c.globalAlpha=1;return[hx,hy]}
function canvas(host,h){const cv=document.createElement('canvas');cv.style.cssText='width:100%;height:'+h+'px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';host.appendChild(cv);
 const fit=()=>{const dpr=Math.min(2,window.devicePixelRatio||1),r=cv.getBoundingClientRect(),w=Math.max(240,r.width||cv.clientWidth||600);cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);cv.getContext('2d').setTransform(dpr,0,0,dpr,0,0);return w};return{cv,fit}}
function rnd(s){return function(){s=(s*16807)%2147483647;return(s-1)/2147483646}}
function mount(host,o){o=Object.assign({mode:'dissolve',height:300},o||{});const H=o.height,{cv,fit}=canvas(host,H),c=cv.getContext('2d');let W=fit(),raf=0,last=0,run=false;const R=rnd(7);
 const S={t:0,ions:[],waters:[],made:0,p:0};
 function beaker(){const T=th();c.clearRect(0,0,W,H);c.fillStyle=o.bg||T.tint;c.fillRect(0,0,W,H);
  for(let i=0;i<26;i++){const x=(i*97%W),y=(i*53%H);drawWater(c,x,y,4,i,.18)}}
  
 function initDissolve(){S.ions=[];S.p=0;const n=o.nOH||1,cols=Math.min(10,Math.max(4,Math.floor(W/60))),rows=4,cell=24,x0=W/2-cols*cell/2,y0=H-20-rows*cell;
  let k=0;for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){const isCat=((q+r)%(n+1))===0;S.ions.push({cat:isCat,x:x0+q*cell+cell/2,y:y0+r*cell+cell/2,hx:x0+q*cell+cell/2,hy:y0+r*cell+cell/2,vx:0,vy:0,free:false,edge:r===0||q===0||q===cols-1,ord:k++,hyd:0})}
  const frac=o.sol==='R'?1:o.sol==='T'?.22:o.sol==='N'?.03:0;const cand=S.ions.slice().sort((a,b)=>(a.hy-b.hy)||(Math.abs(a.hx-W/2)-Math.abs(b.hx-W/2)));
  const nFree=Math.round(cand.length*frac);cand.forEach((p,i)=>{p.goes=i<nFree;p.when=i/Math.max(1,nFree)*.85})}
 function stepDissolve(dt){S.p=Math.min(1,S.p+dt/(o.dur||8));S.ions.forEach(p=>{if(p.goes&&!p.free&&S.p>=p.when){p.free=true;p.vx=(R()-.5)*60;p.vy=-40-R()*40}
  if(p.free){p.vx+=(R()-.5)*90*dt;p.vy+=(R()-.5)*90*dt;p.vx*=.985;p.vy*=.985;p.x+=p.vx*dt;p.y+=p.vy*dt;const r=12;if(p.x<r){p.x=r;p.vx=Math.abs(p.vx)}if(p.x>W-r){p.x=W-r;p.vx=-Math.abs(p.vx)}if(p.y<r){p.y=r;p.vy=Math.abs(p.vy)}if(p.y>H-110){p.y=H-110;p.vy=-Math.abs(p.vy)}p.hyd=Math.min(1,p.hyd+dt*.6)}})}
 function drawDissolve(){beaker();const lab=o.cation||'M⁺',cc=o.catCol||COL.cat;
  if(o.solidCol){c.fillStyle=o.solidCol;c.globalAlpha=.25;c.fillRect(W/2-150,H-16,300,10);c.globalAlpha=1}
  S.ions.forEach(p=>{if(p.free&&p.hyd>0&&o.hydration!==false){const k=p.cat?6:5;for(let i=0;i<k;i++){const a=i/k*TAU+S.t*.4,d=(p.cat?20:18),wx=p.x+Math.cos(a)*d,wy=p.y+Math.sin(a)*d;
      drawWater(c,wx,wy,4.2,p.cat?a:a+Math.PI,p.hyd*.9)}}
   drawIon(c,p.x,p.y,p.cat?11:10,p.cat?lab:'OH⁻',p.cat?cc:COL.OH)});
  const free=S.ions.filter(p=>p.free&&!p.cat).length,T=th();c.fillStyle=T.text;c.font='700 12px system-ui';c.textAlign='left';c.fillText('wolne jony OH⁻ w roztworze: '+free,10,18);
  c.fillStyle=T.mut;c.font='600 11px system-ui';c.fillText(o.sol==='R'?'kryształ rozpuszcza się całkowicie':o.sol==='T'?'rozpuszcza się tylko część — reszta zostaje jako osad (roztwór nasycony)':o.sol==='N'?'praktycznie nic nie przechodzi do roztworu':'',10,34);S.freeOH=free}
  
 function initNeutral(){S.ions=[];S.waters=[];S.made=0;const nO=o.nOH==null?12:o.nOH;for(let i=0;i<nO;i++){S.ions.push(mk('OH'));S.ions.push(mk('cat'))}}
 function mk(t,x,y){return{t,x:x==null?20+R()*(W-40):x,y:y==null?60+R()*(H-90):y,vx:(R()-.5)*50,vy:(R()-.5)*50,r:t==='H'?8:10}}
 function add(n){for(let i=0;i<n;i++){S.ions.push(mk('H',W/2+(R()-.5)*30,16+R()*10));S.ions.push(mk('an',W/2+(R()-.5)*30,16+R()*10))}}
 function stepNeutral(dt){S.ions.forEach(p=>{p.vx+=(R()-.5)*120*dt;p.vy+=(R()-.5)*120*dt;p.vx*=.99;p.vy*=.99;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<p.r){p.x=p.r;p.vx=Math.abs(p.vx)}if(p.x>W-p.r){p.x=W-p.r;p.vx=-Math.abs(p.vx)}if(p.y<p.r){p.y=p.r;p.vy=Math.abs(p.vy)}if(p.y>H-p.r){p.y=H-p.r;p.vy=-Math.abs(p.vy)}});
  const hs=S.ions.filter(p=>p.t==='H'),os=S.ions.filter(p=>p.t==='OH');
   
  hs.forEach(h=>{let best=null,bd=1e9;os.forEach(q=>{if(q.dead)return;const d=Math.hypot(q.x-h.x,q.y-h.y);if(d<bd){bd=d;best=q}});if(!best)return;if(bd<90){h.vx+=(best.x-h.x)/bd*160*dt;h.vy+=(best.y-h.y)/bd*160*dt}
   if(bd<h.r+best.r){h.dead=best.dead=true;S.waters.push({x:(h.x+best.x)/2,y:(h.y+best.y)/2,a:R()*TAU,age:0});S.made++;if(o.onWater)o.onWater(S.made)}});
  S.ions=S.ions.filter(p=>!p.dead);S.waters.forEach(w=>{w.age+=dt;w.y+=Math.sin(S.t+w.a)*.2})}
 function drawNeutral(){beaker();S.waters.forEach(w=>{drawWater(c,w.x,w.y,6,w.a+S.t*.3,Math.max(.35,1-w.age*.15));if(w.age<1.2){c.strokeStyle='rgba(250,204,21,'+(1-w.age/1.2)+')';c.lineWidth=2;c.beginPath();c.arc(w.x,w.y,10+w.age*14,0,TAU);c.stroke()}});
  S.ions.forEach(p=>drawIon(c,p.x,p.y,p.r,p.t==='OH'?'OH⁻':p.t==='H'?'H⁺':p.t==='cat'?(o.cation||'Na⁺'):(o.anion||'Cl⁻'),p.t==='OH'?COL.OH:p.t==='H'?COL.H:p.t==='cat'?(o.catCol||COL.cat):COL.an,p.t==='cat'||p.t==='an'?.55:1));
  const T=th();c.fillStyle=T.text;c.font='700 12px system-ui';c.textAlign='left';c.fillText('OH⁻: '+S.ions.filter(p=>p.t==='OH').length+'   H⁺: '+S.ions.filter(p=>p.t==='H').length+'   powstało H₂O: '+S.made,10,18);
  c.fillStyle=T.mut;c.font='600 11px system-ui';c.fillText('jony widzowe (blade) nie zmieniają się',10,34)}
 const MODE={dissolve:[initDissolve,stepDissolve,drawDissolve],neutral:[initNeutral,stepNeutral,drawNeutral]};
 function loop(ts){if(!run)return;const dt=Math.min(.05,last?(ts-last)/1000:.016);last=ts;S.t+=dt;MODE[o.mode][1](dt);MODE[o.mode][2]();raf=requestAnimationFrame(loop)}
 const api={state:S,play(){if(run)return;run=true;last=0;raf=requestAnimationFrame(loop)},pause(){run=false;cancelAnimationFrame(raf)},
  reset(){W=fit();MODE[o.mode][0]();MODE[o.mode][2]()},set(n){Object.assign(o,n||{});this.reset()},add(n){if(o.mode==='neutral'){add(n);if(!run)MODE.neutral[2]()}},
  bg(col){o.bg=col;if(!run)MODE[o.mode][2]()},destroy(){run=false;cancelAnimationFrame(raf);if(cv.parentNode)cv.parentNode.removeChild(cv)}};
 api.reset();if(o.auto!==false)api.play();
  
 const chk=setInterval(()=>{if(!document.body.contains(cv)){api.pause();clearInterval(chk)}},1500);return api}
return{mount,drawIon,drawWater,COL}})();
 
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const php=['ind-fenoloftaleina',7],pink=['ind-fenoloftaleina',12.5];
 /*@@GFX rx/liH2o@@*/
 /*@@GFX rx/kH2o@@*/
 /*@@GFX rx/caH2o@@*/
 /*@@GFX rx/mgH2oHot@@*/
 const ox=[245,245,240];
 /*@@GFX rx/na2oH2o@@*/
 /*@@GFX rx/k2oH2o@@*/
 /*@@GFX rx/li2oH2o@@*/
 /*@@GFX rx/caoH2o@@*/
 /*@@GFX rx/mgoH2o@@*/
 /*@@GFX rx/baoH2o@@*/
 /*@@GFX rx/mgcl2Naoh@@*/
 /*@@GFX rx/alcl3Naoh@@*/
 /*@@GFX rx/znso4Naoh@@*/
 /*@@GFX rx/feso4Naoh@@*/
 /*@@GFX rx/cucl2Naoh@@*/
 /*@@GFX rx/niso4Naoh@@*/
 /*@@GFX rx/mnso4Naoh@@*/
 /*@@GFX rx/pbno32Naoh@@*/
 /*@@GFX rx/cacl2Naoh@@*/
 /*@@GFX rx/agno3Naoh@@*/
 /*@@GFX rx/caoh2Hcl@@*/
 /*@@GFX rx/kohHcl@@*/
 /*@@GFX rx/kohHno3@@*/
 /*@@GFX rx/naohHno3@@*/
 /*@@GFX rx/baoh2H2so4@@*/
 /*@@GFX rx/cuoh2H2so4@@*/
 /*@@GFX rx/cuoh2Hcl@@*/
 /*@@GFX rx/feoh3Hcl@@*/
 /*@@GFX rx/znoh2Hcl@@*/
 /*@@GFX rx/aloh3Naoh@@*/
 /*@@GFX rx/znoh2Naoh@@*/
 /*@@GFX rx/baoh2Co2@@*/
 /*@@GFX rx/cuoh2Heat@@*/
 /*@@GFX rx/feoh2O2@@*/
 /*@@GFX rx/caoh2Na2co3@@*/
 /*@@GFX rx/nh4clNaoh@@*/
})();
 
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const u=v=>['ind-uniwersalny',v],wh=[245,245,240],pw=c=>({col:c,eq:4,end:0,t:'powder',shape:'powder'});
 /*@@GFX rx/so3H2o@@*/
 /*@@GFX rx/so2H2o@@*/
 /*@@GFX rx/co2H2o@@*/
 /*@@GFX rx/p4o10H2o@@*/
 /*@@GFX rx/caoHcl@@*/
 /*@@GFX rx/mgoHcl@@*/
 /*@@GFX rx/znoHcl@@*/
 /*@@GFX rx/al2o3Hcl@@*/
 /*@@GFX rx/fe2o3Hcl@@*/
 /*@@GFX rx/fe2o3H2so4@@*/
 /*@@GFX rx/so2Naoh@@*/
 /*@@GFX rx/so3Naoh@@*/
 /*@@GFX rx/naohCo2@@*/
 /*@@GFX rx/al2o3NaohAq@@*/
 /*@@GFX rx/znoNaohAq@@*/
 /*@@GFX rx/sio2Naoh@@*/
})();
; 
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const u=v=>['ind-uniwersalny',v],wh=[245,245,240],pw=c=>({col:c,eq:4,end:0,t:'powder',shape:'powder'});
 /*@@GFX rx/bacl2Na2so4@@*/
 /*@@GFX rx/cacl2Na2co3@@*/
 /*@@GFX rx/na2co3Hcl@@*/
 /*@@GFX rx/cuso4Hydrate@@*/
 /*@@GFX rx/hyd-nacl@@*/
 /*@@GFX rx/hyd-na2co3@@*/
 /*@@GFX rx/hyd-nh4cl@@*/
 /*@@GFX rx/hyd-cuso4@@*/
})();
return{version:'1.7',electro:ELX,ions:IONX,phys:C.PHYS,rx,colors,fromReaction,canvasDraw,trigger,optionsPanel,presets:PRESETS,flameColors:FLAME_COLORS,flameNames:FLAME_NAMES,metals:METALS,
 effects:{register:effect,get:id=>E[id]||null,list:()=>Object.keys(E),options:id=>E[id]?{label:E[id].label||id,defaults:E[id].defaults||{},schema:E[id].schema||{},free:!!E[id].free,oneShot:!!E[id].oneShot,evented:!!E[id].evented}:null},
 vessels:{register:vessel,get:id=>V[id]||null,list:()=>Object.keys(V)},
 scenes:{register:sceneReg,get:id=>SC[id]||null,list:()=>Object.keys(SC),mount:scene},scene,
 draw,mount,mountEffect,fromLab,theme:th,tempColor:tc,rgba,tube,drips,ui:UI,
 molecules:{atoms:molAtoms,color:e=>ELC[e]||'#94a3b8',radius:e=>ELR[e]||.8,list:()=>Object.keys(MOLS),name:MNAME,charge:id=>CHG[id]||''},indicators:INDS,solutions:SOLS,indicatorColor:indCol}})();
C.LAB.GFX=GFX;
 
(function(){
const GF=C.LAB.GFX;
const META={electroscope:['Elektroskop','elektrostatyka','st {ball, leaves, theta?, ground, rod:{q,d}} · model: CHE.PHYS.electro.electroscope'],chargedRod:['Pręt naelektryzowany','elektrostatyka','st {q, col} · pary ± i nadmiar ładunku'],pendulum:['Wahadełko elektrostatyczne','elektrostatyka','st {phi, q}; polaryzacja: GFX.electro.pendulum(…,{polar})'],fieldMap:['Linie pola elektrycznego','elektrostatyka','st.charges [{x,y,q}] (0–1) · CHE.PHYS.electro.fieldAt'],chargeBar:['Rozpływ ładunku w pręcie','elektrostatyka','st.cells [kula, …, elektroskop] · przewodnik / izolator'],beaker:['Zlewka','naczynie','Uniwersalna; dzióbek, podziałka, wszystkie efekty cieczy'],flask:['Kolba stożkowa','naczynie','Kolba Erlenmeyera; miareczkowanie, reakcje z gazem'],testTube:['Probówka','naczynie','Pojedynczy test'],cylinder:['Cylinder miarowy','naczynie','Pomiar objętości; podziałka i stopka'],roundFlask:['Kolba okrągłodenna','naczynie','Ogrzewanie, destylacja'],volFlask:['Kolba miarowa','naczynie','Kreska miarowa; roztwory o znanym stężeniu'],funnel:['Lejek','naczynie','Sączenie, przelewanie'],petri:['Szalka Petriego','naczynie','Płytka: krystalizacja, reakcje na szkle'],evapDish:['Parownica','naczynie','Porcelana; odparowanie, krystalizacja'],crucible:['Tygiel','naczynie','Porcelana; prażenie ciał stałych; st.lid — pokrywka'],watchGlass:['Szkiełko zegarkowe','naczynie','Mała ilość substancji, odparowanie kropli'],dropFunnel:['Wkraplacz (rozdzielacz)','naczynie','Kranik st.tap; krople do naczynia poniżej (landY, onDrop)'],molTank:['Zbiornik cząsteczek','naczynie','Cząsteczki i jony: gaz / ciecz / ciało stałe; ładunki jonów'],
 burette:['Biureta','przyrząd','st.titrant {V,Vmax,drip,color}; krople na żądanie st.dropReq'],pipette:['Pipeta','przyrząd','st.pip {lv,drip,color}'],dropper:['Kroplomierz','przyrząd','st.dropper {lv,color,drip}; st.dropReq → jedna kropla; gruszka się ściska'],pHmeter:['pH-metr cyfrowy','przyrząd','st.pH, st.T'],paper:['Papierki wskaźnikowe','przyrząd','Kolory z CHE.COLORS; st.pH, st.dip, st.fresh'],thermometer:['Termometr','przyrząd','st.T'],balance:['Waga','przyrząd','st.mass'],conductivity:['Tester przewodnictwa','przyrząd','Elektrody, bateria, żarówka; st.cond 0–1'],pHscale:['Skala pH','przyrząd','Barwy wskaźnika z CHE.COLORS; st.pH, st.ind, st.marks'],
 burner:['Palnik Bunsena','aparatura','Płomień: st.flame {on,power,air,phi}'],spiritLamp:['Lampa spirytusowa','aparatura','st.lamp {on,lv}; zgaszona → kołpak'],tripod:['Trójnóg z siatką','aparatura','Siatka żarzy się: st.heat'],hotplate:['Mieszadło magnetyczne z grzaniem','aparatura','st.heat 0–3, st.stir 0–1 (mieszadełko + wir w naczyniu)'],stand:['Statyw z łapą','aparatura','st.clamps [{x,y,w,ring}] (ułamki płótna); layer:"front" = szczęki nad naczyniem'],tubeRack:['Statyw z probówkami','aparatura','st.tubes [{label,liquid,level,…}] — każda probówka to pełne naczynie'],gasCollect:['Zbieranie gazu nad wodą','aparatura','st.gasV 0–1, st.gas, st.gasColor; wlot z lewej (40% wys.)'],cooler:['Chłodnica Liebiga','aparatura','st.coolant {Tin,Tout,flow,q}'],stage:['Podstawa / scena','aparatura','Kotwica dla efektów swobodnych'],anchor:['Kotwica','ukryty','']};
const NEW=['flame','boil','glow','gas','bubbles','precipitate','molTank','crucible','watchGlass','dropFunnel','dropper','conductivity','pHscale','spiritLamp','tripod','hotplate','stand','tubeRack','gasCollect','turbidity','dropMix','schlieren','stirBar','scale','label','stopper','tap','splint','pop'];
const CSS='.cl-top{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:0 0 10px}.cl-top input{flex:1 1 180px;min-height:34px;padding:5px 11px;border:1px solid var(--border,#e2e8f0);border-radius:999px;background:var(--panel,#fff);color:inherit;font:inherit}.cl-stat{font-size:12px;opacity:.7}.cl-nav{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px}.cl-nav button,.cl-btn{border:1px solid var(--border,#e2e8f0);background:var(--panel,#fff);color:inherit;padding:6px 11px;border-radius:999px;font:inherit;font-size:13px;cursor:pointer}.cl-nav button.on{background:#2563eb;color:#fff;border-color:#2563eb}.cl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:10px}.cl-card{border:1px solid var(--border,#e2e8f0);border-radius:12px;padding:10px;background:var(--panel,#fff);min-width:0}.cl-card.wide{grid-column:1/-1}.cl-card h3{margin:0;font-size:14px}.cl-card code{font-size:11px;opacity:.65}.cl-tag{white-space:nowrap;font-size:10px;padding:1px 7px;border-radius:99px;background:rgba(100,116,139,.15);margin-right:4px}.cl-tag.new{background:#16a34a;color:#fff}.cl-d{margin:4px 0 6px;font-size:12px;opacity:.75}.cl-ctl{display:grid;gap:3px;margin-top:6px;font-size:12px}.cl-ctl label{display:grid;grid-template-columns:72px 1fr auto;gap:6px;align-items:center}.cl-sel{margin-top:6px;margin-right:6px}';
const H={cooler:150,balance:170,paper:270,molTank:230,petri:140,evapDish:160,funnel:220,pipette:230,dropper:230,crucible:170,watchGlass:130,dropFunnel:280,stand:260,tripod:180,spiritLamp:240,hotplate:150,tubeRack:230,gasCollect:260,conductivity:280,pHscale:150,burner:260,burette:280};
const SETS={'H₂O':[{id:'H2O',n:14}],'HCl(aq): H₃O⁺ + Cl⁻':[{id:'H3O+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],'CH₃COOH(aq) — słaby':[{id:'CH3COOH',n:5},{id:'H3O+',n:1},{id:'CH3COO-',n:1},{id:'H2O',n:9}],'H₂SO₄(aq)':[{id:'H3O+',n:6},{id:'SO42-',n:3},{id:'H2O',n:8}],'NaOH(aq): Na⁺ + OH⁻':[{id:'Na+',n:6},{id:'OH-',n:6},{id:'H2O',n:8}],'NaCl(aq)':[{id:'Na+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],'CO₂ + H₂':[{id:'CO2',n:8},{id:'H2',n:8}],'NH₃':[{id:'NH3',n:12}],'CH₄ + O₂':[{id:'CH4',n:6},{id:'O2',n:10}],'HCl + H₂O (gaz)':[{id:'HCl',n:6},{id:'H2O',n:12}],'cukier (aq)':[{id:'C6H12O6',n:3},{id:'H2O',n:12}]};
const ce=(t,cls,txt)=>{const e=document.createElement(t);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};
function demo(id){const s={liquid:[205,228,238],level:.6,T:25,heat:0,gas:0,pop:0,pH:4.2,mass:12.34,dip:0,fresh:0,titrant:{V:18,Vmax:50,drip:.6,color:[205,228,238]},pip:{lv:.6,drip:0,color:[205,228,238]},flame:{air:100},coolant:{Tin:15,Tout:28,flow:.0005,q:50},phase:'gas',mol:SETS['H₂O'],dropper:{lv:.6,color:[219,39,119],drip:.25},dropReq:0,lamp:{on:1,lv:.6},stir:null,cond:.8,gasV:.35,ind:'ind-uniwersalny',marks:[{pH:1,label:'HCl'},{pH:2.9,label:'ocet'},{pH:7,label:'woda'},{pH:13,label:'NaOH'}]};const m=META[id];
 if(m&&m[1]==='naczynie'&&id!=='molTank'){s.gas=.5;s.T=60}if(id==='burner')s.fx={flame:true};if(id==='crucible'){s.level=0;s.gas=0;s.T=25;s.solids=[{col:[28,28,28],eq:2.5,shape:'powder'}]}if(id==='dropFunnel'){s.level=.75;s.tap=.5;s.gas=0;s.T=25}if(id==='watchGlass'){s.liquid=[59,130,196];s.gas=0;s.T=25}if(id==='hotplate'){s.heat=1.5;s.stir=.6}if(id==='tripod')s.heat=2;if(id==='gasCollect')s.gas=.6;if(id==='conductivity'){s.label='HCl(aq)'}if(id==='stand')s.layer='both';return s}
function range(c,l,min,max,step,v,fn){const w=ce('div','cl-ctl'),lb=ce('label'),i=ce('input'),o=ce('output',null,v);i.type='range';i.min=min;i.max=max;i.step=step;i.value=v;i.oninput=()=>{o.textContent=i.value;fn(+i.value)};lb.append(ce('span',null,l),i,o);w.appendChild(lb);c.appendChild(w)}
function btn(c,t,fn){const b=ce('button','cl-btn',t);b.type='button';b.style.marginTop='6px';b.style.marginRight='6px';b.onclick=fn;c.appendChild(b);return b}
function sel(c,opts,fn,v){const s=ce('select','cl-sel');opts.forEach(([k,t])=>{const o=ce('option',null,t);o.value=k;s.appendChild(o)});if(v!=null)s.value=v;s.onchange=()=>fn(s.value);c.appendChild(s)}
function ctl(c,id,st){const kind=(META[id]||[])[1];
 if(kind==='naczynie'&&id!=='molTank'){range(c,'poziom',0,1,.01,st.level,v=>st.level=v);range(c,'gaz',0,1,.05,st.gas,v=>st.gas=v);range(c,'T °C',0,110,1,st.T,v=>st.T=v);range(c,'mieszanie',0,1,.05,0,v=>st.stir=v||null)}
 if(id==='pHmeter'||id==='paper'||id==='pHscale')range(c,'pH',0,14,.1,st.pH,v=>st.pH=v);
 if(id==='pHscale')sel(c,GF.indicators,v=>st.ind=v);
 if(id==='paper'){btn(c,'Zanurz / wyjmij',()=>{st.dip=st.dip?0:1});btn(c,'Nowe papierki',()=>{st.fresh++;st.dip=0})}
 if(id==='thermometer')range(c,'T °C',-20,120,1,st.T,v=>st.T=v);
 if(id==='burette')range(c,'V cm³',0,50,.5,st.titrant.V,v=>st.titrant.V=v);
 if(id==='pipette')range(c,'poziom',0,1,.01,st.pip.lv,v=>st.pip.lv=v);
 if(id==='dropper'){btn(c,'Kropla',()=>st.dropReq++);range(c,'kroplenie',0,1.5,.05,st.dropper.drip,v=>st.dropper.drip=v)}
 if(id==='dropFunnel')range(c,'kranik',0,1,.05,st.tap,v=>st.tap=v);
 if(id==='crucible')btn(c,'Pokrywka',()=>st.lid=!st.lid);
 if(id==='balance')range(c,'masa g',0,200,.01,st.mass,v=>st.mass=v);
 if(id==='hotplate'||id==='tripod')range(c,'grzanie',0,3,.1,st.heat,v=>st.heat=v);
 if(id==='hotplate')range(c,'obroty',0,1,.05,st.stir,v=>st.stir=v);
 if(id==='spiritLamp')btn(c,'Zapal / zgaś',()=>st.lamp.on=st.lamp.on?0:1);
 if(id==='burner'){range(c,'moc',0,1,.05,1,v=>{st.flame.on=v>0?1:0;st.flame.power=v});range(c,'powietrze',0,100,5,100,v=>st.flame.air=v)}
 if(id==='gasCollect'){range(c,'V gazu',0,1,.01,st.gasV,v=>st.gasV=v);range(c,'przepływ',0,1,.05,st.gas,v=>st.gas=v)}
 if(id==='conductivity')range(c,'jony',0,1,.01,st.cond,v=>st.cond=v);
 if(id==='molTank')molCtl(c,st)}
function molCtl(c,st){sel(c,[['gas','gaz'],['liquid','ciecz'],['solid','ciało stałe']],v=>st.phase=v,st.phase);sel(c,Object.keys(SETS).map(k=>[k,k]),v=>st.mol=SETS[v]);range(c,'T °C',-50,600,5,25,v=>st.T=v)}
 
const fx1=(x,n)=>(+x).toFixed(n==null?1:n).replace('.',',');
const readout=c=>{const d=ce('div','cl-ro');c.appendChild(d);return d};
const PLOT_CSS='.cl-ro{font-size:12px;margin-top:6px;line-height:1.45;padding:6px 8px;border-radius:8px;background:rgba(100,116,139,.09)}.cl-ro b{font-weight:700}.cl-tbl{width:100%;border-collapse:collapse;font-size:11.5px}.cl-tbl th,.cl-tbl td{padding:3px 5px;border-bottom:1px solid var(--border,#e2e8f0);text-align:left;vertical-align:top}.cl-tblw{overflow-x:auto;max-height:340px}.cl-plot{width:100%;height:170px;display:block;border-radius:10px;background:var(--surface-soft,#f1f5f9)}';
 
function plot(c,h,draw){const cv=ce('canvas','cl-plot');cv.style.height=(h||170)+'px';c.appendChild(cv);const redraw=()=>{const d=Math.min(2,window.devicePixelRatio||1),W=cv.clientWidth||300,H=cv.clientHeight||170;cv.width=W*d;cv.height=H*d;const x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,W,H);draw(x,W,H,GF.theme())};if(window.ResizeObserver)new ResizeObserver(redraw).observe(cv);setTimeout(redraw,0);return redraw}
function axes(x,W,H,T,o){const L=38,B=H-22,R=W-8,Tp=10;x.strokeStyle=T.mut;x.fillStyle=T.mut;x.lineWidth=1;x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();x.font='600 10px system-ui,sans-serif';x.textAlign='center';
 for(let i=0;i<=4;i++){const v=o.x0+(o.x1-o.x0)*i/4,px=L+(R-L)*i/4;x.fillText(o.fx?o.fx(v):Math.round(v),px,B+13)}x.textAlign='right';for(let i=0;i<=3;i++){const v=o.y0+(o.y1-o.y0)*i/3,py=B-(B-Tp)*i/3;x.fillText(o.fy?o.fy(v):Math.round(v),L-4,py+3)}
 x.textAlign='left';x.fillText(o.xl||'',L+4,Tp+9);return{X:v=>L+(R-L)*(v-o.x0)/(o.x1-o.x0),Y:v=>B-(B-Tp)*(v-o.y0)/(o.y1-o.y0)}}
function tabF(g,card,push){const PH=C.PHYS;if(!PH){g.appendChild(ce('p',null,'Brak CHE.PHYS.'));return}
  
 {const c=card(g,'Płomień: paliwo, powietrze, sól','CHE.PHYS.flame({fuel,phi,power,salt})',['fizyka','płomień','spalanie'],'Barwa, sadza, temperatura i produkty liczone z φ (=1/λ). Te same dane biorą palnik, lampa, lekcja spalania i Atlas (próba płomieniowa).','flame',true),
   st={flame:{on:1,power:.8,air:100,fuel:'CH4',salt:''}},ro=readout(c);let n=0;
  push(GF.mount(c,{vessel:'burner',height:260,aspect:1.4,get:()=>{if(++n%20===1){const f=PH.flame({fuel:st.flame.fuel,air:st.flame.air/100,power:st.flame.power,salt:st.flame.salt||null});ro.innerHTML='<b>'+f.fuelName+'</b> · φ = '+fx1(f.phi,2)+' ('+f.regime+')<br>T ≈ <b>'+Math.round(f.Tc)+' °C</b> · sadza '+Math.round(f.soot*100)+'% · '+(f.luminous?'płomień świecący':'płomień nieświecący')+'<br>produkty: '+f.products.join(', ')+(f.salt?'<br>próba płomieniowa: <b>'+f.saltName+'</b>':'')}return st}}));
  sel(c,Object.keys(PH.fuels).map(k=>[k,PH.fuels[k].name]),v=>st.flame.fuel=v,'CH4');sel(c,[['','bez soli']].concat(Object.keys(PH.flameColors()).map(k=>[k,PH.flameName(k)])),v=>st.flame.salt=v,'');
  range(c,'powietrze %',0,160,5,100,v=>st.flame.air=v);range(c,'moc',0,1,.05,.8,v=>{st.flame.power=v;st.flame.on=v>0?1:0})}
  
 {const c=card(g,'Parowanie i wrzenie','CHE.PHYS.boil(T,{sub,p})',['fizyka','wrzenie','para'],'Prężność pary (równanie Antoine’a) → para nad cieczą, skraplanie na ściankach, pęcherzyki przy dnie i wrzenie. Temperatura wrzenia zależy od ciśnienia i cieczy.','boil',true),
   st={liquid:[205,228,238],level:.62,T:85,solvent:'H2O',p:101.3,gas:0,heat:2},ro=readout(c);let n=0;
  push(GF.mount(c,{vessel:'beaker',height:240,aspect:1.3,parts:[{id:'beaker',x:.2,y:.2,w:.6,h:.62},{id:'hotplate',x:.12,y:.8,w:.76,h:.2,get:()=>({heat:st.T>40?2.5:0,stir:null})}],get:()=>{if(++n%20===1){const b=PH.boil(st.T,{sub:st.solvent,p:st.p});ro.innerHTML='T<sub>wrz</sub> = <b>'+fx1(b.Tb)+' °C</b> przy '+fx1(st.p)+' kPa · p<sub>pary</sub> = '+fx1(b.pv,1)+' kPa ('+Math.round(b.x*100)+'% p)<br><b>'+b.regime+'</b>'}return st}}));
  sel(c,Object.keys(PH.solvents).map(k=>[k,PH.solvents[k].name]),v=>st.solvent=v,'H2O');range(c,'T °C',20,110,1,85,v=>st.T=v);range(c,'ciśnienie kPa',40,110,1,101.3,v=>st.p=v)}
  
 {const c=card(g,'Żarzenie (ciało doskonale czarne)','CHE.PHYS.glow(T) · blackbody(K)',['fizyka','żarzenie','temperatura'],'Barwa rozgrzanego metalu, siatki trójnogu, sadzy w płomieniu. Poniżej ~525 °C (punkt Drapera) żarzenia nie widać.','glow',false),st={T:900},ro=readout(c);
  const rd=plot(c,120,(x,W,H,T)=>{for(let i=0;i<W;i++){const t=400+i/W*2600,gl=PH.glow(t);x.fillStyle='rgba('+gl.rgb.join(',')+','+gl.a+')';x.fillRect(i,0,1,H*.45)}const gl=PH.glow(st.T),cx=W/2;x.fillStyle=T.metal;x.fillRect(cx-70,H*.62,140,14);x.fillStyle='rgba('+gl.rgb.join(',')+','+gl.a+')';x.shadowColor=x.fillStyle;x.shadowBlur=18*gl.a;x.fillRect(cx-70,H*.62,140,14);x.shadowBlur=0;
   const px=(st.T-400)/2600*W;x.strokeStyle=T.text;x.lineWidth=2;x.beginPath();x.moveTo(px,0);x.lineTo(px,H*.45);x.stroke();ro.innerHTML='T = <b>'+st.T+' °C</b> · barwa: <b>'+gl.name+'</b>'});
  range(c,'T °C',300,2500,10,900,v=>{st.T=v;rd()})}
  
 {const c=card(g,'Gazy: gęstość względem powietrza, testy','CHE.PHYS.gas(wzór,T,p)',['fizyka','gazy','Atlas'],'ρ = pM/RT. Gaz lżejszy od powietrza unosi się, cięższy opada (np. NO₂ wylewa się z naczynia). Dane wspólne dla Atlasu i lekcji.','gas',true),
   st={liquid:[205,228,238],level:.35,T:25,fumes:1,fumeGas:'NO2',fumeColor:[146,64,14]},ro=readout(c);
  push(GF.mount(c,{vessel:'beaker',height:240,aspect:1.6,parts:[{id:'beaker',x:.3,y:.36,w:.4,h:.6}],get:()=>st}));
  const show=f=>{const q=PH.gas(f);st.fumeGas=f;st.fumeColor=q.color||[150,160,175];ro.innerHTML='<b>'+f+' — '+q.name+'</b> · M = '+fx1(q.M,2)+' g/mol · ρ = '+fx1(q.rho,2)+' g/dm³ · <b>'+fx1(q.rel,2)+'×</b> powietrze → '+q.moves+'<br>zbieranie: '+q.collect+'<br>test: '+q.test+' · zapach: '+q.smell+' · w wodzie: '+q.sol+(q.aq&&q.aq!=='—'?', odczyn '+q.aq:'')};
  sel(c,Object.keys(PH.gases).map(k=>[k,k+' — '+PH.gases[k].name]),show,'NO2');show('NO2');
  const w=ce('div','cl-tblw'),t=ce('table','cl-tbl');t.innerHTML='<tr><th>wzór</th><th>nazwa</th><th>M</th><th>ρ/ρ<sub>pow</sub></th><th>palny</th><th>test</th></tr>'+Object.keys(PH.gases).map(k=>{const q=PH.gas(k);return'<tr><td>'+k+'</td><td>'+q.name+'</td><td>'+fx1(q.M,1)+'</td><td>'+fx1(q.rel,2)+'</td><td>'+(q.flam?'tak':'—')+'</td><td>'+q.test+'</td></tr>'}).join('');w.appendChild(t);c.appendChild(w)}
  
 {const c=card(g,'Pęcherzyki: wielkość a szybkość','CHE.PHYS.bubbleRise(d) · bubbleRate',['fizyka','bąbelki','gaz'],'Prędkość wznoszenia w wodzie zależy od średnicy (dane doświadczalne). Efekt „bąbelki” w każdym naczyniu korzysta z tej krzywej.','bubbles',false),
   st={liquid:[205,228,238],level:.7,T:25,gas:.8,bubSize:1,bubFrom:'bottom'};
  plot(c,120,(x,W,H,T)=>{const A=axes(x,W,H,T,{x0:0,x1:8,y0:0,y1:30,xl:'d [mm] → v [cm/s]'});x.strokeStyle='#2563eb';x.lineWidth=2;x.beginPath();for(let d=.1;d<=8;d+=.1){const px=A.X(d),py=A.Y(PH.bubbleRise(d));d<.15?x.moveTo(px,py):x.lineTo(px,py)}x.stroke()});
  push(GF.mount(c,{vessel:'cylinder',height:220,get:()=>st}));range(c,'wielkość',.4,3,.1,1,v=>st.bubSize=v);range(c,'natężenie',0,1,.05,.8,v=>st.gas=v)}
  
 {const ids=['ppt-agcl','ppt-cu-oh-2','ppt-fe-oh-3','ppt-baso4','ppt-caco3','ppt-pbi2','ppt-cus','ppt-ag2cro4'].filter(i=>!C.COLORS||C.COLORS.get(i));
  const c=card(g,'Osady: pokrój i opadanie','CHE.PHYS.ppt(id) · stokes(d,ρ)',['fizyka','osad'],'Serowaty (AgCl) opada szybko, kłaczkowate wodorotlenki powoli, drobny (BaSO₄) tworzy mleczną zawiesinę. Barwa: CHE.COLORS.','precipitate',false),
   st={liquid:[205,228,238],level:.7,T:25,pop:.8,ppts:[]},ro=readout(c);
  const set=id=>{const q=PH.ppt(id);st.ppts=[{col:GF.colors.at(id)||[240,240,240],eq:1.3,id}];ro.innerHTML='<b>'+(q.name||id)+'</b> · '+q.habit+' · cząstki ~'+q.d+' µm, ρ '+fx1(q.rho,2)+' g/cm³<br>Stokes: '+fx1(q.v,2)+' mm/s → 10 cm w '+(q.settle10cm<120?Math.round(q.settle10cm)+' s':q.settle10cm<7200?Math.round(q.settle10cm/60)+' min':fx1(q.settle10cm/3600,1)+' h')};
  push(GF.mount(c,{vessel:'beaker',height:210,get:()=>st}));sel(c,ids.map(i=>[i,(C.COLORS&&C.COLORS.get(i)?C.COLORS.get(i).name:i)]),set,ids[0]);set(ids[0])}
  
 {const c=card(g,'Ruch cząsteczek: rozkład Maxwella','CHE.PHYS.maxwellPDF · vRms',['fizyka','cząsteczki','Atlas'],'Im wyższa T i mniejsza masa molowa, tym szybsze cząsteczki. v_rms = √(3RT/M).','molTank',false),st={T:25},ro=readout(c);
  const gs=[['H2','#2563eb'],['N2','#16a34a'],['CO2','#dc2626']];
  const rd=plot(c,160,(x,W,H,T)=>{const A=axes(x,W,H,T,{x0:0,x1:3000,y0:0,y1:.0025,xl:'v [m/s]',fy:v=>v?'':'0'});gs.forEach(([f,col])=>{const M=PH.molarMass(f);x.strokeStyle=col;x.lineWidth=2;x.beginPath();for(let v=0;v<=3000;v+=20){const px=A.X(v),py=A.Y(Math.min(.0025,PH.maxwellPDF(v,M,st.T)));v?x.lineTo(px,py):x.moveTo(px,py)}x.stroke()});
   ro.innerHTML=gs.map(([f,col])=>'<span style="color:'+col+'">■</span> '+f+': v<sub>rms</sub> = <b>'+Math.round(PH.vRms(PH.molarMass(f),st.T))+' m/s</b>').join(' · ')});
  range(c,'T °C',-100,1000,10,25,v=>{st.T=v;rd()})}
 {const c=card(g,'Strącanie: jony → klaster → osad','CHE.sim.ParticleSim',['fizyka','cząsteczki','osad','jony'],'Ten sam symulator, którego używa widget lekcji (particleSim). Ruch cieplny ∝ √T z CHE.PHYS; cząstka osadu opada.','molTank',true);
  if(C.sim&&C.sim.ParticleSim){const cv=ce('canvas');cv.style.cssText='width:100%;height:240px;display:block;border-radius:10px';c.appendChild(cv);const ro=readout(c);
   const CF={fecl3:['Fe³⁺',3,'#2e7d4f','#7c2d12','ppt-fe-oh-3'],cuso4:['Cu²⁺',2,'#2563eb','#3b82f6','ppt-cu-oh-2'],mgcl2:['Mg²⁺',2,'#b06f1c','#e5e7eb','ppt-mg-oh-2']};let sim=null,key='cuso4',T=25;
   const build=()=>{if(sim)sim.stop();const f=CF[key];sim=new C.sim.ParticleSim({canvas:cv,T,config:{particles:[{type:'cation',count:6,r:14,color:f[2],label:f[0],speed:1},{type:'oh',count:6*f[1],r:10,color:'#b83a45',label:'OH⁻',speed:1.2}],reaction:{cation:'cation',anion:'oh',ratio:f[1],product:f[0],color:(GF.colors.at(f[4])&&'#'+GF.colors.at(f[4]).map(v=>(v|0).toString(16).padStart(2,'0')).join(''))||f[3],pptId:f[4]}},
    onCounters:({particles,clusters})=>{ro.innerHTML='wolne jony: <b>'+sim.particles.filter(p=>!p.bound).length+'</b> · cząstek osadu: <b>'+clusters+'</b>'}});sim.start();push({destroy:()=>sim.stop()})};
   sel(c,[['cuso4','CuSO₄ + NaOH'],['fecl3','FeCl₃ + NaOH'],['mgcl2','MgCl₂ + NaOH']],v=>{key=v;build()},key);range(c,'T °C',0,100,5,25,v=>{T=v;if(sim)sim.setT(v)});btn(c,'Od nowa',build);setTimeout(build,0)}}
  
 if(PH.electro){const E=PH.electro;{let q1=2,q2=2;const c=card(g,'Prawo Coulomba F(r)','CHE.PHYS.electro.coulomb',['fizyka','elektrostatyka'],'F = k·q₁·q₂/r² — 2× dalej → 4× słabiej. Ten sam model liczy widok fiz-coulomb-v01 i zadania lekcji FIZ-01.',null);
  const red=plot(c,170,(x,W,H,T)=>{const L=38,B=H-22,R=W-8,Tp=10,F=r=>Math.abs(E.coulomb(q1*1e-6,q2*1e-6,r)),Fm=F(.05);x.strokeStyle=T.mut;x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();x.strokeStyle='#ea580c';x.lineWidth=2;x.beginPath();for(let i=0;i<=100;i++){const r=.05+.95*i/100,X=L+(R-L)*i/100,Y=B-(B-Tp)*F(r)/Fm;i?x.lineTo(X,Y):x.moveTo(X,Y)}x.stroke();x.fillStyle=T.mut;x.font='600 10px system-ui';x.textAlign='left';x.fillText('F(5 cm) = '+Fm.toFixed(2)+' N · r: 5–100 cm',L+6,Tp+10)});
  range(c,'q₁ µC',.5,5,.5,q1,v=>{q1=v;red()});range(c,'q₂ µC',.5,5,.5,q2,v=>{q2=v;red()})}
  {const c=card(g,'Elektroskop — indukcja','GFX.vessels · electroscope',['fizyka','elektrostatyka'],'Pręt (−) zbliża się i oddala: elektrony uciekają do listków, ładunek całkowity = 0 (CHE.PHYS.electro.electroscope).','electroscope');push(GF.mount(c,{vessel:'electroscope',height:240,get:()=>({})}))}}

}
function tabR(g,card,push){const RX=GF.rx;if(!RX){g.appendChild(ce('p',null,'Brak GFX.rx.'));return}
 RX.list().forEach(k=>{const I=RX.info(k),sp=RX.get(k),c=card(g,I.name,'GFX.rx.mount(host,"'+k+'")',['reakcja'].concat(I.out).concat(I.teacher?['pokaz nauczyciela']:[]),I.why||I.obs,k,false);
  const m=RX.mount(c,k,{height:200,dur:6});push(m.api);const ro=readout(c);ro.innerHTML='<b>'+I.eq+'</b>'+(I.gas?'<br>gaz: '+I.gas.formula+' — '+I.gas.moves+'; test: '+I.gas.test:'')+'<br><small>źródło: '+I.src+'</small>';
  btn(c,'▶ wykonaj',()=>m.play());btn(c,'↺',()=>m.reset())})}
function mount(host,opt){opt=opt||{};if(!document.getElementById('che-lib-css')){const s=ce('style');s.id='che-lib-css';s.textContent=CSS+PLOT_CSS;document.head.appendChild(s)}GF.ui.ensure();
 const root=ce('div'),top=ce('div','cl-top'),q=ce('input'),stat=ce('span','cl-stat'),nav=ce('div','cl-nav'),main=ce('div');q.placeholder='Szukaj: np. kolba, płomień, jony, kwas…';q.type='search';top.append(q,stat);root.append(top,nav,main);host.appendChild(root);let cards=[],cur=null;
 const nV=GF.vessels.list().filter(id=>(META[id]||[])[1]!=='ukryty').length,nE=GF.effects.list().length,nS=GF.scenes.list().length;stat.textContent='GFX v'+GF.version+' · '+nV+' elementów · '+nE+' efektów · '+nS+' zestawów · '+(GF.rx?GF.rx.list().length:0)+' reakcji · CHE.PHYS '+(C.PHYS?C.PHYS.version:'—');
 const clear=()=>{cards.forEach(m=>m.destroy&&m.destroy());cards=[];main.innerHTML=''};
 const card=(g,title,id,tags,desc,key,wide)=>{const c=ce('div','cl-card'+(wide?' wide':''));c.dataset.q=(title+' '+id+' '+tags.join(' ')+' '+desc).toLowerCase();c.appendChild(ce('h3',null,title));c.appendChild(ce('code',null,id+' '));if(NEW.indexOf(key)>=0)c.appendChild(ce('span','cl-tag new','nowe'));tags.forEach(t=>c.appendChild(ce('span','cl-tag',t)));c.appendChild(ce('div','cl-d',desc));g.appendChild(c);return c};
 function tabV(g,kind){GF.vessels.list().forEach(id=>{const m=META[id]||[id,'aparatura',''];if(m[1]!==kind)return;const c=card(g,m[0],'GFX.vessels · '+id,[m[1]],m[2],id),st=demo(id);cards.push(GF.mount(c,{vessel:id,height:H[id]||210,get:()=>st}));ctl(c,id,st)})}
 function tabE(g,free){GF.effects.list().forEach(id=>{const f=GF.effects.get(id);if(!!f.free!==free)return;const c=card(g,f.label||id,'GFX.effects · '+id,[f.free?'swobodny':'w naczyniu','warstwa: '+f.layer].concat(f.vessels?['tylko: '+f.vessels.slice(0,2).join(', ')]:[]),f.free?'Rysowany nad sceną; st.fx / GFX.trigger':f.evented?'Jednorazowy w naczyniu: GFX.trigger(pool,"'+id+'",{color})':'Rysowany w naczyniu; stan z st.*',id),
  st=Object.assign(demo('beaker'),{gas:1,heat:3,fumes:1,T:95,foam:.6,turb:.6,schl:1,stir:id==='stirBar'?.8:null,label:'HCl',stopper:true,plume:{col:[59,130,196],k:.8},ppts:[{col:[248,250,252],eq:1.2}],solids:[{col:[154,167,179],eq:3,t:'metal',shape:'granule'}],pop:0,splash:0,level:id==='tap'?.75:.6,tap:.6}),only=f.free?[id]:['glass','liquid','meniscus',id].concat(id==='bubbles'?['solids']:[]),vs=f.free?'stage':(f.vessels?f.vessels[0]:'beaker');if(f.free)st.fx={[id]:true};
  let n=0;const m=GF.mount(c,{vessel:vs,height:200,parts:!f.free&&f.layer==='front'&&['fumes','steam','heatConvection','splash','stopper'].indexOf(id)>=0?[{id:vs,x:.2,y:.36,w:.6,h:.6}]:null,get:()=>{n++;if(id==='splash'&&n%160===1)st.splash=.6;if((id==='ripples'||id==='precipitate')){st.pop=1-((n%150)/150)}return st},only,fx:f.free?{[id]:true}:null});cards.push(m);
  if((f.free&&f.oneShot)||f.evented){btn(c,'Uruchom',()=>m.trigger(id,f.evented?{color:[[219,39,119],[37,99,235],[250,204,21]][(Math.random()*3)|0]}:{}));if(f.evented)setTimeout(()=>m.trigger(id,{}),400)}
  if(f.schema&&Object.keys(f.schema).length){const o=ce('div','cl-ctl'),fxo={};c.appendChild(o);GF.optionsPanel(o,id,fxo,()=>{st.fx=Object.assign({},st.fx,{[id]:Object.assign({},fxo)})})}})}
 function tabM(g){Object.keys(SETS).forEach(k=>{const c=card(g,k,'GFX.vessels · molTank',['cząsteczki'],SETS[k].map(x=>GF.molecules.name(x.id)+' ×'+x.n).join(', '),'molTank'),st={phase:/aq|cukier/.test(k)?'liquid':'gas',mol:SETS[k],T:25};cards.push(GF.mount(c,{vessel:'molTank',height:220,get:()=>st}));molCtl(c,st)})}
 function tabS(g){GF.scenes.list().forEach(id=>{const D=GF.scenes.get(id),c=card(g,D.label,'GFX.scene(host,"'+id+'")',['zestaw',D.lesson||''],D.desc||'',id,true);cards.push(GF.scene(c,id))})}
 const push=m=>cards.push(m);const TABS={'Zestawy':tabS,'Fizyka (CHE.PHYS)':g=>tabF(g,card,push),'Reakcje (GFX.rx)':g=>tabR(g,card,push),'Naczynia':g=>tabV(g,'naczynie'),'Przyrządy':g=>tabV(g,'przyrząd'),'Aparatura':g=>tabV(g,'aparatura'),'Elektrostatyka':g=>tabV(g,'elektrostatyka'),'Efekty (ciecz)':g=>tabE(g,false),'Efekty (swobodne)':g=>tabE(g,true),'Cząsteczki i jony':tabM};
 function filt(){const s=q.value.trim().toLowerCase();[].forEach.call(main.querySelectorAll('.cl-card'),c=>{c.style.display=!s||c.dataset.q.indexOf(s)>=0?'':'none'})}q.oninput=filt;
 function show(n){cur=n;clear();const g=ce('div','cl-grid');main.appendChild(g);TABS[n](g);filt();[].forEach.call(nav.children,b=>b.classList.toggle('on',b.textContent===n))}
 Object.keys(TABS).forEach(n=>{const b=ce('button',null,n);b.type='button';b.onclick=()=>show(n);nav.appendChild(b)});
 show(opt.tab||'Zestawy');return{show,destroy:clear}}
C.LAB.LIBRARY={version:'1.3',mount,meta:META,sets:SETS};
})();

P.cooler=(h,lab,o)=>{o=o||{};const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||210)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';box.appendChild(cv);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Temperatura chłodziwa wejściowego <input class="tin" type="range" min=-20 max=80 value=15 style="width:100%"><output class="tinv">15</output> °C</label><label>Przepływ chłodziwa <input class="flow" type="range" min=0 max=100 value=40 style="width:100%"><output class="flowv">0.0004</output> kg/s</label><label>Powierzchnia wymiany <input class="area" type="range" min=1 max=100 value=30 style="width:100%"><output class="areav">30</output> cm²</label><label>Współczynnik U <input class="u" type="range" min=10 max=2000 value=250 step=10 style="width:100%"><output class="uv">250</output> W/(m²·K)</label>';box.appendChild(c);const info=el('div');info.style.cssText='font-size:12.5px;color:var(--text-muted,#64748b)';box.appendChild(info);const st={Tin:15,flow:.0004,area:.003,U:250,Tout:15,q:0};lab.coolerState=st;const q=s=>c.querySelector(s);function calc(){const vessel=lab.thermalState;const Tload=vessel?Number(vessel.T):25;const flow=st.flow;const UA=st.U*st.area;const r=HEAT.exchanger(st.Tin,Tload,flow,UA,4180);st.q=r.q;st.Tout=r.Tout;lab.inputs.cooler={Tin:st.Tin,Tout:st.Tout,flow:flow,area:st.area,U:st.U,heatTransfer:st.q};lab.inputs.coolingPower=st.q;lab.record('heatTransfer',st.q,'W',{Tin:st.Tin,Tout:st.Tout,flow:st.flow,area:st.area,U:st.U});lab.emit('cooler',{Tin:st.Tin,Tout:st.Tout,flow:flow,area:st.area,U:st.U,heatTransfer:st.q,coolingPower:st.q});}q('.tin').oninput=e=>{st.Tin=+e.target.value;q('.tinv').value=e.target.value};q('.flow').oninput=e=>{st.flow=+e.target.value/100000;q('.flowv').value=st.flow.toFixed(4)};q('.area').oninput=e=>{st.area=+e.target.value/10000;q('.areav').value=e.target.value};q('.u').oninput=e=>{st.U=+e.target.value;q('.uv').value=e.target.value};const ctx=cv.getContext('2d'),cpool={};let lt=0;function draw(t){if(!cv.isConnected)return;const d=Math.min(2,g.devicePixelRatio||1),W=cv.clientWidth||320,H=cv.clientHeight||210;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);const dt=Math.min(.05,(t-lt)/1000||0);lt=t;GFX.draw('cooler',ctx,{x:0,y:0,w:W,h:H},{T:lab.thermalState?lab.thermalState.T:25,coolant:{Tin:st.Tin,Tout:st.Tout,flow:st.flow,q:st.q}},{t,dt,pool:cpool});ctx.fillStyle=GFX.theme().text;ctx.font='700 11px Inter,system-ui';ctx.textAlign='left';ctx.fillText('odbiór: '+st.q.toFixed(1)+' W',8,H-8);requestAnimationFrame(draw)}lab.on('tick',calc);lab.on('reset',()=>{st.Tout=st.Tin;st.q=0});requestAnimationFrame(draw);info.innerHTML='<b>Wymiennik:</b> chłodzenie zależy od różnicy temperatur, przepływu chłodziwa, powierzchni wymiany i współczynnika U. Model korzysta z efektywności wymiennika, nie opisuje szczegółowej hydrauliki.'};
P.gasLine=(h,lab,o)=>{o=o||{};GFX.mount(h,{lab,height:o.height||250,parts:[{id:'flask',x:.04,y:.38,w:.28,h:.5,get:()=>Object.assign(GFX.fromLab(lab),{stopper:'tube'})},{id:'gasCollect',x:.42,y:.12,w:.56,h:.8,get:()=>{const S=lab.S||{};return{gas:Math.min(1,S.gasT||0),gasV:Math.min(1,(S.gasV||0)/100)}}}],links:[{pts:[[.18,.3],[.18,.2],[.38,.2],[.38,.44],[.42,.44]],flow:()=>Math.min(1,(lab.S&&lab.S.gasT)||0)}]});const i=el('div');i.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';i.innerHTML='<b>Przewód gazowy:</b> rurka GFX łączy kolbę z odbieralnikiem; przepływ = gaz z sesji LAB.';h.appendChild(i)};
const gfxVessel=(id,txt)=>(h,lab,o)=>{o=o||{};GFX.mount(h,{lab,vessel:id,height:o.height||250,effects:o.effects});const i=el('div');i.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';i.innerHTML=txt;h.appendChild(i)};
P.flask=gfxVessel('flask','<b>Kolba:</b> ta sama ciecz, osady, bąbelki, para i skraplanie co w zlewce — z jednej sesji LAB.');
P.pHmeter=gfxVessel('pHmeter','<b>pH-metr cyfrowy:</b> odczyt z sesji LAB (to samo pH co w zlewce), z czasem ustalania i wskaźnikiem stabilności.');
P.thermometer=gfxVessel('thermometer','<b>Termometr:</b> temperatura z sesji LAB (zlewka, układ cieplny).');

P.library=(h,lab)=>{C.LAB.LIBRARY.mount(h)};
P.paper=(h,lab,o)=>{o=o||{};const st={dip:0,fresh:0};GFX.mount(h,{lab,vessel:'paper',height:o.height||270,get:()=>Object.assign(GFX.fromLab(lab),st)});const bar=el('div');bar.style.cssText='display:flex;gap:6px;margin-top:6px';[['Zanurz / wyjmij',()=>{st.dip=st.dip?0:1}],['Nowe papierki',()=>{st.fresh++;st.dip=0}]].forEach(([t,f])=>{const b=el('button','lb-btn',t);b.type='button';b.onclick=f;bar.appendChild(b)});h.appendChild(bar);const i=el('div');i.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';i.innerHTML='<b>Papierki wskaźnikowe:</b> uniwersalny, lakmus czerwony i niebieski, fenoloftaleinowy. Barwa z CHE.COLORS i pH z sesji LAB; po wyjęciu papierek zachowuje kolor.';h.appendChild(i)};
P.balance=(h,lab,o)=>{o=o||{};const st={mass:0};GFX.mount(h,{lab,vessel:'balance',height:o.height||170,get:()=>st});const w=el('label');w.style.cssText='display:block;margin-top:6px;font-size:12px';w.innerHTML='Masa <input type=range min=0 max=200 step=.01 value=0 style=width:70%> <output>0</output> g';const i=w.querySelector('input'),u=w.querySelector('output');i.oninput=()=>{st.mass=+i.value;u.textContent=i.value};h.appendChild(w)};
[['dropper','<b>Kroplomierz:</b> pojedyncze krople wskaźnika lub odczynnika.'],['dropFunnel','<b>Wkraplacz:</b> kranik i krople do naczynia poniżej.'],['crucible','<b>Tygiel:</b> porcelana; prażenie ciał stałych.'],['watchGlass','<b>Szkiełko zegarkowe:</b> mała ilość substancji.'],['conductivity','<b>Tester przewodnictwa:</b> żarówka świeci, gdy w roztworze są jony.'],['pHscale','<b>Skala pH:</b> barwy wskaźnika i pH z sesji LAB.'],['hotplate','<b>Mieszadło magnetyczne:</b> grzanie i obroty.'],['tubeRack','<b>Statyw z probówkami:</b> szereg prób obok siebie.'],['gasCollect','<b>Zbieranie gazu nad wodą:</b> odwrócony cylinder w wannie.'],['pipette','<b>Pipeta:</b> dozowanie małych objętości; poziom i kroplenie ze stanu.'],['molTank','<b>Zbiornik cząsteczek:</b> cząsteczki w fazie gazowej, ciekłej lub stałej; prędkość zależy od temperatury.'],['roundFlask','<b>Kolba okrągłodenna:</b> ogrzewanie i destylacja; te same efekty co w zlewce.'],['volFlask','<b>Kolba miarowa:</b> kreska miarowa; poziom 1 = objętość nominalna.'],['funnel','<b>Lejek:</b> sączenie i przelewanie.'],['petri','<b>Szalka Petriego:</b> płytka do krystalizacji i reakcji na szkle.'],['evapDish','<b>Parownica:</b> odparowanie i krystalizacja.']].forEach(([id,t])=>{P[id]=gfxVessel(id,t)});
P.effectLab=(h,lab,o)=>{o=o||{};const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const bar=el('div');bar.style.cssText='display:flex;gap:6px;flex-wrap:wrap';
const ps=el('select');ps.style.cssText=sty;ps.innerHTML='<option value="">Gotowe efekty…</option>'+GFX.presets.map((p,i)=>'<option value="'+i+'">'+p.label+'</option>').join('');
const es=el('select');es.style.cssText=sty;GFX.effects.list().filter(k=>GFX.effects.get(k).free).forEach(k=>{const q=el('option');q.value=k;q.textContent=GFX.effects.options(k).label;es.appendChild(q)});
const go=el('button');go.style.cssText=sty+'background:var(--accent,#0d6868);color:#fff';const rs=el('button');rs.style.cssText=sty;rs.textContent='Reset';bar.append(ps,es,go,rs);box.appendChild(bar);
const cur={id:'metalBurn',o:{metal:'Mg'},on:false};const sc=GFX.mount(box,{vessel:'stage',height:o.height||320,get:()=>({fx:cur.on&&!GFX.effects.get(cur.id).oneShot?{[cur.id]:cur.o}:null})});const oc=el('div');oc.style.cssText='display:grid;gap:5px';box.appendChild(oc);
const sync=()=>{const f=GFX.effects.get(cur.id);es.value=cur.id;go.textContent=f.oneShot?'Wyzwól':cur.on?'Stop':'Start';GFX.optionsPanel(oc,cur.id,cur.o)};
es.onchange=()=>{cur.id=es.value;cur.o={};cur.on=false;sync()};ps.onchange=()=>{const p=GFX.presets[+ps.value];if(!p)return;sc.reset();cur.id=p.id;cur.o=JSON.parse(JSON.stringify(p.o));cur.on=!GFX.effects.get(p.id).oneShot;sync();if(!cur.on)sc.trigger(cur.id,cur.o)};
go.onclick=()=>{const f=GFX.effects.get(cur.id);if(f.oneShot)sc.trigger(cur.id,cur.o);else cur.on=!cur.on;sync()};rs.onclick=()=>{sc.reset();cur.on=false;sync()};sync()};
P.testTube=gfxVessel('testTube','<b>Probówka:</b> małe naczynie do pojedynczego testu; wspólne efekty z zestawem GFX.');

const LINKER={connections:[],validate(sourcePanel,sourcePort,targetPanel,targetPort){const a=PANEL_SCHEMA[sourcePanel],b=PANEL_SCHEMA[targetPanel];const okA=!!(a&&a.outputs.includes(sourcePort));const okB=!!(b&&b.inputs.includes(targetPort));return{ok:okA&&okB,source:okA,target:okB,reason:!a?'Brak panelu źródłowego':!b?'Brak panelu docelowego':!okA?'Port wyjściowy nie istnieje w schemacie źródła':!okB?'Port wejściowy nie istnieje w schemacie celu':'OK'}},connect(source,event,target,targetEvent,transform){const rec={source,event,target,targetEvent,transform:transform||((x)=>x),active:true};const fn=(data)=>{if(!rec.active)return;try{const out=rec.transform(data);if(target&&target.receive)target.receive(targetEvent,out);else if(target&&target.emit)target.emit(targetEvent,out)}catch(e){console.warn('CHE.LAB linker',e)}};rec.fn=fn;rec.unsubscribe=source&&source.on?source.on(event,fn):null;this.connections.push(rec);return rec},connectPort(source,sourcePanel,sourcePort,target,targetPanel,targetPort,transform){const v=this.validate(sourcePanel,sourcePort,targetPanel,targetPort);if(!v.ok){const err=new Error(v.reason);err.validation=v;throw err}return this.connect(source,sourcePort,target,targetPort,transform)},disconnect(rec){if(!rec)return false;const i=this.connections.indexOf(rec);if(i<0)return false;const x=this.connections.splice(i,1)[0];x.active=false;if(typeof x.unsubscribe==='function')x.unsubscribe();return true},clear(){this.connections.slice().forEach(x=>this.disconnect(x))},route(source,event,target,targetEvent,transform){return this.connect(source,event,target,targetEvent,transform)},snapshot(){return this.connections.map((x,i)=>({id:i,sourceEvent:x.event,targetEvent:x.targetEvent,connected:!!(x.source&&x.target),active:x.active}))}};
C.LAB.LINKER=LINKER;
P.workflow=(h,lab,o)=>{o=o||{};
  
const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const steps=[['1','Kolba / zlewka','reaction'],['2','Przewód','gasFlow'],['3','Odbiornik','gasVolume'],['4','Chłodnica','cooledTemperature'],['5','Analiza','interpretation'],['6','Wykres','measurement']];steps.forEach(a=>{const d=el('div');d.style.cssText=cardSty+';display:grid;grid-template-columns:28px 1fr auto;align-items:center;gap:8px';d.innerHTML='<b>'+a[0]+'</b><span>'+a[1]+'</span><code>'+a[2]+'</code>';box.appendChild(d)});const bar=el('div');bar.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-top:7px';bar.innerHTML='<button class="build" style="'+sty+'background:var(--accent,#0d6868);color:#fff">Zbuduj przepływ</button><button class="clear" style="'+sty+'">Usuń połączenia</button>';h.appendChild(bar);const status=el('div');status.style.cssText='margin-top:7px;font-size:12px;color:var(--text-muted,#64748b)';h.appendChild(status);let links=[];const build=()=>{links.forEach(x=>LINKER.disconnect(x));links=[];links.push(LINKER.connect(lab,'add',lab,'input:reaction',x=>x));links.push(LINKER.connect(lab,'tick',lab,'input:gasFlow',x=>({t:x.t,gasT:x.gasT})));links.push(LINKER.connect(lab,'measurement',lab,'input:measurement',x=>x));links.push(LINKER.connect(lab,'splash',lab,'input:incident',x=>x));status.textContent='Przepływ aktywny: '+LINKER.snapshot().length+' połączenia. Moduły mogą być wymieniane bez zmiany sesji.'};bar.querySelector('.build').onclick=build;bar.querySelector('.clear').onclick=()=>{links.forEach(x=>LINKER.disconnect(x));links=[];status.textContent='Połączenia usunięte.'};status.textContent='Gotowy do zbudowania przepływu modułowego.'};
P.linkView=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const rows=[['Zlewka','add','stan reakcji'],['Odbiornik gazu','gasVolume','objętość gazu'],['Analiza gazu','tick','interpretacja'],['Wykres','measurement','pomiar']];rows.forEach(r=>{const d=el('div');d.style.cssText=cardSty;d.innerHTML='<b>'+r[0]+'</b><br><small>wejście: '+r[1]+' · '+r[2]+'</small>';box.appendChild(d)});const msg=el('div');msg.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';msg.textContent='Połączenia są zarządzane przez CHE.LAB.LINKER; wizualizacja może być użyta także bez tego panelu.';h.appendChild(msg)};

P.stationBoard=(h,lab,o)=>{o=o||{};const wrap=el('div');wrap.style.cssText='display:grid;gap:8px';h.appendChild(wrap);const sel=el('select');sel.style.cssText=sty;Object.values(STATIONS).forEach(x=>{const q=el('option');q.value=x.id;q.textContent=x.title;sel.appendChild(q)});const bar=el('div');bar.style.cssText='display:flex;gap:6px;flex-wrap:wrap';const build=el('button');build.textContent='Zbuduj stanowisko';build.style.cssText=sty+'background:var(--accent,#0d6868);color:#fff';const clear=el('button');clear.textContent='Wyczyść graf';clear.style.cssText=sty;bar.append(sel,build,clear);wrap.appendChild(bar);const graph=el('div');graph.style.cssText='display:grid;gap:5px';wrap.appendChild(graph);const status=el('div');status.style.cssText='font-size:12px;color:var(--text-muted,#64748b)';wrap.appendChild(status);function render(){graph.innerHTML='';lab.workflow.nodes.forEach((n,i)=>{const d=el('div');d.style.cssText=cardSty+';display:flex;justify-content:space-between;gap:8px';d.innerHTML='<b>'+String(i+1).padStart(2,'0')+' · '+n.label+'</b><code>'+Object.values(n.ports||{}).join(', ')+'</code>';graph.appendChild(d)});const v=lab.workflow.validate();status.textContent='Węzły: '+v.nodes+' · połączenia: '+v.edges+' · '+(v.ok?'graf poprawny':'błędy: '+v.errors.join('; '))};build.onclick=()=>{lab.workflow.loadPreset(sel.value);render()};clear.onclick=()=>{lab.workflow.clear();lab.emit('workflow',lab.workflow.snapshot());render()};lab.on('workflow',render);lab.on('reset',render);render()};
P.experimentIO=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const info=el('div',null,'Eksperyment można zapisać jako JSON i odtworzyć w innej lekcji.');info.style.cssText='font-size:12px;color:var(--text-muted,#64748b)';box.appendChild(info);const bar=el('div');bar.style.cssText='display:flex;gap:6px;flex-wrap:wrap';const out=el('textarea');out.rows=7;out.style.cssText='width:100%;box-sizing:border-box;padding:8px;border:1px solid var(--border,#cbd5e1);border-radius:8px;background:var(--surface,#fff);color:var(--text,#0f172a);font:12px ui-monospace,monospace';const save=el('button');save.textContent='Eksportuj';save.style.cssText=sty;const load=el('button');load.textContent='Odtwórz';load.style.cssText=sty;const snap=el('button');snap.textContent='Odśwież JSON';snap.style.cssText=sty;bar.append(save,load,snap);box.append(bar,out);const refresh=()=>{out.value=lab.exportJSON()};save.onclick=refresh;snap.onclick=refresh;load.onclick=()=>{if(lab.importJSON(out.value)){out.value=lab.exportJSON();info.textContent='Eksperyment odtworzony poprawnie.'}else info.textContent='Nie udało się odtworzyć danych JSON.'};lab.on('reset',refresh);refresh()};
P.scenarios=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const sel=el('select');sel.style.cssText=sty;Object.values(SCENARIOS).forEach(x=>{const q=el('option');q.value=x.id;q.textContent=x.title;sel.appendChild(q)});const run=el('button');run.textContent='Uruchom scenariusz';run.style.cssText=sty+'background:var(--accent,#0d6868);color:#fff';const info=el('div');info.style.cssText='font-size:12px;color:var(--text-muted,#64748b)';box.append(sel,run,info);run.onclick=()=>{const sc=SCENARIOS[sel.value];lab.reset(sc.start);lab.workflow.loadPreset(sc.station);info.textContent='Aktywny: '+sc.title+' · graf '+sc.station+' · routing danych włączony.';lab.emit('scenario',sc)};info.textContent='Wybierz gotowy scenariusz; stan, graf i routing pozostają w tej samej sesji.'};

P.graphAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:6px';h.appendChild(box);const render=()=>{box.innerHTML=Object.values(STATIONS).map(st=>{const w=createWorkflow(lab);st.nodes.forEach(n=>w.addNode(n[0],n[0],n[1],{input:n[3],output:n[4]}));st.edges.forEach(e=>w.connect(e[0],e[1],e[2],e[3]));const v=w.validate();return '<div style="'+cardSty+'"><b>'+(v.ok?'PASS':'BLOCK')+'</b> · '+st.title+'<br><small>'+v.nodes+' węzłów · '+v.edges+' połączeń · '+(v.closed?'graf zamknięty':'graf wymaga poprawy')+(v.errors.length?' · '+v.errors.join('; '):'')+'</small></div>'}).join('')};lab.on('reset',render);render()};
P.selfTest=(h,lab)=>{const checks=[['Sesja',!!lab.S,'stan utworzony'],['Zdarzenia',typeof lab.on==='function'&&typeof lab.emit==='function','API zdarzeń'],['Odbiór danych',typeof lab.receive==='function','porty wejściowe'],['Pomiar',typeof lab.record==='function'&&typeof lab.series==='function','rejestr pomiarów'],['Linker',!!LINKER&&typeof LINKER.connect==='function'&&typeof LINKER.disconnect==='function','łączenie i odpinanie'],['Walidacja portów',typeof LINKER.validate==='function'&&LINKER.validate('gasTrap','gasVolume','gasLine','gasVolume').ok,'schemat wejść/wyjść'],['Snapshot',typeof lab.snapshot==='function'&&typeof lab.restore==='function','zapis i odtworzenie sesji'],['Cykl życia',typeof lab.destroy==='function'&&typeof lab.release==='function','mount/unmount/destroy'],['Naczynia',Object.values(VESSELS||{}).every(x=>x.status==='ready'),'rejestr naczyń'],['Efekty',Object.values(EFFECT_REGISTRY||{}).every(x=>x.independent&&x.portable),'rejestr efektów'],['Eksperyment JSON',typeof lab.exportJSON==='function'&&typeof lab.importJSON==='function','eksport i restore'],['Stanowiska',!!STATIONS&&Object.keys(STATIONS).length>=5&&typeof lab.workflow.loadPreset==='function','grafy gaz/titracja/termika/osad/spalanie'],['Routing danych',typeof lab.workflow.activate==='function'&&typeof lab.workflow.deactivate==='function'&&lab.workflow.validate().ok,'zamknięty graf: porty + routing'],['Scenariusze',!!SCENARIOS&&Object.keys(SCENARIOS).length>=5,'gotowe konfiguracje doświadczeń'],['Analizator gazu',typeof P.gasMeasurement==='function'&&typeof P.gasCompare==='function','pomiar i porównanie faz'],['Pakiet gazowy',typeof P.gasSample==='function'&&typeof P.gasSeparator==='function'&&typeof P.gasAbsorber==='function'&&typeof P.gasUncertainty==='function'&&typeof P.gasBalance==='function','próbka, separacja, absorpcja, niepewność, bilans'],['Planowane',!(C.LAB.PANELS&&C.LAB.PANELS.planned&&C.LAB.PANELS.planned.length),'brak niegotowych modułów']];h.innerHTML='<div style="display:grid;gap:5px">'+checks.map(x=>'<div style="'+cardSty+'"><b>'+(x[1]?'PASS':'BLOCK')+'</b> · '+x[0]+'<br><small>'+x[2]+'</small></div>').join('')+'</div>'};
 
const VISUALS={};
const EFFECTS={liquid:1,meniscus:1,glass:1,precipitate:1,solids:1,bubbles:1,fumes:1,heatGlow:1,heatConvection:1,splash:1,ripples:1,steam:1,condensation:1,plume:1,foam:1,labels:1};
const VESSELS={beaker:{kind:'vessel',status:'ready',effects:Object.keys(EFFECTS)},gasTrap:{kind:'vessel',status:'ready',parts:['inlet','receiver','outlet','sample'],data:['gasT','composition','volume','pressure','temperature']},flask:{kind:'vessel',status:'ready',parts:['neck','body','port'],data:['volume','temperature','reaction']},testTube:{kind:'vessel',status:'ready',parts:['openEnd','body','sample'],data:['volume','temperature','observation']},cooler:{kind:'vessel',status:'ready',parts:['inlet','jacket','outlet'],data:['temperature','flow']},gasLine:{kind:'connector',status:'ready',parts:['inlet','tube','outlet'],data:['gas','flow','signal']},combustion:{kind:'station',status:'ready',parts:['burner','reactionZone','flame','products'],data:['fuel','oxidant','temperature','products','energy']},splash:{kind:'event-view',status:'ready',parts:['source','trajectory','impact','droplets'],data:['volume','velocity','direction','incident']}};
function registerVisual(id,def){VISUALS[id]=Object.assign({id,portable:true},def);return VISUALS[id]}
registerVisual('beaker',{kind:'vessel',status:'ready',effects:Object.keys(EFFECTS)});
registerVisual('gasTrap',{kind:'vessel',status:'ready',parts:['inlet','receiver','outlet','sample'],data:['gas','collectedVolume','temperature','signal'],portable:true});
registerVisual('combustion',{kind:'station',status:'ready',parts:VESSELS.combustion.parts,data:VESSELS.combustion.data});
registerVisual('splash',{kind:'event-view',status:'ready',parts:VESSELS.splash.parts,data:VESSELS.splash.data});
registerVisual('flask',{kind:'vessel',status:'ready',parts:VESSELS.flask.parts,data:VESSELS.flask.data});
registerVisual('testTube',{kind:'vessel',status:'ready',parts:VESSELS.testTube.parts,data:VESSELS.testTube.data});
registerVisual('cooler',{kind:'vessel',status:'ready',parts:VESSELS.cooler.parts,data:VESSELS.cooler.data});
registerVisual('gasLine',{kind:'connector',status:'ready',parts:VESSELS.gasLine.parts,data:VESSELS.gasLine.data});

const EFFECT_REGISTRY={};Object.keys(EFFECTS).forEach(id=>EFFECT_REGISTRY[id]={id,portable:true,independent:true,enabledByDefault:!!EFFECTS[id]});GFX.effects.list().forEach(id=>{const op=GFX.effects.options(id);EFFECT_REGISTRY[id]=Object.assign(EFFECT_REGISTRY[id]||{id,portable:true,independent:true,enabledByDefault:!op.free},{label:op.label,free:op.free,oneShot:op.oneShot,options:Object.keys(op.schema)})});
const PANEL_SCHEMA={};PNAMES.forEach(id=>PANEL_SCHEMA[id]={id,enabled:true,mode:['LIVE','SNAPSHOT','DEMO','INTERACTIVE','LINKED','ISOLATED'],inputs:[],outputs:[],subscriptions:[],portable:true});
Object.assign(PANEL_SCHEMA,{gasParallelAudit:{id:'gasParallelAudit',enabled:true,mode:['SNAPSHOT','ISOLATED'],inputs:['gasSample'],outputs:[],subscriptions:['chemistry','reset'],portable:true},gasSample:{id:'gasSample',enabled:true,mode:['INTERACTIVE','SNAPSHOT','ISOLATED'],inputs:['gasSample'],outputs:['sample'],subscriptions:['reset','tick'],portable:true},gasSeparator:{id:'gasSeparator',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['gasSample'],outputs:['gasPhase','condensate'],subscriptions:['tick','reset'],portable:true},gasAbsorber:{id:'gasAbsorber',enabled:true,mode:['INTERACTIVE','LINKED','ISOLATED'],inputs:['gasSample'],outputs:['gasAbsorbed'],subscriptions:['tick','reset'],portable:true},gasUncertainty:{id:'gasUncertainty',enabled:true,mode:['LIVE','INTERACTIVE','ISOLATED'],inputs:['gasSample'],outputs:['uncertainty'],subscriptions:['tick'],portable:true},gasBalance:{id:'gasBalance',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['combustionProducts'],outputs:['massBalance'],subscriptions:['tick','reset'],portable:true}});PANEL_SCHEMA.coreConsistencyAudit={id:'coreConsistencyAudit',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['chemistry','measurement'],outputs:[],subscriptions:['reaction','chemistry','measurement','reset'],portable:true};PANEL_SCHEMA.thermal={id:'thermal',enabled:true,mode:['LIVE','INTERACTIVE','LINKED','ISOLATED'],inputs:['heatSource','coolingPower'],outputs:['temperature','measurement'],subscriptions:['tick','reset','cooler'],portable:true};PANEL_SCHEMA.scenarios={id:'scenarios',enabled:true,mode:['LIVE','INTERACTIVE','ISOLATED'],inputs:[],outputs:['scenario'],subscriptions:['scenario','reset'],portable:true};PANEL_SCHEMA.experimentIO={id:'experimentIO',enabled:true,mode:['SNAPSHOT','ISOLATED'],inputs:['snapshot'],outputs:['snapshot'],subscriptions:['reset'],portable:true};PANEL_SCHEMA.stationBoard={id:'stationBoard',enabled:true,mode:['LIVE','SNAPSHOT','INTERACTIVE','LINKED','ISOLATED'],inputs:['workflow'],outputs:['route'],subscriptions:['workflow','reset'],portable:true};PANEL_SCHEMA.graphAudit={id:'graphAudit',enabled:true,mode:['SNAPSHOT','ISOLATED'],inputs:[],outputs:[],subscriptions:['reset'],portable:true};PANEL_SCHEMA.selfTest={id:'selfTest',enabled:true,mode:['SNAPSHOT','ISOLATED'],inputs:[],outputs:[],subscriptions:[],portable:true};PANEL_SCHEMA.workflow={id:'workflow',enabled:true,mode:['LIVE','LINKED','ISOLATED'],inputs:['reaction','gasFlow','gasVolume','measurement'],outputs:['route'],subscriptions:['add','tick','measurement','splash'],portable:true};Object.assign(PANEL_SCHEMA,{gasMeasurement:{id:'gasMeasurement',enabled:true,mode:['LIVE','INTERACTIVE','ISOLATED'],inputs:['gasSample'],outputs:['measurement'],subscriptions:['tick','reset'],portable:true},gasCompare:{id:'gasCompare',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['gasSample'],outputs:['comparison'],subscriptions:['tick','reset'],portable:true},gasAnalysis:{id:'gasAnalysis',enabled:true,mode:['LIVE','ISOLATED','LINKED'],inputs:['gas','gasT','temperature'],outputs:['interpretation'],subscriptions:['add','tick','reset'],portable:true},measureStation:{id:'measureStation',enabled:true,mode:['LIVE','INTERACTIVE','ISOLATED'],inputs:[],outputs:['mass','volume','pressure'],subscriptions:['measurement','reset'],portable:true},reactionCatalog:{id:'reactionCatalog',enabled:true,mode:['SNAPSHOT','ISOLATED'],inputs:[],outputs:[],subscriptions:[],portable:true},gasTrap:{id:'gasTrap',enabled:true,mode:['LIVE','ISOLATED','LINKED'],inputs:['gas','gasT','temperature'],outputs:['gasVolume','gasSignal'],subscriptions:['add','tick','reset'],portable:true},combustion:{id:'combustion',enabled:true,mode:['DEMO','INTERACTIVE','ISOLATED'],inputs:['fuel','oxidant'],outputs:['temperature','energy','products'],subscriptions:[],portable:true},splash:{id:'splash',enabled:true,mode:['DEMO','INTERACTIVE','ISOLATED'],inputs:['intensity','direction'],outputs:['splashIntensity'],subscriptions:['splash'],portable:true},titration:{id:'titration',enabled:true,mode:['INTERACTIVE','ISOLATED'],inputs:['titrant'],outputs:['titrantVolume','titrationPH'],subscriptions:['measurement'],portable:true},flask:{id:'flask',enabled:true,mode:['LIVE','ISOLATED','LINKED'],inputs:['volume','temperature'],outputs:['reaction'],subscriptions:['add','tick','reset'],portable:true},testTube:{id:'testTube',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['volume','temperature'],outputs:['observation'],subscriptions:['add','reset'],portable:true},cooler:{id:'cooler',enabled:true,mode:['LIVE','INTERACTIVE','LINKED','ISOLATED'],inputs:['temperature'],outputs:['coolingPower','coolantOutletTemperature'],subscriptions:['tick'],portable:true},gasLine:{id:'gasLine',enabled:true,mode:['LIVE','LINKED','ISOLATED'],inputs:['gas','gasVolume'],outputs:['gasFlow'],subscriptions:['tick','measurement'],portable:true},linkView:{id:'linkView',enabled:true,mode:['SNAPSHOT','ISOLATED'],inputs:[],outputs:[],subscriptions:[],portable:true}});
function mountEffect(id,host,opt){opt=opt||{};const wrap=el('div');wrap.dataset.effect=id;wrap.style.cssText='position:relative;min-height:'+(opt.height||170)+'px;border:1px solid var(--border,#e2e8f0);border-radius:12px;overflow:hidden;background:var(--surface-soft,#f1f5f9)';host.appendChild(wrap);const cv=el('canvas');cv.style.cssText='width:100%;height:100%;display:block';wrap.appendChild(cv);const ctx=cv.getContext('2d');let raf=0,t0=performance.now();function size(){const d=Math.min(g.devicePixelRatio||1,2),W=wrap.clientWidth||300,H=opt.height||170;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);return[W,H]}function frame(t){if(!cv.isConnected){cancelAnimationFrame(raf);return}const[W,H]=size();ctx.clearRect(0,0,W,H);const q=(t-t0)/1000;if(id==='heatGlow'){const pulse=.5+.5*Math.sin(q*3);ctx.fillStyle='rgba(240,120,30,'+(0.08+0.12*pulse)+')';ctx.beginPath();ctx.arc(W/2,H/2,25+28*pulse,0,7);ctx.fill()}else if(id==='bubbles'){for(let i=0;i<18;i++){const x=20+(i*37)%Math.max(40,W-40),y=H-((q*28+i*17)%(H-20));ctx.strokeStyle='rgba(70,150,190,.55)';ctx.beginPath();ctx.arc(x,y,2+(i%3),0,7);ctx.stroke()}}else if(id==='fumes'){for(let i=0;i<14;i++){const x=W/2+Math.sin(q*.7+i)*28+(i-7)*4,y=H-((q*20+i*13)%(H-20));ctx.fillStyle='rgba(120,120,120,.16)';ctx.beginPath();ctx.arc(x,y,6+(i%4),0,7);ctx.fill()}}else if(id==='ripples'){for(let i=0;i<5;i++){const f=((q*.6+i*.2)%1);ctx.strokeStyle='rgba(50,130,170,'+(1-f)*.5+')';ctx.beginPath();ctx.ellipse(W/2,H/2,20+f*W*.3,7+f*25,0,0,7);ctx.stroke()}}else if(id==='splash'){const f=q%1;ctx.fillStyle='rgba(40,130,180,.65)';for(let i=0;i<12;i++){const a=i/12*6.28,rr=f*(25+i%4*10);ctx.beginPath();ctx.arc(W/2+Math.cos(a)*rr,H*.52+Math.sin(a)*rr,2+(i%3),0,7);ctx.fill()}}raf=requestAnimationFrame(frame)}raf=requestAnimationFrame(frame);return{host:wrap,destroy:()=>cancelAnimationFrame(raf)}}
C.LAB.VISUALS={effects:EFFECTS,effectRegistry:EFFECT_REGISTRY,vessels:VESSELS,registry:VISUALS,panelSchema:PANEL_SCHEMA,register:registerVisual,get:id=>VISUALS[id]||null,effect:id=>EFFECT_REGISTRY[id]||null,mountEffect,defaults:{beaker:Object.keys(EFFECTS).reduce((a,k)=>(a[k]=1,a),{})},configure:(id,opt)=>Object.assign({},(VISUALS[id]&&VISUALS[id].effects)||{},opt||{})};
C.LAB.VISUALS.mountEffect=GFX.mountEffect;C.LAB.VISUALS.gfx=GFX;registerVisual('pHmeter',{kind:'instrument',parts:['body','lcd','scale','electrode'],data:['pH','temperature']});registerVisual('thermometer',{kind:'instrument',parts:['tube','column','scale'],data:['temperature']});registerVisual('burette',{kind:'instrument',parts:['tube','scale','tap','drop'],data:['titrantVolume']});registerVisual('burner',{kind:'vessel',parts:['base','tube','collar','flame'],data:['fuel','phi','power','soot']});registerVisual('cylinder',{kind:'vessel',parts:['body','foot'],data:['gas','volume']});
PANEL_SCHEMA.gasCoreAudit={id:'gasCoreAudit',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['gasSubstances'],outputs:[],subscriptions:['tick','chemistry','reset'],portable:true};PANEL_SCHEMA.chemistryAudit={id:'chemistryAudit',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['chemistry'],outputs:[],subscriptions:['reaction','chemistry','reset'],portable:true};PANEL_SCHEMA.reactionCore={id:'reactionCore',enabled:true,mode:['LIVE','SNAPSHOT','LINKED','ISOLATED'],inputs:['reaction'],outputs:['reactionResult'],subscriptions:['reaction','reset'],portable:true};PANEL_SCHEMA.precipitation={id:'precipitation',enabled:true,mode:['INTERACTIVE','LINKED','ISOLATED'],inputs:['AgNO3','NaCl'],outputs:['AgCl','reaction'],subscriptions:['reset'],portable:true};
C.LAB.STATIONS=STATIONS;C.LAB.PANELS={names:PNAMES,titles:TITLES,portable:['scenarios','chemistryAudit','coreConsistencyAudit','gasCoreAudit','gasParallelAudit','reactionCore','precipitation','beaker','flask','testTube','cooler','gasLine','pHmeter','thermometer','effectLab','library','paper','pipette','balance','molTank','roundFlask','volFlask','funnel','petri','evapDish','gasTrap','combustion','thermal','splash','titration','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureStation','reactionCatalog','workflow','ph','temp','steps','reactionTable','measureChart','comparisonChart','eq','obs','log'],planned:[]};
const cardSty='border:1px solid var(--border,#e2e8f0);border-radius:14px;padding:12px 14px 14px;background:var(--surface,#fff);min-width:0';
function panel(name,host,o){o=o||{};const own=!o.session,lab=session(o.session,o);if(!P[name])return null;const w=el('div');w.dataset.panel=name;lab.hosts.push(w);host.appendChild(w);P[name](w,lab,o);const api={host:w,lab,name,destroy(){if(api.destroyed)return false;api.destroyed=true;if(w.parentNode)w.parentNode.removeChild(w);const i=lab.hosts.indexOf(w);if(i>=0)lab.hosts.splice(i,1);if(own)lab.destroy();return true}};return api}
function mount(host,opt){opt=opt||{};if(opt.preset&&C.LABVIEW.presets[opt.preset])opt=Object.assign({},C.LABVIEW.presets[opt.preset],opt);host.innerHTML='';
 const lab=session(opt.session||('m'+Date.now()+Math.random()),opt); if(C.LAB.REACTION_LINKS&&C.LAB.REACTION_LINKS.bind)C.LAB.REACTION_LINKS.bind(lab); const names=(opt.panels||PNAMES).filter(n=>P[n]&&!(opt.off||[]).includes(n)),box=el('div');
 box.style.cssText='display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))';host.appendChild(box);const wr={},panelApis=[];
 names.forEach(n=>{const c=el('div');c.style.cssText=cardSty+(FULL[n]?';grid-column:1/-1':'');if(opt.titles!==false)c.appendChild(el('div','lb-h',TITLES[n]));
  const b=el('div');b.style.marginTop='6px';c.appendChild(b);box.appendChild(c);wr[n]=c;lab.hosts.push(b);P[n](b,lab,opt);panelApis.push({name:n,host:b,container:c})});
 if(opt.toggle!==false&&names.length>2){const d=el('details',null,'<summary style="cursor:pointer;font-size:13px;font-weight:700">Panele (pokaż / ukryj)</summary>');const row=el('div');row.style.cssText='display:flex;flex-wrap:wrap;gap:6px 14px;padding:6px 0';
  names.forEach(n=>{const l=el('label',null,'<input type="checkbox" checked> '+TITLES[n]);l.style.cssText='font-size:13px;display:flex;gap:5px;align-items:center';l.firstChild.onchange=e=>{wr[n].style.display=e.target.checked?'':'none'};row.appendChild(l)});d.appendChild(row);host.insertBefore(d,box)}
 const api={host,lab,names,panelApis,destroy(){if(api.destroyed)return false;api.destroyed=true;if(box.parentNode)box.parentNode.removeChild(box);return lab.destroy()}};return api}

C.LAB.REACTION_ENGINE={version:'0.91',
 create:function(spec){
  spec=spec||{}; return {id:spec.id||'reaction',equation:spec.equation||'',reactants:spec.reactants||[],products:spec.products||[],conditions:spec.conditions||{},energy:spec.energy||null};
 },
 limit:function(reaction,amounts){
  var best=Infinity,lim=null;
  (reaction.reactants||[]).forEach(function(r){var n=Number(amounts&&amounts[r.id]||0),nu=Math.max(1,Number(r.coeff||1)),q=n/nu;if(q<best){best=q;lim=r.id;}});
  return {extent:isFinite(best)?best:0,limiting:lim};
 },
 run:function(reaction,amounts){
  var x=this.limit(reaction,amounts),out={extent:x.extent,limiting:x.limiting,consumed:{},formed:{}};
  (reaction.reactants||[]).forEach(function(r){out.consumed[r.id]=x.extent*Number(r.coeff||1);});
  (reaction.products||[]).forEach(function(r){out.formed[r.id]=x.extent*Number(r.coeff||1);});
  return out;
 }
};
C.LABVIEW={mount,panel,session,panels:PNAMES,panelSchema:PANEL_SCHEMA,linker:LINKER,embed:(host,opt)=>mount(host,Object.assign({mode:'LESSON'},opt||{})),graphSchema:STATIONS,exportSession:id=>{const l=SESS[id];return l?l.snapshot():null},importSession:(id,snap)=>{const l=session(id||snap&&snap.session);return l.restore(snap)?l:null},manifest:()=>({version:C.LAB.version,api:'0.95',stations:STATIONS,panels:PANEL_SCHEMA,visuals:VISUALS,effects:EFFECT_REGISTRY,vessels:VESSELS,workflow:true}),presets:{acids:{exclude:['Na','K','Ca'],panels:['controls','beaker','obs','eq','ph','bhp','seq','log']},oxides:{groups:['water','acid','base','oxide','carb','ind'],exclude:['Na','K'],panels:['controls','beaker','obs','eq','ph','bhp','seq','log']},l02:{groups:['water','acid','base','oxide','carb','ind'],exclude:['Na','K','Ag'],panels:['controls','beaker','obs','eq','ph','bhp','seq','log']},all:{},minimal:{panels:['beaker','ph','obs']},titration:{panels:['titration','reactionCore','measureChart','comparisonChart']},gas:{panels:['beaker','gasTrap','gasAnalysis','gasMeasurement','gasCompare','measureChart','obs']},gasFlow:{panels:['stationBoard','beaker','gasLine','gasTrap','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureChart','workflow']},thermal:{panels:['stationBoard','flask','cooler','thermal','temp','measureChart']},precipitation:{panels:['stationBoard','precipitation','reactionCore','beaker','obs','reactionTable','steps']},combustion:{panels:['stationBoard','combustion','reactionCore','measureChart','comparisonChart']},stations:{panels:['flask','gasLine','gasTrap','cooler','gasAnalysis','combustion','thermal','splash','titration','measureStation','workflow','measureChart']},catalog:{panels:['reactionCatalog','reactionTable','eq','bhp']}},visuals:VISUALS,effects:EFFECTS,vessels:VESSELS};

C.LAB.REACTION_CATALOG=C.LAB.REACTION_CATALOG||{
  version:'0.90',
  items:[
    {id:'comb-h2',eq:'2 H2 + O2 -> 2 H2O',reactants:[['H2',2],['O2',1]],products:[['H2O',2]],conditions:{ignition:true},energy:{type:'exothermic'}},
    {id:'comb-ch4',eq:'CH4 + 2 O2 -> CO2 + 2 H2O',reactants:[['CH4',1],['O2',2]],products:[['CO2',1],['H2O',2]],conditions:{ignition:true},energy:{type:'exothermic'}},
    {id:'mg-o2',eq:'2 Mg + O2 -> 2 MgO',reactants:[['Mg',2],['O2',1]],products:[['MgO',2]],conditions:{ignition:true},energy:{type:'exothermic'}},
    {id:'prec-agcl',eq:'AgNO3 + NaCl -> AgCl + NaNO3',reactants:[['AgNO3',1],['NaCl',1]],products:[['AgCl',1],['NaNO3',1]],conditions:{aqueous:true},energy:{type:'neutral'}}
  ]
};
C.LAB.BALANCER=C.LAB.BALANCER||{version:'0.91',balanceSimple:function(formulas){
  if(!Array.isArray(formulas)||!formulas.length)return {ok:false,reason:'empty'};
   
  return {ok:true,coefficients:formulas.map(x=>x.coeff||1),mode:'simple-preserve'};
}};
C.LAB.OBSERVATIONS=C.LAB.OBSERVATIONS||{version:'0.91',events:[],record:function(o){this.events.push(Object.assign({t:Date.now()},o));return o},clear:function(){this.events=[]},list:function(){return this.events.slice()}};
if(C.LAB.REACTION_ENGINE){
  const _run=C.LAB.REACTION_ENGINE.run;
  C.LAB.REACTION_ENGINE.run=function(r,opt){
    const out=_run? _run.call(this,r,opt||{}):null;
    if(out && C.LAB.OBSERVATIONS) C.LAB.OBSERVATIONS.record({kind:'reaction',reaction:r.id||r.eq||'unknown',result:out});
    return out;
  };
}

C.LAB.REACTION_API=C.LAB.REACTION_API||{
  version:'0.91',
  get:function(id){return (C.LAB.REACTION_CATALOG.items||[]).find(function(x){return x.id===id})||null},
  list:function(){return (C.LAB.REACTION_CATALOG.items||[]).slice()},
  observe:function(kind,data){return C.LAB.OBSERVATIONS.record({kind:kind,data:data})}
};
 
(function(C){
  const gcd=(a,b)=>{a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=a%b;a=b;b=t}return a||1};
  const lcm=(a,b)=>Math.abs(a*b)/gcd(a,b)||1;
  function parseFormula(f){
    const out={}; if(!f||typeof f!=='string')return out;
    const re=/([A-Z][a-z]?)(\d*(?:\.\d+)?)|\(([^)]+)\)(\d+(?:\.\d+)?)/g; let m;
    while((m=re.exec(f))){
      if(m[1]) out[m[1]]=(out[m[1]]||0)+(m[2]?Number(m[2]):1);
      else if(m[3]){
        const mult=Number(m[4]||1), sub=parseFormula(m[3]);
        Object.keys(sub).forEach(k=>out[k]=(out[k]||0)+sub[k]*mult);
      }
    }
    return out;
  }
  function rref(A){
    A=A.map(r=>r.slice()); const rows=A.length, cols=A[0]?.length||0; let lead=0;
    for(let r=0;r<rows&&lead<cols;r++){
      let i=r; while(i<rows&&Math.abs(A[i][lead])<1e-10)i++;
      if(i===rows){lead++;r--;continue}
      [A[i],A[r]]=[A[r],A[i]]; const d=A[r][lead]; A[r]=A[r].map(x=>x/d);
      for(let j=0;j<rows;j++) if(j!==r){const q=A[j][lead]; if(Math.abs(q)>1e-10) A[j]=A[j].map((x,k)=>x-q*A[r][k])}
      lead++;
    } return A;
  }
  function balance(reactants,products){
    const all=[...reactants,...products], els=[...new Set(all.flatMap(x=>Object.keys(parseFormula(x.formula))))];
    const n=all.length, A=els.map(e=>all.map((x,i)=>(i<reactants.length?-1:1)*(parseFormula(x.formula)[e]||0)));
    if(!n)return {ok:false,error:'Brak wzorów'};
    
    const M=A.map(row=>row.slice(0,n-1).concat([-row[n-1]]));
    const R=rref(M), x=new Array(n-1).fill(0);
    let piv=0; for(let i=0;i<R.length;i++){let p=R[i].findIndex(v=>Math.abs(v)>1e-9); if(p>=0&&p<n-1){x[p]=R[i][n-1];piv++}}
    x.push(1);
    if(x.some(v=>!Number.isFinite(v)))return {ok:false,error:'Układ nieoznaczony lub osobliwy'};
    let den=1; x.forEach(v=>{const d=(String(v).split('.')[1]||'').length; den=lcm(den,10**Math.min(d,6))});
    let ints=x.map(v=>Math.round(v*den)); const g=ints.reduce(gcd); ints=ints.map(v=>v/g);
    if(ints.some(v=>v<=0))return {ok:false,error:'Brak dodatnich współczynników dla zadanego układu'};
    const left=reactants.map((x,i)=>ints[i]+x.formula).join(' + '), right=products.map((x,i)=>ints[reactants.length+i]+x.formula).join(' + ');
    const balanceCheck=els.map(e=>{const L=reactants.reduce((q,x,i)=>q+ints[i]*(parseFormula(x.formula)[e]||0),0),R=products.reduce((q,x,i)=>q+ints[reactants.length+i]*(parseFormula(x.formula)[e]||0),0);return {element:e,left:L,right:R,ok:Math.abs(L-R)<1e-8}});
    return {ok:true,coefficients:ints,elements:els,balance:balanceCheck,equation:left+' → '+right};
  }
  C.LAB.STOICH={version:'0.91',parseFormula,balance};
})(window.CHE=window.CHE||{});
 
(function(C){
  const RE=C.LAB.REACTION_ENGINE;
  const CAT=C.LAB.REACTION_CATALOG;
  const OBS=C.LAB.OBSERVATIONS;
  function catReaction(id){
    const x=(CAT&&CAT.items||[]).find(r=>r.id===id); if(!x)return null;
    return {id:x.id,equation:x.eq,reactants:(x.reactants||[]).map(a=>({id:a[0],coeff:a[1]})),products:(x.products||[]).map(a=>({id:a[0],coeff:a[1]})),conditions:x.conditions||{},energy:x.energy||null};
  }
  function run(id,amounts,yieldFrac){
    const r=catReaction(id); if(!r||!RE)return {ok:false,error:'Brak reakcji '+id};
    const raw=RE.run(r,amounts||{}), y=Math.max(0,Math.min(1,Number(yieldFrac==null?1:yieldFrac)));
    const formed={};Object.keys(raw.formed||{}).forEach(k=>formed[k]=raw.formed[k]*y);
    const consumed=raw.consumed||{};
    const mm=this.molarMass;
    const massOf=(map)=>Object.keys(map||{}).reduce((q,k)=>q+Number(map[k]||0)*Number(mm(k)||0),0);
    const theoreticalMass=massOf(raw.formed||{}), consumedMass=massOf(consumed), actualMass=massOf(formed);
    const result=Object.assign({},raw,{yield:y,theoretical:raw.formed||{},actual:formed,consumed,theoreticalMassKg:theoreticalMass,consumedMassKg:consumedMass,actualMassKg:actualMass,massBalanceTheoreticalKg:consumedMass-theoreticalMass,massBalanceActualKg:consumedMass-actualMass,ledger:{status:Math.abs(consumedMass-theoreticalMass)<1e-9?'PASS':'CHECK'}});
    OBS&&OBS.record({kind:'reactionRun',reaction:id,result:result});
    C.LAB.lastReaction=result; return result;
  }
  function molarMass(id){const M={H2:0.002016,O2:0.031998,CH4:0.016043,C3H8:0.044097,Mg:0.024305,H2O:0.01801528,CO2:0.0440095,CO:0.0280101,MgO:0.0403044,AgNO3:0.1698731,NaCl:0.05844,AgCl:0.1433212,NaNO3:0.0849947,HCl:0.03646,NaOH:0.04};return M[id]||0;}
  C.LAB.REACTION_LINKS={version:'0.91',run:run,catalog:catReaction,molarMass:molarMass,
    combustion:{H2:'comb-h2',CH4:'comb-ch4',C3H8:'comb-c3h8',Mg:'mg-o2'},
    precipitation:'prec-agcl',titration:'acid-base-neutralization'};
   
  if(CAT&&!CAT.items.some(x=>x.id==='acid-base-neutralization'))CAT.items.push({id:'acid-base-neutralization',eq:'HCl + NaOH → NaCl + H₂O',reactants:[['HCl',1],['NaOH',1]],products:[['NaCl',1],['H2O',1]],conditions:{aqueous:true},energy:{type:'exothermic'}});
  if(CAT&&!CAT.items.some(x=>x.id==='comb-c3h8'))CAT.items.push({id:'comb-c3h8',eq:'C3H8 + 5 O2 → 3 CO2 + 4 H2O',reactants:[['C3H8',1],['O2',5]],products:[['CO2',3],['H2O',4]],conditions:{ignition:true},energy:{type:'exothermic'}});
  P.chemistryAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const render=()=>{const c=lab.chemistry||{},rows=Object.values(c.substances||{}),r=c.last;const flags=[{n:'REAKCJA',v:r?'wspólny REACTION_ENGINE':'brak przebiegu'},{n:'STECHIOMETRIA',v:r?'STOICH / katalog':'oczekuje'},{n:'POMIARY',v:'wspólne lab.measurements'},{n:'TEMPERATURA',v:'wspólny model cieplny'},{n:'pH',v:'model stanu zlewki — wizualizacja/obliczenie pomocnicze'},{n:'GAZ',v:'SUBSTANCE + model gazowy'}];box.innerHTML='<div style="'+cardSty+'"><b>Audyt źródeł danych</b>'+flags.map(x=>'<div style="margin-top:4px"><b>'+x.n+':</b> '+x.v+'</div>').join('')+'</div><div style="'+cardSty+'"><b>Substancje w rdzeniu</b><br>'+(rows.length?rows.map(x=>x.id+' · '+Number(x.amountMol||0).toFixed(6)+' mol · '+(x.phase||'—')).join('<br>'):'brak zapisanych substancji')+'</div><div style="'+cardSty+'"><b>Ostatni bilans:</b> '+(r?(r.equation||r.id)+' · '+(r.ledger&&r.ledger.status||'CHECK'):'brak reakcji')+'</div>'};lab.on('reaction',render);lab.on('chemistry',render);lab.on('reset',render);render()};
  P.gasCoreAudit=(h,lab)=>{const render=()=>{const c=lab.chemistry||{},s=c.substances||{},g=lab.gasTrapState||{},keys=['CO2','CO','H2O','O2','fuel','MgO','H2O_liquid'];const rows=keys.filter(k=>s[k]).map(k=>{const x=s[k];return '<tr><td>'+k+'</td><td>'+Number(x.amountMol||0).toFixed(6)+'</td><td>'+Number(x.massKg||0).toFixed(6)+'</td><td>'+x.phase+'</td><td>'+((x.source||'')||'—')+'</td></tr>'}).join('');h.innerHTML='<div style="'+cardSty+'"><b>Audyt wspólnego modelu gazu</b><br><small>Odbiornik gazu jest źródłem stanu, a ilości molowe są synchronizowane z CHE.LAB chemistry.substances.</small></div><div style="'+cardSty+';overflow:auto"><table style="width:100%;border-collapse:collapse"><tr><th>Substancja</th><th>mol</th><th>kg</th><th>faza</th><th>źródło</th></tr>'+(rows||'<tr><td colspan="5">Brak zarejestrowanych substancji gazowych</td></tr>')+'</table></div><div style="'+cardSty+'">Źródło objętości: <b>gasTrap</b> · V = '+Number(g.volume||0).toFixed(4)+' L · p = '+Number(g.pressure||0).toFixed(0)+' Pa · T = '+Number(g.temp||25).toFixed(1)+' °C</div>'};lab.on('tick',render);lab.on('chemistry',render);lab.on('reset',render);render()};
P.coreConsistencyAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const render=()=>{const c=lab.chemistry||{},m=lab.measurementSchema||{},issues=[],checks=[];const add=(name,ok,detail)=>{checks.push({name,ok,detail});if(!ok)issues.push(name+': '+detail)};add('CHE.LAB.version',!!C.LAB.version,'wersja '+C.LAB.version);add('REACTION_ENGINE',!!(C.LAB.REACTION_ENGINE||C.LAB.REACTION_LINKS),'rdzeń reakcji dostępny');add('STOICH',!!C.LAB.STOICH,'solver stechiometryczny dostępny');add('SUBSTANCE',!!c.substances,'centralny magazyn substancji dostępny');add('AMOUNT',Object.values(c.substances||{}).every(x=>Number.isFinite(Number(x.amountMol))&&Number(x.amountMol)>=0),'ilości molowe są nieujemne i liczbowe');add('MEASUREMENT',!!lab.record&&!!lab.measurements,'wspólny dziennik pomiarów dostępny');add('pH',!!m.pH&&m.pH.source==='pH(state)','pH ma jawne źródło');add('TEMPERATURE',!!m.thermalTemperature&&m.thermalTemperature.source==='thermalState.T','temperatura ma jawne źródło wspólnego modelu cieplnego');add('GAS',!!m.gasVolume&&!!m.exhaustMoles,'gaz ma objętość i ilość molową');add('MASS',Object.keys(m).filter(k=>k==='mass').length===1,'brak zduplikowanego klucza mass w schema');const r=c.last;add('REACTION_RESULT',!r||!!(r.equation||r.id),'ostatni wynik reakcji ma identyfikator');const status=issues.length?'BLOCK':'PASS';box.innerHTML='<div style="'+cardSty+'"><b>'+status+'</b> · końcowy audyt wspólnego modelu</div>'+checks.map(x=>'<div style="'+cardSty+'"><b>'+(x.ok?'PASS':'BLOCK')+'</b> · '+x.name+' — '+x.detail+'</div>').join('')};lab.on('reaction',render);lab.on('chemistry',render);lab.on('measurement',render);lab.on('reset',render);render()};
  P.gasParallelAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:6px';h.appendChild(box);const render=()=>{const d=lab.gasTrapState||{},a=lab.chemistry.auditGas(d),items=[['gasTrap.moles','lokalne ilości'],['chemistry.substances','wspólne substancje'],['gasSample','próbka'],['gasSeparator','fazy'],['gasAbsorber','absorpcja'],['gasMeasurement','pomiar']];box.innerHTML='<div style="'+cardSty+'"><b>'+(a.ok?'PASS':'BLOCK')+'</b> · zgodność lokalnego odbiornika ze wspólnym modelem'+(a.issues.length?'<br>'+a.issues.join('<br>'):'')+'</div>'+items.map(x=>'<div style="'+cardSty+'"><b>'+x[0]+'</b> · '+x[1]+'</div>').join('')};lab.on('chemistry',render);lab.on('reset',render);render()};
P.reactionCore=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const out=el('div');box.appendChild(out);function render(){const r=C.LAB.lastReaction;if(!r){out.innerHTML='<div style="'+cardSty+'">Brak wykonanej reakcji.</div>';return}out.innerHTML='<div style="'+cardSty+'"><b>Reakcja:</b> '+(r.equation||r.id)+'<br><b>Reagent ograniczający:</b> '+(r.limiting||'—')+' · <b>postęp:</b> '+Number(r.extent||0).toFixed(6)+' mol · <b>wydajność:</b> '+(100*Number(r.yield==null?1:r.yield)).toFixed(1)+'%</div><div style="'+cardSty+'"><b>Produkty rzeczywiste:</b> '+Object.entries(r.actual||{}).map(([k,v])=>k+' '+Number(v).toFixed(6)+' mol').join(' · ')+'<br><b>Bilans masy teoretyczny:</b> '+(Number(r.massBalanceTheoreticalKg||0)*1000).toFixed(6)+' g · '+(r.ledger&&r.ledger.status||'CHECK')+'</div>'}lab.on('tick',render);lab.on('reset',render);lab.on('reaction',render);render()};
  P.precipitation=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:7px';c.innerHTML='<label>AgNO₃ [mol]<input class="a" type="number" min="0" step="0.0001" value="0.001" style="width:100%"></label><label>NaCl [mol]<input class="b" type="number" min="0" step="0.0001" value="0.001" style="width:100%"></label><label>Wydajność [%]<input class="y" type="number" min="0" max="100" value="100" style="width:100%"></label><button class="run" style="padding:7px 10px">Wykonaj strącanie</button>';box.appendChild(c);const out=el('div');box.appendChild(out);c.querySelector('.run').onclick=()=>{const r=C.LAB.REACTION_LINKS.run('prec-agcl',{AgNO3:+c.querySelector('.a').value,NaCl:+c.querySelector('.b').value},+c.querySelector('.y').value/100);lab.emit('reaction',r);out.innerHTML='<div style="'+cardSty+'"><b>AgCl:</b> '+Number((r.actual||{}).AgCl||0).toFixed(6)+' mol · '+(Number((r.actual||{}).AgCl||0)*0.1433212*1000).toFixed(3)+' g</div><div style="'+cardSty+'">Reagent ograniczający: '+(r.limiting||'—')+'</div>'};};
   
  C.LAB._reactionAccum={combustion:0,titration:0};
   
  const bindCombustion=(lab)=>{
    if(lab.__reactionCombustion)return;lab.__reactionCombustion=true;
    lab.on('combustion',function(d){
      const id=C.LAB.REACTION_LINKS.combustion[d.fuel]; if(!id)return;
      const M=C.LAB.REACTION_LINKS.molarMass(d.fuel)||0;
      if(!M)return;
      const dt=(window.CHE&&CHE.LAB&&CHE.LAB.HEAT&&CHE.LAB.HEAT.step)||0.5;
      const fuelMol=Math.max(0,Number(d.massFlow||0))*dt/M;
      const o2Mol=Math.max(0,Number(d.o2Available||0))*dt/0.031998;
      const y=Math.max(0,Math.min(1,Number(d.efficiency==null?1:d.efficiency)));
      const rr=C.LAB.REACTION_LINKS.run(id,Object.assign({},{[d.fuel]:fuelMol,O2:o2Mol}),y);
      rr.source='combustion';rr.mode='theoretical-common-reaction';
      lab.emit('reaction',rr);
    });
  };
  const bindTitration=(lab)=>{
    if(lab.__reactionTitration)return;lab.__reactionTitration=true;
    lab.on('measurement',function(m){
      if(m.kind!=='titrantVolume')return;
      const V_L=Math.max(0,Number(m.value||0))*0.001;
      const c=0.1, hcl=0.0008, naoh=V_L*c;
      const rr=C.LAB.REACTION_LINKS.run('acid-base-neutralization',{HCl:hcl,NaOH:naoh},1);
      rr.source='titration';rr.volume=m.value;rr.titrantConcentration=c;
      lab.emit('reaction',rr);
    });
  };
  const bindPrecipitation=(lab)=>{if(lab.__reactionPrecip)return;lab.__reactionPrecip=true;lab.on('reaction',function(r){if(r&&r.source==='precipitation')lab.record('precipitateAmount',Number(r.actual&&r.actual.AgCl||0),'mol',{reaction:r.id})})};
   
  const syncReaction=(lab,r)=>{if(!r||!r.id)return;r._central=true;const c=lab.chemistry;c.last=r;c.reactions.push({t:lab.t,id:r.id,limiting:r.limiting,extent:r.extent,yield:r.yield,theoretical:r.theoretical,actual:r.actual,consumed:r.consumed,mass:r.ledger});Object.keys(r.consumed||{}).forEach(k=>c.upsert(k,-Number(r.consumed[k]||0),'consumed',{source:'reaction'}));Object.keys(r.actual||{}).forEach(k=>c.upsert(k,Number(r.actual[k]||0),'product',{source:'reaction'}));lab.record('reactionExtent',Number(r.extent||0),'mol',{reaction:r.id,limiting:r.limiting,yield:r.yield,massBalance:r.ledger});lab.emit('chemistry',c.snapshot())};
  C.LAB.REACTION_LINKS.bind=function(lab){bindCombustion(lab);bindTitration(lab);bindPrecipitation(lab);lab.on('reaction',r=>syncReaction(lab,r));return true};

  if(C.LAB._reactionBound!==true){
    C.LAB._reactionBound=true;
    C.LAB._reactionTickUnsub=C.LAB.session?null:null;
  }
})(window.CHE=window.CHE||{});

try{C.LAB.syncFromEngine&&C.LAB.syncFromEngine();if(C.ENGINE&&C.ENGINE.modules)C.ENGINE.modules.LAB=C.LAB.version;if(C.ENGINE&&C.ENGINE.registry)C.ENGINE.registry.LAB={layer:'LAB',owner:'CHE.LAB',role:'zlewka modułowa + mostek DATA/COLORS/EQUIL',depends:['DATA','COLORS','EQUILIBRIUM']};console.info('[CHE.LAB v'+C.LAB.version+'] engineBound',C.LAB.engineBound);}catch(e){try{console.warn('[CHE.LAB sync]',e)}catch(_){}}
})(window);
