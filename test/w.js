const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:800}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_32_GFX16.html');await p.waitForTimeout(2500);
const r=await p.evaluate(()=>{const o={};o.audit=CHE.PHYS.audit();o.sim=typeof CHE.sim.ParticleSim;const w=document.querySelector('#w-ionlab');o.w=!!w;
 if(w){const box=document.createElement('div');box.id='WB';box.style.cssText='position:fixed;inset:0;z-index:999999;background:#fff;padding:10px';box.appendChild(w);document.body.appendChild(box);window.inst=CHE.mount('particleSim',w);w.querySelector('[data-act="play"]').click()}
 o.rx=['znHcl','caco3Hcl','cuHno3','agno3Hcl'].map(k=>CHE.LAB.GFX.rx.info(k)).map(i=>i.eq+' | '+i.obs+' | '+i.src);o.flameCu=CHE.LAB.GFX.flameColors.Cu;return o});
await p.waitForTimeout(6000);await p.screenshot({path:'v4/widget_ionlab.png'});
console.log(JSON.stringify(r,null,1));console.log(await p.evaluate(()=>[...document.querySelectorAll('#WB .il-value')].map(x=>x.textContent).join(',')+' | '+document.querySelector('#WB .il-feedback').textContent));
console.log(errs.join('\n'));await b.close()})();
