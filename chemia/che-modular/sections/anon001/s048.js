

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},T=['Entity','Quantity','Unit','Dimension','Measurement','Uncertainty','Equation','Graph','Geometry','State','Event','Transformation','Simulation','EducationalProjection'];function envelope(type,value,meta){return ok({type,version:'2.26',value,meta:{source:meta?.source||'CHE.ENGINE',confidence:meta?.confidence??null}})}function quantity(value,unit,dimension,meta){return envelope('Quantity',{value:+value,unit,dimension},meta)}function measurement(value,unit,dimension,uncertainty,meta){return envelope('Measurement',{value:+value,unit,dimension,uncertainty:uncertainty??null},meta)}function projection(value,level,meta){return envelope('EducationalProjection',{level:level||'default',value},meta)}function validate(x){const e=[];if(!x||!T.includes(x.type))e.push({code:'INVALID_TYPE'});if(!x?.meta?.source)e.push({code:'MISSING_SOURCE'});return ok({ok:!e.length,errors:e})}C.SCIENCE={version:'2.38',TYPES:T,envelope,quantity,measurement,projection,validate}})(window);

} catch (err) {
  try { console.warn('[CHE module 48]', err && err.message ? err.message : err); } catch(_){}
}