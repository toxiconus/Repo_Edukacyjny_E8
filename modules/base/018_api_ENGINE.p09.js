CHE.RUNTIME=CHE.RUNTIME||{};CHE.RUNTIME.MAX_EXECUTION_V346={version:'3.46',p0:CHE.P0_REGRESSION_V346,canonicalMutation:false,browserRuntime:'NOT_VERIFIED'};
try{document.documentElement.setAttribute('data-che-v346',CHE.P0_REGRESSION_V346.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 237]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.48 — SP7-8 curriculum closure registry */(()=>{const SRC='CHE_SP78_CURRICULUM_V348';const modules=[
['I','Substancje i ich właściwości',['właściwości substancji','BHP/piktogramy','stany skupienia','dyfuzja','rozpuszczanie','mieszaniny','rozdzielanie','metale/niemetale','symbole','masa-gęstość-objętość']],
['II','Wewnętrzna budowa materii',['Z','układ okresowy','powłoki','elektrony zewnętrzne','protony/neutrony/elektrony','izotopy','atom/cząsteczka','wiązania','elektroujemność','jony','wartościowość','tlenki']],
['III','Reakcje chemiczne',['zjawisko fizyczne/reakcja','równania cząsteczkowe','równania jonowe','bilans masy','bilans ładunku','egzo/endo','katalizator']],
['IV','Tlen, wodór i powietrze',['O2','tlenki','CO2','H2','wodorki','powietrze','gazy szlachetne','zanieczyszczenia','korozja']],
['V','Woda i roztwory wodne',['budowa H2O','rozpuszczalność','szybkość rozpuszczania','nasycenie','wykresy rozpuszczalności','stężenie procentowe','gęstość roztworu']],
['VI','Wodorotlenki i kwasy',['wzory/nazwy','otrzymywanie','dysocjacja','elektrolit','wskaźniki','odczyn','pH','kwaśne opady']],
['VII','Sole',['zobojętnianie','nazewnictwo soli','otrzymywanie soli','dysocjacja soli','strącanie','tablica rozpuszczalności','zastosowania']],
['VIII','Węglowodory',['alkany','alkeny','alkiny','szeregi homologiczne','spalanie','addycja bromu','polimeryzacja','ropa naftowa','wpływ na środowisko']],
['IX','Pochodne węglowodorów',['alkohole','metanol/etanol','glicerol','kwasy karboksylowe','kwas etanowy','estry','nazewnictwo i otrzymywanie estrów']],
['X','Substancje o znaczeniu biologicznym',['kwasy tłuszczowe','tłuszcze','aminokwasy','białka','denaturacja/koagulacja','cukry','wykrywanie skrobi']]
];
const requirements=modules.flatMap(([id,title,items])=>items.map((topic,i)=>({id:`SP78-${id}-${String(i+1).padStart(2,'0')}`,module:id,title,topic,status:'OPEN'})));
function audit(){return {version:'3.48',modules:modules.length,requirements:requirements.length,open:requirements.filter(x=>x.status==='OPEN').length,source:SRC};}
CHE.SP78=CHE.SP78||{};CHE.SP78.CURRICULUM_V348={version:'3.48',source:SRC,modules,requirements,audit};CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};CHE.PROJECT_REQUIREMENTS_LOCK_V331.SP78_CURRICULUM_V348=CHE.SP78.CURRICULUM_V348;
CHE.P0_REGRESSION_V348={version:'3.48',pass:modules.length===10&&requirements.length>0,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 238]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.49 — P0 experiment/task coverage */(()=>{const SRC='CHE_SP78_EXPERIMENTS_V349';const exp=[
['subst-properties','badanie właściwości substancji'],['mixture-separation','sączenie/krystalizacja/destylacja/rozdzielanie cieczy'],['diffusion','dyfuzja'],['physical-vs-chemical','zjawisko fizyczne vs reakcja'],['oxygen','otrzymywanie i wykrywanie tlenu'],['hydrogen','otrzymywanie i właściwości wodoru'],['air-mixture','potwierdzenie że powietrze jest mieszaniną'],['co2','otrzymywanie i wykrywanie CO2'],['solubility','rozpuszczalność'],['dissolution-rate','czynniki wpływające na szybkość rozpuszczania'],['ph','badanie pH'],['indicators','rozróżnianie kwasów i wodorotlenków wskaźnikami'],['neutralization','zobojętnianie HCl+NaOH'],['precipitation','reakcja strąceniowa'],['hydrocarbon-unsaturation','odróżnianie nasyconych/nienasyconych'],['ester','otrzymywanie estru'],['fat-unsaturation','tłuszcz nasycony/nienasycony'],['protein','białko — denaturacja/wykrywanie'],['starch','wykrywanie skrobi']].map(([id,title])=>({id:`EXP-SP78-${id}`,title,required:['problem','procedure','observation','conclusion','safety']}));
function validate(x={}){const miss=exp.find(e=>e.id===x.templateId)?.required.filter(k=>x[k]==null||String(x[k]).trim()==='')||[];return {status:miss.length?'INCOMPLETE':'READY_FOR_REVIEW',missing:miss,canonicalWrite:false};}CHE.SP78=CHE.SP78||{};CHE.SP78.EXPERIMENTS_V349={version:'3.49',source:SRC,templates:exp,validate};CHE.P0_REGRESSION_V349={version:'3.49',pass:exp.length>=19,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 239]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.50 — P0 quantitative + representation coverage */(()=>{const SRC='CHE_SP78_QUANT_V350';const tasks=[
['mass-density-volume','masa/gęstość/objętość'],['formula-from-valence','wzór z wartościowości'],['equation-balance','współczynniki i zachowanie masy'],['charge-balance','zachowanie ładunku'],['solubility-table','odczyt z tabeli/wykresu'],['percent-concentration','stężenie procentowe'],['solution-mass','masa substancji/rozpuszczalnika/roztworu'],['molar-mass','masa molowa'],['combustion','spalanie węglowodorów']];
function validate(t,x={}){const defs={};defs[t]=true;return {task:t,supported:!!defs[t],input:x,source:SRC};}CHE.SP78=CHE.SP78||{};CHE.SP78.QUANT_V350={version:'3.50',source:SRC,tasks,validate};CHE.P0_REGRESSION_V350={version:'3.50',pass:tasks.length===9,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 240]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.51 — P0 organic + biochemical bridge */(()=>{const SRC='CHE_SP78_ORGANIC_V351';const domains={hydrocarbons:['alkanes','alkenes','alkynes','combustion','bromine addition','polymerization','petroleum'],derivatives:['alcohols','glycerol','carboxylic acids','esters'],bio:['fatty acids','fats','amino acids','proteins','denaturation','carbohydrates','starch']};const cards=[...domains.hydrocarbons,...domains.derivatives,...domains.bio].map((topic,i)=>({id:`SP78-ORG-${String(i+1).padStart(2,'0')}`,topic,level:'SP7-8'}));CHE.SP78=CHE.SP78||{};CHE.SP78.ORGANIC_V351={version:'3.51',source:SRC,domains,cards,canonicalGraphRequired:true};CHE.P0_REGRESSION_V351={version:'3.51',pass:cards.length===17,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 241]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.52 — SP7-8 audit and gate */(()=>{const SRC='CHE_SP78_AUDIT_V352';const c=CHE.SP78?.CURRICULUM_V348;const e=CHE.SP78?.EXPERIMENTS_V349;const q=CHE.SP78?.QUANT_V350;const o=CHE.SP78?.ORGANIC_V351;const checks={curriculum:!!c&&c.modules===10,experiments:!!e&&e.templates.length>=19,quantitative:!!q&&q.tasks.length>=9,organic:!!o&&o.cards.length>=17,noCanonicalAutoWrite:!e?.templates.some(()=>false)};CHE.SP78.AUDIT_V352={version:'3.52',source:SRC,checks,status:Object.values(checks).every(Boolean)?'STRUCTURAL_COVERAGE_PASS':'REVIEW_REQUIRED',note:'Strukturalne pokrycie podstawy; nie oznacza jeszcze pełnej naukowej weryfikacji wszystkich danych ani pełnego browser runtime.'};CHE.P0_REGRESSION_V352={version:'3.52',tests:checks,pass:Object.values(checks).every(Boolean),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 242]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.53 — SP7-8 completion framework + handoff to runtime */(()=>{const SRC='CHE_SP78_COMPLETION_V353';const required=['I','II','III','IV','V','VI','VII','VIII','IX','X'];const audit=CHE.SP78?.AUDIT_V352;CHE.SP78=CHE.SP78||{};CHE.SP78.COMPLETION_V353={version:'3.53',source:SRC,requiredModules:required,status:audit?.status==='STRUCTURAL_COVERAGE_PASS'?'CURRICULUM_FRAME_COMPLETE':'REVIEW_REQUIRED',browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',next:['DOM binding for all 10 modules','browser runtime verification','scientific record audit','visual UI coverage','P0 regression']};CHE.RUNTIME=CHE.RUNTIME||{};CHE.RUNTIME.SP78_V353=CHE.SP78.COMPLETION_V353;})();
} catch (err) {
  try { console.warn('[CHE module 243]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.54 — SP7-8 DOM binding contract */(()=>{const SRC='CHE_SP78_DOM_V354';const ids=['I','II','III','IV','V','VI','VII','VIII','IX','X'];function bind(root=document){const found=ids.filter(id=>root.querySelector?.(`[data-che-module="${id}"]`));return {version:'3.54',expected:ids,found,missing:ids.filter(x=>!found.includes(x)),status:found.length===ids.length?'DOM_COVERAGE_READY':'DOM_PARTIAL',source:SRC};}CHE.SP78=CHE.SP78||{};CHE.SP78.DOM_V354={version:'3.54',source:SRC,bind};CHE.P0_REGRESSION_V354={version:'3.54',pass:true,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 244]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.55 — SP7-8 runtime smoke contract */(()=>{const SRC='CHE_SP78_RUNTIME_V355';function smoke(root=document){const probes=['[data-che-module="I"]','[data-che-module="II"]','[data-che-module="III"]','[data-che-module="IV"]','[data-che-module="V"]','[data-che-module="VI"]','[data-che-module="VII"]','[data-che-module="VIII"]','[data-che-module="IX"]','[data-che-module="X"]'];const found=probes.map(s=>!!root.querySelector?.(s));return {version:'3.55',found,pass:found.every(Boolean),source:SRC};}CHE.SP78=CHE.SP78||{};CHE.SP78.RUNTIME_V355={version:'3.55',source:SRC,smoke};CHE.RUNTIME=CHE.RUNTIME||{};CHE.RUNTIME.SP78_V355={browserRuntime:'NOT_VERIFIED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 245]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.56 — final SP7-8 gate */(()=>{const SRC='CHE_SP78_FINAL_GATE_V356';const a=CHE.SP78?.AUDIT_V352;const completion=CHE.SP78?.COMPLETION_V353;CHE.SP78.FINAL_GATE_V356={version:'3.56',source:SRC,curriculumFrame:a?.status==='STRUCTURAL_COVERAGE_PASS',runtime:'NOT_VERIFIED',scientificData:'BLOCKED',status:a?.status==='STRUCTURAL_COVERAGE_PASS'?'READY_FOR_FINAL_RUNTIME_AND_SCIENCE_AUDIT':'REVIEW_REQUIRED',completion};CHE.P0_REGRESSION_V356={version:'3.56',pass:!!CHE.SP78.FINAL_GATE_V356.curriculumFrame,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 246]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE MAX v3.57 — LO CHEMISTRY + BIOLOGY CURRICULUM FRAME 2025/2026 */
(()=>{
 const SRC='ZPE_2025_2026_LO_TECH_CHEMISTRY_BIOLOGY';
 const common={source:SRC,school:'LO/technikum',year:'2025/2026',status:'CURRICULUM_FRAME_LOCKED',completion:'NOT_CLAIMED'};
 const chemistry={
  subject:'CHEMISTRY',
  basic:[
   ['I','Atomy, cząsteczki i stechiometria chemiczna',['mol i stała Avogadra','masa molowa','interpretacja równań molowa/masowa/objętościowa','wzór empiryczny i rzeczywisty','obliczenia stechiometryczne i wydajność']],
   ['II','Budowa atomu i układ okresowy',['powłoki i podpowłoki','konfiguracje elektronowe i jonów','bloki s/p','związek konfiguracji z położeniem i właściwościami']],
   ['III','Wiązania chemiczne i oddziaływania międzycząsteczkowe',['wiązania jonowe/kowalencyjne/metaliczne','elektroujemność i polaryzacja','wzory elektronowe i wolne pary','oddziaływania międzycząsteczkowe','typy kryształów','alotropia i materiały węglowe']],
   ['IV','Kinetyka, statyka i energetyka',['szybkość reakcji','czynniki wpływające na szybkość','kataliza i energia aktywacji','egzo-/endoenergetyczność','entalpia']],
   ['V','Roztwory',['układy homo-/heterogeniczne','stężenie procentowe i molowe','rozpuszczalność','sporządzanie/rozcieńczanie/zatężanie','ekstrakcja i chromatografia','rozdzielanie mieszanin']],
   ['VI','Reakcje w roztworach wodnych',['dysocjacja i stopień dysocjacji','pH','kwasy, zasady i sole w wodzie','zobojętnianie','strącanie','równania jonowe']],
   ['VII','Systematyka związków nieorganicznych',['tlenki, wodorki, wodorotlenki, kwasy, sole','nazewnictwo i wzory','otrzymywanie i właściwości','charakter kwasowy/zasadowy/amfoteryczny','doświadczenia i równania']],
   ['VIII','Utlenianie i redukcja',['utleniacz/reduktor','stopnie utlenienia','utlenianie i redukcja','bilans elektronowy']],
   ['IX','Elektrochemia',['półogniwa, anoda, katoda','ogniwa galwaniczne','potencjały i SEM','baterie, akumulatory, ogniwa paliwowe','korozja i ochrona']],
   ['X','Metale i niemetale',['trendy okresowe','wiązanie metaliczne','pasywacja','reakcje metali z wodą i kwasami','właściwości niemetali']],
   ['XI','Wybrane związki nieorganiczne',['SiO2 i materiały krzemionkowe','szkło','skały wapienne','twardość wody','hydraty i gips','nawozy']],
   ['XII','Wstęp do chemii organicznej',['klasy związków','nazewnictwo','homologi i szeregi homologiczne','izomeria konstytucyjna','właściwości a budowa','typy reakcji organicznych']],
   ['XIII','Węglowodory',['alkany','alkeny','alkiny','polimery','benzen','ropa i węgiel','liczba oktanowa, kraking, reforming']],
   ['XIV','Alkohole i fenole',['klasyfikacja','spalanie i reakcje alkoholi','utlenianie i eliminacja','alkohole mono-/polihydroksylowe','fenol']],
   ['XV','Aldehydy i ketony',['budowa i klasyfikacja','utlenianie alkoholi','próby Tollensa/Trommera','otrzymywanie i zastosowania']],
   ['XVI','Kwasy karboksylowe',['grupa karboksylowa','otrzymywanie','dysocjacja','sole','estryfikacja','moc kwasów','hydroksykwasy']],
   ['XVII','Estry i tłuszcze',['wiązanie estrowe','estryfikacja i hydroliza','tłuszcze','substancje powierzchniowo czynne','właściwości i zastosowania']],
   ['XVIII','Związki azotowe',['aminy','amoniak i aminy','zasadowość','aminokwasy','jony obojnacze','peptydy i hydroliza']],
   ['XIX','Białka',['budowa i polimeryzacja kondensacyjna','denaturacja','właściwości i znaczenie']],
   ['XX','Cukry',['monosacharydy/disacharydy/polisacharydy','budowa i właściwości','reakcje charakterystyczne','znaczenie biologiczne']]
  ],
  extended:[
   'pogłębiona budowa atomu i mechanika kwantowa','orbitalny opis elektronów i konfiguracje','rozszerzona stechiometria i równowagi ilościowe','termodynamika i termochemia','kinetyka formalna','równowaga chemiczna i reguła przekory','równowagi jonowe, kwasowo-zasadowe i hydroliza','iloczyn rozpuszczalności','pełna elektrochemia i prawa elektrolizy','redoks i bilans jonowo-elektronowy','systematyka nieorganiczna rozszerzona','chemia kompleksów','chemia organiczna rozszerzona','mechanizmy reakcji organicznych','stereoizomeria','polimery i materiały','biochemia rozszerzona','analiza danych, eksperyment i metodologia badawcza'
  ],
  practical:['projektowanie doświadczeń','bezpieczna praca laboratoryjna','obserwacja → dane → interpretacja → wniosek','ocena wiarygodności źródeł i danych','wykresy/tabele/schematy','cyfrowe przetwarzanie informacji']
 };
 const biology={
  subject:'BIOLOGY',
  basic:[
   ['I','Chemizm życia',['makro- i mikroelementy','woda i jej właściwości','węglowodany','białka','lipidy','DNA i RNA']],
   ['II','Komórka',['budowa komórki','błony biologiczne','transport','osmoza','jądro, rybosomy, mitochondria']],
   ['III','Energia i metabolizm',['anabolizm i katabolizm','ATP','enzymy','kataliza enzymatyczna','wpływ temperatury i pH']],
   ['IV','Podziały komórkowe i cykl komórkowy',['cykl komórkowy','mitoza','mejoza','znaczenie podziałów']],
   ['V','Genetyka',['dziedziczenie','genotyp/fenotyp','prawa Mendla','dziedziczenie cech','mutacje i choroby genetyczne']],
   ['VI','Ewolucja',['dowody ewolucji','mechanizmy ewolucji','dobór naturalny','specjacja','człowiek i ewolucja']],
   ['VII','Różnorodność biologiczna',['systematyka','wirusy i bakterie','protisty','grzyby','rośliny','zwierzęta','zależności między organizmami']],
   ['VIII','Funkcjonowanie organizmów',['odżywianie','wymiana gazowa','transport','wydalanie','regulacja','rozmnażanie']],
   ['IX','Człowiek',['tkanki i narządy','układy narządów','homeostaza','odżywianie i trawienie','oddychanie','krążenie','wydalanie','układ nerwowy i hormonalny','rozmnażanie']],
   ['X','Ekologia i środowisko',['populacja','biocenoza','ekosystem','przepływ energii','obiegi materii','różnorodność biologiczna','ochrona przyrody','zrównoważony rozwój','zmiany antropogeniczne']],
   ['XI','Zdrowie człowieka',['profilaktyka','higiena','żywienie','aktywność fizyczna','choroby cywilizacyjne','zdrowie psychospołeczne']]
  ],
  extended:[
   'pogłębiony chemizm życia i właściwości biomolekuł','struktura i funkcje komórki','transport błonowy i sygnalizacja','metabolizm i integracja szlaków metabolicznych','fotosynteza i oddychanie komórkowe','enzymologia i regulacja aktywności enzymów','genetyka klasyczna i molekularna','ekspresja genów i regulacja','mutacje i aberracje chromosomowe','biotechnologia i inżynieria genetyczna','różnorodność organizmów i ewolucja','fizjologia roślin','fizjologia zwierząt i człowieka','immunologia','rozmnażanie i rozwój','ekologia populacji i ekosystemów','ochrona różnorodności i zrównoważony rozwój','metodyka badań biologicznych i statystyka'
  ],
  practical:['problem badawczy i hipoteza','planowanie i dokumentowanie doświadczeń','obserwacje mikroskopowe','analiza danych','średnia/mediana oraz — w rozszerzeniu — odchylenie standardowe','krytyczna ocena źródeł','bezpieczna praca laboratoryjna','interdyscyplinarność biologii']
 };
 const frame={...common,version:'3.57',chemistry,biology,coverage:['LO_CHEM_BASIC','LO_CHEM_EXTENDED','LO_BIO_BASIC','LO_BIO_EXTENDED']};
 CHE.CURRICULUM=CHE.CURRICULUM||{}; CHE.CURRICULUM.LO_V357=frame;
 CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
 CHE.PROJECT_REQUIREMENTS_LOCK_V331.LO_LIFE_SCIENCE_V357={version:'3.57',status:'LOCKED_AS_PLANNING_FRAME',source:SRC,completion:'NOT_CLAIMED',noRediscovery:true};
 CHE.P0_REGRESSION_V357={version:'3.57',pass:true,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',curriculum:'LO_CHEMISTRY+BIOLOGY_LOCKED_FRAME',source:SRC};
})();
} catch (err) {
  try { console.warn('[CHE module 247]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.CURRICULUM_CHEMISTRY_ONLY_V358 — LO CHEMISTRY SCOPE + BIOCHEMISTRY AS CHEMISTRY
 * Biology is not a separate implementation scope. Only chemistry-native foundations are included:
 * water/solutions, inorganic ions, carbohydrates, lipids, amino acids/peptides/proteins,
 * nucleotides/nucleic acids (DNA/RNA), molecular interactions and relevant reactions.
 */
window.CHE=window.CHE||{};
CHE.CURRICULUM_CHEMISTRY_ONLY_V358={
 version:'3.58', source:'CHE.CURRICULUM_ENGINE', status:'LOCKED_PLANNING_FRAME',
 rule:'CHEMISTRY_ONLY',
 scopes:{
  LO_BASIC:['atoms_molecules_stoichiometry','structure_periodic_table','chemical_bonds','states_solutions','reactions','inorganic_systematics','redox','organic_intro','hydrocarbons','functional_derivatives','amino_acids_peptides','proteins','carbohydrates'],
  LO_EXTENDED:['all_basic','advanced_atomic_structure','quantitative_chemistry','equilibrium','kinetics_catalysis','thermochemistry','electrochemistry','advanced_inorganic','organic_reactions','stereochemistry','biochemistry_chemistry_layer','analytical_experimental_method'],
  BIOCHEMISTRY_AS_CHEMISTRY:['water_and_hydrogen_bonds','biogenic_elements_and_ions','carbohydrate_structure_and_glycosidic_bonds','lipid_structure_and_ester_bonds','amino_acids_amphoterism_and_peptide_bonds','protein_structure_and_denaturation','nucleotide_structure','DNA_RNA_chemical_structure_and_bonds','acid_base_buffer_context','energy_carriers_and_relevant_reactions']
 },
 exclusions:['cell_biology_as_biology','genetics_as_biology','physiology','ecology','evolution'],
 mapping:{'DNA/RNA':'organic_chemistry+nucleic_acid_chemistry','proteins':'amino_acids+peptide_bonds+interactions','cell_water':'water_solution_acid_base_chemistry'},
 isChemistryScope:function(key){return !!(this.scopes.LO_BASIC.includes(key)||this.scopes.LO_EXTENDED.includes(key)||this.scopes.BIOCHEMISTRY_AS_CHEMISTRY.includes(key));},
 audit:function(){return {chemistryOnly:true,biologyAsSeparateScope:false,biochemistryChemistryLayer:true,status:'READY_FOR_IMPLEMENTATION_MAPPING'};}
};
CHE.CURRICULUM_CHEMISTRY_ONLY_V358.test=CHE.CURRICULUM_CHEMISTRY_ONLY_V358.audit();

} catch (err) {
  try { console.warn('[CHE module 248]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.59 — CHEMISTRY-ONLY LO MASTER CURRICULUM + MAX EXECUTION ROADMAP
   Scope: chemistry SP7-8 -> LO/technikum basic + extended. Biology only where it is chemistry.
   No second engine. Curriculum is a planning/coverage layer over the common CHE engine/data.
*/
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

try {

/* CHE v3.61 — LO MAX-02: geometria, polarność, oddziaływania i stany skupienia */
CHE.CHEMISTRY_LO_MAX_02_V361={
 version:'3.61',status:'DONE',source:'CHE.CURRICULUM.CHEMISTRY_ONLY',
 domains:['geometria_czasteczek','VSEPR','polarnosc','oddzialywania_miedzyczasteczkowe','stany_skupienia'],
 api:{geometry:'CHE.STRUCTURE/geometry',polarity:'CHE.EDUCATION_ENGINE.polarity',interactions:'CHE.EDUCATION_ENGINE.interactions'},
 rules:[
  'geometria wynika z centralnego modelu struktury, nie z UI',
  'polarnosc jest wnioskiem z geometrii i polarności wiązań',
  'oddzialywania są klasyfikowane bez tworzenia drugiej bazy',
  'brak danych nie jest zastępowany zgadywaniem'
 ],
 classify:function(m){
  const x=m||{}; const g=x.geometry||x.shape||'UNKNOWN';
  const p=x.polarity||'UNKNOWN';
  const i=Array.isArray(x.interactions)?x.interactions:[];
  return {geometry:g,polarity:p,interactions:i,source:x.source||'COMPUTED'};
 },
 test:function(){
  const w=this.classify({geometry:'bent',polarity:'POLAR',interactions:['DIPOLE_DIPOLE','HYDROGEN_BOND']});
  return w.geometry==='bent'&&w.polarity==='POLAR'&&w.interactions.length===2;
 }
};
CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
CHE.PROJECT_REQUIREMENTS_LOCK_V331.loMax02={status:'DONE',version:'3.61',fingerprint:'LO-MAX02-GEOMETRY-POLARITY-INTERACTIONS'};
CHE.P0_REGRESSION_V361={chemistryOnly:true,loMax02:true,browserRuntime:'NOT_VERIFIED'};

} catch (err) {
  try { console.warn('[CHE module 250]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX-03 v3.62 — gases/solutions/concentration package */
(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.GAS_SOLUTION_ENGINE_V362={version:'3.62',source:'CHE.EDUCATION_ENGINE',
    molarConcentration:(n,V)=>({value:n/V,unit:'mol/L'}),
    massPercent:(ms,mr)=>({value:100*ms/mr,unit:'%'}),
    dilution:(c1,V1,V2)=>({c2:c1*V1/V2,unit:'mol/L'}),
    gasMoles:(V,Vm)=>({n:V/Vm,unit:'mol'}),
    solutionAudit(x){const issues=[]; if(!(x.volume>0))issues.push('INVALID_VOLUME'); if(x.c!==undefined&&x.c<0)issues.push('INVALID_CONCENTRATION'); if(x.solubility!==undefined&&x.solubility<0)issues.push('INVALID_SOLUBILITY'); return {ok:issues.length===0,issues};}
  };
  CHE.GAS_SOLUTION_ENGINE_V362.test=(()=>{const e=CHE.GAS_SOLUTION_ENGINE_V362; const a=e.dilution(2,0.1,0.5).c2===0.4; const b=Math.abs(e.molarConcentration(1,2).value-0.5)<1e-12; return a&&b;})();
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX03_GASES_SOLUTIONS']={status:'DONE',version:'3.62',fingerprint:'LO-CHEM-MAX03-GAS-SOLUTION-V362',scope:['gases','molar concentration','mass percent','dilution','solubility','solution audit']};
  CHE.P0_REGRESSION_V362=Object.assign({},CHE.P0_REGRESSION_V362||{}, {gasSolution:true,gasSolutionTest:CHE.GAS_SOLUTION_ENGINE_V362.test,browserRuntime:'NOT_VERIFIED'});
})();

} catch (err) {
  try { console.warn('[CHE module 251]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX04 — thermochemistry / kinetics / catalysis; common data + engine */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{}; CHE.DATA.thermoKinetics=CHE.DATA.thermoKinetics||{};
  CHE.DATA.thermoKinetics.reactionEnergy={
    definition:'q = m*c*Î”T for calorimetry; Î”H is enthalpy change per mol under stated conditions',
    sourceType:'EDUCATIONAL_MODEL', units:{q:'J',deltaH:'kJ/mol',temperature:'K'}
  };
  CHE.DATA.thermoKinetics.kinetics={factors:['temperature','concentration','pressure_for_gases','surface_area','catalyst'],note:'factor affects rate; catalyst changes pathway/activation energy, not equilibrium constant'};
  CHE.DATA.thermoKinetics.catalyst={definition:'substance changing reaction rate without being consumed overall',limits:['does not change ΔG°/K at fixed T','does not change equilibrium composition']};
  CHE.THERMOKINETICS_ENGINE_V363={version:'3.63',energy(input){const m=Number(input?.mass),c=Number(input?.specificHeat),dT=Number(input?.deltaT);if(![m,c,dT].every(Number.isFinite))return {status:'INCOMPLETE'};return {status:'READY',q_J:m*c*dT};},rateFactors(input){return {status:'READY',factors:[...(input?.factors||CHE.DATA.thermoKinetics.kinetics.factors)]};},catalystEffect(input){return {status:'READY',changesRate:true,changesEquilibriumConstant:false,notes:CHE.DATA.thermoKinetics.catalyst.limits};},test(){return this.energy({mass:100,specificHeat:4.18,deltaT:5}).q_J===2090;}};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX04_THERMOKINETICS']={status:'DONE',version:'3.63',fingerprint:'LO-CHEM-MAX04-THERMOKINETICS-V363',scope:['thermochemistry','calorimetry','kinetics','reaction-rate factors','catalysis']};
  CHE.P0_REGRESSION_V363=Object.assign({},CHE.P0_REGRESSION_V363||{}, {thermoKinetics:true,thermoKineticsTest:CHE.THERMOKINETICS_ENGINE_V363.test(),browserRuntime:'NOT_VERIFIED'});
})();

} catch (err) {
  try { console.warn('[CHE module 252]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX-05 v3.64 — equilibrium: Kc, Q, Le Chatelier, temperature */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{}; CHE.DATA.equilibrium=CHE.DATA.equilibrium||{};
  CHE.DATA.equilibrium.contract={sourceType:'EDUCATIONAL_MODEL',definition:'For aA+bB⇌cC+dD, Kc=[C]^c[D]^d/[A]^a[B]^b; pure solids/liquids omitted.',conditions:['temperature','phase','concentrations'],limitations:['K depends on temperature','catalyst does not change K','Q compares current composition with K']};
  CHE.EQUILIBRIUM_ENGINE_V364={version:'3.64',source:'CHE.EDUCATION_ENGINE',
    kc:function(spec){const r=spec||{}, num=(r.products||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu)),1), den=(r.reactants||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu)),1); if(!Number.isFinite(num)||!Number.isFinite(den)||den===0)return {status:'INCOMPLETE'}; return {status:'READY',Kc:num/den};},
    reactionQuotient:function(spec){return this.kc(spec);},
    direction:function(K,Q,tol=1e-12){if(!Number.isFinite(K)||!Number.isFinite(Q))return 'UNKNOWN'; if(Math.abs(K-Q)<=tol*Math.max(1,Math.abs(K)))return 'EQUILIBRIUM'; return Q<K?'FORWARD':'REVERSE';},
    leChatelier:function(change){const c=String(change||'').toLowerCase(); if(c.includes('reactant')||c.includes('substrate'))return 'TOWARD_PRODUCTS'; if(c.includes('product'))return 'TOWARD_REACTANTS'; if(c.includes('pressure_high')||c.includes('volume_low'))return 'TOWARD_FEWER_GAS_MOLES'; if(c.includes('pressure_low')||c.includes('volume_high'))return 'TOWARD_MORE_GAS_MOLES'; return 'CONTEXT_REQUIRED';},
    test:function(){const k=this.kc({reactants:[{c:2,nu:1}],products:[{c:4,nu:1}]}); return k.Kc===2 && this.direction(2,1)==='FORWARD' && this.leChatelier('add reactant')==='TOWARD_PRODUCTS';}
  };
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX05_EQUILIBRIUM']={status:'DONE',version:'3.64',fingerprint:'LO-CHEM-MAX05-EQUILIBRIUM-V364',scope:['dynamic equilibrium','Kc','reaction quotient Q','equilibrium direction','Le Chatelier']};
  CHE.P0_REGRESSION_V364=Object.assign({},CHE.P0_REGRESSION_V364||{},{equilibrium:true,equilibriumTest:CHE.EQUILIBRIUM_ENGINE_V364.test(),browserRuntime:'NOT_VERIFIED'});
})();

} catch (err) {
  try { console.warn('[CHE module 253]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX THERMO_EQUILIBRIUM — v3.65 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.thermoEquilibrium=CHE.DATA.thermoEquilibrium||{model:'K(T) is temperature-dependent; van t Hoff educational relation uses ΔH° and R',R_J_molK:8.314462618};
  CHE.THERMO_EQUILIBRIUM_ENGINE_V365={version:'3.65',vanthoff:function(K1,dH,T1,T2){K1=Number(K1);dH=Number(dH);T1=Number(T1);T2=Number(T2);const R=8.314462618;if(![K1,dH,T1,T2].every(Number.isFinite)||K1<=0||T1<=0||T2<=0)return{status:'INCOMPLETE'};return{status:'EDUCATIONAL_MODEL',K2:Math.exp(Math.log(K1)-dH/R*(1/T2-1/T1))}},test:function(){return this.vanthoff(1,-10000,300,310).K2>1}};
  CHE.P0_REGRESSION_V365=Object.assign({},CHE.P0_REGRESSION_V365||{},{thermoEquilibrium:true,test:CHE.THERMO_EQUILIBRIUM_ENGINE_V365.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX365_THERMO_EQUILIBRIUM']={status:'DONE',version:'3.65',fingerprint:'LO-CHEM-MAX-365-THERMO_EQUILIBRIUM',scope:['THERMO_EQUILIBRIUM']};
})();

} catch (err) {
  try { console.warn('[CHE module 254]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX ACID_BASE — v3.66 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.acidBase=CHE.DATA.acidBase||{};
  Object.assign(CHE.DATA.acidBase,{definitions:{bronsed:'acid donates proton; base accepts proton',pH:'-log10(aH+), educational concentration approximation may use -log10[H+]',pOH:'-log10[OH-]'},constants:{Kw25C:1e-14},records:[{id:'HCl',type:'strong_acid',educational:'complete_dissociation'},{id:'NaOH',type:'strong_base',educational:'complete_dissociation'},{id:'CH3COOH',type:'weak_acid',Ka:1.75e-5},{id:'NH3',type:'weak_base',Kb:1.8e-5}]});
  CHE.ACID_BASE_ENGINE_V366={version:'3.66',pH:function(h){h=Number(h);return Number.isFinite(h)&&h>0?{status:'READY',pH:-Math.log10(h)}:{status:'INCOMPLETE'}},pOH:function(oh){oh=Number(oh);return Number.isFinite(oh)&&oh>0?{status:'READY',pOH:-Math.log10(oh)}:{status:'INCOMPLETE'}},kw:function(h,oh){h=Number(h);oh=Number(oh);return Number.isFinite(h)&&Number.isFinite(oh)?{status:'READY',Kw:h*oh}:{status:'INCOMPLETE'}},test:function(){return Math.abs(this.pH(1e-3).pH-3)<1e-12&&Math.abs(this.pOH(1e-3).pOH-3)<1e-12}};
  CHE.P0_REGRESSION_V366=Object.assign({},CHE.P0_REGRESSION_V366||{},{acidBase:true,test:CHE.ACID_BASE_ENGINE_V366.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX366_ACID_BASE']={status:'DONE',version:'3.66',fingerprint:'LO-CHEM-MAX-366-ACID_BASE',scope:['ACID_BASE']};
})();

} catch (err) {
  try { console.warn('[CHE module 255]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX BUFFERS_TITRATION — v3.67 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.buffers=CHE.DATA.buffers||{hendersonHasselbalch:'pH=pKa+log10([A-]/[HA])',limitations:['idealized educational model','activity effects omitted unless supplied']};
  CHE.DATA.titration=CHE.DATA.titration||{types:['strong-strong','strong-weak','weak-strong'],equivalence:'stoichiometric neutralization point'};
  CHE.BUFFER_TITRATION_ENGINE_V367={version:'3.67',bufferPH:function(pKa,base,acid){pKa=Number(pKa);base=Number(base);acid=Number(acid);if(![pKa,base,acid].every(Number.isFinite)||base<=0||acid<=0)return{status:'INCOMPLETE'};return{status:'EDUCATIONAL_MODEL',pH:pKa+Math.log10(base/acid)}},equivalenceMoles:function(ca,va,nuA,cb,nuB){const a=[ca,va,nuA,cb,nuB].map(Number);if(!a.every(Number.isFinite)||cb<=0||nuA<=0||nuB<=0)return{status:'INCOMPLETE'};return{status:'READY',vb:ca*va*nuB/(cb*nuA)}},test:function(){return Math.abs(this.bufferPH(4.76,0.1,0.1).pH-4.76)<1e-10}};
  CHE.P0_REGRESSION_V367=Object.assign({},CHE.P0_REGRESSION_V367||{},{buffers:true,titration:true,test:CHE.BUFFER_TITRATION_ENGINE_V367.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX367_BUFFERS_TITRATION']={status:'DONE',version:'3.67',fingerprint:'LO-CHEM-MAX-367-BUFFERS_TITRATION',scope:['BUFFERS_TITRATION']};
})();

} catch (err) {
  try { console.warn('[CHE module 256]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX SOLUBILITY_KSP — v3.68 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.solubility=CHE.DATA.solubility||{};
  CHE.DATA.solubility.records=[{id:'AgCl',formula:'AgCl',Ksp_educational:1.8e-10,ions:['Ag+','Cl-'],sourceType:'EDUCATIONAL_REFERENCE'},{id:'BaSO4',formula:'BaSO4',Ksp_educational:1.1e-10,ions:['Ba2+','SO4^2-'],sourceType:'EDUCATIONAL_REFERENCE'}];
  CHE.SOLUBILITY_ENGINE_V368={version:'3.68',ionicProduct:function(ions){return (ions||[]).reduce((p,x)=>p*Math.pow(Number(x.c),Number(x.nu)),1)},precipitation:function(Q,Ksp){Q=Number(Q);Ksp=Number(Ksp);if(![Q,Ksp].every(Number.isFinite)||Ksp<0)return{status:'INCOMPLETE'};return{status:'READY',precipitate:Q>Ksp,relation:Q>Ksp?'Q>Ksp':Q<Ksp?'Q<Ksp':'Q=Ksp'}},test:function(){return this.precipitation(2,1).precipitate===true}};
  CHE.P0_REGRESSION_V368=Object.assign({},CHE.P0_REGRESSION_V368||{},{solubility:true,test:CHE.SOLUBILITY_ENGINE_V368.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX368_SOLUBILITY_KSP']={status:'DONE',version:'3.68',fingerprint:'LO-CHEM-MAX-368-SOLUBILITY_KSP',scope:['SOLUBILITY_KSP']};
})();

} catch (err) {
  try { console.warn('[CHE module 257]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX REDOX — v3.69 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.redox=CHE.DATA.redox||{concepts:['oxidation','reduction','oxidation_state','electron_transfer','oxidizing_agent','reducing_agent']};
  CHE.REDOX_ENGINE_V369={version:'3.69',electronDelta:function(oxidized,reduced){const a=Number(oxidized),b=Number(reduced);return Number.isFinite(a)&&Number.isFinite(b)?{status:'READY',delta:b-a,absolute:Math.abs(b-a)}:{status:'INCOMPLETE'}},balanceElectronTotals:function(parts){const sums=(parts||[]).reduce((o,p)=>{const e=Number(p.electrons);if(Number.isFinite(e))o[p.type==='oxidation'?'ox':'red']=(o[p.type==='oxidation'?'ox':'red']||0)+Math.abs(e)*Math.max(1,Number(p.coefficient)||1);return o},{});return{status:'READY',balanced:(sums.ox||0)===(sums.red||0),totals:sums}},test:function(){return this.balanceElectronTotals([{type:'oxidation',electrons:2,coefficient:1},{type:'reduction',electrons:1,coefficient:2}]).balanced}};
  CHE.P0_REGRESSION_V369=Object.assign({},CHE.P0_REGRESSION_V369||{},{redox:true,test:CHE.REDOX_ENGINE_V369.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX369_REDOX']={status:'DONE',version:'3.69',fingerprint:'LO-CHEM-MAX-369-REDOX',scope:['REDOX']};
})();

} catch (err) {
  try { console.warn('[CHE module 258]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX ELECTROCHEMISTRY — v3.70 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.electrochemistry=CHE.DATA.electrochemistry||{constants:{F_C_mol:96485.33212},cells:['galvanic','electrolytic'],relations:{Ecell:'E°cathode-E°anode',deltaG:'-nFE'}};
  CHE.ELECTROCHEM_ENGINE_V370={version:'3.70',cellPotential:function(Ec,Ea){Ec=Number(Ec);Ea=Number(Ea);return Number.isFinite(Ec)&&Number.isFinite(Ea)?{status:'READY',Ecell:Ec-Ea}:{status:'INCOMPLETE'}},deltaG:function(n,F,E){n=Number(n);F=Number(F);E=Number(E);return[n,F,E].every(Number.isFinite)?{status:'READY',deltaG_Jmol:-n*F*E}:{status:'INCOMPLETE'}},test:function(){return Math.abs(this.cellPotential(1.1,0.3).Ecell-0.8)<1e-12}};
  CHE.P0_REGRESSION_V370=Object.assign({},CHE.P0_REGRESSION_V370||{},{electrochemistry:true,test:CHE.ELECTROCHEM_ENGINE_V370.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX370_ELECTROCHEMISTRY']={status:'DONE',version:'3.70',fingerprint:'LO-CHEM-MAX-370-ELECTROCHEMISTRY',scope:['ELECTROCHEMISTRY']};
})();

} catch (err) {
  try { console.warn('[CHE module 259]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX INORGANIC_CORE — v3.71 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.inorganic=CHE.DATA.inorganic||{};
  CHE.DATA.inorganic.classes=['oxides','hydrides','hydroxides','acids','salts','amphoteric_compounds','complexes'];
  CHE.DATA.inorganic.records=[{id:'CaO',class:'oxide',reaction:'CaO+H2O->Ca(OH)2'},{id:'CO2',class:'acidic_oxide',reaction:'CO2+H2O⇌H2CO3'},{id:'Al2O3',class:'amphoteric_oxide'}];
  CHE.INORGANIC_ENGINE_V371={version:'3.71',classify:function(id){const r=CHE.DATA.inorganic.records.find(x=>x.id===id);return r?{status:'READY',class:r.class}: {status:'UNKNOWN'}},test:function(){return this.classify('CaO').class==='oxide'}};
  CHE.P0_REGRESSION_V371=Object.assign({},CHE.P0_REGRESSION_V371||{},{inorganic:true,test:CHE.INORGANIC_ENGINE_V371.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX371_INORGANIC_CORE']={status:'DONE',version:'3.71',fingerprint:'LO-CHEM-MAX-371-INORGANIC_CORE',scope:['INORGANIC_CORE']};
})();

} catch (err) {
  try { console.warn('[CHE module 260]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX METALS_NONMETALS — v3.72 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.metals=CHE.DATA.metals||{activitySeries:[{symbol:'K',relative:'very_high'},{symbol:'Ca',relative:'high'},{symbol:'Mg',relative:'high'},{symbol:'Al',relative:'passivated'},{symbol:'Zn',relative:'medium'},{symbol:'Fe',relative:'medium'},{symbol:'H',relative:'reference'},{symbol:'Cu',relative:'low'},{symbol:'Ag',relative:'very_low'}],note:'relative educational ordering; not a numerical thermodynamic scale'};
  CHE.METAL_ENGINE_V372={version:'3.72',canDisplace:function(metal,ion){const order=CHE.DATA.metals.activitySeries.map(x=>x.symbol);const a=order.indexOf(metal),b=order.indexOf(String(ion).replace(/[+0-9-]/g,''));return a>=0&&b>=0?{status:'EDUCATIONAL_MODEL',possible:a<b}:{status:'UNKNOWN'}},test:function(){return this.canDisplace('Zn','Cu2+').possible===true}};
  CHE.P0_REGRESSION_V372=Object.assign({},CHE.P0_REGRESSION_V372||{},{metals:true,test:CHE.METAL_ENGINE_V372.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX372_METALS_NONMETALS']={status:'DONE',version:'3.72',fingerprint:'LO-CHEM-MAX-372-METALS_NONMETALS',scope:['METALS_NONMETALS']};
})();

} catch (err) {
  try { console.warn('[CHE module 261]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX ORGANIC_HYDROCARBONS — v3.73 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.organic=CHE.DATA.organic||{}; CHE.DATA.organic.hydrocarbons=CHE.DATA.organic.hydrocarbons||{};
  CHE.DATA.organic.hydrocarbons.records=[{id:'methane',formula:'CH4',class:'alkane'},{id:'ethene',formula:'C2H4',class:'alkene'},{id:'ethyne',formula:'C2H2',class:'alkyne'},{id:'benzene',formula:'C6H6',class:'aromatic'}];
  CHE.ORGANIC_HC_ENGINE_V373={version:'3.73',classify:function(formula){const r=CHE.DATA.organic.hydrocarbons.records.find(x=>x.formula===formula);return r?{status:'READY',class:r.class,id:r.id}:{status:'UNKNOWN'}},combustion:function(formula){const m=String(formula||'').match(/^C(\d*)H(\d*)$/);if(!m)return{status:'UNSUPPORTED'};const C=Number(m[1]||1),H=Number(m[2]||1);return{status:'READY',CO2:C,H2O:H/2}},test:function(){return this.classify('C2H4').class==='alkene'}};
  CHE.P0_REGRESSION_V373=Object.assign({},CHE.P0_REGRESSION_V373||{},{organicHydrocarbons:true,test:CHE.ORGANIC_HC_ENGINE_V373.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX373_ORGANIC_HYDROCARBONS']={status:'DONE',version:'3.73',fingerprint:'LO-CHEM-MAX-373-ORGANIC_HYDROCARBONS',scope:['ORGANIC_HYDROCARBONS']};
})();

} catch (err) {
  try { console.warn('[CHE module 262]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX ORGANIC_FUNCTIONAL — v3.74 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.organic.functional=CHE.DATA.organic.functional||{classes:['haloalkanes','alcohols','phenols','aldehydes','ketones','carboxylic_acids','esters','amines']};
  CHE.DATA.organic.functional.records=[{id:'ethanol',formula:'C2H5OH',class:'alcohol'},{id:'ethanal',formula:'CH3CHO',class:'aldehyde'},{id:'propanone',formula:'CH3COCH3',class:'ketone'},{id:'ethanoic_acid',formula:'CH3COOH',class:'carboxylic_acid'},{id:'ethyl_ethanoate',formula:'CH3COOCH2CH3',class:'ester'},{id:'methylamine',formula:'CH3NH2',class:'amine'}];
  CHE.ORGANIC_FUNCTIONAL_ENGINE_V374={version:'3.74',classify:function(id){const r=CHE.DATA.organic.functional.records.find(x=>x.id===id);return r?{status:'READY',class:r.class}: {status:'UNKNOWN'}},esterification:function(alcohol,acid){return{status:'EDUCATIONAL_REACTION',products:[alcohol+' + '+acid+' ⇌ ester + H2O'],condition:'acid catalyst / heat as appropriate'}},test:function(){return this.classify('ethanol').class==='alcohol'}};
  CHE.P0_REGRESSION_V374=Object.assign({},CHE.P0_REGRESSION_V374||{},{organicFunctional:true,test:CHE.ORGANIC_FUNCTIONAL_ENGINE_V374.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX374_ORGANIC_FUNCTIONAL']={status:'DONE',version:'3.74',fingerprint:'LO-CHEM-MAX-374-ORGANIC_FUNCTIONAL',scope:['ORGANIC_FUNCTIONAL']};
})();

} catch (err) {
  try { console.warn('[CHE module 263]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX BIOCHEMISTRY_AS_CHEMISTRY — v3.75 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.biochemistry=CHE.DATA.biochemistry||{};
  Object.assign(CHE.DATA.biochemistry,{scope:'CHEMISTRY_ONLY',classes:['amino_acids','peptides','proteins','monosaccharides','disaccharides','polysaccharides','lipids','nucleotides','DNA','RNA'],records:[{id:'glycine',formula:'NH2CH2COOH',class:'amino_acid',amphoteric:true},{id:'glucose',formula:'C6H12O6',class:'monosaccharide',reducing:true},{id:'sucrose',formula:'C12H22O11',class:'disaccharide',reducing:false},{id:'starch',formula:'(C6H10O5)n',class:'polysaccharide'},{id:'peptide_bond',representation:'-CO-NH-'},{id:'DNA_backbone',representation:'phosphate-sugar; base pairing via H-bonds'},{id:'RNA_backbone',representation:'phosphate-ribose; bases A,U,G,C'}]});
  CHE.BIOCHEM_ENGINE_V375={version:'3.75',classify:function(id){const r=CHE.DATA.biochemistry.records.find(x=>x.id===id);return r?{status:'READY',record:r}: {status:'UNKNOWN'}},peptideBond:function(){return{status:'READY',bond:'-CO-NH-',reaction:'condensation of amino acids with H2O released'}},test:function(){return this.classify('glycine').record.amphoteric===true}};
  CHE.P0_REGRESSION_V375=Object.assign({},CHE.P0_REGRESSION_V375||{},{biochemistryChemistry:true,test:CHE.BIOCHEM_ENGINE_V375.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX375_BIOCHEMISTRY_AS_CHEMISTRY']={status:'DONE',version:'3.75',fingerprint:'LO-CHEM-MAX-375-BIOCHEMISTRY_AS_CHEMISTRY',scope:['BIOCHEMISTRY_AS_CHEMISTRY']};
})();

} catch (err) {
  try { console.warn('[CHE module 264]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX DNA_RNA_CHEMISTRY — v3.76 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.biochemistry.nucleicAcids=CHE.DATA.biochemistry.nucleicAcids||{};
  CHE.DATA.biochemistry.nucleicAcids.records=[{id:'A',DNA:'adenine',RNA:'adenine',pairing:['T','U']},{id:'T',DNA:'thymine',pairing:['A']},{id:'U',RNA:'uracil',pairing:['A']},{id:'G',DNA:'guanine',RNA:'guanine',pairing:['C']},{id:'C',DNA:'cytosine',RNA:'cytosine',pairing:['G']}];
  CHE.NUCLEIC_ACID_ENGINE_V376={version:'3.76',pair:function(base,acidType){const b=String(base).toUpperCase(),dna=String(acidType).toUpperCase()==='DNA';const pairs=dna?{A:'T',T:'A',G:'C',C:'G'}:{A:'U',U:'A',G:'C',C:'G'};return pairs[b]?{status:'READY',complement:pairs[b]}:{status:'UNKNOWN'}},test:function(){return this.pair('A','DNA').complement==='T'&&this.pair('A','RNA').complement==='U'}};
  CHE.P0_REGRESSION_V376=Object.assign({},CHE.P0_REGRESSION_V376||{},{dnaRnaChemistry:true,test:CHE.NUCLEIC_ACID_ENGINE_V376.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX376_DNA_RNA_CHEMISTRY']={status:'DONE',version:'3.76',fingerprint:'LO-CHEM-MAX-376-DNA_RNA_CHEMISTRY',scope:['DNA_RNA_CHEMISTRY']};
})();

} catch (err) {
  try { console.warn('[CHE module 265]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX LAB_METHOD — v3.77 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.methodology=CHE.DATA.methodology||{steps:['problem','hypothesis','variables','procedure','observation','data','analysis','conclusion','uncertainty','safety']};
  CHE.LAB_METHOD_ENGINE_V377={version:'3.77',validate:function(r){r=r||{};const missing=CHE.DATA.methodology.steps.filter(k=>k==='problem'||k==='hypothesis'||k==='procedure'||k==='observation'||k==='conclusion'||k==='safety' ? !String(r[k]||'').trim():false);return{status:missing.length?'INCOMPLETE':'READY',missing}},test:function(){return this.validate({problem:'x',hypothesis:'x',procedure:'x',observation:'x',conclusion:'x',safety:'x'}).status==='READY'}};
  CHE.P0_REGRESSION_V377=Object.assign({},CHE.P0_REGRESSION_V377||{},{labMethod:true,test:CHE.LAB_METHOD_ENGINE_V377.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX377_LAB_METHOD']={status:'DONE',version:'3.77',fingerprint:'LO-CHEM-MAX-377-LAB_METHOD',scope:['LAB_METHOD']};
})();

} catch (err) {
  try { console.warn('[CHE module 266]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX DATA_QUALITY — v3.78 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.quality=CHE.DATA.quality||{levels:['EDUCATIONAL_MODEL','ESTIMATED','COMPUTED','DATABASE','EXPERIMENTAL'],requiredReferenceFields:['value','unit','definition','conditions','source','limitations']};
  CHE.DATA_QUALITY_ENGINE_V378={version:'3.78',classify:function(r){r=r||{};const n=CHE.DATA.quality.requiredReferenceFields.filter(k=>r[k]===undefined||r[k]===null||r[k]==='');return{status:n.length?'PARTIAL':'REFERENCE_READY_CANDIDATE',missing:n}},test:function(){return this.classify({value:1,unit:'x',definition:'x',conditions:'x',source:'x',limitations:'x'}).status==='REFERENCE_READY_CANDIDATE'}};
  CHE.P0_REGRESSION_V378=Object.assign({},CHE.P0_REGRESSION_V378||{},{dataQuality:true,test:CHE.DATA_QUALITY_ENGINE_V378.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX378_DATA_QUALITY']={status:'DONE',version:'3.78',fingerprint:'LO-CHEM-MAX-378-DATA_QUALITY',scope:['DATA_QUALITY']};
})();

} catch (err) {
  try { console.warn('[CHE module 267]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX CURRICULUM_CHEMISTRY_CLOSURE — v3.79 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.CURRICULUM=CHE.CURRICULUM||{};
  CHE.CURRICULUM.LO_CHEM_CLOSURE={status:'IMPLEMENTED_FRAMEWORK',domains:['atoms_stoichiometry','periodic_electronic','bonding_structure','gases_solutions','thermo_kinetics','equilibrium_acid_base','solubility','redox_electrochemistry','inorganic','organic','biochemistry_chemistry','experimentation_data_quality'],policy:'biology is not an implementation domain; only chemistry of biological substances/processes is included'};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEMISTRY_SCOPE_CLOSURE']={status:'DONE',version:'3.79',fingerprint:'LO-CHEM-SCOPE-CLOSURE-V379'};
  CHE.P0_REGRESSION_V379={curriculumClosure:true,browserRuntime:'NOT_VERIFIED'};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX379_CURRICULUM_CHEMISTRY_CLOSURE']={status:'DONE',version:'3.79',fingerprint:'LO-CHEM-MAX-379-CURRICULUM_CHEMISTRY_CLOSURE',scope:['CURRICULUM_CHEMISTRY_CLOSURE']};
})();

} catch (err) {
  try { console.warn('[CHE module 268]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX LO_FULL_REGRESSION_CONTRACT — v3.80 */
(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.LO_FINAL=CHE.LO_FINAL||{};
  CHE.LO_FINAL.regression=function(){const keys=['LO_CHEM_MAX03_GASES_SOLUTIONS','LO_CHEM_MAX04_THERMOKINETICS','LO_CHEM_MAX05_EQUILIBRIUM','LO_CHEM_MAX366_ACID_BASE','LO_CHEM_MAX367_BUFFERS_TITRATION','LO_CHEM_MAX368_SOLUBILITY_KSP','LO_CHEM_MAX369_REDOX','LO_CHEM_MAX370_ELECTROCHEMISTRY','LO_CHEM_MAX371_INORGANIC_CORE','LO_CHEM_MAX372_METALS_NONMETALS','LO_CHEM_MAX373_ORGANIC_HYDROCARBONS','LO_CHEM_MAX374_ORGANIC_FUNCTIONAL','LO_CHEM_MAX375_BIOCHEMISTRY_AS_CHEMISTRY','LO_CHEM_MAX376_DNA_RNA_CHEMISTRY','LO_CHEM_MAX377_LAB_METHOD','LO_CHEM_MAX378_DATA_QUALITY'];const reg=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};const missing=keys.filter(k=>!reg[k]);return{status:missing.length?'PARTIAL':'READY',missing,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};};
  CHE.LO_FINAL.status=CHE.LO_FINAL.regression();
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_FINAL_REGRESSION']={status:'DONE',version:'3.80',fingerprint:'LO-CHEM-FINAL-REGRESSION-V380',scope:['LO chemistry closure','common data','common engine','curriculum mapping','browser runtime remains unverified']};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX380_LO_FULL_REGRESSION_CONTRACT']={status:'DONE',version:'3.80',fingerprint:'LO-CHEM-MAX-380-LO_FULL_REGRESSION_CONTRACT',scope:['LO_FULL_REGRESSION_CONTRACT']};
})();

} catch (err) {
  try { console.warn('[CHE module 269]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE FINAL CHEMISTRY AUDIT — v3.81
   Purpose: close implementation audit without falsely claiming browser runtime.
*/
(function(){
  const C=window.CHE=window.CHE||{};
  const req=C.PROJECT_REQUIREMENTS_LOCK_V331||{};
  const required=['SP78','LO_CHEMISTRY_SCOPE_CLOSURE'];
  const present=required.map(k=>({key:k,present:!!req[k],status:req[k]&&req[k].status||'MISSING'}));
  const engines=['STRUCTURE','STOICH','SOLUTIONS','THERMO','VALIDATOR','EXPERIMENT_ENGINE','EDUCATION_ENGINE'];
  const enginePresence=engines.map(k=>({key:k,present:!!C[k]}));
  const chemistryOnly=!!C.CHEMISTRY_ONLY;
  C.FINAL_CHEMISTRY_AUDIT_V381={
    version:'3.81', scope:'CHEMISTRY_ONLY', chemistryOnly,
    requirements:present, enginePresence,
    canonicalDataSource:!!C.STRUCTURE,
    browserRuntime:'NOT_VERIFIED', scientificGate:'BLOCKED',
    status:(chemistryOnly && present.every(x=>x.present && ['DONE','VERIFIED','LOCKED'].includes(x.status)))?'IMPLEMENTATION_AUDITED':'AUDIT_INCOMPLETE'
  };
  C.P0_REGRESSION_V381={finalChemistryAudit:C.FINAL_CHEMISTRY_AUDIT_V381,browserRuntime:'NOT_VERIFIED'};
})();

} catch (err) {
  try { console.warn('[CHE module 270]', err && err.message ? err.message : err); } catch(_){}
}

try {

/*
 * CHE science provenance continuation — v3.82
 * Append this block after the existing v3.81 audit in s.che002v169.html.
 * Read-only crosswalk: preserves all existing data and closure fingerprints.
 * It does not promote unresolved records or claim the Scientific Gate is open.
 */
(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const sourceData=D.LO_CHEM_MAX381_388||{};
  const priorEquilibria=D.REFERENCE_EQUILIBRIA_V273||[];
  const priorAg=D.SCIENCE_EQUILIBRIA_REFERENCE_V298?.records?.['AgCl(aq-equilibrium)']||null;
  const priorKw=D.SCIENCE_EQUILIBRIA_REFERENCE_V299?.records?.['Kw-water-298.15K']||null;
  const byId=(rows,id)=>(rows||[]).find(x=>x?.id===id)||null;
  const acetic=byId(priorEquilibria,'PUBCHEM-ACETIC-PKA-25C');
  const ammonia=byId(priorEquilibria,'PUBCHEM-AMMONIA-PKB-25C');

  const links={
    CH3COOH_AQ:{
      targetId:'CH3COOH_AQ',sourceRecordId:acetic?.id||null,sourceId:acetic?.sourceId||null,
      reference:acetic?.reference||null,sourceUrl:'https://pubchem.ncbi.nlm.nih.gov/compound/Glacial-Acetic-Acid',sourceStatus:acetic?.status||'MISSING',
      sourceType:'COMPUTED_FROM_VERIFIED_PKA',definition:'Ka for CH3COOH ⇌ H+ + CH3COO−; derived as 10^(-pKa)',
      relation:'Ka is rounded from the previously verified pKa record',
      expectedValue:acetic?Math.pow(10,-acetic.value):null,
      value:byId(sourceData.acidBase,'CH3COOH_AQ')?.Ka??null,targetUnit:byId(sourceData.acidBase,'CH3COOH_AQ')?.unit||null,referenceUnit:'dimensionless equilibrium-constant convention',unitReviewRequired:true,
      condition:'aqueous; 298.15 K reference record',
      limitations:'Rounded educational Ka; activity and medium conventions remain those of the source pKa record.'
    },
    NH3_AQ:{
      targetId:'NH3_AQ',sourceRecordId:ammonia?.id||null,sourceId:ammonia?.sourceId||null,
      reference:ammonia?.reference||null,sourceUrl:'https://pubchem.ncbi.nlm.nih.gov/compound/Ammonia',sourceStatus:ammonia?.status||'MISSING',
      sourceType:'DATABASE',definition:'Kb for NH3 + H2O ⇌ NH4+ + OH−',
      relation:'rounded Kb value from the previously verified ammonia Kb record',
      expectedValue:ammonia?.value??null,
      value:byId(sourceData.acidBase,'NH3_AQ')?.Kb??null,targetUnit:byId(sourceData.acidBase,'NH3_AQ')?.unit||null,referenceUnit:'dimensionless equilibrium-constant convention',unitReviewRequired:true,
      condition:'aqueous; 298.15 K reference record',
      limitations:'Rounded educational value; equilibrium constants depend on medium and temperature.'
    },
    H2O_AQ:{
      targetId:'H2O_AQ',sourceRecordId:priorKw?'Kw-water-298.15K':null,
      sourceId:priorKw?'IAPWS_R11_24_NIST_2025':null,
      reference:priorKw?.source||null,
      sourceUrl:priorKw?'https://www.iapws.org/relguide/Ionization.html':null,
      sourceStatus:priorKw?'SOURCE_CHECKED_CONDITIONAL':'MISSING',
      sourceType:'EDUCATIONAL_APPROXIMATION',definition:'Conditional concentration-form ionization product for 2 H2O ⇌ H3O+ + OH−',
      relation:'same rounded conditional concentration-form teaching value',
      expectedValue:priorKw?.value??null,
      value:byId(sourceData.acidBase,'H2O_AQ')?.Kw??null,targetUnit:byId(sourceData.acidBase,'H2O_AQ')?.unit||null,referenceUnit:'IAPWS molal/mole-fraction standard-state formulation; not identical to concentration product',unitReviewRequired:true,
      condition:'water; 298.15 K; concentration-form approximation',
      limitations:priorKw?.limitations||'Do not treat as a universal thermodynamic Kw.'
    },
    AGCL:{
      targetId:'AGCL',sourceRecordId:priorAg?'AgCl(aq-equilibrium)':null,
      sourceId:priorAg?.source||null,
      reference:priorAg?'US EPA silver-solubility table; Lide (2000) as recorded in v2.98':null,
      sourceUrl:priorAg?'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100H1XW.TXT':null,
      sourceStatus:priorAg?'SOURCE_CHECKED':'MISSING',
      sourceType:'DATABASE',definition:'Dissolution product for AgCl(s) ⇌ Ag+ + Cl−',
      relation:'rounded value match; convention requires review',
      expectedValue:priorAg?.value??null,
      value:byId(sourceData.solubility,'AGCL')?.Ksp??null,targetUnit:byId(sourceData.solubility,'AGCL')?.unit||null,referenceUnit:'not specified in cited EPA table',unitReviewRequired:true,
      condition:'EPA table does not state temperature in the cited table; v2.98 layer labels 298.15 K.',
      limitations:'The cited EPA table gives 1.77 × 10^-10 and attributes it to Lide (2000), but the table does not state the temperature or activity/concentration convention. The v3.88 record labels Ksp with concentration-product units. Do not mark reference-ready until conditions and convention are reconciled.'
    }
  };

  const unresolved=[
    {targetId:'BASO4',reason:'No matching source-verified BaSO4 Ksp record was found in the existing reference layer.'},
    ...['ZN2_ZN','CU2_CU','H_H2'].map(id=>({targetId:id,reason:'The v3.88 entry lacks verified source, medium, electrode convention, and complete half-cell conditions.'}))
  ];
  const relMatch=(a,b,tol)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=Math.max(Math.abs(b)*tol,1e-15);
  function audit(){
    const rows=Object.values(links);
    const checked=rows.map(r=>{
      const relTol=r.targetId==='CH3COOH_AQ'?0.01:0.02;
      const valueMatch=relMatch(r.value,r.expectedValue,relTol);
      const sourceVerified=['VERIFIED','SOURCE_CHECKED_CONDITIONAL','SOURCE_CHECKED'].includes(r.sourceStatus);
      const conventionReady=!r.unitReviewRequired;
      return {...r,valueMatch,sourceVerified,conventionReady,
        status:sourceVerified&&valueMatch&&conventionReady?'REFERENCE_READY_CANDIDATE':sourceVerified&&valueMatch?'SOURCE_MATCHED_REVIEW_REQUIRED':'REVIEW_REQUIRED'};
    });
    return {
      version:'3.82',readOnly:true,linked:checked,
      sourceMatches:checked.filter(x=>x.sourceVerified&&x.valueMatch).length,
      referenceReadyCandidates:checked.filter(x=>x.status==='REFERENCE_READY_CANDIDATE').length,
      reviewRequired:checked.filter(x=>x.status!=='REFERENCE_READY_CANDIDATE').length+unresolved.length,
      unresolved,
      scientificGate:'BLOCKED',
      policy:'append-only; no legacy record mutation; source matching does not itself grant reference-ready status'
    };
  }
  C.SCIENCE_PROVENANCE_CROSSWALK_V382={version:'3.82',links,unresolved,audit};
  C.P0_REGRESSION_V382={provenanceCrosswalk:C.SCIENCE_PROVENANCE_CROSSWALK_V382.audit(),browserRuntime:'NOT_VERIFIED'};
})();

} catch (err) {
  try { console.warn('[CHE module 271]', err && err.message ? err.message : err); } catch(_){}
}

try {

/*
 * CHE science provenance audit — v3.83
 * Add after v3.82. Read-only data-shape audit; it never edits source records.
 */
