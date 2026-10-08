try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.71';E.dataVersion='2.71';E.contractVersion='2.71';E.schemaVersion='2.71';E.modules=E.modules||{};E.modules.SCIENCE_RECORD_READINESS='2.71';E.modules.RUNTIME_SCIENCE_SELFTEST='2.71';E.registry=E.registry||{};E.registry.SCIENCE_RECORD_READINESS={layer:'AUDIT/SCIENCE',owner:'CHE.SCIENCE_RECORD_READINESS',depends:['ATOMIC_PROPS','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT','SOURCE_REGISTRY']};E.registry.RUNTIME_SCIENCE_SELFTEST={layer:'RUNTIME/AUDIT',owner:'CHE.RUNTIME_SCIENCE_SELFTEST',depends:['ENGINE','STRUCTURE','MOLECULE','SCIENCE_RECORD_READINESS']};if(E.PUBLIC)E.PUBLIC.version='2.71';if(E.API_CONTRACT)E.API_CONTRACT.version='2.71';if(E.RUNTIME)E.RUNTIME.version='2.71';})(window);

} catch (err) {
  try { console.warn('[CHE module 116]', err && err.message ? err.message : err); } catch(_){}
}

