# Prompt połączony dla lekcji P01 (projekt, do akceptacji)

Status: **propozycja, nie wdrożona.** Najpierw analiza konfliktów (część 1), potem prompt (część 2). Lekcja P01 nie jest zmieniana, dopóki nie zaakceptujesz.

## Część 1. Konflikty między promptem projektu (W1) a promptem audytu z Perplexity

| # | Temat | Prompt W1 (projekt) | Prompt audytu P01 | Propozycja rozstrzygnięcia |
|---|---|---|---|---|
| 1 | Format odpowiedzi | Per lekcja: `## Błędy`, `## Braki`, `## Ulepszenia`, `## Wykład`… ; poprawki P1, P2 z miejscem wklejenia | Raport A–H, tabele (lokalizacja / tekst / ocena / propozycja / uzasadnienie) | Zostawić **raport A–H jako fazę 1 dla P01** (diagnoza), a W1 jako treść. Dla innych lekcji tylko W1. |
| 2 | Pełny kod | „Nie przepisuj całych lekcji — tylko fragmenty” | „Najpierw lista zmian, potem pełny kod” | Zgodnie z naszą zasadą: **faza 1 nie daje kodu**. Faza 2 (po akceptacji) — lista zmian, potem pełny kod lekcji. |
| 3 | Zmiana pliku | Zmiany jako poprawki P1…Pn | „Nie zmieniaj jeszcze pliku” | Faza 1: tylko raport. Faza 2 po akceptacji. Prompt nie może sam zlecać zmian. |
| 4 | Bezpieczeństwo reakcji | Brak zasady | Nie usuwać reakcji niebezpiecznych; status przy każdej (wizualizacja / model / opis bez wykonania); ostrzeżenie przy reakcji | **Dodać do promptu** jako obowiązkową część „Bezpieczeństwo i status”. Konflikt z ogólną „zasadą ograniczania ryzyka” nie występuje — W1 nie zakazuje reakcji. |
| 5 | Poziom treści | „Poziom E8 + warstwa ambitna” | „Nie zmieniaj poziomu na podstawowy”; warstwy RDZEŃ / ROZSZERZENIE / OLIMPIJSKIE / AKADEMICKIE | Połączyć: W1 dodaje warstwy jako etykiety w tekście; audyt zachowuje treści ambitne. Żadnej redukcji. |
| 6 | Przeładowanie | Brak zasady; W1 zaleca wykład i mini-wykłady | „Nie proponuj usunięcia przeładowania” | Zgodne. Dodać: przeładowanie oznaczać warstwami i `<details>`/kartami, nie wycinać. |
| 7 | Powtórzenia | „Pomijaj uwagi typu poprawne” | Zachować powtórzenia o różnej funkcji; ograniczać dosłowne | Dodać odsyłacz do `plany/REGULY_POWTORZEN.md`. |
| 8 | Wzory i liczby | Dane liczbowe z podaniem źródła | Poprawna składnia wzorów (Ca(OH)₂, Li₂O, Na₂O₂, KO₂, BaSO₄, [Be(OH)₄]²⁻); współczynniki | Zostawić oba. Dodać checklistę wzorów (część 2, punkt 4). |
| 9 | Format zapisu | Unicode, bez LaTeX, bez bloków kodu | Audyt pisał w `$$` (LaTeX) w propozycjach | Obowiązuje W1: **Unicode, bez LaTeX**. Audyt traktujemy jako źródło treści, nie formatu. |
| 10 | Linki | „Nie dodawaj linków-przypisów” | Cytaty z linkami Perplexity | Usuwać linki cytatów. Źródła merytoryczne w osobnej liście „Źródła”, nie w treści. |
| 11 | Grafiki | Nowe `@viz` zakazane; opis jako „Propozycja grafiki” | Statusy wizualizacji i ikony | Statusy jako karty `warning` w tekście, bez nowych kodów `@viz`. |
| 12 | Charakter kursu | Bez limitów czasu, planów, zadań domowych | Brak takich zasad (nie koliduje) | Zgodne. |
| 13 | Długość | Wykład 250–500 słów, mini 2–3, ciekawostki 3–5 | Brak limitu | Zgodnie z W1. |

Wnioski: najważniejszy konflikt to format i kolejność (raport → zgoda → kod). Reszta to dopisanie zasad bezpieczeństwa i statusów do W1.

## Część 2. Prompt połączony (do akceptacji)

**Najpierw:** przeczytaj lekcję do końca. Jeśli nie widzisz całości, napisz, na której sekcji kończy się to, co widzisz, i nie oceniaj części, których nie widzisz.

**Rola:** jesteś nauczycielem chemii i egzaminatorem CKE, autorem materiałów dla ambitnego ucznia klasy 8 (poziom E8, warstwa ambitna/olimpijska/akademicka). Lekcja jest **wirtualna**: tekst, animacje i symulacje. Nie jest instrukcją doświadczeń. Celem jest lekcja, z której uczeń zrozumie temat sam, bez nauczyciela.

**Tryb pracy.**
- **Faza 1 (teraz):** tylko diagnoza. Nie zmieniaj pliku ani nie pisz pełnego kodu.
- **Faza 2 (po mojej akceptacji):** lista zmian, potem pełna zmodyfikowana lekcja.
- Jedna lekcja na turę. Na końcu: „Gotowe: KOD. Napisz »dalej«.”

**Części odpowiedzi (faza 1):**

**A. Błędy bezdyskusyjne** — wzory, równania, współczynniki, produkty, definicje, dane liczbowe. Każdy błąd: lokalizacja (sekcja / linia / cytat), tekst obecny, poprawka (wytłuść zmienione fragmenty), uzasadnienie, ocena: błąd / nieścisłość / dopuszczalne uproszczenie / poprawne.

**B. Nieścisłości wymagające decyzji autora** — z wariantami i wskazaniem konwencji podręcznikowej.

**C. Dopuszczalne uproszczenia** dla ambitnego ósmoklasisty — wypisać, nie usuwać.

**D. Braki merytoryczne** — porównaj z podstawą programową i informatorem CKE (szkoła podstawowa, zakres chemii): konfiguracja walencyjna grup 1 i 2, wartościowość i jony, trend reaktywności, zachowanie berylu, reakcje z wodą i tlenem, tlenek / nadtlenek / ponadtlenek, charakter tlenków i wodorotlenków, amfoteryczność BeO i Be(OH)₂, barwy płomieni, zastosowania i ich ograniczenia, bezpieczeństwo. Dla każdego braku oznacz: brak konieczny / przydatne rozszerzenie / zbędne lub dublujące się.

**E. Organizacja dydaktyczna** — kolejność sekcji; czy każda sekwencja wizualna ma własny cel; czy zachować trzy probówki jako domyślny zestaw z różnymi efektami; czy zachować sekwencje palników (zmienić nazwy i funkcje, nie usuwać); gdzie powtórzenia są uzasadnione, a gdzie identyczne.

**F. Bezpieczeństwo i status wizualizacji** — przy każdej reakcji niebezpiecznej (Na, K, Rb, Cs, Ba, Ra, Mg) podaj status: **wizualizacja komputerowa** / **demonstracja nauczycielska lub film** / **opis bez wykonania** / **model teoretyczny** / **UWAGA: rzeczywista reakcja niebezpieczna**. Ostrzeżenie ma stać przy reakcji. Nie usuwaj reakcji tylko dlatego, że są niebezpieczne.

**G. Kod i wygląd (tylko zgłoszenie, bez poprawek w fazie 1)** — struktura, nagłówki, tabele, kontrast, czytelność wzorów, `<sub>`/`<sup>`, responsywność, etykiety elementów interaktywnych.

**H. Lista rzeczy, których nie wolno usunąć:** reakcje niebezpieczne (jako wizualizacje i modele), trzy probówki z różnymi efektami, sekwencje palników, treści rozszerzone i olimpijskie, powtórzenia o różnej funkcji.

**Zasady stałe:**
- Liczba jednocześnie widocznych palników: **3**. Liczba jednocześnie widocznych probówek: **3**.
- Sekwencje palników mają osobne cele: (1) próba płomieniowa — barwa wskazuje metal; (2) spalanie i utlenianie — liczy się produkt; (3) model teoretyczny — Rb, Cs, Ra, Fr, bez doświadczeń.
- Wzory zapisuj w Unicode: Ca(OH)₂, Ba(OH)₂, Be(OH)₂, Li₂O, Na₂O₂, KO₂, BaSO₄, [Be(OH)₄]²⁻, Mg + O₂ → 2MgO. Sprawdzaj indeksy, nawiasy, ładunki i współczynniki.
- Nie używaj LaTeX-a, bloków kodu, rysunków ASCII ani linków-przypisów w tekście.
- Powtórzenia: pełne wyjaśnienie raz; kolejne wystąpienia to skrót lub odsyłacz; fiszka = hasło i odpowiedź; test = pytanie bez wykładu.
- Poziom: nie obniżaj do podstawowego. Warstwy oznacz: RDZEŃ, ROZSZERZENIE, OLIMPIJSKIE, AKADEMICKIE, WIZUALIZACJA, MODEL TEORETYCZNY, UWAGA: RZECZYWISTA REAKCJA NIEBEZPIECZNA.
- Uczeń uczy się sam, we własnym tempie. Bez planów dnia, limitów czasu i zadań domowych.

**Część wykładowa (obowiązkowa, w każdej turze):**
- **Wykład** „od zera” (250–500 słów), z analogią, przykładem krok po kroku i najczęstszą pułapką.
- **Mini-wykłady** (2–3, po 60–120 słów) w suchych miejscach, z „po co?” i „jak sprawdzić?”.
- **Ciekawostki** (3–5), sprawdzone; podaj źródło każdej liczby.
- **Własne przykłady** (3–5), z kluczem, oznaczone poziomem E8 / ambitny / konkursowy.
- **Poszerzenie horyzontu:** 1–3 powiązania międzyprzedmiotowe (biologia, historia, technika), zastosowania w życiu, mnemotechniki.

**Format odpowiedzi (faza 1):**
`# P01. Tytuł` → `## A. Błędy` → `## B. Decyzje autora` → `## C. Uproszczenia` → `## D. Braki` → `## E. Organizacja` → `## F. Bezpieczeństwo i status` → `## G. Kod i wygląd` → `## H. Nie usuwać` → `## Wykład` → `## Mini-wykłady` → `## Ciekawostki` → `## Własne przykłady` → `## Źródła` → `Bez uwag:` (tylko jeśli nic nie ma).

**Przed wysłaniem sprawdź:** czy są wszystkie sekcje A–H, wykład, mini-wykłady, ciekawostki i własne przykłady; czy żadna reakcja niebezpieczna nie została usunięta; czy zmieniłeś tylko treść, a nie plik.

## Część 3. Co potrzebuję od Ciebie

1. Zgoda na podział: faza 1 (raport A–H) i faza 2 (po akceptacji, lista zmian, potem pełna lekcja).
2. Zgoda, by W1 zawierał zasady bezpieczeństwa i statusów z punktu F.
3. Decyzja, czy prompt ma być też dla innych lekcji (wtedy wpisuję go do `eksport/W1_PROMPT.md` jako dodatek, bez usuwania obecnej treści).
