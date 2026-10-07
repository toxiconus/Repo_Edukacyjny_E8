// Czyszczenie wyniku builda: (1) martwe moduły (tools/modules.js „dead”), (2) komentarze JS (acorn — bezpiecznie), CSS i HTML.
// Źródła w src/ zachowują komentarze; usuwamy tylko z pliku wynikowego. Użycie: node clean.js plik.html
const fs=require('fs'),acorn=require('acorn');const f=process.argv[2];let s=fs.readFileSync(f,'utf8');const n0=s.length;
const DEAD=['EDUCATION_MASS_V312','SCIENCE_PROVENANCE_CLOSURE_V384','SCIENCE_SOURCE_PACKAGE_V319','SCIENCE_PROVENANCE_AUDIT_V383','CURRICULUM_CHEMISTRY_ONLY_V358','FINAL_CHEMISTRY_AUDIT_V381','P0_REGRESSION_V352','CHEMISTRY_LO_MAX160','P0_REGRESSION_V356'];
// 1. martwe moduły
const re=/try \{\n([\s\S]*?)\n\} catch \(err\) \{\n  try \{ console\.warn\('\[CHE module (\d+)\]'[^\n]*\n\}\n/g;let m,dead=0;const cut=[];
while((m=re.exec(s))){const b=m[1];const own=new Set();b.replace(/\b(?:C|CHE|E|window\.CHE)\.([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/g,(_,k)=>{if(k!=='modules'&&k!=='registry')own.add(k);return''});
 if(own.size&&[...own].every(k=>DEAD.includes(k)||/^P0_REGRESSION_V3(8[134]|52|56)$|^EDUCATION_LEDGER$/.test(k)))cut.push([m.index,re.lastIndex])}
cut.reverse().forEach(([a,b])=>{s=s.slice(0,a)+s.slice(b);dead+=b-a});
// 2. komentarze JS
let jsc=0;const sre=/(<script(?![^>]*type="application\/json")[^>]*>)([\s\S]*?)(<\/script>)/g;
s=s.replace(sre,(all,o,code,c)=>{const com=[];try{acorn.parse(code,{ecmaVersion:'latest',allowReturnOutsideFunction:true,allowHashBang:true,onComment:(block,text,start,end)=>{if(/@license|^!/.test(text))return;com.push([start,end,block,/\n/.test(text)])}})}catch(e){return all}
 let out=code;com.sort((a,b)=>b[0]-a[0]).forEach(([a,b,blk,nl])=>{jsc+=b-a;out=out.slice(0,a)+(blk?(nl?'\n':' '):'')+out.slice(b)});out=out.replace(/\n[ \t]*\n(?:[ \t]*\n)+/g,'\n\n');return o+out+c});
// 3. CSS i HTML
let cssc=0;s=s.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g,(all,o,css,c)=>o+css.replace(/\/\*[\s\S]*?\*\//g,x=>{cssc+=x.length;return''})+c);
let htc=0;const parts=s.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/);s=parts.map((p,i)=>i%2?p:p.replace(/<!--(?!\[if)[\s\S]*?-->/g,x=>{htc+=x.length;return''})).join('');
fs.writeFileSync(f,s);console.log('clean: martwe moduły '+cut.length+' ('+Math.round(dead/1024)+' KB), komentarze JS '+Math.round(jsc/1024)+' KB, CSS '+Math.round(cssc/1024)+' KB, HTML '+Math.round(htc/1024)+' KB; '+Math.round(n0/1024)+' → '+Math.round(s.length/1024)+' KB');
