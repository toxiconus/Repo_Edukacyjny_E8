

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['nuclide','Z','A','mass','massUnit','massExcess','massExcessUnit','halfLife','halfLifeUnit','spinParity','decayModes','sourceId','status'];
const OPTIONAL=['decayIntensities','bindingEnergy','magneticMoment','quadrupoleMoment','discovery','notes'];
function normalize(r){if(!r||!r.nuclide)return {ok:false,error:'MISSING_NUCLIDE'};const x={...r};x.Z=Number.isInteger(x.Z)?x.Z:null;x.A=Number.isInteger(x.A)?x.A:null;x.status=x.status||'MISSING';return {ok:true,value:x};}
function audit(){const iso=C.DATA?.ISOTOPES||{};const rows=Object.entries(iso).map(([id,r])=>({id,...r}));const coverage=Object.fromEntries(REQUIRED.map(f=>[f,rows.filter(r=>r[f]!=null&&r[f]!=='').length]));return {version:'2.74',records:rows.length,coverage,required:REQUIRED,optional:OPTIONAL,sourceCoverage:rows.filter(r=>r.sourceId).length,verified:rows.filter(r=>r.status==='VERIFIED'||r.status==='REFERENCE').length};}
C.NUCLIDE_REFERENCE_CONTRACT={version:'2.74',required:REQUIRED,optional:OPTIONAL,normalize,audit,policy:'NUBASE/CIAAW-derived records remain explicitly sourced; absent fields stay absent'};
E.modules=E.modules||{};E.modules.NUCLIDE_REFERENCE_CONTRACT='2.74';E.registry=E.registry||{};E.registry.NUCLIDE_REFERENCE_CONTRACT={layer:'CONTRACT/DATA',owner:'CHE.NUCLIDE_REFERENCE_CONTRACT',depends:['ISOTOPE_SCIENCE_CONTRACT','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 126]', err && err.message ? err.message : err); } catch(_){}
}