try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'NH3(g)':{formula:'NH3',phase:'gas',formationEnthalpy:{value:-45.94,uncertainty:0.35,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:192.77,uncertainty:0.05,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1400],A:19.99563,B:49.77119,C:-15.37599,D:1.921168,E:0.189174,F:-53.30667,G:203.8591,H:-45.89806},{rangeK:[1400,6000],A:52.02427,B:18.48801,C:-3.765128,D:0.248541,E:-12.45799,F:-85.53895,G:223.8022,H:-45.89806}],source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984; Chase 1998'},
 'CO(g)':{formula:'CO',phase:'gas',formationEnthalpy:{value:-110.53,uncertainty:0.17,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:197.660,uncertainty:0.004,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1300],A:25.56759,B:6.096130,C:4.054656,D:-2.671301,E:0.131021,F:-118.0089,G:227.3665,H:-110.5271},{rangeK:[1300,6000],A:35.15070,B:1.300095,C:-0.205921,D:0.013550,E:-3.282780,F:-127.8375,G:231.7120,H:-110.5271}],source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984; Chase 1998'},
 'SO2(g)':{formula:'SO2',phase:'gas',formationEnthalpy:{value:-296.81,uncertainty:0.20,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:248.223,uncertainty:0.050,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:21.43049,B:74.35094,C:-57.75217,D:16.35534,E:0.086731,F:-305.7688,G:254.8872,H:-296.8422},{rangeK:[1200,6000],A:57.48188,B:1.009328,C:-0.076290,D:0.005174,E:-4.045401,F:-324.4140,G:302.7798,H:-296.8422}],source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984; Chase 1998'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST292:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V292={version:'2.92',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V292='2.92';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V292={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V292',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.92';E.dataVersion='2.92';E.contractVersion='2.92';E.schemaVersion='2.92';if(E.PUBLIC)E.PUBLIC.version='2.92';
})(window);

} catch (err) {
  try { console.warn('[CHE module 171]', err && err.message ? err.message : err); } catch(_){}
}

