try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function sourceKnown(id){return !!(C.SOURCE_REGISTRY_EXTENDED?.sources?.[id]||C.SOURCE_REGISTRY?.sources?.[id]);}
function addThermo(r){if(!r?.id||!sourceKnown(r.sourceId))return {ok:false,error:'UNKNOWN_SOURCE'};const a=C.DATA.REFERENCE_THERMO_V273||{};if(a[r.id])return {ok:false,error:'DUPLICATE_ID'};a[r.id]=Object.freeze({...r});return {ok:true,id:r.id};}
function addEquilibrium(r){if(!r?.id||!sourceKnown(r.sourceId))return {ok:false,error:'UNKNOWN_SOURCE'};const api=C.EQUILIBRIA_REFERENCE;if(!api?.add)return {ok:false,error:'EQUILIBRIA_API_MISSING'};return api.add(r);}
function pKaToKa(pKa){if(!Number.isFinite(Number(pKa)))return null;return Math.pow(10,-Number(pKa));}
function pKbToKb(pKb){if(!Number.isFinite(Number(pKb)))return null;return Math.pow(10,-Number(pKb));}
function audit(){const t=C.DATA?.REFERENCE_THERMO_V273||{},e=C.DATA?.REFERENCE_EQUILIBRIA_V273||[];return {thermo:Object.keys(t).length,equilibria:e.length,sourceChecked:Object.values(t).filter(x=>sourceKnown(x.sourceId)).length};}
C.REFERENCE_MERGE_API={version:'2.73',addThermo,addEquilibrium,pKaToKa,pKbToKb,audit,policy:'verified records only; no overwrite of legacy data'};
E.modules=E.modules||{};E.modules.REFERENCE_MERGE_API='2.73';E.registry=E.registry||{};E.registry.REFERENCE_MERGE_API={layer:'API/DATA',owner:'CHE.REFERENCE_MERGE_API',depends:['SOURCE_REGISTRY_EXTENDED','THERMO_REFERENCE','EQUILIBRIA_REFERENCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 119]', err && err.message ? err.message : err); } catch(_){}
}

