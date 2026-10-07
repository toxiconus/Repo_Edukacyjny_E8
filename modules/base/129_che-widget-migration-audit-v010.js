<script id="che-widget-migration-audit-v010">
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const E=C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
const old=E.widgetLocalData||{};
E.widgetLocalData={version:'0.10',sourceOfTruth:'FULL_ENGINE',migrated:['charSim.reactions','indLab.substance-lookup'],remaining:['wodorGrid.solubility/uses','dwStage.scene-graphics','dissWidget.scene-graphics','reszta.select-presets'],policy:'remaining entries require central data coverage before migration'};
E.widgetLocalData.previous=old;
})();
</script>

