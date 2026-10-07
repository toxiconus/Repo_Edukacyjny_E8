const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_35_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const a=CHE.REACTION.audit();const m=new Set();(a.missingData||[]).forEach(x=>(x.missing||[]).forEach(f=>m.add(f)));return [...m].join(' ')+' | missingData='+(a.missingData||[]).length}));await b.close()})();
