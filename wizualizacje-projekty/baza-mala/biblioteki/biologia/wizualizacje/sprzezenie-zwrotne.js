/* viz: sprzezenie-zwrotne — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('sprzezenie-zwrotne',{opis:'Pętla regulacji: bodziec → receptor → ośrodek → efektor → odpowiedź; scenariusze temperatury, glukozy, wody (ujemne) i porodu (dodatnie); „krok” przechodzi pętlę, wskaźnik pokazuje parametr wobec normy',
mount:function(el,o){
  var SC={
   tg:{n:'temperatura ↑',p:'temperatura ciała',u:-1,k:['wysiłek, upał → temperatura ciała rośnie','termoreceptory w skórze i we krwi płynącej przez podwzgórze','ośrodek termoregulacji w podwzgórzu','naczynia skóry (rozszerzają się), gruczoły potowe (pot)','więcej ciepła oddane, pot paruje → temperatura spada do normy']},
   td:{n:'temperatura ↓',p:'temperatura ciała',u:-1,k:['zimno → temperatura ciała spada','termoreceptory w skórze i podwzgórzu','ośrodek termoregulacji w podwzgórzu','naczynia skóry (zwężają się), mięśnie szkieletowe (dreszcze), mięśnie przywłosowe („gęsia skórka”)','mniej ciepła ucieka, dreszcze wytwarzają ciepło → temperatura rośnie do normy']},
   gg:{n:'glukoza ↑',p:'stężenie glukozy we krwi',u:-1,k:['posiłek → glukoza we krwi rośnie','komórki trzustki wyczuwające glukozę','trzustka (komórki β wysp trzustkowych)','insulina → komórki ciała, wątroba i mięśnie','komórki pobierają glukozę, wątroba i mięśnie robią z niej glikogen → glukoza spada do normy']},
   ty:{n:'tyroksyna ↓ (oś tarczycy)',p:'stężenie tyroksyny we krwi',u:-1,k:['mało tyroksyny we krwi (np. zimno, szybsze zużycie)','neurony podwzgórza i komórki przysadki wyczuwające tyroksynę','podwzgórze (hormon uwalniający) → przysadka','TSH → tarczyca','tarczyca wydziela więcej tyroksyny; gdy jej stężenie wróci do normy, sama hamuje podwzgórze i przysadkę → mniej TSH']},
   ca:{n:'wapń ↓',p:'stężenie wapnia we krwi',u:-1,k:['mało wapnia we krwi','komórki przytarczyc wyczuwające wapń','przytarczyce','parathormon → kości, nerki (i jelito przez witaminę D)','wapń uwalniany z kości i zatrzymywany przez nerki → stężenie rośnie do normy (przy nadmiarze działa kalcytonina z tarczycy)']},
   gd:{n:'glukoza ↓',p:'stężenie glukozy we krwi',u:-1,k:['głód, długi wysiłek → glukoza we krwi spada','komórki trzustki wyczuwające glukozę','trzustka (komórki α wysp trzustkowych)','glukagon → wątroba','wątroba rozkłada glikogen i uwalnia glukozę → glukoza rośnie do normy']},
   wd:{n:'wody za mało',p:'stężenie substancji w osoczu',u:-1,k:['pocenie, brak picia → osocze bardziej stężone','osmoreceptory w podwzgórzu','podwzgórze (wytwarza ADH; ośrodek pragnienia)','ADH z tylnego płata przysadki → nerki; pragnienie → picie','nerki zwracają więcej wody do krwi, mało zagęszczonego moczu → stężenie osocza wraca do normy']},
   wg:{n:'wody za dużo',p:'stężenie substancji w osoczu',u:-1,k:['dużo wypitej wody → osocze rozcieńczone','osmoreceptory w podwzgórzu','podwzgórze','mniej ADH → nerki','nerki zwracają mniej wody, dużo rozcieńczonego moczu → stężenie osocza wraca do normy']},
   po:{n:'poród (dodatnie)',p:'siła skurczów macicy',u:1,k:['główka dziecka naciska na szyjkę macicy','receptory nacisku w szyjce macicy','podwzgórze i przysadka','oksytocyna → mięśnie macicy','silniejsze skurcze → większy nacisk → jeszcze więcej oksytocyny… aż do narodzin dziecka (koniec pętli)']}};
  var N=['bodziec','receptor','ośrodek','efektor','odpowiedź'],cur=o.start&&SC[o.start]?o.start:'tg',step=-1;
  var sg=H('div','bv-tools'),tl=H('div','bv-tools'),box=H('div'),info=H('div','bv-info');el.appendChild(sg);el.appendChild(tl);el.appendChild(box);el.appendChild(info);
  var P=[[120,20],[520,20],[540,140],[320,196],[100,140]];
  function draw(){var s=SC[cur];seg(sg,Object.keys(SC).map(function(k){return[k,SC[k].n]}),cur,function(k){cur=k;step=-1;draw()});
   clr(tl);tl.appendChild(btn('▶ krok',function(){step=(step+1)%6;draw()}));tl.appendChild(btn('od początku',function(){step=-1;draw()}));
   var ujem=s.u<0,col=ujem?'var(--c-basic)':'var(--c-error)';
   var sv=svg(640,330,'Pętla sprzężenia zwrotnego',[S('defs',{},[S('marker',{id:'sz-a',viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:14,markerHeight:14,markerUnits:'userSpaceOnUse',orient:'auto'},[S('path',{d:'M0 0L10 5L0 10z',fill:'var(--viz-line)'})])])]);
   for(var i=0;i<5;i++){var a=P[i],b=P[(i+1)%5],on=step>=0&&(i<step||step===5);
    var dx=b[0]-a[0],dy=b[1]-a[1],Lh=Math.hypot(dx,dy),sx=a[0]+dx*0.28,sy=a[1]+22+dy*0.28,ex=a[0]+dx*0.72,ey=a[1]+22+dy*0.72;sv.appendChild(S('line',{x1:sx,y1:sy,x2:ex,y2:ey,stroke:i===4?col:'var(--viz-line)','stroke-width':i===4?5:3,'stroke-dasharray':i===4?'8 6':null,'marker-end':'url(#sz-a)',opacity:on||step<0?1:.35}))}
   sv.appendChild(T(320,108,ujem?'−  ujemne: odpowiedź przeciwdziała zmianie':'+  dodatnie: odpowiedź nasila zmianę',{s:15,w:800,f:col}));
   N.forEach(function(n,i){var a=P[i],act=step===i||(step===5),past=step>i;var g=S('g',{opacity:step<0||act||past?1:.4},[S('rect',{x:a[0]-92,y:a[1],width:184,height:44,rx:14,fill:act?'var(--accent-soft)':'var(--viz-bg2)',stroke:act?'var(--accent)':'var(--viz-line)','stroke-width':act?3:1.5}),T(a[0],a[1]+23,(i+1)+'. '+n,{s:16,w:800})]);sv.appendChild(g)});
   // wskaźnik parametru
   var v=step<0?0.8:step<4?0.8:step===4?0.25:0.05;if(!ujem)v=step<0?0.3:Math.min(1,0.3+0.15*(step+1));
   sv.appendChild(S('rect',{x:120,y:262,width:400,height:14,rx:7,fill:'var(--viz-bg2)',stroke:'var(--viz-line)'}));
   sv.appendChild(S('line',{x1:320,y1:254,x2:320,y2:284,stroke:'var(--viz-ink)','stroke-width':2,'stroke-dasharray':'3 3'}));
   sv.appendChild(T(320,300,ujem?'norma':'',{s:13,w:700}));
   var sgn=ujem&&/↓|za dużo/.test(s.n)?-1:1;sv.appendChild(S('circle',{cx:320+sgn*v*190,cy:269,r:10,fill:col}));
   sv.appendChild(T(320,322,s.p,{s:14,w:700,f:'var(--viz-mut)'}));
   clr(box);box.appendChild(sv);
   info.className='bv-info';
   info.innerHTML=step<0?'<b>'+s.n+' — '+(ujem?'ujemne sprzężenie zwrotne':'dodatnie sprzężenie zwrotne')+'</b>Kliknij „krok”, aby przejść pętlę: '+N.join(' → ')+'.':
    step<5?'<b>'+(step+1)+'. '+N[step]+'</b>'+s.k[step]:'<b>Cała pętla</b>'+s.k.map(function(t,i){return '<strong>'+N[i]+':</strong> '+t}).join('<br>')+(ujem?'<br>Odpowiedź <strong>zmniejsza</strong> odchylenie — parametr wraca do normy.':'<br>Odpowiedź <strong>wzmacnia</strong> zmianę, aż proces się zakończy.')}
  BIO.fx.auto(el,function(){step=(step+1)%6;draw()},2200,{now:1});draw()}});
})();
