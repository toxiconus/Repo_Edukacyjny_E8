/* KLOCEK: regula-krzyzowa — mieszanie roztworów: krzyż (różnice po przekątnych), huśtawka mas, stosunek, gramy, kontrola bilansem. Opcje: brak.
   Przywrócony z modelu r03-krzyz-v01 (commit 460a00c) jako klocek modułowy. */
(function(){
function f(x,d){var p=Math.pow(10,d==null?2:d);return (Math.round(x*p)/p).toString().replace('.',',')}
function gcd(a,b){return b?gcd(b,a%b):a}
var CSS='.kz{font:14px/1.5 Inter,system-ui,sans-serif;color:inherit}.kz .bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:6px 0}.kz label{display:flex;gap:6px;align-items:center}.kz input[type=number]{width:78px;padding:3px 6px;border:1px solid currentColor;border-radius:6px;background:transparent;color:inherit;font:inherit}.kz button{border:1px solid currentColor;background:transparent;color:inherit;border-radius:999px;padding:3px 10px;cursor:pointer;font:inherit;font-size:13px;opacity:.85}.kz button:hover{opacity:1}.kz .nt{border:1px solid rgba(127,127,127,.35);border-radius:10px;padding:8px 12px;margin-top:6px}.kz .bad{color:#dc2626}.kz .ok{color:#16a34a}.kz svg text{fill:currentColor;font-size:15px}.kz .mono{font-family:ui-monospace,monospace}';
function css(){if(document.getElementById('kz-css'))return;var s=el('style');s.id='kz-css';s.textContent=CSS;document.head.appendChild(s)}
var PRE=[['20% + 5% → 10%',20,5,10,300],['30% + woda → 20%',30,0,20,300],['15% + czysta subst. → 32%',100,15,32,250],['40% + 5% → 20%',40,5,20,900],['hydrat CuSO₄·5H₂O (64%) + woda → 16%',64,0,16,500]];
KLOCKI.def('regula-krzyzowa',{opis:'Reguła krzyżowa i huśtawka mas: dla dwóch roztworów i stężenia docelowego pokazuje różnice po przekątnych, stosunek mas, masy w gramach i kontrolę bilansem.',domyslne:{},
 html:function(host){css();host.innerHTML='';host.style.display='block';host.classList.add('kz');var hint=el('div','nt','Wpisz stężenia dwóch roztworów tej samej substancji i stężenie docelowe (musi leżeć między nimi). Woda = 0%, czysta substancja = 100%. Różnice odejmuj po przekątnych — każda liczba należy do roztworu z przeciwnego rogu.');host.appendChild(hint);var c1=20,c2=5,c3=10,M=300;
  var bp=el('div','bar','<b>Przykłady:</b>');PRE.forEach(function(p){var b=el('button',null,p[0]);b.type='button';b.onclick=function(){c1=p[1];c2=p[2];c3=p[3];M=p[4];sync();draw()};bp.appendChild(b)});
  var bi=el('div','bar');function num(lab,v,fn){var l=el('label',null,lab),i=el('input');i.type='number';i.min=0;i.max=100000;i.step='any';i.value=v;i.oninput=function(){var x=parseFloat(String(i.value).replace(',','.'));if(!isNaN(x)){fn(x);draw()}};l.appendChild(i);bi.appendChild(l);return i}
  var i1=num('Cp₁ (mocniejszy) [%]',c1,function(x){c1=x}),i2=num('Cp₂ (słabszy) [%]',c2,function(x){c2=x}),i3=num('Cp₃ (docelowy) [%]',c3,function(x){c3=x}),iM=num('masa końcowa [g]',M,function(x){M=x});
  function sync(){i1.value=c1;i2.value=c2;i3.value=c3;iM.value=M}
  var box=el('div'),info=el('div','nt');host.appendChild(bp);host.appendChild(bi);host.appendChild(box);host.appendChild(info);
  function draw(){var W=640,H=330,s='<svg viewBox="0 0 '+W+' '+H+'" width="100%" role="img" aria-label="Schemat reguły krzyżowej i huśtawka mas">';
   if(!(c1>c3&&c3>c2&&c1<=100&&c2>=0)){box.innerHTML='';info.innerHTML='<b class="bad">Stężenie docelowe musi leżeć między stężeniami składników</b> (Cp₁ > Cp₃ > Cp₂, wszystkie od 0% do 100%). Z roztworów '+f(c1)+'% i '+f(c2)+'% otrzymasz tylko stężenie z przedziału ('+f(Math.min(c1,c2))+'%; '+f(Math.max(c1,c2))+'%).';return}
   var d1=c3-c2,d2=c1-c3,sc=Math.pow(10,4),a=Math.round(d1*sc),b=Math.round(d2*sc),g=gcd(a,b),r1=a/g,r2=b/g,m1=M*d1/(d1+d2),m2=M-m1,s1=m1*c1/100,s2=m2*c2/100,cp=(s1+s2)/M*100;
   var nm2=c2===0?'woda (0%)':f(c2)+'%',nm1=c1===100?'czysta substancja (100%)':f(c1)+'%';
   // krzyż
   s+='<text x="40" y="44" style="font-weight:700">'+nm1+'</text><text x="40" y="164" style="font-weight:700">'+nm2+'</text>';
   s+='<text x="200" y="104" text-anchor="middle" style="font-weight:700;font-size:17px">'+f(c3)+'%</text>';
   s+='<line x1="120" y1="40" x2="290" y2="150" stroke="#2563eb" stroke-width="2"/><line x1="120" y1="160" x2="290" y2="50" stroke="#dc2626" stroke-width="2"/>';
   s+='<text x="300" y="44" style="fill:#dc2626">'+f(c3)+' − '+f(c2)+' = <tspan style="font-weight:700">'+f(d1)+'</tspan> cz. → '+nm1+'</text>';
   s+='<text x="300" y="164" style="fill:#2563eb">'+f(c1)+' − '+f(c3)+' = <tspan style="font-weight:700">'+f(d2)+'</tspan> cz. → '+nm2+'</text>';
   // huśtawka: oś od Cp2 do Cp1, podpora w Cp3
   var L=60,R=580,y=262,X=function(c){return L+(c-c2)/(c1-c2)*(R-L)},xf=X(c3),k=70/Math.max(m1,m2),h1=Math.max(6,m1*k),h2=Math.max(6,m2*k);
   s+='<line x1="'+L+'" y1="'+y+'" x2="'+R+'" y2="'+y+'" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>';
   s+='<path d="M'+xf+' '+(y+2)+' l-14 26 h28 z" fill="#f59e0b"/><text x="'+xf+'" y="'+(y+46)+'" text-anchor="middle">'+f(c3)+'%</text>';
   s+='<rect x="'+(R-22)+'" y="'+(y-2-h1)+'" width="44" height="'+h1+'" rx="4" fill="#dc2626" fill-opacity=".75"/><text x="'+R+'" y="'+(y-8-h1)+'" text-anchor="middle">'+f(m1,1)+' g</text><text x="'+R+'" y="'+(y+24)+'" text-anchor="middle">'+f(c1)+'%</text>';
   s+='<rect x="'+(L-22)+'" y="'+(y-2-h2)+'" width="44" height="'+h2+'" rx="4" fill="#2563eb" fill-opacity=".75"/><text x="'+L+'" y="'+(y-8-h2)+'" text-anchor="middle">'+f(m2,1)+' g</text><text x="'+L+'" y="'+(y+24)+'" text-anchor="middle">'+f(c2)+'%</text>';
   s+='<text x="'+((L+xf)/2)+'" y="'+(y-10)+'" text-anchor="middle" style="font-size:13px">'+f(d1)+'</text><text x="'+((xf+R)/2)+'" y="'+(y-10)+'" text-anchor="middle" style="font-size:13px">'+f(d2)+'</text>';
   box.innerHTML=s+'</svg>';
   info.innerHTML='<b>Stosunek mas</b> m('+nm1+') : m('+nm2+') = '+f(d1)+' : '+f(d2)+(g>1||r1+r2<20?' = <b>'+r1+' : '+r2+'</b>':'')+'.<br>'+
    'Masa końcowa '+f(M,1)+' g → '+nm1+': <b>'+f(m1,2)+' g</b>, '+nm2+': <b>'+f(m2,2)+' g</b>.<br>'+
    '<b>Huśtawka:</b> więcej potrzeba tego roztworu, który leży <i>bliżej</i> stężenia docelowego (masy odwrotnie proporcjonalne do odległości od '+f(c3)+'%).<br>'+
    '<b>Kontrola bilansem:</b> ms = '+f(m1,2)+' · '+f(c1)+'% + '+f(m2,2)+' · '+f(c2)+'% = '+f(s1,2)+' g + '+f(s2,2)+' g = '+f(s1+s2,2)+' g; Cp = '+f(s1+s2,2)+' ÷ '+f(M,1)+' · 100% = <b class="ok">'+f(cp,2)+'%</b>.'}
  draw()}});
})();
