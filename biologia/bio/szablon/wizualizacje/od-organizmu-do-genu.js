/* viz: od-organizmu-do-genu — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var ICO=BIO.Lh["A.ICO"],chain=BIO.Lh["A.chain"],fx=BIO.Lh["A.fx"];
BIO.define('od-organizmu-do-genu',{opis:'Powiększenie: organizm → komórka → jądro → chromosom → DNA → gen (kliknij krok)',
mount:function(el,o){var nodes=[
  {key:'org',b:'organizm',s:'człowiek, roślina…',ico:ICO.organizm()},{key:'kom',b:'komórka',s:'ok. 10–100 µm',ico:ICO.komorka()},
  {key:'jad',b:'jądro',s:'główne miejsce DNA',ico:ICO.jadro()},{key:'chr',b:'chromosom',s:'DNA + białka',ico:ICO.chromosom()},
  {key:'dna',b:'DNA',s:'cząsteczka',ico:ICO.dna()},{key:'gen',b:'gen',s:'odcinek DNA',ico:ICO.gen(),k:true}];
  var c=chain(el,nodes,o),box=fx.infoBox();el.appendChild(box);
  fx.info(c,box,{
   org:['Organizm','Zbudowany z komórek. Cechy organizmu (fenotyp) powstają przy współudziale genów, środowiska i rozwoju.'],
   kom:['Komórka','Podstawowa jednostka życia. Niemal każda komórka ciała ma ten sam komplet DNA — ale korzysta z innych jego fragmentów.'],
   jad:['Jądro komórkowe','U eukariontów główne miejsce DNA. Oddzielone błoną jądrową, co pomaga organizować DNA i kontrolować jego odczyt.'],
   chr:['Chromosom','Struktura z jednej długiej cząsteczki DNA związanej z białkami (histonami). Komórka ciała człowieka ma 46 chromosomów (L012).'],
   dna:['DNA','Kwas deoksyrybonukleinowy — cząsteczka, w której kolejność zasad A, T, C, G niesie informację genetyczną.'],
   gen:['Gen','Odcinek DNA z informacją o produkcie — białku albo funkcjonalnym RNA. Nie cały DNA to geny.']},o.start||'gen')}});
})();
