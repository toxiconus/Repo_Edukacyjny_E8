

try {

(()=>{
 const C=window.CHE=window.CHE||{}; C.DATA=C.DATA||{}; C.CALC=C.CALC||{};
 C.DATA.LO_CHEM_MAX389_396={version:'3.96',status:'IMPLEMENTED',acidBase:[
  {id:'ACETIC_ACID_KA_25C',formula:'CH3COOH',Ka:1.75e-5,temperature_C:25,sourceType:'DATABASE'},
  {id:'AMMONIUM_KA_25C',formula:'NH4+',Ka:5.6e-10,temperature_C:25,sourceType:'DATABASE'},
  {id:'WATER_KW_25C',formula:'H2O',Kw:1e-14,temperature_C:25,sourceType:'EDUCATIONAL_APPROXIMATION'}
 ],titration:[
  {id:'STRONG_ACID_STRONG_BASE',equivalence:'nH=nOH',model:'stoichiometric'},
  {id:'WEAK_ACID_STRONG_BASE',equivalence:'conjugate_base_dominates',model:'equilibrium'}
 ],inorganicReactions:[
  {id:'ZN_HCL',equation:'Zn + 2HCl -> ZnCl2 + H2',type:'metal_acid',gas:'H2',safety:['acid','flammable_gas']},
  {id:'AGNO3_NACL',equation:'AgNO3 + NaCl -> AgCl(s) + NaNO3',type:'precipitation',product:'AgCl'},
  {id:'CO2_LIMEWATER',equation:'CO2 + Ca(OH)2 -> CaCO3(s) + H2O',type:'precipitation',product:'CaCO3'}
 ],organicReactions:[
  {id:'ESTERIFICATION_ETHANOL_ACETIC',equation:'CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O',type:'esterification',catalyst:'H2SO4',equilibrium:true},
  {id:'ETHANOL_OXIDATION',equation:'C2H5OH + [O] -> CH3CHO + H2O',type:'oxidation'},
  {id:'ETHANAL_OXIDATION',equation:'CH3CHO + [O] -> CH3COOH',type:'oxidation'}
 ],provenanceSchema:{required:['value','unit','definition','conditions','sourceType','source','limitations'],sourceTypes:['DATABASE','EXPERIMENTAL','COMPUTED','ESTIMATED','EDUCATIONAL_APPROXIMATION','USER_DEFINED']}};
 C.CALC.weakAcidPH=function(c,Ka){if(!(c>0&&Ka>0))return null; const x=(-Ka+Math.sqrt(Ka*Ka+4*Ka*c))/2; return -Math.log10(x)};
 C.CALC.henderson=function(pKa,base,acid){if(!(base>0&&acid>0))return null;return pKa+Math.log10(base/acid)};
 C.CALC.titrationStrong=function(nAcid,nBase,baseConc){if(!(nAcid>=0&&nBase>=0&&baseConc>0))return null;return (nAcid-nBase)/baseConc};
 C.REACTION_GRAPH=C.REACTION_GRAPH||{}; C.REACTION_GRAPH.records=C.REACTION_GRAPH.records||[];
 C.REACTION_GRAPH.add=function(r){if(!r||!r.id||!r.equation)return false;if(this.records.some(x=>x.id===r.id))return false;this.records.push(r);return true};
 C.REACTION_GRAPH.validate=function(r){return !!(r&&r.id&&r.equation&&r.type)};
 C.DATA_AUDIT_V396={dataRecords:(C.DATA.LO_CHEM_MAX381_388?.acidBase?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.solubility?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.electrochem?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.organic?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.biochemAsChemistry?.length||0)+3+2+3+3+3,requiredProvenanceFields:C.DATA.LO_CHEM_MAX389_396.provenanceSchema.required.length};
 const tests={weakAcid:Math.abs(C.CALC.weakAcidPH(0.1,1.75e-5)-2.879)<0.01,buffer:Math.abs(C.CALC.henderson(4.756,0.1,0.1)-4.756)<1e-12,reactionValidation:C.REACTION_GRAPH.validate({id:'T',equation:'A -> B',type:'test'}),provenance:C.DATA.LO_CHEM_MAX389_396.provenanceSchema.required.includes('source')};
 C.MAX389_396_TEST=tests; C.PROJECT_REQUIREMENTS_LOCK_V331=C.PROJECT_REQUIREMENTS_LOCK_V331||{}; C.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_DATA_MAX389_396']={status:'DONE',version:'3.96',fingerprint:'LO-CHEM-DATA-MAX389-396-V396',scope:['quantitative acid-base','titration','reaction graph','provenance','organic transformations'],tests};
})();

} catch (err) {
  try { console.warn('[CHE module 235]', err && err.message ? err.message : err); } catch(_){}
}