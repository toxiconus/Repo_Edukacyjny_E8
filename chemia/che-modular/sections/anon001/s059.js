

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{},ok=v=>C.OK?C.OK(v):{ok:true,value:v},fail=(c,m,x)=>C.FAIL?C.FAIL(c,m,x):{ok:false,error:{code:c,message:m,context:x}};
const ALLOWED=new Set(['R','S','r','s','E','Z','cis','trans']);
function validateDescriptor(d){const x=String(d||'');if(!ALLOWED.has(x))return fail('CHE.E.INVALID_INPUT','Nieznany deskryptor stereochemiczny',{descriptor:d});return ok({descriptor:x,complete:false,reason:'pełny CIP/E-Z nie jest jeszcze zaimplementowany'});}
function validate(m){const x=C.STRUCTURE?.canonicalize?.(m||{});if(!x)return fail('CHE.E.INVALID_INPUT','Brak grafu');const errors=[];for(const b of x.bonds||[])if(b.stereochemistry!=null&&!validateDescriptor(b.stereochemistry).ok)errors.push({code:'INVALID_STEREO_DESCRIPTOR',bondId:b.id});for(const a of x.atoms||[])if(a.stereochemistry!=null&&!validateDescriptor(a.stereochemistry).ok)errors.push({code:'INVALID_STEREO_DESCRIPTOR',atomId:a.id});return ok({ok:!errors.length,errors,complete:false});}
function assign(m){const x=C.STRUCTURE?.canonicalize?.(m||{});if(!x)return fail('CHE.E.INVALID_INPUT','Brak grafu');return ok({moleculeId:x.id,descriptors:[...(x.atoms||[]).filter(a=>a.stereochemistry).map(a=>({kind:'atom',id:a.id,descriptor:a.stereochemistry})),...(x.bonds||[]).filter(b=>b.stereochemistry).map(b=>({kind:'bond',id:b.id,descriptor:b.stereochemistry}))],complete:false});}
C.STEREO_CONTRACT={version:'2.48',validateDescriptor,validate,assign,complete:false};
if(E.registry)E.registry.STEREO_CONTRACT={layer:'DOMAIN',owner:'CHE.STEREO_CONTRACT',role:'jawne deskryptory stereo bez udawania pełnego CIP',depends:['STRUCTURE']};
if(E.modules)E.modules.STEREO_CONTRACT='2.48';
})(window);

} catch (err) {
  try { console.warn('[CHE module 59]', err && err.message ? err.message : err); } catch(_){}
}