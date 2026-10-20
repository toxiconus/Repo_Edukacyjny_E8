/* viz: klucz-kregowce — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"];
BIO.define('klucz-kregowce',{opis:'Klucz dwudzielny do gromad kręgowców (ryby, płazy, gady, ptaki, ssaki): pytania tak/nie, ścieżka; tryb „rozpoznaj zwierzę” z przykładami',
mount:function(el,o){var K={q1:['Czy ciało pokrywają pióra?','PTAKI','q2'],q2:['Czy ma sierść i karmi młode mlekiem?','SSAKI','q3'],q3:['Czy przez całe życie oddycha skrzelami i ma płetwy?','RYBY','q4'],q4:['Czy skóra jest naga, wilgotna, śluzowata?','PŁAZY','q5'],q5:['Czy skórę pokrywają suche, rogowe łuski lub tarczki?','GADY','?']};
  var Z=[['wróbel','PTAKI',[1]],['pingwin','PTAKI',[1]],['nietoperz','SSAKI',[0,1]],['delfin','SSAKI',[0,1]],['wieloryb','SSAKI',[0,1]],['karp','RYBY',[0,0,1]],['konik morski','RYBY',[0,0,1]],['żaba','PŁAZY',[0,0,0,1]],['traszka','PŁAZY',[0,0,0,1]],['żółw','GADY',[0,0,0,0,1]],['jaszczurka','GADY',[0,0,0,0,1]],['wąż','GADY',[0,0,0,0,1]]];
  var path=[],zw=null,sg=H('div','bv-tools'),box=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(box);el.appendChild(out);
  function nowy(){zw=Z[Math.floor(Math.random()*Z.length)];path=[];draw()}
  function draw(){clr(sg);sg.appendChild(btn('▶ rozpoznaj zwierzę',nowy));sg.appendChild(btn('od początku',function(){zw=null;path=[];draw()}));
   var h='<div style="font-size:14px">'+(zw?'Zwierzę: <b style="font-size:17px">'+zw[0]+'</b>':'Przejdź klucz dla wybranego zwierzęcia albo kliknij „rozpoznaj zwierzę”.')+'</div><ol style="margin:8px 0;padding-left:22px">';
   var k='q1',end=null;path.forEach(function(a,i){var q=K[k];h+='<li>'+q[0]+' — <b>'+(a?'tak':'nie')+'</b></li>';if(a){end=q[1]}else k=q[2]});
   h+='</ol>';if(!end&&K[k]){h+='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b>'+(path.length+1)+'. '+K[k][0]+'</b></div>'}
   box.innerHTML=h;if(!end&&K[k]){var r=H('div','bv-tools');r.appendChild(btn('tak',function(){path.push(1);draw()}));r.appendChild(btn('nie',function(){path.push(0);draw()}));box.appendChild(r)}
   if(end){var good=!zw||zw[1]===end,wz=zw?zw[2]:null,ok=!wz||wz.join()===path.join();
    out.innerHTML='Wynik klucza: <b>'+end+'</b>.'+(zw?(good&&ok?' <b style="color:#2e7d32">Dobrze!</b>':' <b style="color:#c0392b">Sprawdź jeszcze raz</b> — '+zw[0]+' to '+{PTAKI:'ptak',SSAKI:'ssak',RYBY:'ryba','PŁAZY':'płaz',GADY:'gad'}[zw[1]]+'.'):'')+
     (zw&&/delfin|wieloryb/.test(zw[0])?' Delfin i wieloryb mają płetwy, ale oddychają <b>płucami</b> i karmią młode mlekiem — to ssaki.':zw&&zw[0]==='nietoperz'?' Nietoperz lata, ale ma sierść, nie pióra — to ssak.':zw&&zw[0]==='pingwin'?' Pingwin nie lata, ale ma pióra — to ptak.':zw&&zw[0]==='konik morski'?' Konik morski nie przypomina ryby, ale ma skrzela i płetwy — to ryba.':'')}
   else out.innerHTML='Klucz dwudzielny: na każde pytanie odpowiadasz <b>tak</b> albo <b>nie</b>; kolejność pytań prowadzi od cech najbardziej wyróżniających (pióra, sierść).'}
  draw()}});
})();
