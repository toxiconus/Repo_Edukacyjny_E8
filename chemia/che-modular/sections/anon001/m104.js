try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const TYPES=['Ka','Kb','pKa','Ksp','solubility'];
function normalize(x){const r=x||{};return {id:r.id||null,type:r.type||null,value:r.value??null,unit:r.unit??null,temperatureK:r.temperatureK??null,phase:r.phase??null,medium:r.medium??null,ionicStrength:r.ionicStrength??null,definition:r.definition??null,sourceId:r.sourceId??null,reference:r.reference??null,status:r.status||'UNVERIFIED',limitations:r.limitations??null};}
const records=Object.create(null);
function add(r){const x=normalize(r);if(!x.id||!TYPES.includes(x.type))return {ok:false,error:'invalid equilibrium record'};records[x.id]=x;return {ok:true,value:x};}
function audit(){const a=Object.values(records),issues=[];a.forEach(r=>{if(!r.sourceId)issues.push({id:r.id,code:'MISSING_SOURCE'});if(r.value==null)issues.push({id:r.id,code:'MISSING_VALUE'});if(r.temperatureK==null)issues.push({id:r.id,code:'MISSING_TEMPERATURE'});});return {version:'2.67',types:TYPES,records:a,count:a.length,issues,referenceReady:a.length>0&&issues.length===0};}
C.EQUILIBRIA_REFERENCE={version:'2.67',types:TYPES,records,add,audit};E.modules=E.modules||{};E.modules.EQUILIBRIA_REFERENCE='2.67';E.registry=E.registry||{};E.registry.EQUILIBRIA_REFERENCE={layer:'SCIENCE/DATA-CONTRACT',owner:'CHE.EQUILIBRIA_REFERENCE',depends:['SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 104]', err && err.message ? err.message : err); } catch(_){}
}

