/* viz: komorka-nakladki — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"],svg=BIO.Lh["A.svg"],S=BIO.Lh["A.S"],T=BIO.Lh["A.T"],nucleus=BIO.Lh["A.nucleus"],g=BIO.Lh["A.g"],mito=BIO.Lh["A.mito"],btn=BIO.Lh["A.btn"];
var KN_WARSTWY=[['jadro','jądro'],['mito','mitochondria'],['chloro','chloroplasty'],['wakuola','duża wakuola'],['sciana','ściana komórkowa'],['plazmid','plazmid']];
var KN_TYPY=[
 {k:'rdzen',n:'tylko rdzeń',w:[],opis:'Błona komórkowa, cytoplazma, rybosomy i materiał genetyczny (DNA) — to ma każda komórka.'},
 {k:'bakteria',n:'bakteria',w:['sciana','plazmid'],sc:'mureina',opis:'Komórka prokariotyczna: DNA leży w cytoplazmie (nukleoid), brak jądra i organelli błoniastych; ściana z mureiny, często plazmidy.'},
 {k:'zwierzeca',n:'zwierzęca',w:['jadro','mito'],opis:'Jądro i mitochondria, brak ściany komórkowej, chloroplastów i dużej wakuoli.'},
 {k:'roslinna',n:'roślinna',w:['jadro','mito','chloro','wakuola','sciana'],sc:'celuloza',opis:'Jądro, mitochondria, chloroplasty, duża wakuola i ściana z celulozy.'},
 {k:'grzyb',n:'grzyb',w:['jadro','mito','wakuola','sciana'],sc:'chityna',opis:'Jądro, mitochondria, wakuola i ściana z chityny; brak chloroplastów — grzyb jest cudzożywny.'}];
BIO.define('komorka-nakladki',{opis:'Komórka z warstwami: wspólny rdzeń (błona, cytoplazma, rybosomy, DNA) + nakładki — jądro, mitochondria, chloroplasty, wakuola, ściana, plazmid; przyciski typów (bakteria, zwierzęca, roślinna, grzyb) i pojedynczych warstw; opcja start="rdzen|bakteria|zwierzeca|roslinna|grzyb"',
mount:function(el,o){var on={},typ=null,typy=H('div','bv-tools'),warstwy=H('div','bv-tools'),hold=H('div'),box=H('div','bv-info');
  [typy,warstwy,hold,box].forEach(function(e){el.appendChild(e)});
  function ustaw(t){on={};t.w.forEach(function(w){on[w]=1})}
  function rozpoznaj(){var k=KN_WARSTWY.map(function(w){return on[w[0]]?1:0}).join('');
    return KN_TYPY.filter(function(t){return KN_WARSTWY.map(function(w){return t.w.indexOf(w[0])>=0?1:0}).join('')===k})[0]||null}
  function rys(){var t=rozpoznaj(),sc=t&&t.sc?t.sc:null,R=[];
    var s=svg(460,240,'Komórka: '+(t?t.n:'zestaw własny'),R);
    if(on.sciana){s.appendChild(S('rect',{x:8,y:8,width:444,height:224,rx:on.jadro?14:70,fill:'var(--wall)','fill-opacity':0.15,stroke:'var(--wall)','stroke-width':7}));
      s.appendChild(T(230,22,'ściana komórkowa'+(sc?' ('+sc+')':''),{s:10.5,f:'var(--viz-mut)'}))}
    s.appendChild(S('rect',{x:20,y:30,width:420,height:190,rx:on.jadro?10:64,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}));
    s.appendChild(T(110,212,'błona komórkowa',{s:10,f:'var(--cell-mem)'}));
    if(on.wakuola){s.appendChild(S('rect',{x:196,y:48,width:on.chloro?150:120,height:92,rx:30,fill:'#ffffff',stroke:'var(--viz-line)','stroke-width':1.6}));s.appendChild(T(on.chloro?271:256,94,'wakuola',{s:11,f:'var(--viz-mut)',w:500}))}
    for(var i=0;i<26;i++){var x=40+((i*67)%380),y=46+((i*41)%160);if(on.wakuola&&x>190&&x<352&&y>44&&y<144)continue;s.appendChild(S('circle',{cx:x,cy:y,r:2.2,fill:'var(--viz-mut)',opacity:0.7}))}
    s.appendChild(T(230,212,'rybosomy (kropki)',{s:9.5,f:'var(--viz-mut)',w:500}));
    if(on.jadro){s.appendChild(nucleus(110,104,38,3));s.appendChild(T(110,156,'jądro (DNA)',{s:10.5}))}
    else{s.appendChild(S('g',{},[S('ellipse',{cx:150,cy:118,rx:62,ry:34,fill:'none',stroke:'var(--nucleus)','stroke-width':1.2,'stroke-dasharray':'4 3'}),g.squiggle(150,118,40,5),g.squiggle(152,116,30,9)]));
      s.appendChild(T(150,164,'DNA w cytoplazmie (nukleoid)',{s:10.5}))}
    if(on.mito){s.appendChild(mito(330,188,22,10,-12));s.appendChild(mito(62,186,17,8,20));s.appendChild(T(330,210,'mitochondrium',{s:10}))}
    if(on.chloro){[[392,80,-20],[388,136,15],[178,190,0]].forEach(function(c){s.appendChild(S('g',{transform:'rotate('+c[2]+' '+c[0]+' '+c[1]+')'},[S('ellipse',{cx:c[0],cy:c[1],rx:24,ry:11,fill:'var(--chloro-bg)',stroke:'var(--chloro)','stroke-width':2}),S('path',{d:'M'+(c[0]-14)+' '+(c[1]-4)+'h10M'+(c[0]-14)+' '+c[1]+'h10M'+(c[0]-14)+' '+(c[1]+4)+'h10M'+(c[0]+2)+' '+(c[1]-4)+'h10M'+(c[0]+2)+' '+c[1]+'h10M'+(c[0]+2)+' '+(c[1]+4)+'h10',stroke:'var(--chloro)','stroke-width':2})]))});
      s.appendChild(T(392,60,'chloroplasty',{s:10,f:'var(--chloro)'}))}
    if(on.plazmid){var px=on.wakuola?236:280,py=on.wakuola?176:90;s.appendChild(S('circle',{cx:px,cy:py,r:11,fill:'none',stroke:'var(--dna-ink)','stroke-width':2}));s.appendChild(on.wakuola?T(px+16,py,'plazmid',{s:10,a:'start'}):T(px,py+22,'plazmid',{s:10}))}
    return{s:s,t:t}}
  function opis(t){var lista=['błona','cytoplazma','rybosomy',on.jadro?'jądro z DNA':'DNA w cytoplazmie'].concat(KN_WARSTWY.filter(function(w){return w[0]!=='jadro'&&on[w[0]]}).map(function(w){return w[1]}));
    var h='<b>'+(t&&t.k==='rdzen'?'Wspólny rdzeń każdej komórki':t?'To pasuje do komórki: '+t.n:'Zestaw własny — nie pasuje do żadnego z czterech typów')+'</b><span>'+(t?t.opis:'')+'</span><span>Na rysunku: '+lista.join(', ')+'.</span>';
    if(!t&&!on.jadro&&(on.mito||on.chloro))h+='<span>Uwaga: mitochondria i chloroplasty mają tylko komórki z jądrem (eukariotyczne). Bakteria ich nie ma.</span>';
    else if(!t&&on.chloro&&!on.sciana)h+='<span>Chloroplasty bez ściany: tak bywa u niektórych protistów (np. euglena), ale nie u typowej rośliny.</span>';
    else if(!t&&on.plazmid&&on.jadro)h+='<span>Plazmidy są typowe dla bakterii; w komórkach z jądrem zdarzają się rzadko (np. u drożdży).</span>';
    else if(!t)h+='<span>Porównaj z przyciskami typów u góry: czego brakuje, a co jest za dużo?</span>';
    return h}
  function przyciski(){typy.innerHTML='';warstwy.innerHTML='';
    KN_TYPY.forEach(function(t){var b=btn(t.n,function(){ustaw(t);typ=t.k;draw()});if(typ===t.k)b.className+=' on';b.setAttribute('aria-pressed',String(typ===t.k));typy.appendChild(b)});
    KN_WARSTWY.forEach(function(w){var b=btn((on[w[0]]?'− ':'+ ')+w[1],function(){if(on[w[0]])delete on[w[0]];else on[w[0]]=1;typ=null;draw()});if(on[w[0]])b.className+=' on';b.setAttribute('aria-pressed',String(!!on[w[0]]));warstwy.appendChild(b)})}
  function draw(){var r=rys();hold.innerHTML='';hold.appendChild(r.s);box.innerHTML=opis(r.t);przyciski()}
  var st=KN_TYPY.filter(function(t){return t.k===(o&&o.start)})[0]||KN_TYPY[0];ustaw(st);typ=st.k;draw()}});
})();
