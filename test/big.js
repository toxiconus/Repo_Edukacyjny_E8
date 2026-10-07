const {chromium}=require('playwright');
(async()=>{const [file,tag]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});const errs=[];
await p.addInitScript(()=>{delete window.IntersectionObserver});
p.on('pageerror',e=>errs.push('PAGEERR: '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push('ERR: '+m.text().slice(0,200))});
await p.goto('file://'+file);await p.waitForTimeout(2500);const e0=errs.length;
const views=['lab-library-v001','lab-beaker-v102','lab-stations-v102','lab-oxides-v102','reactor-enhanced','reakcje-kwasu-v03','beaker-prediction-enhanced'];
const res=await p.evaluate(async(views)=>{const out=[];const box=document.createElement('div');box.id='T';box.style.cssText='position:relative;z-index:99999;background:#fff;width:1200px';document.body.prepend(box);
 for(const v of views){const h=document.createElement('div');h.dataset.che=v;box.appendChild(h);try{CHE.VIEW.mount(h);out.push(v+': '+(h.querySelector('.lab-note')?h.querySelector('.lab-note').textContent.slice(0,120):'ok')+' canv='+h.querySelectorAll('canvas').length)}catch(e){out.push(v+': THROW '+e.message)}}
 const h=document.createElement('div');box.appendChild(h);try{CHE.LABVIEW.mount(h,{});out.push('LABVIEW all panels: canv='+h.querySelectorAll('canvas').length+' panels='+h.querySelectorAll('[data-panel]').length)}catch(e){out.push('LABVIEW THROW '+e.message)}
 out.push('GFX '+CHE.LAB.GFX.version+' LIB '+CHE.LAB.LIBRARY.version);return out},views);
await p.waitForTimeout(4000);
// kliknij "go"/start w widokach reakcji
await p.evaluate(()=>{document.querySelectorAll('#T button').forEach(b=>{if(/Obserwuj|Start|Wykonaj|Dodaj|Uruchom/.test(b.textContent))try{b.click()}catch(_){}})});await p.waitForTimeout(4000);
await p.screenshot({path:'/home/claude/che/test/big_'+tag+'.png',fullPage:false});
for(const v of ['lab-library-v001','reakcje-kwasu-v03','beaker-prediction-enhanced','lab-stations-v102']){const el=await p.$('#T [data-che="'+v+'"]');if(el){await el.scrollIntoViewIfNeeded();await p.waitForTimeout(600);await el.screenshot({path:'/home/claude/che/test/big_'+tag+'_'+v+'.png'}).catch(()=>{})}}
console.log(res.join('\n'));console.log('load errors',e0,'total',errs.length);[...new Set(errs)].slice(0,25).forEach(e=>console.log(e));await b.close()})();
