

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
const records={
 'H2O2(g)':{formula:'H2O2',phase:'gas',formationEnthalpy:{value:-136.11,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:232.95,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1500],A:34.25667,B:55.18445,C:-35.15443,D:9.087440,E:-0.422157,F:-149.9098,G:257.0604,H:-136.1064}],phaseData:{T_fus:{value:272.26,unit:'K',source:'TRC'},T_c:{value:728,uncertainty:15,unit:'K',source:'TRC'},P_c:{value:220,uncertainty:20,unit:'bar',source:'TRC'}},source:'NIST_WEBBOOK',reference:'Chase 1998; TRC'},
 'NO(g)':{formula:'NO',phase:'gas',formationEnthalpy:{value:90.29,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:210.76,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:23.83491,B:12.58878,C:-1.139011,D:-1.497459,E:0.214194,F:83.35783,G:237.1219,H:90.29114},{rangeK:[1200,6000],A:35.99169,B:0.957170,C:-0.148032,D:0.009974,E:-3.004088,F:73.10787,G:246.1619,H:90.29114}],source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'NO2(g)':{formula:'NO2',phase:'gas',formationEnthalpy:{value:33.10,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:240.0,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:16.10857,B:75.89525,C:-54.38740,D:14.30777,E:0.239423,F:26.17464,G:240.5386,H:33.09502},{rangeK:[1200,6000],A:56.82541,B:0.738053,C:-0.144721,D:0.009777,E:-5.459911,F:2.846456,G:290.5056,H:33.09502}],source:'NIST_WEBBOOK',reference:'Chase 1998'},
 'SO3(g)':{formula:'SO3',phase:'gas',formationEnthalpy:{value:-395.77,unit:'kJ/mol',T:298.15,P:'1 bar'},S298:{value:256.77,unit:'J/mol/K',T:298.15,P:'1 bar'},shomate:[{rangeK:[298,1200],A:24.02503,B:119.4607,C:-94.38686,D:26.96237,E:-0.117517,F:-407.8526,G:253.5186,H:-395.7654},{rangeK:[1200,6000],A:81.99008,B:0.622236,C:-0.122440,D:0.008294,E:-6.703688,F:-437.6590,G:330.9264,H:-395.7654}],source:'NIST_WEBBOOK',reference:'Chase 1998'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST293:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}});
D.SCIENCE_BATCH_REFERENCE_V293={version:'2.93',sourceRegistry:SRC,records,added,policy:'append-only; no overwrite; verified-once ledger enforced'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V293='2.93';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V293={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V293',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.version='2.93';E.dataVersion='2.93';E.contractVersion='2.93';E.schemaVersion='2.93';if(E.PUBLIC)E.PUBLIC.version='2.93';
})(window);

} catch (err) {
  try { console.warn('[CHE module 173]', err && err.message ? err.message : err); } catch(_){}
}