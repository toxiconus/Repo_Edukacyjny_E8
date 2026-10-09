V.define('n02-reaktor-v01',{title:'Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź',tag:'E8',
 hint:'Wybierz wodorotlenek i odczynnik. Najpierw zaznacz przewidywanie (zachodzi / nie zachodzi), potem „Sprawdź” — silnik podaje równanie, typ reakcji, obserwację i uzasadnienie; jeśli jest animacja, zobaczysz zlewkę.',
 foot:'Reguły: CHE.HYDROXIDES.predict (zobojętnianie — także dla par bez rekordu: równanie z reguły H⁺ = OH⁻) · animacja: GFX.rx.',
 build:function(host){host.innerHTML='';var H=HY(),st={f:'Al(OH)3',g:'NaOH',guess:null};
  var b1=el('div','r','<b>Wodorotlenek:</b> ');host.appendChild(b1);seg(b1,H.list(function(r){return r.level!=='LO'&&r.metal!=='NH4'}).map(function(r){return[r.f,r.pretty]}),st.f,function(v){st.f=v;clr()});
  var b2=el('div','r','<b>Odczynnik:</b> ');host.appendChild(b2);seg(b2,H.REAGENTS.map(function(x){return[x,x==='ogrzewanie'||x==='powietrze'?x:H.pretty(x)]}),st.g,function(v){st.g=v;clr()});
  var b3=el('div','r','<b>Twoje przewidywanie:</b> ');host.appendChild(b3);var gb=seg(b3,[['tak','zachodzi reakcja'],['nie','nie zachodzi']],null,function(v){st.guess=v});btn(b3,'Sprawdź',check,'on');
  var g=grid(host,280),l=el('div'),r=el('div');g.append(l,r);
  function clr(){st.guess=null;gb.forEach(function(q){q.classList.remove('on')});l.innerHTML='';r.innerHTML='<div class="note">'+H.pretty(st.f)+' + '+(H.pretty(st.g))+' — co się stanie? Zaznacz przewidywanie i kliknij „Sprawdź”.</div>'}
  function check(){var p=H.predict(st.f,st.g);if(!p){r.innerHTML='—';return}var ok=p.ok&&!p.physical,hit=st.guess==null?null:((st.guess==='tak')===ok);
   r.innerHTML=(hit==null?'':card(hit?'✓ Trafione przewidywanie':'✗ Przewidywanie nietrafione','',hit?'#16a34a':'#dc2626'))+card(ok?'Zachodzi: '+(p.type||'reakcja'):p.physical?'Rozpuszczanie (proces fizyczny + dysocjacja)':'Brak reakcji',(p.eq?eqHtml(p.eq):'')+'<div>'+(p.why||'')+'</div>'+(p.obs?'<div><b>Obserwacja:</b> '+p.obs+'</div>':'')+(p.cond?'<div><b>Warunki:</b> '+p.cond+'</div>':'')+(p.note?'<div><small>'+p.note+'</small></div>':'')+(p.level&&p.level!=='E8'?'<div><small>poziom: '+p.level+'</small></div>':''),ok?'#16a34a':'#94a3b8');
   l.innerHTML='';if(p.rx)beaker(l,p.rx,240)}
  clr()}});