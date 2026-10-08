try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.redox=CHE.DATA.redox||{concepts:['oxidation','reduction','oxidation_state','electron_transfer','oxidizing_agent','reducing_agent']};
  CHE.REDOX_ENGINE_V369={version:'3.69',electronDelta:function(oxidized,reduced){const a=Number(oxidized),b=Number(reduced);return Number.isFinite(a)&&Number.isFinite(b)?{status:'READY',delta:b-a,absolute:Math.abs(b-a)}:{status:'INCOMPLETE'}},balanceElectronTotals:function(parts){const sums=(parts||[]).reduce((o,p)=>{const e=Number(p.electrons);if(Number.isFinite(e))o[p.type==='oxidation'?'ox':'red']=(o[p.type==='oxidation'?'ox':'red']||0)+Math.abs(e)*Math.max(1,Number(p.coefficient)||1);return o},{});return{status:'READY',balanced:(sums.ox||0)===(sums.red||0),totals:sums}},test:function(){return this.balanceElectronTotals([{type:'oxidation',electrons:2,coefficient:1},{type:'reduction',electrons:1,coefficient:2}]).balanced}};
  CHE.P0_REGRESSION_V369=Object.assign({},CHE.P0_REGRESSION_V369||{},{redox:true,test:CHE.REDOX_ENGINE_V369.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX369_REDOX']={status:'DONE',version:'3.69',fingerprint:'LO-CHEM-MAX-369-REDOX',scope:['REDOX']};
})();

} catch (err) {
  try { console.warn('[CHE module 258]', err && err.message ? err.message : err); } catch(_){}
}

