V.define('kw-dysocjacja-v01',{title:'Dysocjacja kwasów na żywo — przeniesienie protonu H⁺ na wodę',tag:'CHE',
 hint:'Wybierz kwas i stężenie. Silnik liczy stopień dysocjacji α i pH z Ka; animacja pokazuje, ile cząsteczek oddało proton cząsteczkom wody. Dla słabych kwasów zachodzi też reakcja odwrotna (⇌).',
 foot:'α i pH: CHE.DATA.ACID_SYSTEMS (Ka, 25 °C) · kształty cząsteczek: GFX.molecules · 10 „cząsteczek” kwasu = model (proporcje, nie liczby rzeczywiste).',
 build:function(host){host.innerHTML='';var G=C.LAB.GFX,T0=G.theme;var st={acid:'HCl',c:0.1,mode:'roztwor'};
  var bar=el('div','r');host.appendChild(bar);
  var s1=el('select');Object.keys(CH).forEach(function(k){if(!(C.DATA.ACID_SYSTEMS||{})[k])return;var o=el('option',null,pf(k)+' — '+(((C.DATA.SUBSTANCES||{})[k]||{}).name||''));o.value=k;s1.appendChild(o)});s1.value=st.acid;
  var l1=el('label',null,'Kwas ');l1.appendChild(s1);bar.appendChild(l1);
  var cs=el('input');cs.type='range';cs.min=-3;cs.max=0;cs.step=.1;cs.value=-1;var co=el('b');var l2=el('label',null,'c = ');l2.append(cs,co);bar.appendChild(l2);
  var bm=el('button',null,'Tryb: roztwór');bm.type='button';bar.appendChild(bm);var bs=el('button',null,'▶ krok');bs.type='button';bs.style.display='none';bar.appendChild(bs);
  var cv=el('canvas');cv.style.cssText='width:100%;height:360px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';host.appendChild(cv);
  var info=el('div','note');host.appendChild(info);
  var ac=el('canvas');ac.style.cssText='width:100%;height:190px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9);margin-top:8px';host.appendChild(ac);
   
  var PAL={HCl:'#16a34a',HNO3:'#0891b2',H2SO4:'#7c3aed',HF:'#ea580c',CH3COOH:'#dc2626',H3PO4:'#b45309'};
  function chart(){var d=Math.min(2,window.devicePixelRatio||1),w=ac.clientWidth||600,h=ac.clientHeight||190;ac.width=w*d;ac.height=h*d;var x=ac.getContext('2d');x.setTransform(d,0,0,d,0,0);var T=C.LAB.GFX.theme(),L=40,R=w-185,Tp=12,B=h-26;
   x.strokeStyle=T.mut;x.fillStyle=T.mut;x.lineWidth=1;x.font='600 10px system-ui';x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();
   var X=function(l){return L+(R-L)*(l+3)/3},Y=function(a){return B-(B-Tp)*a};
   [0,.5,1].forEach(function(a){x.textAlign='right';x.fillText(Math.round(a*100)+'%',L-4,Y(a)+3)});[-3,-2,-1,0].forEach(function(l){x.textAlign='center';x.fillText(String(Math.pow(10,l)).replace('.',','),X(l),B+12)});
   x.fillText('c [mol/dm³] (skala log.)',(L+R)/2,h-3);x.save();x.translate(10,(Tp+B)/2);x.rotate(-Math.PI/2);x.fillText('α',0,0);x.restore();
   var ks=Object.keys(CH).filter(function(k){return (C.DATA.ACID_SYSTEMS||{})[k]}),ly=Tp;
   ks.forEach(function(k){var cur=k===st.acid;x.strokeStyle=PAL[k]||'#64748b';x.lineWidth=cur?3:1.3;x.globalAlpha=cur?1:.55;x.beginPath();for(var i=0;i<=60;i++){var l=-3+3*i/60,m=model(k,Math.pow(10,l));i?x.lineTo(X(l),Y(m.a1)):x.moveTo(X(l),Y(m.a1))}x.stroke();
    x.fillStyle=PAL[k];x.textAlign='left';x.font=(cur?'800 ':'600 ')+'11px system-ui';var mm=model(k,st.c);x.fillText(pf(k)+'  α='+(mm.a1>=.995?'100':(mm.a1*100).toFixed(mm.a1<.1?1:0))+'%  pH='+mm.pH.toFixed(2).replace('.',','),R+8,ly+4);ly+=16});x.globalAlpha=1;
   var lc=Math.log10(st.c);x.strokeStyle=T.text;x.setLineDash([4,3]);x.lineWidth=1;x.beginPath();x.moveTo(X(lc),Tp);x.lineTo(X(lc),B);x.stroke();x.setLineDash([]);x.fillStyle=PAL[st.acid];x.beginPath();x.arc(X(lc),Y(M.a1),5,0,7);x.fill()}
  var P=[],step=0,hops=[],last=0,acc=0,M=null,dead=false;
  function rnd(a,b){return a+Math.random()*(b-a)}
  function W(){return cv.clientWidth||600}function H(){return cv.clientHeight||360}
  function setup(){P=[];hops=[];var w=W(),h=H(),ch=CH[st.acid];
   if(st.mode==='krok'){P.push({id:ch[0],x:w*.32,y:h*.5,vx:0,vy:0,a:0,lvl:0,fix:1});P.push({id:'H2O',x:w*.62,y:h*.5,vx:0,vy:0,a:Math.PI,fix:1});P.push({id:'H2O',x:w*.8,y:h*.28,vx:0,vy:0,a:.5,fix:1});P.push({id:'H2O',x:w*.8,y:h*.74,vx:0,vy:0,a:2,fix:1});step=0;return}
   for(var i=0;i<10;i++)P.push({id:ch[0],x:rnd(40,w-40),y:rnd(40,h-40),vx:rnd(-30,30),vy:rnd(-30,30),a:rnd(0,6.28),w:rnd(-1,1),lvl:0});
   for(i=0;i<22;i++)P.push({id:'H2O',x:rnd(30,w-30),y:rnd(30,h-30),vx:rnd(-35,35),vy:rnd(-35,35),a:rnd(0,6.28),w:rnd(-1.5,1.5)})}
  function upd(){var c=Math.pow(10,+cs.value);st.c=c;co.textContent=(c>=0.01?c.toFixed(c>=0.1?2:3):c.toExponential(0)).replace('.',',')+' mol/dm³';M=model(st.acid,c);
   var A=C.DATA.ACID_SYSTEMS[st.acid],ch=CH[st.acid],eqS=pf(st.acid)+(M.strong?' → ':' ⇌ ')+'H⁺ + '+lbl(ch[1]),eqW=pf(st.acid)+' + H₂O'+(M.strong?' → ':' ⇌ ')+'H₃O⁺ + '+lbl(ch[1]);
   info.innerHTML='<b>'+eqW+'</b> &nbsp;<span style="opacity:.7">(szkolnie: '+eqS+')</span>'+(ch.length>2?'<br>II stopień: '+lbl(ch[1])+' + H₂O ⇌ H₃O⁺ + '+lbl(ch[2])+' (α₂ ≈ '+(M.a2*100).toFixed(0)+'%)':'')+
    '<br>α'+(ch.length>2?'₁':'')+' = <b>'+(M.a1>=0.995?'≈ 100':(M.a1*100).toFixed(M.a1<0.1?1:0))+' %</b> · [H₃O⁺] ≈ '+M.h.toExponential(1).replace('.',',')+' mol/dm³ · <b>pH ≈ '+M.pH.toFixed(2).replace('.',',')+'</b>'+(M.pKa.length&&isFinite(M.pKa[0])&&!M.strong?' · pKa = '+String(M.pKa[0]).replace('.',','):M.strong?' · kwas mocny':'')+
    (st.mode==='roztwor'&&!M.strong?'<br><i>Kwas słaby: cząsteczki ciągle oddają i odzyskują proton (strzałki w obie strony), ale średnio zdysocjowane jest tylko α cząsteczek. Rozcieńczanie zwiększa α, a mimo to pH rośnie.</i>':'');try{chart()}catch(_){}}
   
  function targets(){var N=10,ch=CH[st.acid];var n1=Math.round(N*M.a1*(1-M.a2)),n2=ch.length>2?Math.round(N*M.a1*M.a2):0;if(M.a1>0&&M.a1<1&&n1+n2===0&&st.c<0.5)n1=0;return[N-n1-n2,n1,n2]}
  function count(){var ch=CH[st.acid],r=[0,0,0];P.forEach(function(p){var k=ch.indexOf(p.id);if(k>=0)r[k]++});return r}
  function near(a,id){var b=null,d=1e9;P.forEach(function(p){if(p.id!==id||p.busy)return;var q=Math.hypot(p.x-a.x,p.y-a.y);if(q<d){d=q;b=p}});return b}
  function hop(from,to,dir){ from.busy=to.busy=1;hops.push({a:from,b:to,t:0,dir:dir})}
  function event(fwd,lv){var ch=CH[st.acid];if(fwd){var cand=P.filter(function(p){return p.id===ch[lv]&&!p.busy});if(!cand.length)return false;var a=cand[(Math.random()*cand.length)|0],w=near(a,'H2O');if(!w)return false;hop(a,w,1);return true}
   var cand=P.filter(function(p){return p.id===ch[lv+1]&&!p.busy});if(!cand.length)return false;var a=cand[(Math.random()*cand.length)|0],hh=near(a,'H3O+');if(!hh)return false;hop(hh,a,-1);return true}
  function finish(h){var ch=CH[st.acid];h.a.busy=h.b.busy=0;if(h.dir>0){var k=ch.indexOf(h.a.id);h.a.id=ch[k+1];h.b.id='H3O+'}else{var k2=ch.indexOf(h.b.id);h.b.id=ch[k2-1];h.a.id='H2O'}}
  function drawMol(x,p){var G=C.LAB.GFX,at=G.molecules.atoms(p.id),s=p.fix?18:14,ca=Math.cos(p.a||0),sa=Math.sin(p.a||0),dark=G.theme().dark;
   at.slice().sort(function(a,b){return G.molecules.radius(a[0])-G.molecules.radius(b[0])}).forEach(function(a){if(p.hideH&&a===p.hideH)return;var ax=p.x+(a[1]*ca-a[2]*sa)*s,ay=p.y+(a[1]*sa+a[2]*ca)*s,r=G.molecules.radius(a[0])*s*.62;var g=x.createRadialGradient(ax-r*.35,ay-r*.35,1,ax,ay,r);g.addColorStop(0,'#fff');g.addColorStop(.35,G.molecules.color(a[0]));g.addColorStop(1,G.molecules.color(a[0]));x.fillStyle=g;x.beginPath();x.arc(ax,ay,r,0,7);x.fill();x.strokeStyle=dark?'rgba(0,0,0,.5)':'rgba(15,23,42,.35)';x.lineWidth=.8;x.stroke()});
   var q=G.molecules.charge(p.id);if(q){var neg=/−|-/.test(q);x.fillStyle=neg?'#2563eb':'#ea580c';x.beginPath();x.arc(p.x+s*1.3,p.y-s*1.1,7.5,0,7);x.fill();x.fillStyle='#fff';x.font='800 9px system-ui';x.textAlign='center';x.textBaseline='middle';x.fillText(q.replace('2−','2−').replace('−','−'),p.x+s*1.3,p.y-s*1.05)}
   if(p.fix){x.fillStyle=G.theme().text;x.font='700 13px system-ui';x.textAlign='center';x.textBaseline='top';x.fillText(lbl(p.id),p.x,p.y+s*1.9)}}
  function frame(t){if(dead||!cv.isConnected){return}var dt=Math.min(.05,(t-last)/1000||0);last=t;var d=Math.min(2,window.devicePixelRatio||1),w=W(),h=H();if(cv.width!==Math.round(w*d)){cv.width=w*d;cv.height=h*d}var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);
   var g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(205,228,238,.35)');g.addColorStop(1,'rgba(160,200,220,.45)');x.fillStyle=g;x.fillRect(0,0,w,h);
   if(st.mode==='roztwor'){P.forEach(function(p){if(p.busy)return;p.vx+=rnd(-40,40)*dt;p.vy+=rnd(-40,40)*dt;var v=Math.hypot(p.vx,p.vy)||1,vt=32;p.vx*=1+(vt/v-1)*dt;p.vy*=1+(vt/v-1)*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.a+=p.w*dt;if(p.x<24||p.x>w-24)p.vx*=-1;if(p.y<24||p.y>h-24)p.vy*=-1;p.x=Math.max(24,Math.min(w-24,p.x));p.y=Math.max(24,Math.min(h-24,p.y))});
    acc+=dt;if(acc>.35&&M){acc=0;var tg=targets(),cn=count();for(var lv=0;lv<2;lv++){if(cn[lv+1]+(lv?0:cn[2])<tg[lv+1]+(lv?0:tg[2])&&cn[lv]>0){event(true,lv);break}if(cn[lv+1]>tg[lv+1]&&!(lv===0&&cn[2]<tg[2])){event(false,lv);break}}
     if(!M.strong&&Math.random()<.35){if(event(true,0))event(false,0)}}}
    
   for(var i=hops.length-1;i>=0;i--){var hp=hops[i];hp.t+=dt/.7;var a=hp.a,b=hp.b;if(st.mode==='roztwor'){var mx=(a.x+b.x)/2,my=(a.y+b.y)/2;a.x+=(mx-14-a.x)*dt*3;b.x+=(mx+14-b.x)*dt*3;a.y+=(my-a.y)*dt*3;b.y+=(my-b.y)*dt*3}
    var u=Math.min(1,hp.t),px=a.x+(b.x-a.x)*u,py=a.y+(b.y-a.y)*u-Math.sin(u*Math.PI)*18;x.strokeStyle='rgba(234,88,12,.5)';x.setLineDash([3,3]);x.beginPath();x.moveTo(a.x,a.y);x.quadraticCurveTo((a.x+b.x)/2,(a.y+b.y)/2-24,b.x,b.y);x.stroke();x.setLineDash([]);
    x.fillStyle='#fff7ed';x.strokeStyle='#ea580c';x.lineWidth=2;x.beginPath();x.arc(px,py,6,0,7);x.fill();x.stroke();x.fillStyle='#ea580c';x.font='800 9px system-ui';x.textAlign='center';x.textBaseline='middle';x.fillText('H⁺',px,py-11);if(hp.t>=1){finish(hp);hops.splice(i,1)}}
   P.forEach(function(p){drawMol(x,p)});
   var cn2=count(),ch=CH[st.acid];x.fillStyle=G.theme().text;x.font='700 12px system-ui';x.textAlign='left';x.textBaseline='top';
   x.fillText(lbl(ch[0])+': '+cn2[0]+'   '+lbl(ch[1])+': '+cn2[1]+(ch.length>2?'   '+lbl(ch[2])+': '+cn2[2]:'')+'   H₃O⁺: '+P.filter(function(p){return p.id==='H3O+'}).length,10,8);
   if(st.mode==='krok'){var TX=['Krok 0: cząsteczka '+lbl(ch[0])+' i cząsteczki wody osobno. Wiązanie H–A jest spolaryzowane: na H ładunek cząstkowy δ⁺.','Krok 1: cząsteczki zbliżają się; wolna para elektronowa tlenu w H₂O (δ⁻) „przyciąga” proton.','Krok 2: proton H⁺ przechodzi na cząsteczkę wody, para elektronów wiązania zostaje przy reszcie kwasowej.','Krok 3: powstały jony: H₃O⁺ (jon hydroniowy — odpowiada za odczyn kwasowy) i '+lbl(ch[1])+'. W roztworze otaczają je cząsteczki wody (hydratacja).'];
    x.font='600 12px system-ui';var tx=TX[step];var words=tx.split(' '),line='',yy=h-46;words.forEach(function(wd){if(x.measureText(line+wd).width>w-24){x.fillText(line,10,yy);yy+=15;line=''}line+=wd+' '});x.fillText(line,10,yy)}
   requestAnimationFrame(frame)}
  function stepGo(){var ch=CH[st.acid],a=P[0],b=P[1];step=(step+1)%4;if(step===0){setup();return}if(step===1){a.x+=(b.x-a.x)*.35;b.x-=(b.x-a.x)*.25}if(step===2){a.busy=0;b.busy=0;hop(a,b,1)}if(step===3){P.forEach(function(p,i){if(i>1){p.x+=(p.x>W()/2?-1:1)*8}});a.x-=30;b.x+=30}}
  s1.onchange=function(){st.acid=s1.value;upd();setup()};cs.oninput=function(){upd()};
  bm.onclick=function(){st.mode=st.mode==='krok'?'roztwor':'krok';bm.textContent='Tryb: '+(st.mode==='krok'?'krok po kroku':'roztwór');bs.style.display=st.mode==='krok'?'':'none';cs.disabled=st.mode==='krok';setup();upd()};
  bs.onclick=stepGo;upd();setTimeout(function(){setup();requestAnimationFrame(frame)},30)}});