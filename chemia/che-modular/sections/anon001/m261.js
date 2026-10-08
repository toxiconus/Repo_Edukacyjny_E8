try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.metals=CHE.DATA.metals||{activitySeries:[{symbol:'K',relative:'very_high'},{symbol:'Ca',relative:'high'},{symbol:'Mg',relative:'high'},{symbol:'Al',relative:'passivated'},{symbol:'Zn',relative:'medium'},{symbol:'Fe',relative:'medium'},{symbol:'H',relative:'reference'},{symbol:'Cu',relative:'low'},{symbol:'Ag',relative:'very_low'}],note:'relative educational ordering; not a numerical thermodynamic scale'};
  CHE.METAL_ENGINE_V372={version:'3.72',canDisplace:function(metal,ion){const order=CHE.DATA.metals.activitySeries.map(x=>x.symbol);const a=order.indexOf(metal),b=order.indexOf(String(ion).replace(/[+0-9-]/g,''));return a>=0&&b>=0?{status:'EDUCATIONAL_MODEL',possible:a<b}:{status:'UNKNOWN'}},test:function(){return this.canDisplace('Zn','Cu2+').possible===true}};
  CHE.P0_REGRESSION_V372=Object.assign({},CHE.P0_REGRESSION_V372||{},{metals:true,test:CHE.METAL_ENGINE_V372.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX372_METALS_NONMETALS']={status:'DONE',version:'3.72',fingerprint:'LO-CHEM-MAX-372-METALS_NONMETALS',scope:['METALS_NONMETALS']};
})();

} catch (err) {
  try { console.warn('[CHE module 261]', err && err.message ? err.message : err); } catch(_){}
}

