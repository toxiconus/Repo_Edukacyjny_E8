#!/bin/sh
# Jednorazowa migracja v0_57: stare lekcje HTML → md (uruchamiać tylko od nowa; nadpisuje md/)
cd "$(dirname "$0")/.."
for x in "n01_new N01 N01_tlenki" "n02_new N02 N02_wodorotlenki" "kw_new N03 N03_kwasy" "sole_new N04 N04_sole" "fiz_elektro_new FIZ-01 FIZ01_elektrostatyka"; do
  set -- $x; python3 narzedzia/html2md.py _zrodla/$1.html md/$3.md $2
done
python3 narzedzia/styl_wlasny.py _zrodla/n01_new.html n01-style md/N01_tlenki.md
python3 narzedzia/styl_wlasny.py _zrodla/n02_new.html n02-style md/N02_wodorotlenki.md
