const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>CHE.HOME_GATE.openLesson('FIZ-01'));await p.waitForTimeout(1500);
for(const id of ['s0','s12a']){await p.evaluate(id=>document.querySelector('#che-lfs-mount #'+id).scrollIntoView(),id);await p.waitForTimeout(400);await p.screenshot({path:'v4/f01_'+id+'.png'})}
console.log('ERR',e.join('|'));await b.close()})();
