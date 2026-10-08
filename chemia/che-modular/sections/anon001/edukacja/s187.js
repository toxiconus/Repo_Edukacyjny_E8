

try {

(function(){
  const E = window.CHE = window.CHE || {};
  E.EDUCATION_PRIORITY_V303 = {
    version:'3.03', status:'ACTIVE', policy:'CURRICULUM_FIRST',
    sourceBasis:[
      {id:'PL_SP_CHEM_2025_26', title:'Chemia — szkoła podstawowa IV–VIII', url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia'},
      {id:'PL_LO_CHEM_2025_26', title:'Chemia — liceum ogólnokształcące i technikum', url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia'},
      {id:'PL_LO_BIO_2025_26', title:'Biologia — liceum ogólnokształcące i technikum', url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/biologia'}
    ],
    tiers:[
      {id:'SP78_CORE', priority:100, label:'SP 7–8 — rdzeń', dataDomains:[
        'elements_symbols_atomic_number_mass','common_substances_properties','mixtures_and_separation',
        'states_and_physical_properties','atomic_structure_electrons','periodic_table_groups_periods',
        'chemical_formulae_and_nomenclature','valency_and_ions','molar_mass_basic_stoichiometry',
        'chemical_reaction_equations_balancing','acids_bases_salts','pH_and_indicators',
        'solubility','metals_nonmetals','basic_redox','laboratory_safety_GHS'
      ], elementSymbols:['H','C','N','O','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','I','Ba','Pb']},
      {id:'LO_BIO_CHEM_CORE', priority:90, label:'LO biol-chem — wspólny rdzeń', dataDomains:[
        'mole_avogadro_molar_mass','stoichiometry_gas_volume','solution_concentration',
        'acid_base_equilibria','pKa_Ka_Kw','solubility_equilibria_Ksp','redox_electrochemistry',
        'thermochemistry','reaction_kinetics','chemical_bonding_geometry',
        'organic_structure_isomerism','functional_groups','biomolecule_chemistry',
        'spectroscopy_basics','nuclear_isotopes','quantitative_lab_methods','BHP_GHS'
      ], priorityElements:['H','C','N','O','P','S','Na','K','Mg','Ca','Cl','Fe','Cu','Zn','I'],
       bioMolecules:['H2O','CO2','O2','NH3','glucose','fructose','sucrose','starch','cellulose','amino_acids','fatty_acids','ATP','DNA_bases','phosphate']},
      {id:'LO_CHEM_EXTENDED', priority:80, label:'LO chem — rozszerzenie', dataDomains:[
        'equilibrium_activity_models','Henry_constants','electrode_potentials','temperature_dependence',
        'organic_reaction_mechanisms','stereochemistry','spectral_data','advanced_thermochemistry',
        'coordination_complexes','nuclear_chemistry'
      ]}
    ],
    routing:{
      scientificVerification:'priority first by tier, then by source quality, then by completeness',
      appendOnly:true, noOverwrite:true, ledger:'CHE.SCIENCE_VERIFICATION_LEDGER_V289',
      unresolvedPolicy:'VERIFY_REQUIRED',
      noFakeValues:true
    },
    nextBatch:['SP78 substances/properties','SP78 acids-bases-pH-indicators','SP78 ions/valency/formulae','SP78 reaction catalog','LO mol/stoichiometry/concentration','LO bio-organic molecules','LO redox/electrochemistry'],
    coverageRule:'A scientific record gets an educationPriority only when its identity and semantics are already valid; priority never upgrades scientific readiness.'
  };
  E.EDUCATION_PRIORITY_V303.audit=function(){
    const t=this.tiers||[];
    return {ok:t.length===3, tiers:t.length, core:t.map(x=>({id:x.id,priority:x.priority,domains:(x.dataDomains||[]).length}))};
  };
})();

} catch (err) {
  try { console.warn('[CHE module 187]', err && err.message ? err.message : err); } catch(_){}
}