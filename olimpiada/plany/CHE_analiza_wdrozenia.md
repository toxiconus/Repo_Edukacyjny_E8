# Chemia — analiza wdrożenia planów (olimpiada kl. 8, gałąź osobna)

Źródła (pełne kopie, nic nie gubimy):
- `CHE_analiza_sciezka_kl8_ORYG.md` — ścieżka „bieżąco + pomost LO + olimpiada” (3 moduły, faza 0–C)
- `CHE_tryb_OLK8_sprint_ORYG.md` — sprint przed etapem szkolnym (tier T0–T3, sesje 0–11)

Gałąź: `claude/olimpiada-8-sprint` (osobna od `claude/che-lekcje`). Priorytet: olimpiada dla wszystkich przedmiotów; chemia i matematyka są obecnie niżej (polski ma już szkolny, angielski i biologia są w olimpiadzie).

## 1. Decyzje do potwierdzenia przez autora

| # | Pytanie | Co wynika z plików | Propozycja |
|---|---|---|---|
| D1 | Kopiować lekcje do `olimpiada/` czy nie? | `olimpiada/PRZEKAZANIE.md` §2 i CLAUDE.md: **jedna lekcja = jeden plik MD**, bez kopii między projektami; warstwy 2–4 dopisuje się w tej samej lekcji. Autor napisał: „część kopiować, część nowe”. | Nie kopiować treści. Lekcje wspólne zostają w `chemia/che-modular/lessons-md/`. Do `olimpiada/` idą tylko nowe rzeczy: zestawy OLK8, diagnoza, bank zadań, plan trybu. Jeśli chcesz kopie — trzeba zmienić CLAUDE.md. |
| D2 | Czy plan dzienny („sesja 1, D+1, 60–90′”) może być w repo? | CLAUDE.md: w lekcjach bez znaczników czasu i planów dziennych (kurs samodzielny). Plan sprintu to nie lekcja. | Plan sprintu tylko w `olimpiada/plany/` i jako tryb, nie w plikach lekcji. |
| D3 | Zakres etapu szkolnego | Plik sprintu wymaga regulaminu tej edycji (zakres, czy organika wchodzi). Bez niego zestawy i mapowanie są przybliżone. | Wkleić zakres z regulaminu (lub link). |
| D4 | Kolejność działań | Sprint dotyczy etapu za 1–2 tygodnie; plik ścieżki zakłada ważniejszy kurs E8/pomost LO na kwiecień–sierpień. | Najpierw sprint (tylko T0+T1), potem ścieżka. Zgadzasz się? |
| D5 | Nazwy plików | Nazwy z ścieżki (np. `00/CHE.00.OLK8.tryb.md`) kolidują z konwencją `chemia/…` (`CHE.00.*` jest w `chemia/lekcje_md/00/`). | Nazwy bez zmian, o ile nie kolidują z istniejącymi. Nowe pliki sprintu: `olimpiada/chemia/CHE.OLK8.*.md`. |

## 2. Stan repo dla tieru T0/T1 (zweryfikowane grepem, 2026-10-13)

| Kod | Temat | Plik w repo | Rozmiar | Uwaga |
|---|---|---|---|---|
| N01 | powietrze i gazy | `lekcje_md/N/CHE.02.N01…` | 33,8 KB | jest; do sprintu tylko fragmenty (wykrywanie gazów) |
| N02 | tlenki | `lekcje_md/N/CHE.02.N02…` | 38,2 KB | jest |
| N03 | wodorotlenki | `lekcje_md/N/CHE.02.N03…` | 31,4 KB | jest |
| N04 | kwasy | `lekcje_md/N/CHE.02.N04…` | 36,2 KB | jest |
| N05 | sole | `lekcje_md/N/CHE.02.N05…` | 38,3 KB | jest (plik ścieżki: „✅”) |
| N06 | wodorki | `lekcje_md/N/CHE.02.N06…` | 1,0 KB | pusty, poza sprintem |
| F09 | wartościowość, SU | `lekcje_md/F/CHE.01.F09…` | 40,6 KB | jest |
| F12 | wzory | `lekcje_md/F/CHE.01.F12…` | 28,3 KB | jest |
| F17 | równania | `lekcje_md/F/CHE.01.F17…` | 44,2 KB | jest |
| J01 | dysocjacja | `lekcje_md/J/CHE.04.J01…` | 22,1 KB | jest |
| J02 | pH/wskaźniki | `lekcje_md/J/CHE.04.J02…` | 14,3 KB | jest |
| J03 | reakcje jonowe | `lekcje_md/J/CHE.04.J03…` | 10,5 KB | jest |
| J04 | strącanie | `lekcje_md/J/CHE.04.J04…` | 9,8 KB | jest |
| J11 | identyfikacja jonów | `lekcje_md/J/CHE.04.J11…` | 4,6 KB | cienka, rozbudować |
| R03 | stężenie % | **brak** w `lekcje_md/` | — | plik ścieżki podaje „✅”; sprawdzić, czy jest w `gotowe/` lub pod inną nazwą |
| R02 | rozpuszczalność | `lekcje_md/R/CHE.03.R02…` | 4,8 KB | cienka, plan: suplement |
| X01 | redoks | **brak** w `lekcje_md/` | — | w planie jako B3.1 |
| R04 | mol | **brak** | — | poza sprintem (T3) |
| REV01 | powtórka kl. 7 | do sprawdzenia | — | plik ścieżki: „○ P1”, czyli pusty |

Wniosek: T0 i T1 da się złożyć z gotowych lekcji (N, F, J), wymaga to głównie zadań i krótkich kart. Braki do napisania od zera: zestawy OLK8 (8 szt.), diagnoza, test symulacyjny, suplement krzywych R02, sprawdzenie R03 i X01.

## 3. Rozbieżności między dwoma dokumentami
- Ścieżka mówi, że szkoła jest w solach (dział II kl. 8). Sprint zakłada etap szkolny za 1–2 tygodnie. Obie tezy mogą być prawdziwe, ale trzeba potwierdzić, czy sole są już omówione w szkole (wpływa na T0).
- Ścieżka: „w kl. 8 olimpiady chemii nie ma, są konkursy przedmiotowe”. Sprint: „etap szkolny”. Chodzi o konkurs przedmiotowy, nie o Olimpiadę Chemiczną — nazwę w planach ujednolicić.
- Sprint zakłada, że „organika (O01+)” może wejść do etapu; ścieżka mówi o zakresie rejonowym. Rozstrzyga regulamin (D3).

## 4. Kolejność proponowana (po akceptacji D1–D4)
1. Regulamin i zakres → tabela „punkt zakresu → lekcja → tier → stan” (tylko `olimpiada/plany/`).
2. Diagnoza wejściowa (15–20 zadań) z F20/F21 i poprzednich zawodów.
3. Zestawy OLK8 (8 szt.) jako `olimpiada/chemia/CHE.OLK8.zestaw_NN.md`, każdy z kluczem.
4. Tryb: playlisty i progi w `olimpiada/chemia/CHE.OLK8.tryb.md`.
5. Lekcje wspólne: tylko dopisanie warstwy OL w tym samym pliku (zgodnie z PRZEKAZANIE §2), po akceptacji D1.

## 5. Zestawienie olimpiad SP 2026/2027 (plik `OLIMPIADY_SP_2026_2027_zestawienie_ORYG.md`) — co zmienia w planie

Weryfikacja wyszukiwaniem (2026-10-13). Plik to zestawienie AI, nie źródło oficjalne; każdy termin trzeba potwierdzić na stronie organizatora.

**Olimpiada Chemiczna Juniorów (OChJ, edukator.pl)** — według zestawienia:
- Etap I: zdalny test 5.11.2026; etap II: zdalny test 10.12.2026; etap III: 11–12.03.2027.
- Zakres etapu I: podstawa programowa SP (substancje, budowa materii, reakcje, tlen/wodór, powietrze, woda i roztwory, wodorotlenki i kwasy, sole, reakcje amoniaku). **Organika nie wchodzi przed etapem II.**

**Sprzeczność z planem sprintu:** sprint (`CHE_tryb_OLK8_sprint_ORYG.md`) opisuje etapy „szkolny → rejonowy → wojewódzki” za 1–2 tygodnie. Ta struktura pasuje do **wojewódzkiego konkursu przedmiotowego (kuratoryjnego, WKP)**, a nie do OChJ. Wojewódzkie konkursy mają własne regulaminy i zakresy (przykłady: Kielce — `przedmiotowy-regulamin-konkursowy-viii-wojewodzki-konkurs-z-chemii-2026-2027`; Warszawa — projekt programu chemii 2026/27). **Dla Lubelskiego (Kraśnik) nie znalazłem jeszcze regulaminu kuratorium Lublin.**

**Do rozstrzygnięcia (D6):** który konkurs jest celem sprintu — WKP (kuratorium Lublin, termin od kuratorium) czy OChJ (5.11.2026 — za ok. 3 tygodnie)? Od tego zależą zakres T0/T1 i kalendarz. Plan sprintu trzeba przepisać po wyborze.

**Terminy już minęły (sprawdzić, czy udział był):** OLiJP etap I 2.10.2026; OJAJ etap I test 12.10.2026; OMJ etap I część testowa 24.09 i zadaniowa 7.10.2026. Przy angielskim: test 12.10 minął wczoraj.

**Do weryfikacji:** zestawienie twierdzi, że laureaci z wykazu MEN dostają 100% z egzaminu ósmoklasisty i pierwszeństwo w rekrutacji — trzeba potwierdzić w komunikatach MEN (`gov.pl/web/edukacja`) przed użyciem w materiałach dla ucznia.

**Biologia:** zestawienie mówi, że Główna Olimpiada Biologiczna jest raczej dla LO; dla klasy 8 — konkursy wojewódzkie/kuratoryjne. Ta sama logika co D6.
