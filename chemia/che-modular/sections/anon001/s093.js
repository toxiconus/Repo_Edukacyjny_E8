

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.64';E.dataVersion='2.64';E.contractVersion='2.64';E.schemaVersion='2.64';E.modules=E.modules||{};E.modules.ISOTOPE_REFERENCE='2.61';E.modules.THERMO_REFERENCE='2.62';E.modules.ELECTRO_REFERENCE='2.63';E.modules.REACTION_SCIENCE_AUDIT='2.64';E.modules.SCIENCE_INTEGRITY='2.64';E.registry=E.registry||{};E.registry.ISOTOPE_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ISOTOPES_REFERENCE',depends:['ISOTOPES','PROVENANCE']};E.registry.THERMO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.THERMO_REFERENCE',depends:['THERMOCHEM','PROVENANCE']};E.registry.ELECTRO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ELECTRO_REFERENCE',depends:['REDOX_POTENTIALS','PROVENANCE']};E.registry.REACTION_SCIENCE_AUDIT={layer:'AUDIT/REACTION',owner:'CHE.REACTION_SCIENCE_AUDIT',depends:['REACTIONS','REACTION_DATA','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT']};if(E.PUBLIC)E.PUBLIC.version='2.64';if(E.API_CONTRACT)E.API_CONTRACT.version='2.64';if(E.RUNTIME)E.RUNTIME.version='2.64';})(window);

} catch (err) {
  try { console.warn('[CHE module 93]', err && err.message ? err.message : err); } catch(_){}
}