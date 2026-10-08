try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const checks=C.SCIENCE?.REFERENCE_CORE_V287?.regression?.()||[];return {version:'2.87',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V287={run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V287='2.87';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V287={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V287',depends:['SCIENCE_REFERENCE_CORE_V287']};})(window);

} catch (err) {
  try { console.warn('[CHE module 163]', err && err.message ? err.message : err); } catch(_){}
}

