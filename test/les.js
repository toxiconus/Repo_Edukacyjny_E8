const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:900}});const errs=[];p.on('pageerror',e=>errs.push('P: '+e.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_34_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>{const b=document.querySelector('#lesson-list button[data-lesson="N03"]');b.click()});await p.waitForTimeout(2500);
const fr=p.frames().find(f=>f!==p.mainFrame()&&/Kwasy/.test(f.name()+'')||0)||p.frames()[1];
const F=p.frames().filter(f=>f!==p.mainFrame());let lf=null;for(const f of F){try{if(await f.evaluate(()=>!!document.getElementById('advToggle')))lf=f}catch(e){}}
if(!lf){console.log('NO LESSON FRAME',F.length);await b.close();return}
lf.on&&0;
const info=await lf.evaluate(()=>({adv:document.querySelectorAll('details.adv').length,btn:document.getElementById('advToggle').textContent,cards:document.querySelectorAll('.flashcard').length,quiz:document.querySelectorAll('.quiz-q').length,h3:[...document.querySelectorAll('h3')].map(x=>x.textContent).filter(t=>/v1.5|4.5|5.6|6.5|6.6|10.1/.test(t)),viz:document.querySelectorAll('.che-lesson-viz-ref').length,klin:document.querySelectorAll('.klinika-table tbody tr').length}));
console.log(JSON.stringify(info,null,1));
await lf.evaluate(()=>document.getElementById('advToggle').click());
console.log(await lf.evaluate(()=>[...document.querySelectorAll('details.adv')].filter(d=>d.open).length+' open; '+document.getElementById('advToggle').textContent));
// screenshot sections
for(const id of ['s4','s7','s8']){const h=await lf.$('#'+id);await h.scrollIntoViewIfNeeded();await p.waitForTimeout(300);await h.screenshot({path:'v4/les_'+id+'.png'}).catch(e=>console.log('shot',e.message))}
// open a viz from lesson
for(const v of ['kw-szereg-metali-v01','kw-wlasciwosci-v01','kw-doswiadczenia-v01','gfx-scene-conductivity']){await p.evaluate(v=>window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:v,lessonId:'N03'},'*'),v);await p.waitForTimeout(900);
 const t=await p.evaluate(()=>{const b=document.getElementById('che-viz-ov-body');return (document.getElementById('che-viz-ov-title')||{}).textContent+' | canv='+(b?b.querySelectorAll('canvas').length:0)+' | '+(b?b.textContent.slice(0,80):'')});console.log(v,'=>',t);
 const btn=await p.$('#che-viz-ov-body button');if(btn&&v==='kw-szereg-metali-v01'){await btn.click();await p.waitForTimeout(3500)}
 if(v==='kw-wlasciwosci-v01'){await p.evaluate(()=>[...document.querySelectorAll('#che-viz-ov-body button')].filter(b=>b.textContent==='▶').forEach(b=>b.click()));await p.waitForTimeout(3000)}
 await p.screenshot({path:'v4/ov_'+v+'.png'})}
console.log('ERR',errs.length);[...new Set(errs)].slice(0,8).forEach(e=>console.log(e));await b.close()})();
