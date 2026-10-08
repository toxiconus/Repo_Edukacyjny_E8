/* sprawdz.js — test lekcji w Chromium 390 px. Użycie: node narzedzia/sprawdz.js [plik.html ...] (domyślnie dist/jeden_plik/*.html)
   Wypisuje tylko problemy: błędy konsoli, brak lekcji, widoczny ekran startowy, przewijanie w bok. Kod wyjścia 1 = FAIL. */
const path=require('path'),fs=require('fs');
let pw;try{pw=require('playwright')}catch(e){pw=require(path.join(require('child_process').execSync('npm root -g').toString().trim(),'playwright'))}
const dir=path.join(__dirname,'..','dist','jeden_plik');
const files=process.argv.slice(2).length?process.argv.slice(2):fs.readdirSync(dir).filter(f=>f.endsWith('.html')).map(f=>path.join(dir,f));
(async()=>{const b=await pw.chromium.launch();let fail=0;
for(const f of files){const p=await b.newPage({viewport:{width:390,height:800}});const errs=[];
 p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('file://'+path.resolve(f));await p.waitForTimeout(2500);
 const r=await p.evaluate(()=>{const l=document.getElementById('che-landing');return{lekcja:!!document.querySelector('.che-lfs-lesson'),
  start:!!l&&getComputedStyle(l).display!=='none',bok:document.documentElement.scrollWidth>innerWidth}});
 const bl=[];if(errs.length)bl.push('konsola: '+errs.slice(0,3).join(' | '));if(!r.lekcja)bl.push('brak lekcji');if(r.start)bl.push('widoczny ekran startowy');if(r.bok)bl.push('przewijanie w bok');
 if(bl.length){fail++;console.log('FAIL',path.basename(f),bl.join('; '))}await p.close()}
console.log(fail?fail+' FAIL':'OK '+files.length+' lekcji');await b.close();process.exit(fail?1:0)})();
