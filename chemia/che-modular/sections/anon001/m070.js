try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const META={
  thermochem:{dHf:'kJ/mol',S:'J/(mol·K)',Cp:'J/(mol·K)',referenceTemperatureK:298.15,reference:'standard-state data; phase/species must match the stored record'},
  redox:{potential:'V',referenceTemperatureK:298.15,defaultMedium:'aqueous',type:'standard reduction potential; half-reaction and medium are part of interpretation'},
  solubility:{Ksp:'dimensionless in the conventional activity-based definition; numeric educational values require stated convention',waterSolubility:'g/L',temperatureK:293.15},
  acidBase:{pKa:'dimensionless logarithmic constant',reference:'aqueous values; temperature and ionic-strength dependence may apply'},
  atomicProps:{radius:'pm unless explicitly documented otherwise',ionizationEnergy:'kJ/mol',electronAffinity:'kJ/mol',meltingPoint:'K',boilingPoint:'K',density:'g/cm3'}
};
function audit(){
 const issues=[],warnings=[];
 if(C.DATA?.THERMOCHEM && !META.thermochem.referenceTemperatureK) issues.push('THERMOCHEM_NO_REFERENCE_T');
 const rs=C.DATA?.REDOX_POTENTIALS||{};
 if(Object.keys(rs).length && !META.redox.potential) issues.push('REDOX_NO_UNIT');
 if(C.DATA?.SOLUBILITY?.CuSO4) warnings.push('CuSO4 solubility requires hydrate/phase convention');
 if(C.DATA?.ATOMIC_PROPS?.O?.crystalStructure==='cubic') issues.push('O_CRYSTAL_STRUCTURE_TOO_GENERIC');
 if(C.DATA?.ATOMIC_PROPS?.F?.crystalStructure==='cubic') issues.push('F_CRYSTAL_STRUCTURE_TOO_GENERIC');
 if(C.DATA?.ACID_SYSTEMS?.H2SO4?.strong===true && C.DATA?.ACID_SYSTEMS?.H2SO4?.pKa?.length>1) issues.push('H2SO4_STRONG_FLAG_AMBIGUOUS');
 warnings.push('Most numerical DATA records still need per-record provenance/source identifiers before they can be treated as reference-grade data.');
 return ok({ok:issues.length===0,issues,warnings,metadata:META});
}
C.SCIENCE_AUDIT={version:'2.54',metadata:META,audit};
if(E.registry)E.registry.SCIENCE_AUDIT={layer:'META',owner:'CHE.SCIENCE_AUDIT',role:'audyt naukowy danych, jednostek, warunków i ograniczeń',depends:['DATA','THERMO','ELECTRO','ISOTOPE','SPECTRA']};
if(E.modules)E.modules.SCIENCE_AUDIT='2.54';
})(window);

} catch (err) {
  try { console.warn('[CHE module 70]', err && err.message ? err.message : err); } catch(_){}
}

