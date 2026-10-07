<script>
(function(){
  var toggle=document.getElementById('tocToggle');
  var wrapper=document.getElementById('tocWrapper');
  var overlay=document.getElementById('tocOverlay');
  function open(){wrapper.classList.add('is-open');overlay.classList.add('is-visible');toggle.classList.add('is-open');toggle.setAttribute('aria-expanded','true');wrapper.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  function close(){wrapper.classList.remove('is-open');overlay.classList.remove('is-visible');toggle.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');wrapper.setAttribute('aria-hidden','true');document.body.style.overflow='';}
  toggle.addEventListener('click',function(){if(wrapper.classList.contains('is-open'))close();else open();});
  overlay.addEventListener('click',close);
  document.querySelectorAll('.toc-link').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&wrapper.classList.contains('is-open'))close();});
})();

(function(){
  var header=document.getElementById('headerWrapper');
  var toggle=document.getElementById('headerToggle');
  var lastY=0;
  var ticking=false;
  var auto=true;
  function update(){
    var y=window.scrollY;
    var d=y-lastY;
    if(auto&&d>8&&y>140){header.classList.add('is-hidden');toggle.classList.add('is-hidden');}
    lastY=y;ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
  toggle.addEventListener('click',function(){
    var willHide=!header.classList.contains('is-hidden');
    if(willHide){header.classList.add('is-hidden');toggle.classList.add('is-hidden');auto=false;setTimeout(function(){auto=true;},300);}
    else{header.classList.remove('is-hidden');toggle.classList.remove('is-hidden');auto=false;setTimeout(function(){auto=true;},500);}
  });
})();

(function(){
  var nav=document.getElementById('bottomNav');
  var toggle=document.getElementById('bottomNavToggle');
  toggle.addEventListener('click',function(){
    var o=nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded',String(o));
  });
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');});});
})();

(function(){
  var btn=document.getElementById('resumeTab');
  var dropdown=document.getElementById('resumeDropdown');
  var save=document.getElementById('resumeSave');
  var go=document.getElementById('resumeGo');
  var txt=document.getElementById('resumeText');
  var KEY='chemia.n03.resume.v12';
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||'null');}catch(e){return null;}}
  function render(){var p=load();if(p){txt.textContent='Ostatnio: '+p.title+'.';go.disabled=false;}else{txt.textContent='Nie zapisano.';go.disabled=true;}}
  btn.addEventListener('click',function(){var o=dropdown.classList.toggle('is-open');btn.classList.toggle('is-active',o);btn.setAttribute('aria-expanded',String(o));render();});
  save.addEventListener('click',function(){
    var sec=document.querySelectorAll('.part-heading');
    var best=null,bestTop=Infinity;
    sec.forEach(function(el){var r=el.getBoundingClientRect();if(r.top<=150&&r.bottom>0&&Math.abs(r.top)<bestTop){best=el;bestTop=Math.abs(r.top);}});
    if(!best)best=document.querySelector('.minimum-card');
    var t=(best.textContent||'').replace(/\s+/g,' ').trim().slice(0,80);
    var id=best.closest('section')?.id||'';
    localStorage.setItem(KEY,JSON.stringify({id:id,title:t,y:window.scrollY}));
    render();
  });
  go.addEventListener('click',function(){
    var p=load();if(!p)return;
    dropdown.classList.remove('is-open');btn.classList.remove('is-active');
    if(p.id){var el=document.getElementById(p.id);if(el){el.scrollIntoView({behavior:'smooth',block:'start'});return;}}
    if(typeof p.y==='number')window.scrollTo({top:p.y,behavior:'smooth'});
  });
  document.addEventListener('click',function(e){
    if(!dropdown.classList.contains('is-open'))return;
    if(dropdown.contains(e.target)||btn.contains(e.target))return;
    dropdown.classList.remove('is-open');btn.classList.remove('is-active');
  });
})();

(function(){
  var sel=document.getElementById('acidSelect');
  var out=document.getElementById('resztaResult');
  if(!sel||!out)return;
  function render(){
    var v=sel.value.split('|');
    out.innerHTML='<b>'+v[0]+'</b> → <b>'+v[1]+'</b> → przykładowa sól: <b>'+v[2]+'</b>';
  }
  sel.addEventListener('change',render);
  render();
})();


(function(){
  var r=document.getElementById('phRange');
  var v=document.getElementById('phValue');
  var t=document.getElementById('phType');
  var ind=document.getElementById('phIndicator');
  if(!r)return;
  function render(){
    var p=parseFloat(r.value);
    v.textContent=p.toFixed(1);
    t.textContent=p<7?'kwasowy':p>7?'zasadowy':'obojętny';
    var s;
    if(p<3.1)s='oranż: czerwony';
    else if(p<4.4)s='oranż: pomarańczowy';
    else if(p<7)s='oranż: żółty';
    else if(p<8.2)s='fenoloftaleina: bezbarwna';
    else if(p<10)s='fenoloftaleina: różowa';
    else s='fenoloftaleina: malinowa';
    ind.textContent=s;
  }
  r.addEventListener('input',render);
  document.querySelectorAll('[data-ph]').forEach(function(b){
    b.addEventListener('click',function(){r.value=b.dataset.ph;render();});
  });
  render();
})();

(function(){
  var sel=document.getElementById('samplePh');
  var out=document.getElementById('indResult');
  if(!sel||!out)return;
  function render(){
    var p=parseFloat(sel.value);
    var b=p<3.1?'czerwony':p<4.4?'pomarańczowy':p<7?'żółty':p<8.2?'zielony':p<10?'różowy':'malinowy';
    out.innerHTML='<b>Obserwacja:</b> barwa '+b+'.<br><b>Wniosek:</b> pH ≈ '+p+', odczyn '+(p<7?'kwasowy':p>7?'zasadowy':'obojętny')+'.';
  }
  sel.addEventListener('change',render);
  render();
})();

(function(){
  var data={
    'metal':'<b>Kwas + metal aktywny → sól + wodór</b><br>Zn + 2 HCl → ZnCl₂ + H₂↑<br><small>Metal musi być aktywniejszy od wodoru (przed H w szeregu).</small>',
    'oxide':'<b>Kwas + tlenek metalu → sól + woda</b><br>CuO + 2 HCl → CuCl₂ + H₂O<br><small>Tlenek nie musi reagować z wodą — z kwasem reaguje.</small>',
    'base':'<b>Kwas + wodorotlenek → sól + woda</b><br>NaOH + HCl → NaCl + H₂O<br><small>Zobojętnianie. Jonowo: H⁺ + OH⁻ → H₂O.</small>',
    'carbonate':'<b>Kwas + węglan → sól + woda + CO₂↑</b><br>CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑<br><small>Gaz napędza reakcję.</small>',
    'silverNitrate':'<b>Kwas + sól (strącenie)</b><br>AgNO₃ + HCl → AgCl↓ + HNO₃<br><small>Biały osad AgCl.</small>',
    'copperNitric':'<b>HNO₃ jest kwasem utleniającym — nie stosuj schematu „metal + kwas → H₂”.</b><br>Cu + 4 HNO₃ (stęż.) → Cu(NO₃)₂ + 2 NO₂↑ + 2 H₂O<br><small>Tylko pokaz nauczycielski.</small>'
  };
  document.querySelectorAll('#acidReactor [data-r]').forEach(function(b){
    b.addEventListener('click',function(){
      document.getElementById('reactorResult').innerHTML=data[b.dataset.r];
    });
  });
})();



(function(){
  var cards=[
    ['Co to jest kwas?','Związek oddający H⁺ w wodzie'],
    ['HCl — nazwa','kwas chlorowodorowy'],
    ['H₂SO₄ — nazwa','kwas siarkowy(VI)'],
    ['HNO₃ — nazwa','kwas azotowy(V)'],
    ['H₂CO₃ — nazwa','kwas węglowy'],
    ['H₃PO₄ — nazwa','kwas fosforowy(V)'],
    ['HCl — dysocjacja','H⁺ + Cl⁻'],
    ['H₂SO₄ — dysocjacja','2 H⁺ + SO₄²⁻'],
    ['HNO₃ — dysocjacja','H⁺ + NO₃⁻'],
    ['Kwasy mocne','HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄'],
    ['Kwasy słabe','HF, H₂S, H₂CO₃, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH'],
    ['Kwas + metal aktywny →','sól + H₂ (metale przed H w szeregu)'],
    ['Kwas + tlenek metalu →','sól + woda'],
    ['Kwas + wodorotlenek →','sól + woda'],
    ['Kwas + węglan →','sól + woda + CO₂'],
    ['pH < 7','kwasowy'],
    ['pH = 7','obojętny'],
    ['pH > 7','zasadowy'],
    ['Fenoloftaleina w kwasie','bezbarwna'],
    ['Oranż metylowy w kwasie','czerwony'],
    ['Szereg aktywności metali','K > Ca > Na > Mg > Al > Zn > Fe > Sn > Pb > H > Cu > Ag > Au'],
    ['BHP rozcieńczanie','kwas do wody, nie odwrotnie'],
    ['Reszta kwasowa HCl','Cl⁻'],
    ['Reszta kwasowa H₂SO₄','SO₄²⁻'],
    ['Reszta kwasowa H₃PO₄','PO₄³⁻'],
    ['Kwas organiczny (ogólny)','R–COOH (grupa karboksylowa)'],
    ['Moc vs stężenie','moc = α; stężenie = mol/dm³'],
    ['Zobojętnianie — równanie jonowe','H⁺ + OH⁻ → H₂O'],
    ['HNO₃ + Cu — produkt','NIE wydziela H₂ (kwas utleniający)'],
    ['Kwaśne deszcze — pH','< 5,6'],
    ['H₂O₂ — tlen na jakim stopniu?','−I (nadtlenek)'],
    ['Jon hydroniowy','H₃O⁺ (H⁺ + H₂O)']
  ];
  var grid=document.getElementById('flashcards');
  if(!grid)return;
  grid.innerHTML=cards.map(function(c){
    return '<button class="flashcard" type="button"><span class="front">'+c[0]+'</span><span class="back">'+c[1]+'</span></button>';
  }).join('');
  grid.querySelectorAll('.flashcard').forEach(function(b){
    b.addEventListener('click',function(){b.classList.toggle('flipped');});
  });
})();

(function(){
  var qs=[
    ['Który zapis dokładniej opisuje HCl w wodzie?',['HCl → H⁺ + Cl⁻ (skrót)','HCl + H₂O → H₃O⁺ + Cl⁻','HCl → H₂ + Cl₂'],1],
    ['Czy mocny kwas musi być stężony?',['Tak','Nie — moc i stężenie to różne parametry','Tylko w 25°C'],1],
    ['Co powstaje z kwasu i węglanu?',['H₂','CO₂','O₂'],1],
    ['Który metal reaguje z HCl w szkolnym modelu?',['Cu','Zn','Ag'],1],
    ['pH = 3 oznacza odczyn...',['kwasowy','obojętny','zasadowy'],0],
    ['H₂SO₄ ma formalnie ile protonów kwasowych (szkolnie)?',['1','2','4'],1],
    ['Poprawny schemat BHP przy rozcieńczaniu?',['woda do kwasu','kwas do wody','obojętnie'],1],
    ['Co to punkt równoważnikowy?',['wynika ze stechiometrii','zawsze pH 7','zmiana barwy wskaźnika'],0],
    ['Co robi bufor?',['gwałtownie zmienia pH','ogranicza zmianę pH','usuwa wodę'],1],
    ['CuO + HCl daje...',['CuCl₂ + H₂O','Cu + H₂','CO₂'],0],
    ['Reszta HNO₃ to...',['NO₂⁻','NO₃⁻','NH₄⁺'],1],
    ['H⁺ w wodzie jest najlepiej modelowany jako...',['H₂','H₃O⁺','OH⁻'],1],
    ['Które stwierdzenie o pKa jest poprawne?',['pKa 2 = słabszy niż pKa 5','pKa 2 = mocniejszy niż pKa 5','pKa nie ma związku z Ka'],1],
    ['Który kwas jest słaby?',['HCl','CH₃COOH','HBr'],1],
    ['Reakcja HCl + Zn to typ...',['strącenie','redoks','zobojętnianie'],1],
    ['Mleko wapienne to...',['roztwór','zawiesina','osad suchy'],1],
    ['Co tworzy się, gdy Cu reaguje ze stęż. HNO₃?',['H₂','NO₂','O₂'],1],
    ['W jakim zakresie pH zmienia barwę fenoloftaleina?',['3,1–4,4','8,2–10,0','5,0–8,0'],1]
  ];
  var wrap=document.getElementById('quizWrap');
  var score=document.getElementById('quizScore');
  if(!wrap)return;
  var answered=0,correct=0;
  qs.forEach(function(q,i){
    var d=document.createElement('div');
    d.className='quiz-q';
    var html='<h5>'+(i+1)+'. '+q[0]+'</h5><div class="quiz-opts">';
    q[1].forEach(function(o,j){
      html+='<button type="button" class="quiz-opt" data-q="'+i+'" data-a="'+j+'">'+o+'</button>';
    });
    html+='</div><div class="quiz-fb" id="qf'+i+'"></div>';
    d.innerHTML=html;
    wrap.appendChild(d);
  });
  wrap.querySelectorAll('.quiz-opt').forEach(function(b){
    b.addEventListener('click',function(){
      var qi=+b.dataset.q;var ai=+b.dataset.a;
      var q=qs[qi];
      var parent=b.parentElement;
      if(parent.dataset.done)return;
      parent.dataset.done='1';
      answered++;
      parent.querySelectorAll('.quiz-opt').forEach(function(x){
        x.disabled=true;
        if(+x.dataset.a===q[2])x.classList.add('correct');
      });
      var fb=document.getElementById('qf'+qi);
      if(ai===q[2]){
        correct++;b.classList.add('correct');
        fb.className='quiz-fb show ok';
        fb.textContent='✓ Poprawnie.';
      }else{
        b.classList.add('wrong');
        fb.className='quiz-fb show bad';
        fb.textContent='✕ Sprawdź w sekcji powyżej.';
      }
      if(answered===qs.length){
        score.className='quiz-score show';
        score.textContent='Wynik: '+correct+' / '+qs.length+' ('+Math.round(100*correct/qs.length)+'%).';
      }
    });
  });
})();

(function(){
  var btn=document.getElementById('mapExpand');
  var overlay=document.getElementById('mapOverlay');
  var canvas=document.getElementById('mapCanvas');
  var src=document.getElementById('mapSvg');
  if(!btn||!overlay||!canvas||!src)return;
  var scale=1,ox=0,oy=0,drag=false,sx=0,sy=0,sox=0,soy=0,cl=null;
  function apply(){if(cl)cl.style.transform='translate('+ox+'px,'+oy+'px) scale('+scale+')';}
  function fit(){
    if(!cl)return;
    var cw=canvas.clientWidth,ch=canvas.clientHeight;
    var w=cl.viewBox.baseVal.width||900;
    var h=cl.viewBox.baseVal.height||600;
    var s=Math.min(cw/w,ch/h)*0.95;
    scale=s;ox=(cw-w*s)/2;oy=(ch-h*s)/2;apply();
  }
  function open(){
    canvas.innerHTML='';
    cl=src.cloneNode(true);cl.removeAttribute('id');
    cl.setAttribute('width',src.viewBox.baseVal.width);
    cl.setAttribute('height',src.viewBox.baseVal.height);
    cl.style.position='absolute';cl.style.top='0';cl.style.left='0';
    cl.style.transformOrigin='0 0';cl.style.pointerEvents='none';
    canvas.appendChild(cl);
    overlay.classList.add('is-open');
    document.body.style.overflow='hidden';
    requestAnimationFrame(fit);
  }
  function close(){overlay.classList.remove('is-open');document.body.style.overflow='';cl=null;canvas.innerHTML='';}
  btn.addEventListener('click',open);
  document.getElementById('mapClose').addEventListener('click',close);
  document.getElementById('mapZoomIn').addEventListener('click',function(){scale=Math.min(6,scale*1.25);apply();});
  document.getElementById('mapZoomOut').addEventListener('click',function(){scale=Math.max(0.3,scale/1.25);apply();});
  document.getElementById('mapReset').addEventListener('click',fit);
  canvas.addEventListener('mousedown',function(e){drag=true;sx=e.clientX;sy=e.clientY;sox=ox;soy=oy;});
  window.addEventListener('mousemove',function(e){if(!drag)return;ox=sox+(e.clientX-sx);oy=soy+(e.clientY-sy);apply();});
  window.addEventListener('mouseup',function(){drag=false;});
  canvas.addEventListener('touchstart',function(e){
    if(e.touches.length===1){drag=true;sx=e.touches[0].clientX;sy=e.touches[0].clientY;sox=ox;soy=oy;}
  },{passive:true});
  canvas.addEventListener('touchmove',function(e){
    if(!drag||e.touches.length!==1)return;
    ox=sox+(e.touches[0].clientX-sx);
    oy=soy+(e.touches[0].clientY-sy);
    apply();
  },{passive:true});
  canvas.addEventListener('touchend',function(){drag=false;});
  canvas.addEventListener('wheel',function(e){
    e.preventDefault();
    var k=e.deltaY>0?0.9:1.1;
    var r=canvas.getBoundingClientRect();
    var mx=e.clientX-r.left,my=e.clientY-r.top;
    var ns=Math.max(0.3,Math.min(6,scale*k));
    var kk=ns/scale;
    ox=mx-(mx-ox)*kk;oy=my-(my-oy)*kk;scale=ns;apply();
  },{passive:false});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&overlay.classList.contains('is-open'))close();
  });
  window.addEventListener('resize',function(){if(overlay.classList.contains('is-open'))fit();});
})();

(function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=this.getAttribute('href');
      if(id==='#')return;
      var el=document.querySelector(id);
      if(el){
        e.preventDefault();
        var y=el.getBoundingClientRect().top+window.pageYOffset-80;
        window.scrollTo({top:y,behavior:'smooth'});
      }
    });
  });
})();

(function(){
  function setupTableHints(){
    document.querySelectorAll('.table-wrap').forEach(function(wrap){
      var hint=wrap.previousElementSibling;
      if(!hint||!hint.classList.contains('table-scroll-hint')){
        hint=document.createElement('div');
        hint.className='table-scroll-hint';
        hint.innerHTML='<span>Przesuń tabelę w bok, aby zobaczyć całość</span><span class="scroll-arrow">← ↔ →</span>';
        wrap.parentNode.insertBefore(hint,wrap);
      }
      var update=function(){
        var need=wrap.scrollWidth>wrap.clientWidth+4;
        wrap.classList.toggle('is-scrollable',need);
        hint.classList.toggle('is-visible',need);
      };
      update();
      if(window.ResizeObserver)new ResizeObserver(update).observe(wrap);
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupTableHints);
  else setupTableHints();
})();

(function(){
  document.querySelectorAll('.mode-btn').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.mode-btn').forEach(function(x){x.classList.remove('active');});
      b.classList.add('active');
      document.body.dataset.mode=b.dataset.mode;
    });
  });
})();

/* F1. Pojawianie się kart */
(function(){
  if(!('IntersectionObserver' in window))return;
  document.documentElement.classList.add('js-reveal');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.card,.widget').forEach(function(el){io.observe(el);});
  setTimeout(function(){document.querySelectorAll('.card:not(.in),.widget:not(.in)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight)el.classList.add('in');});},400);
})();

/* F2. Jonizacja — sterowanie krokami (zastępuje stary IIFE) */
(function(){
  var svg=document.getElementById('ionSvg'),t=document.getElementById('ionText');if(!svg)return;
  var txt=['Krok 0: HCl i H₂O osobno.','Krok 1: cząsteczki się zbliżają; wodór w HCl ma δ⁺, tlen w H₂O ma δ⁻.','Krok 2: proton H⁺ przeskakuje z Cl na wolną parę elektronową tlenu.','Krok 3: powstają jony: H₃O⁺ (kwasowy odczyn) i Cl⁻.'];
  var i=0;function set(n){i=n;svg.setAttribute('data-s',i);t.textContent=txt[i];}
  document.getElementById('ionPlay').addEventListener('click',function(){set(Math.min(3,i+1));});
  document.getElementById('ionReset').addEventListener('click',function(){set(0);});
})();

/* F3. Pasek pH (działa obok starego skryptu phRange; jego listener już ustawił value) */
(function(){
  var r=document.getElementById('phRange'),m=document.getElementById('phMarker');if(!r||!m)return;
  var stops=[[0,[229,38,46],'czerwony'],[2,[239,90,40],'pomarańczowo-czerwony'],[4,[246,162,30],'pomarańczowy'],[6,[215,217,58],'żółty'],[7,[92,184,92],'zielony'],[8,[33,168,154],'zielononiebieski'],[10,[47,127,193],'niebieski'],[12,[74,75,181],'granatowy'],[14,[107,45,143],'fioletowy']];
  function col(p){for(var k=1;k<stops.length;k++){if(p<=stops[k][0]){var a=stops[k-1],b=stops[k],f=(p-a[0])/(b[0]-a[0]);var c=a[1].map(function(v,j){return Math.round(v+(b[1][j]-v)*f);});return{rgb:'rgb('+c+')',name:f<.5?a[2]:b[2]};}}return{rgb:'rgb(107,45,143)',name:'fioletowy'};}
  function upd(){var p=parseFloat(r.value),c=col(p);m.style.left=(p/14*100)+'%';m.setAttribute('data-v',p.toFixed(1));
    var fl=document.getElementById('phFlask'),nm=document.getElementById('phColorName');if(fl)fl.style.background=c.rgb;if(nm)nm.textContent=c.name;}
  r.addEventListener('input',upd);
  document.querySelectorAll('[data-ph]').forEach(function(b){b.addEventListener('click',upd);});
  upd();
})();

/* F4. Miareczkowanie — fizyczne krzywe, HiDPI, animacja (zastępuje stary IIFE) */
(function(){
  var cv=document.getElementById('titrationCanvas');if(!cv)return;
  var W=760,H=330,dpr=Math.min(window.devicePixelRatio||1,3);
  cv.width=W*dpr;cv.height=H*dpr;var ctx=cv.getContext('2d');ctx.scale(dpr,dpr);
  var sel=document.getElementById('titrationType'),sl=document.getElementById('titrVol'),play=document.getElementById('titrPlay'),
      fl=document.getElementById('titrFlask'),info=document.getElementById('titrationInfo');
  var Kw=1e-14,Ka=1.8e-5,Kn=Kw/1.8e-5,V0=25,C=0.1,VE=25,VMAX=50;
  var L=52,R=W-16,T=18,B=H-38;
  function bis(f){var lo=-14,hi=0;for(var k=0;k<60;k++){var mid=(lo+hi)/2;if(f(Math.pow(10,mid))>0)hi=mid;else lo=mid;}return -(lo+hi)/2;}
  function pH(type,V){var Vt=V0+V,na=C*V0/Vt,nb=C*V/Vt;
    if(type==='strongStrong')return bis(function(h){return h+nb-Kw/h-na;});
    if(type==='weakStrong')return bis(function(h){return nb+h-Kw/h-na*Ka/(Ka+h);});
    return bis(function(h){return na*h/(h+Kn)+h-Kw/h-nb;});}
  function X(v){return L+(R-L)*v/VMAX;}function Y(p){return B-(B-T)*p/14;}
  function ind(type,p){if(type==='strongWeak'){return p<3.1?['#e5262e','oranż metylowy: czerwony']:p<4.4?['#f08a24','oranż metylowy: pomarańczowy']:['#f2d33b','oranż metylowy: żółty'];}
    var a=p<8.2?0:Math.min(1,(p-8.2)/1.8);return[a?'rgba(226,40,130,'+(.15+.75*a)+')':'#eef6f5',p<8.2?'fenoloftaleina: bezbarwna':'fenoloftaleina: '+(a<.6?'różowa':'malinowa')];}
  function draw(V){
    var type=sel.value;ctx.clearRect(0,0,W,H);
    var g=ctx.createLinearGradient(0,T,0,B);g.addColorStop(0,'rgba(74,75,181,.10)');g.addColorStop(.5,'rgba(92,184,92,.07)');g.addColorStop(1,'rgba(229,38,46,.10)');
    ctx.fillStyle=g;ctx.fillRect(L,T,R-L,B-T);
    ctx.font='11px "JetBrains Mono",monospace';ctx.textAlign='right';ctx.textBaseline='middle';
    for(var p=0;p<=14;p+=2){ctx.strokeStyle=p===7?'#94a3b8':'#e5e9ee';ctx.setLineDash(p===7?[4,4]:[]);ctx.beginPath();ctx.moveTo(L,Y(p));ctx.lineTo(R,Y(p));ctx.stroke();ctx.fillStyle='#4a5568';ctx.fillText(p,L-8,Y(p));}
    ctx.setLineDash([]);ctx.textAlign='center';ctx.textBaseline='top';
    for(var v=0;v<=VMAX;v+=10){ctx.fillStyle='#4a5568';ctx.fillText(v,X(v),B+6);}
    ctx.fillText('V titranta [cm³]',(L+R)/2,B+20);ctx.save();ctx.translate(12,(T+B)/2);ctx.rotate(-Math.PI/2);ctx.fillText('pH',0,0);ctx.restore();
    /* pełna krzywa (blada) i narysowana część (gradient) */
    function path(to){ctx.beginPath();for(var v=0;v<=to+1e-9;v+=0.1){var x=X(v),y=Y(pH(type,v));v===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}}
    ctx.lineWidth=3;ctx.lineJoin='round';ctx.strokeStyle='rgba(13,104,104,.18)';path(VMAX);ctx.stroke();
    var lg=ctx.createLinearGradient(L,0,R,0);lg.addColorStop(0,'#0d6868');lg.addColorStop(1,'#2b5e9c');ctx.strokeStyle=lg;ctx.lineWidth=4;path(V);ctx.stroke();
    /* punkt równoważnikowy */
    var pe=pH(type,VE);ctx.setLineDash([6,5]);ctx.strokeStyle='#b06f1c';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(X(VE),T);ctx.lineTo(X(VE),B);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='#b06f1c';ctx.beginPath();ctx.arc(X(VE),Y(pe),5,0,7);ctx.fill();ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='bold 11px Inter,sans-serif';
    ctx.fillText('p. równoważnikowy pH≈'+pe.toFixed(1),X(VE)+9,type==='strongWeak'?Y(pe)-14:Y(pe)+16);
    /* ruchomy punkt z poświatą */
    var cp=pH(type,V),cx=X(V),cy=Y(cp);var rg=ctx.createRadialGradient(cx,cy,2,cx,cy,16);rg.addColorStop(0,'rgba(13,104,104,.45)');rg.addColorStop(1,'rgba(13,104,104,0)');
    ctx.fillStyle=rg;ctx.beginPath();ctx.arc(cx,cy,16,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.strokeStyle='#0d6868';ctx.lineWidth=3;ctx.beginPath();ctx.arc(cx,cy,6,0,7);ctx.fill();ctx.stroke();
    var c=ind(type,cp);fl.style.background=c[0];
    document.getElementById('titrV').textContent=V.toFixed(1).replace('.',',')+' cm³';
    document.getElementById('titrPh').textContent=cp.toFixed(2).replace('.',',');document.getElementById('titrInd').textContent=c[1];
  }
  var msg={strongStrong:'Mocny + mocny: punkt równoważnikowy przy pH 7, skok krzywej bardzo stromy.',weakStrong:'Słaby kwas + mocna zasada: w punkcie równoważnikowym pH &gt; 7 (hydroliza anionu), widać plateau buforowe wcześniej.',strongWeak:'Słaba zasada + mocny kwas: krzywa opada, punkt równoważnikowy pH &lt; 7 (hydroliza kationu NH₄⁺).'};
  var raf=null;
  function upd(){draw(parseFloat(sl.value));info.innerHTML=msg[sel.value];}
  function stop(){if(raf)cancelAnimationFrame(raf);raf=null;play.textContent='▶ Dodawaj titrant';}
  play.addEventListener('click',function(){
    if(raf){stop();return;}
    if(parseFloat(sl.value)>=VMAX-.1)sl.value=0;play.textContent='❚❚ Pauza';
    (function step(){var v=parseFloat(sl.value)+.12;if(v>=VMAX){sl.value=VMAX;upd();stop();return;}sl.value=v;upd();raf=requestAnimationFrame(step);})();
  });
  sl.addEventListener('input',function(){stop();upd();});sel.addEventListener('change',function(){stop();upd();});
  upd();
})();

/* F5. Bufor — kolor wg pH, animacje, stan wyczerpania (zastępuje stary IIFE) */
(function(){
  var ph=4.8,cap=100,fill=document.getElementById('bufferFill');if(!fill)return;
  var tank=document.getElementById('bufferTank'),phEl=document.getElementById('bufferPh'),capEl=document.getElementById('bufferCap'),st=document.getElementById('bufferState');
  function render(){
    phEl.textContent=ph.toFixed(2).replace('.',',');capEl.textContent=Math.round(cap)+'%';fill.style.width=Math.max(cap,3)+'%';
    fill.style.backgroundColor='hsl('+Math.round(cap*1.2)+',55%,42%)';
    st.textContent=cap>60?'stabilny':cap>20?'słabnie':cap>0?'na wyczerpaniu':'wyczerpany';
  }
  function pulse(cls){tank.classList.remove('pulse','dead');void tank.offsetWidth;tank.classList.add(cls);}
  function consume(d){
    if(cap<=0){ph=Math.max(2,Math.min(12,ph+d*10));pulse('dead');render();return;}
    ph=Math.max(2,Math.min(12,ph+d*(cap>20?1:3)));cap=Math.max(0,cap-8);pulse('pulse');render();
  }
  document.getElementById('addH').addEventListener('click',function(){consume(-.08);});
  document.getElementById('addOH').addEventListener('click',function(){consume(.08);});
  document.getElementById('resetBuffer').addEventListener('click',function(){ph=4.8;cap=100;render();});
  render();
})();

/* F6. Reaktor kwasów — animacja zlewki (obok starego skryptu z równaniem) */
(function(){
  var box=document.getElementById('acidReactor');if(!box)return;
  var lq=document.getElementById('rxLiquid'),so=document.getElementById('rxSolid'),pr=document.getElementById('rxPrecip'),bb=document.getElementById('rxBubbles'),fu=document.getElementById('rxFumes'),lb=document.getElementById('rxLabel'),tm=null,tm2=[];
  var R={
    metal:{l0:'rgba(220,235,240,.65)',l1:'rgba(220,235,240,.65)',s:'linear-gradient(#b8c0c8,#7d8791)',shrink:.35,bub:1,txt:'Zn rozpuszcza się, wydziela się <b>H₂↑</b> (bąbelki gazu).'},
    oxide:{l0:'rgba(220,235,240,.65)',l1:'rgba(60,170,160,.65)',s:'linear-gradient(#333,#111)',shrink:0,bub:0,txt:'Czarny <b>CuO</b> znika, roztwór zabarwia się na niebiesko-zielono (<b>Cu²⁺</b>). Brak gazu.'},
    base:{l0:'rgba(226,40,130,.55)',l1:'rgba(230,240,245,.55)',s:null,bub:0,txt:'Z fenoloftaleiną: malinowy → <b>bezbarwny</b>. Zobojętnienie: H⁺ + OH⁻ → H₂O.'},
    carbonate:{l0:'rgba(220,235,240,.65)',l1:'rgba(220,235,240,.65)',s:'linear-gradient(#fafafa,#d8dde3)',shrink:.4,bub:2,txt:'Kreda (CaCO₃) musuje: intensywnie wydziela się <b>CO₂↑</b>.'},
    silverNitrate:{l0:'rgba(220,235,240,.65)',l1:'rgba(220,235,240,.65)',s:null,bub:0,precip:1,txt:'Zmętnienie i biały serowaty osad <b>AgCl↓</b> opada na dno.'},
    copperNitric:{l0:'rgba(220,235,240,.65)',l1:'rgba(60,160,190,.75)',s:'linear-gradient(#d98a4a,#a8571f)',shrink:.2,bub:1,fume:1,txt:'Miedź reaguje z HNO₃: brunatny <b>NO₂↑</b> (toksyczny!), roztwór niebieski. Tylko pokaz nauczycielski.'}
  };
  function clear(){clearInterval(tm);tm2.forEach(clearTimeout);tm2=[];bb.innerHTML='';pr.innerHTML='';fu.innerHTML='';so.style.opacity=0;so.style.height='24px';}
  function spawn(par,cls,n,setup){for(var i=0;i<n;i++){var e=document.createElement('i');e.className=cls;setup(e);par.appendChild(e);(function(x){x.addEventListener('animationend',function(){x.remove();});})(e);}}
  function run(k){var c=R[k];if(!c)return;clear();
    lq.style.transition='none';lq.style.background=c.l0;void lq.offsetWidth;lq.style.transition='';
    if(c.s){so.style.background=c.s;so.style.opacity=1;setTimeout(function(){so.style.height=(24*c.shrink)+'px';if(!c.shrink)so.style.opacity=0;},60);}
    setTimeout(function(){lq.style.background=c.l1;},60);
    var t=0;tm=setInterval(function(){t++;if(t>26){clearInterval(tm);return;}
      if(c.bub)spawn(bb,'rx-b',c.bub,function(e){var s=4+Math.random()*7;e.style.width=e.style.height=s+'px';e.style.left=(20+Math.random()*80)+'px';e.style.setProperty('--dx',(Math.random()*16-8)+'px');});
      if(c.precip)spawn(pr,'rx-p',2,function(e){e.style.left=(14+Math.random()*90)+'px';});
      if(c.fume)spawn(fu,'rx-f',1,function(e){e.style.left=(30+Math.random()*50)+'px';e.style.setProperty('--dx',(Math.random()*30-15)+'px');});
    },150);
    if(c.precip){var cl=document.createElement('div');cl.className='rx-cloud';pr.appendChild(cl);tm2.push(setTimeout(function(){cl.style.height='16px';},1500));}
    lb.innerHTML=c.txt;}
  box.querySelectorAll('[data-r]').forEach(function(b){b.addEventListener('click',function(){run(b.dataset.r);});});
})();
</script>