
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var keys=['meltingPoint','boilingPoint','density','stateSTP','electronegativityPauling','electronAffinity','ionizationEnergies'];
  var added=0, skipped=0;
  Object.keys(fill).forEach(function(sym){
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var cur=D.ATOMIC_PROPS[sym]||{};
    var src=fill[sym];
    var changed=false;
    keys.forEach(function(k){
      if((cur[k]==null||cur[k]==='') && src[k]!=null){ cur[k]=src[k]; changed=true; }
    });
    if(!cur.provenance) cur.provenance=src.provenance;
    if(changed){ D.ATOMIC_PROPS[sym]=cur; added++; }
    else skipped++;
    if(D.ATOMIC_PROFILES&&D.ATOMIC_PROFILES[sym]){
      D.ATOMIC_PROFILES[sym].properties=Object.assign({}, D.ATOMIC_PROFILES[sym].properties, cur);
      if(changed) D.ATOMIC_PROFILES[sym].status='REF_PARTIAL';
    }
  });
  C.REF_ATOMIC_V0100={version:'1.00',symbols:Object.keys(fill).length,filled:added,unchanged:skipped,radii:'NOT_IN_SOURCE',scientificGate:'PARTIAL_WIKIPEDIA_SET'};
})(typeof window!=='undefined'?window:globalThis);
