/* lab_dane.cjs — wyciąga z engine/src/lekcja/rozszerzenia.js dane pracowni (zlewki GFX.rx, notatki, reakcje) bez silnika.
   Uruchamia plik w piaskownicy z atrapami CHE.VIEW / LAB.GFX.rx / DATA / document i zapisuje engine/src/lite/lab-dane.json.
   Użycie: node tools/lab_dane.cjs */
const fs=require('fs'),path=require('path'),vm=require('vm');
const SRC=path.join(__dirname,'..','engine','src');
const specs={},views={};
function deep(){return new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>'':k==='length'?0:deep(),apply:()=>deep(),construct:()=>deep(),set:()=>true})}
const el=()=>({style:{},classList:{add(){},toggle(){},remove(){}},appendChild(){},append(){},setAttribute(){},addEventListener(){},set textContent(v){},set innerHTML(v){}});
const D={SUBSTANCES:{},REACTIONS:{},REACTION_DATA:{}};
const Dp=new Proxy(D,{get:(t,k)=>k in t?t[k]:(t[k]={})});
const rx={register:(k,s)=>{specs[k]=s},get:k=>specs[k],info:()=>({}),state:()=>({}),mount:()=>({play(){}})};
const G={rx,vessels:{get:()=>({draw(){}}),register(){}},rx2:deep()};
const CHE={VIEW:{define:(id,d)=>{views[id]={title:d.title,hint:d.hint}}},LAB:{GFX:G},DATA:Dp};
const ctx={window:{},document:{createElement:el,head:{appendChild(){}},getElementById:()=>null,querySelectorAll:()=>[]},console,Math,JSON,Object,Array,String,Number,Date,RegExp,setTimeout(){},requestAnimationFrame(){},CanvasRenderingContext2D:undefined};
ctx.window=ctx;ctx.CHE=CHE;ctx.window.CHE=CHE;
let err=0;try{vm.runInNewContext(fs.readFileSync(path.join(SRC,'lekcja','rozszerzenia.js'),'utf8'),ctx,{filename:'rozszerzenia.js'})}catch(e){err=1;console.error('UWAGA:',e.message)}
const P=CHE.PRACOWNIE||{};
const R={};Object.keys(D.REACTIONS).forEach(k=>{try{R[k]=JSON.parse(JSON.stringify(D.REACTIONS[k]))}catch(e){}});
const out={zrodlo:'rozszerzenia.js',specs:JSON.parse(JSON.stringify(specs)),pracownie:JSON.parse(JSON.stringify(P)),reakcje:R};
fs.writeFileSync(path.join(SRC,'lite','lab-dane.json'),JSON.stringify(out));
console.log('zlewki:',Object.keys(specs).length,'pracownie:',Object.keys(P).join(', '),'reakcje:',Object.keys(R).length,err?'(z błędem — dane częściowe)':'');
