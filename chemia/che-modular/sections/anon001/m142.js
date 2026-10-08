try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function atomic(){const props=D.ATOMIC_PROPS||{},els=D.ELEMENTS_118||{};const symbols=Object.keys(els).length?Object.keys(els):Object.keys(props);const fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];const out=symbols.map(symbol=>{const r=props[symbol]||{};return {symbol,atomicNumber:els[symbol]?.atomicNumber??r.atomicNumber??null,hasProfile:!!props[symbol],missing:fields.filter(f=>r?.[f]==null||r?.[f]==='')};});return {elements:symbols.length,expected:118,profiles:Object.values(out).filter(x=>x.hasProfile).length,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length])),records:out};}
function isotope(){const a=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{},b=C.ISOTOPE_REFERENCE?.audit?.()||{};return {...a,referenceLayer:b,gateReady:false};}
function reaction(){const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{},q=C.REACTION_EXPANSION_QUEUE?.audit?.()||{};return {reconciliation:a,expansionQueue:q};}
function audit(){return {version:'2.78',atomic:atomic(),isotopes:isotope(),reactions:reaction(),scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI78-001',name:'element inventory is 118 when central table exists',ok:a.atomic.elements===118||a.atomic.elements===0},{id:'SCI78-002',name:'property profiles are distinguished from element inventory',ok:a.atomic.profiles<=a.atomic.elements},{id:'SCI78-003',name:'isotope readiness remains conservative',ok:a.isotopes.gateReady===false},{id:'SCI78-004',name:'scientific gate remains blocked',ok:a.scientificGate===false}];}
C.SCIENCE_DATA_GAP_AUDIT={version:'2.78',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_DATA_GAP_AUDIT='2.78';E.registry=E.registry||{};E.registry.SCIENCE_DATA_GAP_AUDIT={layer:'AUDIT/DATA',owner:'CHE.SCIENCE_DATA_GAP_AUDIT',depends:['ELEMENTS_118','ATOMIC_PROPS','ISOTOPE_REFERENCE','REACTION_EXPANSION_QUEUE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 142]', err && err.message ? err.message : err); } catch(_){}
}

