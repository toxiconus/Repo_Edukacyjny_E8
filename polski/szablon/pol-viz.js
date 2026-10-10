/* pol-viz.js — grafiki interaktywne lekcji języka polskiego (wklejane przez narzedzia/lekcja_html.py -p pol).
   Użycie w md:  @viz <id> {opcja="wartość"} | Tytuł | podpis   + obowiązkowa linia @opis.
   Katalog: polski/szablon/POL_KATALOG_GRAFIK.md. Nowa grafika: POL.define('id',{opis,mount(el,opt)}).
   Zasady: działa offline, na telefonie (od 360 px), klawiatura (Tab/Enter), kolory z motywu + stałe kolory części zdania. */
(function(){
if(window.POL)return;var POL=window.POL={},REG={};
POL.define=function(id,d){REG[id]=d};
function H(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function btn(t,f,c){var b=H('button','pv-btn'+(c?' '+c:''),t);b.type='button';if(f)b.onclick=f;return b}
POL.H=H;POL.btn=btn;
var css=H('style');css.id='pol-viz-css';css.textContent=
'.pv{font:15px/1.5 Inter,system-ui,sans-serif;color:var(--text,#1f2328)}.pv *{box-sizing:border-box}'+
'.pv-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:4px 0 10px}.pv-bar b{margin-right:4px}'+
'.pv-btn{font:600 13.5px/1.2 Inter,system-ui,sans-serif;padding:7px 11px;border-radius:9px;border:1px solid var(--border,#d0d7de);background:var(--surface,#fff);color:inherit;cursor:pointer;min-height:36px}'+
'.pv-btn:hover{border-color:var(--accent,#7a2848)}.pv-btn.on{background:var(--accent,#7a2848);border-color:var(--accent,#7a2848);color:#fff}.pv-btn:focus-visible{outline:3px solid var(--accent-glow,rgba(122,40,72,.3));outline-offset:2px}'+
'.pv-info{margin-top:10px;padding:10px 12px;border-left:4px solid var(--accent,#7a2848);background:var(--surface-soft,#f6f8fa);border-radius:8px;font-size:14px;line-height:1.55}'+
'.pv-info.ok{border-left-color:#1f883d}.pv-info.bad{border-left-color:#cf222e}'+
'.pv-zd{display:flex;flex-wrap:wrap;gap:24px 4px;align-items:flex-end;font:500 20px/1.3 Georgia,"Times New Roman",serif;padding:14px 6px 18px;background:var(--surface,#fff);border:1px solid var(--border,#d0d7de);border-radius:12px;justify-content:center}'+
'.pv-w{padding:2px 4px 7px;border-radius:6px;cursor:pointer;position:relative;background-repeat:no-repeat;background-position:0 100%;background-size:100% 7px;border:1px dashed transparent}'+
'.pv-w:hover{background-color:var(--accent-soft,#f6e9ee)}.pv-w.dot{font-weight:400}.pv-w:focus-visible{outline:2px solid var(--accent,#7a2848)}'+
'.pv-w.ok{background-color:#dafbe1}.pv-w.zle{background-color:#ffebe9;border-color:#cf222e}'+
'.pv-w small{position:absolute;left:50%;transform:translateX(-50%);top:-15px;font:600 10.5px/1 Inter,system-ui,sans-serif;white-space:nowrap;color:var(--text-soft,#57606a)}'+
'.pv-leg{display:flex;flex-wrap:wrap;gap:6px}.pv-leg .pv-btn{display:flex;flex-direction:column;align-items:center;gap:3px}.pv-leg i{display:block;width:44px;height:7px;background-repeat:no-repeat;background-size:100% 7px}'+
'.pv-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;font-size:14px;margin-bottom:6px}'+
'.pv-tab{width:100%;border-collapse:collapse;font-size:14px;margin-top:8px}.pv-tab td,.pv-tab th{padding:5px 7px;border-bottom:1px solid var(--border,#d0d7de);text-align:left}'+
'.pv-svg{width:100%;height:auto;display:block}.pv-svg text{font-family:Inter,system-ui,sans-serif}'+
'@media(max-width:520px){.pv-zd{font-size:17px}.pv-btn{padding:6px 9px;font-size:13px}.pv-tab{font-size:12.5px}.pv-tab td,.pv-tab th{padding:4px 3px}}.pv-hint{display:none;font-size:12px;color:var(--text-soft,#57606a);text-align:center}@media(max-width:520px){.pv-hint{display:block}}.pv-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}.pv-scroll .pv-svg{min-width:min(540px,100%)}@media(max-width:520px){.pv-scroll .pv-svg{min-width:520px}}';
document.head.appendChild(css);

/* ---------- części zdania: role, kolory, podkreślenia szkolne ---------- */
var R={P:{n:'podmiot',k:'#0969da',kr:'kto? co?'},O:{n:'orzeczenie',k:'#cf222e',kr:'co robi? co się z nim dzieje? jaki jest? kim jest?'},
 Prz:{n:'przydawka',k:'#1a7f37',kr:'jaki? który? czyj? ile? z czego?'},D:{n:'dopełnienie',k:'#8250df',kr:'pytania przypadków zależnych: kogo? czego? komu? kim? czym? o czym?…'},
 Ok:{n:'okolicznik',k:'#bc4c00',kr:'gdzie? kiedy? jak? dlaczego? po co? w jakim stopniu?'}};
var ROLE=['P','O','Prz','D','Ok'];
function svgUrl(s){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="7" viewBox="0 0 24 7">'+s+'</svg>')+'")'}
function linia(r){var k=R[r].k;return{   // podkreślenia jak w szkole: podmiot —, orzeczenie ═, przydawka ~, dopełnienie - - -, okolicznik -·-·
 P:svgUrl('<line x1="0" y1="5" x2="24" y2="5" stroke="'+k+'" stroke-width="2"/>'),
 O:svgUrl('<line x1="0" y1="2" x2="24" y2="2" stroke="'+k+'" stroke-width="1.6"/><line x1="0" y1="6" x2="24" y2="6" stroke="'+k+'" stroke-width="1.6"/>'),
 Prz:svgUrl('<path d="M0 4 Q3 1 6 4 T12 4 T18 4 T24 4" fill="none" stroke="'+k+'" stroke-width="1.8"/>'),
 D:svgUrl('<line x1="1" y1="5" x2="9" y2="5" stroke="'+k+'" stroke-width="2"/><line x1="13" y1="5" x2="21" y2="5" stroke="'+k+'" stroke-width="2"/>'),
 Ok:svgUrl('<line x1="1" y1="5" x2="10" y2="5" stroke="'+k+'" stroke-width="2"/><circle cx="15" cy="5" r="1.4" fill="'+k+'"/><line x1="19" y1="5" x2="24" y2="5" stroke="'+k+'" stroke-width="2"/>')}[r]}
POL.R=R;POL.linia=linia;
function podkresl(e,r){e.style.backgroundImage=r?linia(r):'';e.style.backgroundRepeat=r==='O'||r==='P'?'no-repeat':'repeat-x';e.style.backgroundSize=r==='O'||r==='P'?'100% 7px':'24px 7px'}

/* Zdania: [tekst, rola, wyraz nadrzędny, pytanie, grupa?]; uwaga = zdanie pod rozwiązaniem. Przykłady to parafrazy sytuacji z lektur. */
var ZD=[
 {z:'Wczoraj młodsza siostra szybko przeczytała ciekawą książkę w pokoju.',w:[['Wczoraj','Ok','przeczytała','kiedy?'],['młodsza','Prz','siostra','która?'],['siostra','P','przeczytała','kto?'],['szybko','Ok','przeczytała','jak?'],['przeczytała','O'],['ciekawą','Prz','książkę','jaką?'],['książkę','D','przeczytała','co?'],['w pokoju','Ok','przeczytała','gdzie?']],u:'Wzór rozbioru z lekcji: najpierw orzeczenie, potem podmiot, potem określenia zależne.'},
 {n:1,z:'Mały Książę uważnie słuchał opowieści lisa.',l:'„Mały Książę”',w:[['Mały Książę','P','słuchał','kto?'],['uważnie','Ok','słuchał','jak?'],['słuchał','O'],['opowieści','D','słuchał','czego?'],['lisa','Prz','opowieści','czyjej?']],u:'„Mały Książę” to imię bohatera (nazwa własna) — cała nazwa jest podmiotem. „Lisa” określa rzeczownik „opowieści”, więc jest przydawką, nie dopełnieniem.'},
 {z:'Skąpy Scrooge liczył pieniądze w zimnym kantorze.',l:'„Opowieść wigilijna”',w:[['Skąpy','Prz','Scrooge','jaki?'],['Scrooge','P','liczył','kto?'],['liczył','O'],['pieniądze','D','liczył','co?'],['w','Ok','liczył','gdzie?',1],['zimnym','Prz','kantorze','w jakim?'],['kantorze','Ok','liczył','gdzie?',1]],u:'„W kantorze” to jeden okolicznik miejsca (wyrażenie przyimkowe), a „zimnym” — przydawka wewnątrz niego.'},
 {z:'Nie było Nemeczka na Placu Broni.',l:'„Chłopcy z Placu Broni”',w:[['Nie','O',null,null,1],['było','O',null,null,1],['Nemeczka','P','nie było','kogo nie było?'],['na Placu Broni','Ok','nie było','gdzie?']],u:'W tradycyjnej analizie szkolnej „Nemeczka” (dopełniacz) to <b>podmiot logiczny</b> — przy zaprzeczonym „być” podmiot przechodzi do dopełniacza (por. „Nemeczek był na placu”). Orzeczenie: „nie było”. Część opracowań uznaje to zdanie za bezpodmiotowe — na egzaminie podaj przyjętą konwencję.'},
 {n:1,z:'Balladyna została królową.',l:'„Balladyna”',w:[['Balladyna','P','została królową','kto?'],['została','O',null,null,1],['królową','O',null,null,1]],u:'<b>Orzeczenie imienne</b>: łącznik „została” + orzecznik „królową”. Podkreślamy oba wyrazy jako jedno orzeczenie.'},
 {n:1,z:'Rudy był odważnym harcerzem.',l:'„Kamienie na szaniec”',w:[['Rudy','P','był harcerzem','kto?'],['był','O',null,null,1],['odważnym','Prz','harcerzem','jakim?'],['harcerzem','O',null,null,1]],u:'Orzeczenie imienne „był harcerzem”; „odważnym” określa orzecznik „harcerzem”, więc jest przydawką.'},
 {z:'Wieczorem wróciłem do zamku.',w:[['Wieczorem','Ok','wróciłem','kiedy?'],['wróciłem','O'],['do zamku','Ok','wróciłem','dokąd?']],u:'Podmiotu nie ma w zdaniu, ale da się go odtworzyć z formy czasownika: <b>podmiot domyślny „ja”</b>. To nie jest zdanie bezpodmiotowe.'},
 {z:'Nad Soplicowem zmierzchało.',l:'„Pan Tadeusz”',w:[['Nad Soplicowem','Ok','zmierzchało','gdzie?'],['zmierzchało','O']],u:'<b>Zdanie bezpodmiotowe</b>: czasownik „zmierzchało” nazywa zjawisko bez wykonawcy — podmiotu nie da się dodać.'},
 {n:1,z:'Boka czekał na kolegów przed szkołą.',l:'„Chłopcy z Placu Broni”',w:[['Boka','P','czekał','kto?'],['czekał','O'],['na kolegów','D','czekał','na kogo?'],['przed szkołą','Ok','czekał','gdzie?']],u:'Pułapka: „na kolegów” wygląda jak miejsce, ale czasownik „czekać” <b>wymaga</b> dopełnienia „na kogo? na co?”. „Przed szkołą” — okolicznik miejsca.'},
 {n:1,z:'Hrabia rozmawiał z Telimeną o sztuce.',l:'„Pan Tadeusz”',w:[['Hrabia','P','rozmawiał','kto?'],['rozmawiał','O'],['z Telimeną','D','rozmawiał','z kim?'],['o sztuce','D','rozmawiał','o czym?']],u:'Oba wyrażenia przyimkowe są dopełnieniami: odpowiadają na pytania przypadków (z kim? o czym?) i uzupełniają czasownik „rozmawiać”.'},
 {n:1,z:'Bilbo bardzo bał się smoka.',l:'„Hobbit”',w:[['Bilbo','P','bał się','kto?'],['bardzo','Ok','bał się','w jakim stopniu?'],['bał','O',null,null,1],['się','O',null,null,1],['smoka','D','bał się','kogo?']],u:'„Bał się” — orzeczenie z zaimkiem zwrotnym „się” (podkreślamy razem). „Bardzo” — okolicznik stopnia.'},
 {z:'Stary latarnik czytał wieczorem polską książkę.',l:'„Latarnik”',w:[['Stary','Prz','latarnik','jaki?'],['latarnik','P','czytał','kto?'],['czytał','O'],['wieczorem','Ok','czytał','kiedy?'],['polską','Prz','książkę','jaką?'],['książkę','D','czytał','co?']],u:'Dwie przydawki określają dwa różne rzeczowniki: „stary” — podmiot, „polską” — dopełnienie.'}];
POL.ZDANIA=ZD;
function grupy(z){var g=[],m={};z.w.forEach(function(w,i){var key=w[4]?'g'+w[4]:'i'+i;if(!(key in m)){m[key]=g.length;g.push({i:[i],r:w[1],t:[w[0]],h:w[2],q:w[3]})}else{var x=g[m[key]];x.i.push(i);x.t.push(w[0]);if(w[2]&&!x.h){x.h=w[2];x.q=w[3]}}});return g}

/* ---------- 1. trener rozbioru: wybierz część zdania i kliknij wyrazy ---------- */
POL.define('rozbior-zdania',{opis:'Trener rozbioru: wybierz część zdania (kolor + podkreślenie szkolne) i kliknij wyrazy; sprawdzenie, pytania od wyrazu nadrzędnego, pułapki',
mount:function(el,o){el.classList.add('pv');var nr=+(o.start||0)%ZD.length,role='O',ans={},ok=0,all=0,checked=false;
 var top=H('div','pv-top'),leg=H('div','pv-leg'),zd=H('div','pv-zd'),bar=H('div','pv-bar'),out=H('div','pv-info');el.append(top,leg,zd,bar,out);
 ROLE.forEach(function(r){var b=btn('<span>'+R[r].n+'</span><i></i>',function(){role=r;rys()});b.dataset.r=r;b.querySelector('i').style.backgroundImage=linia(r);if(r!=='O'&&r!=='P'){b.querySelector('i').style.backgroundRepeat='repeat-x';b.querySelector('i').style.backgroundSize='24px 7px'}b.title=R[r].kr;leg.appendChild(b)});
 var gumka=btn('<span>gumka</span><i></i>',function(){role='';rys()});gumka.dataset.r='';leg.appendChild(gumka);
 bar.append(btn('Sprawdź',spr,'on'),btn('Pokaż rozwiązanie',function(){var z=ZD[nr];grupy(z).forEach(function(g){g.i.forEach(function(i){ans[i]=g.r})});checked=true;rys(true)}),btn('Wyczyść',function(){ans={};checked=false;rys()}),btn('Następne zdanie →',function(){nr=(nr+1)%ZD.length;ans={};checked=false;rys()}));
 function rys(pokaz){var z=ZD[nr],G=grupy(z);[].forEach.call(leg.children,function(b){b.classList.toggle('on',b.dataset.r===role)});
  top.innerHTML='<span>Zdanie <b>'+(nr+1)+'</b> z '+ZD.length+(z.l?' · <i>'+z.l+'</i>':'')+'</span><span>Wynik: <b>'+ok+' / '+all+'</b></span>';
  zd.innerHTML='';z.w.forEach(function(w,i){var s=H('span','pv-w',w[0]);s.tabIndex=0;s.setAttribute('role','button');var r=ans[i];podkresl(s,r);
   if(r)s.setAttribute('aria-label',w[0]+' — '+R[r].n);
   if(checked){var g=G.filter(function(x){return x.i.indexOf(i)>=0})[0];s.classList.add(r===g.r?'ok':'zle');if(pokaz||r!==g.r)s.appendChild(H('small',null,R[g.r].n))}
   function klik(){var g=G.filter(function(x){return x.i.indexOf(i)>=0})[0];g.i.forEach(function(j){if(role)ans[j]=role;else delete ans[j]});checked=false;rys()}
   s.onclick=klik;s.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();klik()}};zd.appendChild(s);zd.appendChild(document.createTextNode(' '))});
  if(!checked){out.className='pv-info';out.innerHTML='<b>Krok 1:</b> wybierz <b>orzeczenie</b> i kliknij wyraz, który mówi, co się dzieje. <b>Krok 2:</b> zapytaj od orzeczenia <i>kto? co?</i> — to podmiot. <b>Krok 3:</b> od orzeczenia i rzeczowników zadawaj kolejne pytania. Wyrażenie przyimkowe („w pokoju”) zaznaczasz jednym kliknięciem.'}}
 function spr(){var z=ZD[nr],G=grupy(z),dob=0,brak=[];G.forEach(function(g){if(ans[g.i[0]]===g.r)dob++;else brak.push(g)});all++;if(dob===G.length)ok++;checked=true;rys();
  var pyt=G.filter(function(g){return g.q}).map(function(g){return '<tr><td>'+(g.h||'')+'</td><td><i>'+g.q+'</i></td><td><b>'+g.t.join(' ')+'</b></td><td style="color:'+R[g.r].k+'">'+R[g.r].n+'</td></tr>'}).join('');
  out.className='pv-info '+(dob===G.length?'ok':'bad');
  out.innerHTML=(dob===G.length?'<b>Wszystko dobrze!</b> ':'<b>Dobrze: '+dob+' z '+G.length+'.</b> Czerwone ramki — popraw. ')+(z.u?z.u:'')+
   '<table class="pv-tab"><tr><th>od wyrazu</th><th>pytanie</th><th>odpowiedź</th><th>część zdania</th></tr>'+pyt+'</table>'}
 rys()}});

/* ---------- 2. wykres zdania krok po kroku ---------- */
POL.define('wykres-zdania',{opis:'Wykres zdania pojedynczego: związek główny (podmiot ═ orzeczenie) na górze, określenia pod wyrazami nadrzędnymi, na liniach pytania; odsłanianie krok po kroku',
mount:function(el,o){el.classList.add('pv');var nr=+(o.start||0)%ZD.length,krok=99;
 var bar=H('div','pv-bar'),wyb=H('select');wyb.className='pv-btn';wyb.setAttribute('aria-label','Wybierz zdanie');ZD.forEach(function(z,i){var op=H('option',null,(i+1)+'. '+z.z);op.value=i;wyb.appendChild(op)});wyb.value=nr;wyb.style.maxWidth='100%';
 var nast=btn('Następny krok ▶',function(){krok++;rys()}),od=btn('Od początku',function(){krok=1;rys()}),cale=btn('Cały wykres',function(){krok=99;rys()});
 bar.append(wyb,od,nast,cale);var pic=H('div','pv-scroll'),hint=H('div','pv-hint','↔ przesuń wykres w bok'),out=H('div','pv-info');el.append(bar,pic,hint,out);wyb.onchange=function(){nr=+wyb.value;krok=1;rys()};
 function drzewo(z){var G=grupy(z),txt=function(g){var t=g.t.join(' ');return g.i[0]===0&&!z.n?t.charAt(0).toLowerCase()+t.slice(1):t},O=G.filter(function(g){return g.r==='O'})[0],P=G.filter(function(g){return g.r==='P'})[0];
  var nodes=G.map(function(g){return{g:g,t:txt(g),kids:[]}}),byT={};nodes.forEach(function(n){byT[n.t.toLowerCase()]=n});
  nodes.forEach(function(n){if(n.g.r==='O'||n.g.r==='P')return;var h=(n.g.h||'').toLowerCase();if(!h)return;if(byT[h]){byT[h].kids.push(n);return}
   var hh=nodes.filter(function(x){var t=x.t.toLowerCase();return x!==n&&(t.split(' ').indexOf(h)>=0||h.split(' ').indexOf(t.split(' ')[0])>=0&&t.split(' ')[0].length>2)})[0];if(hh)hh.kids.push(n)});
  return{O:O&&byT[txt(O).toLowerCase()],P:P&&byT[txt(P).toLowerCase()],G:G}}
 function rys(){var z=ZD[nr],T=drzewo(z),W=0,poz=[];
  // układ: szerokość poddrzewa, kolejność odsłaniania: O, P, potem wszerz
  var kol=[];if(T.O)kol.push(T.O);if(T.P)kol.push(T.P);for(var q=0;q<kol.length;q++)kol[q].kids.forEach(function(k){if(kol.indexOf(k)<0)kol.push(k)});
  var widac=kol.slice(0,Math.max(1,krok));
  function szer(n){var w=Math.max(n.t.length*8.6+24,70);n.w=w;var s=0;n.kids.forEach(function(k){s+=szer(k)+14});n.sw=Math.max(w,s-14);return n.sw}
  function uloz(n,x,y){n.x=x+n.sw/2;n.y=y;var cx=x+(n.sw-(n.kids.reduce(function(a,k){return a+k.sw+14},0)-14))/2;n.kids.forEach(function(k){uloz(k,cx,y+92);cx+=k.sw+14})}
  var top=[T.P,T.O].filter(Boolean),x=10;top.forEach(function(n){szer(n);uloz(n,x,24);x+=n.sw+120});W=Math.max(320,x-110);
  var Hh=0;kol.forEach(function(n){Hh=Math.max(Hh,n.y+40)});
  var s='<svg class="pv-svg" style="max-width:'+Math.round(W*1.15)+'px;margin:0 auto" viewBox="0 0 '+W+' '+(Hh+14)+'" role="img" aria-label="Wykres zdania: '+z.z.replace(/"/g,'')+'">';
  if(T.P&&T.O&&widac.indexOf(T.P)>=0)s+='<line x1="'+(T.P.x+T.P.w/2)+'" y1="'+(T.P.y+14)+'" x2="'+(T.O.x-T.O.w/2)+'" y2="'+(T.O.y+14)+'" stroke="#57606a" stroke-width="1.6"/><line x1="'+(T.P.x+T.P.w/2)+'" y1="'+(T.P.y+19)+'" x2="'+(T.O.x-T.O.w/2)+'" y2="'+(T.O.y+19)+'" stroke="#57606a" stroke-width="1.6"/><text x="'+((T.P.x+T.P.w/2+T.O.x-T.O.w/2)/2)+'" y="'+(T.P.y+8)+'" text-anchor="middle" font-size="10.5" fill="#57606a">związek główny</text>';
  kol.forEach(function(n){n.kids.forEach(function(k){if(widac.indexOf(k)<0)return;s+='<line x1="'+n.x+'" y1="'+(n.y+34)+'" x2="'+k.x+'" y2="'+(k.y)+'" stroke="#8c959f" stroke-width="1.4"/><text x="'+((n.x+k.x)/2+(k.x>=n.x?6:-6))+'" y="'+((n.y+34+k.y)/2+4)+'" text-anchor="'+(k.x>=n.x?'start':'end')+'" font-size="12" font-style="italic" fill="#57606a">'+(k.g.q||'')+'</text>'})});
  widac.forEach(function(n){var k=R[n.g.r].k;s+='<rect x="'+(n.x-n.w/2)+'" y="'+n.y+'" width="'+n.w+'" height="34" rx="8" fill="#fff" stroke="'+k+'" stroke-width="2"/><text x="'+n.x+'" y="'+(n.y+16)+'" text-anchor="middle" font-size="14.5" font-weight="700" fill="#1f2328">'+n.t+'</text><text x="'+n.x+'" y="'+(n.y+29)+'" text-anchor="middle" font-size="10" fill="'+k+'">'+R[n.g.r].n+'</text>'});
  s+='</svg>';pic.innerHTML=s;
  var n=widac[widac.length-1],koniec=widac.length>=kol.length;nast.disabled=koniec;
  out.innerHTML=koniec?('<b>Gotowe.</b> '+(z.u||'')+(T.P?'':' <br><b>Brak podmiotu na wykresie</b> — zobacz uwagę wyżej (podmiot domyślny albo zdanie bezpodmiotowe).')):
   (widac.length===1?'<b>Krok 1. Orzeczenie:</b> „'+n.t+'” — mówi, co się dzieje. Od niego zaczynamy.':n===T.P?'<b>Krok 2. Podmiot:</b> pytamy od orzeczenia <i>'+(n.g.q||'kto? co?')+'</i> → „'+n.t+'”. Podmiot i orzeczenie tworzą <b>związek główny</b> (dwie kreski).':'<b>Krok '+widac.length+'.</b> Od wyrazu „'+(n.g.h||'')+'” pytamy <i>'+(n.g.q||'')+'</i> → „'+n.t+'” — '+R[n.g.r].n+'.')}
 krok=o.krok==='caly'?99:1;rys()}});

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountAll);else mountAll();
function mountAll(){document.querySelectorAll('figure[data-viz]').forEach(function(f){if(f.dataset.on)return;f.dataset.on=1;var id=f.getAttribute('data-viz'),d=REG[id],body=f.querySelector('.lk-fig-body')||f,o={};
 try{o=JSON.parse(f.getAttribute('data-opt')||'{}')}catch(e){}if(!d){body.textContent='Brak grafiki „'+id+'” w pol-viz.js';return}body.style.padding='12px';d.mount(body,o)})}
POL.mountAll=mountAll;
})();
