try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function audit(){const src=C.SOURCE_REGISTRY?.audit?.()||{};const ap=C.ATOMIC_PROPS_AUDIT?.audit?.()||{};const iso=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{};const th=C.THERMO_REFERENCE?.audit?.()||{};const el=C.ELECTRO_REFERENCE?.audit?.()||{};const ra=C.REACTION_SCIENCE_AUDIT?.audit?.()||{};return {version:'2.66',sourceRegistry:src,atomicProps:ap,isotopes:iso,thermo:th,electro:el,reactions:ra,scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI66-001',name:'source registry coherent',ok:a.sourceRegistry.sources>=5&&a.sourceRegistry.allHaveId&&a.sourceRegistry.allHaveScope,detail:JSON.stringify(a.sourceRegistry)},{id:'SCI66-002',name:'atomic inventory remains 118 when present',ok:!a.atomicProps.elements||a.atomicProps.elements===118,detail:String(a.atomicProps.elements||0)},{id:'SCI66-003',name:'scientific gate remains conservative',ok:a.scientificGate===false,detail:'blocked until reference-grade completion'}];}
C.REFERENCE_AUDIT_V266={version:'2.66',audit,regression};E.modules=E.modules||{};E.modules.REFERENCE_AUDIT_V266='2.66';E.registry=E.registry||{};E.registry.REFERENCE_AUDIT_V266={layer:'AUDIT',owner:'CHE.REFERENCE_AUDIT_V266'};
})(window);

} catch (err) {
  try { console.warn('[CHE module 100]', err && err.message ? err.message : err); } catch(_){}
}

