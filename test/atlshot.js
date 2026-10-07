const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1366,height:900}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const c=document.querySelectorAll('[data-panel="atlas"]');c[c.length-1].click()});await p.waitForTimeout(2000);
await p.screenshot({path:'v5/atlas_0.png'});
console.log(await p.evaluate(()=>{const v=[...document.querySelectorAll('section,div')].filter(x=>x.offsetParent&&x.id).map(x=>x.id).slice(0,60).join(' ');return v}));
await p.evaluate(()=>window.scrollBy(0,900));await p.waitForTimeout(500);await p.screenshot({path:'v5/atlas_1.png'});
console.log('ERR',e.join('|'));await b.close()})();
