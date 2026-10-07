const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/'+process.argv[2]);await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const r=CHE.CONSISTENCY.audit();return r.passed+'/'+r.total+'\n'+r.checks.map(c=>(c.ok?'OK  ':'BAD ')+c.id+' '+c.name+' | '+c.detail).join('\n')}));console.log('ERR',e.join('|'));await b.close()})();
