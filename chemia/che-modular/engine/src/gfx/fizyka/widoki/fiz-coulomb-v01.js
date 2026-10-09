V.define('fiz-coulomb-v01',{title:'Prawo Coulomba i linie pola elektrycznego',tag:'FIZ+',
 hint:'Zmieniaj ładunki, odległość i ośrodek. Strzałki pokazują siły (zawsze równe i przeciwnie skierowane — III zasada dynamiki), linie — kierunek pola (od + do −).',
 foot:'F = k·q₁·q₂ / (εr·r²), k = 8,99·10⁹ N·m²/C² · stałe i εr: CHE.FIZ.ELEKTRO.CONST / EPSR · długość strzałek w skali logarytmicznej.',
 build:function(host){host.innerHTML='';var E=EL(),K=E.CONST,bar=el('div','r');host.appendChild(bar);
  var q1=rng(bar,'q₁',-5,5,.5,2),q2=rng(bar,'q₂',-5,5,.5,-2);var bar2=el('div','r');host.appendChild(bar2);var R=rng(bar2,'r',5,100,1,30);
  var sm=sel(bar2,'ośrodek',Object.keys(E.EPSR).map(function(k){return[k,E.EPSR[k].name+' (εr = '+String(E.EPSR[k].e).replace('.',',')+')']}),'powietrze');
  var bl=btn(bar2,'linie pola: wł.',function(){lines=!lines;bl.textContent='linie pola: '+(lines?'wł.':'wył.');draw()});var lines=true;
  var cv=cnv(host,330),note=el('div','note');host.appendChild(note);var ch=cnv(host,170);
  [q1.r,q2.r,R.r].forEach(function(r){r.oninput=draw});sm.onchange=draw;
  function draw(){var a=+q1.r.value*1e-6,b=+q2.r.value*1e-6,r=+R.r.value/100,er=E.EPSR[sm.value].e,F=E.coulomb(a,b,r,er);q1.o.textContent=fmt(+q1.r.value,1)+' µC';q2.o.textContent=fmt(+q2.r.value,1)+' µC';R.o.textContent=R.r.value+' cm';
   var g=ctx(cv),x=g.x,w=g.w,h=g.h,th=TH(),cy=h/2,D=60+(r-.05)/.95*(w*.62),x1=w/2-D/2,x2=w/2+D/2,Q=[{x:x1,y:cy,q:a},{x:x2,y:cy,q:b}];
   if(lines)GE().fieldLines(x,w,h,Q,{th:th,scale:2e6});
    var len=F?Math.max(14,Math.min(w*.18,40*(Math.log10(Math.abs(F))+4),F<0?D/2-30:1e9)):0,dir=F>0?1:-1;
   [[x1,-1],[x2,1]].forEach(function(p){var d=F>0?p[1]:-p[1];GE().arrow(x,p[0]+d*18,cy,d,len)});
   Q.forEach(function(c,i){GE().pointCharge(x,c.x,c.y,c.q,'q'+(i?'₂':'₁')+' = '+fmt(c.q*1e6,1)+' µC',{th:th})});
   x.strokeStyle=th.mut;x.lineWidth=1;x.setLineDash([4,3]);x.beginPath();x.moveTo(x1,cy+48);x.lineTo(x2,cy+48);x.stroke();x.setLineDash([]);x.fillStyle=th.mut;x.textAlign='center';x.fillText('r = '+R.r.value+' cm',(x1+x2)/2,cy+62);
   var m=Math.abs(F)/9.81;note.innerHTML='<b>F = k·q₁·q₂ / (εr·r²) = '+sci(Math.abs(F))+' N</b> — '+(F>0?'<b>odpychanie</b> (ładunki jednoimienne)':F<0?'<b>przyciąganie</b> (ładunki różnoimienne)':'brak siły (jeden ładunek = 0)')+
    (F?' · tyle waży ciało o masie '+(m>=1?fmt(m,1)+' kg':fmt(m*1000,m*1000<1?3:1)+' g'):'')+'<br>Dwa razy większa odległość → siła 4 razy mniejsza; dwa razy większy ładunek → siła 2 razy większa.'+(er>2?' W ośrodku o εr = '+String(er).replace('.',',')+' siła jest '+fmt(er,1)+'× słabsza niż w próżni'+(sm.value==='woda'?' — dlatego woda rozrywa kryształy soli na jony (chemia: dysocjacja).':'.'):'');
    var g2=ctx(ch),y=g2.x,W=g2.w,H=g2.h,L=48,Rr=W-12,Tp=10,B=H-24;y.strokeStyle=th.mut;y.fillStyle=th.mut;y.font='600 10px system-ui';y.beginPath();y.moveTo(L,Tp);y.lineTo(L,B);y.lineTo(Rr,B);y.stroke();
   var Fmax=Math.abs(E.coulomb(a||1e-6,b||1e-6,.05,er))||1,X=function(rr){return L+(Rr-L)*(rr-.05)/.95},Y=function(f){return B-(B-Tp)*Math.min(1,f/Fmax)};
   y.strokeStyle='#ea580c';y.lineWidth=2;y.beginPath();for(var i=0;i<=120;i++){var rr=.05+.95*i/120,f=Math.abs(E.coulomb(a||1e-6,b||1e-6,rr,er));i?y.lineTo(X(rr),Y(f)):y.moveTo(X(rr),Y(f))}y.stroke();
   y.fillStyle='#ea580c';y.beginPath();y.arc(X(r),Y(Math.abs(F)),5,0,7);y.fill();if(r*2<=1){y.globalAlpha=.6;y.beginPath();y.arc(X(2*r),Y(Math.abs(F)/4),4,0,7);y.fill();y.fillText('2r → F/4',X(2*r)+6,Y(Math.abs(F)/4)-6);y.globalAlpha=1}
   y.fillStyle=th.mut;y.textAlign='center';y.fillText('r [cm]',(L+Rr)/2,H-4);[5,25,50,75,100].forEach(function(c){y.fillText(c,X(c/100),B+12)});y.textAlign='left';y.fillText('|F|',6,Tp+8)}
  setTimeout(draw,0)}});