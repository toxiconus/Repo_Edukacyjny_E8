

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY_V266||C.SCIENCE_INTEGRITY||{};function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const ap=C.ATOMIC_PROVENANCE?.audit?.()||{};const eq=C.EQUILIBRIA_REFERENCE?.audit?.()||{};return {...base,version:'2.67',atomicProvenance:ap,equilibria:eq,scientificGate:false};}function regression(){const a=audit();return [{id:'SCI67-001',name:'atomic provenance contract',ok:!!a.atomicProvenance},{id:'SCI67-002',name:'equilibria contract',ok:!!a.equilibria},{id:'SCI67-003',name:'scientific gate remains explicit',ok:a.scientificGate===false}];}C.SCIENCE_INTEGRITY_V267={version:'2.67',audit,regression};C.SCIENCE_INTEGRITY=C.SCIENCE_INTEGRITY_V267;E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.67';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['ATOMIC_PROVENANCE','EQUILIBRIA_REFERENCE']};E.version='2.67';E.dataVersion='2.67';E.contractVersion='2.67';E.schemaVersion='2.67';if(E.PUBLIC)E.PUBLIC.version='2.67';if(E.API_CONTRACT)E.API_CONTRACT.version='2.67';if(E.RUNTIME)E.RUNTIME.version='2.67';})(window);

} catch (err) {
  try { console.warn('[CHE module 105]', err && err.message ? err.message : err); } catch(_){}
}