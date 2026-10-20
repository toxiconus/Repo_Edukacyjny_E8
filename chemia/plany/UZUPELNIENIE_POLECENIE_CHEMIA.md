# Polecenie: uzupełnienie pustych i niepełnych lekcji chemii

Data: 2026-10-13 · Źródło: `plany/CHE_SPIS_TRESCI.md` (kanon v0.3) oraz `che-modular/lessons-md/gotowe/` · Wygenerowano automatycznie z `narzedzia/limity_lekcji.py` i danych spisu.

## 1. Stan (co znaleziono)

- **Brak pliku w repo** (lekcja w kanonie, nic w `gotowe/`): **60** — N07, N08, R05, R06, J11, J12, O01, O02, O03, O04, O05, O06, O07, O08, O09, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, X01, X02, X03, X05, X06, X07, X08, X09, E01, E02, E03, E04, E05, E06, K07, K09, K10, K11, A01, A02, A03, A04, A05, A06, P02, P03, P04, P05, P06.
- **Plik jest, ale niepełny** (brak fiszek/testów/zadań, powtórzone akapity, brak 3 ciekawostek): **10** — N01, N02, N03, R01, R02, R04, R08, R09, J03, K08.
- **Szkice i próby do dokończenia lub scalenia:** REV03 (NOWA, szkic), REV04 i REV05 (PRÓBNA), P01 (NOWA).
- **Uwaga:** serię O (organika) częściowo pokrywają `LKO_ORG01–ORG08` (alkany, alkeny, alkohole, glicerol, kwasy, estry, cukry, mol i gazy). Przed pisaniem O-lekcji ustal mapowanie na kanon, żeby nie dublować treści.

- **Ostrzeżenia orientacyjne** (np. zbyt wiele fiszek lub testów w REV01, N01, N05) nie są tu zadaniem; dotyczą tylko lekcji, które same tego wymagają.

## 2. Ramy wspólne (obowiązują każde zadanie)

1. **Format:** dialekt `che-modular` (front matter: kod, uid, tytul, typ, opis, kicker, lead, plakietki, stan, stopka). Bloki: `::: minimum`, `::: warstwy`, `::: rdzen`, `::: karta understand` (mini-wykład „W skrócie”), `::: karta extra` (ciekawostka), `::: karta exam | … (k pkt)` + `::: odp | Pokaż klucz`, `::: adv | … | poziom ambitny`, `::: dosw`, `::: fiszki` (`Pytanie | odpowiedź | tag`), `::: slownik` (`Pojęcie :: definicja`), `::: test` (`? pytanie`, `+ poprawna`, `- błędna`). Kontenery zamykaj wyłącznie gołym `:::`; `::::` psuje parser.
2. **Wykład „od zera”:** każda lekcja ma sekcję „Wykład — …” po definicjach (uczeń rozumie temat sam, bez nauczyciela). Dodaj 1–3 mini-wykłady („W skrócie”) przy suchych miejscach i **3–5 ciekawostek** (`karta extra`), sprawdzonych. Uruchom `python3 ../../narzedzia/sprawdz_wyklady.py lessons-md/gotowe` po pracy.
3. **Kompletność:** fiszki (1 fiszka = 1 termin z lekcji), test (krótka kontrola), zadania w 3 poziomach (podstawa / egzamin z kluczem / ambitne), słownik, sekcja „Do weryfikacji” przy danych niepewnych.
4. **Merytoryka:** poziom E8 (podstawa programowa). Stałe: H1 C12 N14 O16 Na23 Mg24 Al27 S32 Cl35,5 K39 Ca40 Fe56 Cu64 Zn65 Ag108 Br80; Vm = 22,4 dm³/mol. Każdy wynik liczbowy sprawdź rachunkiem. Nie zmieniaj treści, której nie da się zweryfikować — oznacz ją „Do weryfikacji”.
5. **Nie kasuj wartościowych treści.** Jeśli plik istnieje, uzupełniaj go (dopisz brakujące bloki, usuń wyłącznie dokładne duplikaty akapitów). Każdą zmianę liczbową opisz w sekcji „AUDYT” lub w commit message.
6. **Grafiki** tylko tam, gdzie pomagają zrozumieć proces; każda `@model`/`@zlewka`/`@viz`/obraz ma linię `@opis …` (co widać, co się zmienia, wniosek).
7. **Bez znaczników czasu** („5 min”, „ok. 45 min”), planów dziennych, limitów czasu i notatek dla nauczyciela. Kurs jest do samodzielnej nauki we własnym tempie.
8. **Stan:** po skończeniu w front matter `stan: "pełna struktura — <data>, bez audytu W1"`. Nie oznaczaj „W1 FULL”, dopóki audyt nie zostanie wykonany.
9. **Build i testy:** `cd chemia/che-modular && python3 tools/md2html.py lessons-md/gotowe/<plik>.md` oraz `python3 ../../narzedzia/limity_lekcji.py`. Pokazuj tylko błędy (❌).
10. **Commit i push:** gałąź `claude/olimpiada-8-sprint`, jeden commit na lekcję lub na paczkę. Wpis w `chemia/che-modular/PROGRESS.md`.
11. **Nazwa pliku:** `KOD_slug.md` w `chemia/che-modular/lessons-md/gotowe/` (np. `F22_slug.md`), zgodnie z kodem z kanonu.

## 3. Lekcje do napisania od zera (brak pliku)

### N07 — Systematyka nieorganiczna

- **Plik docelowy:** `lessons-md/gotowe/N07_<slug>.md`
- **Cel:** Uczeń klasyfikuje dowolny związek nieorganiczny: wzór → nazwa → klasa.
- **Wymaga:** N02–N06
- **Pogłębia:** N08
- **Co ma być w lekcji:**
  - klasyfikacja wszystkich klas
  - nazewnictwo systematyczne
  - procedura rozpoznawania klasy
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### N08 — Mapa przemian „co powstanie?”

- **Plik docelowy:** `lessons-md/gotowe/N08_<slug>.md`
- **Cel:** Uczeń przewiduje produkty przemian między klasami związków.
- **Wymaga:** N02–N07
- **Pogłębia:** J03; X01
- **Co ma być w lekcji:**
  - pierwiastek → tlenek → wodorotlenek / kwas → sól
  - reakcje między klasami
  - moduł interaktywny dostępny z każdej lekcji N
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### R05 — Stężenie molowe

- **Plik docelowy:** `lessons-md/gotowe/R05_<slug>.md`
- **Cel:** Uczeń oblicza stężenie molowe i przelicza Cp ↔ Cm.
- **Wymaga:** R03; R04
- **Pogłębia:** J02; J07; E01
- **Co ma być w lekcji:**
  - Cm
  - przygotowanie roztworu
  - przeliczanie Cp ↔ Cm z gęstością
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### R06 — Gazy: objętość molowa

- **Plik docelowy:** `lessons-md/gotowe/R06_<slug>.md`
- **Cel:** Uczeń stosuje objętość molową i równanie Clapeyrona.
- **Wymaga:** R04
- **Pogłębia:** R07
- **Co ma być w lekcji:**
  - objętość molowa w warunkach normalnych
  - równanie Clapeyrona
  - gęstość gazu
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### J11 — Identyfikacja jonów

- **Plik docelowy:** `lessons-md/gotowe/J11_<slug>.md`
- **Cel:** Uczeń planuje wykrycie jonów reakcjami charakterystycznymi.
- **Wymaga:** J03; J04
- **Pogłębia:** J12
- **Co ma być w lekcji:**
  - analiza jakościowa
  - reakcje charakterystyczne kationów i anionów
  - projekt doświadczenia
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### J12 — Miareczkowanie

- **Plik docelowy:** `lessons-md/gotowe/J12_<slug>.md`
- **Cel:** Uczeń przeprowadza i interpretuje miareczkowanie alkacymetryczne.
- **Wymaga:** J02; R05
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - procedura i sprzęt
  - krzywe miareczkowania
  - punkt równoważnikowy i wskaźnik
  - obliczenia
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O01 — Język chemii organicznej

- **Plik docelowy:** `lessons-md/gotowe/O01_<slug>.md`
- **Cel:** Uczeń zapisuje wzory związków węgla i stosuje podstawy nazewnictwa.
- **Wymaga:** F11; F12; F13
- **Pogłębia:** O02–O25
- **Co ma być w lekcji:**
  - węgiel w związkach
  - wzory strukturalne, półstrukturalne, szkieletowe
  - szereg homologiczny
  - podstawy nazewnictwa (OWNER podstaw)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O02 — Alkany

- **Plik docelowy:** `lessons-md/gotowe/O02_<slug>.md`
- **Cel:** Uczeń opisuje budowę, nazwy i właściwości alkanów.
- **Wymaga:** O01
- **Pogłębia:** O03; O06
- **Co ma być w lekcji:**
  - szereg alkanów
  - nazwy
  - właściwości fizyczne
  - reakcja podstawienia (halogenowanie)
  - źródła (ropa, gaz)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O03 — Izomeria

- **Plik docelowy:** `lessons-md/gotowe/O03_<slug>.md`
- **Cel:** Uczeń rozpoznaje i rysuje izomery.
- **Wymaga:** O02
- **Pogłębia:** O04; O15; O18
- **Co ma być w lekcji:**
  - izomeria łańcuchowa (od alkanów), położenia, funkcyjna
  - geometryczna cis-trans i optyczna (LO)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O04 — Alkeny

- **Plik docelowy:** `lessons-md/gotowe/O04_<slug>.md`
- **Cel:** Uczeń opisuje wiązanie podwójne i reakcje addycji.
- **Wymaga:** O02; O03
- **Pogłębia:** O05; O21
- **Co ma być w lekcji:**
  - budowa i nazwy
  - addycja (H₂, Br₂, HX, H₂O)
  - reguła Markownikowa (LO)
  - polimeryzacja (wstęp)
  - odbarwianie wody bromowej
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O05 — Alkiny

- **Plik docelowy:** `lessons-md/gotowe/O05_<slug>.md`
- **Cel:** Uczeń opisuje wiązanie potrójne i właściwości etynu.
- **Wymaga:** O04
- **Pogłębia:** O06
- **Co ma być w lekcji:**
  - budowa i nazwy
  - etyn — otrzymywanie z karbidu, właściwości
  - addycja
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O06 — Spalanie węglowodorów

- **Plik docelowy:** `lessons-md/gotowe/O06_<slug>.md`
- **Cel:** Uczeń zapisuje spalanie całkowite i niecałkowite i wykrywa produkty.
- **Wymaga:** O02; O04; O05; F17
- **Pogłębia:** K01
- **Co ma być w lekcji:**
  - spalanie całkowite, półspalanie, niecałkowite
  - wykrywanie CO₂ i H₂O
  - paliwa
  - BHP (CO)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O07 — Areny

- **Plik docelowy:** `lessons-md/gotowe/O07_<slug>.md`
- **Cel:** Uczeń opisuje aromatyczność benzenu i substytucję.
- **Wymaga:** O04
- **Pogłębia:** O09; O25
- **Co ma być w lekcji:**
  - benzen, aromatyczność
  - substytucja elektrofilowa
  - homologi benzenu
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O08 — Alkohole

- **Plik docelowy:** `lessons-md/gotowe/O08_<slug>.md`
- **Cel:** Uczeń opisuje budowę, właściwości i reakcje alkoholi.
- **Wymaga:** O02
- **Pogłębia:** O10–O12
- **Co ma być w lekcji:**
  - metanol, etanol, glicerol
  - alkohole jedno- i wielowodorotlenowe
  - właściwości
  - fermentacja
  - utlenianie (LO)
  - rzędowość (LO)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O09 — Fenole

- **Plik docelowy:** `lessons-md/gotowe/O09_<slug>.md`
- **Cel:** Uczeń porównuje fenole z alkoholami.
- **Wymaga:** O07; O08
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - budowa fenolu
  - kwasowość
  - reakcje
  - porównanie z alkoholami
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O10 — Aldehydy i ketony

- **Plik docelowy:** `lessons-md/gotowe/O10_<slug>.md`
- **Cel:** Uczeń rozpoznaje grupę karbonylową i wykonuje próby Tollensa i Trommera.
- **Wymaga:** O08
- **Pogłębia:** O11; O15
- **Co ma być w lekcji:**
  - aldehydy i ketony — budowa, nazwy
  - otrzymywanie z alkoholi
  - próba Tollensa, Trommera
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O11 — Kwasy karboksylowe

- **Plik docelowy:** `lessons-md/gotowe/O11_<slug>.md`
- **Cel:** Uczeń opisuje budowę i reakcje kwasów karboksylowych.
- **Wymaga:** O08; J01
- **Pogłębia:** O12; O13
- **Co ma być w lekcji:**
  - kwas mrówkowy, octowy
  - kwasy tłuszczowe
  - dysocjacja
  - reakcje z metalami, zasadami, tlenkami
  - hydroksykwasy i aminokwasy (wstęp, LO)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O12 — Estry

- **Plik docelowy:** `lessons-md/gotowe/O12_<slug>.md`
- **Cel:** Uczeń zapisuje estryfikację i hydrolizę estrów.
- **Wymaga:** O08; O11
- **Pogłębia:** O13
- **Co ma być w lekcji:**
  - estryfikacja
  - nazwy estrów
  - hydroliza kwasowa i zasadowa
  - zastosowania
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O13 — Tłuszcze, mydła i detergenty

- **Plik docelowy:** `lessons-md/gotowe/O13_<slug>.md`
- **Cel:** Uczeń opisuje budowę tłuszczów, zmydlanie i działanie mydła.
- **Wymaga:** O11; O12
- **Pogłębia:** O22; O23
- **Co ma być w lekcji:**
  - tłuszcze nasycone i nienasycone
  - utwardzanie
  - zmydlanie
  - budowa i działanie mydła i detergentów
  - twarda woda
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O14 — Aminy i amidy

- **Plik docelowy:** `lessons-md/gotowe/O14_<slug>.md`
- **Cel:** Uczeń opisuje zasadowość amin i budowę amidów.
- **Wymaga:** O01; J06
- **Pogłębia:** O18
- **Co ma być w lekcji:**
  - aminy — budowa, zasadowość
  - amidy
  - mocznik
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O15 — Cukry — monosacharydy

- **Plik docelowy:** `lessons-md/gotowe/O15_<slug>.md`
- **Cel:** Uczeń opisuje glukozę i fruktozę i je wykrywa.
- **Wymaga:** O08; O10
- **Pogłębia:** O16; O17
- **Co ma być w lekcji:**
  - glukoza, fruktoza
  - budowa łańcuchowa i pierścieniowa (LO)
  - wykrywanie
  - fotosynteza (wstęp)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O16 — Cukry — disacharydy

- **Plik docelowy:** `lessons-md/gotowe/O16_<slug>.md`
- **Cel:** Uczeń opisuje sacharozę i jej hydrolizę.
- **Wymaga:** O15
- **Pogłębia:** O17
- **Co ma być w lekcji:**
  - sacharoza, laktoza, maltoza
  - hydroliza
  - cukry redukujące i nieredukujące (LO)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O17 — Cukry — polisacharydy

- **Plik docelowy:** `lessons-md/gotowe/O17_<slug>.md`
- **Cel:** Uczeń porównuje skrobię i celulozę i wykrywa skrobię.
- **Wymaga:** O16
- **Pogłębia:** O23
- **Co ma być w lekcji:**
  - skrobia, celuloza, glikogen
  - wykrywanie skrobi jodem
  - znaczenie
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O18 — Aminokwasy

- **Plik docelowy:** `lessons-md/gotowe/O18_<slug>.md`
- **Cel:** Uczeń opisuje budowę aminokwasów i wiązanie peptydowe.
- **Wymaga:** O11; O14
- **Pogłębia:** O19
- **Co ma być w lekcji:**
  - glicyna
  - amfoteryczność
  - jon obojnaczy (LO)
  - wiązanie peptydowe
  - peptydy
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O19 — Białka — struktura

- **Plik docelowy:** `lessons-md/gotowe/O19_<slug>.md`
- **Cel:** Uczeń opisuje struktury białek, denaturację i koagulację.
- **Wymaga:** O18
- **Pogłębia:** O20
- **Co ma być w lekcji:**
  - struktury I–IV rzędowe
  - denaturacja i koagulacja
  - czynniki denaturujące
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O20 — Białka — reakcje charakterystyczne

- **Plik docelowy:** `lessons-md/gotowe/O20_<slug>.md`
- **Cel:** Uczeń wykrywa białka reakcjami charakterystycznymi.
- **Wymaga:** O19
- **Pogłębia:** O23
- **Co ma być w lekcji:**
  - reakcja ksantoproteinowa i biuretowa
  - projekt doświadczenia
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O21 — Polimery i tworzywa

- **Plik docelowy:** `lessons-md/gotowe/O21_<slug>.md`
- **Cel:** Uczeń opisuje polimeryzację, polikondensację i problem tworzyw sztucznych.
- **Wymaga:** O04; O12
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - polimeryzacja i polikondensacja
  - PE, PVC, PET
  - tworzywa i środowisko
  - recykling
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O22 — Witaminy i sole mineralne

- **Plik docelowy:** `lessons-md/gotowe/O22_<slug>.md`
- **Cel:** Aspekt chemiczny — właściciel tematu w biologii (REF).
- **Wymaga:** O13
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - witaminy rozpuszczalne w wodzie i tłuszczach
  - makro- i mikroelementy — tylko chemiczne odniesienie do biologii
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O23 — Metabolizm

- **Plik docelowy:** `lessons-md/gotowe/O23_<slug>.md`
- **Cel:** Aspekt chemiczny — właściciel tematu w biologii (REF).
- **Wymaga:** O15–O20
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - reakcje i energia w metabolizmie
  - oddychanie komórkowe chemicznie — odniesienie do biologii
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O24 — Nazewnictwo — procedura zbiorcza

- **Plik docelowy:** `lessons-md/gotowe/O24_<slug>.md`
- **Cel:** Uczeń nazywa związki wszystkich klas wg zasad IUPAC.
- **Wymaga:** O01–O21
- **Pogłębia:** O25
- **Co ma być w lekcji:**
  - priorytety grup funkcyjnych
  - łańcuch główny
  - lokanty
  - związki wielofunkcyjne
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### O25 — Mechanizmy reakcji organicznych

- **Plik docelowy:** `lessons-md/gotowe/O25_<slug>.md`
- **Cel:** Uczeń opisuje przepływ elektronów w typowych mechanizmach.
- **Wymaga:** O24
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - substytucja rodnikowa, elektrofilowa, nukleofilowa
  - addycja
  - eliminacja
  - zapis strzałkowy
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X01 — Reakcje redoks

- **Plik docelowy:** `lessons-md/gotowe/X01_<slug>.md`
- **Cel:** Uczeń rozpoznaje redoks po zmianie stopni utlenienia i wskazuje utleniacz i reduktor.
- **Wymaga:** F09; F17
- **Pogłębia:** X02–X09
- **Co ma być w lekcji:**
  - ściąga stopnia utlenienia (definicja w F09)
  - utlenianie, redukcja
  - utleniacz, reduktor
  - rozpoznawanie reakcji redoks
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X02 — Typowe utleniacze i reduktory

- **Plik docelowy:** `lessons-md/gotowe/X02_<slug>.md`
- **Cel:** Uczeń zna katalog typowych utleniaczy i reduktorów i przewiduje produkty.
- **Wymaga:** X01
- **Pogłębia:** X05–X07
- **Co ma być w lekcji:**
  - KMnO₄, K₂Cr₂O₇, H₂O₂, HNO₃, H₂SO₄ stęż.
  - metale, węgiel, wodór
  - zależność od środowiska
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X03 — Bilans elektronowy

- **Plik docelowy:** `lessons-md/gotowe/X03_<slug>.md`
- **Cel:** Uczeń dobiera współczynniki metodą bilansu elektronowego.
- **Wymaga:** X01
- **Pogłębia:** X05–X08
- **Co ma być w lekcji:**
  - równania połówkowe
  - bilans elektronów
  - procedura krok po kroku
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X05 — Redoks jonowy

- **Plik docelowy:** `lessons-md/gotowe/X05_<slug>.md`
- **Cel:** Uczeń bilansuje redoks w formie jonowej.
- **Wymaga:** X03; J03
- **Pogłębia:** X06; X07
- **Co ma być w lekcji:**
  - zapis jonowy redoks
  - bilans ładunku i elektronów
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X06 — Redoks w środowisku kwasowym

- **Plik docelowy:** `lessons-md/gotowe/X06_<slug>.md`
- **Cel:** Uczeń bilansuje metodą połówkową w środowisku kwasowym.
- **Wymaga:** X05
- **Pogłębia:** E04
- **Co ma być w lekcji:**
  - metoda połówkowa z H⁺ i H₂O
  - KMnO₄ w kwasie
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X07 — Redoks w środowisku zasadowym

- **Plik docelowy:** `lessons-md/gotowe/X07_<slug>.md`
- **Cel:** Uczeń bilansuje metodą połówkową w środowisku zasadowym.
- **Wymaga:** X05
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - metoda połówkowa z OH⁻ i H₂O
  - KMnO₄ w środowisku obojętnym i zasadowym
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X08 — Dysproporcjonowanie i synproporcjonowanie

- **Plik docelowy:** `lessons-md/gotowe/X08_<slug>.md`
- **Cel:** Uczeń rozpoznaje i bilansuje dys- i synproporcjonowanie.
- **Wymaga:** X03
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - definicje
  - przykłady (Cl₂ w zasadzie, H₂O₂)
  - bilans
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### X09 — Redoks przekrojowy

- **Plik docelowy:** `lessons-md/gotowe/X09_<slug>.md`
- **Cel:** Uczeń łączy całą grupę X w zadaniach przekrojowych.
- **Wymaga:** X01–X08
- **Pogłębia:** E01–E06
- **Co ma być w lekcji:**
  - zadania łączące
  - diagnostyka błędów redoks
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### E01 — Ogniwo galwaniczne

- **Plik docelowy:** `lessons-md/gotowe/E01_<slug>.md`
- **Cel:** Uczeń opisuje budowę i działanie ogniwa i zapisuje jego schemat.
- **Wymaga:** X03; J01; R05
- **Pogłębia:** E02; E03
- **Co ma być w lekcji:**
  - ogniwo Daniella
  - anoda, katoda
  - klucz elektrolityczny
  - schemat ogniwa
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### E02 — Potencjały elektrodowe

- **Plik docelowy:** `lessons-md/gotowe/E02_<slug>.md`
- **Cel:** Uczeń korzysta z szeregu elektrochemicznego.
- **Wymaga:** E01; X04
- **Pogłębia:** E03
- **Co ma być w lekcji:**
  - potencjał standardowy
  - elektroda wodorowa
  - szereg elektrochemiczny
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### E03 — SEM

- **Plik docelowy:** `lessons-md/gotowe/E03_<slug>.md`
- **Cel:** Uczeń oblicza SEM i przewiduje samorzutność reakcji.
- **Wymaga:** E02
- **Pogłębia:** E06
- **Co ma być w lekcji:**
  - obliczanie SEM
  - kierunek reakcji
  - równanie Nernsta (LO-R, wstęp)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### E04 — Elektroliza

- **Plik docelowy:** `lessons-md/gotowe/E04_<slug>.md`
- **Cel:** Uczeń zapisuje procesy elektrodowe i stosuje prawa Faradaya.
- **Wymaga:** E02; X06
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - elektroliza stopionych soli i roztworów
  - kolejność wydzielania
  - prawa Faradaya
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### E05 — Korozja

- **Plik docelowy:** `lessons-md/gotowe/E05_<slug>.md`
- **Cel:** Uczeń wyjaśnia korozję i dobiera ochronę.
- **Wymaga:** X04
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - korozja chemiczna i elektrochemiczna
  - czynniki
  - ochrona (powłoki, protektor)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### E06 — Źródła energii i akumulatory

- **Plik docelowy:** `lessons-md/gotowe/E06_<slug>.md`
- **Cel:** Uczeń porównuje baterie, akumulatory i ogniwa paliwowe.
- **Wymaga:** E03
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - ogniwo Leclanchégo
  - akumulator ołowiowy i litowo-jonowy
  - ogniwo paliwowe
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### K07 — Kataliza

- **Plik docelowy:** `lessons-md/gotowe/K07_<slug>.md`
- **Cel:** Uczeń opisuje działanie katalizatora, enzymu i inhibitora.
- **Wymaga:** K06
- **Pogłębia:** O19
- **Co ma być w lekcji:**
  - kataliza homo- i heterogeniczna
  - enzymy
  - inhibitory
  - katalizatory w przemyśle i samochodach
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### K09 — Stała równowagi

- **Plik docelowy:** `lessons-md/gotowe/K09_<slug>.md`
- **Cel:** Uczeń zapisuje wyrażenie na K i wykonuje obliczenia.
- **Wymaga:** K08; R05
- **Pogłębia:** K10; J07; J10
- **Co ma być w lekcji:**
  - wyrażenie K
  - obliczenia stężeń równowagowych
  - Kp (LO-R)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### K10 — Reguła Le Chateliera

- **Plik docelowy:** `lessons-md/gotowe/K10_<slug>.md`
- **Cel:** Uczeń przewiduje przesunięcie równowagi.
- **Wymaga:** K09
- **Pogłębia:** K11
- **Co ma być w lekcji:**
  - wpływ stężenia, ciśnienia, temperatury
  - zastosowania przemysłowe (synteza amoniaku)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### K11 — Równowaga ilościowa

- **Plik docelowy:** `lessons-md/gotowe/K11_<slug>.md`
- **Cel:** Uczeń rozwiązuje zadania z równowagi.
- **Wymaga:** K09; K10
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - stopień przereagowania
  - zadania złożone z K
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### A01 — Jądro atomowe

- **Plik docelowy:** `lessons-md/gotowe/A01_<slug>.md`
- **Cel:** Uczeń opisuje siły jądrowe i stabilność jąder.
- **Wymaga:** F04; F05
- **Pogłębia:** A02
- **Co ma być w lekcji:**
  - skład jądra (REF do F04–F05)
  - siły jądrowe
  - ścieżka stabilności
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### A02 — Radioaktywność

- **Plik docelowy:** `lessons-md/gotowe/A02_<slug>.md`
- **Cel:** Uczeń rozróżnia rodzaje promieniowania i ich właściwości.
- **Wymaga:** A01
- **Pogłębia:** A03
- **Co ma być w lekcji:**
  - promieniowanie α, β, γ
  - przenikliwość
  - detekcja
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### A03 — Przemiany jądrowe

- **Plik docelowy:** `lessons-md/gotowe/A03_<slug>.md`
- **Cel:** Uczeń zapisuje równania przemian jądrowych.
- **Wymaga:** A02
- **Pogłębia:** A04
- **Co ma być w lekcji:**
  - przemiany α, β⁻, β⁺
  - szeregi promieniotwórcze
  - reakcje jądrowe
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### A04 — Okres półtrwania i aktywność

- **Plik docelowy:** `lessons-md/gotowe/A04_<slug>.md`
- **Cel:** Uczeń oblicza ubytek substancji promieniotwórczej.
- **Wymaga:** A03
- **Pogłębia:** A06
- **Co ma być w lekcji:**
  - okres półtrwania
  - aktywność
  - datowanie izotopowe
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### A05 — Energia wiązania jądra

- **Plik docelowy:** `lessons-md/gotowe/A05_<slug>.md`
- **Cel:** Uczeń oblicza deficyt masy i energię wiązania.
- **Wymaga:** A01
- **Pogłębia:** A06
- **Co ma być w lekcji:**
  - deficyt masy
  - E = mc²
  - rozszczepienie i synteza jądrowa
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### A06 — Zastosowania i BHP

- **Plik docelowy:** `lessons-md/gotowe/A06_<slug>.md`
- **Cel:** Uczeń ocenia zastosowania i zagrożenia promieniotwórczości.
- **Wymaga:** A04; A05
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - medycyna, energetyka, datowanie
  - ochrona radiologiczna
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### P02 — Blok p

- **Plik docelowy:** `lessons-md/gotowe/P02_<slug>.md`
- **Cel:** Uczeń opisuje pierwiastki bloku p i ich związki.
- **Wymaga:** F06; N02; N04
- **Pogłębia:** P04
- **Co ma być w lekcji:**
  - borowce do helowców
  - metale i niemetale bloku p
  - najważniejsze związki
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### P03 — Blok d i metale przejściowe

- **Plik docelowy:** `lessons-md/gotowe/P03_<slug>.md`
- **Cel:** Uczeń opisuje konfiguracje, stopnie utlenienia i związki metali przejściowych.
- **Wymaga:** F07; F08; X01
- **Pogłębia:** P05
- **Co ma być w lekcji:**
  - konfiguracje bloku d
  - zmienne stopnie utlenienia (Cr, Mn, Fe, Cu)
  - związki barwne
  - kompleksy (wstęp)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### P04 — Charakterystyka grup

- **Plik docelowy:** `lessons-md/gotowe/P04_<slug>.md`
- **Cel:** Uczeń porównuje grupy i ich typowe właściwości.
- **Wymaga:** P01–P03
- **Pogłębia:** P05
- **Co ma być w lekcji:**
  - porównanie grup
  - podobieństwa i wyjątki
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### P05 — Związki charakterystyczne pierwiastków

- **Plik docelowy:** `lessons-md/gotowe/P05_<slug>.md`
- **Cel:** Uczeń zna najważniejsze związki każdej grupy i ich zastosowania.
- **Wymaga:** P04
- **Pogłębia:** P06
- **Co ma być w lekcji:**
  - katalog związków charakterystycznych
  - zastosowania
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

### P06 — Trend → właściwość → reaktywność

- **Plik docelowy:** `lessons-md/gotowe/P06_<slug>.md`
- **Cel:** Uczeń przewiduje właściwości z położenia w układzie.
- **Wymaga:** F06; P01–P05
- **Pogłębia:** —
- **Co ma być w lekcji:**
  - łańcuch: położenie → budowa → właściwości → reakcje (trendy jako OWNER w F06 — tu przewidywanie)
- **Ramy:** pełny zestaw z sekcji 2 (wykład, mini-wykłady, ≥3 ciekawostki, fiszki, test, zadania 3 poziomów, słownik).

## 4. Lekcje niepełne (plik istnieje — uzupełnij)

### N01 — Powietrze i gazy

- **Plik:** `N01_tlenki.md (127 KB)`
- **Co brakuje (wg limity_lekcji):** powtórzone akapity: 6; testy=0
- **Cel:** Uczeń zna skład powietrza oraz otrzymywanie, właściwości i wykrywanie tlenu, wodoru i CO₂.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - skład powietrza
  - tlen, azot, wodór, CO₂, gazy szlachetne — otrzymywanie, właściwości, wykrywanie, zastosowania
  - zanieczyszczenia powietrza, efekt cieplarniany, dziura ozonowa
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### N02 — Tlenki

- **Plik:** `N02_wodorotlenki.md (133 KB)`
- **Co brakuje (wg limity_lekcji):** testy=0
- **Cel:** Uczeń zapisuje, nazywa i otrzymuje tlenki oraz klasyfikuje je wg charakteru chemicznego.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - budowa i nazewnictwo
  - otrzymywanie (spalanie, rozkład)
  - tlenki kwasowe, zasadowe, obojętne, amfoteryczne (LO)
  - reakcje z wodą
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### N03 — Wodorotlenki i zasady

- **Plik:** `N03_kwasy.md (137 KB)`
- **Co brakuje (wg limity_lekcji):** fiszki=0; testy=0
- **Cel:** Uczeń zapisuje i otrzymuje wodorotlenki, odróżnia wodorotlenek od zasady i bada odczyn.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - budowa i nazwy
  - otrzymywanie (metal + woda, tlenek + woda)
  - właściwości i zastosowania
  - dysocjacja (E8)
  - wskaźniki
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### R01 — Woda i roztwory

- **Plik:** `R01_woda_i_roztwory.md (21 KB)`
- **Co brakuje (wg limity_lekcji):** fiszki=0; testy=0
- **Cel:** Uczeń opisuje wodę jako rozpuszczalnik i rozróżnia roztwór, zawiesinę i koloid.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - budowa i polarność wody
  - rozpuszczanie
  - roztwór, zawiesina, koloid
  - czynniki szybkości rozpuszczania
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### R02 — Rozpuszczalność

- **Plik:** `R02_rozpuszczalnosc.md (18 KB)`
- **Co brakuje (wg limity_lekcji):** fiszki=0; testy=0
- **Cel:** Uczeń odczytuje krzywe rozpuszczalności i rozróżnia roztwór nasycony i nienasycony.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - rozpuszczalność i jej zależność od temperatury
  - krzywe
  - roztwór nasycony / nienasycony
  - krystalizacja
  - zadania z krzywych
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### R04 — Mol i masa molowa

- **Plik:** `R04_mol_masa_molowa.md (18 KB)`
- **Co brakuje (wg limity_lekcji):** fiszki=0; testy=0
- **Cel:** Uczeń przelicza masę, liczbę moli i liczbę cząstek.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - mol, liczba Avogadra, masa molowa
  - przeliczenia masa ↔ mol ↔ liczba cząstek
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### R08 — Reagent ograniczający

- **Plik:** `R08_reagent_ograniczajacy.md (13 KB)`
- **Co brakuje (wg limity_lekcji):** fiszki=0; testy=0
- **Cel:** Uczeń wskazuje reagent ograniczający i oblicza skład mieszaniny poreakcyjnej.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - nadmiar i niedomiar
  - reagent ograniczający
  - skład po reakcji
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### R09 — Wydajność reakcji

- **Plik:** `R09_wydajnosc_reakcji.md (12 KB)`
- **Co brakuje (wg limity_lekcji):** fiszki=0; testy=0
- **Cel:** Uczeń oblicza wydajność i uwzględnia zanieczyszczenia substratów.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - wydajność
  - straty
  - czystość substratów
  - zadania wieloetapowe
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### J03 — Reakcje jonowe

- **Plik:** `J03_rownania_jonowe_i_stracanie.md (91 KB)`
- **Co brakuje (wg limity_lekcji):** powtórzone akapity: 1
- **Cel:** Uczeń zapisuje reakcje w formie cząsteczkowej, jonowej pełnej i skróconej.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - zapis jonowy pełny i skrócony
  - zobojętnianie
  - kiedy reakcja jonowa zachodzi
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

### K08 — Równowaga dynamiczna

- **Plik:** `K08_rownowaga_dynamiczna.md (12 KB)`
- **Co brakuje (wg limity_lekcji):** zadania=0
- **Cel:** Uczeń opisuje stan równowagi w reakcjach odwracalnych.
- **Zakres z kanonu (sprawdź, czego nie ma):**
  - reakcje odwracalne
  - stan równowagi dynamicznej
  - modele
- **Zadanie:** dopisz brakujące bloki wg sekcji 2, nie kasując istniejących treści. Usuń tylko dokładne duplikaty akapitów.

## 5. Szkice i próby (dokończ lub scal)

- **REV03:** `REV03_fundamenty_start_klasy_8.md (NOWA, szkic)` — dokończ do pełnej struktury (sekcja 2) albo ustal, czy scalić z innym plikiem. Decyzję o scaleniu zostaw użytkownikowi.
- **REV04:** `REV04_fundamenty_v3_proba.md (PRÓBNA)` — dokończ do pełnej struktury (sekcja 2) albo ustal, czy scalić z innym plikiem. Decyzję o scaleniu zostaw użytkownikowi.
- **REV05:** `REV05_fundamenty_v32_proba.md (PRÓBNA)` — dokończ do pełnej struktury (sekcja 2) albo ustal, czy scalić z innym plikiem. Decyzję o scaleniu zostaw użytkownikowi.
- **P01:** `P01_blok_s_litowce_berylowce_s01.md (NOWA)` — dokończ do pełnej struktury (sekcja 2) albo ustal, czy scalić z innym plikiem. Decyzję o scaleniu zostaw użytkownikowi.

## 6. Kolejność pracy

1. Najpierw powtórzone akapity i brakujące fiszki/testy w plikach istniejących (najtańsze, najszybsze).
2. Potem lekcje niepełne z kanonu (N, R, J, K).
3. Na końcu lekcje od zera w kolejności zależności (wymaga:).
4. Po każdej lekcji: build, limity, commit, push.
