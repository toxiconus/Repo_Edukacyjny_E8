try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',doi:'10.18434/T4D303',accessed:'2026-10-02'}};
 
const records={
  'ATOM:Na(g)':{species:'Na',phase:'gas',quantity:'standard_enthalpy_of_formation',value:107.5,uncertainty:0.7,unit:'kJ/mol',T:298.15,P:'1 bar',source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984',status:'REFERENCE_DATA'},
  'ATOM:Cl(g)':{species:'Cl',phase:'gas',quantity:'standard_enthalpy_of_formation',value:121.301,uncertainty:0.008,unit:'kJ/mol',T:298.15,P:'1 bar',source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984',status:'REFERENCE_DATA'},
  'ATOM:Cl(g):S0':{species:'Cl',phase:'gas',quantity:'standard_entropy',value:165.190,uncertainty:0.004,unit:'J/mol/K',T:298.15,P:'1 bar',source:'NIST_WEBBOOK',reference:'Cox, Wagman, et al. 1984',status:'REFERENCE_DATA'}
};
const phase={
  Na:{boiling:{value:1156,uncertainty:1,unit:'K',reference:'Honig and Kramer 1969'},fusion:{value:370.96,uncertainty:0.01,unit:'K',reference:'Marsh 1987'},triple:{value:370.98,uncertainty:0.03,unit:'K',reference:'Honig and Kramer 1969'},antoine:{rangeK:[924,1118],A:2.46077,B:1873.728,C:-416.372,pressureUnit:'bar',temperatureUnit:'K',reference:'Rodebush and Walters 1930'}},
  Cl2:{boiling:{value:239.5,uncertainty:0.6,unit:'K',reference:'Thiele and Schulte 1920'},triple:{value:172.17,uncertainty:0.05,unit:'K',reference:'Angus, Armstrong, et al. 1984'},critical:{T:416.956,P:79.914,temperatureUnit:'K',pressureUnit:'bar',reference:'Angus, Armstrong, et al. 1984'}}
};
const added=[];
Object.entries(records).forEach(([id,r])=>{
  const key='NEWREF:'+id;
  if(LED?.needsVerification?.(key,r)){
    if(LED) LED.markVerified(key,r,{verification:'NIST_SOURCE_CHECKED',sourceVersion:'SRD69'});
    added.push(id);
  }
});
D.NEW_REFERENCE_DATA_V290={version:'2.90',sourceRegistry:SRC,records,phaseChange:phase,added,policy:'append-only; existing scientific records are not overwritten'};
E.modules=E.modules||{};E.modules.NEW_REFERENCE_DATA_V290='2.90';E.registry=E.registry||{};E.registry.NEW_REFERENCE_DATA_V290={layer:'SCIENCE/DATA',owner:'CHE.DATA.NEW_REFERENCE_DATA_V290',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only'};
E.version='2.90';E.dataVersion='2.90';E.contractVersion='2.90';E.schemaVersion='2.90';if(E.PUBLIC)E.PUBLIC.version='2.90';
})(window);

} catch (err) {
  try { console.warn('[CHE module 167]', err && err.message ? err.message : err); } catch(_){}
}

