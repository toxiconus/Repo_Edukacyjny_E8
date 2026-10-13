N06 W1 **jest gotowy** (wodór + amoniak + kation amonu + kwasy a sole — 5 wykładów, 14 zadań, dostarczony na początku tej pracy, status W1 w repo). Brakującą częścią jest **N06 W2** — wykłady o **chlorowodorze HCl** i **siarkowodorze H₂S**, których Etap I nie wymaga, ale **LKO II (26.11) wymaga wprost**: rozszerzenie 1 to „wodorki niemetali: amoniaku, chlorowodoru, siarkowodoru". Domykam plik patchem — wszystkie operacje addytywne, treść W1 bez zmian:

````markdown
════════════════════════════════════════════════════════════════════
PATCH N06: W1 → W2 (7 operacji scalania; W1 bez zmian treści)
════════════════════════════════════════════════════════════════════

## OP. 1 — frontmatter: podmień trzy pola

stan: "W2 — dodano WYKŁAD 6 (chlorowodór i kwas solny) i WYKŁAD 7 (siarkowodór
i kwas siarkowodorowy) pod LKO etap II, rozszerzenie 1; zadania 15–20; 2026-10-23"

wlasciciel: "wodór (systematycznie); amoniak; kation amonu i sole amonowe;
kwasy a sole (dopisek podstawy); chlorowodór i kwas solny; siarkowodór i kwas
siarkowodorowy; zasada wypierania lotnych składników (spina metody otrzymywania
NH₃, HCl, H₂S); systematyka wodorków (warstwa LO)"

opis: "E8: wodór — otrzymywanie, właściwości, wykrywanie, BHP; amoniak i kation
amonu; kwasy a sole. LKO etap II: chlorowodór i kwas solny, siarkowodór i kwas
siarkowodorowy — pełny zestaw wodorków niemetali z porównaniem. LO/OL:
systematyka wodorków, Haber jakościowo, dysocjacja mocny/słaby. Zasila OCJ etap I
i LKO etap II."

## OP. 2 — linijka „Plan:" (nad WYKŁADEM 1): podmień na

Plan: WYKŁAD 1 — wodór · WYKŁAD 2 — amoniak · WYKŁAD 3 — kation amonu i sole
amonowe · WYKŁAD 4 — kwasy a sole · WYKŁAD 5 [LO/OL] — systematyka wodorków ·
WYKŁAD 6 — chlorowodór i kwas solny [LKO-II] · WYKŁAD 7 — siarkowodór [LKO-II] ·
KOMPENDIUM · ZADANIA + KLUCZ · QUIZ · BŁĘDY TYPOWE.

## OP. 3 — po WYKŁADZIE 5 wstaw:

---

## WYKŁAD 6 [LKO-II] — Chlorowodór HCl i kwas solny

**Ten wykład realizuje rozszerzenie 1 etapu II LKO (wodorki niemetali) i domyka
zasadę z WYKŁADU 4 (kwasy a sole).**

### 6.1 Otrzymywanie

**W laboratorium — sól + trudnolotny kwas:**

  NaCl(s) + H₂SO₄(stęż.) →(t) NaHSO₄ + HCl↑

Kwas siarkowy jest trudnolotny, HCl — lotny: gaz „ucieka" z układu i reakcja
biegnie do końca. Obserwacja: bezbarwny gaz o ostrym zapachu, **mgiełka**
w wilgotnym powietrzu. (To ta sama reakcja, którą znasz z WYKŁADU 4 w roli
„kwasu z soli" — teraz widzisz ją jako **otrzymywanie HCl**.)

**Synteza z pierwiastków (przemysł):**

  H₂ + Cl₂ →(światło) 2HCl

**◇ OLIMP:** mieszanina H₂ + Cl₂ wybucha pod wpływem światła słonecznego —
dlatego reakcję prowadzi się w kontrolowanych warunkach; to rzadki przypadek
reakcji zapalanej światłem, lubiany w zadaniach.

**Sól + sól → sól (notka pod rozszerzenie 2 etapu II):** drugi typ reakcji z
soli w roli substratu:

  NaCl + AgNO₃ → NaNO₃ + AgCl↓

biały osad chlorku srebra (nierozpuszczalny w kwasie azotowym) — podstawowy test
chlorków; pełna historia jonów na J03/J04.

### 6.2 Właściwości fizyczne

| Właściwość | Opis | Wniosek |
|---|---|---|
| wygląd, zapach | bezbarwny gaz, ostry, duszący | rozpoznanie ostrożne (machnięcie dłoni) |
| masa molowa | M = 36,5 → ok. **1,25× cięższy od powietrza** | zbieranie przez wypieranie powietrza, **zlewka dnem do DOŁU** |
| rozpuszczalność | **bardzo dobrze** — ok. 450 objętości na 1 objętość wody (0 °C) | **NIE zbieramy nad wodą** |

**⚠ Dym czy mgiełka?** HCl w wilgotnym powietrzu tworzy **mgiełkę** — drobinki
to **kropelki kwasu solnego** (HCl rozpuścił się w parze wodnej). Porównaj z
dymami NH₃ + HCl (WYKŁAD 2.5): tam drobinki **stałego NH₄Cl**. Na zawodach to
celowa pułapka słowna — rozstrzyga STAN skupienia drobin.

### 6.3 Kwas solny — gaz i roztwór to NIE to samo

| | HCl (gaz) | kwas solny (roztwór HCl w wodzie) |
|---|---|---|
| budowa | cząsteczki kowalencyjne | jony: H⁺ i Cl⁻ |
| przewodzenie prądu | nie | tak |
| odczyn | — (bez wody brak odczynu) | kwaśny: lakmus czerwienieje, fenoloftaleina bezbarwna |
| dysocjacja | — | HCl → H⁺ + Cl⁻ — **elektrolit mocny** (dysocjacja praktycznie całkowita) |

**Reakcje kwasu solnego (łańcuch kwasu — cztery typy, wszystkie już znane z
innych ról, teraz w jednym systemie):**

| Z kim | Równanie | Obserwacja |
|---|---|---|
| metal aktywniejszy od H | Zn + 2HCl → ZnCl₂ + H₂↑ | bąbelki (twoje znane H₂ z WYKŁADU 1!) |
| tlenek metalu | CuO + 2HCl → CuCl₂ + H₂O | czarny proszek znika, roztwór błękitnieje |
| wodorotlenek (zobojętnianie) | NaOH + HCl → NaCl + H₂O | bez widocznych objawów (wskaźnik!) |
| węglan | Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑ | burzenie; gaz mętni wodę wapienną |

**Wykrywanie chlorków:** AgNO₃ + HCl → **AgCl↓** (biały, gęsty, ciemnieje na
świetle) — zapowiedź analizy jakościowej (LKO etap II rozszerzenie 3, OCJ etap III).

**◇ OLIMP:** HCl rozpuszcza się tak dobrze jak NH₃ — działa też fontanna
(wodna, z lakmusem: czerwona). Para NH₃/HCl to idealne lustro: zasadowy lżejszy
vs kwaśny cięższy.

**⚠ BHP:** stężony kwas solny — paruje (pary HCl!); pracować pod wyciągiem,
okulary; rozcieńczanie: kwas do wody, nigdy odwrotnie.

### 6.4 Jedna zasada spina trzy metody (serce etapu II)

**Trudnolotny składnik wypiera lotny:**

| Lotny produkt | Równanie | Co wypiera |
|---|---|---|
| HCl | NaCl + H₂SO₄(stęż.) →(t) NaHSO₄ + HCl↑ | trudnolotny kwas siarkowy |
| NH₃ | 2NH₄Cl + Ca(OH)₂ →(t) CaCl₂ + 2NH₃↑ + 2H₂O | trudnolotna zasada (wapno gaszone) |
| H₂S | FeS + 2HCl → FeCl₂ + H₂S↑ | kwas mocny odłącza S²⁻ od Fe |

Jeśli w mieszaninie może powstać gaz — reakcja biegnie, a gaz ucieka. Ta jedna
zasada odpowiada na pytania „czy reakcja zajdzie?" dla całego bloku wodorków.

---

## WYKŁAD 7 [LKO-II] — Siarkowodór H₂S i kwas siarkowodorowy

### 7.1 Otrzymywanie — dwie reakcje w łańcuchu

**Krok 1 — synteza siarczku żelaza(II):**

  Fe + S →(t) FeS

Mieszaninę proszków podgrzewa się tylko w jednym miejscu — dalej reakcja biegnie
SAMA, z wyraźnym żarzeniem (silnie egzotermiczna). Powstaje szary, kruchy
ciało stałe — siarczek żelaza(II). Klasyczna synteza z podręcznika i klasyczne
zadanie na typ reakcji.

**Krok 2 — z siarczku:**

  FeS + 2HCl → FeCl₂ + H₂S↑

(działa też rozcieńczony H₂SO₄). **Nie używamy kwasu azotowego** — HNO₃ działa
utleniająco i nie dostaniemy H₂S (ta sama zasada co dla H₂, WYKŁAD 1.3).

**◇ OLIMP:** przemysłowo H₂S pojawia się jako zanieczyszczenie gazu ziemnego i
ropy („kwaśne złoża") — jego usuwanie to osobny przemysł; wzmianka wystarczy.

### 7.2 Właściwości fizyczne i BHP

| Właściwość | Opis | Wniosek |
|---|---|---|
| wygląd, zapach | bezbarwny gaz, **zapach zgniłych jaj** | rozpoznawalny — ALE patrz BHP |
| masa molowa | M = 34 → lekko **cięższy od powietrza** (1,17×) | wypieranie powietrza, **dnem do DOŁU** |
| rozpuszczalność | **słaba** — ok. 2,5 objętości na 1 objętość wody (0 °C) | można zbierać **także nad wodą** (jako z trzech wodorków tylko H₂S!) |

**⚠ BHP: H₂S jest bardzo toksyczny** — porównywalnie z cyjanowodorem. Zdradliwy
dodatkowo dlatego, że **zmysł węchu z czasem przestaje go wyczuwać** (adaptacja)
— „przyzwyczajenie" do zapachu bywa już objawem zatrucia. Demonstracje tylko
jako pokaz nauczyciela pod wyciągiem; uczniowskie próby — wyłącznie opisowe.

### 7.3 Właściwości chemiczne

**Spalanie — dwa warianty, jeden z nich to klasyk zadań:**

  całkowite (dostęp tlenu): 2H₂S + 3O₂ →(płomień) 2SO₂ + 2H₂O
  niecałkowite (ograniczony dostęp): 2H₂S + O₂ →(płomień) 2S + 2H₂O

Obserwacje: niebieskawy płomień; w wariancie niecałkowitemu towarzyszy
**żółty nalot siarki** na zimnych ściankach naczynia. „Żółta siarka na ściankach"
to sygnał rozpoznawczy H₂S na zawodach.

**Roztwór wodny — kwas siarkowodorowy (słaby!):**

  H₂S + H₂O ⇌ H⁺ + HS⁻ ⇌ H⁺ + S²⁻

**Kwas słaby** — dysocjacja tylko częściowa (kontrast z kwasem solnym, 6.3).
Zachowuje się jak typowy kwas: lakmus czerwienieje, reaguje z zasadami:

  2NaOH + H₂S → Na₂S + 2H₂O (sól: siarczek sodu)
  (niedobór zasady: NaOH + H₂S → NaHS — wodorosiarczek, ◇ OLIMP)

**Sole siarczkowe i wykrywanie (analiza jakościowa — zapowiedź):**

| Test | Obserwacja | Produkt |
|---|---|---|
| H₂S do roztworu Pb(NO₃)₂ (papier ołowiowy) | **czernienie** | PbS — siarczek ołowiu(II), czarny |
| H₂S do roztworu soli miedzi(II) | czarny osad | CuS |

**◇ OLIMP:** CuS strąca się nawet z kwaśnego roztworu — dlatego test miedzi
działa mimo kwasu; kolorystyka sulfidów (ZnS biały, CdS żółty, PbS/CuS czarny)
to stary przyrząd analityczny. **◇ OLIMP (redukcja):** SO₂ + 2H₂S → 3S↓ + 2H₂O
— obie strony wymieniają się elektronami, żółty osad siarki; reakcja
środowiskowa (kwaśne deszcze + wulkaniczne gazy).

### 7.4 Trzy wodorki niemetali — tabela porównawcza (LKO II)

| | NH₃ | HCl | H₂S |
|---|---|---|---|
| M (g/mol) | 17 | 36,5 | 34 |
| vs powietrze (29) | lżejszy 1,7× | cięższy 1,25× | cięższy 1,17× |
| rozpuszczalność | bardzo duża (~700) | bardzo duża (~450) | słaba (~2,5) |
| zbieranie | dnem do **GÓRY** | dnem do **DOŁU** | dnem do **DOŁU** (lub nad wodą) |
| odczyn roztworu | **zasadowy** | kwaśny — **mocny** | kwaśny — **słaby** |
| otrzymywanie | sól amonowa + trudnolotna zasada | sól + trudnolotny kwas | FeS + kwas |
| wykrywanie | mokry czerwony lakmus **sinieje** | mgiełka; dymy z NH₃; AgCl↓ biały | zapach (ostrożnie!); **papier ołowiowy czernieje** |
| toksyczność | drażni | drażni | **bardzo toksyczny** |

Ucz się tabeli kolumnami („pionami"), nie wierszami — pytania konkursowe
prawie zawsze są pionowe („dany gaz: jak zbierasz? co zobaczysz?").

## OP. 4 — KOMPENDIUM: podmień tabelę porównawczą na czterokolumnową

Pod sekcją „H₂ vs NH₃ — porównanie" wstaw nagłówek „H₂, NH₃, HCl, H₂S" i tabelę:
zachowaj kolumny H₂ i NH₃ z W1 (bez zmian wartości), dodaj kolumny HCl i H₂S:

| | HCl | H₂S |
|---|---|---|
| M | 36,5 | 34 |
| vs powietrze | ~1,25× cięższy | ~1,17× cięższy |
| rozpuszczalność | bardzo duża | słaba (może być nad wodą) |
| zbieranie | wypieranie powietrza, dnem do dołu | wypieranie powietrza, dnem do dołu |
| odczyn z wodą | kwaśny, kwas mocny (H⁺ + Cl⁻) | kwaśny, kwas słaby (częściowa dysocjacja) |
| wykrywanie | mgiełka w wilgotnym powietrzu; dymy z NH₃; AgCl↓ | zapach zgniłych jaj; papier ołowiowy czernieje |

Na końcu kompendium dodaj:

**Zasada wypierania:** trudnolotny wypiera lotny (H₂SO₄→HCl; Ca(OH)₂→NH₃; kwas→H₂S).
**Wykrywanie anionów (zestaw):** Cl⁻ → AgCl↓ biały; S²⁻ → PbS↓ czarny; CO₃²⁻ → CO₂↑.
**Łańcuch kwasu (4 typy):** metal → H₂↑; tlenek metalu → sól+H₂O; wodorotlenek → sól+H₂O;
węglan → sól+H₂O+CO₂↑.

## OP. 5 — ZADANIA: na końcu (po poziomie LO/OL 12–14) dodaj:

### Poziom LKO-II — wodorki niemetali (15–20)

15. Zapisz równanie otrzymywania chlorowodoru z chlorku sodu. Uzasadnij
dwoma wnioskami z właściwości fizycznych, dlaczego gaz zbiera się przez
wypieranie powietrza z zlewki dnem do dołu, a nie nad wodą.
16. Masz dwa bezbarwne roztwory kwasów: solny i siarkowodorowy. Zaproponuj
JEDEN odczynnik pozwalający je rozróżnić; podaj obie obserwacje i wzory osadów.
17. Zapisz oba warianty spalania siarkowodoru (całkowite i niecałkowite) oraz
obserwację różnicującą te dwa przypadki.
18. Z 8,8 g siarczku żelaza(II) FeS otrzymano siarkowodór w reakcji z kwasem
solnym. Oblicz masę otrzymanego H₂S (M: FeS = 88; H₂S = 34). Pokaż obliczenie.
19. **Detektyw:** trzy butle z bezbarwnymi gazami: NH₃, HCl, H₂S. Masz mokre
papiery: czerwony lakmus, niebieski lakmus, papier ołowiowy. Ułóż plan
rozróżnienia (bez wąchania bezpośredniego!) z przewidywanymi obserwacjami.
20. [LO/OL] a) Dlaczego ciekły czysty HCl nie przewodzi prądu, a jego roztwór
wodny tak? b) Dlaczego kwas solny jest kwasem mocnym, a siarkowodorowy — słabym?
(Jakościowo.)

## OP. 6 — KLUCZ: dopisz odpowiedzi

15. NaCl(s) + H₂SO₄(stęż.) →(t) NaHSO₄ + HCl↑; HCl jest cięższy od powietrza
(1,25×) → wypieranie powietrza dnem do dołu; bardzo dobrze rozpuszczalny →
nad wodą niemożliwe.
16. Pb(NO₃)₂: z kwasu solnego **biały** osad PbCl₂; z siarkowodorowego
**czarny** osad PbS.
17. 2H₂S + 3O₂ → 2SO₂ + 2H₂O (całkowite); 2H₂S + O₂ → 2S + 2H₂O (niecałkowite,
ograniczony dostęp tlenu); różnica: żółty nalot siarki na ściankach przy
niecałkowitym.
18. proporcja: 88 g FeS → 34 g H₂S; 8,8 g → x = 8,8 × 34/88 = **3,4 g**
(◇ OLIMP: 0,1 mol — nazwa dopiero na Etapie III).
19. 1) czerwony lakmus **sinieje** → NH₃ (jeden zasadowy); 2) papier ołowiowy
**czernieje** → H₂S (PbS); 3) pozostały (potwierdzenie: niebieski lakmus
czerwienieje, mgiełka w wilgotnym powietrzu) → HCl. Kolejność dowolna, ale
obserwacje jednoznaczne: siń/czerń/czerwień.
20. a) w czystym HCl brak jonów (cząsteczki kowalencyjne); roztwór zawiera
jony H⁺ i Cl⁻ → przewodzi. b) kwas solny dysocjuje praktycznie całkowicie
(elektrolit mocny), siarkowodorowy — tylko częściowo (elektrolit słaby).

## OP. 7 — BŁĘDY TYPOWE: dopisz 9–12

9. **„HCl gaz = kwas solny"** → gaz ma cząsteczki kowalencyjne i nie przewodzi
prądu; „kwaśny" jest dopiero roztwór (jony). Pytanie-pułapka o przewodzenie
prądu pojawia się stale.
10. **„HCl zbieramy dnem do góry, bo to kwas"** → o zbieraniu decyduje gęstość,
nie odczyn: HCl i H₂S cięższe od powietrza → dnem do dołu; jedyny lżejszy to NH₃.
11. **„Dymy HCl w wilgotnym powietrzu"** → to **mgiełka** (kropelki kwasu).
Dym = drobinki stałe (NH₄Cl). Rozstrzyga stan skupienia drobin.
12. **„Sprawdzę H₂S węchem"** → H₂S jest bardzo toksyczny, a węch traci
wrażliwość (adaptacja) — zapachu nie wolno traktować jako bezpiecznego testu.
Test papierowy (ołowiowy) zamiast nosa.
════════════════════════════════════════════════════════════════════
````

## Do dopięcia w repo

1. `gen_f00.py`: nic nowego — N06 ma już wiersz; tylko frontmatter `stan` zmienia się na W2 (kolumna Wersja przeskoczy sama).
2. Kosmetyka w **LKO-KRZYWE** (wykryta przy scalaniu): literówka w boxie LO — „sód ti siarczanowy" → **„tiosiarczan sodu"**.
3. `POWIAZANIA_CHE.md`: krawędzie `N06 → J01 (APPLY: mocny/słaby)`, `N06 → J04 (zapowiedź: AgCl, PbS)`, `N06 → LKO-SYM-A2 (zasilanie)`.

## Status P1 (termin do 20.11)

| Plik | Stan |
|---|---|
| **N06 W2 (HCl + H₂S)** | ✅ właśnie — pełny zestaw wodorków LKO II gotowy |
| Suplement: metale, szereg aktywności, równania jonowe (LKO II rozszerzenia 3–5) | do napisania |
| Zestawy B1–B2 + LKO-SYM-A2 | po diagnozie z OCJ I (5.11) |

Następny na warsztat proponuję **suplement metale/szereg aktywności/równania jonowe** — to największy nowy blok Etapu II (rozszerzenia 3, 4, 5 + cykle przemian z zadania 8 symulacji w wersji pełnej). Piszę?