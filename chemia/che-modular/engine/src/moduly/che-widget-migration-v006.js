
(function(){
  'use strict';
  const C=window.CHE=window.CHE||{};
  const A=C.WIDGET_MIGRATION_AUDIT=C.WIDGET_MIGRATION_AUDIT||{};
  A.version='0.06';
  A.sourceOfTruth='FULL_ENGINE';
  A.entries=Object.assign(A.entries||{},{
    trendBars:{status:'MIGRATED_DATA_ADAPTER',tier:'UNIQUE',target:['CHE.DATA','CHE.WIDGET_API'],legacyFallback:true},
    oxGallery:{status:'MIGRATED_DATA_ADAPTER',tier:'UNIQUE',target:['CHE.DATA','CHE.WIDGET_API'],legacyFallback:true},
    obsInferenceLab:{status:'MIGRATED_DATA_ADAPTER',tier:'UNIQUE',target:['CHE.REACTION','CHE.DATA.REACTION_DATA'],legacyFallback:true},
    metodaWidgetEl:{status:'MIGRATED_DATA_ADAPTER',tier:'UNIQUE',target:['CHE.REACTION','CHE.CHEM'],legacyFallback:true},
    mapaReakcji:{status:'MIGRATED_DATA_ADAPTER',tier:'UNIQUE',target:['CHE.REACTION','CHE.REACTIONSET'],legacyFallback:true}
  });
  A.audit=function(){
    const names=['trendBars','oxGallery','obsInferenceLab','metodaWidgetEl','mapaReakcji'];
    return {version:A.version,sourceOfTruth:A.sourceOfTruth,ok:names.every(n=>A.entries[n]?.status==='MIGRATED_DATA_ADAPTER'),entries:names.map(n=>({name:n,...A.entries[n]}))};
  };
  C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
  C.ENGINE_AUDIT.widgetMigration=A;
  A.activeConsumersWithoutLegacyChem=0;
  try{console.info('[CHE widget migration v0.06]',A.audit())}catch(_){ }
})();
