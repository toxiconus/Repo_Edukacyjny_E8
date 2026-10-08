try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const d=C.DATA?.SCIENCE_BATCH_REFERENCE_V291,r=d?.records||{};const ids=Object.keys(r);const checks=[['4 new species',ids.length===4],['H2 Shomate',r['H2(g)']?.shomate?.length===3],['N2 Shomate',r['N2(g)']?.shomate?.length===3],['O2 Shomate',r['O2(g)']?.shomate?.length===3],['CH4 formation enthalpy',r['CH4(g)']?.formationEnthalpy?.value===-74.87],['CH4 Shomate',r['CH4(g)']?.shomate?.length===2],['append only',d?.policy?.startsWith('append-only')===true]];return {version:'2.91',ok:checks.every(x=>x[1]),checks,added:d?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V291={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V291='2.91';})(window);

} catch (err) {
  try { console.warn('[CHE module 170]', err && err.message ? err.message : err); } catch(_){}
}

