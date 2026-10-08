try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.organic=CHE.DATA.organic||{}; CHE.DATA.organic.hydrocarbons=CHE.DATA.organic.hydrocarbons||{};
  CHE.DATA.organic.hydrocarbons.records=[{id:'methane',formula:'CH4',class:'alkane'},{id:'ethene',formula:'C2H4',class:'alkene'},{id:'ethyne',formula:'C2H2',class:'alkyne'},{id:'benzene',formula:'C6H6',class:'aromatic'}];
  CHE.ORGANIC_HC_ENGINE_V373={version:'3.73',classify:function(formula){const r=CHE.DATA.organic.hydrocarbons.records.find(x=>x.formula===formula);return r?{status:'READY',class:r.class,id:r.id}:{status:'UNKNOWN'}},combustion:function(formula){const m=String(formula||'').match(/^C(\d*)H(\d*)$/);if(!m)return{status:'UNSUPPORTED'};const C=Number(m[1]||1),H=Number(m[2]||1);return{status:'READY',CO2:C,H2O:H/2}},test:function(){return this.classify('C2H4').class==='alkene'}};
  CHE.P0_REGRESSION_V373=Object.assign({},CHE.P0_REGRESSION_V373||{},{organicHydrocarbons:true,test:CHE.ORGANIC_HC_ENGINE_V373.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX373_ORGANIC_HYDROCARBONS']={status:'DONE',version:'3.73',fingerprint:'LO-CHEM-MAX-373-ORGANIC_HYDROCARBONS',scope:['ORGANIC_HYDROCARBONS']};
})();

} catch (err) {
  try { console.warn('[CHE module 262]', err && err.message ? err.message : err); } catch(_){}
}

