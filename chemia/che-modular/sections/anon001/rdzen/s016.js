

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const R = 8.314462618;
function gibbs(dH, dS, T){
  dH=Number(dH); dS=Number(dS); T=Number(T||298.15);
  if(!Number.isFinite(dH)||!Number.isFinite(dS)||!Number.isFinite(T)||T<=0)
    return C.FAIL('CHE.E.INVALID_INPUT','dH, dS lub T niepoprawne',{dH,dS,T});
  const dG = dH - T*dS/1000;
  return C.OK({ dG, unit:'kJ/mol', spontaneous: dG<0, T });
}
function sumSideThermo(side){
  const T = C.DATA?.THERMOCHEM || {};
  let dH=0, dS=0, complete=true; const missing=[];
  (side||[]).forEach(x=>{
    const th = T[x.formula];
    if(!th){ complete=false; missing.push(x.formula); return; }
    dH += th.dHf*x.coef; dS += th.S*x.coef;
  });
  return { dH, dS, complete, missing };
}
function reactionEnthalpy(id){
  const r = C.DATA?.REACTIONS?.[id];
  if(!r) return C.FAIL('CHE.E.DATA_NOT_FOUND','brak reakcji',{id});
  const L = sumSideThermo(r.reactants), R_ = sumSideThermo(r.products);
  if(!L.complete || !R_.complete) return C.FAIL('CHE.E.DATA_NOT_FOUND','brak danych termochemicznych',{missing:[...L.missing,...R_.missing]});
  return C.OK({ dH: R_.dH - L.dH, unit:'kJ/mol' });
}
function reactionEntropy(id){
  const r = C.DATA?.REACTIONS?.[id];
  if(!r) return C.FAIL('CHE.E.DATA_NOT_FOUND','brak reakcji',{id});
  const L = sumSideThermo(r.reactants), R_ = sumSideThermo(r.products);
  if(!L.complete || !R_.complete) return C.FAIL('CHE.E.DATA_NOT_FOUND','brak danych termochemicznych',{missing:[...L.missing,...R_.missing]});
  return C.OK({ dS: R_.dS - L.dS, unit:'J/(mol·K)' });
}
function reactionGibbs(id, T){
  T = Number(T||298.15);
  const r = C.DATA?.REACTIONS?.[id];
  if(!r) return { ok:false, reason:'brak reakcji', id };
  const L = sumSideThermo(r.reactants), R_ = sumSideThermo(r.products);
  if(!L.complete || !R_.complete) return { ok:false, reason:'brak danych termochemicznych', missing:[...L.missing,...R_.missing], id };
  const dH = R_.dH - L.dH, dS = R_.dS - L.dS, dG = dH - T*dS/1000;
  return { ok:true, id, T, dH, dS, dG, spontaneous: dG<0, unit:'kJ/mol' };
}
function arrhenius(k0, Ea, T){
  k0=Number(k0); Ea=Number(Ea); T=Number(T||298.15);
  if(!Number.isFinite(k0)||!Number.isFinite(Ea)||!Number.isFinite(T)||T<=0)
    return C.FAIL('CHE.E.INVALID_INPUT','k0, Ea lub T niepoprawne',{k0,Ea,T});
  const k = k0 * Math.exp(-(Ea*1000)/(R*T));
  return C.OK({ k, k0, Ea, T, unit:'1/s' });
}
C.THERMO = { version:'2.17', gibbs, reactionEnthalpy, reactionEntropy, reactionGibbs, arrhenius, R };
})(window);

} catch (err) {
  try { console.warn('[CHE module 16]', err && err.message ? err.message : err); } catch(_){}
}