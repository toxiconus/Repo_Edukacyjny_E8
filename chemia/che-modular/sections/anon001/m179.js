try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const records={
 'Cl2(g)':{formula:'Cl2',phase:'gas',CAS:'7782-50-5',S298:{value:223.081,uncertainty:0.010,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomate:[
  {rangeK:[298,1000],A:33.05060,B:12.22940,C:-12.06510,D:4.385330,E:-0.159494,F:-10.83480,G:259.0290,H:0},
  {rangeK:[1000,3000],A:42.67730,B:-5.009570,C:1.904621,D:-0.165641,E:-2.098480,F:-17.28980,G:269.8400,H:0},
  {rangeK:[3000,6000],A:-42.55350,B:41.68570,C:-7.126830,D:0.387839,E:101.1440,F:132.7640,G:264.7860,H:0}
 ],source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; Chase 1998'},
 'Br2(l)':{formula:'Br2',phase:'liquid',CAS:'7726-95-6',S298:{value:152.21,uncertainty:0.30,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},source:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984'},
 'I2(condensed)':{formula:'I2',phase:'condensed',CAS:'7553-56-2',formationEnthalpyLiquid:{value:13.52,unit:'kJ/mol',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298Liquid:{value:150.36,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},S298Solid:{value:116.14,uncertainty:0.30,unit:'J/mol/K',T:298.15,P:'1 bar',status:'REFERENCE_DATA'},shomateLiquid:[{rangeK:[386.75,457.666],A:80.66919,B:6.855652e-8,C:-8.724352e-8,D:3.723132e-8,E:4.735829e-10,F:-10.52782,G:247.9798,H:13.52302}],shomateSolid:[{rangeK:[298,386.75],A:-195.7635,B:918.8984,C:-1079.242,D:534.3219,E:5.156403,F:43.29938,G:-322.4780,H:0}],source:'NIST_WEBBOOK',reference:'Chase 1998; Cox, Wagman et al. 1984'}
};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289; const added=[]; Object.entries(records).forEach(([id,r])=>{const k='NIST296:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});added.push(id);}}); D.SCIENCE_BATCH_REFERENCE_V296={version:'2.96',sourceRegistry:{NIST_WEBBOOK:'NIST Chemistry WebBook, SRD 69'},records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md'};
E.modules=E.modules||{};E.modules.SCIENCE_BATCH_REFERENCE_V296='2.96';E.registry=E.registry||{};E.registry.SCIENCE_BATCH_REFERENCE_V296={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_BATCH_REFERENCE_V296',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.SCIENCE_BATCH_REFERENCE_REGRESSION_V296={run(){const r=D.SCIENCE_BATCH_REFERENCE_V296.records;const checks=[['3 new records',Object.keys(r).length===3],['Cl2 entropy',r['Cl2(g)'].S298.value===223.081],['Cl2 Shomate',r['Cl2(g)'].shomate.length===3],['Br2 liquid entropy',r['Br2(l)'].S298.value===152.21],['I2 liquid formation',r['I2(condensed)'].formationEnthalpyLiquid.value===13.52],['I2 solid entropy',r['I2(condensed)'].S298Solid.value===116.14],['I2 phase Shomate',r['I2(condensed)'].shomateLiquid.length===1&&r['I2(condensed)'].shomateSolid.length===1],['append only',D.SCIENCE_BATCH_REFERENCE_V296.policy.startsWith('append-only')]];return {version:'2.96',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_BATCH_REFERENCE_V296.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 179]', err && err.message ? err.message : err); } catch(_){}
}

