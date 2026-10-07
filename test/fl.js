const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che='fiz-ladunek-v01';h.appendChild(d);CHE.VIEW.mount(d);setTimeout(()=>[...h.querySelectorAll('button')].find(b=>b.textContent==='dotknij A–B').click(),400)});
await p.waitForTimeout(900);await (await p.$('#VS')).screenshot({path:'v5/lad1.png'});
await p.evaluate(()=>[...document.querySelectorAll('#VS button')].find(b=>b.textContent==='uziem B').click());await p.waitForTimeout(500);await (await p.$('#VS')).screenshot({path:'v5/lad2.png'});
console.log(await p.evaluate(()=>JSON.stringify(document.querySelector('#VS [data-che]')._st&&document.querySelector('#VS [data-che]')._st.q)));
console.log('ERR',e.join('|'));await b.close()})();
