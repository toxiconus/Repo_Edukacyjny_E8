

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const checks=[...(C.SIMPLE_BASES_V283?.regression?.()||[])];return {version:'2.83',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V283={version:'2.83',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V283='2.83';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V283={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V283',depends:['SIMPLE_BASES_V283']};})(window);

} catch (err) {
  try { console.warn('[CHE module 158]', err && err.message ? err.message : err); } catch(_){}
}