<script id="che-chemistry-widget-migration-v010">
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const W=C.WIDGET_API||{};
const R=C.REACTION||{};
const P=C.PROFILE||{};
function reactionByText(text){
  const clean=String(text||'').replace(/\s+/g,' ').trim();
  if(R.byFormula){ try{ const x=R.byFormula(clean); if(x)return x; }catch(_){} }
  if(R.get){ try{ const x=R.get(clean); if(x)return x; }catch(_){} }
  const pools=[C.DATA?.REACTIONS,C.DATA?.REACTION_DATA,C.DATA?.reactions];
  for(const pool of pools){
    if(!pool)continue;
    const vals=Array.isArray(pool)?pool:Object.values(pool);
    const x=vals.find(v=>String(v?.equation||v?.formula||'').replace(/\s+/g,' ').trim()===clean);
    if(x)return x;
  }
  return null;
}
function substance(formula){
  try{return P.substance?.(formula)||C.SUBSTANCE?.get?.(formula)||C.DATA?.SUBSTANCES?.[formula]||null;}catch(_){return null;}
}
const pack=C.CHARACTER_MIGRATION={version:'0.10',sourceOfTruth:'FULL_ENGINE',policy:'chemical reaction facts from CHE.REACTION; pedagogical classification remains widget-owned'};
pack.widgets={charSim:'MIGRATED_REACTION_DATA',indLab:'MIGRATED_SUBSTANCE_LOOKUP'};
pack.reactionByText=reactionByText;
pack.substance=substance;
C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
C.ENGINE_AUDIT.chemistryWidgets=pack;
const prev=C.WIDGET_MIGRATION_AUDIT;
if(prev?.entries){prev.entries.charSim='MIGRATED_REACTION_DATA';prev.entries.indLab='MIGRATED_SUBSTANCE_LOOKUP';}
})();
</script>
