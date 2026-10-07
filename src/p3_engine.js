/* ===================== SILNIK RYSOWANIA ===================== */
const padOf=(v,r)=>typeof v.pad==='function'?v.pad(r):v.pad;
/* szkło: tinta, odblaski, podwójna krawędź, wywinięty brzeg + elipsa wylotu; porcelana: matowa, bez odblasków */
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
/* rurka szklana (połączenie): pts w px; flow>0 → animowany przepływ gazu; liquid → rurka wypełniona cieczą */
function tube(c,pts,o){o=o||{};const T=o.th||th();if(!pts||pts.length<2)return;const w=o.w||8;c.save();c.lineJoin=c.lineCap='round';const P=()=>{c.beginPath();pts.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]))};
 P();c.strokeStyle=T.glass;c.lineWidth=w;c.stroke();P();c.strokeStyle=T.dark?'#1e293b':'#eef4f8';c.lineWidth=w-3.5;c.stroke();if(o.liquid){P();c.strokeStyle=rgba(o.liquid,.85);c.lineWidth=w-4;c.stroke()}
 if(o.flow>0){P();c.setLineDash([5,9]);c.lineDashOffset=-(o.t||0)/1000*70*Math.min(2,o.flow);c.strokeStyle=rgba(o.color||[148,170,190],.95);c.lineWidth=2.4;c.stroke();c.setLineDash([])}c.restore()}
/* --- stan wspólny: jedna sesja LAB → każdy moduł --- */
function fromLab(lab){const S=lab.S||{};let ph=7;try{ph=pH(S)}catch(_){}const t=lab.thermalState,b=lab.combustionState,k=lab.coolerState;return{pH:ph,titrant:lab.titrationState||null,liquid:liquidColor(S),level:clamp(.28+.18*Math.min(S.V||1,4),.28,.82),ppts:S.ppts||[],solids:S.solids||[],gas:Math.min(1,S.gasT||0),heat:S.heat||0,fumes:S.fumes||0,pop:0,T:t?t.T:(S.T!=null?S.T:25),flame:b&&b.on?{on:1,power:b.power,phi:b.phi,soot:b.soot,temp:b.temp,air:b.air,color:b.flameRGB||null}:null,coolant:k?{Tin:k.Tin,Tout:k.Tout,flow:k.flow,q:k.q}:null}}
/* --- scena: parts=[{id,x,y,w,h (ułamki 0-1),name?,get?(S),s?,show?(S)}] albo vessel:'id'; state (wspólny S), tick(S,dt,t,api), links, overlay(c,W,H,S,t,T) --- */
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
/* --- pojedynczy efekt jako samodzielny widżet --- */
function mountEffect(id,host,opt){opt=opt||{};const wrap=document.createElement('div');wrap.dataset.effect=id;wrap.style.cssText='position:relative;border:1px solid var(--border,#e2e8f0);border-radius:12px;overflow:hidden';host.appendChild(wrap);const f=E[id]||{};
 const demo={liquid:[205,228,238],level:.55,gas:1,heat:3,fumes:1,splash:1,T:95,pop:0,ppts:[{col:[248,250,252],eq:1.2}],solids:[{col:[154,167,179],eq:3,t:'metal',shape:'granule'}],turb:.6,schl:1,stir:.8,label:'HCl',stopper:true};let n=0;
 const m=mount(wrap,{height:opt.height||170,vessel:f.free?'stage':(f.vessels?f.vessels[0]:'beaker'),only:f.free?[id]:['glass','liquid','meniscus',id],get:()=>{n++;demo.fx=f.free&&!f.oneShot?{[id]:{}}:null;if((f.oneShot||f.evented)&&n%170===1&&m)m.trigger(id);demo.pop=id==='ripples'||id==='precipitate'?1-((n%120)/120):0;demo.splash=id==='splash'?1:0;return demo}});return{host:wrap,destroy:()=>{m.destroy();if(wrap.parentNode)wrap.parentNode.removeChild(wrap)}}}
