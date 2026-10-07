/* ===== GFX 1.7 — JONY W ROZTWORZE (GFX.ions): rozpuszczanie i dysocjacja kryształu jonowego z hydratacją, zobojętnianie H⁺ + OH⁻ → H₂O.
   Model liczbowy: CHE.HYDROXIDES (rozpuszczalność, liczba OH⁻, bilans moli). Strącanie osadów: CHE.sim.ParticleSim (p0b_sim).
   API: GFX.ions.mount(host,{mode:'dissolve'|'neutral',height,...}) → {set(o),add(n),play(),pause(),reset(),state,destroy()};
        GFX.ions.drawIon(c,x,y,r,label,col) · drawWater(c,x,y,s,ang). Używają: n02-dysocjacja-v01, n02-zobojetnianie-v01. ===== */
const IONX=(function(){
const TAU=Math.PI*2,COL={OH:'#2563eb',H:'#dc2626',cat:'#64748b',an:'#16a34a',w:'#38bdf8'};
function drawIon(c,x,y,r,label,col,a){c.globalAlpha=a==null?1:a;const g=c.createRadialGradient(x-r*.35,y-r*.35,r*.15,x,y,r);g.addColorStop(0,'#ffffff');g.addColorStop(.35,col);g.addColorStop(1,col);c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();
 c.strokeStyle='rgba(15,23,42,.35)';c.lineWidth=1;c.stroke();if(label){c.fillStyle='#fff';c.font='800 '+Math.max(8,Math.round(r*.78))+'px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(label,x,y+.5)}c.globalAlpha=1}
/* cząsteczka wody: O (czerwony) + 2 H (białe), ang — kierunek dipola */
function drawWater(c,x,y,s,ang,a){c.globalAlpha=a==null?1:a;const hx=Math.cos(ang),hy=Math.sin(ang);[-.9,.9].forEach(d=>{const ax=Math.cos(ang+d),ay=Math.sin(ang+d);c.fillStyle='#f8fafc';c.strokeStyle='rgba(15,23,42,.35)';c.beginPath();c.arc(x+ax*s*.9,y+ay*s*.9,s*.45,0,TAU);c.fill();c.stroke()});
 c.fillStyle='#ef4444';c.beginPath();c.arc(x,y,s*.62,0,TAU);c.fill();c.strokeStyle='rgba(15,23,42,.35)';c.stroke();c.globalAlpha=1;return[hx,hy]}
function canvas(host,h){const cv=document.createElement('canvas');cv.style.cssText='width:100%;height:'+h+'px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';host.appendChild(cv);
 const fit=()=>{const dpr=Math.min(2,window.devicePixelRatio||1),r=cv.getBoundingClientRect(),w=Math.max(240,r.width||cv.clientWidth||600);cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);cv.getContext('2d').setTransform(dpr,0,0,dpr,0,0);return w};return{cv,fit}}
function rnd(s){return function(){s=(s*16807)%2147483647;return(s-1)/2147483646}}
function mount(host,o){o=Object.assign({mode:'dissolve',height:300},o||{});const H=o.height,{cv,fit}=canvas(host,H),c=cv.getContext('2d');let W=fit(),raf=0,last=0,run=false;const R=rnd(7);
 const S={t:0,ions:[],waters:[],made:0,p:0};
 function beaker(){const T=th();c.clearRect(0,0,W,H);c.fillStyle=o.bg||T.tint;c.fillRect(0,0,W,H);
  for(let i=0;i<26;i++){const x=(i*97%W),y=(i*53%H);drawWater(c,x,y,4,i,.18)}}
 /* --- tryb: rozpuszczanie kryształu M(OH)n --- */
 function initDissolve(){S.ions=[];S.p=0;const n=o.nOH||1,cols=Math.min(10,Math.max(4,Math.floor(W/60))),rows=4,cell=24,x0=W/2-cols*cell/2,y0=H-20-rows*cell;
  let k=0;for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){const isCat=((q+r)%(n+1))===0;S.ions.push({cat:isCat,x:x0+q*cell+cell/2,y:y0+r*cell+cell/2,hx:x0+q*cell+cell/2,hy:y0+r*cell+cell/2,vx:0,vy:0,free:false,edge:r===0||q===0||q===cols-1,ord:k++,hyd:0})}
  const frac=o.sol==='R'?1:o.sol==='T'?.22:o.sol==='N'?.03:0;const cand=S.ions.slice().sort((a,b)=>(a.hy-b.hy)||(Math.abs(a.hx-W/2)-Math.abs(b.hx-W/2)));
  const nFree=Math.round(cand.length*frac);cand.forEach((p,i)=>{p.goes=i<nFree;p.when=i/Math.max(1,nFree)*.85})}
 function stepDissolve(dt){S.p=Math.min(1,S.p+dt/(o.dur||8));S.ions.forEach(p=>{if(p.goes&&!p.free&&S.p>=p.when){p.free=true;p.vx=(R()-.5)*60;p.vy=-40-R()*40}
  if(p.free){p.vx+=(R()-.5)*90*dt;p.vy+=(R()-.5)*90*dt;p.vx*=.985;p.vy*=.985;p.x+=p.vx*dt;p.y+=p.vy*dt;const r=12;if(p.x<r){p.x=r;p.vx=Math.abs(p.vx)}if(p.x>W-r){p.x=W-r;p.vx=-Math.abs(p.vx)}if(p.y<r){p.y=r;p.vy=Math.abs(p.vy)}if(p.y>H-110){p.y=H-110;p.vy=-Math.abs(p.vy)}p.hyd=Math.min(1,p.hyd+dt*.6)}})}
 function drawDissolve(){beaker();const lab=o.cation||'M⁺',cc=o.catCol||COL.cat;
  if(o.solidCol){c.fillStyle=o.solidCol;c.globalAlpha=.25;c.fillRect(W/2-150,H-16,300,10);c.globalAlpha=1}
  S.ions.forEach(p=>{if(p.free&&p.hyd>0&&o.hydration!==false){const k=p.cat?6:5;for(let i=0;i<k;i++){const a=i/k*TAU+S.t*.4,d=(p.cat?20:18),wx=p.x+Math.cos(a)*d,wy=p.y+Math.sin(a)*d;
     /* przy kationie tlen (−) skierowany do jonu, przy OH⁻ — wodory (+) */drawWater(c,wx,wy,4.2,p.cat?a:a+Math.PI,p.hyd*.9)}}
   drawIon(c,p.x,p.y,p.cat?11:10,p.cat?lab:'OH⁻',p.cat?cc:COL.OH)});
  const free=S.ions.filter(p=>p.free&&!p.cat).length,T=th();c.fillStyle=T.text;c.font='700 12px system-ui';c.textAlign='left';c.fillText('wolne jony OH⁻ w roztworze: '+free,10,18);
  c.fillStyle=T.mut;c.font='600 11px system-ui';c.fillText(o.sol==='R'?'kryształ rozpuszcza się całkowicie':o.sol==='T'?'rozpuszcza się tylko część — reszta zostaje jako osad (roztwór nasycony)':o.sol==='N'?'praktycznie nic nie przechodzi do roztworu':'',10,34);S.freeOH=free}
 /* --- tryb: zobojętnianie (OH⁻ w zlewce, krople H⁺ z biurety) --- */
 function initNeutral(){S.ions=[];S.waters=[];S.made=0;const nO=o.nOH==null?12:o.nOH;for(let i=0;i<nO;i++){S.ions.push(mk('OH'));S.ions.push(mk('cat'))}}
 function mk(t,x,y){return{t,x:x==null?20+R()*(W-40):x,y:y==null?60+R()*(H-90):y,vx:(R()-.5)*50,vy:(R()-.5)*50,r:t==='H'?8:10}}
 function add(n){for(let i=0;i<n;i++){S.ions.push(mk('H',W/2+(R()-.5)*30,16+R()*10));S.ions.push(mk('an',W/2+(R()-.5)*30,16+R()*10))}}
 function stepNeutral(dt){S.ions.forEach(p=>{p.vx+=(R()-.5)*120*dt;p.vy+=(R()-.5)*120*dt;p.vx*=.99;p.vy*=.99;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<p.r){p.x=p.r;p.vx=Math.abs(p.vx)}if(p.x>W-p.r){p.x=W-p.r;p.vx=-Math.abs(p.vx)}if(p.y<p.r){p.y=p.r;p.vy=Math.abs(p.vy)}if(p.y>H-p.r){p.y=H-p.r;p.vy=-Math.abs(p.vy)}});
  const hs=S.ions.filter(p=>p.t==='H'),os=S.ions.filter(p=>p.t==='OH');
  /* przyciąganie H⁺ ↔ OH⁻ i łączenie w wodę */
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
 /* zatrzymanie, gdy kanwa opuści dokument (zamknięty widok) */
 const chk=setInterval(()=>{if(!document.body.contains(cv)){api.pause();clearInterval(chk)}},1500);return api}
return{mount,drawIon,drawWater,COL}})();
/* ===== GFX.rx — wygląd reakcji N02 (klucze CHE.REACTION z gen_hydroxides.py) ===== */
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const php=['ind-fenoloftaleina',7],pink=['ind-fenoloftaleina',12.5];
 P('liH2o',{n:'Li + H₂O (+ fenoloftaleina)',bubFrom:'bottom',l0:php,l1:pink,out:['gaz','barwa'],gas:'H2',bubN:1,heat:.6,T:30,teacher:1,why:'Lit pływa i spokojnie wydziela wodór; roztwór malinowieje (LiOH).'});
 P('kH2o',{n:'K + H₂O (+ fenoloftaleina)',bubFrom:'bottom',l0:php,l1:pink,out:['gaz','barwa'],gas:'H2',bubN:2.6,heat:2,T:55,splash:.5,teacher:1,why:'Potas reaguje gwałtowniej niż sód — wodór zapala się fioletowym płomieniem.'});
 P('caH2o',{n:'Ca + H₂O (+ fenoloftaleina)',solid:{col:'metal-ca',eq:4,end:.2,t:'metal',shape:'granule'},l0:php,l1:pink,out:['gaz','barwa'],gas:'H2',bubN:1.2,turb:.35,heat:.8,T:35,why:'Wapń tonie i wydziela wodór; roztwór mętnieje (słabo rozpuszczalny Ca(OH)₂) i malinowieje.'});
 P('mgH2oHot',{n:'Mg + gorąca H₂O (+ fenoloftaleina)',solid:{col:'metal-mg',eq:4,end:.7,t:'metal'},l0:php,l1:['ind-fenoloftaleina',9.6],out:['gaz','barwa'],gas:'H2',bubN:.4,T:80,why:'Z gorącą wodą magnez reaguje powoli — nieliczne pęcherzyki, słabo różowa barwa (Mg(OH)₂ trudno rozpuszczalny).'});
 const ox=[245,245,240];
 P('na2oH2o',{n:'Na₂O + H₂O (+ fenoloftaleina)',solid:{col:ox,eq:4,end:0,t:'powder',shape:'powder'},l0:php,l1:pink,out:['barwa'],heat:1.2,T:45,why:'Biały Na₂O znika, roztwór się ogrzewa i malinowieje — powstaje NaOH.'});
 P('k2oH2o',{n:'K₂O + H₂O (+ fenoloftaleina)',solid:{col:ox,eq:4,end:0,t:'powder',shape:'powder'},l0:php,l1:pink,out:['barwa'],heat:1.3,T:48,why:'Tlenek znika, roztwór malinowy — powstaje KOH.'});
 P('li2oH2o',{n:'Li₂O + H₂O (+ fenoloftaleina)',solid:{col:ox,eq:4,end:0,t:'powder',shape:'powder'},l0:php,l1:pink,out:['barwa'],heat:.8,T:35,why:'Powstaje LiOH — roztwór zasadowy.'});
 P('caoH2o',{n:'CaO + H₂O (wapno palone, + fenoloftaleina)',solid:{col:ox,eq:4,end:.35,t:'powder',shape:'powder'},l0:php,l1:pink,out:['barwa'],turb:.55,heat:2.2,T:80,schl:1,teacher:1,why:'Silne ogrzanie, syk; powstaje mleko wapienne (zawiesina Ca(OH)₂), fenoloftaleina malinowa.'});
 P('mgoH2o',{n:'MgO + H₂O (+ fenoloftaleina)',solid:{col:ox,eq:4,end:.9,t:'powder',shape:'powder'},l0:php,l1:['ind-fenoloftaleina',9.6],out:['barwa'],turb:.25,why:'Reakcja bardzo powolna — tylko słabo różowa barwa przy osadzie (Mg(OH)₂ trudno rozpuszczalny).'});
 P('baoH2o',{n:'BaO + H₂O (+ fenoloftaleina)',solid:{col:ox,eq:4,end:0,t:'powder',shape:'powder'},l0:php,l1:pink,out:['barwa'],heat:1.4,T:50,teacher:1,why:'Tlenek znika, roztwór malinowy — powstaje Ba(OH)₂ (związki baru trujące).'});
 P('mgcl2Naoh',{n:'MgCl₂ + NaOH',ppt:'ppt-mg-oh-2',out:['osad'],why:'Biały, galaretowaty osad Mg(OH)₂.'});
 P('alcl3Naoh',{n:'AlCl₃ + NaOH (bez nadmiaru)',ppt:'ppt-al-oh-3',out:['osad'],why:'Biały, galaretowaty osad Al(OH)₃ — w nadmiarze NaOH znika.'});
 P('znso4Naoh',{n:'ZnSO₄ + NaOH (bez nadmiaru)',ppt:'ppt-zn-oh-2',out:['osad'],why:'Biały osad Zn(OH)₂ — w nadmiarze NaOH znika.'});
 P('feso4Naoh',{n:'FeSO₄ + NaOH',l0:'ion-fe2',ppt:'ppt-fe-oh-2',out:['osad'],why:'Zielonkawy osad Fe(OH)₂, na powietrzu brunatnieje.'});
 P('cucl2Naoh',{n:'CuCl₂ + NaOH',l0:'ion-cu2',ppt:'ppt-cu-oh-2',out:['osad'],why:'Niebieski, galaretowaty osad Cu(OH)₂; roztwór traci barwę.'});
 P('niso4Naoh',{n:'NiSO₄ + NaOH',l0:'ion-ni2',ppt:'ppt-ni-oh-2',out:['osad'],why:'Jasnozielony osad Ni(OH)₂.'});
 P('mnso4Naoh',{n:'MnSO₄ + NaOH',l0:'ion-mn2',ppt:'ppt-mn-oh-2',out:['osad'],why:'Jasny osad Mn(OH)₂, brunatnieje na powietrzu.'});
 P('pbno32Naoh',{n:'Pb(NO₃)₂ + NaOH',ppt:'ppt-pb-oh-2',out:['osad'],teacher:1,why:'Biały osad Pb(OH)₂ (amfoteryczny).'});
 P('cacl2Naoh',{n:'CaCl₂ + NaOH (stężone)',out:['osad'],turb:.45,why:'Słabe białe zmętnienie — Ca(OH)₂ jest tylko trudno rozpuszczalny.'});
 P('agno3Naoh',{n:'AgNO₃ + NaOH',ppt:[74,52,38],out:['osad'],why:'Brunatny osad Ag₂O (AgOH od razu się rozkłada).'});
 P('caoh2Hcl',{n:'Ca(OH)₂ + HCl (+ fenoloftaleina)',l0:pink,l1:php,out:['barwa'],heat:.3,T:28,why:'Zanik barwy malinowej — zobojętnianie.'});
 P('kohHcl',{n:'KOH + HCl (+ fenoloftaleina)',l0:pink,l1:php,out:['barwa'],heat:.4,T:31,why:'Zanik barwy malinowej; roztwór lekko się ogrzewa.'});
 P('kohHno3',{n:'KOH + HNO₃ (+ fenoloftaleina)',l0:pink,l1:php,out:['barwa'],heat:.4,T:31,why:'Zanik barwy malinowej.'});
 P('naohHno3',{n:'NaOH + HNO₃ (+ fenoloftaleina)',l0:pink,l1:php,out:['barwa'],heat:.4,T:31,why:'Zanik barwy malinowej.'});
 P('baoh2H2so4',{n:'Ba(OH)₂ + H₂SO₄ (+ fenoloftaleina)',l0:pink,l1:php,ppt:'ppt-baso4',out:['osad','barwa'],teacher:1,why:'Jednocześnie: zanik barwy (H⁺ + OH⁻ → H₂O) i biały osad BaSO₄.'});
 P('cuoh2H2so4',{n:'Cu(OH)₂ + H₂SO₄',solid:{col:'ppt-cu-oh-2',eq:4,end:0,t:'powder',shape:'powder'},l1:'ion-cu2',out:['barwa'],why:'Niebieski osad znika, roztwór niebieski (Cu²⁺).'});
 P('cuoh2Hcl',{n:'Cu(OH)₂ + HCl',solid:{col:'ppt-cu-oh-2',eq:4,end:0,t:'powder',shape:'powder'},l1:[94,196,201],out:['barwa'],why:'Osad znika, roztwór zielononiebieski.'});
 P('feoh3Hcl',{n:'Fe(OH)₃ + HCl',solid:{col:'ppt-fe-oh-3',eq:4,end:0,t:'powder',shape:'powder'},l1:'ion-fe3',out:['barwa'],why:'Brunatny osad znika, roztwór żółtobrunatny (Fe³⁺).'});
 P('znoh2Hcl',{n:'Zn(OH)₂ + HCl',solid:{col:'ppt-zn-oh-2',eq:4,end:0,t:'powder',shape:'powder'},out:['nic'],why:'Biały osad znika, roztwór bezbarwny.'});
 P('aloh3Naoh',{n:'Al(OH)₃ + NaOH (nadmiar)',solid:{col:'ppt-al-oh-3',eq:4,end:0,t:'powder',shape:'powder'},out:['nic'],why:'Biały osad roztwarza się w nadmiarze mocnej zasady — amfoteryczność.'});
 P('znoh2Naoh',{n:'Zn(OH)₂ + NaOH (nadmiar)',solid:{col:'ppt-zn-oh-2',eq:4,end:0,t:'powder',shape:'powder'},out:['nic'],why:'Osad roztwarza się — amfoteryczność.'});
 P('baoh2Co2',{n:'Ba(OH)₂ + CO₂',ppt:'ppt-caco3',out:['osad'],turb:.7,gas:'CO2',bubN:.8,teacher:1,why:'Białe zmętnienie BaCO₃.'});
 P('cuoh2Heat',{n:'Cu(OH)₂ — ogrzewanie',vessel:'testTube',solid:{col:'ppt-cu-oh-2',col2:'solid-cuo',eq:4,end:1,t:'powder',shape:'powder'},out:['barwa'],heat:2,T:85,why:'Niebieski osad czernieje — powstaje CuO i woda.'});
 P('feoh2O2',{n:'Fe(OH)₂ na powietrzu',solid:{col:'ppt-fe-oh-2',col2:'ppt-fe-oh-3',eq:4,end:1,t:'powder',shape:'powder'},out:['barwa'],why:'Zielonkawy osad brunatnieje od powierzchni — tlen utlenia Fe(II) do Fe(III).'});
 P('caoh2Na2co3',{n:'Ca(OH)₂ + Na₂CO₃',ppt:'ppt-caco3',out:['osad'],why:'Biały osad CaCO₃; w roztworze zostaje NaOH (kaustyfikacja).'});
 P('nh4clNaoh',{n:'NH₄Cl + NaOH (ogrzewanie)',out:['gaz'],gas:'NH3',bubN:.6,heat:1,T:60,why:'Wydziela się amoniak — zapach, wilgotny papierek uniwersalny niebieszczeje.'});
})();
