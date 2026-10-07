const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_43_GFX16.html');await p.waitForTimeout(2500);
for(const id of ['FIZ-01','N03','N04']){await p.evaluate(id=>C=CHE.HOME_GATE.openLesson(id),id);await p.waitForTimeout(1500);
console.log(id,await p.evaluate(()=>({slots:document.querySelectorAll('#che-lfs-mount .che-lesson-viz-slot').length,again:document.querySelectorAll('#che-lfs-mount .che-lesson-viz-again').length})));}
await p.evaluate(()=>{CHE.HOME_GATE.openLesson('FIZ-01')});await p.waitForTimeout(1500);await p.evaluate(()=>{const a=document.querySelector('#che-lfs-mount .che-lesson-viz-again');a.scrollIntoView({block:'center'})});await p.waitForTimeout(800);await p.screenshot({path:'v4/fs_again.png'});
console.log('ERR',e.join('|'));await b.close()})();
