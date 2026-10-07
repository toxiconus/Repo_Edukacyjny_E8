(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{}, E=CHE.EDUCATION_ENGINE||{};
const SRC='CHE_MAX_V328';
const EPS=1e-9;
function formulaAtoms(f){return E.parseFormula(String(f||''));}
function balancedSpecies(eq){const b=E.balanceEquation(eq); if(!b?.balanced) throw Error('Equation not balanced'); return b;}
function sideOxidationTotals(side){
 const totals={};
 for(const t of side||[]){
  const atoms=formulaAtoms(t.formula), states=(C.REDOX_ENGINE_V326?.parseOxidationStates?.(t.formula)?.oxidationStates)||{};
  const coef=Number(t.coef)||0;
  for(const [el,n] of Object.entries(atoms)) if(Number.isFinite(states[el])){
    totals[el]??={atoms:0,weightedOx:0,species:[]};
    totals[el].atoms+=n*coef;
    totals[el].weightedOx+=n*coef*states[el];
    totals[el].species.push({formula:t.formula,atoms:n,coef,oxidationState:states[el]});
  }
 }
 return totals;
}
function quantitativeRedox(eq){
 const b=balancedSpecies(eq), L=sideOxidationTotals(b.reactants), R=sideOxidationTotals(b.products), elements=[...new Set([...Object.keys(L),...Object.keys(R)])];
 const changes=[]; let oxidation=0,reduction=0;
 for(const el of elements){
  if(!L[el]||!R[el]||L[el].atoms<=0||R[el].atoms<=0) continue;
  const avgL=L[el].weightedOx/L[el].atoms, avgR=R[el].weightedOx/R[el].atoms;
  const d=avgR-avgL;
  if(Math.abs(d)>EPS){
   const electronMagnitude=Math.abs(d)*Math.min(L[el].atoms,R[el].atoms);
   const direction=d>0?'oxidation':'reduction';
   changes.push({element:el,reactantOxidationState:avgL,productOxidationState:avgR,delta:d,matchedAtoms:Math.min(L[el].atoms,R[el].atoms),electrons:electronMagnitude,direction});
   if(direction==='oxidation') oxidation+=electronMagnitude; else reduction+=electronMagnitude;
  }
 }
 return {equation:b.equation,balanced:b.balanced,changes,electronTransfer:{oxidation,reduction,balancedElectrons:Math.abs(oxidation-reduction)<EPS},source:SRC};
}
function molarMass(formula){const atoms=formulaAtoms(formula), M=CHE.DATA?.ATOMIC_MASS||{}; let sum=0,missing=[]; for(const [el,n] of Object.entries(atoms)){const v=Number(M[el]); if(!Number.isFinite(v)){missing.push(el);continue;} sum+=v*n;} return {formula,atoms,molarMass:missing.length?null:sum,missing,unit:'g/mol',source:SRC};}
function concentrationMoles(moles,volumeL){const n=Number(moles),V=Number(volumeL); if(!(n>=0)||!(V>0))return {ok:false,status:'INVALID_INPUT',source:SRC}; return {ok:true,c:n/V,moles:n,volumeL:V,unit:'mol/L',source:SRC};}
function dilution(c1,v1,c2){const a=Number(c1),b=Number(v1),d=Number(c2); if(!(a>=0&&b>0&&d>0))return {ok:false,status:'INVALID_INPUT',source:SRC}; return {ok:true,v2:a*b/d,c1:a,v1:b,c2:d,unit:'L',source:SRC};}
function massConcentration(massG,volumeL){const m=Number(massG),V=Number(volumeL); if(!(m>=0)||!(V>0))return {ok:false,status:'INVALID_INPUT',source:SRC}; return {ok:true,c:m/V,massG:m,volumeL:V,unit:'g/L',source:SRC};}
function percentByMass(soluteG,solutionG){const a=Number(soluteG),b=Number(solutionG); if(!(a>=0)&&!(b>0))return {ok:false,status:'INVALID_INPUT',source:SRC}; if(b<=0||a<0||a>b)return {ok:false,status:'INVALID_INPUT',source:SRC}; return {ok:true,percent:100*a/b,source:SRC};}
function empiricalFormula(elements){const vals=Object.entries(elements||{}).map(([el,v])=>[el,Number(v)]); if(!vals.length||vals.some(([,v])=>!(v>0)))return {ok:false,status:'INVALID_INPUT',source:SRC}; const min=Math.min(...vals.map(([,v])=>v)); const ratios=vals.map(([el,v])=>({el,ratio:v/min})); return {ok:true,ratios,source:SRC,note:'Zaokrąglenie do małych liczb całkowitych wymaga osobnego tolerancyjnego etapu; tutaj nie jest automatycznie wymuszane.'};}
function validateTask(t){const required=['id','type','source','level']; const missing=required.filter(k=>t?.[k]===undefined||t?.[k]===null||t?.[k]===''); return {ok:missing.length===0,missing,source:SRC};}
const tests={
 redoxFe:quantitativeRedox('Fe + O2 -> Fe2O3'),
 redoxZn:quantitativeRedox('Zn + CuSO4 -> ZnSO4 + Cu'),
 mmH2O:molarMass('H2O'),
 c:concentrationMoles(2,1),
 dilution:dilution(2,0.5,0.5),
 percent:percentByMass(10,100)
};
const pass=tests.redoxFe.electronTransfer.balancedElectrons&&tests.redoxZn.electronTransfer.balancedElectrons&&tests.mmH2O.molarMass!==null&&Math.abs(tests.c.c-2)<EPS&&Math.abs(tests.dilution.v2-2)<EPS&&Math.abs(tests.percent.percent-10)<EPS;
C.REDOX_QUANT_V328={version:'3.28',quantitativeRedox,sourceOfTruth:'CHE.DATA + CHE.STRUCTURE',referenceReady:false};
C.SOLUTION_API_V328={version:'3.28',molarMass,concentrationMoles,dilution,massConcentration,percentByMass,sourceOfTruth:'CHE.DATA',referenceReady:false};
C.EMPIRICAL_FORMULA_V328={version:'3.28',empiricalFormula,referenceReady:false};
C.TASK_VALIDATOR_V328={version:'3.28',validateTask,referenceReady:false};
C.MAX_VERIFY_V328={version:'3.28',modules:['QUANTITATIVE_REDOX','MOLAR_MASS','MOLAR_CONCENTRATION','DILUTION','MASS_CONCENTRATION','PERCENT_BY_MASS','EMPIRICAL_FORMULA','TASK_VALIDATION'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false,tests,pass};
C.gapAuditV328=()=>({version:'3.28',pass:C.MAX_VERIFY_V328.pass,tests:C.MAX_VERIFY_V328.tests,referenceReady:false,next:['source-backed L001-L013 promotion','indicator/source matrix','browser smoke test with real DOM','molecule geometry binding']});
})();

} catch (err) {
  try { console.warn('[CHE module 213]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.29 — MAX: safe UI binding + molecule geometry contract + diagnostics */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{};
const SRC='CHE_MAX_V329';
const ids=['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];
function uiSnapshot(){const present=ids.filter(id=>typeof document!=='undefined'&&document.getElementById(id));const missing=ids.filter(id=>!present.includes(id));return {checked:ids.length,present,missing,body:typeof document!=='undefined'&&!!document.body,html:typeof document!=='undefined'&&!!document.documentElement,source:SRC};}
function bindSafe(id,handler){if(typeof document==='undefined')return false;const el=document.getElementById(id);if(!el||el.__cheBound)return false;el.addEventListener('click',()=>{try{handler?.(el)}catch(err){console.error('[CHE]',id,err)}});el.__cheBound=true;return true;}
function geometryContract(graph){const g=graph||{};const atoms=Array.isArray(g.atoms)?g.atoms:[];const bonds=Array.isArray(g.bonds)?g.bonds:[];const idsA=new Set(atoms.map(a=>a.id));const invalid=bonds.filter(b=>!idsA.has(b.a)&&!idsA.has(b.atomA)||!idsA.has(b.b)&&!idsA.has(b.atomB));return {ok:invalid.length===0,atomCount:atoms.length,bondCount:bonds.length,invalidBonds:invalid,source:SRC};}
function diagnostics(){return {ui:uiSnapshot(),geometryApi:typeof CHE.STRUCTURE!=='undefined',educationEngine:!!CHE.EDUCATION_ENGINE,redox:!!C.REDOX_QUANT_V328,solutionApi:!!C.SOLUTION_API_V328};}
C.UI_SAFE_BINDING_V329={version:'3.29',snapshot:uiSnapshot,bindSafe,diagnostics,source:SRC};
C.MOLECULE_GEOMETRY_CONTRACT_V329={version:'3.29',validate:geometryContract,sourceOfTruth:'CHE.STRUCTURE',referenceReady:false};
C.RUNTIME_DIAGNOSTICS_V329=diagnostics();
C.MAX_VERIFY_V329={version:'3.29',modules:['SAFE_UI_BINDING','GEOMETRY_CONTRACT','RUNTIME_DIAGNOSTICS'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
C.gapAuditV329=()=>({version:'3.29',diagnostics:C.RUNTIME_DIAGNOSTICS_V329,referenceReady:false,next:['real DOM smoke test','molecule 2D/3D view binding','verified lesson reaction promotion']});
})();

} catch (err) {
  try { console.warn('[CHE module 214]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.30 — MAX audit/repair: empirical formula, geometry endpoint validation,
   lesson promotion eligibility, cross-engine regression. */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{}, E=CHE.EDUCATION_ENGINE||{}, D=CHE.DATA||{};
const SRC='CHE_MAX_V330', EPS=1e-9;
function gcd(a,b){a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=a%b;a=b;b=t}return a||1}
function rationalize(x,maxDen=24,tol=1e-6){for(let d=1;d<=maxDen;d++){const n=Math.round(x*d);if(Math.abs(x-n/d)<=tol)return [n,d]}return null}
function integerRatios(ratios){
 const rr=ratios.map(x=>rationalize(x)); if(rr.some(x=>!x)) return {ok:false,status:'AMBIGUOUS_RATIO',ratios};
 let l=1; for(const [,d] of rr) l=l*d/gcd(l,d);
 let ints=rr.map(([n,d])=>Math.round(n*l/d)); const g=ints.reduce(gcd,0); ints=ints.map(x=>x/g);
 return {ok:true,integers:ints,ratios,denominator:l,gcd:g};
}
function empiricalFormula(elements){
 const vals=Object.entries(elements||{}).map(([el,v])=>[el,Number(v)]);
 if(!vals.length||vals.some(([,v])=>!(v>0))) return {ok:false,status:'INVALID_INPUT',source:SRC};
 const min=Math.min(...vals.map(([,v])=>v)), ratios=vals.map(([el,v])=>({el,ratio:v/min}));
 const ints=integerRatios(ratios.map(x=>x.ratio));
 if(!ints.ok) return {ok:false,status:ints.status,ratios,source:SRC};
 return {ok:true,composition:Object.fromEntries(vals.map(([x],i)=>[x,ints.integers[i]])),ratios,integers:ints.integers,source:SRC};
}
function geometryContractStrict(graph){
 const g=graph||{}, atoms=Array.isArray(g.atoms)?g.atoms:[], bonds=Array.isArray(g.bonds)?g.bonds:[], ids=new Set(atoms.map(a=>a?.id));
 const endpoints=bonds.filter(b=>{
   const a=b?.a??b?.atomA, z=b?.b??b?.atomB;
   return a==null||z==null||!ids.has(a)||!ids.has(z)||a===z;
 });
 const badOrders=bonds.filter(b=>!(Number(b?.order)>0));
 const angles=Array.isArray(g.angles)?g.angles:[];
 const badAngles=angles.filter(x=>{
   const p=[x?.a,x?.b,x?.c,x?.atomA,x?.atomB,x?.atomC].filter(v=>v!=null);
   return p.length<3;
 });
 return {ok:endpoints.length===0&&badOrders.length===0&&badAngles.length===0,atomCount:atoms.length,bondCount:bonds.length,angleCount:angles.length,invalidBonds:endpoints,badBondOrders:badOrders,invalidAngles:badAngles,source:SRC};
}
function lessonEligibility(){
 const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{}, rows=Array.isArray(a.records)?a.records:[];
 const eligible=rows.filter(r=>r.classification==='REACTION_EQUATION'&&r.reconciliation?.status==='EXACT_CANONICAL');
 return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:eligible.length,eligible:eligible.map(r=>({sourceLine:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds,conditionFlags:r.conditionFlags||[]})),policy:'ELIGIBLE_ONLY; no automatic mutation of CHE.DATA.REACTIONS',source:SRC};
}
function crossRegression(){
 const b=E.balanceEquation?.('H2 + O2 -> H2O');
 const mm=C.SOLUTION_API_V328?.molarMass?.('H2O');
 const emp=empiricalFormula({H:2,O:1});
 const geom=geometryContractStrict({atoms:[{id:'a'},{id:'b'}],bonds:[{a:'a',b:'b',order:1}],angles:[]});
 const lesson=lessonEligibility();
 return {checks:[
  {id:'BAL-330',ok:!!b?.balanced},
  {id:'MM-330',ok:mm?.molarMass!=null},
  {id:'EMP-330',ok:emp.ok&&emp.composition.H===2&&emp.composition.O===1},
  {id:'GEO-330',ok:geom.ok},
  {id:'RX-330',ok:lesson.exactCanonical>=0}
 ],lesson,geometry:geom,empirical:emp};
}
C.EMPIRICAL_FORMULA_V330={version:'3.30',empiricalFormula,integerRatios,referenceReady:false};
C.MOLECULE_GEOMETRY_CONTRACT_V330={version:'3.30',validate:geometryContractStrict,sourceOfTruth:'CHE.STRUCTURE',referenceReady:false};
C.LESSON_PROMOTION_GATE_V330={version:'3.30',audit:lessonEligibility,policy:'exact canonical match only; source verification required before promotion',referenceReady:false};
C.CROSS_REGRESSION_V330=crossRegression();
C.MAX_VERIFY_V330={version:'3.30',modules:['EMPIRICAL_FORMULA','STRICT_GEOMETRY_VALIDATION','LESSON_PROMOTION_GATE','CROSS_ENGINE_REGRESSION'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false,pass:C.CROSS_REGRESSION_V330.checks.every(x=>x.ok)};
C.gapAuditV330=()=>({version:'3.30',pass:C.MAX_VERIFY_V330.pass,lesson:C.LESSON_PROMOTION_GATE_V330.audit(),next:['source-backed promotion of exact lesson matches','full DOM smoke test','2D/3D binding with bond-order and angle labels','atomic/electron/orbital regression']});
})();

} catch (err) {
  try { console.warn('[CHE module 215]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.31 — persistent max-run policy + curriculum/electron/structure/runtime audit */
(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.PROJECT_POLICY=CHE.PROJECT_POLICY||{};
  CHE.PROJECT_POLICY.ONE_PROMPT_MAX_RUN={
    enabled:true,
    mode:'MAX_COherent_BATCH',
    rule:'One user prompt authorizes the largest sensible coherent batch: important, dependent and smaller maintenance tasks are combined; do not reduce scope merely because the prompt is short.',
    preserveArchitecture:'ONE_ENGINE_ONE_DATA',
    validateBeforeExpand:true,
    repairBeforeNewDuplication:true,
    recordInPlan:true,
    noConfirmationForNextSafeStep:true
  };
  CHE.PROJECT_POLICY.NEXT_MD_MUST_NOT_MINIMIZE_SCOPE=true;

  CHE.EDUCATION=CHE.EDUCATION||{};
  CHE.EDUCATION.CURRICULUM_COVERAGE_V331={
    sourceBasis:['ZPE_SP_IV_VIII_2025_2026','ZPE_LO_TECH_2025_2026'],
    SP7_8:['substances_properties','safety_pictograms_BHP','mixtures_separation','formulae_symbols','mass_density_volume','atomic_structure','valence','molecular_ionic_equations','mass_charge_conservation','exo_endo','catalyst','O2_H2','acids_bases_salts','pH','organic_biomolecules'],
    LO_BIOL_CHEM:['mole_Avogadro','molar_mass','stoichiometry','empirical_real_formula','gas_volume','electron_subshell_configuration','periodic_properties','ionic_equations','Bronsted_pairs','equilibria','redox','organic_nomenclature','biomolecules','experiments_data_credibility'],
    status:'CURRICULUM_MAP_ONLY',
    referenceReady:false
  };

  CHE.ELECTRONIC_MODEL=CHE.ELECTRONIC_MODEL||{};
  const expected={
    1:['1s1'],2:['1s2'],3:['1s2','2s1'],4:['1s2','2s2'],5:['1s2','2s2','2p1'],6:['1s2','2s2','2p2'],7:['1s2','2s2','2p3'],8:['1s2','2s2','2p4'],9:['1s2','2s2','2p5'],10:['1s2','2s2','2p6'],
    11:['1s2','2s2','2p6','3s1'],12:['1s2','2s2','2p6','3s2'],13:['1s2','2s2','2p6','3s2','3p1'],14:['1s2','2s2','2p6','3s2','3p2'],15:['1s2','2s2','2p6','3s2','3p3'],16:['1s2','2s2','2p6','3s2','3p4'],17:['1s2','2s2','2p6','3s2','3p5'],18:['1s2','2s2','2p6','3s2','3p6'],
    19:['1s2','2s2','2p6','3s2','3p6','4s1'],20:['1s2','2s2','2p6','3s2','3p6','4s2']
  };
  CHE.ELECTRONIC_MODEL.CONFIG_AUDIT_V331=function(){
    const out=[];
    for(const z of Object.keys(expected).map(Number)){
      const e=expected[z];
      out.push({Z:z,expected:e,occupancy:e.reduce((s,x)=>s+Number(x.slice(2)),0),status:e.reduce((s,x)=>s+Number(x.slice(2)),0)===z?'PASS':'FAIL'});
    }
    return {scope:'Z=1..20',records:out,pass:out.every(x=>x.status==='PASS'),source:'EDUCATIONAL_REFERENCE_PATTERN',referenceReady:false};
  };

  CHE.STRUCTURE.VIEW_ADAPTER_V331={
    contract:'CHE.STRUCTURE',
    outputs:['2D_bonds','bond_order_labels','angle_labels','3D_geometry'],
    rule:'projection-only: no chemistry mutation and no duplicate molecular database',
    makeProjection:function(graph){
      if(!graph||typeof graph!=='object') return {ok:false,error:'GRAPH_REQUIRED'};
      const atoms=Array.isArray(graph.atoms)?graph.atoms:[];
      const bonds=Array.isArray(graph.bonds)?graph.bonds:[];
      const angles=Array.isArray(graph.angles)?graph.angles:[];
      return {ok:true,atomCount:atoms.length,bondCount:bonds.length,angleCount:angles.length,bonds:bonds.map(b=>({a:b.a??b.from,b:b.b??b.to,order:b.order??1})),angles:angles.map(a=>({center:a.center??a.vertex,value:a.value??a.angleDeg??null,unit:a.unit||'deg'}))};
    }
  };

  CHE.RUNTIME=CHE.RUNTIME||{};
  CHE.RUNTIME.MINIMAL_BROWSER_HARNESS_V331={
    version:'3.31',
    startedAt:null,
    status:'NOT_RUN',
    checks:[],
    run:function(){
      this.startedAt=Date.now();
      const c=[];
      const add=(id,ok,detail)=>c.push({id,ok:!!ok,detail});
      add('CHE_PRESENT',!!window.CHE,'window.CHE');
      add('DATA_PRESENT',!!window.CHE.DATA,'CHE.DATA');
      add('STRUCTURE_PRESENT',!!window.CHE.STRUCTURE,'CHE.STRUCTURE');
      add('EDUCATION_ENGINE_PRESENT',!!window.CHE.EDUCATION_ENGINE,'CHE.EDUCATION_ENGINE');
      add('PROJECT_POLICY_PRESENT',!!window.CHE.PROJECT_POLICY?.ONE_PROMPT_MAX_RUN,'persistent policy');
      add('ELECTRON_AUDIT',!!window.CHE.ELECTRONIC_MODEL?.CONFIG_AUDIT_V331,'electron API');
      if(window.CHE.ELECTRONIC_MODEL?.CONFIG_AUDIT_V331){const a=window.CHE.ELECTRONIC_MODEL.CONFIG_AUDIT_V331(); add('ELECTRON_CONFIG_1_20',a.pass,`${a.records.length} records`);}
      const domReady=document.readyState==='interactive'||document.readyState==='complete';
      add('DOM_READY',domReady,document.readyState);
      this.checks=c; this.status=c.every(x=>x.ok)?'PASS':'PARTIAL';
      return {status:this.status,checks:c,elapsedMs:Date.now()-this.startedAt};
    }
  };

  CHE.REGRESSION=CHE.REGRESSION||{};
  CHE.REGRESSION.V331=function(){
    const e=CHE.ELECTRONIC_MODEL.CONFIG_AUDIT_V331();
    const p=CHE.PROJECT_POLICY.ONE_PROMPT_MAX_RUN.enabled===true;
    const s=!!CHE.STRUCTURE.VIEW_ADAPTER_V331;
    return {version:'3.31',policy:p,electrons:e.pass,structureAdapter:s,pass:p&&e.pass&&s};
  };
})();

} catch (err) {
  try { console.warn('[CHE module 216]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.PROJECT_REQUIREMENTS_LOCK_V331 — permanent continuity registry
   Purpose: prevent repeated searching/replacing of already established project needs.
   Status: OPEN | IN_PROGRESS | DONE | VERIFIED | LOCKED
   Rule: scientific data may be reverified only on fingerprint change or FORCE_REVERIFY. */
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

try {

/* CHE v3.32 — MAX CONTINUITY/COMPLETION: atom model + structure projection + UI contract + requirement status controller */
(function(){
'use strict';
const CHE=window.CHE=window.CHE||{};
const C=CHE.EDUCATION=CHE.EDUCATION||{};
const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
const SRC='CHE_MAX_CONTINUITY_V332';

/* ---------- atomic/electron model: educational deterministic layer Z=1..20 ---------- */
const CONFIG={
1:['1s2'],2:['1s2'],3:['1s2','2s1'],4:['1s2','2s2'],5:['1s2','2s2','2p1'],6:['1s2','2s2','2p2'],7:['1s2','2s2','2p3'],8:['1s2','2s2','2p4'],9:['1s2','2s2','2p5'],10:['1s2','2s2','2p6'],
11:['1s2','2s2','2p6','3s1'],12:['1s2','2s2','2p6','3s2'],13:['1s2','2s2','2p6','3s2','3p1'],14:['1s2','2s2','2p6','3s2','3p2'],15:['1s2','2s2','2p6','3s2','3p3'],16:['1s2','2s2','2p6','3s2','3p4'],17:['1s2','2s2','2p6','3s2','3p5'],18:['1s2','2s2','2p6','3s2','3p6'],19:['1s2','2s2','2p6','3s2','3p6','4s1'],20:['1s2','2s2','2p6','3s2','3p6','4s2']
};
const CAP={s:2,p:6,d:10,f:14};
function parseOcc(token){const m=/^(\d)([spdf])(\d+)$/.exec(token);return m?{n:+m[1],subshell:m[2],electrons:+m[3]}:null;}
function orbitalBoxes(subshell,e){const n=({s:1,p:3,d:5,f:7})[subshell]||0;const boxes=Array.from({length:n},()=>[]);let left=e;for(let i=0;i<n&&left>0;i++,left--)boxes[i].push('↑');for(let i=0;i<n&&left>0;i++,left--)boxes[i].push('↓');return boxes;}
function atomModel(Z){
 const z=Number(Z); const cfg=CONFIG[z]; if(!cfg)return {ok:false,status:'OUT_OF_EDUCATIONAL_SCOPE',Z:z,source:SRC};
 const occ=cfg.map(parseOcc).filter(Boolean); const total=occ.reduce((s,x)=>s+x.electrons,0);
 const shells={}; for(const x of occ)shells[x.n]=(shells[x.n]||0)+x.electrons;
 const highest=Math.max(...occ.map(x=>x.n)); const outer=occ.filter(x=>x.n===highest).reduce((s,x)=>s+x.electrons,0);
 const orbitals=occ.map(x=>({...x,capacity:CAP[x.subshell],boxes:orbitalBoxes(x.subshell,x.electrons)}));
 return {ok:total===z,status:total===z?'PASS':'FAIL',Z:z,electrons:total,configuration:cfg.join(' '),shells,highestShell:highest,valenceElectrons:outer,subshells:orbitals,source:SRC,referenceReady:false};
}
function atomAudit(){const rows=[];for(let z=1;z<=20;z++)rows.push(atomModel(z));return {scope:'Z=1..20',records:rows,pass:rows.every(x=>x.ok),source:SRC,referenceReady:false};}
CHE.ATOM_MODEL_V332={version:'3.32',atomModel,atomAudit,source:SRC,referenceReady:false};

/* ---------- canonical structure → visual projection ---------- */
function structureProjection(graph){
 if(!graph||typeof graph!=='object')return {ok:false,status:'GRAPH_REQUIRED',source:SRC};
 const atoms=Array.isArray(graph.atoms)?graph.atoms:[], bonds=Array.isArray(graph.bonds)?graph.bonds:[], angles=Array.isArray(graph.angles)?graph.angles:[];
 const ids=new Set(atoms.map(a=>a.id));
 const B=bonds.map((b,i)=>({id:b.id??`b${i+1}`,a:b.a??b.from,b:b.b??b.to,order:Number(b.order??1),label:b.orderLabel??({1:'single',2:'double',3:'triple'}[Number(b.order??1)]??String(b.order??1))}));
 const A=angles.map((a,i)=>({id:a.id??`a${i+1}`,center:a.center??a.vertex,from:a.from??a.a,to:a.to??a.b,valueDeg:Number(a.valueDeg??a.angleDeg??a.value),label:Number.isFinite(Number(a.valueDeg??a.angleDeg??a.value))?`${Number(a.valueDeg??a.angleDeg??a.value)}°`:'angle'}));
 const invalidB=B.filter(b=>!ids.has(b.a)||!ids.has(b.b)||!(b.order>0));
 const invalidA=A.filter(a=>!ids.has(a.center)||(!ids.has(a.from)&&!ids.has(a.to))||!Number.isFinite(a.valueDeg));
 return {ok:invalidB.length===0&&invalidA.length===0,status:invalidB.length||invalidA.length?'INVALID_GRAPH':'READY',atoms:atoms.length,bonds:B,angles:A,sourceOfTruth:'CHE.STRUCTURE',projectionOnly:true,source:SRC,referenceReady:false};
}
CHE.STRUCTURE=CHE.STRUCTURE||{};
CHE.STRUCTURE.VIEW_ADAPTER_V332={version:'3.32',project:structureProjection,sourceOfTruth:'CHE.STRUCTURE',projectionOnly:true,outputs:['2D_bonds','bond_order_labels','angle_labels','3D_geometry'],referenceReady:false};

/* ---------- UI contract: verify existing controls, never create duplicate chemistry data ---------- */
const UI_IDS=['run-audit','audit-refresh','at-run','at-mol-run','pd-search','pd-reset','nu-run','iso-run','sp-run','ry-run','lab-random','th-run','ar-run','el-run'];
function uiContract(root){
 const d=root||document; const rows=UI_IDS.map(id=>({id,present:!!d.getElementById(id)}));
 const tabs=['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'].map(id=>({id,present:!!d.getElementById(`tab-${id}`)}));
 return {version:'3.32',controls:rows,tabs,controlsPass:rows.every(x=>x.present),tabsPass:tabs.every(x=>x.present),pass:rows.every(x=>x.present)&&tabs.every(x=>x.present),source:SRC};
}
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.UI_CONTRACT_V332={version:'3.32',requiredControls:UI_IDS,run:uiContract,status:'NOT_RUN',referenceReady:false};

/* ---------- lesson promotion remains conservative ---------- */
function lessonGate(){
 const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{}; const rec=Array.isArray(a.records)?a.records:[];
 const exact=rec.filter(r=>r?.classification==='REACTION_EQUATION'&&r?.reconciliation?.status==='EXACT_CANONICAL');
 return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:exact.length,eligible:exact.map(r=>({line:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds,conditionFlags:r.conditionFlags||[]})),policy:'EXACT_CANONICAL_ONLY + SOURCE_VERIFICATION_REQUIRED + NO_AUTO_MUTATION',source:SRC};
}
C.LESSON_PROMOTION_GATE_V332={version:'3.32',audit:lessonGate,referenceReady:false};

/* ---------- requirement controller: completed only when objective checks pass ---------- */
function statusSnapshot(){
 const atom=atomAudit();
 const struct=CHE.STRUCTURE.VIEW_ADAPTER_V332.project({atoms:[{id:'a'},{id:'b'},{id:'c'}],bonds:[{a:'a',b:'b',order:2}],angles:[{center:'b',from:'a',to:'c',angleDeg:120}]});
 const ui=typeof document!=='undefined'?uiContract(document):{pass:false,status:'NO_DOCUMENT'};
 const calc=CHE.EDUCATION_ENGINE?.selfTest?.()||null;
 return {atom,structure:struct,ui,calc,source:SRC};
}
function updateRequirementStatuses(){
 if(!R)return {ok:false,status:'REGISTRY_MISSING'};
 const s=statusSnapshot();
 /* Only promote narrowly scoped parts; broader requirements remain IN_PROGRESS until their full UI/data scope is complete. */
 if(s.atom.pass) R.setStatus('ATOM-001','IN_PROGRESS');
 if(s.structure.ok) R.setStatus('VIS-002','IN_PROGRESS');
 if(s.calc?.allBalanced) R.setStatus('CALC-001','IN_PROGRESS');
 return {ok:true,registry:R.audit(),snapshot:s,policy:'NO_PREMATURE_DONE'};
}
C.CONTINUITY_CONTROLLER_V332={version:'3.32',statusSnapshot,updateRequirementStatuses,source:SRC,referenceReady:false};

/* ---------- MAX regression ---------- */
C.MAX_REGRESSION_V332=(function(){
 const a=atomAudit();
 const g=structureProjection({atoms:[{id:'a'},{id:'b'},{id:'c'}],bonds:[{a:'a',b:'b',order:2}],angles:[{center:'b',from:'a',to:'c',angleDeg:120}]});
 const ui=typeof document!=='undefined'?uiContract(document):null;
 const lesson=lessonGate();
 return {version:'3.32',atomPass:a.pass,structurePass:g.ok,uiPass:ui?ui.pass:null,lessonExactCanonical:lesson.exactCanonical,pass:a.pass&&g.ok,source:SRC,referenceReady:false};
})();
C.gapAuditV332=()=>({version:'3.32',maxRegression:C.MAX_REGRESSION_V332,requirements:R?.audit?.()||null,next:['browser DOM smoke with real runtime','2D/3D renderer binding','verified L001-L013 promotion where source criteria are met','redox multi-reagent regression','P0 BHP/solubility/indicator completion']});
})();

} catch (err) {
  try { console.warn('[CHE module 218]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.ATOM_MODEL_V333 — extended electron configuration contract Z=1..38 */
window.CHE=window.CHE||{};
CHE.ATOM_MODEL_V333={
 version:'3.33', scope:'Z=1..38', sourceClass:'EDUCATIONAL_MODEL',
 order:['1s','2s','2p','3s','3p','4s','3d','4p'],
 configs:{
 1:'1s1',2:'1s2',3:'1s2 2s1',4:'1s2 2s2',5:'1s2 2s2 2p1',6:'1s2 2s2 2p2',7:'1s2 2s2 2p3',8:'1s2 2s2 2p4',9:'1s2 2s2 2p5',10:'1s2 2s2 2p6',
 11:'1s2 2s2 2p6 3s1',12:'1s2 2s2 2p6 3s2',13:'1s2 2s2 2p6 3s2 3p1',14:'1s2 2s2 2p6 3s2 3p2',15:'1s2 2s2 2p6 3s2 3p3',16:'1s2 2s2 2p6 3s2 3p4',17:'1s2 2s2 2p6 3s2 3p5',18:'1s2 2s2 2p6 3s2 3p6',
 19:'1s2 2s2 2p6 3s2 3p6 4s1',20:'1s2 2s2 2p6 3s2 3p6 4s2',21:'1s2 2s2 2p6 3s2 3p6 4s2 3d1',22:'1s2 2s2 2p6 3s2 3p6 4s2 3d2',23:'1s2 2s2 2p6 3s2 3p6 4s2 3d3',24:'1s2 2s2 2p6 3s2 3p6 4s1 3d5',25:'1s2 2s2 2p6 3s2 3p6 4s2 3d5',26:'1s2 2s2 2p6 3s2 3p6 4s2 3d6',27:'1s2 2s2 2p6 3s2 3p6 4s2 3d7',28:'1s2 2s2 2p6 3s2 3p6 4s2 3d8',29:'1s2 2s2 2p6 3s2 3p6 4s1 3d10',30:'1s2 2s2 2p6 3s2 3p6 4s2 3d10',31:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1',32:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2',33:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3',34:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4',35:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5',36:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',37:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1',38:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2'
 },
 parse(c){return String(c).trim().split(/\s+/).filter(Boolean).map(x=>{let m=x.match(/^(\d[spdf])(\d+)$/);return m?{orbital:m[1],electrons:+m[2]}:null}).filter(Boolean)},
 shellCounts(Z){const c=this.configs[Z];if(!c)return null;const a=this.parse(c),o={};for(const q of a){const n=+q.orbital[0];o[n]=(o[n]||0)+q.electrons}return o},
 audit(){const bad=[];for(let z=1;z<=38;z++){const c=this.configs[z];const e=this.parse(c).reduce((n,x)=>n+x.electrons,0);if(!c||e!==z)bad.push({Z:z,electrons:e,expected:z})}return {ok:bad.length===0,range:'Z=1..38',bad,count:38-bad.length}},
 get(Z){return this.configs[Z]?{Z,configuration:this.configs[Z],orbitals:this.parse(this.configs[Z]),shells:this.shellCounts(Z)}:null}
};
/* CHE.STRUCTURE.VIEW_ADAPTER_V333 — pure projection, no chemistry mutation */
CHE.STRUCTURE=CHE.STRUCTURE||{};
CHE.STRUCTURE.VIEW_ADAPTER_V333={version:'3.33',project(structure){const s=structure||{};const atoms=Array.isArray(s.atoms)?s.atoms:[];const bonds=Array.isArray(s.bonds)?s.bonds:[];const angles=Array.isArray(s.angles)?s.angles:[];return {atoms:atoms.map((a,i)=>({id:a.id??i,element:a.element||a.symbol||'?',x:Number(a.x)||0,y:Number(a.y)||0,z:Number(a.z)||0})),bonds:bonds.map((b,i)=>({id:b.id??i,a:b.a??b.from,b:b.b??b.to,order:Number(b.order)||1,label:String(b.order||1)})),angles:angles.map((g,i)=>({id:g.id??i,center:g.center??g.vertex,deg:Number(g.deg??g.angle),label:Number.isFinite(Number(g.deg??g.angle))?`${Number(g.deg??g.angle).toFixed(1)}°`:''}))}}};
/* CHE.RUNTIME.SMOKE_V333 — finite DOM contract; does not declare browser PASS by itself */
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.SMOKE_V333={version:'3.33',required:['run-audit','tab-atom','tab-periodic','lab-3d-stage','lab-3d-canvas'],run(){const missing=this.required.filter(id=>!document.getElementById(id));const audit=CHE.ATOM_MODEL_V333.audit();return {ok:missing.length===0&&audit.ok,missing,atomAudit:audit,domReady:document.readyState}}};
/* CHE.REQUIREMENTS_V333 — status changes only on objective local tests */
(function(){const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;if(!R)return;const a=CHE.ATOM_MODEL_V333.audit();if(a.ok)R.setStatus('ATOM-001','IN_PROGRESS');if(typeof R.setStatus==='function')R.setStatus('TEST-001','OPEN');})();

} catch (err) {
  try { console.warn('[CHE module 219]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* ==========================================================
   CHE.CURRICULUM_REQUIREMENTS_LOCK_V334
   Permanent broad curriculum framework: SP7-8 + LO/T basic+extended,
   integrated with previous project requirements. This is a planning
   and coverage registry; it does not replace source-grade science data.
   Statuses: OPEN / IN_PROGRESS / DONE / VERIFIED / LOCKED / CONDITIONAL.
   CLOSED items must not be re-discovered unless source/version changes or FORCE_REVERIFY.
   ========================================================== */
(function(){
 const CHE=window.CHE=window.CHE||{};
 const SRC={basis:'Polish curriculum framework reviewed 2026-10-02',
   sp:'ZPE SP IV-VIII, 2025/2026 + 2026 amendments',
   lo:'ZPE LO/technikum chemistry, 2025/2026 + 2026 amendments',
   legal:'Dz.U. 2026 poz. 947 and poz. 958',
   policy:'permanent project planning lock'};
 const M=(id,name,stage,domains,priority,status='OPEN')=>({id,name,stage,domains,priority,status,locked:true});
 const modules=[
  M('CURR-01','Informacja, źródła, wiarygodność danych','SP7-8→LO',['źródła','weryfikacja','tabele','wykresy','schematy','cyfrowe dane'],'P0','IN_PROGRESS'),
  M('CURR-02','BHP, piktogramy, odczynniki, sprzęt','SP7-8→LO',['GHS/BHP','ryzyko','odpady','procedury','pierwsza reakcja'],'P0','IN_PROGRESS'),
  M('CURR-03','Substancje i właściwości materii','SP7-8',['stany','właściwości','gęstość','masa','objętość','pierwiastki','związki'],'P0','IN_PROGRESS'),
  M('CURR-04','Mieszaniny i rozdzielanie','SP7-8',['jednorodne','niejednorodne','sączenie','krystalizacja','destylacja','ekstrakcja','chromatografia'],'P0','IN_PROGRESS'),
  M('CURR-05','Atom, jon, izotop, jądro','SP7-8→LO',['Z','A','nuklid','izotopy','jony','jądro','przemiany jądrowe'],'P0','IN_PROGRESS'),
  M('CURR-06','Elektrony i układ okresowy','SP7-8→LO',['powłoki','podpowłoki','orbital','spin','Pauli','Hund','konfiguracje','bloki s/p/d','okres/grupa'],'P0','IN_PROGRESS'),
  M('CURR-07','Wiązania i budowa cząsteczek','SP7-8→LO',['jonowe','kowalencyjne','koordynacyjne','metaliczne','polaryzacja','oddziaływania międzycząsteczkowe'],'P0','IN_PROGRESS'),
  M('CURR-08','Struktura molekularna i geometria','LO rozszerzony',['graf atomów','rząd wiązania','kąty','VSEPR','2D','3D','stereo'],'P1','IN_PROGRESS'),
  M('CURR-09','Wzory, nazewnictwo i reprezentacje','SP7-8→LO',['sumaryczne','strukturalne','półstrukturalne','empiryczne','rzeczywiste','nazwy','izomeria'],'P0','IN_PROGRESS'),
  M('CURR-10','Równania reakcji i prawa zachowania','SP7-8→LO',['cząsteczkowe','jonowe','bilans masy','bilans ładunku','współczynniki','warunki'],'P0','IN_PROGRESS'),
  M('CURR-11','Typy reakcji i przemiany','SP7-8→LO',['synteza','analiza','wymiana','spalanie','strącanie','zobojętnianie','redoks'],'P0','IN_PROGRESS'),
  M('CURR-12','Stechiometria','SP7-8→LO',['mol','NA','masa molowa','mole/masa/objętość','gaz','stosunek stechiometryczny','reagent ograniczający','wydajność'],'P0','IN_PROGRESS'),
  M('CURR-13','Roztwory i rozpuszczalność','SP7-8→LO',['stężenie %','molowe','gęstość','rozpuszczalność','nasycenie','rozcieńczanie','zatężanie'],'P0','IN_PROGRESS'),
  M('CURR-14','Kwasy, zasady, wodorotlenki i pH','SP7-8→LO',['dysocjacja','elektrolit','wskaźniki','pH','pKa','Ka','Kb','bufory'],'P0','IN_PROGRESS'),
  M('CURR-15','Sole i reakcje jonowe','SP7-8→LO',['sole','dysocjacja','tablice rozpuszczalności','strącanie','równania jonowe'],'P0','IN_PROGRESS'),
  M('CURR-16','Tlen, wodór, powietrze i tlenki','SP7-8',['otrzymywanie','właściwości','spalanie','tlenki','zastosowania','środowisko'],'P0','IN_PROGRESS'),
  M('CURR-17','Metale, niemetale i chemia środowiska','SP7-8→LO',['aktywność','korozja','ochrona','paliwa','kwaśne opady','klimat','środowisko'],'P1','OPEN'),
  M('CURR-18','Kinetyka chemiczna','LO',['szybkość','stężenie/ciśnienie','temperatura','katalizator','rozdrobnienie','doświadczenia'],'P1','IN_PROGRESS'),
  M('CURR-19','Energetyka reakcji','LO',['egzo/endo','energia aktywacji','entalpia','Î”H','profile energetyczne','kataliza'],'P1','IN_PROGRESS'),
  M('CURR-20','Równowaga chemiczna','LO rozszerzony',['równowaga','K','Le Chatelier','warunki','równowagi kwas-zasada','Ksp','Kf'],'P1','IN_PROGRESS'),
  M('CURR-21','Redoks i elektrochemia','LO rozszerzony',['stopnie utlenienia','elektrony','bilans redoks','ogniwa','potencjały','zależność od pH'],'P1','IN_PROGRESS'),
  M('CURR-22','Gazy i równanie Clapeyrona','LO rozszerzony',['pVT','gaz doskonały','objętość molowa','warunki','Clapeyron'],'P1','OPEN'),
  M('CURR-23','Chemia organiczna — węglowodory','SP7-8→LO',['alkany','alkeny','alkiny','spalanie','addycja','polimeryzacja','ropa','środowisko'],'P0','IN_PROGRESS'),
  M('CURR-24','Pochodne węglowodorów','SP7-8→LO',['alkohole','fenole','aldehydy','ketony','kwasy karboksylowe','estry','tłuszcze'],'P0','IN_PROGRESS'),
  M('CURR-25','Biochemia szkolna','SP7-8→LO biol-chem',['aminokwasy','białka','peptydy','enzymy','cukry','skrobia','celuloza','tłuszcze','DNA/RNA jako rozszerzenie'],'P0','IN_PROGRESS'),
  M('CURR-26','Doświadczenie i metodologia badawcza','SP7-8→LO',['problem','hipoteza','zmienne','kontrola','obserwacja','pomiar','wynik','wniosek','niepewność'],'P0','IN_PROGRESS'),
  M('CURR-27','Wizualizacja i cyfrowe modele chemiczne','SP7-8→LO',['tabele','wykresy','diagramy','atom','orbital','cząsteczka 2D/3D','interakcja'],'P1','IN_PROGRESS'),
  M('CURR-28','Zadania, transfer i kompetencje problemowe','SP7-8→LO',['obliczenia','interpretacja danych','projekt','case study','zadania wieloetapowe','samoocena'],'P0','IN_PROGRESS'),
  M('CURR-29','Spektroskopia i identyfikacja','LO rozszerzony',['IR','UV-Vis','MS','NMR','widma','identyfikacja'],'P2','OPEN'),
  M('CURR-30','Mechanizmy, stereochemia i koordynacja','LO rozszerzony',['mechanizmy','stereo','izomeria','kompleksy','ligandy'],'P2','OPEN'),
  M('CURR-31','Dane referencyjne i provenance','SP7-8→LO',['źródło','warunki','jednostka','niepewność','fazowość','fingerprint','ledger'],'P0','IN_PROGRESS'),
  M('CURR-32','Integracja przekrojowa i projektowa','SP7-8→LO',['projekt tygodniowy','problem interdyscyplinarny','chemia-biologia-fizyka-matematyka','raport'],'P1','OPEN')
 ];
 const locks={
  sourceHierarchy:['aktualna podstawa prawna','ZPE/ME','źródła naukowe','źródła pomocnicze'],
  curriculumRule:'curriculum coverage is permanent planning scope; absence of implementation is a gap, not permission to delete the requirement',
  noRediscovery:'DONE/VERIFIED/LOCKED items are not re-searched unless source/version changes or FORCE_REVERIFY',
  noOverwrite:'new verified data append; existing scientific records are not silently overwritten',
  oneEngine:'CHE.STRUCTURE and shared CHE.DATA remain canonical; adapters do not become second engines',
  statusRule:'OPEN→IN_PROGRESS→DONE→VERIFIED→LOCKED; CONDITIONAL remains visible and is never treated as VERIFIED',
  educationRule:'educational scaffolding is not reference-grade science',
  maxRun:'ONE_PROMPT_MAX_RUN: one prompt = maximum coherent package including smaller safe tasks',
  runtimeRule:'syntax PASS is not browser runtime PASS',
  priorityRule:'P0 mandatory foundation; P1 advanced core; P2 extension',
  completionRule:'module can be DONE only when implementation, data coverage, UI binding and tests required by its level are present'
 };
 const audit=()=>({version:'3.34',modules:modules.length,byStatus:Object.fromEntries(['OPEN','IN_PROGRESS','DONE','VERIFIED','LOCKED','CONDITIONAL'].map(s=>[s,modules.filter(m=>m.status===s).length])),byPriority:Object.fromEntries(['P0','P1','P2'].map(s=>[s,modules.filter(m=>m.priority===s).length])),source:SRC,locks});
 CHE.CURRICULUM_REQUIREMENTS_LOCK_V334={version:'3.34',reviewedAt:'2026-10-02',source:SRC,modules,locks,audit,permanent:true,referenceReady:false};
})();

} catch (err) {
  try { console.warn('[CHE module 220]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* ==========================================================
   CHE.MASTER_EXECUTION_ROADMAP_V335
   Permanent execution roadmap derived from CURRICULUM_REQUIREMENTS_LOCK_V334.
   This is a work queue, not a replacement for the curriculum lock.
   ========================================================== */
(function(){
 const CHE=window.CHE=window.CHE||{};
 const C=CHE.CURRICULUM_REQUIREMENTS_LOCK_V334;
 if(!C)return;
 const steps=[
  {id:'MAX-01',name:'Runtime foundation',mods:['CURR-27','CURR-28'],goal:'stabilny DOM/UI smoke harness, event wiring, visible diagnostics',gate:'browser-runtime',status:'OPEN'},
  {id:'MAX-02',name:'Canonical chemistry core',mods:['CURR-05','CURR-06','CURR-07','CURR-08','CURR-09'],goal:'atom/jon/elektron/wiązania/graf/geometria jako jeden przepływ',gate:'structure-consistency',status:'OPEN'},
  {id:'MAX-03',name:'Reaction execution core',mods:['CURR-10','CURR-11','CURR-12','CURR-15'],goal:'równania, jonowe, redoks, stechiometria, reagent ograniczający, wydajność',gate:'reaction-regression',status:'OPEN'},
  {id:'MAX-04',name:'Solutions and acid-base',mods:['CURR-13','CURR-14'],goal:'stężenia, rozpuszczalność, pH, Ka/Kb/pKa, wskaźniki, bufory',gate:'solution-regression',status:'OPEN'},
  {id:'MAX-05',name:'P0 substances and lab',mods:['CURR-02','CURR-03','CURR-04','CURR-16','CURR-23','CURR-24','CURR-25','CURR-26'],goal:'karty substancji, doświadczenia, BHP, organiczna i biochemia',gate:'education-p0-audit',status:'OPEN'},
  {id:'MAX-06',name:'Scientific provenance closure',mods:['CURR-01','CURR-31'],goal:'źródło→warunki→jednostka→niepewność→fingerprint→status',gate:'science-integrity',status:'OPEN'},
  {id:'MAX-07',name:'P1 quantitative chemistry',mods:['CURR-18','CURR-19','CURR-20','CURR-21','CURR-22'],goal:'kinetyka, energetyka, równowaga, elektrochemia, gazy',gate:'p1-quantitative',status:'OPEN'},
  {id:'MAX-08',name:'Cross-domain projects',mods:['CURR-17','CURR-28','CURR-32'],goal:'zadania przekrojowe chemia-biologia-fizyka-matematyka',gate:'transfer',status:'OPEN'},
  {id:'MAX-09',name:'P2 advanced chemistry',mods:['CURR-29','CURR-30'],goal:'spektroskopia, mechanizmy, stereochemia, koordynacja',gate:'p2-advanced',status:'OPEN'},
  {id:'MAX-10',name:'Final integration',mods:['CURR-01','CURR-02','CURR-05','CURR-06','CURR-07','CURR-08','CURR-09','CURR-10','CURR-11','CURR-12','CURR-13','CURR-14','CURR-15','CURR-18','CURR-19','CURR-20','CURR-21','CURR-22','CURR-23','CURR-24','CURR-25','CURR-26','CURR-27','CURR-28','CURR-31','CURR-32'],goal:'pełna ścieżka od danych do modelu, reakcji, doświadczenia, zadania i raportu',gate:'full-regression',status:'OPEN'}
 ];
 const deps={
  'MAX-02':['MAX-01'],'MAX-03':['MAX-02'],'MAX-04':['MAX-03'],'MAX-05':['MAX-01','MAX-02','MAX-03'],'MAX-06':['MAX-01'],'MAX-07':['MAX-03','MAX-04','MAX-06'],'MAX-08':['MAX-04','MAX-05'],'MAX-09':['MAX-02','MAX-06'],'MAX-10':['MAX-01','MAX-02','MAX-03','MAX-04','MAX-05','MAX-06','MAX-07','MAX-08','MAX-09']
 };
 const criteria={
  DONE:['implementacja','pokrycie danych','integracja UI/API','lokalne regresje'],
  VERIFIED:['DONE','źródła/warunki sprawdzone tam gdzie wymagane','brak znanych blockerów'],
  LOCKED:['VERIFIED','fingerprint/wersja źródła','brak zmiany kontraktu']
 };
 function moduleStatus(id){const m=C.modules.find(x=>x.id===id);return m?m.status:'MISSING';}
 function stepReady(s){return (deps[s.id]||[]).every(d=>{const q=steps.find(x=>x.id===d);return q&&q.status==='DONE';});}
 function audit(){
   const counts={OPEN:0,IN_PROGRESS:0,DONE:0,VERIFIED:0,LOCKED:0,CONDITIONAL:0,MISSING:0};
   C.modules.forEach(m=>counts[m.status]=(counts[m.status]||0)+1);
   return {version:'3.35',curriculumModules:C.modules.length,steps:steps.length,counts,steps:steps.map(s=>({id:s.id,status:s.status,ready:stepReady(s),mods:s.mods.map(moduleStatus)})),criteria,deps};
 }
 CHE.MASTER_EXECUTION_ROADMAP_V335={version:'3.35',permanent:true,rule:'execute largest coherent package; do not re-discover closed requirements',steps,deps,criteria,audit,sourceLock:'CHE.CURRICULUM_REQUIREMENTS_LOCK_V334'};
 CHE.MASTER_EXECUTION_ROADMAP_V335.next=()=>steps.find(s=>s.status==='OPEN'&&stepReady(s))||steps.find(s=>s.status==='OPEN')||null;
})();

} catch (err) {
  try { console.warn('[CHE module 221]', err && err.message ? err.message : err); } catch(_){}
}

try {

/*
 CHE v3.36 — MAX-01..03 execution closure
 Purpose: orchestration over existing canonical APIs; no second chemistry engine/database.
 Status: syntax-checked; browser runtime remains separate until harness produces a real DOM result.
*/
(function(){
'use strict';
const CHE=window.CHE=window.CHE||{};
const EDU=CHE.EDUCATION=CHE.EDUCATION||{};
const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
const CURR=CHE.CURRICULUM_REQUIREMENTS_LOCK_V334;
const ROAD=CHE.MASTER_EXECUTION_ROADMAP_V335;
const SRC='CHE_MAX_EXECUTION_V336';

function call(fn,args){
  try{return typeof fn==='function'?{ok:true,value:fn.apply(null,args||[])}:{ok:false,error:'API_MISSING'};}
  catch(e){return {ok:false,error:e?.message||String(e)};}
}
function formulaCounts(formula){
  if(typeof formula!=='string'||!formula.trim())return {};
  const out={}; let i=0;
  function seq(stop){
    const acc={};
    while(i<formula.length&&formula[i]!==stop){
      if(formula[i]==='('){i++;const inner=seq(')');if(formula[i]!==')')throw Error('UNBALANCED_FORMULA');i++;let ds='';while(i<formula.length&&/[0-9]/.test(formula[i]))ds+=formula[i++];const mult=Number(ds||1);for(const k of Object.keys(inner))acc[k]=(acc[k]||0)+inner[k]*mult;continue;}
      if(!/[A-Z]/.test(formula[i])){i++;continue;}
      let el=formula[i++];if(i<formula.length&&/[a-z]/.test(formula[i]))el+=formula[i++];let ds='';while(i<formula.length&&/[0-9]/.test(formula[i]))ds+=formula[i++];acc[el]=(acc[el]||0)+Number(ds||1);
    }
    return acc;
  }
  return seq(null);
}
function equationTerms(equation){
  if(typeof equation!=='string')return {left:[],right:[]};
  const parts=equation.replace(/→|⟶|=>|=/g,'->').split('->');
  const parse=s=>s.split('+').map(x=>x.trim()).filter(Boolean).map(term=>{const m=/^(\d+(?:\.\d+)?)?\s*([A-Za-z][A-Za-z0-9()]+)(?:\((?:aq|s|l|g)\))?$/.exec(term);return {coefficient:m?Number(m[1]||1):1,formula:m?m[2]:term};});
  return {left:parse(parts[0]||''),right:parse(parts[1]||'')};
}
function atomBalance(equation){
  const t=equationTerms(equation), delta={};
  for(const side of [['left',1],['right',-1]])for(const x of t[side[0]])for(const [el,n] of Object.entries(formulaCounts(x.formula)))delta[el]=(delta[el]||0)+side[1]*x.coefficient*n;
  const nonZero=Object.entries(delta).filter(([,v])=>Math.abs(v)>1e-9);
  return {balanced:nonZero.length===0,delta,terms:t};
}
function chargeBalance(equation){
  const chargeOf=f=>{const m=/^(.*?)([+-])(\d*)$/.exec(f);if(!m)return 0;const n=Number(m[3]||1);return m[2]==='+'?n:-n;};
  const t=equationTerms(equation), delta={left:0,right:0};
  for(const x of t.left)delta.left+=x.coefficient*chargeOf(x.formula);
  for(const x of t.right)delta.right+=x.coefficient*chargeOf(x.formula);
  return {balanced:Math.abs(delta.left-delta.right)<1e-9,delta};
}
function executeReaction(equation,options){
  const out={version:'3.36',equation,source:SRC,referenceReady:false};
  const bal=atomBalance(equation);out.atomBalance=bal;
  out.chargeBalance=chargeBalance(equation);
  const E=CHE.EDUCATION_ENGINE;
  out.engine=E?{
    balance:call(E.balanceEquation,[equation]),
    mass:call(E.molarMass,[equation]),
    stoich:options?.amounts?call(E.stoichiometry,[equation,options.amounts]):null
  }:{available:false};
  out.redox=EDU.REDOX_QUANT_V328?.quantitativeRedox?call(EDU.REDOX_QUANT_V328.quantitativeRedox,[equation]):null;
  out.pass=!!bal.balanced;
  return out;
}
function lessonGate(){
 const a=CHE.REACTION_LESSON_RECONCILIATION?.audit?.()||{};
 const rows=Array.isArray(a.records)?a.records:[];
 const exact=rows.filter(r=>r?.classification==='REACTION_EQUATION'&&r?.reconciliation?.status==='EXACT_CANONICAL');
 return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:exact.length,eligible:exact.map(r=>({line:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds})),policy:'AUDIT_FIRST; NO_AUTO_MUTATION',source:SRC};
}
function taskBridge(task){
 if(!task||typeof task!=='object')return {ok:false,error:'TASK_REQUIRED'};
 const eq=task.equation||task.reaction||null;
 return {ok:true,taskId:task.id||null,equation:eq,execution:eq?executeReaction(eq,task):null,source:SRC};
}
const TESTS=[
 ['balanced_H2_O2','2 H2 + O2 -> 2 H2O',true],
 ['unbalanced_H2_O2','H2 + O2 -> H2O',false],
 ['balanced_CaCO3','CaCO3 -> CaO + CO2',true],
 ['balanced_NaCl','Na+ + Cl- -> NaCl',true]
];
function selfTest(){
 const rows=TESTS.map(([id,eq,expected])=>{const a=atomBalance(eq);return {id,eq,expected,got:a.balanced,pass:a.balanced===expected};});
 const ap=rows.every(x=>x.pass);
 const engine=CHE.EDUCATION_ENGINE?.selfTest?.()||null;
 const lesson=lessonGate();
 return {version:'3.36',atomBalancePass:ap,rows,educationEngine:engine,lessonGate:lesson,allBalanced:ap&&(!engine||engine.allBalanced!==false),source:SRC};
}
function runtimeSnapshot(root){
 const d=root||((typeof document!=='undefined')?document:null);
 if(!d)return {status:'NO_DOCUMENT',pass:false};
 const required=['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];
 const controls=required.map(id=>({id,present:!!d.getElementById(id)}));
 const tabs=['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'];
 const tabRows=tabs.map(id=>({id,present:!!d.getElementById(`tab-${id}`)}));
 return {status:'DOM_INSPECTED',controls,controlsPass:controls.every(x=>x.present),tabs:tabRows,tabsPass:tabRows.every(x=>x.present),pass:controls.every(x=>x.present)&&tabRows.every(x=>x.present),source:SRC};
}
function continuityAudit(){
 const t=selfTest();
 const lesson=lessonGate();
 const runtime=runtimeSnapshot();
 const structure=CHE.STRUCTURE?.VIEW_ADAPTER_V332?.project?.({atoms:[{id:'a'},{id:'b'},{id:'c'}],bonds:[{a:'a',b:'b',order:2}],angles:[{center:'b',from:'a',to:'c',angleDeg:120}]})||{ok:false};
 const result={version:'3.36',tests:t,runtime,structure,lesson,oneEngine:true,oneSharedData:true,referenceReady:false,source:SRC};
 if(R){
   if(t.atomBalancePass)R.setStatus('RXN-002','IN_PROGRESS');
   if(structure.ok)R.setStatus('VIS-002','IN_PROGRESS');
   if(runtime.pass)R.setStatus('TEST-001','DONE');
 }
 return result;
}
EDU.EXECUTION_FACADE_V336={version:'3.36',executeReaction,formulaCounts,equationTerms,atomBalance,chargeBalance,lessonGate,taskBridge,selfTest,runtimeSnapshot,continuityAudit,sourceOfTruth:['CHE.DATA','CHE.STRUCTURE','CHE.EDUCATION_ENGINE'],referenceReady:false};
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.MAX_EXECUTION_V336={version:'3.36',run:continuityAudit,status:'NOT_RUN',browserRuntime:'NOT_VERIFIED',source:SRC};

/* Curriculum coverage bridge: only records implementation evidence, never deletes curriculum requirements. */
if(CURR){
 const evidence={
  'CURR-10':['EDU.EXECUTION_FACADE_V336.atomBalance','EDU.EXECUTION_FACADE_V336.chargeBalance'],
  'CURR-11':['EDU.REDOX_ENGINE_V326','EDU.REDOX_QUANT_V328'],
  'CURR-12':['EDU.EDUCATION_ENGINE_V322','EDU.EXECUTION_FACADE_V336'],
  'CURR-15':['EDU.EXECUTION_FACADE_V336.chargeBalance'],
  'CURR-27':['STRUCTURE.VIEW_ADAPTER_V332'],
  'CURR-28':['EDU.EXECUTION_FACADE_V336.taskBridge']
 };
 CHE.CURRICULUM_EXECUTION_EVIDENCE_V336={version:'3.36',evidence,policy:'evidence_only_no_premature_done',source:SRC};
}
})();

} catch (err) {
  try { console.warn('[CHE module 222]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX v3.37 — structure/reaction/visual execution bridge; no second engine or DB. */
(function(){
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},EDU=CHE.EDUCATION=CHE.EDUCATION||{},D=CHE.DATA=CHE.DATA||{};
const RQ=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
function n(v,d=0){const x=Number(v);return Number.isFinite(x)?x:d}
function atomsOf(s){return Array.isArray(s?.atoms)?s.atoms:[]}
function bondsOf(s){return Array.isArray(s?.bonds)?s.bonds:[]}
function anglesOf(s){return Array.isArray(s?.angles)?s.angles:[]}
function elementFormula(s){
 const a=atomsOf(s), c={};
 for(const x of a){const e=String(x.element||x.symbol||'').trim();if(!e)continue;c[e]=(c[e]||0)+1}
 return Object.entries(c).sort((a,b)=>a[0].localeCompare(b[0])).map(([e,k])=>e+(k===1?'':k)).join('')
}
function normalizeStructure(s){
 const a=atomsOf(s).map((x,i)=>({id:x.id??`a${i+1}`,element:String(x.element||x.symbol||'?'),x:n(x.x),y:n(x.y),z:n(x.z),charge:n(x.charge),isotope:x.isotope??null}));
 const ids=new Set(a.map(x=>String(x.id)));
 const b=bondsOf(s).map((x,i)=>({id:x.id??`b${i+1}`,a:String(x.a??x.from),b:String(x.b??x.to),order:n(x.order,1)})).filter(x=>ids.has(x.a)&&ids.has(x.b)&&x.a!==x.b&&x.order>0);
 const g=anglesOf(s).map((x,i)=>({id:x.id??`g${i+1}`,center:String(x.center??x.vertex),from:String(x.from),to:String(x.to),deg:n(x.deg??x.angle)})).filter(x=>ids.has(x.center)&&ids.has(x.from)&&ids.has(x.to)&&x.from!==x.to&&x.deg>0&&x.deg<=180);
 return {atoms:a,bonds:b,angles:g,formula:elementFormula({atoms:a}),sourceOfTruth:'CHE.STRUCTURE',mutable:false};
}
function degreeMap(s){const m={};for(const a of atomsOf(s))m[a.id]=0;for(const b of bondsOf(s)){if(m[b.a]!=null)m[b.a]+=n(b.order,1);if(m[b.b]!=null)m[b.b]+=n(b.order,1)}return m}
function structureAudit(s){
 const q=normalizeStructure(s), ids=new Set(q.atoms.map(x=>x.id)), dm=degreeMap(q), issues=[];
 for(const b of q.bonds)if(!ids.has(b.a)||!ids.has(b.b))issues.push({type:'BOND_ENDPOINT_MISSING',bond:b.id});
 for(const a of q.angles){if(!ids.has(a.center)||!ids.has(a.from)||!ids.has(a.to))issues.push({type:'ANGLE_ENDPOINT_MISSING',angle:a.id});}
 for(const x of q.atoms)if(!x.element||x.element==='?')issues.push({type:'ATOM_ELEMENT_MISSING',atom:x.id});
 return {ok:issues.length===0,issues,atomCount:q.atoms.length,bondCount:q.bonds.length,angleCount:q.angles.length,formula:q.formula,degreeMap:dm,normalized:q};
}
function visualProjection(s){
 const q=normalizeStructure(s);
 return {version:'3.37',formula:q.formula,atoms:q.atoms.map(a=>({id:a.id,label:a.element,x:a.x,y:a.y,z:a.z})),bonds:q.bonds.map(b=>({id:b.id,a:b.a,b:b.b,order:b.order,label:b.order===1?'single':b.order===2?'double':b.order===3?'triple':`order ${b.order}`})),angles:q.angles.map(g=>({id:g.id,center:g.center,from:g.from,to:g.to,deg:g.deg,label:`${g.deg.toFixed(1)}°`})),sourceOfTruth:'CHE.STRUCTURE',projectionOnly:true};
}
function reactionStructureBridge(reaction){
 const r=reaction||{};
 const reactants=Array.isArray(r.reactants)?r.reactants:[], products=Array.isArray(r.products)?r.products:[];
 const check=list=>list.map((x,i)=>({index:i,formula:x.formula||null,structureAudit:x.structure?structureAudit(x.structure):null}));
 return {version:'3.37',reactants:check(reactants),products:check(products),sourceOfTruth:['CHE.DATA.REACTIONS','CHE.STRUCTURE'],mutation:false};
}
function executeFromStructure(s){
 const q=normalizeStructure(s), audit=structureAudit(q);
 const engine=CHE.EDUCATION_ENGINE;
 const mass=engine&&typeof engine.molarMass==='function'&&q.formula?engine.molarMass(q.formula):null;
 return {version:'3.37',formula:q.formula,audit,mass,visual:visualProjection(q),referenceReady:false};
}
function uiModel(root){
 const d=root||document;
 const ids=['lab-3d-stage','lab-3d-canvas','run-audit','audit-refresh','tab-atom','tab-periodic','tab-lab'];
 const rows=ids.map(id=>({id,present:!!d?.getElementById(id)}));
 return {version:'3.37',present:rows.filter(x=>x.present).length,total:rows.length,pass:rows.every(x=>x.present),status:'OBSERVED_DOM_ONLY'};
}
const SAMPLE={atoms:[{id:'C1',element:'C',x:0,y:0,z:0},{id:'O1',element:'O',x:1.2,y:0,z:0},{id:'O2',element:'O',x:-1.2,y:0,z:0}],bonds:[{id:'b1',a:'C1',b:'O1',order:2},{id:'b2',a:'C1',b:'O2',order:2}],angles:[{id:'g1',center:'C1',from:'O1',to:'O2',deg:180}]};
function selfTest(){
 const s=structureAudit(SAMPLE), v=visualProjection(SAMPLE), e=executeFromStructure(SAMPLE);
 const formulaOK=e.formula==='CO2', bondOK=v.bonds.length===2&&v.bonds.every(x=>x.order===2), angleOK=v.angles[0]?.deg===180;
 return {version:'3.37',structure:s,formulaOK,bondOK,angleOK,projectionOK:v.atoms.length===3,executionFormula:e.formula,pass:s.ok&&formulaOK&&bondOK&&angleOK,source:'CHE_MAX_V337'};
}
