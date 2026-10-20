/* viz: gruczoly-mapa — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"];
BIO.define('gruczoly-mapa',{opis:'Sylwetka człowieka z gruczołami dokrewnymi: podwzgórze, przysadka, szyszynka, tarczyca, przytarczyce, grasica, nadnercza, trzustka, jajniki albo jądra (przełącznik); kliknij gruczoł albo podpis — hormony, działanie, skutki niedoboru i nadmiaru; autoprzegląd gruczołów',
mount:function(el,o){var plec=o.plec||'k',tl=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Kliknij gruczoł albo jego nazwę.');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
 var M={podw:['Podwzgórze','Część <strong>międzymózgowia</strong> — łącznik układu nerwowego i dokrewnego. Wydziela hormony uwalniające i hamujące, które sterują <strong>przysadką</strong>; wytwarza też <strong>ADH</strong> (zatrzymywanie wody w nerkach) i <strong>oksytocynę</strong> (skurcze macicy, wypływ mleka), uwalniane przez tylny płat przysadki.'],
  przys:['Przysadka mózgowa','Gruczoł wielkości ziarna grochu pod mózgiem, „dyrygent” innych gruczołów. Płat przedni: <strong>hormon wzrostu</strong> (niedobór u dziecka — karłowatość przysadkowa, nadmiar — gigantyzm, u dorosłego — akromegalia), prolaktyna i <strong>hormony tropowe</strong>: TSH (→ tarczyca), ACTH (→ kora nadnerczy), FSH i LH (→ jajniki, jądra). Płat tylny uwalnia ADH i oksytocynę.'],
  szysz:['Szyszynka','W głębi mózgu. Wydziela <strong>melatoninę</strong> — w ciemności więcej, w świetle mniej; reguluje rytm snu i czuwania. Światło ekranu wieczorem hamuje jej wydzielanie.'],
  tarcz:['Tarczyca','Na szyi, przed tchawicą. <strong>Tyroksyna</strong> (zawiera <strong>jod</strong>) przyspiesza przemianę materii, u dzieci jest niezbędna do wzrostu i rozwoju mózgu. Niedoczynność: spowolnienie, senność, marznięcie, tycie; nadczynność: chudnięcie, nerwowość, kołatanie serca, wytrzeszcz. Niedobór jodu → <strong>wole</strong>. <strong>Kalcytonina</strong> (konkurs) obniża wapń we krwi.'],
  przyt:['Przytarczyce (konkurs)','Cztery małe gruczoły na tylnej powierzchni tarczycy. <strong>Parathormon</strong> podwyższa wapń we krwi (uwalnia go z kości) — antagonista kalcytoniny. Niedobór → <strong>tężyczka</strong> (bolesne skurcze mięśni).'],
  gras:['Grasica','Za mostkiem, duża u dzieci, po okresie dojrzewania zanika. Hormony grasicy (np. tymozyna) i jej środowisko pozwalają <strong>dojrzewać limfocytom T</strong> — łączy układ dokrewny z odpornościowym.'],
  nadn:['Nadnercza','„Czapeczki” na nerkach. <strong>Rdzeń</strong> — <strong>adrenalina</strong>: reakcja „walcz lub uciekaj” w kilka sekund (serce szybciej, oskrzela i źrenice szersze, więcej glukozy we krwi). <strong>Kora</strong> (konkurs) — <strong>kortyzol</strong> (stres długotrwały, podnosi glukozę, hamuje stany zapalne) i aldosteron (sód, woda, ciśnienie).'],
  trzus:['Trzustka (część dokrewna)','Gruczoł <strong>mieszany</strong>: sok trzustkowy płynie przewodem do dwunastnicy, a <strong>wyspy trzustkowe</strong> wydzielają do krwi <strong>insulinę</strong> (komórki β — obniża glukozę) i <strong>glukagon</strong> (komórki α — podwyższa glukozę). Brak insuliny lub słaba reakcja na nią → <strong>cukrzyca</strong>.'],
  jaj:['Jajniki','W miednicy. <strong>Estrogeny</strong> — rozwój żeńskich cech płciowych, cykl miesiączkowy; <strong>progesteron</strong> — przygotowanie błony śluzowej macicy i utrzymanie ciąży. Pracą jajników sterują FSH i LH z przysadki. Gruczoł mieszany — wytwarza też komórki jajowe.'],
  jad:['Jądra','W mosznie. <strong>Testosteron</strong> — rozwój męskich cech płciowych (głos, owłosienie, mięśnie), dojrzewanie plemników. Pracą jąder sterują FSH i LH z przysadki. Gruczoł mieszany — wytwarza też plemniki.']};
 var P={podw:[210,58],przys:[210,74],szysz:[226,48],tarcz:[210,136],przyt:[222,140],gras:[210,182],nadn:[178,262],trzus:[220,290],jaj:[186,372],jad:[198,452]},
  L={podw:[52,'podwzgórze'],przys:[88,'przysadka'],szysz:[24,'szyszynka'],tarcz:[124,'tarczyca'],przyt:[160,'przytarczyce'],gras:[196,'grasica'],nadn:[250,'nadnercza'],trzus:[296,'trzustka'],jaj:[372,'jajniki'],jad:[452,'jądra']};
 var kol={podw:'#7e57c2',przys:'#7e57c2',szysz:'#5a6abf',tarcz:'#e08a1e',przyt:'#c0392b',gras:'#2f9a9a',nadn:'#d35400',trzus:'#e6b800',jaj:'#d6456f',jad:'#3b6cc4'};
 var cur=null,keys;
 function draw(){seg(tl,[['k','ciało kobiety'],['m','ciało mężczyzny']],plec,function(k){plec=k;draw()});keys=Object.keys(P).filter(function(k){return plec==='k'?k!=='jad':k!=='jaj'});
  var W=640,Hh=560,sv=svg(W,Hh,'Rozmieszczenie gruczołów dokrewnych',[]);
  sv.appendChild(S('path',{d:'M210 10 C250 10 256 52 252 74 C248 98 232 108 226 112 L228 124 C262 130 292 140 298 170 L304 330 C306 380 290 400 272 410 L264 540 L226 540 L214 420 L206 420 L194 540 L156 540 L148 410 C130 400 114 380 116 330 L122 170 C128 140 158 130 192 124 L194 112 C188 108 172 98 168 74 C164 52 170 10 210 10 Z',fill:'var(--surface-soft)',stroke:'var(--viz-line)','stroke-width':2}));
  sv.appendChild(S('ellipse',{cx:182,cy:282,rx:12,ry:20,fill:'none',stroke:'var(--viz-line)','stroke-dasharray':'4 3'}));sv.appendChild(S('ellipse',{cx:240,cy:282,rx:12,ry:20,fill:'none',stroke:'var(--viz-line)','stroke-dasharray':'4 3'}));
  keys.forEach(function(k){var p=P[k],l=L[k],g=S('g',{'data-k':k});var r=k==='przyt'?5:k==='szysz'||k==='przys'||k==='podw'?7:10;
   var shp=k==='trzus'?S('ellipse',{cx:p[0],cy:p[1],rx:30,ry:9,fill:kol[k],stroke:'#fff','stroke-width':2,transform:'rotate(-12 '+p[0]+' '+p[1]+')'}):S('circle',{cx:p[0],cy:p[1],r:r,fill:kol[k],stroke:'#fff','stroke-width':2});
   g.appendChild(shp);if(k==='nadn')g.appendChild(S('circle',{cx:242,cy:262,r:10,fill:kol[k],stroke:'#fff','stroke-width':2}));
   if(k==='tarcz')g.appendChild(S('circle',{cx:196,cy:138,r:8,fill:kol[k],stroke:'#fff','stroke-width':2}));
   if(k==='jaj')g.appendChild(S('circle',{cx:234,cy:372,r:10,fill:kol[k],stroke:'#fff','stroke-width':2}));
   if(k==='jad')g.appendChild(S('circle',{cx:222,cy:452,r:10,fill:kol[k],stroke:'#fff','stroke-width':2}));
   g.appendChild(S('line',{x1:p[0]+(k==='trzus'?30:r),y1:p[1],x2:372,y2:l[0],stroke:kol[k],'stroke-width':1.5,'stroke-dasharray':'3 3'}));
   g.appendChild(T(380,l[0],l[1],{s:17,w:800,a:'start',f:kol[k]}));sv.appendChild(g)});
  clr(box);box.appendChild(sv);BIO.fx.info(sv,info,M,cur&&keys.indexOf(cur)>=0?cur:null)}
 draw();var ai=-1;BIO.fx.auto(el,function(){ai=(ai+1)%keys.length;cur=keys[ai];var g=el.querySelector('[data-k="'+cur+'"]');if(g)g.dispatchEvent(new MouseEvent('click',{bubbles:true}))},2600,{now:1})}});
})();
