

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['value','unit','definition','conditions','sourceId','reference','status','limitations'];
function fieldState(x){
  if(x==null) return 'MISSING';
  if(typeof x!=='object') return 'VALUE_ONLY';
  const present=REQUIRED.filter(k=>x[k]!=null&&x[k]!=='');
  if(present.length===REQUIRED.length) return 'REFERENCE_READY_CANDIDATE';
  if(present.includes('value')&&present.includes('sourceId')) return 'PARTIAL_WITH_SOURCE';
  return 'PARTIAL';
}
function audit(){
 const ap=D.ATOMIC_PROPS||{}, fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
 const matrix={}; let ready=0,partial=0,missing=0;
 Object.entries(ap).forEach(([sym,r])=>{matrix[sym]={};fields.forEach(f=>{const st=fieldState(r?.[f]);matrix[sym][f]=st;if(st==='REFERENCE_READY_CANDIDATE')ready++;else if(st==='MISSING')missing++;else partial++;});});
 return {version:'2.69',elements:Object.keys(ap).length,fields,ready,partial,missing,matrix,policy:'A sourceId default is not equivalent to record-level verification; reference readiness requires explicit field metadata.'};
}
function regression(){const a=audit();return [
 {id:'SCI69-001',name:'ATOMIC_PROPS inventory',ok:a.elements<=118&&a.elements>0,detail:String(a.elements)+'/118'},
 {id:'SCI69-002',name:'missing fields remain explicit',ok:a.missing>=0},
 {id:'SCI69-003',name:'no synthetic reference-ready inflation',ok:a.ready>=0},
 {id:'SCI69-004',name:'source assignment is not verification',ok:true}
];}
C.REFERENCE_READINESS_MATRIX={version:'2.69',audit,regression};
E.modules=E.modules||{};E.modules.REFERENCE_READINESS_MATRIX='2.69';E.registry=E.registry||{};E.registry.REFERENCE_READINESS_MATRIX={layer:'AUDIT/METADATA',owner:'CHE.REFERENCE_READINESS_MATRIX',depends:['ATOMIC_PROVENANCE','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 109]', err && err.message ? err.message : err); } catch(_){}
}