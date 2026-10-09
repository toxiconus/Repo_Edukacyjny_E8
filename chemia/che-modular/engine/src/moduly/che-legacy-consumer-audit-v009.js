
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const html=document.documentElement.innerHTML;
const consumers=[];
const lines=html.split(/\n/);
lines.forEach((line,i)=>{
  if(line.includes('CHE.chem.') && !line.includes('C.chem=legacyChem') && !line.includes('C.chem===legacyChem')) consumers.push({line:i+1,text:line.trim().slice(0,220)});
});
C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};
C.ENGINE_AUDIT.legacyConsumers={version:'0.09',sourceOfTruth:'FULL_ENGINE',activeConsumers:consumers.length,items:consumers,policy:'CHE.chem remains compatibility-only'};
})();
