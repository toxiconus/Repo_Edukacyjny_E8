

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function clone(x){return JSON.parse(JSON.stringify(x));}
function create(input){const x=input||{};return {id:String(x.id||'mechanism-'+Date.now()),nodes:Array.isArray(x.nodes)?clone(x.nodes):[],edges:Array.isArray(x.edges)?clone(x.edges):[],reactionId:x.reactionId||null,source:x.source||'USER_DEFINED',schemaVersion:'2.37'};}
function addState(graph,state){const g=create(graph);const node={id:String(state?.id||'state-'+g.nodes.length),type:'state',moleculeIds:clone(state?.moleculeIds||[]),label:state?.label||null};g.nodes.push(node);return ok(g);}
function addTransform(graph,transform){const g=create(graph),x=transform||{};if(!C.TRANSFORM)return C.FAIL('CHE.E.UNSUPPORTED','CHE.TRANSFORM niedostępny');const edge={id:String(x.id||'step-'+g.edges.length),type:'transform',from:x.from,to:x.to,changes:clone(x.changes||{}),reactionId:x.reactionId||null};g.edges.push(edge);return ok(g);}
function validate(graph){const g=create(graph),e=[],ids=new Set();g.nodes.forEach(n=>{if(ids.has(n.id))e.push({code:'DUPLICATE_NODE',id:n.id});ids.add(n.id);});g.edges.forEach(x=>{if(!ids.has(x.from)||!ids.has(x.to))e.push({code:'BROKEN_EDGE',id:x.id});});return ok({ok:!e.length,errors:e,nodeCount:g.nodes.length,edgeCount:g.edges.length});}
function fromReaction(reaction){const r=reaction||{},g=create({reactionId:r.id,source:'CHE.REACTION'});const a={id:'reactants',type:'state',moleculeIds:(r.reactants||[]).map(x=>x.formula)};const b={id:'products',type:'state',moleculeIds:(r.products||[]).map(x=>x.formula)};g.nodes=[a,b];g.edges=[{id:'reaction-transform',type:'transform',from:a.id,to:b.id,reactionId:r.id,changes:clone(r.changes||{})}];return ok(g);}
C.MECHANISM_GRAPH={version:'2.37',create,addState,addTransform,validate,fromReaction};
})(window);

} catch (err) {
  try { console.warn('[CHE module 56]', err && err.message ? err.message : err); } catch(_){}
}