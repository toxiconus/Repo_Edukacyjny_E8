try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const sourceData=D.LO_CHEM_MAX381_388||{};
  const priorEquilibria=D.REFERENCE_EQUILIBRIA_V273||[];
  const priorAg=D.SCIENCE_EQUILIBRIA_REFERENCE_V298?.records?.['AgCl(aq-equilibrium)']||null;
  const priorKw=D.SCIENCE_EQUILIBRIA_REFERENCE_V299?.records?.['Kw-water-298.15K']||null;
  const byId=(rows,id)=>(rows||[]).find(x=>x?.id===id)||null;
  const acetic=byId(priorEquilibria,'PUBCHEM-ACETIC-PKA-25C');
  const ammonia=byId(priorEquilibria,'PUBCHEM-AMMONIA-PKB-25C');

  const links={
    CH3COOH_AQ:{
      targetId:'CH3COOH_AQ',sourceRecordId:acetic?.id||null,sourceId:acetic?.sourceId||null,
      reference:acetic?.reference||null,sourceUrl:'https://pubchem.ncbi.nlm.nih.gov/compound/Glacial-Acetic-Acid',sourceStatus:acetic?.status||'MISSING',
      sourceType:'COMPUTED_FROM_VERIFIED_PKA',definition:'Ka for CH3COOH ⇌ H+ + CH3COO−; derived as 10^(-pKa)',
      relation:'Ka is rounded from the previously verified pKa record',
      expectedValue:acetic?Math.pow(10,-acetic.value):null,
      value:byId(sourceData.acidBase,'CH3COOH_AQ')?.Ka??null,targetUnit:byId(sourceData.acidBase,'CH3COOH_AQ')?.unit||null,referenceUnit:'dimensionless equilibrium-constant convention',unitReviewRequired:true,
      condition:'aqueous; 298.15 K reference record',
      limitations:'Rounded educational Ka; activity and medium conventions remain those of the source pKa record.'
    },
    NH3_AQ:{
      targetId:'NH3_AQ',sourceRecordId:ammonia?.id||null,sourceId:ammonia?.sourceId||null,
      reference:ammonia?.reference||null,sourceUrl:'https://pubchem.ncbi.nlm.nih.gov/compound/Ammonia',sourceStatus:ammonia?.status||'MISSING',
      sourceType:'DATABASE',definition:'Kb for NH3 + H2O ⇌ NH4+ + OH−',
      relation:'rounded Kb value from the previously verified ammonia Kb record',
      expectedValue:ammonia?.value??null,
      value:byId(sourceData.acidBase,'NH3_AQ')?.Kb??null,targetUnit:byId(sourceData.acidBase,'NH3_AQ')?.unit||null,referenceUnit:'dimensionless equilibrium-constant convention',unitReviewRequired:true,
      condition:'aqueous; 298.15 K reference record',
      limitations:'Rounded educational value; equilibrium constants depend on medium and temperature.'
    },
    H2O_AQ:{
      targetId:'H2O_AQ',sourceRecordId:priorKw?'Kw-water-298.15K':null,
      sourceId:priorKw?'IAPWS_R11_24_NIST_2025':null,
      reference:priorKw?.source||null,
      sourceUrl:priorKw?'https://www.iapws.org/relguide/Ionization.html':null,
      sourceStatus:priorKw?'SOURCE_CHECKED_CONDITIONAL':'MISSING',
      sourceType:'EDUCATIONAL_APPROXIMATION',definition:'Conditional concentration-form ionization product for 2 H2O ⇌ H3O+ + OH−',
      relation:'same rounded conditional concentration-form teaching value',
      expectedValue:priorKw?.value??null,
      value:byId(sourceData.acidBase,'H2O_AQ')?.Kw??null,targetUnit:byId(sourceData.acidBase,'H2O_AQ')?.unit||null,referenceUnit:'IAPWS molal/mole-fraction standard-state formulation; not identical to concentration product',unitReviewRequired:true,
      condition:'water; 298.15 K; concentration-form approximation',
      limitations:priorKw?.limitations||'Do not treat as a universal thermodynamic Kw.'
    },
    AGCL:{
      targetId:'AGCL',sourceRecordId:priorAg?'AgCl(aq-equilibrium)':null,
      sourceId:priorAg?.source||null,
      reference:priorAg?'US EPA silver-solubility table; Lide (2000) as recorded in v2.98':null,
      sourceUrl:priorAg?'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100H1XW.TXT':null,
      sourceStatus:priorAg?'SOURCE_CHECKED':'MISSING',
      sourceType:'DATABASE',definition:'Dissolution product for AgCl(s) ⇌ Ag+ + Cl−',
      relation:'rounded value match; convention requires review',
      expectedValue:priorAg?.value??null,
      value:byId(sourceData.solubility,'AGCL')?.Ksp??null,targetUnit:byId(sourceData.solubility,'AGCL')?.unit||null,referenceUnit:'not specified in cited EPA table',unitReviewRequired:true,
      condition:'EPA table does not state temperature in the cited table; v2.98 layer labels 298.15 K.',
      limitations:'The cited EPA table gives 1.77 × 10^-10 and attributes it to Lide (2000), but the table does not state the temperature or activity/concentration convention. The v3.88 record labels Ksp with concentration-product units. Do not mark reference-ready until conditions and convention are reconciled.'
    }
  };

  const unresolved=[
    {targetId:'BASO4',reason:'No matching source-verified BaSO4 Ksp record was found in the existing reference layer.'},
    ...['ZN2_ZN','CU2_CU','H_H2'].map(id=>({targetId:id,reason:'The v3.88 entry lacks verified source, medium, electrode convention, and complete half-cell conditions.'}))
  ];
  const relMatch=(a,b,tol)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=Math.max(Math.abs(b)*tol,1e-15);
  function audit(){
    const rows=Object.values(links);
    const checked=rows.map(r=>{
      const relTol=r.targetId==='CH3COOH_AQ'?0.01:0.02;
      const valueMatch=relMatch(r.value,r.expectedValue,relTol);
      const sourceVerified=['VERIFIED','SOURCE_CHECKED_CONDITIONAL','SOURCE_CHECKED'].includes(r.sourceStatus);
      const conventionReady=!r.unitReviewRequired;
      return {...r,valueMatch,sourceVerified,conventionReady,
        status:sourceVerified&&valueMatch&&conventionReady?'REFERENCE_READY_CANDIDATE':sourceVerified&&valueMatch?'SOURCE_MATCHED_REVIEW_REQUIRED':'REVIEW_REQUIRED'};
    });
    return {
      version:'3.82',readOnly:true,linked:checked,
      sourceMatches:checked.filter(x=>x.sourceVerified&&x.valueMatch).length,
      referenceReadyCandidates:checked.filter(x=>x.status==='REFERENCE_READY_CANDIDATE').length,
      reviewRequired:checked.filter(x=>x.status!=='REFERENCE_READY_CANDIDATE').length+unresolved.length,
      unresolved,
      scientificGate:'BLOCKED',
      policy:'append-only; no legacy record mutation; source matching does not itself grant reference-ready status'
    };
  }
  C.SCIENCE_PROVENANCE_CROSSWALK_V382={version:'3.82',links,unresolved,audit};
  C.P0_REGRESSION_V382={provenanceCrosswalk:C.SCIENCE_PROVENANCE_CROSSWALK_V382.audit(),browserRuntime:'NOT_VERIFIED'};
})();

} catch (err) {
  try { console.warn('[CHE module 271]', err && err.message ? err.message : err); } catch(_){}
}

