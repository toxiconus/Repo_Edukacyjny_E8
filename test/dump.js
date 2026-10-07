const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/'+process.argv[2]);await p.waitForTimeout(2500);
console.log(await p.evaluate(new Function(require('fs').readFileSync(process.argv[3],'utf8'))));await b.close()})();
