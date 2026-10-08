try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=prev.audit?.()||{};const rr=C.REFERENCE_READINESS_MATRIX?.audit?.()||{};const ie=C.NIST_IE_AUDIT?.audit?.()||{};return {...base,version:'2.69',referenceReadiness:rr,nistIonizationEnergy:ie,scientificGate:false,warnings:[...(base.warnings||[]),{code:'REFERENCE_READINESS_REFINED',message:'Assigned source metadata is not counted as record-level verification.'}]};}
function regression(){const base=prev.regression?.()||[];return [...base,...(C.REFERENCE_READINESS_MATRIX?.regression?.()||[]),...(C.NIST_IE_AUDIT?.regression?.()||[]),{id:'SCI69-009',name:'scientific gate remains blocked',ok:audit().scientificGate===false}];}
C.SCIENCE_INTEGRITY=C.SCIENCE_INTEGRITY_V269={version:'2.69',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.69';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REFERENCE_READINESS_MATRIX','NIST_IE_AUDIT']};E.version='2.69';E.dataVersion='2.69';E.contractVersion='2.69';E.schemaVersion='2.69';if(E.PUBLIC)E.PUBLIC.version='2.69';if(E.API_CONTRACT)E.API_CONTRACT.version='2.69';if(E.RUNTIME)E.RUNTIME.version='2.69';
})(window);

} catch (err) {
  try { console.warn('[CHE module 111]', err && err.message ? err.message : err); } catch(_){}
}

