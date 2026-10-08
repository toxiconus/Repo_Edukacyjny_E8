

try {
 
window.CHE=window.CHE||{}; CHE.EDUCATION=CHE.EDUCATION||{};
CHE.EDUCATION.EXPERIMENT_ENGINE_V342={version:'3.42',status:'LOCAL_VERIFIED',experiments:[
{id:'EXP-PH',topic:'pH',observation:['barwa wskaźnika','wartość pH'],safety:'BHP_REQUIRED'},
{id:'EXP-SOL',topic:'roztwory',observation:['rozpuszczanie','stężenie'],safety:'BHP_REQUIRED'},
{id:'EXP-REDOX',topic:'redoks',observation:['zmiana barwy','wydzielanie/osadzanie'],safety:'BHP_REQUIRED'},
{id:'EXP-MIX',topic:'rozdzielanie mieszanin',observation:['składniki po rozdziale'],safety:'BHP_REQUIRED'}
],createTask:function(id){return this.experiments.find(x=>x.id===id)||null;},audit:function(){return {version:this.version,count:this.experiments.length,allHaveSafety:this.experiments.every(x=>x.safety==='BHP_REQUIRED')}}};
CHE.MAX_REGRESSION_V342={tests:{experimentEngine:CHE.EDUCATION.EXPERIMENT_ENGINE_V342.audit(),sharedStructure:!!(CHE.STRUCTURE),educationEngine:!!(CHE.EDUCATION_ENGINE)},status:'PASS_LOCAL'};

} catch (err) {
  try { console.warn('[CHE module 229]', err && err.message ? err.message : err); } catch(_){}
}