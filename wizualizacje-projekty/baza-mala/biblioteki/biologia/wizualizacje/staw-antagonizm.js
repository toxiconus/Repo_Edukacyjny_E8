/* viz: staw-antagonizm — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"];
BIO.define('staw-antagonizm',{opis:'Ramię z kością ramienną, łokciem i przedramieniem: suwak kąta w stawie; biceps (zginacz) i triceps (prostownik) grubieją przy skurczu i cienieją przy rozkurczu; ścięgna, przyczepy; opis, który mięsień pracuje',
mount:function(el,o){var kat=+(o.kat||60),tl=H('div','bv-tools'),box=H('div'),info=H('div','bv-info');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
 var lab=H('label',null,'kąt w łokciu: '),r=document.createElement('input');r.type='range';r.min=30;r.max=175;r.value=kat;r.setAttribute('aria-label','Kąt w stawie łokciowym');var ov=H('b');lab.appendChild(r);lab.appendChild(ov);tl.appendChild(lab);
 var prev=kat,ruch=0;
 function draw(){ov.textContent=kat+'°';var W=640,Hh=420,sx=250,sy=40,ex=250,ey=250,L=220,f=(180-kat)*Math.PI/180,dx=Math.sin(f),dy=Math.cos(f);
  var hx=ex+L*dx,hy=ey+L*dy,bA=[ex+55*dx,ey+55*dy],ol=[ex-22*Math.cos(f),ey+22*Math.sin(f)];
  var zgin=ruch<0,prost=ruch>0,bw=12+20*(1-(kat-30)/145),tw=12+14*((kat-30)/145);
  var sv=svg(W,Hh,'Staw łokciowy i mięśnie antagonistyczne',[]);
  sv.appendChild(S('line',{x1:sx,y1:sy,x2:ex,y2:ey,stroke:'#d9d0b8','stroke-width':22,'stroke-linecap':'round'}));
  sv.appendChild(S('line',{x1:ex,y1:ey,x2:hx,y2:hy,stroke:'#d9d0b8','stroke-width':18,'stroke-linecap':'round'}));
  sv.appendChild(S('circle',{cx:ex,cy:ey,r:20,fill:'#cfe3f5',stroke:'#5a8bb8','stroke-width':3}));
  var mx=(sx+16+bA[0])/2+38+bw,my=(sy+20+bA[1])/2;
  sv.appendChild(S('path',{d:'M'+(sx+14)+' '+(sy+18)+' Q'+mx+' '+my+' '+bA[0]+' '+bA[1],fill:'none',stroke:zgin?'#c0392b':'#e07a6e','stroke-width':bw,'stroke-linecap':'round',opacity:.92}));
  var qx=(sx-14+ol[0])/2-30-tw,qy=(sy+24+ol[1])/2;
  sv.appendChild(S('path',{d:'M'+(sx-14)+' '+(sy+24)+' Q'+qx+' '+qy+' '+ol[0]+' '+ol[1],fill:'none',stroke:prost?'#1f5fae':'#7aa7e0','stroke-width':tw,'stroke-linecap':'round',opacity:.92}));
  sv.appendChild(S('circle',{cx:bA[0],cy:bA[1],r:6,fill:'#555'}));sv.appendChild(S('circle',{cx:ol[0],cy:ol[1],r:6,fill:'#555'}));
  sv.appendChild(T(mx+16,my-30,'biceps',{s:17,w:800,f:'#a93226',a:'start'}));sv.appendChild(T(mx+16,my-10,'zginacz',{s:13,w:700,f:'#a93226',a:'start'}));
  sv.appendChild(T(qx-16,qy-10,'triceps',{s:17,w:800,f:'#1f5fae',a:'end'}));sv.appendChild(T(qx-16,qy+10,'prostownik',{s:13,w:700,f:'#1f5fae',a:'end'}));
  sv.appendChild(T(sx+20,sy-14,'bark · kość ramienna',{s:13,w:700,a:'start'}));sv.appendChild(T(ex-28,ey+6,'staw łokciowy',{s:13,w:700,a:'end'}));
  sv.appendChild(T(hx+(dx>0.3?14:0),hy+(dy>0?22:-14),'przedramię',{s:13,w:700,a:dx>0.3?'start':'middle'}));
  clr(box);box.appendChild(sv);
  info.className='bv-info';info.innerHTML=ruch<0?'<b>Zginanie przedramienia</b><strong>Biceps kurczy się</strong> (skraca się i grubieje), ścięgnem pociąga przedramię w górę; <strong>triceps rozluźnia się</strong> i daje się rozciągnąć.':
   ruch>0?'<b>Prostowanie przedramienia</b><strong>Triceps kurczy się</strong> i pociąga wyrostek łokciowy; <strong>biceps rozluźnia się</strong>. Mięsień umie tylko ciągnąć — dlatego do ruchu w przeciwną stronę potrzebny jest drugi mięsień.':
   '<b>Przesuń suwak</b>Zginaj i prostuj łokieć: obserwuj, który mięsień się skraca (ciemniejszy kolor), a który rozluźnia. Kości to dźwignie, staw — punkt podparcia, mięśnie — siła.'}
 r.oninput=function(){var v=+r.value;ruch=v<prev?-1:v>prev?1:0;prev=v;kat=v;draw()};var dir=-1;BIO.fx.auto(el,function(){var v=kat+dir*3;if(v<=30||v>=175){v=Math.max(30,Math.min(175,v));dir=-dir}ruch=dir;prev=v;kat=v;r.value=v;draw()},70);draw()}});
})();
