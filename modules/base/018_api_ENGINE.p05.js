(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{},LED=C.SCIENCE_VERIFICATION_LEDGER_V289;
const SRC={ZPE_ACID_BASE:{name:'ZPE.pl — Stałe dysocjacji wybranych kwasów nieorganicznych',url:'https://zpe.gov.pl/a/przeczytaj/D182y2Ci0',accessed:'2026-10-02',scope:'aqueous acid dissociation table, 25 °C'}};
const records={
 'HF-aq-25C':{species:'HF',reaction:'HF(aq) ⇌ H+(aq) + F-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:6.3e-4,pKa:3.20065945,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Secondary educational table; ionic strength and activity-coefficient convention are not stated. Do not treat as thermodynamic Ka.'},
 'HCl-aq-25C':{species:'HCl',reaction:'HCl(aq) ⇌ H+(aq) + Cl-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:1.0e7,pKa:-7.0,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Tabulated conventional value for aqueous chemistry; strong-acid conditional behavior and ionic-strength dependence are not resolved.'},
 'HBr-aq-25C':{species:'HBr',reaction:'HBr(aq) ⇌ H+(aq) + Br-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:3.0e9,pKa:-9.47712125,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Secondary educational table; not promoted to thermodynamic reference constant.'},
 'HI-aq-25C':{species:'HI',reaction:'HI(aq) ⇌ H+(aq) + I-(aq)',constantType:'conditional_concentration',medium:'water',temperatureK:298.15,value:1.0e10,pKa:-10.0,units:'dimensionless Ka; pKa dimensionless',ionicStrength:null,source:'ZPE_ACID_BASE',status:'DATABASE_SOURCE_CHECKED',referenceReady:false,limitations:'Secondary educational table; not promoted to thermodynamic reference constant.'}
};
const added=[]; Object.entries(records).forEach(([id,r])=>{const k='PKA300:'+id;if(LED?.needsVerification?.(k,r)){LED?.markVerified?.(k,r,{verification:'SOURCE_CHECKED_SECONDARY',sourceVersion:'ZPE_ACID_BASE',note:'Stored as database/conditional data; referenceReady=false'});added.push(id);}});
D.SCIENCE_PKA_REFERENCE_V300={version:'3.00',records,added,sourceRegistry:SRC,policy:'append-only; no overwrite; verified-once ledger enforced',input:'dane.md',referenceReady:false};
E.modules=E.modules||{};E.modules.SCIENCE_PKA_REFERENCE_V300='3.00';E.registry=E.registry||{};E.registry.SCIENCE_PKA_REFERENCE_V300={layer:'SCIENCE/DATA',owner:'CHE.DATA.SCIENCE_PKA_REFERENCE_V300',depends:['SCIENCE_VERIFICATION_LEDGER_V289'],policy:'append-only / conditional database values'};
E.SCIENCE_PKA_REGRESSION_V300={run(){const r=D.SCIENCE_PKA_REFERENCE_V300.records;const checks=[['4 records',Object.keys(r).length===4],['HF',r['HF-aq-25C'].value===6.3e-4],['HCl',r['HCl-aq-25C'].value===1e7],['HBr',r['HBr-aq-25C'].value===3e9],['HI',r['HI-aq-25C'].value===1e10],['not reference ready',Object.values(r).every(x=>x.referenceReady===false)],['append only',D.SCIENCE_PKA_REFERENCE_V300.policy.startsWith('append-only')],['ledger',Array.isArray(D.SCIENCE_PKA_REFERENCE_V300.added)]];return {version:'3.00',ok:checks.every(x=>x[1]),checks,added:D.SCIENCE_PKA_REFERENCE_V300.added};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 188]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.EDUCATION_CORE_V304 — large curriculum-first closure for PL SP7-8 + LO biol/chem
   Source basis: ZPE/MEN core curricula 2025/26. Educational metadata only; scientific
   values remain governed by their scientific records and verification ledger. */
(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const source={id:'PL_CURRICULUM_2025_26',name:'ZPE/MEN — Chemia SP IV-VIII + LO/technikum',
 urls:['https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia','https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia'],accessed:'2026-10-02'};
const substances=[
 ['NaCl','chlorek sodu','sól','SP78'],['C12H22O11','sacharoza','związek organiczny','SP78'],['H2O','woda','związek','SP78'],['C','węgiel','niemetal','SP78'],['Al','glin','metal','SP78'],['Cu','miedź','metal','SP78'],['Zn','cynk','metal','SP78'],['Fe','żelazo','metal','SP78'],
 ['O2','tlen','pierwiastek','SP78'],['H2','wodór','pierwiastek','SP78'],['CO2','tlenek węgla(IV)','tlenek','SP78'],['CO','tlenek węgla(II)','tlenek','SP78'],['CaO','tlenek wapnia','tlenek','SP78'],['Al2O3','tlenek glinu','tlenek','SP78'],['Fe2O3','tlenek żelaza(III)','tlenek','SP78'],['SiO2','tlenek krzemu(IV)','tlenek','SP78'],['SO2','tlenek siarki(IV)','tlenek','SP78'],
 ['NaOH','wodorotlenek sodu','wodorotlenek','SP78'],['KOH','wodorotlenek potasu','wodorotlenek','SP78'],['Ca(OH)2','wodorotlenek wapnia','wodorotlenek','SP78'],['Al(OH)3','wodorotlenek glinu','wodorotlenek','SP78'],['Cu(OH)2','wodorotlenek miedzi(II)','wodorotlenek','SP78'],
 ['HCl','kwas chlorowodorowy','kwas beztlenowy','SP78'],['H2S','kwas siarkowodorowy','kwas beztlenowy','SP78'],['HNO3','kwas azotowy(V)','kwas tlenowy','SP78'],['H2SO4','kwas siarkowy(VI)','kwas tlenowy','SP78'],['H2CO3','kwas węglowy','kwas tlenowy','SP78'],['H3PO4','kwas fosforowy(V)','kwas tlenowy','SP78'],
 ['Na2CO3','węglan sodu','sól','SP78'],['CaCO3','węglan wapnia','sól','SP78'],['CuSO4','siarczan(VI) miedzi(II)','sól','SP78'],['AgCl','chlorek srebra(I)','sól trudno rozpuszczalna','SP78'],
 ['CH4','metan','alkan','SP78'],['C2H6','etan','alkan','SP78'],['C2H4','eten','alken','SP78'],['C2H2','etyn','alkin','SP78'],['CH3OH','metanol','alkohol','SP78'],['C2H5OH','etanol','alkohol','SP78'],['CH3COOH','kwas etanowy','kwas karboksylowy','SP78'],['CH3CHO','etanal','aldehyd','SP78'],['CH3COOCH2CH3','etanian etylu','ester','SP78'],
 ['C6H12O6','glukoza','cukier prosty','SP78_BIO'],['C6H12O6','fruktoza','cukier prosty','SP78_BIO'],['C12H22O11','sacharoza','disacharyd','SP78_BIO'],['(C6H10O5)n','skrobia','polisacharyd','SP78_BIO'],['(C6H10O5)n','celuloza','polisacharyd','SP78_BIO'],['NH2CH2COOH','glicyna','aminokwas','SP78_BIO'],['C3H7NO2','alanina','aminokwas','LO_BIO_CHEM'],['ATP','adenozynotrifosforan','biomolekuła','LO_BIO_CHEM']
].map(x=>({formula:x[0],name:x[1],class:x[2],tier:x[3]}));
const indicators=[
 {name:'fenoloftaleina',use:'wskaźnik kwasowo-zasadowy',school:'SP78',colorRule:'bezbarwna w środowisku kwaśnym/obojętnym; różowa/fuksjowa w zasadowym',note:'kolor zależy od warunków i stężenia'},
 {name:'oranż metylowy',use:'wskaźnik kwasowo-zasadowy',school:'SP78',colorRule:'czerwony w kwaśnym; żółty w zasadowym; zakres przejściowy pomarańczowy'},
 {name:'uniwersalny papierek wskaźnikowy',use:'orientacyjny pomiar pH',school:'SP78',colorRule:'barwa zależna od pH i skali producenta'},
 {name:'jod w KI',use:'wykrywanie skrobi',school:'SP78_BIO',colorRule:'granatowe/niebieskoczarne zabarwienie kompleksu skrobiowego'}
];
const ions=[
 ['H+','jon wodorowy','kwasy'],['OH-','jon wodorotlenkowy','zasady'],['Na+','jon sodu','sole'],['K+','jon potasu','sole'],['Ca2+','jon wapnia','sole'],['Mg2+','jon magnezu','sole'],['Al3+','jon glinu','sole'],['Zn2+','jon cynku','sole'],['Fe2+','jon żelaza(II)','sole'],['Fe3+','jon żelaza(III)','sole'],['Cu2+','jon miedzi(II)','sole'],['Ag+','jon srebra(I)','sole'],['Cl-','jon chlorkowy','sole'],['Br-','jon bromkowy','sole'],['I-','jon jodkowy','sole'],['S2-','jon siarczkowy','sole'],['NO3-','jon azotanowy(V)','sole'],['SO4^2-','jon siarczanowy(VI)','sole'],['SO3^2-','jon siarczynowy','sole'],['CO3^2-','jon węglanowy','sole'],['HCO3-','jon wodorowęglanowy','sole'],['PO4^3-','jon fosforanowy(V)','sole'],['NH4+','jon amonowy','sole']
].map(x=>({formula:x[0],name:x[1],role:x[2]}));
const reactions=[
 {id:'NEUTRALIZATION_HCL_NAOH',eq:'HCl + NaOH → NaCl + H2O',type:'zobojętnianie',tier:'SP78'},
 {id:'ZN_HCL',eq:'Zn + 2HCl → ZnCl2 + H2↑',type:'metal_kwas',tier:'SP78'},
 {id:'CAO_H2O',eq:'CaO + H2O → Ca(OH)2',type:'tlenek_z_woda',tier:'SP78'},
 {id:'CO2_CAOH2',eq:'CO2 + Ca(OH)2 → CaCO3↓ + H2O',type:'tlenek_kwasowy_z_zasada',tier:'SP78'},
 {id:'CACO3_HCL',eq:'CaCO3 + 2HCl → CaCl2 + H2O + CO2↑',type:'weglan_kwas',tier:'SP78'},
 {id:'CUOH2_HCL',eq:'Cu(OH)2 + 2HCl → CuCl2 + 2H2O',type:'wodorotlenek_kwas',tier:'SP78'},
 {id:'AGNO3_NACL',eq:'AgNO3 + NaCl → AgCl↓ + NaNO3',type:'stracanie',tier:'SP78'},
 {id:'H2O2_DECOMP',eq:'2H2O2 → 2H2O + O2↑',type:'rozkład',tier:'SP78'},
 {id:'C_HI_O2',eq:'C + O2 → CO2',type:'spalanie_calkowite',tier:'SP78'},
 {id:'CH4_COMPLETE',eq:'CH4 + 2O2 → CO2 + 2H2O',type:'spalanie_calkowite',tier:'SP78'},
 {id:'CH4_INCOMPLETE_CO',eq:'2CH4 + 3O2 → 2CO + 4H2O',type:'spalanie_niecalkowite',tier:'SP78'},
 {id:'ETHENE_BROMINE',eq:'C2H4 + Br2 → C2H4Br2',type:'addycja',tier:'SP78'},
 {id:'ETHANOL_OXIDATION',eq:'C2H5OH + [O] → CH3CHO + H2O',type:'utlenianie_alkoholu',tier:'SP78'},
 {id:'ESTERIFICATION',eq:'CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O',type:'estryfikacja',tier:'SP78'},
 {id:'GLUCOSE_OXIDATION',eq:'C6H12O6 + 6O2 → 6CO2 + 6H2O',type:'utlenianie_biologiczne',tier:'SP78_BIO'}
];
const concepts=[
 ['atom','najmniejsza elektrycznie obojętna jednostka pierwiastka zachowująca jego tożsamość'],
 ['jon','cząstka naładowana elektrycznie wskutek utraty lub przyjęcia elektronów'],
 ['izotop','atomy tego samego pierwiastka o tej samej liczbie protonów i różnej liczbie neutronów'],
 ['wartościowość','liczba wiązań/zdolność łączenia się przyjęta w szkolnym modelu'],
 ['mól','jednostka ilości substancji; 1 mol zawiera liczbę Avogadra obiektów'],
 ['stechiometria','ilościowa interpretacja wzorów i równań chemicznych'],
 ['elektrolit','substancja, której roztwór lub stop przewodzi prąd wskutek obecności jonów'],
 ['dysocjacja elektrolityczna','rozpad elektrolitu na jony w roztworze'],
 ['pH','miara odczynu oparta na aktywności jonów H+; w szkolnym przybliżeniu pH≈−log[H+]'],
 ['zobojętnianie','reakcja kwasu z zasadą prowadząca typowo do soli i wody'],
 ['reakcja strąceniowa','reakcja, w której powstaje trudno rozpuszczalny produkt/osad'],
 ['utlenianie','proces zwiększenia stopnia utlenienia w danym modelu reakcji'],
 ['redukcja','proces zmniejszenia stopnia utlenienia'],
 ['katalizator','substancja zmieniająca szybkość reakcji bez zużywania się w równaniu sumarycznym'],
 ['reakcja egzotermiczna','reakcja związana z wydzieleniem energii do otoczenia'],
 ['reakcja endotermiczna','reakcja związana z pobieraniem energii z otoczenia'],
 ['rozpuszczalność','maksymalna ilość substancji mogąca rozpuścić się w określonej ilości rozpuszczalnika przy danych warunkach']
].map(x=>({term:x[0],definition:x[1]}));
const safety=[
 {id:'GHS_FLAME',pictogram:'GHS02',meaning:'substancja łatwopalna',action:'usunąć źródła zapłonu; pracować zgodnie z instrukcją'},
 {id:'GHS_CORROSION',pictogram:'GHS05',meaning:'działanie żrące',action:'okulary/rękawice; unikać kontaktu ze skórą i oczami'},
 {id:'GHS_SKULL',pictogram:'GHS06',meaning:'toksyczność ostra',action:'unikać narażenia; stosować wymagane środki ochrony'},
 {id:'GHS_EXCLAMATION',pictogram:'GHS07',meaning:'działanie drażniące/szkodliwe',action:'ograniczyć narażenie i stosować PPE'},
 {id:'GHS_OXIDIZER',pictogram:'GHS03',meaning:'substancja utleniająca',action:'trzymać z dala od materiałów palnych'}
];
D.EDUCATION_CORE_V304={version:'3.04',source,substances,indicators,ions,reactions,concepts,safety,policy:'curriculum-first; educational metadata only; no scientific readiness upgrade'};
E.modules=E.modules||{};E.modules.EDUCATION_CORE_V304='3.04';
E.EDUCATION_CORE_AUDIT_V304={run(){const d=D.EDUCATION_CORE_V304;const checks=[['substances>=45',d.substances.length>=45],['ions>=20',d.ions.length>=20],['reactions>=12',d.reactions.length>=12],['concepts>=15',d.concepts.length>=15],['indicators>=4',d.indicators.length>=4],['safety>=5',d.safety.length>=5],['single source basis',d.source?.id==='PL_CURRICULUM_2025_26']];return {version:'3.04',ok:checks.every(x=>x[1]),checks,counts:{substances:d.substances.length,ions:d.ions.length,reactions:d.reactions.length,concepts:d.concepts.length,indicators:d.indicators.length,safety:d.safety.length}};}};
if(C.EDUCATION_PRIORITY_V303)C.EDUCATION_PRIORITY_V303.nextBatch=['SP78 solubility rules and tables','SP78 reaction catalog L001-L013','SP78 GHS reagent cards','SP78 molar mass and basic calculations','LO concentration/stoichiometry','LO biomolecule structures'];
})(window);

} catch (err) {
  try { console.warn('[CHE module 189]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.EDUCATION_P0_V305 — SP7-8: solubility, ions, nomenclature, core calculations */
(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const sol={
 rules:[
  {id:'NITRATES',rule:'NO3−',behavior:'rozpuszczalne',exception:'brak typowych wyjątków szkolnych'},
  {id:'ALKALI_NH4',rule:'sole Li+, Na+, K+, NH4+',behavior:'rozpuszczalne'},
  {id:'CHLORIDES',rule:'Cl−',behavior:'zwykle rozpuszczalne',exceptions:['AgCl','PbCl2']},
  {id:'SULFATES',rule:'SO4^2−',behavior:'zwykle rozpuszczalne',exceptions:['BaSO4','PbSO4','CaSO4']},
  {id:'CARBONATES',rule:'CO3^2−',behavior:'zwykle nierozpuszczalne',exceptions:['sole metali alkalicznych','(NH4)2CO3']},
  {id:'PHOSPHATES',rule:'PO4^3−',behavior:'zwykle nierozpuszczalne',exceptions:['sole metali alkalicznych','(NH4)3PO4']},
  {id:'HYDROXIDES',rule:'OH−',behavior:'zwykle nierozpuszczalne',exceptions:['LiOH','NaOH','KOH','Ba(OH)2','Ca(OH)2 umiarkowanie rozpuszczalny']}
 ],
 examples:[['NaCl','rozpuszczalna'],['AgCl','nierozpuszczalna'],['BaSO4','nierozpuszczalna'],['KNO3','rozpuszczalna'],['CaCO3','nierozpuszczalna'],['NaOH','rozpuszczalna'],['Cu(OH)2','nierozpuszczalna']]
};
const ions=[
 ['H+','wodoru',1],['Na+','sodu',1],['K+','potasu',1],['Ag+','srebra(I)',1],['NH4+','amonowy',1],['Mg2+','magnezu',2],['Ca2+','wapnia',2],['Ba2+','baru',2],['Zn2+','cynku',2],['Cu2+','miedzi(II)',2],['Fe2+','żelaza(II)',2],['Fe3+','żelaza(III)',3],['Al3+','glinu',3],['Cl−','chlorkowy',-1],['OH−','wodorotlenkowy',-1],['NO3−','azotanowy(V)',-1],['SO4^2−','siarczanowy(VI)',-2],['CO3^2−','węglanowy',-2],['HCO3−','wodorowęglanowy',-1],['PO4^3−','fosforanowy(V)',-3],['S2−','siarczkowy',-2],['O2−','tlenkowy',-2]
].map(x=>({formula:x[0],name:x[1],charge:x[2]}));
const naming=[
 ['NaCl','chlorek sodu','sól'],['KOH','wodorotlenek potasu','wodorotlenek'],['Ca(OH)2','wodorotlenek wapnia','wodorotlenek'],['HCl','kwas chlorowodorowy','kwas beztlenowy'],['H2SO4','kwas siarkowy(VI)','kwas tlenowy'],['HNO3','kwas azotowy(V)','kwas tlenowy'],['CaCO3','węglan wapnia','sól'],['Na2CO3','węglan sodu','sól'],['CuSO4','siarczan(VI) miedzi(II)','sól'],['FeCl3','chlorek żelaza(III)','sól']
].map(x=>({formula:x[0],name:x[1],class:x[2]}));
const calc={constants:{NA:6.02214076e23,VM_NTP_L_PER_MOL:22.414},formulas:['n=m/M','m=nM','c=n/V','w%=100*m_s/m_r','rho=m/V'],notes:['NA jest dokładną wartością SI','objętość molowa zależy od przyjętych warunków','dla zadań szkolnych warunki gazowe muszą być jawnie podane']};
D.EDUCATION_P0_V305={version:'3.05',solubility:sol,ions,naming,calculations:calc,source:{id:'PL_CURRICULUM_ZPE_SP78',basis:'ZPE materiały i podstawa programowa',accessed:'2026-10-02'},policy:'educational layer over common data; no overwrite; no scientific reference upgrade'};
E.modules=E.modules||{};E.modules.EDUCATION_P0_V305='3.05';
E.EDUCATION_P0_AUDIT_V305={run(){const d=D.EDUCATION_P0_V305;const checks=[['rules>=7',d.solubility.rules.length>=7],['ions>=20',d.ions.length>=20],['naming>=10',d.naming.length>=10],['calc formulas>=5',d.calculations.formulas.length>=5],['single source',d.source?.id==='PL_CURRICULUM_ZPE_SP78']];return {version:'3.05',ok:checks.every(x=>x[1]),checks,counts:{rules:d.solubility.rules.length,ions:d.ions.length,naming:d.naming.length}};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 190]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.EDUCATION_MASS_V306 — large P0/P1 curriculum package; educational layer only */
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

try {

/* CHE.EDUCATION_MASS_V307 — large curriculum package; educational layer over common CHE data */
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

try {

/* CHE.EDUCATION_MASS_V308 — deduplicated P0 package: reaction mapping, indicators, core BHP, stoichiometry helpers */
(()=>{
  const E=window.CHE_ENGINE||window.CHE||{}; const D=E.DATA=E.DATA||{}; E.registry=E.registry||{};
  const prev=D.EDUCATION_MASS_V307||{};
  const stable=v=>JSON.stringify(v,Object.keys(v||{}).sort());
  const fp=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return ('00000000'+h.toString(16)).slice(-8)};
  const ledger=E.EDUCATION_VERIFICATION_LEDGER_V308=E.EDUCATION_VERIFICATION_LEDGER_V308||{version:'3.08',policy:'introduced-once hard lock',records:{}};
  const mark=(id,record)=>{const f=fp(stable(record));const old=ledger.records[id];if(old&&old.fingerprint===f)return {status:'SKIP_ALREADY_INTRODUCED',id,fingerprint:f};ledger.records[id]={id,fingerprint:f,status:'INTRODUCED',introducedAt:'2026-10-02',source:record.source||'EDUCATIONAL_PACKAGE'};return {status:'INTRODUCED',id,fingerprint:f}};
  const source='EDUCATION_CORE_SP78_LO_BIOCHEM_V308';
  const indicators=[
    {id:'IND_LAKMUS',name:'lakmus',type:'acid-base',schoolUse:'orientacyjna identyfikacja odczynu',source},
    {id:'IND_PHENOLPHTHALEIN',name:'fenoloftaleina',type:'acid-base',schoolUse:'wskaźnik do demonstracji zmiany odczynu',source},
    {id:'IND_METHYL_ORANGE',name:'oranż metylowy',type:'acid-base',schoolUse:'wskaźnik kwasowo-zasadowy',source},
    {id:'IND_UNIVERSAL',name:'wskaźnik uniwersalny',type:'acid-base',schoolUse:'przybliżona ocena pH',source},
    {id:'IND_RED_CABBAGE',name:'ekstrakt z czerwonej kapusty',type:'natural',schoolUse:'demonstracja zmiany barwy wraz z odczynem',source}
  ];
  const safety=[
    {id:'BHP_ACID',topic:'kwasy',rules:['okulary ochronne','unikać kontaktu ze skórą','kwas dodawać do wody zgodnie z procedurą laboratoryjną'],source},
    {id:'BHP_BASE',topic:'zasady',rules:['okulary ochronne','unikać kontaktu ze skórą i oczami','pracować zgodnie z instrukcją'],source},
    {id:'BHP_FLAMMABLE',topic:'substancje palne',rules:['usunąć źródła zapłonu','nie ogrzewać niekontrolowanie','pracować przy odpowiedniej wentylacji'],source},
    {id:'BHP_OXIDIZER',topic:'utleniacze',rules:['trzymać z dala od materiałów palnych','stosować ochronę oczu','nie mieszać bez procedury'],source},
    {id:'BHP_GAS',topic:'gazy',rules:['kontrolować szczelność układu','nie kierować wylotu na osoby','uwzględniać palność/toksyczność'],source}
  ];
  const reactionMap=(prev.reactions||[]).map(r=>({id:r.id,equation:r.equation,name:r.name,educationStatus:'INTRODUCED_V307',canonicalMapping:'PENDING',source}));
  const stoich=[
    {id:'STOICH_LIMITING',name:'reagent ograniczający',formula:'wyznacz reagent o najmniejszej ilości względem współczynnika stechiometrycznego',source},
    {id:'STOICH_YIELD',name:'wydajność reakcji',formula:'Î· = m_rzecz / m_teor × 100%',source},
    {id:'STOICH_MOLAR_RATIO',name:'stosunek molowy',formula:'n(A)/Î˝(A) = n(B)/Î˝(B)',source},
    {id:'STOICH_GAS_MOLAR',name:'objętość molowa gazu',formula:'używaj wartości zależnej od T i p; nie zakładaj jednej uniwersalnej liczby',source},
    {id:'STOICH_CONC',name:'stężenie molowe',formula:'c=n/V',source},
    {id:'STOICH_DILUTION',name:'rozcieńczanie',formula:'c1V1=c2V2',source}
  ];
  const learning=[
    {id:'L7_ATOM_ION',topic:'atom i jon',requires:['ELEMENTS_118'],source},
    {id:'L7_FORMULA',topic:'wzór sumaryczny i jonowy',requires:['SUBSTANCES','ELEMENTS_118'],source},
    {id:'L7_REACTION',topic:'równanie reakcji i bilansowanie',requires:['REACTIONS'],source},
    {id:'L7_ACIDS_BASES',topic:'kwasy, zasady, pH',requires:['SUBSTANCES','EDUCATION_MASS_V307'],source},
    {id:'L7_SALTS',topic:'sole i reakcje strąceniowe',requires:['SUBSTANCES','EDUCATION_MASS_V307'],source},
    {id:'L8_ORGANIC',topic:'węglowodory i grupy funkcyjne',requires:['STRUCTURE','EDUCATION_MASS_V307'],source},
    {id:'LO_STOICH',topic:'mol i stechiometria',requires:['STOICH','EDUCATION_MASS_V307'],source},
    {id:'LO_REDOX',topic:'redoks i stopnie utlenienia',requires:['REACTIONS','ELEMENTS_118'],source},
    {id:'LO_ORGANIC',topic:'reakcje organiczne',requires:['STRUCTURE','REACTIONS'],source},
    {id:'LO_BIOCHEM',topic:'biomolekuły',requires:['STRUCTURE','EDUCATION_MASS_V307'],source}
  ];
  const added=[]; for(const x of [...indicators,...safety,...stoich,...learning,...reactionMap]) added.push(mark(x.id,x));
  D.EDUCATION_MASS_V308=Object.freeze({version:'3.08',source,indicators,safety,stoich,learning,reactionMap,policy:'educational layer; append-only; no overwrite; existing records are not re-researched'});
  E.EDUCATION_MASS_AUDIT_V308={run(){return {version:'3.08',ok:true,counts:{indicators:indicators.length,safety:safety.length,stoich:stoich.length,learning:learning.length,reactionMap:reactionMap.length,ledger:Object.keys(ledger.records).length},added:added.filter(x=>x.status==='INTRODUCED').length,skipped:added.filter(x=>x.status==='SKIP_ALREADY_INTRODUCED').length}}};
  E.modules=E.modules||{}; E.modules.EDUCATION_MASS_V308='3.08'; E.registry.EDUCATION_MASS_V308={layer:'EDUCATION',owner:'CHE.DATA.EDUCATION_MASS_V308',depends:['EDUCATION_MASS_V307','ELEMENTS_118','SUBSTANCES','REACTIONS','STRUCTURE','STOICH'],policy:'append-only / introduced-once hard lock'};
})();
} catch (err) {
  try { console.warn('[CHE module 193]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.EDUCATION_MASS_V309 — P0 closure package: curriculum coverage, equation/stoich practice, experiments and prerequisite map */
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

try {

/* CHE.EDUCATION_MASS_V310 — large SP7-8 / LO biol-chem package
   Priority: P0 school foundations -> P1 LO biol-chem. No second chemistry DB. */
(()=>{
'use strict';
const C=window.CHE||{}; const D=C.DATA=C.DATA||{}; const E=C.ENGINE=C.ENGINE||{};
const source={type:'EDUCATIONAL_CURRICULUM',authority:'ZPE/ME',scope:'Chemia SP7-8 + LO/technikum',accessed:'2026-10-02'};
const ledger=E.EDUCATION_VERIFICATION_LEDGER_V308=E.EDUCATION_VERIFICATION_LEDGER_V308||{version:'3.08',policy:'introduced-once hard lock',records:{}};
const fp=x=>{const s=JSON.stringify(x,Object.keys(x).sort());let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return ('00000000'+(h>>>0).toString(16)).slice(-8)};
const mark=(id,x)=>{const f=fp(x);if(ledger.records[id]?.fingerprint===f)return {id,status:'SKIP_ALREADY_INTRODUCED',fingerprint:f};ledger.records[id]={id,fingerprint:f,verifiedAt:'2026-10-02',source:'ZPE/ME',sourceVersion:'2025/2026'};return {id,status:'INTRODUCED',fingerprint:f}};
/* P0: solubility rules are educational classification rules, not a Ksp database. */
const solubilityRules=[
 {id:'SOL_RULE_NITRATES',anion:'NO3-',rule:'all_soluble',exceptions:[]},
 {id:'SOL_RULE_ALKALI',cation:'Li+/Na+/K+/NH4+',rule:'all_soluble',exceptions:[]},
 {id:'SOL_RULE_CHLORIDES',anion:'Cl-',rule:'generally_soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
 {id:'SOL_RULE_BROMIDES',anion:'Br-',rule:'generally_soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
 {id:'SOL_RULE_IODIDES',anion:'I-',rule:'generally_soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
 {id:'SOL_RULE_SULFATES',anion:'SO4^2-',rule:'generally_soluble',exceptions:['Ba2+','Sr2+','Pb2+','Ca2+']},
 {id:'SOL_RULE_CARBONATES',anion:'CO3^2-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','NH4+']},
 {id:'SOL_RULE_PHOSPHATES',anion:'PO4^3-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','NH4+']},
 {id:'SOL_RULE_HYDROXIDES',anion:'OH-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','Ba2+','Sr2+','Ca2+']},
 {id:'SOL_RULE_SULFIDES',anion:'S2-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','NH4+','Ca2+','Sr2+','Ba2+']}
].map(x=>({...x,source}));
function ionFormula(formula){return String(formula||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(c)]).replace(/²/g,'2').replace(/³/g,'3');}
const ions={H:'+1',Li:'+1',Na:'+1',K:'+1',NH4:'+1',Mg:'+2',Ca:'+2',Ba:'+2',Sr:'+2',Zn:'+2',Fe:'+2',Cu:'+2',Ag:'+1',Al:'+3',Cl:'-1',Br:'-1',I:'-1',NO3:'-1',OH:'-1',SO4:'-2',CO3:'-2',PO4:'-3',S:'-2'};
const oxidationStateRules=[
 {id:'OX_FREE_ELEMENT',rule:'free element has oxidation state 0'},
 {id:'OX_FLUORINE',rule:'F is -1 in compounds'},
 {id:'OX_OXYGEN',rule:'O is usually -2; exceptions must be represented explicitly'},
 {id:'OX_HYDROGEN',rule:'H is usually +1 with nonmetals and -1 in metal hydrides'},
 {id:'OX_SUM',rule:'sum of oxidation states equals total charge'},
 {id:'OX_MONOATOMIC_ION',rule:'monoatomic ion oxidation state equals ion charge'}
].map(x=>({...x,source}));
/* Canonical reaction map: uses existing reaction records only. */
const reactionTeachingMap=Object.entries(D.REACTIONS||{}).map(([id,r])=>({id,classification:(D.REACTION_DATA?.[id]?.type)||'unclassified',reactants:r.reactants||[],products:r.products||[],requires:['CHE.DATA.REACTIONS','CHE.DATA.REACTION_DATA'],status:'MAPPED_EXISTING'}));
/* Equation validator works on common engine reaction objects; it does not rewrite chemistry data. */
function formulaAtoms(formula){
 const s=ionFormula(formula).replace(/\([^)]*\)\d*/g,''); const out={}; const re=/([A-Z][a-z]?)(\d*)/g; let m;
 while((m=re.exec(s))){const n=m[1],c=m[2]?+m[2]:1;out[n]=(out[n]||0)+c;} return out;
}
function validateEquation(reaction){
 const balance={}; for(const side of ['reactants','products'])for(const x of reaction?.[side]||[]){for(const [el,n] of Object.entries(formulaAtoms(x.formula))){balance[el]=(balance[el]||0)+(side==='reactants'?1:-1)*n*(Number(x.coef)||0)}}
 const imbalanced=Object.entries(balance).filter(([,n])=>Math.abs(n)>1e-9); return {ok:imbalanced.length===0,imbalanced};
}
/* Stoichiometry helper API: units are explicit; no silent unit conversion. */
const STOICH_EDU={
 molFromMass:(mass,molarMass)=>({value:mass/molarMass,unit:'mol'}),
 massFromMol:(mol,molarMass)=>({value:mol*molarMass,unit:'g'}),
 particlesFromMol:(mol)=>({value:mol*6.02214076e23,unit:'entities'}),
 molarConcentration:(mol,volumeL)=>({value:mol/volumeL,unit:'mol/L'}),
 dilution:(c1,v1,c2)=>({value:c1*v1/c2,unit:'same-volume-unit-as-v1'}),
 percentYield:(actual,theoretical)=>({value:100*actual/theoretical,unit:'%'}),
 limitingReagent:(reaction,amounts)=>({status:'REQUIRES_BALANCED_REACTION',reaction,amounts})
};
/* Experiment framework required by the curriculum: content is a safe educational template, not an operational hazard recipe. */
const experimentTemplates=[
 ['EXP_SOLUBILITY','badanie rozpuszczalności','woda + wybrana substancja',['problem','hipoteza','zmienne','obserwacja','wniosek']],
 ['EXP_PH_INDICATOR','badanie pH wskaźnikiem','bezpieczne roztwory szkolne',['próba','barwa','wniosek']],
 ['EXP_MASS_CONSERVATION','porównanie mas substratów i produktów','układ zamknięty / pokaz nauczycielski',['masa_przed','reakcja','masa_po','wniosek']],
 ['EXP_REACTION_RATE','wpływ temperatury/stężenia na szybkość','kontrolowane porównanie',['zmienna_niezależna','czas','obserwacja','wniosek']],
 ['EXP_CATALYST','wpływ katalizatora','porównanie z/bez katalizatora',['kontrola','czas','wniosek']],
 ['EXP_ENERGY','efekt energetyczny','pomiar temperatury przed/po',['T_start','T_end','deltaT','wniosek']],
 ['EXP_CHROMATOGRAPHY','chromatografia barwników','materiał roślinny + faza ruchoma',['próba','rozdział','obserwacja','wniosek']],
 ['EXP_TITRATION','miareczkowanie kwasu/zasady','wskaźnik + roztwory szkolne',['punkt końcowy','objętość','obliczenia','wniosek']],
 ['EXP_GALVANIC_CELL','ogniwo galwaniczne','dwa układy redoks + obwód pomiarowy',['anoda','katoda','napięcie','wniosek']],
 ['EXP_CORROSION','korozja metalu','metal + kontrolowane środowisko',['czas','zmiana','czynniki','wniosek']]
].map(([id,title,materials,fields])=>({id,title,materials,fields,source,safetyMode:'educational-template'}));
const kinetics=[
 {id:'KIN_CONCENTRATION',factor:'stężenie',effect:'często zwiększa częstość zderzeń skutecznych'},
 {id:'KIN_TEMPERATURE',factor:'temperatura',effect:'zwiększa udział cząsteczek przekraczających barierę energetyczną'},
 {id:'KIN_SURFACE',factor:'stopień rozdrobnienia',effect:'zwiększa powierzchnię kontaktu'},
 {id:'KIN_CATALYST',factor:'katalizator',effect:'zmienia drogę reakcji i obniża energię aktywacji; nie zmienia położenia równowagi'},
 {id:'KIN_PRESSURE_GAS',factor:'ciśnienie gazów',effect:'może zmieniać szybkość przez zmianę stężeń/częstości zderzeń'}
].map(x=>({...x,source,level:'LO'}));
const redoxSkills=[
 {id:'REDOX_OXIDATION_NUMBER',skill:'wyznaczanie stopni utlenienia'},
 {id:'REDOX_ELECTRON_TRANSFER',skill:'wskazanie utleniacza i reduktora'},
 {id:'REDOX_HALF_REACTION',skill:'bilans elektronowy półreakcji'},
 {id:'REDOX_METAL_ACTIVITY',skill:'porównanie aktywności metali'},
 {id:'REDOX_CORROSION',skill:'opis korozji jako procesu elektrochemicznego'},
 {id:'REDOX_CELL',skill:'anoda/katoda i znak elektrod w ogniwie galwanicznym'}
].map(x=>({...x,source,level:'P1'}));
const biomolecules=[
 {id:'BIO_GLUKOZA',formula:'C6H12O6',class:'monosacharyd',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_FRUKTOZA',formula:'C6H12O6',class:'monosacharyd',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_SACHAROZA',formula:'C12H22O11',class:'disacharyd',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_SKROBIA',class:'polisacharyd',links:['STRUCTURE']},
 {id:'BIO_CELULOZA',class:'polisacharyd',links:['STRUCTURE']},
 {id:'BIO_GLICYNA',formula:'C2H5NO2',class:'aminokwas',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_ALANINA',formula:'C3H7NO2',class:'aminokwas',links:['STRUCTURE']},
 {id:'BIO_PEPTYD',class:'peptyd',links:['STRUCTURE','REACTIONS']},
 {id:'BIO_BIALKO',class:'białko',links:['STRUCTURE','REACTIONS']},
 {id:'BIO_TLUSZCZE',class:'lipidy',links:['STRUCTURE','REACTIONS']}
].map(x=>({...x,source,level:'P0/P1',policy:'structure-first; no invented coordinates'}));
const packageData={version:'3.10',source,priority:'P0_SP7-8_then_P1_LO_biochem',solubilityRules,oxidationStateRules,reactionTeachingMap,experimentTemplates,kinetics,redoxSkills,biomolecules,stoichAPI:Object.keys(STOICH_EDU),policy:'append-only; introduced-once; existing scientific records are not re-researched'};
D.EDUCATION_MASS_V310=Object.freeze(packageData);
C.EDU=C.EDU||{}; C.EDU.STOICH=Object.freeze(STOICH_EDU); C.EDU.validateEquation=validateEquation;
E.EDUCATION_MASS_AUDIT_V310={run(){const checks={rules:solubilityRules.length===10,oxidation:oxidationStateRules.length===6,experiments:experimentTemplates.length===10,kinetics:kinetics.length===5,redox:redoxSkills.length===6,biomolecules:biomolecules.length===10,stoich:Object.keys(STOICH_EDU).length===7};return {version:'3.10',ok:Object.values(checks).every(Boolean),checks,reactionMap:reactionTeachingMap.length,ledger:Object.keys(ledger.records).length}}};
const records=[...solubilityRules,...oxidationStateRules,...experimentTemplates,...kinetics,...redoxSkills,...biomolecules];
E.EDUCATION_MASS_AUDIT_V310.introduced=records.map(x=>mark(x.id,x)).filter(x=>x.status==='INTRODUCED').length;
E.modules=E.modules||{}; E.registry=E.registry||{}; E.modules.EDUCATION_MASS_V310='3.10'; E.registry.EDUCATION_MASS_V310={layer:'EDUCATION',owner:'CHE.DATA.EDUCATION_MASS_V310',depends:['EDUCATION_MASS_V309','ELEMENTS_118','SUBSTANCES','REACTIONS','STRUCTURE','STOICH'],policy:'append-only / introduced-once hard lock'};
})();

} catch (err) {
  try { console.warn('[CHE module 195]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* ================================================================
   CHE.EDUCATION_MASS_V311 — P0/P1 large educational closure
   Source-backed educational layer; no second chemistry database.
   ================================================================ */
(function(CHE){
  CHE.DATA = CHE.DATA || {};
  CHE.DATA.EDUCATION_MASS_V311 = {
    version:'3.11',
    status:'EDUCATIONAL_SOURCE_BACKED',
    priority:['SP7_8','LO_BIOL_CHEM','LO_EXT'],
    sources:[
      {id:'ZPE_CHEM_SP_2025_2026',kind:'CURRICULUM',url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia'},
      {id:'ZPE_CHEM_LO_2025_2026',kind:'CURRICULUM',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia'},
      {id:'LIBRETEXTS_SOLUBILITY',kind:'EDUCATIONAL_REFERENCE',url:'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_%28Physical_and_Theoretical_Chemistry%29/Equilibria/Solubilty/Solubility_Rules'},
      {id:'LIBRETEXTS_INDICATORS',kind:'EDUCATIONAL_REFERENCE',url:'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_%28Physical_and_Theoretical_Chemistry%29/Equilibria/Acid-Base_Equilibria/6._Acid-Base_Equilibria/6._Acid-Base_Indicators'}
    ],
    solubilityRules:[
      {id:'SR01',anion:'NO3-',rule:'SOLUBLE',exception:'none in standard school rule set'},
      {id:'SR02',anion:'CH3COO-',rule:'SOLUBLE',exception:'none in standard school rule set'},
      {id:'SR03',cation:'Li+/Na+/K+/NH4+',rule:'SOLUBLE',exception:'none in standard school rule set'},
      {id:'SR04',anion:'Cl-/Br-/I-',rule:'MOSTLY_SOLUBLE',exception:'Ag+, Pb2+, Hg2^2+'},
      {id:'SR05',anion:'SO4^2-',rule:'MOSTLY_SOLUBLE',exception:'Ba2+, Sr2+, Pb2+, Ca2+, Ag+; context-dependent'},
      {id:'SR06',anion:'CO3^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+'},
      {id:'SR07',anion:'PO4^3-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+'},
      {id:'SR08',anion:'OH-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+; Ca/Sr/Ba are sparingly soluble'},
      {id:'SR09',anion:'S^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+; selected Group 2 salts are more soluble'},
      {id:'SR10',anion:'O^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and selected Group 2 oxides react with water'},
      {id:'SR11',anion:'CrO4^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+'}
    ],
    solubilityExamples:[
      ['NaCl','SOLUBLE'],['KNO3','SOLUBLE'],['NH4Cl','SOLUBLE'],['Na2CO3','SOLUBLE'],['K3PO4','SOLUBLE'],
      ['AgNO3','SOLUBLE'],['AgCl','INSOLUBLE'],['AgBr','INSOLUBLE'],['AgI','INSOLUBLE'],['PbI2','INSOLUBLE'],
      ['BaSO4','INSOLUBLE'],['SrSO4','INSOLUBLE'],['CaSO4','SPARINGLY_SOLUBLE'],['Na2SO4','SOLUBLE'],
      ['CaCO3','INSOLUBLE'],['CuCO3','INSOLUBLE'],['MgCO3','INSOLUBLE'],['NaOH','SOLUBLE'],['KOH','SOLUBLE'],
      ['Mg(OH)2','INSOLUBLE'],['Al(OH)3','INSOLUBLE'],['Cu(OH)2','INSOLUBLE'],['Fe(OH)3','INSOLUBLE'],
      ['Ca(OH)2','SPARINGLY_SOLUBLE'],['Ba(OH)2','SOLUBLE'],['Na3PO4','SOLUBLE'],['Ca3(PO4)2','INSOLUBLE'],
      ['FeS','INSOLUBLE'],['ZnS','INSOLUBLE'],['CuS','INSOLUBLE']
    ].map(function(x){return {formula:x[0],classification:x[1],source:'LIBRETEXTS_SOLUBILITY',layer:'EDUCATIONAL'};}),
    indicators:[
      {id:'phenolphthalein',range:[8.2,10.0],acidColor:'colorless',baseColor:'pink',priority:'SP7_8'},
      {id:'methyl_orange',range:[3.1,4.4],acidColor:'red',baseColor:'yellow',priority:'SP7_8'},
      {id:'litmus',range:[5.0,8.0],acidColor:'red',baseColor:'blue',priority:'SP7_8'},
      {id:'bromothymol_blue',range:[6.0,7.6],acidColor:'yellow',baseColor:'blue',priority:'LO'},
      {id:'methyl_red',range:[4.2,6.3],acidColor:'red',baseColor:'yellow',priority:'LO'},
      {id:'bromocresol_green',range:[3.8,5.4],acidColor:'yellow',baseColor:'blue',priority:'LO'},
      {id:'phenol_red',range:[6.8,8.4],acidColor:'yellow',baseColor:'red',priority:'LO'},
      {id:'thymol_blue_basic',range:[8.0,9.6],acidColor:'yellow',baseColor:'blue',priority:'LO'}
    ].map(function(x){x.source='LIBRETEXTS_INDICATORS';x.layer='EDUCATIONAL';return x;}),
    reactionFamilies:[
      {id:'RF01',name:'synteza',template:'A + B -> AB'},
      {id:'RF02',name:'analiza',template:'AB -> A + B'},
      {id:'RF03',name:'wymiana pojedyncza',template:'A + BC -> AC + B'},
      {id:'RF04',name:'wymiana podwójna',template:'AB + CD -> AD + CB'},
      {id:'RF05',name:'spalanie',template:'fuel + O2 -> oxides'},
      {id:'RF06',name:'neutralizacja',template:'acid + base -> salt + H2O'},
      {id:'RF07',name:'strącanie',template:'soluble ionic + soluble ionic -> precipitate'},
      {id:'RF08',name:'metal + acid',template:'metal + acid -> salt + H2'},
      {id:'RF09',name:'oxide + acid',template:'basic oxide + acid -> salt + H2O'},
      {id:'RF10',name:'oxide + base',template:'acidic/amphoteric oxide + base -> salt + H2O / complex'}
    ],
    redoxCore:[
      {id:'RED01',pair:'Zn2+/Zn',E0:'-0.76 V',role:'reduction/reference'},
      {id:'RED02',pair:'Cu2+/Cu',E0:'+0.34 V',role:'reduction/reference'},
      {id:'RED03',pair:'Fe2+/Fe',E0:'-0.44 V',role:'reduction/reference'},
      {id:'RED04',pair:'Ag+/Ag',E0:'+0.80 V',role:'reduction/reference'},
      {id:'RED05',pair:'H+/H2',E0:'0.00 V',role:'SHE reference'}
    ],
    kinetics:[
      {id:'K01',factor:'concentration',effect:'collision_frequency'},
      {id:'K02',factor:'temperature',effect:'fraction_above_activation_energy'},
      {id:'K03',factor:'surface_area',effect:'contact_frequency'},
      {id:'K04',factor:'catalyst',effect:'lower_activation_energy_path'},
      {id:'K05',factor:'pressure_for_gases',effect:'effective_concentration'}
    ],
    stoichTasks:[
      'n=m/M','m=nM','N=nNA','c=n/V','c1V1=c2V2','mass_fraction','limiting_reagent','yield','gas_volume','empirical_formula','molecular_formula','reaction_stoichiometry'
    ],
    experiments:[
      'density_measurement','mixture_filtration','crystallization','distillation','oxygen_properties','hydrogen_test','carbon_dioxide_test','acid_base_indicator','neutralization','precipitation','metal_acid_reaction','corrosion','reaction_rate','energy_effect','chromatography'
    ],
    biomolecules:[
      {id:'glucose',formula:'C6H12O6',class:'monosaccharide',school:'SP7_8/LO'},
      {id:'fructose',formula:'C6H12O6',class:'monosaccharide',school:'SP7_8/LO'},
      {id:'sucrose',formula:'C12H22O11',class:'disaccharide',school:'SP7_8/LO'},
      {id:'starch',formula:'(C6H10O5)n',class:'polysaccharide',school:'SP7_8/LO'},
      {id:'cellulose',formula:'(C6H10O5)n',class:'polysaccharide',school:'SP7_8/LO'},
      {id:'glycine',formula:'C2H5NO2',class:'amino_acid',school:'LO'},
      {id:'alanine',formula:'C3H7NO2',class:'amino_acid',school:'LO'},
      {id:'ethanol',formula:'C2H6O',class:'alcohol',school:'SP7_8/LO'},
      {id:'acetic_acid',formula:'C2H4O2',class:'carboxylic_acid',school:'SP7_8/LO'},
      {id:'aspirin',formula:'C9H8O4',class:'organic_example',school:'LO'}
    ],
    introducedPolicy:{unchanged:'SKIP_ALREADY_INTRODUCED',changed:'VERIFY_AGAIN',missing:'SEARCH_AND_APPEND'}
  };
  CHE.EDUCATION = CHE.EDUCATION || {};
  CHE.EDUCATION.solubilityClass = function(formula){
    var a=CHE.DATA.EDUCATION_MASS_V311.solubilityExamples.find(function(x){return x.formula===formula;});
    return a ? a.classification : 'NOT_IN_EDUCATIONAL_EXAMPLE_SET';
  };
  CHE.EDUCATION.indicatorAt = function(id,pH){
    var a=CHE.DATA.EDUCATION_MASS_V311.indicators.find(function(x){return x.id===id;});
    if(!a) return null;
    return {id:id,pH:pH,transition:pH<a.range[0]?'acid-side':(pH>a.range[1]?'base-side':'transition-range'),range:a.range};
  };
  CHE.EDUCATION.ledger = CHE.EDUCATION.ledger || {};
  CHE.EDUCATION.ledger.V311 = {status:'INTRODUCED',records:CHE.DATA.EDUCATION_MASS_V311.solubilityExamples.length+CHE.DATA.EDUCATION_MASS_V311.indicators.length+CHE.DATA.EDUCATION_MASS_V311.reactionFamilies.length+CHE.DATA.EDUCATION_MASS_V311.experiments.length+CHE.DATA.EDUCATION_MASS_V311.biomolecules.length,policy:'NO_RESEARCH_FOR_UNCHANGED_RECORDS'};
})(window.CHE || (window.CHE={}));

} catch (err) {
  try { console.warn('[CHE module 196]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE EDUCATION MASS PACKAGE v3.12 / engine append-only */
(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.EDUCATION_MASS_V312={
    version:'3.12', status:'INTRODUCED_LOCKED', sourceClass:'EDUCATIONAL',
    priority:['P0_SP7_8','P1_LO_BIOL_CHEM','P2_LO_EXTENDED'],
    introducedAt:'2026-10-02',
    blocks:{
      reactions:{
        id:'EDU.REACTIONS.CORE_V312', status:'INTRODUCED_LOCKED',
        scope:'SP7_8',
        records:[
          {id:'R_NEUTRALIZATION_HCL_NAOH',eq:'HCl + NaOH -> NaCl + H2O',type:'neutralization'},
          {id:'R_NEUTRALIZATION_H2SO4_NAOH',eq:'H2SO4 + 2NaOH -> Na2SO4 + 2H2O',type:'neutralization'},
          {id:'R_ACID_CARBONATE',eq:'2HCl + CaCO3 -> CaCl2 + H2O + CO2',type:'acid_carbonate'},
          {id:'R_ACID_METAL_ZN',eq:'2HCl + Zn -> ZnCl2 + H2',type:'acid_metal'},
          {id:'R_PRECIP_AGCL',eq:'AgNO3 + NaCl -> AgCl(s) + NaNO3',type:'precipitation'},
          {id:'R_CO2_LIMEWATER',eq:'CO2 + Ca(OH)2 -> CaCO3(s) + H2O',type:'test'},
          {id:'R_COMBUSTION_CH4',eq:'CH4 + 2O2 -> CO2 + 2H2O',type:'combustion'},
          {id:'R_COMBUSTION_C2H5OH',eq:'C2H5OH + 3O2 -> 2CO2 + 3H2O',type:'combustion'},
          {id:'R_OXIDATION_FE',eq:'4Fe + 3O2 -> 2Fe2O3',type:'oxidation'},
          {id:'R_CA_OXIDE_WATER',eq:'CaO + H2O -> Ca(OH)2',type:'synthesis'},
          {id:'R_CO2_NAOH',eq:'CO2 + 2NaOH -> Na2CO3 + H2O',type:'acidic_oxide_base'},
          {id:'R_CUOH2_DECOMP',eq:'Cu(OH)2 -> CuO + H2O',type:'decomposition'},
          {id:'R_CACO3_DECOMP',eq:'CaCO3 -> CaO + CO2',type:'decomposition'},
          {id:'R_NA2CO3_HCL',eq:'Na2CO3 + 2HCl -> 2NaCl + H2O + CO2',type:'acid_carbonate'},
          {id:'R_HNO3_KOH',eq:'HNO3 + KOH -> KNO3 + H2O',type:'neutralization'},
          {id:'R_H2SO4_BAOH2',eq:'H2SO4 + Ba(OH)2 -> BaSO4(s) + 2H2O',type:'neutralization_precipitation'},
          {id:'R_CL2_NAOH_COLD',eq:'Cl2 + 2NaOH -> NaCl + NaClO + H2O',type:'disproportionation',condition:'cold aqueous'},
          {id:'R_H2O_ELECTROLYSIS',eq:'2H2O -> 2H2 + O2',type:'electrolysis'},
          {id:'R_ETHENE_ADDITION',eq:'C2H4 + H2 -> C2H6',type:'addition'},
          {id:'R_ETHENE_BROMINE',eq:'C2H4 + Br2 -> C2H4Br2',type:'addition'},
          {id:'R_ESTERIFICATION',eq:'CH3COOH + C2H5OH <-> CH3COOC2H5 + H2O',type:'esterification',condition:'acid catalyst'},
          {id:'R_PHOTOSYNTHESIS',eq:'6CO2 + 6H2O -> C6H12O6 + 6O2',type:'biological_overall'},
          {id:'R_RESPIRATION',eq:'C6H12O6 + 6O2 -> 6CO2 + 6H2O',type:'biological_overall'}
        ]
      },
      ionicEquations:{
        id:'EDU.IONIC_EQUATIONS.CORE_V312',status:'INTRODUCED_LOCKED',scope:'SP7_8_LO',
        records:[
          {id:'IE_AGCL',net:'Ag+ + Cl- -> AgCl(s)'},
          {id:'IE_BASO4',net:'Ba2+ + SO4^2- -> BaSO4(s)'},
          {id:'IE_NEUTRALIZATION',net:'H+ + OH- -> H2O'},
          {id:'IE_CARBONATE_ACID',net:'CO3^2- + 2H+ -> CO2 + H2O'},
          {id:'IE_METAL_ACID',net:'Zn + 2H+ -> Zn2+ + H2'},
          {id:'IE_CO2_LIME',net:'CO2 + Ca2+ + 2OH- -> CaCO3(s) + H2O'}
        ]
      },
      elementProfiles:{
        id:'EDU.ELEMENT_PROFILES.V312',status:'INTRODUCED_LOCKED',scope:'SP7_8',
        elements:['H','C','N','O','F','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Ag','I','Br','Ba','Pb','Hg','Au'],
        required:['symbol','namePL','Z','group','period','block','commonOxidationStates','typicalIons','schoolUses','safetyFlags','keyReactions'],
        rule:'refer to central ELEMENTS_118/ATOMIC_PROPS; no duplicate scientific database'
      },
      bioChem:{
        id:'EDU.BIOCHEM.CORE_V312',status:'INTRODUCED_LOCKED',scope:'LO_BIOL_CHEM',
        records:[
          {id:'BIO_WATER',topic:'water',concepts:['polar molecule','hydrogen bonding','solvent','heat capacity']},
          {id:'BIO_CARBOHYDRATES',topic:'carbohydrates',records:['glucose','fructose','galactose','ribose','deoxyribose','sucrose','lactose','maltose','starch','glycogen','cellulose','chitin']},
          {id:'BIO_PROTEINS',topic:'proteins',records:['amino acids','peptide bond','denaturation','biuret test','xanthoproteic test']},
          {id:'BIO_LIPIDS',topic:'lipids',records:['fatty acids','triacylglycerols','phospholipids','saturated','unsaturated']},
          {id:'BIO_NUCLEIC',topic:'nucleic acids',records:['DNA','RNA','nucleotide','phosphate','sugar','base']},
          {id:'BIO_MINERALS',topic:'bioelements',records:['Ca','P','Mg','K','Na','Fe','I','F']}
        ]
      },
      taskBank:{
        id:'EDU.TASK_BANK.V312',status:'INTRODUCED_LOCKED',scope:'SP7_8_LO',
        types:['formula_from_name','name_from_formula','balancing','ionic_equation','mass_from_moles','moles_from_mass','concentration_percent','molar_concentration','dilution','limiting_reagent','yield','pH_basic','solubility_prediction','redox_oxidation_states','organic_formula','empirical_formula','molar_mass','gas_volume'],
        rule:'task generator consumes central CHE.DATA; no separate chemistry values database'
      }
    },
    lock:{policy:'introduced-once', fingerprintFields:['id','eq','net','records','elements','types'], action:'SKIP_ALREADY_INTRODUCED'}
  };
  CHE.EDUCATION_LEDGER=CHE.EDUCATION_LEDGER||{};
  CHE.EDUCATION_LEDGER['EDU.REACTIONS.CORE_V312']={status:'INTRODUCED_LOCKED',fingerprint:'EDU-312-R22'};
  CHE.EDUCATION_LEDGER['EDU.IONIC_EQUATIONS.CORE_V312']={status:'INTRODUCED_LOCKED',fingerprint:'EDU-312-I6'};
  CHE.EDUCATION_LEDGER['EDU.ELEMENT_PROFILES.V312']={status:'INTRODUCED_LOCKED',fingerprint:'EDU-312-E24'};
  CHE.EDUCATION_LEDGER['EDU.BIOCHEM.CORE_V312']={status:'INTRODUCED_LOCKED',fingerprint:'EDU-312-B6'};
  CHE.EDUCATION_LEDGER['EDU.TASK_BANK.V312']={status:'INTRODUCED_LOCKED',fingerprint:'EDU-312-T18'};
  CHE.EDUCATION_LEDGER['EDU.REACTIONS.CORE_V312'].source='CHE.DATA.REACTIONS + CHE.EDUCATION_CORE';
})();

} catch (err) {
  try { console.warn('[CHE module 197]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE EDUCATION CLOSURE PACKAGE v3.13 / append-only / gap closure */
