# -*- coding: utf-8 -*-
"""N01 Tlenki v6.0 — przebudowa lekcji źródłowej sources/chemia/CHE.N01.v05.91.html do standardu CHE (wzorzec: n02_build.py, narzędzia: lesson_lib.py).
Widgety → modele silnika (n01-*, CHE.OXIDES, stech-kalkulator, periodic-54, molecule3d-merged, chain-scn, pracownia n01-doswiadczenia);
galeria barw z CHE.DATA.OXIDES (data-ox, audyt LES-N01-03); poprawki merytoryczne; kody lekcji jak w panelu (N01, N02, N03, N04). Wyjście: lesson/n01_new.html."""
import os, re
from lesson_lib import *
src = open(os.path.join(ROOT, 'sources', 'chemia', 'CHE.N01.v05.91.html'), encoding='utf-8').read()
OXJS = open(os.path.join(ROOT, 'src', 'oxides.js'), encoding='utf-8').read()
OX = re.findall(r"\['([^']+)','([^']+)','(\w+)',(-?\d+),'([^']+)','[^']*',\[[^\]]*\],\[[^\]]*\],\[[^\]]*\],'(#[0-9a-fA-F]{6})','([^']+)','(\w)','(\w+)'", OXJS)
assert len(OX) >= 30, len(OX)
z = Lesson('N01'); viz = z.viz
body = src[src.index('<body'):]
m0 = body.index('<main'); m0 = body.index('>', m0) + 1; m1 = body.index('</main>', m0)
h = body[m0:m1]
i = start_of_attr(body, 'id="n01-correction-v59"'); CORR = body[i:end_of(body, i)]

# ---------- most na górze (linki do zewnętrznych plików) ----------
i, j = by_text(h, 'Most do Konstruktora Uniwersalnego', 'div', 'lab-bridge')
h = h[:i] + card('card-understand', 'Modele silnika w tej lekcji', '<p>Wzór tlenku i stopnie utlenienia — <a href="#builder">§4b</a>; trzy pytania o tlenek — <a href="#charakter">§4</a>; reakcje — <a href="#reakcje">§7</a>; doświadczenia — <a href="#doswiadczenia">§21</a>. Następna lekcja: <strong>N02 Wodorotlenki i zasady</strong> (Lekcje → Chemia).</p>') + h[j:]; z.L('most do zewn. plików → odnośniki wewnętrzne')
# ---------- §4 charakter ----------
h = rep(z, h, 'Kliknij kartę charakteru — zobaczysz reakcję z wodą i przykłady.', 'Szczegóły każdego tlenku (charakter, reakcja z wodą, z kwasem i z zasadą) — model „Tlenek — trzy pytania” poniżej.', 'karty charakteru: opis')
h = cut(z, h, 'id="charSim"', viz('n01-tlenki-v01', 'Tlenek — trzy pytania: charakter, woda, kwas / zasada (detektor charakteru)', 'CHE.OXIDES · 39 tlenków · zlewka z wskaźnikiem uniwersalnym'), 'detektor charakteru → n01-tlenki-v01')
# ---------- §4b konstruktor ----------
h = cut(z, h, 'id="oxideBuilder"', viz('n01-konstruktor-v01', 'Konstruktor wzoru tlenku (W–K–S–K) i sprawdzanie wzoru — stopnie utlenienia, nadtlenki, OF₂', 'CHE.OXIDES.build / oxState') + card('card-core', 'Przykład W–K–S–K', '<p>Fe(III) + O(II) → Fe₂O₃: wartościowości 3 i 2 → krzyżujemy → Fe₂O₃ → kontrola: 2·(+3) + 3·(−2) = 0.</p><p>Drugi przykład: S(VI) + O(II) → SO₃ (kontrola: +6 + 3·(−2) = 0).</p><p class="mini-note">W–K–S–K nie zastępuje kontroli chemicznej. Po skrzyżowaniu sprawdź: (1) skrócenie indeksów, (2) bilans atomów, (3) suma stopni utlenienia = 0, (4) czy wzór jest znanym/możliwym związkiem.</p>'), 'konstruktor → n01-konstruktor-v01 (+ przykłady z widgetu)')
i, j = by_text(h, 'Ćwicz w Konstruktorze', 'div', 'card'); h = h[:i] + h[j:]; z.L('link do zewn. konstruktora usunięty')
# ---------- §5 VSEPR, §5b układ okresowy ----------
h = cut(z, h, 'id="vseprPool"', viz('molecule3d-merged', 'Model 3D cząsteczek — CO₂, SO₂, SO₃, H₂O: geometria i kąty', 'CHE.MOLECULE · VSEPR') + '<p>W CO₂ węgiel nie ma wolnych par elektronowych, więc odpychanie jest symetryczne → kąt 180°.</p>' + note('<strong>Ograniczenie:</strong> VSEPR opisuje geometrię cząsteczek / lokalnych układów elektronowych. Nie jest modelem całej sieci krystalicznej Na₂O, CaO ani SiO₂. Dla NO₂, który ma niesparowany elektron, standardowy model zamkniętopowłokowy jest tylko przybliżeniem.'), 'VSEPR → molecule3d-merged (+ opis i ograniczenie)', widget=True)
h = cut(z, h, 'id="periodicMini"', viz('periodic-54', 'Układ okresowy 1–54 — pierwiastek, wartościowość, tlenek i jego charakter', 'CHE.DATA.ELEMENTS + CHE.OXIDES'), 'mini układ okresowy → periodic-54', widget=True)
h = cut(z, h, 'id="ionAssemblyO"', note('Jak dobrać liczbę jonów O²⁻ do kationu (Na⁺ → Na₂O, Ca²⁺ → CaO, Al³⁺ → Al₂O₃) — model konstruktora w <a href="#builder">§4b</a>. Przykład: Na⁺ (+1) — dwa kationy na jeden O²⁻ (−2) → Na₂O; kontrola: 2·(+1) + 1·(−2) = 0.'), 'jon + O²⁻ → odnośnik')
h = cut(z, h, 'id="eqPlayerOx"', '<h4 style="margin:14px 0 6px">Równanie krok po kroku — 2 Mg + O₂</h4><div class="formula-lg">2 Mg + O₂ → 2 MgO</div>' + note('Bilans: Mg 2 = 2 ✓ · O 2 = 2 ✓. Synteza tlenku; MgO z wodą reaguje bardzo słabo (≠ CaO) — most do N02.'), 'eqPlayer → równanie statyczne')
# ---------- §6 spalanie, §7 reaktor, §8 mapa, §11 woda, §14 trend ----------
h = cut(z, h, 'id="burnFuel"', viz('n01-spalanie-v01', 'Otrzymywanie tlenków: spalanie pierwiastków i paliw — dopływ O₂ → CO₂ / CO / sadza', 'CHE.REACTION (spalanie całkowite i niecałkowite)') + card('card-warning', 'Spalanie niecałkowite', '<p>Przy niedoborze tlenu zamiast CO₂ powstaje CO (tlenek węgla(II)) lub sadza (C). CO jest bezbarwny, bezwonny i silnie toksyczny — stąd zagrożenie czadem w zamkniętych pomieszczeniach.</p>'), 'symulator spalania → n01-spalanie-v01 (+ spalanie niecałkowite)', widget=True)
h = cut(z, h, 'id="reactor"', viz('n01-reaktor-v01', 'Co powstanie? Tlenek + woda / kwas / zasada — przewiduj, potem sprawdź', 'CHE.OXIDES.predict · procedura 7 kroków'), 'reaktor → n01-reaktor-v01')
h = cut(z, h, 'id="rmPool"', viz('chain-scn', 'Łańcuch przemian: pierwiastek → tlenek → wodorotlenek / kwas → sól', 'Na → Na₂O → NaOH → NaCl · S → SO₃ → H₂SO₄ → Na₂SO₄ · C → CO₂ → H₂CO₃ → Na₂CO₃'), 'mapa reakcji → chain-scn', widget=True)
h = cut(z, h, 'id="dwStage"', note('Co dzieje się z CaO, SO₃, CO₂ i CuO w wodzie — przycisk „Do wody” w modelu z <a href="#charakter">§4</a> (zlewka ze wskaźnikiem) oraz pracownia doświadczeń w <a href="#doswiadczenia">§21</a>.'), 'tlenek w wodzie → odnośniki', widget=True)
h = cut(z, h, 'id="trendBars"', viz('n01-trend-v01', 'Trend charakteru tlenków: w okresie i według stopnia utlenienia (Cr, Mn)', 'CHE.OXIDES.trend'), 'trend → n01-trend-v01', widget=True)
# ---------- §15 barwy z silnika ----------
CH = {'zasadowy': 'basic', 'kwasowy': 'extra', 'amfoteryczny': 'understand', 'obojętny': 'new'}
tiles = ''.join('<div class="ox-tile" data-ox="%s" data-ox-col="%s"><span class="ox-sw" style="background:%s"></span><b>%s</b><small>%s · %s</small></div>' % (f, hx, hx, f.translate(TOSUB), w, ch) for f, nm, el, st, ch, hx, w, s_, lv in OX if lv in ('E8', 'AMB'))
GAL = ('<h4 style="margin:14px 0 6px">Barwy tlenków — dane silnika</h4><div class="ox-grid">' + tiles + '</div>'
       + note('Kolor próbki ≈ barwa substancji (poglądowo), z CHE.DATA.OXIDES — ten sam rekord czytają Atlas i modele. Rdza nie jest czystym Fe₂O₃ — to mieszanina uwodnionych tlenków i wodorotlenków żelaza (przybliżenie Fe₂O₃·nH₂O).'))
h = cut(z, h, 'id="oxGallery"', GAL, 'galeria kolorów → kafelki z CHE.DATA.OXIDES (data-ox)')
h = rep(z, h, 'hematyt; składnik produktów korozji; pigment, pigment', 'hematyt; składnik produktów korozji; pigment', 'dubel „pigment”')
h = rep(z, h, 'eskolaït (minerał)', 'eskolait (minerał)', 'eskolait — pisownia')
# ---------- §17 stopnie, §21 doświadczenia, §24–25 stechiometria ----------
h = cut(z, h, 'id="oxInput"', note('Kalkulator stopni utlenienia (także nadtlenki, OF₂, tlenki mieszane) — pole „Sprawdź wzór” w modelu konstruktora z <a href="#builder">§4b</a>.'), 'kalkulator stopni → n01-konstruktor (odnośnik)', widget=True)
h = cut(z, h, 'id="oxTimeline"', '', 'oś czasu w §21 usunięta (historia w §20)')
h = cut(z, h, 'id="obsInferenceLab"', viz('n01-doswiadczenia-v01', 'Pracownia: doświadczenia z tlenkami — zlewka, równania, obserwacje, BHP', 'GFX.rx · CHE.REACTION · CHE.IONIC · 22 doświadczenia'), 'obserwacja→wniosek → pracownia n01-doswiadczenia-v01')
h = cut(z, h, 'id="wykrywacz-co2"', viz('gfx-scene-carbonate', 'Wykrywanie CO₂: węglan + kwas → gaz → woda wapienna mętnieje', 'Scena GFX'), 'wykrywacz CO₂ → gfx-scene-carbonate')
h = cut(z, h, 'id="stReaction"', viz('stech-kalkulator-v01', 'Kalkulator stechiometryczny — masa, mole, objętość gazu, odczynnik limitujący', 'CHE.STECH na reakcjach silnika (spalanie, rozkład CaCO₃, CuO + H₂SO₄…)'), 'kalkulator stechiometrii → stech-kalkulator-v01', widget=True)
h = cut(z, h, 'id="sbFuel"', note('Spalanie paliw (C, CH₄, C₃H₈, C₈H₁₈) liczysz w tym samym kalkulatorze stechiometrycznym (§24): wybierz reakcję spalania, wpisz masę paliwa — dostajesz masy CO₂, H₂O i O₂ z kontrolą masy.'), 'kalkulator spalania → odnośnik', widget=True)
# ---------- poprawki merytoryczne ----------
h = rep(z, h, '(tetratlenek dekatlenek difosforu)', '(dekatlenek tetrafosforu)', 'P₄O₁₀ — poprawna nazwa systematyczna')
h = rep(z, h, '<li>Niższa reaktywność / silniejsze wiązanie; Ca(OH)₂ „ciągnie” równowagę inaczej niż w przypadku Mg.</li>',
        '<li>MgO ma bardzo trwałą sieć jonową (mały jon Mg²⁺ — duża energia sieciowa), a powstający Mg(OH)₂ jest praktycznie nierozpuszczalny i pokrywa ziarna tlenku — reakcja biegnie bardzo wolno. CaO ma słabszą sieć, a Ca(OH)₂ jest tylko trudno rozpuszczalny — reakcja jest szybka i silnie egzotermiczna.</li>', 'MgO vs CaO — poprawne wyjaśnienie')
h = rep(z, h, 'Metale oddają elektrony → kationy → tlenki zasadowe. Niemetale przyjmują elektrony → aniony tlenowe → tlenki kwasowe.',
        'Metale łatwo oddają elektrony → w tlenkach występują jako kationy, a jon O²⁻ z wodą daje OH⁻ → tlenki zasadowe. Niemetale tworzą z tlenem wiązania kowalencyjne; ich tlenki z wodą dają kwasy tlenowe (H⁺ + aniony reszt kwasowych) → tlenki kwasowe.', 'dodatek A — model wiązania poprawiony')
h = rep(z, h, 'pierwszy nadprzewodnik powyżej temperatury ciekłego azotu (1987, Nobel 1987).', 'pierwszy nadprzewodnik powyżej temperatury wrzenia ciekłego azotu (77 K) — odkryty w 1987 r. Nagrodę Nobla 1987 otrzymali Bednorz i Müller za odkrycie nadprzewodnictwa w ceramice tlenkowej La–Ba–Cu–O (1986).', 'YBCO — Nobel dotyczył La–Ba–Cu–O')
h = rep(z, h, '<div class="formula-lg">ZnO + 2 NaOH → Na₂ZnO₂ + H₂O</div>', '<div class="formula-lg">ZnO + 2 NaOH → Na₂ZnO₂ + H₂O</div>' + note('Na₂ZnO₂ — zapis dla stopu / warunków bezwodnych; w roztworze wodnym: ZnO + 2 NaOH + H₂O → Na₂[Zn(OH)₄].'), 'ZnO + NaOH: zapis w roztworze')
h = rep(z, h, '<p class="mini-note">Plik L004 pojawi się w pakiecie jako kolejna lekcja; most merytoryczny już działa przez tlenek kwasowy + H₂O.</p>', '<p class="mini-note">Lekcje N03 Kwasy i N04 Sole są w panelu Lekcje → Chemia.</p>', 'most-l004: aktualny stan lekcji')
h = re.sub(r' Ćwicz sole/kwasy w <a href="[^"]+">Konstruktorze</a>\.', '', h); z.L('link zewn. w most-l004 usunięty')
# ---------- sekcje techniczne ----------
i, j = section(h, 'diag-l002'); h = h[:i] + h[j:]; z.L('diagnostyka lokalna (narzędzie przeglądarki) usunięta')
i = start_of_attr(h, 'id="mapExpand"'); h = h[:i] + h[end_of(h, i):]; z.L('mapa: bez nakładki')
REG = ('<section id="wiz-reg-l002"><div class="part-heading"><span class="part-num">↻</span> Modele silnika w tej lekcji</div><div class="table-wrap"><table><thead><tr><th>Sekcja</th><th>Model</th><th>Co pokazuje</th></tr></thead><tbody>'
       + ''.join('<tr><td>%s</td><td><code>%s</code></td><td>%s</td></tr>' % r for r in [('§4', 'n01-tlenki-v01', 'trzy pytania o tlenek, zlewka ze wskaźnikiem'), ('§4b', 'n01-konstruktor-v01', 'W–K–S–K, stopnie utlenienia, sprawdzanie wzoru'), ('§5', 'molecule3d-merged', 'geometria cząsteczek (VSEPR)'), ('§5b', 'periodic-54', 'pierwiastek → tlenek → charakter'),
          ('§6', 'n01-spalanie-v01', 'spalanie całkowite i niecałkowite'), ('§7', 'n01-reaktor-v01', 'przewidywanie produktów'), ('§8', 'chain-scn', 'łańcuchy przemian'), ('§14', 'n01-trend-v01', 'trend charakteru'), ('§21', 'n01-doswiadczenia-v01', 'pracownia doświadczeń'), ('§21', 'gfx-scene-carbonate', 'wykrywanie CO₂'), ('§24', 'stech-kalkulator-v01', 'obliczenia stechiometryczne')])
       + '</tbody></table></div><p class="mini-note">Stare widgety wbudowane w HTML (Detektor, Konstruktor, VSEPR, mini-układ, symulatory, galeria, kalkulatory) zastąpiono modelami silnika — jedno źródło danych dla lekcji, Atlasu i katalogu wizualizacji.</p></section>')
i, j = section(h, 'wiz-reg-l002'); h = h[:i] + REG + h[j:]; z.L('rejestr widgetów → tabela modeli silnika')
i, j = section(h, 'audyt'); aud = h[i:j]; inner = aud[aud.index('</div>', aud.index('part-heading')) + 6:aud.rindex('</section>')]
AUD = ('<section id="audyt"><div class="part-heading"><span class="part-num">✓</span> Audyt jakości <span class="level-badge level-new">KONTROLA</span></div>'
       + card('card-new', 'v6.0 CHE (2026-10) — integracja z silnikiem', '<ul><li>Widgety → modele silnika (tabela powyżej); galeria barw z CHE.DATA.OXIDES (audyt LES-N01).</li><li>Poprawki: nazwa P₄O₁₀ (dekatlenek tetrafosforu), MgO vs CaO (energia sieci, warstwa Mg(OH)₂), model wiązania w dodatku A, ZnO + NaOH w roztworze → Na₂[Zn(OH)₄], Nobel 1987 (La–Ba–Cu–O), eskolait, kody lekcji (N01, N02, N03, N04).</li><li>Korekta MASTER v5.9 włączona jako §4c (po modelu decyzyjnym).</li></ul>')
       + '<details><summary>Wcześniejsze wersje i audyty (dla autora)</summary>' + inner + '</details></section>')
h = h[:i] + AUD + h[j:]; z.L('audyt: historia zwinięta + karta v6.0')
CORR = re.sub(r'^<section[^>]*>', '<section id="n01-correction-v59">', CORR)
if 'part-heading' not in CORR[:300]: CORR = CORR.replace('<section id="n01-correction-v59">', '<section id="n01-correction-v59"><div class="part-heading"><span class="part-num">4c</span> Korekta: charakter ≠ woda ≠ rozpuszczalność <span class="level-badge level-understand">ROZUMIENIE</span></div>', 1)
i, j = section(h, 'oxide-decision-model'); h = h[:j] + CORR + h[j:]; z.L('korekta v5.9 → §4c')
h = h.replace('<span class="part-num">N01.59</span>', '<span class="part-num">4c</span>').replace('CHEMIA N01 v5.9 MASTER LAB', 'CHEMIA N01 v6.0 MASTER LAB')
i, j = section(h, 'dod-i'); sec = h[i:j]; ph = sec.index('</div>', sec.index('part-heading')) + 6
h = h[:i] + sec[:ph] + adv('Tlenki w technologii XXI w. — fotokataliza, elektronika, nadprzewodniki, ogniwa SOFC, nanocząstki', sec[ph:sec.rindex('</section>')], 'poza programem szkoły — ciekawostka akademicka') + '</section>' + h[j:]; z.L('dodatek I → adv')
# ---------- kody lekcji jak w panelu ----------
n = 0
for a, b in (('L002', 'N01'), ('L003', 'N02'), ('L004', 'N03'), ('L005', 'N04')):
    h, k = re.subn(r'(?<![\w-])%s(?![\w-])' % a, b, h); n += k
z.L('kody lekcji L002/L003/L004/L005 → N01/N02/N03/N04 (%d)' % n)
h, k = re.subn(r'<a [^>]*href="(?:CHE[^"]*|CHEMIA[^"]*)"[^>]*>(.*?)</a>', r'\1', h); z.L('linki do zewn. plików HTML → tekst (%d)' % k)
h = mark_rx(h); n_rx = h.count('data-rx="'); z.L('data-rx: %d równań' % n_rx)
# ---------- skrypty: fiszki, test adaptacyjny, quiz ----------
S = re.findall(r'<script>(.*?)</script>', src, re.S)[0]
def block(name):
    a = S.index('/* ==== %s' % name) if ('/* ==== %s' % name) in S else S.index(name); m = re.search(r'/\*\s*=+', S[a + 10:]); return S[a:a + 10 + m.start()] if m else S[a:]
JS = ''.join('<script>%s</script>\n' % block(n_) for n_ in ('Flashcards', 'Test adaptacyjny', 'Quiz główny')) + ADV_JS
import n01_merge
h = n01_merge.restructure(h, z.L)  # v6.1: scalenie powtórzeń, obce elementy → CHE, numeracja
TOC, nsec = toc(h)
k = h.index('</div>', h.index('id="minimum"')); k = end_of(h, start_of_attr(h, 'id="minimum"')); h = h[:k] + TOC + h[k:]
HERO = hero('N01 · CHEMIA · MASTER LAB v6.1', 'Tlenki', 'Definicja i nazewnictwo, W–K–S–K, charakter (zasadowy, kwasowy, obojętny, amfoteryczny) ≠ reakcja z wodą ≠ rozpuszczalność, reakcje z wodą, kwasami i zasadami, otrzymywanie, redukcja, trendy, barwy, BHP i środowisko. Modele i dane z silnika CHE.OXIDES.',
            [('basic', 'E8'), ('understand', 'ROZUMIENIE'), ('extra', 'AMBITNIE / LO')])
CSS, ncss = prune_css(src, h + HERO, n01_merge.MM_CSS + '.ox-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:8px 0}.ox-tile{display:flex;flex-direction:column;gap:2px;padding:8px 10px;border:1px solid var(--border,#e5e9ee);border-radius:10px;background:var(--surface,#fff)}.ox-tile b{font:800 15px/1.2 inherit}.ox-tile small{color:var(--text-soft,#4a5568);font-size:12px}.ox-sw{display:block;height:22px;border-radius:6px;border:1px solid rgba(0,0,0,.15);margin-bottom:4px}')
HTML = page('Chemia N01 — Tlenki (v6.1 MASTER LAB)', '<style id="n01-style">' + CSS + '</style>', HERO + h.strip(), JS)
HTML = EMOJI.sub('', HTML)
for bad in ('CHE.lab.v01.00.html', 'CHE.N02.v08.04.html', 'id="charSim"', 'id="oxideBuilder"', 'id="reactor"', 'id="diagSkillsOx"', 'che-lesson-data'):
    assert bad not in HTML, bad
open(os.path.join(D, 'n01_new.html'), 'w', encoding='utf-8').write(HTML)
print('OK N01', len(HTML), '| zmian:', len(z.log), '| sekcje:', nsec, '| viz:', HTML.count('che-lesson-viz-ref"'), '| data-rx:', n_rx, '| data-ox:', HTML.count('data-ox="'), '| CSS reguł:', ncss)
for x in z.log: print(' -', x)
