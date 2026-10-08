try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function atom(symbol,charge){const a=C.ATOM?.build?.(symbol,charge);if(!a)return C.FAIL('CHE.E.DATA_NOT_FOUND','Brak atomu',{symbol,charge});return ok({symbol,charge:Number(charge)||0,Z:a.Z,electronCount:a.electronCount,subshells:a.subshells.map(s=>({name:s.name,n:s.n,l:s.l,occupancy:s.count,capacity:s.orbitalCount*2,orbitals:s.distribution.map(d=>({index:d.orbitalIndex,spin:d.spin}))})),valenceSubshells:a.valenceSubshells.slice(),coreSubshells:a.coreSubshells.slice(),unpairedElectrons:a.unpairedCount,configFull:a.configFull,configShells:a.configShells,source:'CHE.ATOM'});}
function configuration(symbol,charge){const a=atom(symbol,charge);if(!a.ok)return a;return ok({symbol,charge:Number(charge)||0,configuration:a.value.configFull,subshells:a.value.subshells,valence:a.value.valenceSubshells,source:'CHE.ATOM'});}
function validate(m){const x=m||{},e=[];if(!x.symbol)e.push({code:'NO_SYMBOL'});if(!Number.isFinite(Number(x.electronCount)))e.push({code:'NO_ELECTRON_COUNT'});return ok({ok:!e.length,errors:e});}
C.ELECTRONIC_MODEL={version:'2.36',atom,configuration,validate};
})(window);

} catch (err) {
  try { console.warn('[CHE module 55]', err && err.message ? err.message : err); } catch(_){}
}

