const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:900}});const errs=[];p.on('pageerror',e=>errs.push('P: '+e.message));
await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/test/kw_preview.html');await p.waitForTimeout(800);
await p.evaluate(()=>document.getElementById('advToggle').click());
for(const id of ['s4','s6','s8','s10']){const h=await p.$('#'+id);await h.screenshot({path:'v4/les_'+id+'.png'})}
const v=await p.$('#s7');await v.screenshot({path:'v4/les_s7.png'});
console.log('ERR',errs.join('\n'));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_43_GFX16.html');await p.waitForTimeout(2500);
for(const vv of ['kw-szereg-metali-v01','kw-wlasciwosci-v01','kw-doswiadczenia-v01','gfx-scene-conductivity']){await p.evaluate(v=>window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:v,lessonId:'N03'},'*'),vv);await p.waitForTimeout(900);
 console.log(vv,'=>',await p.evaluate(()=>{const b=document.getElementById('che-viz-ov-body');return (document.getElementById('che-viz-ov-title')||{}).textContent+' | canv='+b.querySelectorAll('canvas').length}));
 await p.evaluate(()=>[...document.querySelectorAll('#che-viz-ov-body button')].filter(b=>/▶/.test(b.textContent)).forEach(b=>b.click()));await p.waitForTimeout(3500);await p.screenshot({path:'v4/ov_'+vv+'.png'})}
console.log('ERR2',errs.length,[...new Set(errs)].slice(0,6).join('\n'));await b.close()})();
