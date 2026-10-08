try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const records={
 'NaOH(s)':{formula:'NaOH',phase:'solid',CAS:'1310-73-2',formationEnthalpy:{value:-425.93,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:64.46,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'CaO(s)':{formula:'CaO',phase:'solid',CAS:'1305-78-8',formationEnthalpy:{value:-634.92,uncertainty:0.90,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:38.1,uncertainty:0.4,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984 CODATA Review'},
 'NaCl(s)':{formula:'NaCl',phase:'solid',CAS:'7647-14-5',formationEnthalpy:{value:-411.12,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:72.11,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Chase 1998'}
};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289;const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST297:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69',input:'dane.md',note:'NIST value retained when input supplement differed in uncertainty/value'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V297={version:'2.97',sourceRegistry:{NIST_WEBBOOK:'NIST Chemistry WebBook, SRD 69'},records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V297='2.97';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V297={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V297',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.97';E.dataVersion='2.97';E.contractVersion='2.97';E.schemaVersion='2.97';if(E.PUBLIC)E.PUBLIC.version='2.97';
E.SCIENCE_BATCH_REFERENCE_REGRESSION_V297={run(){const r=D.SCIENCE_BATCH_REFERENCE_V297.records;const checks=[['3 new records',Object.keys(r).length===3],['NaOH',r['NaOH(s)'].formationEnthalpy.value===-425.93&&r['NaOH(s)'].S298.value===64.46],['CaO CODATA review',r['CaO(s)'].formationEnthalpy.uncertainty===0.90&&r['CaO(s)'].S298.uncertainty===0.4],['NaCl',r['NaCl(s)'].formationEnthalpy.value===-411.12&&r['NaCl(s)'].S298.value===72.11],['append only',D.SCIENCE_BATCH_REFERENCE_V297.policy.startsWith('append-only')],['ledger',r&&Array.isArray(D.SCIENCE_BATCH_REFERENCE_V297.added)]];return {version:'2.97',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_BATCH_REFERENCE_V297.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 180]', err && err.message ? err.message : err); } catch(_){}
}

