try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const clone=x=>JSON.parse(JSON.stringify(x));
function create(x){const a=x||{};return {id:String(a.id||'mechanism-'+Date.now()),schemaVersion:'2.50',reactionId:a.reactionId||null,nodes:Array.isArray(a.nodes)?clone(a.nodes):[],edges:Array.isArray(a.edges)?clone(a.edges):[],source:a.source||'USER_DEFINED'};}
function validate(g0){const g=create(g0),e=[],ids=new Set();g.nodes.forEach(n=>{if(!n?.id)e.push({code:'NODE_NO_ID'});else if(ids.has(n.id))e.push({code:'DUPLICATE_NODE',id:n.id});else ids.add(n.id);if(n?.type!=='state')e.push({code:'NODE_INVALID_TYPE',id:n?.id});if(!Array.isArray(n?.moleculeIds))e.push({code:'NODE_MOLECULES_NOT_ARRAY',id:n?.id});});g.edges.forEach(x=>{if(!x?.id)e.push({code:'EDGE_NO_ID'});if(!ids.has(x?.from)||!ids.has(x?.to))e.push({code:'BROKEN_EDGE',id:x?.id});if(x?.from===x?.to)e.push({code:'SELF_EDGE',id:x?.id});if(x?.type!=='transform')e.push({code:'EDGE_INVALID_TYPE',id:x?.id});});return ok({ok:e.length===0,errors:e,nodeCount:g.nodes.length,edgeCount:g.edges.length});}
function fromReaction(r){const x=r||{},g=create({reactionId:x.id,source:'CHE.REACTION'});g.nodes=[{id:'reactants',type:'state',moleculeIds:(x.reactants||[]).map(a=>a.formula)},{id:'products',type:'state',moleculeIds:(x.products||[]).map(a=>a.formula)}];g.edges=[{id:'reaction-transform',type:'transform',from:'reactants',to:'products',reactionId:x.id,changes:clone(x.changes||{})}];return ok(g);}
function validateReaction(r){const g=fromReaction(r);if(!g.ok)return g;const v=validate(g.value);return ok({ok:v.value.ok,graph:g.value,validation:v.value});}
C.MECHANISM_GRAPH={version:'2.50',create,validate,fromReaction,validateReaction};
if(E.registry)E.registry.MECHANISM_GRAPH={layer:'DOMAIN',owner:'CHE.MECHANISM_GRAPH',role:'walidowany graf stanów i transformacji mechanizmu',depends:['TRANSFORM','REACTION','STRUCTURE']};
if(E.modules)E.modules.MECHANISM_GRAPH='2.50';
})(window);

} catch (err) {
  try { console.warn('[CHE module 68]', err && err.message ? err.message : err); } catch(_){}
}

