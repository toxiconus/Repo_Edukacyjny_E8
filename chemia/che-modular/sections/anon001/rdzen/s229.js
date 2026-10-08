

try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{};
const E=CHE.EDUCATION_ENGINE||{};
const OBS=CHE.EXPERIMENT_OBSERVATION_ENGINE_V344;
const SRC='CHE_EXPERIMENT_P0_V345';
function s(x){return String(x??'').trim();}
function arr(x){return Array.isArray(x)?x:[];}
function has(x){return s(x).length>0;}
function classifyObservation(observation={}){
 const o=OBS?.normalizeObservation?OBS.normalizeObservation(observation):observation||{};
 const signals=[];
 if(has(o.precipitate))signals.push('PRECIPITATION');
 if(has(o.gas))signals.push('GAS_EVOLUTION');
 if(has(o.color))signals.push('COLOR_CHANGE');
 if(has(o.temperature))signals.push('THERMAL_EFFECT');
 if(has(o.ph))signals.push('PH_MEASUREMENT');
 if(has(o.visible)||has(o.phenomenon))signals.push('VISIBLE_CHANGE');
 let candidates=[];
 if(signals.includes('PRECIPITATION'))candidates.push({type:'PRECIPITATION',confidence:'HIGH',reason:'zaobserwowano osad'});
 if(signals.includes('GAS_EVOLUTION'))candidates.push({type:'GAS_EVOLUTION',confidence:'HIGH',reason:'zaobserwowano wydzielanie gazu'});
 if(signals.includes('PH_MEASUREMENT'))candidates.push({type:'ACID_BASE',confidence:'HIGH',reason:'zarejestrowano pH'});
 if(signals.includes('COLOR_CHANGE'))candidates.push({type:'INDICATOR_OR_REDOX',confidence:'MEDIUM',reason:'zmiana barwy sama nie rozstrzyga mechanizmu'});
 return {source:'USER_OBSERVATION',signals:[...new Set(signals)],candidates,canonicalMutation:false,observation:o};
}
function canonicalReactionMatches(equation){
 const q=s(equation).replace(/⇌|⇄|⟶|→|=/,'->').replace(/\s+/g,' ').trim();
 const db=CHE.DATA?.REACTIONS||CHE.DATA?.REACTION_DATA||CHE.REACTIONS||[];
 const rows=Array.isArray(db)?db:(typeof db==='object'?Object.values(db):[]);
 const norm=x=>s(x).replace(/⇌|⇄|⟶|→|=/,'->').replace(/\s+/g,' ').trim();
 return rows.map((r,i)=>({r,i})).filter(x=>{
   const c=[x.r.equation,x.r.reaction,x.r.formula,x.r.normalizedEquation].filter(Boolean).map(norm);
   return c.includes(q);
 }).slice(0,20).map(x=>({index:x.i,id:x.r.id||x.r.reactionId||null,equation:x.r.equation||x.r.reaction||null,source:x.r.source||null}));
}
function validateResult(input={}){
 const o=OBS?.classify?OBS.classify(input.observation||{}):classifyObservation(input.observation).observation;
 const equation=s(input.equation);
 let equationCheck={status:'NOT_PROVIDED',supported:false,balanced:null,matches:[]};
 if(equation){
   try{
     const b=typeof E.balanceEquation==='function'?E.balanceEquation(equation):null;
     equationCheck={status:b?.balanced?'BALANCED':'NOT_BALANCED',supported:!!b,balanced:!!b?.balanced,matches:canonicalReactionMatches(equation)};
     if(equationCheck.matches.length)equationCheck.status='CANONICAL_MATCH';
   }catch(err){equationCheck={status:'UNSUPPORTED_EQUATION',supported:false,balanced:null,matches:[]};}
 }
 const safety=arr(input.safety);
 const checks={
   observation:o.hasObservation===true,
   conclusion:has(input.conclusion),
   bhp:safety.length>0,
   equation:!equation || (equationCheck.supported&&equationCheck.balanced),
   canonicalNotAutoMutated:true
 };
 const errors=[]; if(!checks.observation)errors.push('MISSING_OBSERVATION'); if(!checks.conclusion)errors.push('MISSING_CONCLUSION'); if(!checks.bhp)errors.push('MISSING_BHP'); if(!checks.equation)errors.push(equationCheck.status==='UNSUPPORTED_EQUATION'?'UNSUPPORTED_EQUATION':'EQUATION_NOT_BALANCED');
 return {version:'3.45',status:errors.length?'INCOMPLETE':'READY_FOR_REVIEW',checks,errors,observation:classifyObservation(input.observation||{}),equation:equationCheck,canonicalMutation:false,source:SRC};
}
const TEMPLATES=[
 {id:'EXP-P0-PH',topic:'pH',level:'SP7-8',purpose:'Badanie odczynu i pH próbki',inputs:['sample','indicator','pH'],observations:['barwa wskaźnika','wartość pH','odczyn'],safety:['okulary','rękawice','BHP odczynnika'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.INDICATORS.V339']},
 {id:'EXP-P0-SOL',topic:'rozpuszczalność',level:'SP7-8',purpose:'Badanie rozpuszczania substancji w wodzie',inputs:['substance','solvent','temperature','mass'],observations:['rozpuszczenie','pozostałość','temperatura'],safety:['okulary','BHP substancji'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.EDUCATION.SOLUBILITY_REFERENCE_V320']},
 {id:'EXP-P0-IND',topic:'wskaźniki',level:'SP7-8',purpose:'Rozróżnianie odczynu za pomocą wskaźnika',inputs:['sample','indicator'],observations:['zmiana barwy','odczyn'],safety:['okulary','BHP odczynnika'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.INDICATORS.V339']},
 {id:'EXP-P0-PPT',topic:'strącanie',level:'SP7-8→LO',purpose:'Obserwacja powstawania osadu i zapis reakcji jonowej',inputs:['reactantA','reactantB','equation'],observations:['osad','barwa','klarowność'],safety:['okulary','rękawice','BHP odczynników'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.DATA.REACTIONS','CHE.STRUCTURE']}
];
function template(id){return TEMPLATES.find(x=>x.id===id)||null;}
CHE.EXPERIMENT_P0_V345={version:'3.45',source:SRC,templates:TEMPLATES,template, classifyObservation, validateResult, canonicalReactionMatches,referenceReady:false,canonicalMutation:false};
CHE.EDUCATION_ENGINE.EXPERIMENT_RESULT_VALIDATOR_V345=validateResult;
CHE.EDUCATION_ENGINE.EXPERIMENT_OBSERVATION_CLASSIFIER_V345=classifyObservation;
const tests={
 observation:classifyObservation({precipitate:'biały'}).candidates.some(x=>x.type==='PRECIPITATION'),
 template:!!template('EXP-P0-PH')&&!!template('EXP-P0-SOL')&&!!template('EXP-P0-PPT'),
 validation:validateResult({observation:{phenomenon:'osad'},conclusion:'powstał osad',safety:['BHP'],equation:'H2 + O2 -> H2O'}).status==='READY_FOR_REVIEW',
 missing:validateResult({observation:{},conclusion:'',safety:[]}).errors.includes('MISSING_OBSERVATION'),
 noMutation:true
};
CHE.P0_REGRESSION_V345={version:'3.45',tests,pass:Object.values(tests).every(Boolean),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};
CHE.RUNTIME=CHE.RUNTIME||{}; CHE.RUNTIME.MAX_EXECUTION_V345={version:'3.45',p0:CHE.P0_REGRESSION_V345,browserRuntime:'NOT_VERIFIED',canonicalMutation:false};
try{document.documentElement.setAttribute('data-che-v345',CHE.P0_REGRESSION_V345.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 231]', err && err.message ? err.message : err); } catch(_){}
}