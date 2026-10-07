const {chromium}=require('playwright');
(async()=>{const [file,tab,theme,prefix,wait]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1180,height:900},colorScheme:theme||'light'});const errs=[];
p.on('pageerror',e=>errs.push('PAGEERR: '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('file://'+file);await p.waitForTimeout(800);await p.click('.cl-nav button:text-is("'+tab+'")');await p.waitForTimeout(500);
const cards=await p.$$('.cl-card');let i=0;for(const c of cards){await c.scrollIntoViewIfNeeded();
 if(tab==='Zestawy'){const bs=await c.$$('.gx-ui button.pri');for(const x of bs){const t=await x.textContent();if(!/Zgaś|Zamknij/.test(t))await x.click()}}
 await p.waitForTimeout(+(wait||1500));await c.screenshot({path:prefix+'_'+(i++)+'.png'})}
console.log('cards',i,'errors',errs.length,errs.slice(0,10).join('\n'));await b.close()})();
