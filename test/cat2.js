const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const X=CHE.HUB.index();return CHE.HUB.catalog().map(i=>{const w=X.idx[i.id]||{};return i.id+'|'+i.title.slice(0,60)+'|'+i.tag+'|'+Object.keys(w).map(c=>c+w[c]).join(',')}).join('\n')}));await b.close()})();
