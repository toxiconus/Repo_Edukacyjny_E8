(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const prev=(E.EDUCATION_VERIFICATION_LEDGER_V308)||(C.EDUCATION&&C.EDUCATION.ledger)||{};
const ledger=C.EDUCATION_CLOSURE_LEDGER_V313=E.EDUCATION_CLOSURE_LEDGER_V313||{version:'3.13',policy:'introduced-once hard lock',records:{}};
const lock=(id,status,source)=>{if(ledger.records[id]&&ledger.records[id].status==='INTRODUCED_LOCKED')return 'SKIP_ALREADY_INTRODUCED';ledger.records[id]={status,source,introducedAt:'2026-10-02'};return status;};
D.EDUCATION_CLOSURE_V313={
 version:'3.13',status:'INTRODUCED_LOCKED',priority:['P0_SP7_8','P1_LO_BIOL_CHEM','P2_LO_EXTENDED'],
 equationSkills:[
  {id:'EQ01',skill:'identify_substrates_products'}, {id:'EQ02',skill:'balance_mass'}, {id:'EQ03',skill:'balance_charge'},
  {id:'EQ04',skill:'molecular_to_ionic'}, {id:'EQ05',skill:'ionic_net_equation'}, {id:'EQ06',skill:'state_symbols'},
  {id:'EQ07',skill:'reaction_type'}, {id:'EQ08',skill:'redox_identification'}, {id:'EQ09',skill:'oxidation_numbers'},
  {id:'EQ10',skill:'electron_balance'}, {id:'EQ11',skill:'energy_profile'}, {id:'EQ12',skill:'catalyst_effect'}
 ],
 ionicRules:[
  {id:'ION01',rule:'strong_acids_dissociate_in_water',scope:'educational'},
  {id:'ION02',rule:'soluble_strong_electrolytes_as_aqueous_ions',scope:'educational'},
  {id:'ION03',rule:'spectator_ions_cancel_only_when_unchanged',scope:'educational'},
  {id:'ION04',rule:'precipitate_remains_as_solid',scope:'educational'},
  {id:'ION05',rule:'weak_electrolyte_not_forced_to_complete_ions',scope:'educational'}
 ],
 redoxSkills:['oxidation_number','oxidation_reduction_pair','oxidizing_agent','reducing_agent','electron_balance','cell_notation','corrosion'],
 stoichExtended:['limiting_reagent','excess_reagent','percent_yield','solution_stoichiometry','gas_stoichiometry','empirical_formula','molecular_formula','mixture_stoichiometry'],
 solutionSkills:['mass_percent','molar_concentration','dilution','mixing_same_solute','density_to_concentration','titration_concept'],
 labReport:['problem','hypothesis','variables','apparatus','reagents','procedure','observation','measurement','uncertainty','conclusion','safety','waste'],
 experimentTemplates:[
  {id:'EXP01',name:'sączenie',separation:'filtration',observationFields:['residue','filtrate']},
  {id:'EXP02',name:'krystalizacja',separation:'crystallization',observationFields:['crystals','mother_liquor']},
  {id:'EXP03',name:'destylacja',separation:'distillation',observationFields:['distillate','residue']},
  {id:'EXP04',name:'chromatografia',separation:'chromatography',observationFields:['spots','retention']},
  {id:'EXP05',name:'wskaźnik kwasowo-zasadowy',test:'acid_base',observationFields:['color','pH_range']},
  {id:'EXP06',name:'CO2 woda wapienna',test:'gas_identification',observationFields:['turbidity','conclusion']},
  {id:'EXP07',name:'H2 próba charakterystyczna',test:'gas_identification',observationFields:['sound','safety']},
  {id:'EXP08',name:'O2 próba żarzącego łuczywa',test:'gas_identification',observationFields:['glow','safety']},
  {id:'EXP09',name:'reakcja metalu z kwasem',test:'acid_metal',observationFields:['gas','temperature','surface']},
  {id:'EXP10',name:'szybkość reakcji',test:'kinetics',observationFields:['time','rate','factor']}
 ],
 organicCore:[
  {id:'ORG01',class:'alkanes',example:'CH4',general:'CnH2n+2'},
  {id:'ORG02',class:'alkenes',example:'C2H4',general:'CnH2n'},
  {id:'ORG03',class:'alkynes',example:'C2H2',general:'CnH2n-2'},
  {id:'ORG04',class:'alcohols',example:'C2H5OH',functionalGroup:'-OH'},
  {id:'ORG05',class:'carboxylic_acids',example:'CH3COOH',functionalGroup:'-COOH'},
  {id:'ORG06',class:'esters',example:'CH3COOC2H5',functionalGroup:'ester'},
  {id:'ORG07',class:'amino_acids',example:'NH2CH2COOH',functionalGroups:['-NH2','-COOH']}
 ],
 bioCore:[
  {id:'BIO01',name:'glucose',formula:'C6H12O6',role:'monosaccharide'},
  {id:'BIO02',name:'fructose',formula:'C6H12O6',role:'monosaccharide'},
  {id:'BIO03',name:'sucrose',formula:'C12H22O11',role:'disaccharide'},
  {id:'BIO04',name:'starch',formula:'(C6H10O5)n',role:'polysaccharide'},
  {id:'BIO05',name:'cellulose',formula:'(C6H10O5)n',role:'polysaccharide'},
  {id:'BIO06',name:'glycine',formula:'C2H5NO2',role:'amino_acid'},
  {id:'BIO07',name:'alanine',formula:'C3H7NO2',role:'amino_acid'},
  {id:'BIO08',name:'protein',role:'polymer_of_amino_acids',note:'conceptual educational record'}
 ],
 remainingScientificQueues:{
  VERIFY_REQUIRED:['pKa_full_conditions','Ksp_full_conditions','Kf_full_conditions','Henry_all_conventions','E0_full_conditions','spectra_reference_records','reaction_sources_L001_L013','GHS_jurisdiction_version'],
  DATA_MODEL_READY:['redox','kinetics','titration','buffers','organic_nomenclature','stereochemistry','complexes'],
  INTRODUCED_LOCKED:['P0_core_elements','P0_solubility_examples','P0_indicators','P0_reaction_families','P0_stoich_core','P0_lab_templates','P1_biomolecules']
 },
 antiDup:{unchanged:'SKIP_ALREADY_INTRODUCED',changed:'VERIFY_AGAIN',missing:'SEARCH_AND_APPEND',scientificVerified:'SKIP_ALREADY_VERIFIED'}
};
Object.keys(D.EDUCATION_CLOSURE_V313).forEach(k=>{if(k==='remainingScientificQueues')return;lock('EDU_V313_'+k,'INTRODUCED_LOCKED','EDUCATIONAL_CORE');});
C.EDUCATION=C.EDUCATION||{};
C.EDUCATION.gapAuditV313=function(){return {version:'3.13',priority:D.EDUCATION_CLOSURE_V313.priority,remaining:D.EDUCATION_CLOSURE_V313.remainingScientificQueues,ledgerRecords:Object.keys(ledger.records).length};};
E.modules=E.modules||{};E.modules.EDUCATION_CLOSURE_V313='3.13';
E.registry=E.registry||{};E.registry.EDUCATION_CLOSURE_V313={owner:'CHE.DATA.EDUCATION_CLOSURE_V313',layer:'EDUCATION/DATA-CONTRACT',appendOnly:true,noOverwrite:true,ledger:'CHE.EDUCATION_CLOSURE_LEDGER_V313'};
})(window);

} catch (err) {
  try { console.warn('[CHE module 198]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE EDUCATION MAX PACKAGE v3.14 / one-pass large closure */
(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const lock=C.EDUCATION_MAX_LEDGER_V314=E.EDUCATION_MAX_LEDGER_V314||{version:'3.14',policy:'introduced-once hard lock',records:{}};
function add(id,data){if(lock.records[id]?.status==='INTRODUCED_LOCKED')return false;lock.records[id]={status:'INTRODUCED_LOCKED',fingerprint:data.fingerprint||id,source:data.source||'EDUCATIONAL_CORE',introducedAt:'2026-10-02'};return true;}
D.EDUCATION_MAX_V314={version:'3.14',status:'INTRODUCED_LOCKED',priority:['P0_SP7_8','P1_LO_BIOL_CHEM','P2_LO_EXTENDED'],
separation:[
{id:'SEP_FILTRATION',method:'sączenie',basis:'różnica wielkości cząstek/stanów skupienia',example:'piasek+woda'},
{id:'SEP_DECANTATION',method:'dekantacja',basis:'różnica gęstości',example:'osad+woda'},
{id:'SEP_EVAPORATION',method:'odparowanie',basis:'różna lotność',example:'NaCl+woda'},
{id:'SEP_CRYSTALLIZATION',method:'krystalizacja',basis:'zmiana rozpuszczalności z temperaturą',example:'KNO3+woda'},
{id:'SEP_DISTILLATION',method:'destylacja',basis:'różne temperatury wrzenia',example:'woda+etanol'},
{id:'SEP_CHROMATOGRAPHY',method:'chromatografia',basis:'różne powinowactwo do faz',example:'barwniki'},
{id:'SEP_FUNNEL',method:'rozdzielacz',basis:'niemieszalność i gęstość cieczy',example:'woda+olej'}],
substanceCards:[
['H2O','woda','związek','ciecz','polarność','rozpuszczalnik'],['NaCl','chlorek sodu','sól','ciało stałe','elektrolit','sól kuchenna'],['C6H12O6','glukoza','związek organiczny','ciało stałe','cukier redukujący','biochemia'],['C2H5OH','etanol','alkohol','ciecz','palny','rozpuszczalnik'],['CH3COOH','kwas octowy','kwas organiczny','ciecz','kwaśny','ocet'],['HCl','kwas chlorowodorowy','kwas','roztwór wodny','elektrolit','laboratorium'],['H2SO4','kwas siarkowy(VI)','kwas','ciecz/roztwór','żrący','laboratorium'],['HNO3','kwas azotowy(V)','kwas','ciecz/roztwór','utleniający','laboratorium'],['NaOH','wodorotlenek sodu','zasada','ciało stałe/roztwór','żrący','laboratorium'],['Ca(OH)2','wodorotlenek wapnia','zasada','ciało stałe/roztwór','zasadowy','woda wapienna'],['CaCO3','węglan wapnia','sól','ciało stałe','trudno rozpuszczalny','skały'],['CO2','tlenek węgla(IV)','tlenek','gaz','niepalny','gaszenie'],['O2','tlen','pierwiastek','gaz','utleniający','oddychanie'],['H2','wodór','pierwiastek','gaz','palny','energia'],['N2','azot','pierwiastek','gaz','mała reaktywność','atmosfera'],['Fe','żelazo','metal','ciało stałe','korozja','materiały'],['Cu','miedź','metal','ciało stałe','przewodnik','przewody'],['Zn','cynk','metal','ciało stałe','reaguje z kwasami','ochrona stali'],['Al','glin','metal','ciało stałe','pasywacja','materiały'],['SiO2','tlenek krzemu(IV)','tlenek','ciało stałe','sieć kowalencyjna','szkło/piasek']
].map(x=>({formula:x[0],namePL:x[1],class:x[2],state:x[3],keyProperty:x[4],use:x[5]})),
reactionFamilies:[
{id:'RF_SYNTHESIS',name:'synteza',pattern:'A+B->AB'}, {id:'RF_ANALYSIS',name:'analiza',pattern:'AB->A+B'}, {id:'RF_SINGLE',name:'wymiana pojedyncza',pattern:'A+BC->AC+B'}, {id:'RF_DOUBLE',name:'wymiana podwójna',pattern:'AB+CD->AD+CB'}, {id:'RF_COMBUSTION',name:'spalanie',pattern:'fuel+O2->products'}, {id:'RF_NEUTRALIZATION',name:'neutralizacja',pattern:'acid+base->salt+H2O'}, {id:'RF_PRECIPITATION',name:'strącanie',pattern:'aqueous ions->solid'}, {id:'RF_REDOX',name:'redoks',pattern:'electron transfer'}],
redoxExamples:[
{id:'RX_FE_HCL',eq:'Fe + 2HCl -> FeCl2 + H2',oxidized:'Fe',reduced:'H+'},
{id:'RX_ZN_CU',eq:'Zn + CuSO4 -> ZnSO4 + Cu',oxidized:'Zn',reduced:'Cu2+'},
{id:'RX_COMBUSTION_H2',eq:'2H2 + O2 -> 2H2O',oxidized:'H2',reduced:'O2'},
{id:'RX_DISP_CL2',eq:'Cl2 + 2NaOH -> NaCl + NaClO + H2O',type:'disproportionation'}],
calculationModels:[
{id:'CALC_MR',name:'masa cząsteczkowa/formułowa',inputs:['formula'],output:'relative_mass'},
{id:'CALC_MASS_PERCENT',name:'skład procentowy',inputs:['formula'],output:'element_percentages'},
{id:'CALC_MOL',name:'mol↔masa',inputs:['mass','molarMass'],output:'amount'},
{id:'CALC_C',name:'stężenie molowe',inputs:['amount','volume'],output:'concentration'},
{id:'CALC_W',name:'stężenie procentowe',inputs:['soluteMass','solutionMass'],output:'mass_percent'},
{id:'CALC_DILUTION',name:'rozcieńczanie',inputs:['c1','v1','c2','v2'],output:'c2'},
{id:'CALC_LIMIT',name:'reagent ograniczający',inputs:['stoichiometry','amounts'],output:'limiting_reagent'},
{id:'CALC_YIELD',name:'wydajność',inputs:['actual','theoretical'],output:'percent_yield'},
{id:'CALC_GAS',name:'objętość gazu',inputs:['amount','molarVolumeOrConditions'],output:'volume'},
{id:'CALC_PH',name:'pH',inputs:['hydrogenActivityOrEducationalConcentration'],output:'pH'}],
labObservations:[
{id:'OBS_CO2_LIME',test:'CO2 + limewater',positive:'zmętnienie'}, {id:'OBS_H2',test:'H2',positive:'charakterystyczny dźwięk po zapłonie'}, {id:'OBS_O2',test:'O2',positive:'ponowne rozżarzenie łuczywa'}, {id:'OBS_AGCL',test:'Cl- + Ag+',positive:'biały osad'}, {id:'OBS_BASO4',test:'SO4^2- + Ba2+',positive:'biały osad'}, {id:'OBS_STARCH_I2',test:'skrobia + I2',positive:'granatowe zabarwienie'}, {id:'OBS_BIURET',test:'białko + odczynnik biuretowy',positive:'fioletowe zabarwienie'}, {id:'OBS_FAT',test:'tłuszcz',positive:'test charakterystyczny dla tłuszczu'}],
bioProcesses:[
{id:'BIO_PHOTOSYNTHESIS',eq:'6CO2 + 6H2O -> C6H12O6 + 6O2',concepts:['autotrofia','energia świetlna']},
{id:'BIO_RESPIRATION',eq:'C6H12O6 + 6O2 -> 6CO2 + 6H2O',concepts:['energia','redoks']},
{id:'BIO_HYDROLYSIS_STARCH',concepts:['hydrolysis','glucose']},
{id:'BIO_ESTER_FAT',concepts:['glycerol','fatty acids','ester bonds']}],
taskBankExpanded:{count:40,types:['recognize_substance','classify_element','read_periodic_table','formula_from_valence','name_compound','balance_equation','net_ionic','molar_mass','mass_percent','moles','molarity','mass_percent_solution','dilution','solubility','limiting_reagent','yield','oxidation_numbers','redox','gas_volume','pH','separation_method','lab_observation','bio_test','organic_class','functional_group','homologous_series','empirical_formula','molecular_formula','titration_concept','buffer_concept','reaction_type','energy_effect','catalyst','kinetics','graph_interpretation','safety_pictogram','waste_classification','experimental_uncertainty','conclusion_from_observation','data_provenance']},
scientificQueue:{verifyRequired:['L001-L013 canonical reaction source mapping','24 core element complete BHP/source profiles','solubility full table source+temperature+medium','indicator exact ranges/source','GHS jurisdiction/version','pKa/Ksp/Kf/Henry conventions','electrochemical E0 conditions'],introducedLocked:['separation_core','substance_cards_core','reaction_families','redox_examples','calculation_models','lab_observations','bio_processes','expanded_task_bank']},
antiDup:{introduced:'SKIP_ALREADY_INTRODUCED',verified:'SKIP_ALREADY_VERIFIED',changed:'VERIFY_AGAIN',missing:'SEARCH_AND_APPEND'}};
['separation_core','substance_cards_core','reaction_families','redox_examples','calculation_models','lab_observations','bio_processes','expanded_task_bank'].forEach(id=>add('EDU.V314.'+id,{fingerprint:'V314-'+id}));
C.EDUCATION=C.EDUCATION||{};C.EDUCATION.gapAuditV314=function(){return {version:'3.14',introduced:Object.keys(lock.records).length,queues:D.EDUCATION_MAX_V314.scientificQueue,policy:lock.policy};};
E.modules=E.modules||{};E.modules.EDUCATION_MAX_V314='3.14';E.registry=E.registry||{};E.registry.EDUCATION_MAX_V314={owner:'CHE.DATA.EDUCATION_MAX_V314',layer:'EDUCATION/DATA-CONTRACT',appendOnly:true,noOverwrite:true,ledger:'CHE.EDUCATION_MAX_LEDGER_V314'};
})(window);

} catch (err) {
  try { console.warn('[CHE module 199]', err && err.message ? err.message : err); } catch(_){}
}

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

try {

window.CHE=window.CHE||{};
CHE.EDUCATION=CHE.EDUCATION||{};
CHE.EDUCATION.EDUCATION_MAX_BATCH_V316={"version":"3.16","policy":"ONE_PROMPT_MAX_RUN","sourceLayer":"EDUCATIONAL_CORE","referenceReady":false,"lockedCount":148,"generatedAt":"2026-10-02","note":"Educational scaffolding; not a substitute for source-grade scientific records.","records":[{"id":"EDU.ELEMENT.H","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"9a7486cc9ec814ccd6cd","data":{"symbol":"H","namePL":"wodór","type":"niemetal","group":"1","commonOxidationStates":"+1,-1"}},{"id":"EDU.ELEMENT.C","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"7702b694d42f91f6a836","data":{"symbol":"C","namePL":"węgiel","type":"niemetal","group":"14","commonOxidationStates":"-4,+2,+4"}},{"id":"EDU.ELEMENT.N","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a311df1a35248e0b916b","data":{"symbol":"N","namePL":"azot","type":"niemetal","group":"15","commonOxidationStates":"-3,+1,+2,+3,+4,+5"}},{"id":"EDU.ELEMENT.O","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"75d90a321b3b608d47fe","data":{"symbol":"O","namePL":"tlen","type":"niemetal","group":"16","commonOxidationStates":"-2"}},{"id":"EDU.ELEMENT.F","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"93f04ba3b1be1e093383","data":{"symbol":"F","namePL":"fluor","type":"niemetal","group":"17","commonOxidationStates":"-1"}},{"id":"EDU.ELEMENT.Na","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"d05b126a98159350f4a6","data":{"symbol":"Na","namePL":"sód","type":"metal","group":"1","commonOxidationStates":"+1"}},{"id":"EDU.ELEMENT.Mg","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"629aef43fe6c195449ca","data":{"symbol":"Mg","namePL":"magnez","type":"metal","group":"2","commonOxidationStates":"+2"}},{"id":"EDU.ELEMENT.Al","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"d09b2f56e93d45b1bcd8","data":{"symbol":"Al","namePL":"glin","type":"metal","group":"13","commonOxidationStates":"+3"}},{"id":"EDU.ELEMENT.Si","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"53d09d5f04fb3c278b92","data":{"symbol":"Si","namePL":"krzem","type":"niemetal","group":"14","commonOxidationStates":"-4,+4"}},{"id":"EDU.ELEMENT.P","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"2b4f293a5b5dfe8300f3","data":{"symbol":"P","namePL":"fosfor","type":"niemetal","group":"15","commonOxidationStates":"-3,+3,+5"}},{"id":"EDU.ELEMENT.S","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"7112a2f2ae5a4360fba7","data":{"symbol":"S","namePL":"siarka","type":"niemetal","group":"16","commonOxidationStates":"-2,+4,+6"}},{"id":"EDU.ELEMENT.Cl","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"80dfd6d466dbbee16c99","data":{"symbol":"Cl","namePL":"chlor","type":"niemetal","group":"17","commonOxidationStates":"-1,+1,+3,+5,+7"}},{"id":"EDU.ELEMENT.K","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"b7417aaf80e1aaafab3c","data":{"symbol":"K","namePL":"potas","type":"metal","group":"1","commonOxidationStates":"+1"}},{"id":"EDU.ELEMENT.Ca","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"abcf31e5a8c64c7ad3d4","data":{"symbol":"Ca","namePL":"wapń","type":"metal","group":"2","commonOxidationStates":"+2"}},{"id":"EDU.ELEMENT.Fe","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"5f4a6ecfa76b00ecdb51","data":{"symbol":"Fe","namePL":"żelazo","type":"metal","group":"8","commonOxidationStates":"+2,+3"}},{"id":"EDU.ELEMENT.Cu","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"bb04d5073823ced14e9f","data":{"symbol":"Cu","namePL":"miedź","type":"metal","group":"11","commonOxidationStates":"+1,+2"}},{"id":"EDU.ELEMENT.Zn","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"fbbe9cfc7b440da10d69","data":{"symbol":"Zn","namePL":"cynk","type":"metal","group":"12","commonOxidationStates":"+2"}},{"id":"EDU.ELEMENT.Br","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"57f674d85e415e3349d1","data":{"symbol":"Br","namePL":"brom","type":"niemetal","group":"17","commonOxidationStates":"-1,+1,+3,+5,+7"}},{"id":"EDU.ELEMENT.Ag","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"aa785d7080fe1a72c50f","data":{"symbol":"Ag","namePL":"srebro","type":"metal","group":"11","commonOxidationStates":"+1"}},{"id":"EDU.ELEMENT.I","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"e9f18ecabdd3347ae6ac","data":{"symbol":"I","namePL":"jod","type":"niemetal","group":"17","commonOxidationStates":"-1,+1,+3,+5,+7"}},{"id":"EDU.ELEMENT.Ba","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"9b4b244dbf1b494b2cbb","data":{"symbol":"Ba","namePL":"bar","type":"metal","group":"2","commonOxidationStates":"+2"}},{"id":"EDU.ELEMENT.Pb","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"c62ef818ffed211ebf9e","data":{"symbol":"Pb","namePL":"ołów","type":"metal","group":"14","commonOxidationStates":"+2,+4"}},{"id":"EDU.ELEMENT.Hg","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a802b633f82c0cd6be49","data":{"symbol":"Hg","namePL":"rtęć","type":"metal","group":"12","commonOxidationStates":"+1,+2"}},{"id":"EDU.ELEMENT.Cr","kind":"element","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"37dc4d934598dbca9446","data":{"symbol":"Cr","namePL":"chrom","type":"metal","group":"6","commonOxidationStates":"+2,+3,+6"}},{"id":"EDU.SOLUBILITY.01","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"c79f23ce8fc26a228e93","data":{"ion":"NO3-","name":"nitrate","rule":"rozpuszczalne","notes":"wyjątki: Ag+, Pb2+, Hg2^2+"}},{"id":"EDU.SOLUBILITY.02","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"02944cc9c3c2951e5730","data":{"ion":"Cl-","name":"chloride","rule":"zwykle rozpuszczalne","notes":"wyjątki: Ag+, Pb2+, Hg2^2+"}},{"id":"EDU.SOLUBILITY.03","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"4d71e1106a81158b553c","data":{"ion":"Br-","name":"bromide","rule":"zwykle rozpuszczalne","notes":"wyjątki: Ag+, Pb2+, Hg2^2+"}},{"id":"EDU.SOLUBILITY.04","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"b10cb1ed3daba83b5350","data":{"ion":"I-","name":"iodide","rule":"zwykle rozpuszczalne","notes":"wyjątki: Ag+, Pb2+, Hg2^2+"}},{"id":"EDU.SOLUBILITY.05","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"58d71ec817088d24b40e","data":{"ion":"SO4^2-","name":"sulfate","rule":"zwykle rozpuszczalne","notes":"wyjątki m.in. Ba2+, Pb2+, Sr2+; Ca2+ ograniczona"}},{"id":"EDU.SOLUBILITY.06","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"b910668b40c2a09b1368","data":{"ion":"CO3^2-","name":"carbonate","rule":"zwykle nierozpuszczalne","notes":"rozpuszczalne głównie sole metali alkalicznych i NH4+"}},{"id":"EDU.SOLUBILITY.07","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"6b8539911d4e2428c9e6","data":{"ion":"PO4^3-","name":"phosphate","rule":"zwykle nierozpuszczalne","notes":"rozpuszczalne głównie sole metali alkalicznych i NH4+"}},{"id":"EDU.SOLUBILITY.08","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"0b2d5ea4dd65fdc29dfc","data":{"ion":"OH-","name":"hydroxide","rule":"zwykle nierozpuszczalne","notes":"dobrze rozpuszczalne Na+, K+, częściowo Ba2+, Ca2+"}},{"id":"EDU.SOLUBILITY.09","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"5cdded45d651551b1589","data":{"ion":"S^2-","name":"sulfide","rule":"zwykle nierozpuszczalne","notes":"wyjątki zależne od kationu; w edukacji stosować tabelę reguł"}},{"id":"EDU.SOLUBILITY.10","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"0d106a5b935df5af25e2","data":{"ion":"CH3COO-","name":"acetate","rule":"zwykle rozpuszczalne","notes":"reguła edukacyjna dla typowych soli"}},{"id":"EDU.SOLUBILITY.11","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"bccc8d5914fe4fa925b0","data":{"ion":"ClO3-","name":"chlorate","rule":"rozpuszczalne","notes":"reguła edukacyjna"}},{"id":"EDU.SOLUBILITY.12","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"818c5c40ecd948c0d769","data":{"ion":"ClO4-","name":"perchlorate","rule":"rozpuszczalne","notes":"reguła edukacyjna"}},{"id":"EDU.SOLUBILITY.13","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"c64b67172c2828b93cd4","data":{"ion":"NH4+","name":"ammonium","rule":"rozpuszczalne","notes":"sole amonowe zwykle rozpuszczalne"}},{"id":"EDU.SOLUBILITY.14","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"37a31e0b7f79c36ce473","data":{"ion":"Na+","name":"sodium","rule":"rozpuszczalne","notes":"sole sodu zwykle rozpuszczalne"}},{"id":"EDU.SOLUBILITY.15","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"2ad4b8cf2541606b74c8","data":{"ion":"K+","name":"potassium","rule":"rozpuszczalne","notes":"sole potasu zwykle rozpuszczalne"}},{"id":"EDU.SOLUBILITY.16","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"dc1975b467e69b6ad37f","data":{"ion":"Li+","name":"lithium","rule":"rozpuszczalne","notes":"sole litu zwykle rozpuszczalne"}},{"id":"EDU.SOLUBILITY.17","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"3f70b270f2535dbdb1ea","data":{"ion":"Ag+","name":"silver","rule":"zmienne","notes":"AgCl/AgBr/AgI są trudno rozpuszczalne"}},{"id":"EDU.SOLUBILITY.18","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"9bf82b0c399c060f2c07","data":{"ion":"Ba2+","name":"barium","rule":"zmienne","notes":"BaSO4 jest trudno rozpuszczalny"}},{"id":"EDU.SOLUBILITY.19","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"480773f0b4dcda5e34ea","data":{"ion":"Ca2+","name":"calcium","rule":"zmienne","notes":"CaCO3/Ca3(PO4)2 trudno rozpuszczalne"}},{"id":"EDU.SOLUBILITY.20","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"e12743067fe23df7e01d","data":{"ion":"Mg2+","name":"magnesium","rule":"zmienne","notes":"wodorotlenek i węglan słabo rozpuszczalne"}},{"id":"EDU.SOLUBILITY.21","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"d6637c1a6416307d8923","data":{"ion":"Al3+","name":"aluminium","rule":"zmienne","notes":"Al(OH)3 trudno rozpuszczalny/amfoteryczny"}},{"id":"EDU.SOLUBILITY.22","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"6f920019852f17bd3513","data":{"ion":"Fe2+","name":"iron(II)","rule":"zmienne","notes":"Fe(OH)2 trudno rozpuszczalny"}},{"id":"EDU.SOLUBILITY.23","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"b2d7bd7ae4968199eda0","data":{"ion":"Fe3+","name":"iron(III)","rule":"zmienne","notes":"Fe(OH)3 trudno rozpuszczalny"}},{"id":"EDU.SOLUBILITY.24","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"74240379a8a7ed05b2dd","data":{"ion":"Cu2+","name":"copper(II)","rule":"zmienne","notes":"Cu(OH)2 i CuCO3 trudno rozpuszczalne"}},{"id":"EDU.SOLUBILITY.25","kind":"solubility_rule","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"c5194c7d59b236d19c84","data":{"ion":"Zn2+","name":"zinc","rule":"zmienne","notes":"Zn(OH)2 amfoteryczny"}},{"id":"EDU.REACTION.01","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"8c9486195c279b714e23","data":{"pattern":"H2+O2->H2O","class":"synteza","equation":"2 H2 + O2 -> 2 H2O","note":"egzotermiczna"}},{"id":"EDU.REACTION.02","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"4812eb1313c7db0d2682","data":{"pattern":"C+O2->CO2","class":"spalanie","equation":"C + O2 -> CO2","note":"egzotermiczna"}},{"id":"EDU.REACTION.03","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"25908188d86747be4ec0","data":{"pattern":"2CO+O2->2CO2","class":"spalanie","equation":"2 CO + O2 -> 2 CO2","note":"egzotermiczna"}},{"id":"EDU.REACTION.04","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"46c44fd837dc1390a325","data":{"pattern":"CH4+2O2->CO2+2H2O","class":"spalanie","equation":"CH4 + 2 O2 -> CO2 + 2 H2O","note":"egzotermiczna"}},{"id":"EDU.REACTION.05","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"c331addfe2a4d3f9fde9","data":{"pattern":"2Mg+O2->2MgO","class":"spalanie","equation":"2 Mg + O2 -> 2 MgO","note":"egzotermiczna"}},{"id":"EDU.REACTION.06","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"aba54e0c92219d5a9325","data":{"pattern":"4Fe+3O2->2Fe2O3","class":"spalanie","equation":"4 Fe + 3 O2 -> 2 Fe2O3","note":"egzotermiczna"}},{"id":"EDU.REACTION.07","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"1eae8ea9c9d0676660a3","data":{"pattern":"CaO+H2O->CaOH2","class":"synteza","equation":"CaO + H2O -> Ca(OH)2","note":"egzotermiczna"}},{"id":"EDU.REACTION.08","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"3fe9f0a90d3de45c81af","data":{"pattern":"CO2+H2O->H2CO3","class":"synteza","equation":"CO2 + H2O ⇌ H2CO3","note":"równowaga"}},{"id":"EDU.REACTION.09","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"deba11ec24c2c8ded34e","data":{"pattern":"SO2+H2O->H2SO3","class":"synteza","equation":"SO2 + H2O ⇌ H2SO3","note":"równowaga"}},{"id":"EDU.REACTION.10","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"8c86bdd8337affd28dbb","data":{"pattern":"SO3+H2O->H2SO4","class":"synteza","equation":"SO3 + H2O -> H2SO4","note":"synteza"}},{"id":"EDU.REACTION.11","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"9e71484d2ff034e1f535","data":{"pattern":"2Na+2H2O->2NaOH+H2","class":"metal_woda","equation":"2 Na + 2 H2O -> 2 NaOH + H2","note":"egzotermiczna"}},{"id":"EDU.REACTION.12","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"3759c4ac7b2df2bde672","data":{"pattern":"Ca+2H2O->CaOH2+H2","class":"metal_woda","equation":"Ca + 2 H2O -> Ca(OH)2 + H2","note":"redoks"}},{"id":"EDU.REACTION.13","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"9fd42d9abd26b8d8f9d8","data":{"pattern":"Zn+2HCl->ZnCl2+H2","class":"metal_kwas","equation":"Zn + 2 HCl -> ZnCl2 + H2","note":"redoks"}},{"id":"EDU.REACTION.14","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"7544a016d4b02b6ec997","data":{"pattern":"Fe+2HCl->FeCl2+H2","class":"metal_kwas","equation":"Fe + 2 HCl -> FeCl2 + H2","note":"redoks"}},{"id":"EDU.REACTION.15","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"d2685c879e1a031aa4ac","data":{"pattern":"Mg+2HCl->MgCl2+H2","class":"metal_kwas","equation":"Mg + 2 HCl -> MgCl2 + H2","note":"redoks"}},{"id":"EDU.REACTION.16","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"ad4e1c05e06ed29d1eb0","data":{"pattern":"NaOH+HCl->NaCl+H2O","class":"neutralizacja","equation":"NaOH + HCl -> NaCl + H2O","note":"neutralizacja"}},{"id":"EDU.REACTION.17","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"612fad1360c10930ca20","data":{"pattern":"CaOH2+2HCl->CaCl2+2H2O","class":"neutralizacja","equation":"Ca(OH)2 + 2 HCl -> CaCl2 + 2 H2O","note":"neutralizacja"}},{"id":"EDU.REACTION.18","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"924cc6a07eb029c28cc2","data":{"pattern":"H2SO4+2NaOH->Na2SO4+2H2O","class":"neutralizacja","equation":"H2SO4 + 2 NaOH -> Na2SO4 + 2 H2O","note":"neutralizacja"}},{"id":"EDU.REACTION.19","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"6e498275344b12419a72","data":{"pattern":"AgNO3+NaCl->AgCl+NaNO3","class":"stracanie","equation":"AgNO3 + NaCl -> AgCl↓ + NaNO3","note":"osad"}},{"id":"EDU.REACTION.20","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"ed879500606744ecbfa8","data":{"pattern":"BaCl2+Na2SO4->BaSO4+2NaCl","class":"stracanie","equation":"BaCl2 + Na2SO4 -> BaSO4↓ + 2 NaCl","note":"osad"}},{"id":"EDU.REACTION.21","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a5836ca43c73674589a5","data":{"pattern":"CaCO3+2HCl->CaCl2+CO2+H2O","class":"kwas_weglan","equation":"CaCO3 + 2 HCl -> CaCl2 + CO2↑ + H2O","note":"gaz"}},{"id":"EDU.REACTION.22","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"ea9c52ed94ccc6ecc371","data":{"pattern":"Na2CO3+2HCl->2NaCl+CO2+H2O","class":"kwas_weglan","equation":"Na2CO3 + 2 HCl -> 2 NaCl + CO2↑ + H2O","note":"gaz"}},{"id":"EDU.REACTION.23","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a4c0dc88fc4eb41de94f","data":{"pattern":"CuO+2HCl->CuCl2+H2O","class":"tlenek_kwas","equation":"CuO + 2 HCl -> CuCl2 + H2O","note":"neutralizacja"}},{"id":"EDU.REACTION.24","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a8d394079ffc58cf64a2","data":{"pattern":"CuSO4+2NaOH->CuOH2+Na2SO4","class":"stracanie","equation":"CuSO4 + 2 NaOH -> Cu(OH)2↓ + Na2SO4","note":"osad"}},{"id":"EDU.REACTION.25","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"d1badc997604c8027e08","data":{"pattern":"2H2O2->2H2O+O2","class":"rozkład","equation":"2 H2O2 -> 2 H2O + O2","note":"katalizator"}},{"id":"EDU.REACTION.26","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"d4f73566ad07d0be9959","data":{"pattern":"CaCO3->CaO+CO2","class":"rozkład","equation":"CaCO3 -> CaO + CO2","note":"termiczny"}},{"id":"EDU.REACTION.27","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"dac46d9b8fddae292d00","data":{"pattern":"2KClO3->2KCl+3O2","class":"rozkład","equation":"2 KClO3 -> 2 KCl + 3 O2","note":"katalizator"}},{"id":"EDU.REACTION.28","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"7252e8dbc5d0dfe1a095","data":{"pattern":"Fe2O3+3CO->2Fe+3CO2","class":"redoks","equation":"Fe2O3 + 3 CO -> 2 Fe + 3 CO2","note":"redoks"}},{"id":"EDU.REACTION.29","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"759b3e7c86a7dc9785c3","data":{"pattern":"Cl2+2KI->2KCl+I2","class":"wypieranie","equation":"Cl2 + 2 KI -> 2 KCl + I2","note":"redoks"}},{"id":"EDU.REACTION.30","kind":"reaction","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"eecee076a0801ad60bf8","data":{"pattern":"Zn+CuSO4->ZnSO4+Cu","class":"wypieranie","equation":"Zn + CuSO4 -> ZnSO4 + Cu","note":"redoks"}},{"id":"EDU.BIOCHEM.01","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"38431a798c0744535a34","data":{"name":"glukoza","formula":"C6H12O6","class":"monosacharyd","role":"źródło energii"}},{"id":"EDU.BIOCHEM.02","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"b2a62c53e9ad3aa84e75","data":{"name":"fruktoza","formula":"C6H12O6","class":"monosacharyd","role":"cukier prosty"}},{"id":"EDU.BIOCHEM.03","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"776d7582c4f1259039c6","data":{"name":"sacharoza","formula":"C12H22O11","class":"disacharyd","role":"cukier złożony"}},{"id":"EDU.BIOCHEM.04","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"694e1977f357f8288145","data":{"name":"skrobia","formula":"(C6H10O5)n","class":"polisacharyd","role":"magazynowanie glukozy u roślin"}},{"id":"EDU.BIOCHEM.05","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"d9e647d2a2a2e9743867","data":{"name":"celuloza","formula":"(C6H10O5)n","class":"polisacharyd","role":"budowa ścian komórkowych roślin"}},{"id":"EDU.BIOCHEM.06","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"d684c53fc3a2688297cb","data":{"name":"glikogen","formula":"(C6H10O5)n","class":"polisacharyd","role":"magazynowanie glukozy u zwierząt"}},{"id":"EDU.BIOCHEM.07","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"812e248567056003867e","data":{"name":"glicyna","formula":"C2H5NO2","class":"aminokwas","role":"najprostszy aminokwas"}},{"id":"EDU.BIOCHEM.08","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"2169266d8f173ab3bfe7","data":{"name":"alanina","formula":"C3H7NO2","class":"aminokwas","role":"aminokwas białkowy"}},{"id":"EDU.BIOCHEM.09","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"c9fb1391a5070c299bd4","data":{"name":"kwas mlekowy","formula":"C3H6O3","class":"kwas karboksylowy","role":"metabolit"}},{"id":"EDU.BIOCHEM.10","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"1ce128fc3ae65e031a20","data":{"name":"etanol","formula":"C2H6O","class":"alkohol","role":"rozpuszczalnik; toksyczny po spożyciu"}},{"id":"EDU.BIOCHEM.11","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"af033077d2e883ea2e21","data":{"name":"metanol","formula":"CH4O","class":"alkohol","role":"silnie toksyczny"}},{"id":"EDU.BIOCHEM.12","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"b2f0ab658f12ca56a882","data":{"name":"kwas octowy","formula":"C2H4O2","class":"kwas karboksylowy","role":"składnik octu"}},{"id":"EDU.BIOCHEM.13","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"2d1eab6323cdabed6150","data":{"name":"glicerol","formula":"C3H8O3","class":"poliol","role":"składnik lipidów"}},{"id":"EDU.BIOCHEM.14","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"cf485f956c84b35ced8f","data":{"name":"mocznik","formula":"CH4N2O","class":"amid","role":"produkt przemian azotowych"}},{"id":"EDU.BIOCHEM.15","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"9c56f8f20f0748a0ebf8","data":{"name":"ATP","formula":"C10H16N5O13P3","class":"nukleotyd","role":"nośnik energii komórkowej"}},{"id":"EDU.BIOCHEM.16","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"e21e78bc8a3082ba2b4d","data":{"name":"DNA","formula":"polimer nukleotydów","class":"kwas nukleinowy","role":"informacja genetyczna"}},{"id":"EDU.BIOCHEM.17","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"eb824e14b1f4c5b51841","data":{"name":"RNA","formula":"polimer nukleotydów","class":"kwas nukleinowy","role":"ekspresja informacji"}},{"id":"EDU.BIOCHEM.18","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"f5436a164a591814c41e","data":{"name":"hemoglobina","formula":"białko","class":"białko","role":"transport tlenu"}},{"id":"EDU.BIOCHEM.19","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"5f0b3990f33595ae6223","data":{"name":"insulina","formula":"białko","class":"białko","role":"regulacja metabolizmu glukozy"}},{"id":"EDU.BIOCHEM.20","kind":"biomolecule","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"fb8cba379b7c18bbde38","data":{"name":"cholesterol","formula":"C27H46O","class":"lipid","role":"składnik błon i prekursor hormonów"}},{"id":"EDU.INDICATOR.01","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"536871ee5f6ca9db0d8a","data":{"name":"lakmus","result":"kwas: czerwony; zasada: niebieski","type":"wskaźnik"}},{"id":"EDU.INDICATOR.02","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"993b7b77faa8af0412a1","data":{"name":"fenoloftaleina","result":"bezbarwna w kwaśnym/obojętnym; różowa w zasadowym","type":"wskaźnik"}},{"id":"EDU.INDICATOR.03","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a664775e355dc7784194","data":{"name":"oranż metylowy","result":"czerwony w kwaśnym; żółty w zasadowym","type":"wskaźnik"}},{"id":"EDU.INDICATOR.04","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"7075d75a9aa39524eb19","data":{"name":"uniwersalny","result":"barwa zależna od pH","type":"wskaźnik"}},{"id":"EDU.INDICATOR.05","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"11061d1d435b8bc2b7d4","data":{"name":"czerwona kapusta","result":"barwa zależna od pH","type":"wskaźnik naturalny"}},{"id":"EDU.INDICATOR.06","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"699bcaf7e4831cbdef5c","data":{"name":"jod","result":"wykrywanie skrobi: granatowe/ciemnoniebieskie zabarwienie","type":"próba jakościowa"}},{"id":"EDU.INDICATOR.07","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"ef27099f9aa73e6540fe","data":{"name":"biuret","result":"fioletowe zabarwienie białek/wiązań peptydowych","type":"próba jakościowa"}},{"id":"EDU.INDICATOR.08","kind":"indicator_test","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"466c2e841c1c27741975","data":{"name":"ksantoproteinowa","result":"żółte zabarwienie dla białek zawierających aminokwasy aromatyczne","type":"próba jakościowa"}},{"id":"EDU.TASK.01","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"ce62390753495ef2447d","data":{"name":"masa_molowa","description":"oblicz M na podstawie wzoru"}},{"id":"EDU.TASK.02","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"f2e625fe02b5fcffd083","data":{"name":"mol_z_masy","description":"oblicz n=m/M"}},{"id":"EDU.TASK.03","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"94aa9c46fd5d6ae42f39","data":{"name":"masa_z_moli","description":"oblicz m=nM"}},{"id":"EDU.TASK.04","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"8c68ef2278ee5880dc1b","data":{"name":"czastki_z_moli","description":"oblicz N=nNA"}},{"id":"EDU.TASK.05","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"30fec36e00ed6d3230ef","data":{"name":"stezenie_procentowe","description":"oblicz Cp=m_s/m_roztworu*100%"}},{"id":"EDU.TASK.06","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"873e63c2811e162febb2","data":{"name":"stezenie_molowe","description":"oblicz c=n/V"}},{"id":"EDU.TASK.07","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"342e8472d2043eec91ec","data":{"name":"rozcieńczanie","description":"zastosuj c1V1=c2V2"}},{"id":"EDU.TASK.08","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"9711bdaa720e559c50cd","data":{"name":"gęstość","description":"oblicz d=m/V"}},{"id":"EDU.TASK.09","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a8b5e1426585763376fd","data":{"name":"wydajnosc","description":"oblicz wydajność reakcji"}},{"id":"EDU.TASK.10","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"f30db95fd10bc12b4012","data":{"name":"reagent_ograniczajacy","description":"wyznacz substrat ograniczający"}},{"id":"EDU.TASK.11","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"c0be9399d71d55c8f929","data":{"name":"wzor_empiryczny","description":"wyznacz stosunek molowy atomów"}},{"id":"EDU.TASK.12","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"188c3adc3fc5a2a53bbc","data":{"name":"wzor_rzeczywisty","description":"użyj masy molowej"}},{"id":"EDU.TASK.13","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"967e27fc6a796f93d51b","data":{"name":"objętość_gazu","description":"użyj n i warunków zadania"}},{"id":"EDU.TASK.14","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"a9b0506f2cd11dcf9e16","data":{"name":"pH_mocnego_kwasu","description":"wyznacz [H+] z założeń zadania"}},{"id":"EDU.TASK.15","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"e8ac6de0975add9e0e1f","data":{"name":"pOH","description":"wyznacz pOH i zależność z pH"}},{"id":"EDU.TASK.16","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"416a3fecfc7fe2dbaf28","data":{"name":"redoks_stopnie","description":"wyznacz stopnie utlenienia"}},{"id":"EDU.TASK.17","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"f1b551944504f8f9c67b","data":{"name":"redoks_elektrony","description":"zbilansuj transfer elektronów"}},{"id":"EDU.TASK.18","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"dd5e9fc76fbf745f273d","data":{"name":"jonowe_pelne","description":"rozpisz elektrolity mocne"}},{"id":"EDU.TASK.19","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"2ebeb3dba03ee6b6802b","data":{"name":"jonowe_skrocone","description":"usuń jony obserwatorowe"}},{"id":"EDU.TASK.20","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"394dcf400acf4952211d","data":{"name":"osad","description":"przewidź powstanie osadu"}},{"id":"EDU.TASK.21","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"0698707e299467cf8115","data":{"name":"neutralizacja","description":"dobierz współczynniki kwas-zasada"}},{"id":"EDU.TASK.22","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"1287b3a85776b96f1d46","data":{"name":"spalanie","description":"zbilansuj spalanie organicznej"}},{"id":"EDU.TASK.23","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"257f961eb196e90e0b72","data":{"name":"alken","description":"rozpoznaj wiązanie podwójne"}},{"id":"EDU.TASK.24","kind":"task_template","priority":"P0","status":"INTRODUCED_LOCKED","fingerprint":"8f753e4ce2790c1054ef","data":{"name":"alkin","description":"rozpoznaj wiązanie potrójne"}},{"id":"EDU.TASK.25","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"5432c54322cedabd113d","data":{"name":"alkohol","description":"rozpoznaj grupę hydroksylową"}},{"id":"EDU.TASK.26","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"ba3f53a6bde5a34b66fe","data":{"name":"kwas_karboksylowy","description":"rozpoznaj COOH"}},{"id":"EDU.TASK.27","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"c581efed82a0f2f41028","data":{"name":"ester","description":"rozpoznaj grupę estrową"}},{"id":"EDU.TASK.28","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"716888f220834627917b","data":{"name":"aminokwas","description":"rozpoznaj NH2 i COOH"}},{"id":"EDU.TASK.29","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"c1917a6d58364347afc4","data":{"name":"cukier","description":"klasyfikuj mono/di/polisacharyd"}},{"id":"EDU.TASK.30","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"0b4bae1674847ebba94e","data":{"name":"białko","description":"rozpoznaj wiązanie peptydowe"}},{"id":"EDU.TASK.31","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"47a3b62a7b9251142410","data":{"name":"doświadczenie","description":"zapisz obserwację i wniosek"}},{"id":"EDU.TASK.32","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"01bb3eb11046c936162f","data":{"name":"bezpieczeństwo","description":"dobierz BHP do zagrożenia"}},{"id":"EDU.TASK.33","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"06684450e53b68dc343a","data":{"name":"mieszanina","description":"dobierz metodę rozdziału"}},{"id":"EDU.TASK.34","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"ff6677407b8216644874","data":{"name":"wykres","description":"odczytaj zależność z wykresu"}},{"id":"EDU.TASK.35","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"a0e7e97fe0d239be0bfd","data":{"name":"kinetyka","description":"wskaż czynnik wpływający na szybkość"}},{"id":"EDU.TASK.36","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"781226773d991a6747a1","data":{"name":"energia","description":"rozpoznaj endo/egzo"}},{"id":"EDU.TASK.37","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"a0f4ef0a1964ad307886","data":{"name":"równowaga","description":"wskaż kierunek przesunięcia"}},{"id":"EDU.TASK.38","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"6cd1f058c7abe225acd2","data":{"name":"kwas_zasada","description":"wskaż pary sprzężone"}},{"id":"EDU.TASK.39","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"d840e2afa978ab496794","data":{"name":"bufor","description":"opisz rolę pary sprzężonej"}},{"id":"EDU.TASK.40","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"c02f5d4bc5fcdd5a98f9","data":{"name":"miareczkowanie","description":"odczytaj punkt równoważnikowy"}},{"id":"EDU.TASK.41","kind":"task_template","priority":"P1","status":"INTRODUCED_LOCKED","fingerprint":"c6f016d43d0b194a2b6e","data":{"name":"organiczna_nazwy","description":"utwórz nazwę prostego związku"}}],"gapQueue":{"P0":["L001-L013 source reconciliation and canonical promotion","24 element source/BHP profiles","solubility table with conditions","indicator ranges and source metadata","GHS jurisdiction/version","school experiment safety matrix"],"P1":["redox quantitative problems","E° source records","kinetics/Arrhenius","buffers/titrations","organic nomenclature and structures","biochemical structures","conditional pKa/Ksp/Kf"],"P2":["Henry complete source matrix","spectra","mechanisms","stereochemistry","coordination chemistry"]}};
CHE.EDUCATION.INTRODUCED_LOCKED=CHE.EDUCATION.INTRODUCED_LOCKED||{};
CHE.EDUCATION.EDUCATION_MAX_BATCH_V316.records.forEach(function(r){CHE.EDUCATION.INTRODUCED_LOCKED[r.id]=r;});
CHE.EDUCATION.gapAuditV316=function(){var q=CHE.EDUCATION.EDUCATION_MAX_BATCH_V316.gapQueue;return {locked:CHE.EDUCATION.EDUCATION_MAX_BATCH_V316.lockedCount,gaps:q,policy:'ONE_PROMPT_MAX_RUN'};};

} catch (err) {
  try { console.warn('[CHE module 201]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(){
  CHE.EDUCATION=CHE.EDUCATION||{};
  var pkg={version:'3.17',policy:'ONE_PROMPT_MAX_RUN',sourceLayer:'EDUCATIONAL_SAFETY_AND_COMPETENCY',referenceReady:false,generatedAt:'2026-10-02',records:[{"id":"LAB.P0.01","kind":"badanie_pH","titlePL":"pH roztworów kwasów, zasad i soli","hazardClassEducational":"pH","PPE":"rękawice_okulary","criticalRule":"nie próbować substancji; unikać kontaktu z oczami","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"8e7c7d0d9dad6b827290"},{"id":"LAB.P0.02","kind":"reakcja_zn_hcl","titlePL":"otrzymywanie wodoru z cynku i HCl(aq)","hazardClassEducational":"gaz_palny","PPE":"okulary_rękawice","criticalRule":"bez płomienia; kontrola ilości gazu; wentylacja","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"db11b0ddfccc50ab30b2"},{"id":"LAB.P0.03","kind":"rozkład_h2o2","titlePL":"otrzymywanie tlenu z H2O2","hazardClassEducational":"utleniacz","PPE":"okulary_rękawice","criticalRule":"unikać kontaktu ze skórą; nie ogrzewać bez kontroli","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"b1aac8d01e84f3a03b57"},{"id":"LAB.P0.04","kind":"kwas_węglany","titlePL":"reakcja kwasu z węglanem","hazardClassEducational":"gaz_CO2","PPE":"okulary","criticalRule":"kontrolować wydzielanie gazu; nie zamykać układu","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"fde51f1c28709459ab6b"},{"id":"LAB.P0.05","kind":"strącanie","titlePL":"reakcja strącania soli","hazardClassEducational":"substancja_nieznana","PPE":"okulary_rękawice","criticalRule":"nie dotykać osadów; odpady do właściwego pojemnika","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"8b467230f9ab0b801f27"},{"id":"LAB.P0.06","kind":"aktywnosc_metali","titlePL":"metale z wodą/kwasem","hazardClassEducational":"gaz_palny_lub_korozyjny","PPE":"okulary_rękawice","criticalRule":"małe próbki; kontrola gwałtowności reakcji","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"1baf8e2b77104b22173c"},{"id":"LAB.P0.07","kind":"korozja","titlePL":"badanie korozji metali","hazardClassEducational":"długotrwałe","PPE":"okulary","criticalRule":"bezpieczne roztwory edukacyjne; nie dotykać skorodowanych próbek","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"1df7278a4168a178812b"},{"id":"LAB.P0.08","kind":"ogniwo","titlePL":"pomiar napięcia ogniwa","hazardClassEducational":"elektrolit","PPE":"okulary_rękawice","criticalRule":"nie zwierać ogniwa; właściwa utylizacja elektrolitów","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"1ac6826e9e7a2ffe7198"},{"id":"LAB.P0.09","kind":"rozdzielanie","titlePL":"filtracja/ekstrakcja/chromatografia","hazardClassEducational":"rozpuszczalnik","PPE":"okulary","criticalRule":"dobór rozpuszczalnika zgodnie z instrukcją; wentylacja","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"ff31e791b6c601984381"},{"id":"LAB.P0.10","kind":"mieszaniny","titlePL":"rozdzielanie mieszaniny niejednorodnej","hazardClassEducational":"sprzęt_szklany","PPE":"okulary","criticalRule":"ostrożnie ze szkłem; nie używać uszkodzonego sprzętu","priority":"P0_SP7_8","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"481c689b5441ec93e4ea"},{"id":"LAB.P1.01","kind":"miareczkowanie","titlePL":"miareczkowanie kwas-zasada","hazardClassEducational":"substancja_korozyjna","PPE":"okulary_rękawice","criticalRule":"nie pipetować ustami; znać stężenie i etykietę roztworu","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"b62892ad64ae9e190d7b"},{"id":"LAB.P1.02","kind":"efekt_energetyczny","titlePL":"badanie efektu energetycznego","hazardClassEducational":"zmiana_temperatury","PPE":"okulary_rękawice","criticalRule":"chronić dłonie; kontrolować ilości i temperaturę","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"7e9cf70a426b7e75050d"},{"id":"LAB.P1.03","kind":"kinetyka","titlePL":"wpływ temperatury/stężenia na szybkość","hazardClassEducational":"reakcja_zmienna","PPE":"okulary_rękawice","criticalRule":"jedna zmienna na próbę; kontrola temperatury","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"4895a99e148b8c4c6482"},{"id":"LAB.P1.04","kind":"równowaga","titlePL":"wpływ temperatury/stężenia na równowagę","hazardClassEducational":"odczynniki_reaktywne","PPE":"okulary_rękawice","criticalRule":"nie mieszać nieprzewidzianych odczynników","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"ed41b850c9644cad244f"},{"id":"LAB.P1.05","kind":"redoks","titlePL":"wpływ środowiska na redoks","hazardClassEducational":"utleniacz_reduktor","PPE":"okulary_rękawice","criticalRule":"oznaczyć utleniacz/reduktor; odpady wg instrukcji","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"a9c676922d15f73c2de3"},{"id":"LAB.P1.06","kind":"amfoterycznosc","titlePL":"właściwości amfoteryczne","hazardClassEducational":"kwas_zasada","PPE":"okulary_rękawice","criticalRule":"małe ilości; unikać kontaktu ze skórą","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"cd180a03dca56f248b9a"},{"id":"LAB.P1.07","kind":"alkohole","titlePL":"utlenianie alkoholi","hazardClassEducational":"utleniacz_i_substancja_palna","PPE":"okulary_rękawice","criticalRule":"bez źródeł zapłonu; wentylacja","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"3a002d252dc257d1bb80"},{"id":"LAB.P1.08","kind":"aldehydy","titlePL":"próby aldehydów","hazardClassEducational":"odczynniki_specjalne","PPE":"okulary_rękawice","criticalRule":"stosować wyłącznie wg procedury; odpady dedykowane","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"12f863d20ec84a412653"},{"id":"LAB.P1.09","kind":"bialka","titlePL":"próby jakościowe białek","hazardClassEducational":"odczynnik_testowy","PPE":"okulary_rękawice","criticalRule":"nie spożywać próbek; opisać odpady","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"3712031dcecfe1285056"},{"id":"LAB.P1.10","kind":"weglowodory","titlePL":"reaktywność węglowodorów","hazardClassEducational":"palność","PPE":"okulary","criticalRule":"brak płomienia przy próbach z palnymi substancjami; wentylacja","priority":"P1_LO_BIOL_CHEM","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATIONAL_SAFETY","referenceReady":false,"fingerprint":"7db6d2b3ae9b3bf4b87d"},{"id":"SRC.PROFILE.H.V317","kind":"source_profile_queue","element":"H","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"3cc8c78605c09313e0ca"},{"id":"SRC.PROFILE.C.V317","kind":"source_profile_queue","element":"C","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"798cb9dfa63a1145ca54"},{"id":"SRC.PROFILE.N.V317","kind":"source_profile_queue","element":"N","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"43094d16fba7dfdf09e4"},{"id":"SRC.PROFILE.O.V317","kind":"source_profile_queue","element":"O","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"f4ff4a4849b5f3d513eb"},{"id":"SRC.PROFILE.F.V317","kind":"source_profile_queue","element":"F","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"96d90ac2049314510a79"},{"id":"SRC.PROFILE.Na.V317","kind":"source_profile_queue","element":"Na","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"2cc95f35826e045f34ab"},{"id":"SRC.PROFILE.Mg.V317","kind":"source_profile_queue","element":"Mg","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"0cd8b8f12fbe182812c6"},{"id":"SRC.PROFILE.Al.V317","kind":"source_profile_queue","element":"Al","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"58e00c8adb8b40770dd9"},{"id":"SRC.PROFILE.Si.V317","kind":"source_profile_queue","element":"Si","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"f3c415f7544d695d0235"},{"id":"SRC.PROFILE.P.V317","kind":"source_profile_queue","element":"P","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"9d24f34755ddf94ee6ca"},{"id":"SRC.PROFILE.S.V317","kind":"source_profile_queue","element":"S","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"9b6816867d19371110e5"},{"id":"SRC.PROFILE.Cl.V317","kind":"source_profile_queue","element":"Cl","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"8621b79fd13642672b49"},{"id":"SRC.PROFILE.K.V317","kind":"source_profile_queue","element":"K","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"227075172277834d09c2"},{"id":"SRC.PROFILE.Ca.V317","kind":"source_profile_queue","element":"Ca","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"5593ce2f45078dc79c29"},{"id":"SRC.PROFILE.Fe.V317","kind":"source_profile_queue","element":"Fe","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"60a2232684b3f5dbd355"},{"id":"SRC.PROFILE.Cu.V317","kind":"source_profile_queue","element":"Cu","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"34349da603a9b222a916"},{"id":"SRC.PROFILE.Zn.V317","kind":"source_profile_queue","element":"Zn","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"e2063f0801b58cafc634"},{"id":"SRC.PROFILE.Br.V317","kind":"source_profile_queue","element":"Br","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"11879b3a71f23764d076"},{"id":"SRC.PROFILE.Ag.V317","kind":"source_profile_queue","element":"Ag","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"b59c433b809930bb2450"},{"id":"SRC.PROFILE.I.V317","kind":"source_profile_queue","element":"I","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"e999fa65535b912701ab"},{"id":"SRC.PROFILE.Ba.V317","kind":"source_profile_queue","element":"Ba","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"197fb049fddd7f646630"},{"id":"SRC.PROFILE.Pb.V317","kind":"source_profile_queue","element":"Pb","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"f99cba4dae920729538d"},{"id":"SRC.PROFILE.Hg.V317","kind":"source_profile_queue","element":"Hg","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"4ab7484b6fd40ddc413b"},{"id":"SRC.PROFILE.Cr.V317","kind":"source_profile_queue","element":"Cr","scope":["identity","physchem","BHP","GHS","sources"],"sourceTargets":["CIAAW","NIST","IUPAC","authoritative_GHS_source"],"status":"SOURCE_VERIFICATION_QUEUE","referenceReady":false,"doNotOverwriteExisting":true,"fingerprint":"9c3a4faf844552748ee4"},{"id":"EDU.COMPETENCY.C01.V317","kind":"competency","name":"wiarygodność_danych","descriptionPL":"ocena źródła, jednostek, warunków i ograniczeń","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"26664e71211b9e31343f"},{"id":"EDU.COMPETENCY.C02.V317","kind":"competency","name":"bezpieczeństwo","descriptionPL":"dobór PPE, zagrożeń i postępowania awaryjnego","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"eb716084511cce9a7e9b"},{"id":"EDU.COMPETENCY.C03.V317","kind":"competency","name":"obserwacja","descriptionPL":"oddzielenie obserwacji od wniosku","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"c5ff8dd2216930aa4a44"},{"id":"EDU.COMPETENCY.C04.V317","kind":"competency","name":"równanie","descriptionPL":"zapis i bilansowanie równania","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"6b533bc5b0e88757f037"},{"id":"EDU.COMPETENCY.C05.V317","kind":"competency","name":"mol","descriptionPL":"zależność n,m,M,N,NA","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"ade4370a47d855debb98"},{"id":"EDU.COMPETENCY.C06.V317","kind":"competency","name":"stechiometria","descriptionPL":"stosunki molowe z równania","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"c4cf44f846f76f40d780"},{"id":"EDU.COMPETENCY.C07.V317","kind":"competency","name":"roztwory","descriptionPL":"stężenie procentowe i molowe","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"94cfde16159086bf8a59"},{"id":"EDU.COMPETENCY.C08.V317","kind":"competency","name":"rozcieńczanie","descriptionPL":"c1V1=c2V2","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"ed119d8594cbf5b4c8bd"},{"id":"EDU.COMPETENCY.C09.V317","kind":"competency","name":"pH","descriptionPL":"interpretacja odczynu i skali pH","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"661ee93badba5bdc12d4"},{"id":"EDU.COMPETENCY.C10.V317","kind":"competency","name":"jonowe","descriptionPL":"równania jonowe pełne i skrócone","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"528de0c7da530b3161b2"},{"id":"EDU.COMPETENCY.C11.V317","kind":"competency","name":"osady","descriptionPL":"wykorzystanie reguł rozpuszczalności","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"f6a3469ada84879bc8b5"},{"id":"EDU.COMPETENCY.C12.V317","kind":"competency","name":"redoks","descriptionPL":"stopnie utlenienia i elektrony","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"b20eeb4041c517184a89"},{"id":"EDU.COMPETENCY.C13.V317","kind":"competency","name":"ogniwo","descriptionPL":"interpretacja napięcia ogniwa","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"89d9aec7578524f6a6af"},{"id":"EDU.COMPETENCY.C14.V317","kind":"competency","name":"kinetyka","descriptionPL":"wpływ czynników na szybkość","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"94609d1e53549283bf73"},{"id":"EDU.COMPETENCY.C15.V317","kind":"competency","name":"energia","descriptionPL":"endo/egzo i energia aktywacji","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"863123c0a273c2010342"},{"id":"EDU.COMPETENCY.C16.V317","kind":"competency","name":"równowaga","descriptionPL":"wpływ warunków na stan równowagi","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"976259dcc6ae3e049e48"},{"id":"EDU.COMPETENCY.C17.V317","kind":"competency","name":"kwasy_zasady","descriptionPL":"pary sprzężone i neutralizacja","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"8663e1e424a74b5415b1"},{"id":"EDU.COMPETENCY.C18.V317","kind":"competency","name":"miareczkowanie","descriptionPL":"punkt równoważnikowy i wskaźnik","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"72ec98e6378fb67b1ed7"},{"id":"EDU.COMPETENCY.C19.V317","kind":"competency","name":"organiczna","descriptionPL":"grupy funkcyjne i nazewnictwo","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"0b287ddd98e011d1b56e"},{"id":"EDU.COMPETENCY.C20.V317","kind":"competency","name":"biochemia","descriptionPL":"zależność budowa-funkcja","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"1d482b31cf66c305c276"},{"id":"EDU.COMPETENCY.C21.V317","kind":"competency","name":"wykres","descriptionPL":"odczyt i interpretacja danych","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"96a6c7fbd6dcaf39e313"},{"id":"EDU.COMPETENCY.C22.V317","kind":"competency","name":"doświadczenie","descriptionPL":"problem-hipoteza-procedura-wynik-wniosek","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"ef3f6baa9bf192b7de68"},{"id":"EDU.COMPETENCY.C23.V317","kind":"competency","name":"BHP","descriptionPL":"postępowanie z odpadami i incydentem","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"1a89480c37de2d14cff6"},{"id":"EDU.COMPETENCY.C24.V317","kind":"competency","name":"źródła","descriptionPL":"łączenie danych z identyfikatorem źródła","status":"INTRODUCED_LOCKED","sourceLayer":"EDUCATION_CORE","referenceReady":false,"fingerprint":"13ad5a430d83ac01c09a"}],sources:{curriculum:[{id:'ZPE_CHEM_SP_2025_26',url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia',scope:'SP7_8'},{id:'ZPE_CHEM_LO_2025_26',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia',scope:'LO'}],reference:[{id:'NIST_SRD69',url:'https://webbook.nist.gov/chemistry/',scope:'reference_data'}]}};
  CHE.EDUCATION.EDUCATION_P0_P1_SAFETY_V317=pkg;
  CHE.EDUCATION.INTRODUCED_LOCKED=CHE.EDUCATION.INTRODUCED_LOCKED||{};
  CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE=CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE||{};
  CHE.EDUCATION.COMPETENCY_MATRIX=CHE.EDUCATION.COMPETENCY_MATRIX||{};
  pkg.records.forEach(function(r){
    if(r.status==='INTRODUCED_LOCKED') CHE.EDUCATION.INTRODUCED_LOCKED[r.id]=r;
    if(r.status==='SOURCE_VERIFICATION_QUEUE') CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE[r.id]=r;
    if(r.kind==='competency') CHE.EDUCATION.COMPETENCY_MATRIX[r.id]=r;
  });
  CHE.EDUCATION.gapAuditV317=function(){return {version:'3.17',records:pkg.records.length,locked:Object.keys(CHE.EDUCATION.INTRODUCED_LOCKED).length,sourceQueue:Object.keys(CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE).length,competencies:Object.keys(CHE.EDUCATION.COMPETENCY_MATRIX).length,referenceReady:false,next:['source/BHP verification','GHS jurisdiction/version','indicator ranges','solubility conditions','L001-L013 canonical reconciliation']};};
})();

} catch (err) {
  try { console.warn('[CHE module 202]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.18 — SOURCE/EDUCATION BRIDGE MAX BATCH */
(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.SOURCE_BRIDGE_V318={
    version:'3.18', referenceReady:false,
    policy:'source-backed queue; no promotion without verification',
    sources:{
      ZPE_CHEM_SP_2025_2026:{title:'Chemia — Szkoła podstawowa IV–VIII — podstawa programowa 2025/2026',url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia',scope:'SP7-8',role:'education_requirements'},
      ZPE_CHEM_LO_2025_2026:{title:'Chemia — Liceum ogólnokształcące i technikum — podstawa programowa 2025/2026',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia',scope:'LO',role:'education_requirements'},
      NIST_WEBBOOK_SRD69:{title:'NIST Chemistry WebBook, SRD 69',url:'https://webbook.nist.gov/chemistry/',scope:'scientific_data',role:'reference_data'},
      NIST_REACTION_SEARCH:{title:'NIST Chemistry WebBook — Reaction Search',url:'https://webbook.nist.gov/chemistry/reac-ser/',scope:'reactions',role:'reaction_search'}
    }
  };
  CHE.EDUCATION=CHE.EDUCATION||{};
  CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE_V318=[
    'H','C','N','O','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','I','Ba','Pb','Hg','Mn','Cr'
  ].map((symbol,i)=>({id:'ELEM-SOURCE-'+symbol,subject:symbol,sourceStatus:'VERIFY_REQUIRED',required:['identity','key_properties','safety','GHS','source'],priority:i<21?'P0':'P1'}));
  CHE.EDUCATION.INDICATOR_SOURCE_QUEUE_V318=[
    {id:'IND-PH-PAPER',name:'papierki/wskaźnik pH',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-LITMUS',name:'lakmus',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-PHENOLPHTHALEIN',name:'fenoloftaleina',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-MO',name:'oranż metylowy',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-UNIVERSAL',name:'wskaźnik uniwersalny',medium:'aqueous',status:'VERIFY_REQUIRED'},
    {id:'IND-IODINE-STARCH',name:'próba jodowa skrobi',medium:'aqueous',status:'VERIFY_REQUIRED'}
  ];
  CHE.EDUCATION.SOLUBILITY_SOURCE_QUEUE_V318=[
    'Na+','K+','NH4+','NO3-','Cl-','Br-','I-','SO4^2-','CO3^2-','HCO3-','OH-','CH3COO-','Ag+','Ba2+','Ca2+','Mg2+','Cu2+','Fe2+','Fe3+','Pb2+','Zn2+','Al3+','S2-','PO4^3-'
  ].map(x=>({ion:x,status:'VERIFY_REQUIRED',kind:'qualitative_rule_or_quantitative_solubility',conditionsRequired:['temperature','solvent','medium','concentration_or_limit'],sourceRequired:true}));
  CHE.EDUCATION.EXPERIMENT_SAFETY_MATRIX_V318=[
    ['filtration','mixture separation','SP7-8'],['crystallization','mixture separation','SP7-8'],['distillation','mixture separation','SP7-8'],['decantation','mixture separation','SP7-8'],
    ['oxygen_preparation','oxygen properties','SP7-8'],['hydrogen_properties','hydrogen properties','SP7-8'],['acid_base_indicator','pH/indicators','SP7-8'],['metal_acid_reaction','reaction observation','SP7-8'],
    ['carbonate_acid','gas evolution','SP7-8'],['protein_denaturation','biomolecules','SP7-8'],['starch_iodine_test','biomolecules','SP7-8'],['titration','quantitative analysis','LO'],
    ['redox','electron transfer','LO'],['reaction_rate','kinetics','LO'],['buffer','equilibrium','LO'],['electrochemistry','redox/electrochemistry','LO']
  ].map(([id,topic,level])=>({id:'SAFE-'+id,topic,level,requiredFields:['hazards','PPE','procedure_limits','waste','observation','emergency_note'],status:'EDUCATIONAL_SAFETY_SCAFFOLD'}));
  CHE.REACTION_LESSON_RECONCILIATION=CHE.REACTION_LESSON_RECONCILIATION||{};
  CHE.REACTION_LESSON_RECONCILIATION.V318={
    sourceScope:'L001-L013', policy:'audit first; canonical promotion only after structural verification',
    statuses:['EXACT_CANONICAL','MULTIPLE_CANONICAL','NEEDS_REVIEW','NO_CANONICAL_MATCH','UNPARSEABLE'],
    promotionRule:'requires balanced canonical graph + provenance + conditions when source specifies them + safety metadata when applicable',
    externalSearchSource:'NIST_REACTION_SEARCH',
    unresolvedMustNotBeAutoPromoted:true
  };
  CHE.EDUCATION.gapAuditV318=function(){return {
    version:'3.18', referenceReady:false,
    sourceQueue:(CHE.EDUCATION.SOURCE_VERIFICATION_QUEUE_V318||[]).length,
    indicatorQueue:(CHE.EDUCATION.INDICATOR_SOURCE_QUEUE_V318||[]).length,
    solubilityQueue:(CHE.EDUCATION.SOLUBILITY_SOURCE_QUEUE_V318||[]).length,
    safetyMatrix:(CHE.EDUCATION.EXPERIMENT_SAFETY_MATRIX_V318||[]).length,
    lessonReactionPolicy:CHE.REACTION_LESSON_RECONCILIATION.V318.promotionRule,
    duplicateDatabase:false
  };};
  CHE.KNOWLEDGE=CHE.KNOWLEDGE||{};
  CHE.KNOWLEDGE.V318={
    verifiedBySource:[],
    introducedOnly:['education_scaffolds'],
    lockedUntilFingerprintChange:true,
    note:'Brak automatycznej promocji danych edukacyjnych do REFERENCE_READY.'
  };
})();

} catch (err) {
  try { console.warn('[CHE module 203]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.19 — P0 source-backed promotion package */
CHE.SCIENCE_SOURCE_PACKAGE_V319={
 version:'3.19',
 policy:'append-only; source-backed records may enter DATABASE_SOURCE_CHECKED, never auto-promote to REFERENCE_READY',
 sources:{
  ZPE_SP_2025_2026:'ZPE chemia SP IV-VIII, podstawa programowa 2025/2026',
  ZPE_LO_2025_2026:'ZPE chemia LO/technikum, podstawa programowa 2025/2026',
  IUPAC_GOLD_BOOK_2025:'IUPAC Gold Book, Compendium of Chemical Terminology, version 5.0.0 (2025)',
  LIBRETEXTS_SOLUBILITY_25C:'Chemistry LibreTexts, Solubility table, water at 25 °C except noted'
 }
};
CHE.EDUCATION.INDICATOR_REFERENCE_V319=[
 {id:'IND_ACID_BASE_DEFINITION',name:'acid-base indicator',status:'DATABASE_SOURCE_CHECKED',definition:'acid or base showing a colour change near the equivalence point',source:'IUPAC_GOLD_BOOK_2025',doi:'10.1351/goldbook.A00075',referenceReady:false},
 {id:'IND_TRANSITION_INTERVAL',name:'transition interval',status:'DATABASE_SOURCE_CHECKED',definition:'range over which the visible indicator colour/property change is perceived',source:'IUPAC_GOLD_BOOK_2025',doi:'10.1351/goldbook.T06457',referenceReady:false},
 {id:'IND_UNIVERSAL',name:'universal indicator',status:'DATABASE_SOURCE_CHECKED',range:'usually pH 1–14',components:['thymol blue','methyl red','bromothymol blue','phenolphthalein'],source:'IUPAC_GOLD_BOOK_2025',doi:'10.1351/goldbook.09054',referenceReady:false}
];
CHE.EDUCATION.SOLUBILITY_REFERENCE_V319=[
 {id:'SOL_AGCL_25C',formula:'AgCl',value:0.019,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_CACO3_25C',formula:'CaCO3',value:0.058,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_CAF2_25C',formula:'CaF2',value:0.0016,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_CANITRATE_25C',formula:'Ca(NO3)2',value:143.9,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_KBR_25C',formula:'KBr',value:67.8,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_NACL_25C',formula:'NaCl',value:36.0,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_NAHCO3_25C',formula:'NaHCO3',value:8.41,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false},
 {id:'SOL_MGCO3_25C',formula:'MgCO3',value:2.20,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'LIBRETEXTS_SOLUBILITY_25C',referenceReady:false}
];
CHE.EDUCATION.PROMOTION_GATE_V319=function(record){
 var required=['source','status'];
 var ok=required.every(function(k){return record&&record[k]});
 if(!ok)return {status:'BLOCKED',reason:'missing_source_or_status'};
 if(record.referenceReady!==true)return {status:'DATABASE_SOURCE_CHECKED_ONLY',reason:'reference_contract_not_complete'};
 return {status:'REFERENCE_READY_CANDIDATE',reason:'manual_scientific_gate_required'};
};
CHE.REACTION_LESSON_RECONCILIATION.V319={
 promotionRule:'PROMOTE_ONLY_IF_CANONICAL_GRAPH_BALANCED_AND_PROVENANCE_COMPLETE_AND_SOURCE_CONDITIONS_MATCH',
 unresolvedRemainAuditOnly:true,
 sourceRequired:true,
 rendererMustNotPromote:true
};
CHE.EDUCATION.gapAuditV319=function(){return {
 indicatorReference:(CHE.EDUCATION.INDICATOR_REFERENCE_V319||[]).length,
 solubilityReference:(CHE.EDUCATION.SOLUBILITY_REFERENCE_V319||[]).length,
 sourceBackedButNotReferenceReady:(CHE.EDUCATION.SOLUBILITY_REFERENCE_V319||[]).filter(function(x){return x.referenceReady!==true}).length+(CHE.EDUCATION.INDICATOR_REFERENCE_V319||[]).filter(function(x){return x.referenceReady!==true}).length,
 reactionPromotionPolicy:CHE.REACTION_LESSON_RECONCILIATION.V319.promotionRule,
 referenceReady:false
};};
CHE.KNOWLEDGE.V319={
 version:'3.19',
 sourcePolicy:'ZPE defines educational priorities; IUPAC supplies terminology; source-backed solubility records remain non-reference-ready until scientific gate requirements are complete.',
 noSecondDatabase:true
};

} catch (err) {
  try { console.warn('[CHE module 204]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.20 — P0 quantitative education + laboratory contract */
CHE.EDUCATION.SOLUBILITY_REFERENCE_V320=[
 {id:'SOL_BENZENE_25C',formula:'C6H6',value:0.178,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'CHEM_LIBRETEXTS_CONCENTRATION_9_2',referenceReady:false},
 {id:'SOL_CH4_25C',formula:'CH4',value:0.0023,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'CHEM_LIBRETEXTS_CONCENTRATION_9_2',referenceReady:false},
 {id:'SOL_CO2_25C',formula:'CO2',value:0.150,unit:'g/100 mL H2O',temperature_C:25,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'CHEM_LIBRETEXTS_CONCENTRATION_9_2',referenceReady:false},
 {id:'SOL_GLUCOSE_30C',formula:'C6H12O6',value:120.3,unit:'g/100 mL H2O',temperature_C:30,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'CHEM_LIBRETEXTS_CONCENTRATION_9_2',referenceReady:false},
 {id:'SOL_SUCROSE_20C',formula:'C12H22O11',value:204.0,unit:'g/100 mL H2O',temperature_C:20,medium:'water',status:'DATABASE_SOURCE_CHECKED',source:'CHEM_LIBRETEXTS_CONCENTRATION_9_2',referenceReady:false}
];
CHE.EDUCATION.SOURCE_REGISTRY_V320={
 CHEM_LIBRETEXTS_CONCENTRATION_9_2:{name:'Chemistry LibreTexts 9.2: Concentration',scope:'educational solubility table',conditions:'25 °C unless record states otherwise',url:'https://chem.libretexts.org/Courses/University_of_Illinois_Springfield/CHE_124%3A_General_Chemistry_for_the_Health_Professions_%28Morsch_and_Andrews%29/09%3A_Solutions/9.2%3A_Concentration',status:'DATABASE_SOURCE_CHECKED'}
};
CHE.EDUCATION.LAB_OBSERVATION_CONTRACT_V320={
 required:['experimentId','question','materials','hazards','procedure','observations','result','conclusion','sourceStatus'],
 observationFields:['appearance','colour','state','gasEvolution','precipitate','temperatureChange','pH','conductivity','other'],
 rule:'observation must be separated from interpretation; safety metadata required before experiment is runnable'
};
CHE.EDUCATION.STOICHIOMETRY_ENGINE_V320={
 version:'3.20',
 formulas:{n_from_mass:'n=m/M',mass_from_n:'m=n*M',c_from_nV:'c=n/V',n_from_cV:'n=c*V',dilution:'c1*V1=c2*V2',yield:'eta=actual/theoretical'},
 units:{mass:'g',molarMass:'g/mol',amount:'mol',volume:'L',concentration:'mol/L',yield:'fraction or %'},
 policy:'input units must be explicit; no silent unit conversion; calculated values retain provenance',
 referenceReady:false
};
CHE.EDUCATION.EQUATION_SKILL_CONTRACT_V320={
 operations:['parse','normalize','balance_atoms','balance_charge','classify'],
 invariant:'conservation of atoms and electric charge',
 output:['reactants','products','coefficients','ionicForm','reactionClass','validation'],
 rendererIndependent:true
};
CHE.EDUCATION.gapAuditV320=function(){
 var sol=(CHE.EDUCATION.SOLUBILITY_REFERENCE_V320||[]);
 return {version:'3.20',solubilityAdded:sol.length,sourceChecked:sol.filter(function(x){return x.status==='DATABASE_SOURCE_CHECKED'}).length,referenceReady:sol.filter(function(x){return x.referenceReady===true}).length,labContract:true,stoichiometryContract:true,equationContract:true,referenceGate:'BLOCKED'};
};
CHE.KNOWLEDGE.V320={
 version:'3.20',
 verifiedScope:['solubility table values cross-checked against cited LibreTexts table'],
 educationalPriority:['SP7-8 substances/solutions/observations','LO stoichiometry/solutions/equations'],
 noSecondDatabase:true,
 noAutoPromotion:true
};

} catch (err) {
  try { console.warn('[CHE module 205]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.21 — ONE_PROMPT_MAX_RUN: equation + stoichiometry execution layer.
   Uses CHE.DATA as the only source of atomic masses; no second chemistry DB. */
(function(C){
  C.EDUCATION=C.EDUCATION||{}; C.EDUCATION_ENGINE=C.EDUCATION_ENGINE||{};
  var E=C.DATA&&C.DATA.ATOMIC_MASS||{};
  function cleanFormula(f){return String(f||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,function(x){return String('₀₁₂₃₄₅₆₇₈₉'.indexOf(x))});}
  function parseFormula(formula){
    var s=cleanFormula(formula).replace(/\s+/g,'');
    var i=0;
    function seq(stop){var out={};
      while(i<s.length && s[i]!==stop){
        if(s[i]==='('){i++;var inner=seq(')');if(s[i]!==')')throw Error('Unclosed group in '+formula);i++;var m='';while(i<s.length&&/\d/.test(s[i]))m+=s[i++];var mult=Number(m||1);Object.keys(inner).forEach(function(k){out[k]=(out[k]||0)+inner[k]*mult;});continue;}
        if(!/[A-Z]/.test(s[i]))throw Error('Unexpected token '+s[i]+' in '+formula);
        var el=s[i++];if(i<s.length&&/[a-z]/.test(s[i]))el+=s[i++];
        var n='';while(i<s.length&&/\d/.test(s[i]))n+=s[i++];out[el]=(out[el]||0)+Number(n||1);
      } return out;}
    var r=seq();if(i!==s.length)throw Error('Unparsed formula '+formula);return r;
  }
  function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){var t=a%b;a=b;b=t;}return a||1;}
  function lcm(a,b){return Math.abs(a/gcd(a,b)*b);}
  function rational(x){if(Math.abs(x)<1e-10)return [0,1];var sign=x<0?-1:1;x=Math.abs(x);var best=[Math.round(x),1],err=Math.abs(x-best[0]);for(var d=1;d<=1000;d++){var n=Math.round(x*d),e=Math.abs(x-n/d);if(e<err){best=[n,d];err=e;if(e<1e-10)break;}}return [sign*best[0],best[1]];}
  function rref(A){var m=A.length,n=A[0].length,row=0,piv=[];for(var c=0;c<n&&row<m;c++){var k=row;for(var r=row+1;r<m;r++)if(Math.abs(A[r][c])>Math.abs(A[k][c]))k=r;if(Math.abs(A[k][c])<1e-10)continue;var t=A[k];A[k]=A[row];A[row]=t;var q=A[row][c];for(var j=c;j<n;j++)A[row][j]/=q;for(var rr=0;rr<m;rr++){if(rr===row)continue;var z=A[rr][c];if(Math.abs(z)<1e-10)continue;for(var jj=c;jj<n;jj++)A[rr][jj]-=z*A[row][jj];}piv.push(c);row++;}return piv;}
  function balanceEquation(eq){
    var raw=String(eq||'').replace(/⇌|⇄|⟶|→|=/,'->');var sides=raw.split('->');if(sides.length!==2)throw Error('Equation needs one arrow');
    function terms(side){return side.split('+').map(function(x){x=x.trim();var m=x.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);return {coef:m?Number(m[1]):1,formula:(m?m[2]:x).replace(/\([aqslg]\)$/,'').trim()};}).filter(function(x){return x.formula;});}
    var L=terms(sides[0]),R=terms(sides[1]), all=L.concat(R), els=[];all.forEach(function(t){Object.keys(parseFormula(t.formula)).forEach(function(e){if(els.indexOf(e)<0)els.push(e);});});
    var A=els.map(function(e){return all.map(function(t,idx){var n=parseFormula(t.formula)[e]||0;return (idx<L.length?n:-n);});});
    if(all.length===1)throw Error('Need at least two species');
    var M=A.map(function(row){return row.slice(0,-1).concat([-row[row.length-1]]);});
    var piv=rref(M),n=all.length,free=-1;for(var c=0;c<n;c++)if(piv.indexOf(c)<0){free=c;break;}if(free<0)throw Error('No free variable; equation may be inconsistent');
    var x=Array(n).fill(0);x[free]=1;for(var rr=0;rr<piv.length;rr++)x[piv[rr]]=-M[rr][free];
    var den=1;x.forEach(function(v){den=lcm(den,rational(v)[1]);});var ints=x.map(function(v){return Math.round(v*den);});var g=ints.reduce(function(a,b){return gcd(a,b);},0);ints=ints.map(function(v){return v/g;});if(ints.some(function(v){return v<0;})){ints=ints.map(function(v){return -v;});}
    var left=ints.slice(0,L.length),right=ints.slice(L.length);var atoms={};els.forEach(function(e){atoms[e]=0;});all.forEach(function(t,idx){var c=ints[idx],f=parseFormula(t.formula);Object.keys(f).forEach(function(e){atoms[e]=(atoms[e]||0)+(idx<L.length?1:-1)*c*f[e];});});
    return {input:eq,reactants:L,products:R,coefficients:{reactants:left,products:right},equation:L.map(function(t,j){return left[j]+' '+t.formula;}).join(' + ')+' -> '+R.map(function(t,j){return right[j]+' '+t.formula;}).join(' + '),balanced:Object.values(atoms).every(function(v){return Math.abs(v)<1e-9;}),atomBalance:atoms,elements:els};
  }
  function molarMass(formula){var a=parseFormula(formula),missing=[];var M=0;Object.keys(a).forEach(function(el){var v=Number(E[el]);if(!isFinite(v)){missing.push(el);}else M+=v*a[el];});return {formula:formula,molarMass:missing.length?null:M,missingElements:missing,composition:a,source:'CHE.DATA.ATOMIC_MASS'};}
  function reactionRatio(bal,from,to,n){var i=bal.reactants.concat(bal.products).findIndex(function(t){return t.formula===from;}),j=bal.reactants.concat(bal.products).findIndex(function(t){return t.formula===to;});if(i<0||j<0)throw Error('Species not found');var ci=bal.coefficients.reactants.concat(bal.coefficients.products)[i],cj=bal.coefficients.reactants.concat(bal.coefficients.products)[j];return n*cj/ci;}
  function stoichMass(bal,from,to,mass){var mm=molarMass(from),mt=molarMass(to);if(mm.molarMass==null||mt.molarMass==null)throw Error('Missing atomic mass for '+(mm.missingElements||[]).concat(mt.missingElements||[]).join(','));var n=mass/mm.molarMass;return {inputMass_g:mass,from:from,to:to,molesFrom:n,molesTo:reactionRatio(bal,from,to,n),massTo:reactionRatio(bal,from,to,n)*mt.molarMass,molarMassFrom:mm.molarMass,molarMassTo:mt.molarMass};}
  function validate(b){var checks={balanced:b.balanced,nonzero:b.coefficients.reactants.concat(b.coefficients.products).every(function(x){return x>0;})};return {ok:Object.values(checks).every(Boolean),checks:checks,atomBalance:b.atomBalance};}
  C.EDUCATION_ENGINE.parseFormula=parseFormula;
  C.EDUCATION_ENGINE.balanceEquation=balanceEquation;
  C.EDUCATION_ENGINE.molarMass=molarMass;
  C.EDUCATION_ENGINE.reactionRatio=reactionRatio;
  C.EDUCATION_ENGINE.stoichMass=stoichMass;
  C.EDUCATION_ENGINE.validate=validate;
  C.EDUCATION_ENGINE.V321={version:'3.21',owner:'CHE.EDUCATION_ENGINE',sourceOfTruth:'CHE.DATA.ATOMIC_MASS',oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
  C.EDUCATION_ENGINE.selfTest=function(){
    var a=balanceEquation('H2 + O2 -> H2O'),b=balanceEquation('Fe + O2 -> Fe2O3'),c=balanceEquation('HCl + NaOH -> NaCl + H2O');
    var mm=molarMass('Ca(OH)2');return {version:'3.21',equations:[a.equation,b.equation,c.equation],allBalanced:[a,b,c].every(function(x){return validate(x).ok;}),CaOH2_M:Math.round(mm.molarMass*1000)/1000,sourceMass:'CHE.DATA.ATOMIC_MASS'};
  };
  C.EDUCATION.gapAuditV321=function(){return {version:'3.21',engine:true,parseFormula:true,balance:true,molarMass:true,stoichiometry:true,canonicalReactionDB:'CHE.DATA.REACTIONS',referenceReady:false,next:['limiting reagent execution','yield execution','ionic equation engine','L001-L013 source reconciliation']};};
})(window.CHE);

} catch (err) {
  try { console.warn('[CHE module 206]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.22 — MAX EXECUTION: stoichiometry + ionic equations + structure bridge + task engine */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{};
CHE.EDUCATION_ENGINE_V322=CHE.EDUCATION_ENGINE_V322||{};
const E=CHE.EDUCATION_ENGINE_V322;
const src='CHE_EDUCATION_ENGINE_V322';
function num(x){const n=Number(x);return Number.isFinite(n)?n:null}
function coeffMap(eq){return (eq?.reactants||[]).map(x=>({formula:x.formula,coef:num(x.coef)||0}));}
E.limitingReagent=function(eq,amounts){
 const rs=coeffMap(eq).filter(x=>x.coef>0), ratios=rs.map(x=>({formula:x.formula,available:num(amounts?.[x.formula]),required:x.coef,extent:(num(amounts?.[x.formula])||0)/x.coef}));
 if(!ratios.length||ratios.some(x=>x.available===null||x.available<0)) return {ok:false,status:'INVALID_INPUT',source:src};
 const m=Math.min(...ratios.map(x=>x.extent)), lim=ratios.filter(x=>Math.abs(x.extent-m)<=1e-12).map(x=>x.formula);
 return {ok:true,status:'COMPUTED',extent:m,limitingReagents:lim,ratios,source:src};
};
E.theoreticalProduct=function(eq,amounts,product){
 const lim=E.limitingReagent(eq,amounts); if(!lim.ok)return lim;
 const p=(eq?.products||[]).find(x=>x.formula===product); if(!p||!(num(p.coef)>0))return {ok:false,status:'PRODUCT_NOT_FOUND',source:src};
 return {...lim,product,productAmount:lim.extent*p.coef};
};
E.percentYield=function(actual,theoretical){const a=num(actual),t=num(theoretical);if(a===null||t===null||t<=0||a<0)return {ok:false,status:'INVALID_INPUT',source:src};return {ok:true,status:'COMPUTED',percent:100*a/t,source:src};};
E.ionic={
 dissociation:{'HCl':['H+','Cl-'],'NaOH':['Na+','OH-'],'Ca(OH)2':['Ca2+','2OH-'],'H2SO4':['2H+','SO4^2-']},
 net:function(spec){
  if(!spec||!Array.isArray(spec.reactants)||!Array.isArray(spec.products))return {ok:false,status:'INVALID_INPUT',source:src};
  const key=x=>`${x.formula}|${x.charge??''}`;
  const r=new Map(),p=new Map();
  for(const x of spec.reactants){const k=key(x);r.set(k,(r.get(k)||0)+(num(x.coef)||1));}
  for(const x of spec.products){const k=key(x);p.set(k,(p.get(k)||0)+(num(x.coef)||1));}
  const all=new Set([...r.keys(),...p.keys()]), net=[];
  for(const k of all){const rr=r.get(k)||0,pp=p.get(k)||0;if(rr!==pp)net.push({side:rr>pp?'reactants':'products',coef:Math.abs(rr-pp),token:k});}
  return {ok:true,status:'COMPUTED',net,source:src,note:'Reducer does not invent spectator ions; inputs must carry charge.'};
 }
};
E.chargeBalance=function(spec){
 const side=s=>(s||[]).reduce((a,x)=>a+(num(x.coef)||1)*(num(x.charge)||0),0);
 const r=side(spec?.reactants),p=side(spec?.products);return {ok:true,reactantCharge:r,productCharge:p,balanced:Math.abs(r-p)<1e-12,source:src};
};
E.structureBridge={
 fromEquation:function(eq){
  const out={components:[],source:src};
  for(const side of ['reactants','products'])for(const x of (eq?.[side]||[]))out.components.push({side,formula:x.formula,coef:num(x.coef)||1,structureRef:x.structureRef||null});
  return out;
 },
 validate:function(graph){
  const atoms=Array.isArray(graph?.atoms)?graph.atoms:[], bonds=Array.isArray(graph?.bonds)?graph.bonds:[];
  const ids=new Set(atoms.map(a=>a.id));
  const bad=bonds.filter(b=>!ids.has(b.a)||!ids.has(b.b)||!(num(b.order)>0));
  return {ok:bad.length===0,status:bad.length?'INVALID_GRAPH':'GRAPH_OK',atomCount:atoms.length,bondCount:bonds.length,invalidBonds:bad.length,source:src};
 }
};
E.taskFactory=function(type,input={}){
 const common={id:`V322_${type}_${Date.now()}`,type,source:src,level:input.level||'SP7-8'};
 if(type==='LIMITING')return {...common,prompt:'Wyznacz reagent ograniczający i ilość produktu.',inputs:['balancedEquation','reactantAmounts'],engine:'limitingReagent'};
 if(type==='YIELD')return {...common,prompt:'Oblicz wydajność reakcji.',inputs:['actual','theoretical'],engine:'percentYield'};
 if(type==='IONIC')return {...common,prompt:'Zapisz równanie jonowe skrócone i sprawdź ładunek.',inputs:['reactants','products'],engine:'ionic.net'};
 if(type==='STRUCTURE')return {...common,prompt:'Sprawdź zgodność grafu cząsteczki z kontraktem strukturalnym.',inputs:['graph'],engine:'structureBridge.validate'};
 return {...common,status:'UNKNOWN_TASK'};
};
E.selfTest=function(){
 const r=E.limitingReagent({reactants:[{formula:'H2',coef:2},{formula:'O2',coef:1}],products:[{formula:'H2O',coef:2}]},{H2:3,O2:2});
 const y=E.percentYield(8,10), c=E.chargeBalance({reactants:[{formula:'H+',coef:1,charge:1},{formula:'Cl-',coef:1,charge:-1}],products:[{formula:'HCl',coef:1,charge:0}]});
 return {limiting:r.limitingReagents.join(','),yield:y.percent,chargeBalanced:c.balanced,pass:r.ok&&y.ok&&c.balanced};
};
CHE.EDUCATION_MAX_BATCH_V322={version:'3.22',source:src,referenceReady:false,modules:['LIMITING_REAGENT','THEORETICAL_PRODUCT','PERCENT_YIELD','IONIC_EQUATIONS','CHARGE_BALANCE','STRUCTURE_BRIDGE','TASK_FACTORY'],selfTest:E.selfTest()};
})();

} catch (err) {
  try { console.warn('[CHE module 207]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.23 — MAX REPAIR: coefficient normalization + deterministic task IDs + regression gate */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{};
const E=CHE.EDUCATION_ENGINE_V322||{};
const src='CHE_EDUCATION_ENGINE_V323';
function num(x){const n=Number(x);return Number.isFinite(n)?n:null}
function normalizedReactants(eq){
  const raw=Array.isArray(eq?.reactants)?eq.reactants:[];
  const coeffs=Array.isArray(eq?.coefficients?.reactants)?eq.coefficients.reactants:null;
  return raw.map((x,i)=>({formula:x.formula,coef:num(x.coef)??num(coeffs?.[i])??0}));
}
E.limitingReagent=function(eq,amounts){
 const rs=normalizedReactants(eq).filter(x=>x.coef>0);
 const ratios=rs.map(x=>({formula:x.formula,available:num(amounts?.[x.formula]),required:x.coef,extent:(num(amounts?.[x.formula])||0)/x.coef}));
 if(!ratios.length||ratios.some(x=>x.available===null||x.available<0)) return {ok:false,status:'INVALID_INPUT',source:src};
 const m=Math.min(...ratios.map(x=>x.extent));
 const lim=ratios.filter(x=>Math.abs(x.extent-m)<=1e-12).map(x=>x.formula);
 return {ok:true,status:'COMPUTED',extent:m,limitingReagents:lim,ratios,source:src};
};
E.theoreticalProduct=function(eq,amounts,product){
 const lim=E.limitingReagent(eq,amounts); if(!lim.ok)return lim;
 const products=Array.isArray(eq?.products)?eq.products:[];
 const idx=products.findIndex(x=>x.formula===product);
 const coef=num(products[idx]?.coef)??num(eq?.coefficients?.products?.[idx]);
 if(idx<0||!(coef>0))return {ok:false,status:'PRODUCT_NOT_FOUND',source:src};
 return {...lim,product,productCoefficient:coef,productAmount:lim.extent*coef};
};
E.taskFactory=function(type,input={}){
 const signature=JSON.stringify({type,input,version:'3.23'});
 let h=2166136261; for(let i=0;i<signature.length;i++){h^=signature.charCodeAt(i);h=Math.imul(h,16777619)}
 const id=`V323_${type}_${(h>>>0).toString(16).padStart(8,'0')}`;
 const common={id,type,source:src,level:input.level||'SP7-8'};
 if(type==='LIMITING')return {...common,prompt:'Wyznacz reagent ograniczający i ilość produktu.',inputs:['balancedEquation','reactantAmounts'],engine:'limitingReagent'};
 if(type==='YIELD')return {...common,prompt:'Oblicz wydajność reakcji.',inputs:['actual','theoretical'],engine:'percentYield'};
 if(type==='IONIC')return {...common,prompt:'Zapisz równanie jonowe skrócone i sprawdź ładunek.',inputs:['reactants','products'],engine:'ionic.net'};
 if(type==='STRUCTURE')return {...common,prompt:'Sprawdź zgodność grafu cząsteczki z kontraktem strukturalnym.',inputs:['graph'],engine:'structureBridge.validate'};
 return {...common,status:'UNKNOWN_TASK'};
};
E.regressionV323=function(){
 const bal=CHE.EDUCATION_ENGINE?.balanceEquation?.('H2 + O2 -> H2O');
 const lr=E.limitingReagent(bal,{H2:3,O2:2});
 const prod=E.theoreticalProduct(bal,{H2:3,O2:2},'H2O');
 const task1=E.taskFactory('LIMITING',{level:'LO'}), task2=E.taskFactory('LIMITING',{level:'LO'});
 const charge=E.chargeBalance({reactants:[{formula:'H+',coef:1,charge:1},{formula:'Cl-',coef:1,charge:-1}],products:[{formula:'HCl',coef:1,charge:0}]});
 return {version:'3.23',balance:bal?.equation||null,limiting:lr.limitingReagents,extent:lr.extent,productAmount:prod.productAmount,deterministicTaskId:task1.id===task2.id,chargeBalanced:charge.balanced,pass:!!bal?.balanced&&lr.ok&&prod.ok&&task1.id===task2.id&&charge.balanced};
};
CHE.EDUCATION.MAX_REPAIR_V323={version:'3.23',source:src,repairs:['limitingReagent accepts coefficients returned by balanceEquation','theoreticalProduct accepts coefficient maps','taskFactory IDs are deterministic','regression gate added'],referenceReady:false,noSecondDatabase:true};
CHE.EDUCATION.gapAuditV323=function(){const r=E.regressionV323();return {version:'3.23',regression:r,referenceReady:false,next:['full L001-L013 canonical reconciliation','redox electron-balance','UI binding audit','browser runtime test']};};
})();

} catch (err) {
  try { console.warn('[CHE module 208]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.24 — MAX REPAIR: corrected stoichiometric nullspace solver */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}; const E=CHE.EDUCATION_ENGINE||{}; const X=CHE.EDUCATION_ENGINE_V322||{}; const src='CHE_EDUCATION_ENGINE_V324';
function gcd(a,b){a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=a%b;a=b;b=t}return a||1}
function lcm(a,b){return Math.abs(a/gcd(a,b)*b)}
function rat(x){let best=[Math.round(x),1],err=Math.abs(x-best[0]);for(let d=1;d<=2000;d++){let n=Math.round(x*d),e=Math.abs(x-n/d);if(e<err){best=[n,d];err=e;if(e<1e-11)break}}return best}
function parse(f){return E.parseFormula(f)}
function solve(A){
 const m=A.length,n=A[0].length, B=A.map(r=>r.slice(0,n-1).concat(-r[n-1])); let row=0,piv=[];
 for(let col=0;col<n-1 && row<m;col++){
  let k=row; for(let r=row+1;r<m;r++) if(Math.abs(B[r][col])>Math.abs(B[k][col])) k=r;
  if(Math.abs(B[k][col])<1e-12) continue;
  [B[row],B[k]]=[B[k],B[row]]; const q=B[row][col]; for(let j=col;j<n;j++) B[row][j]/=q;
  for(let r=0;r<m;r++){if(r===row)continue;const z=B[r][col];if(Math.abs(z)<1e-12)continue;for(let j=col;j<n;j++)B[r][j]-=z*B[row][j]}
  piv.push(col); row++;
 }
 const rank=piv.length; if(rank<n-1) throw Error('Underdetermined equation: multiple free coefficients');
 const x=Array(n).fill(0); x[n-1]=1;
 for(let r=rank-1;r>=0;r--){const c=piv[r];let v=B[r][n-1];for(let j=c+1;j<n-1;j++)v-=B[r][j]*x[j];x[c]=v/B[r][c]}
 return x;
}
E.balanceEquation=function(eq){
 const raw=String(eq||'').replace(/⇌|⇄|⟶|→|=/,'->'), sides=raw.split('->'); if(sides.length!==2)throw Error('Equation needs one arrow');
 const terms=side=>side.split('+').map(x=>{x=x.trim();const m=x.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);return {coef:m?Number(m[1]):1,formula:(m?m[2]:x).replace(/\([aqslg]\)$/,'').trim()}}).filter(x=>x.formula);
 const L=terms(sides[0]),R=terms(sides[1]),all=L.concat(R),els=[];all.forEach(t=>Object.keys(parse(t.formula)).forEach(e=>{if(!els.includes(e))els.push(e)}));
 if(all.length<2)throw Error('Need at least two species');
 const A=els.map(e=>all.map((t,i)=>{const n=parse(t.formula)[e]||0;return i<L.length?n:-n}));
 const x=solve(A); let den=1; x.forEach(v=>den=lcm(den,rat(v)[1])); let ints=x.map(v=>Math.round(v*den)); const g=ints.reduce((a,b)=>gcd(a,b),0); ints=ints.map(v=>v/g);
 if(ints.some(v=>v<=0)) throw Error('No positive stoichiometric solution');
 const atoms={}; els.forEach(e=>atoms[e]=0); all.forEach((t,i)=>Object.keys(parse(t.formula)).forEach(e=>atoms[e]=(atoms[e]||0)+(i<L.length?1:-1)*ints[i]*parse(t.formula)[e]));
 const out={input:eq,reactants:L,products:R,coefficients:{reactants:ints.slice(0,L.length),products:ints.slice(L.length)},equation:L.map((t,j)=>ints[j]+' '+t.formula).join(' + ')+' -> '+R.map((t,j)=>ints[L.length+j]+' '+t.formula).join(' + '),balanced:Object.values(atoms).every(v=>Math.abs(v)<1e-9),atomBalance:atoms,elements:els,source:src};
 return out;
};
X.regressionV324=function(){
 const b=E.balanceEquation('H2 + O2 -> H2O'); const lr=X.limitingReagent(b,{H2:3,O2:2}); const pr=X.theoreticalProduct(b,{H2:3,O2:2},'H2O');
 const b2=E.balanceEquation('Fe + O2 -> Fe2O3'); const b3=E.balanceEquation('HCl + NaOH -> NaCl + H2O');
 const pass=b.equation==='2 H2 + 1 O2 -> 2 H2O'&&b.balanced&&lr.limitingReagents[0]==='O2'&&Math.abs(pr.productAmount-4)<1e-12&&b2.balanced&&b3.balanced;
 return {version:'3.24',equations:[b.equation,b2.equation,b3.equation],limiting:lr.limitingReagents,productAmount:pr.productAmount,pass};
};
CHE.EDUCATION.MAX_REPAIR_V324={version:'3.24',source:src,repairs:['rref no longer pivots on RHS','positive nullspace coefficients enforced','v322 limiting-reagent bridge reuses corrected coefficients'],referenceReady:false,noSecondDatabase:true};
CHE.EDUCATION.gapAuditV324=function(){return {version:'3.24',regression:X.regressionV324(),referenceReady:false,next:['L001-L013 canonical reconciliation','redox electron balance','UI binding audit','browser smoke test']}};
})();

} catch (err) {
  try { console.warn('[CHE module 209]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.25 — MAX REPAIR: canonical coefficient propagation */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, E=CHE.EDUCATION_ENGINE||{}, X=CHE.EDUCATION_ENGINE_V322||{}, src='CHE_EDUCATION_ENGINE_V325';
const previous=E.balanceEquation;
E.balanceEquation=function(eq){
 const b=previous(eq);
 b.reactants=b.reactants.map((x,i)=>({...x,coef:b.coefficients.reactants[i]}));
 b.products=b.products.map((x,i)=>({...x,coef:b.coefficients.products[i]}));
 b.source=src;
 return b;
};
X.regressionV325=function(){
 const b=E.balanceEquation('H2 + O2 -> H2O');
 const lr=X.limitingReagent(b,{H2:3,O2:2});
 const pr=X.theoreticalProduct(b,{H2:3,O2:2},'H2O');
 const y=X.percentYield(2.7,3);
 const b2=E.balanceEquation('Fe + O2 -> Fe2O3');
 const pass=b.balanced&&b.reactants[0].coef===2&&b.products[0].coef===2&&lr.limitingReagents.length===1&&lr.limitingReagents[0]==='H2'&&Math.abs(pr.productAmount-3)<1e-12&&Math.abs(y.percent-90)<1e-12&&b2.balanced;
 return {version:'3.25',equation:b.equation,coefficients:b.coefficients,limiting:lr.limitingReagents,extent:lr.extent,productAmount:pr.productAmount,yield:y.percent,pass};
};
CHE.EDUCATION.MAX_REPAIR_V325={version:'3.25',source:src,repairs:['balanced coefficients propagated into reaction terms','limiting reagent now consumes canonical coefficient fields','regression extended to yield'],referenceReady:false,noSecondDatabase:true};
CHE.EDUCATION.gapAuditV325=function(){return {version:'3.25',regression:X.regressionV325(),referenceReady:false,next:['L001-L013 canonical reconciliation','redox electron balance','UI binding audit','browser smoke test']}};
})();

} catch (err) {
  try { console.warn('[CHE module 210]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.26 — MAX VERIFY/REPAIR: redox + lesson reconciliation + UI smoke contract */
(()=>{
'use strict';
const C=window.CHE=window.CHE||{}, E=C.EDUCATION_ENGINE=C.EDUCATION_ENGINE||{}, D=C.DATA=C.DATA||{};
const MASS=D.ATOMIC_MASS||{};
const common={H:1,O:-2,F:-1,Na:1,Mg:2,Al:3,K:1,Ca:2,Zn:2,Ag:1,Cl:-1,Br:-1,I:-1};
function oxStates(formula){
 const atoms=E.parseFormula(formula), keys=Object.keys(atoms), out={};
 keys.forEach(k=>{if(common[k]!==undefined)out[k]=common[k];});
 const unknown=keys.filter(k=>out[k]===undefined);
 if(unknown.length===1){let sum=0;keys.forEach(k=>{if(k!==unknown[0]&&out[k]!==undefined)sum+=atoms[k]*out[k];});out[unknown[0]]=-sum/atoms[unknown[0]];}
 return {formula,composition:atoms,oxidationStates:out,unresolved:keys.filter(k=>out[k]===undefined)};
}
function redoxDelta(formula){const x=oxStates(formula), d=[];Object.keys(x.oxidationStates).forEach(el=>{const n=x.composition[el],v=x.oxidationStates[el];if(Number.isFinite(v))d.push({element:el,atoms:n,oxidationState:v});});return d;}
function analyzeRedox(eq){
 const b=E.balanceEquation(eq), left=b.reactants.map((t,i)=>({side:'reactant',formula:t.formula,coef:b.coefficients.reactants[i],ox:redoxDelta(t.formula)})), right=b.products.map((t,i)=>({side:'product',formula:t.formula,coef:b.coefficients.products[i],ox:redoxDelta(t.formula)}));
 const changes=[];
 left.forEach(l=>right.forEach(r=>{const le=l.ox.filter(x=>r.ox.some(y=>y.element===x.element));le.forEach(x=>{const y=r.ox.find(z=>z.element===x.element);if(x.oxidationState!==y.oxidationState)changes.push({element:x.element,from:x.oxidationState,to:y.oxidationState,delta:y.oxidationState-x.oxidationState,reactant:l.formula,product:r.formula});});}));
 return {equation:b.equation,balanced:b.balanced,changes,oxidation: {reactants:left,products:right},redox:changes.length>0};
}
function electronBalance(eq){const a=analyzeRedox(eq), transfers=a.changes.map(x=>({element:x.element,electronsPerAtom:Math.abs(x.delta),direction:x.delta<0?'reduction':'oxidation'}));let oxidation=0,reduction=0;transfers.forEach(x=>{if(x.direction==='oxidation')oxidation+=x.electronsPerAtom;else reduction+=x.electronsPerAtom;});return {...a,electronTransfer:{oxidation,reduction,balancedElectrons:Math.abs(oxidation-reduction)<1e-9},transfers};}
function lessonAudit(){const R=C.REACTION_LESSON_RECONCILIATION?.audit?.();if(!R)return {available:false};return {available:true,candidateRecords:R.candidateRecords||0,canonicalRecords:R.canonicalRecords||0,exact:R.exact||0,needsReview:R.needsReview||0,unmatched:R.unmatched||0,policy:R.policy};}
function uiAudit(){const ids=['run-audit','audit-refresh','th-run','th-out','ne-run','ne-out','ry-run','ry-out','sp-run','sp-out'];return {checked:ids.length,present:ids.filter(id=>!!document.getElementById(id)),missing:ids.filter(id=>!document.getElementById(id)),body:!!document.body,html:!!document.documentElement};}
function selfTest(){
 const a=electronBalance('Fe + O2 -> Fe2O3'), b=electronBalance('Zn + CuSO4 -> ZnSO4 + Cu');
 return {version:'3.26',ironOxidation:b?null:a, zincCopper:b, lesson:lessonAudit(), ui:uiAudit(), pass:a.balanced&&b.balanced&&a.electronTransfer.balancedElectrons&&b.electronTransfer.balancedElectrons};
}
C.EDUCATION.REDOX_ENGINE_V326={version:'3.26',parseOxidationStates:oxStates,analyze:analyzeRedox,electronBalance,referenceReady:false,sourceOfTruth:'CHE.DATA + CHE.STRUCTURE'};
C.EDUCATION.LESSON_CANONICAL_AUDIT_V326=lessonAudit();
C.EDUCATION.UI_BINDING_AUDIT_V326=uiAudit();
C.EDUCATION.MAX_VERIFY_V326={version:'3.26',modules:['REDOX_ENGINE','LESSON_CANONICAL_AUDIT','UI_BINDING_AUDIT'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
C.EDUCATION.gapAuditV326=()=>({version:'3.26',selfTest:selfTest(),referenceReady:false,next:['promote only verified L001-L013 matches','conditional redox source records','fix any missing UI bindings','browser smoke regression']});
})();

} catch (err) {
  try { console.warn('[CHE module 211]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.27 — MAX VERIFY/REPAIR: weighted redox + runtime smoke contract */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}, C=CHE.EDUCATION=CHE.EDUCATION||{}, E=CHE.EDUCATION_ENGINE||{};
const SRC='CHE_EDUCATION_ENGINE_V327';
function weightedElectronBalance(eq){
 const a=C.REDOX_ENGINE_V326?.analyze?C.REDOX_ENGINE_V326.analyze(eq):null;
 if(!a) throw Error('REDOX_ENGINE unavailable');
 const transfers=[];
 let oxidation=0,reduction=0;
 const sides=[...(a.oxidation?.reactants||[]).map(x=>({...x,side:'reactant'})),...(a.oxidation?.products||[]).map(x=>({...x,side:'product'}))];
 // Match element changes by formula pair, then weight by atoms and balanced coefficients.
 (a.changes||[]).forEach(ch=>{
   const l=sides.find(x=>x.formula===ch.reactant&&x.side==='reactant');
   const r=sides.find(x=>x.formula===ch.product&&x.side==='product');
   const atoms=Math.min(l?.ox?.find(x=>x.element===ch.element)?.atoms||0,r?.ox?.find(x=>x.element===ch.element)?.atoms||0);
   const coefL=l?.coef||1, coefR=r?.coef||1;
   const weightedAtoms=Math.max(atoms*coefL,atoms*coefR);
   const e=Math.abs(ch.delta)*weightedAtoms;
   const direction=ch.delta<0?'reduction':'oxidation';
   transfers.push({element:ch.element,from:ch.from,to:ch.to,atoms:weightedAtoms,electrons:e,direction,reactant:ch.reactant,product:ch.product});
   if(direction==='oxidation') oxidation+=e; else reduction+=e;
 });
 return {...a,electronTransfer:{oxidation,reduction,balancedElectrons:Math.abs(oxidation-reduction)<1e-9},transfers,source:SRC};
}
function runtimeSmoke(){
 const tests={
  water:E.balanceEquation('H2 + O2 -> H2O'),
  iron:weightedElectronBalance('Fe + O2 -> Fe2O3'),
  zinc:weightedElectronBalance('Zn + CuSO4 -> ZnSO4 + Cu'),
  neutral:E.balanceEquation('HCl + NaOH -> NaCl + H2O')
 };
 const ui=C.UI_BINDING_AUDIT_V326||{};
 return {version:'3.27',tests,ui,pass:tests.water?.balanced&&tests.iron?.balanced&&tests.iron?.electronTransfer?.balancedElectrons&&tests.zinc?.electronTransfer?.balancedElectrons&&tests.neutral?.balanced};
}
C.REDOX_ENGINE_V327={version:'3.27',electronBalance:weightedElectronBalance,sourceOfTruth:'CHE.DATA + CHE.STRUCTURE',referenceReady:false};
C.RUNTIME_SMOKE_V327=runtimeSmoke();
C.MAX_VERIFY_V327={version:'3.27',modules:['WEIGHTED_REDOX','STOICHIOMETRY_REGRESSION','UI_BINDING_CONTRACT','RUNTIME_SMOKE'],oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
C.gapAuditV327=()=>({version:'3.27',runtime:C.RUNTIME_SMOKE_V327,referenceReady:false,next:['verify/promotion of source-backed L001-L013','redox source records','browser smoke regression']});
})();

} catch (err) {
  try { console.warn('[CHE module 212]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.28 — MAX: robust redox accounting + quantitative solution/stoichiometry APIs + task validation */
