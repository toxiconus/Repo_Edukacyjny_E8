const LSYM = {s:0, p:1, d:2, f:3};
let hintSel = 'rule';
const nl = k => +k[0] + LSYM[k[1]];
const SL = k => `<a class="sl" data-sk="${k}">${k}</a>`;
const orbPl = n => n === 1 ? 'orbital' : n < 5 ? 'orbitale' : 'orbitali';
const cfgS = c => ORDER.filter(k => c[k]).map(k => k + sup(c[k])).join(' ');
const cfgByShell = c => Object.keys(c).sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c[k])).join(' ');
const unpairedN = c => { let u = 0; ORDER.forEach(k => { if(c[k]){ const nb = CAP[k[1]] / 2; u += c[k] <= nb ? c[k] : 2 * nb - c[k]; } }); return u; };
const byRole = c => { const b = {c:0, v:0, r:0}; ORDER.forEach(k => { if(c[k]) b[role(c, k)] += c[k]; }); return b; };
const ionTag = () => chg ? (chg > 0 ? (chg > 1 ? sup(chg) : '') + '⁺' : (chg < -1 ? sup(-chg) : '') + '⁻') : '';
function coreNote(z, c0){
  const ng = [86, 54, 36, 18, 10, 2].find(q => q < z); if(!ng) return '';
  const nc = fill(ng), rest = Object.keys(c0).filter(k => (c0[k] || 0) - (nc[k] || 0) > 0)
    .sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c0[k] - (nc[k] || 0))).join(' ');
  return `[${SYM[ng - 1]}] ${rest}`;
}
function hctx(){
  const x = state(), keys = Object.keys(x.c);
  x.N = keys.length ? Math.max(...keys.map(k => +k[0])) : 0;
  x.b = byRole(x.c); x.u = unpairedN(x.c);
  x.last = [...ORDER].reverse().find(k => x.c[k]) || '';
  return x;
}

const HINTS = [
 {id:'rule', t:'Reguła n + l', f:x =>
  `<b>Skąd wiadomo, co zapełnić jako następne?</b> Każdej podpowłoce przypisz liczbę <b>n + l</b> (l: s = 0, p = 1, d = 2, f = 3). Elektrony zajmują podpowłoki od najmniejszej sumy do największej, a gdy sumy są równe, pierwsza jest ta z mniejszym n. Stąd ${SL('4s')} (4) wchodzi przed ${SL('3d')} (5), a ${SL('6s')} (6) przed ${SL('4f')} (7).`
  + `<br><small>Sposób na zapamiętanie: ułóż podpowłoki w rzędach według n (1s / 2s 2p / 3s 3p 3d / 4s 4p 4d 4f …) i czytaj po skosach. Jeden skos to jedna wartość n + l.</small>`
  + (x.last ? `<br>Dla ${sym}${ionTag()}: ostatnia zapełniana podpowłoka to ${SL(x.last)} (${x.c[x.last]}/${CAP[x.last[1]]}, n + l = ${nl(x.last)}), czyli blok ${x.last[1]}.` : '')},
 {id:'bond', t:'Które e⁻ się wiążą?', f:x => {
  const b = x.b;
  return `<b>Do wiązań mogą posłużyć:</b> <span style="color:${COL.v}">elektrony walencyjne</span> (cała zewnętrzna powłoka, n = ${x.N}) oraz <span style="color:${COL.r}">niedokończone podpowłoki d (n−1) i f (n−2)</span>. <span style="color:${COL.c}">Rdzeń</span> leży głęboko i zwykle pozostaje nietknięty. Na modelu każdy elektron ma kolor z jednej z tych trzech grup.`
  + `<br>Dla ${sym}${ionTag()}: walencyjnych ${b.v}, d/f ${b.r}, rdzeń ${b.c}. <b>Do dyspozycji ${b.v + b.r} z ${b.c + b.v + b.r} e⁻.</b>`
  + `<br><small><b>Konwencja tej aplikacji</b> (nie prawo fizyki): pełne d¹⁰ liczymy jako aktywne w grupie 11 (Cu, Ag, Au tworzą np. Cu²⁺, Au³⁺), a jako rdzeń w grupie 12 (Zn, Cd, Hg).</small>`; }},
 {id:'shells', t:'Jak czytać powłoki', f:x =>
  `Powłoki K, L, M, N… to n = 1, 2, 3, 4… i mieszczą najwyżej <b>2n²</b> elektronów (2, 8, 18, 32…). Podpis „M · 8/18” znaczy: w tej powłoce jest 8 elektronów z 18 możliwych. Pomarańczowa obręcz to powłoka walencyjna. Kliknij dowolną obręcz, a zobaczysz jej podpowłoki.`
  + (x.N ? `<br>${sym}${ionTag()} ma ${x.N} ${x.N === 1 ? 'powłokę' : x.N < 5 ? 'powłoki' : 'powłok'} (dla atomu to numer okresu).` : '')},
 {id:'hund', t:'Pauli i Hund', f:x =>
  `<b>Zakaz Pauliego:</b> w jednym orbitalu są najwyżej 2 elektrony i mają przeciwne spiny. <b>Reguła Hunda:</b> w podpowłoce z kilkoma orbitalami (p, d, f) elektrony najpierw zajmują każdy orbital pojedynczo, z równoległymi spinami, i dopiero potem łączą się w pary. Dlatego azot ma 3 niesparowane elektrony na 2p, a tlen tylko 2.`
  + `<br>Dla ${sym}${ionTag()}: niesparowanych <b>${x.u}</b> → ${x.u ? 'paramagnetyk (wciągany do pola magnetycznego)' : 'diamagnetyk (lekko wypychany z pola)'}.`},
 {id:'exc', t:'⚠ Wyjątek od reguły', when:x => chg === 0 && !!EXC[x.e.z], f:x => {
  const z = x.e.z, raw = cfgByShell(fill(z, true)), real = cfgByShell(x.c0);
  const why = [24, 29, 41, 42, 44, 45, 46, 47, 78, 79].includes(z)
    ? 'Poziomy ns i (n−1)d leżą bardzo blisko siebie, a podpowłoka d zapełniona lub zapełniona do połowy daje niższą energię. Opłaca się więc przenieść elektron z s do d.'
    : z === 103 ? 'Przy tak dużym Z efekty relatywistyczne obniżają energię 7p, więc elektron trafia tam, a nie do 6d.'
    : 'Poziomy 4f/5f i 5d/6d są prawie równe energetycznie, więc elektron ląduje w d, gdy atom ma wtedy niższą energię (np. półzapełnione f⁷ w Gd).';
  return `<b>${x.e.s} nie trzyma się prostej reguły n + l.</b><br>Według reguły: ${raw}<br>W rzeczywistości: <b>${real}</b><br>${why}`; }},
 {id:'ion', t:'Jony', f:x =>
  `<b>Kation:</b> elektrony odchodzą z powłoki o największym n, a nie z podpowłoki zapełnianej jako ostatnia. Dlatego Fe → Fe²⁺ traci 4s², choć 3d zapełnia się później niż 4s. <b>Anion:</b> nowe elektrony zajmują najbliższą wolną podpowłokę według n + l (Cl → Cl⁻ dopełnia 3p).`
  + (chg ? `<br>Teraz: ${sym}${ionTag()} = <b>${cfgByShell(x.c) || 'brak elektronów'}</b>` : '<br><small>Wybierz ładunek jonu przy modelu atomu, a zobaczysz to na żywo.</small>')},
 {id:'write', t:'Jak zapisać konfigurację', f:x =>
  `Zapełniamy według n + l, ale w zapisie zwykle porządkujemy według n (3d przed 4s).`
  + `<br>kolejność zapełniania: <span class="mono">${cfgS(x.c) || '—'}</span>`
  + `<br>kolejność powłok: <span class="mono"><b>${cfgByShell(x.c) || '—'}</b></span>`
  + (chg === 0 && coreNote(x.e.z, x.c0) ? `<br>zapis skrócony: <span class="mono"><b>${coreNote(x.e.z, x.c0)}</b></span>` : '')},
 {id:'pos', t:'Konfiguracja → tablica', f:x =>
  `<b>Okres</b> to największe n w konfiguracji. <b>Blok</b> to typ ostatnio zapełnianej podpowłoki (s, p, d lub f). <b>Grupa:</b> w bloku s liczba e⁻ na ns, w bloku p to 10 + e⁻ na ns i np, w bloku d to e⁻ na ns plus (n−1)d.`
  + `<br>${sym}: okres ${x.e.p || x.N}, blok ${x.e.b}, ${gtxt(x.e)}.${x.e.z === 2 ? ' <small>(hel to wyjątek: blok s, ale grupa 18)</small>' : ''}`},
 {id:'lens', t:'Lupa jądra', f:x =>
  `Jądro jest około 10⁴–10⁵ razy mniejsze od atomu, więc w widoku powłok pokazuje je lupa w lewym dolnym rogu. Kliknij ją, by zobaczyć dane jądra. Czerwone kule to protony (Z = ${x.e.z}), szare to neutrony (N = A − Z). Przyciski izotopów nad sceną zmieniają N, a pomarańczowa obręcz oznacza neutron ponad najczęstszy izotop. Przycisk „do jądra” lub dwuklik przybliża samo jądro.`}
];

function subHint(k, x){
  const n = +k[0], l = LSYM[k[1]], sum = n + l, cap = CAP[k[1]], have = x.c[k] || 0, i = ORDER.indexOf(k);
  const peers = ORDER.filter(q => q !== k && nl(q) === sum);
  let t = `<b>${k}</b>: n + l = ${n} + ${l} = <b>${sum}</b> (dla ${k[1]} l = ${l}). Mieści ${cap} e⁻ (${cap / 2} ${orbPl(cap / 2)}).`;
  t += `<br>W ${sym}${ionTag()}: ${have ? `<b>${have}/${cap}</b> — ${have === cap ? 'zapełniona' : 'częściowo zapełniona'}, rola: ${{c:'rdzeń', v:'walencyjna', r:'d/f aktywna'}[role(x.c, k)]}` : 'pusta'}.`;
  t += `<br>Kolejność: ${i ? SL(ORDER[i - 1]) : '—'} → <b>${k}</b> → ${i < ORDER.length - 1 ? SL(ORDER[i + 1]) : '—'}`;
  t += peers.length
    ? `<br>Tę samą sumę mają: ${peers.map(q => SL(q) + ' (' + (+q[0] < n ? 'wcześniej' : 'później') + ')').join(', ')}. Przy remisie pierwsze jest mniejsze n.`
    : '<br>Żadna inna podpowłoka nie ma takiej sumy.';
  if(l === 2) t += `<br><small>${SL((n + 1) + 's')} zapełnia się przed ${k}, dlatego blok d zaczyna się dopiero w okresie ${n + 1}.</small>`;
  if(l === 3) t += `<br><small>${SL((n + 2) + 's')} zapełnia się przed ${k}, dlatego blok f zaczyna się dopiero w okresie ${n + 2}.</small>`;
  return t;
}

function madel(){
  const { e, c0 } = state(), c = viewC(), x = hctx();
  x.last = buildN == null ? x.last : ([...ORDER].reverse().find(k => c[k]) || '');
  const raw = fill(e.z, true);
  const diff = chg === 0 ? new Set(ORDER.filter(k => (raw[k] || 0) !== (c0[k] || 0))) : new Set();
  $('madrow').innerHTML = ORDER.map((k, i) => {
    const have = c[k] || 0, cap = CAP[k[1]], st = have ? (have === cap ? 'f' : 'p') : 'e', r = have ? role(state().c, k) : '';
    return (i ? '<span class="sba">→</span>' : '')
      + `<button type="button" class="sbc ${st}${k === x.last ? ' last' : ''}${diff.has(k) ? ' x' : ''}${hintSel === 'sub:' + k ? ' sel' : ''}" data-sk="${k}" style="--fr:${have / cap * 100}%${r ? ';--cc:' + COL[r] : ''}" title="${k}: n + l = ${+k[0]} + ${LSYM[k[1]]} = ${nl(k)}${diff.has(k) ? ' · wyjątek od reguły' : ''}"><b>${k}</b><em>${have}/${cap}</em></button>`;
  }).join('');
}

function hints(){
  GEO.hlSel = hintSel.startsWith('sub:') ? hintSel.slice(4) : null; GEO.hl = GEO.hlSel;
  if(typeof still !== 'undefined' && still && sm === 'b') bohr(0);
  madel();
  const x = hctx(), list = HINTS.filter(h => !h.when || h.when(x));
  if(!hintSel.startsWith('sub:') && !list.some(h => h.id === hintSel)) hintSel = 'rule';
  $('hchips').innerHTML = list.map(h => `<button type="button" class="hc${hintSel === h.id ? ' on' : ''}" data-h="${h.id}">${h.t}</button>`).join('');
  $('hbody').innerHTML = hintSel.startsWith('sub:') ? subHint(hintSel.slice(4), x) : list.find(h => h.id === hintSel).f(x);
}
function buildStop(){ if(buildT) clearInterval(buildT); buildT = null; buildN = null; GEO.bn = null; const b = $('bld'); if(b) b.textContent = '▶ zbuduj atom'; }
function buildStep(){
  const { c } = state(), tot = Object.values(c).reduce((a, b) => a + b, 0);
  if(buildN == null) buildN = 0;
  buildN++;
  const cur = truncCfg(c, buildN), key = [...ORDER].reverse().find(k => cur[k]);
  GEO.hl = key; GEO.bn = buildN + '/' + tot;
  madel(); if(still) bohr(0);
  if(buildN >= tot){ clearInterval(buildT); buildT = null; $('bld').textContent = '↺ jeszcze raz';
    setTimeout(() => { if(buildN >= tot && !buildT){ buildN = null; GEO.bn = null; hints(); } }, 1600); }
}
$('bld').addEventListener('click', () => {
  if(sm !== 'b') smode('b');
  if(buildT){ buildStop(); hints(); return; }
  const { c } = state(), tot = Object.values(c).reduce((a, b) => a + b, 0);
  if(!tot) return;
  buildN = 0; $('bld').textContent = '■ stop';
  buildT = setInterval(buildStep, Math.max(110, Math.min(450, 7000 / tot)));
});
$('madrow').addEventListener('mouseover', ev => { const b = ev.target.closest('[data-sk]'); if(b && !buildT){ GEO.hl = b.dataset.sk; if(still) bohr(0); } });
$('madrow').addEventListener('mouseleave', () => { if(buildT) return; GEO.hl = GEO.hlSel || null; if(still) bohr(0); });
$('hintbar').addEventListener('click', ev => {
  const b = ev.target.closest('[data-sk],[data-h]'); if(!b) return;
  hintSel = b.dataset.sk ? (hintSel === 'sub:' + b.dataset.sk && b.closest('#madrow') ? 'rule' : 'sub:' + b.dataset.sk) : b.dataset.h;
  hints();
});

