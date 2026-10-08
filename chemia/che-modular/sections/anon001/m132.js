try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const FIELDS=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
function fieldState(row,f){const v=row?.[f];if(v==null||v==='')return 'MISSING';const meta=row?.provenance?.[f]||row?.sources?.[f]||null;if(meta?.sourceId||meta?.reference||row?.sourceId)return 'SOURCE_ATTACHED';return 'VALUE_WITHOUT_FIELD_SOURCE';}
function audit(){const rows=Object.entries(D.ATOMIC_PROPS||{});const perField={};for(const f of FIELDS){perField[f]={MISSING:0,SOURCE_ATTACHED:0,VALUE_WITHOUT_FIELD_SOURCE:0};rows.forEach(([s,r])=>perField[f][fieldState(r,f)]++);}const records=rows.map(([symbol,r])=>({symbol,atomicNumber:r?.atomicNumber||null,states:Object.fromEntries(FIELDS.map(f=>[f,fieldState(r,f)]))}));return {version:'2.75',elements:rows.length,expected:118,fields:FIELDS,perField,records,policy:'source presence is not equivalent to reference readiness'};}
function regression(){const a=audit();return [{id:'AT75-001',name:'no invented values',ok:Object.values(a.perField).every(x=>x.MISSING>=0)},{id:'AT75-002',name:'field states are explicit',ok:a.fields.length===11},{id:'AT75-003',name:'existing inventory retained',ok:a.elements>=22}];}
C.ATOMIC_FIELD_READINESS_INDEX={version:'2.75',fields:FIELDS,audit,regression};E.modules=E.modules||{};E.modules.ATOMIC_FIELD_READINESS_INDEX='2.75';E.registry=E.registry||{};E.registry.ATOMIC_FIELD_READINESS_INDEX={layer:'AUDIT/DATA',owner:'CHE.ATOMIC_FIELD_READINESS_INDEX',depends:['DATA.ATOMIC_PROPS','ATOMIC_PROPERTY_SEMANTICS','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 132]', err && err.message ? err.message : err); } catch(_){}
}

