#!/usr/bin/env python3
"""Spis lekcji wszystkich przedmiotów: rozmiar KB, wizualizacje (@klocek/@model/@zlewka) i pokrycie @opis.
Użycie (z katalogu głównego repo):  python3 narzedzia/spis_lekcji.py   → SPIS_LEKCJI.md
Źródła: chemia/che-modular/lessons-md/gotowe, biologia/bio/md, olimpiada (pliki lekcji), polski/lekcje, polski/podstawy (md).
Rozróżnia lekcje (pliki) od list tematów (plany: chemia/plany/CHE_SPIS_TRESCI.md, polski/POL_SPIS_TRESCI_v2.md)."""
import glob, os, re, datetime
WIZ = re.compile(r'^@(klocek|model|zlewka)\b', re.M)
OPIS = re.compile(r'^@opis\b', re.M)

# Etap konkursu LKO 2026/27, do którego należy treść lekcji (wg pakietu: chemia pkt I–V = etap I, I–VIII = etap II, organika i genetyka = etap III).
# Dopasowanie po nazwie pliku (prefiks). Lekcje bez etapu w konkursie (fizyka, polski, angielski) → „poza LKO”.
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from etap_lko import ETAP, etap
# Warstwy treści w lekcji (znaczniki [[rodzaj:NAZWA]]): E8 = egzamin ósmoklasisty, trening/rozumienie, konkurs (LKO), ambitne = olimpiada/ponad zakres.
WARSTWY = [('E8', re.compile(r'\[\[basic:')), ('rozum.', re.compile(r'\[\[understand:')),
           ('konkurs', re.compile(r'\[\[(exam|contest):(?!EGZAMIN)', re.I)), ('ambitne', re.compile(r'\[\[extra:'))]
def warstwy(t):
    return ' · '.join(n for n, rx in WARSTWY if rx.search(t)) or '—'
LEGENDA = ('Etap LKO = do którego etapu konkursu lekcja jest potrzebna: **I** = szkolny (biologia 21.10, chemia 23.10; 60 min, 40 pkt), '
           '**II** = rejonowy (biologia 24.11, chemia 26.11; 90 min; obejmuje też etap I), **III** = wojewódzki (obejmuje I i II), '
           '**poza LKO** = kurs E8/inny przedmiot. Warstwy w lekcji: **E8** (podstawa programowa) · **rozum.** (trening, rozumienie) · '
           '**konkurs** (zadania i doświadczenia konkursowe) · **ambitne** (olimpiada, ponad zakres). Zakres źródłowy: `olimpiada/PRIORYTETY.md` §1.')
PLANOWANE_BIO = [('B2h', 'Układ krążenia (krew, serce, naczynia, limfa)', 'II'), ('B2i', 'Układ odpornościowy (odporność, szczepionki, alergie)', 'II'),
                 ('B2j', 'Arkusz próbny etapu II', 'II'), ('B3a–B3e', 'Mitoza i mejoza, mutacje, ewolucja, ekologia, różnorodność biologiczna', 'III')]


ZRODLA = [
    ('chemia (che-modular)', 'chemia/che-modular/lessons-md/gotowe/*.md'),
    ('biologia', 'biologia/bio/md/*.md'),
    ('polski (lekcje)', 'polski/lekcje/*.md'),
    ('polski (podstawy)', 'polski/podstawy/*.md'),
]
out = ['# SPIS LEKCJI (generowany: `python3 narzedzia/spis_lekcji.py`)', '',
       'Stan: %s. KB = rozmiar pliku md. Wiz. = liczba @klocek/@model/@zlewka; @opis = liczba opisów (powinna być równa wiz.).' % datetime.date.today(),
       'Listy tematów (plan) są osobno: `chemia/plany/CHE_SPIS_TRESCI.md`, `polski/POL_SPIS_TRESCI_v2.md`, `olimpiada/OLIMPIADA_8_MASTER.md`.', '', LEGENDA, '']

# ---- archiwalne arkusze (olimpiada/zrodla/archiwum_arkuszy.json)
import json
ARCH = json.load(open('olimpiada/zrodla/archiwum_arkuszy.json', encoding='utf-8'))
ETAPY = {'I': 'I — szkolny', 'II': 'II — rejonowy', 'III': 'III — wojewódzki'}
def lekcje_etapu(przedmiot, et):
    zr = {'biologia': 'biologia/bio/md/*.md', 'chemia': 'chemia/che-modular/lessons-md/gotowe/*.md'}[przedmiot]
    return [os.path.basename(f)[:-3] for f in sorted(glob.glob(zr)) if etap(os.path.basename(f)[:-3]).startswith(et)]
def arch_md():
    o = ['', '## Archiwalne arkusze LKO (pliki w repo; w ZIP przekazania: `archiwum_arkuszy/<przedmiot>/<etap>/<rok>/` z OPIS_ROKU.md)', '',
         '| przedmiot | etap | rok | zadań | czas | arkusz | klucz | opis roku |', '|---|---|---|---:|---:|---|---|---|']
    for x in sorted(ARCH['wpisy'], key=lambda x: (x['przedmiot'], x['etap'], x['rok'])):
        kl = ('[plik](%s)' % x['klucz_plik']) if x.get('klucz_plik') else x['klucz']
        o.append('| %s | %s | %s | %s | %s | [plik](%s) | %s | %s |' % (x['przedmiot'], ETAPY[x['etap']], x['rok'], x['zadania'] or '—', x['czas_min'], x['plik'], kl, x['opis']))
    for b in ARCH['brak']:
        o.append('| %s | — | %s | — | — | brak pliku | — | %s |' % (b['przedmiot'], b['rok'], b['opis']))
    o += ['', 'Lekcje właściwe dla etapu (do ćwiczenia z danym arkuszem): ' + '; '.join(
        '%s etap %s: %s' % (pr, et, ', '.join(lekcje_etapu(pr, et)) or '—') for pr in ('biologia', 'chemia') for et in ('I', 'II')), '']
    return o
tot = 0
for nazwa, wz in ZRODLA:
    fs = sorted(glob.glob(wz))
    if not fs: continue
    out += ['## %s (%d lekcji)' % (nazwa, len(fs)), '', '| plik | etap LKO 2026/27 | warstwy | KB | wiz. | @opis | uwagi |', '|---|---|---|---:|---:|---:|---|']
    for f in fs:
        t = open(f, encoding='utf-8', errors='replace').read()
        v, o = len(WIZ.findall(t)), len(OPIS.findall(t)); kb = os.path.getsize(f) // 1024; tot += kb
        uw = 'dług @opis: %d (zob. narzedzia/opis_dlug.json)' % (v - o) if v > o else ''
        if re.search(r'poza zakresem LKO 2025/26', t): uw += (' ' if uw else '') + 'oznaczenia „poza zakresem 2025/26” — sprawdzić z 2026/27'
        out.append('| `%s` | %s | %s | %d | %d | %d | %s |' % (os.path.basename(f), etap(os.path.basename(f)[:-3]), warstwy(t), kb, v, o, uw))
    out.append('')
out += ['## biologia — planowane lekcje (brak plików; zakres w `biologia/plany/PLAN_BRAKUJACE_LEKCJE.md`)', '', '| kod | temat | etap LKO |', '|---|---|---|']
out += ['| %s | %s | %s |' % x for x in PLANOWANE_BIO]
out += arch_md()
out += ['', 'Razem: %d KB.' % tot]
open('SPIS_LEKCJI.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('SPIS_LEKCJI.md', tot, 'KB')

# ---- indeksy HTML: ogólny (INDEKS.html) i per przedmiot (chemia/, biologia/, polski/INDEKS.html)
import html as H
PRZEDMIOTY = [  # (katalog indeksu, tytuł, [(nazwa sekcji, wzorzec md, katalog html względem repo lub None)])
    ('chemia', 'Chemia', [('chemia (che-modular)', 'chemia/che-modular/lessons-md/gotowe/*.md', 'chemia/che-modular/dist')]),
    ('biologia', 'Biologia', [('biologia', 'biologia/bio/md/*.md', 'biologia/bio/dist')]),
    ('polski', 'Język polski', [('polski (lekcje)', 'polski/lekcje/*.md', None), ('polski (podstawy)', 'polski/podstawy/*.md', None)]),
]
CSS = ('<style>:root{--bg:#fff;--tx:#0f172a;--soft:#64748b;--line:#e2e8f0;--ac:#0d6868;--warn:#b45309}'
       '@media(prefers-color-scheme:dark){:root{--bg:#0f1b1e;--tx:#e8eef2;--soft:#94a3b8;--line:#2b3d42;--ac:#5eead4;--warn:#fbbf24}}'
       'body{background:var(--bg);color:var(--tx);font:15px/1.5 system-ui,sans-serif;margin:0 auto;max-width:980px;padding:16px}'
       'h1{font-size:24px}h2{font-size:18px;margin-top:28px;color:var(--ac)}a{color:var(--ac)}table{border-collapse:collapse;width:100%;font-size:14px}'
       'th,td{border-bottom:1px solid var(--line);padding:5px 8px;text-align:left}td.n,th.n{text-align:right}.s{color:var(--soft)}.w{color:var(--warn)}'
       '.box{border:1px solid var(--line);border-radius:10px;padding:10px 14px;margin:12px 0}</style>')
TERM = ('<div class="box"><b>Konkursy LKO 2026/27 (oficjalny terminarz):</b> etap szkolny biologia <b>21.10</b>, chemia <b>23.10</b> (9:00, 60 min); '
        'rejonowy biologia 24.11, chemia 26.11 (9:00, 90 min). Zakres: <code>olimpiada/PRIORYTETY.md</code> §1.</div>')
def wiersze(wz, dist, baza):
    r = []
    for f in sorted(glob.glob(wz)):
        t = open(f, encoding='utf-8', errors='replace').read(); n = os.path.splitext(os.path.basename(f))[0]
        v, o = len(WIZ.findall(t)), len(OPIS.findall(t)); kb = os.path.getsize(f) // 1024
        h = os.path.join(dist, n + '.html') if dist else None
        if h and os.path.exists(h): lnk = '<a href="%s">%s</a>' % (H.escape(os.path.relpath(h, baza)), H.escape(n))
        else: lnk = '<a href="%s">%s</a>' % (H.escape(os.path.relpath(f, baza)), H.escape(n)) + (' <span class="s">(md; html: zbuduj)</span>' if dist else '')
        uw = '<span class="w">dług @opis: %d</span>' % (v - o) if v > o else ''
        r.append('<tr><td>%s</td><td>%s</td><td class="s">%s</td><td class="n">%d</td><td class="n">%d</td><td>%s</td></tr>' % (lnk, H.escape(etap(n)), H.escape(warstwy(t)), kb, v, uw))
    return r
PRZ_ARCH = {'chemia': ('chemia',), 'biologia': ('biologia',), 'polski': ()}
def arch_html(przedmioty, baza):
    r = []
    for x in sorted(ARCH['wpisy'], key=lambda x: (x['przedmiot'], x['etap'], x['rok'])):
        if x['przedmiot'] not in przedmioty: continue
        a = '<a href="%s">arkusz</a>' % H.escape(os.path.relpath(x['plik'], baza))
        kl = ('<a href="%s">klucz</a>' % H.escape(os.path.relpath(x['klucz_plik'], baza))) if x.get('klucz_plik') else H.escape(x['klucz'])
        r.append('<tr><td>%s</td><td>%s</td><td>%s</td><td class="n">%s</td><td>%s · %s</td><td class="s">%s</td></tr>' % (
            H.escape(x['przedmiot']), H.escape(ETAPY[x['etap']]), H.escape(x['rok']), x['zadania'] or '—', a, kl, H.escape(x['opis'])))
    for b in ARCH['brak']:
        if not any(pz in b['przedmiot'] for pz in przedmioty): continue
        r.append('<tr><td>%s</td><td>—</td><td>%s</td><td></td><td>brak pliku</td><td class="s">%s</td></tr>' % (H.escape(b['przedmiot']), H.escape(b['rok']), H.escape(b['opis'])))
    return ('<h2>Archiwalne arkusze LKO</h2><table><tr><th>przedmiot</th><th>etap</th><th>rok</th><th class="n">zad.</th><th>pliki</th><th>opis roku</th></tr>%s</table>' % ''.join(r)) if r else ''
def strona(tyt, sekcje, baza, kryt):
    h = ['<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>%s</title>%s</head><body><h1>%s</h1>' % (H.escape(tyt), CSS, H.escape(tyt)), TERM]
    h.append('<div class="box s">%s</div>' % H.escape(LEGENDA.replace('**', '')))
    h.append('<p class="s">Generowane: <code>python3 narzedzia/spis_lekcji.py</code> (%s). Linki do html działają po zbudowaniu lekcji (katalogi dist/ nie są w repo).</p>' % datetime.date.today())
    for naz, wz, dist in sekcje:
        rw = wiersze(wz, dist, baza)
        if not rw: continue
        h.append('<h2>%s (%d)</h2><table><tr><th>lekcja</th><th>etap LKO 2026/27</th><th>warstwy</th><th class="n">KB</th><th class="n">wiz.</th><th>uwagi</th></tr>%s</table>' % (H.escape(naz), len(rw), ''.join(rw)))
    h.append(arch_html(PRZ_ARCH.get(kryt, ('biologia', 'chemia')), baza))
    if kryt == 'biologia':
        h.append('<h2>Planowane lekcje (brak plików)</h2><table><tr><th>kod</th><th>temat</th><th>etap LKO</th></tr>%s</table>' % ''.join(
            '<tr><td>%s</td><td>%s</td><td>%s</td></tr>' % tuple(H.escape(y) for y in x) for x in PLANOWANE_BIO))
    return ''.join(h) + '</body></html>'
for kat, tyt, sek in PRZEDMIOTY:
    open(os.path.join(kat, 'INDEKS.html'), 'w', encoding='utf-8').write(strona('Indeks lekcji — ' + tyt, sek, kat, kat))
open('INDEKS.html', 'w', encoding='utf-8').write(strona('Indeks lekcji — wszystkie przedmioty', [x for _, _, s in PRZEDMIOTY for x in s], '.', 'wszystkie').replace(
    '</h1>', '</h1><p>Indeksy przedmiotów: <a href="chemia/INDEKS.html">chemia</a> · <a href="biologia/INDEKS.html">biologia</a> · <a href="polski/INDEKS.html">polski</a> · <a href="SPIS_LEKCJI.md">spis md</a></p>', 1))
print('INDEKS.html + indeksy przedmiotów')
