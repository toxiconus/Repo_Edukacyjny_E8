Piszę pełny plik **N06** — jedyny twardy bloker przed 5.11. Format: frontmatter zgodny ze stylem repo, zero odwołań do innych plików w treści (zasada samodzielności), warstwy oznaczone w tekście, 0 grafik (jak większość plików).

````markdown
---
kod: N06
tytul: "Wodorki: wodór, amoniak i kation amonu"
typ: lekcja
dzial: "N — Chemia nieorganiczna"
poziom: "E8 / LO / OLIMP"
warstwy: [E8, LO, OL]   # klucz nowy (P2 planu ścieżki) — gen_f00.py do uzupełnienia
wymaga: "N01; F12"
poglebia: "N07; P01–P02; J01"
wlasciciel: "wodór (systematycznie); amoniak; kation amonu i sole amonowe; kwasy a sole (dopisek podstawy); systematyka wodorków (warstwa LO)"
zrodla: "podstawa programowa SP (pkt IV i VII po nowelizacji); zakres OCJ Etap I (edukator.pl/olimpiada/materialy); zbiory zadań kl. 7–8"
opis: "E8: wodór — otrzymywanie, właściwości, wykrywanie, BHP; amoniak i kation amonu (nowa treść podstawy); kwasy a sole. LO/OL: systematyka wodorków, metoda Habera jakościowo, redukcje z udziałem H₂. Zasila OCJ Etap I."
stan: "W1 — pełna wersja pod OCJ Etap I, 2026-10-21 (zastępuje PUSTY)"
---

# N06 — Wodorki: wodór, amoniak i kation amonu

## Lustro i most

| | |
|---|---|
| **Było (kl. 7)** | atom wodoru, wiązania kowalencyjne, spalanie wodoru, elektroliza wody, odczyn i wskaźniki |
| **Teraz** | wodór systemowo (otrzymywanie / właściwości / wykrywanie / BHP) + **amoniak, kation amonu, sole amonowe** — treść dodana do podstawy programowej + **kwasy a sole** |
| **Będzie (LO)** | systematyka wodorków w pełnym zakresie, hydroliza soli amonowych, teoria Brønsteda, równowaga metody Habera z obliczeniami |
| **Olimpijsko** | H₂ jako reduktor w metalurgii, identyfikacja NH₄⁺ w ścieżkach detektywa, CaH₂ jako „suche źródło" wodoru, dymy NH₃ + HCl jako klasyk demonstracji |

> **Ten plik zasila OCJ Etap I (5.11):** punkt podstawy *tlen, wodór i ich związki* + dopisek do punktu *sole* (amoniak z wodą i kwasami, kation amonu z zasadami, kwasy z solami).

**Cel ucznia.** Po tej lekcji uczeń: (1) opisuje otrzymywanie, właściwości i wykrywanie wodoru oraz uzasadnia próbę czystości; (2) opisuje budowę i właściwości amoniaku i wnioskuje o sposobach jego zbierania; (3) zapisuje reakcje amoniaku z wodą i kwasami; (4) tworzy wzory i nazwy soli amonowych; (5) przeprowadza (opisowo) próbę wykrywania kationu amonu i zapisuje równanie; (6) zapisuje 3 klasyczne reakcje kwasu z solą; (7) [LO/OL] klasyfikuje wodorki i jakościowo rozumie metodę Habera.

Plan: WYKŁAD 1 — wodór · WYKŁAD 2 — amoniak · WYKŁAD 3 — kation amonu i sole amonowe · WYKŁAD 4 — kwasy a sole · WYKŁAD 5 [LO/OL] — systematyka wodorków · KOMPENDIUM · ZADANIA + KLUCZ · QUIZ · BŁĘDY TYPOWE.

---

## WYKŁAD 1 — Wodór: najprostszy pierwiastek, najważniejszy gaz

### 1.1 Skąd wodór?

Wodór H to **najliczniejszy pierwiastek we Wszechświecie**. Na Ziemi prawie cały jest związany: w wodzie H₂O, w kwasach, w związkach organicznych (ropa, gaz ziemny, cukry, tłuszcze). Wolny H₂ występuje w przyrodzie tylko śladowo — zbyt chętnie reaguje.

**◇ OLIMP:** wodór ma trzy izotopy: prot ¹H, deuter ²H, tryt ³H. To jedyny pierwiastek, którego izotopy mają własne nazwy.

### 1.2 Właściwości fizyczne

| Właściwość | Opis | Wniosek praktyczny |
|---|---|---|
| wygląd, zapach | bezbarwny gaz, bezwonny | nic nie zdradza jego obecności — trzeba go wykryć |
| gęstość | ok. **14 razy lżejszy od powietrza** (najlżejszy gaz) | zbieranie przez wypieranie powietrza w górę (zlewka dnem do dołu) — **ale patrz BHP poniżej** |
| rozpuszczalność | praktycznie nierozpuszczalny w wodzie | można zbierać **przez wypieranie wody** — metoda najlepsza |

### 1.3 Otrzymywanie

**W laboratorium — metal + kwas:**

  Zn + 2HCl → ZnCl₂ + H₂↑

Obserwacje: na cynku bąbelki gazu, cynk stopniowo znika, roztwór pozostaje bezbarwny, lekki wzrost temperatury. Zamiast cynku może być żelazo lub aluminium (wolniej/szybciej — temp. ma znaczenie); zamiast HCl — rozcieńczony kwas siarkowy: Zn + H₂SO₄ → ZnSO₄ + H₂↑.

**◇ OLIMP:** z kwasem azotowym HNO₃ **nie** otrzymamy wodoru — ten kwas działa utleniająco (produkty to tlenki azotu, nie H₂).

**Elektroliza wody (przypomnienie z kl. 7):**

  2H₂O →(prąd stały) 2H₂↑ + O₂↑

na katodzie H₂, na anodzie O₂, objętościowo **2 : 1**.

**◇ OLIMP:** przemysłowo wodór otrzymuje się głównie z metanu i pary wodnej (parowa konwersja metanu) oraz elektrolizą — nazwy wystarczą.

### 1.4 Właściwości chemiczne

**Spalanie (reakcja charakterystyczna):**

  2H₂ + O₂ →(płomień) 2H₂O

Reakcja bardzo egzotermiczna; płomień wodoru jest **prawie niewidoczny** (słabe, niebieskawe poświaty). Produkt — woda: krople na ściankach zimnej zlewki albo biały bezwodny CuSO₄ błękitnieje (wykrywanie wody).

**Reakcja z tlenkami metali (redukcja):**

  CuO + H₂ →(t) Cu + H₂O

Czarny proszek CuO staje się czerwono-brązowy (miedź), na ściankach rurki mgiełki wody. Technika: najpierw wypłukać rurkę strumieniem H₂ (sprawdzona czystość!), dopiero potem ogrzewać; po zakończeniu chłodzić wciąż w strumieniu H₂, by gorąca miedź nie zetknęła się z powietrzem.

**◇ OLIMP (język stopniów utlenienia — intuicja, systematycznie poznasz go później):** w tej reakcji wodór zmienia SU z 0 na +I (utlenia się — jest **reduktorem**), miedź z +II na 0 (redukuje się; CuO jest **utleniaczem**). H₂ zabiera tlen — dlatego mówi się, że wodór **ma właściwości redukujące**.

**◇ OLIMP:** H₂ + Cl₂ →(światło) 2HCl — klasyczna reakcja z białymi dymami.

### 1.5 Próba czystości — serce BHP

**⚠ BHP:** mieszanina wodoru z powietrzem wybucha od płomienia lub iskry (szeroki zakres stężeń). Gwałtowna egzotermiczna reakcja w zamkniętej probówce = ogromny przyrost ciśnienia = wybuch.

**Procedura:** zbierz małą próbkę gazu w probówkę, przyłóż płomień palnika:
- **czysty H₂** → krótkie, ciche „pi" (spokojny zapłon przy wylotu),
- **H₂ z powietrzem** → głośny, „szczekający" trzask.

Zasada: **próbę czystości wykonuje się zawsze**, zanim podpalisz strumień gazu albo ogrzejesz aparaturę, w której był wodór.

**Dlatego** do zbierania wodoru wybieramy wypieranie **wody** (H₂ się nie rozpuszcza), a nie wypieranie powietrza — powietrze zostałyby w probówce i tworzyłoby mieszaninę wybuchową.

### 1.6 Wykrywanie i zastosowania

| Wykrywanie H₂ | Jak to wygląda |
|---|---|
| próba zapłonu | głośny trzask przy zanieczyszczeniu powietrzem; czysty pali się cicho, płomień ledwie widoczny (uwaga — łatwo przegapić!) |
| produkt spalania | woda (CuSO₄ bezwodny błękitnieje) |

Zastosowania: synteza amoniaku i kwasu chlorowodorowego, redukcja tlenków w metalurgii, utwardzanie tłuszczów roślinnych (zajawka organiki!), paliwo rakietowe i ogniwa paliwowe.

---

## WYKŁAD 2 — Amoniak NH₃

### 2.1 Budowa cząsteczki — jeden rysunek wyjaśnia wszystko

Wzór: **NH₃**. Azot ma 5 elektronów walencyjnych: tworzy **3 wiązania kowalencyjne** z wodorem, a **jedna para elektronowa pozostaje wolna** (wzór Lewisa: N w środku, trzy kreski do H, boczna para kropek).

Ta wolna para odpowiada za WSZYSTKO:
- cząsteczka ma kształt **piramidki** (wolna para „pcha" wiązania w dół — dokładniej na LO),
- wiązania N–H są spolaryzowane → cząsteczka **polarna** → **bardzo dobrze rozpuszcza się w wodzie** (jakościowo: polarny „wgryza się" w polarną wodę),
- wolna para może **przyłączyć jon H⁺** → powstaje **kation amonowy NH₄⁺** (to jest zasadowość amoniaku — doprecyzujesz na LO).

**◇ OLIMP:** kąt H–N–H ≈ 107° (mniej niż 109,5° w tetraedrze — właśnie przez odpychanie od wolnej pary).

### 2.2 Właściwości fizyczne

| Właściwość | Opis | Wniosek |
|---|---|---|
| wygląd, zapach | bezbarwny gaz, **ostry, duszący zapach** (znany z „amoniaku" do mycia) | rozpoznawalny węchem — ale wąchaj TYLKO machnięciem dłoni |
| gęstość | M = 17, czyli ok. **1,7 razy lżejszy od powietrza** | zbieranie **przez wypieranie powietrza w dół: zlewka dnem do góry** |
| rozpuszczalność | **bardzo dobrze rozpuszczalny** — ok. 700 objętości gazu w 1 objętości wody (0 °C); setki objętości w zwykłej temp. | **NIE zbieramy nad wodą**; wyjaśnia fontannę amoniakalną |

**Fontanna amoniakalna (doświadczenie demonstracyjne):** kolba pełna NH₃ z rurką zanurzoną w wodzie z fenoloftaleiną. Wpuszczamy kroplę wody do kolby — amoniak gwałtownie się w niej rozpuszcza, ciśnienie w kolbie spada, woda zostaje wessana strumieniem i… **różowa fontanna** (woda z amoniakiem = odczyn zasadowy, patrz 2.4).

### 2.3 Otrzymywanie

**W laboratorium — sól amonowa + zasada (podgrzewanie):**

  2NH₄Cl + Ca(OH)₂ →(t) CaCl₂ + 2NH₃↑ + 2H₂O

Mieszaninę chlorku amonu z wapnem gaszonym podgrzewa się w probówce; gaz zbiera się w zlewce **dnem do góry** (lżejszy od powietrza). Zapach sam się zdradza. (Wersja skrócona: podgrzanie roztworu soli amonowej z NaOH — to dokładnie ta sama reakcja, która służy do **wykrywania kationu amonu**, WYKŁAD 3.)

**W przemyśle — metoda Habera i Boscha:**

  N₂ + 3H₂ ⇌ 2NH₃

Temperatura ok. 450–500 °C, **wysokie ciśnienie**, katalizator żelazowy. Azot pochodzi z powietrza, wodór z metanu. To jedna z najważniejszych reakcji cywilizacji — od niej zaczynają się **wszystkie nawozy azotowe**.

**◇ OLIMP (jakościowo):** po lewej 4 cząsteczki, po prawej 2 → wysokie ciśnienie sprzyja produktom (systematycznie: reguła Le Chateliera, na LO). Katalizator nie zmienia „ile", tylko „jak szybko" — to wróci przy kinetyce.

### 2.4 Reakcja z wodą — skąd odczyn zasadowy

  NH₃ + H₂O ⇌ NH₄⁺ + OH⁻

Cząsteczki amoniaku **przyłączają protony z wody**; powstają jony **NH₄⁺** i **OH⁻** (tych drugich jest niewiele, ale wystarczy). Stąd roztwór — **woda amoniakalna** — ma odczyn **zasadowy**:
- fenoloftaleina → **malinowa**,
- czerwony papier lakmusowy → **niebieski**.

**Uwaga o zapisie:** w starszych podręcznikach spotkasz „NH₄OH" jako „wodorotlenek amonu". Współcześnie zapisujemy NH₃·H₂O (amoniak związany z wodą) albo wprost równanie z jonami — odrębna cząsteczka NH₄OH nie istnieje.

**◇ LO:** to jest równowaga — znaczek ⇌ nie jest ozdobą; większa część amoniaku pozostaje jako NH₃·H₂O, tylko mała frakcja to jony (dokładnie: przy J01 i J06).

### 2.5 Reakcja z kwasami — sole amonowe

  NH₃ + HCl → NH₄Cl (białe dymy!)
  2NH₃ + H₂SO₄ → (NH₄)₂SO₄
  NH₃ + HNO₃ → NH₄NO₃
  3NH₃ + H₃PO₄ → (NH₄)₃PO₄

**Klasyczna demonstracja:** dwa patyczki — jeden zanurzony w stężonym HCl, drugi w stężonym NH₃(aq). Po zbliżeniu między nimi rozpięta się **ściana białych dymów** — drobinek stałego chlorku amonu.

**⚠ Pułapka:** amoniak + kwas → **sól, BEZ wody**. To NIE jest zobojętnianie (tam zasada wodorotlenkowa + kwas → sól + woda). W roztworze istota reakcji to jedno: NH₃ + H⁺ → NH₄⁺.

**⚠ BHP amoniaku:** drażni oczy i drogi oddechowe; demonstracje pod wyciągiem; nie otwieraj butelki „amoniaku" nad twarzą — tylko machnięcie dłonią.

---

## WYKŁAD 3 — Kation amonu i sole amonowe

### 3.1 NH₄⁺ — kation bez metalu

Kation amonowy **NH₄⁺** powstaje przez przyłączenie H⁺ do wolnej pary azotu. W solach zachowuje się **dokładnie jak kation metalu jednowalentnego** (jak Na⁺ czy K⁺): kation + anion → sól. To klucz do pisania wzorów.

### 3.2 Wzory i nazwy

| Wzór | Nazwa | Gdzie spotykasz |
|---|---|---|
| NH₄Cl | **chlorek amonu** (salmiak) | sucha bateria, opłucna cukierków (ciekawostka) |
| (NH₄)₂SO₄ | **siarczan(VI) amonu** | nawóz azotowy |
| NH₄NO₃ | **azotan(V) amonu** (saletra amonowa) | nawóz; uwaga BHP poniżej |
| (NH₄)₃PO₄ | **fosforan(V) amonu** | nawóz N-P |
| (NH₄)₂CO₃ | **węglan amonu** | piekarnictwo (środek spulchniający — rozkłada się na gazy!) |
| NH₄HCO₃ | **wodorowęglan amonu** | analogicznie |

Procedura budowy wzoru: kation NH₄⁺ ma ładunek 1+ — dopasuj liczbowo do ładunku anionu: z SO₄²⁻ potrzebujesz dwóch amonów → (NH₄)₂SO₄; z PO₄³⁻ trzech → (NH₄)₃PO₄. Nawias obowiązuje, gdy amonów jest więcej niż jeden.

### 3.3 Właściwości i rozkład

Sole amonowe to krystaliczne ciała stałe, zwykle dobrze rozpuszczalne w wodzie. Ich wspólna cecha — **rozkład termiczny**:

  NH₄Cl →(t) NH₃↑ + HCl↑
  (NH₄)₂CO₃ →(t) 2NH₃↑ + H₂O + CO₂↑

**◇ OLIMP:** ogrzany NH₄Cl „sublimuje" pozornie — na zimnych ściankach NH₃ i HCl znów łączą się w biały nalot. To reakcja odwracalna, nie sublimacja.

**⚠ BHP:** azotan(V) amonu rozkłada się gwałtownie w podwyższonej temperaturze i nie wolno go przechowywać z substancjami palnymi — dlatego tak skrupulatnie traktuje się nawozy i magazyny nawozowe w realnym świecie.

**Nawozy:** prawie cały azot nawozowy startuje z metody Habera → NH₃ → sole amonowe (i mocznik CO(NH₂)₂ — zajawka organiki: to związek organiczny z azotem).

### 3.4 Wykrywanie kationu amonu — NAJWAŻNIEJSZY TEST TEJ LEKCJI

  NH₄⁺ + OH⁻ →(t) NH₃↑ + H₂O
  (pełne: NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O)

**Procedura (np. nawóz o nieznanym składzie):**
1. do próbki dodaj roztwór NaOH, delikatnie podgrzej;
2. **machnięciem dłoni** wyczuj zapach amoniaku (ostry, duszący);
3. **mokry czerwony papier lakmusowy** przy wylotu probówki **sinieje** (para amoniaku + woda = odczyn zasadowy).

Wniosek: próbka zawiera **kation amonowy**. Zapamiętaj sprzężenie: **zasada + sól amonowa → amoniak** i jednocześnie **amoniak + kwas → sól amonowa**. To dwie strony tej samej monety — i dwie strony Etapu I OCJ.

---

## WYKŁAD 4 — Kwasy a sole (dopisek do podstawy)

Schemat: **kwas + sól → nowy kwas + nowa sól**. Reakcja zachodzi, gdy powstaje **osad**, **gaz** albo **kwas słabszy/lotniejszy** — coś musi „wypaść" z układu.

| Reakcja | Obserwacja | Po co Ci to |
|---|---|---|
| Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑ | burzenie, gaszenie mętnieje | **wykrywanie węglanów** |
| CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ | marmur „musuje" | kl. 7 — kwas atakuje węglany |
| NaCl(s) + H₂SO₄(stęż.) →(t) NaHSO₄ + HCl↑ | gaz w wilgotnym powietrzu daje białe dymy | **otrzymywanie HCl** |
| AgNO₃ + HCl → AgCl↓ + HNO₃ | biały osad | osadzanie chlorków (detektyw) |

Zapamiętaj trójkąt: **lotny produkt (gas, kwas) albo osad = silnik reakcji**. Ten sam mechanizm „wypierania" wraca w części o amoniaku: kwas + sól amonowa → sól + kwas, a amoniak wylatuje.

---

## WYKŁAD 5 [LO/OL] — Systematyka wodorków

**Wodorki** = związki wodoru z innymi pierwiastkami. Dwa światy:

**1) Wodorki metali (jonowe, stałe):** NaH, CaH₂, LiH. Kryształki jonowe; z wodą oddają H₂:
  CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂↑
**◇ OLIMP:** dlatego CaH₂ to „suche źródło wodoru" — w terenie nie trzeba butli, wystarczy woda.

**2) Wodorki niemetali (kowalencyjne, lotne):**

| Grupa | Wodorki | Charakter | Ciekawostka |
|---|---|---|---|
| 14 | CH₄, SiH₄ | obojętne | metan — gaz kopalniany |
| 15 | **NH₃**, PH₃ | **zasadowe** (NH₃ wyraźnie; PH₃ słabo) | PH₃ — toksyczny, samozapłon śladowych ilości |
| 16 | H₂O, H₂S | obojętna → **kwasowe** | H₂S: zapach zgniłych jaj, silnie toksyczny |
| 17 | HF, HCl, HBr, HI | **kwasowe** | HF trawi szkło; w wodzie HCl mocny, HF słaby |

**Trendy (jakościowo):** w prawo po okresie wodorki robią się coraz bardziej kwasowe (NH₃ zasadowy → H₂O obojętny → HCl kwasowy); w dół grupy moc kwasów rośnie (HI > HBr > HCl > HF — z nieoczywistym wyjątkiem HF, który w wodzie jest słaby).

**Powrót do NH₃:** to jedyny powszechny **zasadowy** wodork niemetali — i wiemy już dlaczego: **wolna para elektronowa** przyłapie H⁺. CH₄ wolnej pary nie ma (siła: 4 wiązania) — dlatego jest obojętny. Jeden rysunek Lewisa z 2.1 domyka cały wykład.

---

## KOMPENDIUM — ściągawka wynikowa

### H₂ vs NH₃ — porównanie

| | H₂ | NH₃ |
|---|---|---|
| M | 2 | 17 |
| vs powietrze | ~14× lżejszy | ~1,7× lżejszy |
| rozpuszczalność | praktycznie zerowa | bardzo duża (fontanna!) |
| zbieranie | przez wypieranie **wody** | przez wypieranie powietrza, **zlewka dnem do góry**; nigdy nad wodą |
| zapach | brak | ostry, duszący |
| odczyn z wodą | brak reakcji | zasadowy: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ |
| wykrywanie | próba zapłonu (trzask; ledwie widoczny płomień) | zapach + mokry czerwony lakmus sinieje |

### Wykrywanie gazów (zestaw OCJ)

| Gaz | Test | Wynik dodatni |
|---|---|---|
| O₂ | tlące się łuczywo | rozżarza się |
| H₂ | zapłon | głośny trzask (z powietrzem) |
| CO₂ | woda wapienna / mokry lakmus | mętnieje / czerwienieje |
| NH₃ | mokry czerwony lakmus | sinieje; ostry zapach |
| HCl (pary) | mokry niebieski lakmus | czerwienieje; dymy z NH₃ |

### Równania do opanowania (serce Etapu I)

1. Zn + 2HCl → ZnCl₂ + H₂↑
2. 2H₂ + O₂ →(płomień) 2H₂O
3. CuO + H₂ →(t) Cu + H₂O
4. 2NH₄Cl + Ca(OH)₂ →(t) CaCl₂ + 2NH₃↑ + 2H₂O
5. N₂ + 3H₂ ⇌ 2NH₃ (Habera)
6. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
7. NH₃ + HCl → NH₄Cl (dymy)
8. 2NH₃ + H₂SO₄ → (NH₄)₂SO₄
9. NH₄Cl + NaOH →(t) NaCl + NH₃↑ + H₂O
10. (NH₄)₂CO₃ →(t) 2NH₃↑ + H₂O + CO₂↑
11. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑
12. NaCl(s) + H₂SO₄(stęż.) →(t) NaHSO₄ + HCl↑

### Trzy karty reakcji (format dossier)

| | Spalanie H₂ | Dymy | Identyfikacja NH₄⁺ |
|---|---|---|---|
| substraty | H₂ + O₂ | NH₃(g) + HCl(g) | sól amonowa + NaOH |
| warunki | płomień (po próbie czystości!) | pokojowa, patyczki | podgrzanie |
| obserwacje | prawie niewidoczny płomień, krople wody | ściana białych dymów | zapach NH₃, lakmus sinieje |
| równanie | 2H₂ + O₂ → 2H₂O | NH₃ + HCl → NH₄Cl | NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O |
| BHP | mieszanina wybuchowa | wyciąg | nie wąchać bezpośrednio |

---

## ZADANIA

### Poziom E8 (1–5)

1. Zapisz równanie reakcji cynku z kwasem solnym. Wskaż objawy i uzasadnij, dlaczego gaz zbieramy przez wypieranie wody, a nie powietrza.
2. Wyjaśnij, na czym polega próba czystości wodoru. Co słyszysz, gdy gaz jest czysty, a co — gdy zawiera powietrze? Dlaczego ten test jest obowiązkowy?
3. Wymień trzy właściwości fizyczne amoniaku i wyprowadź z nich DWA wnioski praktyczne: jak go zbierać i czego nie wolno robić przy zbieraniu.
4. Uzupełnij: NH₃ + H₂O ⇌ ____ + ____. Jak zabarwi się fenoloftaleina w tym roztworze i jak nazywa się taki roztwór?
5. Zapisz wzory i nazwy soli amonowych powstałych z NH₄⁺ oraz: Cl⁻, SO₄²⁻, NO₃⁻, PO₄³⁻, CO₃²⁻.

### Poziom OCJ — Etap I (6–11)

6. Masz próbkę nawozu. Zaprojektuj doświadczenie potwierdzające obecność kationu amonu (zapisy, obserwacje) i zapisz równanie, przyjmując że nawóz to (NH₄)₂SO₄.
7. Dwa patyczki zbliżono — pojawiła się ściana białych dymów. Co to za substancja? Zapisz równanie i wyjaśnij, czym „dym" różni się od „mgiełki".
8. Napisz trzy równania: (a) otrzymywanie NH₃ w laboratorium z chlorku amonu, (b) metoda Habera, (c) rozkład termiczny węglanu amonu.
9. **Detektyw:** trzy nieopisane probówki: rozcieńczony HCl, woda amoniakalna, woda destylowana. Masz cynk, fenoloftaleinę i papiery lakmusowe. Ułóż kolejność testów, podaj obserwacje i równanie reakcji z cynkiem.
10. Do 10,7 g chlorku amonu dodano nadmiar NaOH i podgrzano. Oblicz masę wydzielonego amoniaku (M: NH₄Cl = 53,5; NH₃ = 17).
11. Uzasadnij, dlaczego NH₃ zbieramy w zlewce dnem do góry, a H₂ — nad wodą. Jakie dodatkowe ryzyko bywało związane ze zbieraniem H₂ przez wypieranie powietrza?

### Poziom LO/OL (12–14)

12. Sklasyfikuj wodorki: PH₃, CaH₂, H₂S, SiH₄, NaH, NH₃ (jonowe/lotne; obojętne/zasadowe/kwasowe).
13. Uzupełnij: CaH₂ + H₂O → ____. Do czego praktycznego służy ta reakcja?
14. Metoda Habera: wyjaśnij jakościowo, po co wysokie ciśnienie i po co katalizator żelazowy.

### KLUCZ (sprawdź po rozwiązaniu)

1. Zn + 2HCl → ZnCl₂ + H₂↑; bąbelki, znikanie metalu; woda nie zostawia powietrza (mieszanina z powietrzem = wybuch, 1.5).
2. Czysty: ciche „pi"; z powietrzem: głośny trzask; test chroni przed wybuchem aparatury.
3. lekkość (→ dnem do góry), rozpuszczalność (→ nie nad wodą), zapach (→ rozpoznanie). Wniosek 2: wypieranie powietrza w dół / zakaz wypierania wody.
4. NH₄⁺ + OH⁻; malinowa; woda amoniakalna (odczyn zasadowy).
5. NH₄Cl chlorek amonu; (NH₄)₂SO₄ siarczan(VI) amonu; NH₄NO₃ azotan(V) amonu; (NH₄)₃PO₄ fosforan(V) amonu; (NH₄)₂CO₃ węglan amonu.
6. próbka + NaOH, podgrzać; zapach amoniaku; mokry czerwony lakmus sinieje; (NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2NH₃↑ + 2H₂O.
7. chlorek amonu NH₄Cl (ciało stałe); NH₃ + HCl → NH₄Cl; dym = drobinki STAŁE, mgiełka = kropelki cieczy.
8. (a) 2NH₄Cl + Ca(OH)₂ →(t) CaCl₂ + 2NH₃↑ + 2H₂O; (b) N₂ + 3H₂ ⇌ 2NH₃; (c) (NH₄)₂CO₃ → 2NH₃↑ + H₂O + CO₂↑.
9. kolejność: fenoloftaleina (malina = NH₃) → cynk (bąbelki = HCl) → reszta to woda; Zn + 2HCl → ZnCl₂ + H₂↑. Lakmus potwie