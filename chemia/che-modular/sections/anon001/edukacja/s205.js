

try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{};
CHE.EDUCATION_ENGINE_V322=CHE.EDUCATION_ENGINE_V322||{};
const E=CHE.EDUCATION_ENGINE_V322;
const src='CHE_EDUCATION_ENGINE_V322';
function num(x){const n=Number(x);return Number.isFinite(n)?n:null}
function coeffMap(eq){return (eq?.reactants||[]).map(x=>({formula:x.formula,coef:num(x.coef)||0}));}
E.limitingReagent=function(eq,amounts){
 const rs=coeffMap(eq).filter(x=>x.coef>0), ratios=rs.map(x=>({formula:x.formula,available:num(amounts?.[x.formula]),required:x.coef,extent:(num(amounts?.[x.formula])||0)/x.coef}));
 if(!ratios.length||ratios.some(x=>x.available===null||x.available<0)) return {ok:false,status:'INVALID_INPUT',source:src};
 const m=Math.min(...ratios.map(x=>x.extent)), lim=ratios.filter(x=>Math.abs(x.extent-m)<=1e-12).map(x=>x.formula);
 return {ok:true,status:'COMPUTED',extent:m,limitingReagents:lim,ratios,source:src};
};
E.theoreticalProduct=function(eq,amounts,product){
 const lim=E.limitingReagent(eq,amounts); if(!lim.ok)return lim;
 const p=(eq?.products||[]).find(x=>x.formula===product); if(!p||!(num(p.coef)>0))return {ok:false,status:'PRODUCT_NOT_FOUND',source:src};
 return {...lim,product,productAmount:lim.extent*p.coef};
};
E.percentYield=function(actual,theoretical){const a=num(actual),t=num(theoretical);if(a===null||t===null||t<=0||a<0)return {ok:false,status:'INVALID_INPUT',source:src};return {ok:true,status:'COMPUTED',percent:100*a/t,source:src};};
E.ionic={
 dissociation:{'HCl':['H+','Cl-'],'NaOH':['Na+','OH-'],'Ca(OH)2':['Ca2+','2OH-'],'H2SO4':['2H+','SO4^2-']},
 net:function(spec){
  if(!spec||!Array.isArray(spec.reactants)||!Array.isArray(spec.products))return {ok:false,status:'INVALID_INPUT',source:src};
  const key=x=>`${x.formula}|${x.charge??''}`;
  const r=new Map(),p=new Map();
  for(const x of spec.reactants){const k=key(x);r.set(k,(r.get(k)||0)+(num(x.coef)||1));}
  for(const x of spec.products){const k=key(x);p.set(k,(p.get(k)||0)+(num(x.coef)||1));}
  const all=new Set([...r.keys(),...p.keys()]), net=[];
  for(const k of all){const rr=r.get(k)||0,pp=p.get(k)||0;if(rr!==pp)net.push({side:rr>pp?'reactants':'products',coef:Math.abs(rr-pp),token:k});}
  return {ok:true,status:'COMPUTED',net,source:src,note:'Reducer does not invent spectator ions; inputs must carry charge.'};
 }
};
E.chargeBalance=function(spec){
 const side=s=>(s||[]).reduce((a,x)=>a+(num(x.coef)||1)*(num(x.charge)||0),0);
 const r=side(spec?.reactants),p=side(spec?.products);return {ok:true,reactantCharge:r,productCharge:p,balanced:Math.abs(r-p)<1e-12,source:src};
};
E.structureBridge={
 fromEquation:function(eq){
  const out={components:[],source:src};
  for(const side of ['reactants','products'])for(const x of (eq?.[side]||[]))out.components.push({side,formula:x.formula,coef:num(x.coef)||1,structureRef:x.structureRef||null});
  return out;
 },
 validate:function(graph){
  const atoms=Array.isArray(graph?.atoms)?graph.atoms:[], bonds=Array.isArray(graph?.bonds)?graph.bonds:[];
  const ids=new Set(atoms.map(a=>a.id));
  const bad=bonds.filter(b=>!ids.has(b.a)||!ids.has(b.b)||!(num(b.order)>0));
  return {ok:bad.length===0,status:bad.length?'INVALID_GRAPH':'GRAPH_OK',atomCount:atoms.length,bondCount:bonds.length,invalidBonds:bad.length,source:src};
 }
};
E.taskFactory=function(type,input={}){
 const common={id:`V322_${type}_${Date.now()}`,type,source:src,level:input.level||'SP7-8'};
 if(type==='LIMITING')return {...common,prompt:'Wyznacz reagent ograniczający i ilość produktu.',inputs:['balancedEquation','reactantAmounts'],engine:'limitingReagent'};
 if(type==='YIELD')return {...common,prompt:'Oblicz wydajność reakcji.',inputs:['actual','theoretical'],engine:'percentYield'};
 if(type==='IONIC')return {...common,prompt:'Zapisz równanie jonowe skrócone i sprawdź ładunek.',inputs:['reactants','products'],engine:'ionic.net'};
 if(type==='STRUCTURE')return {...common,prompt:'Sprawdź zgodność grafu cząsteczki z kontraktem strukturalnym.',inputs:['graph'],engine:'structureBridge.validate'};
 return {...common,status:'UNKNOWN_TASK'};
};
E.selfTest=function(){
 const r=E.limitingReagent({reactants:[{formula:'H2',coef:2},{formula:'O2',coef:1}],products:[{formula:'H2O',coef:2}]},{H2:3,O2:2});
 const y=E.percentYield(8,10), c=E.chargeBalance({reactants:[{formula:'H+',coef:1,charge:1},{formula:'Cl-',coef:1,charge:-1}],products:[{formula:'HCl',coef:1,charge:0}]});
 return {limiting:r.limitingReagents.join(','),yield:y.percent,chargeBalanced:c.balanced,pass:r.ok&&y.ok&&c.balanced};
};
CHE.EDUCATION_MAX_BATCH_V322={version:'3.22',source:src,referenceReady:false,modules:['LIMITING_REAGENT','THEORETICAL_PRODUCT','PERCENT_YIELD','IONIC_EQUATIONS','CHARGE_BALANCE','STRUCTURE_BRIDGE','TASK_FACTORY'],selfTest:E.selfTest()};
})();

} catch (err) {
  try { console.warn('[CHE module 207]', err && err.message ? err.message : err); } catch(_){}
}