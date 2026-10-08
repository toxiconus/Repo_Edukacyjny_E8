try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, E=CHE.EDUCATION_ENGINE||{}, X=CHE.EDUCATION_ENGINE_V322||{}, src='CHE_EDUCATION_ENGINE_V325';
const previous=E.balanceEquation;
E.balanceEquation=function(eq){
 const b=previous(eq);
 b.reactants=b.reactants.map((x,i)=>({...x,coef:b.coefficients.reactants[i]}));
 b.products=b.products.map((x,i)=>({...x,coef:b.coefficients.products[i]}));
 b.source=src;
 return b;
};
X.regressionV325=function(){
 const b=E.balanceEquation('H2 + O2 -> H2O');
 const lr=X.limitingReagent(b,{H2:3,O2:2});
 const pr=X.theoreticalProduct(b,{H2:3,O2:2},'H2O');
 const y=X.percentYield(2.7,3);
 const b2=E.balanceEquation('Fe + O2 -> Fe2O3');
 const pass=b.balanced&&b.reactants[0].coef===2&&b.products[0].coef===2&&lr.limitingReagents.length===1&&lr.limitingReagents[0]==='H2'&&Math.abs(pr.productAmount-3)<1e-12&&Math.abs(y.percent-90)<1e-12&&b2.balanced;
 return {version:'3.25',equation:b.equation,coefficients:b.coefficients,limiting:lr.limitingReagents,extent:lr.extent,productAmount:pr.productAmount,yield:y.percent,pass};
};
CHE.EDUCATION.MAX_REPAIR_V325={version:'3.25',source:src,repairs:['balanced coefficients propagated into reaction terms','limiting reagent now consumes canonical coefficient fields','regression extended to yield'],referenceReady:false,noSecondDatabase:true};
CHE.EDUCATION.gapAuditV325=function(){return {version:'3.25',regression:X.regressionV325(),referenceReady:false,next:['L001-L013 canonical reconciliation','redox electron balance','UI binding audit','browser smoke test']}};
})();

} catch (err) {
  try { console.warn('[CHE module 210]', err && err.message ? err.message : err); } catch(_){}
}

