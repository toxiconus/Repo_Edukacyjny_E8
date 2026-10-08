
function cvInit(cv,h){const dpr=Math.min(window.devicePixelRatio||1,2),W=cv.clientWidth||300;cv.width=W*dpr;cv.height=h*dpr;const c=cv.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,h);return{c,W,H:h}}
const P={};
P.controls=(h,lab,o)=>{const only=o.only&&new Set(o.only),grp=o.groups&&new Set(o.groups),ex=new Set(o.exclude||[]);
 const groups=GROUPS.filter(([gk,,ob])=>{if(grp&&!grp.has(gk))return false;const ids=Object.keys(ob).filter(i=>(!only||only.has(i))&&!ex.has(i));return ids.length}).map(([gk,gl,ob])=>({gk,gl,ids:Object.keys(ob).filter(i=>(!only||only.has(i))&&!ex.has(i)),ob}));
 const sl=(o.starts||Object.keys(STARTS)).filter(k=>STARTS[k]);
 let gIdx=0,rid=groups[0]&&groups[0].ids[0],amt=2,conc=0,pred='';
 const paint=()=>{
  const g=groups[gIdx]||{ids:[],ob:{},gl:''};
  h.innerHTML='<div class="lb-sub">Start zlewki</div><div class="lb-chips stc">'+sl.map(k=>'<button type="button" class="lb-chip sm" data-st="'+k+'" aria-pressed="'+(lab.start===k)+'">'+STARTS[k][0]+'</button>').join('')+'</div>'+
   '<div class="lb-sub">Grupa</div><div class="lb-chips gc">'+groups.map((g,i)=>'<button type="button" class="lb-chip sm" data-g="'+i+'" aria-pressed="'+(i===gIdx)+'">'+g.gl+'</button>').join('')+'</div>'+
   '<div class="lb-sub">Odczynnik</div><div class="lb-chips rc">'+g.ids.map(i=>'<button type="button" class="lb-chip" data-r="'+i+'" aria-pressed="'+(i===rid)+'">'+(g.ob[i].l||i)+'</button>').join('')+'</div>'+
   '<div class="lb-sels" style="margin-top:10px"><label>Porcja<select class="am"><option value="1">mała</option><option value="2">średnia</option><option value="4">duża</option></select></label>'+
   '<label>Stężenie<select class="cn"><option value="0">rozcieńczone</option><option value="1">stężone</option></select></label>'+
   '<label>Przewidywanie<select class="pd"><option value="">wyłączone</option><option value="gaz">gaz</option><option value="osad">osad</option><option value="barwa">zmiana barwy</option><option value="nic">brak zmian</option></select></label></div>'+
   '<div class="lb-act"><button type="button" class="lb-btn pri go">Dodaj do zlewki</button><button type="button" class="lb-btn rs">Nowa próba</button></div><div class="pm lb-note"></div>';
  h.querySelector('.am').value=String(amt);h.querySelector('.cn').value=String(conc);h.querySelector('.pd').value=pred;
  h.querySelectorAll('[data-st]').forEach(b=>b.onclick=()=>{lab.reset(b.getAttribute('data-st'));paint()});
  h.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{gIdx=+b.getAttribute('data-g');rid=groups[gIdx].ids[0];paint()});
  h.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{rid=b.getAttribute('data-r');paint()});
  h.querySelector('.am').onchange=e=>{amt=+e.target.value};h.querySelector('.cn').onchange=e=>{conc=+e.target.value};h.querySelector('.pd').onchange=e=>{pred=e.target.value};
  h.querySelector('.go').onclick=()=>{const label=(groups[gIdx].ob[rid]&&groups[gIdx].ob[rid].l)||rid;lab.add(rid,amt,!!conc,pred,label);pred='';const pd=h.querySelector('.pd');if(pd)pd.value='';};
  h.querySelector('.rs').onclick=()=>{lab.reset(lab.start);paint()};
 };
 lab.on('add',()=>{const pm=h.querySelector('.pm');if(pm&&lab.last)pm.innerHTML=lab.last.msg||''});
 lab.on('reset',()=>{const pm=h.querySelector('.pm');if(pm)pm.innerHTML=''});
 paint()};
P.beaker=(h,lab,o)=>{o=o||{};const fx=Object.assign({liquid:1,meniscus:1,glass:1,precipitate:1,solids:1,bubbles:1,fumes:1,heatGlow:1,heatConvection:1,splash:1,ripples:1,steam:1,condensation:1,labels:1},o.effects||{});const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||340)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);
 let S=lab.S;const bub=[],drops=[],bpool={};const bw0=()=>Math.min(W*.62,280)*.8;let liq=WATER.slice(),pop=0,last=0;
 lab.on('add',()=>{pop=1});lab.on('reset',()=>{bub.length=0;drops.length=0;liq=WATER.slice()});
 const ctx=cv.getContext('2d');let W=0,H=0,dpr=1;
 function size(){dpr=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 if(g.ResizeObserver)new ResizeObserver(size).observe(cv);size();
 const rnd=(i)=>{const x=Math.sin(i*127.1)*43758.5453;return x-Math.floor(x)},css=(c,a)=>'rgba('+c[0]+','+c[1]+','+c[2]+','+(a==null?1:a)+')';
 function frame(t){if(!cv.isConnected)return;S=lab.S;const dt=Math.min(.05,(t-last)/1000||0);last=t;if(!W){size()}
  const tgt=liquidColor(S);liq=liq.map((v,i)=>v+(tgt[i]-v)*Math.min(1,dt*3));
  S.gasT=Math.max(0,S.gasT-dt);S.heat=Math.max(0,S.heat-dt);S.fumes=Math.max(0,S.fumes-dt);if(S.banner){S.banner[2]-=dt;if(S.banner[2]<=0)S.banner=null}if(S.splash>0){const n=Math.ceil(S.splash*dt*40);for(let i=0;i<n;i++)drops.push({x:W/2+(Math.random()-.5)*bw0(),y:H*.5,vx:(Math.random()-.5)*260,vy:-180-Math.random()*220,r:2+Math.random()*3});S.splash=Math.max(0,S.splash-dt)}pop=Math.max(0,pop-dt*2);
  ctx.clearRect(0,0,W,H);const dark=document.documentElement.getAttribute('data-theme')==='dark';
  const bw=Math.min(W*.72,320),bx=(W-bw)/2,by=28,bot=H-48,bh=bot-by,lvl=clamp(.28+.18*Math.min(S.V,4),.28,.82),top=bot-bh*lvl;
  const path=()=>{ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx,bot-16);ctx.quadraticCurveTo(bx,bot,bx+16,bot);ctx.lineTo(bx+bw-16,bot);ctx.quadraticCurveTo(bx+bw,bot,bx+bw,bot-16);ctx.lineTo(bx+bw,by)};
  if(fx.heatGlow&&S.heat>0){ctx.save();ctx.shadowColor='rgba(255,140,40,'+Math.min(1,S.heat/2)+')';ctx.shadowBlur=26;path();ctx.strokeStyle='rgba(255,140,40,.8)';ctx.lineWidth=6;ctx.stroke();ctx.restore()}
  ctx.save();path();ctx.closePath();ctx.clip();
  if(fx.liquid)ctx.fillStyle=css(liq,.72),ctx.fillRect(bx,top+Math.sin(t/400)*1.2,bw,bot-top);
  if(fx.meniscus){ctx.fillStyle='rgba(255,255,255,.25)';ctx.fillRect(bx,top,bw,3);}
   
  ctx.restore();ctx.save();
  ctx.strokeStyle='rgba(148,163,184,.85)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(bx-1,by);ctx.lineTo(bx+bw+1,by);ctx.stroke();
  ctx.strokeStyle='rgba(100,116,139,.55)';ctx.fillStyle='rgba(100,116,139,.75)';ctx.font='600 9px Inter,system-ui';ctx.textAlign='right';ctx.lineWidth=1;
  for(let u=0;u<=4;u++){const y=bot-bh*(.28+.18*u);if(y<by+6||y>bot-2)continue;ctx.beginPath();ctx.moveTo(bx+bw-11,y);ctx.lineTo(bx+bw-2,y);ctx.stroke();ctx.fillText(String(u+1),bx+bw-13,y+3);}
  ctx.save();path();ctx.closePath();ctx.clip();
   
  let ph0=0;if(fx.precipitate)S.ppts.forEach((q,i)=>{if(q.eq<=.02)return;const hh=clamp(q.eq*7,4,34);ctx.fillStyle=css(q.col,q.metal?.95:.9);ctx.fillRect(bx,bot-ph0-hh,bw,hh);ph0+=hh;
   if(!q.metal&&pop>0){ctx.fillStyle=css(q.col,.35*Math.min(1,pop));ctx.fillRect(bx,top,bw,bot-top)}});
   
  let sx=bx+bw*.18;if(fx.solids)S.solids.forEach((s,i)=>{if(s.eq<=.02)return;const k=clamp(s.eq/4,.15,1),w=bw*.2*(s.t==='metal'?.7:1)*(.5+k*.5),h=s.t==='metal'?(26+14*k):(14+8*k);
   ctx.fillStyle=css(s.col);ctx.beginPath();if(ctx.roundRect)ctx.roundRect(sx,bot-ph0-h-2,w,h,4);else ctx.rect(sx,bot-ph0-h-2,w,h);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=1;ctx.stroke();sx+=w+8;if(sx>bx+bw-w)sx=bx+bw*.18});
   
  if(fx.bubbles&&S.gasT>0){const n=Math.floor(S.gasT*dt*22+.3);for(let i=0;i<n;i++)if(Math.random()<.55)bub.push({x:bx+18+Math.random()*(bw-36),y:bot-18-ph0,r:1.5+Math.random()*3,v:22+Math.random()*36,p:Math.random()*6})}
  if(fx.bubbles)for(let i=bub.length-1;i>=0;i--){const b=bub[i];b.y-=b.v*dt;b.x+=Math.sin(t/200+b.p)*.4;if(b.y<top){bub.splice(i,1);continue}ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fillStyle='rgba(255,255,255,.55)';ctx.fill();ctx.strokeStyle='rgba(80,100,120,.45)';ctx.stroke()}
  ctx.restore();
  if(fx.fumes&&S.fumes>0)for(let i=0;i<12;i++){const f=((t/2600)+rnd(i))%1;ctx.beginPath();ctx.arc(bx+bw*.25+rnd(i+3)*bw*.5+Math.sin(t/700+i)*12,by-f*40,10+f*16,0,7);ctx.fillStyle='rgba(170,90,30,'+.3*(1-f)*Math.min(1,S.fumes)+')';ctx.fill()}
  if(fx.glass){path();ctx.strokeStyle=dark?'#94a3b8':'#64748b';ctx.lineWidth=4;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();
  ctx.beginPath();ctx.moveTo(bx+8,by+14);ctx.lineTo(bx+8,bot-26);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.stroke();}
  if(fx.splash)for(let i=drops.length-1;i>=0;i--){const d=drops[i];d.vy+=620*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;if(d.y>H){drops.splice(i,1);continue}ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,7);ctx.fillStyle=css(liq,.9);ctx.fill();ctx.strokeStyle='rgba(180,40,40,.7)';ctx.stroke()}
  if(fx.heatConvection&&S.heat>2.2)for(let i=0;i<5;i++){const f=((t/1500)+rnd(i+20))%1;ctx.beginPath();ctx.arc(bx+bw*(.2+.15*i)+Math.sin(t/500+i)*8,by-f*50,8+f*14,0,7);ctx.fillStyle='rgba(235,240,245,'+.45*(1-f)+')';ctx.fill()}
  if(S.banner){const bd=S.banner[0]==='bad';ctx.fillStyle=bd?'rgba(185,28,28,.92)':'rgba(21,128,61,.92)';ctx.beginPath();if(ctx.roundRect)ctx.roundRect(10,H-96,W-20,30,8);else ctx.rect(10,H-96,W-20,30);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 13px Inter,system-ui';ctx.textAlign='center';ctx.fillText(S.banner[1],W/2,H-76)}
  if(fx.labels){ctx.fillStyle=dark?'#e2e8f0':'#1e293b';ctx.textAlign='center';ctx.font='800 14px Inter,system-ui';
  const last_=S.log.length?S.log[S.log.length-1].evs[0]:null,st_=STARTS[lab.start];ctx.fillText(last_?last_.type:(S.emp?'pusta zlewka':st_&&st_[2]?st_[2]:'czysta woda'),W/2,22);
  ctx.font='600 12px Inter,system-ui';ctx.fillText('pH ≈ '+pH(S).toFixed(1).replace('.',',')+(S.ind?' · '+IND[S.ind].l:''),W/2,H-26);
  ctx.font='600 11px Inter,system-ui';ctx.fillStyle=dark?'#94a3b8':'#64748b';ctx.fillText(last_&&last_.eq.length<46?last_.eq:'',W/2,H-10);}
  {const ov=['ripples','steam','condensation'].filter(k=>fx[k]);if(ov.length)GFX.draw('beaker',ctx,{x:bx,y:by,w:bw,h:bot-by},{level:lvl,liquid:liq,T:S.T,pop:pop},{t,dt,pool:bpool,only:ov})}
  requestAnimationFrame(frame)}
 requestAnimationFrame(frame)};
P.bhp=(h,lab)=>{const ic={bad:'BŁĄD',ok:'OK',warn:'UWAGA'};
  const r=()=>{const b=lab.S.bhp,bad=b.some(x=>x[0]==='bad');
   h.innerHTML=(b.length?b.map(x=>'<div class="lb-call '+x[0]+'"><b>'+ic[x[0]]+' · BHP</b> '+x[1]+'</div>').join(''):'<div class="lb-call"><b>BHP</b> Okulary, rękawice, kwas do wody. Ostrzeżenia pojawią się po dodaniu odczynnika.</div>')+
   (bad?'<div class="lb-call bad"><b>Postępowanie</b> Odsuń się od zlewki, zawiadom nauczyciela, skórę i oczy płucz wodą min. 15 min.</div>':'')+(lab.incidents?'<div class="lb-note">Incydenty w tej próbie: <b>'+lab.incidents+'</b></div>':'')};
  lab.on('add',r);lab.on('reset',r);r()};
P.seq=(h,lab)=>{const r=()=>{h.innerHTML=lab.seq.length?'<div class="lb-chips">'+lab.seq.map((x,i)=>'<span class="lb-pill">'+(i+1)+'. '+x+'</span>').join('<span class="lb-arr">→</span>')+'</div>':'<div class="lb-note" style="margin:0">Zlewka jest '+(lab.S.emp?'pusta':'z wodą')+'. Kolejność dodawania pojawi się tutaj.</div>'};lab.on('add',r);lab.on('reset',r);r()};
 
const ionNames=list=>{const TB=(window.CHE&&CHE.DATA&&CHE.DATA.SOLUBILITY_TABLE)||{},CN={},AN={},SUPC=q=>(q>1?String(q).replace(/\d/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[c]):'');(TB.cations||[]).forEach(c=>CN[c.id]=c.ion);(TB.anions||[]).forEach(a=>AN[a.id]=a.ion);
  const out=[];list.forEach(i=>{const c=CN[i.k]||(String(i.k).replace(/\d+$/,'')+SUPC(i.ch||1)+'⁺');if(out.indexOf(c)<0)out.push(c);if(i.ps){const a=AN[i.ps]||i.ps;if(out.indexOf(a)<0)out.push(a)}});return out};
P.obs=(h,lab)=>{const sw=c=>'<i class="lb-sw" style="background:'+css(c)+'"></i>',tile=(k,v)=>'<div class="lb-tile"><small>'+k+'</small><b>'+v+'</b></div>';
  const r=()=>{const S=lab.S,l=lab.last,pp=S.ppts.filter(q=>q.eq>.02),so=S.solids.filter(s=>s.eq>.02),ions=ionNames(S.ions.filter(i=>i.eq>.05)),T=S.T;
   let x='<div class="lb-tiles">'+tile('Roztwór',sw(liquidColor(S))+liqName(S))+
    tile('Osad',pp.length?pp.map(q=>sw(q.col)+pretty(q.metal?q.f.replace('(met)',''):q.f)).join(' '):'—')+
    tile('Ciało stałe',so.length?so.map(s=>sw(s.col)+pretty(s.id)).join(' '):'—')+
    tile('Jony',ions.join(', ')||'—')+
    tile('Temperatura',T.toFixed(0)+' °C'+(T>=90?' <span style="color:#b91c1c">wrzenie!</span>':''))+
    tile('Zjawiska',l?(l.ph.join(', ')||'brak zmian'):'—')+'</div>';
   if(l)x+='<div class="lb-call" style="margin-top:8px"><b>Obserwacja</b> '+l.res.map(e=>e.obs).join(' ')+'</div>';h.innerHTML=x};
  lab.on('add',r);lab.on('reset',r);r()};
P.eq=(h,lab)=>{const r=()=>{const l=lab.last;h.innerHTML=l?l.res.map(e=>'<div class="lb-eqbox"><div class="lb-eq">'+e.eq+'</div><div class="lb-note" style="margin-top:2px">'+e.type+'</div></div>').join(''):'<div class="lb-note" style="margin:0">Równanie zbilansowane przez silnik pojawi się po pierwszej reakcji.</div>'};lab.on('add',r);lab.on('reset',r);r()};
P.ph=(h,lab)=>{const IDS=['phph','mo','btb','uni'];
  h.innerHTML='<div class="lb-phv"><b class="v"></b><span class="w"></span></div><div class="lb-scale"><div class="lb-bar" style="background:linear-gradient(90deg,'+UNI.map(c=>css(c)).join(',')+')"></div><div class="lb-cur"><b></b></div><div class="lb-ax">'+Array.from({length:15},(_,i)=>'<span style="left:'+(i/14*100)+'%">'+i+'</span>').join('')+'</div></div><div class="lb-read"></div>'+
   '<div class="lb-tubes">'+IDS.map(k=>'<div class="lb-tube" data-k="'+k+'"><svg viewBox="0 0 44 96" aria-hidden="true"><path class="liq" d="M9 38H35V72a13 13 0 0 1-26 0Z"/><path d="M8 6V72a14 14 0 0 0 28 0V6M4 6H40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg><b>'+IND[k].l+'</b><span></span></div>').join('')+'</div>'+
   '<div class="lb-note">'+((C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH)?'Obliczenia: CHE.EQUILIBRIUM (słabe kwasy), bufor Hendersona–Hasselbalcha i model mocnych elektrolitów. ':'Model uproszczony (bufor, słabe kwasy, mocne elektrolity). ')+'pH poglądowe (porcje, nie mole).</div>';
  const q=s=>h.querySelector(s);
  const r=()=>{const p=pH(lab.S),x=clamp(p,0,14),oh=14-p;
   q('.v').textContent='pH '+f1(p);q('.w').textContent=phWord(p);
   const cur=q('.lb-cur');cur.style.left=(x/14*100)+'%';cur.firstChild.textContent='pH '+f1(p);
   q('.lb-read').innerHTML='<span>[H₃O⁺] '+sci(Math.pow(10,-p))+' M</span><span>[OH⁻] '+sci(Math.pow(10,-oh))+' M</span><span>pOH '+f1(oh)+'</span>';
   IDS.forEach(k=>{const c=indCol(k,p),t=q('[data-k="'+k+'"]');t.querySelector('.liq').style.fill=css(lerp([240,246,248],c.slice(0,3),Math.min(1,c[3]*1.15)));t.querySelector('span').textContent=indName(k,p)})};
  lab.on('add',r);lab.on('reset',r);r()};
P.temp=(h,lab)=>{const cv=el('canvas');cv.style.cssText='width:100%;height:150px;display:block';h.appendChild(cv);
 const r=()=>{if(!cv.isConnected)return;const{c,W,H}=cvInit(cv,150),L=34,B=H-20,T0=8,Y=t=>B-(B-T0)*(t-20)/80,hs=lab.hist,t1=hs[hs.length-1].t,t0=Math.max(hs[0].t,t1-120),X=t=>L+(W-L-6)*(t-t0)/Math.max(30,t1-t0);
  c.font='10px Inter,system-ui';c.fillStyle='#64748b';c.textAlign='right';[20,40,60,80,100].forEach(v=>{c.strokeStyle=v===100?'rgba(185,28,28,.5)':'rgba(100,116,139,.2)';c.beginPath();c.moveTo(L,Y(v));c.lineTo(W-6,Y(v));c.stroke();c.fillText(v+'°',L-4,Y(v)+3)});
  lab.marks.forEach(m=>{if(m<t0)return;c.strokeStyle='rgba(13,104,104,.5)';c.setLineDash([3,3]);c.beginPath();c.moveTo(X(m),T0);c.lineTo(X(m),B);c.stroke();c.setLineDash([])});
  c.strokeStyle='#e0661c';c.lineWidth=2.5;c.beginPath();hs.forEach((p,i)=>{if(p.t<t0)return;const x=X(p.t),y=Y(clamp(p.T,20,100));i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.fillStyle='#64748b';c.textAlign='left';c.fillText('czas →  (linie przerywane = dodanie odczynnika)',L,H-4)};
 lab.on('tick',r);lab.on('add',r);lab.on('reset',r);if(typeof ResizeObserver!=='undefined')new ResizeObserver(r).observe(cv);setTimeout(r,0)};
P.measureChart=(h,lab,o)=>{o=o||{};const kind=o.kind||'pH',label=o.label||kind,unit=o.unit||'';const cv=el('canvas');cv.style.cssText='width:100%;height:170px;display:block';h.appendChild(cv);const r=()=>{if(!cv.isConnected)return;const{c,W,H}=cvInit(cv,170),rows=lab.series(kind);c.clearRect(0,0,W,H);const L=38,R=8,T=10,B=28;const vals=rows.map(x=>Number(x.value)).filter(Number.isFinite);if(!vals.length){c.fillStyle='#64748b';c.font='12px Inter,system-ui';c.fillText('Brak pomiarów tego typu.',L,28);return}let lo=Math.min(...vals),hi=Math.max(...vals);if(lo===hi){lo-=1;hi+=1}const t0=rows[0].t,t1=rows[rows.length-1].t||t0+1,X=t=>L+(W-L-R)*(t-t0)/Math.max(1,t1-t0),Y=v=>T-(v-lo)/(hi-lo)*(H-T-B);c.font='10px Inter,system-ui';c.fillStyle='#64748b';c.textAlign='right';for(let i=0;i<4;i++){const v=lo+(hi-lo)*i/3,y=Y(v);c.strokeStyle='rgba(100,116,139,.18)';c.beginPath();c.moveTo(L,y);c.lineTo(W-R,y);c.stroke();c.fillText(v.toFixed(1),L-5,y+3)}c.strokeStyle='#2563eb';c.lineWidth=2;c.beginPath();rows.forEach((q,i)=>{const x=X(q.t),y=Y(Number(q.value));i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.textAlign='left';c.fillText(label+(unit?' ['+unit+']':''),L, H-7)};lab.on('tick',r);lab.on('reset',r);lab.on('measurement',r);if(typeof ResizeObserver!=='undefined')new ResizeObserver(r).observe(cv);setTimeout(r,0)};
P.steps=(h,lab)=>{const cv=el('canvas');cv.style.cssText='width:100%;height:150px;display:block';h.appendChild(cv);
 const r=()=>{if(!cv.isConnected)return;const{c,W,H}=cvInit(cv,150),L=26,B=H-22,T0=8,st=lab.steps,bw=Math.min(46,(W-L-6)/st.length-6),Y=p=>B-(B-T0)*clamp(p,0,14)/14;
  c.font='10px Inter,system-ui';c.textAlign='right';c.fillStyle='#64748b';[0,7,14].forEach(v=>{c.strokeStyle=v===7?'rgba(100,116,139,.5)':'rgba(100,116,139,.2)';c.beginPath();c.moveTo(L,Y(v));c.lineTo(W-6,Y(v));c.stroke();c.fillText(v,L-4,Y(v)+3)});
  st.forEach((s,i)=>{const x=L+8+i*(bw+6),k=clamp(Math.floor(s.pH/14*9.999),0,9);c.fillStyle=css(UNI[k]);c.fillRect(x,Math.min(Y(s.pH),Y(7)),bw,Math.abs(Y(s.pH)-Y(7))||2);c.fillStyle='#334155';c.textAlign='center';c.fillText(s.pH.toFixed(1),x+bw/2,Y(s.pH)+(s.pH<7?12:-3));c.fillStyle='#64748b';c.fillText(i?(lab.seq[i-1+(lab.seq[0]&&/^\(start/.test(lab.seq[0])?1:0)]||String(i)).slice(0,9):'start',x+bw/2,H-6)})};
 lab.on('add',r);lab.on('reset',r);if(typeof ResizeObserver!=='undefined')new ResizeObserver(r).observe(cv);setTimeout(r,0)};
P.src=(h)=>{h.innerHTML='<div class="lb-sub" style="margin-top:0">Pobiera z zewnątrz</div>'+DEPS.map(d=>'<div class="lb-eqbox"><div class="lb-eq" style="font-size:12px">'+d[0]+'</div><div class="lb-note">'+d[1]+' · '+(d[2]()?'<b style="color:#15803d">znaleziono</b>':'<b style="color:#b45309">brak → '+d[3]+'</b>')+'</div></div>').join('')+'<div class="lb-sub">Dane własne modułu</div><div class="lb-note" style="margin:0">'+OWN.map(x=>'• '+x).join('<br>')+'</div>'};
P.log=(h,lab)=>{const r=()=>{const rows=lab.S.log.slice(-6).reverse();
  h.innerHTML=rows.length?rows.map(l=>l.evs.map(e=>'<div class="lb-eqbox"><div class="lb-note" style="margin:0 0 2px"><b>+ '+pretty(l.id)+'</b> · '+e.type+(e.warn?' · <span style="color:#b91c1c">'+e.warn+'</span>':'')+'</div><div class="lb-eq" style="font-size:13px">'+e.eq+'</div><div class="lb-note">'+e.obs+'</div></div>').join('')).join(''):'<div class="lb-note" style="margin:0">Dziennik reakcji pojawi się po dodaniu odczynnika.</div>'};
  lab.on('add',r);lab.on('reset',r);r()};
P.gasTrap=(h,lab,o)=>{o=o||{};const linked=o.linked!==false;const cv=el('canvas');cv.style.cssText='width:100%;height:'+(o.height||300)+'px;border-radius:12px;background:var(--surface-soft,#f1f5f9);display:block';h.appendChild(cv);
 const data={gas:null,volume:0,signal:0,temp:25,pressure:101325,last:0,exhaustMass:0,composition:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0,total:0},moles:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0},vaporMoles:0,liquidWaterMoles:0,source:'none',preCondensation:{moles:{CO2:0,CO:0,H2O:0,O2:0,fuel:0},volume:0}};lab.gasTrapState=data;let W=0,H=0,dpr=1,ctx=cv.getContext('2d');
 const reset=()=>{if(lab.chemistry&&lab.chemistry.substances){['CO2','CO','H2O','O2','fuel','MgO','H2O_liquid'].forEach(k=>{if(lab.chemistry.substances[k])delete lab.chemistry.substances[k]})}data.gas=null;data.volume=0;data.signal=0;data.temp=25;data.pressure=101325;data.last=lab.t;data.exhaustMass=0;data.composition={CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0,total:0};data.moles={CO2:0,CO:0,H2O:0,O2:0,fuel:0,MgO:0};data.vaporMoles=0;data.liquidWaterMoles=0;data.source='none';data.preCondensation={moles:{CO2:0,CO:0,H2O:0,O2:0,fuel:0},volume:0};render()};
 const collectTick=()=>{if(!linked)return;const now=lab.t,dt=Math.max(0,now-data.last);data.last=now;if(data.signal>0){ data.volume=Math.min(100,data.volume+data.signal*dt*.9);data.signal=Math.max(0,data.signal-dt*1.6);lab.record('gasVolume',data.volume,'u',{gas:data.gas})}};
 const addGas=()=>{const S=lab.S;if(!linked||!S)return;if(Number.isFinite(S.gasT)&&S.gasT>0){data.gas=S.gas||data.gas;data.signal=Math.max(data.signal,S.gasT);data.temp=S.T;data.last=lab.t;data.volume=Math.min(100,data.volume+S.gasT*.35);lab.record('gasVolume',data.volume,'u',{gas:data.gas,event:'gas_formed'})}};
 function size(){dpr=Math.min(g.devicePixelRatio||1,2);W=cv.clientWidth||300;H=cv.clientHeight||300;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 function txt(t,x,y,size,weight,align){ctx.fillStyle=document.documentElement.getAttribute('data-theme')==='dark'?'#e2e8f0':'#1e293b';ctx.font=(weight||600)+' '+size+'px Inter,system-ui';ctx.textAlign=align||'left';ctx.fillText(t,x,y)}
 function render(){if(!cv.isConnected)return;size();ctx.clearRect(0,0,W,H);const dark=document.documentElement.getAttribute('data-theme')==='dark';
  const bx=W*.13,by=44,bw=W*.74,bot=H-34,bh=bot-by;txt('WEJŚCIE',bx+8,24,10,800);txt('WYJŚCIE / PRÓBKA',bx+bw-8,24,10,800,'right');
  ctx.strokeStyle=dark?'#94a3b8':'#64748b';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(bx-38,by+24);ctx.lineTo(bx,by+24);ctx.moveTo(bx+bw,by+24);ctx.lineTo(bx+bw+38,by+24);ctx.stroke();
  ctx.fillStyle=dark?'rgba(148,163,184,.08)':'rgba(100,116,139,.08)';ctx.strokeStyle=dark?'#94a3b8':'#64748b';ctx.lineWidth=3;ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx,by,bw,bh,18);else ctx.rect(bx,by,bw,bh);ctx.fill();ctx.stroke();
  const fill=clamp(data.volume/100,.03,.86),fy=bot-bh*fill;ctx.fillStyle=data.gas==='NO2'?'rgba(196,92,36,.34)':data.gas==='CO2'?'rgba(160,170,180,.25)':data.gas==='H2'?'rgba(120,170,220,.18)':'rgba(100,150,180,.16)';ctx.fillRect(bx+3,fy,bw-6,bot-fy);
  ctx.strokeStyle='rgba(100,116,139,.28)';ctx.lineWidth=1;for(let i=0;i<6;i++){const y=by+bh*(i/6);ctx.beginPath();ctx.moveTo(bx+8,y);ctx.lineTo(bx+bw-8,y);ctx.stroke()}
  if(data.gas&&data.signal>0){for(let i=0;i<10;i++){const x=bx+18+((i*47)%Math.max(30,bw-36));const y=bot-12-((i*31+performance.now()/8)%Math.max(20,bh*.65));ctx.beginPath();ctx.arc(x,y,2+(i%3),0,7);ctx.fillStyle='rgba(255,255,255,.55)';ctx.fill()}}
  txt(data.gas?'Gaz: '+data.gas:'Brak wykrytego gazu',W/2,by+28,16,800,'center');txt('zebrano: '+data.volume.toFixed(2)+' L',W/2,bot-12,12,700,'center');txt('masa spalin: '+data.exhaustMass.toFixed(5)+' kg',W/2,bot-28,11,600,'center');txt('H₂O(g): '+data.vaporMoles.toFixed(4)+' mol · H₂O(l): '+data.liquidWaterMoles.toFixed(4)+' mol',W/2,bot-44,10,600,'center');
  txt('Sygnał: '+data.signal.toFixed(1)+' arb',bx+8,H-8,11,600);txt('T: '+data.temp.toFixed(0)+' °C',bx+bw-8,H-8,11,600,'right');
  requestAnimationFrame(render)}
 lab.on('tick',()=>{collectTick();const x=lab.inputs&&lab.inputs.combustionProducts;if(x&&x.active!==false&&Number(x.massFlow)>0){const dt=Math.max(0,lab.t-(data._exhLast||lab.t));data._exhLast=lab.t;const dm=Number(x.massFlow)*dt;data.exhaustMass+=dm;data.source='combustion';data.temp=Number(x.temperature||data.temp);lab.receive('gasSample',data);const keys=['CO2','CO','H2O','O2','fuel','MgO'];keys.forEach(k=>{const dmK=Math.max(0,Number(x[k]||0)*dt);data.composition[k]=(data.composition[k]||0)+dmK;const mw=GASPHYS.MW[k]||GASPHYS.MW.fuel;data.moles[k]=(data.moles[k]||0)+dmK/mw});data.composition.total=(data.composition.total||0)+dm;data.pressure=Number(x.pressure||101325);const wp=GASPHYS.waterPhase(data.temp,data.pressure,data.moles.H2O||0);data.preCondensation.moles={CO2:data.moles.CO2||0,CO:data.moles.CO||0,H2O:data.moles.H2O||0,O2:data.moles.O2||0,fuel:data.moles.fuel||0};data.preCondensation.volume=GASPHYS.idealVolume((data.moles.CO2||0)+(data.moles.CO||0)+(data.moles.H2O||0)+(data.moles.O2||0)+(data.moles.fuel||0),data.temp,data.pressure)*1000;data.vaporMoles=wp.vaporMol;data.condensedWaterMoles=wp.liquidMol;data.liquidWaterMoles=wp.liquidMol;const gasMoles=(data.moles.CO2||0)+(data.moles.CO||0)+(data.vaporMoles||0)+(data.moles.O2||0)+(data.moles.fuel||0);data.volume=Math.min(1000,GASPHYS.idealVolume(gasMoles,data.temp,data.pressure)*1000);data.gas='spaliny';data.signal=Math.min(100,data.signal+Math.max(0,Number(x.molarFlow||0))*4);lab.chemistry.syncGas(data);lab.inputs.gasSubstances=lab.chemistry.substances;lab.emit('chemistry',lab.chemistry.snapshot());lab.record('exhaustMass',data.exhaustMass,'kg',{source:'combustion'});lab.record('exhaustMoles',gasMoles,'mol',{source:'combustion',waterVapor:data.vaporMoles,waterLiquid:data.liquidWaterMoles});lab.record('exhaustVolume',data.volume,'L',{source:'combustion',temperature:data.temp,pressure:data.pressure});lab.record('condensedWater',data.liquidWaterMoles*GASPHYS.MW.H2O,'kg',{source:'combustion'});}});lab.on('add',()=>{addGas()});lab.on('input:combustionProducts',x=>{if(x){data.gas='spaliny';data.temp=Number(x.temperature||data.temp);data.source='combustion'}});lab.on('reset',reset);if(g.ResizeObserver)new ResizeObserver(size).observe(cv);render();
 const info=el('div');info.style.cssText='margin-top:7px;font-size:12.5px;color:var(--text-muted,#64748b)';h.appendChild(info);
 const update=()=>{const gas=data.gas;let test='Brak gazu do analizy.';if(gas==='CO2')test='Analiza modelowa: CO₂ — gaz niepalny; możliwy test obecności opisany przez osobny moduł.';else if(gas==='H2')test='Analiza modelowa: H₂ — gaz palny; nie wykonuj testu płomieniem w tym module.';else if(gas==='NO2')test='Analiza modelowa: NO₂ — gaz toksyczny; analiza wyłącznie jako model/obserwacja pod kontrolą nauczyciela.';info.innerHTML='<b>Analiza:</b> '+test+(linked?'':' <span>(tryb izolowany — bez pobierania stanu zlewki)</span>')};lab.on('tick',update);lab.on('add',update);lab.on('reset',update);update()};