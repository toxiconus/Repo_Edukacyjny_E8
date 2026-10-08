

try {

(()=>{
  const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
  const base=D.LO_CHEM_MAX381_388?.solubility||[];
  const target=base.find(x=>x?.id==='AGCL')||null;
  const source={id:'PHREEQC_MINTEQ_V4_CERARGYRITE',
    url:'https://github.com/phreeqc-dev/phreeqc3/blob/master/database/minteq.v4.dat',
    reaction:'AgCl(s) = Ag+(aq) + Cl−(aq)',log10K_25C:-9.75,
    temperature_K:298.15,reference:'MINTEQ v4 thermodynamic database, PHASES / Cerargyrite',
    constantConvention:'log equilibrium constant for the phase dissolution reaction; aqueous species use activities in the PHREEQC model',
    documentationUrl:'https://water.usgs.gov/water-resources/software/PHREEQC/documentation/phreeqc3-html/phreeqc3-36.htm'};
  const calculatedK=Math.pow(10,source.log10K_25C);
  function audit(){
    const value=target?.Ksp;
    const roundedMatch=Number.isFinite(value)&&Math.abs(value-calculatedK)<=Math.max(calculatedK*0.03,5e-13);
    return {version:'4.06',scope:'CHEMISTRY_ONLY',targetId:'AGCL',targetValue:value??null,targetUnit:target?.unit??null,
      source,sourceCalculatedK:calculatedK,relativeDifference:Number.isFinite(value)?Math.abs(value-calculatedK)/calculatedK:null,
      roundedMatch,legacyMutation:false,teachingConcentrationModelCompatible:false,
      status:roundedMatch?'SOURCE_MATCHED_ACTIVITY_CONVENTION_REVIEW_REQUIRED':'VALUE_MISMATCH_REVIEW',
      note:'Numerical match after rounding does not make the activity-based thermodynamic K dimensionally equal to the legacy concentration-product field. Keep those models separate.',
      scientificGate:'BLOCKED',browserRuntime:'NOT_VERIFIED'};
  }
  C.DATA.AGCL_SOLUBILITY_PROVENANCE_V406={version:'4.06',source,audit};
  C.P0_REGRESSION_V406={agclProvenance:audit(),legacyMutation:false,browserRuntime:'NOT_VERIFIED'};
})();

} catch (err) {
  try { console.warn('[CHE module 277]', err && err.message ? err.message : err); } catch(_){}
}