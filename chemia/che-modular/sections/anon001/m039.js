try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, clone=o=>JSON.parse(JSON.stringify(o));
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function canonical(m){return C.STRUCTURE.canonicalize(m||{});}
function bondKey(b){return [b.atomA??b.a,b.atomB??b.b].map(String).sort().join('|');}
function atomCounts(m){const o={};(m?.atoms||[]).forEach(a=>o[a.element]=(o[a.element]||0)+1);return o;}
function atomMap(m){return new Map((m?.atoms||[]).map(a=>[String(a.id),a]));}
function normalizeChangeList(t){const x=t||{};return {bondsBroken:Array.isArray(x.bondsBroken)?x.bondsBroken.slice():[],bondsFormed:Array.isArray(x.bondsFormed)?clone(x.bondsFormed):[],bondOrderChanges:Array.isArray(x.bondOrderChanges)?clone(x.bondOrderChanges):[],atomsTransferred:Array.isArray(x.atomsTransferred)?clone(x.atomsTransferred):[],protonTransfers:Array.isArray(x.protonTransfers)?clone(x.protonTransfers):[]};}
function diff(before,after){
  const b=canonical(before), a=canonical(after), bm=new Map((b.bonds||[]).map(x=>[bondKey(x),x])), am=new Map((a.bonds||[]).map(x=>[bondKey(x),x]));
  const broken=[],formed=[],orders=[];
  bm.forEach((x,k)=>{if(!am.has(k)) broken.push({bondId:x.id,atomA:x.atomA,atomB:x.atomB,order:x.order}); else if(Number(x.order)!==Number(am.get(k).order)) orders.push({bondId:x.id,atomA:x.atomA,atomB:x.atomB,from:x.order,to:am.get(k).order});});
  am.forEach((x,k)=>{if(!bm.has(k)) formed.push({bondId:x.id,atomA:x.atomA,atomB:x.atomB,order:x.order});});
  const ba=atomMap(b), aa=atomMap(a), transferred=[];
  ba.forEach((x,id)=>{if(!aa.has(id)) transferred.push({atomId:id,element:x.element,from:'before',to:'absent'});});
  aa.forEach((x,id)=>{if(!ba.has(id)) transferred.push({atomId:id,element:x.element,from:'absent',to:'after'});});
  return {bondsBroken:broken,bondsFormed:formed,bondOrderChanges:orders,atomsTransferred:transferred,protonTransfers:[],changedAtomCount:transferred.length};
}
function createReaction(input){
 const x=input||{}, changes=normalizeChangeList(x.changes);
 return {id:String(x.id||'reaction-'+Date.now()),type:x.type||'transformation',reactants:(x.reactants||[]).map(canonical),products:(x.products||[]).map(canonical),changes,conditions:x.conditions?clone(x.conditions):{temperatureK:null,pressurePa:null,solvent:null,catalyst:null,light:null,timeS:null,atmosphere:null,notes:[]},annotations:Array.isArray(x.annotations)?clone(x.annotations):[],status:x.status||'STRUCTURAL',validation:null};
}
function balanceStructure(reactants,products){
 const L={},R={};for(const m of reactants||[])Object.entries(atomCounts(m)).forEach(([e,n])=>L[e]=(L[e]||0)+n);for(const m of products||[])Object.entries(atomCounts(m)).forEach(([e,n])=>R[e]=(R[e]||0)+n);
 const elements=[...new Set([...Object.keys(L),...Object.keys(R)])].sort(),delta={};elements.forEach(e=>delta[e]=(R[e]||0)-(L[e]||0));
 const chargeL=(reactants||[]).reduce((s,m)=>s+Number(m.charge||0),0),chargeR=(products||[]).reduce((s,m)=>s+Number(m.charge||0),0);
 return {ok:elements.every(e=>delta[e]===0)&&chargeL===chargeR,atomsLeft:L,atomsRight:R,delta,chargeLeft:chargeL,chargeRight:chargeR,elements};
}
function validateReaction(reaction,options){
 const r=createReaction(reaction), warnings=[], errors=[];
 const rb=r.reactants.map(canonical), rp=r.products.map(canonical);
 rb.forEach((m,i)=>{const v=C.STRUCTURE.validate(m);if(!v.ok)errors.push({code:'INVALID_REACTANT',index:i,validation:v});});
 rp.forEach((m,i)=>{const v=C.STRUCTURE.validate(m);if(!v.ok)errors.push({code:'INVALID_PRODUCT',index:i,validation:v});});
 const balance=balanceStructure(rb,rp); if(!balance.ok)errors.push({code:'UNBALANCED_REACTION',balance});
 const inferred=[]; for(let i=0;i<Math.max(rb.length,rp.length);i++){if(rb[i]&&rp[i]) inferred.push(diff(rb[i],rp[i]));}
 const declared=r.changes; if(!declared.bondsBroken.length&&!declared.bondsFormed.length&&!declared.bondOrderChanges.length&&!declared.atomsTransferred.length){r.changes=mergeDiffs(inferred);}
 const hasConditions=!!r.conditions && Object.values(r.conditions).some(v=>v!==null&&v!==undefined&&v!==''&&(Array.isArray(v)?v.length: true));
 if(!hasConditions)warnings.push({code:'NO_REACTION_CONDITIONS',message:'Brak jawnych warunków transformacji'});
 if(options?.requireCatalyst&&r.conditions?.catalyst==null)warnings.push({code:'CATALYST_NOT_SPECIFIED'});
 if(options?.requireSolvent&&r.conditions?.solvent==null)warnings.push({code:'SOLVENT_NOT_SPECIFIED'});
 const status=errors.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID';
 r.validation={ok:!errors.length,status,errors,warnings,balance,inferredChanges:inferred}; return ok(r);
}
function mergeDiffs(ds){const out=normalizeChangeList();for(const d of ds){out.bondsBroken.push(...d.bondsBroken);out.bondsFormed.push(...d.bondsFormed);out.bondOrderChanges.push(...d.bondOrderChanges);out.atomsTransferred.push(...d.atomsTransferred);}return out;}
function applyReaction(molecule,transformation,options){
 const m=canonical(molecule), t=transformation?.changes||transformation||{}, out=clone(m), warnings=[], errors=[];
 for(const bid of t.bondsBroken||[]){const id=typeof bid==='string'?bid:bid.bondId;const i=out.bonds.findIndex(b=>b.id===id||bondKey(b)===bid);if(i<0)errors.push({code:'BOND_NOT_FOUND',bondId:id});else out.bonds.splice(i,1);}
 for(const ch of t.bondOrderChanges||[]){const b=out.bonds.find(x=>x.id===ch.bondId||bondKey(x)===ch.bondKey);if(!b)errors.push({code:'BOND_NOT_FOUND',bondId:ch.bondId});else b.order=Number(ch.to);}
 for(const item of t.atomsTransferred||[]){const id=String(item.atomId);const i=out.atoms.findIndex(a=>String(a.id)===id);if(item.to==='absent'&&i>=0)out.atoms.splice(i,1);else if(item.to!=='absent'&&!out.atoms.some(a=>String(a.id)===id)&&item.element){const ca=C.STRUCTURE.createAtom({id,element:item.element,charge:item.charge||0});if(ca.ok)out.atoms.push(ca.value);else errors.push(ca.error);}}
 for(const b of t.bondsFormed||[]){const r=C.STRUCTURE.addBond(out,b);if(!r.ok)errors.push(r.error);else{out.atoms=r.value.atoms;out.bonds=r.value.bonds;}}
 const canonicalOut=C.STRUCTURE.canonicalize(out),validation=C.STRUCTURE.validate(canonicalOut); if(!validation.ok)errors.push({code:'PRODUCT_INVALID',validation});
 const result={molecule:canonicalOut,changes:diff(m,canonicalOut),validation,warnings,errors,ok:errors.length===0&&validation.ok};
 if(options?.validateBalance) result.balance=balanceStructure([m],[canonicalOut]);
 return ok(result);
}
function transferAtom(molecule,atomId,toMolecule){const m=canonical(molecule), target=canonical(toMolecule||{atoms:[],bonds:[]}), atom=m.atoms.find(a=>String(a.id)===String(atomId));if(!atom)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono atomu',{atomId});const connected=(m.bonds||[]).filter(b=>b.atomA===atom.id||b.atomB===atom.id);if(connected.length)return fail('CHE.E.TRANSFER_REQUIRES_BOND_EDIT','Atom ma jeszcze wiązania',{atomId,bonds:connected.map(b=>b.id)});const out=clone(target);out.atoms.push(clone(atom));return ok({molecule:C.STRUCTURE.canonicalize(out),transferred:atom});}
function transferProton(molecule,fromAtomId,toAtomId){const m=canonical(molecule), A=atomMap(m), h=(m.atoms||[]).find(a=>a.element==='H'&&A.has(a.id)&&String(a.id)===String(fromAtomId));if(!h)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono protonu',{atomId:fromAtomId});const donor=(m.bonds||[]).find(b=>b.atomA===h.id||b.atomB===h.id);if(!donor)return fail('CHE.E.INVALID_INPUT','Proton nie ma wiązania donorowego',{atomId:fromAtomId});const target=String(toAtomId);if(!A.has(target))return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono akceptora',{atomId:toAtomId});const out=clone(m);out.bonds=out.bonds.filter(b=>b.id!==donor.id);const newBond={id:'proton-'+Date.now(),atomA:target,atomB:h.id,order:1,type:'single'};const add=C.STRUCTURE.addBond(out,newBond);if(!add.ok)return add;return ok({molecule:add.value,proton:{atomId:h.id,from:donor.atomA===h.id?donor.atomB:donor.atomA,to:target}});}
function conditions(input){const x=input||{};return {temperatureK:x.temperatureK??null,pressurePa:x.pressurePa??null,solvent:x.solvent??null,catalyst:x.catalyst??null,light:x.light??null,timeS:x.timeS??null,atmosphere:x.atmosphere??null,notes:Array.isArray(x.notes)?x.notes.slice():[]};}
C.TRANSFORM={version:'2.17',createReaction,applyReaction,diff,balanceStructure,validateReaction,transferAtom,transferProton,conditions,atomCounts};
})(window);

} catch (err) {
  try { console.warn('[CHE module 39]', err && err.message ? err.message : err); } catch(_){}
}

