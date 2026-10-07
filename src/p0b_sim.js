/* ===== CHE.sim.ParticleSim v1.0 — jony w roztworze: ruch cieplny (CHE.PHYS), zderzenia, łączenie w klastry, strącanie osadu =====
   Zgodne z widgetem 'particleSim' (dawniej ionLab): new CHE.sim.ParticleSim({canvas, config:{particles:[{type,count,r,color,label,speed}],
   reaction:{cation,anion,ratio,product,color}}, onCounters({particles,clusters}), onCluster(), T}) · start() stop() reset() draw() _resize() setT(T)
   .running .particles (wolne i związane: {type,x,y,vx,vy,r,bound}) .clusters (liczba cząstek osadu). */
(function(){
C.sim=C.sim||{};
const PH=()=>C.PHYS,TAU=Math.PI*2;
const hexRgb=h=>{if(Array.isArray(h))return h;h=String(h||'#888').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');const n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255]};
const css=(c,a)=>'rgba('+c.map(v=>v|0).join(',')+','+(a==null?1:a)+')';
class ParticleSim{
 constructor(o){this.o=o||{};this.canvas=o.canvas;this.ctx=this.canvas.getContext('2d');this.cfg=o.config||{particles:[]};this.T=o.T==null?25:o.T;
  this.particles=[];this.groups=[];this.solid=[];this.clusters=0;this.running=false;this._raf=0;this._last=0;this._seed=1;this._quiet=true;this._resize();this.reset();this._quiet=false/* onCounters dopiero po konstrukcji (widget czyta simInst w callbacku) */}
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
   /* ruch Browna: losowe kopnięcia + tłumienie do prędkości termicznej */
   const vT=55*k*p.speed*(12/p.r);p.vx+=(this._rnd()-.5)*vT*3*dt*4;p.vy+=(this._rnd()-.5)*vT*3*dt*4;const v=Math.hypot(p.vx,p.vy)||1,f=1+(vT/v-1)*Math.min(1,dt*2);p.vx*=f;p.vy*=f;
   p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<p.r){p.x=p.r;p.vx=Math.abs(p.vx)}if(p.x>W-p.r){p.x=W-p.r;p.vx=-Math.abs(p.vx)}if(p.y<p.r){p.y=p.r;p.vy=Math.abs(p.vy)}if(p.y>floor-p.r){p.y=floor-p.r;p.vy=-Math.abs(p.vy)}}
  /* zderzenia sprężyste wolnych jonów + wiązanie kation–anion */
  for(let i=0;i<ps.length;i++){const a=ps[i];if(a.bound)continue;for(let j=i+1;j<ps.length;j++){const b=ps[j];if(b.bound)continue;const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy),m=a.r+b.r;if(d>=m||d<1e-6)continue;
   const cat=a.type===rx.cation?a:b.type===rx.cation?b:null,an=a.type===rx.anion?a:b.type===rx.anion?b:null;
   if(cat&&an&&cat!==an&&this._bind(cat,an))continue;
   const nx=dx/d,ny=dy/d,ov=(m-d)/2;a.x-=nx*ov;a.y-=ny*ov;b.x+=nx*ov;b.y+=ny*ov;const p=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;if(p>0){a.vx-=p*nx;a.vy-=p*ny;b.vx+=p*nx;b.vy+=p*ny}}}
  /* klastry: anionów przyciągniętych do kationu przybywa; pełny klaster → cząstka osadu opada (Stokes, CHE.PHYS) */
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
  /* osad na dnie */
  this.solid.forEach(s=>{c.fillStyle=css(s.col,.95);c.beginPath();for(let a=0;a<7;a++){const an=a/7*TAU+s.ph,rr=s.r*(.75+.25*Math.sin(a*2.3+s.ph));c.lineTo(s.x+Math.cos(an)*rr,s.y+Math.sin(an)*rr*.8)}c.closePath();c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke()});
  /* wiązania w klastrach */
  c.strokeStyle='rgba(30,41,59,.35)';c.lineWidth=1.5;this.groups.forEach(gq=>gq.members.forEach(m=>{c.beginPath();c.moveTo(gq.cat.x,gq.cat.y);c.lineTo(m.x,m.y);c.stroke()}));
  c.textAlign='center';c.textBaseline='middle';
  this.particles.forEach(p=>{const gr=c.createRadialGradient(p.x-p.r*.35,p.y-p.r*.35,1,p.x,p.y,p.r);gr.addColorStop(0,css(p.color.map(v=>Math.min(255,v+70))));gr.addColorStop(1,css(p.color));c.fillStyle=gr;c.beginPath();c.arc(p.x,p.y,p.r,0,TAU);c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke();
   c.fillStyle='#fff';c.font='700 '+Math.max(8,Math.round(p.r*.72))+'px system-ui,sans-serif';c.fillText(p.label,p.x,p.y+.5)});
  c.textAlign='left';c.textBaseline='alphabetic';c.fillStyle='rgba(30,41,59,.75)';c.font='600 11px system-ui,sans-serif';c.fillText('T = '+Math.round(this.T)+' °C · ruch cieplny ∝ √T',8,14)}
}
ParticleSim.v=1;
C.sim.ParticleSim=ParticleSim;
})();
