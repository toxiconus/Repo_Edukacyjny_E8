try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const R = 8.314462618, F = 96485.33212;
function cellPotential(cathodePair, anodePair){
  const P = C.DATA?.REDOX_POTENTIALS || {};
  const ec = P[cathodePair], ea = P[anodePair];
  if(ec === undefined || ea === undefined)
    return { ok:false, reason:'brak pary w rejestrze', available:Object.keys(P) };
  return { ok:true, E0: ec - ea, unit:'V', cathode:cathodePair, anode:anodePair };
}
function nernst(E0, n, Q, T){
  E0=Number(E0); n=Number(n); Q=Number(Q); T=Number(T||298.15);
  if(!Number.isFinite(E0)||!Number.isFinite(n)||n<=0||!Number.isFinite(Q)||Q<=0||!Number.isFinite(T)||T<=0)
    return C.FAIL('CHE.E.INVALID_INPUT','E0, n, Q lub T niepoprawne',{E0,n,Q,T});
  const E = E0 - (R*T/(n*F))*Math.log(Q);
  return C.OK({ E, E0, n, Q, T, unit:'V' });
}
function pairs(){ return Object.keys(C.DATA?.REDOX_POTENTIALS || {}); }
C.ELECTRO = { version:'2.17', cellPotential, nernst, pairs, R, F };
})(window);

} catch (err) {
  try { console.warn('[CHE module 17]', err && err.message ? err.message : err); } catch(_){}
}

