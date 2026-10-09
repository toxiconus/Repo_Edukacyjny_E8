

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.58';E.dataVersion='2.58';E.contractVersion='2.58';E.schemaVersion='2.58';E.modules=E.modules||{};E.modules.DATA_COVERAGE='2.58';E.modules.SCIENCE_INTEGRITY='2.58';E.registry=E.registry||{};E.registry.DATA_COVERAGE={layer:'AUDIT/DATA',owner:'CHE.DATA_COVERAGE',depends:['DATA','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};if(E.PUBLIC)E.PUBLIC.version='2.58';if(E.API_CONTRACT)E.API_CONTRACT.version='2.58';if(E.RUNTIME)E.RUNTIME.version='2.58';})(window);

} catch (err) {
  try { console.warn('[CHE module 82]', err && err.message ? err.message : err); } catch(_){}
}