

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const els=Array.isArray(D.ELEMENTS_118)?D.ELEMENTS_118:[];
const props=D.ATOMIC_PROPS||{};
const required=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
const optional=['ionicRadius','electronegativityMulliken','polarizability','atomicVolume','oxidationStates','color','discovery'];
function completeness(p){
  const present=required.filter(k=>p&&p[k]!==undefined&&p[k]!==null&&(Array.isArray(p[k])?p[k].length>0:true));
  return {required:required.length,present:present.length,missing:required.filter(k=>!present.includes(k)),complete:present.length===required.length};
}
const records=els.map(e=>{
  const p=props[e.s]||{};
  const c=completeness(p);
  return {z:e.z,s:e.s,name:e.n,mass:e.mass,period:e.p,group:e.g,block:e.block,
    electronegativity:p.electronegativityPauling??e.en,properties:p,coverage:c,
    status:c.complete?'REFERENCE_CANDIDATE':'PARTIAL',
    provenance:p.provenance||null};
});
const bySymbol={};records.forEach(r=>{bySymbol[r.s]=r;});
D.ATOMIC_PROFILES=bySymbol;
D.ATOMIC_DATA_REQUIREMENTS={required:[...required],optional:[...optional],
  rule:'Brak wartości oznacza brak danych w bieżącym źródle roboczym; null nie jest wartością zastępczą.'};
function audit(){
 const complete=records.filter(r=>r.coverage.complete);
 const missing=records.filter(r=>!r.coverage.complete);
 const provenanceComplete=records.filter(r=>r.provenance&&r.provenance.source&&r.provenance.reference&&r.provenance.scope);
 const fieldCoverage={};
 [...required,...optional].forEach(k=>fieldCoverage[k]=records.filter(r=>r.properties?.[k]!==undefined&&r.properties?.[k]!==null).length);
 return {total:records.length,complete:complete.length,partial:missing.length,provenanceComplete:provenanceComplete.length,
   referenceReady:complete.filter(r=>r.provenance&&r.provenance.source&&r.provenance.reference&&r.provenance.scope).length,
   fieldCoverage,missing:missing.map(r=>({z:r.z,s:r.s,missing:r.coverage.missing}))};
}
C.DATA_COVERAGE={version:'2.58',required,optional,records:()=>records.map(r=>({...r,properties:{...r.properties}})),audit,bySymbol};
E.modules=E.modules||{};E.modules.DATA_COVERAGE='2.58';
E.registry=E.registry||{};E.registry.DATA_COVERAGE={layer:'AUDIT/DATA',owner:'CHE.DATA_COVERAGE',role:'mapa kompletności 118 rekordów i provenance bez zastępowania braków fikcyjnymi wartościami',depends:['DATA','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 80]', err && err.message ? err.message : err); } catch(_){}
}