<script id="che-widget-migration-audit-v004">
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const A=C.WIDGET_MIGRATION_AUDIT=C.WIDGET_MIGRATION_AUDIT||{};
A.version='0.04';
A.source='CHE.wiz.v00.30';
A.sourceOfTruth='FULL_ENGINE';
A.policy='preserve-better-atlas-views; migrate-only-unique-or-better-functionality';
A.entries={
  oxideBuilder:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.CHEM','CHE.DATA'],legacyFallback:true},
  balansatorEl:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.CHEM','CHE.ION'],legacyFallback:false},
  builderEl:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.CHEM','CHE.FORMULA'],legacyFallback:false},
  reszta:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.CHEM','CHE.DATA'],legacyFallback:false},
  ionAssemblyO:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.ION','CHE.CHEM'],legacyFallback:false},
  charSim:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.DATA','CHE.REACTION'],legacyFallback:false},
  wodorGrid:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.DATA','CHE.CHEM'],legacyFallback:false},
  trendBars:{status:'REGISTERED_COMPAT',tier:'UNIQUE',target:['CHE.DATA'],legacyFallback:false},
  oxGallery:{status:'MIGRATED_ADAPTER',tier:'UNIQUE',target:['CHE.DATA','CHE.PROFILE'],legacyFallback:false},
  obsInferenceLab:{status:'REGISTERED_COMPAT',tier:'UNIQUE',target:['CHE.REACTION','CHE.PROFILE'],legacyFallback:false},
  metodaWidgetEl:{status:'REGISTERED_COMPAT',tier:'UNIQUE',target:['CHE.REACTION','CHE.CHEM'],legacyFallback:false},
  mapaReakcji:{status:'REGISTERED_COMPAT',tier:'UNIQUE',target:['CHE.REACTION','CHE.REACTIONSET'],legacyFallback:false},
  adaptQuiz:{status:'REGISTERED_COMPAT',tier:'DIDACTIC',target:['CHE.DATA','CHE.SESSION'],legacyFallback:false},
  quiz:{status:'REGISTERED_COMPAT',tier:'DIDACTIC',target:['CHE.DATA','CHE.SESSION'],legacyFallback:false},
  flashcards:{status:'REGISTERED_COMPAT',tier:'DIDACTIC',target:['CHE.DATA'],legacyFallback:false},
  burnRun:{status:'REGISTERED_COMPAT',tier:'EXPERIMENT',target:['CHE.REACTION','CHE.THERMOCHEM'],legacyFallback:false},
  co2:{status:'REGISTERED_COMPAT',tier:'EXPERIMENT',target:['CHE.DATA','CHE.REACTION'],legacyFallback:false},
  vseprStage:{status:'MERGE_REQUIRED',tier:'GEOMETRY',target:['CHE.GEOMETRY','CHE.STRUCTURE'],legacyFallback:true},
  periodicMini:{status:'KEEP_AS_COMPACT_WIDGET',tier:'UTILITY',target:['CHE.DATA'],legacyFallback:false}
};
A.referenceViews={
  'molecule3d-merged':'KEEP_ATLAS', 'molecule-3d':'KEEP_ATLAS', 'molecule-cv':'KEEP_ATLAS',
  'molecule-2d':'KEEP_ATLAS', 'molecule-orbitals':'KEEP_ATLAS', 'molecule-electrons':'KEEP_ATLAS',
  'titration-merged':'KEEP_ATLAS', 'reactor-enhanced':'KEEP_ATLAS', 'metal-reaction-v02':'KEEP_ATLAS',
  'diss-hcl-mech-v02':'KEEP_ATLAS', 'ph-indicators-v03':'KEEP_ATLAS',
  'strong-vs-weak-enhanced-v02':'KEEP_ATLAS', 'periodic-54':'KEEP_ATLAS'
};
A.audit=function(){
  const widgets=C.LEGACY_WIDGETS instanceof Map?Array.from(C.LEGACY_WIDGETS.keys()):[];
  const missing=Object.keys(A.entries).filter(x=>!widgets.includes(x));
  return {ok:missing.length===0,version:A.version,engine:C.ENGINE?.version||null,data:C.ENGINE?.dataVersion||null,widgets,missing,referenceViews:A.referenceViews};
};
C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
C.ENGINE_AUDIT.widgetMigration=A;
  A.activeConsumersWithoutLegacyChem=0;
})();
</script>
