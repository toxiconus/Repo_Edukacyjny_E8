# Projekt wizualizacji dla lekcji bez grafik — CHE · BIO · FIZ

Stan: 2026-10-08, gałąź `claude/wizualizacje-projekty`. Podgląd prototypów: `wzorcownia.html` (jeden plik, offline, telefon).

## Zasady (z ustaleń z użytkownikiem)
- Najpierw istniejący element: atlas i widoki silnika CHE (`chemia/che-modular/KATALOG_MODELI.md`, `engine/src/gfx/KATALOG.md`), w biologii `bio-viz.js` (`biologia/bio/BIO_KATALOG.md`). Nowe = komponent wielokrotnego użytku + wpis w katalogu.
- Bez własnych grafik atomu i układu okresowego (są w atlasie: `periodic-54`, `atomBohr`, `atomSVG`).
- Widok statyczny + kliknięcie/rozwinięcie z wyjaśnieniem; animacja tylko gdy uzasadniona. Bez emoji. Tylko tryb dzienny.
- Prototypy we wzorcowni są samodzielne (własne dane). Przy wpinaniu do silnika dane bierzemy z `CHE.DATA` (elektroujemność, MOL3D, reakcje), nie z kopii w widoku.

Legenda: **NOWY** — do zbudowania (prototyp we wzorcowni: ✓) · **ROZSZERZ** — dopisać tryb do istniejącego · **UŻYJ** — wystarczy wpiąć istniejący.

## Chemia — blok F (F06–F21, materiał w `chemia/lekcje_md/F/`, bez lekcji HTML)

| Lekcja | Wizualizacja | Rodzaj | Opis |
|---|---|---|---|
| F06 Układ okresowy | `periodic-54` + tryb trendów | ROZSZERZ | Kolorowanie tablicy atlasu wg `ATOMIC_PROPS` (promień, EN, energia jonizacji) z legendą skali; strzałki trendu w okresie/grupie. Nie nowa tablica (projekt `f06-trendy-v01` wstrzymany). |
| F07 Konfiguracja elektronowa | `atomBohr` (powłoki), `molecule-orbitals`, `molecule-electrons` | UŻYJ | Konfiguracja z jednego źródła `CHE.MOLECULE.electronConfiguration` (spis dublowania w PRZEKAZANIE §6). |
| F07 dośw. barwienie płomienia | efekt `flame` + opcja `kolor` | ROZSZERZ | Barwy: Li karminowa, Na żółta, K fioletowa, Ca ceglastoczerwona, Sr czerwona, Ba żółtozielona, Cu zielona (do weryfikacji opisów). Druciki z próbką jako nowy przedmiot `ezaDrut`. |
| F08 Konfiguracja a układ | `periodic-54` + `atomBohr` | ROZSZERZ | Klik pierwiastka → powłoki; podświetlenie „numer grupy = elektrony walencyjne (gr. 1–2, 13–18)”. |
| F09 Ładunek / wartościowość / stopień utlenienia | **V008 trzy karty** | NOWY ✓ | Ta sama drobina, trzy kolumny, klik nagłówka = definicja i algorytm; kontrola „suma stopni utlenienia = ładunek”. Przykłady antybłędowe: O₂, H₂O₂, CH₄. |
| F10 Dlaczego atomy się łączą | **V009 krzywa energii** | NOWY ✓ | Suwak odległości dwóch atomów H, wykres E(r) z minimum (74 pm, 436 kJ/mol), strefy: daleko / przyciąganie / minimum / odpychanie. Schematyczny (krzywa Morse’a). |
| F10 | `energy-profile` | UŻYJ | Egzo/endo — tylko odnośnik. |
| F11 Wiązania | V009 tryb porównawczy | NOWY | Trzy panele: jonowe (siatka Na⁺/Cl⁻), kowalencyjne (wspólna para w Cl₂), metaliczne (kationy + elektrony swobodne); pod każdym: ruchliwość nośników, przewodnictwo, temp. topnienia, przykłady; dane `BOND_TYPES`. |
| F12 Wzory chemiczne | `n01-konstruktor-v01` + `n02-wzory-v01` → jeden konstruktor | ROZSZERZ | Dowolny kation + anion z `CHE.IONIC.compound` (krzyżowanie ładunków, nawias, skracanie). |
| F13 Wzory Lewisa | `molecule-2d` + nakładka „algorytm krok po kroku” | ROZSZERZ | Kroki: liczba elektronów walencyjnych → szkielet → pary wiążące → oktety → wolne pary → ładunki formalne. |
| F14 VSEPR | `molecule3d-merged`, `molecule-2d` | UŻYJ | Geometria z MOL3D — ona będzie wejściem dla V012. |
| F15 Polarność | **V012 wektory dipola** | NOWY ✓ | CO₂/H₂O/NH₃/CH₄ (+HCl): warstwy EN → δ → wektory wiązań → suma μ → werdykt z uzasadnieniem. W silniku: geometria z MOL3D, EN z danych pierwiastków. |
| F15 dośw. odchylanie strugi | nowa scena `struga` | NOWY | Naelektryzowana pałeczka (`chargedRod` z fizyki) + struga wody / heksanu z biurety (`burette`). Most chemia ↔ FIZ01. |
| F16 Od obserwacji do modelu | sceny `acidMetal`, `carbonate`, `heating` + karta „obserwacja ≠ wniosek” | ROZSZERZ | Pod sceną dwie kolumny: co widzę / co z tego wnioskuję. |
| F17 Równania reakcji | **V015 bilans** | NOWY ✓ | Uczeń zmienia tylko współczynniki; liczniki atomów i ładunku na żywo; tryb ekspercki: stosunek molowy → `stech-kalkulator-v01`. |
| F18–F19 Dossier | `chem-profile10`, `molecule-cv`, `live-cv` | UŻYJ | Szablon dossier jako karta wypełniana z danych silnika. |
| F20–F21 | — | — | Klinika i zadania: wystarczą karty, quiz i odnośniki do modeli F. |

GFX do zbudowania (z PLAN_PRACY §6): magnes (Fe + S), lód pływający, osad i para w parownicy, płomień w tyglu — każdy jako przedmiot/efekt w `engine/src/gfx/chemia/…` + wpis w KATALOG.

## Biologia (kanon `BIO.all.v01.00.md`, gotowa tylko L010)

| Lekcja | Wizualizacja | Rodzaj | Opis |
|---|---|---|---|
| L001 Komórka | `komorka` | NOWY | Komórka zwierzęca / roślinna / bakteryjna, przełącznik; klik organellum = funkcja. Prymitywy z `gdzie-dna`. |
| L004 Organizacja budowy | `od-organizmu-do-genu` wariant „w górę” | ROZSZERZ | komórka → tkanka → narząd → układ → organizm. |
| L005 Błona i transport | **transport-blona** | NOWY ✓ | Dyfuzja prosta, ułatwiona, transport aktywny, osmoza na jednym przekroju błony; gradient stężeń, ATP. |
| L006 Fotosynteza | `lisc-bilans` + wykres czynników ograniczających | NOWY | Wejścia/wyjścia (CO₂, H₂O, światło → glukoza, O₂); suwak światła i CO₂ — plateau. |
| L007 Oddychanie | `mitochondrium` + porównanie tlenowe / fermentacja | NOWY | Bilans energii; para z L006 jako cykl. |
| L008 Mikroskop | `mikroskop-powiekszenie` | NOWY | Okular × obiektyw = powiększenie; pole widzenia maleje. |
| L009, L014 Mitoza | `podzial` tryb mitoza | NOWY | Fazy z chromosomami 2n = 4 (prymityw `chromosome`), statyczne kadry + klik fazy. |
| L011 Jak DNA przechowuje informację | **kod-genetyczny** | NOWY ✓ | Nić kodująca → matrycowa → mRNA → kodony → aminokwasy. |
| L012 Upakowanie DNA | `poziomy-dna` | UŻYJ | |
| L013 Kopiowanie DNA | `drabina` tryb „replikacja” + `trener-nici` | ROZSZERZ | Rozplecenie, nowe nici innym kolorem (semikonserwatywnie). |
| L015 Gamety | `podzial` tryb mejoza | NOWY | 2n → n, crossing-over jako zamiana odcinków. |
| L016 Błędy podziałów | `kariotyp` | NOWY | 23 pary, trisomia 21 zaznaczona. |
| L017 Jedna cecha | **punnett** | NOWY ✓ | Tryb A/a; wynik genotypów i fenotypów. |
| L018 Płeć i cechy sprzężone | **punnett** tryb X | NOWY ✓ | Hemofilia: XᴴXʰ × XᴴY. |
| L019 Grupy krwi | **punnett** tryb krwi | NOWY ✓ | Iᴬ, Iᴮ, i — kodominacja. |
| L020 Mutacje | **kod-genetyczny** tryb mutacji | NOWY ✓ | Klik zasady → mutacja cicha / zmiany sensu / nonsensowna. |
| L030–L031 Ewolucja, dobór | `dobor-cmy` | NOWY | Populacja krępaka (forma jasna/ciemna), suwak zanieczyszczenia, wykres udziału przez pokolenia (statyczny). |
| L040 Ekosystem | `ekosystem` | NOWY | Biotop + biocenoza, klik elementu. |
| L041 Łańcuchy i sieci | **siec-troficzna** | NOWY ✓ | Klik gatunku: kto go je, co je, poziom troficzny, łańcuchy; tryb „usuń gatunek”. Dalej: piramida energii (10%). |
| L042 Relacje | `relacje` (macierz +/0/−) | NOWY | Mutualizm, konkurencja, drapieżnictwo, pasożytnictwo, komensalizm. |
| L043 Wpływ człowieka | `acid-rain-v01` z chemii | UŻYJ | Most międzyprzedmiotowy (wymaga wpięcia che-viz w lekcję bio albo kopii komponentu). |

## Fizyka (gotowa FIZ-01 Elektrostatyka; brak materiału kolejnych lekcji w repo — tematy wg podstawy E8, do potwierdzenia)

| Lekcja (propozycja) | Wizualizacja | Rodzaj | Opis |
|---|---|---|---|
| FIZ-02 Prąd elektryczny | **obwod** | NOWY ✓ | Szeregowo / równolegle, U, R₁, R₂, wyłącznik; I, napięcia, moc żarówek; kierunek umowny prądu i ruch elektronów. |
| FIZ-03 Magnetyzm | `pole-magnetyczne` | NOWY | Linie pola magnesu i przewodnika z prądem, igła kompasu; reguła prawej dłoni. |
| FIZ-04 Ruch | `wykres-ruchu` | NOWY | s(t), v(t) dla ruchu jednostajnego i przyspieszonego, pole pod wykresem = droga. |
| FIZ-05 Ciśnienie, Archimedes | `beaker`, `cylinder`, `liquid` z GFX chemii + nowy `silomierz` | ROZSZERZ | Ciało zanurzane w cieczy, wskazanie siłomierza, siła wyporu. |
| FIZ-06 Ciepło | `thermometer`, `hotplate`, `heatConvection` z GFX chemii | ROZSZERZ | Wykres temperatury przy topnieniu lodu (plateau). |
| FIZ-07 Fale, dźwięk | `fala` | NOWY | Długość fali, amplituda, częstotliwość — suwaki. |
| FIZ-08 Optyka | `promienie` | NOWY | Odbicie, załamanie, soczewka skupiająca — konstrukcja obrazu. |

## Kolejność wdrażania (propozycja)
1. Akceptacja prototypów we wzorcowni (wygląd, zakres, dane).
2. CHE: V012 i V015 do `rozszerzenia.js` na danych silnika (MOL3D, EN, parser wzorów z `CHE.IONIC`/`CHE.STECH`), potem V009, V008. Wpis w `KATALOG_MODELI.md`. Lekcje F wciąż wstrzymane — modele czekają gotowe.
3. BIO: `kod-genetyczny`, `punnett`, `transport-blona`, `siec-troficzna` → `bio-viz.js` (`BIO.define`) + `BIO_KATALOG.md`.
4. FIZ: `obwod` → silnik fizyki (`CHE.PHYS`) — razem z lekcją FIZ-02, gdy będzie materiał.
