
(function(){
  const C=window.CHE;if(!C)return;
  const A=C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
  const rows=[
    ['indLab','MIGRATED_ADAPTER','substancja/odczyn: centralny profil; poprawna odpowiedź pozostaje scenariuszem dydaktycznym'],
    ['charSim','MIGRATED_REACTION_DATA','równania preferują CHE.REACTION; klasyfikacja i wygląd pozostają prezentacją'],
    ['wodorGrid','MIGRATED_SUBSTANCE_ADAPTER','wzór/nazwa/profil centralny, lokalne kafelki tylko jako warstwa dydaktyczna'],
    ['trendBars','MIGRATED_SUBSTANCE_ADAPTER','opis centralny, wysokość słupka pozostaje parametrem wizualizacji'],
    ['oxGallery','MIGRATED_SUBSTANCE_ADAPTER','nazwa/notatka preferują centralny profil; kolory są wizualizacją'],
    ['reszta','MIGRATED_CENTRAL_FORMULA_ADAPTER','skład i wzór korzystają z centralnego modelu'],
    ['ionAssemblyO','MIGRATED_CENTRAL_FORMULA_ADAPTER','ładunki i wzór korzystają z WIDGET_API'],
    ['stoichSolver','MIGRATED_MOLAR_MASS','masy molowe z WIDGET_API; scenariusze pozostają UI'],
    ['vseprStage','MIGRATED_GEOMETRY','geometria z CHE.STRUCTURE/CHE.GEOMETRY'],
    ['dwStage','PRESENTATION_SCENARIO','nie przenoszono scenariusza animacji do bazy chemicznej'],
    ['dissWidget','PRESENTATION_SCENARIO','nie przenoszono scenariusza animacji do bazy chemicznej']
  ];
  A.localDataAudit={version:'0.12',sourceOfTruth:'FULL_ENGINE',rows,policy:'CHEMICAL_FACTS_CENTRAL; UI_SCENARIOS_LOCAL'};
  C.AUDIT?.add?.('GIGA 20: lokalne dane widgetów sklasyfikowane',true,'Rozdzielono fakty chemiczne od presetów dydaktycznych i parametrów grafiki.');
  C.AUDIT?.add?.('GIGA 20: brak drugiego silnika',true,'Lokalne widgety nie są traktowane jako źródło prawdy dla centralnej chemii.');
})();
