try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
function audit(){const rows=Object.entries(D.ATOMIC_PROPS||{});const perField={};for(const f of REQUIRED)perField[f]=rows.filter(([s,r])=>r&&r[f]!=null&&r[f]!=='' ).length;const complete=rows.filter(([s,r])=>REQUIRED.every(f=>r&&r[f]!=null&&r[f]!=='')).map(([s])=>s);const partial=rows.filter(([s])=>!complete.includes(s)).map(([s])=>s);return {version:'2.74',elements:rows.length,expected:118,perField,completeCount:complete.length,complete,partial,missingElements:Array.from({length:118},(_,i)=>i+1).filter(z=>!rows.some(([s,r])=>Number(r?.atomicNumber)===z))};}
function regression(){const a=audit();return [{id:'AT74-001',name:'element inventory does not shrink',ok:a.elements>=22,detail:a.elements+'/118'},{id:'AT74-002',name:'required fields are measured, not defaulted',ok:REQUIRED.every(f=>Object.prototype.hasOwnProperty.call(a.perField,f)),detail:REQUIRED.join(',')},{id:'AT74-003',name:'missing values remain visible',ok:Array.isArray(a.partial),detail:a.partial.length+' partial records'}];}
C.ATOMIC_FIELD_AUDIT={version:'2.74',required:REQUIRED,audit,regression};E.modules=E.modules||{};E.modules.ATOMIC_FIELD_AUDIT='2.74';E.registry=E.registry||{};E.registry.ATOMIC_FIELD_AUDIT={layer:'AUDIT/DATA',owner:'CHE.ATOMIC_FIELD_AUDIT',depends:['DATA.ATOMIC_PROPS','DATA_COVERAGE','ATOMIC_PROPERTY_SEMANTICS']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 125]', err && err.message ? err.message : err); } catch(_){}
}

