/* ===== CHE.PHYS v1.0 — wspólna fizyka zjawisk (bez rysowania) =====
   Jedno źródło dla: efektów GFX, lekcji, doświadczeń i Atlasu (karty gazów / pierwiastków).
   płomień (paliwo, φ, sól) · ciało doskonale czarne (żarzenie) · gazy (gęstość wzgl. powietrza, testy, barwa)
   prężność pary / wrzenie (H₂O, etanol, aceton) · pęcherzyki (prędkość wznoszenia, liczba z szybkości wydzielania gazu)
   osady (opadanie Stokesa, pokrój) · cząsteczki (v_rms, rozkład Maxwella).
   Barwy: CHE.COLORS (flame-*, gas-*, ppt-*) — tu tylko zapas, gdy bazy brak. Masy molowe: CHE.CHEM.molarMass, zapas lokalny. */
(function(){
const P={version:'1.1'},R=8.314462618,G=9.81,M_AIR=28.96,P0=101.325;
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*cl(t,0,1)),sstep=(a,b,x)=>{const t=cl((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const hex=h=>{h=String(h||'').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');const n=parseInt(h,16);return isFinite(n)?[n>>16&255,n>>8&255,n&255]:null};
const COL=(id)=>{const K=C.COLORS;try{if(K&&K.get){const r=K.get(id);if(r&&r.hex)return hex(r.hex)}}catch(_){}return null};
/* interpolacja w tabeli [[x,y],...] */
const tab=(T,x)=>{if(x<=T[0][0])return T[0][1];for(let i=1;i<T.length;i++)if(x<=T[i][0]){const a=T[i-1],b=T[i];return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0])}return T[T.length-1][1]};

/* ---------- masa molowa: silnik → zapas ---------- */
const MM={H2:2.016,He:4.003,CH4:16.04,NH3:17.03,H2O:18.02,C2H2:26.04,CO:28.01,N2:28.01,C2H4:28.05,NO:30.01,O2:32.00,H2S:34.08,HCl:36.46,Ar:39.95,CO2:44.01,C3H8:44.10,N2O:44.01,NO2:46.01,C2H5OH:46.07,C4H10:58.12,SO2:64.07,Cl2:70.90,O3:48.00,CH3COCH3:58.08};
P.molarMass=f=>{try{const m=C.CHEM&&C.CHEM.molarMass&&C.CHEM.molarMass(f);const v=typeof m==='number'?m:m&&(m.value||m.M||m.molarMass);if(v>0)return v}catch(_){}return MM[f]||null};

/* ---------- ciało doskonale czarne (żarzenie metalu, sadza w płomieniu, drut w żarówce) ---------- */
/* T [K] → [r,g,b] (przybliżenie Tannera Hellanda, 1000–40000 K) */
P.blackbody=Tk=>{const t=cl(Tk,600,40000)/100;let r,g,b;
 r=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592);
 g=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492);
 b=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[r,g,b].map(v=>Math.round(cl(v,0,255)))};
/* widoczność żarzenia: punkt Drapera ~525 °C; T [°C] → {rgb, a (0..1), name} */
P.glow=Tc=>{const Tk=Tc+273.15,a=sstep(500,1300,Tc);const name=Tc<500?'brak żarzenia':Tc<650?'ciemnowiśniowy':Tc<850?'wiśniowy':Tc<1000?'jasnoczerwony':Tc<1200?'pomarańczowy':Tc<1400?'żółty':'biały';return{rgb:P.blackbody(Tk),a,name}};

/* ---------- barwy płomienia (próba płomieniowa): CHE.COLORS flame-* = źródło prawdy ---------- */
const FL_FB={Li:[225,29,72],Na:[255,179,0],K:[179,136,255],Ca:[234,88,12],Sr:[220,38,38],Ba:[163,230,53],Cu:[34,197,94],B:[74,222,128],Rb:[192,132,252],Cs:[129,140,248]};
const FL_NM={Li:'lit — karminowy',Na:'sód — żółty',K:'potas — fioletowy (przez szkło kobaltowe)',Ca:'wapń — ceglastoczerwony',Sr:'stront — karminowoczerwony',Ba:'bar — żółtozielony',Cu:'miedź — zielony / niebieskozielony',B:'bor — zielony',Rb:'rubid — czerwonofioletowy',Cs:'cez — niebieskofioletowy'};
P.flameColor=sym=>{if(!sym)return null;const s=String(sym);return COL('flame-'+s.toLowerCase())||FL_FB[s]||null};
P.flameName=sym=>FL_NM[sym]||sym;
P.flameColors=()=>{const o={};Object.keys(FL_FB).forEach(k=>o[k]=P.flameColor(k));try{(C.COLORS&&C.COLORS.list?C.COLORS.list('flame'):[]).forEach(r=>{const k=r.name;if(k&&!o[k])o[k]=hex(r.hex)})}catch(_){}return o};
P.flameNames=()=>{const o={};Object.keys(P.flameColors()).forEach(k=>o[k]=P.flameName(k));return o};

/* ---------- paliwa i płomień ---------- */
/* Tad — adiabatyczna temp. spalania z powietrzem przy φ≈1 [K]; lum — φ, od którego płomień premiksowy świeci (sadza);
   diff — płomień dyfuzyjny (świeca, lampa bez dopływu powietrza); vis — widoczność (H₂ prawie niewidoczny); SL — prędkość spalania laminarnego [m/s] */
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
/* φ z przepływów (mol/s lub objętości gazu): φ = (O₂ potrzebny / O₂ dostępny); powietrze = 20,95% O₂ */
P.phi=(fuel,fuelFlow,airFlow)=>{const need=P.o2Need(fuel)*fuelFlow,av=.2095*airFlow;return av>0?need/av:9};
const BLUE_CORE=[45,95,235],BLUE_OUT=[95,160,255],H2_COL=[175,200,255];
/* o: {fuel, phi | air (0..1.6, otwarcie powietrza palnika), power 0..1, salt (symbol pierwiastka), diffusion (bool)} */
P.flame=o=>{o=o||{};const id=FUELS[o.fuel]?o.fuel:'CH4',F=FUELS[id],power=cl(o.power==null?1:o.power,0,1),diff=o.diffusion!=null?!!o.diffusion:!!F.diff;
 let phi=o.phi!=null?o.phi:o.air!=null?1/Math.max(.08,o.air):1;if(diff)phi=Math.max(phi,2.2);
 /* temperatura: maksimum przy φ≈1,05; dyfuzyjny chłodniejszy (porywa powietrze, promieniuje sadza) */
 const dT=phi-1.05,eff=Math.max(.35,1-(phi<1.05?.9:.55)*dT*dT);let Tk=diff?.78*F.Tad:300+(F.Tad-300)*eff;Tk*=.9+.1*power;
 /* sadza: premiks → świeci powyżej lum; dyfuzyjny → stała skłonność paliwa */
 let soot=diff?(F.diffSoot==null?.6:F.diffSoot):sstep(F.lum-.1,F.lum+.45,phi);if(o.soot!=null)soot=Math.max(soot,o.soot);
 const lumRGB=mix(P.blackbody(Math.min(Tk,2000)),[255,226,140],.6)/* sadza ~1800 K; oko widzi jasnożółty (nasycenie) */,salt=o.salt?P.flameColor(o.salt):null;
 let outer=id==='H2'?H2_COL:mix(BLUE_OUT,lumRGB,soot),core=soot>.65?mix([255,220,140],lumRGB,.4):id==='H2'?[205,220,255]:BLUE_CORE;
 if(salt){outer=mix(outer,salt,.85);core=mix(core,salt,.35)}
 const regime=diff?'dyfuzyjny (świecący)':phi<.75?'mieszanka uboga (nadmiar O₂)':phi<=1.15?'około stechiometrii':'mieszanka bogata (za mało O₂)';
 const products=['CO₂','H₂O'].filter((x,i)=>i?F.H>0:F.C>0);if(F.C>0&&phi>1.1)products.push('CO');if(F.C>0&&soot>.3)products.push('C (sadza)');
 /* rozmiary względne: bogaty / dyfuzyjny dłuższy; stożek wewnętrzny ~ przepływ/SL */
 const h=power*(diff?1.25:1)*(1+.55*Math.max(0,phi-1)),cone=diff?0:cl(.42*power*(.37/F.SL)*(phi>1?1+.4*(phi-1):1),.08,.8);
 return{fuel:id,fuelName:F.name,phi,lambda:1/phi,T:Tk,Tc:Tk-273.15,soot,outer:outer.map(Math.round),core:core.map(Math.round),alpha:(salt?Math.max(.65,F.vis):F.vis)*(.35+.65*Math.sqrt(power)),
  h,cone,flickerHz:diff?12:8+4*power,regime,products,salt:o.salt||null,saltName:o.salt?P.flameName(o.salt):null,luminous:soot>.3||!!salt,
  label:(diff?'płomień dyfuzyjny':soot>.3?'płomień świecący, kopcący':'płomień nieświecący (niebieski)')+' · ~'+Math.round(Tk-273.15)+' °C'}};

/* ---------- gazy: dane wspólne dla Atlasu, lekcji i efektów (kierunek oparów) ---------- */
/* col: id CHE.COLORS lub rgb; sol: rozpuszczalność w wodzie; aq: odczyn roztworu; test: wykrywanie w szkole */
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
/* f → rekord + gęstość [g/dm³] w T [°C], p [kPa]; rel = ρ/ρ_powietrza; buoy: >0 unosi się, <0 opada (−1..1) */
P.gas=(f,Tc,pk)=>{const g=GASES[f]||{name:f},M=P.molarMass(f)||29,T=(Tc==null?20:Tc)+273.15,p=pk||P0,rho=p*M/(R*T),rel=M/M_AIR;
 const col=Array.isArray(g.col)?g.col:g.col?COL(g.col):null;
 return Object.assign({},g,{formula:f,M,rho,rel,buoy:cl((1-rel)*1.4,-1,1),moves:rel<.97?'unosi się (lżejszy od powietrza)':rel>1.03?'opada (cięższy od powietrza)':'miesza się z powietrzem',
  color:col,colorName:col?(g.col==='gas-no2'?'brunatny':'barwny'):'bezbarwny',collect:rel<.97?'nad wodą lub do naczynia odwróconego dnem do góry':rel>1.03?(g.sol==='bardzo dobrze'||g.sol==='dobrze'?'do naczynia ustawionego dnem w dół (wypieranie powietrza)':'nad wodą lub do naczynia dnem w dół'):'nad wodą'})};

/* ---------- prężność pary i wrzenie (Antoine: log10 p[mmHg] = A − B/(C+T[°C])) ---------- */
const ANT={H2O:{name:'woda',r:[[1,100,8.07131,1730.63,233.426],[99,374,8.14019,1810.94,244.485]]},C2H5OH:{name:'etanol',r:[[-57,80,8.20417,1642.89,230.3],[77,243,7.68117,1332.04,199.2]]},CH3COCH3:{name:'aceton',r:[[-26,77,7.02447,1161.0,224.0]]}};
P.solvents=ANT;
P.vaporPressure=(Tc,sub)=>{const S=ANT[sub]||ANT.H2O;let a=S.r[0];for(const q of S.r)if(Tc>=q[0])a=q;return Math.pow(10,a[2]-a[3]/(a[4]+Tc))*.133322};/* kPa */
P.boilingPoint=(pk,sub)=>{const S=ANT[sub]||ANT.H2O,p=(pk||P0)/.133322;let best=null;for(const a of S.r){const T=a[3]/(a[2]-Math.log10(p))-a[4];if(T>=a[0]-2&&T<=a[1]+2){best=T;break}}if(best==null){const a=S.r[S.r.length-1];best=a[3]/(a[2]-Math.log10(p))-a[4]}return best};
/* stan cieczy przy T [°C]: parowanie, pęcherzyki przy dnie (wrzenie przechłodzone), wrzenie */
P.boil=(Tc,o)=>{o=o||{};const sub=o.sub||'H2O',p=o.p||P0,Tb=P.boilingPoint(p,sub),T=Tc==null?25:Tc,pv=P.vaporPressure(Math.min(T,Tb+5),sub),x=pv/p;
 const steam=sstep(.28,1,x),cond=sstep(.12,.45,x),nuc=sstep(Tb-14,Tb-2,T),full=sstep(Tb-1.5,Tb+.5,T);
 const regime=T>=Tb-.5?'wrzenie':nuc>.05?'pęcherzyki pary przy dnie (zanikają w chłodniejszej cieczy)':steam>.05?'intensywne parowanie':'parowanie z powierzchni';
 return{sub,Tb,pv,x,steam,cond,bubbles:Math.max(nuc*.35,full),collapse:1-full,regime,boiling:T>=Tb-.5}};

/* ---------- pęcherzyki gazu w wodzie ---------- */
/* prędkość wznoszenia [cm/s] vs średnica [mm] — dane doświadczalne dla wody (czysta/zanieczyszczona średnio) */
const RISE=[[.1,.3],[.2,1.2],[.5,6],[1,13],[1.5,18],[2,22],[3,23],[5,22],[8,24],[15,28]];
P.bubbleRise=dmm=>tab(RISE,cl(dmm,.05,20));
/* szybkość wydzielania gazu → pęcherzyki/s: n [mol/s] lub V [cm³/s]; d [mm] */
P.bubbleRate=(o)=>{o=o||{};const T=(o.T==null?25:o.T)+273.15,V=o.V!=null?o.V:(o.n||0)*R*T/(o.p||P0)*1000,d=o.d||2,Vb=Math.PI*Math.pow(d/10,3)/6;return{V,perSec:V/Vb,d,rise:P.bubbleRise(d)}};
/* wzrost pęcherzyka podczas wznoszenia (spadek ciśnienia hydrostatycznego): d(h)/d0 */
P.bubbleGrow=(depthCm)=>Math.cbrt((P0+G*1000*depthCm/100/1000)/P0);

/* ---------- osady: pokrój i opadanie (Stokes) ---------- */
/* habit: 'serowaty' (AgCl), 'kłaczkowaty' (wodorotlenki — galaretowate kłaczki), 'krystaliczny' (szybko opada), 'drobny' (mleczna zawiesina, długo opada) */
const PPT={'ppt-agcl':['serowaty',5.56,60],'ppt-agbr':['serowaty',6.47,50],'ppt-agi':['serowaty',5.68,40],'ppt-baso4':['drobny',4.5,2],'ppt-caco3':['drobny',2.71,5],'ppt-cu-oh-2':['kłaczkowaty',1.15,80],'ppt-fe-oh-3':['kłaczkowaty',1.1,90],'ppt-fe-oh-2':['kłaczkowaty',1.12,80],'ppt-al-oh-3':['kłaczkowaty',1.08,100],'ppt-zn-oh-2':['kłaczkowaty',1.12,70],'ppt-mg-oh-2':['kłaczkowaty',1.15,60],'ppt-ni-oh-2':['kłaczkowaty',1.12,70],'ppt-co-oh-2':['kłaczkowaty',1.12,70],'ppt-mn-oh-2':['kłaczkowaty',1.12,70],'ppt-cr-oh-3':['kłaczkowaty',1.1,80],'ppt-pbi2':['krystaliczny',6.16,30],'ppt-pbcl2':['krystaliczny',5.85,40],'ppt-cus':['drobny',4.6,3],'ppt-pbs':['drobny',7.6,3],'ppt-ag2s':['drobny',7.2,3],'ppt-fes':['drobny',4.8,4],'ppt-zns':['drobny',4.1,3],'ppt-cds':['drobny',4.8,3],'ppt-ag2cro4':['krystaliczny',5.6,20],'ppt-pbcro4':['drobny',6.1,5],'ppt-bacro4':['drobny',4.5,4],'ppt-caso4':['krystaliczny',2.96,25],'ppt-pbso4':['drobny',6.3,4],'ppt-ag3po4':['serowaty',6.37,30]};
/* v [mm/s] = Δρ g d² / 18μ (woda 20°C: μ=1,0 mPa·s) */
P.stokes=(dum,rhoP,o)=>{o=o||{};const mu=o.mu||1.0e-3,rl=(o.rhoL||1.0)*1000,d=dum*1e-6;return Math.max(0,(rhoP*1000-rl)*G*d*d/(18*mu))*1000};
P.ppt=(id)=>{const q=PPT[id]||['kłaczkowaty',1.15,60],v=P.stokes(q[2],q[1]);let name=null;try{const r=C.COLORS&&C.COLORS.get&&C.COLORS.get(id);name=r&&r.name}catch(_){}
 return{id,name,habit:q[0],rho:q[1],d:q[2],v,settle10cm:100/Math.max(v,1e-3),haze:q[0]==='drobny'?1:q[0]==='kłaczkowaty'?.55:.25}};

/* ---------- cząsteczki: teoria kinetyczna ---------- */
P.vRms=(M,Tc)=>Math.sqrt(3*R*((Tc==null?25:Tc)+273.15)/(M/1000));/* m/s */
P.vMean=(M,Tc)=>Math.sqrt(8*R*((Tc==null?25:Tc)+273.15)/(Math.PI*M/1000));
P.vProb=(M,Tc)=>Math.sqrt(2*R*((Tc==null?25:Tc)+273.15)/(M/1000));
/* losowa prędkość 3D z rozkładu Maxwella (Box–Muller) [m/s] */
P.maxwellSample=(M,Tc,rnd)=>{rnd=rnd||Math.random;const s=Math.sqrt(R*((Tc==null?25:Tc)+273.15)/(M/1000)),n=()=>Math.sqrt(-2*Math.log(1-rnd()))*Math.cos(6.2831853*rnd());return Math.hypot(n()*s,n()*s,n()*s)};
/* gęstość prawdopodobieństwa f(v) — do wykresów w Atlasie/lekcji */
P.maxwellPDF=(v,M,Tc)=>{const m=M/1000,T=(Tc==null?25:Tc)+273.15,a=m/(2*R*T);return 4*Math.PI*Math.pow(a/Math.PI,1.5)*v*v*Math.exp(-a*v*v)};
/* prawo Grahama: szybkość efuzji A/B */
P.graham=(MA,MB)=>Math.sqrt(MB/MA);
/* skala ruchu w animacjach: 1 przy 25 °C, ∝ √T */
P.speedScale=Tc=>Math.sqrt(Math.max(.05,((Tc==null?25:Tc)+273.15)/298.15));

P.audit=()=>{const t=[['Coulomb: 1 µC·1 µC/1 m ≈ 8,99 mN',Math.abs(P.electro.coulomb(1e-6,1e-6,1)-8.99e-3)<1e-4],['elektroskop: indukcja zachowuje ładunek',P.electro.electroscope(0,6,.1,false).Q===0],['wrzenie wody 101,3 kPa ≈ 100 °C',Math.abs(P.boilingPoint(101.325,'H2O')-100)<.5],['wrzenie etanolu ≈ 78 °C',Math.abs(P.boilingPoint(101.325,'C2H5OH')-78.3)<1],['wrzenie wody 70 kPa ≈ 90 °C',Math.abs(P.boilingPoint(70,'H2O')-90)<1.5],
 ['CO₂ cięższy od powietrza',P.gas('CO2').rel>1.4],['H₂ lżejszy',P.gas('H2').rel<.1],['v_rms N₂ 25°C ≈ 515 m/s',Math.abs(P.vRms(28.01,25)-515)<5],['ciało czarne 1500 K czerwonopomarańczowe',P.blackbody(1500)[2]<120],
 ['metan φ=1 ≈ 1950 °C',Math.abs(P.flame({fuel:'CH4',phi:1}).Tc-1950)<120],['metan bogaty świeci',P.flame({fuel:'CH4',phi:1.7}).soot>.6],['barwa Na z CHE.COLORS',!!P.flameColor('Na')]];
 return{ok:t.every(x=>x[1]),tests:t.map(x=>({name:x[0],ok:x[1]}))}};
/* ---------- elektrostatyka (fizyka; wspólne dla widoków fiz-*, lekcji FIZ-01, części GFX electroscope/fieldMap, Atlasu) ---------- */
const EC={e:1.602176634e-19,k:8.9875517923e9,eps0:8.8541878128e-12,me:9.1093837015e-31,mp:1.67262192369e-27};
P.electro={CONST:EC,
 coulomb:(q1,q2,r,er)=>EC.k*q1*q2/((er||1)*r*r),          /* F>0 odpychanie, F<0 przyciąganie [N] */
 field:(q,r,er)=>EC.k*q/((er||1)*r*r),
 fieldAt:(Q,x,y)=>{let ex=0,ey=0;Q.forEach(c=>{const dx=x-c.x,dy=y-c.y,r2=dx*dx+dy*dy+1e-9,r=Math.sqrt(r2),f=EC.k*c.q/r2;ex+=f*dx/r;ey+=f*dy/r});return{x:ex,y:ey}},
 potential:(q,r)=>EC.k*q/r,electrons:q=>q/EC.e,
 share:(q1,q2)=>{const s=(q1+q2)/2;return[s,s]},                /* dotyk identycznych przewodników */
 /* dotyk kilku kul przewodzących naraz: ładunek rozkłada się tak, by potencjały były równe (V = k·q/R) → q_i = Q·R_i/ΣR; identyczne kule → po równo */
 contact:(qs,Rs)=>{const Q=qs.reduce((a,b)=>a+b,0),R=Rs||qs.map(()=>1),S=R.reduce((a,b)=>a+b,0);return R.map(r=>Q*r/S)},
 /* uziemienie: ciało → 0; toEarth > 0 = do ziemi odpłynął ładunek dodatni (czyli elektrony napłynęły z ziemi), toEarth < 0 = elektrony odpłynęły do ziemi */
 ground:q=>({after:0,toEarth:q,electrons:Math.abs(q)/EC.e,dir:q<0?'elektrony odpływają z ciała do ziemi':q>0?'elektrony napływają z ziemi do ciała':'brak przepływu'}),
 /* przepływ przy zmianie ładunku ciała z qa na qb: liczba elektronów i kierunek */
 transfer:(qa,qb)=>{const d=qb-qa;return{dq:d,electrons:Math.abs(d)/EC.e,dir:d<0?'ciało przyjęło elektrony':d>0?'ciało oddało elektrony':'bez zmian'}},
 /* elektroskop: Q — ładunek przewodnika, qr — ładunek pręta, d — odległość (0 dotyk … 1 daleko), ground — uziemienie */
 electroscope:(Q,qr,d,ground)=>{const s=qr*0.5/(1+Math.pow(Math.max(0,d)/0.18,2));const Qt=ground?-2*s:Q,leaves=Qt/2+s,ball=Qt/2-s;return{Q:Qt,ball,leaves,theta:55*(1-Math.exp(-Math.abs(leaves)/4)),induced:s}},
 /* czas rozpływu ładunku po pręcie: τ ≈ R·C, R = ρ·L/A */
 relax:(rho,L,A,Cap)=>rho*(L||0.3)/(A||1e-4)*(Cap||10e-12)};
C.PHYS=P;
})();
