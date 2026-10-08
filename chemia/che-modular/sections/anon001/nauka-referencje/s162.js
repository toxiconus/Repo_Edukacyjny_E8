

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},S=C.SCIENCE=C.SCIENCE||{};
const SOURCE=D.SOURCE_REGISTRY||C.SOURCE_REGISTRY||{};
const get=(o,k)=>o&&o[k]!=null?o[k]:null;
const isNum=x=>typeof x==='number'&&Number.isFinite(x);
const families={
  atomicWeight:['ATOMIC_WEIGHT_REFERENCE','ATOMIC_WEIGHT_REFERENCE_V259','ATOMIC_PROVENANCE'],
  ionizationEnergy:['ATOMIC_PROPS','ATOMIC_PROVENANCE'],
  isotopes:['ISOTOPE_SCIENCE_CONTRACT','ISOTOPE_SCIENCE_AUDIT'],
  thermochemistry:['THERMO_VERIFIED_REFERENCE','THERMO_REFERENCE','REFERENCE_VERIFIED_V281'],
  equilibrium:['EQUILIBRIA_REFERENCE','EQUILIBRIA_VERIFIED_REFERENCE','REFERENCE_VERIFIED_V281'],
  electrochemistry:['ELECTRO_REFERENCE','ELECTRO_REFERENCE_CONTRACT_V281','ELECTRO_REFERENCE_CONTRACT'],
  pH:['SCIENCE_SMALL_BASES_V286'],
  reactions:['REACTIONS','REACTION_DATA','REACTION_AUDIT_V273']
};
const contextContract={
  required:['source','status','temperature','pressure','phase','medium','unit'],
  rule:'reference data must retain value meaning, conditions and provenance; missing fields remain missing',
  statuses:['REFERENCE_DEFINITION','REFERENCE_DATA','VERIFIED_REFERENCE','VERIFIED','COMPUTED','ESTIMATED','EDUCATIONAL_APPROXIMATION','USER_DEFINED','UNVERIFIED']
};
function sourceKnown(id){
  if(!id)return false;
  if(SOURCE&&typeof SOURCE==='object'&&(SOURCE[id]||SOURCE[String(id)]))return true;
  return ['NIST_WEBBOOK','NIST_WEBBOOK_WATER','IUPAC_GOLD_BOOK_PH','IUPAC_GOLD_BOOK','PUBCHEM','CIAAW_AW_2024','CIAAW_ISO_2024','NUBASE2020','NIST_ASD'].includes(id);
}
function classify(){
  const out={};
  for(const [family,deps] of Object.entries(families)){
    const present=deps.filter(k=>{
      if(k==='SCIENCE_SMALL_BASES_V286')return !!D.SCIENCE_SMALL_BASES_V286;
      return !!(D[k]||C[k]||S[k]);
    });
    out[family]={present,available:present.length>0};
  }
  return out;
}
function thermo(){
  const x=D.THERMO_VERIFIED_REFERENCE||D.THERMO_REFERENCE||{};
  const rows=Array.isArray(x)?x:Object.values(x);
  return rows.filter(r=>r&&((r.status||'').includes('VERIFIED')||(r.status||'').includes('REFERENCE'))).map(r=>({id:r.id||null,species:r.species||r.formula||null,phase:r.phase||null,T_K:r.T_K??r.temperature_K??null,P_bar:r.P_bar??r.pressure_bar??null,sourceId:r.sourceId||r.source||null,status:r.status||null}));
}
function equilibria(){
  const x=D.EQUILIBRIA_VERIFIED_REFERENCE||D.EQUILIBRIA_REFERENCE?.records||{};
  const rows=Array.isArray(x)?x:Object.values(x);
  return rows.filter(r=>r&&r.value!=null).map(r=>({id:r.id||null,type:r.type||null,species:r.species||null,value:r.value,unit:r.unit||null,temperatureK:r.temperatureK??r.T_K??null,phase:r.phase||null,medium:r.medium||null,sourceId:r.sourceId||r.source||null,status:r.status||null}));
}
function pH(){
  const x=D.SCIENCE_SMALL_BASES_V286?.pH;
  return x?{quantity:x.quantity,definition:x.definition,expression:x.expression,basis:x.basis,source:x.source,status:x.status}:null;
}
function readiness(rows){
  return rows.map(r=>{
    const missing=[];
    if(!r.sourceId&&!r.source)missing.push('source');
    if(!r.status)missing.push('status');
    if(r.temperatureK==null&&r.T_K==null)missing.push('temperature');
    if(!r.phase)missing.push('phase');
    if(!r.medium)missing.push('medium');
    if(!r.unit)missing.push('unit');
    return {...r,readiness:missing.length===0?'CONTEXT_COMPLETE':'CONTEXT_INCOMPLETE',missing};
  });
}
function audit(){
  const t=thermo(),q=equilibria(),ph=pH(),groups=classify();
  const rt=readiness(t),rq=readiness(q);
  return {
    version:'2.87',
    families:groups,
    counts:{thermochemistry:t.length,equilibrium:q.length,ph:ph?1:0},
    contextComplete:{thermochemistry:rt.filter(x=>x.readiness==='CONTEXT_COMPLETE').length,equilibrium:rq.filter(x=>x.readiness==='CONTEXT_COMPLETE').length},
    pHDefinitionReference:!!(ph&&ph.status==='REFERENCE_DEFINITION'&&sourceKnown(ph.source)),
    sourceRegistryPresent:Object.keys(SOURCE||{}).length>0,
    scientificGate:false,
    policy:'read-only aggregation of existing source-backed layers; no duplicated scientific database; no inferred values'
  };
}
function regression(){
  const a=audit();
  return [
    {id:'SCI87-001',name:'single reference core exists',ok:!!S.REFERENCE_CORE_V287},
    {id:'SCI87-002',name:'source registry present',ok:a.sourceRegistryPresent},
    {id:'SCI87-003',name:'pH reference definition retained',ok:a.pHDefinitionReference},
    {id:'SCI87-004',name:'verified thermochemistry retained',ok:a.counts.thermochemistry>=3},
    {id:'SCI87-005',name:'verified equilibrium data retained',ok:a.counts.equilibrium>=3},
    {id:'SCI87-006',name:'scientific gate remains explicit',ok:a.scientificGate===false}
  ];
}
S.REFERENCE_CORE_V287={version:'2.87',contextContract,families,sourceKnown,classify,thermochemistry:thermo,equilibria,equilibriaReadiness:()=>readiness(equilibria()),pH, audit,regression};
D.SCIENCE_REFERENCE_CORE_V287={version:'2.87',contextContract,families,audit:audit()};
E.modules=E.modules||{};E.modules.SCIENCE_REFERENCE_CORE_V287='2.87';
E.registry=E.registry||{};E.registry.SCIENCE_REFERENCE_CORE_V287={layer:'SCIENCE/REFERENCE/CORE',owner:'CHE.SCIENCE.REFERENCE_CORE_V287',depends:['SOURCE_REGISTRY','THERMO_VERIFIED_REFERENCE','EQUILIBRIA_REFERENCE','SCIENCE_SMALL_BASES_V286','ISOTOPE_SCIENCE_CONTRACT','ELECTRO_REFERENCE']};
C.version='2.87';C.dataVersion='2.87';C.contractVersion='2.87';C.schemaVersion='2.87';
E.version='2.87';E.dataVersion='2.87';E.contractVersion='2.87';E.schemaVersion='2.87';
if(E.PUBLIC)E.PUBLIC.version='2.87';if(E.RUNTIME)E.RUNTIME.version='2.87';
})(window);

} catch (err) {
  try { console.warn('[CHE module 162]', err && err.message ? err.message : err); } catch(_){}
}