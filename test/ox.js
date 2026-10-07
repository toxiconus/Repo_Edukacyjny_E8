const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const D=CHE.DATA,a=CHE.REACTION.audit();const bad=D.OXIDES.filter(o=>!(D.SUBSTANCES[o.id]&&D.SUBSTANCES[o.id].molarMass>0)).map(o=>o.id);const rxm=[];D.OXIDES.forEach(o=>Object.values(o.rx||{}).forEach(k=>{if(!D.REACTIONS[k])rxm.push(o.id+':'+k)}));return JSON.stringify({ox:D.OXIDES.length,noMM:bad,rxMissing:rxm,unbal:a.unbalanced,missing:a.missingData,count:a.count,mmCaO:D.SUBSTANCES.CaO.molarMass,mmP4O10:D.SUBSTANCES.P4O10&&D.SUBSTANCES.P4O10.molarMass,eq:CHE.REACTION.equation('al2o3NaohAq')})}));
console.log('ERR',e.join('|'));await b.close()})();
