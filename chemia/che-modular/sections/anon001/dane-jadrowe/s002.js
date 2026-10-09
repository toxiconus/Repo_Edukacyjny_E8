

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
const EL = [
[1,'H','Wodór',1.008,2.2,1,1,'nonmetal','s'],[2,'He','Hel',4.003,null,18,1,'noble','s'],
[3,'Li','Lit',6.94,0.98,1,2,'metal','s'],[4,'Be','Beryl',9.012,1.57,2,2,'metal','s'],
[5,'B','Bor',10.81,2.04,13,2,'metalloid','p'],[6,'C','Węgiel',12.011,2.55,14,2,'nonmetal','p'],
[7,'N','Azot',14.007,3.04,15,2,'nonmetal','p'],[8,'O','Tlen',15.999,3.44,16,2,'nonmetal','p'],
[9,'F','Fluor',18.998,3.98,17,2,'halogen','p'],[10,'Ne','Neon',20.18,null,18,2,'noble','p'],
[11,'Na','Sód',22.99,0.93,1,3,'metal','s'],[12,'Mg','Magnez',24.305,1.31,2,3,'metal','s'],
[13,'Al','Glin',26.982,1.61,13,3,'metal','p'],[14,'Si','Krzem',28.085,1.9,14,3,'metalloid','p'],
[15,'P','Fosfor',30.974,2.19,15,3,'nonmetal','p'],[16,'S','Siarka',32.06,2.58,16,3,'nonmetal','p'],
[17,'Cl','Chlor',35.45,3.16,17,3,'halogen','p'],[18,'Ar','Argon',39.948,null,18,3,'noble','p'],
[19,'K','Potas',39.098,0.82,1,4,'metal','s'],[20,'Ca','Wapń',40.078,1.0,2,4,'metal','s'],
[21,'Sc','Skand',44.956,1.36,3,4,'metal','d'],[22,'Ti','Tytan',47.867,1.54,4,4,'metal','d'],
[23,'V','Wanad',50.942,1.63,5,4,'metal','d'],[24,'Cr','Chrom',51.996,1.66,6,4,'metal','d'],
[25,'Mn','Mangan',54.938,1.55,7,4,'metal','d'],[26,'Fe','Żelazo',55.845,1.83,8,4,'metal','d'],
[27,'Co','Kobalt',58.933,1.88,9,4,'metal','d'],[28,'Ni','Nikiel',58.693,1.91,10,4,'metal','d'],
[29,'Cu','Miedź',63.546,1.9,11,4,'metal','d'],[30,'Zn','Cynk',65.38,1.65,12,4,'metal','d'],
[31,'Ga','Gal',69.723,1.81,13,4,'metal','p'],[32,'Ge','German',72.63,2.01,14,4,'metalloid','p'],
[33,'As','Arsen',74.922,2.18,15,4,'metalloid','p'],[34,'Se','Selen',78.971,2.55,16,4,'nonmetal','p'],
[35,'Br','Brom',79.904,2.96,17,4,'halogen','p'],[36,'Kr','Krypton',83.798,3.0,18,4,'noble','p'],
[37,'Rb','Rubid',85.468,0.82,1,5,'metal','s'],[38,'Sr','Stront',87.62,0.95,2,5,'metal','s'],
[39,'Y','Itr',88.906,1.22,3,5,'metal','d'],[40,'Zr','Cyrkon',91.224,1.33,4,5,'metal','d'],
[41,'Nb','Niob',92.906,1.6,5,5,'metal','d'],[42,'Mo','Molibden',95.95,2.17,6,5,'metal','d'],
[43,'Tc','Technet',98,1.9,7,5,'metal','d'],[44,'Ru','Ruten',101.07,2.2,8,5,'metal','d'],
[45,'Rh','Rod',102.91,2.28,9,5,'metal','d'],[46,'Pd','Pallad',106.42,2.2,10,5,'metal','d'],
[47,'Ag','Srebro',107.87,1.93,11,5,'metal','d'],[48,'Cd','Kadm',112.41,1.69,12,5,'metal','d'],
[49,'In','Ind',114.82,1.78,13,5,'metal','p'],[50,'Sn','Cyna',118.71,1.96,14,5,'metal','p'],
[51,'Sb','Antymon',121.76,2.05,15,5,'metalloid','p'],[52,'Te','Tellur',127.6,2.1,16,5,'metalloid','p'],
[53,'I','Jod',126.9,2.66,17,5,'halogen','p'],[54,'Xe','Ksenon',131.29,2.6,18,5,'noble','p'],
[55,'Cs','Cez',132.91,0.79,1,6,'metal','s'],[56,'Ba','Bar',137.33,0.89,2,6,'metal','s'],
[57,'La','Lantan',138.91,1.1,null,6,'lanthanide','f'],[58,'Ce','Cer',140.12,1.12,null,6,'lanthanide','f'],
[59,'Pr','Prazeodym',140.91,1.13,null,6,'lanthanide','f'],[60,'Nd','Neodym',144.24,1.14,null,6,'lanthanide','f'],
[61,'Pm','Promet',145,1.13,null,6,'lanthanide','f'],[62,'Sm','Samar',150.36,1.17,null,6,'lanthanide','f'],
[63,'Eu','Europ',151.96,1.2,null,6,'lanthanide','f'],[64,'Gd','Gadolin',157.25,1.2,null,6,'lanthanide','f'],
[65,'Tb','Terb',158.93,1.1,null,6,'lanthanide','f'],[66,'Dy','Dysproz',162.5,1.22,null,6,'lanthanide','f'],
[67,'Ho','Holm',164.93,1.23,null,6,'lanthanide','f'],[68,'Er','Erb',167.26,1.24,null,6,'lanthanide','f'],
[69,'Tm','Tul',168.93,1.25,null,6,'lanthanide','f'],[70,'Yb','Iterb',173.05,1.1,null,6,'lanthanide','f'],
[71,'Lu','Lutet',174.97,1.27,null,6,'lanthanide','f'],[72,'Hf','Hafn',178.49,1.3,4,6,'metal','d'],
[73,'Ta','Tantal',180.95,1.5,5,6,'metal','d'],[74,'W','Wolfram',183.84,2.36,6,6,'metal','d'],
[75,'Re','Ren',186.21,1.9,7,6,'metal','d'],[76,'Os','Osm',190.23,2.2,8,6,'metal','d'],
[77,'Ir','Iryd',192.22,2.2,9,6,'metal','d'],[78,'Pt','Platyna',195.08,2.28,10,6,'metal','d'],
[79,'Au','Złoto',196.97,2.54,11,6,'metal','d'],[80,'Hg','Rtęć',200.59,2.0,12,6,'metal','d'],
[81,'Tl','Tal',204.38,1.62,13,6,'metal','p'],[82,'Pb','Ołów',207.2,2.33,14,6,'metal','p'],
[83,'Bi','Bizmut',208.98,2.02,15,6,'metal','p'],[84,'Po','Polon',209,2.0,16,6,'metal','p'],
[85,'At','Astat',210,2.2,17,6,'halogen','p'],[86,'Rn','Radon',222,2.2,18,6,'noble','p'],
[87,'Fr','Frans',223,0.7,1,7,'metal','s'],[88,'Ra','Rad',226,0.9,2,7,'metal','s'],
[89,'Ac','Aktyn',227,1.1,null,7,'actinide','f'],[90,'Th','Tor',232.04,1.3,null,7,'actinide','f'],
[91,'Pa','Protaktyn',231.04,1.5,null,7,'actinide','f'],[92,'U','Uran',238.03,1.38,null,7,'actinide','f'],
[93,'Np','Neptun',237,1.36,null,7,'actinide','f'],[94,'Pu','Pluton',244,1.28,null,7,'actinide','f'],
[95,'Am','Ameryk',243,1.13,null,7,'actinide','f'],[96,'Cm','Kiur',247,1.28,null,7,'actinide','f'],
[97,'Bk','Berkel',247,1.3,null,7,'actinide','f'],[98,'Cf','Kaliforn',251,1.3,null,7,'actinide','f'],
[99,'Es','Einstein',252,1.3,null,7,'actinide','f'],[100,'Fm','Ferm',257,1.3,null,7,'actinide','f'],
[101,'Md','Mendelew',258,1.3,null,7,'actinide','f'],[102,'No','Nobel',259,1.3,null,7,'actinide','f'],
[103,'Lr','Lorens',262,1.3,null,7,'actinide','f'],[104,'Rf','Rutherford',267,null,4,7,'metal','d'],
[105,'Db','Dubn',268,null,5,7,'metal','d'],[106,'Sg','Seaborg',269,null,6,7,'metal','d'],
[107,'Bh','Bohr',270,null,7,7,'metal','d'],[108,'Hs','Has',269,null,8,7,'metal','d'],
[109,'Mt','Meitner',278,null,9,7,'metal','d'],[110,'Ds','Darmstadt',281,null,10,7,'metal','d'],
[111,'Rg','Roentgen',282,null,11,7,'metal','d'],[112,'Cn','Kopernik',285,null,12,7,'metal','d'],
[113,'Nh','Nihon',286,null,13,7,'metal','p'],[114,'Fl','Flerow',289,null,14,7,'metal','p'],
[115,'Mc','Moskow',290,null,15,7,'metal','p'],[116,'Lv','Liwsermor',293,null,16,7,'metal','p'],
[117,'Ts','Tenness',294,null,17,7,'halogen','p'],[118,'Og','Oganesson',294,null,18,7,'noble','p']
];
D.ELEMENTS_118 = EL.map(r=>({z:r[0],s:r[1],n:r[2],mass:r[3],en:r[4],g:r[5],p:r[6],t:r[7],block:r[8]}));
D.ELEMENTS_54 = D.ELEMENTS_118.slice(0,54);
D.ATOMIC_MASS = {};
D.ELEMENTS_118.forEach(e=>{ D.ATOMIC_MASS[e.s] = e.mass; });
const ORDER = ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'];
const CAP = {s:2,p:6,d:10,f:14};
function fillConfig(Z, exceptions){
  if(exceptions && exceptions[Z]) return Object.assign({}, exceptions[Z]);
  let left = Z, cfg = {};
  for(const name of ORDER){
    if(left <= 0) break;
    const cap = CAP[name.slice(-1)];
    const n = Math.min(cap, left);
    cfg[name] = n;
    left -= n;
  }
  return cfg;
}
const CONFIG_EXCEPTIONS = {
  24:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':1,'3d':5},
  29:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':1,'3d':10},
  41:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':1,'4d':4},
  42:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':1,'4d':5},
  44:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':1,'4d':7},
  45:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':1,'4d':8},
  46:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':0,'4d':10},
  47:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':1,'4d':10},
  79:{'1s':2,'2s':2,'2p':6,'3s':2,'3p':6,'4s':2,'3d':10,'4p':6,'5s':1,'4d':10,'5p':6,'6s':1,'4f':14,'5d':10}
};
function shellsFromConfig(cfg){
  const map = {};
  Object.keys(cfg).forEach(name=>{
    const n = Number(name[0]);
    map[n] = (map[n] || 0) + cfg[name];
  });
  return Object.keys(map).sort((a,b)=>Number(a)-Number(b)).map(k=>map[k]);
}
function valenceFromConfig(cfg){
  const s = cfg['2s'] || 0, p = cfg['2p'] || 0;
  if(!cfg['3s'] && !cfg['3p'] && !cfg['3d']) return s + p;
  return (cfg['3s'] || 0) + (cfg['3p'] || 0);
}
D.ATOM_META = {};
D.ELEMENTS_118.forEach(e=>{
  const cfg = fillConfig(e.z, CONFIG_EXCEPTIONS);
  const massNumber = Math.round(e.mass);
  D.ATOM_META[e.s] = {
    Z: e.z,
    symbol: e.s,
    name: e.n,
    mass: e.mass,
    massNumber: massNumber,
    neutrons: massNumber - e.z,
    group: e.g,
    period: e.p,
    block: e.block,
    classification: e.t,
    electronegativity: e.en,
    shells: shellsFromConfig(cfg),
    subshells: cfg,
    valence: valenceFromConfig(cfg) || null,
    isMetal: e.t === 'metal',
    isNonmetal: e.t === 'nonmetal',
    isMetalloid: e.t === 'metalloid',
    isNobleGas: e.t === 'noble',
    isHalogen: e.t === 'halogen',
    isTransitionMetal: e.block === 'd',
    isLanthanide: e.t === 'lanthanide',
    isActinide: e.t === 'actinide'
  };
});
D.ELEM = {
  H:{c1:'#ffffff',c2:'#e2e8f0',s:'#64748b',t:'#0f172a',r:15},He:{c1:'#e0f2fe',c2:'#7dd3fc',s:'#0369a1',t:'#0f172a',r:16},
  Li:{c1:'#fef3c7',c2:'#f59e0b',s:'#78350f',t:'#0f172a',r:24},C:{c1:'#94a3b8',c2:'#475569',s:'#1e293b',t:'#ffffff',r:24},
  N:{c1:'#93c5fd',c2:'#2563eb',s:'#1e3a8a',t:'#ffffff',r:24},O:{c1:'#fca5a5',c2:'#dc2626',s:'#991b1b',t:'#ffffff',r:24},
  F:{c1:'#a3e635',c2:'#65a30d',s:'#365314',t:'#0f172a',r:22},Na:{c1:'#c4b5fd',c2:'#7c3aed',s:'#4c1d95',t:'#ffffff',r:26},
  Mg:{c1:'#fed7aa',c2:'#ea580c',s:'#9a3412',t:'#0f172a',r:26},Al:{c1:'#cbd5e1',c2:'#64748b',s:'#334155',t:'#0f172a',r:26},
  Si:{c1:'#d6d3d1',c2:'#78716c',s:'#44403c',t:'#ffffff',r:26},P:{c1:'#fdba74',c2:'#ea580c',s:'#9a3412',t:'#0f172a',r:26},
  S:{c1:'#fde68a',c2:'#d97706',s:'#92400e',t:'#0f172a',r:26},Cl:{c1:'#86efac',c2:'#16a34a',s:'#166534',t:'#0f172a',r:26},
  K:{c1:'#ddd6fe',c2:'#8b5cf6',s:'#5b21b6',t:'#ffffff',r:28},Ca:{c1:'#fed7aa',c2:'#f97316',s:'#9a3412',t:'#0f172a',r:28},
  Fe:{c1:'#fca5a5',c2:'#b91c1c',s:'#7f1d1d',t:'#ffffff',r:26},Cu:{c1:'#fdba74',c2:'#c2410c',s:'#7c2d12',t:'#ffffff',r:26},
  Zn:{c1:'#cbd5e1',c2:'#64748b',s:'#334155',t:'#0f172a',r:26},Ag:{c1:'#e5e7eb',c2:'#9ca3af',s:'#4b5563',t:'#0f172a',r:26},
  Br:{c1:'#fca5a5',c2:'#991b1b',s:'#7f1d1d',t:'#ffffff',r:28},I:{c1:'#c4b5fd',c2:'#6d28d9',s:'#4c1d95',t:'#ffffff',r:30}
};
D.PHYSICAL_PROPS = {
  H2O:{mp:273.15,bp:373.15,density:1.0,stateAt298:'l',color:'bezbarwny',odor:'bezwonny'},
  HCl:{mp:158,bp:188,density:1.49,stateAt298:'aq',color:'bezbarwny',odor:'ostry'},
  NaOH:{mp:591,bp:1663,density:2.17,stateAt298:'s',color:'biały',odor:'bezwonny'},
  CO2:{mp:216.6,bp:194.7,density:1.977,stateAt298:'g',color:'bezbarwny',odor:'bezwonny'},
  NH3:{mp:195.4,bp:239.8,density:0.682,stateAt298:'g',color:'bezbarwny',odor:'ostry'},
  CH4:{mp:90.7,bp:111.6,density:0.717,stateAt298:'g',color:'bezbarwny',odor:'bezwonny'}
};
D.THERMOCHEM = {
  H2O:{dHf:-285.8,S:69.9,Cp:75.3},HCl:{dHf:-92.3,S:186.9,Cp:29.1},NaOH:{dHf:-425.9,S:64.5,Cp:59.5},
  NaCl:{dHf:-411.2,S:72.1,Cp:50.5},CO2:{dHf:-393.5,S:213.8,Cp:37.1},NH3:{dHf:-46.1,S:192.8,Cp:35.1},
  CH4:{dHf:-74.8,S:186.3,Cp:35.7},Zn:{dHf:0,S:60.0,Cp:25.4},Fe:{dHf:0,S:27.3,Cp:25.1},
  Mg:{dHf:0,S:32.7,Cp:24.9},CaCO3:{dHf:-1206.9,S:92.9,Cp:81.9},CaCl2:{dHf:-795.8,S:104.6,Cp:72.6},
  ZnCl2:{dHf:-415.1,S:111.5,Cp:71.9},MgCl2:{dHf:-641.3,S:89.6,Cp:71.4},H2:{dHf:0,S:130.7,Cp:28.8},
  H2SO4:{dHf:-814.0,S:156.9,Cp:98.6}
};
D.REDOX_POTENTIALS = {
  'Li+/Li':-3.04,'K+/K':-2.93,'Na+/Na':-2.71,'Mg2+/Mg':-2.37,'Al3+/Al':-1.66,
  'Zn2+/Zn':-0.76,'Fe2+/Fe':-0.44,'2H+/H2':0.0,'Cu2+/Cu':0.34,'Ag+/Ag':0.80,
  'Au3+/Au':1.50,'F2/F-':2.87,'Cl2/Cl-':1.36,'Br2/Br-':1.07,'I2/I-':0.54,
  'MnO4-/Mn2+':1.51,'Cr2O7^2-/Cr3+':1.33,'Ni2+/Ni':-0.26,'Pb2+/Pb':-0.13,
  'Sn2+/Sn':-0.14,'Hg2+/Hg':0.85,
   
  'Cs+/Cs':-3.03,'Rb+/Rb':-2.98,'Ba2+/Ba':-2.91,'Sr2+/Sr':-2.89,'Ca2+/Ca':-2.87,'Mn2+/Mn':-1.18,'Cr3+/Cr':-0.74,'Cd2+/Cd':-0.40,'Co2+/Co':-0.28,'Fe3+/Fe2+':0.77,'Pt2+/Pt':1.18
};
D.KINETICS = { hclNaOH:{ k:null, Ea:null, order:[1,1], source:'brak danych eksperymentalnych' } };
D.SOLUBILITY = {
  AgCl:{Ksp:1.77e-10,water20_gL:1.9e-4},CaCO3:{Ksp:3.3e-9,water20_gL:1.3e-2},
  NaCl:{Ksp:null,water20_gL:359},CaCl2:{Ksp:null,water20_gL:745},CuSO4:{Ksp:null,water20_gL:320}
};
D.QUANTUM_RULES = {
  subshells: [
    { name:'s', l:0, orbitals:1, capacity:2, shape:'sferyczny' },
    { name:'p', l:1, orbitals:3, capacity:6, shape:'dumbbell' },
    { name:'d', l:2, orbitals:5, capacity:10, shape:'clover' },
    { name:'f', l:3, orbitals:7, capacity:14, shape:'złożony' }
  ],
  madelungOrder: ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'],
  shellNames: {1:'K',2:'L',3:'M',4:'N',5:'O',6:'P',7:'Q'},
  shellCapacities: {1:2,2:8,3:18,4:32,5:50,6:72,7:98},
  rules: {
    pauli: 'Maksymalnie 2 elektrony na orbital, o przeciwnych spinach.',
    hund: 'W podpowłoce elektrony najpierw zajmują orbitale pojedynczo, z równoległymi spinami.',
    aufbau: 'Elektrony zapełniają orbitale od najniższej energii.',
    madelung: 'Kolejność wg (n+l), przy równych — mniejsze n pierwsze.'
  }
};
D.NUCLEAR_DATA = {
  constants: { R0:1.2, nuclearDensity:2.3e17, c:299792458, amu:931.494102, eV:1.602176634e-19, fm:1e-15 },
  betheWeizsacker: { aV:15.75, aS:17.8, aC:0.711, aA:23.7, aP:11.18 },
  decayModes: {
    'alpha':{ symbol:'Î±', emitted:'He-4', deltaZ:-2, deltaA:-4 },
    'beta-':{ symbol:'β⁻', emitted:'e⁻ + Î˝Ě„', deltaZ:1, deltaA:0 },
    'beta+':{ symbol:'β⁺', emitted:'e⁺ + Î˝', deltaZ:-1, deltaA:0 },
    'EC':{ symbol:'EC', emitted:'Î˝', deltaZ:-1, deltaA:0 },
    'gamma':{ symbol:'Îł', emitted:'Îł', deltaZ:0, deltaA:0 }
  }
};
C.deepFreeze(D.ELEMENTS_118); C.deepFreeze(D.ELEMENTS_54); C.deepFreeze(D.ATOMIC_MASS);
C.deepFreeze(D.ATOM_META); C.deepFreeze(D.ELEM); C.deepFreeze(D.PHYSICAL_PROPS);
C.deepFreeze(D.THERMOCHEM); C.deepFreeze(D.REDOX_POTENTIALS); C.deepFreeze(D.KINETICS);
C.deepFreeze(D.SOLUBILITY); C.deepFreeze(D.QUANTUM_RULES); C.deepFreeze(D.NUCLEAR_DATA);
})(window);

} catch (err) {
  try { console.warn('[CHE module 2]', err && err.message ? err.message : err); } catch(_){}
}