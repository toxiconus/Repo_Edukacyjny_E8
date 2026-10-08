try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const TYPES=new Set(['IR','NMR','MS','UV_VIS','ATOMIC']);
function peak(input){const x=input||{},type=String(x.type||'').toUpperCase();if(!TYPES.has(type))return C.FAIL('CHE.E.INVALID_INPUT','Nieznany typ widma',{type});const axis=Number(x.axis);if(!Number.isFinite(axis))return C.FAIL('CHE.E.INVALID_INPUT','Brak osi piku',{axis});return ok({type,axis,unit:x.unit||null,intensity:Number.isFinite(Number(x.intensity))?Number(x.intensity):null,assignment:x.assignment||null,uncertainty:x.uncertainty??null,source:x.source||'EDUCATIONAL_APPROXIMATION'});}
function spectrum(input){const x=input||{},type=String(x.type||'').toUpperCase();if(!TYPES.has(type))return C.FAIL('CHE.E.INVALID_INPUT','Nieznany typ widma',{type});const peaks=(x.peaks||[]).map(peak);const bad=peaks.filter(p=>!p.ok);if(bad.length)return C.FAIL('CHE.E.INVALID_INPUT','Niepoprawny pik',{bad});return ok({id:String(x.id||'spectrum-'+Date.now()),type,entityId:x.entityId||null,axis:x.axis||null,peaks:peaks.map(p=>p.value),method:x.method||null,source:x.source||'EDUCATIONAL_APPROXIMATION',uncertainty:x.uncertainty??null,calculationLevel:x.calculationLevel||null});}
function assign(spectrumId,peakId,assignment){return ok({spectrumId,peakId,assignment,source:'USER_DEFINED'});}
function validate(s){const x=s||{},e=[];if(!TYPES.has(String(x.type||'').toUpperCase()))e.push({code:'INVALID_SPECTRUM_TYPE'});if(!Array.isArray(x.peaks))e.push({code:'PEAKS_NOT_ARRAY'});return ok({ok:!e.length,errors:e});}
C.SPECTRA_CONTRACT={version:'2.35',types:[...TYPES],peak,spectrum,assign,validate};
})(window);

} catch (err) {
  try { console.warn('[CHE module 54]', err && err.message ? err.message : err); } catch(_){}
}

