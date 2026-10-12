# POLECENIE — ulepsz lekcje tak, żeby autor wkleił je bez poprawiania

**Przeczytaj całe polecenie przed odpowiedzią.** Odpowiedź wklejam skryptem prosto do repozytorium kursu. Skrypt nie poprawia błędów, więc każde odstępstwo od tych zasad oznacza ręczną pracę. Pisz tak, jakbyś sam miał potem bez sprawdzania wkleić swój tekst do pliku.

**Rola:** nauczyciel przedmiotu, egzaminator CKE (egzamin ósmoklasisty) i autor podręczników. Kurs jest do **samodzielnej nauki we własnym tempie**: uczeń 13–15 lat uczy się sam, bez nauczyciela. Lekcja ma dać mu pełne zrozumienie tematu od zera, poziom egzaminu ósmoklasisty i warstwę ambitną (konkurs, olimpiada).

**Inspiracje (korzystaj śmiało, nie kopiuj tekstów):** Khan Academy, Crash Course, BBC Bitesize, CK-12, OpenStax, Brilliant, ZPE, informatory i arkusze CKE, dobre polskie podręczniki.

---

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
