try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const TYPES={Ka:{definition:'acid dissociation equilibrium constant',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},Kb:{definition:'base dissociation equilibrium constant',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},pKa:{definition:'-log10(Ka)',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},Ksp:{definition:'solubility product equilibrium constant',requires:['reaction','temperatureK','medium','ionicStrength','value','sourceId']},solubility:{definition:'solubility quantity; must state basis and units',requires:['substance','temperatureK','medium','value','unit','sourceId']}};
function audit(){const rows=Object.values(C.DATA?.REFERENCE_EQUILIBRIA_V273||{});return {version:'2.74',types:TYPES,records:rows.length,sourceBacked:rows.filter(r=>r.sourceId&&r.sourceId!=='COMPUTED_FROM_VERIFIED_PKA'&&r.sourceId!=='COMPUTED_FROM_VERIFIED_KB').length,computed:rows.filter(r=>r.status==='COMPUTED').length};}
function validate(r){const spec=TYPES[r?.type];if(!spec)return {ok:false,error:'UNKNOWN_EQUILIBRIUM_TYPE'};const missing=spec.requires.filter(k=>r[k]==null||r[k]==='');return {ok:missing.length===0,missing,type:r.type};}
C.EQUILIBRIA_SEMANTICS={version:'2.74',types:TYPES,audit,validate};E.modules=E.modules||{};E.modules.EQUILIBRIA_SEMANTICS='2.74';E.registry=E.registry||{};E.registry.EQUILIBRIA_SEMANTICS={layer:'CONTRACT/AUDIT',owner:'CHE.EQUILIBRIA_SEMANTICS',depends:['EQUILIBRIA_REFERENCE','SOURCE_REGISTRY_EXTENDED']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 127]', err && err.message ? err.message : err); } catch(_){}
}

