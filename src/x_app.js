/* --- palnik Bunsena + płomień (λ/φ → barwa, kopcenie, moc) --- */
function burner(c,r,st,env){const T=env.th,f=st.flame||{},cx=r.x+r.w/2,base=r.y+r.h-6,tw=Math.min(r.w*.14,16),top=base-64;
c.strokeStyle=T.glass;c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(cx-58,base);c.lineTo(cx+58,base);c.stroke();
c.fillStyle=T.dark?'#475569':'#94a3b8';c.fillRect(cx-34,base-10,68,10);c.fillRect(cx-tw,base-64,tw*2,54);
c.fillStyle=T.dark?'#334155':'#64748b';c.fillRect(cx-tw-3,base-40,tw*2+6,9);
const air=Math.max(0,Math.min(1.6,(f.air==null?100:f.air)/100));c.fillStyle='rgba(15,23,42,'+(.35+.25*(1-Math.min(1,air)))+')';c.fillRect(cx-tw-2,base-37,tw*2+4,3);
if(!f.on||!(f.power>.05)){c.fillStyle='rgba(120,140,160,.25)';c.beginPath();c.arc(cx,base-68,4,0,7);c.fill()}
else env.fx=Object.assign({},env.fx,{flame:{power:Math.min(1,f.power),phi:f.phi==null?(1/Math.max(.08,air)):f.phi,soot:f.soot||0,temp:f.temp||900,color:f.color||null,fuel:f.fuel||'CH4',salt:f.salt||''}});
return{x:cx,y:top}}
vessel('burner',{custom:burner});
/* --- chłodnica Liebiga: płaszcz, przeciwprąd chłodziwa, skraplanie --- */
function cooler(c,r,st,env){const T=env.th,k=st.coolant||{Tin:15,Tout:15,flow:.0004,q:0},t=env.t,x0=r.x+r.w*.16,x1=r.x+r.w*.84,cy=r.y+r.h/2,jh=Math.min(r.h*.5,70),ih=jh*.28;
const g=c.createLinearGradient(x0,0,x1,0);g.addColorStop(0,rgba(tc(k.Tout),.55));g.addColorStop(1,rgba(tc(k.Tin),.55));c.fillStyle=g;c.fillRect(x0,cy-jh/2,x1-x0,jh);
const sp=Math.min(1,(k.flow||0)/.0008),dir=-1;c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.5;c.setLineDash([8,12]);c.lineDashOffset=dir*t/1000*(10+90*sp);[-.28,.28].forEach(o=>{c.beginPath();c.moveTo(x1,cy+jh*o);c.lineTo(x0,cy+jh*o);c.stroke()});c.setLineDash([]);
c.fillStyle=T.dark?'rgba(15,23,42,.8)':'rgba(255,255,255,.8)';c.fillRect(x0-14,cy-ih/2,x1-x0+28,ih);
const vap=Math.max(0,Math.min(1,((st.T==null?25:st.T)-30)/70));for(let i=0;i<10;i++){const u=((t/2000)+rnd(i))%1,x=x0-14+u*(x1-x0+28),a=vap*(1-u)*.5;c.fillStyle='rgba(235,240,248,'+a+')';c.beginPath();c.arc(x,cy-ih*.1+Math.sin(t/300+i)*2,3+3*(1-u),0,7);c.fill()}
const cd=Math.min(1,(k.q||0)/80)*vap;c.fillStyle='rgba(120,180,230,.85)';for(let i=0;i<6;i++){const u=((t/1500)+rnd(i+12))%1,x=x0+(x1-x0)*(.45+.55*u);if(rnd(i+5)>cd+.3)continue;c.beginPath();c.arc(x,cy+ih*.3+u*ih*.2,2.2,0,7);c.fill()}
c.strokeStyle=T.glass;c.lineWidth=4;c.lineJoin='round';c.strokeRect(x0,cy-jh/2,x1-x0,jh);c.lineWidth=3;c.beginPath();c.moveTo(x0-14,cy-ih/2);c.lineTo(x1+14,cy-ih/2);c.moveTo(x0-14,cy+ih/2);c.lineTo(x1+14,cy+ih/2);c.stroke();
c.lineWidth=5;c.beginPath();c.moveTo(x0+16,cy-jh/2);c.lineTo(x0+16,cy-jh/2-18);c.moveTo(x1-16,cy+jh/2);c.lineTo(x1-16,cy+jh/2+18);c.stroke();
c.fillStyle=T.text;c.font='700 11px Inter,system-ui';c.textAlign='left';c.fillText('woda wyj. '+(+k.Tout||0).toFixed(1)+' °C',x0+22,cy-jh/2-8);c.textAlign='right';c.fillText('woda wej. '+(+k.Tin||0).toFixed(1)+' °C',x1-22,cy+jh/2+30);c.textAlign='left';c.fillStyle=T.mut;c.fillText('para →  ← skropliny',x0,r.y+10)}
vessel('cooler',{custom:cooler});
