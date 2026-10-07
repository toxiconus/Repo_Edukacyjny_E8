;/* ===== v0.43: rysowanie przez GFX.electro (blok GFX), model przez CHE.PHYS.electro / CHE.FIZ.ELEKTRO. v0.41: FIZYKA — elektrostatyka. Widoki na CHE.FIZ.ELEKTRO (liczby i modele) + rysowanie canvas:
   fiz-elektryzowanie-v01 (tarcie + wahadełko), fiz-elektroskop-v01 (dotyk, indukcja, uziemienie), fiz-coulomb-v01 (siła, linie pola, εr), fiz-przewodniki-v01 (ρ → czas rozpływu ładunku). ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function EL(){return C.FIZ&&C.FIZ.ELEKTRO}
function TH(){try{return C.LAB.GFX.theme()}catch(_){return{text:'#0f172a',mut:'#64748b',dark:false}}}
function cnv(host,h){var c=el('canvas');c.style.cssText='width:100%;height:'+h+'px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9);margin-top:6px';host.appendChild(c);return c}
function ctx(c){var d=Math.min(2,window.devicePixelRatio||1),w=c.clientWidth||700,h=c.clientHeight||300;if(c.width!==Math.round(w*d)||c.height!==Math.round(h*d)){c.width=w*d;c.height=h*d}var x=c.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);return{x:x,w:w,h:h}}
function btn(bar,t,f){var b=el('button',null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
function sel(bar,label,opts,val){var s=el('select');opts.forEach(function(o){var e=el('option',null,o[1]);e.value=o[0];s.appendChild(e)});s.value=val;var l=el('label',null,label+' ');l.appendChild(s);bar.appendChild(l);return s}
function rng(bar,label,min,max,step,val){var r=el('input');r.type='range';r.min=min;r.max=max;r.step=step;r.value=val;var o=el('b');var l=el('label',null,label+' ');l.append(r,o);bar.appendChild(l);return{r:r,o:o}}
/* znak ładunku: + czerwony, − niebieski */
function GE(){return C.LAB.GFX.electro}
function chg(x,X,Y,s,r,alpha){if(GE())return GE().charge(x,X,Y,s,r,alpha);r=r||6;x.globalAlpha=alpha==null?1:alpha;x.fillStyle=s>0?'#dc2626':'#2563eb';x.beginPath();x.arc(X,Y,r,0,7);x.fill();x.strokeStyle='#fff';x.lineWidth=1.6;x.beginPath();x.moveTo(X-r*.55,Y);x.lineTo(X+r*.55,Y);if(s>0){x.moveTo(X,Y-r*.55);x.lineTo(X,Y+r*.55)}x.stroke();x.globalAlpha=1}
function fmt(v,d){if(Math.abs(v)<Math.pow(10,-(d==null?2:d))/2)v=0;return String(v.toFixed(d==null?2:d)).replace('.',',')}
function sci(v){if(v===0)return '0';var e=Math.floor(Math.log10(Math.abs(v))),m=v/Math.pow(10,e);if(e>=-2&&e<=3)return fmt(v,e<0?3:2);var S={'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};return fmt(m,2)+'·10'+String(e).split('').map(function(c){return S[c]}).join('')}
var MATCOL={skora:'#e0b089',futro:'#a16207',szklo:'#bae6fd',wlosy:'#78350f',nylon:'#e5e7eb',welna:'#9ca3af',jedwab:'#fde68a',aluminium:'#cbd5e1',papier:'#f8fafc',bawelna:'#f1f5f9',stal:'#94a3b8',drewno:'#b45309',bursztyn:'#f59e0b',ebonit:'#1f2937',miedz:'#c2703d',poliester:'#a5b4fc',styropian:'#f8fafc',pe:'#e2e8f0',balon:'#ef4444',pvc:'#64748b',teflon:'#f5f5f4'};

/* ---------- 1. ELEKTRYZOWANIE PRZEZ TARCIE + WAHADEŁKO ---------- */
V.define('fiz-elektryzowanie-v01',{title:'Elektryzowanie przez tarcie — kto oddaje elektrony?',tag:'FIZ',
 hint:'Wybierz pręt i tkaninę, pocieraj. Elektrony przechodzą na materiał stojący niżej w szeregu tryboelektrycznym. Potem zbliż pręt do lekkiej kulki na nitce (wahadełko).',
 foot:'Szereg tryboelektryczny i model: CHE.FIZ.ELEKTRO.rub · liczba elektronów — umowna (w rzeczywistości ~10⁹–10¹²) · ładunek nie powstaje z niczego: ile jeden ma +, tyle drugi ma −.',
 build:function(host){host.innerHTML='';var E=EL(),T=E.TRIBO,bar=el('div','r');host.appendChild(bar);
  var opts=T.map(function(m){return[m.id,m.name+(m.kind==='przewodnik'?' (metal)':'')]});
  var sA=sel(bar,'Pręt',opts,'ebonit'),sB=sel(bar,'pocierany',opts,'welna');
  var bar2=el('div','r');host.appendChild(bar2);var bR=btn(bar2,'⟷ pocieraj',function(){rub()}),bN=btn(bar2,'→ zbliż do kulki',function(){st.target=1}),bF=btn(bar2,'← odsuń',function(){st.target=0}),bG=btn(bar2,'dotknij kulkę palcem (uziem)',function(){st.qb=0;st.msg='Kulka uziemiona przez ciało — znów obojętna.'}),bZ=btn(bar2,'↺ od nowa',function(){reset()});
  var cv=cnv(host,320),note=el('div','note');host.appendChild(note);
  var st={};function reset(){cv._st=st={qa:0,qb:0,qc:0,rub:0,flying:[],near:0,target:0,phi:0,w:0,touched:false,msg:''}}reset();
  sA.onchange=sB.onchange=function(){reset()};
  function rub(){var r=E.rub(sA.value,sB.value);st.res=r;st.rub=2.2;st.near=0;st.target=0;st.flying=[];if(!r||!r.n){st.msg=r?r.note:'';return}
   var n=r.n,from=r.plus===sA.value?'A':'B';if(sA.value===sB.value)return;st.plan={n:n,from:from,done:0,t:0}}
  var last=0;function frame(t){if(!cv.isConnected)return;var dt=Math.min(.05,(t-last)/1000||0);last=t;var g=ctx(cv),x=g.x,w=g.w,h=g.h,th=TH();
   /* pozycje */var rodL=w*.06,rodR=w*.40,rodY=150,rodH=18;
   st.near+=(st.target-st.near)*Math.min(1,dt*2.5);
   var px=w*.74,py=26,L=200,bx=px+L*Math.sin(st.phi),by=py+L*Math.cos(st.phi),bR=13;
   /* pręt w trybie wahadełka przesuwa się w prawo, czubek do kulki */
   var tipX0=rodR,tipX1=px-bR-8+Math.min(0,0),shift=(tipX1-tipX0-60)*st.near+0,tipX=tipX0+shift,tipY=rodY+(py+L-rodY)*st.near,rodLx=rodL+shift;
   /* tarcie */
   var clothX=rodL+20;if(st.rub>0){st.rub-=dt;clothX=rodL+20+(rodR-rodL-110)*(.5+.5*Math.sin(t/120))}
   if(st.plan&&st.rub>0){st.plan.t+=dt;if(st.plan.done<st.plan.n&&st.plan.t>0.16*st.plan.done+0.2){st.plan.done++;st.flying.push({u:0,from:st.plan.from})}}
   /* tkanina (gdy nie w trybie wahadełka) */
   var cX=st.near>0.02?clothX-(st.near*w*.05):clothX,cY=rodY-26;
   GE().cloth(x,cX,cY,90,52,{col:MATCOL[sB.value],q:0,name:T[T.findIndex(function(m){return m.id===sB.value})].name,alpha:1-st.near*0.7,th:th});
   /* pręt (GFX.electro.rod) */GE().rod(x,rodLx,rodY,tipX,tipY,{q:st.qa,col:MATCOL[sA.value],th:th});
   x.fillStyle=th.text;x.font='700 12px system-ui';x.textAlign='left';x.fillText('pręt: '+T[T.findIndex(function(m){return m.id===sA.value})].name+'  q = '+(st.qa>0?'+':'')+st.qa+' e (umownie)',w*.03,22);
   x.fillText('tkanina: q = '+(st.qc>0?'+':'')+st.qc+' e',w*.03,40);
   /* nadmiar na tkaninie */for(i=0;i<Math.abs(st.qc);i++)chg(x,cX+10+(i%6)*14,cY+12+Math.floor(i/6)*14,st.qc,5);
   /* lecące elektrony */
   for(i=st.flying.length-1;i>=0;i--){var f=st.flying[i];f.u+=dt*2.2;var ax=f.from==='A'?rodL+60+((i*37)%(rodR-rodL-120)):cX+45,ay=f.from==='A'?rodY:cY+26,bx2=f.from==='A'?cX+45:rodL+60+((i*53)%(rodR-rodL-120)),by2=f.from==='A'?cY+26:rodY;var u=Math.min(1,f.u);chg(x,ax+(bx2-ax)*u,ay+(by2-ay)*u-Math.sin(u*Math.PI)*16,-1,5);if(f.u>=1){st.flying.splice(i,1);if(f.from==='A'){st.qa++;st.qc--}else{st.qa--;st.qc++}}}
   /* rozładowanie metalu trzymanego w ręce */
   if(st.res&&st.res.grounded&&st.res.grounded.length&&st.rub<=0&&!st.flying.length&&(st.qa||st.qc)){st.dis=(st.dis||0)+dt;if(st.dis>.6){st.dis=0;if(st.res.grounded.indexOf(sA.value)>=0&&st.qa)st.qa-=Math.sign(st.qa);if(st.res.grounded.indexOf(sB.value)>=0&&st.qc)st.qc-=Math.sign(st.qc)}}
   /* wahadełko: siła = odpychanie/przyciąganie ładunków + przyciąganie przez polaryzację (indukcję) obojętnej kulki */
   var dx=bx-tipX,dy=by-tipY,dist=Math.max(bR+10,Math.hypot(dx,dy)),qr=st.qa,fm=(90000*st.qb*qr-17000*qr*qr*0.06*Math.abs(qr))/(dist*dist),ux=dx/dist;var fx=st.near>0.05?fm*ux:0;
   st.w+=((-900*Math.sin(st.phi)+fx*Math.cos(st.phi))/L-1.2*st.w)*dt;st.phi+=st.w*dt;if(st.phi>1.1){st.phi=1.1;st.w=0}if(st.phi<-1.1){st.phi=-1.1;st.w=0}
   if(st.near>0.5&&dist<=bR+12&&qr&&!st.touched){var tr=Math.sign(qr)*Math.max(1,Math.round(Math.abs(qr)*0.35));st.qb+=tr;st.qa-=tr;st.touched=true;st.msg='Dotyk: kulka przejęła część ładunku pręta ('+(tr>0?'+':'')+tr+' e) — teraz ładunki jednoimienne, więc kulka jest ODPYCHANA.'}
   if(dist>bR+40)st.touched=false;
   GE().pendulum(x,px,py,L,st.phi,{q:st.qb,polar:qr&&st.near>0.2?{x:tipX,y:tipY,s:Math.sign(qr)}:null,th:th});
   x.fillStyle=th.mut;x.font='600 11px system-ui';x.textAlign='center';x.fillText('wahadełko (kulka z folii aluminiowej)',px,h-10);
   requestAnimationFrame(frame)}
  function info(){var r=E.rub(sA.value,sB.value),T2=function(id){return T[T.findIndex(function(m){return m.id===id})].name};
   note.innerHTML=(r&&r.n?'<b>'+T2(r.plus)+'</b> oddaje elektrony → ładuje się <b style="color:#dc2626">dodatnio (+)</b>; <b>'+T2(r.minus)+'</b> je przyjmuje → <b style="color:#2563eb">ujemnie (−)</b>. Przechodzą tylko <b>elektrony</b> — protony są uwięzione w jądrach.':(r?r.note:''))+(r&&r.note&&r.n?'<br><i>'+r.note+'</i>':'')+(st.msg?'<br>'+st.msg:'')+
    '<br><span style="opacity:.75">Obojętna kulka też jest przyciągana: pręt przesuwa w niej elektrony (polaryzacja / indukcja) — bliżej pręta jest ładunek przeciwnego znaku.</span>';setTimeout(info,400)}
  info();requestAnimationFrame(frame)}});

/* ---------- 2. ELEKTROSKOP ---------- */
V.define('fiz-elektroskop-v01',{title:'Elektroskop — dotyk, indukcja i uziemienie',tag:'FIZ',
 hint:'Zbliżaj naładowany pręt (suwak), dotykaj nim kulki, uziemiaj palcem. Obserwuj, gdzie przesuwają się elektrony i jak rozchylają się listki. Przycisk „scenariusz” pokazuje elektryzowanie przez indukcję krok po kroku.',
 foot:'Model: CHE.FIZ.ELEKTRO.electroscope (ładunek całkowity, rozkład kulka/listki, kąt listków) · ładunki w jednostkach umownych.',
 build:function(host){host.innerHTML='';var E=EL(),bar=el('div','r');host.appendChild(bar);
  var sS=sel(bar,'Pręt',[['-1','ebonit potarty suknem (−)'],['1','szkło potarte jedwabiem (+)']],'-1');
  var D=rng(bar,'odległość',0,1,.01,1);
  var bar2=el('div','r');host.appendChild(bar2);var bT=btn(bar2,'● dotknij kulki',function(){touch()}),bG=btn(bar2,'uziemienie: wył.',function(){st.ground=!st.ground;bG.textContent='uziemienie: '+(st.ground?'WŁ.':'wył.')}),bP=btn(bar2,'▶ scenariusz: elektryzowanie przez indukcję',function(){scen()}),bZ=btn(bar2,'↺ od nowa',function(){reset()});
  var cv=cnv(host,360),note=el('div','note');host.appendChild(note);
  var st;function reset(){st={Q:0,qr:8*+sS.value,d:1,ground:false,th:0,cap:'',sc:null};D.r.value=1;bG.textContent='uziemienie: wył.'}reset();sS.onchange=reset;
  D.r.oninput=function(){st.d=+D.r.value};
  function touch(){st.anim={from:st.d,t:0}}
  function scen(){reset();var S=[[0,function(){st.cap='1. Elektroskop obojętny, listki opadnięte.'}],[1500,function(){st.anim2=.25;st.cap='2. Zbliżamy pręt (bez dotykania): indukcja — elektrony przesuwają się, listki się rozchylają. Ładunek całkowity = 0.'}],[4200,function(){st.ground=true;bG.textContent='uziemienie: WŁ.';st.cap='3. Dotykamy kulki palcem (uziemienie): ładunek jednoimienny z prętem „ucieka” do ziemi (lub z ziemi napływają elektrony). Listki opadają.'}],[7200,function(){st.ground=false;bG.textContent='uziemienie: wył.';st.cap='4. Zabieramy palec, pręt nadal blisko — ładunek przewodnika jest już różny od zera.'}],[9700,function(){st.anim2=1;st.cap='5. Oddalamy pręt: elektroskop zostaje naładowany ładunkiem PRZECIWNYM do ładunku pręta — listki rozchylone na stałe.'}]];
   S.forEach(function(s){setTimeout(s[1],s[0])})}
  var last=0;function frame(t){if(!cv.isConnected)return;var dt=Math.min(.05,(t-last)/1000||0);last=t;
   if(st.anim){st.anim.t+=dt;var a=st.anim,u=a.t/0.6;if(u<1)st.d=a.from*(1-u);else if(!a.done){a.done=1;st.d=0;var tr=st.qr*0.3;tr=Math.round(tr);st.Q+=tr;st.qr-=tr;st.cap='Dotyk: część ładunku pręta przeszła na elektroskop ('+(tr>0?'+':'')+tr+'). To elektryzowanie przez DOTYK — ładunek tego samego znaku co pręt.'}else if(u<2.2)st.d=Math.min(.6,(u-1.6)*1.0>0?(u-1.6):0);else{st.anim=null;st.d=.6}D.r.value=st.d}
   if(st.anim2!=null){st.d+=(st.anim2-st.d)*Math.min(1,dt*2);D.r.value=st.d;if(Math.abs(st.anim2-st.d)<.005)st.anim2=null}
   var R=E.electroscope(st.Q,st.qr,st.d,st.ground);if(st.ground)st.Q=R.Q;st.th+=(R.theta-st.th)*Math.min(1,dt*4);D.o.textContent=st.d<.01?'dotyk':fmt(st.d*30,0)+' cm';
   var g=ctx(cv),x=g.x,w=g.w,h=g.h,th=TH();GE().electroscope(x,{x:0,y:0,w:w,h:h},{ball:R.ball,leaves:R.leaves,theta:st.th,ground:st.ground,rod:{q:st.qr,d:st.d,col:+sS.value<0?'#1f2937':'#bae6fd'}},{th:th});
   /* opis */x.fillStyle=th.text;x.font='700 12px system-ui';x.textAlign='left';x.fillText('ładunek elektroskopu: '+(R.Q>0?'+':'')+fmt(R.Q,0)+'   (kulka '+(R.ball>0?'+':'')+fmt(R.ball,0)+', listki '+(R.leaves>0?'+':'')+fmt(R.leaves,0)+')',12,20);x.fillText('kąt listków ≈ '+fmt(st.th,0)+'°',12,38);
   note.innerHTML=(st.cap?'<b>'+st.cap+'</b><br>':'')+(Math.abs(R.induced)>.3&&st.d>0?'Indukcja: pręt '+(st.qr<0?'ujemny odpycha':'dodatni przyciąga')+' elektrony swobodne metalu — '+(st.qr<0?'uciekają do listków':'gromadzą się w kulce')+'. ':'')+
    'Listki rozchylają się, bo mają ładunek <b>tego samego znaku</b> i się odpychają. Kąt mówi, ile ładunku jest w listkach — nie jaki to znak (znak sprawdzasz prętem o znanym ładunku).';
   requestAnimationFrame(frame)}
  requestAnimationFrame(frame)}});

/* ---------- 3. PRAWO COULOMBA + LINIE POLA ---------- */
V.define('fiz-coulomb-v01',{title:'Prawo Coulomba i linie pola elektrycznego',tag:'FIZ+',
 hint:'Zmieniaj ładunki, odległość i ośrodek. Strzałki pokazują siły (zawsze równe i przeciwnie skierowane — III zasada dynamiki), linie — kierunek pola (od + do −).',
 foot:'F = k·q₁·q₂ / (εr·r²), k = 8,99·10⁹ N·m²/C² · stałe i εr: CHE.FIZ.ELEKTRO.CONST / EPSR · długość strzałek w skali logarytmicznej.',
 build:function(host){host.innerHTML='';var E=EL(),K=E.CONST,bar=el('div','r');host.appendChild(bar);
  var q1=rng(bar,'q₁',-5,5,.5,2),q2=rng(bar,'q₂',-5,5,.5,-2);var bar2=el('div','r');host.appendChild(bar2);var R=rng(bar2,'r',5,100,1,30);
  var sm=sel(bar2,'ośrodek',Object.keys(E.EPSR).map(function(k){return[k,E.EPSR[k].name+' (εr = '+String(E.EPSR[k].e).replace('.',',')+')']}),'powietrze');
  var bl=btn(bar2,'linie pola: wł.',function(){lines=!lines;bl.textContent='linie pola: '+(lines?'wł.':'wył.');draw()});var lines=true;
  var cv=cnv(host,330),note=el('div','note');host.appendChild(note);var ch=cnv(host,170);
  [q1.r,q2.r,R.r].forEach(function(r){r.oninput=draw});sm.onchange=draw;
  function draw(){var a=+q1.r.value*1e-6,b=+q2.r.value*1e-6,r=+R.r.value/100,er=E.EPSR[sm.value].e,F=E.coulomb(a,b,r,er);q1.o.textContent=fmt(+q1.r.value,1)+' µC';q2.o.textContent=fmt(+q2.r.value,1)+' µC';R.o.textContent=R.r.value+' cm';
   var g=ctx(cv),x=g.x,w=g.w,h=g.h,th=TH(),cy=h/2,D=60+(r-.05)/.95*(w*.62),x1=w/2-D/2,x2=w/2+D/2,Q=[{x:x1,y:cy,q:a},{x:x2,y:cy,q:b}];
   if(lines)GE().fieldLines(x,w,h,Q,{th:th,scale:2e6});
   /* siły */var len=F?Math.max(14,Math.min(w*.18,40*(Math.log10(Math.abs(F))+4),F<0?D/2-30:1e9)):0,dir=F>0?1:-1;
   [[x1,-1],[x2,1]].forEach(function(p){var d=F>0?p[1]:-p[1];GE().arrow(x,p[0]+d*18,cy,d,len)});
   Q.forEach(function(c,i){GE().pointCharge(x,c.x,c.y,c.q,'q'+(i?'₂':'₁')+' = '+fmt(c.q*1e6,1)+' µC',{th:th})});
   x.strokeStyle=th.mut;x.lineWidth=1;x.setLineDash([4,3]);x.beginPath();x.moveTo(x1,cy+48);x.lineTo(x2,cy+48);x.stroke();x.setLineDash([]);x.fillStyle=th.mut;x.textAlign='center';x.fillText('r = '+R.r.value+' cm',(x1+x2)/2,cy+62);
   var m=Math.abs(F)/9.81;note.innerHTML='<b>F = k·q₁·q₂ / (εr·r²) = '+sci(Math.abs(F))+' N</b> — '+(F>0?'<b>odpychanie</b> (ładunki jednoimienne)':F<0?'<b>przyciąganie</b> (ładunki różnoimienne)':'brak siły (jeden ładunek = 0)')+
    (F?' · tyle waży ciało o masie '+(m>=1?fmt(m,1)+' kg':fmt(m*1000,m*1000<1?3:1)+' g'):'')+'<br>Dwa razy większa odległość → siła 4 razy mniejsza; dwa razy większy ładunek → siła 2 razy większa.'+(er>2?' W ośrodku o εr = '+String(er).replace('.',',')+' siła jest '+fmt(er,1)+'× słabsza niż w próżni'+(sm.value==='woda'?' — dlatego woda rozrywa kryształy soli na jony (chemia: dysocjacja).':'.'):'');
   /* wykres F(r) */var g2=ctx(ch),y=g2.x,W=g2.w,H=g2.h,L=48,Rr=W-12,Tp=10,B=H-24;y.strokeStyle=th.mut;y.fillStyle=th.mut;y.font='600 10px system-ui';y.beginPath();y.moveTo(L,Tp);y.lineTo(L,B);y.lineTo(Rr,B);y.stroke();
   var Fmax=Math.abs(E.coulomb(a||1e-6,b||1e-6,.05,er))||1,X=function(rr){return L+(Rr-L)*(rr-.05)/.95},Y=function(f){return B-(B-Tp)*Math.min(1,f/Fmax)};
   y.strokeStyle='#ea580c';y.lineWidth=2;y.beginPath();for(var i=0;i<=120;i++){var rr=.05+.95*i/120,f=Math.abs(E.coulomb(a||1e-6,b||1e-6,rr,er));i?y.lineTo(X(rr),Y(f)):y.moveTo(X(rr),Y(f))}y.stroke();
   y.fillStyle='#ea580c';y.beginPath();y.arc(X(r),Y(Math.abs(F)),5,0,7);y.fill();if(r*2<=1){y.globalAlpha=.6;y.beginPath();y.arc(X(2*r),Y(Math.abs(F)/4),4,0,7);y.fill();y.fillText('2r → F/4',X(2*r)+6,Y(Math.abs(F)/4)-6);y.globalAlpha=1}
   y.fillStyle=th.mut;y.textAlign='center';y.fillText('r [cm]',(L+Rr)/2,H-4);[5,25,50,75,100].forEach(function(c){y.fillText(c,X(c/100),B+12)});y.textAlign='left';y.fillText('|F|',6,Tp+8)}
  setTimeout(draw,0)}});

/* ---------- 4. PRZEWODNIKI I IZOLATORY ---------- */
V.define('fiz-przewodniki-v01',{title:'Przewodnik czy izolator? Rozpływ ładunku wzdłuż pręta',tag:'FIZ',
 hint:'Naładowana kula dotyka jednego końca pręta, a drugi koniec łączy się z elektroskopem. Wybierz materiał: w metalu ładunek rozpływa się natychmiast, w izolatorze zostaje tam, gdzie go dotknięto.',
 foot:'Opór właściwy ρ: CHE.FIZ.ELEKTRO.RHO · czas rozpływu τ ≈ R·C dla pręta 30 cm × 1 cm² i C ≈ 10 pF (rząd wielkości) · animacja: tempo umowne (metal — natychmiast, izolator — praktycznie wcale).',
 build:function(host){host.innerHTML='';var E=EL(),RH=E.RHO,bar=el('div','r');host.appendChild(bar);
  var ids=['miedz','aluminium','grafit','kran','destylowana','szklo','drewno','guma','teflon'];var sM=sel(bar,'Pręt z',ids.map(function(k){return[k,RH[k].name]}),'miedz');btn(bar,'↺ od nowa',function(){reset()});
  var cv=cnv(host,230),note=el('div','note');host.appendChild(note);var ch=cnv(host,230);
  var N=28,q,st;function tau(k){var rho=RH[k].rho;return rho*0.3/1e-4*10e-12}
  function reset(){q=new Float64Array(N+2);q[0]=24;st={t:0}}reset();sM.onchange=reset;
  var last=0;function frame(t){if(!cv.isConnected)return;var dt=Math.min(.05,(t-last)/1000||0);last=t;st.t+=dt;var k=sM.value,ta=tau(k),Tv=ta<0.01?0.5:ta>1e4?Infinity:0.5+1.6*Math.log10(ta/0.01);
   /* dyfuzja: komórka 0 = kula (pojemność 6), N+1 = elektroskop (pojemność 2) */
   if(isFinite(Tv)){var Dd=(N*N)/(2*Tv),sub=Math.ceil(Dd*dt/0.35),h0=dt/sub;for(var s=0;s<sub;s++){var cap=function(i){return i===0?6:i===N+1?2:1},fl=new Float64Array(N+1);for(var i=0;i<=N;i++)fl[i]=Dd*h0*0.35*(q[i]/cap(i)-q[i+1]/cap(i+1));for(i=0;i<=N;i++){q[i]-=fl[i];q[i+1]+=fl[i]}}}
   var g=ctx(cv),x=g.x,w=g.w,h=g.h,th=TH(),y0=110,xs=w*.14,xe=w*.78,cw=(xe-xs)/N;
   GE().bar(x,xs,y0,xe,q,{col:{miedz:'#c2703d',aluminium:'#cbd5e1',grafit:'#3f3f46',kran:'#7dd3fc',destylowana:'#bae6fd',szklo:'#e0f2fe',drewno:'#b45309',guma:'#1f2937',teflon:'#f5f5f4'}[k],th:th});
   x.fillStyle=th.text;x.font='700 12px system-ui';x.textAlign='left';x.fillText(RH[k].name+' — '+RH[k].kind+' · ρ = '+sci(RH[k].rho)+' Ω·m',12,22);x.fillText('τ ≈ '+(ta<1e-6?'< 1 µs (natychmiast)':ta<60?sci(ta)+' s':ta<86400*2?fmt(ta/3600,1)+' h':ta<3.15e9?fmt(ta/86400,0)+' dni':'> 100 lat (praktycznie nigdy)'),12,40);
   requestAnimationFrame(frame)}
  function bars(){var g=ctx(ch),x=g.x,w=g.w,h=g.h,th=TH(),ks=Object.keys(RH).sort(function(a,b){return RH[a].rho-RH[b].rho}),L=8,bw=(w-16)/ks.length,B=h-74,X0=-9,X1=24,Y=function(r){return B-(B-12)*(Math.log10(r)-X0)/(X1-X0)};
   ks.forEach(function(k2,i){var r=RH[k2].rho,kd=RH[k2].kind,c=kd==='przewodnik'?'#c2703d':kd==='izolator'?'#475569':kd==='półprzewodnik'?'#7c3aed':'#0891b2';x.fillStyle=c;x.globalAlpha=k2===sM.value?1:.55;x.fillRect(L+i*bw+3,Y(r),bw-6,B-Y(r)+0.01);x.globalAlpha=1;x.save();x.translate(L+i*bw+bw/2,B+6);x.rotate(.6);x.fillStyle=th.text;x.font=(k2===sM.value?'800 ':'600 ')+'10px system-ui';x.textAlign='left';x.fillText(RH[k2].name,0,4);x.restore()});
   x.fillStyle=th.mut;x.font='600 10px system-ui';x.textAlign='left';x.fillText('opór właściwy ρ [Ω·m], skala log: 10⁻⁹ … 10²⁴ (słupek wyżej = gorszy przewodnik)',L,10)}
  function info(){var k=sM.value,r=RH[k];bars();note.innerHTML=(r.kind==='przewodnik'?'<b>Przewodnik</b> — ma <b>elektrony swobodne</b> (metale, grafit). Ładunek natychmiast rozpływa się po całym pręcie i dociera do elektroskopu.':r.kind==='elektrolit'?'<b>Przewodzi dzięki jonom</b> (Na⁺, Cl⁻, Ca²⁺… — chemia: dysocjacja). Dla elektrostatyki to dobry przewodnik — dlatego wilgotne powietrze i mokra skóra „zabierają” ładunek.':r.kind==='półprzewodnik'?'<b>Półprzewodnik</b> — mało nośników ładunku; przewodnictwo rośnie z temperaturą i domieszkami (elektronika).':r.kind==='izolator'?'<b>Izolator</b> — elektrony związane w atomach/cząsteczkach. Ładunek zostaje tam, gdzie go dotknięto; elektroskop się nie wychyla.':'<b>Słaby przewodnik</b> — bardzo mało jonów (H₃O⁺, OH⁻ z autodysocjacji wody), ale w elektrostatyce i tak rozładowuje ciało w ułamku sekundy.')}
  sM.addEventListener('change',info);info();requestAnimationFrame(frame)}});

/* ---------- 5. ŁADUNEK: kule, dotyk, uziemienie, q ↔ n ---------- */
V.define('fiz-ladunek-v01',{title:'Bilans ładunku: dotyk, uziemienie, zasada zachowania ładunku, liczba elektronów',tag:'FIZ',
 hint:'Ustaw ładunki kul i jednostkę (C, mC, µC, nC albo ładunki elementarne e). Dotykaj kule parami lub wszystkie naraz, uziemiaj. Panel „Bilans” zapisuje każdą operację jak w zeszycie: przed → po, suma z nawiasami, ile elektronów przepłynęło i w którą stronę. Kafelki + i − pokazują, jak ładunki się znoszą. Opcja LO: kule różnej wielkości (wyrównanie potencjałów).',
 foot:'Model: CHE.PHYS.electro.contact (q_i = Q·R_i/ΣR; identyczne kule — po równo), ground, transfer, electrons (n = |q|/e) · rysunek: GFX.electro.sphere · e = 1,602·10⁻¹⁹ C.',
 build:function(host){host.innerHTML='';var P=C.PHYS.electro,E0=P.CONST.e,U={C:1,mC:1e-3,'µC':1e-6,nC:1e-9,e:E0},st={q:[0,-4,0],R:[1,1,1],u:'C',diff:false,last:null,log:[],g:null,anim:null},q0=st.q.slice();
  var bar=el('div','r');host.appendChild(bar);var su=sel(bar,'jednostka',[['C','C'],['mC','mC'],['µC','µC'],['nC','nC'],['e','e (ładunek elementarny)']],'C');su.onchange=function(){st.u=su.value;upd()};
  var ins=[];['A','B','C'].forEach(function(n,i){var w=el('label',null,' '+n+': ');var x=el('input');x.type='number';x.step='1';x.min='-12';x.max='12';x.value=st.q[i];x.style.width='64px';x.oninput=function(){st.q[i]=+x.value||0;q0=st.q.slice();st.log=[];st.last=null;upd()};w.appendChild(x);bar.appendChild(w);ins.push(x)});
  var lr=el('label',null,' <input type="checkbox"> kule różnej wielkości (LO)');bar.appendChild(lr);var cb=lr.querySelector('input');
  var rb=el('div','r');rb.style.display='none';host.appendChild(rb);var rs=[];['A','B','C'].forEach(function(n,i){var r=rng(rb,'R'+n,1,3,1,1);r.r.oninput=function(){st.R[i]=+r.r.value;r.o.textContent=st.R[i]+' cm';upd()};r.o.textContent='1 cm';rs.push(r)});
  cb.onchange=function(){st.diff=cb.checked;rb.style.display=cb.checked?'':'none';if(!cb.checked){st.R=[1,1,1];rs.forEach(function(r){r.r.value=1;r.o.textContent='1 cm'})}upd()};
  var b2=el('div','r');host.appendChild(b2);
  [[0,1],[1,2],[0,2],[0,1,2]].forEach(function(p){btn(b2,'dotknij '+p.map(function(i){return'ABC'[i]}).join('–'),function(){touch(p)})});
  [0,1,2].forEach(function(i){btn(b2,'uziem '+'ABC'[i],function(){ground(i)})});btn(b2,'od nowa',function(){st.q=q0.slice();st.log=[];st.last=null;upd()});
  var cv=cnv(host,240),bal=el('div');host.appendChild(bal);host._st=st;
  function nf(v){var r=Math.round(v*1000)/1000;return(Math.abs(r)<1e-12?'0':String(r)).replace('.',',').replace('-','−')}
  function qs(v){return(v>0?'+':'')+nf(v)+' '+st.u}
  function br(v){return v<0?'('+qs(v)+')':qs(v)}
  function tiles(v){var n=Math.abs(v),k=Math.floor(n+1e-9),fr=n-k,s=v<0?'−':'+',col=v<0?'#2563eb':'#dc2626',h='';
   for(var i=0;i<Math.min(k,24);i++)h+='<span style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:'+col+';color:#fff;font:800 13px/18px system-ui;justify-content:center;margin:1px">'+s+'</span>';
   if(fr>1e-6)h+='<span title="część ładunku" style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:'+col+';opacity:.35;color:#fff;font:800 13px/18px system-ui;justify-content:center;margin:1px">'+s+'</span>';
   if(k>24)h+=' … ('+k+')';return h||'<span style="color:#64748b">0 — obojętna</span>'}
  function nE(v){return P.electrons(Math.abs(v)*U[st.u])}
  function touch(p){var bef=p.map(function(i){return st.q[i]}),Rs=p.map(function(i){return st.R[i]}),aft=P.contact(bef,st.diff?Rs:null);
   var tr=p.map(function(i,k){return{i:i,d:aft[k]-bef[k]}});p.forEach(function(i,k){st.q[i]=aft[k]});
   st.last={type:'touch',p:p,bef:bef,aft:aft,tr:tr,Rs:Rs};st.anim={p:p,t:performance.now()};st.log.push('dotyk '+p.map(function(i){return'ABC'[i]}).join('–'));upd()}
  function ground(i){var b=st.q[i];st.q[i]=0;st.last={type:'ground',i:i,bef:b};st.g={i:i,t:performance.now(),s:b};st.log.push('uziemienie '+'ABC'[i]);upd()}
  function upd(){ins.forEach(function(x,i){x.value=Math.round(st.q[i]*1000)/1000});var tot=st.q.reduce(function(a,b){return a+b},0),tot0=q0.reduce(function(a,b){return a+b},0),L=st.last,h='';
   if(L&&L.type==='touch'){var nm=L.p.map(function(i){return'q<sub>'+'ABC'[i]+'</sub>'}),sb=L.bef.reduce(function(a,b){return a+b},0);
    h+='<div><b>Przed:</b> '+nm.join(' + ')+' = '+L.bef.map(br).join(' + ')+' = <b>'+qs(sb)+'</b></div>'+
     '<div><b>Po:</b> '+nm.map(function(x){return x+'′'}).join(' + ')+' = '+L.aft.map(br).join(' + ')+' = <b>'+qs(L.aft.reduce(function(a,b){return a+b},0))+'</b> <span style="color:#16a34a">— suma bez zmian (zasada zachowania ładunku)</span></div>'+
     (st.diff&&L.Rs.some(function(r){return r!==L.Rs[0]})?'<div><b>Kule różnej wielkości:</b> q<sub>i</sub> = Q·R<sub>i</sub>/ΣR — '+L.Rs.map(function(r,k){return'ABC'[L.p[k]]+': '+r+' cm'}).join(', ')+'; potencjały V = k·q/R wyrównały się.</div>':'<div><b>Identyczne kule:</b> q′ = (suma) / '+L.p.length+' = '+qs(sb)+' / '+L.p.length+' = '+qs(sb/L.p.length)+'</div>')+
     '<div><b>Przepływ:</b> '+L.tr.filter(function(t){return Math.abs(t.d)>1e-12}).map(function(t){return'ABC'[t.i]+(t.d<0?' przyjęła':' oddała')+' elektrony: Δq = '+qs(t.d)+(st.u==='e'?'':' → '+sci(nE(t.d))+' elektronów')}).join('; ')+(L.tr.every(function(t){return Math.abs(t.d)<1e-12})?'brak — kule miały już równe potencjały':'')+'. Przemieszczają się tylko elektrony.</div>';
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:8px;margin-top:6px">'+L.p.map(function(i,k){return'<div style="border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:6px 8px"><b>'+'ABC'[i]+'</b> przed: '+qs(L.bef[k])+'<div>'+tiles(L.bef[k])+'</div><b>'+'ABC'[i]+'′</b> po: '+qs(L.aft[k])+'<div>'+tiles(L.aft[k])+'</div></div>'}).join('')+'</div>'+
     '<div class="note" style="margin-top:6px">Jak liczyć graficznie: każdy „+” znosi się z jednym „−” (para = 0). Zostają tylko niesparowane znaki — to suma. Potem rozdziel je po równo między identyczne kule.</div>'}
   else if(L&&L.type==='ground'){var g=P.ground(L.bef*U[st.u]);h+='<div><b>Uziemienie kuli '+'ABC'[L.i]+':</b> '+qs(L.bef)+' → 0 '+st.u+'.</div><div><b>Przepływ:</b> '+g.dir+(L.bef?' — '+sci(g.electrons)+' elektronów':'')+'.</div><div>Ziemia jest ogromnym przewodnikiem: ładunek rozkłada się tak, by potencjały się wyrównały, a na małej kuli zostaje praktycznie 0. W układzie <b>kula + Ziemia</b> suma ładunków jest nadal stała.</div><div style="margin-top:4px">przed: '+tiles(L.bef)+' &nbsp; po: '+tiles(0)+'</div>'}
   else h+='<div class="note">Wybierz operację. Przykład z zeszytu: A = 0 C, B = −4 C → dotknij A–B.</div>';
   h+='<div style="margin-top:8px"><b>Wszystkie kule:</b> '+st.q.map(function(v,i){return'q<sub>'+'ABC'[i]+'</sub> = '+qs(v)}).join(' · ')+' · suma <b>'+qs(tot)+'</b>'+(Math.abs(tot-tot0)<1e-9?' <span style="color:#16a34a">— zachowana</span>':' <span style="color:#d97706">— zmieniona przez uziemienie (część ładunku jest w Ziemi)</span>')+'</div>'+(st.log.length?'<div style="opacity:.8;font-size:12px;margin-top:4px">kroki: '+st.log.join(' → ')+'</div>':'');
   bal.innerHTML='<div class="note" style="margin-top:6px"><b style="display:block;margin-bottom:4px">Bilans</b>'+h+'</div>'}
  function frame(t){if(!cv.isConnected)return;var g=ctx(cv),x=g.x,w=g.w,h=g.h,T=TH(),xs=[w*.2,w*.5,w*.8],yc=h*.45;
   if(st.g){var gi=st.g.i,k=(t-st.g.t)/1400;if(k>1)st.g=null;else{var gx=xs[gi],gy=h-18;x.strokeStyle=T.mut;x.lineWidth=2;x.beginPath();x.moveTo(gx,yc+30);x.lineTo(gx,gy);x.stroke();for(var j=0;j<3;j++){x.beginPath();x.moveTo(gx-14+j*4,gy+j*5);x.lineTo(gx+14-j*4,gy+j*5);x.stroke()}
     if(st.g.s)for(var m=0;m<5;m++){var f=((k*2+m/5)%1),yy=st.g.s<0?yc+30+f*(gy-yc-30):gy-f*(gy-yc-30);chg(x,gx+6,yy,-1,4,1-k*.5)}}}
   st.q.forEach(function(v,i){var dx=0,R=st.diff?20+st.R[i]*12:44;if(st.anim&&st.anim.p.indexOf(i)>=0){var k2=Math.min(1,(t-st.anim.t)/700),cx=st.anim.p.reduce(function(a,j){return a+xs[j]},0)/st.anim.p.length;dx=(cx-xs[i])*.35*Math.sin(k2*Math.PI)}
    GE().sphere(x,xs[i]+dx,yc,R,v,{label:'ABC'[i],value:qs(v),th:T,scale:1})});
   if(st.anim&&t-st.anim.t>700)st.anim=null;requestAnimationFrame(frame)}
  upd();requestAnimationFrame(frame)}});
})();
