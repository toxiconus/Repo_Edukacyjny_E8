#!/usr/bin/env python3
"""Jedno polecenie odświeżające wszystkie generowane katalogi: HTML lekcji, pakiety i okładki, spisy, katalog grafik, mapę plików, bazę małą wizualizacji.
Użycie: python3 narzedzia/odswiez_wszystko.py [--szybko]   (--szybko pomija budowę HTML i pakietów)
Uruchamiaj po zmianach lekcji, przed commitem. Generowanych kopii (okladki/, chemia/pakiet/, olimpiada/LKO_pakiet/, wizualizacje-projekty/baza-mala/) nie edytuj ręcznie."""
import subprocess, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
szybko = '--szybko' in sys.argv
kroki = [] if szybko else [['zbuduj_wszystkie.py'], ['pakiety_okladki.py']]
kroki += [['okladki_zakladki.py'], ['spis_lekcji.py'], ['katalog_grafik_bio.py'], ['opis_wizualizacji.py'], ['mapa.py']]
extra = os.path.join(ROOT, 'wizualizacje-projekty/narzedzia/zbuduj_baze_mala.py')
if os.path.exists(extra): kroki.insert(len(kroki) - 1, [extra])
for k in kroki:
    p = k[0] if os.path.isabs(k[0]) else os.path.join(ROOT, 'narzedzia', k[0])
    r = subprocess.run([sys.executable, p] + k[1:], cwd=ROOT, capture_output=True, text=True)
    out = (r.stdout + r.stderr).strip().splitlines()
    print(('OK  ' if r.returncode == 0 else 'BŁĄD'), os.path.basename(p), '|', out[-1][:110] if out else '')
