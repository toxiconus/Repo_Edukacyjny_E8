<script id="che-local-data-audit-v013">
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const A=C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
function count(re){return (document.documentElement.innerHTML.match(re)||[]).length;}
function scan(){
  const html=document.documentElement.innerHTML;
  const legacy={
    chemActive:(html.match(/CHE\.chem\.(?![^\n]*(?:compat|legacyChem))/g)||[]).length,
    coreActive:(html.match(/CHE\.core\.(?!list|exportScenario)/g)||[]).length,
    molLegacy:(html.match(/CHE\.mol\./g)||[]).length,
    fxCompat:(html.match(/CHE\.fx\b/g)||[]).length
  };
  const localCandidates=[];
  const patterns=[
    {id:'FORMULA_ARRAY',re:/\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\[[^\n]{0,180}(?:H₂|H2|CO₂|CO2|NaOH|HCl|H2SO4|CaCO3|NH3|CH4)/g},
    {id:'CHEM_OBJECT',re:/\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\{[^\n]{0,180}(?:formula|valence|charge|molarMass|reaction)/g},
    {id:'REACTION_TEXT',re:/(?:→|->|⟶).{0,120}(?:H2O|O2|H2|CO2|HCl|NaOH|SO4|NO3)/g}
  ];
  patterns.forEach(p=>{
    let m; const re=new RegExp(p.re.source,p.re.flags.replace(/g/g,'')+'g'); let n=0;
    while((m=re.exec(html))&&n<40){localCandidates.push({kind:p.id,sample:m[0].slice(0,220)});n++;}
  });
  const widgets=Object.keys(A.widgetMigration||{});
  return {
    version:'0.13',
    sourceOfTruth:'FULL_ENGINE',
    legacy,
    localCandidateCount:localCandidates.length,
    localCandidates,
    migrationRegistry:widgets,
    policy:'Candidates are audit findings only. Do not delete educational presets/scenarios until usage is proven.',
    central:{DATA:!!C.DATA,CHEM:!!C.CHEM,REACTION:!!C.REACTION,SUBSTANCE:!!C.SUBSTANCE,PROFILE:!!C.PROFILE,MOLECULE:!!C.MOLECULE,GEOMETRY:!!C.GEOMETRY},
    result:'AUDIT_ONLY'
  };
}
A.localDataV013=scan;
A.localDataAuditV013=scan();
C.LOCAL_DATA_AUDIT_V013=A.localDataAuditV013;
if(C.AUDIT&&C.AUDIT.add){
  C.AUDIT.add('v013: central data modules present',C.LOCAL_DATA_AUDIT_V013.central.DATA&&C.LOCAL_DATA_AUDIT_V013.central.REACTION&&C.LOCAL_DATA_AUDIT_V013.central.MOLECULE,'Audyt nie usuwa lokalnych presetów bez potwierdzenia ich użycia.');
  C.AUDIT.add('v013: legacy CHE.mol source absent',C.LOCAL_DATA_AUDIT_V013.legacy.molLegacy===0,'Stary CHE.mol pozostaje tylko jako kontekst migracyjny, jeśli występuje.');
}
})();
</script>

