

try {

(function(){
'use strict';
const CHE=window.CHE=window.CHE||{};
const C=CHE.EDUCATION=CHE.EDUCATION||{};
const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
const SRC='CHE_MAX_CONTINUITY_V332';

const CONFIG={
1:['1s2'],2:['1s2'],3:['1s2','2s1'],4:['1s2','2s2'],5:['1s2','2s2','2p1'],6:['1s2','2s2','2p2'],7:['1s2','2s2','2p3'],8:['1s2','2s2','2p4'],9:['1s2','2s2','2p5'],10:['1s2','2s2','2p6'],
11:['1s2','2s2','2p6','3s1'],12:['1s2','2s2','2p6','3s2'],13:['1s2','2s2','2p6','3s2','3p1'],14:['1s2','2s2','2p6','3s2','3p2'],15:['1s2','2s2','2p6','3s2','3p3'],16:['1s2','2s2','2p6','3s2','3p4'],17:['1s2','2s2','2p6','3s2','3p5'],18:['1s2','2s2','2p6','3s2','3p6'],19:['1s2','2s2','2p6','3s2','3p6','4s1'],20:['1s2','2s2','2p6','3s2','3p6','4s2']
};
const CAP={s:2,p:6,d:10,f:14};
function parseOcc(token){const m=/^(\d)([spdf])(\d+)$/.exec(token);return m?{n:+m[1],subshell:m[2],electrons:+m[3]}:null;}
function orbitalBoxes(subshell,e){const n=({s:1,p:3,d:5,f:7})[subshell]||0;const boxes=Array.from({length:n},()=>[]);let left=e;for(let i=0;i<n&&left>0;i++,left--)boxes[i].push('↑');for(let i=0;i<n&&left>0;i++,left--)boxes[i].push('↓');return boxes;}
function atomModel(Z){
 const z=Number(Z); const cfg=CONFIG[z]; if(!cfg)return {ok:false,status:'OUT_OF_EDUCATIONAL_SCOPE',Z:z,source:SRC};
 const occ=cfg.map(parseOcc).filter(Boolean); const total=occ.reduce((s,x)=>s+x.electrons,0);
 const shells={}; for(const x of occ)shells[x.n]=(shells[x.n]||0)+x.electrons;
 const highest=Math.max(...occ.map(x=>x.n)); const outer=occ.filter(x=>x.n===highest).reduce((s,x)=>s+x.electrons,0);
 const orbitals=occ.map(x=>({...x,capacity:CAP[x.subshell],boxes:orbitalBoxes(x.subshell,x.electrons)}));
 return {ok:total===z,status:total===z?'PASS':'FAIL',Z:z,electrons:total,configuration:cfg.join(' '),shells,highestShell:highest,valenceElectrons:outer,subshells:orbitals,source:SRC,referenceReady:false};
}
function atomAudit(){const rows=[];for(let z=1;z<=20;z++)rows.push(atomModel(z));return {scope:'Z=1..20',records:rows,pass:rows.every(x=>x.ok),source:SRC,referenceReady:false};}
CHE.ATOM_MODEL_V332={version:'3.32',atomModel,atomAudit,source:SRC,referenceReady:false};

function structureProjection(graph){
 if(!graph||typeof graph!=='object')return {ok:false,status:'GRAPH_REQUIRED',source:SRC};
 const atoms=Array.isArray(graph.atoms)?graph.atoms:[], bonds=Array.isArray(graph.bonds)?graph.bonds:[], angles=Array.isArray(graph.angles)?graph.angles:[];
 const ids=new Set(atoms.map(a=>a.id));
 const B=bonds.map((b,i)=>({id:b.id??`b${i+1}`,a:b.a??b.from,b:b.b??b.to,order:Number(b.order??1),label:b.orderLabel??({1:'single',2:'double',3:'triple'}[Number(b.order??1)]??String(b.order??1))}));
 const A=angles.map((a,i)=>({id:a.id??`a${i+1}`,center:a.center??a.vertex,from:a.from??a.a,to:a.to??a.b,valueDeg:Number(a.valueDeg??a.angleDeg??a.value),label:Number.isFinite(Number(a.valueDeg??a.angleDeg??a.value))?`${Number(a.valueDeg??a.angleDeg??a.value)}°`:'angle'}));
 const invalidB=B.filter(b=>!ids.has(b.a)||!ids.has(b.b)||!(b.order>0));
 const invalidA=A.filter(a=>!ids.has(a.center)||(!ids.has(a.from)&&!ids.has(a.to))||!Number.isFinite(a.valueDeg));
 return {ok:invalidB.length===0&&invalidA.length===0,status:invalidB.length||invalidA.length?'INVALID_GRAPH':'READY',atoms:atoms.length,bonds:B,angles:A,sourceOfTruth:'CHE.STRUCTURE',projectionOnly:true,source:SRC,referenceReady:false};
}
CHE.STRUCTURE=CHE.STRUCTURE||{};
CHE.STRUCTURE.VIEW_ADAPTER_V332={version:'3.32',project:structureProjection,sourceOfTruth:'CHE.STRUCTURE',projectionOnly:true,outputs:['2D_bonds','bond_order_labels','angle_labels','3D_geometry'],referenceReady:false};

const UI_IDS=['run-audit','audit-refresh','at-run','at-mol-run','pd-search','pd-reset','nu-run','iso-run','sp-run','ry-run','lab-random','th-run','ar-run','el-run'];
function uiContract(root){
 const d=root||document; const rows=UI_IDS.map(id=>({id,present:!!d.getElementById(id)}));
 const tabs=['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'].map(id=>({id,present:!!d.getElementById(`tab-${id}`)}));
 return {version:'3.32',controls:rows,tabs,controlsPass:rows.every(x=>x.present),tabsPass:tabs.every(x=>x.present),pass:rows.every(x=>x.present)&&tabs.every(x=>x.present),source:SRC};
}
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.UI_CONTRACT_V332={version:'3.32',requiredControls:UI_IDS,run:uiContract,status:'NOT_RUN',referenceReady:false};

function lessonGate(){
 const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{}; const rec=Array.isArray(a.records)?a.records:[];
 const exact=rec.filter(r=>r?.classification==='REACTION_EQUATION'&&r?.reconciliation?.status==='EXACT_CANONICAL');
 return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:exact.length,eligible:exact.map(r=>({line:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds,conditionFlags:r.conditionFlags||[]})),policy:'EXACT_CANONICAL_ONLY + SOURCE_VERIFICATION_REQUIRED + NO_AUTO_MUTATION',source:SRC};
}
C.LESSON_PROMOTION_GATE_V332={version:'3.32',audit:lessonGate,referenceReady:false};

function statusSnapshot(){
 const atom=atomAudit();
 const struct=CHE.STRUCTURE.VIEW_ADAPTER_V332.project({atoms:[{id:'a'},{id:'b'},{id:'c'}],bonds:[{a:'a',b:'b',order:2}],angles:[{center:'b',from:'a',to:'c',angleDeg:120}]});
 const ui=typeof document!=='undefined'?uiContract(document):{pass:false,status:'NO_DOCUMENT'};
 const calc=CHE.EDUCATION_ENGINE?.selfTest?.()||null;
 return {atom,structure:struct,ui,calc,source:SRC};
}
function updateRequirementStatuses(){
 if(!R)return {ok:false,status:'REGISTRY_MISSING'};
 const s=statusSnapshot();
  
 if(s.atom.pass) R.setStatus('ATOM-001','IN_PROGRESS');
 if(s.structure.ok) R.setStatus('VIS-002','IN_PROGRESS');
 if(s.calc?.allBalanced) R.setStatus('CALC-001','IN_PROGRESS');
 return {ok:true,registry:R.audit(),snapshot:s,policy:'NO_PREMATURE_DONE'};
}
C.CONTINUITY_CONTROLLER_V332={version:'3.32',statusSnapshot,updateRequirementStatuses,source:SRC,referenceReady:false};

C.MAX_REGRESSION_V332=(function(){
 const a=atomAudit();
 const g=structureProjection({atoms:[{id:'a'},{id:'b'},{id:'c'}],bonds:[{a:'a',b:'b',order:2}],angles:[{center:'b',from:'a',to:'c',angleDeg:120}]});
 const ui=typeof document!=='undefined'?uiContract(document):null;
 const lesson=lessonGate();
 return {version:'3.32',atomPass:a.pass,structurePass:g.ok,uiPass:ui?ui.pass:null,lessonExactCanonical:lesson.exactCanonical,pass:a.pass&&g.ok,source:SRC,referenceReady:false};
})();
C.gapAuditV332=()=>({version:'3.32',maxRegression:C.MAX_REGRESSION_V332,requirements:R?.audit?.()||null,next:['browser DOM smoke with real runtime','2D/3D renderer binding','verified L001-L013 promotion where source criteria are met','redox multi-reagent regression','P0 BHP/solubility/indicator completion']});
})();

} catch (err) {
  try { console.warn('[CHE module 218]', err && err.message ? err.message : err); } catch(_){}
}