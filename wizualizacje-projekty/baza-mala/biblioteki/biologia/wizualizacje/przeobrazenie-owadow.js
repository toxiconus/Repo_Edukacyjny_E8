/* viz: przeobrazenie-owadow — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('przeobrazenie-owadow',{opis:'Przeobrażenie zupełne (motyl: jajo → gąsienica → poczwarka → motyl) i niezupełne (konik polny: jajo → larwa podobna do dorosłego → owad dorosły); klik = opis etapu; różnica: poczwarka',
mount:function(el,o){var pic=H('div'),out=H('div','bv-info');el.appendChild(pic);el.appendChild(out);
  var s=svg(440,262,'Przeobrażenie zupełne motyla i niezupełne konika polnego');
  function arrow(x1,y,x2){s.appendChild(S('line',{x1:x1,y1:y,x2:x2-6,y2:y,stroke:'#8c959f','stroke-width':2}));s.appendChild(S('path',{d:'M'+(x2-8)+' '+(y-4)+' L'+x2+' '+y+' L'+(x2-8)+' '+(y+4)+'z',fill:'#8c959f'}))}
  function g(k){var e=S('g',{'data-k':k});s.appendChild(e);return e}
  s.appendChild(T(8,16,'przeobrażenie zupełne (motyl)',{s:14,a:'start',w:800}));s.appendChild(T(8,146,'przeobrażenie niezupełne (konik polny)',{s:14,a:'start',w:800}));
  var y1=70,y2=200;
  // zupełne
  var a=g('jajo1');[[0,0],[9,3],[4,9]].forEach(function(p){a.appendChild(S('ellipse',{cx:46+p[0],cy:y1+p[1],rx:5,ry:6.5,fill:'#f6e7b0',stroke:'#c9a94a'}))});a.appendChild(T(50,y1+38,'jajo',{s:13}));
  arrow(72,y1,104);
  var b=g('gasienica');for(var i=0;i<7;i++)b.appendChild(S('circle',{cx:118+i*9,cy:y1+(i%2?2:-2),r:6.5,fill:'#6aa84f',stroke:'#3d6b2c'}));b.appendChild(S('circle',{cx:118+6*9+3,cy:y1-4,r:2,fill:'#1a2332'}));b.appendChild(T(146,y1+38,'larwa',{s:13}));
  arrow(184,y1,214);
  var c=g('poczwarka');c.appendChild(S('line',{x1:240,y1:y1-30,x2:240,y2:y1-20,stroke:'#8c959f'}));c.appendChild(S('path',{d:'M240 '+(y1-20)+' q14 10 8 32 q-8 14 -16 0 q-6 -22 8 -32z',fill:'#b7a36a',stroke:'#7a6a3a'}));c.appendChild(S('rect',{x:204,y:y1+28,width:74,height:20,rx:10,fill:'#fff4e5',stroke:'#e09b3d'}));c.appendChild(T(241,y1+38,'poczwarka',{s:11,w:800,f:'#b45f06'}));
  arrow(276,y1,306);
  var d=g('motyl');[[-1,1],[1,1]].forEach(function(q){d.appendChild(S('path',{d:'M352 '+y1+' q'+(q[0]*34)+' -34 '+(q[0]*36)+' -6 q'+(q[0]*-6)+' 14 '+(q[0]*-36)+' 6z',fill:'#e8833a',stroke:'#9a4c12'}));d.appendChild(S('path',{d:'M352 '+(y1+2)+' q'+(q[0]*26)+' 8 '+(q[0]*22)+' 24 q'+(q[0]*-12)+' 2 '+(q[0]*-22)+' -20z',fill:'#f2b46d',stroke:'#9a4c12'}))});d.appendChild(S('rect',{x:349,y:y1-14,width:6,height:34,rx:3,fill:'#3a2a1a'}));d.appendChild(T(352,y1+38,'owad dorosły',{s:13}));
  // niezupełne
  var e=g('jajo2');[[0,0],[8,2],[3,8],[11,9]].forEach(function(p){e.appendChild(S('ellipse',{cx:46+p[0],cy:y2-8+p[1],rx:3.5,ry:6,fill:'#e4d3a8',stroke:'#a88d4b'}))});e.appendChild(T(50,y2+30,'jajo',{s:13}));
  arrow(72,y2,128);
  function konik(gr,x,sk){gr.appendChild(S('ellipse',{cx:x,cy:y2,rx:26*sk,ry:8*sk,fill:'#7fb069',stroke:'#3d6b2c'}));gr.appendChild(S('circle',{cx:x+26*sk,cy:y2-3*sk,r:6*sk,fill:'#7fb069',stroke:'#3d6b2c'}));gr.appendChild(S('path',{d:'M'+(x-4*sk)+' '+(y2+2*sk)+' l-14 '+(-18*sk)+' l-10 '+(22*sk),fill:'none',stroke:'#3d6b2c','stroke-width':2.4}));gr.appendChild(S('line',{x1:x+28*sk,y1:y2-8*sk,x2:x+44*sk,y2:y2-22*sk,stroke:'#3d6b2c','stroke-width':1.4}))}
  var f=g('nimfa');konik(f,160,.7);f.appendChild(T(150,y2+30,'larwa',{s:13}));
  arrow(204,y2,268);
  var h=g('konik');konik(h,326,1);h.appendChild(S('path',{d:'M304 '+(y2-6)+' q20 -10 42 -2 q-20 6 -42 2z',fill:'#a8cf8e',stroke:'#3d6b2c',opacity:.9}));h.appendChild(T(330,y2+30,'owad dorosły',{s:13}));
  s.appendChild(S('rect',{x:198,y:y2+8,width:84,height:36,rx:7,fill:'#fff',stroke:'#c0392b','stroke-dasharray':'4 3'}));s.appendChild(T(240,y2+20,'brak',{s:12,f:'#c0392b'}));s.appendChild(T(240,y2+34,'poczwarki',{s:12,f:'#c0392b'}));
  pic.appendChild(s);
  BIO.fx.info(pic,out,{jajo1:['Jajo (motyl)',' Samica składa jaja na roślinie, którą będzie jadła larwa.'],
   gasienica:['Larwa — gąsienica',' Zupełnie niepodobna do dorosłego: nie ma skrzydeł, ma gryzący aparat gębowy, je liście i szybko rośnie, kilka razy linieje.'],
   poczwarka:['Poczwarka',' Etap spoczynku — nie je i prawie się nie rusza, ale w środku zachodzi całkowita przebudowa ciała larwy w owada dorosłego. Poczwarka występuje <strong>tylko</strong> w przeobrażeniu zupełnym (motyle, chrząszcze, muchy, pszczoły).'],
   motyl:['Owad dorosły (imago)',' Ma skrzydła i ssący aparat gębowy (pije nektar) — inny pokarm niż larwa, więc larwy i dorosłe nie konkurują o pokarm.'],
   jajo2:['Jajo (konik polny)',' Jaja składane do gleby.'],
   nimfa:['Larwa podobna do dorosłego',' Wygląda jak mały owad dorosły, ale nie ma skrzydeł (są tylko zawiązki); rośnie i linieje, z każdym linieniem coraz bardziej przypomina dorosłego. Nie ma poczwarki.'],
   konik:['Owad dorosły',' Ma w pełni rozwinięte skrzydła i jest zdolny do rozmnażania. Przeobrażenie niezupełne: konik polny, ważka, pluskwiaki.']});
  out.innerHTML='<b>Zupełne czy niezupełne?</b><span>Rozstrzyga <strong>poczwarka</strong>: jajo → larwa → <strong>poczwarka</strong> → owad dorosły to przeobrażenie zupełne; jajo → larwa podobna do dorosłego → owad dorosły (bez poczwarki) — niezupełne. Kliknij etap, aby zobaczyć opis.</span>'}});
})();
