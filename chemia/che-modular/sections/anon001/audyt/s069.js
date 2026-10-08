

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const CASES={Cr:'1s2 2s2 2p6 3s2 3p6 4s1 3d5',Cu:'1s2 2s2 2p6 3s2 3p6 4s1 3d10',Mo:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5',Ag:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10',Au:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10 5p6 6s1 4f14 5d10'};
function compact(cfg){const a=Object.entries(cfg||{}).filter(([,n])=>n>0).map(([k,n])=>k+n);return a.join(' ');}
function checkCase(symbol,expected){const a=C.ATOM?.build?.(symbol,0);if(!a)return {ok:false,symbol,error:'DATA_NOT_FOUND'};const c=compact(a.subshells?.reduce?.((o,s)=>(o[s.name]=s.count,o),{})||{});return {ok:c===expected,symbol,actual:c,expected};}
function audit(){const rows=Object.entries(CASES).map(([s,e])=>checkCase(s,e));return ok({ok:rows.every(x=>x.ok),rows});}
function ionCase(symbol,charge,expected){const a=C.ATOM?.build?.(symbol,charge);if(!a)return {ok:false,symbol,charge,error:'DATA_NOT_FOUND'};const c=compact(a.subshells?.reduce?.((o,s)=>(o[s.name]=s.count,o),{})||{});return {ok:c===expected,symbol,charge,actual:c,expected};}
function auditIons(){const rows=[ionCase('Cr',3,'1s2 2s2 2p6 3s2 3p6 3d3'),ionCase('Fe',2,'1s2 2s2 2p6 3s2 3p6 3d6'),ionCase('Cu',2,'1s2 2s2 2p6 3s2 3p6 3d9')];return ok({ok:rows.every(x=>x.ok),rows});}
C.ELECTRONIC_REGRESSION={version:'2.50',audit,auditIons,knownExceptions:CASES};
if(E.registry)E.registry.ELECTRONIC_REGRESSION={layer:'META',owner:'CHE.ELECTRONIC_REGRESSION',role:'regresje konfiguracji wyjątkowych i jonów',depends:['ATOM','ELECTRONIC_MODEL']};
if(E.modules)E.modules.ELECTRONIC_REGRESSION='2.50';
})(window);

} catch (err) {
  try { console.warn('[CHE module 69]', err && err.message ? err.message : err); } catch(_){}
}