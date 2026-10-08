

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const records={
 'O2(g)-water-298.15-Hs-bp':{species:'O2(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:0.0013,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:1500,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST lists multiple compilations/methods; citation provenance is incomplete for the displayed compilation.'},
 'CO2(g)-water-298.15-Hs-bp':{species:'CO2(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:0.035,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2400,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST displays multiple compilations; the 0.035/2400 entry has missing citation metadata.'},
 'NH3(g)-water-298.15-Hs-bp':{species:'NH3(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:27,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2100,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST lists many values and methods, including entries with missing citations; stored as database evidence only.'},
 'SO2(g)-water-298.15-Hs-bp':{species:'SO2(g)',solvent:'H2O',temperatureK:298.15,constantType:'Henry_solubility_Hs_bp',definition:'molality / partial pressure at infinite dilution',value:1.4,unit:'mol kg^-1 bar^-1',temperatureDependence:{dLnKH_dInvT:2900,unit:'K'},source:'NIST Chemistry WebBook SRD 69; Rolf Sander compilation',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'NIST displays multiple compilations/methods; displayed entries have incomplete citation metadata.'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='NIST302:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'NIST_SOURCE_CHECKED_DATABASE_ONLY',sourceVersion:'SRD69',input:'dane.md',note:'Stored as conditional/database evidence; not referenceReady.'});added.push(id);}});
D.SCIENCE_HENRY_REFERENCE_V302={version:'3.02',records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',referenceReady:false};
E.modules=E.modules||{};E.modules.SCIENCE_HENRY_REFERENCE_V302='3.02';E.registry=E.registry||{};E.registry.SCIENCE_HENRY_REFERENCE_V302={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_HENRY_REFERENCE_V302',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / conditional database values'};
E.SCIENCE_HENRY_REGRESSION_V302={run(){const r=D.SCIENCE_HENRY_REFERENCE_V302.records;const checks=[['4 records',Object.keys(r).length===4],['O2',r['O2(g)-water-298.15-Hs-bp']?.value===0.0013],['CO2',r['CO2(g)-water-298.15-Hs-bp']?.value===0.035],['NH3',r['NH3(g)-water-298.15-Hs-bp']?.value===27],['SO2',r['SO2(g)-water-298.15-Hs-bp']?.value===1.4],['all conditional',Object.values(r).every(x=>x.referenceReady===false)],['ledger',Array.isArray(D.SCIENCE_HENRY_REFERENCE_V302.added)]];return {version:'3.02',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_HENRY_REFERENCE_V302.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 186]', err && err.message ? err.message : err); } catch(_){}
}