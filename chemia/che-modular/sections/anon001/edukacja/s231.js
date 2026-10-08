

try {
 
(()=>{
  const C=window.CHE=window.CHE||{}; C.DATA=C.DATA||{};
  C.DATA.LO_CHEM_MAX381_388=C.DATA.LO_CHEM_MAX381_388||{
    version:'3.88', source:'CHE.EDUCATION_ENGINE', status:'IMPLEMENTED',
    acidBase:[
      {id:'HCL_AQ',formula:'HCl',type:'strong_acid',Ka:null,sourceType:'DATABASE'},
      {id:'CH3COOH_AQ',formula:'CH3COOH',type:'weak_acid',Ka:1.75e-5,unit:'mol/L',temperature_C:25,sourceType:'DATABASE'},
      {id:'NH3_AQ',formula:'NH3',type:'weak_base',Kb:1.8e-5,unit:'mol/L',temperature_C:25,sourceType:'DATABASE'},
      {id:'H2O_AQ',formula:'H2O',Kw:1.0e-14,unit:'(mol/L)^2',temperature_C:25,sourceType:'EDUCATIONAL_APPROXIMATION'}
    ],
    solubility:[
      {id:'AGCL',formula:'AgCl',Ksp:1.8e-10,unit:'(mol/L)^2',temperature_C:25,sourceType:'DATABASE'},
      {id:'BASO4',formula:'BaSO4',Ksp:1.1e-10,unit:'(mol/L)^2',temperature_C:25,sourceType:'DATABASE'}
    ],
    electrochem:[
      {id:'ZN2_ZN',halfReaction:'Zn2+ + 2e- -> Zn',E0_V:-0.76,temperature_C:25,sourceType:'DATABASE'},
      {id:'CU2_CU',halfReaction:'Cu2+ + 2e- -> Cu',E0_V:0.34,temperature_C:25,sourceType:'DATABASE'},
      {id:'H_H2',halfReaction:'2H+ + 2e- -> H2',E0_V:0,temperature_C:25,sourceType:'DATABASE'}
    ],
    organic:[
      {id:'ETHANOL',formula:'C2H6O',class:'alcohol',functionalGroup:'hydroxyl'},
      {id:'ETHANAL',formula:'C2H4O',class:'aldehyde',functionalGroup:'carbonyl'},
      {id:'ACETONE',formula:'C3H6O',class:'ketone',functionalGroup:'carbonyl'},
      {id:'ACETIC_ACID',formula:'C2H4O2',class:'carboxylic_acid',functionalGroup:'carboxyl'},
      {id:'ETHYL_ACETATE',formula:'C4H8O2',class:'ester',functionalGroup:'ester'},
      {id:'GLYCINE',formula:'C2H5NO2',class:'amino_acid',functionalGroups:['amino','carboxyl']},
      {id:'GLUCOSE',formula:'C6H12O6',class:'monosaccharide',reducingSugar:true},
      {id:'SUCROSE',formula:'C12H22O11',class:'disaccharide',reducingSugar:false}
    ],
    biochemAsChemistry:[
      {id:'PEPTIDE_BOND',pattern:'-CO-NH-',class:'amide_bond'},
      {id:'DNA_NUCLEOTIDE',components:['phosphate','2-deoxyribose','nitrogenous_base'],polymer:'DNA'},
      {id:'RNA_NUCLEOTIDE',components:['phosphate','ribose','nitrogenous_base'],polymer:'RNA'},
      {id:'DNA_BASES',items:['adenine','thymine','guanine','cytosine']},
      {id:'RNA_BASES',items:['adenine','uracil','guanine','cytosine']}
    ]
  };
  C.CALC=C.CALC||{};
  C.CALC.pH_from_H=function(H){if(!(H>0)) return null; return -Math.log10(H)};
  C.CALC.pOH_from_OH=function(OH){if(!(OH>0)) return null; return -Math.log10(OH)};
  C.CALC.Qsp=function(products,stoich){return products.reduce((q,x,i)=>q*Math.pow(x,stoich[i]),1)};
  C.CALC.precipitation=function(Qsp,Ksp){if(!(Qsp>=0&&Ksp>0)) return {status:'INVALID'}; return {status:Qsp>Ksp?'PRECIPITATION_EXPECTED':Qsp<Ksp?'NO_PRECIPITATION_EXPECTED':'SATURATED',Qsp,Ksp}};
  C.CALC.cellPotential=function(Ecathode,Eanode){if(!Number.isFinite(Ecathode)||!Number.isFinite(Eanode)) return null; return Ecathode-Eanode};
  C.MAX381_388_TEST={
    acidBase:Math.abs(C.CALC.pH_from_H(1e-3)-3)<1e-12,
    ksp:C.CALC.precipitation(2e-10,1.8e-10).status==='PRECIPITATION_EXPECTED',
    electrochem:Math.abs(C.CALC.cellPotential(.34,-.76)-1.10)<1e-12,
    dataCount:4+2+3+8+5
  };
  C.PROJECT_REQUIREMENTS_LOCK_V331=C.PROJECT_REQUIREMENTS_LOCK_V331||{};
  C.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_DATA_MAX381_388']={status:'DONE',version:'3.88',fingerprint:'LO-CHEM-DATA-MAX381-388-V388',scope:['acid-base','Ksp','electrochemistry','organic','biochemistry-as-chemistry'],newRecords:22,tests:C.MAX381_388_TEST};
})();

} catch (err) {
  try { console.warn('[CHE module 234]', err && err.message ? err.message : err); } catch(_){}
}