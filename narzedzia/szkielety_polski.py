"""Szkielety podstawowych lekcji języka polskiego (części mowy, składnia, środki stylistyczne) do wypełnienia przez inne LLM.

Użycie:  python3 narzedzia/szkielety_polski.py
Wynik:   polski/podstawy/PL_<KOD>_<nazwa>.md  (po jednym pliku na lekcję, stan: PUSTY — nie nadpisuje plików już wypełnionych)
         eksport/out/DO_WYPELNIENIA_PL_podstawy.md  (prompt + wszystkie puste szkielety w jednym pliku — do wysłania do LLM)
Wypełnioną odpowiedź LLM wkleja się do pliku lekcji (zastępując linie „DO UZUPEŁNIENIA”) i zmienia „stan: PUSTY” na „stan: WYPEŁNIONY — <model>, <data>”.
"""
import datetime
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "polski", "podstawy")
PACZKA = os.path.join(REPO, "eksport", "out", "DO_WYPELNIENIA_PL_podstawy.md")
DZIS = datetime.date.today().isoformat()

# kod, plik, tytuł, lead, [co musi być w lekcji], [pułapki do kliniki], powiązania
GRAMATYKA = [
    ("G01", "rzeczownik", "Rzeczownik", "Kto? Co? — nazwy osób, rzeczy, zjawisk, uczuć; przypadki, liczba, rodzaj.",
     ["rzeczowniki konkretne i abstrakcyjne, pospolite i własne (pisownia wielką literą)",
      "rodzaj (męski, żeński, nijaki) i rodzaj męskoosobowy w liczbie mnogiej",
      "odmiana przez 7 przypadków z pytaniami (tabela wzorcowa dla 3 rodzajów)",
      "żywotność: biernik = dopełniacz u rzeczowników męskich żywotnych (widzę psa) i = mianownik u nieżywotnych (widzę miecz)",
      "rzeczowniki tylko w liczbie mnogiej (drzwi, nożyczki) i tylko pojedynczej; ślady dawnej liczby podwójnej (oczy, uszy, ręce)",
      "rzeczowniki odczasownikowe (czytanie, pisanie)",
      "„nie” z rzeczownikami: łącznie, gdy tworzy nową nazwę (nieprzyjaciel); rozdzielnie przy zaprzeczeniu (to nie przyjaciel, lecz wróg)"],
     ["mylenie rzeczownika odczasownikowego z czasownikiem", "biernik rzeczowników żywotnych", "wielka litera w nazwach własnych"], "L005, G12"),
    ("G02", "czasownik", "Czasownik", "Co robi? Co się z nim dzieje? — osoba, liczba, czas, tryb, aspekt, strona.",
     ["formy osobowe i nieosobowe (bezokolicznik, formy na -no/-to, imiesłowy — odesłanie do G06)",
      "osoba, liczba, rodzaj (w czasie przeszłym)", "czasy: teraźniejszy, przeszły, przyszły prosty i złożony",
      "aspekt dokonany i niedokonany (czytać — przeczytać)", "tryby: oznajmujący, rozkazujący, przypuszczający (pisownia -by łącznie z czasownikiem)",
      "strona czynna i bierna, przekształcanie zdań", "czasowniki przechodnie i nieprzechodnie",
      "„nie” z czasownikami rozdzielnie; wyjątki słownikowe (nienawidzić, niepokoić)"],
     ["„by” z czasownikiem osobno", "mylenie aspektu z czasem", "strona bierna bez czasownika posiłkowego"], "L006, G06, G12"),
    ("G03", "przymiotnik", "Przymiotnik", "Jaki? Który? Czyj? — cechy, odmiana i stopniowanie.",
     ["odmiana przez przypadki, liczby i rodzaje — zgodność z rzeczownikiem", "stopniowanie regularne (-szy, -ejszy), nieregularne (dobry — lepszy), opisowe (bardziej, najbardziej) i przymiotniki niestopniowalne",
      "przymiotniki od nazw własnych (polski, warszawski) — mała litera", "przymiotnik w funkcji przydawki i orzecznika",
      "„nie” z przymiotnikami: ZAWSZE łącznie, we wszystkich stopniach (reforma pisowni od 1.01.2026: niemilszy, nienajmilszy)"],
     ["„bardziej lepszy” (podwójne stopniowanie)", "wielka litera w przymiotnikach od nazw miast", "stare zasady pisowni „nie” z przeciwstawieniem"], "L004, G12"),
    ("G04", "liczebnik", "Liczebnik", "Ile? Który z kolei? — liczebniki główne, porządkowe, zbiorowe, ułamkowe.",
     ["rodzaje: główne, porządkowe, zbiorowe, ułamkowe, nieokreślone (kilka, wiele)",
      "odmiana dwa / dwaj / dwóch / dwie (męskoosobowe: dwaj chłopcy i dwóch chłopców)", "liczebniki zbiorowe (dwoje dzieci, troje drzwi, dwoje uczniów = chłopiec i dziewczynka)",
      "zapis cyfrą i słowami, liczebniki porządkowe z kropką (3. klasa)", "łączenie liczebnika z rzeczownikiem (pięciu chłopców przyszło)"],
     ["„dwoje chłopców”", "„trzech dziewczyn”", "brak kropki po cyfrze arabskiej oznaczającej liczebnik porządkowy"], "L004"),
    ("G05", "zaimek", "Zaimek", "Zastępuje rzeczownik, przymiotnik, liczebnik lub przysłówek.",
     ["podział według tego, co zastępuje (rzeczowne, przymiotne, liczebne, przysłowne)",
      "podział znaczeniowy: osobowe, zwrotny „się”, dzierżawcze, wskazujące, pytające, względne, nieokreślone, przeczące",
      "krótkie i długie formy (mi — mnie, go — jego) i ich miejsce w zdaniu", "„swój” odnosi się do podmiotu; „jego” — do innej osoby",
      "zaimki względne wprowadzają zdania podrzędne — przecinek przed całym zdaniem podrzędnym"],
     ["„jego” zamiast „swój” (i odwrotnie)", "forma „mnie” na początku zdania vs „mi”", "„się” na końcu zdania"], "L003, G16"),
    ("G06", "imieslowy", "Imiesłowy", "Formy czasownika: przymiotnikowe (czynne, bierne) i przysłówkowe (współczesne, uprzednie).",
     ["imiesłów przymiotnikowy czynny (-ący) i bierny (-ny, -ty, -ony)", "imiesłów przysłówkowy współczesny (-ąc) i uprzedni (-wszy, -łszy)",
      "imiesłowowy równoważnik zdania — ten sam podmiot co w zdaniu głównym (błąd: „Idąc do szkoły, padał deszcz”)",
      "przecinek przy imiesłowowym równoważniku zdania", "pisownia „nie”: z imiesłowami przymiotnikowymi łącznie (zawsze, od 2026), z przysłówkowymi rozdzielnie"],
     ["różny podmiot w równoważniku", "mylenie imiesłowu przymiotnikowego z przymiotnikiem", "„nie” rozdzielnie z imiesłowem przymiotnikowym (stara zasada)"], "L001, G02"),
    ("G07", "przyslowek", "Przysłówek", "Jak? Gdzie? Kiedy? W jakim stopniu? — określa czasownik, przymiotnik lub inny przysłówek.",
     ["rodzaje znaczeniowe: sposobu, miejsca, czasu, stopnia i miary", "przysłówki odprzymiotnikowe (szybki — szybko) i inne",
      "stopniowanie (szybko — szybciej — najszybciej; dobrze — lepiej — najlepiej) — mimo to część nieodmienna",
      "przysłówek w funkcji okolicznika", "„nie” z przysłówkami odprzymiotnikowymi łącznie we wszystkich stopniach (od 2026); z innymi — rozdzielnie (nie tu, nie teraz)",
      "pisownia wyrażeń przyimkowych i przysłówków złożonych (na pewno, po polsku, naprzeciwko)"],
     ["mylenie przysłówka z przymiotnikiem (szybko / szybki)", "„po polsku” pisane łącznie", "„nie” z przysłówkiem odprzymiotnikowym rozdzielnie"], "L002, G12"),
    ("G08", "przyimek", "Przyimek", "Nie występuje samodzielnie — łączy się z rzeczownikiem lub zaimkiem w wyrażenie przyimkowe.",
     ["przyimki proste (w, na, do, z) i złożone (spod, zza, ponad)", "wyrażenie przyimkowe i przypadek, którego wymaga przyimek",
      "formy z -e (we, ze, nade) — kiedy się je stosuje", "wyrażenie przyimkowe w funkcji okolicznika, dopełnienia, przydawki",
      "pisownia: przyimki piszemy osobno (z domu, na górze); przysłówki utworzone z wyrażeń (naprzeciw, dookoła) — łącznie",
      "przyimek a przysłówek: „blisko domu” vs „mieszka blisko”"],
     ["„w każdym bądź razie” zamiast „w każdym razie”", "„ze” / „z” przed wyrazami na s-, z-", "mylenie przyimka z przedrostkiem"], "L002, G07"),
    ("G09", "spojnik", "Spójnik", "Łączy wyrazy w zdaniu lub zdania w zdaniu złożonym.",
     ["spójniki współrzędne (i, oraz, ale, lecz, albo, więc) i podrzędne (że, bo, ponieważ, gdy, jeśli, aby)",
      "przecinek przed spójnikami przeciwstawnymi (ale, lecz, jednak) i wynikowymi (więc, dlatego)",
      "brak przecinka przed pojedynczym „i”, „oraz”, „lub”, „albo” (i wyjątki: powtórzone spójniki, wtrącenie)",
      "„czy” jako spójnik (Nie wiem, czy przyjdzie) i jako partykuła (Czy przyjdziesz?)", "pisownia „żeby”, „aby”, „gdyby” łącznie"],
     ["przecinek przed „i”", "brak przecinka przed „że”", "„ponieważ” na początku zdania bez przecinka między zdaniami"], "L002, G15, G16"),
    ("G10", "partykula", "Partykuła", "Nadaje zabarwienie wypowiedzi: pytanie, przeczenie, wzmocnienie, życzenie.",
     ["funkcje: pytające (czy), przeczące (nie), wzmacniające (nawet, -że, właśnie), życzące (niech, oby)",
      "pisownia partykuł: -by łącznie z czasownikiem, -że/-ż łącznie, „nie” — zasady zależne od części mowy (zestawienie)",
      "partykuła a spójnik na przykładzie „czy”", "partykuła „no”, „tylko”, „jeszcze” w języku mówionym"],
     ["„chciał bym” osobno", "uznanie „nie” zawsze za partykułę bez sprawdzenia pisowni", "mylenie „czy” partykuły i spójnika"], "L002, G09"),
    ("G11", "wykrzyknik", "Wykrzyknik", "Wyraża uczucia, wołanie lub naśladuje dźwięki.",
     ["wykrzykniki wyrażające uczucia (ach, och, hura), wołanie (hej, halo) i dźwiękonaśladowcze (bum, miau)",
      "wykrzyknik jako samodzielne zdanie (równoważnik)", "przecinek lub wykrzyknik po wykrzykniku w zdaniu (Ach, jak pięknie!)",
      "wykrzyknik a wyrazy dźwiękonaśladowcze w tekście literackim (powiązanie z S03)"],
     ["brak przecinka po „ach”, „och”", "mylenie „och” i „ach” z „oh” (pisownia)", "wykrzyknik a wykrzyknienie (środek stylistyczny)"], "L002, S03"),
    ("G12", "czesci_zdania", "Części zdania", "Podmiot, orzeczenie, przydawka, dopełnienie, okolicznik — od pytań do wykresu zdania.",
     ["podmiot: gramatyczny, logiczny (w dopełniaczu), domyślny, szeregowy; zdanie bezpodmiotowe", "orzeczenie czasownikowe i imienne (łącznik + orzecznik)",
      "przydawka (jaki? czyj? który?), dopełnienie (pytania przypadków zależnych), okolicznik (gdzie? kiedy? jak? dlaczego? po co? mimo czego?)",
      "wykres zdania pojedynczego krok po kroku", "jaka część mowy może pełnić jaką funkcję (tabela)"],
     ["mylenie dopełnienia z okolicznikiem miejsca", "podmiot w dopełniaczu (Nie było Jacka)", "orzeczenie imienne rozbite na dwie części"], "L008, G13"),
    ("G13", "zwiazki_wyrazowe", "Związki wyrazowe", "Związek główny, zgody, rządu, przynależności — wyraz nadrzędny i podrzędny.",
     ["związek główny (podmiot + orzeczenie)", "związek zgody (zgodność form: dobry kolega)", "związek rządu (wyraz nadrzędny narzuca przypadek: czytam książkę)",
      "związek przynależności (wyraz nieodmienny: biegnie szybko)", "jak rozpoznać wyraz nadrzędny — pytanie od nadrzędnego do podrzędnego"],
     ["mylenie zgody z rządem przy liczebnikach", "zadawanie pytania w złym kierunku", "brak związku głównego w równoważniku"], "G12"),
    ("G14", "zdanie_pojedyncze", "Zdanie pojedyncze i równoważnik zdania", "Zdanie z jednym orzeczeniem, rozwinięte i nierozwinięte; wypowiedzenie bez orzeczenia.",
     ["zdanie pojedyncze rozwinięte i nierozwinięte", "równoważnik zdania (bez osobowej formy czasownika) i imiesłowowy równoważnik",
      "przekształcanie równoważnika w zdanie i odwrotnie", "wypowiedzenia: oznajmujące, pytające, rozkazujące, wykrzyknikowe"],
     ["uznanie imiesłowu za orzeczenie", "liczenie orzeczeń w zdaniu z bezokolicznikiem", "równoważnik bez przecinka"], "G12, G15"),
    ("G15", "zdania_wspolrzedne", "Zdanie złożone współrzędnie", "Zdania równorzędne: łączne, rozłączne, przeciwstawne, wynikowe.",
     ["cztery typy z pytaniem testowym i spójnikami", "zdanie złożone bezspójnikowe", "interpunkcja: kiedy przecinek, kiedy nie (i, oraz, lub vs ale, więc)",
      "wykres zdania współrzędnie złożonego"],
     ["przecinek przed „i” w zdaniu łącznym", "mylenie wynikowego z przyczynowym (więc / bo)", "brak przecinka w zdaniu bezspójnikowym"], "G09, G16"),
    ("G16", "zdania_podrzedne", "Zdanie złożone podrzędnie", "Zdanie nadrzędne i podrzędne: podmiotowe, orzecznikowe, przydawkowe, dopełnieniowe, okolicznikowe.",
     ["pytanie od zdania nadrzędnego do podrzędnego — sposób rozpoznawania typu", "zdania okolicznikowe: miejsca, czasu, sposobu, przyczyny, celu, warunku, przyzwolenia",
      "przecinek przed KAŻDYM zdaniem podrzędnym (także z „który” w zdaniu dopełnieniowym: Nie wiem, który…); przy przyimku przed „który” — przecinek przed przyimkiem",
      "zdanie podrzędne wtrącone — przecinek z obu stron", "wykres zdania podrzędnie złożonego"],
     ["„brak przecinka przed który w zdaniu dopełnieniowym” — błędna reguła", "przecinek w środku wyrażenia przyimkowego (o, którym)", "mylenie przydawkowego z dopełnieniowym"], "L003, G05, G09"),
    ("G17", "mowa_zalezna", "Mowa zależna i niezależna", "Przytaczanie cudzych słów: dialog, cytat, przekształcanie.",
     ["mowa niezależna: dwukropek, cudzysłów, myślnik w dialogu", "mowa zależna: zdanie podrzędne ze spójnikiem (że, czy, aby) — zmiany osoby, czasu, zaimków",
      "przekształcanie w obie strony (zadania typu CKE)", "zapis dialogu w opowiadaniu"],
     ["zostawienie 1. osoby w mowie zależnej", "brak przecinka przed „że”", "myślnik i cudzysłów naraz"], "G16"),
]

STYL = [
    ("S01", "epitet_porownanie", "Epitet i porównanie", "Określenia i zestawienia — jak autor buduje obraz.",
     ["epitet (określenie rzeczownika) — zwykły, metaforyczny, stały", "porównanie: dwa człony + wyraz porównujący (jak, niby, niczym, jakby)",
      "porównanie homeryckie (rozbudowane) — dla ambitnych", "funkcja: plastyczność opisu, emocje, ocena"],
     ["każdy przymiotnik to epitet", "porównanie bez wyrazu porównującego (to już przenośnia)", "podanie nazwy środka bez funkcji"], "L010"),
    ("S02", "przenosnia_ozywienie_uosobienie", "Przenośnia, ożywienie i uosobienie", "Metafora i nadawanie cech istot żywych przedmiotom i zjawiskom.",
     ["przenośnia (metafora) — połączenie wyrazów dające nowe znaczenie", "ożywienie (animizacja): cechy istot żywych (wiatr wyje, gwiazdy mrugają)",
      "uosobienie (personifikacja): cechy ludzkie — myślenie, mówienie, uczucia (morze się gniewa, Śmierć zastanawia się)",
      "jak odróżnić ożywienie od uosobienia — pytanie testowe", "funkcja w bajce, wierszu i prozie"],
     ["mylenie ożywienia z uosobieniem", "uznanie każdego porównania za metaforę", "uosobienie a bohater zwierzęcy w bajce (alegoria)"], "L010, S06"),
    ("S03", "wyrazy_dzwiekonasladowcze_apostrofa", "Wyrazy dźwiękonaśladowcze, apostrofa, pytanie retoryczne, wykrzyknienie", "Środki brzmieniowe i retoryczne.",
     ["wyrazy dźwiękonaśladowcze (onomatopeje) i instrumentacja głoskowa", "apostrofa — bezpośredni zwrot do osoby, przedmiotu, idei (często z „o”)",
      "pytanie retoryczne — nie oczekuje odpowiedzi", "wykrzyknienie — zdanie wykrzyknikowe wyrażające emocje", "funkcje każdego środka"],
     ["apostrofa a zwykły zwrot do rozmówcy w dialogu", "każde pytanie w wierszu to pytanie retoryczne", "wykrzyknienie a wykrzyknik (część mowy)"], "L010, G11"),
    ("S04", "powtorzenie_anafora_wyliczenie", "Powtórzenie, anafora, wyliczenie, kontrast", "Środki budujące rytm i podkreślające treść.",
     ["powtórzenie i anafora (powtórzenie na początku wersów)", "wyliczenie (enumeracja) i stopniowanie", "kontrast (antyteza)", "refren", "funkcje: rytm, nacisk, budowanie napięcia"],
     ["mylenie anafory z rymem", "wyliczenie a zwykła lista w tekście", "kontrast bez wskazania przeciwstawnych elementów"], "L010"),
    ("S05", "neologizm_zdrobnienie_archaizm", "Neologizm, zdrobnienie, zgrubienie, archaizm", "Środki słowotwórcze i leksykalne.",
     ["neologizm (nowo utworzony wyraz)", "zdrobnienie i zgrubienie — budowa (przyrostki) i funkcja (czułość, ironia, pogarda)", "archaizm — wyraz dawny; stylizacja",
      "kolokwializm, regionalizm (dla ambitnych)"],
     ["każde zdrobnienie wyraża czułość", "mylenie neologizmu z wyrazem obcym", "archaizm a wyraz rzadki"], "L010, L006"),
    ("S06", "hiperbola_ironia_symbol_alegoria", "Hiperbola, ironia, symbol, alegoria", "Środki znaczeniowe trudniejsze — poziom E8+ i konkurs.",
     ["hiperbola (wyolbrzymienie)", "ironia — mówienie odwrotnie do zamierzonego znaczenia", "symbol (wiele znaczeń, otwarty) a alegoria (jedno, umowne znaczenie: lis — chytrość)",
      "morał i alegoria w bajce", "jak uzasadnić rozpoznanie ironii w zadaniu"],
     ["mylenie symbolu z alegorią", "ironia a kłamstwo", "hiperbola a zwykłe porównanie"], "L011"),
]

PROMPT = """# PROMPT DLA LLM — wypełnienie szkieletów lekcji języka polskiego (klasa 8, egzamin ósmoklasisty)

> Skopiuj tę sekcję jako polecenie. Wypełniaj **po jednej lekcji naraz** (albo po kilka), zwracając pełny plik lekcji w Markdown.

**Rola:** jesteś doświadczonym polonistą i egzaminatorem CKE. Piszesz lekcje dla ucznia klasy 8 (Polska), który przygotowuje się do egzaminu ósmoklasisty 2027 i do konkursu kuratoryjnego.

**Zasady obowiązkowe:**
1. Zachowaj **nagłówek YAML i numerację sekcji** (`## n | Tytuł`). Każdą linię `DO UZUPEŁNIENIA:` zastąp pełną treścią. Niczego nie usuwaj.
2. Poziomy oznaczaj plakietkami: `[[basic:E8]]` (minimum egzaminacyjne), `[[understand:ROZUMIENIE]]`, `[[exam:KONKURS]]`. Najpierw E8, potem rozszerzenia.
3. **Pisownia według zasad obowiązujących od 1 stycznia 2026** (reforma Rady Języka Polskiego): „nie” z przymiotnikami, imiesłowami przymiotnikowymi i przysłówkami odprzymiotnikowymi piszemy **łącznie zawsze**, także w stopniu wyższym i najwyższym (niemilszy, nienajlepiej). Nie podawaj starej zasady o pisowni rozdzielnej przy przeciwstawieniu.
4. Interpunkcja: przecinek stoi przed **każdym** zdaniem podrzędnym (także z „który/czy/gdzie” w zdaniu dopełnieniowym: „Nie wiem, który…”); gdy zdanie podrzędne zaczyna się od przyimka — przecinek przed przyimkiem („o którym”).
5. Przykłady: krótkie, **własne** albo parafrazy z lektur obowiązkowych (Mały Książę, Hobbit, Opowieści z Narnii, Chłopcy z Placu Broni, Akademia Pana Kleksa, Kajko i Kokosz, bajki Krasickiego, Pan Tadeusz, Zemsta, Balladyna, Opowieść wigilijna, Kamienie na szaniec, Dziady cz. II). Nie przepisuj długich fragmentów chronionych prawem autorskim (najwyżej jedno zdanie cytatu).
6. Ćwiczenia: każde z **kluczem**; zadania w stylu CKE — z **kluczem i punktacją** (np. 0–1, 0–2) i krótkim uzasadnieniem.
7. Sekcja „Wizualizacja”: zaproponuj 1–2 grafiki/schematy (tabela, mapa pojęć, oś, wykres zdania) i pod każdą obowiązkowo linię `@opis …` — słowny opis, co dokładnie widać i jaki wniosek uczeń ma wyciągnąć (lekcja musi być zrozumiała bez obrazka).
8. Język: polski, jasny dla 14-latka; definicje krótkie, potem przykłady, potem pułapki. Informacje niepewne oznacz „(do weryfikacji)”.
9. Jeśli plik ma sekcję „Zarys od …”, wykorzystaj ją, ale **rozwiń każdą sekcję 0–12 w pełni** (konkretne zadania z treścią i kluczem, nie opisy typu „ćwiczenia z kluczem”). Zwięzła wersja nie wystarcza.\n10. Na końcu zmień w nagłówku `stan: PUSTY` / `stan: CZĘŚCIOWY…` na `stan: WYPEŁNIONY — <nazwa modelu>, <data>`.

---

## Spis szkieletów w tym pliku

{spis}

---
"""

SEKCJE_G = [
    ("0", "Cel i kryterium gotowości [[basic:E8]]", "3–5 zdań „Potrafię…” (rozpoznać, odmienić, zastosować w zdaniu, poprawnie zapisać)."),
    ("1", "Definicja i pytania [[basic:E8]]", "krótka definicja, pytania, na które odpowiada; tabela „cecha — przykład”."),
    ("2", "Jak rozpoznać — procedura krok po kroku [[basic:E8]]", "3–5 kroków rozpoznawania + przykłady trudnych przypadków."),
    ("3", "Formy, odmiana lub rodzaje [[basic:E8]]", "tabela wzorcowa (odmiana lub podział) z przykładami."),
    ("4", "Funkcja w zdaniu [[understand:ROZUMIENIE]]", "jaką częścią zdania bywa; 3 przykłady z analizą."),
    ("5", "Pisownia i interpunkcja [[basic:E8]]", "zasady zapisu związane z tematem (zgodnie z zasadami od 2026), przykłady poprawne i błędne."),
    ("6", "Przykłady z lektur [[basic:E8]]", "5–8 krótkich przykładów (własne parafrazy lub jedno zdanie cytatu) z lektur obowiązkowych, z rozpoznaniem."),
    ("7", "Klinika błędów", "tabela: Błąd | Poprawnie | Dlaczego? — min. 6 wierszy."),
    ("8", "Ćwiczenia A — podstawa [[basic:E8]]", "6–8 zadań z kluczem."),
    ("9", "Ćwiczenia B — trening i C — konkurs [[exam:KONKURS]]", "4–6 zadań trudniejszych z kluczem."),
    ("10", "Zadania w stylu CKE", "3–4 zadania (zamknięte i otwarte) z kluczem, punktacją i uzasadnieniem."),
    ("11", "Fiszki", "8–12 par „pytanie — odpowiedź”."),
    ("12", "Wizualizacja", "propozycja 1–2 grafik + obowiązkowa linia @opis pod każdą."),
]
SEKCJE_S = [
    ("0", "Cel i kryterium gotowości [[basic:E8]]", "3–5 zdań „Potrafię…” (rozpoznać środek, nazwać go, określić funkcję w tekście)."),
    ("1", "Definicja i budowa [[basic:E8]]", "krótka definicja każdego środka, z czego się składa, wyrazy-sygnały."),
    ("2", "Jak rozpoznać — procedura [[basic:E8]]", "kroki rozpoznawania + pytanie testowe odróżniające podobne środki."),
    ("3", "Przykłady z lektur i wierszy [[basic:E8]]", "6–10 krótkich przykładów (jedno zdanie/wers cytatu albo parafraza) z lektur obowiązkowych, z nazwą środka."),
    ("4", "Funkcja — po co autor go używa [[understand:ROZUMIENIE]]", "tabela: środek | typowe funkcje | wzór odpowiedzi egzaminacyjnej (np. „Ożywienie sprawia, że…”)."),
    ("5", "Odróżnij od podobnych [[understand:ROZUMIENIE]]", "pary środków łatwych do pomylenia, z rozstrzygającym pytaniem."),
    ("6", "Klinika błędów", "tabela: Błąd | Poprawnie | Dlaczego? — min. 6 wierszy."),
    ("7", "Ćwiczenia A — podstawa [[basic:E8]]", "6–8 zadań z kluczem (rozpoznaj, nazwij, podaj funkcję)."),
    ("8", "Ćwiczenia B — tworzenie i C — konkurs [[exam:KONKURS]]", "zadania: ułóż własny przykład, przekształć tekst, analiza fragmentu — z kluczem."),
    ("9", "Zadania w stylu CKE", "3–4 zadania z kluczem, punktacją i uzasadnieniem (rozpoznanie + funkcja w tekście)."),
    ("10", "Fiszki", "8–12 par „pytanie — odpowiedź”."),
    ("11", "Wizualizacja", "propozycja 1–2 grafik + obowiązkowa linia @opis pod każdą."),
]


def szkielet(kod, nazwa, tytul, lead, zakres, pulapki, powiazania, sekcje, rodzaj):
    s = [f"---\nkod: {kod}\nprzedmiot: polski\ntytul: {tytul}\nlead: {lead}\nplakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]]",
         f"zakres: {rodzaj}; powiązania: {powiazania}\nstan: PUSTY\nutworzono: {DZIS}\n---\n",
         "> Szkielet do wypełnienia przez LLM — instrukcja: `eksport/out/DO_WYPELNIENIA_PL_podstawy.md` (prompt) albo `narzedzia/szkielety_polski.py`.\n",
         "**Musi się znaleźć w lekcji:**"]
    s += [f"- {z}" for z in zakres]
    s.append("\n**Pułapki do kliniki błędów:** " + "; ".join(pulapki) + ".\n")
    for nr, t, co in sekcje:
        s.append(f"## {nr} | {t}\n\nDO UZUPEŁNIENIA: {co}\n")
    return "\n".join(s)


def main():
    os.makedirs(OUT, exist_ok=True)
    pliki, pominiete = [], []
    for dane, sek, rodzaj in ((GRAMATYKA, SEKCJE_G, "gramatyka — części mowy i składnia"), (STYL, SEKCJE_S, "środki stylistyczne")):
        for kod, nazwa, tytul, lead, zakres, pulapki, pow in dane:
            p = os.path.join(OUT, f"PL_{kod}_{nazwa}.md")
            if os.path.exists(p):
                stan = open(p, encoding="utf-8").read()
                if "stan: CZĘŚCIOWY" in stan:  # zarys już jest — nie nadpisuj, ale wyślij do rozwinięcia
                    pliki.append((kod, tytul + " (jest zarys — rozwiń sekcje)", p)); continue
                if "stan: PUSTY" not in stan:
                    pominiete.append(p); continue
            open(p, "w", encoding="utf-8").write(szkielet(kod, nazwa, tytul, lead, zakres, pulapki, pow, sek, rodzaj))
            pliki.append((kod, tytul, p))
    spis = "\n".join(f"- **{k}** — {t}" for k, t, _ in pliki)
    paczka = PROMPT.format(spis=spis) + "".join("\n\n" + open(p, encoding="utf-8").read() + "\n\n---" for _, _, p in pliki)
    os.makedirs(os.path.dirname(PACZKA), exist_ok=True)
    open(PACZKA, "w", encoding="utf-8").write(paczka)
    print(f"szkielety: {len(pliki)} (pominięte wypełnione: {len(pominiete)}) → {os.path.relpath(OUT, REPO)}; paczka {len(paczka)//1024} KB")


if __name__ == "__main__":
    main()
