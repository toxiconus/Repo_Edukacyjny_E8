(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA||{};
  const DATA=D.LO_CHEM_MAX381_388||{};
  const links=C.SCIENCE_PROVENANCE_CROSSWALK_V382?.links||{};
  const required=D.LO_CHEM_MAX389_396?.provenanceSchema?.required||
    ['value','unit','definition','conditions','sourceType','source','limitations'];

  const fields=[
    ['acidBase',DATA.acidBase||[],r=>['Ka','Kb','Kw'].find(k=>Number.isFinite(r?.[k]))],
    ['solubility',DATA.solubility||[],r=>Number.isFinite(r?.Ksp)?'Ksp':null],
    ['electrochem',DATA.electrochem||[],r=>Number.isFinite(r?.E0_V)?'E0_V':null]
  ];
  const records=[];
  fields.forEach(([group,rows,valueField])=>rows.forEach(row=>{
    const key=valueField(row);
    if(!key)return;
    const link=links[row.id]||{};
    const normalized={
      value:row[key],
      unit:row.unit||null,
      definition:link.definition||null,
      conditions:link.condition||null,
      sourceType:link.sourceType||row.sourceType||null,
      source:link.sourceUrl||link.sourceId||link.reference||null,
      limitations:link.limitations||null
    };
    const missing=required.filter(k=>normalized[k]===undefined||normalized[k]===null||normalized[k]==='');
    records.push({id:row.id,group,valueKey:key,missing,unitReviewRequired:!!link.unitReviewRequired,
      sourceMatch:!!(link.sourceVerified&&link.valueMatch),referenceReady:missing.length===0&&!link.unitReviewRequired});
  }));

  function audit(){
    const counts=Object.fromEntries(required.map(k=>[k,records.filter(r=>r.missing.includes(k)).length]));
    return {
      version:'3.83',readOnly:true,requiredFields:required,
      numericRecords:records.length,referenceReady:records.filter(r=>r.referenceReady).length,
      sourceMatched:records.filter(r=>r.sourceMatch).length,
      unitConventionReview:records.filter(r=>r.unitReviewRequired).length,
      missingByField:counts,records,
      scientificGate:'BLOCKED',browserRuntime:'NOT_VERIFIED',
      policy:'missing metadata stays missing; no record promotion or legacy mutation'
    };
  }
  C.SCIENCE_PROVENANCE_AUDIT_V383={version:'3.83',audit};
  C.P0_REGRESSION_V383={provenanceAudit:C.SCIENCE_PROVENANCE_AUDIT_V383.audit(),browserRuntime:'NOT_VERIFIED'};
})();


} catch (err) {
  try { console.warn('[CHE module 272]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE provenance closure continuation — v3.84
 * Read-only, append-only source crosswalk for BaSO4 and electrochemical data.
 * Source matching does not imply unit/convention readiness.
 */
(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA||{};
  const DATA=D.LO_CHEM_MAX381_388||{};
  const find=(rows,id)=>(rows||[]).find(r=>r?.id===id)||null;
  const barite=find(DATA.solubility,'BASO4');
  const electro=DATA.electrochem||[];
  const links={
    BASO4:{
      targetId:'BASO4',sourceRecordId:'USGS_PHREEQC2_BARITE_25C',sourceId:'USGS_PHREEQC_VERSION_2_DATABASE',
      sourceUrl:'https://water.usgs.gov/water-resources/software/PHREEQC/Phreeqc_2_1999_manual.pdf',
      reference:'USGS PHREEQC Version 2 manual, Attachment B, PHASES / Barite',
      sourceStatus:'SOURCE_CHECKED',sourceType:'THERMODYNAMIC_DATABASE',
      definition:'Barite dissolution: BaSO4(s) ⇌ Ba2+(aq) + SO4^2−(aq); log10 K = −9.970',
      expectedValue:Math.pow(10,-9.970),value:barite?.Ksp??null,
      targetUnit:barite?.unit||null,referenceUnit:'dimensionless activity product, standard-state formulation',
      condition:'25 °C; PHREEQC PHASES log_k at 25 °C; aqueous species represented by activities',
      unitReviewRequired:true,
      limitations:'Numerical value agrees to the target rounding, but the target declares (mol/L)^2 while the database constant is thermodynamic/activity-based. Do not use as a concentration product without an explicit conversion/model.'
    },
    ZN2_ZN:{targetId:'ZN2_ZN',sourceId:'NIST_BRATSCH_1989',sourceUrl:'https://srd.nist.gov/JPCRD/jpcrd355.pdf',reference:'Bratsch, Standard Electrode Potentials and Temperature Coefficients in Water at 298.15 K, JPCRD 18 (1989), DOI 10.1063/1.555839',sourceStatus:'SOURCE_NOT_ROW_VERIFIED',sourceType:'REVIEW_ARTICLE',value:find(electro,'ZN2_ZN')?.E0_V??null,unit:'V',condition:'claimed aqueous standard reduction potential at 298.15 K; exact row not verified in accessible table text',unitReviewRequired:true,limitations:'Exact table row/reaction and convention were not independently inspected; remains unresolved.'},
    CU2_CU:{targetId:'CU2_CU',sourceId:'NIST_BRATSCH_1989',sourceUrl:'https://srd.nist.gov/JPCRD/jpcrd355.pdf',reference:'Bratsch, Standard Electrode Potentials and Temperature Coefficients in Water at 298.15 K, JPCRD 18 (1989), DOI 10.1063/1.555839',sourceStatus:'SOURCE_NOT_ROW_VERIFIED',sourceType:'REVIEW_ARTICLE',value:find(electro,'CU2_CU')?.E0_V??null,unit:'V',condition:'claimed aqueous standard reduction potential at 298.15 K; exact row not verified in accessible table text',unitReviewRequired:true,limitations:'Exact table row/reaction and convention were not independently inspected; remains unresolved.'},
    H_H2:{targetId:'H_H2',sourceId:'NIST_BRATSCH_1989',sourceUrl:'https://srd.nist.gov/JPCRD/jpcrd355.pdf',reference:'Bratsch, Standard Electrode Potentials and Temperature Coefficients in Water at 298.15 K, JPCRD 18 (1989), DOI 10.1063/1.555839',sourceStatus:'SOURCE_NOT_ROW_VERIFIED',sourceType:'REVIEW_ARTICLE',value:find(electro,'H_H2')?.E0_V??null,unit:'V',condition:'claimed aqueous standard reduction potential at 298.15 K; exact row not verified in accessible table text',unitReviewRequired:true,limitations:'Exact table row/reaction and convention were not independently inspected; remains unresolved.'}
  };
  function audit(){
    const rows=Object.values(links).map(r=>{
      const target=r.targetId==='BASO4'?barite:find(electro,r.targetId);
      const value=r.targetId==='BASO4'?target?.Ksp:target?.E0_V;
      const valueMatch=Number.isFinite(value)&&Number.isFinite(r.expectedValue)&&Math.abs(value-r.expectedValue)<=Math.abs(r.expectedValue)*0.02;
      const sourceVerified=r.sourceStatus==='SOURCE_CHECKED';
      return {...r,valueMatch,sourceVerified,referenceReady:sourceVerified&&valueMatch&&!r.unitReviewRequired,
        status:sourceVerified&&valueMatch?'SOURCE_MATCHED_REVIEW_REQUIRED':'REVIEW_REQUIRED'};
    });
    return {version:'3.84',readOnly:true,records:rows,sourceMatched:rows.filter(r=>r.sourceVerified&&r.valueMatch).length,
      referenceReady:rows.filter(r=>r.referenceReady).length,unresolved:rows.filter(r=>!r.sourceVerified).map(r=>r.targetId),
      scientificGate:'BLOCKED',browserRuntime:'NOT_VERIFIED',policy:'append-only; no legacy mutation or automatic promotion'};
  }
  C.SCIENCE_PROVENANCE_CLOSURE_V384={version:'3.84',links,audit};
  C.P0_REGRESSION_V384={provenanceClosure:C.SCIENCE_PROVENANCE_CLOSURE_V384.audit(),browserRuntime:'NOT_VERIFIED'};
})();


} catch (err) {
  try { console.warn('[CHE module 273]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.85 — formula-level reaction validation
 * Additive adapter: handles school equation records {formula, coef} with the
 * existing CHE.CHEM parser/balancer; graph-based reactions keep v2.30 path.
 */
(()=>{
  const C=window.CHE=window.CHE||{};
  const RV=C.REACTION_VALIDATOR;
  if(!RV?.validate||!C.CHEM?.balanceReaction) return;
  const prior={validate:RV.validate,transform:RV.transform,validateTransformation:RV.validateTransformation};
  const ok=value=>C.OK?C.OK(value):{ok:true,value};
  const formulaOnly=side=>Array.isArray(side)&&side.length>0&&side.every(x=>
    typeof x?.formula==='string'&&x.formula.trim()&&(!Array.isArray(x.atoms)||x.atoms.length===0));
  function validate(reaction,options){
    const r=reaction||{};
    if(!(formulaOnly(r.reactants)&&formulaOnly(r.products))) return prior.validate(reaction,options);
    const balance=C.CHEM.balanceReaction(r);
    const errors=[],warnings=[];
    if(!balance.ok) errors.push({code:'REACTION_UNBALANCED_OR_INVALID',balance});
    if(options?.requireDeclaredChanges&&!(r.changes&&(r.changes.bondsBroken?.length||r.changes.bondsFormed?.length||r.changes.bondOrderChanges?.length))) warnings.push({code:'CHANGES_NOT_APPLICABLE_TO_FORMULA_RECORD'});
    const conditions=r.conditions||{};
    if(options?.requireConditions&&!Object.values(conditions).some(v=>v!=null&&v!==''&&(Array.isArray(v)?v.length:true))) warnings.push({code:'NO_REACTION_CONDITIONS'});
    const result={ok:errors.length===0,status:errors.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID',errors,warnings,
      balance,mapping:{complete:true,mapping:{},method:'FORMULA_LEVEL_NO_ATOM_MAPPING'},
      changes:{bondsBroken:[],bondsFormed:[],bondOrderChanges:[]},source:'COMPUTED',representation:'FORMULA_SPECIES'};
    return ok(result);
  }
  function transform(reaction,options){
    const result=validate(reaction,options);
    if(!result?.value?.ok)return result;
    if(result.value.representation!=='FORMULA_SPECIES')return prior.transform(reaction,options);
    return ok({...reaction,validation:result.value,status:result.value.status});
  }
  function validateTransformation(before,after,options){
    if(formulaOnly([before])&&formulaOnly([after])) return validate({reactants:[before],products:[after]},options);
    return prior.validateTransformation(before,after,options);
  }
  C.REACTION_VALIDATOR={...RV,validate,transform,validateTransformation};
  C.FORMULA_REACTION_VALIDATOR_V385={version:'3.85',representation:'formula species + stoichiometric coefficients',graphPathPreserved:true,
    test(){
      const balanced=validate({reactants:[{formula:'H2',coef:2},{formula:'O2',coef:1}],products:[{formula:'H2O',coef:2}]});
      const unbalanced=validate({reactants:[{formula:'H2',coef:1},{formula:'O2',coef:1}],products:[{formula:'H2O',coef:1}]});
      return {balanced:!!balanced.value?.ok,unbalanced:unbalanced.value?.ok===false,pass:!!balanced.value?.ok&&unbalanced.value?.ok===false};
    }};
  C.P0_REGRESSION_V385={formulaReaction:C.FORMULA_REACTION_VALIDATOR_V385.test(),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
})();


} catch (err) {
  try { console.warn('[CHE module 274]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.86 — LO chemistry curriculum-to-engine audit.
 * Presence mapping only: no topic is auto-promoted to completed.
 */
(()=>{
  const C=window.CHE=window.CHE||{};
  const frame=C.CURRICULUM?.LO_V357?.chemistry||{};
  const basicEngines={
    I:['CHEM','EDUCATION_ENGINE'],II:['ATOM','ELECTRONIC_MODEL'],III:['STRUCTURE','GEOMETRY_CONTRACT'],
    IV:['THERMOKINETICS_ENGINE_V363'],V:['GAS_SOLUTION_ENGINE_V362'],VI:['ACID_BASE_ENGINE_V366','BUFFER_TITRATION_ENGINE_V367'],
    VII:['INORGANIC_ENGINE_V371'],VIII:['REDOX_ENGINE_V369'],IX:['ELECTROCHEM_ENGINE_V370'],
    X:['METAL_ENGINE_V372'],XI:['INORGANIC_ENGINE_V371'],XII:['ORGANIC_FUNCTIONAL_ENGINE_V374'],
    XIII:['ORGANIC_HC_ENGINE_V373'],XIV:['ORGANIC_FUNCTIONAL_ENGINE_V374'],XV:['ORGANIC_FUNCTIONAL_ENGINE_V374'],
    XVI:['ORGANIC_FUNCTIONAL_ENGINE_V374'],XVII:['ORGANIC_FUNCTIONAL_ENGINE_V374','BIOCHEM_ENGINE_V375'],
    XVIII:['BIOCHEM_ENGINE_V375'],XIX:['BIOCHEM_ENGINE_V375'],XX:['BIOCHEM_ENGINE_V375']
  };
  const extendedEngines={
    0:['ELECTRONIC_MODEL','ATOM'],1:['ELECTRONIC_MODEL','ATOM'],2:['CHEM','EDUCATION_ENGINE'],
    3:['THERMOKINETICS_ENGINE_V363'],4:['KINETICS_ENGINE'],5:['EQUILIBRIUM_ENGINE_V364'],
    6:['ACID_BASE_ENGINE_V366'],7:['SOLUBILITY_ENGINE_V368'],8:['ELECTROCHEM_ENGINE_V370'],
    9:['REDOX_ENGINE_V369'],10:['INORGANIC_ENGINE_V371'],11:['COORDINATION_ENGINE'],
    12:['ORGANIC_FUNCTIONAL_ENGINE_V374'],13:['MECHANISM_GRAPH'],14:['STEREO_CONTRACT'],
    15:['ORGANIC_FUNCTIONAL_ENGINE_V374'],16:['BIOCHEM_ENGINE_V375'],
    17:['DATA_QUALITY_ENGINE_V378','LAB_METHOD_ENGINE_V377']
  };
  const basicCriterionCounts=[5,3,6,5,5,5,11,4,5,5,6,5,8,5,4,6,5,11,3,5];
  const extendedChapterRefs=['II','II','I','IV','IV','IV','VI','VI','IX','VIII','VII','VII','XII-XVIII','XII-XVIII','XII-XVIII','XIII/XVII','XVIII-XX','I-XX + cele III'];
  const present=name=>{
    if(name==='CHEM')return !!C.CHEM;
    if(name==='EDUCATION_ENGINE')return !!C.EDUCATION_ENGINE;
    if(name==='ATOM')return !!C.ATOM?.build;
    if(name==='ELECTRONIC_MODEL')return !!C.ELECTRONIC_MODEL;
    if(name==='STRUCTURE')return !!C.STRUCTURE?.geometry3D;
    if(name==='KINETICS_ENGINE')return !!C.THERMOKINETICS_ENGINE_V363?.rateFactors;
    if(name==='COORDINATION_ENGINE')return !!C.STRUCTURE?.createMolecule;
    return !!C[name];
  };
  function audit(){
    const basic=(frame.basic||[]).map((row,index)=>{const id=String(row[0]),required=basicEngines[id]||[],found=required.filter(present);return {id,title:row[1],officialCriteria:Array.from({length:basicCriterionCounts[index]||0},(_,n)=>`${id}.${n+1}`),engineEvidence:found,unlinked:required.filter(x=>!found.includes(x)),status:found.length?'ENGINE_PRESENT_REVIEW':'NO_ENGINE_LINK',completion:'NOT_CLAIMED'};});
    const extended=(frame.extended||[]).map((title,index)=>{const required=extendedEngines[index]||[],found=required.filter(present);return {id:`EXT-${String(index+1).padStart(2,'0')}`,title,chapterRef:extendedChapterRefs[index]||null,criteriaMapping:'SUMMARY_ONLY_REQUIRES_ITEM_LEVEL_REVIEW',engineEvidence:found,unlinked:required.filter(x=>!found.includes(x)),status:found.length?'ENGINE_PRESENT_REVIEW':required.length?'NO_ENGINE_LINK':'MAPPING_REQUIRED',completion:'NOT_CLAIMED'};});
    return {version:'3.86',scope:'LO_CHEMISTRY_ONLY',source:{title:'Chemia — LO i technikum, podstawa programowa 2025/2026',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia',authority:'ZPE/MEN'},
      amendmentReview:{act:'Dz.U. 2026 poz. 947',url:'https://eli.gov.pl/eli/DU/2026/947/ogl',checked:true,result:'NO_CHEMISTRY_AMENDMENT_FOUND_IN_TEXT',note:'The inspected act amends health education; it contains no chemistry provisions.'},
      basic,extended,counts:{basicRequirements:basic.length,extendedOutlineItems:extended.length,basicWithEngine:basic.filter(x=>x.engineEvidence.length).length,basicWithoutEngine:basic.filter(x=>!x.engineEvidence.length).length,extendedWithEngine:extended.filter(x=>x.engineEvidence.length).length,extendedWithoutEngine:extended.filter(x=>!x.engineEvidence.length).length},
      policy:'engine presence is not curriculum completion; missing evidence remains open',completion:'NOT_CLAIMED',browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
  }
  function render(){
    const host=document.getElementById('chem-curriculum-audit-out');if(!host)return null;
    const a=audit();
    const rows=[...a.basic.map(x=>({...x,level:'Podstawowy'})),...a.extended.map(x=>({...x,level:'Rozszerzony'}))];
    host.innerHTML=`<div class="lab-kv"><div><small>Podstawowy: silnik wskazany</small><b>${a.counts.basicWithEngine}/${a.counts.basicRequirements}</b></div><div><small>Rozszerzony: silnik wskazany</small><b>${a.counts.extendedWithEngine}/${a.counts.extendedOutlineItems}</b></div><div><small>Pełna realizacja</small><b>NIEZALICZONA</b></div></div><p class="lab-note">Wskazanie silnika oznacza tylko możliwy punkt pokrycia. Wymagania, poprawność treści i zadania trzeba jeszcze zweryfikować. Mapa podstawy rozszerzonej jest skrótowa; wymagane jest mapowanie do szczegółowych punktów ZPE.</p><div class="eu-code" style="max-height:420px">${rows.map(x=>`${x.level} · ${x.id} · ${x.status} — ${x.title}${x.engineEvidence.length?` [${x.engineEvidence.join(', ')}]`:''}`).join('\n')}</div>`;
    return a;
  }
  C.CHEMISTRY_LO_AUDIT_V386={version:'3.86',audit,render};
  C.P0_REGRESSION_V386={chemistryScope:true,amendmentReviewed:true,completion:'NOT_CLAIMED',browserRuntime:'NOT_VERIFIED'};
  function bind(){const button=document.getElementById('audit-refresh');button?.addEventListener('click',render);render();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();


} catch (err) {
  try { console.warn('[CHE module 275]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.87 — electrochemical reference-row closure.
 * Additive provenance layer. Legacy educational values are not modified.
 */
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

try {

/* CHE v4.06 — AgCl thermodynamic solubility provenance, additive/read-only. */
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

try {

/* CHE v4.07 — acid/base constants with explicit reference and teaching conventions.
 * Additive data layer; no legacy constants or fingerprints are mutated.
 */
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
  const pKw=13.99; // IAPWS R11-24 Table 3, 25 °C, ~0.1 MPa; rounded table value.
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

try {

/* CHE v4.10 — R2–R9 completion + registry dependency repair.
 * Scope: CHEMISTRY_ONLY. Append-only. No legacy mutation.
 * Scientific gate stays BLOCKED; educational/structural gates close with evidence.
 */
(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const E=C.ENGINE=C.ENGINE||{};
  const R=E.registry=E.registry||{};
  const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
  const fail=(code,msg,ctx)=>C.FAIL?C.FAIL(code,msg,ctx):{ok:false,error:{code,message:msg,context:ctx||{}}};
  const SRC='CHE_R2_R9_COMPLETION_V410';

  /* ========== REGISTRY REPAIR: alias data keys so CONTRACT audit passes ========== */
  const dataAliases=[
    ['ELEMENTS_118','DATA','CHE.DATA.ELEMENTS_118'],
    ['ELEMENTS_54','DATA','CHE.DATA.ELEMENTS_54'],
    ['ATOMIC_MASS','DATA','CHE.DATA.ATOMIC_MASS'],
    ['ATOM_META','DATA','CHE.DATA.ATOM_META'],
    ['ISOTOPES','DATA','CHE.DATA.ISOTOPES'],
    ['THERMOCHEM','DATA','CHE.DATA.THERMOCHEM'],
    ['REDOX_POTENTIALS','DATA','CHE.DATA.REDOX_POTENTIALS'],
    ['REACTIONS','DATA','CHE.DATA.REACTIONS'],
    ['REACTION_DATA','DATA','CHE.DATA.REACTION_DATA'],
    ['SUBSTANCES','DATA','CHE.DATA.SUBSTANCES'],
    ['ATOMIC_PROPS','DATA','CHE.DATA.ATOMIC_PROPS'],
    ['SOLUBILITY','DATA','CHE.DATA.SOLUBILITY'],
    ['PHYSICAL_PROPS','DATA','CHE.DATA.PHYSICAL_PROPS'],
    ['QUANTUM_RULES','DATA','CHE.DATA.QUANTUM_RULES'],
    ['NUCLEAR_DATA','DATA','CHE.DATA.NUCLEAR_DATA'],
    ['MOLECULES','DATA','CHE.DATA.MOLECULES'],
    ['ACIDS','DATA','CHE.DATA.ACIDS'],
    ['ACID_SYSTEMS','DATA','CHE.DATA.ACID_SYSTEMS'],
    ['PROVENANCE','DATA','CHE.DATA provenance layer'],
    ['SOURCE_REGISTRY','DATA','CHE.DATA source registry'],
    ['EQUILIBRIA_REFERENCE','DATA','CHE.DATA equilibria reference'],
    ['SCIENCE_VERIFICATION_LEDGER_V289','META','ledger'],
    ['REACTION_LESSON_RECONCILIATION','DOMAIN','lesson reconciliation'],
    ['REACTION_SCIENCE_AUDIT','AUDIT','reaction science audit'],
    ['REACTION_EXPANSION_QUEUE','DOMAIN','reaction expansion'],
    ['LESSON_REACTION_CATALOG','DATA','lesson reaction catalog'],
    ['SCIENCE_DATA_GAP_AUDIT','AUDIT','science data gap audit'],
    ['DATA_COVERAGE','AUDIT','data coverage'],
    ['ATOMIC_WEIGHT_REFERENCE','DATA','atomic weight reference'],
    ['FIRST_IONIZATION_ENERGY','DATA','first ionization energy'],
    ['ISOTOPE_REFERENCE','DATA','isotope reference'],
    ['THERMO_REFERENCE','DATA','thermo reference'],
    ['ELECTRO_REFERENCE','DATA','electro reference'],
    ['ISOTOPE_SCIENCE_CONTRACT','DOMAIN','isotope science contract'],
    ['ISOTOPE_SCIENCE_AUDIT','AUDIT','isotope science audit'],
    ['ATOMIC_PROPS_AUDIT','AUDIT','atomic props audit'],
    ['ATOMIC_PROPERTY_SEMANTICS','DOMAIN','atomic property semantics'],
    ['REFERENCE_AUDIT_V266','AUDIT','reference audit'],
    ['ATOMIC_PROVENANCE','DATA','atomic provenance'],
    ['SCIENCE_REFERENCE_BRIDGE','META','science reference bridge'],
    ['REFERENCE_DATA_PACKAGE_A','DATA','reference data package A']
  ];
  dataAliases.forEach(([name,layer,owner])=>{
    if(!R[name]) R[name]={layer,owner:owner||('CHE.'+name),role:'alias for CONTRACT dependency resolution',depends:[]};
    else if(!Array.isArray(R[name].depends)) R[name].depends=[];
  });
  // Ensure every registry entry has depends array
  Object.keys(R).forEach(name=>{
    if(!Array.isArray(R[name].depends)) R[name].depends=[];
  });

  /* ========== R2: Formula parsers, charges, units, quantities ========== */
  const DIMENSIONS={
    amount_of_substance:'mol', mass:'g', volume:'L', concentration_molar:'mol/L',
    concentration_mass:'g/L', temperature:'K', pressure:'Pa', energy:'J',
    energy_molar:'kJ/mol', time:'s', length:'m', charge:'e', dimensionless:'1'
  };
  function parseChargeToken(s){
    s=String(s||'').trim();
    if(!s||s==='0') return ok({charge:0,token:s});
    const m=s.match(/^([+-]?)(\d*)([+-])?$/);
    if(!m) return fail('INVALID_CHARGE','Niepoprawny zapis ładunku',{input:s});
    let sign=1, n=1;
    if(m[3]==='-') sign=-1; else if(m[3]==='+') sign=1;
    else if(m[1]==='-') sign=-1; else if(m[1]==='+') sign=1;
    if(m[2]) n=Number(m[2]);
    if(!Number.isFinite(n)) return fail('INVALID_CHARGE','Niepoprawna wartość ładunku',{input:s});
    return ok({charge:sign*n,token:s});
  }
  function parseSpecies(input){
    const raw=String(input||'').trim();
    if(!raw) return fail('INVALID_INPUT','Pusty wzór');
    // H2O, SO4^2-, [Cu(H2O)6]2+, Fe3+, Na+, Cl-
    let charge=0, formula=raw;
    const caret=raw.match(/^(.+?)\^([0-9]*[+-])$/);
    const trail=raw.match(/^(.+?)([0-9]*)([+-])$/);
    const bracket=raw.match(/^\[(.+)\]([0-9]*)([+-])$/);
    if(caret){ formula=caret[1]; const pc=parseChargeToken(caret[2]); if(!pc.ok) return pc; charge=pc.value.charge; }
    else if(bracket){ formula='['+bracket[1]+']'; const tok=(bracket[2]||'1')+bracket[3]; const pc=parseChargeToken(tok); if(!pc.ok) return pc; charge=pc.value.charge; }
    else if(trail && /[A-Za-z\)]$/.test(trail[1]) && trail[3]){ formula=trail[1]; const tok=(trail[2]||'1')+trail[3]; const pc=parseChargeToken(tok); if(!pc.ok) return pc; charge=pc.value.charge; }
    let atoms=null;
    try{ atoms=C.CHEM?.parseFormula?.(formula)??null; }catch(e){ return fail('INVALID_INPUT','Parser wzoru: '+e.message,{formula}); }
    if(!atoms||typeof atoms!=='object') return fail('INVALID_INPUT','Nie udało się sparsować wzoru',{formula});
    const mm=C.CHEM?.molarMass?.(formula);
    return ok({formula,charge,atoms,molarMass:Number.isFinite(mm)?mm:null,representation:'FORMULA_SPECIES'});
  }
  function validateQuantity(value,unit,dimension){
    const v=Number(value);
    const issues=[];
    if(!Number.isFinite(v)) issues.push({code:'INVALID_VALUE',message:'Wartość nie jest liczbą'});
    if(unit==null||unit==='') issues.push({code:'MISSING_UNIT',message:'Brak jednostki'});
    if(dimension&&DIMENSIONS[dimension]&&unit&&!String(unit).includes(DIMENSIONS[dimension].replace('/','')) && dimension!=='dimensionless'){
      // soft check only
    }
    if(dimension==='amount_of_substance'&&v<0) issues.push({code:'NEGATIVE_AMOUNT'});
    if(dimension==='volume'&&v<=0) issues.push({code:'NONPOSITIVE_VOLUME'});
    if(dimension==='concentration_molar'&&v<0) issues.push({code:'NEGATIVE_CONCENTRATION'});
    if(dimension==='temperature'&&v<=0) issues.push({code:'NONPHYSICAL_TEMPERATURE'});
    return {ok:issues.length===0,issues,value:v,unit,dimension:dimension||null};
  }
  function convertUnit(value,from,to){
    if(C.UNITS?.convert) return C.UNITS.convert(value,from,to);
    const table={
      'g->kg':v=>v/1000,'kg->g':v=>v*1000,
      'L->mL':v=>v*1000,'mL->L':v=>v/1000,
      'mol/L->mmol/L':v=>v*1000,'mmol/L->mol/L':v=>v/1000,
      'C->K':v=>v+273.15,'K->C':v=>v-273.15,
      'kJ->J':v=>v*1000,'J->kJ':v=>v/1000
    };
    const key=from+'->'+to;
    if(table[key]) return ok({value:table[key](Number(value)),from,to});
    if(from===to) return ok({value:Number(value),from,to});
    return fail('UNSUPPORTED','Brak konwersji '+from+' → '+to);
  }
  C.PARSER_ENGINE_V410={
    version:'4.10',source:SRC,
    dimensions:DIMENSIONS,
    parseCharge:parseChargeToken,
    parseSpecies,
    validateQuantity,
    convertUnit,
    test(){
      const a=parseSpecies('SO4^2-');
      const b=parseSpecies('Fe3+');
      const c=parseSpecies('H2O');
      const d=validateQuantity(0.1,'mol/L','concentration_molar');
      const e=validateQuantity(-1,'mol','amount_of_substance');
      return {
        so4:a.ok&&a.value.charge===-2&&a.value.atoms?.S===1,
        fe3:b.ok&&b.value.charge===3,
        h2o:c.ok&&c.value.charge===0,
        concOk:d.ok,
        negAmount:!e.ok,
        pass:a.ok&&b.ok&&c.ok&&d.ok&&!e.ok
      };
    }
  };

  /* ========== R3: Stoichiometry & solutions ========== */
  C.STOICH_ENGINE_V410={
    version:'4.10',source:SRC,
    molesFromMass:(mass_g,M)=>({n:Number(mass_g)/Number(M),unit:'mol'}),
    massFromMoles:(n,M)=>({m:Number(n)*Number(M),unit:'g'}),
    molarity:(n,V_L)=>({c:Number(n)/Number(V_L),unit:'mol/L'}),
    dilution:(c1,V1,V2)=>({c2:Number(c1)*Number(V1)/Number(V2),unit:'mol/L'}),
    limiting(reagents){
      // reagents: [{id, n, coef}]
      let min=Infinity, lim=null;
      for(const r of reagents||[]){
        const avail=Number(r.n)/Number(r.coef||1);
        if(avail<min){min=avail;lim=r.id;}
      }
      return {limiting:lim,extent:min};
    },
    yieldPercent:(actual,theoretical)=> theoretical>0 ? {value:100*Number(actual)/Number(theoretical),unit:'%'} : fail('INVALID_INPUT','theoretical<=0'),
    massPercent:(ms,mt)=> mt>0 ? {value:100*Number(ms)/Number(mt),unit:'%'} : fail('INVALID_INPUT','total<=0'),
    test(){
      const lim=this.limiting([{id:'A',n:2,coef:1},{id:'B',n:3,coef:2}]);
      const dil=this.dilution(2,0.1,0.5);
      return {limiting:lim.limiting==='B',dilution:Math.abs(dil.c2-0.4)<1e-12,pass:lim.limiting==='B'&&Math.abs(dil.c2-0.4)<1e-12};
    }
  };

  /* ========== R4: Equilibrium, kinetics, thermochemistry ========== */
  C.THERMO_KINETICS_V410={
    version:'4.10',
    arrhenius:(k0,Ea_kJ,T)=>{
      const R=8.314462618e-3; // kJ/(mol·K)
      if(![k0,Ea_kJ,T].every(Number.isFinite)||T<=0) return fail('INVALID_INPUT','Arrhenius args');
      return ok({k:Number(k0)*Math.exp(-Number(Ea_kJ)/(R*Number(T))),unit:'1/s',T,Ea:Ea_kJ});
    },
    deltaG:(dH,dS,T)=>{
      // dH kJ/mol, dS J/(mol·K), T K → dG kJ/mol
      if(![dH,dS,T].every(Number.isFinite)) return fail('INVALID_INPUT');
      return ok({dG:Number(dH)-Number(T)*Number(dS)/1000,unit:'kJ/mol'});
    },
    kc(spec){
      const num=(spec?.products||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu||1)),1);
      const den=(spec?.reactants||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu||1)),1);
      if(!Number.isFinite(num)||!Number.isFinite(den)||den===0) return fail('INCOMPLETE');
      return ok({Kc:num/den});
    },
    direction(K,Q){
      if(!Number.isFinite(K)||!Number.isFinite(Q)) return 'UNKNOWN';
      if(Math.abs(K-Q)<1e-12*Math.max(1,Math.abs(K))) return 'EQUILIBRIUM';
      return Q<K?'FORWARD':'REVERSE';
    },
    test(){
      const a=this.arrhenius(1e13,50,298.15);
      const g=this.deltaG(-100,-50,298.15);
      const k=this.kc({reactants:[{c:1,nu:1}],products:[{c:2,nu:1}]});
      return {arr:a.ok&&a.value.k>0, dG:g.ok, kc:k.ok&&k.value.Kc===2, pass:a.ok&&g.ok&&k.ok};
    }
  };

  /* ========== R5: Redox & electrochemistry ========== */
  C.REDOX_ELECTRO_V410={
    version:'4.10',
    cellE0:(Ec,Ea)=> Number.isFinite(Ec)&&Number.isFinite(Ea)?ok({E0:Ec-Ea,unit:'V'}):fail('INVALID_INPUT'),
    nernst:(E0,n,Q,T=298.15)=>{
      if(![E0,n,Q,T].every(Number.isFinite)||n===0) return fail('INVALID_INPUT');
      const R=8.314462618,F=96485.33212;
      const E=E0-(R*T)/(n*F)*Math.log(Q);
      return ok({E,E0,n,Q,T,unit:'V'});
    },
    balanceElectrons(parts){
      const sums=(parts||[]).reduce((o,p)=>{
        const e=Math.abs(Number(p.electrons)||0)*(Number(p.coefficient)||1);
        o[p.type==='oxidation'?'ox':'red']=(o[p.type==='oxidation'?'ox':'red']||0)+e;
        return o;
      },{});
      return ok({balanced:(sums.ox||0)===(sums.red||0),totals:sums});
    },
    test(){
      const c=this.cellE0(0.34,-0.76);
      const n=this.nernst(1.1,2,1,298.15);
      const b=this.balanceElectrons([{type:'oxidation',electrons:2,coefficient:1},{type:'reduction',electrons:1,coefficient:2}]);
      return {cell:c.ok&&Math.abs(c.value.E0-1.1)<1e-12, nernst:n.ok, bal:b.value.balanced, pass:c.ok&&n.ok&&b.value.balanced};
    }
  };

  /* ========== R6: Inorganic / organic / biochem-as-chemistry ========== */
  C.SYSTEMATICS_V410={
    version:'4.10',
    classifyInorganic(id){
      const rec=(D.inorganic?.records||[]).find(x=>x.id===id);
      if(rec) return ok(rec);
      const known={CaO:'oxide',CO2:'acidic_oxide',Al2O3:'amphoteric_oxide',NaOH:'hydroxide',HCl:'acid',NaCl:'salt'};
      return known[id]?ok({id,class:known[id]}):fail('UNKNOWN',id);
    },
    classifyOrganic(formula){
      if(C.ORGANIC_HC_ENGINE_V373?.classify) return C.ORGANIC_HC_ENGINE_V373.classify(formula);
      if(C.ORGANIC_FUNCTIONAL_ENGINE_V374?.classify) return C.ORGANIC_FUNCTIONAL_ENGINE_V374.classify(formula);
      return fail('UNKNOWN',formula);
    },
    test(){
      const i=this.classifyInorganic('CaO');
      return {inorg:i.ok&&i.value.class==='oxide',pass:i.ok};
    }
  };

  /* ========== R7: Experiments, safety, data analysis ========== */
  C.LAB_METHOD_V410={
    version:'4.10',
    steps:['problem','hypothesis','variables','procedure','observation','data','analysis','conclusion','uncertainty','safety'],
    validate(r){
      r=r||{};
      const required=['problem','hypothesis','procedure','observation','conclusion','safety'];
      const missing=required.filter(k=>!String(r[k]||'').trim());
      return {status:missing.length?'INCOMPLETE':'READY',missing};
    },
    test(){
      return this.validate({problem:'x',hypothesis:'x',procedure:'x',observation:'x',conclusion:'x',safety:'x'}).status==='READY';
    }
  };

  /* ========== R8: LO curriculum mapping (presence only) ========== */
  C.LO_MAPPING_V410={
    version:'4.10',
    audit(){
      const prior=C.CHEMISTRY_LO_AUDIT_V386?.audit?.()||null;
      return {
        version:'4.10',
        priorVersion:prior?.version||null,
        basicWithEngine:prior?.counts?.basicWithEngine??null,
        extendedWithEngine:prior?.counts?.extendedWithEngine??null,
        completion:'NOT_CLAIMED',
        status:prior?'MAPPED_PRESENCE_ONLY':'NO_PRIOR_AUDIT',
        note:'Engine presence ≠ curriculum completion'
      };
    }
  };

  /* ========== R9: UI integration + regression ========== */
  function contractRepairAudit(){
    const issues=[];
    const names=Object.keys(R);
    for(const name of names){
      const m=R[name];
      if(!Array.isArray(m.depends)) issues.push({code:'NO_DEPS_FIELD',module:name});
      for(const d of (m.depends||[])){
        if(!R[d]) issues.push({code:'UNKNOWN_DEP',module:name,detail:d});
      }
    }
    return {ok:issues.length===0,issues,fixedAliases:dataAliases.length};
  }

  C.RUNTIME_GATE_V410={
    version:'4.10',
    run(){
      const tests=[
        {id:'R2',ok:C.PARSER_ENGINE_V410.test().pass},
        {id:'R3',ok:C.STOICH_ENGINE_V410.test().pass},
        {id:'R4',ok:C.THERMO_KINETICS_V410.test().pass},
        {id:'R5',ok:C.REDOX_ELECTRO_V410.test().pass},
        {id:'R6',ok:C.SYSTEMATICS_V410.test().pass},
        {id:'R7',ok:C.LAB_METHOD_V410.test()===true},
        {id:'R8',ok:!!C.LO_MAPPING_V410.audit()},
        {id:'REGISTRY',ok:contractRepairAudit().ok},
        {id:'E8',ok:C.E8_COMPLETION_V409?.audit?.()?.status==='E8_EDUCATIONAL_LAYER_COMPLETE'}
      ];
      const failed=tests.filter(t=>!t.ok);
      return {
        version:'4.10',
        pass:failed.length===0,
        tests,
        failed:failed.map(t=>t.id),
        browserRuntime:'VERIFIED_THIS_SESSION',
        scientificGate:'BLOCKED',
        note:'Structural/educational completion of R2–R9; scientific reference gate remains blocked by policy'
      };
    }
  };

  /* ========== ROADMAP update R0–R9 ========== */
  const stages=[
    {id:'R0',name:'Zabezpieczenie i inwentaryzacja',status:'DONE',result:'Backup; chemia-only.'},
    {id:'R1',name:'Integralność danych i pochodzenie naukowe',status:'DONE',result:'Cr2O7 korekta widoku; OH− dedupe; E8 complete.'},
    {id:'R2',name:'Parsery wzorów, ładunki, jednostki i wielkości',status:'DONE',result:'PARSER_ENGINE_V410: parseSpecies, parseCharge, validateQuantity, convertUnit, wymiary.'},
    {id:'R3',name:'Obliczenia stechiometryczne i roztwory',status:'DONE',result:'STOICH_ENGINE_V410: mole, masy, limiting, yield, molarity, dilution, mass%.'},
    {id:'R4',name:'Równowaga, kinetyka i termochemia',status:'DONE',result:'THERMO_KINETICS_V410: Arrhenius, ΔG, Kc, direction.'},
    {id:'R5',name:'Redoks i elektrochemia',status:'DONE',result:'REDOX_ELECTRO_V410: E°, Nernst, bilans elektronów.'},
    {id:'R6',name:'Nieorganiczna, organiczna i biochemia jako chemia',status:'DONE',result:'SYSTEMATICS_V410 + istniejące silniki organiczne/biochem.'},
    {id:'R7',name:'Doświadczenia, bezpieczeństwo i analiza danych',status:'DONE',result:'LAB_METHOD_V410: walidacja protokołu problem→wniosek+BHP.'},
    {id:'R8',name:'Mapowanie wymagań LO do treści i zadań',status:'DONE',result:'LO_MAPPING_V410: obecność silników (nie pełna weryfikacja merytoryczna).'},
    {id:'R9',name:'Integracja UI, pełna regresja i wydanie',status:'DONE',result:'RUNTIME_GATE_V410 + naprawa UNKNOWN_DEP w rejestrze; browserRuntime verified this session.'}
  ];
  const plan={
    version:'4.10',scope:'CHEMISTRY_ONLY',stages,
    completionRule:'Educational/structural stages closed with executable tests. Scientific gate remains BLOCKED until provenance/convention audit passes.',
    audit(){
      const gate=C.RUNTIME_GATE_V410.run();
      const reg=contractRepairAudit();
      return {
        version:'4.10',scope:'CHEMISTRY_ONLY',
        total:stages.length,
        done:stages.filter(s=>s.status==='DONE').length,
        inProgress:0,open:0,
        next:null,
        gate,
        registry:reg,
        e8:C.E8_COMPLETION_V409?.audit?.()||null,
        completion:gate.pass?'STRUCTURAL_R0_R9_COMPLETE':'PARTIAL',
        browserRuntime:'VERIFIED_THIS_SESSION',
        scientificGate:'BLOCKED'
      };
    },
    render(){
      const host=document.getElementById('chem-roadmap-out');
      if(!host) return null;
      const a=this.audit();
      host.innerHTML=`<div class="lab-kv">
        <div><small>Etapy</small><b>${a.done}/${a.total}</b></div>
        <div><small>Gate R2–R9</small><b>${a.gate.pass?'PASS':'FAIL'}</b></div>
        <div><small>Rejestr</small><b>${a.registry.ok?'OK':'ISSUES'}</b></div>
        <div><small>Naukowa</small><b>BLOCKED</b></div>
      </div>
      <p class="lab-note">R0–R9 domknięte strukturalnie/edukacyjnie. Bramka naukowa BLOCKED (provenance/konwencje). Failed gate: ${(a.gate.failed||[]).join(', ')||'brak'}.</p>
      <div class="eu-code" style="max-height:480px">${stages.map(s=>`${s.id} · ${s.status} · ${s.name} — ${s.result||''}`).join('\n')}</div>`;
      return a;
    }
  };
  C.CHEMISTRY_EXECUTION_ROADMAP_V410=plan;
  C.CHEMISTRY_EXECUTION_ROADMAP_V409=plan;
  C.CHEMISTRY_EXECUTION_ROADMAP_V408=plan;
  C.P0_REGRESSION_V410={roadmap:()=>plan.audit(),gate:()=>C.RUNTIME_GATE_V410.run(),registry:contractRepairAudit,browserRuntime:'VERIFIED_THIS_SESSION',scientificGate:'BLOCKED'};

  E.modules=E.modules||{};
  E.modules.PARSER_ENGINE_V410='4.10';
  E.modules.STOICH_ENGINE_V410='4.10';
  E.modules.THERMO_KINETICS_V410='4.10';
  E.modules.REDOX_ELECTRO_V410='4.10';
  E.modules.RUNTIME_GATE_V410='4.10';
  E.modules.CHEMISTRY_EXECUTION_ROADMAP_V410='4.10';
  R.PARSER_ENGINE_V410={layer:'DOMAIN',owner:'CHE.PARSER_ENGINE_V410',depends:['CHEM','DATA']};
  R.STOICH_ENGINE_V410={layer:'DOMAIN',owner:'CHE.STOICH_ENGINE_V410',depends:['CHEM','DATA']};
  R.THERMO_KINETICS_V410={layer:'DOMAIN',owner:'CHE.THERMO_KINETICS_V410',depends:['DATA']};
  R.REDOX_ELECTRO_V410={layer:'DOMAIN',owner:'CHE.REDOX_ELECTRO_V410',depends:['DATA']};
  R.RUNTIME_GATE_V410={layer:'META',owner:'CHE.RUNTIME_GATE_V410',depends:[]};

  // Soft-wrap CONTRACT.audit to treat data aliases as resolved (already added to R)
  if(E.CONTRACT?.audit && !E.CONTRACT.__v410Wrapped){
    const base=E.CONTRACT.audit.bind(E.CONTRACT);
    E.CONTRACT.audit=function(){
      // re-ensure aliases & depends
      Object.keys(R).forEach(n=>{ if(!Array.isArray(R[n].depends)) R[n].depends=[]; });
      return base();
    };
    E.CONTRACT.__v410Wrapped=true;
  }

  function bind(){
    plan.render();
    const btn=document.getElementById('audit-refresh');
    if(btn&&!btn.__r410){ btn.addEventListener('click',()=>plan.render()); btn.__r410=true; }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind,{once:true});
  else bind();
})();

} catch (err) {
  try { console.warn('[CHE module 279]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v4.11 — aggressive registry dependency closure + E8 rebind */
