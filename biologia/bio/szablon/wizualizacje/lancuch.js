/* viz: lancuch — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var ICO=BIO.Lh["A.ICO"],chain=BIO.Lh["A.chain"],H=BIO.Lh["A.H"];
BIO.define('lancuch',{opis:'Łańcuch kroków A → B → C; opcje: kroki="A|opis > B > C", opisy="opis A > opis B > opis C" (po kliknięciu poziomu), boki="środowisko; rozwój", wyroznij="nr" (od 1)',
mount:function(el,o){var k=+(o.wyroznij||0);
  function pick(t){t=t.toLowerCase();return/rna/.test(t)?ICO.rna():/dna|gen\b/.test(t)?ICO.dna():/białk/.test(t)?ICO.bialko():/funkc|enzym/.test(t)?ICO.funkcja():/cech|cesz|fenotyp|organizm/.test(t)?ICO.organizm():null}
  var names=[],opisy=(o.opisy||'').split('>').map(function(s){return s.trim()});
  var c=chain(el,(o.kroki||'').split('>').map(function(s,i){var p=s.split('|');names.push((p[0]||'').trim());return{b:p[0].trim(),s:(p[1]||'').trim(),k:k===i+1,key:'n'+i,ico:o.ikony==='nie'?null:pick(p[0])}}),o);
  if(opisy.some(Boolean)){
    var box=H('div','bv-info','Kliknij poziom, aby zobaczyć opis.');el.appendChild(box);
    [].forEach.call(c.querySelectorAll('.bv-node'),function(d,i){
      function show(){
        [].forEach.call(c.querySelectorAll('.bv-node'),function(x){x.style.outline='';x.setAttribute('aria-pressed','false')});
        d.style.outline='2px solid var(--accent)';d.setAttribute('aria-pressed','true');
        box.textContent=names[i]+': '+(opisy[i]||'');
      }
      d.setAttribute('role','button');d.setAttribute('tabindex','0');d.style.cursor='pointer';
      d.addEventListener('click',show);
      d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();show()}});
    });
  }
  if(o.boki){var sd=H('div','bv-side');o.boki.split(';').forEach(function(s){if(s.trim())sd.appendChild(H('span',null,s.trim()))});el.appendChild(sd)}}});
})();
