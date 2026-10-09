

try {

(()=>{
 const C=window.CHE=window.CHE||{}; C.DATA=C.DATA||{}; C.CALC=C.CALC||{};
 C.DATA.BIOMOLECULE_CHEMISTRY_V404={version:'4.04',records:[
  {id:'GLYCINE',formula:'C2H5NO2',class:'amino_acid',acidBaseSites:['NH2','COOH']},
  {id:'ALANINE',formula:'C3H7NO2',class:'amino_acid',acidBaseSites:['NH2','COOH']},
  {id:'DIPEPTIDE_GENERIC',formula:'PEPTIDE',class:'peptide',bond:'-CO-NH-'},
  {id:'GLUCOSE',formula:'C6H12O6',class:'monosaccharide',reducing:true},
  {id:'FRUCTOSE',formula:'C6H12O6',class:'monosaccharide',reducing:true},
  {id:'SUCROSE',formula:'C12H22O11',class:'disaccharide',reducing:false},
  {id:'STARCH',formula:'(C6H10O5)n',class:'polysaccharide'},
  {id:'CELLULOSE',formula:'(C6H10O5)n',class:'polysaccharide'},
  {id:'DNA_BASE_A',formula:'C5H5N5',class:'nucleobase'},
  {id:'DNA_BASE_T',formula:'C5H6N2O2',class:'nucleobase'},
  {id:'DNA_BASE_G',formula:'C5H5N5O',class:'nucleobase'},
  {id:'DNA_BASE_C',formula:'C4H5N3O',class:'nucleobase'},
  {id:'RNA_BASE_U',formula:'C4H4N2O2',class:'nucleobase'}
 ],safetyAndIdentification:[
  {id:'BIURET_TEST',target:'peptide_bonds',observation:'violet_complex',safety:'alkaline_copper_reagent'},
  {id:'TOLLENS_TEST',target:'aldehyde',observation:'silver_deposit',safety:'fresh_reagent_only'}
 ]};
 C.CALC.mean=function(xs){if(!Array.isArray(xs)||!xs.length)return null;return xs.reduce((a,b)=>a+b,0)/xs.length};
 C.CALC.std=function(xs){if(!Array.isArray(xs)||xs.length<2)return null;const m=C.CALC.mean(xs);return Math.sqrt(xs.reduce((a,b)=>a+(b-m)**2,0)/(xs.length-1))};
 C.CALC.combinedUncertainty=function(parts){if(!Array.isArray(parts)||!parts.length)return null;return Math.sqrt(parts.reduce((a,u)=>a+u*u,0))};
 C.EXPERIMENT_DATA=C.EXPERIMENT_DATA||{}; C.EXPERIMENT_DATA.validate=function(r){return !!(r&&r.observation&&r.conclusion&&r.safety);};
 C.CURRICULUM_AUDIT_V404={scope:'LO_CHEMISTRY_ONLY',basicAndExtended:true,biochemistryAsChemistry:true,requiredEvidence:['knowledge','data','calculation','experiment','observation','conclusion','safety','provenance'],runtime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
 const tests={bio:C.DATA.BIOMOLECULE_CHEMISTRY_V404.records.length>=13,stats:Math.abs(C.CALC.mean([1,2,3])-2)<1e-12,uncertainty:Math.abs(C.CALC.combinedUncertainty([3,4])-5)<1e-12,experiment:C.EXPERIMENT_DATA.validate({observation:'x',conclusion:'y',safety:'z'})};
 C.MAX397_404_TEST=tests; C.PROJECT_REQUIREMENTS_LOCK_V331=C.PROJECT_REQUIREMENTS_LOCK_V331||{}; C.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX397_404']={status:'DONE',version:'4.04',fingerprint:'LO-CHEM-MAX397-404-V404',scope:['biomolecules-as-chemistry','uncertainty','experiment-data','curriculum-audit'],tests};
})();

} catch (err) {
  try { console.warn('[CHE module 236]', err && err.message ? err.message : err); } catch(_){}
}