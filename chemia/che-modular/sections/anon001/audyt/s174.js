

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V293?.records||{};const checks=[['4 new species',Object.keys(r).length===4],['H2O2 formation enthalpy',r['H2O2(g)']?.formationEnthalpy?.value===-136.11],['NO formation enthalpy',r['NO(g)']?.formationEnthalpy?.value===90.29],['NO2 formation enthalpy',r['NO2(g)']?.formationEnthalpy?.value===33.10],['SO3 formation enthalpy',r['SO3(g)']?.formationEnthalpy?.value===-395.77],['Shomate present',Object.values(r).every(x=>x.shomate?.length>=1)]];return {version:'2.93',ok:checks.every(x=>x[1]),checks,added:C.DATA?.SCIENCE_BATCH_REFERENCE_V293?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V293={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V293='2.93';})(window);

} catch (err) {
  try { console.warn('[CHE module 174]', err && err.message ? err.message : err); } catch(_){}
}