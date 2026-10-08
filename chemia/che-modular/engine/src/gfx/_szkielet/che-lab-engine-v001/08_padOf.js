
 
/*@@GFX naczynia/electroscope@@*/
/*@@GFX naczynia/chargedRod@@*/
/*@@GFX naczynia/pendulum@@*/
/*@@GFX naczynia/fieldMap@@*/
/*@@GFX naczynia/chargeBar@@*/
/*@@GFX efekty/discharge@@*/
 
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
/*@@GFX sceny/acidMetal@@*/

/*@@GFX sceny/indicator@@*/

/*@@GFX sceny/indicatorRack@@*/

const tpH=S=>{const nA=S.ca*S.Va/1000,nB=S.cb*S.V/1000,Vt=(S.Va+S.V)/1000,d=(nA-nB)/Vt,Hc=d/2+Math.sqrt(d*d/4+1e-14);return-Math.log10(Hc)};
const tLv=S=>Math.min(1,(S.Va+S.V)/62);
/*@@GFX sceny/titration@@*/

/*@@GFX sceny/dilution@@*/

const CSOL={dist:{n:'woda destylowana',f:'H₂O',cond:.02,mol:[{id:'H2O',n:16}],t:'nieelektrolit (prawie nie przewodzi)'},sugar:{n:'roztwór cukru',f:'C₆H₁₂O₆',cond:.02,mol:[{id:'C6H12O6',n:3},{id:'H2O',n:12}],t:'nieelektrolit — cząsteczki nie rozpadają się na jony'},HCl:{n:'kwas solny',f:'HCl(aq)',cond:1,el:{cat:{f:'H₂',n:1},an:{f:'Cl₂',n:.6,col:[214,232,140]},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻',rx:'elHcl'},mol:[{id:'H3O+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny — HCl całkowicie zdysocjowany: H₃O⁺ + Cl⁻'},H2SO4:{n:'kwas siarkowy(VI)',f:'H₂SO₄(aq)',cond:1,el:{cat:{f:'H₂',n:1},an:{f:'O₂',n:.5},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ (jony SO₄²⁻ nie utleniają się)',rx:'elH2o'},mol:[{id:'H3O+',n:6},{id:'SO42-',n:3},{id:'H2O',n:8}],t:'elektrolit mocny: 2H₃O⁺ + SO₄²⁻'},CH3COOH:{n:'kwas octowy',f:'CH₃COOH(aq)',cond:.3,el:{cat:{f:'H₂',n:.5},an:{f:'O₂',n:.25},eq:'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ — mało jonów, więc gazu niewiele',rx:'elH2o'},mol:[{id:'CH3COOH',n:5},{id:'H3O+',n:1},{id:'CH3COO-',n:1},{id:'H2O',n:9}],t:'elektrolit słaby — zdysocjowana tylko niewielka część cząsteczek'},NaOH:{n:'zasada sodowa',f:'NaOH(aq)',cond:.95,el:{cat:{f:'H₂',n:1},an:{f:'O₂',n:.5},eq:'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ (Na⁺ się nie redukuje) · anoda (+): 4 OH⁻ → O₂↑ + 2 H₂O + 4 e⁻',rx:'elH2o'},mol:[{id:'Na+',n:6},{id:'OH-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny: Na⁺ + OH⁻'},NaCl:{n:'roztwór soli kuchennej',f:'NaCl(aq)',cond:.9,el:{cat:{f:'H₂',n:1},an:{f:'Cl₂',n:.6,col:[214,232,140]},eq:'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻ (w roztworze stężonym)',rx:'elNacl'},mol:[{id:'Na+',n:6},{id:'Cl-',n:6},{id:'H2O',n:8}],t:'elektrolit mocny: Na⁺ + Cl⁻'}};
/*@@GFX sceny/conductivity@@*/

const GRX={H2:{n:'Zn + 2HCl → ZnCl₂ + H₂↑',sol:{col:[154,167,179],t:'metal',shape:'granule'},k:1,foam:0,txt:'Wodór słabo rozpuszcza się w wodzie, więc zbiera się go metodą wypierania wody.'},CO2:{n:'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',sol:{col:[240,240,232],t:'solid',shape:'chips'},k:.75,foam:.6,txt:'CO₂ częściowo rozpuszcza się w wodzie — zbiera się wolniej; lepiej zbierać go metodą wypierania powietrza.'}};
/*@@GFX sceny/gasCollection@@*/

/*@@GFX sceny/carbonate@@*/

/*@@GFX sceny/heating@@*/

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