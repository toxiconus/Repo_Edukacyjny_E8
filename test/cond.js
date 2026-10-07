const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:700}});await p.route(/fonts\./,r=>r.abort());await p.addInitScript(()=>{delete window.IntersectionObserver});const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_43_GFX16.html');await p.waitForTimeout(2500);
for(const sol of ['HCl','NaOH']){await p.evaluate(sol=>{let h=document.getElementById('VS');if(h)h.remove();h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);CHE.LAB.GFX.scene(h,'conductivity');setTimeout(()=>{const s=h.querySelector('select');s.value=sol;s.dispatchEvent(new Event('change'))},200)},sol);await p.waitForTimeout(3500);await (await p.$('#VS')).screenshot({path:'v4/cond_'+sol+'.png'})}
console.log('ERR',e.join('|'));await b.close()})();
