try {

(()=>{
'use strict';
const SRC='CHE_EXPERIMENT_EVIDENCE_V346';
const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
const arr=v=>Array.isArray(v)?v:(has(v)?[v]:[]);
function normalizeEvidence(input={}){
 const o=input.observation||{};
 return {phenomenon:o.phenomenon||'',visible:o.visible||'',color:o.color||'',precipitate:o.precipitate||'',gas:o.gas||'',temperature:o.temperature??null,pH:o.pH??null,notes:o.notes||'',source:'USER_OBSERVATION'};
}
function observationEvidence(o){
 const e=[];
 if(has(o.precipitate))e.push({type:'PRECIPITATION',claim:'powstanie osadu',basis:o.precipitate});
 if(has(o.gas))e.push({type:'GAS',claim:'wydzielanie gazu',basis:o.gas});
 if(has(o.color))e.push({type:'COLOR_CHANGE',claim:'zmiana/barwa obserwowana',basis:o.color});
 if(o.pH!==null&&o.pH!==undefined&&o.pH!=='')e.push({type:'PH_MEASUREMENT',claim:'pomiar pH',basis:o.pH});
 if(o.temperature!==null&&o.temperature!==undefined&&o.temperature!=='')e.push({type:'TEMPERATURE',claim:'obserwacja temperatury',basis:o.temperature});
 return e;
}
function reactionSuggestions(evidence){
 const types=evidence.map(x=>x.type), out=[];
 if(types.includes('PRECIPITATION'))out.push({type:'PRECIPITATION_REACTION',confidence:'OBSERVATION_ONLY',needs:'canonical reaction match'});
 if(types.includes('PH_MEASUREMENT'))out.push({type:'ACID_BASE_CLASSIFICATION',confidence:'OBSERVATION_ONLY',needs:'sample + indicator/pH method'});
 if(types.includes('GAS'))out.push({type:'GAS_FORMATION',confidence:'OBSERVATION_ONLY',needs:'reactants + identification test'});
 if(types.includes('COLOR_CHANGE'))out.push({type:'INDICATOR_RESPONSE',confidence:'OBSERVATION_ONLY',needs:'indicator record'});
 return out;
}
const TEMPLATES=[
 {id:'EXP-P0-PH',topic:'pH',level:'SP7-8',required:['sample','method'],observations:['pH','odczyn','barwa wskaźnika']},
 {id:'EXP-P0-SOL',topic:'rozpuszczalność',level:'SP7-8',required:['substance','solvent','temperature'],observations:['rozpuszczenie','pozostałość','temperatura']},
 {id:'EXP-P0-IND',topic:'wskaźniki',level:'SP7-8',required:['sample','indicator'],observations:['barwa','zmiana barwy','odczyn']},
 {id:'EXP-P0-PPT',topic:'strącanie',level:'SP7-8→LO',required:['reactantA','reactantB'],observations:['osad','barwa','klarowność']},
 {id:'EXP-P0-DISSOLVE-RATE',topic:'szybkość rozpuszczania',level:'SP7-8',required:['substance','temperature','mixing','particleSize'],observations:['czas','pozostałość']},
 {id:'EXP-P0-NEUTRALIZATION',topic:'zobojętnianie',level:'SP7-8',required:['acid','base','indicator'],observations:['barwa','pH','temperatura']},
 {id:'EXP-P0-MIX-SEPARATION',topic:'rozdzielanie mieszaniny',level:'SP7-8',required:['mixture','method'],observations:['warstwy','osad','przesącz']},
 {id:'EXP-P0-CONDUCTIVITY',topic:'przewodnictwo',level:'SP7-8',required:['sample','conductivityMethod'],observations:['przewodnictwo','porównanie']}
];
function getTemplate(id){return TEMPLATES.find(x=>x.id===id)||null;}
function buildEvidenceReport(input={}){
 const obs=normalizeEvidence(input), evidence=observationEvidence(obs), suggestions=reactionSuggestions(evidence);
 return {version:'3.46',observation:obs,evidence,suggestions,canonicalWrite:false,status:evidence.length?'EVIDENCE_READY':'NO_EVIDENCE',source:SRC};
}
function validateExperiment(input={}){
 const t=getTemplate(input.templateId), missing=[];
 if(t)t.required.forEach(k=>{if(!has(input[k]))missing.push('MISSING_'+k.toUpperCase());});
 const report=buildEvidenceReport(input);
 const safety=arr(input.safety);
 if(!report.evidence.length)missing.push('MISSING_OBSERVATION');
 if(!has(input.conclusion))missing.push('MISSING_CONCLUSION');
 if(!safety.length)missing.push('MISSING_BHP');
 return {version:'3.46',template:t?.id||null,status:missing.length?'INCOMPLETE':'READY_FOR_REVIEW',missing,report,canonicalWrite:false,source:SRC};
}
CHE.EXPERIMENT_EVIDENCE_ENGINE_V346={version:'3.46',source:SRC,normalizeEvidence,observationEvidence,reactionSuggestions,buildEvidenceReport,validateExperiment,templates:TEMPLATES,canonicalWrite:false,referenceReady:false};
CHE.EDUCATION_ENGINE.EXPERIMENT_EVIDENCE_ENGINE_V346=CHE.EXPERIMENT_EVIDENCE_ENGINE_V346;
const tests={
 evidence:buildEvidenceReport({observation:{precipitate:'biały osad'}}).evidence[0]?.type==='PRECIPITATION',
 suggestion:buildEvidenceReport({observation:{precipitate:'biały'}}).suggestions.some(x=>x.type==='PRECIPITATION_REACTION'),
 templates:TEMPLATES.length>=8&&!!getTemplate('EXP-P0-NEUTRALIZATION'),
 validation:validateExperiment({templateId:'EXP-P0-PH',sample:'HCl',method:'pH-meter',observation:{pH:2},conclusion:'odczyn kwasowy',safety:['okulary']}).status==='READY_FOR_REVIEW',
 incomplete:validateExperiment({templateId:'EXP-P0-PH'}).missing.includes('MISSING_OBSERVATION'),
 noMutation:CHE.EXPERIMENT_EVIDENCE_ENGINE_V346.canonicalWrite===false
};
CHE.P0_REGRESSION_V346={version:'3.46',tests,pass:Object.values(tests).every(Boolean),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};
CHE.RUNTIME=CHE.RUNTIME||{};CHE.RUNTIME.MAX_EXECUTION_V346={version:'3.46',p0:CHE.P0_REGRESSION_V346,canonicalMutation:false,browserRuntime:'NOT_VERIFIED'};
try{document.documentElement.setAttribute('data-che-v346',CHE.P0_REGRESSION_V346.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 237]', err && err.message ? err.message : err); } catch(_){}
}

