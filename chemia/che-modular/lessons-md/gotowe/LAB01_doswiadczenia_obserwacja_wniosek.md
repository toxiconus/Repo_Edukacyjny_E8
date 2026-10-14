---
kod: LAB01
tytul: Doświadczenia
opis: doświadczenie chemiczne · format protokołu · obserwacja vs wniosek · sprzęt laboratoryjny · BHP · typy doświadczeń · dokumentowanie · próba kontrolna · błędy pomiarowe
kicker: LAB01 · CHEMIA · Laboratorium · E8 / KONKURS
lead: Nauczysz się projektować, wykonywać i dokumentować doświadczenia chemiczne tak, jak wymaga tego egzamin ósmoklasisty i konkurs przedmiotowy — od problemu badawczego po wniosek, z pełnym BHP i rozróżnieniem faktu od interpretacji.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]][[extra:AMBITNE]]
uwaga: Zakres podstawy programowej klasy 7–8 oraz typowe zadania konkursowe; liczby w przykładach (pH, współczynniki) są orientacyjne i służą ilustracji.
stopka: **CHEMIA LAB01 v1.0** · Doświadczenia · 2026
stan: W1/W2 — uzupełnienia zewnętrznego audytu 2026-10-14 (zmienne i próby kontrolne, procedura po wypadku, tabela błędów zapisu, audyt wiarygodności, fiszki); W1 FULL do wykonania
---

::: minimum | Muszę umieć — 10 punktów
1. Zdefiniować doświadczenie chemiczne i podać jego cele.
2. Wymienić i stosować pełny format doświadczenia: Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP.
3. Rozróżnić obserwację (fakt zmysłowy) od wniosku (interpretacja).
4. Wymienić podstawowy sprzęt laboratoryjny i jego zastosowania.
5. Stosować kluczowe zasady BHP (kwas do wody, nie pipetować ustami, okulary, wentylacja, nie smakować).
6. Sporządzić protokół doświadczenia z wszystkimi elementami.
7. Rozpoznać typy doświadczeń: jakościowe, ilościowe, otrzymywanie, badanie właściwości, rozdział mieszanin.
8. Wskazać typowe błędy w doświadczeniach i je poprawić.
9. Zaprojektować proste doświadczenie z próbą kontrolną.
10. Udokumentować odchylenia od procedury i czynniki zakłócające.
:::

::: warstwy
- e8 | <b>Podstawa:</b> format doświadczenia, obserwacja ≠ wniosek, sprzęt, BHP, protokół, wykrywanie CO₂ / Cl⁻ / skrobi / białka, proste doświadczenia modelowe.
- understand | <b>Rozumienie:</b> dlaczego hipoteza może być fałszywa, znaczenie próby kontrolnej i ślepej, precyzja obserwacji, zakres wniosków.
- contest | <b>Konkurs:</b> projektowanie doświadczeń, analiza błędów systematycznych/losowych/grubych, uzasadnianie powtarzalności, scenariusze z pułapkami, protokół z oceną wiarygodności.
- extra | <b>Ambitne:</b> SDS (karta charakterystyki), szkło borokrzemowe, błędy pomiarowe, metoda naukowa, planowanie eksperymentu z kontrolami.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1 Wykład — od problemu do wniosku](#wyklad)
- [§2 Format doświadczenia i protokół](#format)
- [§3 Obserwacja a wniosek](#obserwacja-wniosek)
- [§4 Sprzęt laboratoryjny](#sprzet)
- [§5 BHP — zasady bezpieczeństwa](#bhp)
- [§6 Typy doświadczeń i wykrywanie](#typy)
- [§7 Doświadczenia modelowe](#doswiadczenia-modelowe)
- [§8 Klinika błędów](#klinika)
- [§9 Zadania konkursowe i ambitne](#zadania-konkursowe)
- [§10 Ćwiczenia](#cwiczenia)
- [§11 Test końcowy](#test)
- [§12 Fiszki · Słownik · Mapa · Ściąga](#fiszki)
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Nie czytaj biernie. Po każdym akapicie zatrzymaj się i odpowiedz sobie: „Co z tego zapamiętam i do czego to wykorzystam?”. Najpierw próbuj samodzielnie sformułować problem, hipotezę i obserwację, a dopiero potem porównuj z kluczem. Mów na głos schemat: „Problem, hipoteza, sprzęt, obserwacja, wniosek, równanie, BHP”. Rysuj schematy zestawów i tabele obserwacji — nawet proste szkice. Łap moment „aha!”: gdy nagle zrozumiesz, że „powstał H₂” to już wniosek, a nie obserwacja. Powtarzaj w odstępach: dziś całość, jutro fiszki i ściągę, za kilka dni protokoły i test. Zasada 80/20 tej lekcji: format doświadczenia, obserwacja ≠ wniosek, BHP, dokumentowanie. Wszystko inne jest rozwinięciem tych czterech filarów.

## 0.2 | Diagnoza {#diagnoza}

Sprawdź, co już wiesz, zanim wejdziesz w wykład.

::: test
? Co to jest doświadczenie chemiczne?
+ Celowe działanie badawcze, w którym badamy właściwości substancji lub przebieg reakcji, prowadzące do obserwacji i wniosków.
- Dowolna reakcja chemiczna w laboratorium.
- Tylko reakcja, która daje nową substancję.
- Pomiar masy lub objętości bez celu badawczego.
! Doświadczenie to celowe działanie z hipotezą, obserwacją i wnioskiem — nie każda reakcja jest doświadczeniem w sensie metodycznym.

? Które zdanie jest obserwacją, a nie wnioskiem?
+ W probówce pojawiły się pęcherzyki gazu.
- Wydzielił się wodór.
- Zaszła reakcja redoks.
- Powstał trudno rozpuszczalny osad AgCl.
! Obserwacja to fakt zmysłowy (pęcherzyki). „Wydzielił się wodór” i „powstał AgCl” to już interpretacje — wnioski.

? Który sposób postępowania jest bezpieczny?
+ Kwas wlewamy zawsze do wody.
- Wodę wlewamy zawsze do kwasu.
- Można pipetować ustami, jeśli odczynnik jest rozcieńczony.
- Zapach ocenia się, wdychając bezpośrednio nad naczyniem.
! Kwas do wody — ciepło rozcieńczania i ryzyko pryskania. Pipetowanie ustami i bezpośrednie wąchanie są zabronione.
? Do zasady sodowej z fenoloftaleiną dodawano kwas solny. Poprawna obserwacja to:
+ malinowa barwa roztworu zniknęła
- powstał chlorek sodu
- roztwór stał się obojętny
- zaszło zobojętnienie
! Zanik barwy to fakt zmysłowy; „zobojętnienie” i „powstał NaCl” to wnioski.

? Gwóźdź żelazny włożono do roztworu CuSO₄. Co zaobserwujesz?
+ na gwoździu czerwonobrunatny nalot, niebieska barwa roztworu słabnie
- gwóźdź znika, a roztwór robi się czerwony
- wydziela się gaz o duszącym zapachu
- brak widocznych zmian
! Żelazo jest aktywniejsze od miedzi i wypiera ją z soli: Fe + CuSO₄ → FeSO₄ + Cu.

? Którym wskaźnikiem odróżnisz kwas od roztworu obojętnego?
+ oranżem metylowym lub papierkiem uniwersalnym
- tylko fenoloftaleiną
- wodą wapienną
- płynem Lugola
! Fenoloftaleina jest bezbarwna zarówno w kwasowym, jak i obojętnym.

? Biały bezwodny CuSO₄ niebieszczeje po dodaniu cieczy. Wniosek:
+ ciecz zawiera wodę
- ciecz jest kwasem
- powstał tlen
- ciecz zawiera skrobię
! Bezwodny siarczan(VI) miedzi(II) przyłącza wodę i tworzy niebieski hydrat CuSO₄·5H₂O.
:::

::: odp | Pokaż klucz
1. Celowe działanie badawcze z obserwacją i wnioskiem.
2. „W probówce pojawiły się pęcherzyki gazu” — obserwacja.
3. Kwas wlewamy zawsze do wody.
:::

## 1 | Wykład — od problemu do wniosku {#wyklad}

Wyobraź sobie, że masz przed sobą pustą probówkę, kawałek magnezu i butelkę z rozcieńczonym kwasem solnym. Co zrobisz? Możesz wrzucić metal i patrzeć, co się stanie. To jeszcze nie jest doświadczenie chemiczne. Doświadczenie zaczyna się wtedy, gdy masz pytanie, przewidywanie, plan i sposób, w jaki zapiszesz to, co zobaczysz. Chemia laboratoryjna to nie magia — to uporządkowana procedura, która pozwala odróżnić fakt od domysłu i bezpiecznie sprawdzić hipotezę.

Doświadczenie chemiczne to celowe działanie, w którym badamy właściwości substancji lub przebieg reakcji chemicznej. Jego celem może być sprawdzenie hipotezy, poznanie właściwości, wykrycie obecności substancji albo otrzymanie produktu. Każde dobre doświadczenie ma stały szkielet: problem (pytanie badawcze), hipotezę (przewidywany wynik), sprzęt i odczynniki, dokładny opis wykonania, obserwacje (to, co naprawdę widzimy, słyszymy lub czujemy), wnioski (interpretację obserwacji), równanie reakcji (jeśli dotyczy) oraz zasady BHP.

Najważniejsza pułapka, w którą wpadają uczniowie, brzmi: „Obserwacja: powstał wodór”. To nie jest obserwacja. Obserwacją są pęcherzyki gazu, charakterystyczny dźwięk przy zbliżeniu płomienia, zmiana barwy, pojawienie się osadu. „Powstał wodór” to już wniosek — wynik rozumowania. Na egzaminie i w konkursie ocenia się właśnie umiejętność oddzielenia faktu od interpretacji. Jeśli napiszesz „obserwacja: powstał H₂”, tracisz punkty, nawet jeśli chemicznie masz rację.

Sprzęt laboratoryjny ma swoje role. Probówka służy do małych ilości i ogrzewania, zlewka do mieszania, pipeta (z gruszką!) do przenoszenia objętości, cylinder miarowy do odmierzania, parownica do odparowywania. BHP nie jest listą zakazów „dla formalności” — to realne zabezpieczenie przed oparzeniami, zatruciem i pożarem. Kwas zawsze wlewamy do wody, nigdy odwrotnie. Nie pipetujemy ustami. Nie smakujemy. Zapach oceniamy wachlowaniem. Okulary i fartuch to standard. Odpady zbieramy zgodnie z instrukcją, a nie wylewamy automatycznie do zlewu.

Dokumentowanie doświadczenia to protokół: data, tytuł, cel, hipoteza, sprzęt, krok po kroku wykonanie, obserwacje, wnioski, równanie, BHP oraz — co często pomijane — notatka o błędach i odstępstwach. Doświadczenie, które nie da się powtórzyć, bo brakuje opisu, nie jest wiarygodne. Próba kontrolna (bez badanej zmiennej) i ślepa próba (bez badanej substancji) pozwalają sprawdzić, czy efekt naprawdę pochodzi od tego, co badamy.

W tej lekcji przejdziesz od definicji przez format, obserwację, sprzęt, BHP, typy doświadczeń i pięć gotowych protokołów modelowych, aż do projektowania własnych doświadczeń i analizy błędów. Warstwa konkursowa nauczy Cię uzasadniać powtarzalność, rozróżniać błędy systematyczne, losowe i grube oraz budować protokół, który wytrzyma krytykę.

::: karta understand | W skrócie — czym jest doświadczenie
Doświadczenie chemiczne = celowe działanie badawcze z hipotezą, obserwacją i wnioskiem. Nie każda reakcja w pracowni jest doświadczeniem w sensie metodycznym. Klucz: najpierw pytanie i przewidywanie, potem procedura, potem fakty, na końcu interpretacja.
:::

## 2 | Format doświadczenia i protokół {#format} [[basic:E8]]

Każde doświadczenie zapisujemy w stałym formacie. Dzięki temu inna osoba (albo Ty za tydzień) może je powtórzyć i porównać wyniki.

| Element | Co zawiera | Przykład |
|---------|------------|----------|
| Problem | pytanie badawcze | „Czy magnez reaguje z kwasem solnym?” |
| Hipoteza | przewidywany wynik | „Wydzieli się wodór” |
| Sprzęt i odczynniki | naczynia + substancje | Mg (wstążka), HCl (rozcieńczony), probówka, zapalniczka |
| Opis wykonania | kroki po kolei | Wrzucić Mg, dodać HCl, zbliżyć płomień do wylotu |
| Obserwacja | fakty zmysłowe (bez interpretacji) | Pęcherzyki gazu; gaz pali się z charakterystycznym „szczekiem” |
| Wniosek | interpretacja obserwacji | Magnez reaguje z HCl; wydziela się wodór |
| Równanie | zapis reakcji | Mg + 2HCl → MgCl₂ + H₂ |
| BHP | zasady bezpieczeństwa | Okulary; wodór jest palny — ostrożność |

**Protokół doświadczenia** zawiera dodatkowo: datę, tytuł, uwagi o błędach i odstępstwach od procedury oraz czynniki zakłócające. Dokumentujemy wszystko — także to, co „poszło nie tak”. Brak notatki o błędzie sprawia, że ten sam błąd powtórzy się przy kolejnym wykonaniu.

**Karta na sprawdzian (wypełnij puste):**
1. Temat / problem: …
2. Hipoteza: …
3. Sprzęt i odczynniki: …
4. BHP (2 punkty): …
5. Tok (3–5 kroków): …
6. Obserwacja (zmysły, bez „więc powstał tlenek”): …
7. Wniosek: …
8. Równanie (jeśli dotyczy): …
9. Co mogło pójść nie tak (1 źródło błędu): …

::: karta core | Format — zapamiętaj na zawsze
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
(+ opis wykonania albo schemat zestawu — na egzaminie często jako rysunek z podpisanymi odczynnikami)
:::

::: karta understand | W skrócie — po co hipoteza
Hipoteza to przewidywanie, które sprawdzamy. Może być fałszywa — i to jest w porządku. Bez hipotezy nie wiemy, co weryfikujemy. Fałszywa hipoteza często uczy więcej niż potwierdzona.
:::

### Problem, zmienne i próba kontrolna

W doświadczeniu rozróżniamy:

- **zmienną niezależną** — czynnik, który celowo zmieniamy;
- **zmienną zależną** — wielkość lub efekt, który obserwujemy albo mierzymy;
- **zmienne kontrolowane** — warunki, które utrzymujemy takie same;
- **próbę kontrolną** — układ porównawczy bez badanego czynnika.

Przykład: badamy, czy temperatura wody wpływa na czas rozpuszczania cukru. Zmienna niezależna: temperatura wody. Zmienna zależna: czas rozpuszczania. Zmienne kontrolowane: masa cukru, objętość wody, naczynie, mieszanie. Próba kontrolna: woda o temperaturze pokojowej. Nie wolno jednocześnie zmieniać temperatury, ilości cukru i mieszania — nie będzie wiadomo, który czynnik dał wynik.

Przykład chemiczny: chcesz sprawdzić, czy ciecz zawiera wodę za pomocą bezwodnego CuSO₄. Próba badana: ciecz + biały CuSO₄. Kontrola dodatnia: znana woda — proszek zmienia barwę na niebieską. Kontrola ujemna: ciecz wiadomie bez wody. Niebieska barwa w próbie badanej wskazuje na wodę, ale trzeba wykluczyć zanieczyszczenie próbki.

## 3 | Obserwacja a wniosek {#obserwacja-wniosek} [[basic:E8]] [[understand:ROZUMIENIE]]

**Obserwacja** — opis tego, co można bezpośrednio stwierdzić wzrokiem, słuchem lub bezpiecznym pomiarem (zapach tylko metodą wachlowania; nie dotykamy i nie smakujemy substancji), bez interpretacji.

**Wniosek** — interpretacja obserwacji, wynik rozumowania.

Przykłady:

- Obserwacja: biały, serowaty osad.  
  Wniosek: powstaje AgCl (trudno rozpuszczalny).  
  Błąd: „Obserwacja: powstał AgCl”.

- Obserwacja: pęcherzyki gazu; gaz pali się z charakterystycznym dźwiękiem.  
  Wniosek: wydziela się wodór.  
  Błąd: „Obserwacja: wydziela się wodór”.

- Obserwacja: roztwór zmienia barwę z niebieskiej na jasnozieloną.  
  Wniosek: jony Cu²⁺ przechodzą w Fe²⁺ (reakcja redoks).  
  Błąd: „Obserwacja: zachodzi redoks”.

- Obserwacja: papierek uniwersalny przyjmuje barwę czerwoną.  
  Wniosek: roztwór ma odczyn kwasowy.

::: nie-myl | Obserwacja ≠ wniosek
- Obserwacja ≠ wniosek — obserwacja to fakt zmysłowy; wniosek to interpretacja; test rozstrzygający: czy da się to zobaczyć/usłyszeć/poczuć bez wiedzy chemicznej? Jeśli nie — to wniosek.
- „Powstał H₂” ≠ obserwacja — to już nazwa substancji; poprawnie: pęcherzyki gazu + „szczek”.
- „Roztwór zmienił barwę” ≠ pełna obserwacja — trzeba podać z jakiej na jaką.
:::

::: karta warning | Pułapka egzaminacyjna
Na egzaminie często proszą o „obserwację”. Uczeń pisze „powstał tlenek” albo „wydzielił się wodór” i traci punkt. Zawsze najpierw fakt zmysłowy, potem osobno wniosek.
:::

### Jak zapisać dobrą obserwację?

Dobra obserwacja jest:

- konkretna: „roztwór zmienił barwę z niebieskiej na jasnozieloną”;
- bez nazwy produktu: nie „powstał CuCl₂”, lecz „pojawił się biały osad”;
- bez wyjaśnienia przyczyny: nie „zaszła reakcja zobojętniania”, lecz „zanikła malinowa barwa fenoloftaleiny”;
- kompletna: barwa, wygląd osadu, wydzielanie gazu, zmiana temperatury;
- zgodna z tym, co widać: jeśli nic się nie zmieniło, napisz „nie zaobserwowano widocznych zmian”.

## 4 | Sprzęt laboratoryjny {#sprzet} [[basic:E8]]

| Sprzęt | Zastosowanie |
|--------|--------------|
| Probówka | małe ilości, reakcje, ogrzewanie (otwór od siebie) |
| Zlewka | mieszanie, ogrzewanie (nie do silnego prażenia) |
| Kolba stożkowa | mieszanie, miareczkowanie |
| Kolba okrągłodenna | ogrzewanie cieczy, destylacja |
| Pipeta | przenoszenie objętości (z gruszką / pipetorem) |
| Biureta | precyzyjne dozowanie cieczy |
| Cylinder miarowy | odmierzanie objętości |
| Parownica | odparowywanie |
| Tygiel | prażenie |
| Moździerz z tłuczkiem | rozdrabnianie |
| Eksykator | przechowywanie w suchym środowisku |
| Chłodnica | skraplanie par |
| Statyw, łapa, szczypce | mocowanie i trzymanie |
| Palnik | ogrzewanie |

**Odczynniki — podział:**
- ciała stałe: kryształy, proszki, granulki;
- ciecze: roztwory, stężone kwasy i zasady;
- gazy: w butlach lub otrzymywane in situ.

Szkło borokrzemowe lepiej znosi szok termiczny niż zwykłe szkło sodowo-wapniowe — stąd preferencja w pracowniach.

::: karta understand | W skrócie — sprzęt a bezpieczeństwo
Probówkę ogrzewamy zawsze otworem od siebie i od innych. Pipety nigdy ustami — tylko gruszka lub pipetor. Nie zwracamy nadmiaru odczynnika do butelki (zanieczyszczenie zapasu).
:::

## 5 | BHP — zasady bezpieczeństwa {#bhp} [[basic:E8]] [[exam:KONKURS]]

| Zasada | Treść |
|--------|--------|
| Kwas do wody | zawsze kwas wlewamy do wody (ciepło rozcieńczania, ryzyko pryskania) |
| Zapach | wachlowanie ręką; nigdy bezpośrednio nad naczyniem |
| Kontakt ze skórą / oczami | płukać wodą; wołać nauczyciela |
| Pipeta | nie pipetować ustami — gruszka lub pipetor |
| Okulary i fartuch | ochrona oczu i odzieży |
| Rękawice | wtedy, gdy właściwe dla danej substancji |
| Ogień | według instrukcji; włosy związane, odzież niepalna |
| Nie smakować | nigdy — żaden odczynnik nie jest „do jedzenia” |
| Nie zwracać odczynników | nadmiar nie wraca do butelki |
| Zamknięte naczynia | nie ogrzewać zamkniętych — ryzyko wybuchu |
| Wentylacja | praca z gazami — okap lub dobra wentylacja |
| Odpady | zbierać zgodnie z instrukcją; nie wylewać automatycznie do zlewu |

**Uwagi konkursowe i olimpijskie:**
- Kolejność dodawania odczynników bywa częścią BHP i wyniku (np. kwas do wody).
- Przy doświadczeniach z gazami planujemy wentylację i ograniczamy skalę.
- Nie poleca się uczniowi samodzielnego wykonywania doświadczeń z silnymi kwasami, zasadami, toksycznymi gazami, stężonym nadtlenkiem wodoru ani metalami reagującymi gwałtownie z wodą.
- Płyn Lugola (jodyna) plami skórę i odzież; nie jest odczynnikiem spożywczym.
- Próba spalania gazu wymaga małej ilości gazu, odpowiedniego sprzętu i nadzoru.
- SDS (karta charakterystyki substancji) — dokument z informacjami o zagrożeniach i postępowaniu; hasło warstwy ambitnej.

::: karta extra | Ciekawostka — dlaczego kwas do wody
Rozcieńczanie stężonego kwasu siarkowego(VI) lub solnego jest silnie egzotermiczne. Gdy wlewamy wodę do kwasu, lokalnie może dojść do gwałtownego wrzenia i pryskania. Gdy kwas wlewamy do wody, ciepło rozprasza się w większej objętości.
:::

::: karta extra | Ciekawostka — pipeta ustami
Historycznie pipetowano ustami. Dziś jest to całkowicie niedopuszczalne — ryzyko połknięcia lub wchłonięcia oparów. Gruszka lub pipetor to standard.
:::

::: karta extra | Ciekawostka — nie zwracać nadmiaru
Nigdy nie wlewamy niewykorzystanego odczynnika z powrotem do butelki. Zanieczyszczamy wtedy cały zapas. Nadmiar trafia do odpadów zgodnie z instrukcją.
:::

### Co zrobić po wypadku?

- Kontakt substancji ze skórą: natychmiast spłucz dużą ilością wody i zgłoś to nauczycielowi lub opiekunowi.
- Kontakt z oczami: płucz oczy nieprzerwanie wodą, nie pocieraj ich i natychmiast zgłoś wypadek.
- Rozlanie substancji: nie sprzątaj samodzielnie nieznanej lub żrącej substancji; odsuń się i zgłoś problem.
- Skaleczenie szkłem: nie zbieraj odłamków ręką; użyj odpowiedniego sprzętu albo zgłoś wypadek.
- Pożar: odsuń palne materiały, wyłącz źródło ciepła, powiadom opiekuna i postępuj zgodnie z instrukcją pracowni.

BHP ma pierwszeństwo przed wynikiem doświadczenia. Jeśli wykonanie procedury jest niebezpieczne, doświadczenia nie wykonuj samodzielnie.

## 6 | Typy doświadczeń i wykrywanie {#typy} [[basic:E8]] [[understand:ROZUMIENIE]]

| Typ | Cel | Przykład |
|-----|-----|----------|
| Jakościowe | wykrycie substancji | próba jodowa (skrobia), AgNO₃ (Cl⁻) |
| Ilościowe | pomiar (masa, objętość) | miareczkowanie |
| Otrzymywanie | synteza produktu | otrzymywanie CuSO₄ |
| Badanie właściwości | obserwacja zachowania | reakcja Mg z HCl |
| Rozdział mieszanin | separacja składników | filtracja, destylacja, krystalizacja |

**Wykrywanie — klasyczne próby szkolne:**

| Substancja / jon | Odczynnik / metoda | Obserwacja | Wniosek |
|------------------|--------------------|------------|---------|
| CO₂ (tlenek węgla(IV)) | woda wapienna Ca(OH)₂ | zmętnienie (biały osad) | obecność CO₂; CaCO₃↓ |
| Cl⁻ | AgNO₃ | biały, serowaty osad | AgCl↓ |
| SO₄²⁻ | BaCl₂ | biały osad | BaSO₄↓ |
| Skrobia | płyn Lugola (jodyna) | granatowe / niebiesko-fioletowe zabarwienie | obecność skrobi |
| Białko | odczynnik biuretowy (Cu²⁺ + zasada) | fioletowe zabarwienie | obecność wiązań peptydowych |
| Glukoza (cukry redukujące) | odczynnik Fehlinga / Trommera | czerwony osad Cu₂O | obecność cukru redukującego |

**Uwaga o wodzie wapiennej:** nadmiar CO₂ może ponownie rozpuścić osad:
CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂.
Czas przepuszczania gazu i jego ilość wpływają na wynik — stąd znaczenie kontroli i ograniczenia skali.

::: karta understand | W skrócie — próba kontrolna i ślepa
**Próba kontrolna** — doświadczenie bez badanej zmiennej. Pozwala ustalić, czy efekt pochodzi od tej zmiennej.  
**Ślepa próba** — próba z samymi odczynnikami i rozpuszczalnikiem, bez badanej substancji. Pozwala wykluczyć wpływ odczynnika lub procedury. Nie myl jej z próbą kontrolną, w której badany czynnik jest po prostu nieobecny.
:::

::: karta extra | Ciekawostka — powtarzalność
Doświadczenie jest powtarzalne, jeśli inni uzyskują podobne wyniki przy tych samych warunkach. To podstawa metody naukowej. Jednorazowy wynik bez opisu i kontroli ma małą wartość.
:::

## 7 | Doświadczenia modelowe {#doswiadczenia-modelowe} [[basic:E8]]

::: dosw | Doświadczenie 1 — Reakcja magnezu z kwasem solnym
Problem: Czy magnez reaguje z kwasem solnym?  
Hipoteza: Wydzieli się wodór.  
Sprzęt: wstążka Mg, rozcieńczony HCl, probówka, zapalniczka, okulary.  
Przebieg: Wrzucić Mg do probówki, dodać HCl, po chwili ostrożnie zbliżyć płomień do wylotu.  
Obserwacja: Pęcherzyki gazu; gaz pali się z charakterystycznym „szczekiem”; metal znika.  
Wniosek: Magnez reaguje z HCl; wydziela się wodór.  
Równanie: Mg + 2HCl → MgCl₂ + H₂  
BHP: Okulary; wodór jest palny — mała ilość gazu, ostrożność; nie wykonywać bez nadzoru.
:::

::: dosw | Doświadczenie 2 — Wykrywanie tlenku węgla(IV)
Problem: Jak wykryć CO₂?  
Hipoteza: CO₂ mętni wodę wapienną.  
Sprzęt: woda wapienna Ca(OH)₂, rurka, probówka.  
Przebieg: Delikatnie przepuszczać gaz (np. z reakcji CaCO₃ + HCl lub z wydychanego powietrza) przez wodę wapienną.  
Obserwacja: Woda wapienna mętnieje (biały osad).  
Wniosek: Gaz zawiera CO₂; powstaje trudno rozpuszczalny CaCO₃.  
Równanie: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O  
BHP: Nie wciągać wody wapiennej do ust; okulary.
:::

::: dosw | Doświadczenie 3 — Odczyn roztworu
Problem: Jaki odczyn ma roztwór HCl?  
Hipoteza: Kwasowy.  
Sprzęt: rozcieńczony HCl, papierek uniwersalny, probówka.  
Przebieg: Zanurzyć papierek w roztworze, porównać z wzorcem.  
Obserwacja: Papierek przyjmuje barwę czerwoną (orientacyjnie pH ≈ 1).  
Wniosek: Roztwór HCl ma odczyn kwasowy.  
Równanie: HCl → H⁺ + Cl⁻ (w uproszczeniu); dokładniej HCl + H₂O → H₃O⁺ + Cl⁻  
BHP: Okulary; HCl żrący — nie smakować, nie wąchać bezpośrednio.
:::

::: dosw | Doświadczenie 4 — Strącanie chlorku srebra
Problem: Jak wykryć jony Cl⁻ w roztworze?  
Hipoteza: AgNO₃ daje biały osad z Cl⁻.  
Sprzęt: roztwór AgNO₃, roztwór NaCl, probówka, rękawice, okulary.  
Przebieg: Do roztworu NaCl dodać kilka kropli AgNO₃.  
Obserwacja: Biały, serowaty osad.  
Wniosek: Powstaje AgCl (trudno rozpuszczalny).  
Równanie: AgNO₃ + NaCl → AgCl↓ + NaNO₃  
BHP: AgNO₃ plami skórę i jest żrący — okulary, rękawice; nie wylewać do zlewu bez instrukcji.
:::

::: dosw | Doświadczenie 5 — Rozkład węglanu wapnia
Problem: Co powstaje przy prażeniu CaCO₃?  
Hipoteza: Powstaje CaO i CO₂.  
Sprzęt: CaCO₃ (kreda), parownica, palnik, woda wapienna, okulary.  
Przebieg: Prażyć CaCO₃, wykrywać wydzielany gaz wodą wapienną.  
Obserwacja: Wydziela się gaz mętniący wodę wapienną; pozostaje biały proszek.  
Wniosek: CaCO₃ → CaO + CO₂.  
Równanie: CaCO₃ →(Δ) CaO + CO₂↑  
BHP: Ogrzewanie — ostrożnie; okulary; wentylacja.
:::

::: dosw | Doświadczenie 6 — Wykrywanie skrobi
Problem: Czy próbka zawiera skrobię?  
Hipoteza: Płyn Lugola da granatowe zabarwienie.  
Sprzęt: płytka, pipeta, rękawiczki, okulary, płyn Lugola, próbka (np. ziemniak, chleb).  
Przebieg: Nałożyć kroplę płynu Lugola na próbkę.  
Obserwacja: Pojawia się granatowe / niebiesko-fioletowe zabarwienie.  
Wniosek: Próbka zawiera skrobię lub substancję dającą reakcję charakterystyczną dla skrobi.  
BHP: Nie spożywać próbek ani odczynnika; chronić odzież i oczy; płyn Lugola plami.
:::

::: dosw | Doświadczenie 7 — Wykrywanie białka
Problem: Czy próbka zawiera białko?  
Hipoteza: Odczynnik biuretowy da fioletowe zabarwienie.  
Sprzęt: próbka (np. białko jaja), odczynnik biuretowy, probówka, okulary, rękawice.  
Przebieg: Dodać odczynnik biuretowy do próbki w środowisku zasadowym.  
Obserwacja: Fioletowe zabarwienie.  
Wniosek: Obecne są wiązania peptydowe wykrywalne w tej próbie.  
BHP: NaOH żrący — okulary, rękawice.
:::

::: dosw | Doświadczenie 8 — Rozdzielanie mieszaniny (piasek + sól + woda)
Problem: Jak rozdzielić mieszaninę piasku, soli i wody?  
Hipoteza: Filtracja oddzieli piasek; odparowanie oddzieli sól od wody.  
Sprzęt: lejek, sączek, zlewka, parownica, palnik.  
Przebieg: 1) filtracja → piasek na sączku; 2) odparowanie przesączu → sól.  
Obserwacja: Na sączku pozostaje piasek; po odparowaniu białe kryształki soli.  
Wniosek: Filtracja wykorzystuje nierozpuszczalność piasku; odparowanie — lotność wody.  
BHP: Ogrzewanie — ostrożnie; okulary.
:::

## 7a | Katalog doświadczeń egzaminacyjnych — obserwacja → wniosek → równanie {#katalog} [[basic:E8]] [[exam:KONKURS]]

Na egzaminie ósmoklasisty i w konkursie najczęściej nie wykonujesz doświadczenia — dostajesz **schemat** (probówka, odczynnik, strzałka) i masz zapisać **obserwację, wniosek i równanie**. Poniżej zebrane są doświadczenia, które powtarzają się w arkuszach. Ucz się ich jako trójek: *co widać → co to znaczy → jak to zapisać*. Zakryj dwie ostatnie kolumny i sprawdzaj się.

::: karta understand | W skrócie — jak pisać obserwacje, żeby nie tracić punktów
Opisuj **zmianę**: barwa „z … na …”, pojawienie się lub zniknięcie osadu (podaj barwę i wygląd: galaretowaty, serowaty, krystaliczny), wydzielanie gazu (pęcherzyki, szum, zapach — tylko wachlowaniem), zmiana temperatury (probówka się ogrzewa), światło, roztworzenie się ciała stałego. Nie używaj nazw produktów i słów „zaszła reakcja”, „powstał”. Jeśli niczego nie widać — napisz to: „brak widocznych zmian” to też obserwacja i często klucz do zadania.
:::

**Gazy — otrzymywanie i wykrywanie**

| Doświadczenie | Obserwacja | Wniosek | Równanie |
|---|---|---|---|
| H₂O₂ + szczypta MnO₂ (katalizator); żarzące się łuczywo u wylotu | intensywne pęcherzyki bezbarwnego gazu; łuczywo rozpala się jasnym płomieniem | wydziela się tlen; MnO₂ przyspiesza rozkład i się nie zużywa | 2H₂O₂ →(MnO₂) 2H₂O + O₂↑ |
| ogrzewanie KMnO₄ (manganian(VII) potasu); łuczywo | żarzące się łuczywo rozpala się | przy ogrzewaniu wydziela się tlen | 2KMnO₄ →(T) K₂MnO₄ + MnO₂ + O₂↑ |
| cynk + kwas solny; płomień u wylotu odwróconej probówki | pęcherzyki bezbarwnego gazu, cynk się roztwarza; „szczeknięcie” przy płomieniu | wydziela się wodór | Zn + 2HCl → ZnCl₂ + H₂↑ |
| kreda (CaCO₃) + kwas solny; gaz przez wodę wapienną | burzenie, pęcherzyki; woda wapienna mętnieje | wydziela się tlenek węgla(IV) | CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ |

**Tlenki, wodorotlenki, odczyn**

| Doświadczenie | Obserwacja | Wniosek | Równanie |
|---|---|---|---|
| spalanie magnezu w powietrzu (pokaz) | oślepiająco białe światło, powstaje biały proszek | magnez łączy się z tlenem | 2Mg + O₂ → 2MgO |
| CaO (wapno palone) + woda + fenoloftaleina | probówka się ogrzewa, fenoloftaleina barwi się na malinowo | powstaje zasada (wodorotlenek wapnia), reakcja egzotermiczna | CaO + H₂O → Ca(OH)₂ |
| sód + woda z fenoloftaleiną (tylko pokaz nauczyciela) | sód topi się w srebrzystą kulkę i porusza po powierzchni, syczy; roztwór malinowy | powstaje wodór i zasada sodowa | 2Na + 2H₂O → 2NaOH + H₂↑ |
| spalanie siarki (pod wyciągiem), gaz do wody z oranżem metylowym | niebieski płomień, gaz o ostrym, duszącym zapachu; oranż zmienia barwę na czerwoną | powstaje tlenek siarki(IV), w wodzie daje kwas | S + O₂ → SO₂; SO₂ + H₂O → H₂SO₃ |
| zasada sodowa z fenoloftaleiną + kwas solny kroplami | malinowa barwa znika po dodaniu kwasu | zaszło zobojętnienie — odczyn obojętny lub kwasowy | NaOH + HCl → NaCl + H₂O |

**Osady i reakcje metali z solami**

| Doświadczenie | Obserwacja | Wniosek | Równanie |
|---|---|---|---|
| CuSO₄ (niebieski roztwór) + NaOH | niebieski galaretowaty osad | powstaje trudno rozpuszczalny wodorotlenek miedzi(II) | CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄ |
| FeCl₃ (żółty roztwór) + NaOH | brunatnordzawy osad | powstaje wodorotlenek żelaza(III) | FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl |
| gwóźdź żelazny w roztworze CuSO₄ | na gwoździu czerwonobrunatny nalot, niebieska barwa roztworu słabnie | żelazo (aktywniejsze) wypiera miedź z soli | Fe + CuSO₄ → FeSO₄ + Cu |
| drut miedziany w roztworze AgNO₃ | na drucie szary, srebrzysty nalot, roztwór niebieszczeje | miedź wypiera srebro (srebro jest mniej aktywne) | Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag |
| czarny CuO + rozcieńczony H₂SO₄, lekko ogrzewane | czarny proszek znika, roztwór staje się niebieski | tlenek metalu reaguje z kwasem — powstaje sól i woda | CuO + H₂SO₄ → CuSO₄ + H₂O |

**Woda, roztwory, białka, korozja**

| Doświadczenie | Obserwacja | Wniosek | Równanie / uwaga |
|---|---|---|---|
| biały bezwodny CuSO₄ + kropla badanej cieczy | biały proszek niebieszczeje | ciecz zawiera wodę | CuSO₄ + 5H₂O → CuSO₄·5H₂O |
| ogrzewanie niebieskich kryształów CuSO₄·5H₂O | kryształy bieleją, na zimnych ściankach probówki kropelki cieczy | hydrat traci wodę krystalizacyjną | CuSO₄·5H₂O →(T) CuSO₄ + 5H₂O |
| przewodnictwo: woda destylowana, roztwór cukru, roztwór soli kuchennej | żarówka (dioda) świeci tylko w roztworze soli | sól jest elektrolitem — w roztworze są jony | NaCl → Na⁺ + Cl⁻ (dysocjacja, nie reakcja) |
| białko jaja + ogrzewanie / etanol / roztwór CuSO₄ | białko ścina się (biały osad), osad nie znika po dodaniu wody | denaturacja — nieodwracalna zmiana struktury białka | brak równania na tym poziomie |
| białko jaja + stężony roztwór NaCl, potem dużo wody | osad pojawia się, a po rozcieńczeniu wodą znika | wysalanie — proces odwracalny (to nie denaturacja) | brak równania |
| korozja: gwoździe w 3 probówkach — woda z powietrzem; woda przegotowana pod warstwą oleju; suche powietrze nad środkiem osuszającym | rdzawy nalot tylko w probówce z wodą i powietrzem | do korozji żelaza potrzebne są jednocześnie woda i tlen | uproszczenie: żelazo + tlen + woda → rdza (uwodniony tlenek żelaza(III)) |

::: nie-myl | Wskaźniki — nie myl barw
- fenoloftaleina ≠ oranż metylowy — fenoloftaleina: w kwasowym i obojętnym bezbarwna, w zasadowym malinowa; oranż metylowy: w kwasowym czerwony, w obojętnym i zasadowym pomarańczowożółty; test rozstrzygający: fenoloftaleiną nie odróżnisz kwasu od roztworu obojętnego.
- papierek uniwersalny ≠ jeden wskaźnik — to mieszanina wskaźników: kwasowy czerwony/pomarańczowy, obojętny żółtozielonkawy, zasadowy zielononiebieski do granatowego; daje przybliżone pH.
- odbarwienie ≠ zmiana barwy — „roztwór się odbarwił” znaczy, że stał się bezbarwny (np. fenoloftaleina przy zobojętnianiu, woda bromowa z alkenem).
- zmętnienie ≠ osad na dnie — zmętnienie to drobne cząstki zawieszone w cieczy (np. woda wapienna z CO₂); osad może opaść na dno później.
:::

::: dosw | Doświadczenie 9 — Od czego zależy rdzewienie żelaza (z próbami kontrolnymi)
Problem: Jakie czynniki są potrzebne do korozji żelaza?
Hipoteza: Żelazo rdzewieje tylko wtedy, gdy ma kontakt jednocześnie z wodą i tlenem.
Sprzęt: 3 probówki, 3 czyste gwoździe, woda z kranu, woda przegotowana i ostudzona, olej, środek osuszający (np. bezwodny chlorek wapnia), korki.
Przebieg: Probówka A — gwóźdź do połowy w wodzie z kranu, otwarta. Probówka B — gwóźdź całkowicie w wodzie przegotowanej (bez rozpuszczonego powietrza), na powierzchni warstwa oleju. Probówka C — gwóźdź w suchym powietrzu nad środkiem osuszającym, zamknięta korkiem. Obserwujemy przez kilka dni.
Obserwacja: Rdzawy nalot pojawia się tylko na gwoździu w probówce A; w B i C brak widocznych zmian.
Wniosek: Do korozji potrzebna jest jednocześnie woda i tlen. Probówki B (bez tlenu) i C (bez wody) są próbami kontrolnymi — każda wyłącza jeden czynnik.
BHP: Środek osuszający drażni skórę — rękawice; po doświadczeniu umyć ręce.
:::

::: karta extra | Ciekawostka — „powietrze związane” i woda wapienna
Szkocki chemik Joseph Black w połowie XVIII w. (ok. 1754–1756) zauważył, że przy prażeniu węglanów i działaniu na nie kwasów wydziela się gaz, który mętni wodę wapienną. Nazwał go „powietrzem związanym”, bo był „związany” w kredzie i wapieniu. Dziś mówimy: tlenek węgla(IV). Próba z wodą wapienną jest więc starsza niż nazwy pierwiastków, których używamy.
:::

::: karta extra | Ciekawostka — płyn Lugola ma prawie 200 lat
Roztwór jodu w jodku potasu opisał w 1829 r. francuski lekarz Jean Lugol — początkowo jako lek. Do wykrywania skrobi używamy go, bo cząsteczki jodu wchodzą do wnętrza spiralnych łańcuchów skrobi i tworzą granatowy kompleks; ogrzanie rozkręca spirale i barwa słabnie.
:::

## 8 | Klinika błędów {#klinika} [[basic:E8]] [[exam:KONKURS]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Obserwacja: powstał H₂.” | Obserwacja: pęcherzyki gazu; wniosek: wydziela się H₂ (potwierdzony „szczekiem”). | Obserwacja ≠ wniosek. „H₂” to interpretacja, nie fakt zmysłowy. |
| Brak hipotezy. | Hipoteza sformułowana przed doświadczeniem. | Bez hipotezy nie ma czego weryfikować. Hipoteza może być fałszywa — i to jest OK. |
| Brak BHP. | BHP obowiązkowe w każdym protokole. | Ryzyko wypadku; na egzaminie utrata punktów. |
| „Zawsze tak jest.” / „Na pewno.” | Wniosek dotyczy konkretnych warunków. | Z jednego doświadczenia nie wynika uniwersalność. |
| „Roztwór się zmienił.” | Konkretna obserwacja: z niebieskiej na jasnozieloną. | Precyzja — bez szczegółów obserwacja jest bezużyteczna. |
| Brak równania. | Równanie w protokole (jeśli dotyczy). | Procedura wymaga pełnego zapisu. |
| Brak opisu wykonania. | Opis krok po kroku. | Bez opisu doświadczenie nie jest powtarzalne. |
| „Wszystko działa.” | Opis odchyleń i czynników zakłócających. | Dokumentacja błędów zapobiega ich powtarzaniu. |
| Pipetowanie ustami. | Gruszka / pipetor. | Ryzyko zatrucia / poparzenia. |
| Wąchanie „pełną piersią”. | Wachlowanie ręką lub w ogóle nie. | Opary żrące / toksyczne. |
:::

::: mity
„Obserwacja to to samo co wniosek.” || Nie. Obserwacja = fakt zmysłowy; wniosek = interpretacja. Mylenie ich to najczęstszy błąd na egzaminie.
„Hipoteza musi być prawdziwa.” || Nie. Hipoteza to przewidywanie — może się nie potwierdzić. To normalna część metody naukowej.
„Jeden wynik = prawo.” || Nie. Jeden wynik w konkretnych warunkach nie stanowi prawa. Potrzebna powtarzalność i kontrole.
„Wszystkie odczynniki można wąchać i smakować.” || Absolutnie nie. Żaden odczynnik laboratoryjny nie jest do smakowania; zapach tylko wachlowaniem i za zgodą prowadzącego.
:::

### Błędy w zapisie doświadczeń

| Błędny zapis | Co jest nie tak? | Poprawa |
|---|---|---|
| „Obserwacja: powstał wodór” | To wniosek, nie fakt zmysłowy. | „Pojawiły się pęcherzyki; gaz dał charakterystyczny trzask przy płomieniu”. |
| „Woda wapienna jest biała” | Opisano odczynnik, nie zmianę. | „Bezbarwna woda wapienna zmętniała i pojawił się biały osad”. |
| „Zaszła reakcja zobojętniania” | To interpretacja. | „Malinowa barwa fenoloftaleiny zniknęła”. |
| „Wydzielił się chlor, bo był żółtozielony” | Sama barwa może nie wystarczyć do identyfikacji. | Podaj obserwację i dodatkową próbę potwierdzającą, jeśli jest wymagana. |
| „Nie było wyniku” | Zbyt ogólne. | „Po 2 minutach nie zaobserwowano zmiany barwy ani osadu”. |
| „Dodano dużo odczynnika” | Brak ilości utrudnia powtórzenie. | Podaj objętość, liczbę kropli albo przybliżoną masę. |

## 9 | Zadania konkursowe i ambitne {#zadania-konkursowe} [[exam:KONKURS]] [[extra:AMBITNE]]

::: karta exam | Zadanie 1 (3 pkt) — Obserwacja czy wniosek
Oceń poniższe zdania. Dla każdego wskaż, czy jest to obserwacja, czy wniosek, i uzasadnij krótko.
a) W probówce pojawiły się pęcherzyki gazu. (1 pkt)
b) Wydzielił się wodór. (1 pkt)
c) Roztwór zmienił barwę z niebieskiej na jasnozieloną. (1 pkt)

::: odp | Pokaż klucz
a) Obserwacja — fakt zmysłowy (widzimy pęcherzyki). (1 pkt)
b) Wniosek — interpretacja (nazywamy gaz). (1 pkt)
c) Obserwacja — fakt zmysłowy (zmiana barwy z … na …). (1 pkt)
:::
:::

::: karta exam | Zadanie 2 (4 pkt) — Pełny protokół Zn + HCl
Napisz pełny protokół doświadczenia: reakcja cynku z kwasem solnym.
Uwzględnij: problem, hipotezę, sprzęt, przebieg (3–5 kroków), obserwację, wniosek, równanie, BHP (co najmniej 2 zasady).

::: odp | Pokaż klucz
Problem: Czy cynk reaguje z kwasem solnym? (0,5 pkt)
Hipoteza: Wydzieli się wodór. (0,5 pkt)
Sprzęt: Zn, HCl (rozcieńczony), probówka, zapalniczka, okulary. (0,5 pkt)
Przebieg: Wrzucić Zn, dodać HCl, zbliżyć płomień do wylotu. (1 pkt)
Obserwacja: Pęcherzyki gazu; gaz pali się z „szczekiem”. (0,5 pkt)
Wniosek: Cynk reaguje z HCl; wydziela się wodór. (0,5 pkt)
Równanie: Zn + 2HCl → ZnCl₂ + H₂ (0,5 pkt)
BHP: Okulary; wodór palny — ostrożność. (0,5 pkt)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — Popraw błędy
Popraw poniższe fragmenty protokołu:
a) „Obserwacja: powstał H₂.” (1 pkt)
b) „Wniosek: zawsze tak jest.” (1 pkt)
c) „BHP: brak.” (1 pkt)

::: odp | Pokaż klucz
a) Obserwacja: pęcherzyki gazu; wniosek: wydziela się H₂. (1 pkt)
b) Wniosek dotyczy konkretnych warunków (np. w tych warunkach Zn reaguje z HCl). (1 pkt)
c) BHP: okulary; nie pipetować ustami; wentylacja (przykłady). (1 pkt)
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — Wykrywanie
Jak wykryć: a) CO₂, b) Cl⁻, c) skrobię? Podaj odczynnik i oczekiwaną obserwację.

::: odp | Pokaż klucz
a) Woda wapienna — zmętnienie (biały osad). (1 pkt)
b) AgNO₃ — biały, serowaty osad. (1 pkt)
c) Płyn Lugola — granatowe / niebiesko-fioletowe zabarwienie. (1 pkt)
:::
:::

::: karta exam | Zadanie 5 (4 pkt) — Próba kontrolna
Zaprojektuj doświadczenie badające wpływ katalizatora na szybkość rozkładu H₂O₂. Uwzględnij próbę kontrolną. Napisz: problem, hipotezę, opis próby właściwej i kontrolnej, oczekiwaną obserwację i wniosek.

::: odp | Pokaż klucz
Problem: Czy katalizator przyspiesza rozkład H₂O₂? (0,5 pkt)
Hipoteza: Tak — w obecności katalizatora wydzielanie gazu będzie szybsze. (0,5 pkt)
Próba właściwa: H₂O₂ + katalizator. (1 pkt)
Próba kontrolna: H₂O₂ bez katalizatora (te same warunki). (1 pkt)
Obserwacja: szybsze wydzielanie pęcherzyków w próbie z katalizatorem. (0,5 pkt)
Wniosek: Katalizator przyspiesza rozkład (przy zachowanych pozostałych warunkach). (0,5 pkt)
:::
:::

::: adv | Zadanie 6 (4 pkt) — Błędy pomiarowe | poziom ambitny
Wyjaśnij różnicę między błędem systematycznym, losowym i grubym. Podaj po jednym przykładzie z doświadczenia laboratoryjnego i sposób ograniczenia każdego z nich.

::: odp | Pokaż klucz
Błąd systematyczny — powtarzalny, zawsze w tę samą stronę (np. niekalibrowana waga); ograniczenie: kalibracja. (1,5 pkt)
Błąd losowy — przypadkowy (np. drgania, wahania odczytu); ograniczenie: powtarzanie pomiarów, uśrednianie. (1,5 pkt)
Błąd gruby — pomyłka (np. zła jednostka, złe naczynie); ograniczenie: uważność, sprawdzenie procedury. (1 pkt)
:::
:::

::: adv | Zadanie 7 (4 pkt) — Projekt doświadczenia konkursowego | poziom ambitny
Zaprojektuj doświadczenie pozwalające odróżnić alkan od alkenu. Podaj pełny format (problem, hipoteza, sprzęt, przebieg, obserwacja, wniosek, równanie, BHP) oraz uzasadnij, dlaczego alkany zwykle nie dają tego samego efektu.

::: odp | Pokaż klucz
Problem: Jak odróżnić alkan od alkenu? (0,5 pkt)
Hipoteza: Alken odbarwi wodę bromową, alkan nie. (0,5 pkt)
Sprzęt: woda bromowa, próbki, probówki, okulary, rękawice. (0,5 pkt)
Przebieg: Dodać wodę bromową do obu próbek. (0,5 pkt)
Obserwacja: Odbarwienie w próbce alkenu; brak zmiany w próbce alkanu. (0,5 pkt)
Wniosek: Alken ulega addycji Br₂; alkan nie reaguje w tych warunkach. (0,5 pkt)
Równanie: CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (0,5 pkt)
BHP: Brom żrący — okulary, rękawice; wentylacja. (0,5 pkt)
Uzasadnienie: Alken ma wiązanie podwójne zdolne do addycji; alkan ma tylko pojedyncze. (1 pkt łącznie z powyższymi)
:::
:::

::: adv | Zadanie 8 (3 pkt) — Znajdź błąd w protokole | poziom ambitny
W protokole ucznia zapisano: „Obserwacja: powstał tlenek węgla(IV). Wniosek: gaz mętni wodę wapienną.” Znajdź błąd, popraw i uzasadnij.

::: odp | Pokaż klucz
Błąd: zamienione obserwacja i wniosek. (1 pkt)
Poprawnie: Obserwacja — woda wapienna mętnieje (biały osad); wniosek — gaz zawiera CO₂ / powstał tlenek węgla(IV). (1 pkt)
Uzasadnienie: Mętnienie to fakt zmysłowy; nazwa substancji to interpretacja. (1 pkt)
:::
:::

::: karta exam | Zadanie 9 (3 pkt) — Uzupełnij obserwacje
Do trzech probówek zawierających: I — roztwór siarczanu(VI) miedzi(II), II — roztwór chlorku żelaza(III), III — zasadę sodową z fenoloftaleiną dodano: I — zasadę sodową, II — zasadę sodową, III — kwas solny w nadmiarze. Zapisz obserwację dla każdej probówki.
::: odp | Pokaż klucz
I — powstaje niebieski galaretowaty osad (1 pkt). II — powstaje brunatnordzawy osad (1 pkt). III — malinowa barwa roztworu znika (roztwór się odbarwia) (1 pkt). Nie uznaje się nazw produktów zamiast obserwacji.
:::
:::

::: karta exam | Zadanie 10 (2 pkt) — Wybierz odczynnik
W trzech nieopisanych probówkach są: kwas solny, zasada sodowa i roztwór chlorku sodu. Podaj jeden odczynnik, którym w jednym kroku odróżnisz wszystkie trzy, i zapisz oczekiwane obserwacje.
::: odp | Pokaż klucz
Papierek uniwersalny (lub wskaźnik uniwersalny) (1 pkt). Kwas solny — czerwona barwa, zasada sodowa — granatowa/niebieska, chlorek sodu — żółtozielonkawa (odczyn obojętny) (1 pkt). Fenoloftaleina nie wystarczy: nie odróżni kwasu od roztworu obojętnego.
:::
:::

::: karta exam | Zadanie 11 (3 pkt) — Próby kontrolne w korozji
Na podstawie Doświadczenia 9 odpowiedz: a) Która probówka jest próbą badawczą, a które kontrolnymi? b) Po co gotuje się wodę i przykrywa ją olejem? c) Sformułuj wniosek.
::: odp | Pokaż klucz
a) Badawcza — A (woda i powietrze); kontrolne — B (bez tlenu) i C (bez wody) (1 pkt). b) Gotowanie usuwa rozpuszczone powietrze (tlen), a olej nie pozwala mu wrócić do wody (1 pkt). c) Żelazo koroduje tylko przy jednoczesnej obecności wody i tlenu (1 pkt).
:::
:::

::: karta exam | Zadanie 12 (2 pkt) — Dlaczego nic się nie stało?
Uczeń włożył żelazny gwóźdź do roztworu siarczanu(VI) cynku i po godzinie nie zauważył żadnych zmian. Zapisz obserwację i wyjaśnij jej przyczynę.
::: odp | Pokaż klucz
Obserwacja: brak widocznych zmian (1 pkt). Wyjaśnienie: żelazo jest mniej aktywne od cynku (w szeregu aktywności cynk stoi przed żelazem), więc nie wypiera cynku z jego soli — reakcja nie zachodzi (1 pkt).
:::
:::

::: karta exam | Zadanie 13 (2 pkt) — Ile gazu?
Na 10 g węglanu wapnia podziałano nadmiarem kwasu solnego. Oblicz masę wydzielonego tlenku węgla(IV). Masy: CaCO₃ — 100 u, CO₂ — 44 u.
::: odp | Pokaż klucz
Z równania CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂: ze 100 g CaCO₃ powstaje 44 g CO₂ (1 pkt), więc z 10 g — 4,4 g CO₂ (1 pkt). Kwas jest w nadmiarze, więc wynik liczymy z węglanu.
:::
:::

::: adv | Zadanie 14 (4 pkt) — Projekt: pokaż zobojętnianie krok po kroku | poziom ambitny
Zaprojektuj doświadczenie, które pokaże, że podczas dodawania kwasu solnego do zasady sodowej odczyn zmienia się z zasadowego na obojętny, a potem na kwasowy. Podaj wskaźnik(i), sposób dodawania kwasu, obserwacje na każdym etapie i równanie. Uzasadnij wybór wskaźnika.
::: odp | Pokaż klucz
Wskaźnik: papierek uniwersalny (lub kolejno fenoloftaleina i oranż metylowy), bo sama fenoloftaleina nie odróżni odczynu obojętnego od kwasowego (1 pkt). Kwas dodajemy kroplami, mieszając, i po każdej porcji sprawdzamy odczyn (1 pkt). Obserwacje: na początku barwa zasadowa (granatowa / malinowa), w punkcie zobojętnienia żółtozielonkawa / odbarwienie fenoloftaleiny, po nadmiarze kwasu czerwona (oranż czerwony) (1 pkt). Równanie: NaOH + HCl → NaCl + H₂O (1 pkt).
:::
:::

## 10 | Ćwiczenia {#cwiczenia} [[basic:E8]] [[understand:ROZUMIENIE]]

**A. Podstawa**
1. Wymień elementy formatu doświadczenia.
2. Co to obserwacja, a co wniosek? Podaj przykład pary.
3. Wymień 5 sprzętów laboratoryjnych i ich zastosowania.
4. Wymień 5 zasad BHP.
5. Co to protokół doświadczenia? Wymień jego elementy.

**B. Trening**
6. Dla reakcji Zn + HCl napisz: problem, hipotezę, obserwację, wniosek, równanie, BHP.
7. Dla reakcji AgNO₃ + NaCl — to samo.
8. Popraw: „Obserwacja: powstał H₂”.
9. Popraw: „Wniosek: zawsze tak jest”.
10. Wyjaśnij, dlaczego hipoteza może być fałszywa.

**C. Ambitne**
11. Zaprojektuj doświadczenie: wykrycie skrobi w produkcie (pełny format).
12. Zaprojektuj doświadczenie: odróżnienie alkanu od alkenu.
13. Zaprojektuj doświadczenie: odczyn roztworu mydła.
14. Wymień 5 typowych błędów w doświadczeniach.
15. Wyjaśnij, dlaczego protokół jest ważny.

**D. Zaawansowane / konkurs**
16. Co to próba kontrolna? Podaj przykład.
17. Co to ślepa próba?
18. Jak dokumentować odchylenia od procedury?
19. Jak ograniczyć błędy pomiarowe?
20. Jakie znaczenie ma powtarzalność doświadczenia?

::: odp | Pokaż klucz — ćwiczenia A–D
**A**
1. Problem, hipoteza, sprzęt, obserwacja, wniosek, równanie, BHP.
2. Obserwacja — fakt zmysłowy; wniosek — interpretacja. Np. pęcherzyki / wydziela się H₂.
3. Probówka (małe ilości), zlewka (mieszanie), pipeta (przenoszenie), cylinder (odmierzanie), palnik (ogrzewanie).
4. Kwas do wody; okulary; nie smakować; nie pipetować ustami; wachlowanie zapachu.
5. Zapis przebiegu: data, cel, hipoteza, sprzęt, wykonanie, obserwacja, wniosek, równanie, BHP, uwagi o błędach.

**B**
6. Problem: czy Zn reaguje z HCl? Hipoteza: wydzieli się H₂. Obserwacja: pęcherzyki. Wniosek: wydziela się wodór. Równanie: Zn + 2HCl → ZnCl₂ + H₂. BHP: okulary.
7. Problem: czy AgNO₃ reaguje z NaCl? Hipoteza: powstanie osad. Obserwacja: biały osad. Wniosek: powstaje AgCl. Równanie: AgNO₃ + NaCl → AgCl↓ + NaNO₃. BHP: AgNO₃ żrący.
8. Obserwacja: pęcherzyki gazu; wniosek: wydziela się H₂.
9. Wniosek dotyczy konkretnych warunków.
10. Hipoteza to przewidywanie — może być błędna; to element metody naukowej.

**C**
11–13. Format doświadczenia (skrobia + jodyna; woda bromowa; papierek uniwersalny).
14. Obserwacja ≠ wniosek; brak hipotezy; brak BHP; niekompletny opis; brak równania; zbyt szerokie wnioski.
15. Protokół = dokumentacja + powtarzalność + możliwość oceny wiarygodności.

**D**
16. Próba kontrolna — porównanie z warunkami bez zmiennej (np. bez katalizatora).
17. Ślepa próba — bez badanej substancji (kontrola odczynnika).
18. Notatka z datą, opis odchylenia, wpływ na wynik.
19. Powtarzanie, kalibracja, precyzyjny sprzęt, uśrednianie.
20. Powtarzalność → wiarygodność wyniku; podstawa metody naukowej.
:::

## 11 | Test końcowy {#test} [[basic:E8]] [[exam:KONKURS]]

::: test
? Wymień siedem elementów formatu doświadczenia.
+ Problem, hipoteza, sprzęt, obserwacja, wniosek, równanie, BHP
- Problem, hipoteza, wynik, BHP
- Obserwacja, wniosek, równanie
- Sprzęt, odczynniki, temperatura
! Pełny format to siedem elementów w stałej kolejności.

? Co to obserwacja?
+ Fakt zmysłowy bez interpretacji
- Interpretacja faktów
- Równanie reakcji
- Hipoteza
! Obserwacja = to, co widzimy/słyszymy/czujemy; wniosek = interpretacja.

? Jak wykryć tlenek węgla(IV)?
+ Wodą wapienną — zmętnienie
- Płynem Lugola — zabarwienie
- AgNO₃ — biały osad
- Odczynnikiem biuretowym — fiolet
! Klasyczna próba na CO₂ to woda wapienna.

? Która zasada BHP jest poprawna?
+ Kwas wlewamy do wody
- Wodę wlewamy do kwasu
- Pipetujemy ustami rozcieńczone roztwory
- Wąchamy bezpośrednio nad naczyniem
! Kwas do wody — bezpieczeństwo termiczne i mechaniczne.

? Dla reakcji Zn + HCl poprawna obserwacja to:
+ Pęcherzyki gazu
- Wydzielił się wodór
- Zaszła reakcja redoks
- Powstał ZnCl₂
! Tylko fakt zmysłowy jest obserwacją.

? Co to próba kontrolna?
+ Doświadczenie bez badanej zmiennej
- Doświadczenie bez żadnych odczynników
- Pomiar masy
- Równanie reakcji
! Kontrola pozwala sprawdzić, czy efekt pochodzi od badanej zmiennej.

? Jak wykryć skrobię?
+ Płynem Lugola — granatowe zabarwienie
- Wodą wapienną
- AgNO₃
- Odczynnikiem Fehlinga
! Próba jodowa / Lugola jest charakterystyczna dla skrobi.

? Co to błąd systematyczny?
+ Powtarzalny błąd (np. niekalibrowana waga)
- Przypadkowy błąd odczytu
- Pomyłka w jednostce
- Brak hipotezy
! Systematyczny = zawsze w tę samą stronę; ogranicza się kalibracją.

? Dlaczego nie wolno zwracać nadmiaru odczynnika do butelki?
+ Zanieczyszczenie całego zapasu
- Bo zajmuje miejsce
- Bo jest za drogi
- Bo tak każe nauczyciel bez powodu
! Zanieczyszczenie zapasu uniemożliwia dalsze użycie.

? Co powstaje w reakcji CaCO₃ z HCl (obserwacja + wniosek)?
+ Obserwacja: pęcherzyki; wniosek: wydziela się CO₂ (potwierdzony wodą wapienną)
- Obserwacja: powstał CO₂
- Tylko równanie
- Nic się nie dzieje
! Najpierw fakt, potem interpretacja + potwierdzenie.

? Podaj dwa przykłady cukrów redukujących wykrywanych próbą Fehlinga.
+ Glukoza, fruktoza (lub maltoza, laktoza)
- Sacharoza, skrobia
- Celuloza, glikogen
- Tylko glukoza
! Sacharoza nie jest cukrem redukującym bez hydrolizy.

? Co to SDS w kontekście BHP?
+ Karta charakterystyki substancji (zagrożenia i postępowanie)
- Rodzaj szkła
- Typ pipety
- Nazwa odczynnika
! SDS = Safety Data Sheet — warstwa ambitna BHP.
:::

## 11a | Audyt wiarygodności doświadczenia {#audyt-wiarygodnosci} [[exam:KONKURS]]

Przed zaakceptowaniem wyniku zadaj pięć pytań:

1. Czy problem jest sformułowany jako pytanie, a nie gotowy wniosek?
2. Czy zmieniono tylko jeden główny czynnik?
3. Czy istniała odpowiednia próba kontrolna?
4. Czy obserwacja jest zapisana bez interpretacji?
5. Czy wynik da się powtórzyć i czy zapisano odstępstwa od procedury?

**Trzy poziomy wiarygodności:**

- **Wynik niepewny:** pojedyncza obserwacja, brak kontroli, nieznane ilości.
- **Wynik częściowo wiarygodny:** procedura opisana, ale brak powtórzeń lub kontroli.
- **Wynik wiarygodny:** kontrolowane warunki, próba kontrolna, powtórzenia, dokładny opis i zgodność z równaniem reakcji.

Wniosek nie może być szerszy niż dane. Dodatni wynik próby na skrobię nie dowodzi, że próbka zawiera wyłącznie skrobię.

## 12 | Fiszki · Słownik · Mapa · Ściąga {#fiszki}

::: fiszki
Format doświadczenia | Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP | basic:format
Obserwacja — definicja | Fakt zmysłowy bez interpretacji | basic:obserwacja
Wniosek — definicja | Interpretacja obserwacji | basic:wniosek
Obserwacja ≠ wniosek | Nie mieszaj faktu z interpretacją | basic:obserwacja
BHP — kwas | Kwas zawsze do wody | basic:bhp
BHP — zapach | Wachlowanie ręką | basic:bhp
BHP — pipeta | Gruszka / pipetor, nigdy usta | basic:bhp
BHP — ubiór | Okulary, fartuch | basic:bhp
Sprzęt — probówka | Małe ilości, ogrzewanie (otwór od siebie) | basic:sprzet
Sprzęt — pipeta | Przenoszenie objętości | basic:sprzet
Sprzęt — cylinder | Odmierzanie objętości | basic:sprzet
Protokół — elementy | Data, cel, hipoteza, sprzęt, wykonanie, obserwacja, wniosek, równanie, BHP, błędy | basic:protokol
Wykrywanie CO₂ | Woda wapienna — zmętnienie | basic:wykrywanie
Wykrywanie Cl⁻ | AgNO₃ — biały osad AgCl | basic:wykrywanie
Wykrywanie SO₄²⁻ | BaCl₂ — biały osad BaSO₄ | basic:wykrywanie
Wykrywanie skrobi | Jodyna / Lugol — niebiesko-fioletowe | basic:wykrywanie
Wykrywanie białka | Biuretowa — fioletowe | basic:wykrywanie
Wykrywanie glukozy | Fehlinga — czerwony osad Cu₂O | basic:wykrywanie
Próba kontrolna | Bez badanej zmiennej | understand:kontrola
Ślepa próba | Bez badanej substancji (kontrola odczynnika) | understand:kontrola
Błąd systematyczny | Powtarzalny (np. niekalibrowana waga) | olimpijski:bledy
Błąd losowy | Przypadkowy (drgania, odczyt) | olimpijski:bledy
Błąd gruby | Pomyłka (zła jednostka) | olimpijski:bledy
Powtarzalność | Inni uzyskują podobne wyniki w tych samych warunkach | olimpijski:metoda
SDS | Karta charakterystyki substancji | olimpijski:bhp
Zmienna niezależna | czynnik celowo zmieniany w doświadczeniu | basic:metoda
Zmienna zależna | efekt obserwowany lub mierzony | basic:metoda
Zmienna kontrolowana | warunek utrzymywany bez zmian | understand:metoda
Reakcja Mg + HCl | Mg + 2HCl → MgCl₂ + H₂ | basic:reakcje
Wykrywanie tlenu | żarzące się łuczywo rozpala się | basic:wykrywanie
Wykrywanie wody | bezwodny CuSO₄ — z białego na niebieski | basic:wykrywanie
Fenoloftaleina | kwasowy i obojętny — bezbarwna; zasadowy — malinowa | basic:wskazniki
Oranż metylowy | kwasowy — czerwony; obojętny i zasadowy — pomarańczowożółty | basic:wskazniki
Cu(OH)₂ | niebieski galaretowaty osad (CuSO₄ + NaOH) | basic:osady
Fe(OH)₃ | brunatnordzawy osad (FeCl₃ + NaOH) | basic:osady
Fe w CuSO₄ | czerwonobrunatny nalot miedzi, roztwór jaśnieje | understand:metale
Korozja żelaza | potrzebne jednocześnie woda i tlen | understand:korozja
Denaturacja a wysalanie | denaturacja nieodwracalna; wysalanie odwracalne | understand:bialka
:::

::: slownik
Doświadczenie :: Celowe działanie badawcze, w którym badamy właściwości substancji lub przebieg reakcji, prowadzące do obserwacji i wniosków.
Hipoteza :: Przewidywany wynik doświadczenia; może być fałszywa.
Obserwacja :: Fakt zmysłowy bez interpretacji (to, co widzimy, słyszymy, czujemy).
Wniosek :: Interpretacja obserwacji; wynik rozumowania.
Protokół :: Pełna dokumentacja doświadczenia (data, cel, hipoteza, sprzęt, wykonanie, obserwacja, wniosek, równanie, BHP, błędy).
Próba kontrolna :: Doświadczenie bez badanej zmiennej; pozwala ustalić, czy efekt pochodzi od tej zmiennej.
Ślepa próba :: Próba bez badanej substancji; kontrola wpływu odczynników.
BHP :: Bezpieczeństwo i higiena pracy — zasady chroniące przed wypadkami.
Błąd systematyczny :: Powtarzalny błąd zawsze w tę samą stronę (np. niekalibrowany przyrząd).
Błąd losowy :: Przypadkowy błąd wynikający z wahań warunków lub odczytu.
Błąd gruby :: Pomyłka (zła jednostka, złe naczynie, pominięcie kroku).
Powtarzalność :: Cecha doświadczenia, które przy tych samych warunkach daje podobne wyniki u różnych wykonawców.
SDS :: Karta charakterystyki substancji (Safety Data Sheet) — informacje o zagrożeniach i postępowaniu.
Woda wapienna :: Roztwór Ca(OH)₂; odczynnik do wykrywania CO₂ (zmętnienie).
Płyn Lugola :: Roztwór jodu w jodku potasu; odczynnik do wykrywania skrobi.
Wskaźnik :: Substancja zmieniająca barwę zależnie od odczynu roztworu (np. fenoloftaleina, oranż metylowy, wskaźnik uniwersalny).
Osad :: Trudno rozpuszczalna substancja stała wydzielająca się z roztworu w czasie reakcji (opisuje się jej barwę i wygląd).
Zobojętnianie :: Reakcja kwasu z zasadą, w której powstają sól i woda.
Korozja :: Niszczenie metalu pod wpływem czynników środowiska; żelazo koroduje w obecności wody i tlenu.
Denaturacja :: Nieodwracalna zmiana struktury białka (np. pod wpływem temperatury, alkoholu, soli metali ciężkich).
:::

::: drzewo
DOŚWIADCZENIE
  FORMAT
    Problem
    Hipoteza
    Sprzęt
    Obserwacja
    Wniosek
    Równanie
    BHP
  OBSERWACJA vs WNIOSEK
  SPRZĘT
  BHP
  WYKRYWANIE
    CO₂ (woda wapienna)
    Cl⁻ (AgNO₃)
    SO₄²⁻ (BaCl₂)
    skrobia (jodyna)
    białko (biuretowa)
    glukoza (Fehlinga)
  PROTOKÓŁ
  TYPOWE BŁĘDY
  PRÓBA KONTROLNA i ŚLEPA
  BŁĘDY POMIAROWE
:::

::: checklista
- [ ] umiem wymienić 7 elementów formatu doświadczenia
- [ ] umiem odróżnić obserwację od wniosku na przykładach
- [ ] umiem wymienić podstawowy sprzęt i jego zastosowania
- [ ] umiem stosować kluczowe zasady BHP
- [ ] umiem napisać pełny protokół (w tym BHP i uwagi o błędach)
- [ ] umiem wykryć CO₂, Cl⁻, skrobię, białko, tlen, wodór i wodę
- [ ] dla doświadczeń z katalogu (§7a) zapisuję obserwację, wniosek i równanie
- [ ] dobieram wskaźnik do zadania i znam jego barwy
- [ ] umiem zaprojektować doświadczenie z próbą kontrolną
- [ ] umiem rozpoznać i poprawić typowe błędy w protokole
- [ ] umiem wyjaśnić różnicę między błędem systematycznym, losowym i grubym
- [ ] umiem uzasadnić znaczenie powtarzalności
:::

## 13 | Co dalej? {#dalej}

Po opanowaniu formatu, obserwacji, BHP i dokumentowania jesteś gotowy do pracy z konkretnymi reakcjami w dalszych lekcjach chemii organicznej i nieorganicznej. Każde kolejne doświadczenie modelowe w kursie będzie korzystało z tego szkieletu. Następny krok w laboratorium to świadome projektowanie kontroli i ocena wiarygodności wyniku — to już poziom konkursowy.

### AUDYT — Grok 4.5, 2026-10-12 {#audyt-ulepsz}
**Poprawione:**
- §2–§7: ujednolicono nazwę „tlenek węgla(IV)” zamiast „dwutlenek węgla” zgodnie z audytem W1.
- §3 i klinika: wzmocniono rozróżnienie obserwacja ≠ wniosek na wszystkich przykładach.
- §5: dodano zakaz samodzielnego wykonywania niebezpiecznych doświadczeń oraz uwagi o odpadach i skali.
- §7: uzupełniono doświadczenia o skrobię, białko i rozdzielanie mieszaniny z audytu W1; dodano próbę kontrolną jako element obowiązkowy w opisie.
- Wszystkie równania i klucze sprawdzone pod kątem bilansu i poprawności chemicznej.

**Dodane:**
- §0.1–0.2: instrukcja pracy i diagnoza.
- §1: pełny wykład od zera.
- §9: 8 zadań konkursowych/ambitnych z kluczami i punktacją (od NASTĘPNE ZADANIE = 1).
- §11: test końcowy 12 pytań.
- §12: 26 fiszek (w tym olimpijskie), 15 haseł słownika, mapa pojęć, checklista.
- Warstwa contest/extra: błędy pomiarowe, SDS, powtarzalność, projektowanie z kontrolą.
- 3 ciekawostki (kwas do wody, pipeta, nie zwracać nadmiaru).
- Mini-wykłady „W skrócie” (3+).

**Niepewne / do weryfikacji:**
- Orientacyjne wartości pH w przykładzie z papierkiem uniwersalnym.
- Szczegóły SDS — hasło warstwy ambitnej, bez pełnej procedury.

**Proponuję usunąć:**
- brak (cała treść materiału roboczego zachowana i rozbudowana).

**Źródła:**
- Materiał roboczy L011 MASTER v1.0 + uzupełnienia egzaminacyjne i wizualne.
- Audyt W1 Perplexity 2026-10-09 (LAB).
- Podstawa programowa i typowe arkusze CKE (zakres E8).

**Grafiki do zrobienia:**
| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|-------|--------|-------------|---------|-------|
| §2 po tabeli formatu | schemat statyczny | Siedem pudełek w kolejności: Problem → … → BHP | Format jest stały i obowiązkowy | Schemat siedmiu elementów formatu doświadczenia w kolejności od problemu do BHP. Wniosek: każdy protokół musi zawierać wszystkie elementy. |
| §3 po przykładach | schemat z podpisami do klikania | Lewa kolumna „obserwacja” (pęcherzyki, osad, barwa), prawa „wniosek” (H₂, AgCl, redoks) | Obserwacja ≠ wniosek | Interaktywne pary: po kliknięciu w obserwację pokazuje się poprawny wniosek i wyjaśnienie, dlaczego nie wolno ich mylić. |
| §4 | schemat statyczny | Podstawowy sprzęt z podpisami zastosowań | Sprzęt ma konkretne role | Zestaw naczyń laboratoryjnych z krótkimi podpisami zastosowań (probówka, zlewka, pipeta, cylinder, parownica). |
| §7 Doświadczenie 1 | doświadczenie wirtualne | Probówka z Mg + HCl, pęcherzyki, zbliżany płomień | Magnez reaguje, wydziela się H₂ | Animacja: wrzucenie Mg, pojawienie się pęcherzyków, zbliżenie płomienia, charakterystyczny dźwięk. Wniosek: reakcja metalu z kwasem. |

### Uzupełnienia Claude, 2026-10-12 {#uzupelnienia-claude}
Wersja Groka była krótka (ok. 41 KB, bez zbiorczego katalogu doświadczeń z priorytetu C4). Dodano: §7a — katalog 20 doświadczeń egzaminacyjnych w trójkach obserwacja → wniosek → równanie (gazy, tlenki i odczyn, osady i metale z solami, woda/roztwory/białka/korozja), mini-wykład o pisaniu obserwacji, `nie-myl` wskaźników, Doświadczenie 9 (korozja z próbami kontrolnymi), 2 ciekawostki (Joseph Black, Jean Lugol); zadania 9–14; +4 pytania testu, +9 fiszek, +5 haseł słownika, +2 pozycje checklisty. Poprawki: diagnoza ujęta w blok `::: test`, powtórzone pytanie o BHP w diagnozie przeformułowane, w formacie dopisany opis wykonania / schemat.

### AUDYT W1/W2 — zewnętrzny (2026-10-14)

Zastosowano (po sprawdzeniu w pliku):
- usunięto zduplikowany klucz `lead:` (był dwa razy);
- stan lekcji zmieniono na stan audytu, bez deklaracji „W1 FULL”;
- definicję obserwacji poprawiono: bez „czujemy”, z zasadą nieprzyjmowania substancji do ust i dotykania;
- dodano blok „Problem, zmienne i próba kontrolna” (zmienna niezależna, zależna, kontrolowane, próba kontrolna, przykłady);
- dodano „Jak zapisać dobrą obserwację?”;
- doprecyzowano „ślepą próbę” i odróżniono ją od próby kontrolnej;
- dopisano dokładniejsze równanie HCl + H₂O → H₃O⁺ + Cl⁻ (przy uproszczeniu zostawiono H⁺);
- dodano „Co zrobić po wypadku?” (kontakt ze skórą i oczami, rozlanie, skaleczenie, pożar);
- dodano tabelę „Błędy w zapisie doświadczeń” (sześć wierszy);
- dodano sekcję „Audyt wiarygodności doświadczenia” z trzema poziomami wiarygodności;
- dodano fiszki: zmienna niezależna, zależna, kontrolowana.

Nieprzyjęte (sprawdzone, już obecne lub błędne w audycie):
- „brak równań z indeksami” — równania z indeksami dolnymi są w katalogu 7a;
- „brak uwagi o CO₂ w próbie wapiennej” — uwaga o zmętnieniu jest w sekcji o typach doświadczeń;
- „brak notatki o błędach systematycznych/losowych” — obecne w sekcji o błędach pomiaru;
- „brak wpisu o ślepej próbie” — był, zdanie doprecyzowano zamiast dublować.

Do zrobienia: pełny W1 FULL linia po linii (bez tego lekcja nie dostaje oznaczenia FULL).
