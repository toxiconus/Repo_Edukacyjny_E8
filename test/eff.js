const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const G=CHE.LAB.GFX;return ['metalBurn','flame','fumes','solids','sparks','plume','bubbles','heatGlow','label'].map(k=>k+': '+JSON.stringify(G.effects.options(k))).join('\n')}));
console.log(await p.evaluate(()=>JSON.stringify(CHE.LAB.GFX.scenes.get('carbonate')).slice(0,1500)));
console.log(await p.evaluate(()=>JSON.stringify(CHE.LAB.GFX.rx.get('caOH2Co2')).slice(0,800)));
await b.close()})();
