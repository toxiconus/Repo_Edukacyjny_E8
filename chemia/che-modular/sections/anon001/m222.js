try {

(function(){
'use strict';
const CHE=window.CHE=window.CHE||{};
const EDU=CHE.EDUCATION=CHE.EDUCATION||{};
const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
const CURR=CHE.CURRICULUM_REQUIREMENTS_LOCK_V334;
const ROAD=CHE.MASTER_EXECUTION_ROADMAP_V335;
const SRC='CHE_MAX_EXECUTION_V336';

function call(fn,args){
  try{return typeof fn==='function'?{ok:true,value:fn.apply(null,args||[])}:{ok:false,error:'API_MISSING'};}
  catch(e){return {ok:false,error:e?.message||String(e)};}
}
function formulaCounts(formula){
  if(typeof formula!=='string'||!formula.trim())return {};
  const out={}; let i=0;
  function seq(stop){
    const acc={};
    while(i<formula.length&&formula[i]!==stop){
      if(formula[i]==='('){i++;const inner=seq(')');if(formula[i]!==')')throw Error('UNBALANCED_FORMULA');i++;let ds='';while(i<formula.length&&/[0-9]/.test(formula[i]))ds+=formula[i++];const mult=Number(ds||1);for(const k of Object.keys(inner))acc[k]=(acc[k]||0)+inner[k]*mult;continue;}
      if(!/[A-Z]/.test(formula[i])){i++;continue;}
      let el=formula[i++];if(i<formula.length&&/[a-z]/.test(formula[i]))el+=formula[i++];let ds='';while(i<formula.length&&/[0-9]/.test(formula[i]))ds+=formula[i++];acc[el]=(acc[el]||0)+Number(ds||1);
    }
    return acc;
  }
  return seq(null);
}
function equationTerms(equation){
  if(typeof equation!=='string')return {left:[],right:[]};
  const parts=equation.replace(/→|⟶|=>|=/g,'->').split('->');
  const parse=s=>s.split('+').map(x=>x.trim()).filter(Boolean).map(term=>{const m=/^(\d+(?:\.\d+)?)?\s*([A-Za-z][A-Za-z0-9()]+)(?:\((?:aq|s|l|g)\))?$/.exec(term);return {coefficient:m?Number(m[1]||1):1,formula:m?m[2]:term};});
  return {left:parse(parts[0]||''),right:parse(parts[1]||'')};
}
function atomBalance(equation){
  const t=equationTerms(equation), delta={};
  for(const side of [['left',1],['right',-1]])for(const x of t[side[0]])for(const [el,n] of Object.entries(formulaCounts(x.formula)))delta[el]=(delta[el]||0)+side[1]*x.coefficient*n;
  const nonZero=Object.entries(delta).filter(([,v])=>Math.abs(v)>1e-9);
  return {balanced:nonZero.length===0,delta,terms:t};
}
function chargeBalance(equation){
  const chargeOf=f=>{const m=/^(.*?)([+-])(\d*)$/.exec(f);if(!m)return 0;const n=Number(m[3]||1);return m[2]==='+'?n:-n;};
  const t=equationTerms(equation), delta={left:0,right:0};
  for(const x of t.left)delta.left+=x.coefficient*chargeOf(x.formula);
  for(const x of t.right)delta.right+=x.coefficient*chargeOf(x.formula);
  return {balanced:Math.abs(delta.left-delta.right)<1e-9,delta};
}
function executeReaction(equation,options){
  const out={version:'3.36',equation,source:SRC,referenceReady:false};
  const bal=atomBalance(equation);out.atomBalance=bal;
  out.chargeBalance=chargeBalance(equation);
  const E=CHE.EDUCATION_ENGINE;
  out.engine=E?{
    balance:call(E.balanceEquation,[equation]),
    mass:call(E.molarMass,[equation]),
    stoich:options?.amounts?call(E.stoichiometry,[equation,options.amounts]):null
  }:{available:false};
  out.redox=EDU.REDOX_QUANT_V328?.quantitativeRedox?call(EDU.REDOX_QUANT_V328.quantitativeRedox,[equation]):null;
  out.pass=!!bal.balanced;
  return out;
}
function lessonGate(){
 const a=CHE.REACTION_LESSON_RECONCILIATION?.audit?.()||{};
 const rows=Array.isArray(a.records)?a.records:[];
 const exact=rows.filter(r=>r?.classification==='REACTION_EQUATION'&&r?.reconciliation?.status==='EXACT_CANONICAL');
 return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:exact.length,eligible:exact.map(r=>({line:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds})),policy:'AUDIT_FIRST; NO_AUTO_MUTATION',source:SRC};
}
function taskBridge(task){
 if(!task||typeof task!=='object')return {ok:false,error:'TASK_REQUIRED'};
 const eq=task.equation||task.reaction||null;
 return {ok:true,taskId:task.id||null,equation:eq,execution:eq?executeReaction(eq,task):null,source:SRC};
}
const TESTS=[
 ['balanced_H2_O2','2 H2 + O2 -> 2 H2O',true],
 ['unbalanced_H2_O2','H2 + O2 -> H2O',false],
 ['balanced_CaCO3','CaCO3 -> CaO + CO2',true],
 ['balanced_NaCl','Na+ + Cl- -> NaCl',true]
];
function selfTest(){
 const rows=TESTS.map(([id,eq,expected])=>{const a=atomBalance(eq);return {id,eq,expected,got:a.balanced,pass:a.balanced===expected};});
 const ap=rows.every(x=>x.pass);
 const engine=CHE.EDUCATION_ENGINE?.selfTest?.()||null;
 const lesson=lessonGate();
 return {version:'3.36',atomBalancePass:ap,rows,educationEngine:engine,lessonGate:lesson,allBalanced:ap&&(!engine||engine.allBalanced!==false),source:SRC};
}
function runtimeSnapshot(root){
 const d=root||((typeof document!=='undefined')?document:null);
 if(!d)return {status:'NO_DOCUMENT',pass:false};
 const required=['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];
 const controls=required.map(id=>({id,present:!!d.getElementById(id)}));
 const tabs=['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'];
 const tabRows=tabs.map(id=>({id,present:!!d.getElementById(`tab-${id}`)}));
 return {status:'DOM_INSPECTED',controls,controlsPass:controls.every(x=>x.present),tabs:tabRows,tabsPass:tabRows.every(x=>x.present),pass:controls.every(x=>x.present)&&tabRows.every(x=>x.present),source:SRC};
}
function continuityAudit(){
 const t=selfTest();
 const lesson=lessonGate();
 const runtime=runtimeSnapshot();
 const structure=CHE.STRUCTURE?.VIEW_ADAPTER_V332?.project?.({atoms:[{id:'a'},{id:'b'},{id:'c'}],bonds:[{a:'a',b:'b',order:2}],angles:[{center:'b',from:'a',to:'c',angleDeg:120}]})||{ok:false};
 const result={version:'3.36',tests:t,runtime,structure,lesson,oneEngine:true,oneSharedData:true,referenceReady:false,source:SRC};
 if(R){
   if(t.atomBalancePass)R.setStatus('RXN-002','IN_PROGRESS');
   if(structure.ok)R.setStatus('VIS-002','IN_PROGRESS');
   if(runtime.pass)R.setStatus('TEST-001','DONE');
 }
 return result;
}
EDU.EXECUTION_FACADE_V336={version:'3.36',executeReaction,formulaCounts,equationTerms,atomBalance,chargeBalance,lessonGate,taskBridge,selfTest,runtimeSnapshot,continuityAudit,sourceOfTruth:['CHE.DATA','CHE.STRUCTURE','CHE.EDUCATION_ENGINE'],referenceReady:false};
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.MAX_EXECUTION_V336={version:'3.36',run:continuityAudit,status:'NOT_RUN',browserRuntime:'NOT_VERIFIED',source:SRC};

if(CURR){
 const evidence={
  'CURR-10':['EDU.EXECUTION_FACADE_V336.atomBalance','EDU.EXECUTION_FACADE_V336.chargeBalance'],
  'CURR-11':['EDU.REDOX_ENGINE_V326','EDU.REDOX_QUANT_V328'],
  'CURR-12':['EDU.EDUCATION_ENGINE_V322','EDU.EXECUTION_FACADE_V336'],
  'CURR-15':['EDU.EXECUTION_FACADE_V336.chargeBalance'],
  'CURR-27':['STRUCTURE.VIEW_ADAPTER_V332'],
  'CURR-28':['EDU.EXECUTION_FACADE_V336.taskBridge']
 };
 CHE.CURRICULUM_EXECUTION_EVIDENCE_V336={version:'3.36',evidence,policy:'evidence_only_no_premature_done',source:SRC};
}
})();

} catch (err) {
  try { console.warn('[CHE module 222]', err && err.message ? err.message : err); } catch(_){}
}

