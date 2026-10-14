V.define('n01-konstruktor-v01',{title:'Konstruktor wzoru tlenku (W–K–S–K) i sprawdzanie wzoru',tag:'E8',
 hint:'Wybierz pierwiastek i jego stopień utlenienia. Animacja pokazuje: wartościowości → krzyżowanie → skracanie → kontrola ładunku. Niżej sprawdzisz dowolny wzór: stopień utlenienia, nadtlenki, OF₂, tlenki mieszane.',
 foot:'CHE.OXIDES.build / oxState · stopnie utlenienia: CHE.DATA.OXIDE_STATES · charakter: CHE.DATA.OXIDES.',
 build:function(host){host.innerHTML='';var A=OXA(),S=D().OXIDE_STATES||{},st={el:'Fe',ox:3,t0:performance.now()};
  var bar=el('div','r');host.appendChild(bar);var eB=[];Object.keys(S).filter(function(e){return e!=='H'}).forEach(function(e){var b=btn(bar,e,function(){st.el=e;st.ox=S[e][S[e].length-1];st.t0=performance.now();eB.forEach(function(q){q.classList.toggle('on',q===b)});oxBar();upd()});eB.push(b);if(e===st.el)b.classList.add('on')});
  var ob=el('div','r');host.appendChild(ob);
  function oxBar(){ob.innerHTML='<span style="font:600 13px system-ui;margin-right:6px">stopień utlenienia:</span>';(S[st.el]||[]).forEach(function(x){var b=btn(ob,'+'+['','I','II','III','IV','V','VI','VII'][x],function(){st.ox=x;st.t0=performance.now();oxBar();upd()});if(x===st.ox)b.classList.add('on')})}
  var cv=el('canvas');cv.style.cssText='width:100%;height:220px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';host.appendChild(cv);var info=el('div','note');host.appendChild(info);
  var chk=el('div');chk.style.cssText='margin-top:10px;border:1px solid var(--line,#d5dee6);border-radius:12px;padding:10px';host.appendChild(chk);
  chk.innerHTML='<b>Sprawdź wzór</b> — czy to tlenek i jaki stopień utlenienia? <div class="r" style="margin-top:6px"><input id="n01f" value="Mn2O7" style="padding:7px 10px;border:1px solid #cbd5e1;border-radius:8px;font:600 15px ui-monospace,monospace;width:140px"></div><div id="n01r" class="note"></div>';
  var inp=chk.querySelector('#n01f'),res=chk.querySelector('#n01r'),qb=chk.querySelector('.r');
  ['Fe2O3','Fe3O4','Na2O2','H2O2','OF2','KO2','Mn2O7','P4O10','CO'].forEach(function(f){btn(qb,A.pretty(f),function(){inp.value=f;check()})});btn(qb,'Sprawdź',check,'on');inp.oninput=check;
  function check(){var f=inp.value.trim(),r=A.oxState(f);if(!r){res.innerHTML='—';return}if(r.error){res.innerHTML='<b style="color:#b91c1c">'+r.error+'</b>';return}
   var o=(D().OXIDES||{})[f];res.innerHTML='<b>'+A.pretty(f)+'</b>: tlen −II → '+r.el+' na stopniu <b>'+(r.integer?(r.ox>0?'+':'')+r.ox:'+'+String(Math.round(r.ox*100)/100).replace('.',','))+'</b> · kontrola: '+r.check+(r.note?'<br><i>'+r.note+'</i>':'')+(o?'<br>W silniku: <b>'+o.name+'</b> — charakter <b style="color:'+CC(o.char)+'">'+o.char+'</b>':'<br><span style="opacity:.75">Brak w bazie tlenków silnika — wzór poprawny formalnie, ale sprawdź, czy taki związek istnieje.</span>')}
  function upd(){var b=A.build(st.el,st.ox),o=b&&(D().OXIDES||{})[b.formula];info.innerHTML=b?'<b>'+b.pretty+'</b> — '+b.name+' · '+b.steps.join(' → ')+(o?'<br>Charakter: <b style="color:'+CC(o.char)+'">'+o.char+'</b> · z wodą: '+o.water.text:'<br><span style="opacity:.75">Ten tlenek nie jest opisany w bazie silnika (rzadki / nietrwały).</span>'):''}
  var ROM=['','I','II','III','IV','V','VI','VII'],SUB='₀₁₂₃₄₅₆₇₈₉';
  function frame(t){if(!cv.isConnected)return;var d=Math.min(2,window.devicePixelRatio||1),w=cv.clientWidth||600,h=cv.clientHeight||220;if(cv.width!==Math.round(w*d)){cv.width=w*d;cv.height=h*d}var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);var T=G().theme(),b=A.build(st.el,st.ox);if(!b){requestAnimationFrame(frame);return}
   var k=Math.min(4,(t-st.t0)/900),cx=w/2;x.textAlign='center';x.textBaseline='middle';
    
   var xE=cx-90,xO=cx+90,y=60;x.font='800 40px Inter,system-ui';x.fillStyle=T.text;x.fillText(st.el,xE,y);x.fillText('O',xO,y);
   x.font='800 18px system-ui';x.fillStyle='#ea580c';x.fillText(ROM[st.ox],xE+34,y-26);x.fillStyle='#2563eb';x.fillText('II',xO+28,y-26);
    
   if(k>1){var a=Math.min(1,k-1);x.strokeStyle='#ea580c';x.lineWidth=2.5;x.setLineDash([6,4]);x.beginPath();x.moveTo(xE+34,y-14);x.lineTo(xE+34+(xO+22-(xE+34))*a,y-14+(y+52-(y-14))*a);x.stroke();x.strokeStyle='#2563eb';x.beginPath();x.moveTo(xO+28,y-14);x.lineTo(xO+28+(xE+20-(xO+28))*a,y-14+(y+52-(y-14))*a);x.stroke();x.setLineDash([]);x.font='800 40px Inter,system-ui';x.fillStyle=T.text;x.fillText(st.el,xE,y);x.fillText('O',xO,y) }
    
   if(k>2){x.font='800 30px Inter,system-ui';x.fillStyle=T.text;var raw=b.raw.replace(/\d/g,function(c){return SUB[c]}),fin=b.pretty;x.globalAlpha=b.reduced&&k>3?.35:1;x.fillText(raw,cx,y+70);x.globalAlpha=1;if(b.reduced&&k>3){x.fillStyle='#16a34a';x.fillText('→ '+fin,cx+(raw.length*9)+50,y+70)}}
   if(k>3.3){x.font='600 14px system-ui';x.fillStyle=T.mut;x.fillText('kontrola: '+b.nEl+'·(+'+st.ox+') + '+b.nO+'·(−2) = '+(b.nEl*st.ox-2*b.nO)+' ✓',cx,y+120)}
   requestAnimationFrame(frame)}
  oxBar();upd();check();requestAnimationFrame(frame)}});