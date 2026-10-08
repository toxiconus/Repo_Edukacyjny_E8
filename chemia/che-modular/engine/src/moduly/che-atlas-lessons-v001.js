

(function(){try{
if(typeof hud!=='function')return;
const C=window.CHE=window.CHE||{},D=()=>C.DATA||{};
const UN='₀₁₂₃₄₅₆₇₈₉',SUB=f=>String(f).replace(/\d/g,d=>UN[d]),PLAIN=f=>String(f||'').replace(/[₀-₉]/g,d=>UN.indexOf(d)).replace(/[⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹\s]/g,'');
const els=f=>(PLAIN(f).match(/[A-Z][a-z]?/g)||[]);
const esc=x=>String(x==null?'':x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const LES={N01:'Tlenki',N02:'Wodorotlenki i zasady',N03:'Kwasy',N04:'Sole'};
let SALTS=null;
function salts(){if(SALTS)return SALTS;const ST=D().SOLUBILITY_TABLE,IO=C.IONIC;if(!ST||!IO||!IO.compound)return {};SALTS={};
 ST.cations.forEach(c=>ST.anions.forEach(a=>{if(a.id==='OH')return;let k=null;try{k=IO.compound(c.id,a.id)}catch(_){}if(k&&k.formula)SALTS[k.formula]={f:k.formula,pretty:k.pretty,name:k.name,sol:ST.table[a.id][c.id],cid:c.id,aid:a.id}}));return SALTS}
function acids(){const A=D().ACIDS||{};return Object.keys(A).map(k=>({f:PLAIN(A[k].formula),name:A[k].name}))}
function hydro(){const H=C.HYDROXIDES;return H&&H.list?H.list():[]}
 
function forFormula(f){f=PLAIN(f);const out=[];if((D().OXIDES||{})[f])out.push('N01');if(hydro().some(h=>h.f===f))out.push('N02');if(acids().some(a=>a.f===f))out.push('N03');if(salts()[f])out.push('N04');return out}
 
function forElement(s){const O=D().OXIDES||{},RD=D().REACTION_DATA||{},R=D().REACTIONS||{},res={};
 const add=(code,f,label)=>{(res[code]=res[code]||{code,title:LES[code],items:[],rx:0}).items.push({f,label})};
 Object.keys(O).forEach(f=>{if(O[f].el===s&&f!=='H2O')add('N01',f,O[f].name)});
 hydro().forEach(h=>{if(els(h.f).indexOf(s)>=0&&s!=='O'&&s!=='H')add('N02',h.f,h.name)});
 if(s!=='H')acids().forEach(a=>{if(els(a.f).indexOf(s)>=0&&!(s==='O'))add('N03',a.f,a.name)});
 const S=salts();if(s!=='O')Object.keys(S).forEach(f=>{if(els(f).indexOf(s)>=0&&!(s==='H'&&!/^NH4|H(?=[A-Z]|$)/.test(f)))add('N04',f,S[f].name)});
 Object.keys(RD).forEach(k=>{const l=RD[k].lesson,r=R[k];if(!l||!LES[l]||!r)return;if(r.reactants.concat(r.products).some(q=>els(q.formula).indexOf(s)>=0)){(res[l]=res[l]||{code:l,title:LES[l],items:[],rx:0}).rx++}});
 return ['N01','N02','N03','N04'].filter(c=>res[c]).map(c=>res[c])}
function open(code){try{if(C.HOME_GATE&&C.HOME_GATE.openLesson)C.HOME_GATE.openLesson(code)}catch(e){console.warn('[atlas lessons]',e)}}
C.ATLAS_LESSONS={version:'1.0',forElement,forFormula,open};
 
function cardHTML(s){const L=forElement(s);if(!L.length)return '<div class="al-h">W lekcjach</div><p class="al-mut">'+esc(s)+' nie występuje w związkach ani reakcjach lekcji N01–N04 (dane silnika).</p>';
 return '<div class="al-h">W lekcjach <small>dane silnika · klik otwiera lekcję</small></div><div class="al-grid">'+L.map(x=>{const it=x.items.slice(0,8).map(i=>'<span title="'+esc(i.label)+'">'+esc(SUB(i.f))+'</span>').join('');
  return '<button type="button" class="al-les" data-les="'+x.code+'"><b>'+x.code+'</b> '+esc(x.title)+'<small>'+(x.items.length?x.items.length+' '+(x.code==='N01'?'tlenk.':x.code==='N02'?'wodorotl.':x.code==='N03'?'kwas.':'soli')+' · ':'')+x.rx+' reakcji</small><div class="al-it">'+it+(x.items.length>8?'<span>+'+(x.items.length-8)+'</span>':'')+'</div></button>'}).join('')+'</div>'}
function renderCard(){const pane=document.querySelector('.tabpane[data-tab="ds"]');if(!pane)return;let c=document.getElementById('che-atlas-lessons');
 const isEl=typeof curKind==='undefined'||curKind==='el';
 if(!c){c=document.createElement('div');c.id='che-atlas-lessons';c.className='card al-card';c.addEventListener('click',e=>{const b=e.target.closest('[data-les]');if(b)open(b.dataset.les)});pane.insertBefore(c,pane.firstChild)}
 c.style.display=isEl?'':'none';if(isEl)c.innerHTML=cardHTML(sym)}
 
function tagTiles(){const h=document.getElementById('mol-eng');if(!h)return;h.querySelectorAll('.sub-c').forEach(t=>{if(t.querySelector('.al-tag'))return;const b=t.querySelector('b');if(!b)return;const L=forFormula(b.textContent);
 L.forEach(code=>{const s=document.createElement('button');s.type='button';s.className='al-tag';s.dataset.les=code;s.title='Otwórz lekcję '+code+' '+LES[code];s.textContent=code;t.appendChild(s)})});
 if(!h._al){h._al=1;h.addEventListener('click',e=>{const b=e.target.closest('.al-tag');if(b){e.stopPropagation();open(b.dataset.les)}},true)}}
 
let ZS=null,LT={};
function tagList(){const box=document.getElementById('el-list');if(!box||!C.OXIDES)return;if(!ZS){ZS={};(D().ELEMENTS_118||[]).forEach(e=>ZS[e.s]=e.z)}box.querySelectorAll('button[data-kind="el"]').forEach(b=>{if(b.querySelector('.al-z'))return;const s=b.dataset.id,z=ZS[s];
 if(z){const e=document.createElement('span');e.className='al-z';e.textContent=z;b.insertBefore(e,b.querySelector('.el-sym'))}
 const L=LT[s]||(LT[s]=forElement(s).map(x=>x.code));if(L.length){const e=document.createElement('span');e.className='al-lt';e.title='w lekcjach: '+L.join(', ');e.textContent=L.join(' ');b.appendChild(e)}})}
const st=document.createElement('style');st.textContent=
 '.al-card{margin-bottom:14px}.al-h{font:700 11px var(--mono,ui-monospace,monospace);letter-spacing:.12em;text-transform:uppercase;color:#1f5fa8;margin-bottom:8px}.al-h small{font-weight:500;letter-spacing:0;text-transform:none;color:#64748b;margin-left:8px}'
+'.al-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px}.al-les{text-align:left;border:1px solid #cbd5e1;border-radius:10px;background:#f8fafc;padding:8px 10px;cursor:pointer;font:600 13px var(--sans,system-ui)}'
+'.al-les:hover{border-color:#1f5fa8;background:#eef4fb}.al-les b{color:#1f5fa8;margin-right:4px}.al-les small{display:block;font-weight:500;color:#64748b;margin-top:2px}.al-it{display:flex;flex-wrap:wrap;gap:3px;margin-top:6px}'
+'.al-it span{font:500 11.5px ui-monospace,monospace;border:1px solid #dbe3ec;border-radius:5px;padding:0 4px;background:#fff}.al-mut{color:#64748b;font-size:13px;margin:0}'
+'.al-tag{display:inline-block;width:auto;align-self:flex-start;justify-self:start;margin:6px 4px 0 0;font:700 10.5px ui-monospace,monospace;border:1px solid #1f5fa8;color:#1f5fa8;background:#fff;border-radius:6px;padding:1px 6px;cursor:pointer}.al-tag:hover{background:#1f5fa8;color:#fff}'
+'#el-list .al-z{font:500 10.5px ui-monospace,monospace;color:#94a3b8;min-width:22px;text-align:right;margin-right:6px}#el-list .al-lt{margin-left:auto;font:600 9.5px ui-monospace,monospace;color:#1f5fa8;opacity:.8;padding-left:6px;white-space:nowrap}'
+'.el-list{max-height:min(42vh,360px)!important}';
document.head.appendChild(st);
const _h=hud;hud=function(){_h.apply(this,arguments);try{renderCard()}catch(e){console.warn('[atlas lessons]',e)}};
if(typeof renderElementList==='function'){const _r=renderElementList;renderElementList=function(){_r.apply(this,arguments);try{tagList()}catch(e){}}}
const mo=new MutationObserver(()=>{try{tagTiles()}catch(_){}});const pm=document.querySelector('.tabpane[data-tab="mol"]');if(pm)mo.observe(pm,{childList:true,subtree:true});
const init=()=>{try{LT={};SALTS=null;const b=document.getElementById('el-list');if(b)b.querySelectorAll('.al-z,.al-lt').forEach(n=>n.remove());renderCard();tagList();tagTiles()}catch(e){console.warn('[atlas lessons]',e)}};
if(document.readyState==='complete')init();else window.addEventListener('load',init);
}catch(e){try{console.warn('[che-atlas-lessons-v001]',e)}catch(_){}}})();
