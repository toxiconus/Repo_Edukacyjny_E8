/* viz: siec-troficzna — grupa B · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var UID=BIO.Lh["B.UID"],H=BIO.Lh["B.H"],S=BIO.Lh["B.S"],info=BIO.Lh["B.info"],clr=BIO.Lh["B.clr"],key=BIO.Lh["B.key"],seg=BIO.Lh["B.seg"];
var SN={trawa:[60,300,'trawa'],dab:[270,300,'dąb'],zajac:[34,215,'zając'],mysz:[118,215,'mysz'],sarna:[204,215,'sarna'],gasienica:[312,215,'gąsienica'],lis:[80,128,'lis'],wilk:[190,128,'wilk'],sikora:[300,128,'sikora'],puszczyk:[150,48,'puszczyk']};
var SE=[['trawa','zajac'],['trawa','mysz'],['trawa','sarna'],['dab','mysz'],['dab','sarna'],['dab','gasienica'],['gasienica','sikora'],['mysz','lis'],['zajac','lis'],['sarna','wilk'],['mysz','puszczyk'],['sikora','puszczyk']];
var LV=['producent','konsument I rzędu','konsument II rzędu','konsument III rzędu'];
BIO.define('siec-troficzna',{opis:'Sieć troficzna lasu (10 gatunków + destruenci): kliknij gatunek — co je, kto go je, poziomy i łańcuchy; tryb „usuń gatunek” pokazuje, kto zostaje bez pokarmu',
mount:function(el){var id='bw'+(BIO.Lh["B.nextUid"]()),mode='info',sel=null,removed={},sg=H('div',{'class':'bw-seg bv-tools'}),svg=S('svg',{viewBox:'0 0 360 350',role:'img','aria-label':'Sieć troficzna lasu','class':'bw-svg'}),out=info();[sg,svg,out].forEach(function(e){el.appendChild(e)});
  function eats(n){return SE.filter(function(e){return e[1]===n&&!removed[e[0]]}).map(function(e){return e[0]})}
  function eaten(n){return SE.filter(function(e){return e[0]===n&&!removed[e[1]]}).map(function(e){return e[1]})}
  function isProd(n){return !SE.some(function(e){return e[1]===n})}
  function chains(){var r=[];function go(n,p){var nx=eaten(n);if(!nx.length){r.push(p);return}nx.forEach(function(m){go(m,p.concat(m))})}Object.keys(SN).filter(function(n){return isProd(n)&&!removed[n]}).forEach(function(p){go(p,[p])});return r}
  function starving(){var st={},ch=true;while(ch){ch=false;Object.keys(SN).forEach(function(n){if(removed[n]||st[n]||isProd(n))return;var f=SE.filter(function(e){return e[1]===n}).map(function(e){return e[0]}).filter(function(x){return !removed[x]&&!st[x]});if(!f.length){st[n]=1;ch=true}})}return st}
  var ALL=chains().length;
  function click(n){if(mode==='usun')removed[n]=!removed[n];else sel=sel===n?null:n;draw()}
  function draw(){clr(svg);var d=S('defs');['#9aa8a6','#3f7a28','#c0602c'].forEach(function(c,i){var mk=S('marker',{id:id+'a'+i,viewBox:'0 0 10 10',refX:'9',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto'});mk.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:c}));d.appendChild(mk)});svg.appendChild(d);
   [['producenci',300],['roślinożercy',215],['drapieżniki',128],['drapieżnik szczytowy',48]].forEach(function(r){svg.appendChild(S('text',{x:356,y:r[1]-26,'text-anchor':'end','font-size':'10',fill:'#7f8d8b'},r[0]))});
   svg.appendChild(S('rect',{x:6,y:326,width:348,height:20,rx:5,fill:'#efe9de'}));svg.appendChild(S('text',{x:180,y:340,'text-anchor':'middle','font-size':'10',fill:'#6b5a3c'},'destruenci: grzyby, bakterie — rozkładają szczątki wszystkich'));
   var st=starving();
   SE.forEach(function(e){if(removed[e[0]]||removed[e[1]])return;var a=SN[e[0]],b=SN[e[1]],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy),k=0,c='#9aa8a6',w=1.3;
    if(sel&&mode==='info'){if(e[1]===sel){k=1;c='#3f7a28';w=2.6}else if(e[0]===sel){k=2;c='#c0602c';w=2.6}}
    svg.appendChild(S('line',{x1:a[0]+dx/l*26,y1:a[1]+dy/l*26,x2:b[0]-dx/l*27,y2:b[1]-dy/l*27,stroke:c,'stroke-width':w,'marker-end':'url(#'+id+'a'+k+')'}))});
   Object.keys(SN).forEach(function(n){var p=SN[n],g=S('g',{'aria-label':p[2],style:'cursor:pointer'}),fl=isProd(n)?'#dcefd2':'#ffffff',sk='#1a2528',da='';
    if(removed[n]){fl='#f2f2f2';sk='#bbb';da='4 3'}else if(st[n]){fl='#f6dfda';sk='#b23b2a';da='4 3'}else if(n===sel)fl='#3f7a28';
    g.appendChild(S('circle',{cx:p[0],cy:p[1],r:25,fill:fl,stroke:sk,'stroke-width':n===sel?'2.4':'1.3','stroke-dasharray':da}));
    g.appendChild(S('text',{x:p[0],y:p[1]+4,'text-anchor':'middle','font-size':p[2].length>7?'10':'11.5','font-weight':'700',fill:n===sel&&!removed[n]?'#fff':removed[n]?'#aaa':'#1a2528'},p[2]));key(g,function(){click(n)});svg.appendChild(g)});
   var h;
   if(mode==='usun'){var rm=Object.keys(removed).filter(function(n){return removed[n]}).map(function(n){return SN[n][2]}),sv=Object.keys(st).map(function(n){return SN[n][2]});
    h=rm.length?'<b>Usunięto: '+rm.join(', ')+'</b><span>'+(sv.length?'Bez pokarmu zostają: '+sv.join(', ')+' (czerwone, przerywane).':'Każdy gatunek ma jeszcze inny pokarm — sieć jest odporniejsza niż pojedynczy łańcuch.')+'</span><span>Łańcuchów w sieci: '+chains().length+' (było '+ALL+').</span>':'<b>Tryb usuwania</b><span>Kliknij gatunek, aby go usunąć z sieci.</span>'}
   else if(sel){var ch=chains().filter(function(c){return c.indexOf(sel)>=0}),lv={};ch.forEach(function(c){lv[c.indexOf(sel)]=1});var lvs=Object.keys(lv).map(Number).sort(),a=eats(sel).map(function(n){return SN[n][2]}),b=eaten(sel).map(function(n){return SN[n][2]});
    h='<b>'+SN[sel][2]+': '+lvs.map(function(i){return LV[i]}).join(' i ')+'</b><span>Je: '+(a.length?a.join(', '):'— (wytwarza materię w fotosyntezie)')+' · zjadany przez: '+(b.length?b.join(', '):'nikogo w tej sieci')+'</span><span>Łańcuchy przez ten gatunek ('+ch.length+'): '+ch.map(function(c){return c.map(function(n){return SN[n][2]}).join(' → ')}).join('; ')+'</span>'}
   else h='<b>Kliknij gatunek</b><span>Strzałka biegnie od zjadanego do zjadającego (kierunek przepływu materii i energii). Zielone: co je; pomarańczowe: kto go zjada. W sieci jest '+ALL+' łańcuchów pokarmowych.</span>';
   out.innerHTML=h;seg(sg,[['info','co je i kto go je'],['usun','usuń gatunek'],['reset','przywróć sieć']],mode,function(m){if(m==='reset'){removed={};sel=null}else{mode=m;sel=null}draw()})}
  draw()}});
})();
