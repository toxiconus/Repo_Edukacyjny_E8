/* viz: lancuch — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var ICO=BIO.Lh["A.ICO"],chain=BIO.Lh["A.chain"],H=BIO.Lh["A.H"];
BIO.define('lancuch',{opis:'Łańcuch kroków A → B → C; opcje: kroki="A|opis > B > C", boki="środowisko; rozwój", wyroznij="nr" (od 1)',
mount:function(el,o){var k=+(o.wyroznij||0);
  function pick(t){t=t.toLowerCase();return/rna/.test(t)?ICO.rna():/dna|gen\b/.test(t)?ICO.dna():/białk/.test(t)?ICO.bialko():/funkc|enzym/.test(t)?ICO.funkcja():/cech|cesz|fenotyp|organizm/.test(t)?ICO.organizm():null}
  chain(el,(o.kroki||'').split('>').map(function(s,i){var p=s.split('|');return{b:p[0].trim(),s:(p[1]||'').trim(),k:k===i+1,ico:o.ikony==='nie'?null:pick(p[0])}}),o);
  if(o.boki){var sd=H('div','bv-side');o.boki.split(';').forEach(function(s){if(s.trim())sd.appendChild(H('span',null,s.trim()))});el.appendChild(sd)}}});
})();
