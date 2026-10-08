try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.59';E.dataVersion='2.59';E.contractVersion='2.59';E.schemaVersion='2.59';E.modules=E.modules||{};E.modules.ATOMIC_WEIGHT_REFERENCE='2.59';E.modules.SCIENCE_INTEGRITY='2.59';E.registry=E.registry||{};E.registry.ATOMIC_WEIGHT_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ATOMIC_WEIGHT_REFERENCE',depends:['ELEMENTS_118']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};if(E.PUBLIC)E.PUBLIC.version='2.59';if(E.API_CONTRACT)E.API_CONTRACT.version='2.59';if(E.RUNTIME)E.RUNTIME.version='2.59';})(window);

} catch (err) {
  try { console.warn('[CHE module 85]', err && err.message ? err.message : err); } catch(_){}
}

