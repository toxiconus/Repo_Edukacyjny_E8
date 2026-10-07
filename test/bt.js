const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:900}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_40_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che='kw-bufor-v01';h.appendChild(d);CHE.VIEW.mount(d);
setTimeout(()=>{const B=[...h.querySelectorAll('button')];const f=t=>B.find(b=>b.textContent==t);for(let i=0;i<20;i++)f('+ 10 kropli HCl').click();for(let i=0;i<3;i++)f('+ 10 kropli NaOH').click();},500)});
await p.waitForTimeout(2500);await (await p.$('#VS')).screenshot({path:'v4/bufor2.png'});console.log('ERR',e.join('|'));await b.close()})();
