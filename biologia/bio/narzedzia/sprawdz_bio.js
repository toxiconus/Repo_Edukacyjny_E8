/* sprawdz_bio.js — test lekcji BIO w Chromium 390 px (i 1200 px). Użycie: node narzedzia/sprawdz_bio.js [plik.html ...] [--zrzuty katalog]
   Wypisuje tylko problemy: błędy konsoli, niezamontowane grafiki, przewijanie w bok. Kod wyjścia 1 = FAIL. */
const path=require('path'),fs=require('fs');
let pw;try{pw=require('playwright')}catch(e){pw=require(path.join(require('child_process').execSync('npm root -g').toString().trim(),'playwright'))}
const a=process.argv.slice(2),zi=a.indexOf('--zrzuty'),zd=zi>=0?a.splice(zi,2)[1]:null;
const dir=path.join(__dirname,'..','dist');
const files=a.length?a:fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&f!=='index.html').map(f=>path.join(dir,f));
(async()=>{const b=await pw.chromium.launch();let fail=0;
for(const f of files)for(const [w,th] of [[390,'light'],[1200,'light']]){const p=await b.newPage({viewport:{width:w,height:900}});const errs=[];
 p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.addInitScript(t=>{try{localStorage.setItem('bio-theme',t)}catch(e){}},th);
 await p.goto('file://'+path.resolve(f));await p.waitForTimeout(800);
 const r=await p.evaluate(()=>{const figs=[...document.querySelectorAll('[data-bio-viz]')];
  return{figs:figs.length,bad:figs.filter(x=>!x.querySelector('.bio-fig-body').children.length||x.querySelector('.bio-err')).map(x=>x.dataset.bioViz),
   bok:document.documentElement.scrollWidth>innerWidth,szer:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+1&&!e.closest('.table-wrap,.bv-scroll,.bio-tree')}).slice(0,3).map(e=>e.tagName+'.'+e.className)}});
 const bl=[];if(errs.length)bl.push('konsola: '+errs.slice(0,3).join(' | '));if(r.bad.length)bl.push('grafiki: '+r.bad.join(','));if(r.bok)bl.push('przewijanie w bok: '+r.szer.join(' '));
 if(bl.length){fail++;console.log('FAIL',path.basename(f),w+'px',th,bl.join('; '))}
 if(zd&&w===390){fs.mkdirSync(zd,{recursive:true});await p.evaluate(()=>document.querySelectorAll('.bio-fig').forEach(x=>x.classList.add('in')));
  const figs=await p.$$('figure.bio-fig');for(let i=0;i<figs.length;i++)await figs[i].screenshot({path:path.join(zd,th+'_'+String(i).padStart(2,'0')+'.png')});
  await p.screenshot({path:path.join(zd,th+'_top.png')})}
 await p.close()}
console.log(fail?fail+' FAIL':'OK '+files.length+' lekcji');await b.close();process.exit(fail?1:0)})();
