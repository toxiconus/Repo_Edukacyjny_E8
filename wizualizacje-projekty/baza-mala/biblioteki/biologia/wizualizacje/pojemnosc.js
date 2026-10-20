/* viz: pojemnosc — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"];
function fmt(n){return n.toLocaleString('pl-PL')}
BIO.define('pojemnosc',{opis:'Ile różnych sekwencji długości n: 4ⁿ (4 zasady) vs 3ⁿ; suwak n',
mount:function(el,o){var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=1;rng.max=20;rng.value=o.n||10;rng.setAttribute('aria-label','Długość sekwencji');rng.style.flex='1 1 160px';
  var out=H('div','bv-grid');tools.appendChild(H('span','bv-score','długość n:'));tools.appendChild(rng);el.appendChild(tools);el.appendChild(out);
  function tile(t,v,s){var d=H('div','bv-tile');d.appendChild(H('h6',null,t));d.appendChild(H('div',null,'<span style="font:800 20px ui-monospace,Consolas,monospace;color:var(--accent);overflow-wrap:anywhere">'+v+'</span>'));if(s)d.appendChild(H('p',null,s));return d}
  function draw(){var n=+rng.value,a=Math.pow(4,n),b=Math.pow(3,n);out.innerHTML='';
    out.appendChild(tile('4 zasady: 4^'+n,fmt(a),'tyle różnych sekwencji o długości '+n));out.appendChild(tile('3 zasady: 3^'+n,fmt(b),'gdyby były tylko trzy „litery”'));
    out.appendChild(tile('stosunek',fmt(Math.round(a/b*10)/10)+'×','tyle razy więcej możliwości daje czwarta zasada'))}
  rng.oninput=draw;draw()}});
})();
