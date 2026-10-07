const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(l=>CHE.HOME_GATE.openLesson(l),process.env.LES||'N01');await p.waitForTimeout(2500);
const k=process.env.K||'caoh2Co2';await p.evaluate(k=>{document.querySelector('.che-prac-go[data-k="'+k+'"]').click()},k);await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const h=Object.values(CHE.PRACOWNIA.live||{})[0];const on=h&&h.querySelector('button.on');return JSON.stringify({live:Object.keys(CHE.PRACOWNIA.live||{}),on:on&&on.textContent})}));
await p.screenshot({path:'v5/prac.png'});console.log('ERR',e.join('|'));await b.close()})();
