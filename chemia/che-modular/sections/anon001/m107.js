try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};function audit(){const aw=D.CIAAW_ATOMIC_WEIGHTS_2024||{},ap=D.ATOMIC_PROPS||{},symbols=Object.keys(aw),linked=symbols.filter(s=>ap[s]);return {version:'2.68',atomicWeightRecords:symbols.length,atomicPropsLinked:linked.length,atomicPropsMissing:symbols.filter(s=>!ap[s]),policy:'Reference atomic weights are separate from legacy ATOMIC_PROPS; no overwrite occurs.',source:'CIAAW_AW_2024'};}C.SCIENCE_REFERENCE_BRIDGE={version:'2.68',audit};E.modules=E.modules||{};E.modules.SCIENCE_REFERENCE_BRIDGE='2.68';E.registry=E.registry||{};E.registry.SCIENCE_REFERENCE_BRIDGE={layer:'BRIDGE/AUDIT',owner:'CHE.SCIENCE_REFERENCE_BRIDGE',depends:['CIAAW_ATOMIC_WEIGHTS_2024','ATOMIC_PROPS']};})(window);
} catch (err) {
  try { console.warn('[CHE module 107]', err && err.message ? err.message : err); } catch(_){}
}

