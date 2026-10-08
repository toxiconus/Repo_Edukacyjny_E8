

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