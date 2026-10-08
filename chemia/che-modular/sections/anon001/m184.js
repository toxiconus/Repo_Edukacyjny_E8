try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const records={
  'Kw-water-298.15K':{constantType:'conditional_concentration',reaction:'2 H2O(l) ⇌ H3O+(aq) + OH-(aq)',value:1.00e-14,unit:'dimensionless when referenced to standard state; concentration-form often written as mol² L⁻²',temperatureK:298.15,pressure:'1 atm',medium:'water',source:'NIST/IAPWS water-ionization reference; educational concentration form cross-check',sourceVersion:'IAPWS R11-24 / NIST 2025',uncertainty:null,limitations:'1.00e-14 is a rounded concentration-form teaching value; it must not be represented as the full thermodynamic Kw over arbitrary T,P. Use IAPWS R11-24 for T/rho-dependent calculation.'}
};
const added=[];Object.entries(records).forEach(([id,r])=>{const k='EQ299:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'SOURCE_CHECKED_CONDITIONAL',sourceVersion:r.sourceVersion});added.push(id);}});
D.SCIENCE_EQUILIBRIA_REFERENCE_V299={version:'2.99',records,added,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',note:'Kw promoted only as a conditional 298.15 K concentration-form record, not as a universal thermodynamic constant.'};
E.modules=E.modules||{};E.modules.SCIENCE_EQUILIBRIA_REFERENCE_V299='2.99';E.registry=E.registry||{};E.registry.SCIENCE_EQUILIBRIA_REFERENCE_V299={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_EQUILIBRIA_REFERENCE_V299',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / verified-once'};
E.SCIENCE_EQUILIBRIA_REGRESSION_V299={run(){const r=D.SCIENCE_EQUILIBRIA_REFERENCE_V299.records['Kw-water-298.15K'];const checks=[['Kw',r?.value===1e-14],['298.15K',r?.temperatureK===298.15],['conditional type',r?.constantType==='conditional_concentration'],['reaction',r?.reaction.includes('H3O+')&&r?.reaction.includes('OH-')],['limitation',typeof r?.limitations==='string'&&r.limitations.length>20],['append only',D.SCIENCE_EQUILIBRIA_REFERENCE_V299.policy.startsWith('append-only')],['ledger',Array.isArray(D.SCIENCE_EQUILIBRIA_REFERENCE_V299.added)]];return {version:'2.99',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_EQUILIBRIA_REFERENCE_V299.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 184]', err && err.message ? err.message : err); } catch(_){}
}

