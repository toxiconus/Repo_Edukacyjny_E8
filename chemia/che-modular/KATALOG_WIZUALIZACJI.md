# KATALOG WIZUALIZACJI — wygenerowany (`python3 tools/katalog_zbiorczy.py`), nie edytować

Jedno źródło prawdy: modele (widoki) i elementy gfx. Użycie jest liczone z `@model` w `lessons-md/` (nie z ręcznej kolumny). Statusy i uwagi edytuje się w `engine/registry/katalog_oceny.json`. Stare wpisy o statusie „zastąpiony” wyrzucamy po podmianie w lekcjach.

## Statusy

- **kandydat** — pasuje do konkretnej lekcji, której jeszcze nie wstawiono
- **ulepszyć** — dobry pomysł, ale wersja za uboga lub ograniczona; rozbudować zamiast pisać nowy
- **zastąpiony** — jest lepszy model; po zastąpieniu w lekcjach do wyrzucenia
- **rozszerzony** — treść poza zakresem LKO 2025/26 (LO, wyższe etapy); zachować, nie wstawiać do lekcji E8
- **ciekawostka** — niski priorytet; ewentualnie rama ciekawostki
- **narzędzie** — techniczny, nie dla ucznia (testy, panele pracowni)
- **czeka** — przygotowany do lekcji z planu, której md jeszcze nie ma
- **do sprawdzenia** — ocena wstępna z tytułu i rozmiaru; porównać z wymienionym modelem

## Modele (99; użyte w lekcjach: 56)

| id | tytuł | użyte w | status | uwaga |
|---|---|---|---|---|
| `acid-calculator` | Kalkulator kwasu — pH, dysocjacja, formy · wspólny silnik |  | rozszerzony | pH, dysocjacja, formy; w zakresie LKO brak haseł pH/pKa/równowaga (grep) |
| `acid-game` | Mini-gra: kwas, zasada, sól czy tlenek? | C1c | kandydat | klasyfikacja kwas/zasada/sól/tlenek; bez presji czasu (po odpowiedzi samo przechodzi dalej po 1,6 s); lekcja: C1c kwasy/zasady/sole, N07 |
| `acid-rain-v01` | Kwaśne deszcze — emisja → chmura → opad → jezioro, las, zabytki | N03 | używany |  |
| `acid-table` | Tabela mocy kwasów |  | zastąpiony | dwie tabele mocy kwasów; scalić w jedną; zamiennik: `ka-pka-table` |
| `beaker-prediction-enhanced` | Zlewka z predykcją — wybierz obserwację i sprawdź wynik | F01 | używany |  |
| `carboxyl` | Grupa karboksylowa — który H jest kwaśny |  | ulepszyć | 357 B, szkic; rozbudować razem z szkielet-zygzak; lekcja: O11 kwasy karboksylowe |
| `chain-scn` | Łańcuch przemian: pierwiastek → tlenek → kwas → sól | N01, N04 | używany |  |
| `che-spojnosc-v01` | Spójność danych: silnik ↔ Atlas ↔ lekcje ↔ GFX |  | narzędzie | spójność silnik/Atlas/lekcje/GFX |
| `che-test-silnika-v01` | Test silnika — audyty modułów, spójność i montowanie wszystkich widoków |  | narzędzie | testy silnika |
| `chem-profile10` | Profil chemiczny — pierwiastek → substancja → reakcje |  | zastąpiony | karta pierwiastek→substancja→reakcje nie jest w żadnej gotowej lekcji; periodic-54 działa w N01, F04, F06, REV01. Jeśli treść karty jest potrzebna, dopisać ją do periodic-54 w H9; zamiennik: `periodic-54` |
| `compound-cards` | Karty związków — HCl, H₂SO₄, CH₃COOH, H₂CO₃ |  | zastąpiony | 4 karty kwasów; kw-reszty-v01 jest w N03 i N04; zamiennik: `kw-reszty-v01` |
| `conj-pairs` | Pary sprzężone i amfiprotyczność |  | rozszerzony | pary sprzężone, amfiprotyczność (Brønsted) |
| `diss-three-levels` | Trzy poziomy zapisu dysocjacji |  | zastąpiony | zapis trzech poziomów dysocjacji jest w kw-dysocjacja-v01 (N03), używany w FIZ01; zamiennik: `kw-dysocjacja-v01` |
| `energy-profile` | Termochemia — egzo i endo | C1c | kandydat | 1,6 KB, profil energii Ea, ΔH; wypada użyć zamiast rysunku; lekcja: C1c wodorki/typy reakcji (egzo i endo) |
| `env-balance` | Bilans mas — wapnowanie jeziora · wspólny model |  | ciekawostka | wapnowanie jeziora; liczy z pH i masy molowej; lekcja: R03 lub N03 (kwaśne deszcze) |
| `equilibrium` | Równowaga HA ⇌ H⁺ + A⁻ — reguła przekory |  | rozszerzony | równowaga HA ⇌ H⁺ + A⁻, reguła przekory |
| `fiz-coulomb-v01` | Prawo Coulomba i linie pola elektrycznego | FIZ01 | używany |  |
| `fiz-elektroskop-v01` | Elektroskop — dotyk, indukcja i uziemienie | FIZ01 | używany |  |
| `fiz-elektryzowanie-v01` | Elektryzowanie przez tarcie — kto oddaje elektrony? | FIZ01 | używany |  |
| `fiz-ladunek-v01` | Bilans ładunku: dotyk, uziemienie, zasada zachowania ładunku, liczba elektronów | FIZ01 | używany |  |
| `fiz-przewodniki-v01` | Przewodnik czy izolator? Rozpływ ładunku wzdłuż pręta | FIZ01 | używany |  |
| `flashcards-deck` | Fiszki + ściąga — powtórka |  | kandydat | fiszki i ściąga; lekcja: REV01/REV02 (powtórka) |
| `flow-egzamin-enhanced` | Algorytm egzaminacyjny — interaktywny schemat · v0.06 · 2026-10-01 |  | kandydat | algorytm egzaminacyjny jako schemat; lekcja: REV07 / C3 |
| `flow-naming` | Jak nazwać kwas — algorytm |  | zastąpiony | algorytm nazwy kwasu jest w kw-reszty-v01 (N03); zamiennik: `kw-reszty-v01` |
| `gfx-scene-acidMetal` | Metal + kwas solny → wodór (próba „pyk!") | N01, N03 | używany |  |
| `gfx-scene-carbonate` | Węglan wapnia + kwas → CO₂ (woda wapienna) | N01 | używany |  |
| `gfx-scene-conductivity` | Przewodzenie prądu: elektrolity i dysocjacja | FIZ01, N03, N04 | używany |  |
| `gfx-scene-dilution` | Rozcieńczanie kwasu: „kwas do wody!" | N03 | używany |  |
| `gfx-scene-gasCollection` | Zbieranie gazu nad wodą |  | zastąpiony | sceny nie ma w kodzie; 2026-10-19 zbudowano klocek `zbieranie-gazu` (gaz × sposób zbierania, werdykt z d = M/29 i rozpuszczalnością) — użyty w N01 powietrze §7, N05, ORG08; zamiennik: `klocek zbieranie-gazu` |
| `gfx-scene-heating` | Ogrzewanie cieczy na trójnogu (palnik Bunsena) |  | kandydat | palnik i trójnóg; prototyp R4 ma własną probówkę z palnikiem; lekcja: C2w (ogrzewanie hydratu), N01 |
| `gfx-scene-indicator` | Wskaźnik kwasowo-zasadowy w roztworze |  | zastąpiony | N02 i N03 używają wersji z siedmioma roztworami; zamiennik: `gfx-scene-indicatorRack` |
| `gfx-scene-indicatorRack` | Wskaźnik w siedmiu roztworach (statyw) | N02, N03 | używany |  |
| `gfx-scene-titration` | Zobojętnianie: miareczkowanie HCl zasadą NaOH | N03 | używany |  |
| `hf-paradox` | Paradoks HF — dlaczego słaby |  | rozszerzony | dlaczego HF jest słabym kwasem |
| `ion-map-v02` | Mapa jonów — ładunek, pochodzenie, wykrywanie, sole | N04 | używany |  |
| `ion-vs-diss` | Jonizacja vs dysocjacja — różnica |  | kandydat | jonizacja a dysocjacja; wstawić jako ramkę do N03 (nieużywany w gotowych lekcjach); zamiennik: `kw-dysocjacja-v01` |
| `ka-pka-table` | Ka, pKa, moc — tabela |  | rozszerzony | Ka/pKa poza zakresem LKO; scalić z acid-table |
| `kinetics-v01` | Szybkość reakcji: metal + kwas solny (pomiar objętości H₂) |  | rozszerzony | model zderzeń H₃O⁺ z metalem, Ea; kinetyka poza zakresem LKO (grep); dobry, zachować; lekcja: F19 / REV06 (szybkość reakcji) |
| `kw-bufor-v01` | Bufor octanowy kontra czysta woda — dodawaj kwas i zasadę | N03 | używany |  |
| `kw-doswiadczenia-v01` | Pracownia: doświadczenia z kwasami | N03 | używany |  |
| `kw-dysocjacja-v01` | Dysocjacja kwasów na żywo — przeniesienie protonu H⁺ na wodę | FIZ01, N03 | używany |  |
| `kw-reszty-v01` | Kwas → reszta kwasowa → sole | N03, N04 | używany |  |
| `kw-szereg-metali-v01` | Szereg aktywności: Mg, Zn, Fe, Cu w kwasie solnym | C1c, N03, N04, X04 | używany |  |
| `kw-wlasciwosci-v01` | Właściwości stężonych kwasów — pokazy | N03 | używany |  |
| `lab-beaker-v102` | CHE.LAB — uniwersalna zlewka (pełny panel) · v1.02 |  | narzędzie | pełny panel zlewki (pracownia) |
| `lab-library-v001` | Biblioteka elementów laboratorium · v1.0 |  | narzędzie | biblioteka elementów laboratorium |
| `lab-stations-v102` | CHE.LAB — stanowiska (zlewka, gaz, chłodnica, palnik, miareczkowanie) · v1.02 | F03 | używany |  |
| `legacy:timelineAnim` | timelineAnim |  | zastąpiony | wpis legacy; sprawdzić zależności i usunąć; zamiennik: `timeline` |
| `live-cv` | LIVE CV chemii — atom → cząsteczka → substancja → reakcja | F01 | używany |  |
| `mind-map` | Mapy myśli — MASTER · wybierz temat | F01 | używany |  |
| `molecule-2d` | Cząsteczka 2D — wiązania, kąty i wolne pary |  | ulepszyć | wiązania, kąty, wolne pary; 3,2 KB; lekcja: F13 Lewis, F15 polarność |
| `molecule-cv` | CV cząsteczki — wspólny model CHE.MOLECULE |  | zastąpiony | wspólny model cząsteczki; molecule3d-merged jest w F02, N01, REV01; zamiennik: `molecule3d-merged` |
| `molecule-electrons` | Elektrony i podpowłoki — wspólny model CHE.MOLECULE |  | ulepszyć | podpowłoki i walencyjne; scalić z molecule-orbitals; lekcja: C1c konfiguracje |
| `molecule-orbitals` | Orbitalne pudełka — obsada elektronowa |  | ulepszyć | pudełka orbitalne tylko dla wybranych atomów; prototyp R4 (Z ≤ 36, kolejność 4s/3d, powłoki K–N) jest lepszy; przenieść go do komponentu; lekcja: C1c konfiguracje |
| `molecule3d-merged` | Model 3D cząsteczek — scalony model + geometria + klik atomu | F02, N01, REV01 | używany |  |
| `n01-doswiadczenia-v01` | Pracownia: doświadczenia z tlenkami | N01 | używany |  |
| `n01-konstruktor-v01` | Konstruktor wzoru tlenku (W–K–S–K) i sprawdzanie wzoru | N01, REV01 | używany |  |
| `n01-reaktor-v01` | Co powstanie? Tlenek + woda / kwas / zasada — przewiduj, potem sprawdź | N01 | używany |  |
| `n01-spalanie-v01` | Otrzymywanie tlenków: spalanie pierwiastków i paliw | N01 | używany |  |
| `n01-tlenki-v01` | Tlenek — trzy pytania: charakter, woda, kwas / zasada | N01 | używany |  |
| `n01-trend-v01` | Trend charakteru tlenków: w okresie i wg stopnia utlenienia | N01 | używany |  |
| `n02-doswiadczenia-v01` | Pracownia: doświadczenia z wodorotlenkami | N02 | używany |  |
| `n02-dysocjacja-v01` | Rozpuszczanie i dysocjacja wodorotlenków — jony, hydratacja, efekt cieplny | N02 | używany |  |
| `n02-otrzymywanie-v01` | Otrzymywanie wodorotlenków — trzy metody i mapa przemian | N02 | używany |  |
| `n02-przeglad-v01` | Wodorotlenki — rozpuszczalność, barwa osadu, odczyn i otrzymywanie | N02 | używany |  |
| `n02-reaktor-v01` | Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź | N02 | używany |  |
| `n02-stracanie-v01` | Laboratorium jonowe — strącanie wodorotlenków (model cząsteczkowy) | N02 | używany |  |
| `n02-wzory-v01` | Wzór wodorotlenku: kation + OH⁻ — bilans ładunków, nawias, modele | N02, REV01 | używany |  |
| `n02-zobojetnianie-v01` | Zobojętnianie — licznik moli, pH, wskaźniki i jony H⁺ + OH⁻ → H₂O | N02 | używany |  |
| `naming-table` | Wzór → nazwa → reszta → sól → moc |  | zastąpiony | tabela wzór→nazwa→reszta→sól→moc jest w kw-reszty-v01 (N03, N04); zamiennik: `kw-reszty-v01` |
| `neutralization` | Równania jonowe — cząsteczkowe, jonowe pełne, jonowe skrócone |  | zastąpiony | jeden zapis; rownania-jonowe-v01 ma wszystkie reakcje; prototyp R4 'npsw' dodaje probówkę i regułę NPSW; zamiennik: `rownania-jonowe-v01` |
| `obtaining-hcl-steps` | Otrzymywanie kwasu solnego — etapy |  | zastąpiony | etapy otrzymywania HCl; zamiennik: `reakcje-kwasu-v03` |
| `obtaining-three` | Trzy drogi otrzymywania kwasów |  | zastąpiony | trzy drogi otrzymywania kwasów; zamiennik: `reakcje-kwasu-v03` |
| `f05-izotopy-v01` | Konstruktor atomu: zmiana p/n/e → inny pierwiastek / izotop / jon + masa atomowa jako średnia ważona (rozszerzenia.js §8) | C1c, F05, REV01 | używany |  |
| `periodic-54` | Układ okresowy — pierwiastki 1–54, modele atomów, tlenki; **tryby F06** (rozszerzenia.js §9): okres i grupa, blok s/p/d, e⁻ walencyjne, promień kowalencyjny, I energia jonizacji, karta „adres → elektrony → przewidywanie”; stan testowy `host._st.set(symbol, tryb)` | F04, F06, N01, REV01 | używany |  |
| `ph-indicators-v03` | Panel pH — wskaźniki, roztwory, drabinka · v0.05 | N02, N03, N05 | używany |  |
| `ph-ladder` | Obliczanie pH — od stężenia do pH |  | rozszerzony | obliczanie pH od stężenia (√(Ka·c)); poza zakresem LKO |
| `reaction` | Reakcja |  | narzędzie | widok danych centralnych (reakcja) |
| `reakcje-kwasu-v03` | Reakcje kwasów — zlewka modułowa · CHE.LAB v1.02 | N03 | używany |  |
| `rownania-jonowe-v01` | Równania jonowe — wszystkie reakcje z silnika | C1c, J03, N02, N03, N04 | używany |  |
| `safety` | Bezpieczeństwo — pierwsza pomoc i zasady |  | kandydat | pierwsza pomoc i zasady BHP; lekcja: C4 doświadczenia zbiorczo, LAB |
| `sole-doswiadczenia-v01` | Pracownia: doświadczenia z solami | N04 | używany |  |
| `species-v01` | Formy kwasu a pH — diagram rozkładu · v0.01 |  | rozszerzony | diagram rozkładu form kwasu a pH |
| `stech-kalkulator-v01` | Kalkulator stechiometryczny — masa, mole, objętość gazu, odczynnik limitujący | C2m, C3, N01, N04, R07 | używany |  |
| `substance` | Substancja |  | narzędzie | widok danych centralnych (substancja) |
| `tabela-rozpuszczalnosci-v01` | Tabela rozpuszczalności (20 °C) | C1c, J03, N02, N03, N04, REV01 | używany |  |
| `timeline` | Historia pojęcia kwasu — 5 scen |  | ciekawostka | historia pojęcia kwasu, 5 scen; lekcja: N03 |
| `titration-merged` | Titracja — scalony model: typ + wskaźnik + krzywa + kolba | N03 | używany |  |
| `n05-wodorki-v01` | Mapa wodorków — typ, rola wodoru, właściwości | C1c, N05 | używany |  |
| `n05-trendy-v01` | Temperatury wrzenia wodorków — wiązania wodorowe | C1c, N05 | używany |  |
| `n05-doswiadczenia-v01` | Pracownia: doświadczenia z wodorkami | N05 | używany |  |
| `f09-trzy-liczby-v01` | Ładunek, wartościowość, stopień utlenienia — ta sama drobina, trzy pytania |  | czeka | lekcja: F09 |
| `f10-energia-h2-v01` | Energia dwóch atomów wodoru — skąd się bierze wiązanie |  | czeka | lekcja: F10 |
| `f15-dipol-v01` | Wektory dipola — polarność wiązań a polarność cząsteczki |  | czeka | lekcja: F15 |
| `f17-bilans-v01` | Bilans równania reakcji — atomy i ładunek |  | czeka | lekcja: F17 |
| `fiz02-obwod-v01` | Obwód z dwiema żarówkami — szeregowo i równolegle |  | czeka | lekcja: FIZ-02 |
| `f01-doswiadczenia-v01` |  | F01 | używany |  |
| `f03-rozdzielanie-v01` |  | F03 | używany |  |
| `id-modelu-v01` |  | LEKCJA | używany |  |

Nieużyte bez oceny: brak

## Lekcje gotowe bez wizualizacji — co wstawić

| lekcja | propozycja z istniejących |
|---|---|
| C1c_konfiguracje_elektronowe | ZAMKNIĘTE 2026-10-19: klocek `konfiguracje` (Z ≤ 36, suwak, pudełka orbitali, powłoki K–N) wstawiony w lekcji; poza zakresem grupy 3–12 oznaczone. |
| C1c_kwasy_zasady_sole | ZAMKNIĘTE 2026-10-19: `acid-game` wstawiony (z @opis); pozostałe modele już są. Schemat dróg do NaOH — plan komponentu (diagram-dróg), nie zbudowany. |
| C1c_wodorki_typy_reakcji | ZAMKNIĘTE 2026-10-19: `energy-profile` wstawiony przed „Przeglądem typów reakcji”; `bilans-rownania` przy syntezie HCl i NH₃. |
| C1c_masy_sklad_procentowy | wstawione: f05-izotopy-v01 |
| C2m_mol_masa_molowa | CZĘŚCIOWO: `kalkulator-mola` (m, n, M, N, V) dla 5 wybranych substancji; dowolna M poza listą — otwarte (wymaga widoku/opcji z prototypu R4 „mol”, do decyzji Sonneta). |
| C2w_wzor_elementarny_rzeczywisty | wstawione: sole-doswiadczenia-v01 cuso4Hydrate (oznaczone poza zakresem) |
| C3_rownania_i_obliczenia_z_rownan | wstawione: stech-kalkulator-v01 |
| C4_doswiadczenia_zbiorczo | safety, lab-stations-v102, pracownie n02/sole/kw-doswiadczenia |
| J03_rownania_jonowe_i_stracanie | wstawione: tabela-rozpuszczalnosci-v01, rownania-jonowe-v01 |
| R07_stechiometria_z_nadmiarem | wstawione: stech-kalkulator-v01 |
| X04_szereg_aktywnosci_metali | wstawione: kw-szereg-metali-v01 |

## Elementy gfx (szczegóły: `engine/src/gfx/KATALOG.md`)

Efekty, naczynia i reakcje to warstwy wspólne silnika (panel efektów i sceny je podpinają), dlatego nie oceniamy ich jako „nieużytych” w lekcjach.

| przedmiot / rodzaj | liczba | KB |
|---|---|---|
| chemia / efekty | 25 | 22.4 |
| chemia / naczynia | 34 | 6.2 |
| chemia / reakcje | 60 | 11.1 |
| chemia / sceny | 9 | 15.5 |
| chemia / widoki | 27 | 95.7 |
| fizyka / efekty | 1 | 0.4 |
| fizyka / naczynia | 6 | 1.3 |
| fizyka / widoki | 5 | 25.2 |
| wspolne / efekty | 5 | 3.3 |
| wspolne / naczynia | 2 | 0.4 |
| wspolne / widoki | 1 | 4.5 |
