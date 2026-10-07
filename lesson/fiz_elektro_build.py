# -*- coding: utf-8 -*-
"""FIZ-01 Elektrostatyka v1.0 — fizyka E8 + rozszerzenie (LO) na danych CHE.FIZ.ELEKTRO (src/fiz_elektro.js).
Liczby z silnika oznaczone: data-fiz="e|k|me|epsr-woda", data-fiz-rho="id", data-fiz-tribo="plus>minus" — audyt LES-FIZ-01-* porównuje je z silnikiem.
Szereg tryboelektryczny i tabela ρ są generowane z pliku silnika (jedno źródło)."""
import os, re, json
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(D)
kw = open(os.path.join(D, 'kw_new.html'), encoding='utf-8').read()
VIZ_CSS = re.search(r'<style id="che-lesson-viz-ref-style">.*?</style>', kw, re.S).group(0)
V15_CSS = re.search(r'<style id="kw-v15-style">.*?</style>', kw, re.S).group(0)
sole = open(os.path.join(D, 'sole_new.html'), encoding='utf-8').read()
JS_T = sole[sole.rindex('<script>(function(){var cards='):sole.rindex('</script>') + 9]
JS_T = re.sub(r'var cards=\[.*?\]\];', 'var cards=@@C@@;', JS_T, count=1, flags=re.S)
JS_T = re.sub(r'var qs=\[.*?\]\];', 'var qs=@@Q@@;', JS_T, count=1, flags=re.S)
eng = open(os.path.join(ROOT, 'src', 'fiz_elektro.js'), encoding='utf-8').read()
TRIBO = re.findall(r"\{id:'(\w+)',name:'([^']+)',kind:'(\w+)'\}", eng[eng.index('const TRIBO'):eng.index('const RHO')])
RHO = re.findall(r"(\w+):\{name:'([^']+)',rho:([\d.e+-]+),kind:'([^']+)'\}", eng[eng.index('const RHO'):eng.index('const EPSR')])

def viz(vid, title, sub='Silnik CHE · fizyka · otwiera się w oknie'):
    return ('<div class="che-lesson-viz-ref" data-che-lesson-viz="%s"><button type="button" data-che-open-viz="%s" '
            'onclick="parent.postMessage({type:\'CHE_LESSON_OPEN_VISUAL\',visualId:\'%s\',lessonId:\'FIZ-01\'},\'*\')"><b>%s</b><span>%s</span></button></div>\n') % (vid, vid, vid, title, sub)
def adv(title, body):
    return '<details class="adv"><summary>%s <span class="adv-tag">poziom akademicki · poza maturą rozszerzoną</span></summary><div class="adv-body">%s</div></details>\n' % (title, body)
def card(cls, label, body):
    return '<div class="card %s"><span class="card-label">%s</span>%s</div>\n' % (cls, label, body)
def sec(n, title, body):
    return '<section id="s%s">\n<div class="part-heading"><span class="part-num">%s</span> %s</div>\n%s</section>\n\n' % (n, n, title, body)
def exp(title, rows):
    return '<div class="exp-card"><h5>%s</h5><div class="exp-grid">%s</div></div>\n' % (title, ''.join('<b>%s</b><span>%s</span>' % kv for kv in rows))
def table(head, rows):
    return '<div class="table-wrap"><table><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (''.join('<th>%s</th>' % h for h in head), ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % c for c in r) for r in rows))
def f(key, txt): return '<span data-fiz="%s">%s</span>' % (key, txt)
def fl(t): return '<div class="formula-lg">%s</div>' % t
SUP = str.maketrans('-0123456789', '⁻⁰¹²³⁴⁵⁶⁷⁸⁹')
def sci(v):
    v = float(v); e = int(('%e' % v).split('e')[1]); m = v / 10 ** e
    if -2 <= e <= 3: return ('%g' % v).replace('.', ',')
    return ('%g' % round(m, 2)).replace('.', ',') + '·10' + str(e).translate(SUP)

S = []
MIN = '''<section class="minimum-card" id="minimum"><h3>Muszę umieć na E8 — 10 faktów</h3><ol>
<li>Atom ma <strong>protony (+)</strong> w jądrze i <strong>elektrony (−)</strong> wokół jądra. Ciało <strong>obojętne</strong> ma ich tyle samo.</li>
<li>Ciało <strong>naelektryzowane ujemnie</strong> ma <strong>nadmiar elektronów</strong>, dodatnio — <strong>niedobór elektronów</strong>. Przemieszczają się tylko elektrony.</li>
<li>Ładunek jest wielokrotnością <strong>ładunku elementarnego</strong> e ≈ ''' + f('e', '1,6·10⁻¹⁹ C') + '''; jednostka ładunku — <strong>kulomb (1 C)</strong>.</li>
<li>Elektryzowanie: przez <strong>tarcie</strong>, przez <strong>dotyk</strong>, przez <strong>indukcję (wpływ)</strong>.</li>
<li><strong>Zasada zachowania ładunku</strong>: w układzie izolowanym suma ładunków się nie zmienia — ładunek tylko się przemieszcza.</li>
<li>Ładunki <strong>jednoimienne się odpychają</strong>, <strong>różnoimienne przyciągają</strong>; ciało naelektryzowane przyciąga też lekkie ciała obojętne.</li>
<li>Siła oddziaływania rośnie z ładunkami, maleje z odległością (2× dalej → 4× słabiej).</li>
<li><strong>Przewodniki</strong> (metale, grafit, roztwory jonów, ciało człowieka) mają swobodne nośniki ładunku; <strong>izolatory</strong> (szkło, guma, plastik, suche powietrze) — nie.</li>
<li><strong>Elektroskop</strong>: listki naładowane jednoimiennie odpychają się — im większy ładunek, tym większe wychylenie. Nie pokazuje znaku ładunku.</li>
<li><strong>Uziemienie</strong> odprowadza ładunek do ziemi; zastosowania: piorunochron, uziemienie cystern i stacji paliw, opaska antystatyczna.</li>
</ol></section>'''

S.append(sec('0a', 'Diagnoza startowa — sprawdź się, zanim zaczniesz', card('card-basic', '5 pytań (odpowiedzi ukryte)', '<ol><li>Z jakich cząstek zbudowany jest atom i jaki mają ładunek?</li><li>Co się dzieje z włosami po zdjęciu wełnianej czapki zimą — i dlaczego?</li><li>Czy metalowa łyżka przewodzi prąd? A plastikowa?</li><li>Dlaczego pracownik stacji paliw nie powinien chodzić w syntetycznym polarze?</li><li>Magnes przyciąga żelazo. Czy to oddziaływanie elektrostatyczne?</li></ol><details class="answer"><summary>Pokaż odpowiedzi</summary><ol><li>Protony (+) i neutrony (0) w jądrze, elektrony (−) wokół jądra.</li><li>Włosy elektryzują się przez tarcie jednoimiennie i odpychają — „stają dęba”.</li><li>Metalowa — tak (elektrony swobodne); plastikowa — nie (izolator).</li><li>Tarcie elektryzuje ubranie; iskra wyładowania może zapalić opary paliwa.</li><li>Nie — to magnetyzm (inna lekcja fizyki); żelazo nie musi być naelektryzowane.</li></ol></details><p class="mini-note">Jeśli pomyliłeś 1 lub 3 — zacznij od rozdziałów 1 i 4. Pytanie 5 to częsta pułapka: magnetyzm ≠ elektrostatyka.</p>')))

S.append(sec(0, 'Wzory, definicje i mnemotechniki — ściąga <span class="level-badge level-basic">E8</span> <span class="level-badge level-extra">LO</span>',
 card('card-core', 'Wzory (z jednostkami)', table(['Wielkość', 'Wzór', 'Jednostka', 'Kiedy używać'], [
  ['ładunek ciała', 'q = n · e', 'C (kulomb)', 'n — liczba nadmiarowych (−) lub brakujących (+) elektronów'],
  ['liczba elektronów', 'n = q / e', '—', 'ile elektronów przeszło'],
  ['dotyk 2 identycznych kul', 'q′ = (q₁ + q₂) / 2', 'C', 'zasada zachowania ładunku'],
  ['prawo Coulomba (E8+)', 'F = k · |q₁ · q₂| / r²', 'N', 'siła między ładunkami punktowymi'],
  ['w ośrodku (LO)', 'F = k · |q₁q₂| / (εr · r²)', 'N', 'woda: εr ≈ 80'],
  ['natężenie pola (LO)', 'E = F / q ;  E = k · Q / r²', 'N/C = V/m', 'pole ładunku punktowego'],
  ['napięcie (LO)', 'U = W / q', 'V = J/C', 'praca przy przenoszeniu ładunku'],
  ['pojemność (LO)', 'C = Q / U', 'F (farad)', 'kondensator']]) +
  '<p class="mini-note">Stałe z silnika: e = ' + f('e', '1,602·10⁻¹⁹ C') + ' · k = ' + f('k', '8,99·10⁹ N·m²/C²') + ' · 1 C ≈ 6,24·10¹⁸ e · przedrostki: 1 mC = 10⁻³ C, 1 µC = 10⁻⁶ C, 1 nC = 10⁻⁹ C.</p>')
 + card('card-basic', 'Definicje jednym zdaniem', '<dl>' + ''.join('<div class="def-item"><dt>%s</dt><dd>%s</dd></div>' % x for x in [
  ('Ładunek elektryczny', 'właściwość cząstek (protonów +, elektronów −) odpowiedzialna za oddziaływania elektryczne; jednostka 1 C.'),
  ('Elektryzowanie', 'nadawanie ciału ładunku przez przemieszczenie elektronów (tarcie, dotyk, indukcja).'),
  ('Przewodnik', 'ciało, w którym ładunki mogą się swobodnie przemieszczać (elektrony swobodne lub jony).'),
  ('Izolator', 'ciało, w którym ładunki praktycznie nie mogą się przemieszczać.'),
  ('Zasada zachowania ładunku', 'w układzie izolowanym całkowity ładunek nie zmienia się.'),
  ('Indukcja elektrostatyczna', 'rozdzielenie ładunków w przewodniku pod wpływem zbliżonego (niedotykającego) ciała naelektryzowanego.'),
  ('Uziemienie', 'połączenie ciała z ziemią przewodnikiem — umożliwia odpływ lub dopływ elektronów.'),
  ('Pole elektryczne', 'przestrzeń wokół ładunku, w której na inne ładunki działa siła elektryczna.')]) + '</dl>')
 + card('card-understand', 'Mnemotechniki', '<ul>'
  '<li><b>„Plus to brak”</b> — ciało dodatnie <b>nie dostało protonów</b>, tylko <b>straciło elektrony</b>. Przemieszczają się tylko elektrony.</li>'
  '<li><b>„Jednakowi się nie lubią”</b> — ładunki jednoimienne się odpychają, różnoimienne przyciągają.</li>'
  '<li><b>„Szkło w jedwabiu — plus, ebonit w suknie — minus”</b>: szkło + jedwab → szkło (+); ebonit + sukno → ebonit (−).</li>'
  '<li><b>„Dwa razy dalej — cztery razy słabiej”</b> (siła ∝ 1/r²): 3× dalej → 9× słabiej.</li>'
  '<li><b>„Listki mówią ILE, nie JAKI”</b> — elektroskop pokazuje wielkość ładunku, nie znak.</li>'
  '<li><b>Indukcja — 4 kroki „ZUZO”</b>: <b>Z</b>bliż pręt → <b>U</b>ziem → <b>Z</b>abierz palec → <b>O</b>ddal pręt ⇒ ładunek przeciwny do pręta.</li>'
  '<li><b>„Ostrze zbiera”</b> — na ostrzach przewodnika gromadzi się najwięcej ładunku (piorunochron).</li></ul>')))

S.append(sec(1, 'Ładunek elektryczny — skąd się bierze', card('card-core', 'Budowa atomu a ładunek',
 '<p>Każdy atom zawiera dodatnie <strong>protony</strong> (w jądrze) i ujemne <strong>elektrony</strong> (w chmurze elektronowej). Ich ładunki są równe co do wartości i przeciwne co do znaku. Atom ma tyle samo protonów i elektronów — jest <strong>obojętny</strong>.</p>'
 '<p>Protony są w jądrze uwięzione, elektrony zewnętrzne łatwo się odrywają. Dlatego <strong>przy elektryzowaniu przemieszczają się wyłącznie elektrony</strong>.</p>'
 + table(['Ciało', 'Elektrony vs protony', 'Ładunek'], [['obojętne', 'tyle samo', '0'], ['naelektryzowane ujemnie', 'nadmiar elektronów', '−'], ['naelektryzowane dodatnio', 'niedobór elektronów', '+']]))
 + card('card-basic', 'Ładunek elementarny i kulomb',
 '<p>Najmniejszy swobodny ładunek to <strong>ładunek elementarny</strong>: e = ' + f('e', '1,602·10⁻¹⁹ C') + '. Elektron ma ładunek −e, proton +e. Każdy ładunek ciała jest jego wielokrotnością:</p>' + fl('q = n · e') +
 '<p>1 kulomb to ładunek ok. <strong>6,24·10¹⁸</strong> elektronów. To dużo — przy pocieraniu balonu przenosimy zwykle nanokulomby (10⁻⁹ C), czyli miliardy elektronów.</p>'
 '<p class="mini-note">Masa elektronu: m<sub>e</sub> = ' + f('me', '9,11·10⁻³¹ kg') + ' — ok. 1836 razy mniej niż protonu.</p>')
 + card('card-new', 'Most do chemii', '<p><strong>Jon</strong> to atom (lub grupa atomów), który oddał lub przyjął elektrony: Na → Na⁺ + e⁻, Cl + e⁻ → Cl⁻. Ten sam mechanizm co przy elektryzowaniu — tylko na poziomie pojedynczych atomów. Atomy pierwiastków o dużej <strong>elektroujemności</strong> (Cl, O, F) chętnie przyjmują elektrony.</p>')
 + viz('kw-dysocjacja-v01', 'Chemia: jony w roztworze — przeniesienie protonu H⁺', 'Lekcja Kwasy · ten sam silnik')))

tribo_list = ' &gt; '.join('<span%s>%s</span>' % (' style="color:#b45309;font-weight:700"' if k == 'przewodnik' else '', n) for _, n, k in TRIBO)
S.append(sec(2, 'Elektryzowanie przez tarcie', card('card-core', 'Na czym polega',
 '<p>Przy pocieraniu dwóch ciał z różnych materiałów elektrony przechodzą z jednego na drugie. Ciało, które <strong>oddało</strong> elektrony, ładuje się <strong>dodatnio</strong>, ciało, które je <strong>przyjęło</strong> — <strong>ujemnie</strong>. Oba ładunki są równe co do wartości (zasada zachowania ładunku).</p>'
 '<ul><li data-fiz-tribo="szklo&gt;jedwab">szkło pocierane <strong>jedwabiem</strong> → szkło <strong>+</strong>, jedwab −</li>'
 '<li data-fiz-tribo="welna&gt;ebonit">ebonit (twarda guma) pocierany <strong>suknem</strong> → ebonit <strong>−</strong>, sukno +</li>'
 '<li data-fiz-tribo="wlosy&gt;balon">balon pocierany o <strong>włosy</strong> → balon <strong>−</strong>, włosy + (dlatego się „stawiają” — odpychają się jednoimiennie)</li></ul>')
 + card('card-understand', 'Szereg tryboelektryczny (z silnika CHE.FIZ.ELEKTRO)', '<p>Materiał stojący <strong>wcześniej</strong> oddaje elektrony materiałowi stojącemu <strong>dalej</strong>:</p><p style="line-height:1.9">(+) ' + tribo_list + ' (−)</p><p class="mini-note">Kolejność orientacyjna — zależy od wilgotności i czystości powierzchni. Metale (pomarańczowe) trzymane w ręce od razu się rozładowują — trzeba je trzymać za izolującą rączkę.</p>')
 + viz('fiz-elektryzowanie-v01', 'Pocieraj i sprawdź: kto oddaje elektrony + wahadełko elektrostatyczne', 'Szereg tryboelektryczny z silnika · animacja przepływu elektronów')))

S.append(sec(3, 'Oddziaływanie ładunków', card('card-core', 'Reguła',
 '<p>Ładunki <strong>jednoimienne</strong> (+ i +, − i −) się <strong>odpychają</strong>, <strong>różnoimienne</strong> się <strong>przyciągają</strong>. Siły działają na odległość, bez dotykania, i są wzajemne (III zasada dynamiki — obie siły mają tę samą wartość).</p>')
 + card('card-understand', 'Dlaczego naelektryzowany grzebień przyciąga obojętne skrawki papieru?',
 '<p>Ładunek grzebienia przesuwa ładunki w skrawku (w izolatorze — w obrębie cząsteczek: <strong>polaryzacja</strong>; w przewodniku — elektrony swobodne: <strong>indukcja</strong>). Bliżej grzebienia gromadzi się ładunek przeciwnego znaku, dalej — tego samego. Przyciąganie bliższego ładunku jest silniejsze niż odpychanie dalszego, więc wypadkowo skrawek jest <strong>przyciągany</strong>.</p>'
 '<p><strong>Wniosek do zadań:</strong> przyciąganie <em>nie dowodzi</em>, że oba ciała są naelektryzowane. <strong>Odpychanie</strong> — tak (oba mają ładunek tego samego znaku).</p>')
 + card('card-basic', 'Od czego zależy siła (jakościowo — E8)', '<ul><li>im <strong>większe ładunki</strong>, tym większa siła;</li><li>im <strong>większa odległość</strong>, tym siła mniejsza — 2× dalej → 4× słabiej, 3× dalej → 9× słabiej;</li><li>w wodzie i innych ośrodkach siła jest słabsza niż w powietrzu.</li></ul>')
 + viz('fiz-elektryzowanie-v01', 'Wahadełko: przyciąganie obojętnej kulki, dotyk, odpychanie')))

rho_rows = [[n, sci(r), k] for _id, n, r, k in RHO]
rho_rows = ['<tr><td>%s</td><td data-fiz-rho="%s">%s</td><td>%s</td></tr>' % (n, _id, sci(r), k) for _id, n, r, k in sorted(RHO, key=lambda x: float(x[2]))]
S.append(sec(4, 'Przewodniki i izolatory', card('card-core', 'Różnica',
 '<p><strong>Przewodnik</strong> zawiera swobodne nośniki ładunku: w metalach i graficie — <strong>elektrony swobodne</strong>, w roztworach i w ciele człowieka — <strong>jony</strong>. Ładunek rozpływa się po całym przewodniku.</p>'
 '<p><strong>Izolator</strong> (dielektryk) nie ma swobodnych nośników — ładunek zostaje tam, gdzie go umieszczono (dlatego tarciem łatwo elektryzować izolatory).</p>'
 '<p><strong>Półprzewodniki</strong> (krzem, german) przewodzą słabo, ale lepiej w wyższej temperaturze i po domieszkowaniu — podstawa elektroniki.</p>')
 + card('card-understand', 'Opór właściwy ρ — dane z silnika', '<div class="table-wrap"><table><thead><tr><th>Materiał</th><th>ρ [Ω·m] (20 °C)</th><th>Rodzaj</th></tr></thead><tbody>' + ''.join(rho_rows) + '</tbody></table></div><p class="mini-note">Różnica między miedzią a teflonem to ok. 30 rzędów wielkości! Woda z kranu przewodzi dzięki rozpuszczonym jonom (chemia: dysocjacja soli).</p>')
 + viz('fiz-przewodniki-v01', 'Przewodnik czy izolator? Rozpływ ładunku w pręcie', 'ρ z silnika · czas rozpływu ładunku') + viz('gfx-scene-conductivity', 'Chemia: przewodzenie prądu przez roztwory (elektrolity)', 'Lekcja Kwasy · tester przewodnictwa')))

S.append(sec(5, 'Elektryzowanie przez dotyk. Zasada zachowania ładunku', card('card-core', 'Elektryzowanie przez dotyk',
 '<p>Gdy ciało naelektryzowane dotknie ciała obojętnego (najlepiej przewodnika), część elektronów przechodzi z jednego na drugie. Oba ciała mają potem ładunek <strong>tego samego znaku</strong>.</p>')
 + card('card-basic', 'Zasada zachowania ładunku', '<p>W układzie izolowanym (bez wymiany ładunku z otoczeniem) <strong>suma ładunków jest stała</strong>. Ładunku nie można stworzyć ani zniszczyć — można go tylko przemieścić.</p>'
 + fl('q₁ + q₂ = q₁′ + q₂′') + '<p><strong>Dwie identyczne kulki przewodzące</strong> po zetknięciu mają równe ładunki:</p>' + fl('q′ = (q₁ + q₂) / 2') + '<p>Przykład: +6 nC i −2 nC → po zetknięciu każda ma +2 nC (suma +4 nC przed i po).</p>' + viz('fiz-ladunek-v01', 'Kule: dotyk, uziemienie, zasada zachowania, liczba elektronów', 'CHE.PHYS.electro.share · n = q/e'))
 + card('card-extra', 'Uziemienie', '<p>Ziemia to ogromny przewodnik. Połączenie z nią (przewód, dotknięcie ręką) praktycznie <strong>rozładowuje</strong> ciało: nadmiar elektronów odpływa do ziemi albo brakujące z niej napływają.</p>')))

# ---------- 5a. WYKŁAD: zasada zachowania ładunku, obliczenia w kulombach, uziemienie (v1.4) ----------
E_ = 1.602176634e-19
def nfmt(v, d=2):
    r = round(v, d); s = ('%g' % r).replace('.', ',').replace('-', '−'); return s
def qf(v, u='C'): return ('+' if v > 0 else '') + nfmt(v) + ' ' + u
def brq(v, u='C'): return '(' + qf(v, u) + ')' if v < 0 else qf(v, u)
def til(v):
    s = '−' if v < 0 else '+'; col = '#2563eb' if v < 0 else '#dc2626'; n = int(round(abs(v)))
    return ''.join('<span class="chg-t" style="background:%s">%s</span>' % (col, s) for _ in range(n)) or '<span class="chg-0">0</span>'
def share_ex(a, b, u='C'):
    s = (a + b) / 2
    return ('<div class="bil"><div><b>Przed:</b> q<sub>A</sub> + q<sub>B</sub> = %s + %s = <b>%s</b></div>' % (brq(a, u), brq(b, u), qf(a + b, u))
            + '<div class="bil-t"><span>A: %s</span><span>B: %s</span></div>' % (til(a), til(b))
            + '<div><b>Dotyk identycznych kul:</b> q′ = (q<sub>A</sub> + q<sub>B</sub>) / 2 = <span data-fiz-share="%s,%s" data-fiz-res="%s">%s / 2 = %s</span></div>' % (repr(a), repr(b), repr(s), qf(a + b, u), qf(s, u))
            + '<div class="bil-t"><span>A′: %s</span><span>B′: %s</span></div>' % (til(s), til(s))
            + '<div><b>Kontrola:</b> %s + %s = %s ✓</div></div>' % (brq(s, u), brq(s, u), qf(2 * s, u)))
def sci_(v):
    e = int(('%e' % v).split('e')[1]); m = v / 10 ** e
    return ('%.2f' % m).rstrip('0').rstrip('.').replace('.', ',') + '·10' + str(e).translate(SUP)
W = card('card-core', 'Najpierw nazwa: zasada zachowania ładunku', '<p>Prawo, które tu stosujemy, to <strong>zasada zachowania ładunku elektrycznego</strong>: w układzie izolowanym (bez wymiany ładunku z otoczeniem) <strong>suma ładunków jest stała</strong>. Ładunku nie tworzymy ani nie niszczymy — elektrony tylko przechodzą z ciała na ciało.</p>'
     + fl('q₁ + q₂ + … = q₁′ + q₂′ + … = const') + '<p class="mini-note">„Zasady zachowania potencjału” nie ma. Z potencjałem wiąże się inna reguła: gdy zetkniesz przewodniki, elektrony płyną tak długo, aż <strong>potencjały się wyrównają</strong> (rozszerzenie LO poniżej). To ona wyjaśnia, dlaczego identyczne kule dzielą się ładunkiem po równo, a uziemienie rozładowuje ciało.</p>')
W += card('card-basic', 'Ładunek to liczba ze znakiem i jednostką', '<p>Ładunek zapisujemy jak liczbę względną: <strong>+</strong> = niedobór elektronów, <strong>−</strong> = nadmiar elektronów, <strong>0</strong> = ciało obojętne. Jednostka: <strong>kulomb (C)</strong>. Każdy ładunek jest wielokrotnością ładunku elementarnego e ≈ ' + f('e', '1,6·10⁻¹⁹ C') + '.</p>'
     + table(['Przedrostek', 'Zapis', 'W kulombach', 'Przykład'], [['mili', '1 mC', '10⁻³ C', '3 mC = 0,003 C'], ['mikro', '1 µC', '10⁻⁶ C', '−4 µC = −0,000004 C'], ['nano', '1 nC', '10⁻⁹ C', '+6 nC = 6·10⁻⁹ C'], ['piko', '1 pC', '10⁻¹² C', '2 pC = 2·10⁻¹² C']])
     + '<p>Wzory: ' + fl('q = n · e') + fl('n = |q| / e') + '</p><p class="mini-note">1 C to bardzo dużo: ok. 6,24·10¹⁸ elektronów. W doświadczeniach szkolnych ładunki mają rząd nC–µC. W zadaniach rachunkowych często pojawiają się „okrągłe” wartości w C — metoda liczenia jest ta sama.</p>')
W += card('card-understand', 'Dodawanie ładunków — zawsze ze znakiem i w nawiasie', '<p>Ładunki ujemne piszemy w nawiasie, żeby nie zgubić znaku:</p>'
     + fl('0 C + (−4 C) = −4 C') + fl('(+6 nC) + (−2 nC) = +4 nC') + fl('(+3 µC) + (−3 µC) = 0')
     + '<p><strong>Graficznie:</strong> każdy „+” znosi się z jednym „−” (para = 0). Zostają niesparowane znaki — to wynik.</p>'
     + '<div class="bil"><div class="bil-t"><span>+6: %s</span><span>−2: %s</span></div><div>2 pary „+ −” znikają → zostaje %s = <b>+4</b></div></div>' % (til(6), til(-2), til(4)))
W += card('card-core', 'Dotyk identycznych kul przewodzących — przykłady krok po kroku', '<p>Procedura: 1) zapisz ładunki ze znakiem, 2) dodaj je (suma), 3) podziel sumę po równo między identyczne kule, 4) sprawdź, czy suma po = suma przed, 5) ustal, kto oddał, a kto przyjął elektrony.</p>'
     + '<h5>Przykład 1: A = 0 C, B = −4 C</h5>' + share_ex(0, -4) + '<p><b>Przepływ:</b> B zmieniła ładunek z −4 C na −2 C, czyli oddała ładunek −2 C — <strong>elektrony przeszły z B na A</strong>. Ich liczba: n = 2 C / 1,6·10⁻¹⁹ C ≈ <b>' + sci_(2 / E_) + '</b>. Protony się nie ruszają.</p>'
     + '<h5>Przykład 2: A = +6 nC, B = −2 nC</h5>' + share_ex(6, -2, 'nC') + '<p><b>Przepływ:</b> A: +6 → +2 nC (ładunek zmalał o 4 nC, więc A <em>przyjęła</em> elektrony); B: −2 → +2 nC (B <em>oddała</em> elektrony). Elektrony płynęły z B do A: n = 4·10⁻⁹ C / e ≈ ' + sci_(4e-9 / E_) + '.</p>'
     + '<h5>Przykład 3: trzy kule A = +8 µC, B = 0, C = 0</h5><div class="bil"><div>A dotyka B: (+8 µC + 0) / 2 = <span data-fiz-share="8,0" data-fiz-res="4">+4 µC</span> → A = +4 µC, B = +4 µC</div><div>B dotyka C: (+4 µC + 0) / 2 = <span data-fiz-share="4,0" data-fiz-res="2">+2 µC</span> → B = +2 µC, C = +2 µC</div><div><b>Kontrola:</b> 4 + 2 + 2 = 8 µC = ładunek na początku ✓</div><div>Gdyby dotknąć wszystkie trzy naraz: q′ = (+8 µC) / 3 ≈ +2,67 µC każda — kolejność i sposób dotykania zmieniają wynik, ale nie sumę.</div></div>'
     + '<h5>Przykład 4: A = +3 µC, B = −3 µC</h5><div class="bil"><div>(+3 µC) + (−3 µC) = 0 → po zetknięciu obie kule są <b>obojętne</b> (<span data-fiz-share="3,-3" data-fiz-res="0">0 µC</span>). Ładunki się zobojętniły, ale nie zniknęły: nadmiarowe elektrony B uzupełniły braki A.</div></div>'
     + viz('fiz-ladunek-v01', 'Bilans ładunku: dotyk, uziemienie, zapis „przed → po”, kafelki + i −, liczba elektronów', 'CHE.PHYS.electro.contact · ground · transfer · jednostki C, mC, µC, nC, e'))
W += card('card-extra', 'Uziemienie — gdzie znika ładunek?', '<p>Ziemia jest ogromnym przewodnikiem. Gdy połączysz z nią naelektryzowane ciało (przewód, dotknięcie ręką, metalowa rura), ładunek rozkłada się na układ <strong>ciało + Ziemia</strong>; na małym ciele zostaje praktycznie <strong>0</strong>. Ładunek nie znika — jest w Ziemi, więc zasada zachowania obowiązuje dla układu ciało + Ziemia.</p>'
     + table(['Ładunek ciała przed', 'Po uziemieniu', 'Co płynie', 'Ile elektronów'], [['−5 nC', '0', 'elektrony z ciała do ziemi', sci_(5e-9 / E_)], ['+8 µC', '0', 'elektrony z ziemi do ciała', sci_(8e-6 / E_)], ['−4 C', '0', 'elektrony z ciała do ziemi', sci_(4 / E_)], ['0', '0', 'nic — ciało obojętne', '0']])
     + '<p class="mini-note">Uwaga na język: przy uziemieniu ciała dodatniego nie „odpływają protony” — to <strong>elektrony napływają z ziemi</strong> i uzupełniają niedobór.</p>'
     + '<h5>Uziemienie a indukcja — ładowanie elektroskopu „na odwrót”</h5><ol><li>Zbliżasz pręt naelektryzowany ujemnie (nie dotykasz). W elektroskopie elektrony uciekają w dół, na kulce przewagę ma „+”.</li><li>Dotykasz kulkę palcem (uziemienie): odpychane elektrony odpływają do ziemi.</li><li>Zabierasz palec, potem pręt. Elektroskop ma <strong>niedobór elektronów → ładunek dodatni</strong>, przeciwny do ładunku pręta.</li></ol><p>Zastosowania uziemienia: piorunochron, uziemienie obudów urządzeń i cystern z paliwem, opaska antystatyczna przy elektronice, łańcuch lub pasek przewodzący przy cysternach.</p>')
W += adv('Wyrównanie potencjałów — kule różnej wielkości i dlaczego Ziemia „zabiera” ładunek', '<p>Potencjał naładowanej kuli o promieniu R: V = k·q / R. Po zetknięciu przewodników elektrony płyną, aż potencjały się zrównają: q₁/R₁ = q₂/R₂. Stąd przy zachowanej sumie Q:</p>'
     + fl('q₁′ = Q · R₁ / (R₁ + R₂),   q₂′ = Q · R₂ / (R₁ + R₂)')
     + '<p><b>Przykład:</b> kula 1 cm ma +6 nC, kula 2 cm jest obojętna. Po zetknięciu: q₁′ = 6 · 1/3 = <span data-fiz-sharer="6,0|1,2" data-fiz-res="2,4">+2 nC</span>, q₂′ = +4 nC. Większa kula bierze więcej ładunku, a potencjały są równe: V = k·(2 nC)/(0,01 m) ≈ ' + nfmt(8.9875517923e9 * 2e-9 / 0.01, 0) + ' V.</p>'
     + '<p>Ziemia ma promień ok. 6400 km, więc przy „zetknięciu” z małym ciałem prawie cały ładunek trafia do Ziemi — to właśnie uziemienie. Identyczne kule (R₁ = R₂) dzielą się po równo — szkolny wzór q′ = (q₁ + q₂)/2 jest szczególnym przypadkiem tej reguły.</p>')
W += card('card-warning', 'Typowe błędy w zadaniach', '<ul><li>Dodawanie bez znaku: „0 C i −4 C → 2 C każda” — źle, wynik to −2 C.</li><li>Dzielenie po równo kul różnej wielkości (to tylko dla identycznych).</li><li>„Przepłynęły protony” — w metalach przemieszczają się wyłącznie elektrony.</li><li>Po uziemieniu „ładunek zniknął” — jest w Ziemi; suma w układzie ciało + Ziemia stała.</li><li>Zapominanie o przeliczeniu nC, µC na C przed liczeniem elektronów.</li></ul>')
W += card('card-basic', 'Sprawdź się (odpowiedzi ukryte)', '<ol><li>A = −6 nC, B = +2 nC, identyczne, zetknięte. Ładunek każdej po zetknięciu?</li><li>Ile elektronów przeszło w zadaniu 1 i w którą stronę?</li><li>Kula ma −3,2·10⁻¹⁸ C. Ile ma nadmiarowych elektronów?</li><li>Kulę +5 µC uziemiono. Co płynie i ile?</li><li>Trzy identyczne kule: +9 C, −3 C, 0 C dotknięte naraz. Wynik?</li></ol><details class="answer"><summary>Odpowiedzi</summary><ol><li>(−6 + 2)/2 = <b>−2 nC</b> każda.</li><li>A: −6 → −2 nC (oddała elektrony), B: +2 → −2 nC (przyjęła). Z A do B przeszło 4 nC, czyli ' + sci_(4e-9 / E_) + ' elektronów.</li><li>n = 3,2·10⁻¹⁸ / 1,6·10⁻¹⁹ = <b>20</b> elektronów.</li><li>Elektrony z ziemi do kuli: 5·10⁻⁶ / 1,6·10⁻¹⁹ ≈ ' + sci_(5e-6 / E_) + '; kula po uziemieniu ma 0.</li><li>(9 − 3 + 0)/3 = <b>+2 C</b> każda.</li></ol></details>')
S.append(sec('5a', 'Wykład: zasada zachowania ładunku, obliczenia w kulombach i uziemienie <span class="level-badge level-basic">E8</span> <span class="level-badge level-extra">LO</span>', W))
S.append(sec(6, 'Elektroskop', card('card-core', 'Budowa',
 '<ul><li>metalowy pręt zakończony u góry kulką lub płytką,</li><li>dwa lekkie metalowe listki (lub wskazówka) na dole pręta,</li><li>szklana obudowa z <strong>izolatorem</strong> (korek, guma), przez który przechodzi pręt.</li></ul>')
 + card('card-basic', 'Działanie', '<p>Ładunek rozpływa się po pręcie i listkach. Listki mają ładunek <strong>tego samego znaku</strong>, więc się <strong>odpychają</strong> i rozchylają. Większy ładunek → większy kąt.</p><p><strong>Elektroskop nie pokazuje znaku ładunku.</strong> Znak sprawdzamy, zbliżając ciało o znanym ładunku: jeśli listki rozchylają się bardziej — ładunek jednoimienny, jeśli opadają — różnoimienny.</p>')
 + viz('fiz-elektroskop-v01', 'Elektroskop: dotyk, indukcja, uziemienie (scenariusz krok po kroku)', 'Model rozkładu ładunku z silnika')))

S.append(sec(7, 'Indukcja elektrostatyczna (elektryzowanie przez wpływ)', card('card-core', 'Zjawisko',
 '<p>Po <strong>zbliżeniu</strong> (bez dotykania) naładowanego ciała do przewodnika elektrony swobodne w przewodniku przesuwają się: ujemny pręt je odpycha, dodatni — przyciąga. Na bliższym końcu powstaje ładunek <strong>przeciwnego</strong> znaku, na dalszym — <strong>tego samego</strong>. Ładunek całkowity przewodnika się nie zmienia (= 0). Po oddaleniu pręta wszystko wraca do stanu początkowego.</p>')
 + card('card-basic', 'Trwałe naelektryzowanie przez indukcję — 4 kroki', '<ol><li>Zbliż naładowany pręt (np. ujemny) do kulki elektroskopu — listki się rozchylają.</li><li>Nie odsuwając pręta, dotknij kulki palcem (uziemienie) — elektrony uciekają do ziemi, listki opadają.</li><li>Zabierz palec (pręt nadal blisko).</li><li>Oddal pręt — elektroskop zostaje naładowany <strong>przeciwnie</strong> do pręta (tu: dodatnio), listki się rozchylają.</li></ol>')
 + card('card-extra', 'Zastosowania i skutki', table(['Gdzie', 'Co się dzieje'], [
  ['piorunochron', 'chmura indukuje ładunek w ostrzu; wyładowanie trafia w piorunochron i spływa przewodem do ziemi — budynek jest chroniony'],
  ['burza', 'ładunki rozdzielają się w chmurze (zderzenia kryształków lodu); piorun przenosi kilka–kilkadziesiąt kulombów w ułamku sekundy'],
  ['kserograf, drukarka laserowa', 'naelektryzowany bęben przyciąga toner tylko w miejscach obrazu'],
  ['filtry elektrostatyczne', 'pył w kominie elektrowni zostaje naładowany i osiada na elektrodach'],
  ['malowanie proszkowe / natryskowe', 'naładowane krople farby lecą do uziemionego elementu i pokrywają go równo, także od tyłu'],
  ['stacja paliw, cysterna', 'iskra może zapalić opary — cysterny i dystrybutory się uziemia'],
  ['elektronika', 'wyładowanie z ciała (kilka tysięcy woltów!) niszczy układy scalone — opaska antystatyczna, uziemione stanowisko'],
  ['klatka Faradaya', 'wewnątrz zamkniętego przewodnika pole elektryczne jest zerowe — samochód chroni przed piorunem, mikrofalówka zatrzymuje fale']]))
 + viz('fiz-elektroskop-v01', 'Scenariusz: elektryzowanie przez indukcję w 5 krokach')))

S.append(sec(8, 'Prawo Coulomba <span class="level-badge level-extra">E8+ / LO</span>', card('card-core', 'Wzór',
 fl('F = k · |q₁ · q₂| / r²') + '<p>k = ' + f('k', '8,99·10⁹ N·m²/C²') + ' (w próżni i — praktycznie — w powietrzu). F w niutonach, q w kulombach, r w metrach.</p>'
 '<ul><li>siła jest wprost proporcjonalna do iloczynu ładunków,</li><li>odwrotnie proporcjonalna do <strong>kwadratu</strong> odległości,</li><li>działa wzdłuż prostej łączącej ładunki (siły wzajemne, równe co do wartości).</li></ul>')
 + card('card-basic', 'Przykład', '<p>Dwa ładunki po 2 µC i 3 µC w odległości 30 cm (powietrze):</p>' + fl('F = 8,99·10⁹ · 2·10⁻⁶ · 3·10⁻⁶ / 0,3² ≈ 0,6 N') + '<p>Ładunki jednoimienne → odpychanie. To tyle, ile waży ciało o masie ok. 60 g.</p>')
 + card('card-new', 'Ośrodek — most do chemii', '<p>W ośrodku o przenikalności względnej ε<sub>r</sub> siła maleje ε<sub>r</sub> razy: F = k·|q₁q₂| / (ε<sub>r</sub>·r²). Dla wody ε<sub>r</sub> ≈ ' + f('epsr-woda', '80') + ' — dlatego woda tak skutecznie <strong>rozdziela jony</strong> kryształu soli (dysocjacja, lekcja Sole).</p>')
 + viz('fiz-coulomb-v01', 'Prawo Coulomba: siły, linie pola, ośrodek, wykres F(r)', 'k i εr z silnika')
 + adv('Elektryczność kontra grawitacja', '<p>Dla protonu i elektronu stosunek siły elektrycznej do grawitacyjnej F<sub>e</sub>/F<sub>g</sub> = k·e² / (G·m<sub>e</sub>·m<sub>p</sub>) ≈ 2,3·10³⁹ — niezależnie od odległości (obie siły ∝ 1/r²). W atomie wodoru (r ≈ 5,3·10⁻¹¹ m) F<sub>e</sub> ≈ 8,2·10⁻⁸ N. Grawitacja dominuje w kosmosie tylko dlatego, że ciała są prawie idealnie obojętne.</p>')
 + adv('Wektorowo i zasada superpozycji', '<p>F⃗₁₂ = k·q₁q₂/r² · r̂₁₂. Siła od kilku ładunków jest <strong>sumą wektorową</strong> sił od każdego z osobna. Przykład: ładunek w połowie odległości między dwoma identycznymi ładunkami — siła wypadkowa 0.</p>')))

S.append(sec(9, 'Pole elektryczne <span class="level-badge level-extra">LO</span>', card('card-core', 'Natężenie pola',
 '<p>Ładunek wytwarza wokół siebie <strong>pole elektryczne</strong> — każdy inny ładunek odczuwa w nim siłę. <strong>Natężenie pola</strong> to siła działająca na jednostkowy, dodatni ładunek próbny:</p>' + fl('E = F / q   [N/C = V/m]') + '<p>Dla ładunku punktowego: E = k·Q / r². <strong>Linie pola</strong> zaczynają się na ładunkach dodatnich i kończą na ujemnych; gęstsze linie — silniejsze pole.</p>')
 + card('card-basic', 'Rodzaje pól', '<ul><li><strong>centralne</strong> — wokół ładunku punktowego (linie radialne),</li><li><strong>jednorodne</strong> — między dwiema równoległymi płytami o przeciwnych ładunkach (linie równoległe, E = U/d),</li><li>wewnątrz przewodnika w równowadze E = 0 (klatka Faradaya); ładunek siedzi na powierzchni, najgęściej na <strong>ostrzach</strong>.</li></ul>')
 + viz('fiz-coulomb-v01', 'Linie pola dwóch ładunków (włącz/wyłącz)')
 + adv('Potencjał, napięcie, kondensator, elektronowolt', '<p><strong>Potencjał</strong> V = k·Q/r [V = J/C]; <strong>napięcie</strong> U = V<sub>A</sub> − V<sub>B</sub> = W/q. <strong>Kondensator</strong>: C = Q/U [F]; płaski: C = ε₀ε<sub>r</sub>S/d, energia W = ½CU². <strong>Elektronowolt</strong>: 1 eV = 1,602·10⁻¹⁹ J — energia elektronu przyspieszonego napięciem 1 V. Prawo Gaussa: strumień E przez powierzchnię zamkniętą = Q<sub>wewn</sub>/ε₀.</p>')))

EXPS = [
 exp('Doświadczenie 1 — Balon i skrawki papieru', [('Problem', 'Czy naelektryzowany balon przyciąga lekkie ciała?'), ('Sprzęt', 'balon, wełniany sweter lub suche włosy, skrawki papieru'), ('Przebieg', 'Pocieraj balon o włosy, zbliż do skrawków.'), ('Obserwacja', 'Skrawki podskakują i przyklejają się do balonu, po chwili część odpada.'), ('Wniosek', 'Balon naelektryzował się (−); skrawki są przyciągane przez polaryzację. Po dotyku przejmują ładunek i odpadają (odpychanie).')]),
 exp('Doświadczenie 2 — Grzebień i strumień wody', [('Problem', 'Czy ładunek działa na ciecz?'), ('Przebieg', 'Naelektryzowany grzebień zbliż do cienkiego strumienia wody z kranu.'), ('Obserwacja', 'Strumień wyraźnie się wygina w stronę grzebienia.'), ('Wniosek', 'Ładunek grzebienia przesuwa ładunki w wodzie (cząsteczki H₂O są polarne, woda z kranu zawiera jony) — strumień jest przyciągany.')]),
 exp('Doświadczenie 3 — Elektroskop ze słoika', [('Sprzęt', 'słoik, plastikowa pokrywka (izolator), drut miedziany, folia aluminiowa'), ('Wykonanie', 'Drut przebij przez pokrywkę, u góry kulka z folii, na dole zagięty haczyk z dwoma paskami cienkiej folii.'), ('Test', 'Zbliż naelektryzowany balon — paski się rozchylają (indukcja); dotknij — zostają rozchylone (dotyk).')]),
 exp('Doświadczenie 4 — Wahadełko elektrostatyczne', [('Sprzęt', 'kulka z folii aluminiowej na nitce, naelektryzowany pręt (ebonit, PVC, balon)'), ('Obserwacja', 'Kulka najpierw jest przyciągana, po dotknięciu — gwałtownie odpychana.'), ('Wniosek', 'Przyciąganie obojętnej kulki → indukcja; po dotyku kulka ma ładunek tego samego znaku → odpychanie.')]),
 exp('Doświadczenie 5 — Puszka toczona balonem', [('Przebieg', 'Pustą puszkę aluminiową połóż na stole, zbliż naelektryzowany balon (bez dotykania).'), ('Obserwacja', 'Puszka toczy się za balonem.'), ('Wniosek', 'Indukcja w metalu: bliższa strona puszki ma ładunek przeciwny do balonu.')]),
 exp('Doświadczenie 6 — Przewodnik czy izolator?', [('Przebieg', 'Naładuj elektroskop, a następnie dotykaj kulki: drutem trzymanym w ręce, plastikową linijką, ołówkiem (grafit), suchym i wilgotnym sznurkiem.'), ('Obserwacja', 'Drut, grafit i wilgotny sznurek rozładowują elektroskop (listki opadają), linijka i suchy sznurek — nie.'), ('Wniosek', 'Przewodniki odprowadzają ładunek do ziemi przez nasze ciało; woda w sznurku przewodzi dzięki jonom.')]),
 exp('Doświadczenie 7 — Elektryzowanie elektroskopu przez indukcję', [('Przebieg', '4 kroki z rozdziału 7.'), ('Obserwacja', 'Na końcu listki rozchylone, mimo że pręt nigdy nie dotknął elektroskopu.'), ('Sprawdzenie znaku', 'Zbliż ponownie ten sam pręt — listki opadają, więc ładunek elektroskopu jest przeciwny do ładunku pręta.')])]
S.append(sec(10, 'Doświadczenia', viz('fiz-elektryzowanie-v01', 'Pracownia: tarcie i wahadełko') + viz('fiz-elektroskop-v01', 'Pracownia: elektroskop') + ''.join(EXPS)
 + card('card-extra', 'BHP i praktyka', '<ul><li>Doświadczenia elektrostatyczne wychodzą w <strong>suchym</strong> powietrzu (zimą) — wilgoć rozładowuje ciała.</li><li>Nie wykonuj doświadczeń przy otwartych oparach paliw i rozpuszczalników.</li><li>Maszyna elektrostatyczna i generator Van de Graaffa — tylko pod okiem nauczyciela (wyładowania są bezpieczne dla zdrowej osoby, ale bolesne; niebezpieczne dla osób z rozrusznikiem).</li><li>Podczas burzy: nie stój pod samotnym drzewem, nie kąp się, w samochodzie jesteś bezpieczny (klatka Faradaya).</li></ul>')))

KLIN = [('Przy pocieraniu przechodzą protony.', 'Przechodzą tylko elektrony.', 'Protony są uwięzione w jądrach atomów.'),
 ('Ciało dodatnie ma nadmiar protonów, które dostało.', 'Ciało dodatnie ma niedobór elektronów.', 'Liczba protonów się nie zmienia — ciało oddało elektrony.'),
 ('Tarcie wytwarza ładunek.', 'Tarcie rozdziela ładunek.', 'Zasada zachowania ładunku: ile jedno ciało ma +, tyle drugie −.'),
 ('Skoro ciała się przyciągają, oba są naelektryzowane.', 'Przyciąganie może zachodzić między ciałem naładowanym i obojętnym.', 'Polaryzacja / indukcja. Pewnym dowodem jest tylko odpychanie.'),
 ('Elektroskop pokazuje, czy ładunek jest + czy −.', 'Elektroskop pokazuje tylko, czy (i ile) ładunku jest.', 'Znak ustala się ciałem o znanym ładunku.'),
 ('2× większa odległość → siła 2× mniejsza.', '2× większa odległość → siła 4× mniejsza.', 'F ∝ 1/r² (prawo Coulomba).'),
 ('Metalu nie da się naelektryzować przez tarcie.', 'Da się, jeśli jest odizolowany (trzymany za izolującą rączkę).', 'W ręce ładunek natychmiast spływa przez ciało do ziemi.'),
 ('Piorunochron przyciąga pioruny, więc jest niebezpieczny.', 'Piorunochron chroni budynek.', 'Bezpiecznie odprowadza ładunek wyładowania przewodem do ziemi.'),
 ('Przy indukcji przewodnik zyskuje ładunek.', 'Przy indukcji ładunek tylko się rozsuwa (suma = 0).', 'Trwały ładunek pojawia się dopiero po uziemieniu i jego odłączeniu.')]
kl = '<div class="table-wrap"><table class="klinika-table"><thead><tr><th>Błąd</th><th>Poprawnie</th><th>Dlaczego?</th></tr></thead><tbody>' + ''.join('<tr class="error-row"><td class="col-blad" data-label="Błąd">%s</td><td class="col-ok" data-label="Poprawa">%s</td><td data-label="Dlaczego">%s</td></tr>' % k for k in KLIN) + '</tbody></table></div>'
S.append(sec(11, 'Klinika błędów', kl))

PRZ = card('card-core', 'Jak rozwiązywać zadania — schemat', '<ol><li><b>Wypisz dane</b> z jednostkami; zamień nC, µC na C, cm na m.</li><li><b>Nazwij zjawisko</b>: tarcie / dotyk / indukcja / Coulomb.</li><li><b>Wybierz wzór</b> z ściągi (sekcja 0).</li><li><b>Podstaw i policz</b> — potęgi dziesiątki osobno: 10⁻⁶ · 10⁻⁶ = 10⁻¹².</li><li><b>Sprawdź sens</b>: znak ładunku, czy siła rośnie/maleje zgodnie z intuicją, czy suma ładunków się zgadza.</li></ol>')
for t, steps in [
 ('Przykład 1 (E8) — ile elektronów?', ['Dane: q = −4,8·10⁻¹⁹ C; szukane: n.', 'Wzór: n = |q| / e.', 'n = 4,8·10⁻¹⁹ / 1,6·10⁻¹⁹ = 3.', 'Odpowiedź: 3 nadmiarowe elektrony (ładunek ujemny = nadmiar).']),
 ('Przykład 2 (E8) — dotyk trzech kul', ['Kule identyczne: A = +9 nC, B = −3 nC. Dotykamy A z B.', 'Suma: +9 + (−3) = +6 nC → po zetknięciu po +3 nC.', 'Kontrola: przed 6 nC, po 3 + 3 = 6 nC ✓ (zasada zachowania).']),
 ('Przykład 3 (E8+) — prawo Coulomba', ['Dane: q₁ = 3 µC = 3·10⁻⁶ C, q₂ = −2 µC, r = 20 cm = 0,2 m.', 'F = k·|q₁q₂|/r² = 8,99·10⁹ · 6·10⁻¹² / 0,04.', 'F = 8,99·10⁹ · 1,5·10⁻¹⁰ ≈ 1,35 N.', 'Znaki różne → przyciąganie.']),
 ('Przykład 4 (E8+) — co, jeśli…', ['Odległość zmalała 2 razy: F rośnie 2² = 4 razy.', 'Jeden ładunek wzrósł 3 razy, odległość wzrosła 3 razy: F · 3 / 9 = F/3.', 'Wskazówka: najpierw zapisz F ∝ q₁q₂/r², potem podstaw zmiany.']),
 ('Przykład 5 (LO) — natężenie pola', ['Q = 2 nC, r = 30 cm: E = k·Q/r² = 8,99·10⁹ · 2·10⁻⁹ / 0,09 ≈ 200 N/C.', 'Siła na elektron w tym miejscu: F = eE ≈ 1,6·10⁻¹⁹ · 200 = 3,2·10⁻¹⁷ N.'])]:
    PRZ += card('card-basic', t, '<ol>' + ''.join('<li>%s</li>' % x for x in steps) + '</ol>')
S.append(sec('11a', 'Przykłady prowadzone krok po kroku', PRZ + viz('fiz-ladunek-v01', 'Sprawdź przykład 2 na modelu kul') + viz('fiz-coulomb-v01', 'Sprawdź przykłady 3–5 w modelu Coulomba')))
HINTS = {1:'n = |q|/e', 2:'q = n·e, znak: nadmiar e → minus', 3:'kto stoi wcześniej w szeregu tryboelektrycznym, oddaje elektrony', 4:'zsumuj i podziel na 2', 5:'czy są swobodne nośniki ładunku?', 6:'zbliżenie jednoimiennego ładunku spycha elektrony do listków', 7:'polaryzacja / indukcja w ścianie', 8:'F ∝ q₁q₂/r²', 9:'ZUZO: zbliż, uziem, zabierz palec, oddal', 10:'0,5 µC = 5·10⁻⁷ C; n = q/e', 11:'zamień µC na C i cm na m', 12:'dotykaj po kolei; suma się nie zmienia', 13:'E = kQ/r², a = eE/mₑ', 14:'wektory od obu ładunków znoszą się', 15:'siła maleje εr razy'}
def lvl(t, qs, ans, start):
    return '<h3>%s</h3><div class="card"><ol start="%d">%s</ol><details class="answer"><summary>Pokaż podpowiedzi</summary><ol start="%d">%s</ol></details><details class="answer"><summary>Pokaż odpowiedzi</summary><ol start="%d">%s</ol></details></div>\n' % (t, start, ''.join('<li>%s</li>' % q for q in qs), start, ''.join('<li>%s</li>' % HINTS.get(start + i, 'wróć do ściągi wzorów (sekcja 0)') for i in range(len(qs))), start, ''.join('<li>%s</li>' % a for a in ans))
EX = lvl('Poziom A — podstawa (E8)', ['Kulka ma ładunek −3,2·10⁻¹⁹ C. Ile ma nadmiarowych elektronów?', 'Ciało ma 5·10⁹ nadmiarowych elektronów. Oblicz jego ładunek.', 'Szklaną pałeczkę potarto jedwabiem. Jaki znak ładunku ma każde z ciał i dlaczego?', 'Dwie identyczne metalowe kulki: +6 nC i −2 nC. Jaki ładunek ma każda po zetknięciu?', 'Wymień trzy przewodniki i trzy izolatory.'],
 ['n = q/e = 3,2·10⁻¹⁹ / 1,6·10⁻¹⁹ = 2 elektrony.', 'q = n·e = 5·10⁹ · 1,6·10⁻¹⁹ C = 8·10⁻¹⁰ C, znak ujemny: q = −8·10⁻¹⁰ C (−0,8 nC).', 'Szkło +, jedwab −: szkło oddało elektrony jedwabiowi (stoi wcześniej w szeregu tryboelektrycznym).', '(+6 − 2)/2 = +2 nC każda.', 'Przewodniki: miedź, aluminium, grafit, woda z solą, ciało człowieka. Izolatory: szkło, guma, plastik, suche drewno, suche powietrze.'], 1)
EX += lvl('Poziom B — trening (E8)', ['Do kulki naładowanego elektroskopu zbliżono pręt naładowany ujemnie — listki rozchyliły się bardziej. Jaki znak ma ładunek elektroskopu?', 'Dlaczego naelektryzowany balon przykleja się do ściany?', 'Jak zmieni się siła oddziaływania dwóch ładunków, gdy odległość wzrośnie 3 razy? A gdy oba ładunki wzrosną 2 razy?', 'Opisz, jak naelektryzować elektroskop dodatnio, mając tylko pręt naładowany ujemnie.'],
 ['Ujemny — zbliżenie ładunku jednoimiennego spycha więcej elektronów do listków.', 'Balon (−) indukuje w ścianie ładunek dodatni na powierzchni (polaryzacja) — przyciąganie.', '9 razy mniejsza; 4 razy większa.', 'Indukcja: zbliż pręt, uziem kulkę palcem, zabierz palec, oddal pręt — elektroskop ma ładunek dodatni.'], 6)
EX += lvl('Poziom C — ambitny', ['Balon ma ładunek −0,5 µC. Ile elektronów przeszło na niego z włosów?', 'Oblicz siłę między ładunkami 2 µC i 3 µC odległymi o 30 cm. Czy to przyciąganie, czy odpychanie?', 'Trzy identyczne kulki: A = +8 nC, B = 0, C = 0. Dotykamy A do B, potem B do C. Jakie są ładunki końcowe?'],
 ['n = 0,5·10⁻⁶ / 1,602·10⁻¹⁹ ≈ 3,1·10¹² elektronów.', 'F = 8,99·10⁹ · 6·10⁻¹² / 0,09 ≈ 0,6 N — odpychanie (ładunki jednoimienne).', 'A–B: po +4 nC. B–C: po +2 nC. Wynik: A = +4 nC, B = +2 nC, C = +2 nC (suma 8 nC — zachowana).'], 10)
EX += lvl('Poziom D — LO rozszerzone', ['Oblicz natężenie pola ładunku 1 nC w odległości 10 cm oraz przyspieszenie elektronu w tym miejscu.', 'Dwa ładunki +q w odległości 2a. Ile wynosi natężenie pola w połowie odległości? Uzasadnij.', 'Dlaczego w wodzie (εr ≈ 80) kryształ NaCl rozpada się na jony, a w benzynie (εr ≈ 2) — nie?'],
 ['E = k·Q/r² = 8,99·10⁹ · 10⁻⁹ / 0,01 ≈ 900 N/C; F = eE ≈ 1,44·10⁻¹⁶ N; a = F/m<sub>e</sub> ≈ 1,6·10¹⁴ m/s².', 'E = 0 — wektory natężeń od obu ładunków mają równe wartości i przeciwne zwroty (superpozycja).', 'Siła przyciągania Na⁺ i Cl⁻ maleje εr razy; w wodzie ~80× — energia cieplna i hydratacja wystarczają, by rozdzielić jony; w benzynie siła prawie się nie zmienia.'], 13)
S.append(sec(12, 'Ćwiczenia', EX))

CARDS = [['Ładunek elementarny', 'e ≈ 1,6·10⁻¹⁹ C'], ['1 C to ile elektronów?', 'ok. 6,24·10¹⁸'], ['Ciało naelektryzowane ujemnie', 'nadmiar elektronów'], ['Ciało naelektryzowane dodatnio', 'niedobór elektronów'], ['Co się przemieszcza przy elektryzowaniu?', 'tylko elektrony'],
 ['3 sposoby elektryzowania', 'tarcie, dotyk, indukcja (wpływ)'], ['Zasada zachowania ładunku', 'w układzie izolowanym suma ładunków jest stała'], ['Szkło + jedwab', 'szkło +, jedwab −'], ['Ebonit + sukno', 'ebonit −, sukno +'],
 ['Przewodnik', 'ma swobodne nośniki ładunku (elektrony lub jony)'], ['Izolator', 'brak swobodnych nośników; ładunek zostaje w miejscu'], ['Elektroskop', 'wykrywa ładunek; listki odpychają się jednoimiennie; nie pokazuje znaku'],
 ['Uziemienie', 'połączenie z ziemią — rozładowuje ciało'], ['Prawo Coulomba', 'F = k·|q₁q₂| / r², k ≈ 9·10⁹ N·m²/C²'], ['2× większa odległość', 'siła 4× mniejsza'], ['Natężenie pola', 'E = F/q [N/C]'], ['Klatka Faradaya', 'wewnątrz przewodnika pole = 0']]
QS = [['Co przemieszcza się przy elektryzowaniu przez tarcie?', ['protony', 'elektrony', 'neutrony'], 1], ['Ciało naelektryzowane dodatnio ma…', ['nadmiar protonów', 'niedobór elektronów', 'nadmiar elektronów'], 1],
 ['Ebonit pocierany suknem ładuje się…', ['dodatnio', 'ujemnie', 'nie elektryzuje się'], 1], ['Który materiał jest przewodnikiem?', ['guma', 'grafit', 'szkło'], 1],
 ['Dwie identyczne kulki: +4 nC i 0. Po zetknięciu każda ma…', ['+4 nC', '+2 nC', '0'], 1], ['Listki elektroskopu się rozchylają, bo…', ['mają ładunki różnoimienne', 'mają ładunki jednoimienne', 'są obojętne'], 1],
 ['Odległość między ładunkami wzrosła 2 razy. Siła…', ['zmalała 2 razy', 'zmalała 4 razy', 'wzrosła 4 razy'], 1], ['Naelektryzowany grzebień przyciąga skrawki papieru, bo…', ['papier jest naelektryzowany ujemnie', 'w papierze następuje polaryzacja ładunków', 'działa grawitacja'], 1],
 ['Ładunek 1 C to ok.…', ['6,24·10¹⁸ elektronów', '1,6·10⁻¹⁹ elektronów', '1000 elektronów'], 0], ['Piorunochron…', ['przyciąga burzę', 'odprowadza ładunek wyładowania do ziemi', 'izoluje dach'], 1]]
JS = JS_T.replace('@@C@@', json.dumps(CARDS, ensure_ascii=False)).replace('@@Q@@', json.dumps(QS, ensure_ascii=False))
EGZ = card('card-core', 'Typowe zadania E8 — jak je rozpoznać', table(['Typ zadania', 'Co sprawdza', 'Klucz do odpowiedzi'], [
 ['„Wyjaśnij, dlaczego balon przyczepił się do ściany”', 'indukcja / polaryzacja', 'balon naelektryzowany → w ścianie przesunięcie ładunków → bliżej ładunek przeciwny → przyciąganie'],
 ['„Jaki ładunek uzyska pałeczka…” (szereg podany w zadaniu)', 'tarcie', 'oddaje elektrony materiał stojący wcześniej → +; przyjmuje → −'],
 ['„Kulki zetknięto — jaki mają ładunek?”', 'zasada zachowania ładunku', 'q′ = (q₁ + q₂)/2 dla identycznych kul'],
 ['„Uzupełnij zdania: listki elektroskopu…”', 'budowa i działanie elektroskopu', 'listki mają ładunek jednoimienny → odpychają się'],
 ['„Wybierz przewodniki / izolatory”', 'klasyfikacja materiałów', 'metale, grafit, woda z solą — przewodniki; szkło, guma, plastik, suche drewno — izolatory'],
 ['„Zaplanuj doświadczenie…”', 'metoda naukowa', 'problem → hipoteza → zestaw → przebieg → obserwacja → wniosek; zmieniaj jedną zmienną'],
 ['„Oblicz, ile elektronów…” (E8+)', 'q = n·e', 'n = q/e; uważaj na przedrostki nC, µC'],
 ['„Jak zmieni się siła…” (E8+)', 'F ∝ q₁q₂/r²', '2× dalej → ¼; 2× większy ładunek → 2×']]))
EGZ += card('card-extra', 'Zadanie egzaminacyjne z rozwiązaniem (otwarte)', '<p><b>Treść:</b> Ania potarła plastikową linijkę o włosy i zbliżyła ją do strumienia wody z kranu. Strumień się wygiął. Wyjaśnij zjawisko i podaj, jak zmieni się efekt, gdy linijkę odsunie dalej.</p><details class="answer"><summary>Wzorcowa odpowiedź</summary><p>Linijka naelektryzowała się przez tarcie (przejęła elektrony z włosów — ładunek ujemny). Jej ładunek przesuwa ładunki w wodzie (polaryzacja cząsteczek H₂O, jony w wodzie z kranu) — bliżej linijki gromadzi się ładunek przeciwnego znaku, więc woda jest przyciągana i strumień się wygina. Po odsunięciu linijki siła maleje (szybko, bo zależy od odległości), więc strumień wygina się słabiej.</p><p class="mini-note">Punktowane elementy: elektryzowanie przez tarcie · przesunięcie ładunków w wodzie · przyciąganie · zależność od odległości.</p></details>')
S.append(sec('12a', 'Zadania egzaminacyjne E8 — typy i wzorcowe odpowiedzi', EGZ))
MAPA = '<pre style="font:13px/1.5 ui-monospace,Consolas,monospace;white-space:pre-wrap;background:var(--surface-soft,#f6f8fa);padding:12px;border-radius:10px">ELEKTROSTATYKA\n├── ŁADUNEK: proton +e, elektron −e · q = n·e · 1 C\n├── ELEKTRYZOWANIE\n│   ├── tarcie → szereg tryboelektryczny (ładunki przeciwne)\n│   ├── dotyk → ładunek tego samego znaku · (q₁+q₂)/2\n│   └── indukcja → ZUZO → ładunek przeciwny\n├── ODDZIAŁYWANIE: jednoimienne ↔ odpychanie, różnoimienne ↔ przyciąganie\n│   └── F = k·|q₁q₂|/r² (E8+) · 2× dalej → ¼\n├── MATERIAŁY: przewodniki (e⁻ swobodne, jony) · izolatory · półprzewodniki\n├── PRZYRZĄDY: elektroskop (ILE, nie JAKI) · uziemienie\n├── ZASTOSOWANIA: piorunochron · ksero · filtry · malowanie · klatka Faradaya\n└── LO: pole E = F/q · linie pola · potencjał · napięcie · kondensator</pre>'
CHK = '<ul style="list-style:none;padding:0">' + ''.join('<li>☐ %s</li>' % x for x in ['wyjaśniam, skąd ciało ma ładunek (nadmiar / niedobór elektronów)', 'liczę q = n·e i n = q/e', 'przewiduję znaki ładunków po tarciu (szereg)', 'stosuję zasadę zachowania ładunku przy dotyku', 'opisuję budowę i działanie elektroskopu', 'wyjaśniam przyciąganie ciała obojętnego (polaryzacja/indukcja)', 'opisuję 4 kroki elektryzowania przez indukcję', 'podaję 3 przewodniki i 3 izolatory oraz przykłady zastosowań i zagrożeń', '(E8+) obliczam siłę z prawa Coulomba i jej zmianę', '(LO) obliczam natężenie pola ładunku punktowego']) + '</ul>'
POW = table(['Kiedy', 'Co', 'Ile'], [['dziś', 'sekcja 0 + mnemotechniki', '10 min'], ['jutro', 'fiszki + diagnoza startowa', '5 min'], ['za 3 dni', 'przykłady prowadzone (bez patrzenia)', '15 min'], ['za tydzień', 'ćwiczenia A–B + test', '20 min'], ['za 3 tygodnie', 'zadania egzaminacyjne 12a', '20 min']])
S.append(sec('14a', 'Mapa myśli, checklista i plan powtórek', card('card-basic', 'Mapa myśli', MAPA) + card('card-core', 'Checklista — umiem…', CHK) + card('card-understand', 'Plan powtórek (krzywa zapominania)', POW)))
S.append(sec(13, 'Fiszki', '<div class="flashcard-grid" id="flashcards"></div>'))
S.append(sec(14, 'Test', '<div id="quizWrap"></div><div class="quiz-score" id="quizScore"></div>'))
S.append(sec(15, 'Słownik i mosty', '<div class="card"><dl>' + ''.join('<div class="def-item"><dt>%s</dt><dd>%s</dd></div>' % x for x in [
 ('Ładunek elektryczny q', 'wielkość opisująca oddziaływania elektryczne; jednostka 1 C'), ('Ładunek elementarny e', 'najmniejszy swobodny ładunek, ≈ 1,6·10⁻¹⁹ C'), ('Indukcja elektrostatyczna', 'przesunięcie ładunków w przewodniku pod wpływem zewnętrznego ładunku'),
 ('Polaryzacja', 'przesunięcie ładunków w cząsteczkach izolatora'), ('Uziemienie', 'połączenie ciała z ziemią przewodnikiem'), ('Elektroskop', 'przyrząd do wykrywania ładunku'), ('Szereg tryboelektryczny', 'kolejność materiałów wg skłonności do oddawania elektronów')]) + '</dl></div>'
 + card('card-new', 'Mosty', '<ul><li><strong>Chemia N03 Kwasy</strong> — jony, dysocjacja, przewodzenie prądu przez roztwory, elektroliza.</li><li><strong>Chemia N04 Sole</strong> — kryształy jonowe, rola wody (ε<sub>r</sub> ≈ 80).</li><li><strong>Fizyka — dalej</strong>: prąd elektryczny (ruch ładunków), napięcie, prawo Ohma (opór właściwy ρ z tej lekcji), magnetyzm.</li></ul>')))

TOC = '<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links">' + ''.join('<a class="toc-link" href="#s%s">%s. %s</a>' % (i, i, t) for i, t in [('0a', 'Diagnoza startowa'), (0, 'Wzory i mnemotechniki'), (1, 'Ładunek'), (2, 'Tarcie'), (3, 'Oddziaływanie'), (4, 'Przewodniki i izolatory'), (5, 'Dotyk, zachowanie ładunku'), ('5a', 'Wykład: bilans ładunku i uziemienie'), (6, 'Elektroskop'), (7, 'Indukcja i zastosowania'), (8, 'Prawo Coulomba (E8+)'), (9, 'Pole elektryczne (LO)'), (10, 'Doświadczenia'), (11, 'Klinika błędów'), ('11a', 'Przykłady prowadzone'), (12, 'Ćwiczenia'), ('12a', 'Zadania E8'), (13, 'Fiszki'), (14, 'Test'), ('14a', 'Mapa, checklista, powtórki'), (15, 'Słownik i mosty')]) + '</nav></details>\n'
CHG_CSS = '<style id="f01-chg">.chg-t{display:inline-flex;width:18px;height:18px;border-radius:50%;color:#fff;font:800 13px/18px system-ui;justify-content:center;margin:1px}.chg-0{color:#64748b;font-weight:700}.bil{border:1px solid var(--border,#e5e9ee);border-radius:10px;padding:8px 12px;margin:6px 0;background:var(--surface-soft,#f6f8fa)}.bil>div{margin:3px 0}.bil-t{display:flex;flex-wrap:wrap;gap:14px}</style>'
HTML = ('<!DOCTYPE html>\n<html lang="pl">\n<head>\n<meta charset="utf-8"/>\n<meta content="width=device-width,initial-scale=1.0" name="viewport"/>\n<title>Fizyka FIZ-01 — Elektrostatyka (v1.4 MASTER LAB)</title>\n' + CHG_CSS + VIZ_CSS + V15_CSS + '</head>\n<body>\n<main class="page" id="main">\n'
        '<section class="hero card"><div class="hero-kicker">FIZ-01 · FIZYKA · MASTER LAB v1.4</div><h1>Elektrostatyka</h1><p class="lead">Ładunek i jego budowa atomowa, elektryzowanie (tarcie, dotyk, indukcja), oddziaływanie ładunków, przewodniki i izolatory, elektroskop, uziemienie i zastosowania; dla chętnych i LO: prawo Coulomba, pole elektryczne. Animacje i liczby z silnika CHE.FIZ.ELEKTRO.</p>'
        '<div class="tag-row"><span class="level-badge level-basic">E8</span><span class="level-badge level-understand">ROZUMIENIE</span><span class="level-badge level-extra">E8+ / LO</span></div>'
        '<button type="button" class="adv-toggle" id="advToggle" aria-pressed="false">Pokaż treści akademickie</button></section>\n'
        + MIN + TOC + ''.join(S) + '</main>\n' + JS + '\n</body>\n</html>\n')
open(os.path.join(D, 'fiz_elektro_new.html'), 'w', encoding='utf-8').write(HTML)
print('OK FIZ-01', len(HTML), 'viz:', HTML.count('che-lesson-viz-ref"'), 'adv:', HTML.count('class="adv"'), 'data-fiz:', len(re.findall(r'data-fiz(?:-\w+)?=', HTML)), 'tribo:', len(TRIBO), 'rho:', len(RHO))
