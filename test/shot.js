const {chromium}=require('playwright');
(async()=>{const file=process.argv[2],out=process.argv[3]||'/home/claude/che/test',theme=process.argv[4]||'light';
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1180,height:900},colorScheme:theme});await p.addInitScript(()=>{delete window.IntersectionObserver});const errs=[];
p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')errs.push(m.type()+': '+m.text())});p.on('pageerror',e=>errs.push('PAGEERR: '+e.message+'\n'+(e.stack||'').split('\n').slice(0,3).join('\n')));
await p.goto('file://'+file);await p.waitForTimeout(1500);
const tabs=await p.$$eval('.cl-nav button',bs=>bs.map(b=>b.textContent));
for(const t of tabs){await p.click('.cl-nav button:text-is("'+t+'")');await p.waitForTimeout(2500);
 // klik w przyciski główne scen, żeby coś się działo
 if(t==='Zestawy'){const bs=await p.$$('.gx-ui button.pri');for(const x of bs){await x.click().catch(()=>{})}await p.waitForTimeout(4000)}
 const n=t.replace(/[^a-zA-Z]/g,'');await p.screenshot({path:out+'/'+theme+'_'+n+'.png',fullPage:true});}
console.log('TABS',tabs.join(' | '));console.log('ERRORS',errs.length);errs.slice(0,30).forEach(e=>console.log(e));await b.close()})();
