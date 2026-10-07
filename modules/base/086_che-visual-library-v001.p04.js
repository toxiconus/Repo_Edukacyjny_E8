C.VISUAL_LIBRARY=C.VISUAL_LIBRARY||{};
C.VISUAL_LIBRARY.version='v0.06-canonical-visuals';
C.VISUAL_LIBRARY.source='CHE_lab_LATEST_zoom + stare warianty przed konsolidacją';
C.VISUAL_LIBRARY.policy={
  canonical:true,
  mergeRule:'najlepsze elementy starych wariantów → jedna wersja kanoniczna → dalsze ulepszanie',
  keepLegacyUntilCovered:true,
  sharedData:true,
  sharedEngine:true
};
C.VISUAL_LIBRARY.catalog={
  '001-ATOM':['molecule-electrons','molecule-cv','live-cv'],
  '002-UKLAD_OKRESOWY':['periodic-54'],
  '003-CZASTECZKA_2D_3D':['molecule-2d','molecule3d-merged'],
  '004-ORBITALE_ELEKTRONY':['molecule-orbitals','molecule-electrons'],
  '005-WIAZANIA_GEOMETRIA':['molecule-2d','molecule3d-merged'],
  '006-pH_WSKAZNIKI':['ph-indicators-v03','ph-table','ph-ladder'],
  '007-DYSOCJACJA_JONY':['diss-hcl-mech-v02','diss-three-levels','hydronium','ion-map-v02','ion-vs-diss'],
  '008-MOC_KWASU_RÓWNOWAGA':['strong-vs-weak-enhanced-v02','alpha-slider','moc-vs-c','ka-pka-table','buffer'],
  '009-REAKCJE':['four-reactions','neutralization','metal-reaction-v02','reaction-decision','equilibrium'],
  '010-MECHANIZMY':['diss-hcl-mech-v02','step-eq','diss-stepwise','chain-scn'],
  '011-DIAGRAMY_FLOWCHARTY':['obtaining-three','obtaining-hcl-steps','flow-naming','flow-egzamin-enhanced','reaction-decision','env-balance'],
  '012-MAPY_MYSLI':['mind-map'],
  '013-LABORATORIA':['ind-lab','beaker-prediction-enhanced','reakcje-kwasu-v03','lab-beaker-v102','lab-oxides-v102','reactor-enhanced','titration-merged'],
  '014-WYKRESY_MODELE':['energy-profile','kinetics-v01','chart-strength','titration-merged','acid-calculator'],
  '015-SRODOWISKO':['acid-rain-v01','env-balance'],
  '016-NAUKA_PODPOWIEDZI':['flashcards-deck','acid-game','compound-cards','reszta-builder','safety']
};
C.VISUAL_LIBRARY.legacyMining={
  mindMapsFromMD:['ATOM','JON','WZÓR SUMARYCZNY','RÓWNANIE','WIĄZANIA','TYPY REAKCJI','UKŁAD OKRESOWY','KLINIKA BŁĘDÓW'],
  retainedBecauseValuable:['diagramy z podpowiedziami','flowcharty','mapy myśli','porównania wielu próbek','modele obserwacja→wniosek','klinika błędów'],
  status:'SOURCE-INVENTORY-CAPTURED',uiMount:'PANE-WIZUAL-CANONICAL-V004'
};
})();
