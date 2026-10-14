V.define('fiz-ladunek-v01',{title:'Bilans ładunku: dotyk, uziemienie, zasada zachowania ładunku, liczba elektronów',tag:'FIZ',
 hint:'Ustaw ładunki kul i jednostkę (C, mC, µC, nC albo ładunki elementarne e). Dotykaj kule parami lub wszystkie naraz, uziemiaj. Panel „Bilans” zapisuje każdą operację jak w zeszycie: przed → po, suma z nawiasami, ile elektronów przepłynęło i w którą stronę. Kafelki + i − pokazują, jak ładunki się znoszą. Opcja LO: kule różnej wielkości (wyrównanie potencjałów).',
 foot:'Model: CHE.PHYS.electro.contact (q_i = Q·R_i/ΣR; identyczne kule — po równo), ground, transfer, electrons (n = |q|/e) · rysunek: GFX.electro.sphere · e = 1,602·10⁻¹⁹ C.',
 build:function(host){host.innerHTML='';var P=C.PHYS.electro,E0=P.CONST.e,U={C:1,mC:1e-3,'µC':1e-6,nC:1e-9,e:E0},st={q:[0,-4,0],R:[1,1,1],u:'C',diff:false,last:null,log:[],g:null,anim:null},q0=st.q.slice();
  var bar=el('div','r');host.appendChild(bar);var su=sel(bar,'jednostka',[['C','C'],['mC','mC'],['µC','µC'],['nC','nC'],['e','e (ładunek elementarny)']],'C');su.onchange=function(){st.u=su.value;upd()};
  var ins=[];['A','B','C'].forEach(function(n,i){var w=el('label',null,' '+n+': ');var x=el('input');x.type='number';x.step='1';x.min='-12';x.max='12';x.value=st.q[i];x.style.width='64px';x.oninput=function(){st.q[i]=+x.value||0;q0=st.q.slice();st.log=[];st.last=null;upd()};w.appendChild(x);bar.appendChild(w);ins.push(x)});
  var lr=el('label',null,' <input type="checkbox"> kule różnej wielkości (LO)');bar.appendChild(lr);var cb=lr.querySelector('input');
  var rb=el('div','r');rb.style.display='none';host.appendChild(rb);var rs=[];['A','B','C'].forEach(function(n,i){var r=rng(rb,'R'+n,1,3,1,1);r.r.oninput=function(){st.R[i]=+r.r.value;r.o.textContent=st.R[i]+' cm';upd()};r.o.textContent='1 cm';rs.push(r)});
  cb.onchange=function(){st.diff=cb.checked;rb.style.display=cb.checked?'':'none';if(!cb.checked){st.R=[1,1,1];rs.forEach(function(r){r.r.value=1;r.o.textContent='1 cm'})}upd()};
  var b2=el('div','r');host.appendChild(b2);
  [[0,1],[1,2],[0,2],[0,1,2]].forEach(function(p){btn(b2,'dotknij '+p.map(function(i){return'ABC'[i]}).join('–'),function(){touch(p)})});
  [0,1,2].forEach(function(i){btn(b2,'uziem '+'ABC'[i],function(){ground(i)})});btn(b2,'od nowa',function(){st.q=q0.slice();st.log=[];st.last=null;upd()});
  var cv=cnv(host,240),bal=el('div');host.appendChild(bal);host._st=st;
  function nf(v){var r=Math.round(v*1000)/1000;return(Math.abs(r)<1e-12?'0':String(r)).replace('.',',').replace('-','−')}
  function qs(v){return(v>0?'+':'')+nf(v)+' '+st.u}
  function br(v){return v<0?'('+qs(v)+')':qs(v)}
  function tiles(v){var n=Math.abs(v),k=Math.floor(n+1e-9),fr=n-k,s=v<0?'−':'+',col=v<0?'#2563eb':'#dc2626',h='';
   for(var i=0;i<Math.min(k,24);i++)h+='<span style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:'+col+';color:#fff;font:800 13px/18px system-ui;justify-content:center;margin:1px">'+s+'</span>';
   if(fr>1e-6)h+='<span title="część ładunku" style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:'+col+';opacity:.35;color:#fff;font:800 13px/18px system-ui;justify-content:center;margin:1px">'+s+'</span>';
   if(k>24)h+=' … ('+k+')';return h||'<span style="color:#64748b">0 — obojętna</span>'}
  function nE(v){return P.electrons(Math.abs(v)*U[st.u])}
  function touch(p){var bef=p.map(function(i){return st.q[i]}),Rs=p.map(function(i){return st.R[i]}),aft=P.contact(bef,st.diff?Rs:null);
   var tr=p.map(function(i,k){return{i:i,d:aft[k]-bef[k]}});p.forEach(function(i,k){st.q[i]=aft[k]});
   st.last={type:'touch',p:p,bef:bef,aft:aft,tr:tr,Rs:Rs};st.anim={p:p,t:performance.now()};st.log.push('dotyk '+p.map(function(i){return'ABC'[i]}).join('–'));upd()}
  function ground(i){var b=st.q[i];st.q[i]=0;st.last={type:'ground',i:i,bef:b};st.g={i:i,t:performance.now(),s:b};st.log.push('uziemienie '+'ABC'[i]);upd()}
  function upd(){ins.forEach(function(x,i){x.value=Math.round(st.q[i]*1000)/1000});var tot=st.q.reduce(function(a,b){return a+b},0),tot0=q0.reduce(function(a,b){return a+b},0),L=st.last,h='';
   if(L&&L.type==='touch'){var nm=L.p.map(function(i){return'q<sub>'+'ABC'[i]+'</sub>'}),sb=L.bef.reduce(function(a,b){return a+b},0);
    h+='<div><b>Przed:</b> '+nm.join(' + ')+' = '+L.bef.map(br).join(' + ')+' = <b>'+qs(sb)+'</b></div>'+
     '<div><b>Po:</b> '+nm.map(function(x){return x+'′'}).join(' + ')+' = '+L.aft.map(br).join(' + ')+' = <b>'+qs(L.aft.reduce(function(a,b){return a+b},0))+'</b> <span style="color:#16a34a">— suma bez zmian (zasada zachowania ładunku)</span></div>'+
     (st.diff&&L.Rs.some(function(r){return r!==L.Rs[0]})?'<div><b>Kule różnej wielkości:</b> q<sub>i</sub> = Q·R<sub>i</sub>/ΣR — '+L.Rs.map(function(r,k){return'ABC'[L.p[k]]+': '+r+' cm'}).join(', ')+'; potencjały V = k·q/R wyrównały się.</div>':'<div><b>Identyczne kule:</b> q′ = (suma) / '+L.p.length+' = '+qs(sb)+' / '+L.p.length+' = '+qs(sb/L.p.length)+'</div>')+
     '<div><b>Przepływ:</b> '+L.tr.filter(function(t){return Math.abs(t.d)>1e-12}).map(function(t){return'ABC'[t.i]+(t.d<0?' przyjęła':' oddała')+' elektrony: Δq = '+qs(t.d)+(st.u==='e'?'':' → '+sci(nE(t.d))+' elektronów')}).join('; ')+(L.tr.every(function(t){return Math.abs(t.d)<1e-12})?'brak — kule miały już równe potencjały':'')+'. Przemieszczają się tylko elektrony.</div>';
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:8px;margin-top:6px">'+L.p.map(function(i,k){return'<div style="border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:6px 8px"><b>'+'ABC'[i]+'</b> przed: '+qs(L.bef[k])+'<div>'+tiles(L.bef[k])+'</div><b>'+'ABC'[i]+'′</b> po: '+qs(L.aft[k])+'<div>'+tiles(L.aft[k])+'</div></div>'}).join('')+'</div>'+
     '<div class="note" style="margin-top:6px">Jak liczyć graficznie: każdy „+” znosi się z jednym „−” (para = 0). Zostają tylko niesparowane znaki — to suma. Potem rozdziel je po równo między identyczne kule.</div>'}
   else if(L&&L.type==='ground'){var g=P.ground(L.bef*U[st.u]);h+='<div><b>Uziemienie kuli '+'ABC'[L.i]+':</b> '+qs(L.bef)+' → 0 '+st.u+'.</div><div><b>Przepływ:</b> '+g.dir+(L.bef?' — '+sci(g.electrons)+' elektronów':'')+'.</div><div>Ziemia jest ogromnym przewodnikiem: ładunek rozkłada się tak, by potencjały się wyrównały, a na małej kuli zostaje praktycznie 0. W układzie <b>kula + Ziemia</b> suma ładunków jest nadal stała.</div><div style="margin-top:4px">przed: '+tiles(L.bef)+' &nbsp; po: '+tiles(0)+'</div>'}
   else h+='<div class="note">Wybierz operację. Przykład z zeszytu: A = 0 C, B = −4 C → dotknij A–B.</div>';
   h+='<div style="margin-top:8px"><b>Wszystkie kule:</b> '+st.q.map(function(v,i){return'q<sub>'+'ABC'[i]+'</sub> = '+qs(v)}).join(' · ')+' · suma <b>'+qs(tot)+'</b>'+(Math.abs(tot-tot0)<1e-9?' <span style="color:#16a34a">— zachowana</span>':' <span style="color:#d97706">— zmieniona przez uziemienie (część ładunku jest w Ziemi)</span>')+'</div>'+(st.log.length?'<div style="opacity:.8;font-size:12px;margin-top:4px">kroki: '+st.log.join(' → ')+'</div>':'');
   bal.innerHTML='<div class="note" style="margin-top:6px"><b style="display:block;margin-bottom:4px">Bilans</b>'+h+'</div>'}
  function frame(t){if(!cv.isConnected)return;var g=ctx(cv),x=g.x,w=g.w,h=g.h,T=TH(),xs=[w*.2,w*.5,w*.8],yc=h*.45;
   if(st.g){var gi=st.g.i,k=(t-st.g.t)/1400;if(k>1)st.g=null;else{var gx=xs[gi],gy=h-18;x.strokeStyle=T.mut;x.lineWidth=2;x.beginPath();x.moveTo(gx,yc+30);x.lineTo(gx,gy);x.stroke();for(var j=0;j<3;j++){x.beginPath();x.moveTo(gx-14+j*4,gy+j*5);x.lineTo(gx+14-j*4,gy+j*5);x.stroke()}
     if(st.g.s)for(var m=0;m<5;m++){var f=((k*2+m/5)%1),yy=st.g.s<0?yc+30+f*(gy-yc-30):gy-f*(gy-yc-30);chg(x,gx+6,yy,-1,4,1-k*.5)}}}
   st.q.forEach(function(v,i){var dx=0,R=st.diff?20+st.R[i]*12:44;if(st.anim&&st.anim.p.indexOf(i)>=0){var k2=Math.min(1,(t-st.anim.t)/700),cx=st.anim.p.reduce(function(a,j){return a+xs[j]},0)/st.anim.p.length;dx=(cx-xs[i])*.35*Math.sin(k2*Math.PI)}
    GE().sphere(x,xs[i]+dx,yc,R,v,{label:'ABC'[i],value:qs(v),th:T,scale:1})});
   if(st.anim&&t-st.anim.t>700)st.anim=null;requestAnimationFrame(frame)}
  upd();requestAnimationFrame(frame)}});