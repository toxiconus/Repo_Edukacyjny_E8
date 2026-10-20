/* viz: sekwencje — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var cleanSeq=BIO.Lh["A.cleanSeq"],H=BIO.Lh["A.H"];
BIO.define('sekwencje',{opis:'Porównanie dwóch sekwencji, zaznaczone różnice; opcje a="ATGCC" b="ATGGC"',
mount:function(el,o){var a=cleanSeq(o.a,'ATGCC'),b=cleanSeq(o.b,'ATGGC'),d=0;
  function row(lbl,s,other){var r=H('div','bv-seq');r.appendChild(H('span','bv-end',lbl));s.split('').forEach(function(x,i){var c=H('span','bv-nt '+x+(other[i]!==x?' diff':''),x);r.appendChild(c)});return r}
  for(var i=0;i<Math.max(a.length,b.length);i++)if(a[i]!==b[i])d++;
  var w=H('div');w.style.display='grid';w.style.gap='8px';w.appendChild(row('1',a,b));w.appendChild(row('2',b,a));el.appendChild(w);
  el.appendChild(H('div','bv-info',d?'<b>'+(d===1?'Różnica na 1 pozycji':'Różnice na '+d+' pozycjach')+'</b>Te same litery, inna kolejność = inny zapis informacji. Czy zmieni się białko lub cecha — zależy od miejsca zmiany (gen, region regulatorowy, kodon synonimiczny; L011, L020).':'<b>Sekwencje identyczne</b>Ten sam zapis informacji.'))}});
})();
