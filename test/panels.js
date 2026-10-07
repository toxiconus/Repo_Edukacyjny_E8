const {chromium}=require('playwright');
(async()=>{const [file]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+file);await p.waitForTimeout(2000);
const r=await p.evaluate(()=>{const o={};CHE.LABVIEW.panels.forEach(n=>{const h=document.createElement('div');document.body.appendChild(h);try{CHE.LABVIEW.panel(n,h,{});o[n]=h.querySelectorAll('canvas').length}catch(e){o[n]='ERR '+e.message}});return o});
console.log(JSON.stringify(r));console.log(errs.join('\n'));await b.close()})();
