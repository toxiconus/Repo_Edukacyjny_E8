try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const clone = o => { try { return JSON.parse(JSON.stringify(o)); } catch(_) { return o; } };
function get(id){
  const rx = C.DATA?.REACTIONS?.[id];
  if(!rx) return null;
  const meta = C.DATA?.REACTION_DATA?.[id] || {};
  const balance = C.CHEM.balanceReaction(rx);
  return { id, reactants:clone(rx.reactants), products:clone(rx.products),
    conditions:meta.conditions||'', type:meta.type||'unknown', observation:meta.observation||'',
    safety:meta.safety||[], balance, productKeys:meta.products||rx.products.map(x=>x.formula) };
}
function list(){ return Object.keys(C.DATA?.REACTIONS||{}).map(get).filter(Boolean); }
function equation(id){
  const r = get(id); if(!r) return '';
  const fmt = side => side.map(x => `${x.coef===1?'':x.coef+' '}${x.formula}`).join(' + ');
  return `${fmt(r.reactants)} → ${fmt(r.products)}`;
}
function check(id){ return !!get(id)?.balance?.ok; }
function audit(){
  const rows = list().map(r=>{
    const species = [...(r.reactants||[]), ...(r.products||[])];
    const SUBS = C.DATA?.SUBSTANCES||{}, byF = new Set(Object.values(SUBS).map(s=>s&&s.formula));  
    const missing = species.filter(x=>!SUBS[x.formula] && !byF.has(x.formula));
    return { id:r.id, type:r.type, balanced:!!r.balance?.ok, conditions:!!r.conditions,
      observation:!!r.observation, safety:(r.safety||[]).length>0, missing:missing.map(x=>x.formula) };
  });
  return { count:rows.length, unbalanced:rows.filter(x=>!x.balanced),
    missingData:rows.filter(x=>x.missing.length),
    incomplete:rows.filter(x=>!x.conditions||!x.observation||!x.safety), rows };
}
function thermochem(id, T){
  if(C.THERMO?.reactionGibbs) return C.THERMO.reactionGibbs(id, T || 298.15);
  return { ok:false, reason:'CHE.THERMO niedostępny' };
}
function redoxPotential(cathodePair, anodePair){
  if(C.ELECTRO?.cellPotential) return C.ELECTRO.cellPotential(cathodePair, anodePair);
  return { ok:false, reason:'CHE.ELECTRO niedostępny' };
}
C.REACTION = { version:'2.17', get, list, equation, check, audit, thermochem, redoxPotential };
})(window);

} catch (err) {
  try { console.warn('[CHE module 12]', err && err.message ? err.message : err); } catch(_){}
}

