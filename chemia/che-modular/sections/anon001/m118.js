try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const extra={
 PUBCHEM:{id:'PUBCHEM',name:'PubChem',url:'https://pubchem.ncbi.nlm.nih.gov/',scope:'chemical identifiers, experimental properties and cited property records'},
 IUPAC_GOLDBOOK:{id:'IUPAC_GOLDBOOK',name:'IUPAC Gold Book',url:'https://goldbook.iupac.org/',scope:'chemical terminology and definitions'}
};
function audit(){const base=C.SOURCE_REGISTRY?.audit?.()||{};return {...base,extended:Object.values(extra),extendedCount:Object.keys(extra).length};}
C.SOURCE_REGISTRY_EXTENDED={version:'2.73',sources:extra,audit};
E.modules=E.modules||{};E.modules.SOURCE_REGISTRY_EXTENDED='2.73';E.registry=E.registry||{};E.registry.SOURCE_REGISTRY_EXTENDED={layer:'PROVENANCE',owner:'CHE.SOURCE_REGISTRY_EXTENDED',depends:['SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 118]', err && err.message ? err.message : err); } catch(_){}
}

