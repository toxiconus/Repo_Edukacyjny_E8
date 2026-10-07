const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1100,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:1080px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che='che-test-silnika-v01';h.appendChild(d);CHE.VIEW.mount(d);setTimeout(()=>[...h.querySelectorAll('button')].find(b=>b.textContent.includes('test widoków')).click(),300)});
await p.waitForTimeout(3000);
console.log(await p.evaluate(()=>[...document.querySelectorAll('#VS tr')].filter(r=>r.textContent.includes('✗')).map(r=>r.textContent.slice(0,200)).join('\n')));
await (await p.$('#VS')).screenshot({path:'v5/test_silnika.png'});console.log('ERR',e.length,e.slice(0,5).join('|'));await b.close()})();
