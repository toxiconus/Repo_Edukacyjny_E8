const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/'+process.argv[2]);await p.waitForTimeout(3000);
console.log(await p.evaluate(()=>{const v=CHE.P0_REGRESSION_V412.audit();const out=[];const seen=new Set();(function f(o,d){if(!o||typeof o!=='object'||d>6||seen.has(o))return;seen.add(o);if(o.ok===false&&o.id)out.push(JSON.stringify(o).slice(0,300));Object.keys(o).forEach(k=>f(o[k],d+1))})(v,0);return out.join('\n')||Object.keys(v).join(',')}));await b.close()})();
