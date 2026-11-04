// Cele dotykowe klocków na telefonie (375 px): wypisuje klocki z przyciskami/polami o wysokości lub szerokości < 32 px. NODE_PATH=$(npm root -g) node narzedzia/test_dotyk_klockow.js. Komórki układu okresowego i checkboxy są zamierzenie małe.
const {chromium}=require('playwright');const fs=require('fs');const dir='/home/claude/Repo_Edukacyjny_E8/chemia/html/';
(async()=>{const b=await chromium.launch();const seen=new Set(),rows=[];
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&fs.readFileSync(dir+f,'utf8').includes('data-klocek='))){const p=await b.newPage({viewport:{width:375,height:800}});
await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));await p.goto('file://'+dir+f);await p.waitForTimeout(500);
const names=await p.evaluate(()=>[...new Set([...document.querySelectorAll('[data-klocek]')].map(e=>e.dataset.klocek))]);
for(const n of names){if(seen.has(n))continue;seen.add(n);
const r=await p.evaluate(n=>{const e=document.querySelector('[data-klocek="'+n+'"]');let s=0,t=0,ex='';e.querySelectorAll('button,select,input:not([type=range]),summary,[role=button]').forEach(x=>{const r=x.getBoundingClientRect();if(!r.width||!r.height)return;t++;if(r.height<32||r.width<32){s++;if(!ex)ex=(x.textContent||x.tagName).trim().slice(0,12)+' '+Math.round(r.width)+'x'+Math.round(r.height)}});return{s,t,ex}},n);
if(r.s)rows.push([r.s,n,r.t,r.ex])}await p.close()}
rows.sort((a,b)=>b[0]-a[0]);console.log(seen.size);rows.forEach(r=>console.log(r.join(' | ')));await b.close()})()
