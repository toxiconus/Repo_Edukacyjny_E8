<script id="che-hub-przedmioty-v001">
/* ===== CHE.HUB v1.0 — panel Lekcje podzielony na PRZEDMIOTY + katalog WSZYSTKICH wizualizacji z informacją, gdzie są osadzone.
   Źródła: CHE.LESSONS.registry (lekcje; pole subject), CHE.SUBJECTS (lista przedmiotów — plan), CHE.LESSON_VIZ_LEGACY (stare listy L001/L002/N03),
   przyciski data-che-open-viz w treści lekcji (JSON źródeł), CHE.VIEW.views + CHE.VISUAL_REGISTRY.groups (katalog widoków).
   Otwieranie widoku: postMessage CHE_LESSON_OPEN_VISUAL (ten sam kanał co przyciski w lekcjach). ===== */
(function(){
var C=window.CHE=window.CHE||{};
C.SUBJECTS=C.SUBJECTS||[
 {id:'polski',name:'Język polski',short:'POL',col:'#be123c'},{id:'matematyka',name:'Matematyka',short:'MAT',col:'#1d4ed8'},
 {id:'fizyka',name:'Fizyka',short:'FIZ',col:'#7c3aed',prefix:'F'},{id:'chemia',name:'Chemia',short:'CHE',col:'#0f766e',prefix:'L'},
 {id:'biologia',name:'Biologia',short:'BIO',col:'#15803d',prefix:'B'},{id:'geografia',name:'Geografia',short:'GEO',col:'#b45309'},
 {id:'historia',name:'Historia',short:'HIS',col:'#92400e'},{id:'angielski',name:'Język angielski',short:'ANG',col:'#0369a1'},
 {id:'niemiecki',name:'Język niemiecki',short:'NIEM',col:'#4b5563'},{id:'rosyjski',name:'Język rosyjski',short:'ROS',col:'#b91c1c'},
 {id:'informatyka',name:'Informatyka',short:'INF',col:'#0e7490'},{id:'inne',name:'Inne',short:'…',col:'#64748b'}];
var H={version:'1.0',pending:null};C.HUB=H;
function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function subj(id){return C.SUBJECTS.find(function(s){return s.id===id})||C.SUBJECTS[C.SUBJECTS.length-1]}
function subjectOf(m,code){if(m&&m.subject)return m.subject;var c=String(code||'');var s=C.SUBJECTS.find(function(x){return x.prefix&&c.indexOf(x.prefix)===0&&/^[A-Z]\d/.test(c)});return s?s.id:'chemia'}
/* indeks lekcji: zarejestrowane + stare listy wizualizacji */
H.lessons=function(){var reg=(C.LESSONS&&C.LESSONS.registry)||{},out={};
 Object.keys(reg).forEach(function(id){var m=reg[id];out[m.code||id]={code:m.code||id,id:id,title:m.title||id,desc:m.description||'',subject:subjectOf(m,m.code||id),registered:true,source:m.source,visuals:(m.visuals||[]).slice()}});
 var LV=C.LESSON_VIZ_LEGACY||{};Object.keys(LV).forEach(function(code){if(out[code]&&out[code].registered)return;var o=out[code]||(out[code]={code:code,title:code==='L001'?'Budowa atomu (wizualizacje)':code==='L002'?'Tlenki (wizualizacje)':code,desc:'lekcja w przygotowaniu — dostępne wizualizacje',subject:subjectOf(null,code),registered:false,visuals:[]});
  LV[code].forEach(function(v){var id=typeof v==='string'?v:v.id;if(o.visuals.indexOf(id)<0)o.visuals.push(id)})});
 return out};
/* gdzie osadzone: lekcja → {przypisane (lista visuals), w treści (przyciski w HTML lekcji)} */
H.index=function(){var Ls=H.lessons(),idx={};function add(v,code,how){(idx[v]=idx[v]||{})[code]=(idx[v][code]||'')+how}
 Object.keys(Ls).forEach(function(code){var l=Ls[code];l.visuals.forEach(function(v){add(v,code,'L')});if(l.source){try{var e=document.getElementById(l.source),h=e?JSON.parse(e.textContent):'',re=/data-che-open-viz="([^"]+)"/g,m;l.inText=[];while((m=re.exec(h))){if(l.inText.indexOf(m[1])<0)l.inText.push(m[1]);add(m[1],code,'T')}}catch(_){}}});
 return{lessons:Ls,idx:idx}};
H.catalog=function(){var items=[],seen={};
 if(C.VIEW&&C.VIEW.views&&C.VIEW.views.forEach)C.VIEW.views.forEach(function(sp,id){if(seen[id])return;seen[id]=1;items.push({id:id,title:(sp&&sp.title)||id,tag:(sp&&sp.tag)||'',hint:(sp&&sp.hint)||''})});
 var R=C.VISUAL_REGISTRY;if(R&&Array.isArray(R.groups))R.groups.forEach(function(g){(g.items||[]).forEach(function(x){var id=x[0];if(!id||seen[id])return;seen[id]=1;items.push({id:id,title:x[1]||id,tag:g.title||g.kind||'',hint:x[2]||''})})});
 return items};
function css(){if(document.getElementById('che-hub2-css'))return;var st=document.createElement('style');st.id='che-hub2-css';st.textContent=
 '.h2w{max-width:1320px;margin:0 auto;padding:18px 20px 60px;color:var(--tx,#172033)}.h2w h1{font:800 28px Inter,system-ui;margin:4px 0}.h2w .h2sub{color:var(--mut,#64748b);margin:0 0 14px}'+
 '.h2chips{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 18px}.h2chips button{border:1px solid var(--line,#d5dee6);background:var(--panel,#fff);color:inherit;border-radius:999px;padding:7px 13px;font:700 13px system-ui;cursor:pointer;display:inline-flex;gap:7px;align-items:center}.h2chips button.on{color:#fff;border-color:transparent}.h2chips i{font-style:normal;opacity:.7;font-weight:600}.h2chips button.plan{opacity:.55}'+
 '.h2sec{margin:22px 0}.h2sec>h2{display:flex;align-items:center;gap:10px;font:800 19px Inter,system-ui;margin:0 0 10px}.h2dot{width:12px;height:12px;border-radius:4px;display:inline-block}'+
 '.h2grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}.h2card{border:1px solid var(--line,#d5dee6);border-radius:16px;background:var(--panel,#fff);padding:16px;display:flex;flex-direction:column;gap:8px;border-top:5px solid var(--sc,#64748b)}'+
 '.h2card b.code{font:800 12px ui-monospace,monospace;color:var(--sc);letter-spacing:.04em}.h2card h3{margin:0;font:800 18px Inter,system-ui}.h2card p{margin:0;color:var(--mut,#64748b);font-size:13.5px;line-height:1.45}.h2act{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:6px}'+
 '.h2act button{border:1px solid var(--line,#d5dee6);background:var(--panel,#fff);color:inherit;border-radius:10px;padding:8px 12px;font:700 13px system-ui;cursor:pointer}.h2act button.pri{background:var(--sc);color:#fff;border-color:transparent}'+
 '.h2plan{border:1px dashed var(--line,#d5dee6);border-radius:14px;padding:14px;color:var(--mut,#64748b);font-size:13.5px}'+
 '.h2bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 12px}.h2bar input,.h2bar select{padding:9px 12px;border:1px solid var(--line,#d5dee6);border-radius:10px;background:var(--panel,#fff);color:inherit;font:14px system-ui}.h2bar input{flex:1 1 240px}.h2bar label{white-space:nowrap;font:600 13px system-ui;display:flex;gap:6px;align-items:center}'+
 '.h2v{border:1px solid var(--line,#d5dee6);border-radius:14px;background:var(--panel,#fff);padding:12px 14px;display:flex;flex-direction:column;gap:6px}.h2v h4{margin:0;font:750 15px Inter,system-ui}.h2v code{font:600 11px ui-monospace,monospace;opacity:.65}.h2v p{margin:0;font-size:12.5px;color:var(--mut,#64748b);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'+
 '.h2tags{display:flex;flex-wrap:wrap;gap:5px}.h2tag{font:700 11px system-ui;border-radius:999px;padding:3px 8px;color:#fff}.h2tag.l{opacity:.5}.h2tag.none{background:transparent!important;color:var(--mut,#64748b);border:1px dashed var(--line,#cbd5e1)}.h2v .h2act{padding-top:2px}.h2cnt{font:600 13px system-ui;color:var(--mut,#64748b)}'+
 '@media(max-width:640px){.h2grid{grid-template-columns:1fr}.h2w{padding:12px}}';document.head.appendChild(st)}
function openViz(id,code){window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:id,lessonId:code||''},'*')}
function goVisual(f){H.pending=f;var G=C.HOME_GATE;if(G&&G.openPanel)G.openPanel('visual');else if(H.visuals)H.visuals(document.getElementById('che-visual-host'),f)}
/* ---------- PANEL LEKCJI ---------- */
H.renderLessons=function(host){if(!host)return;css();var X=H.index(),Ls=X.lessons,codes=Object.keys(Ls),by={};codes.forEach(function(c){(by[Ls[c].subject]=by[Ls[c].subject]||[]).push(Ls[c])});
 var cur=H.curSubj||'wszystkie';host.innerHTML='';var w=document.createElement('div');w.className='h2w';host.appendChild(w);
 w.innerHTML='<h1>Lekcje</h1><p class="h2sub">Przedmioty i lekcje (pełny ekran). Wizualizacje każdej lekcji otwierasz przyciskiem „Wizualizacje” — prowadzi do wspólnego katalogu, przefiltrowanego do tej lekcji.</p>';
 var ch=document.createElement('div');ch.className='h2chips';w.appendChild(ch);var body=document.createElement('div');w.appendChild(body);
 function chip(id,label,n,col,plan){var b=document.createElement('button');b.type='button';b.innerHTML=esc(label)+' <i>'+n+'</i>';if(plan)b.className='plan';if(cur===id){b.classList.add('on');b.style.background=col||'#176b8c'}b.onclick=function(){cur=H.curSubj=id;H.renderLessons(host)};ch.appendChild(b)}
 chip('wszystkie','Wszystkie',codes.length,'#176b8c');C.SUBJECTS.forEach(function(s){var n=(by[s.id]||[]).length;chip(s.id,s.name,n,s.col,!n)});
 C.SUBJECTS.forEach(function(s){if(cur!=='wszystkie'&&cur!==s.id)return;var ls=by[s.id]||[];if(cur==='wszystkie'&&!ls.length)return;
  var sec=document.createElement('section');sec.className='h2sec';sec.innerHTML='<h2><span class="h2dot" style="background:'+s.col+'"></span>'+esc(s.name)+' <span class="h2cnt">'+ls.length+' '+(ls.length===1?'lekcja':ls.length<5&&ls.length?'lekcje':'lekcji')+'</span></h2>';var g=document.createElement('div');g.className='h2grid';sec.appendChild(g);body.appendChild(sec);
  if(!ls.length){g.innerHTML='<div class="h2plan"><b>'+esc(s.name)+'</b> — w planie. Nowe lekcje tego przedmiotu pojawią się tutaj automatycznie (pole <code>subject:\''+s.id+'\'</code> przy rejestracji lekcji).</div>';return}
  ls.sort(function(a,b){return a.code<b.code?-1:1}).forEach(function(l){var nv=Object.keys(X.idx).filter(function(v){return X.idx[v][l.code]}).length;var c=document.createElement('article');c.className='h2card';c.style.setProperty('--sc',s.col);
   c.innerHTML='<b class="code">'+esc(l.code)+' · '+esc(s.short)+'</b><h3>'+esc(l.title.replace(/\s*\((fizyka|chemia)\)\s*$/i,''))+'</h3><p>'+esc(l.desc)+'</p><div class="h2act"></div>';var act=c.querySelector('.h2act');
   if(l.registered){var b1=document.createElement('button');b1.type='button';b1.className='pri';b1.textContent='Otwórz lekcję';b1.onclick=function(){var G=C.HOME_GATE;if(G&&G.openLesson)G.openLesson(l.id)};act.appendChild(b1)}
   var b2=document.createElement('button');b2.type='button';b2.textContent='Wizualizacje ('+nv+') →';b2.onclick=function(){goVisual({subject:s.id,lesson:l.code})};act.appendChild(b2);g.appendChild(c)})})};
/* ---------- KATALOG WIZUALIZACJI ---------- */
H.renderVisuals=function(host,f){if(!host)return;css();f=f||H.vf||{};H.vf=f;var X=H.index(),items=H.catalog(),Ls=X.lessons;
 var box=document.getElementById('che-hub2-visual');if(!box){box=document.createElement('div');box.id='che-hub2-visual';host.insertBefore(box,host.firstChild)}var pane=document.getElementById('pane-wizual');if(pane)pane.style.display='none';box.style.display='';
 box.innerHTML='<div class="h2w"><h1>Wizualizacje</h1><p class="h2sub">Wszystkie widoki silnika w jednym katalogu. Kolorowe etykiety pokazują, w jakim <b>przedmiocie</b> i <b>lekcji</b> widok jest użyty (pełny kolor — przycisk w treści lekcji, jaśniejszy — tylko na liście wizualizacji lekcji).</p>'+
  '<div class="h2chips" id="h2vs"></div><div class="h2bar"><input id="h2q" type="search" placeholder="Szukaj: nazwa, id, temat…"><label>Lekcja <select id="h2l"></select></label><label><input type="checkbox" id="h2u"> tylko nieprzypisane</label><button type="button" id="h2old" style="padding:8px 12px;border:1px solid var(--line,#d5dee6);border-radius:10px;background:var(--panel,#fff);color:inherit;cursor:pointer">Widok klasyczny (stos)</button><button type="button" id="h2test" style="padding:8px 12px;border:1px solid var(--accent,#0d6868);border-radius:10px;background:var(--panel,#fff);color:inherit;cursor:pointer;font-weight:700">Test silnika</button><span class="h2cnt" id="h2n"></span></div><div class="h2grid" id="h2g"></div></div>';
 box.querySelector('#h2test').onclick=function(){openViz('che-test-silnika-v01')};var q=box.querySelector('#h2q'),sl=box.querySelector('#h2l'),un=box.querySelector('#h2u'),gr=box.querySelector('#h2g'),cnt=box.querySelector('#h2n'),sc=box.querySelector('#h2vs');q.value=f.q||'';un.checked=!!f.un;
 function lessonsOfSubj(sid){return Object.keys(Ls).filter(function(c){return !sid||Ls[c].subject===sid}).sort()}
 function fillL(){sl.innerHTML='<option value="">wszystkie</option>'+lessonsOfSubj(f.subject).map(function(c){return'<option value="'+c+'"'+(f.lesson===c?' selected':'')+'>'+c+' · '+esc(Ls[c].title)+'</option>'}).join('')}
 function chips(){sc.innerHTML='';var subjUsed={};Object.keys(X.idx).forEach(function(v){Object.keys(X.idx[v]).forEach(function(c){if(Ls[c])subjUsed[Ls[c].subject]=(subjUsed[Ls[c].subject]||0)+1})});
  [['', 'Wszystkie',items.length,'#176b8c']].concat(C.SUBJECTS.filter(function(s){return subjUsed[s.id]}).map(function(s){return[s.id,s.name,Object.keys(X.idx).filter(function(v){return Object.keys(X.idx[v]).some(function(c){return Ls[c]&&Ls[c].subject===s.id})}).length,s.col]})).forEach(function(a){var b=document.createElement('button');b.type='button';b.innerHTML=esc(a[1])+' <i>'+a[2]+'</i>';if((f.subject||'')===a[0]){b.classList.add('on');b.style.background=a[3]}b.onclick=function(){f.subject=a[0];f.lesson='';fillL();chips();draw()};sc.appendChild(b)})}
 function draw(){var qq=(q.value||'').toLowerCase().trim();f.q=q.value;f.un=un.checked;f.lesson=sl.value;var shown=0;gr.innerHTML='';
  items.sort(function(a,b){var ua=X.idx[a.id]?0:1,ub=X.idx[b.id]?0:1;return ua-ub});items.forEach(function(it){var where=X.idx[it.id]||{},codes=Object.keys(where).filter(function(c){return Ls[c]});
   if(f.un&&codes.length)return;if(f.lesson&&!where[f.lesson])return;if(f.subject&&!codes.some(function(c){return Ls[c].subject===f.subject}))return;
   if(qq&&(it.id+' '+it.title+' '+it.hint+' '+codes.join(' ')).toLowerCase().indexOf(qq)<0)return;shown++;
   var d=document.createElement('div');d.className='h2v';var tags=codes.sort().map(function(c){var s=subj(Ls[c].subject);return'<span class="h2tag'+(where[c].indexOf('T')>=0?'':' l')+'" style="background:'+s.col+'" title="'+esc(s.name+' · '+Ls[c].title+(where[c].indexOf('T')>=0?' · przycisk w treści lekcji':' · na liście wizualizacji lekcji'))+'">'+esc(s.short+' '+c)+'</span>'}).join('')||'<span class="h2tag none">nieprzypisany</span>';
   d.innerHTML='<h4>'+esc(it.title)+'</h4><code>'+esc(it.id)+(it.tag?' · '+esc(it.tag):'')+'</code><p>'+esc(it.hint)+'</p><div class="h2tags">'+tags+'</div><div class="h2act"></div>';
   var b=document.createElement('button');b.type='button';b.textContent='Otwórz';b.onclick=function(){openViz(it.id,f.lesson||codes[0]||'')};d.querySelector('.h2act').appendChild(b);gr.appendChild(d)});
  cnt.textContent=shown+' / '+items.length}
 q.oninput=draw;un.onchange=draw;sl.onchange=draw;box.querySelector('#h2old').onclick=function(){box.style.display='none';if(pane){pane.style.display='block'}var G=C.HOME_GATE;if(G&&G.legacyVisual)G.legacyVisual()};
 fillL();chips();draw()};
H.visuals=function(host,f){H.renderVisuals(host,f||H.pending);H.pending=null};
H.lessonsPanel=function(host){H.renderLessons(host)};
})();
</script>
