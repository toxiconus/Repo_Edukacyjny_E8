try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const records={'H2S(g)-water-298.15-Hs-bp':{species:'H2S(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:0.087,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2100,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST entry lists multiple compilation methods and some entries lack citation; do not promote to referenceReady without resolving source provenance.'}};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST301:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69',input:'dane.md'});added.push(id);}});
D.SCIENCE_HENRY_REFERENCE_V301={version:'3.01',records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_HENRY_REFERENCE_V301='3.01';E.registry=E.registry||{};E.registry.SCIENCE_HENRY_REFERENCE_V301={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_HENRY_REFERENCE_V301',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / conditional database values'};
E.SCIENCE_HENRY_REGRESSION_V301={run(){const r=D.SCIENCE_HENRY_REFERENCE_V301.records;const x=r['H2S(g)-water-298.15-Hs-bp'];const checks=[['record',!!x],['value',x?.value===0.087],['type',x?.constantType==='Henry_solubility_Hs_bp'],['temperature',x?.temperatureK===298.15],['not reference ready',x?.referenceReady===false],['ledger',Array.isArray(D.SCIENCE_HENRY_REFERENCE_V301.added)]];return {version:'3.01',ok:checks.every(a=>a[1]),checks,added:D.SCIENCE_HENRY_REFERENCE_V301.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 185]', err && err.message ? err.message : err); } catch(_){}
}

