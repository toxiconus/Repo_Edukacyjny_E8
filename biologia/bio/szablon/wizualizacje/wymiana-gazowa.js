/* viz: wymiana-gazowa — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"];
BIO.define('wymiana-gazowa',{opis:'Wymiana gazowa: tryb „w płucach” — pęcherzyk płucny nad naczyniem włosowatym, krew dopływa odtlenowana i odpływa utlenowana, tlen dyfunduje do krwi, CO₂ do pęcherzyka; tryb „w tkankach” — komórki nad naczyniem, kierunki odwrotne; słupki porównują ilość O₂ i CO₂ po obu stronach bariery; płynące erytrocyty',
mount:function(el,o){
 var tryb=o.tryb||'pl',tl=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Kliknij element albo przełącz miejsce wymiany.');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
 var raf=0,off=0,red=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 function draw(){cancelAnimationFrame(raf);seg(tl,[['pl','w płucach'],['tk','w tkankach']],tryb,function(k){tryb=k;draw()});
  var pl=tryb==='pl',W=700,Hh=400,sv=svg(W,Hh,pl?'Wymiana gazowa w pęcherzyku płucnym':'Wymiana gazowa w tkankach',[]);
  var c0=pl?'#3b6cc4':'#d2463c',c1=pl?'#d2463c':'#3b6cc4';
  sv.appendChild(S('defs',{},[S('linearGradient',{id:'wgGrad',x1:0,y1:0,x2:1,y2:0},[S('stop',{offset:'0','stop-color':c0}),S('stop',{offset:'1','stop-color':c1})])]));
  function G(k,kids){return S('g',{'data-k':k},kids)}
  if(pl)sv.appendChild(G('pech',[S('path',{d:'M60 268 C40 120 120 30 220 30 C320 30 400 120 380 268 Z',fill:'#dcefff',stroke:'#5a8bb8','stroke-width':3}),T(220,90,'pęcherzyk płucny',{s:18,w:800,f:'#2a5a8a'}),T(220,116,'powietrze: dużo O₂, mało CO₂',{s:15,w:700,f:'#2a5a8a'})]));
  else sv.appendChild(G('kom',[0,1,2].map(function(i){return S('rect',{x:50+i*112,y:60,width:104,height:206,rx:22,fill:'#f7d9e3',stroke:'#b0607a','stroke-width':2.5})}).concat([0,1,2].map(function(i){return S('ellipse',{cx:102+i*112,cy:150,rx:20,ry:9,fill:'#e89a5a',stroke:'#a85a2a'})}),[T(220,40,'komórki tkanki: mało O₂, dużo CO₂',{s:15,w:800,f:'#8a3050'}),T(220,200,'mitochondria',{s:14,w:700,f:'#8a4a20'})])));
  sv.appendChild(G('bariera',[S('rect',{x:40,y:268,width:360,height:10,fill:'#c9a0a0'}),T(410,273,'cienka bariera',{s:14,w:700,a:'start'})]));
  sv.appendChild(G('kap',[S('rect',{x:20,y:278,width:400,height:56,rx:28,fill:'url(#wgGrad)',opacity:.9}),T(30,362,pl?'krew dopływa odtlenowana':'krew dopływa utlenowana',{s:14,w:700,a:'start',f:c0}),T(410,362,pl?'odpływa utlenowana →':'odpływa odtlenowana →',{s:14,w:700,a:'end',f:c1})]));
  var ery=S('g',{});sv.appendChild(ery);
  var o2=pl?'M170 180 L170 300':'M150 300 L150 180',co2=pl?'M270 300 L270 180':'M290 180 L290 300';
  sv.appendChild(G('o2',[S('path',{d:o2,fill:'none',stroke:'#c0392b','stroke-width':6}),S('path',{d:pl?'M158 286 L170 304 L182 286':'M138 194 L150 176 L162 194',fill:'none',stroke:'#c0392b','stroke-width':6,'stroke-linejoin':'round'}),T(pl?148:128,pl?222:238,'O₂',{s:20,w:800,f:'#c0392b',a:'end'})]));
  sv.appendChild(G('co2',[S('path',{d:co2,fill:'none',stroke:'#555','stroke-width':6}),S('path',{d:pl?'M258 194 L270 176 L282 194':'M278 286 L290 304 L302 286',fill:'none',stroke:'#555','stroke-width':6,'stroke-linejoin':'round'}),T(pl?292:312,pl?222:238,'CO₂',{s:20,w:800,f:'#444',a:'start'})]));
  var bx=520,lab=pl?[['pęcherzyk',[1,.15]],['krew dopł.',[.4,.6]],['krew odpł.',[1,.15]]]:[['krew dopł.',[1,.15]],['komórki',[.2,.8]],['krew odpł.',[.4,.6]]];
  sv.appendChild(T(bx+80,24,'ile gazu (szkic)',{s:14,w:800}));
  lab.forEach(function(l,i){var y=60+i*100;sv.appendChild(T(bx,y,l[0],{s:14,w:700,a:'start'}));
   [['O₂','#c0392b',0],['CO₂','#666',1]].forEach(function(g){var yy=y+16+g[2]*24;sv.appendChild(T(bx,yy+8,g[0],{s:13,w:700,a:'start',f:g[1]}));sv.appendChild(S('rect',{x:bx+40,y:yy,width:130*l[1][g[2]],height:16,rx:5,fill:g[1],opacity:.85}))})});
  clr(box);box.appendChild(sv);
  BIO.fx.info(sv,info,{pech:['Pęcherzyk płucny','Kulisty, cienkościenny woreczek na końcu oskrzelika (w płucach jest ich kilkaset milionów — orientacyjnie). Powietrze w nim jest stale odnawiane przez wentylację, więc tlenu jest tu więcej, a CO₂ mniej niż we krwi dopływającej.'],
   kom:['Komórki tkanki','Komórki zużywają tlen w <strong>oddychaniu komórkowym</strong> (mitochondria) i wytwarzają CO₂ — dlatego tlenu jest w nich mniej, a CO₂ więcej niż we krwi tętniczej.'],
   bariera:['Bariera dyfuzyjna','Ściana pęcherzyka + ściana naczynia włosowatego: dwie warstwy płaskich komórek, łącznie ułamek mikrometra (orientacyjnie) — bardzo krótka droga dyfuzji. Powierzchnia pęcherzyków jest wilgotna — gazy najpierw rozpuszczają się w cienkiej warstwie płynu.'],
   kap:['Naczynie włosowate','Krwinki czerwone przeciskają się pojedynczo. W płucach krew <strong>przychodzi tętnicą płucną odtlenowana</strong> i odpływa żyłami płucnymi utlenowana; w tkankach — odwrotnie. Tlen wiąże głównie <strong>hemoglobina</strong> w erytrocytach; CO₂ jest przenoszony głównie w osoczu (w postaci jonów wodorowęglanowych), częściowo przez hemoglobinę.'],
   o2:['Tlen','Przechodzi <strong>dyfuzją</strong> z miejsca, gdzie jest go więcej, tam, gdzie jest go mniej: '+(pl?'z pęcherzyka do krwi.':'z krwi do komórek.')+' Komórka nie „wciąga” tlenu — wystarczy różnica stężeń, którą utrzymuje wentylacja i ciągłe zużycie tlenu w komórkach.'],
   co2:['Dwutlenek węgla','Też dyfunduje zgodnie z różnicą stężeń: '+(pl?'z krwi do pęcherzyka, a potem z wydychanym powietrzem na zewnątrz — płuca są więc także narządem wydalniczym.':'z komórek (gdzie powstaje) do krwi, która zaniesie go do płuc.')]},null);
  function film(){off=(off+1.2)%60;clr(ery);for(var x=-60+off;x<420;x+=60){ery.appendChild(S('ellipse',{cx:x,cy:306,rx:14,ry:9,fill:'#a8231c',opacity:.75}))}if(!red)raf=requestAnimationFrame(film)}film()}
 draw();BIO.fx.auto(el,function(){tryb=tryb==='pl'?'tk':'pl';draw()},6000)}});
})();
