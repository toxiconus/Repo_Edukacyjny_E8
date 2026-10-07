const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_33_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const o={};try{o.colors=CHE.COLORS.audit().ok}catch(e){o.colors='ERR '+e.message}try{const r=CHE.COLORS.regression();o.colorsReg=Array.isArray(r)?r.filter(x=>!x.ok&&x[1]!==true).length+' fail / '+r.length:JSON.stringify(r).slice(0,100)}catch(e){o.colorsReg='ERR '+e.message}
 o.phys=CHE.PHYS.audit().ok;o.modules=Object.keys((CHE.ENGINE||CHE.CORE||{}).modules||{}).join(',');o.cLo=CHE.DATA.INDICATORS[0].cLo;o.st=typeof CHE.selfTest;return JSON.stringify(o)}));
console.log(errs.join('\n'));await b.close()})();
