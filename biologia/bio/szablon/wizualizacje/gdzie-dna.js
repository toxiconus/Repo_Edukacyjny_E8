/* viz: gdzie-dna — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"],svg=BIO.Lh["A.svg"],S=BIO.Lh["A.S"],nucleus=BIO.Lh["A.nucleus"],mito=BIO.Lh["A.mito"],T=BIO.Lh["A.T"],g=BIO.Lh["A.g"],fx=BIO.Lh["A.fx"];
function cellTile(title,sub,s){var t=H('div','bv-tile');t.appendChild(H('h6',null,title));t.appendChild(s);if(sub)t.appendChild(H('p',null,sub));return t}
BIO.define('gdzie-dna',{opis:'Gdzie jest DNA: komórka zwierzęca, roślinna, bakteria, krew (erytrocyt bez DNA, leukocyt z DNA) — kliknij element',
mount:function(el){var grid=H('div','bv-grid c2');
  var zw=svg(200,140,'Komórka zwierzęca',[S('ellipse',{cx:100,cy:70,rx:92,ry:60,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}),
    S('path',{d:'M40 40q12-8 24 0t24 0M126 104q10-7 20 0t20 0',fill:'none',stroke:'var(--viz-line)','stroke-width':2}),
    nucleus(106,64,30,2),mito(44,88,20,10),mito(158,104,18,9,-20)]);
  var ro=svg(200,140,'Komórka roślinna',[S('rect',{x:6,y:6,width:188,height:128,rx:10,fill:'none',stroke:'var(--wall)','stroke-width':5}),
    S('rect',{x:13,y:13,width:174,height:114,rx:7,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':2}),
    S('rect',{x:74,y:22,width:104,height:66,rx:22,fill:'#ffffff',stroke:'var(--viz-line)','stroke-width':1.5}),T(126,55,'wakuola',{s:10,f:'var(--viz-mut)',w:500}),
    nucleus(42,46,23,4),
    S('g',{'data-k':'chloro'},[S('ellipse',{cx:96,cy:108,rx:24,ry:11,fill:'var(--chloro-bg)',stroke:'var(--chloro)','stroke-width':2}),S('path',{d:'M80 104h10M80 108h10M80 112h10M96 104h10M96 108h10M96 112h10',stroke:'var(--chloro)','stroke-width':2}),S('circle',{cx:112,cy:108,r:3.5,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})]),
    mito(156,108,17,8)]);
  var ba=svg(200,140,'Bakteria',[S('path',{d:'M186 70q8 -14 12 -30',fill:'none',stroke:'var(--cell-mem)','stroke-width':1.6}),S('rect',{x:14,y:30,width:172,height:80,rx:40,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}),
    S('g',{'data-k':'nukleoid'},[S('ellipse',{cx:92,cy:70,rx:46,ry:26,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':1,'stroke-dasharray':'3 3'}),g.squiggle(92,70,28,5),g.squiggle(94,69,22,8)]),
    S('g',{'data-k':'plazmid'},[S('circle',{cx:154,cy:56,r:9,fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2}),S('circle',{cx:160,cy:88,r:6,fill:'none',stroke:'var(--dna-ink)','stroke-width':2})]),
    S('g',{'data-k':'rybosom'},[S('circle',{cx:40,cy:62,r:2.5,fill:'var(--viz-mut)'}),S('circle',{cx:48,cy:84,r:2.5,fill:'var(--viz-mut)'}),S('circle',{cx:140,cy:98,r:2.5,fill:'var(--viz-mut)'})])]);
  var kr=svg(200,140,'Krew: erytrocyt i leukocyt',[
    S('g',{'data-k':'erytro'},[S('circle',{cx:58,cy:52,r:40,fill:'#f2b0ae',stroke:'#c0504d','stroke-width':2.5}),S('circle',{cx:58,cy:52,r:19,fill:'#f8d2d0'}),
      S('path',{d:'M22 112q0-10 12-10q12 0 24 6q12-6 24-6q12 0 12 10t-12 10q-12 0-24-6q-12 6-24 6q-12 0-12-10z',fill:'#f2b0ae',stroke:'#c0504d','stroke-width':2}),T(58,134,'bez DNA',{s:12,w:800,f:'#b83a45'})]),
    S('g',{'data-k':'leuko'},[S('circle',{cx:150,cy:62,r:38,fill:'#f1ecf7',stroke:'var(--nucleus)','stroke-width':2.5}),
      S('path',{d:'M128 58q-6-18 10-20q8-14 22-4q16-2 16 14q10 12-4 22q-6 14-22 6q-18 6-22-18z',fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2}),g.squiggle(150,60,16,6),T(150,116,'ma DNA',{s:12,w:800,f:'var(--dna-ink)'})])]);
  grid.appendChild(cellTile('Komórka zwierzęca','jądro + mitochondria',zw));grid.appendChild(cellTile('Komórka roślinna','jądro + mitochondria + chloroplasty',ro));
  grid.appendChild(cellTile('Bakteria','bez jądra: nukleoid + plazmidy',ba));grid.appendChild(cellTile('Krew człowieka','erytrocyt bez DNA, leukocyt z DNA',kr));
  el.appendChild(grid);var box=fx.infoBox();el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span><i style="background:var(--nucleus-bg);border:2px solid var(--nucleus)"></i>jądro</span><span><i style="background:var(--mito-bg);border:2px solid var(--mito)"></i>mitochondrium</span><span><i style="background:var(--chloro-bg);border:2px solid var(--chloro)"></i>chloroplast</span><span><i style="border:2px solid var(--dna-ink)"></i>DNA</span>'));
  fx.info(grid,box,{
   jadro:['Jądro komórkowe','U eukariontów (zwierzęta, rośliny, grzyby) tu jest większość DNA — w postaci chromosomów. Ciemniejsza plamka to jąderko.'],
   mito:['Mitochondrium — mtDNA','Mitochondria mają własne, małe, koliste DNA (mtDNA). U człowieka dziedziczy się ono prawie zawsze po matce.'],
   chloro:['Chloroplast — cpDNA','Chloroplasty roślin i glonów też mają własne koliste DNA (cpDNA).'],
   nukleoid:['Nukleoid','Bakterie nie mają jądra. Ich główne, koliste DNA leży w cytoplazmie, w obszarze zwanym nukleoidem (bez błony).'],
   plazmid:['Plazmidy','Małe koliste cząsteczki DNA u wielu bakterii, dodatkowe wobec DNA nukleoidu (np. geny oporności na antybiotyki).'],
   rybosom:['Rybosomy','Na nich powstają białka według informacji z DNA (przez RNA). Same nie zawierają DNA.'],
   erytro:['Dojrzały erytrocyt człowieka','Krążek wklęsły z obu stron (widok z góry i z boku). Nie ma jądra ani mitochondriów, więc nie zawiera DNA.'],
   leuko:['Leukocyt (biała krwinka)','Ma jądro (często płatowate) z pełnym DNA. To z leukocytów pochodzi DNA w badaniach krwi.']},'jadro')}});
})();
