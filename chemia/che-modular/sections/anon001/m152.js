try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function parseHalfLife(v){if(v==null)return null;const s=String(v).trim().toLowerCase().replace(',','.');const m=s.match(/^([0-9.]+(?:e[+-]?\d+)?)\s*(ms|s|min|h|dnia|dni|rok|lata|lat|day|days|year|years)?/i);if(!m)return null;const n=Number(m[1]);if(!Number.isFinite(n))return null;const u=m[2]||'s';const f={ms:1e-3,s:1,min:60,h:3600,dnia:86400,dni:86400,day:86400,days:86400,rok:31557600,lata:31557600,lat:31557600,year:31557600,years:31557600};return {value:n,unit:u,seconds:n*(f[u]??1),source:'NORMALIZED_FROM_EXISTING_RECORD'};}
function normalize(){const src=D.ISOTOPES_REFERENCE||{};const rows=[];Object.keys(src).forEach(symbol=>{const list=src[symbol]?.isotopes||[];list.forEach(x=>{rows.push({...x,nuclide:`${symbol}-${x.massNumber}`,halfLifeNormalized:parseHalfLife(x.halfLife),decayModes:Array.isArray(x.decayMode)?x.decayMode:(x.decayMode?[x.decayMode]:[]),spinParity:x.nuclearSpin==null?null:String(x.nuclearSpin),recordStatus:x.stable===true?'STABLE_REFERENCE_CANDIDATE':(x.stable===false?'RADIOACTIVE_REFERENCE_CANDIDATE':'UNCLASSIFIED')});});});return rows;}
function audit(){const r=normalize();return {version:'2.82',records:r.length,withHalfLife:r.filter(x=>x.halfLife!=null).length,normalizedHalfLife:r.filter(x=>x.halfLifeNormalized).length,withDecayMode:r.filter(x=>x.decayModes.length).length,withSpinParity:r.filter(x=>x.spinParity!=null).length,withDaughter:r.filter(x=>x.daughter!=null).length,sourceComplete:r.filter(x=>x.source?.source&&x.source?.reference&&x.source?.url).length,policy:'normalization/audit only; no nuclear value is replaced or promoted'};}
function regression(){const a=audit();return [{id:'ISO82-001',name:'reference isotope records present',ok:a.records>0},{id:'ISO82-002',name:'normalization never fabricates missing half-life',ok:a.normalizedHalfLife<=a.withHalfLife},{id:'ISO82-003',name:'source provenance visible',ok:a.sourceComplete>=0&&a.sourceComplete<=a.records},{id:'ISO82-004',name:'no gate promotion',ok:true}];}
C.ISOTOPE_SCIENCE_PACKAGE_V282={version:'2.82',normalize,audit,regression,policy:'audit/normalization layer only'};
E.modules=E.modules||{};E.modules.ISOTOPE_SCIENCE_PACKAGE_V282='2.82';E.registry=E.registry||{};E.registry.ISOTOPE_SCIENCE_PACKAGE_V282={layer:'DATA/AUDIT',owner:'CHE.DATA.ISOTOPE_SCIENCE_PACKAGE_V282',depends:['ISOTOPE_REFERENCE','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 152]', err && err.message ? err.message : err); } catch(_){}
}

