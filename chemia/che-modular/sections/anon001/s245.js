

try {

(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.GAS_SOLUTION_ENGINE_V362={version:'3.62',source:'CHE.EDUCATION_ENGINE',
    molarConcentration:(n,V)=>({value:n/V,unit:'mol/L'}),
    massPercent:(ms,mr)=>({value:100*ms/mr,unit:'%'}),
    dilution:(c1,V1,V2)=>({c2:c1*V1/V2,unit:'mol/L'}),
    gasMoles:(V,Vm)=>({n:V/Vm,unit:'mol'}),
    solutionAudit(x){const issues=[]; if(!(x.volume>0))issues.push('INVALID_VOLUME'); if(x.c!==undefined&&x.c<0)issues.push('INVALID_CONCENTRATION'); if(x.solubility!==undefined&&x.solubility<0)issues.push('INVALID_SOLUBILITY'); return {ok:issues.length===0,issues};}
  };
  CHE.GAS_SOLUTION_ENGINE_V362.test=(()=>{const e=CHE.GAS_SOLUTION_ENGINE_V362; const a=e.dilution(2,0.1,0.5).c2===0.4; const b=Math.abs(e.molarConcentration(1,2).value-0.5)<1e-12; return a&&b;})();
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX03_GASES_SOLUTIONS']={status:'DONE',version:'3.62',fingerprint:'LO-CHEM-MAX03-GAS-SOLUTION-V362',scope:['gases','molar concentration','mass percent','dilution','solubility','solution audit']};
  CHE.P0_REGRESSION_V362=Object.assign({},CHE.P0_REGRESSION_V362||{}, {gasSolution:true,gasSolutionTest:CHE.GAS_SOLUTION_ENGINE_V362.test,browserRuntime:'NOT_VERIFIED'});
})();

} catch (err) {
  try { console.warn('[CHE module 251]', err && err.message ? err.message : err); } catch(_){}
}