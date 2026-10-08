try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const canon=m=>C.STRUCTURE.canonicalize(m||{});
const atomKey=a=>[a.element,Number(a.formalCharge??a.charge??0),a.isotope??''].join(':');
const adj=m=>C.ISOMORPHISM.adjacency(m);
function neighborhood(m,id,A,depth){
 let cur=new Set([id]),seen=new Set([id]),out=[];
 for(let d=0;d<depth;d++){const nxt=new Set();for(const x of cur)for(const e of A[x]||[]){out.push(atomKey(m.atoms.find(a=>a.id===e.id))+':'+Number(e.bond.order||1));if(!seen.has(e.id)){seen.add(e.id);nxt.add(e.id);}}cur=nxt;}
 return out.sort().join('|');
}
function atomCandidates(r,p,ra,pa,a,used){
 const sigR=[atomKey(a),ra[a.id]?.length||0,neighborhood(r,a.id,ra,2)];
 return p.atoms.filter(z=>!used.has(z.id)&&atomKey(z)===atomKey(a)).map(z=>{
   const sigP=[atomKey(z),pa[z.id]?.length||0,neighborhood(p,z.id,pa,2)];
   let score=0;if(sigR[1]===sigP[1])score+=3;if(sigR[2]===sigP[2])score+=5;
   const exact=neighborhood(r,a.id,ra,3)===neighborhood(p,z.id,pa,3);if(exact)score+=4;
   return {atom:z,score};
 }).sort((u,v)=>v.score-u.score||String(u.atom.id).localeCompare(String(v.atom.id)));
}
function map(reactant,product,options){
 const r=canon(reactant),p=canon(product),ra=adj(r),pa=adj(p),used=new Set(),mapping={},scores=[],unmatched=[];
 const atoms=[...r.atoms].sort((a,b)=>(atomCandidates(r,p,ra,pa,b,used).length-atomCandidates(r,p,ra,pa,a,used).length)||String(a.id).localeCompare(String(b.id)));
 for(const a of atoms){
   const cs=atomCandidates(r,p,ra,pa,a,used), best=cs[0];
   if(!best){unmatched.push({side:'reactant',atomId:a.id});continue;}
   mapping[a.id]=best.atom.id;used.add(best.atom.id);scores.push({reactantAtom:a.id,productAtom:best.atom.id,score:best.score,candidates:cs.length});
 }
 p.atoms.forEach(a=>{if(!used.has(a.id))unmatched.push({side:'product',atomId:a.id});});
 const avg=scores.length?scores.reduce((s,x)=>s+x.score,0)/scores.length:0;
 const confidence=unmatched.length===0?(avg>=10?'HIGH':avg>=7?'MEDIUM':'LOW'):(scores.length?'PARTIAL':'NONE');
 return ok({mapping,unmatched,scores,averageScore:avg,confidence,complete:unmatched.length===0,algorithm:'iterative neighborhood refinement + deterministic symmetry resolution'});
}
function mapReaction(reaction,options){
 const rs=(reaction?.reactants||[]).map(canon),ps=(reaction?.products||[]).map(canon);
 const R=[],P=[];rs.forEach((m,i)=>(m.atoms||[]).forEach(a=>R.push({atom:a,component:i,molecule:m,ref:i+':'+String(a.id)})));ps.forEach((m,i)=>(m.atoms||[]).forEach(a=>P.push({atom:a,component:i,molecule:m,ref:i+':'+String(a.id)})));
 const used=new Set(),mapping={},unmatched=[],scores=[];
 const key=a=>atomKey(a);
 const neighborhoodFlat=(item)=>{if(!item)return '';const A=adj(item.molecule),sig=[];for(const e of A[item.atom.id]||[])sig.push(key(item.molecule.atoms.find(a=>a.id===e.id))+':'+e.bond.order);return sig.sort().join('|');};
 const atoms=[...R].sort((a,b)=>(P.filter(y=>!used.has(y.ref)&&key(a.atom)===key(y.atom)).length-P.filter(y=>!used.has(y.ref)&&key(b.atom)===key(y.atom)).length)||String(a.ref).localeCompare(String(b.ref)));
 for(const x of atoms){
   const cs=P.filter(y=>!used.has(y.ref)&&key(x.atom)===key(y.atom)).map(y=>({y,score:(x.component===y.component?1:0)+(neighborhoodFlat(x)===neighborhoodFlat(y)?6:0)+(x.molecule.atoms.length===y.molecule.atoms.length?2:0)})).sort((u,v)=>v.score-u.score||String(u.y.ref).localeCompare(String(v.y.ref)));
   if(!cs.length){unmatched.push({side:'reactant',component:x.component,atomId:x.atom.id,ref:x.ref});continue;}
   const best=cs[0];mapping[x.ref]=best.y.ref;used.add(best.y.ref);scores.push(best.score);
 }
 P.forEach(x=>{if(!used.has(x.ref))unmatched.push({side:'product',component:x.component,atomId:x.atom.id,ref:x.ref});});
 const avg=scores.length?scores.reduce((a,b)=>a+b,0)/scores.length:0;
 return ok({mapping,unmatched,complete:!unmatched.length,confidence:!unmatched.length?(avg>=6?'HIGH':avg>=3?'MEDIUM':'LOW'):'PARTIAL',averageScore:avg,algorithm:'global iterative mapping with component-scoped atom references'});
}
C.MAPPING={version:'2.29',map,mapReaction};
})(window);

} catch (err) {
  try { console.warn('[CHE module 52]', err && err.message ? err.message : err); } catch(_){}
}

