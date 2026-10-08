try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, clone=o=>JSON.parse(JSON.stringify(o));
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const canonical=m=>C.STRUCTURE.canonicalize(m||{});
const atomId=(prefix='atom')=>`${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`;
const bondId=()=>atomId('bond');
function snapshot(state){return clone(state.graph);}
function recalc(state){state.graph=canonical(state.graph);state.validation=C.STRUCTURE.validate(state.graph);state.functionalGroups=C.STRUCTURE.detectFunctionalGroups(state.graph).value||[];return state;}
function pushHistory(state){state.history=state.history.slice(0,state.cursor+1);state.history.push(snapshot(state));if(state.history.length>100)state.history.shift();state.cursor=state.history.length-1;}
function restore(state,gph){state.graph=canonical(gph);state.validation=C.STRUCTURE.validate(state.graph);state.functionalGroups=C.STRUCTURE.detectFunctionalGroups(state.graph).value||[];return state;}
function create(input,options){
 const base=canonical(input||{id:'editor-draft',atoms:[],bonds:[]});
 const state={id:String(options?.id||`editor-${Date.now()}`),base:clone(base),graph:clone(base),history:[clone(base)],cursor:0,validation:null,functionalGroups:[],selection:{atomId:null,bondId:null},meta:{source:options?.source||'CHE.EDITOR',createdAt:new Date().toISOString()}};
 return recalc(state);
}
function get(state){return state?clone(state.graph):null;}
function addAtom(state,input){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const a=C.STRUCTURE.createAtom({...input,id:input?.id||atomId('atom')});if(a?.ok===false)return a;const gph=clone(state.graph);gph.atoms.push(a.value||a);if(!gph.atoms.at(-1).position2D){const i=gph.atoms.length-1;gph.atoms.at(-1).position2D={x:(i%5)*1.4,y:-Math.floor(i/5)*1.4};}state.graph=canonical(gph);pushHistory(state);recalc(state);state.selection.atomId=state.graph.atoms.at(-1).id;return ok({state,atom:clone(state.graph.atoms.at(-1))});}
function removeAtom(state,id){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const key=String(id), gph=clone(state.graph), atom=gph.atoms.find(a=>String(a.id)===key);if(!atom)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono atomu',{atomId:id});gph.atoms=gph.atoms.filter(a=>String(a.id)!==key);gph.bonds=gph.bonds.filter(b=>String(b.atomA)!==key&&String(b.atomB)!==key);state.graph=canonical(gph);pushHistory(state);recalc(state);if(state.selection.atomId===key)state.selection.atomId=null;return ok({state,removed:clone(atom)});}
function addBond(state,input){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const r=C.STRUCTURE.addBond(state.graph,{...input,id:input?.id||bondId()});if(r?.ok===false)return r;state.graph=canonical(r.value);pushHistory(state);recalc(state);state.selection.bondId=state.graph.bonds.at(-1)?.id||null;return ok({state,bond:clone(state.graph.bonds.at(-1))});}
function removeBond(state,id){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const key=String(id), gph=clone(state.graph), i=gph.bonds.findIndex(b=>String(b.id)===key);if(i<0)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono wiązania',{bondId:id});const removed=gph.bonds.splice(i,1)[0];state.graph=canonical(gph);pushHistory(state);recalc(state);if(state.selection.bondId===key)state.selection.bondId=null;return ok({state,removed});}
function setBondOrder(state,id,order){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const n=Number(order);if(![1,1.5,2,3].includes(n))return fail('CHE.E.INVALID_INPUT','Nieobsługiwany rząd wiązania',{order});const gph=clone(state.graph), b=gph.bonds.find(x=>String(x.id)===String(id));if(!b)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono wiązania',{bondId:id});b.order=n;b.type=n===1?'single':n===1.5?'aromatic':n===2?'double':'triple';state.graph=canonical(gph);pushHistory(state);recalc(state);return ok({state,bond:clone(b)});}
function setCharge(state,id,charge){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const a=state.graph.atoms.find(x=>String(x.id)===String(id));if(!a)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono atomu',{atomId:id});const gph=clone(state.graph), x=gph.atoms.find(a=>String(a.id)===String(id));x.formalCharge=Number(charge)||0;x.charge=x.formalCharge;state.graph=canonical(gph);pushHistory(state);recalc(state);return ok({state,atom:clone(x)});}
function undo(state){if(!state||state.cursor<=0)return ok({state,changed:false});state.cursor--;restore(state,state.history[state.cursor]);return ok({state,changed:true});}
function redo(state){if(!state||state.cursor>=state.history.length-1)return ok({state,changed:false});state.cursor++;restore(state,state.history[state.cursor]);return ok({state,changed:true});}
function reset(state){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');state.cursor=0;restore(state,state.history[0]);return ok({state,changed:true});}
function validate(state){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');recalc(state);return ok(state.validation);}
function functionalGroups(state){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');recalc(state);return ok(state.functionalGroups);}
function formula(state){return state?.graph?.formula||'';}
function reaction(state,options){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');const product=canonical(state.graph), reactant=canonical(state.base), changes=C.TRANSFORM.diff(reactant,product), r=C.TRANSFORM.createReaction({id:options?.id||`editor-rx-${Date.now()}`,type:'graph-edit',reactants:[reactant],products:[product],changes,conditions:C.TRANSFORM.conditions(options?.conditions||{}),annotations:[{type:'EDITOR_DIFF',source:'CHE.EDITOR'}]});return C.TRANSFORM.validateReaction(r,options?.validationOptions||{});}
function exportData(state){if(!state)return fail('CHE.E.INVALID_INPUT','Brak sesji edytora');return ok({schemaVersion:'2.19',editorId:state.id,molecule:canonical(state.graph),base:canonical(state.base),diff:C.TRANSFORM.diff(state.base,state.graph),validation:state.validation,functionalGroups:state.functionalGroups});}
function importData(data,options){const x=data?.molecule||data?.graph||data;if(!x)return fail('CHE.E.INVALID_INPUT','Brak grafu do importu');return ok(create(x,options));}
C.EDITOR={version:'2.18',create,get,addAtom,removeAtom,addBond,removeBond,setBondOrder,setCharge,undo,redo,reset,validate,functionalGroups,formula,reaction,export:exportData,import:importData};
})(window);

} catch (err) {
  try { console.warn('[CHE module 40]', err && err.message ? err.message : err); } catch(_){}
}

