# -*- coding: utf-8 -*-
"""Redakcja N04 Sole (v1.0 → v1.1) wg docs/STANDARD_LEKCJI.md: nowe <main> z lesson/_redakcja/n04_main.html (treść migawki + kanon md N04),
fiszki i test rozszerzone o kanon md. Migawka: lesson/_snap/sole_pre.html. Uruchamiać z /home/claude/che: python3 lesson/_redakcja/n04_red.py"""
import json, re
SNAP = 'lesson/_snap/sole_pre.html'; OUT = 'lesson/sole_new.html'; MAIN = 'lesson/_redakcja/n04_main.html'
src = open(SNAP, encoding='utf-8').read(); main = open(MAIN, encoding='utf-8').read().strip()
a = src.index('<main'); b = src.index('</main>') + len('</main>')
h = src[:a] + main + src[b:]
h = h.replace('<title>Chemia N04 — Sole (v1.0 MASTER LAB)</title>', '<title>Chemia N04 — Sole (v1.1 MASTER LAB)</title>')
ST = '<style id="che-prac-go-style">.che-prac-go{margin-top:8px;border:1px solid #0d6868;color:#0d6868;background:#fff;border-radius:8px;padding:5px 12px;font-weight:700;cursor:pointer}.che-prac-go:hover{background:#0d6868;color:#fff}</style>'
if 'che-prac-go-style' not in h: h = h.replace('</head>', ST + '</head>', 1)
def R(h, old, new, n=1):
    assert h.count(old) == n, (old[:80], h.count(old)); return h.replace(old, new)
# fiszki: dotychczasowe 16 + karty z kanonu md (L005 §10) bez powtórzeń
NEW_CARDS = [["K₂SO₄ — nazwa", "siarczan(VI) potasu"], ["Al(NO₃)₃ — nazwa", "azotan(V) glinu"], ["FeCl₂ / FeCl₃ — nazwy", "chlorek żelaza(II) / chlorek żelaza(III)"],
 ["CuSO₄ — nazwa", "siarczan(VI) miedzi(II)"], ["KMnO₄ — nazwa", "manganian(VII) potasu"], ["5 metod podstawowych otrzymywania soli", "kwas + wodorotlenek; kwas + metal; kwas + tlenek metalu; kwas + sól; sól + zasada"],
 ["Reakcja strąceniowa", "reakcja, w której powstaje osad"], ["AgCl / BaSO₄ — barwa osadu", "biały / biały"], ["PbI₂ — barwa osadu", "żółty"], ["Fe(OH)₃ — barwa osadu", "rdzawobrunatny"],
 ["Chlorki — wyjątki", "AgCl (N), PbCl₂ (T)"], ["Siarczany(VI) — wyjątki", "BaSO₄, PbSO₄ (N); CaSO₄ (T)"], ["Węglany — które rozpuszczalne?", "tylko sole metali alkalicznych i NH₄⁺"],
 ["Hydrat siarczanu(VI) miedzi(II)", "CuSO₄·5H₂O — niebieski; bezwodny prawie biały"], ["NaHCO₃ — zastosowanie", "proszek do pieczenia, środek na zgagę"],
 ["Indeks a współczynnik", "indeks zmienia substancję, współczynnik — ilość"], ["Czynnik napędzający reakcji wymiany", "osad, gaz albo słaby elektrolit (woda)"],
 ["Kropka w CuSO₄·5H₂O", "woda krystalizacyjna w krysztale, nie mnożenie"]]
m = re.search(r'var cards=(\[.*?\]\]);', h, re.S); cards = json.loads(m.group(1)); fr = {c[0] for c in cards}
cards += [c for c in NEW_CARDS if c[0] not in fr]
h = h[:m.start(1)] + json.dumps(cards, ensure_ascii=False) + h[m.end(1):]
NEW_Q = [["Poprawna nazwa FeCl₂:", ["chlorek żelaza(III)", "chlorek żelaza(II)", "chlorek żelaza"], 1],
 ["Który osad jest żółty?", ["AgCl", "PbI₂", "BaSO₄"], 1],
 ["Co oznacza „·5H₂O” w CuSO₄·5H₂O?", ["5 cząsteczek wody krystalizacyjnej na jednostkę CuSO₄", "mnożenie CuSO₄ przez 5 H₂O", "roztwór 5-procentowy"], 0],
 ["Odczyn roztworu NaHCO₃ (sól kwaśna):", ["kwasowy", "słabo zasadowy", "zawsze obojętny"], 1],
 ["Którym odczynnikiem odróżnisz Na₂CO₃ od Na₂SO₄ najprościej?", ["kwasem solnym", "wodą", "NaCl"], 0],
 ["Wzór azotanu(V) wapnia:", ["CaNO₃", "Ca(NO₃)₂", "Ca₂NO₃"], 1]]
m = re.search(r'var qs=(\[.*?\]\]);var w=', h, re.S); qs = json.loads(m.group(1)); qs += [q for q in NEW_Q if q[0] not in {x[0] for x in qs}]
h = h[:m.start(1)] + json.dumps(qs, ensure_ascii=False) + h[m.end(1):]
open(OUT, 'w', encoding='utf-8').write(h)
print('N04 v1.1:', len(h), 'B; fiszki', len(cards), '; test', len(qs))
