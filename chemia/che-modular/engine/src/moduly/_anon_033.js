
 
(function(g){
  var fill={"H":[1,-1],"Li":[1],"Na":[1],"K":[1],"Mg":[2],"Ca":[2],"Ba":[2],"Al":[3],"C":[-4,2,4],"N":[-3,1,2,3,4,5],"O":[-2,-1],"F":[-1],"Si":[4],"P":[-3,3,5],"S":[-2,4,6],"Cl":[-1,1,3,5,7],"Fe":[2,3],"Cu":[1,2],"Zn":[2],"Ag":[1],"Pb":[2,4],"Sn":[2,4],"Mn":[2,4,7],"Cr":[2,3,6]};
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var n=0;
  Object.keys(fill).forEach(function(sym){
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var cur=D.ATOMIC_PROPS[sym]||{};
    if(!cur.oxidationStates||!cur.oxidationStates.length){ cur.oxidationStates=fill[sym]; n++; }
    D.ATOMIC_PROPS[sym]=cur;
  });
  C.REF_OX_V0100={version:'1.00',added:n,note:'szkolne, nie pelna lista'};
})(typeof window!=='undefined'?window:globalThis);
