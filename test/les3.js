const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1000,height:900}});await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/test/kw_preview.html');await p.waitForTimeout(600);
await p.evaluate(async()=>{document.getElementById('advToggle').click();for(let y=0;y<document.body.scrollHeight;y+=400){scrollTo(0,y);await new Promise(r=>setTimeout(r,40))}});await p.waitForTimeout(800);
await p.addStyleTag({content:'*{animation:none!important;transition:none!important}.reveal,[class*=reveal]{opacity:1!important;transform:none!important}.header,.app-header,header{position:static!important}'});
for(const id of ['s4','s6','s7','s8','s10']){const h=await p.$('#'+id);await h.screenshot({path:'v4/les_'+id+'.png'})}
await b.close()})();
