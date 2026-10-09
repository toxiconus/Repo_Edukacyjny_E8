Audytuj pisz co poprawić , ulepszyc zmienić dodać bez usuwania treści. Ew korekta scalającą i itd

# Audyt pliku `PERPLEXITY_POLSKI.md`

Plik ma bardzo dobry zamysł dydaktyczny: łączy lektury, gramatykę, ćwiczenia, powtórki i przygotowanie do wypowiedzi argumentacyjnej. Największym problemem nie jest brak treści, lecz **nadmiar powtórzeń, kilka błędów merytorycznych, niejednolite nazewnictwo oraz zbyt kategoryczne formułowanie części zasad**. Poniższe zalecenia zakładają zachowanie całej obecnej zawartości i wprowadzenie korekty scalającej.

## 1. Najważniejsze poprawki

| Priorytet | Problem | Co zrobić |
|---|---|---|
| Bardzo wysoki | Brak pełnego modułu lektur z klas VII–VIII | Dodać osobny blok obejmujący wszystkie lektury wymagane w aktualnym zakresie E8. |
| Bardzo wysoki | Niepewne lub zbyt uproszczone informacje o egzaminie | Każde twierdzenie o formule E8, lekturach i zakresie zadań opatrzyć rokiem oraz źródłem CKE. |
| Bardzo wysoki | Błędy w rozdziale o liczebnikach | Poprawić odmianę, nazwy przypadków i przykłady liczebników zbiorowych. |
| Wysoki | Nieprecyzyjna zasada pisowni `nie` z imiesłowami | Rozdzielić zasady dla imiesłowów przymiotnikowych, przysłówkowych, przymiotników i czasowników. |
| Wysoki | Błędne lub ryzykowne przykłady interpunkcyjne z `który` | Opracować zasadę według funkcji całego zdania, nie według samego zaimka. |
| Wysoki | Wielokrotne powtarzanie tych samych sekcji | Zachować treść, ale przenieść powtórzenia do wspólnego modułu „Powtórka końcowa”. |
| Średni | Brak konsekwentnego klucza punktowania | Dodać punktację do wszystkich zadań otwartych i półotwartych. |
| Średni | Mieszanie poziomów PODSTAWA, E8, ROZSZERZENIE i OLIMPIADA | Przy każdym zadaniu wyraźnie oznaczyć poziom oraz cel. |
| Średni | Brak systemu wersjonowania zmian | Dodać tabelę zmian i rejestr błędów poprawionych w kolejnych wersjach. |

***

# 2. Struktura dokumentu

## Obecny problem

Dokument pełni jednocześnie funkcję:

- promptu dla modelu,
- konspektu kursu,
- treści sześciu lekcji,
- bazy ćwiczeń,
- instrukcji technicznej dla HTML,
- planu dalszego rozwoju.

To powoduje, że najważniejsze informacje są wielokrotnie powtarzane. Przykładowo w każdej lekcji osobno powracają: status lektury, informacja o CKE, motywy, „fakt versus interpretacja”, pułapki i sposób pracy.

## Zalecana korekta scalająca

Nie usuwać treści, lecz przenieść ją do następującego układu:

```markdown
# Polski Podstawa Plus

## 0. Informacje redakcyjne
- cel kursu
- grupa docelowa
- poziomy trudności
- zasady oznaczania sekcji
- zasady korzystania ze źródeł
- status materiału

## 1. Zasady wspólne dla wszystkich lekcji
### 1.1. Fakt, interpretacja, opinia
### 1.2. Bohater dynamiczny i statyczny
### 1.3. Schemat argumentu
### 1.4. Zasady pracy z lekturą
### 1.5. Zasady oceniania zadań
### 1.6. Pisownia „nie”
### 1.7. Interpunkcja zdań podrzędnych

## 2. Wykaz lektur i zakres egzaminacyjny
### 2.1. Lektury z klas IV–VI
### 2.2. Lektury z klas VII–VIII
### 2.3. Krótkie utwory, mity i fragmenty
### 2.4. Status lektury na konkretny rocznik egzaminu

## 3. Lekcje
### L001 ...
### L002 ...
### L003 ...

## 4. Wspólne repetytorium gramatyczne
### 4.1. Części mowy
### 4.2. Części zdania
### 4.3. Zdania złożone
### 4.4. Środki stylistyczne
### 4.5. Ortografia
### 4.6. Interpunkcja

## 5. Formy wypowiedzi
### 5.1. Rozprawka
### 5.2. Opowiadanie twórcze
### 5.3. Wypowiedź argumentacyjna
### 5.4. Przemówienie
### 5.5. List oficjalny
### 5.6. Ogłoszenie i zaproszenie

## 6. Arkusze i trening E8
### 6.1. Zadania zamknięte
### 6.2. Zadania krótkiej odpowiedzi
### 6.3. Zadania otwarte
### 6.4. Wypracowania

## 7. Repetytorium końcowe
### 7.1. Fiszki
### 7.2. Tabele
### 7.3. Test diagnostyczny
### 7.4. Test końcowy

## 8. Źródła i rejestr zmian
```

Takie scalanie ograniczy powtarzanie treści, ale jej nie usunie. W każdej lekcji można pozostawić krótką sekcję „Powiązania z zasadami wspólnymi”.

***

# 3. Uwagi do wszystkich lekcji

## Powtarzające się informacje

W każdej lekcji powtarzają się:

- informacja, że lektura należy do określonego zakresu klas IV–VI;
- zastrzeżenie dotyczące aktualnego informatora CKE;
- schemat „fakt versus interpretacja”;
- motywy literackie;
- modelowy akapit;
- fiszki;
- pułapki egzaminacyjne;
- podsumowanie;
- progi punktowe.

### Zalecenie

Zachować w lekcji tylko elementy specyficzne dla danego utworu. Wspólne wyjaśnienia przenieść do rozdziału centralnego, a w lekcjach stosować odsyłacze:

```markdown
> Zobacz: [Zasada pisowni „nie” z imiesłowami](../zasady/ortografia.md)
```

W wersji przeznaczonej dla ucznia można pozostawić skróconą ramkę:

```markdown
> **Przypomnienie:** Pełne wyjaśnienie znajduje się w module „Pisownia nie”.
```

***

# 4. L001 – lektury IV–VI i imiesłowy

## Najważniejsze zalety

- Dobre połączenie gramatyki z lekturami.
- Trafne rozróżnienie bohatera dynamicznego i statycznego.
- Bardzo dobre ćwiczenie zgodności podmiotu w konstrukcjach imiesłowowych.
- Słuszne podkreślenie, że Bilbo zauważa słaby punkt Smauga, lecz nie zabija smoka.
- Trafne odróżnienie faktu fabularnego od interpretacji.

## Poprawki merytoryczne

### 4.1. Zdanie o pisowni `nie` z imiesłowami

W dokumencie pojawia się uproszczenie:

> „nie z imiesłowami przymiotnikowymi piszemy łącznie lub rozdzielnie”.

To jest zbyt ogólne. Należy rozdzielić:

- imiesłowy przymiotnikowe;
- imiesłowy przysłówkowe;
- czasowniki;
- przymiotniki utworzone od imiesłowów;
- konstrukcje z wyraźnym przeciwstawieniem.

Proponowana wersja:

```markdown
## Pisownia „nie” z imiesłowami

### Imiesłowy przymiotnikowe
Z imiesłowami przymiotnikowymi „nie” zasadniczo piszemy łącznie:

- nieczytający uczeń,
- nieprzeczytana książka,
- niezapisane zadanie.

Rozdzielnie piszemy je w wyraźnym przeciwstawieniu:

- nie czytający, lecz słuchający uczeń;
- nie napisane przez ucznia, lecz przepisane zadanie.

### Imiesłowy przysłówkowe
Z imiesłowami przysłówkowymi „nie” piszemy rozdzielnie:

- nie czytając,
- nie przeczytawszy,
- nie wiedząc.

### Czasowniki
Z czasownikami „nie” piszemy rozdzielnie:

- nie czytam,
- nie przeczytał,
- nie odszedł.

Wyjątki należy sprawdzać w słowniku, np. „nienawidzić”, „niepokoić”.
```

W dokumencie trzeba usunąć lub poprawić przykłady sugerujące, że każda forma typu `nieczytający` automatycznie musi być zapisana łącznie. Ostateczny zapis zależy także od tego, czy dana forma ma znaczenie czasownikowe, czy przymiotnikowe.

### 4.2. Imiesłów przysłówkowy uprzedni

Warto dopisać, że imiesłów uprzedni oznacza czynność wcześniejszą, ale nie każdy czasownik tworzy od niego naturalną formę w codziennym użyciu.

Dodać przykłady:

```markdown
Przeczytawszy książkę, Bilbo odłożył ją na półkę.
Wróciwszy do Shire, Bilbo opowiedział o wyprawie.
Znalazłszy pierścień, Bilbo ukrył go przed Gollumem.
```

Należy również dodać ostrzeżenie, że imiesłowowy równoważnik zdania powinien mieć ten sam podmiot co zdanie główne:

```markdown
Idąc do szkoły, Edmund spotkał Piotra.
```

Niepoprawne:

```markdown
Idąc do szkoły, padał deszcz.
```

To zdanie sugeruje, że deszcz szedł do szkoły.

### 4.3. „Statyczny” nie znaczy „bierny”

To jest dobre rozróżnienie, ale powinno być przedstawione w osobnej ramce:

```markdown
> Bohater statyczny nie musi być bierny. Może działać, podejmować decyzje i wpływać na fabułę, ale nie przechodzi wyraźnej przemiany wewnętrznej.
```

Dotyczy to przede wszystkim Aslana, Gandalfa i Nemeczka.

### 4.4. Akademia Pana Kleksa

W opisie Akademii pojawia się informacja, że narratorem jest Adaś Niezgódka i że narracja ma charakter pamiętnikarski. Należy dopisać, że uczeń jest narratorem pierwszoosobowym, ale nie każda wypowiedź pierwszoosobowa automatycznie oznacza pamiętnik.

Bezpieczniejsza wersja:

```markdown
Narracja jest pierwszoosobowa. Adaś Niezgódka opowiada o wydarzeniach, w których uczestniczy. Opowieść ma charakter wspomnieniowy, ale należy rozróżnić narrację pierwszoosobową od gatunku pamiętnika.
```

### 4.5. „Chłopcy z Placu Broni”

Zdanie o śmierci Nemeczka warto zmienić z:

> „umiera w opracowaniach szkolnych na zapalenie płuc”

na:

```markdown
Po wydarzeniach nad stawem oraz udziale w obronie Placu Broni Nemeczek ciężko choruje i umiera. W szkolnych opracowaniach jego chorobę często określa się jako zapalenie płuc, jednak w odpowiedzi egzaminacyjnej najbezpieczniej opisać bezpośrednio wydarzenia i ich konsekwencje.
```

To ogranicza ryzyko, że uczeń potraktuje termin z opracowania jako dosłowną, jedyną formę odpowiedzi.

***

# 5. L002 – „Hobbit” i nieodmienne części mowy

## Najważniejsza korekta

W lekcji znajduje się przykład:

> „Czy słaby punkt Smauga odkrył Bilbo czy Thorin?”

oraz opis dwóch wyrazów `czy`.

To zdanie jest nienaturalne i dydaktycznie niebezpieczne, ponieważ uczeń może mieć problem z jednoznaczną klasyfikacją drugiego `czy`.

### Zalecana zamiana

Zamiast tego użyć dwóch wyraźnych przykładów:

```markdown
### „Czy” jako partykuła

Czy Bilbo wrócił do Shire?

Wyraz „czy” wprowadza pytanie i nie łączy dwóch zdań podrzędnych.

### „Czy” jako spójnik

Bilbo nie wiedział, czy powinien wrócić do Shire.

Wyraz „czy” łączy zdanie nadrzędne „Bilbo nie wiedział” ze zdaniem podrzędnym.
```

Można dodać przykład alternatywy:

```markdown
Bilbo zastanawiał się, czy wrócić do Shire, czy pozostać z krasnoludami.
```

Trzeba jednak wyjaśnić, że w konstrukcji alternatywnej klasyfikacja obu wyrazów może być omawiana dopiero po wcześniejszym opanowaniu podstaw.

## 5.1. Błąd dotyczący Beorna

W dokumencie pojawia się informacja, że Beorn jest „ważnym sojusznikiem w Bitwie Pięciu Armii”. Warto doprecyzować:

```markdown
Beorn przybywa w decydującym momencie Bitwy Pięciu Armii i pomaga odwrócić losy walki. Nie jest jednak stałym uczestnikiem całej wyprawy.
```

## 5.2. Błąd dotyczący miejsca odkrycia słabego punktu Smauga

W kilku miejscach pojawia się sformułowanie:

> „Bilbo podczas rozmowy ze Smaugiem widzi jaśniejszą plamę na piersi smoka”.

Należy zachować, ale dopisać, że Bilbo nie zdobywa tej informacji wyłącznie przez „patrzenie”; Smaug odsłania fragment brzucha, a Bilbo dostrzega nieosłonięte miejsce. Dla ucznia wystarczy:

```markdown
Podczas rozmowy ze Smaugiem Bilbo zauważa odsłonięte, pozbawione pancerza miejsce na piersi smoka.
```

## 5.3. „Nie” z czasownikami

Fragment:

> „Z czasownikami nie piszemy rozdzielnie, chyba że czasownik bez nie nie istnieje”.

należy poprawić, ponieważ brzmi jak reguła absolutna i nie uwzględnia wyjątków słownikowych.

Proponowana wersja:

```markdown
„Nie” z czasownikami zasadniczo piszemy rozdzielnie:

- nie chciał,
- nie uciekł,
- nie przeczytał.

Niektóre wyrazy utrwaliły się w języku jako formy pisane łącznie, np.:

- nienawidzić,
- niepokoić,
- niedowidzieć.

W razie wątpliwości sprawdź wyraz w słowniku ortograficznym.
```

## 5.4. Przysłówek a stopniowanie

W sekcji zaawansowanej zapisano, że „bliżej” i „dalej” mogą być stopniowanymi przyimkami. To należy usunąć albo poprawić, ponieważ w takich przykładach mamy przede wszystkim przysłówki, a nie przyimki.

Proponowana wersja:

```markdown
Przysłówki mogą się stopniować:

- szybko – szybciej – najszybciej,
- blisko – bliżej – najbliżej,
- daleko – dalej – najdalej.

Stopniowanie nie jest odmianą przez przypadki ani osoby. Dlatego przysłówki nadal zaliczamy do nieodmiennych części mowy.
```

***

# 6. L003 – „Opowieści z Narnii” i zaimek

## Najważniejszy błąd: przecinek przed „który”

W pliku występuje wyjaśnienie:

> „Nie wiem, który bohater przybył pierwszy” – bez przecinka przed `który`.

To zdanie wymaga korekty. W tej konstrukcji przecinek występuje przed całym zdaniem podrzędnym:

```markdown
Nie wiem, który bohater przybył pierwszy.
```

Przecinek znajduje się przed wyrazem `który`, ponieważ rozpoczyna on zdanie podrzędne. Nie należy mówić, że „nie ma przecinka przed który”.

### Zalecana reguła

```markdown
Przecinek stawiamy przed całym zdaniem podrzędnym, niezależnie od tego, czy zaczyna się ono od „który”, „kto”, „gdzie”, „kiedy” lub innego wyrazu.

Przykłady:

- Edmund, który wcześniej zdradził rodzeństwo, później się zmienił.
- Aslan pomógł chłopcu, który żałował swojej winy.
- Nie wiem, który bohater przybył pierwszy.
- Narnia była miejscem, gdzie dzieci przeżyły niezwykłą przygodę.
```

Należy zrezygnować z wyjaśnienia, że przecinek przed `który` występuje wyłącznie w zdaniu przydawkowym. Przecinek może wystąpić także wtedy, gdy `który` rozpoczyna zdanie podrzędne pełniące inną funkcję.

## 6.1. „Swój” a „swojego”

Dokument słusznie uczy zasady odnoszenia zaimka `swój` do podmiotu. Trzeba jednak dopisać, że `jego` nie zawsze jest błędne.

Porównaj:

```markdown
Edmund bronił swojego rodzeństwa.
```

Edmund bronił rodzeństwa, do którego sam należy.

```markdown
Edmund bronił jego rodzeństwa.
```

Edmund bronił rodzeństwa innego chłopca.

Proponowana ramka:

```markdown
„Swój” wskazuje na przynależność do podmiotu zdania. „Jego”, „jej” i „ich” mogą wskazywać na inną osobę niż podmiot.
```

## 6.2. Klasyfikacja „się”

Warto dopisać, że w szkolnej klasyfikacji `się` jest zaimkiem zwrotnym, ale jego funkcja składniowa może być różna. Nie zawsze trzeba określać je jako dopełnienie, ponieważ zależy to od konstrukcji zdania.

***

# 7. L004 – „Chłopcy z Placu Broni”, przymiotnik i liczebnik

To jest obecnie najbardziej wymagająca korekty lekcja gramatyczna.

## 7.1. Błędna odmiana liczebnika „dwa”

W tabeli pojawia się:

> „Mianownik: dwóch, dwaj”.

To wymaga jasnego rozdzielenia:

```markdown
### Liczebnik dwa – rodzaj męskoosobowy

Mianownik: dwaj chłopcy  
Dopełniacz: dwóch chłopców  
Celownik: dwóm chłopcom  
Biernik: dwóch chłopców  
Narzędnik: dwoma chłopcami  
Miejscownik: dwóch chłopcach  

### Liczebnik dwa – rodzaj niemęskoosobowy

Mianownik: dwa psy  
Dopełniacz: dwóch psów  
Celownik: dwóm psom  
Biernik: dwa psy  
Narzędnik: dwoma psami  
Miejscownik: dwóch psach
```

Forma `dwóch` nie jest formą mianownika liczby mnogiej dla rzeczownika męskoosobowego. W mianowniku należy użyć `dwaj`.

## 7.2. Forma „pięciu”

W tabeli należy dopisać, że `pięciu` jest używane między innymi w:

- dopełniaczu,
- celowniku,
- bierniku,
- miejscowniku,

ale nie jako uniwersalna forma wszystkich przypadków. Narzędnik brzmi:

```markdown
pięcioma chłopcami
```

a nie `pięcioma` jako samodzielna odpowiedź w każdej sytuacji.

## 7.3. Błędny przykład: „dwoje uczniów”

W dokumencie pojawia się:

> „dwoje uczniów – ostrożnie”.

Najlepiej zastąpić go jednoznacznym objaśnieniem:

```markdown
Liczebniki zbiorowe łączymy między innymi z:

- dziećmi: dwoje dzieci;
- młodymi istotami: troje piskląt;
- rzeczownikami występującymi tylko w liczbie mnogiej: dwoje drzwi;
- grupami osób różnej płci, gdy użycie jest uzasadnione normą i znaczeniem: dwoje uczniów – chłopiec i dziewczynka.

Przy grupie samych chłopców używamy zwykle formy „dwaj chłopcy” albo „dwóch chłopców”, nie „dwoje chłopców”.
```

## 7.4. Przymiotnik „nie”

W dokumencie występuje twierdzenie, że `nie` z przymiotnikami piszemy łącznie „we wszystkich stopniach”. To jest zbyt kategoryczne i wymaga ostrożnego sformułowania.

Zalecana wersja:

```markdown
„Nie” z przymiotnikami najczęściej piszemy łącznie:

- niedobry,
- niełatwy,
- nieodważny,
- nielepszy.

Rozdzielnie piszemy przy wyraźnym przeciwstawieniu:

- nie łatwy, lecz trudny;
- nie dobry, ale znakomity.

W zadaniach wymagających rozstrzygnięcia należy uwzględnić znaczenie zdania, a nie tylko stopień przymiotnika.
```

Nie należy tworzyć sztucznych przykładów typu `nienajmądrzejszy`, jeśli nie są potrzebne do realizacji podstawy programowej. Można je przenieść do poziomu zaawansowanego z komentarzem normatywnym.

## 7.5. „Lekki – lżejszy”

W tekście pojawia się forma pozbawiona polskich znaków:

> „lejszy”.

W wersji poprawnej musi być:

```markdown
lekki – lżejszy – najlżejszy
```

Analogicznie:

```markdown
ciężki – cięższy – najcięższy
```

***

# 8. L005 – „Kajko i Kokosz” i rzeczownik

## 8.1. Data publikacji

W dokumencie pojawia się:

> „Janusz Christa, seria od 1971, tom „Szkoła latania” 1975”.

Należy ujednolicić zapis i zaznaczyć, że rok może zależeć od przyjmowanej informacji bibliograficznej dotyczącej publikacji prasowej lub wydania albumowego.

Bezpieczna wersja szkolna:

```markdown
„Kajko i Kokosz. Szkoła latania” to komiks Janusza Christy, którego publikację albumową datuje się na 1975 rok.
```

## 8.2. „Liczba podwójna”

Treść jest zasadniczo dobra, ale należy konsekwentnie używać określenia:

```markdown
współczesny język polski nie ma regularnej liczby podwójnej; formy takie jak „oczy”, „uszy” i „ręce” są pozostałościami dawnej kategorii.
```

Nie należy pisać, że `oczy`, `uszy` i `ręce` są po prostu „liczbą podwójną”. To skrót szkolny, który może utrwalać błąd.

## 8.3. „Nie” z rzeczownikami

Reguła jest zbyt uproszczona:

> „Nie z rzeczownikami piszemy łącznie, chyba że przeczymy w zdaniu”.

Należy ją zastąpić:

```markdown
„Nie” z rzeczownikami często piszemy łącznie, gdy tworzy ono nową nazwę:

- nieprzyjaciel,
- niepogoda,
- nieporządek.

Rozdzielnie piszemy, gdy „nie” jest zwykłym zaprzeczeniem:

- To nie przyjaciel, lecz wróg.
- To nie pogoda, ale silny wiatr.
```

## 8.4. Biernik rzeczowników męskich

Warto dopisać, że reguła `biernik = dopełniacz` dla rzeczowników żywotnych dotyczy określonych typów rzeczowników męskich, przede wszystkim osobowych i zwierzęcych.

Przykładowa tabela:

| Rzeczownik | Biernik |
|---|---|
| widzę Kajka | forma jak dopełniacz |
| widzę psa | forma jak dopełniacz |
| widzę miecz | forma jak mianownik |
| widzę gród | forma jak mianownik |

***

# 9. Błędy językowe i techniczne

## 9.1. Brak polskich znaków

W ekstrakcie pliku widoczne są formy typu:

- `jzyka`,
- `lekcja`,
- `mow`,
- `czci`,
- `przysw`,
- `wypowied`,
- `egzamin`.

Jeżeli jest to wyłącznie skutek spłaszczenia HTML lub kodowania, trzeba sprawdzić plik źródłowy. Jeżeli występuje także w finalnym Markdownie, należy przeprowadzić automatyczną korektę kodowania UTF-8.

Dodać kontrolę:

```bash
grep -nE "jzyka|mow|czci|przysw|wypowied" PERPLEXITY_POLSKI.md
```

## 9.2. Ujednolicenie nazw

W całym dokumencie trzeba ujednolicić:

- `Edmund Pevensie`, nie naprzemiennie `Edmund`;
- `Janosz Boka`, nie czasem `Boka` bez pierwszego użycia pełnej formy;
- `Deo Gereb`, nie naprzemiennie `Gereb` i `Geréb`, chyba że zostanie wyjaśniona różnica transliteracyjna;
- `Feri Acz`, nie `Acz` bez wskazania pełnego imienia;
- `Samotna Góra`, nie `Samotna Gra`;
- `Mroczna Puszcza`, nie naprzemiennie `Mroczna Puszcza` i inne warianty;
- `Arcyklejnot`, jeśli taka forma jest przyjęta w używanym przekładzie.

## 9.3. Cudzysłowy i kursywa

Tytuły utworów należy zapisywać konsekwentnie:

```markdown
„Hobbit, czyli tam i z powrotem”
„Opowieści z Narnii. Lew, czarownica i stara szafa”
„Chłopcy z Placu Broni”
„Kajko i Kokosz. Szkoła latania”
„Akademia Pana Kleksa”
```

Nazwy gatunków i motywów nie wymagają cudzysłowu.

***

# 10. Brakujące obszary podstawy programowej

Obecny materiał dobrze rozwija analizę lektur i części mowy, ale nie zapewnia jeszcze kompletnego przygotowania do E8.

## Priorytet bardzo wysoki

Należy dodać:

- rozumienie tekstu nieliterackiego;
- wyszukiwanie informacji jawnych i ukrytych;
- odczytywanie sensu akapitu;
- rozpoznawanie tezy, argumentu i przykładu;
- rozpoznawanie intencji autora;
- rozróżnianie faktu, opinii i oceny;
- rozpoznawanie środków stylistycznych w kontekście;
- części zdania;
- związki składniowe;
- zdania pojedyncze i złożone;
- zdania współrzędnie i podrzędnie złożone;
- mowa zależna i niezależna;
- interpunkcja zdań złożonych;
- frazeologizmy;
- słowotwórstwo;
- fonetyka w zakresie wymaganym przez szkołę podstawową;
- ortografia wyrazów z `ó`, `u`, `rz`, `ż`, `ch`, `h`;
- formy wypowiedzi egzaminacyjnych;
- redagowanie, skracanie i przekształcanie tekstu.

## Formy wypowiedzi

Konieczne jest dodanie pełnych lekcji o:

| Forma | Co musi zawierać |
|---|---|
| Rozprawka | teza, hipoteza, argument, przykład, komentarz, wniosek |
| Opowiadanie twórcze | narrator, punkt widzenia,