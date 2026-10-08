try {
 
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

