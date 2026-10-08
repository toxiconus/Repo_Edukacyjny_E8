try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];return {version:'2.75',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),checks:s,gate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}C.FULL_REGRESSION_V275={version:'2.75',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V275='2.75';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V275={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V275',depends:['SCIENCE_INTEGRITY']};E.version='2.75';E.dataVersion='2.75';E.contractVersion='2.75';E.schemaVersion='2.75';if(E.PUBLIC)E.PUBLIC.version='2.75';if(E.RUNTIME)E.RUNTIME.version='2.75';})(window);

} catch (err) {
  try { console.warn('[CHE module 134]', err && err.message ? err.message : err); } catch(_){}
}

