try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, clone=o=>JSON.parse(JSON.stringify(o));
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const canonical=m=>C.STRUCTURE.canonicalize(m||{});
function adjacency(m){return C.STRUCTURE.adjacency(canonical(m));}
function graphSignature(m){const x=canonical(m),atoms=[...x.atoms].sort((a,b)=>String(a.element).localeCompare(String(b.element))||String(a.id).localeCompare(String(b.id))), rel=adjacency(x);return atoms.map(a=>{const ns=(rel[a.id]||[]).map(n=>`${n.bond.order}:${x.atoms.find(z=>z.id===n.atomId)?.element||'?'}`).sort().join(',');return `${a.element}:${Number(a.charge||a.formalCharge||0)}:[${ns}]`;}).join('|');}
function equivalent(a,b){const x=canonical(a),y=canonical(b);const fa=C.RECONSTRUCT?.formula(x).value?.formula||C.RECONSTRUCT?.formula(x)?.formula, fb=C.RECONSTRUCT?.formula(y).value?.formula||C.RECONSTRUCT?.formula(y)?.formula;if(fa&&fb&&fa!==fb)return ok({equivalent:false,reason:'FORMULA_MISMATCH',formulaA:fa,formulaB:fb});return ok({equivalent:graphSignature(x)===graphSignature(y),signatureA:graphSignature(x),signatureB:graphSignature(y),method:'degree-signature'});}
function groupPriorities(m){const groups=C.STRUCTURE.detectFunctionalGroups(canonical(m)).value||[], rank={carboxyl:100,amide:90,aldehyde:80,ketone:75,ester:70,acid:65,amine:60,hydroxyl:50,ether:40,alkene:30,alkyne:30,aromatic:20,halogen:10};return groups.map(g=>({...g,priority:rank[g.type]||0})).sort((a,b)=>b.priority-a.priority);}
function resonanceSystems(m){const x=canonical(m),A=adjacency(x),candidates=[];for(const b of x.bonds){if(Number(b.order)!==2)continue;const a=x.atoms.find(z=>z.id===b.atomA),z=x.atoms.find(q=>q.id===b.atomB);if(!a||!z)continue;const neighA=(A[a.id]||[]).some(n=>Number(n.bond.order)>=1&&n.atomId!==z.id);const neighZ=(A[z.id]||[]).some(n=>Number(n.bond.order)>=1&&n.atomId!==a.id);if(neighA||neighZ)candidates.push({bondId:b.id,atoms:[a.id,z.id],type:'conjugated-double-bond-candidate'});}return ok({moleculeId:x.id,candidates,complete:false,note:'kandydaci strukturalni; brak pełnego generatora form rezonansowych'});}
function tautomerTransforms(m){const x=canonical(m),A=adjacency(x),out=[];for(const a of x.atoms){if(!['O','N','S'].includes(a.element))continue;const h=(A[a.id]||[]).find(n=>x.atoms.find(z=>z.id===n.atomId)?.element==='H');if(!h)continue;const heavy=(A[a.id]||[]).find(n=>x.atoms.find(z=>z.id===n.atomId)?.element==='C'&&Number(n.bond.order)===1);if(heavy)out.push({type:'prototropic-candidate',protonAtom:h.atomId,heteroAtom:a.id,carbonAtom:heavy.atomId});}return ok({moleculeId:x.id,candidates:out,complete:false});}
function stereoDescriptors(m){const x=canonical(m),A=adjacency(x),centers=[];for(const a of x.atoms){const ns=(A[a.id]||[]).map(n=>n.atomId);const uniq=new Set(ns.map(id=>{const q=x.atoms.find(z=>z.id===id);return q?`${q.element}:${q.charge||0}`:'?';}));if(ns.length===4&&uniq.size===4)centers.push({atomId:a.id,element:a.element,descriptor:null,reason:'four distinct neighbor signatures; descriptor requires CIP + geometry'});}const ez=x.bonds.filter(b=>Number(b.order)===1&&b.stereochemistry).map(b=>({bondId:b.id,descriptor:b.stereochemistry}));return ok({moleculeId:x.id,centers,EZ:ez,complete:false});}
function conformerRecord(m,coords,meta){const x=canonical(m);return ok({id:meta?.id||`conf-${Date.now()}`,moleculeId:x.id,coordinates:clone(coords||{}),energy:meta?.energy??null,source:meta?.source||'USER_DEFINED',active:!!meta?.active});}
function classify(a,b){const eq=equivalent(a,b);if(!eq.ok)return eq;const sa=C.ORGANIC?.stereochemistry?.(a)?.value, sb=C.ORGANIC?.stereochemistry?.(b)?.value;if(eq.value.equivalent)return ok({relationship:'IDENTICAL_OR_UNRESOLVED'});return ok({relationship:'DIFFERENT_GRAPH_SIGNATURE',sameFormula:true,stereoA:sa,stereoB:sb});}
const prior=C.ORGANIC||{};C.ORGANIC={...prior,version:'2.21',graphSignature,equivalent,groupPriorities,resonanceSystems,tautomerTransforms,stereoDescriptors,conformerRecord,classify};
})(window);

} catch (err) {
  try { console.warn('[CHE module 43]', err && err.message ? err.message : err); } catch(_){}
}

