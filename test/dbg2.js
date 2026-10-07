const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:600,height:500}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/che/out/CHE_biblioteka_v0_04.html');await p.waitForTimeout(500);
await p.evaluate(()=>{document.body.innerHTML='<div id=h style="width:400px"></div>';window.m=CHE.LAB.GFX.rx.mount(document.getElementById('h'),'mgHcl',{height:300,auto:true})});
await p.waitForTimeout(2500);console.log(await p.evaluate(()=>{const pl=m.api.pool(0);return JSON.stringify({prog:m.progress,bub:(pl.bub||[]).length,keys:Object.keys(pl),boil:pl.boil})}));
await p.screenshot({path:'v4/dbg.png'});console.log(errs.join('\n'));await b.close()})();
