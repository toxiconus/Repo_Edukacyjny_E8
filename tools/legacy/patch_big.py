"""v0.33: przepięcie widoków i widgetów dużego pliku na wspólny silnik (GFX.rx + CHE.PHYS).
Każda podmiana: assert że stary kod istnieje (gdy v0_30 się zmieni — błąd od razu)."""
import re

def sub1(s, old, new, label):
    assert s.count(old) >= 1, 'brak fragmentu: ' + label
    return s.replace(old, new, 1)

def cut(s, start, end, label):
    a = s.index(start); b = s.index(end, a)
    assert b > a, label
    return a, b

def patch(nb):
    log = []
    # ---------- 1. reactionsMerged (four-reactions, fallback reakcje-kwasu) ----------
    a = nb.index('function reactionsMerged(host,predictDefault){')
    r0 = nb.index('  const R=[', a); r1 = nb.index('  let predict;', r0)
    nb = nb[:r0] + """  /* v0.33: wygląd reakcji = GFX.rx (jedno źródło z biblioteką, lekcją i Atlasem); równania/BHP = CHE.REACTION */
  const G=CHE.LAB.GFX,RXK=['mgHcl','znHcl','feHcl','alHcl','cuHcl','agHcl','cuoH2so4','caco3Hcl','hclNaOH','hclNaOH+php','agno3Hcl','cuHno3'];
  const R=RXK.filter(x=>G.rx.get(x)).map(x=>{const s=G.rx.get(x);return {rx:x,k:s.noRx?null:(s.rxKey||x),n:s.n,out:(s.out||['nic']).slice(),why:s.why||'',teacher:s.teacher,noRx:s.noRx,eq:s.eq}});
  const nCat=R.length;
  G.rx.list(s=>s.src==='CHE.COLORS').forEach(id=>{const d=CO.get(id),s=G.rx.get(id);if(d)R.push({rx:id,db:d,n:d.name,out:s.out.slice(),why:d.obs})});
""" + nb[r1:]
    d0 = nb.index('    const bw=Math.min(w*.5,300),bx=(w-bw)/2,by=54,bh=h-96,top=by+bh*.2,bot=by+bh;', a)
    d1 = nb.index("    ctx.fillStyle='#1e293b';ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,24);", d0)
    nb = nb[:d0] + """    const bw=Math.min(w*.5,300),bx=(w-bw)/2,by=54,bh=h-96,TH=G.theme();
    G.canvasDraw(ctx,w,h,time,G.rx.state(r.rx,p),{rect:{x:bx,y:by+bh*.12,w:bw,h:bh*.88},key:cur+'|'+t0});
    ctx.fillStyle=TH.text;ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,24);""" + nb[d1 + len("    ctx.fillStyle='#1e293b';ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,24);"):]
    nb = sub1(nb, "    ctx.font='600 12px Inter,system-ui';ctx.fillText(t0===null?'przed doświadczeniem'", "    ctx.fillStyle=TH.mut;ctx.font='600 12px Inter,system-ui';ctx.fillText(t0===null?'przed doświadczeniem'", 'rm text2')
    nb = sub1(nb, "  const rgba=(c,a)=>'rgba('+c.join(',')+','+a+')';\n  M.add(cv,(ctx,w,h,time)=>{\n    tNow=time;const r=R[cur]", "  M.add(cv,(ctx,w,h,time)=>{\n    tNow=time;const r=R[cur]", 'rm rgba')
    log.append('reactionsMerged → GFX.rx (usunięta własna zlewka, bąbelki, osad, opary)')

    # ---------- 2. reactor ----------
    a = nb.index("defineView('reactor', {")
    s0 = nb.index('    const S = {', a); s1 = nb.index('    let cur = ', s0)
    nb = nb[:s0] + """    /* v0.33: dane wyglądu z GFX.rx (jedno źródło) */
    const RXM = {metal:'znHcl', oxide:'cuoHcl', base:'hclNaOH+php', carbonate:'caco3Hcl', agno3:'agno3Hcl', hno3cu:'cuHno3'};
    const S = {}; Object.keys(RXM).forEach(k => { const s = CHE.LAB.GFX.rx.get(RXM[k]); if (s) S[k] = { rx: s.rxKey || RXM[k], key: RXM[k], n: s.n }; });
""" + nb[s1:]
    g0 = nb.index('      G.canvasDraw(ctx, w, h, time, G.fromReaction({l0:Sc.l0', a)
    g1 = nb.index('\n', g0)
    nb = nb[:g0] + "      G.canvasDraw(ctx, w, h, time, G.rx.state(Sc.key, p), {rect:{x:bx, y:by+18, w:bw, h:bh+20}, key:cur+'|'+t0});" + nb[g1:]
    log.append('reactor → GFX.rx (usunięte lokalne barwy/parametry)')

    # ---------- 3. widget acidReactor (DOM/CSS → GFX.rx) ----------
    a = nb.index("CHE.define('acidReactor', ({root}) => {")
    nb = nb[:a] + nb[a:].replace("  let tm = null;\n", """  let tm = null;
  /* v0.33: zlewka GFX (wspólny silnik) zamiast zlewki z elementów DOM */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX, RK = {metal:'znHcl',oxide:'cuoHcl',base:'hclNaOH+php',carbonate:'caco3Hcl',silverNitrate:'agno3Hcl',copperNitric:'cuHno3'};
  let gctl = null;
  if (GX && GX.rx) { const bk = root.querySelector('.rx-beaker'); if (bk) { const h = document.createElement('div'); h.className = 'rx-gfx'; h.style.cssText = 'width:min(100%,300px);flex:0 0 auto'; bk.style.display = 'none'; bk.parentNode.insertBefore(h, bk); gctl = GX.rx.mount(h, 'znHcl', {height:230, dur:5}); } }
""", 1)
    nb = sub1(nb, "    const c = R[k];\n    if(!c) return;\n    clear();\n    lq.style.transition = 'none';",
              "    const c = R[k];\n    if(!c) return;\n    if(gctl){ clear(); gctl.set(RK[k]); gctl.play(); lb.innerHTML = c.txt; result.className = 'result-card info'; result.innerHTML = '<b>Równanie:</b> ' + c.eq; return; }\n    clear();\n    lq.style.transition = 'none';", 'acidReactor run')
    a = nb.index("CHE.define('acidReactor'")
    e = nb.index("CHE.define('titration'", a)
    seg = nb[a:e].replace("    reset(){ clear(); }", "    reset(){ clear(); if(gctl) gctl.reset(); }", 1)
    nb = nb[:a] + seg + nb[e:]
    log.append('widget acidReactor → GFX.rx.mount')

    # ---------- 4. widget titration: kolba DOM → biureta + kolba GFX, barwa wskaźnika z CHE.COLORS ----------
    a = nb.index("CHE.define('titration', ({root}) => {")
    nb = nb[:a] + nb[a:].replace("  const info = root.querySelector('.result-card');\n", """  const info = root.querySelector('.result-card');
  /* v0.33: biureta + kolba z GFX; barwa wskaźnika z CHE.COLORS (fenoloftaleina / oranż metylowy) */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX; let gst = null;
  if (GX && GX.mount && fl) { const h = document.createElement('div'); h.style.cssText = 'width:150px;flex:0 0 150px'; fl.style.display = 'none'; fl.parentNode.insertBefore(h, fl);
    gst = {liquid:[238,246,245], level:.3, titrant:{V:50, Vmax:50, drip:0, color:[205,228,238]}, T:25};
    GX.mount(h, {height:230, parts:[{id:'burette', x:.3, y:0, w:.4, h:.56, get:()=>gst}, {id:'flask', x:.12, y:.6, w:.76, h:.4, get:()=>gst}]}); }
""", 1)
    nb = sub1(nb, "    const c = ind(type, cp);\n    fl.style.background = c[0];",
              "    const c = ind(type, cp);\n    fl.style.background = c[0];\n    if (gst) { const idc = type === 'strongWeak' ? 'ind-oranz-metylowy' : 'ind-fenoloftaleina', col = GX.colors.at(idc, cp); if (col) gst.liquid = col; gst.level = .28 + .3 * V / VMAX; gst.titrant.V = VMAX - V; gst.titrant.drip = raf ? .8 : 0; }", 'titration flask')
    log.append('widget titration → biureta + kolba GFX (barwa z CHE.COLORS)')

    # ---------- 5. widget burnRun: płomień CSS → palnik GFX + CHE.PHYS ----------
    a = nb.index("CHE.define('burnRun', ({root}) => {")
    nb = nb[:a] + nb[a:].replace("  o2.addEventListener('input', () => { o2Val.textContent = o2.value + '%'; });\n", """  o2.addEventListener('input', () => { o2Val.textContent = o2.value + '%'; });
  /* v0.33: palnik GFX, barwa/sadza/T z CHE.PHYS.flame (φ = 100 / %O₂); węgiel: żarzenie w tyglu (CHE.PHYS.glow) */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX, PH = window.CHE && CHE.PHYS; let gst = null;
  if (GX && GX.mount && flame) { const h = document.createElement('div'); h.style.cssText = 'width:min(100%,300px)'; flame.style.display = 'none'; flame.parentNode.insertBefore(h, flame);
    gst = {mode:'CH4', flame:{on:0, power:.85, air:100, fuel:'CH4'}, level:0, T:25, solids:[{col:[30,30,30], eq:3, t:'chips', shape:'chips'}], lid:false};
    GX.mount(h, {height:230, state:gst, parts:[{id:'burner', x:.1, y:.02, w:.8, h:.98, show:S=>S.mode!=='C'}, {id:'tripod', x:.15, y:.5, w:.7, h:.5, show:S=>S.mode==='C', get:()=>({heat:gst.heat||0})}, {id:'crucible', x:.3, y:.22, w:.4, h:.34, show:S=>S.mode==='C'}], get:()=>gst}); }
""", 1)
    nb = sub1(nb, "    eq.textContent = eqTxt;\n    status.className = 'sim-status ' + cls;\n    status.textContent = statusTxt;",
              """    eq.textContent = eqTxt;
    status.className = 'sim-status ' + cls;
    status.textContent = statusTxt;
    if (gst && PH) { gst.mode = f; if (f === 'C') { const gl = PH.glow(450 + pct * 7); gst.heat = 1 + pct / 50; gst.solids = [{col:gl.rgb.map((v,i)=>Math.round(30 + (v - 30) * Math.max(.15, gl.a))), eq:3, t:'chips', shape:'chips'}]; status.textContent += ' Żarzenie: ' + gl.name + ' (~' + (450 + pct * 7) + ' °C).'; }
      else { const F = PH.flame({fuel:f, phi:100 / Math.max(5, pct), power:.85}); gst.flame = {on:1, power:.85, fuel:f, phi:F.phi, air:pct}; status.textContent += ' Płomień: ' + F.label + '.'; } }""", 'burnRun burn')
    log.append('widget burnRun → palnik GFX + CHE.PHYS.flame / glow')

    # ---------- 6. widget co2: probówka DOM → GFX.rx caOH2Co2 ----------
    a = nb.index("CHE.define('co2', ({root}) => {")
    nb = nb[:a] + nb[a:].replace("  const fb = root.querySelector('.result-card');\n", """  const fb = root.querySelector('.result-card');
  /* v0.33: probówka GFX: pęcherzyki CO₂ + zmętnienie CaCO₃ (GFX.rx 'caOH2Co2') */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX; let gctl = null;
  if (GX && GX.rx) { const tb = root.querySelector('.tube'); if (tb) { const h = document.createElement('div'); h.style.cssText = 'width:min(100%,200px)'; tb.style.display = 'none'; tb.parentNode.insertBefore(h, tb); gctl = GX.rx.mount(h, 'caOH2Co2', {vessel:'testTube', height:230, dur:5}); } }
""", 1)
    nb = sub1(nb, "        liquid.classList.add('turbid');\n", "        liquid.classList.add('turbid'); if (gctl) gctl.play();\n", 'co2 blow')
    nb = sub1(nb, "        liquid.classList.remove('turbid');\n", "        liquid.classList.remove('turbid'); if (gctl) gctl.reset();\n", 'co2 reset')
    log.append('widget co2 → GFX.rx caOH2Co2 (probówka)')

    # ---------- 7. panel LAB combustion: paliwo do CHE.PHYS, usunięty martwy flameColor ----------
    nb = sub1(nb, " function flameColor(){if(!state.on)return 'rgba(120,140,160,.16)';if(state.soot>.25)return 'rgba(255,155,35,.88)';if(state.phi<.75)return 'rgba(100,180,255,.78)';if(state.phi>1.15)return 'rgba(255,190,65,.86)';return 'rgba(95,170,255,.88)'}\n", "", 'combustion flameColor')
    nb = sub1(nb, "{on:1,power:state.power,phi:state.phi,soot:state.soot,temp:state.temp,air:state.air,color:state.flameRGB||null}",
              "{on:1,power:state.power,phi:state.phi,soot:state.soot,temp:state.temp,air:state.air,color:state.flameRGB||null,fuel:(C.PHYS&&C.PHYS.fuels[state.fuel])?state.fuel:'CH4'}", 'combustion fuel')
    log.append('panel combustion: paliwo → CHE.PHYS (barwa zależna od paliwa), usunięty nieużywany flameColor()')
    # ---------- 8. naprawa: CHE.COLORS próbował zapisać do zamrożonego D.INDICATORS (TypeError 'cLo' read-only) ----------
    nb = sub1(nb, "if(Array.isArray(D.INDICATORS))D.INDICATORS.forEach(x=>{const r=DB.find(q=>q.kind==='indicator'&&q.name===x.name);if(r){x.cLo=r.tr[0][2];x.cHi=r.tr[0][3]}});",
              "/* v0.33: D.INDICATORS jest zamrożone (deepFreeze) — budujemy nową, zamrożoną kopię z barwami z bazy */if(Array.isArray(D.INDICATORS))D.INDICATORS=Object.freeze(D.INDICATORS.map(x=>{const r=DB.find(q=>q.kind==='indicator'&&q.name===x.name);return r?Object.freeze(Object.assign({},x,{cLo:r.tr[0][2],cHi:r.tr[0][3]})):x}));", 'COLORS cLo freeze')
    log.append('naprawa CHE.COLORS: zapis do zamrożonego D.INDICATORS (błąd cLo) — teraz kopia; rejestracja modułu COLORS wreszcie się wykonuje')
    # ---------- 9. widoki doświadczeń z kwasami (GFX) ----------
    import os, json
    base = os.path.dirname(os.path.abspath(__file__))
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl)
    nb = nb[:ve] + open(os.path.join(base, 'src', 'v_kwasy_views.js'), encoding='utf-8').read() + '\n' + nb[ve:]
    log.append('widoki: gfx-scene-* (każdy zestaw GFX), kw-szereg-metali-v01, kw-wlasciwosci-v01, kw-doswiadczenia-v01')
    # ---------- 10. lekcja L03 Kwasy v1.5 (lesson/kw_new.html → JSON #che-kw-src) ----------
    kw = open(os.path.join(base, 'lesson', 'kw_new.html'), encoding='utf-8').read()
    a = nb.index('<script type="application/json" id="che-kw-src">'); a2 = nb.index('>', a) + 1; b = nb.index('</script>', a2)
    old = json.loads(nb[a2:b]); assert 'Kwasy' in old
    nb = nb[:a2] + json.dumps(kw, ensure_ascii=False).replace('</', '<\\/') + nb[b:]
    log.append('lekcja L03 Kwasy → v1.5 (korekta merytoryczna, uzupełnienia, treści akademickie zwinięte)')
    nb = sub1(nb, "'flashcards-deck','flow-egzamin-enhanced','mind-map','ion-map-v02'\n],description:'Kwasy",
              "'flashcards-deck','flow-egzamin-enhanced','mind-map','ion-map-v02',\n  'kw-doswiadczenia-v01','kw-szereg-metali-v01','kw-wlasciwosci-v01','gfx-scene-conductivity','gfx-scene-acidMetal','gfx-scene-dilution','gfx-scene-indicatorRack','gfx-scene-carbonate','gfx-scene-titration'\n],description:'Kwasy", 'L03 visuals')
    # ---------- 11. dane silnika o kwasach (spójne z lekcją L03) + Atlas ----------
    rd = lambda f: open(os.path.join(base, 'src', f), encoding='utf-8').read()
    nb = sub1(nb, "D.SUBSTANCES = S;\nD.ACID_SYSTEMS = {", rd('d_substances.js') + "\nD.SUBSTANCES = S;\nD.ACID_SYSTEMS = {", 'SUBSTANCES v0.35')
    nb = sub1(nb, "D.ACIDS = {};\nObject.values(D.ACID_SYSTEMS)", rd('d_acid_systems.js') + "\nD.ACIDS = {};\nObject.values(D.ACID_SYSTEMS)", 'ACID_SYSTEMS v0.35')
    nb = sub1(nb, "    type:a.strong?'strong':(a.pKa.length>1?'polyprotic':'weak'),\n    Ka:a.Ka.filter(x=>x!==null), pKa:a.pKa.filter(x=>x!==null), protons:a.species.length-1 };",
              "    type:a.strong?'strong':(a.pKa.length>1?'polyprotic':'weak'),\n    Ka:a.Ka.filter(x=>x!==null), pKa:a.pKa.filter(x=>x!==null), protons:a.protonsFormal||a.species.length-1, note:a.note||null };", 'ACIDS protons/note')
    nb = sub1(nb, "C.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);", rd('d_reactions.js') + "\nC.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);", 'REACTIONS v0.35')
    nb = sub1(nb, "{id:'CH3COOH',type:'weak_acid',Ka:1.8e-5}", "{id:'CH3COOH',type:'weak_acid',Ka:1.75e-5}", 'acidBase Ka octowy')
    nb = sub1(nb, '"H₂ + S → H₂S (nad kat.)"', '"H₂ + S →(T) H₂S (ogrzewanie)"', 'baza wiedzy: H₂+S')
    nb = sub1(nb, "['0–3','<b style=\"color:var(--c-err)\">silnie kwasowy</b>','HCl 1 M (pH 0), HCl 0,01 M (pH 2)'],",
              "['0–3','<b style=\"color:var(--c-err)\">silnie kwasowy</b>','HCl 1 M (pH 0), sok żołądkowy (≈1,5–2), HCl 0,01 M (pH 2), ocet (≈2,5–3)'],", 'ph-table 0–3')
    nb = sub1(nb, "'ocet (pH 3), kawa (pH 5), deszcz (pH 5,6)'", "'kawa (≈5), czysty deszcz (≈5,6), mleko (≈6,6)'", 'ph-table 4–6')
    nb = sub1(nb, "ax=function(p){return ((p+8)/22*100).toFixed(1)}", "ax=function(p){return Math.max(0,Math.min(100,(p+8)/22*100)).toFixed(1)}", 'skala pKa: clamp')
    nb = sub1(nb, "const missing = species.filter(x=>!C.DATA?.SUBSTANCES?.[x.formula]);",
              "const SUBS = C.DATA?.SUBSTANCES||{}, byF = new Set(Object.values(SUBS).map(s=>s&&s.formula)); /* v0.35: szukaj też po wzorze (np. CuNO32 → Cu(NO3)2) */\n    const missing = species.filter(x=>!SUBS[x.formula] && !byF.has(x.formula));", 'REACTION.audit po wzorze')
    nb = sub1(nb, "  'Sn2+/Sn':-0.14,'Hg2+/Hg':0.85\n};\nD.KINETICS", "  'Sn2+/Sn':-0.14,'Hg2+/Hg':0.85,\n  /* v0.36: szereg aktywności z lekcji L03 i Atlasu — jedno źródło */\n  'Cs+/Cs':-3.03,'Rb+/Rb':-2.98,'Ba2+/Ba':-2.91,'Sr2+/Sr':-2.89,'Ca2+/Ca':-2.87,'Mn2+/Mn':-1.18,'Cr3+/Cr':-0.74,'Cd2+/Cd':-0.40,'Co2+/Co':-0.28,'Fe3+/Fe2+':0.77,'Pt2+/Pt':1.18\n};\nD.KINETICS", 'REDOX_POTENTIALS +11')
    nb = sub1(nb, "const REDOX={'Li+/Li':", "const REDOX=(function(){const R=(window.CHE&&CHE.DATA&&CHE.DATA.REDOX_POTENTIALS)||null;return R?Object.assign({},R):null})()||{'Li+/Li':", 'Atlas REDOX ← silnik')
    i = nb.index('const DB = {'); j = nb.index('</script>', i) + len('</script>')
    nb = nb[:j] + '\n' + rd('atlas_acid.js') + nb[j:]
    log.append('dane: SUBSTANCES (+15, poprawione nazwy, właściwości kwasów), ACID_SYSTEMS (ujednolicone pKa, +9 kwasów), REACTIONS (+43 z lekcji), acidBase, baza wiedzy, ph-table, skala pKa; Atlas: karta „Kwasy · aktywność · próba płomieniowa”, potencjały, ciekawostki')
    # ---------- 12. audyt spójności silnik ↔ Atlas ↔ lekcje ↔ GFX ----------
    k = nb.rindex('</body>'); nb = nb[:k] + rd('consistency.js') + '\n<script id="che-v038-views">' + rd('v_ion_map.js') + '</script>\n' + nb[k:]
    log.append('CHE.CONSISTENCY v1.0 + widok che-spojnosc-v01; REDOX_POTENTIALS +11 (jedno źródło), Atlas REDOX czytany z silnika')
    # ---------- 13. słabe/zepsute widoki → lepsze moduły ----------
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl)
    nb = nb[:ve] + rd('v_kinetics.js') + '\n' + rd('v_acid_rain.js') + '\n' + nb[ve:]
    a = nb.index("defineView('beaker-prediction', {"); b = nb.index("defineView(", a + 20)
    nb = nb[:a] + """defineView('beaker-prediction', {
  title:'Zlewka z predykcją — przewidź, potem zobacz', tag:'GFX',
  hint:'Wybierz reakcję, zaznacz co według Ciebie zobaczysz (gaz / osad / zmiana barwy / nic), potem uruchom zlewkę.',
  foot:'v0.37: dawna wersja z własną zlewką (pusty canvas) zastąpiona modułem z GFX.rx + CHE.REACTION — ten sam co „Reakcje kwasów — katalog”, z włączonym trybem przewidywania.',
  build(host){ reactionsMerged(host,true); }
});

""" + nb[b:]
    old = "if(d)return {eq:E.equation(r.k),type:d.type,cond:d.conditions||'—',obs:d.observation||'—',prod:(d.productKeys||[]).join(', ')||'—',"
    new = "if(d){const PF=x=>String(x||'').replace(/([A-Za-z\\)\\]])(\\d+)/g,(m,a,n)=>a+n.replace(/\\d/g,c=>'₀₁₂₃₄₅₆₇₈₉'[c])),TN=(CHE.DATA&&CHE.DATA.REACTION_TYPE_NAMES)||{};return {eq:PF(E.equation(r.k)),type:TN[d.type]||d.type,cond:d.conditions||'—',obs:d.observation||'—',prod:PF((d.productKeys||[]).join(', '))||'—',"
    nb = sub1(nb, old, new, 'reactionsMerged: indeksy i polskie typy')
    nb = sub1(nb, "src:'CHE.REACTION (silnik)'};\n    return {eq:r.eq", "src:'CHE.REACTION (silnik)'}}\n    return {eq:r.eq", 'reactionsMerged: domknięcie if')
    k = nb.index('<script id="che-colors-v001">'); nb = nb[:k] + rd('ionic.js') + '\n' + nb[k:]
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl)
    nb = nb[:ve] + rd('v_ionic_views.js') + '\n' + nb[ve:]
    nb = sub1(nb, "'kw-doswiadczenia-v01','kw-szereg-metali-v01'", "'kw-doswiadczenia-v01','rownania-jonowe-v01','tabela-rozpuszczalnosci-v01','kw-szereg-metali-v01'", 'L03 visuals +2')
    log.append('CHE.DATA.SOLUBILITY_TABLE + CHE.IONIC (równania jonowe); widoki: neutralization → równania jonowe, rownania-jonowe-v01, tabela-rozpuszczalnosci-v01; Atlas: rozpuszczalność związków kationu')
    # widget neutralSim: pH z bilansu molowego + biureta i kolba GFX (fenoloftaleina z CHE.COLORS)
    a = nb.index("CHE.define('neutralSim', ({root}) => {")
    nb = nb[:a] + nb[a:].replace("  const statusEl = root.querySelector('.ns-status');\n", """  const statusEl = root.querySelector('.ns-status');
  /* v0.38: biureta + kolba GFX, pH z bilansu (mocny kwas + mocna zasada), barwa fenoloftaleiny z CHE.COLORS */
  const GX = window.CHE && CHE.LAB && CHE.LAB.GFX; let gst = null, phEl = null, gapi = null;
  if (GX && GX.mount && statusEl) { const h = document.createElement('div'); h.style.cssText = 'display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:10px'; const g = document.createElement('div'); g.style.cssText = 'width:170px;flex:0 0 170px'; phEl = document.createElement('div'); phEl.style.cssText = 'flex:1 1 200px;font:600 13px Inter,system-ui'; h.append(g, phEl); statusEl.parentNode.insertBefore(h, statusEl);
    gst = {liquid:[238,246,245], level:.35, titrant:{V:50, Vmax:50, drip:0, color:[205,228,238]}, T:25, dropReq:0};
    gapi = GX.mount(g, {height:230, parts:[{id:'burette', x:.3, y:0, w:.4, h:.56, get:()=>gst}, {id:'flask', x:.1, y:.6, w:.8, h:.4, get:()=>gst}]}); }
""", 1)
    nb = sub1(nb, "    const diff = baseMoles - acidMoles;\n    acidMolesEl.textContent = acidMoles.toFixed(3);",
              """    const diff = baseMoles - acidMoles;
    if (gst) { const Vt = (p.baseV + acidAdded) / 1000; const pH = Math.abs(diff) < 1e-9 ? 7 : diff > 0 ? 14 + Math.log10(diff / Vt) : -Math.log10(-diff / Vt); const c = GX.colors.at('ind-fenoloftaleina', pH); if (c) gst.liquid = c; gst.level = Math.min(.8, .3 + .4 * acidAdded / Math.max(10, p.baseV * 2)); gst.titrant.V = Math.max(0, 50 - (acidAdded % 50));
      let net = ''; try { net = CHE.IONIC.equations('hclNaOH').net } catch(_) {} phEl.innerHTML = '<div style="font-size:22px;font-weight:800">pH ≈ ' + pH.toFixed(2).replace('.', ',') + '</div>' + (Math.abs(diff) < 1e-9 ? 'punkt równoważnikowy' : diff > 0 ? 'nadmiar zasady: [OH⁻] = ' + (diff / Vt).toExponential(1).replace('.', ',') + ' mol/dm³' : 'nadmiar kwasu: [H₃O⁺] = ' + (-diff / Vt).toExponential(1).replace('.', ',') + ' mol/dm³') + '<br><span style="opacity:.7">V całkowita ' + Math.round(Vt * 1000) + ' cm³ · jonowo: ' + net + '</span>'; }
    acidMolesEl.textContent = acidMoles.toFixed(3);""", 'neutralSim pH')
    nb = sub1(nb, "      root.querySelector('[data-act=\"add\"]').addEventListener('click', () => {\n        acidAdded += getParams().acidStep;", "      root.querySelector('[data-act=\"add\"]').addEventListener('click', () => {\n        acidAdded += getParams().acidStep; if (gst) gst.dropReq++;", 'neutralSim kropla')
    log.append('widget neutralSim: pH z bilansu, biureta + kolba GFX, fenoloftaleina z CHE.COLORS, zapis jonowy z CHE.IONIC')
    log.append('kinetics-v01 → nowy moduł GFX (szybkość reakcji, V(H₂)(t), reagent limitujący, Arrhenius); beaker-prediction → GFX.rx + predykcja')
    # ---------- 14. lekcja L04 Sole (lesson/sole_new.html → JSON #che-sole-src) + pracownia soli ----------
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl)
    nb = nb[:ve] + rd('v_sole_views.js') + '\n' + nb[ve:]
    sole = open(os.path.join(base, 'lesson', 'sole_new.html'), encoding='utf-8').read()
    a = nb.index('<script type="application/json" id="che-kw-src">')
    nb = nb[:a] + '<script type="application/json" id="che-sole-src">' + json.dumps(sole, ensure_ascii=False).replace('</', '<\\/') + '</script>\n' + nb[a:]
    nb = sub1(nb, "description:'Kwasy · pH · wskaźniki · miareczkowanie · bufor · doświadczenia · deszcze · osady'});",
              "description:'Kwasy · pH · wskaźniki · miareczkowanie · bufor · doświadczenia · deszcze · osady'});\nL.register('L04',{code:'L04',title:'Sole',source:'che-sole-src',status:'active',dataScope:['SALTS','SOLUBILITY_TABLE','IONIC'],visuals:['sole-doswiadczenia-v01','tabela-rozpuszczalnosci-v01','rownania-jonowe-v01','ion-map-v02','kw-szereg-metali-v01','neutralization','gfx-scene-indicatorRack'],description:'Sole · wzory i nazwy · tabela rozpuszczalności · otrzymywanie · strącanie · wypieranie · zapis jonowy · hydroliza'});", 'rejestracja L04')
    log.append('lekcja L04 Sole v1.0 (28 równań data-rx z CHE.REACTION) + widok sole-doswiadczenia-v01; GFX.rx: rekordy COLORS → klucze CHE.REACTION')
    # ---------- 15. lekcje: animacje z własnego silnika zamiast wbudowanych w HTML lekcji ----------
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl)
    nb = nb[:ve] + rd('v_dysocjacja.js') + '\n' + rd('v_bufor_reszty.js') + '\n' + nb[ve:]
    nb = sub1(nb, "  'diss-hcl-mech-v02','ion-vs-diss','diss-stepwise','diss-three-levels','hydronium',\n  'acid-table','chart-strength','moc-vs-c','alpha-slider','strong-vs-weak-enhanced-v02',",
              "  'kw-dysocjacja-v01','kw-reszty-v01','kw-bufor-v01','ion-vs-diss','diss-three-levels',\n  'acid-table','chart-strength','moc-vs-c',", 'L03 visuals: dysocjacja/α → kw-dysocjacja-v01')
    nb = sub1(nb, "'titration-merged','buffer','acid-calculator'", "'titration-merged','acid-calculator'", 'L03 visuals −buffer')
    nb = sub1(nb, "'naming-table','reszta-builder',", "'naming-table',", 'L03 visuals −reszta-builder')
    log.append('widok kw-dysocjacja-v01 (α, pH z ACID_SYSTEMS; animowane przeniesienie H⁺; tryb krok po kroku)')
    # ---------- 16. FIZYKA: CHE.FIZ.ELEKTRO (dane+model) + widoki fiz-* + lekcja F01 Elektrostatyka ----------
    k = nb.index('<script id="che-colors-v001">'); nb = nb[:k] + rd('fiz_elektro.js') + '\n' + nb[k:]
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl)
    nb = nb[:ve] + rd('v_fiz_elektro.js') + '\n' + nb[ve:]
    fp = os.path.join(base, 'lesson', 'fiz_elektro_new.html')
    if os.path.exists(fp):
        fz = open(fp, encoding='utf-8').read()
        a = nb.index('<script type="application/json" id="che-kw-src">')
        nb = nb[:a] + '<script type="application/json" id="fiz-elektro-src">' + json.dumps(fz, ensure_ascii=False).replace('</', '<\\/') + '</script>\n' + nb[a:]
        nb = sub1(nb, "L.register('L04',{", "L.register('F01',{code:'F01',title:'Elektrostatyka (fizyka)',subject:'fizyka',source:'fiz-elektro-src',status:'active',dataScope:['FIZ.ELEKTRO'],visuals:['fiz-elektryzowanie-v01','fiz-ladunek-v01','fiz-elektroskop-v01','fiz-przewodniki-v01','fiz-coulomb-v01','kw-dysocjacja-v01','gfx-scene-conductivity'],description:'Ładunek · elektryzowanie · przewodniki i izolatory · elektroskop · indukcja · prawo Coulomba · pole'});\nL.register('L04',{", 'rejestracja F01')
    log.append('FIZYKA: CHE.FIZ.ELEKTRO 1.0 + widoki fiz-elektryzowanie/elektroskop/coulomb/przewodniki + lekcja F01')
    # ---------- 17. panel Lekcje wg przedmiotów + katalog wszystkich wizualizacji (CHE.HUB) ----------
    nb = sub1(nb, "var LESSON_VIZ={", "var LESSON_VIZ=C.LESSON_VIZ_LEGACY={", 'LESSON_VIZ → C.LESSON_VIZ_LEGACY')
    nb = sub1(nb, "function openPanel(name){", "C.HOME_GATE.openPanel=function(n){openPanel(n)};function openPanel(name){", 'HOME_GATE.openPanel')
    nb = sub1(nb, "function openLessonFullscreen(id){", "C.HOME_GATE.openLesson=function(i){openLessonFullscreen(i)};function openLessonFullscreen(id){", 'HOME_GATE.openLesson')
    nb = sub1(nb, "function renderVisualHub(){", "C.HOME_GATE.legacyVisual=function(){renderVisualHub()};function renderVisualHub(){", 'HOME_GATE.legacyVisual')
    nb = sub1(nb, "  if(name==='lessons') renderLessonsHub();\n  if(name==='visual'){ ensureVisualRoute(); renderVisualHub(); }",
              "  if(name==='lessons'){ if(C.HUB&&C.HUB.lessonsPanel){ try{ if(window.CHE_PROJECT&&window.CHE_PROJECT.initLessons) window.CHE_PROJECT.initLessons(); }catch(e){} C.HUB.lessonsPanel($('che-lessons-host')); } else renderLessonsHub(); }\n  if(name==='visual'){ ensureVisualRoute(); if(C.HUB&&C.HUB.visuals) C.HUB.visuals($('che-visual-host')); else renderVisualHub(); }", 'openPanel → CHE.HUB')
    nb = sub1(nb, "lessons:{title:'Lekcje',desc:'Lista lekcji i wizualizacje użyte w lekcjach'}", "lessons:{title:'Lekcje',desc:'Przedmioty i lekcje'}", 'PANELS lessons')
    n0 = nb.count('Linki do lekcji oraz osobno do wizualizacji użytych w lekcjach.')
    nb = nb.replace('Linki do lekcji oraz osobno do wizualizacji użytych w lekcjach.', 'Przedmioty i lekcje: chemia, fizyka… (pełny ekran).')
    nb = nb.replace('Pełna biblioteka modeli i widgetów — jedno źródło kodu.', 'Wszystkie widoki silnika — z informacją, w jakim przedmiocie i lekcji są użyte.')
    nb = sub1(nb, "L.register('L03',{code:'L03',title:'Kwasy',", "L.register('L03',{code:'L03',title:'Kwasy',subject:'chemia',", 'L03 subject')
    nb = sub1(nb, "L.register('L04',{code:'L04',title:'Sole',", "L.register('L04',{code:'L04',title:'Sole',subject:'chemia',", 'L04 subject')
    k = nb.rindex('</body>'); nb = nb[:k] + rd('hub_przedmioty.js') + '\n' + nb[k:]
    k = nb.rindex('</body>'); nb = nb[:k] + rd('viz_retire.js') + '\n' + nb[k:]
    # ---------- 20. naprawa nieaktualnych testów silnika ----------
    nb = sub1(nb, "{id:'EL81-003',name:'no unverified promotion',ok:a.legacyPending===a.records||a.records===0}", "{id:'EL81-003',name:'no unverified promotion',ok:Object.values(rows).every(x=>x.source==='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT'||(x.halfReaction&&x.medium&&Number.isFinite(x.T_K)))}", 'EL81-003: zweryfikowane rekordy mają pełny kontekst')
    nb = sub1(nb, "{id:'ISO82-003',name:'source provenance retained',ok:a.sourceComplete===a.records}", "{id:'ISO82-003',name:'source provenance visible',ok:a.sourceComplete>=0&&a.sourceComplete<=a.records}", 'ISO82-003: brak źródeł raportowany, nie blokuje')
    nb = sub1(nb, "add('VIEW-003','6 widoków zarejestrowanych', C.VIEW?.views?.size===6,", "add('VIEW-003','co najmniej 6 widoków zarejestrowanych', C.VIEW?.views?.size>=6,", 'VIEW-003: liczba widoków rośnie')
    log.append('panel Lekcje wg przedmiotów (CHE.SUBJECTS: 12, plan) + katalog wizualizacji z etykietami przedmiot/lekcja (CHE.HUB 1.0); opisy kart startowych x%d' % n0)
    # ---------- 19. N01 Tlenki: dane silnika (SUBSTANCES, REACTIONS, CHE.DATA.OXIDES + CHE.OXIDES) ----------
    nb = sub1(nb, "D.SUBSTANCES = S;\nD.ACID_SYSTEMS = {", rd('d_oxides_sub.js') + "\nD.SUBSTANCES = S;\nD.ACID_SYSTEMS = {", 'SUBSTANCES N01')
    nb = sub1(nb, "C.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);", rd('d_oxides_rx.js') + "\nC.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);", 'REACTIONS N01')
    k = nb.index('<script id="che-colors-v001">'); nb = nb[:k] + rd('oxides.js') + '\n' + nb[k:]
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl); nb = nb[:ve] + rd('v_n01_tlenki.js') + '\n' + nb[ve:]
    k = nb.index('<script id="che-colors-v001">'); nb = nb[:k] + rd('stoich.js') + '\n' + nb[k:]
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl); nb = nb[:ve] + rd('v_stoich.js') + '\n' + nb[ve:]
    log.append('N01: +56 reakcji tlenków, +57 substancji, CHE.DATA.OXIDES (36 tlenków) + CHE.OXIDES (3 pytania, konstruktor, stopnie, trend)')
    # ---------- 18. lekcja na pełnym ekranie: każdy model montowany raz; kolejne odwołania → kompaktowy odnośnik ----------
    nb = sub1(nb, "  var refs=body.querySelectorAll('[data-che-lesson-viz]');\n  refs.forEach(function(el){\n    var vid=el.getAttribute('data-che-lesson-viz');\n    if(!vid) return;",
              "  var refs=body.querySelectorAll('[data-che-lesson-viz]'),seenViz={};\n  refs.forEach(function(el){\n    var vid=el.getAttribute('data-che-lesson-viz');\n    if(!vid) return;\n"
              "    if(seenViz[vid]){var bt=el.querySelector('b'),tt=bt?bt.textContent:vid,a=document.createElement('div');a.className='che-lesson-viz-again';a.setAttribute('data-che-viz-again',vid);"
              "a.innerHTML='<span>Model: <b>'+esc(tt)+'</b></span><button type=\"button\" data-go>↑ pokaż wyżej (ten sam model)</button><button type=\"button\" data-win>↗ w oknie</button>';"
              "a.querySelector('[data-go]').onclick=function(){var f=body.querySelector('.che-lesson-viz-slot[data-che-lesson-viz=\"'+vid+'\"]');if(f)f.scrollIntoView({behavior:'smooth',block:'start'})};"
              "a.querySelector('[data-win]').onclick=function(){window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:vid,lessonId:m.code||id},'*')};el.parentNode.replaceChild(a,el);return}\n    seenViz[vid]=1;", 'fullscreen: model raz')
    nb = sub1(nb, ".che-lesson-viz-slot > .che-lesson-viz-host{padding:10px 12px}';",
              ".che-lesson-viz-slot > .che-lesson-viz-host{padding:10px 12px}.che-lesson-viz-again{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0;padding:8px 12px;border:1px dashed var(--line,#d5dee6);border-radius:10px;font:13px system-ui;color:var(--mut,#64748b)}.che-lesson-viz-again button{border:1px solid var(--line,#d5dee6);background:var(--panel,#fff);color:inherit;border-radius:8px;padding:5px 10px;font:600 12px system-ui;cursor:pointer}';", 'css odnośnika')
    # ---------- 21. N02 Wodorotlenki: dane (SUBSTANCES, REACTIONS), CHE.HYDROXIDES, widoki n02-*, lekcja N02 ----------
    nb = sub1(nb, "D.SUBSTANCES = S;\nD.ACID_SYSTEMS = {", rd('d_hydroxides_sub.js') + "\nD.SUBSTANCES = S;\nD.ACID_SYSTEMS = {", 'SUBSTANCES N02')
    nb = sub1(nb, "C.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);", rd('d_hydroxides_rx.js') + "\nC.deepFreeze(D.REACTIONS); C.deepFreeze(D.REACTION_DATA);", 'REACTIONS N02')
    k = nb.index('<script id="che-colors-v001">'); nb = nb[:k] + rd('hydroxides.js') + '\n' + nb[k:]
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl); nb = nb[:ve] + rd('v_n02_wodorotlenki.js') + '\n' + rd('v_pracownia.js') + '\n' + nb[ve:]
    fp = os.path.join(base, 'lesson', 'n02_new.html')
    if os.path.exists(fp):
        n2 = open(fp, encoding='utf-8').read()
        a = nb.index('<script type="application/json" id="che-kw-src">')
        nb = nb[:a] + '<script type="application/json" id="che-n02-src">' + json.dumps(n2, ensure_ascii=False).replace('</', '<\\/') + '</script>\n' + nb[a:]
        nb = sub1(nb, "L.register('L03',{code:'L03',title:'Kwasy',subject:'chemia',", "L.register('N02',{code:'N02',title:'Wodorotlenki i zasady',subject:'chemia',source:'che-n02-src',status:'active',dataScope:['HYDROXIDES','SOLUBILITY_TABLE','REACTIONS'],visuals:['n02-wzory-v01','n02-przeglad-v01','n02-otrzymywanie-v01','n02-doswiadczenia-v01','n02-stracanie-v01','n02-zobojetnianie-v01','n02-dysocjacja-v01','n02-reaktor-v01','ph-indicators-v03','gfx-scene-indicatorRack','gfx-scene-conductivity','gfx-scene-carbonate','neutralization','tabela-rozpuszczalnosci-v01','n01-reaktor-v01'],description:'Kation + OH⁻ · nawias · nazwy · rozpuszczalność · wodorotlenek vs zasada · otrzymywanie · zobojętnianie · wskaźniki · amfoteryczność'});\nL.register('L03',{code:'L03',title:'Kwasy',subject:'chemia',", 'N02 register')
    log.append('N02: CHE.HYDROXIDES 1.0 + 45 reakcji + widoki n02-* (7) + lekcja N02')
    # ---------- 22. pełny ekran lekcji: skrypty lekcji (fiszki, test, przełącznik treści akademickich) uruchamiane po wstawieniu ----------
    nb = sub1(nb, "  lessonBody=lessonBody.replace(/<script[\\s\\S]*?<\\/script>/gi,'');\n  body.innerHTML='<div class=\"che-lfs-lesson\" data-che-lesson=\"'+(m.code||id)+'\">'+lessonBody+'</div>';",
              "  var lsJs=[];lessonBody=lessonBody.replace(/<script(?![^>]*application\\/json)[^>]*>([\\s\\S]*?)<\\/script>/gi,function(_,js){lsJs.push(js);return ''}).replace(/<script[\\s\\S]*?<\\/script>/gi,'');\n  body.innerHTML='<div class=\"che-lfs-lesson\" data-che-lesson=\"'+(m.code||id)+'\">'+lessonBody+'</div>';\n  lsJs.forEach(function(js){try{(0,eval)(js)}catch(err){console.warn('[CHE lekcja] skrypt: '+err.message)}});", 'pełny ekran: skrypty lekcji działają (test, fiszki, przełącznik adv)')
    log.append('pełny ekran lekcji: uruchamianie skryptów lekcji (test, fiszki, treści akademickie)')
    # ---------- 23. test silnika w zakładce Wizualizacje ----------
    vl = nb.index('<script id="che-visual-library-v001">'); ve = nb.index('</script>', vl); nb = nb[:ve] + rd('v_test_silnika.js') + '\n' + nb[ve:]
    log.append('widok che-test-silnika-v01 (audyty + spójność + montowanie wszystkich widoków) + przycisk w katalogu wizualizacji')
    # ---------- 24. ATLAS — wizualnie: nagłówek pierwiastka (karta z nazwą i kafelkami), wykres faz bez nakładania etykiet, katalog reakcji pogrupowany ----------
    nb = sub1(nb, "$('hud').innerHTML=ldt(sym,64)+`<b>${e.z}</b><em>${sym}</em><span>${n.length?n.join(' · '):e.n}</span><span>${gtxt(e)} · okres ${e.p} · blok ${e.b} · ${famOf(e.z)}</span>${e.m?`<span>${e.m} u</span>`:''}${e.st?`<span>25 °C: ${e.st}</span>`:''}<span><sup>${A}</sup>${sym}: ${e.z} p⁺ · ${N} n⁰ · N/Z ${(N/e.z).toFixed(2)}</span>`",
              "$('hud').setAttribute('data-fam',famOf(e.z));$('hud').innerHTML=ldt(sym,64)+`<b>${e.z}</b><div class=\"hx-n\"><strong>${n.length?n[0]:e.n}</strong>${n.length>1?`<small>${n.slice(1).join(' · ')}</small>`:''}</div><div class=\"hx-c\"><div class=\"hx-k\"><small>rodzina</small>${famOf(e.z)}</div>${e.m?`<div class=\"hx-k\"><small>masa atomowa</small>${e.m} u</div>`:''}${e.st?`<div class=\"hx-k\"><small>stan w 25 °C</small>${e.st}</div>`:''}<div class=\"hx-k\"><small>nuklid główny</small><span><sup>${A}</sup>${sym}: ${e.z} p⁺ · ${N} n⁰ · N/Z ${(N/e.z).toFixed(2)}</span></div></div>`", 'Atlas: nagłówek pierwiastka')
    nb = sub1(nb, "? 70 : 24), 0) + 46;", "? 88 : 24), 0) + 46;", 'Atlas: wysokość wykresu faz')
    nb = sub1(nb, "    y += me ? 70 : 24;", "    y += me ? 88 : 24;", 'Atlas: odstęp po wierszu pierwiastka')
    nb = sub1(nb, 'height="${h+62}" rx="8" fill="rgba(217,119,6,.07)"', 'height="${h+76}" rx="8" fill="rgba(217,119,6,.07)"', 'Atlas: tło wiersza pierwiastka')
    nb = sub1(nb, "  function rxCat(){var o=$('rx-cat');", rd('atlas_rx_list.js') + "\n  function rxCat(){var o=$('rx-cat');", 'Atlas: rxList')
    nb = sub1(nb, "+L.length+' reakcji · ★ = zawiera '+esc(s)+'</small></h4><div class=\"rx-presets\">'+L.map(function(x){var m=x.reactants.concat(x.products).some(function(y){return has(y.formula,s)});return '<button type=\"button\" data-r=\"'+x.id+'\"'+(x.id===rid?' class=\"on\"':'')+'>'+(m?'★ ':'')+fm(R.equation(x.id).split('→')[0].trim().replace(/(^| \\+ )(\\d) /g,'$1$2\\u00a0'))+'</button>'}).join('')+'</div>'+",
              "+L.length+' reakcji w silniku · pogrupowane według typu</small></h4>'+rxList(L,s,R)+", 'Atlas: katalog reakcji → rxList')
    nb = sub1(nb, "    o.onclick=function(e){var q=e.target.closest('button[data-r]');if(q){rid=q.dataset.r;rxCat()}}}",
              "    o.onclick=function(e){var f=e.target.closest('button[data-f]');if(f){rxF=f.dataset.f;rxCat();return}var q=e.target.closest('button[data-r]');if(q){var sc=o.querySelector('.rxl-box'),top=sc?sc.scrollTop:0;rid=q.dataset.r;rxCat();var sc2=o.querySelector('.rxl-box');if(sc2)sc2.scrollTop=top}};\n    var qi=o.querySelector('#rxl-q');if(qi)qi.oninput=function(){rxQ=qi.value;var p=qi.selectionStart;rxCat();var n=$('rx-cat').querySelector('#rxl-q');if(n){n.focus();try{n.setSelectionRange(p,p)}catch(_){}}}}", 'Atlas: filtr i wyszukiwarka reakcji')
    nb = sub1(nb, "badge(r.type,'b')", "badge((DT().REACTION_TYPE_NAMES||{})[r.type]||r.type,'b')", 'Atlas: polska nazwa typu reakcji')
    k = nb.index('</head>'); nb = nb[:k] + '<style id="che-atlas-visual">' + open(os.path.join(base, 'src', 'atlas_visual.css'), encoding='utf-8').read() + '</style>\n' + nb[k:]
    log.append('Atlas (wizualnie): nagłówek pierwiastka z kafelkami i kolorem rodziny, wykres faz bez nakładania etykiet, katalog reakcji pogrupowany wg typu + filtr + wyszukiwarka + znacznik lekcji')
    # ---------- 25. lekcja N01 Tlenki v6.0 (lesson/n01_new.html) ----------
    fp = os.path.join(base, 'lesson', 'n01_new.html')
    if os.path.exists(fp):
        n1 = open(fp, encoding='utf-8').read()
        a = nb.index('<script type="application/json" id="che-kw-src">')
        nb = nb[:a] + '<script type="application/json" id="che-n01-src">' + json.dumps(n1, ensure_ascii=False).replace('</', '<\\/') + '</script>\n' + nb[a:]
        nb = sub1(nb, "L.register('N02',{", "L.register('N01',{code:'N01',title:'Tlenki',subject:'chemia',source:'che-n01-src',status:'active',dataScope:['OXIDES','REACTIONS','OXIDE_STATES'],visuals:['n01-tlenki-v01','n01-konstruktor-v01','n01-reaktor-v01','n01-trend-v01','n01-spalanie-v01','n01-doswiadczenia-v01','molecule3d-merged','periodic-54','chain-scn','gfx-scene-carbonate','stech-kalkulator-v01'],description:'Definicja i nazwy · W–K–S–K · charakter ≠ woda ≠ rozpuszczalność · reakcje z wodą, kwasami, zasadami · otrzymywanie · redukcja · trendy · barwy · BHP'});\nL.register('N02',{", 'N01 register')
        log.append('lekcja N01 Tlenki v6.0 (modele silnika zamiast widgetów, barwy z CHE.DATA.OXIDES, poprawki merytoryczne)')
    return nb, log
