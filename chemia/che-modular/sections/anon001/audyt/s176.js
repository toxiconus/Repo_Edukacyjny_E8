

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V294?.records||{};const x=r['H2S(g)'];const checks=[['1 new species',Object.keys(r).length===1],['H2S formation enthalpy',x?.formationEnthalpy?.value===-20.6],['H2S entropy',x?.S298?.value===205.81],['2 Shomate ranges',x?.shomate?.length===2],['phase data',x?.phaseData?.boilingK?.value===212.87],['append only',C.DATA?.SCIENCE_BATCH_REFERENCE_V294?.policy?.startsWith('append-only')===true]];return {version:'2.94',ok:checks.every(x=>x[1]),checks,added:C.DATA?.SCIENCE_BATCH_REFERENCE_V294?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V294={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V294='2.94';})(window);

} catch (err) {
  try { console.warn('[CHE module 176]', err && err.message ? err.message : err); } catch(_){}
}