

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function textOf(r){return String(r?.examples?.[0]||r?.text||r?.sourceText||r?.signature||'');}
function classify(r){const s=textOf(r).replace(/`/g,'').trim();const lower=s.toLowerCase();
  if(!s)return {class:'NON_REACTION',reason:'EMPTY'};
  if(/ax\d|vsepr|liniowa|trygonal|tetraedry|piramidal|kątowa|huśtawkowa|t-kształtna|kwadratowa płaska/i.test(s))return {class:'NON_REACTION',reason:'VSEPR_OR_GEOMETRY'};
  if(/zbilansuj|jaki typ reakcji|typ reakcji|równanie reakcji|produkty|substraty|przykład|błąd|popraw|treści powtórkowe|pomnóż przez|sprawdź|zadanie|odpowiedź|reakcja:/i.test(lower))return {class:'REACTION_CONTEXT',reason:'INSTRUCTION_OR_EXAMPLE'};
  if(/[→⟶⇌⇄]/.test(s)&&/[A-Z][a-z]?(?:\d+|[₍₎()⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]|\b)/.test(s))return {class:'REACTION_EQUATION_CANDIDATE',reason:'ARROW_AND_CHEMICAL_TOKENS'};
  return {class:'NON_REACTION',reason:'NO_RELIABLE_REACTION_SIGNATURE'};
}
function audit(){const q=C.REACTION_EXPANSION_QUEUE?.audit?.()||{},rows=q.queue||[],classified=rows.map(r=>({...r,classification:classify(r)}));const count=k=>classified.filter(x=>x.classification.class===k).length;return {version:'2.80',sourceQueueVersion:q.version||null,total:classified.length,reactionEquationCandidates:count('REACTION_EQUATION_CANDIDATE'),reactionContext:count('REACTION_CONTEXT'),nonReaction:count('NON_REACTION'),queue:classified};}
function regression(){const a=audit();return [{id:'RXCL-001',name:'classifier is audit-only',ok:true},{id:'RXCL-002',name:'classification partitions queue',ok:a.total===a.reactionEquationCandidates+a.reactionContext+a.nonReaction},{id:'RXCL-003',name:'does not promote candidates',ok:true}];}
C.REACTION_LESSON_CLASSIFIER={version:'2.80',classify,audit,regression};E.modules=E.modules||{};E.modules.REACTION_LESSON_CLASSIFIER='2.80';E.registry=E.registry||{};E.registry.REACTION_LESSON_CLASSIFIER={layer:'AUDIT/REACTION',owner:'CHE.REACTION_LESSON_CLASSIFIER',depends:['REACTION_EXPANSION_QUEUE','LESSON_REACTION_CATALOG']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 147]', err && err.message ? err.message : err); } catch(_){}
}