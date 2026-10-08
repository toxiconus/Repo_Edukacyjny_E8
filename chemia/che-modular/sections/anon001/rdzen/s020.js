

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const normFormula = f => {
  try { const parsed = C.CHEM.parseFormula(String(f||'')); if(!parsed) return '';
    return Object.keys(parsed).sort().map(k=> k+':'+parsed[k]).join('|');
  } catch(_) { return String(f||'').replace(/[₀-₉]/g,''); }
};
function elementRecord(symbol){ return (C.DATA?.ELEMENTS_118||[]).find(e=>e.s === symbol) || null; }
function atom(symbol, charge){
  charge = charge || 0;
  const a = C.MOLECULE.atom(symbol, charge);
  const periodic = elementRecord(symbol);
  const props = C.DATA?.ATOMIC_PROPS?.[symbol] || null;
  const atomModel = C.ATOM?.build?.(symbol, charge) || null;
  return {
    ...a,
    name: periodic?.n || symbol,
    group: periodic?.g ?? null,
    period: periodic?.p ?? null,
    classification: periodic?.t || null,
    electronegativity: periodic?.en ?? null,
    atomicProps: props,
    model: atomModel
  };
}
function substancesForFormula(formula){
  const n = normFormula(formula);
  return Object.entries(C.DATA?.SUBSTANCES||{})
    .filter(([,x])=> normFormula(x.formula) === n)
    .map(([id,x])=>({id, ...x}));
}
function reactionsForFormula(formula){
  const n = normFormula(formula), out = [];
  (C.REACTION?.list?.() || []).forEach(r=>{
    const hit = [...(r.reactants||[]), ...(r.products||[])].some(x=> normFormula(x.formula) === n);
    if(hit) out.push({ id:r.id, equation:C.REACTION.equation(r.id), type:r.type, conditions:r.conditions, observation:r.observation, products:r.products, safety:r.safety });
  });
  return out;
}
function molecule(id){
  const m = C.MOLECULE.get(id); if(!m) return null;
  return { ...m, substances: substancesForFormula(m.formula), reactions: reactionsForFormula(m.formula) };
}
function substance(id){
  const s = C.DATA?.SUBSTANCES?.[id];
  if(!s) return null;
  const reactions = reactionsForFormula(s.formula);
  const moleculeEntry = Object.keys(C.DATA?.MOLECULES||{})
    .map(k=> C.MOLECULE.get(k))
    .find(m=> m && normFormula(m.formula) === normFormula(s.formula)) || null;
  const acid = C.DATA?.ACID_SYSTEMS?.[id] || C.DATA?.ACIDS?.[id] || null;
  const physical = C.DATA?.PHYSICAL_PROPS?.[id] || null;
  const thermochem = C.DATA?.THERMOCHEM?.[id] || null;
  const solubility = C.DATA?.SOLUBILITY?.[id] || null;
  return { id, ...s, moleculeId:moleculeEntry?.id||null, reactions,
    acidSystem: acid ? {pKa:acid.pKa, Ka:acid.Ka, strong:acid.strong, anion:acid.anion} : null,
    physical, thermochem, solubility };
}
function reaction(id){
  const r = C.REACTION?.get?.(id); if(!r) return null;
  const meta = C.DATA?.REACTION_DATA?.[id] || {};
  const thermo = C.THERMO?.reactionGibbs?.(id) || null;
  return { ...r, ...meta, id, equation:C.REACTION.equation(id), thermo };
}
function linksForMolecule(id){
  const m = molecule(id); if(!m) return null;
  const atoms = [...new Set(m.atoms.map(a=>a.element))].map(atom);
  return { molecule:m, atoms, substances:m.substances, reactions:m.reactions };
}
C.PROFILE = { version:'2.17', atom, substancesForFormula, reactionsForFormula, molecule, substance, reaction, linksForMolecule };
})(window);

} catch (err) {
  try { console.warn('[CHE module 20]', err && err.message ? err.message : err); } catch(_){}
}