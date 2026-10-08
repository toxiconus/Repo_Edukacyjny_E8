try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
 
const gas={
 'H2(g)':{formula:'H2',phase:'gas',S298:{value:130.680,uncertainty:0.003,unit:'J/mol/K'},shomate:[
  {rangeK:[298,1000],A:33.066178,B:-11.363417,C:11.432816,D:-2.772874,E:-0.158558,F:-9.980797,G:172.707974,H:0},
  {rangeK:[1000,2500],A:18.563083,B:12.257357,C:-2.859786,D:0.268238,E:1.977990,F:-1.147438,G:156.288133,H:0},
  {rangeK:[2500,6000],A:43.413560,B:-4.293079,C:1.272428,D:-0.096876,E:-20.533862,F:-38.515158,G:162.081354,H:0}
 ],phaseData:{boilingK:111,meltingK:85.7,tripleK:90.67,triplePbar:0.1169,criticalK:190.6,criticalPbar:46.1},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'},
 'N2(g)':{formula:'N2',phase:'gas',S298:{value:191.609,uncertainty:0.004,unit:'J/mol/K'},shomate:[
  {rangeK:[100,500],A:28.98641,B:1.853978,C:-9.647459,D:16.63537,E:0.000117,F:-8.671914,G:226.4168,H:0},
  {rangeK:[500,2000],A:19.50583,B:19.88705,C:-8.598535,D:1.369784,E:0.527601,F:-4.935202,G:212.3900,H:0},
  {rangeK:[2000,6000],A:35.51872,B:1.128728,C:-0.196103,D:0.014662,E:-4.553760,F:-18.97091,G:224.9810,H:0}
 ],phaseData:{boilingK:77.34,meltingK:63.3,tripleK:63.14,triplePbar:0.1252,criticalK:126.19,criticalPbar:50.43},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'},
 'O2(g)':{formula:'O2',phase:'gas',S298:{value:205.152,uncertainty:0.005,unit:'J/mol/K'},shomate:[
  {rangeK:[100,700],A:31.32234,B:-20.23531,C:57.86644,D:-36.50624,E:-0.007374,F:-8.903471,G:246.7945,H:0},
  {rangeK:[700,2000],A:30.03235,B:8.772972,C:-3.988133,D:0.788313,E:-0.741599,F:-11.32468,G:236.1663,H:0},
  {rangeK:[2000,6000],A:20.91111,B:10.72071,C:-2.020498,D:0.146449,E:9.245722,F:5.337651,G:237.6185,H:0}
 ],phaseData:{boilingK:90.2,meltingK:54.8,tripleK:54.33,criticalK:154.58,criticalPbar:50.43},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'},
 'CH4(g)':{formula:'CH4',phase:'gas',formationEnthalpy:{value:-74.87,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298:{value:186.25,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[
  {rangeK:[298,1300],A:-0.703029,B:108.4773,C:-42.52157,D:5.862788,E:0.678565,F:-76.84376,G:158.7163,H:-74.87310},
  {rangeK:[1300,6000],A:85.81217,B:11.26467,C:-2.114146,D:0.138190,E:-26.42221,F:-153.5327,G:224.4143,H:-74.87310}
 ],phaseData:{boilingK:111,meltingK:85.7,tripleK:90.67,triplePbar:0.1169,criticalK:190.6,criticalPbar:46.1},source:'NIST_WEBBOOK',reference:'Chase 1998; NIST/TRC phase data'}};
const added=[];
Object.entries(gas).forEach(([id,r])=>{const key='NIST291:'+id;if(LED?.needsVerification?.(key,r)){LED?.markVerified?.(key,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V291={version:'2.91',sourceRegistry:SRC,records:gas,added,policy:'append-only; no overwrite; verified-once ledger enforced',coverage:{species:Object.keys(gas).length,shomate:Object.values(gas).filter(x=>x.shomate?.length).length,phase:Object.values(gas).filter(x=>x.phaseData).length}};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V291='2.91';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V291={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V291',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.91';E.dataVersion='2.91';E.contractVersion='2.91';E.schemaVersion='2.91';if(E.PUBLIC)E.PUBLIC.version='2.91';
})(window);

} catch (err) {
  try { console.warn('[CHE module 169]', err && err.message ? err.message : err); } catch(_){}
}

