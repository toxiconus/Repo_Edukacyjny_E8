

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={ZPE_ACID_BASE:{name:'ZPE.pl — Stałe dysocjacji wybranych kwasów nieorganicznych',url:'https://zpe.gov.pl/a/przeczytaj/D182y2Ci0',accessed:'2026-10-02',scope:'aqueous acid dissociation table, 25 °C'}};
const records={
 'HF-aq-25C':{species:'HF',reaction:'HF(aq) ⇌ H+(aq) + F-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:6.3e-4,pKa:3.20065945,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Secondary educational table; ionic strength and activity-coefficient convention are not stated. Do not treat as thermodynamic Ka.'},
 'HCl-aq-25C':{species:'HCl',reaction:'HCl(aq) ⇌ H+(aq) + Cl-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:1.0e7,pKa:-7.0,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Tabulated conventional value for aqueous chemistry; strong-acid conditional behavior and ionic-strength dependence are not resolved.'},
 'HBr-aq-25C':{species:'HBr',reaction:'HBr(aq) ⇌ H+(aq) + Br-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:3.0e9,pKa:-9.47712125,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Secondary educational table; not promoted to thermodynamic reference constant.'},
 'HI-aq-25C':{species:'HI',reaction:'HI(aq) ⇌ H+(aq) + I-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:1.0e10,pKa:-10.0,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Secondary educational table; not promoted to thermodynamic reference constant.'}
};
const added=[]; Object.entries(records).forEach(([id,r])=>{const k='PKA300:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'SOURCE_CHECKED_SECONDARY',sourceVersion:'ZPE_ACID_BASE',note:'Stored as database/conditional data; referenceReady=false'});added.push(id);}});
D.SCIENCE_PKA_REFERENCE_V300={version:'3.00',records,added,sourceRegistry:SRC,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',referenceReady:false};
E.modules=E.modules||{};E.modules.SCIENCE_PKA_REFERENCE_V300='3.00';E.registry=E.registry||{};E.registry.SCIENCE_PKA_REFERENCE_V300={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_PKA_REFERENCE_V300',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / conditional database values'};
E.SCIENCE_PKA_REGRESSION_V300={run(){const r=D.SCIENCE_PKA_REFERENCE_V300.records;const checks=[['4 records',Object.keys(r).length===4],['HF',r['HF-aq-25C'].value===6.3e-4],['HCl',r['HCl-aq-25C'].value===1e7],['HBr',r['HBr-aq-25C'].value===3e9],['HI',r['HI-aq-25C'].value===1e10],['not reference ready',Object.values(r).every(x=>x.referenceReady===false)],['append only',D.SCIENCE_PKA_REFERENCE_V300.policy.startsWith('append-only')],['ledger',Array.isArray(D.SCIENCE_PKA_REFERENCE_V300.added)]];return {version:'3.00',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_PKA_REFERENCE_V300.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 188]', err && err.message ? err.message : err); } catch(_){}
}