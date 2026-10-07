const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1100,height:1000}});await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_43_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{document.querySelector('#lesson-list button[data-lesson="FIZ-01"]').click()});await p.waitForTimeout(2000);
let lf=null;for(const f of p.frames()){try{if(await f.evaluate(()=>/Elektrostatyka/.test(document.title)&&document.body.dataset.cheLesson))lf=f}catch(_){}}
const fe=await lf.frameElement();await fe.evaluate(e=>{e.style.cssText='position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:2147483647;background:#fff';document.body.appendChild(e)});await p.waitForTimeout(1500);for(const f of p.frames()){try{if(await f.evaluate(()=>/Elektrostatyka/.test(document.title)))lf=f}catch(_){}}
for(const [i,id] of [[1,'minimum'],[2,'s2'],[3,'s8'],[4,'s11']]){await lf.evaluate(id=>document.getElementById(id).scrollIntoView(),id);await p.waitForTimeout(300);await p.screenshot({path:'v4/f01_'+i+'.png'})}
await b.close()})();
