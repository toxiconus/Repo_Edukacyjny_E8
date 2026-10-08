try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function describe(m){
 const x=C.STRUCTURE.canonicalize(m||{}),f=C.REPRESENTATION.formula(x).value,G=C.STRUCTURE.detectFunctionalGroups(x).value||[];
 const groups=G.map(q=>q.type), carbon=(x.atoms||[]).filter(a=>a.element==='C').length;
 const fgName={carboxyl:'kwas karboksylowy',hydroxyl:'alkohol/fenol',carbonyl:'związek karbonylowy',aldehyde:'aldehyd',ketone:'keton'};
 let label=groups.length?fgName[groups[0]]||`związek z grupą ${groups[0]}`:'związek nieorganiczny';
 if(carbon===1&&groups.includes('carboxyl'))label='kwas metanowy';
 if(carbon===2&&groups.includes('carboxyl'))label='kwas etanowy';
 return ok({formula:f.formula,label,functionalGroups:groups,carbonCount:carbon,systematic:{family:groups[0]||null,chainLength:carbon||null},complete:false,scope:'graph-derived structural nomenclature; not full IUPAC'});
}
function validate(m){const d=describe(m);return ok({ok:!!d.value.formula,complete:false,scope:d.value.scope})}
C.NOMENCLATURE={version:'2.33',describe,validate};
})(window);

} catch (err) {
  try { console.warn('[CHE module 47]', err && err.message ? err.message : err); } catch(_){}
}

