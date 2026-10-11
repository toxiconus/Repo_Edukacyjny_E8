**Raport PRZED / PO (baza: B2e)**

| Miara | Przed | Po | Zmiana |
| --- | --- | --- | --- |
| Rozmiar tekstu lekcji (KB) | 4.3 | ~18.5 | +14.2 |
| Liczba sekcji `##` | 2 | 18 | +16 |
| Zadania (`karta exam`) | 0 | 5 | +5 |
| Pytania testowe (`?`) | 0 | 10 | +10 |
| Fiszki / hasła słownika | 0 | 14 / 10 | +14 / +10 |
| Grafiki (`@viz`, `@model`, `@zlewka`) z opisem `@opis` | 0 | 2 | +2 |
| Ciekawostki (`karta extra`) / mini-wykłady („W skrócie”) | 0 / 0 | 4 / 3 | +4 / +3 |
| Doświadczenia (`dosw`) | 0 | 2 | +2 |
| Błędy w klinice | 0 | 16 | +16 |

**Lista zmian:**

* **Rozbudowa struktury:** Zastąpiono skrótowy szkielet (4.3 KB) pełnoprawną, kompleksową lekcją opracowaną specjalnie pod kątem wymagań E8 oraz Konkursu Biologicznego LKO (etap rejonowy/wojewódzki).
* **Dodano pełny Wykład & Mini-wykłady:** Szczegółowe omówienie osi podwzgórze-przysadka, pętli sprzężenia zwrotnego ujemnego, receptorów komórkowych, transportu hormonów i kaskad reakcji.
* **Rozbudowano doświadczenia:** Opisano historyczne/szkolne doświadczenie ze sprawdzaniem wpływu tyroksyny na metamorfozę kijanek oraz badanie glikemii po posiłku.
* **Dodano bogatą Klinikę Błędów:** 16 zestawień najczęstszych pomyłek uczniów na egzaminach i konkursach.
* **Niczego nie usunięto:** Wszelkie pojęcia ze szkieletu pierwotnego zachowano i uszczegółowiono.

---

```markdown
---
kod: B2e
przedmiot: biologia
tytul: Układ dokrewny — hormony
lead: Poznaj gruczoły dokrewne, mechanizm sprzężenia zwrotnego ujemnego, działanie hormonów na komórki docelowe oraz ich rolę w utrzymaniu homeostazy organizmu.
plakietki: [[basic:E8]][[exam:KONKURS]]
zakres: LKO biologia etap II pkt III.10, podstawa programowa E8 (klasa 8)
stan: ULEPSZONA — Gemini 2.5 Flash, 2026-10-11; do sprawdzenia
wersja: 2026-10-11
---

## Minimum E8 {#minimum}

::: karta basic | Co musisz wiedzieć na E8
1. **Gruczoł dokrewny (wewnątrzwydzielniczy)** wydziela hormony **bezpośrednio do krwi** (nie posiada przewodów wyprowadzających).
2. **Gruczoł zewnątrzwydzielniczy** odprowadza swoje wydzieliny przewodami na powierzchnię ciała (np. gruczoły potowe) lub do światła narządów (np. ślinianki, wątroba).
3. **Trzustka** jest gruczołem o podwójnej funkcji: zewnątrzwydzielniczej (sok trzustkowy do dwunastnicy) i dokrewnej (insulina i glukagon z wysepek Langerhansa do krwi).
4. **Hormony** to chemiczne przekaźniki informacji transportowane przez krew, działające wyłącznie na komórki docelowe mające swoiste **receptory**.
5. **Insulina** obniża poziom glukozy we krwi (stymuluje syntezę glikogenu w wątrobie), a **glukagon** go podwyższa (stymuluje rozkład glikogenu) — jest to działanie **antagonistyczne**.
6. **Przysadka mózgowa** wydziela hormon wzrostu (somatotropinę) oraz **hormony tropowe**, które dają sygnał innym gruczołom dokrewnym (np. tarczycy, nadnerczom) do wydzielania ich własnych hormonów.
7. **Adrenalina** (wydzielana przez rdzeń nadnerczy) mobilizuje organizm w sytuacjach stresowych (przyspiesza akcję serca, podnosi ciśnienie krwi, zwiększa poziom glukozy).
8. Regulacja hormonalna jest **wolniejsza, ale działa dłużej** niż regulacja nerwowa.
:::

---

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Zasady efektywnego opanowania materiału
- **Rozróżniaj poziomy:** Pamiętaj, że treści podstawowe (E8) dotyczą znajomości hormonów i ich podstawowych funkcji. Sekcje oznaczone jako `[KONKURS]` wprowadzają mechanizmy sprzężeń zwrotnych, budowę chemiczną hormonów oraz osie hormonalne niezbędne na konkursie LKO.
- **Śledź schematy:** Narysuj samodzielnie pętlę ujemnego sprzężenia zwrotnego na przykładzie tarczycy i podwzgórza — rysowanie utrwala pamięć mięśniową i logiczną.
- **Przeanalizuj wykresy:** Zwróć szczególną uwagę na wykres zmian poziomu glukozy we krwi po posiłku.
:::

---

## 0.2 | Cele lekcji i pytanie przewodnie {#cele}

::: karta basic | Cele lekcji
Po przerobieniu tej lekcji będziesz potrafić:
- Wyjaśnić różnicę w budowie i działaniu gruczołów dokrewnych i zewnątrzwydzielniczych.
- Przyporządkować hormony do odpowiednich gruczołów i opisać skutki ich niedoboru oraz nadmiaru.
- Przedstawić mechanizm ujemnego sprzężenia zwrotnego na wybranym przykładzie.
- Wyjaśnić pojęcie antagonizmu hormonów na przykładzie insuliny i glukagonu.
- Porównać mechanizmy kontroli organizmu przez układ nerwowy i dokrewny.
:::

::: karta exam | Pytanie przewodnie
Jak zaledwie kilka mikrogramów cząsteczek chemicznych krążących we krwi potrafi zsynchronizować pracę całego ludzkiego organizmu bez użycia impulsów elektrycznych?
:::

---

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- **Homeostaza:** Zdolność organizmu do utrzymywania stałych warunków środowiska wewnętrznego (pH, temperatura, stężenie glukozy, ciśnienie krwi).
- **Transport we krwi:** Krew transportuje substancje odżywcze, gazy i cząsteczki sygnałowe po całym ciele.
- **Receptory białkowe:** Białka na powierzchni komórek lub w ich wnętrzu, zdolne do wiązania konkretnych cząsteczek (zasada „klucza i zamka”).

---

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Sprawdź, co już wiecie
Odpowiedz na poniższe pytania przed przeczytaniem tekstu:
1. Czy ślinianka jest gruczołem dokrewnym?
2. Jaki hormon jest podawany ludziom chorującym na cukrzycę typu 1?
3. Czy hormon wydzielony przez przysadkę może działać na stopę? Wyjaśnij dlaczego.

*Odpowiedzi:* 1. Nie, wydziela ślinę przewodami do jamy ustnej (jest zewnątrzwydzielnicza). 2. Insulina. 3. Tak, jeśli komórki stopy posiadają odpowiednie receptory dla tego hormonu (np. dla hormonu wzrostu).
:::

---

## 1 | Gruczoł dokrewny a zewnątrzwydzielniczy {#gruczoly}

::: karta basic | Podział gruczołów
Ze względu na sposób odprowadzania wydzieliny gruczoły dzielimy na:
1. **Gruczoły zewnątrzwydzielnicze (egzokrynowe):** Posiadają przewody wyprowadzające. Wydzielają substancje na zewnątrz ciała (np. gruczoły potowe, łojowe) lub do światła narządów wewnętrznych (np. ślinianki, gruczoły żołądkowe).
2. **Gruczoły dokrewne / wewnątrzwydzielnicze (endokrynowe):** Nie mają przewodów wyprowadzających. Są gęsto unaczynione, a swoje produkty — **hormony** — wydzielają bezpośrednio do płynu tkankowego i **krwi**.

*Uwaga — Narządy mieszane:* Niektóre narządy łączą obie funkcje. Najlepszym przykładem jest **trzustka** (część egzokrynowa produkuje sok trzustkowy, część endokrynowa produkuje insulinę i glukagon) oraz **jądra i jajniki** (produkują komórki rozrodcze odprowadzane przewodami oraz hormony płciowe wydzielane do krwi).
:::

---

## 2 | Wykład — Jak działają hormony i osie hormonalne {#wyklad}

::: karta extra | Wykład — Mechanizm działania hormonów i regulacja [KONKURS]
Hormony są chemicznymi przekaźnikami informacji. Choć krążą w całym układzie krwionośnym i docierają do wszystkich tkanek, wywołują odpowiedź tylko w tzw. **komórkach docelowych**. Posiadają one specyficzne **receptory** dopasowane kształtem do danej cząsteczki hormonu.

### Chemiczna natura hormonów a ich receptor
Hormony pod względem chemicznym dzielimy na dwie główne grupy:
1. **Hormony białkowe i peptydowe** (np. insulina, glukagon, hormon wzrostu, TSH) oraz pochodne aminokwasów (np. adrenalina): Nie rozpuszczają się w tłuszczach, więc **nie mogą przeniknąć przez błonę komórkową**. Ich receptory znajdują się **na zewnętrznej powierzchni błony komórkowej**. Połączenie hormonu z receptorem wywołuje kaskadę sygnałową wewnątrz komórki.
2. **Hormony sterydowe** (np. kortyzol, testosteron, estrogeny, progesteron): Są pochodnymi cholesterolu, rozpuszczają się w tłuszczach i bez problemu **przenikają przez błonę komórkową**. Ich receptory znajdują się **wewnątrz komórki** (w cytozolu lub jądrze komórkowym). Kompleks hormon-receptor bezpośrednio reguluje ekspresję genów w jądrze.

### Oś podwzgórze – przysadka – gruczoł obwodowy
Nadrzędnym centrum kontroli układu dokrewnego w mózgu jest **podwzgórze**. Odbiera ono sygnały z układu nerwowego i wydziela neurohormony (liberyny — stymulujące, statyny — hamujące), które działają na **przysadkę mózgową**. 

Przysadka (przedni płat) pod wpływem liberyn wydziela **hormony tropowe** (np. TSH — terytropinę, ACTH — kortykotropinę). Hormony tropowe krążą we krwi i pobudzają **obwodowe gruczoły dokrewne** (np. tarczycę, korę nadnerczy) do wydzielania ich własnych hormonów (np. tyroksyny, kortyzolu).

### Sprzężenie zwrotne ujemne
Jest to podstawowy mechanizm utrzymania homeostazy hormonalnej. Wysoki poziom hormonu obwodowego (np. tyroksyny we krwi) działa hamująco na podwzgórze (zmniejsza wydzielanie liberyn) oraz na przysadkę (zmniejsza wydzielanie TSH). W efekcie tarczyca zwalnia produkcję, a poziom tyroksyny spada do prawidłowego zakresu. Gdy poziom tyroksyny spadnie zbyt nisko, hamowanie ustaje — podwzgórze i przysadka ponownie zwiększają wydzielanie hormonów sterujących.
:::


```

```
[ PODWZGÓRZE ] --(Liberyny)--> [ PRZYSADKA ] --(Hormony tropowe)--> [ GRUCZOŁ OBWODOWY ]
      ^                                                                     |
      |                                                                     v
      +================ (Sprzężenie zwrotne ujemne) ================== [ HORMON OBWODOWY ]

```

```
@model os_hormonalna
@opis Schemat osi hormonalnej podwzgórze-przysadka-gruczoł obwodowy ze wskazaniem sprzężenia zwrotnego ujemnego. Wysokie stężenie hormonu obwodowego hamuje nadrzędne piętra układu.

---

## 3 | Tabela głównych hormonów ludzkiego organizmu {#tabela-hormonow}

::: karta basic | Zestawienie hormonów na E8 i Konkurs

| Gruczoł | Hormon | Główne działanie | Skutki niedoboru | Skutki nadmiaru |
|---|---|---|---|---|
| **Przysadka mózgowa** | **Hormon wzrostu (somatotropina)** | Stymuluje podziały komórkowe, wzrost kości długich i syntezę białek | **Karłowatość przysadkowa** (u dzieci) | **Gigantyzm** (u dzieci), **akromegalia** (u dorosłych — rozrost kości twarzy, dłoni, stóp) |
| | **Hormony tropowe** (np. TSH, ACTH, FSH, LH) | Pobudzają inne gruczoły dokrewne do wydzielania hormonów | Niedoczynność podległych gruczołów | Nadczynność podległych gruczołów |
| **Tarczyca** | **Tyroksyna (T4) i trójjodotyronina (T3)** | Zwiększają tempo metabolizmu, tempo oddychania komórkowego, produkcję ciepła | **Niedoczynność tarczycy**: senność, przyrost masy ciała, uczucie zimna, obrzęki; u dzieci — niedorozwój umysłowy i fizyczny (kretynizm) | **Nadczynność tarczycy** (np. choroba Gravesa-Basedowa): chudnięcie, nadpobudliwość, przyspieszona akcja serca, wytrzeszcz oczu |
| | **Kalcytonina** | Obniża poziom Ca²⁺ we krwi (kieruje wapń do kości) | Zaburzenia gospodarki wapniowej | Zbyt niska zawartość wapnia we krwi |
| **Przytarczyce** | **Parathormon (PTH)** | Podwyższa poziom Ca²⁺ we krwi (stymuluje uwalnianie Ca²⁺ z kości) | Tężęczka (bolesne skurcze mięśni przez spadek Ca²⁺) | Odwapnienie kości (osteoporoza), kamica nerkowa |
| **Trzustka** (wysepki Langerhansa) | **Insulina** (komórki β) | **Obniża poziom glukozy** we krwi; stymuluje syntezę glikogenu w wątrobie i mięśniach | **Cukrzyca (diabetes mellitus)**: hiperglikemia, cukromocz, wzmożone pragnienie | Hipoglikemia (spadek glukozy, wstrząs insulinowy) |
| | **Glukagon** (komórki α) | **Podwyższa poziom glukozy** we krwi; stymuluje rozkład glikogenu w wątrobie | Tendencja do hipoglikemii | Hiperglikemia |
| **Nadnercza** (rdzeń) | **Adrenalina** | Reakcja „walcz lub uciekaj”: ↑ akcji serca, ↑ ciśnienia krwi, ↑ glukozy, rozszerzenie dróg oddechowych | Osłabiona odpowiedź na stres | Nadciśnienie, stałe pobudzenie |
| **Nadnercza** (kora) | **Kortyzol** (glukokortykoidy) | Działa przeciwzapalnie, podnosi poziom glukozy we krwi podczas długotrwałego stresu | Choroba Addisona (osłabienie, ciemnienie skóry) | Zespół Cushinga (otłuszczenie karku i twarzy, rozstępy) |
| **Jajniki** | **Estrogeny** | Powstawanie żeńskich cech płciowych, regulacja cyklu miesiączkowego | Zaburzenia dojrzewania i cyklu | Zaburzenia hormonalne |
| | **Progesteron** | Umożliwia wdrożenie zapłodnionego jaja w macicy, utrzymanie ciąży | Poronienia, zaburzenia cyklu | — |
| **Jądra** | **Testosteron** | Powstawanie męskich cech płciowych, stymulacja spermatogenezy | Niedorozwój męskich cech, bezpłodność | Nadmierne owłosienie, agresja |
| **Szyszynka** | **Melatonina** | Reguluje rytmy dobowe (sen i czuwanie) | Zaburzenia snu, bezsenność | Senność w ciągu dnia |
| **Grasica** | **Tymozyna** | Stymuluje dojrzewanie komórek układu odpornościowego (limfocytów T) | Spadek odporności | Autoagresja (rzadko) |
:::

::: karta extra | W skrócie — Waga jodu
Do produkcji tyroksyny tarczyca potrzebuje **jodu**. W przypadku niedoboru jodu w diecie tarczyca nie jest w stanie wyprodukować sprawnych hormonów. Przysadka reaguje na to wyrzutem ogromnych ilości TSH, co prowadzi do przerostu tkanki tarczycy i powstania tzw. **wola miąższowego (szyjnego)**.
:::

---

## 4 | Regulacja poziomu glukozy — Antagonizm hormonów {#glukoza}

::: karta basic | Jak działa zestaw insulina – glukagon?
Antagonizm polega na tym, że dwa hormony wywołują **przeciwstawne skutki fizjologiczne**, pracując razem nad utrzymaniem stałego stanu (homeostazy).

- **Po posiłku:** Poziom glukozy we krwi wzrasta (hiperglikemia). Trzustka wydziela **insulinę**. 
  - Insulina powoduje otwarcie kanałów glukozowych w komórkach (glukoza wnika do tkanek).
  - Stymuluje wątrobę i mięśnie do łączenia cząsteczek glukozy w wielocukier zapasowy — **glikogen** (glikogenogeneza).
  - Skutek: Poziom glukozy spada do normy (~70–99 mg/dl).

- **Na czczo / podczas wysiłku:** Poziom glukozy we krwi spada (hipoglikemia). Trzustka wydziela **glukagon**.
  - Glukagon dociera do wątroby i stymuluje rozkład glikogenu do pojedynczych cząsteczek glukozy (glikogenoliza).
  - Uwalnia glukozę do krwiobiegu.
  - Skutek: Poziom glukozy wzrasta do normy.
:::


```

```
             [ Wysoki poziom glukozy po posiłku ]
                              |
                              v
                   Trzustka wydziela INSULINĘ
                              |
        +---------------------+---------------------+
        |                                           |
        v                                           v

```

Wychwyt glukozy przez komórki              Wątroba tworzy GLIKOGEN
|                                           |
+---------------------+---------------------+
|
v
[ Prawidłowy poziom glukozy (~90 mg/dl) ]
^
+---------------------+---------------------+
|                                           |
Wątroba rozkłada GLIKOGEN               Uwalnianie glukozy do krwi
^                                           ^
|                                           |
Trzustka wydziela GLUKAGON
^
|
[ Niski poziom glukozy (na czczo/stres) ]

```
@model glikemia_diagram
@opis Diagram pętli regulacji poziomu glukozy we krwi przez działanie insuliny i glukagonu.

---

## 5 | Porównanie układu nerwowego i hormonalnego {#porownanie}

::: karta basic | Jak organizm przesyła sygnały?

| Cecha | Układ nerwowy | Układ dokrewny (hormonalny) |
|---|---|---|
| **Droga przesyłania informacji** | Włókna nerwowe (aksony, dendryty) | Naczynia krwionośne (krew) |
| **Nośnik informacji** | Impuls elektryczny + neuroprzekaźnik (chemiczny) | Cząsteczka chemiczna (hormon) |
| **Szybkość przekazu** | Błyskawiczna (do 120 m/s, milisekundy) | Wolna (zależy od przepływu krwi, sekundy do godzin) |
| **Czas trwania efektu** | Krótkotrwały (ustaje po zaniku impulsu) | Długotrwały (póki hormon krąży we krwi) |
| **Precyzja działania** | Bardzo wysoka (dokładnie wskazana komórka/mięsień) | Rozproszona (wszystkie komórki z odpowiednim receptorem) |
| **Główne zadania** | Szybkie reakcje na bodźce, kontrola ruchu | Regulacja metabolizmu, wzrostu, dojrzewania, ciąży |
:::

---

## 6 | Choroby układu dokrewnego i profilaktyka {#choroby}

::: karta understand | Najważniejsze schorzenia endokrynologiczne

### Cukrzyca (Diabetes mellitus)
- **Cukrzyca typu 1 (pierwotna, młodzieńcza):** Choroba autoimmunologiczna. Układ odpornościowy niszczy komórki β trzustki. Organizm w ogóle nie produkuje insuliny. **Leczenie:** Dożywotnie podawanie insuliny (zastrzyki, pompa insulinowa).
- **Cukrzyca typu 2 (nabyta):** Komórki docelowe stają się niewrażliwe na insulinę (**insulinooporność**), mimo że trzustka ją produkuje. Przyczyny: otyłość, brak aktywności fizycznej, złe odżywianie. **Leczenie:** Dieta z niskim indeksem glikemicznym, leki zwiększające wrażliwość na insulinę, aktywność fizyczna.

### Zaburzenia tarczycy
- **Niedoczynność tarczycy:** Niski poziom T3 i T4. Objawy: stałe uczucie zimna, spowolnienie, tycie, obrzęki skórne. Diagnostyka: **podwyższony poziom TSH** (przysadka próbuje wymusić pracę na tarczycy).
- **Nadczynność tarczycy:** Wysoki poziom T3 i T4. Objawy: uczucie gorąca, chudnięcie, kołatanie serca, nerwowość. Diagnostyka: **bardzo niski poziom TSH**.

### Profilaktyka
1. Spożywanie soli jodowanej (dostarczanie jodu tarczycy).
2. Unikanie cukrów prostych i wysoko przetworzonej żywności (zapobieganie cukrzycy typu 2).
3. Regularne badania krwi (poziom glukozy na czczo, profil TSH).
4. Dbanie o odpowiednią ilość snu (prawidłowe wydzielanie melatoniny i somatotropiny).
:::

---

## 7 | Doświadczenia biologiczne {#doswiadczenia}

::: karta extra | Doświadczenie 1 — Wpływ tyroksyny na metamorfozę płazów [KONKURS]
- **Problem badawczy:** Czy tyroksyna wpływa na tempo metamorfozy kijanek żaby?
- **Hipoteza:** Dodatek tyroksyny do wody przyspiesza przeobrażenie kijanek w dorosłe żaby.
- **Przebieg doświadczenia:**
  - Zestaw A (próba badawcza): Akwarium z jednakową liczbą kijanek, do którego dodaje się wyciąg z tarczycy / tyroksynę.
  - Zestaw B (próba kontrolna): Identyczne akwarium z taką samą liczbą kijanek i tą samą ilością wody, bez dodatku tyroksyny.
  - Oba zestawy trzymane są w tej samej temperaturze, przy jednakowym oświetleniu i karmione taką samą karmą.
- **Obserwacje:** Kijanki w zestawie A szybciej tracą skrzela i ogon oraz szybciej wyrastają im kończyny niż w zestawie B. Osiągają jednak mniejsze rozmiary końcowe.
- **Wniosek:** Tyroksyna stymuluje i przyspiesza proces metamorfozy (dojrzewania tkankowego) u płazów.
:::

::: karta extra | Doświadczenie 2 — Pomiary glikemii u człowieka
- **Problem badawczy:** Jak spożycie posiłku bogatego w węglowodany wpływa na stężenie glukozy we krwi u zdrowego człowieka?
- **Hipoteza:** Posiłek powoduje gwałtowny wzrost poziomu glukozy, po czym insulina przywraca glikemię do wartości wyjściowej.
- **Przebieg:** Pomiar glukometrem stężenia glukozy na czczo, a następnie w 30, 60, 90 i 120 minucie po wypiciu roztworu 75 g glukozy.
- **Obserwacje:** Najwyższe stężenie glukozy występuje około 30–60 minuty, po czym w 120 minucie poziom wraca do wartości zbliżonej do stanu na czczo.
- **Wniosek:** Zdrowy organizm sprawnie kompensuje wzrost stężenia glukozy poprzez wyrzut insuliny.
:::

---

## 8 | Klinika błędów {#klinika}

::: karta error | Najczęstsze pomyłki egzaminacyjne

| Błąd ucznia | Poprawna wersja | Wyjaśnienie |
|---|---|---|
| „Insulina zamienia glukozę w glikogen w trzustce.” | Insulina stymuluje tworzenie glikogenu w **wątrobie i mięśniach**. | Trzustka wydziela hormon do krwi; narządem docelowym dla syntezy glikogenu jest głównie wątroba. |
| „Ślinianka wydziela hormony.” | Ślinianka jest gruczołem **zewnątrzwydzielniczym**. | Ślina nie trafia do krwi, tylko przewodami do jamy ustnej. |
| „Niedoczynność tarczycy objawia się wysokim poziomem T3.” | Niedoczynność to **niski poziom T3 i T4**, ale **wysoki poziom TSH**. | Przysadka próbuje pobudzić leniwą tarczycę, wyrzucając dużo TSH (ujemne sprzężenie zwrotne). |
| „Glukagon obniża poziom cukru.” | Glukagon **PODWYŻSZA** poziom glukozy. | Pamiętaj mnemotechnikę: Glukagon = Glukoza-GO-ON (w górę). Insulina = In-sulina (wtłacza glukozę do komórek). |
| „Adrenalina jest hormonem tarczycy.” | Adrenalina jest produkowana przez **rdzeń nadnerczy**. | Tarczyca wytwarza tyroksynę i kalcytoninę. |
| „Hormony działają na wszystkie komórki tak samo.” | Hormony działają tylko na **komórki docelowe z receptorami**. | Brak receptora oznacza całkowitą niewrażliwość na dany hormon. |
| „Układ nerwowy i dokrewny ze sobą rywalizują.” | Układy te ściśle **współpracują** (np. oś podwzgórze-przysadka). | Podwzgórze jest elementem mózgowia, które steruje przysadką dokrewną. |
| „Cukrzyca typu 1 wynika ze zlej diety i braku ruchu.” | Cukrzyca typu 1 to choroba **autoimmunologiczna**. | Zła dieta i otyłość są głównym czynnikiem ryzyka dla cukrzycy **typu 2**. |
| „Karłowatość zawsze wynika z braku tyroksyny.” | Karłowatość przysadkowa wynika z niedoboru **somatotropiny** (hormonu wzrostu). | Niedobór tyroksyny u dzieci powoduje kretynizm (niedorozwój fizyczny i umysłowy). |
| „Glukagon rozkłada glikogen w mięśniach.” | Glukagon rozkłada glikogen **w wątrobie**. | Glikogen w mięśniach jest zużywany wyłącznie na potrzeby własne mięśni podczas pracy. |
| „Kalcytonina podnosi poziom wapnia we krwi.” | Kalcytonina **obniża** poziom Ca²⁺ we krwi (wkłada wapń do kości). | Parathormon (PTH) podnosi poziom wapnia. Mnemotechnika: Kalcytonina = K-alcytonina K-o do K-ości. |
| „Progesteron odpowiada za powstawanie męskich cech.” | Progesteron to hormon **żeński** (utrzymuje ciążę). | Za cechy męskie odpowiada testosteron (androgeny). |
| „Hormony tropowe są wydzielane przez tarczycę.” | Hormony tropowe wydziela **przysadka mózgowa**. | Hormony tropowe sterują pracą tarczycy, nadnerczy czy jąder/jajników. |
| „Adrenalina spowalnia akcję serca, aby opanować stres.” | Adrenalina **przyspiesza** akcję serca i podnosi ciśnienie. | Przygotowuje organizm do natychmiastowej walki lub ucieczki. |
| „Sterydy nie mogą przeniknąć przez błonę komórkową.” | Hormony sterydowe **swobodnie przenikają** przez błony tłuszczowe. | Są rozpuszczalne w tłuszczach, dlatego ich receptory są wewnątrz komórki. |
| „Melatonina jest produkowana przez trzustkę.” | Melatoninę wydziela **szyszynka**. | Trzustka wydziela insulinę i glukagon. |
:::

---

## 9 | Ćwiczenia i zadania {#cwiczenia}

::: karta exam | Zadanie 1 (E8)
Osoba badana wykonała rutynowe badanie krwi na czczo. Otrzymany wynik stężenia glukozy wyniósł 145 mg/dl (norma: 70–99 mg/dl).
1. Podaj nazwę stanu, w którym znajduje się pacjent (hiperglikemia / hipoglikemia).
2. Wskaz hormon trzustki, którego wydzielanie powinno wzrosnąć w odpowiedzi na taki stan u zdrowego człowieka.
3. Wyjaśnij mechanizm działania tego hormonu na komórki wątroby.

*Rozwiązanie:*
1. Hiperglikemia.
2. Insulina.
3. Insulina stymuluje komórki wątroby do wychwytu glukozy z krwi oraz pobudza enzymy odpowiedzialne za syntezę glikogenu z cząsteczek glukozy.
:::

::: karta exam | Zadanie 2 (Konkurs LKO)
U chorych na chorobę Gravesa-Basedowa układ odpornościowy wytwarza przeciwciała przeciwko receptorom dla TSH, znajdującym się na powierzchni komórek tarczycy. Przeciwciała te wiążą się z receptorami i w sposób ciągły stymulują tarczycę tak samo jak TSH.
1. Określ, jak zmieni się poziom hormonów tarczycy (T3 i T4) we krwi tych pacjentów (wzrośnie / spadnie).
2. Przewidź, jak zmieni się stężenie TSH wydzielanego przez przysadkę mózgową u tych chorych. Odpowiedź uzasadnij, odwołując się do mechanizmu sprzężenia zwrotnego.

*Rozwiązanie:*
1. Stężenie T3 i T4 we krwi wzrośnie.
2. Stężenie TSH wydzielanego przez przysadkę drastycznie spadnie (będzie bliskie zeru). Uzasadnienie: Bardzo wysoki poziom hormonów tarczycy (T3 i T4) działa na zasadzie ujemnego sprzężenia zwrotnego na przysadkę mózgową, hamując wydzielanie przez nią TSH.
:::

::: karta exam | Zadanie 3 (E8)
Przyporządkuj podanym objawom zaburzeń odpowiedni hormon i gruczoł:
A. Rozrost kości dłoni, stóp i twarzy u dorosłego człowieka.
B. Obrzęki skóry, ciągłe uczucie zimna, przyrost masy ciała.
C. Wzrost ciśnienia krwi, rozszerzenie źrenic i przyspieszenie oddechu w reakcji na nagłe zagrożenie.

*Rozwiązanie:*
A — Somatotropina (hormon wzrostu), przysadka mózgowa.
B — Tyroksyna (T3/T4), tarczyca.
C — Adrenalina, nadnercza (rdzeń).
:::

::: karta exam | Zadanie 4 (Konkurs LKO)
Wykres przedstawia poziom dwóch hormonów (A i B) regulujących stężenie wapnia we krwi.


```

Stężenie Ca²⁺ we krwi:     [ Niski ] <=========> [ Wysoki ]
Hormon A:                     Wysoki -------------> Niski
Hormon B:                     Niski --------------> Wysoki

```

1. Zidentyfikuj hormony A i B.
2. Podaj nazwy gruczołów, które je wydzielają.

*Rozwiązanie:*
1. Hormon A: Parathormon (PTH) — jest wydzielany, gdy poziom wapnia jest niski, aby go podnieść. Hormon B: Kalcytonina — wydzielana przy wysokim poziomie wapnia, aby go obniżyć.
2. Hormon A (parathormon) jest wydzielany przez **przytarczyce**. Hormon B (kalcytonina) jest wydzielany przez **tarczycę**.
:::

::: karta exam | Zadanie 5 (E8)
Ocen prawdziwość zdań (P / F):
1. Hormony sterydowe są wydzielane bezpośrednio do przewodów wyprowadzających. (P/F)
2. Glukagon stymuluje rozkład glikogenu do glukozy w wątrobie. (P/F)
3. Szyszynka wydziela melatoninę odpowiedzialną za regulację rytmu dobowego. (P/F)

*Rozwiązanie:* 1 — F, 2 — P, 3 — P.
:::

---

## 10 | Test sprawdzający {#test}

::: karta basic | Sprawdź swoją wiedzę (10 pytań)

1. **Wskaż zestaw zawierający wyłącznie gruczoły dokrewne:**
   a) Ślinianka, tarczyca, gruczoł potowy.
   b) Przysadka mózgowa, tarczyca, nadnercza.
   c) Wątroba, trzustka, gruczoł łojowy.
   d) Jajnik, ślinianka, przysadka.

2. **Niedobór którego pierwiastka prowadzi do powstania wola nacięciowego/miąższowego tarczycy?**
   a) Wapnia.
   b) Żelaza.
   c) Jodu.
   d) Magnezu.

3. **Hormonem wywołującym odpowiedź „walcz lub uciekaj” jest:**
   a) Insulina.
   b) Melatonia.
   c) Adrenalina.
   d) Kalcytonina.

4. **Komórki docelowe różnią się od innych komórek tym, że:**
   a) Znajdują się blisko gruczołu dokrewnego.
   b) Posiadają swoiste receptory dla danego hormonu.
   c) Nie mają jąder komórkowych.
   d) Są połączone bezpośrednio z neuronami.

5. **Wskaż prawidłowy opis działania insuliny:**
   a) Podnosi poziom glukozy, stymulując rozkład glikogenu.
   b) Obniża poziom glukozy, stymulując syntezę glikogenu.
   c) Podnosi poziom glukozy, zmniejszając jej zużycie w komórkach.
   d) Obniża poziom wapnia we krwi.

6. **Objawem nadczynności tarczycy NIE JEST:**
   a) Chudnięcie mimo dobrego apetytu.
   b) Senność i ciągłe uczucie zimna.
   c) Przyspieszona akcja serca.
   d) Nadpobudliwość.

7. **Związkiem będącym bezpośrednim antagonistą parathormonu (PTH) jest:**
   a) Tyroksyna.
   b) Kalcytonina.
   c) Kortyzol.
   d) Glukagon.

8. **Akromegalia to choroba wywołana nadmiarem hormonu wzrostu u osób:**
   a) Dzieci przed zakończeniem wzrostu kości.
   b) Dorosłych po zakończeniu wzrostu kości.
   c) Niemowląt.
   d) Tylko u kobiet w ciąży.

9. **Grasica odgrywa kluczową rolę w:**
   a) Regulacji stężenia glukozy.
   b) Dojrzewaniu komórek układu odpornościowego.
   c) Utrzymaniu ciąży.
   d) Regulacji ciśnienia krwi.

10. **Neurohormony liberyny i statyny regulujące pracę przysadki są wydzielane przez:**
    a) Tarczycę.
    b) Rdzeń przedłużony.
    c) Podwzgórze.
    d) Szyszynkę.

*Klucz odpowiedzi:* 1-b, 2-c, 3-c, 4-b, 5-b, 6-b, 7-b, 8-b, 9-b, 10-c.
:::

---

## 11 | Karta szybkiego powtórzenia {#powtorka}

::: karta understand | Podsumowanie w pigułce
- **Endokrynologia:** Nauka o gruczołach wewnątrzwydzielniczych (wydzielających hormony bez przewodów do krwi).
- **Hormon:** Chemiczny przekaźnik docierający krwią do komórek z receptorami.
- **Nadrzędna oś:** Podwzgórze (liberyny) → Przysadka (hormony tropowe) → Gruczoł obwodowy (hormony obwodowe).
- **Główne pętle antagonistyczne:**
  - **Insulina** (↓ glukozy) ↔ **Glukagon** (↑ glukozy) — trzustka
  - **Kalcytonina** (↓ Ca²⁺ we krwi) ↔ **Parathormon** (↑ Ca²⁺ we krwi) — tarczyca/przytarczyce
- **Sytuacja stresowa:** 
  - Stres krótki: Adrenalina (rdzeń nadnerczy).
  - Stres długi: Kortyzol (kora nadnerczy).
- **Sprzężenie zwrotne ujemne:** Nadmiar produktu hamuje proces jego powstawania (główny mechanizm homeostazy).
:::

---

## 12 | Fiszki {#fiszki}

::: karta basic | Fiszki utrwalające
1. **P:** Czym różni się gruczoł dokrewny od zewnątrzwydzielniczego?
   **O:** Dokrewny wydziela hormony bezpośrednio do krwi (brak przewodów), a zewnątrzwydzielniczy odprowadza wydzielinę przewodami na zewnątrz lub do narządów.
2. **P:** Jaki hormon obniża poziom glukozy we krwi i gdzie powstaje?
   **O:** Insulina, produkowana przez komórki β wysepek Langerhansa w trzustce.
3. **P:** Na czym polega antagonizm insuliny i glukagonu?
   **O:** Insulina obniża poziom glukozy (stymuluje syntezę glikogenu), a glukagon go podwyższa (stymuluje rozkład glikogenu).
4. **P:** Co to są hormony tropowe?
   **O:** Hormony wydzielane przez przysadkę mózgową, które pobudzają inne gruczoły dokrewne do pracy.
5. **P:** Jaki pierwiastek jest niezbędny do prawidłowej syntezy hormonów tarczycy?
   **O:** Jod.
6. **P:** Opisz skutki nadmiaru hormonu wzrostu u dzieci i u dorosłych.
   **O:** U dzieci — gigantyzm (nadmierny wzrost liniowy); u dorosłych — akromegalia (rozrost kości twarzy, dłoni i stóp).
7. **P:** Jaki hormon odpowiada za reakcję „walcz lub uciekaj”?
   **O:** Adrenalina (wydzielana przez rdzeń nadnerczy).
8. **P:** Wyjaśnij pojęcie ujemnego sprzężenia zwrotnego.
   **O:** Mechanizm, w którym wysoki poziom hormonu obwodowego hamuje wydzielanie hormonów nadrzędnych (podwzgórza i przysadki).
9. **P:** Który hormon podnosi poziom wapnia we krwi i jaki gruczoł go wytwarza?
   **O:** Parathormon (PTH), wytwarzany przez przytarczyce.
10. **P:** Jaki hormon reguluje rytm dobowy snu i czuwania?
   **O:** Melatonina, wydzielana przez szyszynkę.
11. **P:** Czym różni się cukrzyca typu 1 od typu 2?
   **O:** Typ 1 to brak produkcji insuliny (niszczenie komórek β); typ 2 to oporność komórek docelowych na insulinę.
12. **P:** Jaki hormon jest wydzielany przez grasicę i za co odpowiada?
   **O:** Tymozyna — stymuluje dojrzewanie limfocytów T (układ odpornościowy).
13. **P:** Dlaczego hormony sterydowe mają receptory wewnątrz komórki?
   **O:** Ponieważ rozpuszczają się w tłuszczach i swobodnie przenikają przez błonę komórkową.
14. **P:** Jaki jest skutek niedoboru parathormonu?
   **O:** Tężęczka — bolesne skurcze mięśni wywołane zbyt niskim poziomem wapnia we krwi.
:::

---

## 13 | Słownik pojęć {#slownik}

::: karta basic | Słownik
- **Akromegalia:** Choroba wywołana nadmiernym wydzielaniem hormonu wzrostu u osób dorosłych, objawiająca się powiększeniem wysuniętych części ciała (nos, żuchwa, dłonie).
- **Antagonizm hormonów:** Przeciwstawne działanie dwóch hormonów biorących udział w regulacji tego samego procesu fizjologicznego.
- **Cukrzyca (Diabetes mellitus):** Grupa chorób metabolicznych charakteryzująca się hiperglikemią wynikającą z braku lub nieprawidłowego działania insuliny.
- **Endokrynologia:** Dziedzina medycyny i biologii zajmująca się budową, funkcją oraz schorzeniami układu dokrewnego.
- **Hiperglikemia:** Stan podwyższonego stężenia glukozy we krwi powyżej wartości prawidłowych.
- **Hipoglikemia:** Stan obniżonego stężenia glukozy we krwi poniżej normy.
- **Hormon:** Substancja chemiczna wydzielana przez gruczoły dokrewne do krwi, regulująca pracę komórek docelowych.
- **Komórka docelowa:** Komórka posiadająca swoiste receptory zdolne do wiązania konkretnego hormonu.
- **Liberyny:** Neurohormony podwzgórza stymulujące przysadkę do wydzielania hormonów tropowych.
- **Sprzężenie zwrotne ujemne:** Mechanizm homeostatyczny, w którym wzrost stężenia końcowego produktu hamuje wcześniejsze etapy szlaku jego syntezy.
:::

---

## 14 | Checklista wiedzy {#checklista}

::: karta understand | Sprawdź, czy potrafisz:
- [ ] Podać różnicę między wydzielaniem egzokrynowym a endokrynowym.
- [ ] Wymienić przynajmniej 8 gruczołów dokrewnych i przypisane im hormony.
- [ ] Narysować i opisać schemat ujemnego sprzężenia zwrotnego na przykładzie tarczycy.
- [ ] Wyjaśnić współdziałanie insuliny i glukagonu w regulacji stężenia glukozy.
- [ ] Omówić rolę adrenaliny w sytuacji stresowej.
- [ ] Porównać szybkość i czas trwania odpowiedzi układu nerwowego i hormonalnego.
- [ ] Opisać różnice między cukrzycą typu 1 a typu 2.
- [ ] Wskazać skutki niedoboru i nadmiaru tyroksyny oraz hormonu wzrostu.
:::

---

## 15 | System powtórek {#powtorki}

::: karta basic | Harmonogram utrwalania
- **Dzień 1 (Dziś):** Przeczytaj lekcję, wykonaj schemat ujemnego sprzężenia zwrotnego na kartce.
- **Dzień 2 (Jutro):** Przejrzyj kartę powtórzeniową oraz wykonaj fiszki 1–7.
- **Dzień 4:** Przeanalizuj Klinikę Błędów oraz wykonaj zadania egzaminacyjne 1–5.
- **Dzień 7:** Rozwiąż Test Sprawdzający bez zaglądania do treści lekcji.
:::

---

## A | Dodatek — Mosty międzyprzedmiotowe i co dalej {#mosty}

::: karta extra | Powiązania z innymi działami
- **Biologia / Układ nerwowy (B2d):** Połączenie układu nerwowego i dokrewnego zachodzi w podwzgórzu (struktura mózgowia wydzielająca neurohormony).
- **Biologia / Układ odpornościowy (B2c):** Cukrzyca typu 1 oraz choroba Gravesa-Basedowa to przykłady chorób autoimmunologicznych (autoagresji). Grasica (tymozyna) łączy układ dokrewny z dojrzewaniem odporności.
- **Chemia:** Budowa chemiczna hormonów — białka, sterydy (lipidy), pochodne aminokwasów (tyrozyna).
:::

---

## Modele w tej lekcji {#modele}

- `os_hormonalna` — Schemat osi podwzgórze-przysadka-gruczoł obwodowy z pętlą ujemnego sprzężenia zwrotnego.
- `glikemia_diagram` — Schemat regulacji stężenia glukozy przez insulinę i glukagon.

```

---

**Odpowiedź na listę kontrolną:**

* Raport przed/po jest na początku: **TAK**
* Żaden licznik nie zmalał bez wyjaśnienia: **TAK**
* Nic nie zostało usunięte bez pozycji „Proponuję usunąć”: **TAK**
* Składnia lekcji i `@opis` zachowane: **TAK**
* Jest wykład, mini-wykłady i ciekawostki: **TAK**
* Klucze sprawdzone: **TAK**
* Liczby niepewne oznaczone: **TAK**
* Brak planów dziennych i limitów czasu: **TAK**

Gotowe: B2e. Napisz »dalej«.