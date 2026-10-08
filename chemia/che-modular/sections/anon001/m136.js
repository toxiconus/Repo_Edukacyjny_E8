try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const rx=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{};return {...base,version:'2.76',lessonReactionReconciliation:rx,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V276_RECONCILIATION_AUDIT_ONLY',message:'Lesson candidates are reconciled against canonical reactions without mutating the common reaction database.'}]};}
function regression(){const a=audit();const prior=typeof C.REACTION_LESSON_RECONCILIATION?.regression==='function'?C.REACTION_LESSON_RECONCILIATION.regression():[];return [...prior,{id:'SCI76-001',name:'gate conservative',ok:a.scientificGate===false}];}
C.SCIENCE_INTEGRITY={version:'2.76',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.76';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REACTION_LESSON_RECONCILIATION','LESSON_REACTION_CATALOG']};E.version='2.76';E.dataVersion='2.76';E.contractVersion='2.76';E.schemaVersion='2.76';if(E.PUBLIC)E.PUBLIC.version='2.76';if(E.RUNTIME)E.RUNTIME.version='2.76';
})(window);

} catch (err) {
  try { console.warn('[CHE module 136]', err && err.message ? err.message : err); } catch(_){}
}

