

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.thermoEquilibrium=CHE.DATA.thermoEquilibrium||{model:'K(T) is temperature-dependent; van t Hoff educational relation uses ΔH° and R',R_J_molK:8.314462618};
  CHE.THERMO_EQUILIBRIUM_ENGINE_V365={version:'3.65',vanthoff:function(K1,dH,T1,T2){K1=Number(K1);dH=Number(dH);T1=Number(T1);T2=Number(T2);const R=8.314462618;if(![K1,dH,T1,T2].every(Number.isFinite)||K1<=0||T1<=0||T2<=0)return{status:'INCOMPLETE'};return{status:'EDUCATIONAL_MODEL',K2:Math.exp(Math.log(K1)-dH/R*(1/T2-1/T1))}},test:function(){return this.vanthoff(1,-10000,300,310).K2>1}};
  CHE.P0_REGRESSION_V365=Object.assign({},CHE.P0_REGRESSION_V365||{},{thermoEquilibrium:true,test:CHE.THERMO_EQUILIBRIUM_ENGINE_V365.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX365_THERMO_EQUILIBRIUM']={status:'DONE',version:'3.65',fingerprint:'LO-CHEM-MAX-365-THERMO_EQUILIBRIUM',scope:['THERMO_EQUILIBRIUM']};
})();

} catch (err) {
  try { console.warn('[CHE module 254]', err && err.message ? err.message : err); } catch(_){}
}