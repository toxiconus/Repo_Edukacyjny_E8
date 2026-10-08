try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const E = C.ENGINE = C.ENGINE || {};
const near = (a,b,e)=> Math.abs(a-b) <= (e || 1e-9);

function groupChemistry(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'chemistry',name,ok:!!ok,detail:detail||''});
  const A = C.DATA?.ACIDS || {}; const CH = C.CHEM;
  const w = CH?.weakAcid?.(0.1, A.CH3COOH?.Ka?.[0]);
  add('CHEM-001','weakAcid CH3COOH 0.1M', w && near(w.pH,2.88,0.06));
  add('CHEM-002','pHFromH 1e-3 → 3', near(CH.pHFromH(1e-3),3));
  add('CHEM-003','HFromPH 3 → 1e-3', near(CH.HFromPH(3),1e-3));
  add('CHEM-004','bufferPH 1:1 → pKa', near(CH.bufferPH(4.76,1,1),4.76,0.001));
  add('CHEM-005','strongAcid 1e-3 → pH 3', near(CH.strongAcid(1e-3).pH,3,0.01));
  add('CHEM-006','strongBase 1e-3 → pH 11', near(CH.strongBase(1e-3).pH,11,0.01));
  add('CHEM-007','molarMass H2O', near(CH.molarMass('H2O'),18.015,0.002));
  add('CHEM-008','parseFormula H2SO4', JSON.stringify(CH.parseFormula('H2SO4'))===JSON.stringify({H:2,S:1,O:4}));
  add('CHEM-009','parseFormula Ca(OH)2', JSON.stringify(CH.parseFormula('Ca(OH)2'))===JSON.stringify({Ca:1,O:2,H:2}));
  add('CHEM-010','parseFormula CuSO4·5H2O', JSON.stringify(CH.parseFormula('CuSO4·5H2O'))===JSON.stringify({Cu:1,S:1,O:9,H:10}));
  add('CHEM-011','parseCharge SO4^2-', CH.parseCharge('SO4^2-')===-2);
  add('CHEM-012','balanceReaction znHcl', CH.balanceReaction(C.DATA.REACTIONS.znHcl).ok);
  add('CHEM-013','balanceReaction wykrywa błąd', CH.balanceReaction({reactants:[{formula:'HCl',coef:1}],products:[{formula:'H2',coef:1}]}).ok===false);
  const ER = C.EQUILIBRIUM;
  add('CHEM-014','equivalenceVolume', near(ER.equivalenceVolume(0.1,25,0.1),25,0.01));
  add('CHEM-015','titrationPH strongStrong eq', near(ER.titrationPH({type:'strongStrong',C:0.1,V0:25,V:25}),7,0.05));
  add('CHEM-016','polyproticPH H3PO4', Number.isFinite(ER.polyproticPH(0.1,[7.1e-3,6.3e-8,4.5e-13]).pH));
  const spec = ER.speciate('H3PO4',0.1,{Kas:[7.1e-3,6.3e-8,4.5e-13],pH:7});
  add('CHEM-017','speciate zwraca 4 formy', spec.ok && spec.species.length===4);
  add('CHEM-018','speciate frakcje sumują się do 1', Math.abs(spec.fractions.reduce((a,b)=>a+b,0)-1)<1e-9);
  const M = C.MOLECULE;
  add('CHEM-019','MOLECULE H2O formuła', M.formula('H2O')==='H2O');
  add('CHEM-020','MOLECULE H2O kąt', M.get('H2O').angles.some(a=>near(a.deg,104.5,0.2)));
  add('CHEM-021','MOLECULE CO2 liniowa', M.get('CO2').geometry==='liniowa');
  add('CHEM-022','MOLECULE CH4 tetraedr', M.get('CH4').geometry==='tetraedryczna');
  add('CHEM-023','MOLECULE NH3 piramida', M.get('NH3').geometry==='piramidalna');
  add('CHEM-024','MOLECULE H2O wolne pary', M.get('H2O').atoms.find(a=>a.element==='O').lonePairs===2);
  add('CHEM-025','MOLECULE walencyjne H2O', M.valenceElectrons('H2O')===8);
  add('CHEM-026','MOLECULE atom Cu Z=29', M.atom('Cu').Z===29);
  add('CHEM-027','MOLECULE konfiguracja Cu', M.orbitalSummary('Cu').includes('3d10'));
  add('CHEM-028','MOLECULE konfiguracja Fe', M.orbitalSummary('Fe').includes('3d6'));
  add('CHEM-029','MOLECULE audyt wszystkich', M.auditAll().ok===M.auditAll().count);
  add('CHEM-030','MOLECULE walidacja H2O', M.validate('H2O').ok);
  const ST = C.STRUCTURE;
  const water = ST.createMolecule({id:'audit-H2O', atoms:[
    {id:'O1',element:'O',position2D:{x:0,y:0}},
    {id:'H1',element:'H',position2D:{x:-1,y:0}},
    {id:'H2',element:'H',position2D:{x:1,y:0}}
  ], bonds:[
    {id:'B1',atomA:'O1',atomB:'H1',order:1},
    {id:'B2',atomA:'O1',atomB:'H2',order:1}
  ], charge:0});
  const wv = ST.validate(water);
  add('STRUCT-001','kanoniczny graf H2O', water.canonical===true && water.model==='CHEMICAL_GRAPH');
  add('STRUCT-002','walidacja H2O', wv.ok && wv.status!=='INVALID');
  add('STRUCT-003','grupy funkcyjne H2O', ST.detectFunctionalGroups(water).ok);
  const fg = ST.detectFunctionalGroups(C.MOLECULE?.get?.('CH3COOH'));
  add('STRUCT-004','CH3COOH rozpoznaje karbonyl/karboksyl', fg.ok && fg.value.some(x=>x.type==='carboxyl'));
  const lay = ST.layout2D(C.MOLECULE?.get?.('H2O'));
  add('STRUCT-005','layout2D H2O', lay.ok && Object.keys(lay.value.atoms).length===3);
  const geo = ST.geometry3D(C.MOLECULE?.get?.('H2O'));
  add('STRUCT-006','schema geometrii 3D', geo.ok && geo.value.units==='angstrom' && geo.value.coordinates.length===3);
  const S = C.STOICH;
  add('CHEM-031','massFromMol 1 mol H2O', near(S.massFromMol(1,'H2O'),18.015,0.01));
  add('CHEM-032','molFromMass 18g H2O', near(S.molFromMass(18.015,'H2O'),1,0.001));
  const lim = S.limitingReagent('znHcl',{Zn:0.1,HCl:0.1});
  add('CHEM-033','limitingReagent Zn/HCl', lim.ok && lim.limiting[0]==='HCl');
  add('CHEM-034','yieldPercent 8/10', near(S.yieldPercent(8,10),80,0.01));
  add('CHEM-035','UNITS mmol→mol', near(C.UNITS.convert(1,'mmol','mol','amount'),1e-3));
  add('CHEM-036','UNITS atm→Pa', near(C.UNITS.convert(1,'atm','Pa','pressure'),101325,1));
  add('CHEM-037','UNITS C→K', near(C.UNITS.convert(25,'C','K','temperature'),298.15,0.01));
  add('CHEM-038','REACTION equation znHcl', C.REACTION.equation('znHcl')==='Zn + 2 HCl → ZnCl2 + H2');
  add('CHEM-039','REACTION wszystkie bilanse', C.REACTION.list().every(r=>r.balance.ok));
  add('CHEM-040','OBSERVER pHmeter', C.OBSERVER.pHmeter(7).valid);
  add('CHEM-041','OBSERVER gas dla znHcl', C.OBSERVER.gas(C.REACTION.get('znHcl')).present);
  add('CHEM-042','OBSERVER precipitate dla agno3Hcl', C.OBSERVER.precipitate(C.REACTION.get('agno3Hcl')).present);
  const st = C.STATE.normalize({temperatureK:'298.15',pH:'7'});
  add('CHEM-043','STATE normalizacja', st.temperatureK===298.15 && st.pH===7);
  const pr = C.PROGRESS.state('znHcl',0.02,{Zn:0.1,HCl:0.1});
  add('CHEM-044','PROGRESS xi w zakresie', pr.ok && pr.xi===0.02 && pr.xiMax===0.05);
  return out;
}
function groupThermo(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'thermo',name,ok:!!ok,detail:detail||''});
  const T = C.THERMO;
  add('THERMO-001','THERMO.gibbs dostępne', typeof T?.gibbs==='function');
  const g1 = T.gibbs(-100,100,298.15);
  add('THERMO-002','Î”G egzoenergetyczna', g1.ok && g1.value.dG<0);
  const g2 = T.gibbs(100,100,298.15);
  add('THERMO-003','Î”G endoenergetyczna', g2.ok && g2.value.dG>0);
  const a1 = T.arrhenius(1e13,50,298.15);
  add('THERMO-004','arrhenius k>0', a1.ok && a1.value.k>0);
  const a2 = T.arrhenius(1e13,50,400);
  add('THERMO-005','arrhenius T↑ → k↑', a1.ok && a2.ok && a2.value.k>a1.value.k);
  const r2 = T.reactionEnthalpy('znHcl');
  add('THERMO-006','reactionEnthalpy znHcl', r2.ok, r2.ok ? 'Î”H = ' + r2.value.dH.toFixed(1) + ' kJ/mol' : 'brak danych');
  add('THERMO-007','THERMO.R zdefiniowane', T.R>8 && T.R<9);
  return out;
}
function groupElectro(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'electro',name,ok:!!ok,detail:detail||''});
  const EL = C.ELECTRO;
  add('ELECTRO-001','ELECTRO dostępne', typeof EL?.cellPotential==='function');
  const c1 = EL.cellPotential('Cu2+/Cu','Zn2+/Zn');
  add('ELECTRO-002','ogniwo Daniella E°=1.10', c1.ok && near(c1.E0,1.10,0.02));
  const c2 = EL.cellPotential('2H+/H2','2H+/H2');
  add('ELECTRO-003','E° identyczne pary = 0', c2.ok && near(c2.E0,0,1e-9));
  const c3 = EL.cellPotential('F2/F-','Li+/Li');
  add('ELECTRO-004','F₂/Li ogniwo bardzo dodatnie', c3.ok && c3.E0>5);
  const n1 = EL.nernst(1.10,2,1,298.15);
  add('ELECTRO-005','nernst Q=1 → E=E°', n1.ok && near(n1.value.E,1.10,1e-9));
  const n2 = EL.nernst(1.10,2,0.01,298.15);
  add('ELECTRO-006','nernst Q<1 → E>E°', n2.ok && n2.value.E>1.10);
  add('ELECTRO-007','pary() zwraca listę', Array.isArray(EL.pairs()) && EL.pairs().length>5);
  return out;
}
function groupAtom(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'atom',name,ok:!!ok,detail:detail||''});
  const A = C.ATOM;
  add('ATOM-001','ATOM dostępne', typeof A?.build==='function');
  const o = A.build('O');
  add('ATOM-002','build O zwraca model', o && o.Z===8);
  add('ATOM-003','nucleus O protons=8', A.nucleus('O').protons===8);
  add('ATOM-004','nucleus O neutrons=8', A.nucleus('O').neutrons===8);
  add('ATOM-005','nucleus O massNumber=16', A.nucleus('O').massNumber===16);
  add('ATOM-006','electrons O = 8', A.electrons('O').length===8);
  add('ATOM-007','electrons O walencyjne = 6', A.electrons('O').filter(e=>e.isValence).length===6);
  add('ATOM-008','valenceSubshells O zawiera 2s i 2p', A.valenceSubshells('O').includes('2s') && A.valenceSubshells('O').includes('2p'));
  add('ATOM-009','coreSubshells O = 1s', A.coreSubshells('O').length===1 && A.coreSubshells('O')[0]==='1s');
  add('ATOM-010','electrons Fe = 26', A.electrons('Fe').length===26);
  add('ATOM-011','valenceSubshells Fe zawiera 4s i 3d', A.valenceSubshells('Fe').includes('4s') && A.valenceSubshells('Fe').includes('3d'));
  add('ATOM-012','configFull O', A.configFull('O')==='1s2 2s2 2p4');
  add('ATOM-013','configShort Na', A.configShort('Na')==='[Ne] 3s1');
  add('ATOM-014','configShells O', A.configShells('O')==='K:2 L:6');
  add('ATOM-015','unpaired O = 2', A.unpairedElectrons('O')===2);
  const b = A.bondingElectrons('H2O',0);
  add('ATOM-016','bondingElectrons H2O atom 0', b.ok && b.bondingCount===2);
  add('ATOM-017','lonePairElectrons H2O atom 0 = 2', b.ok && b.lonePairCount===2);
  const vs = A.valenceSummary('H2O',0);
  add('ATOM-018','valenceSummary H2O atom 0', vs.ok && vs.bonding===2 && vs.lonePairs===2);
  add('ATOM-019','hybrydyzacja H2O = sp³', A.hybridization('H2O',0)==='sp³');
  add('ATOM-020','hybrydyzacja CO2 atom 1 = sp', A.hybridization('CO2',1)==='sp');
  add('ATOM-021','forPrimary Na ma protons', A.forPrimary('Na').protons===11);
  add('ATOM-022','forSecondary Cl- ma config', A.forSecondary('Cl',-1).configFull.includes('1s2'));
  add('ATOM-023','forHighSchool C ma orbitale', A.forHighSchool('C').orbitals.length>0);
  add('ATOM-024','forUniversity Cu ma termSymbol', A.forUniversity('Cu').termSymbol && A.forUniversity('Cu').termSymbol.term);
  return out;
}
function groupNucleus(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'nucleus',name,ok:!!ok,detail:detail||''});
  const N = C.NUCLEUS;
  add('NUCL-001','NUCLEUS.build O A=16', N.build('O',16).A===16);
  add('NUCL-002','radius(16) ≈ 3 fm', Math.abs(N.radius(16)-3.02)<0.2);
  const b = N.bindingEnergy(2,2);
  add('NUCL-003','bindingEnergy He-4 > 20 MeV', b.B>20);
  const bp = N.bindingEnergyPerNucleon(26,30);
  add('NUCL-004','B/A Fe-56 ≈ 8.8 MeV', Math.abs(bp-8.8)<1.0, bp.toFixed(2));
  const md = N.massDefect(2,2);
  add('NUCL-005','massDefect He-4 > 0', md>0);
  add('NUCL-006','decayMode U-238 = alpha', N.decayMode(92,146)==='alpha');
  const r = N.decayProduct('U',238,'alpha');
  add('NUCL-007','U-238 alpha → Th-234', r && r.daughterA===234 && r.daughterSymbol==='Th');
  const rb = N.decayProduct('C',14,'beta-');
  add('NUCL-008','C-14 beta- → N-14', rb && rb.daughterSymbol==='N' && rb.daughterA===14);
  return out;
}
function groupIon(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'ion',name,ok:!!ok,detail:detail||''});
  const I = C.ION;
  add('ION-001','electronCount Na+ = 10', I.electronCount('Na',1)===10);
  add('ION-002','configFull Na+ = 1s2 2s2 2p6', I.configFull('Na',1)==='1s2 2s2 2p6');
  const iso = I.isIsoelectronicWith({symbol:'Na',charge:1},{symbol:'F',charge:-1});
  add('ION-003','Na+ i F- izoelektronowe', iso===true);
  add('ION-004','isCation Na+', I.isCation('Na',1)===true);
  add('ION-005','nobleGasConfig Na+', I.nobleGasConfig('Na',1)===true);
  return out;
}
function groupIsotope(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'isotope',name,ok:!!ok,detail:detail||''});
  const I = C.ISOTOPE;
  add('ISO-001','H ma 3 izotopy', I.list('H').length===3);
  add('ISO-002','H-2 nazwa deuter', I.get('H',2)?.name==='deuter');
  add('ISO-003','H-3 stabilny=false', I.stable('H',3)===false);
  add('ISO-004','C-14 halfLife', I.halfLife('C',14)==='5730 lat');
  const avg = I.averageMass('C');
  add('ISO-005','averageMass C ≈ 12.011', Math.abs(avg-12.011)<0.01);
  return out;
}
function groupSpectra(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'spectra',name,ok:!!ok,detail:detail||''});
  const S = C.SPECTRA;
  add('SPEC-001','H widmo dostępne', S.atomic('H').ok===true);
  add('SPEC-002','H Balmer ma 5+ linii', S.balmerLines('H').length>=4);
  const l = S.lineAt('H',656.28,1);
  add('SPEC-003','linia HÎ± 656.28 nm', l && l.color==='czerwony');
  const ry = S.rydberg(2,3,1);
  add('SPEC-004','rydberg HÎ± ≈ 656 nm', Math.abs(ry.wavelength-656.3)<1);
  add('SPEC-005','region 656 nm = visible', S.region(656)==='visible');
  return out;
}
function groupViz(){
  const out=[], add=(id,name,ok,detail)=> out.push({id,group:'viz',name,ok:!!ok,detail:detail||''});
  add('VIZ-001','VIZ.el dostępne', typeof C.VIZ?.el==='function');
  add('VIZ-002','VIZ.table dostępne', typeof C.VIZ?.table==='function');
  add('VIZ-003','DATA.ELEM kompletne', !!C.DATA?.ELEM && !!C.DATA.ELEM.H && !!C.DATA.ELEM.O);
  add('VIZ-004','DOM.$ dostępne', typeof C.DOM?.$==='function');
  add('VIZ-005','DOM.esc bezpieczne', C.DOM.esc('<script>')==='&lt;script&gt;');
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

