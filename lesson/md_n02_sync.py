# -*- coding: utf-8 -*-
"""MD v19.88: N02 — synchronizacja HTML v8.1 + silnik CHE.HYDROXIDES → MD (md co najmniej tak dobre jak HTML).
Wejście: sources/chemia/CHE.all.v19.87.md, test/n02_engine.json (zrzut silnika z testu dump), lesson/n02_build.py (lista doświadczeń A–H).
Wyjście: sources/chemia/CHE.all.v19.88.md (v19.87 zostaje). Sekcja wstawiana przed „ZACHOWANA TREŚĆ ŹRÓDŁOWA — L003 / N02”."""
import os, re, json, ast
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(D)
SRC = os.path.join(ROOT, 'sources', 'chemia', 'CHE.all.v19.87.md'); OUT = os.path.join(ROOT, 'sources', 'chemia', 'CHE.all.v19.88.md')
md = open(SRC, encoding='utf-8').read()
E = json.load(open(os.path.join(ROOT, 'test', 'n02_engine.json'), encoding='utf-8'))
b = open(os.path.join(D, 'n02_build.py'), encoding='utf-8').read()
EXPS = ast.literal_eval(b[b.index('EXPS = [') + 7:b.index('\ndef expcard')])
SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
def p(f): return re.sub(r'([A-Za-z\)])(\d+)', lambda m: m.group(1) + m.group(2).translate(SUB), f)
def n(v, d=2): return ('%.' + str(d) + 'f') % v if v is not None else '—'
def pl(v, d=2): return n(v, d).replace('.', ',')
SOL = {'R': 'dobrze rozpuszczalny', 'T': 'trudno rozpuszczalny', 'N': 'praktycznie nierozpuszczalny', '—': 'nietrwały'}
L = []
A = L.append
A('## N02 — SYNC HTML v8.1 + SILNIK CHE.HYDROXIDES → MD · v19.88\n')
A('**Cel:** MD ma zawierać wszystko, co ma lekcja HTML N02 v8.1 i jej modele w silniku (dane, reguły, liczby), a HTML — wszystko z MD. Liczby poniżej są wygenerowane z silnika (`CHE.HYDROXIDES`, `D.SOLUBILITY_TABLE`, `D.REACTIONS`), a nie przepisane ręcznie.\n')
A('### 1. Co zmieniono w HTML v8.1 (i obowiązuje też w MD)\n')
for x in ['Widgety wbudowane w HTML zastąpione modelami silnika: wzór wodorotlenku (bilans ładunków, nawias, modele A/B/jony, sprawdzanie wzoru), przegląd wodorotlenków, otrzymywanie + mapa przemian, pracownia doświadczeń, laboratorium jonowe (strącanie), zobojętnianie (mole, pH, wskaźniki, krzywa), rozpuszczanie i dysocjacja z efektem cieplnym, reaktor „przewiduj → sprawdź”.',
          'Mnemotechnika OH⁻: „OH⁻ — jeden klocek, minus jeden” (zamiast mylącego „Od Hydratacji”).',
          'Hydraty: niektóre wodorotlenki tworzą hydraty (np. Ba(OH)₂·8H₂O — stąd rozpuszczalność Ba(OH)₂ w tablicach podawana dla hydratu); na E8 nie wymaga się ich wzorów.',
          'Mg(OH)₂ w tabeli rozpuszczalności: **praktycznie nierozpuszczalny** (N), choć szkolnie bywa nazywany „trudno rozpuszczalnym”; zawiesina ma słabo zasadowy odczyn (pH ≈ 10,4).',
          'Ca(OH)₂ strąca się z CaCl₂ i NaOH **tylko z roztworów stężonych** — jest trudno, ale nie praktycznie nierozpuszczalny.',
          'Rysunek H–O–Ca–O–H to **model poglądowy** składu, nie wzór strukturalny cząsteczki (w krysztale jest sieć jonów).',
          'Doświadczenia: jedna lista A–H w formacie egzaminacyjnym (bez dublujących się kart).']:
    A('- ' + x)
A('\n### 2. Wodorotlenki w silniku — cztery pytania na raz\n')
A('| Wzór | Nazwa | Kation | Czy się rozpuszcza? | g / 100 g H₂O | Co jest w roztworze? | Odczyn | Barwa | Amf. | Poziom |')
A('|---|---|---|---|---|---|---|---|---|---|')
for r in E['rows']:
    s = r['sol']; g = s.get('g100')
    gtxt = '—' if g is None else ('ok. ' + ('%.0e' % g).replace('e-0', '·10⁻').replace('e-', '·10⁻') if g < 0.001 else ('%.4f' % g if g < 0.01 else '%.3f' % g if g < 1 else '%.1f' % g).rstrip('0').rstrip('.').replace('.', ','))
    A('| %s | %s | %s | %s | %s | %s | %s%s | %s | %s | %s |' % (r['p'], r['name'], r['cat'], SOL.get(s['s'], '—'), gtxt, r['dis'], s['odczyn'], (' (pH ≈ %s)' % pl(s['ph'], 1)) if s.get('ph') else '', r['color'], 'tak' if r['amph'] else '—', r['lvl']))
A('\n*Źródło rozpuszczalności: kolumna OH⁻ tabeli rozpuszczalności silnika (20 °C); dla LiOH, Cr(OH)₃, CuOH — wartości własne CHE.HYDROXIDES.*\n')
A('### 3. Jak otrzymać dany wodorotlenek? (reguły silnika: kiedy metoda działa, a kiedy nie)\n')
for r in E['rows']:
    if r['lvl'] == 'LO' or r['f'] == 'NH4OH': continue
    A('**%s** — ' % r['p'] + '; '.join(('✓ %s: `%s`' % (o['m'], o['eq'])) if o['ok'] else ('✗ %s (%s)' % (o['m'], o['why'])) for o in r['ob']))
    A('')
A('### 4. Reakcje N02 w silniku (%d) — według typu\n' % len(E['rx']))
G = {}
for x in E['rx']: G.setdefault(x['type'], []).append(x)
for t in sorted(G, key=lambda k: -len(G[k])):
    A('**%s** (%d)\n' % (t[0].upper() + t[1:], len(G[t])))
    A('| Równanie | Warunki | Obserwacja | Poziom |'); A('|---|---|---|---|')
    for x in G[t]: A('| `%s` | %s | %s%s | %s |' % (x['eq'], x['cond'] or '—', x['obs'] or '—', (' — ' + x['note']) if x['note'] else '', x['lvl']))
    A('')
A('### 5. Efekt cieplny rozpuszczania (10 g substancji w 100 g wody, bez strat ciepła)\n')
A('| Substancja | ΔH rozp. (kJ/mol) | n (mol) | Q (kJ) | ΔT (K) | Efekt |'); A('|---|---|---|---|---|---|')
for h in E['heat']: A('| %s | %s | %s | %s | %s | %s |' % (h['name'], pl(h['dH'], 1), pl(h['n'], 3), pl(h['Q'] / 1000, 2), ('+' if h['dT'] > 0 else '') + pl(h['dT'], 1), h['kind']))
h4 = E['h4']
A('\n**Przykład obliczeń (E8+):** 4 g NaOH w 100 g wody. n = 4 g / 40 g/mol = 0,1 mol; Q = 44,5 kJ/mol · 0,1 mol = 4,45 kJ; ΔT = Q / (m·c) = 4450 J / (104 g · 4,18 J/(g·K)) ≈ **+%s K**. Ca(OH)₂ rozpuści się tylko ok. 0,17 g / 100 g — efekt cieplny jest znikomy.\n' % pl(h4['dT'], 1))
A('### 6. Iloczyn rozpuszczalności → pH roztworu nasyconego (LO / rozszerzenie)\n')
A('Dla M(OH)ₙ(s) ⇌ Mⁿ⁺ + n OH⁻: K_sp = [Mⁿ⁺]·[OH⁻]ⁿ, s = (K_sp/nⁿ)^(1/(n+1)), [OH⁻] = n·s, pH = 14 + log[OH⁻].\n')
A('| Wodorotlenek | K_sp (25 °C) | s (mol/dm³) | [OH⁻] | pH nasyconego |'); A('|---|---|---|---|---|')
for r in E['rows']:
    t = r.get('sat')
    if t: A('| %s | %s | %s | %s | %s%s |' % (r['p'], ('%.1e' % t['Ksp']).replace('.', ','), ('%.1e' % t['s']).replace('.', ','), ('%.1e' % t['OH']).replace('.', ','), pl(t['pH'], 1), ' (≈ obojętny — z osadu mniej OH⁻ niż w czystej wodzie)' if t['note'] else ''))
A('\nWniosek: woda wapienna pH ≈ 12,35 (pomiar ≈ 12,4), mleko magnezowe ≈ 10,4; zawiesiny Fe(OH)₃, Cu(OH)₂, Al(OH)₃ nie zmieniają odczynu — to liczbowe uzasadnienie reguły „odczyn zależy od rozpuszczonej części, nie od wzoru”.\n')
A('### 7. Zobojętnianie — bilans moli krok po kroku\n')
A('1. n(OH⁻) = c(zasady) · V(zasady) · (liczba OH⁻ we wzorze). 2. n(H⁺) = c(kwasu) · V(kwasu) · (liczba H⁺ kwasu). 3. Mniejsza z liczb = n(H₂O). 4. Nadmiar decyduje o odczynie: [nadmiar] / V(całkowita). 5. Punkt równoważnikowy: n(H⁺) = n(OH⁻).\n')
n1, n2 = E['n1'], E['n2']
A('**Przykład 1:** 50 cm³ Ca(OH)₂ 0,01 mol/dm³ + 5 cm³ HCl 0,1 mol/dm³. n(OH⁻) = 0,01 · 0,050 · 2 = 1,0 mmol; n(H⁺) = 0,5 mmol; nadmiar OH⁻ 0,5 mmol w 55 cm³ → [OH⁻] ≈ 0,0091 mol/dm³ → pH ≈ **%s**. V w punkcie równoważnikowym = **%s cm³** (Ca(OH)₂ ma 2 OH⁻ na jednostkę wzoru).\n' % (pl(n1['pH'], 2), pl(n1['Veq'], 0)))
A('**Przykład 2:** 25 cm³ NaOH 0,1 + 10 cm³ H₂SO₄ 0,1. n(OH⁻) = 2,5 mmol; n(H⁺) = 2 · 1,0 = 2,0 mmol; nadmiar OH⁻ 0,5 mmol w 35 cm³ → pH ≈ **%s**; V_eq = %s cm³.\n' % (pl(n2['pH'], 2), pl(n2['Veq'], 1)))
A('### 8. Sprawdzanie wzoru — typowe błędy rozpoznawane przez silnik\n')
for x in ['`CaOH2` — brak nawiasu: indeks dotyczy tylko H (skład 1 Ca, 1 O, 2 H); poprawnie Ca(OH)₂.',
          '`Na(OH)` — zbędny nawias przy jednej grupie OH⁻; poprawnie NaOH.',
          '`Al(OH)2` — zła liczba grup: (+3) + 2·(−1) = +1 ≠ 0; potrzeba 3.',
          '`CaO2H2` — skład się zgadza, ale zapis gubi grupę OH⁻; pisz Ca(OH)₂.',
          'brak symbolu metalu we wzorze — to nie jest wodorotlenek tego kationu.']:
    A('- ' + x)
A('\n### 9. Doświadczenia modelowe N02 (A–H) — format egzaminacyjny\n')
for L_, t, lv, prob, hip, spr, prz, obs, eq, wn, bhp in EXPS:
    A('**Doświadczenie %s — %s** (%s)\n' % (L_, t, lv))
    for k, v in [('Problem', prob), ('Hipoteza', hip), ('Sprzęt i odczynniki', spr), ('Przebieg', prz), ('Obserwacje', obs), ('Równanie', '`' + eq + '`'), ('Wniosek', wn), ('BHP', bhp)]:
        A('- **%s:** %s' % (k, v))
    A('')
A('### 10. Modele silnika ↔ sekcje lekcji N02\n')
A('| Sekcja | Model | Co pokazuje |'); A('|---|---|---|')
for r in [('§6.3', 'n02-wzory-v01', 'kation + OH⁻, bilans ładunków, nawias, modele A/B/jony, sprawdzanie wzoru'), ('§6.6', 'n02-otrzymywanie-v01', 'trzy metody, „Jak otrzymać…?”, mapa przemian'), ('§7', 'n02-doswiadczenia-v01', 'pracownia: 26 doświadczeń w zlewce'),
          ('§6.7', 'n02-stracanie-v01', 'ruch jonów → skupiska → osad; równania jonowe'), ('§6.9', 'n02-zobojetnianie-v01', 'mole, pH, wskaźniki, jony, krzywa pH'), ('§6.14', 'n02-dysocjacja-v01', 'rozpuszczanie, hydratacja, cztery pytania, efekt cieplny'),
          ('§6.15', 'n02-przeglad-v01', 'kafelki: rozpuszczalność, barwa, odczyn, otrzymywanie'), ('§6.19', 'n02-reaktor-v01', 'wodorotlenek + odczynnik: przewiduj → sprawdź')]:
    A('| %s | `%s` | %s |' % r)
A('\n')
SEC = '\n'.join(L)
SEC = re.sub(r'·10⁻(\d+)', lambda m: '·10⁻' + m.group(1).translate(str.maketrans('0123456789', '⁰¹²³⁴⁵⁶⁷⁸⁹')), SEC)
anchor = '## ZACHOWANA TREŚĆ ŹRÓDŁOWA — L003 / N02'
assert md.count(anchor) == 1
md = md.replace(anchor, SEC + '\n' + anchor)
old = '`CaCl₂ + 2NaOH → Ca(OH)₂↓ + 2NaCl`.'
if md.count(old) == 1: md = md.replace(old, old[:-1] + ' (tylko z roztworów stężonych — Ca(OH)₂ jest trudno, ale nie praktycznie nierozpuszczalny).')
md = re.sub(r'(v19\.87)', 'v19.88', md, count=1) if 'v19.87' in md[:3000] else md
open(OUT, 'w', encoding='utf-8').write(md)
print('MD v19.88:', len(md), 'sekcja N02 sync:', len(SEC), 'znaków;', len(E['rows']), 'wodorotlenków,', len(E['rx']), 'reakcji,', len(EXPS), 'doświadczeń')
