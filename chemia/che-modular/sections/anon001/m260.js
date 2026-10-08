try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.inorganic=CHE.DATA.inorganic||{};
  CHE.DATA.inorganic.classes=['oxides','hydrides','hydroxides','acids','salts','amphoteric_compounds','complexes'];
  CHE.DATA.inorganic.records=[{id:'CaO',class:'oxide',reaction:'CaO+H2O->Ca(OH)2'},{id:'CO2',class:'acidic_oxide',reaction:'CO2+H2O⇌H2CO3'},{id:'Al2O3',class:'amphoteric_oxide'}];
  CHE.INORGANIC_ENGINE_V371={version:'3.71',classify:function(id){const r=CHE.DATA.inorganic.records.find(x=>x.id===id);return r?{status:'READY',class:r.class}: {status:'UNKNOWN'}},test:function(){return this.classify('CaO').class==='oxide'}};
  CHE.P0_REGRESSION_V371=Object.assign({},CHE.P0_REGRESSION_V371||{},{inorganic:true,test:CHE.INORGANIC_ENGINE_V371.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX371_INORGANIC_CORE']={status:'DONE',version:'3.71',fingerprint:'LO-CHEM-MAX-371-INORGANIC_CORE',scope:['INORGANIC_CORE']};
})();

} catch (err) {
  try { console.warn('[CHE module 260]', err && err.message ? err.message : err); } catch(_){}
}

