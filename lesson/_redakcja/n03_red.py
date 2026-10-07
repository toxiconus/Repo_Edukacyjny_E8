# -*- coding: utf-8 -*-
"""Redakcja N03 Kwasy (v1.8 → v1.9) wg docs/STANDARD_LEKCJI.md: składa nowe <main> z migawki kw_v18 + nowe fragmenty.
Uruchamiać z /home/claude/che: python3 lesson/_redakcja/n03_red.py"""
import re
from bs4 import BeautifulSoup
SNAP = 'lesson/_snap/kw_v18.html'
OUT = 'lesson/kw_new.html'
src = open(SNAP, encoding='utf-8').read()
a = src.index('<main'); b = src.index('</main>')
head, tail = src[:a], src[b:]
S = BeautifulSoup(src, 'html.parser')
SS = str(S)

def inner(sid):
    s = S.find(id=sid); out = []
    for c in s.children:
        if getattr(c, 'name', None) == 'div' and 'part-heading' in (c.get('class') or []): continue
        out.append(str(c))
    return ''.join(out)
def R(h, old, new, n=1):
    assert h.count(old) == n, (old[:90], h.count(old)); return h.replace(old, new)
def cut(h, start, end):
    """wytnij fragment od `start` (włącznie) do `end` (włącznie); zwraca (reszta, wycięte)"""
    i = h.index(start); j = h.index(end, i) + len(end); return h[:i] + h[j:], h[i:j]
def viz(vid):
    m = re.search(r'<div class="che-lesson-viz-ref" data-che-lesson-viz="%s">.*?</div>' % re.escape(vid), SS, re.S); assert m, vid; return m.group(0)
def vizall(h, vid):
    return re.findall(r'<div class="che-lesson-viz-ref" data-che-lesson-viz="%s">.*?</div>' % re.escape(vid), h, re.S)
V15 = re.compile(r'\s*<span class="v15">[^<]*</span>')
def nov15(h): return V15.sub('', h)

E8 = ' <span class="level-badge level-basic">E8</span>'
ROZ = ' <span class="level-badge level-understand">ROZUMIENIE</span>'
AMB = ' <span class="level-badge level-extra">AMBITNE</span>'
def hb(t, badge): return t + badge   # nagłówek h3 z plakietką

SECS = []
def sec(sid, title, badge, body, num=None): SECS.append((sid, num, title, badge, body))
POPRAWKI = []   # notki „Poprawka:” z treści → audyt

# ---------------------------------------------------------------- START
hero = str(S.select_one('section.hero'))
hero = R(hero, 'N03 · MASTER LAB v1.8', 'N03 · MASTER LAB v1.9')
hero = R(hero, '<span class="level-badge level-new">NOWE MODELE</span>\n', '')
hero = R(hero, '<span class="level-badge level-extra">LO ROZSZERZONE</span>', '<span class="level-badge level-extra">AMBITNE (LO)</span>')
minimum = str(S.find(id='minimum'))
legend = '''<div class="layer-legend">
<div class="layer-row"><span class="dot e8"></span><span><b>E8:</b> definicja, nazwy i wzory, reszty kwasowe, właściwości, dysocjacja, moc, pH i wskaźniki, otrzymywanie, reakcje, kwaśne deszcze, zastosowania, BHP</span></div>
<div class="layer-row"><span class="dot understand"></span><span><b>Rozumienie:</b> Brønsted, H₃O⁺, dysocjacja stopniowa, jonizacja a dysocjacja, paradoks HF, rozcieńczanie a α i pH</span></div>
<div class="layer-row"><span class="dot extra"></span><span><b>Ambitne (LO):</b> K<sub>a</sub>/pK<sub>a</sub>, stężenie molowe, pOH i K<sub>w</sub>, kwasy utleniające, kwasy organiczne, miareczkowanie, bufory, kwasy w organizmie</span></div>
<div class="layer-row"><span class="dot contest"></span><span><b>Ponad LO:</b> rozwijane bloki „poziom akademicki” — przycisk w nagłówku lekcji</span></div>
</div>'''
rdzen = '''<div class="core-path" id="rdzen">
<div class="cp-title">Rdzeń lekcji — najpierw to (ok. 30 min)</div>
<ol>
<li><strong>[[definicja]]–[[reszty]]</strong> — definicja, nazwy i wzory kwasów, reszty kwasowe i ich ładunek.</li>
<li><strong>[[dysocjacja]]</strong> — równania dysocjacji, przewodzenie prądu; <strong>[[moc]]</strong> (6.1–6.2) — kwasy mocne i słabe.</li>
<li><strong>[[ph]]</strong> (7.1, 7.3) — skala pH i wskaźniki.</li>
<li><strong>[[otrzymywanie]]–[[reakcje]]</strong> — trzy drogi otrzymywania i cztery typy reakcji; model „przewidź i sprawdź” (9.5).</li>
<li><strong>[[deszcze]], [[bhp]]</strong> — kwaśne deszcze i bezpieczeństwo.</li>
<li><strong>[[klinika]], [[cwiczenia]] (A–B), [[fiszki]], [[test]]</strong>.</li>
</ol>
<p class="mini-note">Modele silnika stoją przy sekcjach, których dotyczą; doświadczenia — w [[doswiadczenia]] (przycisk „Zobacz w zlewce” otwiera pracownię na danym doświadczeniu). Spis modeli: [[modele]].</p>
</div>'''

s0 = inner('s0')
s0, mnem_rdzen = cut(s0, '<div class="mnemonic">', '</div>')
s0, n8020 = cut(s0, '<p class="mini-note">Zasada 80/20', '</p>')
sec('jak-pracowac', 'Jak pracować z lekcją', '', s0)

sec('cele', 'Cele lekcji i pytanie przewodnie', E8, '''
<div class="card card-basic">
<span class="card-label">Po tej lekcji potrafisz</span>
<ul>
<li>zdefiniować kwas (Arrhenius; ambitnie — Brønsted) i zapisać wzór ogólny HₙR ([[definicja]]),</li>
<li>nazwać kwasy beztlenowe i tlenowe, odczytać resztę kwasową i jej ładunek ([[nazewnictwo]], [[reszty]]),</li>
<li>opisać właściwości HCl, H₂SO₄, HNO₃, H₃PO₄, H₂CO₃ i H₂S ([[wlasciwosci]]),</li>
<li>zapisać dysocjację kwasów i wyjaśnić, dlaczego ich roztwory przewodzą prąd ([[dysocjacja]]),</li>
<li>odróżnić moc kwasu od stężenia roztworu, posługiwać się skalą pH i wskaźnikami ([[moc]], [[ph]]),</li>
<li>zapisać trzy metody otrzymywania kwasów i cztery typy ich reakcji ([[otrzymywanie]], [[reakcje]]),</li>
<li>wyjaśnić powstawanie kwaśnych deszczy i stosować zasady BHP ([[deszcze]], [[bhp]]).</li>
</ul>
</div>
<div class="card card-exam">
<span class="card-label">Pytanie przewodnie</span>
<p>Mamy dwa roztwory o tym samym stężeniu 0,1 mol/dm³: kwas solny HCl i kwas octowy CH₃COOH. W obu fenoloftaleina pozostaje bezbarwna i oba są „kwaśne”. Dlaczego w kwasie solnym żarówka testera świeci jasno, magnez rozpuszcza się szybko, a pH wynosi ok. 1 — w occie zaś żarówka ledwo świeci, magnez reaguje wolno, a pH wynosi ok. 2,9?</p>
<p class="mini-note">Odpowiedź budujesz w [[dysocjacja]] (jony w roztworze), [[moc]] (stopień dysocjacji α) i [[ph]] (skala pH); sprawdzasz ją w doświadczeniu 10 ([[doswiadczenia]]).</p>
</div>''')

s1 = inner('s1')
i = s1.index('<h3>1.3 Kompas')
s1, kompas = s1[:i], s1[i:]
kompas = R(kompas, '<h3>1.3 Kompas — co trzeba wiedzieć wcześniej</h3>\n', '')
kompas = kompas.rstrip()
assert kompas.endswith('</div>')
kompas = kompas[:-6] + '<p class="mini-note">Wartościowość, W–K–S–K i bilans — fundamenty F01–F09; tlenki kwasowe — N01 Tlenki; wodorotlenki i zobojętnianie — N02 Wodorotlenki; wskaźniki — szczegóły w [[ph]].</p>\n</div>'
sec('kompas', 'Kompas — co trzeba wiedzieć wcześniej', '', kompas)

# ---------------------------------------------------------------- RDZEŃ E8
s1 = R(s1, 'Lewisa</strong> (sekcja 13).', 'Lewisa</strong> ([[historia]]).')
s1, p = cut(s1, '<p class="mini-note"><span class="v15">v1.5</span> Poprawka: wcześniej napisano', '</p>'); POPRAWKI.append(nov15(p))
s1 = R(s1, '<h3>1.2 Definicja rozszerzona (Brønsteda)</h3>', '<h3>1.2 Definicja rozszerzona (Brønsteda)%s</h3>' % ROZ)
sec('definicja', 'Definicja kwasu', E8, s1)

s2 = inner('s2')
s2 = R(s2, 'W CH₃COOH tylko H z grupy –COOH jest protonem kwasowym — pozostałe 3 atomy H są związane z węglem i nie dysocjują.',
       'W CH₃COOH tylko H z grupy –COOH jest protonem kwasowym — pozostałe 3 atomy H są związane z węglem i nie dysocjują. Dlatego CH₃COOH jest kwasem jednoprotonowym, mimo że ma 4 atomy H.')
s2 = R(s2, 'zob. 2.3', 'zob. [[nazewnictwo]].3')
sec('nazewnictwo', 'Nazewnictwo i podział kwasów', E8, s2)

s3 = inner('s3')
s3 = R(s3, viz('tabela-rozpuszczalnosci-v01'), '<p class="mini-note">Wzór i nazwę każdej soli podaje też tabela rozpuszczalności — przycisk modelu w [[reakcje]].4.</p>')
sec('reszty', 'Reszty kwasowe', E8, s3)

s4 = inner('s4')
i = s4.index('<h3>4.5 Właściwości'); s4, wl = s4[:i], s4[i:]
wl = R(wl, '<h3>4.5 Właściwości wybranych kwasów <span class="v15">nowe v1.5</span></h3>', '<h3>4.1 Właściwości wybranych kwasów</h3>')
wl = R(wl, 'ulatniający się HCl tworzy z parą wodną mgiełkę kropelek kwasu; lotny',
       'ulatniający się HCl tworzy z parą wodną białą mgiełkę — drobne kropelki kwaśnego roztworu, nie „biały gaz”; lotny')
wl = R(wl, '<div class="card card-understand">\n<span class="card-label">Dlaczego stężony H₂SO₄ zwęgla cukier?</span>',
       '<h3>4.2 Dlaczego stężony H₂SO₄ zwęgla cukier?%s</h3>\n<div class="card card-understand">\n<span class="card-label">Odwadnianie</span>' % ROZ)
wl = R(wl, 'To <strong>pokaz nauczyciela</strong>', 'To <strong>pokaz nauczyciela</strong>')
wl = wl.replace('pod dygestorium.</p>', 'pod dygestorium (doświadczenie 8 w [[doswiadczenia]]).</p>', 1)
sec('wlasciwosci', 'Właściwości kwasów', E8, wl)

s5 = inner('s5')
s5 = R(s5, '<p>Kwasy dysocjują na kation wodoru H⁺ (dokładniej: jon hydroniowy H₃O⁺) i anion reszty kwasowej.</p>',
       '<p>Kwasy dysocjują na kation wodoru H⁺ i anion reszty kwasowej (definicja — [[definicja]]); w wodzie H⁺ występuje jako jon hydroniowy H₃O⁺ ([[dysocjacja]].4).</p>')
dz = vizall(s5, 'kw-dysocjacja-v01'); assert len(dz) == 2
s5 = R(s5, dz[1], '')
s5 = R(s5, dz[0], dz[0].replace('<b>Dysocjacja na żywo: H⁺ przeskakuje na wodę (tryb „krok po kroku”)</b><span>HCl, HNO₃, H₂SO₄, HF, CH₃COOH, H₃PO₄ · α i pH z Ka silnika · wykres α(c)</span>',
       '<b>Dysocjacja kwasów mocnych i słabych na żywo: H⁺ przeskakuje na wodę (tryb „krok po kroku”), cząsteczki, α, pH</b><span>HCl, HNO₃, H₂SO₄, HF, CH₃COOH, H₃PO₄ · α i pH z Ka silnika · porównanie α(c) wszystkich kwasów</span>'))
for o, n, bd in (('5.2a Trzy poziomy zapisu dysocjacji', '5.3 Trzy poziomy zapisu dysocjacji', ROZ),
                 ('5.3 Jon hydroniowy H₃O⁺ — dokładniejszy model', '5.4 Jon hydroniowy H₃O⁺ — dokładniejszy model', ROZ),
                 ('5.4 Dysocjacja dwustopniowa kwasów wieloprotonowych', '5.5 Dysocjacja stopniowa kwasów wieloprotonowych', ROZ),
                 ('5.5 Jonizacja a dysocjacja — różnica', '5.6 Jonizacja a dysocjacja — różnica', ROZ),
                 ('5.6 Przewodzenie prądu — dowód na jony <span class="v15">nowe v1.5</span>', '5.7 Przewodzenie prądu — dowód na jony', E8)):
    s5 = R(s5, '>%s</h3>' % o, '>%s%s</h3>' % (n, bd))
s5 = R(s5, 'różna <strong>moc</strong> kwasu (sekcja 6).', 'różna <strong>moc</strong> kwasu ([[moc]]).')
s5 = nov15(s5)
sec('dysocjacja', 'Dysocjacja jonowa kwasów', E8, s5)

s6 = inner('s6')
s6 = R(s6, 'Mocny kwas może być bardzo rozcieńczony (małe stężenie), a słaby może być bardzo stężony. To dwa różne parametry.</p>',
       'Mocny kwas może być bardzo rozcieńczony (małe stężenie), a słaby może być bardzo stężony. To dwa różne parametry: stężony kwas octowy (lodowaty, ~17 mol/dm³) nadal jest kwasem słabym (stężenia — [[moc]].5).</p>')
s6 = R(s6, '<p class="mini-note">„Stężony” i „mocny” to różne pojęcia: stężony kwas octowy (lodowaty, ~17 mol/dm³) nadal jest kwasem słabym.</p>', '')
s6 = R(s6, '<p class="mini-note">Pamiętaj o BHP: przy rozcieńczaniu wlewamy <strong>kwas do wody</strong>, porcjami, mieszając.</p>',
       '<p class="mini-note">Rozcieńczając, wlewamy <strong>kwas do wody</strong> — zasady i uzasadnienie w [[bhp]].</p>')
s6 = R(s6, viz('kw-dysocjacja-v01').replace('Dysocjacja na żywo: H⁺ przeskakuje na wodę (tryb „krok po kroku”)', 'Dysocjacja kwasów mocnych i słabych — cząsteczki, α, pH').replace('HCl, HNO₃, H₂SO₄, HF, CH₃COOH, H₃PO₄ · α i pH z Ka silnika · wykres α(c)', 'Model z Ka silnika · porównanie α(c) wszystkich kwasów'),
       '<p class="mini-note">Wykres α(c) dla wszystkich kwasów — model dysocjacji w [[dysocjacja]].</p>')
s6 = R(s6, 'Stałą cechą kwasu jest <strong>Ka</strong> (sekcja 6.6).', 'Stałą cechą kwasu jest <strong>Ka</strong> ([[moc]].6).')
for o, n, bd in (('6.3 Paradoks HF — dlaczego fluorowodorowy jest słaby?', None, ROZ), ('6.4 Wpływ rozcieńczenia na stopień dysocjacji', None, ROZ),
                 ('6.5 Stężenie roztworu kwasu — procentowe i molowe <span class="v15">nowe v1.5</span>', '6.5 Stężenie roztworu kwasu — procentowe i molowe', E8),
                 ('6.6 Stała dysocjacji K<sub>a</sub> i pK<sub>a</sub> <span class="v15">nowe v1.5</span>', '6.6 Stała dysocjacji K<sub>a</sub> i pK<sub>a</sub>', AMB)):
    s6 = R(s6, '>%s</h3>' % o, '>%s%s</h3>' % (n or o, bd))
s6 = nov15(s6)
sec('moc', 'Moc kwasów', E8, s6)

s7 = inner('s7')
m = re.search(r'<p class="mini-note"><strong>Zapamiętaj:</strong> fenoloftaleina.*?</p>\s*<p class="mini-note"><span class="v15">v1.5</span> Poprawka: oranż metylowy.*?</p>', s7, re.S); assert m
s7 = s7.replace(m.group(0), '<p class="mini-note"><strong>Zapamiętaj:</strong> fenoloftaleina jest <strong>bezbarwna</strong> w kwasie i obojętnym, <strong>malinowa</strong> w zasadzie. Oranż metylowy jest czerwony w kwasie, żółty w zasadzie — pomarańczowy tylko w wąskim zakresie pH 3,1–4,4; w wodzie (pH 7) jest już <strong>żółty</strong>, więc nie odróżni roztworu obojętnego od zasadowego. Do tego służy fenoloftaleina lub papierek uniwersalny.</p>')
ph = vizall(s7, 'ph-indicators-v03'); assert len(ph) == 2
s7 = R(s7, ph[1], '')
s7 = R(s7, ph[0], ph[0].replace('<b>Interaktywna skala pH — wskaźniki i barwy</b><span>Barwy wskaźników z CHE.COLORS · drabinka kwasów i zasad</span>',
       '<b>Panel pH: skala, wskaźniki i barwy, drabinka kwasów i zasad</b><span>Barwy wskaźników z CHE.COLORS · roztwór × wskaźnik dla wybranego stężenia · silnik CHE</span>'))
s7 = R(s7, '<p>Roztwór × wskaźnik w probówkach i drabinka pH kwasów i zasad dla wybranego stężenia – w panelu pH. Suwak powyżej to wersja podglądowa.</p>',
       '<p>Jeden wskaźnik w siedmiu roztworach — statyw probówek poniżej; roztwór × wskaźnik i drabinka pH kwasów i zasad dla wybranego stężenia — panel pH w [[ph]].3.</p>')
s7 = R(s7, '<span class="card-label">LO rozszerzone — pOH i iloczyn jonowy wody</span>', '<span class="card-label">LO rozszerzone — pOH i iloczyn jonowy wody</span>')
s7 = nov15(s7)
sec('ph', 'pH i wskaźniki kwasowo-zasadowe', E8, s7)

# otrzymywanie (dawne 4.1–4.4)
s4 = R(s4, '<p class="mini-note">Uwaga: SiO₂ z wodą nie reaguje – H₂SiO₃ otrzymuje się z soli (Na₂SiO₃ + 2 HCl → H₂SiO₃↓ + 2 NaCl).</p>', '')
s4 = R(s4, 'Zachodzi dla tlenków kwasowych — z wyjątkiem SiO₂, który z wodą nie reaguje.',
       'Zachodzi dla tlenków kwasowych — z wyjątkiem SiO₂, który z wodą nie reaguje (H₂SiO₃ otrzymuje się z soli — [[otrzymywanie]].3).')
s4 = R(s4, '(metoda 4.3)', '(metoda [[otrzymywanie]].3)')
for o, n in (('4.1 Tlenek kwasowy + woda → kwas', '8.1 Tlenek kwasowy + woda → kwas'), ('4.2 Niemetal + wodór → kwas beztlenowy', '8.2 Niemetal + wodór → kwas beztlenowy'),
             ('4.3 Sól + mocny kwas → nowy kwas + nowa sól', '8.3 Sól + kwas mocniejszy lub mniej lotny → nowy kwas'), ('4.4 Otrzymywanie HCl(aq) — etapy', '8.4 Otrzymywanie HCl(aq) — etapy')):
    s4 = R(s4, '<h3>%s</h3>' % o, '<h3>%s</h3>' % n)
s4 = R(s4, '''<div class="formula-lg">CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑</div>
<div class="formula-lg">Na₂SO₃ + 2 HCl → 2 NaCl + H₂O + SO₂↑</div>
<div class="formula-lg">Na₂S + 2 HCl → 2 NaCl + H₂S↑</div>''', '''<div class="formula-lg">Na₂SiO₃ + 2 HCl → H₂SiO₃↓ + 2 NaCl</div>''')
s4 = R(s4, 'Reakcja zachodzi, gdy powstaje <strong>gaz</strong> (HCl, CO₂, SO₂, H₂S) lub <strong>osad</strong>.',
       'Tak otrzymuje się kwasy lotne (HCl) i kwasy nierozpuszczalne (H₂SiO₃ — SiO₂ z wodą nie reaguje). To reakcja kwas + sól: zachodzi, gdy powstaje <strong>gaz</strong> (HCl, CO₂, SO₂, H₂S) lub <strong>osad</strong> — warunki, reguły i dalsze przykłady (CaCO₃, Na₂SO₃, Na₂S) w [[reakcje]].4.')
s4 = R(s4, '<p><strong>W wilgotnym powietrzu</strong> HCl(g) tworzy <strong>białą mgłę</strong> — drobne kropelki kwaśnego roztworu, nie „biały gaz”.</p>',
       '<p class="mini-note">W wilgotnym powietrzu HCl(g) „dymi” — białą mgłę opisuje [[wlasciwosci]].1.</p>')
sec('otrzymywanie', 'Otrzymywanie kwasów', E8, s4)

s8 = inner('s8')
s8 = R(s8, '<p class="mini-note">Te metale nie wypierają wodoru z rozcieńczonych kwasów nieutleniających.</p>',
       '<p class="mini-note">Reguła i uzasadnienie — [[reakcje]].1.1; wyjątek HNO₃ — [[reakcje]].1.2.</p>')
for o, n in (('8.1 Kwas + metal → sól + wodór', '9.1 Kwas + metal → sól + wodór'), ('8.1.1 Szereg aktywności metali — pełna tabela', '9.1.1 Szereg aktywności metali — pełna tabela'),
             ('8.1.2 Wyjątek: HNO₃ jako kwas utleniający', '9.1.2 Wyjątek: HNO₃ jako kwas utleniający'), ('8.2 Kwas + tlenek metalu → sól + woda', '9.2 Kwas + tlenek metalu → sól + woda'),
             ('8.3 Kwas + wodorotlenek → sól + woda (zobojętnianie)', '9.3 Kwas + wodorotlenek → sól + woda (zobojętnianie)'), ('8.3.1 Równania jonowe zobojętniania', '9.3.1 Równania jonowe zobojętniania'),
             ('8.4 Kwas + sól → nowy kwas + nowa sól', '9.4 Kwas + sól → nowy kwas + nowa sól'), ('8.5 Przewidź i sprawdź', '9.5 Przewidź i sprawdź')):
    s8 = R(s8, '>%s</h3>' % o, '>%s</h3>' % n)
s8 = R(s8, '>9.1.2 Wyjątek: HNO₃ jako kwas utleniający</h3>', '>9.1.2 Wyjątek: HNO₃ jako kwas utleniający%s</h3>' % ROZ)
for o, n in (('s8-1', 'rx-metal'), ('s8-2', 'rx-tlenek'), ('s8-3', 'rx-zasada'), ('s8-4', 'rx-sol')): s8 = R(s8, 'id="%s"' % o, 'id="%s"' % n)
s8 = R(s8, '<b>Tabela rozpuszczalności (20 °C) — kliknij komórkę</b><span>Wzór, nazwa, R / T / N, barwa osadu · CHE.DATA.SOLUBILITY_TABLE</span>',
       '<b>Tabela rozpuszczalności (20 °C) — kliknij komórkę</b><span>Wzór i nazwa soli, R / T / N, barwa osadu · CHE.DATA.SOLUBILITY_TABLE</span>')
s8, p = cut(s8, '<p class="mini-note"><span class="v15">v1.5</span> Poprawka: wcześniej uzasadniano', '</p>'); POPRAWKI.append(nov15(p))
s8 = R(s8, 'NaCl + H₂SO₄ →(Δ) NaHSO₄ + HCl↑ (gaz)</div>', 'NaCl + H₂SO₄ →(Δ) NaHSO₄ + HCl↑ (gaz)</div>\n<p class="mini-note">Doświadczenie z NaCl + H₂SO₄ to wyłącznie pokaz nauczycielski pod dygestorium — [[otrzymywanie]].3.</p>')
s8 = nov15(s8)
sec('reakcje', 'Reakcje kwasów', E8, s8)

sec('deszcze', 'Kwaśne deszcze', E8, inner('s9'))

s10 = inner('s10')
s10 = R(s10, '<h3>10.1 Kwasy w organizmie <span class="bio-tag">BIOL-CHEM</span> <span class="v15">nowe v1.5</span></h3>', '<h3>11.1 Kwasy w organizmie <span class="bio-tag">BIOL-CHEM</span>%s</h3>' % AMB)
s10, krew = cut(s10, '<li><strong>Bufor wodorowęglanowy krwi</strong>', '</li>')
s10 = R(s10, '<li><strong>Kwas mlekowy</strong>', '<li><strong>Bufor wodorowęglanowy krwi</strong> utrzymuje pH krwi 7,35–7,45 — opis i liczby w [[bufory]].</li>\n<li><strong>Kwas mlekowy</strong>')
s10, krew_adv = cut(s10, '<details class="adv"><summary>Bufor krwi w liczbach', '</details>')
sec('zastosowania', 'Zastosowania kwasów', E8, s10)

s11 = inner('s11')
s11 = R(s11, '<li>✓ <strong>Zawsze kwas do wody</strong> (nie odwrotnie!) — wlewanie wody do stężonego kwasu może spowodować gwałtowne zagotowanie i rozprysk.</li>',
        '<li>✓ <strong>Zawsze kwas do wody</strong>, porcjami, mieszając (nie odwrotnie!) — wlewanie wody do stężonego kwasu może spowodować gwałtowne zagotowanie i rozprysk; <strong>nigdy nie wlewać wody do stężonego kwasu</strong>.</li>')
s11 = R(s11, '<li>✗ <strong>Nie wlewać wody do stężonego kwasu.</strong></li>\n', '')
sec('bhp', 'Bezpieczeństwo (BHP)', E8, s11)

# ---------------------------------------------------------------- ROZUMIENIE / AMBITNE
s12 = inner('s12')
s12, oct_ = cut(s12, '<div class="card card-basic">\n<span class="card-label">Kwas octowy CH₃COOH</span>', '</div>')
s12 += '\n<p class="mini-note">Kwas octowy: dysocjacja CH₃COOH ⇌ H⁺ + CH₃COO⁻ — [[dysocjacja]].2; dlaczego jest jednoprotonowy (tylko H z grupy –COOH) — [[nazewnictwo]].3.</p>'
sec('organiczne', 'Kwasy organiczne (karboksylowe)', AMB, s12)

sec('miareczkowanie', 'Miareczkowanie (titracja)', AMB, inner('s14'))

s15 = inner('s15')
s15 = R(s15, '<li><strong>Krew:</strong> bufor węglanowy H₂CO₃/HCO₃⁻ — utrzymuje pH ~7,4.</li>',
        '<li><strong>Krew:</strong> bufor węglanowy H₂CO₃/HCO₃⁻ — utrzymuje pH ~7,4. ' + krew[4:-5].replace('<strong>Bufor wodorowęglanowy krwi</strong>', 'Bufor wodorowęglanowy krwi') + '</li>')
s15 = R(s15, '<details class="adv"><summary>Bufor ilościowo', krew_adv + '\n<details class="adv"><summary>Bufor ilościowo')
sec('bufory', 'Bufory — model jakościowy', AMB, s15)

# ---------------------------------------------------------------- PRAKTYKA
s16 = nov15(inner('s16'))
for v in ('gfx-scene-conductivity', 'kw-szereg-metali-v01', 'kw-wlasciwosci-v01'):
    for x in vizall(s16, v): s16 = R(s16, x, '')
PRAC = {1: 'indicator', 2: 'acidMetal', 3: 'carbonate', 4: 'hclNaOH+php', 5: 'cuoH2so4', 6: 'conductivity', 7: 'szereg', 8: 'wlasciwosci', 9: 'wlasciwosci', 10: 'conductivity'}
cards = s16.split('<div class="exp-card">')
for k in range(1, len(cards)):
    num = int(re.search(r'Doświadczenie (\d+)', cards[k]).group(1))
    j = cards[k].index('</div>\n</div>')   # koniec exp-grid
    cards[k] = cards[k][:j] + '</div>\n<button class="che-prac-go" data-k="%s" data-prac="kw-doswiadczenia-v01" type="button">Zobacz w zlewce (pracownia GFX)</button>\n</div>' % PRAC[num] + cards[k][j + len('</div>\n</div>'):]
s16 = '<div class="exp-card">'.join(cards)
assert s16.count('che-prac-go') == 10
sec('doswiadczenia', 'Doświadczenia', '', s16)

s17 = inner('s17')
s17, p = cut(s17, '<p class="mini-note"><span class="v15">v1.5</span> Poprawka: poprzednia odpowiedź', '</p>'); POPRAWKI.append(nov15(p))
s17 = R(s17, 'ale HF jest <strong>słabym kwasem</strong> (α ≈ 0,1)', 'ale HF jest <strong>słabym kwasem</strong> (α ≈ 0,08)')
sec('klinika', 'Klinika błędów', '', s17)

s18 = nov15(inner('s18'))
s18 = R(s18, '<h3>Poziom B+/C+ — nowe zadania</h3>', '<h3>Poziom B+/C+ — stężenia, pH, rozpoznawanie roztworów</h3>')
s18 = R(s18, '(doświadczenie 10)', '(doświadczenie 10, [[doswiadczenia]])')
s18 = R(s18, 'HF słaby (α ≈ 0,1)', 'HF słaby (α ≈ 0,08)')
sec('cwiczenia', 'Ćwiczenia', '', s18)

sec('test', 'Test końcowy', '', inner('s20'))

# ---------------------------------------------------------------- POWTÓRKA
s22 = inner('s22')
karta = '<div class="card card-basic">\n<span class="card-label">Karta szybkiego powtórzenia (do druku)</span>\n' + n8020 + '\n' + mnem_rdzen.replace('<b>Mnemotechniki rdzeniowe:</b>', '<b>Mnemotechniki rdzeniowe</b>') + '\n</div>\n' + s22
sec('powtorka', 'Karta szybkiego powtórzenia i mapa myśli', '', karta)
sec('fiszki', 'Fiszki', '', inner('s19'))
sec('slownik', 'Słownik', '', inner('s23'))
sec('checklista', 'Checklista', '', inner('s21'))

# ---------------------------------------------------------------- DODATKI
s13 = inner('s13')
s13 = s13.replace('<div class="card card-understand">', '<div class="card card-understand">\n<p class="mini-note">Definicje używane w lekcji: Arrhenius i Brønsted — [[definicja]].</p>', 1)
sec('historia', 'Dodatek A — historia pojęcia kwasu i teorie kwasów i zasad', AMB, s13, num='A')

s24 = inner('s24')
s24 = R(s24, '<li><strong>L005 — Sole:</strong>', '<li><strong>N04 — Sole:</strong>')
s24 = R(s24, '<li><strong>L010 — Redoks:</strong>', '<li><strong>X01–X10 — Redoks:</strong>')
s24 = R(s24, '<li><strong>L013 — Liceum rozszerzone:</strong>', '<li><strong>LO rozszerzone:</strong>')
s24 = R(s24, '<li><strong>LO rozszerzone:</strong>', '<li><strong>Most do Konstruktora Uniwersalnego</strong> (aplikacja CHE): pełna analiza wzoru, bilans ładunków, jony, rozpuszczalność, równania jonowe, stopnie utlenienia.</li>\n<li><strong>LO rozszerzone:</strong>')
s24 = s24.rstrip()[:-6] + '<p class="mini-note">Wiadomości wcześniejsze — [[kompas]].</p>\n</div>'
sec('mosty', 'Dodatek B — mosty do innych lekcji', '', s24, num='B')

# ---------------------------------------------------------------- KONIEC
VIZ = [('reszty', 'kw-reszty-v01', 'kwas → reszta → sole (13 metali)'), ('wlasciwosci', 'kw-wlasciwosci-v01', 'pokazy: cukier + H₂SO₄, białko + HNO₃, HCl dymi'),
       ('dysocjacja', 'kw-dysocjacja-v01', 'dysocjacja krok po kroku, α i pH z Ka, wykres α(c)'), ('dysocjacja', 'gfx-scene-conductivity', 'tester przewodnictwa'),
       ('ph', 'ph-indicators-v03', 'skala pH, barwy wskaźników, drabinka kwasów i zasad'), ('ph', 'gfx-scene-indicatorRack', 'wskaźnik w siedmiu roztworach'),
       ('reakcje', 'kw-szereg-metali-v01', 'szereg aktywności: Mg, Zn, Fe, Cu w HCl'), ('reakcje', 'gfx-scene-acidMetal', 'metal + HCl, próba „pyk!”'),
       ('reakcje', 'rownania-jonowe-v01', 'równania jonowe pełne i skrócone'), ('reakcje', 'tabela-rozpuszczalnosci-v01', 'tabela rozpuszczalności, nazwy soli'),
       ('reakcje', 'reakcje-kwasu-v03', 'przewidź i sprawdź'), ('deszcze', 'acid-rain-v01', 'obieg kwaśnych deszczy'), ('bhp', 'gfx-scene-dilution', '„kwas do wody” — poprawnie i błędnie'),
       ('miareczkowanie', 'gfx-scene-titration', 'biureta, kolba, fenoloftaleina'), ('miareczkowanie', 'titration-merged', 'krzywa miareczkowania'),
       ('bufory', 'kw-bufor-v01', 'bufor octanowy kontra woda'), ('doswiadczenia', 'kw-doswiadczenia-v01', 'pracownia doświadczeń (przyciski „Zobacz w zlewce”)')]
wiz = '<div class="table-wrap"><table><thead><tr><th>Sekcja</th><th>Model</th><th>Co pokazuje</th></tr></thead><tbody>' + ''.join(
    '<tr><td>[[%s]]</td><td><code>%s</code></td><td>%s</td></tr>' % v for v in VIZ) + '</tbody></table></div><p class="mini-note">Każdy model występuje w lekcji raz; liczby, barwy i równania pochodzą z silnika CHE.</p>'
sec('modele', 'Modele silnika w tej lekcji', '', wiz, num='↻')

aud = inner('audit')
aud = aud.rstrip('\n') + '\n' + ('<div class="card card-understand"><span class="card-label">v1.9 — redakcja wg STANDARD_LEKCJI (2026-10-07)</span><ul>'
        '<li>Kolejność: start (minimum, spis, cele, kompas) → rdzeń E8 → rozumienie/ambitne → praktyka → powtórka → dodatki; plakietki E8 / ROZUMIENIE / AMBITNE przy sekcjach i podsekcjach ponad E8.</li>'
        '<li>Scalone powtórzenia: „sól + kwas” (otrzymywanie ↔ reakcje), mgła HCl, CH₃COOH jednoprotonowy, bufor krwi (zastosowania ↔ bufory), notki o oranżu metylowym, „mocny ≠ stężony”, „kwas do wody”.</li>'
        '<li>Jeden model = jedno miejsce: usunięte dublujące przyciski (dysocjacja ×3, panel pH ×2, tabela rozpuszczalności ×2, przewodzenie, szereg aktywności, pokazy); doświadczenia otwierają pracownię przyciskiem „Zobacz w zlewce”.</li>'
        '<li>Poprawki: α(HF) ≈ 0,08 (nie 0,1) w klinice i ćwiczeniach; kody lekcji w mostach (N04, X01–X10).</li>'
        '<li>Notki o poprawkach z v1.5 przeniesione z treści do audytu:</li></ul>' + ''.join(POPRAWKI) + '</div>')
SECS.append(('audit', '✓', 'Audyt jakości', ' <span class="level-badge level-exam">KONTROLA</span>', aud))
footer = str(S.select_one('footer.footer')).replace('CHEMIA N03 v1.2 MASTER LAB', 'CHEMIA N03 v1.9 MASTER LAB')
assert 'v1.9' in footer

# ---------------------------------------------------------------- NUMERACJA, SPIS, ODNOŚNIKI
START = ('jak-pracowac', 'cele', 'kompas')
# start: jak-pracować, cele, kompas → 0.1–0.3; rdzeń od 1 (numery 6 Moc, 7 pH jak w v1.8 — audyty LES-01/02)
num = {}; n = 0; si = 0
for sid, nn, t, bd, body in SECS:
    if sid in START: si += 1; num[sid] = '0.%d' % si
    elif nn is None: n += 1; num[sid] = str(n)
    else: num[sid] = nn
assert num['moc'] == '6' and num['ph'] == '7' and num['otrzymywanie'] == '8' and num['reakcje'] == '9', num
def refs(h):
    def r(m):
        i = m.group(1); assert i in num, i
        return '<a href="#%s">§%s</a>' % (i, num[i])
    return re.sub(r'\[\[([\w-]+)\]\]', r, h)
parts = []
for sid, nn, t, bd, body in SECS:
    parts.append('<section id="%s">\n<div class="part-heading"><span class="part-num">%s</span> %s%s</div>\n%s\n</section>' % (sid, num[sid], t, bd, refs(body.strip('\n'))))
toc = '<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links"><a class="toc-link" href="#minimum">Minimum E8</a>' + ''.join(
    '<a class="toc-link" href="#%s">%s. %s</a>' % (sid, num[sid], re.sub(r'<[^>]+>', '', t)) for sid, nn, t, bd, body in SECS) + '</nav></details>'
main = '<main class="page" id="main">\n' + hero + '\n' + minimum + toc + '\n\n' + legend + '\n' + refs(rdzen) + '\n' + '\n'.join(parts) + '\n' + footer + '\n'

# ---------------------------------------------------------------- HEAD / TAIL: nawigacja zewnętrzna (spis w <aside>, nagłówek z linkami do plików HTML, wznów, dolna nawigacja) → spis w treści
head = R(head, '<title>Chemia N03 — Kwasy (v1.8 MASTER LAB · korekta merytoryczna)</title>', '<title>Chemia N03 — Kwasy (v1.9 MASTER LAB)</title>')
hb_ = head.index('<button aria-expanded="false" aria-label="Pokaż spis treści"'); he = head.index('</div>', head.index('<div class="resume-dropdown"')) + 6
he = head.index('</div>', he) + 6   # resume-actions + dropdown
assert head[hb_:he].count('resume-dropdown') == 1, head[hb_:he][-300:]
head = head[:hb_] + head[he:]
tb = tail.index('<div class="bottom-nav"'); te = tail.index('<script', tb)
tail = tail[:tb] + tail[te:]
js_a = tail.index('<script'); js_a = tail.index('>', js_a) + 1
js = tail[js_a:tail.index('</script>', js_a)]
starts = [m.start() for m in re.finditer(r'\n\s*\(function\(\)\{', js)]
drop = [st for st in starts if re.match(r"\n\s*\(function\(\)\{\s*var (toggle=document.getElementById\('tocToggle'\)|header=document.getElementById\('headerWrapper'\)|nav=document.getElementById\('bottomNav'\)|btn=document.getElementById\('resumeTab'\))", js[st:st + 120])]
assert len(drop) == 4, len(drop)
nj = js
for st in sorted(drop, reverse=True):
    en = min([x for x in starts if x > st] + [len(js)]); nj = nj[:st] + nj[en:]
tail = tail[:js_a] + nj + tail[js_a + len(js):]

out = head + main + tail
open(OUT, 'w', encoding='utf-8').write(out)
print('sekcje:', ' · '.join('%s %s' % (num[s], re.sub(r'<[^>]+>', '', t)) for s, nn, t, bd, body in SECS))
