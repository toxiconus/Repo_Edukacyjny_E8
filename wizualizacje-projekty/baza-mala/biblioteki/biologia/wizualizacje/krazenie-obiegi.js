/* viz: krazenie-obiegi — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],svg=BIO.Lh["C.svg"],btn=BIO.Lh["C.btn"];
BIO.define('krazenie-obiegi',{opis:'Serce (4 jamy, zastawki) + obieg mały i duży: krew odtlenowana (niebieska) i utlenowana (czerwona); kliknij element, „krok” prowadzi drogą krwi, przyciski podświetlają jeden obieg',
mount:function(el,o){
  var O2='var(--blood-o2)',CO='var(--blood-co2)',O2b='var(--blood-o2-bg)',COb='var(--blood-co2-bg)';
  var M={RA:['Prawy przedsionek','Przyjmuje krew <strong>odtlenowaną</strong> z całego ciała (żyłami głównymi: górną i dolną). Ścianę ma cienką — tylko przepycha krew do komory tuż obok.'],
   zt:['Zastawka trójdzielna','Między prawym przedsionkiem a prawą komorą. Otwiera się w stronę komory; przy skurczu komory zamyka się i krew nie cofa się do przedsionka.'],
   RV:['Prawa komora','Pompuje krew odtlenowaną do <strong>płuc</strong> przez pień płucny (tętnice płucne) — to początek <strong>obiegu małego</strong>. Ściana grubsza niż przedsionka, ale cieńsza niż lewej komory, bo płuca są blisko.'],
   tp:['Tętnice płucne (pień płucny)','Tętnica, choć niesie krew <strong>odtlenowaną</strong>! Nazwa „tętnica” mówi o kierunku: <strong>od serca</strong>. U wyjścia z komory — zastawka półksiężycowata.'],
   pl:['Płuca — naczynia włosowate','Wymiana gazowa w pęcherzykach płucnych: krew <strong>oddaje CO₂</strong> i <strong>pobiera O₂</strong>. Odtąd krew jest utlenowana (czerwona).'],
   zp:['Żyły płucne','Żyły, choć niosą krew <strong>utlenowaną</strong>! Nazwa „żyła” = <strong>do serca</strong>. Wpadają do lewego przedsionka — koniec obiegu małego.'],
   LA:['Lewy przedsionek','Przyjmuje krew <strong>utlenowaną</strong> z płuc i przepycha ją do lewej komory.'],
   zd:['Zastawka dwudzielna (mitralna)','Między lewym przedsionkiem a lewą komorą; zapobiega cofaniu się krwi przy skurczu komory.'],
   LV:['Lewa komora','Pompuje krew utlenowaną do <strong>całego ciała</strong> przez aortę — początek <strong>obiegu dużego</strong>. Ma <strong>najgrubszą ścianę</strong> serca: musi wytworzyć ciśnienie, które przepchnie krew aż do palców stóp.'],
   ao:['Aorta','Największa tętnica ciała. Rozgałęzia się na tętnice prowadzące krew do wszystkich narządów. U wyjścia z komory — zastawka półksiężycowata.'],
   ci:['Narządy ciała — naczynia włosowate','W tkankach krew oddaje <strong>O₂</strong> i składniki odżywcze, a zabiera <strong>CO₂</strong> i zbędne produkty przemiany materii. Krew staje się odtlenowana (niebieska).'],
   zg:['Żyły główne (górna i dolna)','Zbierają krew odtlenowaną z całego ciała i wprowadzają ją do prawego przedsionka — koniec obiegu dużego. Krew wraca pod niskim ciśnieniem; w żyłach kończyn pomagają zastawki żylne i praca mięśni.'],
   ws:['Widok od przodu','Serce rysujemy tak, jakbyśmy patrzyli na człowieka stojącego przodem do nas: <strong>prawa</strong> połowa serca jest <strong>po lewej stronie rysunku</strong>. To częsta pułapka w zadaniach ze schematem!']};
  var SEQ=['RA','zt','RV','tp','pl','zp','LA','zd','LV','ao','ci','zg'],MALY=['RV','tp','pl','zp','LA'],DUZY=['LV','ao','ci','zg','RA'];
  var tools=H('div','bv-tools'),box=H('div','bio-svgbox'),info=BIO.fx.infoBox('Kliknij element schematu albo przejdź drogę krwi przyciskiem „krok”.');
  el.appendChild(tools);el.appendChild(box);el.appendChild(info);
  var defs=S('defs',{},[S('marker',{id:'kr-a-r',viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:16,markerHeight:16,markerUnits:'userSpaceOnUse',orient:'auto'},[S('path',{d:'M0 0L10 5L0 10z',fill:O2})]),
    S('marker',{id:'kr-a-b',viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:16,markerHeight:16,markerUnits:'userSpaceOnUse',orient:'auto'},[S('path',{d:'M0 0L10 5L0 10z',fill:CO})])]);
  function G(k,kids){var g=S('g',{'data-k':k,'class':'kr-el'},kids);return g}
  function vessel(k,d,c,lab,lx,ly){var L=lab.split('|');return G(k,[S('path',{d:d,fill:'none',stroke:'transparent','stroke-width':22}),S('path',{d:d,fill:'none',stroke:c,'class':'kr-v','stroke-width':9,'stroke-linecap':'round','stroke-linejoin':'round','marker-end':'url(#kr-a-'+(c===O2?'r':'b')+')'})].concat(L.map(function(t,j){return T(lx,ly+j*22,t,{s:19,w:800,f:c})})))}
  function room(k,x,y,w,h,c,bgc,l1,l2){return G(k,[S('rect',{x:x,y:y,width:w,height:h,rx:18,fill:bgc,stroke:c,'stroke-width':3}),T(x+w/2,y+h/2-11,l1,{s:19,w:800,f:c}),T(x+w/2,y+h/2+13,l2,{s:16,w:700,f:c})])}
  function valve(k,x,y,c){return G(k,[S('path',{d:'M'+(x-16)+' '+(y-6)+'L'+x+' '+(y+8)+'L'+(x+16)+' '+(y-6),fill:'none',stroke:c,'stroke-width':4,'stroke-linejoin':'round'}),S('rect',{x:x-22,y:y-10,width:44,height:22,fill:'transparent'})])}
  function alv(cx,cy){var g=S('g',{});for(var i=0;i<7;i++)g.appendChild(S('circle',{cx:cx-60+i*20,cy:cy+(i%2?6:-6),r:8,fill:'none',stroke:'var(--viz-line)','stroke-width':1.5}));return g}
  var sv=svg(640,470,'Schemat serca i dwóch obiegów krwi',[defs,
    G('pl',[S('rect',{x:200,y:16,width:240,height:74,rx:16,fill:'var(--viz-bg2)',stroke:'var(--viz-line)','stroke-width':2}),T(320,36,'PŁUCA',{s:20,w:800}),T(320,60,'oddaje CO₂, bierze O₂',{s:16,w:700}),alv(320,74)]),
    G('ci',[S('rect',{x:200,y:390,width:240,height:68,rx:16,fill:'var(--viz-bg2)',stroke:'var(--viz-line)','stroke-width':2}),T(320,412,'NARZĄDY CIAŁA',{s:20,w:800}),T(320,438,'oddaje O₂, bierze CO₂',{s:16,w:700})]),
    vessel('tp','M190 300 H112 V58 H192',CO,'tętnice|płucne',56,166),
    vessel('zp','M448 58 H528 V205 H498',O2,'żyły|płucne',588,118),
    vessel('ao','M498 300 H560 V424 H448',O2,'aorta',604,362),
    vessel('zg','M192 424 H70 V205 H142',CO,'żyły główne',124,452),
    room('RA',150,168,160,74,CO,COb,'PRAWY','PRZEDSIONEK'),room('RV',150,256,160,92,CO,COb,'PRAWA','KOMORA'),
    room('LA',330,168,160,74,O2,O2b,'LEWY','PRZEDSIONEK'),S('g',{},[]),room('LV',330,256,168,96,O2,O2b,'LEWA KOMORA','(najgrubsza ściana)'),
    valve('zt',230,249,CO),valve('zd',410,249,O2),
    G('ws',[S('rect',{x:140,y:130,width:360,height:30,rx:15,fill:'var(--surface-soft)',stroke:'var(--viz-line)'}),T(320,145,'widok od przodu: prawa połowa serca po lewej',{s:15,w:800})])]);
  box.appendChild(sv);
  var show=BIO.fx.info(sv,info,M),i=-1,mode=null;
  function dim(set){[].forEach.call(sv.querySelectorAll('.kr-el'),function(g){var k=g.getAttribute('data-k');g.style.opacity=!set||set.indexOf(k)>=0||k==='ws'?1:.22})}
  function krok(){mode=null;dim(null);i=(i+1)%SEQ.length;var k=SEQ[i];show(k,sv.querySelector('[data-k="'+k+'"]'));info.innerHTML='<b>Krok '+(i+1)+' z '+SEQ.length+': '+M[k][0]+'</b>'+M[k][1]}
  function obieg(set,t,d){i=-1;mode=set;dim(set);info.className='bv-info';info.innerHTML='<b>'+t+'</b>'+d}
  tools.appendChild(btn('▶ krok',krok));
  tools.appendChild(btn('obieg mały (płucny)',function(){obieg(MALY,'Obieg mały (płucny)','prawa komora → tętnice płucne → naczynia włosowate płuc → żyły płucne → lewy przedsionek. Cel: <strong>wymiana gazowa</strong> — krew pozbywa się CO₂ i zabiera O₂.')}));
  tools.appendChild(btn('obieg duży (ustrojowy)',function(){obieg(DUZY,'Obieg duży (ustrojowy)','lewa komora → aorta → tętnice → naczynia włosowate narządów → żyły → żyły główne → prawy przedsionek. Cel: <strong>zaopatrzenie tkanek</strong> w O₂ i składniki odżywcze, odbiór CO₂ i zbędnych produktów.')}));
  tools.appendChild(btn('od początku',function(){i=-1;dim(null);info.className='bv-info';info.textContent='Kliknij element schematu albo przejdź drogę krwi przyciskiem „krok”.'}));
  if(o.start==='maly')tools.children[1].click();else if(o.start==='duzy')tools.children[2].click();BIO.fx.auto(el,krok,2000,{now:1})}});
})();
