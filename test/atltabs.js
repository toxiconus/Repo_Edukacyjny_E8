const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1366,height:900}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const c=document.querySelectorAll('[data-panel="atlas"]');c[c.length-1].click()});await p.waitForTimeout(1500);
await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='Rozumiem');b&&b.click()});await p.waitForTimeout(500);
const tabs=(process.argv[2]||'Atom,Karta danych,Jądro i fazy,Właściwości,Redoks,Związki,Reakcja,Dane,Diagnostyka').split(',');
for(const [i,t] of tabs.entries()){const ok=await p.evaluate(t=>{const b=[...document.querySelectorAll('button,a,[role=tab]')].filter(x=>x.offsetParent&&x.textContent.trim()===t);if(b[0]){b[0].click();return true}return false},t);await p.waitForTimeout(1200);await p.screenshot({path:'v5/atl_'+i+'.png',fullPage:false});console.log(t,ok)}
console.log('ERR',e.join('|'));await b.close()})();
