// Kontrola wizualizacji biologii (data-bio-viz): ciemny motyw (kontrast < 3) i telefon 375 px (poziome przepełnienie). NODE_PATH=$(npm root -g) node narzedzia/test_bio_wizualizacji.js (wymaga zbudowanych lekcji w biologia/html). Fałszywe alarmy: tekst na kształtach SVG.
const {chromium}=require('playwright');const fs=require('fs');const dir='/home/claude/Repo_Edukacyjny_E8/biologia/html/';
(async()=>{const b=await chromium.launch();const seen=new Set(),rows=[],errs=[];
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&fs.readFileSync(dir+f,'utf8').includes('data-bio-viz'))){
 for(const mode of ['dark','mob']){const p=await b.newPage({viewport:{width:mode==='mob'?375:800,height:800}});const pe=[];p.on('pageerror',e=>pe.push(e.message));
 await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));await p.goto('file://'+dir+f);await p.waitForTimeout(600);
 if(mode==='dark')await p.evaluate(()=>{try{localStorage.setItem('lekcja-motyw','dark')}catch(e){}});await p.reload();await p.waitForTimeout(500);
 if(mode==='dark'&&pe.length)errs.push(f+' '+pe[0]);
 const r=await p.evaluate((mode)=>{function lum(c){const m=c.match(/[\d.]+/g);if(!m)return null;const a=m.slice(0,3).map(x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2]}
 function bg(el){while(el){const c=getComputedStyle(el).backgroundColor;if(c&&!/rgba\(0, 0, 0, 0\)|transparent/.test(c)&&!(/^rgba/.test(c)&&parseFloat(c.split(',')[3])<0.9))return c;el=el.parentElement}return 'rgb(0,0,0)'}
 const out=[];document.querySelectorAll('[data-bio-viz]').forEach(v=>{const n=v.dataset.bioViz;let bad=0,tot=0,ex='',over=0;
  if(mode==='dark'){v.querySelectorAll('*').forEach(t=>{if(![...t.childNodes].some(x=>x.nodeType===3&&x.textContent.trim()))return;const cs=getComputedStyle(t);const fg=t.namespaceURI.includes('svg')?cs.fill:cs.color;const l1=lum(fg),l2=lum(bg(t));if(l1==null||l2==null)return;tot++;const cr=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);if(cr<3){bad++;if(!ex)ex=fg+' on '+bg(t)+' "'+t.textContent.trim().slice(0,14)+'"'}})}
  else{const W=document.documentElement.clientWidth;v.querySelectorAll('*').forEach(t=>{const r=t.getBoundingClientRect();if(r.width&&r.right>W+2)over++});}
  out.push({n,bad,tot,ex,over})});return out},mode);
 r.forEach(o=>{const key=mode+o.n;if(seen.has(key))return;seen.add(key);if(o.bad>0||o.over>0)rows.push([mode,o.n,f.slice(0,18),o.bad+'/'+o.tot,o.over,o.ex])});await p.close()}}
console.log('wizualizacji',[...seen].length/2|0);console.log('JS błędy:',errs.length,errs.slice(0,3));rows.sort((a,b)=>(b[3].split('/')[0]-a[3].split('/')[0])||b[4]-a[4]);rows.slice(0,40).forEach(r=>console.log(r.join(' | ')));console.log('problemów:',rows.length);await b.close()})()
