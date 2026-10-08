try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, clone=o=>JSON.parse(JSON.stringify(o));
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
function mol(m){return C.STRUCTURE.canonicalize(m||{});}
function adjacency(m){return C.STRUCTURE.adjacency(m);}
function resonance(molecule,options){
 const m=mol(molecule), A=adjacency(m), centers=[];
 for(const b of m.bonds){if(Number(b.order)!==2)continue;const a=m.atoms.find(x=>x.id===b.atomA),z=m.atoms.find(x=>x.id===b.atomB);if(!a||!z)continue;
   const aNbr=(A[a.id]||[]).filter(x=>x.atomId!==z.id).some(x=>[1,2].includes(Number(x.bond.order)));
   const zNbr=(A[z.id]||[]).filter(x=>x.atomId!==a.id).some(x=>[1,2].includes(Number(x.bond.order)));
   if(aNbr||zNbr)centers.push({bondId:b.id,atomA:a.id,atomB:z.id,conjugated:true});
 }
 const systems=[];if(centers.length)systems.push({id:'res-system-1',type:'conjugated',bonds:centers});
 return ok({moleculeId:m.id,systems,source:'graph-analysis',level:options?.level||'STRUCTURAL_HEURISTIC'});
}
function tautomerCandidates(molecule){
 const m=mol(molecule), A=adjacency(m), out=[];
 for(const a of m.atoms.filter(x=>x.element==='O'||x.element==='N')){
   const h=(A[a.id]||[]).find(x=>m.atoms.find(z=>z.id===x.atomId)?.element==='H'); if(!h)continue;
   const carbonyl=(A[a.id]||[]).find(x=>Number(x.bond.order)===1&&m.atoms.find(z=>z.id===x.atomId)?.element==='C');
   if(carbonyl)out.push({type:'prototropic',center:a.id,protonAtom:h.atomId,adjacentAtom:carbonyl.atomId,description:'potencjalny transfer protonu sprzężony ze zmianą rzędu wiązania'});
 }
 return ok({moleculeId:m.id,candidates:out,generatedStructures:[],source:'rule-based-candidate',note:'kandydat nie jest automatycznie uznawany za poprawny tautomer'});
}
function atomSignature(a){return [a.element,a.isotope??'',a.formalCharge??a.charge??0].join(':');}
function graphSignature(m){const atoms=[...m.atoms].sort((a,b)=>String(a.id).localeCompare(String(b.id))).map(atomSignature).join(';');const bonds=[...m.bonds].map(b=>[String(b.atomA),String(b.atomB)].sort().join('-')+':'+b.order).sort().join(';');return atoms+'||'+bonds+'||'+m.charge;}
function constitutionalIsomers(molecules){
 const list=(molecules||[]).map(mol), groups=new Map();list.forEach(m=>{const formula=m.formula||'';if(!groups.has(formula))groups.set(formula,[]);groups.get(formula).push(m);});
 const out=[];groups.forEach((ms,formula)=>{if(ms.length<2)return;out.push({formula,members:ms.map(m=>({id:m.id,signature:graphSignature(m)})),type:'constitutional-or-structural-variants'});});
 return ok({groups:out,source:'graph-signature',note:'rozróżnienie pełnej równoważności grafów wymaga niezależnego algorytmu izomorfizmu grafów'});
}
function stereo(molecule){
 const m=mol(molecule), A=adjacency(m), centers=[];
 for(const a of m.atoms){const n=A[a.id]||[], unique=new Set(n.map(x=>m.atoms.find(z=>z.id===x.atomId)?.element));if(n.length>=4&&unique.size>=3)centers.push({atomId:a.id,kind:'potential-stereocenter',ligands:n.map(x=>x.atomId)});}
 const ez=m.bonds.filter(b=>Number(b.order)===2&&b.stereochemistry).map(b=>({bondId:b.id,descriptor:b.stereochemistry}));
 return ok({moleculeId:m.id,centers,EZ:ez,RS:(m.stereochemistry?.centers||[]),enantiomerOf:m.stereochemistry?.enantiomerOf||null,diastereomerOf:m.stereochemistry?.diastereomerOf||null,source:'graph-topology',level:'ASSIGNED_OR_CANDIDATE'});
}
function conformers(molecule,options){
 const m=mol(molecule), list=Array.isArray(m.metadata?.conformers)?clone(m.metadata.conformers):[];
 return ok({moleculeId:m.id,conformers:list,active:options?.conformerId||list[0]?.id||null,source:'stored-geometries',generated:false});
}
function classifyRelationship(a,b){
 const x=mol(a),y=mol(b); if(x.formula!==y.formula)return {ok:true,relationship:'different-composition'};
 const sx=graphSignature(x),sy=graphSignature(y);if(sx===sy)return {ok:true,relationship:'identical-canonical-signature'};
 const stA=x.stereochemistry?.centers||[],stB=y.stereochemistry?.centers||[];if(stA.length&&stB.length)return {ok:true,relationship:'stereoisomer-candidate'};
 return {ok:true,relationship:'structural-isomer-candidate'};
}
C.ORGANIC={version:'2.17',resonance,tautomerCandidates,constitutionalIsomers,stereochemistry:stereo,conformers,classifyRelationship};
})(window);

} catch (err) {
  try { console.warn('[CHE module 34]', err && err.message ? err.message : err); } catch(_){}
}

