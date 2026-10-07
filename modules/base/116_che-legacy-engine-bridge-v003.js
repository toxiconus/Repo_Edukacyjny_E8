<script id="che-legacy-engine-bridge-v003">
(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
const D=C.DATA||{};
const E=C.ENGINE||{};
const cleanFormula = f => String(f||'').replace(/[₀-₉]/g,m=>String('₀₁₂₃₄₅₆₇₈₉'.indexOf(m)));
function parseFormula(formula){
  try{
    if(C.CHEM?.parseFormula) return C.CHEM.parseFormula(cleanFormula(formula));
    if(C.EDUCATION_ENGINE?.parseFormula) return C.EDUCATION_ENGINE.parseFormula(cleanFormula(formula));
  }catch(_){}
  return {};
}
function element(symbol){
  return (D.ELEMENTS_118||[]).find(x=>x.s===symbol) || null;
}
function atomicMass(symbol){
  const e=element(symbol);
  return e?.m ?? e?.mass ?? D.ATOMIC_MASS?.[symbol] ?? D.ATOMIC_PROPS?.[symbol]?.atomicMass ?? null;
}
function molarMass(formula){
  try{
    if(C.EDUCATION_ENGINE?.molarMass){
      const r=C.EDUCATION_ENGINE.molarMass(cleanFormula(formula));
      return typeof r==='number'?r:r?.molarMass;
    }
  }catch(_){}
  const p=parseFormula(formula); let sum=0;
  for(const [s,n] of Object.entries(p)){const m=atomicMass(s); if(m==null)return NaN; sum+=m*Number(n);}
  return sum;
}
function valences(symbol){
  const e=element(symbol), a=C.ATOM?.build?.(symbol,0);
  return [...new Set([...(e?.v||e?.valences||e?.oxidationStates||[]),...(a?.valenceStates||[]),...(a?.oxidationStates||[])].map(Number).filter(Number.isFinite).map(Math.abs))].filter(Boolean).sort((a,b)=>a-b);
}
function valenceToFormula(symbol,vA,vB=2){
  try{
    if(C.CHEM?.valenceToFormula) return C.CHEM.valenceToFormula(symbol,vA,vB);
    if(C.FORMULA?.fromValences) return C.FORMULA.fromValences(symbol,vA,'O',vB);
  }catch(_){}
  const a=Math.abs(Number(vA)||1), b=Math.abs(Number(vB)||2), g0=(x,y)=>y?g0(y,x%y):x;
  const g1=g0(a,b), A=b/g1, B=a/g1;
  return symbol+(A===1?'':A)+(B===1?'O':'O'+B);
}
function balanceCharges(cation,anion,ratio){
  const ca=Number(cation?.charge)||0, an=Number(anion?.charge)||0;
  const r=Number(ratio)||Math.ceil(Math.abs(ca/an||1));
  return {cation,anion,ratio:r,sum:ca+r*an};
}
C.LEGACY_ENGINE_BRIDGE_PREP={version:'0.15',sourceOfTruth:'FULL_ENGINE',removedUnusedFacades:['CHE.chem','CHE.mol','CHE.core'],policy:'Only active legacy widget registry/mount compatibility remains.'};
C.LEGACY_WIDGETS=C.LEGACY_WIDGETS||new Map();
C.core=C.core||{};
if(!C.core.list) C.core.list=()=>Array.from(C.LEGACY_WIDGETS.keys());
if(!C.core.exportScenario) C.core.exportScenario=()=>({engine:E.version||null,data:E.dataVersion||null,source:'FULL_ENGINE',widgets:C.core.list()});
// Kompatybilny mount starego CHE.core, ale instancje są obsługiwane przez wspólny silnik widoków.
if(!C.mount) C.mount=function(name,selector,options){
  const root=typeof selector==='string'?document.querySelector(selector):selector;
  const factory=C.LEGACY_WIDGETS.get(name);
  if(factory && root){
    try{ const inst=factory({root,C,options:options||{}})||{}; if(inst.mount) inst.mount(); return inst; }catch(e){ console.warn('[CHE legacy widget]',name,e); }
  }
  if(C.VIEW?.autoMount && root) return C.VIEW.autoMount(root, options||{});
  return null;
};
C.sim=C.sim||{};
C.fx=C.fx||{};
C.color=C.color||{};
if(!C.color.ph) C.color.ph=p=>{const x=Math.max(0,Math.min(14,Number(p)||7)); return 'hsl('+Math.round((14-x)*17.14)+',70%,52%)';};
// Rejestr starych widgetów pozostaje zgodny z nowym CHE.VIEW.
if(!C.define) C.define=function(name,factory){C.LEGACY_WIDGETS.set(name,factory); if(C.VIEW?.define){
  C.VIEW.define('legacy:'+name,{title:name,tag:'LEGACY',build(body){const inst=factory({root:body,CHE:C}); if(inst?.mount)inst.mount(); return inst;}});
}};
C.LEGACY_ENGINE_BRIDGE={version:'0.03',sourceOfTruth:'FULL_ENGINE',consumerPolicy:'NO_ACTIVE_WIDGET_CONSUMERS',
  engineVersion:E.version||null,dataVersion:E.dataVersion||null,
  domains:['CHE.DATA','CHE.CHEM','CHE.ATOM','CHE.MOLECULE','CHE.STRUCTURE','CHE.REACTION','CHE.PROFILE'],
  noLocalChemistry:true,
  audit(){return {ok:true,sourceOfTruth:'FULL_ENGINE',engineVersion:E.version||null,dataVersion:E.dataVersion||null,profileBridge:!!C.PROFILE,moleculeBridge:!!C.MOLECULE};}
};
})(window);
</script>


