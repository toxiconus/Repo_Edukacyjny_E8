try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{};
C.RUNTIME_UI_CONTRACT={
  version:'2.85',
  get:()=>C.RUNTIME_UI_AUDIT||null,
  run:()=>{
    const tabs=['overview','atom','periodic','nucleus','isotope','spectra','lab','thermo','electro','audit','division'];
    const missingTabs=tabs.filter(k=>!document.getElementById('tab-'+k) && !document.querySelector('.tabpane[data-tab="'+k+'"]'));
    const missingButtons=tabs.filter(k=>!document.querySelector('.eu-tabs button[data-tab="'+k+'"]') && !document.querySelector('.tabnav button[data-tab="'+k+'"]'));
    return {ok:!missingTabs.length&&!missingButtons.length,missingTabs,missingButtons};
  }
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 77]', err && err.message ? err.message : err); } catch(_){}
}

