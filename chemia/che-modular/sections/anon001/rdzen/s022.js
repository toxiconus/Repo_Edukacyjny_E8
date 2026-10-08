

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};

function list(symbol){
  const arr = C.DATA?.ISOTOPES?.[symbol];
  return Array.isArray(arr) ? arr.slice() : [];
}
function get(symbol, massNumber){
  return list(symbol).find(x=> x.A === Number(massNumber)) || null;
}
function stable(symbol, massNumber){
  const iso = get(symbol, massNumber);
  return iso ? !!iso.stable : false;
}
function halfLife(symbol, massNumber){
  const iso = get(symbol, massNumber);
  return iso?.halfLife ?? null;
}
function decayMode(symbol, massNumber){
  const iso = get(symbol, massNumber);
  return iso?.decayMode ?? null;
}

function averageMass(symbol){
  const arr = list(symbol); if(!arr.length) return null;
  const totalAb = arr.reduce((s,x)=> s + (x.abundance||0), 0);
  if(totalAb <= 0) return null;
  const weighted = arr.reduce((s,x)=> s + (x.abundance||0) * (x.atomicMass||0), 0);
  return weighted / totalAb;
}
function naturalAbundance(symbol, massNumber){
  const iso = get(symbol, massNumber);
  return iso?.abundance ?? null;
}
function applications(symbol, massNumber){
  const iso = get(symbol, massNumber);
  return iso?.applications ?? [];
}

C.ISOTOPE = { version:'2.17', list, get, stable, halfLife, decayMode, averageMass, naturalAbundance, applications };
})(window);

} catch (err) {
  try { console.warn('[CHE module 22]', err && err.message ? err.message : err); } catch(_){}
}