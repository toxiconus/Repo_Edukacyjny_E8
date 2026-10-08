try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];const e=C.EQUILIBRIA_VERIFIED_2026?.audit?.()||{};const r=C.REACTION_AUDIT_V273?.audit?.()||{};return {version:'2.73',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),regressions:s,equilibria:e,reactions:r,scientificGate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}
C.FULL_SCIENCE_REGRESSION={version:'2.73',run};E.modules=E.modules||{};E.modules.FULL_SCIENCE_REGRESSION='2.73';E.registry=E.registry||{};E.registry.FULL_SCIENCE_REGRESSION={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_SCIENCE_REGRESSION',depends:['SCIENCE_INTEGRITY','EQUILIBRIA_VERIFIED_2026','REACTION_AUDIT_V273']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 123]', err && err.message ? err.message : err); } catch(_){}
}

