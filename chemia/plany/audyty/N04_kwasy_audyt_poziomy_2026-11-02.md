# N04 Kwasy — audyt zewnętrzny (poziomy E8) i wprowadzone zmiany, 2026-11-02

| # | Uwaga audytu | Decyzja | Gdzie |
|---|---|---|---|
| 1 | Oznaczyć poziomy (muszę umieć / rozszerzenie / ponad program) | WPROWADZONE | klasy poz-must/poz-e8/poz-roz/poz-pon (`poziomy: tak`), legenda, plakietki |
| 2 | Filtr „tylko E8” / „E8 + rozszerzenie” / „wszystko” | WPROWADZONE (+ tryb „Muszę umieć”) | pasek „Pokaż” nad lekcją; zapamiętywany w przeglądarce |
| 3 | Definicja E8 bez Brønsteda | WPROWADZONE | minimum pkt 1; Brønsted → karta „Rozszerzenie” (poz-roz), §1.2 bez zmian |
| 4 | H₂SO₄: skrót vs dysocjacja stopniowa | WPROWADZONE | minimum pkt 4 |
| 5 | H₃PO₃ poza torem E8 | WPROWADZONE (nic nie skasowane) | wiersz tabeli i „Uwaga 2” → poz-pon |
| 6 | HF poza „muszę umieć”, krótko „słaby kwas” | WPROWADZONE | jedna linia E8 + 6.3 jako rozszerzenie |
| 7 | Exp. 6 — ostrożnie z elektrolizą | WPROWADZONE | §5.7 i Exp. 6 przeredagowane |
| 8 | Exp. 2 — BHP „pyk” | WPROWADZONE | Exp. 2 BHP |
| 9 | Ściąga „E8 w 5 minut” | WPROWADZONE (6 równań, 3 pułapki, 5 doświadczeń, kolory wskaźników) | karta #sciaga |
| 10 | Doświadczenia: kapusta, balon/wulkan, skorupka, rdza | WPROWADZONE | Exp. 11–14 (nowe, domowe, z kontrolą i @opis); kapusta była już w tabeli wskaźników §7 |
| 11 | Wirtualny tester pH (suwak NaOH) | JUŻ ISTNIEJE — nie dublujemy | modele ph-indicators-v03, gfx-scene-titration, titration-merged w §7/§14 |
| 12 | Quiz po każdej sekcji | WPROWADZONE dla §1–3, 5–7, 9 | karty „Sprawdź się” (poz-must) |
| 13 | Tryb „E8 exam” | = tryb „Muszę umieć” | pasek filtra |
| 14 | Interaktywna tabela kwasów, „przewidź produkty”, mapa pojęć | JUŻ ISTNIEJĄ (kw-reszty-v01, reakcje-kwasu-v03, mapa myśli §20) | — |
| 15 | Błędne odpowiedzi z wyjaśnieniem (Cu + HCl) | WPROWADZONE w quizie §9 (pole `!`); też w reakcje-kwasu-v03 | — |
| 16 | Ka/pKa, bufory, miareczkowanie, kwasy utleniające → ponad program | WPROWADZONE | auto z plakietek/ramek; §9.1.2 przemianowane na „ponad program” |
| 17 | Wulkan z płynem do naczyń jako osobne doświadczenie | ODRZUCONE jako osobne: ten sam gaz co w Exp. 12 — wariant opisany w jego „Wniosku” (unikamy dubla) | Exp. 12 |

## Dopisek (klocki)
N04 dostało 17 działających w pliku klocków z istniejącej bazy (manifest `lekcje.N04`): tester-przewodnictwa, przeniesienie-protonu, dysocjacja-vs-jonizacja, probowki-odczyn (§7 i Exp. 4, 5, 11–14), probowki-wybor (metale-HCl, węglan+kwas), zbieranie-gazu (Exp. 2), rownania-jonowe, gra-klasyfikacja, karta-bhp, wzor-2d. Stare `@model`/`@zlewka` zostają (działają w aplikacji). Nie przeniesione na klocki: pH-skala/miareczkowanie, bufor, kwaśne deszcze, rozcieńczanie, kw-reszty, kw-wlasciwosci — do zrobienia jako nowe klocki.

## Dopisek 2
Nowe klocki `kwasy_modele.js`: ph-skala, miareczkowanie (mocny/słaby), bufor, kwasy-reszty, kwasy-wlasciwosci, kwasy-rozcienczanie, kwasne-deszcze — zastępują 7 wcześniej niedziałających modeli. Dodano 4 wzory strukturalne (wzor-2d: CH₃COOH, H₂SO₄, HNO₃, H₃PO₄) w §2 oraz kartę „Definicja kwasu — krok po kroku” (poz-must, z odpowiedziami) rozwijającą pkt 1 minimum.

## Audyt 2 (uproszczenie dla ucznia klasy 8) — 2026-11-02
| Uwaga | Decyzja |
|---|---|
| Nie zaczynać od „dysocjuje na kationy i aniony” — najpierw „kwas w wodzie oddaje H⁺” | WPROWADZONE: minimum pkt 1, §1.1 i karta „Definicja krok po kroku” zaczynają od wersji prostej; wersja dokładna w nawiasie/rozwinięciu |
| Trudne słowa w nawiasach | WPROWADZONE: nawiasy przy jon/kation/anion/dysocjacja/wskaźnik/egzotermiczne + karta „Trudne słowa po ludzku” |
| Ogranicz listę kwasów do 6 | WPROWADZONE: minimum pkt 3 = sześć do zapamiętania, reszta jako „dodatkowo (rozszerzenie)”; klocek kwasy-reszty: sześć + „dodatkowo” |
| Ciekawostki/dodatki wyraźnie oddzielone | JUŻ WPROWADZONE (filtr poziomów) |
| Niejasny zapis HCl(g) / bezwodny kwas octowy | WPROWADZONE (wiersz tabeli testera przewodnictwa) |
| Zdanie o smaku | WPROWADZONE (minimum pkt 8, karta definicji) |
| Rozpoznawanie kwasu po H na początku / OH na końcu | WPROWADZONE z zastrzeżeniem (H₂O, CH₄ to nie kwasy) |
| Reszta kwasowa: ile H oddał, taki ładunek | WPROWADZONE (tabela w karcie definicji) |
| pH bez logarytmów (pH 2 ≈ 10× bardziej kwaśne niż 3) | WPROWADZONE (słowniczek, ściąga) |
| Wskaźniki: tylko trzy; zdanie o fenoloftaleinie | WPROWADZONE (ściąga, minimum) |
| Cztery schematy reakcji + pułapka Cu/Ag/Au | JUŻ BYŁO w ściądze „E8 w 5 minut” |
| Skrócić całą lekcję | CZĘŚCIOWO: długie treści nie zostały usunięte (zasada: bez utraty danych), tylko ukrywane filtrem „Muszę umieć”/„E8” |

## Audyt 3 (drobne poprawki) — 2026-11-02
| Uwaga | Decyzja |
|---|---|
| Dysocjacja H₂SO₄/H₃PO₄ — dopisek „stopniowo” przy głównym równaniu | WPROWADZONE (§5.2, ramka Uwaga) |
| „H₂SO₃/H₃PO₄ średniej mocy” → słaby | WPROWADZONE (minimum, tabela §6, klocek kwasy-reszty): słaby, ale mocniejszy niż ocet / typowe słabe |
| Woda destylowana „praktycznie nie świeci” | WPROWADZONE (tabela testera) |
| Cu/Ag/Au — wyjątek HNO₃ przy samej regule | WPROWADZONE (ściąga i reguła w §9) |
| „nad kat.” w H₂ + S | WPROWADZONE: „po podgrzaniu, w obecności katalizatora” |
| P₂O₅ — umowny skrót | WPROWADZONE (ramka: P₄O₁₀ + 6H₂O → 4H₃PO₄) |
| Silikażel ≠ H₂SiO₃ | WPROWADZONE (tabela zastosowań) |
| „Lepsze wzory 2D” z bazy | Klocek wzor-2d (C2D v3): grupa="none" nie działało w prostym rendererze — NAPRAWIONE (naprawia też H₂SO₄/H₃PO₄ w C1c); komunikat „walencja niezgodna: S 6 z 2” dla H₂SO₄ — NAPRAWIONE (S, P, N, Cl z rozszerzoną walencją); dodano model kulkowy z wolnymi parami i kątami (rozszerzenie) |
| „Lepsze grafiki” (gfx: burette, pHmeter, pHscale, splash, fumes, foam, thermometer) | NIE PRZENIESIONE — leżą w dużym silniku (gfx/chemia), nie w klockach; do zrobienia jako osobny port |

## Dopisek 3 (zlewki z małej bazy)
Znaleziony w repo mały silniczek `engine/src/lite/rx-lite.js` (SVG: zlewka, probówka w statywie, tygiel, palnik; ciało stałe, bąbelki, piana, opary, osad, barwa wskaźnika). Nowy klocek `zlewka-rx` (+ dane doświadczeń kwasowych) pokazuje w lekcji: Zn/Cu + HCl, CaCO₃ + HCl, zobojętnianie z fenoloftaleiną, CuO + H₂SO₄ (ogrzewanie), cukier + H₂SO₄ (pokaz), soda/skorupka/rdza + ocet. Zastępuje wcześniejsze probówki w Exp. 4, 5, 12–14. Duże sceny gfx (biureta, pehametr) wymagają dużego silnika — nie używane.
