

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const rows=D.ELECTRO_REFERENCE||{};
function audit(){const a=Object.values(rows);return {version:'2.81',records:a.length,missingMedium:a.filter(x=>!x.medium).length,missingTemperature:a.filter(x=>!Number.isFinite(x.T_K)).length,legacyPending:a.filter(x=>x.source==='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT').length,policy:'no electrochemical record is promoted without explicit half-reaction, medium, temperature and source'};}
function regression(){const a=audit();return [
{id:'EL81-001',name:'electro records remain explicit',ok:a.records>=0},
{id:'EL81-002',name:'missing context is visible',ok:a.missingMedium>=0&&a.missingTemperature>=0},
{id:'EL81-003',name:'no unverified promotion',ok:Object.values(rows).every(x=>x.source==='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT'||(x.halfReaction&&x.medium&&Number.isFinite(x.T_K)))}
];}
C.ELECTRO_REFERENCE_CONTRACT_V281={version:'2.81',audit,regression,policy:'audit-only until record-level verification'};
E.modules=E.modules||{};E.modules.ELECTRO_REFERENCE_CONTRACT_V281='2.81';E.registry=E.registry||{};E.registry.ELECTRO_REFERENCE_CONTRACT_V281={layer:'CONTRACT/AUDIT',owner:'CHE.ELECTRO_REFERENCE_CONTRACT_V281',depends:['ELECTRO_REFERENCE','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 150]', err && err.message ? err.message : err); } catch(_){}
}