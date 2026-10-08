

try {

(function(g){
'use strict';const C=g.CHE=g.CHE||{};
function run(){const out=[],add=(id,name,ok,detail)=>out.push({id,name,ok:!!ok,detail:detail||''});
 const w=C.STRUCTURE.createMolecule({id:'audit-water',atoms:[{id:'O1',element:'O'},{id:'H1',element:'H'},{id:'H2',element:'H'}],bonds:[{id:'b1',atomA:'O1',atomB:'H1',order:1},{id:'b2',atomA:'O1',atomB:'H2',order:1}]});
 const vw=C.STRUCTURE.validate(w);add('STR-001','graf H2O',vw.ok,w.formula);add('STR-002','grupy H2O',C.STRUCTURE.detectFunctionalGroups(w).ok);
 const acid=C.STRUCTURE.createMolecule({id:'audit-acid',atoms:[{id:'C1',element:'C'},{id:'O1',element:'O'},{id:'O2',element:'O'},{id:'H1',element:'H'}],bonds:[{id:'c-o',atomA:'C1',atomB:'O1',order:2},{id:'c-oh',atomA:'C1',atomB:'O2',order:1},{id:'o-h',atomA:'O2',atomB:'H1',order:1}]});
 const fg=C.STRUCTURE.detectFunctionalGroups(acid).value||[];add('STR-003','karboksylowa',fg.some(x=>x.type==='carboxyl'));
 const rx=C.TRANSFORM.createReaction({id:'audit-rx',reactants:[w],products:[w],conditions:{catalyst:null,solvent:'water'}});const vr=C.TRANSFORM.validateReaction(rx);add('RX-001','bilans H2O',vr.ok&&vr.value.validation.balance.ok);
 const broken=C.TRANSFORM.applyReaction(w,{bondsBroken:['b1']});add('RX-002','zerwanie wiązania',broken.ok&&broken.value.molecule.bonds.length===1);
 const changed=C.TRANSFORM.diff(w,broken.value.molecule);add('RX-003','diff wykrywa zerwanie',changed.bondsBroken.length===1);
 const order=C.TRANSFORM.applyReaction(acid,{bondOrderChanges:[{bondId:'c-o',to:1}]});add('RX-004','zmiana rzędu wiązania',order.ok&&order.value.changes.bondOrderChanges.length===1);
 const organic=C.ORGANIC?.resonance?.(acid);add('ORG-001','analiza rezonansu',!!organic?.ok);const taut=C.ORGANIC?.tautomerCandidates?.(acid);add('ORG-002','kandydaci tautomerii',!!taut?.ok);const st=C.ORGANIC?.stereochemistry?.(acid);add('ORG-003','analiza stereochemii',!!st?.ok);
 const geo=C.GEOMETRY?.geometry?.(acid,{source:'EDUCATIONAL_APPROXIMATION'});add('GEO-001','geometria wspólna',!!geo?.ok);const vs=C.GEOMETRY?.vsepr?.(w,'O1');add('GEO-002','VSEPR H2O',!!vs?.ok&&vs.value.domains.stericNumber===4);const gv=C.GEOMETRY?.validate?.(acid,geo?.value?.layout2D);add('GEO-003','walidacja geometrii',!!gv?.ok);
 const rs20=C.REACTIONSET?.create?.({reactants:[w],products:[w],components:[{id:'audit-water',role:'substrate'}]});const rv20=C.REACTIONSET?.validate?.(rs20);add('RXSET-001','reakcja wieloskładnikowa',!!rv20?.ok&&rv20.value.ok);const gp21=C.ORGANIC?.groupPriorities?.(acid);add('ORG-004','priorytet grup funkcyjnych',Array.isArray(gp21)&&gp21.some(x=>x.type==='carboxyl'));const eq21=C.ORGANIC?.equivalent?.(acid,acid);add('ORG-005','równoważność grafu',!!eq21?.ok&&eq21.value.equivalent);const cv=C.VISUAL?.moleculeCV?.(acid);add('VIS-001','CV cząsteczki',!!cv?.ok&&cv.value.functionalGroups.length>0);const bv=C.VISUAL?.bondView?.(acid,'c-o');add('VIS-002','widok wiązania',!!bv?.ok);const gv2=C.VISUAL?.groupView?.(acid,'carboxyl');add('VIS-003','widok grupy',!!gv2?.ok);
 const rep=C.REPRESENTATION?.representations?.(acid);add('REP-001','reprezentacje wzoru',!!rep?.ok&&!!rep.value.formula.formula);const gc=C.GEOMETRY_CONTRACT?.conformer?.(acid,{}, {source:'EDUCATIONAL_APPROXIMATION'});add('GEO-004','kontrakt geometrii',!!gc?.ok&&gc.value.source.source==='EDUCATIONAL_APPROXIMATION');const mp=C.MAPPING?.map?.(acid,acid);add('MAP-001','mapowanie grafu',!!mp?.ok&&mp.value.complete);const nm=C.NOMENCLATURE?.describe?.(acid);add('NOM-001','deskryptor',!!nm?.ok&&!!nm.value.formula);const sci=C.SCIENCE?.quantity?.(1,'mol','amount');add('SCI-001','Quantity',!!sci?.ok&&sci.value.type==='Quantity');
 return out;} C.STRUCTURE_AUDIT={run};
})(window);

} catch (err) {
  try { console.warn('[CHE module 49]', err && err.message ? err.message : err); } catch(_){}
}