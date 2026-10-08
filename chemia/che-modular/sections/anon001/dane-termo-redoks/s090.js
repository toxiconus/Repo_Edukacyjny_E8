

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const T=D.THERMOCHEM||{},ctx=D.THERMO_CONTEXT||{}; const records={};
Object.keys(T).forEach(k=>{const c=ctx[k]||{};records[k]={...T[k],unit:{dHf:'kJ/mol',S:'J/mol/K',Cp:'J/mol/K'},phase:c.phase||null,T_K:c.T_K??null,source:c.source||null,status:c.source?.includes?.('NIST')?'REFERENCE_CANDIDATE':'LEGACY_NEEDS_VERIFICATION'};});
D.THERMO_REFERENCE=records;
function audit(){const a=Object.values(records);return {records:a.length,withPhase:a.filter(x=>x.phase).length,withTemperature:a.filter(x=>Number.isFinite(x.T_K)).length,withSource:a.filter(x=>x.source).length,referenceCandidate:a.filter(x=>x.status==='REFERENCE_CANDIDATE').length,needsVerification:a.filter(x=>x.status==='LEGACY_NEEDS_VERIFICATION').length};}
C.THERMO_REFERENCE={version:'2.62',audit,get:k=>records[k]||null};
E.modules=E.modules||{};E.modules.THERMO_REFERENCE='2.62';E.registry=E.registry||{};E.registry.THERMO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.THERMO_REFERENCE',depends:['THERMOCHEM','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 90]', err && err.message ? err.message : err); } catch(_){}
}