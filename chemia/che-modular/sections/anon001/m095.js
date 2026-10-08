try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{};
const required=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
function audit(){const src=D.ATOMIC_PROPS||{};const elems=D.ELEMENTS_118||{};const keys=Object.keys(elems).length?Object.keys(elems):Object.keys(src);const rows=keys.map(k=>({symbol:k,props:src[k]||null}));const coverage=Object.fromEntries(required.map(f=>[f,rows.filter(r=>r.props&&r.props[f]!==null&&r.props[f]!==undefined).length]));return {elements:keys.length,records:rows.filter(r=>r.props).length,coverage,complete:rows.filter(r=>r.props&&required.every(f=>r.props[f]!==null&&r.props[f]!==undefined)).length,missing:rows.filter(r=>!r.props||required.some(f=>r.props[f]===null||r.props[f]===undefined)).map(r=>r.symbol)};}
C.ATOMIC_PROPS_AUDIT={version:'2.65',required,audit};
})(window);

} catch (err) {
  try { console.warn('[CHE module 95]', err && err.message ? err.message : err); } catch(_){}
}

