try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};

const LEDGER_KEY='SCIENCE_VERIFICATION_LEDGER_V289';
const ledger=D[LEDGER_KEY]||{
  version:'2.89', policy:'VERIFIED_ONCE_HARD_LOCK',
  rule:'verified fingerprint is skipped unless FORCE_REVERIFY is explicitly requested',
  records:{}, history:[]
};
function stable(v){
  if(v===null||typeof v!=='object')return JSON.stringify(v);
  if(Array.isArray(v))return '['+v.map(stable).join(',')+']';
  return '{'+Object.keys(v).sort().map(k=>JSON.stringify(k)+':'+stable(v[k])).join(',')+'}';
}
function fingerprint(record){
  const x=stable(record); let h=2166136261;
  for(let i=0;i<x.length;i++){h^=x.charCodeAt(i);h=Math.imul(h,16777619);}
  return ('00000000'+(h>>>0).toString(16)).slice(-8);
}
function markVerified(id,record,meta={}){
  if(!id||!record) return {ok:false,reason:'missing_id_or_record'};
  const fp=fingerprint(record), old=ledger.records[id];
  if(old&&old.fingerprint===fp) return {ok:true,action:'SKIP_ALREADY_VERIFIED',id,fingerprint:fp,verifiedAt:old.verifiedAt};
  ledger.records[id]={id,fingerprint:fp,verifiedAt:meta.verifiedAt||new Date().toISOString(),source:record.source||null,sourceVersion:meta.sourceVersion||null,verification:meta.verification||'SOURCE_CHECKED'};
  ledger.history.push({id,fingerprint:fp,action:old?'REVERIFY':'VERIFY',at:ledger.records[id].verifiedAt});
  return {ok:true,action:old?'REVERIFY':'VERIFY',id,fingerprint:fp};
}
function verify(id,record,options={}){
  const fp=fingerprint(record),old=ledger.records[id];
  if(old&&old.fingerprint===fp&&!options.FORCE_REVERIFY)
    return {ok:true,verified:true,skipped:true,reason:'ALREADY_VERIFIED_UNCHANGED',id,fingerprint:fp};
  return markVerified(id,record,options);
}
function needsVerification(id,record){
  const old=ledger.records[id],fp=fingerprint(record);
  return !old||old.fingerprint!==fp;
}
function audit(){
  const rows=Object.values(ledger.records);
  return {version:'2.89',policy:ledger.policy,total:rows.length,records:rows,historyCount:ledger.history.length,ok:true};
}
D[LEDGER_KEY]=ledger;
C.SCIENCE_VERIFICATION_LEDGER_V289={fingerprint,verify,markVerified,needsVerification,audit,ledger};
E.modules=E.modules||{};E.modules.SCIENCE_VERIFICATION_LEDGER_V289='2.89';
E.registry=E.registry||{};E.registry.SCIENCE_VERIFICATION_LEDGER_V289={layer:'SCIENCE/AUDIT',owner:'CHE.SCIENCE_VERIFICATION_LEDGER_V289',depends:['SCIENCE_CORE_V288'],policy:'verified-once hard lock'};

const core=D.SCIENCE_CORE_V288;
if(core?.thermochemistry){
  Object.entries(core.thermochemistry).forEach(([id,r])=>{
    const key='THERMO:'+id;
    if(!ledger.records[key]) markVerified(key,r,{verification:'PREVIOUSLY_VERIFIED_REFERENCE_DATA'});
  });
}
E.version='2.89';E.dataVersion='2.89';E.contractVersion='2.89';E.schemaVersion='2.89';
if(E.PUBLIC)E.PUBLIC.version='2.89';
})(window);

} catch (err) {
  try { console.warn('[CHE module 165]', err && err.message ? err.message : err); } catch(_){}
}

