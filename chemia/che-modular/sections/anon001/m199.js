try {

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

