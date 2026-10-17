/* viz: nefron — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"],seg=BIO.Lh["C.seg"];
BIO.define('nefron',{opis:'Schemat nefronu: tętniczka doprowadzająca, kłębuszek w torebce Bowmana, kanalik nerkowy (kręty, pętla nefronu), przewód zbiorczy, naczynia włosowate oplatające kanalik; wybór substancji (glukoza, aminokwasy, białka i krwinki, mocznik, sole, woda) animuje jej drogę — przefiltrowana czy nie, odzyskana do krwi czy w moczu; przełącznik ADH zmienia ilość i barwę moczu',
mount:function(el,o){
 var tl=H('div','bv-tools'),tl2=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Wybierz substancję, aby zobaczyć jej drogę w nefronie, albo kliknij element.');el.appendChild(tl);el.appendChild(tl2);el.appendChild(box);el.appendChild(info);
 var adh=1,cur=null,raf=0,red=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 var W=700,Hh=480,sv=svg(W,Hh,'Schemat nefronu',[]);
 function G(k,kids){return S('g',{'data-k':k},kids)}
 var KAN='M160 108 C180 80 200 136 220 108 C240 80 260 136 280 108 L300 108 L310 390 C315 415 345 415 350 390 L360 132 C380 104 400 160 420 132 C440 104 460 160 480 132 L540 132';
 sv.appendChild(G('kap',[S('path',{d:'M150 136 C165 178 200 182 240 182 L500 182 L500 440',fill:'none',stroke:'#b0508a','stroke-width':7,opacity:.75}),T(492,458,'do żyły nerkowej',{s:14,w:700,a:'end',f:'#7a2a5a'}),T(440,200,'naczynia włosowate',{s:14,w:700,f:'#7a2a5a'})]));
 sv.appendChild(G('tetn',[S('path',{d:'M14 146 L108 126',fill:'none',stroke:'#d2463c','stroke-width':8,'stroke-linecap':'round'}),T(14,170,'krew z tętnicy',{s:14,w:700,a:'start',f:'#a33'})]));
 sv.appendChild(G('torebka',[S('path',{d:'M160 96 C150 64 96 60 88 108 C82 156 140 168 162 128',fill:'none',stroke:'#8a7a40','stroke-width':6}),T(110,44,'torebka Bowmana',{s:14,w:700})]));
 sv.appendChild(G('klebek',[S('circle',{cx:126,cy:112,r:26,fill:'none',stroke:'transparent'})].concat([[118,104],[134,100],[140,116],[124,122],[112,116],[128,112]].map(function(p){return S('circle',{cx:p[0],cy:p[1],r:9,fill:'#d2463c',stroke:'#8a1a14','stroke-width':1.5})})).concat([T(20,96,'kłębuszek',{s:13,w:800,f:'#8a1a14',a:'start'})])));
 sv.appendChild(G('kanalik',[S('path',{d:KAN,fill:'none',stroke:'#a8892a','stroke-width':16,'stroke-linecap':'round','stroke-linejoin':'round'}),S('path',{d:KAN,fill:'none',stroke:'#f6e7a8','stroke-width':11,'stroke-linecap':'round','stroke-linejoin':'round'}),T(230,70,'kanalik nerkowy',{s:15,w:800,f:'#7a5f10'}),T(372,404,'pętla nefronu',{s:14,w:700,a:'start',f:'#7a5f10'})]));
 sv.appendChild(G('zbiorczy',[S('path',{d:'M540 70 L540 455',fill:'none',stroke:'#a8892a','stroke-width':20,'stroke-linecap':'round'}),S('path',{d:'M540 70 L540 455',fill:'none',stroke:'#f6e7a8','stroke-width':15,'stroke-linecap':'round'}),T(560,62,'przewód zbiorczy',{s:14,w:700,a:'start'}),T(560,470,'→ miedniczka',{s:14,w:700,a:'start'})]));
 var str=S('g',{});sv.appendChild(str);
 var mocz=S('g',{});sv.appendChild(mocz);
 var trasa=S('path',{d:'M0 0',fill:'none',stroke:'none'}),dot=S('circle',{r:10,stroke:'#fff','stroke-width':2.5,opacity:0});dot.style.pointerEvents='none';sv.appendChild(trasa);sv.appendChild(dot);
 box.appendChild(sv);
 var DO_KRWI_P='M14 146 L118 122 L160 108 L200 104 L230 108 L230 182 L500 182 L500 440',DO_MOCZU='M14 146 L118 122 L'+KAN.slice(1)+' L540 455';
 var R={glukoza:['Glukoza','#e08a1e',DO_KRWI_P,'<strong>Filtracja:</strong> mała cząsteczka — przechodzi z kłębuszka do torebki (jest w moczu pierwotnym). <strong>Wchłanianie zwrotne:</strong> w początkowym odcinku kanalika prawie cała wraca do krwi (transport aktywny). U zdrowej osoby w moczu ostatecznym glukozy nie ma; pojawia się, gdy jej stężenie we krwi jest tak wysokie, że kanaliki nie nadążają (np. cukrzyca).'],
  amino:['Aminokwasy','#3a9a4a',DO_KRWI_P,'Przefiltrowane do moczu pierwotnego i prawie całkowicie <strong>odzyskane</strong> w kanaliku — wracają do krwi.'],
  bialka:['Białka osocza i krwinki','#8a1a14','M14 146 L118 122 L148 134 L170 172 L240 182 L500 182 L500 440','<strong>Nie są filtrowane</strong> — są za duże, by przejść przez ścianę kłębuszka do torebki; odpływają z krwią. Białko lub krwinki w moczu to sygnał, że bariera filtracyjna jest uszkodzona (choroba nerek) — wymaga badania.'],
  mocznik:['Mocznik','#7e57c2',DO_MOCZU,'Produkt przemiany białek (powstaje w wątrobie z amoniaku). Przefiltrowany, tylko częściowo odzyskiwany — <strong>główny składnik moczu ostatecznego</strong> obok wody. W moczu jest go wielokrotnie więcej niż w osoczu: nerka go zagęszcza, odzyskując wodę.'],
  sole:['Sole mineralne (jony)','#2f9a9a','M14 146 L118 122 L160 108 L300 108 L310 390 C315 415 345 415 350 390 L360 132 L420 132 L420 182 L500 182 L500 440','Przefiltrowane i w większości <strong>odzyskane</strong> w różnych odcinkach kanalika; nerka odzyskuje ich tyle, ile organizm potrzebuje, a <strong>nadmiar</strong> zostaje w moczu — tak reguluje skład krwi.'],
  woda:['Woda','#3b8fd0',DO_MOCZU,'Filtruje się jej bardzo dużo (moczu pierwotnego ok. 150–180 l na dobę — orientacyjnie), a ok. <strong>99%</strong> wraca do krwi w kanaliku i przewodzie zbiorczym. Ile wróci w przewodzie zbiorczym, decyduje <strong>ADH</strong> — patrz przełącznik.']};
 function strzalki(){clr(str);[[200,118],[260,118],[318,250],[352,250],[440,142]].forEach(function(p){str.appendChild(S('path',{d:'M'+p[0]+' '+p[1]+' L'+p[0]+' 172 M'+(p[0]-6)+' 164 L'+p[0]+' 174 L'+(p[0]+6)+' 164',fill:'none',stroke:'#3b8fd0','stroke-width':3,opacity:p[1]===250?0:.9}))});
  [240,310,380].forEach(function(y){str.appendChild(S('path',{d:'M528 '+y+' L506 '+y+' M514 '+(y-6)+' L504 '+y+' L514 '+(y+6),fill:'none',stroke:'#3b8fd0','stroke-width':adh?4:1.5,opacity:adh?.95:.3}))});
  str.appendChild(T(196,240,'wchłanianie zwrotne',{s:14,w:700,f:'#2f6aa0'}));
  clr(mocz);var h=adh?40:150,col=adh?'#d39a1a':'#f3ea9c';mocz.appendChild(T(640,232,'mocz',{s:15,w:800}));mocz.appendChild(S('rect',{x:610,y:250,width:60,height:160,rx:8,fill:'none',stroke:'var(--viz-ink)','stroke-width':2}));
  mocz.appendChild(S('rect',{x:612,y:408-h,width:56,height:h,rx:6,fill:col}));mocz.appendChild(T(640,428,adh?'mało, ciemny':'dużo, jasny',{s:13,w:700}))}
 function rysujAdh(){seg(tl2,[[1,'dużo ADH (mało wody w organizmie)'],[0,'mało ADH (nadmiar wody)']],adh,function(k){adh=k;rysujAdh();strzalki();
   info.className='bv-info';info.innerHTML=adh?'<b>Dużo ADH</b>Przy odwodnieniu (upał, wysiłek, mało picia) przysadka wydziela więcej <strong>ADH</strong>. Przewody zbiorcze stają się przepuszczalne dla wody, więcej jej <strong>wraca do krwi</strong> → mocz <strong>mały i zagęszczony</strong> (ciemny).':'<b>Mało ADH</b>Gdy wypijesz dużo wody (albo po alkoholu, który hamuje ADH), wydzielanie ADH spada, ścianka przewodu zbiorczego słabo przepuszcza wodę → <strong>dużo rozcieńczonego</strong>, jasnego moczu.'})}
 function jedz(k){var r=R[k];cur=k;seg(tl,Object.keys(R).map(function(x){return[x,R[x][0]]}),k,jedz);cancelAnimationFrame(raf);trasa.setAttribute('d',r[2]);dot.setAttribute('fill',r[1]);dot.setAttribute('opacity',1);
  info.className='bv-info';info.innerHTML='<b>'+r[0]+'</b>'+r[3];var L=trasa.getTotalLength(),t0=null,D=3200;
  function f(ts){if(t0===null)t0=ts;var q=Math.min(1,(ts-t0)/D),p=trasa.getPointAtLength(L*q);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y);if(q<1)raf=requestAnimationFrame(f)}
  if(red){var p=trasa.getPointAtLength(L);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y)}else raf=requestAnimationFrame(f)}
 seg(tl,Object.keys(R).map(function(x){return[x,R[x][0]]}),null,jedz);rysujAdh();strzalki();var ak=Object.keys(R),ai=-1;BIO.fx.auto(el,function(){ai=(ai+1)%ak.length;if(ai===0){adh=1-adh;rysujAdh();strzalki()}jedz(ak[ai])},4200,{now:1});
 BIO.fx.info(sv,info,{tetn:['Tętniczka doprowadzająca','Krew z tętnicy nerkowej wpływa do kłębuszka pod dość wysokim ciśnieniem — to ono „wyciska” płyn do torebki. Przez nerki przepływa ok. 1 litra krwi na minutę (orientacyjnie).'],
  klebek:['Kłębuszek nerkowy','Kłębek naczyń włosowatych — tu zachodzi <strong>filtracja</strong>: woda i małe cząsteczki (glukoza, aminokwasy, sole, mocznik) przechodzą do torebki, a krwinki i duże białka zostają we krwi.'],
  torebka:['Torebka Bowmana','Dwuwarstwowa „czasza” obejmująca kłębuszek; zbiera przesącz — <strong>mocz pierwotny</strong>. Kłębuszek z torebką to <strong>ciałko nerkowe</strong> (w korze nerki).'],
  kanalik:['Kanalik nerkowy','Tu zachodzi <strong>wchłanianie zwrotne</strong> (glukoza, aminokwasy, większość wody i soli wracają do krwi) i <strong>wydzielanie kanalikowe</strong> (np. część leków, nadmiar jonów przechodzi z krwi do kanalika). Pętla nefronu (pętla Henlego) schodzi w rdzeń nerki i pomaga zagęszczać mocz.'],
  zbiorczy:['Przewód zbiorczy','Zbiera mocz z wielu nefronów i prowadzi go do miedniczki nerkowej. Tu działa <strong>ADH</strong>: decyduje, ile wody jeszcze wróci do krwi — powstaje <strong>mocz ostateczny</strong>.'],
  kap:['Naczynia włosowate wokół kanalika','Odbierają substancje odzyskane w wchłanianiu zwrotnym; oczyszczona krew odpływa żyłą nerkową.']})}});
})();
