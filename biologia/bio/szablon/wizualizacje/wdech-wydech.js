/* viz: wdech-wydech — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"];
BIO.define('wdech-wydech',{opis:'Klatka piersiowa od przodu: tchawica, oskrzela, dwa płuca, żebra i kopuła przepony; przyciski wdech / wydech / oddychaj animują obniżanie i spłaszczanie przepony, unoszenie żeber, powiększanie płuc i kierunek przepływu powietrza; wskaźnik objętości klatki i ciśnienia w płucach względem atmosferycznego',
mount:function(el,o){
 var tl=H('div','bv-tools'),box=H('div'),info=H('div','bv-info');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
 var t=0,cel=0,kier=0,auto=false,raf=0,red=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 var W=640,Hh=440;
 function yD(x,A){var Y0=360,u=(x-320)/175;return Y0-(Y0-A)*(1-u*u)}
 function draw(){var A=262+40*t,sv=svg(W,Hh,'Mechanizm wdechu i wydechu',[]);
  sv.appendChild(S('path',{d:'M150 '+(120-6*t)+' C140 220 140 300 148 362 L492 362 C500 300 500 220 490 '+(120-6*t)+' C430 96 210 96 150 '+(120-6*t)+' Z',fill:'var(--surface-soft)',stroke:'var(--viz-line)','stroke-width':2}));
  [['L',248],['P',392]].forEach(function(p){var cx=p[1],rx=70+14*t,bot=yD(cx,A)-6,top=128-4*t,ry=(bot-top)/2,cy=top+ry;
   sv.appendChild(S('ellipse',{cx:cx+(p[0]==='L'?-6*t:6*t),cy:cy,rx:rx,ry:ry,fill:'#f4b6b6',stroke:'#b85a5a','stroke-width':2.5,opacity:.95}))});
  sv.appendChild(S('path',{d:'M320 20 L320 150 M320 150 L270 185 M320 150 L370 185',fill:'none',stroke:'#d9a0a0','stroke-width':12,'stroke-linecap':'round'}));
  for(var i=0;i<6;i++){var y=118+i*38;[-1,1].forEach(function(s){var xe=320+s*(158+8*t),ye=y+34-18*t;sv.appendChild(S('path',{d:'M'+(320+s*14)+' '+y+' Q'+(320+s*120)+' '+(y-8)+' '+xe+' '+ye,fill:'none',stroke:'#cfc4a8','stroke-width':7,'stroke-linecap':'round',opacity:.85}))})}
  sv.appendChild(S('rect',{x:312,y:112,width:16,height:200,rx:6,fill:'#e2d9c0',stroke:'#b8ab88'}));
  var d='';for(var x=145;x<=495;x+=5)d+=(d?'L':'M')+x+' '+yD(x,A).toFixed(1);
  sv.appendChild(S('path',{d:d,fill:'none',stroke:kier>0?'#c0392b':'#b85a5a','stroke-width':kier>0?9:6,'stroke-linecap':'round'}));
  sv.appendChild(T(320,A+30,'przepona',{s:17,w:800,f:'#8a2a2a'}));
  sv.appendChild(T(560,150,'żebra',{s:16,w:700}));sv.appendChild(T(560,170,kier>0?'unoszą się':kier<0?'opadają':'',{s:14,f:'var(--viz-mut)'}));
  sv.appendChild(T(560,250,'mięśnie',{s:16,w:700}));sv.appendChild(T(560,270,'międzyżebrowe',{s:16,w:700}));sv.appendChild(T(560,290,kier>0?'kurczą się':kier<0?'rozluźniają się':'',{s:14,f:'var(--viz-mut)'}));
  sv.appendChild(T(248,250,'płuco',{s:16,w:800,f:'#7a2a2a'}));sv.appendChild(T(392,250,'płuco',{s:16,w:800,f:'#7a2a2a'}));sv.appendChild(T(352,40,'tchawica',{s:15,w:700,a:'start'}));
  if(kier){var up=kier<0;sv.appendChild(S('path',{d:up?'M290 70 L290 26 M280 38 L290 24 L300 38':'M290 24 L290 70 M280 58 L290 72 L300 58',fill:'none',stroke:'#2f7fa8','stroke-width':4,'stroke-linecap':'round'}));
   sv.appendChild(T(282,90,up?'powietrze wypływa':'powietrze wpływa',{s:15,w:800,f:'#2f7fa8',a:'end'}))}
  var bx=30,by=400;sv.appendChild(T(bx,by-16,'objętość klatki',{s:14,w:700,a:'start'}));sv.appendChild(S('rect',{x:bx,y:by,width:200,height:14,rx:7,fill:'var(--viz-line)',opacity:.35}));sv.appendChild(S('rect',{x:bx,y:by,width:90+110*t,height:14,rx:7,fill:'#2f7fa8'}));
  var pw=kier>0?'niższe od atmosferycznego':kier<0?'wyższe od atmosferycznego':'równe atmosferycznemu';
  sv.appendChild(T(W-30,by-16,'ciśnienie w płucach:',{s:14,w:700,a:'end'}));sv.appendChild(T(W-30,by+8,pw,{s:15,w:800,a:'end',f:kier>0?'#1f6a3a':kier<0?'#a33':'var(--viz-ink)'}));
  clr(box);box.appendChild(sv);
  info.className='bv-info';info.innerHTML=kier>0?'<b>Wdech — proces czynny</b>1. <strong>Przepona kurczy się</strong>, spłaszcza i obniża. 2. <strong>Mięśnie międzyżebrowe zewnętrzne kurczą się</strong> i unoszą żebra. 3. <strong>Objętość klatki piersiowej rośnie</strong>, płuca rozciągają się razem z nią. 4. Ciśnienie w płucach spada poniżej atmosferycznego. 5. Powietrze wpływa.':
   kier<0?'<b>Wydech spokojny — proces bierny</b>1. <strong>Przepona rozluźnia się</strong> i unosi (wraca do kształtu kopuły). 2. Mięśnie międzyżebrowe rozluźniają się, żebra opadają. 3. Objętość klatki maleje, sprężyste płuca kurczą się. 4. Ciśnienie w płucach rośnie powyżej atmosferycznego. 5. Powietrze wypływa. Przy wydechu <strong>nasilonym</strong> (kaszel, wysiłek) pracują dodatkowo mięśnie brzucha i międzyżebrowe wewnętrzne.':
   '<b>Kliknij „wdech” albo „oddychaj”</b>Płuca nie mają mięśni, którymi mogłyby „zasysać” powietrze — rozszerzają się razem z klatką piersiową, bo przylegają do niej przez opłucną.'}
 function krok(ts){var v=0.018;if(t<cel){t=Math.min(cel,t+v)}else if(t>cel){t=Math.max(cel,t-v)}draw();
  if(t!==cel)raf=requestAnimationFrame(krok);else if(auto){setTimeout(function(){if(!auto)return;cel=cel?0:1;kier=cel?1:-1;raf=requestAnimationFrame(krok)},500)}}
 function idz(c){cancelAnimationFrame(raf);cel=c;kier=c>t?1:c<t?-1:0;if(red){t=c;draw();return}raf=requestAnimationFrame(krok)}
 var b1=btn('wdech',function(){auto=false;b3.classList.remove('on');idz(1)}),b2=btn('wydech',function(){auto=false;b3.classList.remove('on');idz(0)}),b3=btn('▶ oddychaj',function(){auto=!auto;b3.classList.toggle('on',auto);if(auto)idz(t>0.5?0:1)});
 [b1,b2].forEach(function(b){tl.appendChild(b)});draw();BIO.fx.auto(el,function(){idz(t>0.5?0:1)},2300,{now:1})}});
})();
