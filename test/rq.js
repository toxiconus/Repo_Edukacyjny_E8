const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_34_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const R=CHE.REACTION,o={};o.keys=Object.keys(R).join(',');try{o.n=(R.list?R.list():Object.keys(CHE.DATA.REACTIONS)).length}catch(e){o.n=e.message}
 o.fe=String(JSON.stringify(R.get('feHcl'))).slice(0,400);o.subst=Object.keys(CHE.SUBSTANCE||{}).join(',');o.sget=String(JSON.stringify(CHE.SUBSTANCE&&CHE.SUBSTANCE.get&&CHE.SUBSTANCE.get('HCl'))).slice(0,300);
 o.atlas=Object.keys(CHE).filter(k=>/ATLAS|ELEM|PROFILE|CARD/i.test(k)).join(',');o.lrc=Object.keys(CHE.DATA).filter(k=>/REACT|ACID|PKA|EQUIL|GAS|FLAME|COLOR|INDIC|SUBST/i.test(k)).join(',');return JSON.stringify(o,null,1)}));
await b.close()})();
