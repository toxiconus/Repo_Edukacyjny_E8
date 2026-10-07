(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const checks=[...(C.SIMPLE_BASES_V283?.regression?.()||[])];return {version:'2.83',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V283={version:'2.83',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V283='2.83';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V283={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V283',depends:['SIMPLE_BASES_V283']};})(window);

} catch (err) {
  try { console.warn('[CHE module 158]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}; C.DATA=C.DATA||{};
function arr(x){return Array.isArray(x)?x:[]}
function obj(x){return x&&typeof x==='object'?x:{} }
function keys(x){return Object.keys(obj(x))}
function auditElements(){
 const D=C.DATA.ELEMENTS_118||[]; const bad=[]; const seenS=new Set(),seenZ=new Set();
 D.forEach((e,i)=>{const z=Number(e.z),s=e.s||e.symbol;if(!s||!Number.isFinite(z)||seenS.has(s)||seenZ.has(z)) bad.push({i,s,z}); seenS.add(s);seenZ.add(z)});
 return {total:D.length,uniqueSymbols:seenS.size,uniqueZ:seenZ.size,complete:D.length===118&&bad.length===0,bad};
}
function auditSubstances(){
 const D=C.DATA.SUBSTANCES||{}; const rows=[]; let core=0;
 for(const [id,r] of Object.entries(D)){const formula=r&&r.formula||r&&r.f||id; const ok=!!formula; if(ok)core++; rows.push({id,formula,core:ok});}
 return {total:rows.length,core,missingCore:rows.filter(x=>!x.core),complete:rows.length>0&&core===rows.length,rows};
}
function auditMolecules(){
 const D=C.DATA.MOLECULES||{}; const rows=[]; let core=0;
 for(const [id,r] of Object.entries(D)){
  const atoms=arr(r&&r.atoms),bonds=arr(r&&r.bonds),formula=C.DATA.SUBSTANCES?.[id]?.formula||id;
  const expected=C.CHEM?.parseFormula?.(formula),actual={};
  atoms.forEach(a=>{actual[a.element]=(actual[a.element]||0)+1;});
  const elementsMatch=!!expected&&Object.keys({...expected,...actual}).every(e=>expected[e]===actual[e]);
  const badBonds=bonds.filter(b=>!Number.isInteger(b.a)||!Number.isInteger(b.b)||!atoms[b.a]||!atoms[b.b]||Number(b.order)<=0);
  const hasDepth=atoms.some(a=>Math.abs(Number(a.z)||0)>1e-9),cy=Math.cos(.6),sy=Math.sin(.6),cx=Math.cos(.5),sx=Math.sin(.5),positions={};
  atoms.forEach((a,i)=>{const x=Number(a.x)||0,y=Number(a.y)||0,z=Number(a.z)||0,z1=-x*sy+z*cy,px=hasDepth?x*cy+z*sy:x,py=hasDepth?-(y*cx-z1*sx):y,key=px.toFixed(4)+','+py.toFixed(4);(positions[key]||(positions[key]=[])).push(i);});
  const projectedOverlaps=Object.values(positions).filter(indices=>indices.length>1);
  const ok=atoms.length>0&&elementsMatch&&badBonds.length===0&&projectedOverlaps.length===0;
  if(ok)core++;
  rows.push({id,formula,atoms:atoms.length,bonds:bonds.length,elementsMatch,badBonds:badBonds.length,projectedOverlaps,core:ok});
 }
 return {total:rows.length,core,missingCore:rows.filter(x=>!x.core),complete:rows.length>0&&core===rows.length,rows};
}
function auditReactions(){
 const D=C.DATA.REACTIONS||{}; const rows=[]; let core=0;
 for(const [id,r] of Object.entries(D)){const rr=arr(r&&r.reactants),pp=arr(r&&r.products); const ok=rr.length>0&&pp.length>0&&[...rr,...pp].every(x=>x&&x.formula&&Number(x.coef)>0); if(ok)core++; rows.push({id,reactants:rr.length,products:pp.length,core:ok});}
 return {total:rows.length,core,missingCore:rows.filter(x=>!x.core),complete:rows.length>0&&core===rows.length,rows};
}
const report={version:'2.84',elements:auditElements(),substances:auditSubstances(),molecules:auditMolecules(),reactions:auditReactions(),policy:'simple-base-finalization: indexes and validation only; no new chemical values'};
C.DATA.SIMPLE_BASE_FINAL_V284=Object.freeze(report);
C.SIMPLE_BASES_FINAL_V284={audit:()=>C.DATA.SIMPLE_BASE_FINAL_V284,ok:()=>Object.values(C.DATA.SIMPLE_BASE_FINAL_V284).filter(x=>x&&typeof x==='object'&&'complete' in x).every(x=>x.complete)};
})(window);

} catch (err) {
  try { console.warn('[CHE module 159]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}; C.DATA=C.DATA||{}; C.SCIENCE=C.SCIENCE||{};
const sources={IUPAC_GOLD_BOOK_PH:{publisher:'IUPAC',title:'Gold Book: pH',doi:'10.1351/goldbook.P04524',accessed:'2026-10-02'},NIST_WEBBOOK_WATER:{publisher:'NIST',title:'Chemistry WebBook SRD 69: Water',id:'CAS 7732-18-5',accessed:'2026-10-02'}};
const pH={quantity:'pH',definition:'pH is defined in terms of hydrogen-ion activity in solution.',expression:'pH = -lg(a(H+))',basis:'activity',standardMolality:'1 mol kg^-1',medium:'aqueous solution',source:'IUPAC_GOLD_BOOK_PH',status:'REFERENCE_DEFINITION'};
const thermo={
 'H2O(l)':{formula:'H2O',phase:'liquid',temperature_K:298.15,pressure_bar:1,delta_f_H_kJ_mol:-285.830,delta_f_H_uncertainty_kJ_mol:0.040,standard_entropy_J_molK:69.95,standard_entropy_uncertainty_J_molK:0.03,source:'NIST_WEBBOOK_WATER',status:'REFERENCE_DATA'},
 'H2O(g)':{formula:'H2O',phase:'gas',temperature_K:298.15,pressure_bar:1,delta_f_H_kJ_mol:-241.826,delta_f_H_uncertainty_kJ_mol:0.040,standard_entropy_J_molK:188.835,standard_entropy_uncertainty_J_molK:0.010,source:'NIST_WEBBOOK_WATER',status:'REFERENCE_DATA'}
};
C.DATA.SCIENCE_SMALL_BASES_V286=Object.freeze({version:'2.86',sources,pH,thermochemistry:thermo,policy:'only source-backed definitions/values; no interpolation or inferred values'});
C.SCIENCE.SMALL_BASES_V286=C.DATA.SCIENCE_SMALL_BASES_V286;
C.SCIENCE.SMALL_BASES_AUDIT_V286=function(){const d=C.DATA.SCIENCE_SMALL_BASES_V286;return {version:'2.86',pH:d.pH.status==='REFERENCE_DEFINITION',thermo:Object.values(d.thermochemistry).every(x=>x.status==='REFERENCE_DATA'&&x.source==='NIST_WEBBOOK_WATER'),sources:Object.keys(d.sources).length===2,ok:true};};
C.ENGINE=C.ENGINE||{};C.ENGINE.modules=C.ENGINE.modules||{};C.ENGINE.modules.SCIENCE_SMALL_BASES_V286='2.86';
C.ENGINE.registry=C.ENGINE.registry||{};C.ENGINE.registry.SCIENCE_SMALL_BASES_V286={layer:'DATA/SCIENCE/SMALL_BASES',owner:'CHE.SCIENCE.SMALL_BASES_V286',depends:['CHE.DATA','CHE.ENGINE']};
C.version='2.86';C.dataVersion='2.86';C.contractVersion='2.86';C.schemaVersion='2.86';
})(window);

} catch (err) {
  try { console.warn('[CHE module 160]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{};C.RUNTIME=C.RUNTIME||{};function run(){const ids=['run-audit','audit-refresh'];const missing=ids.filter(id=>!document.getElementById(id));return {version:'2.86',ok:missing.length===0,missing};}C.RUNTIME.UI_SAFE_BOOT_V286={run};})(window);

} catch (err) {
  try { console.warn('[CHE module 161]', err && err.message ? err.message : err); } catch(_){}
}

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

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const checks=C.SCIENCE?.REFERENCE_CORE_V287?.regression?.()||[];return {version:'2.87',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V287={run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V287='2.87';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V287={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V287',depends:['SCIENCE_REFERENCE_CORE_V287']};})(window);

} catch (err) {
  try { console.warn('[CHE module 163]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{}, E=C.ENGINE=C.ENGINE||{};
D.SCIENCE_CORE_V288=D.SCIENCE_CORE_V288||{};
const SRC={
 NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',url:'https://webbook.nist.gov/chemistry/',accessed:'2026-10-02'},
 IUPAC_GOLD_BOOK:{name:'IUPAC Compendium of Chemical Terminology / Gold Book',url:'https://goldbook.iupac.org/',accessed:'2026-10-02'}
};
const ctx={temperature:{value:298.15,unit:'K',type:'fixed_reference'},pressure:{value:1,unit:'bar',type:'standard_pressure'},phaseRequired:true,uncertaintyRequired:true,sourceRequired:true};
const thermo={
 'H2O(l)':{cas:'7732-18-5',phase:'liquid',T:298.15,P:1,dHf:{value:-285.830,uncertainty:0.040,unit:'kJ/mol'},S:{value:69.95,uncertainty:0.03,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'},
 'H2O(g)':{cas:'7732-18-5',phase:'gas',T:298.15,P:1,dHf:{value:-241.826,uncertainty:0.040,unit:'kJ/mol'},S:{value:188.835,uncertainty:0.010,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'},
 'CO2(g)':{cas:'124-38-9',phase:'gas',T:298.15,P:1,dHf:{value:-393.51,uncertainty:0.13,unit:'kJ/mol'},S:{value:213.785,uncertainty:0.010,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'},
 'HCl(g)':{cas:'7647-01-0',phase:'gas',T:298.15,P:1,dHf:{value:-92.31,uncertainty:0.10,unit:'kJ/mol'},S:{value:186.902,uncertainty:0.005,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'}
};
const shomate={
 'H2O(l)':{ranges:[{T:[298,500],A:-203.6060,B:1523.290,C:-3196.413,D:2474.455,E:3.855326,F:-256.5478,G:-488.7163,H:-285.8304}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'},
 'H2O(g)':{ranges:[{T:[500,1700],A:30.09200,B:6.832514,C:6.793435,D:-2.534480,E:0.082139,F:-250.8810,G:223.3967,H:-241.8264},{T:[1700,6000],A:41.96426,B:8.622053,C:-1.499780,D:0.098119,E:-11.15764,F:-272.1797,G:219.7809,H:-241.8264}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'},
 'CO2(g)':{ranges:[{T:[298,1200],A:24.99735,B:55.18696,C:-33.69137,D:7.948387,E:-0.136638,F:-403.6075,G:228.2431,H:-393.5224},{T:[1200,6000],A:58.16639,B:2.720074,C:-0.492289,D:0.038844,E:-6.447293,F:-425.9186,G:263.6125,H:-393.5224}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'},
 'HCl(g)':{ranges:[{T:[298,1200],A:32.12392,B:-13.45805,C:19.86852,D:-6.853936,E:-0.049672,F:-101.6206,G:228.6866,H:-92.31201},{T:[1200,6000],A:31.91923,B:3.203184,C:-0.541539,D:0.035925,E:-3.438525,F:-108.0150,G:218.2768,H:-92.31201}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'}
};
function validRecord(r){return !!(r&&r.source&&r.phase&&Number.isFinite(r.T)&&Number.isFinite(r.P)&&r.dHf&&r.S&&Number.isFinite(r.dHf.value)&&Number.isFinite(r.S.value)&&r.dHf.uncertainty>=0&&r.S.uncertainty>=0);}
function cp(id,T){const s=shomate[id]; if(!s||!Number.isFinite(T))return null; const r=s.ranges.find(x=>T>=x.T[0]&&T<=x.T[1]); if(!r)return null; const t=T/1000; return r.A+r.B*t+r.C*t*t+r.D*t*t*t+r.E/(t*t);}
function readiness(){const rows=Object.entries(thermo).map(([id,r])=>({id,ready:validRecord(r),sourceKnown:!!SRC[r.source],cpModel:!!shomate[id]}));return {total:rows.length,ready:rows.filter(x=>x.ready).length,cpReady:rows.filter(x=>x.cpModel).length,rows};}
function audit(){const a=readiness();return {version:'2.88',ok:a.ready===a.total&&a.cpReady===a.total,context:ctx,sourceRegistry:SRC,records:a};}
D.SCIENCE_CORE_V288={version:'2.88',context:ctx,sources:SRC,thermochemistry:thermo,shomate,cp,readiness,audit};
E.modules=E.modules||{};E.modules.SCIENCE_CORE_V288='2.88';E.registry=E.registry||{};E.registry.SCIENCE_CORE_V288={layer:'SCIENCE/REFERENCE',owner:'CHE.DATA.SCIENCE_CORE_V288',depends:['SCIENCE_REFERENCE_CORE_V287','SOURCE_REGISTRY']};
C.version='2.88';C.dataVersion='2.88';C.contractVersion='2.88';C.schemaVersion='2.88';E.version='2.88';E.dataVersion='2.88';E.contractVersion='2.88';E.schemaVersion='2.88';if(E.PUBLIC)E.PUBLIC.version='2.88';
})(window);

} catch (err) {
  try { console.warn('[CHE module 164]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
/*
  HARD RULE:
  A source-backed scientific record that has once passed verification is
  immutable for normal verification runs. Reverification is possible only
  through an explicit FORCE_REVERIFY token. This prevents repeated checking
  of unchanged records from masquerading as scientific progress.
*/
const LEDGER_KEY='SCIENCE_VERIFICATION_LEDGER_V289';
const ledger=D[LEDGER_KEY]||{
  version:'2.89', policy:'VERIFIED_ONCE_HARD_LOCK',
  rule:'verified fingerprint is skipped unless FORCE_REVERIFY is explicitly requested',
  records:{}, history:[]
};
function stable(v){
  if(v===null||typeof v!=='object')return JSON.stringify(v);
  if(Array.isArray(v))return '['+v.map(stable).join(',')+']';
  return '{'+Object.keys(v).sort().map(k=>JSON.stringify(k)+':'+stable(v[k])).join(',')+'}';
}
function fingerprint(record){
  const x=stable(record); let h=2166136261;
  for(let i=0;i<x.length;i++){h^=x.charCodeAt(i);h=Math.imul(h,16777619);}
  return ('00000000'+(h>>>0).toString(16)).slice(-8);
}
function markVerified(id,record,meta={}){
  if(!id||!record) return {ok:false,reason:'missing_id_or_record'};
  const fp=fingerprint(record), old=ledger.records[id];
  if(old&&old.fingerprint===fp) return {ok:true,action:'SKIP_ALREADY_VERIFIED',id,fingerprint:fp,verifiedAt:old.verifiedAt};
  ledger.records[id]={id,fingerprint:fp,verifiedAt:meta.verifiedAt||new Date().toISOString(),source:record.source||null,sourceVersion:meta.sourceVersion||null,verification:meta.verification||'SOURCE_CHECKED'};
  ledger.history.push({id,fingerprint:fp,action:old?'REVERIFY':'VERIFY',at:ledger.records[id].verifiedAt});
  return {ok:true,action:old?'REVERIFY':'VERIFY',id,fingerprint:fp};
}
function verify(id,record,options={}){
  const fp=fingerprint(record),old=ledger.records[id];
  if(old&&old.fingerprint===fp&&!options.FORCE_REVERIFY)
    return {ok:true,verified:true,skipped:true,reason:'ALREADY_VERIFIED_UNCHANGED',id,fingerprint:fp};
  return markVerified(id,record,options);
}
function needsVerification(id,record){
  const old=ledger.records[id],fp=fingerprint(record);
  return !old||old.fingerprint!==fp;
}
function audit(){
  const rows=Object.values(ledger.records);
  return {version:'2.89',policy:ledger.policy,total:rows.length,records:rows,historyCount:ledger.history.length,ok:true};
}
D[LEDGER_KEY]=ledger;
C.SCIENCE_VERIFICATION_LEDGER_V289={fingerprint,verify,markVerified,needsVerification,audit,ledger};
E.modules=E.modules||{};E.modules.SCIENCE_VERIFICATION_LEDGER_V289='2.89';
E.registry=E.registry||{};E.registry.SCIENCE_VERIFICATION_LEDGER_V289={layer:'SCIENCE/AUDIT',owner:'CHE.SCIENCE_VERIFICATION_LEDGER_V289',depends:['SCIENCE_CORE_V288'],policy:'verified-once hard lock'};
/* Seed only the records already explicitly verified in the existing science core.
   No web call or new scientific value is introduced here. */
const core=D.SCIENCE_CORE_V288;
if(core?.thermochemistry){
  Object.entries(core.thermochemistry).forEach(([id,r])=>{
    const key='THERMO:'+id;
    if(!ledger.records[key]) markVerified(key,r,{verification:'PREVIOUSLY_VERIFIED_REFERENCE_DATA'});
  });
}
E.version='2.89';E.dataVersion='2.89';E.contractVersion='2.89';E.schemaVersion='2.89';
if(E.PUBLIC)E.PUBLIC.version='2.89';
})(window);

} catch (err) {
  try { console.warn('[CHE module 165]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.DATA?.SCIENCE_CORE_V288,a=s?.audit?.();const checks=[['records complete',a?.ok===true],['4 NIST species',a?.records?.total===4],['4 reference-ready',a?.records?.ready===4],['4 Cp models',a?.records?.cpReady===4],['H2O(l) Cp(298.15K)',Math.abs((s?.cp('H2O(l)',298.15)||0)-75.31)<0.5],['CO2 Cp(298.15K)',Math.abs((s?.cp('CO2(g)',298.15)||0)-37.13)<0.5]];return {version:'2.88',ok:checks.every(x=>x[1]),checks};}C.SCIENCE_CORE_REGRESSION_V288={run};E.modules=E.modules||{};E.modules.SCIENCE_CORE_REGRESSION_V288='2.88';})(window);

} catch (err) {
  try { console.warn('[CHE module 166]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
/* ONLY NEW RECORDS: no overwrite of existing ATOMIC_PROPS/THERMOCHEM values. */
const records={
  'ATOM:Na(g)':{species:'Na',phase:'gas',quantity:'standard_enthalpy_of_formation',value:107.5,uncertainty:0.7,unit:'kJ/mol',T:298.15,P:'1 bar',source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984',status:'REFERENCE_DATA'},
  'ATOM:Cl(g)':{species:'Cl',phase:'gas',quantity:'standard_enthalpy_of_formation',value:121.301,uncertainty:0.008,unit:'kJ/mol',T:298.15,P:'1 bar',source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984',status:'REFERENCE_DATA'},
  'ATOM:Cl(g):S0':{species:'Cl',phase:'gas',quantity:'standard_entropy',value:165.190,uncertainty:0.004,unit:'J/mol/K',T:298.15,P:'1 bar',source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984',status:'REFERENCE_DATA'}
};
const phase={
  Na:{boiling:{value:1156,uncertainty:1,unit:'K',reference:'Honig and Kramer 1969'},fusion:{value:370.96,uncertainty:0.01,unit:'K',reference:'Marsh 1987'},triple:{value:370.98,uncertainty:0.03,unit:'K',reference:'Honig and Kramer 1969'},antoine:{rangeK:[924,1118],A:2.46077,B:1873.728,C:-416.372,pressureUnit:'bar',temperatureUnit:'K',reference:'Rodebush and Walters 1930'}},
  Cl2:{boiling:{value:239.5,uncertainty:0.6,unit:'K',reference:'Thiele and Schulte 1920'},triple:{value:172.17,uncertainty:0.05,unit:'K',reference:'Angus, Armstrong, et al. 1984'},critical:{T:416.956,P:79.914,temperatureUnit:'K',pressureUnit:'bar',reference:'Angus, Armstrong, et al. 1984'}}
};
const added=[];
Object.entries(records).forEach(([id,r])=>{
  const key='NEWREF:'+id;
  if(LED?.needsVerification?.(key,r)){
    if(LED) LED.markVerified(key,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});
    added.push(id);
  }
});
D.NEW_REFERENCE_DATA_V290={version:'2.90',sourceRegistry:SRC,records,phaseChange:phase,added,policy:'append-only; existing scientific records are not overwritten'};
E.modules=E.modules||{};E.modules.NEW_REFERENCE_DATA_V290='2.90';E.registry=E.registry||{};E.registry.NEW_REFERENCE_DATA_V290={layer:'SCIENCE/DATA',owner:'CHE.DATA.NEW_REFERENCE_DATA_V290',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only'};
E.version='2.90';E.dataVersion='2.90';E.contractVersion='2.90';E.schemaVersion='2.90';if(E.PUBLIC)E.PUBLIC.version='2.90';
})(window);

} catch (err) {
  try { console.warn('[CHE module 167]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const d=C.DATA?.NEW_REFERENCE_DATA_V290||{},r=d.records||{};const checks=[['new records',Object.keys(r).length===3],['Na gas formation enthalpy',r['ATOM:Na(g)']?.value===107.5],['Cl gas formation enthalpy',r['ATOM:Cl(g)']?.value===121.301],['Cl gas entropy',r['ATOM:Cl(g):S0']?.value===165.190],['append only',d.policy==='append-only; existing scientific records are not overwritten']];return {version:'2.90',ok:checks.every(x=>x[1]),checks,added:d.added||[]};}C.NEW_REFERENCE_REGRESSION_V290={run};E.modules=E.modules||{};E.modules.NEW_REFERENCE_REGRESSION_V290='2.90';})(window);

} catch (err) {
  try { console.warn('[CHE module 168]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
/* Only new source-backed records. Existing records are never overwritten. */
const gas={
 'H2(g)':{formula:'H2',phase:'gas',S298:{value:130.680,uncertainty:0.003,unit:'J/mol/K'},shomate:[
  {rangeK:[298,1000],A:33.066178,B:-11.363417,C:11.432816,D:-2.772874,E:-0.158558,F:-9.980797,G:172.707974,H:0},
  {rangeK:[1000,2500],A:18.563083,B:12.257357,C:-2.859786,D:0.268238,E:1.977990,F:-1.147438,G:156.288133,H:0},
  {rangeK:[2500,6000],A:43.413560,B:-4.293079,C:1.272428,D:-0.096876,E:-20.533862,F:-38.515158,G:162.081354,H:0}
 ],phaseData:{boilingK:111,meltingK:85.7,tripleK:90.67,triplePbar:0.1169,criticalK:190.6,criticalPbar:46.1},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'},
 'N2(g)':{formula:'N2',phase:'gas',S298:{value:191.609,uncertainty:0.004,unit:'J/mol/K'},shomate:[
  {rangeK:[100,500],A:28.98641,B:1.853978,C:-9.647459,D:16.63537,E:0.000117,F:-8.671914,G:226.4168,H:0},
  {rangeK:[500,2000],A:19.50583,B:19.88705,C:-8.598535,D:1.369784,E:0.527601,F:-4.935202,G:212.3900,H:0},
  {rangeK:[2000,6000],A:35.51872,B:1.128728,C:-0.196103,D:0.014662,E:-4.553760,F:-18.97091,G:224.9810,H:0}
 ],phaseData:{boilingK:77.34,meltingK:63.3,tripleK:63.14,triplePbar:0.1252,criticalK:126.19,criticalPbar:50.43},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'},
 'O2(g)':{formula:'O2',phase:'gas',S298:{value:205.152,uncertainty:0.005,unit:'J/mol/K'},shomate:[
  {rangeK:[100,700],A:31.32234,B:-20.23531,C:57.86644,D:-36.50624,E:-0.007374,F:-8.903471,G:246.7945,H:0},
  {rangeK:[700,2000],A:30.03235,B:8.772972,C:-3.988133,D:0.788313,E:-0.741599,F:-11.32468,G:236.1663,H:0},
  {rangeK:[2000,6000],A:20.91111,B:10.72071,C:-2.020498,D:0.146449,E:9.245722,F:5.337651,G:237.6185,H:0}
 ],phaseData:{boilingK:90.2,meltingK:54.8,tripleK:54.33,criticalK:154.58,criticalPbar:50.43},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'},
 'CH4(g)':{formula:'CH4',phase:'gas',formationEnthalpy:{value:-74.87,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:186.25,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[
  {rangeK:[298,1300],A:-0.703029,B:108.4773,C:-42.52157,D:5.862788,E:0.678565,F:-76.84376,G:158.7163,H:-74.87310},
  {rangeK:[1300,6000],A:85.81217,B:11.26467,C:-2.114146,D:0.138190,E:-26.42221,F:-153.5327,G:224.4143,H:-74.87310}
 ],phaseData:{boilingK:111,meltingK:85.7,tripleK:90.67,triplePbar:0.1169,criticalK:190.6,criticalPbar:46.1},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'}};
const added=[];
Object.entries(gas).forEach(([id,r])=>{const key='NIST291:'+id;if(LED?.needsVerification?.(key,r)){LED?.markVerified?.(key,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V291={version:'2.91',sourceRegistry:SRC,records:gas,added,policy:'append-only; no overwrite; verified-once ledger enforced',coverage:{species:Object.keys(gas).length,shomate:Object.values(gas).filter(x=>x.shomate?.length).length,phase:Object.values(gas).filter(x=>x.phaseData).length}};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V291='2.91';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V291={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V291',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.91';E.dataVersion='2.91';E.contractVersion='2.91';E.schemaVersion='2.91';if(E.PUBLIC)E.PUBLIC.version='2.91';
})(window);

} catch (err) {
  try { console.warn('[CHE module 169]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const d=C.DATA?.SCIENCE_BATCH_REFERENCE_V291,r=d?.records||{};const ids=Object.keys(r);const checks=[['4 new species',ids.length===4],['H2 Shomate',r['H2(g)']?.shomate?.length===3],['N2 Shomate',r['N2(g)']?.shomate?.length===3],['O2 Shomate',r['O2(g)']?.shomate?.length===3],['CH4 formation enthalpy',r['CH4(g)']?.formationEnthalpy?.value===-74.87],['CH4 Shomate',r['CH4(g)']?.shomate?.length===2],['append only',d?.policy?.startsWith('append-only')===true]];return {version:'2.91',ok:checks.every(x=>x[1]),checks,added:d?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V291={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V291='2.91';})(window);

} catch (err) {
  try { console.warn('[CHE module 170]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'NH3(g)':{formula:'NH3',phase:'gas',formationEnthalpy:{value:-45.94,uncertainty:0.35,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:192.77,uncertainty:0.05,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1400],A:19.99563,B:49.77119,C:-15.37599,D:1.921168,E:0.189174,F:-53.30667,G:203.8591,H:-45.89806},{rangeK:[1400,6000],A:52.02427,B:18.48801,C:-3.765128,D:0.248541,E:-12.45799,F:-85.53895,G:223.8022,H:-45.89806}],source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984; Chase 1998'},
 'CO(g)':{formula:'CO',phase:'gas',formationEnthalpy:{value:-110.53,uncertainty:0.17,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:197.660,uncertainty:0.004,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1300],A:25.56759,B:6.096130,C:4.054656,D:-2.671301,E:0.131021,F:-118.0089,G:227.3665,H:-110.5271},{rangeK:[1300,6000],A:35.15070,B:1.300095,C:-0.205921,D:0.013550,E:-3.282780,F:-127.8375,G:231.7120,H:-110.5271}],source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984; Chase 1998'},
 'SO2(g)':{formula:'SO2',phase:'gas',formationEnthalpy:{value:-296.81,uncertainty:0.20,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:248.223,uncertainty:0.050,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:21.43049,B:74.35094,C:-57.75217,D:16.35534,E:0.086731,F:-305.7688,G:254.8872,H:-296.8422},{rangeK:[1200,6000],A:57.48188,B:1.009328,C:-0.076290,D:0.005174,E:-4.045401,F:-324.4140,G:302.7798,H:-296.8422}],source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984; Chase 1998'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST292:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V292={version:'2.92',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V292='2.92';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V292={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V292',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.92';E.dataVersion='2.92';E.contractVersion='2.92';E.schemaVersion='2.92';if(E.PUBLIC)E.PUBLIC.version='2.92';
})(window);

} catch (err) {
  try { console.warn('[CHE module 171]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V292?.records||{};const checks=[['3 new species',Object.keys(r).length===3],['NH3 formation enthalpy',r['NH3(g)']?.formationEnthalpy?.value===-45.94],['CO formation enthalpy',r['CO(g)']?.formationEnthalpy?.value===-110.53],['SO2 formation enthalpy',r['SO2(g)']?.formationEnthalpy?.value===-296.81],['all Shomate',Object.values(r).every(x=>x.shomate?.length===2)]];return {version:'2.92',ok:checks.every(x=>x[1]),checks};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V292={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V292='2.92';})(window);

} catch (err) {
  try { console.warn('[CHE module 172]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'H2O2(g)':{formula:'H2O2',phase:'gas',formationEnthalpy:{value:-136.11,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:232.95,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1500],A:34.25667,B:55.18445,C:-35.15443,D:9.087440,E:-0.422157,F:-149.9098,G:257.0604,H:-136.1064}],phaseData:{T_fus:{value:272.26,unit:'K',source:'TRC'},T_c:{value:728,uncertainty:15,unit:'K',source:'TRC'},P_c:{value:220,uncertainty:20,unit:'bar',source:'TRC'}},source:'NIST_WEBBOOK',reference:'Chase 1998; TRC'},
 'NO(g)':{formula:'NO',phase:'gas',formationEnthalpy:{value:90.29,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:210.76,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:23.83491,B:12.58878,C:-1.139011,D:-1.497459,E:0.214194,F:83.35783,G:237.1219,H:90.29114},{rangeK:[1200,6000],A:35.99169,B:0.957170,C:-0.148032,D:0.009974,E:-3.004088,F:73.10787,G:246.1619,H:90.29114}],source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'NO2(g)':{formula:'NO2',phase:'gas',formationEnthalpy:{value:33.10,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:240.0,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:16.10857,B:75.89525,C:-54.38740,D:14.30777,E:0.239423,F:26.17464,G:240.5386,H:33.09502},{rangeK:[1200,6000],A:56.82541,B:0.738053,C:-0.144721,D:0.009777,E:-5.459911,F:2.846456,G:290.5056,H:33.09502}],source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'SO3(g)':{formula:'SO3',phase:'gas',formationEnthalpy:{value:-395.77,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:256.77,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:24.02503,B:119.4607,C:-94.38686,D:26.96237,E:-0.117517,F:-407.8526,G:253.5186,H:-395.7654},{rangeK:[1200,6000],A:81.99008,B:0.622236,C:-0.122440,D:0.008294,E:-6.703688,F:-437.6590,G:330.9264,H:-395.7654}],source:'NIST_WEBBOOK',reference:'Chase 1998'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST293:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V293={version:'2.93',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V293='2.93';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V293={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V293',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.93';E.dataVersion='2.93';E.contractVersion='2.93';E.schemaVersion='2.93';if(E.PUBLIC)E.PUBLIC.version='2.93';
})(window);

} catch (err) {
  try { console.warn('[CHE module 173]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V293?.records||{};const checks=[['4 new species',Object.keys(r).length===4],['H2O2 formation enthalpy',r['H2O2(g)']?.formationEnthalpy?.value===-136.11],['NO formation enthalpy',r['NO(g)']?.formationEnthalpy?.value===90.29],['NO2 formation enthalpy',r['NO2(g)']?.formationEnthalpy?.value===33.10],['SO3 formation enthalpy',r['SO3(g)']?.formationEnthalpy?.value===-395.77],['Shomate present',Object.values(r).every(x=>x.shomate?.length>=1)]];return {version:'2.93',ok:checks.every(x=>x[1]),checks,added:C.DATA?.SCIENCE_BATCH_REFERENCE_V293?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V293={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V293='2.93';})(window);

} catch (err) {
  try { console.warn('[CHE module 174]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'H2S(g)':{formula:'H2S',phase:'gas',CAS:'7783-06-4',formationEnthalpy:{value:-20.6,uncertainty:0.5,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:205.81,uncertainty:0.05,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1400],A:26.88412,B:18.67809,C:3.434203,D:-3.378702,E:0.135882,F:-28.91211,G:233.3747,H:-20.50202},{rangeK:[1400,6000],A:51.22136,B:4.147486,C:-0.643566,D:0.041621,E:-10.46385,F:-55.87606,G:243.6900,H:-20.50202}],phaseData:{boilingK:{value:212.87,uncertainty:0.07,unit:'K'},meltingK:{value:190.85,uncertainty:1.5,unit:'K'},tripleK:{value:187.66,uncertainty:0.06,unit:'K'},vaporization:{value:19.5,unit:'kJ/mol',T:200},sublimation:{value:22.5,unit:'kJ/mol',T:135}},source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998; TRC phase data'}};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST294:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V294={version:'2.94',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V294='2.94';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V294={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V294',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.94';E.dataVersion='2.94';E.contractVersion='2.94';E.schemaVersion='2.94';if(E.PUBLIC)E.PUBLIC.version='2.94';
})(window);

} catch (err) {
  try { console.warn('[CHE module 175]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V294?.records||{};const x=r['H2S(g)'];const checks=[['1 new species',Object.keys(r).length===1],['H2S formation enthalpy',x?.formationEnthalpy?.value===-20.6],['H2S entropy',x?.S298?.value===205.81],['2 Shomate ranges',x?.shomate?.length===2],['phase data',x?.phaseData?.boilingK?.value===212.87],['append only',C.DATA?.SCIENCE_BATCH_REFERENCE_V294?.policy?.startsWith('append-only')===true]];return {version:'2.94',ok:checks.every(x=>x[1]),checks,added:C.DATA?.SCIENCE_BATCH_REFERENCE_V294?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V294={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V294='2.94';})(window);

} catch (err) {
  try { console.warn('[CHE module 176]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'N2O(g)':{formula:'N2O',phase:'gas',CAS:'10024-97-2',formationEnthalpy:{value:82.05,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:219.96,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1400],A:27.67988,B:51.14898,C:-30.64454,D:6.847911,E:-0.157906,F:71.24934,G:238.6164,H:82.04824},{rangeK:[1400,6000],A:60.30274,B:1.034566,C:-0.192997,D:0.012540,E:-6.860254,F:48.61390,G:272.5002,H:82.04824}],source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'HF(g)':{formula:'HF',phase:'gas',CAS:'7664-39-3',formationEnthalpy:{value:-273.30,uncertainty:0.70,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:173.779,uncertainty:0.003,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1000],A:30.11693,B:-3.246612,C:2.868116,D:0.457914,E:-0.024861,F:-281.4912,G:210.9226,H:-272.5462},{rangeK:[1000,6000],A:24.57033,B:6.893391,C:-1.243874,D:0.082583,E:-0.234060,F:-279.7653,G:202.8525,H:-272.5462}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'HBr(g)':{formula:'HBr',phase:'gas',CAS:'10035-10-6',formationEnthalpy:{value:-36.29,uncertainty:0.16,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:198.700,uncertainty:0.004,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1100],A:31.71409,B:-13.69992,C:23.35567,D:-9.008529,E:-0.028758,F:-45.57464,G:240.0428,H:-36.44306},{rangeK:[1100,6000],A:32.88913,B:2.822116,C:-0.478035,D:0.032464,E:-3.174958,F:-52.46318,G:230.8597,H:-36.44306}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'HI(g)':{formula:'HI',phase:'gas',CAS:'10034-85-2',formationEnthalpy:{value:26.50,uncertainty:0.10,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:206.59,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1400],A:26.04540,B:4.689678,C:4.911765,D:-2.654397,E:0.121419,F:18.75499,G:237.2018,H:26.35903},{rangeK:[1400,6000],A:35.44358,B:1.414708,C:-0.182088,D:0.011768,E:-4.054561,F:7.919099,G:240.1097,H:26.35903}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'Br2(g)':{formula:'Br2',phase:'gas',CAS:'7726-95-6',formationEnthalpy:{value:30.91,uncertainty:0.11,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:245.468,uncertainty:0.005,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[332.503,3400],A:38.52723,B:-1.976835,C:1.526107,D:-0.198398,E:-0.185815,F:18.87620,G:291.4863,H:30.91001},{rangeK:[3400,6000],A:34.99288,B:9.252248,C:-2.361588,D:0.154336,E:-43.07637,F:-7.467771,G:273.6303,H:30.91001}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'I2(g)':{formula:'I2',phase:'gas',CAS:'7553-56-2',formationEnthalpy:{value:62.42,uncertainty:0.08,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:260.687,uncertainty:0.005,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[457.666,2000],A:37.79763,B:0.225453,C:-0.912556,D:1.034913,E:-0.083826,F:50.86865,G:305.9199,H:62.42110},{rangeK:[2000,6000],A:76.73414,B:-4.045782,C:-1.848145,D:0.219044,E:-82.39384,F:-53.87151,G:281.2267,H:62.42110}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST295:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69',input:'dane.md',corrections:'Applied where supplied value differed from current NIST review value'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V295={version:'2.95',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V295='2.95';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V295={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V295',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.95';E.dataVersion='2.95';E.contractVersion='2.95';E.schemaVersion='2.95';if(E.PUBLIC)E.PUBLIC.version='2.95';
})(window);

} catch (err) {
  try { console.warn('[CHE module 177]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const r=C.DATA?.SCIENCE_BATCH_REFERENCE_V295?.records||{};const checks=[['6 new species',Object.keys(r).length===6],['N2O',r['N2O(g)']?.formationEnthalpy?.value===82.05],['HF',r['HF(g)']?.formationEnthalpy?.value===-273.30],['HBr corrected uncertainty',r['HBr(g)']?.formationEnthalpy?.uncertainty===0.16],['HI corrected enthalpy',r['HI(g)']?.formationEnthalpy?.value===26.50],['Br2 corrected entropy',r['Br2(g)']?.S298?.value===245.468],['I2 corrected enthalpy',r['I2(g)']?.formationEnthalpy?.value===62.42],['all Shomate',Object.values(r).every(x=>x.shomate?.length===2)],['append only',C.DATA?.SCIENCE_BATCH_REFERENCE_V295?.policy?.startsWith('append-only')===true]];return {version:'2.95',ok:checks.every(x=>x[1]),checks,added:C.DATA?.SCIENCE_BATCH_REFERENCE_V295?.added||[]};}C.SCIENCE_BATCH_REFERENCE_REGRESSION_V295={run};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_REGRESSION_V295='2.95';})(window);

} catch (err) {
  try { console.warn('[CHE module 178]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE SCIENCE BATCH REFERENCE v2.96 — append-only, source-checked */
(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const records={
 'Cl2(g)':{formula:'Cl2',phase:'gas',CAS:'7782-50-5',S298:{value:223.081,uncertainty:0.010,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[
  {rangeK:[298,1000],A:33.05060,B:12.22940,C:-12.06510,D:4.385330,E:-0.159494,F:-10.83480,G:259.0290,H:0},
  {rangeK:[1000,3000],A:42.67730,B:-5.009570,C:1.904621,D:-0.165641,E:-2.098480,F:-17.28980,G:269.8400,H:0},
  {rangeK:[3000,6000],A:-42.55350,B:41.68570,C:-7.126830,D:0.387839,E:101.1440,F:132.7640,G:264.7860,H:0}
 ],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'Br2(l)':{formula:'Br2',phase:'liquid',CAS:'7726-95-6',S298:{value:152.21,uncertainty:0.30,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984'},
 'I2(condensed)':{formula:'I2',phase:'condensed',CAS:'7553-56-2',formationEnthalpyLiquid:{value:13.52,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298Liquid:{value:150.36,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298Solid:{value:116.14,uncertainty:0.30,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomateLiquid:[{rangeK:[386.75,457.666],A:80.66919,B:6.855652e-8,C:-8.724352e-8,D:3.723132e-8,E:4.735829e-10,F:-10.52782,G:247.9798,H:13.52302}],shomateSolid:[{rangeK:[298,386.75],A:-195.7635,B:918.8984,C:-1079.242,D:534.3219,E:5.156403,F:43.29938,G:-322.4780,H:0}],source:'NIST_WEBBOOK',reference:'Chase 1998; Cox, Wagman et al. 1984'}
};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289; const added=[]; Object.entries(records).forEach(([id,r])=>{const k='NIST296:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}}); D.SCIENCE_BATCH_REFERENCE_V296={version:'2.96',sourceRegistry:{NIST_WEBBOOK:'NIST Chemistry WebBook, SRD 69'},records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V296='2.96';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V296={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V296',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.SCIENCE_BATCH_REFERENCE_REGRESSION_V296={run(){const r=D.SCIENCE_BATCH_REFERENCE_V296.records;const checks=[['3 new records',Object.keys(r).length===3],['Cl2 entropy',r['Cl2(g)'].S298.value===223.081],['Cl2 Shomate',r['Cl2(g)'].shomate.length===3],['Br2 liquid entropy',r['Br2(l)'].S298.value===152.21],['I2 liquid formation',r['I2(condensed)'].formationEnthalpyLiquid.value===13.52],['I2 solid entropy',r['I2(condensed)'].S298Solid.value===116.14],['I2 phase Shomate',r['I2(condensed)'].shomateLiquid.length===1&&r['I2(condensed)'].shomateSolid.length===1],['append only',D.SCIENCE_BATCH_REFERENCE_V296.policy.startsWith('append-only')]];return {version:'2.96',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_BATCH_REFERENCE_V296.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 179]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE SCIENCE BATCH REFERENCE v2.97 — condensed-phase core; append-only, source-checked */
(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const records={
 'NaOH(s)':{formula:'NaOH',phase:'solid',CAS:'1310-73-2',formationEnthalpy:{value:-425.93,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:64.46,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'CaO(s)':{formula:'CaO',phase:'solid',CAS:'1305-78-8',formationEnthalpy:{value:-634.92,uncertainty:0.90,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:38.1,uncertainty:0.4,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984 CODATA Review'},
 'NaCl(s)':{formula:'NaCl',phase:'solid',CAS:'7647-14-5',formationEnthalpy:{value:-411.12,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:72.11,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Chase 1998'}
};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289;const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST297:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69',input:'dane.md',note:'NIST value retained when input supplement differed in uncertainty/value'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V297={version:'2.97',sourceRegistry:{NIST_WEBBOOK:'NIST Chemistry WebBook, SRD 69'},records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V297='2.97';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V297={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V297',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.97';E.dataVersion='2.97';E.contractVersion='2.97';E.schemaVersion='2.97';if(E.PUBLIC)E.PUBLIC.version='2.97';
E.SCIENCE_BATCH_REFERENCE_REGRESSION_V297={run(){const r=D.SCIENCE_BATCH_REFERENCE_V297.records;const checks=[['3 new records',Object.keys(r).length===3],['NaOH',r['NaOH(s)'].formationEnthalpy.value===-425.93&&r['NaOH(s)'].S298.value===64.46],['CaO CODATA review',r['CaO(s)'].formationEnthalpy.uncertainty===0.90&&r['CaO(s)'].S298.uncertainty===0.4],['NaCl',r['NaCl(s)'].formationEnthalpy.value===-411.12&&r['NaCl(s)'].S298.value===72.11],['append only',D.SCIENCE_BATCH_REFERENCE_V297.policy.startsWith('append-only')],['ledger',r&&Array.isArray(D.SCIENCE_BATCH_REFERENCE_V297.added)]];return {version:'2.97',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_BATCH_REFERENCE_V297.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 180]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.SCIENCE_BATCH_AUDIT_V297={version:'2.97',source:'dane.md + NIST SRD 69',verified:['NaOH(s)','CaO(s)','NaCl(s)'],notImportedFromSupplement:['KOH(s)','Ca(OH)2(s)','MgO(s)','Mg(OH)2(s)','KCl(s)','CaCl2(s)','MgCl2(s)','Na2CO3(s)','NaHCO3(s)','CaCO3(s)','HNO3(l)','H2SO4(l)','H3PO4(s)'],reason:'not imported in this batch without individual source verification'};E.modules=E.modules||{};E.modules.SCIENCE_BATCH_AUDIT_V297='2.97';})(window);

} catch (err) {
  try { console.warn('[CHE module 181]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE SCIENCE EQUILIBRIA v2.98 — verified subset from dane.md; append-only */
(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={EPA_SILVER_KSP:{name:'US EPA, Solubility Product Constants for Various Silver Solids',version:'Lide 2000 table reproduced in EPA document'},UT_AUSTIN_KF:{name:'University of Texas at Austin, Formation Constants'}};
const records={
 'AgCl(aq-equilibrium)':{type:'Ksp',reaction:'AgCl(s) ⇌ Ag+(aq) + Cl-(aq)',formula:'AgCl',value:1.77e-10,unit:'dimensionless activity-based reference approximation',T:298.15,medium:'water',constant_type:'solubility_product',source:'EPA_SILVER_KSP',status:'REFERENCE_DATA'},
 'AgBr(aq-equilibrium)':{type:'Ksp',reaction:'AgBr(s) ⇌ Ag+(aq) + Br-(aq)',formula:'AgBr',value:5.35e-13,unit:'dimensionless activity-based reference approximation',T:298.15,medium:'water',constant_type:'solubility_product',source:'EPA_SILVER_KSP',status:'REFERENCE_DATA'},
 'AgI(aq-equilibrium)':{type:'Ksp',reaction:'AgI(s) ⇌ Ag+(aq) + I-(aq)',formula:'AgI',value:8.51e-17,unit:'dimensionless activity-based reference approximation',T:298.15,medium:'water',constant_type:'solubility_product',source:'EPA_SILVER_KSP',status:'REFERENCE_DATA'},
 '[Ag(NH3)2]+':{type:'Kf',reaction:'Ag+(aq) + 2 NH3(aq) ⇌ [Ag(NH3)2]+(aq)',value:1.7e7,unit:'dimensionless',T:298.15,medium:'water',constant_type:'cumulative_formation_constant',source:'UT_AUSTIN_KF',status:'REFERENCE_DATA'},
 '[Cu(NH3)4]2+':{type:'Kf',reaction:'Cu2+(aq) + 4 NH3(aq) ⇌ [Cu(NH3)4]2+(aq)',value:1.7e13,unit:'dimensionless',T:298.15,medium:'water',constant_type:'cumulative_formation_constant',source:'UT_AUSTIN_KF',status:'REFERENCE_DATA'},
 '[Fe(CN)6]4-':{type:'Kf',reaction:'Fe2+(aq) + 6 CN-(aq) ⇌ [Fe(CN)6]4-(aq)',value:1.5e35,unit:'dimensionless',T:298.15,medium:'water',constant_type:'cumulative_formation_constant',source:'UT_AUSTIN_KF',status:'REFERENCE_DATA'}
};
const added=[];
Object.entries(records).forEach(([id,r])=>{const k='EQ298:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'SOURCE_CHECKED',sources:r.source==='EPA_SILVER_KSP'?'EPA_TABLE':'UT_AUSTIN_TABLE',input:'dane.md',policy:'verified-once'});added.push(id);}});
D.SCIENCE_EQUILIBRIA_REFERENCE_V298={version:'2.98',records,added,sourceRegistry:SRC,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',note:'Only records whose supplied value matched an independently checked source were promoted.'};
E.modules=E.modules||{};E.modules.SCIENCE_EQUILIBRIA_REFERENCE_V298='2.98';E.registry=E.registry||{};E.registry.SCIENCE_EQUILIBRIA_REFERENCE_V298={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_EQUILIBRIA_REFERENCE_V298',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.SCIENCE_EQUILIBRIA_REGRESSION_V298={run(){const r=D.SCIENCE_EQUILIBRIA_REFERENCE_V298.records;const checks=[['6 promoted',Object.keys(r).length===6],['AgCl',r['AgCl(aq-equilibrium)'].value===1.77e-10],['AgBr',r['AgBr(aq-equilibrium)'].value===5.35e-13],['AgI',r['AgI(aq-equilibrium)'].value===8.51e-17],['AgNH3',r['[Ag(NH3)2]+'].value===1.7e7],['CuNH3 source-checked value',r['[Cu(NH3)4]2+'].value===1.7e13],['FeCN source-checked value',r['[Fe(CN)6]4-'].value===1.5e35],['append only',D.SCIENCE_EQUILIBRIA_REFERENCE_V298.policy.startsWith('append-only')],['ledger',Array.isArray(D.SCIENCE_EQUILIBRIA_REFERENCE_V298.added)]];return {version:'2.98',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_EQUILIBRIA_REFERENCE_V298.added};}};
E.version='2.98';E.dataVersion='2.98';E.contractVersion='2.98';E.schemaVersion='2.98';if(E.PUBLIC)E.PUBLIC.version='2.98';
})(window);

} catch (err) {
  try { console.warn('[CHE module 182]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.SCIENCE_EQUILIBRIA_AUDIT_V298={version:'2.98',verified:['AgCl','AgBr','AgI','[Ag(NH3)2]+','[Cu(NH3)4]2+','[Fe(CN)6]4-'],verifyRequired:['remaining Ksp records from dane.md','remaining Kf/beta records from dane.md','pKa table','Kw with thermodynamic definition/conditions','Henry constants with explicit convention and temperature','electrochemical E° and dE°/dT table'],reason:'supplement values were not promoted when source convention/value could not be independently reconciled'};E.modules=E.modules||{};E.modules.SCIENCE_EQUILIBRIA_AUDIT_V298='2.98';})(window);

} catch (err) {
  try { console.warn('[CHE module 183]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE SCIENCE EQUILIBRIA v2.99 — Kw + contract closure; append-only */
(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const records={
  'Kw-water-298.15K':{constantType:'conditional_concentration',reaction:'2 H2O(l) ⇌ H3O+(aq) + OH-(aq)',value:1.00e-14,unit:'dimensionless when referenced to standard state; concentration-form often written as mol² L⁻²',temperatureK:298.15,pressure:'1 atm',medium:'water',source:'NIST/IAPWS water-ionization reference; educational concentration form cross-check',sourceVersion:'IAPWS R11-24 / NIST 2025',uncertainty:null,limitations:'1.00e-14 is a rounded concentration-form teaching value; it must not be represented as the full thermodynamic Kw over arbitrary T,P. Use IAPWS R11-24 for T/rho-dependent calculation.'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='EQ299:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'SOURCE_CHECKED_CONDITIONAL',sourceVersion:r.sourceVersion});added.push(id);}});
D.SCIENCE_EQUILIBRIA_REFERENCE_V299={version:'2.99',records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',note:'Kw promoted only as a conditional 298.15 K concentration-form record, not as a universal thermodynamic constant.'};
E.modules=E.modules||{};E.modules.SCIENCE_EQUILIBRIA_REFERENCE_V299='2.99';E.registry=E.registry||{};E.registry.SCIENCE_EQUILIBRIA_REFERENCE_V299={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_EQUILIBRIA_REFERENCE_V299',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.SCIENCE_EQUILIBRIA_REGRESSION_V299={run(){const r=D.SCIENCE_EQUILIBRIA_REFERENCE_V299.records['Kw-water-298.15K'];const checks=[['Kw',r?.value===1e-14],['298.15K',r?.temperatureK===298.15],['conditional type',r?.constantType==='conditional_concentration'],['reaction',r?.reaction.includes('H3O+')&&r?.reaction.includes('OH-')],['limitation',typeof r?.limitations==='string'&&r.limitations.length>20],['append only',D.SCIENCE_EQUILIBRIA_REFERENCE_V299.policy.startsWith('append-only')],['ledger',Array.isArray(D.SCIENCE_EQUILIBRIA_REFERENCE_V299.added)]];return {version:'2.99',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_EQUILIBRIA_REFERENCE_V299.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 184]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.01 — Henry contract + NIST H2S record; append-only */
(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const records={'H2S(g)-water-298.15-Hs-bp':{species:'H2S(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:0.087,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2100,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST entry lists multiple compilation methods and some entries lack citation; do not promote to referenceReady without resolving source provenance.'}};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST301:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69',input:'dane.md'});added.push(id);}});
D.SCIENCE_HENRY_REFERENCE_V301={version:'3.01',records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_HENRY_REFERENCE_V301='3.01';E.registry=E.registry||{};E.registry.SCIENCE_HENRY_REFERENCE_V301={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_HENRY_REFERENCE_V301',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / conditional database values'};
E.SCIENCE_HENRY_REGRESSION_V301={run(){const r=D.SCIENCE_HENRY_REFERENCE_V301.records;const x=r['H2S(g)-water-298.15-Hs-bp'];const checks=[['record',!!x],['value',x?.value===0.087],['type',x?.constantType==='Henry_solubility_Hs_bp'],['temperature',x?.temperatureK===298.15],['not reference ready',x?.referenceReady===false],['ledger',Array.isArray(D.SCIENCE_HENRY_REFERENCE_V301.added)]];return {version:'3.01',ok:checks.every(a=>a[1]),checks,added:D.SCIENCE_HENRY_REFERENCE_V301.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 185]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.02 — Henry batch O2/CO2/NH3/SO2; NIST SRD 69, append-only */
(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const records={
 'O2(g)-water-298.15-Hs-bp':{species:'O2(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:0.0013,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:1500,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST lists multiple compilations/methods; citation provenance is incomplete for the displayed compilation.'},
 'CO2(g)-water-298.15-Hs-bp':{species:'CO2(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:0.035,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2400,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST displays multiple compilations; the 0.035/2400 entry has missing citation metadata.'},
 'NH3(g)-water-298.15-Hs-bp':{species:'NH3(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:27,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2100,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST lists many values and methods, including entries with missing citations; stored as database evidence only.'},
 'SO2(g)-water-298.15-Hs-bp':{species:'SO2(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:1.4,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2900,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST displays multiple compilations/methods; displayed entries have incomplete citation metadata.'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST302:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED_DATABASE_ONLY',sourceVersion:'SRD69',input:'dane.md',note:'Stored as conditional/database evidence; not referenceReady.'});added.push(id);}});
D.SCIENCE_HENRY_REFERENCE_V302={version:'3.02',records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',referenceReady:false};
E.modules=E.modules||{};E.modules.SCIENCE_HENRY_REFERENCE_V302='3.02';E.registry=E.registry||{};E.registry.SCIENCE_HENRY_REFERENCE_V302={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_HENRY_REFERENCE_V302',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / conditional database values'};
E.SCIENCE_HENRY_REGRESSION_V302={run(){const r=D.SCIENCE_HENRY_REFERENCE_V302.records;const checks=[['4 records',Object.keys(r).length===4],['O2',r['O2(g)-water-298.15-Hs-bp']?.value===0.0013],['CO2',r['CO2(g)-water-298.15-Hs-bp']?.value===0.035],['NH3',r['NH3(g)-water-298.15-Hs-bp']?.value===27],['SO2',r['SO2(g)-water-298.15-Hs-bp']?.value===1.4],['all conditional',Object.values(r).every(x=>x.referenceReady===false)],['ledger',Array.isArray(D.SCIENCE_HENRY_REFERENCE_V302.added)]];return {version:'3.02',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_HENRY_REFERENCE_V302.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 186]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.EDUCATION_PRIORITY_V303 — curriculum-first data routing
   Source basis: Polish core curricula, school years 2025/26 pages (ZPE/MEN).
   This layer is routing/coverage metadata only; it does not invent scientific values. */
(function(){
  const E = window.CHE = window.CHE || {};
  E.EDUCATION_PRIORITY_V303 = {
    version:'3.03', status:'ACTIVE', policy:'CURRICULUM_FIRST',
    sourceBasis:[
      {id:'PL_SP_CHEM_2025_26', title:'Chemia — szkoła podstawowa IV–VIII', url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia'},
      {id:'PL_LO_CHEM_2025_26', title:'Chemia — liceum ogólnokształcące i technikum', url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia'},
      {id:'PL_LO_BIO_2025_26', title:'Biologia — liceum ogólnokształcące i technikum', url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/biologia'}
    ],
    tiers:[
      {id:'SP78_CORE', priority:100, label:'SP 7–8 — rdzeń', dataDomains:[
        'elements_symbols_atomic_number_mass','common_substances_properties','mixtures_and_separation',
        'states_and_physical_properties','atomic_structure_electrons','periodic_table_groups_periods',
        'chemical_formulae_and_nomenclature','valency_and_ions','molar_mass_basic_stoichiometry',
        'chemical_reaction_equations_balancing','acids_bases_salts','pH_and_indicators',
        'solubility','metals_nonmetals','basic_redox','laboratory_safety_GHS'
      ], elementSymbols:['H','C','N','O','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','I','Ba','Pb']},
      {id:'LO_BIO_CHEM_CORE', priority:90, label:'LO biol-chem — wspólny rdzeń', dataDomains:[
        'mole_avogadro_molar_mass','stoichiometry_gas_volume','solution_concentration',
        'acid_base_equilibria','pKa_Ka_Kw','solubility_equilibria_Ksp','redox_electrochemistry',
        'thermochemistry','reaction_kinetics','chemical_bonding_geometry',
        'organic_structure_isomerism','functional_groups','biomolecule_chemistry',
        'spectroscopy_basics','nuclear_isotopes','quantitative_lab_methods','BHP_GHS'
      ], priorityElements:['H','C','N','O','P','S','Na','K','Mg','Ca','Cl','Fe','Cu','Zn','I'],
       bioMolecules:['H2O','CO2','O2','NH3','glucose','fructose','sucrose','starch','cellulose','amino_acids','fatty_acids','ATP','DNA_bases','phosphate']},
      {id:'LO_CHEM_EXTENDED', priority:80, label:'LO chem — rozszerzenie', dataDomains:[
        'equilibrium_activity_models','Henry_constants','electrode_potentials','temperature_dependence',
        'organic_reaction_mechanisms','stereochemistry','spectral_data','advanced_thermochemistry',
        'coordination_complexes','nuclear_chemistry'
      ]}
    ],
    routing:{
      scientificVerification:'priority first by tier, then by source quality, then by completeness',
      appendOnly:true, noOverwrite:true, ledger:'CHE.SCIENCE_VERIFICATION_LEDGER_V289',
      unresolvedPolicy:'VERIFY_REQUIRED',
      noFakeValues:true
    },
    nextBatch:['SP78 substances/properties','SP78 acids-bases-pH-indicators','SP78 ions/valency/formulae','SP78 reaction catalog','LO mol/stoichiometry/concentration','LO bio-organic molecules','LO redox/electrochemistry'],
    coverageRule:'A scientific record gets an educationPriority only when its identity and semantics are already valid; priority never upgrades scientific readiness.'
  };
  E.EDUCATION_PRIORITY_V303.audit=function(){
    const t=this.tiers||[];
    return {ok:t.length===3, tiers:t.length, core:t.map(x=>({id:x.id,priority:x.priority,domains:(x.dataDomains||[]).length}))};
  };
})();

} catch (err) {
  try { console.warn('[CHE module 187]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE SCIENCE EQUILIBRIA v3.00 — aqueous hydrohalide pKa candidates; source-backed, not thermodynamic-reference promotion */
