V.define('j03-osady-v01',{title:'Dwie probówki, dwie sole — czy wytrąci się osad?',tag:'E8',
 hint:'Wybierz sól z probówki A i sól z probówki B (obie rozpuszczalne). Model łączy jony „na krzyż”, sprawdza tabelę rozpuszczalności i pokazuje, czy powstaje osad, jaką ma barwę i jak wygląda równanie.',
 foot:'CHE.DATA.SOLUBILITY_TABLE (R/T/N) · CHE.IONIC.compound · barwy osadów: CHE.COLORS (kind precipitate)',
 build:function(host){host.innerHTML='';var T=C.DATA.SOLUBILITY_TABLE,I=C.IONIC;
  var sols=[];T.cations.forEach(function(c){T.anions.forEach(function(a){var k=I.compound(c.id,a.id);if(k&&k.sol==='R')sols.push({c:c,a:a,k:k});});});
  var st={A:0,B:Math.min(1,sols.length-1)};
  var bar=el('div','r','<b>Probówka A:</b> ');host.appendChild(bar);
  var selA=el('select');var selB=el('select');
  sols.forEach(function(s,i){selA.appendChild(new Option(s.k.pretty+' — '+s.k.name,i));selB.appendChild(new Option(s.k.pretty+' — '+s.k.name,i));});
  selA.value=st.A;selB.value=st.B;bar.appendChild(selA);bar.appendChild(el('b',null,' Probówka B: '));bar.appendChild(selB);
  var view=el('div');host.appendChild(view);
  function barwa(formula){var rows=(C.COLORS.list('precipitate')||[]);var norm=function(s){return s.replace(/[₀-₉]/g,function(ch){return '0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(ch)];});};
   var r=rows.find(function(x){return norm(x.name)===norm(formula)});return r||null;}
  function draw(){var A=sols[+selA.value],B=sols[+selB.value];if(!A||!B)return;
   var P1=I.compound(A.c.id,B.a.id),P2=I.compound(B.c.id,A.a.id);
   var osad=[P1,P2].filter(function(p){return p&&(p.sol==='N'||p.sol==='T')});
   var eq=A.k.pretty+' + '+B.k.pretty+' → '+[P1,P2].map(function(p){return p?p.pretty+((p.sol==='N'||p.sol==='T')?'↓':''):'?';}).join(' + ');
   var wynik;
   if(osad.length===0)wynik='<b>Brak osadu.</b> Oba możliwe produkty są rozpuszczalne, więc wszystkie jony pozostają w roztworze (obserwatorowie). Reakcja w sensie strącania nie zachodzi.';
   else{wynik='<b>Powstaje osad:</b> '+osad.map(function(p){var c=barwa(p.formula);return p.pretty+(c?' — '+c.state+' ('+p.name+')':'')+(p.sol==='T'?' — trudno rozpuszczalny':'')}).join('; ')+'.';}
   var colTube=function(s){return '<span style="display:inline-block;width:46px;height:120px;border:2px solid #94a3b8;border-radius:0 0 23px 23px;background:linear-gradient(#e0f2fe 0,#e0f2fe 100%);vertical-align:bottom"></span>'};
   var mix=osad.length?(barwa(osad[0].formula)||{hex:'#f8fafc'}).hex:'#e0f2fe';
   view.innerHTML='<div style="display:flex;gap:18px;align-items:flex-end;margin:10px 0"><div>'+colTube()+'<div class="note">A: '+A.k.pretty+'</div></div><div>'+colTube()+'<div class="note">B: '+B.k.pretty+'</div></div><div><span style="display:inline-block;width:70px;height:120px;border:2px solid #94a3b8;border-radius:0 0 35px 35px;background:'+mix+'"></span><div class="note">po zmieszaniu</div></div></div>'
    +'<div class="note"><b>Równanie cząsteczkowe:</b> '+eq+'</div><div class="note">'+wynik+'</div>';}
  selA.addEventListener('change',draw);selB.addEventListener('change',draw);draw();}});
