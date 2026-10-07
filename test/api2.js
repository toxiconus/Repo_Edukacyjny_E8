const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.route(/fonts\./,r=>r.abort());
await p.goto('file:///home/claude/che/out/CHE_lab_wizualizacje_v0_57_GFX16.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>{const I=CHE.IONIC,Ch=CHE.CHEM;let out={};out.comp=I.compound('Fe3','SO4');out.cats=I.table.cations.map(c=>c.id).join(',');out.bal=String(Ch.balanceReaction).slice(0,400);try{out.b1=Ch.balanceReaction(['Fe2O3','H2SO4'],['Fe2(SO4)3','H2O'])}catch(e){out.b1='ERR '+e.message}try{out.b2=Ch.balanceReaction('Fe2O3 + H2SO4 = Fe2(SO4)3 + H2O')}catch(e){out.b2='ERR '+e.message}return JSON.stringify(out)}));
await b.close()})();
