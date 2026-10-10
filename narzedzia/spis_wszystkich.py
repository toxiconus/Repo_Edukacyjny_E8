#!/usr/bin/env python3
"""Spis treści wszystkich przedmiotów w jednym md: SPIS_WSZYSTKICH.md (katalog główny repo).
Jedna linia na lekcję: kod · tytuł · krótka notka o treści · rozmiar · plik.
Chemia: kanon (chemia/plany/narzedzia/kanon_dane.py) — cel lekcji i status z CHE_SPIS_TRESCI.md.
Pozostałe: notka z frontmattera (opis/lead) albo z sekcji „Pytanie przewodnie”/„Cel” albo z pierwszego akapitu.
Użycie: python3 narzedzia/spis_wszystkich.py
"""
import os, re, glob, sys, datetime

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(REPO)

def fm(text):
    m = re.match(r'---\n(.*?)\n---\n', text, re.S)
    d = {}
    if m:
        for ln in m.group(1).split('\n'):
            k = re.match(r'([a-z_]+):\s*(.*)', ln)
            if k and k.group(2).strip(): d[k.group(1)] = k.group(2).strip().strip('"')
    return d, (text[m.end():] if m else text)

def czysc(s):
    s = re.sub(r'\[\[[a-z]+:([^\]]*)\]\]', r'', s)
    s = re.sub(r'[*_`>]|<[^>]+>', '', s)
    s = re.sub(r'\s+', ' ', s).strip(' -:·|')
    return s

def skroc(s, n=170):
    s = czysc(s)
    if len(s) <= n: return s
    cut = s[:n].rsplit(' ', 1)[0]
    return cut.rstrip(',;:') + '…'

META = re.compile(r'^(- )?(Numer|Tytuł|Dział|Poziom|Poprzednia|Status|Szablon|Zasada|Wersja|kod|uid)\b', re.I)

def notka(body):
    L = body.split('\n')
    # 1) sekcja Pytanie przewodnie / Cel / Po lekcji
    for i, ln in enumerate(L):
        if re.match(r'#+ .*(Pytanie przewodnie|Cel lekcji|Cele lekcji|Cel i kryterium|Po co ta lekcja)', ln, re.I):
            for x in L[i + 1:i + 15]:
                x = x.strip()
                if x.startswith('#'): break
                if len(czysc(x)) > 30 and not META.match(x) and not x.startswith(('@', '|', '```', ':::')):
                    return skroc(x)
    # 2) pierwszy akapit treści
    for x in L:
        x = x.strip()
        if not x or x.startswith(('#', '@', '|', '```', ':::', '<!--', '---')) or META.match(x): continue
        if len(czysc(x)) > 40: return skroc(x)
    return ''

def tytul(d, body, fn):
    t = d.get('tytul') or ''
    if not t:
        m = re.search(r'^#\s+(.+)$', body, re.M)
        t = m.group(1) if m else fn
    t = re.sub(r'^(L\d+\w*|[A-Z]\d+[a-z]?|PL\.\w+)\s*[—–|.:-]+\s*', '', czysc(t))
    t = re.sub(r'\s*·\s*Polski: Podstawa Plus$', '', t)
    return t

def kod_z_nazwy(fn):
    m = re.match(r'([A-Z]{3})\.(\w+)\.([A-Za-z0-9+\-]+)\.', fn)
    return m.group(3) if m else fn.split('_')[0]

REJ = {}   # WERYFIKACJA.md: (przedmiot, kod) → data W1
for ln in open('WERYFIKACJA.md', encoding='utf-8'):
    c = [x.strip() for x in ln.strip().strip('|').split('|')]
    if len(c) > 3 and re.match(r'\d{4}-', c[3]): REJ[(c[0], c[1])] = c[3]

def weryf(d, body, prz=None, kod=None):
    """Krótki stan weryfikacji z pola stan/status + liczba sekcji „AUDYT” w pliku."""
    st_ = (d.get('stan') or d.get('status') or '')
    m = re.search(r'\b(W\d+)\b', st_)
    lab = m.group(1) if m else ('PUSTY' if 'PUSTY' in st_ else 'konwersja' if 'KONWERSJA' in st_ else 'brak W1')
    if 'nieprzeprowadzon' in st_: lab = 'brak W1'
    if re.search(r'\bW1 FULL\b', st_): lab = 'W1 FULL' + (' częściowo' if 'częściowo' in st_ else '')
    elif (prz, kod) in REJ and 'FULL' in REJ[(prz, kod)]: lab = 'W1 FULL (rejestr)'
    mo = re.search(r'(GPT-\d+|Grok|Claude|Perplexity)', st_)
    a = len(re.findall(r'^#{2,3} .*AUDYT', body, re.M))
    if lab in ('brak W1', 'konwersja') and (prz, kod) in REJ: lab = 'W1 (rejestr ' + REJ[(prz, kod)] + ')'
    elif lab == 'brak W1' and a:
        mh = re.findall(r'^#{2,3} .*AUDYT[^\n]*?(GPT-\d+|Grok|Claude|Perplexity)', body, re.M)
        lab = 'audyt w pliku' + (' (' + mh[-1] + ')' if mh else '')
    return lab + (' · ' + mo.group(1) if mo else '') + (' · audyty %d' % a if a else '')

def wiersze(pliki, prz=None):
    out = []
    for f in pliki:
        txt = open(f, encoding='utf-8').read()
        d, body = fm(txt)
        fn = os.path.basename(f)
        n = skroc(d.get('opis') or d.get('lead') or '') or notka(body)
        out.append('| %s | %s | %s | %d KB | %s | `%s` |' % (kod_z_nazwy(fn), tytul(d, body, fn).replace('|', '/'), n.replace('|', '/'), os.path.getsize(f) // 1000, weryf(d, body, prz, kod_z_nazwy(fn)), f))
        STAT.append((f, os.path.getsize(f), weryf(d, body, prz, kod_z_nazwy(fn))))
    return out

NAGL = '| kod | lekcja | o czym | rozmiar | weryfikacja | plik |\n|---|---|---|---|---|---|'
STAT = []
out = []; w = out.append
w('# Spis treści — wszystkie przedmioty\n')
w('_Wygenerowano %s z plików repo (`python3 narzedzia/spis_wszystkich.py`). Nie edytować ręcznie._\n' % datetime.date.today().isoformat())
w('Notka „o czym” pochodzi z lekcji (opis, cel lub pierwszy akapit). Chemia: lekcje kanonu z celem i statusem; szczegóły w `chemia/plany/CHE_SPIS_TRESCI.md`.\n')

# ---- chemia
sys.path.insert(0, 'chemia/plany/narzedzia')
import kanon_dane as KD
spis = open('chemia/plany/CHE_SPIS_TRESCI.md', encoding='utf-8').read()
def st(k):
    m = re.search(r'kod: %s\nstatus: ([^\n]+)' % k, spis)
    return m.group(1) if m else '—'
def rozwin(nazwa):
    """'O08+O11+O12' / 'O01-O07' / 'F04' → lista kodów."""
    out_ = []
    for cz in nazwa.split('+'):
        m = re.match(r'([A-Z]+)(\d+)-([A-Z]+)?(\d+)$', cz)
        if m: out_ += ['%s%02d' % (m.group(1), i) for i in range(int(m.group(2)), int(m.group(4)) + 1)]
        else: out_.append(cz)
    return out_
PLIK = {}
for f in sorted(glob.glob('chemia/lekcje_md/*/*.md')):
    for k in rozwin(os.path.basename(f).split('.')[2]): PLIK.setdefault(k, f)
for f in sorted(glob.glob('chemia/che-modular/lessons-md/gotowe/*.md')):
    PLIK[os.path.basename(f).split('_')[0]] = f   # gotowa lekcja ma pierwszeństwo
def chem_plik(k):
    f = PLIK.get(k)
    if not f: return '—', '—'
    d, body = fm(open(f, encoding='utf-8').read())
    v = weryf(d, body, 'chemia', k)
    STAT.append((f, os.path.getsize(f), v))
    return '%d KB' % (os.path.getsize(f) // 1000), v
chem = []
w('## Chemia (CHE) — kanon, %d lekcji\n' % len(KD.L))
for nr, g, nm, _ in KD.GRUPY:
    ls = [d for d in KD.L if d['kod'][0] == g]
    w('### CHE.%s %s — %s\n' % (nr, g, nm))
    w('| kod | lekcja | o czym | poziom | status | rozmiar | weryfikacja |\n|---|---|---|---|---|---|---|')
    for d in ls:
        kb, v = chem_plik(d['kod'])
        w('| %s | %s | %s | %s | %s | %s | %s |' % (d['kod'], d['tytul'], skroc(d['cel']), d['poziom'], st(d['kod']), kb, v))
    w('')
w('### CHE.00 — uzupełnienia\n\n| kod | o czym |\n|---|---|')
for k, t in KD.UZUPELNIENIA: w('| %s | %s |' % (k, czysc(t)))
w('')

# ---- pozostałe
SEK = [
    ('Biologia (BIO)', [
        ('BIO.00 — powtórki i lekcje w szablonie bio', sorted(glob.glob('biologia/bio/md/BIO.*.md'))),
        ('BIO.01 — komórka', sorted(glob.glob('biologia/md/BIO.01.*.md'))),
        ('BIO.02 — genetyka', sorted(glob.glob('biologia/md/BIO.02.*.md'))),
        ('BIO.03 — ewolucja', sorted(glob.glob('biologia/md/BIO.03.*.md'))),
        ('BIO.04 — ekologia', sorted(glob.glob('biologia/md/BIO.04.*.md'))),
        ('BIO.05–06 — powtórka roczna i extra', sorted(glob.glob('biologia/md/BIO.0[56].*.md'))),
    ]),
    ('Język polski (POL)', [
        ('POL.01 — lektury i gramatyka (L001–L006)', sorted(glob.glob('polski/lekcje_md/POL.*.md'))),
        ('POL.01 — lekcje przekrojowe (L007–L011)', sorted(glob.glob('polski/do_uzupelnienia/POL.*.md'))),
        ('POL.02 — części mowy i składnia (G01–G17)', sorted(glob.glob('polski/podstawy/POL.02.*.md'))),
        ('POL.03 — środki stylistyczne (S01–S06)', sorted(glob.glob('polski/podstawy/POL.03.*.md'))),
        ('POL.04 — kompetencje egzaminacyjne (D01–D13)', sorted(glob.glob('polski/blok_D/lekcje/POL.*.md'))),
    ]),
    ('Język angielski (ANG)', [('ANG.01 — gramatyka i egzamin', sorted(glob.glob('angielski/lekcje_md/ANG.*.md')))]),
    ('Olimpiada / konkursy (OLI)', [('OLI — biologia i chemia etap II', sorted(glob.glob('olimpiada/do_uzupelnienia/OLI.*.md')))]),
]
for przedmiot, grupy in SEK:
    n = sum(len(g[1]) for g in grupy)
    w('## %s — %d lekcji\n' % (przedmiot, n))
    for nazwa, pl in grupy:
        if not pl: continue
        w('### %s\n' % nazwa); w(NAGL); out.extend(wiersze(pl, {'Język polski (POL)': 'polski', 'Język angielski (ANG)': 'angielski', 'Biologia (BIO)': 'biologia'}.get(przedmiot))); w('')

# ---- tematy (plan) — odrębnie od lekcji
OLI = {}
for ln in open('olimpiada/OLIMPIADA_8_MASTER.md', encoding='utf-8'):
    m = re.match(r'^## ((CHEM|BIO|POL|MAT|OLI)-\d+) (.+)$', ln.strip())
    if m: OLI.setdefault(m.group(2), []).append((m.group(1), m.group(3).strip()))
# polski: brak osobnego planu kursu — tematy z OLIMPIADA_8_MASTER §9, pokrycie przypisane ręcznie (Claude, 2026-10-09, do sprawdzenia)
POL_POKR = {'POL-01': 'D01', 'POL-02': 'D01, D03', 'POL-03': 'D03', 'POL-04': 'D03', 'POL-05': 'D02, D05', 'POL-06': 'D04',
    'POL-07': 'D05', 'POL-08': 'D05–D09', 'POL-09': 'L011 (częściowo)', 'POL-10': '—', 'POL-11': 'L001–L006, L011', 'POL-12': 'L001',
    'POL-13': 'S06', 'POL-14': 'S02', 'POL-15': 'S06', 'POL-16': 'S01–S06, L010', 'POL-17': 'L011', 'POL-18': '—',
    'POL-19': 'G12–G17, L008', 'POL-20': 'G14–G16, L009', 'POL-21': 'G06, L001', 'POL-22': '—', 'POL-23': '—', 'POL-24': '—',
    'POL-25': 'częściowo (pisownia „nie” w L001, G03, G06)', 'POL-26': 'G15–G17, D12', 'POL-27': 'D12', 'POL-28': 'L001–L006 (tylko lektury IV–VI)',
    'POL-29': 'L001', 'POL-30': 'D11', 'POL-31': 'D03', 'POL-32': '—', 'POL-33': 'D05', 'POL-34': '—', 'POL-35': 'D04', 'POL-36': 'D01',
    'POL-37': 'G01–G17', 'POL-38': 'D13', 'POL-39': 'D13'}
# angielski: plan = lekcje mastera ANGIELSKI_PODSTAWA_PLUS_v1.0 + moduły z oceny audytu W1
ANG_PLAN = []
for ln in open('angielski/ANGIELSKI_PODSTAWA_PLUS_v1.0.md', encoding='utf-8'):
    m = re.match(r'^# LEKCJA (DODATKOWA )?(\d+) – (.+)$', ln.strip())
    if m: ANG_PLAN.append((('D' if m.group(1) else 'L%03d') % int(m.group(2)) if not m.group(1) else 'D%s' % m.group(2), czysc(m.group(3))))
ANG_MD = {kod_z_nazwy(os.path.basename(f)) for f in glob.glob('angielski/lekcje_md/ANG.*.md')}
ANG_MOD = ['rozumienie ze słuchu', 'czytanie', 'funkcje językowe', 'przetwarzanie wypowiedzi', 'słownictwo — 14 obszarów',
    'wpis na blogu', 'opis obrazka', 'reagowanie w dialogach', 'arkusz próbny', 'used to / would', 'been to / gone to',
    'for: Present Perfect vs Past Simple', 'rzeczowniki niepoliczalne, dopełniacz saksoński']
w('---\n\n# Tematy planowane (plan kursu — to NIE są lekcje)\n')
w('Tematy to zakres do opanowania; lekcja to plik md. Jeden temat może mieć kilka lekcji albo żadnej. Pokrycie w kolumnie „lekcje” — tam, gdzie da się je odczytać z plików, albo przypisane ręcznie (oznaczone).\n')
w('## Chemia — plan = kanon (113 lekcji, tabela wyżej); mapa olimpijska CHEM: %d tematów\n' % len(OLI.get('CHEM', [])))
w(', '.join('%s %s' % x for x in OLI.get('CHEM', [])) + '\n')
w('## Biologia — plan = kanon v5.2 (pliki `biologia/md`, tabela wyżej); mapa olimpijska BIO: %d tematów\n' % len(OLI.get('BIO', [])))
w(', '.join('%s %s' % x for x in OLI.get('BIO', [])) + '\n')
w('## Język polski — brak osobnego planu kursu; tematy z mapy olimpijskiej POL (%d)\n' % len(OLI.get('POL', [])))
w('_Pokrycie przypisane ręcznie (Claude, 2026-10-09) — do sprawdzenia. „—” = brak lekcji. Największa luka: lektury obowiązkowe klas VII–VIII._\n')
w('| temat | nazwa | lekcje |\n|---|---|---|')
for k, t in OLI.get('POL', []): w('| %s | %s | %s |' % (k, t, POL_POKR.get(k, '?')))
w('')
w('## Język angielski — plan = master `ANGIELSKI_PODSTAWA_PLUS_v1.0.md` (%d lekcji) + moduły z audytu W1\n' % len(ANG_PLAN))
w('| kod | temat | osobny md |\n|---|---|---|')
for k, t in ANG_PLAN: w('| %s | %s | %s |' % (k, t, 'tak' if k in ANG_MD else 'nie — tylko w masterze'))
w('\nModuły do dodania (ocena W1, `angielski/plany/audyty/W1_ANGIELSKI_ocena_2026-10-09.md`): ' + '; '.join(ANG_MOD) + '.\n')
w('## Matematyka — tylko mapa olimpijska MAT (%d tematów), brak lekcji\n' % len(OLI.get('MAT', [])))
w(', '.join('%s %s' % x for x in OLI.get('MAT', [])) + '\n')
w('## Umiejętności przekrojowe OLI (%d) — wspólne dla przedmiotów, bez osobnych lekcji\n' % len(OLI.get('OLI', [])))
w(', '.join('%s %s' % x for x in OLI.get('OLI', [])) + '\n')

# ---- podsumowanie na początku
def suma(pref):
    L = list({x[0]: x for x in STAT if x[0].startswith(pref)}.values())   # plik liczony raz
    w1 = sum(1 for x in L if re.match(r'W\d', x[2])); au = sum(1 for x in L if x[2].startswith('audyt w pliku'))
    return len(L), sum(x[1] for x in L) // 1000, w1, au
POD = ['## Podsumowanie\n', '| przedmiot | tematy w planie | pliki lekcji | rozmiar | po weryfikacji (W1+) | tylko audyt w pliku | brak |', '|---|---|---|---|---|---|---|']
for nazwa, pref, plan in [('Chemia', 'chemia/', '113 (kanon) · %d OLI' % len(OLI.get('CHEM', []))),
                          ('Biologia', 'biologia/', 'kanon v5.2 · %d OLI' % len(OLI.get('BIO', []))),
                          ('Polski', 'polski/', '%d (mapa OLI, brak planu kursu)' % len(OLI.get('POL', []))),
                          ('Angielski', 'angielski/', '%d (master) + %d modułów' % (len(ANG_PLAN), len(ANG_MOD))),
                          ('Olimpiada', 'olimpiada/', 'OLI %d · MAT %d' % (len(OLI.get('OLI', [])), len(OLI.get('MAT', []))))]:
    n, kb, w1, au = suma(pref)
    POD.append('| %s | %s | %d | %d KB | %d | %d | %d |' % (nazwa, plan, n, kb, w1, au, n - w1 - au))
POD.append('\n_Chemia: pliki materiału kanonu i lekcji gotowych (plik z kilkoma kodami liczony raz). „Weryfikacja” z pola stan/status lekcji, a gdy go brak — z rejestru `WERYFIKACJA.md`._\n')
i = next(j for j, x in enumerate(out) if x.startswith('## Chemia'))
out[i:i] = POD
open('SPIS_WSZYSTKICH.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('ok SPIS_WSZYSTKICH.md', len(out), 'linii')
