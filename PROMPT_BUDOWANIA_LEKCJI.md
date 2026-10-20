# Prompt dla mnie: budowa i ulepszanie lekcji (CHE, BIO, inne)

Ten plik czytam przed każdą nową lekcją i przed każdą przebudową. Zasady z `CLAUDE.md` mają pierwszeństwo; tu jest sposób pracy, który daje lepsze lekcje niż obecne.

## 0. Zanim zacznę pisać

1. **Sprawdź stan, nie zgaduj.** Otwórz listę (`ls`, `wc -c`) i zdecyduj, czy plik to szkielet, czy treść. Szkielet = sekcje z jednym zdaniem, pytania bez odpowiedzi, placeholdery („DO UZUPEŁNIENIA”, „Zaawansowane.”), brak wykładu. Treść = wykład, przykłady z rachunkami, klucze.
2. **Źródło czytam wybiórczo.** Nagłówki (`grep -n '^#'`), potem tylko potrzebne sekcje. Pliki > 50 KB: najpierw `grep`, potem fragment.
3. **Wiem, co już jest.** `BIO_KATALOG.md`, lista grafik `szablon/wizualizacje/`, lista gotowych lekcji. Nie tworzę grafiki, która już istnieje, i nie dublują tematu innej lekcji.
4. **Piszę od zera, nie kopiuję szkieletu.** Źródło służy do zakresu i nazw; treść piszę sam.

## 1. Struktura każdej lekcji (kolejność jest zasadą)

1. Frontmatter: `kod`, `uid`, `tytul`, `opis`, `kicker`, `lead`, `plakietki`, `stopka`, `stan`.
2. `minimum` — 6–10 zdań, które uczeń musi umieć (bez żargonu bez wyjaśnienia).
3. `warstwy` — co jest w podstawie, rozumieniu, konkursie, ambitnym.
4. `rdzen` — „najpierw to” z linkami do kotwic.
5. **Wykład od zera** (karta `understand`) — zaczynam od obrazu z życia, definiuję każde pojęcie przy pierwszym użyciu, nie zakładam wiedzy spoza lekcji.
6. **Mini-wykłady** (karta „W skrócie”) — przy każdym suchym miejscu; po jednym na ~2 sekcje.
7. Przykłady prowadzone krok po kroku z danymi i wnioskiem (min. dwa na lekcję).
8. Klinika błędów: tabela `Błąd | Poprawnie | Dlaczego?`, min. 4 wiersze, każdy błąd realny.
9. Ćwiczenia z kluczem: min. 5 zadań, każde z `karta exam` i `odp`, z punktacją w kluczu. Ostatnie zadanie to problem/myślenie.
10. Fiszki (min. 8), słownik (min. 8 haseł), test (min. 6 pytań, każde z `!` wyjaśnieniem), ciekawostki (3–5 kart `extra`), mnemotechniki, „co dalej”, checklista.
11. Sekcja „Pochodzenie i sprawdzenie treści” — co jest z kanonu, co moje, co do weryfikacji. Liczby zawsze z zaznaczeniem „orientacyjne” lub „do W1”.

## 2. Jakość merytoryczna — reguły twarde

- **Liczby i stałe:** podaję wartość i jednostkę. Jeśli nie jestem pewien co do wartości z pamięci, piszę „orientacyjnie” i wpisuję do sekcji weryfikacji. Nie wymyślam źródeł ani dat.
- **Rachunki sprawdzam dwa razy** — zwłaszcza znaki (ΔH, ΔS, ΔG), jednostki (kJ vs J, K vs °C), zaokrąglenia. Każde zadanie z kluczem ma policzoną odpowiedź.
- **Nie mieszam poziomów.** Podstawa E8 nie zawiera ΔG; jeśli temat wykracza poza podstawę, oznaczam kartą `extra` albo `exam` i mówię to w `uwaga`.
- **Nie utożsamiam pojęć** bez wyjaśnienia (np. homologia/analogia, eutrofizacja/presja, ΔG/ΔG°′). Każdą parę pojęć, którą uczeń może pomylić, umieszczam w klinice.
- **Unikam skrótów myślowych jako faktów** („wiązanie wysokoenergetyczne” wyjaśniam, nie powtarzam).
- **Dydaktyka:** najpierw obraz, potem definicja, potem wzór. Każdy wzór ma słowny opis co oznacza każda litera.

## 3. Grafiki i opisy (obowiązkowe)

- Grafika tylko, gdy pomaga zrozumieć (proces, zależność, porównanie). Nie dla ozdoby.
- Najpierw sprawdzam katalog i wybieram istniejącą. Nową tworzę jako komponent w `wizualizacje/`, nie jednorazowo w lekcji.
- Każda grafika i obraz ma linię `@opis` pod sobą: co widać, jakie elementy, co się zmienia, jaki wniosek ma wyciągnąć uczeń. Build to egzekwuje; nie obchodzę tego.

## 4. Zakres kursu — co sprawdzać, zanim uznam blok za skończony

- Ekologia (BIO.04): populacje i liczebność, obiegi C/N/P, biomy i ekosystemy Polski, sukcesja w treści podstawowej — nie tylko w „ambitnie”.
- Organizm człowieka (BIO.07): każdy układ z podstawy III ma swoją lekcję; porównuję listę z kanonem.
- Chemia: po 52 gotowych zostają K07, K09–K11, J11–J12 oraz szkielety bloków O, E, X, R, A, P, N06–N08. Kolejność: K i J (najbliżej już zrobionych), potem R, N, X, E, O, A, P.
- Każdą lekcję sprawdzam po buildzie: `sprawdz_wyklady.py` (0 braków) oraz test przeglądarki/build dla danego przedmiotu.

## 5. Przebudowa istniejącej lekcji (ulepszanie bez utraty danych)

1. Przed zmianą zapisuję `wc -c` i listę sekcji.
2. Wszystko, co usuwam, trafia do logu `POMINIETE_*.md` z sekcją i powodem. Wyjątek: czysto logi audytów i oczywiste duplikaty — tylko wskazuję je w logu, bez treści.
3. Nie zmieniam sensu poprawnej treści dla stylu. Poprawiam fakty, rachunki i niejasne zdania.
4. Po przebudowie porównuję: `git diff --stat`, liczbę kluczy i fiszek przed i po. Liczba zadań z kluczem i fiszek nie może spaść.

## 6. Proces pracy (kolejność operacji)

1. Przeczytać ten plik i `CLAUDE.md` (sekcja dla przedmiotu).
2. Sprawdzić stan i zakres (sekcja 0 i 4).
3. Napisać lekcję w jednym pliku `write`, nie w kawałkach, jeśli mieści się w ~40 KB; dłuższe dzielić na blok wykładu i blok ćwiczeń.
4. Zbudować (`md2html`/`md2html_bio.py`), potem `sprawdz_wyklady.py`, potem test przedmiotu w tle (`nohup`, log do scratchpadu).
5. Naprawić błędy buildu jednym skryptem z `assert count==1`, nie przez wiele edycji.
6. Commit z opisem „co / test / co dalej” i trailerami z systemu. Push tylko na `claude/che-lekcje`.
7. Wpis w `PROGRESS.md` (chemia) albo `PRZEKAZANIE.md` (bio).

## 7. Komunikacja z użytkownikiem

- Krótko, po polsku. Co zrobiłem, wynik testu, co dalej — bez opisu każdego kroku.
- Jeśli coś usunąłem z pliku — mówię to i wskazuję log.
- Jeśli czegoś nie wiem albo liczby są niepewne — mówię wprost i zaznaczam do weryfikacji.
- Nie pytam, o co nie trzeba; jeśli zakres jest jasny, idę dalej.

## 8. Kontrola końcowa (przed zamknięciem zadania)

- [ ] Każde pojęcie wprowadzone przed użyciem.
- [ ] Każdy wzór z opisem liter i jednostek.
- [ ] Każde zadanie z kluczem policzone; znaki i jednostki sprawdzone.
- [ ] Każda grafika ma `@opis`.
- [ ] Brak placeholderów i zdań „DO UZUPEŁNIENIA”.
- [ ] Liczby niepewne oznaczone „orientacyjnie” i wpisane do weryfikacji.
- [ ] Log usunięć zapisany.
- [ ] Build OK, wykłady 0 braków, test OK, commit i push wykonane.

## 9. Reguły z przeglądów zewnętrznych (uwzględnione w kolejnych lekcjach)

Źródło: przegląd lekcji REV05 przez zewnętrzny model. Przyjmuję wybrane uwagi zgodne z naszymi ustaleniami, nie całość.

**Definicje i modele:**
- Wartościowość zawsze „względem wybranego pierwiastka” (wodór lub tlen). Definicja z jednostkami wartościowości, nie samo „liczba wiązań”.
- Nie tłumaczę wartościowości mechanizmem „oddaje / przyjmuje N elektronów” dla wartości większych niż I. Pokazuję przykłady (np. N w NH₃ = III względem H, N w N₂O₅ = V względem O).
- Wartościowość ≠ ładunek ≠ stopień utlenienia. Bilans ładunków jest sprawdzeniem tylko dla prostych związków jonowych, z wyraźnym zastrzeżeniem.
- Wiązanie jonowe: opisuję jony (kationy, aniony) i ich przyciąganie; „przeniesienie elektronów” to model szkolny; „metal + niemetal” to przybliżenie oznaczone jako uproszczenie.

**Schematy i przykłady:**
- Schemat reakcji (np. AB + C → AC + B) pokazuje typ, nie gwarancję zajścia reakcji.
- Spalanie w schemacie: całkowite spalanie węglowodorów; przy niedoborze tlenu inne produkty — zaznaczam.
- Przykłady bez toksycznych substancji tam, gdzie da się inaczej (rtęć → H₂O₂).
- Nie sugeruję samodzielnych doświadczeń z kwasami poza nadzorem i zasadami pracowni.
- Nietrwałe związki („SO”) nazywam „nietrwałe w zwykłych warunkach”, nie „nie istnieją”. Wyjątki i mieszane tlenki (np. Fe₃O₄) są spójne z ciekawostkami.
- Zadanie niejednoznaczne → przeformułować albo przenieść do warstwy lo z wiarygodnym kontekstem.

**Zakres podstawy — sprawdzam w §4 przy każdym bloku fundamentów:**
- zapis H, H₂, 2H, 2H₂ (co oznacza indeks i współczynnik);
- zapis A i Z przy symbolu (np. ³⁵Cl);
- liczba elektronów walencyjnych oddzielona od wartościowości;
- jony Na⁺, Mg²⁺, Al³⁺, Cl⁻, O²⁻ i ich elektrony;
- wzory strukturalne prostych cząsteczek (H₂, Cl₂, H₂O, CO₂, CH₄);
- ustalanie wartościowości z podanego wzoru (nie tylko budowanie wzoru);
- sprawdzanie toku rozumowania, nie tylko wyniku.

**Nazewnictwo:** lekcja fundamentów to „wybrane fundamenty” w jednym cyklu, nie „pełna powtórka” — opis zakresu w `lead` i `uwaga`.

**Rejestr:** przy przeglądzie zewnętrznym w „Pochodzeniu” tabela: przyjęte / nieprzyjęte z powodem.

**Poza treścią lekcji** (kontrast, dostępność, zwijanie sekcji, podział na moduły): decyzje szablonu, nie lekcji — sprawdzam w wersji lekkiej (szablon `lekcja_html.py`).
