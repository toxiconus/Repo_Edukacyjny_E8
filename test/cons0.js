const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_35_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const D=CHE.DATA,o={};o.redoxEng=JSON.stringify(D.REDOX_POTENTIALS).slice(0,700);o.atlasRedox=JSON.stringify(REDOX);
 o.ind=JSON.stringify(D.INDICATORS);o.colInd=JSON.stringify(CHE.COLORS.list('indicator').map(r=>[r.id,r.name,(r.tr||[]).map(t=>[t[0],t[1]])]));
 o.atlasCu=JSON.stringify({m:DB.Cu.m,rho:DB.Cu.rho,mp:DB.Cu.mp,en:DB.Cu.en});o.engCu=JSON.stringify((D.ELEMENTS_118||[]).find(e=>e.s==='Cu')||D.ELEM&&D.ELEM.Cu).slice(0,400);
 o.atom=JSON.stringify(D.ATOMIC_MASS&&D.ATOMIC_MASS.Cu);o.atlasN=Object.keys(DB).length;
 return JSON.stringify(o,null,1)}));await b.close()})();
