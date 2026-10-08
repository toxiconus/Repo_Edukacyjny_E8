

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const L_LETTER = ['s','p','d','f','g','h'];
const L_NUM = { s:0, p:1, d:2, f:3, g:4, h:5 };
const NOBLE_GAS_BEFORE = { 2:'He', 10:'Ne', 18:'Ar', 36:'Kr', 54:'Xe', 86:'Rn' };

function subshellName(n, l){ return String(n) + L_LETTER[l]; }

function distributeHund(count, orbitalCount){
  const out = [];
   
  const single = Math.min(count, orbitalCount);
  for(let i=0; i<single; i++) out.push({ orbitalIndex:i, spin:+0.5 });
   
  let remaining = count - single;
  let i = 0;
  while(remaining > 0){ out.push({ orbitalIndex:i, spin:-0.5 }); i++; remaining--; }
  return out;
}

function build(symbol, charge){
  charge = Number(charge)||0;
  const meta = C.DATA?.ATOM_META?.[symbol];
  if(!meta) return null;
  const cfg = C.MOLECULE.electronConfiguration(symbol, charge);
  const subshells = Object.entries(cfg).map(([name, count])=>{
    const n = Number(name[0]);
    const l = L_NUM[name.slice(-1)];
    const orbitalCount = 2*l + 1;
    const distribution = distributeHund(count, orbitalCount);
    return { name, n, l, orbitalCount, count, distribution };
  });
  const shells = shellsFromSubshells(subshells);
  const { valenceNames, coreNames } = classifySubshells(symbol, subshells);
  const zEff = effectiveZ(meta.Z, charge, shells);
  return {
    symbol,
    charge,
    Z: meta.Z,
    name: meta.name,
    mass: meta.mass,
    massNumber: meta.massNumber,
    neutrons: meta.neutrons,
    group: meta.group,
    period: meta.period,
    block: meta.block,
    classification: meta.classification,
    electronegativity: meta.electronegativity,
    subshells,
    shells,
    valenceSubshells: valenceNames,
    coreSubshells: coreNames,
    electronCount: meta.Z - charge,
    valenceElectronCount: valenceNames.reduce((s,n)=> s + cfg[n], 0),
    coreElectronCount: coreNames.reduce((s,n)=> s + cfg[n], 0),
    unpairedCount: subshells.reduce((s,ss)=> s + Math.max(0, Math.min(ss.count, 2*ss.orbitalCount-ss.count)), 0),
    effectiveZ: zEff,
    configFull: subshells.map(ss=> ss.name + ss.count).join(' '),
    configShells: shells.map(sh=> `${C.DATA.QUANTUM_RULES.shellNames[sh.n]}:${sh.count}`).join(' '),
    quantumRules: C.DATA.QUANTUM_RULES
  };
}

function shellsFromSubshells(subshells){
  const map = {};
  subshells.forEach(ss=>{
    if(!map[ss.n]) map[ss.n] = { n:ss.n, count:0, subshells:[] };
    map[ss.n].count += ss.count;
    map[ss.n].subshells.push(ss.name);
  });
  return Object.keys(map).sort((a,b)=>Number(a)-Number(b)).map(k=>map[k]);
}

function classifySubshells(symbol, subshells){
  const meta = C.DATA?.ATOM_META?.[symbol];
  if(!meta) return { valenceNames:[], coreNames:subshells.map(s=>s.name) };
  const block = meta.block;
  const names = subshells.map(s=>s.name);
  const maxN = Math.max(...subshells.map(s=>s.n));
  const valence = new Set();
  if(block === 's' || block === 'p'){
    subshells.forEach(ss=>{ if(ss.n === maxN) valence.add(ss.name); });
  } else if(block === 'd'){
    subshells.forEach(ss=>{
      if(ss.l === 0 && ss.n === maxN) valence.add(ss.name);
      if(ss.l === 2 && ss.n === maxN - 1) valence.add(ss.name);
    });
  } else if(block === 'f'){
    subshells.forEach(ss=>{
      if(ss.l === 0 && ss.n === maxN) valence.add(ss.name);
      if(ss.l === 3 && ss.n === maxN - 2) valence.add(ss.name);
      if(ss.l === 2 && ss.n === maxN - 1 && (ss.name in meta.subshells ? meta.subshells[ss.name] > 0 : false)) {
         
      }
    });
  } else {
    subshells.forEach(ss=>{ if(ss.n === maxN) valence.add(ss.name); });
  }
   
  if(!valence.size && subshells.length){
    const top = subshells.reduce((a,b)=> a.n > b.n ? a : b);
    valence.add(top.name);
  }
  const coreNames = names.filter(n=> !valence.has(n));
  return { valenceNames: names.filter(n=> valence.has(n)), coreNames };
}

function effectiveZ(Z, charge, shells){
  if(charge > 0) Z = Z - charge;
  if(!shells.length) return Z;
  let shield = 0;
  shells.forEach(sh=>{
    if(sh.n < shells[shells.length-1].n) shield += sh.count * 0.85;
    else shield += Math.max(0, sh.count - 1) * 0.35;
  });
  return Math.max(0, Z - shield);
}

function nucleus(symbol, massNumber){
  const meta = C.DATA?.ATOM_META?.[symbol];
  if(!meta) return null;
  const A = Number(massNumber) || meta.massNumber;
  return {
    symbol,
    Z: meta.Z,
    A,
    protons: meta.Z,
    neutrons: A - meta.Z,
    charge: meta.Z,
    massNumber: A,
    isotopeLabel: symbol + '-' + A
  };
}
function shells(symbol, charge){ const a = build(symbol, charge); return a ? a.shells : null; }
function subshells(symbol, charge){ const a = build(symbol, charge); return a ? a.subshells : null; }

function electrons(symbol, charge){
  const a = build(symbol, charge);
  if(!a) return [];
  const out = [];
  let idx = 0;
  a.subshells.forEach(ss=>{
    const isValence = a.valenceSubshells.includes(ss.name);
    ss.distribution.forEach(d=>{
      const ml = d.orbitalIndex - (ss.l);
      out.push({
        index: idx++,
        n: ss.n,
        l: ss.l,
        ml,
        ms: d.spin,
        subshell: ss.name,
        orbitalIndex: d.orbitalIndex,
        isValence,
        isCore: !isValence,
        isUnpaired: d.spin > 0 && ss.count <= ss.orbitalCount,
        isBonding: null,
        isLonePair: null
      });
    });
  });
  return out;
}

function classify(symbol, charge){
  const a = build(symbol, charge);
  if(!a) return null;
  return { valence: a.valenceSubshells.slice(), core: a.coreSubshells.slice() };
}
function valenceSubshells(symbol){ const a = build(symbol); return a ? a.valenceSubshells.slice() : []; }
function coreSubshells(symbol){ const a = build(symbol); return a ? a.coreSubshells.slice() : []; }
function orbitals(symbol){
  const a = build(symbol);
  if(!a) return [];
  return a.subshells.map(ss=>({ name: ss.name, n: ss.n, l: ss.l, orbitalCount: ss.orbitalCount, capacity: ss.orbitalCount*2, occupancy: ss.count }));
}
function configFull(symbol, charge){ const a = build(symbol, charge); return a ? a.configFull : ''; }

function configShort(symbol, charge){
  charge = Number(charge)||0;
  const a = build(symbol, charge);
  if(!a) return '';
  if(charge !== 0){
    return configFull(symbol, charge);
  }
   
  const z = a.Z;
  let ngZ = 0, ngSym = null;
  Object.keys(NOBLE_GAS_BEFORE).forEach(k=>{ const kz = Number(k); if(kz < z && kz > ngZ){ ngZ = kz; ngSym = NOBLE_GAS_BEFORE[k]; } });
  if(!ngSym) return a.configFull;
   
  const ngCfg = C.DATA.ATOM_META[ngSym].subshells;
  const parts = [];
  Object.entries(C.MOLECULE.electronConfiguration(symbol, 0)).forEach(([name, n])=>{
    if(ngCfg[name] === n) return;
    parts.push(name + (n - (ngCfg[name]||0)));
  });
  return '[' + ngSym + '] ' + parts.join(' ');
}
function configShells(symbol, charge){ const a = build(symbol, charge); return a ? a.configShells : ''; }
function unpairedElectrons(symbol, charge){ const a = build(symbol, charge); return a ? a.unpairedCount : 0; }

function hundDistribution(symbol, charge){
  const a = build(symbol, charge);
  if(!a) return null;
  return a.subshells.map(ss=>({
    subshell: ss.name,
    count: ss.count,
    orbitalCount: ss.orbitalCount,
    unpaired: ss.distribution.filter(e=> e.spin > 0).length
  }));
}

function bondingElectrons(moleculeId, atomId){
  const m = C.MOLECULE?.get?.(moleculeId);
  if(!m) return { ok:false, reason:'brak molekuły', moleculeId };
  const a = m.atoms.find(x=> x.id === Number(atomId));
  if(!a) return { ok:false, reason:'brak atomu o id ' + atomId, moleculeId };
  const bondOrder = m.bondOrderSum[a.id] || 0;
  const electronsAll = electrons(a.element, 0);
  const valence = electronsAll.filter(e=> e.isValence);
  const bondingCount = Math.min(bondOrder, valence.length);
  const loneCount = Math.max(0, valence.length - bondingCount);
  return {
    ok:true,
    moleculeId,
    atomId: a.id,
    element: a.element,
    valenceElectronCount: valence.length,
    bondingCount,
    lonePairElectronCount: loneCount,
    lonePairCount: loneCount / 2,
    bondOrderSum: bondOrder,
    bondingElectrons: valence.slice(0, bondingCount).map(e=> ({...e, isBonding:true, isLonePair:false})),
    lonePairElectrons: valence.slice(bondingCount).map(e=> ({...e, isBonding:false, isLonePair:true}))
  };
}
function lonePairElectrons(moleculeId, atomId){
  const b = bondingElectrons(moleculeId, atomId);
  return b.ok ? { ok:true, pairs:b.lonePairCount, electrons:b.lonePairElectrons } : b;
}
function valenceSummary(moleculeId, atomId){
  const b = bondingElectrons(moleculeId, atomId);
  if(!b.ok) return b;
  return { ok:true, moleculeId, atomId:b.atomId, element:b.element,
    bonding:b.bondingCount, lonePairs:b.lonePairCount, total:b.valenceElectronCount };
}

function hybridization(moleculeId, atomId){
  const m = C.MOLECULE?.get?.(moleculeId);
  if(!m) return null;
  const d = C.MOLECULE.electronDomains(m, Number(atomId));
  if(!d) return null;
  return ({2:'sp',3:'sp²',4:'sp³',5:'sp³d',6:'sp³d²'})[d.domains] || 'nieokreślona';
}

function forPrimary(symbol){
  const a = build(symbol);
  if(!a) return null;
  return {
    symbol: a.symbol,
    name: a.name,
    Z: a.Z,
    protons: a.Z,
    neutrons: a.neutrons,
    shells: a.shells.map(sh=>({ shell: C.DATA.QUANTUM_RULES.shellNames[sh.n], n: sh.n, electrons: sh.count })),
    valence: a.valenceElectronCount,
    summary: `Atom ${a.name} ma ${a.Z} protonów, ${a.neutrons} neutronów i ${a.electronCount} elektronów. Elektrony walencyjne: ${a.valenceElectronCount}.`
  };
}
 
function forSecondary(symbol, charge){
  const a = build(symbol, charge);
  if(!a) return null;
  return {
    symbol: a.symbol, name: a.name, Z: a.Z, charge: a.charge,
    configFull: a.configFull,
    configShort: configShort(symbol, charge || 0),
    configShells: a.configShells,
    valence: a.valenceElectronCount,
    ionLabel: a.charge > 0 ? `kation (+${a.charge})` : a.charge < 0 ? `anion (${a.charge})` : 'atom obojętny'
  };
}
 
function forHighSchool(symbol){
  const a = build(symbol);
  if(!a) return null;
  return {
    symbol: a.symbol, name: a.name, Z: a.Z,
    configFull: a.configFull, configShort: configShort(symbol, 0),
    orbitals: orbitals(symbol),
    electrons: electrons(symbol),
    valenceSubshells: a.valenceSubshells,
    coreSubshells: a.coreSubshells,
    unpaired: a.unpairedCount,
    hundDistribution: hundDistribution(symbol),
    atomicProps: C.DATA.ATOMIC_PROPS?.[symbol] || null
  };
}
 
function forUniversity(symbol){
  const a = build(symbol);
  if(!a) return null;
  return {
    symbol: a.symbol, name: a.name, Z: a.Z,
    nucleus: nucleus(symbol),
    configFull: a.configFull,
    orbitals: orbitals(symbol),
    electrons: electrons(symbol),
    effectiveZ: a.effectiveZ,
    termSymbol: termSymbol(symbol),
    atomicProps: C.DATA.ATOMIC_PROPS?.[symbol] || null,
    isotopes: C.ISOTOPE?.list?.(symbol) || []
  };
}

function termSymbol(symbol){
  const a = build(symbol);
  if(!a) return null;
  if(a.unpairedCount === 0) return '¹S₀';
  const ss = a.subshells[a.subshells.length - 1];
  if(!ss) return null;
  const S = a.unpairedCount / 2;
  const mult = Math.round(2*S + 1);
  const L = ss.l;
  const letter = ['S','P','D','F','G','H'][L];
   
  const half = Math.ceil(ss.orbitalCount / 2);
  const J = ss.count <= half ? Math.abs(L - S) : L + S;
  return { term: `${mult}${letter}${J}`, S, L, J, multiplicity:mult, letter };
}

C.ATOM = {
  version: '2.17',
  build, nucleus, shells, subshells, electrons, classify,
  valenceSubshells, coreSubshells, orbitals, configFull, configShort, configShells,
  unpairedElectrons, hundDistribution,
  bondingElectrons, lonePairElectrons, valenceSummary, hybridization,
  forPrimary, forSecondary, forHighSchool, forUniversity,
  termSymbol,
  distributeHund, classifySubshells, effectiveZ
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 18]', err && err.message ? err.message : err); } catch(_){}
}