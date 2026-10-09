

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.solubility=CHE.DATA.solubility||{};
  CHE.DATA.solubility.records=[{id:'AgCl',formula:'AgCl',Ksp_educational:1.8e-10,ions:['Ag+','Cl-'],sourceType:'EDUCATIONAL_REFERENCE'},{id:'BaSO4',formula:'BaSO4',Ksp_educational:1.1e-10,ions:['Ba2+','SO4^2-'],sourceType:'EDUCATIONAL_REFERENCE'}];
  CHE.SOLUBILITY_ENGINE_V368={version:'3.68',ionicProduct:function(ions){return (ions||[]).reduce((p,x)=>p*Math.pow(Number(x.c),Number(x.nu)),1)},precipitation:function(Q,Ksp){Q=Number(Q);Ksp=Number(Ksp);if(![Q,Ksp].every(Number.isFinite)||Ksp<0)return{status:'INCOMPLETE'};return{status:'READY',precipitate:Q>Ksp,relation:Q>Ksp?'Q>Ksp':Q<Ksp?'Q<Ksp':'Q=Ksp'}},test:function(){return this.precipitation(2,1).precipitate===true}};
  CHE.P0_REGRESSION_V368=Object.assign({},CHE.P0_REGRESSION_V368||{},{solubility:true,test:CHE.SOLUBILITY_ENGINE_V368.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX368_SOLUBILITY_KSP']={status:'DONE',version:'3.68',fingerprint:'LO-CHEM-MAX-368-SOLUBILITY_KSP',scope:['SOLUBILITY_KSP']};
})();

} catch (err) {
  try { console.warn('[CHE module 257]', err && err.message ? err.message : err); } catch(_){}
}