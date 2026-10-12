/* viz: przeobrazenie-plaza — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],S=BIO.Lh["C.S"],svg=BIO.Lh["C.svg"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"];
BIO.define('przeobrazenie-plaza',{opis:'Rozwój złożony żaby: skrzek → kijanka (skrzela zewnętrzne) → kijanka z kończynami → młoda żaba (zanik ogona) → żaba; suwak etapów, oddychanie i środowisko na każdym etapie',
mount:function(el,o){var E=[['skrzek','jaja w galaretowatej osłonce, w wodzie','—','woda'],['kijanka','ogon, skrzela zewnętrzne, odżywia się roślinami (glonami)','skrzela','woda'],['kijanka z kończynami','najpierw tylne, potem przednie kończyny; skrzela wewnętrzne, rozwijają się płuca','skrzela → płuca','woda'],['młoda żaba','zanika ogon, cztery kończyny, wychodzi na ląd','płuca + skóra','woda i ląd'],['żaba (dorosła)','drapieżnik (owady); rozmnaża się w wodzie — zapłodnienie zewnętrzne','płuca + skóra','ląd i woda']];
  var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=4;rng.value=o.etap||1;rng.setAttribute('aria-label','Etap rozwoju');rng.style.flex='1 1 160px';
  tools.appendChild(H('span','bv-score','etap:'));tools.appendChild(rng);var pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  function zaba(e,x,y,k){var G=S('g'),c='#4f8a3c',d='#2f5e22';
   if(e===0){for(var i=0;i<9;i++){var a=i*0.7,r=8+i*2.2;G.appendChild(S('circle',{cx:x+r*Math.cos(a),cy:y+r*Math.sin(a),r:7,fill:'#e7f1f7',stroke:'#9bb7c7'}));G.appendChild(S('circle',{cx:x+r*Math.cos(a),cy:y+r*Math.sin(a),r:2.6,fill:'#1a2332'}))}return G}
   var ogon=e<=2?1:e===3?.4:0,body=e>=3?[26,18]:[16,12];
   if(ogon)G.appendChild(S('path',{d:'M'+(x-body[0]+4)+' '+y+' q-'+(30*ogon)+' -14 -'+(46*ogon)+' 0 q'+(16*ogon)+' 14 '+(46*ogon)+' 0z',fill:c,opacity:.85}));
   if(e>=2){G.appendChild(S('path',{d:'M'+(x-8)+' '+(y+10)+' l-12 14 l-8 0',fill:'none',stroke:d,'stroke-width':3,'stroke-linecap':'round'}))}
   if(e>=3){G.appendChild(S('path',{d:'M'+(x+12)+' '+(y+10)+' l6 12 l6 0',fill:'none',stroke:d,'stroke-width':3,'stroke-linecap':'round'}))}
   G.appendChild(S('ellipse',{cx:x,cy:y,rx:body[0],ry:body[1],fill:c}));
   G.appendChild(S('circle',{cx:x+body[0]*.5,cy:y-body[1]*.55,r:3.4,fill:'#fff',stroke:d}));G.appendChild(S('circle',{cx:x+body[0]*.5,cy:y-body[1]*.55,r:1.6,fill:'#1a2332'}));
   if(e===1){[-1,1].forEach(function(z){G.appendChild(S('path',{d:'M'+(x+2)+' '+(y+z*10)+' q4 '+(z*8)+' 10 '+(z*6),fill:'none',stroke:'#c0392b','stroke-width':2}))})}
   return G}
  function draw(){var e=+rng.value,s=svg(420,200,'Przeobrażenie żaby, etap: '+E[e][0]);
   s.appendChild(S('rect',{x:0,y:0,width:420,height:200,fill:'#f1f7fb'}));
   s.appendChild(S('path',{d:'M0 60 Q105 52 210 60 T420 60 L420 200 L0 200z',fill:'#d6ebf6'}));
   s.appendChild(S('path',{d:'M0 60 Q105 52 210 60 T420 60',fill:'none',stroke:'#7fb6d6','stroke-width':2}));if(e>=3)s.appendChild(S('path',{d:'M0 200 L0 78 Q50 52 120 56 Q185 60 215 92 Q238 130 246 200z',fill:'#cfe3b8',stroke:'#8fb36a','stroke-width':2}));s.appendChild(T(410,48,'powierzchnia wody',{s:10,a:'end',f:'#4b86a8'}));
   E.forEach(function(q,i){var cx=44+i*83,on=i===e;s.appendChild(S('circle',{cx:cx,cy:182,r:on?9:6,fill:on?'var(--accent)':'#c9d6dd'}));if(i<4)s.appendChild(S('line',{x1:cx+10,y1:182,x2:cx+73,y2:182,stroke:'#c9d6dd','stroke-width':2}))});
   s.appendChild(zaba(e,e>=3?112:210,e>=3?34:118,1));
   s.appendChild(T(e>=3?330:210,24,E[e][0],{s:16,w:800}));clr(pic);pic.appendChild(s);
   out.innerHTML='<b>'+(e+1)+'. '+E[e][0]+'</b><span>'+E[e][1]+'.</span><span>Oddychanie: <strong>'+E[e][2]+'</strong> · środowisko: <strong>'+E[e][3]+'</strong></span>'+(e===4?'<span>To <strong>rozwój złożony (z przeobrażeniem)</strong>: larwa (kijanka) różni się od dorosłej żaby budową, oddychaniem, pokarmem i środowiskiem.</span>':'')}
  rng.oninput=draw;draw()}});
})();
