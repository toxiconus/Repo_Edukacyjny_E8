// Zrzut jednego modelu lekcji po kliknięciu przycisków o podanych etykietach: LES=N01 ID=x CLICK="Mg|Powtórz" OUT=plik.png node test/vizshot.js
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2000);
await p.evaluate(l=>CHE.HOME_GATE.openLesson(l),process.env.LES||'N01');await p.waitForTimeout(2000);const id=process.env.ID;
const sel='.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]';
await p.evaluate(s=>{const x=document.querySelector(s);x.scrollIntoView({block:'start'});const t=x.querySelector('button[data-che-open-viz]');if(t)t.click()},sel);await p.waitForTimeout(1500);
for(const c of (process.env.CLICK||'').split('|').filter(Boolean)){const ok=await p.evaluate(([s,c])=>{const b=[...document.querySelector(s).querySelectorAll('button')].find(b=>b.textContent.trim()===c);if(b){b.click();return 1}return 0},[sel,c]);if(!ok)console.log('brak przycisku',c);await p.waitForTimeout(+(process.env.WAIT||900))}
const el=await p.$(sel);await el.screenshot({path:process.env.OUT||'v5/viz/shot.png'});console.log('err:',e.join(' | ')||'brak');
if(process.env.TXT)console.log(await p.evaluate(s=>document.querySelector(s).innerText,sel));await b.close()})();
