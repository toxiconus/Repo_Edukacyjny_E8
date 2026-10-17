/* viz: trener-nici — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var H=BIO.Lh["A.H"],btn=BIO.Lh["A.btn"],fx=BIO.Lh["A.fx"],cleanSeq=BIO.Lh["A.cleanSeq"],PAIR_RNA=BIO.Lh["A.PAIR_RNA"],PAIR=BIO.Lh["A.PAIR"],HB=BIO.Lh["A.HB"];
BIO.define('trener-nici',{opis:'Trener: dopisz nić komplementarną (DNA→DNA lub DNA→RNA), pokazuje liczbę wiązań; opcje seq, tryb="rna"',
mount:function(el,o){var rna=o.tryb==='rna',seq=[],idx=0;
  var tools=H('div','bv-tools'),mode=btn(''),nowa=btn('Nowa sekwencja'),box=H('div','bv-scroll'),pick=H('div','bv-pick'),info=fx.infoBox('Kliknij literę, która pasuje do zasady nad znakiem „?”.');
  tools.appendChild(mode);tools.appendChild(nowa);el.appendChild(tools);el.appendChild(box);el.appendChild(pick);el.appendChild(info);
  function gen(first){seq=[];var s=first&&o.seq?cleanSeq(o.seq,'ATGC'):'';if(s)seq=s.split('');else{var L=6+Math.floor(Math.random()*4);for(var i=0;i<L;i++)seq.push('ATCG'[Math.floor(Math.random()*4)])}idx=0;render()}
  function partner(x){return(rna?PAIR_RNA:PAIR)[x]}
  function render(){mode.textContent='Tryb: '+(rna?'DNA → RNA':'DNA → DNA');box.innerHTML='';
    var r1=H('div','bv-seq'),r2=H('div','bv-seq'),r3=H('div','bv-seq');r1.appendChild(H('span','bv-end','5′'));r2.appendChild(H('span','bv-end',''));r3.appendChild(H('span','bv-end','3′'));
    seq.forEach(function(x,i){r1.appendChild(H('span','bv-nt '+x,x));var hb=H('span','bv-hb');if(i<idx)for(var k=0;k<HB[x];k++)hb.appendChild(document.createElement('i'));r2.appendChild(hb);
      r3.appendChild(i<idx?H('span','bv-nt '+partner(x),partner(x)):H('span','bv-nt '+(i===idx?'q':'e'),i===idx?'?':'·'))});
    r1.appendChild(H('span','bv-end','3′'));r3.appendChild(H('span','bv-end','5′'));[r1,r2,r3].forEach(function(r){r.style.flexWrap='nowrap';box.appendChild(r)});
    pick.innerHTML='';(rna?['A','U','C','G']:['A','T','C','G']).forEach(function(x){var b=H('button','bv-nt '+x,x);b.type='button';b.disabled=idx>=seq.length;b.onclick=function(){answer(x)};pick.appendChild(b)})}
  function answer(x){var cur=seq[idx],good=partner(cur);
    if(x===good){idx++;info.className='bv-info ok';info.innerHTML=idx>=seq.length?'<b>Sekwencja ukończona</b>Czy umiesz wyjaśnić wynik bez patrzenia do tabeli?':'<b>Dobrze</b>'+cur+' → '+good+(rna?(cur==='A'?' (w RNA zamiast T jest U).':'.'):' ('+HB[cur]+' wiązania wodorowe).');render()}
    else{info.className='bv-info bad';info.innerHTML='<b>Nie</b>Do '+cur+' pasuje '+good+'. Reguła: '+(rna?'A→U, T→A, C→G, G→C.':'A–T, C–G.')+(x==='U'&&!rna?' W DNA nie ma U.':'')}}
  mode.onclick=function(){rna=!rna;idx=0;info.className='bv-info';info.textContent='Tryb zmieniony. Zacznij od pierwszej zasady.';render()};nowa.onclick=function(){info.className='bv-info';info.textContent='Nowa sekwencja.';gen(false)};
  gen(true)}});
})();
