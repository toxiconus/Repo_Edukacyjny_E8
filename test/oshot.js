const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1100,height:1000}});await p.route(/fonts\./,r=>r.abort());await p.addInitScript(()=>{delete window.IntersectionObserver});const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/'+(process.env.BIG||'CHE_lab_wizualizacje_v0_43_GFX16.html'));await p.waitForTimeout(2500);
await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='Rozumiem'&&x.offsetParent);b&&b.click()});
for(const v of process.argv.slice(2)){await p.evaluate(v=>{const c=document.querySelector('#che-viz-ov-close,[id*=viz-ov] button');window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:v,lessonId:'N01'},'*')},v);await p.waitForTimeout(1800);
 await p.evaluate(()=>{const b=document.getElementById('che-viz-ov-body');if(b)[...b.querySelectorAll('button')].slice(0,2).forEach(x=>{try{x.click()}catch(_){}})});await p.waitForTimeout(1200);
 const el=await p.$('#che-viz-ov-body');if(el){await el.screenshot({path:'v4/o_'+v.replace(':','_')+'.png'})}else console.log('no ov',v);
 await p.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(x=>/Zamknij/.test(x.textContent)&&x.offsetParent);b&&b.click()});await p.waitForTimeout(300)}
console.log('ERR',e.join('|'));await b.close()})();
