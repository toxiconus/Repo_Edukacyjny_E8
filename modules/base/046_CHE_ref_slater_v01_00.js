<script>
/* CHE.ref.slater.v01.00 — empiryczny promien atomowy, Slater 1964, tylko puste pola. */
(function(g){
  var fill={"H":25,"Li":145,"Be":105,"B":85,"C":70,"N":65,"O":60,"F":50,"Na":180,"Mg":150,"Al":125,"Si":110,"P":100,"S":100,"Cl":100,"K":220,"Ca":180,"Sc":160,"Ti":140,"V":135,"Cr":140,"Mn":140,"Fe":140,"Co":135,"Ni":135,"Cu":135,"Zn":135,"Ga":130,"Ge":125,"As":115,"Se":115,"Br":115,"Rb":235,"Sr":200,"Y":180,"Zr":155,"Nb":145,"Mo":145,"Tc":135,"Ru":130,"Rh":135,"Pd":140,"Ag":160,"Cd":155,"In":155,"Sn":145,"Sb":145,"Te":140,"I":140,"Cs":260,"Ba":215,"La":195,"Ce":185,"Pr":185,"Nd":185,"Pm":185,"Sm":185,"Eu":185,"Gd":180,"Tb":175,"Dy":175,"Ho":175,"Er":175,"Tm":175,"Yb":175,"Lu":175,"Hf":155,"Ta":145,"W":135,"Re":135,"Os":130,"Ir":135,"Pt":135,"Au":135,"Hg":150,"Tl":190,"Pb":180,"Bi":160,"Po":190,"Ac":195,"Th":180,"Pa":180,"U":175,"Np":175,"Pu":175,"Am":175};
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var added=0, kept=0;
  Object.keys(fill).forEach(function(sym){
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var cur=D.ATOMIC_PROPS[sym]||{};
    if(cur.atomicRadius==null||cur.atomicRadius===''){
      cur.atomicRadius=fill[sym];
      cur.atomicRadiusProvenance={source:'Slater JCP 1964, 39, 3199',unit:'pm',note:'empiryczny, dokladnosc ok. 5 pm; nie nadpisuje istniejacych'};
      D.ATOMIC_PROPS[sym]=cur; added++;
      if(D.ATOMIC_PROFILES&&D.ATOMIC_PROFILES[sym]) D.ATOMIC_PROFILES[sym].properties=Object.assign({}, D.ATOMIC_PROFILES[sym].properties, cur);
    } else kept++;
  });
  C.REF_SLATER_V0100={version:'1.00',added:added,keptExisting:kept,missingInSource:'He Ne Ar Kr Xe Rn i ciezkie bez wartosci'};
})(typeof window!=='undefined'?window:globalThis);
</script>
