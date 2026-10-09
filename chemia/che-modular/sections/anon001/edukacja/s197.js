

try {

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