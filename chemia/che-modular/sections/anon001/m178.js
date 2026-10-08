try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V295?.records||{};const checks=[['6 new species',Object.keys(r).length===6],['N2O',r['N2O(g)']?.formationEnthalpy?.value===82.05],['HF',r['HF(g)']?.formationEnthalpy?.value===-273.30],['HBr corrected uncertainty',r['HBr(g)']?.formationEnthalpy?.uncertainty===0.16],['HI corrected enthalpy',r['HI(g)']?.formationEnthalpy?.value===26.50],['Br2 corrected entropy',r['Br2(g)']?.S298?.value===245.468],['I2 corrected enthalpy',r['I2(g)']?.formationEnthalpy?.value===62.42],['all Shomate',Object.values(r).every(x=>x.shomate?.length===2)],['append only',C.DATA?.SCIENCE_BATCH_REFERENCE_V295?.policy?.startsWith('append-only')===true]];return {version:'2.95',ok:checks.every(x=>x[1]),checks,added:C.DATA?.SCIENCE_BATCH_REFERENCE_V295?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V295={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V295='2.95';})(window);

} catch (err) {
  try { console.warn('[CHE module 178]', err && err.message ? err.message : err); } catch(_){}
}

