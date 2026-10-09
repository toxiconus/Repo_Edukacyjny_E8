

const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
const $ = i => document.getElementById(i);
const sup = s => String(s).replace(/[0-9]/g, d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]);
const K2C = k => k == null ? null : +(k - 273.15).toFixed(Math.abs(k) < 10 ? 1 : 0);
const nodata = (w, h, t) => `<text x="${w/2}" y="${h/2}" text-anchor="middle" style="font-size:13px">${t || 'brak danych'}</text>`;

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

const ORDER = ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'];
const CAP = {s:2, p:6, d:10, f:14};
const SH = 'KLMNOPQ';
const COL = {c:'#2f8a55', v:'#b85f00', r:'#b0467a'};

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
    if(N === 4 && !c['5s'] && E().z === 46) return l === 'd' ? 'r' : 'c';    
    return 'v';
  }
  if(l === 'd' && n === N-1 && (c[k] < 10 || (c[N + 's'] === 1 && !c[N + 'p']))) return 'r';    
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

const ENG = {"H":{"m":1.008,"t":"niemetal","en":2.2,"ar":53,"cr":37,"vdw":120,"ion":{"1-":154},"ea":72.8,"ie":[1312],"ox":[-1,1],"pol":0.6668,"mp":14.01,"bp":20.28,"rho":0.00008988,"st":"gaz","cs":"phase-dependent","iso":[{"A":1,"ab":99.985},{"A":2,"ab":0.015},{"A":3,"ab":0,"hl":"12.32 roku"}]},"He":{"m":4.003,"t":"gaz szlachetny","ar":31,"cr":32,"vdw":140,"ea":-50,"ie":[2372.3,5250.5],"ox":[0],"mp":0.95,"bp":4.22,"rho":0.0001785,"st":"gaz","cs":"phase-dependent","iso":[{"A":3,"ab":0.0002},{"A":4,"ab":99.9998},{"A":6,"ab":0,"hl":"806 ms"}]},"Li":{"m":6.94,"t":"metal","en":0.98,"iso":[{"A":6,"ab":7.59},{"A":7,"ab":92.41}]},"Be":{"m":9.012,"t":"metal","en":1.57},"B":{"m":10.81,"t":"półmetal","en":2.04},"C":{"m":12.011,"t":"niemetal","en":2.55,"ar":67,"cr":76,"vdw":170,"ea":153.9,"ie":[1086.5,2352.6,4620.5,6222.7,37831,47277],"ox":[-4,-3,-2,-1,0,1,2,3,4],"pol":1.76,"mp":3823,"bp":4098,"rho":2.267,"st":"ciało stałe","cs":"hexagonal","iso":[{"A":12,"ab":98.93},{"A":13,"ab":1.07},{"A":14,"ab":0,"hl":"5730 lat"}]},"N":{"m":14.007,"t":"niemetal","en":3.04,"ar":56,"cr":71,"vdw":155,"ea":-7,"ie":[1402.3,2856,4578.1,7475,9444.9,53266.6,64360],"ox":[-3,-2,-1,0,1,2,3,4,5],"pol":1.1,"mp":63.15,"bp":77.36,"rho":0.001251,"st":"gaz","cs":"hexagonal","iso":[{"A":14,"ab":99.636},{"A":15,"ab":0.364}]},"O":{"m":15.999,"t":"niemetal","en":3.44,"ar":48,"cr":66,"vdw":152,"ion":{"2-":140},"ea":141,"ie":[1313.9,3388.3,5300.5,7469.2,10989.5,13326.5,71330,84078],"ox":[-2,-1,1,2],"pol":0.802,"mp":54.36,"bp":90.2,"rho":0.001429,"st":"gaz","cs":"phase-dependent","iso":[{"A":16,"ab":99.757},{"A":17,"ab":0.038},{"A":18,"ab":0.205}]},"F":{"m":18.998,"t":"fluorowiec","en":3.98,"ar":42,"cr":57,"vdw":147,"ion":{"1-":133},"ea":328,"ie":[1681,3374.2,6050.4,8407.7,11022.7,15164.1,17868,92038.1,106434.3],"ox":[-1],"pol":0.557,"mp":53.53,"bp":85.03,"rho":0.001696,"st":"gaz","cs":"phase-dependent"},"Ne":{"m":20.18,"t":"gaz szlachetny"},"Na":{"m":22.99,"t":"metal","en":0.93,"ar":190,"cr":166,"vdw":227,"ion":{"1+":102},"ea":52.8,"ie":[495.8,4562,6910.3,9543,13354,16613,20117,25496,28932,141362],"ox":[-1,0,1],"pol":24.11,"mp":370.87,"bp":1156,"rho":0.968,"st":"ciało stałe","cs":"bcc","iso":[{"A":23,"ab":100},{"A":24,"ab":0,"hl":"15 h"}]},"Mg":{"m":24.305,"t":"metal","en":1.31,"ar":145,"cr":141,"vdw":173,"ion":{"2+":72},"ea":-40,"ie":[737.7,1450.7,7732.7,10542.5,13630,17995,21703,25656,31653,35458],"ox":[1,2],"pol":10.6,"mp":923,"bp":1363,"rho":1.738,"st":"ciało stałe","cs":"hcp"},"Al":{"m":26.982,"t":"metal","en":1.61,"ar":118,"cr":121,"vdw":184,"ion":{"3+":53.5},"ea":42.5,"ie":[577.5,1816.7,2744.8,11577,14842,18379,23326,27465,31853,38473],"ox":[1,2,3],"pol":6.8,"mp":933.47,"bp":2792,"rho":2.698,"st":"ciało stałe","cs":"fcc"},"Si":{"m":28.085,"t":"półmetal","en":1.9,"ar":111,"cr":111,"vdw":210,"ion":{"4+":40,"4-":271},"ea":134.1,"ie":[786.5,1577.1,3231.6,4355.5,16091,19805,23780,29287,33878,38726],"ox":[-4,-3,-2,-1,1,2,3,4],"pol":5.38,"mp":1687,"bp":3538,"rho":2.3296,"st":"ciało stałe","cs":"diamond"},"P":{"m":30.974,"t":"niemetal","en":2.19,"ar":98,"cr":107,"vdw":180,"ion":{"3+":44,"3-":212},"ea":72,"ie":[1011.8,1907,2914.1,4963.6,6273.9,21267,25431,29872,35905,40950],"ox":[-3,-2,-1,1,2,3,4,5],"pol":3.63,"mp":317.3,"bp":550,"rho":1.823,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":31,"ab":100},{"A":32,"ab":0,"hl":"14.27 dnia"}]},"S":{"m":32.06,"t":"niemetal","en":2.58,"ar":88,"cr":105,"vdw":180,"ion":{"2-":184},"ea":200.4,"ie":[999.6,2252,3357,4556,7004.3,8495.8,27107,31719,36621,43177],"ox":[-2,-1,1,2,3,4,5,6],"pol":2.9,"mp":388.36,"bp":717.87,"rho":2.067,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":32,"ab":94.99},{"A":33,"ab":0.75},{"A":34,"ab":4.25},{"A":36,"ab":0.01}]},"Cl":{"m":35.45,"t":"fluorowiec","en":3.16,"ar":79,"cr":102,"vdw":175,"ion":{"1-":181,"5+":12,"7+":27},"ea":349,"ie":[1251.2,2298,3822,5158.6,6542,9362,11018,33604,38600,43961],"ox":[-1,1,2,3,4,5,6,7],"pol":2.18,"mp":171.6,"bp":239.11,"rho":0.003214,"st":"gaz","cs":"orthorhombic","iso":[{"A":35,"ab":75.76},{"A":37,"ab":24.24}]},"Ar":{"m":39.948,"t":"gaz szlachetny"},"K":{"m":39.098,"t":"metal","en":0.82,"ar":243,"cr":203,"vdw":275,"ion":{"1+":138},"ea":48.4,"ie":[418.8,3052,4419.6,5877,7975,9590,11343,14944,16963.7,48610],"ox":[1],"pol":43.4,"mp":336.53,"bp":1032,"rho":0.862,"st":"ciało stałe","cs":"bcc","iso":[{"A":39,"ab":93.258},{"A":40,"ab":0.0117},{"A":41,"ab":6.73}]},"Ca":{"m":40.078,"t":"metal","en":1,"ar":194,"cr":176,"vdw":231,"ion":{"2+":100},"ea":2.37,"ie":[589.8,1145.4,4912.4,6491,8153,10496,12270,14206,18191,20385],"ox":[1,2],"pol":22.8,"mp":1115,"bp":1757,"rho":1.55,"st":"ciało stałe","cs":"fcc","iso":[{"A":40,"ab":96.941},{"A":44,"ab":2.086}]},"Sc":{"m":44.956,"t":"metal","en":1.36},"Ti":{"m":47.867,"t":"metal","en":1.54},"V":{"m":50.942,"t":"metal","en":1.63},"Cr":{"m":51.996,"t":"metal","en":1.66},"Mn":{"m":54.938,"t":"metal","en":1.55},"Fe":{"m":55.845,"t":"metal","en":1.83,"ar":156,"cr":132,"vdw":204,"ion":{"2+":78,"3+":64.5},"ea":14.8,"ie":[762.5,1561.9,2957,5290,7240,9560,12060,14580,22540,25290],"ox":[-2,-1,0,1,2,3,4,5,6,7],"pol":8.4,"mp":1811,"bp":3134,"rho":7.874,"st":"ciało stałe","cs":"bcc","iso":[{"A":54,"ab":5.845},{"A":56,"ab":91.754},{"A":57,"ab":2.119}]},"Co":{"m":58.933,"t":"metal","en":1.88},"Ni":{"m":58.693,"t":"metal","en":1.91},"Cu":{"m":63.546,"t":"metal","en":1.9,"ar":145,"cr":132,"vdw":140,"ion":{"1+":77,"2+":73},"ea":118.4,"ie":[745.5,1957.9,3555,5536,7700,9900,13400,16000,19200,22400],"ox":[-2,1,2,3,4],"pol":6.1,"mp":1357.77,"bp":2835,"rho":8.96,"st":"ciało stałe","cs":"fcc","iso":[{"A":63,"ab":69.15},{"A":65,"ab":30.85}]},"Zn":{"m":65.38,"t":"metal","en":1.65,"ar":142,"cr":122,"vdw":139,"ion":{"2+":74},"ea":-58,"ie":[906.4,1733.3,3833,5731,7970,10400,12900,16800,19600,23000],"ox":[-2,0,1,2],"pol":5.75,"mp":692.68,"bp":1180,"rho":7.134,"st":"ciało stałe","cs":"hcp"},"Ga":{"m":69.723,"t":"metal","en":1.81},"Ge":{"m":72.63,"t":"półmetal","en":2.01},"As":{"m":74.922,"t":"półmetal","en":2.18},"Se":{"m":78.971,"t":"niemetal","en":2.55},"Br":{"m":79.904,"t":"fluorowiec","en":2.96},"Kr":{"m":83.798,"t":"gaz szlachetny","en":3},"Rb":{"m":85.468,"t":"metal","en":0.82},"Sr":{"m":87.62,"t":"metal","en":0.95},"Y":{"m":88.906,"t":"metal","en":1.22},"Zr":{"m":91.224,"t":"metal","en":1.33},"Nb":{"m":92.906,"t":"metal","en":1.6},"Mo":{"m":95.95,"t":"metal","en":2.17},"Tc":{"m":98,"t":"metal","en":1.9},"Ru":{"m":101.07,"t":"metal","en":2.2},"Rh":{"m":102.91,"t":"metal","en":2.28},"Pd":{"m":106.42,"t":"metal","en":2.2},"Ag":{"m":107.87,"t":"metal","en":1.93,"ar":165,"cr":145,"vdw":172,"ion":{"1+":115,"2+":94},"ea":125.6,"ie":[731,2070,3361,5000,6800,8800,11000,13600,16600,20200],"ox":[1,2,3],"pol":7.2,"mp":1234.93,"bp":2435,"rho":10.501,"st":"ciało stałe","cs":"fcc"},"Cd":{"m":112.41,"t":"metal","en":1.69},"In":{"m":114.82,"t":"metal","en":1.78},"Sn":{"m":118.71,"t":"metal","en":1.96},"Sb":{"m":121.76,"t":"półmetal","en":2.05},"Te":{"m":127.6,"t":"półmetal","en":2.1},"I":{"m":126.9,"t":"fluorowiec","en":2.66,"ar":133,"cr":139,"vdw":198,"ion":{"1-":220,"5+":95,"7+":50},"ea":295.2,"ie":[1008.4,1845.9,3180],"ox":[-1,1,3,5,7],"pol":5.35,"mp":386.85,"bp":457.4,"rho":4.933,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":127,"ab":100},{"A":131,"ab":0,"hl":"8.02 dnia"}]},"Xe":{"m":131.29,"t":"gaz szlachetny","en":2.6},"Cs":{"m":132.91,"t":"metal","en":0.79,"iso":[{"A":133,"ab":100},{"A":137,"ab":0,"hl":"30.17 lat"}]},"Ba":{"m":137.33,"t":"metal","en":0.89,"ar":253,"cr":215,"vdw":268,"ion":{"2+":135},"ea":13.95,"ie":[502.9,965.2,3600],"ox":[2],"pol":39.7,"mp":1000,"bp":2170,"rho":3.594,"st":"ciało stałe","cs":"bcc"},"La":{"m":138.91,"t":"lantanowiec","en":1.1},"Ce":{"m":140.12,"t":"lantanowiec","en":1.12},"Pr":{"m":140.91,"t":"lantanowiec","en":1.13},"Nd":{"m":144.24,"t":"lantanowiec","en":1.14},"Pm":{"m":145,"t":"lantanowiec","en":1.13},"Sm":{"m":150.36,"t":"lantanowiec","en":1.17},"Eu":{"m":151.96,"t":"lantanowiec","en":1.2},"Gd":{"m":157.25,"t":"lantanowiec","en":1.2},"Tb":{"m":158.93,"t":"lantanowiec","en":1.1},"Dy":{"m":162.5,"t":"lantanowiec","en":1.22},"Ho":{"m":164.93,"t":"lantanowiec","en":1.23},"Er":{"m":167.26,"t":"lantanowiec","en":1.24},"Tm":{"m":168.93,"t":"lantanowiec","en":1.25},"Yb":{"m":173.05,"t":"lantanowiec","en":1.1},"Lu":{"m":174.97,"t":"lantanowiec","en":1.27},"Hf":{"m":178.49,"t":"metal","en":1.3},"Ta":{"m":180.95,"t":"metal","en":1.5},"W":{"m":183.84,"t":"metal","en":2.36},"Re":{"m":186.21,"t":"metal","en":1.9},"Os":{"m":190.23,"t":"metal","en":2.2},"Ir":{"m":192.22,"t":"metal","en":2.2},"Pt":{"m":195.08,"t":"metal","en":2.28},"Au":{"m":196.97,"t":"metal","en":2.54},"Hg":{"m":200.59,"t":"metal","en":2},"Tl":{"m":204.38,"t":"metal","en":1.62},"Pb":{"m":207.2,"t":"metal","en":2.33,"ar":154,"cr":146,"vdw":202,"ion":{"2+":119,"4+":77.5},"ea":35.1,"ie":[715.6,1450.5,3081.5,4083,6640],"ox":[-4,-2,0,1,2,4],"pol":6.8,"mp":600.61,"bp":2022,"rho":11.342,"st":"ciało stałe","cs":"fcc"},"Bi":{"m":208.98,"t":"metal","en":2.02},"Po":{"m":209,"t":"metal","en":2},"At":{"m":210,"t":"fluorowiec","en":2.2},"Rn":{"m":222,"t":"gaz szlachetny","en":2.2},"Fr":{"m":223,"t":"metal","en":0.7},"Ra":{"m":226,"t":"metal","en":0.9},"Ac":{"m":227,"t":"aktynowiec","en":1.1},"Th":{"m":232.04,"t":"aktynowiec","en":1.3},"Pa":{"m":231.04,"t":"aktynowiec","en":1.5},"U":{"m":238.03,"t":"aktynowiec","en":1.38,"ar":156,"cr":196,"vdw":240,"ion":{"3+":102.5,"4+":89,"6+":73},"ea":50.94,"ie":[597.6,1420],"ox":[1,2,3,4,5,6],"pol":12.7,"mp":1405.3,"bp":4404,"rho":19.1,"st":"ciało stałe","cs":"orthorhombic","iso":[{"A":234,"ab":0.0054},{"A":235,"ab":0.7204},{"A":238,"ab":99.2742}]},"Np":{"m":237,"t":"aktynowiec","en":1.36},"Pu":{"m":244,"t":"aktynowiec","en":1.28},"Am":{"m":243,"t":"aktynowiec","en":1.13},"Cm":{"m":247,"t":"aktynowiec","en":1.28},"Bk":{"m":247,"t":"aktynowiec","en":1.3},"Cf":{"m":251,"t":"aktynowiec","en":1.3},"Es":{"m":252,"t":"aktynowiec","en":1.3},"Fm":{"m":257,"t":"aktynowiec","en":1.3},"Md":{"m":258,"t":"aktynowiec","en":1.3},"No":{"m":259,"t":"aktynowiec","en":1.3},"Lr":{"m":262,"t":"aktynowiec","en":1.3},"Rf":{"m":267,"t":"metal"},"Db":{"m":268,"t":"metal"},"Sg":{"m":269,"t":"metal"},"Bh":{"m":270,"t":"metal"},"Hs":{"m":269,"t":"metal"},"Mt":{"m":278,"t":"metal"},"Ds":{"m":281,"t":"metal"},"Rg":{"m":282,"t":"metal"},"Cn":{"m":285,"t":"metal"},"Nh":{"m":286,"t":"metal"},"Fl":{"m":289,"t":"metal"},"Mc":{"m":290,"t":"metal"},"Lv":{"m":293,"t":"metal"},"Ts":{"m":294,"t":"fluorowiec"},"Og":{"m":294,"t":"gaz szlachetny"}};
const STUB = {};
const stub = q => STUB[q] || (STUB[q] = (() => {
  const z = SYM.indexOf(q) + 1, [r, c] = pos(z);
  const nm = NAMES[q] || [q];
  return Object.assign({ z, s:q, n:nm[0]||q, n_en:nm[1], n_de:nm[2], n_la:nm[3], m:null, b:blk(z)[1],
           g: r > 8 ? 'f' : c, p: r > 8 ? (r === 9 ? 6 : 7) : r, t:'—', eng:1 }, ENG[q] || {});
})());

let sym = 'Fe', chg = 0, orb = '', lang = 'pl';
 
const NMT=new Set([1,6,7,8,9,15,16,17,34,35,53]),SMT=new Set([5,14,32,33,51,52,84,85]),NGS=new Set([2,10,18,36,54,86,118]);
const eclass=z=>NGS.has(z)?'Gazy szlachetne':NMT.has(z)?'Niemetale':SMT.has(z)?'Półmetale':'Metale';
const FAMS=['Wodór (osobno)','Litowce','Berylowce','Metale przejściowe (blok d)','Lantanowce','Aktynowce','Transaktynowce','Borowce','Węglowce','Azotowce','Tlenowce','Fluorowce','Helowce'];
