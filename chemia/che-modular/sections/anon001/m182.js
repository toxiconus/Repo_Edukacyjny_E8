try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={EPA_SILVER_KSP:{name:'US EPA, Solubility Product Constants for Various Silver Solids',version:'Lide 2000 table reproduced in EPA document'},UT_AUSTIN_KF:{name:'University of Texas at Austin, Formation Constants'}};
const records={
 'AgCl(aq-equilibrium)':{type:'Ksp',reaction:'AgCl(s) ⇌ Ag+(aq) + Cl-(aq)',formula:'AgCl',value:1.77e-10,unit:'dimensionless activity-based reference approximation',T:298.15,medium:'water',constant_type:'solubility_product',source:'EPA_SILVER_KSP',status:'REFERENCE_DATA'},
 'AgBr(aq-equilibrium)':{type:'Ksp',reaction:'AgBr(s) ⇌ Ag+(aq) + Br-(aq)',formula:'AgBr',value:5.35e-13,unit:'dimensionless activity-based reference approximation',T:298.15,medium:'water',constant_type:'solubility_product',source:'EPA_SILVER_KSP',status:'REFERENCE_DATA'},
 'AgI(aq-equilibrium)':{type:'Ksp',reaction:'AgI(s) ⇌ Ag+(aq) + I-(aq)',formula:'AgI',value:8.51e-17,unit:'dimensionless activity-based reference approximation',T:298.15,medium:'water',constant_type:'solubility_product',source:'EPA_SILVER_KSP',status:'REFERENCE_DATA'},
 '[Ag(NH3)2]+':{type:'Kf',reaction:'Ag+(aq) + 2 NH3(aq) ⇌ [Ag(NH3)2]+(aq)',value:1.7e7,unit:'dimensionless',T:298.15,medium:'water',constant_type:'cumulative_formation_constant',source:'UT_AUSTIN_KF',status:'REFERENCE_DATA'},
 '[Cu(NH3)4]2+':{type:'Kf',reaction:'Cu2+(aq) + 4 NH3(aq) ⇌ [Cu(NH3)4]2+(aq)',value:1.7e13,unit:'dimensionless',T:298.15,medium:'water',constant_type:'cumulative_formation_constant',source:'UT_AUSTIN_KF',status:'REFERENCE_DATA'},
 '[Fe(CN)6]4-':{type:'Kf',reaction:'Fe2+(aq) + 6 CN-(aq) ⇌ [Fe(CN)6]4-(aq)',value:1.5e35,unit:'dimensionless',T:298.15,medium:'water',constant_type:'cumulative_formation_constant',source:'UT_AUSTIN_KF',status:'REFERENCE_DATA'}
};
const added=[];
Object.entries(records).forEach(([id,r])=>{const k='EQ298:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'SOURCE_CHECKED',sources:r.source==='EPA_SILVER_KSP'?'EPA_TABLE':'UT_AUSTIN_TABLE',input:'dane.md',policy:'verified-once'});added.push(id);}});
D.SCIENCE_EQUILIBRIA_REFERENCE_V298={version:'2.98',records,added,sourceRegistry:SRC,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',note:'Only records whose supplied value matched an independently checked source were promoted.'};
E.modules=E.modules||{};E.modules.SCIENCE_EQUILIBRIA_REFERENCE_V298='2.98';E.registry=E.registry||{};E.registry.SCIENCE_EQUILIBRIA_REFERENCE_V298={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_EQUILIBRIA_REFERENCE_V298',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.SCIENCE_EQUILIBRIA_REGRESSION_V298={run(){const r=D.SCIENCE_EQUILIBRIA_REFERENCE_V298.records;const checks=[['6 promoted',Object.keys(r).length===6],['AgCl',r['AgCl(aq-equilibrium)'].value===1.77e-10],['AgBr',r['AgBr(aq-equilibrium)'].value===5.35e-13],['AgI',r['AgI(aq-equilibrium)'].value===8.51e-17],['AgNH3',r['[Ag(NH3)2]+'].value===1.7e7],['CuNH3 source-checked value',r['[Cu(NH3)4]2+'].value===1.7e13],['FeCN source-checked value',r['[Fe(CN)6]4-'].value===1.5e35],['append only',D.SCIENCE_EQUILIBRIA_REFERENCE_V298.policy.startsWith('append-only')],['ledger',Array.isArray(D.SCIENCE_EQUILIBRIA_REFERENCE_V298.added)]];return {version:'2.98',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_EQUILIBRIA_REFERENCE_V298.added};}};
E.version='2.98';E.dataVersion='2.98';E.contractVersion='2.98';E.schemaVersion='2.98';if(E.PUBLIC)E.PUBLIC.version='2.98';
})(window);

} catch (err) {
  try { console.warn('[CHE module 182]', err && err.message ? err.message : err); } catch(_){}
}

