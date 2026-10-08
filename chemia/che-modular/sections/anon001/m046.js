try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},canon=m=>C.STRUCTURE.canonicalize(m||{});function key(m,a){const A=C.STRUCTURE.adjacency(m)[a.id]||[];return`${a.element}|${+(a.formalCharge??a.charge??0)}|${A.length}|${A.map(n=>`${m.atoms.find(z=>z.id===n.atomId)?.element||'?'}:${+n.bond.order||1}`).sort().join(',')}`}function map(a,b){const x=canon(a),y=canon(b),used=new Set(),pairs=[],ambiguous=[];for(const ax of x.atoms){const c=y.atoms.filter(by=>!used.has(by.id)&&key(y,by)===key(x,ax));if(c.length===1){pairs.push({from:ax.id,to:c[0].id,confidence:1});used.add(c[0].id)}else if(c.length>1)ambiguous.push({from:ax.id,candidates:c.map(z=>z.id)})}return ok({pairs,ambiguous,complete:pairs.length===x.atoms.length&&pairs.length===y.atoms.length&&!ambiguous.length})}function reactionMap(r){const pairs=[];for(let i=0;i<Math.min(r?.reactants?.length||0,r?.products?.length||0);i++)pairs.push({reactantIndex:i,productIndex:i,...map(r.reactants[i],r.products[i]).value});return ok({pairs,complete:pairs.every(p=>p.complete)})}C.MAPPING={version:'2.24',map,reactionMap}})(window);

} catch (err) {
  try { console.warn('[CHE module 46]', err && err.message ? err.message : err); } catch(_){}
}

