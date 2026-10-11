# Ocena odpowiedzi różnych AI (do wyboru modelu i ulepszania promptów)

## 2026-10-11 — TRYB BADANIE, B2e Układ dokrewny (ten sam pakiet, 4 modele)

Surowe odpowiedzi: `biologia/plany/audyty/BADANIE_B2e_<model>_2026-10-11.md`.

| Miejsce | Model | Merytoryka | Składnia lekcji | Zasady kursu | Uwagi |
|---|---|---|---|---|---|
| 1 | **GLM 5.3 Flash (chat.z.ai)** | bardzo dobra; fakty z datami i źródłami (Banting/Thompson 1922, Nobel 1923, insulina z *E. coli* 1982, jodowanie soli 1997), mózg ok. 120 g glukozy/dobę, „negatywne znaczenie stresu” z podstawy | prawie poprawna: `## n | … {#id}`, karty exam z punktacją, `@opis`; test i fiszki nie w dialekcie, `karta dosw` zamiast `::: dosw`, `@zlewka` dla wykresu | przestrzega: brak harmonogramów, oznacza „(konkurs)”, przyznaje, czego nie ma w paczce | najlepszy wzorzec: poprawki P1–P5 do istniejących sekcji + nowe sekcje; drobne literówki („adrenalę”, „wytrzepanie”) |
| 2 | Gemini 2.5 Flash | bogata (oś podwzgórze–przysadka, hormony białkowe vs sterydowe, Graves i TSH — świetne zadanie, kijanki i tyroksyna, Ca²⁺ PTH/kalcytonina) | słaba: rozbite bloki kodu, rysunki ASCII, wymyślone kody `@model`, wykład w karcie extra, test bez dialektu | łamie: „System powtórek” z dniami | literówki („tężęczka”, „terytropina”, „Melatonia”, „wole nacięciowe”), wątpliwe skutki nadmiaru (tymozyna, testosteron) |
| 3 | nieznany (cytowania 【…】) | bogata, ale z błędami: „wątroba nie jest gruczołem”, mechanizm Gravesa jako „brak hamowania” | test/fiszki jako listy, `<details>` HTML | łamie: harmonogram powtórek z minutami | mnemotechnika FLAT PEG z endorfinami (nietypowa dla PL), niszowe hormony (adropina) |
| 4 | Grok 4.7 | poprawna, ale płytka; brak pełnego wykładu i testu | dobra (karty `:::`), ale nagłówki `#` | przestrzega | za krótka (ok. 10 KB) |

**Wnioski wprowadzone do `eksport/ULEPSZ_PROMPT.md` (Zasady 3–4 i „Dobre praktyki”) i `eksport/W1_PROMPT.md`:** ściąga składni (test, fiszki, słownik, zadania z `::: odp`, `::: dosw`), zakaz bloków kodu, ASCII, znaczników cytowań, harmonogramów powtórek i nowych kodów `@viz` (zamiast nich „Propozycja grafiki”), kontrola literówek w terminach, oznaczanie warstwy „(konkurs)”, informacja o brakach w paczce, poprawki P1, P2… + nowe sekcje.

**Do lekcji B2e (U10):** bazą odpowiedź GLM; dobrać z Gemini: hormony białkowe vs sterydowe, zadanie Graves/TSH, kijanki i tyroksyna, PTH/kalcytonina z zadaniem; z modelu A: tabela z podwzgórzem i szyszynką, cukrzyca 1/2 w klinice; poprawić błędy wymienione wyżej.
