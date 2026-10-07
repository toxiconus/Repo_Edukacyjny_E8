const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_43_GFX16.html');await p.waitForTimeout(2500);
const r=await p.evaluate(()=>CHE.HUB.catalog().map(i=>i.id+' | '+i.title+' | '+i.tag).join('\n'));console.log(r);await b.close()})();
