try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[],q=C.REACTION_EXPANSION_QUEUE?.regression?.()||[],r=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[];const checks=[...a,...q,...r];return {version:'2.79',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V279={version:'2.79',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V279='2.79';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V279={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V279',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_EXPANSION_QUEUE','REACTION_LESSON_RECONCILIATION']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 145]', err && err.message ? err.message : err); } catch(_){}
}

