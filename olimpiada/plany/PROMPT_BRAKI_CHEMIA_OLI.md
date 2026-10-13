# Braki w lekcjach chemii olimpijskiej (LKO 2026/27) — inwentarz i prompt dla AI

Stan: 2026-10-13. Terminy (wg źródła pośredniego, do potwierdzenia): etap I 23.10.2026 (60 min), etap II 26.11.2026 (90 min), etap III 26.02.2027 (90 min). Priorytet: etap I, potem II, potem III.

## Część A — inwentarz (dla autora repo)

### A1. Standard lekcji olimpijskiej (wzór: R07, N02, J03, X04)
Każda lekcja chemii olimpijskiej ma mieć: front matter z `stan`; blok `minimum` (10 pkt); `warstwy`; `rdzen`; `0.1 Jak pracować`; `0.2 Diagnoza` z kluczem; wykład „od zera”; co najmniej 2 mini-wykłady jako karty `understand | W skrócie`; co najmniej 1 doświadczenie (`dosw`); co najmniej 4 zadania `exam` z kluczem; 2 zadania `adv` (poziom konkursowy) z kluczem; fiszki 8–15; test 5 pytań; słownik 8–15; co najmniej 3 ciekawostki `extra`.

### A2. Stan każdej lekcji (sprawdzone 2026-10-13)

| Priorytet | Lekcja (plik w `chemia/che-modular/lessons-md/gotowe/`) | Co ma | Czego brakuje |
|---|---|---|---|
| **P1 etap I** | N01_powietrze_i_gazy | minimum, rdzeń, diagnoza, dosw 4, testy 12 | `exam` (0 → 4), `adv` (0 → 2), `stan`, extra 2 → 3, słownik |
| **P1 etap I** | REV01_powtorka_klasy_7 | minimum, rdzeń, diagnoza, dosw 2, testy 13, extra 6 | `exam` (1 → 4), `adv` (0 → 2), `stan`, słownik |
| **P1 etap I** | F02_materia_i_substancje | minimum, rdzeń, diagnoza, dosw 3, adv 4, testy 10, extra 5 | `exam` (1 → 4), `stan` |
| **P1 etap I** | F03_wlasciwosci_i_rozdzielanie | minimum, rdzeń, diagnoza, dosw 5, adv 4, testy 10 | `exam` (1 → 4), `stan` |
| **P1 etap I** | F16_od_obserwacji_do_modelu_reakcji | minimum, rdzeń, diagnoza, dosw 1, exam 2, testy 5 | `adv` (0 → 2), `dosw` (1 → 2), `stan`, słownik |
| **P1 etap I** | R03_woda_roztwory_stezenie_procentowe | minimum, rdzeń, diagnoza, dosw 2, exam 1, adv 3, testy 10 | `exam` (1 → 4), `stan`, słownik |
| **P1 etap I** | LKO_DIAG_diagnoza_wejsciowa | minimum, diagnoza, exam 7 | `rdzeń`, `0.1 Jak pracować`, `dosw`, `adv`, fiszki, test, słownik, `stan` |
| **P1 etap I** | LKO_pulapki_wapno_woda_wapienna | minimum, exam 2, extra 3 | `rdzeń`, diagnoza, `dosw`, `adv` (2), fiszki, test, słownik, `stan`, exam (2 → 4) |
| **P1 etap I** | LKO_KRZYWE_krzywe_rozpuszczalnosci | tylko treść, stan szkic, extra 3 | cały blok standardowy (minimum, rdzeń, diagnoza, dosw, exam ≥4, adv 2, fiszki, test, słownik) |
| **P1 etap I** | LKO_A1_symulacja_etap_I | treść symulacji, stan szkic, extra 3 | cały blok standardowy; zostawić arkusz, dodać klucz w karcie `odp` i sekcję „Jak zapisywać” (wykład) |
| **P1 etap I** | LKO_DOSW_katalog_doswiadczen | treść (24 zadania), extra 3 | cały blok standardowy; sekcja `dosw` jako karty (część treści już jest jako katalog) |
| P1 etap I | N02, N03, N04, N05 | pełne bloki, exam 2–7, adv 3–9 | N04 i N05: exam (2 → 4); N02–N05 extra ≥3 (sprawdzić) |
| **P2 etap II** | LKO_Z36_konfiguracje_do_z36 | minimum, exam 7, fiszki, test 5, słownik | `rdzeń`, diagnoza, `dosw`, `adv` (0 → 2), `stan`, `0.1` |
| **P2 etap II** | N06_wodorki | treść (W1+W2), extra 3, stan szkic | cały blok standardowy |
| **P2 etap II** | LKO_METALE_szereg_jonowe_otrzymywanie | treść, extra 3 | cały blok standardowy; dosw (doświadczenia z metalami) |
| **P2 etap II** | LKO_STECH_masy_stechiometria | treść, extra 3 | cały blok standardowy |
| **P2 etap II** | LKO_B1B2_zestawy_treningowe | zestawy, extra 3 | cały blok standardowy (klucze już są) |
| **P2 etap II** | LKO_SYM-A2_symulacja_etap_II | arkusz + klucz, extra 3 | cały blok standardowy; po poprawkach z 2026-10-13 gotowy do formy |
| **P2 etap II** | R01, R02, R04, R08, R09 | treść; brak bloków | patrz prompt `PROMPT_R_DUZE_BRAKI.md` (osobny) |
| **P3 etap III** | brak lekcji organicznych | — | nowe lekcje: alkany do C5 i halogenowanie; alkeny i addycja (Markownikow); alkohole (odczyn, Na, spalanie); kwas octowy i kwasy C1–C3; estry; glicerol; cukry; fermentacja; hydroliza; wzory elementarne i rzeczywiste; mol, masa molowa, Avogadro, objętość molowa (R04 i R06 częściowo) |

### A3. Dane do weryfikacji (z lekcji, przed audytem)
- Konfiguracja Ni: 4s¹3d⁹ (wyjątek) — potwierdzić.
- Temperatura gazu/galu ok. 30 °C — potwierdzić.
- Progi LKO (85/90/50/25%) — z nieczytelnego skanu regulaminu; potwierdzić.
- Rozpuszczalność KNO₃ 60 °C = 110 g/100 g H₂O (ujednolicona; odczyt z wykresu 108–112 g).
- Daty etapów i OCJ — do potwierdzenia.

### A4. Co nie jest zrobione (świadomie)
- Audyt W1/W2 wszystkich lekcji LKO — żadna nie ma statusu „W1”.
- Lekcje organiczne (etap III) — brak plików.
- Biologia olimpijska — osobny nurt (`olimpiada/PRIORYTETY.md`), tu tylko chemia.

## Część B — prompt dla zewnętrznego AI

Jesteś autorem lekcji chemii olimpijskiej dla ucznia klasy 8 (konkurs kuratoryjny LKO, etap szkolny, rejonowy lub wojewódzki). Dostajesz jedną lekcję w formie md (wklejoną w wiadomość) i masz ją **uzupełnić do standardu z części A1 bez usuwania istniejącej treści**. Nie korzystaj z żadnych linków ani zewnętrznych źródeł; wszystkie potrzebne dane są tutaj.

### B1. Zasady
1. Nie usuwaj i nie skracaj wykładów, zadań ani kluczy. Dodawaj i poprawiaj.
2. Każda zmiana liczby: wartość i kontekst. Wątpliwe oznacz „(do weryfikacji)”.
3. Bez czasu: żadnych „5 min”, planów dziennych ani limitów. Kurs do samodzielnej nauki.
4. Zakres etapu I: podstawa klasy 7 i 8 (substancje, budowa materii, reakcje, tlen, wodór, powietrze, woda i roztwory, wodorotlenki i kwasy, sole). Etap II dodaje: konfiguracje do Z = 36 (także jony), typy reakcji, wodorki (NH₃, HCl, H₂S), jonowe równania otrzymywania kwasów, wodorotlenków i soli, szereg aktywności metali, stechiometrię z nadmiarem. Etap III: organika i mol — poza tą lekcją.
5. Dane: masy H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35,5, K 39, Ca 40, Fe 56, Cu 64, Zn 65, Ag 108, Ba 137. Avogadro 6,02·10²³. KNO₃ w 60 °C = 110 g/100 g H₂O.

### B2. Co dopisać (w tej kolejności w pliku)
1. **Front matter**: `stan: "szkic — 2026-10-13, bez audytu W1"` (zawsze, jeśli brakuje).
2. `::: minimum | Muszę umieć — 10 punktów` z 10 konkretnymi punktami.
3. `::: warstwy` z czterema wierszami: `e8`, `understand`, `contest`, `extra`.
4. `::: rdzen | Rdzeń lekcji — najpierw to` z 4–6 odnośnikami do sekcji (kotwice `{#id}` w nagłówkach).
5. `## 0.1 | Jak pracować z lekcją {#jak-pracowac}` — 4–6 zdań, bez czasu.
6. `## 0.2 | Diagnoza {#diagnoza}` — 5 pytań i `::: odp | Klucz diagnozy` z punktacją, plus rozliczenie (5 / 3–4 / 0–2 pkt).
7. Mini-wykłady jako karty: `::: karta understand | W skrócie — tytuł` (co najmniej 2).
8. Doświadczenie (co najmniej 1): `::: dosw | Doświadczenie N — tytuł` z polami: Problem, Hipoteza, Sprzęt, Przebieg, Obserwacje, Wniosek, Bezpieczeństwo.
9. Zadania: co najmniej 4 karty `::: karta exam | Zadanie N (k pkt) — tytuł` z `::: odp | Pokaż klucz` po każdej.
10. Zadania konkursowe: 2 karty `::: adv | Zadanie N (k pkt) — tytuł | poziom ambitny` z kluczem: jedno z błędem w cudzym rozwiązaniu, jedno wieloetapowe (np. nadmiar + wydajność).
11. Fiszki: `:::: fiszki` z 8–15 liniami `Pytanie | odpowiedź | tag`.
12. Test: 5 pytań w składni `? pytanie` / `+ poprawna` / `- błędna` / `- błędna`.
13. Słownik: `:::: slownik` z 8–15 liniami `Pojęcie :: definicja`.
14. Ciekawostki: co najmniej 3 karty `::: karta extra | tytuł` (fakty sprawdzone).

Składnia dokładnie jak w kartach powyżej. Każde zadanie z kluczem; punkty w tytule karty = suma punktów w zadaniu.

### B3. Oddanie
- Jedna lekcja na odpowiedź: pełny plik md w bloku kodu ` ```markdown `, z nazwą pliku nad blokiem.
- Na końcu: sekcja „Do weryfikacji” — liczby i fakty, których nie jesteś pewien. Bez innych komentarzy.
- Kolejność pracy: P1 (etap I) → P2 (etap II) → P3 (etap III, nowe lekcje wg listy w A2).
