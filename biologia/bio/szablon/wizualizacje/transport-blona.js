/* viz: transport-blona — grupa B · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var UID=BIO.Lh["B.UID"],S=BIO.Lh["B.S"],info=BIO.Lh["B.info"],H=BIO.Lh["B.H"],clr=BIO.Lh["B.clr"],key=BIO.Lh["B.key"];
var TZ=[
 {k:'dp',n:'Dyfuzja prosta',co:'małe, niepolarne: O₂, CO₂',bialko:'nie',atp:'nie',kier:'zgodnie z gradientem',opis:'Cząsteczki przechodzą wprost przez warstwę lipidów, z miejsca o wyższym stężeniu do niższego.'},
 {k:'du',n:'Dyfuzja ułatwiona',co:'glukoza, jony',bialko:'tak (kanał, nośnik)',atp:'nie',kier:'zgodnie z gradientem',opis:'Białko kanałowe lub nośnikowe przepuszcza cząsteczki, które nie przejdą przez lipidy. Energia nie jest potrzebna.'},
 {k:'ta',n:'Transport aktywny',co:'jony, np. Na⁺, K⁺',bialko:'tak (pompa)',atp:'tak',kier:'wbrew gradientowi',opis:'Pompa białkowa przenosi cząsteczki tam, gdzie jest ich już więcej. Zużywa energię z rozkładu ATP.'},
 {k:'os',n:'Osmoza',co:'woda',bialko:'często (akwaporyny)',atp:'nie',kier:'do roztworu o wyższym stężeniu substancji rozpuszczonej',opis:'Woda przechodzi przez błonę półprzepuszczalną w stronę, gdzie jest więcej substancji rozpuszczonej (mniej „wolnej” wody).'}];
function rnd(seed){return function(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}
function dots(g,x0,y0,w,h,n,sh,col,seed){var r=rnd(seed);for(var i=0;i<n;i++){var x=x0+6+r()*(w-12),y=y0+6+r()*(h-12);
 if(sh==='hex'){var p='';for(var k=0;k<6;k++){var a=k*Math.PI/3;p+=(k?'L':'M')+(x+5*Math.cos(a)).toFixed(1)+','+(y+5*Math.sin(a)).toFixed(1)}g.appendChild(S('path',{d:p+'z',fill:col,stroke:'#1a2528','stroke-width':'.6'}))}
 else if(sh==='big')g.appendChild(S('circle',{cx:x,cy:y,r:5.5,fill:col,stroke:'#1a2528','stroke-width':'.6'}));else g.appendChild(S('circle',{cx:x,cy:y,r:3,fill:col}))}}
BIO.define('transport-blona',{opis:'Przekrój błony: dyfuzja prosta, ułatwiona, transport aktywny (ATP), osmoza; kropki = stężenie; klik = opis + tabela porównawcza; opcja start="dp|du|ta|os"',
mount:function(el,o){var id='bw'+(BIO.Lh["B.nextUid"]()),cur=TZ.some(function(z){return z.k===o.start})?o.start:'dp',svg=S('svg',{viewBox:'0 0 360 270',role:'img','aria-label':'Przekrój błony komórkowej z czterema sposobami transportu','class':'bw-svg'}),out=info(),tw=H('div',{'class':'bw-tbl'}),t=H('table');tw.appendChild(t);[svg,out,tw].forEach(function(e){el.appendChild(e)});
  function draw(){clr(svg);var d=S('defs'),mk=S('marker',{id:id+'a',viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto'});mk.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:'#1a2528'}));d.appendChild(mk);svg.appendChild(d);
   svg.appendChild(S('text',{x:6,y:14,'font-size':'10',fill:'#5a6a6d'},'zewnątrz komórki'));svg.appendChild(S('text',{x:6,y:264,'font-size':'10',fill:'#5a6a6d'},'wnętrze komórki'));
   TZ.forEach(function(z,i){var x0=i*90,g=S('g',{'aria-label':z.n,style:'cursor:pointer'}),cx=x0+45,AR=function(y1,y2){g.appendChild(S('line',{x1:cx,y1:y1,x2:cx,y2:y2,stroke:'#1a2528','stroke-width':'1.8','marker-end':'url(#'+id+'a)'}))};
    g.appendChild(S('rect',{x:x0+1,y:20,width:88,height:232,rx:6,fill:z.k===cur?'#e7f1e1':'#ffffff',stroke:z.k===cur?'#3f7a28':'#e8efed'}));
    for(var x=x0+5;x<x0+88;x+=9)[118,152].forEach(function(y,j){g.appendChild(S('line',{x1:x,y1:y+(j?-5:5),x2:x,y2:y+(j?-16:16),stroke:'#d6b04a','stroke-width':'1.4'}));g.appendChild(S('circle',{cx:x,cy:y,r:4,fill:'#e4a83a'}))});
    if(z.k==='dp'){dots(g,x0,24,88,88,14,'o','#2a62b5',11);dots(g,x0,158,88,88,3,'o','#2a62b5',12);AR(96,178)}
    if(z.k==='du'){g.appendChild(S('rect',{x:cx-14,y:104,width:10,height:62,rx:4,fill:'#7aa66a'}));g.appendChild(S('rect',{x:cx+4,y:104,width:10,height:62,rx:4,fill:'#7aa66a'}));dots(g,x0,24,88,80,8,'hex','#f2c14e',21);dots(g,x0,166,88,80,2,'hex','#f2c14e',22);AR(90,182)}
    if(z.k==='ta'){g.appendChild(S('rect',{x:cx-16,y:102,width:32,height:66,rx:10,fill:'#5b8bc9'}));g.appendChild(S('text',{x:cx,y:140,'text-anchor':'middle','font-size':'9',fill:'#fff','font-weight':'700'},'pompa'));dots(g,x0,24,88,80,3,'big','#c03d2c',31);dots(g,x0,170,88,76,10,'big','#c03d2c',32);AR(92,184);g.appendChild(S('text',{x:cx+16,y:192,'font-size':'10','font-weight':'700',fill:'#b07610'},'ATP'));g.appendChild(S('text',{x:cx+16,y:203,'font-size':'9',fill:'#b07610'},'→ADP'))}
    if(z.k==='os'){g.appendChild(S('rect',{x:cx-5,y:104,width:10,height:62,rx:4,fill:'#8fc1d6'}));dots(g,x0,24,88,80,10,'o','#4aa3c9',41);dots(g,x0,24,88,80,2,'big','#a07cc5',42);dots(g,x0,170,88,76,6,'o','#4aa3c9',43);dots(g,x0,170,88,76,7,'big','#a07cc5',44);AR(92,184)}
    var w=z.n.split(' ');g.appendChild(S('text',{x:cx,y:36,'text-anchor':'middle','font-size':'9.5','font-weight':'700',fill:'#1a2528'},w[0]));g.appendChild(S('text',{x:cx,y:47,'text-anchor':'middle','font-size':'9.5','font-weight':'700',fill:'#1a2528'},w[1]||''));
    key(g,function(){cur=z.k;draw()});svg.appendChild(g)});
   var z=TZ.filter(function(q){return q.k===cur})[0];out.innerHTML='<b>'+z.n+'</b><span>'+z.opis+'</span><span style="font-size:12.5px">Kropki: więcej kropek po jednej stronie = wyższe stężenie.</span>'}
  var hr=H('tr');['Sposób','Co przechodzi','Białko','ATP','Kierunek'].forEach(function(x){hr.appendChild(H('th',{text:x}))});t.appendChild(hr);
  TZ.forEach(function(z){var tr=H('tr');[z.n,z.co,z.bialko,z.atp,z.kier].forEach(function(x){tr.appendChild(H('td',{text:x}))});t.appendChild(tr)});draw()}});
})();
