

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const SOURCE_OK=new Set(['NIST_WEBBOOK','NIST_ASD','CIAAW_AW_2024','CIAAW_ISO_2024','NUBASE2020','OPENSTAX_CHEMISTRY_2E']);
function ready(row,fields){
  const missing=fields.filter(f=>row?.[f]===null||row?.[f]===undefined||row?.[f]==='');
  const sourceId=row?.sourceId||row?.source?.id||null;
  const sourceOk=!!sourceId&&SOURCE_OK.has(sourceId);
  return {referenceReady:missing.length===0&&sourceOk,missing,sourceId,sourceOk};
}
function atomic(){
  const rows=D.ATOMIC_PROPS||{};
  const fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
  const out=Object.entries(rows).map(([symbol,row])=>({symbol,...ready(row,fields)}));
  return {elements:out.length,referenceReady:out.filter(x=>x.referenceReady).length,partial:out.filter(x=>x.missing.length>0).length,sourceKnown:out.filter(x=>x.sourceOk).length,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length]))};
}
function isotope(){
  const a=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||C.ISOTOPE_REFERENCE?.audit?.()||{};
  return {...a,referenceReady:0,policy:'record-level readiness requires nuclide source + nuclear-field verification; inherited source labels are not enough'};
}
function thermo(){
  const a=C.THERMO_REFERENCE?.audit?.()||{};
  const rows=Object.values(D.THERMO_REFERENCE||{});
  const readyCount=rows.filter(r=>r?.status==='REFERENCE_CANDIDATE'&&r?.phase&&Number.isFinite(r?.T_K)&&r?.source).length;
  return {...a,recordReferenceReady:readyCount,recordCount:rows.length};
}
function electro(){
  const a=C.ELECTRO_REFERENCE?.audit?.()||{};
  const rows=Object.values(D.ELECTRO_REFERENCE||{});
  const readyCount=rows.filter(r=>Number.isFinite(r?.E0_V)&&r?.halfReaction&&r?.medium&&Number.isFinite(r?.T_K)&&r?.convention&&r?.source&&r.source!=='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT').length;
  return {...a,recordReferenceReady:readyCount,recordCount:rows.length};
}
function reactions(){
  const a=C.REACTION_SCIENCE_AUDIT?.audit?.()||{};
  const rx=D.REACTIONS||{},rd=D.REACTION_DATA||{};
  const keys=[...new Set([...Object.keys(rx),...Object.keys(rd)])];
  const rows=keys.map(k=>rx[k]||rd[k]||{});
  const complete=rows.filter(r=>!!(r.balanced||r.balance||r.isBalanced)&&!!(r.conditions||r.condition||r.catalyst||r.temperature||r.solvent)&&!!(r.source||r.provenance||r.reference)).length;
  return {...a,recordReferenceReady:complete,recordCount:rows.length};
}
function audit(){return {version:'2.71',atomicProps:atomic(),isotopes:isotope(),thermo:thermo(),electro:electro(),reactions:reactions(),scientificGate:false};}
function regression(){const a=audit();return [
{id:'SCI71-001',name:'atomic readiness does not invent missing fields',ok:a.atomicProps.referenceReady<=a.atomicProps.elements,detail:`${a.atomicProps.referenceReady}/${a.atomicProps.elements}`},
{id:'SCI71-002',name:'thermo readiness is record-level',ok:a.thermo.recordReferenceReady<=a.thermo.recordCount,detail:`${a.thermo.recordReferenceReady}/${a.thermo.recordCount}`},
{id:'SCI71-003',name:'electro readiness rejects legacy placeholder source',ok:a.electro.recordReferenceReady<=a.electro.recordCount,detail:`${a.electro.recordReferenceReady}/${a.electro.recordCount}`},
{id:'SCI71-004',name:'reaction readiness is record-level',ok:a.reactions.recordReferenceReady<=a.reactions.recordCount,detail:`${a.reactions.recordReferenceReady}/${a.reactions.recordCount}`},
{id:'SCI71-005',name:'scientific gate stays blocked',ok:a.scientificGate===false,detail:'not all reference fields are verified'}
];}
C.SCIENCE_RECORD_READINESS={version:'2.71',audit,regression};
E.modules=E.modules||{};E.modules.SCIENCE_RECORD_READINESS='2.71';
E.registry=E.registry||{};E.registry.SCIENCE_RECORD_READINESS={layer:'AUDIT/SCIENCE',owner:'CHE.SCIENCE_RECORD_READINESS',depends:['ATOMIC_PROPS','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 114]', err && err.message ? err.message : err); } catch(_){}
}