try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const old=C.SCIENCE_INTEGRITY;
function audit(){
 const base=old?.audit?.()||{};
 const cov=C.DATA_COVERAGE?.audit?.()||{total:0,complete:0,referenceReady:0};
 const issues=[...(base.issues||[])],warnings=[...(base.warnings||[])];
 if(cov.total!==118) issues.push({code:'SCIENCE_ELEMENT_COVERAGE_NOT_118',actual:cov.total,expected:118});
 if(cov.complete<118) issues.push({code:'SCIENCE_ATOMIC_PROPS_INCOMPLETE',present:cov.complete,total:118});
 if(cov.referenceReady<118) issues.push({code:'SCIENCE_ATOMIC_PROVENANCE_INCOMPLETE',referenceReady:cov.referenceReady,total:118});
 warnings.push({code:'SCIENCE_DATA_POLICY',message:'Nieuzupełnione pola pozostają jawnie brakujące; silnik nie interpoluje ani nie fabrykuje wartości referencyjnych.'});
 return {...base,issues,warnings,coverage:{...(base.coverage||{}),atomicProps:{present:cov.complete,total:118,partial:cov.partial,referenceReady:cov.referenceReady},fields:cov.fieldCoverage},scientificGate:false};
}
function regression(){
 const a=audit();
 return [
  {id:'SCI58-001',name:'118 element profiles',ok:C.DATA_COVERAGE?.audit?.().total===118,detail:String(C.DATA_COVERAGE?.audit?.().total||0)+'/118'},
  {id:'SCI58-002',name:'no fabricated null replacement',ok:D.ATOMIC_DATA_REQUIREMENTS?.rule?.includes('Brak wartości'),detail:'braki są jawne'},
  {id:'SCI58-003',name:'scientific gate remains blocked',ok:a.scientificGate===false,detail:'incomplete data cannot PASS'},
  {id:'SCI58-004',name:'H/He phase correction retained',ok:D.ATOMIC_PROPS?.H?.crystalStructure==='phase-dependent'&&D.ATOMIC_PROPS?.He?.crystalStructure==='phase-dependent'}
 ];
}
C.SCIENCE_INTEGRITY={version:'2.58',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};
E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.58';
E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};
E.version='2.58';E.dataVersion='2.58';E.contractVersion='2.58';E.schemaVersion='2.58';
if(E.PUBLIC)E.PUBLIC.version='2.58';if(E.API_CONTRACT)E.API_CONTRACT.version='2.58';if(E.RUNTIME)E.RUNTIME.version='2.58';
if(E.AUDIT?.run&&!E.AUDIT.__v258Wrapped){const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v258=x;r.summary=r.summary||{};r.summary.v258={total:x.length,failed:x.filter(t=>!t.ok).length};r.v258=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};E.AUDIT.__v258Wrapped=true;}
})(window);

} catch (err) {
  try { console.warn('[CHE module 81]', err && err.message ? err.message : err); } catch(_){}
}

