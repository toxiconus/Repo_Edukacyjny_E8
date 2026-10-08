

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const canon=m=>C.STRUCTURE.canonicalize(m||{});
const atomKey=a=>[a.element,Number(a.formalCharge??a.charge??0),a.isotope??'',a.aromatic?1:0].join(':');
const bondKey=b=>String(Number(b.order||1));
function adj(m){
 const A={};(m.atoms||[]).forEach(a=>A[a.id]=[]);
 (m.bonds||[]).forEach(b=>{if(A[b.atomA]&&A[b.atomB]){A[b.atomA].push({id:b.atomB,bond:b});A[b.atomB].push({id:b.atomA,bond:b});}});
 return A;
}
function degreeSig(m,id,A){
 return (A[id]||[]).map(x=>atomKey(m.atoms.find(a=>a.id===x.id))+'@'+bondKey(x.bond)).sort().join(',');
}
function initialColors(m,A){
 const arr=m.atoms.map(a=>({id:a.id,key:atomKey(a)+'|d'+(A[a.id]||[]).length+'|'+degreeSig(m,a.id,A)}));
 const dict={}; let next=0;
 return Object.fromEntries(arr.map(x=>{if(dict[x.key]==null)dict[x.key]=next++;return [x.id,dict[x.key]];}));
}
function refine(m,A,colors){
 let cur={...colors};
 for(let round=0;round<Math.max(2,m.atoms.length);round++){
   const sigs=m.atoms.map(a=>({id:a.id,s:[atomKey(a),cur[a.id],...(A[a.id]||[]).map(x=>cur[x.id]+':'+bondKey(x.bond)).sort()].join('|')}));
   const dict={},nxt={};let n=0;
   for(const x of sigs.sort((u,v)=>u.s.localeCompare(v.s))){if(dict[x.s]==null)dict[x.s]=n++;nxt[x.id]=dict[x.s];}
   let same=true;for(const id of Object.keys(nxt))if(nxt[id]!==cur[id]){same=false;break;}
   cur=nxt;if(same)break;
 }
 return cur;
}
function candidateOrder(m,A,colors){
 return [...m.atoms].sort((a,b)=>(colors[a.id]-colors[b.id])||(A[a.id].length-A[b.id].length)||String(a.id).localeCompare(String(b.id)));
}
function compatible(a,b,m1,m2,A1,A2,map,rev){
 if(atomKey(a)!==atomKey(b))return false;
 if((A1[a.id]||[]).length!==(A2[b.id]||[]).length)return false;
 for(const e of A1[a.id]||[]){
   if(map[e.id]){
     const target=map[e.id], edge=(A2[b.id]||[]).find(x=>x.id===target);
     if(!edge || bondKey(edge.bond)!==bondKey(e.bond))return false;
   }
 }
 return true;
}
function isomorphic(left,right,options){
 const a=canon(left),b=canon(right);
 if(a.atoms.length!==b.atoms.length||a.bonds.length!==b.bonds.length)return ok({isomorphic:false,mapping:{},reason:'COUNT_MISMATCH'});
 const A=adj(a),B=adj(b), ca=refine(a,A,initialColors(a,A)), cb=refine(b,B,initialColors(b,B));
 const counts=x=>Object.values(x).reduce((o,v)=>(o[v]=(o[v]||0)+1,o),{});
 if(JSON.stringify(Object.values(counts(ca)).sort())!==JSON.stringify(Object.values(counts(cb)).sort()))return ok({isomorphic:false,mapping:{},reason:'COLOR_CLASS_MISMATCH'});
 const order=candidateOrder(a,A,ca), map={},rev={};let nodes=0,found=null,limit=Number(options?.limit||100000);
 function dfs(i){
   if(found||nodes++>limit)return;
   if(i===order.length){found={...map};return;}
   const x=order[i], candidates=b.atoms.filter(y=>cb[y.id]===ca[x.id]&&!rev[y.id]);
   for(const y of candidates){
     if(!compatible(x,y,a,b,A,B,map,rev))continue;
     map[x.id]=y.id;rev[y.id]=x.id;dfs(i+1);if(found)return;delete map[x.id];delete rev[y.id];
   }
 }
 dfs(0);
 return ok({isomorphic:!!found,mapping:found||{},nodes,limit,algorithm:'VF2-style backtracking + WL refinement'});
}
function canonicalLabel(m,options){
 const x=canon(m),A=adj(x),colors=refine(x,A,initialColors(x,A)), order=candidateOrder(x,A,colors).map(a=>a.id);
 const limit=Number(options?.limit||200000);let nodes=0,best=null;
 const map={},used=new Set();
 function serialize(ordering){
   const pos=Object.fromEntries(ordering.map((id,i)=>[id,i]));
   const atoms=ordering.map(id=>{const a=x.atoms.find(z=>z.id===id);return atomKey(a);}).join(';');
   const bonds=x.bonds.map(b=>{const i=pos[b.atomA],j=pos[b.atomB];return [Math.min(i,j),Math.max(i,j),bondKey(b)].join(',');}).sort().join(';');
   return atoms+'||'+bonds;
 }
 const groups={};order.forEach(id=>(groups[colors[id]]??=[]).push(id));
 const groupKeys=Object.keys(groups).sort((a,b)=>Number(a)-Number(b));
 const slots=groupKeys.map(k=>groups[k]);
 function permute(arr,cb){
   const usedI=new Set(),cur=[];
   function go(){if(nodes++>limit)return false;if(cur.length===arr.length)return cb(cur.slice());for(let i=0;i<arr.length;i++)if(!usedI.has(i)){usedI.add(i);cur.push(arr[i]);if(go()===false)return false;cur.pop();usedI.delete(i);}return true;}
   return go();
 }
 function walk(g){
   if(g===slots.length){const ids=[].concat(...slots.map((_,i)=>map['g'+i]||[]));const s=serialize(ids);if(best==null||s<best.label)best={label:s,ordering:ids};return;}
 }
 
 let choices=[[]];
 for(const s of slots){
   const next=[];
   permute(s,p=>{for(const base of choices)next.push(base.concat(p));});
   choices=next.slice(0,limit);
   if(!choices.length)break;
 }
 if(choices.length)best={label:choices.map(ids=>serialize(ids)).sort()[0],ordering:choices.sort((u,v)=>serialize(u).localeCompare(serialize(v)))[0]};
 return ok({label:best?.label||'',ordering:best?.ordering||[],algorithm:'WL refinement + bounded exact color-class permutation',complete:choices.length>0&&nodes<=limit,nodes,limit});
}
C.ISOMORPHISM={version:'2.28',isomorphic,canonicalLabel,adjacency:adj,refine};
})(window);

} catch (err) {
  try { console.warn('[CHE module 51]', err && err.message ? err.message : err); } catch(_){}
}