

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const clone = o => { try { return JSON.parse(JSON.stringify(o)); } catch(_) { return o; } };
const cache = new Map();
function rebuildSubstances(){
  const out = {};
  Object.entries(C.DATA?.SUBSTANCES||{}).forEach(([id, x])=>{
    const formula = x.formula || '';
    const calculated = C.CHEM?.molarMass?.(formula);
    out[id] = { composition:C.CHEM?.parseFormula?.(formula)||null,
      molarMassCalculated:calculated,
      massCheck:Number.isFinite(calculated) && Number.isFinite(Number(x.molarMass)) && Math.abs(calculated - Number(x.molarMass)) < 0.02 };
  });
  return out;
}
const substances = rebuildSubstances();
function invalidate(scope){
  if(!scope) cache.clear();
  else Object.keys(cache).forEach(k=>{ if(k.startsWith(scope)) cache.delete(k); });
}
function cacheGet(key, producer){
  if(cache.has(key)) return clone(cache.get(key));
  const value = producer();
  if(value !== null && value !== undefined) cache.set(key, clone(value));
  return clone(value);
}
C.DERIVED = { version:'2.17', substances, rebuildSubstances, invalidate, cacheGet };
})(window);

} catch (err) {
  try { console.warn('[CHE module 28]', err && err.message ? err.message : err); } catch(_){}
}