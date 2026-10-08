try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const E = C.ENGINE = C.ENGINE || {};
function resolveObject(q){
  const type = String(q.type || '').toLowerCase();
  const id = String(q.id || '');
  if(!type || !id) return null;
  if(type === 'atom') return C.PROFILE?.atom?.(id);
  if(type === 'molecule') return C.MOLECULE?.canonical?.(id);
  if(type === 'reaction') return C.REACTION?.get?.(id);
  if(type === 'substance') return C.PROFILE?.substance?.(id);
  if(type === 'nucleus') return C.NUCLEUS?.build?.(id, q.massNumber);
  if(type === 'isotope') return C.ISOTOPE?.get?.(id, q.massNumber);
  if(type === 'ion') return C.ION?.build?.(id, q.charge);
  if(type === 'spectrum') return C.SPECTRA?.atomic?.(id);
  return null;
}
function relations(type, id, data){
  const out = [];
  if(type === 'molecule' && data){
    (data.atoms || []).forEach(a=> out.push({ from:id, to:a.element, type:'ATOM_IN_MOLECULE', owner:'CHE.MOLECULE', meta:{atomId:a.id} }));
    (C.PROFILE?.substancesForFormula?.(data.formula) || []).forEach(s=> out.push({ from:id, to:s.id, type:'PROFILE_OF', owner:'CHE.PROFILE' }));
    (C.PROFILE?.reactionsForFormula?.(data.formula) || []).forEach(r=> out.push({ from:id, to:r.id, type:'MOLECULE_IN_REACTION', owner:'CHE.PROFILE' }));
  }
  if(type === 'reaction' && data){
    (data.reactants || []).forEach(x=> out.push({ from:id, to:x.formula, type:'REACTION_USES_SUBSTANCE', owner:'CHE.REACTION', meta:{side:'reactant',coef:x.coef} }));
    (data.products || []).forEach(x=> out.push({ from:id, to:x.formula, type:'REACTION_USES_SUBSTANCE', owner:'CHE.REACTION', meta:{side:'product',coef:x.coef} }));
  }
  if(type === 'substance' && data){
    (C.PROFILE?.reactionsForFormula?.(data.formula) || []).forEach(r=> out.push({ from:id, to:r.id, type:'SUBSTANCE_IN_REACTION', owner:'CHE.PROFILE' }));
  }
  return out;
}
function object(q){
  const data = resolveObject(q);
  if(!data) return { ok:false, error:{ code:'CHE.E.DATA_NOT_FOUND', type:q.type, id:q.id } };
  const conditions = C.STATE?.normalize?.(q.conditions || {}) || null;
  return { ok:true, type:q.type, id:q.id, version:E.version,
    source:{ atom:'CHE.DATA', molecule:'CHE.MOLECULE', reaction:'CHE.REACTION', substance:'CHE.DATA',
      nucleus:'CHE.NUCLEUS', isotope:'CHE.ISOTOPE', ion:'CHE.ION', spectrum:'CHE.SPECTRA' }[q.type] || null,
    data, relations:relations(q.type, q.id, data), conditions,
    snapshot:{ dataVersion:E.dataVersion, engineVersion:E.version } };
}
function query(domain, operation, input){
  const api = C[domain];
  if(!api || typeof api[operation] !== 'function') return { ok:false, error:{ code:'CHE.E.UNSUPPORTED', domain, operation } };
  try { return { ok:true, domain, operation, result:api[operation](input) }; }
  catch(e){ return { ok:false, error:{ code:'CHE.E.INTERNAL', domain, operation, detail:String(e.message||e) } }; }
}
const listeners = {};
const events = {
  on(name, fn){ if(typeof fn !== 'function') return ()=>{}; (listeners[name] = listeners[name] || []).push(fn); return ()=>{ listeners[name] = (listeners[name]||[]).filter(x=> x !== fn); }; },
  emit(name, payload, source){ const ev = { name, payload, source:source||'ENGINE', time:new Date().toISOString() }; (listeners[name]||[]).forEach(fn=>{ try { fn(ev); } catch(_){} }); return ev; },
  clear(name){ if(name) delete listeners[name]; else Object.keys(listeners).forEach(k=> delete listeners[k]); }
};
const state = { selected:null, history:[], context:{} };
const session = {
  select(type, id, source){ const prev = state.selected; const next = { type, id }; if(prev) state.history.push(prev); state.selected = next; events.emit('selection.changed', next, source || 'UI'); return next; },
  back(){ const prev = state.history.pop() || null; state.selected = prev; events.emit('selection.changed', prev, 'SESSION'); return prev; },
  reset(){ state.selected = null; state.history = []; state.context = {}; events.emit('session.reset', {}, 'SESSION'); },
  get state(){ return { ...state }; }
};
function structural(input){ return C.STRUCTURE?.createMolecule?.(input); }
function addBond(input,bond){ return C.STRUCTURE?.addBond?.(input,bond); }
function validateMolecule(input){ return C.STRUCTURE?.validate?.(input); }
function detectFunctionalGroups(input){ return C.STRUCTURE?.detectFunctionalGroups?.(input); }
function createReaction(input){ return C.TRANSFORM?.createReaction?.(input); }
function validateReaction(input,options){ return C.TRANSFORM?.validateReaction?.(input,options); }
function transferAtom(input){ return C.TRANSFORM?.transferAtom?.(input?.molecule,input?.atomId,input?.toMolecule); }
function transferProton(input){ return C.TRANSFORM?.transferProton?.(input?.molecule,input?.fromAtomId,input?.toAtomId); }
function applyReaction(molecule, transformation){ return C.TRANSFORM?.applyReaction?.(molecule, transformation); }
function exportJSON(input){ try { return { ok:true, json:JSON.stringify(input,null,2) }; } catch(e){ return { ok:false, error:{code:'CHE.E.INTERNAL',message:String(e.message||e)} }; } }
function importJSON(json){ try { return { ok:true, value:JSON.parse(String(json)) }; } catch(e){ return { ok:false, error:{code:'CHE.E.INVALID_INPUT',message:String(e.message||e)} }; } }
E.PUBLIC = { version:'2.30', object, query, events, session, audit:()=> E.AUDIT.run(),
  createAtom: C.STRUCTURE?.createAtom, createMolecule: structural, addBond,
  validateMolecule, detectFunctionalGroups, createReaction, applyReaction,
  editor: C.EDITOR, reconstruct: C.RECONSTRUCT,
  validator: C.VALIDATOR, isomorphism: C.ISOMORPHISM, mapping: C.MAPPING,
  reactionValidator: C.REACTION_VALIDATOR,
  export: exportJSON, import: importJSON
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 63]', err && err.message ? err.message : err); } catch(_){}
}

