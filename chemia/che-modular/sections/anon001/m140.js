try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.audit?.()||{},r=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[],d=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[];const checks=[...r,...d];return {version:'2.77',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,gate:a.scientificGate===true,summary:{reaction:a.reactions,atomic:a.atomic,isotopes:a.isotopes}};}C.FULL_REGRESSION_V277={version:'2.77',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V277='2.77';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V277={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V277',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_LESSON_RECONCILIATION']};E.version='2.77';E.dataVersion='2.77';E.contractVersion='2.77';E.schemaVersion='2.77';if(E.PUBLIC)E.PUBLIC.version='2.77';if(E.RUNTIME)E.RUNTIME.version='2.77';
})(window);

} catch (err) {
  try { console.warn('[CHE module 140]', err && err.message ? err.message : err); } catch(_){}
}

