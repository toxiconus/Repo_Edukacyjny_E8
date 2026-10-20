/* viz: helisa — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var cleanSeq=BIO.Lh["A.cleanSeq"],H=BIO.Lh["A.H"],btn=BIO.Lh["A.btn"],S=BIO.Lh["A.S"],PAIR=BIO.Lh["A.PAIR"],col=BIO.Lh["A.col"],T=BIO.Lh["A.T"],svg=BIO.Lh["A.svg"],fx=BIO.Lh["A.fx"];
BIO.define('helisa',{opis:'Podwójna helisa z suwakiem „skręcenie” (drabina ↔ helisa), wymiary 2 nm i 3,4 nm / 10 par; opcja seq',
mount:function(el,o){var seq=cleanSeq(o.seq,'ATGCGTACGATTGCAC'),n=seq.length,dy=22,top=34,R=88,cx=160,Hh=top+(n-1)*dy+44,t=o.skret!=null?+o.skret/100:1;
  var tools=H('div','bv-tools'),lab=H('span','bv-score'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=100;rng.value=Math.round(t*100);rng.setAttribute('aria-label','Skręcenie');rng.style.flex='1 1 140px';
  var b0=btn('Drabina',function(){rng.value=0;draw()}),b1=btn('Helisa',function(){rng.value=100;draw()});
  tools.appendChild(b0);tools.appendChild(rng);tools.appendChild(b1);el.appendChild(tools);var holder=H('div');el.appendChild(holder);el.appendChild(lab);
  function draw(){var t=rng.value/100,pts=[],back=[],front=[],rungs=[];
    for(var i=0;i<n;i++){var ph=t*2*Math.PI*i/10+0.0001,c=Math.cos(ph),sn=Math.sin(ph),y=top+i*dy;pts.push({y:y,x1:cx-R*c,x2:cx+R*c,z1:-sn,z2:sn,c:c})}
    for(i=0;i<n-1;i++){[[1,'var(--strand1)'],[2,'var(--strand2)']].forEach(function(s){var a=pts[i],b=pts[i+1],z=(a['z'+s[0]]+b['z'+s[0]])/2;
      var seg=S('line',{x1:a['x'+s[0]],y1:a.y,x2:b['x'+s[0]],y2:b.y,stroke:s[1],'stroke-width':z<-0.05?6:9,'stroke-linecap':'round',opacity:z<-0.05?0.35:1});(z<-0.05?back:front).push(seg)})}
    pts.forEach(function(p,i){var a=seq[i],b=PAIR[a],xm=(p.x1+p.x2)/2,op=0.45+0.55*Math.abs(p.c);
      rungs.push(S('line',{x1:p.x1,y1:p.y,x2:xm,y2:p.y,stroke:col(a),'stroke-width':5,opacity:op}));rungs.push(S('line',{x1:xm,y1:p.y,x2:p.x2,y2:p.y,stroke:col(b),'stroke-width':5,opacity:op}));
      if(Math.abs(p.c)>0.55){rungs.push(T((p.x1+xm)/2,p.y-0.5,a,{s:10,w:800,f:'var(--viz-bg)'}));rungs.push(T((xm+p.x2)/2,p.y-0.5,b,{s:10,w:800,f:'var(--viz-bg)'}))}});
    var k=[].concat(back,rungs,front);
    k.push(T(pts[0].x1,14,'5′',{s:13,w:800,f:'var(--strand1)'}),T(pts[0].x2,14,'3′',{s:13,w:800,f:'var(--strand2)'}),T(pts[n-1].x1,Hh-18,'3′',{s:13,w:800,f:'var(--strand1)'}),T(pts[n-1].x2,Hh-18,'5′',{s:13,w:800,f:'var(--strand2)'}));
    if(t>0.95&&n>10){var y0=pts[0].y,y1=pts[10].y;k.push(S('path',{d:'M300 '+y0+'h8V'+y1+'h-8',fill:'none',stroke:'var(--viz-mut)','stroke-width':1.5}),T(296,(y0+y1)/2-8,'1 skręt',{s:10,a:'end',f:'var(--viz-mut)'}),T(296,(y0+y1)/2+6,'≈ 3,4 nm',{s:10,a:'end',f:'var(--viz-mut)'}),T(296,(y0+y1)/2+20,'10 par',{s:10,a:'end',f:'var(--viz-mut)'}));
      k.push(S('path',{d:'M'+(cx-R)+' '+(Hh-6)+'v-6H'+(cx+R)+'v6',fill:'none',stroke:'var(--viz-mut)','stroke-width':1.5}),T(cx,Hh-4,'średnica ≈ 2 nm',{s:10,f:'var(--viz-mut)'}))}
    holder.innerHTML='';holder.appendChild(svg(320,Hh+4,'Podwójna helisa DNA',k));
    lab.textContent=t<0.05?'Model drabiny: nici proste, pary zasad jak szczeble.':t>0.95?'Podwójna helisa: nici owinięte wokół wspólnej osi; szkielet na zewnątrz, zasady w środku.':'Skręcanie drabiny w helisę: '+Math.round(t*100)+'%.';
    fx.toggle([b0,b1],t<0.05?0:t>0.95?1:-1)}
  rng.oninput=draw;draw()}});
})();
