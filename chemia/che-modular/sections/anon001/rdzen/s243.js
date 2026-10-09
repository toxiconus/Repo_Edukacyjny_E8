

try {

window.CHE=window.CHE||{};
CHE.CURRICULUM=CHE.CURRICULUM||{};
CHE.CURRICULUM.LO_CHEMISTRY_ONLY_V359={
 version:'3.59', source:'ZPE_CHEMISTRY_LO_TECHNIKUM_2025_2026', status:'LOCKED_AS_PLANNING_FRAME',
 scope:{
  school:'LO/technikum',
  basic:true, extended:true,
  excluded:['biology_as_separate_subject'],
  integrated_chemistry:['water_ions','carbohydrates','lipids','amino_acids','peptides_proteins','nucleotides_DNA_RNA','biochemical_reactions']
 },
 domains:[
  '01_atoms_isotopes_nuclear','02_stoichiometry_mole','03_periodic_trends','04_chemical_bonding_structure',
  '05_inorganic_systematics','06_solutions_acid_base_pH','07_ionic_equations_equilibria',
  '08_kinetics_catalysis','09_thermochemistry','10_redox_electrochemistry',
  '11_metals_corrosion','12_nonmetals_gases','13_organic_structure_hydrocarbons',
  '14_organic_functional_groups','15_carboxylic_acids_esters','16_amines_amino_acids',
  '17_proteins','18_carbohydrates','19_environment_green_chemistry','20_analytical_experimental_method',
  '21_chemistry_of_DNA_RNA'
 ],
 statuses:['OPEN','PARTIAL','IMPLEMENTED','VERIFIED'],
 rule:'Do not mark VERIFIED without executable test or authoritative data provenance.',
 anti_duplication:'Existing common engine/data remain source of truth; curriculum entries never create parallel chemistry APIs.'
};
CHE.CURRICULUM.LO_CHEMISTRY_ONLY_V359.test=function(){
 const x=CHE.CURRICULUM.LO_CHEMISTRY_ONLY_V359;
 return x.basic&&x.extended&&x.domains.length===21&&x.status==='LOCKED_AS_PLANNING_FRAME';
};
CHE.CURRICULUM.MAX_ROADMAP_V359={
 version:'3.59',
 batches:[
  {id:'MAX-01',versions:'3.60-3.63',name:'LO foundation',items:['atoms/isotopes','mole/stoichiometry','periodic trends','bonding'],gate:'formula+mass+charge+electron regressions'},
  {id:'MAX-02',versions:'3.64-3.67',name:'solutions and equilibrium',items:['molarity','dilution','pH','Ka/Kb','buffer','solubility','Ksp','ionic equations'],gate:'quantitative+ionic regression'},
  {id:'MAX-03',versions:'3.68-3.71',name:'kinetics thermochemistry',items:['rate laws','collision model','catalysis','enthalpy','Hess','calorimetry','equilibrium temperature/concentration'],gate:'unit-aware calculation regression'},
  {id:'MAX-04',versions:'3.72-3.75',name:'redox electrochemistry',items:['oxidation states','half-reactions','acid/base balancing','cells','Nernst','corrosion','electrolysis'],gate:'electron/charge/potential regression'},
  {id:'MAX-05',versions:'3.76-3.79',name:'inorganic extended',items:['groups','oxides','hydrides','halogens','metals','amphoterism','industrial/environmental chemistry'],gate:'canonical reaction audit'},
  {id:'MAX-06',versions:'3.80-3.84',name:'organic core',items:['structure','isomerism','hydrocarbons','aromatic','halogen derivatives','alcohols','phenols','aldehydes','ketones','acids','esters'],gate:'structure/reaction mapping audit'},
  {id:'MAX-07',versions:'3.85-3.88',name:'biochemistry as chemistry',items:['amines','amino acids','peptides','proteins','carbohydrates','lipids','nucleotides','DNA/RNA chemistry'],gate:'functional-group + reaction audit'},
  {id:'MAX-08',versions:'3.89-3.92',name:'environment and green chemistry',items:['air/water/soil pollutants','sorption','sustainability','industrial chemistry','green chemistry'],gate:'source/provenance audit'},
  {id:'MAX-09',versions:'3.93-3.96',name:'experimental methodology',items:['33+ core experiments','hypothesis','variables','observation','data','uncertainty','conclusion','BHP'],gate:'experiment template regression'},
  {id:'MAX-10',versions:'3.97-4.00',name:'final LO chemistry closure',items:['basic+extended coverage','cross-module links','UI/DOM','runtime','full regression'],gate:'ALL_CHEMISTRY_LO_COVERAGE'},
  {id:'MAX-11',versions:'4.01-4.05',name:'hardening',items:['data provenance','duplicate API scan','legacy drift scan','browser runtime','performance'],gate:'RELEASE_CANDIDATE'}
 ],
 completion_rule:'LO_CHEMISTRY_DONE only when every required item is IMPLEMENTED or VERIFIED and runtime/regression gates pass; planning registration alone is not completion.'
};
CHE.CURRICULUM.MAX_ROADMAP_V359.test=function(){return this.batches.length===11&&this.completion_rule.includes('not completion');};
CHE.P0_REGRESSION_V359=CHE.P0_REGRESSION_V359||{};
CHE.P0_REGRESSION_V359.curriculum={chemistryOnly:true,loBasic:true,loExtended:true,biologyStandalone:false,integratedBiochemistry:true};

} catch (err) {
  try { console.warn('[CHE module 249]', err && err.message ? err.message : err); } catch(_){}
}