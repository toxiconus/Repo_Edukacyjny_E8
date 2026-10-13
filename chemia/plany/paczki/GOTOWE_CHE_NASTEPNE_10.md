# POLECENIE — ulepsz lekcje tak, żeby autor wkleił je bez poprawiania

**Przeczytaj całe polecenie przed odpowiedzią.** Odpowiedź wklejam skryptem prosto do repozytorium kursu. Skrypt nie poprawia błędów, więc każde odstępstwo od tych zasad oznacza ręczną pracę. Pisz tak, jakbyś sam miał potem bez sprawdzania wkleić swój tekst do pliku.

**Rola:** nauczyciel przedmiotu, egzaminator CKE (egzamin ósmoklasisty) i autor podręczników. Kurs jest do **samodzielnej nauki we własnym tempie**: uczeń 13–15 lat uczy się sam, bez nauczyciela. Lekcja ma dać mu pełne zrozumienie tematu od zera, poziom egzaminu ósmoklasisty i warstwę ambitną (konkurs, olimpiada).

**Inspiracje (korzystaj śmiało, nie kopiuj tekstów):** Khan Academy, Crash Course, BBC Bitesize, CK-12, OpenStax, Brilliant, ZPE, informatory i arkusze CKE, dobre polskie podręczniki.

---

## 0. Tryb pracy (podany w nagłówku każdej lekcji: `TRYB:`)

- **`TRYB: ULEPSZ`** — dostajesz gotową lekcję w dialekcie kursu. Ulepszasz ją i zwracasz całą (punkty 1–5).
- **`TRYB: NAPISZ`** — dostajesz **materiał roboczy albo szkielet** (inny układ nagłówków, notatki, listy, zadania). Piszesz od zera **pełną lekcję** w dialekcie kursu (punkt 3), zachowując **wszystkie** informacje, zadania i klucze z materiału — przerobione na właściwe bloki, poprawione i rozbudowane.
  - Frontmatter weź ze wzoru w nagłówku lekcji i uzupełnij puste pola.
  - Docelowa objętość: **50–80 KB tekstu**, jeśli temat na to pozwala.
  - Obowiązkowy układ (numery sekcji kolejno, każda z `{#id}`):
    1. `::: minimum | Muszę umieć — 10 punktów` (lista 1–10).
    2. `::: warstwy` z liniami `- e8 | <b>Podstawa:</b> …`, `- understand | <b>Rozumienie:</b> …`, `- contest | <b>Konkurs:</b> …`, `- extra | <b>Ambitne:</b> …`.
    3. `::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to` (lista z odnośnikami `[§n](#id)`).
    4. `## 0.1 | Jak pracować z lekcją {#jak-pracowac}`.
    5. `## 0.2 | Diagnoza {#diagnoza}` — kilka pytań z kluczem w `::: odp`.
    6. `## 1 | Wykład — <obraz przewodni> {#wyklad}` — ciągły wykład od zera.
    7. Sekcje tematyczne `## 2 …`, `## 3 …` z plakietkami `[[basic:E8]]`, `[[understand:ROZUMIENIE]]`, `[[exam:KONKURS]]`, `[[extra:AMBITNE]]`. W każdej: tabele i definicje, karty „W skrócie”, `nie-myl`, `warning`, zadania przy temacie.
    8. Doświadczenia (`::: dosw`, z próbą kontrolną).
    9. Zadania konkursowe (karty `exam` z kluczem i punktacją) i warstwa ambitna (`::: adv`).
    10. Klinika błędów, Ćwiczenia, Ciekawostki, Sposoby pamięciowe, Test końcowy (co najmniej 12 pytań), Fiszki (co najmniej 20), Słownik (co najmniej 15 haseł), Mapa pojęć (`::: drzewo`), Ściąga (z `::: checklista`), `## n | Co dalej? {#dalej}`.
    11. Na końcu sekcja audytu (punkt 5); w „Dodane” napisz krótko, z czego powstała lekcja.

## 1. Co masz zrobić z lekcją

1. **Uzupełnij braki.** Każda lekcja musi mieć:
   - pełny **wykład „od zera”** (sekcja „Wykład — …”, ciągły tekst, który tłumaczy temat bez grafiki);
   - **mini-wykłady** jako karty `::: karta understand | W skrócie — …` w każdej suchej lub trudnej sekcji (co najmniej 3 w lekcji);
   - **3–5 ciekawostek** (`::: karta extra | …`, prawdziwe fakty, przy niepewnych liczbach „(orientacyjnie)”);
   - pary do odróżniania (`::: nie-myl`), klinikę błędów, mity, mnemotechniki, zadania z kluczem i punktacją, test, fiszki, słownik, mapę pojęć, ściągę i checklistę;
   - warstwę ambitną (`::: adv`).
   Jeśli czegoś brakuje — dopisz to. Jeśli jest za mało — rozbuduj.
2. **Popraw błędy merytoryczne**, nieścisłości, złe klucze i złą numerację. Sprawdź każdą liczbę i każdy klucz.
3. **Sprawdź zakres:** podstawa programowa, informator i arkusze CKE. Dopisz brakujące treści i typy zadań oraz typowe błędy uczniów.
4. **Poszerz horyzont:** zastosowania, mosty do innych przedmiotów, historia odkryć, przykłady z życia.
5. **Nie usuwaj niczego.** Każde zdanie, liczba, zadanie, klucz, pytanie, fiszka i hasło z oryginału zostaje — poprawione albo rozbudowane, ale obecne. Dwa wyjątki:
   - błędne zdanie zastępujesz poprawnym i odnotowujesz w raporcie;
   - treści sprzecznej z charakterem kursu (np. „plan powtórek na dni”, limity czasu, „(5 min)”, zadania domowe, notatki dla nauczyciela) **nie kasujesz, tylko przerabiasz**. Plan powtórek zamieniasz na listę „co powtórzyć i w jakiej kolejności”, bez dni i minut.
6. **Nie dubluj.** Zanim dodasz fiszkę, hasło słownika, pytanie testowe, wiersz kliniki, mit albo ciekawostkę — sprawdź, czy taki sam albo bardzo podobny już jest w lekcji. Jeśli jest — rozbuduj istniejący, nie dodawaj drugiego.

## 2. Jak zwrócić plik (najważniejsze)

1. **Paczka może zawierać kilka lekcji.** Każda zaczyna się nagłówkiem `# LEKCJA <KOD>` z danymi (`NASTĘPNE ZADANIE`, liczniki „przed”), a po nim jest cały plik lekcji. Opracowuj **jedną lekcję na turę**, w kolejności z paczki.
2. **Zwracasz całą lekcję**: frontmatter (blok między `---` a `---`) i wszystkie sekcje `##` w pełnym brzmieniu.
   - Nie pisz „reszta bez zmian”, „doklej z oryginału”, „patrz wyżej”.
   - Nie zwracaj samych dopisków ani list „do wklejenia tu i tam”.
3. **Odpowiedź to sama treść — nic poza plikiem lekcji:**
   - nie powtarzaj polecenia;
   - bez wstępu, bez komentarzy, bez osobnego raportu.
   Każda lekcja leży między liniami znaczników, każdy znacznik w osobnej linii:
   - `<<<PLIK <KOD>` — początek pliku;
   - `PLIK>>>` — koniec pliku.
   Nie używaj bloków kodu (trzy odwrócone apostrofy).
4. **Długa lekcja:** gdy nie zmieścisz się w jednej turze, przerwij **tylko na granicy sekcji `##`**:
   - zamknij znacznikiem `PLIK>>>` i dopisz w ostatniej linii „dalej”;
   - w następnej turze zacznij od `<<<PLIK <KOD>`, a pod nim od razu nagłówek kolejnej sekcji.
   Nie powtarzaj sekcji już wysłanych. Gdy lekcja jest skończona, ostatnia linia tury to „KONIEC <KOD>”. Następna lekcja z paczki idzie w kolejnej turze, po słowie „dalej” od użytkownika.
5. **Numeracja sekcji:** nie zmieniaj numerów ani `{#id}` istniejących sekcji. Nową sekcję wstaw tam, gdzie pasuje, z numerem poprzedniej + litera (`## 8a | …`, `## 8b | …`) i nowym, unikalnym `{#id}`.
6. **Numeracja zadań:** nowe zadania numeruj od liczby `NASTĘPNE ZADANIE` z nagłówka lekcji, rosnąco w kolejności występowania. Nie zmieniaj numerów istniejących zadań.
7. Linia `stan:` we frontmatterze: `stan: ULEPSZONA — <nazwa modelu>, <data RRRR-MM-DD>; do sprawdzenia`. Jeśli jej nie ma — dodaj. Nigdy nie wpisuj tam „W1” ani „FULL”. Puste pola frontmattera (`opis:`, `uid:`, `stopka:`) uzupełnij.
8. **W treści lekcji nie zostawiaj żadnych uwag dla autora** („wklej tu”, „jeśli w niewidocznej części…”, „sprawdź duplikaty”). Wszystko, co autor powinien wiedzieć, idzie do sekcji audytu na końcu pliku (punkt 5).

## 3. Składnia — pisz dokładnie tak (plik idzie prosto do generatora HTML)

- **Sekcja:** `## 7 | Tytuł {#id}`. Tylko `##`, nigdy `#` ani `###` jako sekcja. Plakietki poziomu zachowaj w tej samej postaci, np. `[[basic:E8]]`, `[[exam:KONKURS]]`, `[[extra:LO]]`.
- **Każdy blok** otwiera `::: nazwa | tytuł`, a zamyka linia z samym `:::`. Licz otwarcia i zamknięcia — muszą się zgadzać, także przy blokach zagnieżdżonych.
- **Karta:** `::: karta TYP | Tytuł` … `:::`, gdzie TYP to:
  - `understand` — wyjaśnienie, „W skrócie — …”;
  - `core` — najważniejsze;
  - `basic` — podstawa;
  - `warning` — pułapka;
  - `exam` — zadanie;
  - `extra` — ciekawostka.
- **Zadanie:**
  - `::: karta exam | Zadanie 12 (3 pkt) — krótki tytuł`;
  - treść, podpunkty a), b), c) z punktacją;
  - `::: odp | Pokaż klucz`;
  - klucz: każdy podpunkt z „(1 pkt)” i kryterium;
  - `:::` (zamyka klucz);
  - `:::` (zamyka kartę).
- **Zadanie ambitne:** `::: adv | Zadanie 13 (4 pkt) — tytuł | poziom ambitny`, w środku `::: odp`, tak samo jak wyżej.
- **Test** (`::: test` … `:::`), każde pytanie to dokładnie te linie, a między pytaniami pusta linia:
  - `? treść pytania`;
  - `+ poprawna`;
  - `- błędna` (trzy razy);
  - `! wyjaśnienie, dlaczego poprawna jest poprawna`.
- **Fiszki** (`::: fiszki` … `:::`): `Przód | tył | poziom:temat`.
  - Poziomy: `basic`, `understand`, `extra`, `olimpijski`.
  - Temat: jedno słowo bez polskich znaków.
- **Słownik** (`::: slownik` … `:::`): `Hasło :: definicja`. Hasło zaczyna się wielką literą.
- **Klinika błędów** (`::: klinika | Błąd | Poprawnie | Dlaczego?` … `:::`): wiersze `| „Błędne zdanie.” | Poprawnie. | Dlaczego. |`.
- **Pary do odróżniania** (`::: nie-myl | Tytuł` … `:::`): linie listy `- A ≠ B — różnica; test rozstrzygający: …`.
- **Mity** (`::: mity` … `:::`): `„Mit.” || Poprawka z wyjaśnieniem.`
- **Mnemotechniki:** `::: wskazowki` z listą `- …`.
- **Checklista:** `::: checklista` z liniami `- [ ] umiem …`.
- **Mapa pojęć:** `::: drzewo`, lista z wcięciami po 2 spacje na poziom.
- **Doświadczenie** (`::: dosw | Doświadczenie 3 — tytuł` … `:::`): linie `Problem:`, `Hipoteza:`, `Sprzęt:`, `Przebieg:`, `Obserwacja:`, `Wniosek:`, `BHP:` (próba kontrolna obowiązkowo).
- **Istniejące grafiki** — linie `@viz …`, `@model …`, `@zlewka …` i linia `@opis …` pod każdą z nich — przepisz **bez zmian**. Możesz najwyżej rozbudować tekst `@opis`. Nie wymyślaj nowych linii `@viz` / `@model` / `@zlewka` (o nowych grafikach — punkt 4 poniżej).
- **Elementy HTML** w tekście (np. `<span data-fiz="e">…</span>`, `<b>`) przepisz bez zmian.
- **Język i znaki:**
  - wyłącznie polski, bez wtrąceń po angielsku ani w innych alfabetach (sprawdź, czy nie wkradła się cyrylica);
  - cudzysłowy polskie „…”, nie "…";
  - wzory i jednostki w Unicode (`1,6·10⁻¹⁹ C`, `m/s²`, `→`), **bez LaTeX-a** (`$…$`, `\frac`);
  - przecinek dziesiętny (`0,5`);
  - bez linków-przypisów `[1]`, bez przypisów źródeł w tekście lekcji (źródła tylko w raporcie). Wyjątek: przy ciekawostce wolno dopisać krótko „(źródło: nazwa instytucji)”.

## 4. Grafiki — tylko wskazanie, czego potrzeba

Nie rysuj grafik (bez ASCII, SVG, tabel udających rysunek). Grafiki zrobi autor z biblioteki komponentów. Grafika ma być tylko tam, gdzie naprawdę pomaga zrozumieć — proces, zależność, ćwiczenie — nigdy jako ozdoba.

Potrzebne grafiki wypisz w tabeli „Grafiki do zrobienia” w sekcji audytu na końcu pliku (punkt 5). Kolumny:

- **Gdzie:** sekcja i akapit, po którym ma stanąć.
- **Rodzaj:** wybierz jeden:
  - schemat statyczny;
  - schemat z podpisami do klikania;
  - wykres liniowy / słupkowy / kołowy;
  - animacja „do przodu i od początku” (proces jednokierunkowy);
  - animacja „tam i z powrotem” (proces odwracalny, cykl);
  - model interaktywny z suwakiem lub przełącznikiem;
  - doświadczenie wirtualne (zlewka, przyrząd);
  - mapa pojęć;
  - oś czasu.
- **Co pokazuje:** elementy, oznaczenia, co się zmienia. Ogólnie, bez wymiarów, kolorów i współrzędnych.
- **Wniosek dla ucznia:** jedno zdanie.
- **Gotowy tekst `@opis`:** słowny opis „co widać + wniosek”, tak żeby treść była zrozumiała bez obrazka.

W samej lekcji w miejscu grafiki **nie wstawiaj niczego**. Treść musi być pełna i zrozumiała bez grafiki.

## 5. Koniec pliku — sekcja audytu (zamiast raportu)

Ostatni element każdego pliku, przed `PLIK>>>`:

- nagłówek `### AUDYT — <nazwa modelu>, <data> {#audyt-ulepsz}`;
- **Poprawione:** lista `- §… : „było” → „jest” — powód` (albo „brak”);
- **Dodane:** lista `- §… : co dodano`;
- **Niepewne / do weryfikacji:** lista (albo „brak”);
- **Proponuję usunąć:** lista z powodem (sam niczego nie usuwasz) albo „brak”;
- **Źródła:** krótka lista;
- **Grafiki do zrobienia:** tabela `| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |` (punkt 4) albo „brak”.

Wzór całej tury (bez bloku kodu w odpowiedzi):

<<<PLIK FIZ-01
---
kod: FIZ-01
…frontmatter…
---
…wszystkie sekcje…
### AUDYT — <model>, 2026-10-12 {#audyt-ulepsz}
…
PLIK>>>
KONIEC FIZ-01

## 6. Lista kontrolna — sprawdź przed wysłaniem

- [ ] TRYB NAPISZ: pełny układ z punktu 0, wszystko z materiału roboczego przeniesione.
- [ ] Odpowiedź to tylko plik między `<<<PLIK <KOD>` i `PLIK>>>`: cała lekcja, bez powtarzania polecenia, bez „bez zmian” i bez uwag dla autora w treści; na końcu pliku sekcja audytu.
- [ ] Nic z oryginału nie zniknęło; liczniki „po” nie mniejsze niż „przed”.
- [ ] Numery i `{#id}` sekcji bez zmian, nowe sekcje z literą, nowe zadania od `NASTĘPNE ZADANIE`.
- [ ] Liczba otwarć `::: …` równa liczbie zamknięć `:::`.
- [ ] Brak duplikatów fiszek, haseł, pytań, wierszy kliniki.
- [ ] Wykład od zera, co najmniej 3 mini-wykłady „W skrócie”, 3–5 ciekawostek, `nie-myl`, `adv`.
- [ ] Klucze zadań i testu przeliczone, punktacja przy każdym podpunkcie.
- [ ] Polskie cudzysłowy, Unicode zamiast LaTeX-a, brak cyrylicy i angielskich słów.
- [ ] Grafiki tylko w tabeli „Grafiki do zrobienia” w audycie, istniejące `@viz/@model/@zlewka/@opis` nietknięte.
- [ ] Brak planów dziennych, limitów czasu, zadań domowych, notatek dla nauczyciela.


---

# PACZKA CHE_NASTEPNE_10 — lekcje: J03, J07, J08, J09, J10, K01, K02, K03, K04, K05

Opracuj je po kolei, jedną na turę (po „dalej” następna). Odpowiedź: sama treść — tylko pliki między `<<<PLIK <KOD>` i `PLIK>>>`.

---

# LEKCJA J03 — Równania jonowe, strącanie osadów, sól z soli, kwas z soli

- TRYB: ULEPSZ
- KOD: J03 (znacznik odpowiedzi: `<<<PLIK J03`)
- NASTĘPNE ZADANIE: 17
- PRZED: KB 89.6, sekcje ## 23, zadania (karta exam) 8, pytania testowe 14, fiszki 37, hasła słownika 20, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 5, mini-wykłady (W skrócie) 4, doświadczenia (dosw) 3, błędy w klinice 11

---
kod: J03
tytul: Równania jonowe, strącanie osadów, sól z soli, kwas z soli
opis: równanie cząsteczkowe · równanie jonowe pełne · równanie jonowe skrócone · jony obserwatorowe · dysocjacja elektrolityczna · elektrolity mocne i słabe · tabela rozpuszczalności · strącanie osadów · barwy osadów · otrzymywanie soli · kwas z soli · sól z soli · wykrywanie jonów · bilans ładunków
kicker: J03 · CHEMIA · Substancje i ich przemiany — reakcje w roztworach · E8 / KONKURS
lead: W probówce z dwiema solami dzieje się coś, czego nie widać w równaniu cząsteczkowym: większość jonów tylko patrzy, a reakcję gra kilka „aktorów”. Nauczysz się zapisywać to, co naprawdę zachodzi — w trzech poziomach coraz bliższych prawdzie.
lead: Opanujesz algorytm zapisu cząsteczkowego → jonowego pełnego → skróconego, tabelę rozpuszczalności i barwy osadów, przewidywanie, kiedy reakcja w ogóle zachodzi, oraz projektowanie otrzymywania soli i wykrywania jonów — od poziomu egzaminu ósmoklasisty po etap rejonowy konkursu.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]][[extra:AMBITNE]]
uwaga: Na poziomie egzaminu ósmoklasisty dominują równania cząsteczkowe, obserwacje i proste strącanie; równania jonowe pełne i skrócone to poziom konkursowy (etap rejonowy LKO). Tabela rozpuszczalności i barwy osadów obowiązkowe w obu warstwach. Reakcja „kwas z soli” z NaCl i stężonym H₂SO₄ opisana jako poziom rozszerzony. Barwy i rozpuszczalności graniczne (AgBr, AgI, CaSO₄) podano według konwencji szkolnych — wersje tabel różnią się między podręcznikami.
stopka: **CHEMIA J03 v1.0** · Równania jonowe, strącanie osadów, sól z soli, kwas z soli · 2026
stan: WYPEŁNIONY — AI z paczki GOTOWE ZAI (podpis: Claude), 2026-10-12, z materiału OLI.CHE.J03; do W1
---

::: minimum | Muszę umieć — 10 punktów
1. Zapisuję równanie reakcji w roztworze na trzech poziomach: cząsteczkowym (zbilansowane wzory sumaryczne) → jonowym pełnym → jonowym skróconym.
2. Rozpisuję na jony tylko mocne elektrolity w roztworze: sole rozpuszczalne, mocne kwasy, mocne zasady.
3. Nie rozpisuję na jony osadów, gazów, wody i słabych elektrolitów — zostają w formie cząsteczkowej.
4. Skracam w równaniu jonowym skróconym tylko te jony, które występują niezmienione po obu stronach (jony obserwatorowe) — i nie zostawiam żadnego z nich w zapisie skróconym.
5. Sprawdzam bilans: liczba atomów każdego pierwiastka oraz suma ładunków po lewej stronie równania skróconego równa się sumie ładunków po prawej.
6. Korzystam z tabeli rozpuszczalności regułami, nie mechanicznie: azotany i sole Na⁺, K⁺, NH₄⁺ rozpuszczalne; wyjątki chlorków (AgCl, PbCl₂, Hg₂Cl₂) i siarczanów(VI) (BaSO₄, PbSO₄, CaSO₄, SrSO₄) znam z pamięci.
7. Przewiduję powstanie osadu i podaję jego barwę: AgCl — biały serowaty, Cu(OH)₂ — niebieski, Fe(OH)₂ — brudnozielony, Fe(OH)₃ — brunatny, PbI₂ — żółty, BaSO₄ — biały.
8. Wymieniam trzy powody, dla których reakcja w roztworze zachodzi: powstaje osad, wydziela się gaz albo powstaje słaby elektrolit (np. woda).
9. Otrzymuję sól z soli (strącanie), sól z zasady, kwas z soli (wypieranie gazu lub słabego kwasu) i projektuję te drogi z odczynników, które mam pod ręką.
10. Projektuję wykrywanie jonów: Cl⁻ (AgNO₃ — biały osad), SO₄²⁻ (odczynnik z Ba²⁺ w zakwaszonym środowisku — biały osad), CO₃²⁻ (kwas → CO₂↑, potwierdzony zmętnieniem wody wapiennej), Cu²⁺/Fe²⁺/Fe³⁺ (NaOH — barwy osadów) — z kontrolą zakłóceń.
:::

::: warstwy
- e8 | <b>Podstawa:</b> równania cząsteczkowe zobojętniania i strącania, tabela rozpuszczalności, barwy osadów, obserwacje (↓, ↑, zmiana barwy), otrzymywanie soli z kwasu, zasady i soli, wykrywanie jonów — dokładnie poziom arkusza E8.
- understand | <b>Rozumienie:</b> dlaczego rozpisujemy tylko mocne elektrolity, skąd biorą się jony obserwatorowe, dlaczego reakcja bez osadu, gazu i wody to w rzeczywistości „nie-reakcja”, dlaczego bilans ładunków jest tak samo obowiązkowy jak bilans atomów.
- contest | <b>Konkurs:</b> pełny algorytm trzech poziomów, bilans ładunków w równaniach skróconych, projektowanie syntezy (sól z soli, kwas z soli), reakcje interferencyjne przy wykrywaniu jonów (Ag₂CO₃ a AgCl, BaCO₃ a BaSO₄), znajdowanie błędów w zapisach, analiza dwóch reakcji w jednym układzie (Ba(OH)₂ + H₂SO₄).
- extra | <b>Ambitne:</b> konwencja H⁺ a jon hydroniowy H₃O⁺, równowaga dysocjacji słabych elektrolitów (⇌), dlaczego tabela rozpuszczalności działa (energia sieci kontra hydratacja — zarys), „złoty deszcz” PbI₂, barowa papka jako zastosowanie nierozpuszczalności BaSO₄.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1](#wyklad) — Wykład od zera: teatr chemiczny i jego trzypoziomowy zapis.
- [§2](#poziomy) — Trzy poziomy równania: algorytm krok po kroku.
- [§3](#elektrolity) — Elektrolity: co rozpisujemy na jony, a co zostawia.
- [§4](#rozpuszczalnosc) — Tabela rozpuszczalności: reguły i wyjątki.
- [§5](#kiedy-zachodzi) — Kiedy reakcja w roztworze zachodzi.
- [§6](#osady) — Osady i ich barwy.
- [§7](#otrzymywanie) — Otrzymywanie soli: pięć dróg.
- [§8](#wykrywanie) — Wykrywanie jonów.
- [§10](#zadania-konkurs) — Zadania konkursowe oraz [§16](#test) — test końcowy.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Cel tej lekcji: **zapisywać reakcje zachodzące między jonami w roztworach wodnych na trzech poziomach, przewidywać, kiedy reakcja w ogóle zachodzi, oraz projektować otrzymywanie soli i wykrywanie jonów**. Kryterium gotowości wygląda tak:

1. Zapisujesz trzy poziomy równania: cząsteczkowe → jonowe pełne → jonowe skrócone.
2. Korzystasz z tabeli rozpuszczalności lub reguł.
3. Przewidujesz powstanie osadu i jego barwę.
4. Projektujesz sposób otrzymania soli i wykrycia jonów.
5. Unikasz typowych błędów: jony-widzowie w zapisie skróconym, brak ↓, mylenie barw.

Kolejność pracy:

1. Przeczytaj listę „Muszę umieć — 10 punktów” i zrób diagnozę ([§0.2](#diagnoza)) — przekonasz się, od którego miejsca zacząć.
2. Wykład ([§1](#wyklad)) daje jedną ideę, która spina całą lekcję: w roztworze grają aktorzy, a większość jonów to widownia.
3. Przerabiaj sekcje 2–8 po kolei — algorytm z [§2](#poziomy) wraca w każdym zadaniu. Najpierw odpowiedź na kartce, potem klucz: klucz czytany bez próby uczy czterokrotnie słabiej.
4. Doświadczenia z [§9](#doswiadczenia) traktuj zgodnie z BHP; próba kontrolna jest częścią wnioskowania, nie ozdobą.
5. Zadania konkursowe ([§10](#zadania-konkurs)) i warstwa olimpijska ([§11](#olimpijczyk)) — gdy podstawa jest pewna; tam czekają interferencje i pułapki zapisu.
6. Test końcowy ([§16](#test)) rozwiązuj bez zaglądania do lekcji; błędne odpowiedzi wskażą sekcje do powrotu.
7. Fiszki ([§17](#fiszki)) powtarzaj partiami i regularnie, a przed sprawdzianem przeczytaj ściągę i odhacz checklistę ([§20](#sciaga)).

Przydatne wcześniej (nieobowiązkowe — wykład tłumaczy wszystko od zera): pojęcie jonu i ładunku, wzory soli i nazwy kwasów, podstawy bilansowania równań. Reakcje wypierania metalu z soli opisuje lekcja CHE-X04 — tutaj pojawiają się jedynie jako jedna z dróg otrzymywania soli; obliczenia z nadmiarem rozwija lekcja CHE-R07.

## 0.2 | Diagnoza {#diagnoza}

Odpowiedz na kartce, bez zaglądania do lekcji. Potem sprawdź klucz i policz punkty.

1. Wymień trzy poziomy zapisu reakcji w roztworze — w kolejności od najbardziej „sumarycznego” do najbliższego prawdzie.
2. Których substancji nie rozpisujemy na jony w równaniu jonowym? Podaj cztery przykłady kategorii.
3. Jaka barwa osadu węglanu wapnia, a jaka — wodorotlenku miedzi(II)?
4. Zapisz równanie jonowe skrócone reakcji AgNO₃ z NaCl.
5. Czy po zmieszaniu roztworów NaNO₃ i KCl powstanie osad? Uzasadnij jednym zdaniem.

::: odp | Klucz diagnozy
1. (1 pkt) Cząsteczkowe → jonowe pełne → jonowe skrócone.
2. (1 pkt) Osady (↓), gazy (↑), woda (słaby elektrolit), słabe elektrolity (np. słabe kwasy i słabe zasady).
3. (1 pkt) CaCO₃ — biały; Cu(OH)₂ — niebieski.
4. (1 pkt) Ag⁺ + Cl⁻ → AgCl↓ (ze strzałką osadu).
5. (1 pkt) Nie — potencjalne produkty (KNO₃ i NaCl) są dobrze rozpuszczalne, więc wszystkie jony pozostają w roztworze jako obserwatorowe i nie zachodzi żadna reakcja netto.
:::

Rozliczenie: 5 pkt — szybki przebieg przez sekcje 2–3 i trening zadań konkursowych; 3–4 pkt — przerabiaj lekcję po kolei; 0–2 pkt — zacznij od wykładu i algorytmu, lekcja prowadzi od zera.

## 1 | Wykład — teatr chemiczny: aktorzy, widzowie i trzy tłumaczenia sceny {#wyklad} [[basic:E8]]

Wlej do probówki roztwór chlorku sodu, a do drugiej — roztwór azotanu(V) srebra, i zmieszaj. Zrobi się mleczno-biały osad. Z punktu widzenia zapisu cząsteczkowego „przereagowały” dwie sole: AgNO₃ + NaCl → AgCl↓ + NaNO₃. Ale to tylko zgrubne streszczenie. W roztworze żadnej soli nie ma cząsteczek „NaCl” — są jony: Na⁺, Cl⁻, Ag⁺, NO₃⁻. Gdy roztwory się spotykają, jony się mieszają, ale tylko jedna para naprawdę działa: Ag⁺ spotyka Cl⁻ i razem tworzą nierozpuszczalny AgCl, który opada jako biały osad. Jony Na⁺ i NO₃⁻ pozostają w roztworze dokładnie takie, jakie były — to **jony obserwatorowe** (chemicy mówią też: jony-widzowie).

Oto obraz przewodni całej lekcji: **reakcja w roztworze to przedstawienie teatralne**. Na scenie grają nieliczni aktorzy — jony, które się zmieniają (Ag⁺ i Cl⁻ zamieniają się w osad). Reszta widowni siedzi i patrzy: jony obserwatorowe nie zmieniają się ani o jotę. Dobry zapis reakcji to taki, który pokazuje akcję, a nie tłum w sali. Dlatego chemia wypracowała **trzy poziomy zapisu** — trzy tłumaczenia tej samej sceny, coraz bliższe temu, co dzieje się naprawdę.

**Poziom pierwszy: równanie cząsteczkowe.** Zapisuje substraty i produkty jako całe związki — tak, jakby w roztworze były cząsteczki soli. To zapis „dla porządku”: pokazuje, z czym się liczyć w laboratorium (odważyłeś 3 g azotanu(V) srebra, dodałeś roztwór chlorku sodu…), i jest obowiązkowy na egzaminie ósmoklasisty. Musi być zbilansowany i ze strzałkami (↓ przy osadach, ↑ przy gazach). Przykład: AgNO₃ + NaCl → AgCl↓ + NaNO₃.

**Poziom drugi: równanie jonowe pełne.** Tu otwieramy kurtynę i pokazujemy każdego uczestnika z imienia: rozpisujemy na jony **tylko mocne elektrolity obecne w roztworze** — sole rozpuszczalne, mocne kwasy, mocne zasady. Osady, gazy, woda i słabe elektrolity zostają w formie cząsteczkowej („niedotykalni”: osad, gaz, woda, słaby — zapamiętaj tę czwórkę). Dla naszego przykładu: Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻. Widzisz już, że po lewej i po prawej stoją ci sami Na⁺ i NO₃⁻ — widownia nie gra.

**Poziom trzeci: równanie jonowe skrócone.** Skreślamy jony obserwatorowe — te same po obu stronach — i zostaje sedno: **Ag⁺ + Cl⁻ → AgCl↓**. To jest prawdziwa reakcja: dwa jony, jeden osad, koniec. Na tym poziomie widać od razu, dlaczego ten sam biały osad powstanie niezależnie od tego, czy chlorek przywiezie Na⁺, K⁺ czy Mg²⁺, a srebro — NO₃⁻ czy inny rozpuszczalny anion: skrócone równanie nie pyta o widownię, tylko o aktorów.

Skoro tak, to kiedy w ogóle warto uruchamiać scenę? **Reakcja wymiany w roztworze zachodzi tylko wtedy, gdy powstaje coś, co opuszcza grę**: osad (↓ — znika z roztworu), gaz (↑ — ulatuje) albo słaby elektrolit, najczęściej woda (zobojętnianie: H⁺ + OH⁻ → H₂O). Jeśli zmieszanie dwóch roztworów soli nie da żadnej z tych trzech rzeczy, to nie powstaje żadna nowa substancja — i mimo pozornego „przetasowania” jonów mówimy uczciwie: reakcja nie zachodzi. To zdanie rozstrzyga połowę zadań konkursowych tego typu.

Trzy pytania kontrolne, które będą towarzyszyć ci przez całą lekcję: **(1) Kto jest w roztworze?** (dysocjacja: co rozpisuję na jony) — **(2) Czy powstaje osad, gaz albo woda?** (tabela rozpuszczalności + trzy powody reakcji) — **(3) Czy mój zapis jest równy?** (bilans atomów i ładunków; ↓ i ↑ na miejscu). Algorytm z [§2](#poziomy) zamieni te trzy pytania w siedem konkretnych kroków.

I na koniec uczciwa przestroga konkursowa: kolor osadu to wskazówka, nie wyrok. Białe osady ma nie tylko AgCl — także BaSO₄, CaCO₃ czy Ag₂CO₃ (białawożółty). Dlatego analitycy dodają próby kontrolne, zakwaszają roztwór przed badaniem (węglan się rozpuści z ulotem CO₂, a chlorek zostanie) i zawsze formułują wniosek z warunkami, nie „na sztywno”. Do tego wrócimy w [§8](#wykrywanie) i [§10](#zadania-konkurs).

Masz mapę: teatr, trzy poziomy zapisu, trzy powody reakcji i trzy pytania kontrolne. Teraz krok po kroku — z tabelami, równaniami i zadaniami.

## 2 | Trzy poziomy zapisu — algorytm krok po kroku {#poziomy} [[basic:E8]] [[understand:ROZUMIENIE]]

**Algorytm w trzech krokach:**

1. **Cząsteczkowe** — zbilansowane, wzory sumaryczne, strzałki ↓ i ↑ na miejscu.
2. **Jonowe pełne** — mocne elektrolity zapisujemy jako jony (sole rozpuszczalne, mocne kwasy, mocne zasady). Osady, gazy, słabe elektrolity (H₂O, słabe kwasy) zostawiamy w formie cząsteczkowej.
3. **Jonowe skrócone** — skreślamy jony-widzów (te same po obu stronach).

**Pełna procedura w siedmiu krokach** — używaj jej przy każdym nowym równaniu:

1. Zapisz wzory substratów i produktów.
2. Zbilansuj równanie cząsteczkowe.
3. Oznacz substancje rozpuszczone i osady (tabela rozpuszczalności z [§4](#rozpuszczalnosc)).
4. Rozpisz na jony mocne elektrolity w roztworze.
5. Nie rozpisuj osadów, gazów, wody i słabych elektrolitów.
6. Skróć identyczne jony po obu stronach.
7. Sprawdź atomy i ładunki.

**Przykład 1 — zobojętnianie (mocna zasada + mocny kwas):**

NaOH + HCl → NaCl + H₂O
Na⁺ + OH⁻ + H⁺ + Cl⁻ → Na⁺ + Cl⁻ + H₂O
**OH⁻ + H⁺ → H₂O**

**Przykład 2 — strącanie (sól + sól):**

AgNO₃ + NaCl → AgCl↓ + NaNO₃
Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻
**Ag⁺ + Cl⁻ → AgCl↓**

**Przykład 3 — strącanie siarczanu(VI) baru:**

BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl
Ba²⁺ + 2Cl⁻ + 2Na⁺ + SO₄²⁻ → BaSO₄↓ + 2Na⁺ + 2Cl⁻
**Ba²⁺ + SO₄²⁻ → BaSO₄↓**

Zauważ w przykładzie 3 dwie rzeczy. Po pierwsze: rozpisując BaCl₂, wypisujemy **dwa** jony Cl⁻ (bo wzór mówi Cl₂), a rozpisując Na₂SO₄ — **dwa** Na⁺. Pominięcie współczynnika przy jonie wieloatomowym to jeden z najczęstszych błędów. Po drugie: skracamy po **dwa** Na⁺ i po **dwa** Cl⁻ — a nie tylko po jednym, bo tyle ich realnie stoi po obu stronach.

::: karta core | Najważniejsze — trójkrok w jednym oddechu
Cząsteczkowe (zbilansowane, ze strzałkami) → rozpisz tylko mocne elektrolity („niedotykalni”: osad, gaz, woda, słaby) → skreśl widzów po obu stronach i sprawdź atomy z ładunkami. Trzy przykłady-szpilki: OH⁻ + H⁺ → H₂O; Ag⁺ + Cl⁻ → AgCl↓; Ba²⁺ + SO₄²⁻ → BaSO₄↓.
:::

::: karta understand | W skrócie — trzy poziomy
Równanie cząsteczkowe to rejestr laboratoryjny: co odważono i co odstawiono. Jonowe pełne to lista obecności: każdy jon w roztworze z imienia. Jonowe skrócone to scena aktorska: tylko to, co się zmienia. Idziesz od całego tłumu do aktorów, nigdy odwrotnie. Na egzaminie ósmoklasisty zwykle wystarczy poziom cząsteczkowy + obserwacje; na konkursie oczekiwane są wszystkie trzy poziomy z poprawnym bilansem ładunków.
:::

::: karta exam | Zadanie 1 (3 pkt) — Zobojętnianie na trzech poziomach
Zapisz równania cząsteczkowe, pełne jonowe i skrócone reakcji:
a) wodorotlenek potasu + kwas siarkowy(VI) (3 pkt)

::: odp | Pokaż klucz
a) (3 pkt po 1 pkt za każdy poziom) Cząsteczkowo: 2KOH + H₂SO₄ → K₂SO₄ + 2H₂O. Jonowo pełne: 2K⁺ + 2OH⁻ + 2H⁺ + SO₄²⁻ → 2K⁺ + SO₄²⁻ + 2H₂O. Skrócone: 2OH⁻ + 2H⁺ → 2H₂O (w zapisie uproszczonym: OH⁻ + H⁺ → H₂O). Jony K⁺ i SO₄²⁻ są obserwatorowymi i nie mogą się pojawić w zapisie skróconym.
:::
:::

::: karta exam | Zadanie 2 (3 pkt) — Strącanie siarczanu(VI) baru na trzech poziomach
Zapisz równania cząsteczkowe, pełne jonowe i skrócone reakcji:
a) chlorek baru + siarczan(VI) sodu (3 pkt)

::: odp | Pokaż klucz
a) (3 pkt po 1 pkt za każdy poziom) Cząsteczkowo: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl. Jonowo pełne: Ba²⁺ + 2Cl⁻ + 2Na⁺ + SO₄²⁻ → BaSO₄↓ + 2Na⁺ + 2Cl⁻. Skrócone: Ba²⁺ + SO₄²⁻ → BaSO₄↓ (biały osad nierozpuszczalny w kwasach). Zwróć uwagę na podwójne licze jony przy rozpisie i przy skracaniu.
:::
:::

## 3 | Dysocjacja i elektrolity — co rozpisujemy na jony {#elektrolity} [[understand:ROZUMIENIE]]

Zanim zapiszesz cokolwiek jonowo, musisz wiedzieć, kto w roztworze naprawdę jest. **Dysocjacja elektrolityczna** to rozpad elektrolitu na jony w roztworze wodnym, na przykład:

NaCl → Na⁺ + Cl⁻

Uwaga istotna: **nie każda dysocjacja jest reakcją chemiczną prowadzącą do powstania nowych substancji**. Dysocjacja to rozpad istniejącej substancji na jony; równanie jonowe opisuje reakcję, w której powstaje **nowa** substancja (osad, gaz, woda). NaCl → Na⁺ + Cl⁻ to opis stanu roztworu, a Ag⁺ + Cl⁻ → AgCl↓ to reakcja.

**Elektrolity mocne i słabe:**

- mocne elektrolity zapisuje się zwykle jako całkowicie zdysocjowane (strzałka →): mocne kwasy (HCl, H₂SO₄, HNO₃), mocne zasady (NaOH, KOH, Ba(OH)₂), większość rozpuszczalnych soli;
- słabe elektrolity zapisuje się strzałką równowagi (⇌): dysocjują tylko częściowo (słabe kwasy, słabe zasady);
- **woda jest słabym elektrolitem** — w równaniach jonowych zawsze zostaje cząsteczkowo;
- osadów, gazów i czystej wody **nie rozpisuje się** na jony w równaniu jonowym.

Dlaczego tak? Bo zapis jonowy ma pokazywać, co realnie krąży w roztworze i co może zareagować. Cząsteczka słabego kwasu w większości nie zdąży się rozpaść — więc nie wolno jej „naprawdę istniejącym jonem” robić. Osad już nie jest w roztworze (opadł), gaz już wyleciał — nie ma czego rozpisywać.

**Konwencja H⁺.** W roztworze wodnym wolny proton (H⁺) nie istnieje jako samotna cząstka — łączy się z cząsteczką wody, tworząc jon hydroniowy H₃O⁺. Szkolny zapis H⁺ to **konwencja uproszczona**. Na poziomie szkoły pisz H⁺ (tak wymagają klucze), ale wiedz, że dokładniej jest H₃O⁺ — i na olimpiadzie warto to zaznaczyć jednym zdaniem.

::: karta warning | Uwaga — czwórka „niedotykalnych”
W równaniu jonowym pełnym rozpisujesz TYLKO: rozpuszczalne sole, mocne kwasy, mocne zasady. Nie rozpisujesz: (1) osadów — AgCl↓, BaSO₄↓, Cu(OH)₂↓, (2) gazów — CO₂↑, H₂↑, (3) wody — H₂O, (4) słabych elektrolitów — np. słabych kwasów. Jeden błąd w tej klasyfikacji psuje cały dalszy zapis: najpierw sklasyfikuj każdą substancję, dopiero potem rozpisuj.
:::

::: nie-myl | Dysocjacja ≠ reakcja jonowa; elektrolit ≠ ogniwo reakcji
- Dysocjacja ≠ reakcja jonowa — dysocjacja rozpada istniejącą substancję na jony (NaCl → Na⁺ + Cl⁻), reakcja jonowa tworzy nową substancję (Ag⁺ + Cl⁻ → AgCl↓); test rozstrzygający: czy po prawej stronie jest coś, czego nie było po lewej jako odrębnej substancji? Tak — reakcja. Nie — tylko opis roztworu.
- Mocny elektrolit ≠ stężony roztwór — „mocny” mówi o stopniu dysocjacji (całkowita), „stężony” o ilości substancji w objętości; test rozstrzygający: roztwór rozcieńczony HCl to nadal elektrolit mocny, tylko rzadko „obsadzony”.
- Zdysocjowany ≠ zareagowany — jony mogą krążyć w roztworze latami bez reakcji (Na⁺ i NO₃⁻ w roztworze); test rozstrzygający: reakcja wymaga powstania osadu, gazu albo słabego elektrolitu.
:::

::: karta exam | Zadanie 3 (3 pkt) — Kto zostaje, kto się rozpisuje
Oceń, które z podanych substancji w równaniu jonowym pełnym rozpiszesz na jony, a które zostawisz w formie cząsteczkowej, i uzasadnij: a) HCl, b) H₂O, c) AgCl↓, d) NaNO₃ (roztwór), e) CO₂↑, f) KOH.

::: odp | Pokaż klucz
a) (0,5 pkt) Rozpisz — HCl to mocny kwas: H⁺ + Cl⁻. b) (0,5 pkt) Zostaw — woda jest słabym elektrolitem. c) (0,5 pkt) Zostaw — to osad, nie jest w roztworze. d) (0,5 pkt) Rozpisz — rozpuszczalna sól: Na⁺ + NO₃⁻. e) (0,5 pkt) Zostaw — gaz ulatuje z roztworu. f) (0,5 pkt) Rozpisz — mocna zasada: K⁺ + OH⁻. (Suma 3 pkt.)
:::
:::

## 4 | Tabela rozpuszczalności — reguły i wyjątki {#rozpuszczalnosc} [[basic:E8]]

Tabela rozpuszczalności odpowiada na pytanie „czy ten związek opuści roztwór jako osad?”. Uczymy jej regułami — tak, żeby nowe przypadki można było rozstrzygnąć rozumowaniem, a nie szukaniem w pamięci.

| Reguła | Wyjątki |
|---|---|
| Wszystkie azotany(V) — R | — |
| Wszystkie sole Na⁺, K⁺, NH₄⁺ — R | — |
| Większość chlorków — R | AgCl, PbCl₂, Hg₂Cl₂ — N |
| Większość siarczanów(VI) — R | BaSO₄, PbSO₄, CaSO₄, SrSO₄ — N/T |
| Wodorotlenki metali I i II grupy (oprócz Be, Mg) — R | reszta zwykle N |
| Węglany, fosforany, siarczki — zwykle N | sole metali I grupy i amonu — R |

Oznaczenia: **R** = dobrze rozpuszczalna, **N** = nierozpuszczalna (osad ↓), **T** = trudno rozpuszczalna.

Jak pracować regułami, nie wkuwaniem: rozpatrując związek, najpierw sprawdź dwie „nieomylnie rozpuszczalne” rodziny (azotany; sole Na/K/NH₄ — żaden wyjątek nie istnieje), dopiero potem rodzinę reszty kationu i anionu (chlorki? siarczany(VI)? wodorotlenki? węglany?) i przejrzyj listę wyjątków. Na przykład CaSO₄ — siarczan(VI), a wapń nie jest wyjątkiem od reguły siarczanów, bo wyjątki to Ba, Pb, Ca, Sr… i tu wapń właśnie jest na liście: CaSO₄ — trudno rozpuszczalny (T). Kolejność pytania: anion → wyjątki → werdykt.

::: karta understand | W skrócie — tabela rozpuszczalności
Dwa filary pewności: (1) azotany(V) i sole sodu, potasu i amonu są rozpuszczalne zawsze — bez wyjątków; (2) osady najczęściej wytrącają się jako: chlorki srebra i ołowiu, siarczany(VI) baru, ołowiu, wapnia i strontu, węglany i fosforany większości metali, wodorotlenki poza litowcami, wapniem i barem (oraz bez berylu i magnezu, które to wyjątki od rozpuszczalności wodorotlenków II grupy). Reguły czytaj od anionu do wyjątków — mechaniczne wkuwanie bez sprawdzenia to najkrótsza droga do błędu (zgodnie z listą typowych błędów: tabela „na pamięć” zamiast reguł + sprawdzenie).
:::

::: karta exam | Zadanie 4 (4 pkt) — Rozstrzygnij rozpuszczalność
Korzystając z reguł (nie z „pamięci tabeli”), oceń rozpuszczalność i podaj regułę, na którą się powołujesz: a) Ca(NO₃)₂, b) K₂CO₃, c) AgCl, d) BaSO₄, e) Na₂SO₄, f) Fe(OH)₃.

::: odp | Pokaż klucz
a) (0,5 pkt + 0,5 pkt za regułę) R — wszystkie azotany(V) są rozpuszczalne. b) (0,5 + 0,5) R — węglany są zwykle nierozpuszczalne, ale sole potasu są wyjątkiem (reguła: wszystkie sole K⁺ — R). c) (0,5 + 0,5) N — chlorki są rozpuszczalne, ale AgCl jest wyjątkiem. d) (0,5 + 0,5) N — siarczany(VI) są rozpuszczalne, ale BaSO₄ jest wyjątkiem (i to jeden z najbardziej upartych osadów). e) (0,5 + 0,5) R — siarczan(VI) sodu: sól Na⁺ jest zawsze rozpuszczalna. f) (0,5 + 0,5) N — wodorotlenki poza metali I grupy i Be/Mg w II grupie są zwykle nierozpuszczalne; Fe(OH)₃ — brunatny osad.
:::
:::

## 5 | Kiedy reakcja w roztworze zachodzi {#kiedy-zachodzi} [[understand:ROZUMIENIE]] [[basic:E8]]

To pytanie nagradza w każdej konkurencji, od sprawdzianu po etap rejonowy. **Reakcja wymiany w roztworze zachodzi tylko wtedy, gdy powstaje produkt, który opuszcza sferę reakcji:**

1. **osad (↓)** — substancja nierozpuszczalna lub trudno rozpuszczalna opada na dno; jej jony są usuwane z gry (AgCl↓, BaSO₄↓, Cu(OH)₂↓);
2. **gaz (↑)** — produkt ulatuje (CO₂ z węglanów, H₂ w reakcjach metali z kwasami);
3. **słaby elektrolit** — najczęściej woda w zobojętnieniu (H⁺ + OH⁻ → H₂O); dysocjuje tak słabo, że jony H⁺ i OH⁻ są faktycznie usuwane z gry.

Jeśli żadna z trzech rzeczy nie powstaje — nie ma reakcji. Klasyka: NaNO₃ + KCl. Potencjalne produkty (KNO₃ i NaCl) są rozpuszczalne, więc wszystkie jony — Na⁺, NO₃⁻, K⁺, Cl⁻ — pozostają w roztworze niezmienione. Zapis „NaNO₃ + KCl → KNO₃ + NaCl” niczego nie opisuje: nic nowego nie powstało, zmieniły się tylko pary partnerów w roztworze. Uczciwy wniosek: **nie ma typowej reakcji netto**.

Wpadka równie częsta: **skracanie jonów, których nie ma po obu stronach**. Jony obserwatorowe usuwa się tylko wtedy, gdy rzeczywiście występują niezmienione po obu stronach równania pełnego. Jeśli w równaniu skróconym zostawisz choć jednego widza — odpowiedź jest błędna, nawet jeśli „skład chemiczny się zgadza”.

::: karta warning | Uwaga — „przetasowanie jonów” to nie reakcja
Zdanie „zmieszałem dwie sole, więc zaszła reakcja wymiany” jest za krótkie. Sprawdź trzy powody reakcji (osad, gaz, słaby elektrolit) — i dopiero wtedy pisz równanie albo uczciwe „brak reakcji”. Na konkursie „brak reakcji” jest pełnoprawną, punktową odpowiedzią, o ile masz ją uzasadnić rozpuszczalnością potencjalnych produktów.
:::

::: karta understand | W skrócie — trzy powody reakcji
Osmiotrysk, nie — osad, gaz, woda: trzy jedyne powody, dla których reakcja wymiany w roztworze ma sens. Osad opuszcza scenę na dno probówki, gaz przez otwór probówki, woda — pozostając w roztworze — „pochłania” H⁺ i OH⁻ w bezelitowe cząsteczki. Brak wszystkich trzech = wszystkie jony zostają w roztworze = reakcja nie zachodzi. Kontroluj przy tym dwie rzeczy: nie skracaj jona, którego nie ma po obu stronach, i nie pisz reakcji, której nie ma.
:::

::: karta exam | Zadanie 5 (4 pkt) — Które pary dadzą osad?
Oceń, które pary roztworów dadzą osad; dla osadów zapisz równanie jonowe skrócone:
a) NaCl + AgNO₃ (1 pkt)
b) KNO₃ + Na₂SO₄ (1 pkt)
c) CaCl₂ + Na₂CO₃ (1 pkt)
d) CuSO₄ + NaOH (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Tak: Ag⁺ + Cl⁻ → AgCl↓ (biały, serowaty).
b) (1 pkt) Nie — potencjalne produkty (K₂SO₄ i NaNO₃) są dobrze rozpuszczalne, więc wszystkie jony pozostają obserwatorowe; reakcja nie zachodzi.
c) (1 pkt) Tak: Ca²⁺ + CO₃²⁻ → CaCO₃↓ (biały).
d) (1 pkt) Tak: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓ (niebieski).
:::
:::

## 6 | Osady i ich barwy — obowiązkowy katalog {#osady} [[basic:E8]]

Barwa osadu to najcenniejsza obserwacja w zadaniach o strącaniu — często to ona daje osobny punkt w kluczu. Katalog poniżej jest obowiązkowy w całości.

| Osad | Barwa | Reakcja skrócona | Uwagi |
|---|---|---|---|
| AgCl | biały serowaty | Ag⁺ + Cl⁻ → AgCl↓ | rozpuszcza się w NH₃(aq) |
| AgBr | żółtawobiały | Ag⁺ + Br⁻ → AgBr↓ | światłoczuły (fotografia) |
| AgI | żółty | Ag⁺ + I⁻ → AgI↓ | światłoczuły |
| BaSO₄ | biały | Ba²⁺ + SO₄²⁻ → BaSO₄↓ | nierozpuszczalny w kwasach |
| CaCO₃ | biały | Ca²⁺ + CO₃²⁻ → CaCO₃↓ | rozpuszcza się w kwasach z CO₂↑ |
| Cu(OH)₂ | niebieski | Cu²⁺ + 2OH⁻ → Cu(OH)₂↓ | — |
| Fe(OH)₂ | brudnozielony | Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ | utlenia się na powietrzu (ciemnieje ku brunatnemu Fe(OH)₃) |
| Fe(OH)₃ | brunatny/rdzawy | Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ | — |
| PbI₂ | żółty | Pb²⁺ + 2I⁻ → PbI₂↓ | „złoty deszcz” — krystaliczny, błyszczący osad |
| PbCl₂ | biały | Pb²⁺ + 2Cl⁻ → PbCl₂↓ | słabo rozpuszczalny (T) |

Dwa komentarze, które wygrywają punkty. Pierwszy: **Fe(OH)₂ się zmienia** — świeży brudnozielony osad na powietrzu stopniowo ciemnieje ku brunatnemu, bo tlen powietrza utlenia Fe²⁺ do Fe³⁺; w zapisie obserwacji warto odnotować „osad brudnozielony, ciemniejący na powietrzu”. Drugi: **białe osady się różnią zachowaniem** — BaSO₄ nie rozpuszcza się w kwasach, a CaCO₃ rozpuszcza się z ulotem CO₂; to rozróżnienie będzie bronią w zadaniu o interferencjach ([§10](#zadania-konkurs), zadanie 15).

::: karta warning | Uwaga — barwa wskazuje, nie wydaje wyroku
Sam kolor osadu nie zawsze stanowi jednoznaczną identyfikację: biały jest AgCl, ale też BaSO₄, CaCO₃, Ag₂CO₃ (białawożółty) i PbCl₂. Przy próbach strącaniowych uwzględnij rozpuszczalność, stężenie i możliwe reakcje uboczne — a wniosek formułuj z warunkami („biały osad nierozpuszczalny w rozcieńczonym kwasie, po dodaniu AgNO₃ do zakwaszonej próbki → chlorki”). Pełną analizę interferencji znajdziesz w zadaniu 15.
:::

::: karta exam | Zadanie 6 (3 pkt) — Barwy do dopasowania
Przyporządkuj osadom barwy: biały, niebieski, brudnozielony, brunatny, żółty. Osady: a) Cu(OH)₂, b) Fe(OH)₂, c) Fe(OH)₃, d) PbI₂, e) BaSO₄. (0,5 pkt za każdy poprawny + 0,5 pkt za wskazanie osadu, który ciemnieje na powietrzu.)

::: odp | Pokaż klucz
a) (0,5 pkt) niebieski. b) (0,5 pkt) brudnozielony. c) (0,5 pkt) brunatny/rdzawy. d) (0,5 pkt) żółty. e) (0,5 pkt) biały. Ciemnienie na powietrzu (0,5 pkt): Fe(OH)₂ utlenia się do Fe(OH)₃ — osad brudnozielony stopniowo przyjmuje barwę brunatną.
:::
:::

## 7 | Otrzymywanie soli — pięć dróg {#otrzymywanie} [[basic:E8]]

„Sól z soli”, „kwas z soli” — te hasła z tytułu lekcji to nie żart lingwistyczny, lecz nazwy konkretnych dróg syntezy. Oto pełny zestaw:

1. **Sól + kwas** (mocniejszy/lotniejszy kwas wypiera słabszy lub lotniejszy):
   Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑
   Jonowo skrócone: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑
   To zarazem klasyczna droga „kwasu z soli” przy odwróconym myśleniu: węglan zostaje wyparty z soli jako gazowy CO₂ (po rozpadzie kwasu węglowego).
2. **Sól + zasada**:
   CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄
   Jonowo skrócone: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓
3. **Sól + sól** (podwójna wymiana — zachodzi, gdy powstaje osad, gaz lub słaby elektrolit):
   AgNO₃ + NaCl → AgCl↓ + NaNO₃
   Jonowo skrócone: Ag⁺ + Cl⁻ → AgCl↓
4. **Metal + sól** (wypieranie — pełna analiza w lekcji CHE-X04):
   Fe + CuSO₄ → FeSO₄ + Cu↓
   Jonowo skrócone: Fe + Cu²⁺ → Fe²⁺ + Cu
5. **Kwas + zasada** (zobojętnianie):
   NaOH + HCl → NaCl + H₂O
   Jonowo skrócone: OH⁻ + H⁺ → H₂O

**Kwas z soli — poziom rozszerzony.** Najbardziej klasyczny przykład „kwasu wypieranego z soli”: NaCl + H₂SO₄ (stężony) → NaHSO₄ + HCl↑ — mniej lotny kwas (siarkowy(VI)) wypiera z soli lotniejszy (chlorowodorowy), który ulatuje. Wymaga stężonego kwasu i jest poza zwykłym zakresem E8; na rejonie bywa pytaniem „na rozgrzewkę” — warto znać kierunek (do weryfikacji w informatorze bieżącej edycji).

::: karta understand | W skrócie — projektowanie syntezy
Zaplanuj od produktu wstecz: chcę Cu(OH)₂ → potrzebuję Cu²⁺ (rozpuszczalna sól: CuSO₄) + OH⁻ (rozpuszczalna zasada: NaOH) → reakcja z osadem, dobra. Chcę NaCl → droga 1: zobojętnienie HCl + NaOH; droga 2: sól z soli, np. Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl (osad odfiltrować). Chcę pozbyć się węglanu z roztworu → sól + kwas: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑. Zasada wspólna: wybieraj odczynniki tak, żeby produkt pożądany był rozpuszczalny (jeśli ma zostać w roztworze) albo nierozpuszczalny (jeśli chcesz go odfiltrować), a produkt uboczny — możliwy do odseparowania (osad albo gaz).
:::

::: karta exam | Zadanie 7 (3 pkt) — Zaprojektuj czysty osad wodorotlenku miedzi(II)
Zaprojektuj sposób otrzymania czystego osadu Cu(OH)₂:
a) podaj odczynniki (1 pkt)
b) zapisz równanie cząsteczkowe i jonowe skrócone (1 pkt)
c) opisz, jak oddzielisz i oczyścisz osad (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Roztwór CuSO₄ (albo innej rozpuszczalnej soli miedzi(II)) i roztwór NaOH lub KOH.
b) (1 pkt) CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄; skrócone: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓ (niebieski osad).
c) (1 pkt) Filtracja (osad zostaje na filtrze, roztwór Na₂SO₄ spływa), następnie przemywanie osadu wodą destylowaną i suszenie.
:::
:::

## 8 | Wykrywanie jonów — reakcje charakterystyczne {#wykrywanie} [[basic:E8]] [[understand:ROZUMIENIE]]

Wykrywanie jonów to strącanie postawione na głowie: nie celujesz w produkt, tylko odczytujesz, co jest w próbce. Katalog podstawowy:

| Jon | Odczynnik | Obserwacja | Równanie skrócone |
|---|---|---|---|
| Cl⁻ | AgNO₃ | biały osad (rozp. w NH₃(aq)) | Ag⁺ + Cl⁻ → AgCl↓ |
| SO₄²⁻ | BaCl₂ lub Ba(NO₃)₂ | biały osad nierozp. w kwasach | Ba²⁺ + SO₄²⁻ → BaSO₄↓ |
| CO₃²⁻ | kwas + woda wapienna | gaz + zmętnienie wody wapiennej | CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O |
| Cu²⁺ | NaOH | niebieski osad | Cu²⁺ + 2OH⁻ → Cu(OH)₂↓ |
| Fe³⁺ | NaOH | brunatny osad | Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ |
| Fe²⁺ | NaOH | brudnozielony osad | Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ |

**Dopowiedzenia, które podnoszą jakość odpowiedzi na konkursie:**

- **Potwierdzenie gazu z węglanu:** zmętnienie wody wapiennej: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O — sam „bulgotanie” nie jest dowodem CO₂.
- **Zakwaszenie przed próbą na SO₄²⁻:** rozpuszczalna sól baru dodawana do próbki zakwaszonej (np. rozcieńczonym HCl lub HNO₃) — zakwaszenie pomaga ograniczyć zakłócenia powodowane przez niektóre inne aniony (np. CO₃²⁻, którego BaCO₃ też byłby białym osadem).
- **Kontrola:** próbka porównawcza (świadek pozytywny z wiadomym jonem i świadek negatywny z wodą destylowaną) — bez niej wniosek nie jest pewny; zanieczyszczenie próbki lub reakcje powierzchniowe mogą symulować wynik.
- **Interpretacja z warunkami:** biały osad BaSO₄ jest obserwacją, którą należy interpretować z uwzględnieniem możliwych interferencji — nie „biały osad = na pewno siarczan”.

::: karta exam | Zadanie 8 (4 pkt) — Zaprojektuj analizę próbki
W próbce roztworu mogą znajdować się jony Cl⁻, SO₄²⁻ lub CO₃²⁻.
a) Zaprojektuj próbę na CO₃²⁻ z potwierdzeniem gazu. (2 pkt)
b) Zaprojektuj próbę na SO₄²⁻ z kontrolą zakłóceń. (1 pkt)
c) Zaprojektuj próbę na Cl⁻ tak, aby wynik nie został zafałszowany przez węglan. (1 pkt)

::: odp | Pokaż klucz
a) (2 pkt) Do próbki dodaj rozcieńczony kwas (np. HCl) — wydzielanie gazu (CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O); gaz wprowadź do wody wapiennej: zmętnienie (Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O) potwierdza CO₂, a więc obecność węglanów. (1 pkt za próbę z kwasem, 1 pkt za potwierdzenie wody wapiennej z równaniem.)
b) (1 pkt) Zakwasz próbkę rozcieńczonym HCl/HNO₃, następnie dodaj rozpuszczalną sól baru (BaCl₂ lub Ba(NO₃)₂); biały osad nierozpuszczalny w kwasie (Ba²⁺ + SO₄²⁻ → BaSO₄↓) wskazuje na siarczany(VI) — zakwaszenie eliminuje zakłócenia od węglanów.
c) (1 pkt) Najpierw zakwasz próbkę rozcieńczonym HNO₃ (usunie CO₃²⁻ jako CO₂↑), dopiero potem dodaj AgNO₃; trwały biały osad (Ag⁺ + Cl⁻ → AgCl↓) wskazuje chlorki. Bez wcześniejszego zakwaszenia Ag₂CO₃ mógłby udawać AgCl (oba osady białe/białawożółte).
:::
:::

## 9 | Doświadczenia {#doswiadczenia} [[understand:ROZUMIENIE]]

Trzy próby strąceniowe-analityczne z pełnymi kontrolami. W każdym doświadczeniu próba kontrolna jest obowiązkowa — bez niej wniosek nie jest dowodem.

::: dosw | Doświadczenie 1 — Wykrywanie jonów chlorkowych
Problem: Czy badany roztwór zawiera jony Cl⁻?
Hipoteza: Jeżeli roztwór zawiera chlorki, dodanie AgNO₃ da biały osad AgCl.
Sprzęt: probówki, badany roztwór, roztwór AgNO₃, roztwór NaCl jako świadek pozytywny, woda destylowana jako świadek negatywny, statyw, pipety.
Przebieg: 1) Do trzech probówek wlej: badany roztwór, roztwór NaCl (świadek pozytywny), wodę destylowaną (świadek negatywny). 2) Do każdej dodaj po kilka kropli AgNO₃. 3) Porównaj osady; dla wiarygodności sprawdź rozpuszczalność osadu w NH₃(aq) (jeśli dostępne pod nadzorem).
Próba kontrolna: świadek negatywny (woda destylowana + AgNO₃) — brak osadu potwierdza, że zmętnienie w probówce badanej nie pochodzi od samego odczynnika ani zanieczyszczeń wody; świadek pozytywny pokazuje wygląd osadu, z którym porównujesz.
Obserwacja: w probówce badanej i w świadku pozytywnym biały, serowaty osad; w świadku negatywnym roztwór przezroczysty.
Wniosek: próbka zawiera jony chlorkowe, jeżeli wykluczono jony dające podobne osady i zastosowano odpowiednią kontrolę — przy obecności węglanów najpierw zakwasz próbkę rozcieńczonym HNO₃.
BHP: sole srebra barwią skórę i tkaniny (ciemne plamy) — pracuj w rękawicach i okularach; AgNO₃ drażni oczy; nie pij roztworów; odpady ze związkami srebra zbierz do pojemnika na odpady srebrowe, nie do zlewu.
:::

::: dosw | Doświadczenie 2 — Wykrywanie jonów siarczanowych(VI)
Problem: Czy badany roztwór zawiera jony SO₄²⁻?
Hipoteza: Jeżeli roztwór zawiera siarczany(VI), dodanie rozpuszczalnej soli baru do zakwaszonej próbki da biały osad BaSO₄.
Sprzęt: probówki, badany roztwór, rozcieńczony HCl lub HNO₃, roztwór BaCl₂ (lub Ba(NO₃)₂), roztwór Na₂SO₄ jako świadek pozytywny, woda destylowana, pipety.
Przebieg: 1) Do probówek (badana, świadek pozytywny, świadek negatywny) wlej jednakowe objętości płynów. 2) Zakwasz każdą próbkę kilkoma kroplami rozcieńczonego kwasu. 3) Dodaj kilka kropli roztworu soli baru. 4) Porównaj.
Próba kontrolna: świadek negatywny (woda destylowana, zakwaszona, z solą baru) — brak osadu wyklucza pochodzenie zmętnienia od samego odczynnika; świadek pozytywny pokazuje wzorcową barwę i konsystencję osadu.
Obserwacja: w probówce badanej i w świadku pozytywnym biały, drobnoziarnisty osad nierozpuszczalny w kwasie; w świadku negatywnym brak zmian.
Wniosek: obecność trwałego białego osadu BaSO₄ w zakwaszonej próbce wskazuje na jony SO₄²⁻; zakwaszenie ograniczyło zakłócenia od węglanów (BaCO₃ rozpuściłby się w kwasie z ulotem CO₂).
BHP: sole baru są toksyczne — unikaj kontaktu ze skórą i oczami, pracuj w rękawicach i okularach; HCl/HNO₃ rozcieńczone drażnią; nie pij roztworów; odpady z solami baru zbierz do właściwego pojemnika (nie do zlewu); doświadczenie pod nadzorem osoby dorosłej.
:::

::: dosw | Doświadczenie 3 — Wykrywanie jonów węglanowych
Problem: Czy badana próbka (roztwór lub proszek) zawiera węglany?
Hipoteza: Jeżeli próbka zawiera CO₃²⁻, dodanie rozcieńczonego kwasu wydzieli CO₂, który zmąci wodę wapienną.
Sprzęt: probówka z odpowiadającym korkiem i rurką (lub rurka odpowietrzająca do drugiej probówki), badana próbka, rozcieńczony HCl, woda wapienna Ca(OH)₂, kawałek marmuru (CaCO₃) jako świadek pozytywny, woda destylowana jako świadek negatywny.
Przebieg: 1) Do probówki z badaną próbką dodaj rozcieńczony HCl i natychmiast zamknij korkiem z rurką prowadzącą do probówki z wodą wapienną. 2) Obserwuj wydzielanie gazu i barwę wody wapiennej. 3) Powtórz dla świadka pozytywnego (marmur) i negatywnego (woda destylowana).
Próba kontrolna: świadek pozytywny (marmur + HCl) — pokazuje spodziewany obraz: burzliwy gaz + zmętnienie wody wapiennej; świadek negatywny wyklucza zmętnienie od samej czynności.
Obserwacja: w próbie badanej (jeśli węglan obecny) — wydzielanie gazu; woda wapienna mętnieje. Równania: CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O oraz Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O.
Wniosek: gaz zmącający wodę wapienną to CO₂, a więc próbka zawierała węglany; bez potwierdzenia wodą wapienną sam ulot gazu nie przesądza o obecności CO₃²⁻.
BHP: HCl rozcieńczony drażni skórę i oczy — okulary i rękawice; wodę wapienną trzymaj z dala od oczu (drażni); nie zbieraj gazu do dużych objętości; po pracy umyj ręce i płucz probówki.
:::

## 10 | Zadania konkursowe {#zadania-konkurs} [[exam:KONKURS]]

Osiem zadań w typach: przekształcanie, uzasadnianie, znajdź błąd, analiza tekstu, zadanie z pułapką, projektowanie. Każde z kluczem i uzasadnieniem — na konkursie odpowiedź bez uzasadnienia nie dostaje pełni punktów.

::: adv | Zadanie 9 (5 pkt) — Azotan(V) srebra z chlorkiem sodu: pełna analiza | poziom ambitny
a) Zapisz równanie jonowe skrócone reakcji AgNO₃ z NaCl. (1 pkt)
b) Zapisz równanie jonowe skrócone reakcji HCl z NaOH. (1 pkt)
c) Wyjaśnij, dlaczego Na⁺ i NO₃⁻ można skrócić w reakcji azotanu(V) srebra z chlorkiem sodu. (1 pkt)
d) Sprawdź bilans ładunków w równaniu Ag⁺ + Cl⁻ → AgCl i opisz go. (1 pkt)
e) Uzasadnij, dlaczego ten sam osad powstanie po zmieszaniu AgNO₃ z KCl. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Ag⁺ + Cl⁻ → AgCl↓.
b) (1 pkt) H⁺ + OH⁻ → H₂O.
c) (1 pkt) Są jonami obserwatorowymi: występują niezmienione po obu stronach równania jonowego pełnego (Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻), więc nie uczestniczą w reakcji.
d) (1 pkt) Po lewej stronie suma ładunków wynosi 0 (+1 − 1), po prawej osad AgCl jest obojętny (0) — bilans ładunków zachowany; równolegle bilans atomów (1 Ag, 1 Cl) też się domyka.
e) (1 pkt) W równaniu skróconym biorą udział tylko Ag⁺ i Cl⁻ — „widownia” (K⁺ zamiast Na⁺, NO₃⁻) nie wpływa na przebieg; jony Ag⁺ z AgNO₃ spotykają jony Cl⁻ z KCl i wytrącają ten sam biały osad AgCl.
:::
:::

::: adv | Zadanie 10 (4 pkt) — Dwa zobojętnienia w porównaniu | poziom ambitny
a) Zapisz równanie cząsteczkowe, jonowe pełne i skrócone reakcji HCl z NaOH. (2 pkt)
b) Porównaj zapis skrócony reakcji a) z zapisem skróconym reakcji 2KOH + H₂SO₄ → K₂SO₄ + 2H₂O i wyjaśnij, dlaczego w obu przypadkach sedno jest to samo, choć współczynniki w równaniach cząsteczkowych różne. (2 pkt)

::: odp | Pokaż klucz
a) (2 pkt) Cząsteczkowo: HCl + NaOH → NaCl + H₂O. Pełne: H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O. Skrócone: H⁺ + OH⁻ → H₂O. (0,5 pkt za cząsteczkowe, 1 pkt za pełne, 0,5 pkt za skrócone.)
b) (2 pkt) W obu reakcjach mocny kwas neutralizuje mocną zasadą, a jedyną „aktorską” parą są H⁺ i OH⁻, tworzące wodę — dlatego sedno zapisu skróconego jest identyczne: H⁺ + OH⁻ → H₂O (lub podwójnie: 2H⁺ + 2OH⁻ → 2H₂O przy dwukrotnych ilościach). Współczynniki w równaniach cząsteczkowych różnią się, bo różne są ładunki/walentności jonów reszty kwasowej (Cl⁻ vs SO₄²⁻), ale one pozostają w roztworze jako obserwatorowe i nie wpływają na zapis skrócony. (1 pkt za wskazanie wspólnej istoty, 1 pkt za wyjaśnienie roli różnicy współczynników.)
:::
:::

::: adv | Zadanie 11 (4 pkt) — „Złoty deszcz”: azotan(V) ołowiu(II) z jodkiem potasu | poziom ambitny
a) Zapisz równanie cząsteczkowe reakcji Pb(NO₃)₂ z KI. (1 pkt)
b) Zapisz równanie jonowe skrócone. (1 pkt)
c) Podaj obserwację, zwracając uwagę na barwę osadu. (1 pkt)
d) Wyjaśnij, dlaczego ta reakcja zachodzi, mimo że PbCl₂ (podobny anionowo związek z innym halogenkiem) też jest słabo rozpuszczalny. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃.
b) (1 pkt) Pb²⁺ + 2I⁻ → PbI₂↓ (bilans ładunków: +2 po lewej, 0 po prawej; bilans atomów: 1 Pb, 2 I).
c) (1 pkt) Osad jest żółty — przy krystalizacji z gorącego roztworu błyszczące żółte płatki opadają jak „złoty deszcz”; roztwór traci zmętnienie, a na dnie zbierają się żółte krystaliczne płatki.
d) (1 pkt) Reakcja zachodzi, bo PbI₂ jest nierozpuszczalny i opuszcza sferę reakcji jako osad — to jedyne kryterium; słaba rozpuszczalność PbCl₂ (biały, trudno rozpuszczalny) potwierdza ogólną tendencję soli ołowiu(II) z jednowalentnymi halogenkami do wytrącania, ale o „czy reakcja” decyduje rozpuszczalność konkretnego produktu, nie podobieństwo anionów.
:::
:::

::: adv | Zadanie 12 (3 pkt) — Uzasadnij brak reakcji | poziom ambitny
Oceń, czy zachodzi reakcja po zmieszaniu roztworów NaNO₃ i KCl:
a) wskaż potencjalne produkty wymiany (1 pkt)
b) oceń ich rozpuszczalność (1 pkt)
c) sformułuj wniosek z uzasadnieniem (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Wymiana partnerów dałaby KNO₃ i NaCl.
b) (1 pkt) Oba są dobrze rozpuszczalne: KNO₃ — azotan(V), a azotany są zawsze rozpuszczalne; NaCl — sól sodu, a sole Na⁺ są zawsze rozpuszczalne (chlorki są rozpuszczalne, a wyjątki — AgCl, PbCl₂, Hg₂Cl₂ — tu nie dotyczą, bo kationem jest Na⁺).
c) (1 pkt) Nie ma typowej reakcji netto: potencjalne produkty pozostają rozpuszczone, więc wszystkie jony (Na⁺, NO₃⁻, K⁺, Cl⁻) są obserwatorowymi — nie powstaje osad, gaz ani słaby elektrolit, a „zapisanie” reakcji wymiany byłoby jedynie przetasowaniem partnerów w roztworze.
:::
:::

::: adv | Zadanie 13 (4 pkt) — Znajdź błędy w zapisach | poziom ambitny
Oceń cztery zapisy; przy każdym wskaż błąd (lub błędy) i zapisz wersję poprawną:
1. „Cu²⁺ + 2OH⁻ + 2Na⁺ + SO₄²⁻ → Cu(OH)₂↓ + 2Na⁺ + SO₄²⁻” — uczeń przedstawił to jako równanie skrócone.
2. „Ag⁺ + Cl⁻ → AgCl”.
3. „Ca²⁺ + Cl⁻ → CaCl₂”.
4. „KNO₃ + NaCl → KCl + NaNO₃” — uczeń zapisuje to jako reakcję jonową zachodzącą w roztworze.

::: odp | Pokaż klucz
1. (1 pkt) To zapis pełny, nie skrócony — w skróconym trzeba usunąć obserwatorowe Na⁺ i SO₄²⁻ (są po obu stronach). Poprawnie: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.
2. (1 pkt) Brak strzałki osadu przy nierozpuszczalnym produkcie. Poprawnie: Ag⁺ + Cl⁻ → AgCl↓.
3. (1 pkt) Dwa błędy: bilans ładunków niezachowany (+2 po lewej, 0 po prawej — brak 2Cl⁻) oraz brak powodu reakcji — CaCl₂ jest rozpuszczalny, więc nic nie opuszcza roztworu; poprawnie: brak reakcji (Ca²⁺ i Cl⁻ w roztworze nie tworzą produktu wytrącającego się, gazowego ani słabego elektrolitu).
4. (1 pkt) Błąd koncepcyjny: potencjalne produkty (KCl i NaNO₃) są rozpuszczalne, więc reakcja nie zachodzi — wszystkie jony pozostają obserwatorowymi; uczciwy wniosek: „brak typowej reakcji netto”.
:::
:::

::: adv | Zadanie 14 (4 pkt) — Sól + kwas: analiza reakcji węglanu z kwasem | poziom ambitny
a) Zapisz równanie cząsteczkowe reakcji Na₂CO₃ z rozcieńczonym HCl. (1 pkt)
b) Zapisz równanie jonowe skrócone. (1 pkt)
c) Podaj dwie obserwacje potwierdzające przebieg reakcji. (1 pkt)
d) Wyjaśnij, dlaczego ta reakcja ilustruje zarazem drogę „sól + kwas” i myśl „kwasu wypieranego z soli”. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑.
b) (1 pkt) CO₃²⁻ + 2H⁺ → H₂O + CO₂↑ (bilans ładunków: −2 = 0 + 0 z uwzględnieniem znaków — suma po lewej −2, po prawej 0? Uwaga: ładunek anionu −2 plus 2·(+1) = 0; po prawej 0 — bilans zachowany).
c) (1 pkt) Burzliwe wydzielanie gazu (CO₂↑); potwierdzenie: zmętnienie wody wapiennej po wprowadzeniu gazu (Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O).
d) (1 pkt) To reakcja „sól + kwas”, w której mocniejszy kwas wypiera z soli kwas słabszy (węglowy), ten zaś rozpada się na wodę i lotny CO₂ — gaz opuszcza roztwór, więc reakcja biegnie do końca; lotność produktu pełni tu tę samą rolę, co nierozpuszczalność osadu w reakcjach strącania.
:::
:::

::: adv | Zadanie 15 (5 pkt) — Pułapka interferencji: biały osad — ale czyj? | poziom ambitny
Do roztworu A dodano AgNO₃ — powstał biały osad. Uczeń wnioskuje: „Są chlorki”.
a) Wyjaśnij, dlaczego wniosek jest przedwczesny — jaki inny anion daje osad z Ag⁺ i jaką barwę? (2 pkt)
b) Zaprojektuj próbę rozstrzygającą z rozcieńczonym HNO₃ i opisz oba możliwe wyniki. (1 pkt)
c) Zapisz równanie jonowe skrócone rozpuszczania osadu węglanu srebra w kwasie (cząsteczkowo: Ag₂CO₃ + 2HNO₃ → 2AgNO₃ + H₂O + CO₂↑). (1 pkt)
d) Sformułuj poprawną, warunkową konkluzję analizy. (1 pkt)

::: odp | Pokaż klucz
a) (2 pkt) Z Ag⁺ osad dają też jony CO₃²⁻: Ag₂CO₃ — osad biały/białawożółty; sama barwa nie rozstrzyga, bo AgCl (biały serowaty) i Ag₂CO₃ wyglądają zbliżenie — potrzebna jest próba różnicująca i kontrola zakłóceń.
b) (1 pkt) Dodaj rozcieńczony HNO₃: osad rozpuszcza się z burzliwym ulotem gazu → węglan (CO₂ potwierdzi woda wapienna); osad pozostaje nietknięty → chlorek (AgCl nie rozpuszcza się w rozcieńczonym kwasie).
c) (1 pkt) Ag₂CO₃ + 2H⁺ → 2Ag⁺ + H₂O + CO₂↑ (bilans ładunków: −2 + 2 = 0 po lewej, +2 po prawej — zachowany; atomy Ag i C się domykają).
d) (1 pkt) Przykład poprawnej konkluzji: „W próbce stwierdzono chlorki, jeśli po zakwaszeniu próbki rozcieńczonym HNO₃ dodatek AgNO₃ daje trwały biały osad nierozpuszczalny w kwasie; bez wykluczenia węglanów wniosku o chlorkach nie formułuje się na podstawie samej barwy osadu”.
:::
:::

::: adv | Zadanie 16 (5 pkt) — Projektowanie syntezy: dwie drogi do NaCl i czyszczenie BaCO₃ | poziom ambitny
a) Zaprojektuj dwie różne drogi otrzymania chlorku sodu: przez zobojętnienie i przez „sól z soli”; zapisz równania i wskaż, jak odseparujesz produkt. (3 pkt)
b) Masz proszek BaCO₃. Zaprojektuj drogę otrzymania z niego BaSO₄ (dwie czynności) i zapisz równania jonowe skrócone obu etapów. (2 pkt)

::: odp | Pokaż klucz
a) (3 pkt) Droga 1 — zobojętnianie: HCl + NaOH → NaCl + H₂O (skrócone: H⁺ + OH⁻ → H₂O); produkt zostaje w roztworze — odparowanie wody daje sól (1 pkt). Droga 2 — sól z soli: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl (skrócone: Ba²⁺ + SO₄²⁻ → BaSO₄↓); po filtracji osadu w roztworze zostaje NaCl, który wyodrębnia się przez odparowanie (1 pkt za równania, 1 pkt za poprawne rozdzielenie ról osadu i roztworu w obu drogach).
b) (2 pkt) Etap 1: rozpuść BaCO₃ w rozcieńczonym HNO₃ lub HCl — CO₃²⁻ + 2H⁺ → H₂O + CO₂↑ (baru zostaje w roztworze jako Ba²⁺) (1 pkt). Etap 2: dodaj rozpuszczalną sól siarczanowa(VI) (np. Na₂SO₄) — Ba²⁺ + SO₄²⁻ → BaSO₄↓; osad odfiltruj i przemyj (1 pkt).
:::
:::

## 11 | Dla olimpijczyka — pogłębienie {#olimpijczyk} [[exam:KONKURS]] [[extra:AMBITNE]]

**H⁺ czy H₃O⁺?** W roztworze wodnym proton nie bytuje samotnie — wiąże się z cząsteczką wody w jon hydroniowy H₃O⁺. Zapis H⁺ to konwencja uproszczona, którą stosują klucze szkolne i rejonowe. Na olimpiadzie wypada jednym zdaniem zaznaczyć konwencję („piszę H⁺ jako skrót od H₃O⁺”), a w analizie reakcji kwasowo-zasadowych myśleć o donorze protonu wiązanym wodą. To drobiazg, który pokazuje kulturę chemiczną (zapisy szkolne stosują H⁺ dla czytelności — zaznaczaj tę konwencję).

**Równowaga dysocjacji słabych elektrolitów.** Mocne elektrolity piszemy strzałką →, słabe — ⇌, bo dysocjacja jest odwracalna i w stanie równowagi większość cząsteczek pozostaje niezdysocjowana. Woda — sam elektrolit słaby — w każdej probówce z roztworem wodnym dysocjuje śladowo (orientacyjnie 10⁻⁷ mol/l każdego z jonów w temperaturze pokojowej — wartość do weryfikacji z aktualnymi tablicami). Dlatego woda zawsze zostaje w zapisie cząsteczkowym: jej jony są w praktyce policzalne tylko ułamkiem tego, co wnosi dodany kwas lub zasada.

**Dlaczego tabela rozpuszczalności w ogóle działa?** O rozpuszczalności soli rozstrzyga pojedynek dwóch sił: energii sieci krystalicznej (trzymającej jony w krysztale) i energii hydratacji (wody „wyciągającej” i otaczającej jony). Gdy hydratacja wygrywa — sól się rozpuszcza (NaCl, azotany); gdy wygrywa sieć — sól opada jako osad (BaSO₄, AgCl). Bar i siarczan(VI) to para o wyjątkowo silnym pocałowaniu ładunków (duże, dwukrotnie naładowane jony) — stąd BaSO₄ jest jednym z najmniej rozpuszczalnych osadów i nie rozpuszcza go żaden rozcieńczony kwas. To zarys — pełny opis wymaga iloczynu rozpuszczalności (Ksp), który poznasz w liceum.

**Nie wszystko, co jonowe, to wymiana.** Równania jonowe skrócone opisują też reakcje utleniająco-redukcyjne w roztworach — tam nie ma „wymiany partnerów”, tylko transfer elektronów (przypomnienie z CHE-X04: Fe + Cu²⁺ → Fe²⁺ + Cu). Algorytm trzech poziomów jest ten sam; zmienia się natura „aktorów”. Na olimpiadzie potrafią połączyć oba światy: np. utlenienie Fe²⁺ do Fe³⁺ jonami nadtlenowymi — równania jonowe z bilansem elektronów.

**Interferencje analityczne — system, nie przypadek.** Każda próba charakterystyczna ma listę „udawaczy”: Ag⁺ jest mylony z CO₃²⁻ (oba białe), Ba²⁺ dla SO₄²⁻ — z CO₃²⁻ (BaCO₃ też biały), NaOH dla Cu²⁺ — kontra Fe²⁺/Fe³⁺ rozstrzyga się barwami (niebieski / zielony / brunatny). System obrony: (1) zakwaszenie próbki tam, gdzie kwas rozpuszcza zakłócenie, a nie cechę główną; (2) świadki pozytywny i negatywny; (3) potwierdzenie drugą, niezależną próbą (CO₂ → woda wapienna); (4) wniosek z warunkami, nigdy „na sztywno”. Zadanie 15 to pełny trening tego systemu.

::: karta understand | Dla olimpijczyka — w skrócie
Pięć broni: 1) H⁺ to skrót od H₃O⁺ — powiedz to wprost; 2) słabe elektrolity piszą się z ⇌, a woda jest elektrolitem najsłabszym w scenie; 3) rozpuszczalność to pojedynek sieci z hydratacją — stąd upór BaSO₄; 4) równania jonowe opisują też redoks w roztworach — algorytm ten sam, aktorzy inni; 5) analiza jonów to system świadków i zakwaszeń, nie zgadywanie po kolorze. Każdy z tych punktów jest pytaniem konkursowym czekającym na spotkanie.
:::

::: nie-myl | Reakcja jonowa ≠ każde mieszanie; osad ≠ identyfikacja
- Mieszanie roztworów ≠ reakcja — bez osadu, gazu i słabego elektrolitu jony tylko krążą; test rozstrzygający: zapytaj „co opuszcza sferę reakcji?”.
- Osad ≠ jednoznaczna identyfikacja — biały osad może być AgCl, BaSO₄, CaCO₃ lub Ag₂CO₃; test rozstrzygający: dodaj próbę różnicującą (kwas) i kontrolę zakłóceń.
- Równanie cząsteczkowe ≠ opis mechanizmu — to rejestr laboratoryjny; test rozstrzygający: mechanizmem są jony, więc prawda o reakcji jest w zapisie skróconym.
:::

## 12 | Klinika błędów {#klinika} [[basic:E8]] [[understand:ROZUMIENIE]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Piszę jony-widzów w równaniu skróconym: Na⁺ + NO₃⁻ + Ag⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻.” | Ag⁺ + Cl⁻ → AgCl↓. | Równanie skrócone pokazuje tylko aktorów; jony obserwatorowe są identyczne po obu stronach i nie uczestniczą w reakcji — ich obecność w zapisie skróconym to błąd. |
| „Ag⁺ + Cl⁻ → AgCl.” | Ag⁺ + Cl⁻ → AgCl↓. | AgCl jest nierozpuszczalny — strzałka ↓ przy osadzie jest obowiązkowym elementem zapisu i często osobnym punktem w kluczu. |
| „Fe(OH)₂ jest brunatny, Fe(OH)₃ zielony.” | Fe(OH)₂ — brudnozielony, Fe(OH)₃ — brunatny/rdzawy. | Barwy są ze sobą zamieniane najczęściej ze wszystkich; do tego Fe(OH)₂ ciemnieje na powietrzu, utleniając się do Fe(OH)₃. |
| „Rozpisuję osad na jony: AgCl → Ag⁺ + Cl⁻ w równaniu pełnym.” | Osad zostaje cząsteczkowo: … → AgCl↓. | Osad nie jest w roztworze — opadł jako nierozpuszczalna substancja; rozpisywane są tylko mocne elektrolity obecne w roztworze. |
| „Ca²⁺ + Cl⁻ → CaCl₂.” | Brak reakcji (CaCl₂ jest rozpuszczalny — nic nie opuszcza roztworu). | Po pierwsze bilans ładunków niezachowany (+2 kontra 0); po drugie nie powstaje osad, gaz ani słaby elektrolit — nie ma reakcji. |
| „Mieszam NaNO₃ z KCl, więc zaszła wymiana: KNO₃ + NaCl.” | Brak typowej reakcji netto — wszystkie potencjalne produkty są rozpuszczalne. | Zapisanie reakcji wymiany bez osadu, gazu i słabego elektrolitu opisuje jedynie przetasowanie jonów, nie przemianę chemiczną. |
| „Ba²⁺ + SO₄²⁻ + H⁺ + OH⁻ → BaSO₄↓ + H₂O.” | Dwie osobne reakcje: Ba²⁺ + SO₄²⁻ → BaSO₄↓ oraz 2H⁺ + 2OH⁻ → 2H₂O. | W układzie Ba(OH)₂ + H₂SO₄ zachodzą równolegle strącanie i zobojętnienie; łączenie ich w jedno równanie miesza dwie niezależne pary aktorów i psuje bilanse. |
| „H⁺ to wolny proton krążący w roztworze.” | H⁺ to konwencja zapisu; realnie proton związany jest w jonie hydroniowym H₃O⁺. | Zapis H⁺ jest szkolnym uproszczeniem; na poziomie olimpijskim zaznacz się konwencję, a myśl o donorach protonu wiązanych wodą. |
| „Zapamiętałem tabelę rozpuszczalności na sztywno, więc nie sprawdzam reguł.” | Czytaj reguły od anionu: rodzina → wyjątki → werdykt. | Tabela „na pamięć” bez sprawdzenia prowadzi do błędów na nietypowych połączeniach (np. K₂CO₃ — rozpuszczalny mimo „węglanów zwykle N”). |
| „Biały osad — to na pewno AgCl, więc są chlorki.” | Biały osad + próba różnicująca (kwas) + świadki → wniosek warunkowy. | Kolor osadu nie zawsze stanowi jednoznaczną identyfikację: Ag₂CO₃, BaSO₄, CaCO₃ i PbCl₂ też są białe/białawożółte; wnioski formułuje się z warunkami i kontrolami. |
| „Pomijam współczynnik przy jonie wieloatomowym: BaCl₂ → Ba²⁺ + Cl⁻.” | BaCl₂ → Ba²⁺ + 2Cl⁻. | Indeksy we wzorze stają się współczynnikami przy jonach; ich pominięcie psuje bilans atomów i ładunków w dalszych krokach. |
:::

::: mity
„Wszystkie sole są rozpuszczalne w wodzie, a osady to rzadkość.” || Osadów jest mnóstwo: węglany, fosforany i siarczki większości metali, chlorki srebra, ołowiu i rtęci(I), siarczany(VI) baru, ołowiu, wapnia i strontu oraz większość wodorotlenków — strącanie to jeden z najczęstszych typów reakcji w roztworach.
„Woda jest mocnym elektrolitem, bo wszędzie ją mamy.” || Woda jest elektrolitem słabym — dysocjuje śladowo (⇌) i w równaniach jonowych zawsze zostaje cząsteczkowo; „wszechobecność” nie ma nic do stopnia dysocjacji.
„Jeśli zmieszam dwa roztwory soli, zawsze powstanie osad.” || Osad powstanie tylko, gdy któryś z potencjalnych produktów wymiany jest nierozpuszczalny; NaNO₃ + KCl to klasyczny przypadek bez reakcji.
„Równanie jonowe skrócone zrobię z każdego równania cząsteczkowego rozpisując wszystko na jony.” || Rozpisuje się wyłącznie mocne elektrolity w roztworze; osady, gazy, woda i słabe elektrolity zostają cząsteczkowo — rozpisanie ich to błąd psujący cały zapis.
„BaSO₄ rozpuści się w kwasie, przecież kwas rozpuszcza osady.” || Nie: BaSO₄ jest nierozpuszczalny w kwasach — dlatego próba na siarczany(VI) jest tak pewna; kwas rozpuszcza osady węglanowe (CaCO₃, Ag₂CO₃) z ulotem CO₂.
„W równaniu Ag₂CO₃ + 2HNO₃ → 2AgNO₃ + H₂O + CO₂↑ współczynniki są obojętne.” || Współczynniki są treścią: bez 2 przy HNO₃ i 2AgNO₃ bilans atomów i ładunków się wali — a bilans ładunków jest tak samo obowiązkowy jak bilans atomów.
„Wykrywanie jonu kończy się na pierwszym białym osadzie.” || Wykrywanie kończy się wniosek z warunkami: zakwaszenie, świadki, potwierdzenie drugą próbą (np. CO₂ → woda wapienna) — bez tego wynik może być interferencyjny.
„Jon w roztworze, który nic nie robi, psuje reakcję.” || Jony obserwatorowe są obojętne dla przebiegu — mogą nawet zmieniać partnerów (K⁺ zamiast Na⁺), a równanie skrócone pozostanie to samo; to ich siła, nie wada.
:::

## 13 | Ćwiczenia utrwalające {#cwiczenia} [[basic:E8]] [[exam:KONKURS]]

Krótkie treningi bez punktacji — rozgrzewka przed zadaniami. Każde z kluczem.

**Ćwiczenie 1.** Zapisz skrócone jonowe reakcji AgNO₃ + KCl.

::: odp | Klucz
Ag⁺ + Cl⁻ → AgCl↓ (biały osad serowaty; Na⁺/K⁺ i NO₃⁻ to obserwatorowe).
:::

**Ćwiczenie 2.** Jaka barwa osadu Cu(OH)₂?

::: odp | Klucz
Niebieski (Cu²⁺ + 2OH⁻ → Cu(OH)₂↓).
:::

**Ćwiczenie 3.** Czy powstanie osad po zmieszaniu NaNO₃ + KCl?

::: odp | Klucz
Nie — potencjalne produkty (KNO₃ i NaCl) są dobrze rozpuszczalne; wszystkie jony pozostają obserwatorowe, brak reakcji netto.
:::

**Ćwiczenie 4.** Jak wykryć jon SO₄²⁻?

::: odp | Klucz
Wykrywanie SO₄²⁻ wymaga odczynnika zawierającego Ba²⁺ (BaCl₂ lub Ba(NO₃)₂) i kontroli warunków próbki — najlepiej po zakwaszeniu rozcieńczonym kwasem; biały osad BaSO₄ (Ba²⁺ + SO₄²⁻ → BaSO₄↓) jest obserwacją, którą należy interpretować z uwzględnieniem możliwych interferencji (np. węglanów, usuwanych zakwaszeniem).
:::

**Ćwiczenie 5.** Zapisz skrócone równanie jonowe reakcji Ba(OH)₂ + H₂SO₄.

::: odp | Klucz
Dwie równoległe reakcje jonowe: Ba²⁺ + SO₄²⁻ → BaSO₄↓ (biały osad) oraz 2H⁺ + 2OH⁻ → 2H₂O (zobojętnienie).
:::

**Ćwiczenie 6.** Który zapis jest prawdziwy: dysocjacja NaCl czy reakcja? Uzasadnij.

::: odp | Klucz
NaCl → Na⁺ + Cl⁻ to dysocjacja — opis stanu roztworu, nie reakcja; reakcją jest np. Ag⁺ + Cl⁻ → AgCl↓, bo powstaje nowa substancja opuszczająca roztwór.
:::

**Ćwiczenie 7.** Dlaczego osadu PbI₂ nie można rozpisać na jony w równaniu pełnym, a Pb(NO₃)₂ można?

::: odp | Klucz
PbI₂ jest nierozpuszczalny (żółty osad ↓) — nie ma go w roztworze; Pb(NO₃)₂ jest rozpuszczalną solą (azotany zawsze R) — istnieje w roztworze jako Pb²⁺ + 2NO₃⁻ i podlega rozpisaniu.
:::

**Ćwiczenie 8 — mini-test samodzielny.** Odpowiedz bez patrzenia w lekcję: 1) Skrócone: AgNO₃ + KCl. 2) Barwa Cu(OH)₂. 3) Osad z NaNO₃ + KCl? 4) Jak wykryć SO₄²⁻? 5) Skrócone: Ba(OH)₂ + H₂SO₄. Potem sprawdź z ćwiczeniami 1–5 — Twoje odpowiedzi muszą się zgadzać (w 4 wymagana jest kontrola warunków, nie sam odczynnik).

## 14 | Ciekawostki {#ciekawostki} [[extra:AMBITNE]]

::: karta extra | Ciekawostka 1 — halogenki srebra wymyśliły fotografię
AgCl, AgBr i AgI są światłoczułe: pod wpływem światła ulegają przemianom, które zmieniają ich właściwości. Odkrycie to stało się fundamentem fotografii klasycznej — na kliszy kryształy bromku srebra (żółtawobiałe) rejestrowały obraz, a wywoływacz i utrwalacz (właśnie z rozpuszczalnością AgX w roztworach) kończyły robotę. Ciąg barw „biały → żółtawobiały → żółty” wzdłuż Cl → Br → I to widoczna gołym okiem zmiana własności w rodzinie chemicznej.
:::

::: karta extra | Ciekawostka 2 — barowa papka: toksyczny metal ratuje diagnostykę
Bar jest toksyczny — rozpuszczalne sole baru działają silnie trująco. Ale BaSO₄ jest tak uparcie nierozpuszczalny (nawet w kwasach!), że przechodzi przez układ pokarmowy niczym obojętny piasek. Dlatego zawiesina BaSO₄ („barowa papka”) służy od dekad jako środek cieniujący w badaniach RTG przewodu pokarmowego: pacjent ją wypija, a rentgen „widzi” kontury żołądka i jelit. To lekcja z logiki tabeli rozpuszczalności: toksyczność zależy od rozpuszczalności, nie od nazwy pierwiastka.
:::

::: karta extra | Ciekawostka 3 — złoty deszcz w probówce
PbI₂ daje tak piękne, błyszczące żółte płatki, że strącanie z gorącego roztworu (i powolne krystalizowanie przy stygnięciu) zyskało własną nazwę: „złoty deszcz”. Demonstracja jest klasyczną atrakcją wykładów chemicznych od ponad wieku — i zarazem gotową ilustracją tego, że „osad” może być krystaliczny i oszałamiający, a nie zawsze szarą papkę.
:::

::: karta extra | Ciekawostka 4 — kamień w czajniku to tabela rozpuszczalności w działaniu
Biała warstwa w czajniku, stalaktyty w jaskiniach i łuska na kranach to CaCO₃ — osad z twardą wodą. Woda bogata w wodorowęglan wapnia przy ogrzewaniu oddaje CO₂ i wytrąca węglan (zjawisko odwrotne do rozpuszczania węglanu w kwasie). Ocet (słaby kwas) usuwa kamień, bo węglan rozpuszcza się w kwasach z ulotem CO₂ — dokładnie ten sam mechanizm, co w próbie na CO₃²⁻ z [§8](#wykrywanie) i [§9](#doswiadczenia).
:::

::: karta extra | Ciekawostka 5 — osad, który się zmienia, zanim zdążysz go narysować
Świeży Fe(OH)₂ jest brudnozielony, ale na powietrzu tlen utlenia Fe²⁺ do Fe³⁺ — osad stopniowo brunatnieje, przechodząc w Fe(OH)₃. Uczniowie robiący próbę po raz pierwszy często myślą, że pomylili odczynniki. To zaś ten sam chemistry, który stoi za rdzą: brunatne produkty utleniania żelaza w wilgoci są rodziną tlenków i wodorotlenków Fe(III). Jedna probówka — i podgląd na korozję. (źródło: podręczniki chemii nieorganicznej, orientacyjnie)
:::

## 15 | Sposoby pamięciowe {#mnemo} [[basic:E8]]

::: wskazowki
- Trójkrok zapisu: „**C**zytaj — **P**odziel — **S**kreśl” (cząsteczkowe → pełne jonowe → skreśl widzów).
- Czwórka niedotykalnych: „**O**sad, **G**az, **W**oda, **S**łaby — zostają całe” (nie rozpisujesz ich na jony).
- Rodziny zawsze rozpuszczalne: „**NA-KA-Amon i azotany — nigdy nie opadną**” (sole Na⁺, K⁺, NH₄⁺ oraz wszystkie azotany(V)).
- Wyjątki chlorków: „**Srebro, ołów, rtęć(I) — chlorków do wody nie dają**” (AgCl, PbCl₂, Hg₂Cl₂).
- Wyjątki siarczanów(VI): „**Ba-Pb-Ca-Sr — siarczana nie wpuścią w progi**” (BaSO₄, PbSO₄, CaSO₄, SrSO₄).
- Barwy wodorotlenków: „**Cu — niebo, Fe(II) — mech, Fe(III) — cegła**” (niebieski, brudnozielony, brunatny).
- Halogenki srebra: „**Od Cl do I ciemnieje się**” (AgCl biały → AgBr żółtawobiały → AgI żółty).
- Trzy powody reakcji: „**O-G-W: osad, gaz, woda — albo nic się nie dzieje**”.
- Bilans: „**Atomy i ładunki — dwa liczniki, oba muszą się zgodzić**”.
:::

## 16 | Test końcowy {#test} [[basic:E8]] [[exam:KONKURS]]

Rozwiąż bez zaglądania do lekcji. Każde pytanie ma dokładnie jedną poprawną odpowiedź. Wyjaśnienia sprawdź dopiero po rozwiązaniu całości.

::: test
? Które substancje rozpisujemy na jony w równaniu jonowym pełnym?
+ mocne elektrolity obecne w roztworze: rozpuszczalne sole, mocne kwasy, mocne zasady
- wszystkie substraty i wszystkie produkty bez wyjątku
- tylko osady i gazy
- wyłącznie wodorotlenki
! Zapis jonowy pokazuje realny skład roztworu — rozpisujemy tylko to, co faktycznie istnieje tam jako jony; osady, gazy, woda i słabe elektrolity zostają cząsteczkowo.

? Który zapis jest poprawny dla osadu w równaniu skróconym?
+ Ag⁺ + Cl⁻ → AgCl↓
- Ag⁺ + Cl⁻ → AgCl
- AgCl → Ag⁺ + Cl⁻
- Ag⁺ + Cl⁻ ⇌ AgCl↓
! AgCl jest nierozpuszczalny — strzałka ↓ jest obowiązkowa; zapis odwrotny to dysocjacja, która nie zachodzi, a ⇌ sugerowałoby rozpuszczanie się osadu.

? Barwa osadu wodorotlenku żelaza(III) to:
+ brunatna (rdzawa)
- niebieska
- biała
- żółta
! Fe(OH)₃ — brunatny/rdzawy; niebieski to Cu(OH)₂, brudnozielony — Fe(OH)₂, żółty — PbI₂ i AgI.

? Po zmieszaniu roztworów NaNO₃ i KCl:
+ nie zachodzi żadna reakcja — wszystkie potencjalne produkty są rozpuszczalne
- wytrąca się KNO₃
- wytrąca się NaCl
- wydziela się gaz
! KNO₃ (azotan) i NaCl (sól sodu) są dobrze rozpuszczalne — wszystkie jony pozostają obserwatorowymi; to klasyczny przypadek braku reakcji.

? Które trzy zjawiska uzasadniają zapisanie reakcji wymiany w roztworze?
+ powstanie osadu, wydzielenie gazu, powstanie słabego elektrolitu (np. wody)
- zmiana koloru probówki, grzanie, mieszanie
- obecność jonów obserwatorowych, filtracja, odparowanie
- rozpuszczanie, krystalizacja, sublimacja
! Reakcja zachodzi, gdy produkt opuszcza sferę reakcji: osad opada, gaz ulatuje, woda „pochłania” H⁺ i OH⁻.

? Jak wykrywa się jony siarczanowe(VI) w próbce?
+ dodając rozpuszczalną sól baru do zakwaszonej próbki — biały osad BaSO₄
- dodając AgNO₃ do próbki — biały osad
- dodając NaOH — niebieski osad
- podgrzewając próbkę — zmiana barwy
! Ba²⁺ + SO₄²⁻ → BaSO₄↓ (biały, nierozpuszczalny w kwasach); zakwaszenie eliminuje zakłócenia od węglanów. AgNO₃ wykrywa chlorki, a NaOH — kationy metali.

? Potwierdzeniem wydzielenia CO₂ w próbie na węglany jest:
+ zmętnienie wody wapiennej: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O
- zmiana barwy na niebieską
- powstanie osadu Fe(OH)₃
- zapach gazu
! Sam ulot gazu nie przesądza o CO₂; zmętnienie wody wapiennej jest potwierdzeniem drugą, niezależną próbą.

? W równaniu skróconym jony obserwatorowe:
- usuwa się zawsze, niezależnie od zapisu
+ skreśla się, jeżeli występują niezmienione po obu stronach równania pełnego
- dodaje się dla porządku
- zamienia się na osady
! Skracamy tylko te jony, które naprawdę stoją po obu stronach w tej samej postaci; zostawienie widza w zapisie skróconym to błąd, a dodanie — jeszcze większy.

? Które sole są rozpuszczalne bez wyjątków?
+ azotany(V) oraz sole Na⁺, K⁺ i NH₄⁺
- chlorki i węglany
- siarczany(VI) i siarczki
- wodorotlenki wszystkich metali
! To dwie rodziny bez wyjątków; chlorki mają AgCl, PbCl₂, Hg₂Cl₂, siarczany(VI) — BaSO₄, PbSO₄, CaSO₄, SrSO₄, a węglany i siarczki — poza solami I grupy i amonu — są nierozpuszczalne.

? W reakcji Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O równania jonowe skrócone to:
+ Ba²⁺ + SO₄²⁻ → BaSO₄↓ oraz 2H⁺ + 2OH⁻ → 2H₂O
- tylko Ba²⁺ + SO₄²⁻ → BaSO₄↓
- tylko 2H⁺ + 2OH⁻ → 2H₂O
- Ba²⁺ + 2OH⁻ + 2H⁺ + SO₄²⁻ → BaSO₄↓ + 2H₂O (jako zapis skrócony)
! W układzie zachodzą równolegle strącanie i zobojętnienie — uczciwy zapis podaje dwie niezależne pary aktorów; ostatnia opcja to zapis pełny bez skrócenia obserwatorowych.

? Wykrywanie jonów chlorkowych AgNO₃ może zafałszować obecność:
+ węglanów — osad Ag₂CO₃ jest też biały/białawożółty
- jonów K⁺ — dają żółty osad
- jonów NO₃⁻ — dają brunatny osad
- wody — daje zmętnienie
! Dlatego przed próbą na Cl⁻ zakwasza się próbkę rozcieńczonym HNO₃ — węglan ulatuje jako CO₂, a chlorek zostaje do wykrycia.

? „Kwas z soli” w reakcji Na₂CO₃ + 2HCl polega na tym, że:
+ mocniejszy kwas wypiera z soli słabszy kwas (węglowy), który rozpada się na H₂O i lotny CO₂
- słabszy kwas wypiera mocniejszy
- sól rozpuszcza kwas bez przemiany
- powstaje osad węglanu
! CO₃²⁻ + 2H⁺ → H₂O + CO₂↑ — lotność produktu działa jak nierozpuszczalność: usuwa produkt z roztworu i ciągnie reakcję do końca.

? (poziom konkursowy) Dlaczego zapis „NaNO₃ + KCl → KNO₃ + NaCl” jest chemicznie pusty?
+ opisuje przetasowanie partnerów w roztworze, a nie powstanie nowej substancji — reakcja nie zachodzi
- bo jest niezbalansowany
- bo brakuje strzałek ↓ i ↑
- bo NaNO₃ nie istnieje
! Równanie jest zbalansowane, ale żaden produkt nie opuszcza roztworu (oba rozpuszczalne) — wszystkie jony pozostają obserwatorowymi, więc reakcja netto nie zachodzi.

? (poziom konkursowy) Po dodaniu AgNO₃ do próbki powstał biały osad nierozpuszczalny w rozcieńczonym HNO₃. Najlepsza konkluzja:
+ próbka zawiera chlorki — osad to AgCl (węglany zostały wykluczone, bo rozpuściłyby się w kwasie z ulotem CO₂)
- próbka zawiera węglany
- próbka zawiera siarczany(VI)
- wniosek nie jest możliwy bez testu z NaOH
! Trwałość osadu w rozcieńczonym kwasie różnicuje AgCl (nierozpuszczalny w kwasie) od Ag₂CO₃ (rozpuszczalny z CO₂↑); siarczany(VI) wykrywa się solą baru, nie AgNO₃.
:::

## 17 | Fiszki {#fiszki} [[basic:E8]] [[exam:KONKURS]]

Powtarzaj partiami: najpierw basic, potem understand i extra, na końcu olimpijskie.

::: fiszki
Trzy poziomy zapisu | cząsteczkowe → jonowe pełne → jonowe skrócone | basic:zapis
Rozpisujemy na jony | mocne elektrolity w roztworze: rozpuszczalne sole, mocne kwasy, mocne zasady | basic:zapis
Czwórka niedotykalnych | osad, gaz, woda, słaby elektrolit — zostają cząsteczkowo | understand:zapis
Jony obserwatorowe | jony identyczne po obu stronach równania pełnego; skracane, nieobecne w zapisie skróconym | understand:zapis
Skrócone zobojętnienia | OH⁻ + H⁺ → H₂O | basic:zapis
Skrócone AgNO₃ + NaCl | Ag⁺ + Cl⁻ → AgCl↓ (biały osad) | basic:zapis
Skrócone BaCl₂ + Na₂SO₄ | Ba²⁺ + SO₄²⁻ → BaSO₄↓ | basic:zapis
Skrócone CuSO₄ + NaOH | Cu²⁺ + 2OH⁻ → Cu(OH)₂↓ | basic:zapis
Bilans w zapisie skróconym | atomy i suma ładunków po obu stronach muszą się zgadzać | understand:zapis
Dysocjacja | rozpad elektrolitu na jony (NaCl → Na⁺ + Cl⁻) — opis roztworu, nie reakcja | understand:dysocjac
Elektrolity mocne | dysocjują całkowicie (→): HCl, H₂SO₄, HNO₃, NaOH, KOH, rozpuszczalne sole | basic:elektro
Elektrolity słabe | dysocjują częściowo (⇌); woda jest słabym elektrolitem | understand:elektro
Konwencja H⁺ | uproszczenie; realnie proton związany w H₃O⁺ | olimpijski:elektro
Azotany(V) | zawsze rozpuszczalne — bez wyjątków | basic:rozpusc
Sole Na⁺, K⁺, NH₄⁺ | zawsze rozpuszczalne — bez wyjątków | basic:rozpusc
Wyjątki chlorków | AgCl, PbCl₂, Hg₂Cl₂ — nierozpuszczalne | basic:rozpusc
Wyjątki siarczanów(VI) | BaSO₄, PbSO₄, CaSO₄, SrSO₄ — N/T | basic:rozpusc
Węglany i fosforany | zwykle nierozpuszczalne; wyjątki: sole I grupy i amonu | basic:rozpusc
Wodorotlenki rozpuszczalne | metale I grupy oraz (poza Be i Mg) II grupy | basic:rozpusc
Trzy powody reakcji | osad ↓, gaz ↑, słaby elektrolit (woda) — inaczej reakcja nie zachodzi | understand:kiedy
Osady białe | AgCl (serowaty), BaSO₄ (w kwasach trwały), CaCO₃ (rozp. w kwasach), PbCl₂, Ag₂CO₃ | basic:osady
Barwa Cu(OH)₂ | niebieska | basic:osady
Barwa Fe(OH)₂ | brudnozielona; ciemnieje na powietrzu (utlenienie do Fe(III)) | basic:osady
Barwa Fe(OH)₃ | brunatna/rdzawa | basic:osady
PbI₂ | żółty osad — „złoty deszcz”; Pb²⁺ + 2I⁻ → PbI₂↓ | extra:osady
AgBr i AgI | żółtawobiały i żółty; światłoczułe (fotografia) | extra:osady
Wykrywanie Cl⁻ | AgNO₃ → biały osad; najpierw zakwasić, by wykluczyć węglany | basic:wykryw
Wykrywanie SO₄²⁻ | sól baru w zakwaszonej próbce → biały BaSO₄ | basic:wykryw
Wykrywanie CO₃²⁻ | kwas → CO₂↑; potwierdzenie: zmętnienie wody wapiennej | basic:wykryw
Wykrywanie kationów NaOH | Cu²⁺ niebieski, Fe²⁺ brudnozielony, Fe³⁺ brunatny | basic:wykryw
Sól + kwas | Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑; skrócone: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑ | basic:otrzymy
Sól + zasada | CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄ | basic:otrzymy
Sól z soli | AgNO₃ + NaCl → AgCl↓ + NaNO₃ — gdy produkt opuszcza roztwór | basic:otrzymy
Kwas z soli (rozszerzenie) | NaCl + H₂SO₄ (stęż.) → NaHSO₄ + HCl↑ — lotny kwas wyparty z soli | olimpijski:otrzymy
Dwa skrócone z Ba(OH)₂ + H₂SO₄ | Ba²⁺ + SO₄²⁻ → BaSO₄↓ oraz 2H⁺ + 2OH⁻ → 2H₂O | olimpijski:zapis
Rozpuszczalność a energia | pojedynek energii sieci krystalicznej z hydratacją — stąd upór BaSO₄ | olimpijski:rozpusc
Interferencje analityczne | Ag₂CO₃ myli się z AgCl; obrona: zakwaszenie + świadki + druga próba | olimpijski:wykryw
:::

## 18 | Słownik {#slownik} [[basic:E8]]

::: slownik
Równanie cząsteczkowe :: zapis reakcji wzorami sumarycznych związków, zbilansowany, ze strzałkami ↓ i ↑.
Równanie jonowe pełne :: zapis, w którym mocne elektrolity w roztworze przedstawiono jako jony, a osady, gazy, wodę i słabe elektrolity — cząsteczkowo.
Równanie jonowe skrócone :: zapis samej istoty reakcji — po skreśleniu jonów obserwatorowych z równania pełnego.
Jony obserwatorowe :: jony obecne niezmienione po obu stronach równania jonowego; nie uczestniczą w reakcji (mówi się też: jony-widzowie).
Dysocjacja elektrolityczna :: rozpad elektrolitu na jony w roztworze wodnym; opis stanu roztworu, nie reakcja chemiczna.
Elektrolit :: substancja dysocjująca w roztworze na jony i przewodząca prąd; dzieli się na mocne (→) i słabe (⇌).
Jon hydroniowy :: H₃O⁺ — proton związany z cząsteczką wody; zapis H⁺ jest jego konwencjonalnym skrótem.
Osad :: nierozpuszczalna (lub trudno rozpuszczalna) substancja wydzielająca się z roztworu; oznaczana ↓.
Tabela rozpuszczalności :: zestaw reguł i wyjątków określających rozpuszczalność soli i wodorotlenków w wodzie.
Strącanie :: reakcja, w której z roztworu wydziela się osad (np. Ag⁺ + Cl⁻ → AgCl↓).
Zobojętnienie :: reakcja kwasu z zasadą prowadząca do soli i wody; sedno jonowe: H⁺ + OH⁻ → H₂O.
Podwójna wymiana :: typ reakcji, w której substraty wymieniają się składnikami; zachodzi w roztworze, gdy powstaje osad, gaz lub słaby elektrolit.
Świadek (próba kontrolna) :: próbka porównawcza o znanym składzie (pozytywna lub negatywna), służąca kontroli wiarygodności obserwacji.
Interferencja :: zakłócenie wyniku analizy przez inny jon dający podobną obserwację (np. CO₃²⁻ przy wykrywaniu Cl⁻).
Woda wapienna :: roztwór Ca(OH)₂; mętnieje pod wpływem CO₂ (CaCO₃↓) — klasyczna próba potwierdzająca dwutlenek węgla.
Azotan(V) :: sól kwasu azotowego(V) HNO₃; wszystkie są rozpuszczalne.
Wodorotlenek :: związek kationu metalu z jonami OH⁻; rozpuszczalne dla metali I grupy i części II grupy.
Bilans ładunków :: zasada równania jonowego: suma ładunków po lewej stronie równa się sumie po prawej.
Kwas wypierany z soli :: konwencja opisująca reakcję sól + kwas, w której lotny lub słaby kwas opuszcza roztwór (np. CO₂ z węglanów, HCl z NaCl i stężonego H₂SO₄).
Filtracja :: oddzielanie osadu od roztworu za pomocą filtra; podstawowa czynność przy otrzymywaniu osadów.
:::

## 19 | Mapa pojęć {#mapa} [[basic:E8]]

::: drzewo
Równania jonowe i strącanie
  Roztwór i jony
    Dysocjacja elektrolityczna
      Elektrolity mocne (→)
      Elektrolity słabe (⇌)
      Woda jako słaby elektrolit
    Konwencja H⁺ i jon H₃O⁺
  Trzy poziomy zapisu
    Równanie cząsteczkowe
    Równanie jonowe pełne
      Rozpisujemy mocne elektrolity
      Niedotykalne: osad, gaz, woda, słaby
    Równanie jonowe skrócone
      Jony obserwatorowe
      Bilans atomów i ładunków
  Kiedy reakcja zachodzi
    Powstaje osad
    Wydziela się gaz
    Powstaje słaby elektrolit (woda)
    Brak trzech powodów — brak reakcji
  Tabela rozpuszczalności
    Zawsze rozpuszczalne
      Azotany(V)
      Sole Na, K, NH₄
    Wyjątki chlorków
      AgCl, PbCl₂, Hg₂Cl₂
    Wyjątki siarczanów(VI)
      BaSO₄, PbSO₄, CaSO₄, SrSO₄
    Węglany, fosforany, siarczki
      Wyjątki: I grupa i amon
    Wodorotlenki
      Rozpuszczalne: I grupa, II grupa poza Be i Mg
  Osady i barwy
    Białe
      AgCl
      BaSO₄
      CaCO₃
      PbCl₂
    Kolorowe
      Cu(OH)₂ niebieski
      Fe(OH)₂ brudnozielony
      Fe(OH)₃ brunatny
      PbI₂ i AgI żółte
      AgBr żółtawobiały
  Otrzymywanie soli
    Sól + kwas
    Sól + zasada
    Sól + sól
    Metal + sól (wypieranie)
    Kwas + zasada
  Wykrywanie jonów
    Cl⁻ — AgNO₃
    SO₄²⁻ — sól baru po zakwaszeniu
    CO₃²⁻ — kwas + woda wapienna
    Cu²⁺, Fe²⁺, Fe³⁺ — NaOH i barwy
    Interferencje i próby kontrolne
:::

## 20 | Ściąga {#sciaga} [[basic:E8]]

Najkrótsza wersja całej lekcji — czytaj, gdy zostało pięć minut przed sprawdzianem:

- **Trójkrok:** cząsteczkowe (zbilansowane, ↓ ↑) → jonowe pełne (rozpisz tylko mocne elektrolity) → skrócone (skreśl widzów). „Niedotykalni”: osad, gaz, woda, słaby.
- **Skrócone-muszisz:** H⁺ + OH⁻ → H₂O; Ag⁺ + Cl⁻ → AgCl↓; Ba²⁺ + SO₄²⁻ → BaSO₄↓; Cu²⁺ + 2OH⁻ → Cu(OH)₂↓; CO₃²⁻ + 2H⁺ → H₂O + CO₂↑; Fe + Cu²⁺ → Fe²⁺ + Cu (X04).
- **Rozpuszczalność:** azotany i sole Na/K/NH₄ — zawsze R; chlorki — R poza AgCl, PbCl₂, Hg₂Cl₂; siarczany(VI) — R poza BaSO₄, PbSO₄, CaSO₄, SrSO₄; węglany/fosforany/siarczki — N poza I grupą i amonem; wodorotlenki — R: I grupa i II grupa poza Be, Mg.
- **Trzy powody reakcji:** osad, gaz, słaby elektrolit. Brak wszystkich = brak reakcji (NaNO₃ + KCl → brak).
- **Barwy:** AgCl biały serowaty (rozp. w NH₃(aq)), BaSO₄ biały (w kwasach trwały), CaCO₃ biały (rozp. w kwasach z CO₂), Cu(OH)₂ niebieski, Fe(OH)₂ brudnozielony (ciemnieje!), Fe(OH)₃ brunatny, PbI₂ żółty, AgBr żółtawobiały, AgI żółty.
- **Otrzymywanie soli:** sól+kwas (CO₃²⁻ + 2H⁺ → H₂O + CO₂↑), sól+zasada, sól+sól (gdy osad/gaz/woda), metal+sól (X04), kwas+zasada. Kwas z soli: NaCl + H₂SO₄ (stęż.) → HCl↑ (rozszerzenie).
- **Wykrywanie:** Cl⁻ — AgNO₃ (biały; najpierw zakwasić!), SO₄²⁻ — Ba²⁺ po zakwaszeniu (biały), CO₃²⁻ — kwas → CO₂ → woda wapienna mętnieje, Cu²⁺/Fe²⁺/Fe³⁺ — NaOH (niebieski/zielony/brunatny). Zawsze: świadki + wniosek z warunkami.
- **Bilans:** atomy ORAZ ładunki; ↓ przy osadach, ↑ przy gazach; widzowie nie wchodzą do zapisu skróconego.

::: checklista
- [ ] umiem zapisać reakcję na trzech poziomach bez pomocy (cząsteczkowe → pełne → skrócone)
- [ ] umiem sklasyfikować każdą substancję: rozpisać na jony czy zostawić
- [ ] umiem wskazać i usunąć jony obserwatorowe, sprawdziwszy obie strony równania
- [ ] umiem sprawdzić bilans atomów i bilans ładunków w równaniu skróconym
- [ ] umiem odczytać rozpuszczalność z reguł (nie z wkuwania) i wskazać wyjątki chlorków i siarczanów(VI)
- [ ] umiem przewidzieć osad i podać jego barwę z katalogu 10 osadów
- [ ] umiem uzasadnić brak reakcji rozpuszczalnością potencjalnych produktów
- [ ] umiem zaprojektować otrzymanie soli wszystkimi pięcioma drogami
- [ ] umiem zaprojektować wykrywanie Cl⁻, SO₄²⁻, CO₃²⁻ i kationów metali z kontrolą interferencji
- [ ] umiem rozpisać układ Ba(OH)₂ + H₂SO₄ jako dwie równoległe reakcje jonowe
:::

## 21 | Co dalej? {#dalej} [[basic:E8]] [[extra:AMBITNE]]

Po opanowaniu tej lekcji naturalne kierunki:

- **CHE-X04 — Szereg aktywności metali:** droga „metal + sól” z [§7](#otrzymywanie) to wypieranie — tam poznasz jego pełne reguły, granice (pasywacja, litowce) i zapis redoks; razem z J03 dostajesz komplet reakcji jonowych strącania i wypierania.
- **CHE-R07 — Obliczenia z równań, substraty w stosunku niestechiometrycznym:** strącanie to też obliczenia — ile osadu opadnie, jaki odczynnik jest w nadmiarze; tam dopracujesz algorytm „co się skończyło”.
- **CHE-051 / CHE-054 — Reakcje i kwasy:** równania jonowe zobojętnienia i „kwas z soli” wrócą w pełnym kontekście chemii kwasów, zasad i soli.
- **Lekcje o wodzie i roztworach:** dysocjacja, elektrolity i przewodnictwo roztworów — tam znajdziesz fizyczną stronę tego, co tutaj zapisujesz chemicznie.
- **Dla konkursowców:** przepracuj drugi raz [§10](#zadania-konkurs) po tygodniowej przerwie — zadanie o interferencjach (15) i projektowanie syntezy (16) najdłużej trzymają się przy powtórce po odstępie; w liceum czeka cię iloczyn rozpuszczalności (Ksp), który wyjaśni tabelę rozpuszczalności ilościowo — to, co tu znasz regułami, dostanie wtedy liczby.

A jeśli chcesz zobaczyć tę lekcję na żywo — znakomitym ciągiem domowym jest obserwacja własnej czajnika (kamień = CaCO₃) i eksperyment z octem: ta sama chemia, którą ćwiczyłeś w probówkach, działa w kuchni za darmo.

### AUDYT — Claude, 2026-10-12 {#audyt-ulepsz}

**Poprawione:**
- Klucz mini-testu materiału roboczego (punkt 5): „2H⁺ + 2OH⁻ → 2H₂O” — utrzymano poprawkę W20 (współczynniki) i przedstawiono układ Ba(OH)₂ + H₂SO₄ jako dwie równoległe reakcje jonowe (ćwiczenie 5, test pyt. 10, fiszka).
- Klucz mini-testu materiału roboczego (punkt 4): odpowiedź o wykrywaniu SO₄²⁻ rozszerzona o wymóg odczynnika z Ba²⁺, zakwaszenia próby i interpretacji z interferencjami — zgodnie z poprawką W20 („sam zapis Ba²⁺ nie jest wystarczającą instrukcją”).
- Uzupełnienie z notatką scalającą: „Osad PbI₂ jest żółty — dopisać tę obserwację” → barwa żółta wpisana w treść zadania 11, tabelę osadów i fiszkę.
- Zapis skrócony 2KOH + H₂SO₄: przedstawiono obie formy (2OH⁻ + 2H⁺ → 2H₂O oraz uproszczoną OH⁻ + H⁺ → H₂O) z zachowaniem wersji materiału.
- W zadaniu 14b dodano jawne sprawdzenie bilansu ładunków (CO₃²⁻ + 2H⁺), bo materiał roboczy nie rozpisywał tego kroku.
- Frontmatter: „stan: W1” → „stan: ULEPSZONA — Claude, 2026-10-12; do sprawdzenia”; uzupełniono opis, kicker, lead, uwagi o zakresie.
- Notatki robocze materiału („Do uzupełnienia danymi”, „Status: MAX”) przeniesione: część do sekcji audytu, merytoryczne żądania danych (wersja tabeli szkoły, zadania rejonowe) odnotowane w „Niepewne”.

**Dodane:**
- §0.1–§0.2: kryteria gotowości (z „Cel i kryterium” materiału), diagnoza 5 pytań z kluczem.
- §1: pełny wykład „od zera” (obraz przewodni: teatr chemiczny — aktorzy i jony-widzowie).
- §2: algorytm 3-krokowy połączony z 7-krotkową procedurą z audytu Perplexity; trzy przykłady (NaOH+HCl, AgNO₃+NaCl, BaCl₂+Na₂SO₄ — ten ostatni z audytu Perplexity); zadania 1–2 (materiał roboczy zadanie 1 rozbite na dwa).
- §3: dysocjacja a reakcja, elektrolity mocne/słabe z ⇌, konwencja H⁺/H₃O⁺, nie-myl, zadanie 3 (wszystko z uzupełnień Perplexity).
- §4: tabela rozpuszczalności materiału roboczego w całości + metoda pracy regułami; zadanie 4.
- §5: trzy powody reakcji, NaNO₃ + KCl, ostrzeżenie o skracaniu tylko rzeczywistych obserwatorowych (audyt W1); zadanie 5 (materiał roboczy zadanie 2 — klucze zachowane).
- §6: tabela 10 osadów w pełnym brzmieniu materiału (z uwagami NH₃(aq), Fe(OH)₂ na powietrzu); zadanie 6.
- §7: pięć dróg materiału roboczego z równaniami + „kwas z soli” NaCl/H₂SO₄ jako poziom rozszerzony; karta understand o projektowaniu syntezy; zadanie 7 (materiał roboczy zadanie 3 — klucz zachowany).
- §8: tabela wykrywania jonów w pełnym brzmieniu + dopowiedzenia z audytów (woda wapienna, zakwaszenie, kontrola, interpretacja warunkowa); zadanie 8.
- §9: trzy doświadczenia z pełnymi próbami kontrolnymi i BHP (wykrywanie Cl⁻, SO₄²⁻ z zakwaszeniem, CO₃²⁻ z potwierdzeniem wody wapiennej — z uzupełnień Perplexity).
- §10: osiem zadań konkursowych (9–16) — wszystkie zadania z materiału roboczego i uzupełnień Perplexity przeniesione lub scalone (AgNO₃+NaCl+skracanie+bilans; HCl+NaOH i H₂SO₄+KOH; Pb(NO₃)₂+KI z żółtym osadem; NaNO₃+KCl) + nowe: znajdź błędy, sól+kwas, pułapka interferencji AgCl/Ag₂CO₃, projektowanie dwóch dróg do NaCl i BaCO₃→BaSO₄.
- §11: mini-wykład „Dla olimpijczyka” (H₃O⁺, równowaga słabych elektrolitów, energia sieci a hydratacja, redoks jonowy, system interferencji).
- §12–§15: klinika (11 wierszy — 4 z materiału + 6 z uzupełnień + barwa-identyfikacja z audytu), mity (7), ćwiczenia 1–8 (mini-test materiału zachowany jako ćwiczenie 8 z poprawionym kluczem), 5 ciekawostek, 9 mnemotechnik.
- §16–§21: test 14 pytań, 37 fiszek (w tym olimpijskie), 20 haseł słownika, mapa pojęć, ściąga z checklistą, „Co dalej” z powiązaniami materiału (X04, R07, 051/054).

**Niepewne / do weryfikacji:**
- Wersja tabeli rozpuszczalności w podręczniku ucznia i na konkursie (materiał prosił o „DANE: wersja tabeli używana w szkole/na konkursie”) — w szczególności status CaSO₄ (N vs T) i Mg(OH)₂; w lekcji utrzymano konwencję materiału roboczego z oznaczeniem T.
- Reakcja NaCl + H₂SO₄ (stęż.) → NaHSO₄ + HCl↑ — obecność w zakresie etapu rejonowego LKO bieżącej edycji do weryfikacji w informatorem (oznaczono jako poziom rozszerzony).
- Barwa Ag₂CO₃ (biały/białawożółty) i dokładny opis rozpuszczalności AgBr (żółtawobiały) różnią się drobnymi odcieniami między źródłami — podano konwencję szkolną z zapasem słownym.
- Materiał przewidywał sekcję „Archiwalne zadania LKO” po pozyskaniu arkuszy rejonowych (najlepiej 2024/25, 2025/26) z kluczem i typowymi zapisami wymaganymi w kluczu — do dodania w przyszłej rewizji (brak danych w paczce).
- Wartość stężenia jonów wody (10⁻⁷ mol/l) oznaczona „orientacyjnie, do weryfikacji z tablicami”.

**Proponuję usunąć:**
- brak.

**Źródła:**
- podstawa programowa i wymagania egzaminacyjne CKE (egzamin ósmoklasisty, chemia);
- polskie podręczniki szkolne do chemii klasy 7–8 (m.in. Nowa Era, WSiP) — rozdziały o reakcjach jonowych, rozpuszczalności i wykrywaniu jonów;
- informatory i arkusze konkursów chemicznych (etap rejonowy) — typowe wymagania zapisu jonowego;
- podręczniki akademickie chemii nieorganicznej i analitycznej (ogólne mechanizmy: dysocjacja, rozpuszczalność, interferencje — zarys).

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §1, po akapicie o trzech poziomach | schemat statyczny z podpisami do klikania | trzy karty nad tą samą reakcją AgNO₃ + NaCl: cząsteczkowa, pełna, skrócona; kliknięcie karty odsłania, które jony grają, a które patrzą | każdy kolejny poziom zapisu pokazuje mniej widowni i więcej akcji | Trzy ułożone karty z tym samym równaniem: pierwsza pokazuje całe związki, druga wszystkie jony w roztworze, trzecia tylko Ag⁺ i Cl⁻; podpis wskazuje obserwatorowych szarą czcionką. Wniosek: zapis skrócony to scena aktorska reakcji. |
| §2, po procedurze 7 kroków | animacja „do przodu i od początku” | kolejne kroki algorytmu na przykładzie BaCl₂ + Na₂SO₄: bilans, klasyfikacja substancji, rozpis, skracanie, kontrola bilansów | algorytm prowadzi krok po kroku od równania cząsteczkowego do skróconego | Animacja przechodzi przez 7 kroków: równanie cząsteczkowe → oznaczenie osadu → rozpisanie jonów → skreślenie 2Na⁺ i 2Cl⁻ → sprawdzenie bilansu; odtwarzanie od początku powtarza sekwencję. Wniosek: procedura jest powtarzalna dla każdej reakcji strącania. |
| §4, po tabeli reguł | model interaktywny z suwakiem lub przełącznikiem | macierz anion × kation; wybór pary podświetla verdict R/N/T z regułą i wyjątkiem | rozpuszczalność wyznacza się regułami od anionu do wyjątków | Interaktywna siatka: kolumny (Cl⁻, SO₄²⁻, CO₃²⁻, NO₃⁻, OH⁻), wiersze (Na⁺, Ag⁺, Ba²⁺, Ca²⁺, Cu²⁺); kliknięcie pola pokazuje R/N/T, obowiązującą regułę i wyjątek. Wniosek: dwie rodziny bez wyjątków i listy wyjątków rozstrzygają wszystkie pary. |
| §6, po tabeli barw | schemat statyczny | zestaw probówek z osadami i ich barwami: biały, niebieski, brudnozielony, brunatny, żółty, żółtawobiały | barwa osadu to pierwsza wskazówka identyfikacyjna w analizie | Rząd probówek z opisanymi osadami (AgCl, Cu(OH)₂, Fe(OH)₂, Fe(OH)₃, PbI₂, AgI); przy Fe(OH)₂ strzałka czasu pokazująca ciemnienie na powietrzu. Wniosek: katalog barw różnicuje kationy i aniony w prostych próbach. |
| §9, doświadczenie 3 | doświadczenie wirtualne (zlewka, przyrząd) | połączenie dwóch probówek: węglan + kwas → CO₂ do wody wapiennej → zmętnienie; świadki pozytywny i negatywny obok | ulot gazu potwierdza dopiero druga niezależna próba (woda wapienna) | Wirtualny zestaw: probówka reakcyjna z korkiem i rurką do probówki z wodą wapienną; przyciski prób: badana, marmur (pozytywny), woda destylowana (negatywna); animacja bąbelków i mętnienia. Wniosek: CO₃²⁻ rozpoznajemy po CO₂ potwierdzonym CaCO₃↓. |
| §10, przy zadaniu 15 | animacja „tam i z powrotem” | dwie ścieżki rozstrzygania białego osadu: AgCl trwały w HNO₃ kontra Ag₂CO₃ rozpuszczający się z ulotem CO₂ | próba różnicująca kwasem oddziela chlorki od węglanów | Animacja dwutorowa: probówka z białym osadem → dodanie HNO₃ → lewa ścieżka (osad zostaje: chlorki), prawa ścieżka (osad znika z bąbelkami CO₂: węglany); powrót do stanu wyjścia umożliwia porównanie. Wniosek: kolor osadu to wskazówka, a próba kwasem — dowód. |


---

# LEKCJA J07 — Ka, Kb i Kw

- TRYB: ULEPSZ
- KOD: J07 (znacznik odpowiedzi: `<<<PLIK J07`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 9.8, sekcje ## 15, zadania (karta exam) 1, pytania testowe 6, fiszki 8, hasła słownika 9, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 3, mini-wykłady (W skrócie) 1, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: J07
uid: CHE.04.J07.ka_kb_kw
tytul: Ka, Kb i Kw
opis: Stałe dysocjacji kwasów i zasad (Ka, Kb), iloczyn jonowy wody (Kw), pKa, prawo rozcieńczeń Ostwalda i pH słabych kwasów · LO
kicker: J07 · JONY · NOWA LEKCJA
lead: Słaby kwas ma swoją „moc” liczbowo. Stała dysocjacji Ka mówi, jak chętnie kwas oddaje proton, a z niej można policzyć pH roztworu. Ta lekcja pokazuje, jak to zrobić krok po kroku.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA J07 v1.0** · Ka, Kb i Kw · 2026
---

::: minimum | Muszę umieć — 10 punktów (LO)
1. **Ka** to stała dysocjacji kwasu: Ka = [H₃O⁺][A⁻] / [HA]. Im większa Ka, tym mocniejszy kwas.
2. **Kb** to stała dysocjacji zasady: Kb = [BH⁺][OH⁻] / [B].
3. **Kw** = [H₃O⁺][OH⁻] = 1,0·10⁻¹⁴ w 25 °C.
4. **pKa = −log Ka**; mniejsza pKa oznacza mocniejszy kwas.
5. Dla pary sprzężonej: Ka · Kb = Kw.
6. Dla słabego kwasu jednoprotonowego, gdy α ≪ 1: Ka ≈ α²·c.
7. **Prawo rozcieńczeń Ostwalda**: stopień dysocjacji α rośnie przy rozcieńczaniu.
8. pH słabego kwasu: [H₃O⁺] ≈ √(Ka·c), więc pH = −log√(Ka·c).
9. Kw zależy od temperatury (rośnie z T).
10. Wzorów przybliżonych nie stosujemy do mocnych elektrolitów — tam dysocjacja jest praktycznie całkowita.
:::

::: warstwy
- understand | <b>Rozumienie:</b> co mówi stała Ka; dlaczego dla słabych kwasów pH nie zależy wprost od stężenia tak jak dla mocnych
- extra | <b>LO:</b> pKa; prawo Ostwalda; obliczenia pH i α; para sprzężona Ka·Kb = Kw
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Równowagę słabego kwasu opisuje jedna liczba: Ka. Z niej wynika ilość jonów H₃O⁺ w roztworze o danym stężeniu. Dla słabych kwasów stopień dysocjacji jest mały, więc przybliżenia są uzasadnione. Najważniejsze: **Ka zależy od kwasu i temperatury, nie od stężenia roztworu**. Stężenie zmienia α, a nie Ka.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od diagnozy (0.4). Potem przeczytaj definicje Ka, Kb, Kw i przykłady. Obliczenia rób samodzielnie i sprawdź z kluczem.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- zapisać wyrażenia Ka i Kb dla słabego kwasu i zasady;
- obliczyć pKa z Ka i odwrotnie;
- policzyć pH słabego kwasu z przybliżeniem √(Ka·c);
- wyjaśnić prawo Ostwalda.
:::

::: karta exam | Pytanie przewodnie
Jak liczbowo opisać „moc” słabego kwasu i policzyć jego pH?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- równowaga dynamiczna i pary sprzężone (J06); pH i skala logarytmiczna (J02);
- stała równowagi (K09, zapowiedź) — tutaj stosujemy ją do dysocjacji.

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Co to Ka?
2. Ile wynosi Kw w 25 °C?
3. Jak z Ka obliczyć pKa?
4. Co mówi prawo Ostwalda?
5. Jak przybliżyć [H₃O⁺] dla słabego kwasu?

::: odp | Pokaż klucz i interpretację
1. Stała dysocjacji kwasu.
2. 1,0·10⁻¹⁴.
3. pKa = −log Ka.
4. Stopień dysocjacji rośnie przy rozcieńczaniu.
5. [H₃O⁺] ≈ √(Ka·c).

**Interpretacja:** 5/5 — przejdź do przykładów; 3–4/5 — przeczytaj punkty 3–4; 0–2/5 — zacznij od rdzenia.
:::
:::

## 1 | Definicje i wzory [[understand:ROZUMIENIE]] {#definicje}

**Kwas HA:** HA + H₂O ⇌ H₃O⁺ + A⁻, Ka = [H₃O⁺][A⁻] / [HA].

**Zasada B:** B + H₂O ⇌ BH⁺ + OH⁻, Kb = [BH⁺][OH⁻] / [B].

**Woda:** 2H₂O ⇌ H₃O⁺ + OH⁻, Kw = [H₃O⁺][OH⁻] = 1,0·10⁻¹⁴ (25 °C).

::: regula
**pKa = −log Ka** i **Ka · Kb = Kw** (dla pary sprzężonej kwas–zasada).
Małe Ka = słaby kwas; duże pKa = słaby kwas.
:::

## 2 | Prawo rozcieńczeń Ostwalda [[extra:LO]] {#ostwald}

Dla słabego elektrolitu jednoprotonowego o stężeniu c i stopniu dysocjacji α:

Ka = α²·c / (1 − α).

Gdy α ≪ 1, przybliżamy: Ka ≈ α²·c, czyli α ≈ √(Ka / c).

Z tego wynika, że przy rozcieńczaniu (mniejsze c) α rośnie: prawo Ostwalda.

## 3 | Przykłady prowadzone [[extra:LO]] {#przyklady}

::: odp | Przykład 1: pH kwasu octowego
Ka(CH₃COOH) ≈ 1,8·10⁻⁵, c = 0,1 mol/dm³.
[H₃O⁺] ≈ √(1,8·10⁻⁵ · 0,1) = √(1,8·10⁻⁶) ≈ 1,34·10⁻³ mol/dm³.
pH ≈ 2,87.
:::

::: odp | Przykład 2: pKa na Ka
pKa = 4,76 → Ka = 10⁻⁴,⁷⁶ ≈ 1,74·10⁻⁵.
:::

::: odp | Przykład 3: sprzężona para amoniaku
Kb(NH₃) ≈ 1,8·10⁻⁵. Ka(NH₄⁺) = Kw / Kb = 10⁻¹⁴ / 1,8·10⁻⁵ ≈ 5,6·10⁻¹⁰.
:::

::: karta warning | Pułapka: wzór √(Ka·c) tylko dla słabych kwasów
Do mocnego kwasu nie stosujemy √(Ka·c) — mocny kwas dysocjuje praktycznie całkowicie, więc [H₃O⁺] ≈ c. Zawsze najpierw sprawdź, czy kwas jest słaby.
:::

## 4 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Używanie √(Ka·c) dla mocnego kwasu | Dla mocnego: [H₃O⁺] ≈ c | Wzór zakłada słaby kwas (α ≪ 1)
Pomijanie zależności Kw od temperatury | Kw zależy od T | W innej T wartość się zmienia
α traktowane jako stała | α zależy od c (Ostwald) | Rozcieńczanie zwiększa α
Użycie Ka dla zasady | Dla zasady używamy Kb | Inna stała, inny proces
:::

## 5 | Ćwiczenia z kluczem {#cwiczenia}

::: karta basic | A. Podstawa — pKa
Oblicz pKa dla Ka = 1,0·10⁻⁵.

::: odp | Pokaż odpowiedź
pKa = −log(1,0·10⁻⁵) = 5.
:::
:::

::: karta understand | B. Trening — pH słabego kwasu
Oblicz [H₃O⁺] i pH dla c = 0,01 mol/dm³, Ka = 1,0·10⁻⁶ (przybliżenie).

::: odp | Pokaż odpowiedź
[H₃O⁺] ≈ √(1,0·10⁻⁶ · 0,01) = √(1,0·10⁻⁸) = 1,0·10⁻⁴ mol/dm³. pH = 4.
:::
:::

::: karta understand | C. Trening — stopień dysocjacji
Oblicz α dla c = 0,1 mol/dm³, Ka = 1,8·10⁻⁵ (przybliżenie).

::: odp | Pokaż odpowiedź
α ≈ √(Ka/c) = √(1,8·10⁻⁴) ≈ 0,0134, czyli ok. 1,3 %.
:::
:::

::: karta extra | D. LO — Kb z Ka sprzężonego
Ka sprzężonego kwasu wynosi 4,0·10⁻¹⁰ (25 °C). Oblicz Kb.

::: odp | Pokaż odpowiedź
Kb = Kw / Ka = 10⁻¹⁴ / 4,0·10⁻¹⁰ = 2,5·10⁻⁵.
:::
:::

## 6 | Fiszki {#fiszki}

::: fiszki
Co to Ka? | stała dysocjacji kwasu | basic:podstawa
Ile wynosi Kw w 25 °C? | 1,0·10⁻¹⁴ | basic:podstawa
Jak obliczyć pKa? | pKa = −log Ka | basic:podstawa
Co mówi prawo Ostwalda? | α rośnie przy rozcieńczaniu | understand:rozumienie
Wzór na [H₃O⁺] słabego kwasu? | √(Ka·c) | extra:LO
Czy Ka zależy od stężenia? | nie — zależy od kwasu i T | understand:rozumienie
Jak obliczyć pKb? | pKb = −log Kb | basic:podstawa
Jak wiążą się Ka i Kb pary sprzężonej? | Ka · Kb = Kw | understand:rozumienie
:::

## 7 | Słownik {#slownik}

::: slownik
Stała dysocjacji Ka :: stała równowagi dla dysocjacji kwasu
Stała dysocjacji Kb :: stała równowagi dla dysocjacji zasady
Iloczyn jonowy wody Kw :: [H₃O⁺][OH⁻] = 1,0·10⁻¹⁴ w 25 °C
pKa :: −log Ka; im mniejsza, tym mocniejszy kwas
Prawo Ostwalda :: zależność stopnia dysocjacji od rozcieńczenia
Kwas słaby :: kwas, który w roztworze dysocjuje tylko częściowo
Stopień dysocjacji α :: ułamek cząsteczek, które uległy dysocjacji
Para sprzężona :: kwas i zasada różniące się jednym protonem
Zasada Brønsteda :: substancja zdolna przyjmować proton
:::

## 8 | Test {#test}

::: test
? Które zdanie jest prawdziwe?
+ Im większa Ka, tym mocniejszy kwas.
- Im większa Ka, tym słabszy kwas.
- Ka zależy od stężenia roztworu.
- Kw zależy od kwasu.
! Ka mierzy skłonność do oddawania protonu.

? Ile wynosi pKa, gdy Ka = 1,0·10⁻⁴?
- 2
+ 4
- 10
- 14
! pKa = −log(1,0·10⁻⁴) = 4.

? Iloczyn jonowy wody w 25 °C to:
- 1,0·10⁻⁷
+ 1,0·10⁻¹⁴
- 1,0
- 14
! Kw = [H₃O⁺][OH⁻] = 10⁻¹⁴.

? Prawo rozcieńczeń Ostwalda mówi, że przy rozcieńczaniu:
- α maleje
+ α rośnie
- α się nie zmienia
- Ka rośnie
! Stopień dysocjacji słabego elektrolitu rośnie.

? Dla pary sprzężonej zachodzi:
- Ka + Kb = Kw
+ Ka · Kb = Kw
- Ka = Kb
- Kb = 0
! Iloczyn stałych pary sprzężonej równa się Kw.
? Które wyrażenie opisuje stałą dysocjacji kwasu HA?
+ Ka = [H₃O⁺][A⁻] / [HA]
- Ka = [HA] / ([H₃O⁺][A⁻])
- Ka = [H₃O⁺]
- Ka = pH
! Ka to stosunek iloczynu stężeń produktów do stężenia kwasu w stanie równowagi.
:::

## 9 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego pKa jest wygodniejsza niż Ka?
Stałe dysocjacji mają wartości rzędu 10⁻⁵ czy 10⁻¹⁰. Logarytm zamienia je na proste liczby (np. 4,76). Dzięki temu łatwiej porównywać moce kwasów, tak jak pH zamienia stężenia jonów na skalę 0–14.
:::

::: karta extra | Kw a temperatura
Iloczyn jonowy wody rośnie z temperaturą, więc w wyższej T pH czystej wody jest niższe niż 7, mimo że woda nadal jest obojętna (ma [H₃O⁺] = [OH⁻]).
:::

## 10 | Wykład — stała, która opisuje kwas {#wyklad}

::: karta understand | Wykład — od zera: po co stała dysocjacji
W J06 poznałeś równowagę słabego kwasu jakościowo. Chemik chce wiedzieć więcej: jak daleko ta równowaga leży po stronie jonów? Odpowiada na to stała dysocjacji Ka. Jest to stosunek iloczynu stężeń produktów do stężenia kwasu, w stanie równowagi.

Ważne: Ka nie zmienia się, gdy rozcieńczysz roztwór. Zmienia się natomiast stopień dysocjacji α. Przy mniejszym stężeniu cząsteczek kwasu jest mniej, więc każda dysocjuje z większą łatwością — tak działa prawo Ostwalda.

**Mini-wykład: po co logarytm.** Stężenia jonów w roztworach mogą różnić się o wiele rzędów wielkości. Logarytm (pKa, pH) sprowadza je do wygodnej skali. Jednostka zmiany jest zawsze taka sama: krok o 1 oznacza dziesięciokrotną zmianę.

**Mini-wykład: granica przybliżenia.** Wzór √(Ka·c) zakłada, że α jest bardzo małe. Jeśli kwas jest bardzo rozcieńczony lub bardzo mocny, przybliżenie przestaje być dokładne. Zawsze sprawdź, czy wynik jest sensowny.
:::

::: karta core | W skrócie — Ka w jednym zdaniu
Ka opisuje moc słabego kwasu niezależnie od stężenia; z niej i ze stężenia liczymy [H₃O⁺] i pH.
:::

## 11 | Checklista — umiem… {#checklista}

::: checklista
- [ ] zapisać wyrażenia Ka, Kb i Kw;
- [ ] obliczyć pKa z Ka i odwrotnie;
- [ ] policzyć pH słabego kwasu przybliżeniem √(Ka·c);
- [ ] wyjaśnić prawo Ostwalda;
- [ ] sprawdzić, czy wzór przybliżony stosuje się do danego kwasu.
:::


---

# LEKCJA J08 — Hydroliza soli

- TRYB: ULEPSZ
- KOD: J08 (znacznik odpowiedzi: `<<<PLIK J08`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 10.1, sekcje ## 15, zadania (karta exam) 1, pytania testowe 5, fiszki 6, hasła słownika 4, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 3, mini-wykłady (W skrócie) 2, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: J08
uid: CHE.04.J08.hydroliza_soli
tytul: Hydroliza soli
opis: Dlaczego roztwór soli bywa kwaśny lub zasadowy — hydroliza kationowa, anionowa i kationowo-anionowa; przewidywanie odczynu z mocy kwasu i zasady, z których powstała sól · LO: stała hydrolizy Kh
kicker: J08 · JONY · NOWA LEKCJA
lead: „To tylko sól” — a jednak roztwór sody jest zasadowy, a roztwór soli amonowej kwaśny. Ta lekcja pokazuje, że jony soli reagują z wodą, i uczy przewidywać odczyn roztworu.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA J08 v1.0** · Hydroliza soli · 2026
---

::: minimum | Muszę umieć — 10 punktów
1. **Hydroliza** to reakcja jonów soli z wodą.
2. Sól **mocnego kwasu i mocnej zasady** (np. NaCl) nie hydrolizuje: odczyn obojętny.
3. Sól **mocnego kwasu i słabej zasady** (np. NH₄Cl) daje odczyn kwasowy (hydroliza kationowa).
4. Sól **słabego kwasu i mocnej zasady** (np. CH₃COONa) daje odczyn zasadowy (hydroliza anionowa).
5. Sól **słabego kwasu i słabej zasady** — odczyn zależy od porównania Ka i Kb.
6. Przykład anionowy: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ (pH > 7).
7. Przykład kationowy: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ (pH < 7).
8. Hydroliza nie jest dysocjacją soli: sól najpierw rozpada się na jony, potem jony reagują z wodą.
9. (LO) Kh = Kw / Ka (dla anionu słabego kwasu) lub Kw / Kb (dla kationu słabej zasady).
10. Odczyn wynika z tego, który jon „przeważa” w reakcji z wodą.
:::

::: warstwy
- e8 | <b>E8:</b> cztery typy soli; przewidywanie odczynu; zapis równań hydrolizy
- understand | <b>Rozumienie:</b> dlaczego jony słabych kwasów i zasad reagują z wodą, a jony mocnych nie
- extra | <b>LO:</b> stała hydrolizy Kh; obliczenia pH soli
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Sól powstała z kwasu i zasady. Jeśli kwas lub zasada była słaba, jej jon nie „chce” być wolny i reaguje z wodą, zmieniając stężenie H₃O⁺ lub OH⁻. Jeśli obie były mocne, jony są obojętne. Zapytaj: **z jakiego kwasu i z jakiej zasady powstała sól? Które z nich jest słabe?**
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od diagnozy (0.4). Potem przeczytaj tabelę przewidywania (punkt 2). Przykłady przewiduj sam, zanim sprawdzisz klucz.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- przewidzieć odczyn roztworu soli z mocy kwasu i zasady;
- zapisać równanie hydrolizy kationowej i anionowej;
- odróżnić hydrolizę od dysocjacji soli;
- (LO) obliczyć Kh z Ka lub Kb.
:::

::: karta exam | Pytanie przewodnie
Dlaczego niektóre sole dają roztwór kwaśny lub zasadowy, skoro „to tylko sól”?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- mocne i słabe elektrolity (J01); odczyn i pH (J02); pary sprzężone (J06);
- stałe Ka, Kb, Kw (J07).

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Jaki odczyn ma roztwór NaCl?
2. Jaki odczyn ma roztwór CH₃COONa?
3. Jaki odczyn ma roztwór NH₄Cl?
4. Zapisz hydrolizę jonu CH₃COO⁻.
5. Zapisz hydrolizę jonu NH₄⁺.

::: odp | Pokaż klucz i interpretację
1. Obojętny — jony Na⁺ i Cl⁻ pochodzą z mocnych elektrolitów.
2. Zasadowy — CH₃COO⁻ pochodzi od słabego kwasu.
3. Kwasowy — NH₄⁺ pochodzi od słabej zasady.
4. CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.
5. NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.

**Interpretacja:** 5/5 — przejdź do tabeli i przykładów; 3–4/5 — przeczytaj punkt 2; 0–2/5 — zacznij od rdzenia.
:::
:::

## 1 | Hydroliza a dysocjacja [[basic:E8]] {#roznica}

::: regula
**Dysocjacja** soli to rozpad na jony (NH₄Cl → NH₄⁺ + Cl⁻). **Hydroliza** to dalsza reakcja tych jonów z wodą. Najpierw dysocjacja, potem ewentualnie hydroliza.
:::

## 2 | Przewidywanie odczynu [[basic:E8]] {#przewidywanie}

| Kwas, z którego powstała sól | Zasada mocna | Zasada słaba |
|---|---|---|
| **mocny** | obojętny (np. NaCl) | kwasowy (np. NH₄Cl) |
| **słaby** | zasadowy (np. CH₃COONa) | zależy od Ka i Kb |

::: karta understand | W skrócie — kto „przeważa”
Jeśli jon pochodzi od słabego kwasu, bierze protony z wody i powstają jony OH⁻ (odczyn zasadowy). Jeśli jon pochodzi od słabej zasady, oddaje protony wodzie i powstają jony H₃O⁺ (odczyn kwasowy).
:::

## 3 | Przykłady prowadzone [[basic:E8]] {#przyklady}

::: odp | Przykład 1: CH₃COONa (hydroliza anionowa)
CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. Powstają jony OH⁻, więc odczyn jest zasadowy (pH > 7). Kationu Na⁺ nie zmieniamy — pochodzi z mocnej zasady NaOH.
:::

::: odp | Przykład 2: NH₄Cl (hydroliza kationowa)
NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. Powstają jony H₃O⁺, więc odczyn jest kwasowy (pH < 7). Anion Cl⁻ pochodzi z mocnego kwasu HCl i nie hydrolizuje.
:::

::: odp | Przykład 3: NaCl (brak hydrolizy)
Na⁺ i Cl⁻ pochodzą z mocnych elektrolitów NaOH i HCl. Żaden z jonów nie reaguje z wodą w zauważalnym stopniu, więc odczyn jest obojętny.
:::

::: odp | Przykład 4: CH₃COONH₄ (oba jony)
Porównujemy Ka(CH₃COOH) i Kb(NH₃). Są w przybliżeniu równe, więc odczyn jest bliski obojętnego. Dokładny wynik zależy od porównania tych dwóch stałych.
:::

## 4 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Wszystkie sole dają odczyn obojętny | Tylko sól mocnego kwasu i mocnej zasady | Jony słabych kwasów i zasad hydrolizują
Hydroliza = dysocjacja soli | Hydroliza to reakcja jonów z wodą po dysocjacji | Dwa różne procesy
Zły kierunek strzałki | Hydroliza zapisywana jako ⇌ | Reakcja jest odwracalna, a w równowadze część jonów pozostaje
Mylenie kationu i anionu | Kation pochodzi od zasady, anion od kwasu | Ta sama reguła w obu przypadkach
:::

## 5 | Ćwiczenia z kluczem {#cwiczenia}

::: karta basic | A. Podstawa — odczyn
Określ odczyn roztworów: KNO₃, HCOONa, NH₄NO₃, Na₂CO₃.

::: odp | Pokaż odpowiedzi
KNO₃ — obojętny (mocny kwas i mocna zasada). HCOONa — zasadowy (anion słabego kwasu mrówkowego). NH₄NO₃ — kwasowy (kation słabej zasady NH₃). Na₂CO₃ — zasadowy (anion słabego kwasu węglowego).
:::
:::

::: karta understand | B. Trening — zapis hydrolizy
Zapisz pierwszy etap hydrolizy jonu CO₃²⁻.

::: odp | Pokaż odpowiedź
CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻.
:::
:::

::: karta understand | C. Trening — chlorek glinu
Dlaczego roztwór AlCl₃ jest kwaśny?

::: odp | Pokaż odpowiedź
Kation Al³⁺ hydrolizuje w wodzie: powstają jony H₃O⁺ (przy wiązaniu OH⁻ z wody), więc odczyn jest kwaśny. Anion Cl⁻ pochodzi z mocnego kwasu i nie hydrolizuje.
:::
:::

::: karta extra | D. LO — stała hydrolizy
Ka słabego kwasu wynosi 1·10⁻⁵. Oblicz stałą hydrolizy Kh dla jego soli sodowej.

::: odp | Pokaż odpowiedź
Kh = Kw / Ka = 10⁻¹⁴ / 10⁻⁵ = 10⁻⁹.
:::
:::

## 6 | Fiszki {#fiszki}

::: fiszki
Jaki odczyn ma NaCl? | obojętny | basic:podstawa
Jaki odczyn ma CH₃COONa? | zasadowy | basic:podstawa
Jaki odczyn ma NH₄Cl? | kwasowy | basic:podstawa
Czym jest hydroliza? | reakcją jonów soli z wodą | basic:podstawa
Czy hydroliza to to samo co dysocjacja? | nie | understand:rozumienie
Wzór na Kh dla anionu słabego kwasu? | Kh = Kw / Ka | extra:LO
:::

## 7 | Słownik {#slownik}

::: slownik
Hydroliza :: reakcja jonów soli z wodą, zmieniająca odczyn roztworu
Hydroliza anionowa :: anion słabego kwasu przyjmuje proton z wody, powstają jony OH⁻
Hydroliza kationowa :: kation słabej zasady oddaje proton wodzie, powstają jony H₃O⁺
Stała hydrolizy Kh :: stała równowagi reakcji hydrolizy; LO
:::

## 8 | Test {#test}

::: test
? Który roztwór jest zasadowy?
- NaCl
- NH₄Cl
+ CH₃COONa
- KNO₃
! Anion CH₃COO⁻ pochodzi od słabego kwasu.

? Jaki odczyn ma roztwór NH₄Cl?
+ kwasowy
- zasadowy
- obojętny
- zależy tylko od stężenia
! Kation NH₄⁺ pochodzi od słabej zasady.

? Dysocjacja a hydroliza soli:
- to to samo
+ hydroliza to reakcja jonów z wodą po dysocjacji
- dysocjacja zachodzi tylko w kwasach
- hydroliza zawsze prowadzi do pH = 7
! Hydroliza jest dalszym etapem.

? Który zapis przedstawia hydrolizę anionową?
- NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺
+ CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻
- Na⁺ + H₂O ⇌ NaOH + H⁺
- Cl⁻ + H₂O ⇌ HCl + OH⁻
! Anion słabego kwasu reaguje z wodą, tworząc OH⁻.

? Sól mocnego kwasu i mocnej zasady:
+ nie hydrolizuje (odczyn obojętny)
- hydrolizuje do kwasu
- hydrolizuje do zasady
- zawsze daje odczyn kwasowy
! Jony pochodzą z mocnych elektrolitów.
:::

## 9 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego soda pieczenia jest zasadowa?
Wodorowęglan sodu zawiera anion słabego kwasu węglowego. Jego hydroliza daje jony OH⁻, co tłumaczy, dlaczego roztwór sody jest lekko zasadowy. Ta cecha pomaga neutralizować kwasy, np. w cieście.
:::

::: karta extra | Hydroliza a pielęgnacja roślin
Niektóre sole amonowe stosowane jako nawozy działają kwaśniej, bo kation amonowy hydrolizuje. Dlatego ich wpływ na odczyn gleby trzeba uwzględniać.
:::

## 10 | Wykład — dlaczego „sól” nie zawsze znaczy obojętny roztwór {#wyklad}

::: karta understand | Wykład — od zera: skąd bierze się odczyn soli
Gdy wrzucisz do wody sól, najpierw rozpada się na jony. Gdyby jony były zupełnie obojętne, roztwór byłby zawsze obojętny. Tymczasem jon pochodzący od słabego kwasu lub słabej zasady może reagować z wodą, bo jego cząsteczka „wolałaby” być niezdysocjowana.

Przykład: anion octanowy CH₃COO⁻ przyjmuje proton z wody i tworzy kwas octowy. Przy okazji powstaje OH⁻, czyli roztwór staje się zasadowy. Podobnie kation NH₄⁺ oddaje proton wodzie, tworząc NH₃ i H₃O⁺: roztwór staje się kwasowy.

**Mini-wykład: dlaczego jon mocnego kwasu nie hydrolizuje.** Anion Cl⁻ z mocnego kwasu HCl praktycznie nie przyjmuje protonów z wody, bo HCl oddaje proton łatwo. Podobnie kation Na⁺ z mocnej zasady NaOH nie oddaje protonów wodzie. Dlatego NaCl daje roztwór obojętny.

**Mini-wykład: dlaczego sól może być kwaśna nawet przy obojętnych jonach.** Odczyn wynika z reakcji jonów z wodą, nie z samego składu soli. Ta sama sól może w określonych warunkach zmieniać odczyn, dlatego zawsze patrz na pochodzenie jonów.
:::

::: karta core | W skrócie — hydroliza w jednym zdaniu
Jon słabego kwasu daje odczyn zasadowy, jon słabej zasady — kwasowy, a jony mocnych elektrolitów nie zmieniają odczynu.
:::

## 11 | Checklista — umiem… {#checklista}

::: checklista
- [ ] odróżnić hydrolizę od dysocjacji soli;
- [ ] przewidzieć odczyn soli z mocy kwasu i zasady;
- [ ] zapisać hydrolizę anionową i kationową;
- [ ] wskazać, który jon hydrolizuje w soli słabego kwasu i mocnej zasady;
- [ ] (LO) obliczyć Kh z Ka lub Kb.
:::


---

# LEKCJA J09 — Bufory

- TRYB: ULEPSZ
- KOD: J09 (znacznik odpowiedzi: `<<<PLIK J09`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 10.8, sekcje ## 16, zadania (karta exam) 1, pytania testowe 5, fiszki 6, hasła słownika 3, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 3, mini-wykłady (W skrócie) 2, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: J09
uid: CHE.04.J09.bufory
tytul: Bufory
opis: Dlaczego pH buforu prawie się nie zmienia po dodaniu kwasu lub zasady — skład buforu, mechanizm działania, bufory w organizmie, równanie Henderson-Hasselbalcha · LO
kicker: J09 · JONY · NOWA LEKCJA
lead: Krew ma pH bliskie 7,4 i utrzymuje je mimo ciągłego napływu kwasów i zasad z pożywienia i przemiany materii. Odpowiedzią są bufory. Ta lekcja pokazuje, jak działają i kiedy przestają działać.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA J09 v1.0** · Bufory · 2026
---

::: minimum | Muszę umieć — 10 punktów
1. **Bufor** to układ, który ogranicza zmianę pH po dodaniu niewielkiej ilości mocnego kwasu lub zasady.
2. Typowy bufor to **słaby kwas + jego sól** (sprzężona zasada) w porównywalnych stężeniach, np. CH₃COOH / CH₃COONa.
3. Drugi typ: **słaba zasada + jej sól** (sprzężony kwas), np. NH₃ / NH₄Cl.
4. Dodany kwas (H₃O⁺) zużywa składnik zasadowy buforu: H₃O⁺ + A⁻ → HA + H₂O.
5. Dodana zasada (OH⁻) zużywa składnik kwasowy: OH⁻ + HA → A⁻ + H₂O.
6. Pojemność buforu jest **ograniczona** — po zużyciu składnika bufor przestaje działać.
7. (LO) pH ≈ pKa + log([A⁻]/[HA]) — równanie Henderson-Hasselbalcha.
8. Najlepsza pojemność buforu jest wtedy, gdy [HA] ≈ [A⁻], czyli pH ≈ pKa.
9. Bufor nie utrzymuje pH absolutnie stałego — tylko je stabilizuje.
10. W organizmie działają bufory: wodorowęglanowy (krew), fosforanowy, białkowy.
:::

::: warstwy
- e8 | <b>E8:</b> skład buforu; mechanizm działania; przykłady; ograniczenia
- understand | <b>Rozumienie:</b> dlaczego najlepszy bufor ma równe stężenia składników; dlaczego pojemność jest ograniczona
- extra | <b>LO:</b> równanie Henderson-Hasselbalcha; obliczenia pH buforu
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
W buforze są jednocześnie kwas i jego sprzężona zasada. Dodany mocny kwas zostaje związany przez zasadę buforu; dodana mocna zasada zostaje związana przez kwas buforu. Dlatego jony H₃O⁺ lub OH⁻ nie zmieniają stężenia tak mocno, jak w czystej wodzie. Pytanie na start: **co w tym roztworze może „zjeść” dodany kwas, a co dodaną zasadę?**
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od diagnozy (0.4). Potem przeczytaj mechanizm (punkt 2) i przykłady. Równanie Henderson-Hasselbalcha czytaj dopiero po opanowaniu E8.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- wskazać skład buforu;
- opisać, co dzieje się po dodaniu kwasu i po dodaniu zasady;
- podać przykład buforu w organizmie;
- (LO) obliczyć pH buforu z równania Henderson-Hasselbalcha.
:::

::: karta exam | Pytanie przewodnie
Jak utrzymać pH prawie stałe mimo dodawania kwasu lub zasady?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- słabe kwasy, pary sprzężone, równowagi (J06); pKa i Ka (J07); hydroliza soli (J08).

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Co to bufor?
2. Podaj przykład buforu octanowego.
3. Co się dzieje po dodaniu HCl do buforu CH₃COOH / CH₃COO⁻?
4. Czy bufor ma nieograniczoną pojemność?
5. Gdzie w organizmie działa ważny bufor?

::: odp | Pokaż klucz i interpretację
1. Układ ograniczający zmianę pH po dodaniu kwasu lub zasady.
2. CH₃COOH + CH₃COONa.
3. H₃O⁺ reaguje z CH₃COO⁻ i tworzy CH₃COOH; pH zmienia się niewiele.
4. Nie.
5. We krwi (układ wodorowęglanowy).

**Interpretacja:** 5/5 — przejdź do mechanizmu; 3–4/5 — przeczytaj punkt 2; 0–2/5 — zacznij od rdzenia.
:::
:::

## 1 | Skład buforu [[basic:E8]] {#sklad}

Bufor musi zawierać parę sprzężoną, czyli kwas i jego sprzężoną zasadę w porównywalnych ilościach:

- **kwasowy:** CH₃COOH (kwas) + CH₃COONa (sól, źródło CH₃COO⁻);
- **zasadowy:** NH₃ (zasada) + NH₄Cl (sól, źródło NH₄⁺).

::: regula
**Bufor = słaby elektrolit + jego sól z tym samym jonem wspólnym.** Sól dostarcza zapas sprzężonej zasady lub kwasu.
:::

## 2 | Mechanizm działania [[basic:E8]] {#mechanizm}

::: karta core | Dodatek mocnego kwasu
H₃O⁺ + A⁻ → HA + H₂O. Jony H₃O⁺ zostają związane przez zasadę buforu (A⁻) i zamienione w słaby kwas. Stężenie H₃O⁺ rośnie tylko nieznacznie.
:::

::: karta core | Dodatek mocnej zasady
OH⁻ + HA → A⁻ + H₂O. Jony OH⁻ zostają związane przez kwas buforu (HA). Stężenie OH⁻ rośnie tylko nieznacznie.
:::

::: karta understand | W skrócie — bufor jako magazyn
Bufor działa jak zbiornik z dwoma składnikami, które „zjadają” nadmiar kwasu lub zasady. Dopóki składniki są, pH się trzyma. Gdy któryś się wyczerpie, bufor przestaje działać.
:::

## 3 | Przykłady prowadzone [[basic:E8]] {#przyklady}

::: odp | Przykład 1: bufor octanowy
CH₃COOH / CH₃COO⁻ ma pKa ≈ 4,76, więc działa najlepiej wokół pH 4–5.
Po dodaniu HCl: CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O. Po dodaniu NaOH: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.
:::

::: odp | Przykład 2: bufor amoniakalny
NH₃ / NH₄⁺ ma pKa(NH₄⁺) ≈ 9,26, więc działa wokół pH 9–10.
:::

::: odp | Przykład 3: bufor wodorowęglanowy (krew)
H₂CO₃ / HCO₃⁻ utrzymuje pH krwi ok. 7,4. Dzięki temu enzymy i transport tlenu działają prawidłowo.
:::

::: karta warning | Pułapka: nie każda para to bufor
Dowolna sól z dowolnym kwasem nie tworzy buforu. Potrzebna jest para sprzężona. Mocny kwas i jego sól (np. HCl + NaCl) nie tworzą buforu — brak sprzężonej zasady, która wiąże H₃O⁺.
:::

## 4 | LO — równanie Henderson-Hasselbalcha {#hh}

::: adv | Wzór | poziom rozszerzony
Dla buforu słaby kwas / sól: pH ≈ pKa + log([A⁻] / [HA]).

Gdy [A⁻] = [HA], logarytm wynosi 0 i pH = pKa. Gdy stosunek zmienia się o 10 razy, pH zmienia się o 1 jednostkę.
:::

::: adv | Przykład obliczenia | poziom rozszerzony
Bufor octanowy: [CH₃COO⁻] = 0,1 mol/dm³, [CH₃COOH] = 0,1 mol/dm³, pKa = 4,76.
pH = 4,76 + log(0,1 / 0,1) = 4,76 + 0 = 4,76.
:::

## 5 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Bufor utrzymuje pH zawsze stałe | Ogranicza zmianę pH, nie eliminuje jej | Pojemność jest skończona
Dowolna sól + kwas = bufor | Potrzebna para sprzężona | Brak zasady wiążącej H₃O⁺ lub OH⁻
Bufor ma nieograniczoną pojemność | Ma ograniczoną pojemność | Składniki się zużywają
Najlepszy bufor: dowolne stężenia | Najlepszy, gdy [HA] ≈ [A⁻] | Wtedy pH ≈ pKa i zdolność buforowania jest największa
:::

## 6 | Ćwiczenia z kluczem {#cwiczenia}

::: karta basic | A. Podstawa — zaproponuj bufor
Zaproponuj bufor o pH ok. 5.

::: odp | Pokaż odpowiedź
CH₃COOH / CH₃COONa (pKa ≈ 4,76, czyli blisko pH 5).
:::
:::

::: karta understand | B. Trening — dodatek zasady
Co się stanie po dodaniu NaOH do buforu octanowego?

::: odp | Pokaż odpowiedź
OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O. Składnik kwasowy zostaje zużyty, a pH rośnie tylko nieznacznie.
:::
:::

::: karta understand | C. Trening — krew
Dlaczego krew ma bufor?

::: odp | Pokaż odpowiedź
Enzymy i transport tlenu działają tylko w wąskim zakresie pH. Bufor wodorowęglanowy stabilizuje pH krwi ok. 7,4, mimo ciągłego napływu kwasów i zasad.
:::
:::

::: karta extra | D. LO — pH buforu
Oblicz pH buforu o [HA] = 0,2 mol/dm³, [A⁻] = 0,02 mol/dm³ i pKa = 4,76.

::: odp | Pokaż odpowiedź
pH = 4,76 + log(0,02 / 0,2) = 4,76 + log(0,1) = 4,76 − 1 = 3,76.
:::
:::

## 7 | Fiszki {#fiszki}

::: fiszki
Co to bufor? | układ ograniczający zmianę pH po dodaniu kwasu lub zasady | basic:podstawa
Podaj skład buforu octanowego. | CH₃COOH i CH₃COONa | basic:podstawa
Co wiąże dodany H₃O⁺ w buforze? | sprzężona zasada (np. CH₃COO⁻) | understand:rozumienie
Kiedy pojemność buforu jest największa? | gdy [HA] ≈ [A⁻] | understand:rozumienie
Wzór Henderson-Hasselbalcha? | pH ≈ pKa + log([A⁻]/[HA]) | extra:LO
Jaki bufor działa we krwi? | wodorowęglanowy | basic:podstawa
:::

## 8 | Słownik {#slownik}

::: slownik
Bufor :: układ ograniczający zmianę pH po dodaniu kwasu lub zasady
Pojemność buforowa :: ilość kwasu lub zasady, jaką bufor może zneutralizować bez dużej zmiany pH
Równanie Henderson-Hasselbalcha :: wzór pH ≈ pKa + log([A⁻]/[HA]) dla buforu; LO
:::

## 9 | Test {#test}

::: test
? Który roztwór jest buforem?
- NaCl w wodzie
+ CH₃COOH z CH₃COONa
- HCl z NaCl
- sama woda
! Słaby kwas i jego sól tworzą bufor.

? Po dodaniu HCl do buforu octanowego zachodzi reakcja:
- H₃O⁺ + Cl⁻ → HCl + H₂O
+ H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O
- H₃O⁺ + Na⁺ → NaOH
- nie zachodzi żadna reakcja
! Anion CH₃COO⁻ wiąże dodany H₃O⁺.

? Najlepsza pojemność buforu występuje, gdy:
- [HA] = 0
+ [HA] ≈ [A⁻]
- [A⁻] = 0
- pH = 14
! Wtedy pH ≈ pKa.

? Który bufor działa we krwi?
- chlorkowy
+ wodorowęglanowy
- siarczanowy
- azotanowy
! Układ H₂CO₃ / HCO₃⁻ utrzymuje pH krwi.

? Które zdanie jest prawdziwe?
- Bufor utrzymuje pH absolutnie stałe.
+ Bufor ogranicza zmianę pH, a jego pojemność jest ograniczona.
- Bufor nie reaguje z kwasami.
- Każda sól z kwasem tworzy bufor.
! Bufor działa do wyczerpania składników.
:::

## 10 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego pH krwi nie może się bardzo zmienić?
Prawidłowe pH krwi mieści się w wąskim zakresie ok. 7,35–7,45. Odchylenia poza ten zakres są groźne dla zdrowia, dlatego organizm ma kilka buforów oraz płuca, które usuwają nadmiar CO₂.
:::

::: karta extra | Bufory w akwarium i basenie
Akwaryści i baseniarze dodają preparaty buforujące, by pH wody nie skakało po dodaniu nawozów lub środków dezynfekcyjnych. Działają one na tej samej zasadzie co bufor w laboratorium.
:::

## 11 | Wykład — stabilność, która ma swoją granicę {#wyklad}

::: karta understand | Wykład — od zera: dlaczego bufor „amortyzuje”
Wyobraź sobie sprężynę w samochodzie: przyjmuje uderzenia i nie pozwala, by wstrząs przeszedł na pasażera. Bufor robi coś podobnego z pH. Dodawany kwas nie od razu zmienia pH, bo najpierw reaguje z zasadą buforu. Podobnie z zasadą.

Ta amortyzacja ma jednak limit. Sprężyna może się ugiąć tylko do pewnego punktu, a bufor ma tylko określoną ilość składników. Po ich wyczerpaniu pH zaczyna gwałtownie się zmieniać.

**Mini-wykład: dlaczego połowa na połowę.** Najlepiej amortyzuje bufor, który ma tyle samo kwasu i jego soli. Wtedy zarówno zasada, jak i kwas buforu są w zapasie, więc można „zjeść” dodany kwas albo zasadę w podobnym stopniu. Stąd warunek pH ≈ pKa.

**Mini-wykład: bufor a woda.** Woda nie jest buforem. Dodany kwas czy zasada zmieni w niej pH znacznie bardziej, bo nie ma składnika wiążącego jony H₃O⁺ lub OH⁻.
:::

::: karta core | W skrócie — bufor w jednym zdaniu
Bufor to para sprzężona kwasu i zasady, która zużywa dodany kwas lub zasadę, dzięki czemu pH zmienia się mało, dopóki składniki nie zostaną zużyte.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] wskazać skład buforu (słaby kwas + sól lub słaba zasada + sól);
- [ ] opisać, co dzieje się po dodaniu kwasu i po dodaniu zasady;
- [ ] wyjaśnić, dlaczego pojemność buforu jest ograniczona;
- [ ] podać przykład buforu w organizmie;
- [ ] (LO) obliczyć pH buforu z równania Henderson-Hasselbalcha.
:::


---

# LEKCJA J10 — Iloczyn rozpuszczalności Ksp

- TRYB: ULEPSZ
- KOD: J10 (znacznik odpowiedzi: `<<<PLIK J10`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 9.8, sekcje ## 16, zadania (karta exam) 1, pytania testowe 5, fiszki 5, hasła słownika 4, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 3, mini-wykłady (W skrócie) 1, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: J10
uid: CHE.04.J10.iloczyn_rozpuszczalnosci_ksp
tytul: Iloczyn rozpuszczalności Ksp
opis: Ksp jako stała równowagi rozpuszczania osadu — rozpuszczalność molowa, warunek strącania, efekt wspólnego jonu · LO
kicker: J10 · JONY · NOWA LEKCJA
lead: W J04 przewidywałeś osad jakościowo, z tabeli. Teraz liczymy ilościowo: ile soli rozpuści się w wodzie i kiedy po zmieszaniu roztworów osad naprawdę się pojawi. Narzędziem jest iloczyn rozpuszczalności Ksp.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA J10 v1.0** · Iloczyn rozpuszczalności Ksp · 2026
---

::: minimum | Muszę umieć — 10 punktów (LO)
1. **Ksp** to iloczyn rozpuszczalności: stała równowagi rozpuszczania trudno rozpuszczalnej soli.
2. Dla AₘBₙ(s) ⇌ mAⁿ⁺ + nBᵐ⁻: Ksp = [Aⁿ⁺]ᵐ · [Bᵐ⁻]ⁿ (potęgi z indeksów).
3. **Rozpuszczalność molowa s** to stężenie nasyconego roztworu w mol/dm³.
4. Dla AB: Ksp = s², więc s = √Ksp.
5. Dla AB₂: Ksp = 4s³, więc s = ∛(Ksp/4).
6. **Warunek strącania**: osad powstaje, gdy iloczyn stężeń jonów jest większy od Ksp.
7. **Efekt wspólnego jonu**: dodatek jonu, który jest już w roztworze, zmniejsza rozpuszczalność.
8. Małe Ksp oznacza substancję trudno rozpuszczalną.
9. Ksp zależy od temperatury (zwykle rośnie z T).
10. Ksp jest ilościową wersją tabeli rozpuszczalności z J04.
:::

::: warstwy
- understand | <b>Rozumienie:</b> Ksp jako stała równowagi; dlaczego warunek strącania to „iloczyn > Ksp”
- extra | <b>LO:</b> rozpuszczalność molowa dla AB i AB₂; efekt wspólnego jonu; obliczenia warunku strącania
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Trudno rozpuszczalny osad nie znika całkowicie w wodzie: ustala się równowaga między stałą solą a jonami w roztworze. Ksp opisuje tę równowagę. Mały Ksp oznacza, że w roztworze zostaje bardzo mało jonów. Z tego wynikają dwa praktyczne pytania: **ile soli się rozpuści?** i **czy po zmieszaniu osad się pojawi?**
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od diagnozy (0.4). Potem przeczytaj zapis Ksp i tabelę wzorów (punkty 1–2). Przykłady licz samodzielnie.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- zapisać wyrażenie Ksp dla danej soli;
- obliczyć rozpuszczalność molową z Ksp;
- ocenić, czy po zmieszaniu roztworów powstanie osad;
- wyjaśnić efekt wspólnego jonu.
:::

::: karta exam | Pytanie przewodnie
Jak liczbowo przewidzieć, czy osad się strąci, czy rozpuści?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- strącanie osadów i tabela rozpuszczalności (J04); równowaga dynamiczna (J06); stała równowagi (K09, zapowiedź).

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Co to Ksp?
2. Zapisz Ksp dla AgCl.
3. Jak z Ksp obliczyć s dla AB?
4. Kiedy strąca się osad?
5. Co to efekt wspólnego jonu?

::: odp | Pokaż klucz i interpretację
1. Iloczyn rozpuszczalności — stała równowagi rozpuszczania.
2. Ksp = [Ag⁺][Cl⁻].
3. s = √Ksp.
4. Gdy iloczyn stężeń jonów jest większy od Ksp.
5. Dodatek jonu wspólnego zmniejsza rozpuszczalność.

**Interpretacja:** 5/5 — przejdź do przykładów; 3–4/5 — przeczytaj punkty 1–4; 0–2/5 — zacznij od rdzenia.
:::
:::

## 1 | Wyrażenie Ksp [[understand:ROZUMIENIE]] {#ksp}

Dla soli AₘBₙ rozpuszczającej się według równania AₘBₙ(s) ⇌ mAⁿ⁺(aq) + nBᵐ⁻(aq):

::: regula
**Ksp = [Aⁿ⁺]ᵐ · [Bᵐ⁻]ⁿ**, gdzie wykładniki to indeksy ze wzoru soli. Stałe stężenie osadu (fazy stałej) nie wchodzi do wyrażenia.
:::

## 2 | Rozpuszczalność molowa [[extra:LO]] {#rozpuszczalnosc}

| Typ soli | Równowaga | Ksp | s (rozpuszczalność molowa) |
|---|---|---|---|
| AB | AB ⇌ A⁺ + B⁻ | [A⁺][B⁻] | √Ksp |
| AB₂ | AB₂ ⇌ A²⁺ + 2B⁻ | [A²⁺][B⁻]² | ∛(Ksp/4) |
| A₂B | A₂B ⇌ 2A⁺ + B²⁻ | [A⁺]²[B²⁻] | ∛(Ksp/4) |

::: karta understand | Skąd bierze się √ i ∛
Dla AB każdy mol rozpuszczonej soli daje 1 mol A⁺ i 1 mol B⁻, więc [A⁺] = [B⁻] = s i Ksp = s². Dla AB₂ jest jeden kation i dwa aniony: [A²⁺] = s, [B⁻] = 2s, więc Ksp = s·(2s)² = 4s³.
:::

## 3 | Warunek strącania [[basic:E8]] {#warunek}

::: regula
**Iloczyn stężeń jonów (Q) porównujemy z Ksp:**
- Q > Ksp → osad się strąca (roztwór przesycony);
- Q = Ksp → roztwór nasycony, osad jest w równowadze;
- Q < Ksp → osadu nie będzie, sól się rozpuszcza.
:::

## 4 | Przykłady prowadzone [[extra:LO]] {#przyklady}

::: odp | Przykład 1: rozpuszczalność AgCl
Ksp(AgCl) ≈ 1,8·10⁻¹⁰. Dla AB: s = √Ksp = √(1,8·10⁻¹⁰) ≈ 1,3·10⁻⁵ mol/dm³.
:::

::: odp | Przykład 2: strącanie AgCl
Mieszamy roztwory tak, że [Ag⁺] = 0,01 mol/dm³ i [Cl⁻] = 0,01 mol/dm³. Q = 0,01 · 0,01 = 10⁻⁴. Q > Ksp = 1,8·10⁻¹⁰, więc osad AgCl się strąci.
:::

::: odp | Przykład 3: efekt wspólnego jonu
AgCl w roztworze 0,1 mol/dm³ NaCl. [Cl⁻] ≈ 0,1 mol/dm³ (z NaCl). Z Ksp: [Ag⁺] = Ksp / [Cl⁻] = 1,8·10⁻¹⁰ / 0,1 = 1,8·10⁻⁹ mol/dm³. To znacznie mniej niż w czystej wodzie (1,3·10⁻⁵), więc AgCl rozpuszcza się gorzej.
:::

::: karta warning | Pułapka: Q = Ksp nie oznacza strącania
Osad pojawia się dopiero, gdy Q przekroczy Ksp. Przy Q równym Ksp roztwór jest dokładnie nasycony.
:::

## 5 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Ksp = s zawsze | Zależy od stechiometrii: dla AB s = √Ksp, dla AB₂ s = ∛(Ksp/4) | Wzór zależy od liczby jonów
Osad strąca się, gdy Q = Ksp | Strąca się, gdy Q > Ksp | Równość oznacza nasycenie
Pominięte współczynniki w Ksp | Użyj potęg z indeksów: [B]² dla AB₂ | Wykładniki wynikają z równania
Wspólny jon zwiększa rozpuszczalność | Zmniejsza ją | Równowaga przesuwa się w stronę osadu
:::

## 6 | Ćwiczenia z kluczem {#cwiczenia}

::: karta basic | A. Podstawa — zapisz Ksp
Zapisz Ksp dla: BaSO₄, CaF₂, Ag₂CrO₄.

::: odp | Pokaż odpowiedzi
BaSO₄: Ksp = [Ba²⁺][SO₄²⁻]. CaF₂: Ksp = [Ca²⁺][F⁻]². Ag₂CrO₄: Ksp = [Ag⁺]²[CrO₄²⁻].
:::
:::

::: karta understand | B. Trening — rozpuszczalność
Oblicz s dla soli AB o Ksp = 4·10⁻¹⁰.

::: odp | Pokaż odpowiedź
s = √(4·10⁻¹⁰) = 2·10⁻⁵ mol/dm³.
:::
:::

::: karta understand | C. Trening — czy strąci się osad?
Czy strąci się AgCl, gdy [Ag⁺] = 10⁻⁶ mol/dm³ i [Cl⁻] = 10⁻⁶ mol/dm³? Ksp(AgCl) = 1,8·10⁻¹⁰.

::: odp | Pokaż odpowiedź
Q = 10⁻⁶ · 10⁻⁶ = 10⁻¹² < 1,8·10⁻¹⁰. Osad się nie strąci.
:::
:::

::: karta extra | D. LO — dla AB₂
Ksp dla AB₂ wynosi 3,2·10⁻¹¹. Oblicz s.

::: odp | Pokaż odpowiedź
s = ∛(Ksp / 4) = ∛(8·10⁻¹²) = 2·10⁻⁴ mol/dm³.
:::
:::

## 7 | Fiszki {#fiszki}

::: fiszki
Co to Ksp? | iloczyn rozpuszczalności, stała równowagi rozpuszczania | basic:podstawa
Ksp dla AgCl? | [Ag⁺][Cl⁻] | basic:podstawa
Wzór na s dla AB? | s = √Ksp | extra:LO
Kiedy osad się strąca? | gdy Q > Ksp | understand:rozumienie
Co robi efekt wspólnego jonu? | zmniejsza rozpuszczalność | understand:rozumienie
:::

## 8 | Słownik {#slownik}

::: slownik
Iloczyn rozpuszczalności Ksp :: stała równowagi rozpuszczania trudno rozpuszczalnej soli
Rozpuszczalność molowa s :: stężenie nasyconego roztworu soli w mol/dm³
Efekt wspólnego jonu :: zmniejszenie rozpuszczalności soli po dodaniu jonu, który już jest w roztworze
Roztwór nasycony :: roztwór, w którym Q = Ksp
:::

## 9 | Test {#test}

::: test
? Ksp dla soli Mg(OH)₂ (Mg²⁺ i 2OH⁻) zapisujemy jako:
- [Mg²⁺][OH⁻]
+ [Mg²⁺][OH⁻]²
- [Mg²⁺]²[OH⁻]
- [Mg²⁺][OH⁻]/2
! Wykładnik 2 przy OH⁻ wynika z indeksu.

? Osad strąca się, gdy:
- Q < Ksp
+ Q > Ksp
- Q = 0
- Ksp = 0
! Przesycenie prowadzi do strącania.

? Efekt wspólnego jonu:
- zwiększa rozpuszczalność
+ zmniejsza rozpuszczalność
- nie zmienia rozpuszczalności
- zmienia Ksp
! Równowaga przesuwa się w stronę osadu.

? Dla AB rozpuszczalność molowa to:
- Ksp
+ √Ksp
- Ksp/2
- 2 · Ksp
! Z Ksp = s² wynika s = √Ksp.

? Która sól ma najmniejszą rozpuszczalność przy tym samym typie AB?
- sól o Ksp = 10⁻⁴
+ sól o Ksp = 10⁻¹²
- sól o Ksp = 10⁻⁶
- zależy tylko od temperatury
! Mniejsze Ksp oznacza mniejsze s.
:::

## 10 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego kamień w czajniku się odkłada?
Woda twarda zawiera jony wapnia i węglanowe. Po ogrzaniu część CO₂ ucieka, a węglan wapnia przekracza iloczyn rozpuszczalności i osadza się jako kamień. To warunek strącania w praktyce.
:::

::: karta extra | Mikroskopijne rozpuszczanie zębów
Szkliwo zębów zawiera fosforany wapnia o małym Ksp. Kwaśne napoje zwiększają rozpuszczanie, bo jony H⁺ wiążą część anionów fosforanowych i przesuwają równowagę.
:::

## 11 | Wykład — równowaga między stałą solą a roztworem {#wyklad}

::: karta understand | Wykład — od zera: co to znaczy „trudno rozpuszczalny”
Sól trudno rozpuszczalna nie znika całkowicie w wodzie. Część jej powierzchni rozpuszcza się, a jony z roztworu wracają do osadu. Ustala się równowaga, a stężenia jonów są bardzo małe. Ksp to iloczyn tych stężeń w stanie równowagi.

Dlatego Ksp jest tak użyteczne. Nie musisz pamiętać, ile soli się rozpuści w każdym przypadku. Wystarczy jedna wartość i prosty rachunek. Z tabeli z J04 wiesz tylko „tak” lub „nie”; z Ksp znasz liczbę.

**Mini-wykład: po co potęgi.** Wykładniki w Ksp wynikają z liczby jonów w jednostce wzoru. Dla AB₂ w roztworze są dwa aniony na jeden kation, więc iloczyn zawiera [B⁻]². To ta sama logika, którą znasz z równań.

**Mini-wykład: Q a Ksp.** Q to iloczyn stężeń, który mierzysz w danym momencie. Ksp to wartość w stanie równowagi. Porównanie obu pokazuje, czy układ będzie tworzył osad, czy się rozpuszczał.
:::

::: karta core | W skrócie — strącanie ilościowo
Osad powstaje, gdy iloczyn stężeń jonów Q przekroczy Ksp; rozpuszczalność molową liczymy z Ksp, a wspólny jon ją zmniejsza.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] zapisać Ksp dla soli z indeksami;
- [ ] obliczyć s dla AB i AB₂;
- [ ] sprawdzić warunek strącania, porównując Q z Ksp;
- [ ] wyjaśnić efekt wspólnego jonu;
- [ ] odróżnić Ksp od tabeli rozpuszczalności.
:::


---

# LEKCJA K01 — Energia reakcji

- TRYB: ULEPSZ
- KOD: K01 (znacznik odpowiedzi: `<<<PLIK K01`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 14.4, sekcje ## 17, zadania (karta exam) 1, pytania testowe 6, fiszki 7, hasła słownika 6, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 4, mini-wykłady (W skrócie) 2, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: K01
uid: CHE.07.K01.energia_reakcji
tytul: Energia reakcji
opis: Reakcje egzoenergetyczne i endoenergetyczne, układ i otoczenie, wykres energetyczny, energia aktywacji — jak obserwacja ciepła łączy się z modelem energetycznym · LO: jakościowe porównanie ΔE i E_a
kicker: K01 · ENERGETYKA · NOWA WERSJA
lead: Reakcja może oddawać ciepło, może je pobierać, a mimo to wymaga startu. Ta lekcja pokazuje, jak z obserwacji (naczynie się nagrzewa albo ochładza) przejść do wykresu energetycznego, na którym widać zarówno zysk lub stratę energii, jak i barierę do pokonania.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA K01 v1.0** · Energia reakcji · 2026
---

::: minimum | Muszę umieć na E8 — 10 punktów
1. **Reakcja egzoenergetyczna** oddaje energię do otoczenia: naczynie się nagrzewa, produkty leżą **niżej** na wykresie.
2. **Reakcja endoenergetyczna** pobiera energię z otoczenia: naczynie się ochładza, produkty leżą **wyżej**.
3. **Układ** to reagujące substancje; **otoczenie** to wszystko wokół (naczynie, woda, powietrze).
4. Z obserwacji otoczenia wnioskujemy o układzie: jeśli otoczenie się nagrzewa, układ oddał energię.
5. **Energia aktywacji E_a** to bariera, którą trzeba pokonać, by reakcja ruszyła — występuje też w reakcjach egzoenergetycznych.
6. Na wykresie E_a to wysokość szczytu ponad poziom substratów.
7. Ilość wymienionej energii zależy od liczby moli; znak zależy od tego, czy układ oddaje, czy pobiera energię.
8. Temperatura, stężenie i katalizator wpływają na **szybkość**, a nie na znak ΔE.
9. Energia nie powstaje ani nie znika — przechodzi między układem a otoczeniem.
10. Nie mylimy ΔE (różnica energii produktów i substratów) z E_a (bariera).
:::

::: warstwy
- e8 | <b>E8:</b> egzo i endo; układ i otoczenie; wykres energetyczny; E_a jakościowo; przykłady i klinika
- understand | <b>Rozumienie:</b> dlaczego reakcja egzoenergetyczna też wymaga startu; ilość a szybkość; zasada zachowania energii
- extra | <b>LO / ambitne:</b> wykres dla wielu etapów; jakościowy wpływ katalizatora; przygotowanie do ΔH (K02)
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Każda reakcja to przebudowa wiązań. Rozerwanie wiązań wymaga energii, a powstanie nowych wiązań ją uwalnia. Wypadkowa mówi, czy na końcu układ ma mniej energii (egzo), czy więcej (endo). Osobno działa bariera E_a, bo nawet reakcja, która ostatecznie oddaje energię, potrzebuje „kopnięcia” na początku.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od dwóch sytuacji z punktu 0.4 i zapisz swoje hipotezy. Potem przeczytaj ściągę (punkt 1) i wykonaj przykłady z punktu 2. Wykres rysuj samodzielnie, zanim porównasz go z kluczem.
:::

## 0.2 | Cele i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji potrafisz
- nazwać reakcję egzo- lub endoenergetyczną na podstawie obserwacji i wykresu;
- narysować jakościowy wykres energetyczny z bariera E_a;
- wskazać, gdzie układ traci, a gdzie zyskuje energię;
- połączyć obserwację ciepła z modelem energetycznym.
:::

::: karta exam | Pytanie przewodnie
Skąd bierze się ciepło (albo chłód) w reakcji chemicznej — i jak to narysować, zanim policzymy ΔH?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- reakcja a zjawisko (F03, F16); równanie reakcji i substraty/produkty (F17);
- pojęcie układu i otoczenia (F01); temperatura jako miara ruchu cząsteczek (przyroda, fizyka).

## 0.4 | Problem wyjściowy {#problem}

::: karta understand | Dwie reakcje, dwa znaki
**Sytuacja 1:** do zlewki z wodą wrzucasz tabletkę musującą. Naczynie robi się chłodniejsze.
**Sytuacja 2:** spalasz magnez. Jasny błysk, dużo ciepła.

Przed lekcją zapisz swoją hipotezę. Po lekcji wiesz, że w (1) układ **pobiera** energię z otoczenia, a w (2) **oddaje** ją do otoczenia. Dodatkowo: magnez nie zapali się sam w temperaturze pokojowej, bo potrzebuje inicjacji — tu działa bariera E_a.
:::

## 1 | Ściąga: egzo, endo i wykres [[basic:E8]] {#sciaga}

| Pojęcie | Reguła | Jak rozpoznać |
|---|---|---|
| Reakcja egzoenergetyczna | układ oddaje energię do otoczenia | naczynie się nagrzewa; produkty **niżej** na wykresie |
| Reakcja endoenergetyczna | układ pobiera energię z otoczenia | naczynie się ochładza; produkty **wyżej** na wykresie |
| Wykres energetyczny | energia układu w funkcji postępu reakcji | oś Y: energia; oś X: przebieg reakcji |
| Energia aktywacji E_a | minimalna energia, by reakcja ruszyła | wysokość bariery nad poziomem substratów |
| ΔE (jakościowo) | energia produktów minus energia substratów | ΔE < 0 → egzo; ΔE > 0 → endo |

::: regula
**Egzo = energia wychodzi z układu. Endo = energia wchodzi do układu.**
**Góra na wykresie = E_a.** Nawet egzoenergetyczna reakcja potrzebuje tej góry, by ruszyć.
:::

**Przykłady E8:** egzo — spalanie (węgla, metanu, magnezu), zobojętnianie mocnego kwasu mocną zasadą; endo — rozkład węglanu wapnia w piecu, fotosynteza (energia ze światła), rozpuszczanie azotanu(V) amonu NH₄NO₃ (ochłodzenie).

## 2 | Przykłady prowadzone [[basic:E8]] {#przyklady}

::: odp | Przykład 1: spalanie metanu
CH₄ + 2O₂ → CO₂ + 2H₂O. Obserwacja: płomień, ciepło w otoczeniu. Układ oddaje energię → **egzoenergetyczna**. Na wykresie produkty leżą niżej niż substraty. Start wymaga zapłonu (E_a).
:::

::: odp | Przykład 2: rozpuszczanie NH₄NO₃
Obserwacja: po wsypaniu soli do wody naczynie jest zimne. Układ pobiera energię z otoczenia → **endoenergetyczna**. Produkty (rozpuszczona sól) leżą wyżej niż substraty.
:::

::: odp | Przykład 3: zobojętnianie HCl + NaOH
Obserwacja: roztwór się ogrzewa. Układ oddaje energię → **egzoenergetyczna**. Reakcja jonowa H₃O⁺ + OH⁻ → 2H₂O zachodzi praktycznie od razu, bo bariera E_a jest niska.
:::

::: karta understand | W skrócie — trzy pytania przy każdej reakcji
1. Czy otoczenie się nagrzewa, czy ochładza?
2. Czy produkty leżą niżej, czy wyżej niż substraty?
3. Czy reakcja potrzebuje „kopnięcia” (E_a) — i skąd je bierze?
:::

## 3 | Układ i otoczenie — kto komu oddaje energię? {#uklad}

::: karta core | Obserwujemy otoczenie, wnioskujemy o układzie
**Układ** = reagujące substancje (to, co zapisujemy w równaniu). **Otoczenie** = naczynie, woda, powietrze, termometr.

| Typ reakcji | Energia układu | Obserwacja w otoczeniu |
|---|---|---|
| egzoenergetyczna | maleje | temperatura otoczenia **rośnie** |
| endoenergetyczna | rośnie | temperatura otoczenia **maleje** |
:::

## 4 | Wykres energetyczny — krok po kroku {#wykres}

::: karta core | Jak narysować profil reakcji egzoenergetycznej
1. Narysuj oś pionową (energia) i poziomą (postęp reakcji).
2. Zaznacz poziom **substratów** (S) na lewo.
3. Dorysuj szczyt — **stan przejściowy** — o wysokości E_a nad poziomem S.
4. Zaznacz poziom **produktów** (P). Dla egzo P leży **niżej** niż S.
5. Opisz różnicę poziomów jako ΔE < 0 i szczyt jako E_a.

Dla reakcji endoenergetycznej poziom P leży wyżej niż S; szczyt nadal jest nad S.
:::

::: karta warning | Pułapka: wysoka bariera to nie „dużo ciepła”
Duża E_a oznacza, że reakcja wolno się zaczyna, ale nie mówi nic o tym, ile ciepła wydziela. Bilans energii (ΔE) i bariera (E_a) to dwie różne cechy wykresu.
:::

## 5 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Egzo = energia wchodzi do układu | Egzo = energia wychodzi z układu | „Ex” — na zewnątrz
Endo = naczynie się nagrzewa | Endo = naczynie się ochładza | Układ pobiera ciepło z otoczenia
Egzo = reakcja zachodzi od razu | Egzo też potrzebuje E_a | Bariera jest niezależna od znaku ΔE
Więcej substratów = inny znak ΔE | Więcej moli = większa wymieniona ilość energii, ten sam znak | Ilość ≠ znak
Katalizator zmienia ΔE | Katalizator obniża E_a, ΔE pozostaje takie samo | Katalizator nie zmienia bilansu energii
Obserwuję układ bezpośrednio | Obserwujemy otoczenie, wnioskujemy o układzie | Układ to probówka z reagentami, a nie „zlewka”
:::

## 6 | Ćwiczenia {#cwiczenia}

::: karta basic | A. Podstawa — egzo czy endo?
Oceń, czy reakcja jest egzo- czy endoenergetyczna: (a) spalanie wodoru w powietrzu; (b) rozpuszczanie NH₄Cl w wodzie (zlewka mocno się ochładza); (c) rozkład CaCO₃ w piecu wapienniczym.

::: odp | Pokaż odpowiedzi
(a) egzo — płomień, ciepło; (b) endo — otoczenie się ochładza; (c) endo — układ pobiera ciepło, by się rozłożyć.
:::
:::

::: karta understand | B. Trening — wykres
Narysuj wykres energetyczny reakcji endoenergetycznej i zaznacz: S, P, E_a, ΔE.

::: odp | Pokaż opis wykresu
Poziom S niżej; szczyt E_a nad S; poziom P wyżej niż S. ΔE > 0. E_a to wysokość szczytu ponad S (nie ponad P).
:::
:::

::: karta understand | C. Trening — obserwacja i wniosek
Probówka z kwasem solnym i magnezem: probówka się nagrzewa. Zapisz (a) typ reakcji, (b) wniosek o znaku ΔE, (c) co zrobić, by reakcja przebiegała szybciej — bez zmiany znaku.

::: odp | Pokaż odpowiedź
(a) egzoenergetyczna (wydzielanie ciepła); (b) ΔE < 0; (c) np. zwiększyć stężenie kwasu, rozdrobnić magnez lub podgrzać — szybkość rośnie, znak ΔE się nie zmienia.
:::
:::

::: karta extra | D. Ambitne — katalizator na wykresie
Katalizator dodano do reakcji egzoenergetycznej. Jak zmieni się wykres? Czy zmieni się ΔE?

::: odp | Pokaż odpowiedź
Szczyt (E_a) obniża się, więc więcej zderzeń ma wystarczającą energię. Poziomy S i P pozostają bez zmian, więc ΔE się nie zmienia. Katalizator przyspiesza reakcję, ale nie zmienia jej bilansu energetycznego.
:::
:::

## 7 | Poziom LO — co dalej (zarys) {#lo}

- ΔE dla reakcji w warunkach standardowych nazywa się **entalpią reakcji ΔH** (K02): ΔH < 0 dla egzo, ΔH > 0 dla endo; wartości podajemy w kJ/mol.
- E_a wiąże się z teorią zderzeń (K06): tylko zderzenia o energii nie mniejszej niż E_a prowadzą do reakcji.
- Przy wielu etapach wykres ma kilka szczytów; najwyższy szczyt wyznacza etap najwolniejszy.

## 8 | Fiszki {#fiszki}

::: fiszki
Co oznacza egzoenergetyczna? | układ oddaje energię do otoczenia | basic:podstawa
Co oznacza endoenergetyczna? | układ pobiera energię z otoczenia | basic:podstawa
Czym jest E_a? | bariera energetyczna do pokonania przed reakcją | basic:podstawa
Jak zachowuje się otoczenie przy egzo? | nagrzewa się | basic:podstawa
Czy katalizator zmienia ΔE? | nie — obniża E_a | understand:rozumienie
Czy reakcja egzo potrzebuje E_a? | tak | understand:rozumienie
Gdzie na wykresie leży produkt przy endo? | wyżej niż substraty | extra:ambitne
:::

## 9 | Słownik {#slownik}

::: slownik
Układ :: substancje reagujące, zapisane w równaniu
Otoczenie :: wszystko poza układem, np. naczynie, woda, powietrze
Reakcja egzoenergetyczna :: reakcja, w której układ oddaje energię do otoczenia
Reakcja endoenergetyczna :: reakcja, w której układ pobiera energię z otoczenia
Energia aktywacji E_a :: minimalna energia potrzebna do zapoczątkowania reakcji
Stan przejściowy :: najwyżej położony punkt profilu energetycznego, szczyt bariery
:::

## 10 | Test {#test}

::: test
? Reakcja egzoenergetyczna to reakcja, w której:
+ układ oddaje energię do otoczenia
- układ pobiera energię z otoczenia
- nie zmienia się energia
- powstaje katalizator
! Egzo = energia wychodzi.

? Naczynie po reakcji jest zimne. Reakcja jest:
- egzoenergetyczna
+ endoenergetyczna
- katalityczna
- bez wymiany energii
! Otoczenie się ochłodziło, więc układ pobrał energię.

? Na wykresie energetycznym E_a to:
- różnica poziomów produktów i substratów
+ wysokość szczytu nad poziomem substratów
- wysokość szczytu nad poziomem produktów
- stężenie substratów
! Bariera musi zostać pokonana.

? Katalizator w reakcji egzoenergetycznej:
- zmienia znak ΔE
+ obniża E_a
- podnosi poziom produktów
- zużywa się w równaniu
! Zmienia szybkość, nie bilans energii.

? Które zdanie jest prawdziwe?
- Reakcja egzo nie potrzebuje E_a.
+ Reakcja egzo również potrzebuje E_a, by ruszyć.
- E_a występuje tylko w endo.
- Egzo oznacza pochłanianie ciepła.
! Bariera jest niezależna od znaku ΔE.

? Które zjawisko jest przykładem reakcji endoenergetycznej?
+ rozpuszczanie NH₄NO₃ w wodzie (ochłodzenie)
- spalanie metanu
- zobojętnianie HCl przez NaOH
- reakcja magnezu z kwasem
! Otoczenie się ochładza.
:::

## 11 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego okłady chemiczne się nagrzewają?
Okłady rozgrzewające zawierają proszek żelaza, sól i wodę. Utlenianie żelaza jest egzoenergetyczne i wydziela ciepło przez kilka godzin. Sól przyspiesza reakcję, obniżając jej bariery, ale ogólny bilans energii nie zmienia się.
:::

::: karta extra | Zimne okłady — ten sam mechanizm w odwrotną stronę
Okłady chłodzące zawierają wodę i sól amonową (np. NH₄NO₃) w osobnej komorze. Po przebiciu przegrody sól się rozpuszcza, a proces jest endoenergetyczny: układ pobiera ciepło z otoczenia.
:::

::: karta extra | Dlaczego drewno trzeba zapalić?
Drewno w temperaturze pokojowej nie płonie, bo bariera E_a jest zbyt wysoka. Zapałka dostarcza energię potrzebną do jej pokonania. Po zapłonie reakcja egzoenergetyczna sama podtrzymuje wysoką temperaturę.
:::

## 12 | Wykład — energia jako bilans i bariera {#wyklad}

::: karta understand | Wykład — od zera: dwa pytania
Chemik przy każdej reakcji zadaje dwa pytania. Pierwsze: **czy w całym procesie układ zyskuje, czy traci energię?** Odpowiedź daje znak ΔE i wykres (produkty niżej albo wyżej). Drugie: **czy reakcja potrafi w ogóle ruszyć?** Odpowiedź daje E_a, czyli wysokość bariery.

Te dwa pytania są niezależne. Reakcja może być bardzo korzystna energetycznie, a mimo to wolna (np. rdzewienie żelaza przebiega latami). Może też wydzielać dużo ciepła i wymagać zapłonu (spalanie drewna). Dlatego wykres zawsze pokazuje oba elementy.

Zasada zachowania energii mówi, że energia nie znika. Gdy układ oddaje ciepło, otoczenie je przyjmuje: suma energii pozostaje stała. Ta prosta myśl jest fundamentem całego działu K.

**Mini-wykład: skąd bariera?** Aby cząsteczki zareagowały, muszą się zderzyć z odpowiednią energią i ustawieniem. Zanim wiązania się przebudują, układ przechodzi przez stan pośredni o wyższej energii — stan przejściowy. Stąd szczyt na wykresie.

**Mini-wykład: rozróżnianie pojęć.** ΔE mówi „dokąd idzie bilans”. E_a mówi „ile trzeba włożyć na start”. Pomylenie tych pojęć to najczęstszy błąd w tym dziale.
:::

::: karta core | W skrócie — energia w jednym zdaniu
Egzo oddaje energię i grzeje otoczenie, endo pobiera energię i je chłodzi; każda reakcja, nawet egzo, potrzebuje bariery E_a, by ruszyć.
:::

## 13 | Checklista — umiem… {#checklista}

::: checklista
- [ ] rozpoznać egzo i endo po obserwacji otoczenia;
- [ ] narysować wykres energetyczny z zaznaczonym E_a i ΔE;
- [ ] wyjaśnić, że reakcja egzo również potrzebuje bariery;
- [ ] odróżnić ilość energii od jej znaku;
- [ ] wyjaśnić, że katalizator zmienia E_a, a nie ΔE.
:::


---

# LEKCJA K02 — Entalpia

- TRYB: ULEPSZ
- KOD: K02 (znacznik odpowiedzi: `<<<PLIK K02`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 11.0, sekcje ## 16, zadania (karta exam) 1, pytania testowe 5, fiszki 6, hasła słownika 5, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 3, mini-wykłady (W skrócie) 1, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: K02
uid: CHE.07.K02.entalpia
tytul: Entalpia
opis: Zmiana entalpii ΔH jako liczba w kJ/mol; ΔH = Q przy stałym ciśnieniu; prawo Hessa; obliczanie ΔH z entalpii tworzenia i z energii wiązań; entalpia spalania · LO
kicker: K02 · ENERGETYKA · NOWA WERSJA
lead: W K01 energię opisywaliśmy jakościowo: produkty niżej albo wyżej. Teraz nadajemy tej różnicy liczbę w kJ/mol i uczymy się ją policzyć nawet wtedy, gdy nie da się zmierzyć reakcji bezpośrednio.
plakietki: [[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA K02 v1.0** · Entalpia · 2026
---

::: minimum | Muszę umieć — 10 punktów (LO)
1. **Entalpia H** to funkcja stanu: zależy od stanu układu, nie od drogi.
2. **ΔH** reakcji przy stałym ciśnieniu jest równa ciepłu wymienionemu z otoczeniem: ΔH = Q_p.
3. ΔH < 0 — reakcja egzotermiczna (układ oddaje ciepło); ΔH > 0 — endotermiczna.
4. Jednostka ΔH: zwykle kJ/mol, odniesiona do reakcji zapisanej w równaniu.
5. Standardowa entalpia tworzenia ΔH_f° pierwiastka w stanie standardowym wynosi **0**.
6. ΔH° = Σ ΔH_f°(produkty) − Σ ΔH_f°(substraty), z uwzględnieniem współczynników.
7. **Prawo Hessa:** ΔH reakcji netto jest sumą ΔH jej etapów, niezależnie od drogi.
8. Odwrócenie równania zmienia znak ΔH; pomnożenie równania przez liczbę mnoży ΔH przez tę liczbę.
9. Przybliżenie z energii wiązań: ΔH ≈ Σ E(zerwanych) − Σ E(utworzonych).
10. ΔH to nie E_a (K01) i nie mówi nic o szybkości reakcji.
:::

::: warstwy
- understand | <b>Rozumienie:</b> ΔH jako różnica poziomów z K01; dlaczego „przy stałym ciśnieniu”; prawo Hessa jako zasada zachowania energii
- extra | <b>LO / ambitne:</b> ΔH z energii wiązań; cykle Hessa z wieloma krokami; spalanie
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
ΔH to liczba opisująca to samo, co różnica poziomów na wykresie z K01. Najważniejsze, co z niej wynika: **ΔH zależy tylko od początku i końca reakcji, nie od drogi**. Dzięki temu możemy policzyć ciepło reakcji, której nie da się zmierzyć, składając wygodne etapy o znanych ΔH.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Przeczytaj most z K01 (punkt 1), potem definicję ΔH (punkt 2). Przykłady licz samodzielnie, zanim zajrzysz do wyniku. Prawo Hessa ćwicz na cyklu, a nie na samej regule.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- zdefiniować ΔH i interpretować jej znak;
- obliczyć ΔH z tablicowych ΔH_f°;
- zastosować prawo Hessa do prostego cyklu;
- oszacować ΔH z energii wiązań;
- połączyć liczbę z wykresem z K01.
:::

::: karta exam | Pytanie przewodnie
Jak policzyć ciepło reakcji, której nie da się przeprowadzić czysto w kalorymetrze?
:::

## 1 | Most z K01 {#most}

| K01 (jakość) | K02 (liczba) |
|---|---|
| produkty niżej niż substraty → egzo | ΔH < 0 |
| produkty wyżej niż substraty → endo | ΔH > 0 |
| bariera E_a | E_a to nadal nie ΔH |

## 2 | Entalpia i ΔH [[understand:ROZUMIENIE]] {#entalpia}

**Entalpia H** to funkcja stanu. **Zmiana entalpii ΔH** w reakcji przy stałym ciśnieniu jest równa ciepłu wymienionemu z otoczeniem: **ΔH = Q_p**.

::: regula
**ΔH < 0 → układ oddaje ciepło (egzo). ΔH > 0 → układ pobiera ciepło (endo).**
:::

::: karta understand | Dlaczego „przy stałym ciśnieniu”?
Większość reakcji w laboratorium przebiega w otwartym naczyniu lub w roztworze pod ciśnieniem atmosferycznym. Ciepło, które wymienia układ z otoczeniem w takich warunkach, to właśnie ΔH. Dlatego w tablicach podaje się wartości dla warunków standardowych (1 bar).
:::

## 3 | Skąd bierze się ΔH — model wiązań {#wiazania}

Każda reakcja składa się z dwóch procesów:
1. **Zrywanie wiązań** w substratach — wymaga energii (wkład dodatni).
2. **Tworzenie wiązań** w produktach — uwalnia energię (wkład ujemny).

Przybliżenie: **ΔH ≈ Σ E(zerwanych) − Σ E(utworzonych)**. Energie wiązań są średnimi wartościami, więc to tylko oszacowanie.

::: odp | Przykład: H₂ + F₂ → 2HF (szacunek)
Zrywamy H–H i F–F (wkład dodatni). Tworzymy dwa wiązania H–F (wkład ujemny). Jeśli energia uwolniona jest większa niż włożona, ΔH < 0 — reakcja egzotermiczna.
:::

## 4 | Standardowe entalpie tworzenia ΔH_f° [[understand:ROZUMIENIE]] {#hf}

**ΔH_f°** to zmiana entalpii przy tworzeniu **1 mola** związku z pierwiastków w ich stanach standardowych (1 bar, zwykle 25 °C). Dla pierwiastka w stanie standardowym **ΔH_f° = 0** (np. C(grafit), H₂(g), O₂(g), Fe(s)).

::: regula
**ΔH° = Σ ΔH_f°(produkty) − Σ ΔH_f°(substraty)** — każdą wartość mnożymy przez współczynnik ze równania.
:::

::: odp | Przykład 1: spalanie metanu
CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(c)

Wartości orientacyjne (sprawdź w tablicach): ΔH_f°(CH₄) = −74,8 kJ/mol; ΔH_f°(CO₂) = −393,5 kJ/mol; ΔH_f°(H₂O, c) = −285,8 kJ/mol; ΔH_f°(O₂) = 0.

ΔH° = [−393,5 + 2·(−285,8)] − [−74,8 + 2·0] = −965,1 + 74,8 = **−890,3 kJ/mol**.

Wynik ujemny — reakcja silnie egzotermiczna, zgodnie z wykresem z K01: produkty daleko niżej.
:::

## 5 | Prawo Hessa [[extra:AMBITNE (LO)]] {#hess}

::: regula
**ΔH reakcji zależy tylko od stanu początkowego i końcowego, nie od drogi.** Jeśli reakcję rozłożymy na etapy, suma ich ΔH daje ΔH reakcji netto.
:::

::: odp | Przykład 2: cykl dla C(grafit) + ½O₂ → CO
Dane:
(1) C + O₂ → CO₂, ΔH₁ = −393,5 kJ
(2) CO + ½O₂ → CO₂, ΔH₂ = −283,0 kJ

Reakcja szukana = (1) − (2): C + ½O₂ → CO.
ΔH = ΔH₁ − ΔH₂ = −393,5 − (−283,0) = **−110,5 kJ**.

Odwrócenie drugiej reakcji zmienia znak jej ΔH; to dlatego odejmujemy ΔH₂.
:::

::: karta warning | Pułapka: odwrócenie i mnożenie
Odwrócenie równania zmienia znak ΔH. Pomnożenie równania przez 2 mnoży ΔH przez 2. Zapomnienie o tym to najczęstszy błąd w cyklach Hessa.
:::

## 6 | Entalpia spalania ΔH_c° {#spalanie}

ΔH_c° to ΔH spalenia **1 mola** substancji w nadmiarze O₂ do produktów standardowych (CO₂, H₂O ciekła). Wartości są w tablicach, a z nich można wrócić do ΔH_f° przez cykl Hessa.

## 7 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
ΔH = E_a | ΔH to różnica poziomów; E_a to bariera | Dwie różne wielkości (K01)
Pominięte współczynniki w Σ ΔH_f° | Mnożymy przez liczby ze równania | Bilans zależy od ilości moli
ΔH_f° pierwiastka ≠ 0 | W stanie standardowym ΔH_f° = 0 | Definicja
Odwrócenie reakcji bez zmiany znaku | Odwrócenie → zmiana znaku ΔH | Prawo Hessa
Mieszanie kJ z kJ/mol | ΔH podajemy na mol reakcji zapisanej w równaniu | Jednostka odnosi się do równania
:::

## 8 | Ćwiczenia {#cwiczenia}

::: karta understand | A. Interpretacja znaku
Reakcja ma ΔH = +25 kJ/mol. Czy jest egzo- czy endotermiczna? Co się dzieje z otoczeniem?

::: odp | Pokaż odpowiedź
Endotermiczna (ΔH > 0). Układ pobiera ciepło, więc otoczenie się ochładza.
:::
:::

::: karta understand | B. Trening — ΔH z tablic
Oblicz ΔH dla: 2H₂(g) + O₂(g) → 2H₂O(c), gdy ΔH_f°(H₂O, c) = −285,8 kJ/mol, a ΔH_f°(H₂, O₂) = 0.

::: odp | Pokaż odpowiedź
ΔH° = 2·(−285,8) − [2·0 + 0] = **−571,6 kJ** na reakcję zapisaną w równaniu (czyli −285,8 kJ/mol H₂O).
:::
:::

::: karta extra | C. LO — cykl Hessa
Dane: (1) C(grafit) + O₂ → CO₂, ΔH = −393,5 kJ; (2) CO₂ → CO + ½O₂, ΔH = +283,0 kJ. Oblicz ΔH dla C + ½O₂ → CO.

::: odp | Pokaż odpowiedź
Suma reakcji (1) i (2): C + O₂ + CO₂ → CO₂ + CO + ½O₂, po skróceniu C + ½O₂ → CO. ΔH = −393,5 + 283,0 = **−110,5 kJ**.
:::
:::

## 9 | Fiszki {#fiszki}

::: fiszki
Co to ΔH? | zmiana entalpii reakcji, przy stałym ciśnieniu równa Q_p | basic:podstawa
Co znaczy ΔH < 0? | reakcja egzotermiczna | basic:podstawa
ΔH_f° pierwiastka w stanie standardowym? | 0 | basic:podstawa
Co mówi prawo Hessa? | ΔH zależy tylko od stanu początkowego i końcowego | understand:rozumienie
Co się dzieje z ΔH przy odwróceniu równania? | zmienia znak | understand:rozumienie
Czy ΔH to E_a? | nie | extra:ambitne
:::

## 10 | Słownik {#slownik}

::: slownik
Entalpia H :: funkcja stanu układu, zależna od stanu, nie od drogi
ΔH (zmiana entalpii) :: różnica entalpii produktów i substratów; równa Q_p przy stałym ciśnieniu
Entalpia tworzenia ΔH_f° :: ΔH powstawania 1 mola związku z pierwiastków w stanie standardowym
Prawo Hessa :: ΔH reakcji netto jest sumą ΔH etapów
Entalpia spalania ΔH_c° :: ΔH spalenia 1 mola substancji w nadmiarze tlenu
:::

## 11 | Test {#test}

::: test
? Reakcja o ΔH = −120 kJ/mol jest:
+ egzotermiczna
- endotermiczna
- izotermiczna
- katalityczna
! ΔH < 0 — układ oddaje ciepło.

? Entalpia tworzenia O₂(g) w stanie standardowym wynosi:
- −1
+ 0
- 1
- 32
! Pierwiastek w stanie standardowym ma ΔH_f° = 0.

? Prawo Hessa mówi, że ΔH zależy od:
- drogi reakcji
+ stanu początkowego i końcowego
- katalizatora
- szybkości reakcji
! ΔH jest funkcją stanu.

? Odwrócenie równania reakcji daje:
- ten sam ΔH
+ ΔH o przeciwnym znaku
- dwukrotny ΔH
- zerowy ΔH
! Odwrócenie = zmiana znaku.

? Które zdanie jest prawdziwe?
- ΔH jest równe E_a.
+ ΔH mówi o różnicy poziomów produktów i substratów.
- ΔH zależy od szybkości reakcji.
- ΔH zawsze jest dodatnie.
! ΔH to bilans energii, nie bariera.
:::

## 12 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego tablice podają ΔH_f°, a nie ΔH wszystkich reakcji?
Istnieją tysiące reakcji, a ΔH_f° kilkuset związków wystarcza do obliczenia ΔH każdej z nich przez prawo Hessa. Tablica jest więc oszczędną bazą danych.
:::

::: karta extra | Ile energii ma jedna kanapka?
Spalanie wartości energetycznej pożywienia (kaloryczność) to w istocie ΔH_c° przeliczona na jednostkę masy. Dlatego etykiety podają kJ lub kcal — to pomiar entalpii spalania.
:::

## 13 | Wykład — entalpia jako bilans, nie jako magazyn {#wyklad}

::: karta understand | Wykład — od zera: co właściwie mierzymy
Uczeń często wyobraża sobie, że substancja „ma w sobie” entalpię jak wodę w zbiorniku. To wygodne, ale nieprecyzyjne. Entalpia to funkcja stanu: liczymy różnicę między stanem początkowym a końcowym. Dlatego nie pytamy „ile entalpii ma CH₄”, tylko „jak zmienia się entalpia, gdy CH₄ spala się do CO₂ i H₂O”.

Prawo Hessa wynika z tego wprost. Jeśli dwie drogi prowadzą z tego samego stanu początkowego do tego samego końcowego, różnica entalpii musi być taka sama. Gdyby było inaczej, można by zrobić perpetuum mobile energetyczne, co przeczy zasadzie zachowania energii.

**Mini-wykład: dlaczego tablice podają wartości dla pierwiastków jako zero.** Wybieramy umowny punkt odniesienia. Entalpia tworzenia mówi, ile energii trzeba dodać lub uzyskać, gdy związek powstaje z pierwiastków. Pierwiastki w stanie standardowym są punktem zerowym, więc ich ΔH_f° = 0.

**Mini-wykład: entalpia a ciepło w kalorymetrze.** Przy stałym ciśnieniu kalorymetr mierzy ciepło przemiany, czyli ΔH. To pomost do K03.
:::

::: karta core | W skrócie — ΔH w jednym zdaniu
ΔH to liczba w kJ/mol opisująca bilans energii reakcji przy stałym ciśnieniu; liczymy ją z tablic (ΔH_f°) albo składając etapy (Hess).
:::

## 14 | Checklista — umiem… {#checklista}

::: checklista
- [ ] zdefiniować ΔH i odczytać jego znak;
- [ ] policzyć ΔH z ΔH_f° z uwzględnieniem współczynników;
- [ ] zastosować prawo Hessa do prostego cyklu;
- [ ] przewidzieć zmianę znaku przy odwróceniu równania;
- [ ] odróżnić ΔH od E_a i od szybkości reakcji.
:::


---

# LEKCJA K03 — Kalorymetria i przemiany fazowe

- TRYB: ULEPSZ
- KOD: K03 (znacznik odpowiedzi: `<<<PLIK K03`)
- NASTĘPNE ZADANIE: 1
- PRZED: KB 11.8, sekcje ## 16, zadania (karta exam) 1, pytania testowe 5, fiszki 6, hasła słownika 5, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 3, mini-wykłady (W skrócie) 1, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: K03
uid: CHE.07.K03.kalorymetria_i_przemiany_fazowe
tytul: Kalorymetria i przemiany fazowe
opis: Ciepło właściwe, wzór Q = m·c·ΔT, ciepło topnienia i parowania, wykres ogrzewania, bilans cieplny w kalorymetrze · LO
kicker: K03 · ENERGETYKA · NOWA LEKCJA
lead: Lód wrzucony do ciepłej wody topi się, a temperatura wody spada, choć nie widać żadnego ogrzewania. Ta lekcja pokazuje, jak zmierzyć ciepło, które wymieniają substancje, i jak ułożyć bilans cieplny, gdy po drodze zmienia się stan skupienia.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA K03 v1.0** · Kalorymetria i przemiany fazowe · 2026
---

::: minimum | Muszę umieć — 10 punktów (LO)
1. **Ciepło właściwe c** to ciepło potrzebne do ogrzania 1 g substancji o 1 °C (1 K).
2. Ogrzewanie bez przemiany fazowej: **Q = m · c · ΔT**.
3. **Ciepło topnienia** q_t to ciepło potrzebne do stopienia 1 g ciała stałego w temperaturze topnienia (bez zmiany T).
4. **Ciepło parowania** q_p to ciepło potrzebne do odparowania 1 g cieczy w temperaturze wrzenia.
5. Przemiana fazowa: **Q = m · q** (topnienie, krzepnięcie, parowanie, skraplanie).
6. Na wykresie ogrzewania odcinki **pochyłe** to zmiana T (m·c·ΔT), a **poziome** to przemiana fazowa (T stała).
7. **Kalorymetr** to naczynie izolowane cieplnie, w którym mierzymy ciepło przemiany.
8. **Bilans cieplny**: ciepło oddane przez jedno ciało jest równe ciału pobranemu przez drugie (suma Q = 0 w układzie izolowanym).
9. Przy krzepnięciu i skraplaniu ciepło jest wydzielane (przeciwny znak w bilansie).
10. Najczęstsze błędy: mieszanie jednostek (g i kg, J i kJ), pominięcie odcinka fazowego, mylenie c wody z c lodu.
:::

::: warstwy
- understand | <b>Rozumienie:</b> dlaczego temperatura stoi podczas topnienia; po co bilans z przemianą fazową
- extra | <b>LO:</b> pełny bilans z wieloma etapami; związek Q z ΔH (K02)
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Ciepło dostarczone substancji zużywa się na dwie rzeczy: na zmianę temperatury (wtedy T rośnie i wykres jest pochyły) albo na zmianę stanu skupienia (wtedy T stoi, a wykres jest poziomy). Najpierw ustal, czy w procesie zachodzi przemiana fazowa. Dopiero potem licz bilans.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od diagnozy (0.4). Potem przeczytaj ściągę (punkt 1) i przykłady z punktu 3. Bilans licz sam, zanim porównasz z kluczem.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- obliczyć ciepło ogrzewania Q = m·c·ΔT;
- obliczyć ciepło przemiany fazowej Q = m·q;
- odczytać z wykresu ogrzewania odcinki z przemianą i bez;
- ułożyć bilans cieplny w kalorymetrze.
:::

::: karta exam | Pytanie przewodnie
Jak zmierzyć i obliczyć ciepło, które „znika” lub „pojawia się”, gdy substancja się ogrzewa, topi albo paruje?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- ciepło i znak efektu energetycznego (K01, K02);
- temperatura i różnica temperatur ΔT; stany skupienia i przemiany fazowe (F03, K01);
- jednostki masy i energii (g, kg, J, kJ).

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Zapisz wzór na ciepło ogrzewania bez przemiany fazowej.
2. Co to ciepło właściwe?
3. Co dzieje się z temperaturą podczas topnienia czystej substancji pod stałym ciśnieniem?
4. Zapisz wzór na ciepło topnienia.
5. Ile ciepła potrzeba, by ogrzać 100 g wody o 10 °C, gdy c = 4,2 J/(g·°C)?

::: odp | Pokaż klucz i interpretację
1. Q = m·c·ΔT.
2. Ciepło potrzebne do ogrzania 1 g substancji o 1 °C.
3. Temperatura stoi w miejscu.
4. Q = m·q_t.
5. Q = 100 · 4,2 · 10 = 4200 J = 4,2 kJ.

**Interpretacja:** 5/5 — przejdź do wykresu i bilansu; 3–4/5 — przeczytaj punkty 1–2; 0–2/5 — zacznij od rdzenia.
:::
:::

## 1 | Ściąga: wzory i wartości orientacyjne [[basic:E8]] {#sciaga}

| Wielkość | Wzór | Jednostka | Uwagi |
|---|---|---|---|
| ciepło ogrzewania / oziębiania | Q = m · c · ΔT | J lub kJ | ΔT = T_końcowa − T_początkowa |
| ciepło topnienia / krzepnięcia | Q = m · q_t | J lub kJ | T = const = T topnienia |
| ciepło parowania / skraplania | Q = m · q_p | J lub kJ | T = const = T wrzenia |
| bilans w kalorymetrze | Σ Q = 0 | — | ciepło oddane + pobrane = 0 |

Wartości orientacyjne dla wody (sprawdź w tablicach): c wody ciekłej ≈ 4,2 J/(g·°C); c lodu ≈ 2,1 J/(g·°C); q_t lodu ≈ 334 J/g; q_p wody ≈ 2260 J/g (przy 100 °C).

::: regula
**Pochyłe = temperatura się zmienia (m·c·ΔT). Poziome = faza się zmienia, T stoi (m·q).**
:::

## 2 | Wykres ogrzewania [[understand:ROZUMIENIE]] {#wykres}

Dla lodu o temperaturze −10 °C ogrzewanego do pary o 120 °C wykres ma pięć odcinków w tej kolejności:

1. ogrzewanie lodu od −10 °C do 0 °C (pochyły);
2. topnienie lodu w 0 °C (poziomy);
3. ogrzewanie wody od 0 °C do 100 °C (pochyły);
4. parowanie wody w 100 °C (poziomy);
5. ogrzewanie pary od 100 °C do 120 °C (pochyły).

Na poziomych odcinkach dostarczasz ciepło, ale temperatura nie rośnie: energia zmienia stan skupienia.

## 3 | Przykłady prowadzone [[extra:LO]] {#przyklady}

::: odp | Przykład 1: ogrzewanie wody
Ile ciepła potrzeba, by ogrzać 200 g wody z 20 °C do 50 °C? (c = 4,2 J/(g·°C))
Q = 200 · 4,2 · 30 = 25 200 J = 25,2 kJ.
:::

::: odp | Przykład 2: topnienie lodu
Ile ciepła potrzeba, by stopić 50 g lodu w 0 °C? (q_t = 334 J/g)
Q = 50 · 334 = 16 700 J = 16,7 kJ. Temperatura nie zmienia się.
:::

::: odp | Przykład 3: bilans cieplny
Do kalorymetru wlano 200 g wody o temperaturze 60 °C i wrzucono 50 g lodu o temperaturze 0 °C. Zakładamy brak strat ciepła i c = 4,2 J/(g·°C). Oblicz temperaturę końcową T.

Woda oddaje ciepło: Q_oddane = 200 · 4,2 · (60 − T).
Lód pobiera ciepło na stopienie: 50 · 334 = 16 700 J.
Powstała woda ogrzewa się od 0 °C do T: Q_pobrane = 50 · 4,2 · T.

Bilans: 200 · 4,2 · (60 − T) = 16 700 + 50 · 4,2 · T
50 400 − 840T = 16 700 + 210T
33 700 = 1050T, czyli T ≈ 32,1 °C.
:::

::: karta warning | Pułapka: pominięty odcinek fazowy
Jeśli w bilansie zapomnisz o topnieniu lodu, wynik będzie zawyżony o wielokrotność około 16 kJ. Zawsze sprawdź, czy w procesie zmienia się stan skupienia.
:::

## 4 | Kalorymetr — po co izolacja {#kalorymetr}

::: karta core | Dlaczego naczynie jest izolowane
Kalorymetr ogranicza wymianę ciepła z otoczeniem. Dzięki temu ciepło oddane przez jedną część układu trafia do drugiej części, a bilans można zamknąć. W szkolnym kalorymetrze zakładamy brak strat, co jest przybliżeniem.
:::

## 5 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Zmieszanie g z kg bez przeliczenia | Zamieniamy jednostki przed rachunkiem | Wynik zależy od jednostek
Pominięcie topnienia w bilansie z lodem | Dodajemy m·q_t | Przemiana wymaga ciepła, mimo stałej T
Używanie c wody dla lodu | c lodu ≈ 2,1 J/(g·°C) | Każda faza ma inne c
Ciepło krzepnięcia dodatnie w bilansie oddanym | Krzepnięcie oddaje ciepło | Znak wynika z kierunku przemiany
:::

## 6 | Ćwiczenia {#cwiczenia}

::: karta basic | A. Podstawa — ogrzewanie
Ile ciepła potrzeba, by ogrzać 500 g wody o 8 °C? (c = 4,2 J/(g·°C))

::: odp | Pokaż odpowiedź
Q = 500 · 4,2 · 8 = 16 800 J = 16,8 kJ.
:::
:::

::: karta understand | B. Trening — topnienie
Ile ciepła trzeba, by stopić 20 g lodu? (q_t = 334 J/g)

::: odp | Pokaż odpowiedź
Q = 20 · 334 = 6680 J = 6,68 kJ.
:::
:::

::: karta understand | C. Trening — wykres
Na wykresie ogrzewania wody od 0 °C do 100 °C i następnie parowania odcinek poziomy pojawia się w 100 °C. Dlaczego?

::: odp | Pokaż odpowiedź
W 100 °C woda wrze i zmienia stan skupienia. Dostarczone ciepło zużywa się na parowanie (m·q_p), więc temperatura nie rośnie.
:::
:::

::: karta extra | D. LO — bilans z lodem
Do 100 g wody o temperaturze 30 °C wrzucono 10 g lodu o temperaturze 0 °C. Oblicz temperaturę końcową, zakładając brak strat i c = 4,2 J/(g·°C). Podpowiedź: sprawdź, czy lód się stopi w całości.

::: odp | Pokaż odpowiedź
Woda oddaje ciepło: 100 · 4,2 · (30 − T). Lód pobiera ciepło na stopienie: 10 · 334 = 3340 J. Powstała woda ogrzewa się od 0 do T: 10 · 4,2 · T.
100 · 4,2 · (30 − T) = 3340 + 42T → 12 600 − 420T = 3340 + 42T → 9260 = 462T → T ≈ 20,0 °C.
Lód stopił się w całości (woda oddaje 12 600 − 420·20 = 4200 J; wystarczy na 3340 J topnienia i ogrzanie 10 g o 20 °C — 840 J).
:::
:::

## 7 | Fiszki {#fiszki}

::: fiszki
Wzór na ciepło ogrzewania? | Q = m·c·ΔT | basic:podstawa
Wzór na ciepło topnienia? | Q = m·q_t | basic:podstawa
Co oznacza odcinek poziomy na wykresie? | przemianę fazową, T stała | basic:podstawa
Co to bilans cieplny? | oddane ciepło = pobrane ciepło (Σ Q = 0) | understand:rozumienie
Czy podczas topnienia zmienia się T? | nie | understand:rozumienie
Jakie c ma woda ciekła? | ok. 4,2 J/(g·°C) | extra:LO
:::

## 8 | Słownik {#slownik}

::: slownik
Ciepło właściwe c :: ciepło potrzebne do ogrzania 1 g substancji o 1 °C
Ciepło topnienia q_t :: ciepło potrzebne do stopienia 1 g ciała stałego w temperaturze topnienia
Ciepło parowania q_p :: ciepło potrzebne do odparowania 1 g cieczy w temperaturze wrzenia
Kalorymetr :: naczynie izolowane cieplnie, w którym mierzy się ciepło przemiany
Bilans cieplny :: równanie, w którym suma ciepła wymienionego w układzie izolowanym wynosi zero
:::

## 9 | Test {#test}

::: test
? Ciepło potrzebne do ogrzania 2 kg wody o 5 °C (c = 4,2 J/(g·°C)) wynosi:
- 4,2 kJ
+ 42 kJ
- 420 kJ
- 0,42 kJ
! Q = 2000 g · 4,2 · 5 = 42 000 J = 42 kJ.

? Podczas topnienia lodu w 0 °C:
- temperatura rośnie
+ temperatura się nie zmienia
- temperatura maleje
- nie wymienia się ciepła
! Dostarczone ciepło zmienia stan skupienia.

? Który wzór opisuje ciepło przemiany fazowej?
- Q = m·c·ΔT
+ Q = m·q
- Q = m·g·h
- Q = n·R·T
! Przemiana wymaga q, a nie c.

? W bilansie cieplnym układu izolowanego suma Q wynosi:
- 1
+ 0
- 100
- zależy od temperatury
! Ciepło oddane równa się ciepłu pobranemu.

? Odcinek pochyły na wykresie ogrzewania oznacza:
+ zmianę temperatury
- przemianę fazową
- brak dostarczanego ciepła
- zmianę masy
! Pochyły = m·c·ΔT.
:::

## 10 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego ciepło parowania jest tak duże?
Woda ma bardzo dużą ciepło parowania (ok. 2260 J/g). Dzięki temu pot na skórze skutecznie chłodzi ciało: odparowując, pobiera ogromne ilości ciepła z organizmu.
:::

::: karta extra | Ciepło topnienia w zimnych napojach
Lód w napoju nie tylko schładza go przez wyższą temperaturę, ale przede wszystkim przez ciepło topnienia. Każdy gram stopionego lodu pobiera ok. 334 J, więc nawet kilka kostek znacznie obniża temperaturę.
:::

## 11 | Wykład — dlaczego temperatura „stoi” {#wyklad}

::: karta understand | Wykład — od zera: energia bez zmiany temperatury
Gdy ogrzewasz garnek z wodą, temperatura rośnie, bo cząsteczki poruszają się coraz szybciej. Gdy woda zaczyna wrzeć, dostarczone ciepło nie zwiększa już średniej energii kinetycznej, tylko rozrywa oddziaływania między cząsteczkami. Dlatego temperatura się nie zmienia, dopóki cała woda nie odparuje.

Z tego wynika bilans cieplny. Chcesz wiedzieć, jaka będzie temperatura po zmieszaniu. Zapisujesz, ile ciepła oddaje ciepła część i ile pobiera zimna część. Jeśli w grę wchodzi lód, dodajesz ciepło topnienia, bo ta energia nie zmienia T, ale jest potrzebna.

**Mini-wykład: dlaczego lód chłodzi bardziej niż sama zimna woda.** Lód ma niską temperaturę, ale jego głównym „zadaniem” w napoju jest ciepło topnienia. Dzięki temu pobiera więcej ciepła, niż wynikałoby z samego ogrzania.

**Mini-wykład: kalorymetr jako uczciwy świadek.** Izolacja i przybliżenie braku strat pozwalają zamknąć bilans. W prawdziwym laboratorium zawsze są małe straty, dlatego wynik jest przybliżony.
:::

::: karta core | W skrócie — kalorymetria w jednym zdaniu
Ciepło idzie albo na zmianę temperatury (m·c·ΔT), albo na zmianę stanu skupienia (m·q), a w bilansie ciepło oddane równa się pobranemu.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] obliczyć Q = m·c·ΔT z zachowaniem jednostek;
- [ ] obliczyć Q = m·q dla topnienia lub parowania;
- [ ] odczytać z wykresu ogrzewania odcinki pochyłe i poziome;
- [ ] ułożyć bilans cieplny z przemianą fazową;
- [ ] wyjaśnić, dlaczego temperatura w przemianie fazowej nie rośnie.
:::


---

# LEKCJA K04 — Szybkość reakcji

- TRYB: ULEPSZ
- KOD: K04 (znacznik odpowiedzi: `<<<PLIK K04`)
- NASTĘPNE ZADANIE: 8
- PRZED: KB 31.5, sekcje ## 18, zadania (karta exam) 7, pytania testowe 5, fiszki 16, hasła słownika 14, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 4, mini-wykłady (W skrócie) 5, doświadczenia (dosw) 0, błędy w klinice 0

---
kod: K04
uid: CHE.07.K04.szybkosc_reakcji
tytul: Szybkość reakcji
opis: Szybkość reakcji od zera — szybkość średnia i chwilowa, wykres stężenie–czas, jednostki, stechiometria szybkości, metody pomiaru, przykłady krok po kroku · wstęp do równania kinetycznego (LO)
kicker: K04 · KINETYKA · NOWA WERSJA
lead: Dlaczego jedna reakcja kończy się w ułamku sekundy, a inna trwa lata? Odpowiedź leży w szybkości — tym, jak szybko zmienia się skład układu w czasie. Ta lekcja uczy ją mierzyć, odczytywać z wykresu i przeliczać.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA K04 v1.0** · Szybkość reakcji · 2026
---


Ta lekcja uczy, jak mierzyć i opisywać szybkość reakcji. Po jej przejściu umiesz policzyć szybkość średnią z tabeli, odczytać szybkość chwilową z wykresu, przeliczyć jednostki i powiązać szybkości różnych substancji ze współczynnikami reakcji.

## Przypomnienie z poprzedniej lekcji

Zanim przeczytasz dalej, odpowiedz na dwa pytania z R05 (bez zaglądania):

1. Ile moli znajduje się w 0,5 dm³ roztworu o stężeniu 0,2 mol/dm³?
2. Co oznacza zapis „mol/dm³”?

::: karta understand | Klucz do przypomnienia
1. n = c · V = 0,2 · 0,5 = 0,1 mol. Jeśli wynik wyszedł inny, wróć do R05 przed dalszą lekcją.
2. Liczba moli substancji w jednym decymetrze sześciennym roztworu. Ta jednostka wróci w każdym wzorze tej lekcji.
:::

::: minimum | Muszę umieć — 6 punktów
1. Szybkość reakcji to zmiana stężenia w jednostce czasu. Jednostka: mol/(dm³·s).
2. Szybkość średnią liczymy jako moduł(Δc)/Δt dla przedziału czasu.
3. Szybkość chwilowa to nachylenie stycznej do wykresu c(t).
4. Dla substratu Δc jest ujemne, dlatego bierzemy moduł albo stawiamy minus.
5. Współczynniki reakcji łączą szybkości różnych składników.
6. Gaz mierzymy w warunkach normalnych (1 mol = 22,4 dm³) albo przeliczamy wynik.
:::

## 1 | Wykład 1 — co to znaczy „szybko" {#wyklad}

::: karta understand | Wykład od zera
Pytanie na start: dlaczego jedna reakcja kończy się w ułamku sekundy, a inna trwa lata? Wrzuć kawałek magnezu do kwasu solnego: od razu pojawiają się pęcherzyki wodoru i metal szybko znika. Połóż zwykłe żelazo na deszczu: rdza narasta miesiącami. Obie reakcje prowadzą do produktów, ale różnią się **szybkością**, czyli tym, jak szybko zmienia się skład układu w czasie.

Szybkość reakcji to zmiana ilości substancji (zwykle stężenia) w jednostce czasu. Mierzymy ją przez to, jak zmienia się stężenie substratu, który ubywa, albo produktu, który przybywa. Stężenie to liczba moli substancji w jednym decymetrze sześciennym roztworu (mol/dm³). Jeśli stężenie substratu w ciągu 60 sekund spada z 0,40 do 0,10 mol/dm³, to średnio w każdej sekundzie ubywało 0,005 mol/dm³ tej substancji.

Od razu widać dwie rzeczy, które trzeba trzymać w głowie. Po pierwsze: szybkość mierzymy w czasie, więc zawsze pojawia się mianownik „sekunda” (albo minuta, godzina). Po drugie: szybkość nie mówi, ile produktu powstanie w końcu; mówi tylko, jak szybko do niego dochodzi. Dlatego reakcja szybka może mieć małą wydajność, a wolna — dużą. To rozróżnienie wróci w ciekawostkach i w klinice błędów.

Dlaczego szybkość się zmienia? Gdy substratów ubywa, rzadziej zderzają się one ze sobą, więc reakcja zwykle zwalnia. Najszybciej przebiega na początku, a pod koniec już wolno. Ta obserwacja jest kluczem do odczytywania wykresów: tam, gdzie krzywa jest bardziej stroma, reakcja przebiega szybciej.

Jak to zmierzyć? Wystarczy wybrać cechę, która zmienia się razem z reakcją: objętość wydzielającego się gazu, masę naczynia (gdy gaz ucieka), barwę roztworu, przewodnictwo elektryczne albo ciśnienie w zamkniętym naczyniu. Każdą z nich odczytujemy w kolejnych chwilach, notujemy w tabeli i rysujemy wykres. Taki pomiar jest podstawą całej kinetyki — nauki o szybkości reakcji.
:::

### 1.1 Mini-wykład: po co w ogóle mierzyć szybkość {#po-co}

::: karta understand | W skrócie: szybkość w przemyśle i w kuchni
Przemysł chemiczny płaci za czas: im szybciej reaktor przerabia substraty, tym więcej produktu z jednej instalacji. Dlatego inżynierowie mierzą szybkość i dobierają temperaturę, ciśnienie i katalizatory. W kuchni robimy to intuicyjnie: ciasto rośnie szybciej w cieple, a mleko psuje się szybciej w upale. Szybkość to więc nie tylko wielkość na kartce, ale narzędzie sterowania procesem.
:::

## 2 | Wykład 2 — szybkość średnia i jej wzór {#srednia}

### 2.1 Wzór i znak

Dla substancji, której ubywa (substrat), szybkość średnia w przedziale czasu od t₁ do t₂ to:

 v_śr = −Δc/Δt = −(c₂ − c₁)/(t₂ − t₁)

Znak minus jest potrzebny, bo Δc dla substratu jest ujemne (stężenie maleje). Dzięki temu szybkość wychodzi dodatnia. Dla produktu, którego przybywa, szybkość liczymy bez minusa: v_śr = +Δc/Δt. Szybkość reakcji jest wielkością dodatnią — jeśli wynik wyszedł ujemny, prawie na pewno zapomniałeś o znaku albo o tym, którą substancję liczysz.

::: karta core | Szybkość średnia — krok po kroku
1. Odczytaj stężenie na początku i na końcu przedziału czasu.
2. Oblicz Δc = c₂ − c₁ oraz Δt = t₂ − t₁ (w sekundach).
3. Podziel: v_śr = moduł(Δc) / Δt. Moduł daje wynik dodatni dla każdej substancji.
4. Zapisz jednostkę: mol/(dm³·s), czyli mol·dm⁻³·s⁻¹.
5. Sprawdź rząd wielkości: w typowych reakcjach szkolnych wynik jest rzędu 10⁻⁴–10⁻¹ mol/(dm³·s).
:::

### 2.2 Przykład liczbowy z tabelą

Przyjmijmy, że w zbiorniku zachodzi reakcja A → produkty, a stężenie A mierzymy co 20 sekund:

| t (s) | c(A) (mol/dm³) | Zmiana c od poprzedniego pomiaru (mol/dm³) | szybkość średnia w przedziale (mol/(dm³·s)) |
|---|---|---|---|
| 0 | 0,40 | — | — |
| 20 | 0,28 | −0,12 | 0,006 |
| 40 | 0,18 | −0,10 | 0,005 |
| 60 | 0,10 | −0,08 | 0,004 |

Każdy wiersz liczymy osobno: w przedziale 0–20 s |Δc| = 0,12, więc v = 0,12/20 = 0,006. W przedziale 20–40 s |Δc| = 0,10, więc v = 0,10/20 = 0,005. W przedziale 40–60 s |Δc| = 0,08, więc v = 0,08/20 = 0,004. Szybkość średnia spada z czasem, a jej malejący ciąg odbija wykres, który coraz słabiej opada.

Całkowita szybkość średnia w przedziale 0–60 s to 0,30/60 = 0,005 mol/(dm³·s). Ta liczba jest średnią z całej minuty i nie mówi nic o tym, co działo się na początku. Dlatego w zadaniach trzeba uważać, czy pytają o średnią, czy o chwilową.

### 2.3 Mini-wykład: szybkość średnia jako „wygładzony" obraz

::: karta understand | W skrócie: średnia to kompromis
Wyobraź sobie jazdę samochodem: licznik pokazuje w każdej sekundzie inną prędkość, ale po godzinie mówisz „jechałem średnio 80 km/h". To średnia z całego przedziału. Szybkość średnia w reakcji działa tak samo: wygładza przebieg. Gdy chcesz wiedzieć, co dzieje się teraz, potrzebujesz szybkości chwilowej.
:::

## 3 | Wykład 3 — szybkość chwilowa i nachylenie stycznej {#chwilowa}

### 3.1 Co to jest szybkość chwilowa

Szybkość chwilowa w punkcie t to szybkość zmiany stężenia dokładnie w tej chwili. Na wykresie stężenia substratu od czasu odpowiada ona nachyleniu stycznej do krzywej w punkcie t. Styczna to prosta, która dotyka krzywej w jednym miejscu i ma ten sam kierunek co krzywa w tym punkcie.

Nie trzeba znać rachunku różniczkowego, żeby z tego skorzystać. Na szkolnym wykresie rysujemy styczną ołówkiem i liczymy jej nachylenie jako stosunek przyrostów: wybieramy dwa punkty na stycznej, odczytujemy różnicę stężeń i różnicę czasu, i dzielimy. Pamiętaj tylko, że dla substratu nachylenie wyjdzie ujemne — przy szybkości bierzemy moduł.

### 3.2 Jak odczytać szybkość z wykresu

Wykres stężenia substratu zaczyna się wysoko i opada, z czasem coraz łagodniej. W punkcie początkowym krzywa jest najbardziej stroma, więc szybkość chwilowa jest największa. W miarę upływu czasu nachylenie maleje, aż krzywa prawie się wypłaszcza, gdy substratu już prawie nie ma.

Dla produktu sytuacja jest odwrotna: wykres idzie w górę, na początku najstromiej, a potem się wypłaszcza. Szybkość tworzenia produktu obliczamy tak samo jak szybkość zużywania substratu, tylko bez minusa.

::: karta core | Odczyt szybkości chwilowej z wykresu
1. Zaznacz punkt na krzywej dla żądanej chwili t.
2. Narysuj styczną w tym punkcie (prosta, która ledwo dotyka krzywej).
3. Wybierz dwa punkty na stycznej, daleko od siebie, i odczytaj Δc oraz Δt.
4. Oblicz moduł(Δc)/Δt. Wynik to szybkość chwilowa w chwili t.
5. Sprawdź, czy wynik jest mniejszy od szybkości początkowej (zwykle tak, gdy substratu ubywa).
:::

### 3.3 Mini-wykład: dlaczego reakcja zwalnia

::: karta understand | W skrócie: mniej substratu, mniej zderzeń
Im mniej cząsteczek substratu w tej samej objętości, tym rzadziej się one spotykają. Dlatego szybkość maleje, nawet gdy temperatura i katalizator pozostają takie same. Zależność od stężenia zapiszemy ilościowo dopiero przy równaniu kinetycznym (sekcja 8).
:::

::: karta adv | Dla ciekawych: szybkość chwilowa jako pochodna | poziom rozszerzony
Dla matematycznie ciekawych: szybkość chwilowa to granica ilorazu Δc/Δt, gdy Δt dąży do zera. Zapisujemy ją jako dc/dt. Na egzaminie wystarczy odczyt stycznej, ale ten zapis pojawi się w podręcznikach LO i w równaniu kinetycznym.
:::

## 4 | Wykład 4 — jednostki i przeliczanie {#jednostki}

Jednostka szybkości wynika z definicji: stężenie w mol/dm³ dzielone przez czas. Najczęściej w zadaniach spotkasz mol/(dm³·s). Jeśli czas podano w minutach, przelicz go na sekundy przed obliczeniem albo zapisz wynik w mol/(dm³·min) i wyraźnie to zaznacz.

Przykład przeliczenia: zmiana stężenia o 0,6 mol/dm³ w ciągu 2 minut to 0,6/120 = 0,005 mol/(dm³·s). Ta sama szybkość w mol/(dm³·min) wynosi 0,6/2 = 0,3 mol/(dm³·min). Obie wartości opisują to samo zjawisko, tylko w innych jednostkach.

::: karta warning | Pułapka: mieszanie minut i sekund
Najczęstszy błąd rachunkowy to podzielenie zmiany stężenia przez czas podany w minutach, a potem zapisanie wyniku jako mol/(dm³·s). Zawsze sprawdź, co jest w mianowniku. Jeśli nie jest to sekunda, przelicz.
:::

::: karta understand | W skrócie: różne zapisy w literaturze
Podręczniki i strony z zadaniami nie zawsze podają jednostkę w tym samym zapisie. Spotkasz mol/(dm³·s), mol·dm⁻³·s⁻¹, a przy stałych szybkości także min⁻¹ czy l·mol⁻¹·s⁻¹. To ten sam pomysł zapisany inaczej. W tej lekcji trzymamy się mol/(dm³·s).
:::

## 5 | Wykład 5 — stechiometria szybkości {#wspolczynniki}

### 5.1 Dlaczego współczynniki mają znaczenie

Dla reakcji ogólnej aA + bB → cC + dD szybkości zmiany stężeń są powiązane współczynnikami stechiometrycznymi. Jeśli na 1 mol produktu C zużywają się 2 mole substratu A, to w tej samej chwili substrat A ubywa dwa razy szybciej, niż produkt C przybywa. Dlatego szybkość zależy od tego, którą substancję wybieramy do obliczeń.

Aby porównać szybkości różnych składników w jednej reakcji, dzielimy każdą zmianę przez odpowiedni współczynnik. Dzięki temu dostajemy jedną wspólną wielkość, nazywaną szybkością reakcji.

### 5.2 Przykład

Reakcja 2A → B. Jeżeli szybkość tworzenia B wynosi 0,010 mol/(dm³·s), to szybkość ubywania A wynosi 2 · 0,010 = 0,020 mol/(dm³·s). Po podzieleniu przez współczynniki obie wielkości dają tę samą wartość szybkości reakcji: 0,020/2 = 0,010 mol/(dm³·s) dla A oraz 0,010/1 dla B.

::: karta understand | W skrócie: po co dzielić przez współczynnik
Dzielenie przez współczynnik sprowadza wszystkie szybkości do jednej wspólnej wielkości. Bez tego każdy składnik miałby własną „szybkość reakcji", a porównywanie różnych reakcji byłoby bezsensowne. Dzieląc przez współczynnik, mówimy: „ile razy reakcja zaszła w jednostce czasu".
:::

::: karta adv | Dla ciekawych: zapis z pochodnymi | poziom rozszerzony
Dla reakcji aA + bB → cC + dD zapisujemy szybkość reakcji jako v = −(1/a)·dc(A)/dt = −(1/b)·dc(B)/dt = (1/c)·dc(C)/dt = (1/d)·dc(D)/dt. Znak minus stoi przy substratach, bo ich stężenia maleją. Zapis z przykładu 2A → B jest szczególnym przypadkiem: v = −½·dc(A)/dt = dc(B)/dt.
:::

## 6 | Metody pomiaru szybkości {#pomiar}

Każda metoda pomiaru ma swoje ograniczenia. Gdy wydziela się gaz, masa układu maleje, bo gaz ucieka. Gdy powstaje osad, roztwór mętnieje i trudniej mierzyć barwę. Dlatego przy projektowaniu doświadczenia wybieramy cechę, która jest proporcjonalna do przebiegu reakcji i łatwa do odczytania.

| Metoda | Co mierzymy | Przykład reakcji | Kiedy stosować |
|---|---|---|---|
| Objętość gazu | Objętość wydzielonego gazu w stałej temperaturze i ciśnieniu | Mg + 2HCl → MgCl₂ + H₂↑ | reakcje z wydzielaniem gazu |
| Masa układu | Ubytek masy, gdy gaz ucieka z otwartego naczynia | CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ | gdy gaz ucieka, a naczynie stoi na wadze |
| Barwa roztworu | Zmiana intensywności barwy | reakcje z udziałem jodu | reakcje zmieniające kolor |
| Przewodnictwo | Zmiana liczby jonów w roztworze | reakcje tworzące lub zużywające jony | reakcje w roztworach wodnych |
| Ciśnienie | Ciśnienie w zamkniętym naczyniu | reakcje gazowe przy stałej objętości | układy gazowe |
| pH | Zmiana stężenia jonów H⁺ | reakcje z udziałem kwasów lub zasad | roztwory o zmiennym odczynie |

Metody pobierania próbek są inne: w stałej temperaturze pobieramy porcje mieszaniny, zatrzymujemy w nich reakcję (np. szybkim ochłodzeniem) i oznaczamy stężenie, np. miareczkowaniem. Podobnie działa pomiar absorpcji światła w spektrofotometrze. Źródło tej listy podajemy w sekcji „Źródła” na końcu lekcji.

### 6.1 Pomiar objętości gazu — opis doświadczenia

Probówkę z roztworem kwasu solnego łączymy wężykiem z cylindrem wypełnionym wodą, odwróconym do góry dnem. Do kwasu dodajemy kawałek magnezu i szybko zatykamy probówkę. Wydzielający się wodór wypiera wodę z cylindra; co kilkanaście sekund notujemy objętość gazu. Po przeliczeniu objętości na liczbę moli i uwzględnieniu stechiometrii odczytujemy zmianę ilości magnezu lub kwasu.

Ważne: objętość gazu zależy od temperatury i ciśnienia, dlatego pomiar robimy w tych samych warunkach albo przeliczamy wynik do warunków normalnych (0 °C, 1013 hPa, gdzie 1 mol gazu zajmuje 22,4 dm³). Gdy tego nie zrobisz, wyniki z kolejnych prób będą niespójne.

::: karta warning | BHP przy pomiarach z gazami i kwasami
Kwas solny jest żrący, więc pracujemy w okularach i rękawicach. Wodór jest łatwopalny, więc nie zbliżamy do niego płomienia. Gdy reakcja wydziela CO₂, pracujemy w dobrze wentylowanym pomieszczeniu. Układ z zatyczką nie może być całkowicie szczelny podczas wydzielania gazu, bo może pęknąć.
:::

### 6.2 Pomiar ubytku masy — opis doświadczenia

Kolbkę z węglanem wagę pokazuje na początku. Dodajemy kwas i co kilkanaście sekund odczytujemy masę. Ubytek masy odpowiada gazowi, który uciekł (CO₂). Metoda jest prosta, ale gdy gaz ucieka zbyt szybko, wynik jest obarczony błędem. Dlatego w doświadczeniu szkolnym warto zapisać kilka prób i porównać przebieg.

::: karta understand | Mini-wykład: po co powtarzać pomiar
Pojedynczy pomiar jest jak jedna fotografia. Gdy powtórzysz doświadczenie kilka razy i wyniki będą się różnić o kilka procent, wiesz, że błąd jest rzędu kilku procent. Powtarzanie pomiaru to sposób na uczciwą ocenę, jak bardzo możesz ufać swojej liczbie.
:::

## 7 | Przykłady obliczeniowe krok po kroku {#przyklady}

Każdy przykład rozwiąż najpierw sam, zanim zajrzysz do rozwiązania. Przed każdym krokiem zatrzymaj się i zapytaj: co zrobię i dlaczego? Po rozwiązaniu wyjaśnij własnymi słowami, dlaczego wynik ma taki znak i jednostkę.

### 7.1 Przykład 1 — szybkość średnia z kilku pomiarów

Stężenie substancji A w reakcji A → produkty mierzono w kolejnych chwilach: t = 0 s, c = 0,50 mol/dm³; t = 30 s, c = 0,35 mol/dm³; t = 90 s, c = 0,05 mol/dm³. Oblicz szybkość średnią w przedziale 0–30 s, 30–90 s i 0–90 s.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Dla przedziału 0–30 s oblicz |Δc| i Δt. Co wychodzi? (Odpowiedź: |Δc| = 0,15 mol/dm³, Δt = 30 s.)
Krok 2. Podziel: v = 0,15/30 = 0,0050 mol/(dm³·s).
Krok 3. Powtórz dla 30–90 s: |Δc| = 0,30, Δt = 60 s, v = 0,30/60 = 0,0050 mol/(dm³·s).
Krok 4. Dla 0–90 s: |Δc| = 0,45, Δt = 90 s, v = 0,45/90 = 0,0050 mol/(dm³·s).
Pytanie do przemyślenia: dlaczego wszystkie trzy wyniki są równe? To dane wyjątkowe — w prawdziwej reakcji szybkość średnia zwykle maleje z czasem.
:::

### 7.2 Przykład 2 — porównanie dwóch przedziałów

Stężenie B: w chwili 0 s wynosi 1,00 mol/dm³, w chwili 20 s wynosi 0,80 mol/dm³, w chwili 60 s wynosi 0,40 mol/dm³. Porównaj szybkości średnie w przedziałach 0–20 s i 20–60 s.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Przedział 0–20 s: |Δc| = 0,20, v = 0,20/20 = 0,010 mol/(dm³·s).
Krok 2. Przedział 20–60 s: |Δc| = 0,40, Δt = 40 s, v = 0,40/40 = 0,010 mol/(dm³·s).
Krok 3. Wyjaśnij własnymi słowami: dlaczego w drugim przedziale spadek stężenia był dwa razy większy, a szybkość taka sama? (Odpowiedź: czas trwania przedziału był też dwa razy dłuższy.)
:::

### 7.3 Przykład 3 — z szybkości produktu do szybkości substratu

Reakcja 3A → 2C. Szybkość tworzenia C w pewnym przedziale wynosi 0,024 mol/(dm³·s). Oblicz szybkość ubywania A w tym samym przedziale.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Z równania: na 2 mole C zużywa się 3 mole A. Stosunek szybkości ubywania A do tworzenia C wynosi 3/2.
Krok 2. Oblicz: (3/2) · 0,024 = 0,036 mol/(dm³·s) co do wartości bezwzględnej. Ze znakiem minus jako zmiana stężenia substratu.
Krok 3. Wyjaśnij, dlaczego A nie może mieć szybkości równej szybkości C. (Odpowiedź: współczynniki stechiometryczne są różne.)
:::

### 7.4 Przykład 4 — szybkość wydzielania gazu (warunki normalne)

W doświadczeniu z magnezem zebrano 120 cm³ wodoru w czasie 60 s, w warunkach normalnych, w których 1 mol gazu zajmuje 22,4 dm³. Oblicz szybkość wydzielania wodoru w mol/s.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Zamień jednostki: 120 cm³ = 0,120 dm³.
Krok 2. Oblicz liczbę moli: n = 0,120/22,4 ≈ 0,00536 mol.
Krok 3. Podziel przez czas: 0,00536/60 ≈ 0,000089 mol/s.
Krok 4. Wyjaśnij, czego ta szybkość dotyczy. (Odpowiedź: tworzenia wodoru, a nie zmiany stężenia w roztworze, więc nie porównujemy jej wprost z tabelą c(t) bez przeliczenia.)
:::

::: karta warning | Uwaga przy objętości gazu
Objętość gazu zależy od warunków. Ta sama liczba moli zajmuje inną objętość w innej temperaturze i przy innym ciśnieniu. W zadaniach szkolnych podaje się zwykle warunki normalne (22,4 dm³/mol) albo jednoznacznie określoną objętość molową.
:::

## 8 | Wstęp do równania kinetycznego (LO) {#kinetyczne}

::: karta adv | Rozszerzenie LO — równanie kinetyczne | poziom rozszerzony
Dla wielu reakcji szybkość zależy od stężeń substratów. Zapisujemy to równaniem kinetycznym: v = k · [A]ᵐ · [B]ⁿ, gdzie k to stała szybkości, a wykładniki m i n to rzędy reakcji względem substancji A i B. Wykładniki nie wynikają z współczynników w równaniu reakcji, tylko z doświadczenia.

Dla reakcji pierwszego rzędu względem A szybkość jest proporcjonalna do stężenia A: v = k · [A]. Szczegóły zostawiamy na późniejszą część kursu; tutaj wystarczy wiedzieć, że równanie kinetyczne łączy szybkość z ilością substratów.
:::

## 9 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Szybkość = ΔH | Szybkość to kinetyka (jak szybko), ΔH to energetyka (ile energii) | Dwie różne wielkości; reakcja może być szybka i egzotermiczna albo wolna i endotermiczna |
Szybkość dla substratu bez modułu lub znaku | v = −Δc/Δt albo moduł(Δc)/Δt | Stężenie substratu maleje, więc Δc jest ujemne |
Szybkość w chwili liczona jak średnia | Dla chwili t bierzemy nachylenie stycznej | Średnia obejmuje przedział, chwilowa jeden punkt |
Mieszanie minut i sekund | Przelicz czas na sekundy przed obliczeniem | Wynik w mol/(dm³·min) jest inny niż w mol/(dm³·s) |
Porównanie samych Δc | Dziel przez czas przedziału | Dwa przedziały o różnych Δt mogą mieć tę samą szybkość |
Szybkość produktu bez współczynnika | Uwzględnij współczynniki stechiometryczne | Substrat i produkt zmieniają się w różnym tempie |
Objętość gazu bez warunków | Podaj temperaturę i ciśnienie lub przelicz do warunków normalnych | Ta sama liczba moli zajmuje różną objętość |
:::

::: karta warning | Mit: Reakcja, która jest szybka, daje dużo produktu.
Szybkość mówi o tempie, wydajność o ilości produktu. Szybka reakcja może mieć małą wydajność i odwrotnie.
:::

::: karta warning | Mit: Szybkość reakcji to jednostka stężenia.
To stężenie podzielone przez czas: mol/(dm³·s).
:::

::: karta warning | Mit: Wynik ujemny znaczy, że reakcja biegnie wstecz.
Ujemny wynik zwykle oznacza pominięcie minusa przy Δc substratu. Zwrot reakcji to temat równowagi (K08).
:::

::: karta warning | Mit: Katalizator zmienia szybkość przez zmianę wyniku końcowego.
Katalizator przyspiesza reakcję, ale wydajność równowagowa się nie zmienia (K07).
:::

## 10 | Mnemotechniki {#mnemotechniki}

::: karta understand | Sposoby pamięciowe
Ubywa — minus, przybywa — plus. Zapamiętaj: znak minus dla substratu, który się zużywa; bez minusa dla produktu, który powstaje.
Mianownik to zawsze czas. Jednostka szybkości zaczyna się od stężenia, a kończy na sekundzie: mol/(dm³·s). Jeśli czas jest w minutach, zatrzymaj się i przelicz.
Współczynnik dzieli, nie mnoży. Przy 2A → B szybkość ubywania A dzielimy przez 2, by porównać ją z szybkością B.
:::

## 11 | Ćwiczenia {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — szybkość średnia
Stężenie substancji A w reakcji A → produkty spadło z 0,40 mol/dm³ do 0,10 mol/dm³ w czasie 60 s. Oblicz szybkość średnią tej reakcji i podaj jednostkę.
::: odp | Pokaż klucz
v_śr = moduł(Δc)/Δt = (0,40 − 0,10)/60 = 0,30/60 = 0,005. Jednostka: mol/(dm³·s). (1 pkt za wynik, 1 pkt za jednostkę)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — wykres c(t)
Na wykresie stężenia substratu od czasu nachylenie krzywej w 10 s jest większe niż w 50 s. Co to mówi o szybkości? Uzasadnij.
::: odp | Pokaż klucz
Szybkość chwilowa jest większa w 10 s niż w 50 s, bo nachylenie stycznej (szybkość zmiany stężenia) jest większe. Reakcja zwalnia, gdy substratu ubywa. (1 pkt za wniosek, 1 pkt za uzasadnienie odwołujące się do nachylenia)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — produkt i substrat
W reakcji 2A → B szybkość tworzenia B wynosi 0,010 mol/(dm³·s). Oblicz szybkość zmiany stężenia A i podaj wynik ze znakiem. Wyjaśnij, dlaczego wynik różni się od szybkości B.
::: odp | Pokaż klucz
Z równania: na 1 mol B zużywa się 2 mole A, więc ubywanie A jest dwa razy szybsze: Δc(A)/Δt = −2 · 0,010 = −0,020 mol/(dm³·s). Wynik ujemny, bo A ubywa. (1 pkt za zależność od współczynnika, 1 pkt za wartość, 1 pkt za znak i wyjaśnienie)
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — przeliczanie jednostek
W pewnym przedziale stężenie substratu zmniejszyło się o 0,18 mol/dm³ w ciągu 3 minut. Oblicz szybkość średnią w mol/(dm³·min) i w mol/(dm³·s).
::: odp | Pokaż klucz
W mol/(dm³·min): 0,18/3 = 0,060 mol/(dm³·min). W mol/(dm³·s): czas 3 min = 180 s, więc 0,18/180 = 0,0010 mol/(dm³·s). Sprawdzenie: 0,060/60 = 0,0010. (1 pkt za wynik w min, 1 pkt za przeliczenie czasu, 1 pkt za wynik w s)
:::
:::

::: karta exam | Zadanie 5 (3 pkt) — z tabeli do wniosku
Dane pomiarowe dla reakcji D → E: t = 0 s, c(D) = 0,80; t = 10 s, c(D) = 0,60; t = 20 s, c(D) = 0,45; t = 30 s, c(D) = 0,35 (mol/dm³). Oblicz szybkość średnią w każdym z trzech przedziałów i sformułuj wniosek o zmianie szybkości w czasie.
::: odp | Pokaż klucz
0–10 s: 0,20/10 = 0,020; 10–20 s: 0,15/10 = 0,015; 20–30 s: 0,10/10 = 0,010 mol/(dm³·s). Wniosek: szybkość maleje w czasie, bo kolejne przedziały dają coraz mniejsze wartości. (1 pkt za każdy przedział, 1 pkt za wniosek)
:::
:::

::: karta exam | Zadanie 6 (3 pkt) — pomiar gazu w warunkach normalnych
W doświadczeniu zebrano w czasie 40 s objętość H₂ równą 56 cm³ (warunki normalne, 1 mol = 22,4 dm³). Oblicz liczbę moli H₂ i szybkość wydzielania w mol/s. Zapisz, czego ta szybkość dotyczy.
::: odp | Pokaż klucz
56 cm³ = 0,056 dm³; n = 0,056/22,4 = 0,0025 mol. Szybkość: 0,0025/40 = 0,0000625 mol/s, czyli 6,25 · 10⁻⁵ mol/s. Dotyczy wydzielania wodoru (tworzenia produktu), a nie zmiany stężenia substratu w roztworze. (1 pkt za moli, 1 pkt za szybkość, 1 pkt za interpretację)
:::
:::

### 11.1 Zadanie transferowe — szybkość w nowym kontekście

::: karta exam | Zadanie 7 (4 pkt) — tabletka musująca
Tabletkę musującą wrzucono do wody i zmierzono objętość wydzielonego CO₂ w warunkach normalnych: po 20 s — 0,224 dm³, po 40 s — 0,336 dm³, po 60 s — 0,392 dm³. Oblicz liczbę moli CO₂ po 60 s, szybkość średnią wydzielania w każdym z przedziałów 0–20 s, 20–40 s i 40–60 s, a potem wyjaśnij, czy szybkość rośnie, czy maleje, i dlaczego może tak być.
::: odp | Pokaż klucz
Po 60 s: n = 0,392/22,4 = 0,0175 mol. Przedziały (w mol/s): 0–20 s: 0,224/22,4 = 0,0100 mol, czyli 0,0100/20 = 0,00050 mol/s; 20–40 s: (0,336 − 0,224)/22,4 = 0,0050 mol, czyli 0,00025 mol/s; 40–60 s: (0,392 − 0,336)/22,4 = 0,0025 mol, czyli 0,000125 mol/s. Wniosek: szybkość maleje, bo substrat się zużywa. (1 pkt za moli, 1 pkt za każdy przedział po ½ pkt, 1 pkt za wniosek i uzasadnienie)
:::
:::

## 12 | Test {#test}

::: test
? Jednostka szybkości reakcji, gdy stężenia podajemy w mol/dm³, a czas w sekundach, to:
+ mol/(dm³·s)
- mol/dm³
- s/mol
- dm³/(mol·s)
! Szybkość to zmiana stężenia w czasie, więc jednostka to stężenie podzielone przez czas.
? Dla substratu Δc jest ujemne, więc szybkość średnią liczymy tak, że:
+ stosujemy moduł albo minus przed Δc, bo stężenie substratu maleje
- bierzemy Δc bez zmian, bo wynik ma być ujemny
- dzielimy przez stężenie zamiast przez czas
- zakładamy, że Δc zawsze rośnie
! Bez minusa lub modułu wynik dla substratu wyszedłby ujemny, a szybkość jest wielkością dodatnią.
? Na wykresie stężenia substratu od czasu nachylenie stycznej w chwili t mówi o:
+ szybkości chwilowej w tej chwili
- szybkości średniej w całym przedziale
- wydajności reakcji
- masie produktu
! Styczna opisuje lokalną zmianę stężenia, czyli szybkość chwilową.
? W reakcji 2A → B szybkość tworzenia B wynosi 0,010 mol/(dm³·s). Szybkość ubywania A wynosi:
+ 0,020 mol/(dm³·s) co do wartości bezwzględnej
- 0,005 mol/(dm³·s)
- 0,010 mol/(dm³·s) bez zmian
- 0,040 mol/(dm³·s)
! Na 1 mol B zużywa się 2 mole A, więc A ubywa dwa razy szybciej.
? Przy wydzielaniu gazu w warunkach normalnych 0,224 dm³ CO₂ to:
+ 0,010 mol
- 0,224 mol
- 0,0022 mol
- 0,100 mol
! n = V/22,4 = 0,224/22,4 = 0,010 mol. Warunki normalne podają objętość molową 22,4 dm³/mol.
:::

## 13 | Słownik {#slownik}

::: slownik
Szybkość reakcji :: zmiana stężenia reagenta lub produktu w jednostce czasu
Szybkość średnia :: moduł(Δc)/Δt w danym przedziale czasu
Szybkość chwilowa :: szybkość w ustalonej chwili, równa nachyleniu stycznej do wykresu c(t)
Wykres stężenie–czas :: zależność stężenia od czasu, z której odczytujemy szybkość
Styczna :: prosta dotykająca krzywej w jednym punkcie, o tym samym kierunku co krzywa w tym punkcie
Jednostka szybkości :: mol/(dm³·s) (w tej lekcji)
Metoda pomiaru :: sposób odczytu zmiany układu, np. objętości gazu lub barwy roztworu
Substrat :: substancja, która się zużywa w reakcji
Produkt :: substancja, która powstaje w reakcji
Stechiometria szybkości :: związek szybkości różnych składników reakcji przez współczynniki
Równanie kinetyczne :: zależność szybkości od stężeń substratów, v = k[A]ᵐ[B]ⁿ (rozszerzenie LO)
Stała szybkości k :: współczynnik proporcjonalności w równaniu kinetycznym
Wydajność :: ilość produktu w stanie końcowym, niezależna od tego, jak szybko powstał
Warunki normalne :: 0 °C i 1013 hPa, w których 1 mol gazu zajmuje 22,4 dm³
:::

## 14 | Fiszki {#fiszki}

::: fiszki
Czym jest szybkość reakcji? | Zmiana stężenia reagenta w jednostce czasu | basic:kinetyka
Jaki wzór ma szybkość średnia? | v_śr = moduł(Δc)/Δt | basic:kinetyka
Jaka jest jednostka szybkości? | mol/(dm³·s) | basic:kinetyka
Czym różni się szybkość chwilowa od średniej? | Chwilowa to jeden punkt (styczna), średnia to przedział | understand:kinetyka
Co oznacza nachylenie stycznej na wykresie c(t)? | Szybkość chwilową reakcji | understand:kinetyka
Dlaczego szybkość substratu ma znak minus? | Bo stężenie substratu maleje, więc Δc < 0 | understand:kinetyka
Jak zmienia się szybkość w miarę zużywania substratów? | Zwykle maleje | basic:kinetyka
Co mierzymy przy wydzielaniu gazu? | Objętość gazu lub ubytek masy | basic:pomiar
Co zmienia się w reakcji jodowego zegara? | Barwa roztworu (pojawia się granatowa) | extra:pomiar
Jak przeliczyć minuty na sekundy? | Mnożymy przez 60 | basic:kinetyka
Co wynika ze współczynników? | Szybkość zmiany substratu zależy od jego współczynnika | understand:stechiometria
Czym jest szybkość a wydajność? | Szybkość mówi jak szybko, wydajność ile produktu w końcu | understand:kinetyka
Dlaczego porównujemy szybkości przez czas, nie przez Δc? | Bo dwa przedziały o różnych Δt mogą mieć tę samą szybkość | understand:kinetyka
Jaka objętość zajmuje 1 mol gazu w warunkach normalnych? | 22,4 dm³ | basic:pomiar
Co to styczna? | Prosta dotykająca krzywej w jednym punkcie | basic:kinetyka
Czym jest stała szybkości k? | Współczynnikiem w równaniu kinetycznym v = k[A]ᵐ[B]ⁿ | adv:kinetyka
:::

## 15 | Mosty {#mosty}

- Przed tą lekcją: R05 (stężenia i obliczenia z nimi).
- Dalej: K05 (czynniki: stężenie, temperatura, rozdrobnienie), K06 (zderzenia i energia aktywacji), K08 (równowaga dynamiczna: szybkość w przód i wstecz).

## 16 | Ciekawostki {#ciekawostki}

::: karta extra | Reakcja zegarowa
W reakcji jodowego zegara roztwór po chwili nagle zmienia barwę z bezbarwnej na granatową. Przyczyną jest utworzony jod, który reaguje ze skrobią. Dodając tiosiarczan sodu, opóźniamy moment zmiany barwy o czas proporcjonalny do ilości użytego reagenta. Szkolny pokaz zamienia się w pomiar szybkości.
:::

::: karta extra | Rdza jako reakcja, którą widzimy po latach
Rdzewienie żelaza to reakcja utleniania z tlenem i wodą, ale w temperaturze pokojowej przebiega bardzo wolno. Stalowe konstrukcje stoją dekady, zanim zauważymy zmiany. W wilgotnym, słonym powietrzu szybkość rośnie, bo woda i sól przyspieszają reakcje elektrochemiczne.
:::

::: karta extra | Lodówka to kinetyka
Dlaczego żywność w lodówce psuje się wolniej? Niższa temperatura zmniejsza szybkość reakcji i procesów rozkładu, które wywołują bakterie i enzymy. Ta sama zasada działa w odwrotną stronę: po podgrzaniu produkty psują się szybciej.
:::

::: karta extra | Szybkość a wydajność w praktyce
Reakcja może być bardzo szybka, a mieć małą wydajność (gdy ustala się równowaga), i odwrotnie: wolna reakcja może dać wysoką wydajność, jeśli będzie dość czasu. Dlatego przemysł osobno optymalizuje szybkość (temperatura, katalizator) i wydajność (ciśnienie, usuwanie produktu).
:::

## Źródła

- Uniwersytet Medyczny w Białymstoku, materiał „Kinetyka chemiczna — teoria” (plik PDF, zakład chemii fizycznej): definicje średniej i chwilowej szybkości, wzory dla substratu i produktu, zapis z pochodną, zależność od współczynników stechiometrycznych, metody pobierania próbek i pomiaru absorpcji. Sprawdzone wyszukiwaniem i odczytem: https://www.umb.edu.pl/photo/pliki/WF_jednostki/zaklad-chemii-fizycznej/kinetyka_chemiczna_teoria.pdf
- Do uzupełnienia przy W1 FULL: wpis Khan Academy lub Wikipedia dotyczący szybkości reakcji (nie udało się otworzyć strony w tej wersji) oraz arkusz CKE z zadaniami o szybkości.


---

# LEKCJA K05 — Czynniki wpływające na szybkość

- TRYB: ULEPSZ
- KOD: K05 (znacznik odpowiedzi: `<<<PLIK K05`)
- NASTĘPNE ZADANIE: 6
- PRZED: KB 17.8, sekcje ## 15, zadania (karta exam) 5, pytania testowe 4, fiszki 11, hasła słownika 7, grafiki (@viz/@model/@zlewka) 0, opisy @opis 0, ciekawostki (karta extra) 4, mini-wykłady (W skrócie) 2, doświadczenia (dosw) 0, błędy w klinice 5

---
kod: K05
uid: CHE.07.K05.czynniki_szybkosci
tytul: Czynniki wpływające na szybkość
opis: Stężenie, temperatura, rozdrobnienie, katalizator i inhibitor — jak każdy z nich zmienia szybkość reakcji, dlaczego i jak to sprawdzić w prostych doświadczeniach (Zn + HCl, rozkład H₂O₂) · LO
kicker: K05 · KINETYKA · NOWA LEKCJA
lead: Dlaczego ten sam cynk reaguje z kwasem w kilka sekund, a innym razem ledwo widać pęcherzyki? Odpowiedź leży w czynnikach, które sterują szybkością: stężeniu, temperaturze, stopniu rozdrobnienia i katalizatorze. Ta lekcja pokazuje każdy z nich i uczy zaplanować własne doświadczenie.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA K05 v2.0** · Czynniki wpływające na szybkość · 2026
---

Ta lekcja jest kontynuacją K04. Tam nauczyłeś się mierzyć szybkość; tu dowiesz się, co ją zmienia. Po jej przejściu umiesz wymienić cztery główne czynniki, wyjaśnić każdy z nich na poziomie zderzeń cząsteczek, zaprojektować prostą serię doświadczeń i odróżnić wpływ na szybkość od wpływu na równowagę.

## Przypomnienie z poprzedniej lekcji

Zanim przeczytasz dalej, odpowiedz bez zaglądania do K04:

1. Jaka jednostka opisuje szybkość reakcji?
2. Czy szybkość reakcji mierzymy zmianą stężenia substratu, czy produktu?

::: karta understand | Klucz do przypomnienia
1. mol/(dm³·s) — zmiana stężenia w jednostce czasu.
2. Obu, pamiętając o znaku: substrat ubywa (Δc < 0), produkt przybywa (Δc > 0), więc do szybkości bierzemy moduł.
:::

::: minimum | Muszę umieć — 7 punktów
1. Główne czynniki szybkości: stężenie (lub ciśnienie gazu), temperatura, stopień rozdrobnienia reagentów i katalizator.
2. Wzrost stężenia i wzrost ciśnienia gazu przyspieszają reakcję, bo rośnie liczba zderzeń.
3. Wzrost temperatury przyspiesza reakcję, bo rośnie udział cząsteczek o energii co najmniej E_a.
4. Rozdrobnienie ciała stałego przyspiesza reakcję, bo rośnie powierzchnia zetknięcia.
5. Katalizator przyspiesza reakcję, obniżając energię aktywacji E_a; sam nie zużywa się.
6. Inhibitor spowalnia reakcję.
7. Czynniki zmieniają szybkość, a nie położenie równowagi (o równowadze mówi K08 i dalsze lekcje).
:::

## 1 | Wykład 1 — dlaczego szybkość w ogóle się zmienia {#wyklad}

::: karta understand | Wykład od zera
Wyobraź sobie szkolny korytarz w przerwie. Im więcej uczniów naraz, tym częściej na siebie wpadają. Chemia działa podobnie: aby reakcja zaszła, cząsteczki muszą się zderzyć (K06). Wszystko, co zwiększa liczbę zderzeń albo ich skuteczność, przyspiesza reakcję.

Czynniki, o których tu mówimy, działają właśnie na te dwie rzeczy. Część z nich zwiększa liczbę zderzeń (stężenie, rozdrobnienie). Część zwiększa udział zderzeń skutecznych, czyli takich, w których cząsteczki mają dość energii (temperatura, katalizator). Gdy zapamiętasz ten podział, każdy kolejny czynnik da się wyjaśnić w dwóch zdaniach.
:::

### 1.1 Mini-wykład: szybkość a wydajność {#wydajnosc}

::: karta understand | W skrócie: szybciej nie znaczy więcej
Czynniki szybkości zmieniają tempo, w jakim dochodzimy do produktu, a nie ilość produktu w stanie końcowym. Reakcja przyspieszona katalizatorem da tyle samo produktu co bez niego, tylko szybciej. Ta różnica jest ważna w klinice błędów i w lekcji o równowadze.
:::

## 2 | Wykład 2 — stężenie i ciśnienie {#stezenie}

Im więcej cząsteczek reagentów mieści się w tej samej objętości, tym częściej się zderzają. Dlatego wzrost stężenia substratu zwykle przyspiesza reakcję. W gazach to samo dotyczy ciśnienia: sprężenie gazu w zamkniętym naczyniu zmniejsza jego objętość, więc rośnie liczba cząsteczek w jednostce objętości, czyli stężenie.

Przykład z kwasem: cynk reaguje z kwasem solnym według równania

Zn + 2 HCl → ZnCl₂ + H₂↑

Im bardziej stężony kwas (więcej jonów H⁺ i cząsteczek HCl w tej samej objętości), tym więcej zderzeń cynku z cząsteczkami kwasu w jednostce czasu i tym szybciej wydziela się wodór.

::: karta core | Stężenie i ciśnienie — co pamiętać
1. Wzrost stężenia reagentów zwiększa liczbę zderzeń w jednostce czasu, więc zwykle przyspiesza reakcję.
2. Dla gazów wzrost ciśnienia (przy stałej temperaturze) działa jak wzrost stężenia.
3. Wzrost stężenia nie zmienia energii aktywacji E_a. Zmienia tylko liczbę zderzeń, nie ich energię.
:::

::: karta warning | Pułapka: stężenie a ilość substancji
Dwukrotne zwiększenie stężenia nie oznacza, że reakcja zawsze przebiegnie dwa razy szybciej. Zależność zależy od tego, jak szybkość zależy od stężenia dla danej reakcji; nie każda reakcja reaguje tak samo. Nie przenoś mechanicznie tej zasady na każdą sytuację. W tej lekcji wystarczy zapamiętać kierunek zmiany: więcej reagentów w tej samej objętości zwykle oznacza szybszą reakcję.
:::

## 3 | Wykład 3 — temperatura {#temperatura}

Podniesienie temperatury przyspiesza prawie każdą reakcję, którą znasz z laboratorium i z kuchni. Ciasto rośnie szybciej w cieple, a mleko psuje się szybciej w upale. Dlaczego?

Temperatura jest miarą średniej energii cząsteczek, ale średnia to nie wszystko. Cząsteczki mają bardzo różne energie: część wolna, część szybka. Dla reakcji liczy się tylko ta część, która ma energię co najmniej równą E_a. Wzrost temperatury nie dodaje każdej cząsteczce tej samej porcji energii; przesuwa i poszerza rozkład energii, więc rośnie udział cząsteczek w szybkim „ogonie” krzywej (ta sama myśl, co w K06).

Jako reguła orientacyjna pamiętaj, że w wielu reakcjach w pobliżu temperatury pokojowej wzrost o 10 K zwiększa szybkość kilka razy (często przyjmuje się 2–4 razy). To przybliżenie, nie prawo ścisłe; dokładna zależność wymaga równania Arrheniusa, które wykracza poza tę lekcję.

::: karta understand | W skrócie: dlaczego 10 stopni tak wiele zmienia
Temperatura działa na całą krzywą rozkładu energii, dlatego jej efekt jest silny i nieliniowy. Mały wzrost T powoduje duży wzrost liczby cząsteczek zdolnych do reakcji. Stąd przechowywanie produktów w lodówce i gotowanie przyspieszające reakcje w kuchni.
:::

### 3.1 Przykład liczbowy: reguła 10 K {#przyklad-t}

Reakcja w temperaturze 20 °C przebiega w czasie 80 s. Przyjmijmy orientacyjnie, że każdy wzrost o 10 K zwiększa szybkość 2 razy.

1. Od 20 °C do 30 °C: szybkość 2 razy większa, czas ok. 40 s.
2. Od 20 °C do 40 °C: dwa kroki po 10 K, szybkość 2 · 2 = 4 razy większa, czas ok. 20 s.

Wniosek: tak prosty model pokazuje kierunek i skalę efektu. Wynik jest szacunkowy, bo rzeczywisty współczynnik zależy od reakcji — pamiętaj o tym przy każdym takim rachunku.

## 4 | Wykład 4 — rozdrobnienie ciała stałego {#rozdrobnienie}

Reakcje z udziałem ciał stałych zachodzą na powierzchni. Cząsteczki w środku bryły nie mają dostępu do cieczy lub gazu, więc nie reagują, dopóki nie dotrze do nich reagent. Im drobniej rozdrobnisz ciało stałe, tym większa staje się jego powierzchnia przy tej samej masie, a więc tym więcej miejsc do zderzeń.

Doświadczenie: ten sam cynk w postaci granulek i w postaci proszku reaguje z tym samym kwasem. Proszek ma wielokrotnie większą powierzchnię zetknięcia, więc wodór wydziela się szybciej. Ta sama zasada tłumaczy, dlaczego tabletka musująca rozpuszcza się szybciej, gdy ją pokruszysz, i dlaczego pył mączny w zamkniętym pomieszczeniu jest niebezpieczny (o tym w ciekawostkach).

::: karta understand | Mini-wykład: powierzchnia a masa
Dwa identyczne cynkowe krążki mają tę samą masę, ale jeśli jeden przetniesz na setki kawałków, całkowita powierzchnia wyraźnie wzrośnie. Szybkość zależy od powierzchni, nie od masy, dlatego w reakcjach ciał stałych mówimy o stopniu rozdrobnienia.
:::

## 5 | Wykład 5 — katalizator i inhibitor {#katalizator}

Katalizator to substancja, która przyspiesza reakcję, obniżając energię aktywacji E_a, i która na końcu reakcji występuje w niezmienionej ilości. Nie zużywa się, bo bierze udział w reakcji pośrednio: tworzy z reagentem przejściowy związek, który szybko się rozpada, oddając katalizator z powrotem.

Przykład, który możesz zobaczyć w laboratorium: rozkład nadtlenku wodoru.

2 H₂O₂ → 2 H₂O + O₂↑

Ten rozkład zachodzi bardzo powoli w temperaturze pokojowej. Dodany tlenek manganu(IV), MnO₂, przyspiesza go tak, że wydziela się obfity tlen. Po reakcji MnO₂ można odsączyć i użyć ponownie — to właśnie znaczy, że katalizator się nie zużywa.

Inhibitor działa odwrotnie: zwiększa energię aktywacji albo blokuje drogę reakcji, więc ją spowalnia. Inhibitory są stosowane celowo, np. w żywności (przeciwutleniacze spowalniają jełczenie tłuszczów).

::: karta core | Katalizator — co zmienia, a czego nie
1. Zmienia: energię aktywacji (w obu kierunkach) i szybkość dojścia do stanu równowagi.
2. Nie zmienia: ΔH reakcji, energii substratów i produktów oraz położenia równowagi.
3. Nie zużywa się: po reakcji jest w tej samej ilości, choć mógł wziąć udział w etapach pośrednich.
:::

## 6 | Wykład 6 — naturę reagentów i doświadczenia {#doswiadczenia}

Ostatni czynnik to natura reagentów. Różne substancje mają różne energie aktywacji, bo ich wiązania są różnej mocy i różnie układają się atomy w stanie przejściowym. Z kwasem solnym magnez reaguje szybciej niż żelazo, a żelazo szybciej niż miedź, która z tym kwasem praktycznie nie reaguje. Ta kolejność odpowiada szeregowi aktywności metali, który poznasz w lekcji X04.

Jak zaplanować doświadczenie? Zasada jest jedna: zmieniaj jeden czynnik naraz, a resztę trzymaj stałą. Nazywamy to kontrolą zmiennych. Jeżeli w jednej probówce zmienisz stężenie, a w drugiej temperaturę, nie wiesz, który czynnik zadziałał.

::: karta understand | Projekt doświadczenia: wpływ temperatury
Cel: sprawdzić, jak temperatura wpływa na szybkość reakcji cynku z kwasem.
1. Zmienna niezależna: temperatura kwasu (np. 20 °C, 40 °C).
2. Zmienne kontrolowane: ta sama masa granulek cynku, ta sama objętość i stężenie kwasu, ten sam rozmiar probówki.
3. Zmienna zależna: czas zaniku cynku albo objętość wydzielonego wodoru w tym samym czasie.
4. Wniosek: porównaj wyniki i sformułuj zależność; jeśli różnica jest duża, a warunki stałe, to temperatura jest przyczyną.
:::

## 7 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego pył mączny bywa groźny
Drobny pył z mąki, cukru czy zboża ma ogromną powierzchnię przy niewielkiej masie. W zamkniętym pomieszczeniu, gdy pył się wzbije w powietrze i trafi na iskrę, może spalić się gwałtownie, a nawet wybuchnąć. To jeden z najlepszych przykładów zasady, że rozdrobnienie przyspiesza reakcję.
:::

::: karta extra | Dlaczego lodówka chroni jedzenie
Niska temperatura zmniejsza udział cząsteczek zdolnych do reakcji, więc bakterie i reakcje rozkładu jedzenia zachodzą wolniej. Nie zatrzymują się całkowicie, dlatego żywność wciąż trzeba zużyć w ciągu kilku dni. Lodówka to temperaturowy inhibitor procesów psucia.
:::

::: karta extra | Tabletka musująca
Tabletka musująca w szklance wody rozpuszcza się i wydziela gaz. Gdy ją pokruszysz, reakcja rusza szybciej, bo rośnie powierzchnia styku ciała stałego z wodą. Gdybyś chciał, żeby działała wolniej, nie kruszyłbyś jej, a może nawet wybrał większą tabletkę.
:::

::: karta extra | Antyoksydanty w żywności
Tłuszcze z czasem jełczeją, bo tlen z powietrza reaguje z nimi. Dodatek przeciwutleniaczy (inhibitorów) spowalnia ten proces, dzięki czemu produkt dłużej zachowuje smak i zapach. To przykład celowego sterowania szybkością, a nie tylko jej obserwacji.
:::

## 8 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| Katalizator zużywa się w reakcji | Katalizator wraca do stanu wyjściowego i można go użyć ponownie | Bierze udział w etapach pośrednich, nie w bilansie końcowym |
| Katalizator zmienia ΔH reakcji | Katalizator obniża E_a, ΔH pozostaje takie samo | Zmienia się droga, nie poziomy substratów i produktów |
| Wyższa temperatura zawsze daje większą wydajność | Temperatura zmienia szybkość; wydajność może zmienić się w inny sposób (o tym w K08) | Szybkość i położenie równowagi to dwie różne sprawy |
| Rozdrobnienie zmienia masę substancji | Rozdrobnienie zmienia powierzchnię, masa zostaje taka sama | Szybkość zależy od powierzchni zetknięcia |
| Więcej reagentów zawsze oznacza dwukrotnie szybszą reakcję | Wpływ stężenia zależy od reakcji; kierunek jest zawsze taki sam | Nie każda reakcja zależy od stężenia tak samo |
:::

## 9 | Ćwiczenia z kluczem {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — Zn + HCl
Cynk reaguje z kwasem solnym. Podaj dwa sposoby na przyspieszenie reakcji bez zmiany użytego cynku i uzasadnij każdy z nich.
::: odp | Pokaż klucz
Zwiększyć stężenie kwasu (więcej cząsteczek HCl w tej samej objętości, więcej zderzeń). Podnieść temperaturę (więcej cząsteczek o energii co najmniej E_a). (1 pkt za każdy sposób z uzasadnieniem)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — rozdrobnienie
Dwie próbki cynku o tej samej masie reagują z tym samym kwasem: granulki i proszek. Która reaguje szybciej? Wyjaśnij, dlaczego.
::: odp | Pokaż klucz
Proszek reaguje szybciej, bo ma większą powierzchnię zetknięcia z kwasem, więc więcej miejsc może brać udział w zderzeniach w jednostce czasu. (1 pkt za wskazanie, 1 pkt za uzasadnienie przez powierzchnię)
:::
:::

::: karta exam | Zadanie 3 (2 pkt) — MnO₂ w rozkładzie H₂O₂
Nadtlenek wodoru rozkłada się powoli. Po dodaniu MnO₂ rozkład przyspiesza. Czy MnO₂ zmienia ilość tlenu, który powstanie? Czy jest zużywany? Uzasadnij.
::: odp | Pokaż klucz
MnO₂ nie zmienia ilości tlenu, który powstanie, bo nie zmienia ilości substratów ani produktów — tylko przyspiesza reakcję. Nie jest zużywany, bo po reakcji występuje w niezmienionej ilości. (1 pkt za każdą odpowiedź z uzasadnieniem)
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — plan doświadczenia
Zaprojektuj doświadczenie sprawdzające wpływ stężenia kwasu na szybkość reakcji Zn + HCl. Podaj: zmienną niezależną, dwie zmienne kontrolowane i sposób mierzenia szybkości.
::: odp | Pokaż klucz
Zmienna niezależna: stężenie kwasu (np. 0,5 mol/dm³ i 1 mol/dm³). Zmienne kontrolowane: masa i postać cynku, objętość kwasu, temperatura. Pomiar: czas zaniku cynku albo objętość wodoru zebrana w tym samym czasie. (1 pkt za zmienną niezależną, 1 pkt za zmienne kontrolowane, 1 pkt za sposób pomiaru)
:::
:::

::: karta exam | Zadanie 5 (2 pkt) — katalizator i równowaga
Czy dodanie katalizatora może zmienić stan równowagi reakcji? Odpowiedź uzasadnij.
::: odp | Pokaż klucz
Nie. Katalizator przyspiesza zarówno reakcję w przód, jak i wstecz, więc układ szybciej dochodzi do równowagi, ale jej położenia nie zmienia. (1 pkt za odpowiedź, 1 pkt za uzasadnienie o obu kierunkach)
:::
:::

## 10 | Fiszki {#fiszki}

::: fiszki
Jakie są cztery główne czynniki szybkości? | Stężenie (ciśnienie gazu), temperatura, rozdrobnienie, katalizator | basic:podstawa
Dlaczego wzrost stężenia przyspiesza reakcję? | Rośnie liczba zderzeń w jednostce czasu | basic:podstawa
Dlaczego wzrost temperatury przyspiesza reakcję? | Rośnie udział cząsteczek o energii co najmniej E_a | understand:temperatura
Dlaczego rozdrobnienie przyspiesza reakcję? | Rośnie powierzchnia zetknięcia reagentów | basic:podstawa
Co robi katalizator z E_a? | Obniża ją | basic:podstawa
Czy katalizator się zużywa? | Nie, występuje w niezmienionej ilości po reakcji | basic:podstawa
Czy katalizator zmienia ΔH? | Nie | understand:kataliza
Co robi inhibitor? | Spowalnia reakcję | basic:podstawa
Czy katalizator zmienia położenie równowagi? | Nie, tylko przyspiesza dojście do niej | understand:kataliza
Jak nazywamy zmienianie jednego czynnika naraz? | Kontrola zmiennych | understand:plan
Który metal reaguje szybciej z HCl: magnez czy żelazo? | Magnez | extra:szereg
:::

## 11 | Test {#test}

::: test
? Który czynnik zwiększa liczbę zderzeń cząsteczek w tej samej objętości?
+ wzrost stężenia reagentów
- dodanie inhibitora
- zmniejszenie powierzchni ciała stałego
- obniżenie temperatury
! Więcej cząsteczek w tej samej objętości oznacza więcej zderzeń.
? Katalizator:
+ obniża energię aktywacji i nie zużywa się w bilansie
- zmienia ΔH reakcji
- zużywa się, reagując z substratami
- zwiększa wydajność równowagi
! Katalizator zmienia drogę reakcji, nie poziomy substratów i produktów.
? Dlaczego proszek cynku reaguje z kwasem szybciej niż granulki o tej samej masie?
+ ma większą powierzchnię zetknięcia z kwasem
- ma większą masę
- ma niższą energię aktywacji
- wydziela więcej wodoru
! Szybkość zależy od powierzchni, a masa jest taka sama.
? Który zapis najlepiej opisuje doświadczenie z kontrolą zmiennych?
+ zmieniam jeden czynnik, pozostałe trzymam stałe
- zmieniam wszystkie czynniki naraz
- nie mierzę wyniku, tylko zapisuję wrażenia
- porównuję różne reakcje z różnymi reagentami
! Tylko przy jednej zmiennej niezależnej wynik można przypisać jej działaniu.
:::

## 12 | Słownik {#slownik}

::: slownik
Czynnik szybkości :: wielkość, która zmienia tempo reakcji, np. stężenie, temperatura, rozdrobnienie, katalizator
Rozdrobnienie :: stopień podziału ciała stałego na drobniejsze kawałki; im drobniej, tym większa powierzchnia
Katalizator :: substancja przyspieszająca reakcję przez obniżenie E_a, niezużywana w bilansie końcowym
Inhibitor :: substancja spowalniająca reakcję, np. przeciwutleniacz
Kontrola zmiennych :: zasada zmieniania jednego czynnika naraz przy stałych pozostałych
Zmienna niezależna :: czynnik celowo zmieniany w doświadczeniu
Zmienna zależna :: wynik, który mierzymy w doświadczeniu
:::

## 13 | Mosty {#mosty}

- Przed tą lekcją: K04 (szybkość i jej pomiar), K06 (zderzenia i energia aktywacji — tu rozwijamy je w kierunku czynników).
- Dalej: K07 (kataliza i mechanizmy), K08 (równowaga dynamiczna — tu zobaczysz, czym różni się wpływ na szybkość od wpływu na równowagę).

## 14 | Checklista — umiem… {#checklista}

- wymienić cztery główne czynniki szybkości i wyjaśnić każdy z nich,
- uzasadnić wpływ stężenia i temperatury na liczbę zderzeń skutecznych,
- wyjaśnić, dlaczego rozdrobnienie przyspiesza reakcje ciał stałych,
- odróżnić działanie katalizatora od działania inhibitora,
- zaprojektować doświadczenie z jedną zmienną niezależną i kontrolą zmiennych.
