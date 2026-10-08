
(function(){
  'use strict';
  var $=function(id){return document.getElementById(id)};
  function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  var SUB='₀₁₂₃₄₅₆₇₈₉';
  function fm(f){return esc(String(f).replace(/([A-Za-z\)])(\d+)/g,function(_,a,d){return a+d.replace(/\d/g,function(x){return SUB[+x]})}))}
  function pack(){
    var el=$('che-lesson-data'),p=null;
    if(el){try{p=JSON.parse(el.textContent)}catch(e){}}
    if(!p||!p.activitySeries){var c=window.CHE&&window.CHE.DATA&&window.CHE.DATA.SCHOOL_PACK; if(c&&c.activitySeries) p=c}
    return p;
  }
   
  var VAL={Mg:2,Al:3,Zn:2,Fe:2,Sn:2};
  var ANION={HCl:{n:1,x:'Cl'},H2SO4:{n:2,x:'SO4'}};
  function gcd(a,b){return b?gcd(b,a%b):a}
  function equation(m,acid){
    var v=VAL[m],an=ANION[acid]; if(!v||!an) return null;
    var g=gcd(an.n,v),a=an.n/g,b=v/g,k=an.n*v/g,mult=k%2?2:1;
    var xf=an.x.length>2&&/\d/.test(an.x)?'('+an.x+')':an.x;
    var salt=m+(a>1?a:'')+(b>1?xf+b:an.x);
    if(b===1) salt=m+(a>1?a:'')+an.x; else salt=m+(a>1?a:'')+xf+b;
    var c=function(n){return n>1?n+' ':''};
    return c(a*mult)+m+' + '+c(b*mult)+acid+' → '+c(mult)+salt+' + '+c(k*mult/2)+'H2↑';
  }
  function predict(metal,acid,p){
    var series=p.activitySeries||[],a=(p.acids||[]).filter(function(x){return x.f===acid})[0];
    var im=series.indexOf(metal),ih=series.indexOf('H');
    if(!a) return {cls:'warn',head:'Brak danych',txt:'Tego kwasu nie ma w paczce szkolnej.'};
    if(a.h2===false) return {cls:'no',head:'Wodór się nie wydziela',txt:fm(acid)+' nie wydziela wodoru w modelu szkolnym.'+(a.note?' '+esc(a.note)+'.':'')};
    if(im<0||ih<0) return {cls:'warn',head:'Brak danych',txt:'Tego metalu nie ma w szeregu aktywności.'};
    if(im<ih){
      var r={cls:'yes',head:'Reakcja zachodzi',txt:esc(metal)+' stoi przed wodorem, więc wypiera H₂ z kwasu '+fm(acid)+'.'};
      if(['K','Na','Ca'].indexOf(metal)>=0) {r.cls='warn';r.head='Reakcja gwałtowna';r.txt=esc(metal)+' reaguje bardzo energicznie, także z wodą — to nie jest typowe doświadczenie szkolne.'}
      else if(acid==='H2SO4'&&metal==='Pb'||(metal==='Pb'&&acid==='HCl')) {r.cls='warn';r.head='Reakcja zahamowana';r.txt='Powstaje trudno rozpuszczalna sól, która pokrywa metal i przerywa reakcję.'}
      r.eq=equation(metal,acid)&&r.cls==='yes'?equation(metal,acid):null;
      if(r.eq&&acid==='H2SO4') r.txt+=' (kwas rozcieńczony)';
      return r;
    }
    return {cls:'no',head:'Reakcja nie zachodzi',txt:esc(metal)+' stoi za wodorem, więc nie wypiera H₂ z '+fm(acid)+'.'};
  }
  function rxInit(p){
    var ms=$('rx-metal'),ac=$('rx-acid'); if(!ms||!ac||!p) return;
    var series=p.activitySeries||[];
    ms.innerHTML=series.filter(function(x){return x!=='H'}).map(function(x){return '<option value="'+esc(x)+'">'+esc(x)+'</option>'}).join('');
    ac.innerHTML=(p.acids||[]).map(function(a){return '<option value="'+esc(a.f)+'">'+fm(a.f)+' — '+esc(a.name)+'</option>'}).join('');
    ms.value='Zn'; ac.value='HCl';
    var pre=[['Zn','HCl'],['Mg','H2SO4'],['Fe','HCl'],['Cu','HCl'],['Fe','HNO3'],['Al','HNO3']];
    $('rx-presets').innerHTML='<span class="dn-mut" style="font-size:12px;align-self:center">Przykłady:</span>'+pre.map(function(x){return '<button type="button" data-m="'+x[0]+'" data-a="'+x[1]+'">'+x[0]+' + '+fm(x[1])+'</button>'}).join('');
    $('rx-presets').onclick=function(e){var b=e.target.closest('button[data-m]');if(!b)return;ms.value=b.dataset.m;ac.value=b.dataset.a;rxRun()};
    ms.onchange=ac.onchange=rxRun; $('rx-go').onclick=rxRun; rxRun();
  }
  function rxRun(){
    var p=pack(),m=$('rx-metal').value,a=$('rx-acid').value; if(!p) return;
    var series=p.activitySeries,ih=series.indexOf('H'),im=series.indexOf(m);
    $('rx-series').innerHTML='<div class="rx-ends"><span>← bardziej aktywne</span><span>mniej aktywne →</span></div>'+series.map(function(x,i){
      var c='rx-chip'+(x==='H'?' h':'')+(x===m?' sel':(i<ih&&x!=='H'?' above':''));return '<span class="'+c+'">'+esc(x)+'</span>'}).join('');
    var r=predict(m,a,p),ac=(p.acids||[]).filter(function(x){return x.f===a})[0]||{};
    var meta=ac.strength?'<div class="rx-safe">Kwas '+fm(a)+': '+esc(ac.strength)+(ac.note?' · '+esc(ac.note):'')+'</div>':'';
    $('rx-out').className='rx-result '+r.cls;
    $('rx-out').innerHTML='<div class="rx-verdict">'+esc(r.head)+'</div><div>'+r.txt+'</div>'+(r.eq?'<div class="rx-eq">'+fm(r.eq)+'</div>':'')+meta+(r.cls==='yes'?'<div class="rx-safe">Doświadczenia wykonuj tylko pod okiem nauczyciela.</div>':'');
  }
  var SW={'czerwony':'#d33a2c','żółty':'#e8c21a','niebieski':'#3b6fd6','bezbarwna':'#ffffff','malinowa':'#b4185a','pomarańczowy':'#f08a1c','zielony':'#3c9a5a','fioletowy':'#7b4bb5'};
  function sw(c){return '<span class="dn-sw" style="background:'+(SW[c]||'#ddd')+'"></span>'+esc(c)}
  function tbl(head,rows){return '<div class="dn-wrap"><table class="dn-tbl"><thead><tr>'+head.map(function(h){return '<th>'+h+'</th>'}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>'}
  function badge(t,c){return '<span class="dn-b '+(c||'')+'">'+esc(t)+'</span>'}
  function charB(c){return badge(c,c==='zasadowy'?'b':c==='kwasowy'?'r':c==='amfoteryczny'?'o':c==='obojętny'?'g':'')}
   
  var CH=function(){return window.CHE||{}},DT=function(){return CH().DATA||{}};
  function curSym(){try{return typeof sym==='string'?sym:'Fe'}catch(e){return 'Fe'}}
  function fx(t){return esc(String(t==null?'':t).replace(/Î±/g,'α').replace(/Î²/g,'β'))}
  function has(f,s){return new RegExp('(^|[^a-z])'+s+'(?![a-z])').test(String(f).replace(/\d/g,''))}
  function bar(v,max,cls){var w=Math.min(50,Math.abs(v)/max*50);return '<span class="bz"><i class="'+(cls||(v<0?'neg':'pos'))+'" style="'+(v<0?'right:50%;':'left:50%;')+'width:'+w+'%"></i></span>'}
  var SUP={'1':'¹','2':'²','3':'³','4':'⁴','+':'⁺','-':'⁻'};
  function pf(p){return fm(p.replace(/\^(\d)([+-])/g,function(_,d,c){return SUP[d]+SUP[c]}).replace(/([a-z])(\d)([+-])/g,function(_,l,d,c){return l+SUP[d]+SUP[c]}).replace(/\+/g,'⁺').replace(/-/g,'⁻'))}
  var SEC={
    redox:function(){var R=DT().REDOX_POTENTIALS||{},k=Object.keys(R).sort(function(a,b){return R[a]-R[b]}),s=curSym();
      return '<p class="sc-lead">Potencjały standardowe E° względem SHE. Im niższy, tym silniejszy reduktor — metal poniżej 2H⁺/H₂ wypiera wodór z kwasów nieutleniających.</p>'+k.map(function(p){var m=p.split('/')[1]===s||p.split('/')[0].replace(/[\d+\-^]/g,'')===s;
        return '<div class="bzr'+(m?' me':'')+(p==='2H+/H2'?' h':'')+'"><span>'+pf(p)+(m?' ◂':'')+'</span>'+bar(R[p],3.2)+'<b>'+R[p].toFixed(2)+' V</b></div>'}).join('')},
    acids:function(){var A=DT().ACID_SYSTEMS||{},S=DT().ACID_STRENGTH||[],ax=function(p){return Math.max(0,Math.min(100,(p+8)/22*100)).toFixed(1)};
      var h='<p class="sc-lead">Skala pKa: im bardziej na lewo, tym mocniejszy kwas. Kropki to kolejne stopnie dysocjacji.</p><div class="pka-ax"><span>−8</span><span>0</span><span>7</span><span>14</span></div>';
      h+=Object.keys(A).map(function(k){var a=A[k];return '<div class="bzr"><span>'+fm(k)+(a.strong?' '+badge('mocny','o'):'')+'</span><span class="trk">'+(a.pKa||[]).map(function(p,i){return '<i class="dot" style="left:'+ax(p)+'%" title="pKa'+(i+1)+' = '+p+'"></i>'}).join('')+'</span><b>'+(a.pKa||[]).join('; ')+'</b></div>'}).join('');
      return h+'<h5 class="sub-h">Stopień dysocjacji α (c = 0,1 mol/dm³)</h5>'+S.map(function(x){return '<div class="bzr"><span>'+esc(x.n)+'</span><span class="trk"><i class="fill" style="width:'+Math.max(1,x.a*100)+'%"></i></span><b>'+(x.a*100).toFixed(x.a<.1?1:0)+'% '+badge(x.c,x.c==='mocny'?'o':'')+'</b></div>'}).join('')},
    ind:function(){var I=DT().INDICATORS||[];return '<p class="sc-lead">Zakres zmiany barwy wskaźników na skali pH.</p><div class="pka-ax"><span>0</span><span>7</span><span>14</span></div>'+I.map(function(x){var a=x.lo/14*100,b=x.hi/14*100;
      return '<div class="bzr"><span>'+esc(x.name)+'</span><span class="trk ph" style="background:linear-gradient(90deg,'+x.cLo+' '+a+'%,'+x.cHi+' '+b+'%)"><em style="left:'+a+'%">'+x.lo+'</em><em style="left:'+b+'%">'+x.hi+'</em></span><b><span class="dn-sw" style="background:'+x.cLo+'"></span>→<span class="dn-sw" style="background:'+x.cHi+';margin-left:5px"></span></b></div>'}).join('')},
    sol:function(){var S=DT().SOLUBILITY||{},E=CH().EDUCATION||{},p=pack()||{};return '<p class="sc-lead">Rozpuszczalność w wodzie (20 °C), skala logarytmiczna.</p>'+Object.keys(S).map(function(k){var g=S[k].water20_gL,c='';try{c=E.solubilityClass?E.solubilityClass(k):''}catch(e){}
      return '<div class="bzr"><span>'+fm(k)+'</span><span class="trk"><i class="fill" style="width:'+Math.max(2,(Math.log10(g)+4.5)/7.5*100)+'%"></i></span><b>'+g+' g/dm³'+(S[k].Ksp?' · Ksp '+S[k].Ksp.toExponential(1):'')+'</b></div>'}).join('')+(p.solubility?'<h5 class="sub-h">Reguły</h5><ul class="dn-list">'+p.solubility.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')},
    th:function(){var T=DT().THERMOCHEM||{},s=curSym();return '<p class="sc-lead">Entalpia tworzenia ΔH°f (kJ/mol) oraz S° i Cp (J/mol·K), 298 K.</p>'+tbl(['Substancja','ΔH°f','','S°','Cp'],Object.keys(T).map(function(k){var t=T[k];return [(has(k,s)?'◂ ':'')+fm(k),t.dHf,bar(t.dHf,1300),t.S,t.Cp]}))},
    sub:function(){var S=DT().SUBSTANCES||{},s=curSym(),st={aq:'roztwór',s:'ciało stałe',g:'gaz',l:'ciecz'};return '<p class="sc-lead">Substancje z silnika. Zaznaczone zawierają '+esc(s)+'.</p><div class="sub-grid">'+Object.keys(S).map(function(k){var x=S[k];return '<div class="sub-c'+(has(x.formula||k,s)?' me':'')+'"><b>'+fm(x.formula||k)+'</b><div>'+esc(x.name)+'</div><div>'+badge(x.role)+' '+badge(st[x.state]||x.state,'b')+'</div><small>'+(x.molarMass?x.molarMass+' g/mol':'')+((x.uses||[]).length?' · '+esc(x.uses.join(', ')):'')+'</small>'+((x.safety||[]).length?'<small class="warn">⚠ '+esc(x.safety.join(', '))+'</small>':'')+'</div>'}).join('')+'</div>'},
    pk:function(){var p=pack();if(!p)return '<p class="dn-mut">Brak paczki.</p>';return '<h5 class="sub-h">Tlenki</h5>'+tbl(['Wzór','Nazwa','Charakter','Uwagi'],(p.oxides||[]).map(function(x){return [fm(x.f),esc(x.name),charB(x.char),esc(x.note||'')]}))+'<h5 class="sub-h">Wodorotlenki</h5>'+tbl(['Wzór','Charakter','Rozpuszczalność','Uwagi'],(p.hydroxides||[]).map(function(x){return [fm(x.f),x.amph?badge('amfoteryczny','o'):x.base?badge('zasada','b'):badge('nierozpuszczalny'),esc(x.sol||''),esc(x.note||'')]}))}
  };
  var SN=[['redox','Redoks'],['acids','Kwasy'],['ind','Wskaźniki'],['sol','Rozpuszczalność'],['th','Termochemia'],['sub','Substancje'],['pk','Tlenki i wodorotlenki']],dsec='redox';
  function daneRender(){var o=$('dane-out');if(!o)return;var p=pack(),D=DT();
    if($('dane-ver'))$('dane-ver').textContent='silnik v'+(CH().ENGINE?CH().ENGINE.version:'—')+(p?' · paczka '+p.version:'');
    o.innerHTML='<div class="dn-chips"><span class="dn-chip">pierwiastki <b>'+(D.ELEMENTS_118||[]).length+'</b></span><span class="dn-chip">substancje <b>'+Object.keys(D.SUBSTANCES||{}).length+'</b></span><span class="dn-chip">reakcje <b>'+Object.keys(D.REACTIONS||{}).length+'</b></span><span class="dn-chip">pary redoks <b>'+Object.keys(D.REDOX_POTENTIALS||{}).length+'</b></span><span class="dn-chip">zestawy danych <b>'+Object.keys(D).length+'</b></span></div><div class="rx-presets" id="dn-nav">'+SN.map(function(x){return '<button type="button" data-s="'+x[0]+'"'+(x[0]===dsec?' class="on"':'')+'>'+x[1]+'</button>'}).join('')+'</div><div id="dn-body">'+(SEC[dsec]?SEC[dsec]():'')+'</div>';
    $('dn-nav').onclick=function(e){var b=e.target.closest('button[data-s]');if(b){dsec=b.dataset.s;daneRender()}}}
   
  var rid=null;
  function sp(f){var S=DT().SUBSTANCES||{},k=String(f).replace(/\(|\)/g,'');var x=S[f]||S[k];return x?x.state:''}
  function chips(L){return L.map(function(r){return '<span class="sp s-'+sp(r.formula)+'">'+(r.coef>1?'<b>'+r.coef+'</b> ':'')+fm(r.formula)+'</span>'}).join('<span class="pl">+</span>')}
   
  var rxF='el',rxQ='';
  function rxList(L,s,R){var RD=DT().REACTION_DATA||{},TN=DT().REACTION_TYPE_NAMES||{},q=rxQ.toLowerCase().trim();
    var hasS=function(x){return x.reactants.concat(x.products).some(function(y){return has(y.formula,s)})},nEl=L.filter(hasS).length;
    var F=L.filter(function(x){if(rxF==='el'&&!hasS(x))return false;if(q&&(R.equation(x.id)+' '+x.id+' '+(TN[x.type]||x.type||'')).toLowerCase().indexOf(q)<0)return false;return true});
    var G={};F.forEach(function(x){var t=String(TN[x.type]||x.type||'inne');t=t.charAt(0).toUpperCase()+t.slice(1);(G[t]=G[t]||[]).push(x)});
    var bar='<div class="rxl-bar"><button type="button" data-f="el"'+(rxF==='el'?' class="on"':'')+'>z: '+esc(s)+' <i>'+nEl+'</i></button><button type="button" data-f="all"'+(rxF==='all'?' class="on"':'')+'>wszystkie <i>'+L.length+'</i></button><input type="search" id="rxl-q" placeholder="Szukaj: wzór, typ reakcji…" value="'+esc(rxQ)+'"><span class="rxl-n">'+F.length+' wyników</span></div>';
    var body=Object.keys(G).sort(function(a,b){return G[b].length-G[a].length||a.localeCompare(b)}).map(function(t){return '<div class="rxl-g"><div class="rxl-t">'+esc(t)+' <i>'+G[t].length+'</i></div><div class="rx-presets">'+G[t].map(function(x){var d=RD[x.id]||{};
      return '<button type="button" data-r="'+x.id+'"'+(x.id===rid?' class="on"':'')+' title="'+esc(R.equation(x.id))+'">'+(rxF==='all'&&hasS(x)?'<b class="rxl-s">'+esc(s)+'</b> ':'')+fm(R.equation(x.id).split('→')[0].trim().replace(/(^| \+ )(\d) /g,'$1$2 '))+(d.lesson?'<small class="rxl-l">'+esc(d.lesson)+'</small>':'')+'</button>'}).join('')+'</div></div>'}).join('');
    return bar+'<div class="rxl-box">'+(body||'<p class="dn-mut">Brak reakcji z '+esc(s)+' w silniku'+(q?' dla „'+esc(rxQ)+'”':'')+'. Wybierz „wszystkie”.</p>')+'</div>'}

  function rxCat(){var o=$('rx-cat');if(!o)return;var R=CH().REACTION;if(!R||!R.list){o.innerHTML='';return}
    var L=R.list(),s=curSym();if(!rid||!L.some(function(r){return r.id===rid}))rid=(L.filter(function(r){return r.reactants.concat(r.products).some(function(x){return has(x.formula,s)})})[0]||L[0]).id;
    var r=R.get(rid),tc=R.thermochem(rid),b=r.balance||{},M=CH().CHEM&&CH().CHEM.molarMass,ms=function(a){try{return a.reduce(function(t,x){return t+x.coef*M(x.formula)},0)}catch(e){return NaN}};
    var atoms=Object.keys(b.reactants||{}),mr=ms(r.reactants),mp=ms(r.products);
    var th=tc&&tc.ok?'<div class="bzr"><span>ΔH</span>'+bar(tc.dH,500)+'<b>'+tc.dH.toFixed(1)+' kJ/mol</b></div><div class="bzr"><span>ΔG (298 K)</span>'+bar(tc.dG,500)+'<b>'+tc.dG.toFixed(1)+' kJ/mol '+badge(tc.spontaneous?'samorzutna':'niesamorzutna',tc.spontaneous?'g':'r')+'</b></div><div class="rx-safe">ΔS = '+tc.dS.toFixed(1)+' J/(mol·K). Model uproszczony: dane dla HCl pochodzą z fazy gazowej.</div>':'<div class="rx-safe">Brak danych termochemicznych w silniku'+(tc&&tc.missing?': '+tc.missing.map(fm).join(', '):'')+'.</div>';
    o.innerHTML='<div class="card sc-card"><h4>Katalog reakcji z silnika <small class="sc-sub">'+L.length+' reakcji w silniku · pogrupowane według typu</small></h4>'+rxList(L,s,R)+
    '<div class="rx-flow">'+chips(r.reactants)+'<span class="ar">→</span>'+chips(r.products)+'</div><div class="rx-meta">'+badge((DT().REACTION_TYPE_NAMES||{})[r.type]||r.type,'b')+badge(b.ok?'zbilansowana':'niezbilansowana',b.ok?'g':'r')+' <span class="dn-mut">'+fx(r.conditions)+'</span></div>'+
    '<div class="rx-result yes"><div class="rx-verdict">Obserwacja</div>'+fx(r.observation)+((r.safety||[]).length?'<div class="rx-safe">⚠ '+fx(r.safety.join('; '))+'</div>':'')+'</div>'+
    '<h5 class="sub-h">Bilans atomów</h5>'+atoms.map(function(a){return '<div class="bzr"><span>'+a+'</span><span class="trk"><i class="fill" style="width:'+b.reactants[a]/Math.max.apply(null,atoms.map(function(z){return b.reactants[z]}))*100+'%"></i></span><b>'+b.reactants[a]+' = '+(b.products[a]||0)+'</b></div>'}).join('')+
    (isFinite(mr)?'<div class="rx-safe">Bilans masy: '+mr.toFixed(2)+' g = '+mp.toFixed(2)+' g (dla podanych współczynników, w molach)</div>':'')+'<h5 class="sub-h">Termodynamika</h5>'+th+'</div>';
    o.onclick=function(e){var f=e.target.closest('button[data-f]');if(f){rxF=f.dataset.f;rxCat();return}var q=e.target.closest('button[data-r]');if(q){var sc=o.querySelector('.rxl-box'),top=sc?sc.scrollTop:0;rid=q.dataset.r;rxCat();var sc2=o.querySelector('.rxl-box');if(sc2)sc2.scrollTop=top}};
    var qi=o.querySelector('#rxl-q');if(qi)qi.oninput=function(){rxQ=qi.value;var p=qi.selectionStart;rxCat();var n=$('rx-cat').querySelector('#rxl-q');if(n){n.focus();try{n.setSelectionRange(p,p)}catch(_){}}}}
   
  var lastReport='';
  function diagRender(){var o=$('diag-out');if(!o)return;var C=CH(),D=C.DATA||{},rows=[],p=pack();
    function add(st,n,d){rows.push({st:st,name:n,det:d})}
    add('ok','Silnik','v'+(C.ENGINE?C.ENGINE.version:'?')+' · dane '+(C.ENGINE?C.ENGINE.dataVersion:'?')+' · zestawów danych: '+Object.keys(D).length+' · wbudowany w plik');
    try{var t=C.selfTest();add(t.ok?'ok':'err','Autotest silnika',t.passed+'/'+t.total+' testów: '+t.checks.map(function(c){return (c.ok?'✓ ':'✗ ')+c.name}).join(' · '))}catch(e){add('err','Autotest',String(e))}
    try{var a=C.REACTION.audit();add(a.unbalanced.length?'err':'ok','Reakcje',a.count+' reakcji, niezbilansowanych: '+a.unbalanced.length+(a.missingData.length?' · brak danych substancji: '+a.missingData.map(function(m){return m.id+' ('+m.missing.map(fx).join(', ')+')'}).join('; '):''))}catch(e){}
    try{var el=D.ATOMIC_PROFILES||{},req=(C.DATA_COVERAGE&&C.DATA_COVERAGE.required)||[],ks=Object.keys(el),tot=ks.length*req.length,miss=0,w=[];
      ks.forEach(function(k){req.forEach(function(r){var v=(el[k].properties||{})[r];if(v==null||v===''||(Array.isArray(v)&&!v.length)){miss++;if(w.length<6&&w.indexOf(r)<0)w.push(r)}})});
      add(miss?'warn':'ok','Kompletność pierwiastków',ks.length+' pierwiastków × '+req.length+' pól: wypełnione '+(100*(tot-miss)/tot).toFixed(1)+'%'+(miss?' · braki np. w: '+w.join(', '):''))}catch(e){}
    try{var di=C.DATA_INTEGRITY.run().value;add(di.ok?'ok':'warn','Spójność z wzorcem',di.ok?'zgodna':'wzorzec porównawczy jest nieaktualny (np. liczba cząsteczek 12 vs 15; id „naclH2SO4” vs „naclH2so4”) — to uwaga do silnika, nie błąd wyświetlania')}catch(e){}
    add(p?'ok':'warn','Paczka szkolna',p?'v'+p.version+' · uzupełnia silnik o tlenki i wodorotlenki':'brak');
    var br=window.__CHE_LAB_BRIDGE__;add(br&&br.active?'ok':'warn','Most CHE ↔ Lab',br&&br.active?br.elements+' pierwiastków, '+br.isotopes+' izotopów, '+br.atomicProps+' właściwości':'nieaktywny');
    var bt=[].slice.call(document.querySelectorAll('#tabnav button[data-tab]')),bad=bt.filter(function(b){var q=document.querySelector('.tabpane[data-tab="'+b.dataset.tab+'"]');return !q||!q.closest('.app')}).map(function(b){return b.dataset.tab});
    add(bad.length?'err':'ok','Zakładki',bt.length+' przycisków'+(bad.length?' · bez panelu: '+bad.join(', '):' · każda ma panel'));
    add(lsOk()?'ok':'warn','Pamięć lokalna',lsOk()?'dostępna':'zablokowana');
    var n={ok:0,warn:0,err:0},ic={ok:'✓',warn:'!',err:'×'};rows.forEach(function(r){n[r.st]++});
    o.innerHTML='<div class="dg-sum"><span class="dn-b g">OK: '+n.ok+'</span><span class="dn-b o">Uwagi: '+n.warn+'</span><span class="dn-b '+(n.err?'r':'')+'">Błędy: '+n.err+'</span></div>'+rows.map(function(r){return '<div class="dg-row dg-'+r.st+'"><span class="dg-ic">'+ic[r.st]+'</span><span class="dg-name">'+esc(r.name)+'</span><span class="dg-det">'+esc(r.det)+'</span></div>'}).join('');
    lastReport=rows.map(function(r){return '['+r.st.toUpperCase()+'] '+r.name+': '+r.det}).join('\n')}
  function lsOk(){try{localStorage.setItem('__t','1');localStorage.removeItem('__t');return true}catch(e){return false}}
   
  var AN=[['O',2,'tlenek'],['Cl',1,'chlorek'],['S',2,'siarczek'],['OH',1,'wodorotlenek'],['SO4',2,'siarczan(VI)'],['NO3',1,'azotan(V)']],RM=['','I','II','III','IV','V','VI','VII'];
  function nm(f){return String(f||'').replace(/[₀-₉]/g,function(c){return c.charCodeAt(0)-8320}).replace(/[⁺⁻\s]/g,'')}
  function subOf(f){var S=DT().SUBSTANCES||{},k=nm(f);if(S[k])return S[k];for(var x in S)if(nm(S[x].formula)===k)return S[x];return null}
  function mm(f){try{var v=CH().CHEM.molarMass(f);return isFinite(v)?v:null}catch(e){return null}}
  function goRx(id){rid=id;rxCat();var t=$('tab-reakcja');if(t)t.click()}
  function rxBtns(f){var R=CH().REACTION;if(!R)return '';var k=nm(f),L=R.list().filter(function(r){return r.reactants.concat(r.products).some(function(x){return nm(x.formula)===k||(k.length<=3&&has(x.formula,k))})});
    return L.length?'<h5 class="sub-h">Reakcje w silniku</h5><div class="rx-presets">'+L.map(function(r){return '<button type="button" data-go="'+r.id+'">'+fm(R.equation(r.id))+'</button>'}).join('')+'</div>':'<div class="rx-safe">Brak reakcji z tą substancją w katalogu silnika.</div>'}
  function computed(s){var P=(DT().ATOMIC_PROFILES||{})[s],ir=P&&P.properties&&P.properties.ionicRadius,out=[];if(!ir)return out;
    Object.keys(ir).filter(function(k){return /\+$/.test(k)}).forEach(function(k){var c=parseInt(k,10);AN.forEach(function(a){var g=gcd(c,a[1]),nc=a[1]/g,na=c/g,an=a[0].length>2||a[0]==='OH'?(na>1?'('+a[0]+')'+na:a[0]):a[0]+(na>1?na:''),f=s+(nc>1?nc:'')+an,eng=subOf(f);
      out.push({f:f,n:a[2]+' '+s+'('+RM[c]+')',eng:eng,m:mm(f)})})});return out}
  function card(k){var S=subOf(k),D=DT(),key=nm(k),h='',miss=[],st={aq:'roztwór',s:'ciało stałe',g:'gaz',l:'ciecz'};
    var M=(S&&S.molarMass)||mm(key),T=D.THERMOCHEM&&D.THERMOCHEM[key],Ph=D.PHYSICAL_PROPS&&D.PHYSICAL_PROPS[key],So=D.SOLUBILITY&&D.SOLUBILITY[key],A=D.ACID_SYSTEMS&&D.ACID_SYSTEMS[key];
    h+='<div class="rx-meta">'+(S?badge(S.role)+badge(st[S.state]||S.state,'b'):badge('brak w SUBSTANCES','o'))+(M?badge('M = '+(+M).toFixed(2)+' g/mol'):'')+'</div>';
    if(S&&(S.uses||[]).length)h+='<div class="rx-safe">Zastosowania: '+esc(S.uses.join(', '))+'</div>';
    if(S&&(S.safety||[]).length)h+='<div class="rx-safe">⚠ '+esc(S.safety.join(', '))+'</div>';
    if(T)h+='<h5 class="sub-h">Termochemia</h5><div class="bzr"><span>ΔH°f</span>'+bar(T.dHf,1300)+'<b>'+T.dHf+' kJ/mol</b></div><div class="rx-safe">S° = '+T.S+' · Cp = '+T.Cp+' J/(mol·K)</div>';else miss.push('termochemia');
    if(Ph)h+='<h5 class="sub-h">Właściwości fizyczne</h5><div class="rx-meta">'+badge('topn. '+Ph.mp+' K')+badge('wrz. '+Ph.bp+' K')+badge(Ph.density+' g/cm³')+badge(Ph.color,'b')+badge('zapach: '+Ph.odor)+'</div>';else miss.push('właściwości fizyczne');
    if(So)h+='<div class="bzr"><span>Rozpuszczalność</span><span class="trk"><i class="fill" style="width:'+Math.max(2,(Math.log10(So.water20_gL)+4.5)/7.5*100)+'%"></i></span><b>'+So.water20_gL+' g/dm³</b></div>';else miss.push('rozpuszczalność');
    if(A)h+='<div class="bzr"><span>pKa</span><span class="trk">'+A.pKa.map(function(p){return '<i class="dot" style="left:'+((p+8)/22*100)+'%"></i>'}).join('')+'</span><b>'+A.pKa.join('; ')+'</b></div>';
    return h+(miss.length?'<div class="rx-safe">Brak w silniku: '+miss.join(', ')+'.</div>':'')+rxBtns(key)}
  function host(id,tab){var h=$(id);if(!h){var p=document.querySelector('.tabpane[data-tab="'+tab+'"]');if(!p)return null;h=document.createElement('div');h.id=id;h.className='card sc-card';h.style.marginTop='14px';h.onclick=function(e){var b=e.target.closest('[data-go]');if(b)goRx(b.dataset.go)};p.appendChild(h)}return h}
  function spMode(){try{return curKind==='sp'}catch(e){return false}}
  function molEng(){var h=host('mol-eng','mol'),f=host('forms-eng','forms');if(!h)return;var s=curSym(),D=DT(),html;
    if(spMode()){var c;try{c=CD[cur]}catch(e){}
      html=c?'<h4>'+fm(nm(c.f))+' · dane z silnika</h4>'+card(c.f):'';if(f){f.innerHTML=html;h.innerHTML=html}return}
    var S=D.SUBSTANCES||{},ks=Object.keys(S).filter(function(k){return has(S[k].formula||k,s)&&nm(S[k].formula)!==s}),cp=computed(s).filter(function(x){return !x.eng}),pr=(CH().PROFILE&&CH().PROFILE.substancesForFormula(s))||[];
    html='<h4>'+esc(s)+' w silniku <small class="sc-sub">'+ks.length+' substancji · '+cp.length+' obliczonych</small></h4>';
    html+=pr.length?'<div class="sub-grid">'+pr.concat(ks.map(function(k){return S[k]})).map(function(x){return '<div class="sub-c me"><b>'+fm(x.formula)+'</b><div>'+esc(x.name)+'</div><small>'+(x.molarMass?x.molarMass+' g/mol':'')+((x.uses||[]).length?' · '+esc(x.uses.join(', ')):'')+'</small></div>'}).join('')+'</div>':'';
    html+=rxBtns(s);
    if(cp.length)html+='<h5 class="sub-h">Uzupełnienie: związki obliczone z ładunków jonów</h5><div class="rx-safe">Brak ich w bazie substancji silnika, więc wzory wyznaczono z ładunków jonów (ionicRadius) i dopasowano do anionów O²⁻, Cl⁻, S²⁻, OH⁻, SO₄²⁻, NO₃⁻. Masy molowe liczy silnik.</div>'+tbl(['Wzór','Nazwa','Masa molowa'],cp.map(function(x){return [fm(x.f),esc(x.n),x.m?x.m.toFixed(2)+' g/mol':'—']}));
    else if(!ks.length)html+='<div class="rx-safe">Brak danych o związkach tego pierwiastka (np. brak jonów w tablicy promieni jonowych).</div>';
    h.innerHTML=html;if(f)f.innerHTML=''}
  function copy(txt,btn){
    var done=function(){var t=btn.textContent;btn.textContent='Skopiowano ✓';setTimeout(function(){btn.textContent=t},1400)};
    if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done,function(){fallback()}); else fallback();
    function fallback(){var t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand('copy');done()}catch(e){}t.remove()}
  }
  function init(){
    var p=pack();
    if(p) rxInit(p);
    daneRender(); diagRender(); rxCat();
    molEng(); ['mols','cinfo'].forEach(function(i){var e=$(i);if(e)new MutationObserver(molEng).observe(e,{childList:true})});
    var ne=$('ec-name'); if(ne) new MutationObserver(function(){rxCat();daneRender();molEng()}).observe(ne,{childList:true,characterData:true,subtree:true});
    var b=$('dane-copy'); if(b) b.onclick=function(){copy(JSON.stringify(pack(),null,2),b)};
    b=$('diag-copy'); if(b) b.onclick=function(){diagRender();copy(lastReport,b)};
    b=$('diag-refresh'); if(b) b.onclick=diagRender;
    var nav=$('tabnav'); if(nav) nav.addEventListener('click',function(e){if(e.target.closest('button[data-tab="diag"]')) setTimeout(diagRender,30)});
    window.addEventListener('resize',function(){var pn=document.querySelector('.tabpane[data-tab="diag"].show'); if(pn) diagRender()});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

