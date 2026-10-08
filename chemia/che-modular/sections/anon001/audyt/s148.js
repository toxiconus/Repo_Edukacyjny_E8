

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[],q=C.REACTION_EXPANSION_QUEUE?.regression?.()||[],r=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[],c=C.REACTION_LESSON_CLASSIFIER?.regression?.()||[];const checks=[...a,...q,...r,...c];return {version:'2.80',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false,knowledgeBase:C.PROJECT_KNOWLEDGE_BASE?.audit?.()||null};}C.FULL_REGRESSION_V280={version:'2.80',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V280='2.80';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V280={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V280',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_EXPANSION_QUEUE','REACTION_LESSON_RECONCILIATION','REACTION_LESSON_CLASSIFIER','PROJECT_KNOWLEDGE_BASE']};E.version='2.80';E.dataVersion='2.80';E.contractVersion='2.80';E.schemaVersion='2.80';if(E.PUBLIC)E.PUBLIC.version='2.80';if(E.RUNTIME)E.RUNTIME.version='2.80';})(window);

} catch (err) {
  try { console.warn('[CHE module 148]', err && err.message ? err.message : err); } catch(_){}
}