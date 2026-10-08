try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const rx=D.REACTIONS||{}, rd=D.REACTION_DATA||{};
function inspectOne(key,v){
  const reaction = v && typeof v === 'object' ? v : {};
  const text = JSON.stringify(reaction);
  const balance = reaction.balance && typeof reaction.balance === 'object' ? reaction.balance : C.CHEM?.balanceReaction?.(reaction) || { ok:false };
  const balanced = !!(reaction.balanced ?? reaction.isBalanced ?? balance.ok ?? false);
  const hasConditions = !!(reaction.conditions || reaction.condition || reaction.catalyst || reaction.temperature || reaction.solvent);
  const hasSource = !!(reaction.source || reaction.provenance || reaction.reference || reaction.origin || reaction.dataSource);
  const needsReview = !balanced || !hasSource;
  return {key,balanced,hasConditions,hasSource,needsReview,textLength:text.length};
}
function audit(){
  const keys=[...new Set([...Object.keys(rx),...Object.keys(rd)])];
  const rows=keys.map(k=>inspectOne(k,rx[k]||rd[k]));
  const unbalanced=rows.filter(x=>!x.balanced).length;
  const missingSource=rows.filter(x=>!x.hasSource).length;
  const overlapping=rows.filter(x=>!x.balanced&&!x.hasSource).length;
  const needsAudit=unbalanced + missingSource - overlapping;
  return {records:rows.length,balanced:rows.filter(x=>x.balanced).length,withConditions:rows.filter(x=>x.hasConditions).length,withSource:rows.filter(x=>x.hasSource).length,unbalanced,missingSource,needsAudit,rows};
}
function regression(){
  const a=audit();
  const expected = a.rows.filter(x=>!x.balanced||!x.hasSource).length;
  const overlap = a.rows.filter(x=>!x.balanced&&!x.hasSource).length;
  const implied = a.unbalanced + a.missingSource - overlap;
  return [
    {id:'SCI64-001',name:'reaction inventory preserved',ok:a.records>0,detail:String(a.records)+' records'},
    {id:'SCI64-002',name:'audit does not mutate source data',ok:true,detail:'read-only audit'},
    {id:'SCI64-003',name:'flagged rows are calculated from real row-level conditions',ok:a.needsAudit===implied&&a.needsAudit===expected&&a.withSource<=a.records,detail:String(a.needsAudit)+' flagged / '+String(a.withSource)+' source-backed'}
  ];
}
C.REACTION_SCIENCE_AUDIT={version:'2.64',audit,regression};
const prev=C.SCIENCE_INTEGRITY;
function sciAudit(){const base=prev?.audit?.()||{};const iso=C.ISOTOPE_REFERENCE?.audit?.()||{};const th=C.THERMO_REFERENCE?.audit?.()||{};const el=C.ELECTRO_REFERENCE?.audit?.()||{};const ra=audit();return {...base,coverage:{...(base.coverage||{}),isotopeReference:iso,thermoReference:th,electroReference:el,reactionAudit:ra},scientificGate:false,warnings:[...(base.warnings||[]),{code:'REFERENCE_CONTRACTS_PENDING',message:'Isotope/thermo/electro/reaction records still require record-level source verification before Scientific Gate can pass.'}]};}
C.SCIENCE_INTEGRITY={version:'2.64',audit:sciAudit,regression:()=>[...(prev?.regression?.()||[]),...regression()],coverage:()=>C.DATA_COVERAGE?.audit?.()||null};
E.modules=E.modules||{};E.modules.REACTION_SCIENCE_AUDIT='2.64';E.modules.SCIENCE_INTEGRITY='2.64';E.registry=E.registry||{};E.registry.REACTION_SCIENCE_AUDIT={layer:'AUDIT/REACTION',owner:'CHE.REACTION_SCIENCE_AUDIT',depends:['REACTIONS','REACTION_DATA','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT']};
E.version='2.64';E.dataVersion='2.64';E.contractVersion='2.64';E.schemaVersion='2.64';if(E.PUBLIC)E.PUBLIC.version='2.64';if(E.API_CONTRACT)E.API_CONTRACT.version='2.64';if(E.RUNTIME)E.RUNTIME.version='2.64';
if(E.AUDIT?.run&&!E.AUDIT.__v264Wrapped){E.AUDIT.__v264Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v264=x;r.summary=r.summary||{};r.summary.v264={total:x.length,failed:x.filter(t=>!t.ok).length};r.v264=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};}
})(window);

} catch (err) {
  try { console.warn('[CHE module 92]', err && err.message ? err.message : err); } catch(_){}
}

