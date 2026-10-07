const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(3000);
console.log(await p.evaluate(()=>{const v=CHE.P0_REGRESSION_V412.audit();const out=[];(function f(o,path){if(!o||typeof o!=='object'||path.length>4)return;if(Array.isArray(o)){o.forEach((x,i)=>{if(x&&x.ok===false)out.push(path+'['+i+'] '+JSON.stringify(x).slice(0,300));else f(x,path+'['+i+']')});return}Object.keys(o).forEach(k=>f(o[k],path+'.'+k))})(v,'');return out.slice(0,10).join('\n')}));await b.close()})();
