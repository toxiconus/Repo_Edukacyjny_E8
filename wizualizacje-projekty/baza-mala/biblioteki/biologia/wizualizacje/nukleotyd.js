/* viz: nukleotyd — grupa A · z dawnego bio-viz.js (rozbij.js) */
(function(){
'use strict';
var BIO=window.BIO;
var svg=BIO.Lh["A.svg"],S=BIO.Lh["A.S"],g=BIO.Lh["A.g"],T=BIO.Lh["A.T"],col=BIO.Lh["A.col"],NT=BIO.Lh["A.NT"],H=BIO.Lh["A.H"],btn=BIO.Lh["A.btn"],fx=BIO.Lh["A.fx"];
BIO.define('nukleotyd',{opis:'Budowa nukleotydu DNA: reszta fosforanowa + deoksyryboza + zasada; opcja zasada="A|T|C|G"',
mount:function(el,o){var b=(o.zasada||'A').toUpperCase();
  function draw(b){var s=svg(320,190,'Nukleotyd DNA z zasadą '+b,[
    S('line',{x1:62,y1:96,x2:118,y2:96,stroke:'var(--phos)','stroke-width':3}),S('line',{x1:168,y1:104,x2:204,y2:96,stroke:'var(--viz-mut)','stroke-width':3}),
    S('g',{'data-k':'P'},[g.phos(44,96,22)]),
    S('g',{'data-k':'cukier'},[g.sugar(143,102,30),T(143,104,'cukier',{s:11,w:700,f:'var(--sugar)'})]),
    T(112,78,'5′',{s:12,w:800,f:'var(--viz-mut)'}),T(128,145,'3′',{s:12,w:800,f:'var(--viz-mut)'}),T(171,145,'1′',{s:11,w:700,f:'var(--viz-mut)'}),
    S('g',{'data-k':'zasada'},[g.ring(b,236,96,26,1)]),
    T(44,140,'reszta',{s:11,f:'var(--phos)'}),T(44,154,'fosforanowa',{s:11,f:'var(--phos)'}),T(143,162,'deoksyryboza',{s:11,f:'var(--sugar)'}),
    T(244,140,'zasada azotowa',{s:11,f:col(b)}),T(244,154,NT[b].n+' ('+NT[b].t+')',{s:11,w:500,f:col(b)}),
    T(160,22,'nukleotyd = fosforan + cukier + zasada',{s:13,w:800})]);return s}
  var tools=H('div','bv-tools'),bs=['A','T','C','G'].map(function(x,i){return btn(x,function(){fx.toggle(bs,i);holder.innerHTML='';holder.appendChild(draw(x));bind()})});
  bs.forEach(function(x){tools.appendChild(x)});fx.toggle(bs,['A','T','C','G'].indexOf(b));el.appendChild(tools);
  var holder=H('div');holder.appendChild(draw(b));el.appendChild(holder);var box=fx.infoBox();el.appendChild(box);
  function bind(){fx.info(holder,box,{
   P:['Reszta fosforanowa','Łączy cukier jednego nukleotydu z cukrem następnego — razem tworzą szkielet nici (szkielet cukrowo-fosforanowy).'],
   cukier:['Deoksyryboza','Cukier pięciowęglowy (deoksy- = „bez jednego tlenu” w porównaniu z rybozą w RNA). Węgle numeruje się 1′–5′: zasada przy 1′, fosforan przy 5′, następny nukleotyd przy 3′.'],
   zasada:['Zasada azotowa','Jedna z czterech: A, T, C, G. To ona „niesie literę” informacji. Puryny (A, G) mają dwa pierścienie, pirymidyny (T, C) — jeden.']})}bind()}});
})();
