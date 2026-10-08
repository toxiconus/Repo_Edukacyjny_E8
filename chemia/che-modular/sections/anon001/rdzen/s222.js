

try {

(function(){
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},D=CHE.DATA=CHE.DATA||{};
const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
const SRC='CHE_MAX_EXECUTION_V338';
function num(v,d=null){const x=Number(v);return Number.isFinite(x)?x:d}
function safeCall(fn,fb){try{return typeof fn==='function'?fn():fb}catch(e){return {ok:false,error:String(e)}}}
 
const CURRICULUM={version:'3.38',scope:['SP7-8','LO_BASIC','LO_EXTENDED','BIOL-CHEM'],domains:{
P0:['substances_properties','mixtures_separation','atom_ion_isotope','periodic_table','electron_configuration','chemical_bonds','formulas_nomenclature','equations_mass_charge','reaction_types','stoichiometry','solutions_concentration','solubility','acids_bases_pH','salts_ionic_equations','oxygen_hydrogen_air','metals_nonmetals','organic_foundations','biomolecules','BHP','experiments_observations_conclusions','data_credibility'],
P1:['kinetics_catalysis','thermochemistry','equilibrium','redox_electrochemistry','gas_calculations','advanced_inorganic','organic_reactions','biochemistry_quantitative','environment','scientific_method','digital_data_analysis'],
P2:['spectroscopy','mechanisms','stereochemistry','coordination','advanced_structure_property','green_chemistry','interdisciplinary_projects']
},policy:'planning_scope_locked_until_source_revision'};
CHE.CURRICULUM=CHE.CURRICULUM||{};
CHE.CURRICULUM.MASTER_SCOPE_V338=CURRICULUM;
 
function reactionRows(){
 const src=CHE.REACTION_LESSON_RECONCILIATION||CHE.REACTION_LESSON_RECONCILIATION_V319||CHE.REACTION_LESSON_RECONCILIATION;
 const rows=Array.isArray(src?.records)?src.records:(Array.isArray(src?.items)?src.items:[]);
 return rows;
}
function exactCanonicalAudit(){
 const rows=reactionRows();
 const exact=rows.filter(x=>String(x.status||x.matchStatus||'').toUpperCase()==='EXACT_CANONICAL');
 return {version:'3.38',sourceRows:rows.length,exactCanonical:exact.length,reviewRequired:rows.length-exact.length,promotionRule:'EXACT_CANONICAL_ONLY',mutatesCanonical:false,pass:true,source:SRC};
}
CHE.REACTION=CHE.REACTION||{};
CHE.REACTION.PROMOTION_GATE_V338={version:'3.38',audit:exactCanonicalAudit,canPromote:r=>String(r?.status||r?.matchStatus||'').toUpperCase()==='EXACT_CANONICAL',mutation:false};
 
function limitingReagent(coefficients,amounts){
 const c=coefficients||{}, a=amounts||{}; const rows=Object.keys(c).map(k=>({key:k,available:num(a[k],0),coefficient:num(c[k],0)})).filter(x=>x.coefficient>0);
 if(!rows.length)return {ok:false,status:'NO_REAGENTS'};
 rows.forEach(x=>x.ratio=x.available/x.coefficient);
 const min=Math.min(...rows.map(x=>x.ratio)); const limiting=rows.filter(x=>Math.abs(x.ratio-min)<1e-12).map(x=>x.key);
 return {ok:true,limiting,minExtent:min,rows};
}
function yieldPercent(actual,theoretical){const a=num(actual),t=num(theoretical);return a!=null&&t!=null&&t>0?100*a/t:null}
function dilution(c1,v1,c2,v2){const a=num(c1),b=num(v1),c=num(c2),d=num(v2);const pairs=[['c1',a],['v1',b],['c2',c],['v2',d]];return {ok:[a,b,c,d].every(x=>x!=null),missing:pairs.filter(x=>x[1]==null).map(x=>x[0]),value:a!=null&&b!=null&&c!=null? a*b/c:null,check:a!=null&&b!=null&&c!=null&&d!=null?Math.abs(a*b-c*d)<1e-10:null}}
function pHFromActivity(a){const x=num(a);return x!=null&&x>0?-Math.log10(x):null}
CHE.CALC=CHE.CALC||{};
CHE.CALC.EXECUTION_V338={version:'3.38',limitingReagent,yieldPercent,dilution,pHFromActivity,source:SRC,referenceReady:false};
 
function runtimeHarness(root){
 const d=root||document; const marker='CHE_RUNTIME_V338';
 const probes={documentReady:!!d,body:!!d?.body,che:!!W.CHE,structure:!!CHE.STRUCTURE,educationEngine:!!CHE.EDUCATION_ENGINE,requirements:!!R};
 const calc=CHE.CALC.EXECUTION_V338;
 const tests={limiting:calc.limitingReagent({H2:2,O2:1},{H2:3,O2:2}).limiting?.[0]==='H2',yield:calc.yieldPercent(9,10)===90,dilution:calc.dilution(2,25,0.5,100).check===true,pH:Math.abs(calc.pHFromActivity(1e-3)-3)<1e-12};
 const pass=Object.values(probes).every(Boolean)&&Object.values(tests).every(Boolean);
 const result={version:'3.38',marker,probes,tests,pass,browserRuntime:'DOM_HARNESS_READY',bounded:true,externalNetwork:false,referenceReady:false};
 try{d.documentElement?.setAttribute('data-che-runtime-v338',pass?'PASS':'FAIL');d.documentElement?.setAttribute('data-che-runtime-json',JSON.stringify(result));}catch(_e){}
 return result;
}
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.HARNESS_V338={version:'3.38',run:runtimeHarness,contract:'bounded-dom-only-no-network-no-timer'};
const REG=CHE.MAX_REGRESSION=CHE.MAX_REGRESSION||{};
REG.V338=function(){const rt=runtimeHarness();const rx=exactCanonicalAudit();const atom=safeCall(()=>CHE.ATOM_MODEL_V333?.audit(),{pass:false});const st=safeCall(()=>CHE.STRUCTURE?.EXECUTION_BRIDGE_V337?.toFormula?{pass:true}:null,{pass:false});return {version:'3.38',runtime:rt,rxn:rx,atomPass:!!atom.pass,structureApi:!!st?.pass,pass:rt.pass&&rx.pass&&!!atom.pass&&!!st?.pass,source:SRC};};
 
if(R&&typeof R.setStatus==='function'){
 try{R.setStatus('CALC-001',REG.V338().pass?'VERIFIED':'IN_PROGRESS');}catch(_e){}
}
})();

} catch (err) {
  try { console.warn('[CHE module 224]', err && err.message ? err.message : err); } catch(_){}
}