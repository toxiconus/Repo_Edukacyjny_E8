/* viz: drabina — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var cleanSeq=BIO.Lh["A.cleanSeq"],T=BIO.Lh["A.T"],S=BIO.Lh["A.S"],PAIR=BIO.Lh["A.PAIR"],g=BIO.Lh["A.g"],pur=BIO.Lh["A.pur"],bg=BIO.Lh["A.bg"],col=BIO.Lh["A.col"],HB=BIO.Lh["A.HB"],svg=BIO.Lh["A.svg"],fx=BIO.Lh["A.fx"],H=BIO.Lh["A.H"];
BIO.define('drabina',{opis:'Model drabiny: dwie antyrównoległe nici, szkielet cukrowo-fosforanowy, pary zasad i wiązania wodorowe; opcja seq="ATGCCA"',
mount:function(el,o){var seq=cleanSeq(o.seq,'ATGCCA'),n=seq.length,dy=38,top=46,Hh=top+n*dy+30,xl=60,xr=260,ca=xl+44,cb=xr-44,r=15;
  var kids=[T(xl,22,'5′',{s:14,w:800,f:'var(--strand1)'}),T(xr,22,'3′',{s:14,w:800,f:'var(--strand2)'}),T(xl,Hh-10,'3′',{s:14,w:800,f:'var(--strand1)'}),T(xr,Hh-10,'5′',{s:14,w:800,f:'var(--strand2)'}),
    S('line',{x1:xl,y1:34,x2:xl,y2:Hh-24,stroke:'var(--strand1)','stroke-width':4,'stroke-linecap':'round'}),S('line',{x1:xr,y1:34,x2:xr,y2:Hh-24,stroke:'var(--strand2)','stroke-width':4,'stroke-linecap':'round'})];
  for(var i=0;i<n;i++){var y=top+i*dy+dy/2,a=seq[i],b=PAIR[a];
    if(i<n-1){kids.push(S('g',{'data-k':'P'},[g.phos(xl,y+dy/2,7)]));kids.push(S('g',{'data-k':'P'},[g.phos(xr,y+dy/2,7)]))}
    kids.push(S('g',{'data-k':'S'},[g.sugar(xl,y,10)]));kids.push(S('g',{'data-k':'S'},[g.sugar(xr,y,10)]));
    var wa=pur(a)?62:44,wb=pur(b)?62:44;
    kids.push(S('g',{'data-k':'p'+a},[S('rect',{x:xl+10,y:y-12,width:wa,height:24,rx:6,fill:bg(a),stroke:col(a),'stroke-width':2}),
      S('rect',{x:xr-10-wb,y:y-12,width:wb,height:24,rx:6,fill:bg(b),stroke:col(b),'stroke-width':2}),
      g.hbonds(xl+10+wa+2,xr-10-wb-2,y,HB[a],6),T(xl+10+wa/2,y+1,a,{s:14,w:800,f:col(a)}),T(xr-10-wb/2,y+1,b,{s:14,w:800,f:col(b)})]))}
  var s=svg(320,Hh,'Drabina DNA: '+seq,kids);el.appendChild(s);var box=fx.infoBox();el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span><i style="background:var(--sugar-bg);border:2px solid var(--sugar)"></i>deoksyryboza</span><span><i style="background:var(--phos-bg);border:2px solid var(--phos)"></i>fosforan</span><span>- - - wiązania wodorowe</span>'));
  var pa=['Para A–T','Adenina (puryna, dłuższa płytka) + tymina (pirymidyna, krótsza). 2 wiązania wodorowe.'],pc=['Para C–G','Cytozyna (pirymidyna) + guanina (puryna). 3 wiązania wodorowe — trwalsza para.'];
  fx.info(s,box,{pA:pa,pT:['Para T–A','Ta sama para co A–T, tylko odczytana od drugiej nici. 2 wiązania wodorowe.'],pC:pc,pG:['Para G–C','Ta sama para co C–G, odczytana od drugiej nici. 3 wiązania wodorowe.'],
   P:['Reszta fosforanowa','Łączy kolejne cukry w nici — razem z nimi tworzy „boki drabiny”.'],S:['Deoksyryboza','Cukier w szkielecie nici; do niego przyłączona jest zasada.']})}});
})();
