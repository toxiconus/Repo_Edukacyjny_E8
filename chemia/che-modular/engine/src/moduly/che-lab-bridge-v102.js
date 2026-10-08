
(function(){
'use strict';
var C=window.CHE=window.CHE||{};
function run(){
  try{
    if(C.LAB&&typeof C.LAB.syncFromEngine==='function'){
      var st=C.LAB.syncFromEngine();
      try{console.info('[CHE.LAB bridge v102]',st)}catch(_){}
    }
  }catch(e){try{console.warn('[CHE.LAB bridge]',e)}catch(_){}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(run,0);setTimeout(run,300)});
else{setTimeout(run,0);setTimeout(run,300)}
document.addEventListener('che:lesson-context',function(){setTimeout(run,50)});
})();
