try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.DATA?.SCIENCE_CORE_V288,a=s?.audit?.();const checks=[['records complete',a?.ok===true],['4 NIST species',a?.records?.total===4],['4 reference-ready',a?.records?.ready===4],['4 Cp models',a?.records?.cpReady===4],['H2O(l) Cp(298.15K)',Math.abs((s?.cp('H2O(l)',298.15)||0)-75.31)<0.5],['CO2 Cp(298.15K)',Math.abs((s?.cp('CO2(g)',298.15)||0)-37.13)<0.5]];return {version:'2.88',ok:checks.every(x=>x[1]),checks};}C.SCIENCE_CORE_REGRESSION_V288={run};E.modules=E.modules||{};E.modules.SCIENCE_CORE_REGRESSION_V288='2.88';})(window);

} catch (err) {
  try { console.warn('[CHE module 166]', err && err.message ? err.message : err); } catch(_){}
}

