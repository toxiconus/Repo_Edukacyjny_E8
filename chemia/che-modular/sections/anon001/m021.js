try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};

function build(symbol, charge){
  charge = Number(charge)||0;
  const meta = C.DATA?.ATOM_META?.[symbol];
  if(!meta) return null;
  const atomModel = C.ATOM.build(symbol, charge);
  if(!atomModel) return null;
  return {
    symbol,
    charge,
    Z: meta.Z,
    electrons: atomModel.electronCount,
    protons: meta.Z,
    neutrons: meta.neutrons,
    configFull: atomModel.configFull,
    configShort: C.ATOM.configShort(symbol, charge),
    configShells: atomModel.configShells,
    isCation: charge > 0,
    isAnion: charge < 0,
    isNeutral: charge === 0,
    label: charge === 0 ? 'atom obojętny' : charge > 0 ? `kation (+${charge})` : `anion (${charge})`
  };
}
function electronCount(symbol, charge){ return C.ATOM.build(symbol, charge)?.electronCount ?? null; }
function configFull(symbol, charge){ return C.ATOM.configFull(symbol, charge); }
function configShort(symbol, charge){ return C.ATOM.configShort(symbol, charge); }
function configShells(symbol, charge){ return C.ATOM.configShells(symbol, charge); }

function ionicRadius(symbol, charge){
  const props = C.DATA?.ATOMIC_PROPS?.[symbol]; if(!props?.ionicRadius) return null;
  const key = charge > 0 ? (charge + '+') : (Math.abs(charge) + '-');
  return props.ionicRadius[key] ?? null;
}
function isCation(symbol, charge){ return Number(charge) > 0; }
function isAnion(symbol, charge){ return Number(charge) < 0; }

function isIsoelectronicWith(ion1, ion2){
  if(!ion1 || !ion2) return false;
  const a = electronCount(ion1.symbol, ion1.charge);
  const b = electronCount(ion2.symbol, ion2.charge);
  return a !== null && a === b;
}

function nobleGasConfig(symbol, charge){
  const e = electronCount(symbol, charge);
  if(e === null) return false;
  const nobleZ = [2,10,18,36,54,86,118];
  return nobleZ.includes(e);
}

function formationEnergy(symbol, charge){
  const props = C.DATA?.ATOMIC_PROPS?.[symbol]; if(!props?.ionizationEnergies) return null;
  const targetCharge = Math.abs(Number(charge)||0);
  if(charge < 0){
     
    return props.electronAffinity != null ? -Math.abs(props.electronAffinity) : null;
  }
  let sum = 0;
  for(let i=0; i<targetCharge && i<props.ionizationEnergies.length; i++){
    sum += props.ionizationEnergies[i];
  }
  return sum;
}

C.ION = { version:'2.17', build, electronCount, configFull, configShort, configShells,
  ionicRadius, isCation, isAnion, isIsoelectronicWith, nobleGasConfig, formationEnergy };
})(window);

} catch (err) {
  try { console.warn('[CHE module 21]', err && err.message ? err.message : err); } catch(_){}
}

