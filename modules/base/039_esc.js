<script>
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
  /* ---------- REAKCJA ---------- */
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
  /* ---------- SILNIK → WIZUALIZACJE ---------- */
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
  /* ---------- KATALOG REAKCJI ---------- */
  var rid=null;
  function sp(f){var S=DT().SUBSTANCES||{},k=String(f).replace(/\(|\)/g,'');var x=S[f]||S[k];return x?x.state:''}
  function chips(L){return L.map(function(r){return '<span class="sp s-'+sp(r.formula)+'">'+(r.coef>1?'<b>'+r.coef+'</b> ':'')+fm(r.formula)+'</span>'}).join('<span class="pl">+</span>')}
