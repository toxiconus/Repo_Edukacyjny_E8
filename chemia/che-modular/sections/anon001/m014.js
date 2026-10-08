try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const finite = x => Number.isFinite(Number(x));
const NA = 6.02214076e23;
function massFromMol(n, formula){ const M=C.CHEM.molarMass(formula); return finite(n)&&Number(n)>=0&&Number.isFinite(M)?Number(n)*M:NaN; }
function molFromMass(m, formula){ const M=C.CHEM.molarMass(formula); return finite(m)&&Number(m)>=0&&Number.isFinite(M)&&M>0?Number(m)/M:NaN; }
function concentrationFromMolVolume(n, V){ return finite(n)&&finite(V)&&Number(V)>0?Number(n)/Number(V):NaN; }
function molFromConcentrationVolume(c, V){ return finite(c)&&finite(V)&&Number(c)>=0&&Number(V)>=0?Number(c)*Number(V):NaN; }
function particlesFromMol(n){ return finite(n)&&Number(n)>=0?Number(n)*NA:NaN; }
function limitingReagent(reactionId, available){
  const rx = C.REACTION?.get(reactionId);
  if(!rx || !available) return { ok:false, reason:'brak reakcji lub ilości' };
  const ratios = rx.reactants.map(r=>({ formula:r.formula, coef:r.coef, mol:Number(available[r.formula]), ratio:Number(available[r.formula])/r.coef }));
  if(ratios.some(x=>!finite(x.mol)||x.mol<0)) return { ok:false, reason:'nieprawidłowa ilość mola' };
  const extent = Math.min(...ratios.map(x=>x.ratio));
  const limiting = ratios.filter(x=>Math.abs(x.ratio-extent)<=Math.max(1e-12, Math.abs(extent)*1e-10)).map(x=>x.formula);
  const consumed = {}; rx.reactants.forEach(r=> consumed[r.formula] = extent*r.coef);
  const produced = {}; rx.products.forEach(r=> produced[r.formula] = extent*r.coef);
  const remaining = {}; ratios.forEach(x=> remaining[x.formula] = x.mol - consumed[x.formula]);
  return { ok:true, reactionId, extent, limiting, consumed, remaining, produced };
}
function yieldPercent(actual, theoretical){
  return finite(actual)&&finite(theoretical)&&Number(theoretical)>0?100*Number(actual)/Number(theoretical):NaN;
}
C.STOICH = { version:'2.17', massFromMol, molFromMass, concentrationFromMolVolume,
  molFromConcentrationVolume, particlesFromMol, limitingReagent, yieldPercent, NA };
})(window);

} catch (err) {
  try { console.warn('[CHE module 14]', err && err.message ? err.message : err); } catch(_){}
}

