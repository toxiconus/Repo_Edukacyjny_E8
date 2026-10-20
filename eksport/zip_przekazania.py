#!/usr/bin/env python3
"""ZIP przekazania: lekcje (md + html) podzielone na przedmiot/etap LKO, archiwalne arkusze z opisem roku, olimpiada/, małe silniki, przekazanie.
Użycie (z katalogu głównego repo):  python3 eksport/zip_przekazania.py [wyjście.zip]   (domyślnie eksport/out/PRZEKAZANIE_<data>.zip; out/ poza gitem)
Układ:
  README.md
  lekcje/<przedmiot>/<etap>/<lekcja>.md  (+ .html, jeśli zbudowany w dist/)
  archiwum_arkuszy/<przedmiot>/<etap>/<rok>/{arkusz, klucz, OPIS_ROKU.md}
  olimpiada/            (cały katalog: źródła, plany, master, html, daty)
  silniki/              (che-modular: engine/src, tools; biologia: szablon, narzedzia)
  przekazanie/          (CLAUDE.md, PRZEKAZANIE*.md, SPIS_LEKCJI.md, INDEKS*.html, WERYFIKACJA.md, MAPA.md, plany)"""
import datetime, glob, json, os, re, sys, zipfile
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
sys.path.insert(0, os.path.join(ROOT, 'narzedzia'))
from etap_lko import etap

ETAP_DIR = {'I': 'etap_I_szkolny', 'II': 'etap_II_rejonowy', 'III': 'etap_III_wojewodzki'}
def katalog_etapu(e):
    m = re.match(r'(III|II|I)\b', e)
    return ETAP_DIR[m.group(1)] if m else 'poza_LKO'
LEKCJE = [('chemia', 'chemia/che-modular/lessons-md/gotowe/*.md', 'chemia/che-modular/dist'),
          ('biologia', 'biologia/bio/md/*.md', 'biologia/bio/dist'),
          ('polski', 'polski/lekcje/*.md', None), ('polski', 'polski/podstawy/*.md', None)]
SILNIKI = ['chemia/che-modular/engine/src', 'chemia/che-modular/tools', 'chemia/che-modular/engine/registry', 'biologia/bio/szablon', 'biologia/bio/narzedzia', 'narzedzia', 'eksport/zbierz_lekcje.py', 'eksport/zip_przekazania.py']
PRZEKAZANIE = ['CLAUDE.md', 'PRZEKAZANIE.md', 'SPIS_LEKCJI.md', 'INDEKS.html', 'WERYFIKACJA.md', 'MAPA.md', 'ZADANIA_HAIKU_SONNET.md',
               'chemia/che-modular/PRZEKAZANIE.md', 'chemia/che-modular/PRZEKAZANIE_HAIKU_SONNET.md', 'chemia/INDEKS.html', 'biologia/bio/PRZEKAZANIE.md',
               'biologia/bio/BIO_KATALOG.md', 'biologia/INDEKS.html', 'polski/INDEKS.html', 'biologia/plany', 'chemia/plany', 'polski/plany']

def dodaj(z, sciezka, arc):
    if os.path.isdir(sciezka):
        for d, dn, fn in os.walk(sciezka):
            dn[:] = [x for x in dn if x not in ('__pycache__', 'node_modules', '.git')]
            for f in fn:
                p = os.path.join(d, f); z.write(p, os.path.join(arc, os.path.relpath(p, sciezka)))
    elif os.path.exists(sciezka):
        z.write(sciezka, os.path.join(arc, os.path.basename(sciezka)))

def opis_roku(x):
    return ('# %s — %s, etap %s, rok %s\n\n%s\n\nZadań: %s · czas: %s min.\nKlucz: %s\nPliki: %s%s\n\nLekcje właściwe dla tego etapu: zob. `lekcje/%s/%s/`.\n' % (
        x['przedmiot'], 'Lubelski Konkurs (kuratorium.lublin.pl)', x['etap'], x['rok'], x['opis'], x['zadania'] or 'nie podano', x['czas_min'], x['klucz'],
        os.path.basename(x['plik']), (', ' + os.path.basename(x['klucz_plik'])) if x.get('klucz_plik') else '', x['przedmiot'], ETAP_DIR[x['etap']]))

def main():
    out = sys.argv[1] if len(sys.argv) > 1 else 'eksport/out/PRZEKAZANIE_%s.zip' % datetime.date.today()
    os.makedirs(os.path.dirname(out) or '.', exist_ok=True)
    arch = json.load(open('olimpiada/zrodla/archiwum_arkuszy.json', encoding='utf-8'))
    n = {'md': 0, 'html': 0, 'arkusze': 0}
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
        for prz, wz, dist in LEKCJE:
            for f in sorted(glob.glob(wz)):
                nm = os.path.basename(f)[:-3]; kat = os.path.join('lekcje', prz, katalog_etapu(etap(nm)))
                z.write(f, os.path.join(kat, nm + '.md')); n['md'] += 1
                h = os.path.join(dist, nm + '.html') if dist else None
                if h and os.path.exists(h): z.write(h, os.path.join(kat, nm + '.html')); n['html'] += 1
        for x in arch['wpisy']:
            kat = os.path.join('archiwum_arkuszy', x['przedmiot'], ETAP_DIR[x['etap']], x['rok'].replace('/', '_'))
            z.write(x['plik'], os.path.join(kat, os.path.basename(x['plik'])))
            if x.get('klucz_plik'): z.write(x['klucz_plik'], os.path.join(kat, os.path.basename(x['klucz_plik'])))
            z.writestr(os.path.join(kat, 'OPIS_ROKU.md'), opis_roku(x)); n['arkusze'] += 1
        if arch['brak']:
            z.writestr('archiwum_arkuszy/BRAKUJE.md', '# Arkusze, których nie ma w repo\n\n' + '\n'.join('- **%s %s** — %s' % (b['przedmiot'], b['rok'], b['opis']) for b in arch['brak']) + '\n')
        dodaj(z, 'olimpiada', 'olimpiada')
        for s in SILNIKI: dodaj(z, s, os.path.join('silniki', os.path.dirname(s) if os.path.isfile(s) else s))
        for s in PRZEKAZANIE: dodaj(z, s, os.path.join('przekazanie', os.path.dirname(s)))
        z.writestr('README.md', '# ZIP przekazania %s\n\n- `lekcje/<przedmiot>/<etap>/` — lekcje md (+ html, jeśli zbudowane), podział wg etapu LKO 2026/27 (I szkolny, II rejonowy, III wojewódzki, poza LKO).\n'
                   '- `archiwum_arkuszy/<przedmiot>/<etap>/<rok>/` — arkusze i klucze z opisem roku (OPIS_ROKU.md); `BRAKUJE.md` — czego nie mamy.\n'
                   '- `olimpiada/` — źródła, plany, master, daty olimpiad. `silniki/` — małe silniki i narzędzia. `przekazanie/` — zasady, spisy, indeksy, plany, rejestr weryfikacji.\n'
                   '- Indeksy: `przekazanie/INDEKS.html`, `przekazanie/SPIS_LEKCJI.md` (etap LKO + warstwy + archiwalne arkusze).\n' % datetime.date.today())
    print(out, os.path.getsize(out) // 1024, 'KB;', n)
main()
