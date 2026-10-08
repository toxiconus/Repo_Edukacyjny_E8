

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.60';E.dataVersion='2.60';E.contractVersion='2.60';E.schemaVersion='2.60';E.modules=E.modules||{};E.modules.FIRST_IONIZATION_ENERGY='2.60';E.modules.SCIENCE_INTEGRITY='2.60';E.registry=E.registry||{};E.registry.FIRST_IONIZATION_ENERGY={layer:'DATA/REFERENCE',owner:'CHE.DATA.FIRST_IONIZATION_ENERGY',depends:['ELEMENTS_118','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};if(E.PUBLIC)E.PUBLIC.version='2.60';if(E.API_CONTRACT)E.API_CONTRACT.version='2.60';if(E.RUNTIME)E.RUNTIME.version='2.60';})(window);

} catch (err) {
  try { console.warn('[CHE module 88]', err && err.message ? err.message : err); } catch(_){}
}