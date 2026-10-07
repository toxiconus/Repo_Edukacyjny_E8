<script>
/* ===== MAPA REAKCJI (v022) — akcja -> co się odświeża =====
 wybór pierwiastka (katalog / mikrotablica / tablica / skład w hud) : go() -> all(): head, orbitale, właściwości, redoks, hud, ciekawostki, mini-PT (sel), katalog, tytuł, applyMode (zakładki pierwiastka)
 wybór cząsteczki / kryształu (katalog)                              : pick(): hud, applyMode (zakładki: Cząsteczki i związki, Struktura i skład, Izotopy), ciekawostki składników, mini-PT (part), katalog, tytuł; zakładka mol/Izotopy zostaje
 karta w „Cząsteczki i związki” / lista „wspólne pierwiastki”          : pick(.., 'forms') — wejście w szczegóły struktury
 ‹ › (prev/next)                                                      : kolejność widocznej listy katalogu (sortowanie + filtr + grupowanie)
 zmiana filtra / sortu / grupowania / wyszukiwania                    : tylko katalog (podmiot bez zmian)
 zmiana języka                                                        : head, katalog, mini-PT, ciekawostki, szuflada (nazwy cząsteczek: tylko PL)
 jon (ładunek) / izotop                                               : tylko widoki pierwiastka
 Osie klasyfikacji: budowa (atom/cząsteczka/kryształ — z danych c.m) · substancja (pierwiastek/związek — z c.comp) · klasa · rodzina · blok · grupa · okres · stan · org.
*/
/* ==================== GLOBAL ==================== */
const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
const $ = i => document.getElementById(i);
const sup = s => String(s).replace(/[0-9]/g, d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]);
const K2C = k => k == null ? null : +(k - 273.15).toFixed(Math.abs(k) < 10 ? 1 : 0);
const nodata = (w, h, t) => `<text x="${w/2}" y="${h/2}" text-anchor="middle" style="font-size:13px">${t || 'brak danych'}</text>`;

/* ==================== DANE ==================== */
const DB = {
Fe:{z:26,n:'Żelazo',m:55.845,b:'d',g:8,p:4,t:'metal',en:1.83,ar:156,cr:132,vdw:204,ion:{'2+':78,'3+':64.5},ea:14.8,
 ie:[762.5,1561.9,2957,5290,7240,9560,12060,14580,22540,25290],ox:[-2,-1,0,1,2,3,4,5,6,7],pol:8.4,mp:1811,bp:3134,rho:7.874,st:'ciało stałe',cs:'bcc',
 iso:[{A:54,ab:5.845},{A:55,ab:0,hl:'2.7 r'},{A:56,ab:91.754},{A:57,ab:2.119},{A:58,ab:0.282}],
 f:['Jądro ⁵⁶Fe ma jedną z najwyższych energii wiązania na nukleon (ok. 8,8 MeV), dlatego gwiazdy kończą syntezę właśnie na żelazie.',
    'Ok. jedna trzecia masy Ziemi to żelazo, głównie w jądrze planety.',
    'Fe²⁺ w hemie wiąże O₂ w hemoglobinie; zmiana pola ligandów zmienia spin żelaza i kolor krwi.']},
Cu:{z:29,n:'Miedź',m:63.546,b:'d',g:11,p:4,t:'metal',en:1.90,ar:145,cr:132,vdw:140,ion:{'1+':77,'2+':73},ea:118.4,
 ie:[745.5,1957.9,3555,5536,7700,9900,13400,16000,19200,22400],ox:[-2,1,2,3,4],pol:6.1,mp:1357.77,bp:2835,rho:8.96,st:'ciało stałe',cs:'fcc',
 iso:[{A:63,ab:69.15},{A:65,ab:30.85}],
 f:['Konfiguracja 4s¹3d¹⁰ jest wyjątkiem od reguły Aufbau: zapełniona podpowłoka d obniża energię.',
    'Po srebrze miedź jest najlepszym przewodnikiem prądu wśród metali.',
    'Zielona patyna na dachach to zasadowe węglany miedzi.']},
Na:{z:11,n:'Sód',m:22.99,b:'s',g:1,p:3,t:'metal',en:0.93,ar:190,cr:166,vdw:227,ion:{'1+':102},ea:52.8,
 ie:[495.8,4562,6910.3,9543,13354,16613,20117,25496,28932,141362],ox:[-1,0,1],pol:24.11,mp:370.87,bp:1156,rho:0.968,st:'ciało stałe',cs:'bcc',
 iso:[{A:23,ab:100},{A:24,ab:0,hl:'15 h'}],
 f:['I₁ = 496 kJ/mol jest niska, więc sód gwałtownie oddaje elektron 3s, np. wodzie.',
    'Żółty płomień sodu to linia D przy ok. 589 nm, przejście 3p → 3s.',
    'Elektron 3s czuje tylko Z* ≈ 2,2 z 11 protonów: resztę ekranują elektrony rdzenia.']},
H:{z:1,n:'Wodór',m:1.008,b:'s',g:1,p:1,t:'niemetal',en:2.20,ar:53,cr:31,vdw:120,ion:{'1-':208},ea:72.8,ie:[1312],ox:[-1,0,1],pol:0.667,mp:14.01,bp:20.28,rho:0.0000899,st:'gaz',
 iso:[{A:1,ab:99.9885},{A:2,ab:0.0115},{A:3,ab:0,hl:'12.3 r'}],
 f:['Najliczniejszy pierwiastek wszechświata — ok. 75% masy materii barionowej.',
    'Woda, paliwo przyszłości: spalanie daje tylko H₂O.',
    'Trzy izotopy: prot, deuter, tryt — ten ostatni promieniotwórczy.']},
N:{z:7,n:'Azot',m:14.007,b:'p',g:15,p:2,t:'niemetal',en:3.04,ar:56,cr:71,vdw:155,ea:-7,ie:[1402.3,2856,4578.1,7475,9444.9,53267,64360],ox:[-3,-2,-1,0,1,2,3,4,5],pol:1.10,mp:63.15,bp:77.36,rho:0.0012506,st:'gaz',iso:[{A:14,ab:99.636},{A:15,ab:0.364}],
 f:['78% atmosfery, ale organizmy nie potrafią go przyswoić bezpośrednio — stąd cykl azotowy.',
    'Wiązanie N≡N ma energię 945 kJ/mol — jedno z najtrwalszych w chemii.',
    'Ciekły azot (−196 °C) to standardowy czynnik chłodzący.']},
C:{z:6,n:'Węgiel',m:12.011,b:'p',g:14,p:2,t:'niemetal',en:2.55,ar:67,cr:76,vdw:170,ea:121.8,ie:[1086.5,2352.6,4620.5,6222.7,37831,47277],ox:[-4,-3,-2,-1,0,1,2,3,4],pol:1.76,mp:3823,bp:4098,rho:2.267,st:'ciało stałe',cs:'heks.',iso:[{A:12,ab:98.93},{A:13,ab:1.07},{A:14,ab:0,hl:'5730 l'}],
 f:['Cztery odmiany alotropowe: diament, grafit, fulereny, nanorurki — ta sama substancja, różne sieci.',
    'Podstawa chemii organicznej — łańcuchy C–C dają nieskończoną różnorodność.',
    'Datowanie radiowęglowe ¹⁴C: połowiczny rozpad 5730 lat, zasięg ok. 50 tys. lat.']},
O:{z:8,n:'Tlen',m:15.999,b:'p',g:16,p:2,t:'niemetal',en:3.44,ar:48,cr:66,vdw:152,ion:{'2-':140},ea:141,ie:[1313.9,3388.3,5300.5,7469.2,10989.5,13326.5,71330,84078],ox:[-2,-1,0,1,2],pol:0.802,mp:54.36,bp:90.2,rho:0.001429,st:'gaz',iso:[{A:16,ab:99.757},{A:17,ab:0.038},{A:18,ab:0.205}],
 f:['Najliczniejszy pierwiastek skorupy ziemskiej (~46% masy).',
    'O₂ jest paramagnetyczny: dwa niesparowane elektrony na orbitalach π*.',
    'Ozon O₃ w stratosferze chroni przed UV, ale w troposferze jest szkodliwy.']},
Cl:{z:17,n:'Chlor',m:35.45,b:'p',g:17,p:3,t:'niemetal',en:3.16,ar:79,cr:102,vdw:175,ion:{'1-':181},ea:349,ie:[1251.2,2298,3822,5158.6,6542,9362,11018,33604,38600],ox:[-1,1,3,5,7],pol:2.18,mp:171.6,bp:239.11,rho:0.003214,st:'gaz',iso:[{A:35,ab:75.76},{A:37,ab:24.24}],
 f:['Żółtozielony gaz, silny utleniacz — używany do dezynfekcji wody.',
    'Cl⁻ jest najobficiej występującym anionem w wodzie morskiej.',
    'Freony (CFC) zawierające chlor niszczą ozon w reakcji łańcuchowej.']}
};
for(const k in DB) DB[k].s = k;

const NAMES = {
H:['Wodór','Hydrogen','Wasserstoff','Hydrogenium'],He:['Hel','Helium','Helium','Helium'],
Li:['Lit','Lithium','Lithium','Lithium'],Be:['Beryl','Beryllium','Beryllium','Beryllium'],
B:['Bor','Boron','Bor','Borum'],C:['Węgiel','Carbon','Kohlenstoff','Carbonium'],
N:['Azot','Nitrogen','Stickstoff','Nitrogenium'],O:['Tlen','Oxygen','Sauerstoff','Oxygenium'],
F:['Fluor','Fluorine','Fluor','Fluorum'],Ne:['Neon','Neon','Neon','Neon'],
Na:['Sód','Sodium','Natrium','Natrium'],Mg:['Magnez','Magnesium','Magnesium','Magnesium'],
Al:['Glin','Aluminium','Aluminium','Aluminium'],Si:['Krzem','Silicon','Silicium','Silicium'],
P:['Fosfor','Phosphorus','Phosphor','Phosphorus'],S:['Siarka','Sulfur','Schwefel','Sulfur'],
Cl:['Chlor','Chlorine','Chlor','Chlorum'],Ar:['Argon','Argon','Argon','Argon'],
K:['Potas','Potassium','Kalium','Kalium'],Ca:['Wapń','Calcium','Calcium','Calcium'],
Sc:['Skand','Scandium','Scandium','Scandium'],Ti:['Tytan','Titanium','Titan','Titanium'],
V:['Wanad','Vanadium','Vanadium','Vanadium'],Cr:['Chrom','Chromium','Chrom','Chromium'],
Mn:['Mangan','Manganese','Mangan','Manganum'],Fe:['Żelazo','Iron','Eisen','Ferrum'],
Co:['Kobalt','Cobalt','Cobalt','Cobaltum'],Ni:['Nikiel','Nickel','Nickel','Niccolum'],
Cu:['Miedź','Copper','Kupfer','Cuprum'],Zn:['Cynk','Zinc','Zink','Zincum'],
Ga:['Gal','Gallium','Gallium','Gallium'],Ge:['German','Germanium','Germanium','Germanium'],
As:['Arsen','Arsenic','Arsen','Arsenicum'],Se:['Selen','Selenium','Selen','Selenium'],
Br:['Brom','Bromine','Brom','Bromum'],Kr:['Krypton','Krypton','Krypton','Krypton'],
Rb:['Rubid','Rubidium','Rubidium','Rubidium'],Sr:['Stront','Strontium','Strontium','Strontium'],
Y:['Itr','Yttrium','Yttrium','Yttrium'],Zr:['Cyrkon','Zirconium','Zirkonium','Zirconium'],
Nb:['Niob','Niobium','Niob','Niobium'],Mo:['Molibden','Molybdenum','Molybdän','Molybdenum'],
Tc:['Technet','Technetium','Technetium','Technetium'],Ru:['Ruten','Ruthenium','Ruthenium','Ruthenium'],
Rh:['Rod','Rhodium','Rhodium','Rhodium'],Pd:['Pallad','Palladium','Palladium','Palladium'],
Ag:['Srebro','Silver','Silber','Argentum'],Cd:['Kadm','Cadmium','Cadmium','Cadmium'],
In:['Ind','Indium','Indium','Indium'],Sn:['Cyna','Tin','Zinn','Stannum'],
Sb:['Antymon','Antimony','Antimon','Stibium'],Te:['Tellur','Tellurium','Tellur','Tellurium'],
I:['Jod','Iodine','Iod','Iodum'],Xe:['Ksenon','Xenon','Xenon','Xenon'],
Cs:['Cez','Caesium','Caesium','Caesium'],Ba:['Bar','Barium','Barium','Barium'],
La:['Lantan','Lanthanum','Lanthan','Lanthanum'],Ce:['Cer','Cerium','Cer','Cerium'],
Pr:['Prazeodym','Praseodymium','Praseodym','Praseodymium'],Nd:['Neodym','Neodymium','Neodym','Neodymium'],
Pm:['Promet','Promethium','Promethium','Promethium'],Sm:['Samar','Samarium','Samarium','Samarium'],
Eu:['Europ','Europium','Europium','Europium'],Gd:['Gadolin','Gadolinium','Gadolinium','Gadolinium'],
Tb:['Terb','Terbium','Terbium','Terbium'],Dy:['Dysproz','Dysprosium','Dysprosium','Dysprosium'],
Ho:['Holm','Holmium','Holmium','Holmium'],Er:['Erb','Erbium','Erbium','Erbium'],
Tm:['Tul','Thulium','Thulium','Thulium'],Yb:['Iterb','Ytterbium','Ytterbium','Ytterbium'],
Lu:['Lutet','Lutetium','Lutetium','Lutetium'],Hf:['Hafn','Hafnium','Hafnium','Hafnium'],
Ta:['Tantal','Tantalum','Tantal','Tantalum'],W:['Wolfram','Tungsten','Wolfram','Wolframium'],
Re:['Ren','Rhenium','Rhenium','Rhenium'],Os:['Osm','Osmium','Osmium','Osmium'],
Ir:['Iryd','Iridium','Iridium','Iridium'],Pt:['Platyna','Platinum','Platin','Platinum'],
Au:['Złoto','Gold','Gold','Aurum'],Hg:['Rtęć','Mercury','Quecksilber','Hydrargyrum'],
Tl:['Tal','Thallium','Thallium','Thallium'],Pb:['Ołów','Lead','Blei','Plumbum'],
Bi:['Bizmut','Bismuth','Wismut','Bismuthum'],Po:['Polon','Polonium','Polonium','Polonium'],
At:['Astat','Astatine','Astat','Astatum'],Rn:['Radon','Radon','Radon','Radon'],
Fr:['Frans','Francium','Francium','Francium'],Ra:['Rad','Radium','Radium','Radium'],
Ac:['Aktyn','Actinium','Actinium','Actinium'],Th:['Tor','Thorium','Thorium','Thorium'],
Pa:['Protaktyn','Protactinium','Protactinium','Protactinium'],U:['Uran','Uranium','Uran','Uranium'],
Np:['Neptun','Neptunium','Neptunium','Neptunium'],Pu:['Pluton','Plutonium','Plutonium','Plutonium'],
Am:['Ameryk','Americium','Americium','Americium'],Cm:['Kiur','Curium','Curium','Curium'],
Bk:['Berkel','Berkelium','Berkelium','Berkelium'],Cf:['Kaliforn','Californium','Californium','Californium'],
Es:['Einstein','Einsteinium','Einsteinium','Einsteinium'],Fm:['Ferm','Fermium','Fermium','Fermium'],
Md:['Mendelew','Mendelevium','Mendelevium','Mendelevium'],No:['Nobel','Nobelium','Nobelium','Nobelium'],
Lr:['Lawrencj','Lawrencium','Lawrencium','Lawrencium'],Rf:['Rutherford','Rutherfordium','Rutherfordium','Rutherfordium'],
Db:['Dubn','Dubnium','Dubnium','Dubnium'],Sg:['Seaborg','Seaborgium','Seaborgium','Seaborgium'],
Bh:['Bohr','Bohrium','Bohrium','Bohrium'],Hs:['Has','Hassium','Hassium','Hassium'],
Mt:['Meitner','Meitnerium','Meitnerium','Meitnerium'],Ds:['Darmstadt','Darmstadtium','Darmstadtium','Darmstadtium'],
Rg:['Roentgen','Roentgenium','Roentgenium','Roentgenium'],Cn:['Kopernik','Copernicium','Copernicium','Copernicium'],
Nh:['Nihon','Nihonium','Nihonium','Nihonium'],Fl:['Flerow','Flerovium','Flerovium','Flerovium'],
Mc:['Moskow','Moscovium','Moscovium','Moscovium'],Lv:['Liwermor','Livermorium','Livermorium','Livermorium'],
Ts:['Tennesyn','Tennessine','Tennessine','Tennessine'],Og:['Oganesson','Oganesson','Oganesson','Oganesson']};

const REDOX=(function(){const R=(window.CHE&&CHE.DATA&&CHE.DATA.REDOX_POTENTIALS)||null;return R?Object.assign({},R):null})()||{'Li+/Li':-3.04,'K+/K':-2.93,'Na+/Na':-2.71,'Mg2+/Mg':-2.37,'Al3+/Al':-1.66,'Zn2+/Zn':-0.76,'Fe2+/Fe':-0.44,'Ni2+/Ni':-0.26,'Sn2+/Sn':-0.14,'Pb2+/Pb':-0.13,'2H+/H2':0,'Cu2+/Cu':0.34,'I2/I-':0.54,'Ag+/Ag':0.80,'Hg2+/Hg':0.85,'Br2/Br-':1.07,'Cr2O7/Cr3+':1.33,'Cl2/Cl-':1.36,'Au3+/Au':1.50,'MnO4-/Mn2+':1.51,'F2/F-':2.87};

/* ==================== SILNIK ==================== */
const ORDER = ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'];
const CAP = {s:2, p:6, d:10, f:14};
const SH = 'KLMNOPQ';
const COL = {c:'#2f8a55', v:'#b85f00', r:'#b0467a'};

/* wyjątki od reguły n + l (konfiguracje eksperymentalne); klucz = Z, wartość 0 usuwa podpowłokę */
const EXC = {24:{'4s':1,'3d':5},29:{'4s':1,'3d':10},41:{'5s':1,'4d':4},42:{'5s':1,'4d':5},44:{'5s':1,'4d':7},45:{'5s':1,'4d':8},46:{'5s':0,'4d':10},47:{'5s':1,'4d':10},
  57:{'4f':0,'5d':1},58:{'4f':1,'5d':1},64:{'4f':7,'5d':1},78:{'6s':1,'5d':9},79:{'6s':1,'5d':10},
  89:{'5f':0,'6d':1},90:{'5f':0,'6d':2},91:{'5f':2,'6d':1},92:{'5f':3,'6d':1},93:{'5f':4,'6d':1},96:{'5f':7,'6d':1},103:{'6d':0,'7p':1}};
function fill(Z, raw){
  let l = Z, c = {};
  for(const k of ORDER){ if(l <= 0) break; const n = Math.min(CAP[k[1]], l); c[k] = n; l -= n; }
  const x = !raw && EXC[Z];
  if(x) for(const k in x){ if(x[k]) c[k] = x[k]; else delete c[k]; }
  return c;
}
function srt(c){ return Object.keys(c).sort((a,b) => a[0] !== b[0] ? b[0] - a[0] : 'spdf'.indexOf(b[1]) - 'spdf'.indexOf(a[1])); }
function strip(c, n){ const o = {...c}; for(const k of srt(o)){ if(n <= 0) break; const t = Math.min(o[k], n); o[k] -= t; n -= t; if(!o[k]) delete o[k]; } return o; }
function add(c, n){ const o = {...c}; for(const k of ORDER){ if(n <= 0) break; const a = Math.min(CAP[k[1]] - (o[k] || 0), n); if(a > 0){ o[k] = (o[k] || 0) + a; n -= a; } } return o; }
function role(c, k){
  const N = Math.max(...Object.keys(c).map(x => +x[0])), n = +k[0], l = k[1];
  if(n === N){
    if(N === 4 && !c['5s'] && E().z === 46) return l === 'd' ? 'r' : 'c';   /* Pd i jego jony: 4s, 4p to rdzeń, aktywne jest 4d */
    return 'v';
  }
  if(l === 'd' && n === N-1 && (c[k] < 10 || (c[N + 's'] === 1 && !c[N + 'p']))) return 'r';   /* d10 też aktywne w grupie 11 (Cu, Ag, Au) */
  if(l === 'f' && n === N-2 && c[k] < 14) return 'r';
  return 'c';
}

const SYM = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(' ');

function pos(z){
  if(z < 3) return [1, z < 2 ? 1 : 18];
  if(z < 11) return [2, z < 5 ? z - 2 : z + 8];
  if(z < 19) return [3, z < 13 ? z - 10 : z];
  if(z < 37) return [4, z - 18];
  if(z < 55) return [5, z - 36];
  if(z < 57) return [6, z - 54];
  if(z < 72) return [9, z - 54];
  if(z < 87) return [6, z - 68];
  if(z < 89) return [7, z - 86];
  if(z < 104) return [10, z - 86];
  return [7, z - 100];
}
const PM = {};
SYM.forEach((q, i) => { const [r, c] = pos(i + 1); PM[r * 100 + c] = q; });
const blk = z => { const [r, c] = pos(z); return r > 8 ? 'bf' : (z === 2 || c < 3 ? 'bs' : c > 12 ? 'bp' : 'bd'); };

/* dane z silnika N03 CHE (ELEMENTS_118, ATOMIC_PROPS, ISOTOPES): masa, χ, kategoria dla 118 pierwiastków; pełne dane dla 23 */
const ENG = {"H":{"m":1.008,"t":"niemetal","en":2.2,"ar":53,"cr":37,"vdw":120,"ion":{"1-":154},"ea":72.8,"ie":[1312],"ox":[-1,1],"pol":0.6668,"mp":14.01,"bp":20.28,"rho":0.00008988,"st":"gaz","cs":"phase-dependent","iso":[{"A":1,"ab":99.985},{"A":2,"ab":0.015},{"A":3,"ab":0,"hl":"12.32 roku"}]},"He":{"m":4.003,"t":"gaz szlachetny","ar":31,"cr":32,"vdw":140,"ea":-50,"ie":[2372.3,5250.5],"ox":[0],"mp":0.95,"bp":4.22,"rho":0.0001785,"st":"gaz","cs":"phase-dependent","iso":[{"A":3,"ab":0.0002},{"A":4,"ab":99.9998},{"A":6,"ab":0,"hl":"806 ms"}]},"Li":{"m":6.94,"t":"metal","en":0.98,"iso":[{"A":6,"ab":7.59},{"A":7,"ab":92.41}]},"Be":{"m":9.012,"t":"metal","en":1.57},"B":{"m":10.81,"t":"półmetal","en":2.04},"C":{"m":12.011,"t":"niemetal","en":2.55,"ar":67,"cr":76,"vdw":170,"ea":153.9,"ie":[1086.5,2352.6,4620.5,6222.7,37831,47277],"ox":[-4,-3,-2,-1,0,1,2,3,4],"pol":1.76,"mp":3823,"bp":4098,"rho":2.267,"st":"ciało stałe","cs":"hexagonal","iso":[{"A":12,"ab":98.93},{"A":13,"ab":1.07},{"A":14,"ab":0,"hl":"5730 lat"}]},"N":{"m":14.007,"t":"niemetal","en":3.04,"ar":56,"cr":71,"vdw":155,"ea":-7,"ie":[1402.3,2856,4578.1,7475,9444.9,53266.6,64360],"ox":[-3,-2,-1,0,1,2,3,4,5],"pol":1.1,"mp":63.15,"bp":77.36,"rho":0.001251,"st":"gaz","cs":"hexagonal","iso":[{"A":14,"ab":99.636},{"A":15,"ab":0.364}]},"O":{"m":15.999,"t":"niemetal","en":3.44,"ar":48,"cr":66,"vdw":152,"ion":{"2-":140},"ea":141,"ie":[1313.9,3388.3,5300.5,7469.2,10989.5,13326.5,71330,84078],"ox":[-2,-1,1,2],"pol":0.802,"mp":54.36,"bp":90.2,"rho":0.001429,"st":"gaz","cs":"phase-dependent","iso":[{"A":16,"ab":99.757},{"A":17,"ab":0.038},{"A":18,"ab":0.205}]},"F":{"m":18.998,"t":"fluorowiec","en":3.98,"ar":42,"cr":57,"vdw":147,"ion":{"1-":133},"ea":328,"ie":[1681,3374.2,6050.4,8407.7,11022.7,15164.1,17868,92038.1,106434.3],"ox":[-1],"pol":0.557,"mp":53.53,"bp":85.03,"rho":0.001696,"st":"gaz","cs":"phase-dependent"},"Ne":{"m":20.18,"t":"gaz szlachetny"},"Na":{"m":22.99,"t":"metal","en":0.93,"ar":190,"cr":166,"vdw":227,"ion":{"1+":102},"ea":52.8,"ie":[495.8,4562,6910.3,9543,13354,16613,20117,25496,28932,141362],"ox":[-1,0,1],"pol":24.11,"mp":370.87,"bp":1156,"rho":0.968,"st":"ciało stałe","cs":"bcc","iso":[{"A":23,"ab":100},{"A":24,"ab":0,"hl":"15 h"}]},"Mg":{"m":24.305,"t":"metal","en":1.31,"ar":145,"cr":141,"vdw":173,"ion":{"2+":72},"ea":-40,"ie":[737.7,1450.7,7732.7,10542.5,13630,17995,21703,25656,31653,35458],"ox":[1,2],"pol":10.6,"mp":923,"bp":1363,"rho":1.738,"st":"ciało stałe","cs":"hcp"},"Al":{"m":26.982,"t":"metal","en":1.61,"ar":118,"cr":121,"vdw":184,"ion":{"3+":53.5},"ea":42.5,"ie":[577.5,1816.7,2744.8,11577,14842,18379,23326,27465,31853,38473],"ox":[1,2,3],"pol":6.8,"mp":933.47,"bp":2792,"rho":2.698,"st":"ciało stałe","cs":"fcc"},"Si":{"m":28.085,"t":"półmetal","en":1.9,"ar":111,"cr":111,"vdw":210,"ion":{"4+":40,"4-":271},"ea":134.1,"ie":[786.5,1577.1,3231.6,4355.5,16091,19805,23780,29287,33878,38726],"ox":[-4,-3,-2,-1,1,2,3,4],"pol":5.38,"mp":1687,"bp":3538,"rho":2.3296,"st":"ciało stałe","cs":"diamond"},"P":{"m":30.974,"t":"niemetal","en":2.19,"ar":98,"cr":107,"vdw":180,"ion":{"3+":44,"3-":212},"ea":72,"ie":[1011.8,1907,2914.1,4963.6,6273.9,21267,25431,29872,35905,40950],"ox":[-3,-2,-1,1,2,3,4,5],"pol":3.63,"mp":317.3,"bp":550,"rho":1.823,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":31,"ab":100},{"A":32,"ab":0,"hl":"14.27 dnia"}]},"S":{"m":32.06,"t":"niemetal","en":2.58,"ar":88,"cr":105,"vdw":180,"ion":{"2-":184},"ea":200.4,"ie":[999.6,2252,3357,4556,7004.3,8495.8,27107,31719,36621,43177],"ox":[-2,-1,1,2,3,4,5,6],"pol":2.9,"mp":388.36,"bp":717.87,"rho":2.067,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":32,"ab":94.99},{"A":33,"ab":0.75},{"A":34,"ab":4.25},{"A":36,"ab":0.01}]},"Cl":{"m":35.45,"t":"fluorowiec","en":3.16,"ar":79,"cr":102,"vdw":175,"ion":{"1-":181,"5+":12,"7+":27},"ea":349,"ie":[1251.2,2298,3822,5158.6,6542,9362,11018,33604,38600,43961],"ox":[-1,1,2,3,4,5,6,7],"pol":2.18,"mp":171.6,"bp":239.11,"rho":0.003214,"st":"gaz","cs":"orthorhombic","iso":[{"A":35,"ab":75.76},{"A":37,"ab":24.24}]},"Ar":{"m":39.948,"t":"gaz szlachetny"},"K":{"m":39.098,"t":"metal","en":0.82,"ar":243,"cr":203,"vdw":275,"ion":{"1+":138},"ea":48.4,"ie":[418.8,3052,4419.6,5877,7975,9590,11343,14944,16963.7,48610],"ox":[1],"pol":43.4,"mp":336.53,"bp":1032,"rho":0.862,"st":"ciało stałe","cs":"bcc","iso":[{"A":39,"ab":93.258},{"A":40,"ab":0.0117},{"A":41,"ab":6.73}]},"Ca":{"m":40.078,"t":"metal","en":1,"ar":194,"cr":176,"vdw":231,"ion":{"2+":100},"ea":2.37,"ie":[589.8,1145.4,4912.4,6491,8153,10496,12270,14206,18191,20385],"ox":[1,2],"pol":22.8,"mp":1115,"bp":1757,"rho":1.55,"st":"ciało stałe","cs":"fcc","iso":[{"A":40,"ab":96.941},{"A":44,"ab":2.086}]},"Sc":{"m":44.956,"t":"metal","en":1.36},"Ti":{"m":47.867,"t":"metal","en":1.54},"V":{"m":50.942,"t":"metal","en":1.63},"Cr":{"m":51.996,"t":"metal","en":1.66},"Mn":{"m":54.938,"t":"metal","en":1.55},"Fe":{"m":55.845,"t":"metal","en":1.83,"ar":156,"cr":132,"vdw":204,"ion":{"2+":78,"3+":64.5},"ea":14.8,"ie":[762.5,1561.9,2957,5290,7240,9560,12060,14580,22540,25290],"ox":[-2,-1,0,1,2,3,4,5,6,7],"pol":8.4,"mp":1811,"bp":3134,"rho":7.874,"st":"ciało stałe","cs":"bcc","iso":[{"A":54,"ab":5.845},{"A":56,"ab":91.754},{"A":57,"ab":2.119}]},"Co":{"m":58.933,"t":"metal","en":1.88},"Ni":{"m":58.693,"t":"metal","en":1.91},"Cu":{"m":63.546,"t":"metal","en":1.9,"ar":145,"cr":132,"vdw":140,"ion":{"1+":77,"2+":73},"ea":118.4,"ie":[745.5,1957.9,3555,5536,7700,9900,13400,16000,19200,22400],"ox":[-2,1,2,3,4],"pol":6.1,"mp":1357.77,"bp":2835,"rho":8.96,"st":"ciało stałe","cs":"fcc","iso":[{"A":63,"ab":69.15},{"A":65,"ab":30.85}]},"Zn":{"m":65.38,"t":"metal","en":1.65,"ar":142,"cr":122,"vdw":139,"ion":{"2+":74},"ea":-58,"ie":[906.4,1733.3,3833,5731,7970,10400,12900,16800,19600,23000],"ox":[-2,0,1,2],"pol":5.75,"mp":692.68,"bp":1180,"rho":7.134,"st":"ciało stałe","cs":"hcp"},"Ga":{"m":69.723,"t":"metal","en":1.81},"Ge":{"m":72.63,"t":"półmetal","en":2.01},"As":{"m":74.922,"t":"półmetal","en":2.18},"Se":{"m":78.971,"t":"niemetal","en":2.55},"Br":{"m":79.904,"t":"fluorowiec","en":2.96},"Kr":{"m":83.798,"t":"gaz szlachetny","en":3},"Rb":{"m":85.468,"t":"metal","en":0.82},"Sr":{"m":87.62,"t":"metal","en":0.95},"Y":{"m":88.906,"t":"metal","en":1.22},"Zr":{"m":91.224,"t":"metal","en":1.33},"Nb":{"m":92.906,"t":"metal","en":1.6},"Mo":{"m":95.95,"t":"metal","en":2.17},"Tc":{"m":98,"t":"metal","en":1.9},"Ru":{"m":101.07,"t":"metal","en":2.2},"Rh":{"m":102.91,"t":"metal","en":2.28},"Pd":{"m":106.42,"t":"metal","en":2.2},"Ag":{"m":107.87,"t":"metal","en":1.93,"ar":165,"cr":145,"vdw":172,"ion":{"1+":115,"2+":94},"ea":125.6,"ie":[731,2070,3361,5000,6800,8800,11000,13600,16600,20200],"ox":[1,2,3],"pol":7.2,"mp":1234.93,"bp":2435,"rho":10.501,"st":"ciało stałe","cs":"fcc"},"Cd":{"m":112.41,"t":"metal","en":1.69},"In":{"m":114.82,"t":"metal","en":1.78},"Sn":{"m":118.71,"t":"metal","en":1.96},"Sb":{"m":121.76,"t":"półmetal","en":2.05},"Te":{"m":127.6,"t":"półmetal","en":2.1},"I":{"m":126.9,"t":"fluorowiec","en":2.66,"ar":133,"cr":139,"vdw":198,"ion":{"1-":220,"5+":95,"7+":50},"ea":295.2,"ie":[1008.4,1845.9,3180],"ox":[-1,1,3,5,7],"pol":5.35,"mp":386.85,"bp":457.4,"rho":4.933,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":127,"ab":100},{"A":131,"ab":0,"hl":"8.02 dnia"}]},"Xe":{"m":131.29,"t":"gaz szlachetny","en":2.6},"Cs":{"m":132.91,"t":"metal","en":0.79,"iso":[{"A":133,"ab":100},{"A":137,"ab":0,"hl":"30.17 lat"}]},"Ba":{"m":137.33,"t":"metal","en":0.89,"ar":253,"cr":215,"vdw":268,"ion":{"2+":135},"ea":13.95,"ie":[502.9,965.2,3600],"ox":[2],"pol":39.7,"mp":1000,"bp":2170,"rho":3.594,"st":"ciało stałe","cs":"bcc"},"La":{"m":138.91,"t":"lantanowiec","en":1.1},"Ce":{"m":140.12,"t":"lantanowiec","en":1.12},"Pr":{"m":140.91,"t":"lantanowiec","en":1.13},"Nd":{"m":144.24,"t":"lantanowiec","en":1.14},"Pm":{"m":145,"t":"lantanowiec","en":1.13},"Sm":{"m":150.36,"t":"lantanowiec","en":1.17},"Eu":{"m":151.96,"t":"lantanowiec","en":1.2},"Gd":{"m":157.25,"t":"lantanowiec","en":1.2},"Tb":{"m":158.93,"t":"lantanowiec","en":1.1},"Dy":{"m":162.5,"t":"lantanowiec","en":1.22},"Ho":{"m":164.93,"t":"lantanowiec","en":1.23},"Er":{"m":167.26,"t":"lantanowiec","en":1.24},"Tm":{"m":168.93,"t":"lantanowiec","en":1.25},"Yb":{"m":173.05,"t":"lantanowiec","en":1.1},"Lu":{"m":174.97,"t":"lantanowiec","en":1.27},"Hf":{"m":178.49,"t":"metal","en":1.3},"Ta":{"m":180.95,"t":"metal","en":1.5},"W":{"m":183.84,"t":"metal","en":2.36},"Re":{"m":186.21,"t":"metal","en":1.9},"Os":{"m":190.23,"t":"metal","en":2.2},"Ir":{"m":192.22,"t":"metal","en":2.2},"Pt":{"m":195.08,"t":"metal","en":2.28},"Au":{"m":196.97,"t":"metal","en":2.54},"Hg":{"m":200.59,"t":"metal","en":2},"Tl":{"m":204.38,"t":"metal","en":1.62},"Pb":{"m":207.2,"t":"metal","en":2.33,"ar":154,"cr":146,"vdw":202,"ion":{"2+":119,"4+":77.5},"ea":35.1,"ie":[715.6,1450.5,3081.5,4083,6640],"ox":[-4,-2,0,1,2,4],"pol":6.8,"mp":600.61,"bp":2022,"rho":11.342,"st":"ciało stałe","cs":"fcc"},"Bi":{"m":208.98,"t":"metal","en":2.02},"Po":{"m":209,"t":"metal","en":2},"At":{"m":210,"t":"fluorowiec","en":2.2},"Rn":{"m":222,"t":"gaz szlachetny","en":2.2},"Fr":{"m":223,"t":"metal","en":0.7},"Ra":{"m":226,"t":"metal","en":0.9},"Ac":{"m":227,"t":"aktynowiec","en":1.1},"Th":{"m":232.04,"t":"aktynowiec","en":1.3},"Pa":{"m":231.04,"t":"aktynowiec","en":1.5},"U":{"m":238.03,"t":"aktynowiec","en":1.38,"ar":156,"cr":196,"vdw":240,"ion":{"3+":102.5,"4+":89,"6+":73},"ea":50.94,"ie":[597.6,1420],"ox":[1,2,3,4,5,6],"pol":12.7,"mp":1405.3,"bp":4404,"rho":19.1,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":234,"ab":0.0054},{"A":235,"ab":0.7204},{"A":238,"ab":99.2742}]},"Np":{"m":237,"t":"aktynowiec","en":1.36},"Pu":{"m":244,"t":"aktynowiec","en":1.28},"Am":{"m":243,"t":"aktynowiec","en":1.13},"Cm":{"m":247,"t":"aktynowiec","en":1.28},"Bk":{"m":247,"t":"aktynowiec","en":1.3},"Cf":{"m":251,"t":"aktynowiec","en":1.3},"Es":{"m":252,"t":"aktynowiec","en":1.3},"Fm":{"m":257,"t":"aktynowiec","en":1.3},"Md":{"m":258,"t":"aktynowiec","en":1.3},"No":{"m":259,"t":"aktynowiec","en":1.3},"Lr":{"m":262,"t":"aktynowiec","en":1.3},"Rf":{"m":267,"t":"metal"},"Db":{"m":268,"t":"metal"},"Sg":{"m":269,"t":"metal"},"Bh":{"m":270,"t":"metal"},"Hs":{"m":269,"t":"metal"},"Mt":{"m":278,"t":"metal"},"Ds":{"m":281,"t":"metal"},"Rg":{"m":282,"t":"metal"},"Cn":{"m":285,"t":"metal"},"Nh":{"m":286,"t":"metal"},"Fl":{"m":289,"t":"metal"},"Mc":{"m":290,"t":"metal"},"Lv":{"m":293,"t":"metal"},"Ts":{"m":294,"t":"fluorowiec"},"Og":{"m":294,"t":"gaz szlachetny"}};
const STUB = {};
const stub = q => STUB[q] || (STUB[q] = (() => {
  const z = SYM.indexOf(q) + 1, [r, c] = pos(z);
  const nm = NAMES[q] || [q];
  return Object.assign({ z, s:q, n:nm[0]||q, n_en:nm[1], n_de:nm[2], n_la:nm[3], m:null, b:blk(z)[1],
           g: r > 8 ? 'f' : c, p: r > 8 ? (r === 9 ? 6 : 7) : r, t:'—', eng:1 }, ENG[q] || {});
})());

let sym = 'Fe', chg = 0, orb = '', lang = 'pl';
/* ---- klasyfikacja pozycyjna: działa dla wszystkich 118 pierwiastków, także bez wpisu w DB ---- */
const NMT=new Set([1,6,7,8,9,15,16,17,34,35,53]),SMT=new Set([5,14,32,33,51,52,84,85]),NGS=new Set([2,10,18,36,54,86,118]);
const eclass=z=>NGS.has(z)?'Gazy szlachetne':NMT.has(z)?'Niemetale':SMT.has(z)?'Półmetale':'Metale';
const FAMS=['Wodór (osobno)','Litowce','Berylowce','Metale przejściowe (blok d)','Lantanowce','Aktynowce','Transaktynowce','Borowce','Węglowce','Azotowce','Tlenowce','Fluorowce','Helowce'];
function famOf(z){
  if(z===1)return FAMS[0];
  if(z>=57&&z<=71)return 'Lantanowce';
  if(z>=89&&z<=103)return 'Aktynowce';
  if(z>=104&&z<=112)return 'Transaktynowce';
  const c=pos(z)[1];
  return c===1?'Litowce':c===2?'Berylowce':c<=12?'Metale przejściowe (blok d)':['Borowce','Węglowce','Azotowce','Tlenowce','Fluorowce','Helowce'][c-13];
}
const gtxt=e=>e.g==='f'?'bez numeru grupy (f-blok)':'grupa '+e.g;
const E = () => DB[sym] || stub(sym);
const isotopeData=e=>{
  const legacy=e?.iso||[],candidate=window.CHE?.ISOTOPE_VERIFIED_CANDIDATES?.get?.(e?.s);
  if(!candidate?.length)return legacy;
  const rows=new Map(legacy.map(item=>[item.A,{...item}]));
  candidate.forEach(item=>{
    const row=rows.get(item.massNumber)||{A:item.massNumber};
    row.ab=Number((item.representativeAbundance*100).toFixed(6));
    row.abundanceProvenance=item.abundanceProvenance;
    rows.set(item.massNumber,row);
  });
  return [...rows.values()].sort((a,b)=>a.A-b.A);
};
const state = () => { const e = E(), c0 = fill(e.z); let c = c0; if(chg > 0) c = strip(c0, chg); if(chg < 0) c = add(c0, -chg); return { e, c0, c }; };
const elName = (e, lg) => { if(lg === 'en') return e.n_en || e.n; if(lg === 'de') return e.n_de || e.n; if(lg === 'la') return e.n_la || e.n; return e.n; };

/* ==================== IDENTITY / HEAD ==================== */
function head(){
  const { e, c } = state();
  $('hmeta').textContent = `${gtxt(e)} · okres ${e.p} · blok ${e.b} · ${eclass(e.z)}${e.en != null ? ', χ = ' + e.en : ''}`;
  $('hcfg').innerHTML = (chg ? 'jon ' : 'atom ') + ORDER.filter(k => c[k]).map(k => `<span style="color:${COL[role(c, k)]}">${k}${sup(c[k])}</span>`).join(' ');
  $('pos').innerHTML = posviz();
  $('stats').innerHTML = statsHtml();
  $('lew').innerHTML = lewis();
  $('cov').innerHTML = cov();
  $('ec-z').textContent = e.z;
  $('ec-mass').textContent = e.m ? (+e.m).toFixed(3).replace(/\.?0+$/, '') : '—';
  $('ec-sym').textContent = e.s || sym;
  $('ec-name').textContent = elName(e, lang);
  $('ec-ions').textContent = chg ? (chg > 0 ? '+' + chg : chg) : '';
  const opts = [0];
  if(chg > 3) opts.push(chg);
  for(let i = 1; i <= 3; i++) opts.push(i);
  if(e.ion) for(const k in e.ion) if(k.endsWith('-')) opts.push(-parseInt(k));
  $('chsel').innerHTML = [...new Set(opts)].sort((a, b) => a - b)
    .map(v => `<button class="${v === chg ? 'on' : ''}" data-c="${v}">${v > 0 ? '+' + v : v}</button>`).join('');
  document.querySelectorAll('#chsel [data-c]').forEach(b => b.onclick = () => { chg = +b.dataset.c; orb = ''; all(); });
  document.title = `${e.s || sym} · ${elName(e, lang)} · Laboratorium atomu`;
}

/* ==================== BOHR ==================== */
let zt=1,zNuc=10,tA=0,lastTs=0,GEO={},buildN=null,buildT=null;
function truncCfg(c,n){const o={};let r=n;for(const k of ORDER){if(!c[k])continue;const t=Math.min(c[k],r);if(t>0)o[k]=t;r-=t;if(r<=0)break;}return o}
const viewC=()=>{const c=state().c;return buildN==null?c:truncCfg(c,buildN)};
function bohr(ts){
  const {e,c:cFull}=state(),c=buildN==null?cFull:truncCfg(cFull,buildN),cv=$('bohr'),x=cv.getContext('2d'),P=cv.width,W=760,cx=380,cy=380,t=(ts||0)/1000;
  const shells=[],skeys=[],vflag=[];
  ORDER.filter(k=>cFull[k]).forEach(k=>{const i=+k[0]-1;(shells[i]=shells[i]||[]);(skeys[i]=skeys[i]||[]);if(role(cFull,k)==='v')vflag[i]=true;for(let j=0;j<(c[k]||0);j++){shells[i].push(role(cFull,k));skeys[i].push(k);}});
  const ns=shells.filter(Boolean).length,R0=ns<=1?150:ns===2?118:78,step=Math.min(84,(W/2-R0-34)/Math.max(ns-1,1));
  const isotopes=isotopeData(e),top=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A0=top?top.A:(e.m?Math.round(e.m):Math.round(e.z*2.3));
  const A=isoA||A0,N=Math.max(0,A-e.z),N0=Math.max(0,A0-e.z),tot=e.z+N,Rn=3.4*Math.sqrt(tot)+4;
  zNuc=Math.min(70,262/Rn);zt=Math.min(Math.max(zt,.6),zNuc);
  const rings=[];{let k=0;shells.forEach((sh,i)=>{if(!sh)return;rings.push({n:i+1,R:R0+k*step});k++;});}
  const Rlast=rings.length?rings[rings.length-1].R:0;
  Object.assign(GEO,{R0,step,Rn,rings,A,N,inset:false});
  zm=Math.exp(Math.log(zm)+(Math.log(zt)-Math.log(zm))*.14);if(Math.abs(Math.log(zm/zt))<.002)zm=zt;
  x.setTransform(P/W,0,0,P/W,0,0);{const bg=x.createRadialGradient(W/2,W/2,40,W/2,W/2,W*.72);bg.addColorStop(0,'#fcfdfe');bg.addColorStop(1,'#e6edf2');x.fillStyle=bg;x.fillRect(0,0,W,W);}
  x.save();x.translate(cx,cy);x.scale(zm,zm);x.translate(-cx,-cy);
  const sa=zm<2.5?1:Math.max(0,1-(zm-2.5)/4),lw=1/Math.sqrt(zm);
  if(sa>0){x.globalAlpha=sa;x.strokeStyle='rgba(23,33,43,.06)';x.lineWidth=lw;
    for(let r=90;r<W;r+=90){x.beginPath();x.arc(cx,cy,r,0,7);x.stroke();}
    x.beginPath();x.moveTo(0,cy);x.lineTo(W,cy);x.moveTo(cx,0);x.lineTo(cx,W);x.stroke();x.globalAlpha=1;}
  const gl=x.createRadialGradient(cx,cy,2,cx,cy,Rn*2.4);gl.addColorStop(0,'rgba(214,69,43,.25)');gl.addColorStop(1,'rgba(214,69,43,0)');
  x.fillStyle=gl;x.beginPath();x.arc(cx,cy,Rn*2.4,0,7);x.fill();
  const rn=3.2,sph=rn*zm>7,lab=rn*zm>13;let nI=0;
  for(let i=0;i<tot;i++){
    const r=tot>1?3.4*Math.sqrt(i+.5):0,a=i*2.39996+t*.15,isP=((i*7919)%tot)<e.z;
    const px=cx+r*Math.cos(a)+Math.sin(t*6+i*1.7)*.22,py=cy+r*Math.sin(a)+Math.cos(t*5+i*2.3)*.22;
    const col=isP?'#d6452b':'#6f7882',ex=!isP&&++nI>N0;
    if(sph){const g=x.createRadialGradient(px-rn*.35,py-rn*.35,rn*.1,px,py,rn);g.addColorStop(0,isP?'#ff9a85':'#c3cad1');g.addColorStop(1,col);x.fillStyle=g;}else x.fillStyle=col;
    x.beginPath();x.arc(px,py,rn,0,7);x.fill();
    if(ex){x.strokeStyle='#b85f00';x.lineWidth=Math.max(.3,1.4/zm);x.stroke();}
    if(lab){x.fillStyle='#fff';x.font='600 2.6px Inter,sans-serif';x.textAlign='center';x.fillText(isP?'p':'n',px,py+.9);}
  }
  if(sa>0){x.globalAlpha=sa;let k=0;
    shells.forEach((sh,i)=>{if(!sh)return;
      const R=R0+k*step,dir=k%2?-1:1,w=dir*.9/Math.pow(k+1,.9),isVal=!!vflag[i];
      if(GEO.sel===i+1){x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle='rgba(37,99,235,.20)';x.lineWidth=13*lw;x.stroke();}
      if(isVal){x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle='rgba(217,119,6,.12)';x.lineWidth=9*lw;x.stroke();}
      x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle=isVal?'rgba(184,95,0,.7)':'rgba(23,33,43,.18)';x.lineWidth=(isVal?1.8:1.1)*lw;x.stroke();
      {const lb=SH[i]+' · '+sh.length+'/'+2*(i+1)*(i+1),lx=cx+R*.707+5,ly=cy-R*.707;x.font='600 12.5px JetBrains Mono, monospace';x.textAlign='left';
        const tw=x.measureText(lb).width+10;x.beginPath();if(x.roundRect)x.roundRect(lx,ly-12,tw,17,8);else x.rect(lx,ly-12,tw,17);
        x.fillStyle='rgba(255,255,255,.9)';x.fill();x.strokeStyle=isVal?'rgba(184,95,0,.55)':'rgba(23,33,43,.18)';x.lineWidth=lw;x.stroke();
        x.fillStyle=isVal?'#b85f00':'#53616e';x.fillText(lb,lx+5,ly+1);}
      const ks=skeys[i],ang=[],gp=[];
      ks.forEach((q,j)=>{if(!j||q!==ks[j-1])gp.push([q,j,j]);else gp[gp.length-1][2]=j;});
      {const gap=gp.length>1?.17:0,stp=(6.2832-gap*gp.length)/Math.max(sh.length,1);let cur=-Math.PI/2;ks.forEach((q,j)=>{if(j&&q!==ks[j-1])cur+=gap;ang[j]=cur+stp*.5;cur+=stp;});}
      if(gp.length>1){x.font='600 '+(9.5)+'px JetBrains Mono, monospace';x.textAlign='center';
        gp.forEach(([q,j0,j1])=>{const am=(ang[j0]+ang[j1])/2+w*t,hl=GEO.hl===q;x.globalAlpha=sa*(GEO.hl&&!hl?.35:1);x.fillStyle=hl?'#1d4ed8':COL[sh[j0]];x.fillText(q,cx+(R+19)*Math.cos(am),cy+(R+19)*Math.sin(am)+3.2);});x.globalAlpha=sa;}
      sh.forEach((ro,j)=>{const a=ang[j]+w*t,px=cx+R*Math.cos(a),py=cy+R*Math.sin(a),col=COL[ro],isHl=GEO.hl&&skeys[i][j]===GEO.hl;
        x.globalAlpha=sa*(GEO.hl&&!isHl?.25:1);
        if(isHl){x.beginPath();x.arc(px,py,12+2.2*Math.sin(t*5),0,7);x.strokeStyle='#2563eb';x.lineWidth=2.2*lw;x.stroke();x.beginPath();x.arc(px,py,17,0,7);x.fillStyle='rgba(37,99,235,.13)';x.fill();}
        x.shadowColor=col;x.shadowBlur=ro==='c'?4:12;x.beginPath();x.arc(px,py,ro==='c'?5.6:7.2,0,7);x.fillStyle=col;x.fill();x.shadowBlur=0;
        x.beginPath();x.arc(px,py,ro==='c'?1.9:2.5,0,7);x.fillStyle='rgba(255,255,255,.9)';x.fill();});
      x.globalAlpha=sa;k++;});
    x.globalAlpha=1;}
  x.restore();
  if(zm < Math.min(2.4, zNuc * .4) && 77 * zm / Rn > 1.8){
    const al = Math.min(1, (Math.min(2.4, zNuc * .4) - zm) / .6);
    let ir = 62, ix = 0, iy = 0;
    for(; ir >= 38; ir -= 2){ ix = ir + 8; iy = W - ir - 68; if(Math.hypot(ix - cx, iy - cy) - Rlast - 8 >= ir) break; }
    ir = Math.max(ir, 38); ix = ir + 8; iy = W - ir - 68;
    const kk = (ir - 7) / Rn, th = Math.atan2(iy - cy, ix - cx), cth = Math.cos(th), sth = Math.sin(th);
    Object.assign(GEO, {inset: al > .3, ix, iy, ir});
    x.save(); x.globalAlpha = al;
    x.strokeStyle = 'rgba(214,69,43,.5)'; x.lineWidth = 1.2; x.setLineDash([4, 4]);
    x.beginPath(); x.moveTo(cx + (Rn * zm + 3) * cth, cy + (Rn * zm + 3) * sth); x.lineTo(ix - ir * cth, iy - ir * sth); x.stroke(); x.setLineDash([]);
    x.beginPath(); x.arc(ix, iy, ir, 0, 7); x.fillStyle = '#fff'; x.fill(); x.lineWidth = 1.8; x.strokeStyle = '#d6452b'; x.stroke(); x.clip();
    let nj = 0;
    for(let i = 0; i < tot; i++){
      const r = (tot > 1 ? 3.4 * Math.sqrt(i + .5) : 0) * kk, a = i * 2.39996 + t * .15, isP = ((i * 7919) % tot) < e.z, ex = !isP && ++nj > N0, rr = Math.max(1.6, 3.2 * kk);
      const px = ix + r * Math.cos(a), py = iy + r * Math.sin(a);
      x.fillStyle = isP ? '#d6452b' : '#6f7882'; x.beginPath(); x.arc(px, py, rr, 0, 7); x.fill();
      if(ex){ x.strokeStyle = '#b85f00'; x.lineWidth = 1.2; x.stroke(); }
    }
    x.restore();
    x.save(); x.globalAlpha = al; x.font = '600 12px Inter,sans-serif'; x.textAlign = 'left';
    const lt = 'jądro ×' + (kk * zm).toFixed(0) + ' · ' + e.z + 'p + ' + N + 'n', lw2 = x.measureText(lt).width + 12;
    x.fillStyle = 'rgba(255,255,255,.92)'; x.fillRect(6, iy - ir - 24, lw2, 18); x.fillStyle = '#d6452b'; x.fillText(lt, 12, iy - ir - 11); x.restore();
  }
  if(zm<3){x.globalAlpha=Math.min(1,(3-zm)/1.2);x.fillStyle='#d6452b';x.font='600 12px Inter,sans-serif';x.textAlign='center';x.fillText('jądro',cx,cy+(Rn*zm)+20);x.globalAlpha=1;}
  if(zm>zNuc*.45){x.font='600 14px Inter,sans-serif';x.textAlign='left';x.fillStyle='rgba(255,255,255,.88)';x.fillRect(W-232,52,222,86);x.strokeStyle='#d5dee6';x.lineWidth=1;x.strokeRect(W-232,52,222,86);
    [['#d6452b','proton ('+e.z+')'],['#6f7882','neutron ('+N+')'],['#b85f00','obręcz: ponad najczęstszy izotop']].forEach(([cl,tx],i)=>{x.fillStyle=cl;x.beginPath();x.arc(W-218,72+i*24,6,0,7);x.fill();x.fillStyle='#17212b';x.font=(i===2?'500 11.5px':'600 14px')+' Inter,sans-serif';x.fillText(tx,W-205,76+i*24);});}
  if(GEO.hl){const q=GEO.hl,hv=c[q]||0;x.save();x.font='600 13px JetBrains Mono, monospace';x.textAlign='left';const tx=(GEO.bn?'e⁻ '+GEO.bn+'  →  ':'')+q+sup(hv)+(hv?'  ·  '+hv+' e⁻':'  ·  pusta w tym '+(chg?'jonie':'atomie'))+'  ·  n + l = '+nl(q),tw=x.measureText(tx).width+16;
   x.fillStyle='rgba(255,255,255,.94)';x.fillRect(W/2-tw/2,W-100,tw,24);x.strokeStyle='#2563eb';x.lineWidth=1.2;x.strokeRect(W/2-tw/2,W-100,tw,24);x.fillStyle='#1d4ed8';x.textAlign='center';x.fillText(tx,W/2,W-83);x.restore();}
  $('bohrinfo').innerHTML=`<div class="bi"><span><em>Z</em><b>${e.z}</b></span><span><em>N</em><b>${N}</b>${N!==N0?`<small>${N>N0?'+':''}${N-N0} vs najczęstszy</small>`:''}</span><span><em>A</em><b>${A}</b></span><span><em>e⁻</em><b>${e.z-chg}</b></span><span><em>powłok</em><b>${ns}</b></span></div>`;
  $('zr').textContent=(zm<10?zm.toFixed(1):Math.round(zm))+'×';
  {const fo=$('focus');if(fo)fo.style.opacity=zm>zNuc*.45?0:1;}
  const zs=$('zs');if(document.activeElement!==zs)zs.value=100*Math.log(zm/.6)/Math.log(zNuc/.6);
}

/* ==================== ORBITAL LEVELS ==================== */
function arrowSVG(x, y, col, down){
  const h = 11;
  if(!down) return `<line x1="${x}" y1="${y+h/2}" x2="${x}" y2="${y-h/2}" stroke="${col}" stroke-width="1.7" stroke-linecap="round"/><path d="M${x-2.6} ${y-h/2+3.2}L${x} ${y-h/2}L${x+2.6} ${y-h/2+3.2}" stroke="${col}" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<line x1="${x}" y1="${y-h/2}" x2="${x}" y2="${y+h/2}" stroke="${col}" stroke-width="1.7" stroke-linecap="round"/><path d="M${x-2.6} ${y+h/2-3.2}L${x} ${y+h/2}L${x+2.6} ${y+h/2-3.2}" stroke="${col}" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function levels(){
  const { c0, c } = state();
  const ks = ORDER.filter(k => (c0[k] || c[k]));
  if(!ks.length) return nodata(360, 200);
  const W = 360, left = 58, right = 50;
  const en = k => +k[0] + 'spdf'.indexOf(k[1]) + .06 * k[0];
  const sorted = [...ks].sort((a, b) => en(a) - en(b));
  const maxOrb = Math.max(...sorted.map(k => CAP[k[1]] / 2));
  const gap = 4, availW = W - left - right;
  const boxW = Math.min(30, Math.floor((availW - (maxOrb - 1) * gap) / maxOrb));
  const rowH = boxW + 12, top = 26, H = top + sorted.length * rowH + 8;
  const fillOcc = (n, nb) => { const o = Array(nb).fill(0); let r = n; for(let i = 0; i < nb && r > 0; i++){ o[i] = 1; r--; } for(let i = 0; i < nb && r > 0; i++){ o[i] = 2; r--; } return o; };
  let s = '', unp = 0, prs = 0;
  /* oś energii ze strzałką */
  s += `<line x1="9" x2="9" y1="${H-4}" y2="14" stroke="#9aa8b5" stroke-width="1.4"/><path d="M5 19L9 13L13 19" fill="none" stroke="#9aa8b5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><text x="19" y="12" style="font-size:10.5px;letter-spacing:.08em">ENERGIA</text>`;
  sorted.forEach((k, i) => {
    const y = top + i * rowH, n = c[k] || 0, nb = CAP[k[1]] / 2, r = role(c, k), col = COL[r];
    const lost = (c0[k] || 0) > n, occ = fillOcc(n, nb), occ0 = fillOcc(c0[k] || 0, nb);
    if(r === 'v' && n) s += `<rect x="16" y="${y-4}" width="${W-20}" height="${boxW+8}" rx="7" fill="rgba(217,119,6,.08)"/>`;
    s += `<text x="22" y="${y+boxW*.68}" style="font-size:14px;font-weight:700;fill:${n?col:'#6b7886'};cursor:pointer" data-sub="${k}">${k}</text>`;
    for(let j = 0; j < nb; j++){
      const bx = left + j * (boxW + gap), o = occ[j];
      s += `<rect x="${bx}" y="${y}" width="${boxW}" height="${boxW}" rx="4" fill="${o?col:'none'}" fill-opacity="${o?.09:0}" stroke="${o?col:lost?'#c98ba8':'#b8c5d1'}" stroke-width="${o?1.4:1}" stroke-dasharray="${o?0:3}"/>`;
      const ghost = occ0[j] - o;
      if(ghost > 0){
        s += `<g opacity=".4">`;
        if(o === 0) s += arrowSVG(bx + boxW * (occ0[j] === 2 ? .34 : .5), y + boxW / 2, '#b0467a', false);
        if(occ0[j] === 2) s += arrowSVG(bx + boxW * .66, y + boxW / 2, '#b0467a', true);
        s += `</g>`;
      }
      if(o >= 1) s += arrowSVG(bx + boxW * (o === 2 ? .34 : .5), y + boxW / 2, col, false);
      if(o === 2) s += arrowSVG(bx + boxW * .66, y + boxW / 2, col, true);
      if(o === 1) unp++; else if(o === 2) prs++;
    }
    s += `<text x="${W-4}" y="${y+boxW*.68}" text-anchor="end" style="font-size:12.5px;font-weight:600;fill:${n?'#17212b':'#9aa8b5'}">${n} e⁻</text>`;
  });
  $('lev').setAttribute('viewBox', `0 0 ${W} ${H}`);
  const lv = $('levsum');
  if(lv) lv.innerHTML = `<span><em>niesparowane</em><b>${unp}</b></span><span><em>pary</em><b>${prs}</b></span><span><em>magnetyzm</em><b>${unp ? 'para' : 'dia'}</b></span>` + (chg ? `<span><em>jon</em><b>${chg > 0 ? '+' + chg : chg}</b></span>` : '');
  return s;
}

/* ==================== ORBITAL CLOUD ==================== */
const ANG = {
  s:() => [1, 1],
  pz:(th) => { const v = Math.cos(th); return [v * v, v]; },
  dz2:(th) => { const v = 3 * Math.cos(th) ** 2 - 1; return [v * v / 4, v]; },
  dxy:(th, ph) => { const v = Math.sin(th) ** 2 * Math.sin(2 * ph); return [v * v, v]; }
};
let zmCloud = 1;
function cloud(){
  const { c } = state();
  const subs = ORDER.filter(k => c[k] && 'spd'.includes(k[1]));
  if(!orb || !subs.includes(orb.split(':')[0])) orb = (subs[subs.length - 1] || '1s') + ':' + ({ s:'s', p:'pz', d:'dz2' }[(subs[subs.length - 1] || 's')[1]]);
  const [sub, type] = orb.split(':'), n = +sub[0];
  const cv = $('cloud'), x = cv.getContext('2d'), W = cv.width;
  x.fillStyle = '#f4f7f9'; x.fillRect(0, 0, W, W);
  x.strokeStyle = 'rgba(23,33,43,.035)'; x.lineWidth = 1;
  for(let i = 1; i <= 3; i++){ const r = W / 6 * i; x.beginPath(); x.arc(W / 2, W / 2, r, 0, 7); x.stroke(); }
  x.strokeStyle = 'rgba(23,33,43,.055)';
  x.beginPath(); x.moveTo(0, W / 2); x.lineTo(W, W / 2); x.moveTo(W / 2, 0); x.lineTo(W / 2, W); x.stroke();
  x.fillStyle = '#6b7886'; x.font = '11px JetBrains Mono, monospace';
  x.fillText('x', W - 20, W / 2 - 8); x.fillText('y', W / 2 + 8, 20);
  const l = sub[1];
  x.setLineDash([6, 5]); x.strokeStyle = 'rgba(201,139,168,.42)'; x.lineWidth = 1.3;
  if(l === 'p'){ x.beginPath(); x.moveTo(W / 2, 0); x.lineTo(W / 2, W); x.stroke(); }
  else if(l === 'd'){
    x.beginPath(); x.moveTo(W / 2, 0); x.lineTo(W / 2, W); x.stroke();
    x.beginPath(); x.moveTo(0, W / 2); x.lineTo(W, W / 2); x.stroke();
  }
  x.setLineDash([]);
  const sc = (W / 2 - 40) / (n * n * 2.4 + 4) * zmCloud, f2 = ANG[type] || ANG.s;
  let g = 0, seed = n * 131 + type.length * 17 + 1;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  x.globalCompositeOperation = 'multiply';
  for(let i = 0; i < 300000 && g < 46000; i++){
    const th = Math.acos(1 - 2 * rnd()), ph = rnd() * 6.2832;
    const [a, s] = f2(th, ph);
    if(rnd() > a) continue;
    const r = -Math.log(rnd() * rnd()) * n * n * .55;
    let X, Y;
    if(type === 'dxy'){ X = r * Math.sin(th) * Math.cos(ph); Y = r * Math.sin(th) * Math.sin(ph); }
    else { X = r * Math.sin(th) * Math.cos(ph); Y = r * Math.cos(th); }
    const px = W / 2 + X * sc, py = W / 2 - Y * sc;
    if(px < -10 || px > W + 10 || py < -10 || py > W + 10) continue;
    x.fillStyle = s >= 0 ? 'rgba(217,119,6,.2)' : 'rgba(47,138,85,.2)';
    x.fillRect(px - 1.3, py - 1.3, 2.6, 2.6);
    g++;
  }
  x.globalCompositeOperation = 'source-over';
  const ng = x.createRadialGradient(W / 2, W / 2, 1, W / 2, W / 2, 14);
  ng.addColorStop(0, 'rgba(224,103,74,.85)'); ng.addColorStop(1, 'rgba(224,103,74,0)');
  x.fillStyle = ng; x.beginPath(); x.arc(W / 2, W / 2, 14, 0, 7); x.fill();
  x.fillStyle = '#e0674a'; x.beginPath(); x.arc(W / 2, W / 2, 4, 0, 7); x.fill();
  const iw = 286, ih = 90, ix = W - iw - 14, iy = 14, nodes = { s:0, p:1, d:2, f:3 }[sub[1]] || 0;
  x.textAlign = 'left';
  x.fillStyle = 'rgba(255,255,255,.93)'; x.strokeStyle = 'rgba(23,33,43,.14)'; x.lineWidth = 1.5;
  x.beginPath(); x.roundRect(ix, iy, iw, ih, 12); x.fill(); x.stroke();
  x.fillStyle = '#17212b'; x.font = '700 25px Inter, sans-serif';
  x.fillText(sub + ' ' + type, ix + 16, iy + 33);
  x.fillStyle = '#53616e'; x.font = '15px JetBrains Mono, monospace';
  x.fillText('n = ' + n + ' · l = ' + sub[1] + ' (' + nodes + ')', ix + 16, iy + 57);
  x.fillText('węzły: ' + nodes + ' kątowe · ' + Math.max(0, n - nodes - 1) + ' radialne', ix + 16, iy + 78);
  const lw = 156, lh = l !== 's' ? 88 : 66, lx = 14, ly = W - lh - 86;
  x.fillStyle = 'rgba(255,255,255,.93)'; x.strokeStyle = 'rgba(23,33,43,.14)';
  x.beginPath(); x.roundRect(lx, ly, lw, lh, 12); x.fill(); x.stroke();
  x.fillStyle = '#b85f00'; x.fillRect(lx + 14, ly + 13, 16, 16);
  x.fillStyle = '#2f8a55'; x.fillRect(lx + 14, ly + 36, 16, 16);
  x.fillStyle = '#17212b'; x.font = '15px JetBrains Mono, monospace';
  x.fillText('ψ > 0', lx + 40, ly + 27); x.fillText('ψ < 0', lx + 40, ly + 50);
  if(l !== 's'){
    x.strokeStyle = 'rgba(176,70,122,.8)'; x.lineWidth = 2; x.setLineDash([5, 4]);
    x.beginPath(); x.moveTo(lx + 14, ly + 69); x.lineTo(lx + 30, ly + 69); x.stroke(); x.setLineDash([]);
    x.fillStyle = '#17212b'; x.fillText('węzły', lx + 40, ly + 74);
  }
  x.fillStyle = '#53616e'; x.font = '14px JetBrains Mono, monospace';
  x.fillText('próbki: ' + g + ' · zoom ' + zmCloud.toFixed(1) + '×', 14, 26);
  $('orbname').textContent = sub + ' ' + type;
  const opts = { s:['s'], p:['pz'], d:['dz2', 'dxy'] };
  let b = '';
  subs.forEach(k => opts[k[1]].forEach(t => b += `<button class="${orb === k + ':' + t ? 'on' : ''}" data-o="${k}:${t}">${k} ${t}</button>`));
  $('orbsel').innerHTML = b;
  document.querySelectorAll('#orbsel [data-o]').forEach(q => q.onclick = () => { orb = q.dataset.o; cloud(); });
}

/* ==================== WYKRESY ==================== */
let lin = 0;
function ie(){
  const { e, c0 } = state(), v = e.ie;
  if(!v) return nodata(640, 260);
  const L = lin ? (x => x) : Math.log10, lo = lin ? 0 : L(Math.min(...v) * .6), hi = L(Math.max(...v) * 1.15);
  const W = 640, H = 260, bw = (W - 70) / v.length;
  let s = '<text x="4" y="12" style="font-size:10px">kJ/mol</text>', cur = c0, mj = 0, mi = 0;
  for(let i = 1; i < v.length; i++) if(v[i] / v[i-1] > mj){ mj = v[i] / v[i-1]; mi = i; }
  [1e2, 1e3, 1e4, 1e5].forEach(t => {
    if(L(t) > lo && L(t) < hi){
      const y = H - 46 - (L(t) - lo) / (hi - lo) * (H - 78);
      s += `<line x1="46" x2="${W}" y1="${y}" y2="${y}" stroke="#cfd9e1"/><text x="40" y="${y+3.5}" text-anchor="end">${t >= 1e3 ? t / 1e3 + 'k' : t}</text>`;
    }
  });
  v.forEach((q, i) => {
    const nm = srt(cur)[0]; cur = strip(cur, 1);
    const r = role({ ...cur, [nm]:(cur[nm] || 0) + 1 }, nm);
    const h = (L(q) - lo) / (hi - lo) * (H - 78), x = 52 + i * bw, y = H - 46 - h;
    s += `<rect x="${x}" y="${y}" width="${bw-8}" height="${h}" rx="3" fill="${COL[r]}" opacity="${chg === i+1 ? 1 : .8}" data-ch="${i+1}" style="cursor:pointer;${chg === i+1 ? 'stroke:#17212b;stroke-width:1.5' : ''}"><title>I${i+1} = ${q} kJ/mol, usuwa ${nm}. Kliknij: jon +${i+1}</title></rect><text x="${x+(bw-8)/2}" y="${y-5}" text-anchor="middle">${q >= 1e4 ? (q/1e3).toFixed(1)+'k' : q}</text><text x="${x+(bw-8)/2}" y="${H-30}" text-anchor="middle">I${i+1}</text><text x="${x+(bw-8)/2}" y="${H-18}" text-anchor="middle" style="fill:${COL[r]}">${nm}</text>`;
  });
  const peers = Object.keys(DB).filter(q => q !== sym && DB[q].g && DB[q].g === e.g && DB[q].ie && DB[q].ie[0]);
  peers.forEach(q => { const cx = 52 + (bw - 8) / 2, y = H - 46 - Math.min(1, Math.max(0, (L(DB[q].ie[0]) - lo) / (hi - lo))) * (H - 78);
    s += `<circle cx="${cx}" cy="${y}" r="3.4" fill="#fff" stroke="#17212b" stroke-width="1.3"><title>${q}: I1 = ${DB[q].ie[0]} kJ/mol</title></circle><text x="${cx + 9}" y="${y + 3.5}" style="font-size:9px;fill:#53616e">${q}</text>`; });
  if(peers.length) s += `<text x="${W - 4}" y="${H - 4}" text-anchor="end" style="font-size:10px;fill:#53616e">○ I₁ pozostałych pierwiastków grupy ${e.g} (odniesienie)</text>`;
  const xr = 52 + mi * bw - 4;
  s += `<path d="M${xr} 16V${H-50}" stroke="#17212b" stroke-dasharray="3 3"/><text x="${xr+6}" y="24" style="fill:#17212b">największy skok ×${mj.toFixed(2)} (I${mi}→I${mi+1})</text>`;
  return s;
}
function rad(){
  const e = E();
  const it = [['vdW', e.vdw, '#9aa8b5'], ['atomowy', e.ar, '#2f8a55'], ['kowalencyjny', e.cr, '#b85f00']].filter(q => q[1]);
  if(!it.length) return nodata(300, 300);
  const mx = Math.max(...it.map(q => q[1]), ...Object.values(e.ion || {})), k = 125 / mx;
  let s = '<g transform="translate(110 150)">';
  it.forEach(q => s += `<circle r="${q[1]*k}" fill="${q[0] === 'vdW' ? '#e6edf2' : 'none'}" stroke="${q[2]}" stroke-width="1.6"/>`);
  if(e.ion) Object.entries(e.ion).forEach(([a, b]) => { s += `<circle r="${b*k}" fill="none" stroke="#c98ba8" stroke-dasharray="4 3"/>`; });
  s += '<circle r="2" fill="#17212b"/></g>';
  let y = 36;
  const items = [...it, ...Object.entries(e.ion || {}).map(([a, b]) => [e.s + sup(a.replace(/[+-]/, '')) + a.slice(-1) + ' jon', b, '#c98ba8'])];
  items.forEach(q => {
    s += `<line x1="226" x2="238" y1="${y-3}" y2="${y-3}" stroke="${q[2]}" stroke-width="2"/><text x="242" y="${y}" style="fill:#17212b">${q[1]}</text><text x="242" y="${y+10}">${q[0]}</text>`;
    y += 34;
  });
  return s;
}
function radar(){
  const e = E(), L = Math.log10;
  const ax = [
    ['r at.', e.ar, v => v / 260], ['IE1', e.ie && e.ie[0], v => v / 2400], ['χ', e.en, v => v / 4],
    ['EA', e.ea, v => Math.max(0, v) / 350], ['T top.', e.mp, v => (L(v) - L(1)) / (L(3900) - L(1))],
    ['ρ', e.rho, v => (L(v) - L(1e-4)) / (L(23) - L(1e-4))], ['α', e.pol, v => v / 45]
  ];
  const n = ax.length, cx = 170, cy = 150, R = 88;
  let s = '';
  [.25, .5, .75, 1].forEach(k => {
    s += `<polygon points="${ax.map((_, i) => [cx + R * k * Math.sin(i / n * 6.2832), cy - R * k * Math.cos(i / n * 6.2832)].join(',')).join(' ')}" fill="none" stroke="${k === 1 ? '#b8c5d1' : '#e1e8ee'}"/>`;
  });
  ax.forEach((a, i) => {
    const X = Math.sin(i / n * 6.2832), Y = -Math.cos(i / n * 6.2832), lx = cx + (R + 12) * X, ly = cy + (R + 12) * Y + 3;
    const an = X > .35 ? 'start' : X < -.35 ? 'end' : 'middle', val = a[1] == null ? '—' : +(+a[1]).toPrecision(3);
    s += `<line x1="${cx}" y1="${cy}" x2="${cx+R*X}" y2="${cy+R*Y}" stroke="#e1e8ee"/><text x="${lx}" y="${ly}" text-anchor="${an}">${a[0]}<tspan dx="4" style="fill:#17212b;font-weight:600">${val}</tspan></text>`;
  });
  const pts = ax.map((a, i) => {
    const k = a[1] == null ? 0 : Math.min(1, Math.max(0, a[2](a[1])));
    return [cx + R * k * Math.sin(i / n * 6.2832), cy - R * k * Math.cos(i / n * 6.2832)];
  });
  return s + `<polygon points="${pts.join(' ')}" fill="rgba(47,138,85,.2)" stroke="#2f8a55" stroke-width="1.8" stroke-linejoin="round"/>` + pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#b85f00" stroke="#fff" stroke-width="1"/>`).join('');
}
function ph(){
  const e = E(), svg = $('ph'), W = 420;
  if(!e.mp || !e.bp){ svg.setAttribute('viewBox', '0 0 ' + W + ' 90'); return nodata(W, 90); }
  const C = k => k - 273.15, MN = -273.15, MX = 6000, X0 = 62, XW = W - X0 - 14, X = t => X0 + (t - MN) / (MX - MN) * XW;
  const col = ['#7fb5d6', '#b85f00', '#c98ba8'];
  const refs = [['H₂O', 273.15, 373.15], ['Hg', 234.32, 629.88], ['Ga', 302.91, 2477], ['W', 3695, 5828]];
  const oth = Object.keys(DB).filter(k => k !== sym && DB[k].mp && DB[k].bp).map(k => [k, DB[k].mp, DB[k].bp]);
  const all = [...oth, ...refs.filter(r => r[0] !== sym)].sort((a, b) => a[1] - b[1]);
  const rows = [[sym, e.mp, e.bp, 1], ...all.map(r => [...r, 0])];
  const H = 50 + rows.reduce((a, r) => a + (r[3] ? 88 : 24), 0) + 46;
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  const lab = (x, y, t, st) => x > W - 52 ? `<text x="${W-4}" y="${y}" text-anchor="end" style="${st||''}">${t}</text>` : `<text x="${x}" y="${y}" text-anchor="middle" style="${st||''}">${t}</text>`;
  let y = 50, s = '';
  [0, 1000, 2000, 3000, 4000, 5000, 6000].forEach(t => {
    const x = X(t);
    s += `<line x1="${x}" x2="${x}" y1="38" y2="${H-40}" stroke="#e1e8ee"/><text x="${x}" y="30" text-anchor="middle" style="font-size:10.5px">${t}</text>`;
  });
  s += `<text x="4" y="30" style="font-size:11px">°C</text>`;
  rows.forEach(([n, mp, bp, me]) => {
    const h = me ? 24 : 10, x1 = X(C(mp)), x2 = X(C(bp)), o = me ? 1 : .55;
    if(me) s += `<rect x="0" y="${y-8}" width="${W}" height="${h+76}" rx="8" fill="rgba(217,119,6,.07)"/>`;
    s += `<text x="4" y="${y+h/2+4}" style="font-size:${me?15:11.5}px;fill:${me?'#17212b':'#53616e'};font-weight:${me?700:500}">${n}</text>`;
    s += `<rect x="${X(MN)}" y="${y}" width="${x1-X(MN)}" height="${h}" rx="2" fill="${col[0]}" opacity="${o}"/><rect x="${x1}" y="${y}" width="${Math.max(2, x2-x1)}" height="${h}" fill="${col[1]}" opacity="${o}"/><rect x="${x2}" y="${y}" width="${X(MX)-x2}" height="${h}" rx="2" fill="${col[2]}" opacity="${o*.8}"/>`;
    if(me){
      s += lab(x1, y+h+17, 'topn. ' + C(mp).toFixed(0) + ' °C', 'font-size:12px;fill:#17212b');
      s += lab(x2, y+h+34, 'wrz. ' + C(bp).toFixed(0) + ' °C', 'font-size:12px;fill:#17212b');
      s += `<text x="${Math.min(x1, W-100)}" y="${y+h+51}" style="font-size:12px;fill:#b85f00;font-weight:600">ciecz ${(bp-mp).toFixed(0)} K</text>`;
    }
    y += me ? 88 : 24;
  });
  s += `<path d="M${X(25)} 40V${H-40}" stroke="#17212b" stroke-width="1.6" stroke-dasharray="4 3"/><text x="${X(25)}" y="${H-26}" text-anchor="middle" style="fill:#17212b;font-size:11px;font-weight:600">25 °C</text>`;
  [['ciało stałe', 0], ['ciecz', 1], ['gaz', 2]].forEach(([t, i], k) => {
    const lx = X0 + [0, 92, 150][k];
    s += `<rect x="${lx}" y="${H-16}" width="10" height="10" rx="2" fill="${col[i]}"/><text x="${lx+14}" y="${H-7}" style="font-size:11px">${t}</text>`;
  });
  return s;
}
function iso(){
  const e = E(), v = isotopeData(e);
  if(!v || !v.length) return nodata(300, 300);
  const top = v.slice().sort((a, b) => (b.ab || 0) - (a.ab || 0))[0], sel = isoA || (top ? top.A : 0);
  const bw = 250 / v.length, fs = Math.max(8.5, Math.min(11, bw / 3));
  let s = '<line x1="24" x2="292" y1="230" y2="230" stroke="#9aa8b5"/>';
  v.forEach((q, i) => {
    const h = (q.ab || 0) / 100 * 170, x = 36 + i * bw, w = bw - 8, cx = x + w / 2, st = !q.hl, on = q.A === sel;
    s += `<g data-i="${q.A}" style="cursor:pointer"><title>${q.A}${sym}: ${st ? q.ab + ' %' : 'promieniotwórczy, T½ ' + q.hl}</title>`
       + `<rect x="${x-3}" y="26" width="${w+6}" height="240" rx="6" fill="${on ? 'rgba(217,119,6,.10)' : 'transparent'}"/>`;
    s += st ? `<rect x="${x}" y="${230-Math.max(h,2)}" width="${w}" height="${Math.max(h,2)}" rx="3" fill="${on ? '#b85f00' : '#2f8a55'}" opacity="${on ? 1 : .85}"/>`
            : `<rect x="${x}" y="222" width="${w}" height="8" rx="2" fill="${on ? 'rgba(217,119,6,.25)' : 'none'}" stroke="#b85f00" stroke-dasharray="3 2"/>`;
    if(st ? q.ab >= 2 : true) s += `<text x="${cx}" y="${st ? 224-h : 214}" text-anchor="middle" style="font-size:${fs}px">${st ? q.ab + '%' : q.hl}</text>`;
    s += `<text x="${cx}" y="246" text-anchor="middle" style="fill:#17212b;font-size:12.5px;font-weight:${on ? 700 : 500}">${q.A}</text><text x="${cx}" y="260" text-anchor="middle" style="font-size:10px">N=${q.A - e.z}</text></g>`;
  });
  return s + '<text x="24" y="14" style="font-size:9.5px">pełne = stabilne · kreskowane = promieniotwórcze</text>';
}
function ox(){
  const e = E(), S = new Set(e.ox || []);
  let s = '';
  for(let q = -4; q <= 8; q++){
    const x = 30 + (q + 4) * 72, on = S.has(q), cur = on && q === chg;
    const clk = on && (q > 0 || (q < 0 && e.ion && e.ion[(-q) + '-']));
    s += `<rect x="${x}" y="40" width="64" height="${on?64:18}" rx="5" fill="${on?(q<0?'#2f8a55':q===0?'#53616e':'#b85f00'):'none'}" opacity="${on?.9:1}" stroke="${cur?'#17212b':on?'none':'#b8c5d1'}" stroke-width="${cur?2.5:1}" ${clk?`data-ch="${q}" style="cursor:pointer"`:''}><title>${on?'występuje'+(clk?'. Kliknij: jon '+(q>0?'+'+q:q):''):'nie występuje'}</title></rect><text x="${x+32}" y="${on?124:62}" text-anchor="middle" style="font-size:12.5px;font-weight:${cur?700:500};fill:${on?'#17212b':'#9aa8b5'}">${q>0?'+'+q:q}</text>`;
  }
  return s + '<text x="30" y="24" style="font-size:11px">stopnie utlenienia (wypełnione = występują; obrys = wybrany jon)</text>';
}
function redox(){
  const ks = Object.entries(REDOX), X = v => 30 + (v + 3.2) / 6.3 * 940;
  let s = '<defs><linearGradient id="rxg" x1="0" x2="1"><stop offset="0" stop-color="#2f8a55" stop-opacity=".16"/><stop offset="1" stop-color="#b85f00" stop-opacity=".2"/></linearGradient></defs><rect x="30" y="54" width="940" height="16" rx="8" fill="url(#rxg)"/><line x1="30" x2="970" y1="62" y2="62" stroke="#9aa8b5"/>';
  for(let v = -3; v <= 3; v++) s += `<line x1="${X(v)}" x2="${X(v)}" y1="${v?56:50}" y2="${v?68:74}" stroke="${v?'#9aa8b5':'#17212b'}" stroke-width="${v?1:2}"/><text x="${X(v)}" y="86" text-anchor="middle" style="${v?'':'fill:#17212b;font-weight:700'}">${v ? v : '0 (SHE)'}</text>`;
  const mine = ks.filter(([k]) => k.split('/')[1] === sym || k.split('/')[1] === sym + '-').sort((a, b) => a[1] - b[1]);
  ks.forEach(([k, v]) => {
    if(mine.some(m => m[0] === k)) return;
    s += `<circle cx="${X(v)}" cy="62" r="3" fill="#6b7886" opacity=".7"><title>${k}  ${v} V</title></circle>`;
  });
  mine.forEach(([k, v], i) => {
    const x = X(v), ly = 40 - (i % 2) * 17, an = x > 860 ? 'end' : x < 140 ? 'start' : 'middle', tx = an === 'end' ? x + 8 : an === 'start' ? x - 8 : x;
    if(i % 2) s += `<line x1="${x}" x2="${x}" y1="${ly+4}" y2="58" stroke="#b85f00" stroke-width=".8" opacity=".6"/>`;
    s += `<circle cx="${x}" cy="62" r="6.5" fill="#b85f00" stroke="#fff" stroke-width="1.5"><title>${k}  ${v} V</title></circle><text x="${tx}" y="${ly}" text-anchor="${an}" style="fill:#b85f00;font-size:12.5px;font-weight:600">${k} ${v} V</text>`;
  });
  return s + '<text x="30" y="112" style="font-size:11px">silniejszy reduktor ← → silniejszy utleniacz</text>';
}
function slater(){
  const { e, c } = state(), ks = ORDER.filter(k => c[k]);
  const NS = { 1:1, 2:2, 3:3, 4:3.7, 5:4, 6:4.2, 7:4.5 };
  const W = 360, bx = 50, BW = 150, rh = 26, top = 24;
  let o = `<text x="${bx}" y="12" style="font-size:10px;letter-spacing:.08em">Z* (CZĄSTKA / PEŁNE Z)</text><text x="${W-4}" y="12" text-anchor="end" style="font-size:10px;letter-spacing:.08em">E ≈</text>`;
  ks.forEach((k, i) => {
    const n = +k[0], l = k[1]; let sg = 0;
    ks.forEach(j => {
      const m = +j[0], q = j[1], cnt = c[j] - (j === k ? 1 : 0),
            same = m === n && ((l === 's' || l === 'p') ? (q === 's' || q === 'p') : q === l);
      if(same) sg += cnt * (k === '1s' ? .3 : .35);
      else if(l === 's' || l === 'p'){ if(m === n - 1) sg += cnt * .85; else if(m < n - 1) sg += cnt; }
      else if(m < n || (m === n && 'spdf'.indexOf(q) < 'spdf'.indexOf(l))) sg += cnt;
    });
    const r = role(c, k), zs = e.z - sg, y = top + i * rh, col = COL[r], w = v => Math.max(2, v / e.z * BW);
    if(r === 'v') o += `<rect x="0" y="${y-4}" width="${W}" height="${rh-2}" rx="6" fill="rgba(217,119,6,.08)"/>`;
    o += `<text x="6" y="${y+11}" style="fill:${col};font-size:13px;font-weight:700">${k}${sup(c[k])}</text>`
       + `<rect x="${bx}" y="${y}" width="${BW}" height="14" rx="4" fill="#e3eaf0"/><rect x="${bx}" y="${y}" width="${w(zs)}" height="14" rx="4" fill="${col}" opacity=".92"/>`
       + `<text x="${bx+BW+8}" y="${y+11}" style="font-size:12.5px;font-weight:700;fill:#17212b">${zs.toFixed(2)}</text>`
       + `<text x="${W-4}" y="${y+11}" text-anchor="end" style="font-size:11.5px">${(-13.6*Math.pow(zs/NS[n], 2)).toFixed(1).replace('-', '−')} eV</text>`;
  });
  const H = top + ks.length * rh + 18;
  $('sl').setAttribute('viewBox', `0 0 ${W} ${H}`);
  return o + `<text x="6" y="${H-4}" style="font-size:10.5px">szary pasek = pełne Z=${e.z} · wg Slatera (przybl.)</text>`;
}
function notes(){
  const { e, c } = state();
  const L = [], N = Math.max(...Object.keys(c).map(x => +x[0])),
        val = ORDER.filter(k => c[k] && role(c, k) === 'v').reduce((a, k) => a + c[k], 0);
  let u = 0;
  {
    const { c0 } = state(), NG = [[2, 'He'], [10, 'Ne'], [18, 'Ar'], [36, 'Kr'], [54, 'Xe'], [86, 'Rn']], core = NG.filter(q => q[0] < e.z).pop();
    if(core){
      const nc = fill(core[0]), rest = ORDER.filter(k => (c0[k] || 0) - (nc[k] || 0) > 0).sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c0[k] - (nc[k] || 0))).join(' ');
      L.push(`Konfiguracja skrócona: <b>[${core[1]}] ${rest}</b>.`);
    }
  }
  L.push(`Powłoka walencyjna n = ${N} zawiera <b>${val} e⁻</b>.`);
  if(e.b === 's' || e.b === 'p'){
    if(e.g === 18) L.push('Zamknięta powłoka walencyjna: pierwiastek szlachetny, bierny chemicznie.');
    else if(val <= 3) L.push(`Do osiągnięcia konfiguracji gazu szlachetnego łatwiej <b>oddać ${val} e⁻</b> (kation ${e.s}${val > 1 ? sup('' + val) : ''}⁺).`);
    else if(val >= 5) L.push(`Do oktetu brakuje <b>${8 - val} e⁻</b> — typowy anion ${e.s}${8 - val > 1 ? sup('' + (8 - val)) : ''}⁻.`);
    else L.push('Połowa oktetu: tworzy głównie wiązania kowalencyjne (oddanie lub przyjęcie 4 e⁻ jest niekorzystne).');
  }
  ORDER.forEach(k => { if(c[k]){ const nb = CAP[k[1]] / 2; u += c[k] <= nb ? c[k] : 2 * nb - c[k]; } });
  L.push(`Niesparowane elektrony: <b>${u}</b>. ${u ? 'Przewidywany paramagnetyzm (przybliżenie atomowe).' : 'Przewidywany diamagnetyzm.'}`);
  ORDER.forEach(k => {
    if(!c[k] || k[1] === 's') return;
    if(c[k] === CAP[k[1]] / 2) L.push(`${k}${sup(c[k])}: podpowłoka półzapełniona, maksymalna multipletowość (Hund).`);
    else if(c[k] === CAP[k[1]] && role(c, k) !== 'c') L.push(`${k}${sup(c[k])}: podpowłoka zapełniona.`);
  });
  const v = e.ie;
  if(v){
    let m = 0, i = 1;
    for(let q = 1; q < v.length; q++) if(v[q] / v[q-1] > m){ m = v[q] / v[q-1]; i = q; }
    L.push(`Największy skok I${i}→I${i+1} (×${m.toFixed(1)}). ` + (m > 2.5
      ? `Po usunięciu ${i} e⁻ zaczyna się rdzeń, stąd typowy stopień utlenienia +${i}.`
      : 'Wzrost łagodny: kolejne elektrony z podpowłok o zbliżonej energii, stąd wiele stopni utlenienia.'));
  }
  if(e.ion && e.ar){
    const k = Object.entries(e.ion)[0];
    L.push(`Jon ${k[0]} ma promień ${k[1]} pm przy atomowym ${e.ar} pm: ${k[0].endsWith('+') ? 'kation kurczy się po utracie elektronów i słabszym ekranowaniu' : 'anion rośnie przez odpychanie elektronów'}.`);
  }
  return L.map(t => `<div class="nl">${t}</div>`).join('');
}

/* ==================== FORMS ==================== */
const rs = (A, B) => {
  const a = [];
  for(let i = 0; i < 3; i++) for(let j = 0; j < 3; j++) for(let k = 0; k < 3; k++) a.push([(i + j + k) % 2 ? B : A, i - 1, j - 1, k - 1]);
  return a;
};
const cup = (() => {
  const a = [];
  for(const x of [0, 4]) for(const y of [0, 4]) for(const z of [0, 4]) a.push(['O', x - 2, y - 2, z - 2]);
  a.push(['O', 0, 0, 0]);
  [[1,1,1],[3,3,1],[3,1,3],[1,3,3]].forEach(p => a.push(['Cu', p[0] - 2, p[1] - 2, p[2] - 2]));
  return a;
})();
const CD = {
  NaCl:{f:'NaCl',n:'chlorek sodu, halit',a:rs('Na','Cl'),b:1.01,k:.55,R:1.9,d:'Jony Na⁺ i Cl⁻ tworzą sieć typu NaCl (dwie przenikające się sieci fcc), liczba koordynacyjna 6:6. Energia sieciowa ok. 787 kJ/mol.'},
  Fe2O3:{f:'Fe₂O₃',n:'tlenek żelaza(III), hematyt',a:[['Fe',0,0,0],['O',1,0,0],['O',-1,0,0],['O',0,1,0],['O',0,-1,0],['O',0,0,1],['O',0,0,-1]],b:1.05,k:.5,R:1.7,d:'Czerwonobrunatna ruda żelaza i pigment. Każdy Fe³⁺ ma sześć sąsiadów O²⁻ w zniekształconym oktaedrze.'},
  FeO:{f:'FeO',n:'tlenek żelaza(II), wüstyt',a:rs('Fe','O'),b:1.01,k:.5,R:1.9,d:'Struktura typu NaCl, lecz niestechiometryczna (Fe₁₋ₓO), bo część żelaza występuje jako Fe³⁺ z lukami w sieci kationów.'},
  Cu2O:{f:'Cu₂O',n:'tlenek miedzi(I), kupryt',a:cup,b:1.8,k:.42,R:3.2,d:'Czerwony tlenek. Cu⁺ ma liniową koordynację 2 (O–Cu–O), a O²⁻ tetraedr czterech Cu⁺.'},
  H2O:{m:1,f:'H₂O',n:'woda',a:[['O',0,-.3,2],['H',-.85,.45,0],['H',.85,.45,0]],bn:[[0,1,1],[0,2,1]],d:'Cząsteczka kątowa (104,5°): dwie pary wolne tlenu odpychają wiązania O–H. Duża różnica χ daje silny dipol i wiązania wodorowe.'},
  CO2:{m:1,f:'CO₂',n:'dwutlenek węgla',a:[['C',0,0,0],['O',-1.3,0,2],['O',1.3,0,2]],bn:[[0,1,2],[0,2,2]],d:'Liniowa (180°), dwa wiązania podwójne C=O. Każde wiązanie jest polarne, ale dipole się znoszą.'},
  HCl:{m:1,f:'HCl',n:'chlorowodór',a:[['H',-.9,0,0],['Cl',.9,0,3]],bn:[[0,1,1]],d:'Dwuatomowa, silnie polarna (Δχ ≈ 0,96). W wodzie dysocjuje całkowicie: mocny kwas.'},
  CH4:{m:1,f:'CH₄',n:'metan',a:[['C',0,0,0],['H',-.9,-.9,0],['H',.9,-.9,0],['H',-.9,.9,0],['H',.9,.9,0]],bn:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],d:'Tetraedr (109,5°). Cztery równocenne wiązania C–H, sp³, symetria znosi dipole.'},
  NH3:{m:1,f:'NH₃',n:'amoniak',a:[['N',0,-.35,1],['H',-.95,.5,0],['H',.95,.5,0],['H',0,.95,0]],bn:[[0,1,1],[0,2,1],[0,3,1]],d:'Piramida trygonalna (ok. 107°) z parą wolną na azocie. Silny dipol, wiązania wodorowe, zasadowość.'},
  N2:{m:1,f:'N₂',n:'azot cząsteczkowy',a:[['N',-.6,0,1],['N',.6,0,1]],bn:[[0,1,3]],d:'Wiązanie potrójne N≡N (ok. 945 kJ/mol) czyni cząsteczkę wyjątkowo trwałą i obojętną.'},
  H2:{m:1,f:'H₂',n:'wodór cząsteczkowy',a:[['H',-.6,0,0],['H',.6,0,0]],bn:[[0,1,1]],d:'Forma pierwiastkowa wodoru: jedno wiązanie σ z nakładania orbitali 1s. Energia wiązania ~436 kJ/mol.'},
  Cl2:{m:1,f:'Cl₂',n:'chlor cząsteczkowy',a:[['Cl',-.8,0,3],['Cl',.8,0,3]],bn:[[0,1,1]],d:'Pojedyncze wiązanie Cl–Cl i trzy pary wolne na atomie. Silny utleniacz (E° = 1,36 V).'},
  CH3COOH:{m:1,f:'CH₃COOH',n:'kwas octowy (etanowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',0,-1.25,2],['O',.87,.25,2],['H',1.74,-.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1]],fg:[{n:'grupa karboksylowa –COOH',at:[1,2,3,4]},{n:'grupa metylowa –CH₃',at:[0,5,6,7]}],d:'Najprostszy kwas karboksylowy. Grupa –COOH łączy karbonyl C=O i hydroksyl –OH; polaryzacja wiązania O–H pozwala odszczepić proton (słaby kwas, pKa 4,76). Tworzy dimery przez wiązania wodorowe.'},
  C2H5OH:{m:1,f:'C₂H₅OH',n:'etanol (alkohol etylowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',.87,.25,2],['H',1.74,-.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0],['H',0,-1.25,0],['H',0,.75,0]],bn:[[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]],fg:[{n:'grupa hydroksylowa –OH',at:[2,3]}],d:'Alkohol z grupą hydroksylową –OH przy węglu sp³. Grupa –OH tworzy wiązania wodorowe (stąd wysoka temperatura wrzenia względem eteru o tej samej masie) i nadaje mieszalność z wodą.'},
  CH3CHO:{m:1,f:'CH₃CHO',n:'etanal (aldehyd octowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',0,-1.25,2],['H',.87,.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1]],fg:[{n:'grupa aldehydowa –CHO',at:[1,2,3]},{n:'grupa metylowa –CH₃',at:[0,4,5,6]}],d:'Aldehyd: grupa karbonylowa C=O na końcu łańcucha, z atomem H przy węglu karbonylowym. Łatwo się utlenia do kwasu (tu: octowego), co odróżnia aldehydy od ketonów.'},
  C3H6O:{m:1,f:'C₃H₆O',n:'propanon (aceton)',s:1.55,a:[['C',-.87,.5,0],['C',0,0,0],['O',0,-1,2],['C',.87,.5,0],['H',-.87,1.5,0],['H',-1.74,0,0],['H',-1.74,1,0],['H',.87,1.5,0],['H',1.74,0,0],['H',1.74,1,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1],[3,8,1],[3,9,1]],fg:[{n:'grupa karbonylowa (keton) >C=O',at:[1,2]}],d:'Najprostszy keton: grupa karbonylowa C=O między dwoma grupami metylowymi. Polarne wiązanie C=O daje duży dipol; rozpuszczalnik mieszalny z wodą. Trudniej się utlenia niż aldehyd.'},
  CH3NH2:{m:1,f:'CH₃NH₂',n:'metyloamina',s:1.55,a:[['C',-.87,.25,0],['N',0,-.25,1],['H',.87,.25,0],['H',0,-1.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,1],[1,3,1],[0,4,1],[0,5,1],[0,6,1]],fg:[{n:'grupa aminowa –NH₂',at:[1,2,3]},{n:'grupa metylowa –CH₃',at:[0,4,5,6]}],d:'Najprostsza amina pierwszorzędowa. Wolna para elektronowa na azocie czyni ją zasadą (akceptor protonu) i nukleofilem; tworzy wiązania wodorowe.'},
  C6H6:{m:1,f:'C₆H₆',n:'benzen',s:1.55,ar:1,a:[['C',0.0,-1.0,0],['C',0.866,-0.5,0],['C',0.866,0.5,0],['C',0.0,1.0,0],['C',-0.866,0.5,0],['C',-0.866,-0.5,0],['H',0.0,-1.95,0],['H',1.689,-0.975,0],['H',1.689,0.975,0],['H',0.0,1.95,0],['H',-1.689,0.975,0],['H',-1.689,-0.975,0]],bn:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]],fg:[{n:'pierścień aromatyczny (benzenowy)',at:[0,1,2,3,4,5]}],d:'Płaski sześciokąt z sześciu atomów C sp². Sześć elektronów π jest zdelokalizowanych nad pierścieniem (stąd koło we wzorze), więc wszystkie wiązania C–C mają tę samą długość 139 pm, pośrednią między pojedynczym a podwójnym. Układ aromatyczny jest wyjątkowo trwały.'},
  CaO:{f:'CaO',n:'tlenek wapnia, wapno palone',a:[['Ca',0,0,0],['O',1.4,0,0]],b:1.1,k:.5,R:1.8,d:'Tlenek zasadowy. Z woda daje Ca(OH)2.'},
  CuO:{f:'CuO',n:'tlenek miedzi(II)',a:[['Cu',0,0,0],['O',1.3,0,0]],b:1.05,k:.5,R:1.7,d:'Czarny tlenek. Z kwasem daje sol miedzi(II).'},
  SO2:{f:'SO2',n:'tlenek siarki(IV)',a:[['S',0,0,0],['O',1.2,0.4,0],['O',-1.2,0.4,0]],b:1,k:.45,R:1.6,d:'Bezwodnik kwasu siarkowego(IV).'},
  SO3:{f:'SO3',n:'tlenek siarki(VI)',a:[['S',0,0,0],['O',1.2,0,0],['O',-0.6,1.0,0],['O',-0.6,-1.0,0]],b:1,k:.45,R:1.6,d:'Bezwodnik kwasu siarkowego(VI).'},
  H2SO4:{f:'H₂SO₄',n:'kwas siarkowy(VI)',d:'Kwas tlenowy. Z wodą dysocjuje.'},
  NaOH:{f:'NaOH',n:'wodorotlenek sodu',a:[['Na',0,0,0],['O',1.2,0,0],['H',2.0,0,0]],b:1,k:.5,R:1.7,d:'Mocna zasada. W wodzie jony Na+ i OH-.'},
  CaOH2:{f:'Ca(OH)2',n:'wodorotlenek wapnia',a:[['Ca',0,0,0],['O',1.2,0.4,0],['O',1.2,-0.4,0]],b:1.05,k:.5,R:1.8,d:'Woda wapienna. Z CO2 metnieje.'},
  MgO:{f:'MgO',n:'tlenek magnezu',a:[['Mg',0,0,0],['O',1.3,0,0]],b:1.05,k:.5,R:1.7,d:'Tlenek zasadowy. Z woda reaguje slabo.'},
  Al2O3:{f:'Al2O3',n:'tlenek glinu',a:[['Al',0,0,0],['O',1.2,0,0],['O',-0.6,1,0],['O',-0.6,-1,0]],b:1,k:.45,R:1.6,d:'Tlenek amfoteryczny.'},
  Na2SO4:{f:'Na2SO4',n:'siarczan sodu',a:[['Na',-1.4,0,0],['S',0,0,0],['O',1.1,0,0],['Na',1.8,0.6,0]],b:1,k:.45,R:1.6,d:'Sol kwasu siarkowego(VI).'},
  CaCO3:{f:'CaCO3',n:'weglan wapnia',a:[['Ca',0,0,0],['C',1.3,0,0],['O',2.2,0,0]],b:1.05,k:.5,R:1.7,d:'Kred, wapien. Z kwasem daje CO2.'},
  AgCl:{f:'AgCl',n:'chlorek srebra',a:[['Ag',0,0,0],['Cl',1.4,0,0]],b:1.05,k:.5,R:1.8,d:'Osad bialy, trudno rozpuszczalny.'},
  KCl:{f:'KCl',n:'chlorek potasu',a:[['K',0,0,0],['Cl',1.4,0,0]],b:1.05,k:.5,R:1.8,d:'Sol. W wodzie jony K+ i Cl-.'},
  Na2CO3:{f:'Na2CO3',n:'weglan sodu',a:[['Na',-1.2,0,0],['C',0,0,0],['O',1.1,0,0],['Na',1.6,0.5,0]],b:1,k:.45,R:1.6,d:'Soda. W wodzie odczyn zasadowy.'},
  CuSO4:{f:'CuSO4',n:'siarczan miedzi(II)',a:[['Cu',0,0,0],['S',1.4,0,0],['O',2.3,0,0]],b:1,k:.45,R:1.6,d:'Bezwodny bialy, uwodniony niebieski.'},
  HNO3:{f:'HNO3',n:'kwas azotowy(V)',a:[['N',0,0,0],['O',1.1,0,0],['O',-0.5,1,0],['O',-0.5,-1,0]],b:1,k:.4,R:1.5,d:'Kwas tlenowy, utleniacz.'},
  O2:{m:1,f:'O₂',n:'tlen cząsteczkowy',a:[['O',-.6,0,2],['O',.6,0,2]],bn:[[0,1,2]],d:'Wiązanie podwójne O=O. Tlen jest paramagnetyczny — wyjaśnia to teoria orbitali molekularnych.'}
};
Object.entries(window.CHE?.DATA?.MOLECULES||{}).forEach(([id,m])=>{
  const atoms=m.atoms||[],comp={};
  atoms.forEach(a=>{comp[a.element]=(comp[a.element]||0)+1;});
  if(!atoms.length)return;
  const base=CD[id]||{};
  CD[id]=Object.assign(base,{m:1,f:base.f||m.name,n:base.n||m.label||m.name,
    a:atoms.map(a=>[a.element,a.x,a.y,a.z]),bn:(m.bonds||[]).map(b=>[b.a,b.b,b.order||1]),
    comp,geo:base.geo||m.geometry,d:base.d||m.note||''});
});
const X = {
  NaCl:{comp:{Na:1,Cl:1},geo:'sieć fcc, LK 6:6',mp:1074,bp:1686,rho:2.165},
  Fe2O3:{comp:{Fe:2,O:3},geo:'oktaedr FeO₆',mp:1838,rho:5.24},
  FeO:{comp:{Fe:1,O:1},geo:'sieć typu NaCl, LK 6:6',mp:1650,rho:5.745},
  Cu2O:{comp:{Cu:2,O:1},geo:'Cu liniowo (LK 2), O tetraedrycznie (LK 4)',mp:1508,rho:6.0},
  H2O:{comp:{H:2,O:1},geo:'kątowa, 104,5°',hyb:'sp³',mu:1.85,mp:273.15,bp:373.15,rho:0.997},
  CO2:{comp:{C:1,O:2},geo:'liniowa, 180°',hyb:'sp',mu:0,mp:216.6,bp:194.7,rho:0.00184},
  HCl:{comp:{H:1,Cl:1},geo:'liniowa (dwuatomowa)',mu:1.08,mp:158.9,bp:188.1},
  CH4:{comp:{C:1,H:4},geo:'tetraedr, 109,5°',hyb:'sp³',mu:0,mp:90.7,bp:111.7},
  NH3:{comp:{N:1,H:3},geo:'piramida trygonalna, ~107°',hyb:'sp³',mu:1.47,mp:195.4,bp:239.8},
  N2:{comp:{N:2},geo:'liniowa (N≡N)',hyb:'sp',mu:0,mp:63.15,bp:77.36},
  H2:{comp:{H:2},geo:'liniowa (H–H)',mu:0,mp:13.99,bp:20.28},
  Cl2:{comp:{Cl:2},geo:'liniowa (Cl–Cl)',mu:0,mp:171.6,bp:239.1},
  O2:{comp:{O:2},geo:'liniowa (O=O)',hyb:'sp²',mu:0,mp:54.36,bp:90.2},
  CH3COOH:{comp:{C:2,H:4,O:2},geo:'grupa –COOH płaska (120°)',hyb:'sp³ (CH₃), sp² (C karboksylowy)',mu:1.74,mp:289.8,bp:391.2,rho:1.049},
  C2H5OH:{comp:{C:2,H:6,O:1},geo:'zygzak C–C–O, kątowa przy O',hyb:'sp³',mu:1.69,mp:159.1,bp:351.4,rho:0.789},
  CH3CHO:{comp:{C:2,H:4,O:1},geo:'grupa –CHO płaska (120°)',hyb:'sp³ (CH₃), sp² (C=O)',mu:2.69,mp:150.2,bp:293.3,rho:0.784},
  C3H6O:{comp:{C:3,H:6,O:1},geo:'C–CO–C płaskie, ~116°',hyb:'sp³ (CH₃), sp² (C=O)',mu:2.88,mp:178.5,bp:329.2,rho:0.784},
  CH3NH2:{comp:{C:1,H:5,N:1},geo:'piramidalna przy N',hyb:'sp³',mu:1.31,mp:180.1,bp:266.8,rho:0.656},
  C6H6:{comp:{C:6,H:6},geo:'płaski sześciokąt, 120°',hyb:'sp²',mu:0,mp:278.7,bp:353.2,rho:0.8765}
};
for(const k in X) Object.assign(CD[k], X[k]);
Object.keys(CD).forEach(k=>{CD[k].id=k});
const EC = {N:'#6f8fd0',H:'#c3cdd7',C:'#a8a49a',Na:'#c98ba8',Cl:'#7fd19a',Fe:'#e0674a',O:'#e0524f',Cu:'#e8a33d'};
const ER = {N:.8,H:.5,C:.8,Na:1.05,Cl:1.2,Fe:.9,O:.8,Cu:.95};

function molRows(c){const m=MOL.find(q=>q.f===c.f);if(!m)return '';return `<div class="kv" style="margin-top:6px"><span>wiązanie</span><b>${m.bl}</b><span>kąt</span><b>${m.an}</b></div>`}
function cprops(c){
  const cp = c.comp || {}, els = Object.keys(cp);
  const M = els.reduce((t, k) => t + cp[k] * ((DB[k] || {}).m || 0), 0);
  const en = els.map(k => (DB[k] || {}).en).filter(v => v != null);
  const d = els.length === 1 ? 0 : en.length > 1 ? Math.max(...en) - Math.min(...en) : null;
  const bt = d == null ? '' : !c.m ? (d > 1.7 ? 'jonowe' : 'jonowe z udziałem kowalencyjności') : d > 1.7 ? 'jonowe' : d > .4 ? 'kowalencyjne spolaryzowane' : 'kowalencyjne niespolaryzowane';
  const bar = M ? `<div style="display:flex;height:10px;margin:12px 0 5px;border-radius:5px;overflow:hidden">${els.map(k => `<i title="${k}" style="display:block;width:${cp[k]*DB[k].m/M*100}%;background:${EC[k]}"></i>`).join('')}</div><div class="sub">udział masowy: ${els.map(k => k + ' ' + (cp[k]*DB[k].m/M*100).toFixed(1) + '%').join(' · ')}</div>` : '';
  const rows = [
    ['klasa', spCls(c.id)], ['budowa', c.m ? 'cząsteczkowa' : 'kryształ jonowy (sieć)'],
    ['M', M ? (+M.toFixed(2)) + ' u' : null],
    ['Δχ', d != null ? d.toFixed(2) + (bt ? ' (' + bt + ')' : '') : null],
    ['geometria', c.geo], ['hybrydyzacja', c.hyb], ['μ', c.mu != null ? c.mu + ' D' : null],
    ['T topn.', c.mp ? `${c.mp} K · ${K2C(c.mp)}°C` : null],
    ['T wrz.', c.bp ? `${c.bp} K · ${K2C(c.bp)}°C` : null],
    ['ρ', c.rho ? c.rho + ' g/cm³' : null]
  ].filter(r => r[1]);
  return bar + `<div class="kv">${rows.map(r => `<span>${r[0]}</span><b>${r[1]}</b>`).join('')}</div>`;
}

let cur = null, rx = .5, ry = .6, drag = 0, spc = 0, lab = 1, spn = 1;

function cmpUI(){
  if(curKind!=='sp'||!cur) return;
  const L = related();
  $('clist').innerHTML = `<div class="sub" style="padding:4px 8px">wspólne pierwiastki z ${CD[cur].f}:</div>` + L.map(k => `<button data-k="${k}" class="${k === cur ? 'on' : ''}">${CD[k].f} <span>${CD[k].n.split(',')[0]}</span></button>`).join('');
  const c = cur && CD[cur];
  $('cinfo').innerHTML = c ? `<h2>${c.f}</h2><div class="sub" style="margin-bottom:4px">${c.n}</div>${fgSvg(c)}${cprops(c)}${molRows(c)}<p style="margin:12px 0;line-height:1.6">${c.d}</p><div class="sub" style="margin-bottom:6px">Skład:</div><div style="display:flex;flex-wrap:wrap;gap:4px">${spEls(cur).map(q => `<button data-g="${q}" style="padding:5px 11px;background:var(--panel-2);border:1px solid var(--line);border-radius:6px;color:var(--tx)">${q}${c.comp[q]>1?'<sub>'+c.comp[q]+'</sub>':''}</button>`).join('')}</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:14px"><button id="m1" style="padding:5px 11px;background:${spc?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${spc?'#fff':'var(--tx)'}">rozmiar atomów</button><button id="m2" style="padding:5px 11px;background:${lab?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${lab?'#fff':'var(--tx)'}">etykiety</button><button id="m3" style="padding:5px 11px;background:${spn?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${spn?'#fff':'var(--tx)'}">autoobrót</button></div>` : '';
  document.querySelectorAll('#clist [data-k]').forEach(b => b.onclick = () => pick(b.dataset.k, 'sp', 'forms'));
  document.querySelectorAll('#cinfo [data-g]').forEach(b => b.onclick = () => go(b.dataset.g));
  [['m1', () => spc = !spc], ['m2', () => lab = !lab], ['m3', () => spn = !spn]].forEach(([i, f]) => {
    const b = $(i); if(b) b.onclick = () => { f(); cmpUI(); };
  });
}

const FGC = ['#d6452b', '#2f8a55', '#b0467a'], ATC = { O:'#c0392b', N:'#2563eb', Cl:'#1e8a4c', H:'#53616e' };
function fgSvg(c){
  if(!c.m || !c.bn) return '';
  const hasDepth=c.a.some(p=>Math.abs(p[3]||0)>1e-9);
  const cy=Math.cos(.6),sy=Math.sin(.6),cx=Math.cos(.5),sx=Math.sin(.5);
  const P=hasDepth?c.a.map(([e,X,Y,Z])=>{const z1=-X*sy+Z*cy;return [e,X*cy+Z*sy,-(Y*cx-z1*sx)];}):c.a;
  const xs = P.map(p => p[1]), ys = P.map(p => p[2]);
  const w = Math.max(.8, Math.max(...xs) - Math.min(...xs)), h = Math.max(.8, Math.max(...ys) - Math.min(...ys));
  const sc = Math.min(180 / w, (c.ar ? 150 : 100) / h, 60), mx = (Math.max(...xs) + Math.min(...xs)) / 2, my = (Math.max(...ys) + Math.min(...ys)) / 2;
  const X = i => 150 + (P[i][1] - mx) * sc, Y = i => 105 + (P[i][2] - my) * sc;
  let o = '<svg class="fgsvg" viewBox="0 0 300 210" role="img" aria-label="wzór strukturalny">';
  (c.fg || []).forEach((g, k) => {
    const x = g.at.map(X), y = g.at.map(Y), pd = 19, col = FGC[k % 3], x0 = Math.min(...x) - pd, y0 = Math.min(...y) - pd;
    o += `<rect x="${x0}" y="${y0}" width="${Math.max(...x) - Math.min(...x) + 2*pd}" height="${Math.max(...y) - Math.min(...y) + 2*pd}" rx="16" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-dasharray="4 3"/>`
      + `<text x="${(Math.min(...x) + Math.max(...x)) / 2}" y="${(k || c.ar) ? 204 : y0 - 6}" text-anchor="middle" font-size="11" font-weight="600" fill="${col}">${g.n}</text>`;
  });
  c.bn.forEach(([i, j, n0]) => {
    const n = c.ar && i < 6 && j < 6 ? 1 : n0;
    const dx = X(j) - X(i), dy = Y(j) - Y(i), L = Math.hypot(dx, dy) || 1, nx = -dy / L * 2.6, ny = dx / L * 2.6;
    for(let t = 0; t < n; t++){ const k = t - (n - 1) / 2;
      o += `<line x1="${X(i) + nx*k}" y1="${Y(i) + ny*k}" x2="${X(j) + nx*k}" y2="${Y(j) + ny*k}" stroke="#17212b" stroke-width="1.8"/>`; }
  });
  if(c.ar){ const cx = [0,1,2,3,4,5].reduce((t, i) => t + X(i), 0) / 6, cy = [0,1,2,3,4,5].reduce((t, i) => t + Y(i), 0) / 6, r = Math.hypot(X(0) - cx, Y(0) - cy) * .58;
    o += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#d6452b" stroke-width="1.8"/>`; }
  P.forEach((p, i) => { o += `<circle cx="${X(i)}" cy="${Y(i)}" r="${p[0] === 'H' ? 7.5 : 9.5}" fill="#f1f5f8"/><text x="${X(i)}" y="${Y(i) + 4.5}" text-anchor="middle" font-size="${p[0] === 'H' ? 12 : 14}" font-weight="700" fill="${ATC[p[0]] || '#17212b'}">${p[0]}</text>`; });
  return o + '</svg>';
}
const shade = (h, f) => { const n = parseInt(h.slice(1), 16); return `rgb(${(n >> 16 & 255) * f | 0},${(n >> 8 & 255) * f | 0},${(n & 255) * f | 0})`; };
function mol2d(c, x, W){
  const sc = W / (2.9 * (c.s || 1)), en = q => (DB[q] || {}).en || 2.5;
  const P = c.a.map(q => ({ e:q[0], x:W/2+q[1]*sc, y:W/2+q[2]*sc, l:q[3], q:0, m:0, ang:[] }));
  c.bn.forEach(([i, j, o]) => {
    const a = P[i], b = P[j], dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy), nx = -dy/L*6, ny = dx/L*6;
    x.strokeStyle = '#9aa8b5'; x.lineWidth = 3.5;
    for(let k = 0; k < o; k++){ const t = k - (o-1)/2; x.beginPath(); x.moveTo(a.x + nx*t, a.y + ny*t); x.lineTo(b.x + nx*t, b.y + ny*t); x.stroke(); }
    const d = en(b.e) - en(a.e);
    a.q += d; b.q -= d; a.m = Math.max(a.m, Math.abs(d)); b.m = a.m = Math.max(a.m, b.m);
    a.ang.push(Math.atan2(dy, dx)); b.ang.push(Math.atan2(-dy, -dx));
  });
  x.textAlign = 'center'; let vx = 0, vy = 0;
  const cx0 = P.reduce((t, p) => t + p.x, 0) / P.length, cy0 = P.reduce((t, p) => t + p.y, 0) / P.length;
  P.forEach(p => {
    const r = p.e === 'H' ? 20 : 28;
    if(p.e === sym){ x.strokeStyle = '#b85f00'; x.lineWidth = 3; x.beginPath(); x.arc(p.x, p.y, r + 5, 0, 7); x.stroke(); }
    let ax = 0, ay = 0; p.ang.forEach(a => { ax += Math.cos(a); ay += Math.sin(a); });
    const aw = Math.hypot(ax, ay) < .01 ? -Math.PI / 2 : Math.atan2(-ay, -ax);
    const g = x.createRadialGradient(p.x - r*.3, p.y - r*.3, r*.1, p.x, p.y, r);
    const ec = EC[p.e] || '#9aa8b5'; g.addColorStop(0, '#fff'); g.addColorStop(.35, ec); g.addColorStop(1, shade(ec, .62));
    x.shadowColor = 'rgba(23,33,43,.28)'; x.shadowBlur = 10; x.shadowOffsetY = 3;
    x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, r, 0, 7); x.fill(); x.shadowColor = 'transparent'; x.shadowBlur = 0; x.shadowOffsetY = 0;
    x.fillStyle = '#17212b'; x.font = '700 20px Inter, sans-serif'; x.fillText(p.e, p.x, p.y + 6);
    for(let k = 0; k < p.l; k++){
      const a = aw + (k - (p.l - 1) / 2) * (p.l > 2 ? 1.1 : 1.3), px = p.x + (r + 13) * Math.cos(a), py = p.y + (r + 13) * Math.sin(a);
      x.fillStyle = '#b85f00';
      [-1, 1].forEach(t => { x.beginPath(); x.arc(px - Math.sin(a)*3.6*t, py + Math.cos(a)*3.6*t, 2.7, 0, 7); x.fill(); });
    }
    if(p.m > .4){ x.fillStyle = p.q > 0 ? '#e0674a' : '#2f8a55'; x.font = '600 17px JetBrains Mono, monospace'; x.fillText(p.q > 0 ? 'δ⁺' : 'δ⁻', p.x + (r + 20) * Math.cos(aw + 1.57), p.y + (r + 20) * Math.sin(aw + 1.57) + 5); }
    vx -= p.q * (p.x - cx0); vy -= p.q * (p.y - cy0);
  });
  const mg = Math.hypot(vx, vy) / sc, u = [vx / (mg * sc || 1), vy / (mg * sc || 1)], Ln = Math.min(84, 28 + mg * 28);
  x.font = '17px JetBrains Mono, monospace'; x.fillStyle = '#53616e';
  if(mg > .3){
    const x0 = W/2 - u[0]*Ln/2, y0 = W - 78 - u[1]*Ln/2, x1 = x0 + u[0]*Ln, y1 = y0 + u[1]*Ln, a = Math.atan2(u[1], u[0]);
    x.strokeStyle = x.fillStyle = '#17212b'; x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke();
    x.beginPath(); x.moveTo(x1, y1); x.lineTo(x1 - 12 * Math.cos(a - .4), y1 - 12 * Math.sin(a - .4)); x.lineTo(x1 - 12 * Math.cos(a + .4), y1 - 12 * Math.sin(a + .4)); x.fill();
    x.fillStyle = '#53616e'; x.fillText('wypadkowy dipol: cząsteczka polarna', W/2, W - 14);
  } else { x.fillText('dipole wiązań znoszą się: cząsteczka niepolarna', W/2, W - 42); x.fillText('kropki = wolne pary elektronowe', W/2, W - 18); }
}

function mol3d(c,x,W){
  const A=c.a||[],n=A.length;if(!n)return;
  if(spn&&!drag&&!still)ry+=.007;
  const xs=A.map(p=>p[1]),ys=A.map(p=>p[2]),zs=A.map(p=>p[3]||0);
  const mid=(q)=>(Math.min(...q)+Math.max(...q))/2, cx0=mid(xs),cy0=mid(ys),cz0=mid(zs);
  const span=Math.max(1,...xs.map(q=>Math.abs(q-cx0)),...ys.map(q=>Math.abs(q-cy0)),...zs.map(q=>Math.abs(q-cz0)))*2;
  const scale=W/(span*1.8),ca=Math.cos(rx),sa=Math.sin(rx),cb=Math.cos(ry),sb=Math.sin(ry),camera=span*4;
  const P=A.map(([e,X,Y,Z0])=>{const X0=X-cx0,Y0=Y-cy0,Z=(Z0||0)-cz0,x1=X0*cb+Z*sb,z1=-X0*sb+Z*cb,y1=Y0*ca-z1*sa,z2=Y0*sa+z1*ca,persp=camera/(camera+z2);return {e,x:W/2+x1*scale*persp,y:W/2-y1*scale*persp,z:z2,persp};});
  (c.bn||[]).map(([a,b,order])=>({a:P[a],b:P[b],order:Number(order)||1})).filter(q=>q.a&&q.b).sort((a,b)=>(a.a.z+a.b.z)-(b.a.z+b.b.z)).forEach(q=>{
    const dx=q.b.x-q.a.x,dy=q.b.y-q.a.y,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,offs=q.order>=3?[-4,0,4]:q.order===2?[-3,3]:[0];
    x.strokeStyle=q.order>1?'#806018':'#71818a';x.lineWidth=3;x.lineCap='round';
    offs.forEach(off=>{x.beginPath();x.moveTo(q.a.x+nx*off,q.a.y+ny*off);x.lineTo(q.b.x+nx*off,q.b.y+ny*off);x.stroke();});
  });
  P.slice().sort((a,b)=>a.z-b.z).forEach(p=>{
    const radius=Math.max(9,Math.min(30,(p.e==='H'?12:18)*p.persp*(spc?1.3:1)));
    const color=EC[p.e]||'#8b98a5',grad=x.createRadialGradient(p.x-radius*.32,p.y-radius*.36,radius*.08,p.x,p.y,radius);
    grad.addColorStop(0,'#ffffff');grad.addColorStop(.28,color);grad.addColorStop(1,shade(color,.62));
    x.fillStyle=grad;x.beginPath();x.arc(p.x,p.y,radius,0,Math.PI*2);x.fill();
    if(lab){x.fillStyle=p.e==='H'?'#26363d':'#ffffff';x.font=`700 ${p.e==='H'?13:15}px Inter,sans-serif`;x.textAlign='center';x.textBaseline='middle';x.fillText(p.e,p.x,p.y);}
  });
  x.fillStyle='#53616e';x.font='12px Inter,sans-serif';x.textAlign='left';x.fillText('MODEL 3D · obrót',12,W-12);
}

function vw(){
  const c = cur && CD[cur], cv = $('cmpv'), x = cv.getContext('2d'), W = cv.width;
  x.fillStyle = '#f4f7f9'; x.fillRect(0, 0, W, W);
  if(!c) return;
  if(c.m) return mol3d(c,x,W);
  if(!c.bd){ c.bd = []; c.a.forEach((p, i) => c.a.forEach((q, j) => { if(j > i && Math.hypot(p[1] - q[1], p[2] - q[2], p[3] - q[3]) <= c.b) c.bd.push([i, j]); })); }
  if(spn && !drag && !still) ry += .007;
  const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx), sc = W / (2 * c.R);
  const P = c.a.map(([e, X, Y, Z]) => {
    const x1 = X * cy + Z * sy, z1 = -X * sy + Z * cy;
    return { e, x:W/2 + x1*sc, y:W/2 - (Y*cx - z1*sx)*sc, z:Y*sx + z1*cx };
  });
  x.strokeStyle = '#9aa8b5'; x.lineWidth = 3;
  c.bd.forEach(([i, j]) => { x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); });
  P.slice().sort((a, b) => a.z - b.z).forEach(p => {
    const r = ER[p.e] * c.k * sc * (spc ? 1.7 : .6) * (1 + p.z * .04);
    const g = x.createRadialGradient(p.x - r*.3, p.y - r*.3, r*.1, p.x, p.y, r);
    const ec = EC[p.e] || '#9aa8b5'; g.addColorStop(0, '#fff'); g.addColorStop(.3, ec); g.addColorStop(1, shade(ec, .62));
    x.shadowColor = 'rgba(23,33,43,.25)'; x.shadowBlur = 8; x.shadowOffsetY = 2;
    x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, r, 0, 7); x.fill(); x.shadowColor = 'transparent'; x.shadowBlur = 0; x.shadowOffsetY = 0;
    if(lab){ x.fillStyle = '#17212b'; x.font = '700 15px Inter, sans-serif'; x.textAlign = 'center'; x.fillText(p.e, p.x, p.y + 5); }
  });
  x.fillStyle = '#6b7886'; x.font = '15px JetBrains Mono, monospace'; x.textAlign = 'left'; x.fillText('przeciągnij, aby obracać', 12, W - 12);
}
{
  const cv = $('cmpv'); let lx, ly;
  cv.onpointerdown = e => { drag = 1; lx = e.clientX; ly = e.clientY; cv.setPointerCapture(e.pointerId); };
  cv.onpointerup = cv.onpointercancel = () => drag = 0;
  cv.onpointermove = e => {
    if(!drag) return;
    ry += (e.clientX - lx) * .01; rx += (e.clientY - ly) * .01;
    lx = e.clientX; ly = e.clientY;
    if(still) vw();
  };
}

