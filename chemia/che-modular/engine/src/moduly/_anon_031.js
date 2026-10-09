
(function(){
  function fillCard(card,sym){
    var P=window.CHE&&CHE.DATA&&CHE.DATA.ATOMIC_PROPS&&CHE.DATA.ATOMIC_PROPS[sym];
    var I=window.CHE&&CHE.DATA&&CHE.DATA.ISOTOPES&&CHE.DATA.ISOTOPES[sym];
    if(!card||!P) return;
    if(card.mp==null&&P.meltingPoint!=null) card.mp=P.meltingPoint;
    if(card.bp==null&&P.boilingPoint!=null) card.bp=P.boilingPoint;
    if(card.cs==null&&P.crystalStructure) card.cs=P.crystalStructure;
    if(card.ar==null&&P.atomicRadius!=null) card.ar=P.atomicRadius;
    if(card.cr==null&&P.covalentRadius!=null) card.cr=P.covalentRadius;
    if(card.vdw==null&&P.vdwRadius!=null) card.vdw=P.vdwRadius;
    if(card.en==null&&P.electronegativityPauling!=null) card.en=P.electronegativityPauling;
    if((!card.iso||!card.iso.length)&&I&&I.length) card.iso=I;
  }
  if(window.DB) Object.keys(window.DB).forEach(function(s){fillCard(window.DB[s],s)});
  if(window.ENG) Object.keys(window.ENG).forEach(function(s){fillCard(window.ENG[s],s)});
})();
