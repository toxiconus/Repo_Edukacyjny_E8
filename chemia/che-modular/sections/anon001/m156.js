try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const checks=[...(C.REACTION_VERIFICATION_QUEUE_V282?.regression?.()||[]),...(C.ISOTOPE_SCIENCE_PACKAGE_V282?.regression?.()||[]),...(C.COMMON_DATA_AUDIT_V282?.regression?.()||[]),...(C.REFERENCE_VERIFIED_V281?.regression?.()||[]),...(C.ELECTRO_REFERENCE_CONTRACT_V281?.regression?.()||[])];return {version:'2.82',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false,knowledgeBase:C.PROJECT_KNOWLEDGE_BASE?.audit?.()||null};}C.FULL_REGRESSION_V282={version:'2.82',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V282='2.82';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V282={layer:'RUNTIME/AUDIT',owner:'CHE.RUNTIME.FULL_REGRESSION_V282',depends:['REACTION_VERIFICATION_QUEUE_V282','ISOTOPE_SCIENCE_PACKAGE_V282','COMMON_DATA_AUDIT_V282','PROJECT_KNOWLEDGE_BASE']};E.version='2.82';E.dataVersion='2.82';E.contractVersion='2.82';E.schemaVersion='2.82';if(E.PUBLIC)E.PUBLIC.version='2.82';if(E.RUNTIME)E.RUNTIME.version='2.82';})(window);

} catch (err) {
  try { console.warn('[CHE module 156]', err && err.message ? err.message : err); } catch(_){}
}

