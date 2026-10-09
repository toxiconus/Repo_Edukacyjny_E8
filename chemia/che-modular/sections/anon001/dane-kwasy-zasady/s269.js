

try {

(()=>{
  const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
  const core=D.LO_CHEM_MAX381_388||{},chem=core.acidBase||[];
  const find=id=>chem.find(x=>x?.id===id)||null;
  const pKa=find('CH3COOH_AQ')?.Ka;
  const kbNH3=find('NH3_AQ')?.Kb;
  const kwTeaching=find('H2O_AQ')?.Kw;
  const prior=D.REFERENCE_EQUILIBRIA_V273?.records||[];
  const acidRecord=prior.find(x=>x?.id==='PUBCHEM-ACETIC-PKA-25C')||null;
  const ammoniaRecord=prior.find(x=>x?.id==='PUBCHEM-AMMONIA-PKB-25C')||null;
  const pKw=13.99; 
  const records=[
    {id:'CH3COOH_KA_ACTIVITY_298K',reaction:'CH3COOH(aq) ⇌ H+(aq) + CH3COO−(aq)',kind:'acid_dissociation',
      referenceValue:acidRecord?.value??null,referenceQuantity:'pKa',referenceUnit:'dimensionless',
      derivedKa:acidRecord?Math.pow(10,-acidRecord.value):null,temperature_K:acidRecord?.temperatureK??298.15,
      medium:'water; source compilation record',standardState:'dimensionless activity convention',sourceRecord:acidRecord?.id??null,
      source:acidRecord?.reference??null,sourceUrl:'https://pubchem.ncbi.nlm.nih.gov/compound/Glacial-Acetic-Acid',
      legacyValue:pKa??null,legacyUnit:find('CH3COOH_AQ')?.unit??null,
      legacyMatch:!!acidRecord&&Number.isFinite(pKa)&&Math.abs(pKa-Math.pow(10,-acidRecord.value))<=Math.pow(10,-acidRecord.value)*0.01,
      status:acidRecord?'COMPILED_SOURCE_MATCH_CONVENTION_REVIEW':'SOURCE_RECORD_MISSING',
      limitations:'Underlying legacy pKa is a compiled reference with cited source; ionic strength is not specified in this record. The legacy Ka unit mol/L is not the dimensionless activity-constant convention.'},
    {id:'NH3_KB_ACTIVITY_298K',reaction:'NH3(aq) + H2O(l) ⇌ NH4+(aq) + OH−(aq)',kind:'base_dissociation',
      referenceValue:ammoniaRecord?.value??null,referenceQuantity:'Kb',referenceUnit:'dimensionless',
      temperature_K:ammoniaRecord?.temperatureK??298.15,medium:'water; source compilation record',
      standardState:'dimensionless activity convention',sourceRecord:ammoniaRecord?.id??null,
      source:ammoniaRecord?.reference??null,sourceUrl:'https://pubchem.ncbi.nlm.nih.gov/compound/Ammonia',
      legacyValue:kbNH3??null,legacyUnit:find('NH3_AQ')?.unit??null,
      legacyMatch:!!ammoniaRecord&&Number.isFinite(kbNH3)&&Math.abs(kbNH3-ammoniaRecord.value)<=ammoniaRecord.value*0.02,
      status:ammoniaRecord?'COMPILED_SOURCE_MATCH_CONVENTION_REVIEW':'SOURCE_RECORD_MISSING',
      limitations:'Source compilation does not state ionic strength in this record. Legacy mol/L unit is not the dimensionless activity-constant convention.'},
    {id:'WATER_KW_IAPWS_R11_24',reaction:'2 H2O(l) ⇌ H3O+(aq) + OH−(aq)',kind:'water_ionization',
      referenceValue:pKw,referenceQuantity:'pKw',derivedKw:Math.pow(10,-pKw),referenceUnit:'dimensionless',
      temperature_C:25,pressure_MPa:0.1,standardState:'ionic molality standard state m° = 1 mol kg−1; pure liquid water standard state',
      source:'IAPWS R11-24 (2024), Table 3; pKw rounded to 0.01',sourceUrl:'https://www.iapws.org/relguide/Ionization.html',
      legacyValue:kwTeaching??null,legacyUnit:find('H2O_AQ')?.unit??null,
      legacyMatch:Number.isFinite(kwTeaching)&&Math.abs(kwTeaching-Math.pow(10,-pKw))<=Math.pow(10,-pKw)*0.03,
      status:'ROUNDED_IAPWS_CROSSCHECK_CONVENTION_REVIEW',
      limitations:'IAPWS table value is rounded and uses an activity/molarity-standard-state formulation; legacy 1.0e-14 concentration-form value remains an educational approximation, not the same stored quantity.'}
  ];
  function audit(){return {version:'4.07',scope:'CHEMISTRY_ONLY',records,
    matched:records.filter(x=>x.legacyMatch).length,legacyMutation:false,referenceReady:false,
    openIssues:['compiled-source ionic-strength metadata','activity-to-concentration conversion','Kw exact evaluation at requested density/pressure'],
    scientificGate:'BLOCKED',browserRuntime:'NOT_VERIFIED'};}
  C.DATA.ACID_BASE_REFERENCE_NORMALIZATION_V407={version:'4.07',records,audit};
  C.P0_REGRESSION_V407={acidBaseNormalization:audit(),legacyMutation:false,browserRuntime:'NOT_VERIFIED'};
})();

} catch (err) {
  try { console.warn('[CHE module 278]', err && err.message ? err.message : err); } catch(_){}
}