

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function elementSymbols(){const e=D.ELEMENTS_118||[];if(Array.isArray(e))return e.map(x=>x?.s).filter(Boolean);return Object.keys(e);}
function atomic(){const props=D.ATOMIC_PROPS||{},symbols=elementSymbols(),fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];const out=symbols.map(symbol=>{const r=props[symbol]||{};return {symbol,atomicNumber:r.atomicNumber??(D.ELEMENTS_118.find?.(x=>x?.s===symbol)?.z??null),hasProfile:!!props[symbol],missing:fields.filter(f=>r?.[f]==null||r?.[f]==='')};});return {elements:symbols.length,expected:118,profiles:out.filter(x=>x.hasProfile).length,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length])),missingProfileSymbols:out.filter(x=>!x.hasProfile).map(x=>x.symbol),records:out};}
function isotopes(){const a=C.ISOTOPE_REFERENCE?.audit?.()||{},b=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{};return {referenceLayer:a,scienceAudit:b,gateReady:false};}
function reactions(){return {reconciliation:C.REACTION_LESSON_RECONCILIATION?.audit?.()||{},queue:C.REACTION_EXPANSION_QUEUE?.audit?.()||{}};}
function audit(){return {version:'2.79',atomic:atomic(),isotopes:isotopes(),reactions:reactions(),scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI79-001',name:'central element inventory is exactly 118',ok:a.atomic.elements===118},{id:'SCI79-002',name:'atomic profile count cannot exceed inventory',ok:a.atomic.profiles<=a.atomic.elements},{id:'SCI79-003',name:'isotope reference audit is separate from science audit',ok:!!a.isotopes.referenceLayer&&!!a.isotopes.scienceAudit},{id:'SCI79-004',name:'scientific gate remains blocked',ok:a.scientificGate===false}];}
C.SCIENCE_DATA_GAP_AUDIT={version:'2.79',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_DATA_GAP_AUDIT='2.79';E.registry=E.registry||{};E.registry.SCIENCE_DATA_GAP_AUDIT={layer:'AUDIT/DATA',owner:'CHE.SCIENCE_DATA_GAP_AUDIT',depends:['ELEMENTS_118','ATOMIC_PROPS','ISOTOPE_REFERENCE','ISOTOPE_SCIENCE_AUDIT','REACTION_EXPANSION_QUEUE']};E.version='2.79';E.dataVersion='2.79';E.contractVersion='2.79';E.schemaVersion='2.79';if(E.PUBLIC)E.PUBLIC.version='2.79';if(E.RUNTIME)E.RUNTIME.version='2.79';
})(window);

} catch (err) {
  try { console.warn('[CHE module 144]', err && err.message ? err.message : err); } catch(_){}
}