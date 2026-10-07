const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/'+(process.argv[2]||'CHE_lab_wizualizacje_v0_41_GFX16.html'));await p.waitForTimeout(2500);
for(const pn of (process.argv[3]||'lessons,visual').split(',')){await p.evaluate(pn=>{const c=document.querySelectorAll('[data-panel="'+pn+'"]');(c[c.length-1]||c[0]).click()},pn);await p.waitForTimeout(1500);await p.screenshot({path:'v4/pan_'+pn+'.png',fullPage:false});
 console.log(pn,await p.evaluate(()=>{const v=[...document.querySelectorAll('section,div')].filter(d=>d.offsetParent&&d.id).slice(0,8).map(d=>d.id).join(',');return v}));
 await p.evaluate(()=>{const b=[...document.querySelectorAll('button,a')].find(x=>/Panele|Start|Wróć|←/.test(x.textContent)&&x.offsetParent);b&&b.click()});await p.waitForTimeout(800)}
console.log('ERR',e.join('|'));await b.close()})();
