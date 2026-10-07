const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_38_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const R=CHE.REACTION,o=[];['na2Cl2','feS','cuso4Naoh','znCuso4','cuAgno3','caco3Decomp','cahco32Decomp','cuso4Hydrate','pbno32Ki'].forEach(k=>{const r=R.get(k);o.push(k+': '+(r?R.equation(k)+' bal='+(r.balance&&r.balance.ok):'BRAK'))});
 ['NaCl','Na2CO3','NH4Cl','CuSO4','CH3COONa','K2SO4','FeCl3','Na3PO4','AlCl3','Na2S'].forEach(f=>{const s=CHE.IONIC.saltReaction(f);o.push(f+' → '+(s?s.odczyn+' | '+s.equation:'null'))});
 ['cuso4Naoh','znCuso4','agno3Nacl','pbno32Ki'].forEach(k=>{const q=CHE.IONIC.equations(k);o.push(k+' NET: '+q.net)});
 const a=CHE.CONSISTENCY.audit();o.push('AUDIT '+a.passed+'/'+a.total+' '+a.checks.filter(c=>!c.ok).map(c=>c.id+' '+c.detail).join(' | '));return o.join('\n')}));console.log('ERR',e.join('|'));await b.close()})();
