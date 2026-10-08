try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
const clone=o=>JSON.parse(JSON.stringify(o));
const fail=(code,message,context)=>C.FAIL?C.FAIL(code,message,context):{ok:false,error:{code,message,context}};
const ok=value=>C.OK?C.OK(value):{ok:true,value};
const canonical=m=>C.STRUCTURE?.canonicalize?C.STRUCTURE.canonicalize(m):m;
const atomicValence=e=>Number(C.DATA?.ATOM_META?.[e]?.valence);
const elementOrder=(a,b)=>a==='C'?-1:b==='C'?1:a==='H'?-1:b==='H'?1:a.localeCompare(b);
function atomCounts(m){const c={};(m?.atoms||[]).forEach(a=>{c[a.element]=(c[a.element]||0)+1;});return c;}
function formula(m,options){
 const x=canonical(m||{}), c=atomCounts(x), keys=Object.keys(c).sort(elementOrder), body=keys.map(e=>e+(c[e]===1?'':c[e])).join('');
 const charge=Number(x.charge||0), suffix=options?.charge===false||charge===0?'':(charge>0?`^${charge===1?'+':charge+'+'}`:`^${Math.abs(charge)===1?'-':Math.abs(charge)+'-'}`);
 return {formula:body+suffix,counts:c,charge,order:keys};
}
function stableIds(m){
 const x=canonical(m||{}), map={}, used=new Set(), next={};
 const atoms=x.atoms.map((a,i)=>{let id=String(a.id||'');if(!id||used.has(id)){const base=`${a.element||'X'}${(next[a.element]||0)+1}`;next[a.element]=(next[a.element]||0)+1;id=base;while(used.has(id)){next[a.element]++;id=`${a.element}${next[a.element]}`;}}used.add(id);map[String(a.id||`@${i}`)]=id;return {...a,id};});
 const bonds=x.bonds.map((b,i)=>({...b,id:String(b.id||`b${i+1}`),atomA:map[b.atomA]||b.atomA,atomB:map[b.atomB]||b.atomB}));
 return {molecule:{...x,atoms,bonds},map};
}
function neighborOrder(m,id){return (m.bonds||[]).filter(b=>b.atomA===id||b.atomB===id).map(b=>Number(b.order||1)).sort((a,b)=>a-b);}
function implicitHydrogenPlan(m){
 const x=canonical(m||{}), plan=[];
 for(const a of x.atoms){
   if(a.element==='H') continue;
   const target=atomicValence(a.element); if(!Number.isFinite(target)||target<=0) continue;
   const used=(x.bonds||[]).filter(b=>b.atomA===a.id||b.atomB===a.id).reduce((s,b)=>s+Number(b.order||1),0);
   const explicitH=(x.bonds||[]).filter(b=>{const other=b.atomA===a.id?b.atomB:b.atomB===a.id?b.atomA:null;return other&&x.atoms.find(z=>z.id===other)?.element==='H';}).reduce((s,b)=>s+Number(b.order||1),0);
   const missing=Math.max(0,Math.round(target-used));
   if(missing>0 && explicitH===0) plan.push({atomId:a.id,element:a.element,hydrogens:missing,targetValence:target,bondOrderSum:used,reason:'typical-valence'});
 }
 return plan;
}
function addExplicitHydrogens(m,options){
 const x=clone(canonical(m||{})), plan=implicitHydrogenPlan(x), added=[];
 if(options?.apply===false) return ok({molecule:x,plan,applied:false});
 let seq=x.atoms.length+1;
 for(const p of plan){for(let i=0;i<p.hydrogens;i++){let id=`H${seq++}`;while(x.atoms.some(a=>a.id===id))id=`H${seq++}`;x.atoms.push(C.STRUCTURE.createAtom({id,element:'H',role:['explicit-hydrogen'],metadata:{generatedBy:'CHE.RECONSTRUCT',sourceAtom:p.atomId}}));x.bonds.push({id:`hbond-${id}`,atomA:p.atomId,atomB:id,order:1,type:'single',labels:['generated-hydrogen']});added.push(id);}}
 const out=canonical(x); return ok({molecule:out,plan,applied:true,added});
}
function removeGeneratedHydrogens(m){
 const x=clone(canonical(m||{})), remove=new Set(x.atoms.filter(a=>a.element==='H'&&a.metadata?.generatedBy==='CHE.RECONSTRUCT').map(a=>a.id));
 x.atoms=x.atoms.filter(a=>!remove.has(a.id));x.bonds=x.bonds.filter(b=>!remove.has(b.atomA)&&!remove.has(b.atomB));
 return ok({molecule:canonical(x),removed:[...remove]});
}
function atomSignature(m,a){
 const neigh=(m.bonds||[]).filter(b=>b.atomA===a.id||b.atomB===a.id).map(b=>{const id=b.atomA===a.id?b.atomB:b.atomA;const z=m.atoms.find(q=>q.id===id);return `${z?.element||'?'}:${Number(b.order||1)}`;}).sort();
 return `${a.element}|${Number(a.formalCharge||a.charge||0)}|${neigh.join(',')}`;
}
function atomMap(reactant,product){
 const r=canonical(reactant||{}),p=canonical(product||{}), used=new Set(), mapping={}, unmatched=[];
 for(const a of r.atoms){let candidates=p.atoms.filter(z=>!used.has(z.id)&&z.element===a.element&&Number(z.formalCharge||z.charge||0)===Number(a.formalCharge||a.charge||0));candidates.sort((u,v)=>atomSignature(r,a).localeCompare(atomSignature(p,u)));const hit=candidates[0];if(hit){mapping[a.id]=hit.id;used.add(hit.id);}else unmatched.push({side:'reactant',atomId:a.id});}
 p.atoms.forEach(a=>{if(!used.has(a.id))unmatched.push({side:'product',atomId:a.id});});
 return {mapping,unmatched,complete:unmatched.length===0};
}
function mappedDiff(reactant,product){
 const map=atomMap(reactant,product), r=canonical(reactant), p=canonical(product), reverse=Object.fromEntries(Object.entries(map.mapping).map(([a,b])=>[b,a]));
 const key=(a,b)=>[a,b].sort().join('|');
 const rb=new Map(r.bonds.map(b=>[key(b.atomA,b.atomB),b])), pb=new Map(p.bonds.map(b=>[key(reverse[b.atomA]||b.atomA,reverse[b.atomB]||b.atomB),b]));
 const broken=[],formed=[],order=[];
 rb.forEach((b,k)=>{if(!pb.has(k))broken.push(b);else if(Number(pb.get(k).order)!==Number(b.order))order.push({bondId:b.id,to:Number(pb.get(k).order),from:Number(b.order),productBondId:pb.get(k).id});});
 pb.forEach((b,k)=>{if(!rb.has(k))formed.push(b);});
 return {mapping:map,changes:{bondsBroken:broken,bondsFormed:formed,bondOrderChanges:order}};
}
function validate(m){
 const x=canonical(m||{}), v=C.STRUCTURE?.validate?.(x)||{ok:false};
 const f=formula(x), warnings=[];if(f.charge!==Number(x.charge||0))warnings.push({code:'FORMULA_CHARGE_MISMATCH'});
 return {ok:v.ok,status:v.status||'INVALID',structure:v,formula:f,warnings};
}
function reactionTemplate(reactant,product,options){
 const r=canonical(reactant),p=canonical(product), d=mappedDiff(r,p), countsR=atomCounts(r),countsP=atomCounts(p);
 return ok({schemaVersion:'2.19',type:options?.type||'GRAPH_TRANSFORMATION',reactant: r,product:p,mapping:d.mapping,changes:d.changes,balance:{reactants:countsR,products:countsP,balanced:JSON.stringify(countsR)===JSON.stringify(countsP)},conditions:options?.conditions||{},annotations:options?.annotations||[]});
}
function condensedFormula(m){
 const x=canonical(m||{}), f=formula(x).formula;
 const carbon=x.atoms.filter(a=>a.element==='C');
 if(carbon.length===0)return f;
 const degree=id=>(x.bonds||[]).filter(b=>b.atomA===id||b.atomB===id).length;
 const fragments=carbon.map(c=>({id:c.id,degree:degree(c.id),neighbors:(x.bonds||[]).filter(b=>b.atomA===c.id||b.atomB===c.id).map(b=>{const id=b.atomA===c.id?b.atomB:b.atomA;return x.atoms.find(a=>a.id===id)?.element||'?';})}));
 return {formula:f,carbonFramework:fragments,notation:'GRAPH_DERIVED',note:'Pełna konwencja wzoru półstrukturalnego wymaga dalszych reguł nomenklaturowych.'};
}
function normalize(m,options){
 const ids=stableIds(m), x=ids.molecule, f=formula(x), v=validate(x);
 x.formula=f.formula;x.charge=f.charge;x.reconstruction={version:'2.19',normalized:true,idMap:ids.map};
 if(options?.explicitHydrogens) return addExplicitHydrogens(x,{apply:true});
 return ok({molecule:x,formula:f,validation:v,idMap:ids.map});
}
C.RECONSTRUCT={version:'2.19',atomCounts,formula,stableIds,implicitHydrogenPlan,addExplicitHydrogens,removeGeneratedHydrogens,atomMap,mappedDiff,validate,reactionTemplate,condensedFormula,normalize};
})(window);

} catch (err) {
  try { console.warn('[CHE module 41]', err && err.message ? err.message : err); } catch(_){}
}

