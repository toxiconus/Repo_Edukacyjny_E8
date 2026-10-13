/* Dane pierwiastków I i II grupy do klocków (wspólne dla palników, probówek i tablicy).
   Barwy płomieni i zachowanie w wodzie to wartości poglądowe — patrz klocki/EFEKTY.md (do sprawdzenia w W1). */
/* ---------------------------- dane ---------------------------- */
var SYM = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(' ');
var NAZ = 'wodór,hel,lit,beryl,bor,węgiel,azot,tlen,fluor,neon,sód,magnez,glin,krzem,fosfor,siarka,chlor,argon,potas,wapń,skand,tytan,wanad,chrom,mangan,żelazo,kobalt,nikiel,miedź,cynk,gal,german,arsen,selen,brom,krypton,rubid,stront,itr,cyrkon,niob,molibden,technet,ruten,rod,pallad,srebro,kadm,ind,cyna,antymon,tellur,jod,ksenon,cez,bar,lantan,cer,prazeodym,neodym,promet,samar,europ,gadolin,terb,dysproz,holm,erb,tul,iterb,lutet,hafn,tantal,wolfram,ren,osm,iryd,platyna,złoto,rtęć,tal,ołów,bizmut,polon,astat,radon,frans,rad,aktyn,tor,protaktyn,uran,neptun,pluton,ameryk,kiur,berkel,kaliforn,einstein,ferm,mendelew,nobel,lorens,rutherford,dubn,seaborg,bohr,has,meitner,darmstadt,roentgen,kopernik,nihon,flerow,moskow,liwermor,tennes,oganeson'.split(',');
var G1 = ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'], G2 = ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'];
function grupaEl(s) { return G1.indexOf(s) >= 0 ? 1 : G2.indexOf(s) >= 0 ? 2 : 0; }

function poz(z) {
  if (z === 1) return {r: 1, c: 1};
  if (z === 2) return {r: 1, c: 18};
  if (z <= 4) return {r: 2, c: z - 2};
  if (z <= 10) return {r: 2, c: z + 8};
  if (z <= 12) return {r: 3, c: z - 10};
  if (z <= 18) return {r: 3, c: z};
  if (z <= 36) return {r: 4, c: z - 18};
  if (z <= 54) return {r: 5, c: z - 36};
  if (z <= 56) return {r: 6, c: z - 54};
  if (z <= 71) return {r: 6, f: 1, c: z - 57 + 3};
  if (z <= 86) return {r: 6, c: z - 68};
  if (z <= 88) return {r: 7, c: z - 86};
  if (z <= 103) return {r: 7, f: 2, c: z - 89 + 3};
  return {r: 7, c: z - 100};
}

/* opisy i dane liczbowe litowców i berylowców (rho — g/cm³, mp — °C, re — reaktywność wobec zimnej wody 0–6, skala poglądowa) */
var DANE = {
  H:  {opis: 'Leży w grupie 1, ale nie jest litowcem: to niemetal, w warunkach normalnych gaz (H₂).'},
  He: {opis: 'Ma konfigurację 1s², lecz zalicza się do gazów szlachetnych (grupa 18), a nie do berylowców.'},
  Li: {kon: '[He] 2s¹', rho: '0,53 g/cm³', rhoN: .53, mp: '181 °C', re: 2,
       opis: 'Najlżejszy ze wszystkich metali. Jest w akumulatorach litowo-jonowych (telefony, samochody elektryczne). Barwi płomień na karminowo.'},
  Na: {kon: '[Ne] 3s¹', rho: '0,97 g/cm³', rhoN: .97, mp: '98 °C', re: 3.5,
       opis: 'Tak miękki, że kroi się go nożem; świeży przekrój szybko matowieje, dlatego przechowuje się go pod olejem lub w nafcie. Wchodzi w skład soli kuchennej NaCl, płomień barwi na żółto.'},
  K:  {kon: '[Ar] 4s¹', rho: '0,86 g/cm³', rhoN: .86, mp: '64 °C', re: 5,
       opis: 'Reaguje z wodą gwałtownie, a wodór zapala się fioletowym płomieniem. Jony K⁺ są ważne dla nerwów i mięśni oraz dla roślin (nawozy potasowe).'},
  Rb: {kon: '[Kr] 5s¹', rho: '1,53 g/cm³', rhoN: 1.53, mp: '39 °C', re: 5.8,
       opis: 'Miękki metal tak reaktywny, że zapala się na powietrzu. Jest gęstszy od wody, więc w niej tonie. Używa się go m.in. w zegarach atomowych.'},
  Cs: {kon: '[Xe] 6s¹', rho: '1,93 g/cm³', rhoN: 1.93, mp: '28,5 °C', re: 6,
       opis: 'Topi się w temperaturze zbliżonej do pokojowej. Z wodą reaguje wybuchowo. Zegary cezowe definiują sekundę.'},
  Fr: {kon: '[Rn] 7s¹', rho: 'brak danych', mp: 'brak danych', re: null, nie: 1,
       opis: 'Najcięższy litowiec: promieniotwórczy i niezwykle rzadki — w skorupie ziemskiej naraz jest go zaledwie kilkadziesiąt gramów. Nie wykonuje się z nim doświadczeń.'},
  Be: {kon: '[He] 2s²', rho: '1,85 g/cm³', rhoN: 1.85, mp: '1287 °C', re: 0,
       opis: 'Lekki, bardzo twardy i sztywny metal. Cienka warstwa tlenku chroni go przed wodą. Pył i związki berylu są toksyczne. Szmaragd i akwamaryn to odmiany minerału zwanego berylem.'},
  Mg: {kon: '[Ne] 3s²', rho: '1,74 g/cm³', rhoN: 1.74, mp: '650 °C', re: .5,
       opis: 'Pali się oślepiająco białym płomieniem (race, dawne lampy błyskowe). Jest centralnym atomem cząsteczki chlorofilu. Z zimną wodą reaguje bardzo wolno.'},
  Ca: {kon: '[Ar] 4s²', rho: '1,55 g/cm³', rhoN: 1.55, mp: '842 °C', re: 2,
       opis: 'Buduje kości, zęby i skorupy; wapień to CaCO₃. W wodzie tonie i wydziela wodór, a roztwór mętnieje od słabo rozpuszczalnego Ca(OH)₂. Płomień barwi ceglastoczerwono.'},
  Sr: {kon: '[Kr] 5s²', rho: '2,64 g/cm³', rhoN: 2.64, mp: '777 °C', re: 3,
       opis: 'Daje jaskrawą czerwień w fajerwerkach i racach. Z wodą reaguje żywiej niż wapń.'},
  Ba: {kon: '[Xe] 6s²', rho: '3,51 g/cm³', rhoN: 3.51, mp: '727 °C', re: 4,
       opis: 'Daje zielony kolor w fajerwerkach. Rozpuszczalne sole baru są trujące, ale nierozpuszczalny BaSO₄ pije się przed prześwietleniem przewodu pokarmowego.'},
  Ra: {kon: '[Rn] 7s²', rho: '≈ 5,5 g/cm³', mp: '700 °C', re: 4.7, rad: 1,
       opis: 'Promieniotwórczy; odkryli go w 1898 r. Maria Skłodowska-Curie i Pierre Curie. W szkole doświadczeń z radem nie wykonuje się — pokazujemy tylko animację.'}
};
var GR = {
  1: {nazwa: 'Litowce — grupa 1', el: G1,
      opis: 'Jeden elektron walencyjny (ns¹), kation M⁺. To miękkie, lekkie metale. Z wodą tworzą wodorotlenki MOH (mocne zasady) i wodór. Im niżej w grupie, tym są reaktywniejsze.'},
  2: {nazwa: 'Berylowce — grupa 2', el: G2,
      opis: 'Dwa elektrony walencyjne (ns²), kation M²⁺. Są twardsze i gęstsze niż litowce, a z wodą reagują wolniej. Wodorotlenki M(OH)₂ są tym mocniejszymi zasadami, im niżej w grupie.'}
};

/* probówki: zachowanie metalu w wodzie */
var PR = {
  Li: {kol: '#c5ccd6', r: 8, plywa: 1, tempo: 12, ruch: 7, zyje: 70, rozow: .06, uw: 'pływa, spokojnie',
       obs: 'Pływa i reaguje spokojnie: równy strumień pęcherzyków H₂. Nie topi się, krąży powoli.', rown: '2Li + 2H₂O → 2LiOH + H₂↑'},
  Na: {kol: '#e1e7ee', r: 9, plywa: 1, tempo: 30, ruch: 30, zyje: 30, rozow: .14, uw: 'pływa, krąży',
       obs: 'Topi się w srebrzystą kulkę, szybko krąży po powierzchni i syczy.', rown: '2Na + 2H₂O → 2NaOH + H₂↑'},
  K:  {kol: '#eceff5', r: 10, plywa: 1, tempo: 60, ruch: 62, zyje: 15, rozow: .5, plomien: '#b794ff', uw: 'pływa, zapala się',
       obs: 'Reaguje gwałtownie: wodór zapala się, a płomień barwią atomy potasu na fioletowo.', rown: '2K + 2H₂O → 2KOH + H₂↑'},
  Rb: {kol: '#e4dccf', r: 9, tempo: 90, wstrzas: 2, zyje: 8, rozow: .8, ostrz: 1, uw: 'tonie, gwałtownie',
       obs: 'Jest gęstszy od wody, więc tonie, lecz reaguje bardzo gwałtownie — naczynie może pęknąć.', rown: '2Rb + 2H₂O → 2RbOH + H₂↑'},
  Cs: {kol: '#e9d48f', r: 9, tempo: 120, wstrzas: 3.2, zyje: 5, rozow: 1, ostrz: 1, uw: 'tonie, wybuchowo',
       obs: 'Tonie i reaguje wybuchowo.', rown: '2Cs + 2H₂O → 2CsOH + H₂↑'},
  Be: {kol: '#9aa6b0', r: 7, tempo: 0, rozow: 0, zyje: 0, uw: 'brak reakcji',
       obs: 'Nie reaguje z wodą: chroni go cienka warstwa tlenku BeO. Pył i związki berylu są toksyczne.', rown: 'Be + H₂O → brak reakcji'},
  Mg: {kol: '#d0d6dc', r: 7, tempo: 1.2, rozow: .011, rozMax: .28, zyje: 0, uw: 'bardzo wolno',
       obs: 'Z zimną wodą reaguje bardzo wolno: pojedyncze pęcherzyki i blade różowienie. Szybciej reaguje z wrzątkiem lub parą wodną.', rown: 'Mg + 2H₂O → Mg(OH)₂ + H₂↑'},
  Ca: {kol: '#c9ccd0', r: 8, tempo: 16, rozow: .07, mut: .85, kurcz: .004, uw: 'tonie, mętnieje',
       obs: 'Tonie i stale wydziela H₂. Roztwór mętnieje, bo Ca(OH)₂ rozpuszcza się słabo.', rown: 'Ca + 2H₂O → Ca(OH)₂ + H₂↑'},
  Sr: {kol: '#d8d6c2', r: 8, tempo: 28, rozow: .12, mut: .35, kurcz: .006, uw: 'tonie, żywo',
       obs: 'Tonie i reaguje żywiej niż wapń; roztwór lekko mętnieje.', rown: 'Sr + 2H₂O → Sr(OH)₂ + H₂↑'},
  Ra: {kol: '#e6e2d6', r: 8, tempo: 58, rozow: .3, kurcz: .014, rad: 1, uw: 'tonie, tylko animacja',
       obs: 'Cięższy od wody, tonie; reaguje energiczniej niż bar. Pokazujemy tylko animację — w szkole nie wykonuje się tego doświadczenia.', rown: 'Ra + 2H₂O → Ra(OH)₂ + H₂↑'},
  Ba: {kol: '#c6cab8', r: 8, tempo: 42, rozow: .2, mut: .08, kurcz: .009, uw: 'tonie, energicznie',
       obs: 'Tonie i reaguje energicznie. Ba(OH)₂ dobrze się rozpuszcza, więc roztwór zostaje klarowny.', rown: 'Ba + 2H₂O → Ba(OH)₂ + H₂↑'}
};
var LISTA_PR = {1: ['Li', 'Na', 'K', 'Rb', 'Cs'], 2: ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra']};

/* płomienie: barwa i opis */
var PL = {
  Li: {c: '#ff3b6b', nz: 'karminowy', op: 'Czerwień z różowym odcieniem; łatwo pomylić ze strontem.'},
  Na: {c: '#ffd21f', nz: 'żółty', op: 'Bardzo intensywny: ślady sodu są wszędzie i potrafią zagłuszyć inne barwy.'},
  K:  {c: '#b794ff', nz: 'fioletowy (liliowy)', op: 'Blady. Ogląda się go przez niebieskie szkło kobaltowe, które pochłania żółć sodu.'},
  Rb: {c: '#d2428f', nz: 'czerwonofioletowy', op: 'Podobny do potasu, ale z wyraźną czerwienią.'},
  Cs: {c: '#5aa4ff', nz: 'niebieskofioletowy', op: 'Jasny błękit; nazwa cezu pochodzi od łacińskiego słowa oznaczającego błękit nieba.'},
  Be: {tryb: 'brak', nz: 'brak barwy', op: 'Beryl nie barwi płomienia, a jego pył jest toksyczny, więc nie robi się z nim prób.'},
  Mg: {tryb: 'mg', nz: 'oślepiająco biały błysk', op: 'Magnez nie barwi płomienia, tylko pali się własnym: 2Mg + O₂ → 2MgO. Nie patrz prosto w błysk.'},
  Ca: {c: '#ff6a1f', nz: 'ceglastoczerwony', op: 'Pomarańczowoczerwony, cieplejszy niż stront.'},
  Sr: {c: '#ff2430', nz: 'karminowoczerwony', op: 'Jaskrawa czerwień z fajerwerków i rac.'},
  Ba: {c: '#9be34d', nz: 'zielony', op: 'Żółtozielony. Sole baru są trujące.'},
  Ra: {c: '#d6123d', nz: 'karminowy', rad: 1, op: 'Sole radu barwią płomień karminowo. To tylko animacja — z radem nie pracuje się w szkole.'}
};

