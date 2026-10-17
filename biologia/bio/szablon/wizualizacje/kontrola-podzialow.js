/* viz: kontrola-podzialow — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"];
BIO.define('kontrola-podzialow',{opis:'Model tkanki (70 komórek): dawki UV uszkadzają DNA, „hamulce” naprawa DNA i apoptoza (wł./wył.) usuwają skutki; komórka z 3 mutacjami w genach kontroli dzieli się bez ograniczeń i zajmuje sąsiednie miejsca (guz); liczniki komórek zdrowych, zmutowanych i nowotworowych',
mount:function(el,o){
  var C=10,Rw=7,cel=[],nap=true,apo=true,dawki=0,cykle=0;
  var tools=H('div','bv-tools'),t2=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');[tools,t2,pic,out].forEach(function(x){el.appendChild(x)});
  var bUV=btn('☀ dawka UV',function(){uv()}),bT=btn('⏱ cykl podziałów',function(){cykl(1)}),b5=btn('+5 cykli',function(){cykl(5)}),bR=btn('od nowa',function(){start()});
  var bN=btn('naprawa DNA: wł.',function(){nap=!nap;bN.textContent='naprawa DNA: '+(nap?'wł.':'wył.');bN.classList.toggle('on',nap);opis()}),
      bA=btn('apoptoza: wł.',function(){apo=!apo;bA.textContent='apoptoza: '+(apo?'wł.':'wył.');bA.classList.toggle('on',apo);opis()});
  bN.classList.add('on');bA.classList.add('on');[bUV,bT,b5,bR].forEach(function(x){tools.appendChild(x)});[bN,bA].forEach(function(x){t2.appendChild(x)});
  var KOL=['#8fc97a','#f2c14e','#e8913a','#c0392b'],s=svg(440,262,'Model tkanki: komórki zdrowe, zmutowane i nowotworowe');pic.appendChild(s);var kola=[];
  for(var i=0;i<C*Rw;i++){var x=22+(i%C)*41+(Math.floor(i/C)%2?20:0),y=22+Math.floor(i/C)*34,c=S('circle',{cx:x,cy:y,r:15,stroke:'#5b6672','stroke-width':1.2});s.appendChild(c);kola.push(c)}
  var leg=[['zdrowa',0],['1–2 mutacje',2],['nowotworowa (3)',3],['puste (apoptoza)',-1]];
  var lg=H('div','bv-tools');leg.forEach(function(z){lg.appendChild(H('span','bv-score','<span style="display:inline-block;width:11px;height:11px;border-radius:50%;margin:0 5px 0 8px;background:'+(z[1]<0?'#eceff3':KOL[z[1]])+';border:1px solid #5b6672"></span>'+z[0]))});pic.appendChild(lg);
  function sasiedzi(i){var r=Math.floor(i/C),k=i%C,d=r%2?[[0,-1],[0,1],[-1,0],[-1,1],[1,0],[1,1]]:[[0,-1],[0,1],[-1,-1],[-1,0],[1,-1],[1,0]],w=[];
    d.forEach(function(q){var rr=r+q[0],kk=k+q[1];if(rr>=0&&rr<Rw&&kk>=0&&kk<C)w.push(rr*C+kk)});return w}
  function rys(){kola.forEach(function(c,i){var m=cel[i];c.style.fill=m<0?'#eceff3':KOL[m];c.setAttribute('stroke-dasharray',m<0?'3 3':'')});opis()}
  function licz(){var z=0,mu=0,n=0,p=0;cel.forEach(function(m){if(m<0)p++;else if(m===0)z++;else if(m<3)mu++;else n++});return[z,mu,n,p]}
  function opis(){var l=licz();out.className='bv-info'+(l[2]>8?' bad':'');
    out.innerHTML='<b>Dawki UV: '+dawki+' · cykle: '+cykle+' — zdrowe '+l[0]+', zmutowane '+l[1]+', nowotworowe '+l[2]+'</b>'+
     (l[2]?'Komórka z mutacjami w <strong>trzech</strong> genach kontroli nie słucha sygnałów „stop” — dzieli się w każdym cyklu i wypiera sąsiadów. Tak rośnie guz.':
      (!nap||!apo?'Wyłączony hamulec: '+(!nap?'bez naprawy DNA każde uszkodzenie zostaje jako mutacja. ':'')+(!apo?'Bez apoptozy komórki z błędami nie są usuwane. ':'')+'Dawkuj UV i puszczaj cykle — guz pojawi się znacznie szybciej.':
      'Jedna dawka UV prawie nigdy nie tworzy komórki nowotworowej: większość uszkodzeń naprawia się od razu, a komórki z błędami często giną (apoptoza). Potrzeba <strong>wielu</strong> uszkodzeń w <strong>jednej</strong> komórce.'))}
  function uv(){dawki++;var zyw=[];cel.forEach(function(m,i){if(m>=0)zyw.push(i)});
    for(var k=0;k<6&&zyw.length;k++){var i=zyw.splice(Math.floor(Math.random()*zyw.length),1)[0];if(nap&&Math.random()<.8)continue;if(cel[i]<3)cel[i]++}rys()}
  function cykl(n){for(var t=0;t<n;t++){cykle++;var nowe=cel.slice();
    cel.forEach(function(m,i){if(m>=1&&m<3&&apo&&Math.random()<.5)nowe[i]=-1});
    cel.forEach(function(m,i){if(m===3){var s2=sasiedzi(i).filter(function(j){return nowe[j]!==3});if(s2.length)nowe[s2[Math.floor(Math.random()*s2.length)]]=3}});
    nowe.forEach(function(m,i){if(m<0){var z=sasiedzi(i).filter(function(j){return nowe[j]===0});if(z.length&&Math.random()<.6)nowe[i]=0}});
    cel=nowe}rys()}
  function start(){cel=[];for(var i=0;i<C*Rw;i++)cel.push(0);dawki=0;cykle=0;rys()}
  start()}});
})();
