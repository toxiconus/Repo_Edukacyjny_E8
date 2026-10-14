/* viz: pary-zasad — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"],pur=BIO.Lh["A.pur"],S=BIO.Lh["A.S"],g=BIO.Lh["A.g"],HB=BIO.Lh["A.HB"],T=BIO.Lh["A.T"],svg=BIO.Lh["A.svg"],btn=BIO.Lh["A.btn"],fx=BIO.Lh["A.fx"];
var PARY=[['A','T','Para A–T',true,'Puryna + pirymidyna: szerokość pasuje do szkieletu. Układ grup pozwala na 2 wiązania wodorowe.'],
 ['G','C','Para G–C',true,'Puryna + pirymidyna: ta sama szerokość co A–T. Tu powstają 3 wiązania wodorowe — para jest trwalsza.'],
 ['A','G','A–G (błąd)',false,'Dwie puryny: para jest za szeroka i nie mieści się między nićmi.'],
 ['C','T','C–T (błąd)',false,'Dwie pirymidyny: para jest za wąska — zasady nie sięgają do siebie.'],
 ['A','C','A–C (błąd)',false,'Szerokość pasuje (puryna + pirymidyna), ale grupy chemiczne nie tworzą prawidłowych wiązań wodorowych. Szerokość to nie wszystko.']];
BIO.define('pary-zasad',{opis:'Pary komplementarne A–T, G–C i błędne pary (A–G, C–T, A–C) — szerokość + wiązania',
mount:function(el,o){var tools=H('div','bv-tools'),holder=H('div'),box=H('div','bv-info');
  function draw(i){var p=PARY[i],L=40,R=280,r=22,a=p[0],b=p[1];
    var wa=pur(a)?3.27*r:1.73*r,wb=pur(b)?3.27*r:1.73*r,tot=5*r+18,x0=160-tot/2,gap=tot-wa-wb,ca=x0+wa-0.866*r,cb=x0+wa+gap+0.866*r;
    var kids=[S('rect',{x:L-14,y:20,width:14,height:120,rx:5,fill:'var(--sugar-bg)',stroke:'var(--sugar)','stroke-width':2}),S('rect',{x:R,y:20,width:14,height:120,rx:5,fill:'var(--sugar-bg)',stroke:'var(--sugar)','stroke-width':2}),
      S('line',{x1:L,y1:80,x2:x0,y2:80,stroke:'var(--viz-mut)','stroke-width':2.5}),S('line',{x1:x0+tot,y1:80,x2:R,y2:80,stroke:'var(--viz-mut)','stroke-width':2.5}),
      g.ring(a,ca,80,r,1),g.ring(b,cb,80,r,-1)];
    if(p[3])kids.push(g.hbonds(x0+wa+1,x0+wa+gap-1,80,HB[a],7));
    else if(a==='A'&&b==='C'){kids.push(T(x0+wa+gap/2,80,'✕',{s:16,w:800,f:'var(--c-error)'}))}
    var ok=p[3],w=Math.round(tot);
    kids.push(S('line',{x1:L,y1:150,x2:R,y2:150,stroke:'var(--viz-line)','stroke-width':1.5,'stroke-dasharray':'4 4'}));
    kids.push(T(160,166,ok||(a==='A'&&b==='C')?'szerokość pasuje do odstępu między nićmi':(gap<0?'za szeroka — nie mieści się':'za wąska — zasady się nie stykają'),{s:11.5,w:700,f:ok?'var(--c-basic)':'var(--c-error)'}));
    kids.push(T(160,10,p[2]+(ok?' · '+HB[a]+' wiązania wodorowe':''),{s:13,w:800,f:ok?'var(--viz-ink)':'var(--c-error)'}));
    holder.innerHTML='';holder.appendChild(svg(320,176,p[2],kids));box.className='bv-info '+(ok?'ok':'bad');box.innerHTML='<b>'+p[2]+'</b>'+p[4]}
  var bs=PARY.map(function(p,i){return btn(p[0]+'–'+p[1],function(){fx.toggle(bs,i);draw(i)})});bs.forEach(function(b){tools.appendChild(b)});
  el.appendChild(tools);el.appendChild(holder);el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span>puryny (2 pierścienie): <b style="color:var(--nt-A)">A</b>, <b style="color:var(--nt-G)">G</b></span><span>pirymidyny (1 pierścień): <b style="color:var(--nt-T)">T</b>, <b style="color:var(--nt-C)">C</b></span><span>- - - wiązanie wodorowe</span>'));
  fx.toggle(bs,0);draw(0)}});
})();
