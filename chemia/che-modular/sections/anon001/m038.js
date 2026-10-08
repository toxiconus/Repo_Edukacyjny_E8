try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, D=C.DATA||{};
const clone=o=>JSON.parse(JSON.stringify(o));
const fail=(code,message,context)=>C.FAIL?C.FAIL(code,message,context):{ok:false,error:{code,message,context}};
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const nid=(p,n)=>`${p}-${n}`;
const atomicValence=e=>Number(D.ATOM_META?.[e]?.valence);
function createAtom(input){
  const x=input||{}, element=String(x.element||x.symbol||'').trim();
  if(!element||!D.ATOM_META?.[element]) return fail('CHE.E.DATA_NOT_FOUND','Nieznany pierwiastek',{element});
  return {id:String(x.id||nid('atom',Date.now()+Math.random().toString(36).slice(2,7))),element,
    isotope:x.isotope??null,charge:Number.isFinite(Number(x.charge))?Number(x.charge):0,
    formalCharge:Number.isFinite(Number(x.formalCharge))?Number(x.formalCharge):0,
    partialCharge:x.partialCharge??null,hybridization:x.hybridization??null,
    role:Array.isArray(x.role)?[...x.role]:[],labels:Array.isArray(x.labels)?[...x.labels]:[],
    position2D:x.position2D?{...x.position2D}:null,position3D:x.position3D?{...x.position3D}:null,metadata:{...(x.metadata||{})}};
}
function normalizeBond(b){
  const x=b||{}, order=Number(x.order), type=x.type||(order===2?'double':order===3?'triple':order===1.5?'aromatic':'single');
  return {id:String(x.id||nid('bond',Date.now()+Math.random().toString(36).slice(2,7))),atomA:String(x.atomA??x.a),atomB:String(x.atomB??x.b),
    order:Number.isFinite(order)?order:(D.BOND_TYPES?.[type]?.order??1),type,aromatic:!!x.aromatic,
    bondType:x.bondType||null,stereochemistry:x.stereochemistry??null,length:x.length??null,
    partialCharges:x.partialCharges??null,resonanceContribution:x.resonanceContribution??null,labels:Array.isArray(x.labels)?[...x.labels]:[]};
}
function createMolecule(input){
  const x=input||{}, m={id:String(x.id||nid('mol',Date.now()+Math.random().toString(36).slice(2,7))),name:x.name||null,formula:x.formula||null,
    charge:Number(x.charge||0),atoms:(x.atoms||[]).map(createAtom),bonds:(x.bonds||[]).map(normalizeBond),
    layout2D:x.layout2D?clone(x.layout2D):null,geometry3D:x.geometry3D?clone(x.geometry3D):null,
    functionalGroups:Array.isArray(x.functionalGroups)?clone(x.functionalGroups):[],resonance:x.resonance?clone(x.resonance):null,
    stereochemistry:x.stereochemistry?clone(x.stereochemistry):null,metadata:{...(x.metadata||{})}};
  return canonicalize(m);
}
function addBond(molecule,bond){
  const m=clone(molecule),b=normalizeBond(bond),ids=new Set(m.atoms.map(a=>String(a.id)));
  if(!ids.has(b.atomA)||!ids.has(b.atomB)||b.atomA===b.atomB)return fail('CHE.E.INVALID_INPUT','Wiązanie wskazuje niepoprawne atomy',{bond:b});
  if(m.bonds.some(x=>(x.atomA===b.atomA&&x.atomB===b.atomB)||(x.atomA===b.atomB&&x.atomB===b.atomA)))return fail('CHE.E.INVALID_INPUT','Między atomami istnieje już wiązanie',{bond:b});
  m.bonds.push(b); return ok(canonicalize(m));
}
function canonicalize(molecule){
  const m=clone(molecule||{});m.atoms=(m.atoms||[]).map(createAtom);const ids=new Set(m.atoms.map(a=>String(a.id)));
  m.bonds=(m.bonds||[]).map(normalizeBond).filter(b=>ids.has(b.atomA)&&ids.has(b.atomB)&&b.atomA!==b.atomB);
  const counts={};m.atoms.forEach(a=>counts[a.element]=(counts[a.element]||0)+1);
  m.formula=m.formula||Object.keys(counts).sort((a,b)=>a==='C'?-1:b==='C'?1:a==='H'?-1:b==='H'?1:a.localeCompare(b)).map(e=>e+(counts[e]===1?'':counts[e])).join('');
  m.charge=Number(m.charge||0);m.schemaVersion='2.19';m.model='CHEMICAL_GRAPH';m.canonical=true;
  m.functionalGroups=detectFunctionalGroupsRaw(m); return m;
}
function adjacency(m){const o={};(m.atoms||[]).forEach(a=>o[a.id]=[]);(m.bonds||[]).forEach(b=>{if(o[b.atomA])o[b.atomA].push({atomId:b.atomB,bond:b});if(o[b.atomB])o[b.atomB].push({atomId:b.atomA,bond:b});});return o;}
function validate(molecule){
  const m=canonicalize(molecule),issues=[],warnings=[],ids=new Set(),pairs=new Set(),sums={};
  for(const a of m.atoms){if(ids.has(a.id))issues.push({code:'DUPLICATE_ATOM_ID',atomId:a.id});ids.add(a.id);sums[a.id]=0;if(!D.ATOM_META?.[a.element])issues.push({code:'UNKNOWN_ELEMENT',atomId:a.id,element:a.element});}
  for(const b of m.bonds){if(!ids.has(b.atomA)||!ids.has(b.atomB))issues.push({code:'ORPHAN_BOND',bondId:b.id});const p=[b.atomA,b.atomB].sort().join('|');if(pairs.has(p))issues.push({code:'DUPLICATE_BOND',bondId:b.id});pairs.add(p);if(![1,1.5,2,3].includes(Number(b.order)))warnings.push({code:'UNCOMMON_BOND_ORDER',bondId:b.id,order:b.order});sums[b.atomA]=(sums[b.atomA]||0)+Number(b.order||0);sums[b.atomB]=(sums[b.atomB]||0)+Number(b.order||0);}
  m.atoms.forEach(a=>{const v=atomicValence(a.element);if(Number.isFinite(v)&&v>0&&sums[a.id]>v+0.01)warnings.push({code:'VALENCE_EXCEEDED',atomId:a.id,element:a.element,bondOrderSum:sums[a.id],valence:v});});
  const chargeSum=m.atoms.reduce((s,a)=>s+Number(a.formalCharge||a.charge||0),0);if(Math.abs(chargeSum-m.charge)>1e-9)warnings.push({code:'CHARGE_MISMATCH',moleculeCharge:m.charge,atomChargeSum:chargeSum});
  const status=issues.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID';return {ok:!issues.length,status,issues,warnings,formula:m.formula,atomCount:m.atoms.length,bondCount:m.bonds.length,chargeSum};
}
function detectFunctionalGroupsRaw(m){
  const A=adjacency(m), atoms=new Map(m.atoms.map(a=>[String(a.id),a]));
  const out=[], seen=new Set();
  const add=(type,atomIds,detail)=>{
    const key=type+'|'+[...atomIds].sort().join(',');
    if(seen.has(key)) return;
    seen.add(key);
    const def=D.FUNCTIONAL_GROUPS?.[type];
    out.push({id:`fg-${type}-${out.length+1}`,type,atoms:[...atomIds],name:def?.name||{pl:type},pattern:def?.pattern||null,detail:detail||null});
  };
  for(const c of m.atoms.filter(a=>a.element==='C')){
    const n=(A[c.id]||[]).map(x=>({a:atoms.get(x.atomId),bond:x.bond})).filter(x=>x.a);
    const oxy=n.filter(x=>x.a.element==='O');
    const dblO=oxy.find(x=>Number(x.bond.order)===2);
    if(dblO){
      add('carbonyl',[c.id,dblO.a.id]);
      const singlesO=oxy.filter(x=>Number(x.bond.order)===1);
      const hO=singlesO.find(x=>(A[x.a.id]||[]).some(y=>atoms.get(y.atomId)?.element==='H'));
      if(hO){
        const hIds=(A[hO.a.id]||[]).filter(y=>atoms.get(y.atomId)?.element==='H').map(y=>y.atomId);
        add('carboxyl',[c.id,dblO.a.id,hO.a.id,...hIds]);
      }
      const nN=n.find(x=>x.a.element==='N'&&Number(x.bond.order)===1);
      if(nN) add('amide',[c.id,dblO.a.id,nN.a.id]);
      const rO=singlesO.find(x=>x.a.id!==hO?.a.id&&(A[x.a.id]||[]).some(y=>y.atomId!==c.id&&atoms.get(y.atomId)?.element==='C'));
      if(rO) add('ester',[c.id,dblO.a.id,rO.a.id]);
      const h=(A[c.id]||[]).find(x=>atoms.get(x.atomId)?.element==='H');
      if(h) add('aldehyde',[c.id,dblO.a.id,h.atomId]);
      else if(n.filter(x=>x.a.element==='C').length>=2) add('ketone',[c.id,dblO.a.id]);
    }
  }
  for(const a of m.atoms){
    const n=A[a.id]||[];
    if(a.element==='O'){
      const h=n.find(x=>atoms.get(x.atomId)?.element==='H'&&Number(x.bond.order)===1);
      const heavy=n.find(x=>atoms.get(x.atomId)?.element!=='H'&&Number(x.bond.order)===1);
      if(h&&heavy) add('hydroxyl',[a.id,h.atomId,heavy.atomId]);
      if(n.filter(x=>atoms.get(x.atomId)?.element!=='H').length===2) add('ether',n.map(x=>x.atomId).concat(a.id));
    }
    if(a.element==='N'&&n.length>=1) add('amine',[a.id,...n.map(x=>x.atomId)]);
    if(a.element==='S'){
      const h=n.find(x=>atoms.get(x.atomId)?.element==='H'); if(h) add('sulfhydryl',[a.id,h.atomId]);
    }
    if(['F','Cl','Br','I'].includes(a.element)){
      const heavy=n.find(x=>atoms.get(x.atomId)?.element!=='H'); if(heavy) add('halogen',[heavy.atomId,a.id]);
    }
  }
  for(const b of m.bonds){
    const a=atoms.get(b.atomA), z=atoms.get(b.atomB);
    if(a&&z&&a.element==='C'&&z.element==='C'&&Number(b.order)===2) add('alkene',[a.id,z.id]);
    if(a&&z&&a.element==='C'&&z.element==='C'&&Number(b.order)===3) add('alkyne',[a.id,z.id]);
  }
  return out;
}
function detectFunctionalGroups(molecule){return ok(detectFunctionalGroupsRaw(canonicalize(molecule)));}
function layout2D(molecule,options){const m=canonicalize(molecule),s=Number(options?.spacing||1.4),out={moleculeId:m.id,units:options?.units||'angstrom',style:options?.style||'structural',atoms:{},bonds:{}};m.atoms.forEach((a,i)=>{const p=a.position2D||{x:(i%5)*s,y:-Math.floor(i/5)*s};out.atoms[a.id]={x:Number(p.x)||0,y:Number(p.y)||0};});m.bonds.forEach(b=>out.bonds[b.id]={start:{...out.atoms[b.atomA]},end:{...out.atoms[b.atomB]},order:b.order});return ok(out);}
function distance(a,b){return Math.hypot((a.x||0)-(b.x||0),(a.y||0)-(b.y||0),(a.z||0)-(b.z||0));}
function bondLengths(molecule){const m=canonicalize(molecule),by=new Map(m.atoms.map(a=>[a.id,a])),out=m.bonds.map(b=>{const a=by.get(b.atomA),z=by.get(b.atomB);if(!a?.position3D||!z?.position3D)return {bondId:b.id,length:null,source:'missing'};return {bondId:b.id,atomA:b.atomA,atomB:b.atomB,length:distance(a.position3D,z.position3D),unit:'angstrom',source:'coordinates'};});return ok(out);}
function angles(molecule){const m=canonicalize(molecule),A=adjacency(m),by=new Map(m.atoms.map(a=>[a.id,a])),out=[];for(const center of m.atoms){const n=(A[center.id]||[]).map(x=>x.atomId).filter(id=>by.get(id)?.position3D);for(let i=0;i<n.length;i++)for(let j=i+1;j<n.length;j++){const c=by.get(center.id).position3D,a=by.get(n[i]).position3D,b=by.get(n[j]).position3D;const va=[a.x-c.x,a.y-c.y,a.z-c.z],vb=[b.x-c.x,b.y-c.y,b.z-c.z],dot=va[0]*vb[0]+va[1]*vb[1]+va[2]*vb[2],na=Math.hypot(...va),nb=Math.hypot(...vb);if(na&&nb){const q=Math.max(-1,Math.min(1,dot/(na*nb)));out.push({center:center.id,atomA:n[i],atomB:n[j],angleDeg:Math.acos(q)*180/Math.PI});}}}return ok(out);}
function stereo(molecule){const m=canonicalize(molecule);return ok({moleculeId:m.id,defined:m.stereochemistry||null,bonds:m.bonds.filter(b=>b.stereochemistry).map(b=>({bondId:b.id,value:b.stereochemistry}))});}
function resonance(molecule){const m=canonicalize(molecule);return ok({moleculeId:m.id,system:m.resonance||null,structures:Array.isArray(m.resonance?.structures)?m.resonance.structures:[]});}
function geometry3D(molecule,options){const m=canonicalize(molecule),coords=[];m.atoms.forEach((a,i)=>{const p=a.position3D||{x:(i%3)*1.2,y:(Math.floor(i/3)%3)*1.2,z:Math.floor(i/9)*1.2};coords.push({atomId:a.id,x:Number(p.x)||0,y:Number(p.y)||0,z:Number(p.z)||0});});return ok({moleculeId:m.id,conformerId:options?.conformerId||'conf-001',units:'angstrom',coordinates:coords,geometrySource:options?.source||'canonical-placeholder',geometryLevel:options?.level||'EDUCATIONAL_APPROXIMATION',bondLengths:bondLengths(m).value,angles:angles(m).value});}
C.STRUCTURE={version:'2.17',createAtom,createMolecule,addBond,canonicalize,validate,detectFunctionalGroups,layout2D,geometry3D,angles,bondLengths,stereo,resonance,adjacency};
})(window);

} catch (err) {
  try { console.warn('[CHE module 38]', err && err.message ? err.message : err); } catch(_){}
}

