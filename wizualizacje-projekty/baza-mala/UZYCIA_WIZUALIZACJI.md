# Użycia wizualizacji — która grafika w której lekcji

Stan: 2026-10-20. Generowane przez `wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py`. **Nie edytować ręcznie.**

Liczenie: każde wystąpienie dyrektywy `@model`, `@viz`, `@klocek`, `@zlewka` (druga część = klucz) oraz `$gfx scene=` w źródłach lekcji. Lekcje z różnych folderów liczone osobno.

## 1. Podsumowanie

| Liczba wizualizacji w bazie | Użyte 0 razy | Użyte 1 raz | Użyte 2 lub więcej razy |
|---|---|---|---|
| 355 | 189 | 83 | 83 |

Identyfikatory w lekcjach, których nie ma w bazie (do sprawdzenia, prawdopodobnie literówki lub klucze pracowni): **31**: `-`, `caoh2Co2`, `cuoH2so4`, `cuso4Naoh`, `cykl`, `f02-czastki-v01`, `f04-nuklid-v01`, `fecl3Naoh`, `fotosynteza-oddychanie-krazenie`, `hclNaOH`, `jajo-porownanie`, `jajo-ptaka`, `komorki-porownanie`, `krazenie`, `mgO2`, `mikroskop-budowa`, `naH2o`, `nefron-budowa`, `neuron-budowa`, `podzial-komorki-skrot`, `rx-ag-cl`, `rx-cu-naoh`, `rx-fe-cuso4`, `ryba-budowa`, `serce-budowa`, `stawonogi-budowa`, `szereg`, `tkanki-zwierzece`, `wentylacja`, `wlasciwosci`, `wykres-dane`

## 2. Najczęściej używane (kandydaci do ulepszenia w pierwszej kolejności)

| # | Identyfikator | Biblioteka | Użycia | Lekcje (liczba użyć) |
|---|---|---|---|---|
| 1 | `karta-bhp` | klocek | **16** | C1c_kwasy_zasady_sole ×1, C2w_wzor_elementarny_rzeczywisty ×1, C4 ×1, F01 ×1, F02 ×1, F03 ×1, F06 ×1, LKO_ORG01_alkany ×1, LKO_ORG02_alkeny ×1, LKO_ORG03_alkohole ×1, LKO_ORG04_glicerol ×1, LKO_ORG05_kwasy ×1, LKO_ORG06_estry ×1, LKO_ORG07_cukry ×1, LKO_ORG08_mol_gazy ×1, X04 ×1 |
| 2 | `wzor-2d` | klocek | **16** | C1c_wodorki_typy_reakcji ×3, C1c_kwasy_zasady_sole ×2, LKO_ORG01_alkany ×2, LKO_ORG02_alkeny ×2, LKO_ORG04_glicerol ×2, LKO_ORG06_estry ×2, LKO_ORG03_alkohole ×1, LKO_ORG05_kwasy ×1, LKO_ORG07_cukry ×1 |
| 3 | `sole-doswiadczenia-v01` | CHE model | **15** | N05 ×14, C2w_wzor_elementarny_rzeczywisty ×1 |
| 4 | `f01-doswiadczenia-v01` | CHE pracownia (lite) | **12** | F01 ×7, F02 ×3, F17 ×1, N01 ×1 |
| 5 | `kw-doswiadczenia-v01` | CHE model | **11** | N04 ×11 |
| 6 | `n02-doswiadczenia-v01` | CHE model | **8** | N03 ×8 |
| 7 | `probowki-odczyn` | klocek | **8** | C4 ×3, C2w_wzor_elementarny_rzeczywisty ×1, LKO_ORG02_alkeny ×1, LKO_ORG03_alkohole ×1, LKO_ORG04_glicerol ×1, LKO_ORG05_kwasy ×1 |
| 8 | `lancuch` | BIO | **6** | BIO.01.L004.organizacja_budowy_organizmu_od_komorki ×2, BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1, BIO.02.L010.dna_od_zera ×1, BIO.02.L015.mejoza ×1 |
| 9 | `stech-kalkulator-v01` | CHE model | **6** | C2m_mol_masa_molowa ×1, C3 ×1, F17 ×1, N02 ×1, N05 ×1, R07 ×1 |
| 10 | `f06-doswiadczenia-v01` | CHE pracownia (lite) | **5** | F06 ×5 |
| 11 | `podzial-komorki` | BIO | **5** | BIO.01.L009.podzial_komorki_wzrost_regeneracja_i ×1, BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.02.L014.jak_komorki_ciala_powstaja_i ×1, BIO.02.L015.mejoza ×1, BIO.05.L050.powtorka_roczna ×1 |
| 12 | `punnett` | BIO | **5** | BIO.01.B1b.krzyzowki_mendel ×1, BIO.02.L017.jak_przewidywac_dziedziczenie_jednej_cechy ×1, BIO.02.L018.jak_dziedziczy_sie_plec_i ×1, BIO.02.L019.dlaczego_grupy_krwi_nie_pasuja ×1, BIO.02.L021.powtorka_genetyki ×1 |
| 13 | `rownania-jonowe-v01` | CHE model | **5** | C1c_kwasy_zasady_sole ×1, J03 ×1, N03 ×1, N04 ×1, N05 ×1 |
| 14 | `tabela-rozpuszczalnosci-v01` | CHE model | **5** | C1c_kwasy_zasady_sole ×1, J03 ×1, N03 ×1, N04 ×1, N05 ×1 |
| 15 | `bilans-rownania` | klocek | **4** | C1c_wodorki_typy_reakcji ×1, C3 ×1, LKO_ORG05_kwasy ×1, LKO_ORG06_estry ×1 |
| 16 | `doswiadczenie` | klocek | **4** | C4 ×2, C1c_kwasy_zasady_sole ×1, X04 ×1 |
| 17 | `fotosynteza-oddychanie` | BIO | **4** | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L006.fotosynteza_skad_roslina_bierze_materie ×1, BIO.01.L007.oddychanie_komorkowe_skad_komorka_bierze ×1, BIO.06.L091.atp_jak_komorka_magazynuje_energie ×1 |
| 18 | `glukoza-wykres` | BIO | **4** | BIO.02.B2e.uklad_dokrewny ×1, BIO.02.B2g.homeostaza ×1, BIO.07.H01.homeostaza ×1, BIO.07.U10.uklad_dokrewny ×1 |
| 19 | `kod-genetyczny` | BIO | **4** | BIO.02.L011.jak_dna_przechowuje_informacje ×1, BIO.02.L020.czym_sa_mutacje_i_jakie ×1, BIO.02.L021.powtorka_genetyki ×1, BIO.06.L090.extra_olimpijska ×1 |
| 20 | `kw-szereg-metali-v01` | CHE model | **4** | C1c_kwasy_zasady_sole ×1, N04 ×1, N05 ×1, X04 ×1 |
| 21 | `n01-doswiadczenia-v01` | CHE model | **4** | N02 ×4 |
| 22 | `sprzezenie-zwrotne` | BIO | **4** | BIO.02.B2e.uklad_dokrewny ×1, BIO.02.B2g.homeostaza ×1, BIO.07.H01.homeostaza ×1, BIO.07.U10.uklad_dokrewny ×1 |
| 23 | `trojkat-przeliczen` | klocek | **4** | C2m_mol_masa_molowa ×2, LKO_ORG08_mol_gazy ×2 |
| 24 | `caoH2o` | CHE gfx/reakcje | **3** | N02 ×1, N03 ×1, N05 ×1 |
| 25 | `diagram-bohra` | klocek | **3** | C1c_konfiguracje_elektronowe ×1, F04 ×1, F06 ×1 |
| 26 | `f01Odparowanie` | CHE zlewka (lite) | **3** | F01 ×1, F02 ×1, F03 ×1 |
| 27 | `f03-rozdzielanie-v01` | CHE pracownia (lite) | **3** | F03 ×3 |
| 28 | `fiz-coulomb-v01` | CHE model | **3** | FIZ01 ×3 |
| 29 | `fiz-elektroskop-v01` | CHE model | **3** | FIZ01 ×3 |
| 30 | `fiz-elektryzowanie-v01` | CHE model | **3** | FIZ01 ×3 |
| 31 | `fiz-ladunek-v01` | CHE model | **3** | FIZ01 ×3 |
| 32 | `gfx-scene-conductivity` | CHE model | **3** | FIZ01 ×1, N04 ×1, N05 ×1 |
| 33 | `mikroskop-model` | BIO | **3** | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1, BIO.01.L008.mikroskop_jak_obserwowac_komorke_a ×1 |
| 34 | `n01-spalanie-v01` | CHE model | **3** | N02 ×2, N01 ×1 |
| 35 | `periodic-54` | CHE model | **3** | F04 ×1, F06 ×1, N02 ×1 |
| 36 | `petla-regulacji` | klocek | **3** | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.02.B2e.uklad_dokrewny ×1, BIO.02.B2g.homeostaza ×1 |
| 37 | `ph-indicators-v03` | CHE model | **3** | N03 ×2, N04 ×1 |
| 38 | `transport-blona` | BIO | **3** | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1, BIO.01.L005.blona_komorkowa_i_transport_substancji ×1 |
| 39 | `chain-scn` | CHE model | **2** | N02 ×1, N05 ×1 |
| 40 | `conductivity` | CHE gfx/naczynia | **2** | N04 ×2 |
| 41 | `cuso4Hydrate` | CHE gfx/reakcje | **2** | C2w_wzor_elementarny_rzeczywisty ×1, N05 ×1 |
| 42 | `cykl-miesiaczkowy` | BIO | **2** | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| 43 | `dobor-naturalny` | BIO | **2** | BIO.03.L031.jak_dziala_dobor_naturalny_i ×1, BIO.03.L032.powtorka_ewolucji ×1 |
| 44 | `drabina` | BIO | **2** | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| 45 | `droga-pokarmu` | BIO | **2** | BIO.02.B2b.uklad_pokarmowy ×1, BIO.07.U03.uklad_pokarmowy_i_odzywianie ×1 |
| 46 | `droga-zarodka` | BIO | **2** | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| 47 | `energia-glukozy` | BIO | **2** | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L007.oddychanie_komorkowe_skad_komorka_bierze ×1 |
| 48 | `energia-materia` | BIO | **2** | BIO.04.L040.czym_jest_ekosystem_i_jakie ×1, BIO.04.L044.powtorka_ekologii ×1 |
| 49 | `f01FeS` | CHE zlewka (lite) | **2** | F01 ×1, F02 ×1 |
| 50 | `f01Mg` | CHE zlewka (lite) | **2** | F01 ×1, F17 ×1 |
| 51 | `f01SolWoda` | CHE zlewka (lite) | **2** | F01 ×1, F02 ×1 |
| 52 | `f01WodaWapienna` | CHE zlewka (lite) | **2** | F01 ×1, N01 ×1 |
| 53 | `f05-izotopy-v01` | CHE model | **2** | C1c_masy_sklad_procentowy ×1, F05 ×1 |
| 54 | `gfx-scene-acidMetal` | CHE model | **2** | N01 ×1, N04 ×1 |
| 55 | `gfx-scene-carbonate` | CHE model | **2** | N01 ×1, N02 ×1 |
| 56 | `gfx-scene-indicatorRack` | CHE model | **2** | N03 ×1, N04 ×1 |
| 57 | `gruczoly-mapa` | BIO | **2** | BIO.02.B2e.uklad_dokrewny ×1, BIO.07.U10.uklad_dokrewny ×1 |
| 58 | `helisa` | BIO | **2** | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| 59 | `kalkulator-mola` | klocek | **2** | C2m_mol_masa_molowa ×1, LKO_ORG08_mol_gazy ×1 |
| 60 | `komorka-nakladki` | BIO | **2** | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1 |
| 61 | `konczyny-homologiczne` | BIO | **2** | BIO.03.L030.czym_jest_ewolucja_i_jakie ×1, BIO.03.L032.powtorka_ewolucji ×1 |
| 62 | `kosmek-jelitowy` | BIO | **2** | BIO.02.B2b.uklad_pokarmowy ×1, BIO.07.U03.uklad_pokarmowy_i_odzywianie ×1 |
| 63 | `krazenie-obiegi` | BIO | **2** | BIO.02.B10.powtorka_uklady_czlowieka ×1, BIO.07.U04.krazenie_krew_odpornosc ×1 |
| 64 | `krzyzowka-mendla` | klocek | **2** | BIO.01.B1b.krzyzowki_mendel ×2 |
| 65 | `kw-dysocjacja-v01` | CHE model | **2** | FIZ01 ×1, N04 ×1 |
| 66 | `kw-reszty-v01` | CHE model | **2** | N04 ×1, N05 ×1 |
| 67 | `lozysko-wymiana` | BIO | **2** | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| 68 | `luk-odruchowy` | BIO | **2** | BIO.02.B2d.uklad_nerwowy_zmysly ×1, BIO.07.U08.uklad_nerwowy_i_zmysly ×1 |
| 69 | `molecule3d-merged` | CHE model | **2** | F02 ×1, N02 ×1 |
| 70 | `nefron` | BIO | **2** | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.07.U06.oddychanie_i_wydalanie ×1 |
| 71 | `nukleotyd` | BIO | **2** | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| 72 | `palniki` | klocek | **2** | F07 ×1, P01 ×1 |
| 73 | `pary-zasad` | BIO | **2** | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| 74 | `poziomy-dna` | BIO | **2** | BIO.02.L010.dna_od_zera ×1, BIO.02.L012.jak_dna_jest_upakowane_w ×1 |
| 75 | `relacje-ekologiczne` | BIO | **2** | BIO.04.L042.jakie_relacje_panuja_miedzy_organizmami ×1, BIO.04.L044.powtorka_ekologii ×1 |
| 76 | `siec-troficzna` | BIO | **2** | BIO.04.L041.jak_zapisac_lancuchy_i_sieci ×1, BIO.05.L050.powtorka_roczna ×1 |
| 77 | `skora-przekroj` | BIO | **2** | BIO.02.B2a.skora_uklad_ruchu ×1, BIO.07.U01.skora_i_uklad_ruchu ×1 |
| 78 | `staw-antagonizm` | BIO | **2** | BIO.02.B2a.skora_uklad_ruchu ×1, BIO.07.U01.skora_i_uklad_ruchu ×1 |
| 79 | `synapsa` | BIO | **2** | BIO.02.B2d.uklad_nerwowy_zmysly ×1, BIO.07.U08.uklad_nerwowy_i_zmysly ×1 |
| 80 | `trener-nici` | BIO | **2** | BIO.02.L010.dna_od_zera ×1, BIO.02.L013.jak_komorka_kopiuje_dna ×1 |
| 81 | `uklad-rozrodczy` | BIO | **2** | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| 82 | `wdech-wydech` | BIO | **2** | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.07.U06.oddychanie_i_wydalanie ×1 |
| 83 | `wymiana-gazowa` | BIO | **2** | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.07.U06.oddychanie_i_wydalanie ×1 |

## 3. Użyte jeden raz

- `acid-game` (CHE model) → C1c_kwasy_zasady_sole
- `acid-rain-v01` (CHE model) → N04
- `acidMetal` (CHE gfx/sceny) → N04
- `aloh3Naoh` (CHE gfx/reakcje) → N03
- `bacl2Na2so4` (CHE gfx/reakcje) → N05
- `beaker-prediction-enhanced` (CHE model) → F01
- `bilans-spalania` (klocek) → LKO_ORG01_alkany
- `cacl2Na2co3` (CHE gfx/reakcje) → N05
- `carbonate` (CHE gfx/sceny) → N04
- `endosymbioza` (BIO) → BIO.01.L001A.dodatek_ambitny_od_komorki_do
- `energy-profile` (CHE model) → C1c_wodorki_typy_reakcji
- `enzym-warunki` (BIO) → BIO.07.U03.uklad_pokarmowy_i_odzywianie
- `estryfikacja` (klocek) → LKO_ORG06_estry
- `etapy-zycia` (BIO) → BIO.07.U11.rozmnazanie_i_rozwoj
- `eutrofizacja` (BIO) → BIO.04.L043.jak_czlowiek_wplywa_na_srodowisko
- `f01SodaOcet` (CHE zlewka (lite)) → F01
- `f03PiasekWoda` (CHE zlewka (lite)) → F03
- `f06Br2Ki` (CHE zlewka (lite)) → F06
- `f06Cl2Kbr` (CHE zlewka (lite)) → F06
- `f17-bilans-v01` (CHE model) → F17
- `fiz-przewodniki-v01` (CHE model) → FIZ01
- `gdzie-dna` (BIO) → BIO.02.L010.dna_od_zera
- `gfx-scene-dilution` (CHE model) → N04
- `gfx-scene-titration` (CHE model) → N04
- `hardy-weinberg` (BIO) → BIO.06.L090.extra_olimpijska
- `haworth` (klocek) → LKO_ORG07_cukry
- `homeostaza` (BIO) → BIO.01.L002.powtorka_czlowiek
- `hyd-na2co3` (CHE gfx/reakcje) → N05
- `hyd-nh4cl` (CHE gfx/reakcje) → N05
- `indicator` (CHE gfx/sceny) → N04
- `ion-map-v02` (CHE model) → N05
- `ion-vs-diss` (CHE model) → J03
- `j03-osady-v01` (CHE model) → J03
- `kH2o` (CHE gfx/reakcje) → F06
- `klonowanie-genu` (BIO) → BIO.02.L022.biotechnologia_i_inzynieria_genetyczna
- `klucz-kregowce` (BIO) → BIO.00.REV02.roznorodnosc_zycia
- `konfiguracje` (klocek) → C1c_konfiguracje_elektronowe
- `kontrola-podzialow` (BIO) → BIO.02.L016.co_sie_dzieje_gdy_podzialy
- `kw-bufor-v01` (CHE model) → N04
- `kw-wlasciwosci-v01` (CHE model) → N04
- `lab-stations-v102` (CHE model) → F03
- `liH2o` (CHE gfx/reakcje) → F06
- `live-cv` (CHE model) → F01
- `mind-map` (CHE model) → F01
- `n01-konstruktor-v01` (CHE model) → N02
- `n01-reaktor-v01` (CHE model) → N02
- `n01-tlenki-v01` (CHE model) → N02
- `n01-trend-v01` (CHE model) → N02
- `n02-dysocjacja-v01` (CHE model) → N03
- `n02-otrzymywanie-v01` (CHE model) → N03
- `n02-przeglad-v01` (CHE model) → N03
- `n02-reaktor-v01` (CHE model) → N03
- `n02-stracanie-v01` (CHE model) → N03
- `n02-wzory-v01` (CHE model) → N03
- `n02-zobojetnianie-v01` (CHE model) → N03
- `n05-trendy-v01` (CHE model) → C1c_wodorki_typy_reakcji
- `n05-wodorki-v01` (CHE model) → C1c_wodorki_typy_reakcji
- `na2co3Hcl` (CHE gfx/reakcje) → N05
- `nadmiar-substratu` (klocek) → R07
- `od-organizmu-do-genu` (BIO) → BIO.02.L010.dna_od_zera
- `oko-akomodacja` (BIO) → BIO.07.U08.uklad_nerwowy_i_zmysly
- `palnik-gazowy` (klocek) → LKO_ORG01_alkany
- `pojemnosc` (BIO) → BIO.02.L010.dna_od_zera
- `proba-kontrolna` (BIO) → BIO.00.REV01.organizacja_i_chemizm_zycia
- `probowki` (klocek) → P01
- `przeobrazenie-owadow` (BIO) → BIO.00.REV02.roznorodnosc_zycia
- `przeobrazenie-plaza` (BIO) → BIO.00.REV02.roznorodnosc_zycia
- `r03-krzyz-v01` (CHE model) → R03A_mieszanie_roztworow_regula_krzyzowa
- `reakcje-kwasu-v03` (CHE model) → N04
- `rozbior-zdania` (POL) → POL.02.G12.czesci_zdania
- `schemat-przemian` (klocek) → C1c_kwasy_zasady_sole
- `sekwencje` (BIO) → BIO.02.L010.dna_od_zera
- `sklad-procentowy` (klocek) → C1c_masy_sklad_procentowy
- `szuflady-cech` (BIO) → BIO.02.L010.dna_od_zera
- `titration-merged` (CHE model) → N04
- `transfuzja` (BIO) → BIO.07.U04.krazenie_krew_odpornosc
- `ucho-droga` (BIO) → BIO.07.U08.uklad_nerwowy_i_zmysly
- `uklad-okresowy` (klocek) → P01
- `wirus-bakteria` (BIO) → BIO.00.REV02.roznorodnosc_zycia
- `wykres-zdania` (POL) → POL.02.G12.czesci_zdania
- `wykres-zlozonego` (POL) → POL.02.G15.zdania_wspolrzedne
- `zbieranie-gazu` (klocek) → LKO_ORG08_mol_gazy
- `zrodla-zmiennosci` (BIO) → BIO.02.L016A.zmiennosc_dlaczego_potomstwo_nie_jest

## 4. Nieużywane (0 użyć) — do osadzenia albo do usunięcia z bazy

- `acid-calculator` (CHE model: Kalkulator kwasu — pH, dysocjacja, formy · wspólny silnik)
- `acid-table` (CHE model: Tabela mocy kwasów)
- `agno3Naoh` (CHE gfx/reakcje: chemia)
- `al2o3Hcl` (CHE gfx/reakcje: chemia)
- `al2o3NaohAq` (CHE gfx/reakcje: chemia)
- `alcl3Naoh` (CHE gfx/reakcje: chemia)
- `anchor` (CHE gfx/naczynia: wspolne)
- `balance` (CHE gfx/naczynia: chemia)
- `baoH2o` (CHE gfx/reakcje: chemia)
- `baoh2Co2` (CHE gfx/reakcje: chemia)
- `baoh2H2so4` (CHE gfx/reakcje: chemia)
- `beaker` (CHE gfx/naczynia: chemia)
- `bubbles` (CHE gfx/efekty: chemia)
- `burette` (CHE gfx/naczynia: chemia)
- `burner` (CHE gfx/naczynia: chemia)
- `caH2o` (CHE gfx/reakcje: chemia)
- `cacl2Naoh` (CHE gfx/reakcje: chemia)
- `cah2H2o` (CHE zlewka (lite): lab-dane.json)
- `caoHcl` (CHE gfx/reakcje: chemia)
- `caoh2Hcl` (CHE gfx/reakcje: chemia)
- `caoh2Na2co3` (CHE gfx/reakcje: chemia)
- `carboxyl` (CHE model: Grupa karboksylowa — który H jest kwaśny)
- `chargeBar` (CHE gfx/naczynia: fizyka)
- `chargedRod` (CHE gfx/naczynia: fizyka)
- `che-spojnosc-v01` (CHE model: Spójność danych: silnik ↔ Atlas ↔ lekcje ↔ GFX)
- `che-test-silnika-v01` (CHE model: Test silnika — audyty modułów, spójność i montowanie wszystkich widoków)
- `chem-profile10` (CHE model: Profil chemiczny — pierwiastek → substancja → reakcje)
- `co2H2o` (CHE gfx/reakcje: chemia)
- `compound-cards` (CHE model: Karty związków — HCl, H₂SO₄, CH₃COOH, H₂CO₃)
- `condensation` (CHE gfx/efekty: chemia)
- `conj-pairs` (CHE model: Pary sprzężone i amfiprotyczność)
- `cooler` (CHE gfx/naczynia: chemia)
- `crucible` (CHE gfx/naczynia: chemia)
- `cucl2Naoh` (CHE gfx/reakcje: chemia)
- `cuoh2H2so4` (CHE gfx/reakcje: chemia)
- `cuoh2Hcl` (CHE gfx/reakcje: chemia)
- `cuoh2Heat` (CHE gfx/reakcje: chemia)
- `cylinder` (CHE gfx/naczynia: chemia)
- `dilution` (CHE gfx/sceny: chemia)
- `discharge` (CHE gfx/efekty: fizyka)
- `diss-three-levels` (CHE model: Trzy poziomy zapisu dysocjacji)
- `dropFunnel` (CHE gfx/naczynia: chemia)
- `dropMix` (CHE gfx/efekty: chemia)
- `dropper` (CHE gfx/naczynia: chemia)
- `electroscope` (CHE gfx/naczynia: fizyka)
- `env-balance` (CHE model: Bilans mas — wapnowanie jeziora · wspólny model)
- `equilibrium` (CHE model: Równowaga HA ⇌ H⁺ + A⁻ — reguła przekory)
- `evapDish` (CHE gfx/naczynia: chemia)
- `explosion` (CHE gfx/efekty: chemia)
- `f03KredaWoda` (CHE zlewka (lite): lab-dane.json)
- `f06Cl2Ki` (CHE zlewka (lite): lab-dane.json)
- `f06I2Kbr` (CHE zlewka (lite): lab-dane.json)
- `f09-trzy-liczby-v01` (CHE model: Ładunek, wartościowość, stopień utlenienia — ta sama drobina, trzy pytania)
- `f10-energia-h2-v01` (CHE model: Energia dwóch atomów wodoru — skąd się bierze wiązanie)
- `f15-dipol-v01` (CHE model: Wektory dipola — polarność wiązań a polarność cząsteczki)
- `fe2o3H2so4` (CHE gfx/reakcje: chemia)
- `fe2o3Hcl` (CHE gfx/reakcje: chemia)
- `feoh2O2` (CHE gfx/reakcje: chemia)
- `feoh3Hcl` (CHE gfx/reakcje: chemia)
- `fesHcl` (CHE zlewka (lite): lab-dane.json)
- `feso4Naoh` (CHE gfx/reakcje: chemia)
- `fieldMap` (CHE gfx/naczynia: fizyka)
- `fiz02-obwod-v01` (CHE model: Obwód z dwiema żarówkami — szeregowo i równolegle)
- `flame` (CHE gfx/efekty: chemia)
- `flash` (CHE gfx/efekty: chemia)
- `flashcards-deck` (CHE model: Fiszki + ściąga — powtórka)
- `flask` (CHE gfx/naczynia: chemia)
- `flow-egzamin-enhanced` (CHE model: Algorytm egzaminacyjny — interaktywny schemat · v0.06 · 2026-10-01)
- `flow-naming` (CHE model: Jak nazwać kwas — algorytm)
- `foam` (CHE gfx/efekty: chemia)
- `fumes` (CHE gfx/efekty: chemia)
- `funnel` (CHE gfx/naczynia: chemia)
- `gasCollect` (CHE gfx/naczynia: chemia)
- `gasCollection` (CHE gfx/sceny: chemia)
- `gfx-scene-gasCollection` (CHE model: Zbieranie gazu nad wodą)
- `gfx-scene-heating` (CHE model: Ogrzewanie cieczy na trójnogu (palnik Bunsena))
- `gfx-scene-indicator` (CHE model: Wskaźnik kwasowo-zasadowy w roztworze)
- `gfx-scene-metanSpalanie` (CHE model: Spalanie metanu — zlewka odwrócona (H₂O) i woda wapienna (CO₂))
- `h2sCuso4` (CHE zlewka (lite): lab-dane.json)
- `h2sH2oUni` (CHE zlewka (lite): lab-dane.json)
- `h2sPbac` (CHE zlewka (lite): lab-dane.json)
- `hclH2oOranz` (CHE zlewka (lite): lab-dane.json)
- `heatConvection` (CHE gfx/efekty: chemia)
- `heatGlow` (CHE gfx/efekty: chemia)
- `heating` (CHE gfx/sceny: chemia)
- `hf-paradox` (CHE model: Paradoks HF — dlaczego słaby)
- `hotplate` (CHE gfx/naczynia: chemia)
- `hyd-cuso4` (CHE gfx/reakcje: chemia)
- `hyd-nacl` (CHE gfx/reakcje: chemia)
- `id` (POL: pol-viz.js)
- `indicatorRack` (CHE gfx/sceny: chemia)
- `k2oH2o` (CHE gfx/reakcje: chemia)
- `ka-pka-table` (CHE model: Ka, pKa, moc — tabela)
- `kinetics-v01` (CHE model: Szybkość reakcji: metal + kwas solny (pomiar objętości H₂))
- `kohHcl` (CHE gfx/reakcje: chemia)
- `kohHno3` (CHE gfx/reakcje: chemia)
- `krzywe-rozpuszczalnosci` (klocek: krzywe_rozpuszczalnosci.js)
- `lab-beaker-v102` (CHE model: CHE.LAB — uniwersalna zlewka (pełny panel) · v1.02)
- `lab-library-v001` (CHE model: Biblioteka elementów laboratorium · v1.0)
- `label` (CHE gfx/efekty: wspolne)
- `lancuch-przemian` (klocek: lancuch_przemian.js)
- `li2oH2o` (CHE gfx/reakcje: chemia)
- `liquid` (CHE gfx/efekty: chemia)
- `meniscus` (CHE gfx/efekty: chemia)
- `metal-woda` (klocek: metal_woda.js)
- `metalBurn` (CHE gfx/efekty: chemia)
- `metanSpalanie` (CHE gfx/sceny: chemia)
- `mgH2oHot` (CHE gfx/reakcje: chemia)
- `mgcl2Naoh` (CHE gfx/reakcje: chemia)
- `mgoH2o` (CHE gfx/reakcje: chemia)
- `mgoHcl` (CHE gfx/reakcje: chemia)
- `mnso4Naoh` (CHE gfx/reakcje: chemia)
- `molTank` (CHE gfx/naczynia: chemia)
- `molecule-2d` (CHE model: Cząsteczka 2D — wiązania, kąty i wolne pary)
- `molecule-cv` (CHE model: CV cząsteczki — wspólny model CHE.MOLECULE)
- `molecule-electrons` (CHE model: Elektrony i podpowłoki — wspólny model CHE.MOLECULE)
- `molecule-orbitals` (CHE model: Orbitalne pudełka — obsada elektronowa)
- `molekula-2d` (klocek: molekula_2d.js)
- `n05-doswiadczenia-v01` (CHE model: Pracownia: doświadczenia z wodorkami)
- `na2oH2o` (CHE gfx/reakcje: chemia)
- `naclH2so4` (CHE zlewka (lite): lab-dane.json)
- `nahH2o` (CHE zlewka (lite): lab-dane.json)
- `naming-table` (CHE model: Wzór → nazwa → reszta → sól → moc)
- `naohCo2` (CHE gfx/reakcje: chemia)
- `naohHno3` (CHE gfx/reakcje: chemia)
- `neutralization` (CHE model: Równania jonowe — cząsteczkowe, jonowe pełne, jonowe skrócone)
- `nh3H2oPhp` (CHE zlewka (lite): lab-dane.json)
- `nh3Hcl` (CHE zlewka (lite): lab-dane.json)
- `nh4clCaoh2` (CHE zlewka (lite): lab-dane.json)
- `nh4clNaoh` (CHE gfx/reakcje: chemia)
- `niso4Naoh` (CHE gfx/reakcje: chemia)
- `obtaining-hcl-steps` (CHE model: Otrzymywanie kwasu solnego — etapy)
- `obtaining-three` (CHE model: Trzy drogi otrzymywania kwasów)
- `p4o10H2o` (CHE gfx/reakcje: chemia)
- `pHmeter` (CHE gfx/naczynia: chemia)
- `pHscale` (CHE gfx/naczynia: chemia)
- `palenie` (klocek: palenie.js)
- `paper` (CHE gfx/naczynia: fizyka)
- `pbno32Naoh` (CHE gfx/reakcje: chemia)
- `pendulum` (CHE gfx/naczynia: fizyka)
- `petri` (CHE gfx/naczynia: chemia)
- `ph-ladder` (CHE model: Obliczanie pH — od stężenia do pH)
- `pipette` (CHE gfx/naczynia: chemia)
- `plomien` (klocek: plomien.js)
- `plume` (CHE gfx/efekty: chemia)
- `pop` (CHE gfx/efekty: chemia)
- `precipitate` (CHE gfx/efekty: chemia)
- `probowki-wybor` (klocek: probowki_wybor.js)
- `reaction` (CHE model: Reakcja)
- `ringMark` (CHE gfx/efekty: chemia)
- `ripples` (CHE gfx/efekty: chemia)
- `roundFlask` (CHE gfx/naczynia: chemia)
- `safety` (CHE model: Bezpieczeństwo — pierwsza pomoc i zasady)
- `scale` (CHE gfx/efekty: wspolne)
- `schlieren` (CHE gfx/efekty: chemia)
- `sio2Naoh` (CHE gfx/reakcje: chemia)
- `so2H2o` (CHE gfx/reakcje: chemia)
- `so2Naoh` (CHE gfx/reakcje: chemia)
- `so3H2o` (CHE gfx/reakcje: chemia)
- `so3Naoh` (CHE gfx/reakcje: chemia)
- `solids` (CHE gfx/efekty: chemia)
- `sparks` (CHE gfx/efekty: wspolne)
- `species-v01` (CHE model: Formy kwasu a pH — diagram rozkładu · v0.01)
- `spiritLamp` (CHE gfx/naczynia: chemia)
- `splash` (CHE gfx/efekty: chemia)
- `splint` (CHE gfx/efekty: chemia)
- `stage` (CHE gfx/naczynia: wspolne)
- `stand` (CHE gfx/naczynia: chemia)
- `steam` (CHE gfx/efekty: chemia)
- `stirBar` (CHE gfx/efekty: chemia)
- `stopper` (CHE gfx/efekty: wspolne)
- `substance` (CHE model: Substancja)
- `tap` (CHE gfx/efekty: wspolne)
- `testTube` (CHE gfx/naczynia: chemia)
- `thermometer` (CHE gfx/naczynia: chemia)
- `timeline` (CHE model: Historia pojęcia kwasu — 5 scen)
- `titration` (CHE gfx/sceny: chemia)
- `tripod` (CHE gfx/naczynia: chemia)
- `tubeRack` (CHE gfx/naczynia: chemia)
- `turbidity` (CHE gfx/efekty: chemia)
- `volFlask` (CHE gfx/naczynia: chemia)
- `watchGlass` (CHE gfx/naczynia: chemia)
- `zlewka` (klocek: zlewka.js)
- `zlewkaOdwrocona` (CHE gfx/naczynia: chemia)
- `znoHcl` (CHE gfx/reakcje: chemia)
- `znoNaohAq` (CHE gfx/reakcje: chemia)
- `znoh2Hcl` (CHE gfx/reakcje: chemia)
- `znoh2Naoh` (CHE gfx/reakcje: chemia)
- `znso4Naoh` (CHE gfx/reakcje: chemia)

## 5. Pełna tabela — wszystkie wizualizacje

| Identyfikator | Biblioteka | Użycia | Lekcje |
|---|---|---|---|
| `acid-calculator` | CHE model | 0 | — |
| `acid-game` | CHE model | 1 | C1c_kwasy_zasady_sole ×1 |
| `acid-rain-v01` | CHE model | 1 | N04 ×1 |
| `acid-table` | CHE model | 0 | — |
| `acidMetal` | CHE gfx/sceny | 1 | N04 ×1 |
| `agno3Naoh` | CHE gfx/reakcje | 0 | — |
| `al2o3Hcl` | CHE gfx/reakcje | 0 | — |
| `al2o3NaohAq` | CHE gfx/reakcje | 0 | — |
| `alcl3Naoh` | CHE gfx/reakcje | 0 | — |
| `aloh3Naoh` | CHE gfx/reakcje | 1 | N03 ×1 |
| `anchor` | CHE gfx/naczynia | 0 | — |
| `bacl2Na2so4` | CHE gfx/reakcje | 1 | N05 ×1 |
| `balance` | CHE gfx/naczynia | 0 | — |
| `baoH2o` | CHE gfx/reakcje | 0 | — |
| `baoh2Co2` | CHE gfx/reakcje | 0 | — |
| `baoh2H2so4` | CHE gfx/reakcje | 0 | — |
| `beaker` | CHE gfx/naczynia | 0 | — |
| `beaker-prediction-enhanced` | CHE model | 1 | F01 ×1 |
| `bilans-rownania` | klocek | 4 | C1c_wodorki_typy_reakcji ×1, C3 ×1, LKO_ORG05_kwasy ×1, LKO_ORG06_estry ×1 |
| `bilans-spalania` | klocek | 1 | LKO_ORG01_alkany ×1 |
| `bubbles` | CHE gfx/efekty | 0 | — |
| `burette` | CHE gfx/naczynia | 0 | — |
| `burner` | CHE gfx/naczynia | 0 | — |
| `caH2o` | CHE gfx/reakcje | 0 | — |
| `cacl2Na2co3` | CHE gfx/reakcje | 1 | N05 ×1 |
| `cacl2Naoh` | CHE gfx/reakcje | 0 | — |
| `cah2H2o` | CHE zlewka (lite) | 0 | — |
| `caoH2o` | CHE gfx/reakcje | 3 | N02 ×1, N03 ×1, N05 ×1 |
| `caoHcl` | CHE gfx/reakcje | 0 | — |
| `caoh2Hcl` | CHE gfx/reakcje | 0 | — |
| `caoh2Na2co3` | CHE gfx/reakcje | 0 | — |
| `carbonate` | CHE gfx/sceny | 1 | N04 ×1 |
| `carboxyl` | CHE model | 0 | — |
| `chain-scn` | CHE model | 2 | N02 ×1, N05 ×1 |
| `chargeBar` | CHE gfx/naczynia | 0 | — |
| `chargedRod` | CHE gfx/naczynia | 0 | — |
| `che-spojnosc-v01` | CHE model | 0 | — |
| `che-test-silnika-v01` | CHE model | 0 | — |
| `chem-profile10` | CHE model | 0 | — |
| `co2H2o` | CHE gfx/reakcje | 0 | — |
| `compound-cards` | CHE model | 0 | — |
| `condensation` | CHE gfx/efekty | 0 | — |
| `conductivity` | CHE gfx/naczynia | 2 | N04 ×2 |
| `conj-pairs` | CHE model | 0 | — |
| `cooler` | CHE gfx/naczynia | 0 | — |
| `crucible` | CHE gfx/naczynia | 0 | — |
| `cucl2Naoh` | CHE gfx/reakcje | 0 | — |
| `cuoh2H2so4` | CHE gfx/reakcje | 0 | — |
| `cuoh2Hcl` | CHE gfx/reakcje | 0 | — |
| `cuoh2Heat` | CHE gfx/reakcje | 0 | — |
| `cuso4Hydrate` | CHE gfx/reakcje | 2 | C2w_wzor_elementarny_rzeczywisty ×1, N05 ×1 |
| `cykl-miesiaczkowy` | BIO | 2 | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| `cylinder` | CHE gfx/naczynia | 0 | — |
| `diagram-bohra` | klocek | 3 | C1c_konfiguracje_elektronowe ×1, F04 ×1, F06 ×1 |
| `dilution` | CHE gfx/sceny | 0 | — |
| `discharge` | CHE gfx/efekty | 0 | — |
| `diss-three-levels` | CHE model | 0 | — |
| `dobor-naturalny` | BIO | 2 | BIO.03.L031.jak_dziala_dobor_naturalny_i ×1, BIO.03.L032.powtorka_ewolucji ×1 |
| `doswiadczenie` | klocek | 4 | C1c_kwasy_zasady_sole ×1, C4 ×2, X04 ×1 |
| `drabina` | BIO | 2 | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| `droga-pokarmu` | BIO | 2 | BIO.02.B2b.uklad_pokarmowy ×1, BIO.07.U03.uklad_pokarmowy_i_odzywianie ×1 |
| `droga-zarodka` | BIO | 2 | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| `dropFunnel` | CHE gfx/naczynia | 0 | — |
| `dropMix` | CHE gfx/efekty | 0 | — |
| `dropper` | CHE gfx/naczynia | 0 | — |
| `electroscope` | CHE gfx/naczynia | 0 | — |
| `endosymbioza` | BIO | 1 | BIO.01.L001A.dodatek_ambitny_od_komorki_do ×1 |
| `energia-glukozy` | BIO | 2 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L007.oddychanie_komorkowe_skad_komorka_bierze ×1 |
| `energia-materia` | BIO | 2 | BIO.04.L040.czym_jest_ekosystem_i_jakie ×1, BIO.04.L044.powtorka_ekologii ×1 |
| `energy-profile` | CHE model | 1 | C1c_wodorki_typy_reakcji ×1 |
| `env-balance` | CHE model | 0 | — |
| `enzym-warunki` | BIO | 1 | BIO.07.U03.uklad_pokarmowy_i_odzywianie ×1 |
| `equilibrium` | CHE model | 0 | — |
| `estryfikacja` | klocek | 1 | LKO_ORG06_estry ×1 |
| `etapy-zycia` | BIO | 1 | BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| `eutrofizacja` | BIO | 1 | BIO.04.L043.jak_czlowiek_wplywa_na_srodowisko ×1 |
| `evapDish` | CHE gfx/naczynia | 0 | — |
| `explosion` | CHE gfx/efekty | 0 | — |
| `f01-doswiadczenia-v01` | CHE pracownia (lite) | 12 | F01 ×7, F02 ×3, F17 ×1, N01 ×1 |
| `f01FeS` | CHE zlewka (lite) | 2 | F01 ×1, F02 ×1 |
| `f01Mg` | CHE zlewka (lite) | 2 | F01 ×1, F17 ×1 |
| `f01Odparowanie` | CHE zlewka (lite) | 3 | F01 ×1, F02 ×1, F03 ×1 |
| `f01SodaOcet` | CHE zlewka (lite) | 1 | F01 ×1 |
| `f01SolWoda` | CHE zlewka (lite) | 2 | F01 ×1, F02 ×1 |
| `f01WodaWapienna` | CHE zlewka (lite) | 2 | F01 ×1, N01 ×1 |
| `f03-rozdzielanie-v01` | CHE pracownia (lite) | 3 | F03 ×3 |
| `f03KredaWoda` | CHE zlewka (lite) | 0 | — |
| `f03PiasekWoda` | CHE zlewka (lite) | 1 | F03 ×1 |
| `f05-izotopy-v01` | CHE model | 2 | C1c_masy_sklad_procentowy ×1, F05 ×1 |
| `f06-doswiadczenia-v01` | CHE pracownia (lite) | 5 | F06 ×5 |
| `f06Br2Ki` | CHE zlewka (lite) | 1 | F06 ×1 |
| `f06Cl2Kbr` | CHE zlewka (lite) | 1 | F06 ×1 |
| `f06Cl2Ki` | CHE zlewka (lite) | 0 | — |
| `f06I2Kbr` | CHE zlewka (lite) | 0 | — |
| `f09-trzy-liczby-v01` | CHE model | 0 | — |
| `f10-energia-h2-v01` | CHE model | 0 | — |
| `f15-dipol-v01` | CHE model | 0 | — |
| `f17-bilans-v01` | CHE model | 1 | F17 ×1 |
| `fe2o3H2so4` | CHE gfx/reakcje | 0 | — |
| `fe2o3Hcl` | CHE gfx/reakcje | 0 | — |
| `feoh2O2` | CHE gfx/reakcje | 0 | — |
| `feoh3Hcl` | CHE gfx/reakcje | 0 | — |
| `fesHcl` | CHE zlewka (lite) | 0 | — |
| `feso4Naoh` | CHE gfx/reakcje | 0 | — |
| `fieldMap` | CHE gfx/naczynia | 0 | — |
| `fiz-coulomb-v01` | CHE model | 3 | FIZ01 ×3 |
| `fiz-elektroskop-v01` | CHE model | 3 | FIZ01 ×3 |
| `fiz-elektryzowanie-v01` | CHE model | 3 | FIZ01 ×3 |
| `fiz-ladunek-v01` | CHE model | 3 | FIZ01 ×3 |
| `fiz-przewodniki-v01` | CHE model | 1 | FIZ01 ×1 |
| `fiz02-obwod-v01` | CHE model | 0 | — |
| `flame` | CHE gfx/efekty | 0 | — |
| `flash` | CHE gfx/efekty | 0 | — |
| `flashcards-deck` | CHE model | 0 | — |
| `flask` | CHE gfx/naczynia | 0 | — |
| `flow-egzamin-enhanced` | CHE model | 0 | — |
| `flow-naming` | CHE model | 0 | — |
| `foam` | CHE gfx/efekty | 0 | — |
| `fotosynteza-oddychanie` | BIO | 4 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L006.fotosynteza_skad_roslina_bierze_materie ×1, BIO.01.L007.oddychanie_komorkowe_skad_komorka_bierze ×1, BIO.06.L091.atp_jak_komorka_magazynuje_energie ×1 |
| `fumes` | CHE gfx/efekty | 0 | — |
| `funnel` | CHE gfx/naczynia | 0 | — |
| `gasCollect` | CHE gfx/naczynia | 0 | — |
| `gasCollection` | CHE gfx/sceny | 0 | — |
| `gdzie-dna` | BIO | 1 | BIO.02.L010.dna_od_zera ×1 |
| `gfx-scene-acidMetal` | CHE model | 2 | N01 ×1, N04 ×1 |
| `gfx-scene-carbonate` | CHE model | 2 | N01 ×1, N02 ×1 |
| `gfx-scene-conductivity` | CHE model | 3 | FIZ01 ×1, N04 ×1, N05 ×1 |
| `gfx-scene-dilution` | CHE model | 1 | N04 ×1 |
| `gfx-scene-gasCollection` | CHE model | 0 | — |
| `gfx-scene-heating` | CHE model | 0 | — |
| `gfx-scene-indicator` | CHE model | 0 | — |
| `gfx-scene-indicatorRack` | CHE model | 2 | N03 ×1, N04 ×1 |
| `gfx-scene-metanSpalanie` | CHE model | 0 | — |
| `gfx-scene-titration` | CHE model | 1 | N04 ×1 |
| `glukoza-wykres` | BIO | 4 | BIO.02.B2e.uklad_dokrewny ×1, BIO.02.B2g.homeostaza ×1, BIO.07.H01.homeostaza ×1, BIO.07.U10.uklad_dokrewny ×1 |
| `gruczoly-mapa` | BIO | 2 | BIO.02.B2e.uklad_dokrewny ×1, BIO.07.U10.uklad_dokrewny ×1 |
| `h2sCuso4` | CHE zlewka (lite) | 0 | — |
| `h2sH2oUni` | CHE zlewka (lite) | 0 | — |
| `h2sPbac` | CHE zlewka (lite) | 0 | — |
| `hardy-weinberg` | BIO | 1 | BIO.06.L090.extra_olimpijska ×1 |
| `haworth` | klocek | 1 | LKO_ORG07_cukry ×1 |
| `hclH2oOranz` | CHE zlewka (lite) | 0 | — |
| `heatConvection` | CHE gfx/efekty | 0 | — |
| `heatGlow` | CHE gfx/efekty | 0 | — |
| `heating` | CHE gfx/sceny | 0 | — |
| `helisa` | BIO | 2 | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| `hf-paradox` | CHE model | 0 | — |
| `homeostaza` | BIO | 1 | BIO.01.L002.powtorka_czlowiek ×1 |
| `hotplate` | CHE gfx/naczynia | 0 | — |
| `hyd-cuso4` | CHE gfx/reakcje | 0 | — |
| `hyd-na2co3` | CHE gfx/reakcje | 1 | N05 ×1 |
| `hyd-nacl` | CHE gfx/reakcje | 0 | — |
| `hyd-nh4cl` | CHE gfx/reakcje | 1 | N05 ×1 |
| `id` | POL | 0 | — |
| `indicator` | CHE gfx/sceny | 1 | N04 ×1 |
| `indicatorRack` | CHE gfx/sceny | 0 | — |
| `ion-map-v02` | CHE model | 1 | N05 ×1 |
| `ion-vs-diss` | CHE model | 1 | J03 ×1 |
| `j03-osady-v01` | CHE model | 1 | J03 ×1 |
| `k2oH2o` | CHE gfx/reakcje | 0 | — |
| `kH2o` | CHE gfx/reakcje | 1 | F06 ×1 |
| `ka-pka-table` | CHE model | 0 | — |
| `kalkulator-mola` | klocek | 2 | C2m_mol_masa_molowa ×1, LKO_ORG08_mol_gazy ×1 |
| `karta-bhp` | klocek | 16 | C1c_kwasy_zasady_sole ×1, C2w_wzor_elementarny_rzeczywisty ×1, C4 ×1, F01 ×1, F02 ×1, F03 ×1, F06 ×1, LKO_ORG01_alkany ×1, LKO_ORG02_alkeny ×1, LKO_ORG03_alkohole ×1, LKO_ORG04_glicerol ×1, LKO_ORG05_kwasy ×1, LKO_ORG06_estry ×1, LKO_ORG07_cukry ×1, LKO_ORG08_mol_gazy ×1, X04 ×1 |
| `kinetics-v01` | CHE model | 0 | — |
| `klonowanie-genu` | BIO | 1 | BIO.02.L022.biotechnologia_i_inzynieria_genetyczna ×1 |
| `klucz-kregowce` | BIO | 1 | BIO.00.REV02.roznorodnosc_zycia ×1 |
| `kod-genetyczny` | BIO | 4 | BIO.02.L011.jak_dna_przechowuje_informacje ×1, BIO.02.L020.czym_sa_mutacje_i_jakie ×1, BIO.02.L021.powtorka_genetyki ×1, BIO.06.L090.extra_olimpijska ×1 |
| `kohHcl` | CHE gfx/reakcje | 0 | — |
| `kohHno3` | CHE gfx/reakcje | 0 | — |
| `komorka-nakladki` | BIO | 2 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1 |
| `konczyny-homologiczne` | BIO | 2 | BIO.03.L030.czym_jest_ewolucja_i_jakie ×1, BIO.03.L032.powtorka_ewolucji ×1 |
| `konfiguracje` | klocek | 1 | C1c_konfiguracje_elektronowe ×1 |
| `kontrola-podzialow` | BIO | 1 | BIO.02.L016.co_sie_dzieje_gdy_podzialy ×1 |
| `kosmek-jelitowy` | BIO | 2 | BIO.02.B2b.uklad_pokarmowy ×1, BIO.07.U03.uklad_pokarmowy_i_odzywianie ×1 |
| `krazenie-obiegi` | BIO | 2 | BIO.02.B10.powtorka_uklady_czlowieka ×1, BIO.07.U04.krazenie_krew_odpornosc ×1 |
| `krzywe-rozpuszczalnosci` | klocek | 0 | — |
| `krzyzowka-mendla` | klocek | 2 | BIO.01.B1b.krzyzowki_mendel ×2 |
| `kw-bufor-v01` | CHE model | 1 | N04 ×1 |
| `kw-doswiadczenia-v01` | CHE model | 11 | N04 ×11 |
| `kw-dysocjacja-v01` | CHE model | 2 | FIZ01 ×1, N04 ×1 |
| `kw-reszty-v01` | CHE model | 2 | N04 ×1, N05 ×1 |
| `kw-szereg-metali-v01` | CHE model | 4 | C1c_kwasy_zasady_sole ×1, N04 ×1, N05 ×1, X04 ×1 |
| `kw-wlasciwosci-v01` | CHE model | 1 | N04 ×1 |
| `lab-beaker-v102` | CHE model | 0 | — |
| `lab-library-v001` | CHE model | 0 | — |
| `lab-stations-v102` | CHE model | 1 | F03 ×1 |
| `label` | CHE gfx/efekty | 0 | — |
| `lancuch` | BIO | 6 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1, BIO.01.L004.organizacja_budowy_organizmu_od_komorki ×2, BIO.02.L010.dna_od_zera ×1, BIO.02.L015.mejoza ×1 |
| `lancuch-przemian` | klocek | 0 | — |
| `li2oH2o` | CHE gfx/reakcje | 0 | — |
| `liH2o` | CHE gfx/reakcje | 1 | F06 ×1 |
| `liquid` | CHE gfx/efekty | 0 | — |
| `live-cv` | CHE model | 1 | F01 ×1 |
| `lozysko-wymiana` | BIO | 2 | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| `luk-odruchowy` | BIO | 2 | BIO.02.B2d.uklad_nerwowy_zmysly ×1, BIO.07.U08.uklad_nerwowy_i_zmysly ×1 |
| `meniscus` | CHE gfx/efekty | 0 | — |
| `metal-woda` | klocek | 0 | — |
| `metalBurn` | CHE gfx/efekty | 0 | — |
| `metanSpalanie` | CHE gfx/sceny | 0 | — |
| `mgH2oHot` | CHE gfx/reakcje | 0 | — |
| `mgcl2Naoh` | CHE gfx/reakcje | 0 | — |
| `mgoH2o` | CHE gfx/reakcje | 0 | — |
| `mgoHcl` | CHE gfx/reakcje | 0 | — |
| `mikroskop-model` | BIO | 3 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1, BIO.01.L008.mikroskop_jak_obserwowac_komorke_a ×1 |
| `mind-map` | CHE model | 1 | F01 ×1 |
| `mnso4Naoh` | CHE gfx/reakcje | 0 | — |
| `molTank` | CHE gfx/naczynia | 0 | — |
| `molecule-2d` | CHE model | 0 | — |
| `molecule-cv` | CHE model | 0 | — |
| `molecule-electrons` | CHE model | 0 | — |
| `molecule-orbitals` | CHE model | 0 | — |
| `molecule3d-merged` | CHE model | 2 | F02 ×1, N02 ×1 |
| `molekula-2d` | klocek | 0 | — |
| `n01-doswiadczenia-v01` | CHE model | 4 | N02 ×4 |
| `n01-konstruktor-v01` | CHE model | 1 | N02 ×1 |
| `n01-reaktor-v01` | CHE model | 1 | N02 ×1 |
| `n01-spalanie-v01` | CHE model | 3 | N01 ×1, N02 ×2 |
| `n01-tlenki-v01` | CHE model | 1 | N02 ×1 |
| `n01-trend-v01` | CHE model | 1 | N02 ×1 |
| `n02-doswiadczenia-v01` | CHE model | 8 | N03 ×8 |
| `n02-dysocjacja-v01` | CHE model | 1 | N03 ×1 |
| `n02-otrzymywanie-v01` | CHE model | 1 | N03 ×1 |
| `n02-przeglad-v01` | CHE model | 1 | N03 ×1 |
| `n02-reaktor-v01` | CHE model | 1 | N03 ×1 |
| `n02-stracanie-v01` | CHE model | 1 | N03 ×1 |
| `n02-wzory-v01` | CHE model | 1 | N03 ×1 |
| `n02-zobojetnianie-v01` | CHE model | 1 | N03 ×1 |
| `n05-doswiadczenia-v01` | CHE model | 0 | — |
| `n05-trendy-v01` | CHE model | 1 | C1c_wodorki_typy_reakcji ×1 |
| `n05-wodorki-v01` | CHE model | 1 | C1c_wodorki_typy_reakcji ×1 |
| `na2co3Hcl` | CHE gfx/reakcje | 1 | N05 ×1 |
| `na2oH2o` | CHE gfx/reakcje | 0 | — |
| `naclH2so4` | CHE zlewka (lite) | 0 | — |
| `nadmiar-substratu` | klocek | 1 | R07 ×1 |
| `nahH2o` | CHE zlewka (lite) | 0 | — |
| `naming-table` | CHE model | 0 | — |
| `naohCo2` | CHE gfx/reakcje | 0 | — |
| `naohHno3` | CHE gfx/reakcje | 0 | — |
| `nefron` | BIO | 2 | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.07.U06.oddychanie_i_wydalanie ×1 |
| `neutralization` | CHE model | 0 | — |
| `nh3H2oPhp` | CHE zlewka (lite) | 0 | — |
| `nh3Hcl` | CHE zlewka (lite) | 0 | — |
| `nh4clCaoh2` | CHE zlewka (lite) | 0 | — |
| `nh4clNaoh` | CHE gfx/reakcje | 0 | — |
| `niso4Naoh` | CHE gfx/reakcje | 0 | — |
| `nukleotyd` | BIO | 2 | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| `obtaining-hcl-steps` | CHE model | 0 | — |
| `obtaining-three` | CHE model | 0 | — |
| `od-organizmu-do-genu` | BIO | 1 | BIO.02.L010.dna_od_zera ×1 |
| `oko-akomodacja` | BIO | 1 | BIO.07.U08.uklad_nerwowy_i_zmysly ×1 |
| `p4o10H2o` | CHE gfx/reakcje | 0 | — |
| `pHmeter` | CHE gfx/naczynia | 0 | — |
| `pHscale` | CHE gfx/naczynia | 0 | — |
| `palenie` | klocek | 0 | — |
| `palnik-gazowy` | klocek | 1 | LKO_ORG01_alkany ×1 |
| `palniki` | klocek | 2 | F07 ×1, P01 ×1 |
| `paper` | CHE gfx/naczynia | 0 | — |
| `pary-zasad` | BIO | 2 | BIO.02.L010.dna_od_zera ×1, BIO.02.L011.jak_dna_przechowuje_informacje ×1 |
| `pbno32Naoh` | CHE gfx/reakcje | 0 | — |
| `pendulum` | CHE gfx/naczynia | 0 | — |
| `periodic-54` | CHE model | 3 | F04 ×1, F06 ×1, N02 ×1 |
| `petla-regulacji` | klocek | 3 | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.02.B2e.uklad_dokrewny ×1, BIO.02.B2g.homeostaza ×1 |
| `petri` | CHE gfx/naczynia | 0 | — |
| `ph-indicators-v03` | CHE model | 3 | N03 ×2, N04 ×1 |
| `ph-ladder` | CHE model | 0 | — |
| `pipette` | CHE gfx/naczynia | 0 | — |
| `plomien` | klocek | 0 | — |
| `plume` | CHE gfx/efekty | 0 | — |
| `podzial-komorki` | BIO | 5 | BIO.01.L009.podzial_komorki_wzrost_regeneracja_i ×1, BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.02.L014.jak_komorki_ciala_powstaja_i ×1, BIO.02.L015.mejoza ×1, BIO.05.L050.powtorka_roczna ×1 |
| `pojemnosc` | BIO | 1 | BIO.02.L010.dna_od_zera ×1 |
| `pop` | CHE gfx/efekty | 0 | — |
| `poziomy-dna` | BIO | 2 | BIO.02.L010.dna_od_zera ×1, BIO.02.L012.jak_dna_jest_upakowane_w ×1 |
| `precipitate` | CHE gfx/efekty | 0 | — |
| `proba-kontrolna` | BIO | 1 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1 |
| `probowki` | klocek | 1 | P01 ×1 |
| `probowki-odczyn` | klocek | 8 | C2w_wzor_elementarny_rzeczywisty ×1, C4 ×3, LKO_ORG02_alkeny ×1, LKO_ORG03_alkohole ×1, LKO_ORG04_glicerol ×1, LKO_ORG05_kwasy ×1 |
| `probowki-wybor` | klocek | 0 | — |
| `przeobrazenie-owadow` | BIO | 1 | BIO.00.REV02.roznorodnosc_zycia ×1 |
| `przeobrazenie-plaza` | BIO | 1 | BIO.00.REV02.roznorodnosc_zycia ×1 |
| `punnett` | BIO | 5 | BIO.01.B1b.krzyzowki_mendel ×1, BIO.02.L017.jak_przewidywac_dziedziczenie_jednej_cechy ×1, BIO.02.L018.jak_dziedziczy_sie_plec_i ×1, BIO.02.L019.dlaczego_grupy_krwi_nie_pasuja ×1, BIO.02.L021.powtorka_genetyki ×1 |
| `r03-krzyz-v01` | CHE model | 1 | R03A_mieszanie_roztworow_regula_krzyzowa ×1 |
| `reaction` | CHE model | 0 | — |
| `reakcje-kwasu-v03` | CHE model | 1 | N04 ×1 |
| `relacje-ekologiczne` | BIO | 2 | BIO.04.L042.jakie_relacje_panuja_miedzy_organizmami ×1, BIO.04.L044.powtorka_ekologii ×1 |
| `ringMark` | CHE gfx/efekty | 0 | — |
| `ripples` | CHE gfx/efekty | 0 | — |
| `roundFlask` | CHE gfx/naczynia | 0 | — |
| `rownania-jonowe-v01` | CHE model | 5 | C1c_kwasy_zasady_sole ×1, J03 ×1, N03 ×1, N04 ×1, N05 ×1 |
| `rozbior-zdania` | POL | 1 | POL.02.G12.czesci_zdania ×1 |
| `safety` | CHE model | 0 | — |
| `scale` | CHE gfx/efekty | 0 | — |
| `schemat-przemian` | klocek | 1 | C1c_kwasy_zasady_sole ×1 |
| `schlieren` | CHE gfx/efekty | 0 | — |
| `sekwencje` | BIO | 1 | BIO.02.L010.dna_od_zera ×1 |
| `siec-troficzna` | BIO | 2 | BIO.04.L041.jak_zapisac_lancuchy_i_sieci ×1, BIO.05.L050.powtorka_roczna ×1 |
| `sio2Naoh` | CHE gfx/reakcje | 0 | — |
| `sklad-procentowy` | klocek | 1 | C1c_masy_sklad_procentowy ×1 |
| `skora-przekroj` | BIO | 2 | BIO.02.B2a.skora_uklad_ruchu ×1, BIO.07.U01.skora_i_uklad_ruchu ×1 |
| `so2H2o` | CHE gfx/reakcje | 0 | — |
| `so2Naoh` | CHE gfx/reakcje | 0 | — |
| `so3H2o` | CHE gfx/reakcje | 0 | — |
| `so3Naoh` | CHE gfx/reakcje | 0 | — |
| `sole-doswiadczenia-v01` | CHE model | 15 | C2w_wzor_elementarny_rzeczywisty ×1, N05 ×14 |
| `solids` | CHE gfx/efekty | 0 | — |
| `sparks` | CHE gfx/efekty | 0 | — |
| `species-v01` | CHE model | 0 | — |
| `spiritLamp` | CHE gfx/naczynia | 0 | — |
| `splash` | CHE gfx/efekty | 0 | — |
| `splint` | CHE gfx/efekty | 0 | — |
| `sprzezenie-zwrotne` | BIO | 4 | BIO.02.B2e.uklad_dokrewny ×1, BIO.02.B2g.homeostaza ×1, BIO.07.H01.homeostaza ×1, BIO.07.U10.uklad_dokrewny ×1 |
| `stage` | CHE gfx/naczynia | 0 | — |
| `stand` | CHE gfx/naczynia | 0 | — |
| `staw-antagonizm` | BIO | 2 | BIO.02.B2a.skora_uklad_ruchu ×1, BIO.07.U01.skora_i_uklad_ruchu ×1 |
| `steam` | CHE gfx/efekty | 0 | — |
| `stech-kalkulator-v01` | CHE model | 6 | C2m_mol_masa_molowa ×1, C3 ×1, F17 ×1, N02 ×1, N05 ×1, R07 ×1 |
| `stirBar` | CHE gfx/efekty | 0 | — |
| `stopper` | CHE gfx/efekty | 0 | — |
| `substance` | CHE model | 0 | — |
| `synapsa` | BIO | 2 | BIO.02.B2d.uklad_nerwowy_zmysly ×1, BIO.07.U08.uklad_nerwowy_i_zmysly ×1 |
| `szuflady-cech` | BIO | 1 | BIO.02.L010.dna_od_zera ×1 |
| `tabela-rozpuszczalnosci-v01` | CHE model | 5 | C1c_kwasy_zasady_sole ×1, J03 ×1, N03 ×1, N04 ×1, N05 ×1 |
| `tap` | CHE gfx/efekty | 0 | — |
| `testTube` | CHE gfx/naczynia | 0 | — |
| `thermometer` | CHE gfx/naczynia | 0 | — |
| `timeline` | CHE model | 0 | — |
| `titration` | CHE gfx/sceny | 0 | — |
| `titration-merged` | CHE model | 1 | N04 ×1 |
| `transfuzja` | BIO | 1 | BIO.07.U04.krazenie_krew_odpornosc ×1 |
| `transport-blona` | BIO | 3 | BIO.00.REV01.organizacja_i_chemizm_zycia ×1, BIO.01.L001.komorka ×1, BIO.01.L005.blona_komorkowa_i_transport_substancji ×1 |
| `trener-nici` | BIO | 2 | BIO.02.L010.dna_od_zera ×1, BIO.02.L013.jak_komorka_kopiuje_dna ×1 |
| `tripod` | CHE gfx/naczynia | 0 | — |
| `trojkat-przeliczen` | klocek | 4 | C2m_mol_masa_molowa ×2, LKO_ORG08_mol_gazy ×2 |
| `tubeRack` | CHE gfx/naczynia | 0 | — |
| `turbidity` | CHE gfx/efekty | 0 | — |
| `ucho-droga` | BIO | 1 | BIO.07.U08.uklad_nerwowy_i_zmysly ×1 |
| `uklad-okresowy` | klocek | 1 | P01 ×1 |
| `uklad-rozrodczy` | BIO | 2 | BIO.02.B2f.rozmnazanie_rozwoj ×1, BIO.07.U11.rozmnazanie_i_rozwoj ×1 |
| `volFlask` | CHE gfx/naczynia | 0 | — |
| `watchGlass` | CHE gfx/naczynia | 0 | — |
| `wdech-wydech` | BIO | 2 | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.07.U06.oddychanie_i_wydalanie ×1 |
| `wirus-bakteria` | BIO | 1 | BIO.00.REV02.roznorodnosc_zycia ×1 |
| `wykres-zdania` | POL | 1 | POL.02.G12.czesci_zdania ×1 |
| `wykres-zlozonego` | POL | 1 | POL.02.G15.zdania_wspolrzedne ×1 |
| `wymiana-gazowa` | BIO | 2 | BIO.02.B2c.oddychanie_wydalanie ×1, BIO.07.U06.oddychanie_i_wydalanie ×1 |
| `wzor-2d` | klocek | 16 | C1c_kwasy_zasady_sole ×2, C1c_wodorki_typy_reakcji ×3, LKO_ORG01_alkany ×2, LKO_ORG02_alkeny ×2, LKO_ORG03_alkohole ×1, LKO_ORG04_glicerol ×2, LKO_ORG05_kwasy ×1, LKO_ORG06_estry ×2, LKO_ORG07_cukry ×1 |
| `zbieranie-gazu` | klocek | 1 | LKO_ORG08_mol_gazy ×1 |
| `zlewka` | klocek | 0 | — |
| `zlewkaOdwrocona` | CHE gfx/naczynia | 0 | — |
| `znoHcl` | CHE gfx/reakcje | 0 | — |
| `znoNaohAq` | CHE gfx/reakcje | 0 | — |
| `znoh2Hcl` | CHE gfx/reakcje | 0 | — |
| `znoh2Naoh` | CHE gfx/reakcje | 0 | — |
| `znso4Naoh` | CHE gfx/reakcje | 0 | — |
| `zrodla-zmiennosci` | BIO | 1 | BIO.02.L016A.zmiennosc_dlaczego_potomstwo_nie_jest ×1 |

## 6. Lekcje — jakie wizualizacje zawierają

| Przedmiot | Lekcja | Wizualizacje (liczba użyć) |
|---|---|---|
| angielski | ANG.01.L001.operatory_i_czasowniki_posilkowe | — |
| angielski | ANG.01.L002.czasy_terazniejsze_i_przeszle | — |
| angielski | ANG.01.L003.present_perfect | — |
| angielski | ANG.01.L004.past_simple_continuous | — |
| angielski | ANG.01.L005.future_simple | — |
| angielski | ANG.01.L006.czasowniki_modalne_i_have_to | — |
| angielski | ANG.01.L007.tryb_rozkazujacy_stative_phrasal_verbs | — |
| angielski | ANG.01.L008.rzeczownik | — |
| angielski | ANG.01.L009.przedimki | — |
| angielski | ANG.01.L010.przymiotniki | — |
| angielski | ANG.01.L011.przyslowek | — |
| angielski | ANG.01.L012.zaimki | — |
| angielski | ANG.01.L013.strona_bierna | — |
| angielski | ANG.01.L014.zdania_warunkowe | — |
| angielski | ANG.01.L015.zdania_wzgledne | — |
| angielski | ANG.01.L016.question_tags | — |
| angielski | ANG.01.L017.used_to_would | — |
| angielski | ANG.01.L018.spojniki_i_laczniki | — |
| angielski | ANG.01.L019.mowa_zalezna | — |
| angielski | ANG.01.L020.slowotworstwo | — |
| angielski | ANG.01.L021.inwersja_i_zdania_rozlaczne | — |
| angielski | ANG.01.L022.as_like_so_such_too_enough | — |
| angielski | ANG.01.L023.przyimki_czasu_i_miejsca | — |
| angielski | ANG.01.L024.zdania_czasowe | — |
| angielski | ANG.01.L025.there_is_are_some_any_no | — |
| angielski | ANG.01.L026.pisanie_email_i_list | — |
| angielski | ANG.01.L027.slownictwo_tematyczne | — |
| biologia | BIO.00.REV01.organizacja_i_chemizm_zycia | `energia-glukozy` ×1, `fotosynteza-oddychanie` ×1, `fotosynteza-oddychanie-krazenie` ×1, `komorka-nakladki` ×1, `komorki-porownanie` ×1, `lancuch` ×1, `mikroskop-model` ×1, `proba-kontrolna` ×1, `transport-blona` ×1, `wykres-dane` ×1 |
| biologia | BIO.00.REV02.roznorodnosc_zycia | `cykl` ×6, `jajo-porownanie` ×1, `jajo-ptaka` ×1, `klucz-kregowce` ×1, `mikroskop-budowa` ×1, `przeobrazenie-owadow` ×1, `przeobrazenie-plaza` ×1, `ryba-budowa` ×1, `stawonogi-budowa` ×1, `tkanki-zwierzece` ×1, `wirus-bakteria` ×1, `wykres-dane` ×1 |
| biologia | BIO.01.B1b.krzyzowki_mendel | `krzyzowka-mendla` ×2, `punnett` ×1 |
| biologia | BIO.01.L001.komorka | `komorka-nakladki` ×1, `lancuch` ×1, `mikroskop-model` ×1, `transport-blona` ×1 |
| biologia | BIO.01.L001A.dodatek_ambitny_od_komorki_do | `endosymbioza` ×1 |
| biologia | BIO.01.L002.powtorka_czlowiek | `homeostaza` ×1 |
| biologia | BIO.01.L003.diagnoza | — |
| biologia | BIO.01.L004.organizacja_budowy_organizmu_od_komorki | `lancuch` ×2 |
| biologia | BIO.01.L005.blona_komorkowa_i_transport_substancji | `transport-blona` ×1 |
| biologia | BIO.01.L006.fotosynteza_skad_roslina_bierze_materie | `fotosynteza-oddychanie` ×1 |
| biologia | BIO.01.L007.oddychanie_komorkowe_skad_komorka_bierze | `energia-glukozy` ×1, `fotosynteza-oddychanie` ×1 |
| biologia | BIO.01.L008.mikroskop_jak_obserwowac_komorke_a | `mikroskop-model` ×1 |
| biologia | BIO.01.L009.podzial_komorki_wzrost_regeneracja_i | `podzial-komorki` ×1 |
| biologia | BIO.02.B10.powtorka_uklady_czlowieka | `krazenie` ×1, `krazenie-obiegi` ×1, `serce-budowa` ×1 |
| biologia | BIO.02.B2a.skora_uklad_ruchu | `skora-przekroj` ×1, `staw-antagonizm` ×1, `tkanki-zwierzece` ×1 |
| biologia | BIO.02.B2b.uklad_pokarmowy | `droga-pokarmu` ×1, `kosmek-jelitowy` ×1 |
| biologia | BIO.02.B2c.oddychanie_wydalanie | `nefron` ×1, `nefron-budowa` ×1, `petla-regulacji` ×1, `wdech-wydech` ×1, `wentylacja` ×1, `wymiana-gazowa` ×1 |
| biologia | BIO.02.B2d.uklad_nerwowy_zmysly | `cykl` ×1, `luk-odruchowy` ×1, `neuron-budowa` ×1, `synapsa` ×1, `tkanki-zwierzece` ×1 |
| biologia | BIO.02.B2e.uklad_dokrewny | `glukoza-wykres` ×1, `gruczoly-mapa` ×1, `petla-regulacji` ×1, `sprzezenie-zwrotne` ×1 |
| biologia | BIO.02.B2f.rozmnazanie_rozwoj | `cykl` ×1, `cykl-miesiaczkowy` ×1, `droga-zarodka` ×1, `jajo-porownanie` ×1, `jajo-ptaka` ×1, `lozysko-wymiana` ×1, `podzial-komorki` ×1, `podzial-komorki-skrot` ×1, `uklad-rozrodczy` ×1 |
| biologia | BIO.02.B2g.homeostaza | `glukoza-wykres` ×1, `petla-regulacji` ×1, `sprzezenie-zwrotne` ×1 |
| biologia | BIO.02.L010.dna_od_zera | `drabina` ×1, `gdzie-dna` ×1, `helisa` ×1, `komorki-porownanie` ×1, `lancuch` ×1, `nukleotyd` ×1, `od-organizmu-do-genu` ×1, `pary-zasad` ×1, `pojemnosc` ×1, `poziomy-dna` ×1, `sekwencje` ×1, `szuflady-cech` ×1, `trener-nici` ×1 |
| biologia | BIO.02.L011.jak_dna_przechowuje_informacje | `drabina` ×1, `helisa` ×1, `kod-genetyczny` ×1, `nukleotyd` ×1, `pary-zasad` ×1 |
| biologia | BIO.02.L012.jak_dna_jest_upakowane_w | `poziomy-dna` ×1 |
| biologia | BIO.02.L013.jak_komorka_kopiuje_dna | `trener-nici` ×1 |
| biologia | BIO.02.L014.jak_komorki_ciala_powstaja_i | `podzial-komorki` ×1 |
| biologia | BIO.02.L015.mejoza | `lancuch` ×1, `podzial-komorki` ×1 |
| biologia | BIO.02.L016.co_sie_dzieje_gdy_podzialy | `kontrola-podzialow` ×1 |
| biologia | BIO.02.L016A.zmiennosc_dlaczego_potomstwo_nie_jest | `zrodla-zmiennosci` ×1 |
| biologia | BIO.02.L017.jak_przewidywac_dziedziczenie_jednej_cechy | `punnett` ×1 |
| biologia | BIO.02.L018.jak_dziedziczy_sie_plec_i | `punnett` ×1 |
| biologia | BIO.02.L019.dlaczego_grupy_krwi_nie_pasuja | `punnett` ×1 |
| biologia | BIO.02.L020.czym_sa_mutacje_i_jakie | `kod-genetyczny` ×1 |
| biologia | BIO.02.L021.powtorka_genetyki | `kod-genetyczny` ×1, `punnett` ×1 |
| biologia | BIO.02.L022.biotechnologia_i_inzynieria_genetyczna | `klonowanie-genu` ×1 |
| biologia | BIO.03.L030.czym_jest_ewolucja_i_jakie | `konczyny-homologiczne` ×1 |
| biologia | BIO.03.L031.jak_dziala_dobor_naturalny_i | `dobor-naturalny` ×1 |
| biologia | BIO.03.L032.powtorka_ewolucji | `dobor-naturalny` ×1, `konczyny-homologiczne` ×1 |
| biologia | BIO.04.L040.czym_jest_ekosystem_i_jakie | `energia-materia` ×1 |
| biologia | BIO.04.L041.jak_zapisac_lancuchy_i_sieci | `siec-troficzna` ×1 |
| biologia | BIO.04.L042.jakie_relacje_panuja_miedzy_organizmami | `relacje-ekologiczne` ×1 |
| biologia | BIO.04.L043.jak_czlowiek_wplywa_na_srodowisko | `eutrofizacja` ×1 |
| biologia | BIO.04.L044.powtorka_ekologii | `energia-materia` ×1, `relacje-ekologiczne` ×1 |
| biologia | BIO.05.L050.powtorka_roczna | `podzial-komorki` ×1, `siec-troficzna` ×1 |
| biologia | BIO.06.L090.extra_olimpijska | `hardy-weinberg` ×1, `kod-genetyczny` ×1 |
| biologia | BIO.06.L091.atp_jak_komorka_magazynuje_energie | `fotosynteza-oddychanie` ×1 |
| biologia | BIO.07.H01.homeostaza | `glukoza-wykres` ×1, `sprzezenie-zwrotne` ×1 |
| biologia | BIO.07.U01.skora_i_uklad_ruchu | `skora-przekroj` ×1, `staw-antagonizm` ×1 |
| biologia | BIO.07.U03.uklad_pokarmowy_i_odzywianie | `droga-pokarmu` ×1, `enzym-warunki` ×1, `kosmek-jelitowy` ×1 |
| biologia | BIO.07.U04.krazenie_krew_odpornosc | `krazenie-obiegi` ×1, `transfuzja` ×1 |
| biologia | BIO.07.U06.oddychanie_i_wydalanie | `nefron` ×1, `wdech-wydech` ×1, `wymiana-gazowa` ×1 |
| biologia | BIO.07.U08.uklad_nerwowy_i_zmysly | `luk-odruchowy` ×1, `oko-akomodacja` ×1, `synapsa` ×1, `ucho-droga` ×1 |
| biologia | BIO.07.U10.uklad_dokrewny | `glukoza-wykres` ×1, `gruczoly-mapa` ×1, `sprzezenie-zwrotne` ×1 |
| biologia | BIO.07.U11.rozmnazanie_i_rozwoj | `cykl-miesiaczkowy` ×1, `droga-zarodka` ×1, `etapy-zycia` ×1, `lozysko-wymiana` ×1, `uklad-rozrodczy` ×1 |
| chemia | A01 | — |
| chemia | A02 | — |
| chemia | A03 | — |
| chemia | A04 | — |
| chemia | A05 | — |
| chemia | A06 | — |
| chemia | C1c_konfiguracje_elektronowe | `diagram-bohra` ×1, `konfiguracje` ×1 |
| chemia | C1c_kwasy_zasady_sole | `acid-game` ×1, `doswiadczenie` ×1, `karta-bhp` ×1, `kw-szereg-metali-v01` ×1, `rownania-jonowe-v01` ×1, `schemat-przemian` ×1, `tabela-rozpuszczalnosci-v01` ×1, `wzor-2d` ×2 |
| chemia | C1c_masy_sklad_procentowy | `f05-izotopy-v01` ×1, `sklad-procentowy` ×1 |
| chemia | C1c_wodorki_typy_reakcji | `bilans-rownania` ×1, `energy-profile` ×1, `n05-trendy-v01` ×1, `n05-wodorki-v01` ×1, `wzor-2d` ×3 |
| chemia | C2m_mol_masa_molowa | `kalkulator-mola` ×1, `stech-kalkulator-v01` ×1, `trojkat-przeliczen` ×2 |
| chemia | C2w_wzor_elementarny_rzeczywisty | `cuso4Hydrate` ×1, `karta-bhp` ×1, `probowki-odczyn` ×1, `sole-doswiadczenia-v01` ×1 |
| chemia | C3 | `bilans-rownania` ×1, `stech-kalkulator-v01` ×1 |
| chemia | C4 | `doswiadczenie` ×2, `karta-bhp` ×1, `probowki-odczyn` ×3 |
| chemia | CHE.00.LAB.doswiadczenia | — |
| chemia | E01 | — |
| chemia | E02 | — |
| chemia | E03 | — |
| chemia | E04 | — |
| chemia | E05 | — |
| chemia | E06 | — |
| chemia | F00 | — |
| chemia | F01 | `beaker-prediction-enhanced` ×1, `f01-doswiadczenia-v01` ×7, `f01FeS` ×1, `f01Mg` ×1, `f01Odparowanie` ×1, `f01SodaOcet` ×1, `f01SolWoda` ×1, `f01WodaWapienna` ×1, `karta-bhp` ×1, `live-cv` ×1, `mind-map` ×1 |
| chemia | F02 | `f01-doswiadczenia-v01` ×3, `f01FeS` ×1, `f01Odparowanie` ×1, `f01SolWoda` ×1, `f02-czastki-v01` ×1, `karta-bhp` ×1, `molecule3d-merged` ×1 |
| chemia | F03 | `f01Odparowanie` ×1, `f03-rozdzielanie-v01` ×3, `f03PiasekWoda` ×1, `karta-bhp` ×1, `lab-stations-v102` ×1 |
| chemia | F04 | `diagram-bohra` ×1, `f04-nuklid-v01` ×1, `periodic-54` ×1 |
| chemia | F05 | `f05-izotopy-v01` ×1 |
| chemia | F06 | `diagram-bohra` ×1, `f06-doswiadczenia-v01` ×5, `f06Br2Ki` ×1, `f06Cl2Kbr` ×1, `kH2o` ×1, `karta-bhp` ×1, `liH2o` ×1, `naH2o` ×1, `periodic-54` ×1 |
| chemia | F07 | `palniki` ×1 |
| chemia | F08 | — |
| chemia | F09 | — |
| chemia | F10 | — |
| chemia | F11 | — |
| chemia | F12 | — |
| chemia | F13 | — |
| chemia | F14 | — |
| chemia | F15 | — |
| chemia | F16 | — |
| chemia | F17 | `f01-doswiadczenia-v01` ×1, `f01Mg` ×1, `f17-bilans-v01` ×1, `stech-kalkulator-v01` ×1 |
| chemia | F18 | — |
| chemia | F19 | — |
| chemia | F20 | — |
| chemia | F21 | — |
| chemia | FIZ01 | `fiz-coulomb-v01` ×3, `fiz-elektroskop-v01` ×3, `fiz-elektryzowanie-v01` ×3, `fiz-ladunek-v01` ×3, `fiz-przewodniki-v01` ×1, `gfx-scene-conductivity` ×1, `kw-dysocjacja-v01` ×1 |
| chemia | J00 | — |
| chemia | J01 | — |
| chemia | J02 | — |
| chemia | J03 | `ion-vs-diss` ×1, `j03-osady-v01` ×1, `rownania-jonowe-v01` ×1, `tabela-rozpuszczalnosci-v01` ×1 |
| chemia | J04 | — |
| chemia | J05 | — |
| chemia | J06 | — |
| chemia | J07 | — |
| chemia | J08 | — |
| chemia | J09 | — |
| chemia | J10 | — |
| chemia | J11 | — |
| chemia | J12 | — |
| chemia | K01 | — |
| chemia | K02 | — |
| chemia | K03 | — |
| chemia | K04 | — |
| chemia | K05 | — |
| chemia | K06 | — |
| chemia | K07 | — |
| chemia | K08 | — |
| chemia | K09 | — |
| chemia | K10 | — |
| chemia | K11 | — |
| chemia | K12 | — |
| chemia | LAB01 | — |
| chemia | LKO_A1_symulacja_etap_I | — |
| chemia | LKO_B1B2_zestawy_treningowe | — |
| chemia | LKO_DIAG_diagnoza_wejsciowa | — |
| chemia | LKO_DOSW_katalog_doswiadczen | — |
| chemia | LKO_KRZYWE_krzywe_rozpuszczalnosci | — |
| chemia | LKO_METALE_szereg_jonowe_otrzymywanie | — |
| chemia | LKO_ORG01_alkany | `bilans-spalania` ×1, `karta-bhp` ×1, `palnik-gazowy` ×1, `wzor-2d` ×2 |
| chemia | LKO_ORG02_alkeny | `karta-bhp` ×1, `probowki-odczyn` ×1, `wzor-2d` ×2 |
| chemia | LKO_ORG03_alkohole | `karta-bhp` ×1, `probowki-odczyn` ×1, `wzor-2d` ×1 |
| chemia | LKO_ORG04_glicerol | `karta-bhp` ×1, `probowki-odczyn` ×1, `wzor-2d` ×2 |
| chemia | LKO_ORG05_kwasy | `bilans-rownania` ×1, `karta-bhp` ×1, `probowki-odczyn` ×1, `wzor-2d` ×1 |
| chemia | LKO_ORG06_estry | `bilans-rownania` ×1, `estryfikacja` ×1, `karta-bhp` ×1, `wzor-2d` ×2 |
| chemia | LKO_ORG07_cukry | `haworth` ×1, `karta-bhp` ×1, `wzor-2d` ×1 |
| chemia | LKO_ORG08_mol_gazy | `kalkulator-mola` ×1, `karta-bhp` ×1, `trojkat-przeliczen` ×2, `zbieranie-gazu` ×1 |
| chemia | LKO_STECH_masy_stechiometria | — |
| chemia | LKO_SYM-A2_symulacja_etap_II | — |
| chemia | LKO_Z36_konfiguracje_do_z36 | — |
| chemia | LKO_pulapki_wapno_woda_wapienna | — |
| chemia | N01 | `f01-doswiadczenia-v01` ×1, `f01WodaWapienna` ×1, `gfx-scene-acidMetal` ×1, `gfx-scene-carbonate` ×1, `n01-spalanie-v01` ×1 |
| chemia | N02 | `caoH2o` ×1, `caoh2Co2` ×1, `chain-scn` ×1, `cuoH2so4` ×1, `gfx-scene-carbonate` ×1, `mgO2` ×1, `molecule3d-merged` ×1, `n01-doswiadczenia-v01` ×4, `n01-konstruktor-v01` ×1, `n01-reaktor-v01` ×1, `n01-spalanie-v01` ×2, `n01-tlenki-v01` ×1, `n01-trend-v01` ×1, `periodic-54` ×1, `stech-kalkulator-v01` ×1 |
| chemia | N03 | `-` ×1, `aloh3Naoh` ×1, `caoH2o` ×1, `caoh2Co2` ×1, `cuso4Naoh` ×1, `fecl3Naoh` ×1, `gfx-scene-indicatorRack` ×1, `hclNaOH` ×1, `n02-doswiadczenia-v01` ×8, `n02-dysocjacja-v01` ×1, `n02-otrzymywanie-v01` ×1, `n02-przeglad-v01` ×1, `n02-reaktor-v01` ×1, `n02-stracanie-v01` ×1, `n02-wzory-v01` ×1, `n02-zobojetnianie-v01` ×1, `naH2o` ×1, `ph-indicators-v03` ×2, `rownania-jonowe-v01` ×1, `tabela-rozpuszczalnosci-v01` ×1 |
| chemia | N04 | `acid-rain-v01` ×1, `acidMetal` ×1, `carbonate` ×1, `conductivity` ×2, `cuoH2so4` ×1, `gfx-scene-acidMetal` ×1, `gfx-scene-conductivity` ×1, `gfx-scene-dilution` ×1, `gfx-scene-indicatorRack` ×1, `gfx-scene-titration` ×1, `hclNaOH` ×1, `indicator` ×1, `kw-bufor-v01` ×1, `kw-doswiadczenia-v01` ×11, `kw-dysocjacja-v01` ×1, `kw-reszty-v01` ×1, `kw-szereg-metali-v01` ×1, `kw-wlasciwosci-v01` ×1, `ph-indicators-v03` ×1, `reakcje-kwasu-v03` ×1, `rownania-jonowe-v01` ×1, `szereg` ×1, `tabela-rozpuszczalnosci-v01` ×1, `titration-merged` ×1, `wlasciwosci` ×2 |
| chemia | N05 | `bacl2Na2so4` ×1, `cacl2Na2co3` ×1, `caoH2o` ×1, `chain-scn` ×1, `cuoH2so4` ×1, `cuso4Hydrate` ×1, `gfx-scene-conductivity` ×1, `hclNaOH` ×1, `hyd-na2co3` ×1, `hyd-nh4cl` ×1, `ion-map-v02` ×1, `kw-reszty-v01` ×1, `kw-szereg-metali-v01` ×1, `na2co3Hcl` ×1, `rownania-jonowe-v01` ×1, `rx-ag-cl` ×2, `rx-cu-naoh` ×1, `rx-fe-cuso4` ×1, `sole-doswiadczenia-v01` ×14, `stech-kalkulator-v01` ×1, `tabela-rozpuszczalnosci-v01` ×1 |
| chemia | N06 | — |
| chemia | N07 | — |
| chemia | N08 | — |
| chemia | O01 | — |
| chemia | O08 | — |
| chemia | O09 | — |
| chemia | O10 | — |
| chemia | O13 | — |
| chemia | O14 | — |
| chemia | O21 | — |
| chemia | O24 | — |
| chemia | O25 | — |
| chemia | P01 | `palniki` ×1, `probowki` ×1, `uklad-okresowy` ×1 |
| chemia | P02 | — |
| chemia | P03 | — |
| chemia | P04 | — |
| chemia | P05 | — |
| chemia | P06 | — |
| chemia | R01 | — |
| chemia | R02 | — |
| chemia | R03 | — |
| chemia | R03A_mieszanie_roztworow_regula_krzyzowa | `r03-krzyz-v01` ×1 |
| chemia | R04 | — |
| chemia | R06 | — |
| chemia | R07 | `nadmiar-substratu` ×1, `stech-kalkulator-v01` ×1 |
| chemia | R08 | — |
| chemia | R09 | — |
| chemia | REV01 | — |
| chemia | REV02 | — |
| chemia | REV03 | — |
| chemia | REV04 | — |
| chemia | REV05 | — |
| chemia | REV06 | — |
| chemia | S00 | — |
| chemia | W00 | — |
| chemia | X01 | — |
| chemia | X04 | `doswiadczenie` ×1, `karta-bhp` ×1, `kw-szereg-metali-v01` ×1 |
| olimpiada | OLI.BIO.B2.homeostaza | — |
| olimpiada | OLI.BIO.B2a.skora_i_uklad_ruchu | — |
| olimpiada | OLI.BIO.B2b.uklad_pokarmowy_i_odzywianie | — |
| olimpiada | OLI.BIO.B2c.oddychanie_i_wydalanie | — |
| olimpiada | OLI.BIO.B2d.uklad_nerwowy_i_zmysly | — |
| olimpiada | OLI.BIO.B2e.uklad_dokrewny | — |
| olimpiada | OLI.BIO.B2f.rozmnazanie_i_rozwoj | — |
| olimpiada | OLI.CHE.R07.stechiometria_z_nadmiarem | — |
| olimpiada | OLI.CHE.X04.szereg_aktywnosci_metali | — |
| polski | PL_G01_rzeczownik | — |
| polski | PL_G02_czasownik | — |
| polski | PL_G03_przymiotnik | — |
| polski | PL_G04_liczebnik | — |
| polski | PL_G05_zaimek | — |
| polski | PL_G06_imieslowy | — |
| polski | PL_G07_przyslowek | — |
| polski | PL_G08_przyimek | — |
| polski | PL_G09_spojnik | — |
| polski | PL_G10_partykula | — |
| polski | PL_G11_wykrzyknik | — |
| polski | PL_G12_czesci_zdania | — |
| polski | PL_G13_zwiazki_wyrazowe | — |
| polski | PL_G14_zdanie_pojedyncze | — |
| polski | PL_G15_zdania_wspolrzedne | — |
| polski | PL_G16_zdania_podrzedne | — |
| polski | PL_G17_mowa_zalezna | — |
| polski | PL_L007_przeglad_czesci_mowy | — |
| polski | PL_L008_czesci_zdania | — |
| polski | PL_L009_zdania_zlozone | — |
| polski | PL_L010_srodki_stylistyczne | — |
| polski | PL_L011_elementy_utworu_moral_puenta | — |
| polski | PL_S01_epitet_porownanie | — |
| polski | PL_S02_przenosnia_ozywienie_uosobienie | — |
| polski | PL_S03_wyrazy_dzwiekonasladowcze_apostrofa | — |
| polski | PL_S04_powtorzenie_anafora_wyliczenie | — |
| polski | PL_S05_neologizm_zdrobnienie_archaizm | — |
| polski | PL_S06_hiperbola_ironia_symbol_alegoria | — |
| polski | POL.01.L001.lektury_iv_vi_imieslowy | — |
| polski | POL.01.L002.hobbit_nieodmienne_czesci_mowy | — |
| polski | POL.01.L003.narnia_zaimek | — |
| polski | POL.01.L004.chlopcy_z_placu_broni_przymiotnik_liczebnik | — |
| polski | POL.01.L005.kajko_i_kokosz_rzeczownik | — |
| polski | POL.01.L006.akademia_pana_kleksa_czasownik | — |
| polski | POL.01.L007.przeglad_czesci_mowy | — |
| polski | POL.01.L008.czesci_zdania | — |
| polski | POL.01.L009.zdania_zlozone | — |
| polski | POL.01.L010.srodki_stylistyczne | — |
| polski | POL.01.L011.elementy_utworu_moral_puenta | — |
| polski | POL.02.G01.rzeczownik | — |
| polski | POL.02.G02.czasownik | — |
| polski | POL.02.G03.przymiotnik | — |
| polski | POL.02.G04.liczebnik | — |
| polski | POL.02.G05.zaimek | — |
| polski | POL.02.G06.imieslowy | — |
| polski | POL.02.G07.przyslowek | — |
| polski | POL.02.G08.przyimek | — |
| polski | POL.02.G09.spojnik | — |
| polski | POL.02.G10.partykula | — |
| polski | POL.02.G11.wykrzyknik | — |
| polski | POL.02.G12.czesci_zdania | `rozbior-zdania` ×1, `wykres-zdania` ×1 |
| polski | POL.02.G13.zwiazki_wyrazowe | — |
| polski | POL.02.G14.zdanie_pojedyncze | — |
| polski | POL.02.G15.zdania_wspolrzedne | `wykres-zlozonego` ×1 |
| polski | POL.02.G16.zdania_podrzedne | — |
| polski | POL.02.G17.mowa_zalezna | — |
| polski | POL.03.S01.epitet_porownanie | — |
| polski | POL.03.S02.przenosnia_ozywienie_uosobienie | — |
| polski | POL.03.S03.wyrazy_dzwiekonasladowcze_apostrofa | — |
| polski | POL.03.S04.powtorzenie_anafora_wyliczenie | — |
| polski | POL.03.S05.neologizm_zdrobnienie_archaizm | — |
| polski | POL.03.S06.hiperbola_ironia_symbol_alegoria | — |
| polski | POL.04.D01.czytanie_ze_zrozumieniem | — |
| polski | POL.04.D02.fakt_opinia_teza_argument_wniosek | — |
| polski | POL.04.D03.wnioskowanie_i_laczenie_informacji | — |
| polski | POL.04.D04.odpowiedz_pelna_i_uzasadnienie | — |
| polski | POL.04.D05.rozprawka | — |
| polski | POL.04.D06.opowiadanie_tworcze | — |
| polski | POL.04.D07.przemowienie | — |
| polski | POL.04.D08.list_oficjalny | — |
| polski | POL.04.D09.krotkie_formy_uzytkowe | — |
| polski | POL.04.D10.streszczenie_i_przeksztalcanie | — |
| polski | POL.04.D11.lektura_jako_dowod | — |
| polski | POL.04.D12.kontrola_jezyka_i_zapisu | — |
| polski | POL.04.D13.zadania_przekrojowe_i_pulapki | — |

## 7. Jak podmienić wizualizację na nowszą

1. Nowa wersja dostaje **ten sam identyfikator**, jeśli ma zastąpić starą: wtedy wystarczy podmienić plik biblioteki, lekcje się nie zmieniają.
2. Jeśli ma mieć nową nazwę: podgląd `python3 wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py --podmien STARE NOWE`, potem to samo z `--zapisz`.
3. Przebuduj lekcje: `python3 narzedzia/zbuduj_wszystkie.py` (chemia z gotowe: `chemia/che-modular/tools/lite.py`).
4. Uruchom ten skrypt ponownie i sprawdź, że stara nazwa ma 0 użyć.
