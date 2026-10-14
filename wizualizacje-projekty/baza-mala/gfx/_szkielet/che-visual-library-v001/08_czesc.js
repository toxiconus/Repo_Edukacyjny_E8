

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function G(){return C.LAB&&C.LAB.GFX}function D(){return C.DATA||{}}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function rxKey(k){var g=G(),sp=g&&g.rx&&g.rx.get(k);return sp&&sp.rxKey||k}
function eq(k){var R=C.REACTION,kk=rxKey(k),SUB='₀₁₂₃₄₅₆₇₈₉';try{if(R&&R.equation&&R.get(kk))return R.equation(kk).replace(/([A-Za-z\)\]])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(c){return SUB[c]})}).replace(/->/g,'→')}catch(_){}return k}
function card(k){var kk=rxKey(k),d=(D().REACTION_DATA||{})[kk]||{},g=G(),I=g&&g.rx&&specFor(k)?g.rx.info(specFor(k)):null,J=null;try{J=C.IONIC&&C.IONIC.equations(kk)}catch(_){}
 return '<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0;overflow-wrap:anywhere">'+(I?I.eq:eq(k))+'</div>'+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')
  +'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||(I&&I.why)||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(I&&I.teacher?'<br><b>Tylko pokaz nauczyciela.</b>':'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+kk+'</small></div>'}
function define(id,o){V.define(id,{title:o.title,tag:'GFX',hint:o.hint||'Wybierz doświadczenie: animacja w zlewce, równanie cząsteczkowe i jonowe, warunki, obserwacja i BHP — wszystko z silnika.',
 foot:'GFX.rx (barwy CHE.COLORS) · CHE.REACTION / REACTION_DATA · CHE.IONIC',
 build:function(host){host.innerHTML='';var bars=el('div'),area=el('div');host.append(bars,area);var all=[],first=null,R=D().REACTIONS||{};
  o.groups.forEach(function(gr){var ks=gr[1].filter(function(k){return R[rxKey(k)]||R[k.replace('+php','')]});if(!ks.length)return;var r=el('div','r','<b style="min-width:150px">'+gr[0]+':</b> ');
   ks.forEach(function(k){first=first||k;var b=el('button',null,eq(k).split(' → ')[0]+(/\+php$/.test(k)?' + fenoloftaleina':''));b.type='button';b.onclick=function(){all.forEach(function(x){x.classList.toggle('on',x===b)});show(k)};r.appendChild(b);all.push(b)});bars.appendChild(r)});
  function show(k){area.innerHTML='';var g=el('div');g.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;align-items:start';area.appendChild(g);var l=el('div'),r=el('div');g.append(l,r);
   var s=specFor(k),GX=G();if(s&&GX){var m=GX.rx.mount(l,s,{height:240,dur:6,auto:true});var bb=el('div','r');var x=el('button',null,'▶ powtórz');x.type='button';x.onclick=function(){m.play()};bb.appendChild(x);l.appendChild(bb)}else l.innerHTML='<div class="note">Brak animacji w zlewce dla tej reakcji — opis i równanie obok.</div>';
   r.innerHTML=card(k)}
  var keys=[];all.forEach(function(b,i){b._k=null});o.groups.forEach(function(gr){gr[1].forEach(function(k){if(R[rxKey(k)]||R[k.replace('+php','')])keys.push(k)})});keys.forEach(function(k,i){if(all[i])all[i]._k=k});
  host._show=function(k){var b=all.filter(function(x){return x._k===k})[0];if(b){b.click();return true}return false};(C.PRACOWNIA.live=C.PRACOWNIA.live||{})[id]=host;
  var p=C.PRACOWNIA.pending;C.PRACOWNIA.pending=null;if(p&&host._show(p))return;
  if(first){all[0].classList.add('on');show(first)}}})}
 
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.che-prac-go');if(!b)return;e.preventDefault();var id=b.getAttribute('data-prac'),k=b.getAttribute('data-k'),P=C.PRACOWNIA,doc=b.ownerDocument;
 var h=(P.live||{})[id];if(h&&h.isConnected&&doc.contains(h)&&h._show(k)){h.scrollIntoView({behavior:'smooth',block:'center'});return}
 P.pending=k;var ref=doc.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]')||doc.querySelector('[data-che-lesson-viz="'+id+'"]');if(!ref)return;ref.scrollIntoView({behavior:'auto',block:'center'});var t=ref.querySelector('button[data-che-open-viz]');if(t)t.click();
 var n=0,iv=setInterval(function(){var hh=(P.live||{})[id];if(hh&&hh.isConnected&&doc.contains(hh)){clearInterval(iv);if(P.pending)hh._show(P.pending);P.pending=null;hh.scrollIntoView({behavior:'smooth',block:'center'})}else if(++n>40)clearInterval(iv)},100)});
C.PRACOWNIA={version:'1.0',define:define,card:card};
/*@@GFX widoki/n01-doswiadczenia-v01@@*/
/*@@GFX widoki/n02-doswiadczenia-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function norm(v){if(v==null)return{ok:null,d:'brak wyniku'};if(typeof v==='boolean')return{ok:v,d:''};
 if(Array.isArray(v)&&v.length&&v[0]&&v[0].ok!==undefined){var bad=v.filter(function(x){return x.ok===false});return{ok:!bad.length,d:bad.length?bad.map(function(x){return(x.id||'')+' '+(x.name||'')+(x.detail?': '+x.detail:'')}).join('; '):v.length+' testów'}}
 if(Array.isArray(v.invalid))return{ok:!v.invalid.length,d:(v.records!=null?v.records+' rekordów':'')+(v.invalid.length?' · błędne: '+v.invalid.slice(0,8).join(', '):'')};
 if(Array.isArray(v.tests)){var f=v.tests.filter(function(t){return Array.isArray(t)?!t[1]:t.ok===false});return{ok:!f.length,d:f.length?f.map(function(t){return Array.isArray(t)?t[0]+(t[2]?': '+t[2]:''):(t.name||t.id)}).join('; '):v.tests.length+' testów'}}
 if(Array.isArray(v.rows)){var g=v.rows.filter(function(r){return r.ok===false});return{ok:!g.length,d:g.length?g.map(function(r){return r.id+' '+(r.detail||'')}).join('; '):v.rows.length+' sprawdzeń'}}
 if(Array.isArray(v.unbalanced)){var u=v.unbalanced.length+(v.missingData||[]).length;return{ok:!u,d:(v.count||'?')+' reakcji'+(u?' · niezbilansowane/brak danych: '+v.unbalanced.concat(v.missingData||[]).map(function(x){return x.id||x}).join(', '):'')+((v.incomplete||[]).length?' · niepełne metadane: '+v.incomplete.length:'')}}
 var ok=v.ok!==undefined?v.ok:v.pass!==undefined?v.pass:(v.passed!==undefined&&v.failed!==undefined)?!v.failed:null;
 if(ok===null)return{ok:null,d:'raport informacyjny: '+JSON.stringify(v,function(k,x){return Array.isArray(x)?'['+x.length+']':x}).slice(0,200)};
 var d=ok===false?JSON.stringify(v.failed||v.issues||v.errors||v.fails||'').slice(0,240):(v.passed!==undefined?v.passed+' ok':'');return{ok:ok,d:d}}
function audits(){var out=[],seen={};function run(name,fn,ctx){if(seen[name])return;seen[name]=1;var t0=performance.now();try{var r=norm(fn.call(ctx));out.push({name:name,ok:r.ok,d:r.d,ms:performance.now()-t0})}catch(e){out.push({name:name,ok:false,d:'wyjątek: '+e.message,ms:performance.now()-t0})}}
 [['Spójność danych (CHE.CONSISTENCY)',C.CONSISTENCY,'audit'],['Tlenki (CHE.OXIDES)',C.OXIDES,'audit'],['Wodorotlenki (CHE.HYDROXIDES)',C.HYDROXIDES,'audit'],['Stechiometria (CHE.STECH)',C.STECH,'audit'],
  ['Fizyka: elektrostatyka (CHE.FIZ.ELEKTRO)',C.FIZ&&C.FIZ.ELEKTRO,'audit'],['Fizyka: model (CHE.PHYS)',C.PHYS,'audit'],['Reakcje: bilans i metadane (CHE.REACTION)',C.REACTION,'audit'],['Barwy (CHE.COLORS)',C.COLORS,'audit'],['Barwy — regresja (CHE.COLORS)',C.COLORS,'regression'],['Jony (CHE.IONIC)',C.IONIC,'audit']]
  .forEach(function(a){if(a[1]&&typeof a[1][a[2]]==='function')run(a[0],a[1][a[2]],a[1])});
 Object.keys(C).filter(function(k){return/REGRESSION|AUDIT|SELFTEST|selfTest|GATE|VERIFY|TEST/.test(k)&&!/RESULT/.test(k)}).forEach(function(k){var x=C[k],fn=typeof x==='function'?x:x&&(x.run||x.audit||x.check||x.verify);if(typeof fn==='function')run('regresja: '+k,fn,x)});
 return out}
function smoke(ids,onStep,done){var res=[],i=0,stage=el('div');stage.style.cssText='position:fixed;left:-12000px;top:0;width:960px;height:800px;overflow:hidden;pointer-events:none';document.body.appendChild(stage);
 var errs=[],h=function(e){errs.push((e.message||String(e.reason||e)).slice(0,160))};window.addEventListener('error',h);window.addEventListener('unhandledrejection',h);
 function next(){if(i>=ids.length){window.removeEventListener('error',h);window.removeEventListener('unhandledrejection',h);stage.remove();done(res);return}
  var id=ids[i++],host=el('div');host.dataset.che=id;stage.appendChild(host);errs=[];var t0=performance.now(),ex=null;try{V.mount(host)}catch(e){ex=e.message}
  setTimeout(function(){var ms=performance.now()-t0,len=(host.textContent||'').trim().length+host.querySelectorAll('canvas,svg').length*50;res.push({id:id,ok:!ex&&!errs.length&&len>0,ms:ms,d:ex?'wyjątek: '+ex:errs.length?errs.join(' | '):len?'':'pusty widok'});host.remove();onStep(i,ids.length);next()},120)}
 next()}
/*@@GFX widoki/che-test-silnika-v01@@*/
})();

