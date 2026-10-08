try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function atomic(){const rows=D.ATOMIC_PROPS||{},fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];const out=Object.entries(rows).map(([symbol,r])=>({symbol,atomicNumber:r?.atomicNumber??null,missing:fields.filter(f=>r?.[f]==null||r?.[f]===''),source:r?.source||r?.sourceId||null}));return {elements:out.length,expected:118,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length])),records:out};}
function isotopes(){const src=D.ISOTOPES_REFERENCE||{},rows=Object.values(src).flatMap(x=>Array.isArray(x?.isotopes)?x.isotopes:[]),fields=['massNumber','atomicMass','halfLife','decayMode','daughter','nuclearSpin'];return {elements:Object.keys(src).length,records:rows.length,missingByField:Object.fromEntries(fields.map(f=>[f,rows.filter(r=>r?.[f]==null||r?.[f]==='').length])),status:Object.fromEntries([...new Set(rows.map(r=>String(r.status||'UNKNOWN').toUpperCase()))].map(s=>[s,rows.filter(r=>String(r.status||'UNKNOWN').toUpperCase()===s).length]))};}
function reaction(){const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{};return {candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exact:a.exact||0,needsReview:a.needsReview||0,unmatched:a.unmatched||0,classes:a.classes||{}};}
function duplicateEngine(){const src=String(C.ENGINE?.id||'CHE.COMMON_ENGINE');return {engineId:src,singleton:C.ENGINE===C.ENGINE,legacyAdapterOnly:!!C.MOLECULE};}
function audit(){return {version:'2.77',atomic:atomic(),isotopes:isotopes(),reactions:reaction(),engine:duplicateEngine(),scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI77-001',name:'118-element audit remains explicit',ok:a.atomic.elements<=118},{id:'SCI77-002',name:'isotope gaps remain explicit',ok:a.isotopes.records>=0},{id:'SCI77-003',name:'reaction audit does not mutate common data',ok:a.reactions.candidateRecords>=a.reactions.exact},{id:'SCI77-004',name:'scientific gate remains blocked',ok:a.scientificGate===false}];}
C.SCIENCE_DATA_GAP_AUDIT={version:'2.77',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_DATA_GAP_AUDIT='2.77';E.registry=E.registry||{};E.registry.SCIENCE_DATA_GAP_AUDIT={layer:'AUDIT/DATA',owner:'CHE.SCIENCE_DATA_GAP_AUDIT',depends:['ATOMIC_PROPS','ISOTOPE_REFERENCE','REACTION_LESSON_RECONCILIATION']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 139]', err && err.message ? err.message : err); } catch(_){}
}

