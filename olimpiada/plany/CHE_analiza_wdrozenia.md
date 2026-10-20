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

## 6. Korekta: cel konkursu już jest w repo (2026-10-13)

`olimpiada/PRIORYTETY.md` (stan 2026-10-08) opisuje konkursy **LKO** (Lubelskie Kuratorium Oświaty): etap szkolny → rejonowy → wojewódzki. Zakresy 2025/26 są oficjalne. Terminy 2026/27 są niepotwierdzone: chemia ~23.10, biologia ~21.10. To jest ten sam schemat, na który wskazuje plan sprintu, więc **D6 jest rozstrzygnięty na LKO**. Zestawienie OChJ (5.11) to inny konkurs i nie jest celem, chyba że szkoła zgłosi do niego ucznia.

Konsekwencje:
- Plan sprintu (`CHE_tryb_OLK8_sprint_ORYG.md`) i PRIORYTETY.md opisują to samo. Na razie nie rozwijam sprintu osobno: przy pracy ogólnej wchodzi do PRIORYTETY.md jako kolejka chemii.
- Kolejność tematów wg PRIORYTETY (C1–C4, R03A, N01, REV01) zastępuje tabelę T0/T1 z sprintu, dopóki nie ma regulaminu 2026/27.
- Do potwierdzenia u nauczyciela: terminy 2026/27 i zakres, bo zakres 2026/27 w repo jeszcze nie jest oficjalny.

## 7. Weryfikacja OCJ 2026/27 (2026-10-13)

Plik `OCJ_2026_27_realne_dane_ORYG.md` (kopia) twierdzi: etapy 5.11 / 10.12 / 11–12.03, etap I jako test zdalny, zakres = podstawa SP + 5 dodatków, mol poza zakresem, rejestracja od 14.09.

Potwierdzone (lista olimpiad SP kuratorium Kraków, lipiec 2026, `kuratorium.krakow.pl/wp-content/uploads/2026/07/olimpiady-dla-uczniow-szkol-podstawowych.pdf`):
- OCJ: I etap 5.11.2026, II etap 10.12.2026, III etap 11–12.03.2027.
- **Przypis w tej liście: OCJ NIE daje zwolnienia z egzaminu ósmoklasisty** („Nie dotyczy”). Zestawienie z wcześniejszego pliku mówiło co innego — błąd tamtego zestawienia.

Niepotwierdzone (brak w źródłach, które udało się otworzyć):
- format etapu I (zdalny?), rejestracja (od 14.09?),
- zakres 2026/27 i pięć dodatków (amoniak, cykliczne, halogenopochodne, analiza jakościowa, praktyka),
- że mol jest poza zakresem.

Źródło zakresu: oficjalny regulamin OCJ na edukator.pl (2025 jest w sieci jako PDF; 2026/27 nie znalazłem). Zakres wiedzy LKO (`PRIORYTETY.md`, pkt 2) to inny konkurs i nie można go mieszać z OCJ.

Skutek dla planu: daty OCJ są pewne, zakres i format nie. Przed budową zestawów A1–A4 trzeba pobrać regulamin OCJ 2026/27 albo potwierdzić zakres u nauczyciela. Bez tego N06 (amoniak) jest tylko hipotezą.

## 8. Wskazówka: start z województwa lubelskiego (2026-10-13)
Uczennica startuje z województwa lubelskiego. Ścieżka praktyczna to więc LKO (etap szkolny → rejonowy → wojewódzki, `PRIORYTETY.md` pkt 1–2), a nie sama OCJ. Wyszukiwanie nie potwierdziło, czy OCJ w Lubelskiem idzie przez kuratorium. Do ustalenia u nauczyciela: czy etap szkolny (LKO) i OCJ są dwoma osobnymi zgłoszeniami, czy jednym.

## 9. LKO: co potwierdzono, a czego nie (2026-10-13)
- Podany przez użytkownika link `kuratorium.lublin.pl/?akc=drnews&id=14268` jest zablokowany dla robotów (robots.txt), więc nie da się go pobrać. Wyszukiwanie nie znalazło terminarza LKO 2026/27.
- Data **20.10.2025** (etap szkolny chemii) dotyczy **roku 2025/26**, nie 2026/27. Nie potwierdza terminu 2026/27 (repo: ~23.10, niepotwierdzone).
- Do zamknięcia: plik „Terminarz eliminacji 2026/2027” i „Zakresy wymagań” z kuratorium Lublin albo info od nauczyciela. Bez tego zakres i daty w `PRIORYTETY.md` pozostają orientacyjne.

## 10. LKO 2026/27 — dokumenty oficjalne (potwierdzone 2026-10-13)
Pliki: `olimpiada/plany/LKO_2026_27/` (terminarz, regulamin, zakresy + wyciąg chemii `chemia_zakres_2026_2027.md`).

**Terminarz (chemia):**
- Etap szkolny: **23.10.2026**, start 9:00, 60 min, wyniki dla dyrektorów 6.11.2026.
- Etap rejonowy: **26.11.2026**, start 9:00, 90 min, wyniki 16.12.2026.
- Etap wojewódzki: **26.02.2027**, start 10:00, 90 min, wyniki 17.03.2027.
- Ostateczna lista wojewódzka: do 15.01.2027 (rejonowy); lista laureatów: do 23.04.2027.

**Zakres chemii 2026/27 — zmiany względem 2025/26:**
- Etap I: pkt I–V podstawy (nie I–VII), plus: konfiguracje elektronowe grup 1, 2, 13–18 do Z = 36 (także jony); typy reakcji; wzory z wartościowości i obliczeń.
- Etap II: pkt I–VIII, plus: **wodorki niemetali (amoniak, chlorowodór, siarkowodór)**; sole z innej soli; jonowe równania otrzymywania kwasów, wodorotlenków, soli; szereg aktywności metali; kwasy z soli; masy cząsteczkowe; stechiometria (także niestechiometryczna).
- Etap III: wszystko z II + pkt VII, IX, X (alkany do C5, halogenowanie, addycja do alkenów wg Markownikowa, alkohole, kwas metanowy/etanowy/propanowy, estry, glukoza/fruktoza/sacharoza/skrobia/celuloza, fermentacja, hydroliza, wzory elementarne, mol/Avogadro/masa molowa/objętość molowa).
- Kalkulator prosty dozwolony na każdym etapie.

**Skutki dla planu:**
- **N06 (amoniak) jest w zakresie od etapu II (26.11), nie etapu I (23.10).** Odpowiedź zewnętrzna zakładała etap I — wymaga przesunięcia.
- Etap szkolny (23.10) to pkt I–V + konfiguracje do Z = 36, bez wodorków i stechiometrii.
- Organika (węglowodory, alkohole, estry, cukry) dopiero etap III (26.02.2027) — zgodnie z PRIORYTETY sekcja 3.
- PRIORYTETY.md zaktualizowany o te daty (commit w tej sesji).
