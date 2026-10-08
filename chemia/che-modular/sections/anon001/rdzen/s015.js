

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const conv = {
  amount:{ mol:1, mmol:1e-3, umol:1e-6 },
  mass:{ g:1, kg:1000, mg:1e-3 },
  volume:{ L:1, mL:1e-3, dm3:1, m3:1000 },
  concentration:{ 'mol/L':1, M:1, 'mmol/L':1e-3, 'mol/m3':1e-3 },
  pressure:{ Pa:1, kPa:1e3, bar:1e5, atm:101325 },
  temperature:{ K:{toK:x=>x,fromK:x=>x}, C:{toK:x=>x+273.15, fromK:x=>x-273.15} },
  energy:{ J:1, kJ:1e3 },
  time:{ s:1, min:60, h:3600 },
  charge:{ C:1, mC:1e-3 },
  length:{ m:1, cm:1e-2, mm:1e-3, pm:1e-12, nm:1e-9, A:1e-10 }
};
function convert(value, from, to, kind){
  const v = Number(value);
  if(!Number.isFinite(v)) return NaN;
  if(from === to) return v;
  const set = conv[kind];
  if(!set || !(from in set) || !(to in set)) return NaN;
  if(kind === 'temperature'){ const k = set[from].toK(v); return set[to].fromK(k); }
  return v * set[from] / set[to];
}
function describe(){ return Object.fromEntries(Object.entries(conv).map(([k,v])=>[k, Object.keys(v)])); }
C.UNITS = { version:'2.17', convert, describe };
})(window);

} catch (err) {
  try { console.warn('[CHE module 15]', err && err.message ? err.message : err); } catch(_){}
}