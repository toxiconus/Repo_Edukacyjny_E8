

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const E = C.ENGINE = C.ENGINE || {};
const layers = { DATA:1, DOMAIN:2, SERVICE:3, PRESENTATION:4, META:5 };
const level = name => layers[E.registry?.[name]?.layer] ?? -1;
function canUse(from, to, seen){
  seen = seen || new Set();
  if(from === to) return true;
  if(seen.has(from)) return false;
  seen.add(from);
  const deps = E.registry?.[from]?.depends || [];
  return deps.includes(to) || deps.some(d=> canUse(d, to, seen));
}
function assertUse(from, to){
  if(!canUse(from, to)) throw new Error('Niedozwolona zależność: CHE.' + from + ' → CHE.' + to);
  return true;
}
const rules = [
  'DATA jest jedynym właścicielem danych chemicznych',
  'Zależności płyną od DATA do warstw wyższych',
  'Moduł nie może wymagać modułu, który zależy od niego',
  'UI i VIZ nie definiują faktów chemicznych',
  'Public API jest jedynym wejściem dla nowych konsumentów',
  'Wynik obliczenia nie nadpisuje danych źródłowych',
  'Każdy moduł ma jednego właściciela',
  'Zmiana kontraktu wymaga bump wersji',
  'Nowe funkcje publiczne zwracają {ok, value} lub {ok:false, error}',
  'Warstwa atomowa i jądrowa należą do domeny, nie do UI',
  'CHE.STRUCTURE jest jedynym właścicielem kanonicznego grafu molekularnego',
  'CHE.TRANSFORM opisuje reakcję jako zmianę grafu, nie jako logikę renderera'
];
const errorCodes = {
  DATA_NOT_FOUND:'CHE.E.DATA_NOT_FOUND', INVALID_TYPE:'CHE.E.INVALID_TYPE',
  INVALID_ID:'CHE.E.INVALID_ID', INVALID_STATE:'CHE.E.INVALID_STATE',
  INVALID_CONDITION:'CHE.E.INVALID_CONDITION', INVALID_INPUT:'CHE.E.INVALID_INPUT',
  INVALID_CHARGE:'CHE.E.INVALID_CHARGE', CONTRACT:'CHE.E.CONTRACT',
  CANONICAL:'CHE.E.CANONICAL', REACTION_UNBALANCED:'CHE.E.REACTION_UNBALANCED',
  UNSUPPORTED:'CHE.E.UNSUPPORTED', INTERNAL:'CHE.E.INTERNAL',
  ISOTOPE_NOT_FOUND:'CHE.E.ISOTOPE_NOT_FOUND', NUCLEUS_INVALID:'CHE.E.NUCLEUS_INVALID',
  SPECTRUM_NOT_FOUND:'CHE.E.SPECTRUM_NOT_FOUND', STRUCTURE_INVALID:'CHE.E.STRUCTURE_INVALID',
  BOND_NOT_FOUND:'CHE.E.BOND_NOT_FOUND', GROUP_NOT_FOUND:'CHE.E.GROUP_NOT_FOUND'
};
function envelope(type, id, data, extra){
  extra = extra || {};
  return { type, id,
    version: E.modules?.[type] || extra.version || '2.17',
    source: extra.source || E.registry?.[type]?.owner || null,
    data: data ?? null,
    relations: Array.isArray(extra.relations) ? extra.relations : [],
    conditions: extra.conditions || null,
    meta: { ...(extra.meta || {}), canonical:true, schema:E.schemaVersion } };
}
function isEnvelope(x){
  return !!x && typeof x === 'object' && ['type','id','version','source','data','relations','meta'].every(k=> k in x);
}
function audit(){
  const issues = [];
  const R = E.registry || {};
  const names = Object.keys(R);
  for(const name of names){
    const m = R[name];
    if(!E.ownerOf(name)) issues.push({ code:'NO_OWNER', module:name });
    if(!m.depends) issues.push({ code:'NO_DEPS_FIELD', module:name });
    for(const d of (m.depends || [])){
      if(!R[d]) issues.push({ code:'UNKNOWN_DEP', module:name, detail:d });
      else if(level(name) >= 0 && level(d) >= 0 && level(name) < level(d)){
        issues.push({ code:'WRONG_DIRECTION', module:name, detail:name + ' → ' + d });
      }
    }
  }
  const visited = new Set(), stack = new Set();
  function dfs(n, path){
    if(stack.has(n)){ issues.push({ code:'CYCLE', module:n, detail:[...path, n].join(' → ') }); return; }
    if(visited.has(n)) return;
    visited.add(n); stack.add(n);
    for(const d of (R[n]?.depends || [])) if(R[d]) dfs(d, [...path, n]);
    stack.delete(n);
  }
  names.forEach(n=> dfs(n, []));
  return { ok:issues.length === 0, issues, layers, rules };
}
E.CONTRACT = { version:'2.38', layers, level, canUse, assertUse, rules, audit, errorCodes,
  envelope, isEnvelope, errors:Object.values(errorCodes) };
})(window);

} catch (err) {
  try { console.warn('[CHE module 61]', err && err.message ? err.message : err); } catch(_){}
}