

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.acidBase=CHE.DATA.acidBase||{};
  Object.assign(CHE.DATA.acidBase,{definitions:{bronsed:'acid donates proton; base accepts proton',pH:'-log10(aH+), educational concentration approximation may use -log10[H+]',pOH:'-log10[OH-]'},constants:{Kw25C:1e-14},records:[{id:'HCl',type:'strong_acid',educational:'complete_dissociation'},{id:'NaOH',type:'strong_base',educational:'complete_dissociation'},{id:'CH3COOH',type:'weak_acid',Ka:1.75e-5},{id:'NH3',type:'weak_base',Kb:1.8e-5}]});
  CHE.ACID_BASE_ENGINE_V366={version:'3.66',pH:function(h){h=Number(h);return Number.isFinite(h)&&h>0?{status:'READY',pH:-Math.log10(h)}:{status:'INCOMPLETE'}},pOH:function(oh){oh=Number(oh);return Number.isFinite(oh)&&oh>0?{status:'READY',pOH:-Math.log10(oh)}:{status:'INCOMPLETE'}},kw:function(h,oh){h=Number(h);oh=Number(oh);return Number.isFinite(h)&&Number.isFinite(oh)?{status:'READY',Kw:h*oh}:{status:'INCOMPLETE'}},test:function(){return Math.abs(this.pH(1e-3).pH-3)<1e-12&&Math.abs(this.pOH(1e-3).pOH-3)<1e-12}};
  CHE.P0_REGRESSION_V366=Object.assign({},CHE.P0_REGRESSION_V366||{},{acidBase:true,test:CHE.ACID_BASE_ENGINE_V366.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX366_ACID_BASE']={status:'DONE',version:'3.66',fingerprint:'LO-CHEM-MAX-366-ACID_BASE',scope:['ACID_BASE']};
})();

} catch (err) {
  try { console.warn('[CHE module 255]', err && err.message ? err.message : err); } catch(_){}
}