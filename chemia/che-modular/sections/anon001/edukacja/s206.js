

try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{};
const E=CHE.EDUCATION_ENGINE_V322||{};
const src='CHE_EDUCATION_ENGINE_V323';
function num(x){const n=Number(x);return Number.isFinite(n)?n:null}
function normalizedReactants(eq){
  const raw=Array.isArray(eq?.reactants)?eq.reactants:[];
  const coeffs=Array.isArray(eq?.coefficients?.reactants)?eq.coefficients.reactants:null;
  return raw.map((x,i)=>({formula:x.formula,coef:num(x.coef)??num(coeffs?.[i])??0}));
}
E.limitingReagent=function(eq,amounts){
 const rs=normalizedReactants(eq).filter(x=>x.coef>0);
 const ratios=rs.map(x=>({formula:x.formula,available:num(amounts?.[x.formula]),required:x.coef,extent:(num(amounts?.[x.formula])||0)/x.coef}));
 if(!ratios.length||ratios.some(x=>x.available===null||x.available<0)) return {ok:false,status:'INVALID_INPUT',source:src};
 const m=Math.min(...ratios.map(x=>x.extent));
 const lim=ratios.filter(x=>Math.abs(x.extent-m)<=1e-12).map(x=>x.formula);
 return {ok:true,status:'COMPUTED',extent:m,limitingReagents:lim,ratios,source:src};
};
E.theoreticalProduct=function(eq,amounts,product){
 const lim=E.limitingReagent(eq,amounts); if(!lim.ok)return lim;
 const products=Array.isArray(eq?.products)?eq.products:[];
 const idx=products.findIndex(x=>x.formula===product);
 const coef=num(products[idx]?.coef)??num(eq?.coefficients?.products?.[idx]);
 if(idx<0||!(coef>0))return {ok:false,status:'PRODUCT_NOT_FOUND',source:src};
 return {...lim,product,productCoefficient:coef,productAmount:lim.extent*coef};
};
E.taskFactory=function(type,input={}){
 const signature=JSON.stringify({type,input,version:'3.23'});
 let h=2166136261; for(let i=0;i<signature.length;i++){h^=signature.charCodeAt(i);h=Math.imul(h,16777619)}
 const id=`V323_${type}_${(h>>>0).toString(16).padStart(8,'0')}`;
 const common={id,type,source:src,level:input.level||'SP7-8'};
 if(type==='LIMITING')return {...common,prompt:'Wyznacz reagent ograniczający i ilość produktu.',inputs:['balancedEquation','reactantAmounts'],engine:'limitingReagent'};
 if(type==='YIELD')return {...common,prompt:'Oblicz wydajność reakcji.',inputs:['actual','theoretical'],engine:'percentYield'};
 if(type==='IONIC')return {...common,prompt:'Zapisz równanie jonowe skrócone i sprawdź ładunek.',inputs:['reactants','products'],engine:'ionic.net'};
 if(type==='STRUCTURE')return {...common,prompt:'Sprawdź zgodność grafu cząsteczki z kontraktem strukturalnym.',inputs:['graph'],engine:'structureBridge.validate'};
 return {...common,status:'UNKNOWN_TASK'};
};
E.regressionV323=function(){
 const bal=CHE.EDUCATION_ENGINE?.balanceEquation?.('H2 + O2 -> H2O');
 const lr=E.limitingReagent(bal,{H2:3,O2:2});
 const prod=E.theoreticalProduct(bal,{H2:3,O2:2},'H2O');
 const task1=E.taskFactory('LIMITING',{level:'LO'}), task2=E.taskFactory('LIMITING',{level:'LO'});
 const charge=E.chargeBalance({reactants:[{formula:'H+',coef:1,charge:1},{formula:'Cl-',coef:1,charge:-1}],products:[{formula:'HCl',coef:1,charge:0}]});
 return {version:'3.23',balance:bal?.equation||null,limiting:lr.limitingReagents,extent:lr.extent,productAmount:prod.productAmount,deterministicTaskId:task1.id===task2.id,chargeBalanced:charge.balanced,pass:!!bal?.balanced&&lr.ok&&prod.ok&&task1.id===task2.id&&charge.balanced};
};
CHE.EDUCATION.MAX_REPAIR_V323={version:'3.23',source:src,repairs:['limitingReagent accepts coefficients returned by balanceEquation','theoreticalProduct accepts coefficient maps','taskFactory IDs are deterministic','regression gate added'],referenceReady:false,noSecondDatabase:true};
CHE.EDUCATION.gapAuditV323=function(){const r=E.regressionV323();return {version:'3.23',regression:r,referenceReady:false,next:['full L001-L013 canonical reconciliation','redox electron-balance','UI binding audit','browser runtime test']};};
})();

} catch (err) {
  try { console.warn('[CHE module 208]', err && err.message ? err.message : err); } catch(_){}
}