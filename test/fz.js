const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(JSON.stringify(await p.evaluate(()=>CHE.FIZ.ELEKTRO.audit())));
const acts={'fiz-elektryzowanie-v01':[['⟷ pocieraj',0],['→ zbliż do kulki',3500]],'fiz-elektroskop-v01':[['▶ scenariusz',0]],'fiz-coulomb-v01':[],'fiz-przewodniki-v01':[]};
const waits={'fiz-elektryzowanie-v01':8000,'fiz-elektroskop-v01':6000,'fiz-coulomb-v01':1500,'fiz-przewodniki-v01':2500};
for(const v of Object.keys(acts)){await p.evaluate(([v,a])=>{let h=document.getElementById('VS');if(h)h.remove();h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che=v;h.appendChild(d);CHE.VIEW.mount(d);
a.forEach(([t,ms])=>setTimeout(()=>{const B=[...h.querySelectorAll('button')].find(b=>b.textContent.startsWith(t));B&&B.click()},ms+300))},[v,acts[v]]);await p.waitForTimeout(waits[v]);await (await p.$('#VS')).screenshot({path:'v4/'+v+'.png'})}
console.log('ERR',e.join('|'));await b.close()})();
