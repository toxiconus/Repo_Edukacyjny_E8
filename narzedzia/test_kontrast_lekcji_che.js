// Kontrola kontrastu WSZYSTKICH lekcji chemii w ciemnym motywie i na telefonie (jak test_kontrast_lekcji.js). Fałszywe alarmy: przejścia CSS i tekst na kształtach SVG. NODE_PATH=$(npm root -g) node narzedzia/test_kontrast_lekcji_che.js
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();
for(const [dir,name] of [['chemia/html/','che']]){const d='/home/claude/Repo_Edukacyjny_E8/'+dir;const rows=[];let n=0,over=0;
for(const f of fs.readdirSync(d).filter(f=>f.endsWith('.html')&&f!=='index.html')){n++;
 for(const mode of ['dark','mob']){const p=await b.newPage({viewport:{width:mode==='mob'?375:800,height:800}});const pe=[];p.on('pageerror',e=>pe.push(e.message));await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));await p.goto('file://'+d+f);await p.waitForTimeout(250);
 if(mode==='dark')await p.evaluate(()=>{try{localStorage.setItem('lekcja-motyw','dark')}catch(e){}});await p.reload();await p.waitForTimeout(900);
 const r=await p.evaluate((mode)=>{function lum(c){const m=c.match(/[\d.]+/g);if(!m)return null;const a=m.slice(0,3).map(x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2]}
 function bg(el){while(el){const c=getComputedStyle(el).backgroundColor;if(c&&!/rgba\(0, 0, 0, 0\)|transparent/.test(c)&&!(/^rgba/.test(c)&&parseFloat(c.split(',')[3])<0.9))return c;el=el.parentElement}return 'rgb(0,0,0)'}
 if(mode==='mob'){const W=document.documentElement.clientWidth;return{over:document.documentElement.scrollWidth>W+2?document.documentElement.scrollWidth:0}}
 let bad=0,tot=0,ex='';document.querySelectorAll('main *,.container *').forEach(t=>{if(![...t.childNodes].some(x=>x.nodeType===3&&x.textContent.trim()))return;const cs=getComputedStyle(t);const fg=cs.color;const l1=lum(fg),l2=lum(bg(t));if(l1==null||l2==null)return;tot++;const cr=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);if(cr<3){bad++;if(!ex)ex=t.className+' '+fg+' on '+bg(t)+' "'+t.textContent.trim().slice(0,16)+'"'}});return{bad,tot,ex}},mode);
 if(pe.length)rows.push(['JS',f,pe[0]]);if(r.bad>0)rows.push(['dark',f,r.bad+'/'+r.tot,r.ex]);if(r.over)rows.push(['mob',f,r.over]);await p.close()}}
console.log('==',name,n,'lekcji, problemów',rows.length);rows.sort((a,b)=>String(b[2]).localeCompare(String(a[2]),undefined,{numeric:true})).slice(0,8).forEach(r=>console.log(r.join(' | ').slice(0,200)))}
await b.close()})()
