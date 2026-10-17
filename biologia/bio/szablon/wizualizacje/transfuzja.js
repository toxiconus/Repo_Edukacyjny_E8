/* viz: transfuzja — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],svg=BIO.Lh["C.svg"];
BIO.define('transfuzja',{opis:'Zgodność krwi w modelu szkolnym: wybierz grupę dawcy i biorcy (ABO, Rh); antygeny na krwinkach dawcy vs przeciwciała w osoczu biorcy → zgodna / aglutynacja; tabela wszystkich par',
mount:function(el,o){
  var GR=['0','A','B','AB'],AG={'0':[],A:['A'],B:['B'],AB:['A','B']},AB={'0':['A','B'],A:['B'],B:['A'],AB:[]};
  var d={g:o.dawca||'A',rh:'+'},b={g:o.biorca||'B',rh:'+'};
  var t1=H('div','bv-tools'),t2=H('div','bv-tools'),box=H('div','bio-svgbox'),out=H('div','bv-info'),tb=H('div');
  el.appendChild(t1);el.appendChild(t2);el.appendChild(box);el.appendChild(out);el.appendChild(tb);
  function wybor(row,lab,X){clr(row);row.appendChild(H('b',null,lab));GR.forEach(function(g){var x=btn(g,function(){X.g=g;rys()});if(X.g===g)x.classList.add('on');row.appendChild(x)});
   ['+','−'].forEach(function(r){var x=btn('Rh'+r,function(){X.rh=r;rys()});if(X.rh===r)x.classList.add('on');row.appendChild(x)})}
  function agMark(a,x,y){return a==='A'?S('path',{d:'M'+x+' '+(y-7)+'L'+(x+7)+' '+(y+5)+'L'+(x-7)+' '+(y+5)+'z',fill:'var(--ag-a)'}):a==='B'?S('rect',{x:x-6,y:y-6,width:12,height:12,fill:'var(--ag-b)'}):S('circle',{cx:x,cy:y,r:6,fill:'var(--ag-d)'})}
  function cell(cx,cy,ags,lump){var g=S('g',{transform:lump?'translate('+lump+')':''},[S('ellipse',{cx:cx,cy:cy,rx:30,ry:24,fill:'var(--blood-o2-bg)',stroke:'var(--blood-o2)','stroke-width':2.5}),S('ellipse',{cx:cx,cy:cy,rx:13,ry:9,fill:'none',stroke:'var(--blood-o2)','stroke-opacity':.4})]);
   var AN=[-2.2,-1.1,0,1.1];ags.forEach(function(a,i){g.appendChild(agMark(a,cx+31*Math.cos(AN[i]),cy+25*Math.sin(AN[i])))});return g}
  function przeciw(x,y,a){var c=a==='A'?'var(--ag-a)':a==='B'?'var(--ag-b)':'var(--ag-d)';return S('g',{},[S('path',{d:'M'+x+' '+(y+12)+'V'+y+'L'+(x-7)+' '+(y-9)+'M'+x+' '+y+'L'+(x+7)+' '+(y-9),fill:'none',stroke:c,'stroke-width':3,'stroke-linecap':'round'}),T(x,y+26,'anty-'+a,{s:13,w:800,f:c})])}
  function zgodna(D,B){var bad=AG[D.g].filter(function(a){return AB[B.g].indexOf(a)>=0}),rh=D.rh==='+'&&B.rh==='−';return {ok:!bad.length&&!rh,bad:bad,rh:rh}}
  function rys(){wybor(t1,'Dawca:',d);wybor(t2,'Biorca:',b);clr(box);var z=zgodna(d,b),ags=AG[d.g].concat(d.rh==='+'?['D']:[]),abs=AB[b.g];
   var s=svg(640,200,'Krwinki dawcy w osoczu biorcy',[S('rect',{x:10,y:10,width:620,height:180,rx:16,fill:'var(--viz-bg2)',stroke:'var(--viz-line)'}),T(165,30,'krwinki dawcy '+d.g+' Rh'+d.rh,{s:15,w:800}),T(480,30,'osocze biorcy '+b.g+' Rh'+b.rh,{s:15,w:800})]);
   var off=z.ok?[[80,100],[170,125],[255,95],[115,155],[230,152]]:[[150,108],[178,118],[162,140],[134,134],[190,146]];
   off.forEach(function(p){s.appendChild(cell(p[0],p[1],ags))});
   if(!abs.length&&b.rh==='+')s.appendChild(T(480,105,'brak anty-A i anty-B',{s:14,w:700,f:'var(--viz-mut)'}));
   abs.forEach(function(a,i){s.appendChild(przeciw(430+i*80,95,a))});if(b.rh==='−')s.appendChild(przeciw(430+abs.length*80,95,'D'));
   if(b.rh==='−')s.appendChild(T(480,150,'anty-D — dopiero po uczuleniu',{s:13,w:700,f:'var(--viz-mut)'}));
   s.appendChild(T(165,56,'▲ A   ■ B   ● D (Rh)',{s:16,w:800,f:'var(--viz-mut)'}));s.appendChild(T(400,182,z.ok?'krwinki pływają swobodnie':'krwinki zlepiają się (aglutynacja)',{s:15,w:800,f:z.ok?'var(--c-basic)':'var(--c-error)'}));
   box.appendChild(s);
   out.className='bv-info '+(z.ok?'ok':'bad');
   out.innerHTML=z.ok?'<b>Zgodna (model szkolny)</b>Na krwinkach dawcy nie ma antygenu, na który biorca ma przeciwciała'+(d.rh==='−'||b.rh==='+'?'; czynnik Rh nie przeszkadza.':'.')+' W szpitalu i tak przetacza się krew tej samej grupy i wykonuje próbę krzyżową.':
    '<b>Niezgodna</b>'+(z.bad.length?'Przeciwciała <strong>anty-'+z.bad.join(' i anty-')+'</strong> w osoczu biorcy rozpoznają antygeny '+z.bad.join(' i ')+' na krwinkach dawcy → <strong>aglutynacja</strong> (zlepianie) i rozpad krwinek. ':'')+
    (z.rh?'Biorca Rh− nie ma antygenu D; krew Rh+ <strong>uczula</strong> go — powstają przeciwciała anty-D, a kolejne przetoczenie (lub ciąża z płodem Rh+) grozi reakcją. ':'');
   var h='<table class="bv-tab" style="width:100%;border-collapse:collapse;margin-top:8px;font-size:13px"><tr><th style="padding:4px">dawca ↓ / biorca →</th>'+GR.map(function(g){return '<th style="padding:4px">'+g+'</th>'}).join('')+'</tr>';
   GR.forEach(function(x){h+='<tr><th style="padding:4px">'+x+'</th>'+GR.map(function(y){var ok=zgodna({g:x,rh:'−'},{g:y,rh:'−'}).ok;return '<td align="center" style="padding:4px;'+(x===d.g&&y===b.g?'outline:2px solid var(--accent);':'')+'">'+(ok?'✔':'✘')+'</td>'}).join('')+'</tr>'});
   tb.innerHTML=h+'</table><small>Tabela ABO (bez Rh): ✔ — zgodna w modelu szkolnym. Grupa 0 „pasuje” do wszystkich, AB przyjmuje od wszystkich — tylko w tym uproszczeniu.</small>'}
  rys()}});
})();
