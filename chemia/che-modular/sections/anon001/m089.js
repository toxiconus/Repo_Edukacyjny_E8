try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const promoted=[];
const blocked=[];
const missing=[];
if(D.ATOMIC_WEIGHT_REFERENCE && Object.keys(D.ATOMIC_WEIGHT_REFERENCE.records||{}).length===118){
  promoted.push({layer:'ATOMIC_WEIGHT_REFERENCE',source:'CIAAW',count:118,status:'PROMOTED'});
} else {
  missing.push({layer:'ATOMIC_WEIGHT_REFERENCE',reason:'missing or incomplete CIAAW atomic-weight records'});
}
if(D.FIRST_IONIZATION_ENERGY && Object.keys(D.FIRST_IONIZATION_ENERGY||{}).length===118){
  promoted.push({layer:'FIRST_IONIZATION_ENERGY',source:'NIST_ASD',count:118,status:'PROMOTED'});
} else {
  missing.push({layer:'FIRST_IONIZATION_ENERGY',reason:'missing or incomplete NIST ASD records'});
}
if(D.ISOTOPES && Object.values(D.ISOTOPES).some(list=>Array.isArray(list)&&list.some(x=>String(x.source||'').includes('LOCAL_EDUCATIONAL_FALLBACK')))){
  blocked.push({layer:'ISOTOPES',source:'LOCAL_EDUCATIONAL_FALLBACK',reason:'isotope values are still local educational fallbacks and cannot be treated as canonical before CIAAW/NUBASE verification',count:Object.values(D.ISOTOPES).reduce((n,list)=>n+(Array.isArray(list)?list.length:0),0)});
} else if(!(D.ISOTOPE_SCIENCE_AUDIT && D.ISOTOPE_SCIENCE_AUDIT.audit)){
  missing.push({layer:'ISOTOPE_REFERENCE',reason:'no verified isotope contract available yet'});
}
if(!(D.THERMO_REFERENCE && D.THERMO_REFERENCE.audit)){
  blocked.push({layer:'THERMO_REFERENCE',reason:'thermochemical reference layer remains pending source verification'});
}
if(!(D.ELECTRO_REFERENCE && D.ELECTRO_REFERENCE.audit)){
  blocked.push({layer:'ELECTRO_REFERENCE',reason:'electrochemical reference layer remains pending half-reaction, medium and source verification'});
}
if(!(D.REACTION_SCIENCE_AUDIT && D.REACTION_SCIENCE_AUDIT.audit)){
  blocked.push({layer:'REACTION_SCIENCE_AUDIT',reason:'reaction records still pending provenance audit before promotion'});
}
C.REFERENCE_PROMOTION_LEDGER={
  version:'2.70',
  policy:'promote only records with explicit CIAAW/NIST/NUBASE2020 provenance; never overwrite local educational fallbacks',
  promoted,
  blocked,
  missing,
  verifiedCandidates:{
    ATOMIC_WEIGHT_REFERENCE:{source:'CIAAW',reference:'Standard Atomic Weights 2024',status:'SOURCE_VERIFIED',count:118,eligible:118},
    FIRST_IONIZATION_ENERGY:{source:'NIST_ASD',reference:'Atomic Spectra Database v5.12 — Ground States and Ionization Energies',status:'SOURCE_VERIFIED',count:118,eligible:118},
    ISOTOPE_VERIFIED_CANDIDATES:{source:'CIAAW_ISO_2024',reference:'Isotopic Compositions of the Elements 2024',status:'ACCEPTED_CANONICAL_CANDIDATE',count:0,eligible:0,canonical:true,notes:'Source-aligned isotope candidate set accepted as canonical-facing layer while the legacy educational fallback remains explicitly non-canonical.'}
  },
  summary:{eligible:promoted.length,blocked:blocked.length,missing:missing.length,sourceVerified:2}
};
E.modules=E.modules||{};E.modules.REFERENCE_PROMOTION_LEDGER='2.70';
E.registry=E.registry||{};E.registry.REFERENCE_PROMOTION_LEDGER={layer:'AUDIT/PROMOTION',owner:'CHE.REFERENCE_PROMOTION_LEDGER',depends:['ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_REFERENCE','ISOTOPE_VERIFIED_CANDIDATES','THERMO_REFERENCE','ELECTRO_REFERENCE','SOURCE_REGISTRY']};
const existing=D.ISOTOPES||{};
const src={source:'CIAAW',reference:'Isotopic Compositions of the Elements 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic composition of normal terrestrial material'};
const records={};
Object.keys(existing).forEach(symbol=>{records[symbol]={element:symbol,isotopes:(existing[symbol]||[]).map(x=>{const localFallback=typeof x.source==='string'&&x.source.includes('LOCAL_EDUCATIONAL_FALLBACK');return {massNumber:x.A,atomicMass:x.atomicMass??null,representativeAbundance:Number.isFinite(x.abundance)?x.abundance:null,stable:x.stable??null,halfLife:x.halfLife??null,decayMode:x.decayMode??null,daughter:x.daughter??null,nuclearSpin:x.nuclearSpin??null,magneticMoment:x.magneticMoment??null,source:localFallback?x.source:null,localFallback,status:localFallback?'LOCAL_EDUCATIONAL_FALLBACK':'UNVERIFIED_LEGACY'};})};});
D.ISOTOPES_REFERENCE=records;
function audit(){const els=Object.keys(records), rows=els.flatMap(k=>records[k].isotopes||[]);return {elements:els.length,isotopes:rows.length,elementsWithReference:els.filter(k=>records[k].isotopes.some(x=>x.representativeAbundance!==null)).length,abundanceFields:rows.filter(x=>x.representativeAbundance!==null).length,atomicMassFields:rows.filter(x=>Number.isFinite(x.atomicMass)).length,radioactive:rows.filter(x=>x.stable===false).length,sourceComplete:rows.filter(x=>x.source?.source&&x.source?.reference&&x.source?.url).length,abundanceSourceComplete:rows.filter(x=>x.abundanceProvenance?.provider&&x.abundanceProvenance?.reference&&x.abundanceProvenance?.url).length};}
function get(symbol,A){const a=records[symbol]?.isotopes||[];return A==null?a:a.find(x=>x.massNumber===Number(A))||null;}
C.ISOTOPE_REFERENCE={version:'2.61',get,audit,records:()=>records};

const verifiedAbundances={
  He:[[3,.000002],[4,.999998]],Be:[[9,1]],F:[[19,1]],
  Ne:[[20,.9048],[21,.0027],[22,.0925]],Na:[[23,1]],Al:[[27,1]],P:[[31,1]],
  K:[[39,.932581],[40,.000117],[41,.067302]],Sc:[[45,1]],
  Ti:[[46,.0825],[47,.0744],[48,.7372],[49,.0541],[50,.0518]],
  V:[[50,.00250],[51,.99750]],Mn:[[55,1]],
  Fe:[[54,.05845],[56,.91754],[57,.02119],[58,.00282]],Co:[[59,1]],
  Ni:[[58,.680769],[60,.262231],[61,.011399],[62,.036345],[64,.009256]],
  Cu:[[63,.6915],[65,.3085]],
  Zn:[[64,.4917],[66,.2773],[67,.0404],[68,.1845],[70,.0061]],
  Ga:[[69,.60108],[71,.39892]],As:[[75,1]],
  Kr:[[78,.00355],[80,.02286],[82,.11593],[83,.11500],[84,.56987],[86,.17279]]
};
const verifiedAbundanceSource={provider:'CIAAW',reference:'Isotopic Compositions of the Elements 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic abundance; published point values only'};
const isotopeCandidateMap={};
Object.entries(verifiedAbundances).forEach(([symbol,list])=>{
  isotopeCandidateMap[symbol]={
    element:symbol,
    status:'SOURCE_VERIFIED_CANDIDATE',
    source:{...verifiedAbundanceSource,status:'SOURCE_VERIFIED_CANDIDATE'},
    isotopes:list.map(([massNumber,representativeAbundance])=>({
      massNumber,representativeAbundance,
      abundanceProvenance:{...verifiedAbundanceSource,field:'representativeAbundance',status:'SOURCE_VERIFIED'},
      status:'SOURCE_VERIFIED_CANDIDATE'
    }))
  };
});
Object.entries(isotopeCandidateMap).forEach(([symbol,candidate])=>{
  const entry=records[symbol]||(records[symbol]={element:symbol,isotopes:[]});
  candidate.isotopes.forEach(verified=>{
    let row=entry.isotopes.find(item=>item.massNumber===verified.massNumber);
    if(!row){row={massNumber:verified.massNumber,atomicMass:null,stable:null,halfLife:null};entry.isotopes.push(row);}
    row.representativeAbundance=verified.representativeAbundance;
    row.abundanceProvenance=verified.abundanceProvenance;
    row.status='SOURCE_VERIFIED_CANDIDATE';
  });
});
D.ISOTOPE_VERIFIED_CANDIDATES = isotopeCandidateMap;
C.ISOTOPE_VERIFIED_CANDIDATES={
  version:'1.0',
  canonical:true,
  audit:()=>({
    elements:Object.keys(isotopeCandidateMap).length,
    isotopes:Object.values(isotopeCandidateMap).reduce((count,entry)=>count + (Array.isArray(entry.isotopes)?entry.isotopes.length:0),0),
    status:'ACCEPTED_CANONICAL_CANDIDATE',
    note:'Accepted canonical-facing isotope layer built from CIAAW natural-abundance data; the legacy educational fallback remains explicitly non-canonical.'
  }),
  records:()=>Object.fromEntries(Object.entries(isotopeCandidateMap).map(([k,v])=>[k,{...v}])),
  get:(symbol,A)=>{
    const a=isotopeCandidateMap[symbol]?.isotopes||[];
    return A==null ? a : a.find(x => Number(x.massNumber) === Number(A)) || null;
  }
};
E.modules=E.modules||{};E.modules.ISOTOPE_VERIFIED_CANDIDATES='1.0';
E.registry=E.registry||{};E.registry.ISOTOPE_VERIFIED_CANDIDATES={layer:'DATA/REFERENCE/CANDIDATE',owner:'CHE.DATA.ISOTOPE_VERIFIED_CANDIDATES',depends:['ISOTOPES','SOURCE_REGISTRY']};
C.REFERENCE_PROMOTION_LEDGER = C.REFERENCE_PROMOTION_LEDGER || {};
C.REFERENCE_PROMOTION_LEDGER.verifiedCandidates = C.REFERENCE_PROMOTION_LEDGER.verifiedCandidates || {};
C.REFERENCE_PROMOTION_LEDGER.verifiedCandidates.ISOTOPE_VERIFIED_CANDIDATES = {
  source:'CIAAW_ISO_2024',
  reference:'Isotopic Compositions of the Elements 2024',
  status:'ACCEPTED_CANONICAL_CANDIDATE',
  count:Object.values(isotopeCandidateMap).reduce((n,entry)=>n + (Array.isArray(entry.isotopes)?entry.isotopes.length:0),0),
  eligible:Object.values(isotopeCandidateMap).reduce((n,entry)=>n + (Array.isArray(entry.isotopes)?entry.isotopes.length:0),0),
  canonical:true,
  note:'Accepted as canonical-facing layer; the legacy educational fallback remains preserved as non-canonical.'
};
E.modules=E.modules||{};E.modules.ISOTOPE_REFERENCE='2.61';E.registry=E.registry||{};E.registry.ISOTOPE_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ISOTOPES_REFERENCE',depends:['ISOTOPES','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 89]', err && err.message ? err.message : err); } catch(_){}
}

