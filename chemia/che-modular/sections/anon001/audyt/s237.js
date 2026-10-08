

try {
 (()=>{const SRC='CHE_SP78_QUANT_V350';const tasks=[
['mass-density-volume','masa/gęstość/objętość'],['formula-from-valence','wzór z wartościowości'],['equation-balance','współczynniki i zachowanie masy'],['charge-balance','zachowanie ładunku'],['solubility-table','odczyt z tabeli/wykresu'],['percent-concentration','stężenie procentowe'],['solution-mass','masa substancji/rozpuszczalnika/roztworu'],['molar-mass','masa molowa'],['combustion','spalanie węglowodorów']];
function validate(t,x={}){const defs={};defs[t]=true;return {task:t,supported:!!defs[t],input:x,source:SRC};}CHE.SP78=CHE.SP78||{};CHE.SP78.QUANT_V350={version:'3.50',source:SRC,tasks,validate};CHE.P0_REGRESSION_V350={version:'3.50',pass:tasks.length===9,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 240]', err && err.message ? err.message : err); } catch(_){}
}