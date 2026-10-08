try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
D.REACTIONS = {
  hclNaOH:{reactants:[{formula:'HCl',coef:1},{formula:'NaOH',coef:1}],products:[{formula:'NaCl',coef:1},{formula:'H2O',coef:1}]},
  znHcl:{reactants:[{formula:'Zn',coef:1},{formula:'HCl',coef:2}],products:[{formula:'ZnCl2',coef:1},{formula:'H2',coef:1}]},
  mgHcl:{reactants:[{formula:'Mg',coef:1},{formula:'HCl',coef:2}],products:[{formula:'MgCl2',coef:1},{formula:'H2',coef:1}]},
  feHcl:{reactants:[{formula:'Fe',coef:1},{formula:'HCl',coef:2}],products:[{formula:'FeCl2',coef:1},{formula:'H2',coef:1}]},
  caco3Hcl:{reactants:[{formula:'CaCO3',coef:1},{formula:'HCl',coef:2}],products:[{formula:'CaCl2',coef:1},{formula:'H2O',coef:1},{formula:'CO2',coef:1}]},
  h2so4Naoh:{reactants:[{formula:'H2SO4',coef:1},{formula:'NaOH',coef:2}],products:[{formula:'Na2SO4',coef:1},{formula:'H2O',coef:2}]},
  cuoH2so4:{reactants:[{formula:'CuO',coef:1},{formula:'H2SO4',coef:1}],products:[{formula:'CuSO4',coef:1},{formula:'H2O',coef:1}]},
  cuoHcl:{reactants:[{formula:'CuO',coef:1},{formula:'HCl',coef:2}],products:[{formula:'CuCl2',coef:1},{formula:'H2O',coef:1}]},
  agno3Hcl:{reactants:[{formula:'AgNO3',coef:1},{formula:'HCl',coef:1}],products:[{formula:'AgCl',coef:1},{formula:'HNO3',coef:1}]},
  cuHno3:{reactants:[{formula:'Cu',coef:1},{formula:'HNO3',coef:4}],products:[{formula:'Cu(NO3)2',coef:1},{formula:'NO2',coef:2},{formula:'H2O',coef:2}]},
  so3H2o:{reactants:[{formula:'SO3',coef:1},{formula:'H2O',coef:1}],products:[{formula:'H2SO4',coef:1}]},
  naclH2so4:{reactants:[{formula:'NaCl',coef:1},{formula:'H2SO4',coef:1}],products:[{formula:'NaHSO4',coef:1},{formula:'HCl',coef:1}]},
  naclH2SO4:{reactants:[{formula:'NaCl',coef:1},{formula:'H2SO4',coef:1}],products:[{formula:'NaHSO4',coef:1},{formula:'HCl',coef:1}],aliasOf:'naclH2so4'},
  h2Cl2:{reactants:[{formula:'H2',coef:1},{formula:'Cl2',coef:1}],products:[{formula:'HCl',coef:2}]}
};
D.REACTION_DATA = {
  hclNaOH:{type:'neutralization',conditions:'roztwór wodny',observation:'brak gazu i osadu; reakcja zobojętniania',products:['NaCl','H2O'],safety:['NaOH jest żrący']},
  znHcl:{type:'metal+acid',conditions:'kwas nieutleniający, roztwór wodny',observation:'wydziela się H₂; cynk się rozpuszcza',products:['ZnCl2','H2'],safety:['H₂ jest palny']},
  mgHcl:{type:'metal+acid',conditions:'kwas nieutleniający',observation:'wydziela się H₂; magnez szybko się rozpuszcza',products:['MgCl2','H2'],safety:['H₂ palny; reakcja gwałtowna']},
  feHcl:{type:'metal+acid',conditions:'roztwór wodny',observation:'wydziela się H₂; powstaje FeCl₂',products:['FeCl2','H2'],safety:['H₂ palny']},
  caco3Hcl:{type:'carbonate+acid',conditions:'roztwór wodny',observation:'musowanie i wydzielanie CO₂',products:['CaCl2','H2O','CO2'],safety:['gaz w zamkniętym układzie — ryzyko']},
  h2so4Naoh:{type:'neutralization',conditions:'roztwór wodny',observation:'zobojętnianie',products:['Na2SO4','H2O'],safety:['kwas i zasada żrące']},
  cuoH2so4:{type:'acid+basic-oxide',conditions:'roztwór wodny',observation:'czarny CuO znika; roztwór soli',products:['CuSO4','H2O'],safety:['kwas żrący']},
  cuoHcl:{type:'acid+basic-oxide',conditions:'roztwór wodny',observation:'CuO znika; roztwór chlorku miedzi(II)',products:['CuCl2','H2O'],safety:['kwas żrący']},
  agno3Hcl:{type:'precipitation',conditions:'roztwór wodny',observation:'biały serowaty osad AgCl',products:['AgCl','HNO3'],safety:['AgNO₃ żrący i plami skórę']},
  cuHno3:{type:'redox',conditions:'stężony HNO₃; wyciąg',observation:'roztwór niebieski; brunatny NO₂',products:['Cu(NO3)2','NO2','H2O'],safety:['NO₂ toksyczny']},
  so3H2o:{type:'synteza kwasu',conditions:'kontakt SO₃ z wodą',observation:'powstaje H₂SO₄',products:['H2SO4'],safety:['SO₃ żrący, gwałtowny z wodą']},
  naclH2so4:{type:'otrzymywanie kwasu',conditions:'ogrzewanie mieszaniny',observation:'wydziela się HCl(g)',products:['NaHSO4','HCl'],safety:['HCl żrący; wentylacja']},
  h2Cl2:{type:'synteza',conditions:'światło lub inicjacja energetyczna',observation:'HCl; reakcja egzotermiczna',products:['HCl'],safety:['mieszanina H₂/Cl₂ wybuchowa']}
};
 
(function(){
const R=(r,p)=>({reactants:r.map(x=>({formula:x[1],coef:x[0]})),products:p.map(x=>({formula:x[1],coef:x[0]}))});
const add={
 alHcl:[R([[2,'Al'],[6,'HCl']],[[2,'AlCl3'],[3,'H2']]),{type:'metal+acid',conditions:'roztwór wodny; początkowo wolno (warstwa Al₂O₃)',observation:'po chwili intensywne wydzielanie H₂; glin się roztwarza',safety:['H₂ palny']}],
 znH2so4:[R([[1,'Zn'],[1,'H2SO4']],[[1,'ZnSO4'],[1,'H2']]),{type:'metal+acid',conditions:'rozcieńczony H₂SO₄',observation:'pęcherzyki H₂ na powierzchni cynku',safety:['H₂ palny']}],
 mgH2so4:[R([[1,'Mg'],[1,'H2SO4']],[[1,'MgSO4'],[1,'H2']]),{type:'metal+acid',conditions:'rozcieńczony H₂SO₄',observation:'gwałtowne wydzielanie H₂, roztwór się ogrzewa',safety:['H₂ palny']}],
 caoHcl:[R([[1,'CaO'],[2,'HCl']],[[1,'CaCl2'],[1,'H2O']]),{type:'acid+basic-oxide',conditions:'roztwór wodny',observation:'biały proszek roztwarza się, roztwór się ogrzewa',safety:['CaO i HCl żrące']}],
 mgoHcl:[R([[1,'MgO'],[2,'HCl']],[[1,'MgCl2'],[1,'H2O']]),{type:'acid+basic-oxide',conditions:'roztwór wodny',observation:'biały proszek znika, roztwór bezbarwny',safety:['kwas żrący']}],
 fe2o3Hcl:[R([[1,'Fe2O3'],[6,'HCl']],[[2,'FeCl3'],[3,'H2O']]),{type:'acid+basic-oxide',conditions:'roztwór wodny, ogrzewanie przyspiesza',observation:'rdzawy tlenek znika, roztwór żółtobrunatny (Fe³⁺)',safety:['kwas żrący']}],
 na2oHno3:[R([[1,'Na2O'],[2,'HNO3']],[[2,'NaNO3'],[1,'H2O']]),{type:'acid+basic-oxide',conditions:'roztwór wodny',observation:'tlenek roztwarza się, roztwór bezbarwny',safety:['Na₂O i HNO₃ żrące']}],
 znoHcl:[R([[1,'ZnO'],[2,'HCl']],[[1,'ZnCl2'],[1,'H2O']]),{type:'acid+amphoteric-oxide',conditions:'roztwór wodny',observation:'biały tlenek roztwarza się (ZnO amfoteryczny — reaguje też z NaOH)',safety:['kwas żrący']}],
 h2so4Koh:[R([[1,'H2SO4'],[2,'KOH']],[[1,'K2SO4'],[2,'H2O']]),{type:'neutralization',conditions:'roztwór wodny',observation:'zobojętnianie, roztwór się ogrzewa',safety:['kwas i zasada żrące']}],
 caoh2Hno3:[R([[1,'Ca(OH)2'],[2,'HNO3']],[[1,'Ca(NO3)2'],[2,'H2O']]),{type:'neutralization',conditions:'roztwór wodny',observation:'mętne mleko wapienne staje się klarowne',safety:['kwas i zasada żrące']}],
 aloh3Hcl:[R([[1,'Al(OH)3'],[3,'HCl']],[[1,'AlCl3'],[3,'H2O']]),{type:'neutralization',conditions:'roztwór wodny',observation:'galaretowaty osad Al(OH)₃ roztwarza się',safety:['kwas żrący']}],
 h3po4Caoh2:[R([[2,'H3PO4'],[3,'Ca(OH)2']],[[1,'Ca3(PO4)2'],[6,'H2O']]),{type:'neutralization',conditions:'roztwór wodny',observation:'wytrąca się biały osad Ca₃(PO₄)₂',safety:['kwas i zasada żrące']}],
 mgoh2Hcl:[R([[1,'Mg(OH)2'],[2,'HCl']],[[1,'MgCl2'],[2,'H2O']]),{type:'neutralization',conditions:'sok żołądkowy — lek zobojętniający',observation:'zawiesina roztwarza się',safety:[]}],
 nahco3Hcl:[R([[1,'NaHCO3'],[1,'HCl']],[[1,'NaCl'],[1,'H2O'],[1,'CO2']]),{type:'carbonate+acid',conditions:'roztwór wodny',observation:'musowanie — wydziela się CO₂',safety:[]}],
 na2co3Hcl:[R([[1,'Na2CO3'],[2,'HCl']],[[2,'NaCl'],[1,'H2O'],[1,'CO2']]),{type:'carbonate+acid',conditions:'roztwór wodny',observation:'burzenie — wydziela się CO₂ (mętni wodę wapienną)',safety:['kwas żrący']}],
 bacl2H2so4:[R([[1,'BaCl2'],[1,'H2SO4']],[[1,'BaSO4'],[2,'HCl']]),{type:'precipitation',conditions:'roztwór wodny',observation:'biały, drobnokrystaliczny osad BaSO₄ (nie roztwarza się w kwasach)',safety:['rozpuszczalne sole baru trujące']}],
 na2sHcl:[R([[1,'Na2S'],[2,'HCl']],[[2,'NaCl'],[1,'H2S']]),{type:'salt+acid',conditions:'roztwór wodny; dygestorium',observation:'zapach zgniłych jaj — wydziela się H₂S',safety:['H₂S silnie trujący']}],
 na2so3Hcl:[R([[1,'Na2SO3'],[2,'HCl']],[[2,'NaCl'],[1,'H2O'],[1,'SO2']]),{type:'salt+acid',conditions:'roztwór wodny; dygestorium',observation:'ostry zapach SO₂ (H₂SO₃ rozkłada się)',safety:['SO₂ toksyczny']}],
 na2sio3Hcl:[R([[1,'Na2SiO3'],[2,'HCl']],[[1,'H2SiO3'],[2,'NaCl']]),{type:'salt+acid',conditions:'roztwór wodny',observation:'galaretowaty, biały osad kwasu krzemowego',safety:['kwas żrący']}],
 hclNh3:[R([[1,'HCl'],[1,'NH3']],[[1,'NH4Cl']]),{type:'acid+base (Brønsted)',conditions:'gazy nad stężonymi roztworami',observation:'biały „dym” NH₄Cl',safety:['HCl i NH₃ drażniące']}],
 cuHno3Dil:[R([[3,'Cu'],[8,'HNO3']],[[3,'Cu(NO3)2'],[2,'NO'],[4,'H2O']]),{type:'redox',conditions:'rozcieńczony HNO₃; wyciąg',observation:'roztwór niebieski; bezbarwny NO brunatnieje u wylotu (2 NO + O₂ → 2 NO₂)',safety:['NO i NO₂ toksyczne — pokaz nauczyciela']}],
 cuH2so4Conc:[R([[1,'Cu'],[2,'H2SO4']],[[1,'CuSO4'],[1,'SO2'],[2,'H2O']]),{type:'redox',conditions:'stężony, gorący H₂SO₄; dygestorium',observation:'wydziela się SO₂; po rozcieńczeniu roztwór niebieski',safety:['stężony H₂SO₄ i SO₂ — pokaz nauczyciela']}],
 auAquaRegia:[R([[1,'Au'],[1,'HNO3'],[4,'HCl']],[[1,'HAuCl4'],[1,'NO'],[2,'H2O']]),{type:'redox (kompleksowanie)',conditions:'woda królewska: stęż. HNO₃ + stęż. HCl (1:3)',observation:'złoto roztwarza się, roztwór żółty',safety:['bardzo żrące, toksyczne gazy']}],
 so2H2o:[R([[1,'SO2'],[1,'H2O']],[[1,'H2SO3']]),{type:'synteza kwasu',conditions:'roztwór wodny (równowaga)',observation:'roztwór kwaśny; wskaźnik czerwienieje',safety:['SO₂ toksyczny']}],
 co2H2o:[R([[1,'CO2'],[1,'H2O']],[[1,'H2CO3']]),{type:'synteza kwasu',conditions:'roztwór wodny (równowaga, mało H₂CO₃)',observation:'woda gazowana ma pH ≈ 4–5',safety:[]}],
 p4o10H2o:[R([[1,'P4O10'],[6,'H2O']],[[4,'H3PO4']]),{type:'synteza kwasu',conditions:'gwałtowna reakcja z wodą',observation:'biały proszek rozpuszcza się z sykiem',safety:['P₄O₁₀ silnie higroskopijny, żrący']}],
 n2o5H2o:[R([[1,'N2O5'],[1,'H2O']],[[2,'HNO3']]),{type:'synteza kwasu',conditions:'roztwór wodny',observation:'powstaje HNO₃',safety:['żrący']}],
 n2o3H2o:[R([[1,'N2O3'],[1,'H2O']],[[2,'HNO2']]),{type:'synteza kwasu',conditions:'zimna woda',observation:'niebieski roztwór HNO₂ (nietrwały)',safety:['toksyczny']}],
 h2Br2:[R([[1,'H2'],[1,'Br2']],[[2,'HBr']]),{type:'synteza',conditions:'ogrzewanie (lub kat. Pt)',observation:'brunatna barwa Br₂ zanika',safety:['Br₂ żrący, toksyczny']}],
 h2I2:[R([[1,'H2'],[1,'I2']],[[2,'HI']]),{type:'synteza (równowagowa)',conditions:'ogrzewanie; reakcja odwracalna',observation:'fioletowe pary I₂ częściowo zanikają',safety:['I₂ drażniący']}],
 h2S:[R([[1,'H2'],[1,'S']],[[1,'H2S']]),{type:'synteza',conditions:'ogrzewanie (wodór nad stopioną siarką)',observation:'zapach zgniłych jaj',safety:['H₂S silnie trujący']}],
 sO2:[R([[1,'S'],[1,'O2']],[[1,'SO2']]),{type:'spalanie',conditions:'zapalenie siarki',observation:'niebieski płomień, ostry zapach SO₂',safety:['SO₂ toksyczny']}],
 so2O2:[R([[2,'SO2'],[1,'O2']],[[2,'SO3']]),{type:'utlenianie',conditions:'kat. V₂O₅ (przemysł) / atmosfera',observation:'—',safety:['SO₃ żrący']}],
 n2O2:[R([[1,'N2'],[1,'O2']],[[2,'NO']]),{type:'synteza',conditions:'bardzo wysoka temperatura (silniki, wyładowania)',observation:'—',safety:[]}],
 noO2:[R([[2,'NO'],[1,'O2']],[[2,'NO2']]),{type:'utlenianie',conditions:'powietrze, temperatura pokojowa',observation:'bezbarwny gaz brunatnieje',safety:['NO₂ toksyczny']}],
 no2H2o:[R([[3,'NO2'],[1,'H2O']],[[2,'HNO3'],[1,'NO']]),{type:'dysproporcjonowanie',conditions:'woda (kwaśne deszcze)',observation:'brunatny gaz zanika, roztwór kwaśny',safety:['NO₂ toksyczny']}],
 no2O2H2o:[R([[4,'NO2'],[1,'O2'],[2,'H2O']],[[4,'HNO3']]),{type:'synteza kwasu',conditions:'woda + tlen (przemysł, atmosfera)',observation:'—',safety:['NO₂ toksyczny']}],
 caco3H2so4:[R([[1,'CaCO3'],[1,'H2SO4']],[[1,'CaSO4'],[1,'H2O'],[1,'CO2']]),{type:'carbonate+acid',conditions:'kwaśne deszcze — niszczenie marmuru i wapienia',observation:'musowanie, powierzchnia się kruszy (CaSO₄ słabo rozpuszczalny)',safety:[]}],
 hno3Decomp:[R([[4,'HNO3']],[[4,'NO2'],[1,'O2'],[2,'H2O']]),{type:'rozkład',conditions:'światło lub ogrzewanie',observation:'kwas żółknie (rozpuszczony NO₂)',safety:['przechowywać w ciemnych butelkach']}],
 sugarH2so4:[R([[1,'C12H22O11']],[[12,'C'],[11,'H2O']]),{type:'odwodnienie',conditions:'stężony H₂SO₄ (czynnik odwadniający); dygestorium',observation:'cukier czernieje, porowata masa węgla rośnie, wydziela się para i SO₂',safety:['tylko pokaz nauczyciela']}],
 sio2Hf:[R([[1,'SiO2'],[4,'HF']],[[1,'SiF4'],[2,'H2O']]),{type:'acid+oxide',conditions:'HF(aq); naczynia z tworzywa',observation:'szkło matowieje (trawienie)',safety:['HF silnie toksyczny']}],
 naH2o:[R([[2,'Na'],[2,'H2O']],[[2,'NaOH'],[1,'H2']]),{type:'metal+water',conditions:'mały kawałek Na w krystalizatorze z wodą; tylko pokaz nauczyciela',observation:'Na topi się w kulkę i biega po powierzchni; wydziela się H₂; z fenoloftaleiną roztwór malinowy',safety:['reakcja gwałtowna — osłona, okulary, mały kawałek']}],
 caoh2Co2:[R([[1,'Ca(OH)2'],[1,'CO2']],[[1,'CaCO3'],[1,'H2O']]),{type:'precipitation (wykrywanie CO₂)',conditions:'CO₂ wprowadzany do wody wapiennej',observation:'klarowna woda wapienna mętnieje — biały osad CaCO₃',safety:['nie wciągać wody wapiennej do ust']}],
 na2Cl2:[R([[2,'Na'],[1,'Cl2']],[[2,'NaCl']]),{type:'synteza',conditions:'ogrzany sód w chlorze (pokaz)',observation:'jasny żółty płomień, biały dym NaCl',safety:['Cl₂ trujący, Na żrący — tylko pokaz']}],
 feS:[R([[1,'Fe'],[1,'S']],[[1,'FeS']]),{type:'synteza',conditions:'ogrzewanie mieszaniny opiłków Fe i siarki',observation:'mieszanina żarzy się; powstaje czarna, niemagnetyczna masa FeS',safety:['możliwy SO₂ — wentylacja']}],
 caoCo2:[R([[1,'CaO'],[1,'CO2']],[[1,'CaCO3']]),{type:'synteza',conditions:'tlenek zasadowy + tlenek kwasowy (twardnienie wapna)',observation:'—',safety:[]}],
 naohCo2:[R([[2,'NaOH'],[1,'CO2']],[[1,'Na2CO3'],[1,'H2O']]),{type:'zasada + tlenek kwasowy',conditions:'roztwór wodny',observation:'brak widocznych zmian (pochłanianie CO₂)',safety:['NaOH żrący']}],
 cuso4Naoh:[R([[1,'CuSO4'],[2,'NaOH']],[[1,'Cu(OH)2'],[1,'Na2SO4']]),{type:'precipitation',conditions:'roztwór wodny',observation:'niebieski, galaretowaty osad Cu(OH)₂',safety:['NaOH żrący']}],
 fecl3Naoh:[R([[1,'FeCl3'],[3,'NaOH']],[[1,'Fe(OH)3'],[3,'NaCl']]),{type:'precipitation',conditions:'roztwór wodny',observation:'rdzawobrunatny, kłaczkowaty osad Fe(OH)₃',safety:['NaOH żrący']}],
 agno3Nacl:[R([[1,'AgNO3'],[1,'NaCl']],[[1,'AgCl'],[1,'NaNO3']]),{type:'precipitation',conditions:'roztwór wodny',observation:'biały, serowaty osad AgCl (ciemnieje na świetle)',safety:['AgNO₃ żrący, plami skórę']}],
 bacl2Na2so4:[R([[1,'BaCl2'],[1,'Na2SO4']],[[1,'BaSO4'],[2,'NaCl']]),{type:'precipitation',conditions:'roztwór wodny',observation:'biały, drobnokrystaliczny osad BaSO₄',safety:['rozpuszczalne sole baru trujące']}],
 cacl2Na2co3:[R([[1,'CaCl2'],[1,'Na2CO3']],[[1,'CaCO3'],[2,'NaCl']]),{type:'precipitation',conditions:'roztwór wodny',observation:'biały osad CaCO₃ (musuje po dodaniu kwasu)',safety:[]}],
 pbno32Ki:[R([[1,'Pb(NO3)2'],[2,'KI']],[[1,'PbI2'],[2,'KNO3']]),{type:'precipitation',conditions:'roztwór wodny',observation:'jaskrawożółty osad PbI₂ („złoty deszcz” po przekrystalizowaniu)',safety:['związki ołowiu toksyczne']}],
 znCuso4:[R([[1,'Zn'],[1,'CuSO4']],[[1,'ZnSO4'],[1,'Cu']]),{type:'displacement',conditions:'roztwór wodny',observation:'niebieski roztwór odbarwia się, na cynku osadza się czerwonobrunatna miedź',safety:[]}],
 feCuso4:[R([[1,'Fe'],[1,'CuSO4']],[[1,'FeSO4'],[1,'Cu']]),{type:'displacement',conditions:'roztwór wodny (gwóźdź w CuSO₄)',observation:'gwóźdź pokrywa się miedzią, roztwór blednie i zielenieje',safety:[]}],
 cuAgno3:[R([[1,'Cu'],[2,'AgNO3']],[[1,'Cu(NO3)2'],[2,'Ag']]),{type:'displacement',conditions:'roztwór wodny (drut Cu w AgNO₃)',observation:'na drucie wyrastają srebrzyste kryształy Ag, roztwór niebieszczeje',safety:['AgNO₃ plami skórę']}],
 caco3Decomp:[R([[1,'CaCO3']],[[1,'CaO'],[1,'CO2']]),{type:'rozkład termiczny',conditions:'prażenie ok. 900 °C (wapno palone)',observation:'wapień traci masę; gaz mętni wodę wapienną',safety:['wysoka temperatura']}],
 caoH2o:[R([[1,'CaO'],[1,'H2O']],[[1,'Ca(OH)2']]),{type:'synteza',conditions:'gaszenie wapna',observation:'silne ogrzanie, syczenie; powstaje wapno gaszone',safety:['CaO i Ca(OH)₂ żrące — okulary']}],
 caoh2Co2Mortar:[R([[1,'Ca(OH)2'],[1,'CO2']],[[1,'CaCO3'],[1,'H2O']]),{type:'twardnienie zaprawy',conditions:'zaprawa wapienna na powietrzu (tygodnie)',observation:'zaprawa twardnieje',safety:[]}],
 caco3Co2H2o:[R([[1,'CaCO3'],[1,'CO2'],[1,'H2O']],[[1,'Ca(HCO3)2']]),{type:'synteza (kras)',conditions:'woda z CO₂ przesiąka przez wapień',observation:'wapień się rozpuszcza — jaskinie krasowe',safety:[]}],
 cahco32Decomp:[R([[1,'Ca(HCO3)2']],[[1,'CaCO3'],[1,'H2O'],[1,'CO2']]),{type:'rozkład termiczny',conditions:'gotowanie wody twardej',observation:'kamień kotłowy (biały osad CaCO₃); w jaskiniach — stalaktyty',safety:[]}],
 cuso4Hydrate:[R([[1,'CuSO4'],[5,'H2O']],[[1,'CuSO4·5H2O']]),{type:'hydratacja',conditions:'bezwodny CuSO₄ + woda',observation:'biały proszek niebieszczeje (wykrywanie wody)',safety:[]}],
 elHcl:[R([[2,'HCl']],[[1,'H2'],[1,'Cl2']]),{type:'elektroliza',conditions:'prąd stały, elektrody grafitowe; HCl(aq)',observation:'katoda (−): pęcherzyki H₂; anoda (+): Cl₂ (zapach chloru, częściowo rozpuszcza się)',safety:['Cl₂ toksyczny — krótko, wentylacja']}],
 elH2o:[R([[2,'H2O']],[[2,'H2'],[1,'O2']]),{type:'elektroliza',conditions:'prąd stały; roztwór H₂SO₄, NaOH lub innego elektrolitu (sam elektrolit się nie zużywa)',observation:'katoda (−): H₂, anoda (+): O₂ — objętości 2 : 1',safety:['mieszanina H₂ + O₂ wybuchowa']}],
 elNacl:[R([[2,'NaCl'],[2,'H2O']],[[2,'NaOH'],[1,'H2'],[1,'Cl2']]),{type:'elektroliza',conditions:'prąd stały; stężony roztwór NaCl',observation:'katoda (−): H₂ (roztwór zasadowy — fenoloftaleina malinowa), anoda (+): Cl₂',safety:['Cl₂ toksyczny']}],
 ch3coohNaoh:[R([[1,'CH3COOH'],[1,'NaOH']],[[1,'CH3COONa'],[1,'H2O']]),{type:'neutralization',conditions:'roztwór wodny',observation:'zobojętnianie; w PR pH > 7 (hydroliza octanu)',safety:['NaOH żrący']}]
};
Object.keys(add).forEach(k=>{if(D.REACTIONS[k])return;D.REACTIONS[k]=add[k][0];D.REACTION_DATA[k]=Object.assign({products:add[k][0].products.map(x=>x.formula)},add[k][1])});

Object.keys(D.REACTIONS).forEach(k=>{const a=D.REACTIONS[k].aliasOf;if(a&&!D.REACTION_DATA[k]&&D.REACTION_DATA[a])D.REACTION_DATA[k]=Object.assign({aliasOf:a},D.REACTION_DATA[a])});
 
D.REACTION_TYPE_NAMES={'metal+acid':'metal + kwas (redoks)','metal+water':'metal + woda (redoks)','neutralization':'zobojętnianie','precipitation':'strącanie osadu','precipitation (wykrywanie CO₂)':'strącanie (wykrywanie CO₂)','carbonate+acid':'węglan + kwas','acid+basic-oxide':'tlenek zasadowy + kwas','acid+amphoteric-oxide':'tlenek amfoteryczny + kwas','acid+oxide':'tlenek + kwas','salt+acid':'sól + kwas','redox':'redoks','redox (kompleksowanie)':'redoks z kompleksowaniem','acid+base (Brønsted)':'kwas + zasada (Brønsted)','synteza':'synteza','synteza kwasu':'synteza kwasu','synteza (równowagowa)':'synteza (równowagowa)','spalanie':'spalanie','utlenianie':'utlenianie','dysproporcjonowanie':'dysproporcjonowanie','rozkład':'rozkład','odwodnienie':'odwodnienie','otrzymywanie kwasu':'otrzymywanie kwasu','displacement':'wypieranie metalu (redoks)','rozkład termiczny':'rozkład termiczny','zasada + tlenek kwasowy':'zasada + tlenek kwasowy','twardnienie zaprawy':'twardnienie zaprawy wapiennej','synteza (kras)':'synteza (zjawiska krasowe)','hydratacja':'hydratacja (powstawanie hydratu)'};
})();

(function(){
const R=(r,p)=>({reactants:r.map(x=>({formula:x[1],coef:x[0]})),products:p.map(x=>({formula:x[1],coef:x[0]}))});
const add={
 sO2:[R([[1, "S"], [1, "O2"]],[[1, "SO2"]]),{"type": "spalanie", "conditions": "zapalenie siarki na łyżce do spaleń, dygestorium", "observation": "niebieski płomień; bezbarwny gaz o ostrym, duszącym zapachu", "safety": ["SO₂ duszący — dygestorium"], "level": "E8", "lesson": "N01"}],
 mgO2:[R([[2, "Mg"], [1, "O2"]],[[2, "MgO"]]),{"type": "spalanie", "conditions": "zapalenie w płomieniu palnika", "observation": "oślepiająco białe światło; biały proszek MgO", "safety": ["nie patrz w płomień; szczypce, okulary"], "level": "E8", "lesson": "N01"}],
 cO2:[R([[1, "C"], [1, "O2"]],[[1, "CO2"]]),{"type": "spalanie", "conditions": "nadmiar tlenu", "observation": "żarzenie; gaz mętniący wodę wapienną", "safety": [], "level": "E8", "lesson": "N01"}],
 cO2Inc:[R([[2, "C"], [1, "O2"]],[[2, "CO"]]),{"type": "spalanie", "conditions": "niedobór tlenu", "observation": "—", "safety": ["CO — czad, trujący, bezbarwny i bezwonny"], "level": "E8", "lesson": "N01"}],
 coO2:[R([[2, "CO"], [1, "O2"]],[[2, "CO2"]]),{"type": "spalanie", "conditions": "zapalenie", "observation": "niebieski płomień", "safety": ["CO trujący"], "level": "E8", "lesson": "N01"}],
 pO2:[R([[4, "P"], [5, "O2"]],[[2, "P2O5"]]),{"type": "spalanie", "conditions": "zapis szkolny (empiryczny)", "observation": "biały dym tlenku fosforu(V)", "safety": ["fosfor biały samozapalny i trujący"], "level": "E8", "lesson": "N01", "note": "dokładniej: P₄ + 5 O₂ → P₄O₁₀"}],
 p4O2:[R([[1, "P4"], [5, "O2"]],[[1, "P4O10"]]),{"type": "spalanie", "conditions": "zapis cząsteczkowy", "observation": "biały dym", "safety": ["fosfor biały samozapalny i trujący"], "level": "AMB", "lesson": "N01"}],
 feO2:[R([[3, "Fe"], [2, "O2"]],[[1, "Fe3O4"]]),{"type": "spalanie", "conditions": "wata/drut żelazny w czystym tlenie", "observation": "snop iskier; czarny Fe₃O₄", "safety": ["okulary; piasek na dnie naczynia"], "level": "AMB", "lesson": "N01"}],
 naO2:[R([[4, "Na"], [1, "O2"]],[[2, "Na2O"]]),{"type": "utlenianie", "conditions": "powolne utlenianie na powietrzu (model szkolny)", "observation": "metaliczny połysk szybko matowieje", "safety": ["sód — tylko pod naftą"], "level": "E8", "lesson": "N01", "note": "przy spalaniu w nadmiarze tlenu powstaje głównie nadtlenek Na₂O₂"}],
 naO2Per:[R([[2, "Na"], [1, "O2"]],[[1, "Na2O2"]]),{"type": "spalanie", "conditions": "spalanie w nadmiarze tlenu", "observation": "żółty płomień; jasnożółty nadtlenek", "safety": ["sód reaguje gwałtownie"], "level": "AMB", "lesson": "N01"}],
 caO2:[R([[2, "Ca"], [1, "O2"]],[[2, "CaO"]]),{"type": "spalanie", "conditions": "ogrzewanie", "observation": "ceglastoczerwony płomień; biały CaO", "safety": [], "level": "E8", "lesson": "N01"}],
 cuO2:[R([[2, "Cu"], [1, "O2"]],[[2, "CuO"]]),{"type": "utlenianie", "conditions": "ogrzewanie blaszki w płomieniu", "observation": "miedź czernieje (warstwa CuO)", "safety": [], "level": "E8", "lesson": "N01"}],
 alO2:[R([[4, "Al"], [3, "O2"]],[[2, "Al2O3"]]),{"type": "utlenianie", "conditions": "pył Al spala się; blacha pasywuje się w temperaturze pokojowej", "observation": "cienka, szczelna warstwa Al₂O₃ (pasywacja)", "safety": [], "level": "E8", "lesson": "N01"}],
 znO2:[R([[2, "Zn"], [1, "O2"]],[[2, "ZnO"]]),{"type": "spalanie", "conditions": "ogrzewanie", "observation": "biały ZnO (na gorąco żółty)", "safety": [], "level": "E8", "lesson": "N01"}],
 h2O2:[R([[2, "H2"], [1, "O2"]],[[2, "H2O"]]),{"type": "spalanie", "conditions": "zapalenie", "observation": "„pyk” — test na wodór; para wodna", "safety": ["mieszanina H₂ + O₂ wybuchowa"], "level": "E8", "lesson": "N01"}],
 ch4O2:[R([[1, "CH4"], [2, "O2"]],[[1, "CO2"], [2, "H2O"]]),{"type": "spalanie", "conditions": "nadmiar tlenu (całkowite)", "observation": "niebieski płomień", "safety": [], "level": "E8", "lesson": "N01"}],
 ch4O2Inc:[R([[2, "CH4"], [3, "O2"]],[[2, "CO"], [4, "H2O"]]),{"type": "spalanie", "conditions": "niedobór tlenu (niecałkowite)", "observation": "żółty, kopcący płomień", "safety": ["CO — czad"], "level": "E8", "lesson": "N01"}],
 ch4O2Soot:[R([[1, "CH4"], [1, "O2"]],[[1, "C"], [2, "H2O"]]),{"type": "spalanie", "conditions": "duży niedobór tlenu", "observation": "sadza (kopcenie)", "safety": ["CO i sadza"], "level": "E8", "lesson": "N01"}],
 c3h8O2:[R([[1, "C3H8"], [5, "O2"]],[[3, "CO2"], [4, "H2O"]]),{"type": "spalanie", "conditions": "nadmiar tlenu", "observation": "", "safety": [], "level": "E8", "lesson": "N01"}],
 c3h8O2Inc:[R([[2, "C3H8"], [7, "O2"]],[[6, "CO"], [8, "H2O"]]),{"type": "spalanie", "conditions": "niedobór tlenu", "observation": "", "safety": ["CO — czad"], "level": "E8", "lesson": "N01"}],
 c8h18O2:[R([[2, "C8H18"], [25, "O2"]],[[16, "CO2"], [18, "H2O"]]),{"type": "spalanie", "conditions": "silnik benzynowy (model)", "observation": "", "safety": [], "level": "AMB", "lesson": "N01"}],
 na2oH2o:[R([[1, "Na2O"], [1, "H2O"]],[[2, "NaOH"]]),{"type": "tlenek zasadowy + woda", "conditions": "", "observation": "roztwór barwi fenoloftaleinę na malinowo", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N01"}],
 k2oH2o:[R([[1, "K2O"], [1, "H2O"]],[[2, "KOH"]]),{"type": "tlenek zasadowy + woda", "conditions": "", "observation": "fenoloftaleina malinowa", "safety": ["KOH żrący"], "level": "E8", "lesson": "N01"}],
 li2oH2o:[R([[1, "Li2O"], [1, "H2O"]],[[2, "LiOH"]]),{"type": "tlenek zasadowy + woda", "conditions": "", "observation": "fenoloftaleina malinowa", "safety": [], "level": "E8", "lesson": "N01"}],
 mgoH2o:[R([[1, "MgO"], [1, "H2O"]],[[1, "Mg(OH)2"]]),{"type": "tlenek zasadowy + woda", "conditions": "bardzo powoli, w niewielkim stopniu (szkolnie: praktycznie nie)", "observation": "fenoloftaleina słabo różowa", "safety": [], "level": "E8", "lesson": "N01"}],
 p2o5H2o:[R([[1, "P2O5"], [3, "H2O"]],[[2, "H3PO4"]]),{"type": "tlenek kwasowy + woda", "conditions": "zapis empiryczny", "observation": "reakcja gwałtowna, egzotermiczna", "safety": ["P₂O₅ żrący"], "level": "E8", "lesson": "N01"}],
 mn2o7H2o:[R([[1, "Mn2O7"], [1, "H2O"]],[[2, "HMnO4"]]),{"type": "tlenek kwasowy + woda", "conditions": "metal na +VII → tlenek kwasowy", "observation": "fioletowy roztwór", "safety": ["Mn₂O₇ wybuchowy"], "level": "AMB", "lesson": "N01"}],
 cro3H2o:[R([[1, "CrO3"], [1, "H2O"]],[[1, "H2CrO4"]]),{"type": "tlenek kwasowy + woda", "conditions": "metal na +VI → tlenek kwasowy", "observation": "pomarańczowo-żółty roztwór", "safety": ["związki Cr(VI) rakotwórcze"], "level": "AMB", "lesson": "N01"}],
 cl2o7H2o:[R([[1, "Cl2O7"], [1, "H2O"]],[[2, "HClO4"]]),{"type": "tlenek kwasowy + woda", "conditions": "", "observation": "", "safety": ["Cl₂O₇ wybuchowy"], "level": "AMB", "lesson": "N01"}],
 al2o3Hcl:[R([[1, "Al2O3"], [6, "HCl"]],[[2, "AlCl3"], [3, "H2O"]]),{"type": "tlenek amfoteryczny + kwas", "conditions": "", "observation": "biały proszek roztwarza się (wolno)", "safety": [], "level": "E8", "lesson": "N01"}],
 fe2o3H2so4:[R([[1, "Fe2O3"], [3, "H2SO4"]],[[1, "Fe2(SO4)3"], [3, "H2O"]]),{"type": "tlenek zasadowy + kwas", "conditions": "", "observation": "roztwór żółtobrunatny (jony Fe³⁺)", "safety": [], "level": "E8", "lesson": "N01"}],
 co2Koh:[R([[1, "CO2"], [2, "KOH"]],[[1, "K2CO3"], [1, "H2O"]]),{"type": "zasada + tlenek kwasowy", "conditions": "przewaga zasady", "observation": "", "safety": [], "level": "E8", "lesson": "N01"}],
 co2NaohExc:[R([[1, "CO2"], [1, "NaOH"]],[[1, "NaHCO3"]]),{"type": "zasada + tlenek kwasowy", "conditions": "nadmiar CO₂ (stosunek 1 : 1)", "observation": "", "safety": [], "level": "AMB", "lesson": "N01"}],
 na2co3Co2:[R([[1, "Na2CO3"], [1, "CO2"], [1, "H2O"]],[[2, "NaHCO3"]]),{"type": "synteza", "conditions": "dalsze wprowadzanie CO₂", "observation": "", "safety": [], "level": "AMB", "lesson": "N01"}],
 so2Naoh:[R([[1, "SO2"], [2, "NaOH"]],[[1, "Na2SO3"], [1, "H2O"]]),{"type": "zasada + tlenek kwasowy", "conditions": "przewaga zasady", "observation": "", "safety": [], "level": "E8", "lesson": "N01"}],
 so3Naoh:[R([[1, "SO3"], [2, "NaOH"]],[[1, "Na2SO4"], [1, "H2O"]]),{"type": "zasada + tlenek kwasowy", "conditions": "", "observation": "", "safety": [], "level": "E8", "lesson": "N01"}],
 sio2Naoh:[R([[1, "SiO2"], [2, "NaOH"]],[[1, "Na2SiO3"], [1, "H2O"]]),{"type": "zasada + tlenek kwasowy", "conditions": "ogrzewanie lub stopiony NaOH (Δ) — nie szybko w zimnym roztworze", "observation": "", "safety": ["NaOH żrący, stopiony — bardzo niebezpieczny"], "level": "E8", "lesson": "N01"}],
 al2o3NaohMelt:[R([[1, "Al2O3"], [2, "NaOH"]],[[2, "NaAlO2"], [1, "H2O"]]),{"type": "tlenek amfoteryczny + zasada", "conditions": "stapianie (zapis zależny od warunków)", "observation": "", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N01"}],
 al2o3NaohAq:[R([[1, "Al2O3"], [2, "NaOH"], [3, "H2O"]],[[2, "NaAl(OH)4"]]),{"type": "tlenek amfoteryczny + zasada", "conditions": "roztwór wodny (jonowo: Al₂O₃ + 2 OH⁻ + 3 H₂O → 2 [Al(OH)₄]⁻)", "observation": "", "safety": ["NaOH żrący"], "level": "AMB", "lesson": "N01"}],
 znoNaoh:[R([[1, "ZnO"], [2, "NaOH"]],[[1, "Na2ZnO2"], [1, "H2O"]]),{"type": "tlenek amfoteryczny + zasada", "conditions": "zapis uproszczony (stapianie)", "observation": "", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N01"}],
 znoNaohAq:[R([[1, "ZnO"], [2, "NaOH"], [1, "H2O"]],[[1, "Na2Zn(OH)4"]]),{"type": "tlenek amfoteryczny + zasada", "conditions": "roztwór wodny (kompleks hydroksocynkanowy)", "observation": "", "safety": ["NaOH żrący"], "level": "AMB", "lesson": "N01"}],
 na2oCo2:[R([[1, "Na2O"], [1, "CO2"]],[[1, "Na2CO3"]]),{"type": "synteza", "conditions": "tlenek zasadowy + tlenek kwasowy", "observation": "", "safety": [], "level": "AMB", "lesson": "N01"}],
 caoSio2:[R([[1, "CaO"], [1, "SiO2"]],[[1, "CaSiO3"]]),{"type": "synteza", "conditions": "wysoka temperatura (żużel w wielkim piecu)", "observation": "", "safety": [], "level": "AMB", "lesson": "N01"}],
 cuoH2:[R([[1, "CuO"], [1, "H2"]],[[1, "Cu"], [1, "H2O"]]),{"type": "redoks", "conditions": "ogrzewanie (Δ)", "observation": "czarny CuO → czerwonobrunatna miedź; kropelki wody", "safety": ["H₂ palny"], "level": "E8", "lesson": "N01"}],
 cuoC:[R([[2, "CuO"], [1, "C"]],[[2, "Cu"], [1, "CO2"]]),{"type": "redoks", "conditions": "silne ogrzewanie (Δ)", "observation": "czerwonawa miedź; gaz mętniący wodę wapienną", "safety": [], "level": "E8", "lesson": "N01"}],
 fe2o3Co:[R([[1, "Fe2O3"], [3, "CO"]],[[2, "Fe"], [3, "CO2"]]),{"type": "redoks", "conditions": "wielki piec (Δ) — główny przykład przemysłowy", "observation": "", "safety": ["CO trujący"], "level": "E8", "lesson": "N01"}],
 fe2o3C:[R([[1, "Fe2O3"], [3, "C"]],[[2, "Fe"], [3, "CO"]]),{"type": "redoks", "conditions": "model uproszczony (Δ)", "observation": "", "safety": [], "level": "E8", "lesson": "N01", "note": "w wielkim piecu głównym reduktorem jest CO"}],
 termit:[R([[1, "Fe2O3"], [2, "Al"]],[[2, "Fe"], [1, "Al2O3"]]),{"type": "redoks", "conditions": "zapłon; lokalnie ok. 2500 °C (zależnie od warunków)", "observation": "oślepiające światło, płynne żelazo", "safety": ["wyłącznie analiza równania — nie do wykonania samodzielnie"], "level": "AMB", "lesson": "N01"}],
 feH2oSteam:[R([[3, "Fe"], [4, "H2O"]],[[1, "Fe3O4"], [4, "H2"]]),{"type": "redoks", "conditions": "para wodna H₂O(g), wysoka temperatura — nie zimna woda", "observation": "", "safety": ["wodór palny; tylko laboratorium profesjonalne"], "level": "AMB", "lesson": "N01"}],
 mgCo2:[R([[2, "Mg"], [1, "CO2"]],[[2, "MgO"], [1, "C"]]),{"type": "redoks", "conditions": "zapalony magnez w CO₂", "observation": "magnez pali się dalej; czarne drobiny węgla", "safety": ["nie gaś palącego się magnezu CO₂!"], "level": "AMB", "lesson": "N01"}],
 hgoDecomp:[R([[2, "HgO"]],[[2, "Hg"], [1, "O2"]]),{"type": "rozkład termiczny", "conditions": "ogrzewanie (Δ) — doświadczenie historyczne (Priestley)", "observation": "", "safety": ["HgO i pary rtęci toksyczne — nie wykonywać"], "level": "AMB", "lesson": "N01"}],
 pbo2Decomp:[R([[2, "PbO2"]],[[2, "PbO"], [1, "O2"]]),{"type": "rozkład termiczny", "conditions": "ogrzewanie (Δ)", "observation": "", "safety": ["związki ołowiu toksyczne"], "level": "ZA", "lesson": "N01"}],
 ag2oDecomp:[R([[2, "Ag2O"]],[[4, "Ag"], [1, "O2"]]),{"type": "rozkład termiczny", "conditions": "ogrzewanie (Δ)", "observation": "", "safety": [], "level": "ZA", "lesson": "N01"}],
 h2o2Decomp:[R([[2, "H2O2"]],[[2, "H2O"], [1, "O2"]]),{"type": "rozkład", "conditions": "katalizator MnO₂", "observation": "intensywne pienienie; tlący się łuczek zapala się", "safety": ["stężony H₂O₂ żrący"], "level": "E8", "lesson": "N01"}],
 kclo3Decomp:[R([[2, "KClO3"]],[[2, "KCl"], [3, "O2"]]),{"type": "rozkład termiczny", "conditions": "ogrzewanie, katalizator MnO₂", "observation": "", "safety": ["silny utleniacz"], "level": "AMB", "lesson": "N01"}],
 na2o2H2o:[R([[2, "Na2O2"], [2, "H2O"]],[[4, "NaOH"], [1, "O2"]]),{"type": "rozkład", "conditions": "nadtlenek + woda", "observation": "wydziela się tlen", "safety": ["żrący"], "level": "AMB", "lesson": "N01"}],
 feO2Rust:[R([[4, "Fe"], [3, "O2"]],[[2, "Fe2O3"]]),{"type": "utlenianie", "conditions": "model przybliżony korozji — rdza to mieszanina uwodnionych tlenków i wodorotlenków żelaza", "observation": "", "safety": [], "level": "E8", "lesson": "N01", "note": "dokładniej: 4 Fe + 3 O₂ + n H₂O → 2 Fe₂O₃·nH₂O (też przybliżenie)"}]
};
Object.keys(add).forEach(k=>{if(D.REACTIONS[k])return;D.REACTIONS[k]=add[k][0];D.REACTION_DATA[k]=Object.assign({products:add[k][0].products.map(x=>x.formula)},add[k][1])});
Object.assign(D.REACTION_TYPE_NAMES||{},{"tlenek zasadowy + woda": "tlenek zasadowy + woda", "tlenek kwasowy + woda": "tlenek kwasowy + woda", "tlenek amfoteryczny + kwas": "tlenek amfoteryczny + kwas", "tlenek zasadowy + kwas": "tlenek zasadowy + kwas", "tlenek amfoteryczny + zasada": "tlenek amfoteryczny + zasada"});
})();

(function(){
const R=(r,p)=>({reactants:r.map(x=>({formula:x[1],coef:x[0]})),products:p.map(x=>({formula:x[1],coef:x[0]}))});
const add={
 liH2o:[R([[2, "Li"], [2, "H2O"]],[[2, "LiOH"], [1, "H2"]]),{"type": "metal + woda", "conditions": "temperatura pokojowa", "observation": "lit pływa, powoli wydziela się gaz; roztwór zasadowy (fenoloftaleina malinowa)", "safety": ["pokaz nauczyciela; okulary, osłona"], "level": "E8", "lesson": "N02"}],
 kH2o:[R([[2, "K"], [2, "H2O"]],[[2, "KOH"], [1, "H2"]]),{"type": "metal + woda", "conditions": "temperatura pokojowa, bardzo mała grudka", "observation": "potas „biega” po wodzie, wodór zapala się fioletowym płomieniem; roztwór zasadowy", "safety": ["wyłącznie pokaz nauczyciela; osłona, okulary"], "level": "E8", "lesson": "N02"}],
 caH2o:[R([[1, "Ca"], [2, "H2O"]],[[1, "Ca(OH)2"], [1, "H2"]]),{"type": "metal + woda", "conditions": "temperatura pokojowa", "observation": "równomierne wydzielanie gazu, mętnienie (słabo rozpuszczalny Ca(OH)₂); fenoloftaleina malinowa", "safety": ["okulary"], "level": "E8", "lesson": "N02"}],
 baH2o:[R([[1, "Ba"], [2, "H2O"]],[[1, "Ba(OH)2"], [1, "H2"]]),{"type": "metal + woda", "conditions": "temperatura pokojowa", "observation": "wydziela się wodór; roztwór zasadowy", "safety": ["związki baru trujące — tylko pokaz"], "level": "AMB", "lesson": "N02"}],
 mgH2oHot:[R([[1, "Mg"], [2, "H2O"]],[[1, "Mg(OH)2"], [1, "H2"]]),{"type": "metal + woda", "conditions": "gorąca woda (z zimną reakcja praktycznie nie zachodzi)", "observation": "powolne wydzielanie pęcherzyków; fenoloftaleina słabo różowa", "safety": ["okulary; ogrzewanie"], "level": "E8", "lesson": "N02"}],
 baoH2o:[R([[1, "BaO"], [1, "H2O"]],[[1, "Ba(OH)2"]]),{"type": "tlenek zasadowy + woda", "conditions": "temperatura pokojowa", "observation": "układ się ogrzewa; roztwór zasadowy", "safety": ["związki baru trujące"], "level": "AMB", "lesson": "N02"}],
 mgcl2Naoh:[R([[1, "MgCl2"], [2, "NaOH"]],[[1, "Mg(OH)2"], [2, "NaCl"]]),{"type": "strącanie wodorotlenku", "conditions": "roztwory wodne", "observation": "biały, galaretowaty osad", "safety": ["NaOH żrący — okulary, rękawice"], "level": "E8", "lesson": "N02"}],
 alcl3Naoh:[R([[1, "AlCl3"], [3, "NaOH"]],[[1, "Al(OH)3"], [3, "NaCl"]]),{"type": "strącanie wodorotlenku", "conditions": "NaOH dodawany kroplami, bez nadmiaru", "observation": "biały, galaretowaty osad; w nadmiarze NaOH osad się roztwarza (amfoteryczność)", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N02"}],
 znso4Naoh:[R([[1, "ZnSO4"], [2, "NaOH"]],[[1, "Zn(OH)2"], [1, "Na2SO4"]]),{"type": "strącanie wodorotlenku", "conditions": "NaOH kroplami, bez nadmiaru", "observation": "biały osad; w nadmiarze NaOH znika", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N02"}],
 feso4Naoh:[R([[1, "FeSO4"], [2, "NaOH"]],[[1, "Fe(OH)2"], [1, "Na2SO4"]]),{"type": "strącanie wodorotlenku", "conditions": "świeży roztwór FeSO₄", "observation": "zielonkawy osad, na powietrzu brunatnieje (utlenianie do Fe(OH)₃)", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N02"}],
 cucl2Naoh:[R([[1, "CuCl2"], [2, "NaOH"]],[[1, "Cu(OH)2"], [2, "NaCl"]]),{"type": "strącanie wodorotlenku", "conditions": "roztwory wodne", "observation": "niebieski, galaretowaty osad", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N02"}],
 niso4Naoh:[R([[1, "NiSO4"], [2, "NaOH"]],[[1, "Ni(OH)2"], [1, "Na2SO4"]]),{"type": "strącanie wodorotlenku", "conditions": "roztwory wodne", "observation": "jasnozielony osad", "safety": ["NaOH żrący; sole niklu uczulają"], "level": "AMB", "lesson": "N02"}],
 mnso4Naoh:[R([[1, "MnSO4"], [2, "NaOH"]],[[1, "Mn(OH)2"], [1, "Na2SO4"]]),{"type": "strącanie wodorotlenku", "conditions": "roztwory wodne", "observation": "biały (beżowy) osad, brunatnieje na powietrzu", "safety": ["NaOH żrący"], "level": "AMB", "lesson": "N02"}],
 pbno32Naoh:[R([[1, "Pb(NO3)2"], [2, "NaOH"]],[[1, "Pb(OH)2"], [2, "NaNO3"]]),{"type": "strącanie wodorotlenku", "conditions": "NaOH kroplami", "observation": "biały osad; w nadmiarze NaOH znika", "safety": ["związki ołowiu trujące — tylko pokaz"], "level": "AMB", "lesson": "N02"}],
 cacl2Naoh:[R([[1, "CaCl2"], [2, "NaOH"]],[[1, "Ca(OH)2"], [2, "NaCl"]]),{"type": "strącanie wodorotlenku", "conditions": "tylko roztwory stężone (Ca(OH)₂ trudno, ale nie praktycznie nierozpuszczalny)", "observation": "białe zmętnienie", "safety": ["NaOH żrący"], "level": "E8", "lesson": "N02"}],
 agno3Naoh:[R([[2, "AgNO3"], [2, "NaOH"]],[[1, "Ag2O"], [2, "NaNO3"], [1, "H2O"]]),{"type": "strącanie wodorotlenku", "conditions": "roztwory wodne", "observation": "brunatny osad Ag₂O (AgOH nietrwały)", "safety": ["AgNO₃ plami skórę; NaOH żrący"], "level": "AMB", "lesson": "N02", "note": "AgOH powstaje przejściowo i od razu przechodzi w Ag₂O"}],
 alcl3Nh3:[R([[1, "AlCl3"], [3, "NH3"], [3, "H2O"]],[[1, "Al(OH)3"], [3, "NH4Cl"]]),{"type": "strącanie wodorotlenku", "conditions": "woda amoniakalna — nadmiar nie roztwarza osadu", "observation": "biały, galaretowaty osad", "safety": ["NH₃ drażniący — dygestorium"], "level": "LO", "lesson": "N02"}],
 kohHno3:[R([[1, "KOH"], [1, "HNO3"]],[[1, "KNO3"], [1, "H2O"]]),{"type": "zobojętnianie", "conditions": "roztwory wodne", "observation": "brak widocznych zmian; z fenoloftaleiną zanik barwy malinowej", "safety": ["roztwory żrące"], "level": "E8", "lesson": "N02"}],
 naohHno3:[R([[1, "NaOH"], [1, "HNO3"]],[[1, "NaNO3"], [1, "H2O"]]),{"type": "zobojętnianie", "conditions": "roztwory wodne", "observation": "brak widocznych zmian; lekkie ogrzanie", "safety": ["roztwory żrące"], "level": "E8", "lesson": "N02"}],
 kohHcl:[R([[1, "KOH"], [1, "HCl"]],[[1, "KCl"], [1, "H2O"]]),{"type": "zobojętnianie", "conditions": "roztwory wodne", "observation": "brak widocznych zmian; lekkie ogrzanie", "safety": ["roztwory żrące"], "level": "E8", "lesson": "N02"}],
 caoh2Hcl:[R([[1, "Ca(OH)2"], [2, "HCl"]],[[1, "CaCl2"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "woda wapienna lub mleko wapienne", "observation": "zawiesina klaruje się; zanik barwy fenoloftaleiny", "safety": [], "level": "E8", "lesson": "N02"}],
 caoh2H2so4:[R([[1, "Ca(OH)2"], [1, "H2SO4"]],[[1, "CaSO4"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "roztwory", "observation": "możliwe białe zmętnienie (CaSO₄ trudno rozpuszczalny)", "safety": ["H₂SO₄ żrący"], "level": "E8", "lesson": "N02"}],
 baoh2H2so4:[R([[1, "Ba(OH)2"], [1, "H2SO4"]],[[1, "BaSO4"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "roztwory", "observation": "biały osad BaSO₄ + zanik barwy fenoloftaleiny (zobojętnianie i strącanie jednocześnie)", "safety": ["związki baru trujące"], "level": "E8", "lesson": "N02"}],
 baoh2Hcl:[R([[1, "Ba(OH)2"], [2, "HCl"]],[[1, "BaCl2"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "roztwory", "observation": "brak widocznych zmian; zanik barwy fenoloftaleiny", "safety": ["związki baru trujące"], "level": "AMB", "lesson": "N02"}],
 cuoh2H2so4:[R([[1, "Cu(OH)2"], [1, "H2SO4"]],[[1, "CuSO4"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "osad + rozcieńczony kwas", "observation": "niebieski osad znika, roztwór niebieski", "safety": ["H₂SO₄ żrący"], "level": "E8", "lesson": "N02"}],
 cuoh2Hcl:[R([[1, "Cu(OH)2"], [2, "HCl"]],[[1, "CuCl2"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "osad + kwas", "observation": "osad znika, roztwór zielononiebieski", "safety": [], "level": "E8", "lesson": "N02"}],
 feoh3Hcl:[R([[1, "Fe(OH)3"], [3, "HCl"]],[[1, "FeCl3"], [3, "H2O"]]),{"type": "zobojętnianie", "conditions": "osad + kwas", "observation": "brunatny osad znika, roztwór żółtobrunatny", "safety": [], "level": "E8", "lesson": "N02"}],
 znoh2Hcl:[R([[1, "Zn(OH)2"], [2, "HCl"]],[[1, "ZnCl2"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "osad + kwas", "observation": "biały osad znika, roztwór bezbarwny", "safety": [], "level": "E8", "lesson": "N02"}],
 aloh3H2so4:[R([[2, "Al(OH)3"], [3, "H2SO4"]],[[1, "Al2(SO4)3"], [6, "H2O"]]),{"type": "zobojętnianie", "conditions": "osad + kwas", "observation": "biały osad znika", "safety": ["H₂SO₄ żrący"], "level": "AMB", "lesson": "N02"}],
 mgoh2H2so4:[R([[1, "Mg(OH)2"], [1, "H2SO4"]],[[1, "MgSO4"], [2, "H2O"]]),{"type": "zobojętnianie", "conditions": "zawiesina + kwas", "observation": "zawiesina klaruje się", "safety": [], "level": "AMB", "lesson": "N02"}],
 aloh3Naoh:[R([[1, "Al(OH)3"], [1, "NaOH"]],[[1, "NaAl(OH)4"]]),{"type": "wodorotlenek amfoteryczny + zasada", "conditions": "nadmiar stężonego NaOH", "observation": "biały osad roztwarza się — roztwór klarowny", "safety": ["NaOH żrący"], "level": "LO", "lesson": "N02", "note": "zapis kompleksowy: Na[Al(OH)₄]; na E8 wystarczy „reaguje z mocną zasadą”"}],
 znoh2Naoh:[R([[1, "Zn(OH)2"], [2, "NaOH"]],[[1, "Na2Zn(OH)4"]]),{"type": "wodorotlenek amfoteryczny + zasada", "conditions": "nadmiar NaOH", "observation": "biały osad roztwarza się", "safety": ["NaOH żrący"], "level": "LO", "lesson": "N02", "note": "zapis kompleksowy: Na₂[Zn(OH)₄]"}],
 pboh2Naoh:[R([[1, "Pb(OH)2"], [2, "NaOH"]],[[1, "Na2Pb(OH)4"]]),{"type": "wodorotlenek amfoteryczny + zasada", "conditions": "nadmiar NaOH", "observation": "osad roztwarza się", "safety": ["związki ołowiu trujące"], "level": "LO", "lesson": "N02", "note": "zapis kompleksowy: Na₂[Pb(OH)₄]"}],
 baoh2Co2:[R([[1, "Ba(OH)2"], [1, "CO2"]],[[1, "BaCO3"], [1, "H2O"]]),{"type": "zasada + tlenek kwasowy", "conditions": "wdmuchiwanie CO₂", "observation": "białe zmętnienie BaCO₃", "safety": ["związki baru trujące"], "level": "AMB", "lesson": "N02"}],
 caoh2Na2co3:[R([[1, "Ca(OH)2"], [1, "Na2CO3"]],[[1, "CaCO3"], [2, "NaOH"]]),{"type": "zasada + sól", "conditions": "mleko wapienne + roztwór sody", "observation": "biały osad CaCO₃; roztwór silnie zasadowy (NaOH)", "safety": ["NaOH żrący"], "level": "LO", "lesson": "N02", "note": "kaustyfikacja — dawna metoda otrzymywania NaOH"}],
 nh4clNaoh:[R([[1, "NH4Cl"], [1, "NaOH"]],[[1, "NaCl"], [1, "NH3"], [1, "H2O"]]),{"type": "zasada + sól", "conditions": "ogrzewanie", "observation": "charakterystyczny zapach amoniaku; zwilżony papierek uniwersalny nad probówką niebieszczeje", "safety": ["NH₃ drażniący — wąchać „wachlując”"], "level": "AMB", "lesson": "N02", "note": "wykrywanie jonów NH₄⁺"}],
 cuoh2Heat:[R([[1, "Cu(OH)2"]],[[1, "CuO"], [1, "H2O"]]),{"type": "rozkład termiczny wodorotlenku", "conditions": "ogrzewanie osadu (już ok. 80 °C w wodzie)", "observation": "niebieski osad czernieje (CuO)", "safety": ["gorące naczynie"], "level": "E8", "lesson": "N02"}],
 feoh3Heat:[R([[2, "Fe(OH)3"]],[[1, "Fe2O3"], [3, "H2O"]]),{"type": "rozkład termiczny wodorotlenku", "conditions": "prażenie", "observation": "brunatny osad → czerwonobrunatny proszek", "safety": [], "level": "AMB", "lesson": "N02"}],
 aloh3Heat:[R([[2, "Al(OH)3"]],[[1, "Al2O3"], [3, "H2O"]]),{"type": "rozkład termiczny wodorotlenku", "conditions": "prażenie", "observation": "biały proszek Al₂O₃", "safety": [], "level": "AMB", "lesson": "N02"}],
 mgoh2Heat:[R([[1, "Mg(OH)2"]],[[1, "MgO"], [1, "H2O"]]),{"type": "rozkład termiczny wodorotlenku", "conditions": "prażenie (ok. 350 °C)", "observation": "biały proszek MgO; para wodna", "safety": [], "level": "AMB", "lesson": "N02"}],
 znoh2Heat:[R([[1, "Zn(OH)2"]],[[1, "ZnO"], [1, "H2O"]]),{"type": "rozkład termiczny wodorotlenku", "conditions": "ogrzewanie", "observation": "biały proszek ZnO (na gorąco żółty)", "safety": [], "level": "AMB", "lesson": "N02"}],
 caoh2Heat:[R([[1, "Ca(OH)2"]],[[1, "CaO"], [1, "H2O"]]),{"type": "rozkład termiczny wodorotlenku", "conditions": "prażenie (ok. 500 °C)", "observation": "biały proszek CaO; para wodna", "safety": [], "level": "AMB", "lesson": "N02"}],
 agohDec:[R([[2, "AgOH"]],[[1, "Ag2O"], [1, "H2O"]]),{"type": "rozkład nietrwałego wodorotlenku", "conditions": "temperatura pokojowa", "observation": "brunatny osad Ag₂O", "safety": [], "level": "AMB", "lesson": "N02"}],
 cuohDec:[R([[2, "CuOH"]],[[1, "Cu2O"], [1, "H2O"]]),{"type": "rozkład nietrwałego wodorotlenku", "conditions": "temperatura pokojowa", "observation": "czerwonobrunatny Cu₂O", "safety": [], "level": "LO", "lesson": "N02"}],
 feoh2O2:[R([[4, "Fe(OH)2"], [1, "O2"], [2, "H2O"]],[[4, "Fe(OH)3"]]),{"type": "utlenianie wodorotlenku", "conditions": "kontakt z powietrzem", "observation": "zielonkawy osad brunatnieje od góry", "safety": [], "level": "AMB", "lesson": "N02"}]
};
Object.keys(add).forEach(k=>{if(D.REACTIONS[k])return;D.REACTIONS[k]=add[k][0];D.REACTION_DATA[k]=Object.assign({products:add[k][0].products.map(x=>x.formula)},add[k][1])});
D.REACTION_TYPE_NAMES=D.REACTION_TYPE_NAMES||{};Object.keys({"metal + woda": "metal + woda", "rozkład nietrwałego wodorotlenku": "rozkład nietrwałego wodorotlenku", "rozkład termiczny wodorotlenku": "rozkład termiczny wodorotlenku", "strącanie wodorotlenku": "strącanie wodorotlenku", "tlenek zasadowy + woda": "tlenek zasadowy + woda", "utlenianie wodorotlenku": "utlenianie wodorotlenku", "wodorotlenek amfoteryczny + zasada": "wodorotlenek amfoteryczny + zasada", "zasada + sól": "zasada + sól", "zasada + tlenek kwasowy": "zasada + tlenek kwasowy", "zobojętnianie": "zobojętnianie"}).forEach(function(t){if(!D.REACTION_TYPE_NAMES[t])D.REACTION_TYPE_NAMES[t]=t});
})();

C.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);
})(window);

} catch (err) {
  try { console.warn('[CHE module 4]', err && err.message ? err.message : err); } catch(_){}
}

