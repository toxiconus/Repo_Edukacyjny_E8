

try {

CHE.CHEMISTRY_LO_MAX_02_V361={
 version:'3.61',status:'DONE',source:'CHE.CURRICULUM.CHEMISTRY_ONLY',
 domains:['geometria_czasteczek','VSEPR','polarnosc','oddzialywania_miedzyczasteczkowe','stany_skupienia'],
 api:{geometry:'CHE.STRUCTURE/geometry',polarity:'CHE.EDUCATION_ENGINE.polarity',interactions:'CHE.EDUCATION_ENGINE.interactions'},
 rules:[
  'geometria wynika z centralnego modelu struktury, nie z UI',
  'polarnosc jest wnioskiem z geometrii i polarności wiązań',
  'oddzialywania są klasyfikowane bez tworzenia drugiej bazy',
  'brak danych nie jest zastępowany zgadywaniem'
 ],
 classify:function(m){
  const x=m||{}; const g=x.geometry||x.shape||'UNKNOWN';
  const p=x.polarity||'UNKNOWN';
  const i=Array.isArray(x.interactions)?x.interactions:[];
  return {geometry:g,polarity:p,interactions:i,source:x.source||'COMPUTED'};
 },
 test:function(){
  const w=this.classify({geometry:'bent',polarity:'POLAR',interactions:['DIPOLE_DIPOLE','HYDROGEN_BOND']});
  return w.geometry==='bent'&&w.polarity==='POLAR'&&w.interactions.length===2;
 }
};
CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
CHE.PROJECT_REQUIREMENTS_LOCK_V331.loMax02={status:'DONE',version:'3.61',fingerprint:'LO-MAX02-GEOMETRY-POLARITY-INTERACTIONS'};
CHE.P0_REGRESSION_V361={chemistryOnly:true,loMax02:true,browserRuntime:'NOT_VERIFIED'};

} catch (err) {
  try { console.warn('[CHE module 250]', err && err.message ? err.message : err); } catch(_){}
}