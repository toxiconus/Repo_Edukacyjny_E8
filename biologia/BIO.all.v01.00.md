# BIOLOGIA: PODSTAWA PLUS — v5.2 MASTER 2026-09-20

> Wersja przebudowana: zachowanie materiału źródłowego + reorganizacja + uzupełnienia + wspólna architektura MD pod przyszły HTML.

**Bieżący MD roboczy.** Bloki uporządkowane 2026-09-20 21:14. v4.2 archiwum. Nic nie wycięte.

**Status:** źródło MD do dalszej redakcji i przyszłego generowania HTML. Nie jest to jeszcze finalny HTML.

**Wersja v4.1 WORKING** · 2026-09-14  
**Źródła scalone:** v2.3c + v3.3 + v3.4 + v3.5 + v3.6 + ulepszenia v3.7 (rozwinięcie słabszych lekcji: L001–L003, L014, L016, L030–L044, L050, L090 — pełna warstwa dydaktyczna 6A–6D, 11A–11D, Klinika 2.0, drabinka trudności, sekcje „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego"). Dodatkowo L012 został zsynchronizowany z HTML v8.1.  
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
| L050, L090 | Pełne MASTER v4.1 WORKING (rozbudowane bez usuwania v4.0) |
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


## KOLEJNOŚĆ BLOKÓW (2026-09-20 21:14)

SYSTEM → L001 → L001A → L002 → L003 (diagnoza, nie brama) → L004–L009 (szkice) → L010 DNA od zera → L011–L014 → L015 mejoza → L016 nowotwory → L016A zmienność → L017 Punnett → L018–L021 → L030–L032 → L040–L044 → L050 → L090 → warstwy / SVG / backlog / STATUS.



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
# LXXX — Tytuł lekcji

**Dział:** ...  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** ...  
**Następna lekcja:** ...

## Mapa lekcji (opcjonalny skrót na górze)
- [PRZYPOMNIENIE] → pkt 3
- [PODSTAWA E8] → pkt 5–6 (+ klinika 9)
- [TRENING] → pkt 11–14
- [MASTER] → pkt 7
- [ZAAWANSOWANY] → pkt 8, 19
- [KONKURS] → pkt 11D (gdy jest)

## 1. Pytanie przewodnie
## 2. Cele lekcji (+ 80/20)
## 3. Co trzeba wiedzieć wcześniej (kompas)     ← [PRZYPOMNIENIE]
## 4. Zacznij od problemu (hipoteza ucznia)
## 5. Ściąga — poziom podstawowy (+ mnemotechniki)  ← [PODSTAWA E8]
## 6. Wyjaśnienie od podstaw                       ← [PODSTAWA E8]
    6A. Dlaczego?
    6B. Krok po kroku
    6C. Przykład prowadzony
    6D. Powiązanie z innymi lekcjami
## 7. Poziom ambitny                               ← [MASTER]
## 8. Poziom zaawansowany                          ← [ZAAWANSOWANY]
## 9. Klinika błędów (+ Klinika 2.0)                ← [PODSTAWA E8] / [TRENING]
## 10. Obserwacja / model
## 11. Ćwiczenia (11A–11D)                         ← [TRENING]; 11D ← [KONKURS]
## 12. Odpowiedzi i sposób oceniania
## 13. Fiszki                                      ← [POWTÓRKA]
## 14. Test końcowy (3+2+2+1)                      ← [TRENING]
## 15. Checklista
## 16. Mapa pojęć
## 17. Co dalej?
## 18. Słownik
## 19. Dodatek zaawansowany                        ← [ZAAWANSOWANY]
## 20. Jak się uczyć tej lekcji?
## 21. Połączenia międzyprzedmiotowe
## 22. Zadania z życia codziennego
```

## S3. Znaczniki `[BIO:…]`

```
[BIO: CARD: OK|TRAP|HINT|AMB|REM|STOP]
[BIO: DIAGRAM type=CELL|DNA|BONE|SYSTEM|CYCLE|MAP|TREE]
[BIO: HOTSPOT id=… label=…]
[BIO: LABEL]…[/BIO: LABEL]
[BIO: FLOW] … [/BIO: FLOW]
[BIO: COMPARE] … [/BIO: COMPARE]
[BIO: SVG src=assets/…]
[BIO: IMG src=assets/… alt="…" caption="…"]
[BIO: IMG-REMOTE url=… save=assets/…]
```

## S4. Format obserwacji / doświadczenia / modelu

```
Problem:
Hipoteza:
Materiał lub dane:
Obserwacja:
Wniosek:
Ograniczenia modelu:
BHP:
```

**Obserwacja / doświadczenie** ≠ **Model / symulacja**.  
**Obserwacja ≠ wniosek.**

## S5. Format kliniki błędów

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

### Klinika 2.0

```
Błąd → Znajdź → Popraw → Nazwij regułę → Wyjaśnij dlaczego → Zadanie podobne → Zadanie z pułapką
```

## S6. Mnemotechniki (rdzeń)

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **A–T, C–G** | pary zasad |
| 2 | **2n → mitoza → 2n** | mitoza zachowuje liczbę zestawów |
| 3 | **2n → mejoza → n** | mejoza redukuje |
| 4 | **46 = 44 + XX/XY** | 22 pary + para płci |
| 5 | **Duża = dominujący, mała = recesywny** | konwencja zapisu |
| 6 | **Homo = te same, hetero = różne** | AA / Aa / aa |
| 7 | **Genotyp w genach, fenotyp w „fenie”** | genotyp vs fenotyp |
| 8 | **UV + dym + X = mutagen** | czynniki mutagenne |
| 9 | **DNA → RNA → białko** | centralny dogmat (uproszczenie) |
| 10 | **Rodzice u góry, potomstwo w środku** | Punnett |
| 11 | **Stara + nowa nić = semikonserwatywna** | replikacja |
| 12 | **Tylko jeden X u chłopca = recesywne widać** | sprzężenie z X |
| 13 | **1:2:1 → „jeden AA, dwa Aa, jeden aa”** | genotypy |
| 14 | **3:1 → trzy dominujące, jeden recesywny** | fenotypy |
| 15 | **X od mamy, Y od taty = syn** | dziedziczenie płci |
| 16 | **Ojciec nie daje X synowi** | X-linked |
| 17 | **A i B się nie przykrywają** | kodominacja |
| 18 | **0 = zero antygenów (ii)** | grupa 0 |
| 19 | **Mutacja ≠ choroba ≠ nowotwór** | rozróżnienie |
| 20 | **Somatyczna nie dziedziczy się** | mutacje somatyczne vs germinalne |
| 21 | **Homologiczne = wspólny plan** | narządy homologiczne |
| 22 | **Analogiczne = ta sama funkcja** | narządy analogiczne |
| 23 | **Ekosystem = organizmy + środowisko** | biocenoza + biotop |
| 24 | **Piramida zwęża się** | energia maleje |

## S7. Zasada 80/20 (per lekcja)

| Lekcja | 20% = 80% efektu |
|--------|------------------|
| L001 | jądro = DNA; mitochondria = ATP; błona = granica |
| L002 | krew i grupy ABO; układ rozrodczy = gamety |
| L003 | 5 pytań diagnostycznych |
| L010 | genetyka = dziedziczenie + zmienność |
| L011 | DNA = informacja · nukleotyd · A–T, C–G · helisa |
| L012 | 46 chromosomów · chromatydy + centromer · XX/XY |
| L013 | replikacja = kopiowanie DNA; A–T, C–G |
| L014 | mitoza: ta sama liczba zestawów |
| L015 | mejoza: 2n → n; gamety; zmienność |
| L016 | nowotwór = niekontrolowane podziały |
| L017 | allel, homo/hetero, krzyżówka 1 genu |
| L018 | XX/XY; cechy sprzężone z X |
| L019 | ABO (Iᴬ/Iᴮ/i) + Rh |
| L020 | mutacja = zmiana w DNA; mutageny |
| L021 | przekrój: DNA → chromosom → podział → krzyżówka |
| L030 | ewolucja: dowody, wspólne pochodzenie |
| L031 | dobór naturalny = środowisko wybiera |
| L032 | powtórka: dowody + dobór |
| L040 | ekosystem = biocenoza + biotop |
| L041 | łańcuch: producent → konsument → destruent |
| L042 | relacje: antagonistyczne vs nieantagonistyczne |
| L043 | zagrożenia + ochrona + zrównoważony rozwój |
| L044 | powtórka: ekosystem + łańcuch + relacje |
| L050 | cały rok: genetyka + ewolucja + ekologia |
| L090 | extra olimpijska |

## S8. System powtórek (spaced)

| Kiedy | Co | Czas |
|-------|-----|------|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

**3 pytania po powtórce:** Co umiem? Co mylę? Co zaskoczyło?

**Interleaving:** DNA + mitoza + krzyżówka w jednym zestawie.

## S9. Status a podstawa (genetyka — rdzeń)

Uczeń m.in.:

1. przedstawia strukturę i rolę DNA
2. budowa chromosomu; liczba chromosomów człowieka; autosomy i chromosomy płci
3. znaczenie podwójnej helisy i replikacji DNA
4. znaczenie mitozy i mejozy; haploidalne / diploidalne
5. nowotwory a niekontrolowane podziały; czynniki ryzyka
6. dziedziczenie jednogenowe
7. dziedziczenie płci u człowieka
8. choroby sprzężone z chromosomem X
9. grupy krwi ABO i Rh
10. mutacje; czynniki mutagenne; przykłady chorób genetycznych

## S10. Słownik systemowy

| Termin | Definicja |
|--------|-----------|
| Gen | Odcinek DNA niosący informację o produkcie (RNA/białku) |
| Allel | Wersja genu |
| Genotyp | Zestaw alleli |
| Fenotyp | Widoczna cecha |
| Homozygota | Dwa takie same allele |
| Heterozygota | Dwa różne allele |
| Dominujący | Ujawnia się w heterozygocie |
| Recesywny | Ujawnia się tylko w homozygocie |
| Kariotyp | Zestaw chromosomów |
| Autosom | Chromosom niebędący chromosomem płci |
| Chromatyda | Kopia chromosomu po replikacji |
| Centromer | Miejsce połączenia chromatyd |
| Gameta | Komórka rozrodcza (n) |
| Zygota | Komórka po połączeniu gamet (2n) |
| Mutacja | Zmiana w materiale genetycznym |
| Mutagen | Czynnik zwiększający częstość mutacji |
| Nosiciel | Heterozygota niosąca allel recesywny |
| Krzyżówka | Zapis możliwych genotypów potomstwa |
| Rodowód | Schemat dziedziczenia w rodzinie |
| Faza S | Faza cyklu z replikacją DNA |
| Aneuploidia | Nieprawidłowa liczba chromosomów |

## S11. Indeks roku (obowiązujący)

> **Indeks obowiązujący dla planu roku, kolejności lekcji, powtórek i sprawdzianów:**  
> plik HTML **`L000-INDEKS-ROKU_MASTER_v1.0.html`** (zakładka Biologia).  
> Indeks szczegółowy biologii: `L000-BIOLOGIA-Indeks_v3.8.html`.  
> Audyt warstw i status lekcji: `BIOLOGIA_INDEKS_AUDYT.md`.  
> Ten rozdział S11 w MD jest **skrótem orientacyjnym** — przy rozbieżności decyduje indeks roczny MASTER.

### Skrót lekcji (zgodny z MASTER)

| ID | Temat | Typ | Wersja MD |
|----|-------|-----|-----------|
| L000 | Indeks roku MASTER | SYSTEM | — |
| L001 | Powtórka: komórka | [PRZYPOMNIENIE] | v3.7 |
| L002 | Powtórka: człowiek | [PRZYPOMNIENIE] | v3.7 |
| L003 | Diagnoza startowa | START | v3.7 |
| L010 | Skąd podobieństwa i różnice? | GENETYKA | v3.7 |
| L011 | Jak DNA przechowuje informację? | GENETYKA | **v3.8** |
| L012 | Jak DNA jest upakowane? | GENETYKA | **v8.1 HTML → v4.1 MD** |
| L013 | Jak komórka kopiuje DNA? | GENETYKA | **v3.8** |
| L014 | Jak komórki ciała się odnawiają? | GENETYKA | **v3.8** |
| L015 | Jak powstają gamety? | GENETYKA | **v3.8** |
| L016 | Gdy podziały wymykają się kontroli? | GENETYKA | **v3.8** |
| L017 | Jak przewidywać dziedziczenie? | GENETYKA | **v3.8** |
| L018 | Płeć i cechy sprzężone z X? | GENETYKA | **v3.8** |
| L019 | Dlaczego ABO ≠ A/a? | GENETYKA | **v3.8** |
| L020 | Mutacje i ich skutki | GENETYKA | **v3.8** |
| L021 | Powtórka genetyki | [POWTÓRKA] | v3.7 |
| L030 | Ewolucja i dowody | EWOLUCJA | v3.7 |
| L031 | Dobór naturalny i sztuczny | EWOLUCJA | v3.7 |
| L032 | Powtórka ewolucji | [POWTÓRKA] | v3.7 |
| L040 | Ekosystem | EKOLOGIA | v3.7 |
| L041 | Łańcuchy i sieci pokarmowe | EKOLOGIA | v3.7 |
| L042 | Relacje między organizmami | EKOLOGIA | v3.7 |
| L043 | Człowiek a środowisko | EKOLOGIA | v3.7 |
| L044 | Powtórka ekologii | [POWTÓRKA] | v3.7 |
| L050 | Powtórka roczna | [POWTÓRKA] | **v4.1 WORKING** |
| L090 | Extra olimpijska | [KONKURS] | **v4.1 WORKING** |

**Harmonogram (MASTER):** IX — L001–L003 · IX–XI — L010–L021 · XI–I — L030–L032 · I–IV — L040–L044 · IV–VI — L050.

**Warstwy w każdej lekcji:** [PRZYPOMNIENIE] → [PODSTAWA E8] → [TRENING] → [MASTER] → opcjonalnie [KONKURS].  
HTML pojedynczych lekcji: L012 ma wersję **v8.1**; L001–L011 pozostają poza zakresem tej rewizji.

<!-- ==================== END SYSTEM ==================== -->


<!-- ==================== BEGIN L001 ==================== -->
## KARTA LEKCJI L001

- Numer: L001
- Tytuł roboczy: Komórka
- Dział: Biologia komórki
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: — · Następna: L002 / L001A
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L001_KOMORKA.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty

<!-- FIX 2026-09-26 MD>=HTML: tkanki roślinne z BIO.004x -->
**Liść (przekrój) i łodyga — skrót E8.** W liściu widać skórkę, miękisz (w tym z chloroplastami) i wiązki przewodzące. W łodyce **drewno** prowadzi wodę z solami w górę, **łyko** — produkty fotosyntezy. To ten sam poziom „tkanka → narząd”, co serce i skóra w HTML L004 — opis tu, schemat w HTML.


## WYKŁAD Z HTML L001 v5.2

HTML: `BIO_001_v07_komorka_budowa_funkcje_typy_komorek_teoria_komorkowa.html`

Biologia L001 — Komórka: budowa, funkcje, typy komórek i teoria komórkowa (v5.2)

  
    
      L001 — Komórka: budowa, funkcje, typy komórek i teoria komórkowa
      Od podstawowych struktur komórki do DNA, prokariontów, eukariontów i endosymbiozy
      
        Poprzednia: — · Następna: L002 (człowiek — wybrane)

        Warstwy: [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]

        **Wersja 5.2** — po korekcie merytorycznej i redakcyjnej
      
    
  

  

### Spis treści

  
    0. Wprowadzenie — o co tu chodzi?
    Wprowadzenie
  

  
    1–4. Pytanie, cele, kompas, problem
    
      Pytanie przewodnie
      Cele + 80/20
      Kompas
      Zacznij od problemu
    
  

  
    5. Ściąga — definicje i budowa
    Ściąga
  

  
    6. Wyjaśnienie od podstaw
    Wyjaśnienie
  

  
    7. Błona i transport
    Błona + transport
  

  
    8. Teoria komórkowa
    Teoria komórkowa
  

  
    9–10. Poziom ambitny i zaawansowany
    
      MASTER
      ZAAWANSOWANY
    
  

  
    11. Klinika błędów
    Klinika
  

  
    12–17. Obserwacja, ćwiczenia, egzamin, fiszki, test, checklista
    
      Obserwacja
      Ćwiczenia
      Zadania egzaminacyjne
      Fiszki
      Test
      Checklista
    
  

  
    18–22. Mapa, słownik, dodatek, życie
    
      Mapa
      Słownik
      Dodatek
      Z życia
    
  

  Słowa kluczowe: komórka · jądro · DNA · mitochondria · chloroplast · błona · ściana · prokariota · eukariota · endosymbioza · teoria komórkowa

  0. Wprowadzenie

  
    O co tu właściwie chodzi?
    

**Komórka to najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów.** Każdy organizm komórkowy — bakteria, roślina, grzyb i człowiek — jest zbudowany z jednej albo wielu komórek.
    

Komórka musi rozwiązać trzy podstawowe problemy:
    
      
- **oddzielić swoje wnętrze od otoczenia** — od tego jest **błona komórkowa**;
      
- **zdobywać i wykorzystywać energię** — od tego są **mitochondria** (u roślin i glonów dodatkowo chloroplasty);
      
- **przechowywać informację** potrzebną do działania i rozmnażania — od tego jest **materiał genetyczny**, głównie w jądrze.
    
    

Dlatego na schemacie komórki szczególnie ważne są: **błona komórkowa, mitochondria i jądro z większością DNA**.
  

  

#### Dlaczego zaczynamy od komórki?
  
    

Bo żeby zrozumieć **genetykę**, trzeba wiedzieć dwie rzeczy:
    
      
- **Gdzie w komórce znajduje się materiał genetyczny** — w jądrze, a dodatkowo w mitochondriach (i w chloroplastach u roślin).
      
- **Czym różnią się typy komórek** — bo to wyjaśnia, dlaczego jedne organizmy mają cechy inne niż drugie.
    
    

Ten pierwszy punkt jest pomostem do **L011 — Jak DNA przechowuje informację?**.
  

  
    Kluczowa myśl
    

Komórka to **podstawowy „klocek" życia**. Wszystkie organizmy komórkowe są zbudowane z jednej lub wielu komórek.
  

  

#### Dlaczego to ma znaczenie?
  
    

      
      
        ****
        ****
        ****
        ****
        ****
      
    | Dziedzina | Zastosowanie |
| --- | --- |
| Medycyna | choroby i zaburzenia komórkowe, w tym nowotwory; immunologia; transplantologia |
| Farmakologia | leki działają na konkretne struktury lub procesy komórkowe |
| Biotechnologia | produkcja insuliny, szczepionek, biopaliw |
| Rolnictwo | hodowla roślin, ochrona przed patogenami |
| Genetyka | jądro komórki to główne miejsce przechowywania DNA |

  

  1. Pytanie przewodnie
  
    

Co jest najmniejszą jednostką życia i gdzie w komórce znajduje się materiał genetyczny?
  

  2. Cele lekcji PODSTAWA E8

  
    Po tej lekcji umiesz:
    
      
- **wyjaśnić**, czym jest komórka i dlaczego jest podstawową jednostką życia,
      
- **wymienić poziomy organizacji życia** (komórka → tkanka → narząd → układ → organizm),
      
- **rozpoznać i opisać funkcje** podstawowych struktur komórkowych,
      
- **łączyć jądro z materiałem genetycznym** (most do L011),
      
- (ambitny) rozróżniać komórki prokariotyczne i eukariotyczne,
      
- (zaawansowany) znać ideę teorii endosymbiozy oraz dziedziczenie mitochondrialne.
    
  

  
    Zasada 80/20 — co naprawdę daje 80% efektu
    
      

        
        
          ****
          ****
          ****
          ****
          ****
        
      | 20% = 80% efektu | Dlaczego to jest kluczowe |
| --- | --- |
| jądro zawiera większość DNA | fundament całej genetyki klasy 8 |
| mitochondria = energia (ATP) | bez energii nie ma życia |
| błona = granica i transport | podstawowa struktura każdej komórki |
| chloroplasty = fotosynteza | odróżnienie roślin od zwierząt |
| ściana = celuloza/chityna/mureina | rozpoznawanie typów komórek |

    
    

**Dlaczego to wystarczy?** Bo większość zadań E8 o komórce sprowadza się do trzech rzeczy: rozpoznaj strukturę → powiedz, co robi → dopasuj do typu komórki.
  

  3. Kompas PRZYPOMNIENIE
  
    Co trzeba wiedzieć wcześniej
    

**Nic — to pierwszy krok w hierarchii życia.**
    
      
- Wiesz, że organizmy są zbudowane z komórek? → idź dalej.
      
- Nie wiesz? → przeczytaj sekcję 5 (Ściąga) i wróć.
    
  

  4. Zacznij od problemu
  
    

**Skąd komórka „wie", co ma robić? Skąd bierze energię? Jak odróżnia wnętrze od otoczenia?**
    

Zapisz hipotezę: ....................................
    

**Podpowiedź:** Pomyśl o **mieście**:
    
      
- **biblioteka z instrukcjami** — jądro z DNA (nie „ratusz");
      
- **zakłady przetwarzające energię chemiczną** — mitochondria;
      
- **elastyczna granica z kontrolowanymi przejściami** — błona komórkowa;
      
- **maszyny odczytujące instrukcje i budujące białka** — rybosomy;
      
- **zbiornik i magazyn** — wakuola;
      
- **zakłady wykorzystujące energię światła** — chloroplasty.
    
    

💡 Po lekcji wróć do hipotezy i sprawdź, czy była trafna.
  

  5. Ściąga PODSTAWA E8

  

#### 5.1. Co to komórka? (definicja)
  
    Definicja
    

**Komórka to najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów.** Ma **błonę komórkową, materiał genetyczny oraz struktury umożliwiające przeprowadzanie procesów życiowych**.
    

Komórki pobierają substancje z otoczenia, uzyskują energię, reagują na bodźce, rosną i mogą się dzielić.
    

**Uwaga:** nie każda wyspecjalizowana komórka wykonuje wszystkie czynności życiowe w takim samym stopniu. Np. dojrzały erytrocyt ssaka nie ma jądra i nie dzieli się.
    

**Wirus nie jest komórką** — nie ma budowy komórkowej: brak cytoplazmy, rybosomów oraz samodzielnego metabolizmu. Niektóre wirusy mają osłonkę lipidową, ale **nie jest to błona komórkowa**. Do namnażania potrzebują komórki gospodarza.
  

  

#### 5.2. Struktury w komórce — tabela bazowa
  
    

      
      
        ********
        ********
        ********
        ********
        ****
        ****
        ****
        ****
      
    | Struktura | Najprostsza funkcja | Występuje |
| --- | --- | --- |
| Błona komórkowa | Oddziela wnętrze komórki od otoczenia i kontroluje transport substancji | We wszystkich komórkach |
| Cytoplazma | Wypełnia komórkę; zachodzi w niej wiele reakcji | We wszystkich komórkach |
| Rybosomy | Wytwarzają białka (synteza białek) | We wszystkich komórkach |
| Jądro komórkowe | Zawiera większość DNA i kieruje pracą komórki | U eukariontów |
| Mitochondria | Zachodzi w nich większość etapów oddychania komórkowego tlenowego, podczas którego komórka wytwarza ATP | U prawie wszystkich eukariontów |
| Chloroplasty | Miejsce fotosyntezy | U roślin i wielu glonów |
| Ściana komórkowa | Usztywnia, chroni i nadaje kształt | U roślin, grzybów i bakterii |
| Duża wakuola | Gromadzi wodę i substancje; utrzymuje jędrność komórki | Typowo u roślin |

  

  
    Dla chętnych — dodatkowe struktury
    
      
- **Aparat Golgiego** — sortownia i centrum pakowania (modyfikuje i pakuje białka; eukarionty).
      
- **Siateczka śródplazmatyczna (ER)** — sieć transportowa i miejsce produkcji części substancji (eukarionty).
      
- **Jąderko** — tworzy rRNA (w jądrze).
    
  

  

#### 5.3. Ściany komórkowe — chemia trzech grup
  
    

      
      
        ********
        ********
        ********
        ********
      
    | Grupa | Główny składnik ściany | Uwaga |
| --- | --- | --- |
| Rośliny | celuloza | + blaszka środkowa |
| Grzyby | chityna | ta sama chemia co pancerz owadów |
| Bakterie | mureina (peptydoglikan) | inna chemia niż u eukariontów |
| Zwierzęta | brak ściany | tylko błona |

  
  

**Wniosek:** jeśli widzisz ścianę, to **nie** jest komórka zwierzęca. Trzy możliwości: roślina, grzyb albo bakteria.

  

#### 5.4. Prokariota — 4 fakty kluczowe
  
    
      
- **Brak jądra otoczonego błoną** — DNA leży w **nukleoidzie**. Często dodatkowo w małych, kolistych **plazmidach**.
      
- **Są rybosomy i błona komórkowa**, ale **brak mitochondriów i chloroplastów**.
      
- **Bakterie nie mają mitochondriów.** U wielu bakterii elementy łańcucha transportu elektronów znajdują się w błonie komórkowej, dlatego część procesów związanych z uzyskiwaniem energii może zachodzić właśnie tam. Bakterie mogą jednak uzyskiwać energię różnymi sposobami, także bez tlenu.
      
- Przykłady: **bakterie**, **sinice** (cyjanobakterie). Bakterie najczęściej rozmnażają się **bezpłciowo** przez podział komórki na dwie komórki potomne — **podział binarny**.
    
  

  

#### 5.5. Mnemotechniki
  
    
      
- **Jądro = biblioteka z instrukcjami** — zawiera większość DNA, ale nie całe DNA komórki
      
- **Mitochondrium = zakłady przetwarzające energię** — oddychanie komórkowe, ATP
      
- **Błona = elastyczna granica z kontrolowanymi przejściami**
      
- **Chloroplasty = zakłady wykorzystujące światło** — fotosynteza
      
- **Rybosom = maszyna budująca białka**
      
- **Ściana ≠ zawsze roślina** — celuloza / chityna / mureina
      
- **Bez jądra = prokariota** — bakteria
    
  

  

#### 5.6. Tabela zbiorcza — typy komórek (z kolumną „uwaga")
  
    

      
      
        ****
        ****
        ****
        ****
        ********
        ****
        ****
        ****
      
    | Cecha | Zwierzęca | Roślinna | Grzybowa | Bakteryjna | Uwaga |
| --- | --- | --- | --- | --- | --- |
| Jądro komórkowe | Tak (z wyjątkami) | Tak | Tak | Nie ma jądra otoczonego błoną | Dojrzały erytrocyt ssaka traci jądro |
| Materiał genetyczny | Głównie w jądrze, też w mitochondriach | W jądrze, mitochondriach i chloroplastach | Głównie w jądrze, też w mitochondriach | W nukleoidzie i czasem w plazmidach | DNA nie jest wyłącznie w jądrze |
| Błona komórkowa | Tak | Tak | Tak | Tak | Wszystkie komórki mają błonę |
| Ściana komórkowa | Brak | Z celulozy | Zawiera głównie chitynę | Zawiera mureinę u bakterii | Nie wszystkie bakterie mają typową ścianę (np. mykoplazmy) |
| Chloroplasty | Brak | Tylko w komórkach fotosyntetyzujących | Brak | Brak chloroplastów | Nie każda komórka roślinna ma chloroplasty (np. korzenie, cebula) |
| Mitochondria | Zwykle tak | Tak | Zwykle tak | Brak | Prawie wszystkie eukarionty mają mitochondria lub struktury pochodne |
| Rybosomy | Tak | Tak | Tak | Tak | Wspólne dla wszystkich komórek |
| Wakuole | Mogą występować małe pęcherzyki | Zwykle duża wakuola | Mogą występować | Brak typowej dużej wakuoli | Duża wakuola jest szczególnie typowa dla roślin |

  

  6. Wyjaśnienie od podstaw

  

#### 6.1. Komórka jako miasto (analogia precyzyjniejsza)
  
    Analogia
    
      

        
        
          ****
          ****
          ****
          ****
          ****
          ****
          ****
          ****
          ****
          ****
        
      | Element komórki | Odpowiednik w mieście | Rola |
| --- | --- | --- |
| Jądro | biblioteka z instrukcjami | przechowuje większość DNA i kieruje pracą komórki |
| DNA | księgozbiór instrukcji | zawiera informację genetyczną |
| Rybosomy | maszyny odczytujące instrukcje i budujące białka | synteza białek |
| Mitochondria | zakłady przetwarzające energię chemiczną | oddychanie komórkowe, wytwarzanie ATP |
| Chloroplasty | zakłady wykorzystujące energię światła | fotosynteza (produkcja związków organicznych) |
| Błona komórkowa | elastyczna granica z kontrolowanymi przejściami | izoluje, transportuje, odbiera sygnały |
| Ściana komórkowa | sztywna konstrukcja wzmacniająca | usztywnia, chroni (rośliny, grzyby, bakterie) |
| Wakuola | zbiornik i magazyn | przechowuje wodę i substancje |
| Aparat Golgiego | sortownia i centrum pakowania | modyfikuje i pakuje białka |
| Siateczka śródplazmatyczna | sieć transportowa i miejsce produkcji części substancji | transport wewnątrz komórki |

    
    

**Żadna analogia nie jest idealna.** Służy do zapamiętania funkcji, ale nie zastępuje prawdziwego opisu biologicznego.
  

  

#### 6.2. Łańcuch hierarchii życia
  
    ATOM → CZĄSTECZKA → STRUKTURA KOMÓRKOWA → KOMÓRKA → TKANKA → NARZĄD → UKŁAD → ORGANIZM
    

Uwaga: komórka **nie jest** po prostu większą strukturą — jest pierwszą strukturą uznawaną za żywą.
  

  

#### 6.3. 6A. Dlaczego?
  
    
      
- **Dlaczego jądro jest ważne w komórce eukariotycznej?** Jądro zawiera większość DNA i pomaga kontrolować pracę komórki. Nie oznacza to jednak, że komórka bez jądra nie może wytwarzać białek: komórki prokariotyczne nie mają jądra, ale mają DNA i rybosomy.
      
- **Dlaczego komórka potrzebuje energii?** Bo **wiele procesów komórkowych wymaga dostarczenia energii**. Komórka wykorzystuje między innymi **ATP jako bezpośredni nośnik energii**. Niektóre reakcje uwalniają energię, a niektóre zachodzą bez bezpośredniego wykorzystania ATP.
      
- **Dlaczego bez błony nie ma komórki?** Bo zawartość miesza się z otoczeniem. Błona utrzymuje wewnętrzne środowisko.
      
- **Dlaczego roślina MA także mitochondria?** Fotosynteza **produkuje** cukier. Ale żeby **wykorzystać** cukier na ATP, roślina musi oddychać — robi to w mitochondriach. **Roślina oddycha przez całą dobę.**
      
- **Dlaczego bakterie nie mają mitochondriów?** Bo u wielu bakterii elementy łańcucha transportu elektronów znajdują się w błonie komórkowej. Bakterie mogą jednak uzyskiwać energię różnymi sposobami, także bez tlenu.
    
  

  

#### 6.4. 6B. Jak rozpoznać komórkę? (algorytm)
  
    
      
- **Czy komórka ma jądro?**
        
          
- Nie ma jądra → najpewniej **komórka bakteryjna**.
          
- Ma jądro → komórka **eukariotyczna**: roślinna, zwierzęca albo grzybowa.
        
      
      
- **Czy ma chloroplasty?**
        
          
- Tak → komórka **roślinna** lub komórka **glonu**.
          
- Nie → przejdź dalej.
        
      
      
- **Czy ma ścianę komórkową?**
        
          
- Nie → komórka **zwierzęca**.
          
- Tak → może być komórką **roślinną** z części niezielonej albo komórką **grzyba**.
        
      
      
- **Co rozstrzyga?**
        
          
- **Celuloza** w ścianie → roślina.
          
- **Chityna** w ścianie → grzyb.
          
- **Brak jądra** i **mureina** w ścianie → bakteria.
        
      
    
    
      Uwaga
      

Na poziomie szkolnym brak ściany i obecność jądra wskazują **zwykle** na komórkę zwierzęcą. W biologii istnieją jednak wyjątki (np. u niektórych protistów oraz u bakterii pozbawionych ściany). Algorytm służy do rozwiązywania typowych zadań, a nie do opisu wszystkich organizmów.
    
  

  

#### 6.5. 6C. Przykład prowadzony
  
    

**Dane:** Komórka ma: jądro, mitochondria, błonę, bez chloroplastu i ściany.
    

**Pytanie:** Jaki to typ komórki?
    

**Rozumowanie:**
    
      
- Jądro → eukariota.
      
- Brak chloroplastu → nie jest to zielona roślina.
      
- Brak ściany → nie roślina, nie grzyb.
      
- → **komórka zwierzęca**.
    
    

**Spróbuj sam:** jądro + ściana + chloroplast + mitochondrium + duża wakuola → ?
    

**Odpowiedź:** **komórka roślinna**.
  

  

#### 6.6. 6D. Powiązanie z innymi lekcjami
  
    L001 (jądro = większość DNA)
  → L002 (krew, gamety)
  → L003 (diagnoza)
  → L010 (cechy)
  → L011 (DNA, A–T / C–G) ← najważniejszy most
  → L012 (chromosom)
    

**Most:** jeśli umiesz wskazać DNA na schemacie komórki → możesz iść dalej do L011.
  

  7. Błona komórkowa i transport MASTER

  

#### 7.1. Funkcje błony komórkowej
  
    

Błona komórkowa:
    
      
- oddziela wnętrze komórki od środowiska;
      
- utrzymuje względnie stałe warunki wewnątrz komórki;
      
- wybiórczo przepuszcza różne substancje;
      
- odbiera sygnały dzięki receptorom;
      
- umożliwia kontakt z innymi komórkami.
    
  

  

#### 7.2. Z czego zbudowana jest błona?
  
    

Jej podstawą jest **dwuwarstwa fosfolipidowa**. Fosfolipidy mają:
    
      
- **hydrofilową część**, która „lubi" wodę;
      
- **hydrofobową część**, która unika wody.
    
    

Dzięki temu ustawiają się w dwóch warstwach. W błonie znajdują się także białka, które mogą działać jako:
    
      
- kanały;
      
- pompy;
      
- transportery;
      
- receptory;
      
- enzymy.
    
  

  

#### 7.3. Transport przez błonę
  
    

      
      
        
        
        
        
        
      
    | Rodzaj transportu | Czy wymaga energii? | Przykład |
| --- | --- | --- |
| Dyfuzja | Nie | Przemieszczanie się cząsteczek zgodnie z różnicą stężeń |
| Osmoza | Nie | Przemieszczanie się wody przez błonę półprzepuszczalną |
| Transport aktywny | Tak | Przenoszenie substancji wbrew różnicy stężeń |
| Endocytoza | Tak | Pobieranie większych cząstek do wnętrza komórki |
| Egzocytoza | Tak | Wydzielanie substancji na zewnątrz |

  
  
    Pomost do innych przedmiotów
    

Transport przez błonę łączy biologię z **chemią** (cząsteczki, stężenia) i **fizyką** (dyfuzja, osmoza). Przyda się w późniejszych lekcjach o komórkach roślinnych i osmozie (L014, L041).
  

  8. Teoria komórkowa

  
    Klasyczne twierdzenia teorii komórkowej
    
      
- Wszystkie organizmy komórkowe są zbudowane z jednej lub wielu komórek.
      
- Komórka jest podstawową jednostką budowy i funkcjonowania organizmów.
      
- Wszystkie komórki powstają z wcześniej istniejących komórek.
      
- Komórki zawierają materiał genetyczny, który przekazują komórkom potomnym.
      
- Podstawowe procesy życiowe zachodzą wewnątrz komórek.
    
    

Podręczniki różnie formułują teorię komórkową — powyższe ujęcie jest jednym z najczęstszych.
  

  
    Ważne dopowiedzenie
    

Teoria komórkowa **nie oznacza**, że wszystkie komórki wyglądają tak samo. Komórki mogą różnić się:
    
      
- kształtem,
      
- wielkością,
      
- funkcją,
      
- liczbą i rodzajem struktur komórkowych,
      
- obecnością lub brakiem określonych struktur.
    
    

Np. neuron jest przystosowany do przewodzenia impulsów, a komórka mięśniowa do kurczenia się. Obie są komórkami, ale pełnią różne funkcje.
  

  
    Dlaczego to ważne?
    

Bo wyjaśnia, dlaczego:
    
      
- nowotwory powstają z **jednej** zmienionej komórki (L016),
      
- choroby genetyczne dziedziczą się (L017),
      
- organizmy rosną i regenerują się (L014 — mitoza).
    
  

  
    Wirusy a teoria komórkowa
    

**Wirusy nie są uznawane za organizmy komórkowe**, ponieważ nie mają budowy komórkowej. W materiale szkolnym bezpieczniej pisać: **„wszystkie organizmy komórkowe są zbudowane z jednej lub wielu komórek"**.
  

  9. Poziom ambitny MASTER

  

#### 9.1. Prokariota vs eukariota — pełne porównanie
  
    

      
      
        ****
        ****
        ****
        ****
        ****
        ****
        ****
        ****
      
    | Cecha | Prokariota | Eukariota |
| --- | --- | --- |
| Jądro z błoną | brak | jest |
| DNA | w nukleoidzie (luźne, koliste) + plazmidy | w jądrze (upakowane w chromosomach) + mtDNA / cpDNA |
| Struktury błonowe | brak (poza błoną komórkową) | mitochondria, ER, Golgi, lizosomy |
| Rybosomy | są (70S) | są (80S + 70S w mitochondriach) |
| Ściana | mureina (u bakterii) | celuloza/chityna (rośliny/grzyby); brak u zwierząt |
| Rozmiar | 1–10 µm | 10–100 µm |
| Rozmnażanie | podział binarny (bezpłciowy) | mitoza / mejoza |
| Przykłady | bakterie, sinice | rośliny, zwierzęta, grzyby, protisty |

  

  
    Dlaczego jądro jest „wynalazkiem"?
    

Oddziela **transkrypcję** (w jądrze) od **translacji** (w cytoplazmie). To pozwala na **precyzyjniejszą regulację ekspresji genów**.
  

  

#### 9.2. Rybosomy — struktury obecne we wszystkich komórkach
  
    

**Rybosomy to struktury obecne we wszystkich komórkach**: bakteryjnych i eukariotycznych. **Nie są otoczone błoną.** Są kompleksami zbudowanymi z rRNA i białek. Ich zadaniem jest **synteza białek** na podstawie informacji zawartej w mRNA.
    

To dlatego:
    
      
- niektóre **antybiotyki** działają wybiórczo na rybosomy bakteryjne (70S), nie uszkadzając ludzkich (80S),
      
- rybosomy mitochondrialne są **podobne do bakteryjnych** — to ważny argument za **endosymbiozą**.
    
  

  10. Poziom zaawansowany ZAAWANSOWANY

  

#### 10.1. Endosymbioza — skąd się wzięły mitochondria i chloroplasty?
  
    

**Teoria endosymbiozy zakłada**, że mitochondria i chloroplasty wywodzą się od dawnych bakterii, które weszły w trwałą symbiozę z przodkami komórek eukariotycznych. Z czasem bakterie utraciły samodzielność i stały się organellami komórkowymi.
    

**Dowody wspierające teorię endosymbiozy:**
    
      
- mitochondria i chloroplasty mają **własny, zwykle kolisty DNA**;
      
- są otoczone **dwiema błonami**;
      
- mają **rybosomy przypominające rybosomy bakterii**;
      
- powiększają swoją liczbę przez **podział**;
      
- ich budowa i niektóre procesy przypominają budowę i procesy zachodzące u bakterii.
    
    
      Ważne dopowiedzenie
      

**Mitochondrium nie jest współczesną bakterią.** Jest organellum silnie zależnym od całej komórki — większość jego białek jest kodowana przez DNA znajdujące się w jądrze.
    
  

  

#### 10.2. mtDNA i cpDNA — materiały genetyczne poza jądrem
  
    

      
      
        ********
        ********
      
    | Typ | Gdzie | Dziedziczenie | Uwagi |
| --- | --- | --- | --- |
| mtDNA | mitochondria | u człowieka prawie zawsze po matce (w typowych zadaniach szkolnych przyjmujemy: po matce) | kolisty |
| cpDNA | chloroplast | zwykle od jednego rodzica; u wielu roślin od żeńskiego, ale są wyjątki | tylko u roślin i glonów |

  
  
    Uwaga
    

„mtDNA po matce" to reguła szkolna. W biologii istnieją bardzo rzadkie wyjątki i zjawiska komplikujące ten model. „cpDNA po matce" **nie jest regułą uniwersalną** u roślin.
  

  

#### 10.3. Prawie wszystkie eukarionty mają mitochondria lub struktury pochodne
  
    

**Prawie wszystkie znane eukarionty mają mitochondria** albo struktury pochodzące od mitochondriów. U niektórych organizmów zostały one silnie zmienione i nie przypominają typowych mitochondriów.
    

Nie jest więc idealnie poprawne stwierdzenie, że *każda* komórka eukariotyczna ma klasyczne mitochondrium.
  

  11. Klinika błędów PUŁAPKI

  

#### 11.1. Tabela błędów
  
    

      
      
        ****
        ****
        
        ****
        ****
        
        
        
        
        ********
        ****
        
        
        
      
    | Błąd | Poprawa | Dlaczego? |
| --- | --- | --- |
| „Jądro = DNA" (całe DNA) | Jądro zawiera większość DNA, ale nie całe | DNA jest też w mitochondriach (i chloroplastach) |
| DNA pływa w cytoplazmie człowieka | u eukariontów DNA jest w jądrze (+ mtDNA) | lokalizacja DNA |
| „Mitochondrium produkuje energię" | W mitochondriach zachodzi większość etapów oddychania tlenowego, w którym komórka wytwarza ATP | energia nie powstaje „z niczego" |
| Roślina nie ma mitochondriów | ma — oddycha całą dobę | fotosynteza ≠ oddychanie |
| Każda komórka roślinna ma chloroplasty | Nie każda — np. korzenie, cebula | fotosynteza zachodzi tylko w tkankach zielonych |
| Komórka zwierzęca ma ścianę | nie ma — tylko błonę | ściana = roślina/grzyb/bakteria |
| Chloroplast u zwierząt | nie — tylko u roślin i glonów | fotosynteza |
| Każda komórka ma jądro | nie: prokariota; dojrzały erytrocyt ssaka | wyjątki istnieją |
| Roślina nie oddycha | oddycha — w mitochondriach | fotosynteza + oddychanie |
| Ściana = zawsze roślina | też grzyby i bakterie | różna chemia |
| Ściana bez chloroplastu = roślina | może grzyb (chityna) albo tkanka roślinna niezielona | duża wakuola typowa dla roślin |
| DNA tylko w jądrze | też DNA mitochondrialne i chloroplastowe | DNA poza jądrem |
| Rybosom „jedyna struktura" wspólna | rybosomy są u wszystkich, ale błona, cytoplazma i materiał genetyczny też | precyzja językowa |
| Wirus = komórka | wirus ≠ komórka | brak cytoplazmy i metabolizmu |

  

  

#### 11.2. Klinika 2.0 — pięć pełnych przykładów

  
    Przykład 1 — „Roślina nie ma mitochondriów, bo ma chloroplast"
    
      
- **Błąd:** „Roślina nie ma mitochondriów, bo ma chloroplast."
      
- **Znajdź:** Mylenie fotosyntezy z oddychaniem.
      
- **Popraw:** Roślina **ma** mitochondria i **oddycha** — fotosynteza produkuje cukier, oddychanie uwalnia z niego energię.
      
- **Reguła:** Fotosynteza nie zastępuje oddychania.
      
- **Dlaczego:** Chloroplast produkuje cukier, ale energia z niego uwalniana jest w mitochondriach.
      
- **Pułapka:** „Ma chloroplast, więc nie potrzebuje mitochondriów" — **błąd**.
    
  

  
    Przykład 2 — „Ściana bez chloroplastu = na pewno roślina"
    
      
- **Błąd:** „Komórka ze ścianą, ale bez chloroplastu, to na pewno roślina."
      
- **Popraw:** Może to być komórka roślinna z tkanki **niezielonej** (np. cebula), **albo** komórka **grzyba**. Jeśli dodatkowo widzimy **dużą centralną wakuolę** — bardziej prawdopodobna jest roślina.
      
- **Reguła:** Ściana nie wystarcza do rozpoznania — sprawdź chemię ściany, obecność jądra i cechy dodatkowe.
      
- **Pułapka:** „Ściana + brak chloroplastu = roślina" — **nie zawsze**.
    
  

  
    Przykład 3 — „DNA tylko w jądrze"
    
      
- **Błąd:** „DNA znajduje się tylko w jądrze komórkowym."
      
- **Popraw:** DNA jest **głównie** w jądrze, ale też w **mitochondriach** (mtDNA) i — u roślin — w **chloroplastach** (cpDNA).
      
- **Reguła:** DNA poza jądrem istnieje i ma znaczenie biologiczne.
      
- **Pułapka:** „DNA = tylko jądro" — **nie**.
    
  

  
    Przykład 4 — „Wirus to mała bakteria"
    
      
- **Błąd:** „Wirus to mała bakteria."
      
- **Popraw:** Wirus **nie ma budowy komórkowej** — nie ma cytoplazmy, rybosomów ani własnego metabolizmu. Niektóre wirusy mają osłonkę lipidową, ale nie jest to błona komórkowa.
      
- **Reguła:** Komórka = podstawowa jednostka życia; wirus ≠ komórka.
      
- **Pułapka:** „Wirus to mała bakteria" — **nie**.
    
  

  
    Przykład 5 — „Erytrocyt to komórka, więc ma jądro"
    
      
- **Błąd:** „Każda komórka ma jądro — np. erytrocyt ssaka."
      
- **Popraw:** **Dojrzały erytrocyt ssaka traci jądro** — nie ma go. To wyjątek.
      
- **Reguła:** „Każda komórka ma jądro" — **nie**; wyjątki: prokariota, dojrzałe erytrocyty ssaków.
      
- **Pułapka:** „Komórka = zawsze jądro" — **nie**.
    
  

  12. Obserwacja / model
  
    Problem: Jakie struktury są widoczne w komórkach?
Hipoteza: Zależnie od typu komórki widoczne są różne struktury.
Materiał: preparaty mikroskopowe (cebula, Elodea, wymaz z policzka).
Obserwacja: Pod mikroskopem świetlnym widoczne są głównie: ściana, błona, jądro, chloroplasty, wakuola.
Wniosek: Mikroskop świetlny pokazuje tylko niektóre struktury.
Ograniczenia: brak obrazu struktur submikroskopowych (mitochondria, rybosomy).
BHP: instrukcja pracowni; nie dotykać soczewek; nie świecić agresywnie w oczy.
    

Obserwacja ≠ wniosek: „Widzę zielone struktury" → „to chloroplasty", ale „nie widzę mitochondriów" **nie znaczy**, że ich nie ma.
  

  13. Ćwiczenia TRENING

  

#### 13A. Mini-check (5 pytań)
  
    
      
- Co to komórka?
      
- Gdzie w eukarioncie znajduje się większość DNA?
      
- Co wytwarzają mitochondria?
      
- Co to struktura komórkowa?
      
- Które komórki nie mają jądra?
    
    Pokaż odpowiedzi
      
        
- Najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów.
        
- W jądrze (+ DNA mitochondrialne).
        
- Większość ATP — podczas oddychania komórkowego.
        
- Wyodrębniona struktura o określonej funkcji.
        
- Prokariota (bakterie); dojrzały erytrocyt ssaka.
      
    
  

  

#### 13B. Ćwiczenie prowadzone
  
    

**Dane:** komórka z: jądrem, ścianą, chloroplastem, mitochondrium, dużą wakuolą.
    

**Rozumowanie:**
    
      
- jądro → eukariota
      
- chloroplast → roślina/glon
      
- ściana → roślina (jeśli celuloza)
      
- duża wakuola → potwierdza roślinę
    
    

**Odpowiedź:** **komórka roślinna**.
  

  

#### 13C. Ćwiczenia samodzielne

  

##### A. Podstawa A
  
    
      
- Zdefiniuj komórkę.
      
- Wymień 5 struktur komórkowych i ich funkcje.
      
- Gdzie jest większość DNA w eukarioncie?
      
- Gdzie zachodzi fotosynteza?
      
- Czym różni się komórka roślinna od zwierzęcej?
    
    Pokaż odpowiedzi
      
        
- Najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów.
        
- Np. jądro — większość DNA; mitochondria — energia (ATP); chloroplasty — fotosynteza; rybosomy — synteza białek; błona — granica.
        
- W jądrze (+ mtDNA).
        
- W chloroplastach.
        
- Roślinna: zwykle ściana + chloroplasty + duża wakuola; zwierzęca: brak ściany i chloroplastu.
      
    
  

  

##### B. Trening B
  
    
      
- Dlaczego roślina ma mitochondria, jeśli ma chloroplasty?
      
- Dopasuj: chityna → grzyb / celuloza → roślina / mureina → bakteria.
      
- Popraw: „Mitochondrium = jądro".
      
- Jak odróżnić komórkę zwierzęcą od roślinnej w 3 krokach?
    
    Pokaż odpowiedzi
      
        
- Bo fotosynteza produkuje cukier, ale energia z niego uwalniana jest w mitochondriach.
        
- Jak wyżej.
        
- Mitochondrium — oddychanie i ATP; jądro — większość DNA.
        
- 1) Jądro? 2) Chloroplasty? 3) Ściana?
      
    
  

  

##### C. Ambitne C
  
    
      
- Dlaczego bakterie nie mają mitochondriów, a mimo to żyją?
      
- Uzasadnij: „jądro = biblioteka z instrukcjami" — co to znaczy?
      
- Wyjaśnij różnicę: struktura błonowa vs struktura bez błony.
    
    Pokaż odpowiedzi
      
        
- Bo u wielu bakterii elementy łańcucha transportu elektronów znajdują się w błonie komórkowej. Bakterie mogą też uzyskiwać energię różnymi sposobami, także bez tlenu.
        
- Jądro przechowuje większość „przepisów" — DNA, z którego komórka wytwarza białka.
        
- Błonowe: jądro, mitochondria, chloroplast, wakuola, ER, Golgi. Bez błony: rybosomy, cytoszkielet.
      
    
  

  

##### D. Zaawansowane D
  
    
      
- Co to mtDNA? Po kim się dziedziczy u człowieka?
      
- Czym jest teoria endosymbiozy? Podaj 2 dowody.
      
- Dlaczego rybosomy mitochondrialne są podobne do bakteryjnych?
    
    Pokaż odpowiedzi
      
        
- mtDNA = DNA mitochondrialny; u człowieka prawie zawsze dziedziczony po matce (szkolna reguła).
        
- Endosymbioza = mitochondria/chloroplasty pochodzą od dawnych bakterii. Dowody: własny DNA, własne rybosomy podobne do bakteryjnych.
        
- Bo mitochondria pochodzą od bakterii, a ich rybosomy zachowały cechy bakteryjne.
      
    
  

  

#### 13D. PROBLEM / THINK KONKURS
  
    
      
- Komórka ma ścianę, ale nie ma chloroplastu. Co to może być? Uzasadnij wszystkie możliwości.
      
- **ZAKWESTIONUJ:** Czy każda komórka ma jądro? Uzasadnij, podając wyjątki.
      
- Czy wirus to komórka? Uzasadnij.
    
    Pokaż odpowiedzi
      
        
- Roślina (tkanka niezielona) **albo** grzyb. Wykluczyć zwierzę (brak ściany). Bakteria też ma ścianę, ale nie ma jądra — trzeba sprawdzić jądro. Jeśli widzimy dodatkowo dużą centralną wakuolę, bardziej prawdopodobna jest roślina.
        
- Nie — prokariota (bakterie) nie mają jądra; dojrzałe erytrocyty ssaka tracą jądro.
        
- Nie — wirus nie ma budowy komórkowej ani metabolizmu. Nie jest komórką.
      
    
  

  

#### Drabinka trudności
  
    

      
      
        
        
        
        
        
        
      
    | Poziom | Zadanie |
| --- | --- |
| ODTWÓRZ | Wymień struktury komórkowe i ich funkcje. |
| ZASTOSUJ | Rozpoznaj typ komórki. |
| WYJAŚNIJ | Dlaczego jądro jest kluczowe? |
| ODKRYJ | Która komórka ma chloroplasty? |
| POŁĄCZ | Połącz strukturę z funkcją. |
| ZAKWESTIONUJ | Czy każda komórka ma jądro? |

  

  14. Zadania egzaminacyjne E8 — z uzasadnieniem

  
    

Zadanie 1
    

Na rysunku przedstawiono komórkę mającą jądro, mitochondria, ścianę komórkową i dużą wakuolę, ale bez chloroplastów.
    

**Podaj dwie możliwe grupy organizmów, do których może należeć ta komórka. Uzasadnij odpowiedź.**
    Pokaż model odpowiedzi
      

**Najbardziej prawdopodobna jest komórka roślinna z tkanki niezielonej**, na przykład komórka cebuli. Ma jądro, mitochondria, ścianę komórkową i dużą wakuolę, ale nie musi mieć chloroplastów.
      

**Komórka grzyba** również ma jądro, mitochondria i ścianę, jednak duża centralna wakuola jest szczególnie typowa dla komórek roślinnych. Bez dodatkowych danych (np. informacji o chemii ściany) nie można rozstrzygnąć tego całkowicie pewnie.
      

**Uwaga dydaktyczna:** to zadanie uczy rozróżnienia między „możliwe", „prawdopodobne" i „pewne".
    
  

  
    

Zadanie 2
    

Uczeń napisał: „Roślina nie potrzebuje mitochondriów, ponieważ ma chloroplasty".
    

**Oceń prawdziwość zdania i wyjaśnij błąd.**
    Pokaż model odpowiedzi
      

**Zdanie jest fałszywe.**
      

**Wyjaśnienie:** chloroplasty wytwarzają cukier podczas fotosyntezy, a mitochondria uwalniają energię z tego cukru w oddychaniu komórkowym. Rośliny mają mitochondria i oddychają przez całą dobę.
    
  

  
    

Zadanie 3
    

Wskaż strukturę wspólną dla komórki bakterii, rośliny i zwierzęcia: chloroplast, jądro, rybosom, mitochondrium.
    Pokaż odpowiedź
      

**Rybosom** — wszystkie komórki wytwarzają białka.
    
  

  
    

Zadanie 4
    

Podaj, która struktura nadaje kształt komórce roślinnej, ale nie występuje w komórce zwierzęcej. Wyjaśnij, dlaczego komórka zwierzęca może się bez niej obyć.
    Pokaż model odpowiedzi
      

**Ściana komórkowa (celulozowa).**
      

**Uzasadnienie:** Komórki zwierzęce mają tylko błonę, która nie usztywnia komórki. Dzięki temu mogą zmieniać kształt i się przemieszczać (np. w tkankach mięśniowych, w komórkach ruchliwych), dlatego nie potrzebują sztywnej ściany.
    
  

  15. Fiszki POWTÓRKA

  
    
      Jaka struktura przechowuje większość DNA w komórce eukariotycznej?
      **Jądro komórkowe**
      podstawa
    
    
      Gdzie zachodzi fotosynteza?
      **W chloroplastach**
      podstawa
    
    
      Czy rośliny mają mitochondria?
      **Tak. Oddychają komórkowo przez całą dobę**
      pułapka
    
    
      Co odróżnia komórkę roślinną od zwierzęcej?
      **Zwykle ściana komórkowa, chloroplasty i duża wakuola**
      podstawa
    
    
      Z czego zbudowana jest ściana komórkowa bakterii?
      **Z mureiny (peptydoglikanu)**
      podstawa
    
    
      Co mają wszystkie komórki?
      **Błonę komórkową, cytoplazmę, materiał genetyczny i rybosomy**
      podstawa
    
    
      Czy wirus jest komórką?
      **Nie; nie ma budowy komórkowej ani własnego metabolizmu**
      pułapka
    
    
      Gdzie w komórce eukariotycznej jest materiał genetyczny oprócz jądra?
      **W mitochondriach, u roślin też w chloroplastach**
      ambitny
    
    
      Co to komórka prokariotyczna?
      **Komórka bez jądra otoczonego błoną — np. bakteria**
      podstawa
    
    
      Co wytwarzają mitochondria?
      **Większość ATP — podczas oddychania komórkowego tlenowego**
      podstawa
    
    
      Jaka jest rola rybosomów?
      **Synteza białek**
      podstawa
    
    
      Jak najczęściej rozmnażają się bakterie?
      **Bezpłciowo przez podział binarny**
      ambitny
    
    
      Co mówi teoria komórkowa o pochodzeniu nowych komórek?
      **Nowe komórki powstają z wcześniej istniejących komórek**
      podstawa
    
    
      Co głosi teoria endosymbiozy?
      **Mitochondria i chloroplasty wywodzą się od dawnych bakterii**
      ambitny
    
    
      Czy komórka zwierzęca ma ścianę komórkową?
      **Nie — ma tylko błonę komórkową**
      pułapka
    
    
      Czy każda komórka roślinna ma chloroplasty?
      **Nie — np. komórki korzenia i cebuli ich nie mają**
      E8
    
  

  16. Test końcowy (3+2+2+1) TRENING
  

Format 3+2+2+1: 3 zadania podstawowe, 2 treningowe, 2 ambitne, 1 zaawansowane.
  
    
      
- (P) Co to komórka?
      
- (P) Wymień 3 struktury komórkowe i ich funkcje.
      
- (P) Gdzie w komórce eukariotycznej jest większość DNA?
      
- (T) Dlaczego roślina ma mitochondria?
      
- (T) Popraw: „Komórka zwierzęca ma ścianę".
      
- (A) Czym różni się prokariota od eukarioty?
      
- (A) Co to endosymbioza (idea)?
      
- (Z) Skąd się bierze mtDNA i jak się dziedziczy u człowieka?
    
    Pokaż odpowiedzi
      
        
- Najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów.
        
- Np. jądro — większość DNA; mitochondria — ATP; chloroplasty — fotosynteza.
        
- W jądrze (+ mtDNA w mitochondriach).
        
- Bo oddycha — fotosynteza produkuje cukier, a mitochondria uwalniają z niego energię.
        
- Nie ma ściany — tylko błonę.
        
- Prokariota: brak jądra otoczonego błoną, brak struktur błonowych poza błoną komórkową, DNA w nukleoidzie. Eukariota: jądro + struktury błonowe.
        
- Mitochondria/chloroplasty wywodzą się od dawnych bakterii (dowody: własny DNA, rybosomy podobne do bakteryjnych).
        
- mtDNA — z mitochondriów; u człowieka prawie zawsze dziedziczony po matce (szkolna reguła).
      
    
  

  17. Checklista
  
    
      
- ☐ Wiem, czym jest komórka i dlaczego jest podstawową jednostką życia.
      
- ☐ Znam struktury komórkowe i ich funkcje.
      
- ☐ Rozpoznaję komórkę roślinną / zwierzęcą / grzybową / bakteryjną po cechach.
      
- ☐ Wiem, że jądro zawiera **większość**, ale nie całe DNA.
      
- ☐ Wiem, że wirus ≠ komórka.
      
- ☐ Odróżniam prokariota od eukariota.
      
- ☐ Znam teorię komórkową.
      
- ☐ Znam teorię endosymbiozy (ambitny).
      
- ☐ Wiem, co to mtDNA i jak się dziedziczy u człowieka (zaawansowany).
      
- ☐ Wiem, że **nie każda** komórka roślinna ma chloroplasty.
    
  

  18. Mapa pojęć
  
    

[schemat SVG w HTML]

    Mapa pojęć L001 — od komórki przez typy do wirusa jako wyjątku.
  

  19. Co dalej? Jak się uczyć?
  
    

**Następna lekcja:** L002 — człowiek (wybrane) → mosty do L015 (komórki haploidalne), L019 (grupy krwi).
    

Potem **L003** (diagnoza) → **L010** (cechy) → **L011 (DNA)** — najważniejszy most.
    

**Plan nauki:**
    
      
- Ściąga (5 min).
      
- Narysuj schemat komórki roślinnej i zwierzęcej (10 min).
      
- Mini-check (5 min).
      
- Ćwiczenia A i B (10 min).
      
- Fiszki (10 min).
      
- Test końcowy (10 min).
      
- Powtórka za 1 dzień, 3 dni, tydzień.
    
  

  

#### Powtórki rozłożone w czasie
  
    

      
      
        
        
        
        
        
      
    | Kiedy | Co | Czas |
| --- | --- | --- |
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

  

  20. Słownik
  
    

      
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    | Termin | Definicja |
| --- | --- |
| Komórka | Najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów |
| Jądro | Struktura z większością DNA; kieruje pracą komórki (eukarionty) |
| Mitochondrium | Struktura, w której powstaje większość ATP (oddychanie komórkowe tlenowe) |
| Chloroplast | Struktura, w której zachodzi fotosynteza (rośliny, glony) |
| Błona komórkowa | Granica komórki, transport, odbiór sygnałów |
| Ściana komórkowa | Ochrona, kształt — rośliny, grzyby, bakterie |
| Wakuola | Magazyn, turgor |
| Rybosom | Struktura, w której zachodzi synteza białek (bez błony) |
| Prokariota | Komórka bez jądra otoczonego błoną (bakteria) |
| Eukariota | Komórka z jądrem |
| Nukleoid | Obszar z DNA u prokariotów |
| Plazmid | Mała, kolista cząsteczka DNA u bakterii (poza nukleoidem) |
| ATP | Bezpośredni nośnik energii w komórce |
| mtDNA | DNA mitochondrialny |
| cpDNA | DNA chloroplastowy |
| Cytoplazma | Zawartość komórki poza jądrem |
| Endosymbioza | Teoria: mitochondria/chloroplasty wywodzą się od dawnych bakterii |
| Teoria komórkowa | Wszystkie organizmy komórkowe z komórek; nowe komórki z podziału |
| Podział binarny | Typowy bezpłciowy sposób rozmnażania bakterii |

  

  21. Dodatek — historia i ciekawostki ZAAWANSOWANY

  

#### 21.1. Odkrycie komórki — pełniejsza historia
  
    
      
- **1665 — Robert Hooke:** nazwa „cellula" (korek).
      
- **1674 — Antonie van Leeuwenhoek:** pierwsze żywe komórki (bakterie).
      
- **1831 — Robert Brown:** odkrycie jądra komórkowego.
      
- **1838–1839 — Schleiden i Schwann:** teoria komórkowa.
      
- **1855 — Rudolf Virchow:** *Omnis cellula e cellula*.
      
- **1931 — Ernst Ruska:** mikroskop elektronowy.
      
- **1967 — Lynn Margulis:** teoria endosymbiozy.
    
  

  

#### 21.2. Ciekawostki o komórkach
  
    
      
- Ciało człowieka składa się z **dziesiątek bilionów komórek**.
      
- Bakterii w ciele człowieka jest bardzo dużo (mikrobiom) — więcej niż naszych komórek.
      
- Największa komórka człowieka: **komórka jajowa** (~0,1 mm).
      
- Najdłuższa: **neuron** — do 1 m.
      
- Erytrocyty żyją **120 dni** i nie mają jądra — nie mogą się dzielić.
      
- Niektóre komórki nerwowe żyją **całe życie** i nie dzielą się.
    
  

  

#### 21.3. Zadanie olimpijskie
  
    

**Pytanie:** Komórka ma: podwójną błonę wokół jądra, rybosomy 80S w cytoplazmie i 70S w pewnej strukturze, ścianę z celulozy. Jaki to typ komórki? Uzasadnij.
    

**Rozwiązanie:**
    
      
- Jądro z podwójną błoną → eukariota.
      
- Rybosomy 70S w pewnej strukturze → **mitochondrium lub chloroplast** (oba bakteryjnego pochodzenia).
      
- Ściana z celulozy → **roślina**.
    
    

**Odpowiedź:** komórka **roślinna**.
  

  22. Połączenia międzyprzedmiotowe
  
    
      
- **Chemia:** białka, tłuszcze, cukry, woda, pH.
      
- **Fizyka:** dyfuzja, osmoza, transport aktywny.
      
- **Geografia:** fotosynteza w ekosystemach, mikrobiom gleby.
      
- **Informatyka:** modelowanie komórek, symulacje.
      
- **Medycyna:** choroby komórkowe, nowotwory.
    
  

  23. Zadania z życia codziennego (z modelami odpowiedzi)

  
    

**1. Dlaczego mięśnie potrzebują dużo mitochondriów?**
    Model odpowiedzi
      

Mięśnie wykonują dużo pracy, a praca wymaga energii. Mitochondria wytwarzają większość ATP potrzebnego do skurczu mięśni. Dlatego komórki mięśniowe mają szczególnie dużo mitochondriów.
    
  

  
    

**2. Dlaczego liście są zielone?**
    Model odpowiedzi
      

Liście zawierają chloroplasty z barwnikiem **chlorofilem**, który pochłania przede wszystkim światło czerwone i niebieskie, a odbija zielone. Dlatego liście widzimy jako zielone.
    
  

  
    

**3. Dlaczego cebula ma „grube ściany" pod mikroskopem?**
    Model odpowiedzi
      

Komórki cebuli są komórkami roślinnymi, więc mają sztywną ścianę komórkową z celulozy. Pod mikroskopem granica między sąsiednimi komórkami może wyglądać jak gruba linia, ponieważ widoczne są ściany sąsiednich komórek leżące obok siebie.
    
  

  
    

**4. Dlaczego erytrocyty nie mają jądra?**
    Model odpowiedzi
      

Dojrzały erytrocyt ssaka traci jądro w trakcie dojrzewania — dzięki temu ma więcej miejsca na hemoglobinę, która transportuje tlen. Nie może się jednak dzielić.
    
  

  
    

**5. Dlaczego antybiotyki nie działają na wirusy?**
    Model odpowiedzi
      

Antybiotyki działają na określone struktury lub procesy bakterii, np. ich rybosomy albo budowę ściany komórkowej. Wirusy nie mają własnych rybosomów, typowej budowy komórkowej ani samodzielnego metabolizmu, dlatego antybiotyki ich nie niszczą. Na niektóre wirusy stosuje się leki przeciwwirusowe — to inne substancje niż antybiotyki.
    
  

  
    

**6. Dlaczego roślina rośnie w nocy?**
    Model odpowiedzi
      

Roślina rośnie także w nocy, ponieważ wzrost nie polega wyłącznie na fotosyntezie. Fotosynteza dostarcza cukrów, ale wzrost wymaga także oddychania komórkowego, podziałów komórek, ich wydłużania oraz budowania nowych struktur. Oddychanie zachodzi również w nocy. Roślina w nocy **nie przeprowadza fotosyntezy** bez światła, ale nadal oddycha.
    
  

  24. Status lekcji
  
    Wersja 5.2 (2026-09-13) — po korekcie merytorycznej i redakcyjnej
    

Zachowano całą treść v5.1. Uściślono hasło „jądro = DNA", definicję komórki, opis mitochondriów i bakterii, tabelę typów komórek (kolumna „uwaga"), teorię komórkową, endosymbiozę. Dodano sekcję o błonie i transporcie, modele odpowiedzi do zadań z życia i ujednolicono terminologię polską.
  

  

**BIOLOGIA L001 v5.2** · Komórka: budowa, funkcje, typy komórek i teoria komórkowa · 2026
  

Ucz się świadomie, nie na pamięć.

<details><summary>Wcześniejsza warstwa MD L001 (v4.0, zachowana)</summary>


## MASTER 2026 — zasady przebudowy całego pliku

### 1. Cel
Ten plik jest **źródłem treści**, a nie gotowym HTML. Treść ma być kompletna i samodzielna, natomiast znaczniki `[BIO: ...]` opisują przyszłą warstwę wizualną/interaktywną.

### 2. Zasada „bez utraty treści”
- Materiał z poprzednich wersji pozostaje w odpowiedniej lekcji albo w banku powtórzeniowym.
- Przeniesienie treści nie oznacza jej usunięcia.
- Usuwamy tylko rzeczy faktycznie błędne, sprzeczne albo powielone w sposób utrudniający naukę; w takim przypadku poprawiona wersja zastępuje błędną.
- Historyczne dopiski wersji nie mają być dla ucznia osobnymi „lekcjami”.

### 3. Warstwy
**PODSTAWA E8 → MASTER → ZAAWANSOWANY → KONKURS/OLIMPIADA**. Uczeń powinien móc zatrzymać się na poziomie podstawowym i nadal rozumieć lekcję.

### 4. Zasada testów
Każde wymagające zadanie musi mieć wcześniej przygotowaną teorię, przykład prowadzony albo analogiczne ćwiczenie. Diagnoza nie może wymagać wiedzy, która pojawia się dopiero później.

### 5. Zasada wizualna
Każdy kluczowy proces otrzymuje w MD opis przyszłej grafiki: **co pokazać → co podpisać → co uczeń ma zauważyć → jaka pułapka ma zostać wyjaśniona**.

### 6. Checkboksy
Checkbox nie jest elementem obowiązkowym. W większości lekcji wystarczy tabela „umiem / muszę powtórzyć”, test lub mini-check.

### 7. Wspólny język
- **DNA** — cząsteczka zbudowana z nukleotydów; informacja jest zapisana w kolejności zasad.
- **Gen** — odcinek DNA zawierający informację genetyczną; na poziomie MASTER można doprecyzować, że informacja może dotyczyć produktu, np. białka lub funkcjonalnego RNA.
- **Chromosom** — struktura z DNA i związanymi z nim białkami, służąca organizacji materiału genetycznego.
- **Dominujący/recesywny** opisuje sposób ujawniania allelu w określonym modelu dziedziczenia, a nie „lepszość” ani częstość.
- Zmiana DNA **może** wpłynąć na cechę, ale skutek zależy od miejsca, rodzaju zmiany i jej kontekstu biologicznego.

### 8. Główna kolejność nauki
`komórka → genetyka i zmienność → DNA → chromosomy → replikacja → mitoza → mejoza → dziedziczenie → płeć/ABO → mutacje → nowotwory → powtórka przekrojowa`

### 9. Warstwa wizualna — standard
```text
[BIO: DIAGRAM type=CONCEPT]
ELEMENT → RELACJA → PROCES → SKUTEK
[/BIO: DIAGRAM]
```
Dla grafiki należy preferować jeden komunikat poznawczy na jedną planszę. Nie budować „dekoracyjnych” ilustracji bez funkcji dydaktycznej.

### 10. Aktualność podstawy programowej
Dla ucznia klasy VIII w roku szkolnym 2026/2027 punktem odniesienia pozostaje zakres obowiązujący dla obecnego etapu wdrażania; nowa podstawa z 2026 r. jest wdrażana sukcesywnie od klas I i IV, a nie jednocześnie we wszystkich klasach. Zakres genetyki obejmuje m.in. DNA, replikację, chromosomy, mitozę/mejozę, nowotwory, dziedziczenie, płeć, ABO/Rh i mutacje.

---


# MASTER 2026 — nadrzędna architektura wersji v5.2


- **Nie usuwamy merytorycznej treści źródłowej.** Przenosimy ją, scalając duplikaty i wyraźnie oznaczając poziom.
- **Podstawa → MASTER → ZAAWANSOWANY:** uczeń najpierw dostaje pojęcie, potem mechanizm, następnie zadanie, a dopiero później wyjątki.
- **Każdy trudny test ma wcześniejsze przygotowanie:** definicję, przykład prowadzony albo analogiczne ćwiczenie.
- **Warstwa wizualna jest częścią specyfikacji MD:** przy każdym ważnym procesie opisujemy przyszły diagram, animację, model lub interakcję.
- **HTML nie jest jeszcze generowany:** znaczniki `[QUIZ]`, `[REVEAL]`, `[AUDIO]`, `[SCHEMA]`, `[IMAGE]` i opisy wizualne pozostają w MD jako instrukcja dla przyszłej implementacji.
- **Checkboxy tylko tam, gdzie pełnią funkcję kontroli postępu.** Zwykłe listy i tabele pozostają bez pól wyboru.

# L001 — Komórka jako podstawowa jednostka życia — fundament


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Komórka jako mapa.

`[BIO: DIAGRAM type=FLOW]`
`komórka → jądro → materiał genetyczny`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** umiejscowienie DNA bez utożsamiania jądra z DNA.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Powtórka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]  
**Poprzednia:** —  
**Następna:** L002

### Mapa lekcji + most do genetyki

| Warstwa | Gdzie w lekcji |
| ------------------- | ------------------------------------------------------ |
| **[PRZYPOMNIENIE]** | start hierarchii życia (pkt 3–4) |
| **[PODSTAWA E8]** | organelle: **jądro = DNA** (pkt 5–6) + Klinika (pkt 9) |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | prokariota/eukariota (pkt 7) |
| **[ZAAWANSOWANY]** | mtDNA, endosymbioza (pkt 8 + 19) |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

**Most obowiązkowy:** jądro → materiał genetyczny → **L011 (DNA)**.  
**Mosty dodatkowe:** mitochondria (ATP, oddychanie); ściana (rozpoznawanie typów); błona (granica / transport).

**Bez solidnego „jądro = DNA” nie ma sensu startować genetyki.**

---

## 1. Pytanie przewodnie

Co jest najmniejszą jednostką życia i gdzie w komórce znajduje się materiał genetyczny?

---

## 2. Cele lekcji (+ 80/20)

Po lekcji uczeń:

- wymienia poziomy organizacji życia (komórka → tkanka → narząd → układ → organizm),
- rozpoznaje podstawowe organelle: jądro, mitochondria, chloroplast, błona komórkowa, ściana komórkowa, wakuola, rybosomy,
- wiąże jądro z materiałem genetycznym (DNA) — most do L011,
- odróżnia komórkę prokariotyczną od eukariotycznej,
- (ambitny) rozumie, że mtDNA to materiał genetyczny poza jądrem,
- (zaawansowany) zna ideę teorii endosymbiozy i dziedziczenie pozajądrowe.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
| ----------------------------------- | ------------------------------ |
| jądro = DNA | fundament całej genetyki |
| mitochondria = ATP | energia komórki |
| błona = granica | podstawowa struktura |
| chloroplast = fotosynteza (rośliny) | odróżnienie roślin od zwierząt |
| ściana = celuloza / chityna / mureina | rozpoznawanie typów komórek |

**Dlaczego to wystarczy?** Bo większość zadań E8 o komórce sprowadza się do organelli i miejsca DNA.

---

## 3. Co trzeba wiedzieć wcześniej (kompas) · **[PRZYPOMNIENIE]**

Nic — to start hierarchii życia.

- Wiesz, że organizmy są z komórek? → idź dalej.
- Nie wiesz? → ściąga (pkt 5) i wróć.

---

## 4. Zacznij od problemu

Skąd komórka „wie”, co ma robić? Skąd bierze energię? Jak odróżnia wnętrze od otoczenia?

**Hipoteza ucznia:** ....................................

**Podpowiedź:** miasto — ratusz (decyzje), elektrownia (energia), mur (granica).

Po lekcji wróć do hipotezy.

---

## 5. Ściąga — poziom podstawowy · **[PODSTAWA E8]**

**Komórka** — najmniejsza jednostka życia zdolna do czynności życiowych (przemiana materii, wzrost, reakcja na bodźce; u wielu także podział). **Wirusy nie są komórkami.**

**Organellum** (szkolnie): wyodrębniona struktura o funkcji. **Rybosomy nie mają błony** — to nie organella błonowe.

**Cytoplazma** — u eukariontów zawartość poza jądrem (cytosol + organella).

**ATP** — nośnik energii wykorzystywany w komórce. W mitochondriach podczas oddychania komórkowego powstaje znaczna część ATP u eukariontów, ale pierwszy etap oddychania — glikoliza — zachodzi w cytozolu. Bakterie nie mają mitochondriów, a mimo to wytwarzają ATP.

| Organellum | Funkcja | Występuje u |
| ---------------- | ------------------------------------- | -------------------------------- |
| Jądro | przechowuje DNA | eukarionty |
| Mitochondrium | energia (ATP) | prawie wszystkie eukarionty |
| Chloroplast | fotosynteza | rośliny, glony |
| Błona komórkowa | granica, transport | wszystkie komórki |
| Ściana komórkowa | ochrona, kształt | rośliny, grzyby, bakterie |
| Wakuola | magazyn, turgor | rośliny (duża), zwierzęta (małe) |
| Rybosomy | synteza białek | wszystkie komórki |

### Ściany

| Grupa | Ściana | Uwaga |
| --------- | --------------------------- | ------------------------ |
| Rośliny | głównie **celuloza** | + blaszka środkowa |
| Grzyby | głównie **chityna** | nie mylić z owadami |
| Bakterie | **mureina** (peptydoglikan) | inna chemia |
| Zwierzęta | **brak** | tylko błona |

### Prokariota — 4 fakty

1. Brak jądra z błoną; DNA w **nukleoidzie** (+ często plazmidy).
2. Są rybosomy i błona; **brak mitochondriów i chloroplastów**.
3. Oddychanie / fotosynteza bakterii — błona lub wpuklenia, nie „nasze” organella.
4. Przykład: bakteria, sinica. Nie: „bakteria = małe zwierzę”.

### Mnemotechniki

| # | Mnemotechnika | Znaczenie |
| --- | ------------------------------------- | ---------------------------- |
| 1 | Jądro = biblioteka | DNA |
| 2 | Mito ≈ „mięsień” / moc | ATP |
| 3 | Błona = płot | granica |
| 4 | Chloro = zielony | fotosynteza |
| 5 | Rybo = robi białka | synteza |
| 6 | Ściana ≠ zawsze roślina | celuloza / chityna / mureina |

---

## 6. Wyjaśnienie od podstaw · **[PODSTAWA E8]**

- **jądro** — DNA, kieruje pracą komórki,
- **mitochondrium** — ATP (oddychanie komórkowe),
- **chloroplast** — fotosynteza (rośliny, glony),
- **błona** — granica i transport,
- **ściana** — rośliny, grzyby, bakterie,
- **wakuola** — magazyn, turgor,
- **rybosomy** — synteza białek.

### 6A. Dlaczego?

1. Bez jądra (u typowego eukarionta) brak „przepisu” na białka.
2. Bez energii (ATP) nie ma pracy komórki.
3. Bez błony zawartość miesza się z otoczeniem.
4. Chloroplast: miejsce fotosyntezy. W fotosyntezie z CO₂ i H₂O, przy udziale energii światła, powstają związki organiczne, a tlen jest uwalniany jako produkt procesu.
5. Roślina **ma też mitochondria**: fotosynteza robi cukier, oddychanie uwalnia z niego ATP. Oddycha **cały czas**.

### 6B. Typ komórki w 10 s

1. Jądro? Nie → prokariota (albo erytrocyt ssaka przy krwi). Tak → eukariota.
2. Chloroplast? Tak → roślina / glon.
3. Ściana + brak chloroplastu → roślina (tkanka niezielona) **albo** grzyb.
4. Brak ściany + brak chloroplastu + jądro → zwierzę.

### 6C. Przykład prowadzony

Dane: jądro, mitochondrium, błona, bez chloroplastu i ściany.  
→ eukariota, nie roślina, nie grzyb → **komórka zwierzęca**.

Spróbuj: jądro + ściana + chloroplast + mitochondrium + wakuola → **roślinna**.

### 6D. Mosty

```
L001 (jądro = DNA)
  → L002 (krew, gamety)
  → L003 (diagnoza)
  → L010 (cechy)
  → L011 (DNA, A–T / C–G)
  → L012 (chromosom)
```

Most: umiesz wskazać DNA na schemacie? → możesz iść do L011.

---

## 7. Poziom ambitny · **[MASTER]**

| Cecha | Prokariota | Eukariota |
| ----------------- | ------------------------ | -------------------------- |
| Jądro | brak | jest |
| DNA | nukleoid | jądro (+ extra mtDNA) |
| Organelle błonowe | brak | mitochondria, ER… |
| Rybosomy | są | są |
| Przykład | bakterie | rośliny, zwierzęta, grzyby |

DNA w jądrze: transkrypcja oddzielona od translacji — łatwiejsza regulacja (idea).

---

## 8. Poziom zaawansowany · **[ZAAWANSOWANY]**

- **mtDNA** poza jądrem; u człowieka zwykle **po matce**.
- Rybosomy mitochondrialne zbliżone do bakteryjnych → argument za **endosymbiozą**.
- Endosymbioza: mitochondria i chloroplasty z dawnych bakterii (idea, nie mechanizm na E8).
- **cpDNA** — DNA chloroplastu.

---

## 9. Klinika błędów

| Błąd | Poprawa |
| ------------------------------------------------------- | ----------------------------------------------- |
| DNA pływa w cytoplazmie człowieka | u eukariontów w jądrze (mtDNA — extra) |
| Mitochondrium = jądro | ATP vs DNA |
| Roślina nie ma mitochondrium | ma; oddycha cały czas |
| Zwierzęca ma ścianę | nie |
| Chloroplast u zwierząt | rośliny i glony |
| Każda komórka ma jądro | nie: prokariota; dojrzały erytrocyt ssaka |
| Roślina nie oddycha | oddycha w mitochondriach |
| Ściana = zawsze roślina | też grzyby i bakterie |
| Ściana bez chloroplastu = na pewno roślina | grzyb albo tkanka roślinna niezielona |
| DNA tylko w jądrze | też mtDNA / cpDNA (extra) |
| Rybosom tylko u eukariontów | we wszystkich komórkach |

**Klinika 2.0 (1):** „Roślina nie ma mitochondrium, bo ma chloroplast.”  
Chloroplast ≠ zamiennik mitochondrium. Fotosynteza ≠ oddychanie.

**Klinika 2.0 (2):** „Ściana bez chloroplastu = na pewno roślina.”  
Może grzyb (chityna) albo nabłonek cebuli.

---

## 10. Obserwacja / model

Problem → hipoteza → materiał → **obserwacja** → **wniosek** → ograniczenia → BHP.

| Obserwacja | Wniosek |
| ----------------------------------------- | --------------------------------------------------------------------------- |
| Zielone ziarna w Elodei | chloroplasty |
| Gruba granica komórki cebuli | ściana |
| Brak zieleni w łusce cebuli | ta tkanka bez chloroplastów — cebula nadal jest rośliną |
| Brak wyraźnej ściany w wymazie z policzka | komórka zwierzęca |

**BHP:** instrukcja pracowni; nie dotykać soczewek; nie świecić agresywnie w oczy.

Preparaty: cebula · Elodea · wymaz z policzka.

`[BIO: DIAGRAM type=CELL variant=ANIMAL]` / `[BIO: DIAGRAM type=CELL variant=PLANT]`

---

## 11. Ćwiczenia

**11A.** 1 komórka? 2 DNA eukarionta? 3 ATP? 4 roślina vs zwierzę? 5 błona?

**11B.** jądro + ściana + chloroplast + mitochondrium + wakuola → roślinna.

**11C A** 1–5 organella, dopasowanie, DNA, ATP, organellum.  
**B** 6–10 różnice, ściana zwierzęcia, jądro a genetyka, celuloza/chityna/mureina, grzyb vs roślina.  
**C** 11–14 prokariota, ekspresja, mitochondria roślin, erytrocyt.  
**D** 15–18 mtDNA, endosymbioza, chloroplast u zwierzęcia?, cpDNA.

**11D THINK:** ściana bez chloroplastu; czy każda komórka ma jądro; wirus; mięsień vs skóra (mitochondria).

Drabinka: ODTWÓRZ → ZASTOSUJ → WYJAŚNIJ → ODKRYJ → POŁĄCZ → ZAKWESTIONUJ.

---

## 12. Odpowiedzi

1. Najmniejsza jednostka życia (wirus nie).  
2. Jądro (eukarionty).  
3. Mitochondrium.  
4. Ściana, chloroplast, duża wakuola.  
5. Granica i transport.  
6. Roślinna: ściana + chloroplast (typowa zielona); zwierzęca: bez obu.  
7. Zwierzęca nie ma ściany.  
8. W jądrze jest DNA.  
9. Celuloza / chityna / mureina.  
10. Skład ściany + chloroplasty (gdy są).  
11. Prokariota bez jądra.  
12. Transkrypcja oddzielona od translacji (idea).  
13. Tak — rośliny oddychają.  
14. Dojrzały erytrocyt ssaka bez jądra.  
15. Mitochondria; zwykle po matce.  
16. Dawne bakterie → mitochondria / chloroplasty (idea).  
17. Nie — zwierzę bez chloroplastów.  
18. DNA chloroplastu.

---

## 13. Fiszki

| Pytanie | Odpowiedź |
| ---------------------------------- | ---------------------------- |
| Jądro | DNA |
| Mitochondrium | ATP |
| Chloroplast | fotosynteza |
| Błona | granica |
| Ściana | rośliny, grzyby, bakterie |
| mtDNA | DNA mitochondrium |
| Prokariota | bez jądra |
| Wirus = komórka? | nie |
| Ściany 3 grup | celuloza / chityna / mureina |
| Bakteria — mitochondrium? | nie |
| Erytrocyt ssaka — jądro? | dojrzały: nie |
| cpDNA | DNA chloroplastu |
| Rybosom — błona? | nie |

---

## 14. Test (3+2+2+1)

1–3 (P) komórka, 3 organella, gdzie DNA.  
4–5 (T) mitochondrium; „zwierzęca ma ścianę”.  
6–7 (A) prokariota; po co jądro.  
8 (Z) mtDNA.

---

## 15. Checklista

- [ ] komórka i organellum  
- [ ] organella  
- [ ] roślina / zwierzę / grzyb  
- [ ] DNA (jądro + extra mtDNA)  
- [ ] wirus ≠ komórka  
- [ ] most L011  

---

## 16. Mapa

```
KOMÓRKA
├── jądro (DNA) → L011
├── mitochondria (ATP)
├── chloroplast
├── błona
├── ściana
├── rybosomy
└── prokariota vs eukariota
```

---

## 17. Co dalej?

L002 człowiek (krew → L019, gamety → L015) → L003 → L010 → **L011**.

---

## 18. Słownik

Komórka · organellum · jądro · mitochondrium · chloroplast · błona · ściana · mtDNA · cpDNA · prokariota · eukariota · ATP · nukleoid.

---

## 19. Dodatek zaawansowany

Endosymbioza · rybosomy mitochondrialne · mtDNA po matce · cpDNA.  
Ciekawostki: rząd 10¹³ komórek + mikrobiom; chlorofil; sinice fotosyntetyzują bez chloroplastu eukariotycznego.

---

## 20. Jak się uczyć

Ściąga → rysunek → fiszki → test → powtórka nazajutrz.  
Interleaving: DNA komórki; skala atom vs komórka (chemia L001); most L011; erytrocyt (L002/L019).

---

## 21. Między przedmiotami

Chemia: błona, ATP. Fizyka: dyfuzja, osmoza. Geografia: fotosynteza w ekosystemie.

---

## 22. Z życia

Mięśnie i mitochondria. Zieleń liści. Pęknięcie błony. Cebula niezielona. Antybiotyki a różnica prokariota/eukariota (idea, bez dawek).

---

## 23. STATUS L001

v3.7 zachowane w duchu · v3.9.1 włączone · **v4.0 (2026-09-12)** pełny szablon mapy / kliniki / drabinki.  
Zasada: nic istotnego nie wyrzucone.

**Koniec L001 MASTER v4.0**

</details>


**Wizualizacje HTML L001:** 4 typy komórek + błona≠ściana (`BIO_001_v07_komorka_budowa_funkcje_typy_komorek_teoria_komorkowa.html`).

<!-- ==================== END L001 ==================== -->


<!-- ==================== BEGIN L001A ==================== -->

# L001A — Dodatek ambitny: od komórki do teorii endosymbiozy

## KARTA LEKCJI L001A

- Numer: L001A
- Tytuł roboczy: Endosymbioza (extra)
- Dział: Komórka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L001 · Następna: L002
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Nie włączać do głównego toku podstawowego.**
**Grafika:** bakteria → organizm gospodarza → mitochondrium/chloroplast jako wynik dawnej endosymbiozy.
**Warstwy:** cecha → obserwacja → argument → wniosek, bez przedstawiania hipotezy jako „dowodu absolutnego”.

## Zakres
Do tego dodatku przenosimy trudniejsze treści obecne już w materiale: mtDNA, cpDNA, podwójne błony, własne rybosomy, podobieństwa do bakterii i argumenty za teorią endosymbiozy.

### Zasada
To jest **poziom ambitny/MASTER**, a nie wiedza konieczna do pierwszego opanowania budowy komórki.

---

## MOST DO GENETYKI
Po opanowaniu komórki uczeń powinien umieć odpowiedzieć: gdzie znajduje się materiał genetyczny, czym różni się DNA od chromosomu i dlaczego podział komórki wymaga wcześniejszego skopiowania DNA. Te pytania otwierają L010–L021.

<!-- ==================== END L001A ==================== -->


<!-- ==================== BEGIN L002 ==================== -->
## KARTA LEKCJI L002

- Numer: L002
- Tytuł roboczy: Człowiek: krew, gamety, płeć
- Dział: Człowiek
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L001 · Następna: L003 / L010
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L002_CZLOWIEK.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty

## WYKŁAD Z HTML L002 v5.0

HTML: `BIO_002_v07_czlowiek_krew_gamety_plec_cechy_organizmu.html`

Biologia L002 — Powtórka: człowiek (wybrane) — v5.0

  DNA z krwi — praktyka
  

Do badania DNA z krwi bierze się komórki **z jądrem** (głównie leukocyty). Dojrzały erytrocyt ssaka jądra nie ma. HLA, mtDNA, epigenetyka — warstwa ambitna, nie rdzeń E8 tej powtórki.

  
    
      L002 — Powtórka: człowiek (wybrane) — most pod genetykę
      Krew i grupy ABO · gamety i zygota · płeć · cechy organizmu
      
        Poprzednia: L001 (komórka) · Następna: L003 (diagnoza startowa)

        Warstwy: [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]

        **Wersja 5.0** — przebudowa „od podstaw do zaawansowanych"
      
    
  

  

### Spis treści

  
    0. Wprowadzenie — o co tu chodzi?
    Wprowadzenie
  

  
    1–4. Pytanie, cele, kompas, problem
    
      Pytanie przewodnie
      Cele + 80/20
      Kompas
      Zacznij od problemu
    
  

  
    5. Ściąga — człowiek a genetyka
    Ściąga
  

  
    6. Wyjaśnienie od podstaw (6A–6D)
    Wyjaśnienie
  

  
    7. Krew — anatomia i antygeny
    Krew
  

  
    8. Gamety, zygota i płeć
    Gamety i płeć
  

  
    9. Teoria komórkowa w organizmie
    Ciało a komórki
  

  
    10–11. Poziom ambitny i zaawansowany
    
      MASTER
      ZAAWANSOWANY
    
  

  
    12. Klinika błędów
    Klinika
  

  
    13–18. Obserwacja, ćwiczenia, egzamin, fiszki, test, checklista
    
      Obserwacja
      Ćwiczenia
      Zadania egzaminacyjne
      Fiszki
      Test
      Checklista
    
  

  
    19–24. Mapa, co dalej, słownik, dodatek, życie, status
    
      Mapa
      Słownik
      Dodatek
      Z życia
    
  

  Słowa kluczowe: krew · erytrocyty · grupy ABO · Rh · HLA · gameta · zygota · 2n = 46 · n = 23 · XX/XY · mitoza vs mejoza

  0. Wprowadzenie

  
    O co tu właściwie chodzi?
    

W lekcji L001 poznałeś komórkę — podstawowy „klocek" życia. Teraz czas na **organizm złożony z komórek** — i to jest właśnie **człowiek**.
    

Ale to nie jest lekcja całej anatomii. To lekcja **mostów** — punktów, w których wiedza o ciele człowieka łączy się z genetyką, którą będziemy zgłębiać od L010:
    
      
- **Krew i grupy krwi** — antygeny są dziedziczone. To pomost do L019 (grupy ABO i Rh).
      
- **Gamety i zygota** — komórki rozrodcze mają n = 23 chromosomy, zygota 2n = 46. To pomost do L015 (mejoza).
      
- **Płeć XX/XY** — chromosomy płci. To pomost do L018 (cechy sprzężone z X).
      
- **Każda cecha organizmu** bierze się z komórek i genów. To pomost do L010 (dziedziczenie i zmienność).
    
    

Nie musisz pamiętać wszystkich układów człowieka — wystarczy wiedzieć, **gdzie genetyka styka się z ciałem człowieka**.
  

  

#### Dlaczego to jest ważne dla genetyki?
  
    

Bo w genetyce trzeba non stop pamiętać:
    
      
- **Ciało człowieka ma 46 chromosomów (2n)** — w niemal każdej komórce z jądrem.
      
- **Gamety mają 23 chromosomy (n)** — po mejozie.
      
- **Zygota ma znów 46 (2n)** — po zapłodnieniu.
      
- **Krew to nasz „bank danych"** — z krwi można zbadać DNA, grupę krwi, obecność przeciwciał.
    
    

Te liczby i fakty wrócą w L011, L012, L015, L017, L019.
  

  
    Kluczowa myśl
    

Ta lekcja nie uczy anatomii — **ustawia pomost** między ciałem człowieka a genetyką.
  

  

#### Dlaczego to ma znaczenie?
  
    

      
      
        ****
        ****
        ****
        ****
        ****
      
    | Dziedzina | Zastosowanie |
| --- | --- |
| Medycyna | transfuzje krwi, przeszczepy, konflikt Rh |
| Genetyka | grupy krwi jako cechy dziedziczna, „krew jako źródło DNA" |
| Kryminalistyka | identyfikacja na podstawie śladów krwi |
| Rozrodczość | gdzie powstają gamety, jak dziedziczy się płeć |
| Poradnictwo genetyczne | ryzyko chorób w rodzinie |

  

  1. Pytanie przewodnie
  
    

Jak z komórek i genów wynikają cechy organizmu człowieka — i które układy są mostem do genetyki?
  

  2. Cele lekcji PODSTAWA E8

  
    Po tej lekcji umiesz:
    
      
- **wyjaśnić**, że cechy organizmu wynikają z komórek i genów (most do L010–L019),
      
- **wskazać** układy człowieka istotne dla genetyki: krwionośny (grupy krwi), rozrodczy (mejoza),
      
- **rozróżnić** komórki ciała (2n = 46) od gamet (n = 23),
      
- **wyjaśnić**, kto decyduje o płci dziecka,
      
- (ambitny) rozumieć, że krew to tkanka z wieloma układami antygenów (ABO, Rh, HLA),
      
- (zaawansowany) znać ideę dziedziczenia wielogenowego i wpływ środowiska.
    
  

  
    Zasada 80/20 — co naprawdę daje 80% efektu
    
      

        
        
          ****
          ****
          ****
          ****
          ****
        
      | 20% = 80% efektu | Dlaczego to jest kluczowe |
| --- | --- |
| 2n = 46 (ciało), n = 23 (gameta) | fundament liczb w całej genetyce |
| Krew + grupy ABO | most do L019 (kodominacja, 3 allele) |
| Układ rozrodczy → gamety → mejoza | most do L015 |
| Płeć: XX/XY; plemnik decyduje | most do L018 |
| Krew jako źródło DNA | praktyczne zastosowanie genetyki |

    
    

**Dlaczego to wystarczy?** Bo ta lekcja ma jeden cel: pokazać **pomost** między ciałem a genetyką. Nie uczysz się anatomii — uczysz się łączyć fakty.
  

  3. Kompas PRZYPOMNIENIE
  
    Co trzeba wiedzieć wcześniej
    
      
- **L001 (komórka):** jądro zawiera większość DNA; komórki mają błonę i cytoplazmę.
      
- **Z klas 4–7:** podstawowa anatomia człowieka — krew, serce, układy.
      
- **Z życia:** każdy zna swoją grupę krwi lub słyszał o transfuzji.
    
    

Jeśli nie pamiętasz, co to jądro komórkowe — wróć do L001, sekcja 5.
  

  4. Zacznij od problemu
  
    

**Skąd organizm wie, jak zbudować krew, mięśnie, nerwy? Dlaczego krew jednych ludzi jest „zgodna", a innych nie?**
    

Zapisz hipotezę: ....................................
    

**Podpowiedź:** Pomyśl o dwóch rzeczach:
    
      
- **Instrukcje:** komórki mają „przepisy" zapisane w DNA (L001). Z tych przepisów wynika, jakie białka i jakie cechy ma organizm.
      
- **Oznaczenia na powierzchni:** na komórkach (np. erytrocytach) są **antygeny** — swoiste „znaczki". Jeśli układ odpornościowy nie rozpozna „znaczka" jako swojego, zaatakuje obcą krew.
    
    

💡 Po lekcji wróć do hipotezy i sprawdź, czy była trafna.
  

  5. Ściąga PODSTAWA E8

  

#### 5.1. Czym jest ta lekcja? (definicja mostu)
  
    Definicja
    

Ta lekcja to **nie pełny podręcznik anatomii człowieka**, tylko **most** — zestaw faktów o ciele człowieka, które są potrzebne w genetyce klasy 8.
    

Zapamiętaj cztery kluczowe myśli:
    
      
- **Cechy organizmu** wynikają z komórek i genów — a nie „z niczego".
      
- **Komórki ciała** (somatyczne) człowieka mają **2n = 46** chromosomów.
      
- **Gamety** (plemnik, komórka jajowa) mają **n = 23** chromosomy.
      
- **Zygota** (po zapłodnieniu) znów ma **2n = 46**.
    
  

  

#### 5.2. Cztery układy istotne dla genetyki
  
    

      
      
        ****
        ****
        ****
        ****
      
    | Układ | Funkcja w skrócie | Most do genetyki |
| --- | --- | --- |
| Krwionośny | transportuje krew, tlen, substancje odżywcze, komórki odpornościowe | grupy krwi ABO i Rh (L019); krew jako źródło DNA |
| Rozrodczy | wytwarza gamety (plemniki, komórki jajowe) | mejoza — L015; redukcja 2n → n |
| Nerwowy i hormonalny | regulacja pracy organizmu | działanie białek → ekspresja genów (L011, L020) |
| Odpornościowy | rozpoznaje „swoje" i „obce"; zwalcza patogeny | antygeny, zgodność tkanek (HLA), konflikt Rh (L019) |

  

  

#### 5.3. Trzy kluczowe liczby
  
    

      
      
        ****
        ****
        ****
      
    | Struktura | Liczba chromosomów | Oznaczenie |
| --- | --- | --- |
| Komórka ciała (np. skóry, mięśnia, nerwu) | 46 | 2n |
| Gameta (plemnik, komórka jajowa) | 23 | n |
| Zygota (po zapłodnieniu) | 46 | 2n |

  
  
    Uwaga
    

**Dojrzały erytrocyt ssaka nie ma jądra** — nie ma więc pełnego zestawu DNA. To wyjątek (L001).
  

  

#### 5.4. Krew — co trzeba zapamiętać przed L019
  
    

**Krew to tkanka płynna** — nie narząd. Składa się z:
    
      
- **osocza** (~90% wody + białka + substancje rozpuszczone),
      
- **elementów morfotycznych**: erytrocyty (czerwone krwinki), leukocyty (białe krwinki), płytki krwi.
    
    

**Antygeny krwi** to „znaczki" — białka lub cukry na powierzchni erytrocytów. Najważniejsze układy:
    
      
- **ABO** — antygeny A i B (albo brak A i B → grupa 0).
      
- **Rh** — antygen D (Rh+ = jest D; Rh− = brak D).
      
- **HLA** — zgodność tkankowa (wiele genów, istotne przy przeszczepach).
    
  

  

#### 5.5. Płeć — jak się dziedziczy
  
    

**XX = kobieta** (dwa chromosomy X).

    **XY = mężczyzna** (jeden X i jeden Y).
    

**Komórka jajowa zawsze ma X** (od matki). **Plemnik ma X albo Y** (od ojca).
    

**Wniosek:** o płci dziecka decyduje **plemnik** — jeśli wniesie X, będzie dziewczynka (XX); jeśli Y, będzie chłopiec (XY).
  

  

#### 5.6. Mnemotechniki
  
    
      
- **46 = 2n (ciało), 23 = n (gameta)**
      
- **23 + 23 = 46** — gamety + zygota
      
- **XX kobieta, XY mężczyzna**
      
- **Plemnik decyduje o płci** — jajo zawsze X
      
- **Krew = transport + antygeny**
      
- **Krew to tkanka, nie narząd**
    
  

  6. Wyjaśnienie od podstaw

  

#### 6.1. Ciało człowieka jako „miasto komórek" (analogia)
  
    Analogia
    

Organizm człowieka to **miasto komórek**:
    
      

        
        
          ****
          ****
          ****
          ****
          ****
          ****
          ****
        
      | Element organizmu | Odpowiednik w mieście | Rola |
| --- | --- | --- |
| Komórki ciała | mieszkańcy i pracownicy | wykonują różne zadania |
| DNA w jądrze | księgozbiór instrukcji | te same instrukcje w każdej komórce (prawie) |
| Geny | poszczególne przepisy | każdy gen → produkt (białko/RNA) |
| Krew | sieć transportowa | dostarcza tlen, substancje, komórki odpornościowe |
| Erytrocyty | kurierzy z „identyfikatorami" | transportują tlen; mają antygeny A/B/D |
| Układ odpornościowy | straż miejska | rozpoznaje „swoje" i „obce" |
| Gamety | „karty do gry" z połową informacji | przekazują połowę DNA następnemu pokoleniu |

    
    

**Analogia pomaga zapamiętać funkcje** — ale pamiętaj, że żadna analogia nie jest idealna.
  

  

#### 6.2. Łańcuch: od genu do cechy organizmu
  
    DNA (gen) → RNA → BIAŁKO → funkcja w komórce → cecha komórki → cecha tkanki → cecha organizmu
                                                                     (+ środowisko + rozwój)
    

Ten łańcuch wyjaśnia, dlaczego **grupa krwi jest cechą dziedziczną** — allele ABO decydują o tym, jakie antygeny pojawią się na erytrocytach.
  

  

#### 6.3. 6A. Dlaczego?
  
    
      
- **Dlaczego krew jest ważna dla genetyki?** Bo erytrocyty mają antygeny A, B, D — a te są dziedziczone. Krew to także wygodne źródło DNA do badań.
      
- **Dlaczego gamety mają tylko n chromosomów?** Bo po zapłodnieniu n + n = 2n — liczba chromosomów musi się zgadzać w każdym pokoleniu (L015).
      
- **Dlaczego ojciec decyduje o płci?** Bo komórka jajowa zawsze ma X. Tylko plemnik może wnieść X albo Y.
      
- **Dlaczego jedna cecha może zależeć od wielu genów?** Bo np. wzrost, kolor skóry zależą od wielu genów jednocześnie (+ środowisko) — to **dziedziczenie wielogenowe**.
    
  

  

#### 6.4. 6B. Krok po kroku — jak połączyć układy z genetyką
  
    
      
- **Krew → antygeny → allele ABO.** Na erytrocytach są antygeny A/B/brak A i B. Decydują o tym allele Iᴬ, Iᴮ, i (L019).
      
- **Krew → Rh → antygen D.** Rh+ (jest D) vs Rh− (brak D). Ma znaczenie w ciąży (konflikt Rh).
      
- **Rozrodczy → gamety → mejoza.** W gonadach (jądra, jajniki) zachodzi mejoza — redukcja 2n → n (L015).
      
- **Nerwowy/hormonalny → białka → geny.** Hormony i neuroprzekaźniki to białka — więc ich budowa zależy od genów.
      
- **Odpornościowy → HLA.** Układ zgodności tkankowej — kluczowy przy przeszczepach.
    
  

  

#### 6.5. 6C. Przykład prowadzony
  
    

**Dane:** Matka ma grupę krwi 0 (genotyp ii), ojciec ma grupę A (genotyp IᴬIᴬ lub Iᴬi).
    

**Pytanie:** Jakie grupy krwi może mieć ich dziecko?
    

**Rozumowanie:**
    
      
- Matka ii → wszystkie jej gamety mają allel `i`.
      
- Ojciec A → jeśli IᴬIᴬ, wszystkie gamety mają `Iᴬ`. Jeśli Iᴬi, połowa gamet ma `Iᴬ`, połowa `i`.
      
- Dziecko może mieć:
        
          
- grupę A (genotyp Iᴬi) — jeśli ojciec daje Iᴬ;
          
- grupę 0 (genotyp ii) — jeśli ojciec daje i (a to możliwe tylko, gdy ojciec jest Iᴬi).
        
      
      
- **Grupa B ani AB jest niemożliwa** — matka ii nie może dać Iᴮ, a ojciec A nie ma Iᴮ.
    
    

**Odpowiedź:** Dziecko może mieć grupę A lub 0.
  

  

#### 6.6. 6D. Powiązanie z innymi lekcjami
  
    L001 (komórka: jądro = większość DNA)
  → L002 (człowiek: krew → L019, gamety → L015, płeć → L018)
  → L003 (diagnoza startowa)
  → L010 (cechy i zmienność)
  → L011 (budowa DNA) ← najważniejszy most
    

**Most:** jeśli umiesz powiedzieć, ile chromosomów ma gameta, a ile zygota → jesteś gotowy na L003 (diagnoza) i L010 (cechy).
  

  7. Krew — anatomia i antygeny MASTER

  

#### 7.1. Skład krwi
  
    

Krew to **tkanka płynna** — nie narząd. Składa się z:
    
      
- **osocza** (~55% objętości, ~90% wody + białka + substancje rozpuszczone),
      
- **elementów morfotycznych** (~45%):
        
          
- **erytrocyty** — czerwone krwinki (transport tlenu przez hemoglobinę),
          
- **leukocyty** — białe krwinki (obrona organizmu),
          
- **trombocyty** — płytki krwi (krzepnięcie).
        
      
    
    

**Ciekawostka:** dojrzały erytrocyt ssaka traci jądro i organelle — ma więcej miejsca na hemoglobinę, ale nie może się dzielić.
  

  

#### 7.2. Antygeny krwi — „znaczki" na erytrocytach
  
    

      
      
        ****
        ****
        ****
      
    | Układ | Antygeny / cecha | Znaczenie praktyczne |
| --- | --- | --- |
| ABO | A, B, brak A i B (grupa 0) | podstawowy układ przy transfuzjach |
| Rh | antygen D: Rh+ (jest D) / Rh− (brak D) | konflikt Rh w ciąży |
| HLA | wiele antygenów (kodowane przez wiele genów) | zgodność tkanek przy przeszczepach |

  
  

Pełne omówienie ABO + Rh → L019. Tu tylko zapoznajemy się z ideą.

  

#### 7.3. Transfuzja — idea zgodności
  
    

Przy transfuzji najważniejsze jest, żeby **antygeny krwinek dawcy nie zostały rozpoznane przez przeciwciała biorcy jako obce**.
    
      
- Osoba z grupą **0** ma na erytrocytach brak antygenów A i B — ale ma w osoczu przeciwciała anty-A i anty-B.
      
- Osoba z grupą **AB** ma antygeny A i B, ale nie ma przeciwciał anty-A ani anty-B.
    
    

**Uproszczenie szkolne:** grupa 0 bywa nazywana „dawcą uniwersalnym krwinek", a grupa AB — „biorcą uniwersalnym krwinek". **W praktyce medycznej zasady są bardziej złożone** i uwzględnia się więcej czynników.
  

  

#### 7.4. Konflikt Rh (idea)
  
    

**Sytuacja:** matka Rh−, płód Rh+ (po ojcu Rh+).
    

Jeżeli krew płodu przedostanie się do krwiobiegu matki, jej układ odpornościowy może wytworzyć **przeciwciała anty-D**. Kolejne ciąże z płodem Rh+ mogą być zagrożone.
    

**Profilaktyka:** podanie immunoglobulin anty-D. *To szczegół medyczny — w szkole wystarczy idea.*
  

  8. Gamety, zygota i płeć MASTER

  

#### 8.1. Trzy kluczowe liczby — pełne wyjaśnienie
  
    

      
      
        ****
        ****
        ****
      
    | Struktura | Liczba chromosomów | Oznaczenie | Jak powstaje |
| --- | --- | --- | --- |
| Komórka ciała | 46 (23 pary) | 2n (diploidalna) | powstaje w mitozie (L014) |
| Gameta | 23 | n (haploidalna) | powstaje w mejozie (L015) |
| Zygota | 46 (23 + 23) | 2n | po zapłodnieniu (n + n = 2n) |

  

  

#### 8.2. Gamety — gdzie i jak powstają
  
    
      
- **Plemniki** — powstają w **jądrach** (mężczyzna). W wyniku mejozy powstają 4 funkcjonalne plemniki z każdej komórki wyjściowej.
      
- **Komórki jajowe** — powstają w **jajnikach** (kobieta). W wyniku mejozy powstaje **1 funkcjonalna komórka jajowa** + ciałka kierunkowe (cytoplazma dzielona nierówno — jajo musi wyżywić zarodek).
    
    

**Wniosek:** „mejoza daje 4 gamety" to **uproszczenie**. U kobiety funkcjonalna jest tylko jedna (L015).
  

  

#### 8.3. Płeć — XX/XY
  
    
      
- **Kobieta: XX** — dwa chromosomy X. Każda komórka jajowa ma jeden X.
      
- **Mężczyzna: XY** — jeden X i jeden Y. Plemniki: połowa ma X, połowa Y.
    
    

**Kto decyduje o płci?** Plemnik. Komórka jajowa zawsze wnosi X.
    jajo X + plemnik X → XX (dziewczynka)
jajo X + plemnik Y → XY (chłopiec)
    

**Wniosek:** płeć nie zależy od „widzimisię" matki — decyduje chromosom płciowy plemnika (L018).
  

  

#### 8.4. Dlaczego te liczby mają sens?
  
    

Gdyby gamety miały po 46 chromosomów, a zygota 46, po zapłodnieniu byłoby 92 → i tak dalej (92 → 184 → 368…). **Liczba chromosomów musiałaby rosnąć z pokolenia na pokolenie.**
    

**Mejoza rozwiązuje ten problem:** redukuje 2n → n. Dzięki temu po zapłodnieniu zygota znów ma 2n = 46 (L015).
  

  9. Ciało a komórki — uzupełnienie

  
    Kluczowa myśl
    

**Cechy organizmu wynikają z komórek i genów.** Komórki ciała niemal wszystkie mają **ten sam zestaw DNA** (ten sam genotyp), ale różnią się funkcją — bo różnie **odczytują** swoje geny (ekspresja genów).
    

**Przykład:** neuron i komórka mięśniowa mają ten sam DNA, ale różnią się tym, które geny są w nich aktywne. Dlatego neuron przewodzi impulsy, a komórka mięśniowa się kurczy.
  

  
    Uwaga
    

**Cecha = geny + środowisko + rozwój** (L010). Nie wszystko jest „zapisane w genach". Np. wzrost, masa ciała — zależą też od odżywiania, snu, aktywności.
  

  
    Most do genetyki
    
      
- **L010** — cechy dziedziczne vs nabyte vs wieloczynnikowe.
      
- **L011** — jak DNA przechowuje informację, z której powstają białka.
      
- **L017** — jak przewidywać dziedziczenie jednej cechy (Punnett).
      
- **L019** — grupy krwi ABO + Rh.
    
  

  10. Poziom ambitny MASTER

  

#### 10.1. Komórki somatyczne vs gamety
  
    

      
      
        ****
        ****
        ****
        ****
        ****
      
    | Cecha | Komórki somatyczne (ciała) | Gamety |
| --- | --- | --- |
| Przykład | skóra, mięsień, neuron | plemnik, komórka jajowa |
| Liczba chromosomów (człowiek) | 46 = 2n | 23 = n |
| Powstają przez | mitozę | mejozę |
| Zestaw DNA | pełny (46) | połowa (23) |
| Mogą się dzielić? | zwykle tak (mitoza) | nie — są już końcowym produktem mejozy |

  

  

#### 10.2. Krew to nie tylko ABO — wiele układów antygenów
  
    

Poza ABO i Rh istnieje jeszcze **kilkadziesiąt innych układów grupowych** (np. Kell, Duffy, Kidd). Dlatego w medycynie nie wystarczy znać tylko „grupy krwi ABO i Rh" — bada się więcej.
    

**W szkole** wystarczy: ABO + Rh. Ale warto wiedzieć, że krew ma więcej „oznaczeń".
  

  

#### 10.3. HLA — zgodność tkankowa
  
    

**HLA** (Human Leukocyte Antigen) to układ **wielu genów**, kodujących białka na powierzchni komórek. Układ odpornościowy rozpoznaje po nich „swoje" i „obce".
    

**Znaczenie:** przy przeszczepach (nerka, serce, szpik) im większa zgodność HLA dawcy i biorcy, tym mniejsze ryzyko odrzucenia.
  

  

#### 10.4. Wiele cech jest wielogenowych
  
    

Wzrost, masa ciała, kolor skóry, ciśnienie krwi — te cechy zależą od **wielu genów jednocześnie** i od środowiska.
    

**Wniosek:** nie da się ich opisać prostą krzyżówką Aa × Aa jak kolor kwiatu u grochu (L017, L019).
  

  11. Poziom zaawansowany ZAAWANSOWANY

  

#### 11.1. mtDNA — dziedziczenie mitochondrialne
  
    

**mtDNA** (DNA mitochondrialny) u człowieka dziedziczy się **prawie zawsze po matce**, bo mitochondria zygoty pochodzą głównie z komórki jajowej. Istnieją bardzo rzadkie wyjątki.
    

**Znaczenie:** mtDNA jest wykorzystywany w badaniach genealogicznych (śledzenie linii żeńskiej) oraz w diagnostyce chorób mitochondrialnych.
    

**Most:** L001 (endosymbioza — mitochondria mają własny DNA).
  

  

#### 11.2. Epigenetyka — środowisko wpływa na ekspresję genów
  
    

**Epigenetyka** zajmuje się zmianami w **ekspresji** genów, które nie polegają na zmianie sekwencji DNA (np. dodanie grup metylowych do DNA). To dodatkowy mechanizm, przez który środowisko wpływa na fenotyp.
    

*To pojęcie zaawansowane — na egzaminie ósmoklasisty nieobowiązkowe.*
  

  

#### 11.3. Konflikt Rh — pełniejsze wyjaśnienie
  
    

**Sytuacja:** matka Rh−, ojciec Rh+. Dziecko może być Rh+ (jeśli odziedziczy antygen D od ojca).
    

**Problem:** podczas porodu (lub wcześniej) krew płodu może wejść w kontakt z krwią matki. Układ odpornościowy matki rozpoznaje antygen D jako obcy i wytwarza przeciwciała anty-D.
    

**Skutek:** przy kolejnej ciąży z płodem Rh+ przeciwciała matki mogą zaatakować erytrocyty płodu.
    

**Profilaktyka:** podanie immunoglobulin anty-D.
  

  12. Klinika błędów PUŁAPKI

  

#### 12.1. Tabela błędów
  
    

      
      
        ****
        ****
        
        ****
        ****
        
        
        ****
      
    | Błąd | Poprawa | Dlaczego? |
| --- | --- | --- |
| „Krew to narząd" | Krew to tkanka płynna | narząd to np. serce, wątroba |
| „Grupa 0 = brak genów" | Grupa 0 = genotyp ii (dwa recesywne allele) | każdy ma dwa allele ABO |
| „Wszystkie komórki człowieka mają 46 chromosomów" | gamety 23; erytrocyt dojrzały bez jądra | wyjątki istnieją |
| „Płeć zależy od komórki jajowej" | jajo zawsze X; plemnik X lub Y | tylko plemnik wnosi Y |
| „Gameta ma 46 chromosomów" | gameta ma 23 (n) | mejoza redukuje 2n → n |
| „Krew jednej grupy = jedna grupa" | ABO + Rh + inne układy (HLA itd.) | wiele antygenów |
| „Osoba z grupą 0 nie ma nic na erytrocytach" | brak antygenów A i B; ma przeciwciała anty-A i anty-B w osoczu | 0 = brak antygenów A/B, ale są przeciwciała |
| „Dojrzały erytrocyt ssaka ma DNA, skoro jest komórką" | Dojrzały erytrocyt ssaka nie ma jądra | nie ma pełnego DNA |

  

  

#### 12.2. Klinika 2.0 — pięć pełnych przykładów

  
    Przykład 1 — „Gameta ma tyle samo chromosomów co komórka ciała"
    
      
- **Błąd:** „Gameta ma 46 chromosomów, jak każda komórka."
      
- **Znajdź:** Mylenie n z 2n.
      
- **Popraw:** Gameta ma **23 chromosomy (n)**.
      
- **Reguła:** Mejoza redukuje 2n → n.
      
- **Dlaczego:** Po zapłodnieniu 23 + 23 = 46 (zygota 2n).
      
- **Pułapka:** „Gameta = komórka ciała" — **nie**.
    
  

  
    Przykład 2 — „Płeć zależy od komórki jajowej"
    
      
- **Błąd:** „Matka decyduje o płci, bo daje X albo Y."
      
- **Znajdź:** Brak rozróżnienia X od Y.
      
- **Popraw:** Komórka jajowa zawsze ma X. **Plemnik** wnosi X lub Y.
      
- **Reguła:** Płeć zależy od plemnika.
      
- **Dlaczego:** jajo X + plemnik X → XX; jajo X + plemnik Y → XY.
      
- **Pułapka:** „Wina matki, że syn" — **błędne** i krzywdzące.
    
  

  
    Przykład 3 — „Grupa 0 to brak genów"
    
      
- **Błąd:** „Grupa 0 oznacza brak genu grupy krwi."
      
- **Popraw:** Grupa 0 to genotyp **ii** — dwa recesywne allele.
      
- **Reguła:** Każdy ma dwa allele ABO: Iᴬ, Iᴮ lub i.
      
- **Dlaczego:** Allel i nie koduje antygenu A ani B — dlatego brak antygenów na erytrocytach.
      
- **Pułapka:** „0 = nic" — nie. To **konkretna konfiguracja genów**.
    
  

  
    Przykład 4 — „Krew = narząd"
    
      
- **Błąd:** „Krew to narząd, jak serce."
      
- **Popraw:** Krew to **tkanka płynna**.
      
- **Reguła:** Narząd = zbiór tkanek o określonej funkcji (np. serce).
      
- **Dlaczego:** Krew nie ma stałego kształtu, krąży w naczyniach.
      
- **Pułapka:** Potoczne „krew to narząd" — **nie**.
    
  

  
    Przykład 5 — „Wszystkie komórki ciała mają 46 chromosomów"
    
      
- **Błąd:** „Każda komórka człowieka ma 46 chromosomów."
      
- **Popraw:** Większość ma 46 — ale:
        
          
- gamety mają 23;
          
- dojrzały erytrocyt ssaka nie ma jądra (i nie ma 46 chromosomów).
        
      
      
- **Reguła:** „46 = typowa liczba w komórce somatycznej".
      
- **Pułapka:** absolutne „każda" — **nie**.
    
  

  13. Obserwacja / model
  
    Problem: Jakie grupy krwi mają członkowie mojej rodziny?
Hipoteza: Możliwe różne kombinacje (zgodnie z modelem ABO).
Materiał: dane rodzinne (grupy krwi rodziców, rodzeństwa, dziadków).
Obserwacja: Spisujemy grupy krwi.
Wniosek: Grupa krwi dziedziczy się zgodnie z modelem ABO (L019).
Ograniczenia: mała próba, brak danych o innych układach (Rh, HLA).
BHP: brak — dane rodzinne za zgodą.
    

To **model ankietowy**, nie eksperyment laboratoryjny. Wnioski z małej próby są ograniczone.
  

  14. Ćwiczenia TRENING

  

#### 14A. Mini-check (5 pytań)
  
    
      
- Jakie układy człowieka są istotne dla genetyki?
      
- Ile chromosomów ma gameta?
      
- Ile chromosomów ma zygota?
      
- Kto decyduje o płci — plemnik czy komórka jajowa?
      
- Co to antygen?
    
    Pokaż odpowiedzi
      
        
- Krwionośny, rozrodczy, nerwowy/hormonalny, odpornościowy.
        
- 23 (n).
        
- 46 (2n) — po połączeniu dwóch gamet.
        
- Plemnik — wnosi X lub Y; jajo zawsze X.
        
- Cząsteczka (białko/cukier) na powierzchni komórki, rozpoznawana przez układ odpornościowy.
      
    
  

  

#### 14B. Ćwiczenie prowadzone
  
    

**Dane:** Matka 0 (ii), ojciec AB (IᴬIᴮ).
    

**Pytanie:** Jakie grupy może mieć dziecko?
    

**Rozumowanie:**
    
      
- Gamety matki: `i`, `i`.
      
- Gamety ojca: `Iᴬ`, `Iᴮ`.
      
- Możliwe genotypy dziecka: `Iᴬi` (grupa A) lub `Iᴮi` (grupa B).
    
    

**Odpowiedź:** Dziecko może mieć grupę A lub B (nigdy 0, nigdy AB).
  

  

#### 14C. Ćwiczenia samodzielne

  

##### A. Podstawa A
  
    
      
- Jakie układy człowieka znasz?
      
- Ile chromosomów ma gameta?
      
- Co to zygota?
      
- Kto decyduje o płci?
    
    Pokaż odpowiedzi
      
        
- Np. krwionośny, rozrodczy, nerwowy, odpornościowy, pokarmowy.
        
- 23 (n).
        
- Komórka powstała z połączenia plemnika i komórki jajowej — ma 2n = 46.
        
- Plemnik — wnosi X lub Y.
      
    
  

  

##### B. Trening B
  
    
      
- Matka A, ojciec B — jakie grupy może mieć dziecko?
      
- Dlaczego grupy krwi są ważne przy transfuzji?
      
- Popraw: „Gameta ma 46 chromosomów".
    
    Pokaż odpowiedzi
      
        
- Zależy od genotypów rodziców. Możliwe grupy: A, B, AB, 0 (jeśli oboje rodzice są heterozygotami).
        
- Bo niezgodna grupa może wywołać reakcję — przeciwciała biorcy mogą zaatakować krwinki dawcy.
        
- Gameta ma **23** chromosomy (n), nie 46.
      
    
  

  

##### C. Ambitne C
  
    
      
- Matka 0, ojciec AB — jakie grupy krwi może mieć dziecko? Uzasadnij.
      
- Dlaczego krew ma wiele układów antygenów?
      
- Połącz krew z genetyką — dlaczego to cecha dziedziczna?
    
    Pokaż odpowiedzi
      
        
- Grupa A lub B. Matka ii daje tylko `i`; ojciec AB daje `Iᴬ` lub `Iᴮ`. Dziecko: Iᴬi (A) lub Iᴮi (B).
        
- Na erytrocytach jest wiele różnych antygenów; każdy układ to odrębne geny.
        
- Bo antygeny ABO są kodowane przez konkretne allele: Iᴬ, Iᴮ, i. Dziedziczą się zgodnie z regułami Mendla (L019).
      
    
  

  

##### D. Zaawansowane D
  
    
      
- Co to HLA? Do czego służy?
      
- Co to konflikt Rh (idea)?
      
- Czy dziecko może mieć grupę AB, jeśli matka ma 0?
    
    Pokaż odpowiedzi
      
        
- HLA = układ zgodności tkankowej — wiele genów kodujących antygeny na powierzchni komórek. Istotny przy przeszczepach.
        
- Sytuacja, gdy matka Rh− a płód Rh+. Układ odpornościowy matki może wytworzyć przeciwciała anty-D, zagrażające kolejnym ciążom Rh+. Profilaktyka — immunoglobuliny anty-D.
        
- **Nie** — matka ii nie może dać Iᴬ ani Iᴮ.
      
    
  

  

#### 14D. PROBLEM / THINK KONKURS
  
    

Matka ma grupę 0, ojciec ma grupę A, a dziecko ma grupę AB. Czy to możliwe? Uzasadnij.
    Pokaż odpowiedź
      

**Nie jest możliwe.**
      

Matka 0 = genotyp ii. Może dać tylko allel `i`. Aby dziecko miało grupę AB, musiałoby dostać Iᴬ od jednego rodzica i Iᴮ od drugiego. Matka nie ma Iᴮ, ojciec A może dać co najwyżej Iᴬ. Zatem dziecko nie może być AB.
    
  

  

#### Drabinka trudności
  
    

      
      
        
        
        
        
        
        
      
    | Poziom | Zadanie |
| --- | --- |
| ODTWÓRZ | Ile chromosomów ma gameta? Zygota? |
| ZASTOSUJ | Ustal grupy krwi dziecka na podstawie genotypów rodziców. |
| WYJAŚNIJ | Dlaczego grupy krwi są ważne przy transfuzji? |
| ODKRYJ | Kto decyduje o płci? |
| POŁĄCZ | Połącz krew z genetyką (ABO, L019). |
| ZAKWESTIONUJ | Czy dziecko może mieć grupę AB, jeśli matka ma 0? |

  

  15. Zadania egzaminacyjne E8 — z uzasadnieniem

  
    

Zadanie 1
    

Matka ma grupę krwi 0, ojciec ma grupę krwi B. Dziecko ma grupę krwi B. Czy to możliwe? Uzasadnij, posługując się genotypami.
    Pokaż model odpowiedzi
      

**Tak, jest to możliwe.**
      

Matka 0 = genotyp ii → daje tylko allel `i`.

      Ojciec B = genotyp IᴮIᴮ lub Iᴮi.

      Dziecko B = genotyp IᴮIᴮ lub Iᴮi. Skoro matka daje `i`, dziecko musi mieć genotyp **Iᴮi** (grupa B). Ojciec musi więc mieć co najmniej jeden allel Iᴮ — co jest zgodne z grupą B.
      

**Wniosek:** dziecko może mieć grupę B.
    
  

  
    

Zadanie 2
    

Uczeń napisał: „Gameta ma 46 chromosomów, bo jest komórką ciała."
    

**Oceń prawdziwość zdania i wyjaśnij błąd.**
    Pokaż model odpowiedzi
      

**Zdanie jest fałszywe.**
      

**Wyjaśnienie:** Gameta nie jest komórką ciała. Gameta to komórka rozrodcza o liczbie chromosomów **n = 23**. Powstaje w procesie mejozy, która redukuje 2n → n. Dzięki temu po zapłodnieniu (23 + 23 = 46) zygota znów ma 2n = 46.
    
  

  
    

Zadanie 3
    

Kobieta z grupą krwi Rh− spodziewa się dziecka. Ojciec dziecka ma grupę Rh+. Wyjaśnij, dlaczego lekarz może zalecić profilaktykę (podanie immunoglobulin anty-D).
    Pokaż model odpowiedzi
      

Jeżeli dziecko odziedziczy Rh+ po ojcu, jego erytrocyty będą miały antygen D. Krew płodu może wejść w kontakt z krwią matki (np. podczas porodu). Układ odpornościowy matki Rh− rozpozna antygen D jako obcy i może wytworzyć przeciwciała anty-D.
      

W kolejnej ciąży z płodem Rh+ te przeciwciała mogą zaatakować erytrocyty płodu. Dlatego podaje się immunoglobuliny anty-D, żeby zapobiec wytworzeniu przeciwciał przez matkę.
    
  

  
    

Zadanie 4
    

Wyjaśnij jednym zdaniem, dlaczego „gameta ma 23 chromosomy" jest informacją kluczową dla zrozumienia dziedziczenia.
    Pokaż model odpowiedzi
      

Ponieważ po połączeniu dwóch gamet (23 + 23 = 46) powstaje zygota z 2n = 46 — stała liczba chromosomów w każdym pokoleniu. Bez redukcji liczby chromosomów w mejozie liczba chromosomów podwajałaby się w każdym pokoleniu.
    
  

  16. Fiszki POWTÓRKA

  
    
      Ile chromosomów ma gameta człowieka?
      **23 chromosomy (n)**
      podstawa
    
    
      Ile chromosomów ma zygota człowieka?
      **46 chromosomów (2n)**
      podstawa
    
    
      Kto decyduje o płci dziecka?
      **Plemnik — wnosi X albo Y**
      podstawa
    
    
      Jakie grupy krwi wyróżniamy w układzie ABO?
      **0, A, B, AB**
      podstawa
    
    
      Co to HLA?
      **Układ zgodności tkankowej (wiele genów) — istotny przy przeszczepach**
      ambitny
    
    
      Czy krew to narząd?
      **Nie — to tkanka płynna**
      pułapka
    
    
      Co to antygen?
      **Cząsteczka na powierzchni komórki rozpoznawana przez układ odpornościowy**
      podstawa
    
    
      Jaka jest różnica między n a 2n?
      **n = haploidalna (gameta, 23); 2n = diploidalna (ciało, 46)**
      podstawa
    
    
      Od kogo syn dostaje chromosom X?
      **Od matki (od ojca dostaje Y)**
      ambitny
    
    
      Co to konflikt Rh?
      **Sytuacja matka Rh− / płód Rh+ — profilaktyka immunoglobuliną anty-D**
      ambitny
    
    
      Czy wszystkie komórki człowieka mają 46 chromosomów?
      **Nie — gamety mają 23; dojrzały erytrocyt ssaka nie ma jądra**
      E8
    
    
      Jak zapisujemy genotyp grupy 0?
      **ii**
      podstawa
    
    
      Co oznacza Rh+ i Rh−?
      **Rh+ = obecny antygen D; Rh− = brak antygenu D**
      podstawa
    
    
      Gdzie powstają gamety u człowieka?
      **W gonadach: jądra (plemniki) i jajniki (komórki jajowe)**
      podstawa
    
    
      Dlaczego jedna cecha może zależeć od wielu genów?
      **Bo istnieje dziedziczenie wielogenowe (np. wzrost, kolor skóry)**
      ambitny
    
    
      Skąd się bierze DNA mitochondrialne (mtDNA) i jak się dziedziczy?
      **Z mitochondriów; u człowieka prawie zawsze po matce**
      ambitny
    
  

  17. Test końcowy (3+2+2+1) TRENING
  

Format 3+2+2+1: 3 zadania podstawowe, 2 treningowe, 2 ambitne, 1 zaawansowane.
  
    
      
- (P) Ile chromosomów ma gameta?
      
- (P) Ile chromosomów ma zygota?
      
- (P) Kto decyduje o płci?
      
- (T) Matka 0, ojciec AB — jakie grupy krwi może mieć dziecko?
      
- (T) Popraw: „Gameta ma 46 chromosomów".
      
- (A) Dlaczego grupy krwi są ważne przy transfuzji?
      
- (A) Co to HLA?
      
- (Z) Matka 0, dziecko AB — czy to możliwe? Uzasadnij.
    
    Pokaż odpowiedzi
      
        
- 23 (n).
        
- 46 (2n).
        
- Plemnik — wnosi X lub Y; jajo zawsze X.
        
- Grupa A (Iᴬi) lub grupa B (Iᴮi).
        
- Gameta ma 23 chromosomy (n), nie 46.
        
- Bo niezgodna grupa może wywołać reakcję układu odpornościowego — przeciwciała zaatakują krwinki dawcy.
        
- HLA = układ zgodności tkankowej — wiele genów; istotny przy przeszczepach.
        
- **Nie jest możliwe** — matka ii daje tylko `i`, nie może dać Iᴬ ani Iᴮ. Grupa AB wymaga obu tych alleli.
      
    
  

  18. Checklista
  
    
      
- ☐ Wiem, że cechy organizmu wynikają z komórek i genów.
      
- ☐ Wiem, które układy człowieka są istotne dla genetyki.
      
- ☐ Znam różnicę: gameta (n = 23) vs zygota (2n = 46).
      
- ☐ Wiem, kto decyduje o płci (plemnik).
      
- ☐ Rozumiem znaczenie grup krwi (ABO, Rh).
      
- ☐ Rozumiem ideę HLA (ambitny).
      
- ☐ Wiem, że krew to tkanka, nie narząd.
      
- ☐ Wiem, że dojrzały erytrocyt ssaka nie ma jądra.
      
- ☐ Znam ideę konfliktu Rh (zaawansowany).
      
- ☐ Wiem, że istnieje dziedziczenie wielogenowe (ambitny).
    
  

  19. Mapa pojęć
  
    

[schemat SVG w HTML]

    Mapa pojęć L002 — od ciała człowieka do genetyki.
  

  20. Co dalej? Jak się uczyć?
  
    

**Następna lekcja:** L003 — diagnoza startowa genetyki (sprawdzenie, co już wiesz przed L010–L021).
    

**Most wstecz:** L001 (komórka → jądro = większość DNA) → L002 (krew, gamety) → L003 (diagnoza) → L010 (cechy) → L011 (DNA).
    

**Plan nauki:**
    
      
- Ściąga (5 min) — zwłaszcza cztery liczby i układ krwionośny.
      
- Przykład prowadzony (5 min) — matka 0 / ojciec A.
      
- Mini-check (5 min).
      
- Ćwiczenia A i B (10 min).
      
- Fiszki (10 min).
      
- Test końcowy (10 min).
      
- Powtórka za 1 dzień, 3 dni, tydzień.
    
  

  

#### Powtórki rozłożone w czasie
  
    

      
      
        
        
        
        
        
      
    | Kiedy | Co | Czas |
| --- | --- | --- |
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

  

  21. Słownik
  
    

      
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    | Termin | Definicja |
| --- | --- |
| Krew | Tkanka płynna — osocze + elementy morfotyczne (erytrocyty, leukocyty, płytki) |
| Erytrocyt | Czerwona krwinka — transportuje tlen dzięki hemoglobinie; dojrzały nie ma jądra |
| Antygen | Cząsteczka na powierzchni komórki, rozpoznawana przez układ odpornościowy |
| Gameta | Komórka rozrodcza (n = 23 u człowieka) |
| Zygota | Komórka po połączeniu gamet (2n = 46 u człowieka) |
| 2n | Diploidalna liczba chromosomów (46 u człowieka) |
| n | Haploidalna liczba chromosomów (23 u człowieka) |
| HLA | Układ zgodności tkankowej — wiele genów; istotny przy przeszczepach |
| Rh | Układ grupowy krwi — obecność/brak antygenu D |
| Konflikt Rh | Sytuacja matka Rh− / płód Rh+; profilaktyka immunoglobuliną anty-D |
| Mejoza | Podział redukcyjny (2n → n) — patrz L015 |
| Mitoza | Podział zachowawczy (2n → 2n) — patrz L014 |
| mtDNA | DNA mitochondrialny — u człowieka dziedziczony prawie zawsze po matce |
| Dziedziczenie wielogenowe | Cecha zależy od wielu genów (np. wzrost, kolor skóry) |

  

  22. Dodatek — ciekawostki ZAAWANSOWANY

  

#### 22.1. Krew w liczbach
  
    
      
- Dorosły człowiek ma ok. **4,5–6 litrów** krwi.
      
- Jeden erytrocyt żyje ok. **120 dni**.
      
- W jednej kropli krwi jest ok. **5 milionów erytrocytów**.
      
- Szpik kostny produkuje ok. **2 milionów erytrocytów na sekundę**.
    
  

  

#### 22.2. Ciekawostki o chromosomach
  
    
      
- Największy chromosom człowieka (chromosom 1) zawiera ok. 250 milionów par zasad.
      
- Chromosom Y jest znacznie mniejszy niż X i zawiera mniej genów.
      
- U człowieka chromosomy płci oznaczamy literami X i Y — w innych organizmach mogą być inne systemy (np. u ptaków: ZZ/ZW).
    
  

  

#### 22.3. Zadanie olimpijskie
  
    

**Pytanie:** Matka ma grupę 0 (ii), ojciec ma grupę AB (IᴬIᴮ). Jakie grupy krwi mogą mieć ich dzieci? Uzasadnij, korzystając z gamet.
    

**Rozwiązanie:**
    
      
- Gamety matki: wszystkie `i`.
      
- Gamety ojca: `Iᴬ` lub `Iᴮ`.
      
- Możliwe genotypy dziecka: `Iᴬi` (grupa A) lub `Iᴮi` (grupa B).
    
    

**Odpowiedź:** Dziecko może mieć grupę A lub B. **Nigdy 0 ani AB** — matka nie ma Iᴬ/Iᴮ, ojciec nie ma i.
  

  23. Połączenia międzyprzedmiotowe
  
    
      
- **Chemia:** skład krwi (białka, sole mineralne, woda, pH).
      
- **Matematyka:** prawdopodobieństwo (grupy krwi), statystyka (dane rodzinne).
      
- **Medycyna:** transfuzje, transplantacje, konflikt Rh.
      
- **Etyka:** poradnictwo genetyczne, choroby dziedziczne.
      
- **Biologia:** anatomia człowieka, rozrodczość, genetyka.
    
  

  24. Zadania z życia codziennego (z modelami odpowiedzi)

  
    

**1. Dlaczego grupy krwi są ważne przy transfuzji?**
    Model odpowiedzi
      

Bo przy niezgodnej grupie krwi przeciwciała biorcy mogą zaatakować erytrocyty dawcy. Antygeny A, B, D muszą być zgodne. Dlatego przed transfuzją bada się grupę krwi i Rh.
    
  

  
    

**2. Jak dziedziczy się płeć u człowieka?**
    Model odpowiedzi
      

Komórka jajowa zawsze ma chromosom X. Plemnik ma X albo Y. Jeśli plemnik wnosi X — powstaje zygota XX (dziewczynka). Jeśli wnosi Y — powstaje zygota XY (chłopiec). O płci decyduje więc plemnik.
    
  

  
    

**3. Dlaczego matka Rh− potrzebuje profilaktyki w ciąży z płodem Rh+?**
    Model odpowiedzi
      

Jeśli matka jest Rh−, a płód Rh+, krew płodu może wejść w kontakt z krwią matki. Układ odpornościowy matki rozpozna antygen D jako obcy i może wytworzyć przeciwciała anty-D. W kolejnych ciążach z płodem Rh+ te przeciwciała mogą zaatakować erytrocyty płodu. Dlatego podaje się immunoglobuliny anty-D — żeby zapobiec wytworzeniu przeciwciał.
    
  

  
    

**4. Dlaczego rodzeństwo może mieć różne grupy krwi?**
    Model odpowiedzi
      

Bo każde dziecko dostaje inną kombinację alleli od rodziców. Rodzice heterozygotyczni (np. Iᴬi × Iᴮi) mogą mieć dzieci z grupą A, B, AB lub 0 — zależnie od tego, które allele trafią do danej zygoty.
    
  

  
    

**5. Dlaczego krew jest dobrym materiałem do badania DNA?**
    Model odpowiedzi
      

Bo leukocyty w krwi mają jądra komórkowe z pełnym DNA. Można z nich wyizolować materiał genetyczny. *Uwaga: dojrzałe erytrocyty ssaka jądra nie mają — DNA pochodzi od leukocytów.*
    
  

  25. Status lekcji
  
    Wersja 5.0 (2026-09-13) — przebudowa „od podstaw do zaawansowanych"
    

Lekcja L002 przebudowana z myślą o **moście do genetyki** (nie pełna anatomia). Uściślono definicje (krew jako tkanka, nie narząd; grupa 0 = ii; rola plemnika w dziedziczeniu płci), dodano warstwy: rozbudowaną sekcję o krwi, gametach i płci, klinikę błędów z 5 pełnymi przykładami, model odpowiedzi do zadań, sekcję z życia z 5 modelami, tabelę HLA i konfliktu Rh jako rozszerzenie dla chętnych.
  

  

**BIOLOGIA L002 v5.0** · Powtórka: człowiek (wybrane) · most pod genetykę · 2026
  

Ucz się świadomie, nie na pamięć.

<details><summary>Wcześniejsza warstwa MD L002 (zachowana)</summary>

# L002 — Powtórka: człowiek (wybrane, v3.7 + v3.9.1)



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Człowiek jako układ.

`[BIO: DIAGRAM type=FLOW]`
`układ → narząd → tkanka → komórka`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** powiązanie organizmu z komórką.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Powtórka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER]  
**Poprzednia:** L001  
**Następna:** L003

### Mapa lekcji + most do genetyki

| Element L002 | Most genetyki |
|--------------|---------------|
| Krew / antygeny | **L019** grupy ABO + Rh |
| Układ rozrodczy / gamety | **L015** mejoza (2n→n) |
| Płeć XX/XY (idea) | **L018** X-linked |
| Cechy organizmu | **L010–L017** dziedziczenie |

**Cel L002:** nie powtórka całej anatomii — tylko mosty pod genetykę klasy 8.

---

## 1. Pytanie przewodnie

Jak z komórek i genów wynikają cechy organizmu człowieka?

---

## 2. Cele lekcji

Po lekcji uczeń:

- odświeża, że cechy organizmu wynikają z komórek i genów (most do L010–L019),
- wskazuje układy człowieka istotne dla genetyki: krwionośny (grupy krwi), rozrodczy (mejoza),
- (ambitny) rozumie, że krew to tkanka z wieloma układami antygenów,
- (zaawansowany) zna ideę dziedziczenia wielogenowego i wpływ środowiska.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| krew i grupy ABO | most do L019 |
| układ rozrodczy = gamety | most do L015 (mejoza) |
| komórki ciała vs komórki rozrodcze | 2n vs n |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

- L001: komórka (jądro, DNA).
- Z klasy 4–7: podstawowa anatomia człowieka.

---

## 4. Zacznij od problemu

Skąd organizm wie, jak zbudować krew, mięśnie, nerwy?  
Dlaczego krew jednych ludzi jest „zgodna”, a innych nie?

**Hipoteza ucznia:** ....................................

---

## 5. Ściąga — poziom podstawowy

**Układy człowieka istotne dla genetyki:**

| Układ | Funkcja | Most do genetyki |
|-------|---------|------------------|
| Krwionośny | transport, krew | grupy krwi ABO (L019) |
| Rozrodczy | gamety | mejoza (L015) |
| Nerwowy / hormonalny | regulacja | idea ekspresji genów |
| Odpornościowy | obrona | antygeny, zgodność tkanek |

**Krew** — tkanka, w której występują antygeny (A, B, Rh).  
**Gamety** — komórki rozrodcze (n = 23 chromosomy).  
**Zygota** — po połączeniu gamet (2n = 46).

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Krew = transport + grupy** | układ krwionośny |
| 2 | **Rozrodczy = gamety** | most do mejozy |
| 3 | **46 = 2n, 23 = n** | liczby |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)

Cechy organizmu wynikają z komórek, a komórki działają według informacji zapisanej w DNA. Geny w jądrze kodują białka, które budują i regulują organizm.

**Układy istotne dla genetyki:**

1. **Krwionośny** — transportuje tlen, substancje, komórki odpornościowe. Na powierzchni krwinek czerwonych są **antygeny** (A, B, D). To one decydują o grupie krwi i zgodności przy transfuzji.

2. **Rozrodczy** — wytwarza **gamety** (plemniki, komórki jajowe) w procesie mejozy (2n → n). Po zapłodnieniu zygota ma 2n.

3. **Nerwowy i hormonalny** — regulują pracę organizmu; ich działanie zależy od białek, a więc pośrednio od genów.

4. **Odpornościowy** — rozpoznaje „swoje” i „obce”; istotny przy przeszczepach i konflikcie Rh.

### 6A. Dlaczego?

1. **Dlaczego grupy krwi są ważne?**  
   Bo przy transfuzji niezgodnej grupy układ odpornościowy może zaatakować krwinki.

2. **Dlaczego gamety mają n chromosomów?**  
   Bo po połączeniu dwóch gamet (n + n) powstaje zygota z 2n — stała liczba chromosomów.

3. **Dlaczego cechy zależą i od genów, i od środowiska?**  
   Bo geny kodują białka, ale środowisko wpływa na to, jak te białka działają (wzrost, masa).

### 6B. Krok po kroku — jak połączyć układy z genetyką

1. Krew → antygeny → allele ABO (Iᴬ, Iᴮ, i) → L019.
2. Rozrodczy → mejoza → gamety n → L015.
3. Nerwowy/hormonalny → białka → geny → ekspresja.
4. Odpornościowy → antygeny → zgodność → konflikt Rh.

### 6C. Przykład prowadzony

**Dane:** Matka ma grupę krwi 0, ojciec A.  
**Pytanie:** Jakie grupy krwi może mieć dziecko?

**Rozumowanie:**
- Matka 0 → genotyp ii → wszystkie jej gamety mają i.
- Ojciec A → genotyp IᴬIᴬ lub Iᴬi.
- Dziecko może mieć A (Iᴬi) lub 0 (ii) — zależnie od ojca.
- **Grupa B lub AB niemożliwa** (matka nie ma Iᴮ).

### 6D. Powiązanie z innymi lekcjami

```text
L001 (komórka) → L002 (człowiek) → L003 (diagnoza) → L010–L021 (genetyka)
```

---

## 7. Poziom ambitny

- **Krew** to nie tylko grupa ABO — istnieje ponad 30 układów grupowych.
- **Zgodność tkankowa** (HLA) — istotna przy przeszczepach.
- **Konflikt Rh** — matka Rh−, dziecko Rh+ (idea, L019).
- **Dziedziczenie wielogenowe** — wiele cech człowieka zależy od wielu genów (wzrost, kolor skóry).

---

## 8. Poziom zaawansowany

> **Zaawansowane.**

- **HLA** — układ zgodności tkankowej; kluczowy w transplantologii.
- **Dziedziczenie mitochondrialne** — mtDNA po matce.
- **Epigenetyka** — środowisko wpływa na ekspresję genów (nazwa).

---

## 9. Klinika błędów

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| „Grupa krwi zależy od jednego genu” | układ ABO to jeden gen, ale innych układów jest wiele | uproszczenie |
| „Krew = jedna grupa” | ABO + Rh + inne układy | wiele antygenów |
| „Gameta ma 46 chromosomów” | gameta ma 23 (n) | mejoza redukuje |

### Klinika 2.0 — przykład

**Błąd:** „Gameta ma tyle samo chromosomów co komórka ciała.”  
- **Znajdź:** Mylenie 2n z n.
- **Popraw:** Gameta ma n = 23 chromosomy.
- **Reguła:** Mejoza redukuje 2n → n.
- **Dlaczego:** Po zapłodnieniu 23 + 23 = 46.
- **Zadanie podobne:** Ile chromosomów ma zygota?
- **Zadanie z pułapką:** Ile chromosomów ma komórka skóry?

---

## 10. Obserwacja / model

**Typ:** model / obserwacja ankietowa.

```text
Problem: Jakie grupy krwi mają członkowie mojej rodziny?
Hipoteza: Możliwe różne kombinacje.
Obserwacja: Spisujemy grupy rodziców, rodzeństwa, dziadków.
Wniosek: Grupa krwi dziedziczy się zgodnie z modelem ABO (L019).
Ograniczenia: mała próba, brak danych o innych układach.
BHP: brak (dane rodzinne za zgodą).
```

---

## 11. Ćwiczenia

### 11A. Mini-check (5 pytań)

1. Jakie układy człowieka są istotne dla genetyki?
2. Ile chromosomów ma gameta?
3. Ile chromosomów ma zygota?
4. Kto decyduje o płci — plemnik czy jajowa?
5. Co to antygen?

### 11B. Ćwiczenie prowadzone

**Dane:** Matka 0 (ii), ojciec AB (IᴬIᴮ).  
**Pytanie:** Jakie grupy może mieć dziecko?

**Krok 1.** Gamety matki: i, i.  
**Krok 2.** Gamety ojca: Iᴬ, Iᴮ.  
**Krok 3.** Możliwe genotypy: Iᴬi (A), Iᴮi (B).

**Odpowiedź:** Dziecko może mieć grupę A lub B (nigdy 0, nigdy AB).

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. Jakie układy człowieka znasz?
2. Ile chromosomów ma gameta?
3. Co to zygota?
4. Kto decyduje o płci?

**B. Trening**
5. Matka A, ojciec B — jakie grupy może mieć dziecko?
6. Dlaczego grupy krwi są ważne przy transfuzji?
7. Popraw: „Gameta ma 46 chromosomów”.

**C. Ambitne**
8. Matka 0, ojciec AB — możliwe grupy dziecka?
9. Dlaczego krew ma wiele układów antygenów?
10. Połącz krew z genetyką (L019).

**D. Zaawansowane**
11. Co to HLA?
12. Co to konflikt Rh (idea)?
13. PROBLEM: Matka 0, dziecko AB — możliwe?

### 11D. PROBLEM / THINK

Matka ma grupę 0, ojciec ma grupę A. Dziecko ma grupę AB. Czy to możliwe? Uzasadnij.

*(Odpowiedź: Nie — matka ii nie może dać Iᴬ lub Iᴮ.)*

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Ile chromosomów ma gameta? |
| ZASTOSUJ | Ustal grupy krwi dziecka. |
| WYJAŚNIJ | Dlaczego grupy krwi są ważne? |
| ODKRYJ | Kto decyduje o płci? |
| POŁĄCZ | Połącz krew z ABO (L019). |
| ZAKWESTIONUJ | Czy dziecko może mieć grupę AB, jeśli matka ma 0? |

---

## 12. Odpowiedzi i sposób oceniania

1. Krwionośny, rozrodczy, nerwowy, odpornościowy.  
2. 23.  
3. 46.  
4. Plemnik (X lub Y).  
5. Białko/cukier na powierzchni komórki rozpoznawane przez układ odpornościowy.  
6. A, B, AB, 0.  
7. Bo niezgodna grupa może wywołać reakcję.  
8. Gameta ma 23.  
9. A, B, AB, 0 (zależnie od genotypów rodziców).  
10. Wiele antygenów → wiele układów.  
11. Grupy krwi = antygeny dziedziczone (L019).  
12. HLA = układ zgodności tkankowej.  
13. Matka Rh−, dziecko Rh+ (profilaktyka anty-D).  
14. Nie.

**Sposób oceniania:**
- **Podstawa:** 1 pkt.
- **Trening:** 1 pkt za wynik, 1 pkt za uzasadnienie.
- **Ambitne:** 2 pkt.
- **Zaawansowane:** 3 pkt.

---

## 13. Fiszki

| Pytanie | Odpowiedź |
|---------|-----------|
| Gameta | 23 chromosomy (n) |
| Zygota | 46 chromosomów (2n) |
| Kto decyduje o płci? | Plemnik |
| Grupy ABO | 0, A, B, AB |
| HLA | Układ zgodności tkankowej |

---

## 14. Test końcowy

1. (P) Ile chromosomów ma gameta?  
2. (P) Ile chromosomów ma zygota?  
3. (P) Kto decyduje o płci?  
4. (T) Matka 0, ojciec AB — grupy dziecka?  
5. (T) Popraw: „Gameta ma 46 chromosomów”.  
6. (A) Dlaczego grupy krwi są ważne?  
7. (A) Co to HLA?  
8. (Z) Matka 0, dziecko AB — możliwe?

---

## 15. Checklista

- [ ] Wiem, które układy są istotne dla genetyki.
- [ ] Znam różnicę gameta (n) vs zygota (2n).
- [ ] Wiem, kto decyduje o płci.
- [ ] Rozumiem znaczenie grup krwi.
- [ ] Znam ideę HLA (ambitny).

---

## 16. Mapa pojęć

```text
CZŁOWIEK
├── układy
│   ├── krwionośny → grupy krwi (L019)
│   ├── rozrodczy → gamety (L015)
│   ├── nerwowy/hormonalny → ekspresja genów
│   └── odpornościowy → antygeny
└── gameta (n) + gameta (n) → zygota (2n)
```

---

## 17. Co dalej?

**L003** — diagnoza startowa genetyki.  
Potem L010 → L011…  
**Mosty zapisane:** krew→L019 · gamety→L015 · (płeć→L018).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Gameta | Komórka rozrodcza (n) |
| Zygota | Komórka po połączeniu gamet (2n) |
| Antygen | Cząsteczka rozpoznawana przez układ odpornościowy |
| HLA | Układ zgodności tkankowej |
| Konflikt Rh | Matka Rh−, dziecko Rh+ |

---

## 19. Dodatek zaawansowany

- HLA i transplantologia.  
- mtDNA i dziedziczenie matczyne.  
- Epigenetyka (nazwa).

---

## 20. Jak się uczyć tej lekcji?

1. Przypomnij sobie układy człowieka (5 min).
2. Połącz każdy układ z genetyką (5 min).
3. Zrób notatkę-mapę (5 min).
4. Powtórz fiszki (5 min).

---

## 21. Połączenia międzyprzedmiotowe

- **Biologia:** anatomia człowieka.
- **Chemia:** skład krwi.
- **Medycyna:** transfuzje, przeszczepy.

---

## 22. Zadania z życia codziennego

1. Dlaczego grupy krwi są ważne przy transfuzji?
2. Jak dziedziczy się płeć?
3. Dlaczego matka Rh− potrzebuje profilaktyki?


## KOREKTA I UZUPEŁNIENIE L002 (v3.9.1 — nic nie usunięto)

Most pod genetykę, nie cały podręcznik anatomii.

### Ciało vs gamety (80/20)

| | Komórki somatyczne | Gamety |
|--|--------------------|--------|
| Przykład | skóra, mięsień, neuron | plemnik, komórka jajowa |
| Chromosomy (człowiek) | **46 = 2n** | **23 = n** |
| Powstają | mitoza | **mejoza** (L015) |
| DNA | pełny zestaw | połowa zestawu |

Bez tego nie ma L015 i L016.

### Krew — tylko to, co trzeba przed L019

- Krew = osocze + elementy morfotyczne (erytrocyty, leukocyty, płytki).
- **Grupa ABO** = antygeny na erytrocytach (A, B, brak = 0) + przeciwciała w osoczu.
- **Rh** = osobny układ (D): Rh+ / Rh−.
- Dojrzały erytrocyt ssaka **nie ma jądra** (most L001) — nie „nie ma DNA w organizmie”.
- Transfuzja: nie dawca „ładniejszy”, tylko **zgodność antygen–przeciwciało** (szczegóły L019).

### Płeć — idea na teraz

XX / XY to **chromosomy płci**. Mechanizm X-linked = L018. Tu wystarczy: plemnik niesie X albo Y.

### Cecha = geny + środowisko

Wzrost, masa, opalenizna, blizna po urazie — nie wszystko „jest w genach”. Szczegół: L010.

### Pułapki

| Błąd | Poprawka |
|------|----------|
| „Krew to narząd” | tkanka płynna |
| „Grupa 0 nic nie ma” | brak antygenów A i B; ma przeciwciała anti-A i anti-B |
| „Wszystkie komórki człowieka mają 46 chromosomów” | gamety 23; erytrocyt dojrzały bez jądra |
| „Płeć zależy od komórki jajowej” | jajo zawsze X; plemnik X lub Y |

### Obserwacja ≠ wniosek

Obserwacja: krew grupowana aglutynuje z surowicą anti-A.  
Wniosek: na krwinkach jest antygen A (grupa A lub AB) — nie „na pewno A” bez testu B.

### Mini-klucz

1. 2n vs n — ciało vs gameta.
2. Most L002 → L019 (ABO), L015 (mejoza), L018 (płeć).
3. Środowisko zmienia fenotyp (L010).

### Ciekawostki

- Szpik kostny produkuje elementy morfotyczne.
- Osocze ≈ 90% wody.
- Chromosom Y jest mały — niewiele genów wobec X.

</details>


**Wizualizacje HTML L002:** 23+23=46, XX/XY, ABO antygen/przeciwciało (`BIO_002_v07_czlowiek_krew_gamety_plec_cechy_organizmu.html`).

<!-- ==================== END L002 ==================== -->


<!-- ==================== BEGIN L003 ==================== -->
## KARTA LEKCJI L003

- Numer: L003
- Tytuł roboczy: Diagnoza startowa genetyki
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L002 · Następna: L010 (nie brama)
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L003_DIAGNOZA.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty

## WYKŁAD Z HTML L003 v6.0

HTML: `BIO_003_v08_diagnoza_startowa_genetyki.html`

Diagnoza ≠ nowy wykład. Nieznajomość allelu/replikacji na starcie jest normalna.

Biologia L003 — Diagnoza startowa genetyki (v6.0 — pełna korekta)

  
    
      L003 — Diagnoza startowa genetyki
      Nie uczy nowego materiału — mierzy, co już wiesz przed L010–L021
      
        Poprzednia: L002 (człowiek) · Następna: L010 (dziedziczenie i zmienność)

        Warstwy: [PRZYPOMNIENIE] · diagnoza (nie pełna lekcja podręcznikowa)

        **Wersja 6.0** — pełna korekta: precyzja naukowa, K8–K13, odpowiedzi na ocenę bardzo dobrą, ćwiczenia C i E, tabela „Moje luki"
      
    
  

  

### Spis treści

  
    0. Czym jest diagnoza? (i czym nie jest)
    Wprowadzenie
  

  
    1. Cel diagnozy + kompas
    Cel + kompas
  

  
    2. Pytania rdzeniowe (1–5, w tym 4a/4b/4c)
    5 pytań
  

  
    3. Pytania dla ambitnych (6–8 i 9–14)
    Ambitne
  

  
    4. Klucz odpowiedzi (pełne odpowiedzi + na ocenę bdb)
    Klucz
  

  
    5. Interpretacja wyniku + autodiagnoza
    Interpretacja
  

  
    6. Klinika typowych pomyłek (K1–K13)
    Klinika
  

  
    7. Ściąga startowa (precyzyjne definicje)
    Ściąga startowa
  

  
    8. Mini-diagnoza rozszerzona
    Mini-diagnoza
  

  
    9. Ćwiczenia (A/B/C/D/E)
    Ćwiczenia
  

  
    10. Test końcowy L003 (10 pytań)
    Test
  

  
    11. Mapa startowa + co dalej
    Mapa
  

  
    12. Fiszki startowe (pytanie–odpowiedź + odwrócone)
    Fiszki
  

  
    13. Moje luki po L003 (rubryka ucznia)
    Moje luki
  

  
    14. Checklista + system powtórek
    
      Checklista
      Powtórki
    
  

  
    15. Słownik startowy i status
    
      Słownik
      Status
    
  

  Słowa kluczowe: diagnoza · pytania rdzeniowe · interpretacja wyniku · autodiagnoza · luki · mosty do L010–L021

  0. Czym jest diagnoza? START

  
    L003 jest przede wszystkim diagnozą
    

To **nie jest pełna lekcja**. To **sprawdzenie**: co pamiętasz z wcześniejszych tematów, co kojarzysz z życia oraz jakie pojęcia z genetyki już znasz.
    

**Nie musisz umieć wszystkich odpowiedzi.** Jeżeli nie znasz jakiegoś terminu — np. „allel" albo „replikacja" — nie traktuj tego jako porażki. Po prostu zapisz go jako pojęcie do poznania w kolejnych lekcjach.
    

Wynik diagnozy **nie jest oceną**. Jest **mapą twoich luk** przed blokiem genetyki (L010–L021).
  

  
    Zasada — bez podglądania
    

**Odpowiedz najpierw sam, potem sprawdź.** Błąd teraz = zysk później. Diagnoza nie służy do chwalenia się, tylko do planowania nauki.
  

  
    Jak pracować z diagnozą (5 kroków)
    
      
- **Odpowiedz na wszystkie pytania rdzeniowe** — bez zaglądania do klucza.
      
- **Sprawdź się** — użyj tabeli autodiagnozy (✓ / ? / ✗ / !) w sekcji 5.
      
- **Zapisz, co pomyliłeś** — do tabeli „Moje luki" (sekcja 13).
      
- **Wróć do lekcji** — tej, której dotyczy błąd (L001, L002 lub konkretna lekcja z L010–L021).
      
- **Powtórz diagnozę za tydzień** — zobaczysz postęp.
    
  

  
    Czas na diagnozę rdzeniową
    

**10–15 minut.** Zasady: bez zaglądania do podręcznika; każda odpowiedź na piśmie; szczerze.
    

**Wskazówka:** w kluczu (sekcja 4) każda odpowiedź ma **cztery części** — *Odpowiedź*, *Dlaczego*, *Pułapka* oraz (dla najważniejszych pytań) *Odpowiedź na ocenę bardzo dobrą* — pełny wzór odpowiedzi, którą można napisać w zeszycie lub na sprawdzianie.
  

  1. Cel diagnozy i kompas

  
    Po co robimy diagnozę?
    
      
- Ustalić, co już wiesz o DNA, chromosomach, podziałach i dziedziczeniu.
      
- Wskazać, które lekcje (L010–L021) czytać szybko, a które uważnie.
      
- Oswoić terminologię przed pierwszym blokiem genetyki.
    
    

**80/20:** pięć pytań rdzeniowych mówi, od czego zacząć (L010 szybko / uważnie / od zera).
  

  

#### Kompas — co trzeba wiedzieć wcześniej
  
    [PRZYPOMNIENIE]
    
      
- **L001 (komórka):** komórki mają błonę komórkową, cytoplazmę i zwykle jądro; jądro zawiera większość DNA komórki.
      
- **L002 (człowiek):** organizm człowieka tworzą komórki, tkanki, narządy i układy narządów; krew zawiera różne typy komórek; człowiek rozmnaża się płciowo.
      
- **Wiedza startowa do sprawdzenia:** DNA, chromosomy, gamety, liczby 46 i 23, XX/XY, dziedziczenie cech.
      
- **Z życia:** możesz już kojarzyć grupy krwi, podobieństwo rodzinne, bliźnięta, badania DNA lub choroby dziedziczne.
    
    

Kompas pokazuje, **co jest przypomnieniem** z L001–L002, a **co jest materiałem do zdiagnozowania** (pojęcia, które poznasz dopiero w L010–L021).
  

  2. Pytania rdzeniowe 1–5 · 5–8 min

  
    Instrukcja
    

Odpowiedz najpierw **na piśmie**, bez zaglądania do klucza. Pytanie 4 rozbito na trzy podpunkty — spróbuj odpowiedzieć na każdy osobno.
  

  
    
      
- **Co to DNA i gdzie jest w komórce zwierzęcej?**
      
- **Ile chromosomów ma komórka ciała człowieka?**
      
- **Czym różni się mitoza od mejozy (jednym zdaniem)?**
      
- 
        **Definicje podstawowe:**
        
          
- **4a.** Co to **allel**?
          
- **4b.** Co to **genotyp**?
          
- **4c.** Co to **fenotyp**? Podaj jeden przykład fenotypu człowieka.
        
      
      
- **W typowym szkolnym modelu człowieka: jaki zestaw chromosomów płci występuje zwykle u kobiet, a jaki zwykle u mężczyzn?**
    
  

  
    Dla ambitnych — dodatkowe 3 pytania (6–8)
    
      
- **Co to replikacja i po co jest?**
      
- **Co oznacza zapis 2n = 46?**
      
- **Dlaczego rodzeństwo nie jest identyczne? Podaj co najmniej dwa mechanizmy.**
    
  

  3. Pytania dla ambitnych 9–14 · bez presji

  
    Pytania na przyszłość — nie musisz ich umieć
    

Te pytania dotyczą materiału z L011–L020. Jeśli ich nie umiesz — **to normalne i oczekiwane**. Nie są one częścią właściwej diagnozy startowej. Zapisuj je jako „pojęcia do poznania", nie jako „porażki".
    
      
- Co to chromatyda i centromer?
      
- Czym różni się gen od chromosomu?
      
- Co to allel dominujący i recesywny?
      
- Dlaczego hemofilia częściej dotyczy mężczyzn?
      
- Co to mutacja i mutagen?
      
- Czy każda mutacja jest szkodliwa?
    
  

  4. Klucz odpowiedzi (pełny)

  
    Sprawdź się dopiero po odpowiedzi na piśmie
    

Każda odpowiedź ma do czterech warstw:
    
      
- **Odpowiedź** — poprawna, krótka odpowiedź na pytanie.
      
- **Dlaczego** — uzasadnienie, skąd to wiadomo / co to łączy.
      
- **Pułapka** — najczęstszy błąd związany z tym pytaniem.
      
- **Odpowiedź na ocenę bardzo dobrą** (★) — pełny wzór odpowiedzi, którą można napisać w zeszycie lub na sprawdzianie.
    
  

  

#### Pytania rdzeniowe (1–5)
  
    
      
- Co to DNA i gdzie jest w komórce zwierzęcej?
      
- Ile chromosomów ma komórka ciała człowieka?
      
- Czym różni się mitoza od mejozy (jednym zdaniem)?
      
- 4a. Allel / 4b. Genotyp / 4c. Fenotyp
      
- XX/XY w typowym modelu szkolnym
    

    Pokaż pełny klucz

      
        1. Co to DNA i gdzie jest w komórce zwierzęcej?
        

**Odpowiedź:** DNA (kwas deoksyrybonukleinowy) to nośnik informacji genetycznej. W typowej komórce zwierzęcej **większość DNA znajduje się w jądrze komórkowym**, a **niewielka ilość także w mitochondriach** (tzw. mtDNA).
        **Dlaczego:** Jądro komórkowe jest głównym miejscem przechowywania DNA u eukariontów. Ale mitochondria mają własną, kolistą cząsteczkę DNA — pozostałość po bakteryjnym pochodzeniu mitochondriów (teoria endosymbiozy, L001).
        Nie mów „DNA jest tylko w jądrze" — to nieprawda. W komórce eukariotycznej DNA występuje też w mitochondriach (a u roślin — dodatkowo w chloroplastach).
        DNA (kwas deoksyrybonukleinowy) to główny nośnik informacji genetycznej. W typowej komórce zwierzęcej większość DNA znajduje się w jądrze komórkowym, a niewielka ilość — w mitochondriach.
      

      
        2. Ile chromosomów ma komórka ciała człowieka?
        

**Odpowiedź:** **46 chromosomów** — czyli **23 pary** (22 pary autosomów + para chromosomów płci XX lub XY).
        **Dlaczego:** Komórki ciała (somatyczne) człowieka są *diploidalne* — mają dwa zestawy chromosomów (2n): jeden od matki, drugi od ojca. Zapis: 2n = 46 (L012).
        Pułapka: mówienie „człowiek ma 23 chromosomy" — to prawda tylko o gamecie. Komórka ciała ma **46**, bo ma 23 *pary*.
        Typowa komórka ciała człowieka ma 46 chromosomów, czyli 23 pary: 22 pary autosomów i jedną parę chromosomów płci (XX u kobiety, XY u mężczyzny).
      

      
        3. Czym różni się mitoza od mejozy?
        

**Odpowiedź:** **Mitoza** prowadzi do powstania komórek o *takiej samej* liczbie chromosomów jak komórka macierzysta (2n → 2n), a **mejoza** *zmniejsza* liczbę chromosomów o połowę (2n → n) podczas tworzenia gamet.
        **Dlaczego:** Mitoza służy wzrostowi i regeneracji — komórki potomne muszą mieć kompletny zestaw DNA. Mejoza służy wytworzeniu gamet — po zapłodnieniu n + n = 2n, więc liczba chromosomów w pokoleniach się nie zmienia (L014, L015).
        Nie wystarczy napisać „mejoza tworzy cztery komórki, mitoza dwie". Liczba komórek to *skutek*, nie najważniejsza różnica. Najważniejsze: **liczba chromosomów** w komórkach potomnych.
        Mitoza to podział komórki prowadzący zwykle do powstania dwóch komórek potomnych o tej samej liczbie chromosomów co komórka macierzysta, natomiast mejoza prowadzi do powstania gamet o liczbie chromosomów zmniejszonej o połowę.
      

      
        4a. Co to allel?
        

**Odpowiedź:** **Allel** — jedna z możliwych *wersji genu* (np. A lub a).
        **Dlaczego:** Ten sam gen może występować w różnych wersjach. Komórka ciała ma dwa allele tego samego genu — po jednym od każdego rodzica.
        Błędne: „allel to cały chromosom" — allel to jedna wersja *jednego genu*, nie cały chromosom.
        Allel to jedna z możliwych wersji tego samego genu. W typowym zapisie szkolnym allele oznaczamy literami, np. A (dominujący) i a (recesywny).
      

      
        4b. Co to genotyp?
        

**Odpowiedź:** **Genotyp** — *zestaw alleli* danego organizmu dotyczących danej cechy (lub wielu cech), np. AA, Aa lub aa.
        **Dlaczego:** Genotyp to „litery" — zapis tego, jakie wersje genów ma dany organizm. Nie myl go z fenotypem (wyglądem): przy pełnej dominacji AA i Aa mają ten sam fenotyp, ale różne genotypy (L017).
        Błędne: „genotyp to wygląd". Genotyp to *zapis alleli*, wygląd to fenotyp. Z fenotypu nie zawsze da się odczytać genotyp.
        Genotyp to zestaw alleli danego organizmu. W prostych zadaniach szkolnych oznaczamy go literami — np. AA (homozygota dominująca), Aa (heterozygota), aa (homozygota recesywna).
      

      
        4c. Co to fenotyp? Podaj przykład.
        

**Odpowiedź:** **Fenotyp** — *zespół obserwowalnych cech organizmu*. Zależy od genotypu, a często także od środowiska. Przykład: kolor oczu, grupa krwi, wzrost.
        **Dlaczego:** Fenotyp to nie pojedyncza cecha, lecz zestaw cech organizmu, które można obserwować lub zmierzyć. Fenotyp = geny + środowisko + rozwój. Ten sam genotyp nie musi dawać identycznego fenotypu (np. wzrost zależy też od odżywiania).
        Błędne: „fenotyp to genotyp". To dwa różne pojęcia. Genotyp = zapis alleli; fenotyp = to, co widać lub można zmierzyć.
        Fenotyp to zespół obserwowalnych cech organizmu, np. grupa krwi, kolor oczu, wzrost lub budowa ciała. Zależy od genotypu oraz często także od warunków środowiska, m.in. odżywiania, chorób i aktywności fizycznej.
      

      
        5. XX/XY — kto jest kim? (typowy model szkolny)
        

**Odpowiedź:** W typowym szkolnym modelu człowieka: **XX występuje zwykle u kobiet**, a **XY u mężczyzn**. O płci dziecka decyduje *plemnik* — komórka jajowa zawsze wnosi X, a plemnik może wnieść X albo Y.
        **Dlaczego:** Para chromosomów płci decyduje o płci. W zadaniach szkolnych przyjmujemy ten podstawowy model dziedziczenia płci. W biologii istnieją jednak także rzadsze warianty rozwoju płciowego i chromosomowego, które wykraczają poza podstawowy zakres tej lekcji (L018).
        Nie polegaj na skojarzeniach językowych („Y jak «ona» nie pasuje"). W podstawowym modelu szkolnym: XX = kobieta, XY = mężczyzna.
        W typowym szkolnym modelu dziedziczenia płci u człowieka kobieta ma dwa chromosomy X (XX), a mężczyzna jeden X i jeden Y (XY). O płci dziecka decyduje plemnik, który wnosi X albo Y — komórka jajowa zawsze wnosi X.
      

    
  

  

#### Pytania dodatkowe (6–8)
  
    
      
- Co to replikacja i po co jest?
      
- Co oznacza zapis 2n = 46?
      
- Dlaczego rodzeństwo nie jest identyczne?
    

    Pokaż pełny klucz

      
        6. Co to replikacja i po co jest?
        

**Odpowiedź:** Replikacja to **kopiowanie DNA przed podziałem komórki** (w fazie S). Zachodzi *semikonserwatywnie*: każda nowa cząsteczka DNA składa się z jednej starej nici i jednej nowej.
        **Dlaczego:** Obie komórki potomne muszą dostać pełną, identyczną informację genetyczną. Bez wcześniejszego skopiowania DNA jedna z komórek dostałaby niepełny zestaw. Dlatego replikacja poprzedza zarówno mitozę, jak i mejozę (L013).
        Replikacja ≠ mitoza. Replikacja to *kopiowanie DNA*; mitoza to *podział komórki*. Najpierw jedno, potem drugie.
        Replikacja to proces kopiowania DNA, który zachodzi przed podziałem komórki (w fazie S cyklu komórkowego). Jest potrzebna, aby obie komórki potomne otrzymały pełną, identyczną informację genetyczną. Replikacja jest semikonserwatywna — każda nowa cząsteczka DNA zawiera jedną starą i jedną nową nić.
      

      
        7. Co oznacza zapis 2n = 46?
        

**Odpowiedź:** To zapis **diploidalnej liczby chromosomów** w komórce ciała człowieka. `2n` = dwa zestawy chromosomów; `46` = łączna liczba chromosomów = 23 pary.
        **Dlaczego:** Komórka ciała dostaje jeden zestaw chromosomów od matki (przez komórkę jajową) i jeden od ojca (przez plemnik). Każdy zestaw to 23 chromosomy, razem 46 (L012).
        Nie myl 2n z n. **n = 23** to liczba w gamecie (jeden zestaw). **2n = 46** to liczba w komórce ciała (dwa zestawy).
        Zapis 2n = 46 oznacza, że typowa komórka ciała człowieka jest diploidalna i zawiera 46 chromosomów, czyli 23 pary — po jednym chromosomie w każdej parze od matki i po jednym od ojca.
      

      
        8. Dlaczego rodzeństwo nie jest identyczne?
        

**Odpowiedź:** Rodzeństwo zwykle nie jest identyczne, ponieważ każde z rodziców wytwarza **różne gamety** podczas mejozy, połączenie plemnika i komórki jajowej jest **losowe**, a na rozwój człowieka wpływa również **środowisko**.
        

**Mechanizmy genetyczne:**
          
            
- **Rekombinacja chromosomowa** (crossing-over) — wymiana fragmentów chromatyd niesiostrzanych między homologami w profazie I mejozy.
            
- **Niezależna segregacja chromosomów** — pary chromosomów homologicznych rozchodzą się niezależnie do gamet (2²³ ≈ 8,4 mln możliwych zestawów).
            
- **Losowe zapłodnienie** — dowolny plemnik łączy się z dowolną komórką jajową.
          
        
        **Dlaczego:** Rodzice mają ustalone genotypy, ale ich gamety są *za każdym razem inne*. Rodzeństwo otrzymuje różne kombinacje alleli — dlatego różni się wyglądem, grupą krwi itd. (poza bliźniakami jednojajowymi).
        Wyjątek: **bliźniaki jednojajowe** zaczynają rozwój z tej samej zygoty, dlatego są bardzo podobne genetycznie — ale także one nie muszą mieć całkowicie identycznego fenotypu (środowisko, mutacje somatyczne, epigenetyka).
        Rodzeństwo nie jest identyczne, ponieważ każde dziecko powstaje z innej pary gamet. Trzy mechanizmy powodują różnorodność: rekombinacja chromosomowa (wymiana fragmentów chromosomów podczas mejozy), niezależna segregacja chromosomów oraz losowe zapłodnienie. Dodatkowo na fenotyp wpływa środowisko. Wyjątkiem są bliźniaki jednojajowe, ale one też mogą różnić się fenotypem.
      

    
  

  

#### Pytania ambitne (9–14)
  
    
      
- Co to chromatyda i centromer?
      
- Czym różni się gen od chromosomu?
      
- Co to allel dominujący i recesywny?
      
- Dlaczego hemofilia częściej dotyczy mężczyzn?
      
- Co to mutacja i mutagen?
      
- Czy każda mutacja jest szkodliwa?
    

    Pokaż pełny klucz

      
        9. Co to chromatyda i centromer?
        

**Odpowiedź:**
          
            
- **Chromatyda** — kopia chromosomu powstała po replikacji. Chromatydy siostrzane są połączone i identyczne.
            
- **Centromer** — miejsce połączenia dwóch chromatyd siostrzanych. To *jednostka liczenia chromosomów*: jeden centromer = jeden chromosom.
          
        
        **Dlaczego:** Po replikacji chromosom ma dwie chromatydy, ale *nadal jest jednym chromosomem*, bo ma jeden centromer. Chromatydy rozdzielą się dopiero w anafazie (mitoza) lub w anafazie II (mejoza). To dlatego po fazie S liczymy 46 chromosomów, ale 92 chromatydy (L012).
        Nie mów „92 chromosomy po replikacji". Liczymy *centromery* — centromerów jest nadal 46, więc chromosomów jest 46; chromatyd jest 92.
      

      
        10. Czym różni się gen od chromosomu?
        

**Odpowiedź:**
          
            
- **Chromosom** — silnie upakowana forma DNA z białkami (histonami). Cała „paczka".
            
- **Gen** — *odcinek* DNA w chromosomie, który zawiera informację o jednym produkcie (białku lub RNA).
          
        
        **Dlaczego:** Jeden chromosom zawiera **tysiące genów**. Chromosom to poziom organizacji (jak „książka"), gen to konkretny „przepis" w środku. Analogia: chromosom = książka kucharska; gen = pojedynczy przepis (L011, L012).
        Błędne: „gen to chromosom". Gen jest *częścią* chromosomu.
      

      
        11. Co to allel dominujący i recesywny?
        

**Odpowiedź:**
          
            
- **Dominujący** — ujawnia się, gdy jest tylko *jeden* (w heterozygocie Aa).
            
- **Recesywny** — ujawnia się tylko, gdy są *dwa* (w homozygocie aa).
          
        
        **Dlaczego:** W pełnej dominacji allel A „przykrywa" efekt allelu a. Dlatego AA i Aa dają ten sam fenotyp (dominujący), a aa — fenotyp recesywny. Uwaga: „dominujący" nie znaczy „silniejszy" ani „częstszy" — tylko „ujawnia się w heterozygocie" (L017).
        Błędne: „dominujący = lepszy/częstszy". Dominacja to *sposób ujawniania się* w fenotypie, nie wartość ani częstość w populacji.
      

      
        12. Dlaczego hemofilia częściej dotyczy mężczyzn?
        

**Odpowiedź:** Gen hemofilii leży na **chromosomie X** i jest **recesywny**. Mężczyzna ma tylko **jeden chromosom X** (XY), więc nie ma drugiego X, który mógłby „zamaskować" wadliwy allel. Kobieta ma dwa X — jeśli jeden jest wadliwy, drugi (zdrowy) może wystarczyć.
        **Dlaczego:** To zjawisko **dziedziczenia sprzężonego z X**. U mężczyzny każdy allel na X (nawet recesywny) ujawni się, bo nie ma drugiego X. U kobiety recesywny allel ujawni się tylko wtedy, gdy *oba* X są wadliwe (XᵃXᵃ). Dlatego kobiety chore są rzadkością, a nosicielkami — często (L018).
        Błędne: „kobieta nigdy nie ma hemofilii". Może mieć (XᵃXᵃ), ale to bardzo rzadkie — potrzeba wadliwych alleli od *obu* rodziców.
      

      
        13. Co to mutacja i mutagen?
        

**Odpowiedź:**
          
            
- **Mutacja** — *trwała zmiana w materiale genetycznym*, czyli najczęściej w sekwencji DNA albo w liczbie lub budowie chromosomów.
            
- **Mutagen** — *czynnik*, który zwiększa częstość mutacji (np. UV, promieniowanie X, niektóre chemikalia, niektóre wirusy).
          
        
        **Dlaczego:** Mutacje powstają spontanicznie (błędy replikacji) lub pod wpływem mutagenów. Mutageny *zwiększają ryzyko* — nie tworzą mutacji „z niczego". Mutacja ≠ mutagen — jedno to zmiana w materiale genetycznym, drugie to czynnik zewnętrzny (L020).
        Błędne: „mutagen = mutacja". Mutagen to *przyczyna*, mutacja to *skutek*.
      

      
        14. Czy każda mutacja jest szkodliwa?
        

**Odpowiedź:** **Nie.** Skutki mutacji mogą być:
          
            
- **szkodliwe** — zaburzają funkcję ważnego białka,
            
- **neutralne** — nie zmieniają istotnie funkcjonowania organizmu,
            
- **korzystne** (rzadko) — dają przewagę w danym środowisku.
          
        
        **Dlaczego:** To, czy mutacja będzie zauważalna, zależy m.in. od miejsca jej wystąpienia i od tego, czy zmienia działanie ważnego genu. Kod genetyczny jest *zdegenerowany* (kilka kodonów → ten sam aminokwas), a część DNA nie koduje białek. Dlatego wiele zmian w DNA nie wpływa istotnie na organizm.
        Błędne: „każda mutacja powoduje chorobę" albo „mutacja = nowotwór". Mutacja ≠ choroba ≠ nowotwór. Nowotwór wymaga zwykle *nagromadzenia* mutacji, nie jednej.
      

    
  

  5. Interpretacja wyniku

  
    Policz trafienia w pytaniach rdzeniowych (1–5)
    
      

        
        
          ********
          ************
          ************
        
      | Trafienia (z 5 rdzeniowych) | Co robić dalej |
| --- | --- |
| 0–1 | Wróć do L001–L002 (jądro = DNA, komórka, gamety). Potem L010 — czytaj wolno, od definicji. |
| 2–3 | L010 czytaj uważnie. L011 zaczynaj od nukleotydu i par zasad. |
| 4–5 | L010 szybkim przeglądem. L011 pełną lekcją. Możesz iść dalej w tempie. |

    
    
      Pytanie 4 rozbite na 4a/4b/4c
      

Pytanie 4 składa się z trzech pojęć. Licz je osobno:
      
        
- **3 poprawne odpowiedzi** (4a + 4b + 4c) — pełne opanowanie,
        
- **2 poprawne odpowiedzi** — częściowa luka,
        
- **0–1 poprawnych** — wróć do L017 (dziedziczenie jednogenowe).
      
    
  

  

#### Interpretacja z pytaniami 6–8 (skala 8-punktowa)
  
    

      
      
        ********
        ****
        ****
      
    | Wynik (z 8) | Co dalej |
| --- | --- |
| 8/8 | L010 szybko; skup się na L013, L017, L020 (trudniejsze lekcje). |
| 4–7/8 | L010–L013 uważnie; wróć do L001 (jądro) i L002 (gamety). |
| 0–3/8 | L001 + L010 od zera; fiszki po każdej lekcji. |

  

  

#### Ważniejsze od liczby punktów — rozumienie
  
    

**Ważniejsze od liczby punktów jest rozumienie odpowiedzi.** Jeśli odpowiedź była trafiona, ale zgadnięta albo nie potrafisz jej uzasadnić, zaznacz ją jako „do powtórki".
    

Szczególnie ważne są luki dotyczące:
    
      
- DNA i jądra (gdzie jest materiał genetyczny),
      
- różnicy między 46 a 23 chromosomami,
      
- mitozy i mejozy,
      
- pojęć: gen – allel – genotyp – fenotyp.
    
  

  

#### Tabela autodiagnozy
  
    

      
      
        ****
        ****
        ****
        ****
      
    | Oznaczenie | Co znaczy | Co robić |
| --- | --- | --- |
| ✓ | Umiem wyjaśnić własnymi słowami | Przejdź dalej |
| ? | Kojarzę, ale nie potrafię wyjaśnić | Przeczytaj odpowiednią lekcję |
| ✗ | Nie wiem albo odpowiedziałem błędnie | Wpisz do tabeli „Moje luki" (sekcja 13) |
| ! | To typowa pułapka | Powtórz za 2–3 dni |

  

  

#### Próg roboczy — kiedy wracać do czego
  
    

      
      
        
        
        
        
        
        
      
    | Problem w diagnozie | Wróć do |
| --- | --- |
| Luki w „gdzie jest DNA" | L001 (jądro) |
| Luki w gametach / płci | L002 (gamety, XX/XY) + L015 |
| Luki w grupach krwi | L002 + L019 |
| Luki w chromosomach (46 vs 23) | L012 |
| Luki w allelach / genotypach | L017 |
| Luki w mutacjach | L020 |

  

  6. Klinika typowych pomyłek K1–K13

  

To najczęstsze pomyłki pojawiające się **na starcie genetyki**. Przeczytaj je nawet jeśli diagnoza wyszła dobrze — łatwo je popełnić w pierwszych zadaniach.

  
    K1 — „DNA jest tylko w krwi"
    

**Błąd:** „DNA występuje tylko we krwi."
    

**Poprawa:** DNA jest w jądrze **niemal każdej komórki z jądrem** (wyjątek: dojrzały erytrocyt ssaka — nie ma jądra).
    

**Reguła:** lokalizacja DNA = L001 + L011.
    

**Pułapka:** mylenie „badamy DNA z krwi" z „DNA jest tylko we krwi".
  

  
    K2 — „Człowiek ma 23 chromosomy"
    

**Błąd:** „Człowiek ma 23 chromosomy."
    

**Poprawa:** 23 **pary** = 46 w komórce ciała; 23 sztuki w gamecie.
    

**Pułapka:** liczba haploidalna vs diploidalna. Mówisz „23 pary", nie „23 chromosomy".
  

  
    K3 — „Mitoza i mejoza to to samo"
    

**Błąd:** „Mitoza i mejoza to to samo, bo obie dzielą komórkę."
    

**Poprawa:** Obie to podziały, ale **wynik i cel** inne (2n vs n; ciało vs gamety).
    

**Pułapka:** liczenie „ile komórek powstaje" bez pytania „jaka liczba chromosomów".
  

  
    K4 — „Genotyp to wygląd"
    

**Błąd:** „Genotyp to wygląd organizmu."
    

**Poprawa:** Wygląd / cecha = **fenotyp**; **genotyp** = zestaw alleli.
    

**Pułapka:** „Ma niebieskie oczy, więc ma genotyp niebieski" — za krótko.
  

  
    K5 — „XY to kobieta"
    

**Błąd:** skojarzenia językowe („Y jak «ona» nie pasuje").
    

**Poprawa:** W typowym modelu szkolnym **XX = kobieta, XY = mężczyzna**.
    

**Pułapka:** skojarzenia zamiast faktu.
  

  
    K6 — „Każda mutacja powoduje chorobę"
    

**Błąd:** „Każda mutacja = choroba."
    

**Poprawa:** Nie każda mutacja powoduje chorobę. Skutki mutacji mogą być **szkodliwe, neutralne, a w pewnych warunkach także korzystne**. To, czy mutacja będzie zauważalna, zależy m.in. od miejsca jej wystąpienia i od tego, czy zmienia działanie ważnego genu.
    

**Most:** L020.
  

  
    K7 — „Rodzeństwo musi być identyczne"
    

**Błąd:** „Skoro ci sami rodzice, to rodzeństwo jest identyczne."
    

**Poprawa:** Ci sami rodzice ≠ te same gamety. **Rekombinacja chromosomowa + losowy rozdział chromosomów + losowe zapłodnienie** — każde dziecko jest inne (poza bliźniakami jednojajowymi, które i tak mogą mieć drobne różnice).
    

**Most:** L015, L017.
  

  
    K8 — „Jeden gen zawsze oznacza jedną cechę"
    

**Błąd:** „Jeden gen zawsze odpowiada za jedną widoczną cechę."
    

**Poprawa:** W prostych zadaniach szkolnych często tak zakładamy, ale **wiele cech człowieka zależy od działania wielu genów oraz od środowiska**. Wyjątki: wzrost, kolor skóry, ciśnienie krwi.
    

**Reguła:** W zadaniach *modelowych* używamy prostego założenia „jeden gen = jedna cecha". W rzeczywistości istnieje *dziedziczenie wielogenowe*.
    

**Pułapka:** przenoszenie prostych krzyżówek Mendla (Aa × Aa) na każdą cechę człowieka — np. kolor oczu to nie prosty model jednogenowy.
  

  
    K9 — „Dominujący znaczy częstszy lub lepszy"
    

**Błąd:** „Allel dominujący jest częstszy, silniejszy albo korzystniejszy."
    

**Poprawa:** Dominujący oznacza tylko tyle, że jego działanie **ujawnia się w fenotypie heterozygoty**. Nie oznacza „lepszy", „zdrowszy" ani „częstszy" w populacji.
    

**Reguła:** Dominacja = sposób ujawniania się w fenotypie, nie wartość biologiczna.
    

**Pułapka:** mylenie dominacji z przewagą w przyrodzie lub z dużą częstością w populacji.
  

  
    K10 — „Połowa DNA od mamy i połowa od taty, więc wszystko po równo"
    

**Błąd:** „Każda cecha dziecka jest dokładnie w połowie od matki i w połowie od ojca."
    

**Poprawa:** Dziecko otrzymuje materiał genetyczny od *obojga* rodziców (po jednym allelu z każdej pary), ale **poszczególne allele i ich działanie nie muszą dawać cechy pośredniej**. Cecha może wyglądać „jak u taty" albo „jak u mamy" — zależnie od tego, które allele się ujawniają.
    

**Reguła:** Dziedziczenie to nie „uśrednianie" cech. Allele działają według reguł dominacji / kodominacji.
    

**Pułapka:** mylenie „połowy materiału genetycznego" z „połową cechy".
  

  
    K11 — „Gameta ma połowę DNA, czyli połowę człowieka"
    

**Błąd:** „Plemnik lub komórka jajowa to połowa gotowego człowieka."
    

**Poprawa:** Gameta ma **haploidalny zestaw chromosomów**, czyli po jednym chromosomie z każdej pary (n = 23), ale *nie* jest „połową ciała". To wyspecjalizowana komórka rozrodcza.
    

**Reguła:** n = 23 to liczba chromosomów, nie „stopień rozwoju" ani „połowa organizmu".
    

**Pułapka:** mylenie liczby chromosomów z rozmiarem, wartością lub stopniem rozwoju komórki.
  

  
    K12 — „Replikacja to podział komórki"
    

**Błąd:** „Replikacja i mitoza to to samo."
    

**Poprawa:** **Replikacja** to *kopiowanie DNA*; następuje *przed* podziałem komórki (faza S). **Mitoza** lub **mejoza** to procesy, podczas których komórka się dzieli.
    

**Reguła:** Kolejność: najpierw DNA jest kopiowane (replikacja), potem komórka może się dzielić (mitoza / mejoza).
    

**Pułapka:** mylenie kolejności i myślenie, że „podział komórki" obejmuje kopiowanie DNA.
  

  
    K13 — „Chromosom ma zawsze kształt X"
    

**Błąd:** „Każdy chromosom zawsze wygląda jak litera X."
    

**Poprawa:** Kształt X jest typowy dla chromosomu **po replikacji**, gdy składa się on z *dwóch chromatyd siostrzanych* połączonych centromerem. Przed replikacją chromosom to pojedyncza nić.
    

**Reguła:** Kształt chromosomu zależy od etapu cyklu komórkowego.
    

**Pułapka:** rysunek chromosomu z podręcznika nie pokazuje jego jedynej możliwej postaci.
  

  7. Ściąga startowa precyzyjne definicje

  

To minimum, które trzeba mieć w głowie, **zanim zacznie się blok genetyki**. Każdy wiersz to odsyłacz do lekcji, gdzie dane pojęcie jest rozwinięte.

  
    

      
      
        
          ****
          ****
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
        
          ****
          
          
        
      
    | Pojęcie | Definicja precyzyjna | Gdzie wrócisz |
| --- | --- | --- |
| DNA | kwas deoksyrybonukleinowy, nośnik informacji genetycznej; u zwierząt większość DNA znajduje się w jądrze, a niewielka część w mitochondriach | L011 |
| Gen | odcinek DNA zawierający informację potrzebną do wytworzenia określonego produktu, najczęściej białka albo cząsteczki RNA. Gen może wpływać na cechę organizmu, ale jedna cecha często zależy od wielu genów i środowiska | L010, L011 |
| Chromosom | upakowana forma DNA + białka | L012 |
| Kariotyp | zestaw chromosomów komórki | L012 |
| 2n = 46 | komórka ciała człowieka: 46 chromosomów, 23 pary | L012, L014 |
| n = 23 | gameta (plemnik, komórka jajowa) | L015 |
| Replikacja | kopiowanie DNA przed podziałem; semikonserwatywna | L013 |
| Mitoza | 2n → 2n; wzrost, regeneracja | L014 |
| Mejoza | 2n → n; gamety, zmienność | L015 |
| Allel | jedna z możliwych wersji genu (np. A lub a) | L017 |
| Genotyp | zestaw alleli danego organizmu (AA, Aa lub aa) | L017 |
| Fenotyp | zespół obserwowalnych cech organizmu; zależy od genotypu oraz często także od środowiska | L017 |
| XX / XY | kobieta / mężczyzna — typowy model szkolny | L018 |
| Mutacja | trwała zmiana w materiale genetycznym, czyli najczęściej w sekwencji DNA albo w liczbie lub budowie chromosomów | L020 |

  

  
    Uwaga — o uproszczeniu „jeden gen = jedna cecha"
    

W prostych zadaniach szkolnych często zakłada się, że jeden gen odpowiada za jedną cechę. Jest to **uproszczenie pomocne w nauce dziedziczenia**, ale w rzeczywistości wiele cech (np. wzrost, kolor skóry) zależy od **wielu genów i środowiska**.
  

  jądro → DNA → 46 chromosomów → mitoza ≠ mejoza → allel → genotyp ≠ fenotyp

  8. Mini-diagnoza rozszerzona 5 szybkich pytań · 3–5 min

  

Wersja skrócona — jeśli nie masz 15 minut, zrób tę.

  
    
      
- Najmniejsza jednostka życia?
      
- DNA u człowieka (typowa komórka ciała)?
      
- Blizna po kolanie — dziedziczna?
      
- Plemnik: 46 czy 23 chromosomy?
      
- Dwoje rodzeństwa różni się, choć ci sami rodzice — czy to „błąd genów"?
    

    Pokaż pełny klucz

      
        1. Najmniejsza jednostka życia?
        

**Odpowiedź:** **Komórka.**
        **Dlaczego:** Komórka to najmniejsza podstawowa jednostka budowy i funkcjonowania organizmów. Wirusy nie są komórkami — nie mają cytoplazmy, rybosomów ani samodzielnego metabolizmu (L001).
        Błędne: „atom" albo „cząsteczka" — to jednostki materii nieożywionej, nie życia.
      

      
        2. DNA u człowieka (typowa komórka ciała)?
        

**Odpowiedź:** **W jądrze komórkowym** — dodatkowo niewielka ilość w mitochondriach.
        **Dlaczego:** Jądro zawiera większość DNA. Ale mitochondria mają własny kolisty DNA — pozostałość po bakteryjnym pochodzeniu (endosymbioza, L001).
        Błędne: „w cytoplazmie" — u eukariontów DNA nie pływa swobodnie w cytoplazmie. Jest w jądrze, otoczonym błoną jądrową.
      

      
        3. Blizna po kolanie — dziedziczna?
        

**Odpowiedź:** **Nie** — to cecha nabyta, nie dziedziczna.
        **Dlaczego:** Blizna powstaje w wyniku urazu (środowiska), a nie jest zapisana w DNA. Nie przekazuje się potomstwu jako gen. Cechy dziedziczne (np. grupa krwi) są zapisane w DNA przekazywanym przez gamety (L010).
        Błędne: „skoro tata ma bliznę, dziecko też będzie miało". Nie — blizn nie dziedziczymy.
      

      
        4. Plemnik: 46 czy 23 chromosomy?
        

**Odpowiedź:** **23** (n).
        **Dlaczego:** Plemnik to gameta — komórka haploidalna. Powstaje w mejozie, która redukuje 2n → n. Po zapłodnieniu 23 (plemnik) + 23 (komórka jajowa) = 46 (zygota 2n) — patrz L002, L015.
        Błędne: „46, jak każda komórka". Plemnik *nie* ma 46 — jest komórką rozrodczą, więc ma *połowę* zestawu.
      

      
        5. Rodzeństwo różni się — czy to „błąd genów"?
        

**Odpowiedź:** **Nie** — to normalne i oczekiwane zjawisko.
        **Dlaczego:** Każde dziecko powstaje z innej pary gamet. Trzy mechanizmy:
          
            
- **Rekombinacja chromosomowa** (crossing-over) — wymiana odcinków między homologami (L015),
            
- **Niezależna segregacja** — losowy rozdział 23 par chromosomów (2²³ możliwych kombinacji),
            
- **Losowe zapłodnienie** — dowolny plemnik łączy się z dowolną komórką jajową.
          
        
        Błędne: „skoro ci sami rodzice, dzieci muszą być identyczne". To nieprawda — rodzeństwo (poza bliźniakami jednojajowymi) jest za każdym razem inne.
      

    
  

  
    Pułapki mini-diagnozy
    
      
- „Umiem grupy krwi" ≠ umiem allele Iᴬ, Iᴮ, i (L019).
      
- „Wiem, co to DNA" ≠ umiem par A–T / C–G (L011).
      
- Zgadywanie bez uzasadnienia = luka, nawet przy trafieniu.
    
  

  9. Ćwiczenia A / B / C / D / E

  
    Kolejność pracy z ćwiczeniami
    

**A. Podstawa** — sprawdzenie terminów. **B. Trening** — zastosowanie. **C. Wybierz i uzasadnij** — typ zadań sprawdzianowych. **D. Ambitne** — łączenie pojęć. **E. Napraw odpowiedź** — szukanie typowych błędów. Po ćwiczeniach przejdź do testu końcowego (sekcja 10).
  

  

#### A. Podstawa
  
    
      
- Podkreśl poprawne: DNA u zwierzęcia jest głównie w (jądrze / wakuoli / ścianie komórkowej).
      
- Uzupełnij: komórka ciała człowieka ma ___ chromosomów, gameta ma ___.
      
- Połącz: mitoza — mejoza — replikacja z: kopiowanie DNA / gamety / wzrost.
      
- XX czy XY — kto jest kim (w typowym modelu szkolnym)?
      
- Allel to: (a) cały chromosom (b) wersja genu (c) białko.
    

    Pokaż pełne odpowiedzi

      
        A1.
        

**Odpowiedź:** jądro.
        **Dlaczego:** Jądro zawiera większość DNA. Wakuola to zbiornik, ściana to osłona — nie ma tam DNA.
      

      
        A2.
        

**Odpowiedź:** 46 i 23.
        **Dlaczego:** Komórka ciała = 2n = 46 (23 pary); gameta = n = 23 (jeden zestaw).
      

      
        A3.
        

**Odpowiedź:** mitoza → wzrost; mejoza → gamety; replikacja → kopiowanie DNA.
        **Dlaczego:** Mitoza służy wzrostowi i regeneracji (2n → 2n). Mejoza wytwarza gamety (2n → n). Replikacja kopiuje DNA przed podziałem.
      

      
        A4.
        

**Odpowiedź:** XX — kobieta; XY — mężczyzna (typowy model szkolny).
        **Dlaczego:** Para chromosomów płci decyduje. Kobieta ma dwa X; mężczyzna X i Y.
      

      
        A5.
        

**Odpowiedź:** (b) wersja genu.
        **Dlaczego:** Allel to jedna z wersji tego samego genu (np. A lub a). Chromosom to „paczka" zawierająca wiele genów; białko to produkt genu.
      

    
  

  

#### B. Trening
  
    
      
- Dlaczego dojrzałe erytrocyty człowieka są złym przykładem „komórki z DNA w jądrze"?
      
- Zapisz jednym zdaniem różnicę 2n vs n.
      
- Rodzeństwo: podaj **dwa** mechanizmy zmienności.
      
- Lekarz pyta o choroby w rodzinie. Połącz to z pojęciem *cecha dziedziczna*.
      
- Ktoś napisał „23 chromosomy w skórze". Popraw i nazwij pułapkę.
    

    Pokaż pełne odpowiedzi

      
        B6.
        

**Odpowiedź:** Bo dojrzały erytrocyt ssaka **traci jądro** w trakcie dojrzewania — nie ma go.
        **Dlaczego:** Erytrocytowi jądro jest niepotrzebne do transportu tlenu; więcej miejsca zostaje dla hemoglobiny. Ale bez jądra nie ma pełnego DNA — wyjątek od reguły „komórka z jądrem ma DNA" (L001, L002).
        Błędne: „erytrocyt ma DNA, bo jest komórką". Dojrzały erytrocyt ssaka *nie ma jądra*, więc nie ma pełnego DNA.
      

      
        B7.
        

**Odpowiedź:** 2n = diploidalna (komórka ciała, 46 u człowieka); n = haploidalna (gameta, 23 u człowieka).
        **Dlaczego:** Liczba zestawów chromosomów. 2n = dwa zestawy (jeden od każdego rodzica), n = jeden zestaw.
      

      
        B8.
        

**Odpowiedź:** np. (1) rekombinacja chromosomowa, (2) niezależna segregacja chromosomów. (Trzeci: losowe zapłodnienie.)
        **Dlaczego:** Każdy z tych mechanizmów prowadzi do nowych kombinacji alleli w gametach / zygotach, dlatego rodzeństwo różni się między sobą.
      

      
        B9.
        

**Odpowiedź:** Lekarz pyta o choroby w rodzinie, bo część chorób ma **składnik dziedziczny** — cechę dziedziczną zapisaną w DNA.
        **Dlaczego:** Wywiad rodzinny to *mapa ryzyka*, nie wyrok. Pokazuje, czy warto zrobić badania genetyczne, na co zwracać uwagę w profilaktyce.
      

      
        B10.
        

**Odpowiedź:** W skórze jest **46** chromosomów (2n), nie 23.
        **Dlaczego:** Skóra to tkanka ciała — komórki somatyczne są diploidalne. 23 to liczba chromosomów *w gamecie*, nie w komórce ciała.
        Nazwa pułapki: **mylenie liczby haploidalnej (n = 23) z diploidalną (2n = 46)**.
      

    
  

  

#### C. Wybierz i uzasadnij typ zadań sprawdzianowych
  
    

**1.** Komórka mięśniowa człowieka zawiera zwykle:
    
      
- A. 23 chromosomy,
      
- B. 46 chromosomów,
      
- C. 23 pary gamet,
      
- D. 46 par chromosomów.
    
    

**Wybierz odpowiedź i uzasadnij ją jednym zdaniem.**

    

**2.** Przed podziałem komórki zachodzi replikacja DNA. Jej znaczenie polega na tym, że:
    
      
- A. komórka zmniejsza liczbę chromosomów,
      
- B. DNA zostaje skopiowane,
      
- C. powstaje nowy organizm,
      
- D. chromosomy znikają.
    
    

**Wybierz odpowiedź i uzasadnij.**

    

**3.** U dwojga rodziców o takich samych grupach krwi ich dzieci mogą różnić się niektórymi cechami. Najlepsze wyjaśnienie brzmi:
    
      
- A. każde dziecko powstaje z innej kombinacji alleli,
      
- B. dzieci nie dziedziczą cech po rodzicach,
      
- C. DNA dzieci zmienia się całkowicie po urodzeniu,
      
- D. rodzeństwo zawsze ma identyczne gamety.
    
    

**Wybierz odpowiedź i uzasadnij.**

    Pokaż pełne odpowiedzi

      
        C1.
        

**Odpowiedź:** **B.** Komórka mięśniowa człowieka zawiera zwykle 46 chromosomów.
        **Uzasadnienie:** Komórki ciała (somatyczne) są diploidalne (2n = 46), więc każda z nich — w tym mięśniowa — ma 46 chromosomów, czyli 23 pary. Odpowiedź A dotyczyłaby gamety, nie komórki ciała.
        A to liczba chromosomów w gamecie. C i D są błędne — nie mieszamy liczby chromosomów z liczbą gamet ani par.
      

      
        C2.
        

**Odpowiedź:** **B.** DNA zostaje skopiowane.
        **Uzasadnienie:** Replikacja to kopiowanie DNA przed podziałem, aby każda komórka potomna otrzymała pełną informację genetyczną. Odpowiedzi A, C i D nie opisują replikacji.
        Uwaga: replikacja nie zmienia liczby chromosomów (liczba centromerów się nie zmienia) — zwiększa się tylko liczba chromatyd i cząsteczek DNA.
      

      
        C3.
        

**Odpowiedź:** **A.** Każde dziecko powstaje z innej kombinacji alleli.
        **Uzasadnienie:** Rodzice mają ustalone genotypy, ale wytwarzają różne gamety (rekombinacja chromosomowa + niezależna segregacja), a zapłodnienie jest losowe. Dlatego każde dziecko otrzymuje inną kombinację alleli — nawet gdy rodzice mają te same grupy krwi.
        B i C są fałszywe — dzieci dziedziczą cechy po rodzicach, a DNA nie zmienia się „całkowicie po urodzeniu". D jest fałszywe — gamety nie są identyczne.
      

    
  

  

#### D. Ambitne
  
    
      
- Czym różni się gen od chromosomu (analogią + definicją)?
      
- Dlaczego hemofilia częściej u mężczyzn? (szkic — pełny model w L018)
      
- Mutagen vs mutacja — para definicji + jeden przykład czynnika.
      
- Czy identyczne bliźnięta jednojajowe mają identyczny fenotyp zawsze? Uzasadnij ostrożnie.
    

    Pokaż pełne odpowiedzi

      
        D11.
        

**Odpowiedź:**
          
            
- **Definicja:** chromosom = upakowana forma DNA z białkami; gen = odcinek DNA z informacją o produkcie.
            
- **Analogia:** chromosom = książka kucharska; gen = pojedynczy przepis.
          
        
        **Dlaczego:** Chromosom zawiera *tysiące* genów. Gen jest częścią chromosomu, nie odwrotnie (L011, L012).
      

      
        D12.
        

**Odpowiedź (szkic):** Gen hemofilii leży na chromosomie X. Mężczyzna ma tylko jeden X — recesywny allel nie ma pary na Y i ujawnia się. Kobieta ma dwa X, więc recesywny allel ujawnia się tylko przy XᵃXᵃ.
        **Dlaczego:** To dziedziczenie *sprzężone z X*. U mężczyzny każdy allel na X ujawnia się, bo nie ma drugiego X do „maskowania". U kobiet chora musi mieć dwa wadliwe X (rzadkie) — częściej jest *nosicielką* (L018).
        Błędne: „ojciec chory → syn chory". Syn dostaje od ojca Y (nie X), więc cecha X-linked nie przechodzi z ojca na syna w ten sposób.
      

      
        D13.
        

**Odpowiedź:** Mutacja = trwała zmiana w materiale genetycznym (najczęściej w sekwencji DNA albo w liczbie lub budowie chromosomów). Mutagen = czynnik, który zwiększa częstość mutacji (np. UV, promieniowanie X, dym tytoniowy).
        **Dlaczego:** Mutagen to *przyczyna*, mutacja to *skutek*. Mutagen nie tworzy mutacji z niczego — zwiększa *ryzyko* powstania zmiany w DNA (L020).
      

      
        D14.
        

**Odpowiedź:** Nie zawsze. Mają ten sam *genom jądrowy* na starcie, ale z czasem:
          
            
- środowisko (odżywianie, choroby, aktywność) kształtuje fenotyp,
            
- mutacje somatyczne mogą się gromadzić (drobne różnice w DNA),
            
- zmiany epigenetyczne (metylacja DNA, modyfikacje histonów) mogą różnić ekspresję genów.
          
        
        **Dlaczego:** Fenotyp = geny + środowisko + rozwój. Nawet identyczny start nie gwarantuje identycznego końca (L010).
      

    
  

  

#### E. Napraw odpowiedź typowy błąd
  
    

Uczeń napisał: *„Człowiek ma 23 chromosomy, ponieważ od mamy dostaje 23, a od taty kolejne 23."*
    
      
- Wskaż, co w tej odpowiedzi jest prawdziwe.
      
- Wskaż błąd.
      
- Napisz poprawną wersję odpowiedzi w jednym lub dwóch zdaniach.
    

    Pokaż pełne rozwiązanie

      
        E1. Co jest prawdziwe?
        

**Prawdziwe:** dziecko otrzymuje po jednym zestawie chromosomów od każdego z rodziców — od mamy (przez komórkę jajową) 23 chromosomy i od taty (przez plemnik) 23 chromosomy.
        **Dlaczego:** To poprawne stwierdzenie o pochodzeniu chromosomów. Każdy rodzic wnosi jeden zestaw haploidalny (n = 23).
      

      
        E2. Co jest błędne?
        

**Błąd:** stwierdzenie, że *człowiek ma tylko 23 chromosomy*. Pomylił liczbę chromosomów w *gamecie* (n = 23) z liczbą chromosomów w *komórce ciała* (2n = 46).
        **Dlaczego:** Komórka ciała człowieka jest diploidalna — ma 46 chromosomów (23 pary), bo dostaje po jednym zestawie od każdego rodzica. 23 to liczba chromosomów w jednej gamecie, nie w komórce ciała.
        Nazwa pułapki: **mylenie liczby haploidalnej (n) z diploidalną (2n)**.
      

      
        E3. Poprawna wersja odpowiedzi
        

**Odpowiedź:** Typowa komórka ciała człowieka ma 46 chromosomów, czyli 23 pary. Dziecko otrzymuje po jednym zestawie chromosomów od każdego z rodziców: 23 chromosomy od matki i 23 od ojca, razem 46 (2n). Gamety mają po 23 chromosomy (n).
        Komórka ciała człowieka zawiera 46 chromosomów (23 pary) — po jednym chromosomie w każdej parze od matki i po jednym od ojca. Gamety (plemnik i komórka jajowa) mają po 23 chromosomy; po zapłodnieniu 23 + 23 = 46 w zygocie.
      

    
  

  10. Test końcowy L003 10 pytań · sprawdzian postępu

  
    Nie rozwiązuj testu od razu po pierwszej diagnozie
    

Najpierw sprawdź klucz (sekcja 4), popraw błędy, wykonaj ćwiczenia (sekcja 9), przejrzyj fiszki (sekcja 12), a dopiero potem wykonaj ten test jako **sprawdzian postępu**.
  

  
    
      
- Gdzie jest DNA w typowej komórce zwierzęcej?
      
- Ile chromosomów ma komórka skóry człowieka?
      
- Mitoza: 2n → ?
      
- Mejoza służy m.in. do…
      
- Allel to…
      
- Fenotyp to…
      
- XX / XY — przypisz płeć (w typowym modelu szkolnym).
      
- Replikacja dzieje się **przed** czy **zamiast** podziału?
      
- Czy każda mutacja jest szkodliwa?
      
- Wskaż jedną lekcję, do której wrócisz po swoim wyniku.
    

    Pokaż pełny klucz z uzasadnieniami

      
        1. Gdzie jest DNA w typowej komórce zwierzęcej?
        

**Odpowiedź:** W jądrze komórkowym (większość) + niewielka ilość w mitochondriach.
        **Dlaczego:** Jądro zawiera większość DNA. Mitochondria mają własny, kolisty DNA (pozostałość po endosymbiozie).
      

      
        2. Ile chromosomów ma komórka skóry człowieka?
        

**Odpowiedź:** 46 (2n).
        **Dlaczego:** Komórki ciała (skóra, mięśnie, nerwy) są diploidalne — mają dwa zestawy chromosomów (23 pary).
      

      
        3. Mitoza: 2n → ?
        

**Odpowiedź:** 2n (zachowuje liczbę zestawów).
        **Dlaczego:** Chromatydy siostrzane rozchodzą się do dwóch biegunów, więc każda komórka potomna dostaje pełny zestaw (L014).
      

      
        4. Mejoza służy m.in. do…
        

**Odpowiedź:** Powstawania gamet (redukcji 2n → n) i generowania zmienności genetycznej.
        **Dlaczego:** Mejoza redukuje liczbę chromosomów o połowę (przed zapłodnieniem) i miesza allele (rekombinacja chromosomowa + niezależna segregacja) — L015.
      

      
        5. Allel to…
        

**Odpowiedź:** Wersja genu (np. A lub a).
        **Dlaczego:** Ten sam gen może mieć różne wersje. Każdy osobnik ma dwa allele tego samego genu — po jednym od każdego rodzica.
      

      
        6. Fenotyp to…
        

**Odpowiedź:** Zespół obserwowalnych cech organizmu — to, co widać / mierzymy.
        **Dlaczego:** Fenotyp = geny + środowisko + rozwój. Odróżniamy go od genotypu (zestaw alleli — litery).
      

      
        7. XX / XY — przypisz płeć.
        

**Odpowiedź:** XX — kobieta; XY — mężczyzna (w typowym modelu szkolnym).
        **Dlaczego:** Para chromosomów płci. Kobieta ma dwa X, mężczyzna X i Y. O płci dziecka decyduje plemnik (X albo Y). W biologii istnieją rzadsze warianty, ale nie wchodzą one w zakres tej lekcji.
      

      
        8. Replikacja dzieje się przed czy zamiast podziału?
        

**Odpowiedź:** **Przed** podziałem (w fazie S).
        **Dlaczego:** Bez skopiowanego DNA obie komórki potomne nie dostałyby pełnej informacji. Replikacja poprzedza mitozę i mejozę (L013).
        Błędne: „w trakcie podziału". Replikacja to oddzielny etap — faza S interfazy.
      

      
        9. Czy każda mutacja jest szkodliwa?
        

**Odpowiedź:** **Nie** — mutacja może być szkodliwa, neutralna lub (rzadko) korzystna.
        **Dlaczego:** Kod genetyczny jest *zdegenerowany* (kilka kodonów → ten sam aminokwas), więc zmiana jednej zasady nie zawsze zmienia białko. Poza tym mutacje w miejscach niekodujących często nie mają istotnego skutku (L011, L020).
      

      
        10. Wskaż lekcję do powtórki po swoim wyniku.
        

**Odpowiedź:** Zależy od wyniku — patrz tabela interpretacji w sekcji 5.
        **Przykłady:**
          
            
- Luki w „gdzie jest DNA" → L001 + L011.
            
- Luki w gametach / płci → L002 + L015 + L018.
            
- Luki w chromosomach → L012.
            
- Luki w allelach → L017.
            
- Luki w mutacjach → L020.
          
        
        Nie ma „jednej poprawnej". Ważne, żeby odpowiedź była *konkretna* — wskazująca jedną lekcję, nie ogólnik „powtórzę genetykę".
      

    
  

  11. Mapa startowa + co dalej

  

#### Mapa startowa — gdzie jesteś
  
    L001 komórka (jądro = większość DNA)
L002 krew → L019 · gamety → L015
         ↓
     L003 DIAGNOZA  ← JESTEŚ TU
         ↓
     L010 cechy i zmienność
     ├── L011 DNA
     ├── L012 chromosom
     ├── L013 replikacja
     ├── L014 mitoza · L015 mejoza
     ├── L017–L019 dziedziczenie / płeć / ABO
     └── L020 mutacje
  

  

#### Co dalej?
  
    

**Następna lekcja:** L010 — czym jest genetyka (cechy dziedziczne vs nabyte).
    

Potem: **L011 (DNA), L012 (chromosom), L013 (replikacja)**.
    

**Most wstecz:** L001 (jądro) + L002 (krew, gamety) → L003 (diagnoza) → L010 → L011.
  

  
    1Diagnoza rdzeniowa
    2Autodiagnoza
    3Tabela „Moje luki"
    4Ćwiczenia + fiszki
    5Test + powtórka za tydzień
  

  12. Fiszki startowe POWTÓRKA

  

Fiszki w formacie **pytanie → odpowiedź**. Dodatkowo kilka fiszek *odwróconych* (oznaczonych odwrócona) — zamiast definicji podajesz pojęcie. To ćwiczy aktywne przypominanie.

  
    
      Gdzie znajduje się większość DNA w typowej komórce zwierzęcej?
      **W jądrze komórkowym; niewielka ilość DNA jest też w mitochondriach.**
      start
    
    
      Ile chromosomów ma typowa komórka ciała człowieka?
      **46 chromosomów, czyli 23 pary.**
      podstawa
    
    
      Ile chromosomów ma gameta człowieka?
      **23 chromosomy (n).**
      podstawa
    
    
      Co to allel?
      **Jedna z możliwych wersji genu (np. A lub a).**
      podstawa
    
    
      Co to genotyp?
      **Zestaw alleli organizmu dotyczących danej cechy lub wielu cech (np. AA, Aa, aa).**
      podstawa
    
    
      Co to fenotyp?
      **Obserwowalne cechy organizmu (np. grupa krwi, kolor oczu, wzrost), zależne od genów i często od środowiska.**
      podstawa
    
    
      Czym różni się mitoza od mejozy?
      **Mitoza zachowuje liczbę chromosomów (2n → 2n). Mejoza zmniejsza ją o połowę (2n → n) podczas tworzenia gamet.**
      podstawa
    
    
      Co to replikacja?
      **Kopiowanie DNA przed podziałem komórki (faza S). Semikonserwatywna.**
      start
    
    
      Co to mutacja?
      **Trwała zmiana w materiale genetycznym — najczęściej w sekwencji DNA albo w liczbie lub budowie chromosomów.**
      podstawa
    
    
      Kto decyduje o płci dziecka w typowym modelu szkolnym?
      **Plemnik — wnosi X (dziewczynka) albo Y (chłopiec). Komórka jajowa zawsze X.**
      podstawa
    
    
      Czy każda mutacja jest szkodliwa?
      **Nie — mutacja może być szkodliwa, neutralna lub (rzadko) korzystna.**
      pułapka
    
    
      Dlaczego rodzeństwo nie jest identyczne?
      **Rekombinacja chromosomowa + niezależna segregacja + losowe zapłodnienie + środowisko.**
      ambitny
    
    
      Wersja genu — jak nazywa się to pojęcie?
      **Allel.**
      odwrócona
    
    
      Zestaw obserwowalnych cech organizmu zależnych od genów i środowiska — jak nazywa się to pojęcie?
      **Fenotyp.**
      odwrócona
    
    
      Proces kopiowania DNA przed podziałem komórki — jak nazywa się to pojęcie?
      **Replikacja.**
      odwrócona
    
  

  13. Moje luki po L003 rubryka ucznia

  

Uzupełnij tę tabelę po diagnozie i po sprawdzeniu klucza. Wpisz własne oznaczenia (**✓** — umiem wyjaśnić; **?** — kojarzę, ale nie potrafię wyjaśnić; **✗** — nie wiem; **!** — typowa pułapka) i zaplanuj powtórki.

  
    

      
        
          
          
          
          
          
        
      
      
        
          
          
          
          
          
        
        
          
          
          
          
          
        
        
          
          
          
          
          
        
        
          
          
          
          
          
        
        
          
          
          
          
          
        
        
          
          
          
          
          
        
        
          
          
          
          
          
        
      
    | Pojęcie / pytanie | Mój status (✓ / ? / ✗ / !) | Lekcja do powtórki | Data pierwszej powtórki | Czy umiem już wyjaśnić? |
| --- | --- | --- | --- | --- |
| DNA i miejsce występowania | ✓?✗! | L001 / L011 |  |  |
| 46 i 23 chromosomy | ✓?✗! | L012 / L015 |  |  |
| Mitoza i mejoza | ✓?✗! | L014 / L015 |  |  |
| Gen, allel, genotyp, fenotyp | ✓?✗! | L017 |  |  |
| XX i XY | ✓?✗! | L018 |  |  |
| Mutacje | ✓?✗! | L020 |  |  |
| Inne (wpisz własne): | ✓?✗! |  |  |  |

  

  
    Uwaga — rubryka działa tylko wtedy, gdy ją naprawdę wypełnisz
    

Wpisanie „✓" bez umiejętności wyjaśnienia to samooszukiwanie. Lepiej oznaczyć „?" i szczerze zapisać lukę — dzięki temu powtórka będzie miała sens.
  

  14. Checklista
  
    
      
- ☐ Zrobiłem pytania rdzeniowe 1–5 bez podglądania.
      
- ☐ Zrobiłem pytania 6–8 (dodatkowe) albo świadomie odłożyłem.
      
- ☐ Zrobiłem pytania 9–14 (ambitne) albo świadomie odłożyłem.
      
- ☐ Policzyłem wynik i odczytałem tabelę interpretacji.
      
- ☐ Wypełniłem tabelę autodiagnozy (✓ / ? / ✗ / !).
      
- ☐ Zapisałem luki w tabeli „Moje luki po L003".
      
- ☐ Wiem, że 23 ≠ 46 (pary vs sztuki).
      
- ☐ Wiem, że mitoza ≠ mejoza.
      
- ☐ Wiem, gdzie jest DNA (i wyjątek erytrocytu).
      
- ☐ Fiszki startowe przerobione co najmniej raz.
      
- ☐ Data powtórki diagnozy: ________
    
  

  System powtórek — diagnoza
  
    

      
      
        
        
        
        
        
        
      
    | Kiedy | Co |
| --- | --- |
| Ten sam dzień | fiszki startowe (sekcja 12) |
| +2 dni | pytania, które były błędne |
| +7 dni | pełna diagnoza jeszcze raz (inne sformułowania z sekcji 9) |
| Po L013 | wróć do pytań o DNA / 46 / replikację |
| Po L017 | allel, genotyp, fenotyp |
| Po L021 | cała diagnoza jako „czy blok genetyki siedzi" |

  

  
    Zasada 3 pytań po powtórce
    
      
- Co już umiem?
      
- Co jeszcze mylę?
      
- Co mnie zaskoczyło?
    
  

  15. Słownik startowy
  
    

      
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    | Termin | Definicja precyzyjna |
| --- | --- |
| DNA | kwas deoksyrybonukleinowy — nośnik informacji genetycznej; u zwierząt większość w jądrze, niewielka część w mitochondriach |
| Gen | odcinek DNA zawierający informację o produkcie (białku lub RNA); jedna cecha często zależy od wielu genów i środowiska |
| Chromosom | upakowana forma DNA + białka |
| Kariotyp | zestaw chromosomów komórki |
| 2n | diploidalna liczba chromosomów (46 u człowieka) |
| n | haploidalna liczba chromosomów (23 u człowieka) |
| Replikacja | kopiowanie DNA przed podziałem; semikonserwatywna |
| Mitoza | podział zachowawczy (2n → 2n) |
| Mejoza | podział redukcyjny (2n → n) |
| Allel | jedna z możliwych wersji genu |
| Genotyp | zestaw alleli organizmu |
| Fenotyp | zespół obserwowalnych cech organizmu (zależy od genotypu i często od środowiska) |
| Homozygota | AA lub aa |
| Heterozygota | Aa |
| Mutacja | trwała zmiana w materiale genetycznym (w sekwencji DNA albo w liczbie/budowie chromosomów) |
| Mutagen | czynnik zwiększający częstość mutacji (np. UV, promieniowanie X, chemikalia) |
| Gameta | komórka rozrodcza (n = 23 u człowieka) |
| Zygota | komórka po połączeniu gamet (2n = 46 u człowieka) |

  

  Status lekcji
  
    Wersja 6.0 (2026-09-13) — pełna korekta z recenzji
    

**Nowe w tej wersji:**
    
      
- Dopisek, że nieznajomość pojęć z kolejnych lekcji (allel, replikacja, mutacja) jest normalnym wynikiem diagnozy.
      
- Poprawiony kompas — wyraźnie oddzielono materiał przypomnieniowy (L001–L002) od materiału do zdiagnozowania (L010–L021).
      
- Pytanie 4 rozbite na 4a / 4b / 4c (allel / genotyp / fenotyp).
      
- Pytanie 5 (XX/XY) ostrożniejsze — „w typowym modelu szkolnym".
      
- Definicje: DNA (jądro + mitochondria), gen (produkt, nie zawsze jedna cecha), fenotyp (zestaw cech, geny + środowisko), mutacja (trwała zmiana w materiale genetycznym).
      
- Klinika rozbudowana z K1–K7 do **K1–K13** (nowe: K8 — jeden gen ≠ jedna cecha; K9 — dominacja ≠ częstość; K10 — dziedziczenie ≠ uśrednianie; K11 — gameta ≠ połowa człowieka; K12 — replikacja ≠ podział; K13 — chromosom ≠ zawsze X).
      
- Czwarta warstwa klucza — **„Odpowiedź na ocenę bardzo dobrą"** (pełny wzór odpowiedzi pisemnej).
      
- Tabela autodiagnozy (✓ / ? / ✗ / !) i dopisek, że wynik liczbowy nie wystarcza — liczy się rozumienie.
      
- Nowe ćwiczenia: **C. Wybierz i uzasadnij** (3 zadania typu sprawdzianowego) + **E. Napraw odpowiedź** (szukanie typowego błędu).
      
- Fiszki w formacie pytanie → odpowiedź + **fiszki odwrócone** (ćwiczą aktywne przypominanie).
      
- Nowa sekcja **„Moje luki po L003"** — gotowa rubryka ucznia z polami do wypełnienia.
      
- Ujednolicone zasady oznaczeń w kartach (START / UWAGA / DO ZAPAMIĘTANIA).
    
    

Zachowano całą treść v3.7–v5.1: pytania rdzeniowe 1–5, dodatkowe 6–8, ambitne 9–14, interpretację wyniku, Klinikę K1–K7, ściągę startową, mini-diagnozę, ćwiczenia A/B/D, test końcowy, checklistę, system powtórek i słownik. Zgodne z regułą HTML 2026-09-13: bez paska postępu, bez localStorage, odpowiedzi w `<details>` z dostępem z klawiatury.
  

  

**BIOLOGIA L003 v6.0** · Diagnoza startowa genetyki · pełne odpowiedzi + autodiagnoza + rubryka luk · 2026
  

To nie jest ocena — to mapa twoich luk.

<details><summary>Wcześniejsza warstwa MD L003 (v3.7–v3.9.1, zachowana)</summary>

# L003 — Diagnoza startowa genetyki


**Typ:** START / DIAGNOZA

## 1. Cel diagnozy
Diagnoza ma odpowiedzieć na pytanie: **co już rozumiem, a czego jeszcze nie rozumiem?** Nie jest pierwszą lekcją o DNA i nie zastępuje L010 ani L011.

## 2. Zasada pracy
Najpierw odpowiedz bez zaglądania do materiału. Potem sprawdź odpowiedzi i zaznacz tylko obszary, które rzeczywiście wymagają nauki.

## 3. Diagnoza rdzeniowa
1. Gdzie w typowej komórce eukariotycznej znajduje się większość DNA?
2. Czym różni się gen od chromosomu?
3. Co oznacza zapis `2n = 46`?
4. Czym różni się mitoza od mejozy?
5. Co oznaczają pojęcia: allel, genotyp, fenotyp?
6. Dlaczego rodzeństwo może być podobne, ale nie identyczne?
7. Co to mutacja? Czy każda mutacja powoduje chorobę?
8. Co oznaczają symbole XX i XY w szkolnym modelu dziedziczenia płci?

## 4. Klucz odpowiedzi
1. Głównie w jądrze; DNA występuje też m.in. w mitochondriach.
2. Gen to odcinek DNA zawierający informację genetyczną; chromosom to większa struktura organizująca DNA wraz z białkami.
3. Organizm/komórka diploidalna ma dwa zestawy chromosomów; u człowieka komórka somatyczna ma 46 chromosomów.
4. Mitoza służy m.in. wzrostowi i odnowie tkanek; mejoza prowadzi do powstania haploidalnych gamet i zwiększa różnorodność.
5. Allel — wersja genu; genotyp — zestaw informacji/alleli w odniesieniu do badanych genów; fenotyp — obserwowalne cechy wynikające ze współdziałania genotypu i środowiska.
6. Ponieważ potomstwo otrzymuje kombinacje alleli od rodziców, a różnorodność zwiększają m.in. procesy zachodzące podczas mejozy i losowe łączenie gamet.
7. Mutacja to zmiana materiału genetycznego; może być neutralna, szkodliwa albo w określonych sytuacjach korzystna.
8. XX/XY to uproszczony szkolny model determinacji płci u człowieka; nie należy traktować go jako pełnego opisu całej biologii płci.

## 5. Mapa wyniku
| Jeśli problemem jest… | Zacznij od… |
|---|---|
| komórka/jądro | L001 |
| cechy i zmienność | L010 |
| DNA/nukleotyd/helisa | L011 |
| chromosom/chromatyda | L012 |
| kopiowanie DNA | L013 |
| mitoza | L014 |
| mejoza/gamety | L015 |
| krzyżówki/genotyp/fenotyp | L017 |
| płeć i X | L018 |
| ABO/Rh | L019 |
| mutacje | L020 |

## 6. Test po nauce
Po przejściu bloku L010–L020 wróć do pytań 1–8. Nie porównuj tylko liczby punktów: sprawdź, czy potrafisz **wyjaśnić**, a nie tylko nazwać pojęcie.

## 7. Bank materiału diagnostycznego z wcześniejszych wersji
Poniżej zachowany zostaje wcześniejszy, rozbudowany materiał L003. Nie jest on już obowiązkową częścią diagnozy startowej; może być używany jako **bank pytań, klinika błędów, powtórka i materiał do testu przekrojowego L021**.

---


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Diagnoza jako mapa.

`[BIO: DIAGRAM type=FLOW]`
`pytanie → odpowiedź → luka → lekcja`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** diagnoza nie jest wykładem.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

> Uzupełnienie MASTER jest **na końcu bloku** (sekcje 16–23). Treść v3.7 bez skreśleń.

**Typ:** START / [PRZYPOMNIENIE] → brama do genetyki  
**Warstwy:** diagnoza (nie pełna lekcja podręcznikowa)  
**Poprzednia:** L002 · **Następna:** L010  

### Rola w roku
Nie uczy nowego materiału — **mierzy**, co już jest z L001–L002 i z życia.  
Wynik → tempo: szybko przez L010 / uważnie / od zera przy L011.

**Kompas:** L001 (komórka, jądro) · L002 (człowiek — wybrane)

---

## JAK PRACOWAĆ

Odpowiedz najpierw sam, potem sprawdź. Błąd teraz = zysk później.  
Diagnoza nie jest oceną — jest mapą twoich luk.

**80/20:** 5 pytań poniżej mówi, od czego zacząć (L010 szybko / uważnie / od zera).

---

## WARSTWA WIZUALNA

```markdown
[BIO: DIAGRAM type=FLOW]
START GENETYKI
├── L001 — komórka (jądro)
├── L010 — czym jest genetyka
├── L011 — DNA (budowa, pary)
├── L012 — chromosom, kariotyp
└── L013 — replikacja
[/BIO: DIAGRAM]
```

---

## 1. CEL DIAGNOZY

- ustalić, co już wiesz o DNA, chromosomach, podziałach i dziedziczeniu,
- wskazać, które lekcje L010–L021 czytać szybko, a które uważnie,
- oswoić terminologię przed pierwszym blokiem genetyki.

---

## 2. PYTANIA DIAGNOSTYCZNE (5–8 min)

1. Co to DNA i gdzie jest w komórce zwierzęcej?
2. Ile chromosomów ma komórka ciała człowieka?
3. Czym różni się mitoza od mejozy (jednym zdaniem)?
4. Co to allel / genotyp / fenotyp?
5. XX i XY — kto jest kim?

**Pytania dodatkowe (dla ambitnych):**

6. Co to replikacja i po co jest?
7. Co oznacza zapis 2n = 46?
8. Dlaczego rodzeństwo nie jest identyczne?

---

## 3. ODPOWIEDZI (szkic)

1. DNA — kwas deoksyrybonukleinowy, nośnik informacji genetycznej; głównie w jądrze.
2. 46 (23 pary).
3. Mitoza: 2n → 2n (wzrost, regeneracja); mejoza: 2n → n (gamety).
4. Allel — wersja genu; genotyp — zestaw alleli; fenotyp — ujawniona cecha.
5. XX — kobieta; XY — mężczyzna.
6. Replikacja — kopiowanie DNA przed podziałem.
7. Diploidalna liczba chromosomów — 46 w komórce ciała.
8. Różne kombinacje alleli + crossing-over + losowe łączenie gamet.

---

## 4. INTERPRETACJA

| Wynik | Co dalej |
|-------|----------|
| 8/8 | L010 szybko; skup się na L013, L017, L020 |
| 4–7/8 | L010–L013 uważnie; wróć do L001 (jądro) |
| 0–3/8 | L001 + L010 od zera; fiszki po każdej lekcji |

---

## 5. FISZKI STARTOWE

| Pytanie | Odpowiedź |
|---------|-----------|
| Gdzie DNA w komórce zwierzęcej? | Jądro (głównie) |
| Ile chromosomów w komórce ciała? | 46 |
| Mitoza vs mejoza? | 2n→2n vs 2n→n |
| XX / XY? | Kobieta / mężczyzna |
| Replikacja? | Kopiowanie DNA |

---

## 6. MAPA STARTOWA (mosty z L001–L002)

```
L001 komórka (jądro = DNA) ──┐
L002 krew → L019 · gamety → L015
         └──► L003 DIAGNOZA ──► L010 cechy
                              ├── L011 DNA
                              ├── L012 chromosom
                              ├── L013 replikacja
                              ├── L014 mitoza · L015 mejoza
                              └── L017–L020 dziedziczenie / mutacje
```

**Interpretacja wyniku (skrót):**  
- silne odpowiedzi o jądrze/DNA → można iść szybciej przez L011–L013  
- luki w „gdzie jest DNA” → wróć do L001 przed L011  
- luki w gametach/płci → uważnie L015 i L018  
- luki w grupach krwi → L019 po L017  

---

## 7. CO DALEJ

**L010** — czym jest genetyka (cechy dziedziczne vs nabyte).  
Potem L011 (DNA), L012 (chromosom), L013 (replikacja).

---

## 8. JAK PRACOWAĆ Z DIAGNOZĄ

1. **Odpowiedz na wszystkie pytania** — bez zaglądania do odpowiedzi.
2. **Sprawdź się** — policz punkty.
3. **Zapisz, co pomyliłeś** — to twoja lista do powtórki.
4. **Wróć do lekcji** — tej, której dotyczy błąd.
5. **Powtórz diagnozę za tydzień** — zobaczysz postęp.

---

## 9. POŁĄCZENIA

- **L001** — komórka (jądro).
- **L002** — człowiek (krew, rozrodczy).
- **L010** — start genetyki.

---

## 10. ZADANIA Z ŻYCIA

1. Dlaczego lekarz pyta o choroby w rodzinie?
2. Dlaczego rodzeństwo może mieć różne grupy krwi?

---

## 11. DODATKOWE PYTANIA DIAGNOSTYCZNE (v3.7)

**Dla uczniów ambitnych:**

9. Co to chromatyda i centromer?
10. Czym różni się gen od chromosomu?
11. Co to allel dominujący i recesywny?
12. Dlaczego hemofilia częściej dotyczy mężczyzn?
13. Co to mutacja i mutagen?
14. Czy każda mutacja jest szkodliwa?

**Odpowiedzi:**
9. Chromatyda — kopia chromosomu po replikacji; centromer — miejsce połączenia.
10. Chromosom to upakowana forma DNA; gen to odcinek DNA.
11. Dominujący ujawnia się w heterozygocie; recesywny tylko w homozygocie.
12. Mężczyzna ma tylko jeden X.
13. Mutacja = zmiana w DNA; mutagen = czynnik ją wywołujący.
14. Nie — bywa neutralna, korzystna lub szkodliwa.

---

## 12. FORMAT DIAGNOZY

**Czas:** 10–15 minut.  
**Zasady:** bez zaglądania do podręcznika; każda odpowiedź na piśmie; szczerze.

**Po diagnozie:**
- wróć do lekcji wskazanych w interpretacji,
- zrób fiszki z błędnych odpowiedzi,
- powtórz diagnozę za tydzień.

---

## 13. JAK SIĘ UCZYĆ PO DIAGNOZIE?

1. Zapisz swoje 3 największe luki.
2. Zaplanuj powtórki (S8).
3. Zacznij od L010.
4. Wracaj do diagnozy po każdym bloku.

---

## 14. POŁĄCZENIA MIĘDZYPRZEDMIOTOWE

- **Biologia:** komórka, człowiek.
- **Matematyka:** statystyka (wyniki).
- **Etyka:** choroby genetyczne.

---

## 15. ZADANIA Z ŻYCIA CODZIENNEGO

1. Dlaczego lekarz rodzinny pyta o choroby w rodzinie?
2. Jakie znaczenie mają badania genetyczne?


---

## UZUPEŁNIENIE MASTER v3.8 (2026-09-12) — NIC Z v3.7 NIE USUNIĘTO

Poniżej **doklejona** warstwa MASTER. Sekcje 1–15 powyżej zostają w mocy.
Diagnoza nadal nie zastępuje L010–L021 — tylko mapuje luki.

### Warstwy (stałe w kursie)

| Warstwa | Tu w L003 | Kolor w HTML |
|---------|-----------|--------------|
| [PRZYPOMNIENIE] / basic | pytania 1–5, fiszki startowe | zielony |
| [TRENING] | interpretacja wyniku, powtórka za tydzień | niebieski |
| [PUŁAPKA] | klinika typowych pomyłek na starcie | czerwony |
| [AMBITNY] | pytania 6–14, mosty do L017–L020 | fioletowy |
| [KONKURS] | opcjonalnie po L090 — nie teraz | fiolet / extra |

---

## 16. ŚCIĄGA STARTOWA (zanim otworzysz L011)

| Pojęcie | Jedno zdanie | Gdzie wrócisz |
|---------|--------------|---------------|
| DNA | kwas deoksyrybonukleinowy — nośnik informacji; u zwierząt głównie w jądrze | L011 |
| Gen | odcinek DNA odpowiadający zwykle za jedną informację / białko (uproszczenie szkolne) | L010, L011 |
| Chromosom | upakowana forma DNA + białka | L012 |
| Kariotyp | zestaw chromosomów komórki | L012 |
| 2n = 46 | komórka ciała człowieka: 46 chromosomów, 23 pary | L012, L014 |
| n = 23 | gameta (plemnik, komórka jajowa) | L015 |
| Replikacja | kopiowanie DNA przed podziałem; semikonserwatywna | L013 |
| Mitoza | 2n → 2n; wzrost, regeneracja | L014 |
| Mejoza | 2n → n; gamety, zmienność | L015 |
| Allel | wersja genu | L017 |
| Genotyp / fenotyp | zapis alleli / cecha ujawniona | L017 |
| XX / XY | kobieta / mężczyzna (ssaki, człowiek) | L018 |
| Mutacja | zmiana w DNA; bywa szkodliwa, neutralna, korzystna | L020 |

**80/20 na start:** jądro → DNA → 46 chromosomów → mitoza ≠ mejoza → allel.

---

## 17. KLINIKA 2.0 — błędy na progu genetyki

Format: Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka.

**K1.** „DNA jest tylko w krwi.”  
→ DNA jest w jądrze niemal każdej komórki z jądrem (krwinki czerwone dojrzałe człowieka — wyjątek: brak jądra).  
Reguła: lokalizacja DNA = L001 + L011.  
Pułapka: mylenie „badamy DNA z krwi” z „DNA jest tylko we krwi”.

**K2.** „Człowiek ma 23 chromosomy.”  
→ 23 **pary** = 46 w komórce ciała; 23 w gamecie.  
Pułapka: liczba haploidalna vs diploidalna.

**K3.** „Mitoza i mejoza to to samo, bo obie dzielą komórkę.”  
→ Obie to podziały, ale **wynik i cel** inne (2n vs n; ciało vs gamety).  
Pułapka: liczenie „ile komórek powstaje” bez pytania „jaka liczba chromosomów”.

**K4.** „Genotyp to wygląd.”  
→ Wygląd / cecha = **fenotyp**; genotyp = allele.  
Pułapka: „ma niebieskie oczy, więc ma genotyp niebieski” — za krótko.

**K5.** „XY to kobieta, bo Y jak «ona» nie pasuje.”  
→ XX kobieta, XY mężczyzna.  
Pułapka: skojarzenia językowe zamiast faktu.

**K6.** „Każda mutacja powoduje chorobę.”  
→ Nie. Wiele zmian jest cichych / obojętnych.  
Most: L020.

**K7.** „Rodzeństwo musi być identyczne genetycznie, bo ci sami rodzice.”  
→ Ci sami rodzice ≠ te same gamety. Crossing-over + losowy rozdział + losowe zapłodnienie.  
Most: L015, L017.

---

## 18. ĆWICZENIA (A basic / B trening / C ambitne / D otwarte)

Zachowaj odpowiedzi z sekcji 3 i 11. Tu **nowe** zadania — nie zastępują starych pytań.

### A. Podstawa
A1. Podkreśl poprawne: DNA u zwierzęcia jest głównie w (jądrze / wakuoli / ścianie komórkowej).  
A2. Uzupełnij: komórka ciała człowieka ma ___ chromosomów, gameta ma ___.  
A3. Połącz: mitoza — mejoza — replikacja  z  kopiowanie DNA / gamety / wzrost.  
A4. XX czy XY: kto jest kim?  
A5. Allel to: (a) cały chromosom (b) wersja genu (c) białko.

### B. Trening
B1. Dlaczego dojrzałe erytrocyty człowieka są złym przykładem „komórki z DNA w jądrze”?  
B2. Zapisz jednym zdaniem różnicę 2n vs n.  
B3. Rodzeństwo: podaj **dwa** mechanizmy zmienności (bez szczegółów crossing-over).  
B4. Lekarz pyta o choroby w rodzinie. Połącz to z pojęciem *cecha dziedziczna*.  
B5. Ktoś napisał „23 chromosomy w skórze”. Popraw i nazwij pułapkę.

### C. Ambitne
C1. Czym różni się gen od chromosomu (jedno analogią + jedno definicją)?  
C2. Dlaczego hemofilia częściej u mężczyzn? (szkic — pełny model w L018)  
C3. Mutagen vs mutacja — para definicji + jeden przykład czynnika.  
C4. Czy identyczne bliźnięta jednojajowe mają identyczny fenotyp zawsze? Uzasadnij ostrożnie (środowisko).

### D. Problem otwarty
D1. Ułóż 5 pytań, które **Ty** zadałbyś koledze przed L011, innych niż w tej lekcji.  
D2. Zaprojektuj tabelę „moje luki → numer lekcji → data powtórki”.

---

## 19. ODPOWIEDZI DO ĆWICZEŃ 18

**A1** jądro. **A2** 46 i 23. **A3** mitoza–wzrost; mejoza–gamety; replikacja–kopiowanie DNA. **A4** XX kobieta, XY mężczyzna. **A5** (b).

**B1** Brak jądra w dojrzałym erytrocycie ssaka. **B2** 2n diploidalna (ciało), n haploidalna (gameta). **B3** np. różne gamety + losowe zapłodnienie (crossing-over jako trzeci). **B4** część chorób ma składnik dziedziczny — wywiad to mapa ryzyka, nie wyrok. **B5** 46 w skórze (2n); 23 to n.

**C1** Chromosom = „paczka” DNA; gen = odcinek z informacją. **C2** gen na X; mężczyzna ma jeden X — recesywny allel nie ma pary na Y. **C3** mutacja = zmiana DNA; mutagen = czynnik (np. UV, niektóre chemikalia) — szczegóły L020. **C4** nie zawsze: genotyp startowy ten sam, fenotyp kształtuje też środowisko.

**D** — ocena jakości pytań i kompletności tabeli, nie jeden klucz.

---

## 20. TEST KOŃCOWY L003 (10 min, bez podręcznika)

1. Gdzie jest DNA w typowej komórce zwierzęcej?  
2. Ile chromosomów ma komórka skóry człowieka?  
3. Mitoza: 2n → ?  
4. Mejoza służy m.in. do…  
5. Allel to…  
6. Fenotyp to…  
7. XX / XY — przypisz płeć.  
8. Replikacja dzieje się **przed** czy **zamiast** podziału?  
9. Czy każda mutacja jest szkodliwa?  
10. Wskaż jedną lekcję, do której wrócisz po swoim wyniku.

Klucz: 1 jądro  2 46  3 2n  4 powstawania gamet / redukcji  5 wersja genu  6 cecha ujawniona  7 XX kobieta XY mężczyzna  8 przed  9 nie  10 wg tabeli interpretacji.

---

## 21. CHECKLISTA L003

- [ ] Zrobiłem pytania 1–8 (v3.7) bez podglądania.
- [ ] Zrobiłem pytania 9–14 (ambitne) albo świadomie odłożyłem.
- [ ] Policzyłem wynik i odczytałem tabelę interpretacji.
- [ ] Zapisałem 3 luki i numery lekcji.
- [ ] Wiem, że 23 ≠ 46 (pary vs sztuk).
- [ ] Wiem, że mitoza ≠ mejoza.
- [ ] Wiem, gdzie jest DNA (i wyjątek erytrocytu).
- [ ] Fiszki startowe przerobione co najmniej raz.
- [ ] Data powtórki diagnozy: ________

---

## 22. SYSTEM POWTÓREK (diagnoza)

| Kiedy | Co |
|-------|-----|
| Ten sam dzień | fiszki startowe (sekcja 5) |
| +2 dni | pytania, które były błędne |
| +7 dni | pełna diagnoza jeszcze raz (inne sformułowania z cz. 18) |
| Po L013 | wróć do pytań o DNA / 46 / replikację |
| Po L017 | allel, genotyp, fenotyp |
| Po L021 | cała diagnoza jako „czy blok genetyki siedzi” |

---

## 23. STATUS LEKCJI L003

- v3.7 — oryginał (sekcje 1–15) zachowany w całości.
- v3.8 (2026-09-12) — doklejono ściągę, Klinikę 2.0, ćwiczenia A–D, test, checklistę, powtórki.
- Typ nadal: START / diagnoza, nie nowy dział podręcznika.
- Backup przed ulepszeniem: `_backup_md_2026-09-12_przed_ulepszeniami/`.


## KOREKTA I UZUPEŁNIENIE L003 (v3.9.1 — nic nie usunięto)

To **diagnoza**, nie nowy podręcznik. Błąd teraz = mapa luk, nie ocena.

### Jak czytać wynik (próg roboczy)

| Trafienia (z 5 rdzeniowych) | Co robić |
|-----------------------------|----------|
| 0–1 | L001–L002 jeszcze raz, potem L010 wolno |
| 2–3 | L010 uważnie, L011 od nukleotydu |
| 4–5 | L010 szybkim przeglądem, L011 pełną lekcją |

Rdzeń: komórka / jądro=DNA / cecha dziedziczna vs nabyta / ciało 2n vs gameta n / „genetyka to nie tylko oczy rodziców”.

### Mini-diagnoza (klucz)

1. Najmniejsza jednostka życia? **Komórka** (wirus nie).
2. DNA u człowieka (typowa komórka ciała)? **Jądro** (+ extra mtDNA).
3. Blizna po kolanie — dziedziczna? **Nie** (nabyta).
4. Plemnik: 46 czy 23? **23 (n)**.
5. Dwoje rodzeństwa różne, choć ci sami rodzice — czy to „błąd genów”? **Nie**: rekombinacja + środowisko (L010, L015).

### Pułapki diagnozy

- „Umiem grupy krwi” ≠ umiem allel I^A I^B i (L019).
- „Wiem, co to DNA” ≠ umiem A–T / C–G (L011).
- Zgadywanie bez uzasadnienia = luka, nawet przy trafieniu.

### Co dalej

L010 definicje dziedziczenia i zmienności → L011 budowa DNA.

</details>

<!-- ==================== END L003 ==================== -->


<!-- ==================== BEGIN L004 ==================== -->

# L004 — Organizacja budowy organizmu: od komórki do organizmu

## KARTA LEKCJI L004

- Numer: L004
- Tytuł roboczy: Organizacja organizmu (szkic)
- Dział: Komórka / organizm
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L001 · Następna: L005
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: BIOLOGIA_L004_ORGANIZACJA.html (kanon v3.1 + SVG tkanek 2026-09-23)
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Główny obraz:** pionowa/horyzontalna ścieżka `cząsteczka → organellum → komórka → tkanka → narząd → układ narządów → organizm`.
**Interakcja:** kliknięcie poziomu pokazuje jeden przykład i jego funkcję.
**Ważne:** zaznaczyć, że nie każdy organizm ma tkanki, narządy i układy narządów.

## 1. Pytanie przewodnie
Jak z pojedynczej komórki może powstać złożony organizm?

## 2. Podstawa E8
Organizm wielokomórkowy jest zbudowany z komórek, które mogą się specjalizować i współpracować. Komórki o podobnej budowie i funkcji tworzą tkanki, tkanki budują narządy, a narządy mogą współtworzyć układy narządów.

### Schemat
`atom → cząsteczka → organellum → komórka → tkanka → narząd → układ narządów → organizm`

**Uwaga:** atom i cząsteczka nie są poziomami organizacji biologicznej w takim samym sensie jak komórka, tkanka czy narząd; są elementami materii, z których zbudowane są struktury biologiczne.

## 3. Specjalizacja komórek
| Komórka | Przystosowanie | Główna funkcja |
|---|---|---|
| neuron | rozgałęzione wypustki | przewodzenie informacji |
| komórka mięśniowa | wyspecjalizowane białka kurczliwe | skurcz |
| erytrocyt ssaka | kształt i brak jądra w dojrzałej komórce | transport tlenu |
| włośnik korzeniowy | duża powierzchnia kontaktu z glebą | pobieranie wody i soli mineralnych |
| komórka szparkowa | możliwość zmiany kształtu | regulacja wymiany gazowej |

## 4. Pułapka
**Nieprawidłowe:** „Wszystkie komórki organizmu mają taką samą budowę.”
**Poprawne:** Komórki mają wspólne podstawowe cechy, ale mogą bardzo różnić się budową i funkcją.

## 5. Zadanie
Wyjaśnij, dlaczego neuron i komórka mięśniowa nie mają identycznego kształtu.

### Odpowiedź
Ich budowa jest związana z funkcją: neuron musi odbierać i przekazywać informacje, a komórka mięśniowa ma być zdolna do skurczu.

## 6. MINI-CHECK
1. Co jest podstawową jednostką budowy organizmu?
2. Co powstaje ze współpracujących komórek podobnego typu?
3. Czy bakteria ma tkanki?
4. Dlaczego komórki mogą mieć różne kształty?
5. Podaj przykład komórki wyspecjalizowanej.

## 7. Odpowiedzi
1. Komórka.
2. Tkanka — w organizmach, w których występują tkanki.
3. Nie, bakteria jest organizmem jednokomórkowym.
4. Ich budowa jest związana m.in. z funkcją i środowiskiem.
5. Np. neuron, komórka mięśniowa, erytrocyt, włośnik korzeniowy.

## 8. Fiszki
- **Komórka:** podstawowa jednostka budowy i funkcjonowania organizmów.
- **Tkanka:** zespół komórek o podobnej budowie i funkcji, współpracujących ze sobą.
- **Specjalizacja:** przystosowanie komórki do określonej funkcji.

---

<!-- ==================== END L004 ==================== -->


<!-- ==================== BEGIN L005 ==================== -->

# L005 — Błona komórkowa i transport substancji

## KARTA LEKCJI L005

- Numer: L005
- Tytuł roboczy: Błona i transport (szkic)
- Dział: Komórka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L004 · Następna: L006
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Główny obraz:** przekrój przez błonę z zaznaczonym kierunkiem ruchu cząsteczek.
**Animacja:** dyfuzja, osmoza i transport wymagający energii jako trzy osobne tryby.
**Pułapka wizualna:** błona ≠ szczelna ściana.

## 1. Problem na początek
Jak komórka może pobierać potrzebne substancje, skoro jej wnętrze jest oddzielone od środowiska?

## 2. Podstawa E8
Błona komórkowa oddziela wnętrze komórki od środowiska, ale nie jest szczelną ścianą. Jest selektywnie przepuszczalna: niektóre substancje przechodzą łatwiej, inne trudniej.

## 3. Dyfuzja
Dyfuzja to samorzutne przemieszczanie się cząsteczek z obszaru o większym ich stężeniu do obszaru o mniejszym stężeniu.

**Ważne:** dyfuzja nie wymaga bezpośredniego dostarczania ATP do samego ruchu cząsteczek.

## 4. Osmoza
Osmoza to ruch wody przez błonę selektywnie przepuszczalną w odpowiedzi na różnicę stężenia substancji rozpuszczonych.

### Konsekwencja
- komórka roślinna pobierająca wodę może zwiększać turgor;
- silna utrata wody może prowadzić do więdnięcia rośliny;
- komórki zwierzęce nie mają ściany komórkowej, dlatego nadmierny napływ wody może być dla nich szczególnie niebezpieczny.

## 5. Transport wymagający energii
Niektóre substancje są przemieszczane wbrew ich gradientowi stężeń. Taki transport może wymagać energii i wyspecjalizowanych białek błonowych.

## 6. Pułapki
- **Dyfuzja ≠ osmoza:** osmoza dotyczy ruchu wody przez błonę.
- **Błona ≠ ściana komórkowa:** błona jest selektywnie przepuszczalna, ściana zapewnia głównie ochronę i sztywność.

## 7. Zadanie problemowe
Roślina zwiędła po kilku dniach bez podlewania. Wyjaśnij zjawisko na poziomie komórkowym.

### Odpowiedź
Komórki utraciły część wody. Zmniejszył się ich turgor, dlatego tkanki rośliny straciły jędrność.

## 8. MINI-CHECK
1. Czy błona jest całkowicie nieprzepuszczalna?
2. Czego dotyczy osmoza?
3. Czy każda forma transportu przez błonę wymaga ATP?
4. Co oznacza selektywna przepuszczalność?
5. Z czym wiąże się turgor?

## 9. Fiszki
- **Dyfuzja:** ruch cząsteczek zgodnie z różnicą stężeń.
- **Osmoza:** ruch wody przez błonę selektywnie przepuszczalną.
- **Turgor:** stan napięcia komórek roślinnych związany m.in. z zawartością wody.

---

<!-- ==================== END L005 ==================== -->


<!-- ==================== BEGIN L006 ==================== -->

# L006 — Fotosynteza: skąd roślina bierze materię organiczną?

## KARTA LEKCJI L006

- Numer: L006
- Tytuł roboczy: Fotosynteza (szkic)
- Dział: Fizjologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L005 · Następna: L007
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Główny diagram:** `CO₂ + H₂O + światło → związki organiczne + O₂` z wejściami po lewej i produktami po prawej.
**Obraz:** chloroplast z zaznaczeniem chlorofilu i kierunków przepływu substancji.
**Doświadczenie:** moczarka lub inne bezpieczne źródło obserwacji wpływu światła na fotosyntezę, z wyraźnym rozdzieleniem obserwacji i wniosku.

## 1. Pytanie przewodnie
Skoro roślina nie „je” liści, to skąd bierze materiał do budowy swojego organizmu?

## 2. Fotosynteza
W fotosyntezie energia światła jest wykorzystywana do wytwarzania związków organicznych z prostszych substancji nieorganicznych. U roślin proces zachodzi w chloroplastach komórek zawierających odpowiedni aparat fotosyntetyczny.

### Schemat sumaryczny
`6CO₂ + 6H₂O —(światło, chlorofil)→ C₆H₁₂O₆ + 6O₂`

To równanie jest zapisem sumarycznym; fotosynteza w rzeczywistości składa się z wielu etapów.

## 3. Co jest czym?
| Element | Rola |
|---|---|
| CO₂ | substrat dostarczający węgla |
| H₂O | substrat |
| światło | źródło energii |
| chlorofil | barwnik pochłaniający energię światła |
| związki organiczne, m.in. glukoza | produkty organiczne |
| O₂ | produkt uwalniany w procesie fotosyntezy tlenowej |

## 4. Nie myl
- **Chloroplast nie jest „fabryką pokarmu” w sensie dosłownym.** Jest miejscem zachodzenia fotosyntezy.
- **Fotosynteza nie zachodzi w każdej komórce rośliny.** Zależy to m.in. od obecności chloroplastów i warunków.
- **Roślina również oddycha komórkowo.** Fotosynteza i oddychanie to różne procesy.

## 5. Doświadczenie — plan pod HTML
**Problem:** Czy dostęp do światła wpływa na intensywność fotosyntezy?
**Hipoteza:** …
**Próba badawcza:** materiał roślinny w określonych warunkach oświetlenia.
**Próba kontrolna:** identyczne warunki poza badanym czynnikiem.
**Obserwacja:** liczba pęcherzyków gazu / inny ustalony wskaźnik, z zaznaczeniem ograniczeń takiej metody.
**Wniosek:** sformułowany wyłącznie na podstawie obserwacji.

## 6. MINI-CHECK
1. Jakie są główne substraty fotosyntezy?
2. Skąd pochodzi energia wykorzystywana w fotosyntezie?
3. Jaki barwnik jest kluczowy u roślin?
4. Co jest produktem organicznym fotosyntezy?
5. Czy roślina oddycha także w nocy?

## 7. Odpowiedzi
1. Dwutlenek węgla i woda.
2. Ze światła.
3. Chlorofil.
4. Związki organiczne, m.in. glukoza.
5. Tak. Oddychanie komórkowe zachodzi niezależnie od tego, czy w danej chwili trwa fotosynteza.

## 8. Fiszki
- **Fotosynteza:** proces wykorzystujący energię światła do syntezy związków organicznych z prostszych substancji.
- **Chlorofil:** barwnik uczestniczący w pochłanianiu energii światła.
- **Chloroplast:** organellum, w którym u roślin zachodzi fotosynteza.

---

<!-- ==================== END L006 ==================== -->


<!-- ==================== BEGIN L007 ==================== -->

# L007 — Oddychanie komórkowe: skąd komórka bierze użyteczną energię?

## KARTA LEKCJI L007

- Numer: L007
- Tytuł roboczy: Oddychanie komórkowe (szkic)
- Dział: Fizjologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L006 · Następna: L008
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Główny diagram porównawczy:** fotosynteza ↔ oddychanie komórkowe.
**Schemat etapów:** `glukoza → glikoliza w cytozolu → dalsze etapy u eukariontów głównie w mitochondriach`.
**Wyróżnienie:** ATP jako nośnik energii, nie „energia sama w sobie”.

## 1. Oddychanie komórkowe
Oddychanie komórkowe to zespół procesów, w których energia zgromadzona w związkach organicznych jest uwalniana i wykorzystywana m.in. do wytwarzania ATP.

### Zapis sumaryczny oddychania tlenowego
`C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia`

## 2. Gdzie zachodzi?
Pierwszy etap — glikoliza — zachodzi w cytozolu. U eukariontów dalsze główne etapy oddychania tlenowego zachodzą w mitochondriach.

Bakterie nie mają mitochondriów, ale mogą prowadzić oddychanie komórkowe z wykorzystaniem struktur błonowych swojej komórki.

## 3. Fotosynteza a oddychanie
| Cecha | Fotosynteza | Oddychanie tlenowe |
|---|---|---|
| główny sens | synteza związków organicznych | uwalnianie energii ze związków organicznych |
| energia światła | wykorzystywana | nie jest potrzebna jako źródło procesu |
| tlen | może być produktem | jest substratem w oddychaniu tlenowym |
| miejsce u roślin | chloroplasty | cytozol + mitochondria |

## 4. Pułapka
„Roślina w dzień oddycha, a w nocy fotosyntetyzuje” — **błędnie**. Fotosynteza wymaga odpowiednich warunków świetlnych, natomiast oddychanie komórkowe zachodzi stale.

## 5. Zadanie
Dlaczego komórka mięśniowa potrzebuje ATP?

### Odpowiedź
ATP dostarcza energii potrzebnej do wielu procesów komórkowych, m.in. pracy białek kurczliwych podczas skurczu.

## 6. MINI-CHECK
1. Co jest głównym źródłem energii chemicznej wykorzystywanej do syntezy ATP w oddychaniu?
2. Gdzie zachodzi glikoliza?
3. Czy bakteria może oddychać bez mitochondrium?
4. Czy rośliny oddychają?
5. Czy fotosynteza i oddychanie to ten sam proces?

## 7. Fiszki
- **ATP:** związek wykorzystywany przez komórkę do przenoszenia i udostępniania energii.
- **Glikoliza:** pierwszy etap rozkładu glukozy, zachodzący w cytozolu.
- **Oddychanie tlenowe:** sposób pozyskiwania energii z udziałem tlenu.

---

<!-- ==================== END L007 ==================== -->


<!-- ==================== BEGIN L008 ==================== -->

# L008 — Mikroskop: jak obserwować komórkę, a nie tylko na nią patrzeć?

## KARTA LEKCJI L008

- Numer: L008
- Tytuł roboczy: Mikroskop (szkic)
- Dział: Metoda
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L007 · Następna: L009
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Interaktywny mikroskop:** przełącznik małe/duże powiększenie, ustawianie ostrości, podpisy struktur.
**Osobny panel:** powiększenie ≠ rozdzielczość.
**Ćwiczenie:** uczeń wykonuje schematyczny rysunek biologiczny.

## 1. Procedura obserwacji
1. Przygotuj preparat.
2. Umieść go na stoliku.
3. Rozpocznij od najmniejszego powiększenia.
4. Ustaw ostrość.
5. Dopiero potem zwiększ powiększenie.
6. Ponownie ustaw ostrość.
7. Wykonaj rysunek biologiczny.
8. Podpisz tylko struktury, które rzeczywiście rozpoznajesz.
9. Zapisz obserwację i wniosek osobno.

## 2. Powiększenie a rozdzielczość
**Powiększenie** mówi, jak duży wydaje się obraz.
**Rozdzielczość** określa zdolność rozróżniania dwóch blisko położonych szczegółów.

Duże powiększenie nie gwarantuje dużej ilości nowych szczegółów.

## 3. Zasada interpretacji
> **Brak widoczności struktury pod mikroskopem nie oznacza, że struktura nie istnieje.**

Może być zbyt mała, niewidoczna w danym preparacie, poza płaszczyzną ostrości albo niewybarwiona.

## 4. Rysunek biologiczny
Dobry rysunek biologiczny powinien być czytelny, uproszczony, proporcjonalny i opatrzony podpisami. Nie jest artystycznym portretem preparatu.

## 5. Zadanie
Uczeń obserwuje preparat i nie widzi jądra. Czy może od razu stwierdzić, że komórka nie ma jądra?

### Odpowiedź
Nie. Najpierw trzeba rozważyć jakość preparatu, powiększenie, ostrość, wybarwienie i rodzaj obserwowanej komórki.

## 6. MINI-CHECK
1. Od jakiego powiększenia rozpoczynamy obserwację?
2. Czy większe powiększenie zawsze daje więcej informacji?
3. Czym różni się obserwacja od wniosku?
4. Co podpisujemy na rysunku?
5. Czy niewidoczna struktura musi być nieobecna?

---

<!-- ==================== END L008 ==================== -->


<!-- ==================== BEGIN L009 ==================== -->

# L009 — Podział komórki: wzrost, regeneracja i powstawanie gamet

## KARTA LEKCJI L009

- Numer: L009
- Tytuł roboczy: Podział komórki — zapowiedź (szkic)
- Dział: Podziały
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L008 · Następna: L014 / L010
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML
**Główny diagram:** `komórka macierzysta → podział → komórki potomne`.
**Porównanie:** mitoza i mejoza jako dwa tory, bez przeciążania szczegółami faz.
**Animacja:** liczba komórek i liczba chromosomów przed/po podziale.

## 1. Po co komórki się dzielą?
Podziały komórkowe umożliwiają m.in. wzrost organizmu, wymianę zużytych komórek, regenerację, a u części organizmów także rozmnażanie bezpłciowe. Mejoza uczestniczy w powstawaniu gamet u organizmów, które rozmnażają się płciowo.

## 2. Mitoza — fundament
W uproszczeniu: jedna komórka dzieli się tak, aby powstały dwie komórki potomne o takiej samej liczbie chromosomów jak komórka wyjściowa.

## 3. Mejoza — fundament
Mejoza obejmuje dwa podziały i prowadzi do powstania komórek o liczbie chromosomów zmniejszonej o połowę względem komórki wyjściowej diploidalnej. U człowieka wiąże się z powstawaniem komórek rozrodczych.

## 4. Tabela
| Cecha | Mitoza | Mejoza |
|---|---|---|
| liczba podziałów | 1 | 2 |
| liczba komórek potomnych | zwykle 2 | zwykle 4 |
| liczba chromosomów | zachowana | zmniejszona o połowę |
| główne znaczenie | wzrost, regeneracja, wymiana komórek | powstawanie gamet i różnorodność |

## 5. Nie myl
**Mitoza ≠ rozmnażanie płciowe.**
**Mejoza ≠ zwykłe „kopiowanie komórki”.**

## 6. Zadanie problemowe
Dlaczego gamety człowieka nie mogą mieć po 46 chromosomów, jeśli po zapłodnieniu zygota ma mieć 46?

### Odpowiedź
Gamety muszą mieć po 23 chromosomy, aby po połączeniu dwóch gamet powstała zygota z 46 chromosomami.

## 7. MINI-CHECK
1. Ile podziałów obejmuje mitoza?
2. Jaki jest skutek mejozy dla liczby chromosomów?
3. Ile chromosomów ma ludzka gameta?
4. Po co potrzebna jest mejoza?
5. Czy każda komórka organizmu człowieka ma 46 chromosomów?

## 8. Fiszki
- **Mitoza:** podział umożliwiający powstanie dwóch komórek potomnych o zachowanej liczbie chromosomów.
- **Mejoza:** dwa kolejne podziały prowadzące do powstania komórek haploidalnych.
- **Gameta:** komórka rozrodcza, u człowieka zawierająca 23 chromosomy.

---

<!-- ==================== END L009 ==================== -->


<!-- ==================== BEGIN L010 ==================== -->

# L010 — Genetyka i DNA od zera (cechy + czym jest DNA)

## KARTA LEKCJI L010

- Numer: L010
- Tytuł roboczy: Genetyka i DNA od zera
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L002 / L003 opcjonalnie · Następna: L011
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L010_DNA_OD_ZERA.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Od cechy do informacji.

`[BIO: DIAGRAM type=FLOW]`
`cecha → dziedziczenie/środowisko → zmienność → informacja genetyczna`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** DNA pojawia się dopiero jako most do L011.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka — **start działu** (L003 diagnoza jest opcjonalna, nie brama)  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Poprzednia lekcja:** L002 (człowiek: krew, gamety, 46/23) · L003 tylko jeśli chcesz mapę luk  
**Następna lekcja:** L011 (chemia par i logika zapisu — bez powtarzania całego wstępu)

---

## 1. Pytanie przewodnie

Skąd biorą się podobieństwa i różnice między organizmami?

---

## 2. Cele lekcji

Po lekcji uczeń:

- definiuje genetykę, dziedziczenie i zmienność,
- odróżnia cechy dziedziczne, nabyte i wieloczynnikowe,
- wskazuje, że fenotyp = geny + środowisko + rozwój,
- (ambitny) rozróżnia zmienność rekombinacyjną i mutacyjną,
- (zaawansowany) zna ideę epigenetyki i cech ciągłych/nieciągłych.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| genetyka = dziedziczenie + zmienność | definicja działu |
| cecha dziedziczna vs nabyta | najczęstszy błąd |
| fenotyp = geny + środowisko + rozwój | klucz do reszty |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

- L001: jądro, DNA w jądrze,
- z życia: podobieństwo do rodziców, różnice między rodzeństwem.

---

## 4. Zacznij od problemu

Dwaj bracia mają ten sam kolor oczu, ale różny wzrost. Dlaczego?

**Hipoteza ucznia:** ....................................

---

## 5. Ściąga — poziom podstawowy

**Genetyka** — nauka o **dziedziczeniu** i **zmienności**.

- **Dziedziczenie** — przekazywanie cech z pokolenia na pokolenie.
- **Zmienność** — różnice między osobnikami.

| Typ cechy | Co to | Przykład |
|-----------|-------|----------|
| Dziedziczna | zapisana w DNA, przekazywana | kolor oczu, grupa krwi |
| Nabyta | wynik środowiska | blizna, język, styl życia |
| Wieloczynnikowa | geny + środowisko | wzrost, masa ciała, kolor skóry |

**Doprecyzowanie:** „Gen decyduje o cesze” to uproszczenie. Gen zawiera informację o produkcie (RNA/białku); fenotyp wynika ze współdziałania genów, środowiska i rozwoju.

### Mnemotechniki

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Dziedziczne = z DNA** | przekazywane |
| 2 | **Nabyte = z życia** | środowisko |
| 3 | **Wieloczynnikowe = DNA + świat** | geny + środowisko |
| 4 | **Genotyp w genach, fenotyp w „fenie”** | genotyp ≠ fenotyp |

---

## 6. Jak to działa?

### 6.1. Od genu do cechy

```text
DNA (gen) → RNA / białko → funkcja w komórce → udział w cesze
                                                (+ środowisko i rozwój)
```

### 6.2. Przykład prowadzony — różny wzrost braci

1. Bracia **nie** mają identycznych genów — każdy dostał inną kombinację alleli (mejoza, L015).
2. Środowisko (odżywianie, sen, aktywność) może być różne.
3. Wzrost = cecha **wieloczynnikowa**.

### 6A. Dlaczego?

1. **Dlaczego cechy dziedziczne się przekazują?** Bo są w DNA przekazywanym w gametach.
2. **Dlaczego cechy nabyte się nie dziedziczą?** Bo nie zmieniają DNA w gametach.
3. **Dlaczego fenotyp to nie tylko geny?** Bo środowisko wpływa na ujawnianie genów.
4. **Dlaczego to ma znaczenie?** Bo nie wszystko jest „zapisane w genach”.

### 6B. Krok po kroku — jak rozpoznać typ cechy

1. Przekazywana z pokolenia na pokolenie? → dziedziczna.
2. Pojawiła się w życiu? → nabyta.
3. Zależy i od genów, i od środowiska? → wieloczynnikowa.

### 6C. Przykład prowadzony

**Dane:** Kolor oczu, blizna, wzrost, grupa krwi.
- Kolor oczu → dziedziczna.
- Blizna → nabyta.
- Wzrost → wieloczynnikowa.
- Grupa krwi → dziedziczna.

### 6D. Powiązanie

```text
L010 (cechy) → L011 (DNA) → L012 (chromosom) → L017 (dziedziczenie)
```

---

## 7. Poziom ambitny

**Zastosowania genetyki:** medycyna, kryminalistyka, rolnictwo, biotechnologia.

**Zmienność:**
- **rekombinacyjna** — mejoza, crossing-over, losowe łączenie gamet,
- **mutacyjna** — zmiany w DNA.

**Cechy ciągłe** (wzrost) vs **nieciągłe** (grupa krwi).

---

## 8. Poziom zaawansowany

> **Zaawansowane.**

- Epigenetyka — środowisko wpływa na ekspresję genów (nazwa).
- Wielogenowość — wiele genów → jedna cecha.
- Dlaczego Mendel wybrał groszek (cechy nieciągłe, łatwe do policzenia).

---

## 9. Klinika błędów

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Wszystkie podobieństwa to geny | też środowisko | mylenie wyglądu z genotypem |
| Blizna dziedziczy się | cecha nabyta | nie wszystko po rodzicach |
| Gen decyduje o cesze | współtworzy | uproszczenie |
| Cechy dominujące są częstsze | zależy od populacji | dominacja ≠ częstość |

### Klinika 2.0

**Błąd:** „Skoro rodzice są wysocy, dziecko na pewno będzie wysokie.”
- **Znajdź:** Twierdzenie o „pewności”.
- **Popraw:** Wzrost jest wieloczynnikowy.
- **Reguła:** Geny + środowisko + rozwój.
- **Dlaczego:** Ten sam genotyp w różnych warunkach daje różny wzrost.
- **Podobne:** Kolor skóry.
- **Pułapka:** Geny dają tendencję, nie gwarancję.

---

## 10. Obserwacja / model

```text
Problem: Czy kolor oczu rodziców pozwala przewidzieć kolor oczu dziecka?
Hipoteza: Czasem tak, ale nie zawsze.
Obserwacja: W rodzinach różne kombinacje.
Wniosek: Dziedziczenie jest probabilistyczne; wiele cech wielogenowych.
Ograniczenia: mała próba, brak kontroli środowiska.
BHP: brak.
```

---

## 11. Ćwiczenia

### 11A. Mini-check
1. Czym zajmuje się genetyka?
2. Podaj 2 cechy dziedziczne.
3. Podaj 2 cechy nabyte.
4. Co to cecha wieloczynnikowa?
5. Czy „gen decyduje” to poprawne?

### 11B. Ćwiczenie prowadzone
Klasyfikacja: dziedziczna (kolor oczu, grupa), nabyta (blizna), wieloczynnikowa (wzrost).

### 11C. Ćwiczenia samodzielne

**A. Podstawa** 1. Co to genetyka? 2. 2 dziedziczne i 2 nabyte. 3. Co to zmienność? 4. 2 zastosowania genetyki.

**B. Trening** 5. Dlaczego rodzeństwo się różni? 6. Popraw: „Blizna dziedziczy się”. 7. Dziedziczenie vs zmienność. 8. Która wieloczynnikowa: kolor oczu czy wzrost?

**C. Ambitne** 9. Rekombinacyjna vs mutacyjna. 10. Dlaczego „gen decyduje” to uproszczenie? 11. Cecha ciągła vs nieciągła.

**D. Zaawansowane** 12. Dlaczego Mendel wybrał groszek? 13. PROBLEM: Bliźniaki jednojajowe, różny wzrost.

### 11D. PROBLEM / THINK
Bliźniaki jednojajowe mają identyczne DNA. Czy mogą mieć różne fenotypy? Uzasadnij.

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to genetyka? |
| ZASTOSUJ | Sklasyfikuj cechę. |
| WYJAŚNIJ | Dlaczego „gen decyduje” to uproszczenie? |
| ODKRYJ | Jaki typ cechy ma wzrost? |
| POŁĄCZ | Połącz cechy z DNA. |
| ZAKWESTIONUJ | Czy bliźniaki jednojajowe są identyczne? |

---

## 12. Odpowiedzi i sposób oceniania

1. Nauka o dziedziczeniu i zmienności. 2. Kolor oczu, grupa krwi; blizna, język. 3. Różnice między organizmami. 4. Medycyna, kryminalistyka. 5. Różne kombinacje alleli + crossing-over + losowe gamety. 6. Blizna jest nabyta. 7. Dziedziczenie = przekazywanie; zmienność = różnice. 8. Wzrost. 9. Rekombinacyjna = mieszanie; mutacyjna = zmiany w DNA. 10. Fenotyp zależy od wielu genów + środowiska + rozwoju. 11. Ciągła: wzrost; nieciągła: grupa krwi. 12. Cechy nieciągłe, łatwe do policzenia. 13. Ten sam genotyp, ale środowisko i rozwój różnią fenotyp.

**Sposób oceniania:**
- **Podstawa:** 1 pkt.
- **Trening:** 1 pkt za klasyfikację, 1 pkt za uzasadnienie.
- **Ambitne:** 2 pkt.
- **Zaawansowane:** 3 pkt.

---

## 13. Fiszki

| Pytanie | Odpowiedź |
|---------|-----------|
| Genetyka | Nauka o dziedziczeniu i zmienności |
| Cecha dziedziczna | Zapisana w DNA |
| Cecha nabyta | Wynik środowiska |
| Wieloczynnikowa | Geny + środowisko |
| Gen a cecha | Gen współtworzy, nie „decyduje sam” |

---

## 14. Test końcowy

1. (P) Co to genetyka?  
2. (P) 2 cechy dziedziczne, 2 nabyte?  
3. (P) Co to zmienność?  
4. (T) Popraw mit o bliznie.  
5. (T) Wieloczynnikowa — przykład.  
6. (A) Dlaczego „gen decyduje” to uproszczenie?  
7. (A) Rekombinacyjna vs mutacyjna.  
8. (Z) Bliźniaki, różny wzrost — uzasadnij.

---

## 15. Checklista

- [ ] Znam definicję genetyki, dziedziczenia, zmienności.
- [ ] Odróżniam cechy dziedziczne, nabyte, wieloczynnikowe.
- [ ] Rozumiem: fenotyp = geny + środowisko + rozwój.
- [ ] Wiem, że „gen decyduje” to uproszczenie.

---

## 16. Mapa pojęć

```text
GENETYKA
├── dziedziczenie
├── zmienność (rekombinacyjna / mutacyjna)
├── cechy: dziedziczne / nabyte / wieloczynnikowe
└── fenotyp = geny + środowisko + rozwój
```

---

## 17. Co dalej?

L011 — jak DNA przechowuje informację.

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Genetyka | Nauka o dziedziczeniu i zmienności |
| Dziedziczenie | Przekazywanie cech |
| Zmienność | Różnice między organizmami |
| Cecha wieloczynnikowa | Geny + środowisko |
| Fenotyp | Ujawniona cecha |

---

## 19. Dodatek zaawansowany

- Epigenetyka (nazwa).  
- Cechy ciągłe/nieciągłe.  
- Genetyka w mediach vs fakt.

---

## 20. Jak się uczyć tej lekcji?

1. Ściąga (5 min).
2. Przykład prowadzony (5 min).
3. Mini-check (5 min).
4. Ćwiczenia A i B (10 min).
5. Fiszki (5 min).
6. Test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

- **Matematyka:** statystyka.
- **Historia:** Mendel.
- **Etyka:** testy genetyczne.

---

## 22. Zadania z życia codziennego

1. Dlaczego cechy „przeskakują” pokolenia?
2. Czy talent muzyczny jest dziedziczny?
3. Dlaczego bliźniaki jednojajowe mogą się różnić?


---

## 23. UZUPEŁNIENIE v3.8 (doklejone — treść v3.7 bez skreśleń)

Wejście w genetykę po diagnozie L003. Nie zastępuje L011–L020.

### Ściąga „cecha dziedziczna vs nabyta”

| Pytanie | Dziedziczna | Nabyta |
|---------|-------------|--------|
| Czy jest w DNA / allelach? | tak | nie (albo tylko predyspozycja) |
| Czy rodzic przekazuje samą cechę 1:1? | nie zawsze (allele + środowisko) | nie jako gen |
| Przykład szkolny | grupy krwi, daltonizm | blizna, opalenizna, język obcy |
| Pułapka | wzrost: geny **i** odżywianie | „wszystko jest albo-albo” |

### Mosty
- L003 — wynik diagnozy mówi, czy L010 czytać szybko.
- L011 — **czym jest** DNA, skoro tu mówimy, że cechy „siedzą w informacji”.
- L017 — tu tylko zapowiedź allelu; krzyżówki dopiero tam.
- L002 — cechy człowieka (wzrost, krew) jako przykłady, nie nowy dział anatomii.

### Mini-klinika extra
1. „Brat jest wyższy, więc to na pewno tylko jedzenie.” → wzrost = geny + środowisko.
2. „Skoro umiem czytać, dzieci urodzą się z czytaniem.” → umiejętność nabyta.
3. „Podobieństwo = zawsze te same geny.” → też wspólne środowisko / przypadek.

### 5 zadań extra
1. Podziel: grupa krwi · blizna po upadku · kolor oczu · opalenizna · hemofilia (szkic).  
2. Jednym zdaniem: co to predyspozycja (bez pełnego modelu L017).  
3. Dlaczego bliźnięta jednojajowe nie są kopią 1:1 zachowania?  
4. Które zdanie jest bezpieczne na E8: (a) „geny decydują o wszystkim” (b) „geny i środowisko mogą współdziałać”?  
5. Wskaż lekcję na „gdzie w komórce jest ta informacja”.

Odpowiedzi: 1 dziedziczne: krew, oczy, hemofilia; nabyte: blizna, opalenizna (hemofilia → L018). 2 skłonność zapisana w genach, ujawnienie zależy też od warunków. 3 środowisko, doświadczenie. 4 (b). 5 L001/L011 (jądro, DNA).

### Status
v3.8-add 2026-09-12 · sekcje 1–22 nietknięte.


## KOREKTA I UZUPEŁNIENIE L010 (v3.9.1 — nic nie usunięto)

### Trzy szuflady cechy

| Rodzaj | Przykład | Czy idzie na potomstwo? |
|--------|----------|-------------------------|
| Dziedziczna | grupy ABO, daltonizm (L018/L019) | tak (geny) |
| Nabyta | blizna, opalenizna, język obcy | **nie** |
| Wieloczynnikowa | wzrost, masa, ciśnienie | geny **i** środowisko |

**Fenotyp** = to, co widać / mierzymy.  
**Genotyp** = zestaw alleli (nazwa wejdzie mocniej od L016).  
Szkolnie: fenotyp = geny + środowisko (+ rozwój).

### Zmienność — dwie szkolne szuflady (ambitny)

- **Rekombinacyjna** — nowe układy alleli (mejoza, L015).
- **Mutacyjna** — zmiana w DNA (L021).
Nie mieszaj: „mutacja” to nie każde „inne niż rodzic”.

### Ciągłe vs nieciągłe (extra)

- Nieciągłe: grupy krwi (kategorie).
- Ciągłe: wzrost (widmo wartości) — zwykle wiele genów + środowisko.

### Pułapki

| Błąd | Poprawka |
|------|----------|
| „Wszystko jest w genach” | środowisko i przypadek rozwoju też |
| „Opalenizna jest dziedziczna, bo tata też ciemny” | pigment *może* być dziedziczny; **sama** opalenizna po wakacjach — nie |
| „Identyczne bliźnięta są kopią 1:1 przez całe życie” | ten sam genom startowy, inna historia środowiska / epigenetyka (extra) |
| „Genetyka = tylko choroby” | też zwykłe cechy i zmienność |

### Mini-klucz

1. Genetyka = dziedziczenie + zmienność.
2. Blizna ≠ cecha dziedziczna.
3. Dwa bratnie wzrosty różne: te same / podobne geny wzrostu + jedzenie, sen, choroby.

### Ciekawostki

- Epigenetyka (extra): oznaczenia na DNA/histonach bez zmiany sekwencji — idea, nie mechanizm na E8.
- Hodowla roślin: człowiek wybiera cechy dziedziczne, nie nabyte.

---

## L010-DNA — Czym jest DNA? (scalenie z HTML v3.0 / L010.5; treść stara zostaje wyżej)

**Źródło HTML:** `BIOLOGIA_L010_DNA_OD_ZERA.html` · widgety i trener zostają w HTML.

### Pytanie drugie (most do L011)

Czym jest DNA, gdzie jest w komórce i czego ten skrót **nie** oznacza?

### Minimum E8 z tej części

- DNA = kwas deoksyrybonukleinowy = **nośnik informacji** (nie „gotowy człowiek”).
- Główne miejsce u eukariontów: **jądro**. Dodatkowo: **mtDNA**; u roślin **cpDNA**; u bakterii **nukleoid** (bez jądra).
- **Dojrzały erytrocyt człowieka** nie ma jądra ani mitochondriów → **nie ma DNA**. Krew do badań DNA = głównie **leukocyty**.
- Nukleotyd = cukier (deoksyryboza) + fosforan + zasada (A, T, C, G).
- Pary szkolne: **A–T** (2 wiązania wodorowe), **C–G** (3). Szczegół „dlaczego nie A–C” = **L011**.
- Poziomy: DNA (cząsteczka) ⊃ gen (odcinek z informacją o produkcie) ⊂ chromosom (DNA + białka).
- Model uproszczony: DNA → RNA → białko → cecha. To **model**, nie cała biologia.
- Fenotyp = geny + środowisko + rozwój (powtórka z części o cechach).

### Czego DNA NIE oznacza (10 nieporozumień — KEEP z HTML)

| Mit | Poprawka |
|-----|----------|
| „DNA to gotowy organizm.” | To zapis informacji; organizm powstaje w rozwoju. |
| „Gen to cały chromosom.” | Gen = odcinek; chromosom niesie wiele genów + DNA niekodujące. |
| „Jedno DNA = jedna cecha.” | Wiele genów + środowisko + rozwój. |
| „Mam gen na X, więc na pewno będę miał X.” | Allel, regulacja, środowisko; „mam gen” ≠ pewny fenotyp. |
| „Informacja genetyczna = los raz na zawsze.” | Mutacje somatyczne, epigenetyka (extra), środowisko. |
| „Mutacja = choroba.” | Zmiana sekwencji; skutek bywa zerowy, korzystny albo szkodliwy (L020). |
| „DNA jest tylko w jądrze.” | Jest też mtDNA (i cpDNA u roślin). |
| „Każda komórka ma DNA w jądrze.” | Erytrocyt dojrzały — wyjątek; bakterie nie mają jądra. |
| „DNA działa samo.” | Potrzeba maszynerii komórki (polimerazy, rybosomy…). |
| „DNA to dosłowna instrukcja obsługi.” | Metafora; nie opisuje regulacji ani środowiska. |

### DNA vs RNA (szkic, nie pełna L011)

| Cecha | DNA | RNA |
|-------|-----|-----|
| Cukier | deoksyryboza | ryboza |
| Zasady | A, T, C, G | A, U, C, G |
| Typowo | dwie nici | jedna nić |
| Rola szkolna | magazyn | kopia robocza / narzędzie |

### Gdzie kończy się L010, a zaczyna L011

- **L010:** co to genetyka, trzy szuflady cech, czym jest DNA, gdzie leży, nukleotyd i pary **jako fakt**, 10 mitów.
- **L011:** dlaczego A–T a nie A–C, puryna+pirymidyna i szerokość helisy, antyrównoległość, gen vs produkt (białko **lub** RNA), kod zdegenerowany.
- **L012:** upakowanie, 46/23 licząc **centromery**, chromatydy.
- **L013:** semikonserwatywna replikacja, faza S, widełki.
- **L015:** mejoza w linii płciowej, nie „w dojrzałych gametach”.
- **L017:** Punnett jednogenowy.

### Status L010 (2026-09-20)

- v3.7/v3.9.1 (cechy) **zachowane w całości**.
- Doklejono warstwę DNA-od-zera z HTML v3.0 (widgety zostają w HTML).
- Ten plik (`v4.2_AUDYTOWANA_WORKING`) jest od teraz **MD roboczym** biologii.

<!-- ==================== END L010 ==================== -->


<!-- ==================== BEGIN L011 ==================== -->

# L011 — Jak DNA przechowuje informację?

## KARTA LEKCJI L011

- Numer: L011
- Tytuł roboczy: Jak DNA przechowuje informację
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L010 · Następna: L012
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L011_DNA.html + WIZUALIZACJA
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** DNA: od elementu do helisy.

`[BIO: DIAGRAM type=FLOW]`
`nukleotyd → nić → dwie nici → helisa`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** informacja tkwi w sekwencji zasad.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]  
**Poprzednia lekcja:** L010 (cechy + DNA od zera; chemia par jest tutaj, nie wracaj do całego wstępu)  
**Następna lekcja:** L012 (chromosom, kariotyp)

**Wersja:** v5.0 (2026-09-13) — przebudowa strukturalna: dodano wprowadzenie, historię odkrycia DNA, pełne wyjaśnienia definicji, analogie, osobną sekcję o ekspresji genu i centralnym dogmacie, ograniczenia modelu, rozkład statystyczny. **Nic nie usunięto** względem v3.8/v3.9.1 — wszystko rozbudowano.

---

## Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L001, L010) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 10 Klinika |
| **[TRENING]** | pkt 12–15 (ćwiczenia, test) |
| **[MASTER]** | pkt 8 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 9 + pkt 20 |
| **[KONKURS]** | pkt 12D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 14 Fiszki |

**Most obowiązkowy:** L001 (jądro = DNA) → **L011 (czym jest DNA)** → L012 (chromosom).  
**Mosty dodatkowe:** L013 (replikacja korzysta z A–T, C–G), L014 (RNA — różnica T/U), L017 (gen = odcinek DNA), L020 (mutacje = zmiany sekwencji).

---

## 0. Wprowadzenie — o co tu właściwie chodzi? [NOWE]

Wyobraź sobie, że masz książkę kucharską. Każdy przepis mówi, jak zrobić konkretną potrawę. Jeśli chcesz zrobić rosół, potrzebujesz przepisu na rosół — nie na pierogi.

W każdej komórce twojego ciała jest **taka książka kucharska** — tylko że zapisana nie literami, ale **czterema symbolami: A, T, C, G**. Ta książka nazywa się **DNA**. Zawiera **przepisy na wszystko**: na kolor oczu, na grupę krwi, na to, jak działa twoje serce, nerki, mózg.

Ale jest jeszcze ciekawiej: **ta książka ma około 2 metrów długości**, a mieści się w jądrze komórki o średnicy kilku mikrometrów. Jak to możliwe? I jak z czterech liter można zapisać **całą instrukcję obsługi człowieka**?

To pytanie nurtowało naukowców od dawna. Na tej lekcji dowiesz się:

1. **Czym jest DNA** i jak jest zbudowane.
2. **Jak cztery litery (A, T, C, G) mogą przechowywać ogromną ilość informacji**.
3. **Jak DNA kopiuje się** (replikacja — L013).
4. **Jak informacja z DNA staje się cechą** (ekspresja genu → białko → fenotyp).
5. **Dlaczego to ma znaczenie** — od medycyny po kryminalistykę.

### Historia — kto odkrył DNA i jak?

**1869 — Friedrich Miescher** wyizolował z jąder komórkowych substancję bogatą w fosfor. Nazwał ją „nukleiną". Nie wiedział jeszcze, że to nośnik informacji.

**1944 — Oswald Avery, Colin MacLeod, Maclyn McCarty** pokazali, że to właśnie DNA (a nie białko) przenosi informację genetyczną. Wcześniej sądzono, że białka są ważniejsze.

**1950 — Erwin Chargaff** odkrył regułę: **%A = %T** oraz **%C = %G** w każdej próbce DNA. To była kluczowa wskazówka — ale nie wiedziano jeszcze dlaczego.

**1952 — Rosalind Franklin i Maurice Wilkins** wykonali zdjęcia rentgenowskie DNA. Najsłynniejsze — **„Zdjęcie 51"** — pokazało charakterystyczny wzór spiralny. Franklin wywnioskowała, że DNA ma formę **helisy** i że zasady są wewnątrz, a szkielet cukrowo-fosforanowy na zewnątrz.

**1953 — James Watson i Francis Crick** opublikowali w czasopiśmie „Nature" model **podwójnej helisy** — dwie nici owinięte wokół siebie, połączone parami zasad A–T i C–G. Ten model wyjaśniał regułę Chargaffa i sugerował mechanizm kopiowania.

**1962 — Nagroda Nobla** dla Watsona, Cricka i Wilkinsa. **Rosalind Franklin zmarła w 1958** (na raka) i nie mogła jej otrzymać. Dziś docenia się jej wkład — jej dane były kluczowe dla odkrycia.

> **Kluczowa myśl:** DNA to **cząsteczkowa książka** — instrukcja zapisana w alfabecie czterech liter. Sekwencja (kolejność) tych liter to informacja. Zmiana kolejności = inna informacja.

### Dlaczego to ma znaczenie?

| Dziedzina | Zastosowanie |
|---|---|
| **Medycyna** | diagnostyka chorób genetycznych, terapia genowa, medycyna personalizowana |
| **Kryminalistyka** | identyfikacja osób na podstawie śladów DNA (np. włos, kropla krwi) |
| **Testy ojcostwa** | porównanie profili DNA (unikalnych sekwencji) |
| **Rolnictwo** | modyfikacje genetyczne (GMO), selekcja odmian |
| **Biotechnologia** | produkcja insuliny, szczepionek, enzymów |
| **Ewolucja** | porównanie sekwencji DNA różnych gatunków → drzewo filogenetyczne |

---

## 1. Pytanie przewodnie

Jak jedna cząsteczka może przechowywać informacje potrzebne do budowy i funkcjonowania organizmu?

---

## 2. Cele lekcji (+ 80/20 — wyjaśnione)

Po lekcji uczeń:

- **wyjaśnia**, czym jest DNA i **rozumie**, dlaczego jest nośnikiem informacji,
- **wymienia składniki nukleotydu** i rozumie, jak są połączone,
- **rozpoznaje zasady A, T, C, G** i **stosuje zasadę komplementarności** (A–T, C–G),
- **wyjaśnia znaczenie podwójnej helisy** i **uzupełnia nić komplementarną**,
- **(ambitny)** rozróżnia rolę DNA od mechanizmu powstawania cech oraz DNA od genu,
- **(zaawansowany)** zna antyrównoległość, różnicę liczby wiązań A–T / C–G oraz ideę kodu zdegenerowanego.

### Zasada 80/20 — co naprawdę daje 80% efektu (i dlaczego)

| 20% = 80% efektu | Dlaczego to jest kluczowe |
|---|---|
| **DNA = informacja w kolejności zasad** | Bez tego nie zrozumiesz replikacji ani ekspresji |
| **Nukleotyd = cukier + fosforan + zasada** | To cegiełka DNA; bez niej nie ma budowy |
| **A–T, C–G** | Fundament kopiowania i stabilności; wszędzie się używa |
| **Helisa (dwie nici)** | Struktura + wierność kopii + możliwość naprawy |
| **DNA ≠ gen ≠ chromosom** | Trzy poziomy organizacji — najczęstszy błąd |

**Dlaczego to wystarczy?** Bo 90% zadań E8 o DNA sprowadza się do: rozpoznaj zasady → uzupełnij nić komplementarną → rozróżnij DNA/gen/chromosom → wytłumacz, gdzie jest informacja. Reszta to nuany.

---

## 3. Co trzeba wiedzieć wcześniej (kompas) · **[PRZYPOMNIENIE]**

- **L001:** jądro komórkowe zawiera materiał genetyczny.
- **L010:** cecha = geny + środowisko; gen to odcinek DNA.
- **Z chemii (klasy 7–8):** atomy, cząsteczki, wiązania chemiczne (podstawy).

> **Jeśli nie wiesz, gdzie w komórce jest DNA — wróć do L001, sekcja 5. To fundament.**

---

## 4. Zacznij od problemu

Wyobraź sobie, że masz tylko **cztery symbole**: A, T, C, G.  
Czy za ich pomocą można zapisać bardzo dużą ilość informacji?

**Hipoteza ucznia:** ....................................

**Podpowiedź ilościowa:**  
- 4¹ = 4 możliwe „słowa" jednoliterowe
- 4² = 16 możliwych „słów" dwuliterowych
- 4³ = 64 możliwych „słów" trzyliterowych
- 4¹⁰ ≈ **1 000 000** (milion) różnych sekwencji 10-nukleotydowych
- 4²⁰ ≈ **1 000 000 000 000** (bilion) różnych sekwencji 20-nukleotydowych

**Wniosek:** nawet krótki odcinek DNA niesie **ogromną** ilość informacji — właśnie dzięki **kolejności**.

**Po lekcji wróć do hipotezy i sprawdź, czy była trafna.**

---

## 5. Ściąga — poziom podstawowy · **[PODSTAWA E8]**

### 5.1. Co to DNA? (definicja pełna)

**DNA** = **kwas deoksyrybonukleinowy** (ang. *deoxyribonucleic acid*). To **główny nośnik informacji genetycznej** u wszystkich organizmów żywych (z wyjątkiem niektórych wirusów, które mają RNA).

**Gdzie jest DNA?**
- U **eukariontów** (rośliny, zwierzęta, grzyby): głównie w **jądrze**, ale też w **mitochondriach** (mtDNA) i — u roślin — w **chloroplastach** (cpDNA).
- U **prokariontów** (bakterie): w **nukleoidzie** (bez błony jądrowej), czasem też w plazmidach.

### 5.2. Budowa — od cegiełki do helisy

**Nukleotyd** = podstawowa jednostka DNA. Składa się z **trzech** części:

| Składnik | Co to | Rola |
|---|---|---|
| **Cukier deoksyryboza** | Pięciowęglowy cukier (bez jednego tlenu w stosunku do rybozy) | Szkielet |
| **Reszta fosforanowa** | Grupa –PO₄ | Łączy nukleotydy w łańcuch |
| **Zasada azotowa** | A, T, C lub G | Nosi informację |

**Zasady azotowe w DNA** (4 rodzaje):

| Symbol | Nazwa | Typ | Wielkość |
|---|---|---|---|
| **A** | adenina | puryna | duża |
| **G** | guanina | puryna | duża |
| **T** | tymina | pirymidyna | mała |
| **C** | cytozyna | pirymidyna | mała |

**Uwaga:** W **RNA** zamiast tyminy (T) występuje **uracyl (U)**. To ważne rozróżnienie.

### 5.3. Pary komplementarne — dlaczego A–T, C–G?

**Reguła komplementarności:**
- **A zawsze łączy się z T** (2 wiązania wodorowe)
- **C zawsze łączy się z G** (3 wiązania wodorowe)

**Dlaczego właśnie tak?**
1. **Stała szerokość helisy** — zawsze **puryna (duża) + pirymidyna (mała)**. A + T = duża + mała; C + G = duża + mała. Zawsze pasuje.
2. **Gdyby A łączyło się z C** — duża + mała = powinno pasować, ale chemicznie **nie tworzy wiązań wodorowych** w prawidłowy sposób.
3. **Gdyby A łączyło się z G** — duża + duża = helisa byłaby za szeroka i niestabilna.

### 5.4. Podwójna helisa — struktura

```text
     nić 1 (5'→3')         nić 2 (3'→5')
5' ---A---T---C---G--- 3'
     |   |   |   |
3' ---T---A---G---C--- 5'
```

- **Dwie nici** owinięte wokół wspólnej osi (jak skręcona drabina).
- Nici są **antyrównoległe**: jedna biegnie 5'→3', druga 3'→5'.
- **Szkielet cukrowo-fosforanowy** na zewnątrz, **zasady wewnątrz** (jak szczeble drabiny).
- **Średnica helisy** ≈ 2 nm.

### 5.5. Gdzie jest informacja? (najważniejsze!)

**Informacja jest w KOLEJNOŚCI zasad**, nie w pojedynczej literze ani nie w „kształcie helisy".

```text
ATGCC...   ← jedna informacja
ATGGC...   ← zupełnie inna informacja
```

**Analogia 1 — kod Morse'a:** kolejność kropek i kresek daje różne informacje.  
**Analogia 2 — alfabet:** te same litery w innej kolejności dają inne słowa (np. „kot" ≠ „tok").

### 5.6. Mnemotechniki

| # | Mnemotechnika | Znaczenie |
|---|---|---|
| 1 | **A–T, C–G** | pary zasad |
| 2 | **Deoksyryboza = DNA** | cukier (deoksy- = bez tlenu) |
| 3 | **Kolejność = informacja** | nie pojedyncza litera |
| 4 | **Dwie nici = helisa** | struktura + wierność kopii |
| 5 | **Puryna + pirymidyna** | stała szerokość helisy |
| 6 | **T w DNA, U w RNA** | nie mylić |

### 5.7. Tabela zbiorcza — DNA vs RNA

| Cecha | DNA | RNA |
|---|---|---|
| Pełna nazwa | kwas deoksyrybonukleinowy | kwas rybonukleinowy |
| Cukier | deoksyryboza | ryboza |
| Zasady | A, T, C, G | A, U, C, G |
| Struktura | dwie nici (helisa) | zwykle jedna nić |
| Rola główna | przechowywanie informacji | odczyt / przekazywanie |
| Lokalizacja | jądro (głównie) | jądro i cytoplazma |

---

## 6. Wyjaśnienie od podstaw · **[PODSTAWA E8]**

### 6.1. Po co w ogóle helisa? (logika struktury) [NOWE]

Wyobraź sobie **zamek błyskawiczny**. Ma dwie części, które do siebie pasują — jeśli rozsuniesz zamek, każda część może posłużyć jako „wzór" do odtworzenia drugiej.

**DNA działa podobnie:**
- Ma **dwie komplementarne nici**.
- Każda nić może być **matrycą** dla drugiej.
- Dzięki temu **kopiowanie (replikacja)** jest wierne — wystarczy rozpleść helisę i dobudować nowe nici.

To jest **cała logika** podwójnej helisy: **struktura umożliwia funkcję**.

### 6.2. Łańcuch budowy — od cegiełki do helisy

```text
NUKLEOTYD (cukier + fosforan + zasada)
    ↓
NIĆ DNA (nukleotydy połączone w łańcuch)
    ↓
DWIE NICI (komplementarne, owinięte wokół siebie)
    ↓
PODWÓJNA HELISA
```

### 6.3. Skąd informacja? (pełny tok rozumowania)

Weźmy dwa krótkie odcinki DNA:
- Odcinek 1: `ATGCC`
- Odcinek 2: `ATGGC`

**Różnica:** pozycja 4 — w pierwszym jest **C**, w drugim **G**.

**Skutek:** te odcinki niosą **inną informację**. Kolejność zasad decyduje o tym, jakie białko powstanie (a więc jaka cecha się ujawni).

**Ilościowo:**  
4 zasady → 4¹⁰ ≈ **milion** różnych sekwencji 10-nukleotydowych.  
To pokazuje, dlaczego nawet krótki odcinek DNA może nieść bardzo dużo informacji.

### 6.4. Od DNA do cechy — dwa różne procesy

**Ważne rozróżnienie:**
- **Replikacja** = kopiowanie DNA (obie komórki potomne dostają tę samą informację) — szczegóły w L013.
- **Ekspresja** = odczyt informacji (DNA → RNA → białko) — szczegóły w sekcji 7.

To **dwa różne procesy**. DNA **przechowuje**; ekspresja **czyta**.

```text
DNA (przechowywanie)
    ↓
RNA / białko (odczyt)
    ↓
funkcja
    ↓
udział w cesze (+ środowisko + rozwój)
```

### 6.5. 6A. Dlaczego?

1. **Dlaczego A z T, a nie z C?**  
   Bo para musi mieć odpowiednią szerokość helisy: zawsze **puryna (duża) + pirymidyna (mała)**.  
   A + C lub G + T dałoby nierówną szerokość i niestabilną strukturę.

2. **Dlaczego komplementarność kluczowa?**  
   Bo umożliwia wierne kopiowanie (replikacja) i odczyt (transkrypcja).  
   Każda nić może być matrycą dla drugiej.

3. **Dlaczego informacja w kolejności?**  
   Bo kolejność zasad określa kolejność aminokwasów w białku (a więc funkcję).

4. **Dlaczego dwie nici?**  
   Stabilizacja, możliwość naprawy (jedna nić = matryca dla drugiej), wierne kopiowanie.

### 6.6. 6B. Krok po kroku — uzupełnianie nici komplementarnej

1. **Weź sekwencję** (np. A–G–T–C).
2. **Dopisz partnera** według reguły:
   - A → T
   - T → A
   - G → C
   - C → G
3. **Wynik:** T–C–A–G.
4. **Sprawdź:** czy każda para to puryna + pirymidyna? (tak).

**Uwaga:** W DNA **nie ma U**. Jeśli widzisz U, to RNA (L014).

### 6.7. 6C. Przykład prowadzony

**Matryca:** `5'– A T G C C A –3'`  
**Nić komplementarna:** `3'– T A C G G T –5'`

**Sprawdzenie krok po kroku:**

| Matryca | Partner |
|---|---|
| A | T |
| T | A |
| G | C |
| C | G |
| C | G |
| A | T |

**Wszystkie pary poprawne.**

Po replikacji: 2 cząsteczki, każda = stara + nowa nić (semikonserwatywność — szczegóły L013).

### 6.8. 6D. Powiązanie z innymi lekcjami

```text
L011 (DNA — przechowywanie)
  → L012 (chromosom — upakowanie)
  → L013 (replikacja = kopiowanie DNA)
  → L014 (RNA — transkrypcja, różnica T/U)
  → L017 (dziedziczenie — gen = odcinek DNA)
  → L020 (mutacje = zmiana sekwencji)
```

- **L011:** DNA = nośnik informacji.
- **L012:** DNA upakowane w chromosomach (46 chromosomów u człowieka).
- **L013:** replikacja korzysta z A–T, C–G.
- **L014:** RNA (ma U zamiast T).
- **L017:** gen to odcinek DNA; allele to różne wersje.
- **L020:** mutacja = zmiana sekwencji DNA.

---

## 7. Centralny dogmat i ekspresja genu — pełne wyjaśnienie [NOWA SEKCJA]

### 7.1. Problem: skoro DNA siedzi w jądrze, jak informacja dociera do cytoplazmy?

**Odpowiedź:** przez **RNA** — cząsteczkę pośrednią, która jest **kopią roboczą** DNA.

To właśnie **centralny dogmat biologii molekularnej:**

```text
DNA --(transkrypcja)--> RNA --(translacja)--> BIAŁKO
```

- **Transkrypcja** — przepisanie DNA na RNA (w jądrze).
- **Translacja** — odczyt RNA i synteza białka (w rybosomach).

### 7.2. Transkrypcja — krok po kroku

1. **Rozplecenie** fragmentu DNA.
2. **Dobudowa** nici RNA według komplementarności — ale **zamiast T jest U** (bo to RNA).
3. **Wynik:** mRNA (messenger RNA) — jednoniciowa kopia informacji.
4. **Wyjście** mRNA z jądra do cytoplazmy.

**Reguła komplementarności DNA → RNA:**

| DNA | → RNA |
|---|---|
| A | U |
| T | A |
| G | C |
| C | G |

**Przykład:**
- DNA: `TAC GCA TGG`
- mRNA: `AUG CGU ACC`

### 7.3. Translacja — krok po kroku

1. mRNA przyłącza się do rybosomu.
2. **Kodony** (trójki nukleotydów) są odczytywane po kolei.
3. Do każdego kodonu pasuje **antykodon** z cząsteczką tRNA, niosącą konkretny aminokwas.
4. Aminokwasy są łączone w łańcuch → powstaje **białko**.

**Przykład kodonów (uproszczenie):**
- AUG → metionina (start)
- UAA, UAG, UGA → stop

### 7.4. Kod genetyczny — cechy (zapowiedź)

- **Trójkowy** — 3 nukleotydy (kodon) kodują 1 aminokwas.
- **Zdegenerowany** — wiele kodonów koduje ten sam aminokwas (64 kodony, 20 aminokwasów).
- **Bezprzecinkowy** — kodony następują po sobie bez przerw.
- **Niezachodzący** — każdy nukleotyd należy do jednego kodonu.
- **Uniwersalny** — ten sam kod u prawie wszystkich organizmów.

**Szczegóły — w L090 (extra olimpijska).**

### 7.5. Po co to wiedzieć na tym etapie?

Bo **mutacja w DNA nie zawsze zmienia białko** — dzięki **zdegenerowaniu kodu** zmiana jednej zasady może nie zmienić aminokwasu (mutacja cicha — most do L020).

To również wyjaśnia, dlaczego **DNA jest tak stabilne**: informacja jest przechowywana „na zapas" i odczytywana etapami.

---

## 8. Poziom ambitny · **[MASTER]**

### 8.1. Dlaczego A–T, C–G? (mechanizm)

- **Puryna (A, G) + pirymidyna (T, C)** = stała szerokość helisy ≈ 2 nm.
- Komplementarność → fundament wiernego kopiowania (replikacja) i odczytu (transkrypcja).

### 8.2. DNA vs RNA — porównanie

| Cecha | DNA | RNA |
|---|---|---|
| Cukier | deoksyryboza | ryboza |
| Zasady | A, T, C, G | A, U, C, G |
| Struktura | dwie nici (helisa) | zwykle jedna nić |
| Rola główna | przechowywanie informacji | odczyt / przekazywanie |
| Trwałość | bardzo stabilny | mniej stabilny (krótszy „czas życia") |
| Lokalizacja | jądro (głównie) | jądro + cytoplazma |

### 8.3. Gen vs DNA — kluczowe rozróżnienie

- **DNA** = cała cząsteczka (lub cały materiał genetyczny).
- **Gen** = **odcinek DNA** niosący informację o konkretnym produkcie (RNA/białku).
- **Allel** = **wersja genu** (np. A lub a — L017).

**Analogia:** DNA to cała książka kucharska; gen to jeden przepis; allel to wariant tego przepisu (np. „rosół z makaronem" vs „rosół z kluskami").

### 8.4. Uwaga na uproszczenia

- „Gen decyduje o cesze" — to skrót. Gen zawiera informację o produkcie (RNA/białku), a fenotyp wynika ze współdziałania wielu genów, środowiska i rozwoju (L010).
- „Mam gen DNA na kolor oczu" — nieprecyzyjne. Lepiej: „mam gen na kolor oczu".

---

## 9. Poziom zaawansowany · **[ZAAWANSOWANY]**

### 9.1. Wiązania wodorowe — A–T vs C–G

| Para | Liczba wiązań wodorowych | Trwałość |
|---|---|---|
| **A–T** | 2 | słabsza |
| **C–G** | 3 | **trwalsza** |

**Skutek:** Regiony DNA bogate w C–G są **trudniejsze do rozplecenia** — to ma znaczenie w replikacji i transkrypcji (trzeba użyć więcej energii).

### 9.2. Antyrównoległość nici

- Jedna nić biegnie **5' → 3'** („w górę").
- Druga nić biegnie **3' → 5'** („w dół").
- To wynika z chemii cukru (deoksyrybozy) i grup fosforanowych.

**Dlaczego to ważne?** Bo polimeraza DNA (L013) może syntetyzować nową nić **tylko w kierunku 5' → 3'**. To komplikuje mechanizm replikacji (ale to szczegół olimpijski).

### 9.3. mtDNA — DNA poza jądrem

- **mtDNA** = mitochondrialny DNA.
- Mała, kolista cząsteczka (u człowieka ~16 500 par zasad).
- Dziedziczy się **po matce** (ojcowskie mitochondria są degradowane po zapłodnieniu).
- Koduje niektóre białka mitochondrialne + tRNA + rRNA.

**Most:** choroby mitochondrialne (np. zespół MELAS) — szczegóły w L090.

### 9.4. Kod zdegenerowany — dlaczego to ważne

**64 kodony → 20 aminokwasów** (bo 61 koduje, 3 to stop).

**Skutek:** zmiana jednej zasady może:
- **Nie zmienić** aminokwasu → **mutacja cicha** (ang. *silent*).
- **Zmienić** aminokwas → **mutacja missense**.
- **Wprowadzić stop** → **mutacja nonsense** (białko skrócone).

To fundament zrozumienia, dlaczego **nie każda mutacja widać** (L020).

### 9.5. Informacja jest sekwencyjna — co to znaczy?

Kolejność zasad jest **liniowa** (jak litery w zdaniu). Nie ma „skoków" ani „nakładek". To odróżnia DNA od np. białek, które mają strukturę 3D.

**Analogia:** DNA to taśma magnetyczna — informacja jest zapisana liniowo. Białko to rzeźba — liczy się kształt 3D.

---

## 10. Klinika błędów · **[PODSTAWA E8] / [TRENING]**

### 10.1. Tabela błędów

| Błąd | Poprawa | Dlaczego? |
|---|---|---|
| DNA jest białkiem | DNA to kwas nukleinowy | białka powstają **na podstawie** DNA |
| A łączy się z C | A–T, C–G | komplementarność + stała szerokość |
| Nukleotyd = zasada | cukier + fosforan + zasada | trzy składniki |
| DNA to jedna nić | dwie nici | komplementarność i stabilność |
| DNA = gen | DNA = cząsteczka; gen = odcinek | różne poziomy organizacji |
| Kolejność nie ma znaczenia | kolejność = informacja | zmiana kolejności = inna informacja |
| W DNA jest U | w DNA jest T; U w RNA | różnica DNA/RNA |
| Gen = chromosom | gen = fragment; chromosom = upakowana cała cząsteczka | L012 |
| Helisa = informacja | informacja w sekwencji | helisa to struktura |

### 10.2. Klinika 2.0 — pięć pełnych przykładów

#### Przykład 1 — „Tymina łączy się z guaniną"

- **Błąd:** „Tymina łączy się z guaniną."
- **Znajdź:** Zła para.
- **Popraw:** Tymina z adeniną (A–T).
- **Reguła:** A–T, C–G.
- **Dlaczego:** Komplementarność + stała szerokość helisy.
- **Podobne:** A z T, C z G.
- **Pułapka:** W RNA tymina → uracyl (U).

#### Przykład 2 — „DNA i gen to to samo"

- **Błąd:** „DNA i gen to to samo."
- **Znajdź:** Mylenie poziomu organizacji.
- **Popraw:** DNA = cała cząsteczka; gen = odcinek DNA z informacją o produkcie.
- **Reguła:** Gen jest częścią DNA.
- **Dlaczego:** Jedna cząsteczka DNA zawiera tysiące genów.
- **Podobne:** Chromosom zawiera wiele genów.
- **Pułapka:** „Mam gen DNA na kolor oczu" — nieprecyzyjne; lepiej: „mam gen na kolor oczu".

#### Przykład 3 — „Kolejność zasad nie ma znaczenia"

- **Błąd:** „Ważne jest tylko to, że są A, T, C, G — kolejność nie ma znaczenia."
- **Znajdź:** Niezrozumienie natury informacji.
- **Popraw:** Informacja **jest** w kolejności (sekwencji).
- **Reguła:** DNA = liniowy zapis.
- **Dlaczego:** `ATGCC` ≠ `ATGGC` — inna informacja.
- **Podobne:** „kot" ≠ „tok".
- **Pułapka:** Helisa to tylko struktura — informacja jest w sekwencji.

#### Przykład 4 — „W DNA jest U"

- **Błąd:** „W DNA występuje uracyl."
- **Znajdź:** Mylenie DNA z RNA.
- **Popraw:** W DNA jest T (tymina); U (uracyl) jest w RNA.
- **Reguła:** DNA: A, T, C, G. RNA: A, U, C, G.
- **Dlaczego:** To różnica chemiczna między cukrami i zasadami.
- **Podobne:** Deoksyryboza (DNA) vs ryboza (RNA).
- **Pułapka:** W zadaniach: jeśli widzisz U — to RNA, nie DNA.

#### Przykład 5 — „Wystarczy znać 4 litery"

- **Błąd:** „Skoro znam A, T, C, G, to znam całe DNA."
- **Znajdź:** Pomylenie alfabetu z tekstem.
- **Popraw:** Trzeba znać **kolejność** (sekwencję), nie tylko litery.
- **Reguła:** Informacja = kolejność zasad.
- **Dlaczego:** Znając litery alfabetu nie znasz jeszcze żadnej książki.
- **Podobne:** Znając cyfry nie znasz żadnej liczby.
- **Pułapka:** „Znam DNA" ≠ „znam sekwencję DNA".

---

## 11. Obserwacja / model

```
Problem: Jak powstaje nić komplementarna?
Hipoteza: Każdej zasadzie odpowiada jedna partnerka.
Materiał: paski z literami A, T, C, G.
Obserwacja: Każdej zasadzie przypisuje się jednego partnera.
Wniosek: Komplementarność umożliwia kopiowanie.
Ograniczenia: papier nie pokazuje wiązań chemicznych.
BHP: brak.
```

**Kwadrat komplementarności nie jest doświadczeniem — to model.**

### Porównanie: model vs obserwacja

| Typ | Przykład |
|---|---|
| **Obserwacja** | izolacja DNA, elektroforeza, sekwencjonowanie |
| **Model** | schemat helisy, uzupełnianie nici, diagram replikacji |

---

## 12. Ćwiczenia · **[TRENING]** (12D → [KONKURS])

### 12A. Mini-check (5 pytań)

1. Co to DNA?
2. Z czego składa się nukleotyd?
3. Podaj cztery zasady azotowe DNA.
4. Podaj pary komplementarne.
5. Gdzie w DNA znajduje się informacja genetyczna?

### 12B. Ćwiczenie prowadzone

**Dane:** Matryca `A–G–T–C–C–A`.

**Krok 1.** Dopisz partnera dla każdej zasady:
- A → T
- G → C
- T → A
- C → G
- C → G
- A → T

**Krok 2.** Wynik: `T–C–A–G–G–T`.

**Krok 3.** Sprawdź: każda para to puryna + pirymidyna? (tak).

**Spróbuj sam:** matryca `G–A–T–C` → ?

### 12C. Ćwiczenia samodzielne

#### A. Podstawa

1. Co to DNA?
2. Z czego nukleotyd?
3. Podaj zasady i pary.
4. Gdzie jest informacja?

#### B. Trening

5. Uzupełnij nić: `A–G–T–C`.
6. Popraw: „Tymina łączy się z guaniną".
7. Popraw: „DNA jest białkiem".

#### C. Ambitne

8. Dlaczego komplementarność jest kluczowa?
9. Czym różni się gen od DNA?
10. Dlaczego rodzeństwo nie jest genetycznie identyczne? (most do L015)

#### D. Zaawansowane

11. DNA vs RNA — 3 różnice.
12. Dlaczego pary C–G są trwalsze niż A–T?
13. Dlaczego zmiana jednej zasady może nie zmienić fenotypu?

### 12D. PROBLEM / THINK

1. Jedna nić DNA: `ATGCC`. Jaka druga? Czy wiesz, która jest „starsza"?
2. **ZAKWESTIONUJ:** Czy sekwencje `ATGCC` i `ATGGC` niosą tę samą informację? Uzasadnij.
3. Czy DNA może przechowywać informację, jeśli miałby tylko trzy zasady zamiast czterech? Jak zmieniłaby się pojemność?

### Drabinka trudności

| Poziom | Zadanie |
|---|---|
| ODTWÓRZ | Podaj pary zasad. |
| ZASTOSUJ | Uzupełnij nić komplementarną. |
| WYJAŚNIJ | Dlaczego A łączy się z T, a nie z C? |
| ODKRYJ | Jaka jest druga nić do `ATGCC`? |
| POŁĄCZ | Połącz DNA z replikacją i ekspresją. |
| ZAKWESTIONUJ | Czy kolejność zasad ma znaczenie? Czy trzy zasady wystarczyłyby? |

---

## 13. Odpowiedzi i sposób oceniania

### 12A

1. Kwas deoksyrybonukleinowy — główny nośnik informacji genetycznej.
2. Deoksyryboza + reszta fosforanowa + zasada azotowa.
3. A, T, C, G.
4. A–T, C–G.
5. W kolejności zasad (sekwencji).

### 12B

Matryca `G–A–T–C` → nić komplementarna `C–T–A–G`.

### 12C

**A.**
1. Kwas deoksyrybonukleinowy.
2. Cukier (deoksyryboza) + fosforan + zasada.
3. A, T, C, G; pary A–T, C–G.
4. W kolejności zasad (sekwencji).

**B.**
5. `T–C–A–G`.
6. Tymina łączy się z adeniną (A–T).
7. DNA to kwas nukleinowy, nie białko.

**C.**
8. Umożliwia wierne kopiowanie i odczyt; każda nić może być matrycą.
9. DNA = cała cząsteczka; gen = odcinek DNA z informacją o produkcie.
10. Różne kombinacje alleli + crossing-over + losowe łączenie gamet (L015).

**D.**
11. RNA ma: rybozę (nie deoksyrybozę), U (nie T), zwykle jedną nić (nie dwie).
12. C–G ma 3 wiązania wodorowe, A–T tylko 2 → C–G trwalsze.
13. Kod zdegenerowany (wiele kodonów → ten sam aminokwas) lub zmiana poza istotnym miejscem.

### 12D

1. `TACGG` — ale **nie wiesz, która jest „starsza"**. Obie nici są równoważne (obie mogą być matrycą).
2. **Nie niosą tej samej informacji.** Różnica na pozycji 4 (C vs G) zmienia sekwencję → potencjalnie inne białko.
3. **Tak, ale pojemność byłaby mniejsza.** Z 3 zasadami: 3ⁿ zamiast 4ⁿ. Dla 10 nukleotydów: 3¹⁰ = 59 049 vs 4¹⁰ ≈ 1 000 000. Około **17 razy mniej** kombinacji.

### Sposób oceniania

- **Podstawa:** 1 pkt.
- **Trening:** 1 pkt za wynik + 1 pkt za uzasadnienie.
- **Ambitne:** 2 pkt.
- **Zaawansowane:** 3 pkt.

---

## 14. Fiszki · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---|---|
| DNA | Kwas deoksyrybonukleinowy — nośnik informacji |
| Nukleotyd | Cukier + fosforan + zasada |
| Zasady DNA | A, T, C, G |
| Pary | A–T, C–G |
| Gdzie informacja? | W kolejności zasad |
| Gen vs DNA | Gen = odcinek DNA |
| Puryna + pirymidyna | Stała szerokość helisy |
| A–T vs C–G — wiązania | 2 vs 3 |
| RNA — różnica | Ryboza, U zamiast T, jedna nić |
| Deoksyryboza | Cukier DNA |
| Antyrównoległość | Jedna nić 5'→3', druga 3'→5' |
| Transkrypcja | DNA → RNA |
| Translacja | RNA → białko |
| Kod zdegenerowany | Wiele kodonów → ten sam aminokwas |
| Kto odkrył helisę? | Watson, Crick (1953), dane: Franklin, Wilkins |

---

## 15. Test końcowy (3+2+2+1) · **[TRENING]**

1. (P) Co to DNA?
2. (P) Z czego nukleotyd?
3. (P) Pary zasad?
4. (T) Uzupełnij: `G–A–T–C`.
5. (T) Popraw: „DNA jest białkiem".
6. (A) Dlaczego komplementarność jest kluczowa?
7. (A) Czym różni się gen od DNA?
8. (Z) Dlaczego zmiana jednej zasady może nie zmienić fenotypu? (kod zdegenerowany)

### Odpowiedzi

1. Kwas deoksyrybonukleinowy — nośnik informacji genetycznej.
2. Cukier (deoksyryboza) + fosforan + zasada azotowa.
3. A–T, C–G.
4. `C–T–A–G`.
5. DNA to kwas nukleinowy, nie białko.
6. Umożliwia wierne kopiowanie i odczyt.
7. DNA = cząsteczka; gen = odcinek.
8. Kod zdegenerowany — wiele kodonów koduje ten sam aminokwas.

---

## 16. Checklista

- [ ] Wiem, czym jest DNA i gdzie jest informacja.
- [ ] Znam budowę nukleotydu.
- [ ] Znam A, T, C, G i pary A–T, C–G.
- [ ] Rozumiem, że kolejność = informacja.
- [ ] Umiem uzupełnić nić komplementarną.
- [ ] Odróżniam DNA od genu.
- [ ] Rozumiem różnicę przechowywanie vs odczyt (ambitny).
- [ ] Znam historię odkrycia helisy (ambitny).
- [ ] Wiem, co to kod zdegenerowany (zaawansowany).

---

## 17. Mapa pojęć

```
DNA
├── nukleotyd (cukier + fosforan + zasada)
├── pary: A–T (2 wiązania) · C–G (3 wiązania)
├── podwójna helisa (antyrównoległa)
├── informacja = kolejność zasad
├── gen (odcinek) → RNA → białko → cecha
├── DNA vs RNA (T vs U, 2 nici vs 1)
└── replikacja (L013) / ekspresja (transkrypcja + translacja)
```

---

## 18. Co dalej? Jak się uczyć?

**Następna lekcja:** L012 — chromosom, kariotyp.

**Most wstecz:** L001 (jądro) + L010 (gen = odcinek DNA) → L011 (budowa DNA).

### Plan nauki

1. Ściąga (5 min).
2. Przykład prowadzony + uzupełnianie nici (5–7 min).
3. Mini-check (3 min).
4. Ćwiczenia A–B, potem C–D (10–15 min).
5. Fiszki (5 min).
6. Test końcowy (8–10 min).
7. Wróć do Kliniki błędów przy pomyłkach.

### System powtórek (spaced)

| Kiedy | Co | Czas |
|---|---|---|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

---

## 19. Słownik

| Termin | Definicja |
|---|---|
| DNA | Kwas deoksyrybonukleinowy — nośnik informacji genetycznej |
| Nukleotyd | Cukier + fosforan + zasada |
| Deoksyryboza | Cukier w DNA |
| Ryboza | Cukier w RNA |
| Puryna | Duża zasada (A, G) |
| Pirymidyna | Mała zasada (T, C, U) |
| Komplementarność | Reguła parowania zasad (A–T, C–G) |
| Podwójna helisa | Dwie komplementarne nici owinięte wokół siebie |
| Antyrównoległość | Nici biegną w przeciwnych kierunkach (5'→3' i 3'→5') |
| Gen | Odcinek DNA z informacją o produkcie |
| Allel | Wersja genu |
| Transkrypcja | Przepisanie DNA na RNA |
| Translacja | Synteza białka na podstawie RNA |
| Kodon | Trójka nukleotydów kodująca aminokwas |
| Kod zdegenerowany | Wiele kodonów koduje ten sam aminokwas |
| mtDNA | DNA mitochondrialny (poza jądrem) |

---

## 20. Dodatek zaawansowany · **[ZAAWANSOWANY]**

### 20.1. Historia odkrycia — pełniej

**1869 — Miescher:** izolacja „nukleiny" z jąder komórkowych.  
**1944 — Avery, MacLeod, McCarty:** dowód, że DNA przenosi informację genetyczną (doświadczenie z pneumokokami).  
**1950 — Chargaff:** reguła %A = %T, %C = %G.  
**1952 — Hershey i Chase:** potwierdzenie, że DNA (a nie białko) jest materiałem genetycznym (doświadczenie z bakteriofagami).  
**1952 — Franklin i Wilkins:** zdjęcia rentgenowskie DNA (słynne „Zdjęcie 51").  
**1953 — Watson i Crick:** model podwójnej helisy w „Nature".  
**1962 — Nagroda Nobla** (Watson, Crick, Wilkins; Franklin zmarła w 1958).

### 20.2. Szerokość helisy i liczby

- Średnica helisy ≈ **2 nm**.
- Jeden skręt helisy ≈ **3,4 nm** (10 par zasad).
- Odległość między parami zasad ≈ **0,34 nm**.
- Długość DNA w jednej komórce ludzkiej ≈ **2 m** (upakowane w jądrze o średnicy ~6 µm).

### 20.3. Rodzaje RNA

- **mRNA** (messenger) — kopia robocza genu; niesie informację z jądra do rybosomu.
- **tRNA** (transfer) — transportuje aminokwasy do rybosomu; ma antykodon.
- **rRNA** (ribosomal) — buduje rybosomy.
- **Inne:** miRNA, siRNA (regulacja ekspresji — poziom olimpijski).

### 20.4. Mutacje ciche vs missense vs nonsense

| Typ mutacji | Co się dzieje | Skutek |
|---|---|---|
| **Cicha** (silent) | Kodon zmienia się na inny kodujący **ten sam** aminokwas | Brak zmiany białka |
| **Missense** | Kodon koduje **inny** aminokwas | Możliwa zmiana funkcji |
| **Nonsense** | Kodon zmienia się na **stop** | Białko skrócone (zwykle nieaktywne) |
| **Frameshift** | Przesunięcie ramki odczytu (delecja/insercja) | Zwykle poważna |

**Szczegóły — w L020 (mutacje) i L090 (extra olimpijska).**

### 20.5. Zadanie olimpijskie

**Pytanie:** Sekwencja DNA: `TAC GCA TGG`. Jaka sekwencja mRNA?

**Rozwiązanie:**
- T → A
- A → U
- C → G
- G → C
- C → G
- A → U
- T → A
- G → C
- G → C

**Odpowiedź:** `AUG CGU ACC`.

---

## 21. Połączenia międzyprzedmiotowe

- **Chemia:** kwasy nukleinowe, wiązania wodorowe, struktura cząsteczek.
- **Matematyka:** kombinatoryka (4ⁿ), potęgi.
- **Informatyka:** kod binarny vs kod czteroliterowy, kompresja informacji.
- **Historia:** odkrycie DNA — Watson, Crick, Franklin.
- **Medycyna:** diagnostyka genetyczna, testy DNA.

---

## 22. Zadania z życia codziennego

1. Dlaczego DNA nazywa się „kodem życia"?
2. Jak wykorzystuje się testy DNA w kryminalistyce i ustalaniu ojcostwa?
3. Czy bliźniaki jednojajowe mają identyczne DNA? (Tak, z drobnymi wyjątkami mutacji somatycznych).
4. Dlaczego nawet krótka sekwencja DNA może być unikalna dla człowieka?
5. Jak działa szczepionka mRNA? (Uproszczenie: dostarcza „instrukcję" na białko, żeby organizm wytworzył odpowiedź immunologiczną.)

---

## 23. STATUS LEKCJI (wersja przebudowana)

**Wersja 5.0 (2026-09-13)** — przebudowa „od podstaw do zaawansowanych".

**Zachowano całą treść v3.8/v3.9.1.**

**Dodano:**
- sekcję 0 (wprowadzenie — historia odkrycia DNA, dlaczego to ważne),
- pełne wyjaśnienie definicji z kontekstem (sekcja 5.1–5.7),
- logikę narzędzia (dlaczego helisa — analogia zamka błyskawicznego — sekcja 6.1),
- pełny tok rozumowania w przykładach (sekcja 6.3–6.7),
- osobną, rozbudowaną sekcję o ekspresji genu i centralnym dogmacie (sekcja 7),
- ograniczenia modelu (sekcja 9),
- rozbudowaną tabelę błędów (sekcja 10.1) + 5 pełnych przykładów Kliniki 2.0,
- tabelę zbiorczą DNA vs RNA (sekcja 5.7, 8.2),
- historię odkrycia (sekcja 0, 20.1),
- rozkład „ile kombinacji" (sekcja 4, 20.2),
- zadania z życia rozszerzone o szczepionki mRNA (sekcja 22).

**Zasada:** nic nie usunięto — tylko rozbudowano.

---

**Koniec L011 MASTER v5.0 (przebudowana)**

---

# Podsumowanie — porównanie z poprzednią wersją

| Element | v3.9.1 | v5.0 |
|---|---|---|
| Wprowadzenie | Brak | Sekcja 0 — historia odkrycia DNA (Miescher → Watson/Crick), dlaczego ważne |
| Definicje | Tabela bez wyjaśnień | Tabela + pełne wyjaśnienie + przykłady + „skąd się bierze" |
| 80/20 | Suche hasła | Hasła + wyjaśnienie, dlaczego to 80% efektu |
| Logika helisy | „Dwie nici" | Analogia zamka błyskawicznego + wyjaśnienie funkcji |
| Ekspresja genu | Brak osobnej sekcji | Sekcja 7 — transkrypcja + translacja + kod genetyczny |
| Historia | Brak | Miescher, Avery, Chargaff, Franklin, Watson/Crick |
| Przykłady | Skrótowe | Pełny tok: dane → kroki → wynik → interpretacja |
| Klinika błędów | 6 wierszy | 9 wierszy + 5 pełnych przykładów Kliniki 2.0 |
| DNA vs RNA | Tabela | Tabela + osobna sekcja (5.7, 8.2) |
| Rozkład 4ⁿ | Wzmianka | Sekcja 4, 20.2 — konkretne wartości |
| Status | v3.9.1 | v5.0 — wyraźne oznaczenie przebudowy |

---

Chcesz, żebym teraz wygenerował **pełny HTML** na podstawie tego MD (analogiczny do L017 v5.0)? Mogę też wybrać **inną lekcję** (np. L015 — mejoza, L020 — mutacje) do podobnej przebudowy.

## DOPISEK v5.1 — precyzja bez ubytku treści

HTML: `BIO_011_v06_jak_DNA_przechowuje_informacje.html` (bez paska postępu i checkboxów TOC).

**Rdzeń E8:** DNA = nośnik; nukleotyd; A T C G; A–T / C–G; helisa; informacja = kolejność; DNA ≠ gen ≠ chromosom; krótkie DNA vs RNA.

**FIX par:** A–C / G–T mają układ duża+mała, ale **nie** prawidłowe wiązania wodorowe Watsona–Cricka. Nie mówić, że „psują szerokość”.

**FIX skutku sekwencji:** ATGCC ≠ ATGGC jako zapis; skutek dla cechy **niepewny** bez kontekstu (gen / intron / regulator / kodon synonimiczny).

**Gen:** produkt = białko **albo** funkcjonalne RNA.

**Chromosom (szkoła):** DNA + białka, wiele genów. Nie „zawsze jedna cała cząsteczka w każdej sytuacji”.

**Odczyt:** szkolnie liniowy jak tekst. Extra: nakładające się geny.

**Dla chętnych (zostaje w lekcji, oznaczone):** 5′–3′, 2 vs 3 wiązania, mtDNA, kod zdegenerowany, silent/missense/nonsense/frameshift, tRNA/rRNA, 2 nm / 3,4 nm, pełna historia.

**Ćwiczenia extra:** DNA/gen/chromosom uzupełnianie; czy ATGCC vs ATGGC = inna cecha? (niekoniecznie); matryca 3′–TAC GGA TTT–5′ → mRNA 5′–AUG CCU AAA–3′.


## WARSTWA HTML L011 v6.3

HTML kanon wizualny: `BIO_011_v06_jak_DNA_przechowuje_informacje.html` (v6.3).

**Nowe warstwy wizualne (zostają w HTML; w MD opis):**
- karty par A–T (2 wiązania) vs C–G (3 wiązania)
- puryna szersza / pirymidyna węższa → stała szerokość helisy
- nukleotyd: zasada + cukier + P
- drabina 5′/3′ + helisa w przeciwfazie
- dwie sekwencje obok siebie, wyróżniona różnica
- trener komplementarności DNA→DNA i DNA→RNA

**FIX merytoryczny (zostaje):** para musi mieć szerokość **oraz** pasujące wiązania; A–C/G–T to też duża+mała, ale zły układ H-bond. Gen = produkt białko **albo** RNA. Zmiana sekwencji ≠ zawsze inne białko.

<!-- ==================== END L011 ==================== -->


<!-- ==================== BEGIN L012 ==================== -->

# L012 — Jak DNA jest upakowane w chromosomach?

## KARTA LEKCJI L012

- Numer: L012
- Tytuł roboczy: Jak DNA jest upakowane
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L011 · Następna: L013
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L012_CHROMOSOMY.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Upakowanie DNA.

`[BIO: DIAGRAM type=FLOW]`
`DNA → chromatyna → chromosom → chromatydy`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** X nie oznacza automatycznie dwóch chromosomów.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L011  
**Następna lekcja:** L013  
**Źródło synchronizacji:** `BIO_012_v08_jak_DNA_jest_upakowane_w_chromosomach.html` v8.1

> **Zasada redakcyjna tej wersji:** treść wcześniejszego L012 zostaje zachowana, a elementy dodane lub doprecyzowane w HTML v8.1 są przeniesione do MD jako treść merytoryczna. Interaktywne widgety HTML są tutaj opisane jako modele/ćwiczenia, a nie jako kod.

---

## 0. Wprowadzenie + historia + minimum konieczne

### O co tu właściwie chodzi?

W lekcji L011 poznajesz DNA — cząsteczkę, która przechowuje informację genetyczną. Tutaj pojawia się problem:

**DNA jednej komórki ludzkiej ma około 2 metrów długości w fazie G1**, jeśli rozciągnąć cały materiał DNA, a musi zmieścić się w jądrze o średnicy kilku mikrometrów.

Po replikacji ilość DNA w komórce przed podziałem jest około dwukrotnie większa — można mówić o około **4 metrach DNA** w całej komórce, mimo że liczba chromosomów nie zwiększyła się.

To nie oznacza, że DNA jest wrzucone do jądra jak kłębek. DNA jest wielokrotnie organizowane i upakowywane z udziałem białek, dzięki czemu:

- mieści się w jądrze,
- nie tworzy przypadkowego kłębowiska,
- może być kopiowane,
- może być odczytywane,
- a podczas podziału może zostać sprawnie rozdzielone do komórek potomnych.

Odpowiedź prowadzi przez kolejne poziomy organizacji materiału genetycznego — aż do silnie skondensowanych chromosomów widocznych podczas podziału.

### Trzy rzeczy, które trzeba wiedzieć na starcie

1. **Chromosomy są w komórce cały czas.**  
   Nie „pojawiają się” dopiero w mitozie. W interfazie materiał chromosomowy jest zwykle mniej skondensowany, dlatego nie widać wyraźnych struktur w kształcie pałeczek lub X.

2. **Replikacja nie zwiększa liczby chromosomów.**  
   Po replikacji wzrasta liczba chromatyd i cząsteczek DNA, ale w typowej komórce człowieka nadal mamy 46 chromosomów.

3. **W anafazie mitozy liczba chromosomów w całej dzielącej się komórce chwilowo wynosi 92.**  
   Dzieje się tak dlatego, że chromatydy siostrzane rozdzielają się i każda z nich staje się osobnym chromosomem jednochromatydowym. Po zakończeniu podziału każda komórka potomna ma 46 chromosomów.

### Historia odkrycia chromosomów — minimum kontekstu

| Rok | Badacz / wydarzenie | Znaczenie |
|---|---|---|
| 1842 | Carl Nägeli | obserwacje struktur („ciałek”) w jądrze komórkowym roślin |
| 1879 | Walther Flemming | badania struktur jądrowych i wprowadzenie terminu „chromatyna” |
| 1888 | Wilhelm Waldeyer | wprowadzenie terminu „chromosom” |
| 1902 | Walter Sutton i Theodor Boveri | rozwój chromosomowej teorii dziedziczenia |
| 1956 | Joe Hin Tjio i Albert Levan | ustalenie prawidłowej liczby chromosomów człowieka: 46 |

**To jest materiał kontekstowy, nie rdzeń E8.**

### Zatrzymaj się: minimum konieczne

Jeżeli masz zapamiętać tylko najważniejszy rdzeń przed dalszą nauką:

- chromosomy są obecne przez cały czas, ale najlepiej widoczne podczas podziału,
- po replikacji człowiek nadal ma 46 chromosomów, ale 92 chromatydy i 92 cząsteczki DNA,
- **liczbę chromosomów wyznaczamy według liczby centromerów**,
- w anafazie mitozy cała dzieląca się komórka ma chwilowo 92 chromosomy,
- po zakończeniu mitozy każda komórka potomna ma 46 chromosomów.

---

## 1. Pytanie przewodnie

**Jak bardzo długa cząsteczka DNA mieści się w małym jądrze i jak jest zorganizowana podczas podziału?**

---

## 2. Cele lekcji

### [PODSTAWA E8]

Po tej lekcji uczeń:

- wyjaśnia, czym jest chromosom,
- rozróżnia chromosom przed i po replikacji,
- podaje liczbę chromosomów człowieka: **46 = 23 pary**,
- rozróżnia autosomy (pary 1–22) i chromosomy płci,
- zna szkolny model XX/XY,
- rozumie pojęcia chromatyda i centromer,
- liczy chromosomy, chromatydy i cząsteczki DNA według reguły centromerów,
- potrafi uwzględnić anafazę w zadaniu dotyczącym liczby chromosomów.

### [MASTER]

Uczeń:

- wyjaśnia, dlaczego po replikacji liczba chromosomów się nie zmienia,
- rozróżnia chromatynę i chromosom,
- rozróżnia chromosomy homologiczne i chromatydy siostrzane,
- rozumie, dlaczego kształt „X” nie oznacza dwóch chromosomów.

### [ZAAWANSOWANY]

Uczeń:

- zna pojęcia kariotyp i kariogram,
- zna ideę nukleosomu,
- zna histony,
- zna ramiona p i q,
- rozumie aneuploidię i nondysjunkcję,
- potrafi liczyć dla dowolnej liczby diploidalnej `2n`, a nie tylko dla człowieka.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|---|---|
| 46 chromosomów = 23 pary | podstawowa liczba dla człowieka |
| Chromatyda + centromer | podstawa wszystkich zadań liczbowych |
| Liczba chromosomów = liczba centromerów | najważniejsza reguła |
| Po replikacji: 46 / 92 / 92 | chroni przed błędem „92 chromosomy” |
| Anafaza: chwilowo 92 chromosomy w całej komórce | chroni przed błędem „46 zawsze” |
| Homologiczne ≠ siostrzane | fundament dalszej genetyki |

---

## 3. Co trzeba wiedzieć wcześniej (kompas) · [PRZYPOMNIENIE]

### L011 — DNA

- DNA jest nośnikiem informacji genetycznej,
- nukleotydy tworzą nić DNA,
- obowiązuje komplementarność A–T i C–G,
- DNA ma strukturę podwójnej helisy.

### L001 — komórka

- jądro komórkowe zawiera większość DNA komórki eukariotycznej,
- DNA jest zorganizowane w obrębie materiału chromosomowego.

---

## 4. Zacznij od problemu

W jednej komórce człowieka znajduje się około **2 m DNA w fazie G1**. Po replikacji ilość DNA jest około dwukrotnie większa, czyli około **4 m** w całej komórce przed podziałem.

A mimo to DNA nadal musi zmieścić się w jądrze o średnicy kilku mikrometrów.

**Pytania:**

1. Jak DNA może zmieścić się w tak małej przestrzeni?
2. Dlaczego podczas podziału widzimy wyraźne „pałeczki”, skoro DNA jest obecne także wcześniej?
3. Dlaczego po replikacji nie mówimy o 92 chromosomach?
4. Dlaczego w anafazie liczba chromosomów w całej dzielącej się komórce może wynosić 92?

**Hipoteza ucznia:**  
....................................................................

**Podpowiedź:** pomyśl o bardzo długiej nici, która musi być uporządkowana i wielokrotnie złożona, ale jednocześnie musi pozostać dostępna dla procesów zachodzących w komórce.

---

# 5. Ściąga — definicje precyzyjne · [PODSTAWA E8]

## 5.1. Co to chromosom?

**Chromosom to uporządkowana struktura zbudowana z DNA i białek, głównie histonów.**

W szkolnym opisie:

- przed replikacją chromosom zawiera **jedną cząsteczkę DNA**,
- po replikacji jeden chromosom ma **dwie chromatydy siostrzane**, a więc dwie cząsteczki DNA połączone w obszarze centromeru,
- chromosomy są obecne w komórce cały czas,
- podczas podziału stają się bardzo silnie skondensowane i dlatego są łatwiej widoczne.

> **Nie myl istnienia chromosomu z jego widocznością.**  
> „Nie widzę wyraźnego chromosomu” nie znaczy „chromosomu nie ma”.

### Najważniejsza korekta pojęciowa

Chromosom **nie zawsze oznacza jedną cząsteczkę DNA**.

- przed replikacją: 1 chromosom → 1 cząsteczka DNA,
- po replikacji: 1 chromosom → 2 chromatydy → 2 cząsteczki DNA,
- po rozdzieleniu chromatyd: każda dawna chromatyda staje się osobnym chromosomem jednochromatydowym.

---

## 5.2. Chromatyna — co to właściwie jest?

**Chromatyna to DNA połączone z białkami, przede wszystkim histonami, o różnym stopniu kondensacji.**

W interfazie znaczna część chromatyny jest mniej skondensowana niż podczas mitozy. Ułatwia to dostęp do wielu genów.

Nie całe DNA jest jednak jednakowo luźne:

- niektóre fragmenty pozostają silniej upakowane,
- stopień upakowania może się różnić w różnych obszarach,
- stopień kondensacji wpływa na dostępność DNA dla procesów komórkowych.

Przed podziałem i w trakcie podziału kondensacja chromatyny wzrasta.

### Ważne

**Chromatyna nie występuje wyłącznie w interfazie.**

Chromosom metafazowy także jest zbudowany z chromatyny — jest ona wtedy maksymalnie skondensowana.

---

## 5.2a. Chromatyna i chromosom — nie są przeciwieństwami

| Pojęcie | Co opisuje? |
|---|---|
| **Chromatyna** | DNA połączone z białkami, o określonym stopniu kondensacji |
| **Chromosom** | odrębnie zorganizowana jednostka materiału chromosomowego |
| **Chromosom metafazowy** | silnie skondensowana postać materiału chromosomowego |

Najkrócej:

> **Chromatyna opisuje materiał i jego upakowanie, a chromosom — jedną zorganizowaną jednostkę tego materiału.**

Nie są to dwie różne substancje.

---

## 5.3. Jak DNA się upakowuje?

### Ważne zastrzeżenie do modelu

W szkolnych materiałach można spotkać schemat:

```text
DNA
↓
nukleosomy
↓
włókno chromatyny
↓
pętle chromatyny
↓
silnie skondensowana chromatyna
↓
chromosom
```

To **model dydaktyczny**, a nie dosłowna instrukcja przedstawiająca każdy etap organizacji chromatyny w żywej komórce.

Współczesna wiedza pokazuje, że organizacja chromatyny jest dynamiczna i trójwymiarowa. Nie wszystkie etapy tworzą jeden sztywny, jednakowy łańcuch.

Na poziomie E8 najważniejsze jest:

1. DNA wiąże się z białkami, m.in. histonami.
2. Powstają nukleosomy.
3. Chromatyna może być różnie skondensowana.
4. Przed podziałem chromosomy ulegają silnej kondensacji.
5. Silna kondensacja ułatwia ich uporządkowane rozdzielenie.

### Uproszczony obraz poziomów upakowania

```text
DNA → nukleosomy → wyższe poziomy organizacji chromatyny
→ pętle i domeny → silna kondensacja → chromosom metafazowy
```

W niektórych podręcznikach pojawia się termin **„włókno 30 nm”** lub model **„solenoidu”**. Należy traktować je jako uproszczone modele organizacji chromatyny, a nie jako jedyny dokładny opis jej struktury w żywej komórce.

---

## 5.4. Chromatyda — definicja precyzyjna

**Chromatyda to jedna kopia DNA należąca do chromosomu.**

Po replikacji:

- powstają dwie kopie,
- są one połączone w obszarze centromeru,
- nazywamy je **chromatydami siostrzanymi**.

Każda chromatyda zawiera **jedną cząsteczkę DNA**.

Po rozdzieleniu w anafazie każda dawna chromatyda staje się **osobnym chromosomem jednochromatydowym**.

### Uwaga językowa

W zadaniach szkolnych słowo „chromatyda” najczęściej oznacza jedną z dwóch chromatyd siostrzanych chromosomu po replikacji.

Po anafazie bezpieczniej mówić:

> **chromosom jednochromatydowy**

---

## 5.5. Ten sam chromosom w trzech sytuacjach

### Przed replikacją

```text
1 chromosom
1 chromatyda
1 cząsteczka DNA
1 centromer
```

### Po replikacji

```text
1 chromosom
2 chromatydy siostrzane
2 cząsteczki DNA
1 centromer
```

### Po rozdzieleniu chromatyd — anafaza

```text
2 chromosomy jednochromatydowe
2 chromatydy
2 cząsteczki DNA
2 centromery
```

### Najważniejsze

**To, ile jest chromosomów, zależy od liczby centromerów w danym momencie.**

---

## 5.6. Co znaczy „23 pary chromosomów”? · pary homologiczne

W typowej komórce somatycznej człowieka występują:

**46 chromosomów = 23 pary.**

W każdej parze homologicznej:

- jeden chromosom pochodzi od matki,
- drugi od ojca,
- chromosomy mają podobną budowę,
- zawierają geny dotyczące tych samych cech w odpowiadających sobie miejscach,
- mogą jednak zawierać różne allele.

### Nie myl dwóch rodzajów „par”

**Chromosomy homologiczne:**

```text
od mamy ↔ od taty
```

**Chromatydy siostrzane:**

```text
kopia ↔ kopia
tego samego chromosomu po replikacji
```

### Kluczowe rozróżnienie

> **Homologiczne = podobne chromosomy od różnych rodziców.**  
> **Siostrzane = kopie tego samego chromosomu powstałe w replikacji.**

---

## 5.7. Kariotyp i kariogram

### Kariotyp

**Kariotyp to zestaw chromosomów obecnych w komórce**, opisywany m.in. liczbą chromosomów i chromosomami płci.

Przykłady:

- `46, XX`
- `46, XY`
- `47, XX, +21`
- `47, XY, +21`
- `45, X`
- `47, XXY`

### Kariogram

**Kariogram to uporządkowany obraz lub schemat chromosomów**, zwykle zestawionych parami.

Mnemonika:

```text
kario-TYP = zestaw
kario-GRAM = obraz
```

> W części podręczników termin „kariotyp” bywa używany szerzej, także na określenie przedstawienia chromosomów. W tej lekcji przyjmujemy wygodne rozróżnienie: **kariotyp = zestaw, kariogram = jego obraz**.

---

## 5.8. XX/XY — typowy model szkolny

W typowym szkolnym modelu:

```text
XX → płeć żeńska
XY → płeć męska
```

Komórka jajowa typowo wnosi chromosom **X**.

Plemnik może wnieść:

- **X** → zygota XX,
- **Y** → zygota XY.

Dlatego w tym uproszczonym modelu rodzaj chromosomu płci wniesionego przez plemnik decyduje, czy powstanie zygota XX czy XY.

> Rozwój płci człowieka jest biologicznie bardziej złożony niż sam zapis XX/XY. Na poziomie E8 stosujemy model szkolny.

---

## 5.9. Mnemotechniki

| # | Mnemotechnika | Znaczenie |
|---|---|---|
| 1 | **46 = 44 + XX/XY** | 22 pary autosomów + para chromosomów płci |
| 2 | **Licz według centromerów** | najważniejsza reguła liczenia |
| 3 | **Chromatyda = jedna z dwóch kopii** | po replikacji |
| 4 | **XX / XY** | typowy szkolny model płci |
| 5 | **2n = 46, n = 23** | diploidalność / haploidalność |
| 6 | **Chromatyna = DNA + białka** | materiał o różnym stopniu kondensacji |
| 7 | **Homologiczne = mama + tata** | chromosomy homologiczne |
| 8 | **Siostrzane = kopie** | chromatydy siostrzane |
| 9 | **X ≠ 2 chromosomy** | X zwykle przedstawia jeden chromosom po replikacji |
| 10 | **Anafaza = rozdzielenie** | po rozdzieleniu chromatyd powstają chromosomy jednochromatydowe |

---

## 5.10. Tabela zbiorcza — chromosom, chromatyda, centromer

| Termin | Definicja | Kluczowe skojarzenie |
|---|---|---|
| **Chromatyna** | DNA + białka, o różnym stopniu kondensacji | materiał |
| **Chromosom** | uporządkowana jednostka materiału chromosomowego | jednostka |
| **Chromatyda** | jedna kopia DNA należąca do chromosomu | kopia |
| **Chromatydy siostrzane** | dwie kopie tego samego chromosomu po replikacji | kopie połączone |
| **Centromer** | wyspecjalizowany obszar chromosomu; po replikacji uczestniczy w utrzymaniu połączenia chromatyd | liczenie |
| **Kinetochor** | struktura białkowa tworząca się w obrębie centromeru; miejsce przyłączenia mikrotubul wrzeciona | podział |
| **Nukleosom** | DNA nawinięte na oktamer histonów | upakowanie |

### Doprecyzowanie centromeru i kinetochoru

Centromer nie powinien być przedstawiany po prostu jako „kropka, do której przyczepia się wrzeciono”.

Precyzyjniej:

> **W obrębie centromeru tworzy się kinetochor, do którego przyłączają się mikrotubule wrzeciona podziałowego.**

W zadaniach szkolnych nadal używamy praktycznej reguły:

> **liczba chromosomów = liczba centromerów.**

---

## 5.11. Skąd wiemy, że liczymy właśnie centromery?

Reguła „liczba chromosomów = liczba centromerów” nie jest przypadkowym sposobem liczenia.

### Eksperyment myślowy

Załóżmy, że po replikacji zaczniemy liczyć chromatydy zamiast chromosomów.

1. Przed replikacją: 46 chromosomów i 46 chromatyd.
2. Po replikacji: 46 chromosomów, ale 92 chromatydy.
3. W anafazie: chromatydy rozdzielają się i każda staje się osobnym chromosomem, więc cała komórka ma chwilowo 92 chromosomy.

Gdybyśmy utożsamiali chromosom z chromatydą, liczba „chromosomów” zmieniałaby się przy samym kopiowaniu DNA.

Dlatego w szkolnym liczeniu korzystamy z centromerów:

> **Jednostkę chromosomu śledzimy przez centromer.**

### Analogia — zszyta książka

Wyobraź sobie dwie kopie książki zszyte razem w jednym miejscu.

- dwie części = dwie chromatydy,
- wspólne miejsce połączenia = centromer,
- przed rozdzieleniem opisujemy całość jako jeden chromosom,
- po rozdzieleniu powstają dwa chromosomy jednochromatydowe.

Analogia jest tylko pomocą. Nie należy traktować jej dosłownie jako budowy chromosomu.

---

## 5.12. Ograniczenia modeli

Modele pomagają liczyć i rozumieć, ale upraszczają rzeczywistość.

Nie pokazują m.in.:

- pełnej trójwymiarowej organizacji chromatyny,
- wszystkich białek uczestniczących w organizacji DNA,
- dynamicznej zmiany stopnia kondensacji,
- wszystkich szczegółów budowy kinetochoru,
- całej różnorodności chromosomów między organizmami.

Dlatego:

> **model ma być wystarczająco prosty do nauki, ale nie powinien być mylony z pełnym obrazem biologicznym.**

---

# 6. Wyjaśnienie od podstaw — z anafazą · [PODSTAWA E8]

## 6.1. Dlaczego DNA musi być upakowane?

DNA jest bardzo długie w stosunku do rozmiaru jądra.

Upakowanie:

- zmniejsza zajmowaną przestrzeń,
- porządkuje materiał,
- chroni DNA,
- umożliwia kontrolowany dostęp do jego fragmentów,
- przed podziałem pomaga przygotować materiał do rozdzielenia.

Nie jest to jednak „kompresja informacji” w sensie informatycznym.

> **Upakowanie zmienia rozmieszczenie przestrzenne DNA, ale nie usuwa informacji genetycznej.**

---

## 6.2. Reguła centromerów — najważniejsza rzecz w tej lekcji

### Algorytm

Gdy widzisz schemat:

**Krok 1.** Znajdź centromery.  
**Krok 2.** Policz centromery.  
**Krok 3.** Ta liczba = liczba chromosomów.  
**Krok 4.** Następnie policz chromatydy.  
**Krok 5.** Następnie policz cząsteczki DNA.  
**Krok 6.** Sprawdź, czy pytanie dotyczy całej komórki, jednego bieguna czy jednej komórki potomnej.

### Reguła

```text
LICZBA CHROMOSOMÓW = LICZBA CENTROMERÓW
```

### Najczęstsza pułapka

```text
92 chromatydy ≠ 92 chromosomy
```

po replikacji.

---

## 6.2a. „Centromerometr” — ćwiczenie liczenia

W tym miejscu HTML wykorzystuje interaktywny model. W MD można odtworzyć jego logikę ręcznie.

### Przypadek A

```text
X   X   X   X
```

Jeśli każda struktura X ma jeden centromer:

- 4 centromery,
- 4 chromosomy,
- 8 chromatyd,
- 8 cząsteczek DNA.

### Przypadek B

```text
I   I   I   I   I   I
```

Każda pojedyncza struktura I ma jeden centromer:

- 6 centromerów,
- 6 chromosomów,
- 6 chromatyd,
- 6 cząsteczek DNA.

### Przypadek C

```text
X   X   X
```

- 3 chromosomy,
- 6 chromatyd,
- 6 cząsteczek DNA,
- 3 centromery.

---

## 6.2b. „X nie znaczy dwa”

Struktura w kształcie X zwykle przedstawia:

```text
        chromatyda
             \
              X
             /
        chromatyda
             |
          centromer
```

Czyli:

> **1 chromosom po replikacji = 2 chromatydy + 1 centromer.**

Dwa chromosomy powstają dopiero po rozdzieleniu chromatyd.

---

## 6.2c. Nakładki pojęć — jedna struktura, kilka sposobów patrzenia

Dla chromosomu po replikacji możemy jednocześnie powiedzieć:

- to **1 chromosom**,
- składa się z **2 chromatyd siostrzanych**,
- zawiera **2 cząsteczki DNA**,
- ma **1 centromer**,
- jest silnie skondensowany, jeśli obserwujemy go w metafazie.

To nie są sprzeczne informacje. Każda odpowiada na inne pytanie.

---

## 6.3. Tabela „policz sam” — z anafazą

| Stan komórki | Chromosomy | Chromatydy | Cząsteczki DNA | Co się dzieje? |
|---|---:|---:|---:|---|
| G1, przed S | 46 | 46 | 46 | każdy chromosom ma jedną chromatydę |
| Po fazie S | **46** | **92** | **92** | DNA zostało zreplikowane |
| G2 | **46** | **92** | **92** | komórka przygotowuje się do podziału |
| Metafaza | **46** | **92** | **92** | chromosomy są silnie skondensowane |
| Anafaza — cała komórka | **92** | **92** | **92** | chromatydy rozdzieliły się |
| Anafaza — jeden biegun | **46** | **46** | **46** | do każdego bieguna zmierza pełny zestaw |
| Po mitozie — jedna komórka potomna | **46** | **46** | **46** | każda komórka wraca do stanu jednochromatydowego |

### Bardzo ważna uwaga

W tabelach trzeba odróżniać:

- **całą komórkę**,
- **jeden biegun**,
- **jedną komórkę potomną**.

To samo zdarzenie może dawać różne liczby zależnie od obszaru, o który pyta zadanie.

---

## 6.4. Najczęstsze pytanie: „Czy w anafazie są 92 chromosomy?”

**Tak — jeśli pytanie dotyczy całej dzielącej się komórki człowieka w anafazie mitozy.**

Dlaczego?

1. Przed anafazą mamy 46 chromosomów.
2. Każdy ma dwie chromatydy.
3. Chromatydy siostrzane rozdzielają się.
4. Każda ma teraz własny centromer.
5. Każda staje się osobnym chromosomem jednochromatydowym.
6. W całej komórce jest więc chwilowo **92 chromosomy**.
7. Przy każdym biegunie znajduje się po **46 chromosomów**.
8. Po zakończeniu podziału każda komórka potomna ma **46 chromosomów**.

### Najważniejsze pytanie pomocnicze

> **Czy zadanie pyta o całą komórkę, czy o jeden biegun?**

---

## 6.4a. Zanim policzysz — wskaż obszar

Przed wykonaniem obliczenia dopisz sobie:

```text
[CAŁA KOMÓRKA]
albo
[JEDEN BIEGUN]
albo
[JEDNA KOMÓRKA POTOMNA]
```

Dopiero potem licz.

To prosta technika, która usuwa dużą część błędów.

---

## 6.4b. Mapa liczebności

### Człowiek — 2n = 46

```text
G1:
46 chromosomów
46 chromatyd
46 DNA

PO REPLIKACJI:
46 chromosomów
92 chromatydy
92 DNA

METAFAZA:
46 chromosomów
92 chromatydy
92 DNA

ANAFAZA — CAŁA KOMÓRKA:
92 chromosomy
92 chromatydy
92 DNA

ANAFAZA — JEDEN BIEGUN:
46 chromosomów
46 chromatyd
46 DNA

PO MITOZIE — JEDNA KOMÓRKA:
46 chromosomów
46 chromatyd
46 DNA
```

---

## 6.4c. Kalkulator liczenia — dowolne 2n

Można stosować ten sam algorytm do dowolnego organizmu.

### Jeżeli organizm ma `2n = 8`

Przed S:

```text
8 chromosomów
8 chromatyd
8 DNA
```

Po S / metafaza:

```text
8 chromosomów
16 chromatyd
16 DNA
```

Anafaza — cała komórka:

```text
16 chromosomów
16 chromatyd
16 DNA
```

Anafaza — jeden biegun:

```text
8 chromosomów
8 chromatyd
8 DNA
```

### Reguła ogólna dla `2n`

Przed S:

```text
chromosomy = 2n
chromatydy = 2n
DNA = 2n
```

Po S / metafaza:

```text
chromosomy = 2n
chromatydy = 4n
DNA = 4n
```

Anafaza — cała komórka:

```text
chromosomy = 4n
chromatydy = 4n
DNA = 4n
```

Anafaza — jeden biegun:

```text
chromosomy = 2n
chromatydy = 2n
DNA = 2n
```

---

## 6.4d. Czy liczba chromosomów zależy od organizmu?

Tak.

Przykłady liczby diploidalnej:

| Organizm | 2n |
|---|---:|
| Muszka owocowa | 8 |
| Groszek zwyczajny | 14 |
| Kukurydza | 20 |
| Człowiek | 46 |
| Szympans | 48 |
| Pies | 78 |

### Wniosek

**Liczba chromosomów jest cechą gatunkową, ale nie jest miarą „złożoności” organizmu.**

Pies ma więcej chromosomów niż człowiek, ale nie oznacza to, że jest „bardziej złożonym” organizmem.

---

## 6.5. Oś cyklu komórkowego — wersja do nauki

```text
G1
↓
replikacja DNA — faza S
↓
G2
↓
profaza
↓
metafaza
↓
anafaza
↓
telofaza
↓
komórki potomne
```

### Kluczowe punkty

**G1:**

```text
46 chromosomów / 46 chromatyd / 46 DNA
```

**Po S / G2 / metafaza:**

```text
46 chromosomów / 92 chromatydy / 92 DNA
```

**Anafaza — cała komórka:**

```text
92 chromosomy / 92 chromatydy / 92 DNA
```

**Po podziale — jedna komórka potomna:**

```text
46 chromosomów / 46 chromatyd / 46 DNA
```

---

## 6.5a. Trening na małej liczbie — 2n = 6

Zamiast człowieka użyjmy organizmu z `2n = 6`.

### Przed S

```text
6 chromosomów
6 chromatyd
6 DNA
```

### Po S

```text
6 chromosomów
12 chromatyd
12 DNA
```

### Metafaza

```text
6 chromosomów
12 chromatyd
12 DNA
```

### Anafaza — cała komórka

```text
12 chromosomów
12 chromatyd
12 DNA
```

### Anafaza — jeden biegun

```text
6 chromosomów
6 chromatyd
6 DNA
```

**Ćwiczenie:** wykonaj to samo dla `2n = 10`.

---

## 6.6. Autosomy i chromosomy płci

U człowieka:

```text
46 chromosomów
= 44 autosomy
+ 2 chromosomy płci
```

czyli:

```text
22 pary autosomów
+ 1 para chromosomów płci
```

Typowy szkolny zapis:

```text
46, XX
46, XY
```

Gamety są haploidalne:

```text
n = 23
```

---

## 6.7. Przykład prowadzony

**Dane:** komórka somatyczna człowieka w metafazie mitozy.

**Pytanie:** ile ma chromosomów, chromatyd i cząsteczek DNA?

### Krok 1

Człowiek:

```text
2n = 46
```

### Krok 2

Metafaza występuje po replikacji:

```text
każdy chromosom ma 2 chromatydy
```

### Krok 3

Liczymy centromery:

```text
46 centromerów → 46 chromosomów
```

### Krok 4

Chromatydy:

```text
46 × 2 = 92
```

### Krok 5

Cząsteczki DNA:

```text
92
```

### Odpowiedź

**46 chromosomów · 92 chromatydy · 92 cząsteczki DNA.**

---

## 6.8. Powiązanie z innymi lekcjami

```text
L011 — DNA
      ↓
L012 — chromosom, chromatyna, chromatyda, centromer
      ↓
L013 — replikacja DNA (faza S)
      ↓
L014 — mitoza
      ↓
L015 — mejoza
      ↓
L017 — dziedziczenie
      ↓
L018 — chromosomy płci / X-linked
      ↓
L020 — mutacje i aneuploidia
```

---

# 7. Poziom ambitny · [MASTER]

## 7.1. Dlaczego upakowanie jest potrzebne?

Upakowanie nie służy tylko „oszczędzaniu miejsca”.

Materiał chromosomowy musi:

- być uporządkowany,
- być chroniony,
- pozostawać dostępny dla ekspresji genów,
- zostać skopiowany,
- zostać właściwie rozdzielony podczas podziału.

Dlatego komórka wykorzystuje różne stopnie kondensacji.

---

## 7.2. Chromatyna vs chromosom

| Cecha | Chromatyna | Chromosom |
|---|---|---|
| Materiał | DNA + białka | DNA + białka |
| Stopień kondensacji | zmienny, często mniejszy w interfazie | silnie skondensowany podczas podziału |
| Widoczność | mniej wyraźna | wyraźniejsza podczas podziału |
| Funkcja | umożliwia organizację i dostęp do DNA | uporządkowana jednostka materiału chromosomowego |

### Najważniejszy wniosek

To nie jest:

```text
chromatyna ALBO chromosom
```

lecz:

```text
chromosom jest zorganizowaną, skondensowaną postacią materiału chromosomowego,
którego podstawą jest chromatyna.
```

---

## 7.3. Inaktywacja X — ciekawostka

U wielu komórek osób z chromosomami XX jeden z chromosomów X ulega silnemu wyciszeniu. Powstaje skondensowana struktura nazywana **ciałkiem Barra**.

To materiał poza rdzeniem E8.

---

## 7.4. Dlaczego X nie oznacza dwóch chromosomów?

Schemat:

```text
X
```

najczęściej oznacza:

```text
1 chromosom
2 chromatydy
1 centromer
```

Nie:

```text
2 chromosomy
```

Dwa chromosomy otrzymujemy po rozdzieleniu chromatyd w anafazie.

---

# 8. Poziom zaawansowany · [ZAAWANSOWANY]

## 8.1. Nukleosom

**Nukleosom** jest podstawową jednostką organizacji chromatyny.

W uproszczonym opisie:

```text
DNA
↓
owija się wokół oktameru histonów
↓
NUKLEOSOM
```

Oktamer tworzą po dwa białka:

- H2A,
- H2B,
- H3,
- H4.

Wokół rdzenia histonowego owinięty jest odcinek około **147 par zasad DNA**.

Nukleosomy mogą być połączone odcinkami DNA linkerowego.

---

## 8.2. Ramiona chromosomu — p i q

Centromer dzieli chromosom na dwa ramiona:

- **p** — krótsze,
- **q** — dłuższe.

To terminologia używana m.in. w opisie kariotypów i lokalizacji genów.

---

## 8.3. Aneuploidia

**Aneuploidia = nieprawidłowa liczba pojedynczych chromosomów.**

Przykłady:

| Kariotyp / zapis | Przykład |
|---|---|
| 47, +21 | trisomia 21 |
| 45, X | monosomia X |
| 47, XXY | dodatkowy chromosom X |
| 47, +18 | trisomia 18 |

Najczęstszym mechanizmem prowadzącym do aneuploidii jest **nondysjunkcja** — nieprawidłowe rozchodzenie się chromosomów lub chromatyd podczas mejozy.

---

## 8.4. Nondysjunkcja

Uproszczony schemat:

```text
błąd w mejozie
↓
gameta n+1 lub n−1
↓
zapłodnienie prawidłową gametą n
↓
zygota 2n+1 lub 2n−1
↓
aneuploidia
```

### Nondysjunkcja w mejozie I

Nie rozchodzą się prawidłowo chromosomy homologiczne.

W uproszczonym przypadku po kolejnych podziałach mogą powstać:

```text
2 gamety n+1
2 gamety n−1
```

### Nondysjunkcja w mejozie II

Błąd dotyczy rozdzielenia chromatyd siostrzanych w jednej z komórek po mejozie I.

To dobry temat do dalszej pracy w L015 i L020.

---

## 8.5. Poliploidia

**Poliploidia = zwielokrotnienie całych zestawów chromosomów**, np.:

```text
3n
4n
```

Jest szczególnie ważna u roślin.

Nie należy mylić:

```text
aneuploidia → zmiana liczby pojedynczych chromosomów
poliploidia → zmiana liczby całych zestawów
```

---

## 8.6. Telomery

**Telomery** to specjalne sekwencje znajdujące się na końcach chromosomów.

Pomagają chronić końce chromosomów i wiążą się z problemem skracania końców DNA podczas kolejnych replikacji.

**Telomeraza** jest enzymem, który może wydłużać telomery w określonych typach komórek.

To materiał poza rdzeniem E8.

---

# 9. Klinika błędów · [PODSTAWA E8] / [TRENING]

## 9.1. Tabela najczęstszych błędów

| Błąd | Poprawa | Dlaczego? |
|---|---|---|
| „Po replikacji jest 92 chromosomy.” | 46 chromosomów, 92 chromatydy | liczymy centromery |
| „Chromatyda to ramię chromosomu.” | chromatyda ≠ ramię | różne pojęcia |
| „XX/XY to autosomy.” | XX/XY = chromosomy płci | autosomy = pary 1–22 |
| „Gameta ma 46 chromosomów.” | gameta ma 23 | mejoza redukuje 2n → n |
| „Chromosomy pojawiają się dopiero w mitozie.” | są obecne także w interfazie | zmienia się stopień kondensacji |
| „W anafazie nadal są chromatydy siostrzane.” | po rozdzieleniu powstają chromosomy jednochromatydowe | siostrzane oznacza połączone kopie |
| „Człowiek zawsze ma 46 chromosomów w każdej chwili.” | zależy od fazy i zakresu pytania | w anafazie cała komórka ma chwilowo 92 |
| „Każdy chromosom wygląda jak X.” | X to zwykle schemat chromosomu po replikacji | kształt zależy od kondensacji i etapu |
| „Kariotyp = zdjęcie.” | kariotyp = zestaw; kariogram = obraz | dwa pojęcia |
| „Liczba chromosomów mówi, jak złożony jest organizm.” | nie | liczba chromosomów nie jest miarą złożoności |

---

## 9.2. Klinika 2.0 — pełne przykłady

### Błąd 1: „W metafazie jest 92 chromosomy”

**Znajdź:**  
Mylenie chromatyd z chromosomami.

**Popraw:**  
46 chromosomów, 92 chromatydy.

**Reguła:**  
Liczymy centromery.

**Dlaczego:**  
Replikacja tworzy kopie DNA, ale nie rozdziela centromerów.

**Pułapka:**  
„Więcej DNA = więcej chromosomów” — fałsz.

---

### Błąd 2: „Chromosomy pojawiają się w mitozie”

**Znajdź:**  
Mylenie istnienia z widocznością.

**Popraw:**  
Chromosomy są obecne cały czas, ale w interfazie materiał chromosomowy jest zwykle mniej skondensowany.

**Reguła:**  
Kondensacja zmienia widoczność.

**Pułapka:**  
„Nie widać” ≠ „nie ma”.

---

### Błąd 3: „W anafazie nadal są chromatydy siostrzane”

**Znajdź:**  
Pomieszanie metafazy z anafazą.

**Popraw:**  
W anafazie chromatydy siostrzane rozdzielają się. Każda staje się chromosomem jednochromatydowym.

**Reguła:**  
Przed rozdzieleniem = chromatydy siostrzane. Po rozdzieleniu = chromosomy jednochromatydowe.

---

### Błąd 4: „46 to zawsze liczba chromosomów”

**Poprawny model:**

```text
G1 → 46
po S → 46
metafaza → 46
anafaza, cała komórka → 92
anafaza, jeden biegun → 46
po mitozie, jedna komórka → 46
gameta → 23
```

---

### Błąd 5: „X oznacza dwa chromosomy”

**Poprawa:**  
Zwykle struktura X oznacza jeden chromosom po replikacji.

```text
1 chromosom
2 chromatydy
1 centromer
```

---

### Prawda czy fałsz?

> „Jeżeli na rysunku widzę strukturę X, to zawsze są to dwa chromosomy.”

**Fałsz.**

W szkolnym schemacie X zwykle przedstawia jeden chromosom po replikacji.

---

# 10. Obserwacja / model · [TRENING]

## 10.1. Model liczenia

**Problem:**  
Jak zmienia się liczba chromatyd i DNA przy stałej liczbie chromosomów?

**Hipoteza:**  
Po replikacji przybywa chromatyd i DNA, ale nie przybywa centromerów.

**Obserwacja/model:**  
46 centromerów → 46 chromosomów.  
92 chromatydy → 92 cząsteczki DNA.

**Wniosek:**  
Liczba chromosomów = liczba centromerów.

**Ograniczenia:**  
Schemat nie pokazuje pełnej organizacji chromatyny, histonów, kinetochoru ani trójwymiarowej struktury jądra.

**BHP:**  
Brak przy pracy z modelem papierowym lub cyfrowym.

---

## 10.2. Wirtualne doświadczenie — kariotyp

Przykładowa procedura laboratoryjna może obejmować:

1. pobranie odpowiedniego materiału biologicznego,
2. uzyskanie komórek dzielących się,
3. zatrzymanie ich w metafazie,
4. wybarwienie chromosomów,
5. wykonanie obrazu mikroskopowego,
6. uporządkowanie chromosomów parami,
7. otrzymanie kariogramu.

W praktyce laboratoryjnej wykorzystuje się odpowiednie procedury i substancje blokujące wrzeciono podziałowe.

> **BHP:** kolchicyna jest substancją silnie toksyczną. Nie wolno jej używać w samodzielnych doświadczeniach szkolnych. Informacja ma charakter biologiczny, nie instruktażowy.

---

# 11. Ćwiczenia · [TRENING]

## 11A. Mini-check

1. Co to chromosom?
2. Ile chromosomów ma typowa komórka somatyczna człowieka?
3. Co to chromatyda?
4. Co to centromer?
5. Czym różnią się chromosomy homologiczne od chromatyd siostrzanych?
6. Co oznacza zapis 2n = 46?

### Odpowiedzi skrócone

1. Uporządkowana struktura DNA i białek.
2. 46.
3. Jedna kopia DNA należąca do chromosomu.
4. Wyspecjalizowany obszar chromosomu; w zadaniach służy jako praktyczna podstawa liczenia chromosomów.
5. Homologiczne pochodzą z różnych rodzicielskich zestawów; siostrzane są kopiami tego samego chromosomu po replikacji.
6. Diploidalna liczba chromosomów wynosi 46.

---

## 11B. Ćwiczenie prowadzone — komórka po replikacji

**Dane:**  
Komórka somatyczna człowieka po fazie S.

**Pytania:**

- Ile chromosomów?
- Ile chromatyd?
- Ile cząsteczek DNA?

### Tok rozumowania

1. Człowiek ma `2n = 46`.
2. Replikacja podwoiła DNA.
3. Powstały po dwie chromatydy na każdy chromosom.
4. Centromery nie zostały jeszcze rozdzielone.
5. Dlatego:

```text
46 chromosomów
92 chromatydy
92 cząsteczki DNA
```

---

# 11C. Ćwiczenia samodzielne

## A. Podstawa

1. Co to chromosom?
2. Ile chromosomów ma człowiek?
3. Co to centromer?
4. Co to chromatyda?
5. Co oznacza XX i XY w typowym modelu szkolnym?

## B. Trening

6. Po replikacji: ile chromatyd ma typowa komórka człowieka?
7. Popraw zdanie: „W metafazie jest 92 chromosomy”.
8. Co to autosomy?
9. Co oznacza `2n = 46`?
10. Ile centromerów ma komórka `2n = 10` w metafazie?

## C. Ambitne

11. Dlaczego liczba chromosomów nie rośnie po replikacji?
12. Dlaczego DNA nie zawsze jest maksymalnie skondensowane?
13. Uzupełnij tabelę:

| Etap | Chromosomy | Chromatydy | DNA |
|---|---:|---:|---:|
| G1 | | | |
| po S | | | |
| metafaza | | | |
| anafaza — cała komórka | | | |

14. Komórka człowieka ma 46 chromosomów, 46 cząsteczek DNA i nie ma par chromatyd siostrzanych. Podaj co najmniej jeden możliwy etap cyklu.

## D. Zaawansowane

15. Co to kariotyp? Podaj przykład.
16. Co to kariogram? Czym różni się od kariotypu?
17. Co to aneuploidia? Podaj przykład.
18. Ile chromatyd ma komórka `2n = 10` po fazie S?
19. Dlaczego pies z `2n = 78` nie jest przez to „bardziej złożony” od człowieka?

---

# 11D. Czytasz schemat, nie zgadujesz · [KONKURS]

### Zadanie 1

Na rysunku widzisz **6 struktur w kształcie X**. Każda ma jeden centromer.

Ile jest:

- chromosomów,
- chromatyd,
- centromerów?

**Model odpowiedzi:**

```text
6 centromerów
→ 6 chromosomów
→ 12 chromatyd
```

---

### Zadanie 2

Na rysunku widzisz **12 pojedynczych struktur I**, które rozchodzą się do dwóch biegunów.

Ile chromosomów ma cała komórka?

**Odpowiedź:** 12.

**Dlaczego?**

Każda pojedyncza struktura ma własny centromer. Jest to model anafazy.

---

### Zadanie 3

Organizm ma `2n = 8`.

W metafazie mitozy:

- ile chromosomów?
- ile chromatyd?
- ile DNA?

**Odpowiedź:**

```text
8 chromosomów
16 chromatyd
16 DNA
```

---

### Zadanie 4

Organizm ma `2n = 8`.

W anafazie:

- ile chromosomów w całej komórce?
- ile przy jednym biegunie?

**Odpowiedź:**

```text
cała komórka → 16
jeden biegun → 8
```

---

# 11E. Wykrywanie braku informacji

### Zadanie 5

Komórka człowieka ma **92 cząsteczki DNA**.

**Pytanie:** Ile ma chromosomów?

**Odpowiedź: nie da się odpowiedzieć bez znajomości etapu cyklu komórkowego.**

Możliwe sytuacje:

- po fazie S / G2 / metafaza → 46 chromosomów i 92 DNA,
- anafaza — cała komórka → 92 chromosomy i 92 DNA.

### Reguła

> Ta sama liczba cząsteczek DNA może odpowiadać różnej liczbie chromosomów, jeśli zmieni się etap cyklu.

---

### Zadanie 6 — wykrywanie fazy

Komórka ma:

- 12 chromosomów,
- 24 cząsteczki DNA,
- 12 centromerów.

Czy można jednoznacznie stwierdzić, że jest w metafazie?

**Nie.**

Dane pasują do okresu po replikacji, np.:

- końca fazy S,
- G2,
- profazy,
- metafazy.

Aby rozpoznać metafazę, potrzebna jest dodatkowa informacja, np. że chromosomy ustawiają się w płaszczyźnie równikowej.

---

### Zadanie 7 — oceń wypowiedź

Uczeń mówi:

> „W anafazie komórka ma 92 chromosomy, więc człowiek ma wtedy 92 chromosomy.”

**Ocena:** pierwsza część może być prawdziwa, druga jest błędna.

Jeżeli pytamy o **całą dzielącą się komórkę człowieka w anafazie mitozy**, rzeczywiście ma ona chwilowo 92 chromosomy.

Nie oznacza to jednak, że typowa komórka somatyczna człowieka ma przez cały czas 92 chromosomy.

---

## 11F. Przełącznik błędu — wersja tekstowa

### Sytuacja

```text
X   X   X   X
```

Każda struktura ma jeden centromer.

**Ile chromosomów?**

**4.**

Nie 8.

**Dlaczego?**

```text
4 centromery = 4 chromosomy
8 chromatyd = 8 kopii DNA
```

---

## 11G. Dopasuj pojęcie do opisu

1. DNA + histony w mniej zwartej formie → **chromatyna**
2. Jedna kopia DNA należąca do chromosomu → **chromatyda**
3. Obszar chromosomu, w którym tworzy się kinetochor → **centromer**
4. DNA owinięte wokół ośmiu histonów → **nukleosom**
5. Uporządkowany obraz chromosomów → **kariogram**
6. Zestaw chromosomów w komórce, np. 46, XX → **kariotyp**

---

## 11H. Drabinka trudności

| Poziom | Zadanie |
|---|---|
| ODTWÓRZ | Ile chromosomów ma człowiek? |
| ZASTOSUJ | Policz chromosomy i chromatydy po replikacji. |
| WYJAŚNIJ | Dlaczego liczymy centromery? |
| ODKRYJ | W jakiej fazie jest komórka z 92 chromatydami? |
| POŁĄCZ | Połącz replikację z liczbą chromatyd. |
| ZAKWESTIONUJ | Czy z podanych danych da się jednoznacznie ustalić fazę? |

---

# 12. Odpowiedzi i sposób oceniania

1. **Chromosom** — uporządkowana struktura DNA + białek.
2. **46** — 23 pary.
3. **Chromatyda** — jedna kopia DNA należąca do chromosomu.
4. **Centromer** — wyspecjalizowany obszar chromosomu; w obrębie centromeru tworzy się kinetochor.
5. **XX / XY** — typowy szkolny model chromosomów płci.
6. Po replikacji: **46 chromosomów, 92 chromatydy, 92 DNA**.
7. W metafazie nadal **46 chromosomów**, ponieważ liczymy centromery.
8. DNA jest mniej skondensowane w części interfazowych obszarów, co ułatwia dostęp do genów.
9. Reguła: **liczba chromosomów = liczba centromerów**.
10. `2n = 10` w metafazie → **10 chromosomów i 20 chromatyd**.
11. G1 albo komórka potomna po mitozie.
12. Kariotyp = zestaw chromosomów; kariogram = uporządkowany obraz tego zestawu.
13. Aneuploidia = nieprawidłowa liczba pojedynczych chromosomów; np. trisomia 21.
14. `2n = 10` po S → **20 chromatyd**.
15. `2n = 12`: metafaza → 12 chromosomów, 24 chromatydy; anafaza cała komórka → 24 chromosomy jednochromatydowe.
16. Nondysjunkcja w mejozie I może prowadzić do gamet `n+1` i `n−1`; po zapłodnieniu może powstać `2n+1` lub `2n−1`.

### Sposób oceniania

- **Podstawa:** 1 pkt za poprawną odpowiedź.
- **Trening:** 1 pkt za wynik + 1 pkt za poprawne uzasadnienie, gdy zadanie tego wymaga.
- **Ambitne:** 2 pkt, jeśli odpowiedź zawiera mechanizm.
- **Zaawansowane:** 3 pkt, jeśli odpowiedź poprawnie łączy dane, mechanizm i wniosek.
- **Konkurs:** oceniaj przede wszystkim tok rozumowania, nie samo hasło.

---

# 13. Fiszki · [POWTÓRKA]

| Pytanie | Odpowiedź |
|---|---|
| Ile chromosomów ma typowa komórka somatyczna człowieka? | 46 |
| Ile par? | 23 |
| Według czego liczymy chromosomy? | Według liczby centromerów |
| Co to chromatyda? | Jedna kopia DNA należąca do chromosomu |
| Po replikacji: chromosomy / chromatydy? | 46 / 92 |
| Po replikacji: DNA? | 92 cząsteczki |
| Ile chromosomów w anafazie w całej komórce człowieka? | 92 |
| Ile przy jednym biegunie? | 46 |
| Homologiczne? | Od różnych rodziców |
| Siostrzane? | Kopie tego samego chromosomu po replikacji |
| Chromatyna? | DNA + białka o różnym stopniu kondensacji |
| Chromosom? | Zorganizowana jednostka materiału chromosomowego |
| Kariotyp? | Zestaw chromosomów |
| Kariogram? | Obraz/schemat zestawu chromosomów |
| Aneuploidia? | Nieprawidłowa liczba pojedynczych chromosomów |
| Nondysjunkcja? | Błąd rozchodzenia chromosomów/chromatyd w podziale |
| Nukleosom? | DNA nawinięte na oktamer histonów |
| X na schemacie? | Zwykle jeden chromosom po replikacji |

---

# 14. Test końcowy · [TRENING]

## Podstawa

1. Ile chromosomów ma typowa komórka somatyczna człowieka?
2. Co to centromer?
3. Co oznacza XX / XY w typowym modelu szkolnym?

## Trening

4. Po replikacji: ile chromatyd?
5. Popraw: „W metafazie są 92 chromosomy.”
6. Ile centromerów ma komórka `2n = 10` w metafazie?

## Ambitne

7. Dlaczego liczba chromosomów nie rośnie po replikacji?
8. Dlaczego DNA nie zawsze jest silnie skondensowane?
9. Co dokładnie oznacza reguła centromerów?

## Zaawansowane

10. Komórka człowieka ma 92 chromosomy w całej komórce. W jakiej fazie jest to możliwe? Uzasadnij.
11. Organizm `2n = 12`: podaj liczbę chromosomów i chromatyd w metafazie i anafazie w całej komórce.
12. Nondysjunkcja w mejozie I — jakie typy gamet mogą powstać?

### Klucz skrócony

1. 46.
2. Wyspecjalizowany obszar chromosomu; w zadaniach liczymy według centromerów.
3. XX — żeński, XY — męski w modelu szkolnym.
4. 92.
5. 46 chromosomów, 92 chromatydy.
6. 10.
7. Replikacja tworzy dwie chromatydy połączone w obrębie centromeru.
8. Komórka potrzebuje dostępu do DNA; stopień kondensacji jest regulowany.
9. Liczba chromosomów = liczba centromerów.
10. Anafaza mitozy, jeśli pytamy o całą dzielącą się komórkę.
11. Metafaza: 12 / 24; anafaza cała komórka: 24 / 24.
12. W uproszczonym przypadku 2 gamety `n+1` i 2 gamety `n−1`.

---

# 15. Checklista

- [ ] Wiem, czym jest chromosom.
- [ ] Wiem, czym jest chromatyna.
- [ ] Wiem, czym jest chromatyda.
- [ ] Wiem, czym jest centromer.
- [ ] Rozróżniam chromosom przed i po replikacji.
- [ ] Umiem policzyć chromosomy, chromatydy i DNA.
- [ ] Znam regułę centromerów.
- [ ] Nie mylę chromatyd z chromosomami.
- [ ] Wiem, że X zwykle przedstawia jeden chromosom po replikacji.
- [ ] Rozróżniam homologiczne i siostrzane.
- [ ] Znam 46 = 22 pary autosomów + para płci.
- [ ] Wiem, że gameta ma n = 23.
- [ ] Rozumiem anafazę i chwilowe 92 chromosomy w całej komórce.
- [ ] Umiem liczyć dla dowolnego `2n`.
- [ ] Znam pojęcia kariotyp i kariogram.
- [ ] Znam aneuploidię i nondysjunkcję.
- [ ] Wiem, że liczba chromosomów nie jest miarą złożoności organizmu.

---

# 16. „5 zdań, które rozwiązują zadania”

Zapamiętaj:

1. **Chromosom to uporządkowana struktura DNA i białek.**
2. **Po replikacji jeden chromosom ma dwie chromatydy siostrzane, ale nadal jest jednym chromosomem.**
3. **Liczbę chromosomów wyznacza liczba centromerów.**
4. **W metafazie typowa komórka człowieka ma 46 chromosomów i 92 chromatydy.**
5. **W anafazie chromatydy rozdzielają się i każda staje się osobnym chromosomem jednochromatydowym; dlatego cała komórka ma chwilowo 92 chromosomy.**

---

# 17. Mapa pojęć

```text
DNA
 ↓
DNA + HISTONY
 ↓
CHROMATYNA
 ↓
różny stopień kondensacji
 ↓
CHROMOSOM
 ├── centromer
 ├── przed replikacją → 1 chromatyda
 ├── po replikacji → 2 chromatydy siostrzane
 ├── anafaza → 2 chromosomy jednochromatydowe
 ├── autosomy → 22 pary
 └── chromosomy płci → XX / XY

46 chromosomów
 ↓
23 pary
 ↓
dziedziczenie / płeć / choroby chromosomowe
```

### Mosty

```text
L011 → DNA
L012 → chromosom
L013 → replikacja
L014 → mitoza
L015 → mejoza
L017 → dziedziczenie
L018 → chromosomy płci
L020 → mutacje / aneuploidia
```

---

# 18. Co dalej?

### Następna lekcja

**L013 — Jak komórka kopiuje DNA?**

Kluczowe połączenie:

```text
L012: po replikacji → 2 chromatydy
L013: jak powstają te dwie kopie DNA?
```

### Zajawka L014

Podczas mitozy:

- chromosomy są silnie skondensowane,
- wrzeciono podziałowe pomaga je rozdzielić,
- w profazie zanika otoczka jądrowa,
- w telofazie odtwarza się wokół dwóch zestawów chromosomów.

Szczegóły faz mitozy należą do L014.

---

# 19. Słownik

| Termin | Definicja |
|---|---|
| **Chromosom** | Uporządkowana struktura DNA + białek; przed replikacją zawiera 1 cząsteczkę DNA, po replikacji 2. |
| **Chromatyna** | DNA połączone z białkami, o różnym stopniu kondensacji. |
| **Chromatyda** | Jedna kopia DNA należąca do chromosomu. |
| **Chromatydy siostrzane** | Dwie kopie tego samego chromosomu powstałe w replikacji. |
| **Centromer** | Wyspecjalizowany obszar chromosomu; w jego obrębie tworzy się kinetochor. |
| **Kinetochor** | Struktura białkowa związana z centromerem, do której przyłączają się mikrotubule wrzeciona. |
| **Nukleosom** | Jednostka organizacji chromatyny: DNA owinięte wokół oktameru histonów. |
| **Histon** | Białko uczestniczące w organizacji i upakowaniu DNA. |
| **Kariotyp** | Zestaw chromosomów danej komórki. |
| **Kariogram** | Uporządkowany obraz chromosomów. |
| **Autosom** | Chromosom niebędący chromosomem płci. |
| **Aneuploidia** | Nieprawidłowa liczba pojedynczych chromosomów. |
| **Nondysjunkcja** | Błąd rozchodzenia się chromosomów lub chromatyd podczas podziału. |
| **Poliploidia** | Zwielokrotnienie całych zestawów chromosomów. |
| **Telomer** | Specjalna sekwencja na końcu chromosomu. |
| **Faza S** | Faza cyklu komórkowego, w której zachodzi replikacja DNA. |
| **2n** | Liczba diploidalna chromosomów. |
| **n** | Liczba haploidalna chromosomów. |

---

# 20. Dodatek zaawansowany · [ZAAWANSOWANY]

## 20.1. Nukleosom — szczegóły

Oktamer histonów:

```text
2 × H2A
2 × H2B
2 × H3
2 × H4
```

DNA owija się wokół rdzenia histonowego.

Warto znać pojęcie **DNA linkerowego** między nukleosomami.

---

## 20.2. Ramiona p i q

```text
p = krótsze ramię
q = dłuższe ramię
```

---

## 20.3. Aneuploidia a poliploidia

```text
ANEUPLOIDIA
zmiana liczby pojedynczych chromosomów
np. 2n+1

POLIPLOIDIA
zwielokrotnienie całego zestawu
np. 3n, 4n
```

---

## 20.4. Dlaczego liczba chromosomów nie mówi o „inteligencji” ani „złożoności”?

Liczba chromosomów nie jest prostym miernikiem:

- liczby genów,
- stopnia regulacji genów,
- złożoności rozwoju,
- złożoności organizmu.

Dlatego nie można wyciągać wniosku:

```text
więcej chromosomów = bardziej złożony organizm
```

---

# 21. Zadania z życia codziennego

## 21.1. Dlaczego kariotyp bada się w diagnostyce prenatalnej?

**Model odpowiedzi:**

Kariotyp pozwala ocenić liczbę i organizację chromosomów. Może ujawnić nieprawidłowości, takie jak trisomia 21. Badania genetyczne mają jednak różne możliwości i ograniczenia — wynik konkretnego badania należy interpretować w kontekście klinicznym.

---

## 21.2. Dlaczego trisomia 21 wynika z nieprawidłowej liczby chromosomów?

W prawidłowym kariotypie człowiek ma 46 chromosomów. W trisomii 21 występuje dodatkowa kopia chromosomu 21, dlatego liczba chromosomów wynosi zwykle 47.

---

## 21.3. Jak dziedziczy się płeć w typowym modelu XX/XY?

Komórka jajowa typowo wnosi X. Plemnik wnosi X albo Y.

```text
X + X → XX
X + Y → XY
```

To model szkolny, a rzeczywisty rozwój płci jest bardziej złożony.

---

## 21.4. Dlaczego chromosomy widzimy szczególnie dobrze podczas podziału?

Ponieważ podczas podziału materiał chromosomowy jest silnie skondensowany i tworzy wyraźniejsze struktury możliwe do obserwacji mikroskopowej.

Nie oznacza to, że wcześniej chromosomy „nie istnieją”.

---

## 21.5. Uczniowi wydaje się, że 92 chromosomy w anafazie to błąd. Jak mu wyjaśnić?

W anafazie chromatydy siostrzane rozdzielają się. Każda otrzymuje własny centromer i staje się chromosomem jednochromatydowym. Dlatego cała dzieląca się komórka ma chwilowo 92 chromosomy. Po zakończeniu podziału każda komórka potomna ma 46.

---

## 21.6. Dlaczego pies z 2n = 78 nie jest bardziej złożony od człowieka z 2n = 46?

Liczba chromosomów jest cechą gatunkową i nie jest prostą miarą złożoności organizmu.

---

## 21.7. Dlaczego w hodowli roślin wykorzystuje się czasem wiedzę o podziałach chromosomów?

Zmiany liczby całych zestawów chromosomów mogą wpływać na cechy roślin. W praktyce hodowlanej stosuje się specjalistyczne metody laboratoryjne.

> **BHP:** kolchicyna jest silnie toksyczna. Nie jest materiałem do samodzielnych doświadczeń szkolnych.

---

## 21.8. Skąd wiemy, że materiał chromosomowy istnieje także w interfazie?

W interfazie obserwuje się chromatynę, a materiał genetyczny jest aktywnie wykorzystywany m.in. do ekspresji genów i replikacji. W kolejnym podziale ten sam materiał ulega silnej kondensacji i ponownie staje się widoczny jako wyraźne chromosomy.

---

# 22. Jak się uczyć tej lekcji?

## Plan podstawowy — około 40 minut

### 1. Ściąga — 5 min

Przeczytaj:

- 5.1–5.5,
- 5.10–5.11.

Zapamiętaj:

> **liczba chromosomów = liczba centromerów**

### 2. Tabela liczenia — 5–7 min

Przepisz z pamięci:

```text
G1
po S
metafaza
anafaza
```

i uzupełnij:

```text
chromosomy / chromatydy / DNA
```

### 3. Liczenie na innych 2n — 5 min

Wykonaj:

- `2n = 6`,
- `2n = 8`,
- `2n = 10`.

### 4. Klinika błędów — 5 min

Znajdź własne błędy.

### 5. Ćwiczenia — 8 min

Zrób mini-check + A + B.

### 6. Fiszki — 5 min

Powtórz pojęcia.

### 7. Test — 10 min

Rozwiąż bez zaglądania do odpowiedzi.

---

## Powtórki rozłożone w czasie

| Kiedy | Co | Czas |
|---|---|---:|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki + tabela liczenia | 10 min |
| +3 dni | klinika + kalkulator `2n = 8, 10, 20` | 15 min |
| +1 tydzień | test + fiszki | 20 min |
| +1 miesiąc | mapa pojęć + zadania z życia | 15 min |

### Zasada 3 pytań

1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

# 23. Połączenia międzyprzedmiotowe

| Przedmiot | Połączenie |
|---|---|
| **Matematyka** | proporcje, mnożenie ×2, praca z `2n`, `n`, `4n` |
| **Fizyka** | upakowanie przestrzenne i skala mikro/nano |
| **Informatyka** | organizacja danych; ważne zastrzeżenie: upakowanie DNA nie jest kompresją informacji |
| **Chemia** | DNA, histony, oddziaływania między cząsteczkami |
| **Historia / WOS** | historia badań nad chromosomami, etyka badań genetycznych |
| **Geografia / ewolucja** | różnice międzygatunkowe i izolacja populacji |
| **Biologia molekularna** | połączenie L012 z replikacją, ekspresją genów i mutacjami |

### Szczególnie ważne połączenie z informatyką

Nie należy pisać:

> „DNA jest kompresowane bezstratnie jak plik.”

Lepsze porównanie:

> **DNA jest przestrzennie organizowane i upakowywane, ale informacja genetyczna nie jest przez to „skompresowana” w informatycznym znaczeniu.**

---

# 24. Mosty do kolejnych lekcji

| Lekcja | Co wnosi L012 |
|---|---|
| **L013** | Replikacja zachodzi w fazie S; po niej chromosom ma 2 chromatydy |
| **L014** | Chromatydy siostrzane rozchodzą się w mitozie; anafaza zmienia liczbę chromosomów w całej komórce |
| **L015** | Mejoza redukuje liczbę zestawów; homologi i chromatydy rozdzielają się w różnych etapach |
| **L017** | Chromosomy homologiczne niosą odpowiadające sobie geny/allele |
| **L018** | XX/XY i dziedziczenie cech sprzężonych z X |
| **L020** | Aneuploidia i mutacje chromosomowe |

---

# 25. STATUS LEKCJI

**L012 — synchronizacja z HTML v8.1**

### Zachowane

- cała dotychczasowa treść L012,
- reguła centromerów,
- tabela liczenia,
- ćwiczenia,
- klinika błędów,
- fiszki,
- test,
- mapa pojęć,
- słownik,
- dodatek zaawansowany,
- zadania z życia,
- plan nauki.

### Przeniesione / doprecyzowane z HTML v8.1

- ekran „Muszę umieć na E8”,
- historia odkrycia chromosomów,
- rozróżnienie 2 m DNA w G1 i około 4 m po replikacji,
- precyzyjniejsza definicja chromosomu,
- precyzyjniejsze rozróżnienie chromatyd siostrzanych,
- centromer + kinetochor,
- ostrożniejszy opis chromatyny,
- zastrzeżenie do modelu „30 nm / solenoidu”,
- pary homologiczne vs chromatydy siostrzane,
- kariotyp vs kariogram,
- reguła „X nie znaczy dwa”,
- anafaza jako osobny etap liczenia,
- liczenie dla dowolnego `2n`,
- zadanie „brak informacji”,
- zadanie „wykrywanie fazy”,
- zadanie diagnostyczne dotyczące 92 chromosomów,
- dodatkowe ćwiczenia schematowe,
- doprecyzowanie analogii informatycznej,
- ostrzeżenie BHP dotyczące kolchicyny,
- poprawiona terminologia „jednochromatydowy”.

### Ważne

**L001–L011 nie były merytorycznie przebudowywane w tej rewizji.**

### Status L012 (2026-09-20)

HTML kanon: `BIOLOGIA_L012_CHROMOSOMY.html` (v8.1). MD już zawiera wykład + liczenie centromerów + anafazę + 92≠chromosomy. Widgety (kalkulator 2n, nondysjunkcja SVG) zostają w HTML. Nic nie obcinane.

<!-- ==================== END L012 ==================== -->


<!-- ==================== BEGIN L013 ==================== -->

# L013 — Jak komórka kopiuje DNA?

## KARTA LEKCJI L013

- Numer: L013
- Tytuł roboczy: Jak komórka kopiuje DNA
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L012 · Następna: L014
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L013_REPLIKACJA.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Kopiowanie DNA.

`[BIO: DIAGRAM type=FLOW]`
`nić rodzicielska → rozdzielenie → nici potomne`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** komplementarność umożliwia replikację.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L012  
**Następna lekcja:** L014

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Jak komórka kopiuje DNA tak, by obie komórki potomne dostały pełną, poprawną informację?

---

## 2. Cele lekcji

Po lekcji uczeń:

- wyjaśnia, czym jest replikacja DNA,
- stosuje komplementarność (A–T, C–G),
- opisuje replikację jako **semikonserwatywną**,
- wskazuje, że zachodzi **przed** podziałem (faza S),
- łączy replikację z podwojeniem chromatyd (most do L012),
- (ambitny) uzasadnia, dlaczego semikonserwatywność gwarantuje wierność kopii,
- (zaawansowany) zna rolę helikazy i polimerazy DNA oraz most do mutacji.

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| replikacja = kopiowanie DNA | definicja |
| A–T, C–G | stosowanie |
| **semikonserwatywna** | kluczowa koncepcja wierności |
| przed podziałem (faza S) | kontekst + chromatydy |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)  · **[PRZYPOMNIENIE]**
- L011 (pary zasad, komplementarność, sekwencja),
- L012 (chromatydy, centromer, tabela 46/92).

---

## 4. Zacznij od problemu
Obie komórki potomne muszą dostać **tę samą** informację.  
Jak skopiować DNA wiernie — tak, by błędy były jak najrzadsze?

**Hipoteza ucznia:** ....................................

**Podpowiedź:** DNA ma już dwie komplementarne nici. Każda z nich może posłużyć jako „szablon”.

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Replikacja** — kopiowanie DNA **przed** podziałem komórki (faza S).

**Reguła:** A → T, T → A, C → G, G → C.

**Semikonserwatywna:** każda nowa cząsteczka DNA = **1 nić stara + 1 nić nowa**.

**Wynik:** 2 identyczne cząsteczki DNA → 2 chromatydy siostrzane (L012).

**Kiedy:** przed mitozą **i** mejozą (faza S cyklu komórkowego).

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **A–T, C–G** | pary |
| 2 | **Stara + nowa = semikonserwatywna** | replikacja |
| 3 | **Matryca → kopia** | mechanizm |
| 4 | **Faza S = synteza DNA** | kiedy |
| 5 | **Replikacja ≠ mitoza** | kopiowanie ≠ podział |
---

## 6. Jak to działa?  · **[PODSTAWA E8]**

### 6.1. Dlaczego to działa? (rdzeń)

1. DNA ma **dwie komplementarne nici**.
2. Każda nić może być **matrycą**.
3. Nowa nić powstaje według reguły A–T, C–G.
4. Komplementarność = **wierność** kopii.

### 6.2. Kroki (uproszczone)

1. Rozplecenie helisy (rozdzielenie nici).
2. Dobudowa nowych nukleotydów do każdej matrycy.
3. Powstanie **dwóch** cząsteczek DNA — każda = stara + nowa nić.

### 6.3. Most do L012 (chromatydy)

```text
Przed fazą S:  1 chromosom = 1 cząsteczka DNA = 1 chromatyda
Po fazie S:    1 chromosom = 2 cząsteczki DNA = 2 chromatydy (połączone centromerem)
```

Replikacja **podwaja** DNA i chromatydy, ale **nie** liczbę chromosomów (L012).

### 6A. Dlaczego?

1. **Dlaczego przed podziałem?**  
   Obie komórki potomne muszą dostać pełną, identyczną informację.

2. **Dlaczego semikonserwatywna?**  
   Stara nić służy jako matryca → nowa nić jest budowana „według szablonu” → wysoka wierność.

3. **Dlaczego komplementarność kluczowa?**  
   Tylko A–T i C–G dają jednoznaczną, wierną kopię. Zła para = błąd (mutacja).

4. **Dlaczego błędy się zdarzają?**  
   Polimeraza nie jest doskonała, ale ma mechanizm korekcji. Nieskorygowany błąd → mutacja (L020).

### 6B. Krok po kroku — uzupełnianie nici

1. Zapisz matrycę (np. A–T–G–C).
2. Dopisz partnera: A→T, T→A, G→C, C→G.
3. Wynik: T–A–C–G.
4. Sprawdź: czy powstały dwie hybrydy (stara + nowa)?

### 6C. Przykład prowadzony

**Matryca:** `5'– A T G C C A –3'`  
**Nowa nić:** `3'– T A C G G T –5'`

**Wynik:** 2 cząsteczki DNA, każda = 1 nić stara + 1 nić nowa.  
Obie mają **identyczną** sekwencję informacyjną.

### 6D. Powiązanie

```text
L011 (DNA + komplementarność) → L012 (chromosom + chromatydy)
                               → L013 (replikacja = faza S)
                               → L014 (mitoza) / L015 (mejoza)
                               → L020 (błędy = mutacje)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- Replikacja zapewnia **tę samą** informację obu komórkom potomnym.
- **Semikonserwatywność** = każda cząsteczka zawiera „oryginał” jako matrycę → wysoka wierność.
- Błędy nieskorygowane → **mutacje** (most do L020).
- Faza S = faza syntezy DNA w cyklu komórkowym.
- Replikacja ≠ mitoza (kopiowanie ≠ podział komórki).

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

- **Helikaza** — rozplata podwójną helisę.
- **Polimeraza DNA** — dobudowuje nukleotydy i koryguje błędy (proofreading).
- Nici **antyrównoległe**; synteza w kierunku 5'→3'.
- Widełki replikacyjne, startery (idea).
- Nawet z korekcją błędy się zdarzają → źródło zmienności i chorób.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Replikacja = podział | replikacja ≠ mitoza | różne procesy |
| Jedna nowa cząsteczka | dwie cząsteczki | semikonserwatywność |
| A z C | A–T, C–G | komplementarność |
| Replikacja tylko w mejozie | przed mitozą **i** mejozą | faza S |
| Po replikacji 92 chromosomy | 46 chromosomów, 92 chromatydy | most do L012 |

### Klinika 2.0

**Błąd 1:** „Po replikacji komórka ma jedną starą i jedną całkowicie nową cząsteczkę.”
- **Znajdź:** Mylenie z modelem konserwatywnym.
- **Popraw:** Dwie cząsteczki, każda = stara + nowa nić.
- **Reguła:** Semikonserwatywność.
- **Dlaczego:** Stara nić pozostaje w każdej nowej cząsteczce.
- **Podobne:** Matryca ATGC → TACG.
- **Pułapka:** Nie ma „starej” i „nowej” cząsteczki — obie są hybrydami.

**Błąd 2:** „Replikacja to to samo co mitoza.”
- **Znajdź:** Mylenie procesów.
- **Popraw:** Replikacja = kopiowanie DNA; mitoza = podział komórki.
- **Reguła:** Replikacja poprzedza podział (faza S → mitoza/mejoza).
- **Dlaczego:** Bez skopiowanego DNA komórki potomne nie dostałyby pełnej informacji.
- **Podobne:** Faza S vs faza M.
- **Pułapka:** „Komórka się dzieli, więc DNA się kopiuje w trakcie podziału” — nie, wcześniej.

---

## 10. Obserwacja / model
```text
Problem: Jak z jednej cząsteczki DNA powstać mogą dwie identyczne?
Hipoteza: Dzięki komplementarności każda nić jest matrycą.
Materiał: sekwencja liter A/T/C/G + reguła par.
Obserwacja: do każdej matrycy dobudowuje się jednoznaczna nić.
Wniosek: powstają dwie cząsteczki, każda = stara + nowa.
Ograniczenia: brak enzymów, kierunku 5'→3'.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. Co to replikacja?  
2. Kiedy zachodzi?  
3. Podaj regułę komplementarności.  
4. Co oznacza „semikonserwatywna”?  
5. Ile cząsteczek DNA powstaje z jednej?

### 11B. Ćwiczenie prowadzone
Matryca `A–G–T–C` → nowa nić `T–C–A–G`.  
Wynik: 2 cząsteczki, każda = stara + nowa.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**  
1. Co to replikacja?  
2. Kiedy?  
3. Reguła A–T, C–G.  
4. Co to semikonserwatywna?

**B. Trening**  
5. Uzupełnij: matryca `A–G–T–C` → ?  
6. Ile cząsteczek powstaje?  
7. Popraw: „Replikacja = mitoza”.

**C. Ambitne**  
8. Dlaczego semikonserwatywność gwarantuje wierność?  
9. Co się stanie, jeśli wstawiona zostanie zła zasada?  
10. Jak replikacja łączy się z liczbą chromatyd (L012)?

**D. Zaawansowane**  
11. Rola helikazy i polimerazy DNA.  
12. Matryca ATGC → wynik po replikacji.  
13. Dlaczego błąd replikacji nie zawsze zmienia fenotyp?

### 11D. PROBLEM / THINK
1. Matryca `A–T–G–C`. Po replikacji powstają dwie cząsteczki. Czy obie mają identyczną sekwencję?  
2. **ZAKWESTIONUJ:** Czy replikacja mogłaby być w pełni konserwatywna (cała stara cząsteczka + cała nowa)? Jakie byłyby konsekwencje dla wierności?  
3. Dlaczego błędy replikacji są jednym ze źródeł mutacji?

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Podaj regułę A–T, C–G. |
| ZASTOSUJ | Uzupełnij nową nić. |
| WYJAŚNIJ | Dlaczego semikonserwatywna? |
| ODKRYJ | Kiedy zachodzi replikacja? |
| POŁĄCZ | Połącz replikację z chromatydami (L012). |
| ZAKWESTIONUJ | Czy model konserwatywny byłby równie wierny? |

---

## 12. Odpowiedzi
1. Kopiowanie DNA przed podziałem.  
2. Przed mitozą i mejozą (faza S).  
3. A–T, C–G.  
4. Każda nowa cząsteczka = 1 nić stara + 1 nić nowa.  
5. T–C–A–G.  
6. Dwie.  
7. Replikacja = kopiowanie DNA; mitoza = podział komórki.  
8. Stara nić = matryca → nowa nić budowana według szablonu.  
9. Może powstać mutacja (jeśli błąd nie zostanie skorygowany).  
10. Faza S → 2 chromatydy siostrzane (L012).  
11. Helikaza rozplata helisę; polimeraza dobudowuje nukleotydy i koryguje.  
12. Z ATGC → TACG (i odwrotnie); 2 hybrydy.  
13. Kod zdegenerowany / naprawa / mutacja w miejscu nieistotnym.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Replikacja | Kopiowanie DNA przed podziałem |
| Semikonserwatywna | Każda cząsteczka = stara + nowa nić |
| Reguła | A–T, C–G |
| Kiedy | Faza S (przed mitozą i mejozą) |
| Wynik | 2 cząsteczki → 2 chromatydy |
| Helikaza | Rozplata helisę |
| Polimeraza DNA | Dobudowuje + koryguje |
| Replikacja ≠ mitoza | Kopiowanie ≠ podział |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) Co to replikacja?  
2. (P) Pary zasad?  
3. (P) Co oznacza semikonserwatywna?  
4. (T) Uzupełnij: `G–A–T–C`.  
5. (T) Popraw: „Replikacja = mitoza”.  
6. (A) Dlaczego semikonserwatywność gwarantuje wierność?  
7. (A) Jak replikacja łączy się z chromatydami?  
8. (Z) Matryca ATGC — wynik po replikacji. Czy model konserwatywny byłby równie dobry?

## 15. Checklista
- [ ] Wiem, czym jest replikacja i kiedy zachodzi.
- [ ] Stosuję A–T, C–G.
- [ ] Rozumiem semikonserwatywność.
- [ ] Łączę replikację z chromatydami (L012).
- [ ] Odróżniam replikację od mitozy.
- [ ] Potrafię uzasadnić wierność kopii.
- [ ] Znam most do mutacji (ambitny).

## 16. Mapa pojęć
```text
REPLIKACJA
├── matryca (stara nić)
├── A–T, C–G
├── nowa nić
├── wynik: 2 × (stara + nowa)
├── faza S
└── most → chromatydy (L012) / mutacje (L020)
```

## 17. Co dalej?
L014 — mitoza (podział z zachowaniem liczby zestawów).

## 18. Słownik
Replikacja · Matryca · Semikonserwatywna · Faza S · Helikaza · Polimeraza DNA · Korekcja.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Helikaza, polimeraza, proofreading · kierunek 5'→3' · widełki replikacyjne · most do mutacji.

## 20. Jak się uczyć?
1. Ściąga + semikonserwatywność (5 min).  
2. Przykład prowadzony + uzupełnianie nici (5–7 min).  
3. Most do L012 (chromatydy) — 3 min.  
4. Mini-check + ćwiczenia A–B (8 min).  
5. Fiszki (5 min).  
6. Test (8 min).  
7. Przy błędach — Klinika 2.0.

## 21. Połączenia międzyprzedmiotowe
- **Chemia:** wiązania wodorowe, komplementarność.  
- **Matematyka:** symetria, kopiowanie 1→2.  
- **Informatyka:** kopiowanie danych, sumy kontrolne (korekcja).

## 22. Zadania z życia codziennego
1. Dlaczego komórki nowotworowe dzielą się szybciej (i co ma z tym wspólnego replikacja)?  
2. Dlaczego błędy replikacji mogą prowadzić do chorób genetycznych lub nowotworów?  
3. Dlaczego DNA jest stosunkowo stabilne mimo ciągłego kopiowania?  
4. Jak komórka „wie”, że ma skopiować DNA przed podziałem?


## 23. UZUPEŁNIENIE AUDYTOWE v4.2 — jak nie pomylić mechanizmu z wynikiem

### 23.1. Semikonserwatywność nie oznacza „bezbłędności”
**Semikonserwatywna replikacja** mówi, **jak zbudowane są dwie potomne cząsteczki DNA**:
- każda zawiera jedną nić wyjściową i jedną nowo zsyntetyzowaną,
- komplementarność pomaga wiernie odtworzyć sekwencję,
- ale replikacja **nie gwarantuje absolutnego braku błędów**.

Dlatego zdanie:
> „Semikonserwatywność gwarantuje, że DNA zawsze będzie identyczne"

należy poprawić na:
> „Semikonserwatywność i komplementarność umożliwiają bardzo wierne kopiowanie DNA, ale błędy mogą się zdarzać."

### 23.2. Przykład prowadzony — od nici do dwóch cząsteczek
**Dane:** jedna cząsteczka:
`5'–A T G C–3'`
`3'–T A C G–5'`

Po rozdzieleniu nici każda z nich staje się matrycą.

**Krok 1:** do pierwszej matrycy dobudowuje się nić komplementarna.  
**Krok 2:** do drugiej matrycy dobudowuje się druga nić komplementarna.  
**Krok 3:** otrzymujemy dwie cząsteczki DNA.  
**Krok 4:** każda z nich zawiera jedną nić starą i jedną nową.

### 23.3. Najważniejsze rozróżnienie
- **Replikacja** = kopiowanie DNA.
- **Mitoza** = rozdzielenie skopiowanego materiału między komórki potomne.
- **Faza S** = etap cyklu komórkowego, w którym zachodzi replikacja DNA.

### 23.4. Mini-zadania kontrolne
1. Czy po replikacji liczba chromosomów musi się podwoić? **Nie.**
2. Co podwaja się w typowym szkolnym modelu przed mitozą? **Liczba cząsteczek DNA i chromatyd.**
3. Czy każdy błąd replikacji od razu zmienia cechę organizmu? **Nie.**
4. Dlaczego? **Błąd może zostać naprawiony albo nie zmienić produktu genu/fenotypu.**

---

## L013+ HTML v6.0 — Meselson–Stahl, widełki, klinika (KEEP; widgety w HTML)

**HTML:** `BIOLOGIA_L013_REPLIKACJA.html` (v6.0) — trener komplementarności, animacja widełek, quiz semikonserwatywności.

### Doświadczenie Meselsona i Stahla (1958) — [ZAAWANSOWANY / konkurs]

Matthew Meselson i Franklin Stahl hodowali bakterie na izotopach azotu: <sup>15</sup>N („ciężki”) i <sup>14</sup>N („lekki”). DNA wirowało w ultrawirówce według gęstości.

Po **jednej** rundzie replikacji **całe DNA miało gęstość pośrednią**. To wyklucza:
- model **konserwatywny** (jedna cząsteczka cała stara + jedna cała nowa — byłby pasek ciężki i pasek lekki),
- model **rozproszony** (mieszanina fragmentów w obu niciach — inny rozkład gęstości).

Zostaje model **semikonserwatywny**: każda cząsteczka = 1 nić stara + 1 nić nowa.  
Na E8 nie trzeba procedury; warto wiedzieć, że semikonserwatywność jest **faktem doświadczalnym**.

### Widełki — szkic etapów (HTML ma animację)

0. Dwie nici razem.  
1. Helikaza rozrywa wiązania H → widełki.  
2. Polimeraza DNA dobudowuje nukleotydy (A–T, C–G) do każdej starej nici.  
3. Widełki jadą wzdłuż cząsteczki.  
4. Dwie cząsteczki, każda semikonserwatywna → w chromosomie: dwie **chromatydy siostrzane** (most L012).

### Fragmenty Okazaki — [ZAAWANSOWANY]

Jedna nić syntetyzowana w sposób ciągły (wiodąca), druga **porcjami** (opóźniona), bo polimeraza pracuje tylko 5′→3′, a nici są antyrównoległe. Na E8 wystarczy wiedzieć, że synteza nie jest „lustrzana i jednoczesna w tym samym kierunku chemicznym”.

### Klinika (z HTML, skrót)

| Mit | Poprawka |
|-----|----------|
| „Replikacja = mitoza” | Replikacja = kopiowanie DNA (faza S); mitoza = podział jądra/komórki (faza M). |
| „Replikacja w trakcie podziału” | **Przed** podziałem. |
| „Powstaje jedna nowa cząsteczka” | Powstają **dwie**; każda = stara + nowa. |
| „Po replikacji 92 chromosomy” | 46 chromosomów (centromery), 92 chromatydy / 92 cząsteczki DNA (L012). |
| „A łączy się z C” | A–T, C–G (L011). |

### Status L013 (2026-09-20)

Wykład v3.8 + audyt v4.2 **zostaje**. Doklejono Meselsona–Stahla, widełki, Okazaki (extra) i klinikę z HTML v6.0. Nic nie wycięte.

<!-- ==================== END L013 ==================== -->


<!-- ==================== BEGIN L014 ==================== -->

# L014 — Jak komórki ciała powstają i się odnawiają?

## KARTA LEKCJI L014

- Numer: L014
- Tytuł: Jak komórki ciała powstają i się odnawiają? (mitoza)
- Dział: Genetyka / podziały komórkowe
- Poziom: klasa 8 — [PODSTAWA E8] + [TRENING] + [MASTER] + [ZAAWANSOWANY]
- Powiązania: L012 · L013 · L015 · L016
- Poprzednia: L013 · Następna: L015
- Status treści: szkielet zachowany; 2026-09-23 warstwa + do standardu L015
- Status HTML: BIOLOGIA_L014_MITOZA.html (kanon 2026-09-23)
- Wzór układu: L015

## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Cykl i mitoza.

`[BIO: DIAGRAM type=FLOW]`
`DNA → replikacja → podział → dwie komórki`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** liczba chromosomów a liczba chromatyd.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L013  
**Następna lekcja:** L015

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Jak z jednej komórki ciała powstają dwie komórki z tą samą liczbą zestawów chromosomów?

---

## 2. Cele lekcji

Po lekcji uczeń:

- wyjaśnia znaczenie mitozy (wzrost, regeneracja, naprawa),
- podaje, że komórki potomne mają **tę samą liczbę zestawów chromosomów**,
- odróżnia mitozę od mejozy,
- łączy mitozę z wcześniejszą replikacją (L013),
- (ambitny) wyjaśnia, dlaczego „2n → 2n” to uproszczenie i jak chromatydy się rozchodzą,
- (zaawansowany) zna fazy mitozy, cykl komórkowy i most do kontroli (L016).

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| mitoza: **ta sama liczba zestawów** | kluczowa cecha |
| wzrost, regeneracja | funkcje |
| **najpierw replikacja (faza S)** | bez kopii DNA podział niemożliwy |
| mitoza ≠ mejoza | rozróżnienie |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)  · **[PRZYPOMNIENIE]**

- L012: chromosomy, chromatydy, centromer, tabela 46/92,
- L013: replikacja, faza S, semikonserwatywność.

---

## 4. Zacznij od problemu

Skóra się goi po skaleczeniu, a dziecko rośnie.  
Skąd biorą się nowe komórki z **poprawną** liczbą chromosomów?

**Hipoteza ucznia:** ....................................

**Podpowiedź:** Najpierw trzeba skopiować DNA (L013), potem dopiero podzielić komórkę tak, by każda dostała pełny zestaw.

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Mitoza** — podział jądra komórkowego → dwie komórki potomne o **tej samej liczbie zestawów chromosomów** co komórka wyjściowa.

**Kluczowa zasada:** komórki potomne mają **taką samą liczbę zestawów** (u człowieka 46).  
Uproszczenie „2n → 2n” jest wygodne, ale nie uniwersalne (mitozę mogą przechodzić też komórki o innej liczbie zestawów).

**Po co?**
- wzrost organizmu,
- regeneracja i naprawa tkanek,
- u jednokomórkowców — rozmnażanie (idea).

**Kolejność obowiązkowa:**
```text
replikacja (faza S) → mitoza → 2 komórki o tej samej liczbie zestawów
```

```text
komórka (46) → faza S (46 chromosomów, 92 chromatydy) → mitoza → 2 × komórka (46)
```

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **2n → mitoza → 2n** | zachowanie liczby zestawów |
| 2 | **Mitoza = wzrost i regeneracja** | funkcje |
| 3 | **Najpierw S, potem mitoza** | kolejność |
| 4 | **Mitoza ≠ mejoza** | zachowanie vs redukcja |
---

## 6. Jak to działa?  · **[PODSTAWA E8]**

### 6.1. Kroki
1. Faza S: replikacja → każdy chromosom ma 2 chromatydy.
2. Chromatydy siostrzane rozchodzą się do biegunów.
3. Powstają dwa jądra, potem dwie komórki.
4. Każda ma tę samą liczbę chromosomów (46).

**Fazy (uproszczenie):** profaza → metafaza → anafaza → telofaza + cytokineza.

### 6A. Dlaczego?

1. **Dlaczego mitoza zachowuje liczbę zestawów?**  
   Chromatydy siostrzane rozchodzą się do dwóch biegunów — każda komórka potomna dostaje **pełny** zestaw.

2. **Dlaczego replikacja musi być przed mitozą?**  
   Bez skopiowanego DNA jedna z komórek dostałaby niepełną informację (L013).

3. **Dlaczego mitoza jest potrzebna?**  
   Wzrost, regeneracja, naprawa tkanek — bez niej organizm nie mógłby się rozwijać ani goić.

4. **Dlaczego mówimy „ta sama liczba zestawów”, a nie zawsze „2n → 2n”?**  
   Mitoza może zachodzić też w komórkach o innej liczbie zestawów (np. haploidalnych) — zawsze zachowuje liczbę, z którą wystartowała.

### 6B. Krok po kroku — mitoza (uproszczenie)

1. **Interfaza (G1 → S → G2):** wzrost + replikacja DNA (faza S).
2. **Profaza:** chromosomy kondensują się, błona jądrowa zanika.
3. **Metafaza:** chromosomy ustawiają się w płaszczyźnie równikowej (46 chromosomów, 92 chromatydy).
4. **Anafaza:** chromatydy siostrzane rozchodzą się do biegunów.
5. **Telofaza:** tworzą się dwa jądra, chromosomy się rozluźniają.
6. **Cytokineza:** podział cytoplazmy → dwie komórki.

### 6C. Przykład prowadzony

**Dane:** Komórka somatyczna człowieka (2n = 46) w metafazie.

1. Metafaza: 46 chromosomów, 92 chromatydy (po replikacji).
2. Anafaza: chromatydy rozchodzą się (każda staje się chromosomem).
3. Telofaza + cytokineza: dwie komórki, każda z 46 chromosomami.

**Odpowiedź:** 46 chromosomów w każdej komórce potomnej.

### 6D. Powiązanie

```text
L012 (chromosom + chromatydy) → L013 (replikacja = faza S)
                               → L014 (mitoza = zachowanie liczby)
                               → L015 (mejoza = redukcja)
                               → L016 (gdy mitoza wymyka się spod kontroli)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- Mitoza **zachowuje** informację genetyczną (w odróżnieniu od mejozy, która ją miesza i redukuje).
- Komórki potomne (przy braku mutacji) są genetycznie identyczne z wyjściową.
- Cykl komórkowy = interfaza + mitoza.
- **Porównanie jednym zdaniem:** mitoza = ta sama liczba zestawów; mejoza = redukcja 2n → n + gamety.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

- Wrzeciono podziałowe, kinetochory.
- **Punkty kontrolne cyklu (checkpointy)** — komórka sprawdza, czy DNA jest skopiowane i czy chromosomy są prawidłowo ustawione → most do L016 (nowotwory).
- Mitoza w komórkach haploidalnych — nadal zachowuje liczbę zestawów.
- Cytokineza może przebiegać inaczej u roślin i zwierząt (idea).

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Mitoza = kopiowanie DNA | mitoza = podział jądra/komórki | różne procesy (L013 vs L014) |
| Mitoza zawsze 2n → 2n | zachowana liczba zestawów | nie każda komórka startuje od 2n |
| Mitoza daje gamety | mitoza → komórki ciała | gamety powstają w mejozie |
| Po mitozie 23 chromosomy | u człowieka nadal 46 | brak redukcji |
| Chromatydy rozchodzą się = redukcja | to nie redukcja liczby zestawów | każda komórka dostaje pełny zestaw |

### Klinika 2.0

**Błąd 1:** „Mitoza redukuje liczbę chromosomów o połowę.”
- **Znajdź:** Mylenie z mejozą.
- **Popraw:** Mitoza zachowuje liczbę zestawów.
- **Reguła:** Mitoza = wzrost/regeneracja; mejoza = gamety.
- **Dlaczego:** Chromatydy rozchodzą się, ale każda komórka dostaje pełny zestaw.
- **Podobne:** Komórka 2n=20 → po mitozie nadal 20 w każdej.
- **Pułapka:** Po mitozie każda komórka ma taką samą liczbę chromosomów jak wyjściowa.

**Błąd 2:** „Mitoza to to samo co replikacja.”
- **Znajdź:** Mylenie procesów.
- **Popraw:** Replikacja = kopiowanie DNA (faza S); mitoza = podział.
- **Reguła:** Najpierw S, potem mitoza.
- **Dlaczego:** Bez skopiowanego DNA podział dałby niepełne komórki.
- **Podobne:** L013 vs L014.
- **Pułapka:** „Komórka się dzieli, więc DNA się kopiuje w trakcie” — nie, wcześniej.

---

## 10. Obserwacja / model

```text
Problem: Czy komórki potomne mają tę samą liczbę chromosomów?
Hipoteza: Tak — mitoza zachowuje liczbę zestawów.
Materiał: schemat faz / preparat (opcjonalnie).
Obserwacja: chromatydy rozchodzą się równo do dwóch biegunów.
Wniosek: dwie komórki z pełnym zestawem.
Ograniczenia: schemat upraszcza czas i strukturę wrzeciona.
BHP: przy preparacie — zgodnie z instrukcją pracowni.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. Co to mitoza?  
2. Po co organizmowi mitoza?  
3. Ile chromosomów ma komórka potomna u człowieka po mitozie?  
4. Co musi nastąpić przed mitozą?  
5. Mitoza vs mejoza — jedna różnica?

### 11B. Ćwiczenie prowadzone
Komórka 2n = 46 → po mitozie: 46 chromosomów w **każdej** komórce potomnej.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**  
1. Co to mitoza?  
2. Po co?  
3. Ile chromosomów po mitozie u człowieka?  
4. Co najpierw: replikacja czy mitoza?

**B. Trening**  
5. Popraw: „Mitoza = replikacja”.  
6. Mitoza vs mejoza.  
7. 2n → mitoza → ?

**C. Ambitne**  
8. Dlaczego replikacja musi być przed mitozą?  
9. Dlaczego mówimy „ta sama liczba zestawów”, a nie zawsze „2n → 2n”?  
10. Opisz łańcuch: faza S → chromatydy → anafaza → 2 komórki.

**D. Zaawansowane**  
11. Co to punkt kontrolny cyklu?  
12. Komórka 2n = 16 → po mitozie?  
13. PROBLEM: Czy mitoza zawsze daje dokładnie 2 komórki?

### 11D. PROBLEM / THINK
1. Komórka 2n = 10 przechodzi mitozę. Ile chromosomów w każdej komórce potomnej? Uzasadnij.  
2. **ZAKWESTIONUJ:** Czy mitoza może zachodzić w komórce haploidalnej? Co wtedy z liczbą chromosomów?  
3. Dlaczego niekontrolowana mitoza jest groźna? (most do L016)

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to mitoza? |
| ZASTOSUJ | Policz chromosomy po mitozie. |
| WYJAŚNIJ | Dlaczego mitoza zachowuje liczbę zestawów? |
| ODKRYJ | Jaka kolejność: replikacja czy mitoza? |
| POŁĄCZ | Połącz replikację (L013) z mitozą i chromatydami (L012). |
| ZAKWESTIONUJ | Czy mitoza zawsze startuje od 2n i zawsze daje 2 komórki? |

---

## 12. Odpowiedzi

1. Podział dający dwie komórki o tej samej liczbie zestawów chromosomów.  
2. Wzrost, regeneracja, naprawa.  
3. 46.  
4. Najpierw replikacja (faza S).  
5. Replikacja = kopiowanie DNA; mitoza = podział.  
6. Mitoza zachowuje liczbę zestawów; mejoza redukuje 2n → n.  
7. Z komórki o danej liczbie zestawów powstają dwie o tej samej liczbie.  
8. Obie komórki muszą dostać pełną informację.  
9. Bo mitoza może zachodzić też w komórkach nie-diploidalnych — zawsze zachowuje liczbę, z którą wystartowała.  
10. Replikacja → 2 chromatydy → anafaza (rozchodzenie) → 2 komórki.  
11. Miejsce kontroli cyklu (checkpoint) — sprawdza m.in. czy DNA jest skopiowane.  
12. 16 — mitoza zachowuje liczbę.  
13. Zwykle tak, ale istnieją wyjątki (np. endomitoza — idea).

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Mitoza — wynik | 2 komórki, ta sama liczba zestawów |
| Po co mitoza? | Wzrost, regeneracja |
| Replikacja a mitoza | Najpierw kopia DNA (faza S) |
| Mitoza vs mejoza | Zachowanie vs redukcja |
| Człowiek po mitozie | 46 chromosomów |
| Chromatydy w anafazie | Rozchodzą się do biegunów |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) Co to mitoza?  
2. (P) Po co organizmowi?  
3. (P) Ile chromosomów po mitozie u człowieka?  
4. (T) Popraw: „Mitoza = kopiowanie DNA”.  
5. (T) Mitoza vs mejoza.  
6. (A) Dlaczego replikacja przed mitozą?  
7. (A) Dlaczego „2n → 2n” to uproszczenie?  
8. (Z) 2n = 20 → po mitozie? Czy mitoza może zachodzić w komórce haploidalnej?

## 15. Checklista
- [ ] Wiem, czym jest mitoza i po co służy.
- [ ] Łączę mitozę z replikacją (L013).
- [ ] Odróżniam mitozę od mejozy.
- [ ] Rozumiem zachowanie liczby zestawów.
- [ ] Potrafię uzasadnić kolejność: S → mitoza.
- [ ] Znam most do L016 (kontrola cyklu).

## 16. Mapa pojęć
```text
MITOZA
├── po replikacji (faza S)
├── wynik: 2 komórki
├── ta sama liczba zestawów
├── funkcje: wzrost, regeneracja
└── most → L015 (mejoza) / L016 (kontrola)
```

## 17. Co dalej?
L015 — mejoza (powstawanie gamet i zmienność).

## 18. Słownik
Mitoza · Cykl komórkowy · Cytokineza · Checkpoint · Interfaza · Anafaza.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Fazy mitozy szczegółowo · checkpointy → L016 · różnice cytokinezy roślin/zwierząt.

## 20. Jak się uczyć?
1. Ściąga + kolejność S → mitoza (5 min).  
2. Schemat faz + przykład z 46/92 (5–7 min).  
3. Mini-check + ćwiczenia A–B (8 min).  
4. Fiszki (5 min).  
5. Test (8 min).  
6. Przy błędach — Klinika 2.0 (mitoza ≠ mejoza, mitoza ≠ replikacja).

## 21. Połączenia międzyprzedmiotowe
- **Biologia:** gojenie ran, wzrost.  
- **Medycyna:** nowotwory (niekontrolowana mitoza — L016).  
- **Matematyka:** podział 1 → 2.

## 22. Zadania z życia codziennego
1. Dlaczego rany się goją?  
2. Dlaczego nowotwór to „niekontrolowana mitoza”?  
3. Dlaczego niektóre komórki (np. nerwowe) prawie się nie dzielą?  
4. Co by się stało, gdyby mitoza nie zachowywała liczby chromosomów?

---

## L014+ warstwa v5.2.1 (2026-09-23) — KEEP + dopiski; nic nie wycięte

To jest **model szkolny**. W rzeczywistości bywają wyjątki (np. komórki wielojądrzaste, endoreplikacja — [ZAAWANSOWANY], nie E8).

### Dopiski mer.

<!-- AUDYT MER: liczba zestawów, nie „zawsze identyczne DNA” -->
**Mitoza zachowuje liczbę zestawów chromosomów:** z komórki **2n** powstają **dwie komórki 2n**.
Nie mówi to, że kopia jest bezbłędna (L013) ani że nic się nigdy nie zmieni (mutacje somatyczne — L016 / L020).

<!-- AUDYT MER: mejoza = linia płciowa -->
| | Mitoza [PODSTAWA E8] | Mejoza (L015) |
|--|----------------------|---------------|
| Gdzie | komórki somatyczne | linia płciowa w gonadach |
| Ile podziałów | 1 (po fazie S) | 2 (po jednej fazie S) |
| Wynik | **2** komórki **2n** | komórki **n** |
| Podobieństwo | zbliżone do macierzystej | różne (rekombinacja + segregacja) |
| Po co | wzrost, regeneracja, gojenie | haploidalność + zmienność |

<!-- AUDYT MER: replikacja nie jest etapem mitozy -->
Replikacja DNA jest w **fazie S** (przed mitozą). W mitozie rozdzielają się **już skopiowane** chromatydy.

### Słownik — pełne zdania

- **Mitoza** — podział jądra komórki somatycznej; z 2n powstają dwie komórki 2n, genetycznie zbliżone do macierzystej.
- **Komórka somatyczna** — komórka ciała, nie linia gamet.
- **Cytokineza** — podział cytoplazmy po podziale jądra.
- **Interfaza** — G1 + S + G2; DNA kopiuje się w S, nie „w mitozie”.
- **Checkpoint** — punkt kontroli cyklu; most do L016.

### Klinika — 5 typowych pomyłek (uzupełnienie pkt 9)

| Mit | Co nie tak | Popraw |
|-----|------------|--------|
| „Mitoza zmniejsza liczbę chromosomów.” | Redukcja to mejoza I. | Mitoza: 2n → 2n (zestawy). |
| „W mitozie powstają 4 komórki.” | 4 to typowy wynik mejozy u samca. | Mitoza → **2** komórki. |
| „Komórki potomne są z założenia różne.” | To cel mejozy / skutek mutacji. | Cel szkolny mitozy: komórki zbliżone. |
| „Mitoza = w komórkach rozrodczych.” | Gamety: mejoza w linii płciowej. | Mitoza = soma. |
| „Replikacja zachodzi w mitozie.” | Replikacja = faza S. | Mitoza rozdziela kopie. |

### Znaczniki pod przyszły HTML

<!-- BIO DIAGRAM type=MITOSIS -->
Opis: profaza → metafaza → anafaza → telofaza + cytokineza; oś G1–S–G2–M; homologi dwoma kolorami; centromery widoczne.

<!-- BIO COMPARE id=MITOSIS_vs_MEIOSIS -->
Tabela powyżej + „kiedy które?”.

<!-- BIO FLOW id=CELLCYCLE_2N -->
G1 → S → G2 → M → dwie komórki 2n. Liczba **zestawów** stała; chromatydy i cząsteczki DNA się zmieniają (L012).

<!-- BIO DIAGRAM type=CANCER_CHECKPOINT -->
Most L016: sprawne vs uszkodzone checkpointy. Nowotwór ≠ „jedna mutacja = rak”.

<!-- BIO FLASHCARDS id=MITOSIS -->
Ile komórek? Jaka liczba zestawów? Gdzie? Kiedy replikacja?

<!-- BIO QUIZ id=MITOSIS_MINICHECK -->
5× ABCD + zdanie „dlaczego”.

<!-- BIO STEP id=MITOSIS_GUIDED1 -->
Uzupełnij G1→S→G2→M.

<!-- BIO PROBLEM id=MITOSIS_THINK1 -->
Mutacja w kontroli G1 — most L016. [KONKURS]

<!-- BIO MAP id=MITOSIS_CONCEPT_MAP -->
Centrum: mitoza. Gałęzie: cykl, chromosom/chromatyd/centromer, fazy, 2×2n, L013, L015, L016.

### Status L014 (2026-09-23)

Szkielet 1–22 zostaje. Doklejono kartę, porównanie z L015, klinikę, słownik, opisy widgetów. HTML — później, wzorzec L015.

<!-- ==================== END L014 ==================== -->


<!-- ==================== BEGIN L015 ==================== -->
## KARTA LEKCJI L015

- Numer: L015
- Tytuł roboczy: Mejoza i różnorodność
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L014 · Następna: L016
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: lekcje_html/BIOLOGIA_L015_MEJOZA.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty

## WYKŁAD Z HTML L015

Biologia L015 — Jak powstają komórki haploidalne i skąd bierze się różnorodność? (v5.1)

  Dopisek v5.2 — precyzja (treść v5.1 zostaje)


**Gdzie mejoza:** w komórkach *linii płciowej* w gonadach. Dojrzałe gamety już jej nie przechodzą.


**Homologi:** te same geny w tych samych loci, mogą mieć różne allele.


**Niezależna segregacja:** losowe ustawienie par w *metafazie I* → różne kombinacje chromosomów dziadków w gamecie.


**Wiek matki:** rośnie ryzyko błędów rozchodzenia; jedna z przyczyn — długie zatrzymanie mejozy komórki jajowej. Mechanizm nie jest prostym „gromadzeniem uszkodzeń”.


**Oogeneza:** mejoza II u człowieka kończy się dopiero po zapłodnieniu.


**Po mejozie I:** n chromosomów, ale każdy nadal z dwiema chromatydami (liczymy centromery). Chromatydy rozchodzą się w mejozie II.


Roślinny cykl spor/gametofitu, pełne tabele nondysjunkcji I/II, oogeneza vs starzenie — **dla chętnych**.


      L015 — Jak powstają komórki haploidalne i skąd bierze się różnorodność?
      Genetyka · mejoza · 2n → n · rekombinacja chromosomowa · nondysjunkcja · oogeneza vs spermatogeneza

        Poprzednia: L014 (mitoza — jak komórki ciała się odnawiają) · Następna: L016 (nowotwory — gdy podziały wymykają się kontroli)

        Warstwy: [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]

        **Wersja 5.1** — po korekcie merytorycznej


## Spis treści


    0. Wprowadzenie — o co tu chodzi?

      Wprowadzenie


    1–4. Pytanie, cele, kompas, problem

      Pytanie przewodnie
      Cele + 80/20
      Kompas
      Zacznij od problemu


    5. Ściąga — definicje i budowa
    Ściąga


    6. Wyjaśnienie od podstaw
    Wyjaśnienie


    7. Dlaczego rodzeństwo się różni?
    Różnorodność


    8–9. Poziom ambitny i zaawansowany

      MASTER
      ZAAWANSOWANY


    10. Klinika błędów + Klinika 2.0
    Klinika


    11–16. Obserwacja, ćwiczenia, fiszki, test, checklista

      Obserwacja
      Ćwiczenia
      Fiszki
      Test
      Checklista


    17–23. Mapa, słownik, dodatek, życie, status

      Mapa
      Słownik
      Dodatek
      Z życia


  Słowa kluczowe: mejoza · 2n → n · komórka haploidalna · rekombinacja chromosomowa · niezależna segregacja · nondysjunkcja · oogeneza · spermatogeneza


## 0. Wprowadzenie WPROWADZENIE


    O co tu właściwie chodzi?


Wyobraź sobie, że masz talię kart. **46 kart** — dokładnie tyle, ile chromosomów ma człowiek. Dzielisz tę talię na dwie kupki **po 23 karty**. Potem mama i tata łączą swoje kupki w **nową talię 46 kart**.


To jest właśnie **mejoza** — proces, w którym z komórki z **46 chromosomami** powstają komórki z **23 chromosomami**, a następnie (u zwierząt) z tych komórek powstają **gamety** (plemniki, komórki jajowe).


Ale jest jeden haczyk: **nie dzielisz tych samych kart za każdym razem**. Karty tasują się, mieszają — i za każdym razem wychodzi **inny zestaw**. To dlatego **każde dziecko tej samej pary rodziców jest inne** (z wyjątkiem bliźniąt jednojajowych).


### Dlaczego bez mejozy mielibyśmy problem?


Gdyby gamety miały 46 chromosomów, a nie 23:


- Pokolenie 1: 46 chromosomów.

- Pokolenie 2: 46 + 46 = **92** chromosomy.

- Pokolenie 3: 92 + 92 = **184** chromosomy.


**Liczba chromosomów podwajałaby się w każdym pokoleniu** — komórki nie byłyby w stanie tego utrzymać.


**Mejoza rozwiązuje problem:** redukuje liczbę chromosomów o połowę przed zapłodnieniem → zygota znowu ma 46.


    Czego się nauczysz na tej lekcji?


- **Czym jest mejoza** i jak różni się od mitozy.

- **Jak zachodzi redukcja 2n → n** (i dlaczego to konieczne).

- **Skąd bierze się różnorodność genetyczna** (rekombinacja chromosomowa, segregacja, losowe zapłodnienie).

- **Jak policzyć chromosomy i chromatydy** na każdym etapie mejozy.

- **Co się dzieje, gdy mejoza zawodzi** (nondysjunkcja → aneuploidia).


### Krótka historia


    Od obserwacji mikroskopowych do chromosomowej teorii dziedziczenia


**1880s — Walther Flemming, Edouard van Beneden** obserwowali podział komórek. Zauważyli, że w komórkach rozrodczych chromosomy zachowują się inaczej niż w komórkach ciała.


**1887 — August Weismann** zaproponował, że **liczba chromosomów musi się zmniejszyć o połowę** przed zapłodnieniem, żeby nie rosła z pokolenia na pokolenie.


**1900s — Walter Sutton i Theodor Boveri** połączyli obserwacje mejozy z prawami Mendla: **chromosomy to nośniki genów**. To dało podstawę **chromosomalnej teorii dziedziczenia**.


    Kluczowa myśl


Mejoza to **dwa podziały po jednej replikacji**, które redukują liczbę chromosomów o połowę i **mieszają** informację genetyczną.


### Dlaczego to ma znaczenie?


        ****
        ****
        ****
        ****
        ****
        ****

    | Dziedzina | Zastosowanie |
| --- | --- |
| Genetyka | zrozumienie, dlaczego rodzeństwo nie jest identyczne |
| Medycyna | diagnostyka nondysjunkcji (np. trisomia 21 — zespół Downa) |
| Rozrodczość | badanie przyczyn niepłodności (błędy mejozy) |
| Hodowla | planowanie krzyżówek w celu uzyskania pożądanych cech |
| Ewolucja | źródło zmienności → materiał dla doboru naturalnego |
| Poradnictwo genetyczne | ocena ryzyka chorób genetycznych u potomstwa |


## 1. Pytanie przewodnie


Jak powstają komórki haploidalne i dlaczego rodzeństwo nie jest identyczne?


## 2. Cele lekcji PODSTAWA E8


    Po tej lekcji umiesz:


- **wyjaśnić**, że mejoza redukuje **2n → n** (u człowieka 46 → 23),

- **podać**, że komórka haploidalna ma 23 chromosomy,

- **wymienić 3 źródła zmienności genetycznej**,

- (ambitny) rozróżniać mejozę I (pary chromosomów homologicznych) i II (chromatydy siostrzane) oraz liczyć chromosomy/chromatydy na każdym etapie,

- (zaawansowany) znać nondysjunkcję, aneuploidię i różnicę oogeneza vs spermatogeneza.


    Zasada 80/20 — co daje 80% efektu (i dlaczego)


          ****
          ****
          ****
          ****
          ****

      | 20% = 80% efektu | Dlaczego to jest kluczowe |
| --- | --- |
| 2n → n (redukcja o połowę) | Kluczowa cecha mejozy — odróżnia ją od mitozy |
| Komórka haploidalna = 23 chromosomy | Liczba, którą trzeba znać na pamięć |
| 3 źródła zmienności | Odpowiedź na pytanie: dlaczego rodzeństwo się różni |
| Mejoza I = pary; II = kopie | Co się rozchodzi — kluczowe dla zrozumienia nondysjunkcji |
| Jedna replikacja, dwa podziały | Bez tego nie zrozumiesz, dlaczego 2n → n wymaga dwóch etapów |


**Dlaczego to wystarczy?** Bo 90% zadań E8 o mejozie sprowadza się do: policz chromosomy/chromatydy → rozróżnij mejozę I i II → wskaż źródła zmienności → rozpoznaj nondysjunkcję.


## 3. Kompas PRZYPOMNIENIE

    Co trzeba wiedzieć wcześniej


- **L012:** chromosomy homologiczne (para — jeden od matki, jeden od ojca); 46 = 23 pary; chromatydy; centromer.

- **L013:** replikacja DNA (faza S) — po replikacji 1 chromosom = 2 chromatydy.

- **L014:** mitoza — zachowuje liczbę zestawów (2n → 2n); cel: wzrost, regeneracja.


Jeśli nie pamiętasz, co to chromosomy homologiczne — wróć do L012, sekcja 5. To fundament mejozy.


## 4. Zacznij od problemu


**Gdyby gamety miały 46 chromosomów, zygota miałaby 92.** Potem następne pokolenie: 184, 368… Liczba chromosomów **podwajałaby się w każdym pokoleniu**.


**Jak organizm utrzymuje stałą liczbę 46 chromosomów w każdym pokoleniu?**


Zapisz hipotezę: ....................................


💡 **Podpowiedź:** Coś musi **zmniejszać** liczbę chromosomów o połowę przed zapłodnieniem. To właśnie robi **mejoza** — redukuje 2n → n. Po lekcji wróć do hipotezy i sprawdź, czy była trafna.


## 5. Ściąga PODSTAWA E8


### 5.1. Co to mejoza? (definicja pełna)


    Definicja


**Mejoza** to szczególny rodzaj podziału komórkowego, w którym **liczba zestawów chromosomów zmniejsza się o połowę**:
    2n  →  n


Komórka **diploidalna** (2n) ma dwa zestawy chromosomów: jeden odziedziczony po matce, drugi po ojcu. Komórka **haploidalna** (n) ma tylko jeden zestaw.


**U człowieka:**


- Komórki ciała są zwykle diploidalne: **2n = 46**, czyli 23 pary chromosomów.

- Komórki haploidalne mają **n = 23** chromosomy.

- Podczas zapłodnienia łączą się dwie komórki haploidalne: 23 chromosomy od matki i 23 od ojca.

- Powstaje **zygota** o liczbie **2n = 46** chromosomów.


      Ważne — precyzyjne sformułowanie


Mejoza **nie zawsze tworzy bezpośrednio gamety**:


- U **zwierząt** — prowadzi do powstania **gamet** (plemniki, komórki jajowe).

- U **roślin** — jej bezpośrednim produktem są zwykle **spory** (dopiero z nich, w drodze mitozy, powstają gamety — patrz sekcja 20).


**Gdzie zachodzi mejoza u człowieka?**
W **komórkach rozrodczych** znajdujących się w **gonadach**: w **jądrach** (spermatogeneza) i **jajnikach** (oogeneza).


### 5.2. Czym różni się od mitozy? (jedna wspólna tabela)


        ****
        ********
        ****
        ************
        ********
        ********
        ****

    | Cecha | Mitoza (L014) | Mejoza (L015) |
| --- | --- | --- |
| Cel | wzrost, regeneracja, naprawa | powstawanie komórek haploidalnych (→ gamety u zwierząt, spory u roślin) |
| Liczba podziałów | 1 | 2 |
| Liczba komórek potomnych | 2 | 4 |
| Liczba zestawów chromosomów | taka sama (2n → 2n) | redukcja (2n → n) |
| Rekombinacja chromosomowa | nie | tak (w profazie I) |
| Zmienność | zachowuje informację komórki macierzystej (mogą powstać sporadyczne mutacje wskutek błędów kopiowania DNA) | generuje zmienność (rekombinacja + segregacja) |
| Gdzie zachodzi | prawie wszystkie komórki ciała | gonady / tkanki rozrodcze |


### 5.3. Jedna replikacja, dwa podziały — dlaczego?


**Kluczowa zasada:**


- **Przed mejozą** zachodzi **jedna** replikacja DNA (faza S, L013). Po niej: 46 chromosomów = 92 chromatydy.

- Potem **dwa podziały**:


- **Mejoza I** — rozdzielają się **całe pary chromosomów homologicznych**.

- **Mejoza II** — rozdzielają się **chromatydy siostrzane**.


**Najkrócej:** pierwszy podział rozdziela **pary**, drugi — **kopie chromosomów**.


(Pełne uzasadnienie — sekcja 6.3.)


### 5.4. Skąd różnorodność? Trzy źródła


- **Rekombinacja chromosomowa** (crossing-over) — wymiana fragmentów chromatyd **niesiostrzanych** między homologami, zachodzi w profazie I mejozy.

- **Niezależna segregacja chromosomów** — każda para chromosomów homologicznych rozchodzi się do komórek potomnych niezależnie od innych par.

- **Losowe zapłodnienie** — dowolny plemnik może połączyć się z dowolną komórką jajową.


**Ilościowo (u człowieka, bez rekombinacji):**


- Liczba możliwych zestawów chromosomów w jednej komórce haploidalnej: **2²³ = 8 388 608**.

- Jeśli uwzględnimy oboje rodziców: **8 388 608 × 8 388 608 ≈ 7 × 10¹³** (ok. **70 bilionów**) potencjalnych kombinacji zygoty.


To **bardzo duża liczba**, ale **nie „nieskończona"** — możliwych kombinacji jest skończenie wiele (choć ogromnie dużo).


### 5.5. Liczby u człowieka + zasada liczenia


**Zasada liczenia:** chromosom liczymy według liczby **centromerów**, a nie liczby chromatyd. Chromosom po replikacji to **nadal jeden chromosom**, choć składa się z dwóch chromatyd siostrzanych.


    | Etap | Chromosomy (centromery) | Chromatydy |
| --- | --- | --- |
| Przed replikacją (G1) | 46 | 46 |
| Po replikacji, przed mejozą I | 46 | 92 |
| Po mejozie I (2 komórki) | 23 w każdej | 46 w każdej |
| Po mejozie II (4 komórki) | 23 w każdej | 23 w każdej |


### Kontrastowy przykład: 2n = 8


    | Etap | Chromosomy | Chromatydy |
| --- | --- | --- |
| Po replikacji | 8 | 16 |
| Po mejozie I (2 komórki) | 4 w każdej | 8 w każdej |
| Po mejozie II (4 komórki) | 4 w każdej | 4 w każdej |


### 5.6. Mnemotechniki


- **2n → mejoza → n** — redukcja

- **Mejoza I — pary; II — kopie** — co się rozchodzi

- **Rekombinacja miesza** — zmienność

- **23 + 23 = 46** — komórki haploidalne + zygota

- **Jedna replikacja, dwa podziały** — kluczowa różnica od mitozy


### 5.7. „Cztery komórki haploidalne" — precyzyjnie


**Mejoza zwykle daje cztery komórki haploidalne.**


- W **spermatogenezie** rozwijają się z nich **cztery plemniki**.

- W **oogenezie** powstaje **jedna funkcjonalna komórka jajowa** i **ciałka kierunkowe** — otrzymują one niewiele cytoplazmy i zwykle zanikają.


To jest **ważne rozróżnienie** — „mejoza daje cztery gamety" to uproszczenie: u kobiety funkcjonalna jest tylko jedna.


## 6. Wyjaśnienie od podstaw


### 6.1. Łańcuch procesu


2n (komórka diploidalna, 46)
    ↓ REPLIKACJA (faza S, L013)
46 chromosomów, 92 chromatydy
    ↓ MEJOZA I (rozdział par chromosomów homologicznych)
2 komórki z 23 chromosomami (każdy z 2 chromatydami)
    ↓ MEJOZA II (rozdział chromatyd siostrzanych)
4 komórki haploidalne (n = 23)
    ↓ ZAPŁODNIENIE
2n (zygota, 46)


### 6.2. Mejoza I — co się dzieje?


- **Profaza I:** chromosomy homologiczne łączą się w pary — **synapsa chromosomów homologicznych**. W tym momencie zachodzi **rekombinacja chromosomowa** (crossing-over) — wymiana fragmentów chromatyd niesiostrzanych. Miejsca widocznego skrzyżowania chromatyd nazywamy **chiazmami**.

- **Metafaza I:** pary homologów ustawiają się w płaszczyźnie równikowej.

- **Anafaza I:** całe chromosomy (każdy z 2 chromatydami) rozchodzą się do biegunów.

- **Telofaza I + cytokineza:** powstają 2 komórki haploidalne (n = 23), każda z chromosomami mającymi 2 chromatydy.


**Kluczowe:** W mejozie I rozchodzą się **całe chromosomy** (pary homologów), a nie chromatydy.


### 6.3. Dlaczego są dwa podziały?


    Klarowne wyjaśnienie


Przed mejozą DNA zostaje skopiowane, dlatego każdy chromosom składa się z **dwóch chromatyd siostrzanych**.


W **mejozie I** rozdzielają się całe pary chromosomów homologicznych. To właśnie zmniejsza liczbę zestawów chromosomów z **2n do n**.


W **mejozie II** rozdzielają się chromatydy siostrzane. Dzięki temu każda końcowa komórka dostaje po jednej kopii każdego chromosomu.


**Najkrócej:** pierwszy podział rozdziela **pary**, drugi — **kopie chromosomów**.


### 6.4. Mejoza II — co się dzieje?


- **Profaza II:** chromosomy (już bez pary) kondensują się.

- **Metafaza II:** chromosomy ustawiają się pojedynczo w płaszczyźnie równikowej.

- **Anafaza II:** chromatydy siostrzane rozchodzą się do biegunów.

- **Telofaza II + cytokineza:** powstają 4 komórki haploidalne (n = 23).


**Kluczowe:** Mejoza II jest **podobna do mitozy** — ale zachodzi w komórce haploidalnej.


### 6.5. 6A. Dlaczego?


- **Dlaczego redukcja konieczna?** Bez niej liczba chromosomów podwajałaby się w każdym pokoleniu.

- **Dlaczego dwa podziały po jednej replikacji?** Mejoza I oddziela pary homologów (redukcja); mejoza II oddziela chromatydy (utrzymanie n).

- **Dlaczego rekombinacja zwiększa zmienność?** Homologi wymieniają fragmenty chromatyd niesiostrzanych → chromosom potomny ma nowe kombinacje alleli.

- **Dlaczego „4 gamety" to uproszczenie?** Mejoza daje 4 komórki haploidalne — ale w oogenezie tylko jedna jest funkcjonalna.


### 6.6. 6B. Krok po kroku (człowiek)


- **Start:** komórka 2n = 46 → **replikacja** (L013) → 46 chromosomów, 92 chromatydy.

- **Mejoza I:** pary homologów ustawiają się i rozchodzą → 2 komórki z **23 chromosomami** (każdy z 2 chromatydami).

- **Mejoza II:** chromatydy siostrzane się rozchodzą → 4 komórki z **23 chromosomami** (23 chromatydy).


### 6.7. 6C. Przykład prowadzony


**Dane:** Człowiek, 2n = 46.


**Pytanie:** Ile chromosomów i chromatyd w komórce po mejozie I?


**Rozumowanie:**


- Przed mejozą: 46 chromosomów, 92 chromatydy.

- Mejoza I: pary homologów się rozchodzą → 2 komórki.

- Każda komórka ma 23 chromosomy.

- Każdy chromosom nadal ma 2 chromatydy → 23 × 2 = 46 chromatyd.


**Odpowiedź:** 2 komórki, każda z 23 chromosomami i 46 chromatydami.


**Spróbuj sam:** 2n = 16 → komórka haploidalna n = ? **Odpowiedź:** n = 8.


### 6.8. 6D. Powiązanie z innymi lekcjami


    L012 (chromosom, homologi) → L013 (replikacja) → L014 (mitoza)
  → L015 (mejoza) → L016 (nowotwory) → L017 (dziedziczenie)


## 7. Dlaczego rodzeństwo się różni? KLUCZOWA RAMKA


    Trzy mechanizmy


Rodzeństwo ma tych samych rodziców, ale zwykle **nie otrzymuje dokładnie tego samego zestawu alleli**. Wynika to z **trzech mechanizmów**:


- **Rekombinacja chromosomowa** — w profazie I chromosomy homologiczne wymieniają fragmenty DNA (chromatyd niesiostrzanych), tworząc nowe układy alleli na chromosomach.

- **Niezależna segregacja chromosomów** — każda para chromosomów homologicznych rozchodzi się do komórek potomnych niezależnie od innych par.

- **Losowe zapłodnienie** — dowolny plemnik może połączyć się z dowolną komórką jajową.


### Ilościowo (bez rekombinacji)


        ****

    | Liczba par chromosomów | Liczba możliwych zestawów chromosomów w komórce haploidalnej |
| --- | --- |
| 1 para | 2 |
| 2 pary | 4 |
| 3 pary | 8 |
| 23 pary (człowiek) | 2²³ = 8 388 608 |


Jeśli połączymy możliwości obu rodziców: 8 388 608 × 8 388 608 ≈ **7 × 10¹³** (ok. **70 bilionów**) potencjalnych kombinacji — **jeszcze przed uwzględnieniem rekombinacji chromosomowej**.


**Wniosek:** każdy człowiek (poza bliźniakami jednojajowymi) jest **genetycznie unikalny**, choć liczba możliwych kombinacji jest **skończona** (bardzo duża, ale nie „nieskończona").


    O bliźniętach jednojajowych


Zwykle mają **niemal identyczny genom jądrowy** (pochodzą z jednej zygoty), lecz z czasem mogą pojawić się między nimi **drobne różnice** wynikające z mutacji somatycznych i zmian epigenetycznych.


## 8. Poziom ambitny MASTER


### 8.1. Mejoza I vs II


        ************
        ********
        ********
        ****
        ********

    | Cecha | Mejoza I | Mejoza II |
| --- | --- | --- |
| Co się rozchodzi? | pary homologów | chromatydy siostrzane |
| Rekombinacja chromosomowa | tak (profaza I) | nie |
| Redukcja 2n → n | tak | nie (utrzymanie n) |
| Liczba chromosomów (człowiek) | 46 → 23 | 23 → 23 |
| Podobieństwo do mitozy? | nie (unikalny) | tak (jak „mini-mitoza") |


**Pułapka:** „W mejozie rozchodzą się chromatydy" — **nie od razu**. Najpierw pary homologów (I), potem chromatydy (II).


### 8.2. Precyzyjne rozróżnienie: komórki haploidalne ≠ gamety


**Mejoza daje 4 komórki haploidalne.** To, ile z nich staje się **funkcjonalnymi gametami**, zależy od organizmu i płci:


          ****
          ****


      | Organizm | Produkt mejozy | Ile funkcjonalnych? |
| --- | --- | --- |
| Mężczyzna (spermatogeneza) | 4 komórki haploidalne | 4 plemniki |
| Kobieta (oogeneza) | 4 komórki haploidalne | 1 komórka jajowa + 3 ciałka kierunkowe |
| Roślina | 4 spory | (spory → gametofit → mitoza → gamety) |


### 8.3. Porównanie mitoza ↔ mejoza — uzupełnienie


Mitoza **co do zasady** zachowuje informację genetyczną komórki macierzystej. **Sporadyczne mutacje** mogą jednak powstać wskutek błędów kopiowania DNA — dlatego komórki potomne mitozy **nie zawsze** są w 100% identyczne.


## 9. Poziom zaawansowany ZAAWANSOWANY


### 9.1. Nondysjunkcja — tabela zadań


**Nondysjunkcja** = błąd rozchodzenia chromosomów w mejozie. Pary homologów (lub chromatydy siostrzane) **nie rozchodzą się prawidłowo** — trafiają do tej samej komórki potomnej.


          ************
          ****************

      | Błąd | Co nie rozchodzi się prawidłowo? | Produkty mejozy |
| --- | --- | --- |
| Nondysjunkcja w mejozie I | pary chromosomów homologicznych | 2 komórki z n+1 i 2 z n−1 |
| Nondysjunkcja w mejozie II | chromatydy siostrzane | 2 komórki prawidłowe (n), 1 z n+1, 1 z n−1 |


Po zapłodnieniu nieprawidłowej komórki haploidalnej przez prawidłową może powstać zygota z **trisomią (2n+1)** albo **monosomią (2n−1)**. Przykładem trisomii jest **trisomia chromosomu 21**, związana z zespołem Downa.


### 9.2. Ryzyko nondysjunkcji rośnie z wiekiem matki


Komórki jajowe są **zatrzymane w profazie I** od życia płodowego kobiety aż do owulacji. Przez dziesięciolecia mogą gromadzić uszkodzenia, co zwiększa ryzyko błędów rozchodzenia chromosomów.


### 9.3. Oogeneza vs spermatogeneza


        ****
        ****
        ****

    | Cecha | Spermatogeneza | Oogeneza |
| --- | --- | --- |
| Produkt końcowy | 4 plemniki | 1 komórka jajowa + ciałka kierunkowe |
| Podział cytoplazmy | równy | nierówny (jajowa zbiera zasoby) |
| Czas | ciągła od dojrzewania | start w życiu płodowym; dokończenie przy owulacji/zapłodnieniu |


### 9.4. Chromosomy płci — jak się rozchodzą?


- **Kobieta (XX):** oba chromosomy X są homologiczne → rozchodzą się w mejozie I → każda komórka jajowa ma 1 X.

- **Mężczyzna (XY):** X i Y mają regiony częściowo homologiczne → rozchodzą się w mejozie I → **50% plemników ma X, 50% ma Y**.


**Reguła:** płeć dziecka zależy od plemnika (X lub Y). Komórka jajowa zawsze ma X.


### 9.5. Mejoza u roślin — przemiana pokoleń


- U roślin mejoza prowadzi do powstania **spor** (nie gamet).

- **Sporofit (2n)** → mejoza → **spory (n)** → **gametofit (n)** → mitoza → **gamety (n)** → zapłodnienie → **sporofit (2n)**.

- U zwierząt: **organizm dorosły (2n)** → mejoza → **gamety (n)** → zapłodnienie → **zygota (2n)**.


### 9.6. Choroby związane z nondysjunkcją


        ****
        ****
        ****
        ****
        ****

    | Choroba | Mechanizm |
| --- | --- |
| Trisomia 21 (zespół Downa) | nondysjunkcja chromosomu 21 |
| Trisomia 18 (Edwards) | nondysjunkcja chromosomu 18 |
| Trisomia 13 (Patau) | nondysjunkcja chromosomu 13 |
| Zespół Turnera (45,X) | brak jednego chromosomu X |
| Zespół Klinefeltera (47,XXY) | dodatkowy chromosom X |


**Szczegóły — w L090.**


## 10. Klinika błędów PUŁAPKI


### 10.1. Tabela błędów


        ****
        ****

        ****
        ****
        ****
        ********
        ****
        ****
        ****

    | Błąd | Poprawa | Dlaczego? |
| --- | --- | --- |
| „Mejoza zawsze tworzy gamety" | mejoza tworzy komórki haploidalne; u zwierząt → gamety, u roślin → spory | precyzja definicji |
| Gameta ma 46 chromosomów | komórka haploidalna ma 23 | redukcja 2n → n |
| Mejoza = mitoza | różne cele | redukcja vs zachowanie 2n |
| Rekombinacja w mejozie II | w profazie I | tylko tam są pary homologów |
| „Po mejozie I jest 23 chromatydy" | 23 chromosomy × 2 = 46 chromatyd | centromer = 1 chromosom |
| Mejoza daje 2 komórki | 4 komórki haploidalne | dwa podziały |
| Rekombinacja zmniejsza zmienność | zwiększa | wymiana fragmentów → nowe kombinacje |
| Nondysjunkcja = normalny etap | to błąd | prowadzi do aneuploidii |
| Bliźnięta jednojajowe = identyczne DNA | niemal identyczny genom jądrowy (drobne różnice epigenetyczne/mutacje somatyczne) | precyzja |
| „Rekombinacja zachodzi 1–2 razy na parę" | zwykle zachodzi w wielu miejscach genomu; liczba zależy od chromosomu i organizmu | unikać nieuzasadnionych liczb |


### 10.2. Klinika 2.0 — pięć pełnych przykładów


    Przykład 1 — „Mejoza zawsze daje cztery gamety"


- **Błąd:** „Mejoza zawsze daje cztery gamety."

- **Znajdź:** Pomylenie komórek haploidalnych z gametami.

- **Popraw:** Mejoza daje **cztery komórki haploidalne**; u mężczyzny → 4 plemniki, u kobiety → 1 komórka jajowa + ciałka kierunkowe.

- **Reguła:** Produkt mejozy ≠ zawsze liczba funkcjonalnych gamet.

- **Dlaczego:** W oogenezie cytoplazma dzielona nierówno, ciałka kierunkowe zanikają.

- **Pułapka:** „4 komórki = 4 gamety" — tylko w spermatogenezie.


    Przykład 2 — „Mejoza to mitoza w gonadach"


- **Błąd:** „Mejoza to mitoza, która zachodzi w jądrach/jajnikach."

- **Znajdź:** Pomylenie celu i wyniku liczbowego.

- **Popraw:** Mitoza: 2n → 2n. Mejoza: 2n → n.

- **Reguła:** Liczba zestawów po podziale = cel procesu.

- **Dlaczego:** Mitoza służy wzrostowi; mejoza — wytworzeniu komórek haploidalnych.

- **Podobne:** Mitoza: 1 podział. Mejoza: 2 podziały.

- **Pułapka:** „Oba dzielą komórkę" — ale w różnym celu.


    Przykład 3 — „Gameta ma tyle samo chromosomów co komórka ciała"


- **Błąd:** „Gameta ma 46 chromosomów."

- **Znajdź:** Mylenie n z 2n.

- **Popraw:** Komórka haploidalna ma **n = 23** chromosomy.

- **Reguła:** Mejoza redukuje 2n → n.

- **Podobne:** Zygota ma 2n = 46.

- **Pułapka:** „Gameta = komórka ciała" — nie, to komórka haploidalna.


    Przykład 4 — „Rekombinacja chromosomowa w mejozie II"


- **Błąd:** „Rekombinacja chromosomowa zachodzi w mejozie II."

- **Znajdź:** Zła faza.

- **Popraw:** Rekombinacja zachodzi w **profazie mejozy I**.

- **Reguła:** Wymaga **par homologów** — a te są tylko w mejozie I.

- **Dlaczego:** W mejozie II nie ma już par.

- **Pułapka:** „Rekombinacja w II" — niemożliwe, bo nie ma par.


    Przykład 5 — „Nondysjunkcja to normalny proces"


- **Błąd:** „Nondysjunkcja to normalny etap mejozy."

- **Znajdź:** Pomylenie błędu z procesem.

- **Popraw:** Nondysjunkcja to **błąd** rozchodzenia chromosomów.

- **Reguła:** Prawidłowo pary homologów (lub chromatydy) rozchodzą się po równo.

- **Dlaczego:** Nondysjunkcja prowadzi do aneuploidii (np. trisomia 21).

- **Pułapka:** „Czasem się zdarza" ≠ „normalny etap".


## 11. Obserwacja / model

    Problem: Jak z 46 chromosomów powstają komórki z 23?
Hipoteza: Przez redukcyjny podział (mejoza).
Materiał: schemat mejozy I i II.
Obserwacja: po mejozie I liczba chromosomów spada o połowę.
Wniosek: komórki haploidalne; zapłodnienie przywraca 2n.
Ograniczenia: schemat nie pokazuje wszystkich miejsc rekombinacji.
BHP: brak.


Schemat mejozy **nie jest** doświadczeniem — to model.


        ****
        ****

    | Typ | Przykład |
| --- | --- |
| Obserwacja | preparat mikroskopowy mejozy (np. w pylnikach cebuli), liczenie komórek |
| Model | schemat mejozy I i II, diagram rekombinacji chromosomowej |


## 12. Ćwiczenia (12A–12D) TRENING


### 12A. Mini-check (5 pytań)


- Mejoza (2n → ?)?

- Ile chromosomów w komórce haploidalnej człowieka?

- Co rozchodzi się w mejozie I?

- Podaj 2 źródła zmienności.

- Dlaczego „4 gamety" to uproszczenie?

    Pokaż odpowiedzi


- 2n → n.

- 23 chromosomy.

- Pary chromosomów homologicznych.

- Rekombinacja chromosomowa, niezależna segregacja, losowe zapłodnienie.

- Bo u kobiety powstaje tylko 1 funkcjonalna komórka jajowa + ciałka kierunkowe.


### 12B. Ćwiczenie prowadzone


**Dane:** Człowiek, 2n = 46.


**Krok 1.** Po replikacji: 46 chromosomów, 92 chromatydy.


**Krok 2.** Po mejozie I: 2 komórki, każda z 23 chromosomami (46 chromatyd).


**Krok 3.** Po mejozie II: 4 komórki, każda z 23 chromosomami (23 chromatydy).


**Krok 4.** Komórka haploidalna: n = 23.


**Spróbuj sam:** 2n = 16 → n = ?
    Pokaż odpowiedź


2n = 16 → n = **8**.


### 12C. Ćwiczenia samodzielne


#### A. Podstawa A


- Co to mejoza?

- Ile chromosomów w komórce haploidalnej człowieka?

- Czym różni się n od 2n?

- Podaj 2 źródła zmienności.

    Pokaż odpowiedzi


- Podział redukcyjny (2n → n), prowadzący do powstania komórek haploidalnych.

- 23 chromosomy (n).

- n = haploidalna (połowa), 2n = diploidalna (pełny zestaw).

- Rekombinacja chromosomowa, niezależna segregacja.


#### B. Trening B


- Popraw: „Mejoza daje 2n".

- Dlaczego rodzeństwo się różni?

- Co się dzieje po zapłodnieniu?

    Pokaż odpowiedzi


- Mejoza daje **n** (2n → n), nie 2n.

- Trzy mechanizmy zmienności (rekombinacja, segregacja, losowe zapłodnienie).

- Powstaje zygota 2n (23 + 23 = 46).


#### C. Ambitne C


- Mejoza I vs II — co się rozchodzi?

- Jak działa rekombinacja chromosomowa?

- Uzasadnij: 2n = 46 → n = 23.

    Pokaż odpowiedzi


- Mejoza I — pary homologów. Mejoza II — chromatydy siostrzane.

- Rekombinacja = wymiana fragmentów chromatyd niesiostrzanych w profazie I → nowe kombinacje alleli.

- Redukcja: 46 → 23 (połowa).


#### D. Zaawansowane D


- Co to nondysjunkcja?

- Dlaczego „4 gamety" to uproszczenie?

- Nondysjunkcja I vs II — różnica w produktach?

    Pokaż odpowiedzi


- Błąd rozchodzenia chromosomów w mejozie → komórka z n+1 lub n−1 → zygota 2n±1.

- U kobiety tylko 1 komórka jajowa jest funkcjonalna; pozostałe 3 to ciałka kierunkowe.

- **Nondysjunkcja I:** pary homologów nie rozchodzą się → wszystkie 4 komórki nieprawidłowe (2 z n+1, 2 z n−1). **Nondysjunkcja II:** chromatydy nie rozchodzą się → 2 prawidłowe (n), 1 z n+1, 1 z n−1.


### 12D. PROBLEM / THINK KONKURS


Dlaczego rodzeństwo (poza bliźniakami jednojajowymi) nie jest identyczne? Podaj **3 mechanizmy** i wyjaśnij każdy.
    Pokaż odpowiedź


**Trzy mechanizmy zmienności:**


- **Rekombinacja chromosomowa** — wymiana fragmentów chromatyd niesiostrzanych w profazie I → nowe kombinacje alleli na chromosomach.

- **Niezależna segregacja chromosomów** — losowe rozchodzenie się 23 par homologów → 2²³ ≈ 8,4 mln możliwych zestawów chromosomów w komórce haploidalnej.

- **Losowe zapłodnienie** przy zapłodnieniu → niemal nieskończona liczba kombinacji genów w zygocie.


**Wniosek:** Każdy człowiek (poza bliźniakami jednojajowymi) jest genetycznie unikalny, choć liczba możliwych kombinacji jest **skończona** (bardzo duża).


### Drabinka trudności


    | Poziom | Zadanie |
| --- | --- |
| ODTWÓRZ | Ile chromosomów w komórce haploidalnej człowieka? |
| ZASTOSUJ | 2n = 46 → ile po mejozie I? |
| WYJAŚNIJ | Dlaczego bez mejozy liczba chromosomów by rosła? |
| ODKRYJ | Co rozchodzi się w mejozie I, a co w II? |
| POŁĄCZ | Połącz 3 mechanizmy zmienności z tym, że rodzeństwo nie jest identyczne. |
| ZAKWESTIONUJ | Czy z faktu „4 komórki haploidalne" wynika „4 funkcjonalne gamety u kobiety"? |


## 13. Sposób oceniania


- **Podstawa:** 1 pkt.

- **Trening:** 1 pkt za wynik + 1 pkt za uzasadnienie.

- **Ambitne:** 2 pkt.

- **Zaawansowane:** 3 pkt.


## 14. Fiszki POWTÓRKA

    Mejoza — wynik**2n → n**podstawa
    Komórka haploidalna człowieka**23 chromosomy (n)**podstawa
    Zygota człowieka**46 chromosomów (2n)**podstawa
    Trzy źródła zmienności**Rekombinacja, segregacja, losowe zapłodnienie**podstawa
    Mejoza I — co się rozchodzi?**Pary chromosomów homologicznych**ambitny
    Mejoza II — co się rozchodzi?**Chromatydy siostrzane**ambitny
    „4 gamety" u człowieka?**Uproszczenie (oogeneza: 1 funkcjonalna)**pułapka
    Nondysjunkcja**Błąd rozchodzenia → aneuploidia**ambitny
    Liczba możliwych zestawów (bez rekombinacji)**2²³ = 8 388 608**ambitny
    Rekombinacja chromosomowa — kiedy?**Profaza I**podstawa
    Jedna replikacja?**Tak, przed mejozą**podstawa
    Liczba podziałów w mejozie**2 (mejoza I + II)**podstawa
    Oogeneza vs spermatogeneza**1 jajowa vs 4 plemniki**ambitny
    Trisomia 21**Nondysjunkcja chromosomu 21**ambitny
    Kto decyduje o płci?**Plemnik (X lub Y)**podstawa
    Synapsa chromosomów homologicznych**Łączenie się homologów w pary (profaza I)**ambitny
    Chiazma**Miejsce skrzyżowania chromatyd**ambitny


## 15. Test końcowy (3+2+2+1) TRENING


- (P) Co to mejoza (2n → ?)?

- (P) Ile chromosomów w komórce haploidalnej człowieka?

- (P) Podaj 3 źródła różnorodności.

- (T) Popraw: „Mejoza daje 2n".

- (T) Co po zapłodnieniu dwóch komórek haploidalnych 23 + 23?

- (A) Mejoza I vs II — co się rozchodzi?

- (A) Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne?

- (Z) Nondysjunkcja → jaka zygota?

    Pokaż odpowiedzi


- Podział redukcyjny: 2n → n.

- 23 chromosomy (n).

- Rekombinacja chromosomowa, niezależna segregacja, losowe zapłodnienie.

- Mejoza daje **n**, nie 2n.

- Zygota 2n = 46 chromosomów.

- Mejoza I — pary homologów. Mejoza II — chromatydy siostrzane.

- Trzy mechanizmy zmienności.

- Zygota 2n+1 (trisomia) lub 2n−1 (monosomia).


## 16. Checklista


- ☐ Wiem, że mejoza redukuje 2n → n.

- ☐ Znam 23 chromosomy w komórce haploidalnej.

- ☐ Wymieniam 3 źródła zmienności.

- ☐ Rozróżniam mejozę I i II.

- ☐ Wiem, że mejoza daje 4 komórki haploidalne (nie zawsze 4 gamety).

- ☐ Rozumiem nondysjunkcję (ambitny).

- ☐ Znam różnicę oogeneza vs spermatogeneza (ambitny).

- ☐ Wiem, że rekombinacja zachodzi w profazie I.


## 17. Mapa pojęć


[schemat SVG w HTML]

    Mapa pojęć L015 — od mejozy przez 3 źródła zmienności do unikalności genetycznej.


## 18. Co dalej? Jak się uczyć?


**Następna lekcja:** L016 — gdy podziały wymykają się kontroli (nowotwory).


**Most wstecz:** L014 (mitoza) vs L015 (mejoza) — tabela w sekcji 5.2.


**Plan nauki:**


- Ściąga + tabela mitoza/mejoza (7 min).

- Schemat mejozy I i II (7 min).

- Mini-check (5 min).

- Ćwiczenia A i B (10 min).

- Fiszki (10 min).

- Test końcowy (10 min).

- Powtórka za 1 dzień, 3 dni, tydzień.


### Powtórki rozłożone w czasie


    | Kiedy | Co | Czas |
| --- | --- | --- |
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |


## 19. Słownik


    | Termin | Definicja |
| --- | --- |
| Mejoza | Podział prowadzący do komórek haploidalnych (u zwierząt → gamety, u roślin → spory) |
| Komórka haploidalna (n) | Z jednym zestawem chromosomów |
| Komórka diploidalna (2n) | Z dwoma zestawami chromosomów |
| Gameta | Komórka rozrodcza (n) — u zwierząt |
| Zygota | Komórka po połączeniu dwóch komórek haploidalnych (2n) |
| Homologi | Para chromosomów: jeden od matki, jeden od ojca |
| Rekombinacja chromosomowa (crossing-over) | Wymiana fragmentów chromatyd niesiostrzanych w profazie I |
| Synapsa chromosomów homologicznych | Łączenie się homologów w pary w profazie I |
| Chiazma | Miejsce widocznego skrzyżowania chromatyd |
| Niezależna segregacja | Losowe rozchodzenie się par chromosomów w anafazie I |
| Nondysjunkcja | Błąd rozchodzenia chromosomów lub chromatyd |
| Aneuploidia | Nieprawidłowa liczba chromosomów (np. trisomia 21) |
| Oogeneza | Powstawanie komórek jajowych (1 funkcjonalna + ciałka kierunkowe) |
| Spermatogeneza | Powstawanie plemników (4 funkcjonalne) |
| Ciałko kierunkowe | Mała komórka powstająca w oogenezie, otrzymuje niewiele cytoplazmy, zwykle zanika |
| Mejoza I | Podział redukcyjny (rozdział par homologów) |
| Mejoza II | Podział zachowawczy (rozdział chromatyd) |


## 20. Dodatek zaawansowany ZAAWANSOWANY


### 20.1. Mejoza a starzenie komórek jajowych


Komórki jajowe są **zatrzymane w profazie I** od życia płodowego kobiety aż do owulacji. Przez dziesięciolecia mogą gromadzić uszkodzenia białek wrzeciona podziałowego — co zwiększa ryzyko **nondysjunkcji** i aneuploidii (np. trisomii 21).


### 20.2. Mejoza u roślin — cykl pełny


Sporofit (2n)
  ↓ mejoza
Spory (n)
  ↓ mitoza
Gametofit (n)
  ↓ mitoza
Gamety (n)
  ↓ zapłodnienie
Zygota (2n) → Sporofit (2n)


U zwierząt mejoza zachodzi bezpośrednio przed powstaniem gamet; u roślin mejoza tworzy **spory**, a gamety powstają z nich **przez mitozę**.


### 20.3. Nondysjunkcja I vs II — pełna tabela


    | Typ | Co się dzieje | Produkty mejozy |
| --- | --- | --- |
| Nondysjunkcja I | Pary homologów nie rozchodzą się w anafazie I | 2 komórki z n+1, 2 z n−1 |
| Nondysjunkcja II | Chromatydy nie rozchodzą się w anafazie II | 2 komórki prawidłowe (n), 1 z n+1, 1 z n−1 |


### 20.4. Mejoza a mutacje


W trakcie mejozy mogą wystąpić **błędy** (nondysjunkcja, niewłaściwa rekombinacja). Większość prowadzi do **niepłodności** lub **poronienia**, ale niektóre do chorób (np. trisomia 21).


### 20.5. Zadanie olimpijskie


**Pytanie:** Organizm ma 2n = 20. Ile chromosomów i chromatyd w komórce po mejozie I?


**Rozwiązanie:**


- 2n = 20 → po replikacji: 20 chromosomów, 40 chromatyd.

- Po mejozie I: 2 komórki, każda z **10 chromosomami** (20 chromatyd).


**Odpowiedź:** 10 chromosomów, 20 chromatyd w każdej z 2 komórek.


## 21. Połączenia międzyprzedmiotowe


- **Matematyka:** kombinatoryka (2²³), potęgi, prawdopodobieństwo.

- **Biologia:** rozmnażanie, dziedziczenie, zmienność, ewolucja.

- **Medycyna:** diagnostyka prenatalna, aneuploidie, niepłodność.

- **Rolnictwo:** hodowla, planowanie krzyżówek.

- **Etyka:** poradnictwo genetyczne (dyskusja).


## 22. Zadania z życia codziennego


- Dlaczego dzieci tej samej pary rodziców różnią się między sobą?

- Dlaczego wiek matki wpływa na ryzyko zespołu Downa?

- Jakie znaczenie ma mejoza w hodowli roślin i zwierząt?

- Dlaczego bracia i siostry mogą mieć różne grupy krwi?

- Czy bliźniaki jednojajowe mają identyczne DNA? (Zwykle **niemal identyczny genom jądrowy**, ale z czasem mogą pojawić się między nimi drobne różnice wynikające z mutacji somatycznych i zmian epigenetycznych.)


## 23. Status lekcji

    Wersja 5.1 (2026-09-13) — po korekcie merytorycznej


**Zachowano całą treść merytoryczną v5.0.**


**Poprawki w v5.1:**


- **Definicja mejozy:** uściślona — mejoza tworzy **komórki haploidalne** (u zwierząt → gamety, u roślin → spory).

- **Miejsce zachodzenia:** „komórki rozrodcze w gonadach: jądrach i jajnikach".

- **Rekombinacja chromosomowa:** usunięto nieuzasadnioną liczbę „1–2 razy na parę"; zamieniono na „zwykle zachodzi w wielu miejscach genomu".

- **Różnorodność:** „praktycznie nieskończona" → „bardzo duża liczba kombinacji (skończona)".

- **Nondysjunkcja II:** precyzyjnie — „2 komórki prawidłowe (n), 1 z n+1, 1 z n−1".

- **Bliźnięta jednojajowe:** „niemal identyczny genom jądrowy" (nie „identyczne DNA").

- **Mitoza:** „zachowuje informację komórki macierzystej; sporadyczne mutacje mogą powstać".

- **„4 gamety":** konsekwentnie mówimy o **4 komórkach haploidalnych**; osobno o spermatogenezie i oogenezie.

- **Sekcja 6.3:** usunięto błędne zdanie o „46 chromosomach"; zastąpiono klarownym wyjaśnieniem „pierwszy podział rozdziela pary, drugi — kopie chromosomów".

- **Sekcja 5.5:** dodano **zasadę liczenia centromerów** i kontrastowy przykład 2n = 8.

- **Terminologia:** polskie odpowiedniki — „rekombinacja chromosomowa", „synapsa chromosomów homologicznych", „chiazma", „powtórki rozłożone w czasie".

- **Język:** usunięto „praktycznie nieskończona różnorodność", „komórki nie wytrzymają", „ciałka są odrzucane".

- **Powtórzenia:** scalono tabele mitoza/mejoza; scalono nondysjunkcję; usunięto duplikację „jedna replikacja, dwa podziały".


**Zasada:** nic istotnego nie usunięto — tylko uporządkowano i uściślono.


**BIOLOGIA L015 v5.1** · Genetyka · Mejoza · 2n → n · Rekombinacja chromosomowa · Nondysjunkcja · 2026


Ucz się świadomie, nie na pamięć.

<details><summary>Wcześniejsza warstwa MD (zachowana, bez kasowania)</summary>


# L015 — Jak powstają gamety i skąd bierze się różnorodność?



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Mejoza i różnorodność.

`[BIO: DIAGRAM type=FLOW]`
`komórka 2n → mejoza → gamety n → zapłodnienie`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** redukcja liczby chromosomów + rekombinacja.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L014  
**Następna lekcja:** L016

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Jak powstają gamety (n) i dlaczego rodzeństwo nie jest identyczne?

---

## 2. Cele lekcji

Po lekcji uczeń:

- wyjaśnia, że mejoza redukuje **2n → n** (u człowieka 46 → 23),
- podaje, że gameta jest haploidalna (23 chromosomy),
- wymienia 3 źródła zmienności genetycznej,
- (ambitny) rozróżnia mejozę I (homologi) i II (chromatydy) oraz liczy chromosomy/chromatydy,
- (zaawansowany) zna nondysjunkcję, aneuploidię i różnicę oogeneza vs spermatogeneza.

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| 2n → n | kluczowa cecha mejozy |
| gameta = 23 | liczba u człowieka |
| 3 źródła zmienności | dlaczego rodzeństwo się różni |
| Mejoza I = homologi; II = chromatydy | co się rozchodzi |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**
L012 (chromosomy, homologi), L013 (replikacja), L014 (mitoza).

---

## 4. Zacznij od problemu
Gdyby gamety miały 46 chromosomów, zygota miałaby 92. Jak organizm utrzymuje 46?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Mejoza** — podział redukcyjny: 2n → n.

**U człowieka:** gameta = 23 chromosomy. Po zapłodnieniu: 23 + 23 = 46.

**Źródła różnorodności:**
1. Crossing-over
2. Niezależna segregacja
3. Losowe łączenie gamet

```text
2n → mejoza → n (gamety) → zapłodnienie → 2n (zygota)
```

**Uwaga:** „Mejoza daje cztery gamety” to uproszczenie — u kobiety 1 jajowa + ciałka kierunkowe.

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **2n → mejoza → n** | redukcja |
| 2 | **Mejoza I — homologi; II — siostry** | co się rozchodzi |
| 3 | **Crossing-over miesza** | zmienność |
| 4 | **23 + 23 = 46** | gamety + zygota |

---

## 6. Wyjaśnienie od podstaw  · **[PODSTAWA E8]**

**Mejoza** to podział redukcyjny, w którym z komórki diploidalnej (2n) powstają gamety haploidalne (n).  
U człowieka: **46 → 23**. Po zapłodnieniu: 23 + 23 = **46** (zygota 2n).

**Most z L014:** Mitoza zachowuje liczbę zestawów (2n → 2n). Mejoza **redukuje** (2n → n). Bez mejozy każde pokolenie miałoby dwa razy więcej chromosomów.

### Dwa podziały, jedna replikacja

Przed mejozą zachodzi **jedna** replikacja DNA (faza S, L013). Potem **dwa** podziały:

| | Co się rozchodzi? | Efekt na liczbę chromosomów |
|---|-------------------|------------------------------|
| **Mejoza I** | chromosomy **homologiczne** (pary) | redukcja 2n → n (każdy chromosom ma jeszcze 2 chromatydy) |
| **Mejoza II** | **chromatydy siostrzane** | utrzymanie n (każda gameta: 23 chromosomy = 23 chromatydy) |

**Reguła liczenia (jak w L012/L014):** liczymy chromosomy po **centromerach**. Po replikacji 46 chromosomów = 92 chromatydy; po mejozie I: 23 chromosomy (46 chromatyd); po mejozie II: 23 chromosomy.

### Źródła różnorodności (dlaczego rodzeństwo nie jest identyczne)

1. **Crossing-over** — wymiana odcinków DNA między homologami (zwykle w profazie mejozy I) → nowe kombinacje alleli na chromosomie.
2. **Niezależna segregacja** — losowe rozchodzenie się 23 par homologów → u człowieka **2²³ ≈ 8,4 mln** możliwych zestawów w jednej gamecie (bez crossing-over).
3. **Losowe łączenie gamet** przy zapłodnieniu → jeszcze większa liczba kombinacji zygoty.

### Uproszczenie „cztery gamety”
U mężczyzny (spermatogeneza): 4 funkcjonalne plemniki.  
U kobiety (oogeneza): **1** komórka jajowa + ciałka kierunkowe (cytoplazma dzielona nierówno).

### 6A. Dlaczego?

1. **Dlaczego redukcja konieczna?** Bez niej zygota miałaby 92, potem 184… — liczba chromosomów rosłaby z pokolenia na pokolenie.
2. **Dlaczego dwa podziały po jednej replikacji?** Mejoza I oddziela homologi (redukcja); mejoza II oddziela chromatydy (jak „mini-mitoza” haploidów).
3. **Dlaczego crossing-over zwiększa zmienność?** Homologi wymieniają odcinki → chromosom potomny ma mix alleli od matki i ojca rodzica.
4. **Dlaczego „4 gamety” to uproszczenie?** Liczba **komórek haploidalnych** ≠ liczba **funkcjonalnych gamet** (oogeneza).

### 6B. Krok po kroku (człowiek)
1. Start: komórka 2n = 46 → **replikacja** (L013) → 46 chromosomów, 92 chromatydy.
2. **Mejoza I:** pary homologów ustawiają się i rozchodzą → 2 komórki z **23 chromosomami** (każdy z 2 chromatydami).
3. **Mejoza II:** chromatydy siostrzane się rozchodzą → gamety z **23 chromosomami** (23 chromatydy).

### 6C. Przykład prowadzony
- Człowiek: 2n = 46 → gameta n = **23**.
- Organizm 2n = 16 → gameta n = **8**.
- Po zapłodnieniu dwóch gamet 23+23 → zygota **46**.

### 6D. Powiązanie
```text
L012 (chromosom, homologi, centromer)
  → L013 (replikacja = faza S)
  → L014 (mitoza: 2n → 2n)
  → L015 (mejoza: 2n → n) → gamety + allelle → L017 (dziedziczenie)
```

---

## 7. Poziom ambitny  · **[MASTER]**

**Mejoza I vs II (pełna tabela):**

| Cecha | Mejoza I | Mejoza II |
|-------|----------|-----------|
| Co się rozchodzi? | **homologi** (pary) | **chromatydy siostrzane** |
| Crossing-over | tak (profaza I) | nie |
| Redukcja 2n → n | **tak** | nie (utrzymanie n) |
| Liczba chromosomów (człowiek) | 46 → 23 | 23 → 23 |
| Chromatydy na chromosom | 2 → 2 (po I) | 2 → 1 (po II) |

**Pułapka:** „W mejozie rozchodzą się chromatydy” — **nie od razu**. Najpierw homologi (I), potem chromatydy (II).

**Most mitoza ↔ mejoza:**

| | Mitoza (L014) | Mejoza (L015) |
|---|---------------|---------------|
| Cel | odnowa ciała, wzrost | gamety |
| Wynik liczby | 2n → 2n | 2n → n |
| Liczba podziałów | 1 | 2 |
| Crossing-over | nie | tak (I) |

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

**Nondysjunkcja** — błąd rozchodzenia chromosomów w mejozie:

```text
błąd → gameta n+1 lub n−1
→ zapłodnienie z prawidłową gametą n
→ zygota 2n+1 (trisomia) lub 2n−1 (monosomia) → aneuploidia
```

Przykład: **trisomia 21** (zespół Downa). Ryzyko rośnie z wiekiem matki (dłuższe zatrzymanie oocytów w mejozie I).

**Oogeneza vs spermatogeneza:**

| | Spermatogeneza | Oogeneza |
|---|----------------|----------|
| Wynik | 4 plemniki | 1 komórka jajowa + ciałka kierunkowe |
| Cytoplazma | równo | nierówno (jajowa zbiera zasoby) |
| Czas | ciągła od dojrzewania | start w życiu płodowym; dokończenie przy owulacji/zapłodnieniu |

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Mejoza = zawsze 4 gamety u człowieka | uproszczenie | oogeneza: 1 jajowa |
| Gameta ma 46 | gameta ma **23** | redukcja 2n → n |
| Mejoza = mitoza | różne cele | redukcja vs zachowanie 2n |
| Crossing-over w mejozie II | typowo w **I** | tylko wtedy homologi w synapsis |
| „Po mejozie I jest już 23 chromatydy” | 23 chromosomy × 2 chromatydy | centromer = 1 chromosom |

### Klinika 2.0
**Błąd 1:** „Mejoza zawsze daje cztery plemniki i cztery komórki jajowe.”
- **Znajdź:** Uproszczenie szkolne.
- **Popraw:** ♂ 4 plemniki; ♀ 1 jajowa + ciałka kierunkowe.
- **Reguła:** Oogeneza ≠ spermatogeneza.
- **Dlaczego:** Cytoplazma nierówno dzielona — jajowa musi wyżywić zarodek.
- **Pułapka:** Liczba komórek haploidalnych ≠ liczba funkcjonalnych gamet.

**Błąd 2:** „Mejoza to to samo co mitoza, tylko w gonadach.”
- **Znajdź:** Pomylenie celu i wyniku liczbowego.
- **Popraw:** Mitoza: 2n → 2n (ciało). Mejoza: 2n → n (gamety).
- **Reguła:** Liczba zestawów po podziale = cel procesu.
- **Most:** L014 vs L015.

---

## 10. Obserwacja / model

```text
Problem: Jak z 46 chromosomów powstać gameta z 23?
Hipoteza: Przez redukcyjny podział (mejoza).
Materiał: schemat mejozy I i II.
Obserwacja: po mejozie I liczba chromosomów spada o połowę.
Wniosek: gamety haploidalne; zapłodnienie przywraca 2n.
Ograniczenia: nie pokazuje wszystkich crossing-over.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. Mejoza (2n → ?)? 2. Ile chromosomów w gamecie? 3. Co rozchodzi się w mejozie I? 4. 2 źródła zmienności? 5. Dlaczego „4 gamety” to uproszczenie?

### 11B. Ćwiczenie prowadzone
2n = 46 → gameta n = 23.  
**Spróbuj sam:** 2n = 16 → ?

### 11C. Ćwiczenia samodzielne
**A.** Mejoza? 23? n vs 2n? 2 źródła zmienności?
**B.** Popraw: „Mejoza daje 2n”. Dlaczego rodzeństwo się różni? Co po zapłodnieniu?
**C.** Mejoza I vs II. Crossing-over? Uzasadnij 2n=46 → 23.
**D.** Nondysjunkcja? „4 gamety” uproszczenie? Nondysjunkcja I vs II?

### 11D. PROBLEM / THINK
Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne? Podaj 3 mechanizmy.

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Ile chromosomów w gamecie człowieka? |
| ZASTOSUJ | 2n = 46 → ile w gamecie po mejozie? |
| WYJAŚNIJ | Dlaczego bez mejozy liczba chromosomów by rosła? |
| ODKRYJ | Co rozchodzi się w mejozie I, a co w II? |
| POŁĄCZ | Połącz 3 mechanizmy zmienności z tym, że rodzeństwo nie jest identyczne. |
| ZAKWESTIONUJ | Czy z samego faktu „4 komórki haploidalne” wynika „4 funkcjonalne gamety u kobiety”? |

---

## 12. Odpowiedzi

1. 2n → n. 2. 23. 3. n vs 2n. 4. Crossing-over, segregacja, losowe gamety. 5. Mejoza daje komórki n. 6. Różne kombinacje + crossing-over + losowe gamety. 7. Zygota 2n. 8. I — homologi; II — chromatydy. 9. Wymiana odcinków, typowo w I. 10. Redukcja o połowę. 11. Gameta n±1 → aneuploidia. 12. U kobiety 1 jajowa + ciałka. 13. Inny zestaw alleli.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Mejoza — wynik | 2n → n |
| Gameta człowieka | 23 chromosomy |
| Źródła zmienności | Crossing-over, segregacja, losowe gamety |
| Mejoza I | Homologi |
| Mejoza II | Chromatydy |
| „4 gamety” u człowieka? | Uproszczenie |
| Nondysjunkcja | Błąd rozchodzenia |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) Co to mejoza (2n → ?)? 2. (P) Ile chromosomów w plemniku? 3. (P) Podaj 3 źródła różnorodności. 4. (T) Popraw: „Mejoza daje 2n”. 5. (T) Co po zapłodnieniu dwóch gamet 23+23? 6. (A) Mejoza I vs II — co się rozchodzi? 7. (A) Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne? 8. (Z) Nondysjunkcja → jaka zygota?

## 15. Checklista
- [ ] Wiem, że mejoza redukuje 2n → n.
- [ ] Znam 23 chromosomy w gamecie.
- [ ] Wymieniam źródła zmienności.
- [ ] Rozróżniam mejozę I i II.
- [ ] Wiem, że „4 gamety” to uproszczenie.

## 16. Mapa pojęć
```text
MEJOZA
├── 2n → n
├── mejoza I (homologi)
├── mejoza II (chromatydy)
├── gamety
├── zmienność
└── nondysjunkcja → aneuploidia
```

## 17. Co dalej?
L016 — gdy podziały wymykają się kontroli (nowotwory).

**Most wstecz:** L014 (mitoza) vs L015 (mejoza) — tabela w sekcji 7.

## 18. Słownik
Mejoza · Gameta · Crossing-over · Nondysjunkcja · Aneuploidia · Oogeneza · Spermatogeneza.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Oogeneza vs spermatogeneza · nondysjunkcja I vs II · mapowanie genów.

## 20. Jak się uczyć?
Ściąga (5 min) → schemat mejozy (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

## 21. Połączenia międzyprzedmiotowe
Matematyka (2²³ kombinacji) · Biologia (rozmnażanie) · Etyka (dziedziczenie).

## 22. Zadania z życia codziennego
1. Dlaczego dzieci się różnią? 2. Dlaczego wiek matki wpływa na ryzyko Downa? 3. Jakie znaczenie ma mejoza w hodowli?


## L015 — warstwa v5.1/v5.2 (HTML + korekta; nic z v3.8 nie skreślono)

HTML: `lekcje_html/BIOLOGIA_L015_MEJOZA.html` (v5.1; dopisek v5.2 w pliku). Bez paska postępu i checkboxów TOC.

**Tytuł precyzyjny:** komórki haploidalne i różnorodność — u zwierząt z nich gamety, u roślin spory.

### Rdzeń E8
- Mejoza: 1 replikacja + 2 podziały → komórki **n**.
- Mejoza I rozdziela **pary homologów** (redukcja 2n → n). Mejoza II rozdziela **chromatydy siostrzane** (n zostaje n).
- Po mejozie I chromosom często wygląda jak X, bo ma **dwie chromatydy i jeden centromer** — i tak liczy się jako **jeden** chromosom.
- Trzy źródła różnorodności: rekombinacja chromosomowa (profaza I) · niezależna segregacja (ustawienie par w **metafazie I**) · losowe zapłodnienie.
- 2²³ = 8 388 608 zestawów w gamecie **przed** rekombinacją.
- Spermatogeneza: 4 funkcjonalne plemniki. Oogeneza: 1 duża komórka jajowa + ciałka kierunkowe; mejoza II u człowieka **po zapłodnieniu**.

### FIX (zamiast starych skrótów)
- Mejoza **nie** „w dojrzałych gametach”. Linia płciowa w gonadach → komórki haploidalne → dopiero z nich gamety.
- Homologi: te same geny w tych samych **loci**, mogą mieć różne **allele**.
- Wiek matki: rośnie ryzyko błędów rozchodzenia; jedna przyczyna — długie zatrzymanie mejozy. Nie sprowadzać do „gromadzenia uszkodzeń”.
- Różnorodność jest **skończona, ale ogromna** — nie „nieskończona”.
- Nondysjunkcja II: 2 komórki n + 1×(n+1) + 1×(n−1).
- Bliźnięta jednojajowe: niemal identyczny genom jądrowy (mutacje somatyczne / epigenetyka mogą dojść).

### Extra (zostaje, nie obowiązek E8)
Rośliny: mejoza → spory → gametofit → gamety mitozą. Nondysjunkcja I vs II pełna tabela. Starzenie oocytu.

### Zadania (uzasadnienie)
1. 2n = 12. Po replikacji: 12 chromosomów / 24 chromatydy. Po mejozie I: 6 / 12 w każdej z 2. Po mejozie II: 6 / 6 w każdej z 4.
2. „Po mejozie I każdy chromosom ma już jedną chromatydę” — **fałsz**. Redukcja par; chromatydy siostrzane do mejozy II.
3. Rekombinacja nie w mejozie II: homologi są już w **różnych** komórkach.

### Status L015 (2026-09-20)

MD = HTML na plus (wykład v3.8 + warstwa v5.1/v5.2). Brak luk merytorycznych do doklejania. Widgety/schematy SVG zostają w HTML.

</details>

<!-- ==================== END L015 ==================== -->


<!-- ==================== BEGIN L016 ==================== -->

# L016 — Co się dzieje, gdy podziały komórkowe wymykają się spod kontroli?

## KARTA LEKCJI L016

- Numer: L016
- Tytuł roboczy: Gdy podziały wymykają się spod kontroli
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L014 / L015 · Następna: L016A / L017
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Kontrola podziałów.

`[BIO: DIAGRAM type=FLOW]`
`sygnał → cykl komórkowy → kontrola → niekontrolowany wzrost`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** nowotwór jako zaburzenie kontroli, nie „osobna mutacja”.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L015  
**Następna lekcja:** L017

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Co się dzieje, gdy podziały komórkowe wymykają się spod kontroli?

---

## 2. Cele lekcji

Po lekcji uczeń:

- wyjaśnia, że nowotwór wiąże się z **niekontrolowanymi podziałami** komórek,
- wymienia czynniki ryzyka (UV, dym tytoniowy, chemikalia, wirusy, predyspozycje),
- rozróżnia: **mutacja ≠ nowotwór**; nowotwór często = **nagromadzenie** zmian,
- (ambitny) łączy uszkodzenie DNA / mutacje w genach kontroli cyklu z utratą checkpointów i apoptozy,
- (zaawansowany) zna ideę protoonkogen → onkogen oraz genów suppressorowych; somatyczne vs germinalne.

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| nowotwór = niekontrolowane podziały | definicja operacyjna |
| mutacja ≠ nowotwór | najczęstszy błąd |
| nagromadzenie zmian | mechanizm |
| UV, dym = mutageny | profilaktyka |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**
L014 (mitoza, cykl), L013 (replikacja), idea naprawy DNA.

---

## 4. Zacznij od problemu
Dlaczego UV i dym tytoniowy zwiększają ryzyko nowotworów?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Nowotwór** — choroba związana z **niekontrolowanymi podziałami** komórek.

**Czynniki ryzyka:** UV, dym tytoniowy, chemikalia, wirusy, predyspozycje.

**Ważne:** mutacja ≠ nowotwór; nowotwór = często **nagromadzenie** zmian.

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **UV + dym + X = mutagen** | czynniki |
| 2 | **Mutacja ≠ nowotwór** | rozróżnienie |
| 3 | **Nagromadzenie = nowotwór** | wiele zmian |
| 4 | **Apoptoza = sprzątanie** | programowana śmierć |

---

## 6. Wyjaśnienie od podstaw  · **[PODSTAWA E8]**

**Nowotwór** — choroba, w której komórki dzielą się **bez właściwej kontroli** cyklu komórkowego (most do L014: mitoza ma checkpointy; tu checkpointy zawodzą).

```text
mutagen (UV, dym, chemikalia…)
      ↓
uszkodzenie DNA
      ↓
naprawa OK  →  komórka „zdrowa”
naprawa zawodzi → mutacja
      ↓
kolejne mutacje w genach kontroli cyklu
      ↓
checkpoint zawodzi / brak apoptozy
      ↓
niekontrolowane podziały  →  możliwy nowotwór
```

**Apoptoza** — programowana śmierć komórki: „sprzątanie” uszkodzonych komórek, zanim staną się groźne.

**Kluczowa reguła:** **mutacja ≠ nowotwór**. Jedna zmiana w DNA prawie nigdy nie wystarcza; nowotwór to zwykle **nagromadzenie** kilku–kilkunastu zmian w genach kontroli.

### 6A. Dlaczego?

1. **Dlaczego UV i dym zwiększają ryzyko?** To **mutageny** — podnoszą liczbę uszkodzeń DNA → więcej szans na mutacje w genach kontroli.
2. **Dlaczego jedna mutacja zwykle nie wystarcza?** Cykl komórkowy ma wiele „hamulców” (checkpointy, apoptoza, geny suppressorowe). Trzeba wyłączyć kilka naraz.
3. **Dlaczego apoptoza jest ważna?** Usuwa komórkę z uszkodzonym DNA, zanim da początek klonowi niekontrolowanych podziałów.
4. **Dlaczego „nie każdy palacz ma raka”?** Ryzyko ≠ pewność. Potrzeba czasu + nagromadzenia zmian + pecha w genach kontroli.

### 6B. Krok po kroku
1. Mutagen → uszkodzenie DNA (L011/L013 — DNA jako nośnik informacji).
2. System naprawy DNA: sukces **albo** utrwalona mutacja.
3. Mutacje trafiają w geny kontroli cyklu (L014).
4. Checkpointy przestają zatrzymywać błędne komórki; apoptoza nie działa.
5. Niekontrolowane podziały → masa komórek (guz); czasem naciekanie / przerzuty (poziom zaawansowany).

### 6C. Przykład prowadzony
Osoba często opalająca się bez filtra UV:
- UV uszkadza DNA w komórkach skóry,
- część uszkodzeń nie zostaje naprawiona → mutacje,
- jeśli mutacje trafią w geny kontroli mitozy → komórki dzielą się mimo sygnałów „stop”,
- rośnie ryzyko nowotworu skóry (nie: „UV zawsze = rak”).

### 6D. Powiązanie
```text
L013 (replikacja, błędy DNA)
  → L014 (mitoza + checkpointy cyklu)
  → L016 (gdy kontrola zawodzi → nowotwór)
  → L020 (mutacje, dziedziczenie ryzyka — opcjonalnie)
```

---

## 7. Poziom ambitny  · **[MASTER]**

| Pojęcie | Znaczenie dla ucznia |
|---------|----------------------|
| Mutagen | czynnik zwiększający liczbę uszkodzeń DNA (UV, dym, niektóre chemikalia) |
| Checkpoint | „punkt kontrolny” cyklu — komórka nie powinna dzielić się z uszkodzonym DNA |
| Apoptoza | programowana śmierć — usunięcie komórki, której nie da się naprawić |
| Mutacja somatyczna | w komórce ciała — **nie** dziedziczy się na dzieci |
| Mutacja germinalna | w linii płciowej — **może** zwiększyć ryzyko u potomstwa |

**Most L014 → L016:** Mitoza ma wbudowane hamulce. Nowotwór = hamulce wyłączone + gaz wciśnięty (więcej podziałów).

**Profilaktyka (poziom trening/ambitny):** mniej mutagenów (filtr UV, niepalenie) = mniej „strzałów” w DNA = niższe ryzyko nagromadzenia zmian.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

**Protoonkogen → onkogen:** gen, który **pobudza** podziały; po mutacji „włączony na stałe” → sprzyja nowotworowi.  
**Gen suppressorowy (supresor nowotworu):** gen-hamulec; po mutacji (utrata funkcji) hamulec znika.

**Kancerogeneza wielostopniowa:** zwykle kilka niezależnych mutacji w różnych genach kontroli, zanim komórka stanie się nowotworowa.

**Somatyczne vs germinalne:**
- zdecydowana większość nowotworów = mutacje **somatyczne** (nie dziedziczne),
- rzadkie zespoły dziedziczne = mutacja germinalna w genie kontroli + dalsze mutacje somatyczne w życiu.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Mutacja = nowotwór / „rak” | mutacja ≠ nowotwór; potrzeba nagromadzenia | jedna zmiana rzadko wystarcza |
| Nowotwór zawsze dziedziczny | większość = somatyczna | zmiana nie jest w gametach |
| UV / dym **zawsze** powoduje raka | zwiększa **ryzyko** | probabilistyka, nie determinizm |
| „Skoro tata miał raka, ja też będę miał” | ryzyko ≠ pewność; zależnie od typu i genów | większość nowotworów nie jest silnie dziedziczna |

### Klinika 2.0
**Błąd 1:** „UV zawsze powoduje raka.”
- **Znajdź:** Determinizm zamiast ryzyka.
- **Popraw:** UV zwiększa ryzyko (więcej uszkodzeń DNA).
- **Reguła:** Ryzyko ≠ pewność.
- **Dlaczego:** Potrzeba nagromadzenia zmian w genach kontroli.
- **Podobne:** dym tytoniowy, niektóre chemikalia.

**Błąd 2:** „Mutacja w DNA = już nowotwór.”
- **Znajdź:** Pomylenie zdarzenia molekularnego z chorobą.
- **Popraw:** Mutacja = zmiana w DNA; nowotwór = choroba z niekontrolowanych podziałów (często po wielu mutacjach).
- **Reguła:** Mutacja ≠ nowotwór.
- **Most:** L011 (DNA) + L014 (kontrola mitozy).

---

## 10. Obserwacja / model

```text
Problem: Dlaczego UV zwiększa ryzyko?
Hipoteza: Uszkadza DNA → mutacje w genach kontroli.
Obserwacja: Wyższe ryzyko przy długotrwałej ekspozycji.
Wniosek: Mutageny podnoszą ryzyko niekontrolowanych podziałów.
Ograniczenia: korelacja ≠ determinizm.
BHP: ochrona przed UV.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. Nowotwór a podziały? 2. 3 czynniki? 3. Mutacja = nowotwór? 4. Apoptoza? 5. Dlaczego „nagromadzenie”?

### 11B. Ćwiczenie prowadzone
Palacz: dym → mutageny → uszkodzenia DNA → mutacje → możliwe zmiany w kontroli cyklu → nowotwór.

### 11C. Ćwiczenia samodzielne
**A.** Nowotwór? 3 czynniki? Mutacja = nowotwór?
**B.** Popraw: „Mutacja = rak”. Dlaczego dym? 
**C.** Uszkodzenie DNA → checkpoint → nowotwór? Somatyczne vs germinalne?
**D.** Protoonkogen (idea)? Dlaczego „nagromadzenie”?

### 11D. PROBLEM / THINK
Dlaczego nowotwór zwykle nie jest dziedziczny? Uzasadnij.

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to nowotwór (w jednym zdaniu)? |
| ZASTOSUJ | Podaj 3 czynniki ryzyka. |
| WYJAŚNIJ | Dlaczego UV zwiększa ryzyko nowotworu skóry? |
| ODKRYJ | Czy każda mutacja prowadzi do nowotworu? Uzasadnij. |
| POŁĄCZ | Połącz L014 (checkpointy) z mechanizmem nowotworu. |
| ZAKWESTIONUJ | „Tata miał raka → ja też będę miał” — czy to wynika z danych? |

---

## 12. Odpowiedzi

1. Niekontrolowane podziały komórek. 2. UV, dym, chemikalia / wirusy / predyspozycje. 3. Nie (mutacja ≠ nowotwór). 4. Zwiększa ryzyko (nie: „zawsze powoduje”). 5. Zawiera mutageny → więcej uszkodzeń DNA. 6. Uszkodzenie DNA → brak naprawy / checkpointów → niekontrolowane podziały. 7. Mutacje somatyczne nie dziedziczą się na dzieci. 8. Protoonkogen po mutacji → onkogen (sprzyja podziałom). 9. Potrzeba nagromadzenia wielu zmian w genach kontroli.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Nowotwór a podziały | Niekontrolowane |
| Mutacja = nowotwór? | Nie |
| Przykłady | UV, dym |
| Apoptoza | Programowana śmierć |
| Somatyczne vs germinalne | Nie dziedziczy vs może |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) Nowotwór a podziały? 2. (P) 2 czynniki? 3. (P) Mutacja = rak? 4. (T) Popraw. 5. (T) Dym a DNA. 6. (A) Checkpoint i apoptoza. 7. (A) Somatyczna vs germinalna. 8. (Z) Dlaczego „nagromadzenie”?

## 15. Checklista
- [ ] Łączę nowotwór z niekontrolowanymi podziałami.
- [ ] Znam czynniki ryzyka.
- [ ] Wiem, że mutacja ≠ nowotwór.
- [ ] Rozumiem ideę apoptozy.

## 16. Mapa pojęć
```text
CYKL KOMÓRKOWY
├── kontrola podziałów
├── uszkodzenie DNA
├── naprawa/apoptoza
└── gdy zawodzi → nowotwór
```

## 17. Co dalej?
L017 — dziedziczenie jednej cechy (Mendel, krzyżówki).

**Most wstecz:** L014 (prawidłowa mitoza) + L013 (DNA) → L016 (gdy kontrola zawodzi).

## 18. Słownik
Nowotwór · Mutagen · Apoptoza · Checkpoint · Protoonkogen.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Protoonkogen/onkogen · kancerogeneza wielostopniowa.

## 20. Jak się uczyć?
Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

## 21. Połączenia międzyprzedmiotowe
Medycyna (profilaktyka) · Chemia (mutageny) · Edukacja zdrowotna (UV).

## 22. Zadania z życia codziennego
1. Dlaczego warto stosować filtr UV? 2. Dlaczego nie każdy palacz ma raka? 3. Dlaczego badania przesiewowe są ważne?


---

## 23. UZUPEŁNIENIE v3.8+ (doklejone)

Nowotwór w kl. 8 = utrata kontroli cyklu komórkowego, nie „zakażenie”.

### Ściąga
- Cykl komórkowy ma punkty kontrolne (most L014).
- Nowotwór: komórki dzielą się wbrew sygnałom; mogą tworzyć guz.
- Łagodny vs złośliwy (szkolnie): ograniczony vs naciekanie / przerzuty (hasło).
- Mutacje (L020) mogą uszkadzać geny kontroli; mutageny (UV, dym, niektóre wirusy — hasło) zwiększają ryzyko, nie „wyrok 1:1”.
- Nie straszyć: większość mutacji nie kończy się nowotworem.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Rak = każdy guz | guz ≠ zawsze złośliwy |
| Nowotwór = zakaźny jak grypa | nie w modelu szkolnym kontaktu kropelkowego |
| Jedna mutacja = natychmiast choroba | zwykle seria zmian + czas |
| Mitoza jest „zła” | mitoza jest potrzebna; zła jest utrata hamulców |

### 3 zadania extra
1. Połącz L014 (mitoza) z „punkt kontrolny”.  
2. Dlaczego UV i nowotwór skóry bywają w jednej narracji szkolnej?  
3. Jednym zdaniem różnica łagodny / złośliwy (hasło).

Odpowiedzi: 1 kontrola „czy dzielić”; nowotwór = kontrola zawodna. 2 UV uszkadza DNA (mutagen). 3 złośliwy może naciekać / dawać przerzuty.

### Status
doklej 2026-09-12.


## 24. UZUPEŁNIENIE AUDYTOWE v4.2 — od uszkodzenia DNA do utraty kontroli

### 24.1. Pełny łańcuch przyczynowo-skutkowy
`uszkodzenie DNA → naprawa / brak naprawy → mutacja → zmiana genu kontroli → zaburzenie kontroli cyklu → niekontrolowane podziały`

To **model wyjaśniający**, a nie reguła, że każde uszkodzenie przechodzi całą tę drogę.

### 24.2. Mutacja, mutagen, nowotwór — trzy różne pojęcia
| Pojęcie | Co oznacza? |
|---|---|
| mutacja | trwała zmiana w DNA |
| mutagen | czynnik zwiększający prawdopodobieństwo uszkodzeń/mutacji |
| nowotwór | choroba związana z nieprawidłową kontrolą wzrostu i podziałów komórek |

**Pułapka:** mutagen nie jest „mutacją”, a mutacja nie jest automatycznie nowotworem.

### 24.3. Przykład prowadzony
**Sytuacja:** komórka ma uszkodzone DNA.

1. Systemy kontroli mogą zatrzymać cykl.
2. DNA może zostać naprawione.
3. Jeśli uszkodzenie nie zostanie prawidłowo naprawione, może zostać utrwalona mutacja.
4. Jeżeli zmiany dotyczą genów regulujących wzrost, podziały lub śmierć komórki, ryzyko nieprawidłowego rozrostu może wzrosnąć.
5. Nie oznacza to, że pojedyncze uszkodzenie = nowotwór.

### 24.4. Ćwiczenie „znajdź błąd”
**Zdanie:** „UV powoduje raka, więc każde uszkodzenie DNA prowadzi do nowotworu."

**Poprawa:** UV może zwiększać ryzyko przez uszkadzanie DNA, ale komórki mają mechanizmy naprawy i kontroli. Ryzyko nie oznacza pewności.

<!-- ==================== END L016 ==================== -->


<!-- ==================== BEGIN L016A ==================== -->

# L016A — Zmienność: dlaczego potomstwo nie jest kopią rodziców?

## KARTA LEKCJI L016A

- Numer: L016A
- Tytuł roboczy: Zmienność (szkic)
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L015 / L016 · Następna: L017
- Status treści: szkic / częściowa — treść do uzupełnienia
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty


**Typ:** GENETYKA / MOST

## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

`[BIO: DIAGRAM type=FLOW]`
`rodzice → mejoza → różne gamety → zapłodnienie → różne genotypy potomstwa`
`genotyp + środowisko → fenotyp`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** zmienność nie ma jednego źródła. Część różnic wynika z kombinacji alleli, część ze zmian DNA, a fenotyp może zależeć również od środowiska.

## 1. Pytanie przewodnie
Dlaczego rodzeństwo może mieć tych samych rodziców, a mimo to różnić się wieloma cechami?

## 2. Podstawa
**Zmienność** to różnice między osobnikami. W szkolnym ujęciu warto odróżnić:

- **zmienność środowiskową** — różnice wynikające z wpływu środowiska na organizm;
- **zmienność genetyczną** — różnice związane z materiałem genetycznym;
- **zmienność rekombinacyjną** — nowe kombinacje istniejących alleli, związane m.in. z mejozą, crossing-over i losowym łączeniem gamet;
- **zmienność mutacyjną** — wynikającą ze zmian w DNA.

### Ważne rozróżnienie
**Rekombinacja nie tworzy nowego allelu przez zmianę DNA.** Tworzy nowe kombinacje alleli. Nowe warianty sekwencji mogą powstawać wskutek mutacji.

## 3. Genotyp, środowisko i fenotyp
Uproszczony model szkolny:

`genotyp + środowisko + rozwój → fenotyp`

Nie oznacza to prostego dodawania. Czynniki mogą na siebie wzajemnie wpływać.

## 4. Przykład
Dwoje rodzeństwa otrzymuje od rodziców różne kombinacje alleli. Dodatkowo może mieć inny poziom aktywności, odżywianie, warunki życia lub przebieg rozwoju. Dlatego obserwowana cecha może się różnić nawet wtedy, gdy część materiału genetycznego jest wspólna.

## 5. Klinika błędów
| Błędne zdanie | Poprawa |
|---|---|
| „Każda różnica między ludźmi jest genetyczna.” | Nie. Na fenotyp wpływa także środowisko i rozwój. |
| „Crossing-over tworzy mutacje.” | Nie. Crossing-over prowadzi do rekombinacji. |
| „Mutacja zawsze jest szkodliwa.” | Nie. Skutek zależy od rodzaju i miejsca zmiany oraz kontekstu. |
| „Gen decyduje o cesze w 100%.” | To często zbyt proste. Wiele cech zależy od wielu genów i środowiska. |

## 6. Ćwiczenia
1. Podaj dwa źródła zmienności genetycznej.
2. Wyjaśnij różnicę między mutacją a rekombinacją.
3. Wyjaśnij, dlaczego bliźnięta jednojajowe mogą z czasem różnić się niektórymi cechami.
4. Uzasadnij zdanie: „Podobieństwo do rodziców nie oznacza identyczności”.

## 7. Odpowiedzi
1. Mutacje i rekombinacja.
2. Mutacja zmienia materiał genetyczny; rekombinacja tworzy nowe kombinacje już istniejących wariantów.
3. Wpływ środowiska, stylu życia i przebiegu rozwoju może prowadzić do różnic fenotypowych.
4. Potomek otrzymuje kombinację alleli, a nie kopię całego genotypu jednego z rodziców.

## 8. Most do kolejnych lekcji
- L015 pokazuje, **jak mejoza tworzy różnorodne gamety**.
- L017 pokazuje, **jak zapisać i przewidywać dziedziczenie**.
- L020 pokazuje, **jak zmiany DNA mogą prowadzić do mutacji i ich skutków**.

## 9. Słownik
**Zmienność, rekombinacja, crossing-over, mutacja, genotyp, fenotyp, środowisko.**

<!-- ==================== END L016A ==================== -->


<!-- ==================== BEGIN L017 ==================== -->

# L017 — Jak przewidywać dziedziczenie jednej cechy?

## KARTA LEKCJI L017

- Numer: L017
- Tytuł roboczy: Dziedziczenie jednej cechy (Punnett)
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L015 · Następna: L018
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L017_PUNNETT.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Krzyżówka genetyczna.

`[BIO: DIAGRAM type=FLOW]`
`rodzice → gamety → potomstwo → genotyp → fenotyp`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** najpierw założenia modelu, potem rachunek.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]  
**Poprzednia lekcja:** L016 (kontrola podziałów / nowotwory)  
**Następna lekcja:** L018 (płeć i cechy sprzężone z X)

**Wersja:** v5.0 (2026-09-13) — przebudowa strukturalna: dodano wprowadzenie, pełne wyjaśnienia definicji, logikę narzędzia, osobną sekcję o krzyżówce testowej, ograniczenia Punnett. **Nic nie usunięto** względem v3.8/v4.0/v4.1/v4.2 — wszystko rozbudowano.

---

## Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L011, L012, L015, L010) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 10 Klinika |
| **[TRENING]** | pkt 12–15 (ćwiczenia, test) |
| **[MASTER]** | pkt 8 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 9 + pkt 20 |
| **[KONKURS]** | pkt 12D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 14 Fiszki |

**Most obowiązkowy:** L015 (mejoza → gameta ma 1 allel) → **L017 (Punnett)** → L018 (X-linked).  
**Mosty dodatkowe:** L011 (DNA → gen), L019 (ABO — kodominacja), L020 (mutacje → allele).

---

## 0. Wprowadzenie — o co tu właściwie chodzi? [NOWE]

Wyobraź sobie, że masz dwa psy tej samej rasy. Jeden ma uszy sterczące, drugi opadające. Chcesz wiedzieć: **czy ich szczenięta będą miały uszy sterczące czy opadające?** A może jedne i drugie? W jakich proporcjach?

Albo inaczej: rodzice mają brązowe oczy, a dziecko niebieskie. **Czy to w ogóle możliwe?** Skąd wiadomo, że to nie pomyłka?

Jeszcze inaczej: w rodzinie pojawia się choroba, która „przeskakuje pokolenia". Dziadek chorował, ojciec nie, a syn tak. **Jak to możliwe?**

Wszystkie te pytania sprowadzają się do jednego: **jak przewidzieć, jakie cechy będzie miało potomstwo, jeśli znamy cechy rodziców?**

Właśnie tym zajmuje się **genetyka klasyczna** — a konkretnie **dziedziczenie jednogenowe** (dziedziczenie jednej cechy). Na tej lekcji nauczysz się:

1. **Co to znaczy „cecha dziedziczna"** i jak jest zapisana w DNA.
2. **Jak przewidzieć**, jakie cechy może mieć potomstwo — za pomocą narzędzia zwanego **szachownicą (kwadratem) Punnetta**.
3. **Jak obliczyć prawdopodobieństwo** — i dlaczego „25%" nie znaczy „co czwarte dziecko".
4. **Jak sprawdzić**, czy osobnik o cesze dominującej jest homo- czy heterozygotą (krzyżówka testowa).
5. **Kiedy to narzędzie przestaje działać** (ograniczenia Punnett).

### Skąd ta nazwa — Reginald Punnett

**Reginald Crundall Punnett** (1875–1967) był angielskim genetykiem, jednym z pierwszych, którzy spopularyzowali prawa Mendla w Anglii. Około 1900 r. wymyślił prosty diagram — kwadrat — który pozwala **zobaczyć wszystkie możliwe kombinacje alleli** u potomstwa. Do dziś używa się go na całym świecie.

Punnett był nie tylko twórcą szachownicy. Napisał także **„Mendelism" (1905)** — pierwszy podręcznik o prawach Mendla — i razem z Williamem Batesonem założył **„Journal of Genetics"**, jedno z najstarszych czasopism genetycznych. Ale najbardziej zapamiętano go właśnie za kwadrat, który nosi jego imię.

> **Kluczowa myśl:** Punnett to **narzędzie wizualne**. Nie „wróży" konkretnych dzieci — pokazuje **wszystkie możliwe wyniki i ich prawdopodobieństwa**. To różnica między „co czwarte dziecko będzie chore" (błąd!) a „każde dziecko ma 25% szansy" (prawda).

### Dlaczego to ma znaczenie?

- **W medycynie:** poradnictwo genetyczne — ocena ryzyka chorób dziedzicznych.
- **W rolnictwie:** hodowla odmian o pożądanych cechach.
- **W hodowli zwierząt:** planowanie krzyżówek.
- **W kryminalistyce:** wykluczanie ojcostwa (uproszczone).
- **W codziennym życiu:** zrozumienie, dlaczego dziecko może wyglądać inaczej niż rodzice.

---

## 1. Pytanie przewodnie

Jak przewidywać dziedziczenie jednej cechy na podstawie alleli rodziców?

---

## 2. Cele lekcji (+ 80/20 — wyjaśnione)

Po lekcji uczeń:

- **definiuje** podstawowe pojęcia: gen, allel, genotyp, fenotyp, homozygota, heterozygota, dominujący, recesywny — i **rozumie, skąd się one biorą**,
- **zapisuje i odczytuje** krzyżówkę jednogenową (kwadrat Punnetta),
- **oblicza** stosunki genotypów (1:2:1) i fenotypów (3:1 przy pełnej dominacji),
- **uzasadnia** wynik mejozą (L015) i **rozróżnia** prawdopodobieństwo od „gwarancji kolejności",
- **(ambitny)** zna ideę dominacji niepełnej, kodominacji i testu krzyżowego,
- **(zaawansowany)** rozumie ograniczenia Punnett i potrafi je ominąć rachunkiem prawdopodobieństwa.

### Zasada 80/20 — co naprawdę daje 80% efektu (i dlaczego)

| 20% = 80% efektu | Dlaczego to jest kluczowe |
|---|---|
| **Allel to wersja genu; homo = dwie takie same, hetero = dwie różne** | Bez tego nie odróżnisz AA od Aa i nie zrozumiesz, dlaczego fenotyp bywa mylący |
| **Punnett to tabela: gamety jednego rodzica × gamety drugiego** | To jest **cała mechanika** — reszta to interpretacja |
| **3:1 i 1:2:1** | Najczęstsze wyniki w zadaniach; musisz je rozpoznawać natychmiast |
| **P = 25% ≠ „co czwarte dziecko"** | Najczęstszy błąd w zadaniach i w rozumieniu genetyki |
| **Gameta ma 1 allel, bo mejoza rozdziela homologi** | To łączy L017 z L015 — bez tego Punnett to „magia" |

**Dlaczego to wystarczy?** Bo 90% zadań E8 o dziedziczeniu jednogenowym sprowadza się do: zapisz genotypy → wypisz gamety → zrób Punnett → odczytaj stosunek. Reszta to niuanse.

---

## 3. Co trzeba wiedzieć wcześniej (kompas) · **[PRZYPOMNIENIE]**

- **L011:** DNA to nośnik informacji; informacja jest w kolejności zasad.
- **L012:** chromosomy homologiczne — w komórce ciała masz po jednym chromosomie od każdego rodzica.
- **L015:** mejoza redukuje 2n → n; **gameta dostaje jeden chromosom z pary homologicznej** → **jeden allel z pary genów**.
- **L010:** fenotyp = geny + środowisko + rozwój.

> **Jeśli nie pamiętasz, jak powstają gamety — wróć do L015, sekcja 6B. To fundament Punnett.**

---

## 4. Zacznij od problemu

**Rodzice mają cechę dominującą, dziecko — recesywną. Czy to możliwe? Jakie genotypy?**

**Hipoteza ucznia:** ....................................

**Podpowiedź:** Jeśli dziecko ma cechę recesywną (aa), to **oboje rodzice musieli dać mu „a"**. Więc oboje muszą być co najmniej heterozygotami (Aa). Ale jak to możliwe, że rodzice z cechą dominującą mają dziecko z recesywną? Bo **dominująca nie znaczy „jedyna"** — heterozygota Aa wygląda jak dominująca, ale nosi ukryte „a".

**Po lekcji wróć do hipotezy i sprawdź, czy była trafna.**

---

## 5. Ściąga — poziom podstawowy · **[PODSTAWA E8]**

### 5.1. Skąd się bierze cały zapis — od DNA do allelu

Zacznijmy od początku:

1. **DNA** (L011) to cząsteczka, która przechowuje informację.
2. **Gen** to odcinek DNA, który zawiera informację o jednym produkcie (białku/RNA), a ten produkt wpływa na cechę.
3. **Allel** to **wersja genu**. Ten sam gen może występować w różnych wersjach — np. allel „A" (dominujący) i allel „a" (recesywny).
4. W komórce ciała (2n) masz **dwa allele** tego samego genu — jeden na chromosomie od matki, drugi od ojca (chromosomy homologiczne, L012).
5. W **gamecie** (n) masz **jeden allel** — bo w mejozie I homologi się rozchodzą (L015).

> **To jest cała logika:** dwa allele w komórce ciała → jeden allel w gamecie → Punnett pokazuje, co się stanie, gdy dwa allele się spotkają.

### 5.2. Definicje — pełne wyjaśnienie (nie tylko tabela)

| Termin | Definicja | Co to znaczy w praktyce | Przykład |
|---|---|---|---|
| **Gen** | Odcinek DNA związany z cechą | „Przepis" na białko, które wpływa na cechę | Gen barwy kwiatu |
| **Allel** | Wersja genu | Ten sam gen, ale inna „wersja" | A (czerwony) / a (biały) |
| **Genotyp** | Zestaw alleli | To, co jest w DNA — „litery" | AA, Aa, aa |
| **Fenotyp** | Ujawniona cecha | To, co widać / mierzymy | Czerwony lub biały kwiat |
| **Homozygota** | Dwa takie same allele | AA lub aa | AA — dwa dominujące |
| **Heterozygota** | Dwa różne allele | Aa | Aa — jeden dominujący, jeden recesywny |
| **Dominujący** | Ujawnia się w heterozygocie | Wystarczy jeden allel, by cecha się pojawiła | A w Aa daje czerwony |
| **Recesywny** | Tylko w homozygocie | Potrzeba dwóch, by cecha się pojawiła | aa daje biały |

**Uwaga:** „Dominujący" **nie** znaczy: silniejszy, częstszy, lepszy, zdrowszy. To tylko opis **sposobu ujawniania się** w fenotypie.

### 5.3. Dlaczego AA i Aa mogą wyglądać tak samo?

Przy **pełnej dominacji** allel A „przykrywa" efekt allelu a. Więc:
- AA → fenotyp dominujący
- Aa → fenotyp dominujący (bo A przykrywa a)
- aa → fenotyp recesywny (bo nie ma A)

**Skutek:** z samego wyglądu **nie** odczytasz, czy ktoś to AA, czy Aa. To jest właśnie powód, dla którego istnieje **krzyżówka testowa** (sekcja 7).

### 5.4. Skąd gameta ma jeden allel? (most do L015)

W **mejozie I** chromosomy homologiczne się rozchodzą. Każda gameta dostaje **jeden chromosom z pary** → **jeden allel z pary genów**.

- AA → wszystkie gamety mają A
- aa → wszystkie gamety mają a
- Aa → połowa gamet ma A, połowa ma a (50/50)

**To dlatego w Punnett na brzegach piszemy pojedyncze litery (A, a), a nie pary (Aa).**

### 5.5. Konwencja zapisu

- **Wielka litera** = allel dominujący (A).
- **Mała litera** = allel recesywny (a).
- **Zapis heterozygoty:** zwykle duża litera pierwsza (Aa, nie aA).
- **Zapis homozygoty:** AA lub aa.

To konwencja, nie prawo natury. W innych podręcznikach mogą być inne litery (np. B/b, D/d) — zasada pozostaje ta sama.

### 5.6. Mnemotechniki

| # | Mnemotechnika | Znaczenie |
|---|---|---|
| 1 | **Duża = dominujący, mała = recesywny** | konwencja zapisu (nie „lepszy") |
| 2 | **Homo = te same, hetero = różne** | AA / Aa / aa |
| 3 | **1:2:1 → „jeden AA, dwa Aa, jeden aa"** | genotypy |
| 4 | **3:1 → „trzy dominujące, jeden recesywny"** | fenotypy |
| 5 | **Gameta = 1 litera, nie 2** | most do mejozy |

### 5.7. Tabela zbiorcza — genotyp → fenotyp

| Genotyp | Nazwa | Fenotyp (pełna dominacja) |
|---|---|---|
| AA | homozygota dominująca | cecha dominująca |
| Aa | heterozygota | cecha dominująca (ale nosi ukryte a) |
| aa | homozygota recesywna | cecha recesywna |

---

## 6. Wyjaśnienie od podstaw · **[PODSTAWA E8]**

### 6.1. Po co w ogóle Punnett? (logika narzędzia)

Wyobraź sobie, że masz dwie monety. Każda może wypaść orłem (O) lub reszką (R). Chcesz wiedzieć, **jakie są możliwe wyniki rzutu dwiema monetami**:

| | O | R |
|---|---|---|
| **O** | OO | OR |
| **R** | RO | RR |

To dokładnie ten sam pomysł co Punnett! Tyle że zamiast monet mamy **gamety**, a zamiast orła/reszki — **allele**.

**Punnett to tabela, która pokazuje wszystkie możliwe połączenia gamet.**

### 6.2. Jak zrobić Punnett — krok po kroku

1. **Zapisz genotypy rodziców** (np. Aa × Aa).
2. **Wypisz gamety każdego rodzica** (po jednym allelu z pary):
   - Aa → A i a
   - AA → A i A (wszystkie takie same)
   - aa → a i a
3. **Narysuj tabelę:** gamety jednego rodzica u góry, drugiego z boku.
4. **Wypełnij pola:** w każdą kratkę wpisz jeden allel z góry + jeden z boku.
5. **Policz genotypy** (ile AA, ile Aa, ile aa).
6. **Zamień na fenotypy** (pamiętając o dominacji).

### 6.3. Przykład prowadzony — Aa × Aa (pełny tok rozumowania)

**Dane:** Oboje rodzice to heterozygoty Aa (np. czerwone kwiaty, ale noszą ukryty allel biały).

**Krok 1.** Gamety każdego rodzica: A i a.

**Krok 2.** Tabela:

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

**Krok 3.** Genotypy: AA (1), Aa (2), aa (1) → stosunek **1:2:1**.

**Krok 4.** Fenotypy (pełna dominacja): AA i Aa = czerwone, aa = białe → stosunek **3:1**.

**Krok 5.** Prawdopodobieństwa: P(AA) = 1/4, P(Aa) = 2/4 = 1/2, P(aa) = 1/4.

**Wniosek:** 75% potomstwa będzie miało kwiaty czerwone, 25% białe.

### 6.4. Dlaczego 3:1, a nie 2:2? (kluczowe pytanie)

Bo **tylko jedno z czterech pól** daje fenotyp recesywny (aa). Pozostałe trzy (AA, Aa, Aa) dają fenotyp dominujący. To nie „2 dominujące i 2 recesywne" — to „3 dominujące i 1 recesywny".

### 6.5. Dlaczego 1:2:1, a nie 1:1:2?

Bo heterozygota Aa powstaje na **dwa sposoby**:
- A od matki + a od ojca
- a od matki + A od ojca

To dwa różne pola w tabeli, ale **ten sam genotyp** (Aa). Dlatego Aa występuje **dwa razy** częściej niż AA czy aa.

### 6.6. Cztery podstawowe krzyżówki — pełne tabele

#### AA × AA

| | A | A |
|---|---|---|
| **A** | AA | AA |
| **A** | AA | AA |

→ **100% AA** · 100% fenotyp dominujący

#### aa × aa

| | a | a |
|---|---|---|
| **a** | aa | aa |
| **a** | aa | aa |

→ **100% aa** · 100% fenotyp recesywny

#### AA × aa

| | A | A |
|---|---|---|
| **a** | Aa | Aa |
| **a** | Aa | Aa |

→ **100% Aa** · 100% fenotyp dominujący (ale wszyscy to nosiciele)

#### Aa × Aa

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

→ **1 AA : 2 Aa : 1 aa** (genotypy) · **3:1** (fenotypy)

#### Aa × aa (test krzyżowy)

| | A | a |
|---|---|---|
| **a** | Aa | aa |
| **a** | Aa | aa |

→ **1 Aa : 1 aa** · **1:1** (dominujący : recesywny)

### 6.7. Tabela zbiorcza — wyniki krzyżówek

| Rodzice | Potomstwo (genotypy) | Potomstwo (fenotypy) | Po co |
|---|---|---|---|
| AA × AA | 100% AA | 100% dominujący | linia czysta dominująca |
| aa × aa | 100% aa | 100% recesywny | linia czysta recesywna |
| AA × aa | 100% Aa | 100% dominujący | pokolenie F1 u Mendla |
| Aa × Aa | 1:2:1 | 3:1 | F2, klasyka E8 |
| Aa × aa | 1:1 | 1:1 | test krzyżowy |

### 6.8. 6A. Dlaczego?

1. **Dlaczego gameta ma jeden allel?** Bo w mejozie I homologi się rozchodzą (L015).
2. **Dlaczego połączenie gamet jest losowe?** Losowy plemnik × losowa komórka jajowa.
3. **Dlaczego przy Aa × Aa jest 3:1, a nie 2:2?** Cztery równoprawdopodobne pola Punnetta; tylko jedno (aa) daje fenotyp recesywny.
4. **Dlaczego genotypy 1:2:1, a nie 1:1:2?** Heterozygota Aa powstaje na **dwa** sposoby (A od matki + a od ojca **oraz** odwrotnie).

### 6.9. 6B. Krok po kroku — jak zrobić Punnett

1. Zapisz genotypy rodziców.
2. Wypisz gamety każdego rodzica (po jednym allelu z pary).
3. Zbuduj tabelę: gamety jednego rodzica u góry, drugiego z boku.
4. Wypełnij pola (łącz po jednym allelu z każdej strony).
5. Odczytaj genotypy i policz stosunek.
6. Zamień na fenotypy (pamiętając o dominacji).

**Gamety:**
- AA → wszystkie A
- aa → wszystkie a
- Aa → połowa A, połowa a

### 6.10. 6C. Przykład prowadzony — pełny

**Dane:** Krzyżówka Aa × Aa (np. dwa czarne koty, które noszą ukryty allel na rude futro).

**Pytanie:** Jakie jest prawdopodobieństwo, że kocię będzie rude?

**Rozumowanie:**
1. Każdy rodzic Aa → gamety: A i a (po 50%).
2. Punnett:

| | A | a |
|---|---|---|
| **A** | AA (czarny) | Aa (czarny) |
| **a** | Aa (czarny) | aa (rudy) |

3. Genotypy: 1 AA : 2 Aa : 1 aa.
4. Fenotypy: 3 czarne : 1 rudy.
5. P(rudy) = P(aa) = 1/4 = 25%.

**Odpowiedź:** Prawdopodobieństwo, że kocię będzie rude, wynosi 25% — ale to **przy każdym kocięciu osobno**, nie „co czwarte".

### 6.11. 6D. Powiązanie z innymi lekcjami

```
L011 (DNA) → L012 (chromosom) → L015 (mejoza → gameta z 1 allelem)
  → L017 (Punnett) → L018 (płeć / X-linked) → L019 (ABO) → L020 (mutacje)
```

- **L011:** gen = odcinek DNA.
- **L012:** chromosomy homologiczne — dwa allele w komórce ciała.
- **L015:** mejoza → gameta ma jeden allel.
- **L018:** płeć i cechy sprzężone z X — inna „geometria" dziedziczenia.
- **L019:** ABO — wyjątek: 3 allele + kodominacja.
- **L020:** mutacje → nowe allele → zmienność.

---

## 7. Krzyżówka testowa — pełne wyjaśnienie [NOWA SEKCJA]

### 7.1. Problem: nie wiesz, czy osobnik dominujący to AA czy Aa

Masz roślinę o czerwonych kwiatach. Wiesz, że ma **co najmniej jeden allel A**. Ale czy jest:
- **AA** (homozygota dominująca), czy
- **Aa** (heterozygota)?

Z **fenotypu** tego nie odróżnisz — oba wyglądają tak samo (sekcja 5.3).

### 7.2. Rozwiązanie: skrzyżuj z homozygotą recesywną (aa)

To właśnie **krzyżówka testowa** (inaczej: test cross, krzyżówka wsteczna).

**Jeśli testowany osobnik to AA:**

| | A | A |
|---|---|---|
| **a** | Aa | Aa |
| **a** | Aa | Aa |

→ **100% Aa** → **wszystkie dzieci dominujące** (100% czerwonych)

**Jeśli testowany osobnik to Aa:**

| | A | a |
|---|---|---|
| **a** | Aa | aa |
| **a** | Aa | aa |

→ **50% Aa, 50% aa** → **połowa dzieci recesywnych** (50% białych)

### 7.3. Wniosek

- Jeśli w potomstwie **pojawi się choć jedno dziecko z cechą recesywną** → testowany osobnik był **Aa**.
- Jeśli **wszystkie** dzieci mają cechę dominującą → prawdopodobnie **AA** (ale przy małej liczbie potomstwa to tylko sugestia — może być Aa, które przypadkiem nie dało aa).

> **Uwaga praktyczna:** „Wszystkie dzieci dominujące" przy **małej** liczbie potomstwa **nie dowodzi** AA. Dopiero duża próba (dziesiątki, setki) daje pewność statystyczną.

### 7.4. Po co to komu?

- **Rolnictwo:** selekcja odmian homozygotycznych pod względem pożądanych cech (np. odporność na choroby).
- **Hodowla zwierząt:** planowanie krzyżówek w celu uzyskania pożądanych cech.
- **Medycyna:** ocena ryzyka chorób recesywnych u potomstwa.

### 7.5. Przykład praktyczny

**Dane:** Hodowca ma byka o pożądanej cesze dominującej (np. duża masa mięśniowa). Chce wiedzieć, czy byk jest AA (homozygota) czy Aa (heterozygota) — bo tylko AA daje **wszystkim** potomstwu pożądaną cechę.

**Rozwiązanie:** Krzyżuje byka z krowami o cesze recesywnej (aa). Jeśli w potomstwie pojawi się choć jedno cielę bez pożądanej cechy → byk był Aa. Jeśli wszystkie cielęta mają pożądaną cechę → prawdopodobnie AA.

---

## 8. Poziom ambitny · **[MASTER]**

### 8.1. Prawdopodobieństwo ≠ przeznaczenie

P(aa) = 1/4 przy **każdym** dziecku osobno — niezależnie od tego, co było wcześniej.

| Sytuacja | Prawda |
|---|---|
| Rodzina ma już 3 dzieci z cechą dominującą | 4. dziecko **nadal** ma P(aa) = 1/4 |
| „Co czwarte musi być recesywne" | **Fałsz** — to nie kolejka, tylko P |
| Dwoje kolejnych dzieci aa | P = 1/4 × 1/4 = **1/16** (reguła iloczynu) |

**Analogia:** Rzut monetą 4 razy nie gwarantuje 2 orłów i 2 reszek. Tak samo 4 dzieci Aa × Aa nie gwarantuje dokładnie 3:1. Mendel mówił o **dużej liczbie** potomstwa, nie o czwórce dzieci w jednej rodzinie.

### 8.2. Reguła iloczynu i sumy

- **Reguła iloczynu:** P(A i B) = P(A) · P(B) — gdy zdarzenia są niezależne.
- **Reguła sumy:** P(A lub B) = P(A) + P(B) — gdy zdarzenia się wykluczają.

**Przykłady:**
- P(dwoje kolejnych dzieci aa) = 1/4 · 1/4 = **1/16**
- P(dokładnie jedno z dwojga dzieci aa) = 1/4 · 3/4 + 3/4 · 1/4 = **3/8**
- P(co najmniej jedno z dwojga aa) = 1 − P(żadne aa) = 1 − (3/4 · 3/4) = 1 − 9/16 = **7/16**

### 8.3. Zadanie odwrócone

Rodzice z fenotypem dominującym + dziecko recesywne (aa) → **oboje rodzice muszą być Aa × Aa**.

**Dlaczego?** Bo dziecko aa potrzebuje dwóch alleli „a" — po jednym od każdego rodzica. Skoro rodzice mają fenotyp dominujący, ich genotypy to A_, ale skoro dają „a", muszą być Aa.

### 8.4. Ćwiczenie myślowe

Rzut monetą 4 razy nie gwarantuje 2 orłów i 2 reszek — tak samo 4 dzieci Aa × Aa nie gwarantuje dokładnie 3:1.

Możliwe wyniki w rodzinie z 4 dzieci (Aa × Aa):
- 4 dominujące: P = (3/4)⁴ = 81/256 ≈ 32%
- 3 dominujące, 1 recesywne: P = 4 · (3/4)³ · (1/4) = 108/256 ≈ 42%
- 2 dominujące, 2 recesywne: P = 6 · (3/4)² · (1/4)² = 54/256 ≈ 21%
- 1 dominujące, 3 recesywne: P = 4 · (3/4) · (1/4)³ = 12/256 ≈ 5%
- 4 recesywne: P = (1/4)⁴ = 1/256 ≈ 0,4%

**Wniosek:** W małej rodzinie stosunek 3:1 może się nie pojawić — i to jest **normalne**.

---

## 9. Poziom zaawansowany · **[ZAAWANSOWANY]**

### 9.1. Typy dominacji — pełna tabela

| Pojęcie | Idea | Stosunek fenotypów (przykład) |
|---|---|---|
| **Dominacja pełna** | Aa = AA w wyglądzie | Aa × Aa → **3:1** |
| **Dominacja niepełna** | Aa = pośredni (np. różowy kwiat) | Aa × Aa → **1:2:1** |
| **Kodominacja** | oba allele widoczne naraz (np. ABO: AB) | zależnie od alleli |
| **Allele wielokrotne** | więcej niż 2 allele w populacji (Iᴬ, Iᴮ, i) | grupy krwi (L019) |
| **Test krzyżowy** | krzyżówka z **aa** — rozróżnia AA od Aa | AA×aa → 100% Aa; Aa×aa → 1:1 |

### 9.2. Dominacja niepełna — przykład

**Czerwony kwiat (RR) × biały kwiat (rr) → wszystkie różowe (Rr)**

W dominacji niepełnej heterozygota Rr ma fenotyp **pośredni** — nie czerwony, nie biały, ale różowy. Dlatego w pokoleniu F2 (Rr × Rr):

| | R | r |
|---|---|---|
| **R** | RR (czerwony) | Rr (różowy) |
| **r** | Rr (różowy) | rr (biały) |

→ **1:2:1** (czerwony : różowy : biały) — genotyp = fenotyp, bo każdy genotyp ma inny fenotyp.

**Uwaga:** To **model szkolny**. W rzeczywistości barwy kwiatów są często wielogenowe.

### 9.3. Kodominacja — przykład

**ABO (uproszczenie, szczegóły w L019):**
- Allel Iᴬ → antygen A
- Allel Iᴮ → antygen B
- Allel i → brak antygenu

**Kodominacja:** Iᴬ i Iᴮ **oba się ujawniają** w heterozygocie IᴬIᴮ → grupa AB. To nie „mieszanka", ale **współwystępowanie** obu antygenów.

**Różnica kluczowa:**
- **Niepełna dominacja:** Aa = pośredni (np. różowy)
- **Kodominacja:** Aa = oba naraz (np. AB)

### 9.4. Ograniczenia szachownicy Punnetta [NOWE — z ZPE]

Punnett jest świetny dla **1–2 cech**. Ale:

| Liczba cech | Rozmiar tabeli | Praktyczność |
|---|---|---|
| 1 | 2×2 = 4 pola | idealna |
| 2 | 4×4 = 16 pól | dobra |
| 3 | 8×8 = 64 pola | niepraktyczna |
| 4 | 16×16 = 256 pól | koszmar |
| 5+ | 32×32+ | niemożliwa |

**Więcej niż 2 cechy** → używamy **rachunku prawdopodobieństwa**, nie tabeli.

**Czego Punnett nie uwzględnia:**
- **Epistaza** — jeden gen maskuje efekt innego
- **Geny sprzężone** — nie segregują niezależnie (są na tym samym chromosomie)
- **Dziedziczenie poligeniczne** — wiele genów na jedną cechę (np. wzrost, kolor skóry)
- **Wpływ środowiska** — fenotyp = geny + środowisko (L010)
- **Mutacje de novo** — nowe allele, których nie ma u rodziców
- **Niepełna penetracja** — allel jest, ale się nie ujawnia

### 9.5. Alternatywa dla wielu cech — rachunek prawdopodobieństwa

Dla dwóch cech niezależnych (AaBb × AaBb):
- Zamiast tabeli 4×4, można policzyć osobno: P(A_) = 3/4, P(aa) = 1/4 itd.
- P(A_B_) = 3/4 · 3/4 = 9/16
- P(A_bb) = 3/4 · 1/4 = 3/16
- P(aaB_) = 1/4 · 3/4 = 3/16
- P(aabb) = 1/4 · 1/4 = 1/16
- Stosunek: **9:3:3:1** (II prawo Mendla)

### 9.6. Plejotropia i epistaza (poziom olimpijski)

- **Plejotropia** — jeden gen wpływa na wiele cech (np. gen odpowiedzialny za fenyloketonurię wpływa na układ nerwowy i pigmentację).
- **Epistaza** — gen maskuje efekt innego genu (np. gen albinizmu maskuje geny koloru sierści).

---

## 10. Klinika błędów · **[PODSTAWA E8] / [TRENING]**

### 10.1. Tabela błędów

| Błąd | Poprawa | Dlaczego? |
|---|---|---|
| 25% = co czwarte dziecko chore | P przy każdym dziecku | niezależność zdarzeń |
| Heterozygota ujawnia recesywny | dominujący | definicja dominacji |
| Genotyp = fenotyp | różne pojęcia | AA i Aa mogą wyglądać tak samo |
| Duża litera = częstszy allel | konwencja | dominacja ≠ częstość |
| Aa × Aa zawsze 3:1 | tylko dom. pełna | przy niepełnej 1:2:1 |
| Rodzice dominujący → dziecko recesywne niemożliwe | możliwe, jeśli oboje Aa | aa wymaga dwóch a |
| Krzyżówka testowa = zwykła krzyżówka | to krzyżówka z **aa** | ma konkretny cel: rozróżnić AA od Aa |
| Punnett działa dla 5 cech | nie — 32×32 pola | ograniczenia narzędzia |
| „Dominujący" znaczy „lepszy/częstszy" | to tylko opis ujawniania | dominacja ≠ wartość |
| aA to inny genotyp niż Aa | ten sam genotyp | konwencja zapisu |

### 10.2. Klinika 2.0 — cztery pełne przykłady

#### Przykład 1 — „Skoro 25%, to co czwarte dziecko chore"

- **Błąd:** „Skoro P(aa) = 25%, to co czwarte dziecko będzie chore."
- **Znajdź:** Gwarancja kolejności.
- **Popraw:** Każde dziecko osobno 25%.
- **Reguła:** Niezależność zdarzeń.
- **Dlaczego:** Zapłodnienie to osobne zdarzenie — poprzednie dzieci nie wpływają na następne.
- **Podobne:** P(dwoje kolejnych aa) = 1/16.
- **Pułapka:** Rodzina ma już troje dominujących. Czy czwarte „musi" być recesywne? **Nie.**

#### Przykład 2 — „AA i Aa to samo"

- **Błąd:** „AA i Aa to to samo, bo wyglądają tak samo."
- **Znajdź:** Mylenie genotypu z fenotypem.
- **Popraw:** Ten sam fenotyp, różny genotyp.
- **Reguła:** Genotyp ≠ fenotyp.
- **Dlaczego:** Allel dominujący ujawnia się w obu, ale Aa nosi ukryte „a" i może przekazać je potomstwu.
- **Podobne:** Rozróżnij AA od Aa testem krzyżowym.
- **Pułapka:** Czy z fenotypu można odczytać genotyp? **Nie.**

#### Przykład 3 — „Aa × aa daje 3:1"

- **Błąd:** „Aa × aa daje 3:1, tak jak Aa × Aa."
- **Znajdź:** Zły stosunek.
- **Popraw:** 1:1.
- **Reguła:** Stosunek zależy od genotypów rodziców.
- **Dlaczego:** aa daje tylko a; Aa daje A i a — więc połowa dzieci dostanie A (dominujące), połowa a (recesywne).
- **Podobne:** AA × aa → 100% Aa.
- **Pułapka:** Aa × Aa → 3:1, ale tylko przy pełnej dominacji. **Nie każda krzyżówka daje 3:1.**

#### Przykład 4 — „Dominacja niepełna to to samo co kodominacja"

- **Błąd:** „Niepełna dominacja i kodominacja to to samo."
- **Znajdź:** Mylenie dwóch pojęć.
- **Popraw:** Dominacja niepełna → fenotyp **pośredni** (Aa = różowy); kodominacja → **oba allele widoczne naraz** (AB = A i B jednocześnie).
- **Reguła:** Niepełna = mieszanie; kodominacja = współwystępowanie.
- **Dlaczego:** W niepełnej Aa wygląda inaczej niż AA; w kodominacji Aa pokazuje oba naraz.
- **Podobne:** Grupy krwi ABO (kodominacja Iᴬ Iᴮ).
- **Pułapka:** „Niepełna" ≠ „kodominacja" — to dwa różne modele.

#### Przykład 5 — „Punnett dla 4 cech"

- **Błąd:** „Zrobię Punnett dla 4 cech."
- **Znajdź:** Nieznajomość ograniczeń narzędzia.
- **Popraw:** Dla 4 cech tabela ma 16×16 = 256 pól — użyj rachunku prawdopodobieństwa.
- **Reguła:** Punnett dla 1–2 cech; dalej — mnożenie P.
- **Dlaczego:** Rozmiar tabeli rośnie wykładniczo.
- **Podobne:** 3 cechy → 8×8 = 64 pola.
- **Pułapka:** Punnett to narzędzie, nie uniwersalna metoda.

---

## 11. Obserwacja / model

```
Problem: Jakie genotypy potomstwa z Aa × Aa?
Hipoteza: 1:2:1 (genotypy), 3:1 (fenotypy przy pełnej dominacji).
Materiał: kwadrat Punnetta.
Obserwacja: 4 równoprawdopodobne pola.
Wniosek: P(aa)=1/4; fenotyp 3:1.
Ograniczenia: model dotyczy 1 genu i pełnej dominacji.
BHP: brak.
```

**Kwadrat Punnetta nie jest doświadczeniem — to model probabilistyczny.**

### Porównanie: model vs obserwacja

| Typ | Przykład |
|---|---|
| **Obserwacja** | liczenie potomstwa w hodowli, izolacja DNA, preparat mitozy |
| **Model** | Punnett, schemat mejozy, rodowód |

Punnett **przewiduje** prawdopodobieństwa. Obserwacja **sprawdza**, czy przewidywania się zgadzają (przy dużej próbie).

---

## 12. Ćwiczenia · **[TRENING]** (12D → [KONKURS])

### 12A. Mini-check (5 pytań)

1. Co to allel?
2. Co to heterozygota?
3. Co ujawnia się w Aa przy pełnej dominacji?
4. Skąd gameta ma jeden allel?
5. Co znaczy P = 25%?

### 12B. Ćwiczenie prowadzone

**Dane:** Aa × Aa.

**Krok 1.** Gamety: A, a (od każdego rodzica).
**Krok 2.** Punnett: AA, Aa, Aa, aa.
**Krok 3.** Genotypy 1:2:1; fenotypy 3:1; P(aa) = 1/4.

**Spróbuj sam:** AA × aa → ?

### 12C. Ćwiczenia samodzielne

#### A. Podstawa

1. Zdefiniuj: allel, genotyp, fenotyp.
2. Homozygota vs heterozygota — przykład.
3. Aa × Aa — stosunek genotypów i fenotypów.
4. Co to allel dominujący?

#### B. Trening

5. Narysuj Punnett dla AA × aa.
6. Popraw: „25% znaczy, że co czwarte dziecko będzie chore".
7. Rodzice mają fenotyp dominujący, dziecko recesywny. Jakie genotypy rodziców?

#### C. Ambitne

8. P(dwoje kolejnych dzieci aa) w Aa × Aa?
9. Uzasadnij, dlaczego fenotypy w Aa × Aa dają 3:1, a nie 2:2.
10. Po co wykonuje się test krzyżowy?

#### D. Zaawansowane

11. Rodzice dominujący, jedno dziecko recesywne — genotypy rodziców?
12. Czy fenotyp dominujący = AA? Uzasadnij.
13. Jak mejoza (L015) wyjaśnia, że gameta ma jeden allel?
14. P(dokładnie jedno aa z dwojga dzieci) w Aa × Aa?

### 12D. PROBLEM / THINK

Zdrowi rodzice mają dwoje dzieci z cechą recesywną. Czy to przeczy modelowi Aa × Aa? Uzasadnij.

### Drabinka trudności

| Poziom | Zadanie |
|---|---|
| ODTWÓRZ | Definicja allelu. |
| ZASTOSUJ | Oblicz P(aa). |
| WYJAŚNIJ | Dlaczego 3:1? |
| ODKRYJ | Jaki genotyp rodzica? |
| POŁĄCZ | Mejoza + dziedziczenie. |
| ZAKWESTIONUJ | Fenotyp dominujący = AA? |

---

## 13. Odpowiedzi i sposób oceniania

### 12A

1. Wersja genu (A lub a).
2. Osobnik o dwóch różnych allelach (Aa).
3. Allel dominujący (A).
4. Bo w mejozie I homologi się rozchodzą.
5. Prawdopodobieństwo przy każdym dziecku osobno.

### 12B

AA × aa → wszystkie Aa → 100% fenotyp dominujący.

### 12C

**A.**
1. Allel — wersja genu; genotyp — zestaw alleli; fenotyp — ujawniona cecha.
2. Homozygota: AA lub aa; heterozygota: Aa.
3. Genotypy 1:2:1; fenotypy 3:1 (pełna dominacja).
4. Allel, który ujawnia się w heterozygocie (A).

**B.**
5. Wszystkie pola Aa.
6. 25% to prawdopodobieństwo przy każdym dziecku osobno.
7. Oboje Aa (bo tylko wtedy mogą dać „a" dziecku).

**C.**
8. 1/4 · 1/4 = 1/16.
9. Bo tylko jedno z czterech pól (aa) daje fenotyp recesywny.
10. Aby odróżnić AA od Aa (krzyżujemy z aa).

**D.**
11. Oboje Aa.
12. Nie — fenotyp dominujący to AA **lub** Aa. Bez testu nie odróżnisz.
13. W mejozie I homologi się rozchodzą; każda gameta dostaje jeden chromosom z pary → jeden allel.
14. 1/4 · 3/4 + 3/4 · 1/4 = 3/8.

### 12D

Nie przeczy. Przy Aa × Aa każde dziecko ma P(aa) = 1/4. Dwoje kolejnych aa ma prawdopodobieństwo 1/16 — rzadkie, ale całkowicie możliwe. Model nie gwarantuje „3:1 w każdej rodzinie" — mówi o prawdopodobieństwie.

### Sposób oceniania

- **Podstawa:** 1 pkt.
- **Trening:** 1 pkt za wynik, 1 pkt za uzasadnienie.
- **Ambitne:** 2 pkt.
- **Zaawansowane:** 3 pkt.

---

## 14. Fiszki · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---|---|
| Allel | Wersja genu |
| Aa × Aa genotypy | 1:2:1 |
| Aa × Aa fenotypy | 3:1 |
| Co znaczy 25%? | P przy każdym dziecku |
| Dominujący | Ujawnia się w heterozygocie |
| Homozygota | AA lub aa |
| Heterozygota | Aa |
| Test krzyżowy | Krzyżówka z aa |
| AA × aa | 100% Aa |
| Aa × aa | 1:1 |
| Dominacja niepełna | 1:2:1 (fenotyp pośredni) |
| Kodominacja | Oba allele widoczne naraz |
| P(dwoje aa)? | 1/16 |
| Ograniczenie Punnett | >2 cechy — niepraktyczne |
| Kto wymyślił Punnett? | Reginald Punnett, ok. 1900 |

---

## 15. Test końcowy (3+2+2+1) · **[TRENING]**

1. (P) Allel / genotyp / fenotyp — definicje.
2. (P) Homozygota vs heterozygota.
3. (P) Aa × Aa — stosunek genotypów i fenotypów.
4. (T) Narysuj Punnett dla AA × aa.
5. (T) Popraw mit o „co czwartym dziecku".
6. (A) P(dwoje dzieci aa) w Aa × Aa?
7. (A) Rodzice dominujący, dziecko recesywne — genotypy rodziców?
8. (Z) Czy fenotyp dominujący = AA? Uzasadnij. Jak to sprawdzić?

### Odpowiedzi

1. Allel = wersja genu; genotyp = zestaw alleli; fenotyp = ujawniona cecha.
2. Homo = AA lub aa; hetero = Aa.
3. Genotypy 1:2:1; fenotypy 3:1 (pełna dominacja).
4. Wszystkie pola Aa (100% fenotyp dominujący).
5. 25% to P przy każdym dziecku osobno — nie kolejka.
6. 1/4 · 1/4 = 1/16.
7. Oboje Aa.
8. Nie — fenotyp dominujący to AA lub Aa. Sprawdzić można testem krzyżowym z aa.

---

## 16. Checklista

- [ ] Znam pojęcia: allel, genotyp, fenotyp, homo/hetero, dominacja.
- [ ] Umiem narysować i odczytać Punnetta.
- [ ] Rozumiem 3:1 i 1:2:1.
- [ ] Wiem, że 25% ≠ gwarancja kolejności.
- [ ] Potrafię wnioskować o genotypach rodziców.
- [ ] Znam ideę testu krzyżowego.
- [ ] Wiem, że dominacja niepełna daje 1:2:1.
- [ ] Rozumiem różnicę: dominacja niepełna ≠ kodominacja.
- [ ] Znam ograniczenia Punnett (ambitny).
- [ ] Wiem, kim był Reginald Punnett.

---

## 17. Mapa pojęć

```
DZIEDZICZENIE 1 GENU
├── allele (wersje genu)
├── genotyp → fenotyp
├── gamety (mejoza → 1 allel)
├── Punnett
│   ├── Aa × Aa → 1:2:1 / 3:1
│   ├── AA × aa → 100% Aa
│   ├── Aa × aa → 1:1 (test krzyżowy)
│   └── ograniczenia (>2 cechy)
├── typy dominacji
│   ├── pełna (3:1)
│   ├── niepełna (1:2:1)
│   └── kodominacja (oba naraz)
└── P (niezależne zdarzenia)
```

---

## 18. Co dalej? Jak się uczyć?

**Następna lekcja:** L018 — płeć i cechy sprzężone z X.

**Most wstecz:** L015 (mejoza → 1 allel w gamecie) + L011 (gen = odcinek DNA) → L017 (Punnett).

### Plan nauki

1. Ściąga (5 min).
2. Przerysuj Punnett dla 4 krzyżówek (10 min).
3. Mini-check (5 min).
4. Ćwiczenia A i B (15 min).
5. Fiszki (10 min).
6. Test (15 min).
7. Powtórka za 1 dzień, 3 dni, tydzień.

### System powtórek (spaced)

| Kiedy | Co | Czas |
|---|---|---|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

---

## 19. Słownik

| Termin | Definicja |
|---|---|
| Allel | Wersja genu (A / a) |
| Genotyp | Zestaw alleli (AA, Aa, aa) |
| Fenotyp | Ujawniona cecha |
| Homozygota | AA lub aa |
| Heterozygota | Aa |
| Krzyżówka | Zapis możliwych genotypów potomstwa |
| Locus | Miejsce genu na chromosomie |
| Dominacja pełna | Aa = AA w fenotypie |
| Dominacja niepełna | Aa = fenotyp pośredni |
| Kodominacja | Oba allele widoczne naraz |
| Test krzyżowy | Krzyżówka z homozygotą recesywną (aa) |
| Linia czysta | Zespół osobników homozygotycznych |
| Punnett | Diagram pokazujący kombinacje alleli |
| Epistaza | Gen maskuje efekt innego genu |
| Plejotropia | Jeden gen wpływa na wiele cech |
| Poligeniczne | Wiele genów na jedną cechę |

---

## 20. Dodatek zaawansowany · **[ZAAWANSOWANY]**

### 20.1. Test krzyżowy — pełny algorytm

**Cel:** odróżnić AA od Aa u osobnika o fenotypie dominującym.

**Krok 1.** Wybierz partnera: homozygota recesywna (aa).
**Krok 2.** Wykonaj krzyżówkę.
**Krok 3.** Obserwuj potomstwo:
- 100% dominujące → prawdopodobnie AA
- Jakiekolwiek recesywne → na pewno Aa

**Uwaga statystyczna:** przy małej liczbie potomstwa „100% dominujące" może się zdarzyć nawet przy Aa. Potrzebna duża próba.

### 20.2. Krzyżówka dwugenowa (zapowiedź)

**AaBb × AaBb** (dwie cechy niezależne) → **9:3:3:1** (II prawo Mendla).

Szczegóły — w przyszłych lekcjach lub w materiale rozszerzonym.

### 20.3. Plejotropia i epistaza

- **Plejotropia:** jeden gen → wiele cech.
- **Epistaza:** gen maskuje efekt innego genu.

### 20.4. Zadanie olimpijskie

**Pytanie:** Aa × Aa. P(dokładnie jedno z dwojga dzieci aa)?

**Rozwiązanie:** 1/4 · 3/4 + 3/4 · 1/4 = **3/8**.

---

## 21. Połączenia międzyprzedmiotowe

- **Matematyka:** prawdopodobieństwo, stosunki, reguła iloczynu i sumy.
- **Historia:** Gregor Mendel — ojciec genetyki, groszek zwyczajny; Reginald Punnett — twórca szachownicy.
- **Etyka:** poradnictwo genetyczne, choroby dziedziczne.
- **Informatyka:** symulacje krzyżówek, drzewa decyzyjne.

---

## 22. Zadania z życia codziennego

1. Uproszczone krzyżówki jednogenowe są do cech modelowych. Kolor oczu człowieka zależy od wielu genów — nie jest typowym przykładem A/a.
2. Dlaczego grupy krwi dziedziczą się inaczej niż kolor oczu? (Bo ABO to 3 allele + kodominacja — L019.)
3. Jak hodowcy wykorzystują wiedzę o dziedziczeniu? (Dobór sztuczny — L031.)
4. Dlaczego w rodzinie z dzieckiem chorym na mukowiscydozę rodzice „nosiciele" nie są chorzy? (Bo to cecha recesywna — heterozygoty są zdrowe.)
5. Dlaczego w małej rodzinie może nie być dziecka z cechą recesywną, mimo że oboje rodzice są Aa? (Bo P = 25% przy każdym dziecku — może się zdarzyć, że żadne nie będzie aa.)

---

## 23. STATUS LEKCJI (wersja przebudowana)

**Wersja 5.0 (2026-09-13)** — przebudowa „od podstaw do zaawansowanych".

**Zachowano całą treść v3.8/v4.0/v4.1/v4.2.**

**Dodano:**
- sekcję 0 (wprowadzenie — o co chodzi, historia Punnett, dlaczego to ważne),
- pełne wyjaśnienie definicji z kontekstem (sekcja 5.1–5.7),
- logikę narzędzia (dlaczego tabela 2×2 — sekcja 6.1),
- pełny tok rozumowania w przykładach (sekcja 6.3–6.5, 6.10),
- osobną, rozbudowaną sekcję o krzyżówce testowej (sekcja 7),
- ograniczenia Punnett (sekcja 9.4),
- rachunek prawdopodobieństwa jako alternatywę (sekcja 9.5),
- rozbudowaną tabelę błędów (sekcja 10.1) + 5 pełnych przykładów Kliniki 2.0,
- tabelę zbiorczą krzyżówek (sekcja 6.7),
- rozkład prawdopodobieństw w rodzinie z 4 dzieci (sekcja 8.4).

**Zasada:** nic nie usunięto — tylko rozbudowano.

---

**Koniec L017 MASTER v5.0 (przebudowana)**

---

# Podsumowanie — porównanie z poprzednią wersją

| Element | v4.2 | v5.0 |
|---|---|---|
| Wprowadzenie | Brak | Sekcja 0 — historia, kontekst, „po co to" |
| Definicje | Tabela bez wyjaśnień | Tabela + pełne wyjaśnienie + przykłady + „skąd się bierze" |
| 80/20 | Suche hasła | Hasła + wyjaśnienie, dlaczego to 80% efektu |
| Logika Punnett | „Zrób tabelę" | Analogia monet + pełny tok rozumowania |
| Krzyżówka testowa | Wzmianka | Osobna sekcja z pełnym wyjaśnieniem i przykładami |
| Ograniczenia Punnett | Brak | Sekcja 9.4 — kiedy narzędzie zawodzi |
| Rachunek prawdopodobieństwa | Wzmianka | Sekcja 9.5 — alternatywa dla >2 cech |
| Przykłady | Skrótowe | Pełny tok: dane → kroki → wynik → interpretacja |
| Klinika błędów | 6 wierszy | 10 wierszy + 5 pełnych przykładów Kliniki 2.0 |
| Historia | Brak | Reginald Punnett, Mendel, kontekst |
| Rozkład P w rodzinie | Brak | Sekcja 8.4 — rozkład dwumianowy |
| Status | v4.2 | v5.0 — wyraźne oznaczenie przebudowy |

---

HTML lekcji: `BIOLOGIA_L017_PUNNETT.html` (v5.0).

## DOPISEK v5.1 (HTML v5.0 + recenzja)

- **Niepełna vs kodominacja:** niepełna = fenotyp pośredni; kodominacja = oba widać jednocześnie, nie „wymieszane w jeden kolor”.
- Liczba pól Punnetta przy n niezależnych genach (2 allele każdy): **4ⁿ**.
- Test krzyżowy: szkolnie z aa; w hodowli dziś częściej markery DNA.
- Extra poza E8: mtDNA / imprinting jako wyjątki od prostego Mendla; epistaza recesywna bywa **9:3:4**.
- Tabele Punnetta w MD i HTML trzymać jako prawdziwe siatki 2×2 (góra/lewa = gamety).
- Powtórki Aa×Aa w kilku sekcjach są celowe (warstwy); w HTML wystarczy odsyłacz „patrz 6.6”.

### Status L017 (2026-09-20)

MD i HTML zsynchronizowane merytorycznie. Wizualne siatki Punnetta + flip-fiszki zostają w HTML. Nic nie obcinane.

<!-- ==================== END L017 ==================== -->


<!-- ==================== BEGIN L018 ==================== -->

# L018 — Jak dziedziczy się płeć i cechy sprzężone z chromosomem X?

## KARTA LEKCJI L018

- Numer: L018
- Tytuł roboczy: Płeć i cechy sprzężone z X
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L017 · Następna: L019
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Dziedziczenie związane z X.

`[BIO: DIAGRAM type=FLOW]`
`XX/XY → allele na X → gamety → potomstwo`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** nie każdy gen na X jest „chorobą”.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L017  
**Następna lekcja:** L019

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Jak dziedziczy się płeć i cechy sprzężone z chromosomem X?

---

## 2. Cele lekcji

Po lekcji uczeń:

- zapisuje XX (kobieta) i XY (mężczyzna) oraz wyjaśnia, że **plemnik** decyduje o płci,
- opisuje dziedziczenie cechy **X-linked** (gen na X),
- stosuje regułę: **ojciec nie przekazuje X synowi**,
- (ambitny) uzasadnia, dlaczego recesywne cechy X-linked częściej ujawniają się u mężczyzn (hemizygota),
- (zaawansowany) czyta prosty rodowód X-linked i odróżnia od autosomalnego.

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| XX / XY; plemnik decyduje | płeć |
| jeden X u chłopca → recesywny widać | dlaczego mężczyźni częściej |
| ojciec nie daje X synowi | kluczowa reguła X-linked |
| nosicielka XᴬXᵃ | krzyżówki |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**
L012 (chromosomy płci), L017 (allele, Punnett), L015 (gamety).

---

## 4. Zacznij od problemu
Dlaczego daltonizm i hemofilia częściej dotyczą mężczyzn?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

- Kobieta: **XX**; mężczyzna: **XY**.
- Plemnik wnosi X lub Y → decyduje o płci.
- Komórka jajowa zawsze X.

**Cecha sprzężona z X** — gen na chromosomie X (hemofilia, daltonizm).

**Klucz:**
- mężczyzna ma **jeden X** → recesywny allel się ujawnia,
- ojciec **nie przekazuje** X synowi,
- córka dostaje X od matki i X od ojca.

**Zapis:** Xᴬ (zdrowy), Xᵃ (chory); nosicielka XᴬXᵃ.

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **XX = kobieta, XY = mężczyzna** | płeć |
| 2 | **X od mamy, Y od taty = syn** | dziedziczenie płci |
| 3 | **Ojciec nie daje X synowi** | X-linked |
| 4 | **Tylko jeden X u chłopca = recesywne widać** | dlaczego mężczyźni |

---

## 6. Wyjaśnienie od podstaw  · **[PODSTAWA E8]**

**Chromosomy płci (most L012):** kobieta **XX**, mężczyzna **XY**.

Komórka jajowa zawsze wnosi **X**. Plemnik wnosi **X** albo **Y** → **plemnik decyduje o płci**.

```text
jajowa X + plemnik X → XX (dziewczynka)
jajowa X + plemnik Y → XY (chłopiec)
```

### Cechy sprzężone z X (X-linked)
Gen leży na chromosomie **X** (przykłady szkolne: daltonizm, hemofilia).

| | Kobieta (XX) | Mężczyzna (XY) |
|---|--------------|----------------|
| Liczba chromosomów X | 2 | **1** (hemizygota pod względem X) |
| Recesywny allel Xᵃ | ujawnia się tylko przy **XᵃXᵃ** | ujawnia się już przy **XᵃY** (brak drugiego X do „maskowania”) |
| Skąd X | od matki **i** od ojca | **tylko od matki** |

**Reguła kluczowa:** ojciec przekazuje synowi **Y**, nie X → **ojciec nie przekazuje cechy X-linked synowi**.

### 6A. Dlaczego?

1. **Dlaczego plemnik decyduje o płci?** Jajowa zawsze X; tylko plemnik wybiera X lub Y.
2. **Dlaczego ojciec nie daje X synowi?** Syn dostaje od ojca Y (jest XY).
3. **Dlaczego mężczyźni częściej ujawniają recesywne X-linked?** Mają tylko jeden X — nie ma drugiego allelu, który mógłby zdominować.
4. **Dlaczego córka chorego ojca jest co najmniej nosicielką?** Ojciec chory (XᵃY) przekazuje **wszystkim córkom** swój Xᵃ.

### 6B. Krok po kroku — skąd X i Y
```text
Syn:   X od matki  +  Y od ojca
Córka: X od matki  +  X od ojca
```

### 6C. Przykład prowadzony

**Nosicielka XᴬXᵃ × zdrowy mężczyzna XᴬY:**

|          | Xᴬ (ojciec) | Y (ojciec) |
|----------|-------------|------------|
| **Xᴬ** (matka) | XᴬXᴬ zdrowa | XᴬY zdrowy |
| **Xᵃ** (matka) | XᴬXᵃ nosicielka | XᵃY **chory** |

- córki: 50% zdrowe, 50% nosicielki  
- synowie: 50% zdrowi, 50% chorzy  

**Ojciec chory XᵃY × zdrowa matka XᴬXᴬ:** wszystkie córki nosicielki XᴬXᵃ; wszyscy synowie zdrowi XᴬY (dostali X od matki).

### 6D. Powiązanie
```text
L012 (chromosomy płci) → L015 (mejoza, gamety)
  → L017 (Punnett autosomalny)
  → L018 (Punnett X-linked + reguła ojciec↛syn)
```

---

## 7. Poziom ambitny  · **[MASTER]**

**Chory ojciec (XᵃY):**
- wszystkie **córki** dostają Xᵃ → co najmniej nosicielki (XᴬXᵃ, jeśli matka zdrowa),
- **synowie** dostają Y → cecha X-linked **nie** przechodzi z ojca na syna.

**Algorytm prostego rodowodu X-linked:**
1. Czy choroba częściej u mężczyzn?
2. Czy chory ojciec ma chorych synów? (jeśli tak → raczej **nie** klasyczne X-linked recesywne)
3. Czy zdrowi rodzice mogą mieć chorego syna? (tak — matka nosicielka)
4. Czy chora matka przekazuje synom? (przy XᵃXᵃ — wszystkim synom)

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

- **Inaktywacja X** (ciałko Barra) — u kobiet jeden X jest wyciszany; stąd mozaikowość u niektórych nosicielek.
- **Y-linked** — geny tylko na Y (rzadkie w podstawie; cecha idzie z ojca na **wszystkich** synów).
- Przykład kliniczny: dystrofia mięśniowa Duchenne’a (X-linked).

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Ojciec daje X synowi | syn dostaje **Y** od ojca | zapis XY |
| Kobieta nigdy nie ma hemofilii | może (XᵃXᵃ) — rzadziej | potrzeba dwóch Xᵃ |
| „Sprzężone z płcią” = zawsze Y | w szkole skupiamy się na **X** | X-linked |
| X-linked = to samo co autosomalne | inna geometria przekazywania | ojciec↛syn |

### Klinika 2.0
**Błąd 1:** „Ojciec z hemofilią przekaże chorobę synowi.”
- **Znajdź:** Mylenie X-linked z autosomalnym.
- **Popraw:** Syn dostaje od ojca Y, nie X.
- **Reguła:** Ojciec nie daje X synowi.
- **Dlaczego:** Syn = XY.
- **Podobne:** Ojciec chory → **córki** nosicielkami / chore.

**Błąd 2:** „Kobieta nie może mieć hemofilii.”
- **Znajdź:** Absolutyzacja.
- **Popraw:** Może (XᵃXᵃ), ale to rzadkie — potrzeba allelu od obojga rodziców.
- **Reguła:** U kobiet recesywne X-linked wymaga dwóch Xᵃ.

---

## 10. Obserwacja / model

```text
Problem: Nosicielka × zdrowy — ryzyko u synów?
Hipoteza: 50%.
Model: Punnett XᴬXᵃ × XᴬY.
Wniosek: synowie XᴬY / XᵃY.
Ograniczenia: 1 gen, pełna penetracja.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. XX/XY? 2. Kto decyduje o płci? 3. Od kogo syn X? 4. Nosicielka? 5. Dlaczego częściej mężczyźni?

### 11B. Ćwiczenie prowadzone
Nosicielka × zdrowy: synowie 50% chorych.

### 11C. Ćwiczenia samodzielne
**A.** XX/XY? Kto decyduje? Przykład X-linked? Od kogo X syna?
**B.** Popraw mit o ojcu. Nosicielka? Krzyżówka nosicielka × zdrowy.
**C.** % chorych synów? Dlaczego częściej mężczyźni? Ojciec chory — córki?
**D.** Rodowód X-linked vs autosomalne. Zdrowi rodzice, chory syn.

### 11D. PROBLEM / THINK
Zdrowi rodzice, chory syn, córki zdrowe. Jaki model? Czego brakuje, by wykluczyć autosomalne recesywne?

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | XX / XY — kto jest kim? |
| ZASTOSUJ | Nosicielka × zdrowy — % chorych synów? |
| WYJAŚNIJ | Dlaczego recesywne X-linked częściej u mężczyzn? |
| ODKRYJ | Od kogo syn bierze chromosom X? |
| POŁĄCZ | Porównaj Punnett autosomalny (L017) z X-linked. |
| ZAKWESTIONUJ | „Ojciec chory → syn chory” — czy to pasuje do X-linked? |

---

## 12. Odpowiedzi

1. XX kobieta, XY mężczyzna. 2. Plemnik. 3. Gen na X. 4. Hemofilia/daltonizm. 5. Od matki. 6. Ojciec nie daje X synowi. 7. XᴬXᵃ. 8. 50%. 9. Jeden X. 10. Wszystkie córki Xᵃ (nosicielki/chore). 11. Algorytm. 12. Tak — matka nosicielka.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| XX / XY | Kobieta / mężczyzna |
| X syna | Od matki |
| Dlaczego częściej mężczyźni? | Jeden X |
| Nosicielka | XᴬXᵃ |
| Ojciec → syn? | Nie |
| Przykłady | Hemofilia, daltonizm |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) XX/XY? 2. (P) Kto decyduje? 3. (P) Przykład X-linked? 4. (T) X syna — od kogo? 5. (T) Popraw mit. 6. (A) % chorych synów? 7. (A) Dlaczego mężczyźni? 8. (Z) Rodowód.

## 15. Checklista
- [ ] Znam XX/XY i źródło X/Y.
- [ ] Rozumiem cechę X-linked.
- [ ] Wiem, dlaczego częściej mężczyźni.
- [ ] Umiem prostą krzyżówkę.
- [ ] Znam regułę: ojciec nie daje X synowi.

## 16. Mapa pojęć
```text
PŁEĆ I X-LINKED
├── XX / XY
├── plemnik X lub Y
├── cecha na X
├── mężczyzna: jeden X
└── nosicielka XᴬXᵃ
```

## 17. Co dalej?
L019 — grupy krwi ABO (allele wielokrotne, kodominacja).

**Most wstecz:** L017 (Punnett) + L012 (chromosomy płci) → L018 (X-linked).

## 18. Słownik
XX/XY · Cecha sprzężona z X · Nosicielka · Inaktywacja X.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Rodowody X-linked · inaktywacja X · mtDNA.

## 20. Jak się uczyć?
Ściąga (5 min) → krzyżówka X-linked (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

## 21. Połączenia międzyprzedmiotowe
Matematyka (P) · Medycyna (hemofilia, daltonizm) · Etyka (poradnictwo).

## 22. Zadania z życia codziennego
1. Dlaczego hemofilia częściej u chłopców? 2. Dlaczego daltonizm częstszy u mężczyzn? 3. Znaczenie badania rodowodu?


---

## 23. UZUPEŁNIENIE egzaminacyjne v3.8+ (doklejone)

Nic z v3.8 powyżej nie usunięto.

### Ściąga 1 strony — X-linked

- Płeć: XX / XY (człowiek). Y — mało genów „cech szkolnych”; X — m.in. daltonizm, hemofilia (modele szkolne).
- Kobieta heterozygota XᴬXᵃ — zwykle zdrowa (nosicielka), gdy A dominuje nad chorobą recesywną.
- Mężczyzna XᵃY — ujawnia cechę (nie ma drugiego X).
- Krzyżówka: pisz **chromosomy płci + allele na X**, nie zwykłe Aa jak w L017 bez komentarza.
- Syn bierze X od matki, Y od ojca. Córka — X od matki i X od ojca.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Ojciec daltonista → syn zawsze daltonista | Syn bierze X od **matki** |
| Nosicielka = chora | Zwykle nie (recesywny allel na jednym X) |
| Y „przykrywa” X | Y nie kompensuje typowego genu z X |
| Zapis Aa dla hemofilii | Lepiej XᴴXʰ / XʰY |

### 4 zadania extra
1. Matka nosicielka, ojciec zdrowy — prawdopodobieństwo syna chorego (model recesywny X)?  
2. Chory ojciec, matka homozygota zdrowa — czy córki chore? czy nosicielki?  
3. Dlaczego rodowód „więcej chorych mężczyzn” jest sygnałem X-linked recesywnego?  
4. Połącz z L017: czym ta krzyżówka różni się od Aa × Aa oczu.

Odpowiedzi: 1 1/2 wśród synów (połowa X matki jest Xᵃ); wśród wszystkich dzieci 1/4 jeśli płeć losowa. 2 córki nosicielki, niechore; synowie zdrowi (X od matki). 3 mężczyzna ujawnia recesywny allel z jednego X. 4 tu allele „jadą” na X, więc wynik zależy od płci potomka.

### Status
doklej 2026-09-12 · v3.8 zachowane.


## 24. UZUPEŁNIENIE AUDYTOWE v4.2 — precyzja modelu XX/XY i X-linked

### 24.1. Co naprawdę oznacza „plemnik decyduje o płci”?
W **szkolnym modelu chromosomalnym XX/XY**:
- komórka jajowa wnosi X,
- plemnik wnosi X albo Y,
- dlatego to rodzaj plemnika decyduje o tym, czy zygota ma układ XX czy XY.

To sformułowanie dotyczy **kombinacji chromosomów płci**, a nie całego biologicznego rozwoju płci, który jest bardziej złożony.

### 24.2. Algorytm zadania X-linked
1. Zapisz chromosomy płci.
2. Umieść allel genu na **X**, jeśli zadanie dotyczy cechy X-linked.
3. Ustal gamety matki i ojca.
4. Zbuduj krzyżówkę.
5. Osobno policz córki i synów.
6. Na końcu sprawdź, czy wynik pasuje do reguły: **ojciec nie przekazuje X synowi**.

### 24.3. Przykład „od ojca do dziecka”
**Ojciec XᵃY, matka XᴬXᴬ**

- wszystkie córki otrzymują od ojca `Xᵃ`,
- wszystkie córki otrzymują od matki `Xᴬ`,
- więc w modelu recesywnym wszystkie córki są `XᴬXᵃ` — nosicielkami,
- wszyscy synowie otrzymują od ojca `Y` i od matki `Xᴬ` — `XᴬY`.

**Wniosek:** w tym modelu nie ma przekazania allelu X-linked z ojca bezpośrednio na syna.

### 24.4. Pułapka językowa
Nie pisz:
> „Ojciec przekazuje córce chorobę."

Lepiej:
> „Ojciec przekazuje córce swój chromosom X z określonym allelem."

Dopiero na tej podstawie ustala się możliwy fenotyp.

<!-- ==================== END L018 ==================== -->


<!-- ==================== BEGIN L019 ==================== -->

# L019 — Dlaczego grupy krwi nie pasują do prostego modelu A/a?

## KARTA LEKCJI L019

- Numer: L019
- Tytuł roboczy: Grupy krwi ABO i Rh
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L017 / L018 · Następna: L020
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** ABO i Rh.

`[BIO: DIAGRAM type=FLOW]`
`allele → antygeny → grupa krwi`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** ABO i Rh to dwa różne układy.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L018  
**Następna lekcja:** L020

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Dlaczego ABO to przykład, że nie wszystkie cechy dziedziczą się według prostego modelu A/a?

---

## 2. Cele lekcji

Po lekcji uczeń:

- wymienia 4 grupy ABO i zapisuje genotypy (Iᴬ, Iᴮ, i),
- wyjaśnia **kodominację** Iᴬ/Iᴮ oraz recesywność **i**,
- rozróżnia układ ABO od **Rh** (osobny),
- (ambitny) rozwiązuje krzyżówki ABO i wyklucza niemożliwe kombinacje rodzic–dziecko,
- (zaawansowany) zna ideę zgodności przetoczeń (uproszczenie) i konfliktu Rh.

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| 3 allele: Iᴬ, Iᴮ, i | podstawa |
| Iᴬ i Iᴮ kodominujące → AB | nie jak A/a |
| i recesywny → 0 = ii | genotyp ≠ „brak genów” |
| Rh osobno | nie mylić z ABO |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**
L017 (allele, Punnett), kodominacja.

---

## 4. Zacznij od problemu
Rodzice A i B. Czy dziecko może mieć 0?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

| Genotyp | Grupa |
|---------|-------|
| IᴬIᴬ lub Iᴬi | A |
| IᴮIᴮ lub Iᴮi | B |
| IᴬIᴮ | AB |
| ii | 0 |

**Rh:** Rh+ (D obecny) / Rh− (brak D).

**Doprecyzowanie:** ABO nie dziedziczy się prosto A/a. Iᴬ i Iᴮ są kodominujące; i recesywny.

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **A i B się nie przykrywają** | kodominacja |
| 2 | **0 = zero antygenów (ii)** | grupa 0 |
| 3 | **AB = oba allele** | IᴬIᴮ |
| 4 | **Rh osobno** | inny układ |

---

## 6. Wyjaśnienie od podstaw  · **[PODSTAWA E8]**

**ABO ≠ prosty model A/a** (most L017): tu są **trzy allele** w populacji: **Iᴬ, Iᴮ, i**.

| Genotyp | Grupa (fenotyp) | Antygeny na erytrocytach (idea) |
|---------|-----------------|----------------------------------|
| IᴬIᴬ lub Iᴬi | **A** | A |
| IᴮIᴮ lub Iᴮi | **B** | B |
| IᴬIᴮ | **AB** | A **i** B (kodominacja) |
| ii | **0** | brak A i B |

- **Iᴬ i Iᴮ** — **kodominujące**: oba ujawniają się w IᴬIᴮ → grupa AB.
- **i** — **recesywny**: grupa 0 tylko przy **ii** (brak antygenu A i B).

### Rh — osobny układ
**Rh+** (antygen D obecny) / **Rh−** (brak D). Dziedziczy się **niezależnie** od ABO — nie mylić.

### 6A. Dlaczego?

1. **Dlaczego Iᴬ i Iᴮ są kodominujące?** Oba allele „włączają” wytwarzanie swojego antygenu — żaden nie maskuje drugiego.
2. **Dlaczego i jest recesywny?** Nie koduje antygenu A ani B → fenotyp 0 tylko w homozygocie ii.
3. **Dlaczego matka 0 nie może mieć dziecka AB?** Matka ii daje **tylko i** — dziecko nie dostanie Iᴬ ani Iᴮ od matki, więc nie zbuduje AB.
4. **Dlaczego rodzice A i B mogą mieć dziecko 0?** Tak — jeśli oboje są heterozygotami **Iᴬi × Iᴮi** (dziecko może dostać i + i).

### 6B. Krok po kroku — Iᴬi × Iᴮi

|          | Iᴬ     | i      |
|----------|--------|--------|
| **Iᴮ**   | IᴬIᴮ (AB) | Iᴮi (B) |
| **i**    | Iᴬi (A)   | ii (0)  |

→ możliwe **wszystkie 4 grupy** u dzieci.

### 6C. Przykład prowadzony
- Rodzice **A × B** → dziecko **0** możliwe **tylko** gdy Iᴬi × Iᴮi.
- **Matka 0 + dziecko AB** → **niemożliwe** (matka nie ma Iᴬ ani Iᴮ do przekazania).
- Wykluczanie ojcostwa (idea): porównaj możliwe allele rodziców z genotypem dziecka.

### 6D. Powiązanie
```text
L017 (Punnett, dominacja pełna)
  → L019 (3 allele + kodominacja ABO)
  → wykluczanie niemożliwych par rodzic–dziecko
```

---

## 7. Poziom ambitny  · **[MASTER]**

**Przetoczenia (uproszczenie szkolne):**
- grupa **0** — dawca uniwersalny (brak antygenów A/B na krwinkach),
- grupa **AB** — biorca uniwersalny (brak przeciwciał anty-A i anty-B w osoczu).  
W praktyce medycznej decyzje są bardziej złożone — tu wystarczy idea zgodności antygen–przeciwciało.

**Konflikt Rh (idea):** matka **Rh−**, płód **Rh+** → przy kontakcie krwi matka może wytworzyć przeciwciała; kolejne ciąże Rh+ zagrożone. Profilaktyka: immunoglobulin anty-D.

**Wykluczanie:**
| Matka | Dziecko | Ojciec — niemożliwe przykłady |
|-------|---------|--------------------------------|
| 0 (ii) | AB | każdy (matka nie da Iᴬ/Iᴮ) |
| AB | 0 | każdy (dziecko ii wymaga i od **obu** rodziców; AB nie ma i) |

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

- Inne układy grupowe (poza ABO i Rh).
- Przeciwciała **naturalne** (anty-A, anty-B) vs **odpornościowe** (np. po transfuzji / ciąży).
- ABO u noworodków — interpretacja fenotypu bywa ostrożniejsza klinicznie.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| 0 = brak genów | 0 = **ii** | genotyp ≠ „nic” |
| AB = uniwersalny dawca | AB = raczej uniwersalny **biorca** (uproszczenie) | ma antygeny A i B |
| Rh = to samo co ABO | **osobny** układ (D) | inny locus |
| ABO jak A/a | 3 allele + kodominacja | inny model niż L017 |

### Klinika 2.0
**Błąd 1:** „Grupa 0 to brak genów.”
- **Znajdź:** Mylenie fenotypu z genotypem.
- **Popraw:** 0 = genotyp **ii**.
- **Reguła:** Genotyp ≠ fenotyp; każdy ma dwa allele ABO.
- **Dlaczego:** i nie koduje antygenu A/B.

**Błąd 2:** „Rodzice A i B nie mogą mieć dziecka 0.”
- **Znajdź:** Założenie, że A i B to zawsze IᴬIᴬ / IᴮIᴮ.
- **Popraw:** Możliwe przy **Iᴬi × Iᴮi**.
- **Reguła:** Z fenotypu A/B nie widać, czy jest i.
- **Most:** L017 — AA i Aa wyglądają tak samo przy pełnej dominacji.

---

## 10. Obserwacja / model

```text
Problem: Rodzice A i B — dziecko 0?
Hipoteza: Tak, jeśli Iᴬi × Iᴮi.
Model: Punnett ABO.
Wniosek: możliwe wszystkie 4 grupy.
Ograniczenia: bez innych układów.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. 4 grupy? 2. Genotyp AB? 3. Kodominacja? 4. Genotyp 0? 5. Rh = ABO?

### 11B. Ćwiczenie prowadzone
Iᴬi × Iᴮi → AB, B, A, 0.

### 11C. Ćwiczenia samodzielne
**A.** Grupy? Genotyp AB? Kodominacja? Rh?
**B.** Iᴬi × Iᴮi grupy? Popraw mit o 0. Rodzice A × B, dziecko 0.
**C.** Matka 0, dziecko AB? Dlaczego ABO ≠ A/a? Przetoczenia.
**D.** Konflikt Rh. Wykluczanie ojcostwa.

### 11D. PROBLEM / THINK
Matka 0, dziecko AB. Kto może być ojcem? Jakie dane potrzebne?

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Wymień 4 grupy ABO i genotyp 0. |
| ZASTOSUJ | Iᴬi × Iᴮi — jakie grupy u dzieci? |
| WYJAŚNIJ | Dlaczego ABO nie jest prostym A/a? |
| ODKRYJ | Kiedy rodzice A i B mogą mieć dziecko 0? |
| POŁĄCZ | Połącz kodominację z grupą AB. |
| ZAKWESTIONUJ | Matka 0, dziecko AB — czy to możliwe? Uzasadnij. |

---

## 12. Odpowiedzi

1. 0, A, B, AB. 2. IᴬIᴮ. 3. Oba allele widoczne. 4. D obecny/brak. 5. A, B, AB, 0. 6. ii. 7. Tak, jeśli Iᴬi × Iᴮi. 8. Niemożliwe. 9. Trzy allele + kodominacja. 10. Uproszczenie. 11. Matka Rh−, dziecko Rh+. 12. Wykluczanie.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Allele ABO | Iᴬ, Iᴮ, i |
| AB | IᴬIᴮ |
| Kodominacja | Oba allele widoczne |
| 0 | ii |
| A × B → 0? | Tak, jeśli Iᴬi × Iᴮi |
| Rh | Osobny układ |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) 4 grupy? 2. (P) Genotyp 0? 3. (P) Kodominacja? 4. (T) Iᴬi × Iᴮi? 5. (T) Popraw mit o 0. 6. (A) Matka 0, dziecko AB? 7. (A) ABO ≠ A/a? 8. (Z) Wykluczanie ojcostwa.

## 15. Checklista
- [ ] Znam grupy i genotypy.
- [ ] Rozumiem kodominację.
- [ ] Umiem krzyżówkę ABO.
- [ ] Wiem, że matka 0 nie może mieć dziecka AB.
- [ ] Znam ideę Rh.

## 16. Mapa pojęć
```text
ABO
├── Iᴬ/Iᴮ kodominujące
├── i recesywny
├── grupy: 0, A, B, AB
└── Rh: D/d
```

## 17. Co dalej?
L020 — mutacje (zmiany w DNA, skutki).

**Most wstecz:** L017 (allele, Punnett) → L019 (3 allele + kodominacja ABO).

## 18. Słownik
Kodominacja · Iᴬ/Iᴮ/i · Rh · Konflikt serologiczny.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Konflikt Rh, anty-D · inne układy.

## 20. Jak się uczyć?
Ściąga (5 min) → krzyżówka ABO (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

## 21. Połączenia międzyprzedmiotowe
Medycyna (transfuzje, konflikt Rh) · Matematyka (P) · Etyka (ojcostwo).

## 22. Zadania z życia codziennego
1. Dlaczego sprawdza się grupę krwi przy transfuzji? 2. Dlaczego matka Rh− potrzebuje profilaktyki? 3. Czy z grup krwi można wykluczyć ojcostwo?


---

## 23. UZUPEŁNIENIE egzaminacyjne v3.8+ (doklejone)

ABO + Rh — nie upraszczać do A/a.

### Ściąga
- Allele ABO: Iᴬ, Iᴮ, i. Iᴬ i Iᴮ kodominacja; i recesywny.
- Fenotypy: A (IᴬIᴬ lub Iᴬi), B (IᴮIᴮ lub Iᴮi), AB (IᴬIᴮ), 0 (ii).
- Rh: osobny układ (szkolnie D/d albo +/-). Nie mieszać z ABO w jednej szachownicy bez komentarza.
- Transfuzja (uproszczenie E8): 0 dawca uniwersalny **krwinek** w modelu szkolnym; AB biorca uniwersalny krwinek — zawsze z zastrzeżeniem „model szkolny, w szpitalu liczą więcej”.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Dwoje rodziców A nie może mieć dziecka 0 | Mogą, jeśli oboje Iᴬi |
| AB × 0 → tylko AB | Dzieci A albo B (Iᴬi albo Iᴮi) |
| Rh i ABO to to samo | Dwa układy |
| „Gen grupy A” bez allelu i | Grupa A bywa heterozygotą |

### 4 zadania extra
1. Iᴬi × Iᴮi — jakie grupy możliwe?  
2. Rodzice A i B, dziecko 0 — czy możliwe? zapisz genotypy.  
3. Dlaczego AB nie jest „A dominuje nad B”?  
4. Osobno: matka Rh−, dziecko Rh+ — tylko sygnał do L019/Rh, bez protokołu medycznego.

Odpowiedzi: 1 A, B, AB, 0. 2 tak: Iᴬi i Iᴮi → ii. 3 kodominacja Iᴬ i Iᴮ. 4 konflikt Rh to inny układ niż ABO.

### Status
doklej 2026-09-12 · v3.8 zachowane.


## 24. UZUPEŁNIENIE AUDYTOWE v4.2 — ABO: fenotyp nie mówi wszystkiego o genotypie

### 24.1. Algorytm rozwiązywania krzyżówki ABO
1. Zapisz **fenotypy** rodziców.
2. Ustal możliwe **genotypy** każdego rodzica.
3. Wypisz możliwe gamety.
4. Wykonaj krzyżówkę.
5. Porównaj możliwe genotypy dziecka z jego fenotypem.
6. Jeśli pytanie dotyczy wykluczenia, sprawdź najpierw, czy rodzic może przekazać wymagany allel.

### 24.2. Dlaczego sam fenotyp jest niepełną informacją?
Osoba z grupą A może mieć:
- `IᴬIᴬ`
- `Iᴬi`

Dlatego samo „A” nie mówi, który z tych dwóch genotypów występuje.

Analogicznie grupa B może oznaczać:
- `IᴮIᴮ`
- `Iᴮi`

### 24.3. Przykład prowadzony
**Rodzice:** A × B  
**Dziecko:** 0

Aby dziecko miało grupę 0, musi mieć `ii`.

Zatem:
- rodzic A musi móc przekazać `i` → `Iᴬi`,
- rodzic B musi móc przekazać `i` → `Iᴮi`.

Krzyżówka:
`Iᴬi × Iᴮi`

Możliwe fenotypy potomstwa:
- A
- B
- AB
- 0

### 24.4. Ważne ograniczenie
Grupy krwi mogą **wykluczać** niektóre możliwości dziedziczenia, ale same w sobie nie są pełnym dowodem pokrewieństwa. W praktyce wykorzystuje się znacznie więcej informacji genetycznej.

### 24.5. Bezpieczne rozróżnienie transfuzji
W szkolnym modelu często mówi się o „dawcy uniwersalnym” i „biorcy uniwersalnym”. Trzeba dopisać **krwinki czerwone** oraz pamiętać, że rzeczywista zgodność transfuzji uwzględnia więcej układów i parametrów niż samo ABO.

<!-- ==================== END L019 ==================== -->


<!-- ==================== BEGIN L020 ==================== -->

# L020 — Czym są mutacje i jakie mogą mieć skutki?

## KARTA LEKCJI L020

- Numer: L020
- Tytuł roboczy: Mutacje
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L011 / L016 · Następna: L021
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Mutacja i skutek.

`[BIO: DIAGRAM type=FLOW]`
`zmiana DNA → produkt/komórka → możliwy skutek`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** mutacja ≠ automatycznie choroba.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L019  
**Następna lekcja:** L021

---

### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

## 1. Pytanie przewodnie

Czym są mutacje i dlaczego nie każda zmiana w DNA zmienia cechę?

---

## 2. Cele lekcji

Po lekcji uczeń:

- definiuje mutację jako **trwałą zmianę w DNA**,
- rozróżnia spontaniczne / indukowane oraz **somatyczne / germinalne**,
- wymienia mutageny (UV, promieniowanie, chemikalia, wirusy),
- podaje przykłady: mukowiscydoza (genowa), zespół Downa (chromosomowa — trisomia 21),
- (ambitny) wyjaśnia łańcuch DNA → białko → fenotyp i regułę **mutacja ≠ choroba ≠ nowotwór**,
- (zaawansowany) rozróżnia substytucję, delecję/insercję, frameshift.

### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| mutacja = zmiana w DNA | definicja |
| mutacja ≠ choroba ≠ nowotwór | najczęstszy błąd |
| mutageny (UV, dym…) | profilaktyka + most L016 |
| kod zdegenerowany → cicha | dlaczego nie każda mutacja widać |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**
L011 (DNA), L013 (replikacja), L016 (nowotwory), L017 (allele).

---

## 4. Zacznij od problemu
Dlaczego UV zwiększa ryzyko mutacji? Dlaczego nie każda mutacja widać?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Mutacja** — zmiana w DNA.

| Typ | Opis |
|-----|------|
| Spontaniczna | bez znanego czynnika |
| Indukowana | przez mutagen |

**Mutageny:** UV · X · chemikalia · wirusy.

**Przykłady:** mukowiscydoza (genowa), zespół Downa (chromosomowa).

```text
mutacja ≠ choroba genetyczna ≠ nowotwór
```

### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **UV + dym + X = mutagen** | czynniki |
| 2 | **Mutacja ≠ choroba ≠ nowotwór** | trzy pojęcia |
| 3 | **Somatyczna nie dziedziczy się** | rozróżnienie |
| 4 | **Kod zdegenerowany = cicha mutacja** | dlaczego nie widać |

---

## 6. Wyjaśnienie od podstaw  · **[PODSTAWA E8]**

**Mutacja** = **trwała zmiana w DNA** (most L011). Może dotyczyć:
- jednego genu (mutacja genowa),
- struktury chromosomu,
- liczby chromosomów (np. trisomia 21 — zespół Downa; most L015 nondysjunkcja).

### Skutek nie jest z góry „zły”
Mutacja bywa **neutralna**, **szkodliwa** albo (rzadziej) **korzystna** — zależy od miejsca w DNA i wpływu na produkt genu.

```text
DNA → (transkrypcja) → RNA → aminokwas → białko → funkcja → fenotyp (+ środowisko)
```

**Kod genetyczny jest zdegenerowany** (kilka kodonów na ten sam aminokwas) → zmiana jednej zasady **nie zawsze** zmienia aminokwas → **mutacja cicha** (fenotyp bez zmiany).

### Mutageny
Czynniki **zwiększające** częstość mutacji: UV, promieniowanie X, niektóre chemikalia, niektóre wirusy.  
Most **L016**: mutageny podnoszą ryzyko uszkodzeń DNA → przy nagromadzeniu w genach kontroli cyklu rośnie ryzyko nowotworu. Ale **mutacja ≠ nowotwór**.

### 6A. Dlaczego?

1. **Dlaczego UV uszkadza DNA?** Może powodować dimery tyminy i błędy przy replikacji/naprawie (L013).
2. **Dlaczego nie każda mutacja zmienia fenotyp?** Kod zdegenerowany + mutacje poza ważnymi regionami genu / w intronach (idea).
3. **Dlaczego mutacje somatyczne nie dziedziczą się?** Nie są w gametach — dziecko ich nie dostaje.
4. **Dlaczego mutacje są ważne dla ewolucji?** Dostarczają **zmienności** (surowiec doboru — most L030).

### 6B. Krok po kroku — czy mutacja „widać”?
1. Zmiana w DNA.
2. Czy zmienia kodon / produkt genu?
3. Czy zmienia funkcję białka?
4. Czy widać to w **fenotypie** (i w jakim środowisku)?

### 6C. Przykład prowadzony
Sekwencja kodonów (uproszczenie) `ATG–CCA`:
- **substytucja** jednej zasady → może zmienić aminokwas **albo** zostać cicha,
- **delecja** jednej zasady → **frameshift** (przesunięcie ramki odczytu) — zwykle poważniejsza, bo psuje wiele kolejnych aminokwasów.

### 6D. Powiązanie
```text
L011/L013 (DNA, replikacja, błędy)
  → L016 (nagromadzenie mutacji w genach kontroli → nowotwór)
  → L017 (allele = różne wersje genu, często z mutacji)
  → L020 (mutacje: definicja, typy, skutki)
  → L030 (zmienność → ewolucja)
```

---

## 7. Poziom ambitny  · **[MASTER]**

| Podział | Znaczenie |
|---------|-----------|
| **Genowa** vs **chromosomowa** | zmiana w sekwencji genu vs zmiana struktury/liczby chromosomów (np. Down = trisomia 21) |
| **Somatyczna** vs **germinalna** | w komórce ciała (nie dziedziczna) vs w linii płciowej (może przejść na potomstwo) |
| **Spontaniczna** vs **indukowana** | bez znanego czynnika vs przez mutagen |

**Anemia sierpowata (idea):** mutacja w genie hemoglobiny; u **heterozygot** bywa ochrona przed ciężkim przebiegiem malarii → przykład, że skutek mutacji zależy też od środowiska (most ewolucja L030).

**Trójkąt pojęć (nie mylić):**
```text
mutacja  ≠  choroba genetyczna  ≠  nowotwór
```

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

| Typ mutacji punktowej | Co się dzieje | Typowy skutek |
|----------------------|---------------|---------------|
| **Substytucja** | jedna zasada → inna | cicha / missense / nonsense |
| **Delecja / insercja** | ubytek lub wstawka zasad | często frameshift |
| **Frameshift** | przesunięcie ramki odczytu | zwykle poważny (wiele AA zmienionych) |

**Missense** — inny aminokwas; **nonsense** — przedwczesny stop.  
Frameshift zwykle groźniejszy niż pojedyncza substytucja.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Mutacja zawsze szkodliwa | bywa neutralna / cicha | kod zdegenerowany |
| Mutacja = nowotwór | nowotwór ≈ nagromadzenie zmian w kontroli cyklu | L016 |
| Down = mutacja genowa | **trisomia 21** (chromosomowa) | liczba chromosomów |
| Wszystkie mutacje dziedziczne | somatyczne **nie** | nie w gametach |

### Klinika 2.0
**Błąd 1:** „Każda mutacja powoduje chorobę.”
- **Znajdź:** Uogólnienie.
- **Popraw:** Skutek: neutralny, szkodliwy lub (rzadko) korzystny.
- **Reguła:** Mutacja ≠ choroba; zależy od miejsca i funkcji.
- **Dlaczego:** kod zdegenerowany, regiony niekodujące, heterozygotyczność.

**Błąd 2:** „Mutacja = nowotwór.”
- **Znajdź:** Pomylenie zdarzenia molekularnego z chorobą.
- **Popraw:** Jedna mutacja prawie nigdy nie wystarcza; nowotwór = zwykle nagromadzenie (L016).
- **Reguła:** Mutacja ≠ nowotwór.

---

## 10. Obserwacja / model

```text
Problem: Czy każda zmiana DNA zmienia cechę?
Hipoteza: Nie.
Model: mutacja → kodon → aminokwas → białko.
Wniosek: skutek od neutralnego do poważnego.
Ograniczenia: bez pełnej regulacji.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check
1. Mutacja? 2. 2 mutageny? 3. Zawsze szkodliwa? 4. Mutacja = nowotwór? 5. Choroba chromosomowa?

### 11B. Ćwiczenie prowadzone
Zamiana jednej zasady może nie zmienić fenotypu (kod zdegenerowany → ten sam aminokwas).

### 11C. Ćwiczenia samodzielne
**A.** Definicja? Mutageny? 2 choroby? Spontaniczna vs indukowana?
**B.** Popraw „zawsze szkodliwa”. Mutacje a ewolucja. Mutacja a nowotwór.
**C.** Dlaczego cicha? Somatyczna vs germinalna. Genowa vs chromosomowa.
**D.** Substytucja vs frameshift. Anemia sierpowata (idea).

### 11D. PROBLEM / THINK
Czy dwie osoby z identyczną mutacją zawsze mają ten sam fenotyp? Uzasadnij.

### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to mutacja (jedno zdanie)? |
| ZASTOSUJ | Podaj 2 mutageny i 1 przykład choroby genowej. |
| WYJAŚNIJ | Dlaczego mutacja bywa „cicha”? |
| ODKRYJ | Czy mutacja = nowotwór? Uzasadnij. |
| POŁĄCZ | Połącz mutacje z L016 i z ewolucją (L030). |
| ZAKWESTIONUJ | Czy dwie osoby z tą samą mutacją zawsze mają ten sam fenotyp? |

---

## 12. Odpowiedzi

1. Zmiana w DNA. 2. UV, X, chemikalia. 3. Mukowiscydoza, Down. 4. Bez czynnika vs mutagen. 5. Bywa neutralna. 6. Dostarczają zmienności. 7. Nie każda mutacja = nowotwór. 8. Kod zdegenerowany. 9. Somatyczne nie; germinalne mogą. 10. Genowa: mukowiscydoza; chromosomowa: Down. 11. Frameshift groźniejszy. 12. Nie — środowisko, inne geny, miejsce, rozwój. 13. Heterozygoty chronione przed malarią.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Mutacja | Zmiana w DNA |
| Mutageny | UV, X, chemikalia |
| Zawsze szkodliwa? | Nie |
| Down | Trisomia 21 |
| Somatyczna vs germinalna | Nie dziedziczy vs może |
| Frameshift | Przesunięcie ramki |

---

## 14. Test końcowy  · **[TRENING]**
1. (P) Mutacja? 2. (P) 2 mutageny? 3. (P) Zawsze szkodliwa? 4. (T) Popraw mit. 5. (T) Spontaniczna vs indukowana. 6. (A) Dlaczego cicha? 7. (A) Somatyczna vs germinalna. 8. (Z) Frameshift vs substytucja.

## 15. Checklista
- [ ] Wiem, czym jest mutacja i mutagen.
- [ ] Rozumiem, że mutacja ≠ zawsze choroba.
- [ ] Znam przykłady chorób.
- [ ] Potrafię opisać łańcuch DNA → fenotyp.
- [ ] Rozróżniam somatyczne/germinalne i genowe/chromosomowe.

## 16. Mapa pojęć
```text
MUTACJE
├── definicja
├── spontaniczna/indukowana
├── mutageny
├── skutki: neutralny → choroba
├── genowe/chromosomowe
└── somatyczne/germinalne
```

## 17. Co dalej?
L021 — powtórka przekrojowa genetyki.

**Most wstecz:** L011–L019 → L020 (mutacje spajają DNA, allele, nowotwory i ewolucję).

## 18. Słownik
Mutacja · Mutagen · Trisomia 21 · Frameshift · Substytucja.

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Missense/nonsense · anemia sierpowata i dobór · mutacje mitochondrialne.

## 20. Jak się uczyć?
Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

## 21. Połączenia międzyprzedmiotowe
Chemia (mutageny) · Medycyna (choroby) · Etyka (testy genetyczne).

## 22. Zadania z życia codziennego
1. Dlaczego warto chronić się przed UV? 2. Dlaczego nie każda mutacja powoduje chorobę? 3. Jak mutacje wpływają na ewolucję?


## 24. UZUPEŁNIENIE AUDYTOWE v4.2 — mapa typów mutacji i skutków

### 24.1. Trzy pytania zamiast jednej listy
Przy zadaniu o mutacji najpierw zapytaj:

1. **Co się zmieniło?** — pojedyncza zasada, fragment chromosomu czy liczba chromosomów?
2. **Gdzie powstała zmiana?** — komórka somatyczna czy linia płciowa?
3. **Jaki jest skutek?** — neutralny, szkodliwy, korzystny albo zależny od warunków?

### 24.2. Drabinka od DNA do fenotypu
`DNA → gen → RNA → białko → funkcja komórki → cecha/fenotyp`

Mutacja może zatrzymać się „po drodze”:
- nie zmienić białka,
- zmienić aminokwas,
- wprowadzić przedwczesny sygnał STOP,
- zmienić ilość białka,
- zmienić funkcję białka,
- albo nie mieć zauważalnego wpływu na fenotyp.

### 24.3. Substytucja vs insercja/delecja
| Zmiana | Idea | Typowy problem |
|---|---|---|
| substytucja | jedna zasada zostaje zastąpiona inną | może być cicha, missense lub nonsense |
| insercja | dodanie zasad | jeśli liczba nie jest wielokrotnością 3, może wystąpić frameshift |
| delecja | usunięcie zasad | analogicznie może wystąpić frameshift |

**Ważne:** „typowy” nie znaczy „zawsze”. Skutek zależy od miejsca i kontekstu.

### 24.4. Mutacja a mutagen
- **Mutacja** = zmiana w materiale genetycznym.
- **Mutagen** = czynnik, który zwiększa częstość uszkodzeń lub mutacji.
- UV może być mutagenem; samo UV nie jest „mutacją”.

### 24.5. Mini-zadanie
**Zmiana:** usunięto jedną zasadę z odcinka kodującego.

**Tok rozumowania:**
1. To delecja.
2. Jedna zasada ≠ wielokrotność trzech.
3. Może dojść do przesunięcia ramki odczytu.
4. Zmienione mogą zostać kolejne kodony.
5. Skutek dla białka zależy od miejsca zmiany.

### 24.6. Mapa pojęć
`mutacja`
├── genowa
│   ├── substytucja
│   ├── insercja
│   └── delecja
├── chromosomowa — zmiana struktury
└── genomowa — zmiana liczby chromosomów

<!-- ==================== END L020 ==================== -->


<!-- ==================== BEGIN L021 ==================== -->

# L021 — Powtórka genetyki

## KARTA LEKCJI L021

- Numer: L021
- Tytuł roboczy: Powtórka genetyki
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L010–L020 · Następna: L030
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Mapa całej genetyki.

`[BIO: DIAGRAM type=FLOW]`
`DNA → chromosom → podział → gameta → dziedziczenie → mutacja`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** transfer wiedzy między tematami.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Powtórka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Poprzednia lekcja:** L020  
**Następna lekcja:** L030

---

## 1. Pytanie przewodnie

Jak połączyć DNA, chromosomy, podziały i dziedziczenie w jeden spójny obraz?

---

## 2. Cele lekcji

Po lekcji uczeń:

- powtarza rdzeń bloku (L011–L020),
- rozwiązuje zadania przekrojowe,
- wskazuje własne luki,
- (ambitny/zaawansowany) łączy mechanizmy w zadaniach problemowych.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| DNA → chromosom → podział → dziedziczenie | łańcuch |
| Punnett + P | narzędzia |
| mutacje + dobór | most do ewolucji |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

Cały blok L011–L020:
- L011 — DNA (budowa, pary, informacja)
- L012 — chromosom (chromatydy, centromer, 46, XX/XY)
- L013 — replikacja (semikonserwatywna, faza S)
- L014 — mitoza (2n → 2n)
- L015 — mejoza (2n → n, crossing-over)
- L016 — nowotwory (niekontrolowane podziały)
- L017 — dziedziczenie (Punnett, 3:1, 1:2:1)
- L018 — płeć / X-linked (ojciec nie daje X synowi)
- L019 — ABO (kodominacja, 3 allele)
- L020 — mutacje (typy, mutageny, skutki)

---

## 4. Mapa przekrojowa

```text
GENETYKA
├── DNA (L011) — budowa, pary, informacja
├── CHROMOSOM (L012) — chromatydy, centromer, 46, XX/XY
├── REPLIKACJA (L013) — semikonserwatywna, faza S
├── MITOZA (L014) — 2n → 2n
├── MEJOZA (L015) — 2n → n, crossing-over
├── NOWOTWORY (L016) — niekontrolowane podziały
├── DZIEDZICZENIE (L017) — Punnett, 3:1, 1:2:1
├── PŁEĆ / X (L018) — X-linked
├── ABO (L019) — kodominacja, 3 allele
└── MUTACJE (L020) — typy, mutageny
```

---

## 5. Interleaving — zestawy mieszane

### Zestaw A — Podstawa (przekrój)

1. Pary zasad w DNA?
2. Ile chromosomów ma komórka ciała człowieka?
3. Co to replikacja?
4. Mitoza vs mejoza — jedna różnica?
5. Co to allel?
6. XX i XY — kto jest kim?
7. 4 grupy krwi ABO?
8. Co to mutacja?

### Zestaw B — Trening (łączenie)

9. Aa × Aa — stosunek genotypów i fenotypów?
10. Dlaczego po replikacji liczba chromosomów się nie zmienia?
11. Dlaczego ojciec nie przekazuje X synowi?
12. Matka 0, ojciec AB — jakie grupy krwi może mieć dziecko?
13. Jak mutacja wpływa na nowotwór?
14. Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne?

### Zestaw C — Ambitne (synteza)

15. Nondysjunkcja → jaka zygota? Podaj przykład.
16. Dlaczego hemofilia częściej dotyczy mężczyzn?
17. Dlaczego mutacja nie zawsze zmienia fenotyp?
18. Anemia sierpowata — dlaczego allel utrzymuje się?

### Zestaw D — Zaawansowane (problem otwarty)

19. Czy z danych można jednoznacznie wywnioskować model dziedziczenia? Kiedy nie?
20. Jak zmienność genetyczna wpływa na ewolucję populacji?
21. Czy mutacja zawsze prowadzi do zmiany fenotypu?
22. Dlaczego kod genetyczny jest zdegenerowany?

---

## 6. Test przekrojowy

### A. Podstawa

1. Pary zasad w DNA?  
2. 2n u człowieka?  
3. Co to chromosom?  
4. Co to replikacja?  
5. Mitoza vs mejoza?  
6. Aa × Aa — stosunek?  
7. XX/XY?  
8. ABO — genotyp AB?  
9. Mutacja — definicja?  
10. Mutagen — przykłady?

### B. Trening

11. Uzupełnij nić: A–G–T–C → ?  
12. Ile chromatyd po replikacji?  
13. P(aa) w Aa × Aa?  
14. Nosicielka × zdrowy — % chorych synów?  
15. Iᴬi × Iᴮi — grupy dzieci?  
16. Mutacja → nowotwór?

### C. Ambitne

17. Nondysjunkcja → aneuploidia (przykład).  
18. Rodowód: zdrowi rodzice, chore dziecko — modele?  
19. Dlaczego mutacja może być cicha?  
20. Anemia sierpowata — dlaczego allel utrzymuje się?

### D. Zaawansowane

21. AaBb × AaBb — ile genotypów?  
22. P(dwoje kolejnych dzieci aa) w Aa × Aa?  
23. Czy z danych można jednoznacznie wywnioskować model? Kiedy nie?  
24. Jak zmienność wpływa na ewolucję?

---

## 7. Odpowiedzi

### A

1. A–T, C–G.  
2. 46 (23 pary).  
3. Silnie upakowana forma DNA.  
4. Kopiowanie DNA przed podziałem.  
5. Mitoza: 2n → 2n; mejoza: 2n → n.  
6. 1:2:1 (genotypy), 3:1 (fenotypy).  
7. XX — kobieta; XY — mężczyzna.  
8. IᴬIᴮ.  
9. Trwała zmiana w DNA.  
10. UV, promieniowanie X, chemikalia, wirusy.

### B

11. T–C–A–G.  
12. 92 (po fazie S).  
13. 1/4.  
14. 50%.  
15. AB, A, B, 0 (wszystkie 4).  
16. Mutacja ≠ nowotwór; nowotwór = nagromadzenie zmian w kontroli cyklu.

### C

17. Trisomia 21 (zespół Downa).  
18. Autosomalna recesywna lub X-linked recesywna.  
19. Kod zdegenerowany — wiele kodonów → ten sam aminokwas.  
20. Heterozygoty mają przewagę (ochrona przed malarią).

### D

21. 9.  
22. 1/16.  
23. Nie — przy małej próbie, niepełnej penetracji, cechach wieloczynnikowych.  
24. Zmienność → materiał dla doboru → ewolucja.

---

## 8. Klinika 2.0 — przekrojowa

**Błąd 1:** „Mejoza i mitoza to samo."

- **Znajdź:** Brak rozróżnienia.
- **Popraw:** Mitoza zachowuje (2n → 2n); mejoza redukuje (2n → n).
- **Reguła:** Liczba zestawów po podziale = cel procesu.
- **Dlaczego:** Różne funkcje (ciało vs gamety).
- **Podobne:** Komórka ciała vs gameta.
- **Pułapka:** Mejoza ma 2 podziały, mitoza 1.

**Błąd 2:** „92 chromosomy w metafazie."

- **Znajdź:** Mylenie chromatyd z chromosomami.
- **Popraw:** 46 chromosomów, 92 chromatydy.
- **Reguła:** Liczymy centromery.
- **Dlaczego:** Replikacja tworzy kopie, ale nie rozdziela centromerów.
- **Podobne:** Analogia zszytej książki.
- **Pułapka:** Liczba chromosomów ≠ liczba chromatyd.

**Błąd 3:** „25% = co czwarte dziecko."

- **Znajdź:** Gwarancja kolejności.
- **Popraw:** Każde dziecko osobno 25%.
- **Reguła:** Niezależność zdarzeń.
- **Dlaczego:** Zapłodnienie to osobne zdarzenie.
- **Podobne:** P(dwoje kolejnych aa) = 1/16.
- **Pułapka:** Rodzina ma już troje dominujących. Czy czwarte „musi" być recesywne? Nie.

**Błąd 4:** „Mutacja = nowotwór."

- **Znajdź:** Pomylenie zdarzenia molekularnego z chorobą.
- **Popraw:** Mutacja ≠ nowotwór; nowotwór = nagromadzenie zmian w kontroli cyklu.
- **Reguła:** Trzy pojęcia: mutacja, choroba genetyczna, nowotwór.
- **Dlaczego:** Potrzeba wielu mutacji.
- **Podobne:** dym → mutacje → (nagromadzenie) → nowotwór.
- **Pułapka:** „Palił i miał raka, więc dym = rak" — nie.

**Błąd 5:** „Matka 0 może mieć dziecko AB."

- **Znajdź:** Brak analizy genotypu.
- **Popraw:** Matka 0 = ii; nie może dać Iᴬ ani Iᴮ.
- **Reguła:** Genotyp 0 = ii.
- **Dlaczego:** Dziecko AB wymaga Iᴬ od jednego i Iᴮ od drugiego rodzica.
- **Podobne:** Matka AB + ojciec 0 → dziecko A lub B.
- **Pułapka:** „Grupa 0 to brak genów" — fałsz.

---

## 9. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Pary zasad w DNA. |
| ZASTOSUJ | P(aa) w Aa × Aa. |
| WYJAŚNIJ | Dlaczego 25% ≠ gwarancja? |
| ODKRYJ | Jaki model dziedziczenia? |
| POŁĄCZ | DNA z fenotypem. |
| ZAKWESTIONUJ | Mutacja zawsze zmienia fenotyp? |

---

## 10. Jak się uczyć — powtórka genetyki

1. **Mapa (5 min):** narysuj mapę wszystkich lekcji L011–L020.
2. **Fiszki (10 min):** interleaving z 10 lekcji.
3. **Mini-check (5 min):** sekcja 5A.
4. **Ćwiczenia (15 min):** sekcja 5B/C.
5. **Test przekrojowy (20 min):** sekcja 6.
6. **Powtórka błędów (10 min):** wróć do lekcji, których dotyczą błędy.

**Zasada 3 pytań po powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 11. Zadania z życia codziennego

1. Dlaczego lekarz pyta o choroby w rodzinie?
2. Dlaczego rodzeństwo może mieć różne grupy krwi?
3. Dlaczego badania genetyczne są ważne?
4. Jak genetyka wpływa na zdrowie?
5. Dlaczego antybiotyki przestają działać? (most do L031)

---

## 12. Słownik przekrojowy

| Termin | Definicja |
|--------|-----------|
| DNA | Kwas deoksyrybonukleinowy — nośnik informacji genetycznej |
| Chromosom | Silnie upakowana forma DNA |
| Chromatyda | Kopia chromosomu po replikacji |
| Centromer | Miejsce połączenia chromatyd |
| Replikacja | Kopiowanie DNA przed podziałem |
| Mitoza | Podział zachowujący liczbę zestawów |
| Mejoza | Podział redukujący (2n → n) |
| Allel | Wersja genu |
| Genotyp | Zestaw alleli |
| Fenotyp | Ujawniona cecha |
| Homozygota | AA lub aa |
| Heterozygota | Aa |
| Mutacja | Trwała zmiana w DNA |
| Mutagen | Czynnik zwiększający częstość mutacji |

---

## 13. Checklista bloku

- [ ] DNA: budowa, pary, informacja.
- [ ] Chromosom: 46, chromatydy, centromer, XX/XY.
- [ ] Replikacja semikonserwatywna.
- [ ] Mitoza vs mejoza.
- [ ] Allele, Punnett, P ≠ przeznaczenie.
- [ ] Cechy X-linked.
- [ ] ABO.
- [ ] Mutacje.
- [ ] Łańcuch DNA → fenotyp.
- [ ] Wiem, co powtórzyć.

---

## 14. Co dalej?

**L030** — ewolucja.

**Most wstecz:** L011–L020 (wszystkie lekcje genetyki).

---


## UZUPEŁNIENIE MASTER v4.1 — jak korzystać z powtórki rocznej

### A. Rdzeń E8 — 12 zdań kontrolnych

Przed rozpoczęciem testu przekrojowego uczeń powinien umieć bez podglądania:

1. DNA jest nośnikiem informacji genetycznej.
2. Człowiek ma typowo 46 chromosomów w komórce somatycznej.
3. 46 = 23 pary.
4. Chromosomy homologiczne pochodzą z dwóch rodzicielskich zestawów.
5. Po replikacji DNA liczba chromosomów nie zwiększa się.
6. Liczba chromosomów zależy od liczby centromerów.
7. Mitoza i mejoza mają różne cele.
8. Allel jest wersją genu.
9. Prawdopodobieństwo 25% nie oznacza „co czwarte dziecko”.
10. Mutacja nie musi oznaczać choroby.
11. Ewolucja wymaga dziedzicznej zmienności i różnic w sukcesie rozrodczym.
12. Ekosystem obejmuje organizmy oraz środowisko nieożywione.

### B. Najpierw rozpoznaj typ zadania

| Jeżeli zadanie pyta o… | Najpierw uruchom |
|---|---|
| liczbę chromosomów | regułę centromerów |
| stosunek potomstwa | Punnetta / prawdopodobieństwo |
| X-linked | chromosomy płci + pochodzenie X/Y |
| ABO | `Iᴬ`, `Iᴮ`, `i` |
| aneuploidię | nondysjunkcję |
| dobór naturalny | zmienność → dziedziczenie → różny sukces |
| ekosystem | biocenoza + biotop |
| łańcuch pokarmowy | przepływ energii i kierunek zależności pokarmowej |

### C. Kontrola jakości odpowiedzi

Przed uznaniem odpowiedzi za gotową sprawdź:

- **Czy podałem liczbę?**
- **Czy podałem jednostkę / etap / zakres pytania?**
- **Czy uzasadniłem wynik?**
- **Czy nie pomyliłem chromosomu z chromatydą?**
- **Czy nie zamieniłem prawdopodobieństwa w gwarancję?**
- **Czy nie użyłem pojęcia „dobór naturalny” bez wskazania różnic w przeżyciu lub rozrodzie?**

### D. Zadania „z brakującą informacją”

W powtórce rocznej warto celowo zostawić zadania, w których **nie da się udzielić jednej odpowiedzi bez dodatkowego warunku**.

Przykłady:

1. „Komórka ma 92 cząsteczki DNA. Ile ma chromosomów?”  
   → trzeba znać etap cyklu.

2. „Fenotyp jest dominujący. Jaki jest genotyp?”  
   → może być `AA` albo `Aa`, jeśli nie ma dodatkowych danych.

3. „Rodzice mają zdrowe dziecko. Jaki jest model dziedziczenia?”  
   → samo to zdanie zwykle nie wystarcza.

4. „Gatunek ma więcej chromosomów niż człowiek. Czy jest bardziej złożony?”  
   → nie można tak wnioskować.

To jest ważny poziom MASTER: **uczeń nie tylko znajduje odpowiedź, ale rozpoznaje, kiedy danych jest za mało.**

### E. Mini-test końcowy — diagnostyka błędów

| Odpowiedź ucznia | Możliwa luka |
|---|---|
| „92 chromosomy po replikacji” | L012 — centromer/chromatyda |
| „co czwarte dziecko” | prawdopodobieństwo |
| „mejoza to dwie mitozy” | różnica celu i przebiegu podziałów |
| „mutacja = choroba” | mutacja ≠ skutek kliniczny |
| „bakteria nauczyła się odporności” | dobór naturalny |
| „ekosystem = zwierzęta i rośliny” | biotop |
| „więcej chromosomów = bardziej rozwinięty organizm” | interpretacja liczby chromosomów |

### F. Zasada końcowa

> **Powtórka roczna nie ma polegać na ponownym przeczytaniu wszystkiego od początku. Ma ujawnić, które mechanizmy uczeń potrafi odtworzyć, zastosować, połączyć i wyjaśnić.**


## 15. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — przebudowa na powtórkę umiejętności.
- Zachowano całą treść v3.7.
- Dodano: interleaving (4 zestawy), test przekrojowy (A/B/C/D), Klinika 2.0 (5 przykładów), Drabinka, „Jak się uczyć", „Zadania z życia codziennego", Słownik przekrojowy, Checklista bloku.
- Zamiast streszczenia rozdziałów — zadania mieszane i diagnostyka luk.

---

**Koniec L021 MASTER v4.0**


---

## 16. UZUPEŁNIENIE egzaminacyjne v4.0+ (doklejone — nic nie wycięto)

Blok L010–L020 na jednej stronie + 8 zadań mieszanych.

### Ściąga przekrojowa genetyki
1. Informacja: DNA w jądrze → gen = odcinek → allel = wersja.
2. 46 = 2n (ciało); 23 = n (gameta).
3. Replikacja przed podziałem (semikonserwatywna — L013).
4. Mitoza 2n→2n; mejoza 2n→n.
5. Punnett: Aa × Aa → 3:1 przy pełnej dominacji (model).
6. X-linked: syn bierze X od matki.
7. ABO: Iᴬ, Iᴮ, i — kodominacja A i B; 0 = ii.
8. Mutacja ≠ automatyczna choroba.

### 8 zadań extra (interleaving)
1. Komórka skóry: ile chromosomów?  
2. Plemnik: 2n czy n?  
3. Aa × aa — stosunek fenotypów przy A dominującym.  
4. Ojciec daltonista, matka homozygota „zdrowa” — syn?  
5. IᴬIᴮ × ii — grupy dzieci.  
6. Mitoza vs mejoza: jeden cel każdej.  
7. Mutagen — przykład + czym różni się od mutacji.  
8. Nowotwór: które słowo-klucz z L016?

Szkic odpowiedzi: 1 46. 2 n. 3 1:1. 4 synowie zdrowi (X od matki). 5 A albo B. 6 wzrost vs gamety. 7 UV vs zmiana w DNA. 8 kontrola cyklu / hamulce.

### Kiedy wracać
L011–L013 jeśli sypie się 46/DNA; L017 jeśli Punnett; L018–L019 jeśli płeć i krew; L020 jeśli mutacje.

### Status doklejki
2026-09-12 · sekcje 1–15 bez zmian.

<!-- ==================== END L021 ==================== -->


<!-- ==================== BEGIN L030 ==================== -->

# L030 — Czym jest ewolucja i jakie mamy na nią dowody?

## KARTA LEKCJI L030

- Numer: L030
- Tytuł roboczy: Ewolucja — dowody
- Dział: Ewolucja
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L021 · Następna: L031
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Dowody ewolucji.

`[BIO: DIAGRAM type=FLOW]`
`obserwacja → dowód → wspólne pochodzenie`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** ewolucja jako zmiana populacji w czasie.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Ewolucja  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L021  
**Następna lekcja:** L031

---

### Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L015 — zmienność, L020 — mutacje) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 (ćwiczenia, test) |
| **[MASTER]** | pkt 7 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

---

## 1. Pytanie przewodnie

Czym jest ewolucja i skąd wiemy, że zachodzi?

---

## 2. Cele lekcji

Po lekcji uczeń:

- definiuje ewolucję,
- wymienia dowody ewolucji (skamieniałości, homologia, analogia, relikty),
- odróżnia narządy homologiczne od analogicznych,
- (ambitny) rozumie ideę wspólnego pochodzenia,
- (zaawansowany) zna biogeografię, embriologię, biochemię jako dowody.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| ewolucja = zmiany z pokolenia na pokolenie | definicja |
| homologiczne vs analogiczne | kluczowe rozróżnienie |
| wspólne pochodzenie | fundament |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)  · **[PRZYPOMNIENIE]**

- L015 (zmienność — materiał ewolucji),
- L020 (mutacje — źródło zmienności),
- z klasy 5–7: gatunek, organizmy kopalne.

---

## 4. Zacznij od problemu

Dlaczego na różnych kontynentach żyją podobne, ale nie identyczne zwierzęta?  
Dlaczego kończyna człowieka, wieloryba i nietoperza ma ten sam plan budowy?

**Hipoteza ucznia:** ....................................

**Podpowiedź:** Pomyśl o wspólnym przodku — jak z jednego planu mogą powstać różne funkcje?

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Ewolucja** — zmiany cech organizmów z pokolenia na pokolenie, prowadzące do powstawania nowych gatunków.

| Dowód | Przykład |
|-------|----------|
| Skamieniałości | dinozaury, ogniwa pośrednie |
| Narządy homologiczne | kończyna człowieka, wieloryba, nietoperza |
| Narządy analogiczne | skrzydło ptaka i owada |
| Relikty | kość ogonowa u człowieka |
| Biogeografia | zwierzęta Australii |
| Embriologia | podobne stadia zarodkowe |
| Biochemia | podobieństwa DNA/białek |

**Wspólne pochodzenie** — podobieństwa wskazują na wspólnych przodków.

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Homologiczne = wspólny plan** | różne funkcje |
| 2 | **Analogiczne = ta sama funkcja** | różne pochodzenie |
| 3 | **Skamieniałości = zapis przeszłości** | dowód |
| 4 | **Relikty = pozostałości** | dowód |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)  · **[PODSTAWA E8]**

**Ewolucja** to zmiany cech organizmów zachodzące z pokolenia na pokolenie. W długiej skali prowadzi do powstawania nowych gatunków.

**Dowody ewolucji:**

1. **Skamieniałości** — szczątki organizmów z przeszłości; pokazują ogniwa pośrednie (np. Archaeopteryx).

2. **Narządy homologiczne** — mają ten sam plan budowy, ale różne funkcje. Przykład: kończyna przednia człowieka, wieloryba, nietoperza — ten sam układ kości.

3. **Narządy analogiczne** — mają różne pochodzenie, ale podobną funkcję. Przykład: skrzydło ptaka i owada.

4. **Relikty** — pozostałości narządów, które u przodków były funkcjonalne (np. kość ogonowa).

5. **Biogeografia** — rozmieszczenie organizmów odpowiada historii kontynentów.

6. **Embriologia** — zarodki różnych kręgowców są podobne we wczesnych stadiach.

7. **Biochemia** — podobieństwa w DNA i białkach wskazują na wspólne pochodzenie.

### 6A. Dlaczego?

1. **Dlaczego ewolucja zachodzi?** Bo istnieje zmienność, dziedziczenie i selekcja w czasie.

2. **Dlaczego homologia to dowód?** Bo wspólny plan budowy sugeruje wspólnego przodka.

3. **Dlaczego analogia nie jest dowodem pokrewieństwa?** Bo podobieństwo funkcji może powstać niezależnie (konwergencja).

4. **Dlaczego relikty to dowód?** Bo pokazują pozostałości po funkcjach przodków.

### 6B. Krok po kroku — jak rozpoznać homologiczne vs analogiczne

1. Czy narządy mają **ten sam plan budowy**? → homologiczne.
2. Czy mają **tę samą funkcję**, ale różne pochodzenie? → analogiczne.
3. Czy istnieje wspólny przodek? → homologiczne.

### 6C. Przykład prowadzony

**Dane:** Ćma krępak brzozowy — dwa warianty (jasny, ciemny).

**Obserwacja:** W XIX w. Anglia — wzrost form ciemnych w rejonach przemysłowych.

**Wniosek:** Środowisko (sadza) faworyzowało ciemne formy — dowód działania doboru naturalnego.

### 6D. Powiązanie z innymi lekcjami

```text
L015 (zmienność) → L020 (mutacje) → L030 (ewolucja) → L031 (dobór)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- **Biogeografia** — np. zięby Darwina na Galapagos.
- **Embriologia** — zarodki mają podobne stadia.
- **Biochemia** — podobieństwa sekwencji DNA/białek.
- **Homologia ≠ analogia** — kluczowe rozróżnienie.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

> **Zaawansowane.**

- **Koewolucja** — wzajemne przystosowania gatunków (np. kwiat–zapylacz).
- **Radiada adaptacyjna** — szybkie różnicowanie z jednego przodka (zięby Darwina).
- **Konwergencja** — niezależne powstawanie podobnych cech (wilk workowaty i wilk).
- **Zegar molekularny** — tempo zmian DNA jako miara czasu dywergencji.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Ewolucja = postęp | dostosowanie do warunków | brak „celu" |
| Człowiek od małpy | wspólny przodek | nie „od", ale „razem z" |
| Teoria bez dowodów | liczne dowody | nauka opiera się na danych |
| Analogiczne = homologiczne | różne pochodzenie vs wspólny plan | różne kategorie |

### Klinika 2.0

**Błąd 1:** „Człowiek pochodzi od małpy."

- **Znajdź:** Nieprecyzyjne sformułowanie.
- **Popraw:** Człowiek i małpy mają wspólnego przodka.
- **Reguła:** Wspólne pochodzenie, nie liniowa zależność.
- **Dlaczego:** Ewolucja to rozgałęzienia, nie drabina.
- **Podobne:** Ptaki i dinozaury — wspólny przodek.
- **Pułapka:** Współczesne małpy też ewoluowały.

**Błąd 2:** „Ewolucja = postęp."

- **Znajdź:** Błędne założenie celu.
- **Popraw:** Ewolucja = dostosowanie do warunków, bez celu.
- **Reguła:** Ewolucja nie dąży do „doskonałości".
- **Dlaczego:** Środowisko się zmienia, a cechy są względne.
- **Podobne:** Bakterie oporne na antybiotyk — nie „lepsze", ale dostosowane.
- **Pułapka:** „Ewolucja prowadzi do człowieka" — nie.

**Błąd 3:** „Skrzydło ptaka i owada to homologia."

- **Znajdź:** Mylenie homologii z analogią.
- **Popraw:** To analogia (ta sama funkcja — latanie; różne pochodzenie).
- **Reguła:** Homologia = wspólny plan; analogia = wspólna funkcja.
- **Dlaczego:** Ptaki i owady nie mają wspólnego przodka ze skrzydłami.
- **Podobne:** Oko ssaka i ośmiornicy — analogia.
- **Pułapka:** Podobieństwo funkcji ≠ pokrewieństwo.

**Błąd 4:** „Teoria ewolucji to tylko teoria."

- **Znajdź:** Mylenie znaczeń słowa „teoria".
- **Popraw:** W nauce „teoria" to dobrze uzasadnione wyjaśnienie z licznymi dowodami.
- **Reguła:** Teoria naukowa ≠ domysł.
- **Dlaczego:** Ewolucja ma dowody z wielu dziedzin (skamieniałości, genetyka, biochemia).
- **Podobne:** Teoria grawitacji, teoria atomowa.
- **Pułapka:** „Tylko teoria" = potoczne, nie naukowe.

---

## 10. Obserwacja / model

**Typ:** model / obserwacja porównawcza.

```text
Problem: Czy kończyny człowieka, wieloryba i nietoperza mają wspólny plan?
Hipoteza: Tak — są homologiczne.
Obserwacja: Ten sam układ kości, różne funkcje.
Wniosek: Wspólne pochodzenie.
Ograniczenia: same kości nie pokazują sekwencji DNA.
BHP: brak.
```

Odwołanie: `[BIO: DIAGRAM type=MAP variant=HOMOLOGY]`

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check

1. Co to ewolucja?
2. Podaj 3 dowody ewolucji.
3. Co to narządy homologiczne?
4. Co to narządy analogiczne?
5. Co to relikt?

### 11B. Ćwiczenie prowadzone

**Dane:** Kończyna człowieka i wieloryba.
**Analiza:** Ten sam plan budowy → homologiczne.
**Wniosek:** Wspólne pochodzenie.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. Zdefiniuj ewolucję.
2. 3 dowody.
3. Homologiczne?
4. Analogiczne?
5. Relikt?

**B. Trening**
6. Przykład homologu i analogu.
7. Dlaczego relikty to dowód?
8. Popraw: „Ewolucja = postęp".

**C. Ambitne**
9. Skamieniałości jako dowód?
10. Biogeografia?
11. Homologia ≠ analogia.

**D. Zaawansowane**
12. Koewolucja?
13. Radiada adaptacyjna?
14. Konwergencja?
15. PROBLEM: Czy skrzydło ptaka i nietoperza to homologia czy analogia?

### 11D. PROBLEM / THINK

Wybierz dwa organizmy i uzasadnij, czy mają narządy homologiczne, czy analogiczne.

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Zdefiniuj ewolucję. |
| ZASTOSUJ | Podaj 3 dowody. |
| WYJAŚNIJ | Dlaczego homologia to dowód? |
| ODKRYJ | Co to relikt? |
| POŁĄCZ | Połącz ewolucję z genetyką. |
| ZAKWESTIONUJ | Czy ewolucja = postęp? |

---

## 12. Odpowiedzi i sposób oceniania

1. Zmiany cech z pokolenia na pokolenie.
2. Skamieniałości, homologiczne, relikty.
3. Ten sam plan, różne funkcje.
4. Różne pochodzenie, ta sama funkcja.
5. Kończyna człowieka/wieloryba; skrzydło ptaka/owada.
6. Pozostałości po funkcjach przodków.
7. Ewolucja = dostosowanie.
8. Organizmy kopalne, ogniwa.
9. Rozmieszczenie odpowiada historii kontynentów.
10. Homologia — wspólny plan.
11. Szybkie różnicowanie z jednego przodka.
12. Niezależne powstawanie podobnych cech.
13. Wzajemne przystosowania gatunków.
14. Skrzydło ptaka i nietoperza — homologiczne (ten sam plan); ptaka i owada — analogiczne.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Ewolucja | Zmiany cech z pokolenia na pokolenie |
| Dowody | Skamieniałości, homologia, relikty |
| Homologiczne | Ten sam plan |
| Analogiczne | Ta sama funkcja, różne pochodzenie |
| Relikt | Pozostałość po funkcji przodka |
| Wspólne pochodzenie | Wspólni przodkowie |

---

## 14. Test końcowy  · **[TRENING]**

1. (P) Co to ewolucja?
2. (P) 3 dowody?
3. (P) Homologiczne?
4. (T) Skrzydło ptaka i owada?
5. (T) Popraw: „Ewolucja = postęp".
6. (A) Dlaczego homologia to dowód?
7. (A) Biogeografia?
8. (Z) Homologia vs analogia.

---

## 15. Checklista

- [ ] Znam definicję ewolucji.
- [ ] Wymieniam dowody.
- [ ] Odróżniam homologiczne od analogicznych.
- [ ] Rozumiem ideę wspólnego pochodzenia.
- [ ] Znam relikty (ambitny).

---

## 16. Mapa pojęć

```text
EWOLUCJA
├── definicja
├── dowody: skamieniałości, homologia, analogia, relikty
├── biogeografia, embriologia, biochemia
└── wspólne pochodzenie
```

---

## 17. Co dalej?

L031 — dobór naturalny i sztuczny.

**Most wstecz:** L015 (zmienność) + L020 (mutacje) → L030 (ewolucja).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Ewolucja | Zmiany cech z pokolenia na pokolenie |
| Skamieniałość | Szczątki organizmu z przeszłości |
| Homologiczny | Wspólny plan, różne funkcje |
| Analogiczny | Różne pochodzenie, ta sama funkcja |
| Relikt | Pozostałość po funkcji przodka |
| Wspólne pochodzenie | Wspólni przodkowie |

---

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**

Koewolucja · radiada adaptacyjna · konwergencja · zegar molekularny.

---

## 20. Jak się uczyć?

Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

Geografia (biogeografia) · Historia (myśl ewolucyjna) · Biologia (genetyka, ekologia).

---

## 22. Zadania z życia codziennego

1. Dlaczego zwierzęta na wyspach są podobne do siebie?
2. Dlaczego bakterie uodparniają się na antybiotyki?
3. Co to „ogniwo pośrednie"?

---

## 23. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — rozbudowa do standardu L011–L020.
- Zachowano całą treść v3.7.
- Dodano: Mapa lekcji, Klinika 2.0 (4 przykłady), Drabinka trudności, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego", STATUS.

---

**Koniec L030 MASTER v4.0**


---

## 24. UZUPEŁNIENIE egzaminacyjne v4.0+ (doklejone)

Dowody ewolucji — hasła, które trzeba umieć nazwać i podać przykład.

### Ściąga
- Skamieniałości: organizmy z przeszłości w skałach; kolejność warstw ≠ „wszystko na raz”.
- Homologiczne: wspólny plan budowy, różna funkcja (kończyna pentadaktylna — hasło szkolne).
- Analogiczne: podobna funkcja, inny plan (skrzydło owada vs ptaka) — **nie** dowód bliskiego pokrewieństwa.
- Szczątkowe: zachowane, bez pełnej funkcji (np. kość ogonowa — hasło).
- Podobieństwo molekularne: im bliższe DNA/białka, tym zwykle bliższe pokrewieństwo (uproszczenie).
- Ewolucja ≠ historia jednej żyrafy; dotyczy populacji i czasu geologicznego.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Homologia = analogia | funkcja vs pochodzenie planu |
| Brak skamieniałości X = falsyfikacja całości | zapis niekompletny |
| „To tylko teoria” | teoria naukowa ma dowody i przewidywania |

### 5 zadań extra
1. Para homologiczna vs analogiczna — po jednym przykładzie.  
2. Co pokazuje skamieniałość, a czego nie (daty bezwzględnej bez metody)?  
3. Narząd szczątkowy: po co jest w argumentacji?  
4. DNA podobne u człowieka i szympansa — jaki typ dowodu?  
5. Jednym zdaniem: dlaczego ewolucja nie potrzebuje „kompletnego albumu” każdej formy.

Szkic: 3 ślad historii budowy. 4 molekularny. 5 przewidywania i zbieżność niezależnych linii dowodów.

### Status doklejki
2026-09-12 · wcześniejsze sekcje bez zmian.


## 23. UZUPEŁNIENIE AUDYTOWE v4.2 — jak dobierać dowód do wniosku

### 23.1. Nie każdy dowód odpowiada na to samo pytanie
| Dowód | Co przede wszystkim pokazuje? |
|---|---|
| skamieniałości | historię życia i zmiany w czasie |
| homologie | podobieństwo planu budowy i wspólne pochodzenie |
| analogie | niezależne powstawanie podobnych funkcji |
| biogeografia | związek rozmieszczenia organizmów z ich historią |
| dane molekularne | podobieństwo DNA/białek i pokrewieństwo |
| embriologia porównawcza | podobieństwa rozwojowe |

### 23.2. Korekta ważnego uproszczenia: homologia
**Homologiczne struktury** mają wspólne pochodzenie, ale ich funkcje mogą być:
- różne,
- podobne,
- albo częściowo nakładające się.

Dlatego reguła „homologiczne = różne funkcje” jest zbyt wąska.

Lepsza reguła:
> **Homologia = wspólne pochodzenie / wspólny plan budowy; funkcja może się różnić.**

### 23.3. Przykład porównawczy
**Kończyna przednia człowieka i skrzydło nietoperza**
- wspólny plan budowy kończyny kręgowca,
- wspólne pochodzenie struktur,
- różne przystosowania i funkcje szczegółowe.

**Skrzydło ptaka i skrzydło owada**
- podobna funkcja: lot,
- inna budowa i pochodzenie,
- dlatego są analogiczne jako narządy lotu.

### 23.4. „Dowód” nie znaczy „jeden eksperyment rozstrzyga wszystko”
W biologii ewolucyjnej siła wniosku wynika z **zgodności wielu niezależnych linii danych**.

<!-- ==================== END L030 ==================== -->


<!-- ==================== BEGIN L031 ==================== -->

# L031 — Jak działa dobór naturalny i czym różni się od sztucznego?

## KARTA LEKCJI L031

- Numer: L031
- Tytuł roboczy: Dobór naturalny
- Dział: Ewolucja
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L030 · Następna: L032
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Dobór.

`[BIO: DIAGRAM type=FLOW]`
`zmienność → różny sukces rozrodczy → zmiana częstości cech`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** środowisko nie „wybiera” świadomie.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Ewolucja  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L030  
**Następna lekcja:** L032

---

### Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L015, L020, L030) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 (ćwiczenia, test) |
| **[MASTER]** | pkt 7 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

---

## 1. Pytanie przewodnie

Jak działa dobór naturalny i czym różni się od sztucznego?

---

## 2. Cele lekcji

Po lekcji uczeń:

- wyjaśnia mechanizm doboru naturalnego,
- podaje warunki doboru,
- odróżnia dobór naturalny od sztucznego,
- (ambitny) rozumie, że dobór nie tworzy cech — wybiera z istniejącej zmienności,
- (zaawansowany) zna typy doboru i dryf genetyczny.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| dobór = środowisko wybiera | definicja |
| warunki: zmienność, dziedziczenie, zasoby, rozród | mechanizm |
| antybiotykooporność | klasyczny przykład |
| dobór naturalny vs sztuczny | rozróżnienie |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**

- L015 (zmienność),
- L020 (mutacje),
- L030 (ewolucja).

---

## 4. Zacznij od problemu

Dlaczego po antybiotyku niektóre bakterie przeżywają?  
Dlaczego ludzie hodują rasy psów o różnych cechach?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Dobór naturalny** — mechanizm, w którym lepiej dostosowane osobniki mają większą szansę przeżycia i rozrodu.

**Warunki doboru:**
1. Zmienność w populacji.
2. Dziedziczenie cech.
3. Ograniczone zasoby (walka o byt).
4. Różny sukces rozrodczy.

**Dobór sztuczny** — człowiek wybiera, które osobniki się rozmnażają.

| | Naturalny | Sztuczny |
|---|-----------|----------|
| Kto wybiera | środowisko | człowiek |
| Cel | dostosowanie | cecha użytkowa |
| Przykład | antybiotykooporność | rasy psów |
| Tempo | wolne | szybkie |

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Środowisko wybiera** | dobór naturalny |
| 2 | **Człowiek wybiera** | dobór sztuczny |
| 3 | **Zmienność + dziedziczenie + zasoby + rozród** | warunki |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)  · **[PODSTAWA E8]**

**Dobór naturalny** to mechanizm ewolucji, w którym osobniki lepiej przystosowane do środowiska mają większą szansę przeżycia i pozostawienia potomstwa. Cechy korzystne rozprzestrzeniają się w populacji.

**Warunki działania doboru:**
1. **Zmienność** — osobniki różnią się cechami.
2. **Dziedziczenie** — cechy są przekazywane potomstwu.
3. **Ograniczone zasoby** — nie wszystkie osobniki przeżywają.
4. **Różny rozród** — niektóre osobniki mają więcej potomstwa.

**Dobór sztuczny** — człowiek świadomie wybiera osobniki do rozrodu, aby uzyskać pożądane cechy. Przykłady: rasy psów, odmiany roślin uprawnych.

### 6A. Dlaczego?

1. **Dlaczego bez zmienności nie ma doboru?** Bo nie ma z czego wybierać.

2. **Dlaczego bez dziedziczenia nie ma ewolucji?** Bo cechy nie przechodzą na potomstwo.

3. **Dlaczego bakterie przeżywają antybiotyk?** Bo niektóre już mają oporność (mutacja).

4. **Dlaczego „najsilniejszy" to złe określenie?** Bo liczy się **dostosowanie**, nie siła.

### 6B. Krok po kroku — jak działa dobór naturalny

1. W populacji istnieje zmienność (mutacje, rekombinacja).
2. Środowisko faworyzuje niektóre cechy.
3. Osobniki z korzystnymi cechami mają więcej potomstwa.
4. Cechy rozprzestrzeniają się w populacji.
5. Po wielu pokoleniach populacja się zmienia.

### 6C. Przykład prowadzony

**Dane:** Bakterie + antybiotyk.

**Obserwacja:** Większość bakterii ginie, ale niektóre przeżywają.

**Wniosek:** Przeżywają te, które miały oporność (już przed antybiotykiem). Antybiotyk nie tworzy oporności — wybiera już istniejącą.

**Ważne:** Bakterie **nie uczą się** oporności — przeżywają te, które już ją miały.

### 6D. Powiązanie z innymi lekcjami

```text
L015 (zmienność) → L020 (mutacje) → L030 (ewolucja) → L031 (dobór)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- Dobór **nie tworzy** cech — wybiera z istniejącej zmienności.
- Antybiotykooporność: przeżywają te, które już mają oporność.
- Cecha korzystna w jednym środowisku może być szkodliwa w innym.
- Ewolucja nie dąży do „doskonałości".

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

> **Zaawansowane.**

- **Typy doboru:** kierunkowy, stabilizujący, rozrywający.
- **Dryf genetyczny** — losowa zmiana częstości alleli w małej populacji.
- **Efekt wąskiego gardła** — drastyczne zmniejszenie populacji → utrata zmienności.
- **Dobór płciowy** — preferencje partnerów wpływają na cechy.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Ewolucja = postęp | dostosowanie | brak „celu" |
| Bakterie uczą się oporności | przeżywają już oporne | dobór nie tworzy cech |
| Naturalny = sztuczny | różny czynnik | środowisko vs człowiek |
| Najsilniejszy przeżywa | lepiej dostosowany | nie siła, ale dostosowanie |

### Klinika 2.0

**Błąd 1:** „Bakterie uczą się oporności na antybiotyk."

- **Znajdź:** Mylenie doboru z uczeniem się.
- **Popraw:** Przeżywają te, które już miały oporność.
- **Reguła:** Dobór wybiera z istniejącej zmienności.
- **Dlaczego:** Mutacje powstają losowo; antybiotyk eliminuje wrażliwe.
- **Podobne:** Owady uodparniają się na pestycydy.
- **Pułapka:** Bakterie nie „chcą" przeżyć — po prostu te z opornością przeżywają.

**Błąd 2:** „Najsilniejszy przeżywa."

- **Znajdź:** Błędne uproszczenie.
- **Popraw:** Przeżywa lepiej **dostosowany** do środowiska.
- **Reguła:** Dostosowanie ≠ siła.
- **Dlaczego:** W danym środowisku liczy się dopasowanie, nie siła.
- **Podobne:** Małe ptaki mogą być lepiej dostosowane niż duże.
- **Pułapka:** „Survival of the fittest" ≠ „przetrwanie najsilniejszego".

**Błąd 3:** „Dobór naturalny tworzy nowe cechy."

- **Znajdź:** Błędna rola doboru.
- **Popraw:** Dobór **wybiera** z już istniejącej zmienności; nowe cechy tworzą mutacje.
- **Reguła:** Mutacje → zmienność; dobór → selekcja.
- **Dlaczego:** Dobór nie generuje cech, tylko je filtruje.
- **Podobne:** Hodowla — człowiek też wybiera, nie tworzy.
- **Pułapka:** „Dobór tworzy" — nie, dobór wybiera.

**Błąd 4:** „Cecha korzystna w jednym środowisku zawsze jest korzystna."

- **Znajdź:** Uogólnienie.
- **Popraw:** Cecha korzystna w jednym środowisku może być szkodliwa w innym.
- **Reguła:** Dostosowanie jest względne, zależne od środowiska.
- **Dlaczego:** Środowisko się zmienia; to, co pomaga dziś, może szkodzić jutro.
- **Podobne:** Ciemna barwa ćmy — dobra na ciemnych drzewach, zła na jasnych.
- **Pułapka:** „Zawsze korzystna" — nie.

---

## 10. Obserwacja / model

**Typ:** symulacja / model.

```text
Problem: Jak dobór działa na populację?
Hipoteza: Osobniki lepiej widoczne są szybciej eliminowane.
Materiał: koraliki w różnych kolorach + różne tła.
Obserwacja: Na tle zielonym zielone koraliki trudniej zauważyć.
Wniosek: Osobniki lepiej dopasowane do tła mają większą szansę przeżycia.
Ograniczenia: model nie pokazuje dziedziczenia.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check

1. Co to dobór naturalny?
2. Podaj 3 warunki doboru.
3. Co to dobór sztuczny?
4. Podaj przykład doboru naturalnego.
5. Podaj przykład doboru sztucznego.

### 11B. Ćwiczenie prowadzone

**Dane:** Populacja motyli — jasne i ciemne. Środowisko: ciemne drzewa (sadza).
**Analiza:** Ciemne motyle trudniej zauważyć → więcej przeżywa.
**Wniosek:** Środowisko faworyzuje ciemne.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. Zdefiniuj dobór.
2. 3 warunki.
3. Sztuczny?
4. Po 1 przykładzie.

**B. Trening**
5. Antybiotykooporność?
6. Popraw: „Bakterie uczą się".
7. Różnica naturalny/sztuczny?

**C. Ambitne**
8. Dlaczego „najsilniejszy" to złe?
9. Cecha korzystna w jednym środowisku szkodliwa w innym?
10. Dlaczego dobór nie tworzy cech?

**D. Zaawansowane**
11. Typy doboru.
12. Dryf genetyczny.
13. PROBLEM: Dlaczego w małej populacji dryf jest silniejszy?

### 11D. PROBLEM / THINK

Dlaczego antybiotykooporność to przykład doboru naturalnego? Uzasadnij mechanizmem.

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to dobór naturalny? |
| ZASTOSUJ | Podaj przykład. |
| WYJAŚNIJ | Dlaczego bakterie przeżywają? |
| ODKRYJ | Kto wybiera w sztucznym? |
| POŁĄCZ | Połącz dobór z genetyką. |
| ZAKWESTIONUJ | Czy najsilniejszy zawsze przeżywa? |

---

## 12. Odpowiedzi i sposób oceniania

1. Lepiej dostosowani mają większą szansę przeżycia i rozrodu.
2. Zmienność, dziedziczenie, zasoby, rozród.
3. Człowiek wybiera.
4. Antybiotykooporność.
5. Rasy psów.
6. Antybiotyk eliminuje wrażliwe.
7. Nie uczą się — przeżywają oporne.
8. Środowisko vs człowiek.
9. Liczy się dostosowanie, nie siła.
10. Cecha korzystna gdzie indziej szkodliwa.
11. Bo dobór wybiera z istniejącej zmienności.
12. Opis w dodatku.
13. Losowa zmiana alleli w małej populacji.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Dobór naturalny | Środowisko wybiera |
| Dobór sztuczny | Człowiek wybiera |
| Warunki | Zmienność, dziedziczenie, zasoby, rozród |
| Antybiotykooporność | Przeżywają już oporne |
| „Najsilniejszy"? | Nie — lepiej dostosowany |

---

## 14. Test końcowy  · **[TRENING]**

1. (P) Co to dobór naturalny?
2. (P) 3 warunki?
3. (P) Dobór sztuczny?
4. (T) Antybiotykooporność?
5. (T) Popraw: „Bakterie uczą się".
6. (A) Dlaczego „najsilniejszy" to złe?
7. (A) Cecha korzystna gdzie indziej szkodliwa?
8. (Z) Typy doboru.

---

## 15. Checklista

- [ ] Rozumiem mechanizm doboru naturalnego.
- [ ] Znam warunki doboru.
- [ ] Odróżniam dobór naturalny od sztucznego.
- [ ] Rozumiem antybiotykooporność jako dobór.
- [ ] Znam ideę dryfu (ambitny).

---

## 16. Mapa pojęć

```text
DOBÓR
├── naturalny: środowisko
├── sztuczny: człowiek
├── warunki: zmienność, dziedziczenie, zasoby, rozród
└── przykład: antybiotykooporność
```

---

## 17. Co dalej?

L032 — powtórka ewolucji.

**Most wstecz:** L030 (ewolucja) + L015/L020 (genetyka) → L031 (dobór).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Dobór naturalny | Środowisko wybiera lepiej dostosowane |
| Dobór sztuczny | Człowiek wybiera osobniki do rozrodu |
| Walka o byt | Konkurencja o ograniczone zasoby |
| Dostosowanie | Dopasowanie do środowiska |
| Dryf genetyczny | Losowa zmiana alleli w małej populacji |

---

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**

Typy doboru · dryf · efekt wąskiego gardła · dobór płciowy.

---

## 20. Jak się uczyć?

Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

Biologia (genetyka, ekologia) · Medycyna (antybiotykooporność) · Rolnictwo (hodowla).

---

## 22. Zadania z życia codziennego

1. Dlaczego antybiotyki przestają działać?
2. Dlaczego rasy psów tak się różnią?
3. Czy człowiek ewoluuje?

---

## 23. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — rozbudowa do standardu L011–L020.
- Zachowano całą treść v3.7.
- Dodano: Mapa lekcji, Klinika 2.0 (4 przykłady), Drabinka trudności, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego", STATUS.

---

**Koniec L031 MASTER v4.0**


---

## 24. UZUPEŁNIENIE egzaminacyjne v4.0+ (doklejone)

Dobór — mechanizm, nie slogan.

### Ściąga
Warunki szkolne doboru naturalnego:
1. Zmienność osobników.
2. Nadmiar potomstwa / ograniczające zasoby.
3. Nie wszyscy zostawiają tyle samo potomstwa.
4. Cechy dziedziczne — te korzystne w **danym** środowisku częściej zostają.

Dobór sztuczny: kryterium ustala człowiek (plon, wygląd, mleczność).

Stabilizujący / kierunkowy / rozrywający — tylko hasła extra, jeśli są w lekcji; na E8 wystarczy naturalny vs sztuczny + przykład.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Osobnik „chce” się dostosować i zmienia ciało za życia, potem przekazuje wysiłek | to nie model Darwina |
| Dobór = walka na pięści | bywa unikanie drapieżnika, odporność, płodność |
| Sztuczny dobór jest „nienaturalny więc nieuczony” | jest w podstawie jako kontrast |

### 5 zadań extra
1. Wypisz 3 warunki doboru naturalnego.  
2. Owce hodowlane — który dobór?  
3. Bakterie i antybiotyk — szkic argumentu (zmienność + presja).  
4. Dlaczego cecha korzystna na pustyni może być zbędna w lesie?  
5. Most do L020: skąd się bierze nowa zmienność?

Szkic: 2 sztuczny. 3 część komórek już odporna przeżywa. 4 środowisko ustala „korzystne”. 5 mutacje + rekombinacja (mejoza L015).

### Status doklejki
2026-09-12 · wcześniejsze sekcje bez zmian.


## 23. UZUPEŁNIENIE AUDYTOWE v4.2 — zmienność → dobór → zmiana populacji

### 23.1. Najważniejszy łańcuch
`zmienność → dziedziczenie → różny sukces rozrodczy → zmiana częstości cech/alleli w populacji`

To populacja **ewoluuje**. Nie mówimy, że pojedynczy organizm „ewoluuje”, ponieważ w trakcie własnego życia nie zmienia swojej puli alleli przez dobór naturalny.

### 23.2. Mutacja a dobór — nie zamieniaj ról
- **Mutacje** mogą tworzyć nowe allele.
- **Rekombinacja** tworzy nowe kombinacje istniejących alleli.
- **Dobór naturalny** zmienia częstości wariantów, ponieważ niektóre warianty zwiększają sukces rozrodczy w określonym środowisku.

Dlatego zdanie:
> „Dobór naturalny tworzy nowe cechy"

jest zbyt uproszczone.

### 23.3. Przykład z antybiotykiem — model
Przed zastosowaniem antybiotyku w populacji mogą istnieć bakterie o różnej wrażliwości.

`zmienność → antybiotyk → większe przeżycie opornych → rozmnażanie → większy udział oporności`

**Nie:** antybiotyk „uczy” bakterie odporności.

### 23.4. Dobór nie działa „na zawsze”
Cecha korzystna w jednym środowisku może być mniej korzystna w innym. Dostosowanie jest **zależne od warunków i kosztów**.

### 23.5. Mini-zadanie
**Pytanie:** Dlaczego zmiana częstości alleli jest lepszym wskaźnikiem ewolucji niż stwierdzenie „osobniki stały się lepsze”?

**Odpowiedź:** Ewolucja dotyczy zmian dziedzicznych w populacjach na przestrzeni pokoleń, a nie świadomego doskonalenia pojedynczych osobników.

<!-- ==================== END L031 ==================== -->


<!-- ==================== BEGIN L032 ==================== -->

# L032 — Powtórka ewolucji

## KARTA LEKCJI L032

- Numer: L032
- Tytuł roboczy: Powtórka ewolucji
- Dział: Ewolucja
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L030–L031 · Następna: L040
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Powtórka ewolucji.

`[BIO: DIAGRAM type=FLOW]`
`dane → mechanizm → wniosek`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** odtwarzanie i uzasadnianie.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Powtórka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Poprzednia lekcja:** L031  
**Następna lekcja:** L040

---

## 1. Pytanie przewodnie

Co już wiem o ewolucji i jak to połączyć z genetyką?

---

## 2. Cele lekcji

Po lekcji uczeń:

- powtarza blok ewolucji (L030–L031),
- łączy ewolucję z genetyką (mutacje → zmienność → dobór),
- (ambitny) rozumie mechanizmy doboru,
- (zaawansowany) rozwiązuje zadania problemowe.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| dowody ewolucji | podstawa |
| dobór naturalny = środowisko wybiera | mechanizm |
| homologiczne vs analogiczne | kluczowe rozróżnienie |
| zmienność + mutacje | łączenie z genetyką |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

Z L030:
- Definicja ewolucji
- Dowody (skamieniałości, homologia, analogia, relikty, biogeografia, embriologia, biochemia)
- Wspólne pochodzenie

Z L031:
- Dobór naturalny (warunki: zmienność, dziedziczenie, zasoby, rozród)
- Dobór sztuczny
- Antybiotykooporność

Z genetyki (L011–L021):
- Mutacje → zmienność
- Mejoza → zmienność rekombinacyjna
- Dziedziczenie → przekazywanie cech

---

## 4. Mapa przekrojowa

```text
EWOLUCJA
├── definicja (zmiany z pokolenia na pokolenie)
├── dowody
│   ├── skamieniałości
│   ├── homologiczne (wspólny plan)
│   ├── analogiczne (ta sama funkcja)
│   ├── relikty
│   ├── biogeografia
│   ├── embriologia
│   └── biochemia
├── dobór naturalny
│   ├── warunki: zmienność, dziedziczenie, zasoby, rozród
│   └── przykład: antybiotykooporność
├── dobór sztuczny
│   └── przykład: rasy psów, odmiany roślin
└── most do genetyki
    ├── mutacje → zmienność
    ├── mejoza → zmienność rekombinacyjna
    └── dziedziczenie → przekazywanie cech
```

---

## 5. Interleaving — zestawy mieszane

### Zestaw A — Podstawa

1. Co to ewolucja?
2. Podaj 3 dowody ewolucji.
3. Co to narządy homologiczne?
4. Co to narządy analogiczne?
5. Podaj warunki doboru naturalnego.
6. Podaj przykład doboru naturalnego.
7. Podaj przykład doboru sztucznego.
8. Co to relikt?

### Zestaw B — Trening (łączenie)

9. Dlaczego antybiotykooporność to przykład doboru naturalnego?
10. Dlaczego skrzydło ptaka i owada to analogia?
11. Jak mutacje wpływają na ewolucję?
12. Dlaczego „najsilniejszy" to złe określenie w kontekście doboru?
13. Dlaczego „człowiek pochodzi od małpy" jest nieprecyzyjne?
14. Jak mejoza wpływa na zmienność?

### Zestaw C — Ambitne (synteza)

15. Porównaj dobór naturalny i sztuczny (3 różnice).
16. Dlaczego dobór nie tworzy cech?
17. Cecha korzystna w jednym środowisku może być szkodliwa w innym — podaj przykład.
18. Jak zmienność genetyczna wpływa na ewolucję populacji w zmieniającym się środowisku?

### Zestaw D — Zaawansowane (problem otwarty)

19. Typy doboru: kierunkowy, stabilizujący, rozrywający — podaj przykłady.
20. Dryf genetyczny — kiedy działa najsilniej?
21. Czy ewolucja ma cel? Uzasadnij.
22. Jak działalność człowieka wpływa na dobór naturalny?

---

## 6. Test przekrojowy

### A. Podstawa

1. Co to ewolucja?  
2. 3 dowody ewolucji?  
3. Homologiczne vs analogiczne?  
4. Warunki doboru?  
5. Przykład doboru naturalnego?  
6. Przykład doboru sztucznego?  
7. Co to relikt?  
8. Co to wspólne pochodzenie?

### B. Trening

9. Dlaczego antybiotykooporność to dobór?  
10. Popraw: „Ewolucja = postęp".  
11. Dlaczego „najsilniejszy" mylące?  
12. Jak mutacje wpływają na ewolucję?

### C. Ambitne

13. Homologia vs analogia — 2 przykłady każdej.  
14. Dlaczego dobór nie tworzy cech?  
15. Dlaczego relikty są dowodem?  
16. Porównaj dobór naturalny i sztuczny.

### D. Zaawansowane

17. Typy doboru.  
18. Dryf genetyczny.  
19. Radiada adaptacyjna.  
20. Konwergencja.

---

## 7. Odpowiedzi

### A

1. Zmiany cech z pokolenia na pokolenie.  
2. Skamieniałości, homologiczne, relikty.  
3. Homologiczne: wspólny plan, różne funkcje. Analogiczne: różne pochodzenie, ta sama funkcja.  
4. Zmienność, dziedziczenie, ograniczone zasoby, różny rozród.  
5. Antybiotykooporność.  
6. Rasy psów.  
7. Pozostałość po funkcji przodka.  
8. Wspólni przodkowie.

### B

9. Antybiotyk eliminuje wrażliwe bakterie; przeżywają oporne.  
10. Ewolucja = dostosowanie, nie postęp.  
11. Liczy się dostosowanie, nie siła.  
12. Mutacje → nowe allele → materiał dla doboru.

### C

13. Homologiczne: kończyna człowieka i wieloryba; skrzydło ptaka i nietoperza. Analogiczne: skrzydło ptaka i owada; oko ssaka i ośmiornicy.  
14. Bo wybiera z istniejącej zmienności.  
15. Pokazują pozostałości po funkcjach przodków.  
16. Naturalny — środowisko; sztuczny — człowiek. Naturalny — wolno; sztuczny — szybko.

### D

17. Kierunkowy, stabilizujący, rozrywający.  
18. Losowa zmiana częstości alleli w małej populacji.  
19. Szybkie różnicowanie z jednego przodka (zięby Darwina).  
20. Niezależne powstawanie podobnych cech (wilk workowaty i wilk).

---

## 8. Klinika 2.0 — przekrojowa

**Błąd 1:** „Ewolucja = postęp."

- **Znajdź:** Błędne założenie celu.
- **Popraw:** Ewolucja = dostosowanie do warunków, bez celu.
- **Reguła:** Ewolucja nie dąży do „doskonałości".
- **Dlaczego:** Środowisko się zmienia, a cechy są względne.
- **Podobne:** Bakterie oporne na antybiotyk — nie „lepsze", ale dostosowane.
- **Pułapka:** „Ewolucja prowadzi do człowieka" — nie.

**Błąd 2:** „Człowiek pochodzi od małpy."

- **Znajdź:** Nieprecyzyjne.
- **Popraw:** Człowiek i małpy mają wspólnego przodka.
- **Reguła:** Wspólne pochodzenie, nie liniowa zależność.
- **Dlaczego:** Ewolucja to rozgałęzienia, nie drabina.
- **Podobne:** Ptaki i dinozaury — wspólny przodek.
- **Pułapka:** Współczesne małpy też ewoluowały.

**Błąd 3:** „Bakterie uczą się oporności."

- **Znajdź:** Mylenie doboru z uczeniem się.
- **Popraw:** Przeżywają te, które już miały oporność.
- **Reguła:** Dobór wybiera z istniejącej zmienności.
- **Dlaczego:** Mutacje powstają losowo; antybiotyk eliminuje wrażliwe.
- **Podobne:** Owady uodparniają się na pestycydy.
- **Pułapka:** Bakterie nie „chcą" przeżyć — po prostu te z opornością przeżywają.

**Błąd 4:** „Dobór naturalny = dobór sztuczny."

- **Znajdź:** Brak rozróżnienia.
- **Popraw:** Naturalny — środowisko; sztuczny — człowiek.
- **Reguła:** Różny czynnik wybierający.
- **Dlaczego:** Naturalny — wolny; sztuczny — szybki.
- **Podobne:** Antybiotykooporność vs rasy psów.
- **Pułapka:** „Człowiek też jest środowiskiem" — tak, ale w sztucznym wybieramy my.

---

## 9. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Zdefiniuj ewolucję. |
| ZASTOSUJ | Podaj 3 dowody. |
| WYJAŚNIJ | Dlaczego skrzydło ptaka/owada to analogia? |
| ODKRYJ | Jakie warunki doboru? |
| POŁĄCZ | Połącz dobór z genetyką. |
| ZAKWESTIONUJ | Czy ewolucja = postęp? |

---

## 10. Jak się uczyć — powtórka ewolucji

1. **Mapa (5 min):** narysuj mapę ewolucji.
2. **Fiszki (10 min):** interleaving z L030–L031 + genetyka.
3. **Mini-check (5 min):** sekcja 5A.
4. **Ćwiczenia (15 min):** sekcja 5B/C.
5. **Test przekrojowy (15 min):** sekcja 6.
6. **Powtórka błędów (10 min):** wróć do lekcji, których dotyczą błędy.

**Zasada 3 pytań po powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 11. Zadania z życia codziennego

1. Dlaczego gatunki wymierają?
2. Jak działa dobór w hodowli?
3. Czy człowiek wpływa na ewolucję?
4. Dlaczego antybiotyki przestają działać?
5. Dlaczego rasy psów tak się różnią?

---

## 12. Słownik przekrojowy

| Termin | Definicja |
|--------|-----------|
| Ewolucja | Zmiany cech z pokolenia na pokolenie |
| Skamieniałość | Szczątki organizmu z przeszłości |
| Narząd homologiczny | Wspólny plan, różne funkcje |
| Narząd analogiczny | Różne pochodzenie, ta sama funkcja |
| Relikt | Pozostałość po funkcji przodka |
| Dobór naturalny | Środowisko wybiera lepiej dostosowane |
| Dobór sztuczny | Człowiek wybiera |
| Antybiotykooporność | Przeżywają bakterie z opornością |
| Dryf genetyczny | Losowa zmiana alleli w małej populacji |

---

## 13. Checklista bloku

- [ ] Definicja ewolucji.
- [ ] Dowody (skamieniałości, homologia, analogia, relikty).
- [ ] Homologiczne vs analogiczne.
- [ ] Dobór naturalny — warunki.
- [ ] Dobór sztuczny.
- [ ] Antybiotykooporność.
- [ ] Łączenie z genetyką (mutacje → zmienność → dobór).
- [ ] Wiem, co powtórzyć.

---

## 14. Co dalej?

**L040** — ekologia.

**Most wstecz:** L030–L031 (ewolucja) + L011–L021 (genetyka).

---

## 15. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — przebudowa na powtórkę umiejętności.
- Zachowano całą treść v3.7.
- Dodano: interleaving (4 zestawy), test przekrojowy (A/B/C/D), Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Zadania z życia codziennego", Słownik przekrojowy, Checklista bloku.
- Zamiast streszczenia rozdziałów — zadania mieszane i diagnostyka luk.

---

**Koniec L032 MASTER v4.0**


---

## 16. UZUPEŁNIENIE egzaminacyjne v4.0+ (doklejone — nic nie wycięto)

Blok L030–L031 na jednej stronie.

### Ściąga ewolucji
1. Ewolucja (szkolnie) = zmiana cech populacji w czasie, nie „celowy postęp człowieka”.
2. Dowody: skamieniałości, narządy homologiczne, szczątkowe, podobieństwo DNA/białek (hasła z L030).
3. Dobór naturalny: zmienność + nadmiar potomstwa + różny sukces rozrodczy → zmiana częstości cech.
4. Dobór sztuczny: człowiek wybiera (hodowla) — mechanizm podobny, **kto wybiera** inny.
5. Dobór ≠ „najsilniejszy kulturysta”; często „lepiej dopasowany do warunków”.
6. Mutacje (L020) dostarczają zmienności; ewolucja działa na populację, nie na jedną komórkę w tydzień.

### Pułapki
| Błąd | Popraw |
|------|--------|
| „Ewolucja to teoria, więc wymysł” | teoria naukowa = spójny, testowalny opis |
| Żyrafy wyciągały szyje i przekazały wysiłek | to nie jest dobór naturalny Darwina |
| Dobór sztuczny przeczy ewolucji | pokazuje, że selekcja zmienia populację |
| Skamieniałość musi być „brakującym ogniwem komplet” | zapis kopalny jest dziurawy i mimo to spójny kierunkowo |

### 6 zadań extra
1. Podaj 2 typy dowodów z L030.  
2. Jednym zdaniem: dobór naturalny vs sztuczny.  
3. Dlaczego „przeżywa najsilniejszy” jest złym skrótem?  
4. Połącz mutację (L020) z doborem.  
5. Przykład hodowli = dobór sztuczny.  
6. Czy osobnik „decyduje się wyewoluować”? 

Szkic: 3 liczy się sukces rozrodczy w danym środowisku. 4 mutacja = surowiec zmienności, dobór sortuje. 6 nie — zmienia się populacja przez pokolenia.

### Status doklejki
2026-09-12 · sekcje 1–15 bez zmian.

<!-- ==================== END L032 ==================== -->


<!-- ==================== BEGIN L040 ==================== -->

# L040 — Czym jest ekosystem i jakie czynniki na niego wpływają?

## KARTA LEKCJI L040

- Numer: L040
- Tytuł roboczy: Ekosystem
- Dział: Ekologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L032 · Następna: L041
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Ekosystem.

`[BIO: DIAGRAM type=FLOW]`
`biotop + biocenoza → zależności → przepływ energii/obieg materii`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** elementy są połączone.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Ekologia  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L032  
**Następna lekcja:** L041

---

### Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (klasy 4–7: środowisko, organizm, populacja) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 (ćwiczenia, test) |
| **[MASTER]** | pkt 7 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

### Most z poprzednich lekcji

- **L015 (mejoza):** zmienność rekombinacyjna → różnorodność organizmów w ekosystemie.
- **L020 (mutacje):** mutacje → nowe cechy → materiał dla doboru (L031).
- **L030–L032 (ewolucja):** dobór naturalny → dostosowanie organizmów do środowiska.
- **Z klas 4–7:** organizm, populacja, środowisko.

**Pytanie łączące:** Dlaczego w jednym ekosystemie żyją organizmy o różnych cechach? (Odp.: zmienność genetyczna + dobór + przystosowanie.)

---

## 1. Pytanie przewodnie

Czym jest ekosystem i jakie czynniki kształtują życie?

---

## 2. Cele lekcji

Po lekcji uczeń:

- definiuje ekosystem, biocenozę, biotop,
- rozróżnia czynniki abiotyczne i biotyczne,
- rozróżnia producentów, konsumentów, destruentów,
- (ambitny) rozumie obieg materii zamknięty i przepływ energii otwarty,
- (zaawansowany) zna produkcję pierwotną brutto/netto i sukcesję.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| ekosystem = biocenoza + biotop | definicja |
| abiotyczne vs biotyczne | klasyfikacja |
| producent → konsument → destruent | łańcuch |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**

Z klasy 4–7: środowisko, organizm, populacja.

---

## 4. Zacznij od problemu

Dlaczego w jednym jeziorze żyją inne organizmy niż w drugim?  
Co decyduje o tym, jakie organizmy mogą żyć w danym miejscu?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Ekosystem** = biocenoza + biotop.

- **Biocenoza** — wszystkie organizmy w danym środowisku.
- **Biotop** — środowisko nieożywione (woda, gleba, powietrze).

| Czynnik | Przykłady |
|---------|-----------|
| Abiotyczne (nieożywione) | temperatura, światło, woda, pH, gleba |
| Biotyczne (ożywione) | inne organizmy (konkurencja, drapieżnictwo) |

**Poziomy troficzne:**
- **Producenci** — wytwarzają materię organiczną (rośliny, glony).
- **Konsumenci** — zjadają innych (zwierzęta).
- **Destruenci** — rozkładają martwą materię (bakterie, grzyby).

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Ekosystem = organizmy + środowisko** | biocenoza + biotop |
| 2 | **Abiotyczne = nieożywione** | klasyfikacja |
| 3 | **Biotyczne = ożywione** | klasyfikacja |
| 4 | **P → K → D** | producent → konsument → destruent |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)  · **[PODSTAWA E8]**

**Ekosystem** to układ ekologiczny złożony z **biocenozy** (wszystkich organizmów) i **biotopu** (środowiska nieożywionego).

**Czynniki wpływające na ekosystem:**

1. **Abiotyczne** (nieożywione): temperatura, światło, woda, pH, skład gleby, wilgotność.

2. **Biotyczne** (ożywione): konkurencja, drapieżnictwo, pasożytnictwo, mutualizm.

**Poziomy troficzne:**
- **Producenci** — wytwarzają materię organiczną ze związków nieorganicznych (fotosynteza): rośliny, glony, sinice.
- **Konsumenci** — zjadają innych: konsumenci I rzędu (roślinożercy), II rzędu (drapieżnicy), III rzędu.
- **Destruenci** — rozkładają martwą materię organiczną na nieorganiczną: bakterie, grzyby.

### 6A. Dlaczego?

1. **Dlaczego producenci są ważni?** Bo wprowadzają energię do ekosystemu.

2. **Dlaczego destruenci są ważni?** Bo zamykają obieg materii — bez nich materia organiczna nie wracałaby do obiegu.

3. **Dlaczego energia nie krąży?** Bo na każdym poziomie część jest tracona jako ciepło.

4. **Dlaczego materia krąży?** Bo atomy są wykorzystywane wielokrotnie.

### 6B. Krok po kroku — jak opisać ekosystem

1. Określ biotop (woda, gleba, powietrze).
2. Wymień biocenozę (organizmy).
3. Określ producentów.
4. Określ konsumentów (I, II, III rzędu).
5. Określ destruentów.
6. Opisz przepływ energii i obieg materii.

### 6C. Przykład prowadzony

**Dane:** Łąka.

- Biotop: gleba, powietrze, woda.
- Producenci: trawy, zioła.
- Konsumenci I: króliki, owady.
- Konsumenci II: lisy, ptaki drapieżne.
- Destruenci: bakterie, grzyby.

**Wniosek:** Ekosystem łąki = biocenoza + biotop.

### 6D. Powiązanie z innymi lekcjami

```text
L040 (ekosystem) → L041 (łańcuchy) → L042 (relacje) → L043 (człowiek)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- **Obieg materii** — zamknięty (atomy krążą).
- **Przepływ energii** — otwarty (energia tracona jako ciepło).
- **Piramida troficzna** — zwęża się ku górze.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

> **Zaawansowane.**

- **Produkcja pierwotna brutto** — całkowita produkcja organiczna.
- **Produkcja pierwotna netto** — brutto minus oddychanie.
- **Ekosystemy sztuczne** — pola uprawne, miasta.
- **Sukcesja** — zmiana ekosystemu w czasie (np. jezioro → łąka → las).

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Ekosystem = organizmy | + biotop | ekosystem = biocenoza + biotop |
| Destruenci = pasożyty | rozkładają martwą materię | inna rola |
| Wszystkie zwierzęta = konsumenci I | zależy od pokarmu | poziomy troficzne |
| Energia krąży | energia przepływa | materia krąży |

### Klinika 2.0

**Błąd 1:** „Ekosystem to tylko organizmy."

- **Znajdź:** Brak biotopu.
- **Popraw:** Ekosystem = biocenoza + biotop.
- **Reguła:** Dwa elementy.
- **Dlaczego:** Organizmy zależą od środowiska nieożywionego.
- **Podobne:** Jezioro = ryby + woda + gleba + klimat.
- **Pułapka:** Biotop nie jest „tłem" — jest częścią ekosystemu.

**Błąd 2:** „Energia krąży w ekosystemie."

- **Znajdź:** Mylenie energii z materią.
- **Popraw:** Materia krąży, energia przepływa (jednokierunkowo).
- **Reguła:** Obieg materii ≠ przepływ energii.
- **Dlaczego:** Energia jest tracona jako ciepło na każdym poziomie.
- **Podobne:** Piramida troficzna zwęża się ku górze.
- **Pułapka:** „Energia wraca" — nie.

**Błąd 3:** „Destruenci są na końcu łańcucha pokarmowego."

- **Znajdź:** Mylenie roli.
- **Popraw:** Destruenci są poza łańcuchem — rozkładają materię ze wszystkich poziomów.
- **Reguła:** Łańcuch = producent → konsument → konsument.
- **Dlaczego:** Destruenci nie tworzą ogniwa „zjadanego" przez kogoś.
- **Podobne:** Bakterie i grzyby.
- **Pułapka:** Destruenci zamykają obieg materii, ale nie są ogniwem łańcucha.

**Błąd 4:** „Wszystkie zwierzęta to konsumenci I rzędu."

- **Znajdź:** Brak analizy pokarmu.
- **Popraw:** Poziom troficzny zależy od diety — konsument I, II, III rzędu.
- **Reguła:** Poziom troficzny = pozycja w łańcuchu.
- **Dlaczego:** Drapieżnik to konsument II rzędu (zja

dł roślinożercę).
- **Podobne:** Lis (II), jastrząb (III).
- **Pułapka:** „Zwierzę = konsument I" — nie.

---

## 10. Obserwacja / model

**Typ:** obserwacja terenowa / model.

```text
Problem: Jakie organizmy żyją w ekosystemie łąki?
Hipoteza: Różnorodność zależy od biotopu.
Obserwacja: Spisujemy organizmy, mierzymy temperaturę, wilgotność.
Wniosek: Ekosystem = biocenoza + biotop; organizmy zależą od czynników.
Ograniczenia: jednorazowa obserwacja nie pokazuje zmian sezonowych.
BHP: bezpieczeństwo w terenie.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check

1. Co to ekosystem?
2. Podaj 3 czynniki abiotyczne.
3. Co to producent?
4. Co to destruent?
5. Co to biotop?

### 11B. Ćwiczenie prowadzone

**Dane:** Jezioro.

- Biotop: woda, dno, światło.
- Producenci: glony, rośliny wodne.
- Konsumenci I: ryby roślinożerne, owady.
- Konsumenci II: ryby drapieżne.
- Destruenci: bakterie w osadach.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. Ekosystem?
2. 3 czynniki abiotyczne?
3. Producent?
4. Destruent?
5. Biotop?

**B. Trening**
6. Dlaczego destruenci ważni?
7. Popraw: „Ekosystem = organizmy".
8. 2 przykłady biotopu.

**C. Ambitne**
9. Obieg materii vs przepływ energii?
10. Dlaczego energia nie krąży?
11. Po co producenci?

**D. Zaawansowane**
12. Produkcja brutto vs netto.
13. Sukcesja.
14. Ekosystemy sztuczne.

### 11D. PROBLEM / THINK

Czy ekosystem bez destruentów mógłby istnieć? Uzasadnij.

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to ekosystem? |
| ZASTOSUJ | Podaj 3 czynniki abiotyczne. |
| WYJAŚNIJ | Dlaczego destruenci ważni? |
| ODKRYJ | Kto jest producentem? |
| POŁĄCZ | Połącz producentów z konsumentami. |
| ZAKWESTIONUJ | Czy ekosystem = organizmy? |

---

## 12. Odpowiedzi i sposób oceniania

1. Biocenoza + biotop.
2. Temperatura, światło, woda.
3. Wytwarza materię organiczną.
4. Rozkłada martwą.
5. Środowisko nieożywione.
6. Zamykają obieg materii.
7. + biotop.
8. Woda, gleba.
9. Materia krąży; energia jednokierunkowo.
10. Część tracona jako ciepło.
11. Wprowadzają energię.
12. Brutto vs netto.
13. Zmiana ekosystemu w czasie.
14. Pola uprawne, miasta.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Ekosystem | Biocenoza + biotop |
| Biocenoza | Wszystkie organizmy |
| Biotop | Środowisko nieożywione |
| Abiotyczne | Temperatura, światło, woda |
| Biotyczne | Inne organizmy |
| Producent | Wytwarza materię organiczną |
| Konsument | Zjada innych |
| Destruent | Rozkłada martwą materię |

---

## 14. Test końcowy  · **[TRENING]**

1. (P) Co to ekosystem?
2. (P) 3 czynniki abiotyczne?
3. (P) Co to producent?
4. (T) Dlaczego destruenci ważni?
5. (T) Popraw: „Ekosystem = organizmy".
6. (A) Obieg materii vs przepływ energii?
7. (A) Dlaczego energia nie krąży?
8. (Z) Produkcja brutto vs netto.

---

## 15. Checklista

- [ ] Znam definicję ekosystemu.
- [ ] Rozróżniam czynniki abiotyczne i biotyczne.
- [ ] Rozróżniam producentów, konsumentów, destruentów.
- [ ] Rozumiem obieg materii i przepływ energii.
- [ ] Znam ideę sukcesji (ambitny).

---

## 16. Mapa pojęć

```text
EKOSYSTEM
├── biocenoza + biotop
├── abiotyczne / biotyczne
└── producenci → konsumenci → destruenci
```

---

## 17. Co dalej?

L041 — łańcuchy i sieci pokarmowe.

**Most wstecz:** L030–L032 (ewolucja) → L040 (ekosystem).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Ekosystem | Biocenoza + biotop |
| Biocenoza | Wszystkie organizmy w ekosystemie |
| Biotop | Środowisko nieożywione |
| Producent | Wytwarza materię organiczną |
| Konsument | Zjada innych |
| Destruent | Rozkłada martwą materię |
| Sukcesja | Zmiana ekosystemu w czasie |

---

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**

Produkcja brutto/netto · sukcesja · ekosystemy sztuczne.

---

## 20. Jak się uczyć?

Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

Geografia (klimat) · Chemia (obieg materii) · Biologia (ekologia).

---

## 22. Zadania z życia codziennego

1. Dlaczego lasy są ważne?
2. Dlaczego jeziora się „starzeją"?
3. Jak człowiek zmienia ekosystemy?

---

## 23. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — rozbudowa do standardu L011–L020.
- Zachowano całą treść v3.7.
- Dodano: Mapa lekcji, Most z poprzednich lekcji, Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego", STATUS.

---

**Koniec L040 MASTER v4.0**


---

## 24. UZUPEŁNIENIE E8 v4.0+ (doklejone)

Ekosystem = organizmy + środowisko nieożywione.

### Ściąga
- Biotop (abiotyczne) + biocenoza (biotyczne).
- Abiotyczne: światło, T, woda, gleba, pH, wiatr.
- Nisza ≠ siedlisko: siedlisko = gdzie; nisza = „jak żyje / rolę” (hasło).
- Równowaga jest względna — zmiana jednego czynnika pociąga inne.

### 4 zadania
1. 3 czynniki abiotyczne jeziora.  
2. Biocenoza vs biotop — po jednym przykładzie.  
3. Czy ekosystem to „same drzewa”?  
4. Most do L041: kto wnosi energię słoneczną do sieci.

Szkic: 3 nie. 4 producenci.

### Status
2026-09-12 · plik roboczy BIOLOGIA_PODSTAWA_PLUS_v3.9_working.md.


## 23. UZUPEŁNIENIE AUDYTOWE v4.2 — energia, materia i poziomy troficzne

### 23.1. Jeden schemat, trzy pytania
`Słońce → producenci → konsumenci → ...`
`martwa materia → destruenci → związki nieorganiczne → producenci`

- **Energia** przepływa przez ekosystem i część zostaje rozproszona jako ciepło.
- **Materia** krąży między organizmami i środowiskiem.
- **Destruenci** uczestniczą w rozkładzie materii z wielu poziomów troficznych.

### 23.2. Doprecyzowanie roli destruentów
W szkolnych prostych łańcuchach pokarmowych destruenci często są przedstawiani obok łańcucha producent → konsument. Nie oznacza to jednak, że zawsze są „ostatnim ogniwem” jednego łańcucha.

Lepszy model:
> destruenci rozkładają martwą materię pochodzącą z różnych poziomów i pomagają zamknąć obieg pierwiastków.

### 23.3. Przykład prowadzony — łąka
1. Trawa pobiera wodę i sole mineralne oraz wykorzystuje CO₂.
2. Konik polny zjada trawę.
3. Ptak zjada konika.
4. Martwe szczątki trafiają do destruentów.
5. Produkty rozkładu wracają do środowiska.
6. Energia nie wraca w ten sam sposób — część jest rozpraszana jako ciepło.

### 23.4. Sukcesja — ostrożniej z jednym schematem
Sukcesja to **kierunkowe zmiany składu i struktury ekosystemu w czasie**. Schemat „jezioro → łąka → las” może być przykładem sukcesji w określonych warunkach, ale nie jest uniwersalną drogą dla każdego ekosystemu.

<!-- ==================== END L040 ==================== -->


<!-- ==================== BEGIN L041 ==================== -->

# L041 — Jak zapisać łańcuchy i sieci pokarmowe?

## KARTA LEKCJI L041

- Numer: L041
- Tytuł roboczy: Łańcuchy i sieci
- Dział: Ekologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L040 · Następna: L042
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Sieć pokarmowa.

`[BIO: DIAGRAM type=FLOW]`
`producent → konsumenci → destruenci`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** strzałka pokazuje przepływ pokarmu/energii.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Ekologia  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L040  
**Następna lekcja:** L042

---

### Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L040 — ekosystem) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 (ćwiczenia, test) |
| **[MASTER]** | pkt 7 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

### Most z poprzednich lekcji

- **L040 (ekosystem):** biocenoza + biotop; producenci, konsumenci, destruenci.
- **L031 (dobór):** drapieżnictwo jako czynnik doboru.
- **L042 (relacje):** relacje pokarmowe to podstawa łańcucha.

**Pytanie łączące:** Dlaczego energia maleje na kolejnych poziomach troficznych? (Odp.: część energii tracona jako ciepło, metabolizm.)

---

## 1. Pytanie przewodnie

Jak zapisać, kto kogo zjada?

---

## 2. Cele lekcji

- zapisać łańcuch pokarmowy,
- odróżnić łańcuch od sieci,
- odczytać piramidę troficzną,
- rozpoznać poziomy troficzne,
- (ambitny) rozumieć, dlaczego piramida zwęża się ku górze,
- (zaawansowany) zna sprawność ekologiczną i typy piramid.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| łańcuch: producent → konsument | podstawa |
| sieć = wiele łańcuchów | rozszerzenie |
| piramida = energia maleje | mechanizm |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**

L040 (ekosystem).

---

## 4. Zacznij od problemu

Dlaczego zmiana liczby jednego gatunku wpływa na cały ekosystem?  
Dlaczego drapieżników na szczycie jest mało?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Łańcuch pokarmowy** — sekwencja: producent → konsument I → II → III.

**Strzałka** = przepływ energii i materii (konwencja bywa różna).

**Sieć pokarmowa** = wiele połączonych łańcuchów.

**Piramida troficzna** — producenci u podstawy; na każdym poziomie mniej energii/biomasy.

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Producent → konsument → destruent** | kolejność |
| 2 | **Piramida zwęża się** | energia maleje |
| 3 | **Sieć = wiele łańcuchów** | definicja |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)  · **[PODSTAWA E8]**

**Łańcuch pokarmowy** pokazuje, kto kogo zjada w ekosystemie. Zaczyna się od producenta i przechodzi przez konsumentów różnych rzędów.

**Przykład:** trawa → królik → lis.

**Sieć pokarmowa** — wiele łańcuchów połączonych w jeden układ.

**Piramida troficzna** — graficzne przedstawienie zależności pokarmowych. Producenci u podstawy, drapieżniki na szczycie. Zwęża się ku górze, bo na każdym poziomie energia jest tracona (metabolizm, ciepło).

### 6A. Dlaczego?

1. **Dlaczego piramida zwęża się?** Bo energia jest tracona na każdym poziomie.

2. **Dlaczego łańcuchy są krótkie (3–5 ogniw)?** Bo na każdym poziomie tracona jest energia — na wyższych poziomach brakuje energii.

3. **Dlaczego destruenci są poza łańcuchem?** Bo nie tworzą ogniwa w typowym łańcuchu — rozkładają martwą materię.

4. **Dlaczego drapieżników jest mało?** Bo na szczycie piramidy jest najmniej energii.

### 6B. Krok po kroku — jak zapisać łańcuch

1. Zidentyfikuj producenta (rośliny).
2. Dodaj konsumenta I rzędu (roślinożerca).
3. Dodaj konsumenta II rzędu (drapieżnik).
4. Opcjonalnie: III rzędu.
5. Zapisz: producent → konsument I → II → III.

### 6C. Przykład prowadzony

**Dane:** Łąka.

- Producenci: trawy.
- Konsumenci I: króliki, owady.
- Konsumenci II: lisy, ptaki.
- Konsumenci III: jastrząb.

**Łańcuch:** trawa → królik → lis → jastrząb.

**Sieć:** trawa → królik → lis; trawa → owad → ptak → jastrząb (i inne kombinacje).

### 6D. Powiązanie z innymi lekcjami

```text
L040 (ekosystem) → L041 (łańcuchy) → L042 (relacje)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- **Masa każdego poziomu** mniejsza niż niższego.
- Dlatego drapieżników na szczycie najmniej.
- Zmiana liczby jednego gatunku wpływa na cały łańcuch.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

> **Zaawansowane.**

- **Sprawność ekologiczna** ≈ 10% — tylko ok. 10% energii przechodzi na wyższy poziom.
- **Piramidy:** liczby, biomasy, energii.
- **Sieci pokarmowe** są bardziej realistyczne niż pojedyncze łańcuchy.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Strzałka = kto zjada | zależy od konwencji | przepływ energii |
| Destruenci na końcu łańcucha | poza łańcuchem | inna rola |
| Piramida = liczba | zależy od typu | liczby/biomasy/energii |
| Łańcuch = sieć | sieć = wiele łańcuchów | różne pojęcia |

### Klinika 2.0

**Błąd 1:** „Destruenci są na końcu łańcucha pokarmowego."

- **Znajdź:** Mylenie roli.
- **Popraw:** Destruenci są **poza** łańcuchem — rozkładają materię ze wszystkich poziomów.
- **Reguła:** Łańcuch = producent → konsument → konsument.
- **Dlaczego:** Destruenci nie tworzą ogniwa „zjadanego" przez kogoś.
- **Podobne:** Bakterie i grzyby.
- **Pułapka:** Destruenci zamykają obieg materii, ale nie są ogniwem łańcucha.

**Błąd 2:** „Piramida troficzna to liczba osobników."

- **Znajdź:** Uproszczenie.
- **Popraw:** Piramida może być liczby, biomasy lub energii — zależnie od typu.
- **Reguła:** Trzy typy piramid.
- **Dlaczego:** Każdy typ pokazuje co innego.
- **Podobne:** Piramida energii — zawsze zwęża się.
- **Pułapka:** „Piramida = liczba" — nie.

**Błąd 3:** „Łańcuch pokarmowy to to samo co sieć."

- **Znajdź:** Mylenie pojęć.
- **Popraw:** Łańcuch = sekwencja; sieć = wiele połączonych łańcuchów.
- **Reguła:** Sieć jest bardziej realistyczna.
- **Dlaczego:** W ekosystemie organizmy mają wiele źródeł pokarmu.
- **Podobne:** Trawa → królik → lis; trawa → owad → ptak (dwie gałęzie sieci).
- **Pułapka:** „Łańcuch = sieć" — nie.

**Błąd 4:** „Energia w łańcuchu nie jest tracona."

- **Znajdź:** Brak zrozumienia przepływu energii.
- **Popraw:** Na każdym poziomie ok. 90% energii jest tracone (metabolizm, ciepło).
- **Reguła:** Sprawność ekologiczna ≈ 10%.
- **Dlaczego:** To dlatego piramida zwęża się ku górze.
- **Podobne:** Dlatego drapieżników na szczycie jest mało.
- **Pułapka:** „Energia zachowana w 100%" — nie w ekosystemie.

---

## 10. Obserwacja / model

**Typ:** model / analiza.

```text
Problem: Jak zapisać łańcuch pokarmowy na łące?
Hipoteza: Zaczyna się od producenta.
Obserwacja: Identyfikujemy organizmy i ich pokarm.
Wniosek: Łańcuch = producent → konsument I → II → III.
Ograniczenia: model nie pokazuje wszystkich zależności (sieć).
BHP: brak.
```

Odwołanie: `[BIO: DIAGRAM type=MAP variant=FOOD-WEB]`

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check

1. Co to łańcuch?
2. Co to sieć?
3. Co to piramida?
4. Co oznacza strzałka?
5. Kto na szczycie piramidy?

### 11B. Ćwiczenie prowadzone

Łańcuch na łące: trawa → królik → lis → jastrząb.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. Łańcuch?
2. Sieć?
3. Producent na łące?
4. Piramida?

**B. Trening**
5. Zapisz łańcuch.
6. Popraw: „Strzałka = kto zjada".
7. Dlaczego piramida zwęża się?

**C. Ambitne**
8. Dlaczego destruenci poza łańcuchem?
9. Zmiana liczby producentów → konsumenci?
10. Dlaczego łańcuchy są krótkie?

**D. Zaawansowane**
11. Sprawność ekologiczna.
12. Typy piramid.
13. Sieć vs łańcuch.

### 11D. PROBLEM / THINK

Dlaczego w ekosystemie jest mniej drapieżników niż roślinożerców? Uzasadnij mechanizmem piramidy.

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to łańcuch? |
| ZASTOSUJ | Zapisz łańcuch. |
| WYJAŚNIJ | Dlaczego piramida zwęża się? |
| ODKRYJ | Kto jest producentem? |
| POŁĄCZ | Połącz łańcuch z siecią. |
| ZAKWESTIONUJ | Czy destruenci są w łańcuchu? |

---

## 12. Odpowiedzi

1. Sekwencja „kto kogo zjada".
2. Wiele łańcuchów.
3. Trawa.
4. Malejąca ilość energii/biomasy.
5. Np. trawa → królik → lis.
6. Konwencja.
7. Energia tracona.
8. Rozkładają materię.
9. Mniej producentów → mniej konsumentów.
10. Energia tracona na każdym poziomie.
11. ~10%.
12. Liczby/biomasy/energii.
13. Sieć = wiele łańcuchów.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Łańcuch | Producent → konsument |
| Sieć | Wiele łańcuchów |
| Piramida | Malejąca energia |
| Strzałka | Przepływ energii |
| Destruenci | Poza łańcuchem |
| Sprawność ekologiczna | ~10% |

---

## 14. Test końcowy  · **[TRENING]**

1. (P) Co to łańcuch?
2. (P) Co to sieć?
3. (P) Co to piramida?
4. (T) Zapisz łańcuch.
5. (T) Popraw: „Strzałka = kto zjada".
6. (A) Dlaczego piramida zwęża się?
7. (A) Destruenci poza łańcuchem?
8. (Z) Sprawność ekologiczna.

---

## 15. Checklista

- [ ] Umiem zapisać łańcuch.
- [ ] Odróżniam łańcuch od sieci.
- [ ] Rozumiem piramidę troficzną.
- [ ] Wiem, dlaczego piramida zwęża się.
- [ ] Znam pojęcie sprawności ekologicznej.

---

## 16. Mapa pojęć

```text
POKARM
├── łańcuch
├── sieć
└── piramida
```

---

## 17. Co dalej?

L042 — relacje między organizmami.

**Most wstecz:** L040 (ekosystem) → L041 (łańcuchy).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Łańcuch | Sekwencja „kto kogo zjada" |
| Sieć | Wiele połączonych łańcuchów |
| Piramida | Graficzne przedstawienie poziomów |
| Poziom troficzny | Pozycja w łańcuchu |
| Sprawność ekologiczna | ~10% energii przechodzi na wyższy poziom |

---

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**

Sprawność ekologiczna · piramidy liczby/biomasy/energii.

---

## 20. Jak się uczyć?

Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

Biologia (ekologia) · Matematyka (proporcje).

---

## 22. Zadania z życia codziennego

1. Dlaczego drapieżników jest mało?
2. Dlaczego łańcuchy są krótkie?
3. Jak zmiana klimatu wpływa na łańcuchy?

---

## 23. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — rozbudowa do standardu L011–L020.
- Zachowano całą treść v3.7.
- Dodano: Mapa lekcji, Most z poprzednich lekcji, Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego", STATUS.

---

**Koniec L041 MASTER v4.0**


---

## 24. UZUPEŁNIENIE E8 v4.0+ (doklejone)

Łańcuch i sieć — strzałka zwykle „kto kogo zjada” / kierunek energii (trzymaj konwencję z lekcji).

### Ściąga
- Producent → konsument I → II → … → destruenci (obieg materii).
- Na każdym ogniwie część energii „ucieka” (ciepło, praca) — stąd piramida.
- Sieć = wiele łańcuchów; odporniejsza na ubytek jednego gatunku (hasło).

### 4 zadania
1. Ułóż łańcuch 4 ogniw (morze albo ląd).  
2. Wskaż konsumenta II rzędu.  
3. Gdzie są destruenci?  
4. Dlaczego nie rysujemy nieskończonego łańcucha?

Szkic: 4 strata energii na każdym poziomie.

### Status
2026-09-12 · plik roboczy.


## 23. UZUPEŁNIENIE AUDYTOWE v4.2 — łańcuch to nie sieć

### 23.1. Jak budować łańcuch pokarmowy
Zawsze zacznij od pytania:
**„Kto jest zjadany przez kogo?”**

Przykład:
`trawa → konik polny → żaba → bocian`

Strzałka oznacza **kierunek przepływu energii i materii z pokarmu do organizmu, który go zjada**.

### 23.2. Od łańcucha do sieci
W rzeczywistym ekosystemie:
- jeden organizm może zjadać kilka innych,
- jeden organizm może być pokarmem dla kilku gatunków.

Dlatego kilka połączonych łańcuchów tworzy **sieć pokarmową**.

### 23.3. Zadanie z brakującym ogniwem
`trawa → ? → lis`

Nie wolno zgadywać tylko na podstawie nazwy lisa. Trzeba wskazać organizm, który:
1. może zjadać trawę,
2. może być zjadany przez lisa.

Przykładowo: `trawa → królik → lis`.

### 23.4. Pułapka na strzałkę
`A → B` nie oznacza „A poluje na B”.
Oznacza, że **B pobiera energię z A jako pokarmu**.

<!-- ==================== END L041 ==================== -->


<!-- ==================== BEGIN L042 ==================== -->

# L042 — Jakie relacje panują między organizmami?

## KARTA LEKCJI L042

- Numer: L042
- Tytuł roboczy: Relacje między organizmami
- Dział: Ekologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L041 · Następna: L043
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Relacje.

`[BIO: DIAGRAM type=FLOW]`
`gatunek A ↔ gatunek B → skutek dla obu`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** klasyfikacja na podstawie skutku, nie nazwy.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Ekologia  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L041  
**Następna lekcja:** L043

---

### Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L040 — ekosystem, L041 — pokarm) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 (ćwiczenia, test) |
| **[MASTER]** | pkt 7 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

### Most z poprzednich lekcji

- **L040 (ekosystem):** biocenoza + biotop.
- **L041 (pokarm):** łańcuch pokarmowy = relacja drapieżnictwa.
- **L031 (dobór):** relacje antagonistyczne jako czynnik doboru.

**Pytanie łączące:** Dlaczego pasożyt nie zabija żywiciela? (Odp.: potrzebuje go do życia; drapieżnik zabija szybko, pasożyt wykorzystuje długo.)

---

## 1. Pytanie przewodnie

Jakie relacje łączą organizmy?

---

## 2. Cele lekcji

- rozróżnić relacje antagonistyczne i nieantagonistyczne,
- podać przykłady,
- (ambitny) rozumieć, jak relacje wpływają na liczebność populacji,
- (zaawansowany) zna niszę ekologiczną i koewolucję.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| konkurencja, drapieżnictwo, pasożytnictwo | antagonistyczne |
| mutualizm, komensalizm | nieantagonistyczne |
| przykłady | utrwalenie |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**

L040 (ekosystem), L041 (pokarm).

---

## 4. Zacznij od problemu

Czy dwa organizmy zawsze sobie szkodzą?  
Dlaczego pszczoły i kwiaty „współpracują"?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

| Relacja | Opis | Przykład |
|---------|------|----------|
| Konkurencja | walka o zasoby (−/−) | dwie trawy |
| Drapieżnictwo | jeden zjada drugi (+/−) | lis–królik |
| Pasożytnictwo | pasożyt z żywiciela (+/−) | tasiemiec |
| Mutualizm | oba korzystają (+/+) | pszczoła–kwiat |
| Komensalizm | jeden korzysta, drugi neutralny (+/0) | podnawka–rekin |
| Symbioza | ścisłe współżycie | porosty |

**Relacje antagonistyczne:** konkurencja, drapieżnictwo, pasożytnictwo.  
**Relacje nieantagonistyczne:** mutualizm, komensalizm.

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **Mutualizm = oba +** | oba korzystają |
| 2 | **Komensalizm = jeden +, drugi 0** | jedna strona neutralna |
| 3 | **Pasożyt nie zabija** | żyje z żywiciela |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)  · **[PODSTAWA E8]**

Organizmy w ekosystemie wchodzą w różne relacje:

1. **Konkurencja** — walka o te same zasoby (pokarm, przestrzeń, światło). Może być wewnątrzgatunkowa lub międzygatunkowa.

2. **Drapieżnictwo** — jeden organizm (drapieżnik) zjada drugi (ofiarę).

3. **Pasożytnictwo** — pasożyt żyje kosztem żywiciela, ale zwykle go nie zabija (bo potrzebuje go do życia).

4. **Mutualizm** — oba organizmy odnoszą korzyść.

5. **Komensalizm** — jeden organizm korzysta, drugi nie ponosi szkody.

6. **Symbioza** — ścisłe współżycie organizmów (szersza kategoria; może obejmować mutualizm i pasożytnictwo).

### 6A. Dlaczego?

1. **Dlaczego pasożyt nie zabija żywiciela?** Bo żyje z niego — śmierć żywiciela = śmierć pasożyta (lub konieczność szukania nowego).

2. **Dlaczego konkurencja prowadzi do podziału niszy?** Bo organizmy zaczynają wykorzystywać różne zasoby, by uniknąć walki.

3. **Dlaczego drapieżnictwo reguluje populacje?** Bo zmniejsza liczebność ofiar; gdy ofiar jest mało, drapieżników też ubywa.

4. **Dlaczego mutualizm się opłaca?** Bo oba organizmy odnoszą korzyść → oba mają większą szansę przeżycia.

### 6B. Krok po kroku — jak rozpoznać relację

1. Kto korzysta? (+)
2. Kto traci? (−)
3. Kto jest neutralny? (0)

- +/+ → mutualizm
- +/− → drapieżnictwo lub pasożytnictwo
- −/− → konkurencja
- +/0 → komensalizm

### 6C. Przykład prowadzony

**Dane:** Lis i królik.

- Kto korzysta: lis (+).
- Kto traci: królik (−).
- Relacja: drapieżnictwo (+/−).

### 6D. Powiązanie z innymi lekcjami

```text
L040 (ekosystem) → L041 (pokarm) → L042 (relacje) → L043 (człowiek)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- **Drapieżnictwo** reguluje populacje (oscylacje drapieżnik–ofiara).
- **Konkurencja** → podział niszy (organizmy unikają walki).
- **Pasożytnictwo** nie zabija żywiciela od razu — pasożyt potrzebuje go.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

> **Zaawansowane.**

- **Nisza ekologiczna** — rola organizmu w ekosystemie (pokarm, siedlisko, czas aktywności).
- **Zasada Gause'a** — dwa gatunki o tej samej niszy nie mogą trwale współistnieć.
- **Koewolucja** — wzajemne przystosowania gatunków (np. kwiat i zapylacz).

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Symbioza = mutualizm | symbioza to szersza kategoria | symbioza ≠ tylko mutualizm |
| Pasożyt zabija żywiciela | zwykle nie | pasożyt potrzebuje żywiciela |
| Konkurencja tylko między gatunkami | też wewnątrzgatunkowa | walka o zasoby |
| Komensalizm = mutualizm | komensalizm: jedna strona neutralna | różnica |

### Klinika 2.0

**Błąd 1:** „Pasożyt zabija żywiciela."

- **Znajdź:** Mylenie z drapieżnictwem.
- **Popraw:** Pasożyt żyje kosztem żywiciela, ale zwykle go nie zabija.
- **Reguła:** Pasożyt potrzebuje żywiciela.
- **Dlaczego:** Śmierć żywiciela = śmierć pasożyta (lub konieczność zmiany).
- **Podobne:** Tasiemiec u człowieka.
- **Pułapka:** Drapieżnik zabija szybko; pasożyt wykorzystuje długo.

**Błąd 2:** „Symbioza = mutualizm."

- **Znajdź:** Uproszczenie.
- **Popraw:** Symbioza to szersza kategoria (ścisłe współżycie); może obejmować mutualizm i pasożytnictwo.
- **Reguła:** Symbioza ≠ tylko mutualizm.
- **Dlaczego:** Porosty to symbioza (mutualizm), ale tasiemiec to pasożytnictwo.
- **Podobne:** Mikoryza (mutualizm).
- **Pułapka:** „Symbioza = oba korzystają" — nie zawsze.

**Błąd 3:** „Konkurencja tylko między gatunkami."

- **Znajdź:** Brak rozróżnienia.
- **Popraw:** Konkurencja może być wewnątrzgatunkowa (ta sama populacja) lub międzygatunkowa (różne gatunki).
- **Reguła:** Konkurencja o zasoby.
- **Dlaczego:** Osobniki tego samego gatunku też konkurują o pokarm, partnera.
- **Podobne:** Dwa wilki w tej samej watasze.
- **Pułapka:** „Konkurencja = tylko międzygatunkowa" — nie.

**Błąd 4:** „Komensalizm to to samo co mutualizm."

- **Znajdź:** Mylenie relacji.
- **Popraw:** Komensalizm: jedna strona neutralna (+/0); mutualizm: oba korzystają (+/+).
- **Reguła:** Kluczowa różnica: kto korzysta.
- **Dlaczego:** W komensalizmie druga strona nic nie zyskuje ani nie traci.
- **Podobne:** Podnawka–rekin; pszczoła–kwiat (mutualizm).
- **Pułapka:** „Oba korzystają" — nie w komensalizmie.

---

## 10. Obserwacja / model

**Typ:** analiza przykładów.

```text
Problem: Jakie relacje łączą organizmy w ekosystemie?
Hipoteza: Różne — antagonistyczne i nieantagonistyczne.
Materiał: przykłady z życia, zdjęcia, teksty.
Obserwacja: Klasyfikacja relacji według korzyści i strat.
Wniosek: Relacje wpływają na liczebność populacji.
Ograniczenia: model upraszcza złożone zależności.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check

1. Co to konkurencja?
2. Co to drapieżnictwo?
3. Co to mutualizm?
4. Co to pasożyt?
5. Co to komensalizm?

### 11B. Ćwiczenie prowadzone

Klasyfikacja: lis–królik (drapieżnictwo), pszczoła–kwiat (mutualizm), tasiemiec–człowiek (pasożytnictwo).

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. Konkurencja?
2. Drapieżnictwo?
3. Mutualizm?
4. Pasożyt?
5. Komensalizm?

**B. Trening**
6. Popraw: „Pasożyt zabija żywiciela".
7. Komensalizm vs mutualizm?
8. Symbioza = mutualizm?

**C. Ambitne**
9. Drapieżnictwo → populacja ofiar?
10. Konkurencja → nisza?
11. Dlaczego pasożyt nie zabija?

**D. Zaawansowane**
12. Nisza ekologiczna.
13. Koewolucja.
14. Zasada Gause'a.

### 11D. PROBLEM / THINK

Czy drapieżnictwo może być korzystne dla populacji ofiar? Uzasadnij.

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to konkurencja? |
| ZASTOSUJ | Podaj przykład mutualizmu. |
| WYJAŚNIJ | Dlaczego pasożyt nie zabija? |
| ODKRYJ | Kto korzysta w komensalizmie? |
| POŁĄCZ | Połącz relacje z ekosystemem. |
| ZAKWESTIONUJ | Czy symbioza = mutualizm? |

---

## 12. Odpowiedzi

1. Walka o zasoby.
2. Jeden zjada drugi.
3. Oba korzystają.
4. Tasiemiec.
5. Nie zabija.
6. Komensalizm: jedna neutralna.
7. Szersza kategoria.
8. Reguluje liczebność.
9. Podział niszy.
10. Rola organizmu.
11. Wzajemne przystosowania.
12. Dwa gatunki o tej samej niszy nie mogą współistnieć.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Konkurencja | Walka o zasoby |
| Drapieżnictwo | Jeden zjada drugi |
| Pasożytnictwo | Pasożyt z żywiciela |
| Mutualizm | Oba korzystają |
| Komensalizm | Jeden korzysta, drugi neutralny |
| Symbioza | Ścisłe współżycie |

---

## 14. Test końcowy  · **[TRENING]**

1. (P) Konkurencja?
2. (P) Drapieżnictwo?
3. (P) Mutualizm?
4. (T) Popraw: „Pasożyt zabija".
5. (T) Komensalizm vs mutualizm?
6. (A) Drapieżnictwo → populacja ofiar?
7. (A) Konkurencja → nisza?
8. (Z) Nisza ekologiczna.

---

## 15. Checklista

- [ ] Rozróżniam relacje antagonistyczne i nieantagonistyczne.
- [ ] Znam przykłady każdej relacji.
- [ ] Wiem, dlaczego pasożyt nie zabija żywiciela.
- [ ] Rozumiem wpływ relacji na liczebność.
- [ ] Znam pojęcie niszy (ambitny).

---

## 16. Mapa pojęć

```text
RELACJE
├── antagonistyczne
│   ├── konkurencja
│   ├── drapieżnictwo
│   └── pasożytnictwo
└── nieantagonistyczne
    ├── mutualizm
    └── komensalizm
```

---

## 17. Co dalej?

L043 — człowiek a środowisko.

**Most wstecz:** L040–L041 → L042 (relacje).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Konkurencja | Walka o zasoby |
| Drapieżnictwo | Jeden zjada drugi |
| Pasożytnictwo | Pasożyt żyje kosztem żywiciela |
| Mutualizm | Oba organizmy korzystają |
| Komensalizm | Jedna strona neutralna |
| Symbioza | Ścisłe współżycie |
| Nisza ekologiczna | Rola organizmu w ekosystemie |

---

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**

Nisza ekologiczna · zasada Gause'a · koewolucja.

---

## 20. Jak się uczyć?

Ściąga (5 min) → przykłady (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

Biologia (ekologia, ewolucja) · Geografia (rozmieszczenie organizmów).

---

## 22. Zadania z życia codziennego

1. Dlaczego pszczoły są ważne dla roślin?
2. Dlaczego pasożyty są groźne?
3. Jak relacje wpływają na ekosystem?

---

## 23. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — rozbudowa do standardu L011–L020.
- Zachowano całą treść v3.7.
- Dodano: Mapa lekcji, Most z poprzednich lekcji, Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego", STATUS.

---

**Koniec L042 MASTER v4.0**


---

## 24. UZUPEŁNIENIE E8 v4.0+ (doklejone)

Relacje — nazwij parę i korzyść/stratę.

### Ściąga
- Konkurencja: ten sam zasób.
- Drapieżnictwo: zjada / zabija ofiarę.
- Pasożytnictwo: żyje kosztem żywiciela, zwykle nie zabija od razu.
- Mutualizm: obie strony zyskują.
- Komensalizm (extra): jedna strona zyskuje, druga „obojętna”.

### 4 zadania
1. Lis–zając.  
2. Tasznik–ssak (hasło pasożyt).  
3. Dwa dęby o światło.  
4. Czym pasożyt ≠ drapieżnik.

### Status
2026-09-12 · plik roboczy.


## 23. UZUPEŁNIENIE AUDYTOWE v4.2 — relacja zależy od skutku dla obu stron

### 23.1. Szybki algorytm
Dla relacji między gatunkami ustal wpływ na każdą stronę:

| Znak | Znaczenie |
|---|---|
| `+` | korzyść |
| `−` | szkoda |
| `0` | brak istotnego wpływu |

Następnie rozpoznaj relację, np.:
- `+/+` — obie strony korzystają,
- `+/−` — jedna korzysta, druga ponosi koszt,
- `−/−` — obie ponoszą koszt,
- `+/0` — jedna korzysta, druga nie ponosi istotnego kosztu.

### 23.2. Nie zgaduj po nazwie
„Drapieżnictwo” i „pasożytnictwo” nie są synonimami:
- w drapieżnictwie ofiara jest zwykle zabijana i zjadana,
- pasożyt korzysta z gospodarza, zwykle nie zabijając go od razu.

### 23.3. Przykład prowadzony
**Pszczoła + kwiat**
- pszczoła zdobywa pokarm,
- roślina może zostać zapylona,
- w typowym szkolnym przykładzie: `+/+` → mutualizm.

**Lis + królik**
- lis: `+`,
- królik: `−`,
- relacja: drapieżnictwo.

### 23.4. Pułapka
Nie każda relacja korzystna dla obu stron musi mieć identyczny stopień korzyści. W zadaniu E8 najważniejsze jest poprawne rozpoznanie znaku wpływu.

<!-- ==================== END L042 ==================== -->


<!-- ==================== BEGIN L043 ==================== -->

# L043 — Jak człowiek wpływa na środowisko?

## KARTA LEKCJI L043

- Numer: L043
- Tytuł roboczy: Człowiek i środowisko
- Dział: Ekologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L042 · Następna: L044
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Człowiek i środowisko.

`[BIO: DIAGRAM type=FLOW]`
`działanie → zmiana środowiska → skutek → ograniczenie`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** przyczyna i skutek zamiast listy zagrożeń.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Ekologia  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L042  
**Następna lekcja:** L044

---

### Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L040–L042) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 (ćwiczenia, test) |
| **[MASTER]** | pkt 7 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 13 Fiszki |

### Most z poprzednich lekcji

- **L040–L042 (ekologia):** ekosystem, łańcuchy, relacje.
- **L031 (dobór):** działalność człowieka jako nowy czynnik doboru.
- **L020 (mutacje):** zanieczyszczenia jako mutageny.

**Pytanie łączące:** Jak działalność człowieka wpływa na dobór naturalny? (Odp.: zmienia środowisko → zmienia kierunek doboru; np. antybiotykooporność.)

---

## 1. Pytanie przewodnie

Jak działalność człowieka zmienia ekosystemy?

---

## 2. Cele lekcji

- wymienić zagrożenia środowiska,
- podać działania proekologiczne,
- rozumieć zrównoważony rozwój,
- (ambitny) znać eutrofizację, kwaśne deszcze, efekt cieplarniany,
- (zaawansowany) zna ślad węglowy/wodny i konwencje.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| zagrożenia: zanieczyszczenia, wycinanie lasów, klimat | podstawa |
| ochrona: recykling, oszczędzanie | działania |
| zrównoważony rozwój | idea |

---

## 3. Kompas  · **[PRZYPOMNIENIE]**

L040–L042.

---

## 4. Zacznij od problemu

Dlaczego w wielu miejscach giną pszczoły?  
Dlaczego klimat się zmienia?

**Hipoteza:** ....................................

---

## 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Zagrożenia:**
- zanieczyszczenia powietrza (smog),
- zanieczyszczenia wód,
- wycinanie lasów,
- nadmierne zużycie zasobów,
- zmiany klimatu,
- introdukcja obcych gatunków.

**Ochrona:**
- segregacja odpadów, recykling,
- oszczędzanie wody i energii,
- ochrona gatunków,
- zrównoważony rozwój.

**Zrównoważony rozwój** — rozwój bez szkody dla przyszłych pokoleń.

### Mnemotechniki dla tej lekcji

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **3 x Z: zanieczyszczenia, zużycie, zmiany klimatu** | zagrożenia |
| 2 | **3 x O: oszczędzanie, ochrona, odnawialne** | ochrona |

---

## 6. Wyjaśnienie od podstaw (warstwa podręcznikowa)  · **[PODSTAWA E8]**

Człowiek zmienia środowisko szybciej niż natura. Skutki:

- **Smog** — zanieczyszczenie powietrza → choroby układu oddechowego.
- **Eutrofizacja** — nadmiar biogenów w wodzie → zakwit glonów → brak tlenu → śmierć ryb.
- **Kwaśne deszcze** — SO₂ i NOₓ → zakwaszenie gleby i wód.
- **Efekt cieplarniany** — naturalny (potrzebny) i wzmocniony (nadmiar CO₂).
- **Zmiany klimatu** — topnienie lodowców, migracje gatunków.
- **Utrata bioróżnorodności** — wymieranie gatunków.

**Ochrona:**
- recykling, segregacja odpadów,
- oszczędzanie wody i energii,
- odnawialne źródła energii,
- ochrona gatunków i siedlisk.

### 6A. Dlaczego?

1. **Dlaczego efekt cieplarniany jest potrzebny?** Bez niego Ziemia byłaby zbyt zimna dla życia.

2. **Dlaczego eutrofizacja jest groźna?** Nadmiar biogenów → zakwit → brak tlenu → śmierć organizmów wodnych.

3. **Dlaczego recykling nie wystarcza?** Trzeba też ograniczać produkcję i zużycie.

4. **Dlaczego zmiany klimatu są już obserwowane?** Bo topnieją lodowce, podnosi się poziom mórz, zmieniają się siedliska.

### 6B. Krok po kroku — jak rozwiązywać problemy środowiskowe

1. Zidentyfikuj zagrożenie.
2. Określ jego skutki.
3. Zaproponuj działania ochronne.
4. Oceń skuteczność.

### 6C. Przykład prowadzony

**Dane:** Smog w mieście.

- Skutki: choroby układu oddechowego.
- Działania: ograniczenie emisji, transport publiczny, filtry.

### 6D. Powiązanie z innymi lekcjami

```text
L040 (ekosystem) → L041 (łańcuchy) → L042 (relacje) → L043 (człowiek)
```

---

## 7. Poziom ambitny  · **[MASTER]**

- **Eutrofizacja** — nadmiar biogenów → zakwit → brak tlenu.
- **Kwaśne deszcze** — SO₂ i NOₓ.
- **Efekt cieplarniany** — naturalny i wzmocniony.

---

## 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

> **Zaawansowane.**

- **Ślad węglowy** — ilość CO₂ związana z działalnością.
- **Ślad wodny** — ilość wody zużytej do produkcji.
- **Bioróżnorodność** — różnorodność gatunków, genów, ekosystemów.
- **Konwencje** — porozumienie paryskie, protokół z Kioto.

---

## 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Efekt cieplarniany = zły | naturalny potrzebny | wzmocniony jest problemem |
| Recykling = wszystko | ograniczanie zużycia ważniejsze | redukcja u źródła |
| Zmiany klimatu = przyszłość | już obserwujemy | topnienie lodowców |

### Klinika 2.0

**Błąd 1:** „Efekt cieplarniany jest zły."

- **Znajdź:** Uproszczenie.
- **Popraw:** Efekt cieplarniany naturalny jest potrzebny; problemem jest jego wzmocnienie przez człowieka.
- **Reguła:** Naturalny vs wzmocniony.
- **Dlaczego:** Bez efektu cieplarnianego Ziemia byłaby zbyt zimna.
- **Podobne:** Nadmiar CO₂ → wzmocnienie.
- **Pułapka:** Efekt cieplarniany sam w sobie nie jest zły.

**Błąd 2:** „Recykling wystarczy."

- **Znajdź:** Uproszczenie.
- **Popraw:** Trzeba też ograniczać produkcję i zużycie (redukcja u źródła).
- **Reguła:** Redukcja > recykling.
- **Dlaczego:** Recykling nie jest w 100% efektywny.
- **Podobne:** Oszczędzanie wody, energii.
- **Pułapka:** Recykling to nie jedyne rozwiązanie.

**Błąd 3:** „Zmiany klimatu to problem przyszłości."

- **Znajdź:** Błędne założenie.
- **Popraw:** Zmiany klimatu już obserwujemy (topnienie lodowców, ekstremalne zjawiska).
- **Reguła:** To problem teraźniejszości.
- **Dlaczego:** Dane naukowe pokazują wzrost temperatury.
- **Podobne:** Podnoszenie poziomu mórz.
- **Pułapka:** „To problem przyszłych pokoleń" — już teraz.

**Błąd 4:** „Wszystkie zmiany klimatu są spowodowane przez człowieka."

- **Znajdź:** Uproszczenie.
- **Popraw:** Klimat zmienia się naturalnie, ale człowiek znacząco wzmacnia te zmiany.
- **Reguła:** Naturalne + antropogeniczne.
- **Dlaczego:** W historii Ziemi były zmiany klimatu bez człowieka.
- **Podobne:** Epoki lodowcowe.
- **Pułapka:** „Tylko człowiek" — nie.

---

## 10. Obserwacja / model

**Typ:** analiza danych.

```text
Problem: Jak zmienia się stężenie CO₂ w atmosferze?
Hipoteza: Rośnie od czasów rewolucji przemysłowej.
Obserwacja: Dane historyczne pokazują wzrost.
Wniosek: Działalność człowieka wpływa na klimat.
Ograniczenia: korelacja ≠ prosty determinizm.
BHP: brak.
```

---

## 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

### 11A. Mini-check

1. 3 zagrożenia środowiska?
2. 3 działania ochronne?
3. Co to zrównoważony rozwój?
4. Co to eutrofizacja?
5. Co to ślad węglowy?

### 11B. Ćwiczenie prowadzone

Smog → choroby → ograniczenie emisji, transport publiczny.

### 11C. Ćwiczenia samodzielne

**A. Podstawa**
1. 3 zagrożenia.
2. 3 działania.
3. Zrównoważony rozwój?
4. Eutrofizacja?

**B. Trening**
5. Popraw: „Efekt cieplarniany = zły".
6. Kwaśne deszcze?
7. Bioróżnorodność?

**C. Ambitne**
8. Dlaczego recykling nie wystarcza?
9. Klimat → ekosystemy?
10. Dlaczego pszczoły giną?

**D. Zaawansowane**
11. Ślad węglowy.
12. Konwencje.
13. Jak zmniejszyć ślad?

### 11D. PROBLEM / THINK

Czy można pogodzić rozwój gospodarczy z ochroną środowiska? Uzasadnij.

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Podaj 3 zagrożenia. |
| ZASTOSUJ | Podaj 3 działania. |
| WYJAŚNIJ | Dlaczego efekt cieplarniany jest potrzebny? |
| ODKRYJ | Co to eutrofizacja? |
| POŁĄCZ | Połącz klimat z ekosystemami. |
| ZAKWESTIONUJ | Czy recykling wystarczy? |

---

## 12. Odpowiedzi

1. Smog, eutrofizacja, wycinanie lasów.
2. Recykling, oszczędzanie, ochrona.
3. Rozwój bez szkody dla przyszłych pokoleń.
4. Nadmiar biogenów → zakwit → brak tlenu.
5. Ilość CO₂ związana z działalnością.
6. Naturalny potrzebny.
7. SO₂, NOₓ.
8. Stabilność ekosystemów.
9. Ograniczać produkcję.
10. Zmiany siedlisk, migracje.
11. Ilość CO₂.
12. Porozumienie paryskie.
13. Oszczędzanie, transport publiczny, odnawialne.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

## 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Zagrożenia | Smog, eutrofizacja, wycinanie |
| Ochrona | Recykling, oszczędzanie |
| Zrównoważony rozwój | Bez szkody dla przyszłych pokoleń |
| Eutrofizacja | Nadmiar biogenów → brak tlenu |
| Kwaśne deszcze | SO₂, NOₓ |
| Ślad węglowy | Ilość CO₂ |

---

## 14. Test końcowy  · **[TRENING]**

1. (P) 3 zagrożenia?
2. (P) 3 działania?
3. (P) Zrównoważony rozwój?
4. (T) Popraw: „Efekt cieplarniany = zły".
5. (T) Kwaśne deszcze?
6. (A) Dlaczego recykling nie wystarcza?
7. (A) Klimat → ekosystemy?
8. (Z) Ślad węglowy.

---

## 15. Checklista

- [ ] Znam zagrożenia środowiska.
- [ ] Znam działania ochronne.
- [ ] Rozumiem zrównoważony rozwój.
- [ ] Wiem, czym jest eutrofizacja.
- [ ] Znam ideę śladu węglowego (ambitny).

---

## 16. Mapa pojęć

```text
CZŁOWIEK A ŚRODOWISKO
├── zagrożenia
├── ochrona
└── zrównoważony rozwój
```

---

## 17. Co dalej?

L044 — powtórka ekologii.

**Most wstecz:** L040–L042 (ekologia) → L043 (człowiek).

---

## 18. Słownik

| Termin | Definicja |
|--------|-----------|
| Eutrofizacja | Nadmiar biogenów → brak tlenu |
| Kwaśne deszcze | Opady z SO₂ i NOₓ |
| Efekt cieplarniany | Zatrzymywanie ciepła przez gazy |
| Bioróżnorodność | Różnorodność gatunków, genów, ekosystemów |
| Zrównoważony rozwój | Rozwój bez szkody dla przyszłych pokoleń |
| Ślad węglowy | Ilość CO₂ związana z działalnością |

---

## 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**

Ślad węglowy/wodny · konwencje.

---

## 20. Jak się uczyć?

Ściąga (5 min) → przykład (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

---

## 21. Połączenia międzyprzedmiotowe

Geografia (klimat, zanieczyszczenia) · Chemia (gazy cieplarniane) · Edukacja (ekologia).

---

## 22. Zadania z życia codziennego

1. Jak zmniejszyć ślad węglowy?
2. Dlaczego segregacja odpadów jest ważna?
3. Jak chronić bioróżnorodność?

---

## 23. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — rozbudowa do standardu L011–L020.
- Zachowano całą treść v3.7.
- Dodano: Mapa lekcji, Most z poprzednich lekcji, Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego", STATUS.

---

**Koniec L043 MASTER v4.0**


---

## 24. UZUPEŁNIENIE E8 v4.0+ (doklejone)

Człowiek a środowisko — przyczyna i skutek, nie sam slogan.

### Ściąga
- Wycinka, zanieczyszczenia (woda, powietrze, gleba), gatunki obce, nadmierne połowy / polowania.
- Skutki: ubytek siedlisk, eutrofizacja (hasło), smog, spadek bioróżnorodności.
- Ochrona: parki, rezerwaty, recykling, ograniczenie emisji — przykład + mechanizm.

### 4 zadania
1. Jedno działanie + jeden skutek w rzece.  
2. Gatunek inwazyjny — dlaczego problem (konkurencja L042).  
3. Po co zadrzewiać / chronić mokradła (hasło).  
4. Most do L041: zerwanie łańcucha przez przełowienie.

### Status
2026-09-12 · plik roboczy.


## 24. UZUPEŁNIENIE AUDYTOWE v4.2 — człowiek: przyczyna → skutek → rozwiązanie

### 24.1. Schemat odpowiedzi na zadanie środowiskowe
**Działanie człowieka → zmiana środowiska → skutek biologiczny → działanie ochronne**

Przykład:
`nadmiar nawozów → więcej biogenów w wodzie → eutrofizacja → ograniczenie dopływu biogenów`

### 24.2. Nie mieszaj poziomów
- **przyczyna:** emisja, wycinka, nadmiar nawozów,
- **proces:** eutrofizacja, degradacja siedliska, wzrost stężenia zanieczyszczeń,
- **skutek:** spadek liczebności organizmów, zmiana składu biocenozy,
- **ochrona:** ograniczenie źródła problemu, odtworzenie siedliska, ochrona gatunków.

### 24.3. Ważne doprecyzowanie klimatu
Naturalny efekt cieplarniany jest częścią funkcjonowania systemu klimatycznego Ziemi. Problemem jest **wzrost wymuszenia cieplarnianego związany m.in. ze wzrostem stężeń gazów cieplarnianych wskutek działalności człowieka**.

Nie pisz:
> „Efekt cieplarniany = zjawisko złe."

Lepiej:
> „Naturalny efekt cieplarniany jest potrzebny, a jego antropogeniczne wzmocnienie przyczynia się do ocieplania klimatu.”

### 24.4. Zadanie z brakującym ogniwem
`nadmiar nawozów → ______ → zakwit → spadek tlenu → ______`

Uzupełnienie:
- **wzrost ilości biogenów / eutrofizacja**
- **pogorszenie warunków życia organizmów wodnych / śnięcie części organizmów**

<!-- ==================== END L043 ==================== -->


<!-- ==================== BEGIN L044 ==================== -->

# L044 — Powtórka ekologii

## KARTA LEKCJI L044

- Numer: L044
- Tytuł roboczy: Powtórka ekologii
- Dział: Ekologia
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L040–L043 · Następna: L050
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Powtórka ekologii.

`[BIO: DIAGRAM type=FLOW]`
`element → zależność → proces → skutek`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** transfer.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Powtórka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Poprzednia lekcja:** L043  
**Następna lekcja:** L050

---

## 1. Pytanie przewodnie

Co już wiem o ekosystemach, pokarmie, relacjach i ochronie środowiska?

---

## 2. Cele lekcji

Po lekcji uczeń:

- powtarza blok ekologii (L040–L043),
- łączy ekologię z ewolucją i genetyką,
- (ambitny) rozumie mechanizmy ekologiczne,
- (zaawansowany) rozwiązuje zadania problemowe.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| ekosystem, łańcuch, relacje | podstawa |
| człowiek a środowisko | zastosowanie |
| łączenie z ewolucją | synteza |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

Z L040:
- Ekosystem = biocenoza + biotop
- Czynniki abiotyczne / biotyczne
- Producenci, konsumenci, destruenci

Z L041:
- Łańcuch pokarmowy
- Sieć pokarmowa
- Piramida troficzna

Z L042:
- Konkurencja, drapieżnictwo, pasożytnictwo
- Mutualizm, komensalizm

Z L043:
- Zagrożenia środowiska
- Ochrona
- Zrównoważony rozwój

Z ewolucji (L030–L032):
- Dobór naturalny
- Dostosowanie

---

## 4. Mapa przekrojowa

```text
EKOLOGIA
├── EKOSYSTEM (L040)
│   ├── biocenoza + biotop
│   ├── czynniki abiotyczne / biotyczne
│   └── producent / konsument / destruent
├── POKARM (L041)
│   ├── łańcuch
│   ├── sieć
│   └── piramida
├── RELACJE (L042)
│   ├── antagonistyczne (konkurencja, drapieżnictwo, pasożytnictwo)
│   └── nieantagonistyczne (mutualizm, komensalizm)
├── CZŁOWIEK A ŚRODOWISKO (L043)
│   ├── zagrożenia
│   ├── ochrona
│   └── zrównoważony rozwój
└── most do ewolucji
    ├── dostosowanie
    └── dobór naturalny
```

---

## 5. Interleaving — zestawy mieszane

### Zestaw A — Podstawa

1. Co to ekosystem?
2. Podaj 3 czynniki abiotyczne.
3. Co to producent?
4. Co to destruent?
5. Co to łańcuch pokarmowy?
6. Co to piramida troficzna?
7. Podaj 2 relacje antagonistyczne.
8. Podaj 2 relacje nieantagonistyczne.

### Zestaw B — Trening (łączenie)

9. Dlaczego piramida troficzna zwęża się ku górze?
10. Dlaczego destruenci są ważni?
11. Dlaczego drapieżnictwo reguluje populacje?
12. Dlaczego mutualizm się opłaca?
13. Podaj 3 zagrożenia środowiska.
14. Podaj 3 działania ochronne.

### Zestaw C — Ambitne (synteza)

15. Eutrofizacja — mechanizm i skutki.
16. Dlaczego pasożyt nie zabija żywiciela?
17. Jak relacje wpływają na liczebność populacji?
18. Dlaczego bioróżnorodność jest ważna?

### Zestaw D — Zaawansowane (problem otwarty)

19. Nisza ekologiczna — co to i dlaczego ważna?
20. Zasada Gause'a — wyjaśnij.
21. Koewolucja — podaj przykład.
22. Czy można pogodzić rozwój gospodarczy z ochroną środowiska?

---

## 6. Test przekrojowy

### A. Podstawa

1. Ekosystem — definicja?  
2. 3 czynniki abiotyczne?  
3. Producent / konsument / destruent — przykłady?  
4. Łańcuch pokarmowy — przykład?  
5. Piramida troficzna — co pokazuje?  
6. Konkurencja — definicja?  
7. Mutualizm — definicja?  
8. Zagrożenia środowiska (3)?

### B. Trening

9. Dlaczego piramida zwęża się?  
10. Dlaczego destruenci ważni?  
11. Dlaczego drapieżnictwo reguluje populacje?  
12. Popraw: „Ekosystem = organizmy".

### C. Ambitne

13. Mutualizm vs komensalizm.  
14. Eutrofizacja — mechanizm.  
15. Dlaczego pasożyt nie zabija żywiciela?  
16. Dlaczego bioróżnorodność ważna?

### D. Zaawansowane

17. Nisza ekologiczna.  
18. Zasada Gause'a.  
19. Koewolucja.  
20. Zrównoważony rozwój.

---

## 7. Odpowiedzi

### A

1. Biocenoza + biotop.  
2. Temperatura, światło, woda.  
3. Trawa / królik / bakterie.  
4. Trawa → królik → lis.  
5. Malejąca energia / biomasa na kolejnych poziomach.  
6. Walka o te same zasoby.  
7. Oba organizmy odnoszą korzyść.  
8. Smog, eutrofizacja, wycinanie lasów.

### B

9. Energia tracona na każdym poziomie.  
10. Zamykają obieg materii.  
11. Zmniejsza liczebność ofiar; gdy ofiar mało, drapieżników też ubywa.  
12. + biotop.

### C

13. Mutualizm: oba + ; komensalizm: jedna strona neutralna.  
14. Nadmiar biogenów → zakwit glonów → brak tlenu → śmierć ryb.  
15. Pasożyt potrzebuje żywiciela do życia.  
16. Stabilność ekosystemów, odporność na zmiany.

### D

17. Rola organizmu w ekosystemie (pokarm, siedlisko, czas aktywności).  
18. Dwa gatunki o tej samej niszy nie mogą trwale współistnieć.  
19. Wzajemne przystosowania gatunków (kwiat–zapylacz).  
20. Rozwój bez szkody dla przyszłych pokoleń.

---

## 8. Klinika 2.0 — przekrojowa

**Błąd 1:** „Ekosystem to tylko organizmy."

- **Znajdź:** Brak biotopu.
- **Popraw:** Ekosystem = biocenoza + biotop.
- **Reguła:** Dwa elementy.
- **Dlaczego:** Organizmy zależą od środowiska nieożywionego.
- **Podobne:** Jezioro = ryby + woda + gleba + klimat.
- **Pułapka:** Biotop nie jest „tłem" — jest częścią ekosystemu.

**Błąd 2:** „Destruenci są na końcu łańcucha pokarmowego."

- **Znajdź:** Mylenie roli.
- **Popraw:** Destruenci są poza łańcuchem — rozkładają materię ze wszystkich poziomów.
- **Reguła:** Łańcuch = producent → konsument → konsument.
- **Dlaczego:** Destruenci nie tworzą ogniwa „zjadanego" przez kogoś.
- **Podobne:** Bakterie i grzyby.
- **Pułapka:** Destruenci zamykają obieg materii, ale nie są ogniwem łańcucha.

**Błąd 3:** „Pasożyt zabija żywiciela."

- **Znajdź:** Mylenie z drapieżnictwem.
- **Popraw:** Pasożyt żyje kosztem żywiciela, ale zwykle go nie zabija.
- **Reguła:** Pasożyt potrzebuje żywiciela.
- **Dlaczego:** Śmierć żywiciela = śmierć pasożyta.
- **Podobne:** Tasiemiec u człowieka.
- **Pułapka:** Drapieżnik zabija szybko; pasożyt wykorzystuje długo.

**Błąd 4:** „Recykling wystarczy."

- **Znajdź:** Uproszczenie.
- **Popraw:** Trzeba też ograniczać produkcję i zużycie.
- **Reguła:** Redukcja > recykling.
- **Dlaczego:** Recykling nie jest w 100% efektywny.
- **Podobne:** Oszczędzanie wody, energii.
- **Pułapka:** Recykling to nie jedyne rozwiązanie.

---

## 9. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to ekosystem? |
| ZASTOSUJ | Podaj 3 czynniki abiotyczne. |
| WYJAŚNIJ | Dlaczego piramida zwęża się? |
| ODKRYJ | Kto jest producentem? |
| POŁĄCZ | Połącz ekosystem z relacjami. |
| ZAKWESTIONUJ | Czy ekosystem = organizmy? |

---

## 10. Jak się uczyć — powtórka ekologii

1. **Mapa (5 min):** narysuj mapę ekologii.
2. **Fiszki (10 min):** interleaving z L040–L043 + ewolucja.
3. **Mini-check (5 min):** sekcja 5A.
4. **Ćwiczenia (15 min):** sekcja 5B/C.
5. **Test przekrojowy (15 min):** sekcja 6.
6. **Powtórka błędów (10 min):** wróć do lekcji, których dotyczą błędy.

**Zasada 3 pytań po powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 11. Zadania z życia codziennego

1. Jak chronić środowisko?
2. Dlaczego bioróżnorodność jest ważna?
3. Jak działa obieg materii w przyrodzie?
4. Dlaczego pszczoły są ważne?
5. Jak zmniejszyć ślad węglowy?

---

## 12. Słownik przekrojowy

| Termin | Definicja |
|--------|-----------|
| Ekosystem | Biocenoza + biotop |
| Biocenoza | Wszystkie organizmy w ekosystemie |
| Biotop | Środowisko nieożywione |
| Producent | Wytwarza materię organiczną |
| Konsument | Zjada innych |
| Destruent | Rozkłada martwą materię |
| Łańcuch pokarmowy | Sekwencja „kto kogo zjada" |
| Piramida troficzna | Malejąca energia na kolejnych poziomach |
| Mutualizm | Oba organizmy odnoszą korzyść |
| Komensalizm | Jedna strona neutralna |
| Pasożytnictwo | Pasożyt z żywiciela |
| Nisza ekologiczna | Rola organizmu w ekosystemie |
| Zrównoważony rozwój | Rozwój bez szkody dla przyszłych pokoleń |

---

## 13. Checklista bloku

- [ ] Ekosystem: biocenoza + biotop.
- [ ] Czynniki abiotyczne / biotyczne.
- [ ] Producent, konsument, destruent.
- [ ] Łańcuch, sieć, piramida.
- [ ] Relacje antagonistyczne / nieantagonistyczne.
- [ ] Zagrożenia środowiska.
- [ ] Ochrona, zrównoważony rozwój.
- [ ] Łączenie z ewolucją (dostosowanie).
- [ ] Wiem, co powtórzyć.

---

## 14. Co dalej?

**L050** — powtórka roczna.

**Most wstecz:** L040–L043 (ekologia) + L030–L032 (ewolucja) + L011–L021 (genetyka).

---

## 15. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — przebudowa na powtórkę umiejętności.
- Zachowano całą treść v3.7.
- Dodano: interleaving (4 zestawy), test przekrojowy (A/B/C/D), Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Zadania z życia codziennego", Słownik przekrojowy, Checklista bloku.
- Zamiast streszczenia rozdziałów — zadania mieszane i diagnostyka luk.

---

**Koniec L044 MASTER v4.0**


---

## 16. UZUPEŁNIENIE egzaminacyjne v4.0+ (doklejone — nic nie wycięto)

Blok L040–L043 na jednej stronie.

### Ściąga ekologii
1. Ekosystem = biocenoza + biotop (organizmy + środowisko nieożywione).
2. Abiotyczne: światło, temperatura, woda, gleba, pH… Biotyczne: inne organizmy.
3. Producenci → konsumenci → destruenci.
4. Łańcuch = jedna ścieżka; sieć = wiele powiązań.
5. Relacje: konkurencja, drapieżnictwo, pasożytnictwo, mutualizm (szkolne zestawy).
6. Człowiek: wycinka, zanieczyszczenia, gatunki inwazyjne, ochrona — przykłady, nie slogan.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Łańcuch = sieć | sieć ma rozgałęzienia |
| Destruenci „nie są potrzebni” | zamykają obieg materii |
| Pasożyt = drapieżnik | pasożyt zwykle nie zabija od razu ofiary |
| Ekosystem = same rośliny | też środowisko + heterotrofy |

### 6 zadań extra
1. Nazwij 2 czynniki abiotyczne lasu.  
2. Ułóż łańcuch 4 ogniw (ląd).  
3. Wskaż producenta i destruentów w swoim łańcuchu.  
4. Para: lis–zając — jaka relacja?  
5. Jedno działanie człowieka + jeden skutek w ekosystemie.  
6. Dlaczego sieć jest „odporniejsza” od jednego łańcucha (hasło)?

Szkic: 4 drapieżnictwo. 6 zanik jednego ogniwa nie obcina całej energii, gdy są ścieżki zastępcze.

### Status doklejki
2026-09-12 · sekcje 1–15 bez zmian.

<!-- ==================== END L044 ==================== -->


<!-- ==================== BEGIN L050 ==================== -->

# L050 — Powtórka roczna

## KARTA LEKCJI L050

- Numer: L050
- Tytuł roboczy: Powtórka roczna
- Dział: Synteza
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L001–L044 · Następna: L090
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Mapa całego roku.

`[BIO: DIAGRAM type=FLOW]`
`pojęcie → proces → zastosowanie`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** łączenie działów.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Powtórka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Poprzednia lekcja:** L044  
**Następna lekcja:** L090

---

## 1. Pytanie przewodnie

Jak połączyć wszystkie bloki roku — genetykę, ewolucję, ekologię — w jeden spójny obraz?

---

## 2. Cele lekcji

Po lekcji uczeń:

- powtarza cały rok (L010–L044),
- wskazuje luki w swojej wiedzy,
- (ambitny) łączy mechanizmy między blokami,
- (zaawansowany) rozwiązuje zadania syntetyczne.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| DNA → dziedziczenie → mutacje | genetyka |
| ewolucja: dobór | ewolucja |
| ekosystem + łańcuch | ekologia |
| łączenie bloków | synteza |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

Wszystko z L010–L044:
- L010–L021: genetyka (DNA → chromosom → podziały → dziedziczenie → mutacje),
- L030–L032: ewolucja (dowody, dobór),
- L040–L044: ekologia (ekosystem, łańcuchy, relacje, ochrona).

---

## 4. Mapa przekrojowa

```text
ROK
├── GENETYKA
│   ├── DNA (L011)
│   ├── chromosom (L012)
│   ├── replikacja (L013)
│   ├── mitoza (L014)
│   ├── mejoza (L015)
│   ├── nowotwory (L016)
│   ├── dziedziczenie (L017)
│   ├── płeć / X-linked (L018)
│   ├── ABO (L019)
│   └── mutacje (L020)
├── EWOLUCJA
│   ├── dowody (L030)
│   └── dobór (L031)
└── EKOLOGIA
    ├── ekosystem (L040)
    ├── łańcuchy (L041)
    ├── relacje (L042)
    ├── człowiek a środowisko (L043)
    └── powtórka (L044)
```

---

## 5. Interleaving — zestawy mieszane

### Zestaw A — Podstawa (przekrój)

1. Pary zasad w DNA?
2. Ile chromosomów ma komórka ciała człowieka?
3. Mitoza vs mejoza — jedna różnica?
4. Warunki doboru naturalnego?
5. Co to ekosystem?
6. 4 grupy krwi ABO?
7. Co to mutacja?
8. Co to łańcuch pokarmowy?

### Zestaw B — Trening (łączenie bloków)

9. Aa × Aa — stosunek genotypów i fenotypów?
10. Dlaczego antybiotykooporność to przykład doboru naturalnego?
11. Dlaczego piramida troficzna zwęża się ku górze?
12. Jak mutacja może wpłynąć na ewolucję?
13. Matka 0, ojciec AB — jakie grupy krwi może mieć dziecko?
14. Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne?

### Zestaw C — Ambitne (synteza)

15. Nondysjunkcja → jaka zygota? Podaj przykład.
16. Dlaczego hemofilia częściej dotyczy mężczyzn?
17. Eutrofizacja — mechanizm i skutki.
18. Jak zmienność genetyczna wpływa na ewolucję populacji w zmieniającym się środowisku?

### Zestaw D — Zaawansowane (problem otwarty)

19. Anemia sierpowata — dlaczego allel utrzymuje się w populacji mimo choroby?
20. Czy mutacja zawsze prowadzi do zmiany fenotypu? Uzasadnij.
21. Jak działalność człowieka wpływa na dobór naturalny?
22. Czy z danych można jednoznacznie wywnioskować model dziedziczenia? Kiedy nie?

---

## 6. Test przekrojowy

### A. Podstawa (3 × 3 bloki)

**Genetyka:**
1. Pary zasad w DNA?
2. 2n = ? u człowieka.
3. Allel, genotyp, fenotyp — definicje.

**Ewolucja:**
4. Dowody ewolucji (3 przykłady).
5. Homologiczne vs analogiczne — różnica.
6. Warunki doboru naturalnego.

**Ekologia:**
7. Ekosystem — definicja.
8. Producent, konsument, destruent — przykłady.
9. Łańcuch pokarmowy — przykład.

### B. Trening (2 × łączenie)

10. Aa × Aa — stosunek genotypów i fenotypów.
11. Dlaczego antybiotykooporność to dobór naturalny?

### C. Ambitne (2 × łączenie)

12. Nondysjunkcja → aneuploidia (przykład).
13. Dlaczego hemofilia częściej u mężczyzn? (X-linked)

### D. Zaawansowane (1 × synteza)

14. Jak zmienność genetyczna wpływa na ewolucję populacji w zmieniającym się środowisku?

---

## 7. Odpowiedzi

### A. Podstawa

1. A–T, C–G.
2. 46 (23 pary).
3. Allel = wersja genu; genotyp = zestaw alleli; fenotyp = ujawniona cecha.
4. Skamieniałości, narządy homologiczne, relikty.
5. Homologiczne — wspólny plan, różne funkcje; analogiczne — różne pochodzenie, ta sama funkcja.
6. Zmienność, dziedziczenie, ograniczone zasoby, różny sukces rozrodczy.
7. Biocenoza + biotop.
8. Producent: trawa; konsument: królik; destruent: bakterie.
9. Trawa → królik → lis.

### B. Trening

10. Genotypy 1:2:1; fenotypy 3:1 (przy pełnej dominacji).
11. Antybiotyk eliminuje wrażliwe bakterie; przeżywają te, które już mają oporność.

### C. Ambitne

12. Błąd mejozy → gameta n+1 lub n−1 → zygota 2n+1 (np. trisomia 21) lub 2n−1.
13. Mężczyzna ma tylko jeden X; recesywny allel ujawnia się bez maskowania.

### D. Zaawansowane

14. Szkic odpowiedzi:
    - Mejoza + crossing-over → zmienność rekombinacyjna.
    - Mutacje → nowe allele.
    - Zmienność → materiał dla doboru.
    - Środowisko faworyzuje niektóre cechy.
    - Cechy korzystne rozprzestrzeniają się.
    - Populacja się zmienia → ewolucja.

---

## 8. Klinika 2.0 — przekrojowa

**Błąd 1:** „Mejoza i mitoza to samo."

- **Znajdź:** Brak rozróżnienia.
- **Popraw:** Mitoza zachowuje (2n → 2n); mejoza redukuje (2n → n).
- **Reguła:** Liczba zestawów po podziale = cel procesu.
- **Dlaczego:** Różne funkcje (ciało vs gamety).
- **Podobne:** Komórka ciała vs gameta.
- **Pułapka:** Mejoza ma 2 podziały, mitoza 1.

**Błąd 2:** „25% = co czwarte dziecko."

- **Znajdź:** Gwarancja kolejności.
- **Popraw:** Każde dziecko osobno 25%.
- **Reguła:** Niezależność zdarzeń.
- **Dlaczego:** Zapłodnienie to osobne zdarzenie.
- **Podobne:** P(dwoje kolejnych aa) = 1/16.
- **Pułapka:** Rodzina ma już troje dominujących. Czy czwarte „musi" być recesywne? Nie.

**Błąd 3:** „Ekosystem to tylko organizmy."

- **Znajdź:** Brak biotopu.
- **Popraw:** Ekosystem = biocenoza + biotop.
- **Reguła:** Dwa elementy.
- **Dlaczego:** Organizmy zależą od środowiska nieożywionego.
- **Podobne:** Jezioro = ryby + woda + gleba + klimat.
- **Pułapka:** Biotop nie jest „tłem" — jest częścią ekosystemu.

**Błąd 4:** „Bakterie uczą się oporności na antybiotyk."

- **Znajdź:** Mylenie doboru z uczeniem się.
- **Popraw:** Przeżywają te, które już miały oporność.
- **Reguła:** Dobór wybiera z istniejącej zmienności.
- **Dlaczego:** Mutacje powstają losowo; antybiotyk eliminuje wrażliwe.
- **Podobne:** Owady uodparniają się na pestycydy.
- **Pułapka:** Bakterie nie „chcą" przeżyć — po prostu te z opornością przeżywają.

---

## 9. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Pary zasad w DNA. |
| ZASTOSUJ | P(aa) w Aa × Aa. |
| WYJAŚNIJ | Dlaczego 25% ≠ gwarancja? |
| ODKRYJ | Jaki model dziedziczenia? |
| POŁĄCZ | DNA z fenotypem. |
| ZAKWESTIONUJ | Mutacja zawsze zmienia fenotyp? |

---

## 10. Jak się uczyć — powtórka roczna

1. **Mapa (10 min):** narysuj mapę wszystkich bloków.
2. **Fiszki z 4 bloków (15 min):** interleaving (genetyka + ewolucja + ekologia).
3. **Test przekrojowy (30 min):** sekcja 6.
4. **Powtórka błędów (15 min):** wróć do lekcji, których dotyczą błędy.
5. **Mapa pojęć (10 min):** uzupełnij mapę o to, co pomyliłeś.

**Zasada 3 pytań po powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 11. Zadania z życia codziennego

1. Jak genetyka wpływa na zdrowie?
2. Jak człowiek wpływa na ewolucję?
3. Jak chronić środowisko?
4. Dlaczego poradnictwo genetyczne jest ważne?
5. Dlaczego antybiotyki przestają działać?

---

## 12. Słownik przekrojowy

| Termin | Definicja |
|--------|-----------|
| Genetyka | Nauka o dziedziczeniu i zmienności |
| DNA | Kwas deoksyrybonukleinowy — nośnik informacji genetycznej |
| Allel | Wersja genu |
| Genotyp | Zestaw alleli |
| Fenotyp | Ujawniona cecha |
| Mutacja | Zmiana w DNA |
| Ewolucja | Zmiany cech z pokolenia na pokolenie |
| Dobór naturalny | Środowisko wybiera lepiej dostosowane |
| Ekosystem | Biocenoza + biotop |
| Biocenoza | Wszystkie organizmy w ekosystemie |
| Biotop | Środowisko nieożywione |
| Łańcuch pokarmowy | Sekwencja „kto kogo zjada" |

---

## 13. Checklista bloku

- [ ] DNA: budowa, pary, informacja.
- [ ] Chromosom: 46, chromatydy, centromer, XX/XY.
- [ ] Replikacja semikonserwatywna.
- [ ] Mitoza vs mejoza.
- [ ] Allele, Punnett, P ≠ przeznaczenie.
- [ ] Cechy X-linked.
- [ ] ABO.
- [ ] Mutacje.
- [ ] Łańcuch DNA → fenotyp.
- [ ] Ewolucja: dowody + dobór.
- [ ] Ekologia: ekosystem + łańcuch + relacje + ochrona.
- [ ] Wiem, co powtórzyć.

---

## 14. Co dalej?

**L090** — extra olimpijska.

**Most wstecz:** L010–L044 (wszystkie bloki).

---

## 15. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — pełny MASTER.
- Zachowano całą treść v3.7.
- Dodano: interleaving (4 zestawy), test przekrojowy (A/B/C/D), Klinika 2.0 (4 przykłady), Drabinka, „Jak się uczyć", „Zadania z życia codziennego", Słownik przekrojowy, Checklista bloku.

---

**Koniec L050 MASTER v4.0**


## 16. UZUPEŁNIENIE AUDYTOWE v4.2 — powtórka ma sprawdzać transfer, nie tylko pamięć

### 16.1. Test „jedna informacja, trzy zastosowania”
Uczeń powinien umieć wykorzystać tę samą wiedzę w trzech formach:
1. **definicja** — „Co to jest?”
2. **dane** — „Co wynika z tabeli/schematu?”
3. **transfer** — „Co się stanie, jeśli zmieni się warunek?”

### 16.2. Przykład transferu — genetyka
**Wiedza:** po replikacji DNA liczba chromosomów nie musi się podwoić.

- Definicja: wyjaśnij, dlaczego.
- Dane: podaj liczbę chromosomów i chromatyd dla `2n = 10`.
- Transfer: co zmieni się w anafazie, gdy chromatydy siostrzane się rozdzielą?

### 16.3. Przykład transferu — ekologia
**Wiedza:** energia przepływa, materia krąży.

- Definicja: rozróżnij oba pojęcia.
- Dane: odczytaj schemat poziomów troficznych.
- Transfer: przewidź skutek usunięcia producentów.

### 16.4. Zasada jakości powtórki
Jeżeli uczeń potrafi tylko odtworzyć definicję, ale nie potrafi zastosować jej do nowego przykładu, temat nie jest jeszcze opanowany na poziomie MASTER.

<!-- ==================== END L050 ==================== -->


<!-- ==================== BEGIN L090 ==================== -->

# L090 — Extra olimpijska

## KARTA LEKCJI L090

- Numer: L090
- Tytuł roboczy: Extra olimpijska
- Dział: Konkurs
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L050 · Następna: —
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Myślenie konkursowe.

`[BIO: DIAGRAM type=FLOW]`
`dane → model → obliczenie/wniosek`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** jawne założenia i kontrola wyniku.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Extra  
**Poziomy:** zaawansowany  
**Poprzednia lekcja:** L050  
**Następna lekcja:** —

---

## 1. Pytanie przewodnie

Jakie tematy wykraczają poza podstawę programową i jak je zrozumieć?

---

## 2. Cele lekcji

Po lekcji uczeń:

- zna tematy wykraczające poza podstawę,
- (ambitny) rozumie mechanizmy molekularne,
- (zaawansowany) rozwiązuje zadania olimpijskie,
- łączy genetykę, ewolucję i ekologię z chemią i matematyką.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| kod genetyczny | fundament |
| Hardy–Weinberg | matematyka populacji |
| mapowanie genów | genetyka klasyczna |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

Wszystko z L010–L050:
- genetyka (DNA, chromosom, podziały, dziedziczenie, mutacje),
- ewolucja (dobór),
- ekologia (ekosystem).

---

## 4. Tematy olimpijskie (rozwinięte)

### 4.1. Kod genetyczny

**Cechy kodu genetycznego:**

1. **Trójkowy** — 3 nukleotydy (kodon) kodują 1 aminokwas.
2. **Zdegenerowany** — wiele kodonów koduje ten sam aminokwas (64 kodony, 20 aminokwasów).
3. **Bezprzecinkowy** — kodony następują po sobie bez przerw.
4. **Niezachodzący** — każdy nukleotyd należy do jednego kodonu.
5. **Uniwersalny** — ten sam kod u prawie wszystkich organizmów (wyjątki: mitochondria, niektóre protisty).

**Przykład:**
- AUG → metionina (start)
- UAA, UAG, UGA → stop
- 61 kodonów → 20 aminokwasów (bo zdegenerowany)

**Zadanie:** Ile kodonów koduje 20 aminokwasów? (Odp.: 61 — bo 64 − 3 stop.)

### 4.2. Transkrypcja i translacja (szkic)

```
DNA → (transkrypcja) → mRNA → (translacja) → białko
```

**Transkrypcja:** w jądrze; DNA → mRNA (komplementarność A–U, T–A, C–G, G–C).
**Translacja:** w rybosomach; mRNA → aminokwasy (kodon → antykodon tRNA → aminokwas).

**Zadanie:** Sekwencja DNA: TAC GCA TGG. Jaka sekwencja mRNA? (Odp.: AUG CGU ACC.)

### 4.3. Prawa Mendla formalnie

**I prawo (rozszczepienia):** allele rozchodzą się do gamet.
**II prawo (niezależnej segregacji):** allele różnych genów rozchodzą się niezależnie (jeśli geny na różnych chromosomach).

**Krzyżówka dwugenowa:** AaBb × AaBb → 9:3:3:1 (fenotypy przy pełnej dominacji).

**Zadanie:** AaBb × AaBb. Ile genotypów? (Odp.: 9 różnych genotypów.)

### 4.4. Drzewa rodowe złożone

**Algorytm:**
1. Cecha u obu płci? (autosomalna vs X-linked)
2. Przeskoki pokoleń? (recesywna vs dominująca)
3. Chory ojciec → chory syn? (X-linked recesywna: nie)
4. Wykluczaj modele.

**Zadanie:** Zdrowi rodzice mają chore dziecko. Jaki model? (Odp.: recesywna — autosomalna lub X-linked.)

### 4.5. Hardy–Weinberg

```
p + q = 1
p² + 2pq + q² = 1
```

- p — częstość allelu A
- q — częstość allelu a
- p² — AA
- 2pq — Aa
- q² — aa

**Założenia:**
- duża populacja,
- brak doboru,
- brak mutacji,
- brak migracji,
- losowe kojarzenie.

**Zadanie:** q² = 0,09 → q = 0,3 → p = 0,7. Ile Aa? (Odp.: 2pq = 2·0,7·0,3 = 0,42.)

**Kiedy model nie działa:** mała populacja, dobór, dryf, migracja.

### 4.6. Mapowanie genów

- Frekwencja rekombinacji = odsetek potomstwa z rekombinowanymi allelami.
- Jednostka: centymorgan (cM).
- 1 cM ≈ 1% rekombinacji.

**Zadanie:** W krzyżówce 100 osobników, 15 rekombinantów. Jaka odległość? (Odp.: 15 cM.)

### 4.7. Mutacje — rozszerzone typy

| Typ | Opis |
|-----|------|
| Substytucja | jedna zasada → inna |
| Missense | zmiana aminokwasu |
| Nonsense | kodon stop przedwcześnie |
| Frameshift | przesunięcie ramki odczytu |
| Delecja/insercja | ubytek/wstawka |

**Zadanie:** Sekwencja ATG CCA. Substytucja C→G: ATG GCA. Jaki typ mutacji? (Odp.: missense — zmiana aminokwasu.)

### 4.8. Telomery, starzenie

- **Telomery** — końcówki chromosomów, chronią przed utratą informacji.
- Skracają się przy każdym podziale.
- **Telomeraza** — enzym odbudowujący telomery (aktywny w komórkach macierzystych i nowotworowych).

### 4.9. mtDNA, dziedziczenie maternalne

- mtDNA — w mitochondriach.
- Dziedziczy się **po matce** (ojciec przekazuje mitochondria plemnika, ale są one degradowane).
- Mutacje mtDNA → choroby mitochondrialne.

### 4.10. Biotechnologia w mediach vs fakt

- **GMO** — organizmy modyfikowane genetycznie.
- **CRISPR/Cas9** — precyzyjna edycja genów.
- **Klonowanie** — Dolly (1996).
- **Terapia genowa** — wprowadzanie prawidłowych genów.

**Uwaga:** media często upraszczają; warto znać fakty.

---

## 5. Ćwiczenia

### A. Podstawa olimpijska

1. Podaj 5 cech kodu genetycznego.
2. Ile kodonów koduje 20 aminokwasów?
3. Co to transkrypcja? Gdzie zachodzi?
4. Co to translacja? Gdzie zachodzi?
5. Podaj założenia Hardy'ego-Weinberga.

### B. Trening olimpijski

6. Sekwencja DNA: TAC GCA TGG. Jaka mRNA?
7. AaBb × AaBb. Ile genotypów?
8. q² = 0,16. Oblicz p, q, 2pq.
9. W krzyżówce 200 osobników, 30 rekombinantów. Jaka odległość w cM?
10. Substytucja C→G w ATG CCA. Jaki typ mutacji?

### C. Ambitne olimpijskie

11. Zdrowi rodzice mają chore dziecko. Jakie modele dziedziczenia?
12. Anemia sierpowata — dlaczego allel utrzymuje się?
13. Dlaczego kod genetyczny jest zdegenerowany?
14. Kiedy model Hardy'ego-Weinberga nie działa?

### D. Zaawansowane olimpijskie

15. Zaprojektuj krzyżówkę, która pozwoli odróżnić AA od Aa.
16. Rodowód: chory ojciec, zdrowa matka, chory syn i zdrowa córka. Jaki model?
17. Oblicz odległość między genami A i B, jeśli w krzyżówce 1000 osobników 180 to rekombinanty.
18. Wyjaśnij, dlaczego mutacje mitochondrialne dziedziczą się po matce.

---

## 6. Odpowiedzi

### A

1. Trójkowy, zdegenerowany, bezprzecinkowy, niezachodzący, uniwersalny.
2. 61 (64 − 3 stop).
3. Przepisanie DNA na mRNA; w jądrze.
4. Odczyt mRNA i synteza białka; w rybosomach.
5. Duża populacja, brak doboru, brak mutacji, brak migracji, losowe kojarzenie.

### B

6. AUG CGU ACC.
7. 9.
8. q = 0,4; p = 0,6; 2pq = 0,48.
9. 15 cM.
10. Missense.

### C

11. Autosomalna recesywna lub X-linked recesywna.
12. Heterozygoty mają przewagę (ochrona przed malarią).
13. Chroni przed skutkami mutacji punktowych.
14. Mała populacja, dobór, dryf, migracja.

### D

15. Krzyżówka testowa z aa: AA × aa → 100% Aa; Aa × aa → 1:1 Aa : aa.
16. X-linked recesywna (chory ojciec nie przekazuje X synowi — syn chory od matki nosicielki).
17. 18 cM.
18. Mitochondria plemnika są degradowane po zapłodnieniu; tylko mitochondria komórki jajowej pozostają.

---

## 7. Fiszki olimpijskie

| Pytanie | Odpowiedź |
|---------|-----------|
| Kod genetyczny — cechy | Trójkowy, zdegenerowany, bezprzecinkowy, niezachodzący, uniwersalny |
| Kodon start | AUG (metionina) |
| Kodony stop | UAA, UAG, UGA |
| Transkrypcja | DNA → mRNA (jądro) |
| Translacja | mRNA → białko (rybosom) |
| Hardy–Weinberg | p + q = 1; p² + 2pq + q² = 1 |
| 1 cM | 1% rekombinacji |
| Frameshift | Przesunięcie ramki odczytu |
| Missense | Zmiana aminokwasu |
| Nonsense | Przedwczesny stop |
| Telomery | Końcówki chromosomów |
| mtDNA | Dziedziczone po matce |
| CRISPR | Edycja genów |

---

## 8. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Podaj cechy kodu genetycznego. |
| ZASTOSUJ | Oblicz częstość alleli. |
| WYJAŚNIJ | Dlaczego kod jest zdegenerowany? |
| ODKRYJ | Kiedy model HW nie działa? |
| POŁĄCZ | Połącz mapowanie z mejozą. |
| ZAKWESTIONUJ | Czy model HW jest realistyczny? |

---

## 9. Klinika 2.0 — olimpijska

**Błąd 1:** „Kod genetyczny jest uniwersalny — zawsze."

- **Znajdź:** Uogólnienie.
- **Popraw:** Prawie zawsze; wyjątki: mitochondria, niektóre protisty.
- **Reguła:** Uniwersalność to reguła, ale są wyjątki.
- **Dlaczego:** Kod mitochondrialny różni się od jądrowego.

**Błąd 2:** „Hardy–Weinberg działa zawsze."

- **Znajdź:** Brak założeń.
- **Popraw:** Działa tylko przy spełnieniu założeń (duża populacja, brak doboru, mutacji, migracji, losowe kojarzenie).
- **Reguła:** Model to uproszczenie.
- **Dlaczego:** W rzeczywistości populacje są małe, dobór działa, mutacje zachodzą.

---

## 10. Jak się uczyć — olimpijska

1. Wybierz temat (np. Hardy–Weinberg).
2. Przeczytaj materiały (podręcznik licealny, źródła).
3. Zrób notatki.
4. Rozwiąż zadania.
5. Wróć do L010–L021 jako baza.

**Tempo dowolne. Bez bramki.**

---

## 11. Połączenia międzyprzedmiotowe

- **Matematyka:** statystyka, prawdopodobieństwo, proporcje.
- **Chemia:** biochemia, kwasy nukleinowe, białka.
- **Informatyka:** kod binarny vs kod genetyczny, kompresja danych.

---

## 12. Zadania z życia codziennego

1. Jak działa test na ojcostwo?
2. Jak działa CRISPR?
3. Dlaczego telomery są ważne w starzeniu?
4. Jakie znaczenie mają badania genetyczne?
5. Czy GMO jest bezpieczne? (dyskusja)

---

## 13. Słownik

| Termin | Definicja |
|--------|-----------|
| Kodon | Trójka nukleotydów kodująca aminokwas |
| Antykodon | Trójka nukleotydów w tRNA komplementarna do kodonu |
| Transkrypcja | Przepisanie DNA na mRNA |
| Translacja | Synteza białka na podstawie mRNA |
| Hardy–Weinberg | Model równowagi alleli w populacji |
| cM | Centymorgan — jednostka odległości genetycznej |
| Frameshift | Przesunięcie ramki odczytu |
| Telomer | Końcówka chromosomu |
| mtDNA | DNA mitochondrialny |

---

## 14. Checklista

- [ ] Znam cechy kodu genetycznego.
- [ ] Rozumiem transkrypcję i translację (szkic).
- [ ] Znam prawa Mendla.
- [ ] Umiem obliczyć częstości w modelu HW.
- [ ] Znam mapowanie genów (cM).
- [ ] Rozróżniam typy mutacji (missense, nonsense, frameshift).
- [ ] Wiem, co to telomery, mtDNA, CRISPR.

---

## 15. Co dalej?

Po L090:
- Powtórka L010–L050 (utrwalenie).
- Przygotowanie do konkursu biologicznego (LKO) — patrz `KONKURSY_2026_2027.md`.
- Ewentualnie: chemia (L002–L013) jako uzupełnienie.

---


## UZUPEŁNIENIE MASTER v4.1 — kontrola precyzji olimpijskiej

### 16. Jak czytać materiał rozszerzony?

Materiał olimpijski powinien być traktowany jako **budowanie modelu**, a nie lista trudniejszych słów.

Przy każdym nowym pojęciu zadaj cztery pytania:

1. **Co to jest?**
2. **Jak działa?**
3. **Z czym łączy się z wcześniejszych lekcji?**
4. **Jakie założenie muszę spełnić, aby mój wniosek był prawdziwy?**

### 16.1. Kod genetyczny — ważne zastrzeżenia

Warto rozróżniać:

- **kod genetyczny** — reguła przyporządkowania kodonów aminokwasom,
- **sekwencję DNA/RNA** — konkretny zapis nukleotydów,
- **ekspresję genu** — proces wykorzystania informacji genetycznej.

Cechy kodu genetycznego:

- trójkowy,
- zdegenerowany,
- bezprzecinkowy,
- niezachodzący,
- prawie uniwersalny.

„Prawie uniwersalny” jest bezpieczniejsze niż „zawsze uniwersalny”, ponieważ istnieją wyjątki, m.in. w niektórych genomach mitochondrialnych.

### 16.2. Transkrypcja i translacja — nie myl kierunku

Uproszczony schemat:

```text
DNA
 ↓ transkrypcja
RNA
 ↓ translacja
białko
```

W komórce eukariotycznej transkrypcja zachodzi w jądrze, natomiast translacja zachodzi na rybosomach.

Przy przepisywaniu sekwencji trzeba zawsze sprawdzić, **która nić DNA została podana i w jakim kierunku**. Nie wolno mechanicznie zamieniać każdej litery bez określenia, czy podana sekwencja jest nicią matrycową.

### 16.3. Hardy–Weinberg — model, nie prawo rzeczywistości

Równania:

```text
p + q = 1
p² + 2pq + q² = 1
```

opisują model równowagi populacji przy określonych założeniach.

Przed zastosowaniem wzoru sprawdź:

- czy populacja jest wystarczająco duża,
- czy zakładamy brak doboru,
- czy zakładamy brak migracji,
- czy zakładamy brak mutacji,
- czy kojarzenie jest losowe.

> **Najważniejsza umiejętność olimpijska:** nie tylko policzyć, ale sprawdzić, czy model wolno zastosować.

### 16.4. Mapowanie genów

Przybliżenie:

```text
1% rekombinacji ≈ 1 cM
```

jest użyteczne dla zadań szkolnych i wielu zadań konkursowych, ale częstość rekombinacji nie jest bezwarunkowo idealną miarą fizycznej odległości DNA.

### 16.5. Rodowody — nie zgaduj po jednym znaku

Algorytm:

```text
1. Czy cecha występuje u obu płci?
2. Czy zdrowi rodzice mają chore dziecko?
3. Czy cecha przeskakuje pokolenia?
4. Czy występuje przekaz ojciec → syn?
5. Które modele można wykluczyć?
6. Czy pozostałe dane jednoznacznie wybierają jeden model?
```

Jeśli dane nie rozstrzygają, odpowiedź powinna to powiedzieć.

### 16.6. Mutacja ≠ skutek

Schemat:

```text
mutacja
 ↓
zmiana sekwencji?
 ↓
zmiana RNA / białka?
 ↓
zmiana funkcji?
 ↓
zmiana fenotypu?
```

Nie każdy etap musi zakończyć się zmianą następnego.

### 16.7. Nondysjunkcja — pilnuj poziomu

Nie należy mieszać:

```text
błąd w mejozie
→ nieprawidłowa gameta
→ nieprawidłowa zygota
→ aneuploidia
```

z:

```text
mutacja genu
→ zmiana sekwencji DNA
```

To różne poziomy organizacji materiału genetycznego.

### 16.8. Kontrola zadań olimpijskich

Przed zapisaniem wyniku sprawdź:

- jednostki,
- zakres populacji,
- kierunek nici DNA,
- założenia modelu,
- czy wynik jest biologicznie możliwy,
- czy pytanie dotyczy genotypu, fenotypu, allelu, genu czy chromosomu.

### 16.9. Zasada „nie przesadzaj z uproszczeniem”

Jeżeli szkolny skrót jest użyteczny, oznacz go jako skrót.

Przykłady:

- „XX = kobieta, XY = mężczyzna” → **typowy model szkolny**,
- „kod genetyczny jest uniwersalny” → lepiej: **prawie uniwersalny**,
- „1 cM = 1% rekombinacji” → użyteczne przybliżenie,
- „chromatyna = luźne DNA” → zbyt duże uproszczenie; chromatyna może mieć różny stopień kondensacji.


## 16. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — pełny MASTER.
- Zachowano całą treść v3.7.
- Dodano: pełne rozwinięcia tematów (kod genetyczny, transkrypcja/translacja, prawa Mendla, rodowody, Hardy–Weinberg, mapowanie, mutacje, telomery, mtDNA, biotechnologia), ćwiczenia A/B/C/D, odpowiedzi, fiszki, drabinka, Klinika 2.0, „Jak się uczyć", połączenia, zadania z życia, słownik, checklista.

---

**Koniec L090 MASTER v4.0**


## 16.10. UZUPEŁNIENIE AUDYTOWE v4.2 — kontrola założeń przed liczeniem

### 16.10.1. Zasada
W zadaniu olimpijskim najpierw wypisz:
- **dane**,
- **założenia modelu**,
- **niewiadomą**,
- **regułę**, którą wolno zastosować.

Dopiero potem licz.

### 16.10.2. Przykład — Hardy–Weinberg
Jeżeli zadanie każe użyć modelu Hardy’ego–Weinberga, nie zakładaj automatycznie, że rzeczywista populacja spełnia wszystkie warunki. Sprawdź, czy zadanie **jawnie** lub przez kontekst przyjmuje model.

### 16.10.3. Przykład — mapowanie genów
Nie wystarczy policzyć procentów. Trzeba ustalić:
1. które klasy potomstwa są rodzicielskie,
2. które są rekombinantami,
3. jak obliczana jest częstość rekombinacji,
4. jakie ograniczenia ma interpretacja wyniku.

### 16.10.4. Przykład — rodowód
Nie rozpoznawaj sposobu dziedziczenia po jednym pokoleniu. Najpierw sprawdź:
- kto choruje,
- jaka jest płeć osób,
- czy występuje przekazanie ojciec → syn,
- czy zdrowi rodzice mają chore dziecko,
- czy wzór pasuje do jednego modelu lepiej niż do innych.

### 16.10.5. Reguła olimpijska
> **Najpierw model, potem obliczenia, na końcu wniosek.**

To chroni przed poprawnym rachunkiem wykonanym na błędnych założeniach.

<!-- ==================== END L090 ==================== -->


<!-- ==================== BEGIN WARSTWA_B_MASTER ==================== -->

# AUDYT ZAKRESU — GENETYKA / EWOLUCJA / EKOLOGIA

Poniższa mapa jest kontrolą kompletności treści, a nie kolejnym materiałem do nauki.

| Wymaganie / obszar | Lekcja | Status w v5.1 |
|---|---|---|
| struktura i rola DNA | L011 | rdzeń |
| znaczenie podwójnej helisy dla replikacji | L011 + L013 | rdzeń |
| chromosom, chromatydy, centromer | L012 | rdzeń |
| liczba chromosomów człowieka, autosomy i płeć | L012 + L018 | rdzeń |
| mitoza i mejoza, haploidalność/diploidalność | L014 + L015 | rdzeń |
| nowotwory i niekontrolowane podziały | L016 | rdzeń |
| dziedziczenie jednogenowe | L017 | rdzeń |
| podstawowe pojęcia genetyki | L010 + L017 | rdzeń |
| dziedziczenie płci | L018 | rdzeń |
| ABO i Rh | L019 | rdzeń |
| mutacje i mutageny | L020 | rdzeń |
| przykłady chorób genetycznych | L020 | rdzeń |
| ewolucja i dowody | L030 | rdzeń |
| dobór naturalny i sztuczny | L031 | rdzeń |
| człowiek i małpy człekokształtne | L030 | rdzeń |
| ekosystem i czynniki | L040 | rdzeń |
| łańcuchy i sieci pokarmowe | L041 | rdzeń |
| relacje między organizmami | L042 | rdzeń |
| wpływ człowieka na środowisko | L043 | rdzeń |

**Uzupełnienie v5.1:** L016A porządkuje zmienność środowiskową, genetyczną, rekombinacyjną i mutacyjną oraz tworzy most między mejozą, dziedziczeniem i mutacjami.

---

# WARSTWA B — MASTER / PROBLEM / THINK (genetyka)

Dodatek do L010–L021. **Nie zastępuje** lekcji — pogłębia.

---

## B1. Ekspresja genu (amb — most)

```
DNA (gen) → TRANSKRYPCJA → RNA (mRNA) → TRANSLAACJA → białko
→ funkcja → FENOTYP (+ środowisko, rozwój)
```

**Po co?** Mutacja w DNA nie zawsze zmienia białko (kod zdegenerowany).  
**THINK:** Dlaczego zamiana jednej zasady może być „cicha"?

---

## B2. Od mutacji do cechy

```
DNA → mutacja? → nie (neutralna) / tak → zmiana RNA/białka?
→ nie (często bez fenotypu) / tak → zmiana funkcji → możliwa zmiana fenotypu
```

---

## B3. Nondysjunkcja

```
błąd mejozy → gameta n+1 lub n−1 → zapłodnienie z n
→ zygota 2n+1 lub 2n−1 → aneuploidia
```

---

## B4. Mejoza I vs II

| | Mejoza I | Mejoza II |
|---|----------|-----------|
| Co się rozchodzi? | homologi | chromatydy |
| Crossing-over | tak | nie |
| Redukcja | tak | utrzymanie |

---

## B5. Rodowody — algorytm

1. Cecha u obu płci?
2. Zdrowi rodzice → chore dziecko? (sugestia recesywności)
3. Przeskoki pokoleń?
4. Ojciec → syn? (przy X-linked recesywnym zwykle nie)
5. Wykluczaj modele.

---

## B6. Prawdopodobieństwo ≠ przeznaczenie

- 25% przy każdym dziecku.
- Iloczyn: P(A i B) = P₁ × P₂.
- Suma: P(A lub B) = P₁ + P₂.

---

## B7. Bank PROBLEM / THINK

1. Rodzice dominujący, dziecko recesywne → genotypy?
2. Fenotyp dominujący w 3 pokoleniach → czy AA?
3. ABO: matka 0, dziecko AB?
4. Krzyżówka testowa — po co?
5. Mutacja w genie enzymu — kiedy fenotyp widać?
6. Nondysjunkcja → 2n±1?

---

## B8. Obserwacja vs model

| Typ | Przykład |
|-----|----------|
| Obserwacja | izolacja DNA, preparat mitozy |
| Model | Punnett, schemat mejozy, rodowód |

---

## B9. Klinika 2.0 — szablon

```
Błąd → Znajdź → Popraw → Reguła → Dlaczego → Podobne → Pułapka
```

---

## B10. L021 — Test A/B/C

**A (E8):** pary zasad · 46 · mitoza≠mejoza · allel/homo/hetero · Punnett 3:1 · XX/XY · ABO · mutacja/mutagen.

**B (MASTER):** Punnett z luką · krótki rodowód · 25% ≠ gwarancja.

**C (AMBITNY):** rodowód · krzyżówka z nieznanym genotypem · ABO · mutacja → fenotyp · nondysjunkcja.

---

## Grafiki o wysokiej wartości (kolejność)

1. DNA (nukleotyd → helisa)
2. Upakowanie → chromosom
3. Replikacja
4. Mitoza vs mejoza
5. DNA → gen → białko → cecha
6. Punnett
7. Rodowód
8. Mutacja → fenotyp
9. Nondysjunkcja

<!-- ==================== END WARSTWA_B_MASTER ==================== -->


<!-- ==================== BEGIN WARSTWA_C_GRAFIKA ==================== -->

# WARSTWA C — GRAFIKA O WYSOKIEJ WARTOŚCI

**Zasada:** schemat własny > `assets/` lokalne > zewnętrzne tylko gdy konieczne.  
Te plansze **zastępują** część tekstu — nie ozdabiają.

---

## C1. DNA — nukleotyd → nić → helisa

```
NUKLEOTYD (cukier + fosforan + zasada) → NIĆ DNA → PODWÓJNA HELISA
Pary: A–T (2 wiązania) · C–G (3 wiązania)
Nici antyrównoległe (5'→3' i 3'→5')
```

## C2. Upakowanie DNA → chromosom

```
DNA → (+ histony) chromatyna → CHROMOSOM (widoczny przy podziale)
Po replikacji: 2 chromatydy + 1 centromer
```

## C3. Replikacja (semikonserwatywna)

```
matryca 5'─ A T G C ─3'
nowa    3'─ T A C G ─5'
Wynik: 2 cząsteczki, każda = stara + nowa
```

## C4. Mitoza vs mejoza

```
MITOZA                      MEJOZA
1 podział                   2 podziały
2 komórki                   4 produkty
liczba stała                redukcja 2n → n
identyczne                  zróżnicowane
```

## C5. DNA → gen → białko → cecha

```
DNA → GEN → RNA → BIAŁKO → funkcja → FENOTYP
(+ środowisko + rozwój)
```

## C6. Kwadrat Punnetta

```
        A     a
   A   AA    Aa
   a   Aa    aa
Genotypy 1:2:1 · Fenotyp 3:1
```

## C7. Rodowód (symbole)

```
□ mężczyzna zdrowy     ■ mężczyzna chory
○ kobieta zdrowa       ● kobieta chora
═ partnerzy            │ potomstwo
```

## C8. Mutacja → fenotyp

```
DNA → mutacja → brak wpływu (neutralna)
              → zmiana RNA/białka → funkcja OK (bez fenotypu)
                                   → funkcja zaburzona (możliwy fenotyp)
```

## C9. Nondysjunkcja

```
mejoza → błąd → gameta n+1 lub n−1 → zygota 2n+1 lub 2n−1 → aneuploidia
```

---

## C — checklista wdrożenia w HTML

| # | Plansza | ASCII w MD | SVG opcjonalny | Lekcja |
|---|---------|------------|----------------|--------|
| 1 | DNA | tak | dna-helisa.svg | L011 |
| 2 | Upakowanie | tak | chromosom.svg | L012 |
| 3 | Replikacja | tak | replikacja.svg | L013 |
| 4 | Mitoza/mejoza | tak | mitoza-mejoza.svg | L014–L015 |
| 5 | Gen→cecha | tak | gen-do-cechy.svg | L011/L020 |
| 6 | Punnett | tak | punett.svg | L017 |
| 7 | Rodowód | tak | rodowod.svg | L018 |
| 8 | Mutacja | tak | mutacje.svg | L020 |
| 9 | Nondysjunkcja | tak | nondysjunkcja.svg | L015/L020 |

<!-- ==================== END WARSTWA_C_GRAFIKA ==================== -->


<!-- ==================== BEGIN SVG_ASSETS ==================== -->

# SVG — pliki do `assets/`

**Zasada:** każdy plik samodzielny, `<svg xmlns=...>`, viewBox, kolory inline, brak zależności zewnętrznych.

## 1. `L011/assets/dna-helisa.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" font-family="Arial, sans-serif">
  <rect width="320" height="200" fill="#fafafa" stroke="#ccc"/>
  <text x="160" y="20" text-anchor="middle" font-size="13" font-weight="bold">DNA — podwójna helisa</text>
  <path d="M40,60 Q160,30 280,60" fill="none" stroke="#1e88e5" stroke-width="2"/>
  <path d="M40,140 Q160,170 280,140" fill="none" stroke="#43a047" stroke-width="2"/>
  <line x1="70" y1="52" x2="70" y2="148" stroke="#c62828" stroke-width="1.5"/>
  <text x="76" y="102" font-size="11" fill="#c62828">A–T</text>
  <line x1="140" y1="42" x2="140" y2="158" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="146" y="102" font-size="11" fill="#6a1b9a">C–G</text>
  <line x1="210" y1="42" x2="210" y2="158" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="216" y="102" font-size="11" fill="#6a1b9a">C–G</text>
  <line x1="270" y1="52" x2="270" y2="148" stroke="#c62828" stroke-width="1.5"/>
  <text x="240" y="180" font-size="11" fill="#333">A–T: 2 wiązania · C–G: 3 wiązania</text>
</svg>
```

## 2. `L012/assets/chromosom.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" font-family="Arial, sans-serif">
  <rect width="300" height="240" fill="#fafafa" stroke="#ccc"/>
  <text x="150" y="20" text-anchor="middle" font-size="13" font-weight="bold">Chromosom po replikacji</text>
  <path d="M100,40 Q80,90 100,120 L100,200 Q80,200 80,180 L80,60 Q80,40 100,40 Z" fill="#bbdefb" stroke="#1e88e5" stroke-width="1.5"/>
  <path d="M200,40 Q220,90 200,120 L200,200 Q220,200 220,180 L220,60 Q220,40 200,40 Z" fill="#bbdefb" stroke="#1e88e5" stroke-width="1.5"/>
  <circle cx="150" cy="120" r="8" fill="#c62828"/>
  <text x="150" y="145" text-anchor="middle" font-size="11" fill="#c62828">centromer</text>
  <text x="60" y="220" font-size="11" fill="#1e88e5">chromatyda</text>
  <text x="220" y="220" font-size="11" fill="#1e88e5">chromatyda</text>
</svg>
```

## 3. `L013/assets/replikacja.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220" font-family="Arial, sans-serif">
  <rect width="360" height="220" fill="#fafafa" stroke="#ccc"/>
  <text x="180" y="20" text-anchor="middle" font-size="13" font-weight="bold">Replikacja semikonserwatywna</text>
  <text x="20" y="70" font-size="12">matryca:</text>
  <text x="90" y="70" font-size="13" font-family="monospace" fill="#1e88e5">5'─A T G C─3'</text>
  <text x="20" y="100" font-size="12">nowa:</text>
  <text x="90" y="100" font-size="13" font-family="monospace" fill="#43a047">3'─T A C G─5'</text>
  <text x="20" y="150" font-size="12">wynik: dwie cząsteczki, każda = stara + nowa nić</text>
  <text x="20" y="175" font-size="12" fill="#333">A–T, C–G — komplementarność</text>
</svg>
```

## 4. `L014_L015/assets/mitoza-mejoza.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 260" font-family="Arial, sans-serif">
  <rect width="460" height="260" fill="#fafafa" stroke="#ccc"/>
  <text x="230" y="20" text-anchor="middle" font-size="13" font-weight="bold">Mitoza vs mejoza</text>
  <text x="100" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e88e5">MITOZA</text>
  <circle cx="100" cy="90" r="18" fill="#bbdefb" stroke="#1e88e5"/>
  <text x="100" y="94" text-anchor="middle" font-size="10">2n</text>
  <circle cx="70" cy="170" r="18" fill="#bbdefb" stroke="#1e88e5"/>
  <circle cx="130" cy="170" r="18" fill="#bbdefb" stroke="#1e88e5"/>
  <text x="100" y="215" text-anchor="middle" font-size="11">2 komórki · ta sama liczba zestawów</text>
  <text x="360" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="#6a1b9a">MEJOZA</text>
  <circle cx="360" cy="90" r="18" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="300" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="335" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="370" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="405" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <text x="360" y="215" text-anchor="middle" font-size="11">4 komórki haploidalne</text>
</svg>
```

## 5. `L011_L020/assets/gen-do-cechy.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" font-family="Arial, sans-serif">
  <rect width="420" height="140" fill="#fafafa" stroke="#ccc"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold">Od DNA do cechy</text>
  <text x="20" y="70" font-size="13" fill="#1e88e5">DNA</text>
  <text x="70" y="70" font-size="13">→</text>
  <text x="90" y="70" font-size="13" fill="#6a1b9a">GEN</text>
  <text x="140" y="70" font-size="13">→</text>
  <text x="160" y="70" font-size="13" fill="#43a047">RNA</text>
  <text x="200" y="70" font-size="13">→</text>
  <text x="220" y="70" font-size="13" fill="#c62828">BIAŁKO</text>
  <text x="290" y="70" font-size="13">→</text>
  <text x="310" y="70" font-size="13" fill="#333">FENOTYP</text>
  <text x="210" y="110" text-anchor="middle" font-size="11" fill="#555">+ środowisko i rozwój</text>
</svg>
```

## 6. `L017/assets/punett.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" font-family="Arial, sans-serif">
  <rect width="260" height="260" fill="#fafafa" stroke="#ccc"/>
  <text x="130" y="20" text-anchor="middle" font-size="13" font-weight="bold">Krzyżówka Aa × Aa</text>
  <text x="120" y="60" text-anchor="middle" font-size="14" fill="#c62828">A</text>
  <text x="180" y="60" text-anchor="middle" font-size="14" fill="#c62828">a</text>
  <text x="60" y="110" text-anchor="middle" font-size="14" fill="#c62828">A</text>
  <text x="60" y="170" text-anchor="middle" font-size="14" fill="#c62828">a</text>
  <rect x="90" y="80" width="60" height="60" fill="#e8f5e9" stroke="#2e7d32"/>
  <text x="120" y="115" text-anchor="middle" font-size="13">AA</text>
  <rect x="150" y="80" width="60" height="60" fill="#fff3e0" stroke="#ef6c00"/>
  <text x="180" y="115" text-anchor="middle" font-size="13">Aa</text>
  <rect x="90" y="140" width="60" height="60" fill="#fff3e0" stroke="#ef6c00"/>
  <text x="120" y="175" text-anchor="middle" font-size="13">Aa</text>
  <rect x="150" y="140" width="60" height="60" fill="#ffebee" stroke="#c62828"/>
  <text x="180" y="175" text-anchor="middle" font-size="13">aa</text>
  <text x="130" y="230" text-anchor="middle" font-size="12">Genotyp 1:2:1 · Fenotyp 3:1</text>
</svg>
```

## 7. `L018/assets/rodowod.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" font-family="Arial, sans-serif">
  <rect width="360" height="260" fill="#fafafa" stroke="#ccc"/>
  <text x="180" y="20" text-anchor="middle" font-size="13" font-weight="bold">Rodowód — symbole</text>
  <rect x="30" y="50" width="30" height="30" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="70" font-size="11">mężczyzna zdrowy</text>
  <rect x="30" y="100" width="30" height="30" fill="#c62828" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="120" font-size="11">mężczyzna chory</text>
  <circle cx="45" cy="170" r="16" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="175" font-size="11">kobieta zdrowa</text>
  <circle cx="45" cy="220" r="16" fill="#c62828" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="225" font-size="11">kobieta chora</text>
</svg>
```

## 8. `L020/assets/mutacje.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" font-family="Arial, sans-serif">
  <rect width="420" height="220" fill="#fafafa" stroke="#ccc"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold">Mutacja → fenotyp</text>
  <text x="30" y="70" font-size="13" fill="#1e88e5">DNA</text>
  <text x="80" y="70" font-size="13">→</text>
  <text x="100" y="70" font-size="13" fill="#c62828">mutacja</text>
  <text x="180" y="70" font-size="13">→</text>
  <text x="200" y="70" font-size="13">zmiana sekwencji</text>
  <rect x="20" y="140" width="120" height="50" fill="#e8f5e9" stroke="#2e7d32"/>
  <text x="80" y="160" text-anchor="middle" font-size="11">brak wpływu</text>
  <text x="80" y="178" text-anchor="middle" font-size="11">(neutralna)</text>
  <rect x="280" y="140" width="120" height="50" fill="#ffebee" stroke="#c62828"/>
  <text x="340" y="160" text-anchor="middle" font-size="11">zmiana białka</text>
  <text x="340" y="178" text-anchor="middle" font-size="11">→ możliwa choroba</text>
</svg>
```

## 9. `L015_L020/assets/nondysjunkcja.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 200" font-family="Arial, sans-serif">
  <rect width="420" height="200" fill="#fafafa" stroke="#ccc"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold">Nondysjunkcja → aneuploidia</text>
  <text x="30" y="60" font-size="12">mejoza → błąd → nondysjunkcja</text>
  <text x="30" y="100" font-size="12">gameta: n+1 lub n−1</text>
  <text x="30" y="140" font-size="12">+ gameta n → zygota: 2n+1 lub 2n−1</text>
  <text x="30" y="180" font-size="12">→ aneuploidia (np. trisomia 21)</text>
</svg>
```

<!-- ==================== END SVG_ASSETS ==================== -->


<!-- ==================== BEGIN BACKLOG_SWIADOMY ==================== -->

# BACKLOG — świadomie odłożone / do dalszego rozwinięcia

**Status:** część tematów została już wprowadzona w L090; poniższa lista oznacza **pełną osobną lekcję lub większy bank zadań**, a nie brak jakiejkolwiek wzmianki.

## 1. Ekspresja genu — pełna osobna lekcja
- [x] szkic transkrypcji
- [x] szkic translacji
- [x] cechy kodu genetycznego
- [x] dlaczego mutacja może być „cicha”
- [ ] pełna lekcja: regulacja ekspresji
- [ ] epigenetyka jako osobny blok

## 2. Hardy–Weinberg — pełny bank zadań
- [x] założenia
- [x] `p + q = 1`
- [x] `p² + 2pq + q² = 1`
- [x] częstość alleli vs genotypów
- [x] kiedy model nie działa
- [ ] zadania wieloetapowe
- [ ] interpretacja danych tabelarycznych

## 3. Mapowanie genów
- [x] frekwencja rekombinacji
- [x] cM
- [x] podstawowe zadania
- [ ] mapowanie trzech punktów
- [ ] sprzężenie autosomalne w większych zadaniach

## 4. Bank rodowodów konkursowych
- [ ] 20–30 rodowodów z kluczami
- [ ] modele AD, AR, XR, XD
- [ ] niepełna penetracja
- [ ] zadania, w których dane nie pozwalają na jednoznaczne rozstrzygnięcie

## 5. Pliki SVG w `assets/`
- [ ] wszystkie plansze produkcyjne
- [ ] audyt czytelności na telefonie
- [ ] wersje bezpieczne dla trybu druku

## 6. Inne haki
- [ ] pełny bank zadań „wykryj brak informacji”
- [ ] bank zadań „znajdź błąd w rozumowaniu”
- [ ] bank zadań z mieszaniem L012–L020
- [ ] pełna matryca E8 → MASTER → KONKURS

<!-- ==================== END BACKLOG_SWIADOMY ==================== -->


<!-- ==================== BEGIN WARSTWA_WIZUALNA ==================== -->

# WARSTWA WIZUALNA

**Priorytet:**
1. Schemat własny (ASCII / map-box / inline SVG).
2. Plik lokalny `assets/`.
3. Zewnętrzny tylko gdy konieczne.

## Znaczniki BIO

```
[BIO: CARD: OK|TRAP|HINT|AMB|REM|STOP]
[BIO: DIAGRAM type=CELL|DNA|BONE|SYSTEM|CYCLE|MAP|TREE]
[BIO: HOTSPOT id=… label=…]
[BIO: LABEL]…[/BIO: LABEL]
[BIO: SVG src=assets/…]
[BIO: IMG src=assets/… alt="…" caption="…"]
[BIO: IMG-REMOTE url=… save=assets/…]
```

## Struktura folderów

```
repo/
├── biologia/
│ ├── L011_DNA/
│ │ ├── L011.md
│ │ └── assets/dna-helisa.svg
│ ├── L012_chromosom/
│ └── ...
└── shared/css/bio.css
```

## Fallback

1. Inline SVG.
2. Lokalny plik.
3. ASCII / map-box.

## Przykład użycia

```markdown
[BIO: DIAGRAM type=DNA variant=HELIX]
[BIO: SVG src=assets/dna-helisa.svg]
[BIO: HOTSPOT id=pair label="Para zasad"]A–T, C–G.[/BIO: HOTSPOT]
[/BIO: SVG]
[/BIO: DIAGRAM]
```

<!-- ==================== END WARSTWA_WIZUALNA ==================== -->


<!-- ==================== BEGIN STATUS ==================== -->

# STATUS v4.1 WORKING

## Źródła scalone 2026-09-12 · synchronizacja L012 HTML v8.1: 2026-09-14

| Źródło | Co wniesiono |
|--------|--------------|
| v2.3c | Treści L010–L021, warstwy |
| v3.3 | L030–L044, SVG, WARSTWA_B/C |
| v3.4 | Warstwa dydaktyczna (6A–6C) w L011, L013, L015, L017, L020 |
| v3.5 | Pełny pakiet scalony |
| v3.6 | 80/20 per lekcja, mnemotechniki, Klinika 2.0, drabinka trudności, sekcje „Jak się uczyć" itd. |
| **v3.7** | **Pełna warstwa dydaktyczna do L001–L003, L014, L016, L030–L044, L050, L090** — drabinka trudności, Klinika 2.0, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego" w każdej lekcji |

## Zasada no-content-loss

1. Żadnej treści nie usunięto.
2. Plik wynikowy większy niż każdy źródłowy.
3. Duplikaty SYSTEM / SYSTEM_GENETYKA zachowane świadomie.
4. v3.7 dodaje pełną warstwę dydaktyczną do wszystkich wcześniej słabszych lekcji.

## Co zawiera pakiet

- SYSTEM (filozofia, schemat, 80/20, mnemotechniki, słownik, indeks)
- L001–L003 (pełne warstwy dydaktyczne)
- L010–L021 (genetyka — pełne)
- L030–L044 (ewolucja + ekologia — pełne, rozbudowane w v3.7)
- L050, L090 (rozbudowane)
- WARSTWA_B_MASTER (B1–B10)
- WARSTWA_C_GRAFIKA (C1–C9)
- SVG_ASSETS (9 plików)
- BACKLOG_SWIADOMY
- WARSTWA_WIZUALNA
- STATUS

## Kolejne kroki (opcjonalne)

- Dopisać pełne wersje L050 i L090 (obecnie rozszerzone szkice).
- Przygotować HTML (puste pola testów).
- Dopisać więcej przykładów do L030–L044.

---

**KONIEC PAKIETU BIOLOGIA: PODSTAWA PLUS v3.9 FULL**  
**Bez obcinania treści.** Wszystkie warstwy zachowane i scalone.  
**v3.7 dodaje:** pełną warstwę dydaktyczną do L001–L003, L014, L016, L030–L044, L050, L090.
**v3.9:** L050 i L090 podniesione do pełnego MASTER v4.0 (z poprawione.md) — mapa lekcji, mosty, Klinika 2.0 rozbudowana, drabinka, zadania z życia, STATUS.

<!-- ==================== END STATUS ==================== -->


---

## STATUS po synchronizacji L012 v8.1 i rozbudowie L050/L090 (2026-09-14)

- Podmieniono na wersje MASTER z poprawione.md: L021, L030, L031, L032, L040, L041, L042, L043, L044, L050, L090.
- Backup: `_backup_md_2026-09-12/`.
- L001–L020 (poza L021) bez zmian, o ile nie było bloku w poprawione.


---

# NOTATKA ROBOCZA v4.1

## Zakres tej rewizji

- **L001–L011:** pozostawione bez merytorycznej przebudowy.
- **L012:** zsynchronizowane z dostarczonym HTML v8.1 i rozszerzone w MD.
- **L013–L044:** pozostawione bez merytorycznej przebudowy.
- **L050:** rozszerzone o warstwę diagnostyczną i zadania z brakującą informacją.
- **L090:** rozszerzone o kontrolę założeń i precyzji olimpijskiej.
- **WARSTWA B / C / BACKLOG:** uporządkowane tak, aby nie deklarowały jako „brakujące” tematów, które już pojawiły się w L090.

## Główna zasada dalszej pracy

> Najpierw domykamy teorię i przykłady prowadzone, dopiero potem dokładamy kolejne trudne zadania.

> Jeżeli zadanie wymaga rozumowania, uczeń powinien mieć wcześniej możliwość zobaczenia takiego rozumowania w teorii albo w przykładzie prowadzonym.



# AUDYT GLOBALNY v4.2 — 2026-09-15

## Zakres

- L001–L011: **nietknięte** w tej rewizji.
- L012: pozostaje wersją zsynchronizowaną z HTML v8.1; nie dublujemy jej całej treści.
- L013–L020: wzmocniono przede wszystkim zależności przyczynowo-skutkowe, przykłady prowadzone i rozróżnienia pojęciowe.
- L030–L031: doprecyzowano dowody ewolucji oraz role zmienności i doboru.
- L040–L043: doprecyzowano przepływ energii, obieg materii, łańcuchy/sieci, relacje i analizę wpływu człowieka.
- L050: dodano kontrolę transferu wiedzy.
- L090: dodano kontrolę założeń modelu przed obliczeniami.

## Najważniejsze problemy znalezione w audycie

### Priorytet A — trzeba pilnować przy konwersji do HTML
1. **Teoria nie może być krótsza niż wymagają tego zadania.**
2. Każdy nowy typ zadania powinien mieć przynajmniej jeden przykład prowadzony.
3. „[ZAAWANSOWANY]” powinien być oznaczony jako rozszerzenie, a nie jako konieczne minimum E8.
4. W zadaniach z liczeniem trzeba zawsze rozdzielać: **chromosom / chromatyda / cząsteczka DNA / centromer**.
5. W zadaniach olimpijskich trzeba oddzielać **model przyjęty w zadaniu** od twierdzeń o rzeczywistej biologii.

### Priorytet B — ważne korekty językowe

- „Semikonserwatywność gwarantuje bezbłędność” → zbyt mocne; chodzi o mechanizm wiernego kopiowania, ale błędy są możliwe.
- „Homologiczne = różne funkcje” → zbyt wąskie; kluczowe jest wspólne pochodzenie, funkcje mogą się różnić.
- „Mutacje tworzą nowe cechy, a dobór je wybiera” → lepiej: mutacje mogą tworzyć nowe allele, rekombinacja nowe kombinacje, a dobór zmienia częstości wariantów.
- „Destruenci są ostatnim ogniwem łańcucha” → zbyt proste; uczestniczą w rozkładzie martwej materii pochodzącej z wielu poziomów.
- „Jezioro → łąka → las” → tylko przykład sukcesji w określonych warunkach, nie uniwersalny schemat.
- „Plemnik decyduje o płci” → zachować jako szkolny model XX/XY i nie przedstawiać jako pełnego opisu rozwoju płci.
- „Dawca uniwersalny” → dopisywać, że chodzi o model dotyczący przede wszystkim krwinek czerwonych; rzeczywista zgodność jest szersza.

## Ocena architektury

Obecna konstrukcja jest dobra i nie wymaga mechanicznego ujednolicania. Największą wartością są:
- warstwy E8 → trening → MASTER → zaawansowane,
- klinika błędów,
- ćwiczenie prowadzone,
- drabinka trudności,
- fiszki,
- mosty między lekcjami,
- zadania „PROBLEM / THINK”.

Największy brak przed dalszą produkcją HTML to nie liczba sekcji, lecz **nierówna głębokość wyjaśnienia w niektórych lekcjach**. Dlatego v4.2 wzmacnia głównie miejsca, w których uczeń wcześniej dostawał test szybciej niż mechanizm.

## Następny etap

Przed finalnym HTML warto wykonać osobny audyt:
1. każdego zadania i jego odpowiedzi,
2. każdego przykładu liczbowego,
3. każdego schematu/strzałki,
4. zgodności etykiet [PODSTAWA E8] / [MASTER] / [ZAAWANSOWANY],
5. brakujących grafik o wysokiej wartości dydaktycznej,
6. testów końcowych pod kątem tego, czy każde pytanie ma przygotowanie w teorii.

Zasada nadrzędna pozostaje: **niczego istotnego nie wycinamy; najpierw uzupełniamy teorię, dopiero potem ewentualnie skracamy powtórzenia ćwiczeń.**

<!-- ==================== STATUS ROBOTY 2026-09-20 ==================== -->

## STATUS ROBOTY (2026-09-20 20:31)

- Ten plik jest **jedynym roboczym MD biologii**.
- `BIOLOGIA_PODSTAWA_PLUS_v3.9_working.md` usunięty z katalogu roboczego po audycie bloków: v4.2 ≥ v3.9 w każdym BEGIN L* (L012 w v4.2 jest 4× dłuższy). Kopia: `_backup_md_2026-09-20/`.
- L010: cechy + DNA od zera; L003 nie jest bramą.
- HTML L011 kanon: `BIOLOGIA_L011_DNA.html` (v6.3) + `BIOLOGIA_L011_DNA_WIZUALIZACJA.html`.
- FIX L011 (już w lekcji): A–C/G–T to też duża+mała, problem to **układ wiązań H**, nie „zła szerokość”; gen = produkt białko **albo** RNA; zmiana sekwencji ≠ zawsze inne białko.


<!-- KEEP-ALIVE 2026-09-23 11:52 UTC — odświeżenie zapisu, bez zmiany treści dydaktycznej -->

<!-- HTML SYNC 2026-09-23 -->
- Kanon HTML L014: `BIOLOGIA_L014_MITOZA.html` (wykład + fazy P-M-A-T + cykl + klinika + fiszki + test; bez emotikon).
- Kanon HTML L004: `BIOLOGIA_L004_ORGANIZACJA.html` (v3.1 MASTER + SVG rozmieszczenia tkanek).
- Warianty L004 v1/v2/v2.1 i duplikaty L014 zostają w attachments; nic nie kasowane.
- L014 HTML v3.0: `BIOLOGIA_L014_MITOZA.html` (~131 KB) — oś cyklu, licznik chromosomów 4/46, prometafaza, G0, pułapka X; korekty definicji cyklu/interfazy/nowotworu (2026-09-23).
