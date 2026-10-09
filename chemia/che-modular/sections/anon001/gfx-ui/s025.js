

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const finite = x => Number.isFinite(Number(x));
const defaults = { temperatureK:298.15, pressurePa:101325, volumeL:null, concentrationMolL:null,
  pH:null, timeS:0, catalyst:null, medium:'aqueous', ionicStrengthMolL:null,
  solvent:'H2O', phase:'aq', light:null };
function parse(raw){
  if(raw && typeof raw === 'object') return { ...raw };
  const out = {};
  String(raw||'').split(/[;,|]/).map(s=>s.trim()).filter(Boolean).forEach(part=>{
    const m = part.match(/^([^:=]+)[:=]\s*(.+)$/); if(!m) return;
    const k = m[1].trim().toLowerCase(), v = m[2].trim();
    if(/temp|temperatur/.test(k)){ const n=parseFloat(v); out.temperatureK=/°?c/i.test(v)?n+273.15:n; }
    else if(/pressure|ciśn|cisn/.test(k)){ const n=parseFloat(v); out.pressurePa=/atm/i.test(v)?n*101325:/bar/i.test(v)?n*1e5:n; }
    else if(/conc|stęż|stez/.test(k)) out.concentrationMolL = parseFloat(v);
    else if(/^ph$/.test(k)) out.pH = parseFloat(v);
    else if(/volume|obję|obje/.test(k)) out.volumeL = parseFloat(v);
    else if(/time|czas/.test(k)) out.timeS = parseFloat(v);
    else if(/catal|katal/.test(k)) out.catalyst = v;
    else out[k] = v;
  });
  return out;
}
function normalize(raw, base){
  raw = raw || {}; base = base || {};
  const p = parse(raw);
  const out = { ...defaults, ...base, ...p };
  ['temperatureK','pressurePa','volumeL','concentrationMolL','pH','timeS','ionicStrengthMolL']
    .forEach(k=>{ if(out[k] !== null && out[k] !== undefined) out[k] = finite(out[k]) ? Number(out[k]) : null; });
  if(out.temperatureK !== null && out.temperatureK <= 0) out.temperatureK = defaults.temperatureK;
  if(out.pressurePa !== null && out.pressurePa <= 0) out.pressurePa = defaults.pressurePa;
  if(out.volumeL !== null && out.volumeL < 0) out.volumeL = 0;
  if(out.concentrationMolL !== null && out.concentrationMolL < 0) out.concentrationMolL = 0;
  if(out.pH !== null) out.pH = Math.max(0, Math.min(14, out.pH));
  return out;
}
function validate(state){
  const s = normalize(state); const errors = [];
  if(!finite(s.temperatureK)) errors.push('temperatureK');
  if(!finite(s.pressurePa)) errors.push('pressurePa');
  return { ok:errors.length === 0, state:s, errors };
}
function applyToAcidSystem(state, acid){
  const s = normalize(state);
  return { ...acid, temperatureK:s.temperatureK, medium:s.medium, pH:s.pH };
}
C.STATE = { version:'2.17', defaults:{...defaults}, parse, normalize, validate, applyToAcidSystem };
})(window);

} catch (err) {
  try { console.warn('[CHE module 25]', err && err.message ? err.message : err); } catch(_){}
}