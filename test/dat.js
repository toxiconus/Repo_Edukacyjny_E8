const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1300,height:950}});await p.route(/fonts\./,r=>r.abort());const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(/warn|error/.test(m.type())&&/acid|v0.35|SUBST|REACT/i.test(m.text()))errs.push('C: '+m.text())});
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_40_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const R=CHE.REACTION,D=CHE.DATA,o={};const ks=Object.keys(D.REACTIONS);o.n=ks.length;o.bad=ks.filter(k=>{try{const r=R.get(k);return !(r&&r.balance&&r.balance.ok)}catch(e){return true}}).map(k=>k+':'+JSON.stringify((R.get(k)||{}).balance&&R.get(k).balance.unbalanced));
 o.acids=Object.keys(D.ACID_SYSTEMS).join(',');o.HF=JSON.stringify(D.ACIDS.HF);o.H3PO3=JSON.stringify(D.ACIDS.H3PO3);o.subs=Object.keys(D.SUBSTANCES).length;o.co2=D.SUBSTANCES.CO2.name;o.eq=R.equation('auAquaRegia');
 o.rxAl=JSON.stringify(CHE.LAB.GFX.rx.info('alHcl'));try{o.audit=JSON.stringify(R.audit&&R.audit()).slice(0,300)}catch(e){o.audit='ERR '+e.message}
 return JSON.stringify(o,null,1)}));
// atlas
await p.evaluate(()=>{const b=document.querySelector('[data-che-route="atlas"]');if(b)b.click()});await p.waitForTimeout(800);
for(const el of ['Fe','Cu']){await p.evaluate(s=>{location.hash='#'+s+'/redox';if(typeof go==='function')go(s);if(typeof showTab==='function')showTab('redox')},el);await p.waitForTimeout(700);
 const t=await p.evaluate(()=>{const c=document.getElementById('che-acid-card');return c?c.innerText.slice(0,700):'NO CARD'});console.log('=== '+el+'\n'+t);
 const c=await p.$('#che-acid-card');if(c&&el==='Cu'){await c.scrollIntoViewIfNeeded();await c.screenshot({path:'v4/atlas_acid_Cu.png'})}}
console.log('ERR',errs.length,[...new Set(errs)].slice(0,6).join('\n'));await b.close()})();
