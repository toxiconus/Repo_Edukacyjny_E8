

try {

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