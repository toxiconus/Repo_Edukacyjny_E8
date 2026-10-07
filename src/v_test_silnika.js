;/* ===== TEST SILNIKA (che-test-silnika-v01) — jeden przycisk: wszystkie audyty modułów, spójność danych (CHE.CONSISTENCY), bilans reakcji (CHE.REACTION),
   regresje historyczne silnika oraz test montowania KAŻDEGO widoku (błędy JS, puste widoki, czas). Raport do skopiowania. ===== */
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
V.define('che-test-silnika-v01',{title:'Test silnika — audyty modułów, spójność i montowanie wszystkich widoków',tag:'AUDYT',
 hint:'Audyty uruchamiają się od razu. „Test widoków” montuje po kolei każdy widok poza ekranem i łapie błędy JS oraz puste widoki. Raport można skopiować (np. do zgłoszenia błędu).',
 foot:'Źródła: CHE.CONSISTENCY, audyty modułów (OXIDES, HYDROXIDES, STECH, FIZ.ELEKTRO, PHYS, REACTION, COLORS, IONIC), regresje CHE.*REGRESSION*, CHE.VIEW (montowanie).',
 build:function(host){host.innerHTML='';var rep={audits:[],views:[]};
  var top=el('div','r');host.appendChild(top);var sum=el('div');sum.style.cssText='display:flex;gap:10px;flex-wrap:wrap;margin:8px 0';host.appendChild(sum);
  var bA=el('button',null,'↻ audyty');bA.type='button';var bV=el('button','on','▶ test widoków');bV.type='button';var bC=el('button',null,'⧉ kopiuj raport');bC.type='button';top.append(bA,bV,bC);
  var prog=el('div');prog.style.cssText='height:6px;border-radius:4px;background:var(--surface-soft,#e2e8f0);overflow:hidden;margin:4px 0;display:none';var bar=el('div');bar.style.cssText='height:100%;width:0;background:var(--accent,#0d6868);transition:width .1s';prog.appendChild(bar);host.appendChild(prog);
  var fA=el('label',null,'<input type="checkbox"> tylko problemy');top.appendChild(fA);var only=fA.querySelector('input');only.onchange=draw;
  var tA=el('div'),tV=el('div');host.append(tA,tV);
  function badge(n,lab,col){return'<div style="padding:8px 12px;border-radius:10px;border:1px solid var(--border,#e2e8f0);border-left:4px solid '+col+';min-width:140px"><b style="font-size:20px">'+n+'</b><div style="font-size:12px">'+lab+'</div></div>'}
  function table(rows,cols){return'<div class="table-wrap"><table><thead><tr>'+cols.map(function(c){return'<th>'+c+'</th>'}).join('')+'</tr></thead><tbody>'+rows.join('')+'</tbody></table></div>'}
  function st(ok){return ok===true?'<b style="color:#16a34a">✓</b>':ok===false?'<b style="color:#dc2626">✗</b>':'<b style="color:#d97706">?</b>'}
  function draw(){var A=rep.audits,W=rep.views,f=only.checked;
   sum.innerHTML=badge(A.filter(function(x){return x.ok===true}).length+' / '+A.length,'audyty ✓',A.some(function(x){return x.ok===false})?'#dc2626':'#16a34a')+badge(A.filter(function(x){return x.ok===null}).length,'raporty informacyjne (?)','#d97706')
    +badge(W.length?W.filter(function(x){return x.ok}).length+' / '+W.length:'—','widoki ✓ (montowanie)',W.some(function(x){return!x.ok})?'#dc2626':'#16a34a')+badge(W.length?Math.round(W.reduce(function(a,x){return a+x.ms},0))+' ms':'—','łączny czas montowania','#64748b');
   tA.innerHTML='<h4 style="margin:10px 0 4px">Audyty i regresje</h4>'+table(A.filter(function(x){return!f||x.ok!==true}).map(function(x){return'<tr><td>'+st(x.ok)+'</td><td>'+esc(x.name)+'</td><td style="font-size:12px">'+esc(x.d)+'</td><td>'+x.ms.toFixed(0)+' ms</td></tr>'}),['','Moduł','Wynik','Czas']);
   tV.innerHTML=W.length?'<h4 style="margin:10px 0 4px">Montowanie widoków</h4>'+table(W.filter(function(x){return!f||!x.ok}).map(function(x){return'<tr><td>'+st(x.ok)+'</td><td><a href="#" data-v="'+esc(x.id)+'">'+esc(x.id)+'</a></td><td style="font-size:12px">'+esc(x.d)+'</td><td>'+x.ms.toFixed(0)+' ms</td></tr>'}),['','Widok','Błąd','Czas']):'<p class="note">Kliknij „▶ test widoków”, aby zamontować wszystkie widoki ('+(V.views?V.views.size:0)+').</p>';
   [].forEach.call(tV.querySelectorAll('a[data-v]'),function(a){a.onclick=function(e){e.preventDefault();window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:a.dataset.v,lessonId:''},'*')}})}
  bA.onclick=function(){rep.audits=audits();draw()};
  bV.onclick=function(){var ids=[];V.views.forEach(function(_,k){if(k!=='che-test-silnika-v01'&&k.indexOf('legacy:')!==0)ids.push(k)});prog.style.display='';bV.disabled=true;rep.views=[];
   smoke(ids,function(i,n){bar.style.width=(100*i/n)+'%'},function(r){rep.views=r;bV.disabled=false;prog.style.display='none';draw()})};
  bC.onclick=function(){var t='TEST SILNIKA CHE '+new Date().toISOString()+'\n'+rep.audits.map(function(x){return(x.ok===true?'OK ':x.ok===false?'FAIL ':'? ')+x.name+' — '+x.d}).join('\n')+'\n'+rep.views.filter(function(x){return!x.ok}).map(function(x){return'VIEW FAIL '+x.id+' — '+x.d}).join('\n')+'\nwidoki: '+rep.views.filter(function(x){return x.ok}).length+'/'+rep.views.length;
   try{navigator.clipboard.writeText(t);bC.textContent='✓ skopiowano'}catch(_){var ta=el('textarea');ta.value=t;ta.style.cssText='width:100%;height:160px';host.appendChild(ta)}};
  rep.audits=audits();draw()}});
})();
