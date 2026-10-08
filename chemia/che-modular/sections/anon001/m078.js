try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
function atom(id,element,charge=0){return {id,element,formalCharge:charge};}
function bond(id,a,b,order=1){return {id,atomA:a,atomB:b,order};}
function molecule(id,atoms,bonds,charge=0){return C.STRUCTURE.createMolecule({id,atoms,bonds,charge});}
function ring(prefix,n,reverse=false){
 const atoms=Array.from({length:n},(_,i)=>atom(prefix+(reverse?(n-i):i+1),'C'));
 const bonds=[]; for(let i=0;i<n;i++){const a=atoms[i].id,b=atoms[(i+1)%n].id;bonds.push(bond(prefix+'b'+i,a,b,i%2?1:1.5));}
 return molecule(prefix,atoms,bonds,0);
}
function shuffledRing(prefix,n){
 const r=ring(prefix,n); r.atoms.reverse(); r.bonds=r.bonds.slice().reverse(); return C.STRUCTURE.canonicalize(r);
}
function run(){
 const out=[];
 const add=(id,name,test,detail)=>out.push({id,group:'v252',name,ok:!!test,detail:detail||''});
 const r=ring('R',18), p=shuffledRing('P',18);
 const m1=C.MAPPING.mapReaction({reactants:[r],products:[p]});
 const m2=C.MAPPING.mapReaction({reactants:[r],products:[p]});
 add('V252-001','18-member graph maps completely',m1.ok&&m1.value.complete&&Object.keys(m1.value.mapping).length===18,JSON.stringify(m1.value));
 add('V252-002','18-member mapping deterministic',m1.ok&&m2.ok&&JSON.stringify(m1.value.mapping)===JSON.stringify(m2.value.mapping));
 add('V252-003','mapping is component-scoped',m1.value.mapping['0:R1']==='0:P1'||Object.values(m1.value.mapping).some(v=>v==='0:P1'));
 const w=[]; for(let i=0;i<3;i++) w.push(molecule('W'+i,[atom('O','O'),atom('H1','H'),atom('H2','H')],[bond('b1','O','H1'),bond('b2','O','H2')]));
 const mw=C.MAPPING.mapReaction({reactants:w,products:[w[2],w[0],w[1]]});
 add('V252-004','three symmetric components map',mw.ok&&mw.value.complete&&Object.keys(mw.value.mapping).length===9,JSON.stringify(mw.value));
 const c1=molecule('C1',[atom('C1','C'),atom('C2','C')],[bond('cc','C1','C2',1)]);
 const c2=molecule('C2',[atom('X','C'),atom('Y','C')],[bond('xy','X','Y',2)]);
 const mr=C.REACTION_VALIDATOR.validate({id:'v252-order',reactants:[c1],products:[c2]});
 add('V252-005','bond-order change is detected after mapping',mr.ok&&mr.value.ok&&mr.value.changes.bondOrderChanges.length===1,JSON.stringify(mr.value?.changes||{}));
 const iso=C.ISOMORPHISM.isomorphic(r,p);
 add('V252-006','large graph isomorphism',iso.ok&&iso.value.isomorphic===true);
 const bad=C.MAPPING.mapReaction({reactants:[r],products:[ring('Q',17)]});
 add('V252-007','size mismatch is explicit',bad.ok&&bad.value.complete===false&&bad.value.unmatched.length>0);
 const sym1=C.MAPPING.map(r,p), sym2=C.MAPPING.map(r,p);
 add('V252-008','single-graph mapper deterministic',sym1.ok&&sym2.ok&&JSON.stringify(sym1.value.mapping)===JSON.stringify(sym2.value.mapping));
 return out;
}
C.MAPPING_REGRESSION_252={version:'2.52',run};
if(E.registry)E.registry.MAPPING_REGRESSION_252={layer:'META',owner:'CHE.MAPPING_REGRESSION_252',role:'regresje dużych grafów, symetrii i wieloskładnikowego mappingu',depends:['MAPPING','ISOMORPHISM','REACTION_VALIDATOR']};
if(E.modules)E.modules.MAPPING_REGRESSION_252='2.52';
const old=E.AUDIT?.run;
if(typeof old==='function'&&!E.AUDIT.__v252Wrapped){
 const base=old.bind(E.AUDIT);
 E.AUDIT.run=function(){
   const r=base(), extra=C.MAPPING_REGRESSION_252.run();
   r.groups=r.groups||{}; r.groups.v252=extra;
   r.summary=r.summary||{}; r.summary.v252={total:extra.length,failed:extra.filter(x=>!x.ok).length};
   r.v252=extra; r.ok=!!r.ok&&extra.every(x=>x.ok);
   r.version=E.version; r.contractVersion=E.contractVersion; r.schemaVersion=E.schemaVersion;
   E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};
   return r;
 };
 E.AUDIT.__v252Wrapped=true;
}
E.version='2.52';E.contractVersion='2.52';E.schemaVersion='2.52';
if(E.PUBLIC)E.PUBLIC.version='2.52';
if(E.API_CONTRACT)E.API_CONTRACT.version='2.52';
if(E.RUNTIME)E.RUNTIME.version='2.52';
})(window);

} catch (err) {
  try { console.warn('[CHE module 78]', err && err.message ? err.message : err); } catch(_){}
}

