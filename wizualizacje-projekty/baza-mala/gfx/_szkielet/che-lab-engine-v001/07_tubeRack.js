
/*@@GFX naczynia/gasCollect@@*/
 
function tubeRack(c,r,st,env){const T=env.th,tubes=st.tubes||[{label:'1',liquid:[229,38,46],level:.5},{label:'2',liquid:[246,162,30],level:.5},{label:'3',liquid:[92,184,92],level:.5},{label:'4',liquid:[74,75,181],level:.5}],n=tubes.length,pt=r.y+r.h*.34,pb=r.y+r.h-4,gap=r.w/n,tw=Math.min(gap*.55,34);
 c.fillStyle=T.wood;c.globalAlpha=.75;c.fillRect(r.x+4,pt,7,pb-pt);c.fillRect(r.x+r.w-11,pt,7,pb-pt);c.globalAlpha=1;rr(c,r.x,pb-9,r.w,9,3);c.fill();
 tubes.forEach((q,i)=>{const x=r.x+gap*(i+.5)-tw/2,pool=env.pool['t'+i]=env.pool['t'+i]||{events:[]},s=Object.assign({level:.5,liquid:WATER.slice()},q,{label:null});body('testTube',V.testTube,c,{x,y:r.y+4,w:tw,h:pb-14-r.y-4},s,Object.assign({},env,{pool,only:null,opt:{}}))});
 rr(c,r.x,pt-6,r.w,13,3);c.fillStyle=T.wood;c.fill();c.strokeStyle='rgba(0,0,0,.2)';c.lineWidth=1;c.stroke();tubes.forEach((q,i)=>{if(q.label)txt(c,q.label,r.x+gap*(i+.5),pt+4,'#fff','center',10,800)})}
/*@@GFX naczynia/tubeRack@@*/
 
function conductivity(c,r,st,env){const T=env.th,k=cl01(st.cond||0),p=env.pool,bx=r.x+r.w*.16,bw=r.w*.68,by=r.y+r.h*.42,bh=r.h*.55,lv=cl01(st.level==null?.6:st.level),ltop=by+bh-bh*lv,e1=bx+bw*.32,e2=bx+bw*.68,ey0=by-26,ey1=by+bh-16,wy=r.y+r.h*.27,bt={x:r.x+r.w*.1,y:r.y+12,w:48,h:20},bl={x:r.x+r.w*.8,y:r.y+30};
 body('beaker',V.beaker,c,{x:bx,y:by,w:bw,h:bh},Object.assign({},st,{label:null}),Object.assign({},env,{pool:p.bk=p.bk||{events:[]},only:null,opt:{effects:{scale:0}}}));
 const wire=(pts,on)=>{c.lineJoin=c.lineCap='round';c.beginPath();pts.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.strokeStyle=T.dark?'#94a3b8':'#334155';c.lineWidth=2.2;c.stroke();if(on){c.setLineDash([3,7]);c.lineDashOffset=-(env.t||0)/1000*40*k;c.strokeStyle='rgba(250,204,21,.95)';c.lineWidth=2;c.stroke();c.setLineDash([])}};
 const on=k>.12;wire([[e1,ey0],[e1,wy],[bt.x+8,wy],[bt.x+8,bt.y+bt.h]],on);wire([[bt.x+bt.w,bt.y+bt.h/2],[bl.x-5,bt.y+bt.h/2],[bl.x-5,bl.y+24]],on);wire([[bl.x+5,bl.y+26],[bl.x+5,wy],[e2,wy],[e2,ey0]],on);
  
const EL=st.el||null;[e1,e2].forEach((x,i)=>{c.fillStyle='#3f3f46';rr(c,x-4,ey0,8,ey1-ey0,2);c.fill();c.fillStyle='#71717a';c.fillRect(x-4,ey0,8,5);const g=EL?(i?EL.an:EL.cat):null;
 if(g&&k>.12){const nb=Math.round(3+5*g.n*k),col=g.col||[255,255,255];for(let j=0;j<nb;j++){const u=((env.t||0)/1400*(.6+k)+rnd(j+i*9))%1,y=ey1-(ey1-ltop)*u;if(y>ltop+3){c.beginPath();c.arc(x+(j%2?6:-6),y,1.2+rnd(j)*1.3,0,7);c.fillStyle='rgba('+col.join(',')+','+(.75*k)+')';c.fill();c.strokeStyle='rgba(80,100,120,'+(.5*k)+')';c.lineWidth=.6;c.stroke()}}}
 const lab=(i?'anoda (+)':'katoda (−)')+(g&&k>.12?': '+g.f:'');font(c,800,9);const lw=c.measureText(lab).width+8,lx=Math.max(r.x+2,Math.min(r.x+r.w-lw-2,x-lw/2)),ly=ey1+6;c.fillStyle=T.dark?'rgba(30,41,59,.9)':'rgba(255,255,255,.9)';rr(c,lx,ly,lw,13,3);c.fill();txt(c,lab,lx+lw/2,ly+10,i?'#b91c1c':'#1d4ed8','center',9,800)});
 c.fillStyle=T.dark?'#475569':'#1f2937';rr(c,bt.x,bt.y,bt.w,bt.h,3);c.fill();c.fillStyle='#f59e0b';c.fillRect(bt.x+bt.w-12,bt.y,12,bt.h);txt(c,'−',bt.x+8,bt.y+14,'#fff','center',12,800);txt(c,'+',bt.x+bt.w-6,bt.y+14,'#1f2937','center',12,800);txt(c,'4,5 V',bt.x+bt.w/2-4,bt.y+bt.h+12,T.mut,'center',9);
 if(k>0){const g1=c.createRadialGradient(bl.x,bl.y,2,bl.x,bl.y,18+55*k);g1.addColorStop(0,'rgba(255,226,120,'+(.85*k)+')');g1.addColorStop(1,'rgba(255,200,60,0)');c.fillStyle=g1;c.beginPath();c.arc(bl.x,bl.y,18+55*k,0,7);c.fill()}
 c.fillStyle='rgba(255,250,225,'+(.18+.75*k)+')';c.strokeStyle=T.glass;c.lineWidth=2;c.beginPath();c.arc(bl.x,bl.y,15,0,7);c.fill();c.stroke();c.strokeStyle=k>.08?'#f59e0b':'#78716c';c.lineWidth=1.4;c.beginPath();c.moveTo(bl.x-5,bl.y+12);c.lineTo(bl.x-4,bl.y);for(let i=0;i<5;i++)c.lineTo(bl.x-4+i*2,bl.y+(i%2?-3:0));c.lineTo(bl.x+5,bl.y+12);c.stroke();c.fillStyle=T.metal;c.fillRect(bl.x-7,bl.y+14,14,12);
 txt(c,k>.6?'świeci jasno':k>.15?'świeci słabo':'nie świeci',(bt.x+bt.w+bl.x-20)/2,bt.y+bt.h/2-6,T.text,'center',11,800);if(st.label){font(c,800,12);const lw=c.measureText(st.label).width+12,ly=by+bh*.8;c.fillStyle=T.dark?'rgba(30,41,59,.92)':'rgba(255,255,255,.93)';rr(c,bx+bw/2-lw/2,ly,lw,18,4);c.fill();c.strokeStyle=T.glass;c.lineWidth=1;c.stroke();txt(c,st.label,bx+bw/2,ly+13,T.text,'center',12,800)}}
/*@@GFX naczynia/conductivity@@*/
 
function pHscale(c,r,st,env){const T=env.th,ind=st.ind||'ind-uniwersalny',x0=r.x+14,x1=r.x+r.w-14,h=Math.min(18,r.h*.22),y=r.y+Math.max(r.h*.38,24),X=p=>x0+(x1-x0)*p/14;const g1=c.createLinearGradient(x0,0,x1,0);for(let p=0;p<=14;p+=.5)g1.addColorStop(p/14,rgba(indCol(ind,p)));c.fillStyle=g1;rr(c,x0,y,x1-x0,h,5);c.fill();c.strokeStyle='rgba(0,0,0,.2)';c.lineWidth=1;c.stroke();
 c.strokeStyle=T.mut;for(let p=0;p<=14;p++){c.beginPath();c.moveTo(X(p),y+h);c.lineTo(X(p),y+h+(p%7?4:8));c.stroke();txt(c,String(p),X(p),y+h+16,T.mut,'center',9)}
 const by=y+h+26;[[0,6.8,'kwasowy','#dc2626'],[6.8,7.2,'',''],[7.2,14,'zasadowy','#2563eb']].forEach(([a,b,l,col])=>{if(!l)return;c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.moveTo(X(a),by-4);c.lineTo(X(a),by);c.lineTo(X(b),by);c.lineTo(X(b),by-4);c.stroke();txt(c,l,(X(a)+X(b))/2,by+13,col,'center',10,800)});txt(c,'7 — obojętny',X(7),by+27,T.mut,'center',9,700);
 (st.marks||[]).forEach((m,i)=>{const x=X(m.pH);c.fillStyle=T.text;c.beginPath();c.arc(x,y-4,2.5,0,7);c.fill();txt(c,m.label,x,y-9-(i%2)*11,T.mut,'center',9,600)});
 if(st.pH!=null&&!st.hide){const v=Math.max(0,Math.min(14,st.pH)),x=X(v);c.fillStyle=T.text;c.beginPath();c.moveTo(x,y-1);c.lineTo(x-6,y-10);c.lineTo(x+6,y-10);c.closePath();c.fill();txt(c,'pH '+fmt(v,1),x,y-14,T.text,'center',11,800)}}
/*@@GFX naczynia/pHscale@@*/
const pHcol=p=>'hsl('+Math.round(Math.max(0,Math.min(14,p))/14*250)+',70%,48%)';
function smooth(env,k,target,rate){const p=env.pool;if(p[k]==null||!isFinite(p[k]))p[k]=target;p[k]+=(target-p[k])*Math.min(1,(env.dt||.016)*rate);return p[k]}
function pHmeter(c,r,st,env){const T=env.th,w=Math.min(r.w,150),x=r.x+(r.w-w)/2,bh=Math.min(r.h*.5,95),tgt=st.pH==null?7:st.pH,v=smooth(env,'ph',tgt,2.2),stable=Math.abs(v-tgt)<.02;
c.fillStyle=T.dark?'#1e293b':'#e2e8f0';c.strokeStyle=T.glass;c.lineWidth=3;rr(c,x,r.y,w,bh,12);c.fill();c.stroke();
c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,x+8,r.y+8,w-16,bh*.52,6);c.fill();
c.fillStyle=T.dark?'#7cffb2':'#10361f';c.font='800 '+Math.round(bh*.34)+'px ui-monospace,monospace';c.textAlign='center';c.fillText(fmt(v,2),x+w/2,r.y+8+bh*.38);c.font='700 10px ui-monospace,monospace';c.fillText('pH · '+fmt(st.T==null?25:st.T,1)+' °C',x+w/2,r.y+8+bh*.5);
const g=c.createLinearGradient(x+10,0,x+w-10,0);for(let i=0;i<=14;i+=2)g.addColorStop(i/14,pHcol(i));c.fillStyle=g;rr(c,x+10,r.y+bh*.68,w-20,7,3);c.fill();const px=x+10+(w-20)*Math.max(0,Math.min(1,v/14));c.fillStyle=T.text;c.beginPath();c.moveTo(px,r.y+bh*.68-2);c.lineTo(px-4,r.y+bh*.68-8);c.lineTo(px+4,r.y+bh*.68-8);c.fill();
c.fillStyle=stable?'#22c55e':'#f59e0b';c.beginPath();c.arc(x+w-14,r.y+bh-9,4,0,7);c.fill();c.fillStyle=T.mut;c.font='600 9px Inter,system-ui';c.textAlign='left';c.fillText(stable?'stabilny':'ustala się…',x+12,r.y+bh-6);
const ex=x+w/2,ey=r.y+bh,eb=r.y+r.h-14;c.strokeStyle=T.glass;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(ex,ey);c.lineTo(ex,eb);c.stroke();c.fillStyle=pHcol(v);c.beginPath();c.arc(ex,eb+2,7,0,7);c.fill();c.strokeStyle=T.glass;c.lineWidth=2;c.stroke()}
/*@@GFX naczynia/pHmeter@@*/
function thermometer(c,r,st,env){const T=env.th,t=smooth(env,'T',st.T==null?25:st.T,2.5),cx=r.x+Math.min(r.w*.35,34),top=r.y+12,bR=Math.min(11,r.w*.14),by=r.y+r.h-bR-30,bot=by-bR*.6,lo=st.lo==null?-20:st.lo,hi=st.hi==null?120:st.hi,y=bot-(bot-top)*Math.max(0,Math.min(1,(t-lo)/(hi-lo))),tw=5.5,col=t>70?'#ef4444':t<5?'#3b82f6':'#f97316';
 c.fillStyle=T.tint;rr(c,cx-tw,top-tw,tw*2,by-top+tw,tw);c.fill();c.beginPath();c.arc(cx,by,bR+3,0,7);c.fill();
 c.fillStyle=col;c.fillRect(cx-2.5,y,5,by-y);c.beginPath();c.arc(cx,by,bR,0,7);c.fill();c.fillStyle='rgba(255,255,255,.45)';c.beginPath();c.arc(cx-bR*.35,by-bR*.35,bR*.3,0,7);c.fill();
 c.strokeStyle=T.glass;c.lineWidth=2.5;c.beginPath();c.moveTo(cx-tw,by-bR*.9);c.lineTo(cx-tw,top);c.arc(cx,top,tw,Math.PI,0);c.lineTo(cx+tw,by-bR*.9);c.arc(cx,by,bR+3,-1.1,Math.PI+1.1);c.stroke();
 c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;font(c,600,9);c.textAlign='left';const step=(hi-lo)>100?10:5;for(let v=Math.ceil(lo/step)*step;v<=hi;v+=step){const yy=bot-(bot-top)*(v-lo)/(hi-lo),maj=!(v%(step*2));c.beginPath();c.moveTo(cx+tw+2,yy);c.lineTo(cx+tw+(maj?11:6),yy);c.stroke();if(maj)c.fillText(v,cx+tw+14,yy+3)}
 const lw=Math.min(r.w-8,78),lx=Math.max(r.x+2,cx-lw/2);c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,lx,r.y+r.h-20,lw,18,4);c.fill();c.fillStyle=T.dark?'#7cffb2':'#10361f';font(c,800,12,1);c.textAlign='center';c.fillText(fmt(t,1)+' °C',lx+lw/2,r.y+r.h-7)}
/*@@GFX naczynia/thermometer@@*/
function burette(c,r,st,env){const T=env.th,b=st.titrant||{V:0,Vmax:50,drip:0,color:[205,228,238]},cx=r.x+r.w/2,w=26,top=r.y+8,bot=r.y+r.h-34,fl=bot-top,lv=1-Math.max(0,Math.min(1,b.V/b.Vmax));
c.fillStyle=rgba(b.color||[205,228,238],.7);c.fillRect(cx-w/2+2,top+fl*(1-lv),w-4,fl*lv);c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';c.strokeRect(cx-w/2,top,w,fl);
c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;c.font='600 9px Inter,system-ui';c.textAlign='left';for(let v=0;v<=b.Vmax;v+=5){const y=top+fl*v/b.Vmax;c.beginPath();c.moveTo(cx+w/2,y);c.lineTo(cx+w/2+(v%10?5:9),y);c.stroke();if(!(v%10))c.fillText(v,cx+w/2+12,y+3)}
c.fillStyle=T.glass;c.fillRect(cx-3,bot,6,16);c.fillRect(cx-10,bot+6,20,4);c.fillRect(cx-1.5,bot+16,3,8);
drips(c,env,st,cx,bot+24,b.color||[205,228,238],b.drip||0,r,2.6);
c.fillStyle=T.text;c.font='800 11px Inter,system-ui';c.textAlign='center';c.fillText(fmt(b.V,2)+' cm³',cx,r.y+r.h-6)}
/*@@GFX naczynia/burette@@*/
 
/*@@GFX naczynia/roundFlask__2@@*/
/*@@GFX naczynia/volFlask__2@@*/
/*@@GFX naczynia/funnel__2@@*/
/*@@GFX naczynia/petri__2@@*/
/*@@GFX naczynia/evapDish__2@@*/
/*@@GFX efekty/ringMark@@*/
 
function pipette(c,r,st,env){const T=env.th,p=st.pip||{lv:.6,drip:0,color:[205,228,238]},cx=r.x+r.w/2,bR=Math.min(r.w*.2,16),top=r.y+bR*2+8,bot=r.y+r.h-30,w=10,tipY=bot+16,fl=bot-top,lv=Math.max(0,Math.min(1,p.lv==null?.6:p.lv));
c.fillStyle=T.dark?'#7f1d1d':'#dc2626';c.beginPath();c.ellipse(cx,r.y+bR+2,bR*.8,bR,0,0,7);c.fill();c.fillRect(cx-w/2-1,r.y+bR*2,w+2,8);
if(lv>.45){c.fillStyle=rgba(p.color||[205,228,238],.6);c.beginPath();c.ellipse(cx,top+fl*.45,w*1.1,fl*.17,0,0,7);c.fill()}
c.fillStyle=rgba(p.color||[205,228,238],.75);c.fillRect(cx-w/2+1.5,bot-fl*lv,w-3,fl*lv+4);
c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';c.beginPath();c.ellipse(cx,top+fl*.45,w*1.1,fl*.17,0,0,7);c.stroke();c.beginPath();c.moveTo(cx-w/2,top);c.lineTo(cx-w/2,bot);c.lineTo(cx-1.5,tipY);c.lineTo(cx+1.5,tipY);c.lineTo(cx+w/2,bot);c.lineTo(cx+w/2,top);c.stroke();
c.strokeStyle=T.mut;c.lineWidth=1.5;c.beginPath();c.moveTo(cx-w/2-6,top+fl*.1);c.lineTo(cx+w/2+6,top+fl*.1);c.stroke();
drips(c,env,st,cx,tipY,p.color||[205,228,238],p.drip||0,r,2.4)}
/*@@GFX naczynia/pipette@@*/
 
function balance(c,r,st,env){const T=env.th,m=smooth(env,'m',st.mass==null?0:st.mass,4),w=Math.min(r.w,170),x=r.x+(r.w-w)/2,by=r.y+r.h-44,cx=x+w/2;
c.fillStyle=T.dark?'#1e293b':'#e2e8f0';c.strokeStyle=T.glass;c.lineWidth=3;rr(c,x,by,w,40,8);c.fill();c.stroke();
c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,cx-34,by+7,68,22,4);c.fill();c.fillStyle=T.dark?'#7cffb2':'#10361f';c.font='800 14px ui-monospace,monospace';c.textAlign='center';c.fillText(fmt(m,2)+' g',cx,by+23);
c.fillStyle=T.mut;c.fillRect(cx-3,by-12,6,12);c.fillStyle=T.dark?'#475569':'#94a3b8';rr(c,cx-w*.36,by-18,w*.72,7,3);c.fill();
if(m>.005){const k=Math.min(1,m/40);c.fillStyle=rgba(st.massCol||[238,238,232],.95);c.beginPath();c.ellipse(cx,by-19,8+30*k,2+10*k,0,Math.PI,0);c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke()}}
/*@@GFX naczynia/balance@@*/
 
const sm=(x,a,b)=>Math.max(0,Math.min(1,(x-a)/(b-a))),mc=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
const PHF={'ind-uniwersalny':p=>{const U=[[229,38,46],[239,90,40],[246,162,30],[232,194,44],[215,217,58],[92,184,92],[33,168,154],[47,127,193],[74,75,181],[107,45,143]],k=Math.max(0,Math.min(8.999,p/14*9)),i=Math.floor(k);return mc(U[i],U[i+1],k-i)},'ind-lakmus':p=>mc([220,38,38],[37,99,235],sm(p,4.5,8.3)),'ind-fenoloftaleina':()=>[219,39,119]};
const phCol=(id,p)=>colors.at(id,p)||PHF[id](p);
const PAPERS={universal:{n:'uniwers.',dry:[238,228,172],f:p=>phCol('ind-uniwersalny',p),rd:p=>'pH ≈ '+Math.round(p)},litmusRed:{n:'lakmus cz.',dry:[226,96,104],f:p=>mc([226,96,104],phCol('ind-lakmus',p),sm(p,7,8.5)),rd:p=>p>8.3?'zasadowy':'bez zmiany'},litmusBlue:{n:'lakmus nb.',dry:[86,112,206],f:p=>mc([86,112,206],phCol('ind-lakmus',p),1-sm(p,4.8,6.8)),rd:p=>p<4.5?'kwaśny':'bez zmiany'},phenol:{n:'fenolft.',dry:[247,245,240],f:p=>mc([247,245,240],phCol('ind-fenoloftaleina',10),sm(p,8.2,10)),rd:p=>p>8.2?'zasadowy':'bez zmiany'}};
function paper(c,r,st,env){const T=env.th,list=st.papers||['universal','litmusRed','litmusBlue','phenol'],n=list.length,pH=st.pH==null?7:st.pH,pool=env.pool,dip=smooth(env,'dip',st.dip==null?1:st.dip,3),y0=r.y+r.h-70,top=r.y+8,len=r.h-102+34*dip,tipY=top+len,gap=r.w/n,sw=Math.min(gap*.52,34);
if(pool.fr!==st.fresh){pool.fr=st.fresh;pool.pw=0;pool.p0=null}
let wet=pool.pw||0;if(dip>.7){wet+=(46-wet)*Math.min(1,(env.dt||.016)*1.2);pool.p0=pH}pool.pw=wet;const pc=pool.p0==null?pH:pool.p0;
c.fillStyle=rgba(st.liquid||[205,228,238],.5);rr(c,r.x+8,y0,r.w-16,r.y+r.h-34-y0,6);c.fill();
list.forEach((id,i)=>{const P=PAPERS[id]||PAPERS.universal,x=r.x+gap*(i+.5)-sw/2;c.fillStyle=rgba(P.dry);rr(c,x,top,sw,len,2);c.fill();
if(wet>1){const wh=Math.min(len,wet);c.fillStyle=rgba(P.f(pc));rr(c,x,tipY-wh,sw,wh,2);c.fill()}
c.strokeStyle='rgba(0,0,0,.18)';c.lineWidth=1;rr(c,x,top,sw,len,2);c.stroke();c.fillStyle=T.dark?'#475569':'#94a3b8';c.fillRect(x-3,top-5,sw+6,8);
c.textAlign='center';c.fillStyle=T.mut;c.font='600 9px Inter,system-ui';c.fillText(P.n,x+sw/2,r.y+r.h-20);if(wet>30){c.fillStyle=T.text;c.font='700 9px Inter,system-ui';c.fillText(P.rd(pc),x+sw/2,r.y+r.h-8)}});
c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';rr(c,r.x+8,y0-6,r.w-16,r.y+r.h-34-y0+6,10);c.stroke()}
/*@@GFX naczynia/paper@@*/
 
const ELC={H:'#f1f5f9',C:'#334155',N:'#3b82f6',O:'#ef4444',F:'#a3e635',Cl:'#22c55e',Br:'#9f1239',I:'#7c3aed',S:'#eab308',P:'#f97316',Na:'#a855f7',K:'#c084fc',Ca:'#fb923c',Mg:'#10b981',Cu:'#f59e0b',Fe:'#78716c',Zn:'#94a3b8',Ag:'#cbd5e1'},ELR={Na:.95,K:1.1,Mg:.85,Ca:1.0,Zn:.8,H:.5,C:.78,N:.72,O:.68,F:.58,Cl:.99,S:1.05,P:1.08};
const CHG={'F-':'−','Br-':'−','HSO4-':'−','H2PO4-':'−','NH4+':'+','HCO3-':'−','H3O+':'+','OH-':'−','Cl-':'−','Na+':'+','H+':'+','K+':'+','Zn2+':'2+','Mg2+':'2+','Ca2+':'2+','SO42-':'2−','NO3-':'−','CH3COO-':'−'};
const SUB=x=>x.replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[d]),MNAME=id=>{const q=CHG[id];if(!q)return SUB(id);return SUB(id.slice(0,id.length-(q.length>1?2:1)))+q.replace('2','²').replace('+','⁺').replace('−','⁻')};
const MOLS={HF:[['H',-.5,0],['F',.45,0]],'F-':[['F',0,0]],HBr:[['H',-.7,0],['Br',.7,0]],'Br-':[['Br',0,0]],HNO3:[['N',0,0],['O',0,-1.1],['O',-.95,.6],['O',.95,.6],['H',-1.75,1.05]],'HSO4-':[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1],['H',-1.8,-.5]],H3PO4:[['P',0,0],['O',0,-1.15],['O',-1.1,.3],['O',1.1,.3],['O',0,1.15],['H',-1.85,-.15],['H',1.85,-.15],['H',.55,1.85]],'H2PO4-':[['P',0,0],['O',0,-1.15],['O',-1.1,.3],['O',1.1,.3],['O',0,1.15],['H',-1.85,-.15],['H',1.85,-.15]],'NH4+':[['N',0,0],['H',-.85,.6],['H',.85,.6],['H',0,-.95],['H',0,.2]],H2O:[['O',0,0],['H',-.8,.6],['H',.8,.6]],CO2:[['C',0,0],['O',-1.2,0],['O',1.2,0]],H2:[['H',-.37,0],['H',.37,0]],O2:[['O',-.6,0],['O',.6,0]],N2:[['N',-.55,0],['N',.55,0]],NH3:[['N',0,0],['H',-.85,.6],['H',.85,.6],['H',0,-.95]],CH4:[['C',0,0],['H',-.8,-.8],['H',.8,-.8],['H',-.8,.8],['H',.8,.8]],HCl:[['H',-.6,0],['Cl',.6,0]],Na:[['Na',0,0]],Cl:[['Cl',0,0]],'H3O+':[['O',0,0],['H',-.82,.55],['H',.82,.55],['H',0,-.98]],'OH-':[['O',0,0],['H',.9,0]],'Cl-':[['Cl',0,0]],'Na+':[['Na',0,0]],'H+':[['H',0,0]],'K+':[['K',0,0]],'Zn2+':[['Zn',0,0]],'Mg2+':[['Mg',0,0]],'Ca2+':[['Ca',0,0]],'SO42-':[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1]],'NO3-':[['N',0,0],['O',0,-1.1],['O',-.95,.6],['O',.95,.6]],H2SO4:[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1],['H',-1.8,-.5],['H',1.8,.5]],CH3COOH:[['C',-.75,0],['C',.6,0],['O',1.25,-.95],['O',1.25,.95],['H',2.05,1.15],['H',-1.5,-.7],['H',-1.5,.7],['H',-.75,-1.05]],'CH3COO-':[['C',-.75,0],['C',.6,0],['O',1.25,-.95],['O',1.25,.95],['H',-1.5,-.7],['H',-1.5,.7],['H',-.75,-1.05]],NaOH:[['Na',-.9,0],['O',.4,0],['H',1.25,0]],C6H12O6:[['C',-1.1,-.6],['C',0,-1.25],['C',1.1,-.6],['C',1.1,.6],['O',0,1.25],['C',-1.1,.6],['O',-2.05,-1.15],['O',0,-2.35],['O',2.05,-1.15],['O',2.05,1.15]]};
function molAtoms(id){if(MOLS[id])return MOLS[id];try{const M=C.MOLECULE&&C.MOLECULE.get&&C.MOLECULE.get(id);if(M&&M.atoms&&M.atoms.length){let mx=0,my=0;M.atoms.forEach(a=>{mx+=+a.x||0;my+=+a.y||0});mx/=M.atoms.length;my/=M.atoms.length;return MOLS[id]=M.atoms.map(a=>[a.element||a.symbol||'C',(+a.x||0)-mx,(+a.y||0)-my])}}catch(_){}return MOLS.H2O}
function molTank(c,r,st,env){const T=env.th,pool=env.pool,mt=pool.mt=pool.mt||{list:[]},dt=Math.min(.05,env.dt||.016),ph=st.phase||'gas',sp=Math.sqrt(Math.max(.05,((st.T==null?25:st.T)+273)/298)),bx=r.x+6,bw=r.w-12,by=r.y+8,bh=r.h-14,spec=st.mol||[{id:'H2O',n:10}];
const want={};let N=0;spec.forEach(s=>{want[s.id]=(want[s.id]||0)+s.n;N+=s.n});const cnt={};
mt.list=mt.list.filter(p=>{if(!(p.id in want))return false;cnt[p.id]=(cnt[p.id]||0)+1;return cnt[p.id]<=want[p.id]});
Object.keys(want).forEach(id=>{for(let i=(cnt[id]||0);i<want[id];i++)mt.list.push({id,x:bx+Math.random()*bw,y:by+Math.random()*bh,vx:(Math.random()-.5)*60,vy:(Math.random()-.5)*60,a:Math.random()*6.28,w:(Math.random()-.5)*2})});
const s=Math.max(6,Math.min(15,Math.sqrt(bw*bh/Math.max(N,1))/3.3)),k=mt.list.length,cols=Math.max(1,Math.ceil(Math.sqrt(k*bw/Math.max(1,bh*.55)))),rows=Math.max(1,Math.ceil(k/cols));
if(ph==='liquid'){c.fillStyle=rgba(st.liquid||[205,228,238],.3);c.fillRect(bx,by+bh*.14,bw,bh*.86)}
mt.list.forEach((p,i)=>{if(ph==='solid'){const cw=bw/cols,ch=Math.min(cw,bh*.6/rows),t=env.t||0;p.x=bx+cw*(i%cols+.5)+Math.sin(t/90*sp+i*1.7)*1.4*sp;p.y=by+bh-ch*(Math.floor(i/cols)+.5)-2+Math.cos(t/110*sp+i*2.3)*1.4*sp;return}
const v0=(ph==='gas'?70:26)*sp,top=ph==='gas'?by:by+bh*.14;p.vx+=(Math.random()-.5)*v0*dt*8;p.vy+=(Math.random()-.5)*v0*dt*8+0;const v=Math.hypot(p.vx,p.vy),mx=v0*(ph==='gas'?2.2:1.6);if(v>mx){p.vx*=mx/v;p.vy*=mx/v}
p.x+=p.vx*dt;p.y+=p.vy*dt;p.a+=p.w*dt*(ph==='gas'?3:1);const m=s*1.2;if(p.x<bx+m){p.x=bx+m;p.vx=Math.abs(p.vx)}if(p.x>bx+bw-m){p.x=bx+bw-m;p.vx=-Math.abs(p.vx)}if(p.y<top+m){p.y=top+m;p.vy=Math.abs(p.vy)}if(p.y>by+bh-m){p.y=by+bh-m;p.vy=-Math.abs(p.vy)}});
mt.list.forEach(p=>{const at=molAtoms(p.id),cs=Math.cos(p.a),sn=Math.sin(p.a),pts=at.map(a=>[p.x+(a[1]*cs-a[2]*sn)*s,p.y+(a[1]*sn+a[2]*cs)*s,a[0]]);
c.strokeStyle=T.dark?'#94a3b8':'#64748b';c.lineWidth=Math.max(1.5,s*.22);c.lineCap='round';
for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j];if(Math.hypot(a[0]-b[0],a[1]-b[1])<((ELR[a[2]]||.8)+(ELR[b[2]]||.8))*1.25*s){c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke()}}
pts.forEach(q=>{c.fillStyle=ELC[q[2]]||'#a1a1aa';c.beginPath();c.arc(q[0],q[1],(ELR[q[2]]||.8)*s*.62,0,7);c.fill();c.strokeStyle='rgba(0,0,0,.35)';c.lineWidth=1;c.stroke()});const q=CHG[p.id];if(q){const bx=p.x+s*1.05,by=p.y-s*1.05,br=Math.max(5,s*.48);c.fillStyle=q.indexOf('+')>=0?'#ea580c':'#2563eb';c.beginPath();c.arc(bx,by,br,0,7);c.fill();c.fillStyle='#fff';c.font='800 '+Math.round(br*1.25)+'px Inter,system-ui';c.textAlign='center';c.fillText(q,bx,by+br*.45)}});
c.strokeStyle=T.glass;c.lineWidth=4;c.lineJoin='round';rc(c,r.x+2,r.y+4,r.w-4,r.h-8,14);c.stroke();
c.fillStyle=T.mut;c.font='600 10px Inter,system-ui';c.textAlign='left';c.fillText(spec.map(q=>MNAME(q.id)+'×'+q.n).join('  ')+' · '+({gas:'gaz',liquid:'ciecz',solid:'ciało stałe'}[ph]||ph),r.x+10,r.y+r.h-12)}
/*@@GFX naczynia/molTank@@*/

const ELX=(function(){
const POS='#dc2626',NEG='#2563eb',PE=()=>C.PHYS&&C.PHYS.electro;
function charge(c,x,y,s,r,a){if(!s)return;r=r||6;c.globalAlpha=a==null?1:a;c.fillStyle=s>0?POS:NEG;c.beginPath();c.arc(x,y,r,0,7);c.fill();c.strokeStyle='#fff';c.lineWidth=Math.max(1.2,r*.27);c.beginPath();c.moveTo(x-r*.55,y);c.lineTo(x+r*.55,y);if(s>0){c.moveTo(x,y-r*.55);c.lineTo(x,y+r*.55)}c.stroke();c.globalAlpha=1}
 
function rod(c,x0,y0,x1,y1,o){o=o||{};const T=o.th||th(),len=Math.hypot(x1-x0,y1-y0),ang=Math.atan2(y1-y0,x1-x0),w=o.width||18,q=Math.round(o.q||0);c.save();c.translate(x0,y0);c.rotate(ang);
 c.fillStyle=o.col||'#1f2937';c.strokeStyle=T.mut;c.lineWidth=1;rr(c,0,-w/2,len,w,w/2);c.fill();c.stroke();
 if(o.pairs!==false)for(let i=0;i<8;i++){const xx=14+i*(len-28)/7;charge(c,xx,-3,1,4,.18);charge(c,xx+6,3,-1,4,.18)}
 const n=Math.abs(q);for(let i=0;i<n;i++)charge(c,len-14-i*((len-28)/Math.max(1,n)),0,q,Math.min(6,w*.36));c.restore()}
 
function cloth(c,x,y,w,h,o){o=o||{};const T=o.th||th(),q=Math.round(o.q||0);c.globalAlpha=o.alpha==null?1:o.alpha;c.fillStyle=o.col||'#cbd5e1';c.strokeStyle=T.mut;c.lineWidth=1;rr(c,x,y,w,h,10);c.fill();c.stroke();
 for(let i=0;i<Math.abs(q);i++)charge(c,x+10+(i%6)*14,y+12+Math.floor(i/6)*14,q,5);if(o.name){c.fillStyle=T.text;c.font='700 11px system-ui';c.textAlign='center';c.fillText(o.name,x+w/2,y+h+16)}c.globalAlpha=1}
 
function pendulum(c,px,py,L,phi,o){o=o||{};const T=o.th||th(),bR=o.r||13,bx=px+L*Math.sin(phi),by=py+L*Math.cos(phi);c.strokeStyle=T.mut;c.lineWidth=1.2;c.beginPath();c.moveTo(px-30,py);c.lineTo(px+30,py);c.stroke();c.beginPath();c.moveTo(px,py);c.lineTo(bx,by);c.stroke();
 const g=c.createRadialGradient(bx-4,by-4,2,bx,by,bR);g.addColorStop(0,'#fff');g.addColorStop(1,'#a8b3c2');c.fillStyle=g;c.beginPath();c.arc(bx,by,bR,0,7);c.fill();c.strokeStyle=T.mut;c.stroke();
 if(!o.q&&o.polar&&o.polar.s){const ex=o.polar.x-bx,ey=o.polar.y-by,l=Math.hypot(ex,ey)||1;charge(c,bx+ex/l*7,by+ey/l*7,-o.polar.s,4.5);charge(c,bx-ex/l*7,by-ey/l*7,o.polar.s,4.5)}
 else if(o.q){charge(c,bx,by,o.q,6);c.fillStyle=T.text;c.font='700 10px system-ui';c.textAlign='center';c.fillText((o.q>0?'+':'')+Math.round(o.q),bx,by+bR+12)}return{x:bx,y:by,r:bR}}
 
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
 
function fieldLines(c,w,h,Q,o){o=o||{};const T=o.th||th(),P=PE();if(!P)return;c.strokeStyle=o.col||(T.dark?'rgba(148,163,184,.45)':'rgba(71,85,105,.4)');c.lineWidth=1;
 Q.forEach((q0,ci)=>{if(!q0.q)return;const n=o.n||Math.round(8+Math.abs(q0.q)*(o.scale||2e6));for(let i=0;i<n;i++){const an=2*Math.PI*i/n,s=q0.q>0?1:-1;let px=q0.x+Math.cos(an)*14,py=q0.y+Math.sin(an)*14;c.beginPath();c.moveTo(px,py);
  for(let k=0;k<700;k++){const f=P.fieldAt(Q,px,py),m=Math.hypot(f.x,f.y)||1;px+=s*3*f.x/m;py+=s*3*f.y/m;c.lineTo(px,py);if(px<0||px>w||py<0||py>h)break;if(Q.some((u,ui)=>ui!==ci&&u.q&&Math.hypot(px-u.x,py-u.y)<12))break;
   if(k===50){let aa=Math.atan2(s*f.y,s*f.x);if(s<0)aa+=Math.PI;c.moveTo(px,py);c.lineTo(px-6*Math.cos(aa-.45),py-6*Math.sin(aa-.45));c.moveTo(px,py);c.lineTo(px-6*Math.cos(aa+.45),py-6*Math.sin(aa+.45));c.moveTo(px,py)}}c.stroke()}})}
function pointCharge(c,x,y,q,label,o){o=o||{};const T=o.th||th();c.fillStyle=q>0?POS:q<0?NEG:'#94a3b8';c.beginPath();c.arc(x,y,14,0,7);c.fill();c.fillStyle='#fff';c.font='800 13px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(q>0?'+':q<0?'−':'0',x,y+1);c.textBaseline='alphabetic';if(label){c.fillStyle=T.text;c.font='700 12px system-ui';c.fillText(label,x,y+34)}}
function arrow(c,x,y,dx,len,col){if(!len)return;const ex=x+dx*len;c.strokeStyle=col||'#ea580c';c.fillStyle=col||'#ea580c';c.lineWidth=3.5;c.beginPath();c.moveTo(x,y);c.lineTo(ex,y);c.stroke();c.beginPath();c.moveTo(ex+dx*8,y);c.lineTo(ex-dx*2,y-7);c.lineTo(ex-dx*2,y+7);c.fill()}
 
function bar(c,xs,y0,xe,q,o){o=o||{};const T=o.th||th(),N=q.length-2,cw=(xe-xs)/N;const gr=c.createRadialGradient(xs-36,y0-8,3,xs-30,y0,26);gr.addColorStop(0,'#fff');gr.addColorStop(1,'#94a3b8');c.fillStyle=gr;c.beginPath();c.arc(xs-30,y0,26,0,7);c.fill();
 for(let j=0;j<Math.min(10,Math.round(q[0]/2));j++){const an=j/10*6.28;charge(c,xs-30+Math.cos(an)*15,y0+Math.sin(an)*15,1,4.5)}c.fillStyle=o.col||'#c2703d';c.strokeStyle=T.mut;c.fillRect(xs,y0-10,xe-xs,20);c.strokeRect(xs,y0-10,xe-xs,20);
 for(let i=1;i<=N;i++){const a=Math.min(1,q[i]/1.2);if(a>.08)charge(c,xs+(i-.5)*cw,y0,1,Math.min(6,cw*.45),a)}
 const ex=xe+46,ang=Math.min(60,55*(1-Math.exp(-Math.abs(q[N+1])/1.2)))*Math.PI/360;c.strokeStyle='#94a3b8';c.lineWidth=4;c.beginPath();c.moveTo(xe,y0);c.lineTo(ex,y0);c.lineTo(ex,y0+50);c.stroke();c.fillStyle='#fcd34d';c.strokeStyle='#b45309';c.lineWidth=1;[-1,1].forEach(s=>{c.save();c.translate(ex,y0+50);c.rotate(s*ang);c.fillRect(-3,0,6,50);c.strokeRect(-3,0,6,50);c.restore()})}
 
function sphere(c,x,y,R,q,o){o=o||{};const T=o.th||th(),g=c.createRadialGradient(x-R*.35,y-R*.35,2,x,y,R);g.addColorStop(0,'#fff');g.addColorStop(1,'#94a3b8');c.fillStyle=g;c.beginPath();c.arc(x,y,R,0,7);c.fill();c.strokeStyle=T.mut;c.lineWidth=1;c.stroke();
 const n=Math.min(12,Math.round(Math.abs(q)*(o.scale||1)));for(let i=0;i<n;i++){const a=i/n*6.283,rr2=R*.62;charge(c,x+Math.cos(a)*rr2,y+Math.sin(a)*rr2,q,Math.max(4,R*.16))}
 if(o.label){c.fillStyle=T.text;c.font='800 15px system-ui';c.textAlign='center';c.fillText(o.label,x,y-R-10)}if(o.value){c.font='700 13px system-ui';c.fillStyle=q>0?POS:q<0?NEG:T.mut;c.fillText(o.value,x,y+R+20)}}
 
function spark(c,x1,y1,x2,y2,a,seed){const n=9,dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;let s=seed||1;const rnd=()=>(s=(s*9301+49297)%233280)/233280-.5;c.save();c.globalAlpha=a==null?1:a;c.strokeStyle='#e0e7ff';c.shadowColor='#818cf8';c.shadowBlur=12;c.lineWidth=2.5;c.beginPath();c.moveTo(x1,y1);for(let i=1;i<n;i++){const t=i/n,o=rnd()*l*.18;c.lineTo(x1+dx*t+nx*o,y1+dy*t+ny*o)}c.lineTo(x2,y2);c.stroke();c.restore()}
return{charge,sphere,rod,cloth,pendulum,electroscope,fieldLines,pointCharge,arrow,bar,spark,POS,NEG}})();