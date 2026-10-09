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

def wiersze(pliki):
    out = []
    for f in pliki:
        txt = open(f, encoding='utf-8').read()
        d, body = fm(txt)
        fn = os.path.basename(f)
        n = skroc(d.get('opis') or d.get('lead') or '') or notka(body)
        out.append('| %s | %s | %s | %d KB | `%s` |' % (kod_z_nazwy(fn), tytul(d, body, fn).replace('|', '/'), n.replace('|', '/'), os.path.getsize(f) // 1000, f))
    return out

NAGL = '| kod | lekcja | o czym | rozmiar | plik |\n|---|---|---|---|---|'
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
chem = []
w('## Chemia (CHE) — kanon, %d lekcji\n' % len(KD.L))
for nr, g, nm, _ in KD.GRUPY:
    ls = [d for d in KD.L if d['kod'][0] == g]
    w('### CHE.%s %s — %s\n' % (nr, g, nm))
    w('| kod | lekcja | o czym | poziom | status |\n|---|---|---|---|---|')
    for d in ls:
        w('| %s | %s | %s | %s | %s |' % (d['kod'], d['tytul'], skroc(d['cel']), d['poziom'], st(d['kod'])))
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
        w('### %s\n' % nazwa); w(NAGL); out.extend(wiersze(pl)); w('')

open('SPIS_WSZYSTKICH.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('ok SPIS_WSZYSTKICH.md', len(out), 'linii')
