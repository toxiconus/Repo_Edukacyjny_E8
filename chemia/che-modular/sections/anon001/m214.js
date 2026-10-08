try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{};
const SRC='CHE_MAX_V329';
const ids=['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];
function uiSnapshot(){const present=ids.filter(id=>typeof document!=='undefined'&&document.getElementById(id));const missing=ids.filter(id=>!present.includes(id));return {checked:ids.length,present,missing,body:typeof document!=='undefined'&&!!document.body,html:typeof document!=='undefined'&&!!document.documentElement,source:SRC};}
function bindSafe(id,handler){if(typeof document==='undefined')return false;const el=document.getElementById(id);if(!el||el.__cheBound)return false;el.addEventListener('click',()=>{try{handler?.(el)}catch(err){console.error('[CHE]',id,err)}});el.__cheBound=true;return true;}
function geometryContract(graph){const g=graph||{};const atoms=Array.isArray(g.atoms)?g.atoms:[];const bonds=Array.isArray(g.bonds)?g.bonds:[];const idsA=new Set(atoms.map(a=>a.id));const invalid=bonds.filter(b=>!idsA.has(b.a)&&!idsA.has(b.atomA)||!idsA.has(b.b)&&!idsA.has(b.atomB));return {ok:invalid.length===0,atomCount:atoms.length,bondCount:bonds.length,invalidBonds:invalid,source:SRC};}
function diagnostics(){return {ui:uiSnapshot(),geometryApi:typeof CHE.STRUCTURE!=='undefined',educationEngine:!!CHE.EDUCATION_ENGINE,redox:!!C.REDOX_QUANT_V328,solutionApi:!!C.SOLUTION_API_V328};}
C.UI_SAFE_BINDING_V329={version:'3.29',snapshot:uiSnapshot,bindSafe,diagnostics,source:SRC};
C.MOLECULE_GEOMETRY_CONTRACT_V329={version:'3.29',validate:geometryContract,sourceOfTruth:'CHE.STRUCTURE',referenceReady:false};
C.RUNTIME_DIAGNOSTICS_V329=diagnostics();
C.MAX_VERIFY_V329={version:'3.29',modules:['SAFE_UI_BINDING','GEOMETRY_CONTRACT','RUNTIME_DIAGNOSTICS'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
C.gapAuditV329=()=>({version:'3.29',diagnostics:C.RUNTIME_DIAGNOSTICS_V329,referenceReady:false,next:['real DOM smoke test','molecule 2D/3D view binding','verified lesson reaction promotion']});
})();

} catch (err) {
  try { console.warn('[CHE module 214]', err && err.message ? err.message : err); } catch(_){}
}

