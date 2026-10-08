---
kod: F05
tytul: "Izotopy, jony i masa atomowa"
poziom: E8+LO
wymaga: "F04"
poglebia: "F06–F09; A01–A06"
zrodla: "MASTER v17.0; MASTER v15.0; MASTER v14.0"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"
---
# CHE.01F.05-IZOTOPY-JONY — IZOTOPY, NUKLIDY, JONY I MASA ATOMOWA

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

1. izotopy mają to samo Z, ale różne liczby neutronów
2. jon powstaje przez zmianę liczby elektronów
3. kation ma mniej elektronów niż atom obojętny
4. anion ma więcej elektronów niż atom obojętny
5. ³⁵Cl i ³⁷Cl są izotopami chloru
6. Cl⁻ ma 18 elektronów
7. masa atomowa pierwiastka jest średnią ważoną udziałów izotopów
8. ładunek jonu nie zmienia liczby protonów
9. nuklid opisują dane Z i A
10. izotop ≠ jon

### Diagnoza wejściowa

1. Co to izotop?
2. Co zmienia się przy tworzeniu jonu?
3. Ile e⁻ ma Cl⁻?
4. Czy ³⁵Cl i ³⁷Cl mają to samo Z?
5. Co oznacza masa atomowa 3**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste** chloru?
6. Czy jon zmienia liczbę protonów?

**Klucz:** 1 ten sam Z, różne neutrony; 2 elektrony; 3 18; 4 tak; 5 średnia ważona izotopów; 6 nie

**Interpretacja:**
- **0–2/6** → zacznij od rdzenia lekcji i wróć do przykładów krok po kroku.
- **3–4/6** → przejdź przez rdzeń, szczególnie punkty z błędami.
- **5–6/6** → przejdź szybko do ROZUMIENIA / zadań transferowych.


**Pytanie przewodnie:** Co może się zmienić w atomie, a co definiuje pierwiastek?

## Definicje

**Izotopy** — nuklidy tego samego pierwiastka, mające to samo Z, ale różną liczbę neutronów. 
**Nuklid** — konkretny rodzaj jądra opisany określonym Z i A. 
**Jon** — atom lub grupa atomów mająca niezerowy ładunek elektryczny. 
**Kation** — jon dodatni. 
**Anion** — jon ujemny. 
**Masa atomowa względna Ar** — wielkość związana ze średnią ważoną mas izotopów w naturalnym składzie próbki; nie jest tym samym co liczba masowa A.

## Izotopy

`¹²C`, `¹³C`, `¹⁴C` mają Z = 6. Różnią się liczbą neutronów.

Izotopy mogą mieć bardzo podobne właściwości chemiczne, ponieważ o zachowaniu chemicznym w dużej mierze decyduje konfiguracja elektronowa, ale różnice mas wpływają na część właściwości fizycznych i kinetycznych.

## Jony

Atom sodu:
`Na: 11 p, 11 e`.

Kation:
`Na⁺: 11 p, 10 e`.

Nie zmienia się liczba protonów, więc nadal jest to sód.

### Grupy wieloatomowe

Jon może składać się z wielu atomów, np. `SO₄²⁻`, `NO₃⁻`, `NH₄⁺`. Cała grupa ma wspólny ładunek.

## Masa atomowa

Nie wolno pisać:
`Ar(C) = 12`, jeśli mamy na myśli konkretny nuklid `¹²C`. Dla węgla naturalnego Ar jest wartością średnią zależną od udziałów izotopów.

## Wizualizacja `V004v001`

Trzy suwaki/tryby:
`zmień Z`, `zmień N`, `zmień e`.

Po każdej zmianie system odpowiada:
- ten sam pierwiastek / inny pierwiastek;
- izotop / nie;
- jon / atom obojętny.

To świetna wizualizacja diagnostyczna, bo pokazuje, **która liczba zmienia tożsamość pierwiastka**.

## Klinika błędów

- „Izotop ma inne Z” — nie.
- „Jon ma inne Z” — nie, jeśli powstał przez zmianę liczby elektronów.
- „A to masa atomowa” — nie, A jest liczbą całkowitą p+n dla konkretnego nuklidu.

## Checklista „Umiem…”

- [ ] rozróżniam Z i A
- [ ] rozpoznaję izotop
- [ ] liczę neutrony
- [ ] liczę elektrony jonu
- [ ] odczytuję masę atomową jako średnią ważoną
- [ ] nie mylę izotopu z jonem

## Specyfikacja `V004v002` — IZOTOPY / JONY / MASA ŚREDNIA

**Cel:** jednocześnie pokazać, co zmienia izotop, co zmienia jon i jak z udziałów izotopów powstaje masa atomowa.

**Dane wejściowe:** Z, A, liczba elektronów, lista izotopów z udziałami i masami.

**Interakcje:** suwaki neutronów i elektronów; wybór izotopu; przełącznik atom/jon; panel średniej ważonej.

**Uczeń ma zauważyć:** zmiana neutronów → izotop; zmiana elektronów → jon; zmiana Z → inny pierwiastek; masa średnia nie musi być liczbą całkowitą.

**Kontrola:** model nie może zmieniać Z przy przełączaniu izotopów.


## Doświadczenie v16 — izotopy i jony jako model

**Hipoteza:** zmiana neutronów zmienia izotop, a zmiana elektronów zmienia jon, bez zmiany Z.

**BHP:** jest to model komputerowy; nie używa się rzeczywistych źródeł promieniowania.

## Most

Skoro Z definiuje pierwiastek, możemy uporządkować wszystkie pierwiastki w układzie okresowym.


---

## — ATOM

### A. Główna ścieżka

```text
pierwiastek
→ atom
→ jądro
→ p⁺ / n⁰
→ Z / A
→ elektrony
→ atom obojętny
→ jon
→ izotop
→ konfiguracja powłokowa
```

### B. Konstruktor atomu

HTML powinien pozwalać podawać:

```text
Z
A
ładunek
```

i automatycznie wyznaczać:

```text
p⁺ = Z
n⁰ = A − Z
e⁻ = Z − q
```

Przy czym `q` należy interpretować ze znakiem:

```text
Na⁺ → q = +1 → e⁻ = 10
Cl⁻ → q = −1 → e⁻ = 18
Mg²⁺ → q = +2 → e⁻ = 10
```

### C. Tryb „zbuduj atom”

Uczeń może:

1. wybrać pierwiastek,
2. zmienić liczbę neutronów,
3. zmienić liczbę elektronów,
4. zobaczyć, czy otrzymał atom, izotop czy jon.

System powinien wyświetlać **co się zmieniło**:

```text
zmiana p⁺ → inny pierwiastek
zmiana n⁰ → inny izotop
zmiana e⁻ → inny jon
```

### D. Zadanie diagnostyczne

Przykład:

> Atom ma Z = 17 i A = 37. Ile ma protonów, neutronów i elektronów?

Potem wariant:

> Jon ma Z = 17, A = 37 i ładunek −1.

Uczeń powinien zauważyć, że zmienia się tylko liczba elektronów.

### E. Most do /

```text
Z
→ miejsce pierwiastka w układzie okresowym
→ liczba elektronów atomu
→ konfiguracja elektronowa
```

---


### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

> Materiał przeniesiony z warstwy migracyjnej do kanonicznej lekcji. Treść zachowana; usunięto wyłącznie powtórzenia wykazane w audycie.

#### JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

Ta lekcja jest zbudowana tak, żeby **twój mózg sam chciał zapamiętywać**. Zasady:

1. **Nie czytaj biernie.** Po każdym akapicie zatrzymaj się i odpowiedz sobie w myśli: „Co ja z tego zapamiętam?”.
2. **Najpierw próbuj, potem patrz na odpowiedź.** Błąd popełniony przed nauką jest bezcenny — twój mózg zapamiętuje go lepiej niż 10 poprawnych przykładów.
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień. Nawet 5 minut wystarczy.
4. **Mów na głos.** Chemia wchodzi przez usta, nie przez oczy. Czytaj wzory na głos: „Al-dwa-O-trzy”.
5. **Rysuj.** Nawet brzydko. Atom, jon, krzyżowanie — ręka pamięta lepiej niż wzrok.
6. **Łap moment „aha!”** — to sygnał, że mózg właśnie zapisał trwale. Zatrzymaj się wtedy i powiedz sobie, co zrozumiałeś.

**Zasada 80/20:** 20% tej lekcji daje 80% efektu. Te 20% to: **wartościowość, wzory, bilansowanie i typy reakcji**. Reszta to tło.

**Uwaga o mnemonikach:** 
**Rdzeniowe (warto zapamiętać):** 
1. Z = protony; A = protony + neutrony 
2. Kation oddał, anion przyjął 
3. W–K–S–K 
4. Współczynniki tak, indeksy nie 
5. Kwas do wody 

Reszta skojarzeń (w tym żarty) jest **opcjonalna** — nie ucz się ich wszystkich.

---

<!-- źródłowy fragment: ## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU); dopasowanie: :3, J09:2, :2, :2 -->

#### 0.5. WIELKA MAPA SKOJARZEŃ (PRZECZYTAJ RAZ, ZAPAMIĘTASZ NA ZAWSZE)

## 0.5. WIELKA MAPA SKOJARZEŃ (PRZECZYTAJ RAZ, ZAPAMIĘTASZ NA ZAWSZE)

Ta sekcja to **hak pamięciowy** — przeczytaj ją raz, wróć do niej po tygodniu. Działa jak „folder” w mózgu, do którego wkładasz resztę wiedzy.

**Wyobraź sobie warsztat chemika:**

- **Atom** = pojedyncze narzędzie na stole (protony i neutrony w pudełku — jądrze — a elektrony krążą jak muchy wokół lampy).
- **Jon** = to samo narzędzie, ale naładowane elektrycznie (kation oddał elektron, anion przyjął).
- **Układ okresowy** = tablica narzędzi w warsztacie, ułożona według **rosnącej liczby atomowej Z**. Każdy pierwiastek ma swoje stałe miejsce, a jego izotopy mogą mieć różne liczby masowe A.
- **Wartościowość** = liczba wiązań, którymi atom łączy się z innymi atomami (H ma 1, O ma 2, Al ma 3, C ma 4). Wiązanie podwójne liczymy jako dwa, potrójne jako trzy.
- **Wzór sumaryczny** = „uścisk dłoni” między atomami — liczba wiązań po obu stronach musi się zgadzać.
- **Wzór strukturalny** = rysunek „kto z kim trzyma się za ręce” (kreski zamiast indeksów).
- **Wzór elektronowy** = to samo, ale z kropkami zamiast kresek — widać elektrony walencyjne.
- **Wiązanie jonowe** = atomy tworzą jony dodatnie i ujemne wskutek przekazania elektronu lub elektronów; następnie przeciwne ładunki się przyciągają. Najczęściej dotyczy to połączenia metalu z niemetalem.
- **Wiązanie kowalencyjne** = dwa atomy uwspólniają elektrony (niemetal + niemetal).
- **Wiązanie metaliczne** = dodatnie jony metalu zanurzone w „morzu elektronów”.
- **Równanie reakcji** = przepis kucharski: substraty → produkty; nic nie znika, wszystko się przekształca.

**Zapamiętaj to jedno zdanie:** 
„Atom może tworzyć wiązania. Wartościowość mówi, iloma symbolicznymi «rękami» atom łączy się z innymi atomami; wzór pokazuje, czy liczba tych «rąk» się zgadza.”

---

<!-- źródłowy fragment: ## 0.5. WIELKA MAPA SKOJARZEŃ (PRZECZYTAJ RAZ, ZAPAMIĘTASZ NA ZAWSZE); dopasowanie: :5, :3, :2, K08:1 -->

#### Budowa atomu i jon

- Z = liczba protonów (= liczba elektronów w **atomie obojętnym**) 
- A = p⁺ + n⁰ (liczba całkowita dla danego **izotopu**) 
- n⁰ = A − Z 

**Liczba protonów definiuje pierwiastek.** Każdy atom mający 8 protonów jest atomem tlenu, a każdy atom mający 17 protonów jest atomem chloru. Jon może mieć inną liczbę elektronów, a izotop — inną liczbę neutronów, ale liczba protonów decyduje o tym, jaki to pierwiastek.

**Uwaga:** nie myl liczby masowej A z masą atomową z układu okresowego (ta druga jest zwykle liczbą dziesiętną — uwzględnia mieszaninę izotopów).

**Jon** — atom albo grupa atomów mająca ładunek elektryczny (oddał lub przyjął elektrony). 
· **Kation**: ładunek dodatni (oddał e⁻), np. Na⁺ (11 p, 10 e). 
· **Anion**: ładunek ujemny (przyjął e⁻), np. Cl⁻ (17 p, 18 e), S²⁻ (16 p, 18 e), SO₄²⁻.

Dla jonu liczba elektronów **nie** jest równa liczbie protonów.

**Algorytm:** Z = p⁺; atom obojętny e⁻ = Z; kation: odejmij e⁻; anion: dodaj e⁻.

**Reguła logiczna (główna):** 
**Kation oddał, anion przyjął.** 
· Kation → mniej elektronów niż protonów → ładunek dodatni. 
· Anion → więcej elektronów niż protonów → ładunek ujemny.

<!-- źródłowy fragment: ### Budowa atomu i jon; dopasowanie: :4, :3, J09:1, :1 -->

#### Masa cząsteczkowa i masa jednostki wzoru

**Uwaga terminologiczna (ważna):** 
Związki **kowalencyjne** tworzą odrębne cząsteczki (H₂O, CO₂, CH₄) — mówimy o **masie cząsteczkowej**. 
Związki **jonowe** tworzą sieć jonową (NaCl, MgO, CaCl₂) — poprawniej mówimy o **masie jednostki wzoru** (suma mas atomowych we wzorze jednostki). 

W szkole często używa się skrótowo „masa cząsteczkowa” także dla soli — pamiętaj jednak o różnicy.

**Definicja:** suma mas atomowych wszystkich atomów we wzorze. 
Np. H₂O: 2·1 u + 16 u = 18 u (masa cząsteczkowa). 
NaCl: 23 u + 35,5 u = 5**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste** (masa jednostki wzoru). 

**Masa atomowa** — średnia ważona mas izotopów (liczba dziesiętna z układu okresowego). 
**Liczba masowa A** — liczba całkowita dla konkretnego izotopu.

**Cztery pojęcia — cztery różne rzeczy:**

| Pojęcie | Co to jest | Przykład |
|---------|------------|----------|
| Liczba masowa A | protony + neutrony (izotop) | ¹⁶O → A = 16 |
| Masa atomowa | średnia ważona izotopów | O → 16,00 u |
| Masa cząsteczkowa | suma mas atomowych (związki kowalencyjne) | H₂O → 18 u |
| Masa jednostki wzoru | suma mas atomowych (związki jonowe) | NaCl → 5**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste** |

---

<!-- źródłowy fragment: ### Masa cząsteczkowa i masa jednostki wzoru; dopasowanie: :4, J03:1, :1, :1 -->

#### 4. DIAGNOZA (test wstępny)

## 4. DIAGNOZA (test wstępny)

Odpowiedz **najpierw sam**, potem sprawdź. Błąd teraz = zysk później.

1. Ile protonów, neutronów i elektronów ma atom ²³Na? 
2. W której grupie (system 1–18) i okresie znajduje się chlor? 
3. Jaka jest wartościowość tlenu i wapnia? 
4. Zapisz wzór chlorku magnezu. 
5. Ile elektronów ma jon Al³⁺? 
6. Dlaczego zapisujemy Ca(OH)₂, a nie CaOH₂?

**Odpowiedzi:** 
1. 11 p, 12 n, 11 e 
2. grupa 17, okres 3 
3. O(II), Ca(II) 
4. MgCl₂ 
5. 10 elektronów (13 − 3) 
6. Ponieważ indeks 2 ma dotyczyć **całej grupy OH**, czyli zarówno O, jak i H. Bez nawiasu indeks „2” przykleiłby się tylko do H.

**Jeśli 5/6 lub więcej:** możesz przyspieszyć przez sekcje 5.4–5.7. 
**Jeśli mniej:** przejdź całą lekcję spokojnie, rozdział po rozdziale.

---

<!-- źródłowy fragment: ## 4. DIAGNOZA (test wstępny); dopasowanie: :3, :2, :2, K08:1 -->

#### 5.2. Budowa atomu, izotopy, jony

| Cząstka | Ładunek | Masa (ok.) | Miejsce |
|---------|---------|------------|---------|
| Proton p⁺ | +1 | 1 u | jądro |
| Neutron n⁰ | 0 | 1 u | jądro |
| Elektron e⁻ | −1 | ~1/1836 u | powłoki |

**Wzory:** Z = p⁺; w atomie obojętnym Z = e⁻; A = p⁺ + n⁰; n⁰ = A − Z.

**Liczba protonów definiuje pierwiastek.** 
Każdy atom mający 8 protonów jest atomem tlenu, a każdy atom mający 17 protonów jest atomem chloru. Jon może mieć inną liczbę elektronów, a izotop — inną liczbę neutronów, ale **liczba protonów decyduje o tym, jaki to pierwiastek**.

**Hak pamięciowy:** 
**Z = protony; A = protony + neutrony.** 
n⁰ = A − Z → „z całości odejmij protony, zostaną neutrony”.

**Uwaga (pułapka):** liczba masowa A jest liczbą całkowitą dla konkretnego **izotopu**. Nie należy jej mylić z **masą atomową** z układu okresowego (zwykle liczba dziesiętna — uwzględnia naturalną mieszaninę izotopów).

**Izotopy** — odmiany tego samego pierwiastka o tej samej liczbie protonów, różnej liczbie neutronów (i liczbie masowej). 
Przykłady: ¹H, ²H, ³H; ¹²C, ¹³C, ¹⁴C.

**Izotopy atomów obojętnych** mają też tyle samo elektronów; różnią się wyłącznie liczbą neutronów, a więc liczbą masową. To pomaga odróżnić izotopy od jonów — jon zmienia liczbę elektronów, izotop liczbę neutronów.

**Jon** — atom albo **grupa atomów** mająca ładunek elektryczny, ponieważ oddała lub przyjęła elektrony. 
· **Kation** — ładunek dodatni (oddał elektrony), np. Na⁺: 11 p, 10 e; Al³⁺: 13 p, 10 e. 
· **Anion** — ładunek ujemny (przyjął elektrony), np. Cl⁻: 17 p, 18 e; S²⁻: 16 p, 18 e; SO₄²⁻ (wieloatomowy). 

Dla jonu liczba elektronów **nie** jest równa liczbie protonów.

**Algorytm liczenia elektronów w jonie:**
1. Odczytaj Z — to liczba protonów.
2. Dla atomu obojętnego: e⁻ = Z.
3. Przy ładunku **dodatnim** odejmij elektrony (np. Al³⁺: 13 − 3 = 10 e⁻).
4. Przy ładunku **ujemnym** dodaj elektrony (np. S²⁻: 16 + 2 = 18 e⁻).

**Przykład:** S²⁻ ma Z = 16 → 16 protonów i 16 + 2 = 18 elektronów.

**Kontrola ładunku:** 
ładunek jonu = p⁺ − e⁻ 
· Na⁺: 11 − 10 = +1 
· Cl⁻: 17 − 18 = −1 
· O²⁻: 8 − 10 = −2 

**Reguła logiczna (główna):** 
**Kation oddał, anion przyjął.**

**Hak dodatkowy (dla chętnych, żartobliwy, opcjonalny):** 
„Kation = kot ma plusa; anion = anioł ma minus” — **żart, nie reguła**. Główna reguła: kation oddał, anion przyjął.

<!-- źródłowy fragment: ### 5.2. Budowa atomu, izotopy, jony; dopasowanie: :5, :3, J09:1, :1 -->

#### 5.8. JAK WYBRAĆ STRATEGIĘ? (ramka decyzyjna)

**Masz atom lub jon?** 
1. Odczytaj Z. 
2. Ustal liczbę protonów. 
3. Dla atomu: e⁻ = Z. 
4. Dla jonu: odejmij lub dodaj elektrony zgodnie z ładunkiem. 
5. Liczbę neutronów oblicz: n⁰ = A − Z.

**Masz ułożyć wzór?** 
1. Zapisz symbole lub grupę atomów. 
2. Dopisz wartościowości albo ładunki. 
3. Zastosuj W–K–S–K. 
4. Sprawdź nawias i indeks 1.

**Masz zbilansować równanie?** 
1. Nie zmieniaj indeksów. 
2. Policz atomy. 
3. Ustaw współczynniki. 
4. Sprawdź ponownie wszystkie pierwiastki.

**Masz narysować wzór strukturalny?** 
1. Ustal wartościowość każdego atomu. 
2. Połącz atomy kreskami (wiązania). 
3. Sprawdź, czy każdy atom ma właściwą liczbę wiązań. 
4. Dla wzoru elektronowego zamień kreski na pary kropek.

---

<!-- źródłowy fragment: ### 5.8. JAK WYBRAĆ STRATEGIĘ? (ramka decyzyjna); dopasowanie: :3, :2, :2, :2 -->

#### 6. PUŁAPKI + STOP przed oddaniem

## 6. PUŁAPKI + STOP przed oddaniem

| Błąd | Dlaczego to błąd | Jak poprawić |
|------|------------------|--------------|
| Zmiana indeksów przy bilansowaniu | indeks należy do wzoru | zmieniamy tylko współczynniki |
| FeO₃ zamiast Fe₂O₃ | brak krzyżowania / kontroli | Feᴵᴵᴵ + Oᴵᴵ → Fe₂O₃; 2·3 = 3·2 |
| Brak wartościowości Fe/Cu w nazwie | zmienna wartościowość | tlenek żelaza(III), chlorek miedzi(II) |
| Mylenie Z z A | różne pojęcia | Z = p⁺; A = p⁺+n⁰ |
| Mylenie A z masą atomową z układu | A — izotop (całkowita); masa atomowa — średnia | patrz sekcja atom |
| Brak nawiasu przy grupie | indeks dotyczyłby tylko ostatniego atomu | Ca(OH)₂, nie CaOH₂ |
| „Wartościowość zawsze = nr grupy” | grupy 15–17 mają warianty | sprawdzać kontekst |
| „Wymiana” bez rozróżnienia | wypieranie ≠ podwójna wymiana | nazwać precyzyjnie |
| „Jest O₂ → to spalanie” | nie zawsze wystarcza do klasyfikacji | analizuj substraty i produkty |
| Utożsamianie wartościowości z ładunkiem jonu | to różne pojęcia | patrz ramka „Wartościowość i ładunek — podobne, ale różne” |
| Mylenie masy atomowej z cząsteczkową | masa atomowa — jeden atom; cząsteczkowa — cała cząsteczka | patrz sekcja masa cząsteczkowa |

**STOP — sprawdź przed oddaniem zadania**

- Czy odróżniam Z od A? 
- Czy w atomie obojętnym liczba protonów jest równa liczbie elektronów? 
- Czy zapisałem wzór w najprostszym stosunku atomów? 
- Czy użyłem nawiasu przy powtarzającej się grupie atomów? 
- Czy podczas bilansowania zmieniałem tylko współczynniki, a nie indeksy? 
- Czy po obu stronach równania liczba atomów każdego pierwiastka jest taka sama? 

**Mnemonic STOP (opcjonalny):** 
**„Z–A–N–W–I–A”** → „Zawsze Analizuj Nawiasy Współczynniki Indeksy Atomy”.

---

<!-- źródłowy fragment: ## 6. PUŁAPKI + STOP przed oddaniem; dopasowanie: :3, :2, :2, :2 -->

#### Poziom egzaminacyjny [DO UTRWALENIA]

5. Atom fosforu P ma 15 protonów i 16 neutronów. 
 a) Podaj symbol pierwiastka oraz liczbę masową. 
 b) Zapisz wzór tlenku tego pierwiastka, zakładając wartościowość V. 
 c) Ustal, ile atomów fosforu i tlenu zawiera wzór P₂O₅. 
 
> **Dwie poprawne perspektywy:** 
> · W zadaniach szkolnych zapisujemy zwykle **P₂O₅** — najprostszy stosunek atomów 2:5, ułatwia obliczanie wartościowości. 
> · Rzeczywista cząsteczka tlenku fosforu(V) ma wzór **P₄O₁₀**. 
> Na sprawdzianie stosuj zapis wymagany przez nauczyciela lub podręcznik.


6. Ułóż wzory sumaryczne i nazwij: a) glin + tlen, b) magnez + chlor, c) węgiel + tlen (tlenek), d) żelazo(II) + siarka.

7. Zbilansuj i określ **typ** reakcji: 
 a) K + H₂O → KOH + H₂ 
 b) CaCO₃ → CaO + CO₂ 
 c) Zn + CuSO₄ → ZnSO₄ + Cu

**Odpowiedzi do 5–7:** 
5. a) ³¹P b) P₂O₅ c) 2 atomy P, 5 atomów O 
6. a) Al₂O₃ – tlenek glinu b) MgCl₂ – chlorek magnezu c) CO₂ – tlenek węgla(IV) d) FeS – siarczek żelaza(II) 
7. a) **2K + 2H₂O → 2KOH + H₂** — wypieranie. 
 *(Uwaga BHP: potas reaguje z wodą bardzo gwałtownie. To przykład do analizy równania, nie do samodzielnego doświadczenia.)* 
 b) **CaCO₃ → CaO + CO₂** — analiza (rozkład). 
 c) **Zn + CuSO₄ → ZnSO₄ + Cu** — wypieranie.

<!-- źródłowy fragment: ### Poziom egzaminacyjny [DO UTRWALENIA]; dopasowanie: :3, N01:1, LAB05:1, LAB00:1 -->

#### Poziom ambitny [DLA CHĘTNYCH]

8. Dlaczego w nazwie tlenku żelaza podajemy wartościowość, a w tlenku wapnia zwykle nie? 
9. Zapisz wzory tlenków siarki odpowiadające wartościowościom, które siarka przyjmuje w H₂S, SO₂ i SO₃. Podaj też nazwy systematyczne tych tlenków. 
10. Zbilansuj: 
 a) C₂H₆ + O₂ → CO₂ + H₂O 
 b) Fe₂O₃ + CO → Fe + CO₂ 
11. Atom: 20 e⁻, A = 40. Jaki pierwiastek? Czy izotop wapnia? Podaj liczbę protonów i neutronów.

**Odpowiedzi do 8–11:** 
8. Fe ma II i III; Ca prawie zawsze II. 
9. H₂S → wartościowość S = II → tlenek: SO (tlenek siarki(II)); SO₂ → tlenek siarki(IV); SO₃ → tlenek siarki(VI). 
10. a) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O 
 b) Fe₂O₃ + 3CO → 2Fe + 3CO₂ 
11. Z = 20 → Ca; tak, ⁴⁰Ca; 20 p, 20 n.

<!-- źródłowy fragment: ### Poziom ambitny [DLA CHĘTNYCH]; dopasowanie: :4, N01:1, LAB05:1, J09:1 -->

#### Zadanie „wybierz regułę” (trening strategii)

Dla każdego przykładu najpierw wybierz dział: **atom / jon / wartościowość / wzór / wiązanie / równanie**. Dopiero potem rozwiąż.

1. Ile elektronów ma O²⁻? → …
2. Podaj wzór tlenku glinu. → …
3. 2Mg + O₂ → 2MgO — co sprawdzić? → …
4. Jaki typ wiązania występuje w Cl₂? → …
5. Ile neutronów ma ³⁷Cl? → …

**Odpowiedzi (działy):** 1. jon 2. wartościowość + wzór 3. równanie (bilans) 4. wiązanie 5. atom/izotop

<!-- źródłowy fragment: ### Zadanie „wybierz regułę” (trening strategii); dopasowanie: :3, N01:1, LAB05:1, J09:1 -->

#### Zadanie „prawda czy fałsz”

Dla każdego zdania: P / F. Jeśli F — popraw.

1. Liczba atomowa mówi, ile neutronów ma atom.
2. Jon dodatni ma więcej protonów niż elektronów.
3. W równaniu chemicznym wolno zmieniać współczynniki, ale nie indeksy.
4. CaOH₂ i Ca(OH)₂ oznaczają to samo.
5. W związku CO₂ węgiel ma wartościowość IV.
6. NaCl jest zbudowany z sieci jonów, a nie z pojedynczych cząsteczek.

**Odpowiedzi:** 
1. F — Z = liczba protonów. 
2. P (p⁺ > e⁻). 
3. P. 
4. F — CaOH₂ nie pokazuje grupy OH; poprawnie Ca(OH)₂. 
5. P. 
6. P.

<!-- źródłowy fragment: ### Zadanie „prawda czy fałsz”; dopasowanie: :3, J09:1, :1, :1 -->

#### 10. ŚCIĄGA PRZED TESTEM

## 10. ŚCIĄGA PRZED TESTEM

- H I, O II, Na/K I, Mg/Ca II, Al III, C IV, N/P III·V, S II·IV·VI, Cl I, Fe II/III, Cu I/II, Sn II/IV, Pb II/IV, Mn II/IV/VII, Cr II/III/VI. 
- W–K–S–K; kontrola łącznej wartościowości. 
- Z, A, izotopy; atom ≠ jon; protony definiują pierwiastek. 
- Jonowe vs kowalencyjne vs metaliczne. 
- Typy: synteza, analiza, **wypieranie**, **podwójna wymiana**, spalanie. 
- Bilans: współczynniki, nie indeksy. Prawo zachowania masy. 
- Nawias przy powtarzającej się grupie atomów. 
- **Wartościowość ≠ ładunek jonu.** 
- **A ≠ masa atomowa ≠ masa cząsteczkowa.** 
- Egzo- vs endotermiczne. 
- Elektroujemność rośnie w prawo i w górę.

---

<!-- źródłowy fragment: ## 10. ŚCIĄGA PRZED TESTEM; dopasowanie: :3, :2, :2, :2 -->

#### 11. FISZKI

## 11. FISZKI

Format: **przód → tył (+ miniwskazówka)**

| Przód | Tył | Wskazówka |
|-------|-----|-----------|
| Co oznacza liczba atomowa Z? | Liczbę protonów; w atomie obojętnym także liczbę elektronów | „Z jak zamek — protony” |
| Co oznacza liczba masowa A? | Sumę protonów i neutronów (dla danego izotopu) | „A jak całość” |
| Co definiuje pierwiastek? | Liczba protonów w jądrze | „Protony to identyfikator” |
| Jak odróżnić atom od jonu? | Atom: p⁺ = e⁻; jon: p⁺ ≠ e⁻ | „Jon ma nierównowagę” |
| Jaka jest wartościowość H, O, Al? | H(I), O(II), Al(III) | „H–I, O–II, Al–III” |
| Co robisz z indeksem 1? | Nie zapisujesz go | „Jedynka jest niewidzialna” |
| Co robisz z indeksem podczas bilansowania? | Nic — indeksów nie wolno zmieniać | „Współczynniki tak, indeksy nie” |
| Dlaczego Ca(OH)₂ ma nawias? | Bo grupa OH powtarza się dwa razy | „Nawias to pudełko na grupę” |
| Jak rozpoznać wiązanie jonowe? | Najczęściej metal + niemetal; powstają jony | „Metal oddaje, niemetal bierze” |
| Czym różni się wartościowość od ładunku jonu? | Wartościowość = liczba wiązań; ładunek = nadmiar/niedobór elektronów | „To pokrewne, ale różne pojęcia” |
| Co oznacza strzałka w równaniu? | „Reaguje, tworząc” — od substratów do produktów | „Strzałka to kierunek gotowania” |
| Wzór tlenku glinu | Al₂O₃ | „Al-III, O-II → 2·3 = 3·2” |
| Wzór chlorku wapnia | CaCl₂ | „Ca-II, Cl-I → CaCl₂” |
| Wzór tlenku żelaza(III) | Fe₂O₃ | „Fe-III, O-II → 2·3 = 3·2” |
| Typ: Zn + CuSO₄ → ZnSO₄ + Cu | Wypieranie | „Cynk wypycha miedź” |
| Typ: CaCO₃ → CaO + CO₂ | Analiza (rozkład) | „Rozbiórka” |
| Siarka – możliwe wartościowości | II, IV, VI | „Parzyste — 2, 4, 6” |
| Ile elektronów ma jon Na⁺? | 10 | „11 − 1 = 10” |
| Ile neutronów ma ²³Na? | 12 | „23 − 11 = 12” |
| Jaki typ reakcji: CH₄ + 2O₂ → CO₂ + 2H₂O? | Spalanie | „Z tlenem, wydziela ciepło” |
| Jaki typ reakcji: AgNO₃ + NaCl → AgCl↓ + NaNO₃? | Podwójna wymiana | „Zamiana partnerów” |
| Co to izotopy? | Ten sam Z, różny A; ta sama liczba protonów i elektronów | „Rodzeństwo — ten sam rodzic, inna waga” |
| Co to izobary? | Ten sam A, różny Z | „Ta sama waga, inny rodzic” |
| Wzór kwasu siarkowego(VI) | H₂SO₄ | „H-I, SO₄-II → H₂SO₄” |
| Wzór wodorotlenku sodu | NaOH | „Na-I, OH-I → NaOH” |
| Wzór azotanu(V) sodu | NaNO₃ | „Na-I, NO₃-I → NaNO₃” |
| Wzór węglanu wapnia | CaCO₃ | „Ca-II, CO₃-II → CaCO₃” |
| Wzór fosforanu(V) wapnia | Ca₃(PO₄)₂ | „Ca-II, PO₄-III → Ca₃(PO₄)₂” |
| Co to elektroujemność? | Zdolność atomu do przyciągania elektronów w wiązaniu | „Kto silniejszy, ten ciągnie” |
| Co to wiązanie metaliczne? | Dodatnie jony w morzu elektronów | „Metale przewodzą” |
| Co to reakcja egzotermiczna? | Wydziela ciepło | „Exo = na zewnątrz” |
| Co to reakcja endotermiczna? | Pochłania ciepło | „Endo = do wewnątrz” |
| Co to masa cząsteczkowa? | Suma mas atomowych w cząsteczce | „Dodaj wszystkie atomy” |
| Co to alotropia? | Ten sam pierwiastek w różnych postaciach | „O₂ i O₃” |
| Co to jony widzowe? | Jony niebiorące udziału w reakcji | „Na⁺, NO₃⁻” |
| Wzór strukturalny wody | H–O–H | „Kreski zamiast indeksów” |
| Wzór elektronowy HCl | H:Cl | „Kropki zamiast kresek” |
| Co to reguła oktetu? | Dążenie do 8 elektronów walencyjnych | „Oktet = 8” |
| Co to dublet? | Dążenie wodoru do 2 elektronów | „H ma 2” |
| Ile elektronów walencyjnych ma S? | 6 | „Grupa 16 → 6” |
| Ile elektronów walencyjnych ma Al? | 3 | „Grupa 13 → 3” |
| Jaki ładunek ma jon S²⁻? | −2 | „Przyjął 2 elektrony” |
| Ile protonów ma atom ³⁷Cl? | 17 | „Z = 17” |
| Ile neutronów ma ³⁷Cl? | 20 | „37 − 17 = 20” |

---

<!-- źródłowy fragment: ## 11. FISZKI; dopasowanie: :5, LAB12:2, J09:2, :2 -->

#### Mapa myśli: ATOM

```
ATOM
├── JĄDRO
│ ├── Protony (p⁺) — Z — dodatnie — definiują pierwiastek
│ └── Neutrony (n⁰) — A − Z — obojętne
└── POWŁOKI
 └── Elektrony (e⁻) — ujemne — w atomie = Z
```

<!-- źródłowy fragment: ### Mapa myśli: ATOM; dopasowanie: :4, :1, :1, A01:1 -->

#### Definicje jednym zdaniem (do szybkiego powtórzenia)

## Definicje jednym zdaniem (do szybkiego powtórzenia)

| Pojęcie | Definicja |
|---------|-----------|
| Atom | Elektrycznie obojętna cząstka pierwiastka złożona z jądra i elektronów. |
| Jon | Atom lub grupa atomów mająca ładunek, ponieważ oddała albo przyjęła elektrony. |
| Izotopy | Atomy tego samego pierwiastka: tyle samo protonów, różna liczba neutronów. |
| Liczba atomowa Z | Liczba protonów; określa, jaki to pierwiastek. |
| Liczba masowa A | Suma protonów i neutronów w konkretnym izotopie. |
| Wartościowość | Szkolna informacja, ile wiązań tworzy atom w danym związku. |
| Indeks dolny | Liczba atomów danego pierwiastka lub grupy w jednym wzorze. |
| Współczynnik | Liczba całych cząsteczek albo jednostek wzoru w równaniu. |
| Substraty | Substancje, które reagują (po lewej stronie strzałki). |
| Produkty | Substancje powstające w reakcji (po prawej stronie strzałki). |

---

<!-- źródłowy fragment: ## Definicje jednym zdaniem (do szybkiego powtórzenia); dopasowanie: :5, :2, REV00:1, K08:1 -->

#### DODATEK B: SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

## DODATEK B: SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WARTOŚCIOWOŚCI:
H I | O II | Na K I | Mg Ca II | Al III | C IV
N P III/V | S II/IV/VI | Cl I | Fe II/III | Cu I/II
Sn II/IV | Pb II/IV | Mn II/IV/VII | Cr II/III/VI

WZORY:
W–K–S–K: Wartościowości → Krzyżowanie → Skracanie → Kontrola
Sumaryczny | Strukturalny | Elektronowy (kropkowy)

ATOM:
Z = p⁺ | A = p⁺ + n⁰ | n⁰ = A − Z
Protony definiują pierwiastek.
Atom: p⁺ = e⁻ | Jon: p⁺ ≠ e⁻

JONY:
Kation oddał (+) | Anion przyjął (−)

WARTOŚCIOWOŚĆ vs ŁADUNEK:
W szkolnym ujęciu wartościowość opisuje liczbę wiązań tworzonych przez atom; nie jest synonimem ładunku jonu ani stopnia utlenienia (np. Ca ma typowo wartościowość II, Cl — I).
Ładunek = nadmiar/niedobór elektronów (np. Ca²⁺, Cl⁻)
To pokrewne, ale RÓŻNE pojęcia.

WIĄZANIA:
Jonowe | Kowalencyjne | Metaliczne
Metal oddaje, niemetal bierze; niemetale się dzielą;
metale tworzą morze elektronów.

ELEKTROUJEMNOŚĆ:
Rośnie w prawo i ku górze. Największą ma fluor (F); wśród wymienionych dalej: O > Cl > N.

TYPY REAKCJI:
Synteza | Analiza | Wypieranie | Podwójna wymiana | Spalanie

REAKCJE:
Egzotermiczne (wydzielają ciepło) | Endotermiczne (pochłaniają ciepło)

BILANS:
Współczynniki tak, indeksy nie!
Prawo zachowania masy.
Warunki reakcji nad strzałką: Δ (ogrzewanie), katalizator.

MASA:
A (izotop, całkowita) ≠ masa atomowa (średnia, dziesiętna)
≠ masa cząsteczkowa (suma)

ALOTROPIA:
O₂ / O₃; diament / grafit; fosfor biały / czerwony

BHP:
Kwas → do wody.
Zapach → wachluj.
Kontakt → płucz wodą.
```

---

<!-- źródłowy fragment: ## DODATEK B: SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU); dopasowanie: :3, LAB12:2, J09:2, :2 -->

#### E.2. Masa atomowa jako średnia ważona

Chlor: 3**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste**. Mieszanina izotopów:
- ³⁵Cl — 75,77%, masa 34,969 u
- ³⁷Cl — 24,23%, masa 3**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste**
- M = 0,7577·34,969 + 0,2423·36,966 ≈ 3**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste**

<!-- źródłowy fragment: ### E.2. Masa atomowa jako średnia ważona; dopasowanie: :2, :1 -->

#### Ściąga 80/20

- Pierwiastek / związek / mieszanina — nie mylić.
- Atom: Z = protony; w atomie obojętnym elektrony = Z; neutrony = A − Z (jeśli masa atomowa w zadaniu).
- Jon: kation + (mniej e⁻), anion − (więcej e⁻).
- Wartościowość → wzór: **W–K–S–K** (wartościowości, krzyżuj, skróć, kontrola).
- Równanie: współczynniki zmieniaj, **indeksów we wzorze nie**.
- Wiązanie jonowe vs kowalencyjne — hasło + 1 przykład z lekcji.

<!-- źródłowy fragment: ### Ściąga 80/20; dopasowanie: :3, K08:1, J09:1, J03:1 -->

#### Diagram atomu (ASCII)

```
 ┌──────────────┐
 │ JĄDRO │
 │ p⁺ n⁰ n⁰ │
 │ p⁺ n⁰ │
 └──────────────┘
 ╱ ╲ ╱ ╲ ╱ ╲
 e⁻ e⁻ e⁻ ← powłoki (przykład)
```

<!-- źródłowy fragment: ### Diagram atomu (ASCII); dopasowanie: :2, :1, A01:1 -->

#### KOREKTA DYDAKTYCZNA L001 (2026-09-12 — nic nie usunięto)

## KOREKTA DYDAKTYCZNA L001 (2026-09-12 — nic nie usunięto)

Treść MASTER zostaje. Precyzja + extra oznaczone.

**Atom:** najmniejsza elektrycznie obojętna cząstka pierwiastka zachowująca właściwości chemiczne (jądro + elektrony wokół jądra). Szkolnie: elektrony na powłokach. Położenie = prawdopodobieństwo w obszarze.

**Nuklid** = dane Z i liczba neutronów (²³Na). **Izotopy** = to samo Z, inne A.

**e⁻ = Z − q** (q ze znakiem): Al³⁺ → 10; S²⁻ → 18.

**Szkło:** zlewka ≠ dokładne odmierzanie (cylinder / pipeta / biureta). Etykieta + piktogramy przed pracą.

**Wartościowość ≠ numer grupy.** H szkolnie nad grupą 1; grupa 17 tylko ciekawostka.

**Dwie metody:** W–K–S–K dla MgCl₂, Al₂O₃; ładunki (suma 0) dla Ca(OH)₂, Al₂(SO₄)₃.

Jony: OH⁻ wodorotlenkowy; NO₃⁻ azotanowy(V); SO₄²⁻ siarczanowy(VI); CO₃²⁻ węglanowy; PO₄³⁻ fosforanowy(V); NH₄⁺ amonowy; HCO₃⁻ wodorowęglanowy; CH₃COO⁻ octanowy (etanianowy). MnO₄⁻, Cr₂O₇²⁻ — dodatek ambitny.

Wiązanie metal+niemetal na E8 zwykle jonowe (reguła). Kowalencyjne: H₂O, CO₂ (cząsteczki) vs diament, SiO₂ (sieci). Woda: kowalencyjne w cząsteczce, wodorowe między cząsteczkami.

Spalanie całkowite: CH₄ + 2 O₂ → CO₂ + 2 H₂O; niedobór O₂ → CO / C.

Podwójna wymiana w roztworze zwykle gdy osad, gaz lub H₂O.

Wartościowość ≠ stopień utlenienia.

2 Mg + O₂ → 2 MgO · 48 g + 32 g = 80 g.

(s)(l)(g)(aq) ↓ ↑ Δ. Masa cząsteczkowa vs masa wzoru (NaCl).

Klucze: numeracja 5–7 i 8–11. 2 KClO₃ —(Δ, MnO₂)→ 2 KCl + 3 O₂.

Ambitny dodatek (zostaje, nie obowiązek tygodnia 1): Δχ, orbitale, izobary, alotropia, trendy.

HTML: `CHE.001x.v01.00.html` (v5.4 UI + mer + widgety). Stara nazwa: `CHEMIA_L001_FUNDAMENTY.html`. MD ≥ HTML (wykład); widgety tylko w HTML.

<!-- źródłowy fragment: ## KOREKTA DYDAKTYCZNA L001 (2026-09-12 — nic nie usunięto); dopasowanie: :4, R01:2, :2, :2 -->

---

---

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 2499–3280 -->

---

---

## WARSTWA v0.2x — dopisane do F05 (nowe względem v16)

```yaml
kod: F05
tytul: "Izotopy, jony i masa atomowa"
wymaga: "F04"
poglebia: "F06–F09; A01–A06"
poziomy: "E8; LO-P; LO-R"
granice: "elastyczne; kontrolowane nakładanie dozwolone"
```

## 1. Cel i zakres

Izotopy mają to samo Z i różne A. Jon różni się liczbą elektronów. Masa atomowa jest średnią ważoną udziałów izotopów; nie utożsamiaj jej bezwarunkowo z masą pojedynczego nuklidu.

## 2. Rdzeń: trzy różne znaczenia „odmiany atomu”

Izotop, jon i średnia masa atomowa odpowiadają na różne pytania. Nie wolno ich mieszać tylko dlatego, że wszystkie dotyczą atomów.

### Izotopy

Izotopy mają **to samo Z**, czyli tę samą liczbę protonów, ale różną liczbę neutronów. Dlatego mają tożsamość tego samego pierwiastka, lecz różne liczby masowe A.

Przykład: `³⁵Cl` i `³⁷Cl` mają po 17 protonów, ale odpowiednio 18 i 20 neutronów.

### Jony

Jon powstaje, gdy liczba elektronów nie jest równa liczbie protonów. Kation ma mniej elektronów niż protonów, anion więcej.

`Mg → Mg²⁺ + 2e⁻` oznacza utratę dwóch elektronów. Nie oznacza utraty dwóch protonów.

## 2A. Masa atomowa a liczba masowa

**Liczba masowa A** jest liczbą całkowitą dotyczącą konkretnego nuklidu. **Względna masa atomowa pierwiastka** jest wielkością wynikającą z udziałów jego izotopów w badanej/naturalnej próbce. Dlatego wartość w układzie okresowym często nie jest liczbą całkowitą.

Dla dwóch izotopów o masach około 10 i 11, występujących odpowiednio w udziałach 20% i 80%, średnia wynosi około:

`0,20·10 + 0,80·11 = 10,8`

To nie jest „liczba masowa atomu 10,8”. To średnia ważona dla populacji izotopów.

## 2B. Procedura obliczania średniej izotopowej

```text
1. wypisz masy izotopów
2. zamień udziały procentowe na ułamki
3. pomnóż każdą masę przez jej udział
4. dodaj wkłady
5. sprawdź, czy wynik leży między masami izotopów
```

Jeżeli wynik wychodzi poza zakres mas izotopów, najpierw sprawdź jednostki i udziały procentowe.

## 2C. Izotop i jon mogą występować jednocześnie

To ważna granica pojęciowa. `³⁵Cl⁻` jest jednocześnie:
- konkretnym nuklidem chloru;
- izotopem chloru;
- anionem.

„Izotop” opisuje jądro względem innych odmian tego samego pierwiastka, a „jon” opisuje bilans elektronów względem protonów.

## 2D. Ćwiczenia

**1.** `⁴⁰₂₀Ca²⁺`: p = 20, n = 20, e = 18.  
**2.** `³⁹₁₉K` i `⁴¹₁₉K`: ten sam pierwiastek, różne izotopy.  
**3.** Dlaczego masa atomowa chloru nie musi wynosić 35 albo 37? Ponieważ naturalny chlor zawiera mieszaninę izotopów, a wartość tabelaryczna jest średnią ważoną.

## 2E. Klinika błędów

| Błędne zdanie | Poprawa |
|---|---|
| „Izotop to atom z ładunkiem.” | Izotop różni się liczbą neutronów. |
| „Jon dodatni ma mniej protonów.” | Ma mniej elektronów niż protonów. |
| „Masa atomowa = A.” | A dotyczy konkretnego nuklidu; masa atomowa pierwiastka może być średnią izotopową. |
| „Każdy atom pierwiastka ma identyczną masę.” | Atomy tego samego pierwiastka mogą występować jako różne izotopy. |

---


---

# MATERIAŁ Z ARCHIWUM — do redakcji (akapity, których nie ma w treści głównej)

## z: MASTER v15.0

# CHE.01F.05-IZOTOPY-JONY — IZOTOPY, NUKLIDY, JONY I MASA ATOMOWA

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

**Dominująca umiejętność:** Izotopy, nuklidy, jony i masa atomowa.
**Poziomy:** E8 — rdzeń · ROZUMIENIE — wyjaśniam mechanizm · AMBITNE — łączę i uzasadniam · AKADEMICKI — znam granice modelu.

1. izotop i jon opisują różne zmiany.
2. nuklid oznacza konkretny rodzaj jądra.
3. ładunek jonu zależy od p-e.
4. masa atomowa w układzie jest średnią ważoną izotopów.
5. liczba masowa jest liczbą całkowitą p+n.
6. anion ma więcej elektronów niż protonów.
7. kation ma mniej elektronów niż protonów.
8. zmiana neutronów nie zmienia pierwiastka.
9. zmiana protonów oznacza inny pierwiastek.
10. średnia masa nie musi być liczbą całkowitą.

### Diagnoza wejściowa

Bez zaglądania do wykładu odpowiedz: **co już potrafię w obszarze „Izotopy, nuklidy, jony i masa atomowa” i gdzie pojawia się pierwsza niepewność?** Wynik diagnozy ma wskazać fragment do powtórki, a nie być oceną końcową.

## 0.5. WIELKA MAPA SKOJARZEŃ (PRZECZYTAJ RAZ, ZAPAMIĘTASZ NA ZAWSZE)

#### Masa cząsteczkowa i masa jednostki wzoru

**Definicja:** suma mas atomowych wszystkich atomów we wzorze. 
Np. H₂O: 2·1 u + 16 u = 18 u (masa cząsteczkowa). 
NaCl: 23 u + 35,5 u = 58,5 u (masa jednostki wzoru). 

| Pojęcie | Co to jest | Przykład |
|---------|------------|----------|
| Liczba masowa A | protony + neutrony (izotop) | ¹⁶O → A = 16 |
| Masa atomowa | średnia ważona izotopów | O → 16,00 u |
| Masa cząsteczkowa | suma mas atomowych (związki kowalencyjne) | H₂O → 18 u |
| Masa jednostki wzoru | suma mas atomowych (związki jonowe) | NaCl → 58,5 u |

## DODATEK B: SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

#### E.2. Masa atomowa jako średnia ważona

Chlor: 35,45 u. Mieszanina izotopów:
- ³⁵Cl — 75,77%, masa 34,969 u
- ³⁷Cl — 24,23%, masa 36,966 u
- M = 0,7577·34,969 + 0,2423·36,966 ≈ 35,45 u

## z: MASTER v14.0

# CHE.01F.05-IZOTOPY-JONY — IZOTOPY, NUKLIDY, JONY I MASA ATOMOWA

## DODATEK B: SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WARTOŚCIOWOŚCI:
H I | O II | Na K I | Mg Ca II | Al III | C IV
N P III/V | S II/IV/VI | Cl I | Fe II/III | Cu I/II
Sn II/IV | Pb II/IV | Mn II/IV/VII | Cr II/III/VI

WZORY:
W–K–S–K: Wartościowości → Krzyżowanie → Skracanie → Kontrola
Sumaryczny | Strukturalny | Elektronowy (kropkowy)

ATOM:
Z = p⁺ | A = p⁺ + n⁰ | n⁰ = A − Z
Protony definiują pierwiastek.
Atom: p⁺ = e⁻ | Jon: p⁺ ≠ e⁻

JONY:
Kation oddał (+) | Anion przyjął (−)

WARTOŚCIOWOŚĆ vs ŁADUNEK:
Wartościowość = liczba wiązań (np. Ca(II), Cl(I))
Ładunek = nadmiar/niedobór elektronów (np. Ca²⁺, Cl⁻)
To pokrewne, ale RÓŻNE pojęcia.

WIĄZANIA:
Jonowe | Kowalencyjne | Metaliczne
Metal oddaje, niemetal bierze; niemetale się dzielą;
metale tworzą morze elektronów.

ELEKTROUJEMNOŚĆ:
Rośnie w prawo i ku górze. Największą ma fluor (F); dalej O > N > Cl.

TYPY REAKCJI:
Synteza | Analiza | Wypieranie | Podwójna wymiana | Spalanie

REAKCJE:
Egzotermiczne (wydzielają ciepło) | Endotermiczne (pochłaniają ciepło)

BILANS:
Współczynniki tak, indeksy nie!
Prawo zachowania masy.
Warunki reakcji nad strzałką: Δ (ogrzewanie), katalizator.

MASA:
A (izotop, całkowita) ≠ masa atomowa (średnia, dziesiętna)
≠ masa cząsteczkowa (suma)

ALOTROPIA:
O₂ / O₃; diament / grafit; fosfor biały / czerwony

BHP:
Kwas → do wody.
Zapach → wachluj.
Kontakt → płucz wodą.
```
