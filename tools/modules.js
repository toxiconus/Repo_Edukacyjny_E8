// Analiza modułów "try{...}catch(err){console.warn('[CHE module N]'...)}" w dużym pliku: co przypisują (C.X, E.X), kto ich używa.
const fs=require('fs');const f=process.argv[2];const s=fs.readFileSync(f,'utf8');
const META=/AUDIT|REGRESSION|GATE|LEDGER|ROADMAP|CONTRACT|VERIFY|LOCK|PROVENANCE|CLOSURE|STAMP|^MAX|^P0_|gapAudit|TEST|PROMOTION|INTEGRITY|COMPLETION|RECONCILIATION|REQUIREMENTS|fileStamp|CHECKLIST|SNAPSHOT|STATUS_V|SOURCE_PACKAGE|SOURCE_BRIDGE|DATA_GAP/;
const re=/try \{\n([\s\S]*?)\n\} catch \(err\) \{\n  try \{ console\.warn\('\[CHE module (\d+)\]'/g;let m,mods=[];
while((m=re.exec(s))){const body=m[1],start=m.index,end=s.indexOf('\n}',re.lastIndex)+2;const names=new Set();body.replace(/\b(?:C|CHE|E|window\.CHE)\.([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/g,(_,k)=>{names.add(k);return''});mods.push({n:+m[2],start,end:re.lastIndex,len:body.length,names:[...names]})}
console.log('moduły',mods.length,'łącznie KB',Math.round(mods.reduce((a,x)=>a+x.len,0)/1024));
const metaMods=mods.filter(x=>x.names.length&&x.names.every(k=>META.test(k)||k==='modules'||k==='registry'));
console.log('moduły tylko-meta',metaMods.length,'KB',Math.round(metaMods.reduce((a,x)=>a+x.len,0)/1024));
const noNames=mods.filter(x=>!x.names.length);console.log('moduły bez przypisań',noNames.length,'KB',Math.round(noNames.reduce((a,x)=>a+x.len,0)/1024));
if(process.argv[3]==='list')metaMods.forEach(x=>console.log(x.n,x.len,x.names.filter(k=>k!=='modules'&&k!=='registry').join(',')));
// martwe: żadna nazwa modułu nie jest użyta poza nim (z pominięciem modułów tylko-meta i wpisów E.modules/E.registry)
if(process.argv[3]==='dead'){const metaSet=new Set(metaMods.map(x=>x.n));
 const live=s;const dead=[];
 mods.forEach(x=>{if(!x.names.length)return;const own=x.names.filter(k=>k!=='modules'&&k!=='registry');if(!own.length)return;
  const body=s.slice(x.start,x.end);if(/define(View)?\s*\(|addEventListener|getElementById|querySelector|appendChild|innerHTML|\.mount\s*\(/.test(body))return;
  let txt=s.slice(0,x.start)+s.slice(x.end);mods.forEach(y=>{if(metaSet.has(y.n)&&y!==x){/* nie licz odwołań z modułów meta */}});
  const metaTxt=mods.filter(y=>metaSet.has(y.n)&&y!==x).map(y=>s.slice(y.start,y.end));metaTxt.forEach(t=>{txt=txt.split(t).join('')});
  txt=txt.replace(/E\.(modules|registry)\.[A-Za-z0-9_]+\s*=\s*[^;]+;/g,'');
  const used=own.filter(k=>new RegExp('\\b'+k+'\\b').test(txt));if(!used.length)dead.push([x.n,x.len,own.join(',')])});
 dead.sort((a,b)=>b[1]-a[1]);console.log('martwe moduły',dead.length,'KB',Math.round(dead.reduce((a,x)=>a+x[1],0)/1024));dead.slice(0,60).forEach(d=>console.log(d.join('\t').slice(0,160)))}
