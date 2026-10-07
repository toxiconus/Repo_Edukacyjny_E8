const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_40_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che='kw-dysocjacja-v01';h.appendChild(d);CHE.VIEW.mount(d);
setTimeout(()=>{const s=h.querySelector('select');s.value='CH3COOH';s.onchange()},300)});
await p.waitForTimeout(4000);await (await p.$('#VS')).screenshot({path:'v4/dys2.png'});console.log('ERR',e.join('|'));await b.close()})();
