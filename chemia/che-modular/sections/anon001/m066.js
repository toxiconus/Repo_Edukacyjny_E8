try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const keys=x=>Object.keys(x||{}).sort();
const clone=x=>JSON.parse(JSON.stringify(x));
const BASE={
 molecules:['HCl','HF','H2O','H3O','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH','NH3','CO2','CH4'],
 reactions:['agno3Hcl','caco3Hcl','cuHno3','cuoH2so4','cuoHcl','feHcl','h2Cl2','h2so4Naoh','mgHcl','naclH2SO4','so3H2o','hclNaOH','znHcl'],
 tables:{reactionData:13,substances:39,atomicProps:23,isotopes:17,atomicSpectra:5}
};
function inventory(){return {molecules:keys(D.MOLECULES),reactions:keys(D.REACTIONS),reactionData:keys(D.REACTION_DATA),substances:keys(D.SUBSTANCES),atomicProps:keys(D.ATOMIC_PROPS),isotopes:keys(D.ISOTOPES),atomicSpectra:keys(D.ATOMIC_SPECTRA).filter(k=>k!=='RYDBERG')};}
function orphanScan(){
 const issues=[], inv=inventory();
 const molSet=new Set(inv.molecules), rxSet=new Set(inv.reactions), subSet=new Set(inv.substances);
 for(const [id,r] of Object.entries(D.REACTION_DATA||{})) if(!rxSet.has(id)) issues.push({code:'ORPHAN_REACTION_DATA',id});
 for(const [id,r] of Object.entries(D.REACTIONS||{})) for(const side of ['reactants','products']) for(const x of r?.[side]||[]){ if(subSet.has(x.formula)) continue; const f=String(x.formula||''); const aliases={'Cu(NO3)2':'CuNO32'}; if(aliases[f]&&subSet.has(aliases[f])) continue; const atomOnly=/^[A-Z][a-z]?$/.test(f); const diatomic=/^[A-Z][a-z]?2$/.test(f); if((atomOnly||diatomic)&&D.ATOM_META?.[f.replace(/2$/,'')]) continue; issues.push({code:'MISSING_SUBSTANCE',reaction:id,formula:f}); }
 for(const id of BASE.molecules) if(!molSet.has(id)) issues.push({code:'LEGACY_MOLECULE_MISSING',id});
 for(const id of BASE.reactions){ const alias=id==='naclH2SO4'?'naclH2so4':id; if(!rxSet.has(id)&&!rxSet.has(alias)) issues.push({code:'LEGACY_REACTION_MISSING',id}); }
 return {ok:issues.length===0,issues};
}
function compare(){
 const inv=inventory(),issues=[];
 if(inv.molecules.length<BASE.molecules.length) issues.push({code:'MOLECULE_COUNT_REGRESSED',expectedAtLeast:BASE.molecules.length,actual:inv.molecules.length});
 if(inv.reactions.length<BASE.reactions.length) issues.push({code:'REACTION_COUNT_REGRESSED',expectedAtLeast:BASE.reactions.length,actual:inv.reactions.length});
 for(const [k,n] of Object.entries(BASE.tables)) if(inv[k].length<n) issues.push({code:'TABLE_COUNT_REGRESSED',table:k,expectedAtLeast:n,actual:inv[k].length});
 return {ok:issues.length===0,issues,inventory:inv};
}
function run(){const c=compare(),o=orphanScan();return ok({ok:c.ok&&o.ok,compare:c,orphans:o,source:'embedded legacy baseline',versions:['2.30','2.38','2.46','2.48']});}
C.DATA_LINEAGE={version:'2.50',baseline:BASE,inventory,compare,orphanScan,run};
if(E.registry)E.registry.DATA_LINEAGE={layer:'META',owner:'CHE.DATA_LINEAGE',role:'ciągłość danych, legacy baseline i orphan scan',depends:['DATA','REACTION']};
if(E.modules)E.modules.DATA_LINEAGE='2.50';
})(window);

} catch (err) {
  try { console.warn('[CHE module 66]', err && err.message ? err.message : err); } catch(_){}
}

