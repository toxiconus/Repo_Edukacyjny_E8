/* viz: kod-genetyczny — grupa B · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["B.H"],info=BIO.Lh["B.info"],clr=BIO.Lh["B.clr"],key=BIO.Lh["B.key"];
var TT='FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
var IX={T:0,C:1,A:2,G:3};
var AA3={F:'Phe',L:'Leu',S:'Ser',Y:'Tyr',C:'Cys',W:'Trp',P:'Pro',H:'His',Q:'Gln',R:'Arg',I:'Ile',M:'Met',T:'Thr',N:'Asn',K:'Lys',V:'Val',A:'Ala',D:'Asp',E:'Glu',G:'Gly','*':'STOP'};
var PLN={Phe:'fenyloalanina',Leu:'leucyna',Ser:'seryna',Tyr:'tyrozyna',Cys:'cysteina',Trp:'tryptofan',Pro:'prolina',His:'histydyna',Gln:'glutamina',Arg:'arginina',Ile:'izoleucyna',Met:'metionina (START)',Thr:'treonina',Asn:'asparagina',Lys:'lizyna',Val:'walina',Ala:'alanina',Asp:'kwas asparaginowy',Glu:'kwas glutaminowy',Gly:'glicyna',STOP:'koniec translacji'};
var COMP={A:'T',T:'A',G:'C',C:'G'};
var NEXT={A:'C',C:'G',G:'T',T:'A'};
function trc(c){return TT[16*IX[c[0]]+4*IX[c[1]]+IX[c[2]]]}
function prot(s){var o=[],on=true;for(var i=0;i+2<s.length;i+=3){var a=AA3[trc(s.slice(i,i+3))];o.push({a:a,on:on});if(a==='STOP')on=false}return o}
BIO.define('kod-genetyczny',{opis:'DNA (nić kodująca i matrycowa) → mRNA → aminokwasy; klik w zasadę = mutacja punktowa (cicha, zmiany sensu, nonsensowna, utrata START); opcja seq="ATG…" (wielokrotność 3)',
mount:function(el,o){var ORIG=String(o.seq||'ATGTTTGGCTGGAAATGCTAA').toUpperCase().replace(/[^ACGT]/g,'');ORIG=ORIG.slice(0,ORIG.length-ORIG.length%3)||'ATGTAA';var seq=ORIG.split('');
  var kb=H('div',{'class':'bw-key'},'<b>1</b><span>nić kodująca DNA 5′→3′ (kliknij zasadę)</span><b>2</b><span>nić matrycowa DNA 3′→5′</span><b>3</b><span>mRNA 5′→3′ (U zamiast T)</span><b>4</b><span>aminokwas</span>'),
   box=H('div',{'class':'bw-codons'}),tools=H('div',{'class':'bv-tools'}),out=info();[kb,box,tools,out].forEach(function(e){el.appendChild(e)});
  var rb=H('button',{type:'button','class':'bv-btn'},'Przywróć sekwencję');rb.onclick=function(){seq=ORIG.split('');draw()};tools.appendChild(rb);
  function chain(P){var r=[];for(var k=0;k<P.length;k++){if(P[k].a==='STOP')break;r.push(P[k].a)}return r.join('–')}
  function draw(){clr(box);var P0=prot(ORIG),P1=prot(seq.join('')),lost=seq.slice(0,3).join('')!=='ATG';
   for(var i=0;i<seq.length;i+=3){var ci=i/3,c=H('div'),r1=H('div',{'class':'r k'}),r2=H('div',{'class':'r'}),r3=H('div',{'class':'r m'});
    for(var j=0;j<3;j++)(function(p){var s=H('span',{text:seq[p],'aria-label':'zasada '+(p+1)+': '+seq[p]});if(seq[p]!==ORIG[p])s.className='mut';key(s,function(){seq[p]=NEXT[seq[p]];draw()});r1.appendChild(s);r2.appendChild(H('span',{text:COMP[seq[p]]}));r3.appendChild(H('span',{text:seq[p]==='T'?'U':seq[p]}))})(i+j);
    var a=P1[ci],cl='bw-cod';if(a.a!==P0[ci].a)cl+=' chg';if(a.a==='STOP')cl+=' stop';if(!a.on||lost)cl+=' off';c.className=cl;[r1,r2,r3].forEach(function(r){c.appendChild(r)});c.appendChild(H('div',{'class':'aa',text:a.a,title:PLN[a.a]}));box.appendChild(c)}
   var mu=[];seq.forEach(function(b,p){if(b!==ORIG[p])mu.push(p)});var h;
   if(!mu.length)h='<b>Sekwencja wyjściowa</b><span>Białko: '+chain(P0)+' (potem STOP). Kliknij literę w górnym wierszu.</span>';
   else if(lost)h='<b>Utracony kodon START</b><span>Pierwszy kodon nie jest już AUG: w tym modelu translacja nie rusza i białko nie powstaje.</span>';
   else{var ks=[],seen={};mu.forEach(function(p){var ci=Math.floor(p/3);if(seen[ci])return;seen[ci]=1;var a0=P0[ci].a,a1=P1[ci].a;
     ks.push(a0===a1?'cicha (kodon '+(ci+1)+': nadal '+a0+')':a1==='STOP'?'nonsensowna (kodon '+(ci+1)+': '+a0+' → STOP, białko skrócone)':a0==='STOP'?'utrata kodonu STOP (białko wydłużone)':'zmiany sensu (kodon '+(ci+1)+': '+a0+' → '+a1+')')});
    h='<b>Mutacja '+ks.join('; ')+'</b><span>Było: '+chain(P0)+'</span><span>Jest: '+(chain(P1)||'brak aminokwasów')+'</span>'}
   out.innerHTML=h}
  draw()}});
})();
