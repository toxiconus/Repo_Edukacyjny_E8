/* viz: oko-akomodacja — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('oko-akomodacja',{opis:'Przekrój gałki ocznej: rogówka, tęczówka ze źrenicą, soczewka z mięśniem rzęskowym, ciało szkliste, twardówka, naczyniówka, siatkówka z plamką żółtą i plamką ślepą, nerw wzrokowy; tryby: budowa (klik = opis), akomodacja (przedmiot blisko / daleko — soczewka grubieje lub się spłaszcza, promienie skupiają się na siatkówce), wady wzroku (krótkowzroczność — ognisko przed siatkówką, dalekowzroczność — za nią; włączenie okularów koryguje)',
mount:function(el,o){
 var tryb=o.tryb||'budowa',odl='daleko',wada='krotko',okul=false,tl=H('div','bv-tools'),tl2=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Kliknij część oka albo wybierz tryb.');el.appendChild(tl);el.appendChild(tl2);el.appendChild(box);el.appendChild(info);
 var M={rogowka:['Rogówka','Przezroczysta, wypukła przednia część ściany oka — <strong>najsilniej załamuje światło</strong> i chroni oko. Nie ma naczyń krwionośnych.'],
  twardowka:['Twardówka','Biała, mocna zewnętrzna warstwa gałki ocznej („białko oka”) — chroni i nadaje kształt; z przodu przechodzi w rogówkę.'],
  naczyniowka:['Naczyniówka','Środkowa warstwa z naczyniami krwionośnymi i ciemnym barwnikiem — odżywia oko i pochłania światło, ograniczając jego rozpraszanie (jak czarne wnętrze aparatu).'],
  teczowka:['Tęczówka i źrenica','Tęczówka (barwna część oka) ma mięśnie, które zmieniają średnicę <strong>źrenicy</strong> — otworu wpuszczającego światło. W jasnym świetle źrenica się zwęża, w ciemności rozszerza (odruch źreniczny).'],
  soczewka:['Soczewka','Przezroczysta, elastyczna, dwuwypukła — <strong>skupia promienie</strong> na siatkówce. Zmienia kształt przy <strong>akomodacji</strong>: bardziej wypukła do patrzenia z bliska, bardziej płaska — w dal.'],
  rzeskowy:['Mięsień rzęskowy','Okrężny mięsień wokół soczewki połączony z nią włóknami. <strong>Skurcz</strong> → włókna się luzują → soczewka sama się uwypukla (patrzenie z bliska). <strong>Rozkurcz</strong> → włókna naciągają soczewkę → spłaszcza się (w dal).'],
  szkliste:['Ciało szkliste','Przezroczysta galaretka wypełniająca wnętrze oka — utrzymuje kształt gałki i przepuszcza światło do siatkówki.'],
  siatkowka:['Siatkówka','Wewnętrzna warstwa z <strong>fotoreceptorami</strong>: <strong>pręciki</strong> (czułe na słabe światło, widzenie czarno-białe, liczne na obwodzie) i <strong>czopki</strong> (barwy, ostrość, dobre oświetlenie). Tu powstaje obraz — <strong>rzeczywisty, pomniejszony i odwrócony</strong>.'],
  plamka:['Plamka żółta','Miejsce <strong>najostrzejszego widzenia</strong> — najwięcej czopków; tam kierujemy obraz, gdy patrzymy prosto na przedmiot.'],
  slepa:['Plamka ślepa','Miejsce, w którym nerw wzrokowy opuszcza oko — <strong>brak fotoreceptorów</strong>, obraz padający tutaj nie jest odbierany (mózg „domalowuje” lukę).'],
  nerw:['Nerw wzrokowy','Przewodzi impulsy z siatkówki do <strong>ośrodka wzroku w płacie potylicznym kory mózgu</strong>, gdzie powstaje wrażenie widzenia i obraz jest „prostowany”.']};
 function draw(){seg(tl,[['budowa','budowa oka'],['akom','akomodacja'],['wady','wady wzroku']],tryb,function(k){tryb=k;draw()});clr(tl2);
  if(tryb==='akom')seg(tl2,[['blisko','przedmiot blisko'],['daleko','przedmiot daleko']],odl,function(k){odl=k;draw()});
  if(tryb==='wady'){seg(tl2,[['krotko','krótkowzroczność'],['daleko','dalekowzroczność']],wada,function(k){wada=k;draw()});var b=btn((okul?'✔ ':'')+'okulary',function(){okul=!okul;draw()});if(okul)b.classList.add('on');tl2.appendChild(b)}
  var W=700,Hh=380,cx=360,cy=190,R=140,sv=svg(W,Hh,'Przekrój oka',[]);function G(k,kids){return S('g',{'data-k':k},kids)}
  var ret=cx+R-10;
  sv.appendChild(G('twardowka',[S('path',{d:'M'+(cx-118)+' '+(cy-76)+' A'+R+' '+R+' 0 1 1 '+(cx-118)+' '+(cy+76),fill:'#f7f7f2',stroke:'#9aa0a6','stroke-width':8})]));
  sv.appendChild(G('naczyniowka',[S('path',{d:'M'+(cx-108)+' '+(cy-80)+' A'+(R-8)+' '+(R-8)+' 0 1 1 '+(cx-108)+' '+(cy+80),fill:'none',stroke:'#7a2a2a','stroke-width':5})]));
  sv.appendChild(G('siatkowka',[S('path',{d:'M'+(cx-96)+' '+(cy-88)+' A'+(R-13)+' '+(R-13)+' 0 1 1 '+(cx-96)+' '+(cy+88),fill:'none',stroke:'#e89a5a','stroke-width':5})]));
  sv.appendChild(G('szkliste',[S('circle',{cx:cx+10,cy:cy,r:R-22,fill:'#eef6fb',opacity:.85}),T(cx+30,cy+60,'ciało szkliste',{s:14,w:700,f:'#4a7a9a'})]));
  sv.appendChild(G('rogowka',[S('path',{d:'M'+(cx-118)+' '+(cy-76)+' C'+(cx-175)+' '+(cy-50)+' '+(cx-175)+' '+(cy+50)+' '+(cx-118)+' '+(cy+76),fill:'#e6f2fb',stroke:'#5a9bd0','stroke-width':4})]));
  var gr=tryb==='akom'?(odl==='blisko'?22:10):tryb==='wady'?14:15;
  sv.appendChild(G('teczowka',[S('rect',{x:cx-128,y:cy-72,width:9,height:44,rx:3,fill:'#5a7a3a'}),S('rect',{x:cx-128,y:cy+28,width:9,height:44,rx:3,fill:'#5a7a3a'})]));
  sv.appendChild(G('rzeskowy',[S('ellipse',{cx:cx-104,cy:cy-62,rx:9,ry:6,fill:'#c0392b'}),S('ellipse',{cx:cx-104,cy:cy+62,rx:9,ry:6,fill:'#c0392b'}),S('line',{x1:cx-104,y1:cy-56,x2:cx-104,y2:cy-40,stroke:'#999','stroke-width':1.5}),S('line',{x1:cx-104,y1:cy+56,x2:cx-104,y2:cy+40,stroke:'#999','stroke-width':1.5})]));
  sv.appendChild(G('soczewka',[S('ellipse',{cx:cx-104,cy:cy,rx:gr,ry:40,fill:'#cfe8f7',stroke:'#3a7ab0','stroke-width':2.5})]));
  sv.appendChild(G('plamka',[S('circle',{cx:ret+2,cy:cy,r:7,fill:'#f1c40f',stroke:'#a8892a'})]));
  sv.appendChild(G('slepa',[S('circle',{cx:ret-6,cy:cy+44,r:7,fill:'#333'})]));
  sv.appendChild(G('nerw',[S('path',{d:'M'+(ret-4)+' '+(cy+44)+' C'+(ret+40)+' '+(cy+52)+' '+(ret+70)+' '+(cy+60)+' '+(W-20)+' '+(cy+70),fill:'none',stroke:'#e2c25a','stroke-width':16,'stroke-linecap':'round'}),T(W-24,cy+96,'nerw wzrokowy',{s:14,w:700,a:'end'})]));
  if(tryb==='budowa'){[['rogówka',cx-170,cy-90,'end'],['tęczówka',cx-140,cy-104,'middle'],['soczewka',cx-100,cy-104,'start'],['siatkówka',cx+80,cy-132,'start'],['naczyniówka',cx+120,cy-110,'start'],['twardówka',cx+150,cy-88,'start'],['plamka żółta',ret+14,cy-10,'start'],['plamka ślepa',ret+10,cy+30,'start'],['mięsień rzęskowy',cx-96,cy+106,'start']].forEach(function(l){sv.appendChild(T(l[1],l[2],l[0],{s:14,w:700,a:l[3]}))});sv.appendChild(T(cx-150,cy+4,'źrenica',{s:12,w:700,a:'end',f:'var(--viz-mut)'}))}
  else{var lx=cx-104,F,src,uw='';
   if(tryb==='akom'){F=ret;src=odl==='blisko'?[60,cy]:null;uw=odl==='blisko'?'<b>Przedmiot blisko</b><strong>Mięsień rzęskowy kurczy się</strong>, soczewka uwypukla się i silniej załamuje światło — promienie z bliskiego przedmiotu (rozbieżne) skupiają się dokładnie na siatkówce.':'<b>Przedmiot daleko</b><strong>Mięsień rzęskowy rozluźnia się</strong>, soczewka spłaszcza się i słabiej załamuje — prawie równoległe promienie z daleka skupiają się na siatkówce. Patrzenie w dal męczy oczy najmniej.'}
   else{if(wada==='krotko'){src=null;F=okul?ret:ret-70;uw=okul?'<b>Krótkowzroczność skorygowana</b>Soczewka <strong>rozpraszająca (wklęsła)</strong> przed okiem lekko rozprasza promienie — ognisko przesuwa się na siatkówkę. Obraz dalekiego przedmiotu jest ostry.':'<b>Krótkowzroczność</b>Gałka oczna jest zbyt długa (lub układ optyczny za silny): promienie z <strong>dalekiego</strong> przedmiotu skupiają się <strong>przed siatkówką</strong> — na siatkówce plama, obraz rozmyty. Z bliska widać dobrze. Korekcja: soczewki <strong>rozpraszające (wklęsłe)</strong>.'}
    else{src=[60,cy];F=okul?ret:ret+70;uw=okul?'<b>Dalekowzroczność skorygowana</b>Soczewka <strong>skupiająca (wypukła)</strong> wstępnie zbiera promienie — ognisko przesuwa się na siatkówkę. Bliski przedmiot jest ostry.':'<b>Dalekowzroczność</b>Gałka oczna jest zbyt krótka (lub soczewka za słaba): promienie z <strong>bliskiego</strong> przedmiotu skupiałyby się <strong>za siatkówką</strong> — obraz rozmyty. Korekcja: soczewki <strong>skupiające (wypukłe)</strong>. Podobnie z wiekiem (starczowzroczność) soczewka traci elastyczność.'}
    if(okul){var ox=118;sv.appendChild(S('path',{d:wada==='krotko'?'M'+(ox-12)+' '+(cy-60)+' L'+(ox+12)+' '+(cy-60)+' Q'+(ox+2)+' '+cy+' '+(ox+12)+' '+(cy+60)+' L'+(ox-12)+' '+(cy+60)+' Q'+(ox-2)+' '+cy+' '+(ox-12)+' '+(cy-60)+' Z':'M'+ox+' '+(cy-60)+' Q'+(ox+22)+' '+cy+' '+ox+' '+(cy+60)+' Q'+(ox-22)+' '+cy+' '+ox+' '+(cy-60)+' Z',fill:'#d8ecfa',stroke:'#3a7ab0','stroke-width':2.5}));sv.appendChild(T(ox,cy+80,'okulary',{s:13,w:700}))}}
   [-30,0,30].forEach(function(dy){var y0=cy+dy,a=src?'M'+src[0]+' '+src[1]+' L'+lx+' '+y0:'M30 '+y0+' L'+lx+' '+y0,ex=ret,ey;
    var k=(cy-y0)/(F-lx);ey=y0+k*(ex-lx);sv.appendChild(S('path',{d:a+' L'+ex+' '+ey,fill:'none',stroke:'#e67e22','stroke-width':2.5,opacity:.95}))});
   if(src)sv.appendChild(S('circle',{cx:src[0],cy:src[1],r:7,fill:'#e67e22'}));else sv.appendChild(T(40,cy-50,'z daleka',{s:13,w:700,a:'start',f:'#b9550a'}));
   sv.appendChild(S('circle',{cx:Math.min(F,ret+60),cy:cy,r:5,fill:F===ret?'#1f8a3a':'#c0392b'}));
   var bl=Math.abs(F-ret)*30/(F-lx);sv.appendChild(S('ellipse',{cx:ret,cy:cy,rx:4,ry:Math.max(4,bl),fill:F===ret?'#1f8a3a':'#c0392b',opacity:.6}));
   sv.appendChild(T(ret-30,cy-150,F===ret?'obraz ostry na siatkówce':'obraz nieostry',{s:15,w:800,a:'middle',f:F===ret?'#1f6a3a':'#a33'}))}
  clr(box);box.appendChild(sv);BIO.fx.info(sv,info,M);if(tryb!=='budowa'){info.className='bv-info';info.innerHTML=uw}}
 draw();var TOUR=[['akom','daleko',null,0],['akom','blisko',null,0],['wady',null,'krotko',0],['wady',null,'krotko',1],['wady',null,'daleko',0],['wady',null,'daleko',1]],ti=-1;
 BIO.fx.auto(el,function(){ti=(ti+1)%TOUR.length;var q=TOUR[ti];tryb=q[0];if(q[1])odl=q[1];if(q[2])wada=q[2];okul=!!q[3];draw()},3200,{now:1})}});
})();
