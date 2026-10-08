try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
 
function atomicWeightAudit(){
  const r=Object.values(D.ATOMIC_WEIGHT_REFERENCE?.records||{});
  return {
    total:r.length,
    value:r.filter(x=>x.mode==='value').length,
    range:r.filter(x=>x.mode==='range').length,
    none:r.filter(x=>x.mode==='none').length,
    provenanceComplete:r.filter(x=>x.provenance?.source&&x.provenance?.reference&&x.provenance?.scope&&x.provenance?.unit).length
  };
}
function isotopeAudit(){
  const src=D.ISOTOPES_REFERENCE||{};
  const rows=Object.values(src).flatMap(x=>Array.isArray(x?.isotopes)?x.isotopes:[]);
  const req=['massNumber','atomicMass','stable','halfLife','decayMode','daughter','nuclearSpin'];
  const statusCounts={EXPERIMENTAL:0,ESTIMATED:0,UNKNOWN:0};
  rows.forEach(x=>{const st=String(x.status||x.source?.status||'UNKNOWN').toUpperCase(); if(statusCounts[st]!=null)statusCounts[st]++;else statusCounts.UNKNOWN++;});
  const requiredPresent=rows.filter(x=>req.filter(k=>x[k]!=null).length>=2).length;
  return {elements:Object.keys(src).length,isotopes:rows.length,requiredPartial:requiredPresent,sourceComplete:rows.filter(x=>x.source?.source&&x.source?.reference&&x.source?.url).length,statusCounts};
}
function equilibriumAudit(){
  const r=Object.values(C.DATA?.EQUILIBRIA_REFERENCE?.records||{});
  return {records:r.length,types:{Ka:r.filter(x=>x.type==='Ka').length,Kb:r.filter(x=>x.type==='Kb').length,pKa:r.filter(x=>x.type==='pKa').length,Ksp:r.filter(x=>x.type==='Ksp').length,solubility:r.filter(x=>x.type==='solubility').length},verified:r.filter(x=>String(x.status).toUpperCase()==='VERIFIED').length};
}
function reactionAudit(){
  const r=D.REACTIONS||{}; const rows=Object.entries(r);
  const fields=['conditions','catalyst','solvent','temperature','pressure','enthalpy','exoEndo','safety','bhp','source','provenance'];
  const coverage={}; fields.forEach(f=>coverage[f]=rows.filter(([,x])=>x&&x[f]!=null&&x[f]!=='').length);
  const legacyShape=rows.filter(([,x])=>Array.isArray(x?.reactants)&&Array.isArray(x?.products)).length;
  const external=C.REACTION_SCIENCE_AUDIT?.audit?.()||{};
  return {records:rows.length,legacyShape,fieldCoverage:coverage,externalAudit:external};
}
function audit(){
  const aw=atomicWeightAudit(),iso=isotopeAudit(),eq=equilibriumAudit(),rx=reactionAudit();
  const issues=[];
  if(aw.total!==118)issues.push({code:'V270_ATOMIC_WEIGHT_COUNT',actual:aw.total,expected:118});
  if(aw.value!==70||aw.range!==14||aw.none!==34)issues.push({code:'V270_CIAAW_MODE_COUNTS',actual:{value:aw.value,range:aw.range,none:aw.none},expected:{value:70,range:14,none:34}});
  if(aw.provenanceComplete!==118)issues.push({code:'V270_ATOMIC_WEIGHT_PROVENANCE',actual:aw.provenanceComplete,expected:118});
  if(iso.elements<1)issues.push({code:'V270_ISOTOPE_REFERENCE_EMPTY'});
  return {ok:issues.length===0,issues,atomicWeight:aw,isotopes:iso,equilibria:eq,reactions:rx,scientificGate:false};
}
function regression(){const a=audit();return [
  {id:'SCI70-001',name:'CIAAW inventory 118/118',ok:a.atomicWeight.total===118,detail:a.atomicWeight.total+'/118'},
  {id:'SCI70-002',name:'CIAAW modes preserved',ok:a.atomicWeight.value===70&&a.atomicWeight.range===14&&a.atomicWeight.none===34,detail:JSON.stringify({value:a.atomicWeight.value,range:a.atomicWeight.range,none:a.atomicWeight.none})},
  {id:'SCI70-003',name:'CIAAW provenance 118/118',ok:a.atomicWeight.provenanceComplete===118,detail:a.atomicWeight.provenanceComplete+'/118'},
  {id:'SCI70-004',name:'isotope layer non-empty',ok:a.isotopes.isotopes>0,detail:a.isotopes.isotopes+' isotope records'},
  {id:'SCI70-005',name:'equilibrium contract exists',ok:!!C.DATA?.EQUILIBRIA_REFERENCE,detail:a.equilibria.records+' records'},
  {id:'SCI70-006',name:'reaction source shape preserved',ok:a.reactions.legacyShape===a.reactions.records,detail:a.reactions.legacyShape+'/'+a.reactions.records},
  {id:'SCI70-007',name:'Scientific Gate remains blocked',ok:a.scientificGate===false,detail:'reference completeness is not inferred'}
];}
 
C.ATOMIC_WEIGHT_REFERENCE_AUDIT_V270={version:'2.70',audit:atomicWeightAudit};
C.REFERENCE_DATA_PACKAGE_AUDIT={version:'2.70',audit,regression};
E.modules=E.modules||{};E.modules.REFERENCE_DATA_PACKAGE_AUDIT='2.70';
E.registry=E.registry||{};E.registry.REFERENCE_DATA_PACKAGE_AUDIT={layer:'AUDIT',owner:'CHE.REFERENCE_DATA_PACKAGE_AUDIT',depends:['ATOMIC_WEIGHT_REFERENCE','ISOTOPES_REFERENCE','EQUILIBRIA_REFERENCE','REACTIONS','REACTION_SCIENCE_AUDIT']};
const prev=C.SCIENCE_INTEGRITY;
if(prev&&!prev.__v270Wrapped){const oldAudit=prev.audit.bind(prev);prev.__v270Wrapped=true;prev.audit=function(){const base=oldAudit();const p=audit();return {...base,issues:[...(base.issues||[]),...(p.issues||[])],warnings:[...(base.warnings||[]),{code:'V270_REFERENCE_PACKAGE',message:'Atomic weights, isotopes, equilibria and reactions are audited together; missing fields remain missing.'}],coverage:{...(base.coverage||{}),referencePackage:p},scientificGate:false};};}
E.version='2.70';E.dataVersion='2.70';E.contractVersion='2.70';E.schemaVersion='2.70';if(E.PUBLIC)E.PUBLIC.version='2.70';if(E.API_CONTRACT)E.API_CONTRACT.version='2.70';if(E.RUNTIME)E.RUNTIME.version='2.70';
})(window);

} catch (err) {
  try { console.warn('[CHE module 112]', err && err.message ? err.message : err); } catch(_){}
}

