

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}; C.DATA=C.DATA||{};
function arr(x){return Array.isArray(x)?x:[]}
function obj(x){return x&&typeof x==='object'?x:{} }
function keys(x){return Object.keys(obj(x))}
function auditElements(){
 const D=C.DATA.ELEMENTS_118||[]; const bad=[]; const seenS=new Set(),seenZ=new Set();
 D.forEach((e,i)=>{const z=Number(e.z),s=e.s||e.symbol;if(!s||!Number.isFinite(z)||seenS.has(s)||seenZ.has(z)) bad.push({i,s,z}); seenS.add(s);seenZ.add(z)});
 return {total:D.length,uniqueSymbols:seenS.size,uniqueZ:seenZ.size,complete:D.length===118&&bad.length===0,bad};
}
function auditSubstances(){
 const D=C.DATA.SUBSTANCES||{}; const rows=[]; let core=0;
 for(const [id,r] of Object.entries(D)){const formula=r&&r.formula||r&&r.f||id; const ok=!!formula; if(ok)core++; rows.push({id,formula,core:ok});}
 return {total:rows.length,core,missingCore:rows.filter(x=>!x.core),complete:rows.length>0&&core===rows.length,rows};
}
function auditMolecules(){
 const D=C.DATA.MOLECULES||{}; const rows=[]; let core=0;
 for(const [id,r] of Object.entries(D)){
  const atoms=arr(r&&r.atoms),bonds=arr(r&&r.bonds),formula=C.DATA.SUBSTANCES?.[id]?.formula||id;
  const expected=C.CHEM?.parseFormula?.(formula),actual={};
  atoms.forEach(a=>{actual[a.element]=(actual[a.element]||0)+1;});
  const elementsMatch=!!expected&&Object.keys({...expected,...actual}).every(e=>expected[e]===actual[e]);
  const badBonds=bonds.filter(b=>!Number.isInteger(b.a)||!Number.isInteger(b.b)||!atoms[b.a]||!atoms[b.b]||Number(b.order)<=0);
  const hasDepth=atoms.some(a=>Math.abs(Number(a.z)||0)>1e-9),cy=Math.cos(.6),sy=Math.sin(.6),cx=Math.cos(.5),sx=Math.sin(.5),positions={};
  atoms.forEach((a,i)=>{const x=Number(a.x)||0,y=Number(a.y)||0,z=Number(a.z)||0,z1=-x*sy+z*cy,px=hasDepth?x*cy+z*sy:x,py=hasDepth?-(y*cx-z1*sx):y,key=px.toFixed(4)+','+py.toFixed(4);(positions[key]||(positions[key]=[])).push(i);});
  const projectedOverlaps=Object.values(positions).filter(indices=>indices.length>1);
  const ok=atoms.length>0&&elementsMatch&&badBonds.length===0&&projectedOverlaps.length===0;
  if(ok)core++;
  rows.push({id,formula,atoms:atoms.length,bonds:bonds.length,elementsMatch,badBonds:badBonds.length,projectedOverlaps,core:ok});
 }
 return {total:rows.length,core,missingCore:rows.filter(x=>!x.core),complete:rows.length>0&&core===rows.length,rows};
}
function auditReactions(){
 const D=C.DATA.REACTIONS||{}; const rows=[]; let core=0;
 for(const [id,r] of Object.entries(D)){const rr=arr(r&&r.reactants),pp=arr(r&&r.products); const ok=rr.length>0&&pp.length>0&&[...rr,...pp].every(x=>x&&x.formula&&Number(x.coef)>0); if(ok)core++; rows.push({id,reactants:rr.length,products:pp.length,core:ok});}
 return {total:rows.length,core,missingCore:rows.filter(x=>!x.core),complete:rows.length>0&&core===rows.length,rows};
}
const report={version:'2.84',elements:auditElements(),substances:auditSubstances(),molecules:auditMolecules(),reactions:auditReactions(),policy:'simple-base-finalization: indexes and validation only; no new chemical values'};
C.DATA.SIMPLE_BASE_FINAL_V284=Object.freeze(report);
C.SIMPLE_BASES_FINAL_V284={audit:()=>C.DATA.SIMPLE_BASE_FINAL_V284,ok:()=>Object.values(C.DATA.SIMPLE_BASE_FINAL_V284).filter(x=>x&&typeof x==='object'&&'complete' in x).every(x=>x.complete)};
})(window);

} catch (err) {
  try { console.warn('[CHE module 159]', err && err.message ? err.message : err); } catch(_){}
}