/* KLOCEK (przywrócony z commitu 460a00c): model w kontrakcie CHE.VIEW.define przez mostek model_widok.js. */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define||C.EXT_FES)return;C.EXT_FES=1;
function rnd(s){return function(){s=(s*16807)%2147483647;return(s-1)/2147483646}}
V.define('f02-magnes-fes-v01',{title:'Magnes: mieszanina żelaza z siarką czy związek FeS?',tag:'E8',
 hint:'Zbliż magnes do obu próbek. Z mieszaniny wyciągnie szare opiłki żelaza (siarka zostanie), z siarczku żelaza(II) — nic.',foot:'rozszerzenia.js §G',
 build:function(host){host.innerHTML='';var t=0,cel=0,raf=0;
  var bar=document.createElement('div'),cv=document.createElement('div'),out=document.createElement('div');host.append(bar,cv,out);
  bar.style.cssText='display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px';
  out.style.cssText='font:14px/1.5 Inter,system-ui,sans-serif;border-left:4px solid var(--accent,#0d6868);padding:6px 10px;border-radius:8px;background:var(--surface-soft,#f1f5f9);margin-top:8px';
  function b(txt,f){var x=document.createElement('button');x.type='button';x.textContent=txt;x.style.cssText='font:14px Inter,system-ui;padding:6px 12px;border-radius:8px;border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff);color:inherit;cursor:pointer';x.onclick=f;bar.appendChild(x)}
  b('🧲 Zbliż magnes',function(){cel=1;go()});b('Odsuń magnes',function(){cel=0;go()});
  // drobiny: [x,y,typ] — typ F (opiłek żelaza), S (siarka), X (FeS)
  var R=rnd(11),L=[],P=[];for(var i=0;i<46;i++){var a=R()*Math.PI*2,r=Math.sqrt(R())*62;L.push([r*Math.cos(a),r*Math.sin(a)*.32,i%2?'F':'S',R()])}
  R=rnd(29);for(i=0;i<34;i++){a=R()*Math.PI*2;r=Math.sqrt(R())*58;P.push([r*Math.cos(a),r*Math.sin(a)*.32,'X',R()])}
  function szalka(cx,cy,ps,k,tytul,podp){var my=cy-46-(1-k)*100,s='<ellipse cx="'+cx+'" cy="'+cy+'" rx="86" ry="26" fill="#eef4f8" stroke="#94a3b8" stroke-width="2"/><ellipse cx="'+cx+'" cy="'+(cy-3)+'" rx="80" ry="21" fill="none" stroke="#fff" stroke-opacity=".8"/>';
   ps.forEach(function(p){var x=cx+p[0],y=cy+p[1];if(p[2]==='F'){var d=Math.min(1,Math.max(0,k*1.4-p[3]*.4));x=x+((cx-20+p[3]*40)-x)*d;y=y+((my+4+((p[3]*7)%1)*14)-y)*d;s+='<rect x="'+(x-3.5)+'" y="'+(y-1.3)+'" width="7" height="2.6" rx="1" fill="#6b7280" transform="rotate('+((p[3]*180)|0)+' '+x+' '+y+')"/>'}
    else if(p[2]==='S')s+='<circle cx="'+x+'" cy="'+y+'" r="2.8" fill="#facc15" stroke="#ca8a04" stroke-width=".6"/>';
    else s+='<path d="M'+(x-4)+' '+(y+2)+' l3 -5 l5 1 l1 4 z" fill="#1f2937"/>'});
   s+='<g transform="translate('+cx+' '+my+')"><rect x="-26" y="-34" width="52" height="34" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-dasharray="3 2"/><path d="M-16 -30 v18 a16 16 0 0 0 32 0 v-18 h-9 v18 a7 7 0 0 1 -14 0 v-18z" fill="#dc2626"/><rect x="-16" y="-30" width="9" height="7" fill="#e5e7eb"/><rect x="7" y="-30" width="9" height="7" fill="#e5e7eb"/></g>';
   s+='<text x="'+cx+'" y="'+(cy+52)+'" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">'+tytul+'</text><text x="'+cx+'" y="'+(cy+70)+'" text-anchor="middle" font-size="12" fill="#64748b">'+podp+'</text>';return s}
  function rys(){var k=t*t*(3-2*t);cv.innerHTML='<svg viewBox="0 0 520 270" width="100%" style="max-width:640px;display:block;margin:auto" role="img" aria-label="Magnes zbliżany do mieszaniny żelaza z siarką i do siarczku żelaza(II)">'+
    szalka(130,190,L,k,'mieszanina Fe + S','szare opiłki + żółta siarka')+szalka(390,190,P,k,'siarczek żelaza(II) FeS','czarna, krucha masa (po ogrzaniu)')+'</svg>';
   out.innerHTML=t<.5?'Na szkiełkach: po lewej <b>mieszanina</b> opiłków żelaza i siarki (widać oba składniki), po prawej <b>związek</b> FeS powstały po ogrzaniu mieszaniny. Zbliż magnes.':
    '<b>Mieszanina:</b> magnes wyciąga żelazo, siarka zostaje — składniki <b>zachowały swoje właściwości</b> i dają się rozdzielić fizycznie. <b>Związek FeS:</b> magnes nic nie przyciąga — powstała <b>nowa substancja</b> o innych właściwościach; rozłożyć ją można tylko reakcją chemiczną.'}
  function go(){cancelAnimationFrame(raf);(function f(){t+=(cel-t)*.08;if(Math.abs(cel-t)<.004)t=cel;rys();if(t!==cel)raf=requestAnimationFrame(f)})()}
  rys()}});
})();
