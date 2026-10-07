# -*- coding: utf-8 -*-
"""MD v19.89: N01 — synchronizacja HTML v6.0 + silnik CHE.OXIDES → MD (wzorzec: md_n02_sync.py).
Wejście: CHE.all.v19.88.md, test/n01_engine.json (dump: test/dump.js + test/n01_dump_eval.js), test/n01_rxmeta.json, src/v_pracownia.js.
Wyjście: CHE.all.v19.89.md. Sekcja przed „## ZACHOWANA TREŚĆ ŹRÓDŁOWA — L002 / N01”."""
import os, re, json
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(D)
SRC = os.path.join(ROOT, 'sources', 'chemia', 'CHE.all.v19.88.md'); OUT = os.path.join(ROOT, 'sources', 'chemia', 'CHE.all.v19.89.md')
md = open(SRC, encoding='utf-8').read()
E = json.load(open(os.path.join(ROOT, 'test', 'n01_engine.json'), encoding='utf-8'))
META = json.load(open(os.path.join(ROOT, 'test', 'n01_rxmeta.json'), encoding='utf-8'))
PR = open(os.path.join(ROOT, 'src', 'v_pracownia.js'), encoding='utf-8').read()
SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
def p(f): return re.sub(r'([A-Za-z\)\]])(\d+)', lambda m: m.group(1) + m.group(2).translate(SUB), f or '').replace('->', '→')
def pl(v, d=2): return (('%.' + str(d) + 'f') % v).replace('.', ',')
ROM = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'}
STATE = {'s': 'stały', 'l': 'ciecz', 'g': 'gaz'}
L = []; A = L.append
A('## N01 — SYNC HTML v6.0 + SILNIK CHE.OXIDES → MD · v19.89\n')
A('**Cel:** MD zawiera wszystko, co lekcja HTML N01 v6.0 i jej modele w silniku (dane, reguły, równania), a HTML — wszystko z MD. Tabele poniżej są wygenerowane z silnika (`CHE.OXIDES`, `CHE.DATA.OXIDES`, `CHE.REACTION`), nie przepisane ręcznie.\n')
A('### 1. Co zmieniono w HTML v6.0 (i obowiązuje też w MD)\n')
for x in ['Widgety wbudowane w HTML zastąpione modelami silnika: tlenek — trzy pytania (zlewka ze wskaźnikiem), konstruktor wzoru W–K–S–K ze sprawdzaniem stopni utlenienia, model 3D cząsteczek (VSEPR), układ okresowy 1–54 z tlenkami, spalanie całkowite i niecałkowite, reaktor „przewiduj produkty”, łańcuchy przemian, trend charakteru w okresie, pracownia doświadczeń, kalkulator stechiometryczny.',
          'Galeria barw tlenków czyta barwy z danych silnika (`CHE.DATA.OXIDES`) — jedno źródło dla lekcji, Atlasu i katalogu (audyt LES-N01-03).',
          'P₄O₁₀ — poprawna nazwa systematyczna: **dekatlenek tetrafosforu** (P₂O₅ to zapis empiryczny tej samej substancji).',
          'MgO a CaO z wodą: MgO ma bardzo trwałą sieć jonową (mały jon Mg²⁺ — duża energia sieciowa), a powstający Mg(OH)₂ jest praktycznie nierozpuszczalny i pokrywa ziarna tlenku — reakcja biegnie bardzo wolno. CaO ma słabszą sieć, Ca(OH)₂ jest tylko trudno rozpuszczalny — reakcja szybka i silnie egzotermiczna.',
          'Model wiązania: metale łatwo oddają elektrony → w tlenkach występują jako kationy, a jon O²⁻ z wodą daje OH⁻ → tlenki zasadowe. Niemetale tworzą z tlenem wiązania kowalencyjne; ich tlenki z wodą dają kwasy tlenowe → tlenki kwasowe.',
          'YBCO: pierwszy nadprzewodnik powyżej temperatury wrzenia ciekłego azotu (77 K), 1987 r.; Nagroda Nobla 1987 — Bednorz i Müller za nadprzewodnictwo w ceramice La–Ba–Cu–O (1986).',
          'Odnośniki do zewnętrznych plików zastąpione odnośnikami wewnętrznymi; kody lekcji jak w panelu: N01, N02, N03, N04.']:
    A('- ' + x)
A('\n### 2. Tlenki w silniku — trzy różne pytania: charakter ≠ reakcja z wodą ≠ reakcja z kwasem / zasadą\n')
A('| Wzór | Nazwa | Stopień utl. | Charakter | Wiązanie | Z wodą | Z kwasem | Z zasadą | Barwa / stan | M (g/mol) | Poziom |')
A('|---|---|---|---|---|---|---|---|---|---|---|')
for r in E['rows']:
    ox = ('+' + ROM.get(r['ox'], str(r['ox']))) if isinstance(r['ox'], int) else 'mieszany'
    A('| %s | %s | %s | %s | %s | %s | %s | %s | %s (%s) | %s | %s |' % (r['p'], r['name'], ox, r['char'], r['bond'], r['water'], r['acid'], r['base'], r['colorName'], STATE.get(r['state'], r['state']), pl(r['M'], 2) if r['M'] else '—', r['lvl']))
A('\n*Poziomy: E8 — egzamin ósmoklasisty, AMB — ambitnie (poza wymaganiami), ZA — zakres rozszerzony / LO.*\n')
A('**Uwagi silnika do poszczególnych tlenków:**\n')
for r in E['rows']:
    if r['notes']: A('- %s — %s' % (r['p'], '; '.join(r['notes'])))
A('\n### 3. Równania „trzech pytań” (z kluczy reakcji silnika)\n')
A('| Tlenek | z wodą | z kwasem | z zasadą |'); A('|---|---|---|---|')
for r in E['rows']:
    if r['weq'] or r['aeq'] or r['beq']: A('| %s | %s | %s | %s |' % (r['p'], ('`' + p(r['weq']) + '`') if r['weq'] else '—', ('`' + p(r['aeq']) + '`') if r['aeq'] else '—', ('`' + p(r['beq']) + '`') if r['beq'] else '—'))
A('\n### 4. Reakcje N01 w silniku (%d) — według typu\n' % len(E['rx']))
G = {}
for x in E['rx']: G.setdefault(x['type'] or 'inne', []).append(x)
for t in sorted(G, key=lambda k: -len(G[k])):
    A('**%s** (%d)\n' % (t[0].upper() + t[1:], len(G[t])))
    A('| Równanie | Warunki | Obserwacja | BHP | Poziom |'); A('|---|---|---|---|---|')
    for x in G[t]:
        m = META.get(x['k'], {})
        A('| `%s` | %s | %s | %s | %s |' % (p(x['eq']), m.get('conditions') or x['cond'] or '—', m.get('observation') or x['obs'] or '—', '; '.join(m.get('safety') or []) or x['saf'] or '—', m.get('level') or x['lvl'] or 'E8'))
    A('')
A('### 5. Konstruktor wzoru (W–K–S–K) — kroki generowane przez silnik\n')
for b in E['bd']:
    if b: A('- **%s + O(−II) → %s** (%s): %s.' % (b['el'] + '(' + ROM.get(b['ox'], '') + ')', b['pretty'], b['name'], ' → '.join(b['steps'])))
A('\nW–K–S–K nie zastępuje kontroli chemicznej. Po skrzyżowaniu sprawdź: (1) skrócenie indeksów, (2) bilans atomów, (3) suma stopni utlenienia = 0, (4) czy wzór jest znanym związkiem.\n')
A('### 6. Stopień utlenienia ze wzoru (tlen −II) i substancje, które tlenkami nie są\n')
A('| Wzór | Wynik silnika |'); A('|---|---|')
for o in E['ox']:
    A('| %s | %s |' % (p(o['f']), o['error'] if o.get('error') else ('%s: %s; kontrola %s%s' % (o['el'], ('+' + str(o['ox'])) if o['integer'] else ('≈ +' + pl(o['ox'], 2)), o['check'].replace('.', ','), ('; ' + o['note']) if o.get('note') else ''))))
A('\n**Nie są tlenkami** (rozpoznawane przez sprawdzanie wzoru): ' + '; '.join('%s — %s (%s)' % (p(a), b, c) for a, b, c in E['not']) + '.\n')
A('### 7. Trend charakteru tlenków w okresie (najwyższy stopień utlenienia, elektroujemność Paulinga)\n')
for per in ('t2', 't3'):
    A('**Okres %s:** ' % per[1] + ' → '.join('%s (%s, χ = %s)' % (p(t['f']), t['char'], pl(t['en'], 2) if t['en'] else '—') for t in E[per]) + '.\n')
A('Wniosek: im większa elektroujemność pierwiastka i wyższy stopień utlenienia, tym bardziej kwasowy tlenek; na granicy metal / niemetal — tlenki amfoteryczne (BeO, Al₂O₃). Ten sam metal na rosnących stopniach utlenienia: MnO zasadowy → MnO₂ amfoteryczny → Mn₂O₇ kwasowy; CrO → Cr₂O₃ → CrO₃ analogicznie.\n')
A('### 8. Pracownia doświadczeń N01 (`n01-doswiadczenia-v01`)\n')
blk = PR[PR.index("define('n01-doswiadczenia-v01'"):PR.index("define('n02-doswiadczenia-v01'")]
eqs = dict(E.get('eqmap', {})); eqs.update({x['k']: x['eq'] for x in E['rx']})
for name, ks in re.findall(r"\['([^']+)',\[([^\]]*)\]\]", blk):
    kk = re.findall(r"'(\w+)'", ks)
    A('- **%s:** ' % name + '; '.join('`%s`' % p(eqs[k]) if eqs.get(k) else k for k in kk))
A('\n### 9. Modele silnika ↔ sekcje lekcji N01\n')
A('| Sekcja | Model | Co pokazuje |'); A('|---|---|---|')
for r in [('§4', 'n01-tlenki-v01', 'trzy pytania o tlenek, zlewka ze wskaźnikiem'), ('§4b', 'n01-konstruktor-v01', 'W–K–S–K, stopnie utlenienia, sprawdzanie wzoru'), ('§5', 'molecule3d-merged', 'geometria cząsteczek (VSEPR)'), ('§5b', 'periodic-54', 'pierwiastek → tlenek → charakter'),
          ('§6', 'n01-spalanie-v01', 'spalanie całkowite i niecałkowite'), ('§7', 'n01-reaktor-v01', 'przewidywanie produktów'), ('§8', 'chain-scn', 'łańcuchy przemian'), ('§14', 'n01-trend-v01', 'trend charakteru'), ('§21', 'n01-doswiadczenia-v01', 'pracownia doświadczeń'), ('§21', 'gfx-scene-carbonate', 'wykrywanie CO₂'), ('§24', 'stech-kalkulator-v01', 'obliczenia stechiometryczne')]:
    A('| %s | `%s` | %s |' % r)
A('\n')
SEC = '\n'.join(L)
anchor = '## ZACHOWANA TREŚĆ ŹRÓDŁOWA — L002 / N01'
assert md.count(anchor) == 1
md = md.replace(anchor, SEC + '\n' + anchor)
for a, b in [('(tetratlenek dekatlenek difosforu)', '(dekatlenek tetrafosforu)')]:
    md = md.replace(a, b)
if 'v19.88' in md[:3000]: md = md.replace('v19.88', 'v19.89', 1)
open(OUT, 'w', encoding='utf-8').write(md)
print('MD v19.89:', len(md), '| sekcja N01:', len(SEC), 'znaków;', len(E['rows']), 'tlenków,', len(E['rx']), 'reakcji')
