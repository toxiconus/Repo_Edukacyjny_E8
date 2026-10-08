try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const canon=m=>C.STRUCTURE.canonicalize(m||{});
function counts(ms){const out={};for(const m of ms||[])for(const a of m.atoms||[]){const coef=Number(m?.coef||1);out[a.element]=(out[a.element]||0)+coef;}return out;}
function charges(ms){return (ms||[]).reduce((s,m)=>s+Number(m.charge||0),0);}
function bondSet(ms){const out=new Map();for(const m of ms||[])for(const b of m.bonds||[]){const k=[m.id,b.atomA,b.atomB].sort().join('|');out.set(k,Number(b.order||1));}return out;}
function reactionBalance(r,p){
 const a=counts(r),b=counts(p),els=[...new Set([...Object.keys(a),...Object.keys(b)])].sort(),delta={};
 els.forEach(e=>delta[e]=(b[e]||0)-(a[e]||0));
 const chargeDelta=charges(p)-charges(r);
 return {ok:els.every(e=>delta[e]===0)&&chargeDelta===0,elements:els,delta,chargeLeft:charges(r),chargeRight:charges(p),chargeDelta};
}
function mapChanges(r,p,mapping){
 const reverse=Object.fromEntries(Object.entries(mapping||{}).map(([a,b])=>[b,a]));
 const R=new Map(),P=new Map(); const ref=(ci,id)=>ci+':'+String(id);
 for(let i=0;i<(r||[]).length;i++)for(const b of r[i].bonds||[]){const k=[ref(i,b.atomA),ref(i,b.atomB)].sort().join('|');R.set(k,{...b,molecule:r[i].id,component:i});}
 for(let i=0;i<(p||[]).length;i++)for(const b of p[i].bonds||[]){const pa=reverse[ref(i,b.atomA)]||ref(i,b.atomA),pz=reverse[ref(i,b.atomB)]||ref(i,b.atomB),k=[pa,pz].sort().join('|');P.set(k,{...b,molecule:p[i].id,component:i});}
 const broken=[],formed=[],order=[];
 R.forEach((b,k)=>{if(!P.has(k))broken.push(b);else if(Number(P.get(k).order)!==Number(b.order))order.push({before:b,after:P.get(k)});});
 P.forEach((b,k)=>{if(!R.has(k))formed.push(b);});
 return {bondsBroken:broken,bondsFormed:formed,bondOrderChanges:order};
}
function validate(reaction,options){
 const r= reaction||{}, rs=(r.reactants||[]).map(canon), ps=(r.products||[]).map(canon), errors=[],warnings=[];
 const rv=rs.map(C.VALIDATOR.validate),pv=ps.map(C.VALIDATOR.validate);
 rv.forEach((v,i)=>{if(!v.value.ok)errors.push({code:'INVALID_REACTANT',index:i,validation:v.value});});
 pv.forEach((v,i)=>{if(!v.value.ok)errors.push({code:'INVALID_PRODUCT',index:i,validation:v.value});});
 const bal=reactionBalance(rs,ps);if(!bal.ok)errors.push({code:'REACTION_UNBALANCED',balance:bal});
 const hasStructuralData = rs.some(m=>Array.isArray(m?.atoms)&&m.atoms.length) || ps.some(m=>Array.isArray(m?.atoms)&&m.atoms.length);
 const shouldMap = !!C.MAPPING?.mapReaction && (hasStructuralData || !!options?.requireMapping || !!options?.strictMapping);
 const mp = shouldMap ? (C.MAPPING.mapReaction({reactants:rs,products:ps},options).value || {complete:true,mapping:{}}) : {complete:true,mapping:{}};
 if(shouldMap && !mp.complete)errors.push({code:'ATOM_MAPPING_INCOMPLETE',mapping:mp});
 const changes = shouldMap ? mapChanges(rs,ps,mp.mapping) : {bondsBroken:[],bondsFormed:[],bondOrderChanges:[]};
 const declared=r.changes||{};
 const declaredCounts={broken:(declared.bondsBroken||[]).length,formed:(declared.bondsFormed||[]).length,orders:(declared.bondOrderChanges||[]).length};
 if(options?.requireDeclaredChanges && !declaredCounts.broken&&!declaredCounts.formed&&!declaredCounts.orders)warnings.push({code:'CHANGES_INFERRED_ONLY'});
 const conditions=r.conditions||{};
 if(options?.requireConditions && !Object.values(conditions).some(v=>v!=null&&v!==''&&(Array.isArray(v)?v.length:true)))warnings.push({code:'NO_REACTION_CONDITIONS'});
 const status=errors.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID';
 return ok({ok:!errors.length,status,errors,warnings,balance:bal,mapping:mp,changes,source:'COMPUTED'});
}
function transform(reaction,options){
 const v=validate(reaction,options);
 if(!v.value.ok)return v;
 const r=JSON.parse(JSON.stringify(reaction||{}));
 r.changes=v.value.changes;
 r.validation=v.value;
 r.status=v.value.status;
 return ok(r);
}
function validateTransformation(before,after,options){
 const r={reactants:[canon(before)],products:[canon(after)],changes:{}};
 return validate(r,options);
}
C.REACTION_VALIDATOR={version:'2.30',validate,transform,validateTransformation,reactionBalance,mapChanges};
})(window);

} catch (err) {
  try { console.warn('[CHE module 53]', err && err.message ? err.message : err); } catch(_){}
}

