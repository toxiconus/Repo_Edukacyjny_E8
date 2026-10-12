/* viz: endosymbioza — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],S=BIO.Lh["C.S"],svg=BIO.Lh["C.svg"],T=BIO.Lh["C.T"];
BIO.define('endosymbioza',{opis:'Teoria endosymbiozy w 4 krokach (wstecz/dalej): komórka-gospodarz pochłania bakterię tlenową (i sinicę) → bakteria żyje w pęcherzyku (dwie błony) → staje się mitochondrium (chloroplastem) z własnym kolistym DNA i rybosomami jak u bakterii; karty argumentów (cecha → obserwacja → wniosek)',
mount:function(el,o){
  var k=0,tools=H('div','bv-tools'),pic=H('div'),arg=H('div','bv-grid c2'),out=H('div','bv-info');[tools,pic,out,arg].forEach(function(x){el.appendChild(x)});arg.style.marginTop='10px';
  var prev=btn('◀ wstecz',function(){if(k>0){k--;rys()}}),next=btn('dalej ▶',function(){if(k<3){k++;rys()}}),lab=H('span','bv-score','');[prev,next,lab].forEach(function(x){tools.appendChild(x)});
  var KR=[['1. Dawna komórka-gospodarz','Duża komórka z jądrem (lub jej przodek) żyje obok drobnych bakterii: tlenowych (umieją wydajnie oddychać tlenem) i sinic (prowadzą fotosyntezę).'],
   ['2. Pochłonięcie','Gospodarz pochłania bakterię jak pokarm — błona komórkowa gospodarza otacza ją i tworzy pęcherzyk. Bakteria <strong>nie zostaje strawiona</strong>.'],
   ['3. Wspólne życie','Bakteria żyje w środku: daje gospodarzowi dużo energii (ATP), dostaje schronienie i pokarm. Ma teraz <strong>dwie błony</strong>: własną (wewnętrzną) i z pęcherzyka gospodarza (zewnętrzną).'],
   ['4. Organellum','Przez pokolenia bakteria traci samodzielność (część jej genów przechodzi do jądra) i staje się <strong>mitochondrium</strong>. W ten sam sposób z sinicy powstał <strong>chloroplast</strong> u przodków roślin.']];
  function bakt(s,x,y,c,dna,blona2,rybo){var g=S('g',{});if(blona2)g.appendChild(S('ellipse',{cx:x,cy:y,rx:31,ry:19,fill:'none',stroke:'#7aa66a','stroke-width':2,'stroke-dasharray':'5 3'}));
    g.appendChild(S('ellipse',{cx:x,cy:y,rx:25,ry:14,fill:c[0],stroke:c[1],'stroke-width':2}));if(dna)g.appendChild(S('circle',{cx:x-6,cy:y,r:6,fill:'none',stroke:'#c0392b','stroke-width':1.6}));
    if(rybo)[[8,-4],[12,4],[4,6]].forEach(function(q){g.appendChild(S('circle',{cx:x+q[0],cy:y+q[1],r:1.8,fill:'#1a2332'}))});s.appendChild(g);return g}
  var MI=['#f7d9b8','#c0602c'],SI=['#cfe8c0','#3f7a28'];
  function rys(){lab.textContent='krok '+(k+1)+' / 4';var s=svg(440,210,KR[k][0]);pic.innerHTML='';pic.appendChild(s);
    s.appendChild(S('ellipse',{cx:200,cy:108,rx:150,ry:90,fill:'#f4f8f1',stroke:'#7aa66a','stroke-width':2.5}));s.appendChild(S('ellipse',{cx:150,cy:100,rx:38,ry:30,fill:'#ece4f6',stroke:'#9a7fc0','stroke-width':1.6}));s.appendChild(T(150,100,'jądro',{s:11}));
    s.appendChild(T(200,12,'komórka-gospodarz',{s:12,w:800}));
    if(k===0){bakt(s,400,70,MI,1,0,1);s.appendChild(T(400,100,'bakteria tlenowa',{s:10.5}));bakt(s,400,160,SI,1,0,1);s.appendChild(T(400,190,'sinica',{s:10.5}))}
    if(k===1){s.appendChild(S('path',{d:'M350 108 q-10 -40 -50 -42 q-20 2 -26 30',fill:'none',stroke:'#7aa66a','stroke-width':2.5}));s.appendChild(S('path',{d:'M350 108 q-10 40 -50 42 q-20 -2 -26 -30',fill:'none',stroke:'#7aa66a','stroke-width':2.5}));bakt(s,310,108,MI,1,0,1);s.appendChild(T(395,108,'„połknięcie”',{s:11,w:700}))}
    if(k>=2){var m=bakt(s,270,72,MI,1,1,1);m.setAttribute('data-k','mito');var c=bakt(s,270,150,k===3?SI:SI,1,1,1);c.setAttribute('data-k','chloro');
      s.appendChild(T(270,104,k===3?'mitochondrium':'bakteria w pęcherzyku',{s:10.5,w:700}));s.appendChild(T(270,182,k===3?'chloroplast (u roślin)':'sinica w pęcherzyku',{s:10.5,w:700}));
      s.appendChild(T(330,60,'2 błony',{s:10,a:'start',f:'#3d6b2c',w:700}));s.appendChild(T(240,60,'DNA',{s:10,a:'end',f:'#c0392b',w:700}))}
    if(k===3){s.appendChild(S('path',{d:'M248 82 q-40 10 -66 16',fill:'none',stroke:'#9a7fc0','stroke-width':1.5,'stroke-dasharray':'3 3'}));s.appendChild(T(208,120,'część genów → jądro',{s:10,f:'#6b4fa0'}))}
    out.className='bv-info';out.innerHTML='<b>'+KR[k][0]+'</b>'+KR[k][1];prev.disabled=k===0;next.disabled=k===3;
    BIO.fx.info(pic,out,{mito:['Mitochondrium',' Ma dwie błony, własne koliste DNA (mtDNA) i rybosomy podobne do bakteryjnych; powstaje tylko z innego mitochondrium przez podział.'],chloro:['Chloroplast',' Też dwie błony, koliste DNA (cpDNA), rybosomy jak u bakterii; jego przodkiem była sinica.']})}
  [['Dwie błony','Zewnętrzna przypomina błonę gospodarza, wewnętrzna — błonę bakterii.','ślad pochłonięcia w pęcherzyku'],
   ['Własne DNA','Koliste, bez histonów — jak u bakterii, nie jak w jądrze.','dawny samodzielny organizm'],
   ['Własne rybosomy','Mniejsze, podobne do bakteryjnych (70S); niektóre antybiotyki działają na nie jak na bakterie.','pokrewieństwo z bakteriami'],
   ['Podział jak bakteria','Nowe mitochondria i chloroplasty powstają tylko z istniejących, przez podział; komórka nie umie ich zrobić od zera.','zachowana samodzielność rozmnażania'],
   ['Rozmiar','Wielkość zbliżona do bakterii (ok. 1–10 µm).','pasuje do pochodzenia od bakterii']].forEach(function(a){
    arg.appendChild(H('div','bv-tile','<h6>'+a[0]+'</h6><p><strong>Obserwacja:</strong> '+a[1]+'</p><p><strong>Wniosek:</strong> '+a[2]+'.</p>'))});
  var u=H('p','bv-score','Argumenty wspierają teorię (dziś powszechnie przyjętą), ale to wnioskowanie z wielu obserwacji, a nie „bezpośrednie nagranie” sprzed ok. 1,5–2 mld lat (orientacyjnie).');u.style.fontWeight='600';el.appendChild(u);
  BIO.fx.auto(el,function(){k=(k+1)%4;rys()},3000);rys()}});
})();
