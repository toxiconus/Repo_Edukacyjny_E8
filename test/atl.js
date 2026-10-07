const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));p.on('console',m=>{if(m.type()==='error')e.push(m.text().slice(0,150))});
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
for(const pn of ['atlas','visual','lessons','engine']){await p.evaluate(pn=>{const c=document.querySelectorAll('[data-panel="'+pn+'"]');c[c.length-1].click()},pn);await p.waitForTimeout(1500)}
console.log('views',await p.evaluate(()=>CHE.VIEW.views.size),'ERR',e.join(' | '));await b.close()})();
