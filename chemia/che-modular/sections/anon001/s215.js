

try {

window.CHE=window.CHE||{};
CHE.PROJECT_REQUIREMENTS_LOCK_V331={
  policyId:'CHE.PROJECT_REQUIREMENTS_LOCK_V331',
  version:'3.31',
  permanent:true,
  overwritePolicy:'DO_NOT_OVERWRITE_UNFINISHED_REQUIREMENTS',
  statuses:['OPEN','IN_PROGRESS','DONE','VERIFIED','LOCKED'],
  rules:{
    rememberNeeds:true,
    reuseExistingFindings:true,
    doNotRepeatSearchWhenLocked:true,
    markCompleted:true,
    preserveCompleted:true,
    appendNewDataOnly:true,
    forceReverify:'FORCE_REVERIFY'
  },
  requirements:[
    ['ARCH-001','ONE_COMMON_ENGINE_AND_DATA','LOCKED'],
    ['ARCH-002','CHE.STRUCTURE_IS_CANONICAL_MOLECULAR_GRAPH','LOCKED'],
    ['ARCH-003','CHE.DATA_IS_SINGLE_SHARED_DATA_LAYER','LOCKED'],
    ['SCI-001','REFERENCE_DATA_REQUIRES_VALUE_UNIT_DEFINITION_CONDITIONS_SOURCE_LIMITATIONS','LOCKED'],
    ['SCI-002','VERIFIED_RECORDS_USE_DETERMINISTIC_FINGERPRINT','LOCKED'],
    ['SCI-003','INTRODUCED_IS_NOT_REFERENCE_READY','LOCKED'],
    ['EDU-001','SP7_8_PRIORITY','IN_PROGRESS'],
    ['EDU-002','LO_BIOL_CHEM_PRIORITY','IN_PROGRESS'],
    ['VIS-001','WORKING_2D_3D_MOLECULE_VIEWS','IN_PROGRESS'],
    ['VIS-002','ANGLES_AND_BOND_ORDERS_VISIBLE','IN_PROGRESS'],
    ['ATOM-001','ELECTRONS_VALENCE_SUBSHELLS_ORBITALS','IN_PROGRESS'],
    ['RXN-001','L001_L013_CANONICAL_RECONCILIATION','IN_PROGRESS'],
    ['RXN-002','REDOX_ELECTRON_BALANCE','IN_PROGRESS'],
    ['CALC-001','STOICHIOMETRY_ENGINE','IN_PROGRESS'],
    ['LAB-001','BHP_AND_EXPERIMENT_MATRIX','IN_PROGRESS'],
    ['TEST-001','BROWSER_RUNTIME_SMOKE_TEST','OPEN']
  ],
  setStatus(id,status){const r=this.requirements.find(x=>x[0]===id);if(r)r[2]=status;return !!r;},
  getStatus(id){const r=this.requirements.find(x=>x[0]===id);return r?r[2]:null;},
  open(){return this.requirements.filter(x=>x[2]==='OPEN');},
  active(){return this.requirements.filter(x=>x[2]==='IN_PROGRESS');},
  completed(){return this.requirements.filter(x=>x[2]==='DONE'||x[2]==='VERIFIED'||x[2]==='LOCKED');},
  audit(){return {policy:this.policyId,permanent:this.permanent,total:this.requirements.length,open:this.open().length,inProgress:this.active().length,completed:this.completed().length};}
};

} catch (err) {
  try { console.warn('[CHE module 217]', err && err.message ? err.message : err); } catch(_){}
}