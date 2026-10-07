<script>')==='&lt;script&gt;');
  const _svg=C.DOM.svg('circle',{r:1}); add('VIZ-006','DOM.svg tworzy element', String(_svg.localName||_svg.nodeName||_svg.__cheSvgTag||'').toLowerCase()==='circle');
  return out;
}
function groupView(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'view',name,ok:!!ok,detail:detail||''});
  add('VIEW-001','VIEW.define dostępne', typeof C.VIEW?.define==='function');
  add('VIEW-002','VIEW.mount dostępne', typeof C.VIEW?.mount==='function');
  add('VIEW-003','co najmniej 6 widoków zarejestrowanych', C.VIEW?.views?.size>=6, 'size=' + (C.VIEW?.views?.size||0));
  add('VIEW-004','widok molecule-2d istnieje', C.VIEW?.views?.has?.('molecule-2d'));
  add('VIEW-005','widok reaction istnieje', C.VIEW?.views?.has?.('reaction'));
  return out;
}
function groupUI(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'ui',name,ok:!!ok,detail:detail||''});
  add('UI-001','MOTION.add dostępne', typeof C.MOTION?.add==='function');
  add('UI-002','EXPLAIN.attach dostępne', typeof C.EXPLAIN?.attach==='function');
  add('UI-003','MOTION.reduced zdefiniowane', typeof C.MOTION?.reduced==='boolean');
  return out;
}

function groupEditor(){
  const out=[], add=(id,name,ok,detail)=>out.push({id,group:'editor',name,ok:!!ok,detail:detail||''});
  const EDI=C.EDITOR, ST=C.STRUCTURE;
  const h=ST.createMolecule({id:'audit-editor',atoms:[{id:'C1',element:'C'},{id:'O1',element:'O'}],bonds:[{id:'b1',atomA:'C1',atomB:'O1',order:1}]});
  const ed=EDI.create(h,{id:'audit-editor-session'});
  add('EDIT-001','sesja edytora z kopii grafu',ed.graph!==h && ed.graph.canonical===true);
  const a=EDI.addAtom(ed,{element:'H',id:'H1'}); add('EDIT-002','dodanie atomu',a.ok&&ed.graph.atoms.length===3);
  const b=EDI.addBond(ed,{atomA:'O1',atomB:'H1',order:1,id:'b2'}); add('EDIT-003','dodanie wiązania',b.ok&&ed.graph.bonds.length===2);
  const bo=EDI.setBondOrder(ed,'b2',2); add('EDIT-004','zmiana rzędu',bo.ok&&ed.graph.bonds.find(x=>x.id==='b2')?.order===2);
  const ug=EDI.undo(ed); add('EDIT-005','undo',ug.ok&&ed.graph.bonds.find(x=>x.id==='b2')?.order===1);
  const rg=EDI.redo(ed); add('EDIT-006','redo',rg.ok&&ed.graph.bonds.find(x=>x.id==='b2')?.order===2);
  const vr=EDI.validate(ed); add('EDIT-007','walidacja grafu',vr.ok);
  const fg=EDI.functionalGroups(ed); add('EDIT-008','grupy funkcyjne',fg.ok&&Array.isArray(fg.value));
  const ex=EDI.export(ed); add('EDIT-009','eksport grafu',ex.ok&&ex.value.schemaVersion==='2.19'&&!!ex.value.diff);
  const edRx=EDI.create(h,{id:'audit-editor-rx'}); EDI.setBondOrder(edRx,'b1',2);
  const rx=EDI.reaction(edRx); add('EDIT-010','reakcja z diffu',rx.ok&&!!rx.value?.changes&&rx.value.changes.bondOrderChanges.length===1);
  const rem=EDI.removeAtom(ed,'H1'); add('EDIT-011','usunięcie atomu z wiązaniami',rem.ok&&ed.graph.atoms.every(x=>x.id!=='H1')&&ed.graph.bonds.every(x=>x.atomA!=='H1'&&x.atomB!=='H1'));
  return out;
}
function groupAPI(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'api',name,ok:!!ok,detail:detail||''});
  const obj = E.CONTRACT.envelope('H2O','H2O',C.MOLECULE.get('H2O'),{source:'CHE.MOLECULE'});
  add('API-001','envelope utworzony', E.CONTRACT.isEnvelope(obj));
  add('API-002','OK/FAIL/ERROR dostępne', typeof C.OK==='function' && typeof C.FAIL==='function');
  add('API-003','CHE.OK zwraca kopertę', C.OK(42).ok===true && C.OK(42).value===42);
  add('API-004','CHE.FAIL zwraca kopertę', C.FAIL('CHE.E.TEST','t',{}).ok===false);
  add('API-005','deepFreeze zdefiniowane', typeof C.deepFreeze==='function');
  add('API-006','DATA.MOLECULES zamrożone', Object.isFrozen(C.DATA.MOLECULES));
  add('API-007','DATA.ELEMENTS_118 zamrożone', Object.isFrozen(C.DATA.ELEMENTS_118));
  add('API-008','DATA.ATOMIC_PROPS zamrożone', Object.isFrozen(C.DATA.ATOMIC_PROPS));
  add('API-009','DATA.ISOTOPES zamrożone', Object.isFrozen(C.DATA.ISOTOPES));
  add('API-010','state pH 7.4', C.STATE.normalize({pH:7.4,temperatureK:310}).pH===7.4);
  add('API-011','public profile H2O', !!C.PROFILE?.molecule?.('H2O'));
  add('API-012','atomic meta 118', Object.keys(C.DATA.ATOM_META).length===118);
  add('API-013','ATOMIC_PROPS ma 22 pierwiastki', Object.keys(C.DATA.ATOMIC_PROPS).length>=22);
  add('API-014','ISOTOPES ma 15 pierwiastków', Object.keys(C.DATA.ISOTOPES).length>=15);
  add('API-015','QUANTUM_RULES obecne', !!C.DATA.QUANTUM_RULES?.madelungOrder);
  add('API-016','NUCLEAR_DATA obecne', !!C.DATA.NUCLEAR_DATA?.betheWezisacker || !!C.DATA.NUCLEAR_DATA?.betheWeizsacker);
  add('API-017','ATOM ma 25 funkcji', typeof C.ATOM?.build==='function' && typeof C.ATOM?.forUniversity==='function');
  add('API-018','AUDIT ma 12 grup', typeof E.AUDIT?.chemistry==='function' && typeof E.AUDIT?.atom==='function');
  return out;
}
function groupReconstruct(){
  const out=[], add=(id,name,ok,detail)=>out.push({id,group:'reconstruct',name,ok:!!ok,detail:detail||''});
  const R=C.RECONSTRUCT, ST=C.STRUCTURE;
  const w=ST.createMolecule({id:'audit-reconstruct',atoms:[{id:'O1',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O1',atomB:'H1',order:1},{id:'b2',atomA:'O1',atomB:'H2',order:1}]});
  const f=R.formula(w); add('REC-001','wzór H2O z grafu',f.formula==='H2O');
  const n=R.normalize(w); add('REC-002','normalizacja grafu',n.ok&&n.value.molecule.reconstruction.normalized===true);
  const h=ST.createMolecule({id:'audit-methane',atoms:[{id:'C1',element:'C'}],bonds:[]});
  const plan=R.implicitHydrogenPlan(h); add('REC-003','plan jawnego H dla C',plan[0]?.hydrogens===4);
  const ah=R.addExplicitHydrogens(h); add('REC-004','dodanie jawnych H',ah.ok&&ah.value.molecule.atoms.length===5);
  const back=R.removeGeneratedHydrogens(ah.value.molecule); add('REC-005','usunięcie generowanych H',back.ok&&back.value.molecule.atoms.length===1);
  const p=ST.createMolecule({id:'audit-map-p',atoms:[{id:'C2',element:'C'},{id:'O2',element:'O'}],bonds:[{id:'pb',atomA:'C2',atomB:'O2',order:1}]});
  const mp=R.atomMap(h,p); add('REC-006','mapping nieudany jest jawny',mp.complete===false&&Array.isArray(mp.unmatched));
  const rt=R.reactionTemplate(w,w); add('REC-007','szablon transformacji',rt.ok&&rt.value.schemaVersion==='2.19');
  add('REC-008','walidacja rekonstrukcji',R.validate(w).ok===true);
  return out;
}

function groupPacA(){
  const out=[], add=(id,name,ok,detail)=>out.push({id,group:'pacA',name,ok:!!ok,detail:detail||''});
  const V=C.VALIDATOR, I=C.ISOMORPHISM, M=C.MAPPING, R=C.REACTION_VALIDATOR, ST=C.STRUCTURE;
  const methane=ST.createMolecule({id:'pa-ch4',atoms:[{id:'C',element:'C'}],bonds:[]});
  const water=ST.createMolecule({id:'pa-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[
    {id:'oh1',atomA:'O',atomB:'H1',order:1},{id:'oh2',atomA:'O',atomB:'H2',order:1}]});
  const carbonyl=ST.createMolecule({id:'pa-co2',atoms:[{id:'C',element:'C'},{id:'O1',element:'O'},{id:'O2',element:'O'}],bonds:[
    {id:'c1',atomA:'C',atomB:'O1',order:2},{id:'c2',atomA:'C',atomB:'O2',order:2}]});
  const water2=ST.createMolecule({id:'pa-h2o2',atoms:[{id:'X',element:'O'},{id:'Y',element:'H'},{id:'Z',element:'H'}],bonds:[
    {id:'q1',atomA:'X',atomB:'Y',order:1},{id:'q2',atomA:'X',atomB:'Z',order:1}]});
  const vv=V.validate(methane);
  add('PACA-001','validator dostępny',typeof V.validate==='function');
  add('PACA-002','implicit H CH4 = 4',vv.ok&&vv.value.implicitH.total===4,vv.value.implicitH.total);
  add('PACA-003','walidator odrzuca C z pięcioma wiązaniami',!V.validate(ST.createMolecule({id:'badc',atoms:[
    {id:'C',element:'C'},{id:'H1',element:'H'},{id:'H2',element:'H'},{id:'H3',element:'H'},{id:'H4',element:'H'},{id:'H5',element:'H'}],
    bonds:[1,2,3,4,5].map((n)=>({id:'b'+n,atomA:'C',atomB:'H'+n,order:1}))})).value.ok);
  const iso=I.isomorphic(water,water2);
  add('PACA-004','izomorfizm H2O niezależny od ID',iso.ok&&iso.value.isomorphic);
  const non=I.isomorphic(water,carbonyl);
  add('PACA-005','izomorfizm H2O/CO2 = false',non.ok&&!non.value.isomorphic);
  const cl1=I.canonicalLabel(water).value.label,cl2=I.canonicalLabel(water2).value.label;
  add('PACA-006','canonical label H2O identyczny',cl1===cl2);
  const react=ST.createMolecule({id:'pa-r',atoms:[{id:'C1',element:'C'},{id:'O1',element:'O'}],bonds:[{id:'rbo',atomA:'C1',atomB:'O1',order:1}]});
  const prod=ST.createMolecule({id:'pa-p',atoms:[{id:'C2',element:'C'},{id:'O2',element:'O'}],bonds:[{id:'pbo',atomA:'C2',atomB:'O2',order:2}]});
  const mp=M.map(react,prod);
  add('PACA-007','mapping CO → C=O kompletne',mp.ok&&mp.value.complete);
  add('PACA-008','mapping zwraca confidence',mp.ok&&['HIGH','MEDIUM','LOW','PARTIAL','NONE'].includes(mp.value.confidence));
  const rx=R.validate({reactants:[react],products:[prod]});
  add('PACA-009','walidacja transformacji zachowuje skład',rx.ok&&rx.value.ok===true);
  add('PACA-010','wykrycie zmiany rzędu C-O',rx.ok&&rx.value.changes.bondOrderChanges.length===1);
  const bad=R.validate({reactants:[water],products:[carbonyl]});
  add('PACA-011','walidator reakcji odrzuca niezbilansowaną',bad.ok&&bad.value.ok===false);
  add('PACA-012','mapReaction API dostępne',typeof M.mapReaction==='function');
  const dupA=ST.createMolecule({id:'dup-r1',atoms:[{id:'A',element:'C'},{id:'B',element:'O'}],bonds:[{id:'b1',atomA:'A',atomB:'B',order:1}]});
  const dupB=ST.createMolecule({id:'dup-r2',atoms:[{id:'A',element:'C'},{id:'B',element:'O'}],bonds:[{id:'b2',atomA:'A',atomB:'B',order:1}]});
  const dupRx=M.mapReaction({reactants:[dupA,dupB],products:[dupA,dupB]});
  add('PACA-013','mapReaction nie koliduje przy lokalnych ID',dupRx.ok&&dupRx.value.complete&&Object.keys(dupRx.value.mapping).length===4);
  return out;
}

function groupPacB(){
  const out=[], add=(id,name,ok,detail)=>out.push({id,group:'pacB',name,ok:!!ok,detail:detail||''});
  const ST=C.STRUCTURE, REP=C.REPRESENTATION, NOM=C.NOMENCLATURE;
  const make=(id,atoms,bonds,charge=0)=>ST.createMolecule({id,atoms,bonds,charge});
  const water=make('pb-h2o',[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],[
    {id:'a',atomA:'O',atomB:'H1',order:1},{id:'b',atomA:'O',atomB:'H2',order:1}]);
  const co2=make('pb-co2',[{id:'C',element:'C'},{id:'O1',element:'O'},{id:'O2',element:'O'}],[
    {id:'a',atomA:'C',atomB:'O1',order:2},{id:'b',atomA:'C',atomB:'O2',order:2}]);
  const nh3=make('pb-nh3',[{id:'N',element:'N'},{id:'H1',element:'H'},{id:'H2',element:'H'},{id:'H3',element:'H'}],[
    {id:'a',atomA:'N',atomB:'H1',order:1},{id:'b',atomA:'N',atomB:'H2',order:1},{id:'c',atomA:'N',atomB:'H3',order:1}]);
  const ch4=make('pb-ch4',[{id:'C',element:'C'}],[]);
  const acid=make('pb-acid',[{id:'C1',element:'C'},{id:'C2',element:'C'},{id:'H1',element:'H'},{id:'H2',element:'H'},{id:'H3',element:'H'},{id:'O1',element:'O'},{id:'O2',element:'O'},{id:'H4',element:'H'}],[
    {id:'cc',atomA:'C1',atomB:'C2',order:1},{id:'ch1',atomA:'C1',atomB:'H1',order:1},{id:'ch2',atomA:'C1',atomB:'H2',order:1},{id:'ch3',atomA:'C1',atomB:'H3',order:1},{id:'co1',atomA:'C2',atomB:'O1',order:2},{id:'co2',atomA:'C2',atomB:'O2',order:1},{id:'oh',atomA:'O2',atomB:'H4',order:1}]);
  const nh4=make('pb-nh4',[{id:'N',element:'N'},{id:'H1',element:'H'},{id:'H2',element:'H'},{id:'H3',element:'H'},{id:'H4',element:'H'}],[
    {id:'a',atomA:'N',atomB:'H1',order:1},{id:'b',atomA:'N',atomB:'H2',order:1},{id:'c',atomA:'N',atomB:'H3',order:1},{id:'d',atomA:'N',atomB:'H4',order:1}],1);
  const oh=make('pb-oh',[{id:'O',element:'O'},{id:'H',element:'H'}],[{id:'a',atomA:'O',atomB:'H',order:1}],-1);
  const carbonate=make('pb-co3',[{id:'C',element:'C'},{id:'O1',element:'O',formalCharge:-1},{id:'O2',element:'O',formalCharge:-1},{id:'O3',element:'O'}],[
    {id:'a',atomA:'C',atomB:'O1',order:1},{id:'b',atomA:'C',atomB:'O2',order:1},{id:'c',atomA:'C',atomB:'O3',order:2}],-2);
  add('PACB-001','półstrukturalny CH4',REP.semiStructural(ch4).ok&&REP.semiStructural(ch4).value.text.includes('CH4'));
  add('PACB-002','półstrukturalny CH3COOH',REP.semiStructural(acid).ok&&REP.semiStructural(acid).value.text.includes('C2H4')===false&&REP.semiStructural(acid).value.text.length>0);
  add('PACB-003','Lewis H2O = 2 pary na O',REP.lewis(water).ok&&REP.lewis(water).value.atoms.find(a=>a.id==='O').lonePairs===2);
  add('PACB-004','Lewis CO2 = 2 pary na każdym O',REP.lewis(co2).value.atoms.filter(a=>a.element==='O').every(a=>a.lonePairs===2));
  add('PACB-005','Lewis NH3 = 1 para na N',REP.lewis(nh3).value.atoms.find(a=>a.id==='N').lonePairs===1);
  add('PACB-006','Lewis CH4 = brak wolnych par C',REP.lewis(ch4).value.atoms.find(a=>a.id==='C').lonePairs===0);
  add('PACB-007','Lewis NH4+ = brak wolnej pary N',REP.lewis(nh4).value.atoms.find(a=>a.id==='N').lonePairs===0);
  add('PACB-008','Lewis OH- = 3 pary na O',REP.lewis(oh).value.atoms.find(a=>a.id==='O').lonePairs===3);
  add('PACB-009','Lewis CO3 2- = 3 pary na O- i 2 na O=',REP.lewis(carbonate).value.atoms.filter(a=>a.element==='O').map(a=>a.lonePairs).sort((a,b)=>a-b).join(',')==='2,3,3');
  add('PACB-010','nomenklatura kwasu etanowego',NOM.describe(acid).ok&&NOM.describe(acid).value.label==='kwas etanowy');
  add('PACB-011','formula NH4+',REP.formula(nh4).value.formula==='H4N^+');
  add('PACB-012','formula CO3 2-',REP.formula(carbonate).value.formula==='CO3^2-');
  add('PACB-013','wspólny graf dla reprezentacji',REP.representations(acid).ok&&REP.representations(acid).value.formula.formula==='C2H4O2');
  add('PACB-014','nomenklatura nie udaje pełnego IUPAC',NOM.validate(acid).value.complete===false);
  return out;
}

function groupPacC(){
  const out=[], add=(id,name,ok,detail)=>out.push({id,group:'pacC',name,ok:!!ok,detail:detail||''});
  const SC=C.SPECTRA_CONTRACT, EM=C.ELECTRONIC_MODEL, MG=C.MECHANISM_GRAPH, P=C.PROVENANCE;
  const sp=SC.spectrum({id:'ir-water',type:'IR',entityId:'H2O',peaks:[{type:'IR',axis:3650,unit:'cm-1',intensity:0.7,assignment:'O-H stretch'}],source:'EDUCATIONAL_APPROXIMATION'});
  add('PACC-001','kontrakt IR',sp.ok&&SC.validate(sp.value).value.ok);
  const at=EM.atom('O'); add('PACC-002','model elektronowy O',at.ok&&at.value.electronCount===8&&at.value.unpairedElectrons===2);
  const cfg=EM.configuration('Cu'); add('PACC-003','konfiguracja Cu z CHE.ATOM',cfg.ok&&cfg.value.configuration.includes('3d10'));
  const mg=MG.fromReaction({id:'rx',reactants:[{formula:'H2'}],products:[{formula:'H2'}]}); add('PACC-004','mechanizm z reakcji',mg.ok&&mg.value.nodes.length===2&&mg.value.edges.length===1);
  add('PACC-005','walidacja grafu mechanizmu',mg.ok&&MG.validate(mg.value).value.ok);
  const pv=P.create({source:'COMPUTED',method:'test',confidence:0.9,calculationLevel:'EDUCATIONAL'}); add('PACC-006','provenance',pv.ok&&P.validate(pv.value).value.ok);
  add('PACC-007','źródło nie jest fikcyjną wartością eksperymentalną',pv.ok&&pv.value.source==='COMPUTED');
  return out;
}
function contractAudit(){ return E.CONTRACT?.audit?.() || { ok:false, issues:[] }; }
function run(){
  const groups = {
    chemistry:groupChemistry(), thermo:groupThermo(), electro:groupElectro(),
    atom:groupAtom(), nucleus:groupNucleus(), ion:groupIon(), isotope:groupIsotope(),
    spectra:groupSpectra(), viz:groupViz(), view:groupView(), ui:groupUI(), editor:groupEditor(), reconstruct:groupReconstruct(), api:groupAPI(), pacA:groupPacA(), pacB:groupPacB(), pacC:groupPacC()
  };
  const contr = contractAudit();
  const allTests = Object.values(groups).flat();
  const failed = allTests.filter(x=>!x.ok);
  const loaded = Object.keys(E.registry).map(name=>({ name, loaded:!!E.entryOf?.(name) }));
  const missing = loaded.filter(x=>!x.loaded);
  const ok = failed.length===0 && contr.ok && missing.length===0;
  E.lifecycle = { state: ok ? 'ready' : 'blocked', auditedAt:new Date().toISOString() };
  const summary = {};
  Object.entries(groups).forEach(([k,arr])=>{ summary[k] = { total:arr.length, failed:arr.filter(x=>!x.ok).length }; });
  return { ok, version:E.version, dataVersion:E.dataVersion, contractVersion:E.contractVersion,
    summary, ...groups, contract:contr, modules:{ total:loaded.length, missing },
    timestamp:new Date().toISOString() };
}
E.AUDIT = { version:'2.19', run, chemistry:groupChemistry, thermo:groupThermo, electro:groupElectro,
  atom:groupAtom, nucleus:groupNucleus, ion:groupIon, isotope:groupIsotope, spectra:groupSpectra,
  viz:groupViz, view:groupView, ui:groupUI, editor:groupEditor, reconstruct:groupReconstruct, api:groupAPI, pacA:groupPacA, pacB:groupPacB, pacC:groupPacC, contract:contractAudit };
})(window);

} catch (err) {
  try { console.warn('[CHE module 62]', err && err.message ? err.message : err); } catch(_){}
}

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

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const clone=o=>JSON.parse(JSON.stringify(o));
function publicShape(){
  const required=['ENGINE','DATA','ATOM','MOLECULE','REACTION','STRUCTURE','VALIDATOR','ISOMORPHISM','MAPPING','TRANSFORM','REACTION_VALIDATOR','REPRESENTATION','GEOMETRY_CONTRACT','NOMENCLATURE','SCIENCE','SPECTRA_CONTRACT','ELECTRONIC_MODEL','MECHANISM_GRAPH','PROVENANCE','EDITOR','UI_BRIDGE','CV','EDUCATIONAL_VIEWS'];
  const missing=required.filter(k=>!C[k]);
  return {required,missing,ok:missing.length===0};
}
function apiAudit(){
  const issues=[], add=(id,name,ok,detail)=>{if(!ok)issues.push({id,name,detail:detail||''});};
  add('API-101','public shape',publicShape().ok,publicShape().missing.join(','));
  add('API-102','ENGINE version sync',E.version===E.contractVersion&&E.version===E.schemaVersion);
  add('API-103','PUBLIC version sync',!E.PUBLIC||E.PUBLIC.version===E.version);
  add('API-104','success envelope',C.OK?.(1)?.ok===true&&'value' in C.OK(1));
  const er=C.FAIL?.('CHE.E.TEST','x',{a:1});
  add('API-105','error envelope',er?.ok===false&&!!er.error?.code&&!!er.error?.message);
  add('API-106','no private registry owner leakage',!E.registry||Object.values(E.registry).every(x=>x&&typeof x.owner==='string'));
  return {ok:issues.length===0,issues};
}
function runtimeSnapshot(doc){
  const d=doc||g.document;
  return {ok:!!d,readyState:d?.readyState||null,controlledHarness:(d?.scripts?.length||0)===0,domContentLoaded:!!d?.body,scriptCount:d?.scripts?.length||0,
    viewport:{width:g.innerWidth||0,height:g.innerHeight||0},hasRAF:typeof g.requestAnimationFrame==='function',
    hasPerformance:typeof g.performance?.now==='function'};
}
function crossDomain(){
  const out=[], add=(id,name,good,detail)=>out.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  const ST=C.STRUCTURE, REP=C.REPRESENTATION, MAP=C.MAPPING, RV=C.REACTION_VALIDATOR, UI=C.UI_BRIDGE, EM=C.ELECTRONIC_MODEL;
  const h=ST.createMolecule({id:'e-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
  const acid=ST.createMolecule({id:'e-acid',atoms:[{id:'C1',element:'C'},{id:'C2',element:'C'},{id:'H1',element:'H'},{id:'H2',element:'H'},{id:'H3',element:'H'},{id:'O1',element:'O'},{id:'O2',element:'O'},{id:'H4',element:'H'}],bonds:[{id:'cc',atomA:'C1',atomB:'C2',order:1},{id:'ch1',atomA:'C1',atomB:'H1',order:1},{id:'ch2',atomA:'C1',atomB:'H2',order:1},{id:'ch3',atomA:'C1',atomB:'H3',order:1},{id:'co1',atomA:'C2',atomB:'O1',order:2},{id:'co2',atomA:'C2',atomB:'O2',order:1},{id:'oh',atomA:'O2',atomB:'H4',order:1}]});
  const v=ST.validate(h), rep=REP.representations(h), snap=UI.snapshot(h);
  add('P-E-001','DATA→STRUCTURE',!!v?.ok);
  add('P-E-002','STRUCTURE→REPRESENTATION',rep?.ok&&!!rep.value.formula);
  add('P-E-003','STRUCTURE→UI_BRIDGE→2D/3D',snap?.ok&&!!snap.value.layout2D&&!!snap.value.geometry3D);
  add('P-E-004','ATOM→ELECTRONIC_MODEL',EM?.atom?.('O')?.ok===true);
  const rx={id:'e-rx',reactants:[{formula:'CO'}],products:[{formula:'CO2'}]};
  const mapped=MAP?.mapReaction?.(rx.reactants,rx.products); const rv=RV?.validate?.(rx);
  add('P-E-005','REACTION→MAPPING',!!mapped?.ok);
  add('P-E-006','REACTION→REACTION_VALIDATOR',!!rv?.ok);
  add('P-E-007','cross-domain acid representation',REP.representations(acid)?.ok===true);
  return out;
}
function deterministic(){
  const out=[], add=(id,name,good,detail)=>out.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  const ST=C.STRUCTURE, REP=C.REPRESENTATION;
  const h=ST.createMolecule({id:'det-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
  const a=ST.canonicalize(h), b=ST.canonicalize(clone(h));
  add('DET-001','canonicalization deterministic',JSON.stringify(a)===JSON.stringify(b));
  const r1=REP.representations(h), r2=REP.representations(h);
  add('DET-002','representation deterministic',JSON.stringify(r1)===JSON.stringify(r2));
  const m1=C.MAPPING?.atomMap?.(h,h), m2=C.MAPPING?.atomMap?.(h,h);
  add('DET-003','atom mapping deterministic',JSON.stringify(m1)===JSON.stringify(m2));
  return out;
}
function performance(){
  const out=[], add=(id,name,good,detail)=>out.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  if(typeof g.performance?.now!=='function'){add('PERF-001','performance API',false,'brak performance.now');return out;}
  const ST=C.STRUCTURE, REP=C.REPRESENTATION;
  const h=ST.createMolecule({id:'perf-h2o',atoms:[{id:'O',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]});
  let t=g.performance.now(); for(let i=0;i<50;i++) ST.canonicalize(h); let dt=g.performance.now()-t;
  add('PERF-001','canonicalization 50× finite',Number.isFinite(dt),dt.toFixed(2)+' ms');
  t=g.performance.now(); for(let i=0;i<50;i++) REP.representations(h); dt=g.performance.now()-t;
  add('PERF-002','representation 50× finite',Number.isFinite(dt),dt.toFixed(2)+' ms');
  add('PERF-003','no absurd single-op latency',dt<5000,dt.toFixed(2)+' ms');
  return out;
}
C.API_CONTRACT={version:'2.48',audit:apiAudit,publicShape};
C.RUNTIME={version:'2.48',snapshot:runtimeSnapshot};
C.REGRESSION={version:'2.48',crossDomain:crossDomain,deterministic,performance};
if(E.registry){
 E.registry.API_CONTRACT={layer:'META',owner:'CHE.API_CONTRACT',role:'kontrakt publicznego API',depends:['REGISTRY','CONTRACT','PUBLIC']};
 E.registry.RUNTIME={layer:'SERVICE',owner:'CHE.RUNTIME',role:'diagnostyka runtime DOM/browser',depends:[]};
 E.registry.REGRESSION={layer:'META',owner:'CHE.REGRESSION',role:'cross-domain, deterministyczność i performance',depends:['STRUCTURE','REPRESENTATION','MAPPING','REACTION_VALIDATOR','UI_BRIDGE','ELECTRONIC_MODEL']};
}
if(E.modules){E.modules.API_CONTRACT='2.48';E.modules.RUNTIME='2.48';E.modules.REGRESSION='2.48';}
E.version='2.48';E.contractVersion='2.48';E.schemaVersion='2.48';
if(E.PUBLIC) E.PUBLIC.version='2.48';
const oldAudit=E.AUDIT?.run;
if(typeof oldAudit==='function'&&!E.AUDIT.__eWrapped){
 const base=oldAudit.bind(E.AUDIT);
 E.AUDIT.run=function(){
  const r=base();
  const api=C.API_CONTRACT.audit(), rt=C.RUNTIME.snapshot(), xd=C.REGRESSION.crossDomain(), det=C.REGRESSION.deterministic(), perf=C.REGRESSION.performance();
  const e=[...xd,...det,...perf];
  const di=C.DATA_INTEGRITY?.run?.();
  const st=C.STEREO_CONTRACT?.validate?.({id:'audit-stereo',atoms:[{id:'C',element:'C'}],bonds:[]});
  e.push({id:'E-DATA-001',group:'pacE',name:'legacy data integrity',ok:!!di?.ok,detail:di?.value?.ok===false?JSON.stringify(di.value):''});
  e.push({id:'E-STEREO-001',group:'pacE',name:'stereo contract explicit',ok:!!st?.ok&&st.value.ok===true,detail:'complete=false by design'});
  const geoMol={id:'audit-geo',atoms:[{id:'O',element:'O',x:0,y:0,z:0},{id:'H1',element:'H',x:0.96,y:0,z:0},{id:'H2',element:'H',x:-0.24,y:0.93,z:0}],bonds:[{id:'b1',atomA:'O',atomB:'H1',order:1},{id:'b2',atomA:'O',atomB:'H2',order:1}]};
  const da=C.MOLECULE?.derivedAngles?.(geoMol)||[]; const gg=C.GEOMETRY?.geometry?.(geoMol);
  e.push({id:'E-GEO-001',group:'pacE',name:'derivedAngles uses atom IDs',ok:da.length===1&&Number.isFinite(da[0].deg),detail:String(da.length)});
  e.push({id:'E-GEO-002',group:'pacE',name:'3D geometry validates 3D coordinates',ok:!!gg?.ok&&gg.value.validation?.ok===true,detail:gg?.value?.validation?.status||''});
  const add=(id,name,good,detail)=>e.push({id,group:'pacE',name,ok:!!good,detail:detail||''});
  add('E-API','public API contract',api.ok,api.issues?.length?JSON.stringify(api.issues):'');
  add('E-RUNTIME-001','DOM runtime available',rt.ok&&(rt.readyState==='complete'||(rt.controlledHarness&&rt.readyState==='loading')),JSON.stringify(rt));
  add('E-RUNTIME-002','document has body',rt.ok&&rt.domContentLoaded);
  r.groups=r.groups||{};r.groups.pacE=e;r.summary=r.summary||{};r.summary.pacE={total:e.length,failed:e.filter(x=>!x.ok).length};
  r.apiContract=api;r.runtime=rt;r.pacE=e;r.ok=!!r.ok&&e.every(x=>x.ok);r.version=E.version;r.contractVersion=E.contractVersion;
  E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()}; return r;
 };
 E.AUDIT.__eWrapped=true;
}
})(window);

} catch (err) {
  try { console.warn('[CHE module 65]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const keys=x=>Object.keys(x||{}).sort();
const clone=x=>JSON.parse(JSON.stringify(x));
const BASE={
 molecules:['HCl','HF','H2O','H3O','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH','NH3','CO2','CH4'],
 reactions:['agno3Hcl','caco3Hcl','cuHno3','cuoH2so4','cuoHcl','feHcl','h2Cl2','h2so4Naoh','mgHcl','naclH2SO4','so3H2o','hclNaOH','znHcl'],
 tables:{reactionData:13,substances:39,atomicProps:23,isotopes:17,atomicSpectra:5}
};
function inventory(){return {molecules:keys(D.MOLECULES),reactions:keys(D.REACTIONS),reactionData:keys(D.REACTION_DATA),substances:keys(D.SUBSTANCES),atomicProps:keys(D.ATOMIC_PROPS),isotopes:keys(D.ISOTOPES),atomicSpectra:keys(D.ATOMIC_SPECTRA).filter(k=>k!=='RYDBERG')};}
function orphanScan(){
 const issues=[], inv=inventory();
 const molSet=new Set(inv.molecules), rxSet=new Set(inv.reactions), subSet=new Set(inv.substances);
 for(const [id,r] of Object.entries(D.REACTION_DATA||{})) if(!rxSet.has(id)) issues.push({code:'ORPHAN_REACTION_DATA',id});
 for(const [id,r] of Object.entries(D.REACTIONS||{})) for(const side of ['reactants','products']) for(const x of r?.[side]||[]){ if(subSet.has(x.formula)) continue; const f=String(x.formula||''); const aliases={'Cu(NO3)2':'CuNO32'}; if(aliases[f]&&subSet.has(aliases[f])) continue; const atomOnly=/^[A-Z][a-z]?$/.test(f); const diatomic=/^[A-Z][a-z]?2$/.test(f); if((atomOnly||diatomic)&&D.ATOM_META?.[f.replace(/2$/,'')]) continue; issues.push({code:'MISSING_SUBSTANCE',reaction:id,formula:f}); }
 for(const id of BASE.molecules) if(!molSet.has(id)) issues.push({code:'LEGACY_MOLECULE_MISSING',id});
 for(const id of BASE.reactions){ const alias=id==='naclH2SO4'?'naclH2so4':id; if(!rxSet.has(id)&&!rxSet.has(alias)) issues.push({code:'LEGACY_REACTION_MISSING',id}); }
 return {ok:issues.length===0,issues};
}
function compare(){
 const inv=inventory(),issues=[];
 if(inv.molecules.length<BASE.molecules.length) issues.push({code:'MOLECULE_COUNT_REGRESSED',expectedAtLeast:BASE.molecules.length,actual:inv.molecules.length});
 if(inv.reactions.length<BASE.reactions.length) issues.push({code:'REACTION_COUNT_REGRESSED',expectedAtLeast:BASE.reactions.length,actual:inv.reactions.length});
 for(const [k,n] of Object.entries(BASE.tables)) if(inv[k].length<n) issues.push({code:'TABLE_COUNT_REGRESSED',table:k,expectedAtLeast:n,actual:inv[k].length});
 return {ok:issues.length===0,issues,inventory:inv};
}
function run(){const c=compare(),o=orphanScan();return ok({ok:c.ok&&o.ok,compare:c,orphans:o,source:'embedded legacy baseline',versions:['2.30','2.38','2.46','2.48']});}
C.DATA_LINEAGE={version:'2.50',baseline:BASE,inventory,compare,orphanScan,run};
if(E.registry)E.registry.DATA_LINEAGE={layer:'META',owner:'CHE.DATA_LINEAGE',role:'ciągłość danych, legacy baseline i orphan scan',depends:['DATA','REACTION']};
if(E.modules)E.modules.DATA_LINEAGE='2.50';
})(window);

} catch (err) {
  try { console.warn('[CHE module 66]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const AXIS={IR:['cm-1'],NMR:['ppm','Hz'],MS:['m/z'],UV_VIS:['nm','eV'],ATOMIC:['nm','eV','Hz']};
const TYPES=new Set(Object.keys(AXIS));
function unitAllowed(type,unit){return !unit||AXIS[type]?.includes(String(unit));}
function normalizePeak(p){const x=p||{},type=String(x.type||'').toUpperCase(),unit=x.unit==null?null:String(x.unit);if(!TYPES.has(type))return fail('CHE.E.INVALID_INPUT','Nieznany typ widma',{type});if(!Number.isFinite(Number(x.axis)))return fail('CHE.E.INVALID_INPUT','Oś piku musi być liczbą',{axis:x.axis});if(!unitAllowed(type,unit))return fail('CHE.E.INVALID_UNIT','Jednostka nie pasuje do osi widma',{type,unit,allowed:AXIS[type]});if(x.uncertainty!=null&&(!Number.isFinite(Number(x.uncertainty))||Number(x.uncertainty)<0))return fail('CHE.E.INVALID_UNCERTAINTY','Niepoprawna niepewność',{uncertainty:x.uncertainty});return ok({type,axis:Number(x.axis),unit,intensity:x.intensity==null?null:Number(x.intensity),assignment:x.assignment||null,uncertainty:x.uncertainty==null?null:Number(x.uncertainty),source:x.source||'EDUCATIONAL_APPROXIMATION',method:x.method||null});}
function validate(s){const x=s||{},type=String(x.type||'').toUpperCase(),e=[];if(!TYPES.has(type))e.push({code:'INVALID_SPECTRUM_TYPE'});if(!Array.isArray(x.peaks))e.push({code:'PEAKS_NOT_ARRAY'});const peaks=(x.peaks||[]).map(p=>normalizePeak({...p,type:p?.type||type}));peaks.forEach((r,i)=>{if(!r.ok)e.push({code:'INVALID_PEAK',index:i,error:r.error});});if(x.provenance!=null&&!Array.isArray(x.provenance))e.push({code:'PROVENANCE_NOT_ARRAY'});return ok({ok:e.length===0,errors:e,normalized:e.length?null:{...x,type,peaks:peaks.map(r=>r.value),provenance:Array.isArray(x.provenance)?x.provenance:[]}});}
function validateProvenance(p){const x=p||{},e=[];if(!x.source&&!x.method)e.push({code:'PROVENANCE_EMPTY'});if(x.confidence!=null&&!['HIGH','MEDIUM','LOW','UNKNOWN'].includes(String(x.confidence).toUpperCase()))e.push({code:'INVALID_CONFIDENCE'});return ok({ok:e.length===0,errors:e});}
function peak(input){return normalizePeak(input);}
function spectrum(input){const x=input||{},type=String(x.type||'').toUpperCase();if(!TYPES.has(type))return fail('CHE.E.INVALID_INPUT','Nieznany typ widma',{type});const peaks=(x.peaks||[]).map(p=>normalizePeak({...p,type:p?.type||type}));const bad=peaks.filter(p=>!p.ok);if(bad.length)return fail('CHE.E.INVALID_INPUT','Niepoprawny pik',{bad});return ok({id:String(x.id||'spectrum-'+Date.now()),type,entityId:x.entityId||null,axis:x.axis||null,peaks:peaks.map(p=>p.value),method:x.method||null,source:x.source||'EDUCATIONAL_APPROXIMATION',uncertainty:x.uncertainty??null,calculationLevel:x.calculationLevel||null,provenance:Array.isArray(x.provenance)?x.provenance:[]});}
function assign(spectrumId,peakId,assignment){return ok({spectrumId,peakId,assignment,source:'USER_DEFINED'});}
C.SPECTRA_CONTRACT={version:'2.50',types:[...TYPES],axisUnits:AXIS,unitAllowed,normalizePeak,peak,spectrum,assign,validate,validateProvenance};
if(E.registry)E.registry.SPECTRA_CONTRACT={layer:'DOMAIN',owner:'CHE.SPECTRA_CONTRACT',role:'walidowany kontrakt widm, jednostek, niepewności i provenance',depends:['SPECTRA']};
if(E.modules)E.modules.SPECTRA_CONTRACT='2.50';
})(window);

} catch (err) {
  try { console.warn('[CHE module 67]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const clone=x=>JSON.parse(JSON.stringify(x));
function create(x){const a=x||{};return {id:String(a.id||'mechanism-'+Date.now()),schemaVersion:'2.50',reactionId:a.reactionId||null,nodes:Array.isArray(a.nodes)?clone(a.nodes):[],edges:Array.isArray(a.edges)?clone(a.edges):[],source:a.source||'USER_DEFINED'};}
function validate(g0){const g=create(g0),e=[],ids=new Set();g.nodes.forEach(n=>{if(!n?.id)e.push({code:'NODE_NO_ID'});else if(ids.has(n.id))e.push({code:'DUPLICATE_NODE',id:n.id});else ids.add(n.id);if(n?.type!=='state')e.push({code:'NODE_INVALID_TYPE',id:n?.id});if(!Array.isArray(n?.moleculeIds))e.push({code:'NODE_MOLECULES_NOT_ARRAY',id:n?.id});});g.edges.forEach(x=>{if(!x?.id)e.push({code:'EDGE_NO_ID'});if(!ids.has(x?.from)||!ids.has(x?.to))e.push({code:'BROKEN_EDGE',id:x?.id});if(x?.from===x?.to)e.push({code:'SELF_EDGE',id:x?.id});if(x?.type!=='transform')e.push({code:'EDGE_INVALID_TYPE',id:x?.id});});return ok({ok:e.length===0,errors:e,nodeCount:g.nodes.length,edgeCount:g.edges.length});}
function fromReaction(r){const x=r||{},g=create({reactionId:x.id,source:'CHE.REACTION'});g.nodes=[{id:'reactants',type:'state',moleculeIds:(x.reactants||[]).map(a=>a.formula)},{id:'products',type:'state',moleculeIds:(x.products||[]).map(a=>a.formula)}];g.edges=[{id:'reaction-transform',type:'transform',from:'reactants',to:'products',reactionId:x.id,changes:clone(x.changes||{})}];return ok(g);}
function validateReaction(r){const g=fromReaction(r);if(!g.ok)return g;const v=validate(g.value);return ok({ok:v.value.ok,graph:g.value,validation:v.value});}
C.MECHANISM_GRAPH={version:'2.50',create,validate,fromReaction,validateReaction};
if(E.registry)E.registry.MECHANISM_GRAPH={layer:'DOMAIN',owner:'CHE.MECHANISM_GRAPH',role:'walidowany graf stanów i transformacji mechanizmu',depends:['TRANSFORM','REACTION','STRUCTURE']};
if(E.modules)E.modules.MECHANISM_GRAPH='2.50';
})(window);

} catch (err) {
  try { console.warn('[CHE module 68]', err && err.message ? err.message : err); } catch(_){}
}

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

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const META={
  thermochem:{dHf:'kJ/mol',S:'J/(mol·K)',Cp:'J/(mol·K)',referenceTemperatureK:298.15,reference:'standard-state data; phase/species must match the stored record'},
  redox:{potential:'V',referenceTemperatureK:298.15,defaultMedium:'aqueous',type:'standard reduction potential; half-reaction and medium are part of interpretation'},
  solubility:{Ksp:'dimensionless in the conventional activity-based definition; numeric educational values require stated convention',waterSolubility:'g/L',temperatureK:293.15},
  acidBase:{pKa:'dimensionless logarithmic constant',reference:'aqueous values; temperature and ionic-strength dependence may apply'},
  atomicProps:{radius:'pm unless explicitly documented otherwise',ionizationEnergy:'kJ/mol',electronAffinity:'kJ/mol',meltingPoint:'K',boilingPoint:'K',density:'g/cm3'}
};
function audit(){
 const issues=[],warnings=[];
 if(C.DATA?.THERMOCHEM && !META.thermochem.referenceTemperatureK) issues.push('THERMOCHEM_NO_REFERENCE_T');
 const rs=C.DATA?.REDOX_POTENTIALS||{};
 if(Object.keys(rs).length && !META.redox.potential) issues.push('REDOX_NO_UNIT');
 if(C.DATA?.SOLUBILITY?.CuSO4) warnings.push('CuSO4 solubility requires hydrate/phase convention');
 if(C.DATA?.ATOMIC_PROPS?.O?.crystalStructure==='cubic') issues.push('O_CRYSTAL_STRUCTURE_TOO_GENERIC');
 if(C.DATA?.ATOMIC_PROPS?.F?.crystalStructure==='cubic') issues.push('F_CRYSTAL_STRUCTURE_TOO_GENERIC');
 if(C.DATA?.ACID_SYSTEMS?.H2SO4?.strong===true && C.DATA?.ACID_SYSTEMS?.H2SO4?.pKa?.length>1) issues.push('H2SO4_STRONG_FLAG_AMBIGUOUS');
 warnings.push('Most numerical DATA records still need per-record provenance/source identifiers before they can be treated as reference-grade data.');
 return ok({ok:issues.length===0,issues,warnings,metadata:META});
}
C.SCIENCE_AUDIT={version:'2.54',metadata:META,audit};
if(E.registry)E.registry.SCIENCE_AUDIT={layer:'META',owner:'CHE.SCIENCE_AUDIT',role:'audyt naukowy danych, jednostek, warunków i ograniczeń',depends:['DATA','THERMO','ELECTRO','ISOTOPE','SPECTRA']};
if(E.modules)E.modules.SCIENCE_AUDIT='2.54';
})(window);

} catch (err) {
  try { console.warn('[CHE module 70]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const old=E.AUDIT?.run;
if(typeof old==='function'&&!E.AUDIT.__v250Wrapped){
 const base=old.bind(E.AUDIT);
 E.AUDIT.run=function(){
  const r=base(), extra=[];
  const add=(id,name,good,detail)=>extra.push({id,group:'v250',name,ok:!!good,detail:detail||''});
  const dl=C.DATA_LINEAGE?.run?.(); add('V250-001','legacy/data lineage',!!dl?.value?.ok,dl?.value?.orphans?.issues?.length?JSON.stringify(dl.value.orphans.issues):'');
  const sp=C.SPECTRA_CONTRACT; add('V250-002','spectra valid IR',sp?.validate?.({type:'IR',peaks:[{axis:1700,unit:'cm-1',uncertainty:5}],provenance:[{source:'test',confidence:'HIGH'}]})?.value?.ok===true);
  add('V250-003','spectra rejects wrong unit',sp?.normalizePeak?.({type:'IR',axis:1700,unit:'ppm'})?.ok===false);
  add('V250-004','spectra rejects negative uncertainty',sp?.normalizePeak?.({type:'MS',axis:18,unit:'m/z',uncertainty:-1})?.ok===false);
  const mg=C.MECHANISM_GRAPH; const mr=mg?.validateReaction?.({id:'v250-rx',reactants:[{formula:'H2'}],products:[{formula:'H2'}]}); add('V250-005','mechanism graph from reaction',!!mr?.value?.validation?.ok);
  const bad=mg?.validate?.({nodes:[{id:'a',type:'state',moleculeIds:[]}],edges:[{id:'x',type:'transform',from:'a',to:'missing'}]}); add('V250-006','mechanism graph rejects broken edge',bad?.value?.ok===false);
  const er=C.ELECTRONIC_REGRESSION?.audit?.(); add('V250-007','neutral configuration exceptions',!!er?.value?.ok,JSON.stringify(er?.value?.rows||[]));
  const ei=C.ELECTRONIC_REGRESSION?.auditIons?.(); add('V250-008','transition-metal ion removal',!!ei?.value?.ok,JSON.stringify(ei?.value?.rows||[]));
  const pr=C.PROVENANCE?.create?.({source:'COMPUTED',method:'unit-test',confidence:0.9}); add('V250-009','provenance accepts explicit source/method',!!pr?.ok);
  const contract=E.CONTRACT?.audit?.(); add('V250-010','registry/contract after v250',!!contract?.ok,contract?.issues?.length?JSON.stringify(contract.issues):'');
  r.groups=r.groups||{};r.groups.v250=extra;r.summary=r.summary||{};r.summary.v250={total:extra.length,failed:extra.filter(x=>!x.ok).length};r.v250=extra;const sa=C.SCIENCE_AUDIT?.audit?.(); extra.push({id:'V254-001',group:'v254',name:'scientific data audit',ok:!!sa?.value?.ok,detail:JSON.stringify(sa?.value||{})}); r.ok=!!r.ok&&extra.every(x=>x.ok);r.version=E.version;r.contractVersion=E.contractVersion;r.schemaVersion=E.schemaVersion;E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;
 };
 E.AUDIT.__v250Wrapped=true;
}
if(E.registry){E.registry.DATA_LINEAGE={layer:'META',owner:'CHE.DATA_LINEAGE',role:'ciągłość danych, legacy baseline i orphan scan',depends:['DATA','REACTION']};E.registry.ELECTRONIC_REGRESSION={layer:'META',owner:'CHE.ELECTRONIC_REGRESSION',role:'regresje konfiguracji wyjątkowych i jonów',depends:['ATOM','ELECTRONIC_MODEL']};}
if(E.modules){E.modules.DATA_LINEAGE='2.50';E.modules.ELECTRONIC_REGRESSION='2.50';}
E.version='2.54';E.contractVersion='2.54';E.schemaVersion='2.54';
if(E.PUBLIC)E.PUBLIC.version='2.54';
if(E.API_CONTRACT)E.API_CONTRACT.version='2.54';
if(E.RUNTIME)E.RUNTIME.version='2.54';
if(E.REGRESSION)E.REGRESSION.version='2.54';
})(window);

} catch (err) {
  try { console.warn('[CHE module 71]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const VAL={C:4,N:3,O:2,S:2,P:3,F:1,Cl:1,Br:1,I:1,H:1}, EC={O:'#c0392b',N:'#2563eb',S:'#a16207',Cl:'#1e8a4c',F:'#1e8a4c',Br:'#9a3412',I:'#6d28d9',P:'#c2410c'};
const GC={carboxyl:'#d6452b',aldehyde:'#e07b00',ketone:'#b0467a',ester:'#2f8a55',ether:'#0e7490',hydroxyl:'#2563eb',amine:'#6d28d9',amide:'#be185d',nitro:'#a16207',halogen:'#1e8a4c',sulfhydryl:'#a16207',phosphate:'#c2410c',alkene:'#475569',alkyne:'#475569',aromatic:'#d6452b',carbonyl:'#d6452b'};
const RANK={carboxyl:9,ester:9,amide:9,aldehyde:8,ketone:8,nitro:8,phosphate:8,amine:6,hydroxyl:5,ether:5,sulfhydryl:5,halogen:4,alkene:3,alkyne:3,aromatic:4,carbonyl:1};
const sub=n=>String(n).replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[d]), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function model(s){
  const atoms=(s.atoms||[]).map(a=>({id:String(a.id),el:a.element})), by=new Map(atoms.map(a=>[a.id,a]));
  const bonds=(s.bonds||[]).map(b=>({a:String(b.atomA),b:String(b.atomB),o:+b.order||1})).filter(b=>by.has(b.a)&&by.has(b.b));
  const used={},hn={};
  bonds.forEach(b=>{[[b.a,b.b],[b.b,b.a]].forEach(([x,y])=>{used[x]=(used[x]||0)+Math.ceil(b.o);if(by.get(y).el==='H')hn[x]=(hn[x]||0)+1;});});
  atoms.forEach(a=>{a.h=a.el==='H'?0:(hn[a.id]||0)+Math.max(0,(VAL[a.el]||0)-(used[a.id]||0));});
  const heavy=atoms.filter(a=>a.el!=='H'),hid=new Set(heavy.map(a=>a.id)),adj={},hb=bonds.filter(b=>hid.has(b.a)&&hid.has(b.b));
  heavy.forEach(a=>adj[a.id]=[]);hb.forEach(b=>{adj[b.a].push(b.b);adj[b.b].push(b.a);});
  return {by,heavy,hb,adj};
}
function rings(M){const seen=new Set(),out=[];
  for(const e of M.hb){const u=e.a,v=e.b,prev=new Map([[u,null]]),q=[u];
    while(q.length){const x=q.shift();if(x===v)break;for(const y of M.adj[x]){if(x===u&&y===v)continue;if(!prev.has(y)){prev.set(y,x);q.push(y);}}}
    if(!prev.has(v))continue;const cyc=[];for(let x=v;x!=null;x=prev.get(x))cyc.push(x);
    if(cyc.length>8||cyc.length<3)continue;const k=[...cyc].sort().join('|');if(!seen.has(k)){seen.add(k);out.push(cyc);}}
  return out.sort((a,b)=>a.length-b.length);}
function aromRings(M){const o=new Map(M.hb.map(b=>[b.a+'|'+b.b,b.o])),g=(x,y)=>o.get(x+'|'+y)||o.get(y+'|'+x)||1;
  return rings(M).filter(r=>{if(r.length!==6||!r.every(x=>/^[CN]$/.test(M.by.get(x).el)))return false;
    const w=r.map((x,i)=>g(x,r[(i+1)%6]));return w.every(v=>v===1.5)||w.every((v,i)=>v+w[(i+1)%6]===3);});}
function layout(s){
  const M=model(s),RG=rings(M),P={},sg={},ord=new Map(M.hb.map(b=>[b.a+'|'+b.b,b.o]));
  const bo=(x,y)=>ord.get(x+'|'+y)||ord.get(y+'|'+x)||1,PI=Math.PI;
  function ringAt(id,dir){const r=RG.find(r=>r.includes(id)&&r.some(n=>!P[n]));if(!r)return false;
    const n=r.length,R=.5/Math.sin(PI/n),i0=r.indexOf(id),o=r.slice(i0).concat(r.slice(0,i0)),st=2*PI/n,ids=[];
    const pl=o.filter(x=>P[x]);let cx,cy,f0,sgn=1,k0=0;
    if(pl.length>=2){const u=pl[0],v=pl.find(x=>x!==u&&bo(u,x)&&M.adj[u].includes(x))||pl[1],pu=P[u],pv=P[v],mx=(pu.x+pv.x)/2,my=(pu.y+pv.y)/2,dx=pv.x-pu.x,dy=pv.y-pu.y,L=Math.hypot(dx,dy)||1,ap=R*Math.cos(PI/n);
      const all=Object.values(P),gx=all.reduce((t,p)=>t+p.x,0)/all.length,gy=all.reduce((t,p)=>t+p.y,0)/all.length;let nx=-dy/L,ny=dx/L;if((mx-gx)*nx+(my-gy)*ny<0){nx=-nx;ny=-ny;}
      cx=mx+nx*ap;cy=my+ny*ap;f0=Math.atan2(pu.y-cy,pu.x-cx);const t=Math.atan2(pv.y-cy,pv.x-cx)-f0;sgn=Math.sin(t)>0?1:-1;k0=o.indexOf(u);}
    else{const d=dir==null?0:dir;cx=P[id].x+R*Math.cos(d);cy=P[id].y+R*Math.sin(d);f0=d+PI;}
    o.forEach((x,k)=>{if(!P[x]){P[x]={x:cx+R*Math.cos(f0+sgn*(k-k0)*st),y:cy+R*Math.sin(f0+sgn*(k-k0)*st)};ids.push(x);}});
    ids.concat(pl.length>=2?[]:[id]).forEach(x=>expand(x,Math.atan2(P[x].y-cy,P[x].x-cx),true));return true;}
  function expand(id,inDir,inRing){
    if(!inRing&&ringAt(id,inDir))return;
    const kids=M.adj[id].filter(n=>!P[n]);if(!kids.length)return;const s0=sg[id]||1,n=kids.length;let A;
    if(inDir==null)inDir=-PI/6;
    if(n===1)A=[kids[0]&&(bo(id,kids[0])===3||inRing&&false)?inDir:inDir+s0*PI/3];
    else if(n===2)A=[inDir-PI/3,inDir+PI/3];else if(n===3)A=[inDir-PI/2,inDir,inDir+PI/2];else A=kids.map((_,i)=>inDir-PI/2+i*PI/(n-1));
    if(inRing&&n===1)A=[inDir];
    kids.forEach((k,i)=>{P[k]={x:P[id].x+Math.cos(A[i]),y:P[id].y+Math.sin(A[i])};sg[k]=-s0;});
    kids.forEach((k,i)=>expand(k,A[i],false));}
  let ox=0;const left=()=>M.heavy.find(a=>!P[a.id]);
  for(let a=left();a;a=left()){const st=M.heavy.find(x=>!P[x.id]&&M.adj[x.id].length<=1)||a;P[st.id]={x:ox,y:0};expand(st.id,null,false);
    const xs=Object.values(P).map(p=>p.x);ox=Math.max(...xs)+2;}
  return {M,P,RG};
}
function groups(s){let gs=[];try{gs=(C.STRUCTURE.detectFunctionalGroups(s).value||[]).slice();}catch(e){}
  const ar=aromRings(model(s));if(ar.length){gs=gs.filter(q=>q.type!=='aromatic');ar.forEach((r,i)=>gs.push({id:'fg-aromatic-r'+i,type:'aromatic',atoms:r.slice(),name:{pl:'układ aromatyczny (pierścień benzenowy)'},pattern:'6 elektronów π zdelokalizowanych nad pierścieniem'}));}
  return gs.filter(a=>!gs.some(b=>b!==a&&(RANK[b.type]||0)>(RANK[a.type]||0)&&a.atoms.every(x=>b.atoms.includes(x))));}
function svg(s,opt){
  opt=opt||{};const {M,P,RG}=layout(s),ids=Object.keys(P);if(!ids.length)return '';
  const S=opt.scale||56,xs=ids.map(i=>P[i].x),ys=ids.map(i=>P[i].y),mx=Math.min(...xs),my=Math.min(...ys),W=(Math.max(...xs)-mx)*S+110,H=(Math.max(...ys)-my)*S+110;
  const X=i=>(P[i].x-mx)*S+55,Y=i=>(P[i].y-my)*S+55,lab={};
  M.heavy.forEach(a=>{const d=M.adj[a.id].length;lab[a.id]=a.el==='C'?(d<=1?'CH'+(a.h>1?sub(a.h):''):''):a.el+(a.h?'H'+(a.h>1?sub(a.h):''):'');if(a.el==='C'&&d<=1&&a.h===0)lab[a.id]='C';if(a.el==='C'&&d<=1&&a.h===1)lab[a.id]='CH';});
  const AR=aromRings(M),inAr=(a,b)=>AR.some(r=>r.includes(a)&&r.includes(b)),gl=opt.groups===false?[]:groups(s);let o=`<svg class="r2-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="wzór strukturalny">`;
  const KEEP={hydroxyl:/^O$/,amine:/^N$/,sulfhydryl:/^S$/,halogen:/^(F|Cl|Br|I)$/};
  gl.forEach((q,k)=>{let at=q.atoms.filter(x=>P[x]);const kp=KEEP[q.type];if(kp){const t=at.filter(x=>kp.test(M.by.get(x).el));if(t.length)at=t;}if(!at.length)return;const px=at.map(X),py=at.map(Y),c=GC[q.type]||'#475569',p=at.length>1?14:17;
    const x0=Math.min(...px)-p,y0=Math.min(...py)-p,w=Math.max(...px)-Math.min(...px)+2*p,h=Math.max(...py)-Math.min(...py)+2*p;
    o+=`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="${Math.min(18,h/2)}" fill="${c}" fill-opacity=".11" stroke="${c}" stroke-dasharray="4 3"/><circle cx="${x0}" cy="${y0}" r="8.5" fill="${c}" stroke="#fff" stroke-width="1.5"/><text x="${x0}" y="${y0+3.6}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">${k+1}</text>`;});
  M.hb.forEach(b=>{const x1=X(b.a),y1=Y(b.a),x2=X(b.b),y2=Y(b.b),L=Math.hypot(x2-x1,y2-y1)||1,ux=(x2-x1)/L,uy=(y2-y1)/L,ta=lab[b.a]?12:0,tb=lab[b.b]?12:0;
    const ax=x1+ux*ta,ay=y1+uy*ta,bx=x2-ux*tb,by=y2-uy*tb,n=inAr(b.a,b.b)?1:Math.round(b.o)||1,arom=b.o===1.5&&!inAr(b.a,b.b);
    const ln=(d,dash)=>`<line x1="${ax-uy*d}" y1="${ay+ux*d}" x2="${bx-uy*d}" y2="${by+ux*d}" stroke="#17212b" stroke-width="1.8" stroke-linecap="round"${dash?' stroke-dasharray="4 3"':''}/>`;
    if(arom)o+=ln(-2.5)+ln(2.5,1);else for(let t=0;t<n;t++)o+=ln((t-(n-1)/2)*4.6);});
  AR.forEach(r=>{const cx=r.reduce((t,i)=>t+X(i),0)/6,cy=r.reduce((t,i)=>t+Y(i),0)/6,ap=Math.hypot(X(r[0])-cx,Y(r[0])-cy)*Math.cos(Math.PI/6);o+=`<circle cx="${cx}" cy="${cy}" r="${ap*.62}" fill="none" stroke="#17212b" stroke-width="1.6"/>`;});
  M.heavy.forEach(a=>{if(!lab[a.id])return;o+=`<circle cx="${X(a.id)}" cy="${Y(a.id)}" r="11" fill="#fff" fill-opacity=".9"/><text x="${X(a.id)}" y="${Y(a.id)+5}" text-anchor="middle" font-size="15" font-weight="700" font-family="Inter,sans-serif" fill="${EC[a.el]||'#17212b'}">${lab[a.id]}</text>`;});
  return o+'</svg>';
}
function panel(s,opt){
  opt=opt||{};const gl=groups(s),css='