const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:1400}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_biblioteka_v0_07.html');await p.waitForTimeout(1500);
await p.evaluate(()=>{[...document.querySelectorAll('button')].find(b=>b.textContent==='Elektrostatyka').click()});await p.waitForTimeout(1500);await p.screenshot({path:'v4/lib_el.png'});
await p.evaluate(()=>{[...document.querySelectorAll('button')].find(b=>b.textContent==='Fizyka (CHE.PHYS)').click()});await p.waitForTimeout(1500);
const n=await p.evaluate(()=>{const c=[...document.querySelectorAll('.cl-card')].find(c=>/Coulomba/.test(c.textContent));c.scrollIntoView();return !!c});await p.waitForTimeout(500);await p.screenshot({path:'v4/lib_fiz.png'});
console.log('coul',n,'ERR',e.join('|'));await b.close()})();
