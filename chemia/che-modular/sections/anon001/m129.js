try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const atom=C.ATOMIC_FIELD_AUDIT?.audit?.()||{};const nuc=C.NUCLIDE_REFERENCE_CONTRACT?.audit?.()||{};const eq=C.EQUILIBRIA_SEMANTICS?.audit?.()||{};const rx=C.REACTION_SCIENCE_CONTRACT_V274?.audit?.()||{};return {...base,version:'2.74',atomicFieldAudit:atom,nuclideContract:nuc,equilibriaSemantics:eq,reactionContract:rx,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V274_REFERENCE_COMPLETENESS',message:'Reference readiness remains field- and context-dependent; source presence alone is insufficient.'}]};}
function regression(){const a=audit();return [{id:'SCI74-001',name:'atomic field audit present',ok:(a.atomicFieldAudit?.elements||0)>=22},{id:'SCI74-002',name:'nuclide contract present',ok:Array.isArray(a.nuclideContract?.required)},{id:'SCI74-003',name:'equilibrium semantics present',ok:Object.keys(a.equilibriaSemantics?.types||{}).length>=5},{id:'SCI74-004',name:'reaction contract present',ok:Array.isArray(a.reactionContract?.required)},{id:'SCI74-005',name:'gate conservative',ok:a.scientificGate===false}];}
C.SCIENCE_INTEGRITY={version:'2.74',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.74';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['ATOMIC_FIELD_AUDIT','NUCLIDE_REFERENCE_CONTRACT','EQUILIBRIA_SEMANTICS','REACTION_SCIENCE_CONTRACT_V274']};E.version='2.74';E.dataVersion='2.74';E.contractVersion='2.74';E.schemaVersion='2.74';if(E.PUBLIC)E.PUBLIC.version='2.74';
})(window);

} catch (err) {
  try { console.warn('[CHE module 129]', err && err.message ? err.message : err); } catch(_){}
}

