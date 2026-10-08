

try {

(function(){
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},EDU=CHE.EDUCATION=CHE.EDUCATION||{},D=CHE.DATA=CHE.DATA||{};
const RQ=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
function n(v,d=0){const x=Number(v);return Number.isFinite(x)?x:d}
function atomsOf(s){return Array.isArray(s?.atoms)?s.atoms:[]}
function bondsOf(s){return Array.isArray(s?.bonds)?s.bonds:[]}
function anglesOf(s){return Array.isArray(s?.angles)?s.angles:[]}
function elementFormula(s){
 const a=atomsOf(s), c={};
 for(const x of a){const e=String(x.element||x.symbol||'').trim();if(!e)continue;c[e]=(c[e]||0)+1}
 return Object.entries(c).sort((a,b)=>a[0].localeCompare(b[0])).map(([e,k])=>e+(k===1?'':k)).join('')
}
function normalizeStructure(s){
 const a=atomsOf(s).map((x,i)=>({id:x.id??`a${i+1}`,element:String(x.element||x.symbol||'?'),x:n(x.x),y:n(x.y),z:n(x.z),charge:n(x.charge),isotope:x.isotope??null}));
 const ids=new Set(a.map(x=>String(x.id)));
 const b=bondsOf(s).map((x,i)=>({id:x.id??`b${i+1}`,a:String(x.a??x.from),b:String(x.b??x.to),order:n(x.order,1)})).filter(x=>ids.has(x.a)&&ids.has(x.b)&&x.a!==x.b&&x.order>0);
 const g=anglesOf(s).map((x,i)=>({id:x.id??`g${i+1}`,center:String(x.center??x.vertex),from:String(x.from),to:String(x.to),deg:n(x.deg??x.angle)})).filter(x=>ids.has(x.center)&&ids.has(x.from)&&ids.has(x.to)&&x.from!==x.to&&x.deg>0&&x.deg<=180);
 return {atoms:a,bonds:b,angles:g,formula:elementFormula({atoms:a}),sourceOfTruth:'CHE.STRUCTURE',mutable:false};
}
function degreeMap(s){const m={};for(const a of atomsOf(s))m[a.id]=0;for(const b of bondsOf(s)){if(m[b.a]!=null)m[b.a]+=n(b.order,1);if(m[b.b]!=null)m[b.b]+=n(b.order,1)}return m}
function structureAudit(s){
 const q=normalizeStructure(s), ids=new Set(q.atoms.map(x=>x.id)), dm=degreeMap(q), issues=[];
 for(const b of q.bonds)if(!ids.has(b.a)||!ids.has(b.b))issues.push({type:'BOND_ENDPOINT_MISSING',bond:b.id});
 for(const a of q.angles){if(!ids.has(a.center)||!ids.has(a.from)||!ids.has(a.to))issues.push({type:'ANGLE_ENDPOINT_MISSING',angle:a.id});}
 for(const x of q.atoms)if(!x.element||x.element==='?')issues.push({type:'ATOM_ELEMENT_MISSING',atom:x.id});
 return {ok:issues.length===0,issues,atomCount:q.atoms.length,bondCount:q.bonds.length,angleCount:q.angles.length,formula:q.formula,degreeMap:dm,normalized:q};
}
function visualProjection(s){
 const q=normalizeStructure(s);
 return {version:'3.37',formula:q.formula,atoms:q.atoms.map(a=>({id:a.id,label:a.element,x:a.x,y:a.y,z:a.z})),bonds:q.bonds.map(b=>({id:b.id,a:b.a,b:b.b,order:b.order,label:b.order===1?'single':b.order===2?'double':b.order===3?'triple':`order ${b.order}`})),angles:q.angles.map(g=>({id:g.id,center:g.center,from:g.from,to:g.to,deg:g.deg,label:`${g.deg.toFixed(1)}°`})),sourceOfTruth:'CHE.STRUCTURE',projectionOnly:true};
}
function reactionStructureBridge(reaction){
 const r=reaction||{};
 const reactants=Array.isArray(r.reactants)?r.reactants:[], products=Array.isArray(r.products)?r.products:[];
 const check=list=>list.map((x,i)=>({index:i,formula:x.formula||null,structureAudit:x.structure?structureAudit(x.structure):null}));
 return {version:'3.37',reactants:check(reactants),products:check(products),sourceOfTruth:['CHE.DATA.REACTIONS','CHE.STRUCTURE'],mutation:false};
}
function executeFromStructure(s){
 const q=normalizeStructure(s), audit=structureAudit(q);
 const engine=CHE.EDUCATION_ENGINE;
 const mass=engine&&typeof engine.molarMass==='function'&&q.formula?engine.molarMass(q.formula):null;
 return {version:'3.37',formula:q.formula,audit,mass,visual:visualProjection(q),referenceReady:false};
}
function uiModel(root){
 const d=root||document;
 const ids=['lab-3d-stage','lab-3d-canvas','run-audit','audit-refresh','tab-atom','tab-periodic','tab-lab'];
 const rows=ids.map(id=>({id,present:!!d?.getElementById(id)}));
 return {version:'3.37',present:rows.filter(x=>x.present).length,total:rows.length,pass:rows.every(x=>x.present),status:'OBSERVED_DOM_ONLY'};
}
const SAMPLE={atoms:[{id:'C1',element:'C',x:0,y:0,z:0},{id:'O1',element:'O',x:1.2,y:0,z:0},{id:'O2',element:'O',x:-1.2,y:0,z:0}],bonds:[{id:'b1',a:'C1',b:'O1',order:2},{id:'b2',a:'C1',b:'O2',order:2}],angles:[{id:'g1',center:'C1',from:'O1',to:'O2',deg:180}]};
function selfTest(){
 const s=structureAudit(SAMPLE), v=visualProjection(SAMPLE), e=executeFromStructure(SAMPLE);
 const formulaOK=e.formula==='CO2', bondOK=v.bonds.length===2&&v.bonds.every(x=>x.order===2), angleOK=v.angles[0]?.deg===180;
 return {version:'3.37',structure:s,formulaOK,bondOK,angleOK,projectionOK:v.atoms.length===3,executionFormula:e.formula,pass:s.ok&&formulaOK&&bondOK&&angleOK,source:'CHE_MAX_V337'};
}
CHE.STRUCTURE=CHE.STRUCTURE||{};
CHE.STRUCTURE.EXECUTION_BRIDGE_V337={version:'3.37',normalize:normalizeStructure,audit:structureAudit,toVisual:visualProjection,toFormula:elementFormula,degreeMap,execute:executeFromStructure,sourceOfTruth:'CHE.STRUCTURE',mutation:false};
CHE.REACTION=CHE.REACTION||{};
CHE.REACTION.STRUCTURE_BRIDGE_V337={version:'3.37',fromReaction:reactionStructureBridge,sourceOfTruth:['CHE.DATA.REACTIONS','CHE.STRUCTURE'],mutation:false};
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.VISUAL_EXECUTION_V337={version:'3.37',uiModel,run(){return {selfTest:selfTest(),ui:uiModel(),browserRuntime:'NOT_VERIFIED',referenceReady:false}}};
CHE.MAX_VERIFY_V337={version:'3.37',modules:['STRUCTURE_EXECUTION_BRIDGE','REACTION_STRUCTURE_BRIDGE','VISUAL_PROJECTION','UI_OBSERVATION'],oneCommonEngine:true,oneSharedData:true,referenceReady:false};
CHE.gapAuditV337=()=>({version:'3.37',selfTest:selfTest(),ui:uiModel(),open:['TEST-001','RXN-002','VIS-002'],policy:'CONTINUE_OPEN_STATUS_ONLY'});
if(RQ&&typeof RQ.setStatus==='function'){
 try{if(selfTest().pass)RQ.setStatus('VIS-002','IN_PROGRESS');}catch(_e){}
}
})();

} catch (err) {
  try { console.warn('[CHE module 223]', err && err.message ? err.message : err); } catch(_){}
}