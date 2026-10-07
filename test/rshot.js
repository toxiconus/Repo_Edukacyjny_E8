const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:900}});await p.route(/fonts\./,r=>r.abort());await p.addInitScript(()=>{delete window.IntersectionObserver});const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_43_GFX16.html');await p.waitForTimeout(2500);
for(const v of process.argv.slice(2)){await p.evaluate(v=>{let h=document.getElementById('VS');if(h)h.remove();h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');h.appendChild(d);try{CHE.VISUAL_REGISTRY.mount(v,d)}catch(err){d.textContent='ERR '+err.message}
 setTimeout(()=>{[...h.querySelectorAll('button')].slice(0,2).forEach(b=>{try{b.click()}catch(_){}})},400)},v);await p.waitForTimeout(2200);const el=await p.$('#VS');await el.screenshot({path:'v4/r_'+v.replace(':','_')+'.png'})}
console.log('ERR',e.join('|'));await b.close()})();
