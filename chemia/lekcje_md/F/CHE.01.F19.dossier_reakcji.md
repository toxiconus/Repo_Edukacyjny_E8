---
kod: F19
tytul: "Dossier reakcji"
poziom: E8+LO
wymaga: "F16; F17"
poglebia: "N02–N08; R07–R09; X01–X09; K01–K11"
zrodla: "MASTER v17.0; MASTER v15.0"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"
---
# CHE.01F.19-DOSSIER-REAKCJI — DOSSIER REAKCJI

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

1. dossier reakcji rozdziela substraty i produkty
2. warunki są osobnym polem
3. obserwacje nie są tym samym co równanie
4. równanie musi być zbilansowane
5. energia opisuje efekt procesu, ale znak zależy od przyjętej konwencji
6. katalizator nie jest produktem reakcji
7. BHP należy do opisu doświadczenia
8. wykrywanie produktu wymaga osobnej próby/obserwacji
9. jeden rekord może zasilać próbówkę, równanie i bilans
10. stany skupienia i medium mogą być istotne

### Diagnoza wejściowa

1. Co jest substratem?
2. Co jest produktem?
3. Czy warunek to produkt?
4. Czy obserwacja jest równaniem?
5. Co sprawdza bilans?
6. Po co wykrywanie produktu?

**Klucz:** 1 przed reakcją; 2 po reakcji; 3 nie; 4 nie; 5 zachowanie; 6 identyfikacja produktu

**Interpretacja:**
- **0–2/6** → zacznij od rdzenia lekcji i wróć do przykładów krok po kroku.
- **3–4/6** → przejdź przez rdzeń, szczególnie punkty z błędami.
- **5–6/6** → przejdź szybko do ROZUMIENIA / zadań transferowych.


**Pytanie przewodnie:** Jak przechować reakcję tak, aby mogła zasilać wiele różnych widoków?

## Model

```text
id
substrates[]
products[]
coefficients[]
conditions[]
states[]
observations[]
reaction_type[]
energy[]
catalyst
medium
ionic_form
redox_data
BHP
visualization_hooks[]
```

## Dlaczego jeden model?

Ta sama reakcja może być pokazana jako:
- równanie;
- próbówka;
- bilans atomów;
- bilans ładunku;
- mapa przemiany;
- zadanie stechiometryczne;
- reakcja jonowa;
- reakcja redoks.

Jeśli każdy widok ma własny zapis, po kilku miesiącach powstają sprzeczne wersje.

## Wizualizacja `V017v001`

Zakładki:
`OBSERWACJA | RÓWNANIE | CZĄSTKI | BILANS | WARUNKI | ENERGIA | BHP`.

Wszystkie korzystają z tego samego rekordu.

## Checklista „Umiem…”

- [ ] tworzę rekord reakcji
- [ ] oddzielam warunki od obserwacji
- [ ] zapisuję równanie
- [ ] kontroluję bilans
- [ ] dodaję energię i BHP
- [ ] wskazuję próbę identyfikacji produktu

## Test jednokrotnego wyboru — 8 pytań

1. Substraty są przed reakcją.
2. Produkty są po przemianie.
3. Obserwacja to dane doświadczenia.
4. Współczynnik zmienia liczbę jednostek.
5. MnO₂ może być katalizatorem.
6. BHP należy do dossier reakcji.
7. CO₂ można wykrywać wodą wapienną.
8. Warunki są osobnym polem.

**Klucz:** 1–8 zgodnie z odpowiedziami wynikającymi z wykładu; uczeń powinien uzasadnić każdy wybór jednym zdaniem.

## Ćwiczenia integracyjne F19

1. Uzupełnij dossier spalania Mg. 2. Uzupełnij dossier CaCO₃ + HCl. 3. Uzupełnij dossier HCl + NaOH. 4. Uzupełnij dossier H₂O₂/MnO₂. 5. Oddziel obserwację od wniosku w każdym przykładzie. 6. Wskaż katalizator. 7. Zbilansuj reakcję spalania metanu. 8. Dodaj BHP do każdej procedury.

**Odpowiedzi skrócone:** 1) `2Mg+O₂→2MgO`; 2) `CaCO₃+2HCl→CaCl₂+H₂O+CO₂`; 3) `HCl+NaOH→NaCl+H₂O`; 4) `2H₂O₂→2H₂O+O₂`, MnO₂ katalizator; spalanie metanu `CH₄+2O₂→CO₂+2H₂O`.

## Fiszki F19 — 12

1. substrat; 2. produkt; 3. warunek; 4. obserwacja; 5. równanie; 6. bilans; 7. katalizator; 8. energia; 9. BHP; 10. wykrywanie produktu; 11. stan skupienia; 12. rekord reakcji.


## Most

Po użytkownik ma nie tylko wiedzę o pojedynczych pojęciach, ale spójny model danych. Następne lekcje mają wykrywać błędy i sprawdzać transfer.


---
## Pełny szablon dossier reakcji

| Pole | Treść |
|---|---|
| substraty | wzory, stany, ilości jakościowe |
| produkty | wzory i stany |
| warunki | temperatura, światło, katalizator, środowisko |
| obserwacje | wyłącznie dane doświadczalne |
| typ | np. spalanie, zobojętnianie, rozkład |
| równanie | zapis zbilansowany |
| energia | efekt energetyczny i sposób opisu |
| wykrywanie produktu | próba/obserwacja |
| BHP | zagrożenia i środki ochrony |
| wizualizacje | odwołania do wspólnych modeli |

## Cztery pełne przykłady

### A. Spalanie magnezu
**Substraty:** Mg, O₂. **Produkt:** MgO. **Obserwacja:** intensywne światło, biały produkt. **Równanie:** `2Mg + O₂ → 2MgO`. **BHP:** okulary, kontrola źródła ciepła, nie patrzeć bezpośrednio w płomień/światło.

### B. CaCO₃ + HCl
**Substraty:** węglan wapnia i kwas solny. **Obserwacja:** wydzielanie gazu. **Produkt gazowy:** CO₂. **Wykrywanie:** woda wapienna może zmętnieć. **Równanie:** `CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂`. **BHP:** okulary, ostrożna praca z kwasem.

### C. HCl + NaOH
**Substraty:** kwas i zasada w roztworze. **Obserwacja:** zmiana barwy wskaźnika i efekt cieplny zależny od warunków. **Równanie:** `HCl + NaOH → NaCl + H₂O`. **BHP:** okulary, ostrożne dozowanie roztworów.

### D. Rozkład H₂O₂ z MnO₂
**Substrat:** H₂O₂. **Katalizator:** MnO₂. **Obserwacja:** wydzielanie gazu. **Wykrywanie:** tlen może podtrzymywać spalanie/ponowne żarzenie odpowiednio przygotowanego łuczywa. **Równanie:** `2H₂O₂ → 2H₂O + O₂` (MnO₂ jako katalizator, nie jako substrat). **BHP:** okulary, kontrolowane ilości, nie zamykać gwałtownie układu.

## Zadania dossier reakcji

1. Zbuduj dossier spalania metanu: `CH₄ + O₂ → CO₂ + H₂O` i zbilansuj.
2. Zbuduj dossier `Zn + HCl → ZnCl₂ + H₂`; wskaż obserwację i BHP.
3. Zbuduj dossier rozkładu `CaCO₃` podczas ogrzewania.
4. Wskaż, które pola należą do obserwacji, a które do modelu w opisanym doświadczeniu.
5. Znajdź błąd: „MnO₂ jest produktem rozkładu H₂O₂”.


## WSPÓLNY TEST / TRANSFER BLOKU F — ZASTOSOWANIE W TEJ LEKCJI


---

---

## WARSTWA v0.2x — dopisane do F19 (nowe względem v16)

```yaml
kod: F19
tytul: "Dossier reakcji"
wymaga: "F16; F17"
poglebia: "N01–N08; R07–R09; X01–X09; K01–K11"
poziomy: "E8; LO-P; LO-R"
granice: "elastyczne; kontrolowane nakładanie dozwolone"
```

## 1. Cel i zakres

Dossier reakcji łączy substraty, warunki, obserwacje, produkty, model cząsteczkowy/jonowy, równanie, bilans, energię i BHP. To format integrujący, nie druga lekcja równoważna F17.

## TEST JEDNOKROTNEGO WYBORU

**Odpowiedź: B.**

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

# CHE.01F.19-DOSSIER-REAKCJI — DOSSIER REAKCJI

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

**Dominująca umiejętność:** Dossier reakcji.
**Poziomy:** E8 — rdzeń · ROZUMIENIE — wyjaśniam mechanizm · AMBITNE — łączę i uzasadniam · AKADEMICKI — znam granice modelu.

1. dossier reakcji opisuje proces.
2. substraty i produkty są osobnymi polami.
3. współczynniki należą do równania.
4. warunki nie są częścią wzoru substancji.
5. obserwacje oddzielamy od interpretacji.
6. bilans atomów jest kontrolą.
7. bilans ładunku dotyczy zapisu, w którym ładunki występują.
8. energia i BHP są częścią dossier.
9. jedna reakcja może zasilać wiele wizualizacji.
10. jeden rekord zapobiega sprzecznym wersjom.

### Diagnoza wejściowa

Bez zaglądania do wykładu odpowiedz: **co już potrafię w obszarze „Dossier reakcji” i gdzie pojawia się pierwsza niepewność?** Wynik diagnozy ma wskazać fragment do powtórki, a nie być oceną końcową.

## AUDYT W1 — Perplexity, 2026-10-09 (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)

> Źródło: `chemia/plany/audyty/W1_perplexity_F15-F21₂026-10-09.md`. Weryfikacja treści wysłanego zapisu, nie zakresu.

### Poprawki

- Dossier reakcji powinno zawierać warunki, a nie tylko samo równanie.
- Należy odróżnić:
  - reagenty;
  - produkty;
  - obserwacje;
  - wniosek;
  - równanie cząsteczkowe;
  - równanie jonowe;
  - warunki;
  - zagrożenia.
- Nie wolno wyciągać wniosku o produkcie wyłącznie z jednego objawu.
- Reakcja może zachodzić w kilku etapach, choć zapis szkolny przedstawia ją jednym równaniem.
- Szybkość reakcji i możliwość jej zajścia to różne kwestie.
- Katalizator przyspiesza reakcję, ale nie jest zużywany w jej bilansie stechiometrycznym.
- Wydzielanie ciepła nie oznacza, że wszystkie reakcje egzotermiczne są gwałtowne.

### Uzupełnienia

#### Szablon dossier reakcji

- nazwa reakcji;
- typ reakcji;
- substraty;
- produkty;
- równanie cząsteczkowe;
- równanie jonowe, jeśli dotyczy;
- warunki;
- obserwacje;
- próby identyfikacyjne;
- interpretacja;
- BHP;
- typowe błędy;
- zastosowanie;
- ograniczenia modelu.

#### Przykład: neutralizacja

 HCl + NaOH → NaCl + H₂O

Równanie jonowe skrócone:

 H⁺ + OH⁻ → H₂O

Obserwacja: zwykle brak osadu i gazu; roztwór może się ogrzać.

Wniosek: jony wodoru reagują z jonami wodorotlenkowymi, tworząc wodę.
