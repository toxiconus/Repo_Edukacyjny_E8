/* viz: punnett — grupa B · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["B.H"],info=BIO.Lh["B.info"],clr=BIO.Lh["B.clr"],seg=BIO.Lh["B.seg"];
var MODES={
 A:{n:'jedna cecha (A/a)',rank:{A:0,a:1},m:[['A','A'],['A','a'],['a','a']],f:[['A','A'],['A','a'],['a','a']],dm:1,df:1,ph:function(g){return g.indexOf('A')>=0?'kwiat purpurowy':'kwiat biały'},
  note:'Przykład Mendla: groch, allel A — barwa purpurowa (dominujący), a — biała (recesywny). Aa × Aa daje 3 : 1 w fenotypach i 1 : 2 : 1 w genotypach.'},
 K:{n:'grupy krwi AB0',rank:{'Iᴬ':0,'Iᴮ':1,'i':2},m:[['Iᴬ','Iᴬ'],['Iᴬ','i'],['Iᴮ','Iᴮ'],['Iᴮ','i'],['Iᴬ','Iᴮ'],['i','i']],f:[['Iᴬ','Iᴬ'],['Iᴬ','i'],['Iᴮ','Iᴮ'],['Iᴮ','i'],['Iᴬ','Iᴮ'],['i','i']],dm:1,df:3,
  ph:function(g){var a=g.indexOf('Iᴬ')>=0,b=g.indexOf('Iᴮ')>=0;return a&&b?'grupa AB':a?'grupa A':b?'grupa B':'grupa 0'},
  note:'Allele Iᴬ i Iᴮ są kodominujące (oba się ujawniają: grupa AB), allel i jest recesywny. Rodzice z grupami A i B mogą mieć dziecko z każdą z czterech grup.'},
 X:{n:'sprzężona z płcią (hemofilia)',rank:{'Xᴴ':0,'Xʰ':1,'Y':2},m:[['Xᴴ','Xᴴ'],['Xᴴ','Xʰ'],['Xʰ','Xʰ']],f:[['Xᴴ','Y'],['Xʰ','Y']],dm:1,df:0,
  ph:function(g){var y=g.indexOf('Y')>=0,h=g.filter(function(x){return x==='Xʰ'}).length;if(y)return h?'syn chory':'syn zdrowy';return h===2?'córka chora':h===1?'córka nosicielka':'córka zdrowa'},
  note:'Gen leży na chromosomie X. Syn dostaje X od matki, a Y od ojca, więc chorobę dziedziczy po matce. Córka nosicielka jest zdrowa, ale może przekazać allel h.'}};
BIO.define('punnett',{opis:'Krzyżówka genetyczna: jedna cecha A/a, grupy krwi AB0, cecha sprzężona z płcią (hemofilia); fenotypy i genotypy w %; opcja tryb="A|K|X"',
mount:function(el,o){var mode=MODES[o.tryb]?o.tryb:'A',sg=H('div',{'class':'bw-seg bv-tools'}),tl=H('div',{'class':'bv-tools'}),sm=H('select',{'class':'bw-sel','aria-label':'Genotyp matki'}),sf=H('select',{'class':'bw-sel','aria-label':'Genotyp ojca'}),
   tw=H('div',{'class':'bw-tbl bw-pun'}),t=H('table'),out=info(),nt=H('p',{style:'font-size:12.5px;margin:6px 0 0'});
  tl.appendChild(H('span',{'class':'bv-score'},'matka'));tl.appendChild(sm);tl.appendChild(H('span',{'class':'bv-score'},'ojciec'));tl.appendChild(sf);tw.appendChild(t);[sg,tl,tw,out,nt].forEach(function(e){el.appendChild(e)});
  function gs(g,r){return g.slice().sort(function(a,b){return r[a]-r[b]}).join('')}
  function fill(s,list,def,r){clr(s);list.forEach(function(g,i){var op=H('option',{value:i});op.textContent=gs(g,r);s.appendChild(op)});s.value=def}
  function setMode(m){mode=m;var M=MODES[m];fill(sm,M.m,M.dm,M.rank);fill(sf,M.f,M.df,M.rank);draw()}
  function bars(ob){return '<div class="bw-bars">'+Object.keys(ob).map(function(k){var v=ob[k]/4*100;return '<div class="bw-bar"><span>'+k+'</span><span class="t"><i style="width:'+v+'%"></i></span><span class="v">'+v+'%</span></div>'}).join('')+'</div>'}
  function draw(){var M=MODES[mode],gm=M.m[+sm.value],gf=M.f[+sf.value];clr(t);var hr=H('tr');hr.appendChild(H('th',{'class':'bw-mono'},'♀ \\ ♂'));gf.forEach(function(a){hr.appendChild(H('th',{'class':'bw-mono',text:a}))});t.appendChild(hr);var G={},F={};
   gm.forEach(function(am){var tr=H('tr');tr.appendChild(H('th',{'class':'bw-mono',text:am}));gf.forEach(function(af){var g=[am,af],s=gs(g,M.rank),p=M.ph(g);G[s]=(G[s]||0)+1;F[p]=(F[p]||0)+1;tr.appendChild(H('td',null,s+'<small>'+p+'</small>'))});t.appendChild(tr)});
   out.innerHTML='<b>Fenotypy potomstwa</b>'+bars(F)+'<b>Genotypy</b>'+bars(G)+'<span style="font-size:12.5px">To prawdopodobieństwo dla każdego dziecka, a nie dokładna liczba dzieci.</span>';nt.textContent=M.note;
   seg(sg,Object.keys(MODES).map(function(k){return [k,MODES[k].n]}),mode,setMode)}
  sm.onchange=draw;sf.onchange=draw;setMode(mode)}});
})();
