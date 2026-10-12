/* viz: relacje-ekologiczne — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"];
BIO.define('relacje-ekologiczne',{opis:'Zależności międzygatunkowe jako znaki wpływu na oba gatunki (+ korzyść, − strata, 0 bez wpływu): konkurencja, drapieżnictwo, roślinożerność, pasożytnictwo, mutualizm, komensalizm; tryb „rozpoznaj relację” na 12 przykładach',
mount:function(el,o){
  var R=[
   ['konkurencja','−','−','Oba gatunki <strong>tracą</strong>, bo korzystają z tych samych, ograniczonych zasobów (pokarm, światło, woda, miejsce). Bywa wewnątrzgatunkowa (osobniki jednego gatunku) i międzygatunkowa.','siewki sosny w gęstym młodniku; lis i myszołów polujące na te same nornice'],
   ['drapieżnictwo','+','−','Drapieżnik <strong>zabija i zjada</strong> ofiarę. Liczebność ofiar i drapieżników zmienia się falami: więcej ofiar → więcej drapieżników → mniej ofiar → mniej drapieżników.','sowa i mysz; biedronka i mszyce; rosiczka i mucha'],
   ['roślinożerność','+','−','Roślinożerca zjada <strong>część rośliny</strong> (liście, pędy, nasiona); roślina zwykle przeżywa i odrasta. Rośliny bronią się kolcami, twardymi liśćmi i trującymi substancjami.','sarna zgryzająca pędy młodych drzew; gąsienice na liściach kapusty'],
   ['pasożytnictwo','+','−','Pasożyt żyje <strong>na</strong> żywicielu albo <strong>w</strong> nim i korzysta jego kosztem, zwykle go nie zabijając — martwy żywiciel to koniec jego „domu i stołówki”.','kleszcz i sarna; tasiemiec w jelicie człowieka; jemioła na drzewie (półpasożyt)'],
   ['mutualizm','+','+','<strong>Oba</strong> gatunki zyskują. Czasem tak ściśle, że nie mogą żyć osobno (porost: grzyb + glon).','porost; koniczyna i bakterie brodawkowe; pszczoła i kwiat; mikoryza (grzyb + korzenie drzewa)'],
   ['komensalizm','+','0','Jeden gatunek <strong>korzysta</strong> (resztki pokarmu, schronienie, podpora), dla drugiego to obojętne.','podnawka na rekinie zjadająca resztki; storczyki rosnące na gałęziach drzew tropikalnych (nie pobierają z nich soków)']];
  var Q=[['Kleszcz pije krew sarny.',3],['Grzyb i glon razem tworzą porost.',4],['Lis i myszołów polują na te same nornice.',0],['Sowa łapie mysz.',1],['Sarna zgryza pędy młodych dębów.',2],['Podnawka przyczepia się do rekina i zjada resztki jego posiłków.',5],
   ['Bakterie w brodawkach korzeni koniczyny wiążą azot, a roślina daje im cukry.',4],['Tasiemiec żyje w jelicie człowieka.',3],['Siewki sosny w gęstym młodniku zacieniają się nawzajem.',0],['Biedronka zjada mszyce.',1],['Pszczoła pije nektar i przenosi pyłek z kwiatu na kwiat.',4],['Storczyk rośnie na gałęzi drzewa w lesie tropikalnym, nie pobierając z niego wody.',5]];
  var tools=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  var bA=btn('poznaj relacje',function(){poznaj()}),bB=btn('rozpoznaj relację',function(){quiz()});tools.appendChild(bA);tools.appendChild(bB);
  function znak(z){var c=z==='+'?'var(--c-basic)':z==='−'?'var(--c-error)':'#8c959f';return'<span style="flex:0 0 26px;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;font:800 16px Inter,system-ui;color:#fff;background:'+c+'">'+z+'</span>'}
  function poznaj(){BIO.fx.toggle([bA,bB],0);pic.innerHTML='';var gr=H('div','bv-grid c2');pic.appendChild(gr);
    R.forEach(function(r){var t=H('div','bv-tile','<h6>'+r[0]+'</h6><div style="display:flex;gap:6px;align-items:center;font:700 12.5px Inter,system-ui">A '+znak(r[1])+'<span style="margin-left:8px">B</span> '+znak(r[2])+'</div>');t.setAttribute('data-k',r[0]);gr.appendChild(t)});
    var m={};R.forEach(function(r){m[r[0]]=[r[0][0].toUpperCase()+r[0].slice(1)+' ('+r[1]+'/'+r[2]+')',' '+r[3]+' <em>Przykłady:</em> '+r[4]+'.']});
    BIO.fx.info(pic,out,m);out.className='bv-info';out.innerHTML='<b>Patrz na skutek, nie na nazwę</b>Najpierw zapytaj: co zyskuje lub traci <strong>każdy</strong> z dwóch gatunków? Para znaków wskazuje relację: −/− konkurencja; +/− drapieżnictwo, roślinożerność lub pasożytnictwo (rozstrzyga, czy ofiara ginie, traci część ciała, czy żyje dalej jako żywiciel); +/+ mutualizm; +/0 komensalizm. Kliknij kartę.'}
  var kol,ok,n;
  function quiz(){BIO.fx.toggle([bA,bB],1);kol=Q.map(function(_,i){return i}).sort(function(){return Math.random()-.5});ok=0;n=0;next()}
  function next(){pic.innerHTML='';if(n>=kol.length){out.className='bv-info ok';out.innerHTML='<b>Wynik: '+ok+' / '+kol.length+'</b>Kliknij „rozpoznaj relację”, aby zacząć od nowa (kolejność się zmieni).';return}
    var q=Q[kol[n]];pic.appendChild(H('p','',(n+1)+'/'+kol.length+'. <strong>'+q[0]+'</strong>'));var row=H('div','bv-tools');pic.appendChild(row);
    R.forEach(function(r,i){row.appendChild(btn(r[0],function(){var dobrze=i===q[1];if(dobrze)ok++;n++;out.className='bv-info '+(dobrze?'ok':'bad');
      out.innerHTML='<b>'+(dobrze?'Dobrze':'Nie — to '+R[q[1]][0])+' ('+R[q[1]][1]+'/'+R[q[1]][2]+')</b>'+R[q[1]][3];next()}))});
    if(!n){out.className='bv-info';out.innerHTML='<b>Rozpoznaj relację</b>Ustal znaki wpływu dla obu gatunków, potem wybierz nazwę.'}}
  if(o.start==='quiz')quiz();else poznaj()}});
})();
