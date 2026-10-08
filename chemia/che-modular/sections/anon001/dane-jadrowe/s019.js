

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const AMU_MEV = 931.494102;  

function build(symbol, massNumber){
  const meta = C.DATA?.ATOM_META?.[symbol];
  if(!meta) return null;
  const A = Number(massNumber) || meta.massNumber;
  const Z = meta.Z;
  const N = A - Z;
  if(N < 0) return null;
  const r = radius(A);
  const b = bindingEnergy(Z, N);
  return {
    symbol,
    Z, A, N,
    protons: Z,
    neutrons: N,
    charge: Z,
    isotopeLabel: symbol + '-' + A,
    radiusFm: r,
    bindingEnergyMeV: b.B,
    bindingEnergyPerNucleon: b.B_per_A,
    massDefectAmu: massDefect(Z, N),
    stability: stability(Z, N),
    decay: decayMode(Z, N),
    density: C.DATA?.NUCLEAR_DATA?.constants?.nuclearDensity || 2.3e17
  };
}
function protons(symbol){ const m = C.DATA?.ATOM_META?.[symbol]; return m ? m.Z : null; }
function neutrons(symbol, massNumber){
  const m = C.DATA?.ATOM_META?.[symbol]; if(!m) return null;
  const A = Number(massNumber) || m.massNumber;
  return A - m.Z;
}
function massNumber(symbol, massNumber){
  const m = C.DATA?.ATOM_META?.[symbol]; if(!m) return null;
  return Number(massNumber) || m.massNumber;
}
function charge(symbol){ const m = C.DATA?.ATOM_META?.[symbol]; return m ? m.Z : null; }

function massDefect(Z, N){
   
  const mp = 1.007276466;
  const mn = 1.008664916;
  const mNucleus = (Z * mp) + (N * mn) - (bindingEnergy(Z, N).B / AMU_MEV);
  const mSum = Z * mp + N * mn;
  return mSum - mNucleus;
}

function bindingEnergy(Z, N){
  const A = Z + N;
  if(A <= 0) return { B:0, B_per_A:0 };
  const c = C.DATA?.NUCLEAR_DATA?.betheWeizsacker || { aV:15.75, aS:17.8, aC:0.711, aA:23.7, aP:11.18 };
  const aV=c.aV, aS=c.aS, aC=c.aC, aA=c.aA, aP=c.aP;
  const volume = aV * A;
  const surface = aS * Math.pow(A, 2/3);
  const coulomb = aC * Z * (Z - 1) / Math.pow(A, 1/3);
  const asymmetry = aA * Math.pow(A - 2*Z, 2) / A;
  let pairing = 0;
  if(Z % 2 === 0 && N % 2 === 0) pairing = +aP / Math.sqrt(A);
  else if(Z % 2 === 1 && N % 2 === 1) pairing = -aP / Math.sqrt(A);
  const B = volume - surface - coulomb - asymmetry + pairing;
  return { B, B_per_A: B / A };
}
function bindingEnergyPerNucleon(Z, N){ return bindingEnergy(Z, N).B_per_A; }

function radius(A){
  const R0 = C.DATA?.NUCLEAR_DATA?.constants?.R0 || 1.2;
  return R0 * Math.pow(A, 1/3);
}
function density(){ return C.DATA?.NUCLEAR_DATA?.constants?.nuclearDensity || 2.3e17; }

function stability(Z, N){
  const A = Z + N;
  if(A === 0) return { stable:false, reason:'brak nukleonów' };
   
  const parityStable = (Z % 2 === 0) && (N % 2 === 0);
   
  const predictedZ = A / (1.98 + 0.015 * Math.pow(A, 2/3));
  const onLine = Math.abs(Z - predictedZ) < 3;
   
  const baseIso = C.DATA?.ISOTOPES?.[symbolOfZ(Z)]?.find(x=> x.A === A);
  if(baseIso) return { stable:!!baseIso.stable, halfLife:baseIso.halfLife||null, decayMode:baseIso.decayMode||null, source:'ISOTOPES' };
  return {
    stable: parityStable && onLine,
    parity: (Z%2===0 && N%2===0) ? 'even-even' : (Z%2===1 && N%2===1) ? 'odd-odd' : 'mixed',
    onLine,
    source: 'heuristic'
  };
}

function decayMode(Z, N){
  const A = Z + N;
  const iso = C.DATA?.ISOTOPES?.[symbolOfZ(Z)]?.find(x=> x.A === A);
  if(iso && iso.decayMode) return iso.decayMode;
  if(Z > 83) return 'alpha';
  const predictedZ = A / (1.98 + 0.015 * Math.pow(A, 2/3));
  if(Z < predictedZ - 1) return 'beta-';
  if(Z > predictedZ + 1) return 'beta+';
  return null;
}

function symbolOfZ(Z){
  const el = (C.DATA?.ELEMENTS_118 || []).find(e=> e.z === Z);
  return el ? el.s : null;
}

function decayProduct(symbol, massNumber, mode){
  const meta = C.DATA?.ATOM_META?.[symbol]; if(!meta) return null;
  const A = Number(massNumber) || meta.massNumber;
  const Z = meta.Z;
  const modes = C.DATA?.NUCLEAR_DATA?.decayModes || {};
  const m = modes[mode];
  if(!m) return null;
  const newZ = Z + m.deltaZ;
  const newA = A + m.deltaA;
  const newSym = symbolOfZ(newZ);
  return {
    parent: symbol + '-' + A,
    mode,
    daughterSymbol: newSym,
    daughterA: newA,
    daughterLabel: newSym ? newSym + '-' + newA : '?',
    emitted: m.emitted,
    deltaZ: m.deltaZ, deltaA: m.deltaA
  };
}

C.NUCLEUS = { version:'2.17', build, protons, neutrons, massNumber, charge, massDefect,
  bindingEnergy, bindingEnergyPerNucleon, radius, density, stability, decayMode, decayProduct };
})(window);

} catch (err) {
  try { console.warn('[CHE module 19]', err && err.message ? err.message : err); } catch(_){}
}