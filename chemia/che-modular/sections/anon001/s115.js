

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function run(){
 const r=[]; const add=(id,name,ok,detail)=>r.push({id,name,ok:!!ok,detail:detail||''});
 add('RT71-001','engine API exists',!!E.PUBLIC&&typeof E.PUBLIC==='object',typeof E.PUBLIC);
 add('RT71-002','common structure engine exists',!!C.STRUCTURE, C.STRUCTURE?'present':'missing');
 add('RT71-003','common molecule adapter exists',!!C.MOLECULE, C.MOLECULE?'present':'missing');
 add('RT71-004','science readiness audit exists',!!C.SCIENCE_RECORD_READINESS, C.SCIENCE_RECORD_READINESS?'present':'missing');
 const a=C.SCIENCE_RECORD_READINESS?.audit?.()||{};
 add('RT71-005','science gate explicit',a.scientificGate===false,String(a.scientificGate));
 return {ok:r.every(x=>x.ok),tests:r};
}
C.RUNTIME_SCIENCE_SELFTEST={version:'2.71',run};
if(E.AUDIT?.run&&!E.AUDIT.__v271Wrapped){E.AUDIT.__v271Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const s=C.SCIENCE_RECORD_READINESS?.regression?.()||[];const t=C.RUNTIME_SCIENCE_SELFTEST.run();r.groups=r.groups||{};r.groups.v271=[...s,...t.tests];r.summary=r.summary||{};r.summary.v271={total:s.length+t.tests.length,failed:[...s,...t.tests].filter(x=>!x.ok).length};r.v271=[...s,...t.tests];r.ok=!!r.ok&&r.v271.every(x=>x.ok);return r;};}
E.version='2.71';E.dataVersion='2.71';E.contractVersion='2.71';E.schemaVersion='2.71';if(E.PUBLIC)E.PUBLIC.version='2.71';if(E.API_CONTRACT)E.API_CONTRACT.version='2.71';if(E.RUNTIME)E.RUNTIME.version='2.71';
})(window);

} catch (err) {
  try { console.warn('[CHE module 115]', err && err.message ? err.message : err); } catch(_){}
}