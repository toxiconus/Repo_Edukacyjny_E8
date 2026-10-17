/* viz: mikroskop-model — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"],svg=BIO.Lh["A.svg"],S=BIO.Lh["A.S"],nucleus=BIO.Lh["A.nucleus"],mito=BIO.Lh["A.mito"],T=BIO.Lh["A.T"],btn=BIO.Lh["A.btn"];
BIO.define('mikroskop-model',{opis:'Ta sama komórka liścia moczarki w dwóch widokach: obraz z mikroskopu świetlnego (rozmyty, widać ścianę, chloroplasty, wakuolę; jądro po barwieniu) i model szkolny ze wszystkimi strukturami podpisanymi; przełącznik barwienia; opcja start="mikroskop|model"',
mount:function(el,o){var uid='bm'+Math.random().toString(36).slice(2,7),widok=(o&&o.start==='model')?'model':'mikroskop',barw=false,tools=H('div','bv-tools'),hold=H('div'),box=H('div','bv-info');
  [tools,hold,box].forEach(function(e){el.appendChild(e)});
  var CH=[[150,52],[196,48],[248,56],[300,54],[96,90],[104,140],[314,104],[322,152],[140,182],[204,186],[262,180]];
  function rys(){var mik=widok==='mikroskop',s=svg(440,220,mik?'Obraz komórki w mikroskopie świetlnym':'Model szkolny komórki roślinnej',[]);
    var d=S('defs',{},[S('filter',{id:uid+'b'},[S('feGaussianBlur',{stdDeviation:mik?1.6:0})]),S('clipPath',{id:uid+'c'},[S('circle',{cx:220,cy:110,r:150})]),S('radialGradient',{id:uid+'p'},[S('stop',{offset:'60%','stop-color':'#fbfbf2'}),S('stop',{offset:'100%','stop-color':'#d9d9c9'})])]);s.appendChild(d);
    if(mik){s.appendChild(S('circle',{cx:220,cy:110,r:150,fill:'url(#'+uid+'p)'}));}
    var k=S('g',mik?{filter:'url(#'+uid+'b)','clip-path':'url(#'+uid+'c)'}:{});s.appendChild(k);
    if(mik){[[-150,0],[150,0]].forEach(function(p){k.appendChild(S('rect',{x:70+p[0],y:24+p[1],width:280,height:172,rx:8,fill:'#eef2df',stroke:'#7d8a5c','stroke-width':4}))})}
    k.appendChild(S('rect',{x:70,y:24,width:280,height:172,rx:8,fill:mik?'#eef2df':'var(--cell-cyto)',stroke:mik?'#7d8a5c':'var(--wall)','stroke-width':mik?4:6}));
    if(!mik)k.appendChild(S('rect',{x:76,y:30,width:268,height:160,rx:5,fill:'none',stroke:'var(--cell-mem)','stroke-width':1.6}));
    k.appendChild(S('rect',{x:130,y:72,width:170,height:84,rx:26,fill:mik?'#f7f8ee':'#ffffff',stroke:mik?'#c9cdb4':'var(--viz-line)','stroke-width':1.2}));
    CH.forEach(function(c){k.appendChild(S('ellipse',{cx:c[0],cy:c[1],rx:mik?9:11,ry:mik?6:6,fill:mik?'#5f9a3a':'var(--chloro-bg)',stroke:mik?'none':'var(--chloro)','stroke-width':1.6}))});
    if(mik){if(barw){k.appendChild(S('circle',{cx:108,cy:60,r:15,fill:'#6d5aa8',opacity:0.75}));}else{k.appendChild(S('circle',{cx:108,cy:60,r:15,fill:'#e6e8d6',stroke:'#cfd2bb','stroke-width':1}))}}
    else{k.appendChild(nucleus(108,60,16,6));[[232,168,0],[96,172,20]].forEach(function(m){k.appendChild(mito(m[0],m[1],13,6,m[2]))});
      [[100,110],[90,40],[170,40],[226,40],[276,36],[330,80],[330,130],[120,160],[180,165],[290,166],[86,190],[340,186]].forEach(function(p){k.appendChild(S('circle',{cx:p[0],cy:p[1],r:1.8,fill:'var(--viz-mut)',opacity:0.8}))})}
    if(mik){s.appendChild(T(220,212,'×400 · '+(barw?'po barwieniu':'bez barwienia'),{s:11,f:'var(--viz-mut)'}))}
    else{[[356,34,350,34,'ściana'],[356,52,345,52,'błona'],[356,104,325,104,'chloroplast'],[356,130,300,130,'wakuola'],[356,168,245,168,'mitochondrium'],[64,60,92,60,'jądro'],[64,110,98,110,'rybosom']].forEach(function(l){var L=l[0]<l[2];s.appendChild(S('line',{x1:L?l[0]+3:l[0]-3,y1:l[1],x2:l[2],y2:l[3],stroke:'var(--viz-mut)','stroke-width':1}));s.appendChild(T(l[0],l[1],l[4],{s:10.5,a:L?'end':'start'}))})}
    return s}
  function opis(){if(widok==='model')return'<b>Model szkolny</b><span>Narysowane i podpisane są wszystkie struktury: ściana, błona, jądro, wakuola, chloroplasty, mitochondria, rybosomy. To uproszczenie — kształty i proporcje są umowne, a zwykle nie da się zobaczyć ich wszystkich jednocześnie.</span>';
    return'<b>Mikroskop świetlny (ok. ×400)</b><span>Wyraźnie widać: ścianę komórkową (granice komórek) i zielone chloroplasty; wakuolę rozpoznajemy po pustym, jasnym środku. '+(barw?'Po barwieniu (np. błękitem metylenowym; barwnik zależy od preparatu) jądro staje się widoczne jako ciemniejsza plamka.':'Jądro jest słabo widoczne — trzeba zabarwić preparat.')+'</span><span>Nie widać: rybosomów (ok. 25 nm) ani szczegółów mitochondriów — są mniejsze niż zdolność rozdzielcza mikroskopu świetlnego (ok. 0,2 µm). Błony komórkowej nie odróżnisz od ściany.</span>'}
  function draw(){hold.innerHTML='';hold.appendChild(rys());box.innerHTML=opis();tools.innerHTML='';
    [['mikroskop','widok w mikroskopie'],['model','model szkolny']].forEach(function(v){var b=btn(v[1],function(){widok=v[0];draw()});if(widok===v[0])b.className+=' on';b.setAttribute('aria-pressed',String(widok===v[0]));tools.appendChild(b)});
    if(widok==='mikroskop'){var b=btn(barw?'usuń barwienie':'zabarw preparat',function(){barw=!barw;draw()});if(barw)b.className+=' on';tools.appendChild(b)}}
  draw()}});
})();
