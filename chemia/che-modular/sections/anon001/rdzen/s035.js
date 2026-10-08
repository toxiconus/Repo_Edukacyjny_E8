

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}, clone=o=>JSON.parse(JSON.stringify(o));
const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const SOURCES={EDUCATIONAL_APPROXIMATION:{kind:'educational',label:'przybliżenie dydaktyczne'},VSEPR:{kind:'model',label:'projekcja VSEPR'},COMPUTATIONAL:{kind:'computed',label:'geometria obliczeniowa'},EXPERIMENTAL:{kind:'experimental',label:'geometria eksperymentalna'},COORDINATES:{kind:'coordinates',label:'współrzędne wejściowe'}};
function mol(m){return C.STRUCTURE.canonicalize(m||{});}
function sourceRecord(source,detail){const s=SOURCES[source]||{kind:'other',label:String(source||'unknown')};return {id:source,kind:s.kind,label:s.label,detail:detail||null};}
function layout2D(molecule,options){
 const m=mol(molecule), spacing=Number(options?.spacing||1.4), coords={}, used=new Set();
 const given=m.atoms.filter(a=>a.position2D); given.forEach(a=>{coords[a.id]={x:Number(a.position2D.x)||0,y:Number(a.position2D.y)||0};used.add(a.id);});
 const A=C.STRUCTURE.adjacency(m), queue=[]; if(m.atoms[0]&&!coords[m.atoms[0].id])coords[m.atoms[0].id]={x:0,y:0};
 const placed=()=>Object.keys(coords).length; while(placed()<m.atoms.length){
   const root=m.atoms.find(a=>coords[a.id]); if(!root)break;
   for(const a of m.atoms.filter(x=>!coords[x.id])){const neigh=(A[a.id]||[]).find(n=>coords[n.atomId]); if(neigh){const p=coords[neigh.atomId], idx=(queue.push(a.id)-1), angle=(idx%6)*Math.PI/3;coords[a.id]={x:p.x+spacing*Math.cos(angle),y:p.y+spacing*Math.sin(angle)};}}
   if(!m.atoms.some(a=>!coords[a.id]))break;
   const missing=m.atoms.find(a=>!coords[a.id]); if(missing)coords[missing.id]={x:((placed())%5)*spacing,y:-Math.floor(placed()/5)*spacing};
 }
 const bonds=m.bonds.map(b=>({bondId:b.id,atomA:b.atomA,atomB:b.atomB,order:b.order,start:clone(coords[b.atomA]),end:clone(coords[b.atomB])}));
 return ok({moleculeId:m.id,units:options?.units||'angstrom',style:options?.style||'structural',source:sourceRecord(options?.source||'COORDINATES'),atoms:coords,bonds});
}
function vsepr(molecule,atomId){
 const m=mol(molecule), center=m.atoms.find(a=>a.id===atomId);if(!center)return fail('CHE.E.DATA_NOT_FOUND','Nie znaleziono atomu',{atomId});
 const A=C.STRUCTURE.adjacency(m), neigh=A[center.id]||[], bondDomains=neigh.reduce((s,x)=>s+(Number(x.bond.order)>=1?1:0),0);
 const lonePairs=Number.isFinite(Number(center.metadata?.lonePairs))?Number(center.metadata.lonePairs):Math.max(0,Math.round(((C.DATA?.ATOM_META?.[center.element]?.valence||0)-bondDomains)/2));
 const steric=bondDomains+lonePairs;
 const map={2:['linear',180],3:['trigonal-planar',120],4:['tetrahedral',109.5],5:['trigonal-bipyramidal',90],6:['octahedral',90]};
 const item=map[steric]||['undetermined',null];
 return ok({atomId:center.id,element:center.element,domains:{bonding:bondDomains,lonePairs,stericNumber:steric},molecularGeometry:item[0],idealAngles:item[1]?[item[1]]:[],source:sourceRecord('VSEPR'),note:'projekcja modelowa; nie zastępuje geometrii eksperymentalnej lub obliczeniowej'});
}
function conformers(molecule){
 const m=mol(molecule), list=Array.isArray(m.metadata?.conformers)?clone(m.metadata.conformers):[];return ok({moleculeId:m.id,active:list[0]?.id||null,conformers:list,count:list.length});
}
function validate(molecule,geometry){
 const m=mol(molecule), g=geometry||{}, issues=[],warnings=[];
 const ids=new Set(m.atoms.map(a=>a.id)); for(const id of Object.keys(g.atoms||{}))if(!ids.has(id))issues.push({code:'GEOMETRY_UNKNOWN_ATOM',atomId:id});
 for(const b of m.bonds){const p=g.atoms?.[b.atomA],q=g.atoms?.[b.atomB];if(!p||!q){warnings.push({code:'GEOMETRY_MISSING_BOND_ENDPOINT',bondId:b.id});continue;}const d=Math.hypot((p.x||0)-(q.x||0),(p.y||0)-(q.y||0),(p.z||0)-(q.z||0));if(!(d>0))issues.push({code:'ZERO_BOND_LENGTH',bondId:b.id});}
 return ok({ok:issues.length===0,status:issues.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID',issues,warnings,moleculeId:m.id,source:g.source||null});
}
function geometry(molecule,options){
 const m=mol(molecule), source=options?.source||'EDUCATIONAL_APPROXIMATION';
 let layout=C.STRUCTURE.geometry3D(m,options).value;
 const g2=layout2D(m,{source:'COORDINATES'}).value;
 const atomGeometry=m.atoms.map(a=>({atomId:a.id,vsepr:vsepr(m,a.id).value}));
 return ok({moleculeId:m.id,source:sourceRecord(source,options?.detail),conformerId:options?.conformerId||layout.conformerId,units:'angstrom',coordinates:layout.coordinates,layout2D:g2,atomGeometry,bondLengths:layout.bondLengths,angles:layout.angles,validation:validate(m,layout)});
}
C.GEOMETRY={version:'2.17',SOURCES,layout2D,vsepr,conformers,validate,geometry};
})(window);

} catch (err) {
  try { console.warn('[CHE module 35]', err && err.message ? err.message : err); } catch(_){}
}