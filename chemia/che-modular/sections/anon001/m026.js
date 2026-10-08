try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
function indicator(pH, id){
  id = id || 'universal';
  const ranges = C.DATA?.INDICATOR_RANGES || {};
  const r = ranges[id] || ranges.universal || null;
  if(!Number.isFinite(Number(pH))) return { id, pH:null, state:'unknown', color:null };
  if(Array.isArray(r)){
    const hit = r.find(x=> Number(pH) >= Number(x.min) && Number(pH) <= Number(x.max));
    return { id, pH:Number(pH), state:hit?.label||hit?.state||'unknown', color:hit?.color||null, range:hit||null };
  }
  return { id, pH:Number(pH), state:'measured', color:null };
}
function pHmeter(pH){ return { type:'pHmeter', value:Number(pH), valid:Number.isFinite(Number(pH)) && pH>=0 && pH<=14 }; }
function gas(reaction){
  const species = (reaction?.products||[]).filter(x=> /^(H2|CO2|O2|Cl2|NH3)$/.test(String(x.formula||'')));
  return { type:'gas', present:species.length>0, species:species.map(x=>x.formula) };
}
function precipitate(reaction){
  const products=(reaction?.products||[]);
  const species=products.filter(x=>{
    const f=String(x.formula||'');
    if(/\(s\)$/.test(f)||x.state==='s'||x.phase==='s') return true;
    const d=C.DATA?.SUBSTANCES?.[f];
    return d?.state==='s' || d?.role==='osad';
  });
  const inferred = !species.length && (reaction?.type==='precipitation' || /osad|precyp/i.test(String(reaction?.observation||''))) ? products.filter(x=>C.DATA?.SUBSTANCES?.[x.formula]?.role==='osad') : [];
  const hit=[...species,...inferred.filter(x=>!species.includes(x))];
  return { type:'precipitate', present:hit.length>0, species:hit.map(x=>x.formula) };
}
function color(substanceId){
  const p = C.DATA?.PHYSICAL_PROPS?.[substanceId];
  return { type:'color', substanceId, color:p?.color || null };
}
function observe(type, input){
  return typeof observe[type]==='function' ? observe[type](input) : { ok:false, error:'unknown observer ' + type };
}
Object.assign(observe, { indicator, pHmeter, gas, precipitate, color });
C.OBSERVER = { version:'2.17', registry:{indicator:true,pHmeter:true,gas:true,precipitate:true,color:true},
  observe, indicator, pHmeter, gas, precipitate, color };
})(window);

} catch (err) {
  try { console.warn('[CHE module 26]', err && err.message ? err.message : err); } catch(_){}
}

