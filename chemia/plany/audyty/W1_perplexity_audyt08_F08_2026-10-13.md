# F08. Od konfiguracji do układu okresowego — audyt

## Błędy

1. **[§11 Test, pytanie 5]** Pytanie „Dla którego pierwiastka numer grupy równa się liczbie elektronów walencyjnych?" ma dwie poprawne odpowiedzi według samej lekcji. Słownik i §2 liczą dla bloku d walencyjne jako ns + (n−1)d, więc Fe (grupa 8, 6 + 2 = 8) też spełnia warunek, a nie tylko Na. Poprawka: P1.
2. **[§8 Fiszki]** Fiszka „[Ar] 4s² 4p⁴ → Se" jest błędna. Taki zapis ma 18 + 2 + 4 = 24 elektrony (to byłby Cr). Selen (Z = 34) to [Ar] 3d¹⁰ 4s² 4p⁴. Poprawka: P2.
3. **[§5 Wykład, akapit 1]** Są tu dwa błędy:
   - „Po zapełnieniu powłoki elektronowej zaczyna się nowy okres" jest fałszem: okres 3 kończy się na 3p⁶, choć powłoka M nie jest pełna (3d jest pusta). Nowy okres zaczyna się po zapełnieniu podpowłoki np.
   - Długości „2, 8, 8, 18, 18, 32 (w skróconej tablicy, z pominięciem f)" są sprzeczne: 32 to okres z blokiem f, więc „bez f" byłoby 18. Brakuje też drugiego okresu 32 (okres 7).

   Poprawka: P3.
4. **[§6 Klinika, przykład „siarka i selen"]** Opis „Ma rację co do grupy, ale myli okres" opisuje błąd, którego uczeń nie popełnił (w treści nie ma żadnego twierdzenia o okresie). Zmień scenariusz. Poprawka: P4.
5. **[§11 Ciekawostki, karta „Układ okresowy ma ponad jeden kształt"]** Nazewnictwo jest odwrotne. Standardowa tablica szkolna (18 kolumn, f pod spodem) to forma „długa". Forma z blokiem f w środku ma 32 kolumny (szeroka/„rozszerzona"). Krótka (8 grup) to stara tablica Mendelejewa. Poprawka: P5.
6. **[Minimum pkt 5, 8, 9 vs. §0 „warstwy" E8]** W „Muszę umieć na E8" są punkty o blokach d (Fe, Mn, suma ns + (n−1)d). Warstwa E8 deklaruje tylko bloki s i p. Przenieś punkty 5, 8, 9 do warstwy ambitnej (`[[extra]]`).
7. **[Spójność F06 ↔ F08 — elektrony walencyjne bloku d]** F06 mówi, że reguła „numer grupy ↔ elektrony walencyjne" nie obejmuje metali przejściowych, a F08 słownik i §2 liczą walencyjne d jako ns + (n−1)d. Ustal jedną konwencję. Poprawka: P1 (ramka).
8. **[§1 reguła „okres = najwyższe n"]** Nie ma wyjątku Pd ([Kr] 4d¹⁰, najwyższe n = 4, a leży w okresie 5), choć F06 §2 go omawia. Dopisz jedno zdanie. Poprawka: P6.
9. **[§4, adv „E. Ambitne" + klucz]** Blok `::: odp` jest poza blokiem `::: adv`, więc klucz może się wyświetlić jako osobny element. Zagnieźdź klucz w bloku zadania. Etykieta „E" stoi też przed ćwiczeniami A–D z §7 — zmień na „Zadanie ambitne 4A".
10. **[§7 C.2, klucz]** „Umownie liczymy 10 + 2 = 12" nie wyjaśnia, dlaczego Zn jest w grupie 12, a nie 2. Poprawka: P7.
11. **[Pytanie przewodnie §0.2]** Pytanie „Mg czy Cl — który jest metalem i jak to widać po pozycji" nie dostaje odpowiedzi w lekcji. Poprawka: P8.
12. **[§10 Test]** Tylko 5 pytań, wszystkie o prostym odczycie. Brak pytań o hel, o odczyt Z → położenie i o zapis powłokowy. Poprawka: U2.

## Poprawki (gotowy tekst)

**P1 – §10 Test, pytanie 5 (zastąp całe pytanie) + ramka konwencji w §2**

> ? Dla którego pierwiastka grup głównych numer grupy jest równy liczbie elektronów walencyjnych?
> + Na (grupa 1)
> - Cl (grupa 17)
> - Al (grupa 13)
> - S (grupa 16)
> ! Tylko w grupach 1–2 numer grupy = liczba e⁻ walencyjnych. W grupach 13–18 trzeba odjąć 10.
>
> **::: karta warning | Konwencja dla bloku d**
> W grupach 3–12 numer grupy = suma elektronów na ns i (n−1)d. To **reguła położenia**, a nie liczba elektronów biorących udział w wiązaniach — Fe w związkach oddaje 2 lub 3 elektrony, a nie 8. Liczbę elektronów walencyjnych w sensie „biorą udział w wiązaniach" dla metali przejściowych ustala się z konkretnego związku.
> :::

**P2 – §8 Fiszki, wiersz o selenie**

> Pierwiastek [Ar] 3d¹⁰ 4s² 4p⁴? | Se (selen), okres 4, grupa 16 | extra:ambitne

**P3 – §5 Wykład, zastąp pierwszy akapit**

> Gdy dodajemy kolejny proton do jądra i kolejny elektron do atomu, nowy elektron zajmuje najniżej energetyczne wolne miejsce (F07). Okres kończy się, gdy zapełni się podpowłoka p (albo 1s w okresie 1) — wtedy zaczyna się nowa powłoka i nowy okres. Stąd długości okresów: 2, 8, 8, 18, 18, 32, 32 (okresy 6 i 7 z blokiem f). Pierwiastki w tej samej grupie mają tę samą liczbę elektronów walencyjnych, więc podobny sposób tworzenia wiązań.

**P4 – §6, zastąp scenariusz i klucz klinicznego przykładu**

> Uczeń widzi, że siarka (Z = 16) i selen (Z = 34) mają po 6 elektronów walencyjnych, i wnioskuje: „Selen leży w okresie 3, tak jak siarka."
>
> Klucz: Ta sama grupa (16) oznacza taką samą liczbę elektronów walencyjnych, ale okres zależy od najwyższej powłoki. Selen: [Ar] 3d¹⁰ 4s² 4p⁴ → n = 4 → okres 4. Siarka: n = 3 → okres 3. Grupa i okres to dwa niezależne parametry.

**P5 – §11, karta „Układ okresowy ma ponad jeden kształt" (zastąp treść)**

> W szkole używa się tablicy 18-kolumnowej (forma długa) z lantanowcami i aktynowcami pod spodem. Gdy blok f wstawimy między grupy 2 i 3, powstaje tablica 32-kolumnowa — najlepiej widać w niej kolejność zapełniania podpowłok. Starsza forma krótka (8 grup, A/B) pochodzi od Mendelejewa. Wszystkie pokazują ten sam porządek według liczby atomowej.

**P6 – §1, dopisz po „Uwaga" zdanie**

> Jedyny pierwiastek, dla którego „okres = najwyższe n" zawodzi, to pallad: [Kr] 4d¹⁰ ma najwyższe n = 4, ale leży w okresie 5 (F06 §2). Na E8 ten wyjątek nie występuje.

**P7 – §7 C.2, zastąp klucz**

> Cynk ma na końcu zapełnioną podpowłokę 3d¹⁰ i kończy blok d, który zajmuje grupy 3–12. Dwa elektrony 4s plus dziesięć 3d daje 12, czyli ostatnią kolumnę bloku d. Grupa 2 to blok s (zapełnianie ns²). Warto wiedzieć, że według ściślejszej definicji IUPAC cynk nie jest pierwiastkiem przejściowym, bo ma zapełnioną podpowłokę d we wszystkich związkach — to różnica definicji, a nie błąd w obliczeniu grupy.

**P8 – dopisz po §0.5 Wykład (odpowiedź na pytanie przewodnie)**

> **Odpowiedź na pytanie przewodnie.** Mg: [Ne] 3s² — blok s, grupa 2, po lewej stronie układu → metal (oddaje 2 elektrony → Mg²⁺). Cl: [Ne] 3s² 3p⁵ — blok p, grupa 17, po prawej → niemetal (przyjmuje 1 elektron → Cl⁻). Ten sam okres (3 powłoki), inna liczba elektronów walencyjnych, więc inny charakter.

## Uzupełnienia

**U1. Brakujący zapis E8: z konfiguracji powłokowej K, L, M do położenia (§7, nowy blok A2).** Egzamin zwykle podaje zapis typu K²L⁸M⁵. Wklej:

> **::: karta exam | A2. Z zapisu powłokowego (E8, 4 pkt)**
> Dla atomów o podanym zapisie podaj okres, grupę i symbol: 1) K²L⁸M⁵ 2) K²L⁷ 3) K²L⁸M⁸N¹ 4) K²L⁸M⁸N²
> ::: odp | Pokaż klucz
> 1) okres 3, grupa 15 (5 + 10), P. 2) okres 2, grupa 17, F. 3) okres 4, grupa 1, K. 4) okres 4, grupa 2, Ca. (po 1 pkt)
> :::
> :::
>
> Reguła: liczba zapełnionych powłok = okres; liczba elektronów na ostatniej powłoce = elektrony walencyjne (grupa = to samo dla 1–2, to + 10 dla 13–18).

**U2. Dodatkowe pytania do Testu (§10):**

> ? Dlaczego hel (1s²) stoi w grupie 18, a nie w grupie 2?
> + jego powłoka walencyjna jest zapełniona jak u gazów szlachetnych
> - ma 2 elektrony walencyjne, więc to blok p
> - ma najwyższe n = 2
> - bo jest gazem
> ! Hel jest w bloku s, ale grupa 18 to grupa zapełnionej powłoki.
>
> ? Atom o konfiguracji K²L⁸M⁶ leży w:
> - okresie 2, grupie 16
> + okresie 3, grupie 16
> - okresie 3, grupie 6
> - okresie 6, grupie 3
> ! 3 powłoki → okres 3; 6 e⁻ walencyjnych → 6 + 10 = 16.
>
> ? Który atom leży w tym samym okresie co sód?
> - K
> - Li
> + Mg
> - Ca
> ! Na i Mg mają po 3 powłoki; K i Ca — 4; Li — 2.
>
> ? Pierwiastek [Ar] 3d¹⁰ 4s² 4p⁴ leży w:
> - okresie 3, grupie 14
> + okresie 4, grupie 16
> - okresie 4, grupie 6
> - okresie 3, grupie 16
> ! Najwyższe n = 4; walencyjne 4s² 4p⁴ = 6 → grupa 16.

**U3. Własne przykłady (z kluczem)**

> **F1 — Znajdź błąd (E8, 2 pkt).** „Mn ma konfigurację [Ar] 3d⁵ 4s², więc ostatnie zapełnione to 3d, czyli leży w okresie 3 i grupie 5."
> **Klucz:** Okres to najwyższe n, czyli 4 (4s), a nie 3 (1 pkt). Grupa 7 (5 + 2), nie 5 (1 pkt).
>
> **F2 — Z numeru Z do położenia (ambitny, 4 pkt).** Pierwiastek ma Z = 33. Zapisz konfigurację skróconą, podaj okres, grupę, blok i czy jest metalem.
> **Klucz:** [Ar] 3d¹⁰ 4s² 4p³ (1 pkt); okres 4, grupa 15 (1 pkt); blok p (1 pkt); As — półmetal, leży przy schodkowej granicy (1 pkt).
>
> **F3 — Przypadek graniczny (ambitny, 3 pkt).** Miedź ma konfigurację [Ar] 3d¹⁰ 4s¹, a nie 3d⁹ 4s². Czy to zmienia jej grupę? Uzasadnij.
> **Klucz:** Nie (1 pkt). Suma ns + (n−1)d = 10 + 1 = 11 (też 9 + 2 = 11), więc grupa 11 w obu zapisach (1 pkt). Miedź leży w okresie 4, bloku d (1 pkt).
>
> **F4 — Długość okresu (konkursowy, 3 pkt).** Ile pierwiastków ma okres 5? Które podpowłoki się w nim zapełniają, i jakim gazem szlachetnym się kończy?
> **Klucz:** 18 (1 pkt): 5s (2) + 4d (10) + 5p (6) (1 pkt). Kończy się ksenonem Xe (Z = 54) (1 pkt).
>
> **F5 — Dwa kryteria (E8, 3 pkt).** Pierwiastki X i Y mają zapis K²L⁸M⁷ i K²L⁸M⁸N⁷... (podaj, czy możliwy) — jeśli niemożliwy, popraw.
> **Klucz:** Drugi zapis jest błędny: powłoka M ma 8, a elektrony N zaczynają się od 4s¹ i 4s², więc 7 elektronów na N bez 3d¹⁰ nie istnieje w modelu szkolnym (powłoka M musi mieć 18, zanim w N pojawi się 4p). Poprawnie dla Br: K²L⁸M¹⁸N⁷ (okres 4, grupa 17) (3 pkt: błąd, uzasadnienie, poprawka).

**Bez uwag:** poprawne i bez zmian są: klucz diagnozy; procedura „konfiguracja → grupa"; przykłady Se i Br (Z = 34 i 35); klucze do ćwiczeń A–D (Sb Z = 51); długości okresów w ciekawostce 2 (2, 8, 8, 18, 18, 32); klucze testu 1–4.
