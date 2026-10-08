try {

(function(){
 const CHE=window.CHE=window.CHE||{};
 const SRC={basis:'Polish curriculum framework reviewed 2026-10-02',
   sp:'ZPE SP IV-VIII, 2025/2026 + 2026 amendments',
   lo:'ZPE LO/technikum chemistry, 2025/2026 + 2026 amendments',
   legal:'Dz.U. 2026 poz. 947 and poz. 958',
   policy:'permanent project planning lock'};
 const M=(id,name,stage,domains,priority,status='OPEN')=>({id,name,stage,domains,priority,status,locked:true});
 const modules=[
  M('CURR-01','Informacja, źródła, wiarygodność danych','SP7-8→LO',['źródła','weryfikacja','tabele','wykresy','schematy','cyfrowe dane'],'P0','IN_PROGRESS'),
  M('CURR-02','BHP, piktogramy, odczynniki, sprzęt','SP7-8→LO',['GHS/BHP','ryzyko','odpady','procedury','pierwsza reakcja'],'P0','IN_PROGRESS'),
  M('CURR-03','Substancje i właściwości materii','SP7-8',['stany','właściwości','gęstość','masa','objętość','pierwiastki','związki'],'P0','IN_PROGRESS'),
  M('CURR-04','Mieszaniny i rozdzielanie','SP7-8',['jednorodne','niejednorodne','sączenie','krystalizacja','destylacja','ekstrakcja','chromatografia'],'P0','IN_PROGRESS'),
  M('CURR-05','Atom, jon, izotop, jądro','SP7-8→LO',['Z','A','nuklid','izotopy','jony','jądro','przemiany jądrowe'],'P0','IN_PROGRESS'),
  M('CURR-06','Elektrony i układ okresowy','SP7-8→LO',['powłoki','podpowłoki','orbital','spin','Pauli','Hund','konfiguracje','bloki s/p/d','okres/grupa'],'P0','IN_PROGRESS'),
  M('CURR-07','Wiązania i budowa cząsteczek','SP7-8→LO',['jonowe','kowalencyjne','koordynacyjne','metaliczne','polaryzacja','oddziaływania międzycząsteczkowe'],'P0','IN_PROGRESS'),
  M('CURR-08','Struktura molekularna i geometria','LO rozszerzony',['graf atomów','rząd wiązania','kąty','VSEPR','2D','3D','stereo'],'P1','IN_PROGRESS'),
  M('CURR-09','Wzory, nazewnictwo i reprezentacje','SP7-8→LO',['sumaryczne','strukturalne','półstrukturalne','empiryczne','rzeczywiste','nazwy','izomeria'],'P0','IN_PROGRESS'),
  M('CURR-10','Równania reakcji i prawa zachowania','SP7-8→LO',['cząsteczkowe','jonowe','bilans masy','bilans ładunku','współczynniki','warunki'],'P0','IN_PROGRESS'),
  M('CURR-11','Typy reakcji i przemiany','SP7-8→LO',['synteza','analiza','wymiana','spalanie','strącanie','zobojętnianie','redoks'],'P0','IN_PROGRESS'),
  M('CURR-12','Stechiometria','SP7-8→LO',['mol','NA','masa molowa','mole/masa/objętość','gaz','stosunek stechiometryczny','reagent ograniczający','wydajność'],'P0','IN_PROGRESS'),
  M('CURR-13','Roztwory i rozpuszczalność','SP7-8→LO',['stężenie %','molowe','gęstość','rozpuszczalność','nasycenie','rozcieńczanie','zatężanie'],'P0','IN_PROGRESS'),
  M('CURR-14','Kwasy, zasady, wodorotlenki i pH','SP7-8→LO',['dysocjacja','elektrolit','wskaźniki','pH','pKa','Ka','Kb','bufory'],'P0','IN_PROGRESS'),
  M('CURR-15','Sole i reakcje jonowe','SP7-8→LO',['sole','dysocjacja','tablice rozpuszczalności','strącanie','równania jonowe'],'P0','IN_PROGRESS'),
  M('CURR-16','Tlen, wodór, powietrze i tlenki','SP7-8',['otrzymywanie','właściwości','spalanie','tlenki','zastosowania','środowisko'],'P0','IN_PROGRESS'),
  M('CURR-17','Metale, niemetale i chemia środowiska','SP7-8→LO',['aktywność','korozja','ochrona','paliwa','kwaśne opady','klimat','środowisko'],'P1','OPEN'),
  M('CURR-18','Kinetyka chemiczna','LO',['szybkość','stężenie/ciśnienie','temperatura','katalizator','rozdrobnienie','doświadczenia'],'P1','IN_PROGRESS'),
  M('CURR-19','Energetyka reakcji','LO',['egzo/endo','energia aktywacji','entalpia','Î”H','profile energetyczne','kataliza'],'P1','IN_PROGRESS'),
  M('CURR-20','Równowaga chemiczna','LO rozszerzony',['równowaga','K','Le Chatelier','warunki','równowagi kwas-zasada','Ksp','Kf'],'P1','IN_PROGRESS'),
  M('CURR-21','Redoks i elektrochemia','LO rozszerzony',['stopnie utlenienia','elektrony','bilans redoks','ogniwa','potencjały','zależność od pH'],'P1','IN_PROGRESS'),
  M('CURR-22','Gazy i równanie Clapeyrona','LO rozszerzony',['pVT','gaz doskonały','objętość molowa','warunki','Clapeyron'],'P1','OPEN'),
  M('CURR-23','Chemia organiczna — węglowodory','SP7-8→LO',['alkany','alkeny','alkiny','spalanie','addycja','polimeryzacja','ropa','środowisko'],'P0','IN_PROGRESS'),
  M('CURR-24','Pochodne węglowodorów','SP7-8→LO',['alkohole','fenole','aldehydy','ketony','kwasy karboksylowe','estry','tłuszcze'],'P0','IN_PROGRESS'),
  M('CURR-25','Biochemia szkolna','SP7-8→LO biol-chem',['aminokwasy','białka','peptydy','enzymy','cukry','skrobia','celuloza','tłuszcze','DNA/RNA jako rozszerzenie'],'P0','IN_PROGRESS'),
  M('CURR-26','Doświadczenie i metodologia badawcza','SP7-8→LO',['problem','hipoteza','zmienne','kontrola','obserwacja','pomiar','wynik','wniosek','niepewność'],'P0','IN_PROGRESS'),
  M('CURR-27','Wizualizacja i cyfrowe modele chemiczne','SP7-8→LO',['tabele','wykresy','diagramy','atom','orbital','cząsteczka 2D/3D','interakcja'],'P1','IN_PROGRESS'),
  M('CURR-28','Zadania, transfer i kompetencje problemowe','SP7-8→LO',['obliczenia','interpretacja danych','projekt','case study','zadania wieloetapowe','samoocena'],'P0','IN_PROGRESS'),
  M('CURR-29','Spektroskopia i identyfikacja','LO rozszerzony',['IR','UV-Vis','MS','NMR','widma','identyfikacja'],'P2','OPEN'),
  M('CURR-30','Mechanizmy, stereochemia i koordynacja','LO rozszerzony',['mechanizmy','stereo','izomeria','kompleksy','ligandy'],'P2','OPEN'),
  M('CURR-31','Dane referencyjne i provenance','SP7-8→LO',['źródło','warunki','jednostka','niepewność','fazowość','fingerprint','ledger'],'P0','IN_PROGRESS'),
  M('CURR-32','Integracja przekrojowa i projektowa','SP7-8→LO',['projekt tygodniowy','problem interdyscyplinarny','chemia-biologia-fizyka-matematyka','raport'],'P1','OPEN')
 ];
 const locks={
  sourceHierarchy:['aktualna podstawa prawna','ZPE/ME','źródła naukowe','źródła pomocnicze'],
  curriculumRule:'curriculum coverage is permanent planning scope; absence of implementation is a gap, not permission to delete the requirement',
  noRediscovery:'DONE/VERIFIED/LOCKED items are not re-searched unless source/version changes or FORCE_REVERIFY',
  noOverwrite:'new verified data append; existing scientific records are not silently overwritten',
  oneEngine:'CHE.STRUCTURE and shared CHE.DATA remain canonical; adapters do not become second engines',
  statusRule:'OPEN→IN_PROGRESS→DONE→VERIFIED→LOCKED; CONDITIONAL remains visible and is never treated as VERIFIED',
  educationRule:'educational scaffolding is not reference-grade science',
  maxRun:'ONE_PROMPT_MAX_RUN: one prompt = maximum coherent package including smaller safe tasks',
  runtimeRule:'syntax PASS is not browser runtime PASS',
  priorityRule:'P0 mandatory foundation; P1 advanced core; P2 extension',
  completionRule:'module can be DONE only when implementation, data coverage, UI binding and tests required by its level are present'
 };
 const audit=()=>({version:'3.34',modules:modules.length,byStatus:Object.fromEntries(['OPEN','IN_PROGRESS','DONE','VERIFIED','LOCKED','CONDITIONAL'].map(s=>[s,modules.filter(m=>m.status===s).length])),byPriority:Object.fromEntries(['P0','P1','P2'].map(s=>[s,modules.filter(m=>m.priority===s).length])),source:SRC,locks});
 CHE.CURRICULUM_REQUIREMENTS_LOCK_V334={version:'3.34',reviewedAt:'2026-10-02',source:SRC,modules,locks,audit,permanent:true,referenceReady:false};
})();

} catch (err) {
  try { console.warn('[CHE module 220]', err && err.message ? err.message : err); } catch(_){}
}

