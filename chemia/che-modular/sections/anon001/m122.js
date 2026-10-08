try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const exp=C.REFERENCE_EXPANSION_V273?.audit?.()||{};const eq=C.EQUILIBRIA_VERIFIED_2026?.audit?.()||{};const rx=C.REACTION_AUDIT_V273?.audit?.()||{};return {...base,version:'2.73',referenceExpansion:exp,equilibriaVerified:eq,reactionAuditV273:rx,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V273_REAL_REFERENCE_RECORDS',message:'New verified records are isolated from legacy data; computed equilibrium constants are explicitly marked COMPUTED.'}]};}
function regression(){const a=audit();return [...(typeof prev.regression==='function'?prev.regression():[]),{id:'SCI73-001',name:'verified thermo records present',ok:(a.referenceExpansion?.thermo?.length||0)>=3,detail:String(a.referenceExpansion?.thermo?.length||0)},{id:'SCI73-002',name:'verified equilibrium records present',ok:(a.equilibriaVerified?.verified||0)>=3,detail:String(a.equilibriaVerified?.verified||0)},{id:'SCI73-003',name:'reaction audit present',ok:!!a.reactionAuditV273,detail:String(a.reactionAuditV273?.records||0)},{id:'SCI73-004',name:'gate remains conservative',ok:a.scientificGate===false,detail:'blocked'}];}
C.SCIENCE_INTEGRITY={version:'2.73',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.73';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REFERENCE_EXPANSION_V273','EQUILIBRIA_VERIFIED_2026','REACTION_AUDIT_V273']};
E.version='2.73';E.dataVersion='2.73';E.contractVersion='2.73';E.schemaVersion='2.73';if(E.PUBLIC)E.PUBLIC.version='2.73';if(E.API_CONTRACT)E.API_CONTRACT.version='2.73';if(E.RUNTIME)E.RUNTIME.version='2.73';
})(window);

} catch (err) {
  try { console.warn('[CHE module 122]', err && err.message ? err.message : err); } catch(_){}
}

