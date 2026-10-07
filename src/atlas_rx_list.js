  /* Atlas · Reakcja: katalog pogrupowany wg typu (D.REACTION_TYPE_NAMES), filtr „z pierwiastkiem / wszystkie”, wyszukiwarka, znacznik lekcji (REACTION_DATA.lesson) */
  var rxF='el',rxQ='';
  function rxList(L,s,R){var RD=DT().REACTION_DATA||{},TN=DT().REACTION_TYPE_NAMES||{},q=rxQ.toLowerCase().trim();
    var hasS=function(x){return x.reactants.concat(x.products).some(function(y){return has(y.formula,s)})},nEl=L.filter(hasS).length;
    var F=L.filter(function(x){if(rxF==='el'&&!hasS(x))return false;if(q&&(R.equation(x.id)+' '+x.id+' '+(TN[x.type]||x.type||'')).toLowerCase().indexOf(q)<0)return false;return true});
    var G={};F.forEach(function(x){var t=String(TN[x.type]||x.type||'inne');t=t.charAt(0).toUpperCase()+t.slice(1);(G[t]=G[t]||[]).push(x)});
    var bar='<div class="rxl-bar"><button type="button" data-f="el"'+(rxF==='el'?' class="on"':'')+'>z: '+esc(s)+' <i>'+nEl+'</i></button><button type="button" data-f="all"'+(rxF==='all'?' class="on"':'')+'>wszystkie <i>'+L.length+'</i></button><input type="search" id="rxl-q" placeholder="Szukaj: wzór, typ reakcji…" value="'+esc(rxQ)+'"><span class="rxl-n">'+F.length+' wyników</span></div>';
    var body=Object.keys(G).sort(function(a,b){return G[b].length-G[a].length||a.localeCompare(b)}).map(function(t){return '<div class="rxl-g"><div class="rxl-t">'+esc(t)+' <i>'+G[t].length+'</i></div><div class="rx-presets">'+G[t].map(function(x){var d=RD[x.id]||{};
      return '<button type="button" data-r="'+x.id+'"'+(x.id===rid?' class="on"':'')+' title="'+esc(R.equation(x.id))+'">'+(rxF==='all'&&hasS(x)?'<b class="rxl-s">'+esc(s)+'</b> ':'')+fm(R.equation(x.id).split('→')[0].trim().replace(/(^| \+ )(\d) /g,'$1$2 '))+(d.lesson?'<small class="rxl-l">'+esc(d.lesson)+'</small>':'')+'</button>'}).join('')+'</div></div>'}).join('');
    return bar+'<div class="rxl-box">'+(body||'<p class="dn-mut">Brak reakcji z '+esc(s)+' w silniku'+(q?' dla „'+esc(rxQ)+'”':'')+'. Wybierz „wszystkie”.</p>')+'</div>'}
