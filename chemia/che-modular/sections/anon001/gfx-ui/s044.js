

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},canon=m=>C.STRUCTURE.canonicalize(m||{});
const atomMap=(m)=>new Map((m.atoms||[]).map(a=>[String(a.id),a]));
const bondOrder=(m,id)=> (m.bonds||[]).filter(b=>b.atomA===id||b.atomB===id).reduce((s,b)=>s+(Number(b.order)||1),0);
function counts(m){const o={};for(const a of canon(m).atoms||[])o[a.element]=(o[a.element]||0)+1;return o}
function hill(c){return Object.keys(c).sort((a,b)=>a==='C'?-1:b==='C'?1:a==='H'?-1:b==='H'?1:a.localeCompare(b)).map(e=>e+(c[e]===1?'':c[e])).join('')}
function formula(m){const x=canon(m),c=counts(x),q=+x.charge||0;return ok({formula:hill(c)+(q?(q===1?'^+':q===-1?'^-':`^${q>0?q+'+':Math.abs(q)+'-'}`):''),counts:c,charge:q,notation:'Hill'})}
function structural(m){const x=canon(m),A=C.STRUCTURE.adjacency(x),parts=[];for(const a of x.atoms){const ns=(A[a.id]||[]).map(n=>{const q=x.atoms.find(z=>z.id===n.atomId);return `${q?.element||'?'}${+n.bond.order>1?`(${n.bond.order})`:''}`}).sort();parts.push(`${a.element}[${ns.join(',')}]`)}return ok({text:parts.sort().join('–')})}
function implicitH(m){
  const x=canon(m);
  const v=C.VALIDATOR?.validate?.(x);
  if(v?.ok&&v.value?.implicitH?.byAtom)return v.value.implicitH.byAtom;
  const target={H:1,C:4,N:3,O:2,F:1,Cl:1,Br:1,I:1,S:2,P:3};
  const out={};for(const a of x.atoms||[]){const q=Number(a.formalCharge??a.charge??0),bo=bondOrder(x,a.id);out[a.id]=Math.max(0,(target[a.element]??0)-bo+q)}
  return out;
}
function tokenFor(x,a,h){
  if(a.element==='H')return 'H';
  const q=Number(a.formalCharge??a.charge??0), suffix=h>0?`H${h===1?'':h}`:'';
  const charge=q===0?'':q>0?`^${q===1?'+':q+'+'}`:`^${Math.abs(q)===1?'-':Math.abs(q)+'-'}`;
  return `${a.element}${suffix}${charge}`;
}
function carbonGraph(x){
  const A=C.STRUCTURE.adjacency(x), carbon=(x.atoms||[]).filter(a=>a.element==='C').map(a=>a.id);
  const seen=new Set(), comps=[];
  for(const start of carbon){if(seen.has(start))continue;const q=[start],ids=[];seen.add(start);while(q.length){const id=q.shift();ids.push(id);for(const n of A[id]||[])if(x.atoms.find(a=>a.id===n.atomId)?.element==='C'&&!seen.has(n.atomId)){seen.add(n.atomId);q.push(n.atomId)}}comps.push(ids)}
  return comps;
}
function longestCarbonPath(x,ids){
  const A=C.STRUCTURE.adjacency(x), set=new Set(ids);let best=[];
  function dfs(id,path){if(path.length>best.length)best=path.slice();for(const n of A[id]||[])if(set.has(n.atomId)&&!path.includes(n.atomId))dfs(n.atomId,path.concat(n.atomId))}
  ids.forEach(id=>dfs(id,[id]));return best;
}
function semiStructural(m){
  const x=canon(m),H=implicitH(x),am=atomMap(x), A=C.STRUCTURE.adjacency(x), parts=[];
  for(const ids of carbonGraph(x)){
    const path=longestCarbonPath(x,ids);
    if(path.length){
      const chain=path.map(id=>tokenFor(x,am.get(id),Number(H[id])||0));
      const branches=[];
      for(const id of path)for(const n of A[id]||[]){
        if(path.includes(n.atomId))continue;
        const a=am.get(n.atomId);if(!a)continue;
        branches.push({at:id,token:tokenFor(x,a,Number(H[a.id])||0),order:Number(n.bond.order)||1});
      }
      parts.push(chain.map((t,i)=>i<chain.length-1?t+'-' : t).join('')+(branches.length?`[${branches.map(b=>`${b.token}${b.order>1?'='+b.order:''}@${b.at}`).join(',')}]`:'')); 
    }
  }
  if(!parts.length){
    const toks=(x.atoms||[]).filter(a=>a.element!=='H').map(a=>tokenFor(x,a,Number(H[a.id])||0));
    return ok({text:toks.join(''),notation:'semi-structural',fallback:true,reason:'no carbon skeleton'});
  }
  return ok({text:parts.join(' + '),notation:'semi-structural',fallback:false,implicitH:H});
}
function skeletal(m){
  const x=canon(m);return ok({atoms:x.atoms.filter(a=>a.element!=='H').map(a=>({id:a.id,element:a.element})),bonds:x.bonds.filter(b=>x.atoms.find(a=>a.id===b.atomA)?.element!=='H'&&x.atoms.find(a=>a.id===b.atomB)?.element!=='H'),notation:'graph-skeleton'})}
function valenceElectrons(el){return ({H:1,C:4,N:5,O:6,F:7,P:5,S:6,Cl:7,Br:7,I:7}[el]??0)}
function lewis(m){
  const x=canon(m),H=implicitH(x),am=atomMap(x),atoms=[];
  for(const a of x.atoms){const explicitFc=Number(a.formalCharge??a.charge??0); const anyExplicit=(x.atoms||[]).some(z=>Number(z.formalCharge??z.charge??0)!==0); const fc=explicitFc!==0?explicitFc:((Number(x.charge||0)&&!anyExplicit&&a.element!=='H'&&a.id===((x.atoms||[]).find(z=>z.element!=='H')||{}).id)?Number(x.charge||0):0),bo=bondOrder(x,a.id),ih=Number(H[a.id])||0,ve=valenceElectrons(a.element);
    const effectiveBondOrder=bo+ih;
    const lp=Math.max(0,Math.round((ve-fc-effectiveBondOrder)/2));
    atoms.push({id:a.id,element:a.element,formalCharge:fc,bondOrderSum:bo,effectiveBondOrder,implicitHydrogens:ih,valenceElectrons:ve,lonePairs:lp,nonbondingElectrons:lp*2});
  }
  return ok({atoms,bonds:x.bonds.map(b=>({id:b.id,atomA:b.atomA,atomB:b.atomB,order:Number(b.order)||1,electronPairs:(Number(b.order)||1)})),charge:Number(x.charge||0),level:'EDUCATIONAL',source:'COMPUTED'});
}
function representations(m){return ok({formula:formula(m).value,structural:structural(m).value,semiStructural:semiStructural(m).value,skeletal:skeletal(m).value,lewis:lewis(m).value})}
function validate(m){const r=representations(m);return ok({ok:!!canon(m).atoms?.length,errors:canon(m).atoms?.length?[]:[{code:'EMPTY_GRAPH'}],representations:r.value})}
C.REPRESENTATION={version:'2.32',counts,formula,structural,semiStructural,skeletal,lewis,representations,validate};
})(window);

} catch (err) {
  try { console.warn('[CHE module 44]', err && err.message ? err.message : err); } catch(_){}
}