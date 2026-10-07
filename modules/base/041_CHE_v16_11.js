<script>
/* CHE v16.11 — uzupełnienie profili z danych już w pliku. Nie dopisuje promieni ani energii, których nie ma. */
(function(){
  var C=window.CHE; if(!C||!C.DATA) return;
  var D=C.DATA;
  var props=D.ATOMIC_PROPS||{};
  var profiles=D.ATOMIC_PROFILES||{};
  var copied=0;
  (D.ELEMENTS_118||[]).forEach(function(e){
    var p=props[e.s];
    if(p&&p.electronegativityPauling!=null) return;
    if(e.en==null) return;
    var rec=profiles[e.s];
    if(!rec) return;
    rec.properties=Object.assign({}, rec.properties, {electronegativityPauling:e.en, provenance:{source:'ELEMENTS_118.en', note:'skopiowane z układu w tym pliku, nie nowy pomiar'}});
    rec.electronegativity=e.en;
    rec.status='PARTIAL_FROM_TABLE';
    copied++;
  });
  C.PROFILE_FILL_V1611={version:'16.11',fullProfiles:23,elements:118,copiedEn:copied,note:'19,5% to 23 kompletne profile / 118. Reszta nie ma ATOMIC_PROPS. Skopiowano tylko elektroujemność, która już była w ELEMENTS_118.'};
})();
</script>

