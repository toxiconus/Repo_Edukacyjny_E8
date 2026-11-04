// Kontrola klocków na telefonie (375 px): wypisuje te z poziomym przepełnieniem. NODE_PATH=$(npm root -g) node narzedzia/test_mobile_klockow.js (wymaga zbudowanych lekcji). Tabele w kontenerze overflow-x:auto (stechiometria, tabela-rozpuszczalnosci) są zamierzone.
const {chromium}=require('playwright');const fs=require('fs');const dir='/home/claude/Repo_Edukacyjny_E8/chemia/html/';
(async()=>{const b=await chromium.launch();const seen=new Set(),rows=[];
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&fs.readFileSync(dir+f,'utf8').includes('data-klocek='));
for(const f of files){const p=await b.newPage({viewport:{width:375,height:800}});
await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));await p.goto('file://'+dir+f);await p.waitForTimeout(600);
const names=await p.evaluate(()=>[...new Set([...document.querySelectorAll('[data-klocek]')].map(e=>e.dataset.klocek))]);
for(const n of names){if(seen.has(n))continue;seen.add(n);
const r=await p.evaluate(n=>{const e=document.querySelector('[data-klocek="'+n+'"]');const W=document.documentElement.clientWidth,er=e.getBoundingClientRect();let over=0,ex='';e.querySelectorAll('*').forEach(t=>{const r=t.getBoundingClientRect();if(r.width&&r.right>W+2&&getComputedStyle(t).position!=='fixed'){over++;if(!ex)ex=t.tagName+'.'+(t.className&&t.className.baseVal!==undefined?t.className.baseVal:t.className)+' '+Math.round(r.right)}});
const sw=e.scrollWidth>e.clientWidth+2;let small=0;e.querySelectorAll('button,input,select').forEach(t=>{const r=t.getBoundingClientRect();if(r.width&&r.height&&(r.height<28))small++});return{over,ex,sw,sw2:e.scrollWidth+'/'+e.clientWidth,small,w:Math.round(er.width)}},n);
if(r.over||r.sw)rows.push([n,f.slice(0,18),JSON.stringify(r)])}
await p.close()}
console.log('klocki',seen.size,'z poziomym przepełnieniem',rows.length);rows.forEach(r=>console.log(r.join(' | ')));await b.close()})()
