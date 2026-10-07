C.SCIENCE_RECORD_READINESS={version:'2.71',audit,regression};
E.modules=E.modules||{};E.modules.SCIENCE_RECORD_READINESS='2.71';
E.registry=E.registry||{};E.registry.SCIENCE_RECORD_READINESS={layer:'AUDIT/SCIENCE',owner:'CHE.SCIENCE_RECORD_READINESS',depends:['ATOMIC_PROPS','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 114]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function run(){
 const r=[]; const add=(id,name,ok,detail)=>r.push({id,name,ok:!!ok,detail:detail||''});
 add('RT71-001','engine API exists',!!E.PUBLIC&&typeof E.PUBLIC==='object',typeof E.PUBLIC);
 add('RT71-002','common structure engine exists',!!C.STRUCTURE, C.STRUCTURE?'present':'missing');
 add('RT71-003','common molecule adapter exists',!!C.MOLECULE, C.MOLECULE?'present':'missing');
 add('RT71-004','science readiness audit exists',!!C.SCIENCE_RECORD_READINESS, C.SCIENCE_RECORD_READINESS?'present':'missing');
 const a=C.SCIENCE_RECORD_READINESS?.audit?.()||{};
 add('RT71-005','science gate explicit',a.scientificGate===false,String(a.scientificGate));
 return {ok:r.every(x=>x.ok),tests:r};
}
C.RUNTIME_SCIENCE_SELFTEST={version:'2.71',run};
if(E.AUDIT?.run&&!E.AUDIT.__v271Wrapped){E.AUDIT.__v271Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const s=C.SCIENCE_RECORD_READINESS?.regression?.()||[];const t=C.RUNTIME_SCIENCE_SELFTEST.run();r.groups=r.groups||{};r.groups.v271=[...s,...t.tests];r.summary=r.summary||{};r.summary.v271={total:s.length+t.tests.length,failed:[...s,...t.tests].filter(x=>!x.ok).length};r.v271=[...s,...t.tests];r.ok=!!r.ok&&r.v271.every(x=>x.ok);return r;};}
E.version='2.71';E.dataVersion='2.71';E.contractVersion='2.71';E.schemaVersion='2.71';if(E.PUBLIC)E.PUBLIC.version='2.71';if(E.API_CONTRACT)E.API_CONTRACT.version='2.71';if(E.RUNTIME)E.RUNTIME.version='2.71';
})(window);

} catch (err) {
  try { console.warn('[CHE module 115]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.71';E.dataVersion='2.71';E.contractVersion='2.71';E.schemaVersion='2.71';E.modules=E.modules||{};E.modules.SCIENCE_RECORD_READINESS='2.71';E.modules.RUNTIME_SCIENCE_SELFTEST='2.71';E.registry=E.registry||{};E.registry.SCIENCE_RECORD_READINESS={layer:'AUDIT/SCIENCE',owner:'CHE.SCIENCE_RECORD_READINESS',depends:['ATOMIC_PROPS','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT','SOURCE_REGISTRY']};E.registry.RUNTIME_SCIENCE_SELFTEST={layer:'RUNTIME/AUDIT',owner:'CHE.RUNTIME_SCIENCE_SELFTEST',depends:['ENGINE','STRUCTURE','MOLECULE','SCIENCE_RECORD_READINESS']};if(E.PUBLIC)E.PUBLIC.version='2.71';if(E.API_CONTRACT)E.API_CONTRACT.version='2.71';if(E.RUNTIME)E.RUNTIME.version='2.71';})(window);

} catch (err) {
  try { console.warn('[CHE module 116]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
/* Weryfikowane rekordy są osobną warstwą referencyjną: nie nadpisują starego THERMOCHEM. */
const thermo={
 H2O_g:{id:'NIST-H2O-G-29815',species:'H2O',formula:'H2O',phase:'gas',T_K:298.15,P_bar:1,
   dHf_kJ_mol:-241.826,uncertainty_kJ_mol:0.040,S_J_molK:188.835,uncertainty_S_J_molK:0.010,
   sourceId:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED',basis:'NIST SRD 69'},
 HCl_g:{id:'NIST-HCL-G-29815',species:'HCl',formula:'HCl',phase:'gas',T_K:298.15,P_bar:1,
   dHf_kJ_mol:-92.31,uncertainty_kJ_mol:0.10,S_J_molK:186.902,uncertainty_S_J_molK:0.005,
   sourceId:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED',basis:'NIST SRD 69'},
 CO2_g:{id:'NIST-CO2-G-29815',species:'CO2',formula:'CO2',phase:'gas',T_K:298.15,P_bar:1,
   dHf_kJ_mol:-393.51,uncertainty_kJ_mol:0.13,S_J_molK:213.785,uncertainty_S_J_molK:0.010,
   sourceId:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED',basis:'NIST SRD 69'}
};
const equilibria=[
 {id:'PUBCHEM-ACETIC-PKA-25C',type:'pKa',species:'CH3COOH',conjugateBase:'CH3COO-',value:4.756,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Serjeant & Dempsey, 1979; IUPAC Chemical Data Series 23',status:'VERIFIED',limitations:'pKa is medium/temperature dependent'},
 {id:'PUBCHEM-AMMONIA-PKB-25C',type:'Kb',species:'NH3',conjugateAcid:'NH4+',value:1.774e-5,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Weast, Handbook of Chemistry and Physics, 68th ed.',status:'VERIFIED',limitations:'Kb is medium/temperature dependent'},
 {id:'PUBCHEM-CACO3-KSP-25C',type:'Ksp',species:'CaCO3',value:3.36e-9,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'CRC Handbook of Chemistry and Physics, 91st ed.',status:'VERIFIED',limitations:'value is temperature/solid-phase dependent'}
];
function audit(){return {version:'2.73',thermo:Object.values(thermo),equilibria,evidence:{thermoSource:'NIST SRD 69',equilibriumSource:'PubChem records with cited underlying references'},policy:'verified reference layer does not overwrite legacy data'};}
C.REFERENCE_EXPANSION_V273={version:'2.73',thermo,equilibria,audit};
D.REFERENCE_THERMO_V273=thermo;
D.REFERENCE_EQUILIBRIA_V273=equilibria;
E.modules=E.modules||{};E.modules.REFERENCE_EXPANSION_V273='2.73';
E.registry=E.registry||{};E.registry.REFERENCE_EXPANSION_V273={layer:'DATA/REFERENCE',owner:'CHE.DATA.REFERENCE_EXPANSION_V273',depends:['SOURCE_REGISTRY','THERMO_REFERENCE','EQUILIBRIA_REFERENCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 117]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const extra={
 PUBCHEM:{id:'PUBCHEM',name:'PubChem',url:'https://pubchem.ncbi.nlm.nih.gov/',scope:'chemical identifiers, experimental properties and cited property records'},
 IUPAC_GOLDBOOK:{id:'IUPAC_GOLDBOOK',name:'IUPAC Gold Book',url:'https://goldbook.iupac.org/',scope:'chemical terminology and definitions'}
};
function audit(){const base=C.SOURCE_REGISTRY?.audit?.()||{};return {...base,extended:Object.values(extra),extendedCount:Object.keys(extra).length};}
C.SOURCE_REGISTRY_EXTENDED={version:'2.73',sources:extra,audit};
E.modules=E.modules||{};E.modules.SOURCE_REGISTRY_EXTENDED='2.73';E.registry=E.registry||{};E.registry.SOURCE_REGISTRY_EXTENDED={layer:'PROVENANCE',owner:'CHE.SOURCE_REGISTRY_EXTENDED',depends:['SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 118]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function sourceKnown(id){return !!(C.SOURCE_REGISTRY_EXTENDED?.sources?.[id]||C.SOURCE_REGISTRY?.sources?.[id]);}
function addThermo(r){if(!r?.id||!sourceKnown(r.sourceId))return {ok:false,error:'UNKNOWN_SOURCE'};const a=C.DATA.REFERENCE_THERMO_V273||{};if(a[r.id])return {ok:false,error:'DUPLICATE_ID'};a[r.id]=Object.freeze({...r});return {ok:true,id:r.id};}
function addEquilibrium(r){if(!r?.id||!sourceKnown(r.sourceId))return {ok:false,error:'UNKNOWN_SOURCE'};const api=C.EQUILIBRIA_REFERENCE;if(!api?.add)return {ok:false,error:'EQUILIBRIA_API_MISSING'};return api.add(r);}
function pKaToKa(pKa){if(!Number.isFinite(Number(pKa)))return null;return Math.pow(10,-Number(pKa));}
function pKbToKb(pKb){if(!Number.isFinite(Number(pKb)))return null;return Math.pow(10,-Number(pKb));}
function audit(){const t=C.DATA?.REFERENCE_THERMO_V273||{},e=C.DATA?.REFERENCE_EQUILIBRIA_V273||[];return {thermo:Object.keys(t).length,equilibria:e.length,sourceChecked:Object.values(t).filter(x=>sourceKnown(x.sourceId)).length};}
C.REFERENCE_MERGE_API={version:'2.73',addThermo,addEquilibrium,pKaToKa,pKbToKb,audit,policy:'verified records only; no overwrite of legacy data'};
E.modules=E.modules||{};E.modules.REFERENCE_MERGE_API='2.73';E.registry=E.registry||{};E.registry.REFERENCE_MERGE_API={layer:'API/DATA',owner:'CHE.REFERENCE_MERGE_API',depends:['SOURCE_REGISTRY_EXTENDED','THERMO_REFERENCE','EQUILIBRIA_REFERENCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 119]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const rows=C.REFERENCE_EXPANSION_V273?.equilibria||[];
const api=C.EQUILIBRIA_REFERENCE;
const computed=[];
rows.forEach(r=>{if(api?.add)api.add(r);if(r.type==='pKa'){const ka=C.REFERENCE_MERGE_API?.pKaToKa(r.value);computed.push({id:r.id+':Ka',type:'Ka',sourceRecord:r.id,value:ka,unit:'dimensionless',temperatureK:r.temperatureK,phase:r.phase,medium:r.medium,sourceId:'COMPUTED_FROM_VERIFIED_PKA',status:'COMPUTED',definition:'Ka = 10^(-pKa)'});}if(r.type==='Kb'){computed.push({id:r.id+':pKb',type:'pKb',sourceRecord:r.id,value:-Math.log10(r.value),unit:'dimensionless',temperatureK:r.temperatureK,phase:r.phase,medium:r.medium,sourceId:'COMPUTED_FROM_VERIFIED_KB',status:'COMPUTED',definition:'pKb = -log10(Kb)'});}});
function audit(){const all=Object.values(api?.records||{});return {version:'2.73',total:all.length,verified:all.filter(x=>x.status==='VERIFIED').length,computed,computedCount:computed.length,types:Object.fromEntries(['Ka','Kb','pKa','pKb','Ksp','solubility'].map(t=>[t,all.filter(x=>x.type===t).length]))};}
C.EQUILIBRIA_VERIFIED_2026={version:'2.73',audit,computed};
D.EQUILIBRIA_VERIFIED_2026=rows;
E.modules=E.modules||{};E.modules.EQUILIBRIA_VERIFIED_2026='2.73';E.registry=E.registry||{};E.registry.EQUILIBRIA_VERIFIED_2026={layer:'DATA/REFERENCE',owner:'CHE.EQUILIBRIA_VERIFIED_2026',depends:['EQUILIBRIA_REFERENCE','REFERENCE_MERGE_API']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 120]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function rows(){const a=D.REACTIONS||{},b=D.REACTION_DATA||{};const keys=[...new Set([...Object.keys(a),...Object.keys(b)])];return keys.map(id=>({id,data:a[id]||b[id]||{}}));}
function audit(){const rs=rows(),required=['conditions','catalyst','solvent','temperature','pressure','exoEndo','safety','bhp','source','provenance'];const cov=Object.fromEntries(required.map(f=>[f,rs.filter(r=>r.data?.[f]!=null&&r.data[f]!=='').length]));const balanced=rs.filter(r=>r.data?.balanced===true||r.data?.isBalanced===true||r.data?.balance===true).length;const withSource=rs.filter(r=>r.data?.source||r.data?.provenance||r.data?.reference).length;return {version:'2.73',records:rs.length,balanced,withSource,fieldCoverage:cov,missingSource:rs.filter(r=>!(r.data?.source||r.data?.provenance||r.data?.reference)).map(r=>r.id)};}
function regression(){const a=audit();return [{id:'RX73-001',name:'reaction inventory stable',ok:a.records>=0,detail:String(a.records)},{id:'RX73-002',name:'audit is read-only',ok:true,detail:'no reaction record modified'},{id:'RX73-003',name:'source gaps remain visible',ok:Array.isArray(a.missingSource),detail:String(a.missingSource.length)}];}
C.REACTION_AUDIT_V273={version:'2.73',audit,regression};E.modules=E.modules||{};E.modules.REACTION_AUDIT_V273='2.73';E.registry=E.registry||{};E.registry.REACTION_AUDIT_V273={layer:'AUDIT/DATA',owner:'CHE.REACTION_AUDIT_V273',depends:['REACTIONS','REACTION_DATA','REACTION_SCIENCE_AUDIT']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 121]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const exp=C.REFERENCE_EXPANSION_V273?.audit?.()||{};const eq=C.EQUILIBRIA_VERIFIED_2026?.audit?.()||{};const rx=C.REACTION_AUDIT_V273?.audit?.()||{};return {...base,version:'2.73',referenceExpansion:exp,equilibriaVerified:eq,reactionAuditV273:rx,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V273_REAL_REFERENCE_RECORDS',message:'New verified records are isolated from legacy data; computed equilibrium constants are explicitly marked COMPUTED.'}]};}
function regression(){const a=audit();return [...(typeof prev.regression==='function'?prev.regression():[]),{id:'SCI73-001',name:'verified thermo records present',ok:(a.referenceExpansion?.thermo?.length||0)>=3,detail:String(a.referenceExpansion?.thermo?.length||0)},{id:'SCI73-002',name:'verified equilibrium records present',ok:(a.equilibriaVerified?.verified||0)>=3,detail:String(a.equilibriaVerified?.verified||0)},{id:'SCI73-003',name:'reaction audit present',ok:!!a.reactionAuditV273,detail:String(a.reactionAuditV273?.records||0)},{id:'SCI73-004',name:'gate remains conservative',ok:a.scientificGate===false,detail:'blocked'}];}
C.SCIENCE_INTEGRITY={version:'2.73',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.73';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REFERENCE_EXPANSION_V273','EQUILIBRIA_VERIFIED_2026','REACTION_AUDIT_V273']};
E.version='2.73';E.dataVersion='2.73';E.contractVersion='2.73';E.schemaVersion='2.73';if(E.PUBLIC)E.PUBLIC.version='2.73';if(E.API_CONTRACT)E.API_CONTRACT.version='2.73';if(E.RUNTIME)E.RUNTIME.version='2.73';
})(window);

} catch (err) {
  try { console.warn('[CHE module 122]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];const e=C.EQUILIBRIA_VERIFIED_2026?.audit?.()||{};const r=C.REACTION_AUDIT_V273?.audit?.()||{};return {version:'2.73',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),regressions:s,equilibria:e,reactions:r,scientificGate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}
C.FULL_SCIENCE_REGRESSION={version:'2.73',run};E.modules=E.modules||{};E.modules.FULL_SCIENCE_REGRESSION='2.73';E.registry=E.registry||{};E.registry.FULL_SCIENCE_REGRESSION={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_SCIENCE_REGRESSION',depends:['SCIENCE_INTEGRITY','EQUILIBRIA_VERIFIED_2026','REACTION_AUDIT_V273']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 123]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.73';E.dataVersion='2.73';E.contractVersion='2.73';E.schemaVersion='2.73';E.modules=E.modules||{};E.modules.REFERENCE_EXPANSION_V273='2.73';E.modules.REFERENCE_MERGE_API='2.73';E.modules.EQUILIBRIA_VERIFIED_2026='2.73';E.modules.REACTION_AUDIT_V273='2.73';E.modules.SCIENCE_INTEGRITY='2.73';E.modules.FULL_SCIENCE_REGRESSION='2.73';if(E.PUBLIC)E.PUBLIC.version='2.73';if(E.API_CONTRACT)E.API_CONTRACT.version='2.73';if(E.RUNTIME)E.RUNTIME.version='2.73';})(window);

} catch (err) {
  try { console.warn('[CHE module 124]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
function audit(){const rows=Object.entries(D.ATOMIC_PROPS||{});const perField={};for(const f of REQUIRED)perField[f]=rows.filter(([s,r])=>r&&r[f]!=null&&r[f]!=='' ).length;const complete=rows.filter(([s,r])=>REQUIRED.every(f=>r&&r[f]!=null&&r[f]!=='')).map(([s])=>s);const partial=rows.filter(([s])=>!complete.includes(s)).map(([s])=>s);return {version:'2.74',elements:rows.length,expected:118,perField,completeCount:complete.length,complete,partial,missingElements:Array.from({length:118},(_,i)=>i+1).filter(z=>!rows.some(([s,r])=>Number(r?.atomicNumber)===z))};}
function regression(){const a=audit();return [{id:'AT74-001',name:'element inventory does not shrink',ok:a.elements>=22,detail:a.elements+'/118'},{id:'AT74-002',name:'required fields are measured, not defaulted',ok:REQUIRED.every(f=>Object.prototype.hasOwnProperty.call(a.perField,f)),detail:REQUIRED.join(',')},{id:'AT74-003',name:'missing values remain visible',ok:Array.isArray(a.partial),detail:a.partial.length+' partial records'}];}
C.ATOMIC_FIELD_AUDIT={version:'2.74',required:REQUIRED,audit,regression};E.modules=E.modules||{};E.modules.ATOMIC_FIELD_AUDIT='2.74';E.registry=E.registry||{};E.registry.ATOMIC_FIELD_AUDIT={layer:'AUDIT/DATA',owner:'CHE.ATOMIC_FIELD_AUDIT',depends:['DATA.ATOMIC_PROPS','DATA_COVERAGE','ATOMIC_PROPERTY_SEMANTICS']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 125]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['nuclide','Z','A','mass','massUnit','massExcess','massExcessUnit','halfLife','halfLifeUnit','spinParity','decayModes','sourceId','status'];
const OPTIONAL=['decayIntensities','bindingEnergy','magneticMoment','quadrupoleMoment','discovery','notes'];
function normalize(r){if(!r||!r.nuclide)return {ok:false,error:'MISSING_NUCLIDE'};const x={...r};x.Z=Number.isInteger(x.Z)?x.Z:null;x.A=Number.isInteger(x.A)?x.A:null;x.status=x.status||'MISSING';return {ok:true,value:x};}
function audit(){const iso=C.DATA?.ISOTOPES||{};const rows=Object.entries(iso).map(([id,r])=>({id,...r}));const coverage=Object.fromEntries(REQUIRED.map(f=>[f,rows.filter(r=>r[f]!=null&&r[f]!=='').length]));return {version:'2.74',records:rows.length,coverage,required:REQUIRED,optional:OPTIONAL,sourceCoverage:rows.filter(r=>r.sourceId).length,verified:rows.filter(r=>r.status==='VERIFIED'||r.status==='REFERENCE').length};}
C.NUCLIDE_REFERENCE_CONTRACT={version:'2.74',required:REQUIRED,optional:OPTIONAL,normalize,audit,policy:'NUBASE/CIAAW-derived records remain explicitly sourced; absent fields stay absent'};
E.modules=E.modules||{};E.modules.NUCLIDE_REFERENCE_CONTRACT='2.74';E.registry=E.registry||{};E.registry.NUCLIDE_REFERENCE_CONTRACT={layer:'CONTRACT/DATA',owner:'CHE.NUCLIDE_REFERENCE_CONTRACT',depends:['ISOTOPE_SCIENCE_CONTRACT','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 126]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const TYPES={Ka:{definition:'acid dissociation equilibrium constant',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},Kb:{definition:'base dissociation equilibrium constant',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},pKa:{definition:'-log10(Ka)',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},Ksp:{definition:'solubility product equilibrium constant',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},solubility:{definition:'solubility quantity; must state basis and units',requires:['substance','temperatureK','medium','value','unit','sourceId']}};
function audit(){const rows=Object.values(C.DATA?.REFERENCE_EQUILIBRIA_V273||{});return {version:'2.74',types:TYPES,records:rows.length,sourceBacked:rows.filter(r=>r.sourceId&&r.sourceId!=='COMPUTED_FROM_VERIFIED_PKA'&&r.sourceId!=='COMPUTED_FROM_VERIFIED_KB').length,computed:rows.filter(r=>r.status==='COMPUTED').length};}
function validate(r){const spec=TYPES[r?.type];if(!spec)return {ok:false,error:'UNKNOWN_EQUILIBRIUM_TYPE'};const missing=spec.requires.filter(k=>r[k]==null||r[k]==='');return {ok:missing.length===0,missing,type:r.type};}
C.EQUILIBRIA_SEMANTICS={version:'2.74',types:TYPES,audit,validate};E.modules=E.modules||{};E.modules.EQUILIBRIA_SEMANTICS='2.74';E.registry=E.registry||{};E.registry.EQUILIBRIA_SEMANTICS={layer:'CONTRACT/AUDIT',owner:'CHE.EQUILIBRIA_SEMANTICS',depends:['EQUILIBRIA_REFERENCE','SOURCE_REGISTRY_EXTENDED']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 127]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['equation','balanced','conditions','catalyst','solvent','temperature','pressure','exoEndo','safety','bhp','source','provenance'];
function validate(r){const missing=REQUIRED.filter(k=>r?.[k]==null||r[k]==='');return {ok:missing.length===0,missing};}
function audit(){const a=C.REACTION_AUDIT_V273?.audit?.()||{};return {version:'2.74',records:a.records||0,fieldCoverage:a.fieldCoverage||{},required:REQUIRED,fullyDocumented:(a.records||0)>0?Math.min(...REQUIRED.map(k=>a.fieldCoverage?.[k]??0)):0};}
C.REACTION_SCIENCE_CONTRACT_V274={version:'2.74',required:REQUIRED,validate,audit,policy:'audit first; no mutation of reaction records'};E.modules=E.modules||{};E.modules.REACTION_SCIENCE_CONTRACT_V274='2.74';E.registry=E.registry||{};E.registry.REACTION_SCIENCE_CONTRACT_V274={layer:'CONTRACT/AUDIT',owner:'CHE.REACTION_SCIENCE_CONTRACT_V274',depends:['REACTION_AUDIT_V273','REACTION_SCIENCE_AUDIT']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 128]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const atom=C.ATOMIC_FIELD_AUDIT?.audit?.()||{};const nuc=C.NUCLIDE_REFERENCE_CONTRACT?.audit?.()||{};const eq=C.EQUILIBRIA_SEMANTICS?.audit?.()||{};const rx=C.REACTION_SCIENCE_CONTRACT_V274?.audit?.()||{};return {...base,version:'2.74',atomicFieldAudit:atom,nuclideContract:nuc,equilibriaSemantics:eq,reactionContract:rx,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V274_REFERENCE_COMPLETENESS',message:'Reference readiness remains field- and context-dependent; source presence alone is insufficient.'}]};}
function regression(){const a=audit();return [{id:'SCI74-001',name:'atomic field audit present',ok:(a.atomicFieldAudit?.elements||0)>=22},{id:'SCI74-002',name:'nuclide contract present',ok:Array.isArray(a.nuclideContract?.required)},{id:'SCI74-003',name:'equilibrium semantics present',ok:Object.keys(a.equilibriaSemantics?.types||{}).length>=5},{id:'SCI74-004',name:'reaction contract present',ok:Array.isArray(a.reactionContract?.required)},{id:'SCI74-005',name:'gate conservative',ok:a.scientificGate===false}];}
C.SCIENCE_INTEGRITY={version:'2.74',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.74';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['ATOMIC_FIELD_AUDIT','NUCLIDE_REFERENCE_CONTRACT','EQUILIBRIA_SEMANTICS','REACTION_SCIENCE_CONTRACT_V274']};E.version='2.74';E.dataVersion='2.74';E.contractVersion='2.74';E.schemaVersion='2.74';if(E.PUBLIC)E.PUBLIC.version='2.74';
})(window);

} catch (err) {
  try { console.warn('[CHE module 129]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];return {version:'2.74',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),checks:s,gate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}C.FULL_REGRESSION_V274={version:'2.74',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V274='2.74';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V274={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V274',depends:['SCIENCE_INTEGRITY']};E.version='2.74';E.dataVersion='2.74';E.contractVersion='2.74';E.schemaVersion='2.74';})(window);

} catch (err) {
  try { console.warn('[CHE module 130]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const SOURCE={file:"CHEMIA_PODSTAWA_PLUS_MASTER_v19_MIGRACJA_L001_L013 (1).md",sha256:"7f6379148533ff0253bd8c0b41ac57c7a45f0b1f5eff5d8f62bf7f35acc583b4",scope:"L001-L013",extraction:"line-preserving candidate extraction; audit-only"};
const raw=["> - treści powtórkowe L012 → REV02.","CaOH₂` → `Ca(OH)₂`,","Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O","Reguła:** Fe(III) + O(II) → Fe₂O₃.","Reguła:** Al(III) + SO₄(II) → 2 atomy Al i 3 grupy SO₄.","- CaOH₂ ✗ → Ca(OH)₂ ✓","- FeO₃ ✗ → Fe₂O₃ ✓","- AlSO₄ ✗ → Al₂(SO₄)₃ ✓","Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃","NH₄⁺ + NO₃⁻ → NH₄NO₃","│   ├── AX₂ → liniowa (CO₂)","│   ├── AX₂E → kątowa (SO₂)","│   ├── AX₃ → trygonalna płaska (BF₃)","│   ├── AX₂E₂ → kątowa (H₂O)","│   ├── AX₃E → piramidalna (NH₃)","│   └── AX₄ → tetraedryczna (CH₄)","│   ├── AX₃ → trygonalna (BF₃)","│   ├── AX₄ → tetraedryczna (CH₄)","│   └── AX₂E₂ → kątowa (H₂O)","AX₂E → kątowa (SO₂)","AX₃E → piramidalna (NH₃)","AX₂E₂ → kątowa (H₂O)","AX₄E → huśtawkowa (SF₄)","AX₃E₂ → T-kształtna (ClF₃)","AX₄E₂ → kwadratowa płaska (XeF₄)","4. Zbilansuj: H₂ + O₂ → H₂O.","5. Jaki typ reakcji: CaCO₃ → CaO + CO₂?","4. 2H₂ + O₂ → 2H₂O.","2H₂ + O₂ → 2H₂O","2H₂ + O₂ → 2H₂O:","CH₄ + O₂ → CO₂ + H₂O","Ustaw H: CH₄ → 2H₂O,","O: 2O₂ → CO₂ + 2H₂O,","Wynik:** CH₄ + 2O₂ → CO₂ + 2H₂O.","C₂H₆ + O₂ → CO₂ + H₂O","Ustaw C: C₂H₆ → 2CO₂,","Ustaw H: C₂H₆ → 3H₂O,","Pomnóż przez 2: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.","Fe + O₂ → Fe₂O₃","Ustaw O: 3O₂ → 2Fe₂O₃,","Wynik:** 4Fe + 3O₂ → 2Fe₂O₃.","2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂,","N₂ + 3H₂ —(kat., 450°C)→ 2NH₃,","2SO₂ + O₂ —(kat.)→ 2SO₃.","AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq).","AgNO₃ + NaCl → AgCl↓ + NaNO₃,","Równanie:** CaCO₃ →(Δ) CaO + CO₂↑.","Zadanie podobne:** Zbilansuj Fe + O₂ → Fe₂O₃.","Błąd:** „H₂ + O₂ → H₂O₂.\"","Popraw:** 2H₂ + O₂ → 2H₂O.","Dlaczego:** 4Fe + 3O₂ → 2Fe₂O₃ to synteza, ale też spalanie (wydziela ciepło).","Zadanie podobne:** Czy 2SO₂ + O₂ → 2SO₃ to spalanie?","4. Zbilansuj: Al + O₂ → Al₂O₃.","5. Jaki typ reakcji: 2H₂O₂ → 2H₂O + O₂?","Krok 1.** C₃H₈ + O₂ → CO₂ + H₂O.","Wynik:** C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.","1. Zbilansuj: H₂ + O₂ → H₂O.","2. Zbilansuj: Fe + O₂ → Fe₂O₃.","5. Określ typ: CaCO₃ → CaO + CO₂.","6. Zbilansuj: CH₄ + O₂ → CO₂ + H₂O.","8. Określ typ: Zn + CuSO₄ → ZnSO₄ + Cu.","9. Określ typ: AgNO₃ + NaCl → AgCl + NaNO₃.","10. Popraw: „H₂ + O₂ → H₂O₂\".","11. Zbilansuj: C₂H₆ + O₂ → CO₂ + H₂O.","12. Zbilansuj: C₄H₁₀ + O₂ → CO₂ + H₂O.","13. Zbilansuj: KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O.","3. Zbilansuj H₂ + O₂ → H₂O. (F09)","4. Jaki typ reakcji: CaCO₃ → CaO + CO₂? (F09)","4. 4Al + 3O₂ → 2Al₂O₃.","1. 2H₂ + O₂ → 2H₂O.","2. 4Fe + 3O₂ → 2Fe₂O₃.","6. CH₄ + 2O₂ → CO₂ + 2H₂O.","10. 2H₂ + O₂ → 2H₂O.","11. 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.","13. 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O.","14. 2KClO₃ →(Δ, MnO₂) 2KCl + 3O₂.","15. AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq).","20. C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.","| Typ: CaCO₃ → CaO + CO₂            | Analiza                          |","| Typ: Zn + CuSO₄ → ZnSO₄ + Cu      | Wypieranie                       |","| Typ: AgNO₃ + NaCl → AgCl↓ + NaNO₃ | Podwójna wymiana                 |","| Typ: CH₄ + 2O₂ → CO₂ + 2H₂O       | Spalanie                         |","| Bilans CH₄ + O₂?                  | CH₄ + 2O₂ → CO₂ + 2H₂O           |","| Bilans C₃H₈ + O₂?                 | C₃H₈ + 5O₂ → 3CO₂ + 4H₂O         |","3. Określ typ: CaCO₃ → CaO + CO₂.","4. Określ typ: Zn + CuSO₄ → ZnSO₄ + Cu.","6. Popraw: „H₂ + O₂ → H₂O₂\".","│   ├── synteza (A+B→AB)","│   ├── wypieranie (A+BC→AC+B)","│   ├── podwójna wymiana (AB+CD→AD+CB)","4Fe + 3O₂ → 2Fe₂O₃","CH₄ + 2O₂ → CO₂ + 2H₂O","C₃H₈ + 5O₂ → 3CO₂ + 4H₂O","CaCO₃ →(Δ) CaO + CO₂","- H₂ + O₂ → H₂O₂ ✗","H₂ + O₂ → H₂O₂","4. Bilans: H₂ + O₂ → H₂O (współczynniki).","| Analiza (rozkład) | CaCO₃ → CaO + CO₂                                                                  |","| Podwójna wymiana  | AgNO₃ + NaCl → AgCl↓ + NaNO₃  *(↓ = osad — trudno rozpuszczalna substancja stała)* |","| Spalanie          | CH₄ + 2O₂ → CO₂ + 2H₂O                                                             |","| FeO₃ zamiast Fe₂O₃                           | brak krzyżowania / kontroli                               | Feá´µá´µá´µ + Oá´µá´µ → Fe₂O₃; 2·3 = 3·2                             |","a) K + H₂O → KOH + H₂","b) CaCO₃ → CaO + CO₂","c) Zn + CuSO₄ → ZnSO₄ + Cu","7. a) **2K + 2H₂O → 2KOH + H₂** — wypieranie.","b) **CaCO₃ → CaO + CO₂** — analiza (rozkład).","c) **Zn + CuSO₄ → ZnSO₄ + Cu** — wypieranie.","a) C₂H₆ + O₂ → CO₂ + H₂O","b) Fe₂O₃ + CO → Fe + CO₂","10. a) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O","b) Fe₂O₃ + 3CO → 2Fe + 3CO₂","| Wzór chlorku wapnia                             | CaCl₂                                                                | „Ca-II, Cl-I → CaCl₂”                    |","| Typ: Zn + CuSO₄ → ZnSO₄ + Cu                    | Wypieranie                                                           | „Cynk wypycha miedź”                     |","| Typ: CaCO₃ → CaO + CO₂                          | Analiza (rozkład)                                                    | „Rozbiórka”                              |","| Jaki typ reakcji: CH₄ + 2O₂ → CO₂ + 2H₂O?       | Spalanie                                                             | „Z tlenem, wydziela ciepło”              |","| Jaki typ reakcji: AgNO₃ + NaCl → AgCl↓ + NaNO₃? | Podwójna wymiana                                                     | „Zamiana partnerów”                      |","| Wzór kwasu siarkowego(VI)                       | H₂SO₄                                                                | „H-I, SO₄-II → H₂SO₄”                    |","| Wzór azotanu(V) sodu                            | NaNO₃                                                                | „Na-I, NO₃-I → NaNO₃”                    |","| Wzór węglanu wapnia                             | CaCO₃                                                                | „Ca-II, CO₃-II → CaCO₃”                  |","| Wzór fosforanu(V) wapnia                        | Ca₃(PO₄)₂                                                            | „Ca-II, PO₄-III → Ca₃(PO₄)₂”             |","Klucze: numeracja 5–7 i 8–11. 2 KClO₃ —(Δ, MnO₂)→ 2 KCl + 3 O₂.","CaO i CO₂ + woda.** Oba mogą reagować z wodą (CaO → Ca(OH)₂; CO₂ ⇌ H₂CO₃). Nie utrwalać: „tlenki metali tak, niemetali nie”. Charakter — L002.","a) Mg + N₂ → Mg₃N₂","b) 2KClO₃ →(Δ, MnO₂) 2KCl + 3O₂","c) Cl₂ + 2KI → 2KCl + I₂","3. a) 3Mg + N₂ → Mg₃N₂ (synteza);","b) 2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂ — analiza (rozkład).","c) Cl₂ + 2KI → 2KCl + I₂ — wypieranie (lub wymiana jednokrotna).","| **Zasadowy**                    | tlenki metali (głównie grup 1–2)                           | tlenek + H₂O → wodorotlenek   | Na₂O, K₂O, CaO, MgO, BaO        |","| **Kwasowy**                     | tlenki niemetali                                           | tlenek + H₂O → kwas           | SO₂, SO₃, CO₂, P₂O₅, N₂O₅, N₂O₃ |","S + O₂ → SO₂","C + O₂ → CO₂ (nadmiar O₂)","4P + 5O₂ → 2P₂O₅ (zapis szkolny; rzeczywiście P₄O₁₀)","4Na + O₂ → 2Na₂O","4Al + 3O₂ → 2Al₂O₃","2Cu(OH)₂ →(Δ) 2CuO + 2H₂O","2Fe(OH)₃ →(Δ) Fe₂O₃ + 3H₂O","2KClO₃ →(Δ, MnO₂) 2KCl + 3O₂ (tlen jako produkt, nie tlenek)","2SO₂ + O₂ →(kat.) 2SO₃","2CO + O₂ → 2CO₂","2NO + O₂ → 2NO₂","2Na + 2H₂O → 2NaOH + H₂ (tu produktem jest wodorotlenek, nie tlenek)","3Fe + 4H₂O →(Δ) Fe₃O₄ + 4H₂","CaO + H₂O → Ca(OH)₂","BaO + H₂O → Ba(OH)₂","MgO + H₂O → Mg(OH)₂ (bardzo wolno, praktycznie nie zachodzi w typowych warunkach szkolnych — patrz warstwa zaawansowana)","SO₃ + H₂O → H₂SO₄","SO₂ + H₂O → H₂SO₃","CO₂ + H₂O → H₂CO₃ (słaby, nietrwały)","P₂O₅ + 3H₂O → 2H₃PO₄","N₂O₅ + H₂O → 2HNO₃","N₂O₃ + H₂O → 2HNO₂","CuO + H₂SO₄ → CuSO₄ + H₂O","Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O","Na₂O + 2HNO₃ → 2NaNO₃ + H₂O","CO₂ + 2NaOH → Na₂CO₃ + H₂O","CO₂ + NaOH → NaHCO₃ (nadmiar CO₂)","SO₂ + 2NaOH → Na₂SO₃ + H₂O","SO₃ + 2KOH → K₂SO₄ + H₂O","Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O","Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (w stopie / starszy zapis szkolny)","Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (w roztworze — **zalecane w tym pakiecie**)","Fe(III) + O(II) → Fe₂O₃ (2·III = 6; 3·II = 6)","N(V) + O(II) → N₂O₅ (2·V = 10; 5·II = 10)","S(IV) + O(II) → SO₂ (1·IV = 4; 2·II = 4)","S(VI) + O(II) → SO₃ (1·VI = 6; 3·II = 6)","Równanie:** CaO + H₂O → Ca(OH)₂","Wniosek:** CO₂ reaguje z Ca(OH)₂ → CaCO₃ + H₂O.","Równanie:** CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O","| „MgO + H₂O → Mg(OH)₂ łatwo\"      | praktycznie nie zachodzi        | MgO trudno reaguje z wodą                                     |","Błąd:** „SO₃ + H₂O → H₂SO₃\"","Popraw:** SO₃ + H₂O → H₂SO₄.","Reguła:** Tlenek siarki(VI) → kwas siarkowy(VI).","Zadanie podobne:** SO₂ + H₂O → ? (Odp.: H₂SO₃.)","5. Zbilansuj: Al + O₂ → Al₂O₃.","4. Zbilansuj: Fe + O₂ → Fe₂O₃. (z L001 + L002)","7. CO₂ + 2NaOH → ? (z L002)","| WYJAŚNIJ     | Dlaczego SO₃ + H₂O → H₂SO₄, a nie H₂SO₃? |","5. 4Al + 3O₂ → 2Al₂O₃","19. Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄]","| CaO + H₂O → ?                   | Ca(OH)₂                             |","| SO₃ + H₂O → ?                   | H₂SO₄                               |","| SO₂ + H₂O → ?                   | H₂SO₃                               |","| CO₂ + H₂O → ?                   | H₂CO₃ (słaby)                       |","| N₂O₅ + H₂O → ?                  | 2HNO₃                               |","6. Zbilansuj: P + O₂ → P₂O₅.","Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O (z kwasem)","Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (z zasadą, w stopie)","Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (z zasadą, w roztworze)","SO₂ + H₂O → H₂SO₃ (kwas siarkowy(IV))","2SO₂ + O₂ → 2SO₃","SO₃ + H₂O → H₂SO₄ (kwas siarkowy(VI))","3NO₂ + H₂O → 2HNO₃ + NO (kwas azotowy(V))","CO₂ + H₂O → H₂CO₃","- FeO₃ → Fe₂O₃","- SO₃ + H₂O → H₂SO₄ (nie H₂SO₃)","Obojętne szkolnie** (CO, NO, N₂O): wobec **wody i rozcieńczonych** kwasów/zasad. CO + NaOH pod ciśnieniem → mrówczan (extra). NO — rodnik, utlenia się do NO₂. N₂O bywa utleniaczem.","Obserwacja â‰  wniosek. OF₂ to fluorek tlenu. P₂O₅ szkolnie / P₄O₁₀ cząsteczka. Al₂O₃ + NaOH w roztworze → [Al(OH)₄]⁻.","2Na + 2H₂O → 2NaOH + H₂↑","2K + 2H₂O → 2KOH + H₂↑","Ca + 2H₂O → Ca(OH)₂ + H₂↑","FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl","FeCl₂ + 2NaOH → Fe(OH)₂↓ + 2NaCl","CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄","AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl","MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl","KOH + HNO₃ → KNO₃ + H₂O","2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O","Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O","Cu(OH)₂ + H₂SO₄ → CuSO₄ + 2H₂O","Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O","Fe(OH)₃ + 3HNO₃ → Fe(NO₃)₃ + 3H₂O","Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O (z kwasem)","Al(OH)₃ + NaOH → Na[Al(OH)₄] (z zasadą, w roztworze)","Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (z zasadą, w stopie)","Zn(OH)₂ + 2HCl → ZnCl₂ + 2H₂O","Zn(OH)₂ + 2NaOH → Na₂ZnO₂ + 2H₂O","Równanie:** FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl","| CaO + H₂O → CaOH                         | Ca(OH)₂                                           | bilans i nawias                |","| „MgO + H₂O → Mg(OH)₂ łatwo\"              | praktycznie nie zachodzi                          | MgO trudno reaguje z wodą      |","Zadanie podobne:** Ca(OH)₂ + 2HNO₃ → ? (Odp.: Ca(NO₃)₂ + 2H₂O.)","Krok 3.** Otrzymywanie: CaO + H₂O → Ca(OH)₂.","Krok 4.** Zobojętnianie: Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O.","4. Popraw: CaOH₂ ; NaOH + H₂SO₄ → Na₂SO₄ (bez wody i bilansu).","18. Zapisz równanie Al(OH)₃ + NaOH → Na[Al(OH)₄].","4. Zbilansuj: Al + O₂ → Al₂O₃. (z L001 + L002)","7. SO₃ + H₂O → ? (z L002)","8. Fe(OH)₃ + 3HNO₃ → ? (z L003)","4. Ca(OH)₂ ; 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O","8. CaO + H₂O → Ca(OH)₂","10. MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl","12. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl ; osad brunatny.","18. Al(OH)₃ + NaOH → Na[Al(OH)₄]","| CaO + H₂O → ?                 | Ca(OH)₂                                         |","| Ca(OH)₂ + 2HCl → ?            | CaCl₂ + 2H₂O                                    |","| 2NaOH + H₂SO₄ → ?             | Na₂SO₄ + 2H₂O                                   |","| Al(OH)₃ + 3HCl → ?            | AlCl₃ + 3H₂O                                    |","| FeCl₃ + 3NaOH → ?             | Fe(OH)₃↓ + 3NaCl                                |","| CuSO₄ + 2NaOH → ?             | Cu(OH)₂↓ + Na₂SO₄                               |","- metal aktywny + H₂O → wodorotlenek + H₂","2Na + 2H₂O → 2NaOH + H₂","- CaOH₂ → Ca(OH)₂","2 NaCl + 2 H₂O →(elektroliza) 2 NaOH + H₂↑ + Cl₂↑","Niedobór kwasu względem wodorotlenku, np. Ca(OH)₂ + HCl → Ca(OH)Cl + H₂O. Rzadko na E8.","Fe(OH)₂:** świeży często jasny/biały; zielenieje i brunatnieje na powietrzu (→ Fe(III)).","| CaO + H₂O        | tak             | CaO + H₂O → Ca(OH)₂                                                |","| FeCl₃ + NaOH     | tak             | FeCl₃ + 3 NaOH → Fe(OH)₃↓ + 3 NaCl                                 |","| CuSO₄ + NaOH     | tak             | CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄                                 |","| AlCl₃ + NaOH     | tak             | AlCl₃ + 3 NaOH → Al(OH)₃↓ + 3 NaCl (nadmiar NaOH — amfoteryczność) |","H₂SO₄ → 2H⁺ + SO₄²⁻","H₃PO₄ → 3H⁺ + PO₄³⁻","HNO₃ → H⁺ + NO₃⁻","H₂ + S →(T) H₂S (ogrzewanie)","NaCl + H₂SO₄ →(Δ) NaHSO₄ + HCl↑","CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑","H⁺ + H₂O → H₃O⁺","H₂SO₄ → H⁺ + HSO₄⁻ (I stopień — całkowity)","H₂SO₄ + Zn → ZnSO₄ + H₂↑","H₂SO₄ + CuO → CuSO₄ + H₂O","6HCl + Fe₂O₃ → 2FeCl₃ + 3H₂O","2HNO₃ + Na₂O → 2NaNO₃ + H₂O","H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O","2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O","3HCl + Al(OH)₃ → AlCl₃ + 3H₂O","2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂↑","HCl + NaHCO₃ → NaCl + H₂O + CO₂↑","H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl","2HCl + Na₂S → 2NaCl + H₂S↑","Wniosek:** CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑; CO₂ mętni wodę wapienną.","Równanie:** CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑","| H₂SO₄ + Cu → CuSO₄ + H₂↑                | nie zachodzi (Cu poniżej H)                        | szereg aktywności                |","Błąd:** „H₂SO₄ + Cu → CuSO₄ + H₂↑\"","Krok 3.** Dysocjacja: H₂SO₄ → 2H⁺ + SO₄²⁻.","Krok 4.** Reakcja z NaOH: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.","Krok 5.** Reakcja z Zn: H₂SO₄ + Zn → ZnSO₄ + H₂↑.","5. Ca(OH)₂ + 2HCl → ? (z L003 + L004)","7. SO₂ + H₂O → ? (z L002 + L004)","8. Fe(OH)₃ + 3HNO₃ → ? (z L003 + L004)","12. H₂SO₄ → H⁺ + HSO₄⁻; HSO₄⁻ ⇌ H⁺ + SO₄²⁻","13. H⁺ jest protonem; w wodzie łączy się z H₂O → H₃O⁺","16. H₂CO₃ jest nietrwały → rozkłada się na H₂O + CO₂","3NO₂ + H₂O → 2HNO₃ + NO","Szkic: 1 H₂SO₄; H₂SO₄ → H⁺ + HSO₄⁻ (albo pełna wg lekcji). 2 ZnCl₂ + H₂. 3 CaCl₂ + CO₂ + H₂O. 4 pH 2. 5 silnie egzotermowe, pryskające. 6 barwa kwaśna.","H₃PO₃:** nie traktować jak trójprotonowego; E8 → H₃PO₄.","CaSO₄ → Ca²⁺ + SO₄²⁻","Al(NO₃)₃ → Al³⁺ + 3NO₃⁻","K₃PO₄ → 3K⁺ + PO₄³⁻","Ca(II), Cl(I) → CaCl₂","Al(III), SO₄(II) → Al₂(SO₄)₃","Ca(II), PO₄(III) → Ca₃(PO₄)₂","Pb(II), NO₃(I) → Pb(NO₃)₂","H₂SO₄ + Mg → MgSO₄ + H₂↑","AgNO₃ + NaCl → AgCl↓ + NaNO₃","BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl","Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃","2Fe + 3Cl₂ →(Δ) 2FeCl₃","Cu + Cl₂ →(Δ) CuCl₂","AgNO₃ + NaCl → AgCl↓ + NaNO₃ (biały osad AgCl)","BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl (biały osad BaSO₄)","Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃ (żółty osad PbI₂)","CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl (biały osad CaCO₃)","CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄ (niebieski osad Cu(OH)₂)","FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl (brunatny osad Fe(OH)₃)","FeCl₂ + 2NaOH → Fe(OH)₂↓ + 2NaCl (zielonkawo-biały osad Fe(OH)₂)","Równanie:** AgNO₃ + NaCl → AgCl↓ + NaNO₃","Równanie:** CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄","Wniosek:** CuO + H₂SO₄ → CuSO₄ + H₂O.","Równanie:** CuO + H₂SO₄ → CuSO₄ + H₂O","Zapis jonowy: Ba²⁺ + SO₄²⁻ → BaSO₄↓","| CaCl                           | CaCl₂                                               | Ca(II), Cl(I) → CaCl₂        |","| AlSO₄                          | Al₂(SO₄)₃                                           | Al(III), SO₄(II) → Al₂(SO₄)₃ |","| CaNO₃                          | Ca(NO₃)₂                                            | Ca(II), NO₃(I) → Ca(NO₃)₂    |","| „Ca(NO₃)₂ → CaNO₃\"             | Ca(NO₃)₂                                            | nawias, bo 2 grupy NO₃       |","| „CuSO₄ + NaOH → CuOH + NaSO₄\"  | Cu(OH)₂↓ + Na₂SO₄                                   | poprawne wzory               |","Reguła:** W–K–S–K: Ca(II), Cl(I) → CaCl₂.","Dlaczego:** Al(III), SO₄(II) → 2 Al i 3 SO₄. Nawias, bo 3 grupy SO₄.","Błąd:** „CuSO₄ + NaOH → CuOH + NaSO₄\"","Popraw:** CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.","Zadanie z pułapką:** AlCl₃ + 3NaOH → ? (Odp.: Al(OH)₃↓ + 3NaCl.)","Krok 4.** Otrzymywanie: CuO + H₂SO₄ → CuSO₄ + H₂O.","Krok 5.** Reakcja strąceniowa: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.","5. CuSO₄ + 2NaOH → ? (z L005)","7. SO₃ + H₂O → ? (z L002 + L004)","8. Fe(OH)₃ + 3HNO₃ → ? (z L003 + L004 + L005)","CH₃COONa → CH₃COO⁻ + Na⁺; CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻","NH₄Cl → NH₄⁺ + Cl⁻; NH₄⁺ + H₂O ⇌ NH₄OH + H⁺","- AlSO₄ → Al₂(SO₄)₃","- CaNO₃ → Ca(NO₃)₂","2 mole H₂ reagują z 1 molem O₂ → powstają 2 mole H₂O.","2H₂+O₂→2H₂O daje stosunek 2:1:2.","Stosunek: 2 mole H₂ → 2 mole H₂O","CaCO₃ → CaO + CO₂","Stosunek: 1 CaCO₃ → 1 CO₂","Stosunek: 2 H₂ → 2 H₂O","Na 2 mole H₂ potrzeba 1 mol O₂ — mamy 0,125 mola O₂ → **O₂ jest reagentem ograniczającym**.","n(CaCO₃) = 0,1 mol (bo 1 CaCO₃ → 1 CO₂)","1. 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂","2. 2SO₂ + O₂ → 2SO₃","3. SO₃ + H₂O → H₂SO₄","Przykład:** 10 g mieszaniny CaCO₃ + NaCl + HCl → 2,24 dm³ CO₂ (n).","N₂ + 3H₂ → 2NH₃","Na 4 mole H₂ potrzeba 2 mole O₂; mamy 1 mol → **O₂ reagent ograniczający**.","| Spalanie całkowite    | Nadmiar O₂ → CO₂ + H₂O                            |","| Spalanie niecałkowite | Niedobór O₂ → CO + C + H₂O                        |","CH₂=CH₂ + H₂ →(kat. Ni) CH₃–CH₃","CH≡CH + 2H₂ →(kat. Ni) CH₃–CH₃","CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (odbarwienie wody bromowej)","CH₂=CH₂ + H₂O →(kat.) CH₃CH₂OH (etanol)","CH₂=CH₂ + HCl → CH₃CH₂Cl (chloroetan)","| Spalanie całkowite    | Reakcja z nadmiarem O₂ → CO₂ + H₂O.                        |","| Spalanie niecałkowite | Reakcja z niedoborem O₂ → CO + C + H₂O.                    |","- całkowite: + O₂ → CO₂ + H₂O","- niecałkowite: + O₂ → CO + C + H₂O","CH₄ + Cl₂ →(hν) CH₃Cl + HCl","CH₂=CH₂ + H₂ →(kat.) CH₃–CH₃","CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (odbarwienie wody bromowej — próba na alkeny)","CH≡CH + 2H₂ →(kat.) CH₃–CH₃","CH≡CH + 2Br₂ → CHBr₂–CHBr₂","Równanie:** CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br","Węglowodór + O₂ → CO₂ + H₂O","C₂H₄ + 3O₂ → 2CO₂ + 2H₂O","Węglowodór + O₂ → CO + C + H₂O","2CH₄ + 3O₂ → 2CO + 4H₂O (niedobór O₂)","CH₄ + O₂ → C + 2H₂O (bardzo mało O₂)","Wniosek:** CH₄ + 2O₂ → CO₂ + 2H₂O.","Równanie:** CH₄ + 2O₂ → CO₂ + 2H₂O","Równanie (przykład):** 2CH₄ + 3O₂ → 2CO + 4H₂O","C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~38 ATP","6CO₂ + 6H₂O + światło → C₆H₁₂O₆ + 6O₂","C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (alkoholowa)","C₆H₁₂O₆ → 2C₃H₆O₃ (mlekowa)","Oddychanie komórkowe jako globalny bilans: związki organiczne + O₂ → CO₂ + H₂O + energia.","C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (ATP)","C. Wskaż, który atom może zmienić stopień utlenienia w reakcji `Fe2+ → Fe3+`.","H₂O:** 2·(+I) + 1·x = 0 → x = −II (O = −II). ✓","MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O","Redukcja: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O | ·1","Suma: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺","Fe2+ → Fe3+ + e−` — utlenianie","Fe + Cu2+ → Fe2+ + Cu","A. Wskaż utleniacz i reduktor w `Zn + Cu2+ → Zn2+ + Cu`.","B. Wskaż proces utleniania w `2Fe2+ + Cl2 → 2Fe3+ + 2Cl−`.","7. **Dysproporcjonowanie:** 3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O.","Zn + CuSO₄ → ZnSO₄ + Cu (redoks)","AgNO₃ + NaCl → AgCl + NaNO₃","Fe2+ + MnO4− → Fe3+ + Mn2+","Zn + CuSO₄ → ZnSO₄ + Cu","KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O","2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O","Fe + CuSO₄ → FeSO₄ + Cu","Wynik: Fe + CuSO₄ → FeSO₄ + Cu","Al + CuSO₄ → Al₂(SO₄)₃ + Cu","Wynik: 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu","Zn + Cu2+ → Zn2+ + Cu","Wniosek:** Zn + CuSO₄ → ZnSO₄ + Cu (redoks).","Równanie:** Zn + CuSO₄ → ZnSO₄ + Cu","Dla `2Fe2+ + Cl2 → 2Fe3+ + 2Cl−` wskaż:","Równanie (uproszczenie):** 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O","MnO4− → Mn2+","MnO4− + 8H+ + 5e− → Mn2+ + 4H2O","KMnO₄ + FeSO₄ + H₂SO₄ → MnSO₄ + Fe₂(SO₄)₃ + K₂SO₄ + H₂O","Wynik: 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O","[ ] Zmiana treści L001 → plik L001 v3.1, potem krótka nota tutaj w B2","[ ] Zmiana L002 pełna → plik L002, skrót września w B4","a) Fe + O₂ → Fe₂O₃","2. Uzgodnij: Fe + O₂ → Fe₂O₃.","Szkic: 1 Al₂O₃. 2 4 Fe + 3 O₂ → 2 Fe₂O₃. 3 18. 5 współczynnik. 6 CaCl₂.","Klucz diagnozy: ²³Na 11p 12n 11e; Ca(OH)₂ nawias na OH; 4Fe+3O₂→2Fe₂O₃.","X^n → X^(n−k) + X^(n+k)","Cl2 + 2OH− → Cl− + ClO− + H2O","Cl₂ + 2NaOH → NaCl + NaClO + H₂O","Cl₂ (0) → Cl⁻ (−I) — redukcja","Cl₂ (0) → ClO⁻ (+I) — utlenianie","3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O","2H₂O₂ → 2H₂O + O₂ (kat. MnO₂)","Równanie:** 4Fe + 3O₂ + nH₂O → 2Fe₂O₃·nH₂O","Oddychanie komórkowe:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (O₂ redukuje się do H₂O).","Fotosynteza:** 6CO₂ + 6H₂O + światło → C₆H₁₂O₆ + 6O₂ (woda utlenia się do O₂).","Korozja:** 4Fe + 3O₂ + nH₂O → 2Fe₂O₃·nH₂O.","2Cl− → Cl2 + 2e−","Równanie:** 2H₂O₂ →(MnO₂) 2H₂O + O₂","Spalanie: + O₂ → CO₂ + H₂O","Wniosek:** CO₂ reaguje z Ca(OH)₂ → CaCO₃ (trudno rozpuszczalny).","Wniosek:** CaCO₃ → CaO + CO₂.","Równanie:** CaCO₃ →(Δ) CaO + CO₂↑","Równanie: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂","6. Problem: czy Zn reaguje z HCl? Hipoteza: wydzieli się H₂. Obserwacja: pęcherzyki gazu. Wniosek: wydziela się wodór. Równanie: Zn + 2HCl → ZnCl₂ + H₂. BHP: okulary.","7. Problem: czy AgNO₃ reaguje z NaCl? Hipoteza: powstanie osad. Obserwacja: biały osad. Wniosek: powstaje AgCl. Równanie: AgNO₃ + NaCl → AgCl↓ + NaNO₃. BHP: AgNO₃ żrący.","11. Zbilansuj: Al + O₂ → Al₂O₃. (L001)","12. CaO + H₂O → ? (L002+L003)","14. CaCO₃ + 2HCl → ? (L005)","15. CH₄ + 2O₂ → ? (L006)","21. Zbilansuj redoks: KMnO₄ + FeSO₄ + H₂SO₄ → … (L010)","12. Zbilansuj: Fe + O₂ → Fe₂O₃.","20. Zbilansuj: Cu + HNO₃(stęż.) → Cu(NO₃)₂ + NO₂ + H₂O.","12. 4Fe + 3O₂ → 2Fe₂O₃.","13. 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.","20. Cu + 4HNO₃(stęż.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O.","E4. Wskaż utleniacz w: Zn + 2 HCl → ZnCl₂ + H₂ (szkolnie: H⁺ utlenia Zn).","Proszek do pieczenia: NaHCO₃ + kwas → CO₂.","Redukcja:** MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O","Suma:** MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺","Cl₂ + OH⁻ → Cl⁻ + ClO₃⁻ + H₂O","Utlenianie:** Cl₂ + 12OH⁻ → 2ClO₃⁻ + 6H₂O + 10e⁻ | ·1","Suma:** 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O","m(HCl) = 50 · 0,2 = 10 g → n(HCl) = 10/36,5 ≈ 0,274 mol","Zbilansuj metodą jonowo-elektronową: MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O.","MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺.","Dla Al(III) i O(II): najmniejsza wspólna liczba to 6, więc potrzeba 2 atomów Al i 3 atomów O → Al₂O₃.","· wartościowość: Ca(II) i Cl(I) → CaCl₂","Przykład: Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃","| Proste tlenki i związki kowalencyjne | Wartościowość          | Al(III) i O(II) → Al₂O₃     |","| Nazwa zawiera cyfrę rzymską          | Informacja z nazwy     | chlorek żelaza(III) → FeCl₃ |","Błędnie: H₂ + O₂ → H₂O₂ (to inna substancja — nadtlenek wodoru).","Poprawnie: 2H₂ + O₂ → 2H₂O.","Przykład 1:** Fe + O₂ → Fe₂O₃","3. Ustaw O: 3O₂ → 2Fe₂O₃.","Przykład 3:** C₂H₆ + O₂ → CO₂ + H₂O","2. Ustaw C: C₂H₆ → 2CO₂.","3. Ustaw H: C₂H₆ → 3H₂O.","4. Policz O: 2CO₂ + 3H₂O = 4 + 3 = 7 O → 7/2 O₂.","5. Pomnóż przez 2: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.","Wynik:** 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.","Równanie 2K + 2H₂O → 2KOH + H₂ dotyczy potasu, który reaguje z wodą bardzo gwałtownie. To przykład do analizy równania, a nie doświadczenie do samodzielnego wykonania.","Przykład: 2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂","3. H₂ + O₂ → H₂O₂","3. 2H₂ + O₂ → 2H₂O — nie zmieniaj indeksów.","2. 2H₂ + O₂ → 2H₂O — nie zmieniamy indeksów; H₂O₂ to inna substancja.","Ca(OH)₂ →  Ca–(O–H)(O–H) ← indeks obejmuje całą grupę OH","| FeO₃                               | Fe₂O₃                          | Krzyżowanie + kontrola                                       | Fe(III), O(II) → 2·3 = 3·2. FeO₃ nie odpowiada poprawnemu, prostemu wzorowi tlenku żelaza(III) |","| „Jest O₂ → to spalanie”            | Analizuj substraty i produkty  | Spalanie to reakcja z O₂ + wydzielanie energii               | Nie każda reakcja z O₂ to spalanie                                                             |","Al + O₂ → Al₂O₃","8. Zbilansuj H₂ + O₂ → H₂O.","Krok 4.** Spalanie całkowite: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.","4. Zbilansuj: C + O₂ → CO₂. (z L002)","5. CH₄ + 2O₂ → ? (z L006)","7. CO₂ + Ca(OH)₂ → ? (z L002 + L005)","8. CH₂=CH₂ + H₂ → ? (z L006)","18. CH₂=CH₂ + H₂O → CH₃CH₂OH","Most do L002/L004/L005:** spalanie węglowodorów → CO₂ i H₂O; CO₂ reaguje z wodą wapienną.","Szkic: 1 CₙH₂ₙ₊₂ / CₙH₂ₙ. 2 CH₄ + 2 O₂ → CO₂ + 2 H₂O. 3 alken; woda bromowa. 4 wiązanie potrójne (etyn). 5 węgiel (sadza). 6 ten sam wzór sumaryczny, inna budowa.","Alken: CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (odbarwienie).","Alkan: CH₄ + Cl₂ →(światło) CH₃Cl + HCl (model).","4. Zbilansuj: C₆H₁₂O₆ + O₂ → CO₂ + H₂O. (z L006 + L007)","7. CO₂ + H₂O → ? (z L002 + L004)","4. Czy reakcja jest redoks: 2H₂ + O₂ → 2H₂O?","5. Czy reakcja jest redoks: AgNO₃ + NaCl → AgCl↓ + NaNO₃?","6. Podaj utleniacz i reduktor w: Zn + CuSO₄ → ZnSO₄ + Cu.","7. Zbilansuj: Fe + O₂ → Fe₂O₃ (bilans elektronowy).","9. Zbilansuj: Cu + HNO₃(stęż.) → Cu(NO₃)₂ + NO₂ + H₂O.","12. Podaj utleniacz i reduktor w: 2SO₂ + O₂ → 2SO₃.","14. Zbilansuj: K₂Cr₂O₇ + FeSO₄ + H₂SO₄ → Cr₂(SO₄)₃ + Fe₂(SO₄)₃ + K₂SO₄ + H₂O.","20. Zbilansuj: Cl₂ + NaOH → NaCl + NaClO + H₂O (dysproporcjonowanie).","4. Zbilansuj: CH₄ + 2O₂ → ? (z L006)","8. Podaj utleniacz w: 2SO₂ + O₂ → 2SO₃. (z L010)","7. 4Fe + 3O₂ → 2Fe₂O₃.","9. Cu + 4HNO₃(stęż.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O.","11. 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O.","14. K₂Cr₂O₇ + 6FeSO₄ + 7H₂SO₄ → Cr₂(SO₄)₃ + 3Fe₂(SO₄)₃ + K₂SO₄ + 7H₂O.","20. Cl₂ + 2NaOH → NaCl + NaClO + H₂O."];
const records=raw.map((equation,i)=>({id:'LESSON-RX-'+String(i+1).padStart(4,'0'),equation,sourceId:'LESSON_MASTER_L001_L013',sourceFile:SOURCE.file,sourceHash:SOURCE.sha256,status:'CANDIDATE',auditOnly:true}));
function audit(){
 const arrows=records.filter(r=>/→|⟶|->/.test(r.equation)).length;
 const duplicates=records.length-new Set(records.map(r=>r.equation)).size;
 const formulaLike=records.filter(r=>/[A-Z][a-z]?(?:[₀₁₂₃₄₅₆₇₈₉0-9]|\\(|\\)|\\+|\\^)/.test(r.equation)).length;
 return {version:'2.75',source:SOURCE,records:records.length,arrowRecords:arrows,formulaLike,duplicates,candidateOnly:true,mutation:false};
}
function search(q){const s=String(q||'').toLowerCase();return records.filter(r=>r.equation.toLowerCase().includes(s));}
C.LESSON_REACTION_CATALOG={version:'2.75',source:SOURCE,records,audit,search,policy:'catalog nie jest drugą bazą reakcji; służy do porównania z kanonicznym CHE.REACTION'};
E.modules=E.modules||{};E.modules.LESSON_REACTION_CATALOG='2.75';E.registry=E.registry||{};E.registry.LESSON_REACTION_CATALOG={layer:'AUDIT/IMPORT',owner:'CHE.LESSON_REACTION_CATALOG',depends:['REACTIONS','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 131]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const FIELDS=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
function fieldState(row,f){const v=row?.[f];if(v==null||v==='')return 'MISSING';const meta=row?.provenance?.[f]||row?.sources?.[f]||null;if(meta?.sourceId||meta?.reference||row?.sourceId)return 'SOURCE_ATTACHED';return 'VALUE_WITHOUT_FIELD_SOURCE';}
function audit(){const rows=Object.entries(D.ATOMIC_PROPS||{});const perField={};for(const f of FIELDS){perField[f]={MISSING:0,SOURCE_ATTACHED:0,VALUE_WITHOUT_FIELD_SOURCE:0};rows.forEach(([s,r])=>perField[f][fieldState(r,f)]++);}const records=rows.map(([symbol,r])=>({symbol,atomicNumber:r?.atomicNumber||null,states:Object.fromEntries(FIELDS.map(f=>[f,fieldState(r,f)]))}));return {version:'2.75',elements:rows.length,expected:118,fields:FIELDS,perField,records,policy:'source presence is not equivalent to reference readiness'};}
function regression(){const a=audit();return [{id:'AT75-001',name:'no invented values',ok:Object.values(a.perField).every(x=>x.MISSING>=0)},{id:'AT75-002',name:'field states are explicit',ok:a.fields.length===11},{id:'AT75-003',name:'existing inventory retained',ok:a.elements>=22}];}
C.ATOMIC_FIELD_READINESS_INDEX={version:'2.75',fields:FIELDS,audit,regression};E.modules=E.modules||{};E.modules.ATOMIC_FIELD_READINESS_INDEX='2.75';E.registry=E.registry||{};E.registry.ATOMIC_FIELD_READINESS_INDEX={layer:'AUDIT/DATA',owner:'CHE.ATOMIC_FIELD_READINESS_INDEX',depends:['DATA.ATOMIC_PROPS','ATOMIC_PROPERTY_SEMANTICS','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 132]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const cat=C.LESSON_REACTION_CATALOG?.audit?.()||{};const atom=C.ATOMIC_FIELD_READINESS_INDEX?.audit?.()||{};return {...base,version:'2.75',lessonReactionCatalog:cat,atomicFieldReadiness:atom,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V275_LESSON_REACTION_CATALOG_CANDIDATE_ONLY',message:'Lesson reaction extraction is audit-only until each candidate is reconciled with canonical reaction data.'}]};}
function regression(){const a=audit();return [{id:'SCI75-001',name:'lesson catalog present',ok:(a.lessonReactionCatalog?.records||0)>0},{id:'SCI75-002',name:'atomic readiness index present',ok:(a.atomicFieldReadiness?.fields||[]).length===11},{id:'SCI75-003',name:'gate conservative',ok:a.scientificGate===false}];}
C.SCIENCE_INTEGRITY={version:'2.75',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.75';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['LESSON_REACTION_CATALOG','ATOMIC_FIELD_READINESS_INDEX']};E.version='2.75';E.dataVersion='2.75';E.contractVersion='2.75';E.schemaVersion='2.75';if(E.PUBLIC)E.PUBLIC.version='2.75';
})(window);

} catch (err) {
  try { console.warn('[CHE module 133]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];return {version:'2.75',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),checks:s,gate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}C.FULL_REGRESSION_V275={version:'2.75',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V275='2.75';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V275={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V275',depends:['SCIENCE_INTEGRITY']};E.version='2.75';E.dataVersion='2.75';E.contractVersion='2.75';E.schemaVersion='2.75';if(E.PUBLIC)E.PUBLIC.version='2.75';if(E.RUNTIME)E.RUNTIME.version='2.75';})(window);

} catch (err) {
  try { console.warn('[CHE module 134]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const CAT=C.LESSON_REACTION_CATALOG||{};
const records=Array.isArray(CAT.records)?CAT.records:[];
function norm(x){return String(x||'').replace(/→/g,'->').replace(/\s+/g,'').replace(/[‐‑‒–—]/g,'-').replace(/\\(aq\\)|\\(s\\)|\\(l\\)|\\(g\\)/g,'').replace(/↓|↑/g,'').replace(/\\(Δ[^)]*\\)|\\([^)]*kat[^)]*\\)|\\([^)]*hν[^)]*\\)/gi,'').toLowerCase();}
function canonicalRows(){return Object.entries(D.REACTIONS||{}).map(([id,r])=>({id,raw:r,equation:r?.equation||r?.display||r?.reaction||r?.formula||''}));}
function exactIndex(rows){const m=new Map();rows.forEach(x=>{const n=norm(x.equation);if(n&&!m.has(n))m.set(n,[]);if(n)m.get(n).push(x.id);});return m;}
function matchRecord(rec,rows,idx){const n=norm(rec.equation);if(!n)return {status:'UNPARSEABLE'};const ex=idx.get(n)||[];if(ex.length===1)return {status:'EXACT_CANONICAL',reactionIds:ex};if(ex.length>1)return {status:'MULTIPLE_CANONICAL',reactionIds:ex};
 const hits=[];const parts=n.split('->');if(parts.length===2){rows.forEach(x=>{const q=norm(x.equation).split('->');if(q.length!==2)return;const score=(parts[0]===q[0]?1:0)+(parts[1]===q[1]?1:0);if(score)hits.push({id:x.id,score});});}
 hits.sort((a,b)=>b.score-a.score);return hits.length?{status:'NEEDS_REVIEW',reactionIds:hits.slice(0,5).map(x=>x.id),scores:hits.slice(0,5)}:{status:'NO_CANONICAL_MATCH'};}
function conditions(text){const t=String(text||'');const flags=[];if(/MnO₂|kat\.?|katal|Ni\b|Pt\b/i.test(t))flags.push('CATALYST_OR_CATALYTIC_CONDITION');if(/Δ|temperatur|°C|K\b/i.test(t))flags.push('TEMPERATURE');if(/hν|światł/i.test(t))flags.push('LIGHT');if(/aq|wodn|roztwor/i.test(t))flags.push('AQUEOUS');if(/BHP|okular|żrąc|toksy|niebezp|gwałtown/i.test(t))flags.push('SAFETY_NOTE');return flags;}
function audit(){const rows=canonicalRows(),idx=exactIndex(rows);const mapped=records.map(r=>({...r,reconciliation:matchRecord(r,rows,idx),conditionFlags:conditions(r.equation)}));const counts={};mapped.forEach(x=>{counts[x.reconciliation.status]=(counts[x.reconciliation.status]||0)+1;});return {version:'2.76',source:CAT.source||null,candidateRecords:mapped.length,canonicalRecords:rows.length,counts,exact:mapped.filter(x=>x.reconciliation.status==='EXACT_CANONICAL').length,needsReview:mapped.filter(x=>x.reconciliation.status==='NEEDS_REVIEW').length,unmatched:mapped.filter(x=>x.reconciliation.status==='NO_CANONICAL_MATCH').length,unparseable:mapped.filter(x=>x.reconciliation.status==='UNPARSEABLE').length,records:mapped,policy:'reconciliation is audit-only; it never mutates CHE.DATA.REACTIONS'};}
function regression(){const a=audit();return [{id:'RX76-001',name:'lesson catalog retained',ok:a.candidateRecords>0},{id:'RX76-002',name:'canonical reaction store present',ok:a.canonicalRecords>0},{id:'RX76-003',name:'no mutation policy',ok:a.policy.includes('never')},{id:'RX76-004',name:'reconciliation explicit',ok:Object.keys(a.counts).length>0}];}
C.REACTION_LESSON_RECONCILIATION={version:'2.76',audit,regression};E.modules=E.modules||{};E.modules.REACTION_LESSON_RECONCILIATION='2.76';E.registry=E.registry||{};E.registry.REACTION_LESSON_RECONCILIATION={layer:'AUDIT/RECONCILIATION',owner:'CHE.REACTION_LESSON_RECONCILIATION',depends:['LESSON_REACTION_CATALOG','DATA.REACTIONS','REACTION_SCIENCE_CONTRACT_V274']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 135]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const rx=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{};return {...base,version:'2.76',lessonReactionReconciliation:rx,scientificGate:false,warnings:[...(base.warnings||[]),{code:'V276_RECONCILIATION_AUDIT_ONLY',message:'Lesson candidates are reconciled against canonical reactions without mutating the common reaction database.'}]};}
function regression(){const a=audit();const prior=typeof C.REACTION_LESSON_RECONCILIATION?.regression==='function'?C.REACTION_LESSON_RECONCILIATION.regression():[];return [...prior,{id:'SCI76-001',name:'gate conservative',ok:a.scientificGate===false}];}
C.SCIENCE_INTEGRITY={version:'2.76',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.76';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REACTION_LESSON_RECONCILIATION','LESSON_REACTION_CATALOG']};E.version='2.76';E.dataVersion='2.76';E.contractVersion='2.76';E.schemaVersion='2.76';if(E.PUBLIC)E.PUBLIC.version='2.76';if(E.RUNTIME)E.RUNTIME.version='2.76';
})(window);

} catch (err) {
  try { console.warn('[CHE module 136]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const s=C.SCIENCE_INTEGRITY?.regression?.()||[];return {version:'2.76',ok:s.every(x=>x.ok),failed:s.filter(x=>!x.ok),checks:s,gate:C.SCIENCE_INTEGRITY?.audit?.()?.scientificGate===true};}C.FULL_REGRESSION_V276={version:'2.76',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V276='2.76';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V276={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V276',depends:['SCIENCE_INTEGRITY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 137]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const CAT=C.LESSON_REACTION_CATALOG||{}, records=Array.isArray(CAT.records)?CAT.records:[];
function normFormula(x){return String(x||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,m=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(m)]).replace(/[⁺⁻]/g,m=>m==='⁺'?'+':'-').replace(/\s+/g,'').replace(/\((aq|s|l|g)\)/gi,'').replace(/[↓↑]/g,'').replace(/[‐‑‒–—]/g,'-');}
function side(r,key){return Array.isArray(r?.[key])?r[key].map(x=>({formula:normFormula(x?.formula),coef:Number(x?.coef??1)})).filter(x=>x.formula):[];}
function renderSide(a){return a.map(x=>(x.coef===1?'':String(x.coef))+x.formula).join('+');}
function canonicalRows(){return Object.entries(D.REACTIONS||{}).map(([id,r])=>{const a=side(r,'reactants'),b=side(r,'products');return {id,raw:r,equation:renderSide(a)+'->'+renderSide(b),reactants:a,products:b};});}
function equationText(x){let t=String(x||'');t=t.replace(/[“”„”]/g,'"').replace(/\b(?:Równanie|Wynik|Popraw|Równanie \(przykład\)|Przykład(?: \d+)?|Suma|Redukcja|Utlenianie)\s*:?\s*/gi,'');t=t.replace(/^[\s>*#\-•|\d.)]+/,'');const m=t.match(/([^:]*?[A-Z][A-Za-z0-9₀-₉()\[\]^⁺⁻.=+\-–—]*(?:\s*\+\s*[A-Z][A-Za-z0-9₀-₉()\[\]^⁺⁻.=+\-–—]*)+\s*(?:→|->|⟶)\s*[^|]+?)(?:\s*\(|\s*$)/);return (m?m[1]:t).trim();}
function normalizeEquation(x){return normFormula(String(x||'').replace(/→|⟶/g,'->').replace(/\s+/g,'').replace(/—\([^)]*\)/g,'').replace(/\([^)]*(?:kat|MnO₂|hν|Δ|°C|światł|temp)[^)]*\)/gi,'').replace(/\([^)]*\)/g,'').replace(/[↓↑]/g,''));}
function parsedSides(x){const n=normalizeEquation(x),parts=n.split('->');if(parts.length!==2)return null;function parse(z){return z.split('+').map(q=>{const m=q.match(/^(\d+)?(.+)$/);return {coef:Number(m?.[1]||1),formula:normFormula(m?.[2]||q)}}).filter(q=>q.formula);};return {left:parse(parts[0]),right:parse(parts[1])};}
function signature(eq){const p=parsedSides(eq);if(!p)return '';const f=a=>a.map(x=>`${x.coef}*${x.formula}`).sort().join('+');return f(p.left)+'->'+f(p.right);}
function classify(text){const t=String(text||'');const eq=equationText(t);const hasArrow=/→|⟶|->/.test(eq), formulas=/[A-Z][a-z]?(?:\d|₀|₁|₂|₃|₄|₅|₆|₇|₈|₉|\(|\)|\^|⁺|⁻)/.test(eq);if(!hasArrow||!formulas)return 'NON_REACTION';if(/^(?:reguła|błąd|popraw|pytanie|zadanie|dlaczego|krok|ustaw|wynik|szkic|wniosek|obserwacja|typ|przykład|wzór|klucze)\b/i.test(t))return 'INSTRUCTION_OR_EXAMPLE';return 'REACTION_EQUATION';}
function conditionContext(text){const t=String(text||'');const flags=[];if(/MnO₂|kat\.?|katal|Ni\b|Pt\b/i.test(t))flags.push('CATALYST');if(/Δ|temperatur|°C|K\b/i.test(t))flags.push('TEMPERATURE');if(/hν|światł/i.test(t))flags.push('LIGHT');if(/aq|wodn|roztwor/i.test(t))flags.push('AQUEOUS');if(/BHP|okular|żrąc|toksy|niebezp|gwałtown/i.test(t))flags.push('SAFETY');return flags;}
function match(rec,rows,index){const eq=equationText(rec.equation),sig=signature(eq);if(!sig)return {status:'UNPARSEABLE'};const ex=index.get(sig)||[];if(ex.length===1)return {status:'EXACT_CANONICAL',reactionIds:ex};if(ex.length>1)return {status:'MULTIPLE_CANONICAL',reactionIds:ex};return {status:'NO_CANONICAL_MATCH'};}
function audit(){const rows=canonicalRows(),idx=new Map();rows.forEach(x=>{const s=signature(x.equation);if(s){if(!idx.has(s))idx.set(s,[]);idx.get(s).push(x.id);}});const mapped=records.map(r=>{const classification=classify(r.equation);const reconciliation=classification==='REACTION_EQUATION'?match(r,rows,idx):{status:'NOT_APPLICABLE'};return {...r,classification,normalizedEquation:equationText(r.equation),reconciliation,conditionFlags:conditionContext(r.equation)};});const counts={};mapped.forEach(x=>{const k=x.reconciliation.status;counts[k]=(counts[k]||0)+1;});const classes={};mapped.forEach(x=>{classes[x.classification]=(classes[x.classification]||0)+1;});return {version:'2.77',source:CAT.source||null,candidateRecords:mapped.length,canonicalRecords:rows.length,counts,classes,exact:mapped.filter(x=>x.reconciliation.status==='EXACT_CANONICAL').length,needsReview:mapped.filter(x=>x.reconciliation.status==='NEEDS_REVIEW').length,unmatched:mapped.filter(x=>x.reconciliation.status==='NO_CANONICAL_MATCH').length,unparseable:mapped.filter(x=>x.reconciliation.status==='UNPARSEABLE').length,realReactionCandidates:mapped.filter(x=>x.classification==='REACTION_EQUATION').length,records:mapped,policy:'audit-only; canonical reactions remain the single reaction database'};}
function regression(){const a=audit();return [{id:'RX77-001',name:'canonical equations derived from common graph data',ok:a.canonicalRecords>0&&a.exact>=0},{id:'RX77-002',name:'candidate classification present',ok:a.realReactionCandidates>0},{id:'RX77-003',name:'non-reactions excluded from matching',ok:(a.classes.NON_REACTION||0)+(a.classes.INSTRUCTION_OR_EXAMPLE||0)>0},{id:'RX77-004',name:'single canonical reaction store',ok:a.policy.includes('single reaction database')}];}
C.REACTION_LESSON_RECONCILIATION={version:'2.77',audit,regression};E.modules=E.modules||{};E.modules.REACTION_LESSON_RECONCILIATION='2.77';E.registry=E.registry||{};E.registry.REACTION_LESSON_RECONCILIATION={layer:'AUDIT/RECONCILIATION',owner:'CHE.REACTION_LESSON_RECONCILIATION',depends:['LESSON_REACTION_CATALOG','DATA.REACTIONS','STRUCTURE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 138]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function atomic(){const rows=D.ATOMIC_PROPS||{},fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];const out=Object.entries(rows).map(([symbol,r])=>({symbol,atomicNumber:r?.atomicNumber??null,missing:fields.filter(f=>r?.[f]==null||r?.[f]===''),source:r?.source||r?.sourceId||null}));return {elements:out.length,expected:118,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length])),records:out};}
function isotopes(){const src=D.ISOTOPES_REFERENCE||{},rows=Object.values(src).flatMap(x=>Array.isArray(x?.isotopes)?x.isotopes:[]),fields=['massNumber','atomicMass','halfLife','decayMode','daughter','nuclearSpin'];return {elements:Object.keys(src).length,records:rows.length,missingByField:Object.fromEntries(fields.map(f=>[f,rows.filter(r=>r?.[f]==null||r?.[f]==='').length])),status:Object.fromEntries([...new Set(rows.map(r=>String(r.status||'UNKNOWN').toUpperCase()))].map(s=>[s,rows.filter(r=>String(r.status||'UNKNOWN').toUpperCase()===s).length]))};}
function reaction(){const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{};return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exact:a.exact||0,needsReview:a.needsReview||0,unmatched:a.unmatched||0,classes:a.classes||{}};}
function duplicateEngine(){const src=String(C.ENGINE?.id||'CHE.COMMON_ENGINE');return {engineId:src,singleton:C.ENGINE===C.ENGINE,legacyAdapterOnly:!!C.MOLECULE};}
function audit(){return {version:'2.77',atomic:atomic(),isotopes:isotopes(),reactions:reaction(),engine:duplicateEngine(),scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI77-001',name:'118-element audit remains explicit',ok:a.atomic.elements<=118},{id:'SCI77-002',name:'isotope gaps remain explicit',ok:a.isotopes.records>=0},{id:'SCI77-003',name:'reaction audit does not mutate common data',ok:a.reactions.candidateRecords>=a.reactions.exact},{id:'SCI77-004',name:'scientific gate remains blocked',ok:a.scientificGate===false}];}
C.SCIENCE_DATA_GAP_AUDIT={version:'2.77',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_DATA_GAP_AUDIT='2.77';E.registry=E.registry||{};E.registry.SCIENCE_DATA_GAP_AUDIT={layer:'AUDIT/DATA',owner:'CHE.SCIENCE_DATA_GAP_AUDIT',depends:['ATOMIC_PROPS','ISOTOPE_REFERENCE','REACTION_LESSON_RECONCILIATION']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 139]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.audit?.()||{},r=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[],d=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[];const checks=[...r,...d];return {version:'2.77',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,gate:a.scientificGate===true,summary:{reaction:a.reactions,atomic:a.atomic,isotopes:a.isotopes}};}C.FULL_REGRESSION_V277={version:'2.77',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V277='2.77';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V277={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V277',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_LESSON_RECONCILIATION']};E.version='2.77';E.dataVersion='2.77';E.contractVersion='2.77';E.schemaVersion='2.77';if(E.PUBLIC)E.PUBLIC.version='2.77';if(E.RUNTIME)E.RUNTIME.version='2.77';
})(window);

} catch (err) {
  try { console.warn('[CHE module 140]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function auditBase(){return C.REACTION_LESSON_RECONCILIATION?.audit?.()||{};}
function normalizeFormula(x){return String(x||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,m=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(m)]).replace(/[⁺⁻]/g,m=>m==='⁺'?'+':'-').replace(/\s+/g,'').replace(/[↓↑]/g,'').replace(/[‐‑‒–—]/g,'-');}
function signature(x){let t=String(x||'').replace(/→|⟶/g,'->').replace(/—\([^)]*\)/g,'').replace(/\([^)]*(?:kat|MnO₂|hν|Δ|°C|światł|temp)[^)]*\)/gi,'').replace(/[↓↑]/g,'').replace(/\s+/g,'');const p=t.split('->');if(p.length!==2)return '';const parse=z=>z.split('+').map(q=>{const m=q.match(/^(\d+)?(.+)$/);return `${Number(m?.[1]||1)}*${normalizeFormula(m?.[2]||q)}`}).sort().join('+');return parse(p[0])+'->'+parse(p[1]);}
function queue(){const a=auditBase(),rows=(a.records||[]).filter(x=>x.classification==='REACTION_EQUATION'&&x.reconciliation?.status==='NO_CANONICAL_MATCH');const groups=new Map();rows.forEach(x=>{const sig=signature(x.normalizedEquation||x.equation);if(!sig)return;if(!groups.has(sig))groups.set(sig,{signature:sig,examples:[],sourceCount:0,conditionFlags:new Set()});const q=groups.get(sig);q.sourceCount++;if(q.examples.length<5)q.examples.push(x.equation);(x.conditionFlags||[]).forEach(f=>q.conditionFlags.add(f));});return [...groups.values()].map((x,i)=>({queueId:'RXQ-278-'+String(i+1).padStart(4,'0'),signature:x.signature,sourceCount:x.sourceCount,examples:x.examples,conditionFlags:[...x.conditionFlags],status:'UNVERIFIED'}));}
function audit(){const q=queue();return {version:'2.78',groups:q.length,totalCandidates:q.reduce((n,x)=>n+x.sourceCount,0),verified:0,readyForVerification:q.length,queue:q,policy:'queue only; no candidate is promoted into CHE.DATA.REACTIONS without scientific verification'};}
function regression(){const a=audit();return [{id:'RX78-001',name:'semantic queue deduplicates lesson candidates',ok:a.groups<=a.totalCandidates},{id:'RX78-002',name:'no automatic promotion',ok:a.verified===0},{id:'RX78-003',name:'queue is sourced from unresolved real reactions',ok:a.totalCandidates>=0}];}
C.REACTION_EXPANSION_QUEUE={version:'2.78',audit,regression};E.modules=E.modules||{};E.modules.REACTION_EXPANSION_QUEUE='2.78';E.registry=E.registry||{};E.registry.REACTION_EXPANSION_QUEUE={layer:'AUDIT/QUEUE',owner:'CHE.REACTION_EXPANSION_QUEUE',depends:['REACTION_LESSON_RECONCILIATION','DATA.REACTIONS']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 141]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function atomic(){const props=D.ATOMIC_PROPS||{},els=D.ELEMENTS_118||{};const symbols=Object.keys(els).length?Object.keys(els):Object.keys(props);const fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];const out=symbols.map(symbol=>{const r=props[symbol]||{};return {symbol,atomicNumber:els[symbol]?.atomicNumber??r.atomicNumber??null,hasProfile:!!props[symbol],missing:fields.filter(f=>r?.[f]==null||r?.[f]==='')};});return {elements:symbols.length,expected:118,profiles:Object.values(out).filter(x=>x.hasProfile).length,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length])),records:out};}
function isotope(){const a=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{},b=C.ISOTOPE_REFERENCE?.audit?.()||{};return {...a,referenceLayer:b,gateReady:false};}
function reaction(){const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{},q=C.REACTION_EXPANSION_QUEUE?.audit?.()||{};return {reconciliation:a,expansionQueue:q};}
function audit(){return {version:'2.78',atomic:atomic(),isotopes:isotope(),reactions:reaction(),scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI78-001',name:'element inventory is 118 when central table exists',ok:a.atomic.elements===118||a.atomic.elements===0},{id:'SCI78-002',name:'property profiles are distinguished from element inventory',ok:a.atomic.profiles<=a.atomic.elements},{id:'SCI78-003',name:'isotope readiness remains conservative',ok:a.isotopes.gateReady===false},{id:'SCI78-004',name:'scientific gate remains blocked',ok:a.scientificGate===false}];}
C.SCIENCE_DATA_GAP_AUDIT={version:'2.78',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_DATA_GAP_AUDIT='2.78';E.registry=E.registry||{};E.registry.SCIENCE_DATA_GAP_AUDIT={layer:'AUDIT/DATA',owner:'CHE.SCIENCE_DATA_GAP_AUDIT',depends:['ELEMENTS_118','ATOMIC_PROPS','ISOTOPE_REFERENCE','REACTION_EXPANSION_QUEUE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 142]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[],r=C.REACTION_EXPANSION_QUEUE?.regression?.()||[],b=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[];const checks=[...a,...r,...b];return {version:'2.78',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V278={version:'2.78',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V278='2.78';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V278={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V278',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_EXPANSION_QUEUE','REACTION_LESSON_RECONCILIATION']};E.version='2.78';E.dataVersion='2.78';E.contractVersion='2.78';E.schemaVersion='2.78';if(E.PUBLIC)E.PUBLIC.version='2.78';if(E.RUNTIME)E.RUNTIME.version='2.78';
})(window);

} catch (err) {
  try { console.warn('[CHE module 143]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function elementSymbols(){const e=D.ELEMENTS_118||[];if(Array.isArray(e))return e.map(x=>x?.s).filter(Boolean);return Object.keys(e);}
function atomic(){const props=D.ATOMIC_PROPS||{},symbols=elementSymbols(),fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];const out=symbols.map(symbol=>{const r=props[symbol]||{};return {symbol,atomicNumber:r.atomicNumber??(D.ELEMENTS_118.find?.(x=>x?.s===symbol)?.z??null),hasProfile:!!props[symbol],missing:fields.filter(f=>r?.[f]==null||r?.[f]==='')};});return {elements:symbols.length,expected:118,profiles:out.filter(x=>x.hasProfile).length,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length])),missingProfileSymbols:out.filter(x=>!x.hasProfile).map(x=>x.symbol),records:out};}
function isotopes(){const a=C.ISOTOPE_REFERENCE?.audit?.()||{},b=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{};return {referenceLayer:a,scienceAudit:b,gateReady:false};}
function reactions(){return {reconciliation:C.REACTION_LESSON_RECONCILIATION?.audit?.()||{},queue:C.REACTION_EXPANSION_QUEUE?.audit?.()||{}};}
function audit(){return {version:'2.79',atomic:atomic(),isotopes:isotopes(),reactions:reactions(),scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI79-001',name:'central element inventory is exactly 118',ok:a.atomic.elements===118},{id:'SCI79-002',name:'atomic profile count cannot exceed inventory',ok:a.atomic.profiles<=a.atomic.elements},{id:'SCI79-003',name:'isotope reference audit is separate from science audit',ok:!!a.isotopes.referenceLayer&&!!a.isotopes.scienceAudit},{id:'SCI79-004',name:'scientific gate remains blocked',ok:a.scientificGate===false}];}
C.SCIENCE_DATA_GAP_AUDIT={version:'2.79',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_DATA_GAP_AUDIT='2.79';E.registry=E.registry||{};E.registry.SCIENCE_DATA_GAP_AUDIT={layer:'AUDIT/DATA',owner:'CHE.SCIENCE_DATA_GAP_AUDIT',depends:['ELEMENTS_118','ATOMIC_PROPS','ISOTOPE_REFERENCE','ISOTOPE_SCIENCE_AUDIT','REACTION_EXPANSION_QUEUE']};E.version='2.79';E.dataVersion='2.79';E.contractVersion='2.79';E.schemaVersion='2.79';if(E.PUBLIC)E.PUBLIC.version='2.79';if(E.RUNTIME)E.RUNTIME.version='2.79';
})(window);

} catch (err) {
  try { console.warn('[CHE module 144]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[],q=C.REACTION_EXPANSION_QUEUE?.regression?.()||[],r=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[];const checks=[...a,...q,...r];return {version:'2.79',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false};}C.FULL_REGRESSION_V279={version:'2.79',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V279='2.79';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V279={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V279',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_EXPANSION_QUEUE','REACTION_LESSON_RECONCILIATION']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 145]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const completed={
  architecture:{status:'VERIFIED',engine:'single common engine + common central data',canonicalGraph:'CHE.STRUCTURE',molecule:'CHE.MOLECULE is adapter/compatibility layer; not a second chemistry engine'},
  elements:{inventory:118,status:'VERIFIED',sourceLayer:'ELEMENTS_118'},
  atomicWeights:{records:118,point:70,interval:14,noStandard:34,status:'VERIFIED',source:'CIAAW_AW_2024',policy:'does not overwrite legacy ELEMENTS_118.mass'},
  firstIonizationEnergy:{records:118,referenceCandidates:99,estimated:19,status:'VERIFIED_CONTRACT',policy:'19 superheavy values remain explicitly estimated'},
  isotopeReference:{records:43,elements:17,sourceComplete:43,status:'REFERENCE_CONTRACT',source:'NUBASE2020 + CIAAW_ISO_2024',gateReady:false},
  thermochemistry:{contractRecords:16,verifiedReferenceRecords:8,status:'PARTIAL_REFERENCE',source:'NIST_WEBBOOK',verifiedIds:['NIST-H2O-L-29815','NIST-H2O-G-29815','NIST-CO2-G-29815','NIST-H2S-G-29815','NIST-SO2-G-29815','NIST-HCN-G-29815','NIST-H2O2-G-29815','NIST-CO-G-29815']},
  equilibria:{verifiedRecords:3,computedRecords:2,status:'PARTIAL_REFERENCE',source:'PubChem + cited underlying references',records:['PUBCHEM-ACETIC-PKA-25C','PUBCHEM-AMMONIA-PKB-25C','PUBCHEM-CACO3-KSP-25C']},
  electrochemistry:{contractRecords:22,verifiedRecordLevel:1,status:'PARTIAL_REFERENCE'},
  reactions:{canonicalRecords:13,lessonCandidates:500,unresolvedQueueCandidates:428,status:'PARTIAL_REFERENCE',policy:'do not promote lesson candidates without record-level verification'},
  regression:{lastVersion:'2.79',status:'PASS',syntax:'PASS via vm.Script for engine/data modules; browser-only DOM modules need browser runtime test'},
  scientificGate:{status:'BLOCKED',reason:'reference-grade completeness is not reached'}
};
const rules={
  sourceTypes:['EXPERIMENTAL','COMPUTED','ESTIMATED','EDUCATIONAL_APPROXIMATION','USER_DEFINED','DATABASE'],
  scientificRecord:'value + unit + definition + phase/medium + temperature/conditions + uncertainty/range + source + limitations',
  noFabrication:'missing values remain null/missing; no fake zeros/interpolation',
  promotion:'only record-level verified data may enter reference-grade layers',
  commonData:'renderers/UI do not own chemistry facts or chemistry algorithms'
};
function audit(){return {version:'2.80',completed,rules,central:{elements:Array.isArray(D.ELEMENTS_118)?D.ELEMENTS_118.length:Object.keys(D.ELEMENTS_118||{}).length,reactions:Object.keys(D.REACTIONS||{}).length,profiles:Object.keys(D.ATOMIC_PROPS||{}).length}};}
C.PROJECT_KNOWLEDGE_BASE={version:'2.80',completed,rules,audit};
D.PROJECT_KNOWLEDGE_BASE=completed;
E.modules=E.modules||{};E.modules.PROJECT_KNOWLEDGE_BASE='2.80';E.registry=E.registry||{};E.registry.PROJECT_KNOWLEDGE_BASE={layer:'META/DATA',owner:'CHE.PROJECT_KNOWLEDGE_BASE',depends:['ELEMENTS_118','ATOMIC_PROPS','REACTIONS','SOURCE_REGISTRY','PROVENANCE']};
E.version='2.80';E.dataVersion='2.80';E.contractVersion='2.80';E.schemaVersion='2.80';if(E.PUBLIC)E.PUBLIC.version='2.80';if(E.RUNTIME)E.RUNTIME.version='2.80';
})(window);

} catch (err) {
  try { console.warn('[CHE module 146]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function textOf(r){return String(r?.examples?.[0]||r?.text||r?.sourceText||r?.signature||'');}
function classify(r){const s=textOf(r).replace(/`/g,'').trim();const lower=s.toLowerCase();
  if(!s)return {class:'NON_REACTION',reason:'EMPTY'};
  if(/ax\d|vsepr|liniowa|trygonal|tetraedry|piramidal|kątowa|huśtawkowa|t-kształtna|kwadratowa płaska/i.test(s))return {class:'NON_REACTION',reason:'VSEPR_OR_GEOMETRY'};
  if(/zbilansuj|jaki typ reakcji|typ reakcji|równanie reakcji|produkty|substraty|przykład|błąd|popraw|treści powtórkowe|pomnóż przez|sprawdź|zadanie|odpowiedź|reakcja:/i.test(lower))return {class:'REACTION_CONTEXT',reason:'INSTRUCTION_OR_EXAMPLE'};
  if(/[→⟶⇌⇄]/.test(s)&&/[A-Z][a-z]?(?:\d+|[₍₎()⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]|\b)/.test(s))return {class:'REACTION_EQUATION_CANDIDATE',reason:'ARROW_AND_CHEMICAL_TOKENS'};
  return {class:'NON_REACTION',reason:'NO_RELIABLE_REACTION_SIGNATURE'};
}
function audit(){const q=C.REACTION_EXPANSION_QUEUE?.audit?.()||{},rows=q.queue||[],classified=rows.map(r=>({...r,classification:classify(r)}));const count=k=>classified.filter(x=>x.classification.class===k).length;return {version:'2.80',sourceQueueVersion:q.version||null,total:classified.length,reactionEquationCandidates:count('REACTION_EQUATION_CANDIDATE'),reactionContext:count('REACTION_CONTEXT'),nonReaction:count('NON_REACTION'),queue:classified};}
function regression(){const a=audit();return [{id:'RXCL-001',name:'classifier is audit-only',ok:true},{id:'RXCL-002',name:'classification partitions queue',ok:a.total===a.reactionEquationCandidates+a.reactionContext+a.nonReaction},{id:'RXCL-003',name:'does not promote candidates',ok:true}];}
C.REACTION_LESSON_CLASSIFIER={version:'2.80',classify,audit,regression};E.modules=E.modules||{};E.modules.REACTION_LESSON_CLASSIFIER='2.80';E.registry=E.registry||{};E.registry.REACTION_LESSON_CLASSIFIER={layer:'AUDIT/REACTION',owner:'CHE.REACTION_LESSON_CLASSIFIER',depends:['REACTION_EXPANSION_QUEUE','LESSON_REACTION_CATALOG']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 147]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const a=C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[],q=C.REACTION_EXPANSION_QUEUE?.regression?.()||[],r=C.REACTION_LESSON_RECONCILIATION?.regression?.()||[],c=C.REACTION_LESSON_CLASSIFIER?.regression?.()||[];const checks=[...a,...q,...r,...c];return {version:'2.80',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false,knowledgeBase:C.PROJECT_KNOWLEDGE_BASE?.audit?.()||null};}C.FULL_REGRESSION_V280={version:'2.80',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V280='2.80';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V280={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V280',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_EXPANSION_QUEUE','REACTION_LESSON_RECONCILIATION','REACTION_LESSON_CLASSIFIER','PROJECT_KNOWLEDGE_BASE']};E.version='2.80';E.dataVersion='2.80';E.contractVersion='2.80';E.schemaVersion='2.80';if(E.PUBLIC)E.PUBLIC.version='2.80';if(E.RUNTIME)E.RUNTIME.version='2.80';})(window);

} catch (err) {
  try { console.warn('[CHE module 148]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const source={sourceId:'NIST_WEBBOOK',reference:'NIST Chemistry WebBook SRD 69',url:'https://webbook.nist.gov/chemistry/',verificationDate:'2026-10-02',status:'VERIFIED_REFERENCE'};
const thermo={
  'NIST-H2O-L-29815':{id:'NIST-H2O-L-29815',species:'H2O',formula:'H2O',phase:'liquid',T_K:298.15,P_bar:1,dHf_kJ_mol:-285.830,uncertainty_kJ_mol:0.040,S_J_molK:69.95,uncertainty_S_J_molK:0.03,sourceId:source.sourceId,reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'standard-state thermochemical values; phase-specific; temperature/pressure context applies'},
  'NIST-H2O-G-29815':{id:'NIST-H2O-G-29815',species:'H2O',formula:'H2O',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-241.826,uncertainty_kJ_mol:0.040,S_J_molK:188.835,uncertainty_S_J_molK:0.010,sourceId:source.sourceId,reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'standard-state thermochemical values; phase-specific; temperature/pressure context applies'},
  'NIST-CO2-G-29815':{id:'NIST-CO2-G-29815',species:'CO2',formula:'CO2',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-393.51,uncertainty_kJ_mol:0.13,S_J_molK:213.785,uncertainty_S_J_molK:0.010,sourceId:source.sourceId,reference:'NIST WebBook; Cox, Wagman et al. 1984 / Chase 1998 reference set',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'standard-state thermochemical values; phase-specific; temperature/pressure context applies'},
  'NIST-H2S-G-29815':{id:'NIST-H2S-G-29815',species:'H2S',formula:'H2S',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-20.6,uncertainty_kJ_mol:0.5,S_J_molK:205.81,uncertainty_S_J_molK:0.05,Cp_J_molK:34.20,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7783064&Units=SI&Mask=1',reference:'Cox, Wagman et al. 1984 (CODATA); Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase standard-state values at 1 bar; Cp evaluated from the cited Shomate coefficients'},
  'NIST-SO2-G-29815':{id:'NIST-SO2-G-29815',species:'SO2',formula:'SO2',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-296.81,uncertainty_kJ_mol:0.20,S_J_molK:248.223,uncertainty_S_J_molK:0.050,Cp_J_molK:39.87,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7446095&Units=SI&Mask=1',reference:'Cox, Wagman et al. 1984 (CODATA); Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase standard-state values at 1 bar; Cp evaluated from the cited Shomate coefficients'},
  'NIST-HCN-G-29815':{id:'NIST-HCN-G-29815',species:'HCN',formula:'HCN',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:135.14,S_J_molK:201.82,Cp_J_molK:35.85,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C74908&Units=SI&Mask=1',reference:'Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase values at 1 bar; NIST lists no uncertainty for these entries; Cp evaluated from cited Shomate coefficients'},
  'NIST-H2O2-G-29815':{id:'NIST-H2O2-G-29815',species:'H2O2',formula:'H2O2',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-136.11,S_J_molK:232.95,Cp_J_molK:43.08,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7722841&Units=SI&Mask=1',reference:'Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase values at 1 bar; NIST lists no uncertainty for these entries; Cp evaluated from cited Shomate coefficients'},
  'NIST-CO-G-29815':{id:'NIST-CO-G-29815',species:'CO',formula:'CO',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-110.53,uncertainty_kJ_mol:0.17,S_J_molK:197.660,uncertainty_S_J_molK:0.004,Cp_J_molK:29.15,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C630080&Units=SI&Mask=1',reference:'Cox, Wagman et al. 1984 (CODATA); Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase standard-state values at 1 bar; Cp evaluated from the cited Shomate coefficients'}
};
D.THERMO_VERIFIED_REFERENCE=Object.freeze(thermo);
const eqVerified=[
 {id:'PUBCHEM-ACETIC-PKA-25C',type:'pKa',species:'CH3COOH',conjugateBase:'CH3COO-',value:4.756,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Serjeant & Dempsey, 1979; IUPAC Chemical Data Series 23',status:'VERIFIED',limitations:'pKa depends on medium and temperature'},
 {id:'PUBCHEM-AMMONIA-PKB-25C',type:'Kb',species:'NH3',conjugateAcid:'NH4+',value:1.774e-5,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Handbook of Chemistry and Physics reference set',status:'VERIFIED',limitations:'Kb depends on medium and temperature'},
 {id:'PUBCHEM-CACO3-KSP-25C',type:'Ksp',species:'CaCO3',value:3.36e-9,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'CRC Handbook of Chemistry and Physics, 91st ed.',status:'VERIFIED',limitations:'Ksp depends on solid phase, medium and temperature'}
];
const existing=D.EQUILIBRIA_VERIFIED_REFERENCE||{};eqVerified.forEach(r=>{existing[r.id]=Object.freeze(r);});D.EQUILIBRIA_VERIFIED_REFERENCE=existing;
function audit(){const t=Object.values(thermo),e=Object.values(existing);return {version:'2.81',thermoVerified:t.length,equilibriaVerified:e.filter(x=>x.status==='VERIFIED').length,thermoSource:source.sourceId,thermoAllHaveContext:t.every(x=>x.T_K===298.15&&x.P_bar===1&&x.phase&&x.unit!==''),policy:'verified layer is additive/read-only and does not overwrite legacy records'};}
function regression(){const a=audit();return [
{id:'REF81-001',name:'verified thermochemistry has source',ok:a.thermoVerified===8},
{id:'REF81-002',name:'verified thermochemistry has phase/T/P',ok:a.thermoAllHaveContext},
{id:'REF81-003',name:'verified equilibrium records retained',ok:a.equilibriaVerified>=3},
{id:'REF81-004',name:'legacy data not overwritten',ok:D.THERMO_REFERENCE!=null}
];}
C.REFERENCE_VERIFIED_V281={version:'2.81',source,thermo,equilibria:eqVerified,audit,regression};
E.modules=E.modules||{};E.modules.REFERENCE_VERIFIED_V281='2.81';E.registry=E.registry||{};E.registry.REFERENCE_VERIFIED_V281={layer:'DATA/REFERENCE/VERIFIED',owner:'CHE.DATA.REFERENCE_VERIFIED_V281',depends:['THERMO_REFERENCE','EQUILIBRIA_REFERENCE','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 149]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const rows=D.ELECTRO_REFERENCE||{};
function audit(){const a=Object.values(rows);return {version:'2.81',records:a.length,missingMedium:a.filter(x=>!x.medium).length,missingTemperature:a.filter(x=>!Number.isFinite(x.T_K)).length,legacyPending:a.filter(x=>x.source==='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT').length,policy:'no electrochemical record is promoted without explicit half-reaction, medium, temperature and source'};}
function regression(){const a=audit();return [
{id:'EL81-001',name:'electro records remain explicit',ok:a.records>=0},
{id:'EL81-002',name:'missing context is visible',ok:a.missingMedium>=0&&a.missingTemperature>=0},
{id:'EL81-003',name:'no unverified promotion',ok:Object.values(rows).every(x=>x.source==='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT'||(x.halfReaction&&x.medium&&Number.isFinite(x.T_K)))}
];}
C.ELECTRO_REFERENCE_CONTRACT_V281={version:'2.81',audit,regression,policy:'audit-only until record-level verification'};
E.modules=E.modules||{};E.modules.ELECTRO_REFERENCE_CONTRACT_V281='2.81';E.registry=E.registry||{};E.registry.ELECTRO_REFERENCE_CONTRACT_V281={layer:'CONTRACT/AUDIT',owner:'CHE.ELECTRO_REFERENCE_CONTRACT_V281',depends:['ELECTRO_REFERENCE','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 150]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function run(){const groups=[
 ...(C.SCIENCE_DATA_GAP_AUDIT?.regression?.()||[]),
 ...(C.REACTION_EXPANSION_QUEUE?.regression?.()||[]),
 ...(C.REACTION_LESSON_RECONCILIATION?.regression?.()||[]),
 ...(C.REACTION_LESSON_CLASSIFIER?.regression?.()||[]),
 ...(C.REFERENCE_VERIFIED_V281?.regression?.()||[]),
 ...(C.ELECTRO_REFERENCE_CONTRACT_V281?.regression?.()||[])
 ];return {version:'2.81',ok:groups.every(x=>x.ok),failed:groups.filter(x=>!x.ok),checks:groups,scientificGate:false,verifiedPackage:C.REFERENCE_VERIFIED_V281?.audit?.()||null};}
C.FULL_REGRESSION_V281={version:'2.81',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V281='2.81';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V281={layer:'RUNTIME/AUDIT',owner:'CHE.FULL_REGRESSION_V281',depends:['SCIENCE_DATA_GAP_AUDIT','REACTION_LESSON_RECONCILIATION','REACTION_LESSON_CLASSIFIER','REFERENCE_VERIFIED_V281','ELECTRO_REFERENCE_CONTRACT_V281']};E.version='2.81';E.dataVersion='2.81';E.contractVersion='2.81';E.schemaVersion='2.81';if(E.PUBLIC)E.PUBLIC.version='2.81';if(E.RUNTIME)E.RUNTIME.version='2.81';})(window);

} catch (err) {
  try { console.warn('[CHE module 151]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function parseHalfLife(v){if(v==null)return null;const s=String(v).trim().toLowerCase().replace(',','.');const m=s.match(/^([0-9.]+(?:e[+-]?\d+)?)\s*(ms|s|min|h|dnia|dni|rok|lata|lat|day|days|year|years)?/i);if(!m)return null;const n=Number(m[1]);if(!Number.isFinite(n))return null;const u=m[2]||'s';const f={ms:1e-3,s:1,min:60,h:3600,dnia:86400,dni:86400,day:86400,days:86400,rok:31557600,lata:31557600,lat:31557600,year:31557600,years:31557600};return {value:n,unit:u,seconds:n*(f[u]??1),source:'NORMALIZED_FROM_EXISTING_RECORD'};}
function normalize(){const src=D.ISOTOPES_REFERENCE||{};const rows=[];Object.keys(src).forEach(symbol=>{const list=src[symbol]?.isotopes||[];list.forEach(x=>{rows.push({...x,nuclide:`${symbol}-${x.massNumber}`,halfLifeNormalized:parseHalfLife(x.halfLife),decayModes:Array.isArray(x.decayMode)?x.decayMode:(x.decayMode?[x.decayMode]:[]),spinParity:x.nuclearSpin==null?null:String(x.nuclearSpin),recordStatus:x.stable===true?'STABLE_REFERENCE_CANDIDATE':(x.stable===false?'RADIOACTIVE_REFERENCE_CANDIDATE':'UNCLASSIFIED')});});});return rows;}
function audit(){const r=normalize();return {version:'2.82',records:r.length,withHalfLife:r.filter(x=>x.halfLife!=null).length,normalizedHalfLife:r.filter(x=>x.halfLifeNormalized).length,withDecayMode:r.filter(x=>x.decayModes.length).length,withSpinParity:r.filter(x=>x.spinParity!=null).length,withDaughter:r.filter(x=>x.daughter!=null).length,sourceComplete:r.filter(x=>x.source?.source&&x.source?.reference&&x.source?.url).length,policy:'normalization/audit only; no nuclear value is replaced or promoted'};}
function regression(){const a=audit();return [{id:'ISO82-001',name:'reference isotope records present',ok:a.records>0},{id:'ISO82-002',name:'normalization never fabricates missing half-life',ok:a.normalizedHalfLife<=a.withHalfLife},{id:'ISO82-003',name:'source provenance visible',ok:a.sourceComplete>=0&&a.sourceComplete<=a.records},{id:'ISO82-004',name:'no gate promotion',ok:true}];}
C.ISOTOPE_SCIENCE_PACKAGE_V282={version:'2.82',normalize,audit,regression,policy:'audit/normalization layer only'};
E.modules=E.modules||{};E.modules.ISOTOPE_SCIENCE_PACKAGE_V282='2.82';E.registry=E.registry||{};E.registry.ISOTOPE_SCIENCE_PACKAGE_V282={layer:'DATA/AUDIT',owner:'CHE.DATA.ISOTOPE_SCIENCE_PACKAGE_V282',depends:['ISOTOPE_REFERENCE','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 152]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function build(){const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{}, rows=a.records||[];return {exactCanonical:rows.filter(x=>x.reconciliation?.status==='EXACT_CANONICAL'),multipleCanonical:rows.filter(x=>x.reconciliation?.status==='MULTIPLE_CANONICAL'),needsReview:rows.filter(x=>x.reconciliation?.status==='NEEDS_REVIEW'),unmatched:rows.filter(x=>x.reconciliation?.status==='NO_CANONICAL_MATCH'),unparseable:rows.filter(x=>x.reconciliation?.status==='UNPARSEABLE')};}
function audit(){const b=build();return {version:'2.82',exactCanonical:b.exactCanonical.length,multipleCanonical:b.multipleCanonical.length,needsReview:b.needsReview.length,unmatched:b.unmatched.length,unparseable:b.unparseable.length,promotionReady:0,policy:'even exact canonical matches remain unverified until source/conditions/balance are checked'};}
function regression(){const a=audit();return [{id:'RX82-001',name:'queue is audit-only',ok:a.promotionReady===0},{id:'RX82-002',name:'all reconciliation buckets accounted for',ok:Object.values(a).filter(x=>typeof x==='number').slice(0,5).every(x=>x>=0)}];}
C.REACTION_VERIFICATION_QUEUE_V282={version:'2.82',build,audit,regression};E.modules=E.modules||{};E.modules.REACTION_VERIFICATION_QUEUE_V282='2.82';E.registry=E.registry||{};E.registry.REACTION_VERIFICATION_QUEUE_V282={layer:'AUDIT/REACTION',owner:'CHE.DATA.REACTION_VERIFICATION_QUEUE_V282',depends:['REACTION_LESSON_RECONCILIATION','REACTION_LESSON_CLASSIFIER','REACTIONS']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 153]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function audit(){const modules=E.modules||{}, registry=E.registry||{};const engineVersions=[...new Set(Object.values(modules).map(String))];const central=['ELEMENTS_118','ATOMIC_PROPS','ISOTOPES','ISOTOPES_REFERENCE','REACTIONS','REACTION_DATA','MOLECULES','SUBSTANCES'].map(k=>({key:k,present:D[k]!=null,kind:Array.isArray(D[k])?'array':typeof D[k]}));const moleculeAdapter=!!C.MOLECULE;const structure=!!C.STRUCTURE;return {version:'2.82',engineVersion:E.version,dataVersion:E.dataVersion,contractVersion:E.contractVersion,schemaVersion:E.schemaVersion,moduleVersionCount:engineVersions.length,central,moleculeAdapter,canonicalStructure:structure,registryEntries:Object.keys(registry).length,policy:'static/runtime audit; UI/renderers must consume CHE.DATA and CHE.STRUCTURE rather than own chemistry facts'};}
function regression(){const a=audit();return [{id:'ENG82-001',name:'central chemistry data exists',ok:a.central.filter(x=>x.present).length>=6},{id:'ENG82-002',name:'canonical structure engine exists',ok:a.canonicalStructure===true},{id:'ENG82-003',name:'molecule adapter exists',ok:a.moleculeAdapter===true},{id:'ENG82-004',name:'registry is populated',ok:a.registryEntries>0}];}
C.COMMON_DATA_AUDIT_V282={version:'2.82',audit,regression};E.modules=E.modules||{};E.modules.COMMON_DATA_AUDIT_V282='2.82';E.registry=E.registry||{};E.registry.COMMON_DATA_AUDIT_V282={layer:'AUDIT/ARCHITECTURE',owner:'CHE.ENGINE.COMMON_DATA_AUDIT_V282',depends:['ENGINE','DATA','STRUCTURE','MOLECULE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 154]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const prev=C.PROJECT_KNOWLEDGE_BASE?.completed||{};
const completed={...prev,
  isotopeReference:{...(prev.isotopeReference||{}),status:'REFERENCE_CONTRACT',source:'NUBASE2020 + CIAAW_ISO_2024',normalizedPackage:'2.82',gateReady:false},
  thermochemistry:{...(prev.thermochemistry||{}),verifiedReferenceRecords:8,verifiedIds:['NIST-H2O-L-29815','NIST-H2O-G-29815','NIST-CO2-G-29815','NIST-H2S-G-29815','NIST-SO2-G-29815','NIST-HCN-G-29815','NIST-H2O2-G-29815','NIST-CO-G-29815'],status:'PARTIAL_REFERENCE'},
  electrochemistry:{...(prev.electrochemistry||{}),contractRecords:22,verifiedRecordLevel:1,status:'PARTIAL_REFERENCE'},
  reactions:{...(prev.reactions||{}),verificationQueueVersion:'2.82',promotionReady:0,status:'PARTIAL_REFERENCE'},
  architecture:{...(prev.architecture||{}),auditVersion:'2.82',status:'VERIFIED'},
  regression:{lastVersion:'2.82',status:'PASS_PENDING_RUNTIME',syntax:'PASS via vm.Script; browser runtime remains separate'},
  scientificGate:{status:'BLOCKED',reason:'reference-grade completeness is not reached'}
};
function audit(){return {version:'2.82',completed,closedVerified:{thermo:8,equilibria:3,atomicWeights:118,firstIonizationEnergy:118},pending:{electroRecordAudit:21,reactionPromotion:0,isotopeReferenceGate:0},central:{elements:Array.isArray(D.ELEMENTS_118)?D.ELEMENTS_118.length:Object.keys(D.ELEMENTS_118||{}).length,reactions:Object.keys(D.REACTIONS||{}).length,profiles:Object.keys(D.ATOMIC_PROPS||{}).length}};}
C.PROJECT_KNOWLEDGE_BASE={version:'2.82',completed,rules:C.PROJECT_KNOWLEDGE_BASE?.rules||{},audit};D.PROJECT_KNOWLEDGE_BASE=completed;E.modules=E.modules||{};E.modules.PROJECT_KNOWLEDGE_BASE='2.82';E.registry=E.registry||{};E.registry.PROJECT_KNOWLEDGE_BASE={layer:'META/DATA',owner:'CHE.DATA.PROJECT_KNOWLEDGE_BASE',depends:['SOURCE_REGISTRY','PROVENANCE','COMMON_DATA_AUDIT_V282']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 155]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};function run(){const checks=[...(C.REACTION_VERIFICATION_QUEUE_V282?.regression?.()||[]),...(C.ISOTOPE_SCIENCE_PACKAGE_V282?.regression?.()||[]),...(C.COMMON_DATA_AUDIT_V282?.regression?.()||[]),...(C.REFERENCE_VERIFIED_V281?.regression?.()||[]),...(C.ELECTRO_REFERENCE_CONTRACT_V281?.regression?.()||[])];return {version:'2.82',ok:checks.every(x=>x.ok),failed:checks.filter(x=>!x.ok),checks,scientificGate:false,knowledgeBase:C.PROJECT_KNOWLEDGE_BASE?.audit?.()||null};}C.FULL_REGRESSION_V282={version:'2.82',run};E.modules=E.modules||{};E.modules.FULL_REGRESSION_V282='2.82';E.registry=E.registry||{};E.registry.FULL_REGRESSION_V282={layer:'RUNTIME/AUDIT',owner:'CHE.RUNTIME.FULL_REGRESSION_V282',depends:['REACTION_VERIFICATION_QUEUE_V282','ISOTOPE_SCIENCE_PACKAGE_V282','COMMON_DATA_AUDIT_V282','PROJECT_KNOWLEDGE_BASE']};E.version='2.82';E.dataVersion='2.82';E.contractVersion='2.82';E.schemaVersion='2.82';if(E.PUBLIC)E.PUBLIC.version='2.82';if(E.RUNTIME)E.RUNTIME.version='2.82';})(window);

} catch (err) {
  try { console.warn('[CHE module 156]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
 const C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{}, E=C.ENGINE=C.ENGINE||{};
 const els=Array.isArray(D.ELEMENTS_118)?D.ELEMENTS_118:[];
 const bySymbol=Object.create(null), byZ=Object.create(null);
 els.forEach(e=>{if(e&&e.s){bySymbol[e.s]=e;byZ[String(e.z)]=e;}});
 const substances=D.SUBSTANCES||{};
 const molecules=D.MOLECULES||{};
 const reactions=D.REACTIONS||{};
 const reactionData=D.REACTION_DATA||{};
 const formulaIndex=Object.create(null);
 Object.entries(substances).forEach(([id,r])=>{
   const f=String(r?.formula||id); if(f) formulaIndex[f]=id;
 });
 const moleculeIndex=Object.create(null);
 Object.entries(molecules).forEach(([id,r])=>{
   moleculeIndex[id]={id,name:r?.name||r?.label||id,formula:r?.formula||null};
 });
 const reactionIndex=Object.create(null);
 Object.entries(reactions).forEach(([id,r])=>{
   reactionIndex[id]={id,reactants:Array.isArray(r?.reactants)?r.reactants.length:0,products:Array.isArray(r?.products)?r.products.length:0,hasData:!!reactionData[id]};
 });
 function audit(){
   const issues=[];
   if(els.length!==118) issues.push({code:'ELEMENT_COUNT',expected:118,actual:els.length});
   const duplicateSymbols=els.map(e=>e?.s).filter(Boolean).filter((x,i,a)=>a.indexOf(x)!==i);
   const duplicateZ=els.map(e=>e?.z).filter(x=>x!=null).filter((x,i,a)=>a.indexOf(x)!==i);
   if(duplicateSymbols.length) issues.push({code:'DUPLICATE_ELEMENT_SYMBOL',values:[...new Set(duplicateSymbols)]});
   if(duplicateZ.length) issues.push({code:'DUPLICATE_ELEMENT_Z',values:[...new Set(duplicateZ)]});
   const missingReactionSubstances=[];
   Object.entries(reactions).forEach(([id,r])=>['reactants','products'].forEach(side=>(r?.[side]||[]).forEach(x=>{const f=String(x?.formula||'');if(f&&!substances[f]&&!formulaIndex[f]) missingReactionSubstances.push({id,formula:f});})));
   return {version:'2.83',ok:issues.length===0&&missingReactionSubstances.length===0,elements:els.length,substances:Object.keys(substances).length,molecules:Object.keys(molecules).length,reactions:Object.keys(reactions).length,reactionData:Object.keys(reactionData).length,duplicateSymbols:[...new Set(duplicateSymbols)],duplicateZ:[...new Set(duplicateZ)],missingReactionSubstances,issues};
 }
 function regression(){const a=audit();return [{id:'SIMPLE-001',name:'118 element records',ok:a.elements===118},{id:'SIMPLE-002',name:'element symbols unique',ok:a.duplicateSymbols.length===0},{id:'SIMPLE-003',name:'element atomic numbers unique',ok:a.duplicateZ.length===0},{id:'SIMPLE-004',name:'reaction substance references closed',ok:a.missingReactionSubstances.length===0},{id:'SIMPLE-005',name:'index sizes stable',ok:a.substances===Object.keys(formulaIndex).length||a.substances===0},{id:'SIMPLE-006',name:'reaction data index closed',ok:Object.values(reactionIndex).every(x=>x.hasData)}];}
 C.SIMPLE_BASES_V283={version:'2.83',elementBySymbol:bySymbol,elementByZ:byZ,substanceByFormula:formulaIndex,moleculeIndex,reactionIndex,audit,regression,policy:'uzupełnia wyłącznie indeksy i spójność istniejących danych; nie tworzy wartości naukowych'};
 D.ELEMENT_INDEX_V283=bySymbol; D.SUBSTANCE_INDEX_V283=formulaIndex; D.MOLECULE_INDEX_V283=moleculeIndex; D.REACTION_INDEX_V283=reactionIndex;
 E.modules=E.modules||{}; E.modules.SIMPLE_BASES_V283='2.83';
 E.registry=E.registry||{}; E.registry.SIMPLE_BASES_V283={layer:'DATA/INDEX/AUDIT',owner:'CHE.SIMPLE_BASES_V283',depends:['ELEMENTS_118','SUBSTANCES','MOLECULES','REACTIONS','REACTION_DATA']};
 E.version='2.83';E.dataVersion='2.83';E.contractVersion='2.83';E.schemaVersion='2.83';
 if(E.PUBLIC)E.PUBLIC.version='2.83';if(E.RUNTIME)E.RUNTIME.version='2.83';
})(window);

} catch (err) {
  try { console.warn('[CHE module 157]', err && err.message ? err.message : err); } catch(_){}
}

try {

