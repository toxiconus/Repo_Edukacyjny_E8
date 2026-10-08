try {

(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.SOURCE_BRIDGE_V318={
    version:'3.18', referenceReady:false,
    policy:'source-backed queue; no promotion without verification',
    sources:{
      ZPE_CHEM_SP_2025_2026:{title:'Chemia — Szkoła podstawowa IV–VIII — podstawa programowa 2025/2026',url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia',scope:'SP7-8',role:'education_requirements'},
      ZPE_CHEM_LO_2025_2026:{title:'Chemia — Liceum ogólnokształcące i technikum — podstawa programowa 2025/2026',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia',scope:'LO',role:'education_requirements'},
      NIST_WEBBOOK_SRD69:{title:'NIST Chemistry WebBook, SRD 69',url:'https://webbook.nist.gov/chemistry/',scope:'scientific_data',role:'reference_data'},
      NIST_REACTION_SEARCH:{title:'NIST Chemistry WebBook — Reaction Search',url:'https://webbook.nist.gov/chemistry/reac-ser/',scope:'reactions',role:'reaction_search'}
    }
  };
  CHE.EDUCATION=CHE.EDUCATION||{};
  CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE_V318=[
    'H','C','N','O','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','I','Ba','Pb','Hg','Mn','Cr'
  ].map((symbol,i)=>({id:'ELEM-SOURCE-'+symbol,subject:symbol,sourceStatus:'VERIFY_REQUIRED',required:['identity','key_properties','safety','GHS','source'],priority:i<21?'P0':'P1'}));
  CHE.EDUCATION.INDICATOR_SOURCE_QUEUE_V318=[
    {id:'IND-PH-PAPER',name:'papierki/wskaźnik pH',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-LITMUS',name:'lakmus',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-PHENOLPHTHALEIN',name:'fenoloftaleina',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-MO',name:'oranż metylowy',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-UNIVERSAL',name:'wskaźnik uniwersalny',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-IODINE-STARCH',name:'próba jodowa skrobi',medium:'aqueous',status:'VERIFY_REQUIRED'}
  ];
  CHE.EDUCATION.SOLUBILITY_SOURCE_QUEUE_V318=[
    'Na+','K+','NH4+','NO3-','Cl-','Br-','I-','SO4^2-','CO3^2-','HCO3-','OH-','CH3COO-','Ag+','Ba2+','Ca2+','Mg2+','Cu2+','Fe2+','Fe3+','Pb2+','Zn2+','Al3+','S2-','PO4^3-'
  ].map(x=>({ion:x,status:'VERIFY_REQUIRED',kind:'qualitative_rule_or_quantitative_solubility',conditionsRequired:['temperature','solvent','medium','concentration_or_limit'],sourceRequired:true}));
  CHE.EDUCATION.EXPERIMENT_SAFETY_MATRIX_V318=[
    ['filtration','mixture separation','SP7-8'],['crystallization','mixture separation','SP7-8'],['distillation','mixture separation','SP7-8'],['decantation','mixture separation','SP7-8'],
    ['oxygen_preparation','oxygen properties','SP7-8'],['hydrogen_properties','hydrogen properties','SP7-8'],['acid_base_indicator','pH/indicators','SP7-8'],['metal_acid_reaction','reaction observation','SP7-8'],
    ['carbonate_acid','gas evolution','SP7-8'],['protein_denaturation','biomolecules','SP7-8'],['starch_iodine_test','biomolecules','SP7-8'],['titration','quantitative analysis','LO'],
    ['redox','electron transfer','LO'],['reaction_rate','kinetics','LO'],['buffer','equilibrium','LO'],['electrochemistry','redox/electrochemistry','LO']
  ].map(([id,topic,level])=>({id:'SAFE-'+id,topic,level,requiredFields:['hazards','PPE','procedure_limits','waste','observation','emergency_note'],status:'EDUCATIONAL_SAFETY_SCAFFOLD'}));
  CHE.REACTION_LESSON_RECONCILIATION=CHE.REACTION_LESSON_RECONCILIATION||{};
  CHE.REACTION_LESSON_RECONCILIATION.V318={
    sourceScope:'L001-L013', policy:'audit first; canonical promotion only after structural verification',
    statuses:['EXACT_CANONICAL','MULTIPLE_CANONICAL','NEEDS_REVIEW','NO_CANONICAL_MATCH','UNPARSEABLE'],
    promotionRule:'requires balanced canonical graph + provenance + conditions when source specifies them + safety metadata when applicable',
    externalSearchSource:'NIST_REACTION_SEARCH',
    unresolvedMustNotBeAutoPromoted:true
  };
  CHE.EDUCATION.gapAuditV318=function(){return {
    version:'3.18', referenceReady:false,
    sourceQueue:(CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE_V318||[]).length,
    indicatorQueue:(CHE.EDUCATION.INDICATOR_SOURCE_QUEUE_V318||[]).length,
    solubilityQueue:(CHE.EDUCATION.SOLUBILITY_SOURCE_QUEUE_V318||[]).length,
    safetyMatrix:(CHE.EDUCATION.EXPERIMENT_SAFETY_MATRIX_V318||[]).length,
    lessonReactionPolicy:CHE.REACTION_LESSON_RECONCILIATION.V318.promotionRule,
    duplicateDatabase:false
  };};
  CHE.KNOWLEDGE=CHE.KNOWLEDGE||{};
  CHE.KNOWLEDGE.V318={
    verifiedBySource:[],
    introducedOnly:['education_scaffolds'],
    lockedUntilFingerprintChange:true,
    note:'Brak automatycznej promocji danych edukacyjnych do REFERENCE_READY.'
  };
})();

} catch (err) {
  try { console.warn('[CHE module 203]', err && err.message ? err.message : err); } catch(_){}
}

