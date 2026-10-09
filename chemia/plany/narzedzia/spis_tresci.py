# -*- coding: utf-8 -*-
"""Generuje chemia/plany/CHE_SPIS_TRESCI.md z kanon_dane.py + stanu plików w repo.
Użycie (z katalogu chemia/):  python3 che/narzedzia/spis_tresci.py
"""
import os, re, glob, sys, datetime
sys.path.insert(0, os.path.dirname(__file__)); import kanon_dane as KD

G = 'che-modular/lessons-md/gotowe/'
GOTOWE = {  # kod v0.3 -> gotowa lekcja (md w szablonie + HTML przez che-modular/tools/md2html.py)
    'F01': G+'F01_jak_mysli_chemik.md', 'F02': G+'F02_materia_i_substancje.md', 'F03': G+'F03_wlasciwosci_i_rozdzielanie.md', 'F04': G+'F04_atom.md',
    'F05': G+'F05_izotopy_jony_masa_atomowa.md', 'F06': G+'F06_uklad_okresowy.md', 'N01': G+'N01_powietrze_i_gazy.md',
    'N02': G+'N01_tlenki.md', 'N03': G+'N02_wodorotlenki.md', 'N04': G+'N03_kwasy.md', 'N05': G+'N04_sole.md', 'N06': G+'N05_wodorki.md',
    'R03': G+'R03_woda_roztwory_stezenie_procentowe.md',
}
GOTOWE = {k: v for k, v in GOTOWE.items() if os.path.exists(v)}

STATUSY = ['GOTOWE HTML', 'GOTOWE MASTER', 'UZUPEŁNIONE', 'POPRAWIONE', 'DO SPRAWDZENIA', 'ŹRÓDŁO', 'PRZENIESIONE', 'DO IMPLEMENTACJI']
def status(k):
    """Rejestr statusów (audyt końcowy W1). Ręczne nadpisanie: kanon_dane.STATUS[kod]."""
    if k in getattr(KD, 'STATUS', {}): return KD.STATUS[k]
    if k in GOTOWE: return 'GOTOWE HTML'
    fs = MAT.get(k, [])
    if not fs: return 'DO IMPLEMENTACJI'
    s = ' '.join(open(f, encoding='utf-8').read() for f in fs)
    if 'UZUPEŁNIENIE KANONICZNE' in s or 'TREŚĆ KANONICZNA' in s: return 'UZUPEŁNIONE'
    if 'AUDYT' in s: return 'POPRAWIONE'
    return 'ŹRÓDŁO'

def kody_z_nazwy(name):
    """CHE.03.R04+R07-R09.x.md -> {R04,R07,R08,R09}"""
    m = re.match(r'CHE\.\d\d\.([A-Z0-9+\-]+)\.', name)
    if not m: return set()
    out = set()
    for part in m.group(1).split('+'):
        r = re.fullmatch(r'([A-Z]+)(\d\d)(?:-[A-Z]*(\d\d))?', part)
        if not r: out.add(part); continue
        a = int(r.group(2)); b = int(r.group(3) or a)
        out |= {'%s%02d' % (r.group(1), i) for i in range(a, b + 1)}
    return out

MAT = {}
for f in sorted(glob.glob('lekcje_md/*/*.md')):
    for k in kody_z_nazwy(os.path.basename(f)): MAT.setdefault(k, []).append(f)
kb = lambda f: os.path.getsize(f) // 1000

def stan(k):
    if k in GOTOWE: return '●●●'
    fs = MAT.get(k, [])
    if not fs: return '○○○'
    if len(fs) == 1 and len(kody_z_nazwy(os.path.basename(fs[0]))) > 1: return '●○○'
    s = sum(kb(f) for f in fs)
    return '●●○' if s >= 25 else '◐○○'

out = []; w = out.append
n = len(KD.L); cnt = {}
for d in KD.L: cnt[stan(d['kod'])] = cnt.get(stan(d['kod']), 0) + 1
w('---\nkod: CHE-SPIS\nwersja: v0.3 (plan roboczy)\ndata: %s\nzrodlo: wygenerowane z che/narzedzia/kanon_dane.py (edytuj dane, nie ten plik) — `python3 che/narzedzia/spis_tresci.py`\nzastepuje: CHE_KANON_v0.2.md, CHE_SPIS_LEKCJI.md, AUDYT_SPISU_v0.2.md (usunięte, w historii git), PLAN_LEKCJI.md\nuzupelnia: PLAN_SCIEZKI_DYDAKTYCZNE.md\n---\n' % datetime.date.today())
w('# CHE — spis treści kursu chemii: wszystkie lekcje, zakresy, co mamy\n')
w('## 0. Jak czytać\n')
w('- **Kanon** = biblioteka całej chemii. Kod (np. N03) to stałe miejsce lekcji w bibliotece, **nie** kolejność nauki. Kolejność dla klasy 7, klasy 8 i LO wyznaczają ścieżki (`PLAN_SCIEZKI_DYDAKTYCZNE.md`).')
w('- Numeracja jest logiczna **wewnątrz grupy**: lekcja korzysta z wcześniejszych lekcji tej grupy i z grup wskazanych w `wymaga`.')
w('- **Poziom:** `E8` szkoła podstawowa · `E8+LO` część E8 + rozszerzenie LO w sekcjach z oznaczeniem poziomu · `LO` tylko liceum. Przydział E8 do weryfikacji z podstawą programową po zmianach 2024.')
w('- **Stan:** ●●● gotowa lekcja (md w szablonie + HTML) · ●●○ obszerny materiał w osobnym md · ◐○○ materiał cienki · ●○○ materiał wspólny z innymi lekcjami (stara lekcja zbiorcza) · ○○○ brak materiału.')
w('- **Mamy:** pliki materiału w `chemia/lekcje_md/<grupa>/` — jeden plik na lekcję (blok F) albo plik zbiorczy starej lekcji v1.1. Na końcu każdego pliku F jest sekcja „MATERIAŁ Z ARCHIWUM — do redakcji” z treściami ze starszych wersji, których nie było w głównej.')
w('- **Było:** kod w spisie v0.1 (sprzed przenumerowania).\n')
st = {}
for d in KD.L: st[status(d['kod'])] = st.get(status(d['kod']), 0) + 1
w('- **Status (rejestr z audytu końcowego W1):** GOTOWE HTML — lekcja zbudowana · GOTOWE MASTER — pełny materiał i specyfikacja · UZUPEŁNIONE — dopisana treść kanoniczna · POPRAWIONE — korekty z audytu · DO SPRAWDZENIA · ŹRÓDŁO — materiał bazowy bez audytu · PRZENIESIONE — treść ma właściciela w innej lekcji · DO IMPLEMENTACJI — tylko opis w kanonie. Wyliczany z plików; ręcznie: `kanon_dane.STATUS`.')
w('- **Treść ponad E8** (np. Faraday, rząd reakcji, Hess, Ka/pKa, bufory) idzie do sekcji `[[extra:ZAAWANSOWANY]]` w tej samej lekcji — nie do osobnych lekcji OLIMPIADA.\n')
w('**Statusy:** ' + ' · '.join('%s %d' % (s, st[s]) for s in STATUSY if s in st) + '.\n')
w('**Bilans:** %d lekcji w 10 grupach. ' % n + ' · '.join('%s %d' % (k, cnt.get(k, 0)) for k in ['●●●', '●●○', '◐○○', '●○○', '○○○']) + '.\n')

w('## 1. Zasady kanonu\n')
w('1. **Jeden właściciel pojęcia (OWNER).** Pojęcie uczy od zera jedna lekcja; inne je przypominają ściągą (REF), pogłębiają (EXPAND) albo używają (APPLY). Przykład: stopień utlenienia — OWNER F09, REF N02, EXPAND X06–X07, APPLY X03.')
w('2. **Poziomy w lekcji, nie osobne lekcje.** Ścieżka E8 pokazuje tylko sekcje E8.')
w('3. **Grupy się przecinają.** J i R wchodzą do lekcji N jako sekcje E8; pełne lekcje J/R są właścicielami.')
w('4. **Bez kasowania treści.** Scalenie = treść obu lekcji w jednej; stary kod w mapie (sekcja 13).')
w('5. **Numeracja stabilna od v1.0.** Do zatwierdzenia v1.0 wolno przenumerowywać.\n')
w('### Kolejność grup\n\n| nr | grupa | lekcji | dlaczego tu |\n|---|---|---|---|')
for nr, g, nm, why in KD.GRUPY:
    w('| %s | %s %s | %d | %s |' % (nr, g, nm, sum(1 for d in KD.L if d['kod'][0] == g), why))
w('')

w('## 2. Spis skrócony\n')
for nr, g, nm, _ in KD.GRUPY:
    ls = [d for d in KD.L if d['kod'][0] == g]
    w('**%s %s:** ' % (g, nm) + ' · '.join('%s %s %s' % (stan(d['kod']), d['kod'], d['tytul']) for d in ls) + '\n')

sec = 3
for nr, g, nm, why in KD.GRUPY:
    w('---\n\n## %d. %s — %s\n' % (sec, g, nm)); sec += 1
    w('_%s_\n' % why)
    for d in [x for x in KD.L if x['kod'][0] == g]:
        k = d['kod']
        if k in KD.FAZY_F: w('### %s\n' % KD.FAZY_F[k])
        w('#### %s — %s\n' % (k, d['tytul']))
        y = ['kod: ' + k, 'status: ' + status(k), 'poziom: ' + d['poziom'], 'wymaga: "%s"' % d['wymaga'], 'poglebia: "%s"' % d['poglebia'], 'stan: "%s"' % stan(k)]
        if d.get('bylo') and d['bylo'] != k: y.append('bylo: "%s"' % d['bylo'])
        w('```yaml\n' + '\n'.join(y) + '\n```\n')
        w('**Cel:** ' + d['cel'] + '\n')
        w('**Co ma być:**\n' + '\n'.join('- ' + z.strip() for z in d['zakres'].split(';')) + '\n')
        mam = []
        if k in GOTOWE: mam.append('gotowa lekcja `%s` (%d KB) → HTML przez `md2html.py`' % (GOTOWE[k], kb(GOTOWE[k])))
        for f in MAT.get(k, []):
            ks = sorted(kody_z_nazwy(os.path.basename(f)))
            wsp = '' if len(ks) == 1 else ' — wspólny dla %s' % ', '.join(ks)
            mam.append('materiał `%s` (%d KB)%s' % (f, kb(f), wsp))
        w('**Mamy:** ' + ('; '.join(mam) if mam else 'nic — do napisania') + '\n')
        if d.get('dlaczego'): w('**Dlaczego tu:** ' + d['dlaczego'] + '\n')

w('---\n\n## %d. Uzupełnienia (poza grupami)\n\n| kod | co | mamy |\n|---|---|---|' % sec); sec += 1
for k, t in KD.UZUPELNIENIA:
    fs = [f for f in glob.glob('lekcje_md/00/*.md') if '.%s.' % k in f]
    if k == 'FIZ-01': fs = [G + 'FIZ01_elektrostatyka.md (gotowa ●●●)']
    w('| %s | %s | %s |' % (k, t, ', '.join('`%s`' % f for f in fs) or '—'))
w('\nMateriał wspólny kursu: `lekcje_md/00/CHE.00.W00.wstep.md` (wstęp pakietu v1.1), `lekcje_md/00/CHE.00.S00.system_kursu.md` (system kursu), `lekcje_md/F/CHE.01.F00.wspolne_bloku_F.md` (systemy zadań, powtórek, mistrzostwa i specyfikacja HTML bloku F).\n')

w('## %d. Mapa kodów v0.1 → v0.3\n\n| v0.1 | teraz | lekcja |\n|---|---|---|' % sec); sec += 1
for d in KD.L:
    b = d.get('bylo')
    if b and b != d['kod']: w('| %s | %s | %s |' % (b, d['kod'], d['tytul']))
w('\nGotowe pliki z dawnymi kodami (do przemianowania jednym skryptem po zatwierdzeniu): ' + ', '.join('`%s` → %s' % (v, k) for k, v in GOTOWE.items() if os.path.basename(v)[:3] != k) + '.\n')

w('## %d. Decyzje przyjęte domyślnie (do potwierdzenia)\n' % sec); sec += 1
w('| sprawa | przyjęte | alternatywa |\n|---|---|---|')
for a, b, c in [('F10 cienkie', 'osobno, do rozbudowy', 'scalić z F11'), ('Powietrze i gazy', 'nowa lekcja N01', 'N00 bez przenumerowania N'),
                ('stary X02 vs X05', 'X01 = rozpoznawanie redoks, X02 = katalog utleniaczy', 'dwie pełne lekcje'),
                ('stare K05 vs K06', 'K01 jakościowo (E8), K02 ilościowo (LO)', 'scalić'), ('Mydła i detergenty', 'sekcja w O13', 'osobna lekcja')]:
    w('| %s | %s | %s |' % (a, b, c))
w('\n## %d. Następne kroki\n' % sec)
w('1. Zatwierdzić decyzje z tabeli wyżej i kolumnę „poziom” (podstawa E8 po 2024).')
w('2. Przemianować gotowe lekcje N (`che-modular/lessons-md/gotowe/`) na nowe kody.')
w('3. Wydzielać kolejne lekcje F do szablonu (→ `che-modular/lessons-md/gotowe/`) z plików `lekcje_md/F/` — treść główna + przegląd sekcji „z archiwum”.')
w('4. Rozdzielić stare lekcje zbiorcze v1.1 (R, O, X) na pojedyncze kody przy pisaniu tych lekcji.')
open('plany/CHE_SPIS_TRESCI.md', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('ok', n, cnt)
