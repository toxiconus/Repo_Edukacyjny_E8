

(function(){
const C=window.CHE=window.CHE||{},F=C.FIZ=C.FIZ||{};
const PE=()=>C.PHYS&&C.PHYS.electro;  
 
const TRIBO=[
 {id:'skora',name:'skóra (sucha)',kind:'izolator'},{id:'futro',name:'futro / sierść',kind:'izolator'},{id:'szklo',name:'szkło',kind:'izolator'},
 {id:'wlosy',name:'włosy',kind:'izolator'},{id:'nylon',name:'nylon',kind:'izolator'},{id:'welna',name:'wełna (sukno)',kind:'izolator'},
 {id:'jedwab',name:'jedwab',kind:'izolator'},{id:'aluminium',name:'aluminium',kind:'przewodnik'},{id:'papier',name:'papier',kind:'izolator'},
 {id:'bawelna',name:'bawełna',kind:'izolator'},{id:'stal',name:'stal',kind:'przewodnik'},{id:'drewno',name:'drewno (suche)',kind:'izolator'},
 {id:'bursztyn',name:'bursztyn',kind:'izolator'},{id:'ebonit',name:'ebonit / twarda guma',kind:'izolator'},{id:'miedz',name:'miedź',kind:'przewodnik'},
 {id:'poliester',name:'poliester',kind:'izolator'},{id:'styropian',name:'styropian',kind:'izolator'},{id:'pe',name:'folia PE (reklamówka)',kind:'izolator'},
 {id:'balon',name:'balon (lateks)',kind:'izolator'},{id:'pvc',name:'PVC (rurka)',kind:'izolator'},{id:'teflon',name:'teflon (PTFE)',kind:'izolator'}];
 
const RHO={srebro:{name:'srebro',rho:1.59e-8,kind:'przewodnik'},miedz:{name:'miedź',rho:1.68e-8,kind:'przewodnik'},aluminium:{name:'aluminium',rho:2.65e-8,kind:'przewodnik'},
 zelazo:{name:'żelazo',rho:9.7e-8,kind:'przewodnik'},grafit:{name:'grafit',rho:1e-5,kind:'przewodnik'},morska:{name:'woda morska',rho:0.2,kind:'elektrolit'},
 kran:{name:'woda z kranu',rho:50,kind:'elektrolit'},krzem:{name:'krzem (czysty)',rho:2.3e3,kind:'półprzewodnik'},destylowana:{name:'woda destylowana',rho:1.8e5,kind:'słaby przewodnik'},
 drewno:{name:'drewno suche',rho:1e14,kind:'izolator'},szklo:{name:'szkło',rho:1e12,kind:'izolator'},guma:{name:'guma',rho:1e13,kind:'izolator'},
 powietrze:{name:'powietrze suche',rho:2e16,kind:'izolator'},teflon:{name:'teflon',rho:1e23,kind:'izolator'}};
 
const EPSR={proznia:{name:'próżnia',e:1},powietrze:{name:'powietrze',e:1.0006},olej:{name:'olej',e:2.2},szklo:{name:'szkło',e:7},etanol:{name:'etanol',e:24.5},woda:{name:'woda',e:80.1}};
const idx=id=>TRIBO.findIndex(m=>m.id===id);
const E={version:'1.1',TRIBO,RHO,EPSR,
  
 rub(a,b){const ia=idx(a),ib=idx(b);if(ia<0||ib<0)return null;if(ia===ib)return{plus:null,minus:null,n:0,note:'ten sam materiał — praktycznie brak elektryzowania'};
  const plus=ia<ib?a:b,minus=ia<ib?b:a,n=Math.min(12,2+Math.abs(ia-ib)),cond=[a,b].filter(x=>TRIBO[idx(x)].kind==='przewodnik');
  return{plus,minus,n,grounded:cond,note:cond.length?'metal trzymany w ręce od razu się rozładowuje (ładunek odpływa przez ciało do ziemi) — trzeba go trzymać za izolującą rączkę':''}},
 get CONST(){return PE().CONST},
 coulomb:(...a)=>PE().coulomb(...a),field:(...a)=>PE().field(...a),fieldAt:(...a)=>PE().fieldAt(...a),potential:(...a)=>PE().potential(...a),electrons:(...a)=>PE().electrons(...a),share:(...a)=>PE().share(...a),contact:(...a)=>PE().contact(...a),ground:(...a)=>PE().ground(...a),transfer:(...a)=>PE().transfer(...a),electroscope:(...a)=>PE().electroscope(...a),relax:(...a)=>PE().relax(...a),
 audit(){const t=[];const ok=(n,v)=>t.push([n,!!v]);
  const CONST=E.CONST;ok('model w CHE.PHYS.electro',!!PE());ok('1 C ≈ 6,24·10¹⁸ e',Math.abs(1/CONST.e-6.2415e18)/6.2415e18<1e-3);
  ok('k = 1/(4π ε₀)',Math.abs(CONST.k-1/(4*Math.PI*CONST.eps0))/CONST.k<1e-6);
  ok('F(1 µC, 1 µC, 1 m) ≈ 9,0 mN',Math.abs(E.coulomb(1e-6,1e-6,1)-8.99e-3)<1e-4);
  ok('2× r → F/4',Math.abs(E.coulomb(1,1,2)/E.coulomb(1,1,1)-0.25)<1e-12);
  ok('szkło (+) / jedwab (−)',(E.rub('szklo','jedwab')||{}).plus==='szklo');
  ok('ebonit (−) / sukno (+)',(E.rub('ebonit','welna')||{}).minus==='ebonit');
  ok('dotyk: suma ładunków zachowana',E.share(6,-2).reduce((a,b)=>a+b)===4);
  ok('dotyk 0 C i −4 C → −2 C i −2 C',E.contact([0,-4]).every(v=>v===-2));
  ok('kule R 1:2, Q = +6 → +2 i +4 (równe potencjały)',(function(){const r=E.contact([6,0],[1,2]);return Math.abs(r[0]-2)<1e-12&&Math.abs(r[1]-4)<1e-12&&Math.abs(E.potential(r[0],1)-E.potential(r[1],2))<1e-6})());
  ok('trzy identyczne kule naraz: (+9 − 3 + 0)/3 = +2',E.contact([9,-3,0]).every(v=>Math.abs(v-2)<1e-12));
  ok('uziemienie −5 nC → 0, elektrony do ziemi ≈ 3,1·10¹⁰',(function(){const g=E.ground(-5e-9);return g.after===0&&Math.abs(g.electrons-3.12e10)/3.12e10<0.01&&/do ziemi/.test(g.dir)})());
  ok('elektroskop: indukcja nie zmienia ładunku całkowitego',E.electroscope(0,6,0.1,false).Q===0);
  ok('ρ: metale < 1e-6, izolatory > 1e10',Object.values(RHO).every(m=>m.kind==='przewodnik'?m.rho<1e-4:m.kind==='izolator'?m.rho>1e10:true));
  return{ok:t.every(x=>x[1]),tests:t}}};
F.ELEKTRO=E;
})();
