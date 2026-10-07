const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:1000}});await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_41_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che='fiz-elektryzowanie-v01';h.appendChild(d);CHE.VIEW.mount(d);
const c=t=>[...h.querySelectorAll('button')].find(b=>b.textContent.startsWith(t)).click();setTimeout(()=>c('⟷'),300);setTimeout(()=>c('→'),3800)});
for(let i=0;i<14;i++){await p.waitForTimeout(500);console.log(await p.evaluate(()=>{const s=document.querySelector('#VS canvas')._st;return [s.qa,s.qb,s.near.toFixed(2),s.phi.toFixed(2),s.touched].join(' ')}))}
await (await p.$('#VS')).screenshot({path:'v4/fiz-elektryzowanie-v01.png'});await b.close()})();
