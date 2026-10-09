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
    var rodL=w*.06,rodR=w*.40,rodY=150,rodH=18;
   st.near+=(st.target-st.near)*Math.min(1,dt*2.5);
   var px=w*.74,py=26,L=200,bx=px+L*Math.sin(st.phi),by=py+L*Math.cos(st.phi),bR=13;
    
   var tipX0=rodR,tipX1=px-bR-8+Math.min(0,0),shift=(tipX1-tipX0-60)*st.near+0,tipX=tipX0+shift,tipY=rodY+(py+L-rodY)*st.near,rodLx=rodL+shift;
    
   var clothX=rodL+20;if(st.rub>0){st.rub-=dt;clothX=rodL+20+(rodR-rodL-110)*(.5+.5*Math.sin(t/120))}
   if(st.plan&&st.rub>0){st.plan.t+=dt;if(st.plan.done<st.plan.n&&st.plan.t>0.16*st.plan.done+0.2){st.plan.done++;st.flying.push({u:0,from:st.plan.from})}}
    
   var cX=st.near>0.02?clothX-(st.near*w*.05):clothX,cY=rodY-26;
   GE().cloth(x,cX,cY,90,52,{col:MATCOL[sB.value],q:0,name:T[T.findIndex(function(m){return m.id===sB.value})].name,alpha:1-st.near*0.7,th:th});
    GE().rod(x,rodLx,rodY,tipX,tipY,{q:st.qa,col:MATCOL[sA.value],th:th});
   x.fillStyle=th.text;x.font='700 12px system-ui';x.textAlign='left';x.fillText('pręt: '+T[T.findIndex(function(m){return m.id===sA.value})].name+'  q = '+(st.qa>0?'+':'')+st.qa+' e (umownie)',w*.03,22);
   x.fillText('tkanina: q = '+(st.qc>0?'+':'')+st.qc+' e',w*.03,40);
    for(i=0;i<Math.abs(st.qc);i++)chg(x,cX+10+(i%6)*14,cY+12+Math.floor(i/6)*14,st.qc,5);
    
   for(i=st.flying.length-1;i>=0;i--){var f=st.flying[i];f.u+=dt*2.2;var ax=f.from==='A'?rodL+60+((i*37)%(rodR-rodL-120)):cX+45,ay=f.from==='A'?rodY:cY+26,bx2=f.from==='A'?cX+45:rodL+60+((i*53)%(rodR-rodL-120)),by2=f.from==='A'?cY+26:rodY;var u=Math.min(1,f.u);chg(x,ax+(bx2-ax)*u,ay+(by2-ay)*u-Math.sin(u*Math.PI)*16,-1,5);if(f.u>=1){st.flying.splice(i,1);if(f.from==='A'){st.qa++;st.qc--}else{st.qa--;st.qc++}}}
    
   if(st.res&&st.res.grounded&&st.res.grounded.length&&st.rub<=0&&!st.flying.length&&(st.qa||st.qc)){st.dis=(st.dis||0)+dt;if(st.dis>.6){st.dis=0;if(st.res.grounded.indexOf(sA.value)>=0&&st.qa)st.qa-=Math.sign(st.qa);if(st.res.grounded.indexOf(sB.value)>=0&&st.qc)st.qc-=Math.sign(st.qc)}}
    
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