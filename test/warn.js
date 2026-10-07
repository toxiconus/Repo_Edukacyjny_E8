const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());const w=[];p.on('console',m=>{if(m.type()==='warning'||m.type()==='error')w.push(m.text().slice(0,200))});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(3000);
const r=await p.evaluate(()=>{const o={};for(const k of ['AUDIT','REGRESSION','FULL_REGRESSION_V282','RUNTIME_SCIENCE_SELFTEST']){try{const x=CHE[k];const f=x&&(x.run||x.audit||x.check);o[k]=f?JSON.stringify(f.call(x)).slice(0,160):typeof x}catch(e){o[k]='ERR '+e.message}}return o});
console.log(JSON.stringify(r,null,1));console.log('WARN',w.length);[...new Set(w)].slice(0,12).forEach(x=>console.log(' ',x));await b.close()})();
