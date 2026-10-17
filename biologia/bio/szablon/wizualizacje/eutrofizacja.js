/* viz: eutrofizacja — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('eutrofizacja',{opis:'Eutrofizacja jeziora w 5 etapach (suwak): czysta woda → spływ nawozów (azotany, fosforany) → zakwit glonów → rozkład martwych glonów przez bakterie zużywające tlen → przyducha i śnięcie ryb; wskaźnik tlenu i przejrzystości wody na każdym etapie',
mount:function(el,o){
  var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=4;rng.value=o.etap||0;rng.setAttribute('aria-label','Etap eutrofizacji');rng.style.flex='1 1 160px';
  var lab=H('span','bv-score','');tools.appendChild(rng);tools.appendChild(lab);var pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  var E=[
   ['1. Czyste jezioro','Woda przejrzysta, światło dociera głęboko, rośliny podwodne produkują tlen. Biogenów (azotu, fosforu) jest mało — to one ograniczają wzrost glonów.',90,90,'#7fb3d5',2,4],
   ['2. Spływ biogenów','Deszcz spłukuje z pól nawozy (azotany, fosforany), do wody trafiają też ścieki i detergenty z fosforanami. Woda wygląda jeszcze dobrze, ale „karma” dla glonów już jest.',85,80,'#7fb3d5',6,4],
   ['3. Zakwit glonów','Glony i sinice rozmnażają się masowo: woda zielona i mętna, światło nie dociera w głąb, rośliny przy dnie obumierają. Na powierzchni w dzień tlenu bywa sporo, w głębi — coraz mniej.',60,25,'#5f9e5a',40,3],
   ['4. Rozkład martwych glonów','Krótko żyjące glony opadają na dno. Bakterie (destruenci) rozkładają tę masę i <strong>zużywają tlen</strong> przy oddychaniu — w głębi tlenu ubywa szybko.',25,20,'#6f8f4a',30,2],
   ['5. Przyducha','Brak tlenu przy dnie: ryby i inne zwierzęta giną (śnięcie ryb), bakterie beztlenowe wytwarzają cuchnący siarkowodór. Jezioro zarasta i wypłyca się szybciej niż naturalnie.',5,15,'#5c6b3a',20,0]];
  function rys(){var k=+rng.value,e=E[k];lab.textContent=e[0];pic.innerHTML='';var s=svg(440,250,'Jezioro: etap '+e[0]);pic.appendChild(s);
    s.appendChild(S('rect',{x:0,y:0,width:440,height:60,fill:'#eef6fb'}));
    s.appendChild(S('path',{d:'M0 60 L120 60 L130 54 L160 50 L180 60 L440 60 L440 250 L0 250z',fill:'#c8b48a'}));
    s.appendChild(S('path',{d:'M40 60 Q60 210 220 214 Q380 210 400 60z',fill:e[4],opacity:.85}));
    s.appendChild(S('path',{d:'M0 44 L36 40 L100 36 L130 38 L130 54 L0 60z',fill:'#b5cf7a'}));s.appendChild(T(64,30,'pole',{s:11}));
    if(k>=1){for(var i=0;i<9;i++){s.appendChild(S('circle',{cx:70+i*10,cy:44+(i%3)*4,r:2.6,fill:i%2?'#3b6fd6':'#c0392b'}))}s.appendChild(S('path',{d:'M110 52 Q130 60 150 72',fill:'none',stroke:'#3b6fd6','stroke-width':2,'stroke-dasharray':'4 3'}));s.appendChild(T(118,90,'N, P',{s:11,w:800,f:'#3b6fd6'}))}
    for(var j=0;j<e[5];j++){var gx=70+((j*53)%300),gy=66+((j*29)%(k===2?40:120));s.appendChild(S('circle',{cx:gx,cy:gy,r:k===2?4:3,fill:k>=3?'#7a8a4a':'#2f8f3a',opacity:.9}))}
    if(k>=3){for(var m=0;m<10;m++)s.appendChild(S('ellipse',{cx:150+m*14,cy:206-(m%2)*3,rx:7,ry:3,fill:'#5a5a3a'}));s.appendChild(T(220,232,'martwe glony + bakterie (zużywają O₂)',{s:11,f:'#fff',w:700}))}
    if(k<=1){[0,1,2].forEach(function(r){var px=120+r*70;s.appendChild(S('path',{d:'M'+px+' 205 q-4 -30 2 -60 M'+(px+8)+' 205 q4 -24 -2 -48',fill:'none',stroke:'#2f7d32','stroke-width':2}))})}
    for(var f=0;f<e[6];f++){var fx2=130+f*48,fy=120+(f%2)*24;s.appendChild(S('path',{d:'M'+fx2+' '+fy+' q14 -9 28 0 q-14 9 -28 0z M'+(fx2+28)+' '+fy+' l8 -6 l0 12z',fill:'#e8913a',stroke:'#9a4c12'}))}
    if(k===4){[0,1,2].forEach(function(f){var fx3=160+f*60;s.appendChild(S('path',{d:'M'+fx3+' 66 q14 -9 28 0 q-14 9 -28 0z',fill:'#bbb',stroke:'#777',transform:'rotate(180 '+(fx3+14)+' 66)'}))});s.appendChild(T(250,52,'śnięte ryby',{s:11,f:'#c0392b',w:800}))}
    function pasek(y,t,v,kol){s.appendChild(T(330,y,t,{s:11,a:'start',w:700}));s.appendChild(S('rect',{x:330,y:y+6,width:100,height:9,rx:4,fill:'#e3e7ec'}));s.appendChild(S('rect',{x:330,y:y+6,width:v,height:9,rx:4,fill:kol}))}
    s.appendChild(S('rect',{x:322,y:2,width:116,height:58,rx:8,fill:'#fff',opacity:.85}));pasek(12,'tlen w głębi',e[2],e[2]<30?'#c0392b':'#2e8b57');pasek(36,'przejrzystość',e[3],'#3b6fd6');
    out.className='bv-info'+(k===4?' bad':'');out.innerHTML='<b>'+e[0]+'</b>'+e[1]+(k===4?' <em>Zapobieganie: mniej nawozów i w odpowiednim czasie, pasy zieleni wzdłuż brzegów, oczyszczalnie ścieków usuwające fosfor, detergenty bez fosforanów.</em>':'')}
  rng.addEventListener('input',rys);rys()}});
})();
