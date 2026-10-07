// Fizyczne usuwanie kodu wycofanych widoków (CHE.VIZ_RETIRED) z dużego pliku: parsuje każdy <script> (acorn),
// usuwa instrukcje define/defineView/CHE.define('<id>', …) dla id z listy. Użycie: node prune.js plik.html
const fs=require('fs'),acorn=require('acorn'),walk=null;
const f=process.argv[2];let s=fs.readFileSync(f,'utf8');
const ret=fs.readFileSync(__dirname+'/../src/viz_retire.js','utf8');const m=ret.match(/var R=\{([\s\S]*?)\};/);
const ids=new Set();m[1].replace(/'([^']+)':/g,(_,k)=>{ids.add(k.replace(/^legacy:/,''));return''});
const NAMES=new Set(['define','defineView']);
let removed=[],cuts=[];
const re=/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g;let mm;
while((mm=re.exec(s))){const code=mm[1],off=mm.index+mm[0].indexOf('>')+1;let ast;
 try{ast=acorn.parse(code,{ecmaVersion:'latest',sourceType:'script',allowReturnOutsideFunction:true,allowHashBang:true})}catch(e){continue}
 (function visit(n,parent){if(!n||typeof n.type!=='string')return;
  if(n.type==='ExpressionStatement'&&n.expression.type==='CallExpression'){const c=n.expression.callee,nm=c.type==='Identifier'?c.name:c.type==='MemberExpression'&&!c.computed?c.property.name:null,a0=n.expression.arguments[0];
   if(nm&&NAMES.has(nm)&&a0&&a0.type==='Literal'&&ids.has(a0.value)){cuts.push([off+n.start,off+n.end,a0.value]);return}}
  for(const k in n){if(k==='parent')continue;const v=n[k];if(Array.isArray(v))v.forEach(x=>x&&typeof x.type==='string'&&visit(x,n));else if(v&&typeof v.type==='string')visit(v,n)}})(ast,null)}
cuts.sort((a,b)=>b[0]-a[0]);let bytes=0;
for(const [a,b,id] of cuts){bytes+=b-a;s=s.slice(0,a)+'/* [wycofane: '+id+' → CHE.VIZ_RETIRED] */'+s.slice(b);removed.push(id)}
fs.writeFileSync(f,s);console.log('prune: usunięto '+removed.length+' definicji ('+Math.round(bytes/1024)+' KB): '+[...new Set(removed)].join(', '));
