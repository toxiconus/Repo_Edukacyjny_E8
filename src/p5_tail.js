/* --- BARWY: jedno źródło (CHE.COLORS), z zapasem gdy go brak --- */
const colors={water:()=>{const K=C.COLORS;return K&&K.water?K.water.slice():WATER.slice()},at:(id,p)=>{const K=C.COLORS;try{return K&&K.at?K.at(id,p):null}catch(_){return null}},rgb:h=>{const K=C.COLORS;if(Array.isArray(h))return h.slice();if(K&&K.rgb)try{return K.rgb(h)}catch(_){}return WATER.slice()},mix:(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*Math.max(0,Math.min(1,t)))),ind:(id,p)=>indCol(id,p),indName};
/* --- ADAPTER REAKCJI: spec widoku (out:[gaz|osad|barwa], colId, l0/l1, ppt, fumes, solid{col,eq,end,t,shape}) + postęp p → stan GFX --- */
function fromReaction(sp,p,extra){sp=sp||{};p=Math.max(0,Math.min(1,p||0));const e=p*p*(3-2*p),out=sp.out||[],has=k=>out.indexOf(k)>=0,l0=sp.l0?colors.rgb(sp.l0):colors.water();let liq=sp.l1?colors.mix(l0,colors.rgb(sp.l1),e):l0;
 /* domieszka barwy jonu tylko, gdy reakcja nie podaje własnej barwy końcowej l1 (inaczej np. wskaźnik pomarańczowy + Cu²⁺ = brąz) */
 if(has('barwa')&&(sp.colId||!sp.l1)){const c=colors.at(sp.colId||'ion-cu2');if(c)liq=colors.mix(liq,colors.rgb(c),.45*e)}
 const ppts=[],pc=sp.pptCol||(has('osad')||sp.ppt?colors.at(sp.ppt||'ppt-agcl'):null);if(pc)ppts.push({col:colors.rgb(pc),eq:2.6*Math.max(0,(p-.25)/.75),metal:false,id:sp.ppt||(has('osad')&&!sp.pptCol?'ppt-agcl':null),habit:sp.habit||null});
 const solids=sp.solid?[{col:sp.solid.col2?colors.mix(colors.rgb(sp.solid.col),colors.rgb(sp.solid.col2),e):colors.rgb(sp.solid.col),eq:(sp.solid.eq||4)*(1-e*(1-(sp.solid.end||0))),t:sp.solid.t||'metal',shape:sp.solid.shape}]:[];
 const env=Math.max(0,Math.min(1,Math.sin(p*Math.PI*.9)+.15))*(p>=1?0:1),plume=sp.solid&&sp.l1&&p>0&&p<1?{col:colors.rgb(sp.l1),k:Math.sin(p*Math.PI)}:null;
 return Object.assign({liquid:liq,level:sp.level||.78,ppts,solids,plume,gas:has('gaz')&&p>0?env:0,foam:sp.foam&&p>0?env*.9:0,bubSize:sp.bubSize||1,bubN:sp.bubN||1,fumes:sp.fumes&&p>0&&p<1.01?Math.min(1,p*4):0,fumeColor:sp.fumeColor||(typeof sp.fumes==='string'&&colors.at(sp.fumes))||null,fumeGas:sp.fumeGas||(sp.fumes==='gas-no2'?'NO2':null),heat:sp.heat&&p>0&&p<1?sp.heat:0,pop:pc?Math.min(1,p*3)*(1-.55*p):0,T:sp.T==null?25:sp.T,turb:sp.turb?sp.turb*e:0},extra||{})}
/* --- RYSOWANIE W GOTOWYM PŁÓTNIE (widoki z M.add: ctx,w,h,czas[s]) --- */
const CP=new WeakMap();
function canvasDraw(ctx,w,h,time,st,o){o=o||{};const key=ctx.canvas||ctx,P=CP.get(key)||{pool:{events:[]},last:time};CP.set(key,P);if(o.key!==undefined&&P.key!==o.key){P.pool={events:[]};P.key=o.key}/* v1.6: nowa reakcja/start → czyste bąbelki i osad */const dt=Math.min(.05,Math.max(0,time-P.last));P.last=time;const r=o.rect||{x:w*.18,y:55,w:w*.64,h:h-88};draw(o.vessel||'beaker',ctx,r,st,{t:time*1000,dt,pool:P.pool,only:o.only,opt:{effects:o.effects}});return r}

/* ===================== UI dla zestawów (lekkie kontrolki, style z CSS-zmiennych silnika) ===================== */
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

/* ===================== ZESTAWY (SCENY): gotowe pokazy złożone z modułów GFX =====================
   def: {label, lesson, desc, height, init(opt)→S, parts:[…get(S)], links, tick(S,dt,t,api), overlay(c,W,H,S,t,T), ui(host,S,m,api)→update(S)} */
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

/* 1. Metal + kwas solny → wodór, próba „pyk" */
const MRX={Mg:{k:.10,col:[217,221,226],sh:'strip',eq:'Mg + 2HCl → MgCl₂ + H₂↑',heat:1,obs:'Gwałtowne wydzielanie gazu, probówka wyraźnie się ogrzewa, magnez szybko znika.'},Zn:{k:.04,col:[154,167,179],sh:'granule',eq:'Zn + 2HCl → ZnCl₂ + H₂↑',obs:'Równomierne wydzielanie pęcherzyków gazu na powierzchni granulek cynku.'},Fe:{k:.014,col:[120,124,130],sh:'granule',eq:'Fe + 2HCl → FeCl₂ + H₂↑',obs:'Powolne wydzielanie gazu; roztwór z czasem bladozielony (jony Fe²⁺).',l1:[167,201,160]},Cu:{k:0,col:[184,115,51],sh:'strip',eq:'Cu + HCl → reakcja nie zachodzi',obs:'Brak objawów reakcji — miedź jest mniej aktywna niż wodór (szereg aktywności).'}};
sceneReg('acidMetal',{label:'Metal + kwas solny → wodór (próba „pyk!")',lesson:'kwasy',desc:'Aktywność metali wobec kwasu; wykrywanie wodoru płonącym łuczywkiem.',height:360,aspect:1.45,
 init:()=>({metal:'Zn',conc:1,rem:1,h2:0,splint:0,test:0,msg:''}),
 parts:[{id:'stand',x:.06,y:.04,w:.5,h:.94,s:{clamps:[{x:.43,y:.3,w:62}]}},
  {id:'testTube',name:'tube',x:.39,y:.18,w:.08,h:.64,get:S=>{const M=MRX[S.metal],g1=M.k>0&&S.rem>0?Math.min(1,M.k*S.conc*12)*Math.min(1,S.rem*4):0;return{liquid:M.l1?colors.mix(ACID,M.l1,(1-S.rem)*.9):ACID,level:.45,solids:[{col:M.col,eq:.6+3.4*S.rem,t:'metal',shape:M.sh}],gas:g1,bubSize:.8,bubN:2.4,T:20+(M.heat||0)*g1*45}}},
  {id:'stand',x:.06,y:.04,w:.5,h:.94,s:{layer:'front',clamps:[{x:.43,y:.3,w:62}]}},
  {id:'anchor',name:'mouth',x:.41,y:.13,w:.04,h:.04,get:S=>({fx:S.splint>0?{splint:{mode:'flame',angle:-28,len:120}}:null})}],
 tick(S,dt,t,api){const M=MRX[S.metal];if(M.k>0&&S.rem>0){S.rem=Math.max(0,S.rem-M.k*S.conc*dt*.1);S.h2=Math.min(1,S.h2+M.k*S.conc*dt*1.6)}S.splint=Math.max(0,S.splint-dt);
  if(S.test&&S.splint<1.2){S.test=0;if(S.h2>.12){api.trigger('pop',{},'mouth');S.h2=0;S.msg='<b>Pyk!</b> Charakterystyczny odgłos — w probówce był <b>wodór</b> (mieszanina H₂ z powietrzem).'}else S.msg=M.k?'Słaby efekt — za mało gazu. Odczekaj chwilę i spróbuj ponownie.':'Brak efektu — <b>miedź nie wypiera wodoru</b> z kwasu.'}},
 overlay(c,W,H,S,t,T){const M=MRX[S.metal];head(c,T,W,M.eq,'HCl(aq), c = '+fmt(S.conc,1)+' mol/dm³',1);txt(c,'H₂ w probówce',W-12,H-30,T.mut,'right',10);c.fillStyle='rgba(100,116,139,.2)';rr(c,W-112,H-22,100,8,4);c.fill();c.fillStyle='#38bdf8';rr(c,W-112,H-22,100*S.h2,8,4);c.fill()},
 ui(h,S,m,api){const r=UI.row(h);UI.sel(r,[['Mg','magnez Mg'],['Zn','cynk Zn'],['Fe','żelazo Fe'],['Cu','miedź Cu']],S.metal,v=>{S.metal=v;S.rem=1;S.h2=0;S.msg='';m.reset()},'Metal');UI.range(r,'HCl',.5,3,.1,S.conc,v=>S.conc=v,v=>fmt(v,1)+' M');UI.btn(r,'Zbliż płonące łuczywko',()=>{S.splint=1.8;S.test=1},1);UI.btn(r,'Nowa próbka',()=>{S.rem=1;S.h2=0;S.msg='';m.reset()});const n=UI.note(h);return S=>{n.innerHTML='<b>Obserwacja:</b> '+MRX[S.metal].obs+(S.msg?'<br>'+S.msg:'')}}});

/* 2. Wskaźnik w roztworze (kroplomierz → zlewka) */
sceneReg('indicator',{label:'Wskaźnik kwasowo-zasadowy w roztworze',lesson:'kwasy',desc:'Kropla wskaźnika rozpływa się w roztworze; barwa z CHE.COLORS dla pH roztworu.',height:340,aspect:1.75,
 init:()=>({sol:'HCl',ind:'ind-uniwersalny',n:0,dropReq:0,show:false}),
 parts:[{id:'dropper',x:.21,y:.02,w:.1,h:.27,get:S=>({dropper:{lv:.65,color:indBottle(S.ind)},dropReq:S.dropReq,landY:.49,onDrop:()=>{S.n++;S.api.trigger('dropMix',{color:indCol(S.ind,SOLS[S.sol].pH),dur:2.4},'bk')}})},
  {id:'beaker',name:'bk',x:.08,y:.3,w:.36,h:.44,get:S=>{const p=SOLS[S.sol].pH,k=Math.min(.9,S.n*.45);return{liquid:colors.mix(WATER,indCol(S.ind,p),k),level:.56,label:SOLS[S.sol].f}}},
  {id:'pHscale',x:.5,y:.3,w:.48,h:.36,get:S=>({pH:SOLS[S.sol].pH,ind:S.ind,hide:!S.show,marks:S.show?[]:[]})}],
 overlay(c,W,H,S,t,T){const p=SOLS[S.sol].pH;head(c,T,W,'Roztwór: '+SOLS[S.sol].n,S.n?'Barwa: '+(indName(S.ind,p)||'—')+(S.show?' · odczyn '+odczyn(p):''):'Dodaj kroplę wskaźnika',1)},
 ui(h,S,m){const r=UI.row(h),reset=()=>{S.n=0;m.reset();S.dropReq++};setTimeout(()=>{if(!S.n)S.dropReq++},400);UI.sel(r,Object.keys(SOLS).map(k=>[k,SOLS[k].n]),S.sol,v=>{S.sol=v;reset()},'Roztwór');UI.sel(r,INDS,S.ind,v=>{S.ind=v;reset()},'Wskaźnik');UI.btn(r,'Dodaj kroplę',()=>S.dropReq++,1);UI.btn(r,'Nowa próbka',reset);UI.chk(r,'pokaż pH',S.show,v=>S.show=v);
  const n=UI.note(h);return S=>{const p=SOLS[S.sol].pH;n.innerHTML=S.n?'<b>'+INDS.find(x=>x[0]===S.ind)[1]+'</b> w roztworze: '+(indName(S.ind,p)||'zmiana barwy')+'. '+(S.ind==='ind-fenoloftaleina'&&p<8.2?'Fenoloftaleina <b>nie odróżnia</b> kwasu od wody — w obu jest bezbarwna.':S.ind==='ind-lakmus'?'Lakmus: czerwony = kwas, niebieski = zasada.':''):'Wybierz roztwór i wskaźnik, potem dodaj kroplę. Zgadnij barwę zanim kropla spadnie.'}}});

/* 3. Wskaźnik w statywie: jeden wskaźnik, wiele roztworów (porównanie) */
sceneReg('indicatorRack',{label:'Wskaźnik w siedmiu roztworach (statyw)',lesson:'kwasy',desc:'Porównanie barw jednego wskaźnika w szeregu roztworów od kwasu do zasady.',height:300,aspect:2.6,
 init:()=>({ind:'ind-uniwersalny'}),
 parts:[{id:'tubeRack',x:.04,y:.17,w:.92,h:.8,get:S=>({tubes:Object.keys(SOLS).map(k=>({label:SOLS[k].f.length>6?SOLS[k].f.slice(0,5)+'…':SOLS[k].f,liquid:colors.mix(WATER,indCol(S.ind,SOLS[k].pH),.88),level:.45}))})}],
 overlay(c,W,H,S,t,T){head(c,T,W,'Ten sam wskaźnik, różne roztwory','od lewej: pH rośnie (kwas → zasada)')},
 ui(h,S){const r=UI.row(h);UI.sel(r,INDS,S.ind,v=>S.ind=v,'Wskaźnik');const n=UI.note(h);return S=>{n.innerHTML=Object.keys(SOLS).map(k=>SOLS[k].f+': <b>'+(indName(S.ind,SOLS[k].pH)||'?')+'</b>').join(' · ')}}});

/* 4. Miareczkowanie HCl roztworem NaOH wobec fenoloftaleiny + krzywa */
const tpH=S=>{const nA=S.ca*S.Va/1000,nB=S.cb*S.V/1000,Vt=(S.Va+S.V)/1000,d=(nA-nB)/Vt,Hc=d/2+Math.sqrt(d*d/4+1e-14);return-Math.log10(Hc)};
const tLv=S=>Math.min(1,(S.Va+S.V)/62);
sceneReg('titration',{label:'Zobojętnianie: miareczkowanie HCl zasadą NaOH',lesson:'kwasy',desc:'Biureta, kolba na mieszadle, fenoloftaleina; krzywa miareczkowania na żywo.',height:400,aspect:1.75,
 init:()=>({V:0,flow:0,dropReq:0,Va:20,ca:.1,cb:.1,hist:[[0,1]]}),
 parts:[{id:'stand',x:.02,y:.02,w:.42,h:.96,s:{clamps:[{x:.3,y:.12,w:30}]}},
  {id:'burette',name:'bur',x:.25,y:.02,w:.1,h:.56,get:S=>({titrant:{V:S.V,Vmax:50,drip:S.flow,color:[214,230,240]},dropReq:S.dropReq,landY:.88-.6*.26*tLv(S)-.01,onDrop:()=>{if(S.V>=50)return;const p0=tpH(S);S.V=Math.min(50,S.V+.05);const p=tpH(S);if(S.hist.length<2000&&S.V-S.hist[S.hist.length-1][0]>=.1)S.hist.push([S.V,p]);if(p0<8.2){const Veq=S.ca*S.Va/S.cb;S.api.trigger('dropMix',{color:[219,39,119],dur:.6+2.6*Math.exp(-Math.max(0,Veq-S.V)/1.2)},'fl')}}})},
  {id:'stand',x:.02,y:.02,w:.42,h:.96,s:{layer:'front',clamps:[{x:.3,y:.12,w:30}]}},
  {id:'flask',name:'fl',x:.2,y:.62,w:.2,h:.26,get:S=>({liquid:colors.mix(WATER,indCol('ind-fenoloftaleina',tpH(S)),.92),level:tLv(S),stir:.7,T:22})},
  {id:'hotplate',x:.12,y:.86,w:.36,h:.13,s:{heat:0,stir:.7}}],
 overlay(c,W,H,S,t,T){const p=tpH(S);head(c,T,W,'HCl + NaOH → NaCl + H₂O','V(NaOH) = '+fmt(S.V,2)+' cm³ · pH = '+fmt(p,2),1);
  const x0=W*.56,x1=W-16,y0=H*.18,y1=H*.7,X=v=>x0+(x1-x0)*v/40,Y=q=>y1-(y1-y0)*q/14;c.strokeStyle=T.mut;c.lineWidth=1;c.beginPath();c.moveTo(x0,y0);c.lineTo(x0,y1);c.lineTo(x1,y1);c.stroke();
  for(let q=0;q<=14;q+=7){txt(c,String(q),x0-5,Y(q)+3,T.mut,'right',9)}for(let v=0;v<=40;v+=10)txt(c,String(v),X(v),y1+12,T.mut,'center',9);txt(c,'pH',x0,y0-6,T.mut,'center',9,800);txt(c,'V NaOH [cm³]',x1,y1+24,T.mut,'right',9,700);
  c.fillStyle='rgba(219,39,119,.12)';c.fillRect(x0,Y(10),x1-x0,Y(8.2)-Y(10));txt(c,'fenoloftaleina',x1-2,Y(10)-3,'#db2777','right',8,700);
  const Ve=S.ca*S.Va/S.cb;c.setLineDash([4,4]);c.strokeStyle=T.mut;c.beginPath();c.moveTo(X(Ve),y0);c.lineTo(X(Ve),y1);c.stroke();c.setLineDash([]);txt(c,'PR',X(Ve)+3,y0+10,T.mut,'left',9,800);
  c.strokeStyle='#2563eb';c.lineWidth=2.2;c.beginPath();S.hist.forEach((h,i)=>{const x=X(Math.min(40,h[0])),y=Y(h[1]);i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.fillStyle='#2563eb';c.beginPath();c.arc(X(Math.min(40,S.V)),Y(p),3.5,0,7);c.fill()},
 ui(h,S,m,api){const r=UI.row(h);UI.btn(r,'Kropla',()=>S.dropReq++,1);UI.btn(r,'+1 cm³',()=>{S.dropReq+=20});UI.sel(r,[['0','kranik zamknięty'],['.9','kroplami (wolno)'],['2.5','strumieniem (szybko)']],'0',v=>S.flow=+v,'Biureta');UI.btn(r,'Od nowa',()=>api.reset());
  const n=UI.note(h);return S=>{const p=tpH(S),Ve=S.ca*S.Va/S.cb;n.innerHTML=p<8.2?(S.V>Ve-1.5&&S.V>0?'Różowe smugi znikają coraz wolniej — <b>zbliżasz się do punktu końcowego</b>. Dodawaj pojedyncze krople.':'Roztwór w kolbie jest <b>kwasowy</b>: fenoloftaleina bezbarwna, różowe smugi po kropli NaOH znikają po wymieszaniu.'):S.V<Ve+.6?'<b>Trwałe malinowe zabarwienie</b> — punkt końcowy. Zużyto '+fmt(S.V,2)+' cm³ NaOH → c(HCl) = '+fmt(S.cb*S.V/S.Va,3)+' mol/dm³.':'Nadmiar zasady: roztwór <b>zasadowy</b>, pH szybko rośnie.'}}});

/* 5. Rozcieńczanie stężonego kwasu: kwas do wody (BHP) */
sceneReg('dilution',{label:'Rozcieńczanie kwasu: „kwas do wody!"',lesson:'kwasy',desc:'Poprawnie: smugi i umiarkowane ogrzanie. Błędnie (woda do kwasu): wrzenie i pryskanie.',height:380,aspect:1.55,
 init:()=>({mode:'ok',tap:.9,Vadd:0,T:20,schl:0,splash:0,boil:0}),
 parts:[{id:'stand',x:.02,y:.02,w:.5,h:.96,s:{clamps:[{x:.42,y:.13,w:20}]}},
  {id:'dropFunnel',name:'fun',x:.36,y:.02,w:.12,h:.42,get:S=>({liquid:S.mode==='ok'?ACIDC:WATER,level:Math.max(0,1-S.Vadd),tap:S.Vadd<1?S.tap:0,landY:.88-.38*(.42+S.Vadd*.3),onDrop:()=>{S.Vadd=Math.min(1,S.Vadd+.006);if(S.mode==='ok'){S.schl=1;S.T=Math.min(62,S.T+.32)}else{S.T=Math.min(115,S.T+3);S.splash=Math.max(S.splash,.35);S.boil=1}}})},
  {id:'stand',x:.02,y:.02,w:.5,h:.96,s:{layer:'front',clamps:[{x:.42,y:.13,w:20}]}},
  {id:'beaker',name:'bk',x:.26,y:.5,w:.32,h:.38,get:S=>({liquid:colors.mix(S.mode==='ok'?WATER:ACIDC,S.mode==='ok'?ACIDC:WATER,S.Vadd*.5),level:.42+S.Vadd*.3,schl:S.schl,splash:S.splash,T:S.T,gas:S.boil,bubSize:1.4,label:S.mode==='ok'?'H₂O':'H₂SO₄ stęż.'})},
  {id:'thermometer',x:.72,y:.18,w:.14,h:.72,get:S=>({T:S.T})}],
 tick(S,dt){S.schl=Math.max(S.tap&&S.mode==='ok'&&S.Vadd<1?.3:0,S.schl-dt*.5);S.boil=Math.max(0,S.boil-dt*.8);S.T+=(20-S.T)*dt*.006},
 overlay(c,W,H,S,t,T){head(c,T,W,'Rozcieńczanie stężonego H₂SO₄',S.mode==='ok'?'kwas wlewany powoli do wody':'BŁĄD: woda wlewana do kwasu',1);if(S.mode!=='ok'&&S.T>60){c.fillStyle='rgba(220,38,38,.92)';rr(c,W*.56,H*.08+30,W*.42,40,8);c.fill();txt(c,'Wrzenie i pryskanie kwasu!',W*.77,H*.08+47,'#fff','center',12,800);txt(c,'Zawsze: KWAS DO WODY',W*.77,H*.08+63,'#fff','center',11,700)}},
 ui(h,S,m,api){const r=UI.row(h);UI.sel(r,[['ok','kwas → do wody (poprawnie)'],['bad','woda → do kwasu (błąd)']],S.mode,v=>{api.reset();S.mode=v;S.tap=.9;b.textContent='Zamknij kranik'},'Sposób');const b=UI.btn(r,S.tap?'Zamknij kranik':'Otwórz kranik',()=>{S.tap=S.tap?0:.9;b.textContent=S.tap?'Zamknij kranik':'Otwórz kranik'},1);UI.btn(r,'Powtórz',()=>{const md=S.mode;api.reset();S.mode=md;S.tap=.9;b.textContent='Zamknij kranik'});
  const n=UI.note(h);return S=>{n.innerHTML=S.mode==='ok'?'Kwas jest gęstszy od wody — opada smugami i miesza się. Wydziela się ciepło (T = '+fmt(S.T,1)+' °C), ale duża ilość wody je pochłania.':'Pierwsze krople wody pływają po kwasie i <b>gwałtownie wrą</b> — kwas pryska. T lokalnie = '+fmt(S.T,0)+' °C. Nigdy nie wlewaj wody do stężonego kwasu!'}}});

/* 6. Przewodzenie prądu: elektrolity mocne, słabe, nieelektrolity */
const CSOL={dist:{n:'woda destylowana',f:'H₂O',cond:.02,mol:[{id:'H2O',n:16}],t:'nieelektrolit (prawie nie przewodzi)'},sugar:{n:'roztwór cukru',f:'C₆H₁₂O₆',cond:.02,mol:[{id:'C6H12O6',n:3},{id:'H2O',n:12}],t:'nieelektrolit — cząsteczki nie rozpadają się na jony'},HCl:{n:'kwas solny',f:'HCl(aq)',cond:1,el:{cat:{f:'H₂',n:1},an:{f:'Cl₂',n:.6,col:[214,232,140]},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻',rx:'elHcl'},mol:[{id:'H3O+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny — HCl całkowicie zdysocjowany: H₃O⁺ + Cl⁻'},H2SO4:{n:'kwas siarkowy(VI)',f:'H₂SO₄(aq)',cond:1,el:{cat:{f:'H₂',n:1},an:{f:'O₂',n:.5},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ (jony SO₄²⁻ nie utleniają się)',rx:'elH2o'},mol:[{id:'H3O+',n:6},{id:'SO42-',n:3},{id:'H2O',n:8}],t:'elektrolit mocny: 2H₃O⁺ + SO₄²⁻'},CH3COOH:{n:'kwas octowy',f:'CH₃COOH(aq)',cond:.3,el:{cat:{f:'H₂',n:.5},an:{f:'O₂',n:.25},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ — mało jonów, więc gazu niewiele',rx:'elH2o'},mol:[{id:'CH3COOH',n:5},{id:'H3O+',n:1},{id:'CH3COO-',n:1},{id:'H2O',n:9}],t:'elektrolit słaby — zdysocjowana tylko niewielka część cząsteczek'},NaOH:{n:'zasada sodowa',f:'NaOH(aq)',cond:.95,el:{cat:{f:'H₂',n:1},an:{f:'O₂',n:.5},eq:'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ (Na⁺ się nie redukuje) · anoda (+): 4 OH⁻ → O₂↑ + 2 H₂O + 4 e⁻',rx:'elH2o'},mol:[{id:'Na+',n:6},{id:'OH-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny: Na⁺ + OH⁻'},NaCl:{n:'roztwór soli kuchennej',f:'NaCl(aq)',cond:.9,el:{cat:{f:'H₂',n:1},an:{f:'Cl₂',n:.6,col:[214,232,140]},eq:'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻ (w roztworze stężonym)',rx:'elNacl'},mol:[{id:'Na+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny: Na⁺ + Cl⁻'}};
sceneReg('conductivity',{label:'Przewodzenie prądu: elektrolity i dysocjacja',lesson:'kwasy',desc:'Tester z żarówką + model cząsteczkowy roztworu (jony z ładunkami).',height:340,aspect:1.7,
 init:()=>({sol:'HCl',cond:0}),
 parts:[{id:'conductivity',x:.02,y:.1,w:.5,h:.88,get:S=>({cond:S.cond,el:CSOL[S.sol].el||null,liquid:S.sol==='sugar'?[226,232,236]:WATER,level:.6,label:CSOL[S.sol].f})},
  {id:'molTank',x:.56,y:.14,w:.42,h:.82,get:S=>({phase:'liquid',mol:CSOL[S.sol].mol,T:25})}],
 tick(S,dt){S.cond+=(CSOL[S.sol].cond-S.cond)*Math.min(1,dt*3)},
 overlay(c,W,H,S,t,T){head(c,T,W,'Czy roztwór przewodzi prąd?',CSOL[S.sol].n+' — '+CSOL[S.sol].f)},
 ui(h,S,m){const r=UI.row(h);UI.sel(r,Object.keys(CSOL).map(k=>[k,CSOL[k].n+' '+CSOL[k].f]),S.sol,v=>{S.sol=v;m.reset()},'Roztwór');const n=UI.note(h);return S=>{const E=CSOL[S.sol].el;n.innerHTML='<b>'+CSOL[S.sol].t+'.</b> Prąd w roztworze przenoszą <b>jony</b>: kationy wędrują do <b>katody (−)</b>, aniony do <b>anody (+)</b> — im więcej jonów, tym jaśniej świeci żarówka.'+(E?'<br><b>Na elektrodach zachodzi elektroliza</b> (prąd stały): '+E.eq+'. Przy baterii 4,5 V i elektrodach grafitowych gazu jest mało — pęcherzyki widać po chwili.':'<br>Brak jonów — brak prądu, więc na elektrodach nic się nie wydziela.')}}});

/* 7. Zbieranie gazu nad wodą (H₂ z Zn + HCl lub CO₂ z CaCO₃ + HCl) */
const GRX={H2:{n:'Zn + 2HCl → ZnCl₂ + H₂↑',sol:{col:[154,167,179],t:'metal',shape:'granule'},k:1,foam:0,txt:'Wodór słabo rozpuszcza się w wodzie, więc zbiera się go metodą wypierania wody.'},CO2:{n:'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',sol:{col:[240,240,232],t:'solid',shape:'chips'},k:.75,foam:.6,txt:'CO₂ częściowo rozpuszcza się w wodzie — zbiera się wolniej; lepiej zbierać go metodą wypierania powietrza.'}};
sceneReg('gasCollection',{label:'Zbieranie gazu nad wodą',lesson:'kwasy',desc:'Kolba z korkiem i rurką odprowadzającą → odwrócony cylinder w wannie z wodą.',height:340,aspect:1.7,
 init:()=>({gas:'H2',on:1,rem:1,V:0}),
 parts:[{id:'flask',name:'fl',x:.04,y:.38,w:.26,h:.5,get:S=>{const G=GRX[S.gas],r=S.on&&S.rem>0?G.k:0;return{liquid:ACID,level:.45,solids:[Object.assign({eq:.8+3.2*S.rem},G.sol)],gas:r,foam:r*G.foam,stopper:'tube',bubN:1.3,bubSize:.8}}},
  {id:'gasCollect',name:'gc',x:.4,y:.14,w:.58,h:.76,get:S=>({gasV:S.V,gas:S.on&&S.rem>0&&S.V<1?GRX[S.gas].k:0,gasMax:100})}],
 links:[{pts:[[.17,.3],[.17,.2],[.36,.2],[.36,.444],[.4,.444]],flow:S=>S.on&&S.rem>0?GRX[S.gas].k:0}],
 tick(S,dt){if(S.on&&S.rem>0){const k=GRX[S.gas].k;S.rem=Math.max(0,S.rem-dt*.012);S.V=Math.min(1,S.V+k*dt*.025)}},
 overlay(c,W,H,S,t,T){head(c,T,W,GRX[S.gas].n,S.V>=1?'cylinder pełny — zamknij go pod wodą płytką':'gaz wypiera wodę z cylindra',1)},
 ui(h,S,m,api){const r=UI.row(h);UI.sel(r,[['H2','wodór H₂'],['CO2','tlenek węgla(IV) CO₂']],S.gas,v=>{api.reset();S.gas=v;S.on=1;b.textContent='Wstrzymaj'},'Gaz');const b=UI.btn(r,'Wstrzymaj',()=>{S.on=S.on?0:1;b.textContent=S.on?'Wstrzymaj':'Wznów'},1);UI.btn(r,'Powtórz',()=>{const g1=S.gas;api.reset();S.gas=g1;S.on=1;b.textContent='Wstrzymaj'});const n=UI.note(h);return S=>{n.innerHTML=GRX[S.gas].txt}}});

/* 8. CaCO₃ + HCl → CO₂; wykrywanie wodą wapienną */
sceneReg('carbonate',{label:'Węglan wapnia + kwas → CO₂ (woda wapienna)',lesson:'kwasy',desc:'Burzenie i piana na marmurze; gaz przepuszczony przez wodę wapienną powoduje zmętnienie.',height:340,aspect:1.7,
 init:()=>({on:1,rem:1,turb:0}),
 parts:[{id:'flask',name:'fl',x:.06,y:.36,w:.28,h:.52,get:S=>{const r=S.on&&S.rem>0?.8:0;return{liquid:ACID,level:.42,solids:[{col:[240,240,232],eq:.8+3.2*S.rem,t:'solid',shape:'chips'}],gas:r,foam:r*.7,stopper:'tube'}}},
  {id:'testTube',name:'tt',x:.63,y:.3,w:.11,h:.58,get:S=>({liquid:[226,238,242],level:.6,turb:S.turb,gas:S.on&&S.rem>0?.7:0,bubFrom:'bottom',bubSize:.8,label:''})}],
 links:[{pts:[[.2,.28],[.2,.16],[.685,.16],[.685,.82]],flow:S=>S.on&&S.rem>0?.8:0}],
 tick(S,dt){if(S.on&&S.rem>0){S.rem=Math.max(0,S.rem-dt*.012);S.turb=Math.min(1,S.turb+dt*.06)}},
 overlay(c,W,H,S,t,T){head(c,T,W,'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑','Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O',1);txt(c,'woda wapienna',W*.685,H*.95,T.mut,'center',10,700)},
 ui(h,S,m,api){const r=UI.row(h);const b=UI.btn(r,'Wstrzymaj',()=>{S.on=S.on?0:1;b.textContent=S.on?'Wstrzymaj':'Wznów'},1);UI.btn(r,'Powtórz',()=>{api.reset();S.on=1;b.textContent='Wstrzymaj'});const n=UI.note(h);return S=>{n.innerHTML=S.turb>.3?'<b>Woda wapienna mętnieje</b> — wytrąca się CaCO₃. To dowód, że gazem jest <b>CO₂</b>.':'Na kawałkach marmuru burzy się gaz; pęcherzyki przechodzą rurką do wody wapiennej.'}}});

/* 9. Ogrzewanie cieczy: palnik + trójnóg + siatka */
sceneReg('heating',{label:'Ogrzewanie cieczy na trójnogu (palnik Bunsena)',lesson:'technika',desc:'Moc i dopływ powietrza → barwa płomienia; temperatura rośnie do wrzenia i zatrzymuje się.',height:380,aspect:1.35,
 init:()=>({power:.7,air:80,on:1,T:20}),
 parts:[{id:'burner',x:.3,y:.58,w:.4,h:.42,clip:[0,.63,1,.37],get:S=>({flame:{on:S.on,power:S.power,air:S.air,phi:1.55-S.air/100*.65,soot:S.air<35?.5:0,temp:650+S.air*8}})},
  {id:'tripod',x:.26,y:.62,w:.48,h:.38,get:S=>({heat:S.on?S.power*3:0})},
  {id:'beaker',x:.37,y:.34,w:.26,h:.28,get:S=>({liquid:WATER,level:.6,T:S.T,gas:S.T>=99.5?1:S.T>80?(S.T-80)/40:0,bubSize:1.3,label:'H₂O'})},
  {id:'thermometer',x:.8,y:.12,w:.14,h:.8,get:S=>({T:S.T})}],
 tick(S,dt){const q=S.on?S.power*(.35+.65*S.air/100)*2.4:0;S.T=Math.min(100,S.T+(q-(S.T-20)*.012)*dt)},
 overlay(c,W,H,S,t,T){head(c,T,W,'Ogrzewanie wody',S.T>=99.5?'woda wrze — temperatura stała ≈ 100 °C':'T = '+fmt(S.T,1)+' °C')},
 ui(h,S){const r=UI.row(h);UI.range(r,'Moc',0,1,.05,S.power,v=>S.power=v);UI.range(r,'Powietrze',0,100,5,S.air,v=>S.air=v,v=>v+'%');const b=UI.btn(r,'Zgaś',()=>{S.on=S.on?0:1;b.textContent=S.on?'Zgaś':'Zapal'},1);const n=UI.note(h);return S=>{n.innerHTML=S.air<40?'Mało powietrza: płomień <b>świecący, żółty, kopcący</b> — chłodniejszy.':'Dużo powietrza: płomień <b>nieświecący, niebieski</b> — najgorętszy. Do ogrzewania używamy płomienia nieświecącego.'}}});
