

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const d=C.DATA?.NEW_REFERENCE_DATA_V290||{},r=d.records||{};const checks=[['new records',Object.keys(r).length===3],['Na gas formation enthalpy',r['ATOM:Na(g)']?.value===107.5],['Cl gas formation enthalpy',r['ATOM:Cl(g)']?.value===121.301],['Cl gas entropy',r['ATOM:Cl(g):S0']?.value===165.190],['append only',d.policy==='append-only; existing scientific records are not overwritten']];return {version:'2.90',ok:checks.every(x=>x[1]),checks,added:d.added||[]};}C.NEW_REFERENCE_REGRESSION_V290={run};E.modules=E.modules||{};E.modules.NEW_REFERENCE_REGRESSION_V290='2.90';})(window);

} catch (err) {
  try { console.warn('[CHE module 168]', err && err.message ? err.message : err); } catch(_){}
}