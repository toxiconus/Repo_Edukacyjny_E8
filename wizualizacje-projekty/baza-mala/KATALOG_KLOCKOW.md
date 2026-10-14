# Katalog klocków — baza mała E8

Wygenerowano: 2026-10-14 przez `wizualizacje-projekty/narzedzia/zbuduj_baze_mala.py`. **Nie edytować ręcznie** — źródłem jest duża baza (`chemia/che-modular/engine`, `biologia/bio`, `polski/szablon`).

Ta paczka zawiera kopie tego, co już działa w lekcjach. Zewnętrzny model może z niej wziąć gotowy element zamiast budować go od zera. Spis braków: `BRAKI_WIZUALIZACJI.md`.

## 1. Mapa paczki

| Folder | Zawartość | Rozmiar |
|---|---|---|
| `klocki` | kopia folderu | 109 KB |
| `klocki/lite` | kopia folderu | 36 KB |
| `gfx` | kopia folderu | 720 KB |
| `tablice` | kopia folderu | 1612 KB |
| `biblioteki/chemia/rozszerzenia.js` | kopia pliku | 129 KB |
| `biblioteki/chemia/KATALOG_MODELI.md` | kopia pliku | 12 KB |
| `biblioteki/polski/pol-viz.js` | kopia pliku | 21 KB |
| `biblioteki/polski/POL_KATALOG_GRAFIK.md` | kopia pliku | 1 KB |
| `biblioteki/biologia/wizualizacje` | kopia folderu | 299 KB |
| `biblioteki/biologia/BIO_KATALOG.md` | kopia pliku | 13 KB |

## 2. Klocki laboratoryjne (`klocki/`) — mała baza

| Plik | Co zawiera |
|---|---|
| `klocki.js` | rejestr i montaż (zawsze) |
| `zlewka.js` | zlewka z cieczą i bąbelkami |
| `plomien.js` | próba płomieniowa (barwa wg metalu) |
| `metal_woda.js` | metal + woda: H₂ i fenoloftaleina |
| `palenie.js` | palenie metali: Mg, Na, K (barwa i iskry) |
| `uklad_okresowy.js` | mini układ okresowy, klik w grupę |
| `probowki.js` | statyw z probówkami (1–4 metale) |
| `pomocnicze.js` | helpery, pętla animacji, wybór symbolu |
| `dane/pierwiastki.js` | dane pierwiastków I i II grupy (barwy, reaktywność) |
| `znaki.js` | znaki promieniowania i zakazu |
| `palniki.js` | palniki obok siebie (1–4 pierwiastki) |
| `EFEKTY.md` | dokumentacja efektów i danych |

Lekcje i pliki, które wymieniają (`manifest.json` → `lekcje`):

- **P01**: `klocki.js`, `pomocnicze.js`, `dane/pierwiastki.js`, `znaki.js`, `probowki.js`, `palniki.js`, `uklad_okresowy.js`

Lekkie silniki (`klocki/lite/`): `che-lite.js` (rejestr modeli), `rx-lite.js` (naczynia SVG), `stech-lite.js` (kalkulator stechiometryczny), `lab-dane.json` (dane zlewek).

## 3. Modele chemii (`biblioteki/chemia/`)

Pełna tabela z `KATALOG_MODELI.md` (id, tytuł w silniku, lekcje). Model wywołuje się w md: `@model <id> | Tytuł | opis`.

| id | tytuł w silniku | lekcje |
| `acid-calculator` | Kalkulator kwasu — pH, dysocjacja, formy · wspólny silnik |  |
| `acid-game` | Mini-gra: kwas, zasada, sól czy tlenek? |  |
| `acid-rain-v01` | Kwaśne deszcze — emisja → chmura → opad → jezioro, las, zabytki | N03 |
| `acid-table` | Tabela mocy kwasów |  |
| `beaker-prediction-enhanced` | Zlewka z predykcją — wybierz obserwację i sprawdź wynik |  |
| `carboxyl` | Grupa karboksylowa — który H jest kwaśny |  |
| `chain-scn` | Łańcuch przemian: pierwiastek → tlenek → kwas → sól | N01, N04 |
| `che-spojnosc-v01` | Spójność danych: silnik ↔ Atlas ↔ lekcje ↔ GFX |  |
| `che-test-silnika-v01` | Test silnika — audyty modułów, spójność i montowanie wszystkich widoków |  |
| `chem-profile10` | Profil chemiczny — pierwiastek → substancja → reakcje |  |
| `compound-cards` | Karty związków — HCl, H₂SO₄, CH₃COOH, H₂CO₃ |  |
| `conj-pairs` | Pary sprzężone i amfiprotyczność |  |
| `diss-three-levels` | Trzy poziomy zapisu dysocjacji |  |
| `energy-profile` | Termochemia — egzo i endo |  |
| `env-balance` | Bilans mas — wapnowanie jeziora · wspólny model |  |
| `equilibrium` | Równowaga HA ⇌ H⁺ + A⁻ — reguła przekory |  |
| `fiz-coulomb-v01` | Prawo Coulomba i linie pola elektrycznego | FIZ-01 |
| `fiz-elektroskop-v01` | Elektroskop — dotyk, indukcja i uziemienie | FIZ-01 |
| `fiz-elektryzowanie-v01` | Elektryzowanie przez tarcie — kto oddaje elektrony? | FIZ-01 |
| `fiz-ladunek-v01` | Bilans ładunku: dotyk, uziemienie, zasada zachowania ładunku, liczba elektronów | FIZ-01 |
| `fiz-przewodniki-v01` | Przewodnik czy izolator? Rozpływ ładunku wzdłuż pręta | FIZ-01 |
| `flashcards-deck` | Fiszki + ściąga — powtórka |  |
| `flow-egzamin-enhanced` | Algorytm egzaminacyjny — interaktywny schemat · v0.06 · 2026-10-01 |  |
| `flow-naming` | Jak nazwać kwas — algorytm |  |
| `gfx-scene-acidMetal` | Metal + kwas solny → wodór (próba „pyk!") | N03 |
| `gfx-scene-carbonate` | Węglan wapnia + kwas → CO₂ (woda wapienna) | N01 |
| `gfx-scene-conductivity` | Przewodzenie prądu: elektrolity i dysocjacja | FIZ-01, N03, N04 |
| `gfx-scene-dilution` | Rozcieńczanie kwasu: „kwas do wody!" | N03 |
| `gfx-scene-gasCollection` | Zbieranie gazu nad wodą |  |
| `gfx-scene-heating` | Ogrzewanie cieczy na trójnogu (palnik Bunsena) |  |
| `gfx-scene-indicator` | Wskaźnik kwasowo-zasadowy w roztworze |  |
| `gfx-scene-indicatorRack` | Wskaźnik w siedmiu roztworach (statyw) | N02, N03 |
| `gfx-scene-titration` | Zobojętnianie: miareczkowanie HCl zasadą NaOH | N03 |
| `hf-paradox` | Paradoks HF — dlaczego słaby |  |
| `ion-map-v02` | Mapa jonów — ładunek, pochodzenie, wykrywanie, sole | N04 |
| `ion-vs-diss` | Jonizacja vs dysocjacja — różnica |  |
| `ka-pka-table` | Ka, pKa, moc — tabela |  |
| `kinetics-v01` | Szybkość reakcji: metal + kwas solny (pomiar objętości H₂) |  |
| `kw-bufor-v01` | Bufor octanowy kontra czysta woda — dodawaj kwas i zasadę | N03 |
| `kw-doswiadczenia-v01` | Pracownia: doświadczenia z kwasami | N03 |
| `kw-dysocjacja-v01` | Dysocjacja kwasów na żywo — przeniesienie protonu H⁺ na wodę | FIZ-01, N03 |
| `kw-reszty-v01` | Kwas → reszta kwasowa → sole | N03, N04 |
| `kw-szereg-metali-v01` | Szereg aktywności: Mg, Zn, Fe, Cu w kwasie solnym | N03, N04 |
| `kw-wlasciwosci-v01` | Właściwości stężonych kwasów — pokazy | N03 |
| `lab-beaker-v102` | CHE.LAB — uniwersalna zlewka (pełny panel) · v1.02 |  |
| `lab-library-v001` | Biblioteka elementów laboratorium · v1.0 |  |
| `lab-stations-v102` | CHE.LAB — stanowiska (zlewka, gaz, chłodnica, palnik, miareczkowanie) · v1.02 |  |
| `legacy:timelineAnim` | timelineAnim |  |
| `live-cv` | LIVE CV chemii — atom → cząsteczka → substancja → reakcja |  |
| `mind-map` | Mapy myśli — MASTER · wybierz temat |  |
| `molecule-2d` | Cząsteczka 2D — wiązania, kąty i wolne pary |  |
| `molecule-cv` | CV cząsteczki — wspólny model CHE.MOLECULE |  |
| `molecule-electrons` | Elektrony i podpowłoki — wspólny model CHE.MOLECULE |  |
| `molecule-orbitals` | Orbitalne pudełka — obsada elektronowa |  |
| `molecule3d-merged` | Model 3D cząsteczek — scalony model + geometria + klik atomu | N01 |
| `n01-doswiadczenia-v01` | Pracownia: doświadczenia z tlenkami | N01 |
| `n01-konstruktor-v01` | Konstruktor wzoru tlenku (W–K–S–K) i sprawdzanie wzoru | N01 |
| `n01-reaktor-v01` | Co powstanie? Tlenek + woda / kwas / zasada — przewiduj, potem sprawdź | N01 |
| `n01-spalanie-v01` | Otrzymywanie tlenków: spalanie pierwiastków i paliw | N01 |
| `n01-tlenki-v01` | Tlenek — trzy pytania: charakter, woda, kwas / zasada | N01 |
| `n01-trend-v01` | Trend charakteru tlenków: w okresie i wg stopnia utlenienia | N01 |
| `n02-doswiadczenia-v01` | Pracownia: doświadczenia z wodorotlenkami | N02 |
| `n02-dysocjacja-v01` | Rozpuszczanie i dysocjacja wodorotlenków — jony, hydratacja, efekt cieplny | N02 |
| `n02-otrzymywanie-v01` | Otrzymywanie wodorotlenków — trzy metody i mapa przemian | N02 |
| `n02-przeglad-v01` | Wodorotlenki — rozpuszczalność, barwa osadu, odczyn i otrzymywanie | N02 |
| `n02-reaktor-v01` | Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź | N02 |
| `n02-stracanie-v01` | Laboratorium jonowe — strącanie wodorotlenków (model cząsteczkowy) | N02 |
| `n02-wzory-v01` | Wzór wodorotlenku: kation + OH⁻ — bilans ładunków, nawias, modele | N02 |
| `n02-zobojetnianie-v01` | Zobojętnianie — licznik moli, pH, wskaźniki i jony H⁺ + OH⁻ → H₂O | N02 |
| `j03-osady-v01` | Dwie probówki, dwie sole — czy wytrąci się osad? (tabela R/T/N, barwa osadu, równanie jonowe) | J03 |
| `naming-table` | Wzór → nazwa → reszta → sól → moc |  |
| `neutralization` | Równania jonowe — cząsteczkowe, jonowe pełne, jonowe skrócone |  |
| `obtaining-hcl-steps` | Otrzymywanie kwasu solnego — etapy |  |
| `obtaining-three` | Trzy drogi otrzymywania kwasów |  |
| `atomBohr` (komponent canvas, `CHE.LAB.atomBohr`, `.anim`) | Rysunek atomu z atlasu (bohr `_anon_004`) bez stanu atlasu: jądro p/n, powłoki „K · 2/2”, elektrony wewn./walencyjne, opcjonalnie `cfg` podpowłok (engine/src/dodatki/atlas-gfx.js) | F05, F07, atlas (po podmianie) |
| `orbitalCloud` (komponent canvas, `CHE.LAB.orbitalCloud`) | Chmura orbitalna z atlasu: `{sub:'2p', type:'pz'|'s'|'dz2'|'dxy', zoom}`; ψ>0/ψ<0, węzły (engine/src/dodatki/atlas-gfx.js) | atlas (używa), F07+ |
| `atomBohr` (komponent, `CHE.LAB.atomBohr` / `CHE_GFX.atomBohr`) | Model atomu z atlasu (canvas): jądro p/n, obręcz neutronów ponad najczęstszy izotop, powłoki K–Q (bez `cfg` 2,8,8), zoom, lupa, podświetlenia; `.anim()` (engine/src/komponenty/atlas-gfx.js) — `atomSVG` usunięty 2026-10-09 | atlas, F05, F07 |
| `f05-izotopy-v01` | Konstruktor atomu: zmiana p/n/e → inny pierwiastek / izotop / jon + masa atomowa jako średnia ważona (rozszerzenia.js §8) | F05 |
| `periodic-54` | Układ okresowy — pierwiastki 1–54, modele atomów, tlenki; **tryby F06** (rozszerzenia.js §9): okres i grupa, blok s/p/d, e⁻ walencyjne, promień kowalencyjny, I energia jonizacji, karta „adres → elektrony → przewidywanie”; stan testowy `host._st.set(symbol, tryb)` | N01, F06 |
| `ph-indicators-v03` | Panel pH — wskaźniki, roztwory, drabinka · v0.05 | N02, N03 |
| `ph-ladder` | Obliczanie pH — od stężenia do pH |  |
| `reaction` | Reakcja |  |
| `reakcje-kwasu-v03` | Reakcje kwasów — zlewka modułowa · CHE.LAB v1.02 | N03 |
| `rownania-jonowe-v01` | Równania jonowe — wszystkie reakcje z silnika | N02, N03, N04 |
| `safety` | Bezpieczeństwo — pierwsza pomoc i zasady |  |
| `sole-doswiadczenia-v01` | Pracownia: doświadczenia z solami | N04 |
| `species-v01` | Formy kwasu a pH — diagram rozkładu · v0.01 |  |
| `stech-kalkulator-v01` | Kalkulator stechiometryczny — masa, mole, objętość gazu, odczynnik limitujący | N01, N04 |
| `substance` | Substancja |  |
| `tabela-rozpuszczalnosci-v01` | Tabela rozpuszczalności (20 °C) | N02, N03, N04 |
| `timeline` | Historia pojęcia kwasu — 5 scen |  |
| `titration-merged` | Titracja — scalony model: typ + wskaźnik + krzywa + kolba | N03 |
| id | tytuł | lekcje |
| `n05-wodorki-v01` | Mapa wodorków — typ, rola wodoru, właściwości | N05 |
| `n05-trendy-v01` | Temperatury wrzenia wodorków — wiązania wodorowe | N05 |
| `n05-doswiadczenia-v01` | Pracownia: doświadczenia z wodorkami | N05 |
| `f09-trzy-liczby-v01` | Ładunek, wartościowość, stopień utlenienia — ta sama drobina, trzy pytania | (F09) |
| `f10-energia-h2-v01` | Energia dwóch atomów wodoru — skąd się bierze wiązanie | (F10) |
| `f15-dipol-v01` | Wektory dipola — polarność wiązań a polarność cząsteczki | (F15) |
| `f17-bilans-v01` | Bilans równania reakcji — atomy i ładunek | (F17) |
| `r03-krzyz-v01` | Reguła krzyżowa — mieszanie roztworów: krzyż, huśtawka mas, części → gramy, kontrola bilansem | R03A |
| `fiz02-obwod-v01` | Obwód z dwiema żarówkami — szeregowo i równolegle | (FIZ-02) |

Sceny i naczynia GFX (`gfx/`): pełny spis w `gfx/KATALOG.md`, indeks maszynowy w `gfx/index.json`. Sceny laboratoryjne mają prefiks `gfx-scene-`.

## 4. Biologia (`biblioteki/biologia/`)

Każda grafika to osobny plik `wizualizacje/<id>.js`. Spis z `BIO_KATALOG.md`:

| id | plik | Co pokazuje | Opcje | Animacja | Lekcje |
| cykl-miesiaczkowy | `szablon/wizualizacje/cykl-miesiaczkowy.js` | cykl 1–28 dni: jajnik (pęcherzyk → owulacja → ciałko żółte), błona śluzowa macicy, estrogeny i progesteron; suwak dnia | dzien="1–28" | nie | U11 |
| dobor-naturalny | `szablon/wizualizacje/dobor-naturalny.js` | symulacja doboru: ćmy jasne/ciemne na korze (przełącznik tła) albo bakterie wrażliwe/oporne + antybiotyk; pokolenia, wykres udziału cechy | start="cmy\|bakterie" | nie | — |
| drabina | `szablon/wizualizacje/drabina.js` | dwie nici antyrównoległe, cukry, fosforany, pary, wiązania | seq="ATGCCA" | nie | L010 |
| droga-pokarmu | `szablon/wizualizacje/droga-pokarmu.js` | schemat układu pokarmowego: narządy przewodu i gruczoły (klik = funkcje), „krok” prowadzi kęs 9 odcinkami, wybór składnika (skrobia, białka, tłuszcze, woda i sole, błonnik) podświetla stacje trawienia i wchłaniania | — | tak | U03 |
| droga-zarodka | `szablon/wizualizacje/droga-zarodka.js` | od owulacji do zagnieżdżenia: jajnik, jajowód, macica + powiększenie komórek (10 etapów), animacja do przodu | krok="0–9" | tak | U11 |
| endosymbioza | `szablon/wizualizacje/endosymbioza.js` | teoria endosymbiozy w 4 krokach (pochłonięcie bakterii i sinicy → 2 błony → mitochondrium/chloroplast) + karty argumentów obserwacja → wniosek | — | tak | — |
| energia-glukozy | `szablon/wizualizacje/energia-glukozy.js` | oddychanie tlenowe vs fermentacja alkoholowa i mlekowa: warunki, miejsce, produkty, słupki ATP (ok. 38 / 2 / 2) | start="tl\|al\|ml" | nie | REV01 |
| energia-materia | `szablon/wizualizacje/energia-materia.js` | ekosystem: przepływ energii (Słońce → poziomy, ciepło, ok. 10%) i obieg materii (pętla przez destruentów i związki mineralne); przełącznik warstw | start="materia\|oba" | nie | — |
| enzym-warunki | `szablon/wizualizacje/enzym-warunki.js` | aktywność enzymu: tryb temperatury (amylaza, denaturacja) i pH (pepsyna, amylaza, trypsyna), suwak, probówka z Lugolem | tryb="T"\|"pH" | tak | U03 |
| etapy-zycia | `szablon/wizualizacje/etapy-zycia.js` | pionowa oś czasu 10 okresów życia (zarodkowy → starość) z wiekiem orientacyjnym, klik = cechy | start="zarodkowy|…|starosc" | nie | U11 |
| eutrofizacja | `szablon/wizualizacje/eutrofizacja.js` | jezioro w 5 etapach (suwak): biogeny z pól → zakwit → rozkład przez bakterie → przyducha; paski tlenu i przejrzystości | etap="0–4" | nie | — |
| fotosynteza-oddychanie | `szablon/wizualizacje/fotosynteza-oddychanie.js` | komórka liścia: chloroplast + mitochondrium, suwak światła → bilans gazów (noc, równowaga, przewaga fotosyntezy) | swiatlo="0–100" | nie | REV01 |
| gdzie-dna | `szablon/wizualizacje/gdzie-dna.js` | jądro z jąderkiem, mitochondria (grzebienie, mtDNA), cpDNA, nukleoid, plazmidy, rybosomy, erytrocyt (góra + profil) i leukocyt | — | nie | L010 |
| glukoza-wykres | `szablon/wizualizacje/glukoza-wykres.js` | stężenie glukozy po posiłku: osoba zdrowa vs z cukrzycą (dane przykładowe), zakres na czczo, klik w punkt = opis | — | nie | H01, U10 |
| gruczoly-mapa | `szablon/wizualizacje/gruczoly-mapa.js` | sylwetka z gruczołami dokrewnymi (podwzgórze, przysadka, szyszynka, tarczyca, przytarczyce, grasica, nadnercza, trzustka, jajniki/jądra), klik = hormony i skutki; autoprzegląd | plec="k"\|"m" | tak | U10 |
| hardy-weinberg | `szablon/wizualizacje/hardy-weinberg.js` | suwak q albo częstości chorych q² → p, p², 2pq, q² krok po kroku, słupki genotypów w populacji 10 000 | — | nie | — |
| helisa | `szablon/wizualizacje/helisa.js` | suwak drabina ↔ helisa, 2 nm, 3,4 nm / 10 par | seq, skret="0–100" | nie | L010 |
| homeostaza | `szablon/wizualizacje/homeostaza.js` | ujemne sprzężenie zwrotne: glukoza (insulina/glukagon, tryb cukrzycy t. 1) albo temperatura (pocenie/dreszcze); wykres z pasem normy + pętla regulacji | start="temperatura" | nie | — |
| klonowanie-genu | `szablon/wizualizacje/klonowanie-genu.js` | klonowanie genu w 5 krokach: wycięcie genu enzymem → otwarcie plazmidu tym samym enzymem → wklejenie ligazą → wgranie do bakterii → produkcja białka; animacja do przodu | krok="0–4" | tak | L022 |
| klucz-kregowce | `szablon/wizualizacje/klucz-kregowce.js` | klucz dwudzielny tak/nie do 5 gromad kręgowców + tryb „rozpoznaj zwierzę” (delfin, nietoperz, pingwin…) | — | nie | REV02 |
| kod-genetyczny | `szablon/wizualizacje/kod-genetyczny.js` | DNA (nić kodująca + matrycowa) → mRNA → aminokwasy; klik w zasadę = mutacja (cicha, zmiany sensu, nonsensowna, utrata START) | seq="ATG…" | nie | L020 |
| komorka-nakladki | `szablon/wizualizacje/komorka-nakladki.js` | komórka: wspólny rdzeń + nakładki (jądro, mitochondria, chloroplasty, wakuola, ściana, plazmid); przyciski typów i warstw, rozpoznanie typu | start="rdzen\|bakteria\|zwierzeca\|roslinna\|grzyb" | nie | REV01 |
| konczyny-homologiczne | `szablon/wizualizacje/konczyny-homologiczne.js` | kończyny przednie człowieka, kreta, wieloryba, nietoperza — te same grupy kości w kolorach (homologia); tryb analogii: skrzydło nietoperza vs owada | start="analogia" | nie | — |
| kontrola-podzialow | `szablon/wizualizacje/kontrola-podzialow.js` | model tkanki 70 komórek: dawki UV, naprawa DNA i apoptoza (wł./wył.), komórka z 3 mutacjami dzieli się bez kontroli → guz; liczniki | — | nie | — |
| kosmek-jelitowy | `szablon/wizualizacje/kosmek-jelitowy.js` | kosmek: nabłonek z mikrokosmkami, kapilary (→ żyła wrotna), naczynie chłonne; animacja drogi glukozy, aminokwasów, tłuszczów, wody do krwi lub limfy | — | tak | U03 |
| krazenie-obiegi | `szablon/wizualizacje/krazenie-obiegi.js` | serce od przodu (4 jamy, zastawki trójdzielna i dwudzielna), obieg mały i duży, krew odtlenowana / utlenowana; „krok” prowadzi drogą krwi (12 miejsc), przyciski podświetlają jeden obieg | start="maly\|duzy" | tak | U04 |
| lancuch | `szablon/wizualizacje/lancuch.js` | łańcuch kroków A → B → C (+ czynniki z boku) | kroki="A\|opis > B", boki="x; y", wyroznij="n", pion="nie", ikony="nie" (ikony dobierane same: DNA/gen, RNA, białko, funkcja, cecha) | nie | REV01, L010 |
| lozysko-wymiana | `szablon/wizualizacje/lozysko-wymiana.js` | łożysko: krew matki opływa kosmki płodu, strzałki wymiany O₂/składników i CO₂/produktów przemiany, pępowina (2 tętnice, 1 żyła), klik = opis | — | nie | U11 |
| luk-odruchowy | `szablon/wizualizacje/luk-odruchowy.js` | łuk odruchowy cofnięcia ręki: receptor, neuron czuciowy (zwój), pośredniczący w istocie szarej, ruchowy, mięsień, droga do mózgu; „krok” z impulsem; przełącznik przerwania drogi czuciowej/ruchowej | — | tak | U08 |
| mikroskop-model | `szablon/wizualizacje/mikroskop-model.js` | ta sama komórka: obraz z mikroskopu świetlnego (×400, barwienie) vs model szkolny z podpisami | start="mikroskop\|model" | nie | REV01 |
| nefron | `szablon/wizualizacje/nefron.js` | nefron: kłębuszek, torebka, kanalik, pętla, przewód zbiorczy, kapilary; animacja drogi 6 substancji (filtracja / wchłanianie zwrotne / mocz), przełącznik ADH z ilością i barwą moczu | — | tak | U06 |
| nukleotyd | `szablon/wizualizacje/nukleotyd.js` | fosforan + deoksyryboza + zasada, 1′/3′/5′ | zasada="A" | nie | L010 |
| od-organizmu-do-genu | `szablon/wizualizacje/od-organizmu-do-genu.js` | organizm → komórka → jądro → chromosom → DNA → gen | start="gen" | nie | L010 |
| oko-akomodacja | `szablon/wizualizacje/oko-akomodacja.js` | przekrój oka (klik = opis), akomodacja blisko/daleko z promieniami, krótko- i dalekowzroczność z korekcją okularami | tryb="budowa"\|"akom"\|"wady" | tak | U08 |
| pary-zasad | `szablon/wizualizacje/pary-zasad.js` | A–T, G–C oraz błędne A–G, C–T, A–C (pierścienie, szerokość, wiązania) | — | nie | L010 |
| podzial-komorki | `szablon/wizualizacje/podzial-komorki.js` | mitoza i mejoza krok po kroku (model 2n = 4, homologi czerwone/niebieskie, chromatydy, crossing-over, wrzeciono); liczby chromosomów i chromatyd w każdej fazie (model i człowiek) | start="mitoza\|mejoza" | tak | — |
| pojemnosc | `szablon/wizualizacje/pojemnosc.js` | 4ⁿ vs 3ⁿ, suwak długości | n | nie | L010 |
| poziomy-dna | `szablon/wizualizacje/poziomy-dna.js` | chromosom → histony → odcinek DNA (gen, regulator, niekodujące) | — | nie | L010 |
| proba-kontrolna | `szablon/wizualizacje/proba-kontrolna.js` | planowanie doświadczenia: przełączniki warunków w próbie badawczej i kontrolnej, ocena planu (jeden czynnik) | start="mocz\|drozdze" | nie | REV01 |
| przeobrazenie-owadow | `szablon/wizualizacje/przeobrazenie-owadow.js` | przeobrażenie zupełne (motyl, z poczwarką) i niezupełne (konik polny, bez poczwarki); klik = opis etapu | — | nie | REV02 |
| przeobrazenie-plaza | `szablon/wizualizacje/przeobrazenie-plaza.js` | rozwój złożony żaby: skrzek → kijanka → kijanka z kończynami → młoda żaba → żaba; suwak, oddychanie i środowisko | etap="0–4" | nie | REV02 |
| punnett | `szablon/wizualizacje/punnett.js` | szachownica Punnetta: A/a (Mendel), grupy krwi AB0, hemofilia (X); fenotypy i genotypy w % | tryb="A\|K\|X" | nie | L019 |
| relacje-ekologiczne | `szablon/wizualizacje/relacje-ekologiczne.js` | zależności międzygatunkowe jako znaki wpływu (+/−/0): konkurencja, drapieżnictwo, roślinożerność, pasożytnictwo, mutualizm, komensalizm; tryb „rozpoznaj relację” (12 przykładów, wynik) | start="quiz" | nie | — |
| sekwencje | `szablon/wizualizacje/sekwencje.js` | dwie sekwencje, różnice zaznaczone | a, b | nie | L010 |
| siec-troficzna | `szablon/wizualizacje/siec-troficzna.js` | sieć troficzna lasu: co je / kto go je, poziomy, łańcuchy; tryb „usuń gatunek” | — | nie | — |
| skora-przekroj | `szablon/wizualizacje/skora-przekroj.js` | przekrój skóry: naskórek (rogowa, melanina), skóra właściwa (naczynia, receptory, gruczoł potowy i łojowy, mieszek, włos, mięsień przywłosowy), tkanka podskórna; klik = opis | — | nie | U01 |
| sprzezenie-zwrotne | `szablon/wizualizacje/sprzezenie-zwrotne.js` | pętla bodziec → receptor → ośrodek → efektor → odpowiedź; 7 sytuacji (temperatura ↑↓, glukoza ↑↓, woda za mało/za dużo, poród — dodatnie); „krok”, wskaźnik parametru wobec normy | start="tg\|td\|gg\|gd\|wd\|wg\|po" | tak | H01, U10 |
| staw-antagonizm | `szablon/wizualizacje/staw-antagonizm.js` | staw łokciowy: suwak kąta, biceps (zginacz) i triceps (prostownik) grubieją/cienieją przy skurczu, przyczepy, opis ruchu | kat="60" | tak | U01 |
| synapsa | `szablon/wizualizacje/synapsa.js` | synapsa chemiczna w 5 krokach: impuls → pęcherzyki → neuroprzekaźnik w szczelinie → receptory → nowy impuls; animacja do przodu | krok="0–4" | tak | U08 |
| szuflady-cech | `szablon/wizualizacje/szuflady-cech.js` | sortowanie: dziedziczna / nabyta / wieloczynnikowa | cechy="nazwa:d\|wyjaśnienie; …" | nie | L010 |
| transfuzja | `szablon/wizualizacje/transfuzja.js` | zgodność dawca → biorca (ABO + Rh): antygeny na krwinkach, przeciwciała w osoczu, aglutynacja, uczulenie Rh−; tabela 4 × 4 | dawca="A", biorca="B" | nie | U04 |
| transport-blona | `szablon/wizualizacje/transport-blona.js` | przekrój błony: dyfuzja prosta, ułatwiona, transport aktywny (ATP), osmoza + tabela porównawcza | start="dp\|du\|ta\|os" | nie | REV01 |
| trener-nici | `szablon/wizualizacje/trener-nici.js` | dopisywanie nici DNA→DNA / DNA→RNA | seq, tryb="rna" | nie | L010 |
| ucho-droga | `szablon/wizualizacje/ucho-droga.js` | ucho zewnętrzne, środkowe, wewnętrzne (klik = opis), „krok” prowadzi dźwięk od małżowiny do nerwu | — | tak | U08 |
| uklad-rozrodczy | `szablon/wizualizacje/uklad-rozrodczy.js` | schemat męskiego i żeńskiego układu rozrodczego (przełącznik), klik = funkcja narządu; zaznaczone miejsce zapłodnienia | start="meski|zenski" | nie | U11 |
| wdech-wydech | `szablon/wizualizacje/wdech-wydech.js` | klatka piersiowa: przepona, żebra, płuca; animacja wdechu i wydechu, objętość klatki i ciśnienie w płucach, kroki obu faz | — | tak | U06 |
| wirus-bakteria | `szablon/wizualizacje/wirus-bakteria.js` | wirus (kapsyd, DNA/RNA, osłonka) obok bakterii (ściana, błona, rybosomy, nukleoid, plazmid, rzęska); klik = opis; antybiotyki | — | nie | REV02 |
| wymiana-gazowa | `szablon/wizualizacje/wymiana-gazowa.js` | dyfuzja O₂ i CO₂: tryb pęcherzyk–krew i krew–komórki, płynące erytrocyty, słupki ilości gazów, klik = opis (hemoglobina, transport CO₂) | tryb="pl"\|"tk" | tak | U06 |
| zrodla-zmiennosci | `szablon/wizualizacje/zrodla-zmiennosci.js` | losowanie gamet (3 pary chromosomów, 8 gamet, 64 kombinacje), zapłodnienie, crossing-over wł./wył., licznik różnych dzieci; człowiek 2²³ i ok. 70 bln | — | nie | — |

## 5. Polski (`biblioteki/polski/`)

Spis z `POL_KATALOG_GRAFIK.md`. Nowa grafika: `POL.define('id', {opis, mount(el, opt)})` w `pol-viz.js`.

| id | Co robi | Opcje | Lekcje |
| rozbior-zdania | trener: wybór części zdania (kolor + szkolne podkreślenie) i klikanie wyrazów; sprawdzenie, tabela pytań od wyrazu nadrzędnego, opis pułapki; 12 zdań (parafrazy lektur) | start="0–11" | G12 |
| wykres-zdania | wykres zdania pojedynczego (związek główny, określenia pod wyrazem nadrzędnym, pytania na liniach), odsłanianie krok po kroku; te same 12 zdań | start, krok="caly" | G12 |
| wykres-zlozonego | schemat blokowy zdania złożonego: współrzędne obok siebie ze strzałkami relacji (ale/więc/bezspójnikowe), podrzędne pod nadrzędnym ze strzałką-pytaniem; warianty: współrzędne, bezspójnikowe, mieszane | start (0–2) | G15 |

## 6. Tablice danych (`tablice/`)

Zbiory JSON z danymi referencyjnymi (pierwiastki, substancje, reakcje, rozpuszczalność itd.). Indeks z flagami i sumami kontrolnymi: `tablice/_indeks.json`.

| Plik | KB |
|---|---|
| `_indeks.json` | 15 |
| `edukacja.json` | 13 |
| `jadrowe.json` | 0 |
| `kwasy-zasady.json` | 21 |
| `nauka.json` | 6 |
| `organiczna.json` | 3 |
| `pierwiastki.json` | 481 |
| `reakcje.json` | 94 |
| `rozpuszczalnosc.json` | 6 |
| `substancje.json` | 131 |
| `termo-redoks.json` | 2 |
| `weryfikacja.json` | 835 |

## 7. Gfx — liczba wpisów

Wpisów w `gfx/index.json`: **176**. Podział: chemia 156, fizyka 12, wspolne 8.
