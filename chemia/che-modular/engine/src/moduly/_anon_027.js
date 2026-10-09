
 
(function(g){
  var fill={};
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var added=0;
  Object.keys(fill).forEach(function(sym){
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var cur=D.ATOMIC_PROPS[sym]||{};
    if(cur.vdwRadius==null||cur.vdwRadius===''){
      cur.vdwRadius=fill[sym];
      cur.vdwProvenance={source:'Mantina et al. JPCA 2009, doi:10.1021/jp8111556',unit:'pm',note:'H Rowland-Taylor, reszta Bondi albo nowe Mantina'};
      D.ATOMIC_PROPS[sym]=cur; added++;
      if(D.ATOMIC_PROFILES&&D.ATOMIC_PROFILES[sym]) D.ATOMIC_PROFILES[sym].properties=Object.assign({}, D.ATOMIC_PROFILES[sym].properties, cur);
    }
  });
  C.REF_VDW_V0100={version:'1.00',added:added};
})(typeof window!=='undefined'?window:globalThis);

(function(){
  var C=window.CHE; if(!C||!C.DATA) return;
  var P=C.DATA.ATOMIC_PROPS||{};
  function apply(box){
    if(!box) return;
    Object.keys(P).forEach(function(sym){
      var card=box[sym]; if(!card) return;
      var p=P[sym];
      if(card.vdw==null && p.vdwRadius!=null) card.vdw=p.vdwRadius;
      if(card.mp==null && p.meltingPoint!=null) card.mp=p.meltingPoint;
      if(card.bp==null && p.boilingPoint!=null) card.bp=p.boilingPoint;
    });
  }
  apply(window.ENG); apply(window.DB);
  C.VISUAL_LINK=Object.assign(C.VISUAL_LINK||{}, {vdw:'Mantina2009',mp:true,bp:true});
})();
