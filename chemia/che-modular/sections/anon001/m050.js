try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, D=C.DATA||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(code,message,context)=>C.FAIL?C.FAIL(code,message,context):{ok:false,error:{code,message,context}};
const clone=o=>JSON.parse(JSON.stringify(o));
const VALENCE={
 H:[1],B:[3],C:[4],N:[3,4],O:[2],F:[1],P:[3,5],S:[2,4,6],Cl:[1],Br:[1],I:[1],
 Na:[1],K:[1],Li:[1],Mg:[2],Ca:[2],Zn:[2],Al:[3],Si:[4]
};
const MAX={H:1,B:3,C:4,N:4,O:2,F:1,P:5,S:6,Cl:1,Br:1,I:1};
function chargeOf(a){return Number(a?.formalCharge ?? a?.charge ?? 0);}
function effectiveAtomCharge(m,a){
 const explicit=(a?.formalCharge!=null||a?.charge!=null)?chargeOf(a):0;
 if(explicit!==0) return explicit;
 const q=Number(m?.charge||0); if(!q) return 0;
 const atoms=m?.atoms||[];
 const carrier=atoms.filter(x=>x.element!=='H').sort((u,v)=>{
   const rank=x=>({N:5,O:5,S:4,P:4,C:3,Cl:2,Br:2,I:2,F:2}[x.element]||1);
   return rank(v)-rank(u);
 })[0];
 return carrier&&String(carrier.id)===String(a?.id)?q:0;
}
function orderOf(b){return Number(b?.order||1);}
function adjacency(m){
 const A={};(m?.atoms||[]).forEach(a=>A[a.id]=[]);
 (m?.bonds||[]).forEach(b=>{if(A[b.atomA]&&A[b.atomB]){A[b.atomA].push(b);A[b.atomB].push(b);}});
 return A;
}
function bondOrderSum(m,id){return (adjacency(m)[id]||[]).reduce((s,b)=>s+orderOf(b),0);}
function implicitHForAtom(m,atomId){
 const a=(m?.atoms||[]).find(x=>String(x.id)===String(atomId));
 if(!a)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono atomu',{atomId});
 if(a.element==='H')return ok({atomId:a.id,hydrogenCount:0,source:'COMPUTED',reason:'hydrogen'});
 if(a.metadata?.generatedBy==='CHE.RECONSTRUCT')return ok({atomId:a.id,hydrogenCount:0,source:'DATABASE',reason:'explicit'});
 const q=effectiveAtomCharge(m,a), sum=bondOrderSum(m,a.id), vals=VALENCE[a.element];
 if(!vals)return ok({atomId:a.id,hydrogenCount:null,source:'ESTIMATED',reason:'NO_VALENCE_RULE'});
 let target=vals[0];
 if(a.element==='N' && q>0) target=4;
 if(a.element==='O' && q<0) target=1;
 if(a.element==='S' || a.element==='P'){
   const candidates=vals.filter(v=>v>=sum);
   target=candidates.length?candidates[0]:vals[vals.length-1];
 }
 const h=Math.max(0,target-sum);
 return ok({atomId:a.id,hydrogenCount:h,source:'COMPUTED',targetValence:target,bondOrderSum:sum,charge:q});
}
function implicitHydrogen(m){
 const x=C.STRUCTURE?.canonicalize?C.STRUCTURE.canonicalize(m||{}):clone(m||{});
 const atoms=(x.atoms||[]).map(a=>implicitHForAtom(x,a.id).value||{atomId:a.id,hydrogenCount:null});
 const total=atoms.reduce((s,a)=>s+(Number.isFinite(a.hydrogenCount)?a.hydrogenCount:0),0);
 return ok({atoms,total,source:'COMPUTED',explicitHydrogenCount:(x.atoms||[]).filter(a=>a.element==='H').length});
}
function valenceCheck(m){
 const x=C.STRUCTURE?.canonicalize?C.STRUCTURE.canonicalize(m||{}):clone(m||{}), A=adjacency(x), issues=[],warnings=[];
 for(const a of x.atoms||[]){
   const sum=(A[a.id]||[]).reduce((s,b)=>s+orderOf(b),0), q=chargeOf(a), vals=VALENCE[a.element], max=MAX[a.element];
   if(max!=null && sum>max+1e-9) issues.push({code:'VALENCE_EXCEEDED',atomId:a.id,element:a.element,bondOrderSum:sum,maxValence:max,charge:q});
   else if(vals && !vals.some(v=>Math.abs(v-sum)<1e-9 || v>=sum)){
     warnings.push({code:'UNUSUAL_VALENCE',atomId:a.id,element:a.element,bondOrderSum:sum,allowed:vals,charge:q});
   }
 }
 return {ok:issues.length===0,issues,warnings};
}
function chargeCheck(m){
 const x=m||{}, atomCharge=(x.atoms||[]).reduce((s,a)=>s+chargeOf(a),0), declared=Number(x.charge||0);
 return {ok:Math.abs(atomCharge-declared)<1e-9,atomChargeSum:atomCharge,moleculeCharge:declared};
}
function validate(m,options){
 const x=C.STRUCTURE?.canonicalize?C.STRUCTURE.canonicalize(m||{}):clone(m||{});
 const base=C.STRUCTURE?.validate?C.STRUCTURE.validate(x):{ok:true,issues:[],warnings:[]};
 const v=valenceCheck(x), c=chargeCheck(x), h=implicitHydrogen(x);
 const issues=[...(base.issues||[]),...v.issues];
 const warnings=[...(base.warnings||[]),...v.warnings];
 if(!c.ok) issues.push({code:'CHARGE_MISMATCH',atomChargeSum:c.atomChargeSum,moleculeCharge:c.moleculeCharge});
 if(options?.requireKnownImplicitH && (h.value.atoms||[]).some(a=>a.hydrogenCount==null)) warnings.push({code:'IMPLICIT_H_UNKNOWN'});
 const status=issues.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID';
 return ok({ok:issues.length===0,status,issues,warnings,charge:c,implicitH:h.value,formula:x.formula,atomCount:x.atoms.length,bondCount:x.bonds.length,source:'COMPUTED'});
}
C.VALIDATOR={version:'2.27',validate,valenceCheck,chargeCheck,implicitHForAtom,implicitHydrogen,adjacency,bondOrderSum,allowedValences:clone(VALENCE)};
})(window);

} catch (err) {
  try { console.warn('[CHE module 50]', err && err.message ? err.message : err); } catch(_){}
}

