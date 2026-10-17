/* viz: fotosynteza-oddychanie — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],S=BIO.Lh["C.S"],svg=BIO.Lh["C.svg"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"];
BIO.define('fotosynteza-oddychanie',{opis:'Komórka liścia: chloroplast (fotosynteza) i mitochondrium (oddychanie) z wymianą substancji; suwak światła → bilans gazów liścia (oddychanie stale, fotosynteza zależna od światła)',
mount:function(el,o){var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=100;rng.value=o.swiatlo||70;rng.setAttribute('aria-label','Natężenie światła');rng.style.flex='1 1 160px';
  tools.appendChild(H('span','bv-score','światło:'));tools.appendChild(rng);var lab=H('b',null,'');tools.appendChild(lab);
  var pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  function strz(g,x1,y1,x2,y2,c,w){g.appendChild(S('line',{x1:x1,y1:y1,x2:x2,y2:y2,stroke:c,'stroke-width':w||2,'stroke-linecap':'round','marker-end':'url(#fo-a'+c.replace('#','')+')'}))}
  function draw(){var L=+rng.value,F=Math.min(1,L/60),R=.25,net=F-R;lab.textContent=L===0?'noc (ciemność)':L<20?'słabe':L<60?'średnie':'silne';
   var s=svg(420,230,'Komórka liścia: chloroplast i mitochondrium, wymiana CO₂, O₂, wody i glukozy'),d=S('defs');
   ['2e7d32','c0392b','1565c0','8d6e00','5d6b7a'].forEach(function(c){var m=S('marker',{id:'fo-a'+c,viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto'});m.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:'#'+c}));d.appendChild(m)});s.appendChild(d);
   s.appendChild(S('rect',{x:70,y:30,width:280,height:170,rx:26,fill:'#eef7e9',stroke:'#7aa66a','stroke-width':3}));s.appendChild(T(210,20,'komórka liścia',{s:13,f:'var(--viz-mut)'}));
   var sun=S('g',{opacity:.25+.75*L/100});sun.appendChild(S('circle',{cx:32,cy:40,r:16,fill:'#f6c343'}));for(var i=0;i<8;i++){var a=i*Math.PI/4;sun.appendChild(S('line',{x1:32+20*Math.cos(a),y1:40+20*Math.sin(a),x2:32+27*Math.cos(a),y2:40+27*Math.sin(a),stroke:'#f6c343','stroke-width':2.5}))}s.appendChild(sun);
   var ch=S('g',{'data-k':'ch'});ch.appendChild(S('ellipse',{cx:150,cy:115,rx:52,ry:30,fill:'#5fae4e',stroke:'#2e7d32','stroke-width':2,opacity:.35+.65*F}));for(var j=0;j<4;j++)ch.appendChild(S('rect',{x:116+j*18,y:104,width:12,height:22,rx:3,fill:'#2e7d32',opacity:.8}));ch.appendChild(T(150,155,'chloroplast',{s:13}));s.appendChild(ch);
   var mi=S('g',{'data-k':'mi'});mi.appendChild(S('ellipse',{cx:290,cy:115,rx:46,ry:26,fill:'#f2b8a0',stroke:'#c0392b','stroke-width':2}));mi.appendChild(S('path',{d:'M254 115 q8 -16 16 0 t16 0 t16 0 t16 0 t8 0',fill:'none',stroke:'#c0392b','stroke-width':1.6}));mi.appendChild(T(290,152,'mitochondrium',{s:13}));s.appendChild(mi);
   if(L>0){strz(s,32,70,108,100,'#8d6e00',2);}
   if(F>0){strz(s,200,105,240,105,'#8d6e00',2.5);s.appendChild(T(220,96,'glukoza',{s:12,f:'#8d6e00'}))}
   if(F>0){strz(s,202,128,240,128,'#1565c0',1.6);s.appendChild(T(221,140,'O₂',{s:12,f:'#1565c0'}))}
   
   // wymiana z otoczeniem: wypadkowa
   var gO=net>0?'O₂':'CO₂',gI=net>0?'CO₂':'O₂',k=Math.min(1,Math.abs(net)/(1-R)),w=1.5+4*k;
   if(Math.abs(net)>.02){strz(s,395,60,355,90,net>0?'#5d6b7a':'#1565c0',w);s.appendChild(T(400,52,gI+' do liścia',{s:12,a:'end',f:'var(--viz-mut)'}));strz(s,355,150,395,180,net>0?'#1565c0':'#5d6b7a',w);s.appendChild(T(410,196,gO+' z liścia',{s:12,a:'end',f:'var(--viz-mut)'}))}
   else s.appendChild(T(395,115,'bilans ≈ 0',{s:13,a:'end',f:'var(--viz-mut)'}));
   s.appendChild(T(150,62,'fotosynteza: '+Math.round(F*100)+'%',{s:12,f:'#2e7d32'}));s.appendChild(T(290,72,'oddychanie: stałe',{s:12,f:'#c0392b'}));
   clr(pic);pic.appendChild(s);
   BIO.fx.info(pic,out,{ch:['Chloroplast — fotosynteza',' 6CO₂ + 6H₂O —(światło, chlorofil)→ C₆H₁₂O₆ + 6O₂. Intensywność rośnie ze światłem (do pewnej granicy); w ciemności fotosynteza nie zachodzi.'],
     mi:['Mitochondrium — oddychanie tlenowe',' C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (ATP). Zachodzi stale, w dzień i w nocy.']});
   out.innerHTML=L===0?'<b>Noc:</b> fotosynteza nie zachodzi, oddychanie trwa — liść <b>pobiera O₂ i oddaje CO₂</b>.':net<-.02?'<b>Przewaga oddychania:</b> fotosynteza słabsza niż oddychanie — liść nadal netto <b>oddaje CO₂</b>.':net<=.02?'<b>Punkt kompensacyjny:</b> ile O₂ powstaje w fotosyntezie, tyle zużywa oddychanie — wymiana gazów z otoczeniem ≈ 0.':'<b>Przewaga fotosyntezy:</b> fotosynteza intensywniejsza niż oddychanie — liść netto <b>pobiera CO₂ i oddaje O₂</b>. Oddychanie nadal trwa (część O₂ zużywa mitochondrium).'}
  rng.oninput=draw;draw()}});
})();
