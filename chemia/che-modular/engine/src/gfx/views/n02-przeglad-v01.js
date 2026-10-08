V.define('n02-przeglad-v01',{title:'Wodorotlenki — rozpuszczalność, barwa osadu, odczyn i otrzymywanie',tag:'E8',
 hint:'Kolor ramki = rozpuszczalność (z tabeli rozpuszczalności silnika), kropka = barwa substancji / osadu. Kliknij kafelek: cztery pytania (co to jest, czy się rozpuszcza, co jest w roztworze, jaki odczyn) i które metody otrzymywania działają.',
 foot:'Dane: CHE.DATA.HYDROXIDES + D.SOLUBILITY_TABLE (OH⁻) · równania: D.REACTIONS · rozpuszczalności g/100 g — orientacyjne (20 °C).',
 build:function(host){host.innerHTML='';var H=HY(),st={lv:1,f:'NaOH'};
  var bar=el('div','r');host.appendChild(bar);seg(bar,[[1,'E8'],[2,'+ ambitne'],[3,'+ liceum']],1,function(v){st.lv=v;tiles()});
  bar.appendChild(el('span',null,'<span style="margin-left:12px;font:600 12px system-ui">'+['R','T','N'].map(function(s){return'<span style="color:'+SOLC[s]+';margin-right:10px">'+SOLS[s]+' '+{R:'dobrze rozpuszczalny',T:'trudno',N:'praktycznie nierozpuszczalny (osad ↓)'}[s]+'</span>'}).join('')+'</span>'));
  var tg=el('div');tg.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(124px,1fr));gap:8px;margin:8px 0';host.appendChild(tg);var det=el('div');host.appendChild(det);
  function tiles(){tg.innerHTML='';H.list(function(r){return(LVN[r.level]||1)<=st.lv}).forEach(function(r){var s=H.solubility(r.f),b=el('button');b.type='button';
   b.style.cssText='display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;white-space:normal;height:auto;min-height:0;overflow:hidden;text-align:left;padding:8px;border-radius:10px;border:2px solid '+(SOLC[s.s]||'#64748b')+';background:var(--panel,#fff);cursor:pointer;color:inherit;font:inherit'+(r.f===st.f?';box-shadow:0 0 0 3px var(--accent-soft,#99f6e4)':'');
   b.innerHTML='<b style="display:block;font:800 16px Inter,system-ui,sans-serif;white-space:nowrap">'+r.pretty+'</b><small style="display:flex;align-items:center;gap:5px;margin-top:3px;white-space:nowrap"><span style="flex:none;width:12px;height:12px;border-radius:50%;background:'+r.hex+';border:1px solid #94a3b8"></span>'+r.cation+' · <b style="color:'+(SOLC[s.s]||'')+'">'+(SOLS[s.s]||'?')+'</b>'+(r.amph?' · amf.':'')+'</small>';
   b.onclick=function(){st.f=r.f;tiles()};tg.appendChild(b)});show()}
  function show(){var r=H.get(st.f),s=H.solubility(r.f),d=H.dissociation(r.f),ob=H.obtain(r.f);
   det.innerHTML='<h3 style="margin:6px 0">'+r.pretty+' — '+r.name+'</h3>'+'<div class="table-wrap"><table><tbody>'
    +'<tr><th>Co to jest?</th><td>kation '+r.cation+' + '+r.q+' × OH⁻ → '+r.pretty+(r.amph?' · <b>amfoteryczny</b> (reaguje z kwasami i z mocnymi zasadami)':'')+'</td></tr>'
    +'<tr><th>Czy się rozpuszcza?</th><td><b style="color:'+(SOLC[s.s]||'')+'">'+s.label+'</b>'+(s.g100!=null?' (ok. '+fmt(s.g100,s.g100<0.01?4:s.g100<1?3:1)+' g / 100 g wody)':'')+' <small>źródło: '+s.source+'</small></td></tr>'
    +'<tr><th>Co jest w roztworze?</th><td>'+d.eq+'<br><small>'+d.note+'</small></td></tr>'
    +'<tr><th>Jaki odczyn?</th><td>'+s.odczyn+(s.ph?' (pH ≈ '+fmt(s.ph,1)+')':'')+(s.base?' — to <b>zasada</b> (roztwór)':'')+'</td></tr>'
    +'<tr><th>Barwa</th><td><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:'+r.hex+';border:1px solid #94a3b8;vertical-align:-2px"></span> '+r.color+'</td></tr>'
    +'</tbody></table></div>'+'<h4 style="margin:10px 0 4px">Jak go otrzymać?</h4>'+ob.map(function(o){return card((o.ok?'✓ ':'✗ ')+o.title,o.ok?eqHtml(o.eq)+'<small>'+o.cond+(o.obs?' · obserwacja: '+o.obs:'')+(o.safety?' · BHP: '+o.safety:'')+'</small>':'<small>'+o.why+'</small>',o.ok?'#16a34a':'#94a3b8')}).join('')
    +(r.notes.length?card('Warto wiedzieć','<ul style="margin:2px 0 0 18px">'+r.notes.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul>','#64748b'):'')}
  tiles()}});