

try {

(function(g){
'use strict';
g.CHE = g.CHE || {};
g.CHE.ENGINE = {
  name: 'N03 Common Chemistry Engine',
  version: '2.42',
  dataVersion: '2.17',
  contractVersion: '2.42',
  schemaVersion: '2.42',
  level: 'full',
  modules: {},
  builtAt: new Date().toISOString()
};
g.CHE.OK = value => ({ ok: true, value });
g.CHE.ERROR = (code, message, context) => ({ code: String(code || 'CHE.E.UNKNOWN'), message: String(message || ''), context: context || {} });
g.CHE.FAIL = (code, message, context) => ({ ok: false, error: g.CHE.ERROR(code, message, context) });
g.CHE.deepFreeze = function deepFreeze(obj){
  if(obj === null || typeof obj !== 'object') return obj;
  if(Object.isFrozen(obj)) return obj;
  Object.getOwnPropertyNames(obj).forEach(name=>{
    const v = obj[name];
    if(v && typeof v === 'object' && !Object.isFrozen(v)) deepFreeze(v);
  });
  return Object.freeze(obj);
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 0]', err && err.message ? err.message : err); } catch(_){}
}

