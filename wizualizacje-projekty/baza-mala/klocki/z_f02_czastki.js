/* KLOCEK (przywrócony z commitu 460a00c): model w kontrakcie CHE.VIEW.define przez mostek model_widok.js. */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define||C.EXT_F02M)return;C.EXT_F02M=1;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
var AT={H:['#f8fafc',5],O:['#ef4444',7.5],N:['#3b82f6',7.5],Na:['#a855f7',8],Cl:['#22c55e',8.5],Fe:['#94a3b8',9],Ar:['#f59e0b',7],He:['#facc15',6],C:['#334155',8]};
// drobina = lista atomów [symbol, dx, dy]
var DR={O2:[['O',-5,0],['O',5,0]],N2:[['N',-5,0],['N',5,0]],H2O:[['O',0,0],['H',-7,5],['H',7,5]],Fe:[['Fe',0,0]],Ar:[['Ar',0,0]],He:[['He',0,0]],Na:[['Na',0,0]],Cl:[['Cl',0,0]],olej:[['C',-9,0],['C',0,0],['C',9,0],['H',-9,-7],['H',0,-7],['H',9,-7],['H',-9,7],['H',0,7],['H',9,7]]};
// próbki: [nazwa, klasa, faza górna?, zestawy [[drobina, liczba, obszar 0=całość 1=góra 2=dół, uporządkowanie]], wyjaśnienie]
var P=[
 ['żelazo','pierw',[['Fe',30,0,'krysztal']],'Jeden rodzaj drobin (atomy Fe), w drobinie jeden rodzaj atomów → <b>substancja czysta — pierwiastek</b> (metal: atomy ułożone regularnie).'],
 ['tlen O₂','pierw',[['O2',14,0]],'Jeden rodzaj drobin (cząsteczki O₂), każda z atomów jednego pierwiastka → <b>substancja czysta — pierwiastek (substancja prosta)</b>. Cząsteczka nie znaczy „związek”.'],
 ['woda H₂O','zwiazek',[['H2O',16,0]],'Jeden rodzaj drobin (H₂O), w drobinie dwa rodzaje atomów → <b>substancja czysta — związek chemiczny</b>.'],
 ['woda z lodem','zwiazek',[['H2O',10,1,'krysztal'],['H2O',10,2]],'Dwie fazy (lód i woda), ale <b>jeden rodzaj drobin</b> H₂O → <b>substancja czysta — związek</b>. Liczba faz nie decyduje o czystości!'],
 ['powietrze','jedn',[['N2',12,0],['O2',4,0],['Ar',1,0]],'Kilka rodzajów drobin (N₂, O₂, Ar), wymieszanych równomiernie, jedna faza → <b>mieszanina jednorodna</b>.'],
 ['roztwór soli','jedn',[['H2O',14,0],['Na',3,0],['Cl',3,0]],'Kilka rodzajów drobin (H₂O, jony Na⁺ i Cl⁻), równomiernie, jedna faza → <b>mieszanina jednorodna</b> (roztwór). Wygląda jak woda, a nie jest czysta.'],
 ['woda z olejem','niejedn',[['olej',5,1],['H2O',12,2]],'Dwa rodzaje drobin i <b>dwie fazy</b> (olej na górze, woda na dole) → <b>mieszanina niejednorodna</b>; rozdzielisz ją rozdzielaczem.'],
 ['hel z argonem','jedn',[['He',8,0],['Ar',7,0]],'Dwa rodzaje drobin (atomy He i Ar) — dwa pierwiastki wymieszane, jedna faza gazowa → <b>mieszanina jednorodna</b> (nie związek: atomy nie są ze sobą połączone).']];
var K=[['pierw','pierwiastek'],['zwiazek','związek chemiczny'],['jedn','mieszanina jednorodna'],['niejedn','mieszanina niejednorodna']];
function rnd(s){return function(){s=(s*16807)%2147483647;return(s-1)/2147483646}}
function drob(g,typ,x,y,a){(DR[typ]||[]).forEach(function(q){var c=Math.cos(a),s=Math.sin(a),X=x+q[1]*c-q[2]*s,Y=y+q[1]*s+q[2]*c,A=AT[q[0]];
 g+='<circle cx="'+X.toFixed(1)+'" cy="'+Y.toFixed(1)+'" r="'+A[1]+'" fill="'+A[0]+'" stroke="#334155" stroke-width="1"/>'});return g}
V.define('f02-czastki-v01',{title:'Model cząsteczkowy: substancja czysta czy mieszanina?',tag:'E8',
 hint:'Spójrz na drobiny w naczyniu i odpowiedz: ile rodzajów drobin? ile rodzajów atomów w drobinie? ile faz? Potem wybierz klasyfikację.',foot:'rozszerzenia.js §M',
 build:function(host){host.innerHTML='';var i=0,ok=0,all=0,ord=P.map(function(_,k){return k});
  var top=el('div'),box=el('div'),bar=el('div'),out=el('div');host.append(top,box,bar,out);
  top.style.cssText='display:flex;justify-content:space-between;font:14px Inter,system-ui,sans-serif;margin-bottom:4px';
  bar.style.cssText='display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:8px 0';
  out.style.cssText='font:14px/1.5 Inter,system-ui,sans-serif;border-left:4px solid var(--accent,#0d6868);padding:6px 10px;border-radius:8px;background:var(--surface-soft,#f1f5f9);min-height:44px';
  function b(t,f){var x=el('button',null,t);x.type='button';x.style.cssText='font:14px Inter,system-ui;padding:6px 12px;border-radius:8px;border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff);color:inherit;cursor:pointer';x.onclick=f;bar.appendChild(x);return x}
  K.forEach(function(k){b(k[1],function(){spr(k[0])})});b('Następna →',function(){i=(i+1)%P.length;draw()});
  function draw(){var p=P[ord[i]],R=rnd(7+ord[i]*13),W=360,H=230,x0=40,y0=20,w=280,h=190,g='';
   g+='<rect x="'+x0+'" y="'+y0+'" width="'+w+'" height="'+h+'" rx="14" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>';
   var dwie=p[2].some(function(z){return z[2]});if(dwie)g+='<rect x="'+(x0+2)+'" y="'+(y0+h/2)+'" width="'+(w-4)+'" height="'+(h/2-2)+'" rx="12" fill="#e0f2fe"/><line x1="'+x0+'" x2="'+(x0+w)+'" y1="'+(y0+h/2)+'" y2="'+(y0+h/2)+'" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5 4"/>';
   p[2].forEach(function(z){var ya=z[2]===2?y0+h/2:y0,hh=z[2]?h/2:h;
    if(z[3]==='krysztal'){var n=z[1],cols=Math.ceil(Math.sqrt(n*w/hh)),rows=Math.ceil(n/cols),dx=(w-30)/cols,dy=(hh-20)/Math.max(1,rows),k=0;for(var r=0;r<rows;r++)for(var c=0;c<cols&&k<n;c++,k++)g=drob(g,z[0],x0+15+dx*(c+.5),ya+10+dy*(r+.5),0)}
    else for(var j=0;j<z[1];j++)g=drob(g,z[0],x0+18+R()*(w-36),ya+16+R()*(hh-32),R()*6.28)});
   var leg={};p[2].forEach(function(z){(DR[z[0]]||[]).forEach(function(q){leg[q[0]]=1})});
   var lg=Object.keys(leg).map(function(s,k){return '<circle cx="'+(x0+10+k*58)+'" cy="'+(H-6)+'" r="6" fill="'+AT[s][0]+'" stroke="#334155"/><text x="'+(x0+20+k*58)+'" y="'+(H-2)+'" font-size="12" fill="currentColor">'+s+'</text>'}).join('');
   box.innerHTML='<svg viewBox="0 0 '+W+' '+(H+8)+'" width="100%" style="max-width:520px;display:block;margin:auto" role="img" aria-label="Model cząsteczkowy próbki: '+p[0]+'">'+g+lg+'</svg>';
   top.innerHTML='<span>Próbka '+(i+1)+' / '+P.length+': <b>'+p[0]+'</b></span><span>Wynik: <b>'+ok+' / '+all+'</b></span>';
   out.innerHTML='Policz: ile <b>rodzajów drobin</b>? ile <b>rodzajów atomów</b> w jednej drobinie? ile <b>faz</b>? Potem wybierz klasyfikację.'}
  function spr(k){var p=P[ord[i]],good=k===p[1];all++;if(good)ok++;
   out.innerHTML=(good?'<b style="color:#16a34a">Dobrze!</b> ':'<b style="color:#dc2626">Nie.</b> ')+p[3];top.lastChild.innerHTML='Wynik: <b>'+ok+' / '+all+'</b>'}
  draw()}});
})();
