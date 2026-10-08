

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
/*@@GFX naczynia/beaker@@*/
/*@@GFX naczynia/testTube@@*/
/*@@GFX naczynia/cylinder@@*/
/*@@GFX naczynia/flask@@*/
/*@@GFX naczynia/roundFlask@@*/
/*@@GFX naczynia/volFlask@@*/
/*@@GFX naczynia/funnel@@*/
/*@@GFX naczynia/petri@@*/
/*@@GFX naczynia/evapDish@@*/
/*@@GFX naczynia/crucible@@*/
/*@@GFX naczynia/watchGlass@@*/
 
const dfG=r=>{const cx=r.x+r.w/2,n=Math.min(r.w*.08,8),R=Math.min(r.w*.42,r.h*.22),yb=r.y+r.h*.62,yt=r.y+r.h*.1,cy=yb-R*1.15;return{cx,n,R,yb,yt,cy}};
/*@@GFX naczynia/dropFunnel@@*/

/*@@GFX efekty/heatGlow@@*/
 
/*@@GFX efekty/liquid@@*/
/*@@GFX efekty/meniscus@@*/

const PPT_LOOK={serowaty:{per:1800,n:22,a:2.6,b:2.2,haze:.28,al:.85},'kłaczkowaty':{per:4200,n:18,a:4.5,b:3.2,haze:.36,al:.5},krystaliczny:{per:1300,n:30,a:1.4,b:1.4,haze:.14,al:.95,cr:1},drobny:{per:6500,n:60,a:1,b:1,haze:.46,al:.7}};
/*@@GFX efekty/precipitate@@*/
/*@@GFX efekty/plume@@*/
 
/*@@GFX efekty/turbidity@@*/
 
const shapeOf=s=>s.shape||(s.t==='metal'?'strip':'chips');
/*@@GFX efekty/solids@@*/
 
/*@@GFX efekty/bubbles@@*/
/*@@GFX efekty/foam@@*/
/*@@GFX efekty/ripples@@*/
 
/*@@GFX efekty/dropMix@@*/
 
/*@@GFX efekty/schlieren@@*/
 
/*@@GFX efekty/stirBar@@*/
/*@@GFX efekty/condensation@@*/
/*@@GFX efekty/fumes@@*/
/*@@GFX efekty/steam@@*/
/*@@GFX efekty/heatConvection@@*/
/*@@GFX efekty/splash@@*/
 
/*@@GFX efekty/scale@@*/
 
/*@@GFX efekty/label@@*/
 
/*@@GFX efekty/stopper@@*/
 
/*@@GFX efekty/tap@@*/

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
/*@@GFX efekty/flame@@*/
/*@@GFX efekty/sparks@@*/
/*@@GFX efekty/metalBurn@@*/
/*@@GFX efekty/explosion@@*/
/*@@GFX efekty/flash@@*/
function hexOf(c){return '#'+c.map(v=>('0'+Math.round(v).toString(16)).slice(-2)).join('')}
function rgbOf(h){return[1,3,5].map(i=>parseInt(h.substr(i,2),16))}
function optionsPanel(host,id,o,cb){host.innerHTML='';const f=E[id];if(!f||!f.schema)return;const d=f.defaults||{};Object.keys(f.schema).forEach(k=>{const s=f.schema[k],row=document.createElement('label');row.style.cssText='display:grid;grid-template-columns:120px 1fr auto;gap:6px;align-items:center;font-size:12px';row.innerHTML='<span>'+s.l+'</span>';let inp;
if(s.t==='range'){inp=document.createElement('input');inp.type='range';inp.min=s.min;inp.max=s.max;inp.step=s.step||.05;inp.value=o[k]!=null?o[k]:d[k];const out=document.createElement('output');out.textContent=inp.value;inp.oninput=()=>{o[k]=+inp.value;out.textContent=inp.value;cb&&cb(k)};row.append(inp,out)}
else if(s.t==='color'){inp=document.createElement('input');inp.type='color';inp.value=hexOf(o[k]||d[k]||[255,200,60]);inp.oninput=()=>{o[k]=rgbOf(inp.value);cb&&cb(k)};const b=document.createElement('button');b.type='button';b.textContent='auto';b.onclick=()=>{delete o[k];if(d[k])inp.value=hexOf(d[k]);cb&&cb(k)};row.append(inp,b)}
else{inp=document.createElement('select');(s.opts||[]).forEach(x=>{const q=document.createElement('option');q.value=q.textContent=x;inp.appendChild(q)});inp.value=o[k]||d[k];inp.onchange=()=>{o[k]=inp.value;cb&&cb(k)};row.append(inp,document.createElement('span'))}
host.appendChild(row)})}
const PRESETS=[{label:'Spalanie magnezu',id:'metalBurn',o:{metal:'Mg'}},{label:'Wełna stalowa (iskry)',id:'metalBurn',o:{metal:'Fe'}},{label:'Spalanie sodu (żółty)',id:'metalBurn',o:{metal:'Na'}},{label:'Spalanie miedzi (zielone)',id:'metalBurn',o:{metal:'Cu'}},{label:'Płomień — metan',id:'flame',o:{phi:1,power:.8}},{label:'Płomień — kopcący',id:'flame',o:{phi:1.4,soot:.6,power:.9}},{label:'Płomień — lit (czerwony)',id:'flame',o:{color:FLAME_COLORS.Li,power:.8}},{label:'Płomień — sód (żółty)',id:'flame',o:{color:FLAME_COLORS.Na,power:.8}},{label:'Płomień — potas (fioletowy)',id:'flame',o:{color:FLAME_COLORS.K,power:.8}},{label:'Płomień — bar (zielony)',id:'flame',o:{color:FLAME_COLORS.Ba,power:.8}},{label:'Płomień — miedź (niebieskozielony)',id:'flame',o:{color:FLAME_COLORS.Cu,power:.8}},{label:'Wybuch H₂ + O₂ (niebieski)',id:'explosion',o:{color:[140,185,255],size:1.1,smoke:.5,smokeColor:[190,200,215]}},{label:'Wybuch — ognisty',id:'explosion',o:{}},{label:'Iskry',id:'sparks',o:{rate:90}},{label:'Błysk',id:'flash',o:{}}];
/*@@GFX naczynia/stage@@*/
 
/*@@GFX efekty/splint@@*/
/*@@GFX efekty/pop@@*/
PRESETS.push({label:'Łuczywko płonące',id:'splint',o:{mode:'flame'}},{label:'Łuczywko tlące się (test na O₂)',id:'splint',o:{mode:'glow'}},{label:'„Pyk!" — wodór',id:'pop',o:{}});
 
/*@@GFX naczynia/anchor@@*/
 
function burner(c,r,st,env){const T=env.th,f=st.flame||{},cx=r.x+r.w/2,base=r.y+r.h-6,tw=Math.min(r.w*.14,16),top=base-64;
c.strokeStyle=T.glass;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(cx-58,base);c.lineTo(cx+58,base);c.stroke();
c.fillStyle=T.dark?'#475569':'#94a3b8';c.fillRect(cx-34,base-10,68,10);c.fillRect(cx-tw,base-64,tw*2,54);
c.fillStyle=T.dark?'#334155':'#64748b';c.fillRect(cx-tw-3,base-40,tw*2+6,9);
const air=Math.max(0,Math.min(1.6,(f.air==null?100:f.air)/100));c.fillStyle='rgba(15,23,42,'+(.35+.25*(1-Math.min(1,air)))+')';c.fillRect(cx-tw-2,base-37,tw*2+4,3);
if(!f.on||!(f.power>.05)){c.fillStyle='rgba(120,140,160,.25)';c.beginPath();c.arc(cx,base-68,4,0,7);c.fill()}
else env.fx=Object.assign({},env.fx,{flame:{power:Math.min(1,f.power),phi:f.phi==null?(1/Math.max(.08,air)):f.phi,soot:f.soot||0,temp:f.temp||900,color:f.color||null,fuel:f.fuel||'CH4',salt:f.salt||''}});
return{x:cx,y:top}}
/*@@GFX naczynia/burner@@*/
 
function cooler(c,r,st,env){const T=env.th,k=st.coolant||{Tin:15,Tout:15,flow:.0004,q:0},t=env.t,x0=r.x+r.w*.16,x1=r.x+r.w*.84,cy=r.y+r.h/2,jh=Math.min(r.h*.5,70),ih=jh*.28;
const g=c.createLinearGradient(x0,0,x1,0);g.addColorStop(0,rgba(tc(k.Tout),.55));g.addColorStop(1,rgba(tc(k.Tin),.55));c.fillStyle=g;c.fillRect(x0,cy-jh/2,x1-x0,jh);
const sp=Math.min(1,(k.flow||0)/.0008),dir=-1;c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.5;c.setLineDash([8,12]);c.lineDashOffset=dir*t/1000*(10+90*sp);[-.28,.28].forEach(o=>{c.beginPath();c.moveTo(x1,cy+jh*o);c.lineTo(x0,cy+jh*o);c.stroke()});c.setLineDash([]);
c.fillStyle=T.dark?'rgba(15,23,42,.8)':'rgba(255,255,255,.8)';c.fillRect(x0-14,cy-ih/2,x1-x0+28,ih);
const vap=Math.max(0,Math.min(1,((st.T==null?25:st.T)-30)/70));for(let i=0;i<10;i++){const u=((t/2000)+rnd(i))%1,x=x0-14+u*(x1-x0+28),a=vap*(1-u)*.5;c.fillStyle='rgba(235,240,248,'+a+')';c.beginPath();c.arc(x,cy-ih*.1+Math.sin(t/300+i)*2,3+3*(1-u),0,7);c.fill()}
const cd=Math.min(1,(k.q||0)/80)*vap;c.fillStyle='rgba(120,180,230,.85)';for(let i=0;i<6;i++){const u=((t/1500)+rnd(i+12))%1,x=x0+(x1-x0)*(.45+.55*u);if(rnd(i+5)>cd+.3)continue;c.beginPath();c.arc(x,cy+ih*.3+u*ih*.2,2.2,0,7);c.fill()}
c.strokeStyle=T.glass;c.lineWidth=4;c.lineJoin='round';c.strokeRect(x0,cy-jh/2,x1-x0,jh);c.lineWidth=3;c.beginPath();c.moveTo(x0-14,cy-ih/2);c.lineTo(x1+14,cy-ih/2);c.moveTo(x0-14,cy+ih/2);c.lineTo(x1+14,cy+ih/2);c.stroke();
c.lineWidth=5;c.beginPath();c.moveTo(x0+16,cy-jh/2);c.lineTo(x0+16,cy-jh/2-18);c.moveTo(x1-16,cy+jh/2);c.lineTo(x1-16,cy+jh/2+18);c.stroke();
c.fillStyle=T.text;c.font='700 11px Inter,system-ui';c.textAlign='left';c.fillText('woda wyj. '+(+k.Tout||0).toFixed(1)+' °C',x0+22,cy-jh/2-8);c.textAlign='right';c.fillText('woda wej. '+(+k.Tin||0).toFixed(1)+' °C',x1-22,cy+jh/2+30);c.textAlign='left';c.fillStyle=T.mut;c.fillText('para →  ← skropliny',x0,r.y+10)}
/*@@GFX naczynia/cooler@@*/

const IND_FB={'ind-oranz-metylowy':p=>mc([220,38,38],[250,204,21],sm(p,3.1,4.4)),'ind-kapusta':p=>{const S=[[0,[220,38,38]],[4,[192,38,211]],[7,[109,91,208]],[9,[20,184,166]],[11,[34,197,94]],[14,[250,204,21]]];for(let i=1;i<S.length;i++)if(p<=S[i][0])return mc(S[i-1][1],S[i][1],(p-S[i-1][0])/(S[i][0]-S[i-1][0]));return S[S.length-1][1]},'ind-fenoloftaleina':p=>mc(WATER,[219,39,119],sm(p,8.2,10)),'ind-bbt':p=>mc([250,204,21],[37,99,235],sm(p,6,7.6))};
const indCol=(id,p)=>{const a=colors.at(id,p);if(a)return a;const f=IND_FB[id]||PHF[id];return f?f(p):WATER.slice()};
const indName=(id,p)=>{try{const s=C.COLORS&&C.COLORS.state&&C.COLORS.state(id,p);if(s)return s.label}catch(_){}return ''};
 
function stand(c,r,st,env){const T=env.th,X=f=>env.W?(env.X0||0)+f*env.W:r.x+f*r.w,Y=f=>env.H?f*env.H:r.y+f*r.h,rx=r.x+Math.min(14,r.w*.1),b=r.y+r.h,front=st.layer==='front',both=st.layer==='both',cl=st.clamps||[{x:.62,y:.3}];
 if(!front||both){c.fillStyle=T.metalD;rr(c,r.x,b-10,Math.max(80,r.w*.8),10,3);c.fill();const g1=c.createLinearGradient(rx-3,0,rx+3,0);g1.addColorStop(0,T.metalL);g1.addColorStop(1,T.metalD);c.fillStyle=g1;c.fillRect(rx-3,r.y,6,b-10-r.y);c.fillStyle=T.metalD;c.beginPath();c.arc(rx,r.y,3,0,7);c.fill()}
 cl.forEach(k=>{const y=Y(k.y),x=X(k.x),jw=(k.w>1?k.w:(k.w||.05)*(env.W||r.w))/2;if(!front||both){c.fillStyle=T.metal;c.fillRect(rx+6,y-2.5,Math.max(0,x-jw-rx-10),5);c.fillStyle=T.metalD;rr(c,rx-7,y-7,14,14,2);c.fill();c.fillStyle=T.metalL;c.beginPath();c.arc(rx-10,y,3,0,7);c.fill()}
  if(k.ring){if(front){c.strokeStyle=T.metal;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,jw+5,4,0,0,Math.PI);c.stroke()}else{c.strokeStyle=T.metalD;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,jw+5,4,0,Math.PI,7);c.stroke()}return}
  if(front||both){c.lineCap='round';c.strokeStyle=T.metalD;c.lineWidth=4;c.beginPath();c.moveTo(x-jw-10,y);c.lineTo(x-jw-3,y-8);c.moveTo(x-jw-10,y);c.lineTo(x-jw-3,y+8);c.moveTo(x+jw+3,y-8);c.quadraticCurveTo(x+jw+9,y,x+jw+3,y+8);c.stroke();c.fillStyle=T.wood;rr(c,x-jw-4,y-8,4,16,1);c.fill();rr(c,x+jw,y-8,4,16,1);c.fill();c.fillStyle=T.metalL;c.beginPath();c.arc(x+jw+11,y,3,0,7);c.fill()}})}
/*@@GFX naczynia/stand@@*/
 
function tripod(c,r,st,env){const T=env.th,cx=r.x+r.w/2,w=r.w,y0=r.y+5,b=r.y+r.h,k=cl01((st.heat||0)/3);c.lineCap='round';c.strokeStyle=T.metal;c.lineWidth=3;c.beginPath();c.moveTo(cx+w*.05,y0+4);c.lineTo(cx+w*.12,b);c.stroke();c.strokeStyle=T.metalD;c.lineWidth=4;c.beginPath();c.moveTo(cx-w*.36,y0+4);c.lineTo(cx-w*.46,b);c.moveTo(cx+w*.36,y0+4);c.lineTo(cx+w*.46,b);c.moveTo(cx-w*.4,y0+5);c.lineTo(cx+w*.4,y0+5);c.stroke();
 c.fillStyle=T.metal;c.fillRect(cx-w*.48,r.y,w*.96,4);c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=.7;for(let x=cx-w*.47;x<cx+w*.47;x+=4){c.beginPath();c.moveTo(x,r.y);c.lineTo(x+3,r.y+4);c.stroke()}
 c.fillStyle=T.dark?'#cbd5e1':'#e7e5e4';rr(c,cx-w*.2,r.y-1,w*.4,6,3);c.fill();if(k>0){const g1=c.createRadialGradient(cx,r.y+2,1,cx,r.y+2,w*.24);g1.addColorStop(0,'rgba(255,90,30,'+(.9*k)+')');g1.addColorStop(1,'rgba(255,90,30,0)');c.fillStyle=g1;c.fillRect(cx-w*.26,r.y-4,w*.52,12)}return{x:cx,y:r.y-2}}
/*@@GFX naczynia/tripod@@*/
 
function spiritLamp(c,r,st,env){const T=env.th,L=st.lamp||{on:1,lv:.6},cx=r.x+r.w/2,b=r.y+r.h-3,bw=Math.min(r.w*.75,96),bh=Math.min(r.h*.42,64),ny=b-bh;
 c.save();rr(c,cx-bw/2,ny,bw,bh,[bh*.5,bh*.5,8,8]);c.fillStyle=T.tint;c.fill();c.clip();c.fillStyle='rgba(196,214,236,.55)';c.fillRect(cx-bw/2,b-bh*cl01(L.lv==null?.6:L.lv),bw,bh);highlights({hl:.15},c,{x:cx-bw/2,y:ny,w:bw,h:bh},T);c.restore();
 rr(c,cx-bw/2,ny,bw,bh,[bh*.5,bh*.5,8,8]);c.strokeStyle=T.glass;c.lineWidth=3;c.stroke();c.fillStyle=T.metal;rr(c,cx-11,ny-10,22,12,2);c.fill();c.fillStyle='#f5f5f4';c.fillRect(cx-3,ny-22,6,12);c.fillStyle='#292524';c.fillRect(cx-3,ny-24,6,3);
 if(L.on){env.fx=Object.assign({},env.fx,{flame:{power:.42,phi:1.32,soot:0,temp:700,size:.6,flicker:1.4,glow:.8,fuel:'C2H5OH',diffusion:true,salt:L.salt||''}})}else{c.strokeStyle=T.glass;c.lineWidth=2.5;c.fillStyle=T.tint;rr(c,cx-14,ny-34,28,26,[12,12,2,2]);c.fill();c.stroke()}
 return{x:cx,y:ny-22}}
/*@@GFX naczynia/spiritLamp@@*/
 
function hotplate(c,r,st,env){const T=env.th,w=Math.min(r.w,230),x=r.x+(r.w-w)/2,h=Math.min(r.h*.8,46),y=r.y+r.h-h,k=cl01((st.heat||0)/3),s=cl01(st.stir||0);
 c.fillStyle=T.dark?'#334155':'#e5e7eb';c.strokeStyle=T.glass;c.lineWidth=2;rr(c,x,y,w,h,8);c.fill();c.stroke();c.fillStyle=T.dark?'#cbd5e1':'#f8fafc';rr(c,x+8,y-7,w-16,9,3);c.fill();c.stroke();if(k>0){c.fillStyle='rgba(239,68,68,'+(.7*k)+')';rr(c,x+8,y-7,w-16,9,3);c.fill()}
 [[.25,k,'grzanie'],[.75,s,'obroty']].forEach(([f,v,l])=>{const kx=x+w*f,ky=y+h*.5,a=-2.36+v*4.71;c.fillStyle=T.dark?'#1e293b':'#475569';c.beginPath();c.arc(kx,ky,9,0,7);c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(kx,ky);c.lineTo(kx+Math.cos(a)*7,ky+Math.sin(a)*7);c.stroke();txt(c,l,kx+14,ky+4,T.mut,'left',9)});
 c.fillStyle=k>0?'#ef4444':(T.dark?'#475569':'#cbd5e1');c.beginPath();c.arc(x+w*.5,y+h*.5,3.5,0,7);c.fill();return{x:x+w/2,y:y-7}}
/*@@GFX naczynia/hotplate@@*/
 
function dropper(c,r,st,env){const T=env.th,d=st.dropper||{lv:.5,color:[219,39,119]},p=env.pool,cx=r.x+r.w/2,bR=Math.min(r.w*.22,14),t0=r.y+bR*2+6,tb=r.y+r.h-18,tip=r.y+r.h-2,w=9,col=d.color||[205,228,238];
 if((st.dropReq||0)>(p.dq==null?st.dropReq||0:p.dq))p.sq=1;p.sq=Math.max(0,(p.sq||0)-(env.dt||.016)*3);const sq=p.sq;
 c.fillStyle=T.dark?'#991b1b':'#dc2626';c.beginPath();c.ellipse(cx,r.y+bR+1,bR*(.78-.25*sq),bR,0,0,7);c.fill();c.fillRect(cx-w/2-2,r.y+bR*2-2,w+4,8);
 const lv=cl01(d.lv==null?.5:d.lv),ly=tb-(tb-t0)*lv;c.fillStyle=rgba(col,.8);c.beginPath();c.moveTo(cx-w/2+1.5,ly);c.lineTo(cx+w/2-1.5,ly);c.lineTo(cx+w/2-1.5,tb);c.lineTo(cx+1,tip-2);c.lineTo(cx-1,tip-2);c.lineTo(cx-w/2+1.5,tb);c.closePath();c.fill();
 c.strokeStyle=T.glass;c.lineWidth=2.5;c.lineJoin='round';c.beginPath();c.moveTo(cx-w/2,t0);c.lineTo(cx-w/2,tb);c.lineTo(cx-1.2,tip);c.lineTo(cx+1.2,tip);c.lineTo(cx+w/2,tb);c.lineTo(cx+w/2,t0);c.stroke();
 drips(c,env,st,cx,tip+2,col,d.drip||0,r,2.6)}
/*@@GFX naczynia/dropper@@*/
 
function gasCollect(c,r,st,env){const T=env.th,p=env.pool,tx0=r.x+r.w*.06,tx1=r.x+r.w*.98,ty=r.y+r.h*.55,tb=r.y+r.h-4,wy=ty+10,cx=r.x+r.w*.64,cw=Math.min(r.w*.2,50),cy0=r.y+8,cy1=tb-16,gv=cl01(st.gasV||0),gy=cy0+(cy1-cy0-12)*gv,W=st.water||[205,228,238],gc=st.gasColor;
 c.fillStyle=rgba(W,.5);c.fillRect(tx0,wy,tx1-tx0,tb-wy);c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=1.5;c.beginPath();c.moveTo(tx0,wy);c.lineTo(tx1,wy);c.stroke();
 const inY=r.y+r.h*.4,tx=tx0+16;tube(c,[[r.x,inY],[tx,inY],[tx,tb-9],[cx-2,tb-9],[cx-2,cy1+6]],{flow:st.gas||0,t:env.t,th:T});
 c.fillStyle=gc?rgba(gc,.35):(T.dark?'rgba(226,232,240,.08)':'rgba(255,255,255,.55)');c.fillRect(cx-cw/2,cy0,cw,gy-cy0);c.fillStyle=rgba(W,.62);c.fillRect(cx-cw/2,gy,cw,cy1-gy);c.strokeStyle='rgba(255,255,255,.7)';c.beginPath();c.moveTo(cx-cw/2,gy);c.lineTo(cx+cw/2,gy);c.stroke();
 const b=p.bub=p.bub||[];if((st.gas||0)>0&&Math.random()<st.gas*(env.dt||.016)*14)b.push({y:cy1+4,x:cx+(Math.random()-.5)*6,r:2+Math.random()*3});for(let i=b.length-1;i>=0;i--){const q=b[i];q.y-=60*(env.dt||.016);q.x+=Math.sin((env.t||0)/180+i)*.3;if(q.y<gy+q.r){b.splice(i,1);continue}c.beginPath();c.arc(q.x,q.y,q.r,0,7);c.fillStyle='rgba(255,255,255,.55)';c.fill();c.strokeStyle='rgba(80,100,120,.45)';c.lineWidth=1;c.stroke()}
 c.strokeStyle=T.glass;c.lineWidth=3;c.beginPath();c.moveTo(cx-cw/2,cy1);c.lineTo(cx-cw/2,cy0+6);c.quadraticCurveTo(cx-cw/2,cy0,cx-cw/2+6,cy0);c.lineTo(cx+cw/2-6,cy0);c.quadraticCurveTo(cx+cw/2,cy0,cx+cw/2,cy0+6);c.lineTo(cx+cw/2,cy1);c.stroke();
 c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;font(c,600,8);c.textAlign='right';const mx=st.gasMax||100;for(let i=0;i<=10;i++){const y=cy0+(cy1-cy0-12)*i/10;c.beginPath();c.moveTo(cx+cw/2-(i%5?4:8),y);c.lineTo(cx+cw/2,y);c.stroke();if(!(i%5))c.fillText(Math.round(mx*i/10),cx+cw/2-10,y+3)}
 c.save();rc(c,tx0,ty,tx1-tx0,tb-ty,10);c.strokeStyle=T.glass;c.lineWidth=3.5;c.stroke();c.restore();txt(c,'V = '+fmt(gv*mx,0)+' cm³',cx+cw/2+8,cy0+14,T.text,'left',11,800)}