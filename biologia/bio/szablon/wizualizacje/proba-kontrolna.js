/* viz: proba-kontrolna — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"];
BIO.define('proba-kontrolna',{opis:'Planowanie doświadczenia: próba badawcza i kontrolna różnią się tylko jednym czynnikiem; przełączniki warunków, ocena planu (zmienna niezależna, zależna, stałe)',
mount:function(el,o){var D={mocz:{n:'Moczarka a światło',bad:'światło',zal:'liczba pęcherzyków O₂ w 5 min',cz:[['swiatlo','światło',['silne','słabe'],'światło'],['temp','temperatura wody',['20 °C','30 °C']],['nahco3','NaHCO₃ w wodzie',['tak','nie']],['galaz','gałązka moczarki',['jednakowa','dłuższa']]]},
   drozdze:{n:'Drożdże a CO₂',bad:'drożdże',zal:'zmętnienie wody wapiennej',cz:[['drozdze','drożdże',['są','brak'],'drożdże'],['cukier','roztwór cukru',['tak','nie']],['temp','temperatura',['ok. 35 °C','ok. 5 °C']],['objetosc','objętość roztworu',['200 cm³','100 cm³']]]}};
  var cur=o.start||'mocz',A={},B={};function reset(){var d=D[cur];A={};B={};d.cz.forEach(function(c){A[c[0]]=0;B[c[0]]=c[3]?1:0})}reset();
  var sg=H('div','bv-tools'),tab=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(tab);el.appendChild(out);
  function draw(){var d=D[cur];seg(sg,Object.keys(D).map(function(k){return[k,D[k].n]}),cur,function(k){cur=k;reset();draw()});
   var h='<table style="width:100%;border-collapse:collapse;font-size:13.5px;margin-top:6px"><tr><th align="left" style="padding:4px">czynnik</th><th style="padding:4px">próba badawcza</th><th style="padding:4px">próba kontrolna</th></tr>';
   d.cz.forEach(function(c){var r=A[c[0]]!==B[c[0]];h+='<tr style="background:'+(r?'#fff4e5':'transparent')+'"><td style="padding:4px">'+c[1]+(c[3]?' <small>(badany)</small>':'')+'</td>'+['A','B'].map(function(s){var v=(s==='A'?A:B)[c[0]];return '<td align="center" style="padding:4px"><button type="button" class="bv-btn'+(r?' on':'')+'" data-s="'+s+'" data-c="'+c[0]+'">'+c[2][v]+'</button></td>'}).join('')+'</tr>'});
   tab.innerHTML=h+'</table>';[].forEach.call(tab.querySelectorAll('button'),function(b){b.onclick=function(){var X=b.dataset.s==='A'?A:B;X[b.dataset.c]=1-X[b.dataset.c];draw()}});
   var rozne=d.cz.filter(function(c){return A[c[0]]!==B[c[0]]}),badany=d.cz.filter(function(c){return c[3]})[0];
   out.innerHTML=!rozne.length?'<b>Próby są identyczne</b> — nie da się niczego wykazać. Zmień w jednej próbie badany czynnik: <b>'+badany[1]+'</b>.':
    rozne.length>1?'<b>Błąd planu:</b> próby różnią się '+rozne.length+' czynnikami ('+rozne.map(function(c){return c[1]}).join(', ')+'). Nie wiadomo, który spowodował wynik — zostaw różnicę tylko w czynniku <b>'+badany[1]+'</b>.':
    rozne[0][3]?'<b>Dobry plan.</b> Zmienna niezależna (badana): <b>'+d.bad+'</b>. Zmienna zależna (mierzona): <b>'+d.zal+'</b>. Pozostałe warunki stałe — tylko wtedy wynik można przypisać badanemu czynnikowi. Wiarygodność zwiększą <b>powtórzenia</b>.':
    '<b>Błąd planu:</b> próby różnią się czynnikiem „'+rozne[0][1]+'”, a badamy <b>'+badany[1]+'</b>. Zmieniaj tylko badany czynnik.'}
  draw()}});
})();
