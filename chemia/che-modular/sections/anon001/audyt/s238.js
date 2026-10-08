

try {
 (()=>{const SRC='CHE_SP78_ORGANIC_V351';const domains={hydrocarbons:['alkanes','alkenes','alkynes','combustion','bromine addition','polymerization','petroleum'],derivatives:['alcohols','glycerol','carboxylic acids','esters'],bio:['fatty acids','fats','amino acids','proteins','denaturation','carbohydrates','starch']};const cards=[...domains.hydrocarbons,...domains.derivatives,...domains.bio].map((topic,i)=>({id:`SP78-ORG-${String(i+1).padStart(2,'0')}`,topic,level:'SP7-8'}));CHE.SP78=CHE.SP78||{};CHE.SP78.ORGANIC_V351={version:'3.51',source:SRC,domains,cards,canonicalGraphRequired:true};CHE.P0_REGRESSION_V351={version:'3.51',pass:cards.length===17,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 241]', err && err.message ? err.message : err); } catch(_){}
}