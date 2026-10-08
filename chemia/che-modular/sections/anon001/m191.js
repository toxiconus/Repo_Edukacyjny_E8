try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const elements=[
 ['H','wodór','1','niemetal'],['C','węgiel','6','niemetal'],['N','azot','7','niemetal'],['O','tlen','8','niemetal'],['Na','sód','11','metal'],['Mg','magnez','12','metal'],['Al','glin','13','metal'],['Si','krzem','14','metaloid'],['P','fosfor','15','niemetal'],['S','siarka','16','niemetal'],['Cl','chlor','17','niemetal'],['K','potas','19','metal'],['Ca','wapń','20','metal'],['Fe','żelazo','26','metal'],['Cu','miedź','29','metal'],['Zn','cynk','30','metal'],['Br','brom','35','niemetal'],['Ag','srebro','47','metal'],['I','jod','53','niemetal'],['Ba','bar','56','metal'],['Pb','ołów','82','metal']
].map(x=>({symbol:x[0],name:x[1],Z:+x[2],class:x[3],tier:'SP78_CORE'}));
const reactions=[
 ['H2_O2','2H2 + O2 → 2H2O','synteza','SP78'],
 ['C_O2','C + O2 → CO2','spalanie','SP78'],
 ['S_O2','S + O2 → SO2','spalanie','SP78'],
 ['MG_O2','2Mg + O2 → 2MgO','synteza','SP78'],
 ['FE_O2','4Fe + 3O2 → 2Fe2O3','synteza','SP78'],
 ['CAO_H2O','CaO + H2O → Ca(OH)2','tlenek_woda','SP78'],
 ['CO2_H2O','CO2 + H2O ⇌ H2CO3','tlenek_woda','SP78'],
 ['SO2_H2O','SO2 + H2O ⇌ H2SO3','tlenek_woda','SP78'],
 ['H2_O2_WATER','2H2 + O2 → 2H2O','synteza','SP78'],
 ['ZN_HCL','Zn + 2HCl → ZnCl2 + H2↑','metal_kwas','SP78'],
 ['MG_HCL','Mg + 2HCl → MgCl2 + H2↑','metal_kwas','SP78'],
 ['CA_HCL','Ca + 2HCl → CaCl2 + H2↑','metal_kwas','SP78'],
 ['NA_H2O','2Na + 2H2O → 2NaOH + H2↑','metal_woda','LO'],
 ['CA_H2O','Ca + 2H2O → Ca(OH)2 + H2↑','metal_woda','LO'],
 ['HCL_NAOH','HCl + NaOH → NaCl + H2O','neutralizacja','SP78'],
 ['H2SO4_NAOH','H2SO4 + 2NaOH → Na2SO4 + 2H2O','neutralizacja','SP78'],
 ['HCL_CAO','2HCl + CaO → CaCl2 + H2O','kwas_tlenek','SP78'],
 ['HCL_CUOH2','2HCl + Cu(OH)2 → CuCl2 + 2H2O','kwas_wodorotlenek','SP78'],
 ['H2SO4_CUO','H2SO4 + CuO → CuSO4 + H2O','kwas_tlenek','SP78'],
 ['CO2_CAOH2','CO2 + Ca(OH)2 → CaCO3↓ + H2O','tlenek_zasada','SP78'],
 ['CACO3_HCL','CaCO3 + 2HCl → CaCl2 + H2O + CO2↑','weglan_kwas','SP78'],
 ['AGNO3_NACL','AgNO3 + NaCl → AgCl↓ + NaNO3','stracanie','SP78'],
 ['CACL2_NA2CO3','CaCl2 + Na2CO3 → CaCO3↓ + 2NaCl','stracanie','SP78'],
 ['CUSO4_NAOH','CuSO4 + 2NaOH → Cu(OH)2↓ + Na2SO4','stracanie','SP78'],
 ['NA_CL2','2Na + Cl2 → 2NaCl','metal_niemetal','SP78'],
 ['MG_S','Mg + S → MgS','metal_niemetal','SP78'],
 ['FE_S','Fe + S → FeS','metal_niemetal','LO'],
 ['CH4_O2','CH4 + 2O2 → CO2 + 2H2O','spalanie','SP78'],
 ['CH4_CO','2CH4 + 3O2 → 2CO + 4H2O','spalanie_niecalkowite','SP78'],
 ['C2H4_BR2','C2H4 + Br2 → C2H4Br2','addycja','SP78'],
 ['C2H5OH_OX','C2H5OH + [O] → CH3CHO + H2O','utlenianie_alkoholu','LO'],
 ['ESTER','CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O','estryfikacja','LO'],
 ['GLUCOSE_O2','C6H12O6 + 6O2 → 6CO2 + 6H2O','utlenianie_biologiczne','SP78_BIO'],
 ['PHOTOSYNTHESIS','6CO2 + 6H2O → C6H12O6 + 6O2','synteza_biologiczna','SP78_BIO']
].map(x=>({id:x[0],equation:x[1],type:x[2],tier:x[3],status:'EDUCATIONAL_MODEL'}));
const skills=[
 ['obserwacja','oddzielenie obserwacji od wniosku'],['hipoteza','sformułowanie hipotezy możliwej do sprawdzenia'],['zmienne','rozpoznanie zmiennej niezależnej, zależnej i kontrolowanych'],['tabela','zapis danych pomiarowych w tabeli'],['wykres','przedstawienie zależności na wykresie'],['wniosek','wniosek wynikający z obserwacji i danych'],['BHP','dobór podstawowych środków ochrony i rozpoznanie piktogramów']
].map(x=>({id:x[0],description:x[1],tier:'SP78'}));
const organic=[
 ['alkany','CnH2n+2','nasycone'],['alkeny','CnH2n','nienasycone'],['alkiny','CnH2n-2','nienasycone'],
 ['metan','CH4','alkan'],['etan','C2H6','alkan'],['eten','C2H4','alken'],['etyn','C2H2','alkin'],
 ['metanol','CH3OH','alkohol'],['etanol','C2H5OH','alkohol'],['kwas_octowy','CH3COOH','kwas karboksylowy'],['glukoza','C6H12O6','cukier prosty']
].map(x=>({name:x[0],formula:x[1],class:x[2],tier:'SP78_LO'}));
const bio=[
 ['glukoza','C6H12O6','monosacharyd'],['fruktoza','C6H12O6','monosacharyd'],['sacharoza','C12H22O11','disacharyd'],['skrobia','(C6H10O5)n','polisacharyd'],['celuloza','(C6H10O5)n','polisacharyd'],['glicyna','NH2CH2COOH','aminokwas'],['alanina','CH3CH(NH2)COOH','aminokwas']
].map(x=>({name:x[0],formula:x[1],class:x[2],tier:'SP78_BIO_LO'}));
const calculations={
 core:[
  {id:'MOLAR_MASS',formula:'M = m/n',use:'masa molowa'},
  {id:'AMOUNT',formula:'n = m/M',use:'ilość substancji'},
  {id:'MASS',formula:'m = nM',use:'masa'},
  {id:'CONCENTRATION',formula:'c = n/V',use:'stężenie molowe'},
  {id:'PERCENT',formula:'w% = 100·m_subst/m_roztworu',use:'stężenie procentowe'},
  {id:'DENSITY',formula:'Ď = m/V',use:'gęstość'},
  {id:'DILUTION',formula:'c1V1 = c2V2',use:'rozcieńczanie przy stałej ilości substancji'},
  {id:'GAS_STOICH',formula:'nA/a = nB/b',use:'proporcja stechiometryczna z równania'}
 ],constants:{NA:6.02214076e23,unitNA:'mol^-1',R:'8.31446261815324 J mol^-1 K^-1',note:'R podano jako stałą SI; warunki gazowe muszą być jawnie określone'}
};
const curriculumMap=[
 {id:'SP78_SUBSTANCES',priority:'P0',topics:['właściwości substancji','mieszaniny','rozdzielanie','gęstość']},
 {id:'SP78_ATOM',priority:'P0',topics:['atom','izotopy','Z','elektrony','układ okresowy']},
 {id:'SP78_REACTIONS',priority:'P0',topics:['równania','bilansowanie','masa','ładunek','egzo/endo','katalizator']},
 {id:'SP78_ACIDS_BASES',priority:'P0',topics:['kwasy','zasady','pH','wskaźniki','dysocjacja','zobojętnianie']},
 {id:'SP78_SALTS',priority:'P0',topics:['wzory soli','nazewnictwo','strącanie','rozpuszczalność']},
 {id:'SP78_CARBON',priority:'P0',topics:['alkany','alkeny','alkiny','spalanie']},
 {id:'LO_STOICH',priority:'P1',topics:['mol','stężenie','stechiometria','wydajność']},
 {id:'LO_REDOX',priority:'P1',topics:['stopnie utlenienia','utlenianie','redukcja','ogniwa']},
 {id:'LO_ORGANIC',priority:'P1',topics:['grupy funkcyjne','izomeria','reakcje organiczne']},
 {id:'LO_BIOCHEM',priority:'P1',topics:['cukry','aminokwasy','białka','polisacharydy']}
];
D.EDUCATION_MASS_V306={version:'3.06',elements,reactions,skills,organic,bio,calculations,curriculumMap,source:{id:'ZPE_CURRICULUM_2025_26',sp:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia',lo:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia',accessed:'2026-10-02'},policy:'large curriculum package; educational layer over common data; no scientific reference upgrade; no overwrite'};
E.modules=E.modules||{};E.modules.EDUCATION_MASS_V306='3.06';
E.EDUCATION_MASS_AUDIT_V306={run(){const d=D.EDUCATION_MASS_V306;const checks=[['elements>=21',d.elements.length>=21],['reactions>=30',d.reactions.length>=30],['skills>=7',d.skills.length>=7],['organic>=10',d.organic.length>=10],['bio>=7',d.bio.length>=7],['calc>=8',d.calculations.core.length>=8],['curriculum>=10',d.curriculumMap.length>=10],['NA exact',d.calculations.constants.NA===6.02214076e23]];return {version:'3.06',ok:checks.every(x=>x[1]),checks,counts:{elements:d.elements.length,reactions:d.reactions.length,skills:d.skills.length,organic:d.organic.length,bio:d.bio.length,calculations:d.calculations.core.length,curriculum:d.curriculumMap.length}};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 191]', err && err.message ? err.message : err); } catch(_){}
}

