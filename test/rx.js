const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const R=CHE.DATA.REACTIONS;return Object.keys(R).map(k=>{let e='';try{e=CHE.REACTION.equation(k)}catch(_){e='?'}return k+' : '+e}).join('\n')}));
console.log(await p.evaluate(()=>Object.keys(CHE.DATA.SUBSTANCES).length+' subst; sample '+JSON.stringify(CHE.DATA.SUBSTANCES['CaO']||CHE.DATA.SUBSTANCES.CaO)));
await b.close()})();
