/* ===== GFX 1.7 — ELEKTROSTATYKA (fizyka): wspólne rysowanie GFX.electro + części (vessels) + efekt 'discharge'.
   Model liczbowy: CHE.PHYS.electro (p0_phys). Używają: widoki fiz-*, lekcja FIZ-01, katalog biblioteki (zakładka „Elektrostatyka”), w przyszłości Atlas / inne lekcje. ===== */
const ELX=(function(){
const POS='#dc2626',NEG='#2563eb',PE=()=>C.PHYS&&C.PHYS.electro;
function charge(c,x,y,s,r,a){if(!s)return;r=r||6;c.globalAlpha=a==null?1:a;c.fillStyle=s>0?POS:NEG;c.beginPath();c.arc(x,y,r,0,7);c.fill();c.strokeStyle='#fff';c.lineWidth=Math.max(1.2,r*.27);c.beginPath();c.moveTo(x-r*.55,y);c.lineTo(x+r*.55,y);if(s>0){c.moveTo(x,y-r*.55);c.lineTo(x,y+r*.55)}c.stroke();c.globalAlpha=1}
/* pręt (izolator lub metal) od (x0,y0) do (x1,y1): pary ± blado (ciało obojętne) + nadmiar ładunku przy końcu */
function rod(c,x0,y0,x1,y1,o){o=o||{};const T=o.th||th(),len=Math.hypot(x1-x0,y1-y0),ang=Math.atan2(y1-y0,x1-x0),w=o.width||18,q=Math.round(o.q||0);c.save();c.translate(x0,y0);c.rotate(ang);
 c.fillStyle=o.col||'#1f2937';c.strokeStyle=T.mut;c.lineWidth=1;rr(c,0,-w/2,len,w,w/2);c.fill();c.stroke();
 if(o.pairs!==false)for(let i=0;i<8;i++){const xx=14+i*(len-28)/7;charge(c,xx,-3,1,4,.18);charge(c,xx+6,3,-1,4,.18)}
 const n=Math.abs(q);for(let i=0;i<n;i++)charge(c,len-14-i*((len-28)/Math.max(1,n)),0,q,Math.min(6,w*.36));c.restore()}
/* tkanina / szmatka */
function cloth(c,x,y,w,h,o){o=o||{};const T=o.th||th(),q=Math.round(o.q||0);c.globalAlpha=o.alpha==null?1:o.alpha;c.fillStyle=o.col||'#cbd5e1';c.strokeStyle=T.mut;c.lineWidth=1;rr(c,x,y,w,h,10);c.fill();c.stroke();
 for(let i=0;i<Math.abs(q);i++)charge(c,x+10+(i%6)*14,y+12+Math.floor(i/6)*14,q,5);if(o.name){c.fillStyle=T.text;c.font='700 11px system-ui';c.textAlign='center';c.fillText(o.name,x+w/2,y+h+16)}c.globalAlpha=1}
/* wahadełko elektrostatyczne: kulka z folii na nitce; polar = {x,y,s} — kierunek źródła i znak jego ładunku (polaryzacja kulki obojętnej) */
function pendulum(c,px,py,L,phi,o){o=o||{};const T=o.th||th(),bR=o.r||13,bx=px+L*Math.sin(phi),by=py+L*Math.cos(phi);c.strokeStyle=T.mut;c.lineWidth=1.2;c.beginPath();c.moveTo(px-30,py);c.lineTo(px+30,py);c.stroke();c.beginPath();c.moveTo(px,py);c.lineTo(bx,by);c.stroke();
 const g=c.createRadialGradient(bx-4,by-4,2,bx,by,bR);g.addColorStop(0,'#fff');g.addColorStop(1,'#a8b3c2');c.fillStyle=g;c.beginPath();c.arc(bx,by,bR,0,7);c.fill();c.strokeStyle=T.mut;c.stroke();
 if(!o.q&&o.polar&&o.polar.s){const ex=o.polar.x-bx,ey=o.polar.y-by,l=Math.hypot(ex,ey)||1;charge(c,bx+ex/l*7,by+ey/l*7,-o.polar.s,4.5);charge(c,bx-ex/l*7,by-ey/l*7,o.polar.s,4.5)}
 else if(o.q){charge(c,bx,by,o.q,6);c.fillStyle=T.text;c.font='700 10px system-ui';c.textAlign='center';c.fillText((o.q>0?'+':'')+Math.round(o.q),bx,by+bR+12)}return{x:bx,y:by,r:bR}}
/* elektroskop w prostokącie r; st: {ball, leaves, theta?, ground, rod:{q,d,col}} */
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
/* linie pola (Q w pikselach: {x,y,q}); strzałki co 50 kroków */
function fieldLines(c,w,h,Q,o){o=o||{};const T=o.th||th(),P=PE();if(!P)return;c.strokeStyle=o.col||(T.dark?'rgba(148,163,184,.45)':'rgba(71,85,105,.4)');c.lineWidth=1;
 Q.forEach((q0,ci)=>{if(!q0.q)return;const n=o.n||Math.round(8+Math.abs(q0.q)*(o.scale||2e6));for(let i=0;i<n;i++){const an=2*Math.PI*i/n,s=q0.q>0?1:-1;let px=q0.x+Math.cos(an)*14,py=q0.y+Math.sin(an)*14;c.beginPath();c.moveTo(px,py);
  for(let k=0;k<700;k++){const f=P.fieldAt(Q,px,py),m=Math.hypot(f.x,f.y)||1;px+=s*3*f.x/m;py+=s*3*f.y/m;c.lineTo(px,py);if(px<0||px>w||py<0||py>h)break;if(Q.some((u,ui)=>ui!==ci&&u.q&&Math.hypot(px-u.x,py-u.y)<12))break;
   if(k===50){let aa=Math.atan2(s*f.y,s*f.x);if(s<0)aa+=Math.PI;c.moveTo(px,py);c.lineTo(px-6*Math.cos(aa-.45),py-6*Math.sin(aa-.45));c.moveTo(px,py);c.lineTo(px-6*Math.cos(aa+.45),py-6*Math.sin(aa+.45));c.moveTo(px,py)}}c.stroke()}})}
function pointCharge(c,x,y,q,label,o){o=o||{};const T=o.th||th();c.fillStyle=q>0?POS:q<0?NEG:'#94a3b8';c.beginPath();c.arc(x,y,14,0,7);c.fill();c.fillStyle='#fff';c.font='800 13px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(q>0?'+':q<0?'−':'0',x,y+1);c.textBaseline='alphabetic';if(label){c.fillStyle=T.text;c.font='700 12px system-ui';c.fillText(label,x,y+34)}}
function arrow(c,x,y,dx,len,col){if(!len)return;const ex=x+dx*len;c.strokeStyle=col||'#ea580c';c.fillStyle=col||'#ea580c';c.lineWidth=3.5;c.beginPath();c.moveTo(x,y);c.lineTo(ex,y);c.stroke();c.beginPath();c.moveTo(ex+dx*8,y);c.lineTo(ex-dx*2,y-7);c.lineTo(ex-dx*2,y+7);c.fill()}
/* pręt-przewodnik podzielony na komórki z ładunkiem (rozpływ) + kula źródłowa + mini-elektroskop na końcu */
function bar(c,xs,y0,xe,q,o){o=o||{};const T=o.th||th(),N=q.length-2,cw=(xe-xs)/N;const gr=c.createRadialGradient(xs-36,y0-8,3,xs-30,y0,26);gr.addColorStop(0,'#fff');gr.addColorStop(1,'#94a3b8');c.fillStyle=gr;c.beginPath();c.arc(xs-30,y0,26,0,7);c.fill();
 for(let j=0;j<Math.min(10,Math.round(q[0]/2));j++){const an=j/10*6.28;charge(c,xs-30+Math.cos(an)*15,y0+Math.sin(an)*15,1,4.5)}c.fillStyle=o.col||'#c2703d';c.strokeStyle=T.mut;c.fillRect(xs,y0-10,xe-xs,20);c.strokeRect(xs,y0-10,xe-xs,20);
 for(let i=1;i<=N;i++){const a=Math.min(1,q[i]/1.2);if(a>.08)charge(c,xs+(i-.5)*cw,y0,1,Math.min(6,cw*.45),a)}
 const ex=xe+46,ang=Math.min(60,55*(1-Math.exp(-Math.abs(q[N+1])/1.2)))*Math.PI/360;c.strokeStyle='#94a3b8';c.lineWidth=4;c.beginPath();c.moveTo(xe,y0);c.lineTo(ex,y0);c.lineTo(ex,y0+50);c.stroke();c.fillStyle='#fcd34d';c.strokeStyle='#b45309';c.lineWidth=1;[-1,1].forEach(s=>{c.save();c.translate(ex,y0+50);c.rotate(s*ang);c.fillRect(-3,0,6,50);c.strokeRect(-3,0,6,50);c.restore()})}
/* kula przewodząca z ładunkiem (symbole ∝ |q|, max 12) */
function sphere(c,x,y,R,q,o){o=o||{};const T=o.th||th(),g=c.createRadialGradient(x-R*.35,y-R*.35,2,x,y,R);g.addColorStop(0,'#fff');g.addColorStop(1,'#94a3b8');c.fillStyle=g;c.beginPath();c.arc(x,y,R,0,7);c.fill();c.strokeStyle=T.mut;c.lineWidth=1;c.stroke();
 const n=Math.min(12,Math.round(Math.abs(q)*(o.scale||1)));for(let i=0;i<n;i++){const a=i/n*6.283,rr2=R*.62;charge(c,x+Math.cos(a)*rr2,y+Math.sin(a)*rr2,q,Math.max(4,R*.16))}
 if(o.label){c.fillStyle=T.text;c.font='800 15px system-ui';c.textAlign='center';c.fillText(o.label,x,y-R-10)}if(o.value){c.font='700 13px system-ui';c.fillStyle=q>0?POS:q<0?NEG:T.mut;c.fillText(o.value,x,y+R+20)}}
/* iskra / wyładowanie (zygzak) */
function spark(c,x1,y1,x2,y2,a,seed){const n=9,dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;let s=seed||1;const rnd=()=>(s=(s*9301+49297)%233280)/233280-.5;c.save();c.globalAlpha=a==null?1:a;c.strokeStyle='#e0e7ff';c.shadowColor='#818cf8';c.shadowBlur=12;c.lineWidth=2.5;c.beginPath();c.moveTo(x1,y1);for(let i=1;i<n;i++){const t=i/n,o=rnd()*l*.18;c.lineTo(x1+dx*t+nx*o,y1+dy*t+ny*o)}c.lineTo(x2,y2);c.stroke();c.restore()}
return{charge,sphere,rod,cloth,pendulum,electroscope,fieldLines,pointCharge,arrow,bar,spark,POS,NEG}})();
/* części GFX (demo bez stanu: animują się same — katalog biblioteki) */
vessel('electroscope',{custom:(c,r,st,env)=>{let s=st;if(st.ball==null){const P=C.PHYS&&C.PHYS.electro,t=performance.now()/1000,d=.55+.45*Math.sin(t*.7),R=P?P.electroscope(0,-8,d,false):{ball:0,leaves:0};s={ball:R.ball,leaves:R.leaves,rod:{q:-8,d}}}ELX.electroscope(c,r,s,{th:env.th})}});
vessel('chargedRod',{custom:(c,r,st,env)=>{const q=st.q==null?-6:st.q;ELX.rod(c,r.x+10,r.y+r.h*.5,r.x+r.w-10,r.y+r.h*.5,{q,col:st.col||(q<0?'#1f2937':'#bae6fd'),th:env.th})}});
vessel('pendulum',{custom:(c,r,st,env)=>{const t=performance.now()/1000,phi=st.phi==null?.35*Math.sin(t*2.2):st.phi;ELX.pendulum(c,r.x+r.w/2,r.y+10,r.h-34,phi,{q:st.q==null?-3:st.q,th:env.th})}});
vessel('fieldMap',{custom:(c,r,st,env)=>{const Q=(st.charges||[{x:.3,y:.5,q:2e-6},{x:.7,y:.5,q:-2e-6}]).map(u=>({x:r.x+u.x*r.w,y:r.y+u.y*r.h,q:u.q}));c.save();c.beginPath();c.rect(r.x,r.y,r.w,r.h);c.clip();ELX.fieldLines(c,r.x+r.w,r.y+r.h,Q,{th:env.th});Q.forEach(u=>ELX.pointCharge(c,u.x,u.y,u.q,null,{th:env.th}));c.restore()}});
vessel('chargeBar',{custom:(c,r,st,env)=>{let q=st.cells;if(!q){const N=20,t=(performance.now()/1000)%6;q=new Array(N+2).fill(0);q[0]=10;for(let i=1;i<=N+1;i++)q[i]=Math.max(0,1.2*Math.min(1,t/2)-(i/N)*Math.max(0,1-t/2))}ELX.bar(c,r.x+50,r.y+r.h*.4,r.x+r.w-70,q,{col:st.col,th:env.th})}});
effect('discharge',{free:true,oneShot:true,layer:'front',label:'Wyładowanie (iskra)',defaults:{dur:.45,dx:0,dy:-90},schema:{dur:{t:'range',min:.1,max:1.5,step:.05,l:'Czas [s]'}},draw:e=>{const c=e.c,a=e.anchor;e.evs.forEach((v,i)=>{const o=v.o,k=Math.min(1,v.age/(o.dur||.45));ELX.spark(c,a.x,a.y,a.x+(o.dx||0),a.y+(o.dy==null?-90:o.dy),1-k,1+((v.age*30)|0)+i)})}});
