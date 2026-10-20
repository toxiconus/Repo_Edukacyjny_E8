# Porównanie grafik BIO: biblioteka `szablon/wizualizacje/` (gałąź che-lekcje, dawna) vs `szablon/bio-rysunki.js` (nowe, 2026-10-20)

Decyzja użytkownika: **nie usuwać własnych — porównać i połączyć.** W lekcjach stoją obok siebie: najpierw wersja bogatsza (z biblioteki), potem skrót/ćwiczenie. Id własnych, które kolidowały, zmieniono (`-skrot`, `-krazenie`).

| Temat | Biblioteka (`wizualizacje/`) | Moje (`bio-rysunki.js`) | Co lepsze / po co obie | Gdzie w lekcjach |
|---|---|---|---|---|
| Serce i krążenie | `krazenie-obiegi`: 4 jamy, zastawki, 12 kroków, obiegi, autostart | `serce-budowa` (podpisz/znajdź), `krazenie` (pierścień z kroplą, filtr) | biblioteka = proces; moje = **ćwiczenie podpisywania** i szybka powtórka | B10 §2.5 |
| Wdech/wydech | `wdech-wydech`: tchawica, oskrzela, wskaźnik objętości i ciśnienia, przyciski | `wentylacja`: autostart „tam i z powrotem”, suwak | biblioteka = więcej danych; moje = ciągła animacja wg preferencji | B2c §2 |
| Nefron | `nefron`: wybór substancji → droga, ADH i barwa moczu | `nefron-budowa` (podpisz) | biblioteka = proces; moje = **ćwiczenie budowy** | B2c §6 |
| Odruch | `luk-odruchowy`: odruch cofnięcia ręki, neuron pośredniczący, uszkodzenia drogi | `cykl {cykl="odruch"}` (odruch kolanowy, autostart) | biblioteka bogatsza; moje = prosty autostart | B2d §8 |
| Mitoza/mejoza | `podzial-komorki`: matczyne/ojcowskie, chromatydy, liczby (model i człowiek) | `podzial-komorki-skrot` (2n=4, autostart) | biblioteka dokładniejsza; moje = szybki przegląd | B2f §4 |
| Fotosynteza ↔ oddychanie | `fotosynteza-oddychanie`: komórka liścia, suwak światła, bilans gazów | `fotosynteza-oddychanie-krazenie`: krążenie materii i energii + tabela | **dopełniają się** (bilans gazów vs obieg i tabela) | REV01 §7 |
| Rozwój żaby | `przeobrazenie-plaza`: suwak, oddychanie i środowisko | `cykl {cykl="zaba"}` (pierścień, autostart) | biblioteka szczegółowa; moje = autostart | REV02 §8.2 |
| Mikroskop | `mikroskop-model`: obraz z mikroskopu vs model komórki | `mikroskop-budowa` (części, podpisz) | **różne tematy** (obserwacja vs budowa przyrządu) | REV01 §2 / REV02 D+ |
| Układ pokarmowy | `droga-pokarmu`, `kosmek-jelitowy`: narządy, krok kęsa, wchłanianie | `przewod-pokarmowy` (podpisz), `cykl {cykl="pokarm"}` | biblioteka = proces; moje = ćwiczenie (jeszcze niewstawione) | B2b §1, §5 |
| Neuron / synapsa | `synapsa` | `neuron-budowa` (podpisz) | różne elementy; razem pełny obraz | B2d §4, §6 |
| Skóra, staw | `skora-przekroj`, `staw-antagonizm` | — | tylko biblioteka | B2a |
| Rozrodczość | `uklad-rozrodczy`, `cykl-miesiaczkowy`, `droga-zarodka`, `lozysko-wymiana`, `etapy-zycia` | `jajo-ptaka`, `jajo-porownanie` (jajo u grup + ewolucja) | różne zakresy | B2f, REV02 §8 |
| Tylko moje (brak w bibliotece) | — | `ryba-budowa`, `tkanki-zwierzece`, `stawonogi-budowa`, `komorki-porownanie`, `wykres-dane`, `naczynia-krwionosne`, `cykl` (mech, paproć, kwiat, tasiemiec, faga) | luki w bibliotece | REV01/REV02, B10 |

## Wspólna zaleta „mojego” silnika
Tryby **poznaj / znajdź / podpisz** (`BIO.lab`) — ćwiczenie podpisywania rysunku jak na arkuszu LKO; nie ma ich w bibliotece. Pomysł scalenia: dodać tryb „podpisz” do wybranych grafik biblioteki (serce, nefron, skóra, ucho) przez wspólne `BIO.lab`.

## Techniczne
- Build (`md2html_bio.py`): rdzeń `bio-core.js` + tylko użyte `wizualizacje/<id>.js` + `bio-rysunki.js`.
- Zmienne CSS krwi (`--blood-o2` itd.) dopisane do `bio-warstwa.css` (bez nich komory serca były czarne).
- Gałąź `origin/claude/che-lekcje` ma też własne wersje md lekcji (BIO.07.U03 itd.) i inny potok (`lekcja_html`) — niescalona (decyzja S-E).
