

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const cat=C.LESSON_REACTION_CATALOG?.audit?.()||{};const atom=C.ATOMIC_FIELD_READINESS_INDEX?.audit?.()||{};return {...base,version:'2.75',lessonReactionCatalog:cat,atomicFieldReadiness:atom,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V275_LESSON_REACTION_CATALOG_CANDIDATE_ONLY',message:'Lesson reaction extraction is audit-only until each candidate is reconciled with canonical reaction data.'}]};}
function regression(){const a=audit();return [{id:'SCI75-001',name:'lesson catalog present',ok:(a.lessonReactionCatalog?.records||0)>0},{id:'SCI75-002',name:'atomic readiness index present',ok:(a.atomicFieldReadiness?.fields||[]).length===11},{id:'SCI75-003',name:'gate conservative',ok:a.scientificGate===false}];}
C.SCIENCE_INTEGRITY={version:'2.75',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.75';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['LESSON_REACTION_CATALOG','ATOMIC_FIELD_READINESS_INDEX']};E.version='2.75';E.dataVersion='2.75';E.contractVersion='2.75';E.schemaVersion='2.75';if(E.PUBLIC)E.PUBLIC.version='2.75';
})(window);

} catch (err) {
  try { console.warn('[CHE module 133]', err && err.message ? err.message : err); } catch(_){}
}