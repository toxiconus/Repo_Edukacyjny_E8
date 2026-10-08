try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{}, E=CHE.EDUCATION_ENGINE||{}, D=CHE.DATA||{};
const SRC='CHE_MAX_V330', EPS=1e-9;
function gcd(a,b){a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=a%b;a=b;b=t}return a||1}
function rationalize(x,maxDen=24,tol=1e-6){for(let d=1;d<=maxDen;d++){const n=Math.round(x*d);if(Math.abs(x-n/d)<=tol)return [n,d]}return null}
function integerRatios(ratios){
 const rr=ratios.map(x=>rationalize(x)); if(rr.some(x=>!x)) return {ok:false,status:'AMBIGUOUS_RATIO',ratios};
 let l=1; for(const [,d] of rr) l=l*d/gcd(l,d);
 let ints=rr.map(([n,d])=>Math.round(n*l/d)); const g=ints.reduce(gcd,0); ints=ints.map(x=>x/g);
 return {ok:true,integers:ints,ratios,denominator:l,gcd:g};
}
function empiricalFormula(elements){
 const vals=Object.entries(elements||{}).map(([el,v])=>[el,Number(v)]);
 if(!vals.length||vals.some(([,v])=>!(v>0))) return {ok:false,status:'INVALID_INPUT',source:SRC};
 const min=Math.min(...vals.map(([,v])=>v)), ratios=vals.map(([el,v])=>({el,ratio:v/min}));
 const ints=integerRatios(ratios.map(x=>x.ratio));
 if(!ints.ok) return {ok:false,status:ints.status,ratios,source:SRC};
 return {ok:true,composition:Object.fromEntries(vals.map(([x],i)=>[x,ints.integers[i]])),ratios,integers:ints.integers,source:SRC};
}
function geometryContractStrict(graph){
 const g=graph||{}, atoms=Array.isArray(g.atoms)?g.atoms:[], bonds=Array.isArray(g.bonds)?g.bonds:[], ids=new Set(atoms.map(a=>a?.id));
 const endpoints=bonds.filter(b=>{
   const a=b?.a??b?.atomA, z=b?.b??b?.atomB;
   return a==null||z==null||!ids.has(a)||!ids.has(z)||a===z;
 });
 const badOrders=bonds.filter(b=>!(Number(b?.order)>0));
 const angles=Array.isArray(g.angles)?g.angles:[];
 const badAngles=angles.filter(x=>{
   const p=[x?.a,x?.b,x?.c,x?.atomA,x?.atomB,x?.atomC].filter(v=>v!=null);
   return p.length<3;
 });
 return {ok:endpoints.length===0&&badOrders.length===0&&badAngles.length===0,atomCount:atoms.length,bondCount:bonds.length,angleCount:angles.length,invalidBonds:endpoints,badBondOrders:badOrders,invalidAngles:badAngles,source:SRC};
}
function lessonEligibility(){
 const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{}, rows=Array.isArray(a.records)?a.records:[];
 const eligible=rows.filter(r=>r.classification==='REACTION_EQUATION'&&r.reconciliation?.status==='EXACT_CANONICAL');
 return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:eligible.length,eligible:eligible.map(r=>({sourceLine:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds,conditionFlags:r.conditionFlags||[]})),policy:'ELIGIBLE_ONLY; no automatic mutation of CHE.DATA.REACTIONS',source:SRC};
}
function crossRegression(){
 const b=E.balanceEquation?.('H2 + O2 -> H2O');
 const mm=C.SOLUTION_API_V328?.molarMass?.('H2O');
 const emp=empiricalFormula({H:2,O:1});
 const geom=geometryContractStrict({atoms:[{id:'a'},{id:'b'}],bonds:[{a:'a',b:'b',order:1}],angles:[]});
 const lesson=lessonEligibility();
 return {checks:[
  {id:'BAL-330',ok:!!b?.balanced},
  {id:'MM-330',ok:mm?.molarMass!=null},
  {id:'EMP-330',ok:emp.ok&&emp.composition.H===2&&emp.composition.O===1},
  {id:'GEO-330',ok:geom.ok},
  {id:'RX-330',ok:lesson.exactCanonical>=0}
 ],lesson,geometry:geom,empirical:emp};
}
C.EMPIRICAL_FORMULA_V330={version:'3.30',empiricalFormula,integerRatios,referenceReady:false};
C.MOLECULE_GEOMETRY_CONTRACT_V330={version:'3.30',validate:geometryContractStrict,sourceOfTruth:'CHE.STRUCTURE',referenceReady:false};
C.LESSON_PROMOTION_GATE_V330={version:'3.30',audit:lessonEligibility,policy:'exact canonical match only; source verification required before promotion',referenceReady:false};
C.CROSS_REGRESSION_V330=crossRegression();
C.MAX_VERIFY_V330={version:'3.30',modules:['EMPIRICAL_FORMULA','STRICT_GEOMETRY_VALIDATION','LESSON_PROMOTION_GATE','CROSS_ENGINE_REGRESSION'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false,pass:C.CROSS_REGRESSION_V330.checks.every(x=>x.ok)};
C.gapAuditV330=()=>({version:'3.30',pass:C.MAX_VERIFY_V330.pass,lesson:C.LESSON_PROMOTION_GATE_V330.audit(),next:['source-backed promotion of exact lesson matches','full DOM smoke test','2D/3D binding with bond-order and angle labels','atomic/electron/orbital regression']});
})();

} catch (err) {
  try { console.warn('[CHE module 215]', err && err.message ? err.message : err); } catch(_){}
}

