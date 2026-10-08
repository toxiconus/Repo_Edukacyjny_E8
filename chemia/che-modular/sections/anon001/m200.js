try {

(function(w){
'use strict';
const C=w.CHE=w.CHE||{}; C.DATA=C.DATA||{}; C.EDUCATION=C.EDUCATION||{};
const v='3.15';
const lock=C.EDUCATION.CLOSURE_LEDGER||(C.EDUCATION.CLOSURE_LEDGER={records:{},policy:'INTRODUCED_LOCKED; unchanged fingerprint => skip; FORCE_REVERIFY only'});
function add(id,payload){ if(lock.records[id]) return {id,status:'SKIP_ALREADY_INTRODUCED'}; lock.records[id]={id,fingerprint:id+'|'+JSON.stringify(payload),status:'INTRODUCED_LOCKED',introducedIn:v}; return {id,status:'INTRODUCED_LOCKED'}; }
const B=C.DATA.EDUCATION_MAX_V315={version:v,appendOnly:true,priority:['P0_SP7_8','P1_LO_BIO_CHEM','P2_LO_EXTENDED'],blocks:{}};
B.blocks.curriculumMap={P0:['substances','mixtures','atomic_structure','periodic_table','formulas','valency','chemical_equations','acids_bases_salts','oxygen_hydrogen_air','carbon_hydrocarbons','proteins_carbohydrates'],P1:['mole','stoichiometry','solutions','redox','electrochemistry','kinetics','equilibrium','organic_nomenclature','isomerism','biochemistry'],P2:['buffers','titration','advanced_equilibrium','spectroscopy','mechanisms','stereochemistry','coordination']}; add('curriculumMap',B.blocks.curriculumMap);
B.blocks.substanceCards=['H2O','O2','H2','N2','CO2','CO','CaO','Al2O3','Fe2O3','Fe3O4','SiO2','SO2','SO3','NaOH','KOH','Ca(OH)2','Al(OH)3','Cu(OH)2','HCl','H2SO4','HNO3','H3PO4','CH3COOH','NaCl','KCl','CaCO3','Na2CO3','NaHCO3','CuSO4','AgCl','CH4','C2H4','C2H2','C2H5OH','CH3OH','glucose','fructose','sucrose','starch','cellulose','glycine','alanine']; B.blocks.substanceCardContract={required:['formula','class','keyProperties','commonUses','hazardLevel','sourceStatus'],sourceStatus:['EDUCATIONAL_APPROXIMATION','DATABASE','REFERENCE_READY']}; add('substanceCards',B.blocks.substanceCards);
B.blocks.ions=['H+','H3O+','OH-','Na+','K+','Mg2+','Ca2+','Al3+','NH4+','Fe2+','Fe3+','Cu2+','Zn2+','Ag+','Ba2+','Cl-','Br-','I-','F-','NO3-','SO4^2-','SO3^2-','CO3^2-','HCO3-','PO4^3-','OH-','S2-','CH3COO-','MnO4-','Cr2O7^2+']; add('coreIons',B.blocks.ions);
B.blocks.solubilityRules=[
 {rule:'group1_and_NH4',exceptions:false}, {rule:'NO3',exceptions:false}, {rule:'CH3COO',exceptions:'selected'},
 {rule:'Cl_Br_I',exceptions:['Ag+','Pb2+','Hg2^2+']}, {rule:'SO4',exceptions:['Ba2+','Sr2+','Pb2+','Ca2+']},
 {rule:'CO3',exceptions:'group1,NH4'}, {rule:'PO4',exceptions:'group1,NH4'}, {rule:'OH',exceptions:'group1,NH4;Ba/Sr/Ca partly soluble'}
]; add('solubilityRules',B.blocks.solubilityRules);
B.blocks.reactionFamilies=['synthesis','decomposition','single_displacement','double_displacement','neutralization','precipitation','combustion','redox','acid_metal','acid_carbonate','metal_oxide_reduction','esterification','hydrolysis','polymerization','protein_reaction','sugar_reaction']; add('reactionFamilies',B.blocks.reactionFamilies);
B.blocks.reactionTemplates=[
'H2+O2->H2O','C+O2->CO2','CO+O2->CO2','CH4+O2->CO2+H2O','2Mg+O2->2MgO','CaCO3->CaO+CO2','Cu(OH)2->CuO+H2O','HCl+NaOH->NaCl+H2O','H2SO4+2NaOH->Na2SO4+2H2O','CaCO3+2HCl->CaCl2+CO2+H2O','AgNO3+NaCl->AgCl+NaNO3','Fe+CuSO4->FeSO4+Cu','Zn+2HCl->ZnCl2+H2','Cl2+2KI->2KCl+I2','2H2+O2->2H2O','N2+3H2->2NH3','C2H4+H2->C2H6','CH3COOH+C2H5OH<->CH3COOC2H5+H2O','glucose+6O2->6CO2+6H2O','6CO2+6H2O->C6H12O6+6O2']; add('reactionTemplates',B.blocks.reactionTemplates);
B.blocks.calculationModels=['moles_from_mass','mass_from_moles','particles_from_moles','molar_mass','solution_percent','solution_molar','dilution','gas_volume','stoichiometric_ratio','limiting_reagent','yield','empirical_formula','molecular_formula','density','mass_percent_element','concentration_after_mixing','pH_strong_acid','pH_strong_base','oxidation_number','electron_balance','Faraday_basic','heat_q=m*c*dT','reaction_energy_basic','rate_average','equilibrium_expression']; add('calculationModels',B.blocks.calculationModels);
B.blocks.bioChem=['carbohydrates','lipids','proteins','amino_acids','enzymes','DNA_RNA','ATP','cellular_respiration','photosynthesis','denaturation','coagulation','biuret_test','xanthoproteic_test','iodine_starch_test','reducing_sugar_test']; add('bioChem',B.blocks.bioChem);
B.blocks.labTemplates=['density','solubility','filtration','crystallization','distillation','decantation','chromatography','oxygen_preparation','hydrogen_properties','CO2_detection','acid_base_indicator','neutralization','precipitation','metal_acid','metal_displacement','combustion','reaction_energy','reaction_rate','corrosion','starch_test','protein_test','reducing_sugar_test']; add('labTemplates',B.blocks.labTemplates);
B.blocks.assessmentBank=Array.from({length:80},(_,i)=>({id:'CHE-Q-'+String(i+1).padStart(3,'0'),levels:i<30?'SP7_8':i<60?'LO_BIO_CHEM':'LO_EXTENDED',skills:['identify','explain','calculate','equation','experiment','interpret'][i%6],sourceStatus:'EDUCATIONAL_TEMPLATE'})); add('assessmentBank',B.blocks.assessmentBank);
B.blocks.naming=['binary_compounds','oxides','hydroxides','acids','salts','hydrates','ionic_formula_from_ions','variable_oxidation_state','organic_hydrocarbons','alcohols','carboxylic_acids','esters','amino_acids']; add('naming',B.blocks.naming);
B.blocks.safety={P0:['GHS_pictograms','lab_glasses','gloves_when_required','no_tasting','odor_fanning','acid_to_water','waste_separation','spill_response','first_aid_scope'],P1:['oxidizers','flammables','corrosives','toxic_metals','gas_cylinders'],rule:'educational safety only; jurisdiction/source required for regulatory claims'}; add('safety',B.blocks.safety);
B.blocks.gapLedger={P0:['LESSON_L001_L013_FULL_RECONCILIATION','ELEMENTS_24_FULL_SOURCE_PROFILES','SOLUBILITY_TABLE_SOURCE_COMPLETE','INDICATOR_RANGES_SOURCE_COMPLETE','GHS_JURISDICTION_SOURCE'],P1:['REDOX_NUMERIC_REFERENCE','ELECTROCHEMISTRY_E0_REFERENCE','KINETICS_ARRHENIUS_REFERENCE','BUFFERS_TITRATION_REFERENCE','ORGANIC_NOMENCLATURE_SOURCE','BIOCHEM_STRUCTURE_SOURCE','PKA_KSP_KF_CONDITIONAL_COMPLETE'],P2:['HENRY_COMPLETE','SPECTRA_REFERENCE','MECHANISM_GRAPH_REFERENCE','STEREO_REFERENCE','COORDINATION_REFERENCE']};
C.EDUCATION.POLICY_V315={onePromptMaxRun:true,combineIndependentBlocks:true,updateGapMD:true,markIntroducedLocked:true,neverRepeatLocked:true};
C.EDUCATION.gapAuditV315=function(){return {version:v,locked:Object.keys(lock.records).length,gaps:B.blocks.gapLedger,policy:C.EDUCATION.POLICY_V315};};
C.EDUCATION.MAX_BATCH_V315=B;
})(window);

} catch (err) {
  try { console.warn('[CHE module 200]', err && err.message ? err.message : err); } catch(_){}
}

