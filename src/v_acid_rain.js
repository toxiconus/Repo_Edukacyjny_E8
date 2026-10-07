;/* ===== v0.38: 'acid-rain-v01' zastąpiony — model kwaśnych deszczy z liczbami z silnika.
   pH deszczu: [H⁺] = √(Ka₁·[CO₂(aq)]) + 2·c(H₂SO₄) + c(HNO₃); Ka₁ z CHE.DATA.ACID_SYSTEMS.H2CO3; barwa kropli z CHE.COLORS (wskaźnik uniwersalny).
   Jezioro: zasadowość (ANC) zależna od podłoża i wapnowania, zużywana przez opad w kolejnych latach. Równania: CHE.REACTION. ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
V.define('acid-rain-v01',{title:'Kwaśne deszcze — emisja → chmura → opad → jezioro, las, zabytki',tag:'GFX',
 hint:'Ustaw emisję SO₂ (elektrownia) i NOₓ (transport), włącz odsiarczanie, katalizatory lub wapnowanie i uruchom upływ lat. Kolor kropli = wskaźnik uniwersalny przy pH deszczu.',
 foot:'Model poglądowy: czysty deszcz pH ≈ 5,6 (CO₂ z powietrza, Ka₁ H₂CO₃ z silnika); jezioro traci zasadowość (ANC) — na wapieniu bufor HCO₃⁻ chroni dłużej niż na granicie. Ryby giną poniżej pH ≈ 5.',
 build:function(host){host.innerHTML='';var D=C.DATA||{},G=C.LAB&&C.LAB.GFX,CO=C.COLORS;
  var st={so2:70,nox:50,desulf:false,cat:false,lime:false,rock:'granit',years:0,run:false,load:0,marble:0};
  var bar=el('div','r'),bar2=el('div','r');host.append(bar,bar2);
  function rng(par,lab,key,fmt){var l=el('label',null,lab+' '),i=el('input'),o=el('b');i.type='range';i.min=0;i.max=100;i.step=5;i.value=st[key];o.textContent=fmt(st[key]);i.oninput=function(){st[key]=+i.value;o.textContent=fmt(st[key])};l.append(i,o);par.appendChild(l)}
  function tog(par,lab,key){var b=el('button',null,'');b.type='button';var up=function(){b.textContent=lab+': '+(st[key]?'wł.':'wył.');b.classList.toggle('on',!!st[key])};b.onclick=function(){st[key]=!st[key];up()};up();par.appendChild(b)}
  rng(bar,'SO₂ (elektrownia)','so2',function(v){return v+'%'});rng(bar,'NOₓ (transport)','nox',function(v){return v+'%'});
  tog(bar2,'Odsiarczanie spalin','desulf');tog(bar2,'Katalizatory','cat');tog(bar2,'Wapnowanie jeziora','lime');
  var rs=el('select');[['granit','podłoże: granit (słaby bufor)'],['wapien','podłoże: wapień (silny bufor)']].forEach(function(o){var x=el('option',null,o[1]);x.value=o[0];rs.appendChild(x)});rs.onchange=function(){st.rock=rs.value};bar2.appendChild(rs);
  var bar3=el('div','r');host.appendChild(bar3);var go=el('button',null,'▶ upływ lat');go.type='button';go.onclick=function(){st.run=!st.run;go.textContent=st.run?'⏸ pauza':'▶ upływ lat'};var rst=el('button',null,'↺ od nowa');rst.type='button';rst.onclick=function(){st.years=0;st.load=0;st.marble=0;st.run=false;go.textContent='▶ upływ lat'};bar3.append(go,rst);
  var cv=el('canvas');cv.style.cssText='width:100%;height:330px;display:block;border-radius:12px';host.appendChild(cv);var ro=el('div','note');host.appendChild(ro);
  var eqs=el('div','note');host.appendChild(eqs);
  var pf=function(s){return String(s).replace(/([A-Za-z\)])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(c){return '₀₁₂₃₄₅₆₇₈₉'[c]})}).replace(/->/g,'→')};
  try{var R=C.REACTION;eqs.innerHTML='<b>Chemizm (CHE.REACTION):</b><br>'+['sO2','so2O2','n2O2','noO2','no2H2o','no2O2H2o','caco3H2so4'].filter(function(k){return R.get(k)}).map(function(k){var d=(D.REACTION_DATA||{})[k]||{};return pf(R.equation(k))+(d.conditions?' <span style="opacity:.65">— '+d.conditions+'</span>':'')}).join('<br>')+'<br><b>Zapobieganie:</b> odsiarczanie (CaCO₃ + SO₂ → CaSO₃ + CO₂), katalizatory (NOₓ → N₂), OZE, wapnowanie gleb i jezior.'}catch(_){}
  var Ka1=((D.ACID_SYSTEMS||{}).H2CO3||{Ka:[4.47e-7]}).Ka[0],CO2aq=0.034*4.2e-4;
  function model(){var so2=st.so2/100*(st.desulf?.1:1),nox=st.nox/100*(st.cat?.2:1),cS=3e-5*so2,cN=2.5e-5*nox,H=Math.sqrt(Ka1*CO2aq)+2*cS+cN,pHr=-Math.log10(H);
   var anc0=(st.rock==='wapien'?1.2e-3:6e-5)+(st.lime?8e-4:0),excess=Math.max(0,H-Math.sqrt(Ka1*CO2aq)),anc=anc0-st.load,pHl;
   if(anc>1e-6)pHl=Math.min(8.3,6.35+Math.log10(anc/(CO2aq+1e-6)));else pHl=Math.max(pHr,-Math.log10(-anc+1e-7));
   return{so2:so2,nox:nox,H:H,pHr:pHr,pHl:pHl,anc:anc,excess:excess}}
  var drops=[],smoke=[],t0=0,fall=[];
  function indCol(p){try{var c=CO.at('ind-uniwersalny',p);if(c)return c}catch(_){}var k=Math.max(0,Math.min(1,p/14));return[Math.round(230-200*k),Math.round(60+140*Math.sin(k*Math.PI)),Math.round(40+200*k)]}
  var rgba=function(c,a){return 'rgba('+c.map(function(v){return v|0}).join(',')+','+a+')'};
  function frame(t){if(!cv.isConnected)return;var dt=Math.min(.05,(t-t0)/1000||0);t0=t;var d=Math.min(2,window.devicePixelRatio||1),W=cv.clientWidth||600,H=cv.clientHeight||330;if(cv.width!==Math.round(W*d)){cv.width=W*d;cv.height=H*d}var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);
   var m=model(),T=G?G.theme():{dark:false,text:'#1e293b'};
   if(st.run){st.years=Math.min(40,st.years+dt*1.5);st.load+=m.excess*dt*1.5*0.6;st.marble+=m.excess*dt*1.5*900;if(st.years>=40){st.run=false;go.textContent='▶ upływ lat'}}
   /* niebo */var ac=Math.min(1,(5.6-m.pHr)/2.2),sky=x.createLinearGradient(0,0,0,H*.7);sky.addColorStop(0,T.dark?'#0f1d33':'rgb('+(150-40*ac)+','+(195-50*ac)+','+(235-60*ac)+')');sky.addColorStop(1,T.dark?'#1e2b40':'rgb('+(215-30*ac)+','+(225-35*ac)+','+(230-40*ac)+')');x.fillStyle=sky;x.fillRect(0,0,W,H);
   var gy=H*.74;x.fillStyle=T.dark?'#2b2f26':'#a7b38a';x.fillRect(0,gy,W,H-gy);
   /* elektrownia + dym */var cx=W*.08,ch=H*.42;x.fillStyle=T.dark?'#4b5563':'#9aa3ad';x.fillRect(cx-8,gy-ch,16,ch);x.fillRect(cx-30,gy-H*.12,70,H*.12);
   if(Math.random()<dt*20*(.2+m.so2))smoke.push({x:cx,y:gy-ch,vx:20+Math.random()*15,vy:-12-Math.random()*8,a:1,c:[120,120,125],r:6});
   /* auto + spaliny */var carX=(t/40)%(W*.5)+W*.25;x.fillStyle='#2563eb';x.fillRect(carX,gy-12,30,10);x.fillStyle='#111';x.beginPath();x.arc(carX+7,gy-2,3.5,0,7);x.arc(carX+23,gy-2,3.5,0,7);x.fill();
   if(Math.random()<dt*12*(.15+m.nox))smoke.push({x:carX-2,y:gy-6,vx:-6,vy:-18-Math.random()*8,a:.8,c:[150,90,40],r:4});
   for(var i=smoke.length-1;i>=0;i--){var s=smoke[i];s.x+=s.vx*dt;s.y+=s.vy*dt;s.r+=dt*6;s.a-=dt*.18;if(s.a<=0||s.y<H*.12){smoke.splice(i,1);continue}x.fillStyle=rgba(s.c,.35*s.a);x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()}
   /* chmura */var cy=H*.14,cg=Math.round(235-110*ac);x.fillStyle='rgb('+cg+','+cg+','+(cg+5)+')';[[.45,0,46],[.53,-12,40],[.61,0,48],[.69,-6,38],[.77,4,34]].forEach(function(p){x.beginPath();x.arc(W*p[0],cy+p[1],p[2],0,7);x.fill()});
   x.fillStyle=T.dark?'#e2e8f0':'#1e293b';x.font='700 11px Inter,system-ui';x.textAlign='center';x.fillText(m.so2+m.nox>.05?'H₂SO₄ · HNO₃ · H₂CO₃':'H₂CO₃ (CO₂ + H₂O)',W*.6,cy+4);
   /* krople */var dc=indCol(m.pHr);if(Math.random()<dt*60)drops.push({x:W*(.38+Math.random()*.46),y:cy+30,v:220+Math.random()*80});for(i=drops.length-1;i>=0;i--){var q=drops[i];q.y+=q.v*dt;if(q.y>gy+((q.x>W*.62&&q.x<W*.92)?6:0)){drops.splice(i,1);continue}x.strokeStyle=rgba(dc,.9);x.lineWidth=2;x.beginPath();x.moveTo(q.x,q.y);x.lineTo(q.x-1,q.y+7);x.stroke()}
   /* las */var health=Math.max(0,Math.min(1,(m.pHr-3.8)/1.8))*(1-Math.min(.6,st.years/80*(5.6-m.pHr)));for(var k=0;k<5;k++){var tx=W*(.36+k*.045),th=34+k%2*8;x.fillStyle='#6b4f2a';x.fillRect(tx-2,gy-14,4,14);x.fillStyle='rgb('+Math.round(160-110*health)+','+Math.round(110+40*health)+','+Math.round(50)+')';x.beginPath();x.moveTo(tx,gy-14-th);x.lineTo(tx-12,gy-12);x.lineTo(tx+12,gy-12);x.closePath();x.fill()}
   /* jezioro */var lc0=indCol(m.pHl),lc=[70,130,180].map(function(v,i){return v+(lc0[i]-v)*.35}),lx=W*.62,lw=W*.3;x.fillStyle=rgba(lc,.75);x.beginPath();x.ellipse(lx+lw/2,gy+14,lw/2,14,0,0,7);x.fill();var fish=m.pHl>=6?4:m.pHl>=5.5?3:m.pHl>=5?1:0;for(k=0;k<fish;k++){var fx=lx+lw*(.2+.2*k)+Math.sin(t/600+k)*8;x.fillStyle='#f59e0b';x.beginPath();x.ellipse(fx,gy+14,6,3,0,0,7);x.fill();x.beginPath();x.moveTo(fx-6,gy+14);x.lineTo(fx-10,gy+11);x.lineTo(fx-10,gy+17);x.fill()}
   /* pomnik marmurowy */var er=Math.min(.7,st.marble),mx=W*.28,mh=40*(1-er*.5);x.fillStyle='#e7e5e4';x.fillRect(mx-10,gy-mh,20,mh);x.beginPath();x.arc(mx,gy-mh-7,8*(1-er*.4),0,7);x.fill();x.strokeStyle='#a8a29e';x.lineWidth=1;x.strokeRect(mx-10,gy-mh,20,mh);
   x.textAlign='left';x.fillStyle=T.dark?'#e2e8f0':'#1e293b';x.font='600 10px Inter,system-ui';x.fillText('elektrownia',cx-28,gy+14);x.fillText('marmur',mx-16,gy+14);x.fillText('las',W*.42,gy+14);x.fillText('jezioro',lx+lw*.4,gy+40);
   x.font='800 13px Inter,system-ui';x.fillText('rok '+Math.floor(st.years),W-70,20);
   if(Math.floor(t/250)!==frame.l){frame.l=Math.floor(t/250);var fz=function(v,n){return v.toFixed(n).replace('.',',')};
    ro.innerHTML='<b>pH deszczu ≈ '+fz(m.pHr,1)+'</b> ('+(m.pHr>=5.5?'naturalny — tylko CO₂':'kwaśny deszcz')+') · <b>pH jeziora ≈ '+fz(m.pHl,1)+'</b> · zasadowość jeziora (ANC) '+(m.anc>0?fz(m.anc*1000,2)+' mmol/dm³':'wyczerpana')+
     '<br>Ryby: '+(fish>=3?'żyją':fish>0?'giną (pH &lt; 5,5)':'brak życia (pH &lt; 5)')+' · las: '+(health>.7?'zdrowy':health>.35?'osłabiony (wymywanie Ca²⁺, Mg²⁺)':'zamiera')+' · marmur: ubytek '+Math.round(Math.min(.7,st.marble)*100)+'%'+
     '<br><span style="opacity:.75">[H⁺] = √(K<sub>a1</sub>·[CO₂]) + 2·c(H₂SO₄) + c(HNO₃) = '+m.H.toExponential(1).replace('.',',')+' mol/dm³; K<sub>a1</sub>(H₂CO₃) = '+Ka1.toExponential(2).replace('.',',')+' z silnika.</span>'}
   requestAnimationFrame(frame)}
  requestAnimationFrame(frame)}});
})();
