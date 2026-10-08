try {

(function(g){'use strict';
 const C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{}, E=C.ENGINE=C.ENGINE||{};
 const els=Array.isArray(D.ELEMENTS_118)?D.ELEMENTS_118:[];
 const bySymbol=Object.create(null), byZ=Object.create(null);
 els.forEach(e=>{if(e&&e.s){bySymbol[e.s]=e;byZ[String(e.z)]=e;}});
 const substances=D.SUBSTANCES||{};
 const molecules=D.MOLECULES||{};
 const reactions=D.REACTIONS||{};
 const reactionData=D.REACTION_DATA||{};
 const formulaIndex=Object.create(null);
 Object.entries(substances).forEach(([id,r])=>{
   const f=String(r?.formula||id); if(f) formulaIndex[f]=id;
 });
 const moleculeIndex=Object.create(null);
 Object.entries(molecules).forEach(([id,r])=>{
   moleculeIndex[id]={id,name:r?.name||r?.label||id,formula:r?.formula||null};
 });
 const reactionIndex=Object.create(null);
 Object.entries(reactions).forEach(([id,r])=>{
   reactionIndex[id]={id,reactants:Array.isArray(r?.reactants)?r.reactants.length:0,products:Array.isArray(r?.products)?r.products.length:0,hasData:!!reactionData[id]};
 });
 function audit(){
   const issues=[];
   if(els.length!==118) issues.push({code:'ELEMENT_COUNT',expected:118,actual:els.length});
   const duplicateSymbols=els.map(e=>e?.s).filter(Boolean).filter((x,i,a)=>a.indexOf(x)!==i);
   const duplicateZ=els.map(e=>e?.z).filter(x=>x!=null).filter((x,i,a)=>a.indexOf(x)!==i);
   if(duplicateSymbols.length) issues.push({code:'DUPLICATE_ELEMENT_SYMBOL',values:[...new Set(duplicateSymbols)]});
   if(duplicateZ.length) issues.push({code:'DUPLICATE_ELEMENT_Z',values:[...new Set(duplicateZ)]});
   const missingReactionSubstances=[];
   Object.entries(reactions).forEach(([id,r])=>['reactants','products'].forEach(side=>(r?.[side]||[]).forEach(x=>{const f=String(x?.formula||'');if(f&&!substances[f]&&!formulaIndex[f]) missingReactionSubstances.push({id,formula:f});})));
   return {version:'2.83',ok:issues.length===0&&missingReactionSubstances.length===0,elements:els.length,substances:Object.keys(substances).length,molecules:Object.keys(molecules).length,reactions:Object.keys(reactions).length,reactionData:Object.keys(reactionData).length,duplicateSymbols:[...new Set(duplicateSymbols)],duplicateZ:[...new Set(duplicateZ)],missingReactionSubstances,issues};
 }
 function regression(){const a=audit();return [{id:'SIMPLE-001',name:'118 element records',ok:a.elements===118},{id:'SIMPLE-002',name:'element symbols unique',ok:a.duplicateSymbols.length===0},{id:'SIMPLE-003',name:'element atomic numbers unique',ok:a.duplicateZ.length===0},{id:'SIMPLE-004',name:'reaction substance references closed',ok:a.missingReactionSubstances.length===0},{id:'SIMPLE-005',name:'index sizes stable',ok:a.substances===Object.keys(formulaIndex).length||a.substances===0},{id:'SIMPLE-006',name:'reaction data index closed',ok:Object.values(reactionIndex).every(x=>x.hasData)}];}
 C.SIMPLE_BASES_V283={version:'2.83',elementBySymbol:bySymbol,elementByZ:byZ,substanceByFormula:formulaIndex,moleculeIndex,reactionIndex,audit,regression,policy:'uzupełnia wyłącznie indeksy i spójność istniejących danych; nie tworzy wartości naukowych'};
 D.ELEMENT_INDEX_V283=bySymbol; D.SUBSTANCE_INDEX_V283=formulaIndex; D.MOLECULE_INDEX_V283=moleculeIndex; D.REACTION_INDEX_V283=reactionIndex;
 E.modules=E.modules||{}; E.modules.SIMPLE_BASES_V283='2.83';
 E.registry=E.registry||{}; E.registry.SIMPLE_BASES_V283={layer:'DATA/INDEX/AUDIT',owner:'CHE.SIMPLE_BASES_V283',depends:['ELEMENTS_118','SUBSTANCES','MOLECULES','REACTIONS','REACTION_DATA']};
 E.version='2.83';E.dataVersion='2.83';E.contractVersion='2.83';E.schemaVersion='2.83';
 if(E.PUBLIC)E.PUBLIC.version='2.83';if(E.RUNTIME)E.RUNTIME.version='2.83';
})(window);

} catch (err) {
  try { console.warn('[CHE module 157]', err && err.message ? err.message : err); } catch(_){}
}

