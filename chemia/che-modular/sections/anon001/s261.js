

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.quality=CHE.DATA.quality||{levels:['EDUCATIONAL_MODEL','ESTIMATED','COMPUTED','DATABASE','EXPERIMENTAL'],requiredReferenceFields:['value','unit','definition','conditions','source','limitations']};
  CHE.DATA_QUALITY_ENGINE_V378={version:'3.78',classify:function(r){r=r||{};const n=CHE.DATA.quality.requiredReferenceFields.filter(k=>r[k]===undefined||r[k]===null||r[k]==='');return{status:n.length?'PARTIAL':'REFERENCE_READY_CANDIDATE',missing:n}},test:function(){return this.classify({value:1,unit:'x',definition:'x',conditions:'x',source:'x',limitations:'x'}).status==='REFERENCE_READY_CANDIDATE'}};
  CHE.P0_REGRESSION_V378=Object.assign({},CHE.P0_REGRESSION_V378||{},{dataQuality:true,test:CHE.DATA_QUALITY_ENGINE_V378.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX378_DATA_QUALITY']={status:'DONE',version:'3.78',fingerprint:'LO-CHEM-MAX-378-DATA_QUALITY',scope:['DATA_QUALITY']};
})();

} catch (err) {
  try { console.warn('[CHE module 267]', err && err.message ? err.message : err); } catch(_){}
}