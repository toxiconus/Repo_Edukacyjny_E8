const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const O=CHE.OXIDES,r=[];O.list().forEach(f=>Object.keys(O.reagents).forEach(g=>{const x=O.predict(f,g);if(x&&x.occurs)r.push(f+'+'+g+': '+x.equation+(x.rx?' ['+x.rx+']':''))}));const a=O.audit();return r.join('\n')+'\nAUDIT '+a.ok+' '+a.tests.filter(t=>!t[1]).map(t=>t[0]).join('|')}));
console.log('ERR',e.join('|'));await b.close()})();
