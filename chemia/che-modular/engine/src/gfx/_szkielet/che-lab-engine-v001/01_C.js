

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