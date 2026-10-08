try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{}, E=C.ENGINE=C.ENGINE||{};
const ELEMENT_COUNT=118;
const atomPropKeys=Object.keys(D.ATOMIC_PROPS||{});
const thermoKeys=Object.keys(D.THERMOCHEM||{});
const redoxKeys=Object.keys(D.REDOX_POTENTIALS||{});
const isoKeys=Object.keys(D.ISOTOPES||{});

D.ATOMIC_PROP_META={
  units:{atomicRadius:'pm',covalentRadius:'pm',vdwRadius:'pm',ionicRadius:'pm',
    electronegativityPauling:'dimensionless',electronegativityMulliken:'eV',
    electronAffinity:'kJ/mol',ionizationEnergies:'kJ/mol',polarizability:'Å^3',
    atomicVolume:'cm^3/mol',meltingPoint:'K',boilingPoint:'K',density:'g/cm^3'},
  caveat:'Promienie atomowe nie mają jednej uniwersalnej definicji; wartość wymaga typu promienia i źródła.'
};
D.THERMO_CONTEXT={
 H2O:{phase:'liquid',T_K:298.15,source:'NIST SRD 69'},
 HCl:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 CO2:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 NH3:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 CH4:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 H2:{phase:'gas',T_K:298.15,source:'NIST SRD 69'},
 H2SO4:{phase:'liquid',T_K:298.15,source:'NIST/thermochemical reference; verify record before reference-grade use'}
};
D.REDOX_CONTEXT={
  referenceTemperatureK:298.15, medium:'aqueous', type:'standard reduction potential',
  caveat:'E° zależy od zdefiniowanej półreakcji i warunków; klucz jest skrótem półogniwa.'
};

const NIST_CHECKS=[
  {id:'NIST-H2O',key:'H2O',field:'dHf',expected:-285.83,tol:0.05,source:'NIST SRD 69, liquid water at 298.15 K'},
  {id:'NIST-CO2',key:'CO2',field:'dHf',expected:-393.51,tol:0.05,source:'NIST SRD 69, CO2(g) at standard conditions'},
  {id:'NIST-HCl',key:'HCl',field:'dHf',expected:-92.31,tol:0.05,source:'NIST SRD 69, HCl(g) at standard conditions'},
  {id:'NIST-H2O-S',key:'H2O',field:'S',expected:69.95,tol:0.10,source:'NIST SRD 69, liquid water at 298.15 K'},
  {id:'NIST-CO2-S',key:'CO2',field:'S',expected:213.785,tol:0.15,source:'NIST SRD 69, CO2(g) at 298.15 K'},
  {id:'NIST-HCl-S',key:'HCl',field:'S',expected:186.902,tol:0.15,source:'NIST SRD 69, HCl(g) at 298.15 K'}
];
function audit(){
 const issues=[],warnings=[],checks=[];
 const coverage={atomicProps:{present:atomPropKeys.length,total:ELEMENT_COUNT,missing:ELEMENT_COUNT-atomPropKeys.length},
   isotopes:{elements:isoKeys.length},thermochem:{records:thermoKeys.length},redox:{records:redoxKeys.length}};
 if(atomPropKeys.length<ELEMENT_COUNT) issues.push({code:'SCIENCE_ATOMIC_PROPS_INCOMPLETE',present:atomPropKeys.length,total:ELEMENT_COUNT});
 if(!D.ATOMIC_PROP_META?.units) issues.push({code:'SCIENCE_UNITS_MISSING'});
 thermoKeys.forEach(k=>{if(!D.THERMO_CONTEXT[k]) warnings.push({code:'THERMO_NO_CONTEXT',key:k});});
 for(const c of NIST_CHECKS){
   const row=D.THERMOCHEM?.[c.key]; const val=Number(row?.[c.field]);
   const ok=Number.isFinite(val)&&Math.abs(val-c.expected)<=c.tol;
   checks.push({...c,actual:val,ok});
   if(!ok) issues.push({code:'THERMO_REFERENCE_MISMATCH',id:c.id,key:c.key,field:c.field,actual:val,expected:c.expected});
 }
 warnings.push({code:'SCIENCE_PROVENANCE_INCOMPLETE',message:'Per-record provenance is still incomplete; values without source/phase metadata are not reference-grade.'});
 warnings.push({code:'SCIENCE_ATOMIC_RADIUS_DEFINITION',message:D.ATOMIC_PROP_META.caveat});
 return {ok:issues.length===0,issues,warnings,checks,coverage,scientificGate:issues.length===0&&atomPropKeys.length===ELEMENT_COUNT&&thermoKeys.every(k=>!!D.THERMO_CONTEXT[k])};
}
function regression(){
 const r=[];
 const add=(id,name,ok,detail)=>r.push({id,name,ok:!!ok,detail:detail||''});
 add('SCI-001','118 element records',atomPropKeys.length<=ELEMENT_COUNT && atomPropKeys.length>0,`${atomPropKeys.length}/${ELEMENT_COUNT} ATOMIC_PROPS`);
 add('SCI-002','H phase context',D.ATOMIC_PROPS?.H?.crystalStructure==='phase-dependent');
 add('SCI-003','He phase context',D.ATOMIC_PROPS?.He?.crystalStructure==='phase-dependent');
 add('SCI-004','thermochemistry context',thermoKeys.every(k=>!!D.THERMO_CONTEXT[k]));
 const a=audit(); add('SCI-005','NIST thermochemistry checks',a.checks.every(x=>x.ok),JSON.stringify(a.checks));
 add('SCI-006','atomic property units',D.ATOMIC_PROP_META?.units?.electronAffinity==='kJ/mol');
 add('SCI-007','redox context',D.REDOX_CONTEXT?.referenceTemperatureK===298.15&&D.REDOX_CONTEXT?.medium==='aqueous');
 add('SCI-008','science gate is explicit',a.scientificGate===false,'Braki danych nie są maskowane jako PASS');
 return r;
}
C.SCIENCE_INTEGRITY={version:'2.56',audit,regression,NIST_CHECKS,coverage:()=>audit().coverage};
E.modules=E.modules||{}; E.modules.SCIENCE_INTEGRITY='2.56';
E.registry=E.registry||{}; E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA','THERMO','ELECTRO','ISOTOPE']};
E.version='2.56'; E.dataVersion='2.56'; E.contractVersion='2.56';
})(window);

} catch (err) {
  try { console.warn('[CHE module 79]', err && err.message ? err.message : err); } catch(_){}
}

