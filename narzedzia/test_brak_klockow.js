// Wykrywa klocki z błędem lub „Brak klocka” we wszystkich lekcjach chemii. NODE_PATH=$(npm root -g) node narzedzia/test_brak_klockow.js
const {chromium}=require('playwright');const fs=require('fs');const D='/home/claude/Repo_Edukacyjny_E8/chemia/html/';
(async()=>{const b=await chromium.launch();const bad=[];
for(const f of fs.readdirSync(D).filter(f=>f.endsWith('.html'))){const p=await b.newPage();await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));await p.goto('file://'+D+f);await p.waitForTimeout(400);
const r=await p.evaluate(()=>[...document.querySelectorAll('[data-klocek]')].filter(e=>/Brak klocka|błąd/i.test(e.textContent.slice(0,80))).map(e=>e.dataset.klocek+': '+e.textContent.slice(0,50)));
if(r.length)bad.push(f+' '+r.join('|'));await p.close()}
console.log(bad.length?bad.join('\n'):'brak błędów klocków');await b.close()})()
