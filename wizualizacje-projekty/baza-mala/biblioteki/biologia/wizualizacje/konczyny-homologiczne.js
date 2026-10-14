/* viz: konczyny-homologiczne — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],S=BIO.Lh["C.S"],seg=BIO.Lh["C.seg"],svg=BIO.Lh["C.svg"],T=BIO.Lh["C.T"];
BIO.define('konczyny-homologiczne',{opis:'Kończyny przednie człowieka, kreta, wieloryba i nietoperza: te same grupy kości (ramienna, łokciowa i promieniowa, nadgarstek, śródręcze i paliczki) w tych samych kolorach, różne funkcje → narządy homologiczne; tryb „analogia”: skrzydło nietoperza obok skrzydła owada (ta sama funkcja, inna budowa)',
mount:function(el,o){
  var KOL={ram:'#e0a458',prz:'#6aa0d8',nad:'#8fbf6e',pal:'#b884c8'};
  var tools=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  var bA=btn('homologia: 4 kończyny',function(){rysuj(0)}),bB=btn('analogia: nietoperz i owad',function(){rysuj(1)});tools.appendChild(bA);tools.appendChild(bB);
  function limb(s,cx,p,k){var y=34,gr=S('g',{});s.appendChild(gr);
    var tips=[],y3=y+p.h1+p.h2+10;
    for(var i=0;i<5;i++){var a=(i-2)*p.sp*Math.PI/180,L=p.d[i];tips.push([cx+Math.sin(a)*L,y3+6+Math.cos(a)*L])}
    if(p.blona)gr.appendChild(S('path',{d:'M'+(cx-3)+' '+(y+4)+' L'+tips.slice(1).map(function(t){return t[0].toFixed(1)+' '+t[1].toFixed(1)}).join(' L')+' L'+(cx+46)+' '+(y+p.h1+12)+'z',fill:'#c9ccd3',opacity:.45,stroke:'#8c959f'}));
    if(p.pletwa)gr.appendChild(S('path',{d:'M'+(cx-p.hw)+' '+(y+p.h1)+' Q'+(cx-34)+' '+(y3+60)+' '+tips[1][0]+' '+(tips[1][1]+8)+' Q'+cx+' '+(y3+110)+' '+(tips[3][0]+4)+' '+(tips[3][1]+4)+' Q'+(cx+30)+' '+(y3+30)+' '+(cx+p.hw)+' '+(y+p.h1)+'z',fill:'#bcd4e6',opacity:.5,stroke:'#6a8fae'}));
    var g1=S('g',{'data-k':'ram'});g1.appendChild(S('rect',{x:cx-p.hw/2,y:y,width:p.hw,height:p.h1,rx:p.hw/2,fill:KOL.ram,stroke:'#8a5a1c'}));gr.appendChild(g1);
    var g2=S('g',{'data-k':'prz'});[-1,1].forEach(function(z){g2.appendChild(S('rect',{x:cx+z*p.fw-2.6,y:y+p.h1+2,width:5.2*(z<0&&p.lok?.6:1),height:p.h2*(z<0&&p.lok?.45:1),rx:2.6,fill:KOL.prz,stroke:'#2f5f8e'}))});gr.appendChild(g2);
    var g3=S('g',{'data-k':'nad'});[[-5,0],[0,-1],[5,0],[-2.5,5],[2.5,5]].forEach(function(q){g3.appendChild(S('circle',{cx:cx+q[0]*p.nw,cy:y+p.h1+p.h2+6+q[1],r:3.2,fill:KOL.nad,stroke:'#4c7a33'}))});gr.appendChild(g3);
    var g4=S('g',{'data-k':'pal'});
    tips.forEach(function(t,i){var x0=cx+(i-2)*p.nw*2.2,y0=y3+4,seg=i===0?3:4,dx=(t[0]-x0)/seg,dy=(t[1]-y0)/seg;
      for(var j=0;j<seg;j++)g4.appendChild(S('line',{x1:x0+dx*j+dx*.08,y1:y0+dy*j+dy*.08,x2:x0+dx*(j+1)-dx*.08,y2:y0+dy*(j+1)-dy*.08,stroke:KOL.pal,'stroke-width':p.pw,'stroke-linecap':'round'}))});
    gr.appendChild(g4);return gr}
  var P={czlowiek:{h1:66,hw:9,h2:58,fw:5,sp:11,d:[30,46,50,46,36],nw:1,pw:4},
    kret:{h1:30,hw:13,h2:30,fw:7,sp:20,d:[24,30,32,30,24],nw:1.5,pw:6},
    wieloryb:{h1:24,hw:15,h2:28,fw:7,sp:6,d:[26,74,86,66,36],nw:1.4,pw:5,pletwa:1},
    nietoperz:{h1:46,hw:6,h2:70,fw:3,sp:15,d:[14,104,112,100,90],nw:.8,pw:2.6,blona:1,lok:1}};
  var NAZ={czlowiek:['Człowiek — chwytanie',' Długie kości ramienia i przedramienia, ruchoma dłoń z przeciwstawnym kciukiem.'],kret:['Kret — kopanie',' Krótkie, bardzo grube kości i szeroka „łopata” dłoni — duża siła przy małym zasięgu.'],
    wieloryb:['Wieloryb — pływanie',' Krótkie kości ramienia i przedramienia, wydłużone palce z dodatkowymi paliczkami, całość schowana w sztywnej płetwie.'],nietoperz:['Nietoperz — lot',' Bardzo długa kość promieniowa i palce II–V rozpinają błonę lotną; kciuk krótki, z pazurem.'],
    owad:['Skrzydło owada — lot',' Cienki, płaski wyrostek oskórka (chityna) wzmocniony żyłkami. Nie ma w nim kości ani mięśni, wyrasta z grzbietu tułowia, a nie z kończyny. Ta sama funkcja co skrzydło nietoperza, zupełnie inna budowa i pochodzenie → <strong>narządy analogiczne</strong> (podobieństwo powstało niezależnie — konwergencja).'],
    ram:['Kość ramienna',' Jedna kość w ramieniu — w każdej z tych kończyn, w tym samym miejscu, tylko o innej długości i grubości.'],
    prz:['Kość łokciowa i promieniowa',' Dwie kości przedramienia. U kreta krótkie i masywne, u nietoperza promieniowa bardzo długa, a łokciowa szczątkowa.'],
    nad:['Kości nadgarstka',' Grupa drobnych kości między przedramieniem a dłonią — ten sam „zestaw klocków” w każdej kończynie.'],
    pal:['Kości śródręcza i paliczki',' Pięć promieni palców. Ich długość i liczba paliczków zmieniły się zależnie od funkcji: chwytanie, kopanie, pływanie, lot.']};
  function rysuj(tr){BIO.fx.toggle([bA,bB],tr);pic.innerHTML='';var s;
    if(!tr){s=svg(440,300,'Kończyny przednie człowieka, kreta, wieloryba i nietoperza z kośćmi w tych samych kolorach');
      [['czlowiek',52,'człowiek'],['kret',142,'kret'],['wieloryb',236,'wieloryb'],['nietoperz',362,'nietoperz']].forEach(function(z){limb(s,z[1],P[z[0]],z[0]);var et=S('g',{'data-k':z[0]});et.appendChild(T(z[1],14,z[2],{s:13,w:800}));s.appendChild(et)})}
    else{s=svg(440,300,'Skrzydło nietoperza z kośćmi obok skrzydła owada bez kości');limb(s,110,P.nietoperz,'nietoperz');var et=S('g',{'data-k':'nietoperz'});et.appendChild(T(110,14,'nietoperz (skrzydło = kończyna)',{s:12,w:800}));s.appendChild(et);
      var w=S('g',{'data-k':'owad'});w.appendChild(S('path',{d:'M250 70 Q330 40 420 64 Q428 92 400 112 Q330 138 250 84z',fill:'#e6eef7',stroke:'#6a7f99','stroke-width':1.6}));
      ['M252 76 Q330 52 416 66','M254 80 Q330 74 404 104','M256 82 Q320 94 360 122','M300 62 L306 100','M350 56 L356 116','M390 60 L396 108'].forEach(function(d){w.appendChild(S('path',{d:d,fill:'none',stroke:'#6a7f99','stroke-width':1}))});
      w.appendChild(S('ellipse',{cx:250,cy:92,rx:10,ry:20,fill:'#7d8a96'}));s.appendChild(w);s.appendChild(T(334,14,'owad (skrzydło = wyrostek oskórka)',{s:12,w:800}));
      s.appendChild(T(334,170,'brak kości,',{s:12,f:'#c0392b'}));s.appendChild(T(334,186,'chitynowa błona z żyłkami',{s:12,f:'#c0392b'}))}
    pic.appendChild(s);
    var lg=H('div','bv-tools');[['ram','kość ramienna'],['prz','łokciowa i promieniowa'],['nad','nadgarstek'],['pal','śródręcze i paliczki']].forEach(function(z){var c=H('span','bv-btn','<span style="display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:6px;background:'+KOL[z[0]]+'"></span>'+z[1]);c.setAttribute('data-k',z[0]);lg.appendChild(c)});pic.appendChild(lg);
    BIO.fx.info(pic,out,NAZ);out.className='bv-info';
    out.innerHTML=tr?'<b>Ta sama funkcja ≠ wspólne pochodzenie</b>Oba skrzydła służą do lotu, ale skrzydło nietoperza to przekształcona kończyna z kośćmi, a skrzydło owada — wyrostek pancerza bez kości. To narządy <strong>analogiczne</strong>: nie dowodzą bliskiego pokrewieństwa. Kliknij element.'
      :'<b>Ten sam plan budowy, różne funkcje</b>W każdej kończynie są te same grupy kości w tej samej kolejności (kolory). To narządy <strong>homologiczne</strong> — dowód, że ssaki mają wspólnego przodka, a kości zmieniały się z funkcją. Kliknij kość albo zwierzę.'}
  rysuj(o.start==='analogia'?1:0)}});
})();
