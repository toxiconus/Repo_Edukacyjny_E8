// Inwentaryzacja przypisań C.X / CHE.X w skryptach dużego pliku: rozmiar wyrażenia i liczba odwołań.
const fs=require('fs'),acorn=require('acorn');const f=process.argv[2];const s=fs.readFileSync(f,'utf8');
const re=/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g;let m,agg={};
while((m=re.exec(s))){const code=m[1];let ast;try{ast=acorn.parse(code,{ecmaVersion:'latest',allowReturnOutsideFunction:true})}catch(e){continue}
 (function v(n){if(!n||typeof n.type!=='string')return;if(n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&!n.left.computed&&n.left.object.type==='Identifier'&&/^(C|CHE)$/.test(n.left.object.name)){const k=n.left.property.name;(agg[k]=agg[k]||{n:0,bytes:0}).n++;agg[k].bytes+=n.right.end-n.right.start}
  for(const k in n){const x=n[k];if(Array.isArray(x))x.forEach(y=>y&&typeof y.type==='string'&&v(y));else if(x&&typeof x.type==='string')v(x)}})(ast)}
const out=Object.entries(agg).map(([k,o])=>{const refs=(s.match(new RegExp('\\.'+k+'\\b','g'))||[]).length-o.n;return[k,o.n,o.bytes,refs]}).sort((a,b)=>b[2]-a[2]);
out.slice(0,+process.argv[3]||60).forEach(r=>console.log(r.join('\t')));
