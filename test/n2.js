const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:1000}});await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));p.on('console',m=>{if(m.type()==='error')e.push('c: '+m.text().slice(0,200))});
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const a=CHE.HYDROXIDES.audit();const r=[];a.tests.filter(t=>!t[1]).forEach(t=>r.push('FAIL '+t[0]+' '+t[2]));let ra='';try{const x=CHE.REACTION.audit();ra=JSON.stringify(x).slice(0,300)}catch(err){ra='noaudit '+err.message}
 return 'HY '+a.tests.length+' fails:'+r.join(' | ')+'\nRX '+ra+'\nprecip '+CHE.HYDROXIDES.precipitations().join(',')}));
const acts={'n01-doswiadczenia-v01':['SO₂'],'n02-doswiadczenia-v01':[],'n02-wzory-v01':['dobierz','Sprawdź'],'n02-przeglad-v01':[],'n02-otrzymywanie-v01':[],'n02-stracanie-v01':['▶ start'],'n02-zobojetnianie-v01':['+ dodaj','+ dodaj','+ dodaj'],'n02-dysocjacja-v01':[],'n02-reaktor-v01':['zachodzi','Sprawdź']};
const only=process.argv[2];
for(const v of Object.keys(acts)){if(only&&v!==only)continue;await p.evaluate(([v,a])=>{let h=document.getElementById('VS');if(h)h.remove();h=document.createElement('div');h.id='VS';h.style.cssText='position:absolute;left:0;top:0;width:980px;z-index:99999;background:#fff;padding:10px';document.body.appendChild(h);const d=document.createElement('div');d.dataset.che=v;h.appendChild(d);CHE.VIEW.mount(d);
 a.forEach((t,i)=>setTimeout(()=>{const B=[...h.querySelectorAll('button')].find(b=>b.textContent.trim().startsWith(t));B&&B.click()},400+i*300))},[v,acts[v]]);await p.waitForTimeout(4200);await (await p.$('#VS')).screenshot({path:'v5/'+v+'.png'})}
console.log('ERR',e.join('|'));await b.close()})();
