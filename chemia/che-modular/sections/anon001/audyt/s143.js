

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[],r=C.REACTION_EXPANSION_QUEUE?.regression?.()||[],b=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[];const checks=[...a,...r,...b];return {version:'2.78',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V278={version:'2.78',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V278='2.78';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V278={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V278',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_EXPANSION_QUEUE','REACTION_LESSON_RECONCILIATION']};E.version='2.78';E.dataVersion='2.78';E.contractVersion='2.78';E.schemaVersion='2.78';if(E.PUBLIC)E.PUBLIC.version='2.78';if(E.RUNTIME)E.RUNTIME.version='2.78';
})(window);

} catch (err) {
  try { console.warn('[CHE module 143]', err && err.message ? err.message : err); } catch(_){}
}