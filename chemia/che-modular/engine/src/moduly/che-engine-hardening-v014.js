
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const A=C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
A.legacyHardening={
  version:'0.14',
  sourceOfTruth:'FULL_ENGINE',
  removedLegacyFallbacks:['EXPERIMENT_MIGRATION.molar → C.chem.molarMass','formula adapter → C.LEGACY.chem.valenceToFormula'],
  removedUnusedFacades:['C.chem','C.core','C.mol'],
  remainingCompatibility:['C.sim.ParticleSim','C.LEGACY_WIDGETS/C.mount/C.define'],
  policy:'Compatibility facades may remain only where an active widget still requires them; they are never chemical source-of-truth.'
};
C.AUDIT?.add?.('v015: unused legacy chemistry facades removed',true,'Usunięto nieużywane C.chem/C.core/C.mol; pozostawiono tylko aktywny rejestr kompatybilnych widgetów.');
})();
