const pHcol=p=>'hsl('+Math.round(Math.max(0,Math.min(14,p))/14*250)+',70%,48%)';
function smooth(env,k,target,rate){const p=env.pool;if(p[k]==null||!isFinite(p[k]))p[k]=target;p[k]+=(target-p[k])*Math.min(1,(env.dt||.016)*rate);return p[k]}
function pHmeter(c,r,st,env){const T=env.th,w=Math.min(r.w,150),x=r.x+(r.w-w)/2,bh=Math.min(r.h*.5,95),tgt=st.pH==null?7:st.pH,v=smooth(env,'ph',tgt,2.2),stable=Math.abs(v-tgt)<.02;
c.fillStyle=T.dark?'#1e293b':'#e2e8f0';c.strokeStyle=T.glass;c.lineWidth=3;rr(c,x,r.y,w,bh,12);c.fill();c.stroke();
c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,x+8,r.y+8,w-16,bh*.52,6);c.fill();
c.fillStyle=T.dark?'#7cffb2':'#10361f';c.font='800 '+Math.round(bh*.34)+'px ui-monospace,monospace';c.textAlign='center';c.fillText(fmt(v,2),x+w/2,r.y+8+bh*.38);c.font='700 10px ui-monospace,monospace';c.fillText('pH · '+fmt(st.T==null?25:st.T,1)+' °C',x+w/2,r.y+8+bh*.5);
const g=c.createLinearGradient(x+10,0,x+w-10,0);for(let i=0;i<=14;i+=2)g.addColorStop(i/14,pHcol(i));c.fillStyle=g;rr(c,x+10,r.y+bh*.68,w-20,7,3);c.fill();const px=x+10+(w-20)*Math.max(0,Math.min(1,v/14));c.fillStyle=T.text;c.beginPath();c.moveTo(px,r.y+bh*.68-2);c.lineTo(px-4,r.y+bh*.68-8);c.lineTo(px+4,r.y+bh*.68-8);c.fill();
c.fillStyle=stable?'#22c55e':'#f59e0b';c.beginPath();c.arc(x+w-14,r.y+bh-9,4,0,7);c.fill();c.fillStyle=T.mut;c.font='600 9px Inter,system-ui';c.textAlign='left';c.fillText(stable?'stabilny':'ustala się…',x+12,r.y+bh-6);
const ex=x+w/2,ey=r.y+bh,eb=r.y+r.h-14;c.strokeStyle=T.glass;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(ex,ey);c.lineTo(ex,eb);c.stroke();c.fillStyle=pHcol(v);c.beginPath();c.arc(ex,eb+2,7,0,7);c.fill();c.strokeStyle=T.glass;c.lineWidth=2;c.stroke()}
vessel('pHmeter',{custom:pHmeter});
function thermometer(c,r,st,env){const T=env.th,t=smooth(env,'T',st.T==null?25:st.T,2.5),cx=r.x+Math.min(r.w*.35,34),top=r.y+12,bR=Math.min(11,r.w*.14),by=r.y+r.h-bR-30,bot=by-bR*.6,lo=st.lo==null?-20:st.lo,hi=st.hi==null?120:st.hi,y=bot-(bot-top)*Math.max(0,Math.min(1,(t-lo)/(hi-lo))),tw=5.5,col=t>70?'#ef4444':t<5?'#3b82f6':'#f97316';
 c.fillStyle=T.tint;rr(c,cx-tw,top-tw,tw*2,by-top+tw,tw);c.fill();c.beginPath();c.arc(cx,by,bR+3,0,7);c.fill();
 c.fillStyle=col;c.fillRect(cx-2.5,y,5,by-y);c.beginPath();c.arc(cx,by,bR,0,7);c.fill();c.fillStyle='rgba(255,255,255,.45)';c.beginPath();c.arc(cx-bR*.35,by-bR*.35,bR*.3,0,7);c.fill();
 c.strokeStyle=T.glass;c.lineWidth=2.5;c.beginPath();c.moveTo(cx-tw,by-bR*.9);c.lineTo(cx-tw,top);c.arc(cx,top,tw,Math.PI,0);c.lineTo(cx+tw,by-bR*.9);c.arc(cx,by,bR+3,-1.1,Math.PI+1.1);c.stroke();
 c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;font(c,600,9);c.textAlign='left';const step=(hi-lo)>100?10:5;for(let v=Math.ceil(lo/step)*step;v<=hi;v+=step){const yy=bot-(bot-top)*(v-lo)/(hi-lo),maj=!(v%(step*2));c.beginPath();c.moveTo(cx+tw+2,yy);c.lineTo(cx+tw+(maj?11:6),yy);c.stroke();if(maj)c.fillText(v,cx+tw+14,yy+3)}
 const lw=Math.min(r.w-8,78),lx=Math.max(r.x+2,cx-lw/2);c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,lx,r.y+r.h-20,lw,18,4);c.fill();c.fillStyle=T.dark?'#7cffb2':'#10361f';font(c,800,12,1);c.textAlign='center';c.fillText(fmt(t,1)+' °C',lx+lw/2,r.y+r.h-7)}
vessel('thermometer',{custom:thermometer});
function burette(c,r,st,env){const T=env.th,b=st.titrant||{V:0,Vmax:50,drip:0,color:[205,228,238]},cx=r.x+r.w/2,w=26,top=r.y+8,bot=r.y+r.h-34,fl=bot-top,lv=1-Math.max(0,Math.min(1,b.V/b.Vmax));
c.fillStyle=rgba(b.color||[205,228,238],.7);c.fillRect(cx-w/2+2,top+fl*(1-lv),w-4,fl*lv);c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';c.strokeRect(cx-w/2,top,w,fl);
c.strokeStyle=T.mut;c.fillStyle=T.mut;c.lineWidth=1;c.font='600 9px Inter,system-ui';c.textAlign='left';for(let v=0;v<=b.Vmax;v+=5){const y=top+fl*v/b.Vmax;c.beginPath();c.moveTo(cx+w/2,y);c.lineTo(cx+w/2+(v%10?5:9),y);c.stroke();if(!(v%10))c.fillText(v,cx+w/2+12,y+3)}
c.fillStyle=T.glass;c.fillRect(cx-3,bot,6,16);c.fillRect(cx-10,bot+6,20,4);c.fillRect(cx-1.5,bot+16,3,8);
drips(c,env,st,cx,bot+24,b.color||[205,228,238],b.drip||0,r,2.6);
c.fillStyle=T.text;c.font='800 11px Inter,system-ui';c.textAlign='center';c.fillText(fmt(b.V,2)+' cm³',cx,r.y+r.h-6)}
vessel('burette',{custom:burette});
/* --- v1.4: nowe naczynia (path → działają wszystkie efekty cieczy), przyrządy, papierki, zbiornik cząsteczek --- */
vessel('roundFlask',{path:(c,r)=>{const cx=r.x+r.w/2,n=Math.min(r.w*.12,22),R=Math.max(n*2,Math.min(r.w*.46,r.h*.36)),cy=r.y+r.h-R-2,h=Math.sqrt(R*R-n*n),d=Math.atan2(h,n);c.beginPath();c.moveTo(cx-n,r.y);c.lineTo(cx-n,cy-h);c.arc(cx,cy,R,Math.PI+d,-d,true);c.lineTo(cx+n,r.y)},hmax:.62,pad:2});
vessel('volFlask',{path:(c,r)=>{const cx=r.x+r.w/2,n=r.w*.07,sh=r.y+r.h*.42,L=r.x+r.w*.04,R=r.x+r.w*.96,b=r.y+r.h;c.beginPath();c.moveTo(cx-n,r.y);c.lineTo(cx-n,sh);c.bezierCurveTo(cx-n,sh+r.h*.12,L,sh+r.h*.08,L,b-26);c.quadraticCurveTo(L,b,L+22,b);c.lineTo(R-22,b);c.quadraticCurveTo(R,b,R,b-26);c.bezierCurveTo(R,sh+r.h*.08,cx+n,sh+r.h*.12,cx+n,sh);c.lineTo(cx+n,r.y)},hmax:.84,pad:2});
vessel('funnel',{path:(c,r)=>{const cx=r.x+r.w/2;c.beginPath();c.moveTo(r.x+r.w*.08,r.y);c.lineTo(cx-4,r.y+r.h*.55);c.lineTo(cx-4,r.y+r.h);c.lineTo(cx+4,r.y+r.h);c.lineTo(cx+4,r.y+r.h*.55);c.lineTo(r.x+r.w*.92,r.y)},hmax:.9,pad:2});
vessel('petri',{path:(c,r)=>{const y0=r.y+r.h*.7;rc(c,r.x+r.w*.04,y0,r.w*.92,r.y+r.h-y0-2,8)},hmax:.26,pad:2});
vessel('evapDish',{path:(c,r)=>{const x0=r.x+r.w*.08,x1=r.x+r.w*.92,y0=r.y+r.h*.5,yb=r.y+r.h;c.beginPath();c.moveTo(x0,y0);c.bezierCurveTo(x0,yb,x1,yb,x1,y0)},hmax:.45,pad:2});
effect('ringMark',{layer:'front',vessels:['volFlask'],label:'Kreska miarowa',defaults:{text:'100 mL'},schema:{},draw:e=>{const c=e.c,r=e.r,cx=r.x+r.w/2,n=r.w*.07,y=r.y+r.h*.16;c.strokeStyle=e.T.text;c.lineWidth=2;c.beginPath();c.moveTo(cx-n-5,y);c.lineTo(cx+n+5,y);c.stroke();c.fillStyle=e.T.mut;c.font='600 9px Inter,system-ui';c.textAlign='left';c.fillText(e.o.text,cx+n+8,y+3)}});
/* pipeta */
function pipette(c,r,st,env){const T=env.th,p=st.pip||{lv:.6,drip:0,color:[205,228,238]},cx=r.x+r.w/2,bR=Math.min(r.w*.2,16),top=r.y+bR*2+8,bot=r.y+r.h-30,w=10,tipY=bot+16,fl=bot-top,lv=Math.max(0,Math.min(1,p.lv==null?.6:p.lv));
c.fillStyle=T.dark?'#7f1d1d':'#dc2626';c.beginPath();c.ellipse(cx,r.y+bR+2,bR*.8,bR,0,0,7);c.fill();c.fillRect(cx-w/2-1,r.y+bR*2,w+2,8);
if(lv>.45){c.fillStyle=rgba(p.color||[205,228,238],.6);c.beginPath();c.ellipse(cx,top+fl*.45,w*1.1,fl*.17,0,0,7);c.fill()}
c.fillStyle=rgba(p.color||[205,228,238],.75);c.fillRect(cx-w/2+1.5,bot-fl*lv,w-3,fl*lv+4);
c.strokeStyle=T.glass;c.lineWidth=3;c.lineJoin='round';c.beginPath();c.ellipse(cx,top+fl*.45,w*1.1,fl*.17,0,0,7);c.stroke();c.beginPath();c.moveTo(cx-w/2,top);c.lineTo(cx-w/2,bot);c.lineTo(cx-1.5,tipY);c.lineTo(cx+1.5,tipY);c.lineTo(cx+w/2,bot);c.lineTo(cx+w/2,top);c.stroke();
c.strokeStyle=T.mut;c.lineWidth=1.5;c.beginPath();c.moveTo(cx-w/2-6,top+fl*.1);c.lineTo(cx+w/2+6,top+fl*.1);c.stroke();
drips(c,env,st,cx,tipY,p.color||[205,228,238],p.drip||0,r,2.4)}
vessel('pipette',{custom:pipette});
/* waga */
function balance(c,r,st,env){const T=env.th,m=smooth(env,'m',st.mass==null?0:st.mass,4),w=Math.min(r.w,170),x=r.x+(r.w-w)/2,by=r.y+r.h-44,cx=x+w/2;
c.fillStyle=T.dark?'#1e293b':'#e2e8f0';c.strokeStyle=T.glass;c.lineWidth=3;rr(c,x,by,w,40,8);c.fill();c.stroke();
c.fillStyle=T.dark?'#06130c':'#cfe8d4';rr(c,cx-34,by+7,68,22,4);c.fill();c.fillStyle=T.dark?'#7cffb2':'#10361f';c.font='800 14px ui-monospace,monospace';c.textAlign='center';c.fillText(fmt(m,2)+' g',cx,by+23);
c.fillStyle=T.mut;c.fillRect(cx-3,by-12,6,12);c.fillStyle=T.dark?'#475569':'#94a3b8';rr(c,cx-w*.36,by-18,w*.72,7,3);c.fill();
if(m>.005){const k=Math.min(1,m/40);c.fillStyle=rgba(st.massCol||[238,238,232],.95);c.beginPath();c.ellipse(cx,by-19,8+30*k,2+10*k,0,Math.PI,0);c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=1;c.stroke()}}
vessel('balance',{custom:balance});
/* papierki wskaźnikowe: kolory z CHE.COLORS (ind-uniwersalny, ind-lakmus, ind-fenoloftaleina); zapas gdy brak modułu */
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
vessel('paper',{custom:paper});
/* zbiornik cząsteczek: gaz / ciecz / ciało stałe; geometria z CHE.MOLECULE gdy dostępna, inaczej mała tabela */
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
vessel('molTank',{custom:molTank});
