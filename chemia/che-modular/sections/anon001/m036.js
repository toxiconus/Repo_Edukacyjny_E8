try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, clone=o=>JSON.parse(JSON.stringify(o));
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function molecule(m){return C.STRUCTURE.canonicalize(m||{});}
function moleculeCV(m,options){
 const x=molecule(m), v=C.STRUCTURE.validate(x), geo=C.GEOMETRY.geometry(x,{source:options?.geometrySource||'EDUCATIONAL_APPROXIMATION'}).value, fg=C.STRUCTURE.detectFunctionalGroups(x).value||[];
 return ok({type:'moleculeCV',id:x.id,name:x.name,formula:x.formula,charge:x.charge,model:x.model,validation:v,summary:{atoms:x.atoms.length,bonds:x.bonds.length,functionalGroups:fg.length},atoms:x.atoms.map(a=>({id:a.id,element:a.element,charge:a.charge,formalCharge:a.formalCharge,role:a.role,labels:a.labels})),bonds:x.bonds.map(b=>({id:b.id,atomA:b.atomA,atomB:b.atomB,order:b.order,type:b.type,stereochemistry:b.stereochemistry})),functionalGroups:fg,geometry:geo,relations:{organic:C.ORGANIC?.stereochemistry?.(x).value||null}});
}
function atomView(m,atomId){const x=molecule(m), a=x.atoms.find(z=>z.id===atomId);if(!a)return {ok:false,error:{code:'CHE.E.DATA_NOT_FOUND',message:'Nie znaleziono atomu',context:{atomId}}};const adj=C.STRUCTURE.adjacency(x)[atomId]||[];const vsepr=C.GEOMETRY?.vsepr?.(x,atomId);return ok({type:'atom',atom:{...a},neighbors:adj.map(n=>({atomId:n.atomId,bond:n.bond})),vsepr:vsepr?.value||null});}
function bondView(m,bondId){const x=molecule(m), b=x.bonds.find(z=>z.id===bondId);if(!b)return {ok:false,error:{code:'CHE.E.DATA_NOT_FOUND',message:'Nie znaleziono wiązania',context:{bondId}}};const a=x.atoms.find(z=>z.id===b.atomA),z=x.atoms.find(q=>q.id===b.atomB);return ok({type:'bond',bond:b,atoms:[a,z],orderLabel:C.DATA?.BOND_TYPES?.[b.type]?.label||String(b.order),length:C.STRUCTURE.bondLengths(x).value?.find(q=>q.bondId===b.id)||null});}
function groupView(m,groupIdOrType){const x=molecule(m), groups=C.STRUCTURE.detectFunctionalGroups(x).value||[], g=groups.find(q=>q.id===groupIdOrType||q.type===groupIdOrType);if(!g)return {ok:false,error:{code:'CHE.E.DATA_NOT_FOUND',message:'Nie znaleziono grupy funkcyjnej',context:{group:groupIdOrType}}};return ok({type:'functionalGroup',group:g,atoms:g.atoms.map(id=>x.atoms.find(a=>a.id===id)).filter(Boolean),bonds:x.bonds.filter(b=>g.atoms.includes(b.atomA)&&g.atoms.includes(b.atomB))});}
function reactionView(reaction,options){const r=C.TRANSFORM.createReaction(reaction), validation=C.TRANSFORM.validateReaction(r,options).value;return ok({type:'reaction',id:r.id,status:r.status,conditions:r.conditions,validation,reactants:r.reactants.map(m=>moleculeCV(m).value),products:r.products.map(m=>moleculeCV(m).value),changes:r.changes});}
C.VISUAL={version:'2.17',moleculeCV,atomView,bondView,groupView,reactionView};
})(window);

} catch (err) {
  try { console.warn('[CHE module 36]', err && err.message ? err.message : err); } catch(_){}
}

