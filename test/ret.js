const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:'buffer',lessonId:'N03'},'*'));await p.waitForTimeout(1500);
console.log(await p.evaluate(()=>(document.getElementById('che-viz-ov-title')||{}).textContent+' | N03 visuals: '+CHE.LESSONS.registry.N03.visuals.length+' | L002: '+JSON.stringify(CHE.LESSON_VIZ_LEGACY.L002.map(x=>x.id))));
console.log('ERR',e.join('|'));await b.close()})();
