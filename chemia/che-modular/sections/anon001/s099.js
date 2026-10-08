

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const fields={atomicRadius:{definitions:['covalent','metallic','empirical','calculated']},covalentRadius:{definitions:['singleBond','generic']},vdwRadius:{definitions:['vdW']},electronegativityPauling:{definitions:['Pauling']},electronAffinity:{definitions:['neutral_atom','first_EA']},ionizationEnergies:{definitions:['nth_ionization']},meltingPoint:{definitions:['normal_pressure']},boilingPoint:{definitions:['normal_pressure']},density:{definitions:['solid','liquid','gas','STP']},stateSTP:{definitions:['reference_state']},crystalStructure:{definitions:['phase_dependent']}};
C.ATOMIC_PROPERTY_SEMANTICS={version:'2.66',fields,validateRecord(r){const issues=[];for(const k of Object.keys(fields)){if(r&&r[k]!=null&&!fields[k].definitions.length)issues.push(k)}return {ok:issues.length===0,issues}}};
E.modules=E.modules||{};E.modules.ATOMIC_PROPERTY_SEMANTICS='2.66';E.registry=E.registry||{};E.registry.ATOMIC_PROPERTY_SEMANTICS={layer:'DATA/CONTRACT',owner:'CHE.ATOMIC_PROPERTY_SEMANTICS',depends:['ATOMIC_PROPS','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 99]', err && err.message ? err.message : err); } catch(_){}
}