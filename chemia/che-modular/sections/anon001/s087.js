

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};const old=C.SCIENCE_INTEGRITY;
function audit(){const base=old?.audit?.()||{};const ie=C.FIRST_IONIZATION_ENERGY?.audit?.()||{total:0,referenceCandidate:0,estimated:0,provenanceComplete:0};const issues=[...(base.issues||[])],warnings=[...(base.warnings||[])];if(ie.total!==118)issues.push({code:'IE_COVERAGE_NOT_118',actual:ie.total,expected:118});if(ie.provenanceComplete!==118)issues.push({code:'IE_PROVENANCE_INCOMPLETE',actual:ie.provenanceComplete,total:118});if(ie.estimated>0)warnings.push({code:'IE_ESTIMATED_PRESENT',count:ie.estimated,message:'Wartości oznaczone estimated nie są traktowane jako pomiar referencyjny.'});return {...base,issues,warnings,coverage:{...(base.coverage||{}),firstIonization:ie},scientificGate:false};}
function regression(){const ie=C.FIRST_IONIZATION_ENERGY?.audit?.()||{};return [
{id:'SCI60-001',name:'first ionization records 118/118',ok:ie.total===118,detail:String(ie.total)+'/118'},
{id:'SCI60-002',name:'IE provenance 118/118',ok:ie.provenanceComplete===118,detail:String(ie.provenanceComplete)+'/118'},
{id:'SCI60-003',name:'neutral-atom scope',ok:Object.values(D.FIRST_IONIZATION_ENERGY||{}).every(x=>x.provenance?.quantity==='first ionization energy of neutral atom'),detail:'neutral atom / first IE'},
{id:'SCI60-004',name:'estimated values explicitly flagged',ok:ie.estimated>0 && Object.values(D.FIRST_IONIZATION_ENERGY||{}).filter(x=>x.mode==='estimated').every(x=>x.provenance?.status==='ESTIMATED_OR_THEORETICAL'),detail:String(ie.estimated)+' estimated'},
{id:'SCI60-005',name:'scientific gate remains blocked',ok:audit().scientificGate===false,detail:'full scientific gate not yet eligible'}
];}
C.SCIENCE_INTEGRITY={version:'2.60',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.60';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};E.version='2.60';E.dataVersion='2.60';E.contractVersion='2.60';E.schemaVersion='2.60';if(E.PUBLIC)E.PUBLIC.version='2.60';if(E.API_CONTRACT)E.API_CONTRACT.version='2.60';if(E.RUNTIME)E.RUNTIME.version='2.60';
if(E.AUDIT?.run&&!E.AUDIT.__v260Wrapped){E.AUDIT.__v260Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v260=x;r.summary=r.summary||{};r.summary.v260={total:x.length,failed:x.filter(t=>!t.ok).length};r.v260=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};}
})(window);

} catch (err) {
  try { console.warn('[CHE module 87]', err && err.message ? err.message : err); } catch(_){}
}