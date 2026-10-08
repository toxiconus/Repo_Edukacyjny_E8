

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function run(){const groups=[
 ...(C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[]),
 ...(C.REACTION_EXPANSION_QUEUE?.regression?.()||[]),
 ...(C.REACTION_LESSON_RECONCILIATION?.regression?.()||[]),
 ...(C.REACTION_LESSON_CLASSIFIER?.regression?.()||[]),
 ...(C.REFERENCE_VERIFIED_V281?.regression?.()||[]),
 ...(C.ELECTRO_REFERENCE_CONTRACT_V281?.regression?.()||[])
 ];return {version:'2.81',ok:groups.every(x=>x.ok),failed:groups.filter(x=>!x.ok),checks:groups,scientificGate:false,verifiedPackage:C.REFERENCE_VERIFIED_V281?.audit?.()||null};}
C.FULL_REGRESSION_V281={version:'2.81',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V281='2.81';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V281={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V281',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_LESSON_RECONCILIATION','REACTION_LESSON_CLASSIFIER','REFERENCE_VERIFIED_V281','ELECTRO_REFERENCE_CONTRACT_V281']};E.version='2.81';E.dataVersion='2.81';E.contractVersion='2.81';E.schemaVersion='2.81';if(E.PUBLIC)E.PUBLIC.version='2.81';if(E.RUNTIME)E.RUNTIME.version='2.81';})(window);

} catch (err) {
  try { console.warn('[CHE module 151]', err && err.message ? err.message : err); } catch(_){}
}