

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};

function decay(parentSymbol, parentA, mode){
  return C.NUCLEUS.decayProduct(parentSymbol, parentA, mode);
}
function alphaDecay(symbol, A){ return decay(symbol, A, 'alpha'); }
function betaMinusDecay(symbol, A){ return decay(symbol, A, 'beta-'); }
function betaPlusDecay(symbol, A){ return decay(symbol, A, 'beta+'); }
function electronCapture(symbol, A){ return decay(symbol, A, 'EC'); }
function gammaEmission(symbol, A){ return decay(symbol, A, 'gamma'); }

function balance(reaction){
  if(!reaction) return { ok:false, reason:'brak reakcji' };
  const { parents=[], products=[] } = reaction;
  const sumA = (side)=> side.reduce((s,x)=> s + (Number(x.A)||0), 0);
  const sumZ = (side)=> side.reduce((s,x)=> s + (Number(x.Z)||0), 0);
  const parentA = sumA(parents), prodA = sumA(products);
  const parentZ = sumZ(parents), prodZ = sumZ(products);
  const ok = parentA === prodA && parentZ === prodZ;
  return { ok, deltaA: parentA - prodA, deltaZ: parentZ - prodZ, parentA, prodA, parentZ, prodZ };
}

function QValue(reaction){
  if(!reaction?.parents || !reaction?.products) return null;
  const AMU_MEV = C.DATA?.NUCLEAR_DATA?.constants?.amu || 931.494102;
  const massOf = (x)=>{
    if(typeof x.massAmu === 'number') return x.massAmu;
    if(x.isotopeMass != null) return x.isotopeMass;
    const iso = C.ISOTOPE?.get?.(x.symbol, x.A);
    return iso?.atomicMass ?? null;
  };
  const pMass = reaction.parents.reduce((s,x)=> s + (massOf(x) ?? 0), 0);
  const prMass = reaction.products.reduce((s,x)=> s + (massOf(x) ?? 0), 0);
  return (pMass - prMass) * AMU_MEV;
}

C.NUCLEAR = { version:'2.17', decay, alphaDecay, betaMinusDecay, betaPlusDecay,
  electronCapture, gammaEmission, balance, QValue };
})(window);

} catch (err) {
  try { console.warn('[CHE module 24]', err && err.message ? err.message : err); } catch(_){}
}