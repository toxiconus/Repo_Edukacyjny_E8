const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));p.on('console',m=>{if(m.type()==='error'&&!/ERR_FAILED/.test(m.text()))e.push('c: '+m.text().slice(0,200))});
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
await p.evaluate(()=>CHE.HOME_GATE.openLesson('N02'));await p.waitForTimeout(3000);
const fr=null;console.log('frames',p.frames().length);const F=fr||p.mainFrame();
console.log(await F.evaluate(()=>JSON.stringify({slots:document.querySelectorAll('.che-lesson-viz-slot').length,again:document.querySelectorAll('.che-lesson-viz-again').length,refs:document.querySelectorAll('.che-lesson-viz-ref').length,h:document.body.scrollHeight,adv:document.querySelectorAll('details.adv').length,quiz:document.querySelectorAll('.quiz-q').length,flash:document.querySelectorAll('.flashcard').length})));
const ids=(process.argv[2]||'minimum,historia,sciaga,model,wyjasnienie,doswiadczenia,test').split(',');
for(const id of ids){await F.evaluate(id=>{const t=document.getElementById(id);if(t)t.scrollIntoView({block:'start'})},id);await p.waitForTimeout(1200);await p.screenshot({path:'v5/les_'+id+'.png'})}
const c=await p.evaluate(()=>{const r=CHE.CONSISTENCY&&CHE.CONSISTENCY.audit?CHE.CONSISTENCY.audit():null;if(!r)return 'no cons';const rows=r.rows||r.checks||r;return (Array.isArray(rows)?rows:[]).filter(x=>/N02|HY/.test(x.id||x[0])).map(x=>JSON.stringify(x).slice(0,220)).join('\n')});console.log(c);
console.log('ERR',e.slice(0,10).join('|'));await b.close()})();
