/* viz: energia-glukozy — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],svg=BIO.Lh["C.svg"],T=BIO.Lh["C.T"],S=BIO.Lh["C.S"],clr=BIO.Lh["C.clr"];
BIO.define('energia-glukozy',{opis:'Oddychanie tlenowe vs fermentacja alkoholowa vs mlekowa: warunki, miejsce, produkty i ilość ATP z jednej cząsteczki glukozy (słupki)',
mount:function(el,o){var P=[['tl','oddychanie tlenowe','z tlenem','cytoplazma + mitochondria','CO₂ + H₂O',31,'#c0392b','prawie wszystkie organizmy'],
   ['al','fermentacja alkoholowa','bez tlenu','cytoplazma','alkohol etylowy + CO₂',2,'#8d6e00','drożdże — chleb (CO₂ spulchnia ciasto), wino'],
   ['ml','fermentacja mlekowa','bez tlenu','cytoplazma','kwas mlekowy',2,'#1565c0','bakterie mlekowe (jogurt, kiszonki); mięśnie przy intensywnym wysiłku']],cur=o.start||'tl';
  var sg=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(pic);el.appendChild(out);
  function draw(){seg(sg,P.map(function(p){return[p[0],p[1]]}),cur,function(k){cur=k;draw()});
   var s=svg(340,214,'Ilość ATP z jednej cząsteczki glukozy w oddychaniu tlenowym i fermentacjach');
   P.forEach(function(p,i){var y=8+i*62,w=p[5]/38*230,on=p[0]===cur;s.appendChild(T(6,y+9,p[1],{s:13,a:'start',w:on?800:600}));
    s.appendChild(S('rect',{x:6,y:y+20,width:Math.max(8,w),height:24,rx:6,fill:p[6],opacity:on?1:.45}));s.appendChild(T(14+Math.max(8,w),y+32,'ok. '+(p[5]===31?'30–32':p[5])+' ATP',{s:13,a:'start',w:700,f:p[6]}))});
   s.appendChild(T(170,206,'ATP z 1 cząsteczki glukozy (orientacyjnie; starsze podręczniki: 38)',{s:10.5,f:'var(--viz-mut)'}));clr(pic);pic.appendChild(s);
   var p=P.filter(function(x){return x[0]===cur})[0];
   out.innerHTML='<b>'+p[1][0].toUpperCase()+p[1].slice(1)+'</b> — '+p[2]+', '+p[3]+'.<br>Glukoza → <b>'+p[4]+'</b> + energia (ATP). Kto: '+p[7]+'.'+(cur==='tl'?'<br>Glukoza rozkładana do końca (do CO₂ i H₂O) — energii jest <b>wielokrotnie więcej</b> niż w fermentacji.':'<br>Glukoza rozkładana <b>niecałkowicie</b> — w produkcie (alkohol, kwas mlekowy) zostaje dużo energii, dlatego ATP jest niewiele.')}
  draw()}});
})();
