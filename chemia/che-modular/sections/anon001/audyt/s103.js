

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
const srcMap={atomicRadius:'NIST_ASD',covalentRadius:'NIST_ASD',vdwRadius:'NIST_ASD',electronegativityPauling:'NIST_ASD',electronAffinity:'NIST_WEBBOOK',ionizationEnergies:'NIST_WEBBOOK',meltingPoint:'NIST_WEBBOOK',boilingPoint:'NIST_WEBBOOK',density:'NIST_WEBBOOK',stateSTP:'NIST_WEBBOOK',crystalStructure:'NIST_ASD'};
function normalize(v,field){if(v==null)return null;if(typeof v==='number')return {value:v,unit:null};if(typeof v==='object')return {value:v.value??null,unit:v.unit??null,definition:v.definition??null,conditions:v.conditions??null,sourceId:v.sourceId??srcMap[field],status:v.status??'REFERENCE_CANDIDATE',limitations:v.limitations??null};return {value:v,unit:null};}
function build(){const src=D.ATOMIC_PROPS||{};const out={};Object.keys(src).forEach(sym=>{const r=src[sym]||{},row={};fields.forEach(f=>{if(r[f]!=null)row[f]=normalize(r[f],f);});out[sym]={Z:r.Z??null,symbol:r.symbol||sym,fields:row};});return out;}
function audit(){const records=build(),stats={elements:Object.keys(records).length,fieldRecords:{},withSource:{},missing:[]};fields.forEach(f=>{stats.fieldRecords[f]=0;stats.withSource[f]=0;});Object.entries(records).forEach(([sym,r])=>fields.forEach(f=>{const x=r.fields[f];if(x){stats.fieldRecords[f]++;if(x.sourceId)stats.withSource[f]++;}else stats.missing.push({symbol:sym,field:f});}));return {version:'2.67',records,stats,sourceMap:srcMap,readOnly:true};}
C.ATOMIC_PROVENANCE={version:'2.67',fields,sourceMap:srcMap,build,audit};
E.modules=E.modules||{};E.modules.ATOMIC_PROVENANCE='2.67';E.registry=E.registry||{};E.registry.ATOMIC_PROVENANCE={layer:'PROVENANCE/CONTRACT',owner:'CHE.ATOMIC_PROVENANCE',depends:['ATOMIC_PROPS','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 103]', err && err.message ? err.message : err); } catch(_){}
}