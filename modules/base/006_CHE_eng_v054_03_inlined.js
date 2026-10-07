<script>
/* CHE.eng.v054.03 inlined */
/* N03 CHE engine core — build 054.03 — modules isolated (UI failures do not kill DATA/ATOM) */

try {

(function(g){
'use strict';
g.CHE = g.CHE || {};
g.CHE.ENGINE = {
  name: 'N03 Common Chemistry Engine',
  version: '2.42',
  dataVersion: '2.17',
  contractVersion: '2.42',
  schemaVersion: '2.42',
  level: 'full',
  modules: {},
  builtAt: new Date().toISOString()
};
g.CHE.OK = value => ({ ok: true, value });
g.CHE.ERROR = (code, message, context) => ({ code: String(code || 'CHE.E.UNKNOWN'), message: String(message || ''), context: context || {} });
g.CHE.FAIL = (code, message, context) => ({ ok: false, error: g.CHE.ERROR(code, message, context) });
g.CHE.deepFreeze = function deepFreeze(obj){
  if(obj === null || typeof obj !== 'object') return obj;
  if(Object.isFrozen(obj)) return obj;
  Object.getOwnPropertyNames(obj).forEach(name=>{
    const v = obj[name];
    if(v && typeof v === 'object' && !Object.isFrozen(v)) deepFreeze(v);
  });
  return Object.freeze(obj);
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 0]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v4.08 — chemistry-only execution roadmap + first data repair overlay.
 * Keeps locked legacy blocks immutable; downstream reads use the normalized view.
 */
(()=>{
  const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
  const getLegacy=()=>D.EDUCATION_MAX_V315?.blocks||{};
  const correctionMap={'Cr2O7^2+':'Cr2O7^2-'};
  const repair={version:'4.08',scope:'CHEMISTRY_ONLY',policy:'append-only correction view; legacy fingerprints and blocks remain unchanged',correctionMap,
    getBlock(id){const value=getLegacy()[id];if(!Array.isArray(value))return value??null;const normalized=value.map(x=>typeof x==='string'?(correctionMap[x]||x):x);return id==='coreIons'?[...new Set(normalized)]:normalized;},
    audit(){const raw=Array.isArray(getLegacy().coreIons)?getLegacy().coreIons:[];const corrected=this.getBlock('coreIons')||[];const duplicates=raw.filter((x,i)=>raw.indexOf(x)!==i);return {version:'4.08',block:'coreIons',legacyTokenPresent:raw.includes('Cr2O7^2+'),correctedTokenPresent:corrected.includes('Cr2O7^2-'),duplicateLegacyTokens:[...new Set(duplicates)],duplicateCount:duplicates.length,legacyTokenPreserved:raw.includes('Cr2O7^2+'),legacyMutation:false,correctedCount:corrected.length,status:raw.includes('Cr2O7^2+')&&corrected.includes('Cr2O7^2-')&&!corrected.includes('Cr2O7^2+')?'CORRECTION_VIEW_READY':'SOURCE_BLOCK_NOT_FOUND'};}};
  C.CHEMISTRY_REPAIR_V408=repair;
  C.EDUCATION_MAX_V315_REPAIRED={version:'4.08',sourceOfTruth:'CHE.DATA.EDUCATION_MAX_V315',getBlock:id=>repair.getBlock(id),correctionAudit:()=>repair.audit()};
  const stages=[
    {id:'R0',name:'Zabezpieczenie i inwentaryzacja',status:'DONE',result:'Backup v169 utworzony; plan bazowy przejrzany; zakres chemia-only.'},
    {id:'R1',name:'Integralność danych i pochodzenie naukowe',status:'IN_PROGRESS',result:'Zidentyfikowano błędny znak ładunku Cr2O7 oraz duplikaty OH−; adapter poprawionego widoku dodany, audyt źródeł stałych trwa.'},
    {id:'R2',name:'Parsery wzorów, ładunki, jednostki i wielkości',status:'OPEN',gate:'Jawne wymiary, konwencje i błędy wejściowe.'},
    {id:'R3',name:'Obliczenia stechiometryczne i roztwory',status:'OPEN',gate:'Mole, masy, reagent ograniczający, wydajność, stężenia, gazy, pH i Ksp.'},
    {id:'R4',name:'Równowaga, kinetyka i termochemia',status:'OPEN',gate:'Jednostki, warunki, granice modelu i zgodność równań.'},
    {id:'R5',name:'Redoks i elektrochemia',status:'OPEN',gate:'Bilans masy/ładunku/elektronów i warunki potencjałów.'},
    {id:'R6',name:'Nieorganiczna, organiczna i biochemia jako chemia',status:'OPEN',gate:'Reakcje, nomenklatura, produkty, warunki i stereochemia w deklarowanym zakresie.'},
    {id:'R7',name:'Doświadczenia, bezpieczeństwo i analiza danych',status:'OPEN',gate:'Problem–hipoteza–procedura–obserwacja–wniosek, ryzyko i odpady.'},
    {id:'R8',name:'Mapowanie wymagań LO do treści i zadań',status:'OPEN',gate:'Punkty podstawy, ćwiczenia, doświadczenia i jawne luki.'},
    {id:'R9',name:'Integracja UI, pełna regresja i wydanie',status:'OPEN',gate:'DOM/browser runtime, regresja, brak błędów krytycznych; bez fałszywego PASS.'}
  ];
  const plan={version:'4.08',scope:'CHEMISTRY_ONLY',sourcePlan:'plan_silnika_che_v169.md',stages,
    completionRule:'Release only when every stage gate is evidenced; never infer reference readiness or browser PASS from structural presence.',
    invariants:['preserve locked VERIFIED/DONE fingerprints','do not create a parallel chemistry engine or duplicate data source','keep biology as a separate subject out of scope; retain biomolecular chemistry only','record unresolved items explicitly','work in this HTML; create only safety backups when needed'],
    audit(){return {version:this.version,scope:this.scope,total:stages.length,done:stages.filter(x=>x.status==='DONE').length,inProgress:stages.filter(x=>x.status==='IN_PROGRESS').length,open:stages.filter(x=>x.status==='OPEN').length,next:stages.find(x=>x.status==='IN_PROGRESS')?.name,repair:repair.audit(),completion:'NOT_CLAIMED',browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};},
    render(){const host=document.getElementById('chem-roadmap-out');if(!host)return null;const a=this.audit();host.innerHTML=`<div class="lab-kv"><div><small>Etapy wykonane</small><b>${a.done}/${a.total}</b></div><div><small>W toku</small><b>${a.inProgress}</b></div><div><small>Otwarte</small><b>${a.open}</b></div></div><p class="lab-note">Następny blok: ${a.next}. Korekta coreIons: ${a.repair.status}; błędny token zachowany w legacy: ${a.repair.legacyTokenPreserved}; duplikaty usuwane w widoku: ${a.repair.duplicateLegacyTokens?.join(', ')||'brak'}. To nie jest deklaracja kompletności ani wynik testu przeglądarkowego.</p><div class="eu-code" style="max-height:480px">${stages.map(s=>`${s.id} · ${s.status} · ${s.name}${s.result?' — '+s.result:''}${s.gate?' — bramka: '+s.gate:''}`).join('\n')}</div>`;return a;}};
  C.CHEMISTRY_EXECUTION_ROADMAP_V408=plan;
  C.P0_REGRESSION_V408={roadmap:()=>plan.audit(),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>plan.render(),{once:true});else plan.render();
})();

} catch (err) {
  try { console.warn('[CHE module 1]', err && err.message ? err.message : err); } catch(_){}
}

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
  /* v0.36: szereg aktywności z lekcji N03 i Atlasu — jedno źródło */
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

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
D.MOL3D = {
  C2H5OH:{n:'C₂H₅OH',label:'etanol',atoms:[['C',-130,20,0],['C',0,-50,0],['O',130,20,0],['H',200,-30,0],['H',-130,130,0],['H',-210,-30,60],['H',-210,-30,-60],['H',0,-120,100],['H',0,-120,-100]],bonds:[[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]],acid:[3],note:'Alkohol: grupa –OH.'},
  C6H6:{n:'C₆H₆',label:'benzen',atoms:[['C',0,-140,0],['C',121,-70,0],['C',121,70,0],['C',0,140,0],['C',-121,70,0],['C',-121,-70,0],['H',0,-250,0],['H',217,-125,0],['H',217,125,0],['H',0,250,0],['H',-217,125,0],['H',-217,-125,0]],bonds:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]],acid:[],note:'Pierścień aromatyczny.'},
  C3H6O:{n:'C₃H₆O',label:'aceton',atoms:[['C',-125,70,0],['C',0,0,0],['O',0,-140,0],['C',125,70,0],['H',-125,180,0],['H',-210,25,70],['H',-210,25,-70],['H',125,180,0],['H',210,25,70],['H',210,25,-70]],bonds:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1],[3,8,1],[3,9,1]],acid:[],note:'Keton: grupa >C=O.'},
  HCl:{n:'HCl',label:'kwas chlorowodorowy',atoms:[['Cl',-60,0,0],['H',70,0,0]],bonds:[[0,1,1]],acid:[1],note:'Mocny. W wodzie H⁺ przechodzi na H₂O: powstają H₃O⁺ i Cl⁻.'},
  HF:{n:'HF',label:'kwas fluorowodorowy',atoms:[['F',-50,0,0],['H',50,0,0]],bonds:[[0,1,1]],acid:[1],note:'Słaby. Silne wiązanie H–F utrudnia oderwanie protonu.'},
  H2O:{n:'H₂O',label:'woda',atoms:[['O',0,0,0],['H',-55,43,0],['H',55,43,0]],bonds:[[0,1,1],[0,2,1]],acid:[1,2],note:'Amfiprotyczna.'},
  H3O:{n:'H₃O⁺',label:'jon hydroniowy',atoms:[['O',0,30,0],['H',95,-20,0],['H',-48,-20,82],['H',-48,-20,-82]],bonds:[[0,1,1],[0,2,1],[0,3,1]],acid:[],note:'Forma protonu w wodzie.'},
  H2SO4:{n:'H₂SO₄',label:'kwas siarkowy(VI)',atoms:[['S',0,0,0],['O',0,110,90],['O',0,110,-90],['O',-130,-70,0],['O',130,-70,0],['H',-200,-110,0],['H',200,-110,0]],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]],acid:[5,6],note:'Mocny w I stopniu, słaby w II.'},
  H3PO4:{n:'H₃PO₄',label:'kwas fosforowy(V)',atoms:[['P',0,0,0],['O',0,140,0],['O',-125,-55,60],['O',125,-55,60],['O',0,-55,-140],['H',-200,-100,90],['H',200,-100,90],['H',0,-110,-220]],bonds:[[0,1,2],[0,2,1],[0,3,1],[0,4,1],[2,5,1],[3,6,1],[4,7,1]],acid:[5,6,7],note:'Trójprotonowy, słaby.'},
  H2CO3:{n:'H₂CO₃',label:'kwas węglowy',atoms:[['C',0,0,0],['O',0,120,0],['O',-105,-65,0],['O',105,-65,0],['H',-190,-20,20],['H',190,-20,-20]],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1],[3,5,1]],acid:[4,5],note:'Słaby, nietrwały — ⇌ CO₂ + H₂O.'},
  CH3COOH:{n:'CH₃COOH',label:'kwas octowy',atoms:[['C',-140,0,0],['H',-190,90,20],['H',-190,-50,85],['H',-190,-50,-85],['C',0,0,0],['O',60,105,0],['O',70,-105,0],['H',160,-100,20]],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],acid:[7],note:'Tylko H z grupy –COOH jest kwaśny.'},
  HCOOH:{n:'HCOOH',label:'kwas mrówkowy',atoms:[['C',0,0,0],['H',-90,60,0],['O',100,70,0],['O',0,-120,0],['H',85,-170,0]],bonds:[[0,1,1],[0,2,2],[0,3,1],[3,4,1]],acid:[4],note:'Najprostszy kwas karboksylowy.'},
  NH3:{n:'NH₃',label:'amoniak',atoms:[['N',0,-20,0],['H',-60,35,30],['H',50,35,45],['H',10,35,-65]],bonds:[[0,1,1],[0,2,1],[0,3,1]],acid:[],note:'Zasada Brønsteda.'},
  CO2:{n:'CO₂',label:'dwutlenek węgla',atoms:[['O',-95,0,0],['C',0,0,0],['O',95,0,0]],bonds:[[0,1,2],[1,2,2]],acid:[],note:'Liniowy, kąt 180°.'},
  CH4:{n:'CH₄',label:'metan',atoms:[['C',0,0,0],['H',50,50,50],['H',-50,-50,50],['H',-50,50,-50],['H',50,-50,-50]],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],acid:[],note:'Tetraedryczna.'},
  H2S:{n:'H₂S',label:'siarkowodór',atoms:[['S',0,0,0],['H',-90,70,0],['H',90,70,0]],bonds:[[0,1,1],[0,2,1]],acid:[],note:'Cząsteczka kątowa; gazowy produkt ma właściwości toksyczne.'},
  SO2:{n:'SO₂',label:'dwutlenek siarki',atoms:[['S',0,0,0],['O',-105,75,0],['O',105,75,0]],bonds:[[0,1,2],[0,2,2]],acid:[],note:'Cząsteczka kątowa i polarna; tlenek siarki(IV).'},
  HCN:{n:'HCN',label:'cyjanowodór',atoms:[['H',-100,0,0],['C',0,0,0],['N',110,0,0]],bonds:[[0,1,1],[1,2,3]],acid:[0],note:'Cząsteczka liniowa H–C≡N; toksyczny gaz.'},
  H2O2:{n:'H₂O₂',label:'nadtlenek wodoru',atoms:[['O',-60,0,0],['O',60,0,0],['H',-100,75,0],['H',100,-75,0]],bonds:[[0,1,1],[0,2,1],[1,3,1]],acid:[],note:'Zawiera wiązanie nadtlenkowe O–O; geometria uproszczona do ilustracji 2D.'},
  CO:{n:'CO',label:'tlenek węgla(II)',atoms:[['C',-65,0,0],['O',65,0,0]],bonds:[[0,1,3]],acid:[],note:'Dwuatomowa cząsteczka z wiązaniem C≡O; gaz silnie toksyczny.'},
  SO3:{n:'SO₃',label:'tlenek siarki(VI)',atoms:[['S',0,0,0],['O',0,-115,0],['O',100,58,0],['O',-100,58,0]],bonds:[[0,1,2],[0,2,2],[0,3,2]],acid:[],note:'AX₃ — trygonalna płaska, kąt 120°; brak wolnych par na S (zapis wiązań uproszczony).'},
   N2O:{n:'N₂O',label:'tlenek azotu(I)',atoms:[['N',-112,0,0],['N',0,0,0],['O',108,0,0]],bonds:[[0,1,2],[1,2,2]],acid:[],note:'AX₂ — liniowa N=N=O, 180° (gaz rozweselający; tlenek obojętny).'},
   NO2:{n:'NO₂',label:'tlenek azotu(IV)',atoms:[['N',0,-20,0],['O',-100,22,0],['O',100,22,0]],bonds:[[0,1,2],[0,2,1]],acid:[],note:'AX₂E — kątowa, ok. 134°; niesparowany elektron na N — model zamkniętopowłokowy to przybliżenie (brunatny gaz).'}
};
D.MOL2D = {carboxyl:{atoms:[['C',150,145],['H',95,80],['H',65,150],['H',95,215],['C',270,145],['O',335,215],['O',335,75],['H',430,65]],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],groups:[{ids:[4,5,6,7],l:'–COOH',c:'#6b3fa0'}],acid:[7]}};
D.MOLECULES = {};
Object.entries(D.MOL3D).forEach(([id,m])=>{
  D.MOLECULES[id] = { id, name:m.n, label:m.label||m.n,
    atoms:m.atoms.map((a,i)=>({id:i,element:a[0],x:a[1],y:a[2],z:a[3],acid:!!(m.acid||[]).includes(i)})),
    bonds:m.bonds.map(b=>({a:b[0],b:b[1],order:b[2]||1})), note:m.note||'', geometry:null, angles:[], charge:0 };
});
D.MOLECULES.H2O.geometry='kątowa'; D.MOLECULES.H2O.angles=[{atoms:[1,0,2],deg:104.5}];
D.MOLECULES.CO2.geometry='liniowa'; D.MOLECULES.CO2.angles=[{atoms:[0,1,2],deg:180}];
D.MOLECULES.NH3.geometry='piramidalna'; D.MOLECULES.NH3.angles=[{atoms:[1,0,2],deg:107},{atoms:[1,0,3],deg:107},{atoms:[2,0,3],deg:107}];
D.MOLECULES.CH4.geometry='tetraedryczna'; D.MOLECULES.CH4.angles=[{atoms:[1,0,2],deg:109.5},{atoms:[1,0,3],deg:109.5},{atoms:[1,0,4],deg:109.5}];
C.deepFreeze(D.MOLECULES); C.deepFreeze(D.MOL3D); C.deepFreeze(D.MOL2D);
})(window);

} catch (err) {
  try { console.warn('[CHE module 3]', err && err.message ? err.message : err); } catch(_){}
}

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
