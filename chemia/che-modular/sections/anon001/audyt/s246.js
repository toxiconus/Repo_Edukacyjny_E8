

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{}; CHE.DATA.thermoKinetics=CHE.DATA.thermoKinetics||{};
  CHE.DATA.thermoKinetics.reactionEnergy={
    definition:'q = m*c*Î”T for calorimetry; Î”H is enthalpy change per mol under stated conditions',
    sourceType:'EDUCATIONAL_MODEL', units:{q:'J',deltaH:'kJ/mol',temperature:'K'}
  };
  CHE.DATA.thermoKinetics.kinetics={factors:['temperature','concentration','pressure_for_gases','surface_area','catalyst'],note:'factor affects rate; catalyst changes pathway/activation energy, not equilibrium constant'};
  CHE.DATA.thermoKinetics.catalyst={definition:'substance changing reaction rate without being consumed overall',limits:['does not change ΔG°/K at fixed T','does not change equilibrium composition']};
  CHE.THERMOKINETICS_ENGINE_V363={version:'3.63',energy(input){const m=Number(input?.mass),c=Number(input?.specificHeat),dT=Number(input?.deltaT);if(![m,c,dT].every(Number.isFinite))return {status:'INCOMPLETE'};return {status:'READY',q_J:m*c*dT};},rateFactors(input){return {status:'READY',factors:[...(input?.factors||CHE.DATA.thermoKinetics.kinetics.factors)]};},catalystEffect(input){return {status:'READY',changesRate:true,changesEquilibriumConstant:false,notes:CHE.DATA.thermoKinetics.catalyst.limits};},test(){return this.energy({mass:100,specificHeat:4.18,deltaT:5}).q_J===2090;}};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX04_THERMOKINETICS']={status:'DONE',version:'3.63',fingerprint:'LO-CHEM-MAX04-THERMOKINETICS-V363',scope:['thermochemistry','calorimetry','kinetics','reaction-rate factors','catalysis']};
  CHE.P0_REGRESSION_V363=Object.assign({},CHE.P0_REGRESSION_V363||{}, {thermoKinetics:true,thermoKineticsTest:CHE.THERMOKINETICS_ENGINE_V363.test(),browserRuntime:'NOT_VERIFIED'});
})();

} catch (err) {
  try { console.warn('[CHE module 252]', err && err.message ? err.message : err); } catch(_){}
}