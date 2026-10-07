# BIOLOGIA: PODSTAWA PLUS — v3.9 (pełny, ulepszony, bez utraty treści · L050/L090 → v4.0)

**Wersja v3.9** · 2026-09-12  
**Źródła scalone:** v2.3c + v3.3 + v3.4 + v3.5 + v3.6 + ulepszenia v3.7 (rozwinięcie słabszych lekcji: L001–L003, L014, L016, L030–L044, L050, L090 — pełna warstwa dydaktyczna 6A–6D, 11A–11D, Klinika 2.0, drabinka trudności, sekcje „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego").  
**Zasada:** żadna treść nie została usunięta. Dla każdej sekcji wybrano najpełniejszą wersję i dodano warstwę v3.7.  
**Priorytet dydaktyczny:** L011, L013, L015, L017, L020 (najbogatsze) — teraz także L030–L044 i L001–L003 (rozbudowane w v3.7).
**Indeks obowiązujący:** `L000-INDEKS-ROKU_MASTER_v1.0.html` (zakładka Biologia). Audyt: `BIOLOGIA_INDEKS_AUDYT.md`.  

---

## ZASADA HTML LEKCJI (2026-09-13)

W HTML lekcji **nie** dajemy:
- paska postępu (progress bar),
- checkboxów w spisie treści,
- localStorage postępu / „resetuj postęp”.

Spis treści = zwykłe kotwice. Tempo ucznia jest dowolne. Fiszki i „Pokaż odpowiedzi” zostają.


## SPIS TREŚCI

| Blok | Zawartość |
|------|-----------|
| SYSTEM | Filozofia, schemat lekcji (z warstwą dydaktyczną), format obserwacji, klinika, mnemotechniki, 80/20, powtórki, probabilistyka, słownik, indeks |
| L001–L002 | Powtórki (rozbudowane w v3.7) |
| GENETYKA_SYSTEM / SYSTEM_GENETYKA | Łańcuch pytań, typy zadań, banki, rodowody, probabilistyka |
| L003 | Diagnoza (rozbudowana w v3.7) |
| L010–L021 | Genetyka — pełne z warstwą dydaktyczną (najdłuższe wersje) |
| L030–L044 | Ewolucja i ekologia — pełne (rozbudowane w v3.7) |
| L050, L090 | Pełne MASTER v4.0 (z poprawione.md) |
| WARSTWA_B_MASTER | B1–B10 |
| WARSTWA_C_GRAFIKA | C1–C9 |
| SVG_ASSETS | 9 plików |
| BACKLOG | Świadomie odłożone |
| WARSTWA_WIZUALNA | Znaczniki i struktura |
| STATUS | Stan pakietu |

---

## UWAGA REDAKCYJNA

**Zasada v3.7 (no-content-loss + audyt kompletności + warstwa dydaktyczna + rozwój słabszych lekcji):**

> **Każde trudne zadanie w teście musi mieć wcześniej przygotowany fragment teorii, przykład prowadzony lub analogiczne ćwiczenie.**  
> Żadna sekcja nie została skrócona względem najlepszej dostępnej wersji źródłowej.  
> **v3.7 dodaje:** pełną warstwę dydaktyczną (6A–6D, 11A–11D) do L001–L003, L014, L016, L030–L044, L050, L090; Klinikę 2.0 we wszystkich lekcjach; drabinkę trudności; sekcje „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego".

Test nie może wyprzedzać podręcznika. Sekwencja lekcji (gdzie obecna):

```
5. ŚCIĄGA — PODSTAWA
6. WYJAŚNIENIE OD PODSTAW
6A. DLACZEGO? (przyczynowo-skutkowo)
6B. KROK PO KROKU
6C. PRZYKŁAD PROWADZONY (autor rozwiązuje za ucznia)
7. POZIOM AMBITNY
8. POZIOM ZAAWANSOWANY
9. KLINIKA BŁĘDÓW (+ Dlaczego ten błąd powstaje)
10. OBSERWACJA / MODEL
11. ĆWICZENIA
11A. MINI-CHECK (5 pytań przed ćwiczeniami)
11B. ĆWICZENIE PROWADZONE
11C. ĆWICZENIA SAMODZIELNE (A/B/C/D)
11D. PROBLEM / THINK
12. ODPOWIEDZI Z UZASADNIENIEM
13. FISZKI
14. TEST KOŃCOWY (3+2+2+1)
15. MAPA POJĘĆ
16. CO DALEJ
17. SŁOWNIK
18. DODATEK ZAAWANSOWANY
19. JAK SIĘ UCZYĆ
20. POŁĄCZENIA MIĘDZYPRZEDMIOTOWE
21. ZADANIA Z ŻYCIA CODZIENNEGO
```

**Drabinka trudności w ćwiczeniach (6 poziomów):**

1. **ODTWÓRZ** — „Podaj.”
2. **ZASTOSUJ** — „Oblicz.”
3. **WYJAŚNIJ** — „Dlaczego?”
4. **ODKRYJ** — „Jaki był genotyp rodzica?”
5. **POŁĄCZ** — „Połącz mejozę z dziedziczeniem.”
6. **ZAKWESTIONUJ** — „Czy z danych można to jednoznacznie wywnioskować?”

**Poziomy głębokości (nie trudności):**

- **Podstawa** = co trzeba znać.
- **Trening** = jak zastosować.
- **Ambitny** = dlaczego.
- **Zaawansowany** = co się stanie, jeśli zmienimy warunki.

---

<!-- ==================== BEGIN SYSTEM ==================== -->

# SYSTEM

## S1. Filozofia i poziomy (obowiązujące)

### S1.0. Znaczniki warstw (audyt 2026-09-12 — bez utraty treści)

Każda lekcja ma te same treści co dotąd; etykiety tylko **pokazują**, co jest obowiązkowe.

| Znacznik | Odpowiednik dotychczasowy | Znaczenie | Kto |
|----------|----------------------------|-----------|-----|
| **[PRZYPOMNIENIE]** | Start / Kompas (pkt 3) | Tylko to, bez czego nie da się zacząć | wszyscy na starcie lekcji |
| **[PODSTAWA E8]** | Podstawa / Ściąga / Wyjaśnienie 6 | Obowiązkowy rdzeń klasy 8 | wszyscy |
| **[TRENING]** | Trening / Ćwiczenia 11 / Test 14 | Zadania szkolne i pod E8 | wszyscy |
| **[MASTER]** | Ambitny (pkt 7) | Rozszerzenie wynikające z podstawy | chętni |
| **[ZAAWANSOWANY]** | Zaawansowany (pkt 8) + Dodatek 19 | Głębsza teoria; most do liceum | bardzo chętni |
| **[KONKURS]** | 11D PROBLEM / L090 | Rozumowanie, łączenie informacji | ścieżka konkursowa |
| **[POWTÓRKA]** | Fiszki + system powtórek | Spaced repetition | wszyscy |
| **[SPRAWDZIAN]** | Okno w indeksie MASTER | Test sumujący | wszyscy |

> Nie trzeba opanować [MASTER] / [ZAAWANSOWANY] / [KONKURS], żeby dobrze zdać klasę 8 / E8.

**Indeks obowiązujący:** `L000-INDEKS-ROKU_MASTER_v1.0.html`. Audyt: `BIOLOGIA_INDEKS_AUDYT.md`.

### S1.1. Dotychczasowe nazwy (nadal ważne)

| Poziom | Znaczenie | Kto |
|--------|-----------|-----|
| **Podstawa** | = [PODSTAWA E8] — zna i umie na lekcji i sprawdzianie | wszyscy |
| **Trening** | = [TRENING] — typowe ćwiczenia, utrwalanie | wszyscy |
| **Ambitny** | = [MASTER] — mechanizm, uzasadnienie | chętni |
| **Zaawansowany** | = [ZAAWANSOWANY] — pogłębienie, konkursy | bardzo chętni |

Stare etykiety `basic / train / amb / extra` są **wycofane** w nowych dopiskach — nie używać.

1. **Ciekawość przed kolejnością** — wolno czytać [MASTER] przed domknięciem podstawy.
2. **Punkty wejścia zamiast bramek** — [PRZYPOMNIENIE] = kompas, nie warunek.
3. **Rozszerzenie = drugie dno** — [MASTER] i [ZAAWANSOWANY] w tej samej lekcji.
4. **Tempo dowolne.** Harmonogram MASTER = rytm, nie bat.

**Bez paska postępu. Bez okienek samooceny.** W HTML — puste pola do testów.

### S1.2. Jak czytać lekcję (dla ucznia)

1. **Pytanie przewodnie** (1) — „po co”.
2. **[PRZYPOMNIENIE]** / kompas (3) — co już trzeba umieć.
3. **[PODSTAWA E8]** ściąga (5) + wyjaśnienie (6) — minimum.
4. **Mini-check** (11A) + prowadzone (11B) + samodzielne (11C) — **[TRENING]**.
5. **Odpowiedzi** (12) — z uzasadnieniem.
6. **Fiszki** (13) — **[POWTÓRKA]** 5–10 min.
7. **Test końcowy** (14) — 3+2+2+1.
8. **Klinika błędów** (9) — wróć do pomyłek.
9. Opcjonalnie **[MASTER]** (7) / **[ZAAWANSOWANY]** (8) / **[KONKURS]** (11D).

### S1.3. Jak czytać lekcję (dla nauczyciela / rodzica)

- **Pkt 5–6** — [PODSTAWA E8]; „must know” na sprawdzian; można czytać na głos.
- **Pkt 7–8** — [MASTER] / [ZAAWANSOWANY]; nie wymagaj od wszystkich.
- **Pkt 9 (klinika)** — praca z błędami na lekcji.
- **Pkt 11A** — diagnostyka przed ćwiczeniami.
- **Pkt 11D** — [KONKURS] / ocena celująca.

## S2. Schemat lekcji (obowiązkowy)

Numeracja sekcji 1–22 **bez zmian**. Znaczniki warstw = etykiety przy istniejących punktach (no-content-loss).

```
