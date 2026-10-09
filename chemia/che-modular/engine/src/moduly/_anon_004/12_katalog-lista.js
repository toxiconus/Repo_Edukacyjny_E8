const IC={
 el:'<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="2.6" fill="currentColor"/><ellipse cx="10" cy="10" rx="8" ry="3.4" fill="none" stroke="currentColor" stroke-width="1.2"/><ellipse cx="10" cy="10" rx="8" ry="3.4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(60 10 10)"/></svg>',
 mo:'<svg viewBox="0 0 20 20"><line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" stroke-width="2"/><circle cx="5.5" cy="10" r="4" fill="currentColor"/><circle cx="14.5" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
 co:'<svg viewBox="0 0 20 20"><g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="14" height="14" rx="1.5"/><line x1="10" y1="3" x2="10" y2="17"/><line x1="3" y1="10" x2="17" y2="10"/></g><circle cx="6.5" cy="6.5" r="1.8" fill="currentColor"/><circle cx="13.5" cy="13.5" r="1.8" fill="currentColor"/></svg>'};

const KIND={el:'pierwiastek (atom)',mo:'cząsteczka',co:'kryształ jonowy'};
const KINDS={el:'Pierwiastki (atomy)',mo:'Cząsteczki',co:'Kryształy jonowe'};
const SPCLS={H2O:'Tlenki obojętne',CO2:'Tlenki kwasowe',FeO:'Tlenki zasadowe',Fe2O3:'Tlenki zasadowe',Cu2O:'Tlenki zasadowe',
 HCl:'Kwasy beztlenowe',NH3:'Wodorki niemetali',CH4:'Węglowodory',CH3COOH:'Kwasy karboksylowe',C2H5OH:'Alkohole',CH3CHO:'Aldehydy',C3H6O:'Ketony',CH3NH2:'Aminy',C6H6:'Węglowodory aromatyczne',NaCl:'Sole'};
const spM=k=>{const cp=CD[k].comp||{};return Object.keys(cp).reduce((t,e)=>t+cp[e]*((DB[e]||{}).m||0),0)||null};
const spDX=k=>{const en=Object.keys(CD[k].comp||{}).map(e=>(DB[e]||{}).en).filter(v=>v!=null);return en.length>1?Math.max(...en)-Math.min(...en):null};
const valE=q=>{const c=fill(SYM.indexOf(q)+1),N=Math.max(...Object.keys(c).map(k=>+k[0]));return Object.entries(c).filter(([k])=>+k[0]===N).reduce((a,[,x])=>a+x,0)};
const reac=e=>{if(e.t==='gaz szlachetny'||(e.g===18))return 0;const i=e.ie&&e.ie[0],m1=i!=null?Math.min(1,Math.max(0,(1000-i)/624)):null,n1=e.en!=null&&e.en>=2?Math.min(1,(e.en-2)/1.98):null;return m1==null&&n1==null?null:Math.max(m1||0,n1||0)};
const stateAt=(mp,bp)=>mp==null?null:298<mp?'Ciało stałe':(bp!=null&&298>=bp)?'Gaz':'Ciecz';
const NA='Nie dotyczy (cząsteczki i kryształy)';
const spKind=k=>CD[k].m?'mo':'co';
const spCls=k=>{const el=spEls(k);return el.length===1?eclass(SYM.indexOf(el[0])+1):(SPCLS[k]||'Inne związki')};
let _IT=null;
function items(){
 if(!_IT){
  _IT=SYM.map((q,i)=>{const z=i+1,e=DB[q]||stub(q);return {id:q,kind:'el',z,sym:q,e,nm:null,
   mass:e.m,en:e.en,dx:null,ie:e.ie?e.ie[0]:null,ox:e.ox?Math.max(...e.ox):null,val:valE(q),reac:reac(e),mp:e.mp,bp:e.bp,rho:e.rho,mu:null,
   sub:'Pierwiastki (atomy)',cls:eclass(z),fam:famOf(z),blk:e.b?'blok '+e.b:null,grp:e.g?gtxt(e):null,per:e.p?'okres '+e.p:null,
   st:stateAt(e.mp,e.bp)||(e.st&&e.st!=='—'?e.st[0].toUpperCase()+e.st.slice(1):null),org:'Nieorganiczne'}});
  Object.keys(CD).forEach(k=>{const c=CD[k];_IT.push({id:k,kind:spKind(k),z:null,sym:c.f,e:null,nm:c.n.split(',')[0],
   mass:spM(k),en:null,dx:spDX(k),ie:null,ox:null,val:null,reac:null,mp:c.mp,bp:c.bp,rho:c.rho,mu:c.mu,
   sub:spEls(k).length===1?'Pierwiastki — postać cząsteczkowa':'Związki chemiczne',cls:spCls(k),fam:null,blk:null,grp:null,per:null,
   st:stateAt(c.mp,c.bp),org:['CH4','CH3COOH','C2H5OH','CH3CHO','C3H6O','CH3NH2','C6H6'].includes(k)?'Organiczne':'Nieorganiczne'})});
 }
 _IT.forEach(x=>{x.name=x.kind==='el'?elName(x.e,lang):x.nm});
 return _IT}
const SORTS={
 'Podstawowe':{name:['nazwa',(a,b)=>a.name.localeCompare(b.name,'pl')],z:['liczba atomowa Z',x=>x.z],mass:['masa (u)',x=>x.mass]},
 'Budowa i wiązania':{val:['elektrony walencyjne (pierwiastki)',x=>x.val],en:['elektroujemność χ (pierwiastki)',x=>x.en],dx:['Δχ — polarność wiązania (cząsteczki, kryształy)',x=>x.dx],mu:['moment dipolowy (cząsteczki)',x=>x.mu]},
 'Reakcje':{reac:['reaktywność (szacunkowa, pierwiastki)',x=>x.reac],ox:['maks. stopień utlenienia',x=>x.ox],ie:['energia jonizacji',x=>x.ie]},
 'Fizyczne':{mp:['temperatura topnienia',x=>x.mp],bp:['temperatura wrzenia',x=>x.bp],rho:['gęstość',x=>x.rho]}};
const GROUPS={none:['bez grupowania',()=>'Wszystko'],
 kind:['budowa (atom / cząsteczka / kryształ)',x=>KINDS[x.kind]],
 sub:['substancja (pierwiastek / związek)',x=>x.sub],
 cls:['klasa (metal, tlenek, kwas, sól…)',x=>x.cls],
 fam:['rodzina (litowce, fluorowce, lantanowce…)',x=>x.fam||NA],
 org:['organiczne / nieorganiczne',x=>x.org],
 blk:['blok (s, p, d, f)',x=>x.blk||NA],
 grp:['grupa układu',x=>x.grp||NA],
 per:['okres',x=>x.per||NA],
 st:['stan skupienia w 25 °C',x=>x.st||'brak danych']};
const ORD={kind:Object.values(KINDS),sub:['Pierwiastki (atomy)','Pierwiastki — postać cząsteczkowa','Związki chemiczne'],
 cls:['Metale','Półmetale','Niemetale','Gazy szlachetne','Tlenki kwasowe','Tlenki zasadowe','Tlenki obojętne','Kwasy beztlenowe','Wodorki niemetali','Sole','Węglowodory','Alkohole','Kwasy karboksylowe','Aldehydy','Ketony','Aminy','Węglowodory aromatyczne'],
 fam:FAMS,blk:['blok s','blok p','blok d','blok f'],st:['Ciało stałe','Ciecz','Gaz','brak danych'],org:['Nieorganiczne','Organiczne']};
const nrm=t=>String(t).toLowerCase().replace(/[₀-₉]/g,d=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(d));
let cSort='z',cGrp='none',cKind='all',cQ='';
function sortFn(){for(const g in SORTS)if(SORTS[g][cSort]){const f=SORTS[g][cSort][1];if(cSort==='name')return f;return (a,b)=>{const x=f(a),y=f(b);if(x==null&&y==null)return (a.z||999)-(b.z||999);if(x==null)return 1;if(y==null)return -1;return x-y||(a.z||999)-(b.z||999)}}}
const sortVal=(it)=>{for(const g in SORTS)if(SORTS[g][cSort]&&cSort!=='name'){const v=SORTS[g][cSort][1](it);return v==null?'—':(+v.toPrecision(4))}return it.z||''};
function curId(){return curKind==='sp'&&cur?cur:sym}
let curKind='el';
let VIS=[];
const isRel=x=>{const E=curKind==='sp'&&cur?spEls(cur):[sym];return x.kind==='el'?E.includes(x.id):spEls(x.id).some(e=>E.includes(e))};
function renderElementList(){
 const box=$('el-list');if(!box)return;
 const A=items(),cnt=k=>A.filter(x=>x.kind===k).length;
 $('kind').innerHTML=[['all','Wszystko',A.length],['rel','Powiązane',A.filter(isRel).length],['el','Pierwiastki',cnt('el')],['mo','Cząsteczki',cnt('mo')],['co','Kryształy jonowe',cnt('co')]].map(([k,t,n])=>`<button data-k="${k}" class="${k===cKind?'on':''}" title="${k==='all'?'cały katalog':k==='rel'?'pierwiastek i wszystkie jego cząsteczki/związki (lub składniki wybranej substancji)':KINDS[k]}">${k==='all'||k==='rel'?'':IC[k]}${t}<small>${n}</small></button>`).join('');
 $('c-sort').innerHTML=Object.keys(SORTS).map(g=>`<optgroup label="${g}">${Object.entries(SORTS[g]).map(([k,v])=>`<option value="${k}"${k===cSort?' selected':''}>${v[0]}</option>`).join('')}</optgroup>`).join('');
 $('c-grp').innerHTML=Object.entries(GROUPS).map(([k,v])=>`<option value="${k}"${k===cGrp?' selected':''}>${v[0]}</option>`).join('');
 const q=nrm(cQ.trim()),on=curId(),G=new Map(),isEl=curKind!=='sp';
 const hay=x=>nrm([x.id,x.sym,x.name,x.e?[x.e.n_en,x.e.n_de,x.e.n_la].join(' '):'',q.length>2?x.cls+' '+(x.fam||''):''].join(' '));
 const L=A.filter(x=>(cKind==='all'||(cKind==='rel'?isRel(x):x.kind===cKind))&&(!q||hay(x).includes(q))).sort(sortFn());
 L.forEach(x=>{const k=GROUPS[cGrp][1](x);if(!G.has(k))G.set(k,[]);G.get(k).push(x)});
 let keys=[...G.keys()];
 if(cGrp==='grp'||cGrp==='per')keys.sort((a,b)=>parseInt(a.replace(/\D/g,'')||999)-parseInt(b.replace(/\D/g,'')||999));
 else if(ORD[cGrp]){const ix=k=>{const i=ORD[cGrp].indexOf(k);return i<0?999:i};keys.sort((a,b)=>ix(a)-ix(b))}
 VIS=[];keys.forEach(k=>G.get(k).forEach(x=>VIS.push({id:x.id,kind:x.kind})));
 box.innerHTML=L.length?keys.map(k=>(cGrp==='none'?'':`<div class="cg">${k}<small>${G.get(k).length}</small></div>`)+G.get(k).map(x=>`<button data-id="${x.id}" data-kind="${x.kind}" class="${x.id===on&&((x.kind==='el')===isEl)?'on':''}" title="${KIND[x.kind]} · ${x.cls}"><span class="ci">${IC[x.kind]}</span><span class="el-sym">${x.sym}</span><span class="el-name">${x.name}</span><span class="cv">${sortVal(x)}</span></button>`).join('')).join(''):'<div class="sub" style="padding:10px">Nic nie pasuje do filtra.</div>';
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>pick(b.dataset.id,b.dataset.kind));
 box.querySelectorAll('.cv').forEach(n=>n.style.display=(cSort==='z'||cSort==='name')?'none':'');
 const onb=box.querySelector('button.on');if(onb&&onb.scrollIntoView&&!box.contains(document.activeElement))onb.scrollIntoView({block:'nearest'});
}
 
function pick(id,kind,tab){
 if(kind==='el'){go(id);return}
 curKind='sp';cur=id;fi=0;
 hud();applyMode();
 const t=document.querySelector('.tabnav button.on');
 showTab(tab||(t&&(t.dataset.tab==='mol'||t.dataset.tab==='nucleus')?t.dataset.tab:'forms'));
 fact();renderMiniPT();renderElementList();
 document.title=`${CD[cur].f} · ${CD[cur].n.split(',')[0]} · Laboratorium atomu`;
 if($('drawer').classList.contains('open'))mist();
 window.scrollTo({top:0})}
function stepSel(d){
 if(!VIS.length)return;
 const on=curId(),el=curKind!=='sp',i=VIS.findIndex(x=>x.id===on&&((x.kind==='el')===el));
 const j=i<0?(d>0?0:VIS.length-1):(i+d+VIS.length)%VIS.length;
 pick(VIS[j].id,VIS[j].kind)}
$('kind').addEventListener('click',ev=>{const b=ev.target.closest('[data-k]');if(b){cKind=b.dataset.k;renderElementList()}});
$('c-sort').onchange=ev=>{cSort=ev.target.value;renderElementList();renderMiniPT()};
$('c-grp').onchange=ev=>{cGrp=ev.target.value;renderElementList()};
$('search-input').oninput=ev=>{cQ=ev.target.value;renderElementList()};

let fi = 0;
function fact(){
  const box=$('fact-content'),sp=curKind==='sp';
  const f=sp?spEls(cur).flatMap(q=>((DB[q]||{}).f||[]).map(t=>q+': '+t)):(E().f||[]);
  box.textContent=f.length?f[fi%f.length]:(sp?'Brak ciekawostek o pierwiastkach tej substancji w bazie.':'Brak ciekawostek dla tego pierwiastka w bazie.');
  $('next-fact-btn').style.display=f.length>1?'':'none';
}
$('next-fact-btn').onclick = () => { fi++; fact(); };

$('prev-btn').onclick = () => stepSel(-1);
$('next-btn').onclick = () => stepSel(1);

document.querySelectorAll('.tabnav button').forEach(b => { b.onclick = () => showTab(b.dataset.tab); });
$('lgb').onclick = () => { lin = !lin; $('lgb').textContent = lin ? 'lin' : 'log'; $('ie').innerHTML = ie(); };

document.querySelectorAll('#lang button').forEach(b => {
  b.onclick = () => {
    lang = b.dataset.lang;
    document.querySelectorAll('#lang button').forEach(x => x.classList.toggle('on', x === b));
    head(); renderElementList(); renderMiniPT(); fact();
    if($('drawer').classList.contains('open')) mist();
  };
});

