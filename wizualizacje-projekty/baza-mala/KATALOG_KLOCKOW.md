# Katalog klocków — baza mała E8

Wygenerowano: 2026-10-20 przez `wizualizacje-projekty/narzedzia/zbuduj_baze_mala.py`. **Nie edytować ręcznie** — źródłem jest duża baza (`chemia/che-modular/engine`, `biologia/bio`, `polski/szablon`).

Ta paczka zawiera kopie tego, co już działa w lekcjach. Zewnętrzny model może z niej wziąć gotowy element zamiast budować go od zera. Spis braków: `BRAKI_WIZUALIZACJI.md`.

## 1. Mapa paczki

| Folder | Zawartość | Rozmiar |
|---|---|---|
| `klocki` | kopia folderu | 468 KB |
| `klocki/lite` | kopia folderu | 36 KB |
| `gfx` | kopia folderu | 729 KB |
| `tablice` | kopia folderu | 1612 KB |
| `biblioteki/chemia/rozszerzenia.js` | kopia pliku | 87 KB |
| `biblioteki/chemia/KATALOG_MODELI.md` | kopia pliku | 13 KB |
| `biblioteki/polski/pol-viz.js` | kopia pliku | 21 KB |
| `biblioteki/polski/POL_KATALOG_GRAFIK.md` | kopia pliku | 1 KB |
| `biblioteki/biologia/wizualizacje` | kopia folderu | 300 KB |
| `biblioteki/biologia/BIO_KATALOG.md` | kopia pliku | 10 KB |

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
| `krzywe_rozpuszczalnosci.js` | krzywe rozpuszczalności (g/100 g wody od T): trzy strefy, punkt (T, m); dane tabel A i B LKO-KRZYWE |
| `lancuch_przemian.js` | łańcuch lub obieg przemian: wzory + strzałki z literami reakcji (bez odpowiedzi) |
| `trojkat_przeliczen.js` | trójkąt konwersji m–n–N (wzor=mol) lub m–n–V (wzor=gaz) z operacjami ÷/× M, N_A, Vₘ |
| `probowki_odczyn.js` | probówki przed/po odczynniku: zmiana barwy, osad, pęcherzyki gazu; opcja tuby |
| `molekula_2d.js` | model cząsteczki 2D (SVG): kwas-octowy, eten, etanol; grupa do wyróżnienia; kwaśny H |
| `c2d_core.js` | chemia 2D (v3, moduł): parser SMILES, układ współrzędnych, geometria VSEPR, wzór i masa |
| `c2d_grupy.js` | wykrywanie grup funkcyjnych: COOH, ester, CHO, C=O, OH, eter, NH₂, NH, NR, X, C≡N, C=C, C≡C, Ar |
| `c2d_wzor.js` | rysunek 2D: szkielet (domyślnie), model kulkowy, kąty, wolne pary, ramki grup |
| `c2d_klocek.js` | klocek wzor-2d: wzór strukturalny z SMILES, opcja grupa=..., kulki, kat, pary |
| `palnik_gazowy.js` | palnik gazowy (metan): płomień, zlewka odwrócona z kroplami H₂O, kontrolna, woda wapienna (LKO-ORG01 §5) |
| `bilans_spalania.js` | bilans spalania całkowitego alkanu CₙH₂ₙ₊₂: współczynniki i bilans atomów C, H, O (LKO-ORG01 §2) |
| `c2d_prosta.js` | prosty renderer wzorów 2D (z molekula_prosta): wszystkie atomy, zygzak, ramki grup; domyślny dla wzor-2d |
| `probowki_wybor.js` | Wybór metali/odczynników: kilka probówek naraz z równaniami (zestawy: metale-hcl, stracanie, kwas-weglan) |
| `konfiguracje.js` | Konfiguracje elektronowe Z ≤ 36: suwak, pudełka orbitali, powłoki K–N, zapis pełny i skrócony |
| `kalkulator_mola.js` | Kalkulator mola: m, n, M, N, V gazu dla dowolnej substancji |
| `krzyzowka_mendla.js` | Szachownica Punnetta: jedna cecha i dihybryda 4×4, stosunek genotypów i fenotypów |
| `karta_bhp.js` | Karta BHP: zasady pracy w pracowni i pierwsza pomoc (rozwijane karty) |
| `sklad_procentowy.js` | Masa cząsteczkowa i skład procentowy wg wzoru (masy jak w lekcji C1c masy) |
| `bilans_rownania.js` | Dobieranie współczynników: przyciski −/+ i tabela bilansu atomów |
| `nadmiar_substratu.js` | Nadmiar substratu: suwaki mas, współczynniki przereagowania, paski, produkty |
| `naczynia.js` | Wspólna geometria i wygląd szkła (probówka) dla klocków probowki, probowki-odczyn |
| `haworth.js` | Wzór Hawortha: α/β-D-glukopiranoza i β-D-fruktofuranoza (przełączane chipami) |
| `estryfikacja.js` | Animacja estryfikacji: kwas + alkohol → ester + woda (pętla, autostart) |
| `petla_regulacji.js` | Pętla sprzężenia ujemnego z 5 elementów z krążącym impulsem (biologia) |
| `doswiadczenie.js` | Wspólny układ doświadczenia: cel, sprzęt, BHP, scena (inny klocek), równanie, obserwacje |
| `diagram_bohra.js` | Model Bohra atomu i jonu: jądro (p), powłoki K–N, suwak Z, oddawanie/przyjmowanie elektronu z animacją |
| `schemat_przemian.js` | Schemat dróg: kilka sposobów otrzymania tego samego typu substancji (substraty → strzałka → produkty), kliknięcie pokazuje uwagę |
| `zbieranie_gazu.js` | Zbieranie gazu: wylotem do góry, do dołu albo nad wodą (kolba, rurka, naczynie); werdykt z gęstością względną i rozpuszczalnością |
| `tabela_rozpuszczalnosci.js` | tabela rozpuszczalności R/T/N (20 °C), klik w komórkę: wzór, nazwa, rozpuszczalność |
| `rownania_jonowe.js` | równania jonowe: cząsteczkowy, jonowy pełny i skrócony dla 12 reakcji |
| `osady_dwie_sole.js` | dwie sole → czy powstaje osad (tabela rozpuszczalności, barwa osadu) |
| `izotopy.js` | konstruktor atomu (p, n, e), izotop/jon/pierwiastek, masa atomowa jako średnia ważona |
| `regula_krzyzowa.js` | reguła krzyżowa i huśtawka mas (mieszanie roztworów) |
| `model_widok.js` | mostek CHE.VIEW.define → klocek (dla modeli przeniesionych z rozszerzenia.js) |
| `z_f04_nuklid.js` | f04-nuklid-v01: trening odczytu zapisu nuklidu |
| `z_f02_czastki.js` | f02-czastki-v01: substancja czysta czy mieszanina (model cząsteczkowy) |
| `z_f02_magnes_fes.js` | f02-magnes-fes-v01: magnes, mieszanina Fe+S czy związek FeS |
| `z_n05_wodorki.js` | n05-wodorki-v01 (mapa wodorków) i n05-trendy-v01 (temperatury wrzenia) |
| `ui_klocki.js` | wspólne drobiazgi UI klocków HTML (przyciski, suwak, animacja w widoku) |
| `profil_energii.js` | profil energii reakcji (egzo/endo, katalizator) |
| `gra_klasyfikacja.js` | gra: kwas, zasada, sól czy tlenek |
| `jony_w_wodzie.js` | dysocjacja vs jonizacja, przeniesienie protonu, tester przewodnictwa |
| `fizyka_elektrostatyka.js` | elektrostatyka: elektryzowanie, przewodnik-izolator, kule-ladunek, elektroskop, prawo-coulomba, linie-pola |
| `chemia_wstep.js` | wstęp do chemii: lancuch-poziomow, zlewka-predykcja, mapa-mysli, czasteczki-3d, destylacja |
| `okresowy_tlenki.js` | układ okresowy 1–54 (tryby), konstruktor/detektor/reaktor tlenku, trend tlenków |

Lekcje i pliki, które wymieniają (`manifest.json` → `lekcje`):

- **P01**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `dane/pierwiastki.js`, `znaki.js`, `probowki.js`, `palniki.js`, `uklad_okresowy.js`
- **F06**: `klocki.js`, `pomocnicze.js`, `ui_klocki.js`, `naczynia.js`, `dane/pierwiastki.js`, `znaki.js`, `probowki.js`, `palniki.js`, `uklad_okresowy.js`, `karta_bhp.js`, `diagram_bohra.js`, `okresowy_tlenki.js`
- **F07**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `dane/pierwiastki.js`, `znaki.js`, `probowki.js`, `palniki.js`, `uklad_okresowy.js`
- **N03**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `dane/pierwiastki.js`, `znaki.js`, `probowki.js`, `palniki.js`, `uklad_okresowy.js`, `karta_bhp.js`, `schemat_przemian.js`
- **LKO-KRZYWE**: `klocki.js`, `pomocnicze.js`, `krzywe_rozpuszczalnosci.js`
- **LKO-A1**: `klocki.js`, `pomocnicze.js`, `lancuch_przemian.js`
- **LKO-METALE**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `metal_woda.js`, `lancuch_przemian.js`, `probowki_odczyn.js`
- **LKO-STECH**: `klocki.js`, `pomocnicze.js`, `trojkat_przeliczen.js`
- **LKO-ORG08**: `klocki.js`, `pomocnicze.js`, `trojkat_przeliczen.js`, `kalkulator_mola.js`, `zbieranie_gazu.js`, `karta_bhp.js`
- **LKO-ORG02**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `karta_bhp.js`
- **LKO-ORG04**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `karta_bhp.js`
- **LKO-PUŁAPKI-WAPNO**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`
- **LKO-ORG05**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `bilans_rownania.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `karta_bhp.js`
- **LKO-ORG03**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `karta_bhp.js`
- **LKO-ORG06**: `klocki.js`, `pomocnicze.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `estryfikacja.js`, `karta_bhp.js`
- **LKO-ORG01**: `klocki.js`, `pomocnicze.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `bilans_spalania.js`, `palnik_gazowy.js`, `karta_bhp.js`
- **LKO-ORG07**: `klocki.js`, `pomocnicze.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `haworth.js`, `karta_bhp.js`
- **X04**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `probowki_wybor.js`, `doswiadczenie.js`, `karta_bhp.js`
- **J03**: `klocki.js`, `pomocnicze.js`, `ui_klocki.js`, `naczynia.js`, `probowki_odczyn.js`, `probowki_wybor.js`, `doswiadczenie.js`, `karta_bhp.js`, `tabela_rozpuszczalnosci.js`, `rownania_jonowe.js`, `osady_dwie_sole.js`, `jony_w_wodzie.js`
- **C1c**: `klocki.js`, `pomocnicze.js`, `ui_klocki.js`, `naczynia.js`, `probowki_odczyn.js`, `probowki_wybor.js`, `c2d_core.js`, `c2d_grupy.js`, `c2d_wzor.js`, `c2d_prosta.js`, `c2d_klocek.js`, `konfiguracje.js`, `diagram_bohra.js`, `sklad_procentowy.js`, `doswiadczenie.js`, `karta_bhp.js`, `schemat_przemian.js`, `tabela_rozpuszczalnosci.js`, `rownania_jonowe.js`, `izotopy.js`, `model_widok.js`, `z_n05_wodorki.js`, `gra_klasyfikacja.js`, `profil_energii.js`
- **C2m**: `klocki.js`, `pomocnicze.js`, `trojkat_przeliczen.js`, `kalkulator_mola.js`
- **C4**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `probowki_wybor.js`, `karta_bhp.js`, `doswiadczenie.js`
- **B1b**: `klocki.js`, `pomocnicze.js`, `krzyzowka_mendla.js`
- **R03**: `klocki.js`, `pomocnicze.js`, `krzywe_rozpuszczalnosci.js`, `regula_krzyzowa.js`, `karta_bhp.js`
- **C2w**: `klocki.js`, `pomocnicze.js`, `naczynia.js`, `probowki_odczyn.js`, `karta_bhp.js`
- **C3**: `klocki.js`, `pomocnicze.js`, `bilans_rownania.js`
- **R07**: `klocki.js`, `pomocnicze.js`, `nadmiar_substratu.js`
- **B2c**: `klocki.js`, `pomocnicze.js`, `petla_regulacji.js`
- **B2e**: `klocki.js`, `pomocnicze.js`, `petla_regulacji.js`
- **B2g**: `klocki.js`, `pomocnicze.js`, `petla_regulacji.js`
- **N01**: `klocki.js`, `pomocnicze.js`, `ui_klocki.js`, `zbieranie_gazu.js`, `karta_bhp.js`, `naczynia.js`, `probowki_odczyn.js`, `probowki_wybor.js`, `palnik_gazowy.js`
- **N02**: `klocki.js`, `pomocnicze.js`, `karta_bhp.js`, `ui_klocki.js`, `chemia_wstep.js`, `naczynia.js`, `probowki_odczyn.js`, `probowki_wybor.js`, `palnik_gazowy.js`, `zbieranie_gazu.js`, `lancuch_przemian.js`, `palenie.js`, `plomien.js`, `okresowy_tlenki.js`
- **N04**: `klocki.js`, `karta_bhp.js`
- **N05**: `klocki.js`, `pomocnicze.js`, `bilans_rownania.js`, `zbieranie_gazu.js`, `karta_bhp.js`
- **F02**: `klocki.js`, `pomocnicze.js`, `model_widok.js`, `z_f02_czastki.js`, `z_f02_magnes_fes.js`, `karta_bhp.js`, `ui_klocki.js`, `chemia_wstep.js`
- **F03**: `klocki.js`, `pomocnicze.js`, `karta_bhp.js`, `ui_klocki.js`, `chemia_wstep.js`
- **F01**: `klocki.js`, `pomocnicze.js`, `karta_bhp.js`, `ui_klocki.js`, `chemia_wstep.js`
- **REV01**: `klocki.js`, `karta_bhp.js`
- **F04**: `klocki.js`, `model_widok.js`, `z_f04_nuklid.js`, `pomocnicze.js`, `ui_klocki.js`, `diagram_bohra.js`, `okresowy_tlenki.js`
- **F05**: `klocki.js`, `pomocnicze.js`, `izotopy.js`
- **R03A**: `klocki.js`, `pomocnicze.js`, `krzywe_rozpuszczalnosci.js`, `regula_krzyzowa.js`, `karta_bhp.js`
- **FIZ-01**: `klocki.js`, `pomocnicze.js`, `ui_klocki.js`, `jony_w_wodzie.js`, `fizyka_elektrostatyka.js`

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
| `gfx-scene-metanSpalanie` | Spalanie metanu — zlewka odwrócona (H₂O) i woda wapienna (CO₂) | ORG01 |
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
| cykl-miesiaczkowy | `szablon/wizualizacje/cykl-miesiaczkowy.js` | `szablon/wizualizacje/cykl-miesiaczkowy.js` | `szablon/wizualizacje/cykl-miesiaczkowy.js` | nie | B2f, U11 |
| dobor-naturalny | `szablon/wizualizacje/dobor-naturalny.js` | `szablon/wizualizacje/dobor-naturalny.js` | `szablon/wizualizacje/dobor-naturalny.js` | nie | L031, L032 |
| drabina | `szablon/wizualizacje/drabina.js` | `szablon/wizualizacje/drabina.js` | `szablon/wizualizacje/drabina.js` | nie | L010, L011 |
| droga-pokarmu | `szablon/wizualizacje/droga-pokarmu.js` | `szablon/wizualizacje/droga-pokarmu.js` | `szablon/wizualizacje/droga-pokarmu.js` | tak | B2b, U03 |
| droga-zarodka | `szablon/wizualizacje/droga-zarodka.js` | `szablon/wizualizacje/droga-zarodka.js` | `szablon/wizualizacje/droga-zarodka.js` | tak | B2f, U11 |
| endosymbioza | `szablon/wizualizacje/endosymbioza.js` | `szablon/wizualizacje/endosymbioza.js` | `szablon/wizualizacje/endosymbioza.js` | tak | L001A |
| energia-glukozy | `szablon/wizualizacje/energia-glukozy.js` | `szablon/wizualizacje/energia-glukozy.js` | `szablon/wizualizacje/energia-glukozy.js` | nie | REV01, L007 |
| energia-materia | `szablon/wizualizacje/energia-materia.js` | `szablon/wizualizacje/energia-materia.js` | `szablon/wizualizacje/energia-materia.js` | nie | L040, L044 |
| enzym-warunki | `szablon/wizualizacje/enzym-warunki.js` | `szablon/wizualizacje/enzym-warunki.js` | `szablon/wizualizacje/enzym-warunki.js` | tak | U03 |
| etapy-zycia | `szablon/wizualizacje/etapy-zycia.js` | `szablon/wizualizacje/etapy-zycia.js` | `szablon/wizualizacje/etapy-zycia.js` | nie | U11 |
| eutrofizacja | `szablon/wizualizacje/eutrofizacja.js` | `szablon/wizualizacje/eutrofizacja.js` | `szablon/wizualizacje/eutrofizacja.js` | nie | L043 |
| fotosynteza-oddychanie | `szablon/wizualizacje/fotosynteza-oddychanie.js` | `szablon/wizualizacje/fotosynteza-oddychanie.js` | `szablon/wizualizacje/fotosynteza-oddychanie.js` | nie | REV01, L006, L007, L091 |
| gdzie-dna | `szablon/wizualizacje/gdzie-dna.js` | `szablon/wizualizacje/gdzie-dna.js` | `szablon/wizualizacje/gdzie-dna.js` | nie | L010 |
| glukoza-wykres | `szablon/wizualizacje/glukoza-wykres.js` | `szablon/wizualizacje/glukoza-wykres.js` | `szablon/wizualizacje/glukoza-wykres.js` | nie | B2e, B2g, H01, U10 |
| gruczoly-mapa | `szablon/wizualizacje/gruczoly-mapa.js` | `szablon/wizualizacje/gruczoly-mapa.js` | `szablon/wizualizacje/gruczoly-mapa.js` | tak | B2e, U10 |
| hardy-weinberg | `szablon/wizualizacje/hardy-weinberg.js` | `szablon/wizualizacje/hardy-weinberg.js` | `szablon/wizualizacje/hardy-weinberg.js` | nie | L090 |
| helisa | `szablon/wizualizacje/helisa.js` | `szablon/wizualizacje/helisa.js` | `szablon/wizualizacje/helisa.js` | nie | L010, L011 |
| homeostaza | `szablon/wizualizacje/homeostaza.js` | `szablon/wizualizacje/homeostaza.js` | `szablon/wizualizacje/homeostaza.js` | nie | L002 |
| klonowanie-genu | `szablon/wizualizacje/klonowanie-genu.js` | `szablon/wizualizacje/klonowanie-genu.js` | `szablon/wizualizacje/klonowanie-genu.js` | tak | L022 |
| klucz-kregowce | `szablon/wizualizacje/klucz-kregowce.js` | `szablon/wizualizacje/klucz-kregowce.js` | `szablon/wizualizacje/klucz-kregowce.js` | nie | REV02 |
| kod-genetyczny | `szablon/wizualizacje/kod-genetyczny.js` | `szablon/wizualizacje/kod-genetyczny.js` | `szablon/wizualizacje/kod-genetyczny.js` | nie | L011, L020, L021, L090 |
| komorka-nakladki | `szablon/wizualizacje/komorka-nakladki.js` | `szablon/wizualizacje/komorka-nakladki.js` | `szablon/wizualizacje/komorka-nakladki.js` | nie | REV01, L001 |
| konczyny-homologiczne | `szablon/wizualizacje/konczyny-homologiczne.js` | `szablon/wizualizacje/konczyny-homologiczne.js` | `szablon/wizualizacje/konczyny-homologiczne.js` | nie | L030, L032 |
| kontrola-podzialow | `szablon/wizualizacje/kontrola-podzialow.js` | `szablon/wizualizacje/kontrola-podzialow.js` | `szablon/wizualizacje/kontrola-podzialow.js` | nie | L009, L016 |
| kosmek-jelitowy | `szablon/wizualizacje/kosmek-jelitowy.js` | `szablon/wizualizacje/kosmek-jelitowy.js` | `szablon/wizualizacje/kosmek-jelitowy.js` | tak | B2b, U03 |
| krazenie-obiegi | `szablon/wizualizacje/krazenie-obiegi.js` | `szablon/wizualizacje/krazenie-obiegi.js` | `szablon/wizualizacje/krazenie-obiegi.js` | tak | B10, U04 |
| lancuch | `szablon/wizualizacje/lancuch.js` | `szablon/wizualizacje/lancuch.js` | `szablon/wizualizacje/lancuch.js` | nie | REV01, L001, L004, L010, L015 |
| lozysko-wymiana | `szablon/wizualizacje/lozysko-wymiana.js` | `szablon/wizualizacje/lozysko-wymiana.js` | `szablon/wizualizacje/lozysko-wymiana.js` | nie | B2f, U11 |
| luk-odruchowy | `szablon/wizualizacje/luk-odruchowy.js` | `szablon/wizualizacje/luk-odruchowy.js` | `szablon/wizualizacje/luk-odruchowy.js` | tak | B2d, U08 |
| mikroskop-model | `szablon/wizualizacje/mikroskop-model.js` | `szablon/wizualizacje/mikroskop-model.js` | `szablon/wizualizacje/mikroskop-model.js` | nie | REV01, L001, L008 |
| nefron | `szablon/wizualizacje/nefron.js` | `szablon/wizualizacje/nefron.js` | `szablon/wizualizacje/nefron.js` | tak | B2c, U06 |
| nukleotyd | `szablon/wizualizacje/nukleotyd.js` | `szablon/wizualizacje/nukleotyd.js` | `szablon/wizualizacje/nukleotyd.js` | nie | L010, L011 |
| od-organizmu-do-genu | `szablon/wizualizacje/od-organizmu-do-genu.js` | `szablon/wizualizacje/od-organizmu-do-genu.js` | `szablon/wizualizacje/od-organizmu-do-genu.js` | nie | L010 |
| oko-akomodacja | `szablon/wizualizacje/oko-akomodacja.js` | `szablon/wizualizacje/oko-akomodacja.js` | `szablon/wizualizacje/oko-akomodacja.js` | tak | U08 |
| pary-zasad | `szablon/wizualizacje/pary-zasad.js` | `szablon/wizualizacje/pary-zasad.js` | `szablon/wizualizacje/pary-zasad.js` | nie | L010, L011 |
| podzial-komorki | `szablon/wizualizacje/podzial-komorki.js` | `szablon/wizualizacje/podzial-komorki.js` | `szablon/wizualizacje/podzial-komorki.js` | tak | L009, B2f, L014, L015, L050 |
| pojemnosc | `szablon/wizualizacje/pojemnosc.js` | `szablon/wizualizacje/pojemnosc.js` | `szablon/wizualizacje/pojemnosc.js` | nie | L010 |
| poziomy-dna | `szablon/wizualizacje/poziomy-dna.js` | `szablon/wizualizacje/poziomy-dna.js` | `szablon/wizualizacje/poziomy-dna.js` | nie | L010, L012 |
| proba-kontrolna | `szablon/wizualizacje/proba-kontrolna.js` | `szablon/wizualizacje/proba-kontrolna.js` | `szablon/wizualizacje/proba-kontrolna.js` | nie | REV01 |
| przeobrazenie-owadow | `szablon/wizualizacje/przeobrazenie-owadow.js` | `szablon/wizualizacje/przeobrazenie-owadow.js` | `szablon/wizualizacje/przeobrazenie-owadow.js` | nie | REV02 |
| przeobrazenie-plaza | `szablon/wizualizacje/przeobrazenie-plaza.js` | `szablon/wizualizacje/przeobrazenie-plaza.js` | `szablon/wizualizacje/przeobrazenie-plaza.js` | nie | REV02 |
| punnett | `szablon/wizualizacje/punnett.js` | `szablon/wizualizacje/punnett.js` | `szablon/wizualizacje/punnett.js` | nie | B1b, L017, L018, L019, L021 |
| relacje-ekologiczne | `szablon/wizualizacje/relacje-ekologiczne.js` | `szablon/wizualizacje/relacje-ekologiczne.js` | `szablon/wizualizacje/relacje-ekologiczne.js` | nie | L042, L044 |
| sekwencje | `szablon/wizualizacje/sekwencje.js` | `szablon/wizualizacje/sekwencje.js` | `szablon/wizualizacje/sekwencje.js` | nie | L010 |
| siec-troficzna | `szablon/wizualizacje/siec-troficzna.js` | `szablon/wizualizacje/siec-troficzna.js` | `szablon/wizualizacje/siec-troficzna.js` | nie | L041, L050 |
| skora-przekroj | `szablon/wizualizacje/skora-przekroj.js` | `szablon/wizualizacje/skora-przekroj.js` | `szablon/wizualizacje/skora-przekroj.js` | nie | B2a, U01 |
| sprzezenie-zwrotne | `szablon/wizualizacje/sprzezenie-zwrotne.js` | `szablon/wizualizacje/sprzezenie-zwrotne.js` | `szablon/wizualizacje/sprzezenie-zwrotne.js` | tak | B2e, B2g, H01, U10 |
| staw-antagonizm | `szablon/wizualizacje/staw-antagonizm.js` | `szablon/wizualizacje/staw-antagonizm.js` | `szablon/wizualizacje/staw-antagonizm.js` | tak | B2a, U01 |
| synapsa | `szablon/wizualizacje/synapsa.js` | `szablon/wizualizacje/synapsa.js` | `szablon/wizualizacje/synapsa.js` | tak | B2d, U08 |
| szuflady-cech | `szablon/wizualizacje/szuflady-cech.js` | `szablon/wizualizacje/szuflady-cech.js` | `szablon/wizualizacje/szuflady-cech.js` | nie | L010 |
| transfuzja | `szablon/wizualizacje/transfuzja.js` | `szablon/wizualizacje/transfuzja.js` | `szablon/wizualizacje/transfuzja.js` | nie | L019, U04 |
| transport-blona | `szablon/wizualizacje/transport-blona.js` | `szablon/wizualizacje/transport-blona.js` | `szablon/wizualizacje/transport-blona.js` | nie | REV01, L001, L005 |
| trener-nici | `szablon/wizualizacje/trener-nici.js` | `szablon/wizualizacje/trener-nici.js` | `szablon/wizualizacje/trener-nici.js` | nie | L010, L013 |
| ucho-droga | `szablon/wizualizacje/ucho-droga.js` | `szablon/wizualizacje/ucho-droga.js` | `szablon/wizualizacje/ucho-droga.js` | tak | U08 |
| uklad-rozrodczy | `szablon/wizualizacje/uklad-rozrodczy.js` | `szablon/wizualizacje/uklad-rozrodczy.js` | `szablon/wizualizacje/uklad-rozrodczy.js` | nie | B2f, U11 |
| wdech-wydech | `szablon/wizualizacje/wdech-wydech.js` | `szablon/wizualizacje/wdech-wydech.js` | `szablon/wizualizacje/wdech-wydech.js` | tak | B2c, U06 |
| wirus-bakteria | `szablon/wizualizacje/wirus-bakteria.js` | `szablon/wizualizacje/wirus-bakteria.js` | `szablon/wizualizacje/wirus-bakteria.js` | nie | REV02 |
| wymiana-gazowa | `szablon/wizualizacje/wymiana-gazowa.js` | `szablon/wizualizacje/wymiana-gazowa.js` | `szablon/wizualizacje/wymiana-gazowa.js` | tak | B2c, U06 |
| zrodla-zmiennosci | `szablon/wizualizacje/zrodla-zmiennosci.js` | `szablon/wizualizacje/zrodla-zmiennosci.js` | `szablon/wizualizacje/zrodla-zmiennosci.js` | nie | L016A |

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

Wpisów w `gfx/index.json`: **178**. Podział: chemia 158, fizyka 12, wspolne 8.
