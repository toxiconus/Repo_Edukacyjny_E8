(function(){
  const B=document.body,mq=window.matchMedia('(max-width:1180px)');
  const open=v=>B.classList.toggle('sb-open',v);
  const _h=hud;
  hud=function(){_h();
    try{
      if(curKind==='sp'&&cur&&CD[cur]){$('mb-sym').textContent=CD[cur].f;$('mb-name').textContent=CD[cur].n.split(',')[0];$('mb-sub').textContent='cząsteczka · katalog ▴';}
      else{const e=E();$('mb-sym').textContent=e.s||sym;$('mb-name').textContent=elName(e,lang);$('mb-sub').textContent='Z = '+e.z+' · katalog ▴';}
    }catch(_){}
  };
  $('mb-open').onclick=()=>open(true);
  $('mb-prev').onclick=()=>stepSel(-1);
  $('mb-next').onclick=()=>stepSel(1);
  $('sheet-close').onclick=()=>open(false);
  $('sb-bg').onclick=()=>open(false);
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape')open(false);});
  $('sidebar').addEventListener('click',ev=>{
    if(!mq.matches)return;
    if(ev.target.closest('#el-list button,#mini-pt .mc,#pt-btn'))setTimeout(()=>open(false),60);
  });
  mq.addEventListener&&mq.addEventListener('change',()=>open(false));
   
  const tn=$('tabnav');
  tn.addEventListener('click',()=>setTimeout(()=>{const b=tn.querySelector('button.on');if(b)tn.scrollTo({left:b.offsetLeft-(tn.clientWidth-b.offsetWidth)/2,behavior:'smooth'});},30));
   
  const cv=$('bohr'),pts=new Map();let pd=0;
  const dist=()=>{const a=[...pts.values()];return Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);};
  cv.addEventListener('pointerdown',ev=>{if(ev.pointerType!=='touch')return;pts.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});if(pts.size===2)pd=dist();});
  cv.addEventListener('pointermove',ev=>{if(!pts.has(ev.pointerId))return;pts.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
    if(pts.size===2){const d=dist();if(pd>0)zin(d/pd);pd=d;}});
  const up=ev=>{pts.delete(ev.pointerId);pd=0;};
  cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);cv.addEventListener('pointerleave',up);
  hud();
})();
 
(function(){
  const _ds=datasheet;
  datasheet=function(){
    const h=_ds(),tot=(h.match(/class="dr/g)||[]).length,na=(h.match(/class="dr na/g)||[]).length;
    const on=$('ds').classList.contains('hide-na');
    return `<div class="dtb"><span><b>${tot-na}</b> z ${tot} właściwości ma dane</span><button class="ds-tg${on?' on':''}">Ukryj brak danych</button></div>`+h;
  };
  $('ds').addEventListener('click',ev=>{const b=ev.target.closest('.ds-tg');if(!b)return;
    const d=$('ds');d.classList.toggle('hide-na');b.classList.toggle('on',d.classList.contains('hide-na'));});
   
  $('iso').addEventListener('click',ev=>{const g=ev.target.closest('[data-i]');if(!g)return;
    isoA=+g.dataset.i;hud();if(still)bohr(0);});
  const _h=hud;
  hud=function(){_h();if(curKind==='el'){try{$('iso').innerHTML=iso();}catch(_){}save();}};
   
  const save=()=>{try{if(curKind!=='el')return;const t=document.querySelector('.tabnav button.on');
    history.replaceState(null,'','#'+sym+'/'+(t?t.dataset.tab:'atom'));}catch(_){}};
  const _st=showTab;showTab=function(t){_st(t);save();};
  try{
    const m=(location.hash||'').slice(1).split('/');
    if(m[0]&&SYM.includes(m[0])){go(m[0]);}
    if(m[1]&&document.querySelector('.tabnav button[data-tab="'+m[1]+'"]'))showTab(m[1]);
  }catch(_){}
  hud();
})();
 
[['ie','Energie jonizacji kolejnych elektronów'],['rad','Promienie atomowe i jonowe'],['radar','Profil właściwości pierwiastka'],['ph','Zakres faz: ciało stałe, ciecz, gaz'],['iso','Izotopy i ich występowanie'],['ox','Stopnie utlenienia'],['redox','Potencjały standardowe względem SHE'],['lev','Diagram orbitali'],['sl','Ekranowanie Z*'],['bohr','Model atomu Bohra. Dwuklik przybliża do jądra']].forEach(([id,t])=>{const n=$(id);if(n&&n.setAttribute){n.setAttribute('role','img');n.setAttribute('aria-label',t);}});
 
(function(){
  const KC={'Metale':'#d3e2f1','Półmetale':'#dbe9c6','Niemetale':'#f6e6b0','Gazy szlachetne':'#e7d6ef'};
  const tint=()=>{try{
    const card=document.querySelector('.element-card');if(!card||curKind!=='el')return;
    const z=E().z,c=(z>=57&&z<=71)?'#f3d6e2':(z>=89&&z<=103)?'#d2ead8':KC[eclass(z)]||'#e8eef3';
    card.style.setProperty('--kc',c);
  }catch(_){}};
  const _h=hud;hud=function(){_h();tint();};
  const inp=$('search-input'),box=inp.parentElement,clr=$('search-clear');
  const sync=()=>box.classList.toggle('has-q',!!inp.value);
  const _in=inp.oninput;
  inp.oninput=ev=>{_in&&_in(ev);sync();};
  clr.onclick=()=>{inp.value='';cQ='';renderElementList();sync();inp.focus();};
  inp.addEventListener('keydown',ev=>{
    if(ev.key==='Escape'&&inp.value){ev.preventDefault();ev.stopPropagation();clr.onclick();}
    else if(ev.key==='Enter'){const f=document.querySelector('#el-list button');if(f){ev.preventDefault();f.click();inp.blur();}}
  });
  hud();
})();

const TG={orbitals:'atom',notes:'atom',mat:'props',chg:'redox'},GP={atom:['atom','orbitals','notes'],props:['props','mat'],redox:['chg','redox']};
showTab=function(t){t=TG[t]||t;const g=GP[t]||[t];
 document.querySelectorAll('.tabnav button').forEach(x=>x.classList.toggle('on',x.dataset.tab===t));
 document.querySelectorAll('.tabpane').forEach(p=>p.classList.toggle('show',g.includes(p.dataset.tab)));
 if(t==='forms'){cmpUI();vw()}if(t==='mol')renderMols();if(t==='nucleus')nucMode()};
const _ex40=extra;extra=function(){_ex40();
 if(typeof chg!=='undefined'&&!chg&&$('chgp')&&document.querySelector('#chsel button')){
  const bs=[...document.querySelectorAll('#chsel button')].slice(1);
  $('chgp').innerHTML='<div class="chg-empty"><span>Zmiany po utracie lub zyskaniu elektronów — wybierz jon:</span></div>';
  bs.forEach(b=>{const c=document.createElement('button');c.textContent=b.textContent;c.onclick=()=>b.click();$('chgp').firstChild.appendChild(c)})}};

(function(){const st=document.getElementById('stage'),ac=document.querySelector('#panel-atom .atom-controls'),hb=document.getElementById('hintbar');
 if(st&&ac){const w=document.createElement('div');w.className='atom-modebar';st.parentNode.insertBefore(w,st);w.appendChild(ac)}
 if(hb&&hb.children.length>=3){const d=document.createElement('details');d.className='hint-more';d.innerHTML='<summary>Podpowiedzi i objaśnienia</summary>';
  [...hb.children].slice(1).forEach(c=>d.appendChild(c));hb.appendChild(d)}})();

const _ds41=datasheet;datasheet=function(){return _ds41().replace(/<div class="dg"><h5>Jądro i izotopy<\/h5>[\s\S]*$/,'')};try{$('ds').innerHTML=datasheet()}catch(e){}
document.addEventListener('keydown',e=>{const t=e.target,typing=t&&/INPUT|SELECT|TEXTAREA/.test(t.tagName);
 if(e.ctrlKey||e.metaKey||e.altKey)return;
 if(e.key==='/'&&!typing){e.preventDefault();const i=document.getElementById('search-input');i&&i.focus()}
});
document.getElementById('tabnav').addEventListener('click',()=>{const h=document.getElementById('hud');
 if(h&&h.getBoundingClientRect().top<46)window.scrollBy({top:h.getBoundingClientRect().top-50,behavior:'auto'})});

(function(){const nr=document.querySelector('.nav-row');if(!nr)return;const box=document.createElement('div');box.className='recent';box.id='recent';nr.after(box);
 const hist=[];
 const render=()=>{box.innerHTML='';hist.forEach(q=>{const b=document.createElement('button');b.textContent=q;b.title=(NAMES[q]||[])[0]||q;if(q===sym)b.className='cur';b.onclick=()=>go(q);box.appendChild(b)})};
 const _e42=extra;extra=function(){_e42();if(curKind==='el'){const i=hist.indexOf(sym);if(i>-1)hist.splice(i,1);hist.unshift(sym);hist.length=Math.min(hist.length,6)}render()};
 const fb=document.querySelector('.fact-box'),qb=document.querySelector('#panel-quick .body');if(fb&&qb)qb.appendChild(fb);
 extra()})();

(function(){const st=document.getElementById('stage'),ob=document.getElementById('orbbox');
 if(st&&ob){st.parentNode.insertBefore(ob,st)}
 const dp=document.querySelector('.tabpane[data-tab=ds]'),d=document.getElementById('ds');
 if(dp&&d){const w=document.createElement('div');w.className='ds-tools';const b=document.createElement('button');b.textContent='Kopiuj dane (CSV)';
  b.onclick=()=>{const rows=[];d.querySelectorAll('.dg').forEach(g=>{const h=g.querySelector('h5').textContent;g.querySelectorAll('.dr').forEach(r=>{const q=x=>'"'+x.replace(/"/g,'""').trim()+'"';rows.push([h,r.children[0].textContent,r.children[1].textContent].map(q).join(';'))})});
   const t='grupa;parametr;wartość\n'+rows.join('\n');(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>{b.textContent='Skopiowano ✓'},()=>{b.textContent='Brak dostępu do schowka'});setTimeout(()=>b.textContent='Kopiuj dane (CSV)',1800)};
  w.appendChild(b);dp.insertBefore(w,d)}})();

let cmpSym='';
(function(){const _rd=radar;
 radar=function(){const base=_rd();if(!cmpSym||cmpSym===sym)return base;
  const e=DB[cmpSym]||stub(cmpSym),L=Math.log10,n=7,cx=170,cy=150,R=88,
   ax=[[e.ar,v=>v/260],[e.ie&&e.ie[0],v=>v/2400],[e.en,v=>v/4],[e.ea,v=>Math.max(0,v)/350],[e.mp,v=>(L(v)-L(1))/(L(3900)-L(1))],[e.rho,v=>(L(v)-L(1e-4))/(L(23)-L(1e-4))],[e.pol,v=>v/45]],
   pts=ax.map((a,i)=>{const k=a[0]==null?0:Math.min(1,Math.max(0,a[1](a[0])));return[cx+R*k*Math.sin(i/n*6.2832),cy-R*k*Math.cos(i/n*6.2832)]});
  return base+`<polygon points="${pts.join(' ')}" fill="rgba(31,95,168,.14)" stroke="#1f5fa8" stroke-width="1.8" stroke-dasharray="5 3" stroke-linejoin="round"/>`
   +pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="2.6" fill="#1f5fa8" stroke="#fff"/>`).join('')
   +`<text x="6" y="14" class="cmp-leg" style="fill:#2f8a55">■ ${sym}</text><text x="6" y="30" class="cmp-leg" style="fill:#1f5fa8">■ ${cmpSym}</text>`};
 const h=$('radar')&&$('radar').closest('.card')&&$('radar').closest('.card').querySelector('h4');if(!h)return;
 const syms=Array.isArray(SYM)?SYM:String(SYM).split(/\s+/),w=document.createElement('label');w.className='cmp-pick';
 w.innerHTML='Porównaj z <select><option value="">—</option>'+syms.map(q=>`<option value="${q}">${q} · ${(NAMES[q]||[])[0]||''}</option>`).join('')+'</select>';
 w.querySelector('select').onchange=ev=>{cmpSym=ev.target.value;$('radar').innerHTML=radar()};
 h.style.display='flex';h.style.alignItems='center';h.appendChild(w)})();

(function(){const K='n03_lab',ls={get:()=>{try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return{}}},set:o=>{try{localStorage.setItem(K,JSON.stringify(o))}catch(e){}}};
 const sv=ls.get();
 if(sv.sym&&sv.sym!==sym&&DB[sv.sym]!==undefined||(sv.sym&&SYM.includes&&String(SYM).split(/\s+/).includes(sv.sym)&&sv.sym!==sym)){try{go(sv.sym)}catch(e){}}
 const vis=t=>{const b=document.querySelector('.tabnav button[data-tab="'+t+'"]');return b&&b.offsetParent!==null};
 showTab(sv.tab&&vis(sv.tab)?sv.tab:'atom');
 const _e46=extra;extra=function(){_e46();if(curKind==='el'){const o=ls.get();o.sym=sym;ls.set(o)}};
 document.getElementById('tabnav').addEventListener('click',()=>setTimeout(()=>{const b=document.querySelector('.tabnav button.on');if(b){const o=ls.get();o.tab=b.dataset.tab;ls.set(o)}},0));
 document.addEventListener('keydown',e=>{const t=e.target;if(e.ctrlKey||e.metaKey||e.altKey||/INPUT|SELECT|TEXTAREA/.test(t.tagName))return;
  if(/^[0-9]$/.test(e.key)){const bs=[...document.querySelectorAll('.tabnav button')].filter(b=>b.offsetParent!==null);const b=bs[(+e.key+9)%10];if(b)b.click()}});
})();

(function(){const fb=document.querySelector('.fact-box'),pa=document.querySelector('#panel-atom .atom-body');if(fb&&pa)pa.appendChild(fb);
 const note=()=>{const st=$('stats');if(!st)return;st.querySelectorAll('.stats-note').forEach(n=>n.remove());
  const n=st.querySelectorAll('.st.na').length;if(n>=3){const d=document.createElement('div');d.className='stats-note';d.textContent='Brak danych liczbowych dla tego pierwiastka ('+n+' pól ukrytych).';st.appendChild(d)}};
 const _e47=extra;extra=function(){_e47();note()};note()})();

(function(){const nav=document.getElementById('tabnav');
 const center=()=>{const b=nav.querySelector('button.on');if(!b)return;nav.scrollTo({left:b.offsetLeft-(nav.clientWidth-b.offsetWidth)/2,behavior:'smooth'})};
 const _st=showTab;showTab=function(t){_st(t);center()};
 [...nav.querySelectorAll('button')].filter(b=>b.offsetParent!==null).forEach((b,i)=>{b.title=i<10?'Skrót: '+((i+1)%10):''});
 center()})();

(function(){
 const ls=()=>{try{return JSON.parse(localStorage.getItem('n03_lab')||'{}')}catch(e){return{}}};
 const sv=o=>{try{localStorage.setItem('n03_lab',JSON.stringify(Object.assign(ls(),o)))}catch(e){}};
 const ov=document.createElement('div');ov.id='help-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','Pomoc');
 ov.innerHTML='<div class="hc"><h2>Jak korzystać z laboratorium</h2><ul><li><b>Wybierz pierwiastek</b> z katalogu, wyszukiwarki lub klawiszami <kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd> (ruch po tablicy).</li><li><b>Kliknij powłokę</b> na modelu, by zobaczyć podpowłoki. <b>Dwuklik</b> lub kółko myszy przybliża do jądra.</li><li>Przycisk <b>Lekcja</b> prowadzi w 6 krokach: reguła n + l, Hund, role elektronów, tablica, jon, wyjątek.</li><li>Pod modelem jest <b>„Sprawdź się”</b>: zgadnij konfigurację, potem zobacz poprawną.</li></ul><p><b>Skróty:</b> <kbd>1</kbd>–<kbd>9</kbd>, <kbd>0</kbd> zakładki · <kbd>/</kbd> szukaj · <kbd>?</kbd> ta pomoc · <kbd>Esc</kbd> zamknij.</p><p style="margin:6px 0 12px;color:var(--mut)">Przełącznik PL/EN/DE/LA zmienia tylko nazwy pierwiastków.</p><button type="button">Rozumiem</button></div>';
 document.body.appendChild(ov);
 const b=document.createElement('button');b.id='help-btn';b.type='button';b.textContent='?';b.setAttribute('aria-label','Pomoc i skróty');document.body.appendChild(b);
 const open=v=>{ov.classList.toggle('open',v);if(!v)sv({seen:1})};
 b.onclick=()=>open(true);ov.onclick=e=>{if(e.target===ov||e.target.tagName==='BUTTON')open(false)};
 document.addEventListener('keydown',e=>{if(e.key==='Escape')open(false);if(e.key==='?'&&!/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)){e.preventDefault();open(true)}});
 if(!ls().seen)open(true);
 const st=document.getElementById('stage');
 if(st){const n=document.createElement('div');n.className='model-note';n.textContent='To model, nie zdjęcie atomu: powłoki to uproszczenie Bohra, a chmura orbitalu pokazuje gęstość prawdopodobieństwa znalezienia elektronu.';st.after(n)}
 const nav=document.getElementById('tabnav');nav.setAttribute('role','tablist');
 const sync=()=>nav.querySelectorAll('button').forEach(x=>{x.setAttribute('role','tab');x.setAttribute('aria-selected',x.classList.contains('on'))});
 const _s=showTab;showTab=function(t){_s(t);sync()};sync();
 const N=s=>String(s).replace(/<[^>]*>/g,'').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).toLowerCase().replace(/[\s·,.\-^→]/g,'');
 const d=document.createElement('details');d.className='quiz';
 d.innerHTML='<summary>Sprawdź się: zgadnij konfigurację</summary><div class="qrow"><input type="text" id="q-in" placeholder="np. 1s2 2s2 2p6 …" autocomplete="off" aria-label="Twoja konfiguracja"><button type="button" id="q-go">Sprawdź</button></div><div class="qres" id="q-res" aria-live="polite"></div>';
 const hb=document.getElementById('hintbar');if(hb)hb.after(d);
 const res=()=>document.getElementById('q-res');
 document.getElementById('q-go').onclick=()=>{try{const{e,c}=state(),a=N(document.getElementById('q-in').value),ok=[cfgByShell(c),cfgS(c)].map(N);
  const good=a&&ok.includes(a);const ans=String(cfgByShell(c)).replace(/<[^>]*>/g,'');
  res().className='qres '+(good?'ok':'no');
  res().textContent=good?'✓ Zgadza się.':'Poprawnie: '+ans+(chg===0&&EXC[e.z]?' (uwaga: to wyjątek od reguły n + l)':'')}catch(x){res().textContent='Nie udało się sprawdzić.'}};
 document.getElementById('q-in').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('q-go').click()});
 const lab=()=>{try{const{e,c}=state(),t='Model atomu '+sym+(chg?' (jon)':'')+', Z = '+e.z+', konfiguracja '+String(cfgByShell(c)).replace(/<[^>]*>/g,'');['bohr','cloud'].forEach(i=>{const x=document.getElementById(i);if(x){x.setAttribute('role','img');x.setAttribute('aria-label',t)}})}catch(x){}};
 const _x=extra;extra=function(){_x();lab();const r=res();if(r){r.textContent='';r.className='qres'}const i=document.getElementById('q-in');if(i)i.value=''};lab();
})();

(function(){
 const $$=id=>document.getElementById(id);
 const ls=()=>{try{return JSON.parse(localStorage.getItem('n03_lab')||'{}')}catch(e){return{}}};
 const sv=o=>{try{localStorage.setItem('n03_lab',JSON.stringify(Object.assign(ls(),o)))}catch(e){}};
 const _b=bohr;bohr=function(){if(!still&&(document.hidden||!$$('stage').offsetParent))return;return _b.apply(this,arguments)};
 const hh=HINTS.find(q=>q.id==='hund');
 if(hh){const _f=hh.f;hh.f=x=>{let d='';const k=x.last;
  if(k&&CAP[k[1]]){const m=CAP[k[1]]/2,n=x.c[k]||0,a=Array(m).fill(0);for(let i=0;i<n;i++)a[i%m]++;
   d='<div class="hb"><b>'+k+'</b>'+a.map(v=>'<i>'+(v?v>1?'↑↓':'↑':'')+'</i>').join('')+'</div>'}
  return _f(x)+d}}
 let on=0,i=0;window._lesson=0;
 const bar=document.createElement('div');bar.id='lesson-bar';bar.setAttribute('role','region');bar.setAttribute('aria-label','Lekcja');
 bar.innerHTML='<div class="ls-h"><b id="ls-t"></b><small id="ls-p"></small></div><div id="ls-x"></div><div class="ls-n"><button type="button" id="ls-prev">‹ Wstecz</button><button type="button" class="pri" id="ls-next">Dalej ›</button><button type="button" id="ls-end" style="margin-left:auto">Zakończ</button></div>';
 const c=document.querySelector('.content');c.insertBefore(bar,c.firstChild);
 const S=[
  ['Reguła n + l','Ca','rule',0,'Podpowłoki zapełniamy od najmniejszej sumy n + l. Dlatego w wapniu elektrony trafiają na 4s, zanim pojawi się 3d. Kliknij podpowłokę w pasku „Kolejność zapełniania”.'],
  ['Pauli i Hund','N','hund',0,'Azot ma 3 elektrony na 2p. Zajmują trzy orbitale pojedynczo, z równoległymi spinami. Zobacz diagram strzałek pod tekstem.'],
  ['Role elektronów','Fe','bond',0,'Żelazo: walencyjne (4s) i niedokończone 3d mogą tworzyć wiązania, a rdzeń zostaje głęboko. Porównaj kolory na modelu z legendą.'],
  ['Konfiguracja a tablica','Fe','pos',0,'Okres to największe n, blok to typ ostatniej podpowłoki. Otwórz „Pełna tablica” i znajdź żelazo: okres 4, blok d.'],
  ['Jon','Fe','ion',2,'Fe → Fe²⁺: elektrony odchodzą z powłoki o największym n, czyli z 4s, choć 3d zapełnia się później. Sprawdź konfigurację na modelu.'],
  ['Wyjątek od reguły','Cr','exc',0,'Chrom ma 4s¹ 3d⁵, a nie 4s² 3d⁴. Półzapełniona podpowłoka d obniża energię. Spróbuj przewidzieć konfigurację w polu „Sprawdź się”.']];
 function show(n){i=Math.max(0,Math.min(S.length-1,n));const s=S[i];window._lesson=1;
  showTab('atom');go(s[1]);
  if(s[3]){const b=document.querySelector('#chsel [data-c="'+s[3]+'"]');if(b)b.click()}
  hintSel=s[2];hints();
  $$('ls-t').textContent=s[0];$$('ls-p').textContent=(i+1)+' / '+S.length;$$('ls-x').textContent=s[4];
  $$('ls-prev').disabled=!i;$$('ls-next').textContent=i===S.length-1?'Gotowe ✓':'Dalej ›';
  $$('hintbar').scrollIntoView({block:'nearest',behavior:'smooth'})}
 function stop(){bar.classList.remove('open');window._lesson=0}
 $$('ls-prev').onclick=()=>show(i-1);
 $$('ls-next').onclick=()=>{if(i===S.length-1)stop();else show(i+1)};
 $$('ls-end').onclick=stop;
 const b=document.createElement('button');b.id='lesson-btn';b.type='button';b.textContent='▶ Lekcja';
 b.onclick=()=>{bar.classList.add('open');show(0)};document.body.appendChild(b);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&bar.classList.contains('open'))stop()});
 const _x=extra;extra=function(){_x();if(curKind==='el'&&!window._lesson)sv({chg,chgSym:sym})};
 const s0=ls();if(s0.sm==='o')smode('o');
 if(s0.chg&&s0.chgSym===sym){const q=document.querySelector('#chsel [data-c="'+s0.chg+'"]');if(q)q.click()}
 const _sm=smode;smode=function(m){_sm(m);sv({sm:m})};
})();
