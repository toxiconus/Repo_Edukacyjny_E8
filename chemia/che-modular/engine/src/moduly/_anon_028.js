
 
(function(g){
  var fill={"H":110,"He":140,"Li":181,"Be":153,"B":192,"C":170,"N":155,"O":152,"F":147,"Ne":154,"Na":227,"Mg":173,"Al":184,"Si":210,"P":180,"S":180,"Cl":175,"Ar":188,"K":275,"Ca":231,"Ga":187,"Ge":211,"As":185,"Se":190,"Br":183,"Kr":202,"Rb":303,"Sr":249,"In":193,"Sn":217,"Sb":206,"Te":206,"I":198,"Xe":216,"Cs":343,"Ba":268,"Tl":196,"Pb":202,"Bi":207,"Po":197,"At":202,"Rn":220,"Fr":348,"Ra":283};
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var added=0;
  Object.keys(fill).forEach(function(sym){
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var cur=D.ATOMIC_PROPS[sym]||{};
    if(cur.vdwRadius==null||cur.vdwRadius===''){
      cur.vdwRadius=fill[sym];
      cur.vdwProvenance={source:'Mantina et al. JPCA 2009, doi:10.1021/jp8111556',unit:'pm'};
      D.ATOMIC_PROPS[sym]=cur; added++;
      if(D.ATOMIC_PROFILES&&D.ATOMIC_PROFILES[sym]) D.ATOMIC_PROFILES[sym].properties=Object.assign({}, D.ATOMIC_PROFILES[sym].properties, cur);
    }
  });
  C.REF_VDW_V0100={version:'1.00',added:added,symbols:Object.keys(fill).length};
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
