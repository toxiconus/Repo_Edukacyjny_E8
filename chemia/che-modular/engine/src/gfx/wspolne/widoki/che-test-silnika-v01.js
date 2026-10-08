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