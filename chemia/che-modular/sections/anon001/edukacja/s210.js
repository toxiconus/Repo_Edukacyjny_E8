

try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{}, E=CHE.EDUCATION_ENGINE||{};
const SRC='CHE_EDUCATION_ENGINE_V327';
function weightedElectronBalance(eq){
 const a=C.REDOX_ENGINE_V326?.analyze?C.REDOX_ENGINE_V326.analyze(eq):null;
 if(!a) throw Error('REDOX_ENGINE unavailable');
 const transfers=[];
 let oxidation=0,reduction=0;
 const sides=[...(a.oxidation?.reactants||[]).map(x=>({...x,side:'reactant'})),...(a.oxidation?.products||[]).map(x=>({...x,side:'product'}))];
 
 (a.changes||[]).forEach(ch=>{
   const l=sides.find(x=>x.formula===ch.reactant&&x.side==='reactant');
   const r=sides.find(x=>x.formula===ch.product&&x.side==='product');
   const atoms=Math.min(l?.ox?.find(x=>x.element===ch.element)?.atoms||0,r?.ox?.find(x=>x.element===ch.element)?.atoms||0);
   const coefL=l?.coef||1, coefR=r?.coef||1;
   const weightedAtoms=Math.max(atoms*coefL,atoms*coefR);
   const e=Math.abs(ch.delta)*weightedAtoms;
   const direction=ch.delta<0?'reduction':'oxidation';
   transfers.push({element:ch.element,from:ch.from,to:ch.to,atoms:weightedAtoms,electrons:e,direction,reactant:ch.reactant,product:ch.product});
   if(direction==='oxidation') oxidation+=e; else reduction+=e;
 });
 return {...a,electronTransfer:{oxidation,reduction,balancedElectrons:Math.abs(oxidation-reduction)<1e-9},transfers,source:SRC};
}
function runtimeSmoke(){
 const tests={
  water:E.balanceEquation('H2 + O2 -> H2O'),
  iron:weightedElectronBalance('Fe + O2 -> Fe2O3'),
  zinc:weightedElectronBalance('Zn + CuSO4 -> ZnSO4 + Cu'),
  neutral:E.balanceEquation('HCl + NaOH -> NaCl + H2O')
 };
 const ui=C.UI_BINDING_AUDIT_V326||{};
 return {version:'3.27',tests,ui,pass:tests.water?.balanced&&tests.iron?.balanced&&tests.iron?.electronTransfer?.balancedElectrons&&tests.zinc?.electronTransfer?.balancedElectrons&&tests.neutral?.balanced};
}
C.REDOX_ENGINE_V327={version:'3.27',electronBalance:weightedElectronBalance,sourceOfTruth:'CHE.DATA + CHE.STRUCTURE',referenceReady:false};
C.RUNTIME_SMOKE_V327=runtimeSmoke();
C.MAX_VERIFY_V327={version:'3.27',modules:['WEIGHTED_REDOX','STOICHIOMETRY_REGRESSION','UI_BINDING_CONTRACT','RUNTIME_SMOKE'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
C.gapAuditV327=()=>({version:'3.27',runtime:C.RUNTIME_SMOKE_V327,referenceReady:false,next:['verify/promotion of source-backed L001-L013','redox source records','browser smoke regression']});
})();

} catch (err) {
  try { console.warn('[CHE module 212]', err && err.message ? err.message : err); } catch(_){}
}