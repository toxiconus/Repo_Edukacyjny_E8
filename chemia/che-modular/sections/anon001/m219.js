try {

window.CHE=window.CHE||{};
CHE.ATOM_MODEL_V333={
 version:'3.33', scope:'Z=1..38', sourceClass:'EDUCATIONAL_MODEL',
 order:['1s','2s','2p','3s','3p','4s','3d','4p'],
 configs:{
 1:'1s1',2:'1s2',3:'1s2 2s1',4:'1s2 2s2',5:'1s2 2s2 2p1',6:'1s2 2s2 2p2',7:'1s2 2s2 2p3',8:'1s2 2s2 2p4',9:'1s2 2s2 2p5',10:'1s2 2s2 2p6',
 11:'1s2 2s2 2p6 3s1',12:'1s2 2s2 2p6 3s2',13:'1s2 2s2 2p6 3s2 3p1',14:'1s2 2s2 2p6 3s2 3p2',15:'1s2 2s2 2p6 3s2 3p3',16:'1s2 2s2 2p6 3s2 3p4',17:'1s2 2s2 2p6 3s2 3p5',18:'1s2 2s2 2p6 3s2 3p6',
 19:'1s2 2s2 2p6 3s2 3p6 4s1',20:'1s2 2s2 2p6 3s2 3p6 4s2',21:'1s2 2s2 2p6 3s2 3p6 4s2 3d1',22:'1s2 2s2 2p6 3s2 3p6 4s2 3d2',23:'1s2 2s2 2p6 3s2 3p6 4s2 3d3',24:'1s2 2s2 2p6 3s2 3p6 4s1 3d5',25:'1s2 2s2 2p6 3s2 3p6 4s2 3d5',26:'1s2 2s2 2p6 3s2 3p6 4s2 3d6',27:'1s2 2s2 2p6 3s2 3p6 4s2 3d7',28:'1s2 2s2 2p6 3s2 3p6 4s2 3d8',29:'1s2 2s2 2p6 3s2 3p6 4s1 3d10',30:'1s2 2s2 2p6 3s2 3p6 4s2 3d10',31:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1',32:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2',33:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3',34:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4',35:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5',36:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',37:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1',38:'1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2'
 },
 parse(c){return String(c).trim().split(/\s+/).filter(Boolean).map(x=>{let m=x.match(/^(\d[spdf])(\d+)$/);return m?{orbital:m[1],electrons:+m[2]}:null}).filter(Boolean)},
 shellCounts(Z){const c=this.configs[Z];if(!c)return null;const a=this.parse(c),o={};for(const q of a){const n=+q.orbital[0];o[n]=(o[n]||0)+q.electrons}return o},
 audit(){const bad=[];for(let z=1;z<=38;z++){const c=this.configs[z];const e=this.parse(c).reduce((n,x)=>n+x.electrons,0);if(!c||e!==z)bad.push({Z:z,electrons:e,expected:z})}return {ok:bad.length===0,range:'Z=1..38',bad,count:38-bad.length}},
 get(Z){return this.configs[Z]?{Z,configuration:this.configs[Z],orbitals:this.parse(this.configs[Z]),shells:this.shellCounts(Z)}:null}
};
 
CHE.STRUCTURE=CHE.STRUCTURE||{};
CHE.STRUCTURE.VIEW_ADAPTER_V333={version:'3.33',project(structure){const s=structure||{};const atoms=Array.isArray(s.atoms)?s.atoms:[];const bonds=Array.isArray(s.bonds)?s.bonds:[];const angles=Array.isArray(s.angles)?s.angles:[];return {atoms:atoms.map((a,i)=>({id:a.id??i,element:a.element||a.symbol||'?',x:Number(a.x)||0,y:Number(a.y)||0,z:Number(a.z)||0})),bonds:bonds.map((b,i)=>({id:b.id??i,a:b.a??b.from,b:b.b??b.to,order:Number(b.order)||1,label:String(b.order||1)})),angles:angles.map((g,i)=>({id:g.id??i,center:g.center??g.vertex,deg:Number(g.deg??g.angle),label:Number.isFinite(Number(g.deg??g.angle))?`${Number(g.deg??g.angle).toFixed(1)}°`:''}))}}};
 
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.SMOKE_V333={version:'3.33',required:['run-audit','tab-atom','tab-periodic','lab-3d-stage','lab-3d-canvas'],run(){const missing=this.required.filter(id=>!document.getElementById(id));const audit=CHE.ATOM_MODEL_V333.audit();return {ok:missing.length===0&&audit.ok,missing,atomAudit:audit,domReady:document.readyState}}};
 
(function(){const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;if(!R)return;const a=CHE.ATOM_MODEL_V333.audit();if(a.ok)R.setStatus('ATOM-001','IN_PROGRESS');if(typeof R.setStatus==='function')R.setStatus('TEST-001','OPEN');})();

} catch (err) {
  try { console.warn('[CHE module 219]', err && err.message ? err.message : err); } catch(_){}
}

