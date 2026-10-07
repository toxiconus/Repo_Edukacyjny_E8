// Audyt wizualizacji w lekcji: każdy slot → budowa, błędy JS, rozmiar treści, płótna niepuste, klikanie przycisków (do 12), zrzut.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});await p.route(/fonts\./,r=>r.abort());let e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
const L=process.env.LES||'N01';await p.evaluate(l=>CHE.HOME_GATE.openLesson(l),L);await p.waitForTimeout(2500);
const ids=await p.evaluate(()=>[...new Set([...document.querySelectorAll('[data-che-lesson-viz]')].map(x=>x.getAttribute('data-che-lesson-viz')))]);
const out=[];
for(const id of ids){e=[];
 await p.evaluate(id=>{const s=document.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]')||document.querySelector('[data-che-lesson-viz="'+id+'"]');s.scrollIntoView({block:'start'});const t=s.querySelector('button[data-che-open-viz]');if(t)t.click()},id);
 await p.waitForTimeout(1800);
 const r=await p.evaluate(id=>{const s=document.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]')||document.querySelector('[data-che-lesson-viz="'+id+'"]');
  const cv=[...s.querySelectorAll('canvas')];const blank=cv.filter(c=>{try{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(let i=0;i<d.length;i+=4*97)if(d[i+3]&&(d[i]+d[i+1]+d[i+2])>0&&(d[i]!==d[0]||d[i+1]!==d[1]))return false;return true}catch(_){return false}}).length;
  return {txt:s.innerText.length,btn:s.querySelectorAll('button').length,canvas:cv.length,blank,svg:s.querySelectorAll('svg').length,h:s.getBoundingClientRect().height|0}},id);
 // klikanie przycisków widoku
 const n=await p.evaluate(id=>{const s=document.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]');if(!s)return 0;return [...s.querySelectorAll('button')].filter(b=>!b.hasAttribute('data-che-open-viz')&&b.getAttribute('data-a')!=='fs').length},id);
 for(let i=0;i<Math.min(n,12);i++){await p.evaluate(([id,i])=>{const s=document.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]');const bs=[...s.querySelectorAll('button')].filter(b=>!b.hasAttribute('data-che-open-viz')&&b.getAttribute('data-a')!=='fs');if(bs[i])bs[i].click()},[id,i]);await p.waitForTimeout(150)}
 await p.waitForTimeout(600);
 const el=await p.$('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]');if(el)await el.screenshot({path:'v5/viz/'+L+'_'+id+'.png'}).catch(()=>{});
 r.id=id;r.err=e.slice(0,3).join(' | ');out.push(r);console.log(JSON.stringify(r))}
await b.close()})();
