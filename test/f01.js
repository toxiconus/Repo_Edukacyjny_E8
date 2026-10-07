const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:900}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const b=document.querySelector('#lesson-list button[data-lesson="FIZ-01"]');b&&b.click()});await p.waitForTimeout(2000);
let lf=null;for(const f of p.frames()){try{if(await f.evaluate(()=>!!document.getElementById('flashcards')&&/Elektrostatyka/.test(document.title)))lf=f}catch(_){}}
console.log('frame',!!lf);if(lf)console.log(await lf.evaluate(()=>JSON.stringify({sec:document.querySelectorAll('section').length,cards:document.querySelectorAll('.flashcard').length,quiz:document.querySelectorAll('.quiz-q').length,viz:document.querySelectorAll('.che-lesson-viz-ref').length,adv:document.getElementById('advToggle').textContent})));
if(lf){await lf.evaluate(()=>window.scrollTo(0,0));}await p.screenshot({path:'v4/f01_top.png'});await p.evaluate(()=>window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:'fiz-elektroskop-v01',lessonId:'FIZ-01'},'*'));await p.waitForTimeout(3500);await p.screenshot({path:'v4/ov_f01.png'});
console.log('ERR',e.join('|'));await b.close()})();
