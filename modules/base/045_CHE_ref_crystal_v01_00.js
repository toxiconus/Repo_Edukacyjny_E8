<script>
/* CHE.ref.crystal.v01.00 — typ sieci tylko gdy pole puste. Typowe struktury, nie nowy pomiar. */
(function(g){
  var fill={"Li":"bcc","Na":"bcc","K":"bcc","Rb":"bcc","Cs":"bcc","Fe":"bcc","Cr":"bcc","V":"bcc","Mo":"bcc","W":"bcc","Nb":"bcc","Ta":"bcc","Be":"hcp","Mg":"hcp","Ti":"hcp","Zn":"hcp","Zr":"hcp","Cd":"hcp","Co":"hcp","Al":"fcc","Ca":"fcc","Ni":"fcc","Cu":"fcc","Ag":"fcc","Au":"fcc","Pt":"fcc","Pb":"fcc","Pd":"fcc","Rh":"fcc","Ir":"fcc","Sr":"fcc","Ne":"fcc","Ar":"fcc","Kr":"fcc","Xe":"fcc","C":"graphite/diamond","Si":"diamond","Ge":"diamond","Sn":"tetragonal"};
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var added=0;
  Object.keys(fill).forEach(function(sym){
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var cur=D.ATOMIC_PROPS[sym]||{};
    if(cur.crystalStructure==null||cur.crystalStructure===''){
      cur.crystalStructure=fill[sym];
      cur.crystalProvenance={source:'common lattice',note:'bcc/fcc/hcp/diamond; pole bylo puste'};
      D.ATOMIC_PROPS[sym]=cur; added++;
      if(D.ATOMIC_PROFILES&&D.ATOMIC_PROFILES[sym]) D.ATOMIC_PROFILES[sym].properties=Object.assign({}, D.ATOMIC_PROFILES[sym].properties, cur);
    }
  });
  C.REF_CRYSTAL_V0100={version:'1.00',added:added,scientificGate:'PARTIAL'};
})(typeof window!=='undefined'?window:globalThis);
</script>
