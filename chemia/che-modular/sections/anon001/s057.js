

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const SOURCES=new Set(['EXPERIMENTAL','COMPUTED','ESTIMATED','EDUCATIONAL_APPROXIMATION','USER_DEFINED','DATABASE']);
function create(input){const x=input||{},source=SOURCES.has(x.source)?x.source:'EDUCATIONAL_APPROXIMATION';return ok({source,method:x.method||null,uncertainty:x.uncertainty??null,confidence:x.confidence??null,calculationLevel:x.calculationLevel||null,reference:x.reference||null,createdAt:x.createdAt||new Date().toISOString()});}
function attach(data,meta){return ok({data,provenance:create(meta).value});}
function merge(list){const xs=(list||[]).filter(Boolean);return ok({items:xs.map(x=>create(x).value),sources:[...new Set(xs.map(x=>x.source).filter(Boolean))]});}
function validate(p){const x=p||{},e=[];if(!SOURCES.has(x.source))e.push({code:'INVALID_SOURCE',source:x.source});if(x.confidence!=null&&(!Number.isFinite(Number(x.confidence))||Number(x.confidence)<0||Number(x.confidence)>1))e.push({code:'INVALID_CONFIDENCE'});return ok({ok:!e.length,errors:e});}
C.PROVENANCE={version:'2.38',sources:[...SOURCES],create,attach,merge,validate};
})(window);

} catch (err) {
  try { console.warn('[CHE module 57]', err && err.message ? err.message : err); } catch(_){}
}