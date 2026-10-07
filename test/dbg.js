const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>errs.push(m.text()));
await p.goto('file:///home/claude/che/out/CHE_biblioteka_v0_04.html');await p.waitForTimeout(800);
console.log(await p.evaluate(()=>{const G=CHE.LAB.GFX;const s=G.rx.state('mgHcl',.4);return JSON.stringify({gas:s.gas,out:G.rx.resolve('mgHcl').out,T:s.T,solids:s.solids,eff:G.effects.list().includes('bubbles')})}));
console.log(errs.join('\n'));await b.close()})();
