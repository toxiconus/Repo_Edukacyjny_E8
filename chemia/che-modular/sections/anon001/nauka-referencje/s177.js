

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'N2O(g)':{formula:'N2O',phase:'gas',CAS:'10024-97-2',formationEnthalpy:{value:82.05,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:219.96,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1400],A:27.67988,B:51.14898,C:-30.64454,D:6.847911,E:-0.157906,F:71.24934,G:238.6164,H:82.04824},{rangeK:[1400,6000],A:60.30274,B:1.034566,C:-0.192997,D:0.012540,E:-6.860254,F:48.61390,G:272.5002,H:82.04824}],source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'HF(g)':{formula:'HF',phase:'gas',CAS:'7664-39-3',formationEnthalpy:{value:-273.30,uncertainty:0.70,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:173.779,uncertainty:0.003,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1000],A:30.11693,B:-3.246612,C:2.868116,D:0.457914,E:-0.024861,F:-281.4912,G:210.9226,H:-272.5462},{rangeK:[1000,6000],A:24.57033,B:6.893391,C:-1.243874,D:0.082583,E:-0.234060,F:-279.7653,G:202.8525,H:-272.5462}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'HBr(g)':{formula:'HBr',phase:'gas',CAS:'10035-10-6',formationEnthalpy:{value:-36.29,uncertainty:0.16,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:198.700,uncertainty:0.004,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1100],A:31.71409,B:-13.69992,C:23.35567,D:-9.008529,E:-0.028758,F:-45.57464,G:240.0428,H:-36.44306},{rangeK:[1100,6000],A:32.88913,B:2.822116,C:-0.478035,D:0.032464,E:-3.174958,F:-52.46318,G:230.8597,H:-36.44306}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'HI(g)':{formula:'HI',phase:'gas',CAS:'10034-85-2',formationEnthalpy:{value:26.50,uncertainty:0.10,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:206.59,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[298,1400],A:26.04540,B:4.689678,C:4.911765,D:-2.654397,E:0.121419,F:18.75499,G:237.2018,H:26.35903},{rangeK:[1400,6000],A:35.44358,B:1.414708,C:-0.182088,D:0.011768,E:-4.054561,F:7.919099,G:240.1097,H:26.35903}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'Br2(g)':{formula:'Br2',phase:'gas',CAS:'7726-95-6',formationEnthalpy:{value:30.91,uncertainty:0.11,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:245.468,uncertainty:0.005,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[332.503,3400],A:38.52723,B:-1.976835,C:1.526107,D:-0.198398,E:-0.185815,F:18.87620,G:291.4863,H:30.91001},{rangeK:[3400,6000],A:34.99288,B:9.252248,C:-2.361588,D:0.154336,E:-43.07637,F:-7.467771,G:273.6303,H:30.91001}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'I2(g)':{formula:'I2',phase:'gas',CAS:'7553-56-2',formationEnthalpy:{value:62.42,uncertainty:0.08,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:260.687,uncertainty:0.005,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[{rangeK:[457.666,2000],A:37.79763,B:0.225453,C:-0.912556,D:1.034913,E:-0.083826,F:50.86865,G:305.9199,H:62.42110},{rangeK:[2000,6000],A:76.73414,B:-4.045782,C:-1.848145,D:0.219044,E:-82.39384,F:-53.87151,G:281.2267,H:62.42110}],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST295:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69',input:'dane.md',corrections:'Applied where supplied value differed from current NIST review value'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V295={version:'2.95',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V295='2.95';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V295={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V295',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.95';E.dataVersion='2.95';E.contractVersion='2.95';E.schemaVersion='2.95';if(E.PUBLIC)E.PUBLIC.version='2.95';
})(window);

} catch (err) {
  try { console.warn('[CHE module 177]', err && err.message ? err.message : err); } catch(_){}
}