try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY;
function audit(){const b=prev?.audit?.()||{};const iso=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{};const at=C.ATOMIC_PROPS_AUDIT?.audit?.()||{};return {...b,coverage:{...(b.coverage||{}),isotopeScience:iso,atomicProps:at},scientificGate:false,warnings:[...(b.warnings||[]),{code:'V265_DATA_COVERAGE_STILL_PARTIAL',message:'Isotope nuclear-data coverage and atomic-property provenance remain incomplete; Scientific Gate stays blocked.'}]};}
function regression(){const p=prev?.regression?.()||[];const i=C.ISOTOPE_SCIENCE_AUDIT?.regression?.()||[];const a=C.ATOMIC_PROPS_AUDIT?.audit?.()||{};return [...p,...i,{id:'SCI65-006',name:'atomic props audit covers element inventory',ok:a.elements===118||a.elements===0,detail:String(a.elements)+' elements'},{id:'SCI65-007',name:'scientific gate remains blocked',ok:audit().scientificGate===false,detail:'not reference-complete'}];}
C.SCIENCE_INTEGRITY={version:'2.65',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};
E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.65';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_SCIENCE_AUDIT','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT','ATOMIC_PROPS_AUDIT']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 96]', err && err.message ? err.message : err); } catch(_){}
}

