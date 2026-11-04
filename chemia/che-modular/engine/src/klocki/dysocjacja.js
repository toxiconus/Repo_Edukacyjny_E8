/* KLOCEK: kw-dysocjacja-v01 — Dysocjacja kwasów na żywo (HCl, HNO₃, H₂SO₄, HF, CH₃COOH, H₃PO₄): α i pH z Ka, animacja przeniesienia protonu, wykres α(c).
   Przeniesiony z dużego silnika (2026-11-04) razem z minimalnymi zależnościami (motyw, cząsteczki, dane kwasów z ph_panel.js). Wymaga model_widok.js i ph_panel.js przed sobą. */
(function(g){var C=g.CHE=g.CHE||{};C.LAB=C.LAB||{};
const th=()=>{const a=document.documentElement.getAttribute('data-theme'),d=a?a==='dark':!!(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
 return{dark:d,glass:d?'#94a3b8':'#64748b',glassHi:d?'rgba(226,232,240,.28)':'rgba(255,255,255,.85)',tint:d?'rgba(148,163,184,.07)':'rgba(190,214,232,.18)',text:d?'#e2e8f0':'#1e293b',mut:d?'#94a3b8':'#64748b',hi:'rgba(255,255,255,.5)',metal:d?'#475569':'#94a3b8',metalD:d?'#334155':'#64748b',metalL:d?'#64748b':'#cbd5e1',shadow:d?'rgba(0,0,0,.35)':'rgba(15,23,42,.13)',bg:d?'#0b1220':'#f1f5f9',paper:d?'#1e293b':'#ffffff',wood:d?'#7c5a3a':'#b08154'}};
const ELC={H:'#f1f5f9',C:'#334155',N:'#3b82f6',O:'#ef4444',F:'#a3e635',Cl:'#22c55e',Br:'#9f1239',I:'#7c3aed',S:'#eab308',P:'#f97316',Na:'#a855f7',K:'#c084fc',Ca:'#fb923c',Mg:'#10b981',Cu:'#f59e0b',Fe:'#78716c',Zn:'#94a3b8',Ag:'#cbd5e1'},ELR={Na:.95,K:1.1,Mg:.85,Ca:1.0,Zn:.8,H:.5,C:.78,N:.72,O:.68,F:.58,Cl:.99,S:1.05,P:1.08};
const CHG={'F-':'−','Br-':'−','HSO4-':'−','H2PO4-':'−','NH4+':'+','HCO3-':'−','H3O+':'+','OH-':'−','Cl-':'−','Na+':'+','H+':'+','K+':'+','Zn2+':'2+','Mg2+':'2+','Ca2+':'2+','SO42-':'2−','NO3-':'−','CH3COO-':'−'};
const SUB=x=>x.replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[d]),MNAME=id=>{const q=CHG[id];if(!q)return SUB(id);return SUB(id.slice(0,id.length-(q.length>1?2:1)))+q.replace('2','²').replace('+','⁺').replace('−','⁻')};
const MOLS={HF:[['H',-.5,0],['F',.45,0]],'F-':[['F',0,0]],HBr:[['H',-.7,0],['Br',.7,0]],'Br-':[['Br',0,0]],HNO3:[['N',0,0],['O',0,-1.1],['O',-.95,.6],['O',.95,.6],['H',-1.75,1.05]],'HSO4-':[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1],['H',-1.8,-.5]],H3PO4:[['P',0,0],['O',0,-1.15],['O',-1.1,.3],['O',1.1,.3],['O',0,1.15],['H',-1.85,-.15],['H',1.85,-.15],['H',.55,1.85]],'H2PO4-':[['P',0,0],['O',0,-1.15],['O',-1.1,.3],['O',1.1,.3],['O',0,1.15],['H',-1.85,-.15],['H',1.85,-.15]],'NH4+':[['N',0,0],['H',-.85,.6],['H',.85,.6],['H',0,-.95],['H',0,.2]],H2O:[['O',0,0],['H',-.8,.6],['H',.8,.6]],CO2:[['C',0,0],['O',-1.2,0],['O',1.2,0]],H2:[['H',-.37,0],['H',.37,0]],O2:[['O',-.6,0],['O',.6,0]],N2:[['N',-.55,0],['N',.55,0]],NH3:[['N',0,0],['H',-.85,.6],['H',.85,.6],['H',0,-.95]],CH4:[['C',0,0],['H',-.8,-.8],['H',.8,-.8],['H',-.8,.8],['H',.8,.8]],HCl:[['H',-.6,0],['Cl',.6,0]],Na:[['Na',0,0]],Cl:[['Cl',0,0]],'H3O+':[['O',0,0],['H',-.82,.55],['H',.82,.55],['H',0,-.98]],'OH-':[['O',0,0],['H',.9,0]],'Cl-':[['Cl',0,0]],'Na+':[['Na',0,0]],'H+':[['H',0,0]],'K+':[['K',0,0]],'Zn2+':[['Zn',0,0]],'Mg2+':[['Mg',0,0]],'Ca2+':[['Ca',0,0]],'SO42-':[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1]],'NO3-':[['N',0,0],['O',0,-1.1],['O',-.95,.6],['O',.95,.6]],H2SO4:[['S',0,0],['O',-1.1,0],['O',1.1,0],['O',0,-1.1],['O',0,1.1],['H',-1.8,-.5],['H',1.8,.5]],CH3COOH:[['C',-.75,0],['C',.6,0],['O',1.25,-.95],['O',1.25,.95],['H',2.05,1.15],['H',-1.5,-.7],['H',-1.5,.7],['H',-.75,-1.05]],'CH3COO-':[['C',-.75,0],['C',.6,0],['O',1.25,-.95],['O',1.25,.95],['H',-1.5,-.7],['H',-1.5,.7],['H',-.75,-1.05]],NaOH:[['Na',-.9,0],['O',.4,0],['H',1.25,0]],C6H12O6:[['C',-1.1,-.6],['C',0,-1.25],['C',1.1,-.6],['C',1.1,.6],['O',0,1.25],['C',-1.1,.6],['O',-2.05,-1.15],['O',0,-2.35],['O',2.05,-1.15],['O',2.05,1.15]]};
function molAtoms(id){if(MOLS[id])return MOLS[id];try{const M=C.MOLECULE&&C.MOLECULE.get&&C.MOLECULE.get(id);if(M&&M.atoms&&M.atoms.length){let mx=0,my=0;M.atoms.forEach(a=>{mx+=+a.x||0;my+=+a.y||0});mx/=M.atoms.length;my/=M.atoms.length;return MOLS[id]=M.atoms.map(a=>[a.element||a.symbol||'C',(+a.x||0)-mx,(+a.y||0)-my])}}catch(_){}return MOLS.H2O}
C.LAB.GFX=C.LAB.GFX||{};C.LAB.GFX.theme=C.LAB.GFX.theme||th;
C.LAB.GFX.molecules=C.LAB.GFX.molecules||{atoms:molAtoms,color:e=>ELC[e]||'#94a3b8',radius:e=>ELR[e]||.8,list:()=>Object.keys(MOLS),name:MNAME,charge:id=>CHG[id]||''};
})(window);


(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var CH={HCl:['HCl','Cl-'],HNO3:['HNO3','NO3-'],H2SO4:['H2SO4','HSO4-','SO42-'],HF:['HF','F-'],CH3COOH:['CH3COOH','CH3COO-'],H3PO4:['H3PO4','H2PO4-']};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/(\d)/g,function(d){return SUB[d]})};
function lbl(id){var G=C.LAB.GFX;try{return G.molecules.name(id)}catch(_){return pf(id)}}
 
function model(acid,c){var A=(C.DATA.ACID_SYSTEMS||{})[acid]||{},K=(A.Ka||[]).map(function(k,i){return k==null&&(A.strong||(i===0&&A.strongFirst))?Infinity:k}),a1,h;
 if(K[0]===Infinity||A.strong){a1=1}else{var k=K[0];a1=(-k+Math.sqrt(k*k+4*k*c))/(2*c)}h=a1*c;var a2=0;
 if(CH[acid].length>2&&K[1]&&isFinite(K[1])){var k2=K[1],x=(-(h+k2)+Math.sqrt((h+k2)*(h+k2)+4*k2*h))/2;a2=Math.max(0,x/h);h+=x}
 return{a1:a1,a2:a2,h:h,pH:-Math.log10(h),pKa:A.pKa||[],strong:!!(A.strong||A.strongFirst)}}
V.define('kw-dysocjacja-v01',{title:'Dysocjacja kwasów na żywo — przeniesienie protonu H⁺ na wodę',tag:'CHE',
 hint:'Wybierz kwas i stężenie. Silnik liczy stopień dysocjacji α i pH z Ka; animacja pokazuje, ile cząsteczek oddało proton cząsteczkom wody. Dla słabych kwasów zachodzi też reakcja odwrotna (⇌).',
 foot:'α i pH: CHE.DATA.ACID_SYSTEMS (Ka, 25 °C) · kształty cząsteczek: GFX.molecules · 10 „cząsteczek” kwasu = model (proporcje, nie liczby rzeczywiste).',
 build:function(host){host.innerHTML='';var G=C.LAB.GFX,T0=G.theme;var st={acid:'HCl',c:0.1,mode:'roztwor'};
  var bar=el('div','r');host.appendChild(bar);
  var s1=el('select');Object.keys(CH).forEach(function(k){if(!(C.DATA.ACID_SYSTEMS||{})[k])return;var o=el('option',null,pf(k)+' — '+(((C.DATA.SUBSTANCES||{})[k]||{}).name||''));o.value=k;s1.appendChild(o)});s1.value=st.acid;
  var l1=el('label',null,'Kwas ');l1.appendChild(s1);bar.appendChild(l1);
  var cs=el('input');cs.type='range';cs.min=-3;cs.max=0;cs.step=.1;cs.value=-1;var co=el('b');var l2=el('label',null,'c = ');l2.append(cs,co);bar.appendChild(l2);
  var bm=el('button',null,'Tryb: roztwór');bm.type='button';bar.appendChild(bm);var bs=el('button',null,'▶ krok');bs.type='button';bs.style.display='none';bar.appendChild(bs);
  var cv=el('canvas');cv.style.cssText='width:100%;height:360px;display:block;border-radius:12px;background:var(--surface-soft,#f6f8fa)';host.appendChild(cv);
  var info=el('div','note');host.appendChild(info);
  var ac=el('canvas');ac.style.cssText='width:100%;height:190px;display:block;border-radius:12px;background:var(--surface-soft,#f6f8fa);margin-top:8px';host.appendChild(ac);
   
/*styl:zostaw — kolory sceny/materiałów są realne*/  var PAL={HCl:'#16a34a',HNO3:'#0891b2',H2SO4:'#7c3aed',HF:'#ea580c',CH3COOH:'#dc2626',H3PO4:'#b45309'};
  function chart(){var d=Math.min(2,window.devicePixelRatio||1),w=ac.clientWidth||600,h=ac.clientHeight||190;ac.width=w*d;ac.height=h*d;var x=ac.getContext('2d');x.setTransform(d,0,0,d,0,0);var T=C.LAB.GFX.theme(),L=40,R=w-185,Tp=12,B=h-26;
   x.strokeStyle=T.mut;x.fillStyle=T.mut;x.lineWidth=1;x.font='600 10px system-ui';x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();
   var X=function(l){return L+(R-L)*(l+3)/3},Y=function(a){return B-(B-Tp)*a};
   [0,.5,1].forEach(function(a){x.textAlign='right';x.fillText(Math.round(a*100)+'%',L-4,Y(a)+3)});[-3,-2,-1,0].forEach(function(l){x.textAlign='center';x.fillText(String(Math.pow(10,l)).replace('.',','),X(l),B+12)});
   x.fillText('c [mol/dm³] (skala log.)',(L+R)/2,h-3);x.save();x.translate(10,(Tp+B)/2);x.rotate(-Math.PI/2);x.fillText('α',0,0);x.restore();
   var ks=Object.keys(CH).filter(function(k){return (C.DATA.ACID_SYSTEMS||{})[k]}),ly=Tp;
   ks.forEach(function(k){var cur=k===st.acid;x.strokeStyle=PAL[k]||'#4a5568';x.lineWidth=cur?3:1.3;x.globalAlpha=cur?1:.55;x.beginPath();for(var i=0;i<=60;i++){var l=-3+3*i/60,m=model(k,Math.pow(10,l));i?x.lineTo(X(l),Y(m.a1)):x.moveTo(X(l),Y(m.a1))}x.stroke();
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
   at.slice().sort(function(a,b){return G.molecules.radius(a[0])-G.molecules.radius(b[0])}).forEach(function(a){if(p.hideH&&a===p.hideH)return;var ax=p.x+(a[1]*ca-a[2]*sa)*s,ay=p.y+(a[1]*sa+a[2]*ca)*s,r=G.molecules.radius(a[0])*s*.62;var g=x.createRadialGradient(ax-r*.35,ay-r*.35,1,ax,ay,r);g.addColorStop(0,'#fff');g.addColorStop(.35,G.molecules.color(a[0]));g.addColorStop(1,G.molecules.color(a[0]));x.fillStyle=g;x.beginPath();x.arc(ax,ay,r,0,7);x.fill();x.strokeStyle=dark?'rgba(0,0,0,.5)':'rgba(15,23,42,.35)';x.lineWidth=1;x.stroke()});
   var q=G.molecules.charge(p.id);if(q){var neg=/−|-/.test(q);x.fillStyle=neg?'#2563eb':'#dc2626';x.beginPath();x.arc(p.x+s*1.3,p.y-s*1.1,7.5,0,7);x.fill();x.fillStyle='#fff';x.font='800 9px system-ui';x.textAlign='center';x.textBaseline='middle';x.fillText(q.replace('2−','2−').replace('−','−'),p.x+s*1.3,p.y-s*1.05)}
   if(p.fix){x.fillStyle=G.theme().text;x.font='700 13px system-ui';x.textAlign='center';x.textBaseline='top';x.fillText(lbl(p.id),p.x,p.y+s*1.9)}}
  function frame(t){if(dead||!cv.isConnected){return}var dt=Math.min(.05,(t-last)/1000||0);last=t;var d=Math.min(2,window.devicePixelRatio||1),w=W(),h=H();if(cv.width!==Math.round(w*d)){cv.width=w*d;cv.height=h*d}var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);
   var g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(205,228,238,.35)');g.addColorStop(1,'rgba(160,200,220,.45)');x.fillStyle=g;x.fillRect(0,0,w,h);
   if(st.mode==='roztwor'){P.forEach(function(p){if(p.busy)return;p.vx+=rnd(-40,40)*dt;p.vy+=rnd(-40,40)*dt;var v=Math.hypot(p.vx,p.vy)||1,vt=32;p.vx*=1+(vt/v-1)*dt;p.vy*=1+(vt/v-1)*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.a+=p.w*dt;if(p.x<24||p.x>w-24)p.vx*=-1;if(p.y<24||p.y>h-24)p.vy*=-1;p.x=Math.max(24,Math.min(w-24,p.x));p.y=Math.max(24,Math.min(h-24,p.y))});
    acc+=dt;if(acc>.35&&M){acc=0;var tg=targets(),cn=count();for(var lv=0;lv<2;lv++){if(cn[lv+1]+(lv?0:cn[2])<tg[lv+1]+(lv?0:tg[2])&&cn[lv]>0){event(true,lv);break}if(cn[lv+1]>tg[lv+1]&&!(lv===0&&cn[2]<tg[2])){event(false,lv);break}}
     if(!M.strong&&Math.random()<.35){if(event(true,0))event(false,0)}}}
    
   for(var i=hops.length-1;i>=0;i--){var hp=hops[i];hp.t+=dt/.7;var a=hp.a,b=hp.b;if(st.mode==='roztwor'){var mx=(a.x+b.x)/2,my=(a.y+b.y)/2;a.x+=(mx-14-a.x)*dt*3;b.x+=(mx+14-b.x)*dt*3;a.y+=(my-a.y)*dt*3;b.y+=(my-b.y)*dt*3}
    var u=Math.min(1,hp.t),px=a.x+(b.x-a.x)*u,py=a.y+(b.y-a.y)*u-Math.sin(u*Math.PI)*18;x.strokeStyle='rgba(234,88,12,.5)';x.setLineDash([3,3]);x.beginPath();x.moveTo(a.x,a.y);x.quadraticCurveTo((a.x+b.x)/2,(a.y+b.y)/2-24,b.x,b.y);x.stroke();x.setLineDash([]);
    x.fillStyle='rgba(220,38,38,.12)';x.strokeStyle='#dc2626';x.lineWidth=2.5;x.beginPath();x.arc(px,py,6,0,7);x.fill();x.stroke();x.fillStyle='#dc2626';x.font='800 9px system-ui';x.textAlign='center';x.textBaseline='middle';x.fillText('H⁺',px,py-11);if(hp.t>=1){finish(hp);hops.splice(i,1)}}
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

})();
