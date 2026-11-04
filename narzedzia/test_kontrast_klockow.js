// Kontrola kontrastu WSZYSTKICH klocków w ciemnym motywie (po jednym wystąpieniu każdego): NODE_PATH=$(npm root -g) node narzedzia/test_kontrast_klockow.js (wymaga zbudowanych lekcji w chemia/html).
// Wypisuje klocki z elementami tekstu o kontraście < 3. Znane fałszywe alarmy: tekst na kształcie SVG/canvas (wyświetlacz pH-metru, kółka ładunków, środek mapy myśli).
const {chromium}=require('playwright');const fs=require('fs');const dir='/home/claude/Repo_Edukacyjny_E8/chemia/html/';
(async()=>{const b=await chromium.launch();const res={};const seen=new Set();
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&fs.readFileSync(dir+f,'utf8').includes('data-klocek='));
for(const f of files){const p=await b.newPage({viewport:{width:420,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));await p.goto('file://'+dir+f);await p.waitForTimeout(700);
await p.evaluate(()=>{try{localStorage.setItem('lekcja-motyw','dark')}catch(e){}});await p.reload();await p.waitForTimeout(900);
const names=await p.evaluate(()=>[...new Set([...document.querySelectorAll('[data-klocek]')].map(e=>e.dataset.klocek))]);
for(const n of names){if(seen.has(n))continue;seen.add(n);const k=p.locator('[data-klocek="'+n+'"]').first();try{await k.scrollIntoViewIfNeeded({timeout:3000});await p.waitForTimeout(250);
const r=await k.evaluate(e=>{function lum(c){const m=c.match(/[\d.]+/g);if(!m)return null;const a=m.slice(0,3).map(x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2]}
function bg(el){while(el){const c=getComputedStyle(el).backgroundColor;if(c&&!/rgba\(0, 0, 0, 0\)|transparent/.test(c)&&!(/^rgba/.test(c)&&parseFloat(c.split(',')[3])<0.9))return c;el=el.parentElement}return 'rgb(0,0,0)'}
let bad=0,tot=0,ex=[];e.querySelectorAll('*').forEach(t=>{if(![...t.childNodes].some(x=>x.nodeType===3&&x.textContent.trim()))return;const cs=getComputedStyle(t);const fg=t.namespaceURI.includes('svg')?cs.fill:cs.color;const l1=lum(fg),l2=lum(bg(t));if(l1==null||l2==null)return;tot++;const cr=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);if(cr<3){bad++;if(ex.length<2)ex.push(fg+' on '+bg(t)+' "'+t.textContent.trim().slice(0,14)+'"')}});return{bad,tot,ex}});
res[n]=Object.assign(r,{f});}catch(e){res[n]={err:1,f}}}
if(errs.length)console.log('ERR',f,errs[0]);await p.close()}
const rows=Object.entries(res).filter(([n,r])=>r.bad>0).sort((a,b)=>b[1].bad-a[1].bad);
console.log('klocki:',Object.keys(res).length,'z problemem:',rows.length);rows.forEach(([n,r])=>console.log(n,r.bad+'/'+r.tot,r.f.slice(0,20),JSON.stringify(r.ex)));await b.close()})()
