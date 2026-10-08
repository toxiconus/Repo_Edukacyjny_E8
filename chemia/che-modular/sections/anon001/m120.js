try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const rows=C.REFERENCE_EXPANSION_V273?.equilibria||[];
const api=C.EQUILIBRIA_REFERENCE;
const computed=[];
rows.forEach(r=>{if(api?.add)api.add(r);if(r.type==='pKa'){const ka=C.REFERENCE_MERGE_API?.pKaToKa(r.value);computed.push({id:r.id+':Ka',type:'Ka',sourceRecord:r.id,value:ka,unit:'dimensionless',temperatureK:r.temperatureK,phase:r.phase,medium:r.medium,sourceId:'COMPUTED_FROM_VERIFIED_PKA',status:'COMPUTED',definition:'Ka = 10^(-pKa)'});}if(r.type==='Kb'){computed.push({id:r.id+':pKb',type:'pKb',sourceRecord:r.id,value:-Math.log10(r.value),unit:'dimensionless',temperatureK:r.temperatureK,phase:r.phase,medium:r.medium,sourceId:'COMPUTED_FROM_VERIFIED_KB',status:'COMPUTED',definition:'pKb = -log10(Kb)'});}});
function audit(){const all=Object.values(api?.records||{});return {version:'2.73',total:all.length,verified:all.filter(x=>x.status==='VERIFIED').length,computed,computedCount:computed.length,types:Object.fromEntries(['Ka','Kb','pKa','pKb','Ksp','solubility'].map(t=>[t,all.filter(x=>x.type===t).length]))};}
C.EQUILIBRIA_VERIFIED_2026={version:'2.73',audit,computed};
D.EQUILIBRIA_VERIFIED_2026=rows;
E.modules=E.modules||{};E.modules.EQUILIBRIA_VERIFIED_2026='2.73';E.registry=E.registry||{};E.registry.EQUILIBRIA_VERIFIED_2026={layer:'DATA/REFERENCE',owner:'CHE.EQUILIBRIA_VERIFIED_2026',depends:['EQUILIBRIA_REFERENCE','REFERENCE_MERGE_API']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 120]', err && err.message ? err.message : err); } catch(_){}
}

