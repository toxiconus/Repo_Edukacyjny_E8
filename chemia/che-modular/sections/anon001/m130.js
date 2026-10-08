try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];return {version:'2.74',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),checks:s,gate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}C.FULL_REGRESSION_V274={version:'2.74',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V274='2.74';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V274={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V274',depends:['SCIENCE_INTEGRITY']};E.version='2.74';E.dataVersion='2.74';E.contractVersion='2.74';E.schemaVersion='2.74';})(window);

} catch (err) {
  try { console.warn('[CHE module 130]', err && err.message ? err.message : err); } catch(_){}
}

