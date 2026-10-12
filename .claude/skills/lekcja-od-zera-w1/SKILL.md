---
name: lekcja-od-zera-w1
description: Pisanie pełnej lekcji od zera do „W1 FULL" w repo Repo_Edukacyjny_E8 (CHE, BIO, POL, ANG) — struktura, logiczne limity (fiszki, testy, zadania, ciekawostki, powtórzenia), sprawdzenie i audyt W1. Użyj przy każdej nowej lekcji albo przebudowie lekcji.
---

# Lekcja od zera do W1 FULL

Cel: uczeń siedzi sam z tekstem i rozumie temat bez nauczyciela. Lekcja ma być kompletna, ale nie może puchnąć przy kolejnych przebudowach — dlatego obowiązują **limity logiczne** (poniżej), nie „ile KB”.

## 0. Start (krótko)
1. `CLAUDE.md`, potem przekazanie przedmiotu (`chemia/che-modular/PRZEKAZANIE.md` lub `biologia/bio/PRZEKAZANIE.md`).
2. Wzorce: dla chemii `N01_tlenki.md`, dla biologii `BIO.02.L010…md` (struktura, wykład, karty). Czytaj tylko wybrane sekcje (`grep -n '^## '`).
3. Zasady audytu i wprowadzania uwag: `eksport/ULEPSZ_PROMPT.md` (Zasada nr 1: nic nie usuwać; nr 3: składnia).

## 1. Kolejność sekcji lekcji
1. Frontmatter: `kod`, `tytul`, `opis`, `plakietki`, `stopka`, opcjonalnie `typ: test` albo `typ: powtorka` (tylko gdy lekcja jest testem/powtórką — podnosi limity). Na końcu `stan: NOWA — model, data`.
2. `lead` (2 zdania: co uczeń umie po lekcji).
3. Minimum E8 (krótka karta `minimum-card`).
4. **Wykład — …** (dokładnie jedna sekcja, 300–600 słów, od zera: pytanie → wyjaśnienie → przykład → co z tego wynika).
5. Sekcje tematyczne: definicja, zasada, przykład liczbowy z rozwiązaniem, pułapka (`warning`).
6. Mini-wykłady „W skrócie — …” (`understand`), tylko w suchych miejscach, najwyżej 3.
7. Zadania egzaminacyjne (`karta exam`) z kluczem i punktacją.
8. Klinika błędów (typowe błędy ucznia).
9. Test krótki, fiszki, słownik.
10. Ciekawostki (`karta extra`, 3–5), mosty do innych lekcji, audyt (karta `AUDYT W1`).

## 2. Limity (sprawdza `python3 narzedzia/limity_lekcji.py plik.md`)
| Element | zwykła lekcja | `typ: test/powtorka` |
|---|---|---|
| fiszki (jeden termin z lekcji, bez duplikatów) | ≤ 30 | ≤ 60 |
| pytania testu (`? …`) | ≤ 5 | ≤ 25 |
| zadania egzaminacyjne | ≤ 6 | ≤ 15 |
| słownik | ≤ 25 haseł | ≤ 60 |
| sekcje `##` | ≤ 25 (więcej → podział na dwie lekcje) | ≤ 40 |
| ciekawostki | 3–5 | 3–5 |
| mini-wykłady „W skrócie” | ≤ 3 | ≤ 3 |
| wykłady „Wykład — …” | dokładnie 1 | dokładnie 1 |
| powtórzone akapity (≥ 60 znaków) | 0 | 0 |

Zasady ponad liczby:
- Fiszka = termin, który w lekcji został wyjaśniony. Nie robimy fiszki z każdego zdania.
- Test to kontrola zrozumienia, nie drugi podręcznik. Pytania w teście nie powtarzają fiszek.
- Nowe zadanie zamiast kolejnego podobnego: jeśli dwa zadania sprawdzają to samo, zostaje jedno.
- Powtórek nie wklejamy: jeśli coś jest w wykładzie, nie kopiujemy zdania do mini-wykładu.

## 3. Autoukrywanie fiszek (szablon)
Fiszki ponad 6 są ukryte przez `szablon/lekcja.js`: pokazuje się pierwsze 6 fiszek (atrybut `data-fz-pierwsze` na `.flashcard-grid` zmienia liczbę) i przycisk „▼ Pokaż pozostałe N fiszek”. Nie trzeba nic pisać w md. Druk pokazuje wszystkie.

## 4. Sprawdzenie przed oddaniem (w tej kolejności)
1. `python3 narzedzia/limity_lekcji.py plik.md` — brak ❌ (⚠ to podpowiedź, nie blokada).
2. `python3 narzedzia/sprawdz_wyklady.py` — wykład, mini-wykłady, ciekawostki.
3. Build: `python3 narzedzia/lekcja_html.py -p <przedmiot> plik.md` (BIO: `biologia/bio/narzedzia/md2html_bio.py`). Grafiki: każda `@viz`/`@model` ma `@opis`.
4. Fakty, liczby, klucze zadań sprawdzone; liczby niepewne oznaczone „(orientacyjnie)”.

## 5. W1 FULL
1. Paczka dla recenzenta: `eksport/W1_PROMPT.md` (pełny prompt) lub `python3 eksport/paczka_gotowa.py …`.
2. Wszystkie uwagi wprowadzić (błędy, braki, ulepszenia, ciekawostki, mnemotechniki); odrzucone z powodem w karcie „AUDYT W1” (`Nieprzyjęte: …`).
3. Dopiero po tym `stan: W1 FULL — <model>, <data>` (nie wcześniej). Urwana odpowiedź → `FULL częściowo (do §…)`.
4. Po zmianach: znowu limity i build.

## 6. Odpowiedź końcowa
1–4 zdania po polsku: co napisane, wynik limitów (liczby), co dalej (np. paczka do W1).
