---
kod: F18
tytul: "Dossier substancji"
poziom: E8+LO
wymaga: "F02; F03; F06; F09; F11; F12"
poglebia: "F13–F15; N02–N08; R01–R03"
zrodla: "MASTER v17.0; MASTER v15.0"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"
---
# CHE.01F.18-DOSSIER-SUBSTANCJI — DOSSIER SUBSTANCJI

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

1. dossier łączy wzór, skład, strukturę, właściwości i BHP
2. H₂O ma wiązania O–H spolaryzowane
3. CO₂ ma polarne wiązania, ale niepolarną cząsteczkę
4. NaCl opisujemy jako sieć jonową
5. NH₃ jest cząsteczką polarną
6. CH₄ ma geometrię tetraedryczną i jest niepolarny jako całość
7. właściwości muszą mieć źródło w strukturze lub danych
8. BHP jest polem rekordu
9. proweniencja danych jest częścią rekordu
10. zmiana substancji powinna aktualizować wszystkie widoki

### Diagnoza wejściowa

1. Jakie pola muszą znaleźć się w dossier?
2. Jaki typ wiązania ma H₂O?
3. Czy CO₂ jest polarne?
4. Jak opisać NaCl: cząsteczka czy sieć?
5. Czy BHP należy do rekordu?
6. Skąd wizualizacja ma brać dane?

**Klucz:** 1 wzór, typ, struktura, właściwości, BHP itd.; 2 kowalencyjne spolaryzowane; 3 nie; 4 sieć jonowa; 5 tak; 6 wspólny rekord

**Interpretacja:**
- **0–2/6** → zacznij od rdzenia lekcji i wróć do przykładów krok po kroku.
- **3–4/6** → przejdź przez rdzeń, szczególnie punkty z błędami.
- **5–6/6** → przejdź szybko do ROZUMIENIA / zadań transferowych.


**Pytanie przewodnie:** Jak zebrać wszystkie informacje o substancji w jeden spójny rekord?

## Cel

Dossier ma być jednym miejscem prawdy. Nie tworzymy osobnej tabeli H₂O dla lekcji , drugiej dla VSEPR i trzeciej dla wizualizacji.

## Minimalny rekord

```text
id
nazwa
synonimy
wzory
pierwiastki
skład atomowy
typ substancji
stan skupienia
właściwości
struktura
wiązania
geometria
polarność
typowe jony
typowe stopnie utlenienia
reakcje
warunki
BHP
zastosowania
poziomy edukacyjne
źródła/proweniencja danych
```

## Przykład: H₂O

- nazwa: woda;
- wzór: H₂O;
- skład: 2 H + 1 O;
- wiązania: kowalencyjne spolaryzowane;
- geometria: kątowa;
- dwie wolne pary na O;
- cząsteczka polarna;
- istotne wiązania wodorowe między cząsteczkami.

## Wizualizacja `V016v001`

Dossier jako dashboard:
- karta wzoru;
- atomy;
- Lewis;
- 3D;
- właściwości;
- reakcje;
- BHP;
- linki do lekcji.

Zmiana substancji aktualizuje wszystkie sekcje.

**Najważniejsza zasada:** wizualizacja jest konsumentem danych, nie ich właścicielem.


---
## WSPÓLNY TEST / TRANSFER BLOKU F — ZASTOSOWANIE W TEJ LEKCJI
## Pełny szablon dossier substancji

| Pole | Co wpisujemy | Źródło w bloku F |
|---|---|---|
| nazwa | nazwa substancji | F02/F18 |
| wzór | wzór sumaryczny/strukturalny | F12/F13 |
| skład | liczba i rodzaj atomów | F04/F12 |
| typ | pierwiastek/związek/mieszanina | F02 |
| wiązania | jonowe/kowalencyjne/metaliczne + polaryzacja | F11/F15 |
| Lewis | elektrony walencyjne i wolne pary | F13 |
| geometria | kształt i kąty, jeśli dotyczy | F14 |
| polarność | wiązania + cząsteczka | F15 |
| stan | s/l/g/aq, jeśli określony | F03/F19 |
| właściwości | mierzalne cechy i obserwacje | F03 |
| zastosowania | zastosowania potwierdzone dla substancji | F18 |
| BHP | zagrożenia i zasady pracy | F16/F19 |
| reakcje | wybrane reakcje z warunkami | F17/F19 |
| proweniencja | źródło/wersja danych | wspólny silnik |

## Pięć wypełnionych dossier

### 1. H₂O — woda
- typ: związek;
- skład: 2 H + 1 O;
- wiązania: kowalencyjne spolaryzowane;
- Lewis: O z dwiema wolnymi parami;
- geometria: kątowa, około 104,5°;
- polarność: polarna;
- ważne oddziaływania: wiązania wodorowe;
- właściwość integracyjna: wysokie znaczenie oddziaływań międzycząsteczkowych;
- BHP: substancja codzienna, ale procedury laboratoryjne nadal wymagają właściwego sprzętu.

### 2. CO₂ — dwutlenek węgla
- typ: związek;
- Lewis: O=C=O;
- geometria: liniowa, około 180°;
- wiązania C=O są polarne;
- cząsteczka jest niepolarna jako całość;
- BHP: wysokie stężenia CO₂ są niebezpieczne z powodu wypierania tlenu; doświadczenia tylko w kontrolowanych warunkach.

### 3. NaCl — chlorek sodu
- typ: związek jonowy;
- nie opisujemy go jako pojedynczej cząsteczki w krysztale;
- jednostka wzoru: Na⁺ : Cl⁻ = 1 : 1;
- budowa: sieć jonowa;
- właściwości zależą m.in. od stanu i obecności swobodnych jonów;
- BHP: typowa sól spożywcza nie jest przez to „bezwarunkowo bezpieczna” w każdym użyciu.

### 4. NH₃ — amoniak
- typ: związek cząsteczkowy;
- trzy wiązania N–H i jedna wolna para na N;
- geometria: piramidalna, około 107°;
- cząsteczka polarna;
- oddziaływania obejmują dipolowe i możliwość wiązań wodorowych;
- BHP: drażniący/toksyczny gaz — praca wyłącznie zgodnie z procedurą pracowni.

### 5. CH₄ — metan
- typ: związek cząsteczkowy;
- cztery wiązania C–H;
- geometria: tetraedryczna, około 109,5°;
- cząsteczka niepolarna w szkolnym modelu symetrii;
- gaz palny;
- BHP: unikać źródeł zapłonu i pracy poza kontrolowanym układem.

## Zadania dossier

1. Uzupełnij dossier HCl: wzór, typ wiązania, polarność, stan, BHP.
2. Uzupełnij dossier N₂: wzór Lewisa, typ wiązania, polarność.
3. Uzupełnij dossier MgO: model budowy, stosunek jonów, typ wiązania.
4. Uzupełnij dossier C₂H₅OH: wzór, grupy funkcyjne, polarność, właściwości.
5. Znajdź błąd: „CO₂ — cząsteczka polarna, bo każde C=O jest polarne”.

**Klucz skrócony:** HCl — kowalencyjne spolaryzowane, cząsteczka polarna; N₂ — kowalencyjne niespolaryzowane, liniowa cząsteczka dwuatomowa; MgO — sieć jonowa; etanol — związek cząsteczkowy z polarną grupą hydroksylową; CO₂ — niepolarna całość mimo polarnych wiązań.




---




## Ćwiczenia integracyjne F18

### A–B
1. Wypełnij dossier HCl. 2. Wypełnij dossier N₂. 3. Wypełnij dossier MgO. 4. Wypełnij dossier C₂H₅OH.

### C–D
5. Znajdź niespójność w dossier, w którym CO₂ oznaczono jako cząsteczkę polarną. 6. Uzasadnij, dlaczego NaCl nie powinien mieć pola „kąt cząsteczki”. 7. Połącz rekord H₂O z F13, F14 i F15. 8. Zaproponuj, jakie pole musi być wspólne dla wszystkich wizualizacji.

**Odpowiedzi:** 1–4 zależą od rekordu; 5) polaryzacja wiązań ≠ polarność całości; 6) sieć jonowa; 7) Lewis→geometria→polarność; 8) identyfikator i wspólne dane struktury.

## Fiszki F18 — 12

1. dossier; 2. proweniencja; 3. skład; 4. typ substancji; 5. Lewis; 6. geometria; 7. polarność; 8. właściwości; 9. BHP; 10. zastosowania; 11. reakcje; 12. rekord wspólny.

---

## WARSTWA v0.2x — dopisane do F18 (nowe względem v16)

```yaml
kod: F18
tytul: "Dossier substancji"
wymaga: "F02; F03; F06; F09; F11; F12"
poglebia: "F13–F15; N01–N07; R01–R03"
poziomy: "E8; LO-P; LO-R"
granice: "elastyczne; kontrolowane nakładanie dozwolone"
```

## 1. Cel i zakres

Dossier zbiera w jednym miejscu identyfikację, wzór, budowę, wiązania, geometrię, polarność, właściwości, reakcje, zastosowania i BHP. Dane i wnioski powinny być rozdzielone, a dane warunkowe opatrzone warunkami.

## TEST JEDNOKROTNEGO WYBORU

**Odpowiedź: C.**

## 4. Zadania prowadzone i kontrolne

1. **Rozpoznaj:** wskaż pojęcia i dane, które są potrzebne do rozwiązania problemu z tej lekcji.
2. **Zastosuj:** rozwiąż przykład standardowy, zapisując kolejne kroki zamiast tylko wynik.
3. **Wyjaśnij:** napisz, dlaczego wybrana procedura/model jest właściwy.
4. **Przenieś:** zastosuj tę samą ideę do przykładu z innej substancji lub reakcji.

### Kontrola odpowiedzi
- Czy użyłem właściwego pojęcia OWNER?
- Czy nie pomyliłem obserwacji z wnioskiem?
- Czy zachowałem skład, ładunek, jednostki i warunki?
- Czy wynik można sprawdzić niezależną metodą?

## 5. Klinika błędów

Najczęstszy błąd nie powinien być tylko poprawiony. Trzeba zapisać: **objaw błędu → przyczyna → pojęcie, którego zabrakło → poprawiona procedura → nowe zadanie transferowe**.

## 6. Mosty i dane wspólnego silnika

- **OWNER:** pełna definicja i procedura należą tutaj.
- **REF:** inne lekcje mogą używać skróconej ściągi.
- **EXPAND:** rozwinięcie dodaje nowe pytanie lub poziom, nie kopiuje definicji.
- **APPLY:** zastosowanie może pojawić się w dowolnej ścieżce dydaktycznej.
- Wzory, konfiguracje, ładunki, równania, właściwości i wizualizacje powinny korzystać ze wspólnych danych.

## 7. Checklista robocza

- [ ] teoria kompletna dla zakresu;
- [ ] przykłady prowadzone;
- [ ] przypadki graniczne;
- [ ] zadania + odpowiedzi;
- [ ] klinika błędów;
- [ ] transfer;
- [ ] E8/LO rozdzielone;
- [ ] brak niekontrolowanego dublowania;
- [ ] dane gotowe do wykorzystania przez silnik.

---

---


---

# MATERIAŁ Z ARCHIWUM — do redakcji (akapity, których nie ma w treści głównej)

## z: MASTER v15.0

# CHE.01F.18-DOSSIER-SUBSTANCJI — DOSSIER SUBSTANCJI

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

**Dominująca umiejętność:** Dossier substancji.
**Poziomy:** E8 — rdzeń · ROZUMIENIE — wyjaśniam mechanizm · AMBITNE — łączę i uzasadniam · AKADEMICKI — znam granice modelu.

1. dossier jest jednym rekordem substancji.
2. wzór, skład i właściwości muszą być spójne.
3. struktura korzysta z danych wcześniejszych lekcji.
4. geometria i polarność są częścią modelu.
5. reakcje są powiązane z substancją.
6. warunki i BHP są danymi, nie ozdobą.
7. proweniencja mówi skąd pochodzi rekord.
8. wizualizacja konsumuje rekord.
9. zmiana substancji aktualizuje wszystkie widoki.
10. H₂O jest przykładem integracyjnym.

### Diagnoza wejściowa

Bez zaglądania do wykładu odpowiedz: **co już potrafię w obszarze „Dossier substancji” i gdzie pojawia się pierwsza niepewność?** Wynik diagnozy ma wskazać fragment do powtórki, a nie być oceną końcową.

## AUDYT W1 — Perplexity, 2026-10-09 (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)

> Źródło: `chemia/plany/audyty/W1_perplexity_F15-F21₂026-10-09.md`. Weryfikacja treści wysłanego zapisu, nie zakresu.

### Poprawki

- Dossier substancji powinno oddzielać dane obserwacyjne, modelowe i obliczeniowe.
- Nie wpisuj jednej właściwości jako absolutnej, jeśli zależy od temperatury, ciśnienia lub czystości próbki.
- Temperatura topnienia i wrzenia musi mieć podane warunki, najczęściej ciśnienie atmosferyczne.
- Rozpuszczalność zawsze zależy od temperatury i rodzaju rozpuszczalnika.
- Gęstość zależy od temperatury.
- Wartościowość, stopień utlenienia i ładunek jonu muszą być zapisane osobno.
- Właściwości substancji nie wynikają wyłącznie z jej wzoru; znaczenie ma również budowa i rodzaj oddziaływań.
- Nie utożsamiaj „substancji niebezpiecznej” z substancją, której nie wolno używać w żadnych warunkach.
- Każde doświadczenie powinno mieć ocenę ryzyka i wymagania BHP.

### Uzupełnienia

#### Szablon dossier

- nazwa;
- wzór;
- rodzaj substancji;
- pierwiastki składowe;
- budowa: cząsteczkowa, jonowa, metaliczna lub sieciowa;
- stan skupienia w określonych warunkach;
- barwa i zapach, jeśli bezpieczne;
- rozpuszczalność;
- temperatura topnienia;
- temperatura wrzenia;
- przewodnictwo;
- reaktywność;
- zastosowania;
- zagrożenia;
- zasady przechowywania;
- sposób identyfikacji;
- źródło danych;
- poziom pewności informacji.

#### Przykład: chlorek sodu

- nazwa: chlorek sodu;
- wzór: NaCl;
- rodzaj: związek jonowy;
- budowa: sieć jonów Na⁺ i Cl⁻;
- stan w temperaturze pokojowej: ciało stałe;
- rozpuszczalność: dobrze rozpuszcza się w wodzie;
- przewodnictwo: stały kryształ nie przewodzi tak jak roztwór, roztwór przewodzi dzięki jonom;
- reakcje: może uczestniczyć w reakcjach strącania;
- BHP: nie spożywać odczynników laboratoryjnych i nie mieszać nieznanych substancji.
