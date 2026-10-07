// Kandydaci na martwy kod: instrukcje najwyższego poziomu, które tylko przypisują C.X / CHE.X, do których nic poza nimi się nie odwołuje.
const fs=require('fs'),acorn=require('acorn');const f=process.argv[2];const s=fs.readFileSync(f,'utf8');
const re=/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g;let m,cands=[];
while((m=re.exec(s))){const code=m[1],off=m.index+m[0].indexOf('>')+1;let ast;try{ast=acorn.parse(code,{ecmaVersion:'latest',allowReturnOutsideFunction:true})}catch(e){continue}
 const tops=[];(function collect(body){body.forEach(st=>{tops.push(st)})})(ast.body);
 // rozwiń IIFE z jedną funkcją: bierz instrukcje wewnątrz (drugi poziom)
 const units=[];tops.forEach(st=>{const e=st.type==='ExpressionStatement'?st.expression:null;const fn=e&&e.type==='CallExpression'&&(e.callee.type==='FunctionExpression'||e.callee.type==='ArrowFunctionExpression')?e.callee:null;
  if(fn&&fn.body.type==='BlockStatement'&&code.slice(st.start,st.end).length>200000)fn.body.body.forEach(x=>units.push(x));else units.push(st)});
 units.forEach(st=>{const t=code.slice(st.start,st.end);const names=new Set();t.replace(/\b(?:C|CHE|window\.CHE)\.([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)/g,(_,k)=>{names.add(k);return''});if(!names.size)return;
  if(/(define|defineView|addEventListener|register|querySelector|getElementById|appendChild|mount)\s*\(/.test(t))return;
  const rest=s.slice(0,off+st.start)+s.slice(off+st.end);const used=[...names].filter(k=>new RegExp('\\b'+k+'\\b').test(rest));
  if(!used.length)cands.push([t.length,[...names].join(','),off+st.start])})}
cands.sort((a,b)=>b[0]-a[0]);let tot=0;cands.forEach(c=>tot+=c[0]);console.log('kandydaci',cands.length,'bajtów',tot);cands.slice(0,+process.argv[3]||40).forEach(c=>console.log(c[0]+'\t'+c[1].slice(0,120)+'\t@'+c[2]));
if(process.argv[4]==='--write'){let o=s;cands.sort((a,b)=>b[2]-a[2]).forEach(c=>{o=o.slice(0,c[2])+'/*[usunięte: martwy '+c[1].slice(0,60)+']*/'+o.slice(c[2]+c[0])});fs.writeFileSync(process.argv[5],o);console.log('zapisano',process.argv[5])}
