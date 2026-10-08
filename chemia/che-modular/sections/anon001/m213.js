try {

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

