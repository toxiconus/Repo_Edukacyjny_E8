

try {

(()=>{
  const E=window.CHE_ENGINE||window.CHE||{};
  const D=E.DATA=E.DATA||{};
  const src={id:'PL_CURRICULUM_2025_26_ZPE',type:'EDUCATIONAL_SOURCE',status:'SOURCE_BACKED',note:'Curriculum routing only; never upgrades scientific readiness.'};
  const elements=[
   ['H','Wodór','1','1','niemetal','palny; bardzo lekki','paliwo; przemysł chemiczny'],['C','Węgiel','6','14','niemetal','odmiany alotropowe; spalanie','materiały; paliwa; grafit'],['N','Azot','7','15','niemetal','gaz; główny składnik powietrza','atmosfera; nawozy'],['O','Tlen','8','16','niemetal','gaz; podtrzymuje spalanie','oddychanie; utlenianie'],['F','Fluor','9','17','halogen','bardzo reaktywny','związki fluoru; wymagany BHP'],['Na','Sód','11','1','metal','aktywny; reaguje z wodą','związki sodu'],['Mg','Magnez','12','2','metal','lekki; spalanie jasnym światłem','stopy; związki Mg'],['Al','Glin','13','13','metal','lekki; warstwa tlenkowa','stopy; materiały'],['Si','Krzem','14','14','półmetal','półprzewodnik; sieci kowalencyjne','elektronika; krzemiany'],['P','Fosfor','15','15','niemetal','odmiany alotropowe','nawozy; związki P'],['S','Siarka','16','16','niemetal','żółte ciało stałe; palna','kwas siarkowy; materiały'],['Cl','Chlor','17','17','halogen','gaz; silnie reaktywny','dezynfekcja; związki chlorkowe'],['K','Potas','19','1','metal','bardzo aktywny; reaguje z wodą','nawozy; związki K'],['Ca','Wapń','20','2','metal','aktywny metal; związki wapnia','budownictwo; organizm'],['Fe','Żelazo','26','8','metal','metal; korozja','stal; biologia'],['Cu','Miedź','29','11','metal','przewodzi prąd; charakterystyczna barwa','przewody; stopy'],['Zn','Cynk','30','12','metal','reaguje z kwasami','ochrona antykorozyjna; stopy'],['Br','Brom','35','17','halogen','ciecz; lotny; reaktywny','związki bromu; BHP'],['Ag','Srebro','47','11','metal','dobry przewodnik; jony Ag+ tworzą osady z Cl-','elektronika; związki Ag'],['I','Jod','53','17','halogen','ciało stałe; sublimuje','chemia analityczna; związki jodu'],['Ba','Bar','56','2','metal','aktywny; rozpuszczalne sole Ba wymagają BHP','związki baru']
  ].map(x=>({symbol:x[0],name:x[1],Z:+x[2],group:+x[3],class:x[4],keyProperties:x[5],uses:x[6],source:src.id,educationalOnly:true}));
  const ions=[['H+','H',1],['Na+','Na',1],['K+','K',1],['Mg2+','Mg',2],['Ca2+','Ca',2],['Al3+','Al',3],['NH4+','N',1],['Cl-','Cl',-1],['Br-','Br',-1],['I-','I',-1],['OH-','O',-1],['NO3-','N',-1],['SO4^2-','S',-2],['SO3^2-','S',-2],['CO3^2-','C',-2],['HCO3-','C',-1],['PO4^3-','P',-3],['S^2-','S',-2],['O^2-','O',-2],['Cu2+','Cu',2],['Fe2+','Fe',2],['Fe3+','Fe',3],['Ag+','Ag',1],['Ba2+','Ba',2]
  ].map(x=>({formula:x[0],element:x[1],charge:x[2],source:src.id}));
  const solubilityRules=[
   {id:'SOL_R01',rule:'NO3',condition:'all nitrates soluble',exceptions:[]},
   {id:'SOL_R02',rule:'Group1/NH4',condition:'salts of Li+, Na+, K+, NH4+ soluble',exceptions:[]},
   {id:'SOL_R03',rule:'Cl/Br/I',condition:'generally soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
   {id:'SOL_R04',rule:'SO4',condition:'generally soluble',exceptions:['Ba2+','Pb2+','Sr2+','Ca2+ (limited)']},
   {id:'SOL_R05',rule:'CO3',condition:'generally insoluble',exceptions:['Group1','NH4+']},
   {id:'SOL_R06',rule:'PO4',condition:'generally insoluble',exceptions:['Group1','NH4+']},
   {id:'SOL_R07',rule:'OH',condition:'generally insoluble',exceptions:['Group1','Ba2+','Sr2+','Ca2+ (limited)']},
   {id:'SOL_R08',rule:'S',condition:'generally insoluble',exceptions:['Group1','Group2','NH4+']}
  ];
  const examples=[
   ['AgCl','Ag+ + Cl-','osad'],['BaSO4','Ba2+ + SO4^2-','osad'],['CaCO3','Ca2+ + CO3^2-','osad'],['Cu(OH)2','Cu2+ + 2OH-','osad'],['Fe(OH)3','Fe3+ + 3OH-','osad'],['NaCl','Na+ + Cl-','rozpuszczalny'],['KNO3','K+ + NO3-','rozpuszczalny'],['NH4Cl','NH4+ + Cl-','rozpuszczalny'],['CaSO4','Ca2+ + SO4^2-','ograniczona rozpuszczalność'],['AgNO3','Ag+ + NO3-','rozpuszczalny']
  ].map(x=>({formula:x[0],ions:x[1],expected:x[2],source:src.id}));
  const reactions=[
   ['2H2 + O2 -> 2H2O','spalanie wodoru','redox','egzo'],['2Mg + O2 -> 2MgO','spalanie magnezu','synteza','egzo'],['C + O2 -> CO2','spalanie węgla','synteza','egzo'],['S + O2 -> SO2','spalanie siarki','synteza','egzo'],['4P + 5O2 -> 2P2O5','spalanie fosforu','synteza','egzo'],['2Na + 2H2O -> 2NaOH + H2','metal + woda','redox','egzo'],['CaO + H2O -> Ca(OH)2','tlenek zasadowy + woda','synteza','egzo'],['CO2 + H2O <-> H2CO3','tlenek kwasowy + woda','równowaga','warunkowa'],['HCl + NaOH -> NaCl + H2O','neutralizacja','kwas-zasada','egzo'],['H2SO4 + 2NaOH -> Na2SO4 + 2H2O','neutralizacja','kwas-zasada','egzo'],['Zn + 2HCl -> ZnCl2 + H2','metal + kwas','redox','egzo'],['Fe + CuSO4 -> FeSO4 + Cu','wypieranie metalu','redox','egzo'],['AgNO3 + NaCl -> AgCl + NaNO3','strącanie','jonowa','brak oceny'],['CaCO3 + 2HCl -> CaCl2 + H2O + CO2','węglan + kwas','gazowanie','egzo'],['2H2O2 -> 2H2O + O2','rozkład','redox','katalizator MnO2'],['CH4 + 2O2 -> CO2 + 2H2O','spalanie metanu','redox','egzo'],['C2H5OH + 3O2 -> 2CO2 + 3H2O','spalanie etanolu','redox','egzo'],['CH3COOH + NaOH -> CH3COONa + H2O','neutralizacja organiczna','kwas-zasada','egzo'],['CH3COOH + C2H5OH <-> CH3COOC2H5 + H2O','estryfikacja','równowaga','H+'],['6CO2 + 6H2O -> C6H12O6 + 6O2','fotosynteza — zapis sumaryczny','biochemia','światło'],['C6H12O6 + 6O2 -> 6CO2 + 6H2O','oddychanie komórkowe — zapis sumaryczny','biochemia','egzo'],['CuSO4 + 2NaOH -> Cu(OH)2 + Na2SO4','strącanie wodorotlenku','jonowa','osad'],['FeCl3 + 3NaOH -> Fe(OH)3 + 3NaCl','strącanie wodorotlenku','jonowa','osad'],['2Al + 6HCl -> 2AlCl3 + 3H2','metal + kwas','redox','egzo'],['Mg + 2HCl -> MgCl2 + H2','metal + kwas','redox','egzo'],['CaCO3 -> CaO + CO2','rozkład termiczny','rozkład','endo'],['2NaHCO3 -> Na2CO3 + H2O + CO2','rozkład termiczny','rozkład','endo'],['N2 + 3H2 <-> 2NH3','synteza amoniaku','równowaga','katalizator'],['SO2 + 1/2O2 <-> SO3','utlenianie SO2','równowaga','katalizator'],['CO2 + Ca(OH)2 -> CaCO3 + H2O','próba na CO2','strącanie','osad']
  ].map((x,i)=>({id:'EDR'+String(i+1).padStart(3,'0'),equation:x[0],name:x[1],type:x[2],condition:x[3],source:src.id,canonicalRequired:true}));
  const experiments=[
   ['EXP01','Prawo zachowania masy','masa substratów vs produktów','waga; naczynie zamknięte','obserwacja masy; wniosek o zachowaniu masy','BHP'],
   ['EXP02','Rozdzielanie mieszaniny','sączenie/krystalizacja/destylacja','sprzęt filtracyjny lub destylacyjny','dobór metody do właściwości','BHP'],
   ['EXP03','pH roztworów','kwas/zasada/sól','wskaźnik lub pH-metr','barwa/wartość pH','ochrona oczu'],
   ['EXP04','Otrzymywanie H2','Zn + HCl(aq)','probówka; odczynnik; ujście gazu','wydzielanie gazu; test zgodny z procedurą szkolną','H2 palny'],
   ['EXP05','Otrzymywanie O2','rozkład H2O2','katalizator; naczynie; tlenomierz/test','wydzielanie O2','utleniacz'],
   ['EXP06','Aktywność metali','metal + kwas / sól','probówki','szybkość wydzielania H2 lub wypieranie metalu','BHP'],
   ['EXP07','Strącanie','AgNO3 + Cl-','probówki','powstanie osadu','AgNO3 — BHP'],
   ['EXP08','Wskaźniki naturalne','czerwona kapusta','ekstrakt wskaźnikowy','zmiana barwy z odczynem','BHP'],
   ['EXP09','Spalanie','wybrana substancja palna','palnik; osłona','energia; produkty spalania','ogień'],
   ['EXP10','Korozja','Fe w różnych warunkach','probówki; woda; powietrze','różna szybkość korozji','BHP'],
   ['EXP11','Ogniwo galwaniczne','dwa metale + elektrolit','elektrody; miernik','napięcie ogniwa','BHP'],
   ['EXP12','Chromatografia','barwniki roślinne','papier/roztwór rozwijający','rozdzielenie składników','rozpuszczalniki'],
   ['EXP13','Próba biuretowa','białko','Cu(II) + zasada','barwa kompleksu','BHP'],
   ['EXP14','Cukry redukujące','glukoza','odczynnik miedzi(II) w procedurze szkolnej','zmiana barwy/osad','BHP'],
   ['EXP15','Estryfikacja','etanol + kwas octowy','kwas katalityczny; ogrzewanie zgodne z procedurą','zapach produktu; równowaga','BHP']
  ].map(x=>({id:x[0],title:x[1],system:x[2],equipment:x[3],expected:x[4],safety:x[5],source:src.id}));
  const formulas=[
   {id:'F_MOLAR_MASS',name:'masa molowa',formula:'M=m/n',units:'g/mol'},
   {id:'F_AMOUNT',name:'liczba moli z masy',formula:'n=m/M',units:'mol'},
   {id:'F_PARTICLES',name:'liczba cząstek',formula:'N=n*N_A',units:'1'},
   {id:'F_MASS_FROM_N',name:'masa z liczby moli',formula:'m=n*M',units:'g'},
   {id:'F_C_MASS',name:'stężenie masowe procentowe',formula:'Cp=m_s/m_r*100%',units:'%'},
   {id:'F_C_MOLAR',name:'stężenie molowe',formula:'c=n/V',units:'mol/L'},
   {id:'F_DILUTION',name:'rozcieńczanie',formula:'c1*V1=c2*V2',units:'mol/L;L'},
   {id:'F_DENSITY',name:'gęstość',formula:'rho=m/V',units:'g/mL lub kg/m3'},
   {id:'F_YIELD',name:'wydajność',formula:'eta=m_real/m_theor*100%',units:'%'},
   {id:'F_GAS',name:'gaz doskonały',formula:'pV=nRT',units:'Pa;m3;mol;K'},
   {id:'F_POWIETRZE',name:'udział objętościowy gazu',formula:'phi=V_i/V_total',units:'1 lub %'}
  ];
  const organic=[
   ['alkohol','-OH','CH3OH','metanol'],['alkohol','-OH','C2H5OH','etanol'],['aldehyd','-CHO','HCHO','metanal'],['aldehyd','-CHO','CH3CHO','etanal'],['keton','>C=O','CH3COCH3','propanon'],['kwas karboksylowy','-COOH','CH3COOH','kwas etanowy'],['amina','-NH2','CH3NH2','metyloamina'],['aminokwas','-NH2 + -COOH','NH2CH2COOH','glicyna'],['ester','-COO-','CH3COOC2H5','etanian etylu'],['węglowodór','C=C','C2H4','eten'],['węglowodór','C#C','C2H2','etyn'],['węglowodór aromatyczny','pierścień aromatyczny','C6H6','benzen']
  ].map((x,i)=>({id:'ORG'+String(i+1).padStart(2,'0'),class:x[0],group:x[1],formula:x[2],name:x[3],source:src.id}));
  const biomolecules=[
   {id:'BIO01',name:'glukoza',formula:'C6H12O6',type:'monosacharyd',groups:['-OH','aldehydowa w formie łańcuchowej'],role:'źródło energii'},
   {id:'BIO02',name:'fruktoza',formula:'C6H12O6',type:'monosacharyd',groups:['-OH','ketonowa w formie łańcuchowej'],role:'cukier prosty'},
   {id:'BIO03',name:'sacharoza',formula:'C12H22O11',type:'disacharyd',groups:['acetale/glikozydowe'],role:'cukier złożony'},
   {id:'BIO04',name:'skrobia',formula:'(C6H10O5)n',type:'polisacharyd',groups:['wiązania glikozydowe'],role:'materiał zapasowy roślin'},
   {id:'BIO05',name:'celuloza',formula:'(C6H10O5)n',type:'polisacharyd',groups:['wiązania glikozydowe'],role:'budulec ścian komórkowych'},
   {id:'BIO06',name:'glicyna',formula:'NH2CH2COOH',type:'aminokwas',groups:['-NH2','-COOH'],role:'składnik białek'},
   {id:'BIO07',name:'alanina',formula:'CH3CH(NH2)COOH',type:'aminokwas',groups:['-NH2','-COOH'],role:'składnik białek'},
   {id:'BIO08',name:'peptyd',formula:'ogólny',type:'oligopeptyd',groups:['wiązanie peptydowe'],role:'model budowy białek'},
   {id:'BIO09',name:'trigliceryd',formula:'ogólny',type:'tłuszcz',groups:['estry'],role:'magazyn energii'},
   {id:'BIO10',name:'ATP',formula:'C10H16N5O13P3',type:'nukleotyd',groups:['fosforany'],role:'nośnik energii komórkowej'}
  ].map(x=>({...x,source:src.id,educationalOnly:true}));
  const packageData={version:'3.07',source:src,elements,ions,solubilityRules,solubilityExamples:examples,reactions,experiments,formulas,organic,biomolecules};
  D.EDUCATION_MASS_V307=Object.freeze(packageData);
  E.EDUCATION_MASS_AUDIT_V307={run(){const d=D.EDUCATION_MASS_V307;const checks=[['elements>=21',d.elements.length>=21],['ions>=24',d.ions.length>=24],['solubilityRules>=8',d.solubilityRules.length>=8],['solubilityExamples>=10',d.solubilityExamples.length>=10],['reactions>=30',d.reactions.length>=30],['experiments>=15',d.experiments.length>=15],['formulas>=10',d.formulas.length>=10],['organic>=12',d.organic.length>=12],['biomolecules>=10',d.biomolecules.length>=10]];return {version:'3.07',ok:checks.every(x=>x[1]),checks,counts:{elements:d.elements.length,ions:d.ions.length,solubilityRules:d.solubilityRules.length,solubilityExamples:d.solubilityExamples.length,reactions:d.reactions.length,experiments:d.experiments.length,formulas:d.formulas.length,organic:d.organic.length,biomolecules:d.biomolecules.length}};}};
  E.modules=E.modules||{};E.modules.EDUCATION_MASS_V307='3.07';E.registry=E.registry||{};E.registry.EDUCATION_MASS_V307={layer:'EDUCATION',owner:'CHE.EDUCATION_MASS_V307',depends:['ELEMENTS_118','SUBSTANCES','REACTIONS','STRUCTURE','STOICH']};
  E.EDUCATION_PRIORITY_V303=E.EDUCATION_PRIORITY_V303||{};E.EDUCATION_PRIORITY_V303.currentBatch='v3.07';E.EDUCATION_PRIORITY_V303.completed=E.EDUCATION_PRIORITY_V303.completed||[];E.EDUCATION_PRIORITY_V303.completed.push('P0/P1 mass education package v3.07');
})();

} catch (err) {
  try { console.warn('[CHE module 192]', err && err.message ? err.message : err); } catch(_){}
}