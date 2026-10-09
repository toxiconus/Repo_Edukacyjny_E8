
(function(){
  'use strict';
  const C=window.CHE=window.CHE||{};
  const A=C.ATOM||{}; const D=C.DATA||{};
  function element(sym){ return C.PROFILE?.atom?.(sym,0) || C.DATA?.ELEMENTS_118?.find?.(e=>e.s===sym) || null; }
  function valences(sym){
    const e=element(sym), a=A.build?.(sym,0);
    return [...new Set([...(e?.v||e?.valences||e?.oxidationStates||[]),...(a?.valenceStates||[]),...(a?.oxidationStates||[])].map(Number).filter(Number.isFinite).map(Math.abs))].filter(Boolean).sort((x,y)=>x-y);
  }
  function charge(sym, fallback){
    const a=A.build?.(sym,0);
    const v=valences(sym);
    return Number(a?.commonCharges?.[0] ?? a?.oxidationStates?.find?.(x=>x>0) ?? v?.[0] ?? fallback ?? 0);
  }
  function formula(sym,vA,vB=2){ return C.CHEM?.valenceToFormula?.(sym,vA,vB) || C.FORMULA?.fromValences?.(sym,vA,'O',vB); }
  function substance(id){ return C.PROFILE?.substance?.(id) || C.DATA?.SUBSTANCES?.[id] || null; }
  function byFormula(f){ return C.PROFILE?.substancesForFormula?.(f) || []; }
  C.WIDGET_API={version:'0.05',sourceOfTruth:'FULL_ENGINE',element,valences,charge,formula,substance,byFormula};
})();
