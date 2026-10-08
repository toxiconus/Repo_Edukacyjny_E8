

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'H2S(g)':{formula:'H2S',phase:'gas',CAS:'7783-06-4',formationEnthalpy:{value:-20.6,uncertainty:0.5,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:205.81,uncertainty:0.05,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1400],A:26.88412,B:18.67809,C:3.434203,D:-3.378702,E:0.135882,F:-28.91211,G:233.3747,H:-20.50202},{rangeK:[1400,6000],A:51.22136,B:4.147486,C:-0.643566,D:0.041621,E:-10.46385,F:-55.87606,G:243.6900,H:-20.50202}],phaseData:{boilingK:{value:212.87,uncertainty:0.07,unit:'K'},meltingK:{value:190.85,uncertainty:1.5,unit:'K'},tripleK:{value:187.66,uncertainty:0.06,unit:'K'},vaporization:{value:19.5,unit:'kJ/mol',T:200},sublimation:{value:22.5,unit:'kJ/mol',T:135}},source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998; TRC phase data'}};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST294:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V294={version:'2.94',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V294='2.94';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V294={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V294',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.94';E.dataVersion='2.94';E.contractVersion='2.94';E.schemaVersion='2.94';if(E.PUBLIC)E.PUBLIC.version='2.94';
})(window);

} catch (err) {
  try { console.warn('[CHE module 175]', err && err.message ? err.message : err); } catch(_){}
}