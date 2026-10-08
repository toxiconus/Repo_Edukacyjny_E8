

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY;
function audit(){const b=prev?.audit?.()||{};const r=C.REFERENCE_AUDIT_V266?.audit?.()||{};return {...b,referenceAuditV266:r,scientificGate:false,warnings:[...(b.warnings||[]),{code:'V266_REFERENCE_SEMANTICS',message:'Reference source registry and atomic-property semantics are now explicit; scientific gate remains blocked until record-level verification is complete.'}]};}
function regression(){const p=prev?.regression?.()||[];return [...p,...(C.REFERENCE_AUDIT_V266?.regression?.()||[])];}
C.SCIENCE_INTEGRITY={version:'2.66',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.66';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REFERENCE_AUDIT_V266']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 101]', err && err.message ? err.message : err); } catch(_){}
}