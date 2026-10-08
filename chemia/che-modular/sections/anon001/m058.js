try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const BASELINE={molecules:20,reactions:13,reactionData:13,substances:39,atomicProps:23,isotopes:17,atomicSpectra:5,moleculeIds:['HCl','HF','H2O','H3O','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH','NH3','CO2','CH4','C2H5OH','C6H6','C3H6O','H2S','SO2','HCN','H2O2','CO'],reactionIds:['hclNaOH','znHcl','mgHcl','feHcl','caco3Hcl','h2so4Naoh','cuoH2so4','cuoHcl','agno3Hcl','cuHno3','so3H2o','naclH2SO4','h2Cl2']};
const keys=x=>Object.keys(x||{}).sort();
function inventory(){return {molecules:keys(D.MOLECULES).length,reactions:keys(D.REACTIONS).length,reactionData:keys(D.REACTION_DATA).length,substances:keys(D.SUBSTANCES).length,atomicProps:keys(D.ATOMIC_PROPS).length,isotopes:keys(D.ISOTOPES).length,atomicSpectra:keys(D.ATOMIC_SPECTRA).filter(k=>k!=='RYDBERG').length};}
function compareBaseline(){const inv=inventory(),issues=[];for(const [k,v] of Object.entries(BASELINE))if(typeof v==='number'&&inv[k]!==v)issues.push({code:'BASELINE_COUNT_MISMATCH',table:k,expected:v,actual:inv[k]});const mi=keys(D.MOLECULES),ri=keys(D.REACTIONS);if(JSON.stringify(mi)!==JSON.stringify([...BASELINE.moleculeIds].sort()))issues.push({code:'MOLECULE_ID_SET_MISMATCH',expected:BASELINE.moleculeIds,actual:mi});if(JSON.stringify(ri)!==JSON.stringify([...BASELINE.reactionIds].sort()))issues.push({code:'REACTION_ID_SET_MISMATCH',expected:BASELINE.reactionIds,actual:ri});return {ok:!issues.length,issues,inventory:inv};}
function reactionDataAudit(){const issues=[];for(const [id,r] of Object.entries(D.REACTIONS||{})){const missing=[];for(const side of ['reactants','products'])for(const x of r?.[side]||[])if(!D.SUBSTANCES?.[x.formula])missing.push(x.formula);if(missing.length)issues.push({code:'REACTION_SUBSTANCE_MISSING',id,missing});}return {ok:!issues.length,issues};}
function run(){const base=compareBaseline(),rx=reactionDataAudit();return ok({ok:base.ok&&rx.ok,baseline:base,reactions:rx});}
C.DATA_INTEGRITY={version:'2.47',baseline:BASELINE,inventory,compareBaseline,reactionDataAudit,run};
if(E.registry)E.registry.DATA_INTEGRITY={layer:'META',owner:'CHE.DATA_INTEGRITY',role:'audyt kompletności danych legacy',depends:['DATA','REACTION']};
if(E.modules)E.modules.DATA_INTEGRITY='2.47';
})(window);

} catch (err) {
  try { console.warn('[CHE module 58]', err && err.message ? err.message : err); } catch(_){}
}

