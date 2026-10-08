try {

(()=>{
'use strict';
const C=window.CHE=window.CHE||{}, E=C.EDUCATION_ENGINE=C.EDUCATION_ENGINE||{}, D=C.DATA=C.DATA||{};
const MASS=D.ATOMIC_MASS||{};
const common={H:1,O:-2,F:-1,Na:1,Mg:2,Al:3,K:1,Ca:2,Zn:2,Ag:1,Cl:-1,Br:-1,I:-1};
function oxStates(formula){
 const atoms=E.parseFormula(formula), keys=Object.keys(atoms), out={};
 keys.forEach(k=>{if(common[k]!==undefined)out[k]=common[k];});
 const unknown=keys.filter(k=>out[k]===undefined);
 if(unknown.length===1){let sum=0;keys.forEach(k=>{if(k!==unknown[0]&&out[k]!==undefined)sum+=atoms[k]*out[k];});out[unknown[0]]=-sum/atoms[unknown[0]];}
 return {formula,composition:atoms,oxidationStates:out,unresolved:keys.filter(k=>out[k]===undefined)};
}
function redoxDelta(formula){const x=oxStates(formula), d=[];Object.keys(x.oxidationStates).forEach(el=>{const n=x.composition[el],v=x.oxidationStates[el];if(Number.isFinite(v))d.push({element:el,atoms:n,oxidationState:v});});return d;}
function analyzeRedox(eq){
 const b=E.balanceEquation(eq), left=b.reactants.map((t,i)=>({side:'reactant',formula:t.formula,coef:b.coefficients.reactants[i],ox:redoxDelta(t.formula)})), right=b.products.map((t,i)=>({side:'product',formula:t.formula,coef:b.coefficients.products[i],ox:redoxDelta(t.formula)}));
 const changes=[];
 left.forEach(l=>right.forEach(r=>{const le=l.ox.filter(x=>r.ox.some(y=>y.element===x.element));le.forEach(x=>{const y=r.ox.find(z=>z.element===x.element);if(x.oxidationState!==y.oxidationState)changes.push({element:x.element,from:x.oxidationState,to:y.oxidationState,delta:y.oxidationState-x.oxidationState,reactant:l.formula,product:r.formula});});}));
 return {equation:b.equation,balanced:b.balanced,changes,oxidation: {reactants:left,products:right},redox:changes.length>0};
}
function electronBalance(eq){const a=analyzeRedox(eq), transfers=a.changes.map(x=>({element:x.element,electronsPerAtom:Math.abs(x.delta),direction:x.delta<0?'reduction':'oxidation'}));let oxidation=0,reduction=0;transfers.forEach(x=>{if(x.direction==='oxidation')oxidation+=x.electronsPerAtom;else reduction+=x.electronsPerAtom;});return {...a,electronTransfer:{oxidation,reduction,balancedElectrons:Math.abs(oxidation-reduction)<1e-9},transfers};}
function lessonAudit(){const R=C.REACTION_LESSON_RECONCILIATION?.audit?.();if(!R)return {available:false};return {available:true,candidateRecords:R.candidateRecords||0,canonicalRecords:R.canonicalRecords||0,exact:R.exact||0,needsReview:R.needsReview||0,unmatched:R.unmatched||0,policy:R.policy};}
function uiAudit(){const ids=['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];return {checked:ids.length,present:ids.filter(id=>!!document.getElementById(id)),missing:ids.filter(id=>!document.getElementById(id)),body:!!document.body,html:!!document.documentElement};}
function selfTest(){
 const a=electronBalance('Fe + O2 -> Fe2O3'), b=electronBalance('Zn + CuSO4 -> ZnSO4 + Cu');
 return {version:'3.26',ironOxidation:b?null:a, zincCopper:b, lesson:lessonAudit(), ui:uiAudit(), pass:a.balanced&&b.balanced&&a.electronTransfer.balancedElectrons&&b.electronTransfer.balancedElectrons};
}
C.EDUCATION.REDOX_ENGINE_V326={version:'3.26',parseOxidationStates:oxStates,analyze:analyzeRedox,electronBalance,referenceReady:false,sourceOfTruth:'CHE.DATA + CHE.STRUCTURE'};
C.EDUCATION.LESSON_CANONICAL_AUDIT_V326=lessonAudit();
C.EDUCATION.UI_BINDING_AUDIT_V326=uiAudit();
C.EDUCATION.MAX_VERIFY_V326={version:'3.26',modules:['REDOX_ENGINE','LESSON_CANONICAL_AUDIT','UI_BINDING_AUDIT'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
C.EDUCATION.gapAuditV326=()=>({version:'3.26',selfTest:selfTest(),referenceReady:false,next:['promote only verified L001-L013 matches','conditional redox source records','fix any missing UI bindings','browser smoke regression']});
})();

} catch (err) {
  try { console.warn('[CHE module 211]', err && err.message ? err.message : err); } catch(_){}
}

