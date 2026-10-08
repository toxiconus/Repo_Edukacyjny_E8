try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];return {version:'2.76',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),checks:s,gate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}C.FULL_REGRESSION_V276={version:'2.76',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V276='2.76';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V276={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V276',depends:['SCIENCE_INTEGRITY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 137]', err && err.message ? err.message : err); } catch(_){}
}

