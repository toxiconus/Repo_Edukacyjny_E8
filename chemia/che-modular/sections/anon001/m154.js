try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function audit(){const modules=E.modules||{}, registry=E.registry||{};const engineVersions=[...new Set(Object.values(modules).map(String))];const central=['ELEMENTS_118','ATOMIC_PROPS','ISOTOPES','ISOTOPES_REFERENCE','REACTIONS','REACTION_DATA','MOLECULES','SUBSTANCES'].map(k=>({key:k,present:D[k]!=null,kind:Array.isArray(D[k])?'array':typeof D[k]}));const moleculeAdapter=!!C.MOLECULE;const structure=!!C.STRUCTURE;return {version:'2.82',engineVersion:E.version,dataVersion:E.dataVersion,contractVersion:E.contractVersion,schemaVersion:E.schemaVersion,moduleVersionCount:engineVersions.length,central,moleculeAdapter,canonicalStructure:structure,registryEntries:Object.keys(registry).length,policy:'static/runtime audit; UI/renderers must consume CHE.DATA and CHE.STRUCTURE rather than own chemistry facts'};}
function regression(){const a=audit();return [{id:'ENG82-001',name:'central chemistry data exists',ok:a.central.filter(x=>x.present).length>=6},{id:'ENG82-002',name:'canonical structure engine exists',ok:a.canonicalStructure===true},{id:'ENG82-003',name:'molecule adapter exists',ok:a.moleculeAdapter===true},{id:'ENG82-004',name:'registry is populated',ok:a.registryEntries>0}];}
C.COMMON_DATA_AUDIT_V282={version:'2.82',audit,regression};E.modules=E.modules||{};E.modules.COMMON_DATA_AUDIT_V282='2.82';E.registry=E.registry||{};E.registry.COMMON_DATA_AUDIT_V282={layer:'AUDIT/ARCHITECTURE',owner:'CHE.ENGINE.COMMON_DATA_AUDIT_V282',depends:['ENGINE','DATA','STRUCTURE','MOLECULE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 154]', err && err.message ? err.message : err); } catch(_){}
}

