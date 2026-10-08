

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V292?.records||{};const checks=[['3 new species',Object.keys(r).length===3],['NH3 formation enthalpy',r['NH3(g)']?.formationEnthalpy?.value===-45.94],['CO formation enthalpy',r['CO(g)']?.formationEnthalpy?.value===-110.53],['SO2 formation enthalpy',r['SO2(g)']?.formationEnthalpy?.value===-296.81],['all Shomate',Object.values(r).every(x=>x.shomate?.length===2)]];return {version:'2.92',ok:checks.every(x=>x[1]),checks};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V292={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V292='2.92';})(window);

} catch (err) {
  try { console.warn('[CHE module 172]', err && err.message ? err.message : err); } catch(_){}
}