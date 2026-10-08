try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const R_INF = 1.0973731568160e7;  

function atomic(symbol){
  const s = C.DATA?.ATOMIC_SPECTRA?.[symbol];
  if(!s) return { ok:false, reason:'brak danych widmowych dla ' + symbol };
  return { ok:true, symbol, ...s };
}
function series(symbol, seriesName){
  const a = atomic(symbol); if(!a.ok) return [];
  return a.lines.filter(l=> l.series === seriesName);
}
function lineAt(symbol, wavelength, tolerance){
  tolerance = tolerance || 5;
  const a = atomic(symbol); if(!a.ok) return null;
  return a.lines.find(l=> Math.abs(l.wavelength - wavelength) <= tolerance) || null;
}
function balmerLines(symbol){
  return series(symbol, 'Balmer');
}
function transitions(symbol){
  const a = atomic(symbol); if(!a.ok) return [];
  return a.lines.map(l=>({ n1:l.n1, n2:l.n2, wavelength:l.wavelength, energy:l.energy }));
}

function rydberg(n1, n2, Z){
  n1 = Number(n1); n2 = Number(n2); Z = Number(Z) || 1;
  if(!(n1 >= 1) || !(n2 > n1) || !(Z >= 1)) return null;
  const inv = R_INF * Z*Z * (1/(n1*n1) - 1/(n2*n2));
  const lambda = 1 / inv;               
  const lambdaNm = lambda * 1e9;        
  const c = 299792458;                  
  const h = 6.62607015e-34;             
  const energyJ = h * c / lambda;
  const energyEv = energyJ / 1.602176634e-19;
  return { wavelength:lambdaNm, energy:energyEv, unit:'nm / eV', n1, n2, Z };
}

function region(wavelengthNm){
  const w = Number(wavelengthNm);
  if(!Number.isFinite(w)) return null;
  if(w < 10) return 'gamma/X';
  if(w < 380) return 'UV';
  if(w < 750) return 'visible';
  if(w < 1e6) return 'IR';
  return 'microwave/radio';
}

C.SPECTRA = { version:'2.17', atomic, series, lineAt, balmerLines, rydberg, transitions, region, R_INF };
})(window);

} catch (err) {
  try { console.warn('[CHE module 23]', err && err.message ? err.message : err); } catch(_){}
}

