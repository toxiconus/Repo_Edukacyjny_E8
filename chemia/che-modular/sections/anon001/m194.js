try {

(()=>{
  const C=window.CHE||{}; const D=C.DATA=C.DATA||{}; const E=C.ENGINE=C.ENGINE||{};
  const source={type:'EDUCATIONAL_CURRICULUM',authority:'ZPE/ME',scope:'Chemia SP 7-8 + LO/technikum',accessed:'2026-10-02',urls:['https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia','https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia']};
  const ledger=E.EDUCATION_VERIFICATION_LEDGER_V308=E.EDUCATION_VERIFICATION_LEDGER_V308||{version:'3.08',policy:'introduced-once hard lock',records:{}};
  const fp=x=>{let str=JSON.stringify(x,Object.keys(x).sort()),h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return ('00000000'+(h>>>0).toString(16)).slice(-8)};
  const mark=(id,x)=>{const f=fp(x); if(ledger.records[id]?.fingerprint===f)return {id,status:'SKIP_ALREADY_INTRODUCED',fingerprint:f}; ledger.records[id]={id,fingerprint:f,verifiedAt:'2026-10-02',source:source.type,sourceVersion:'2025/2026'}; return {id,status:'INTRODUCED',fingerprint:f}};
  const prerequisiteMap=[
    ['SP7_SUBSTANCES','substancje i właściwości',['ELEMENTS_118','SUBSTANCES']],
    ['SP7_MIXTURES','mieszaniny i metody rozdzielania',['SUBSTANCES']],
    ['SP7_ATOM','atom, izotop, jon, układ okresowy',['ELEMENTS_118','ISOTOPES']],
    ['SP7_VALENCE','wartościowość i wzory',['ELEMENTS_118','SUBSTANCES','STRUCTURE']],
    ['SP7_REACTIONS','równania i bilansowanie',['REACTIONS','ELEMENTS_118']],
    ['SP7_O2_H2_AIR','tlen, wodór, powietrze i tlenki',['REACTIONS','SUBSTANCES']],
    ['SP7_WATER_SOLUTIONS','woda, roztwory, stężenie',['SUBSTANCES','STOICH']],
    ['SP7_ACIDS_BASES','kwasy, zasady, pH',['SUBSTANCES','EDUCATION_MASS_V308']],
    ['SP7_SALTS','sole i reakcje strąceniowe',['SUBSTANCES','REACTIONS','EDUCATION_MASS_V308']],
    ['SP8_CARBON','węgiel, węglowodory i pochodne',['STRUCTURE','REACTIONS']],
    ['SP8_BIOCHEM','cukry, białka, tłuszcze',['STRUCTURE','EDUCATION_MASS_V308']],
    ['LO_MOL','mol i stała Avogadra',['STOICH','EDUCATION_MASS_V308']],
    ['LO_STOICH','stechiometria masowa/molowa/objętościowa',['STOICH','REACTIONS']],
    ['LO_REDOX','stopnie utlenienia i redoks',['ELEMENTS_118','REACTIONS']],
    ['LO_EQUILIBRIUM','równowagi chemiczne',['EDUCATION_MASS_V308']],
    ['LO_ORGANIC','nomenklatura, izomeria, reakcje organiczne',['STRUCTURE','REACTIONS']],
    ['LO_BIOCHEM','biomolekuły i zależności struktura-funkcja',['STRUCTURE']]
  ].map(([id,topic,requires])=>({id,topic,requires,level:id.startsWith('SP')?'P0':'P1',source}));
  const equationSkills=[
    {id:'EQ_BALANCE_MOLECULAR',mode:'molecular',skills:['identify_reactants_products','mass_conservation','integer_coefficients']},
    {id:'EQ_BALANCE_IONIC',mode:'ionic',skills:['charge_conservation','spectator_ions','net_ionic_equation']},
    {id:'EQ_CLASSIFY',skills:['synthesis','decomposition','displacement','double_displacement','combustion','neutralization','precipitation','redox']},
    {id:'EQ_ENERGY',skills:['exo','endo','catalyst']},
    {id:'EQ_CONDITIONS',skills:['temperature','light','catalyst','aqueous','gas_evolution']}
  ].map(x=>({...x,source}));
  const stoichTasks=[
    {id:'ST_MOLAR_MASS',inputs:['formula'],outputs:['molar_mass']},
    {id:'ST_MASS_MOLES',inputs:['mass','molar_mass'],outputs:['amount_of_substance']},
    {id:'ST_MOLES_MASS',inputs:['amount_of_substance','molar_mass'],outputs:['mass']},
    {id:'ST_PARTICLES_MOLES',inputs:['amount_of_substance'],outputs:['particles'],constant:'N_A'},
    {id:'ST_SOLUTION_C',inputs:['amount','volume'],outputs:['molar_concentration']},
    {id:'ST_DILUTION',inputs:['c1','v1','c2'],outputs:['v2'],relation:'c1*v1=c2*v2'},
    {id:'ST_LIMITING_REAGENT',inputs:['balanced_equation','reactant_amounts'],outputs:['limiting_reagent','product_amount']},
    {id:'ST_YIELD',inputs:['theoretical','actual'],outputs:['percent_yield']},
    {id:'ST_GAS',inputs:['amount_of_substance','conditions'],outputs:['volume'],note:'conditions must be explicit'},
    {id:'ST_COMPOSITION',inputs:['mass_percent'],outputs:['empirical_formula','molecular_formula']}
  ].map(x=>({...x,source}));
  const experiments=[
    ['EXP_DENSITY','gęstość substancji','masa + objętość','pomiar','obliczenie','BHP'],
    ['EXP_SEPARATION','sączenie','mieszanina stała/ciecz','filtracja','obserwacja','BHP'],
    ['EXP_CRYSTALLIZATION','krystalizacja','roztwór','odparowanie/chłodzenie','kryształy','BHP'],
    ['EXP_DISTILLATION','destylacja','ciecz/ciecz lub roztwór','ogrzewanie + kondensacja','frakcja','BHP'],
    ['EXP_DIFFUSION','dyfuzja','substancja + ośrodek','obserwacja ruchu','wniosek','BHP'],
    ['EXP_O2','otrzymywanie tlenu','źródło tlenu','reakcja/rozkład','podtrzymywanie spalania','BHP'],
    ['EXP_H2','otrzymywanie wodoru','metal + kwas','reakcja','właściwości gazu','BHP'],
    ['EXP_CO2','otrzymywanie CO2','węglan + kwas','reakcja','gaszenie/płomień','BHP'],
    ['EXP_ACID_BASE','kwas-zasada','wskaźnik + roztwór','zmiana barwy','charakter roztworu','BHP'],
    ['EXP_PRECIPITATION','strącanie','dwa roztwory','reakcja jonowa','osad','BHP'],
    ['EXP_METAL_ACID','metal + kwas','metal + kwas','reakcja','wydzielanie gazu','BHP'],
    ['EXP_OXIDE','właściwości tlenków','wybrany tlenek','reakcja z wodą/kwasem','obserwacja','BHP'],
    ['EXP_PROTEIN','białko','produkt spożywczy','próba jakościowa','barwa/osad','BHP'],
    ['EXP_STARCH','skrobia','produkt spożywczy + jod','próba jakościowa','zmiana barwy','BHP'],
    ['EXP_DENATURATION','denaturacja/koagulacja','białko','czynnik fiz./chem.','zmiana właściwości','BHP']
  ].map(([id,title,materials,procedure,observation,safety])=>({id,title,materials,procedure,observation,safety,template:['problem','hypothesis','variables','equipment','procedure','observations','conclusion','safety'],source}));
  const elementCore=['H','C','N','O','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','Sn','I','Ba','Au','Hg','Pb'].map(symbol=>({symbol,levels:['SP7-8','LO'],requires:['ELEMENTS_118'],source}));
  const data={version:'3.09',source,priority:'P0_SP7-8_then_P1_LO_biochem',prerequisiteMap,equationSkills,stoichTasks,experiments,elementCore,policy:'append-only; introduced-once; do not re-search unchanged introduced records'};
  const added=[...prerequisiteMap,...equationSkills,...stoichTasks,...experiments,...elementCore].map(x=>mark(x.id,x));
  D.EDUCATION_MASS_V309=Object.freeze(data);
  E.EDUCATION_MASS_AUDIT_V309={run(){const d=D.EDUCATION_MASS_V309;return {version:'3.09',ok:d.prerequisiteMap.length>=17&&d.equationSkills.length===5&&d.stoichTasks.length===10&&d.experiments.length===15&&d.elementCore.length===24,counts:{prerequisites:d.prerequisiteMap.length,equationSkills:d.equationSkills.length,stoichTasks:d.stoichTasks.length,experiments:d.experiments.length,elementCore:d.elementCore.length,ledger:Object.keys(ledger.records).length},introduced:added.filter(x=>x.status==='INTRODUCED').length,skipped:added.filter(x=>x.status==='SKIP_ALREADY_INTRODUCED').length}}};
  E.modules=E.modules||{}; E.registry=E.registry||{}; E.modules.EDUCATION_MASS_V309='3.09'; E.registry.EDUCATION_MASS_V309={layer:'EDUCATION',owner:'CHE.DATA.EDUCATION_MASS_V309',depends:['EDUCATION_MASS_V308','ELEMENTS_118','SUBSTANCES','REACTIONS','STRUCTURE','STOICH'],policy:'append-only / introduced-once hard lock'};
})();

} catch (err) {
  try { console.warn('[CHE module 194]', err && err.message ? err.message : err); } catch(_){}
}

