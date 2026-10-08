try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const clone=o=>JSON.parse(JSON.stringify(o));
function graphFromEditor(session){
  if(!session||!session.graph) return fail('CHE.E.INVALID_INPUT','Brak grafu sesji edytora');
  const graph=C.STRUCTURE.canonicalize(session.graph);
  const validation=C.STRUCTURE.validate(graph);
  return validation.ok?ok({graph,validation}):fail('CHE.E.STRUCTURE_INVALID','Graf edytora jest niepoprawny',{validation});
}
function snapshot(input){
  const x=input&&input.graph?input.graph:input;
  if(!x) return fail('CHE.E.INVALID_INPUT','Brak grafu');
  const graph=C.STRUCTURE.canonicalize(x), validation=C.STRUCTURE.validate(graph);
  if(!validation.ok) return fail('CHE.E.STRUCTURE_INVALID','Niepoprawny graf',{validation});
  const layout2D=C.STRUCTURE.layout2D(graph), geometry3D=C.STRUCTURE.geometry3D(graph);
  return ok({graph:clone(graph),validation,layout2D:layout2D?.value||null,geometry3D:geometry3D?.value||null,
    source:'CHE.STRUCTURE',canonical:true,schemaVersion:E.schemaVersion||'2.42'});
}
function project(input){return snapshot(input);}
function commit(session,mutator){
  if(!session||!session.graph||typeof mutator!=='function') return fail('CHE.E.INVALID_INPUT','Niepoprawna sesja lub mutator');
  const before=clone(session.graph), result=mutator(session);
  const after=C.STRUCTURE.canonicalize(session.graph), validation=C.STRUCTURE.validate(after);
  if(!validation.ok){session.graph=before;C.EDITOR?.validate?.(session);return fail('CHE.E.STRUCTURE_INVALID','Zmiana odrzucona przez walidator',{validation});}
  session.graph=after;
  return ok({changed:JSON.stringify(before)!==JSON.stringify(after),graph:clone(after),validation});
}
C.UI_BRIDGE={version:'2.42',graphFromEditor,snapshot,project,commit};

function cvMolecule(graph){
  const gph=C.STRUCTURE.canonicalize(graph), v=C.STRUCTURE.validate(gph);
  if(!v.ok) return fail('CHE.E.STRUCTURE_INVALID','Niepoprawny graf');
  const rep=C.REPRESENTATION?.representations?.(gph)?.value||{};
  const fg=C.STRUCTURE.detectFunctionalGroups(gph)?.value||[];
  const geom=C.STRUCTURE.geometry3D(gph)?.value||null;
  return ok({type:'molecule',id:gph.id,formula:rep.formula?.formula||C.RECONSTRUCT?.formula?.(gph)?.formula||null,
    charge:gph.charge||0,atomCount:gph.atoms.length,bondCount:gph.bonds.length,
    functionalGroups:fg,geometry:geom,representation:rep,source:'CHE.STRUCTURE'});
}
function cvAtom(atom){
  if(!atom||!atom.element) return fail('CHE.E.INVALID_INPUT','Brak atomu');
  const a=C.ATOM?.build?.(atom.element); if(!a) return fail('CHE.E.DATA_NOT_FOUND','Brak danych atomu',{element:atom.element});
  return ok({type:'atom',element:atom.element,formalCharge:Number(atom.formalCharge||atom.charge||0),atomic:a,source:'CHE.ATOM'});
}
function cvSubstance(id){
  const x=C.DATA?.SUBSTANCES?.[id]||C.PROFILE?.substance?.(id); if(!x) return fail('CHE.E.DATA_NOT_FOUND','Brak substancji',{id});
  return ok({type:'substance',id,data:clone(x),source:'CHE.DATA/CHE.PROFILE'});
}
function cvGroup(graph,type){
  const fg=C.STRUCTURE.detectFunctionalGroups(graph)?.value||[];
  const hits=type?fg.filter(x=>x.type===type):fg;
  return ok({type:'functional-group',groupType:type||null,groups:hits,source:'CHE.STRUCTURE'});
}
C.CV={version:'2.42',molecule:cvMolecule,atom:cvAtom,substance:cvSubstance,group:cvGroup};

function educationalViews(graph){
  const snap=snapshot(graph); if(!snap.ok) return snap;
  const gph=snap.value.graph;
  return ok({source:'CHE.STRUCTURE',graph:clone(gph),views:{
    cv:C.CV.molecule(gph).value,
    '2d':snap.value.layout2D,
    '3d':snap.value.geometry3D,
    orbitals:gph.atoms.map(a=>C.ELECTRONIC_MODEL?.atom?.(a.element)?.value||null),
    reaction:null
  }});
}
C.EDUCATIONAL_VIEWS={version:'2.42',fromGraph:educationalViews,fromReaction:function(reaction){
  const r=reaction||{}, mapping=C.MAPPING?.mapReaction?.(r.reactants||[],r.products||[])||null;
  return ok({source:'CHE.REACTION',reaction:clone(r),mapping:mapping?.value||mapping,reactionValidation:C.REACTION_VALIDATOR?.validate?.(r)?.value||null});
}};

function legacyAudit(){
  const checks=[], add=(id,name,ok,detail)=>checks.push({id,name,ok:!!ok,detail:detail||''});
  add('LEGACY-001','canonical graph owner',C.STRUCTURE&&typeof C.STRUCTURE.canonicalize==='function');
  add('LEGACY-002','editor nie zapisuje bezpośrednio DATA',C.EDITOR&&typeof C.EDITOR.create==='function');
  add('LEGACY-003','wspólny 2D z STRUCTURE',typeof C.STRUCTURE?.layout2D==='function');
  add('LEGACY-004','wspólny 3D z STRUCTURE',typeof C.STRUCTURE?.geometry3D==='function');
  add('LEGACY-005','wspólne CV z API',typeof C.CV?.molecule==='function');
  add('LEGACY-006','model elektronowy centralny',typeof C.ELECTRONIC_MODEL?.atom==='function');
  add('LEGACY-007','reakcja korzysta z mappingu/validatora',typeof C.MAPPING?.mapReaction==='function'&&typeof C.REACTION_VALIDATOR?.validate==='function');
  add('LEGACY-008','brak drugiego właściciela grafu',!E.registry||Object.values(E.registry).filter(x=>x.owner==='CHE.STRUCTURE').length===1);
  return {ok:checks.every(x=>x.ok),checks};
}
C.LEGACY_AUDIT={version:'2.42',run:legacyAudit};

if(E.registry){
  E.registry.UI_BRIDGE={layer:'SERVICE',owner:'CHE.UI_BRIDGE',role:'most edytora z kanonicznym grafem i projekcjami',depends:['EDITOR','STRUCTURE','GEOMETRY']};
  E.registry.CV={layer:'SERVICE',owner:'CHE.CV',role:'wspólne CV atomu, molekuły, substancji i grupy',depends:['STRUCTURE','ATOM','PROFILE','REPRESENTATION']};
  E.registry.EDUCATIONAL_VIEWS={layer:'SERVICE',owner:'CHE.EDUCATIONAL_VIEWS',role:'projekcje edukacyjne ze wspólnego modelu',depends:['STRUCTURE','ELECTRONIC_MODEL','MAPPING','REACTION_VALIDATOR']};
  E.registry.REACTION_VALIDATOR=E.registry.REACTION_VALIDATOR||{layer:'DOMAIN',owner:'CHE.REACTION_VALIDATOR',role:'walidacja reakcji, bilansu, mappingu i transformacji',depends:['STRUCTURE','VALIDATOR','TRANSFORM']};
  E.registry.LEGACY_AUDIT={layer:'META',owner:'CHE.LEGACY_AUDIT',role:'kontrola migracji legacy bez duplikowania modelu',depends:['STRUCTURE','EDITOR','CV']};
}
if(E.modules){E.modules.UI_BRIDGE='2.42';E.modules.CV='2.42';E.modules.EDUCATIONAL_VIEWS='2.42';E.modules.LEGACY_AUDIT='2.42';}
E.version='2.42'; E.contractVersion='2.42'; E.schemaVersion='2.42';

const oldAudit=E.AUDIT?.run;
if(typeof oldAudit==='function'&&!E.AUDIT.__dWrapped){
  const base=oldAudit.bind(E.AUDIT);
  E.AUDIT.run=function(){
    const r=base();
    const d=[];
    const add=(id,name,ok,detail)=>d.push({id,group:'pacD',name,ok:!!ok,detail:detail||''});
    const ST=C.STRUCTURE, EDI=C.EDITOR;
    const h=ST.createMolecule({id:'d-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
    const ed=EDI.create(h,{id:'d-editor'}), snap0=C.UI_BRIDGE.snapshot(ed.graph);
    add('PACD-001','editor snapshot canonical',snap0.ok&&snap0.value.canonical===true);
    add('PACD-002','2D i 3D z tego samego snapshotu',snap0.ok&&!!snap0.value.layout2D&&!!snap0.value.geometry3D);
    const cv=C.CV.molecule(h); add('PACD-003','CV molekuły z grafu',cv.ok&&cv.value.formula==='H2O');
    const av=C.CV.atom({element:'O'}); add('PACD-004','CV atomu z CHE.ATOM',av.ok&&av.value.atomic?.Z===8);
    const gv=C.CV.group(h); add('PACD-005','CV grupy z CHE.STRUCTURE',gv.ok&&Array.isArray(gv.value.groups));
    const ev=C.EDUCATIONAL_VIEWS.fromGraph(h); add('PACD-006','widoki edukacyjne wspólnego modelu',ev.ok&&ev.value.graph.canonical===true);
    const u=C.UI_BRIDGE.commit(ed,s=>EDI.addAtom(s,{element:'H',id:'H3'})); add('PACD-007','commit walidowany',u.ok&&u.value.graph.atoms.length===4);
    const bad=C.UI_BRIDGE.commit(ed,s=>{s.graph.atoms.push({id:'BAD',element:'Xx'});}); add('PACD-008','commit odrzuca zły graf',bad.ok===false);
    const lg=C.LEGACY_AUDIT.run(); add('PACD-009','legacy audit bez duplikatu ownera',lg.ok);
    const reg=E.CONTRACT?.audit?.(); add('PACD-010','registry po D bez cykli',!!reg?.ok,reg?.issues?.length?JSON.stringify(reg.issues):'');
    const all=(r.groups?Object.values(r.groups).flat():[]).concat(d);
    r.groups=r.groups||{}; r.groups.pacD=d; r.summary=r.summary||{}; r.summary.pacD={total:d.length,failed:d.filter(x=>!x.ok).length};
    r.pacD=d; r.legacy=lg; r.ok=!!r.ok&&d.every(x=>x.ok)&&lg.ok&&!!reg?.ok; r.version=E.version; r.contractVersion=E.contractVersion; r.dataVersion=E.dataVersion;
    E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};
    return r;
  };
  E.AUDIT.__dWrapped=true;
}
if(E.PUBLIC){E.PUBLIC.version='2.42';E.PUBLIC.cv=C.CV;E.PUBLIC.uiBridge=C.UI_BRIDGE;E.PUBLIC.educationalViews=C.EDUCATIONAL_VIEWS;}
})(window);

} catch (err) {
  try { console.warn('[CHE module 64]', err && err.message ? err.message : err); } catch(_){}
}

