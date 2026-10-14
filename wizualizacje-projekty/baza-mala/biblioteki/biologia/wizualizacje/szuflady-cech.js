/* viz: szuflady-cech — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"],btn=BIO.Lh["A.btn"],REG=BIO.Lh["A.REG"];
var KAT={d:'dziedziczna',n:'nabyta',w:'wieloczynnikowa'};
var CECHY=[['grupa krwi ABO','d','Zależy od odziedziczonych alleli genu ABO; warunki życia jej nie zmieniają.'],
 ['blizna po upadku','n','Uraz zmienia skórę, nie DNA w gametach — blizna nie przechodzi na dzieci.'],
 ['wzrost','w','Wiele genów + odżywianie, sen, choroby, aktywność w dzieciństwie.'],
 ['opalenizna po wakacjach','n','Reakcja skóry na słońce. Zdolność do opalania ma podłoże genetyczne, ale sama opalenizna jest nabyta.'],
 ['znajomość języka obcego','n','Umiejętność wyuczona — nie ma jej w DNA.'],
 ['kolor oczu','d','W szkolnym modelu cecha dziedziczna (w rzeczywistości zależy od kilku genów).'],
 ['masa ciała','w','Geny + dieta + ruch + zdrowie.'],
 ['daltonizm','d','Allel na chromosomie X (L018).'],
 ['ciśnienie krwi','w','Geny + styl życia + wiek.'],
 ['talent muzyczny','w','Predyspozycje z genów + trening, środowisko, motywacja.']];
BIO.define('szuflady-cech',{opis:'Sortowanie cech: dziedziczna / nabyta / wieloczynnikowa; opcja cechy="nazwa:d|wyjaśnienie; …" (d, n, w)',
mount:function(el,o){var list=CECHY;
  if(o.cechy)list=o.cechy.split(';').map(function(s){var a=s.split('|'),h=a[0].split(':');return[h[0].trim(),(h[1]||'d').trim(),(a[1]||'').trim()]});
  var wrap=H('div','bv-sort'),sc=H('div','bv-score'),ok=0,n=0;
  list.forEach(function(c){var r=H('div','bv-row');r.appendChild(H('b',null,c[0]));
    var bs=['d','n','w'].map(function(k){var b=btn(KAT[k]);b.onclick=function(){if(r.dataset.done)return;r.dataset.done=1;n++;var good=k===c[1];if(good)ok++;
      bs.forEach(function(x){x.disabled=true});b.classList.add('on');r.classList.add(good?'ok':'bad');
      r.appendChild(H('div','why',(good?'Dobrze. ':'To cecha '+KAT[c[1]]+'. ')+c[2]));sc.textContent='Wynik: '+ok+' / '+n+(n===list.length?' — gotowe.':'')};r.appendChild(b);return b});
    wrap.appendChild(r)});
  el.appendChild(wrap);el.appendChild(sc);
  el.appendChild(btn('Od nowa',function(){el.innerHTML='';REG['szuflady-cech'].mount(el,o)}))}});
})();
