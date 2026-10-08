

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const clone=o=>JSON.parse(JSON.stringify(o));
function publicShape(){
  const required=['ENGINE','DATA','ATOM','MOLECULE','REACTION','STRUCTURE','VALIDATOR','ISOMORPHISM','MAPPING','TRANSFORM','REACTION_VALIDATOR','REPRESENTATION','GEOMETRY_CONTRACT','NOMENCLATURE','SCIENCE','SPECTRA_CONTRACT','ELECTRONIC_MODEL','MECHANISM_GRAPH','PROVENANCE','EDITOR','UI_BRIDGE','CV','EDUCATIONAL_VIEWS'];
  const missing=required.filter(k=>!C[k]);
  return {required,missing,ok:missing.length===0};
}
function apiAudit(){
  const issues=[], add=(id,name,ok,detail)=>{if(!ok)issues.push({id,name,detail:detail||''});};
  add('API-101','public shape',publicShape().ok,publicShape().missing.join(','));
  add('API-102','ENGINE version sync',E.version===E.contractVersion&&E.version===E.schemaVersion);
  add('API-103','PUBLIC version sync',!E.PUBLIC||E.PUBLIC.version===E.version);
  add('API-104','success envelope',C.OK?.(1)?.ok===true&&'value' in C.OK(1));
  const er=C.FAIL?.('CHE.E.TEST','x',{a:1});
  add('API-105','error envelope',er?.ok===false&&!!er.error?.code&&!!er.error?.message);
  add('API-106','no private registry owner leakage',!E.registry||Object.values(E.registry).every(x=>x&&typeof x.owner==='string'));
  return {ok:issues.length===0,issues};
}
function runtimeSnapshot(doc){
  const d=doc||g.document;
  return {ok:!!d,readyState:d?.readyState||null,controlledHarness:(d?.scripts?.length||0)===0,domContentLoaded:!!d?.body,scriptCount:d?.scripts?.length||0,
    viewport:{width:g.innerWidth||0,height:g.innerHeight||0},hasRAF:typeof g.requestAnimationFrame==='function',
    hasPerformance:typeof g.performance?.now==='function'};
}
function crossDomain(){
  const out=[], add=(id,name,good,detail)=>out.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  const ST=C.STRUCTURE, REP=C.REPRESENTATION, MAP=C.MAPPING, RV=C.REACTION_VALIDATOR, UI=C.UI_BRIDGE, EM=C.ELECTRONIC_MODEL;
  const h=ST.createMolecule({id:'e-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
  const acid=ST.createMolecule({id:'e-acid',atoms:[{id:'C1',element:'C'},{id:'C2',element:'C'},{id:'H1',element:'H'},{id:'H2',element:'H'},{id:'H3',element:'H'},{id:'O1',element:'O'},{id:'O2',element:'O'},{id:'H4',element:'H'}],bonds:[{id:'cc',atomA:'C1',atomB:'C2',order:1},{id:'ch1',atomA:'C1',atomB:'H1',order:1},{id:'ch2',atomA:'C1',atomB:'H2',order:1},{id:'ch3',atomA:'C1',atomB:'H3',order:1},{id:'co1',atomA:'C2',atomB:'O1',order:2},{id:'co2',atomA:'C2',atomB:'O2',order:1},{id:'oh',atomA:'O2',atomB:'H4',order:1}]});
  const v=ST.validate(h), rep=REP.representations(h), snap=UI.snapshot(h);
  add('P-E-001','DATA→STRUCTURE',!!v?.ok);
  add('P-E-002','STRUCTURE→REPRESENTATION',rep?.ok&&!!rep.value.formula);
  add('P-E-003','STRUCTURE→UI_BRIDGE→2D/3D',snap?.ok&&!!snap.value.layout2D&&!!snap.value.geometry3D);
  add('P-E-004','ATOM→ELECTRONIC_MODEL',EM?.atom?.('O')?.ok===true);
  const rx={id:'e-rx',reactants:[{formula:'CO'}],products:[{formula:'CO2'}]};
  const mapped=MAP?.mapReaction?.(rx.reactants,rx.products); const rv=RV?.validate?.(rx);
  add('P-E-005','REACTION→MAPPING',!!mapped?.ok);
  add('P-E-006','REACTION→REACTION_VALIDATOR',!!rv?.ok);
  add('P-E-007','cross-domain acid representation',REP.representations(acid)?.ok===true);
  return out;
}
function deterministic(){
  const out=[], add=(id,name,good,detail)=>out.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  const ST=C.STRUCTURE, REP=C.REPRESENTATION;
  const h=ST.createMolecule({id:'det-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
  const a=ST.canonicalize(h), b=ST.canonicalize(clone(h));
  add('DET-001','canonicalization deterministic',JSON.stringify(a)===JSON.stringify(b));
  const r1=REP.representations(h), r2=REP.representations(h);
  add('DET-002','representation deterministic',JSON.stringify(r1)===JSON.stringify(r2));
  const m1=C.MAPPING?.atomMap?.(h,h), m2=C.MAPPING?.atomMap?.(h,h);
  add('DET-003','atom mapping deterministic',JSON.stringify(m1)===JSON.stringify(m2));
  return out;
}
function performance(){
  const out=[], add=(id,name,good,detail)=>out.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  if(typeof g.performance?.now!=='function'){add('PERF-001','performance API',false,'brak performance.now');return out;}
  const ST=C.STRUCTURE, REP=C.REPRESENTATION;
  const h=ST.createMolecule({id:'perf-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
  let t=g.performance.now(); for(let i=0;i<50;i++) ST.canonicalize(h); let dt=g.performance.now()-t;
  add('PERF-001','canonicalization 50× finite',Number.isFinite(dt),dt.toFixed(2)+' ms');
  t=g.performance.now(); for(let i=0;i<50;i++) REP.representations(h); dt=g.performance.now()-t;
  add('PERF-002','representation 50× finite',Number.isFinite(dt),dt.toFixed(2)+' ms');
  add('PERF-003','no absurd single-op latency',dt<5000,dt.toFixed(2)+' ms');
  return out;
}
C.API_CONTRACT={version:'2.48',audit:apiAudit,publicShape};
C.RUNTIME={version:'2.48',snapshot:runtimeSnapshot};
C.REGRESSION={version:'2.48',crossDomain:crossDomain,deterministic,performance};
if(E.registry){
 E.registry.API_CONTRACT={layer:'META',owner:'CHE.API_CONTRACT',role:'kontrakt publicznego API',depends:['REGISTRY','CONTRACT','PUBLIC']};
 E.registry.RUNTIME={layer:'SERVICE',owner:'CHE.RUNTIME',role:'diagnostyka runtime DOM/browser',depends:[]};
 E.registry.REGRESSION={layer:'META',owner:'CHE.REGRESSION',role:'cross-domain, deterministyczność i performance',depends:['STRUCTURE','REPRESENTATION','MAPPING','REACTION_VALIDATOR','UI_BRIDGE','ELECTRONIC_MODEL']};
}
if(E.modules){E.modules.API_CONTRACT='2.48';E.modules.RUNTIME='2.48';E.modules.REGRESSION='2.48';}
E.version='2.48';E.contractVersion='2.48';E.schemaVersion='2.48';
if(E.PUBLIC) E.PUBLIC.version='2.48';
const oldAudit=E.AUDIT?.run;
if(typeof oldAudit==='function'&&!E.AUDIT.__eWrapped){
 const base=oldAudit.bind(E.AUDIT);
 E.AUDIT.run=function(){
  const r=base();
  const api=C.API_CONTRACT.audit(), rt=C.RUNTIME.snapshot(), xd=C.REGRESSION.crossDomain(), det=C.REGRESSION.deterministic(), perf=C.REGRESSION.performance();
  const e=[...xd,...det,...perf];
  const di=C.DATA_INTEGRITY?.run?.();
  const st=C.STEREO_CONTRACT?.validate?.({id:'audit-stereo',atoms:[{id:'C',element:'C'}],bonds:[]});
  e.push({id:'E-DATA-001',group:'pacE',name:'legacy data integrity',ok:!!di?.ok,detail:di?.value?.ok===false?JSON.stringify(di.value):''});
  e.push({id:'E-STEREO-001',group:'pacE',name:'stereo contract explicit',ok:!!st?.ok&&st.value.ok===true,detail:'complete=false by design'});
  const geoMol={id:'audit-geo',atoms:[{id:'O',element:'O',x:0,y:0,z:0},{id:'H1',element:'H',x:0.96,y:0,z:0},{id:'H2',element:'H',x:-0.24,y:0.93,z:0}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]};
  const da=C.MOLECULE?.derivedAngles?.(geoMol)||[]; const gg=C.GEOMETRY?.geometry?.(geoMol);
  e.push({id:'E-GEO-001',group:'pacE',name:'derivedAngles uses atom IDs',ok:da.length===1&&Number.isFinite(da[0].deg),detail:String(da.length)});
  e.push({id:'E-GEO-002',group:'pacE',name:'3D geometry validates 3D coordinates',ok:!!gg?.ok&&gg.value.validation?.ok===true,detail:gg?.value?.validation?.status||''});
  const add=(id,name,good,detail)=>e.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  add('E-API','public API contract',api.ok,api.issues?.length?JSON.stringify(api.issues):'');
  add('E-RUNTIME-001','DOM runtime available',rt.ok&&(rt.readyState==='complete'||(rt.controlledHarness&&rt.readyState==='loading')),JSON.stringify(rt));
  add('E-RUNTIME-002','document has body',rt.ok&&rt.domContentLoaded);
  r.groups=r.groups||{};r.groups.pacE=e;r.summary=r.summary||{};r.summary.pacE={total:e.length,failed:e.filter(x=>!x.ok).length};
  r.apiContract=api;r.runtime=rt;r.pacE=e;r.ok=!!r.ok&&e.every(x=>x.ok);r.version=E.version;r.contractVersion=E.contractVersion;
  E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()}; return r;
 };
 E.AUDIT.__eWrapped=true;
}
})(window);

} catch (err) {
  try { console.warn('[CHE module 65]', err && err.message ? err.message : err); } catch(_){}
}