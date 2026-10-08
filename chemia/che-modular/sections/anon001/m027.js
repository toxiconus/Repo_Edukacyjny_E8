try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const finite = x => Number.isFinite(Number(x));
function state(reactionId, xi, initial){
  const extent = Number(xi); const base = initial && typeof initial === 'object' ? initial : {};
  const rx = C.REACTION?.get?.(reactionId);
  if(!rx) return { ok:false, error:'unknown reaction' };
  const reactants = (rx.reactants || []).filter(r => Number(r.coef) > 0);
  const maxes = reactants.map(r=>{
    const n = Number(base[r.formula]);
    return finite(n) && n >= 0 && Number(r.coef) > 0 ? n / Number(r.coef) : Infinity;
  });
  const max = maxes.length ? Math.min(...maxes) : 0;
  const xiMax = Number.isFinite(max) ? Math.max(0, max) : 0;
  const safeXi = Number.isFinite(extent) ? Math.max(0, Math.min(extent, xiMax)) : 0;
  const species = {};
  [...(rx.reactants||[]), ...(rx.products||[])].forEach(r=>{
    const initial0 = Number(base[r.formula] || 0);
    const delta = (rx.reactants?.some(x=>x.formula===r.formula) ? -1 : 1) * Number(r.coef || 1) * safeXi;
    species[r.formula] = Math.max(0, initial0 + delta);
  });
  return { ok:true, reactionId, xi:safeXi, xiMax, fraction:xiMax>0 ? safeXi/xiMax : 0, species };
}
function range(reactionId, initial){
  const s = state(reactionId, 0, initial || {});
  return s.ok ? { min:0, max:s.xiMax, unit:'mol extent' } : s;
}
C.PROGRESS = { version:'2.17', state, range };
})(window);

} catch (err) {
  try { console.warn('[CHE module 27]', err && err.message ? err.message : err); } catch(_){}
}

