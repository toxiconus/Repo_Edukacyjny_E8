const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_34_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const D=CHE.DATA,out=[];['SCIENCE_PKA_REFERENCE_V300','EQUILIBRIA_VERIFIED_2026','EQUILIBRIA_VERIFIED_REFERENCE','REFERENCE_EQUILIBRIA_V273','acidBase','ACID_BASE_REFERENCE_NORMALIZATION_V407','SUBSTANCE_INDEX_V283'].forEach(k=>{const v=D[k];out.push('### '+k+' '+(Array.isArray(v)?'arr '+v.length:typeof v)+' '+JSON.stringify(v).slice(0,900))});return out.join('\n')}));
await b.close()})();
