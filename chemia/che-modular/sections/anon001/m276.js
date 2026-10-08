try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const targets=D.LO_CHEM_MAX381_388?.electrochem||[];
  const find=id=>targets.find(r=>r?.id===id)||null;
  const source={
    id:'NIST_BRATSCH_1989_TABLE_1',
    url:'https://www.nist.gov/sites/default/files/documents/srd/jpcrd355.pdf',
    citation:'S. G. Bratsch, Standard Electrode Potentials and Temperature Coefficients in Water at 298.15 K, Journal of Physical and Chemical Reference Data 18(1), 1989, Table 1, p. 11; DOI 10.1063/1.555839.',
    conditions:{temperature_K:298.15,medium:'water, acid-solution table at pH = 0.000',referenceElectrode:'standard hydrogen electrode (SHE)',dissolvedSpeciesStandardState:'unit activity; Bratsch describes standard states as unit activity',pureCondensedPhases:'activity = 1',potentialType:'standard reduction potential',unit:'V'},
    notes:'Tabulated source potentials are at 298.15 K. The table also provides dE°/dT in mV/K. Values in the target learning dataset are intentionally rounded to 0.01 V.'
  };
  const records={
    ZN2_ZN:{targetId:'ZN2_ZN',halfReaction:'Zn2+(aq) + 2e− → Zn(c)',sourceValue_V:-0.762,dEdT_mV_K:0.119,tableSection:'Zinc; acid solutions, pH = 0.000',roundedTarget_V:-0.76,sourceStatus:'SOURCE_ROW_VERIFIED'},
    CU2_CU:{targetId:'CU2_CU',halfReaction:'Cu2+(aq) + 2e− → Cu(c)',sourceValue_V:0.339,dEdT_mV_K:0.011,tableSection:'Copper; acid solutions, pH = 0.000',roundedTarget_V:0.34,sourceStatus:'SOURCE_ROW_VERIFIED'},
    H_H2:{targetId:'H_H2',halfReaction:'2H+(aq) + 2e− → H2(g)',sourceValue_V:0,dEdT_mV_K:0,tableSection:'SHE reference convention',roundedTarget_V:0,sourceStatus:'REFERENCE_BY_DEFINITION',conditions:{temperature_K:298.15,hydrogenPressure_standard_state:'standard pressure',hydrogenIonActivity:1,referenceElectrode:'SHE'}}
  };
  function audit(){
    const rows=Object.values(records).map(r=>{
      const target=find(r.targetId);
      const matches=!!target&&Number.isFinite(target.E0_V)&&Math.abs(target.E0_V-r.roundedTarget_V)<=0.0051&&target.halfReaction===r.halfReaction.replaceAll('−','-').replaceAll('→','->').replace('(aq)','').replace('(c)','').replace('(g)','');
      return {...r,targetValue_V:target?.E0_V??null,matchesRoundedTarget:matches,source:source.id,sourceUrl:source.url,
        temperature_K:r.conditions?.temperature_K??source.conditions.temperature_K,
        unit:'V',status:matches?'ROUNDED_VALUE_MATCH_SOURCE_CONDITIONS_RECORDED':'TARGET_MISMATCH_REVIEW'};
    });
    return {version:'3.87',scope:'CHEMISTRY_ONLY',records:rows,matched:rows.filter(r=>r.matchesRoundedTarget).length,
      legacyMutation:false,referenceReady:false,reason:'Learning records retain 0.01 V rounding; retain explicit conditions and provenance before promoting to reference-grade data.',scientificGate:'BLOCKED',browserRuntime:'NOT_VERIFIED'};
  }
  C.DATA.ELECTROCHEM_REFERENCE_ROWS_V387={version:'3.87',source,records,audit};
  C.P0_REGRESSION_V387={electrochemReference:audit(),legacyMutation:false,browserRuntime:'NOT_VERIFIED'};
})();

} catch (err) {
  try { console.warn('[CHE module 276]', err && err.message ? err.message : err); } catch(_){}
}

