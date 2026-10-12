/* viz: poziomy-dna — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var svg=BIO.Lh["A.svg"],S=BIO.Lh["A.S"],g=BIO.Lh["A.g"],T=BIO.Lh["A.T"],H=BIO.Lh["A.H"],fx=BIO.Lh["A.fx"];
BIO.define('poziomy-dna',{opis:'Chromosom → DNA na histonach → odcinek DNA z genem, regionem regulatorowym i niekodującym (kliknij)',
mount:function(el){
  var s1=svg(200,150,'Chromosom',[S('g',{'data-k':'chr'},[g.chromosome(100,70,112)]),S('rect',{x:120,y:26,width:34,height:18,rx:4,fill:'none',stroke:'var(--accent)','stroke-width':2,'stroke-dasharray':'4 3'}),T(100,140,'chromosom',{s:12,w:800})]);
  var nuc=[];for(var i=0;i<4;i++){var x=30+i*46;nuc.push(S('g',{'data-k':'his'},[S('circle',{cx:x,cy:70,r:15,fill:'var(--phos-bg)',stroke:'var(--phos)','stroke-width':2}),
    S('path',{d:'M'+(x-17)+' 66q17 -16 34 0q-17 16 -34 0',fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2})]))}
  var link='M0 70';for(i=0;i<4;i++){var xx=30+i*46;link+=' L'+(xx-17)+' 66 M'+(xx+17)+' 66'}link+=' L200 70';
  var s2=svg(200,150,'DNA nawinięte na histony',[S('path',{d:link,fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2})].concat(nuc).concat([T(100,140,'DNA + histony',{s:12,w:800})]));
  var segs=[['niek',8,46,'var(--viz-bg2)','var(--viz-line)'],['reg',46,80,'var(--phos-bg)','var(--phos)'],['gen',80,152,'var(--accent-soft)','var(--accent)'],['niek',152,192,'var(--viz-bg2)','var(--viz-line)']];
  var k3=[S('line',{x1:8,y1:52,x2:192,y2:52,stroke:'var(--strand1)','stroke-width':3}),S('line',{x1:8,y1:88,x2:192,y2:88,stroke:'var(--strand2)','stroke-width':3})];
  for(i=0;i<16;i++)k3.push(S('line',{x1:14+i*11.5,y1:54,x2:14+i*11.5,y2:86,stroke:'var(--hbond)','stroke-width':1.4}));
  segs.forEach(function(sg){k3.push(S('g',{'data-k':sg[0]},[S('rect',{x:sg[1],y:44,width:sg[2]-sg[1],height:52,rx:5,fill:sg[3],stroke:sg[4],'stroke-width':2,opacity:0.85})]))});
  k3.push(T(116,70,'gen',{s:13,w:800,f:'var(--accent)'}));k3.push(T(63,108,'regulator',{s:9.5,w:700,f:'var(--phos)'}));k3.push(T(27,34,'niekod.',{s:9.5,w:600,f:'var(--viz-mut)'}));
  k3.push(T(100,140,'odcinek DNA',{s:12,w:800}));
  var s3=svg(200,150,'Odcinek DNA z genem',k3);
  var c=H('div','bv-chain v');[s1,s2,s3].forEach(function(s,i){if(i)c.appendChild(H('span','bv-arrow','→'));var d=H('div','bv-node');d.appendChild(s);c.appendChild(d)});
  el.appendChild(c);var box=fx.infoBox();el.appendChild(box);
  fx.info(c,box,{
   chr:['Chromosom','Struktura zbudowana z jednej długiej cząsteczki DNA związanej z białkami. To nie „pudełko z genami”, tylko zwinięta cząsteczka DNA.'],
   his:['Histony','Białka, na które nawija się DNA (jak nić na szpulki). Dzięki nim ok. 2 m DNA mieści się w jądrze (szczegóły: L012).'],
   gen:['Gen','Odcinek DNA z informacją o produkcie — białku albo funkcjonalnym RNA.'],
   reg:['Region regulatorowy','Fragment DNA, który wpływa na to, kiedy, gdzie i jak intensywnie gen jest odczytywany.'],
   niek:['DNA niekodujące','Fragmenty bez przepisu na białko — część ma funkcje regulacyjne lub strukturalne, część to sekwencje powtarzalne. „DNA = zbiór genów” to uproszczenie.']},'gen')}});
})();
