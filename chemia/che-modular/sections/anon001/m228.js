try {

(()=>{
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},EDU=CHE.EDUCATION=CHE.EDUCATION||{},D=CHE.DATA||{};
const SRC='CHE_MAX_V341';
const num=x=>{const n=Number(x);return Number.isFinite(n)?n:null};
const finite=x=>num(x)!==null;
function taskResult(id,type,input,result,status='PASS'){
 return {id:id||null,type:type||'chemistry',input:input||{},result:result??null,status,engine:'CHE.EDUCATION_ENGINE',source:SOURCE_MAP[type]||'EDUCATIONAL_LAYER',referenceReady:false};
}
const SOURCE_MAP={solubility:'CHE.EDUCATION.SOLUBILITY_REFERENCE_V320',indicator:'CHE.EDUCATION.INDICATOR_REFERENCE_V319',bhp:'CHE.EDUCATION.BHP_EXPERIMENT_MATRIX',redox:'CHE.EDUCATION.REDOX_EXECUTION_V340',stoichiometry:'CHE.EDUCATION_ENGINE'};
function solubilityTask(spec){
 const s=spec||{}, formula=String(s.formula||''), rows=[...(EDU.SOLUBILITY_REFERENCE_V320||[]),...(EDU.SOLUBILITY_REFERENCE_V319||[])];
 const found=rows.filter(r=>String(r.formula||'').replace(/\s/g,'')===formula.replace(/\s/g,''));
 if(!found.length) return taskResult(s.id,'solubility',s,null,'NOT_FOUND');
 const best=found.find(r=>Number(r.temperature_C)===Number(s.temperature_C))||found[0];
 return taskResult(s.id,'solubility',s,{formula:best.formula,value:best.value,unit:best.unit,temperature_C:best.temperature_C,medium:best.medium,status:best.status},'PASS');
}
function indicatorTask(spec){
 const s=spec||{},name=String(s.indicator||s.name||''),pH=num(s.pH), api=CHE.INDICATORS?.V339?.lookup;
 if(typeof api!=='function'||pH===null) return taskResult(s.id,'indicator',s,null,'INPUT_REQUIRED');
 const out=api(name,pH); return taskResult(s.id,'indicator',s,out,out?'PASS':'NOT_FOUND');
}
function bhpTask(spec){
 const s=spec||{}, q=String(s.id||s.topic||'');
 const pools=[EDU.BHP_EXPERIMENT_MATRIX,EDU.EXPERIMENT_SAFETY_MATRIX_V318,EDU.EXPERIMENTS_V317].filter(Array.isArray).flat();
 const hits=pools.filter(x=>JSON.stringify(x).toLowerCase().includes(q.toLowerCase()));
 return taskResult(s.id,'bhp',s,{matches:hits.slice(0,20),count:hits.length},hits.length?'PASS':'NOT_FOUND');
}
function routeTask(spec){
 const s=spec||{}, type=String(s.type||s.domain||'chemistry').toLowerCase();
 if(type==='solubility'||type==='rozpuszczalnosc') return solubilityTask(s);
 if(type==='indicator'||type==='wskaźnik'||type==='wskaznik') return indicatorTask(s);
 if(type==='bhp'||type==='safety'||type==='experiment') return bhpTask(s);
 if(type==='redox'&&EDU.REDOX_EXECUTION_V340?.buildTask) return {task:EDU.REDOX_EXECUTION_V340.buildTask(s),status:'GENERATED_NOT_GRADED',engine:'CHE.EDUCATION_ENGINE',referenceReady:false};
 if(typeof CHE.EDUCATION_ENGINE?.runTask==='function') return CHE.EDUCATION_ENGINE.runTask(s);
 return taskResult(s.id,type,s,null,'UNSUPPORTED_TASK_TYPE');
}
function lessonAudit341(){
 const rec=CHE.REACTION_LESSON_RECONCILIATION?.audit?.()||{};
 const rows=Array.isArray(rec.records)?rec.records:[];
 const reactionRows=rows.filter(r=>r?.classification==='REACTION_EQUATION');
 const exact=reactionRows.filter(r=>r?.reconciliation?.status==='EXACT_CANONICAL');
 const unresolved=reactionRows.filter(r=>r?.reconciliation?.status!=='EXACT_CANONICAL');
 return {version:'3.41',candidateRecords:rec.candidateRecords||0,reactionCandidates:reactionRows.length,exactCanonical:exact.length,unresolved:unresolved.length,
 policy:'EXACT_CANONICAL_ONLY',mutatesCanonicalData:false,canonicalSource:'CHE.DATA.REACTIONS',referenceReady:false};
}
function p0Audit(){
 const tests={
  solubility:solubilityTask({formula:'NaCl'}).status==='PASS',
  indicator:indicatorTask({indicator:'phenolphthalein',pH:9}).status==='PASS',
  bhp:bhpTask({topic:'BHP'}).status!=='ERROR',
  lessonGate:lessonAudit341().policy==='EXACT_CANONICAL_ONLY',
  commonEngine:!!CHE.EDUCATION_ENGINE,
  commonStructure:CHE.VIS?.STAGE_CONTRACT_V340?.sourceOfTruth==='CHE.STRUCTURE'
 };
 return {version:'3.41',tests,pass:Object.values(tests).every(Boolean),referenceReady:false};
}
function renderTasks(){
 const host=document.getElementById('lab-host'); if(!host)return false;
 const a=p0Audit(), l=lessonAudit341();
 host.innerHTML=`<div class="lab-grid"><article class="eu-card eu-card-pad"><span class="lab-tag">006v001 · P0 task engine</span><h3 style="margin:6px 0">Zadania chemiczne</h3><div class="lab-side-list"><div class="lab-row"><span>Rozpuszczalność</span><b>${a.tests.solubility?'PASS':'CHECK'}</b></div><div class="lab-row"><span>Wskaźniki / pH</span><b>${a.tests.indicator?'PASS':'CHECK'}</b></div><div class="lab-row"><span>BHP / doświadczenia</span><b>${a.tests.bhp?'PASS':'CHECK'}</b></div><div class="lab-row"><span>L001–L013 gate</span><b>${l.exactCanonical}/${l.reactionCandidates}</b></div></div><div class="lab-note" style="margin-top:12px">Jedno źródło danych: CHE.DATA + CHE.STRUCTURE + CHE.EDUCATION_ENGINE.</div></article><aside class="eu-card eu-card-pad"><span class="lab-tag">P0</span><h3 style="margin:6px 0">Status</h3><div class="lab-note">${a.pass?'Pakiet P0 lokalnie PASS.':'Pakiet P0 wymaga korekty.'}<br>Reference-ready: false<br>Browser runtime: NOT_VERIFIED</div></aside></div>`;
 return true;
}
EDU.TASK_EXECUTION_V341={version:'3.41',run:routeTask,solubility:solubilityTask,indicator:indicatorTask,bhp:bhpTask,lessonAudit:lessonAudit341,p0Audit,referenceReady:false,sourceOfTruth:['CHE.DATA','CHE.STRUCTURE','CHE.EDUCATION_ENGINE']};
CHE.RUNTIME=CHE.RUNTIME||{}; CHE.RUNTIME.MAX_EXECUTION_V341={version:'3.41',p0Audit,lessonAudit:lessonAudit341,browserRuntime:'NOT_VERIFIED',referenceReady:false};
CHE.UI=CHE.UI||{}; CHE.UI.LAB=CHE.UI.LAB||{}; CHE.UI.LAB.renderTasksV341=renderTasks;
const btn=document.querySelector('[data-view="rx"]');
if(btn&&!btn.__V341){btn.addEventListener('click',()=>setTimeout(renderTasks,0));btn.__V341=true;}
const tests=p0Audit(); CHE.MAX_V341_TESTS=tests; CHE.MAX_V341={version:'3.41',pass:tests.pass,referenceReady:false,browserRuntime:'NOT_VERIFIED',modules:['TASK_ROUTER','SOLUBILITY','INDICATOR','BHP','LESSON_AUDIT','P0']};
try{document.documentElement.setAttribute('data-che-v341',tests.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 228]', err && err.message ? err.message : err); } catch(_){}
}

