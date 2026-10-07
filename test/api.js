const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const R=CHE.REACTION,G=CHE.LAB.GFX;return JSON.stringify({R:Object.keys(R),rx:G.rx?Object.keys(G.rx):null,rxlist:G.rx?G.rx.list().slice(0,60):null,ionic:Object.keys(CHE.IONIC),chem:Object.keys(CHE.CHEM||{}).slice(0,40),mols:G.molecules.list(),eff:G.effects.list(),ves:G.vessels.list(),scenes:G.scenes.list(),phys:Object.keys(CHE.PHYS)})}));
await b.close()})();
