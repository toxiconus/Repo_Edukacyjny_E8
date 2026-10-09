
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
 /*@@GFX reakcje/liH2o@@*/
 /*@@GFX reakcje/kH2o@@*/
 /*@@GFX reakcje/caH2o@@*/
 /*@@GFX reakcje/mgH2oHot@@*/
 const ox=[245,245,240];
 /*@@GFX reakcje/na2oH2o@@*/
 /*@@GFX reakcje/k2oH2o@@*/
 /*@@GFX reakcje/li2oH2o@@*/
 /*@@GFX reakcje/caoH2o@@*/
 /*@@GFX reakcje/mgoH2o@@*/
 /*@@GFX reakcje/baoH2o@@*/
 /*@@GFX reakcje/mgcl2Naoh@@*/
 /*@@GFX reakcje/alcl3Naoh@@*/
 /*@@GFX reakcje/znso4Naoh@@*/
 /*@@GFX reakcje/feso4Naoh@@*/
 /*@@GFX reakcje/cucl2Naoh@@*/
 /*@@GFX reakcje/niso4Naoh@@*/
 /*@@GFX reakcje/mnso4Naoh@@*/
 /*@@GFX reakcje/pbno32Naoh@@*/
 /*@@GFX reakcje/cacl2Naoh@@*/
 /*@@GFX reakcje/agno3Naoh@@*/
 /*@@GFX reakcje/caoh2Hcl@@*/
 /*@@GFX reakcje/kohHcl@@*/
 /*@@GFX reakcje/kohHno3@@*/
 /*@@GFX reakcje/naohHno3@@*/
 /*@@GFX reakcje/baoh2H2so4@@*/
 /*@@GFX reakcje/cuoh2H2so4@@*/
 /*@@GFX reakcje/cuoh2Hcl@@*/
 /*@@GFX reakcje/feoh3Hcl@@*/
 /*@@GFX reakcje/znoh2Hcl@@*/
 /*@@GFX reakcje/aloh3Naoh@@*/
 /*@@GFX reakcje/znoh2Naoh@@*/
 /*@@GFX reakcje/baoh2Co2@@*/
 /*@@GFX reakcje/cuoh2Heat@@*/
 /*@@GFX reakcje/feoh2O2@@*/
 /*@@GFX reakcje/caoh2Na2co3@@*/
 /*@@GFX reakcje/nh4clNaoh@@*/
})();
 
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const u=v=>['ind-uniwersalny',v],wh=[245,245,240],pw=c=>({col:c,eq:4,end:0,t:'powder',shape:'powder'});
 /*@@GFX reakcje/so3H2o@@*/
 /*@@GFX reakcje/so2H2o@@*/
 /*@@GFX reakcje/co2H2o@@*/
 /*@@GFX reakcje/p4o10H2o@@*/
 /*@@GFX reakcje/caoHcl@@*/
 /*@@GFX reakcje/mgoHcl@@*/
 /*@@GFX reakcje/znoHcl@@*/
 /*@@GFX reakcje/al2o3Hcl@@*/
 /*@@GFX reakcje/fe2o3Hcl@@*/
 /*@@GFX reakcje/fe2o3H2so4@@*/
 /*@@GFX reakcje/so2Naoh@@*/
 /*@@GFX reakcje/so3Naoh@@*/
 /*@@GFX reakcje/naohCo2@@*/
 /*@@GFX reakcje/al2o3NaohAq@@*/
 /*@@GFX reakcje/znoNaohAq@@*/
 /*@@GFX reakcje/sio2Naoh@@*/
})();
; 
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const u=v=>['ind-uniwersalny',v],wh=[245,245,240],pw=c=>({col:c,eq:4,end:0,t:'powder',shape:'powder'});
 /*@@GFX reakcje/bacl2Na2so4@@*/
 /*@@GFX reakcje/cacl2Na2co3@@*/
 /*@@GFX reakcje/na2co3Hcl@@*/
 /*@@GFX reakcje/cuso4Hydrate@@*/
 /*@@GFX reakcje/hyd-nacl@@*/
 /*@@GFX reakcje/hyd-na2co3@@*/
 /*@@GFX reakcje/hyd-nh4cl@@*/
 /*@@GFX reakcje/hyd-cuso4@@*/
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