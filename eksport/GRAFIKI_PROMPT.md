# POLECENIE — zrób grafiki do lekcji (interaktywne SVG w HTML)

**Przeczytaj całe polecenie przed odpowiedzią.** Robisz grafiki do kursu do samodzielnej nauki (uczeń 13–15 lat, egzamin ósmoklasisty i konkursy). Każdą grafikę wklejam skryptem prosto do biblioteki kursu, bez poprawiania — dlatego trzymaj się dokładnie formatu.

## 1. Technika — jak ma wyglądać każda grafika

1. **Jedna grafika = jeden pełny plik HTML** zbudowany z **szablonu startowego** (punkt 6).
   - Bloku biblioteki `VIZ` nie zmieniasz.
   - Zastępujesz tylko blok przykładowy między `/* >>> VIZ … */` a `/* <<< VIZ */` oraz znacznik `<figure>` na dole.
   - Plik musi działać po otwarciu w przeglądarce (offline).
2. **Kod grafiki to jedno wywołanie** `VIZ.define('<id>', {opis:'…', mount:function(el,opt){ … }})` wewnątrz znaczników:
   - `/* >>> VIZ <id> */` — początek;
   - `/* <<< VIZ */` — koniec.
   Wszystko (dane, funkcje pomocnicze, teksty) jest **wewnątrz `mount`**, bez zmiennych globalnych.
   - Wolno używać tylko: `VIZ.S`, `VIZ.H`, `VIZ.svg`, `VIZ.T`, `VIZ.btn`, `VIZ.fx.info`, `VIZ.fx.infoBox`, `VIZ.fx.auto`, `VIZ.fx.toggle` oraz zwykłego DOM.
   - Bez bibliotek zewnętrznych, czcionek, obrazków, `fetch`, `alert`, `localStorage`.
3. **Rysunek: SVG z `viewBox`** (szerokość logiczna 500–900).
   - Ma być czytelny na telefonie (360 px) i na komputerze.
   - Tekst w SVG co najmniej 11 px w skali `viewBox`.
   - Etykiety nie mogą na siebie nachodzić.
4. **Kolory wyłącznie ze zmiennych CSS** z szablonu: `var(--k1)` … `var(--k6)` i ich tła `--kN-bg`, `--accent`, `--viz-ink`, `--viz-mut`, `--viz-line`, `--viz-bg2`, `--c-basic`, `--c-error`, `--c-warn`, oraz biologiczne `--blood-o2`, `--blood-co2`, `--nerve`, `--bone`, `--muscle`, `--skin`, `--fat`.
   - Bez kolorów wpisanych na sztywno.
   - Tylko tryb jasny.
   - Kolor nigdy nie jest jedyną informacją — zawsze jest też podpis.
5. **Interakcja:**
   - elementy do klikania dostają `data-k="klucz"` i opis w `VIZ.fx.info(el, box, {klucz:['Tytuł','1–3 zdania wyjaśnienia']})`;
   - przełączniki trybów — przyciski `VIZ.btn` + `VIZ.fx.toggle`;
   - suwaki — `<input type="range">` z podpisem wartości.
   - Obsługa klawiaturą działa sama dzięki `data-k`.
6. **Animacja** (gdy rodzaj = animacja) — wyłącznie przez `VIZ.fx.auto(el, krok, ms)`:
   - startuje sama, gdy grafika jest widoczna;
   - zatrzymuje się po kliknięciu w grafikę.
   - Funkcja `krok()` przesuwa o jeden krok.
   - Typ pętli podany na liście:
     - **„do przodu”** — po ostatnim kroku wraca do pierwszego;
     - **„tam i z powrotem”** — po ostatnim kroku idzie wstecz (np. wdech ↔ wydech).
   - Zawsze dodaj też przyciski „◀ krok” / „krok ▶”.
7. **Opcje** z `opt` (np. `opt.start`, `opt.tryb`) zawsze mają wartości domyślne. Grafika bez opcji ma działać.
8. **Rozmiar:** kod jednej grafiki (blok `VIZ.define`) do ok. 15 KB.

## 2. Treść — co musi być prawdziwe

- Język: **polski** (w grafikach do angielskiego przykłady zdań po angielsku, podpisy i wyjaśnienia po polsku). Polskie znaki, cudzysłowy „…”.
- Merytoryka na poziomie szkoły podstawowej, **bez błędów**.
  - Liczby niepewne podpisz „(orientacyjnie)”.
  - Przy danych modelowych napisz „dane przykładowe”.
- Schemat ma pokazywać **mechanizm**, a nie ozdobę. Lepiej mniej elementów, ale poprawnie opisanych.
- **Nie rysuj znanych postaci ani okładek** (np. bohaterów komiksów, filmów, książek). Używaj neutralnych sylwetek i ikon.
- Każda grafika zawiera wewnątrz `mount` pole wyjaśnień `VIZ.fx.infoBox()` z tekstem startowym, który mówi, co zrobić („Kliknij…”, „Przesuń suwak…”).

## 3. Format odpowiedzi — sama treść, w Markdown

Dla każdej grafiki trzy elementy, po kolei:

<<<GRAFIKA <id> <przedmiot>
…pełny plik HTML (szablon z punktu 6 z Twoim blokiem VIZ i znacznikiem figure)…
GRAFIKA>>>
KATALOG: | <id> | co pokazuje (1 zdanie) | opcje, np. start="a|b" | <kod lekcji> |
OPIS: @opis <co dokładnie widać: elementy, oznaczenia, co się zmienia> — <wniosek dla ucznia>

- `<przedmiot>` to jedno z: `bio`, `pol`, `ang`.
- Linia `OPIS` jest obowiązkowa. To tekst zrozumiały bez obrazka (czytniki ekranu, druk).
- Bez wstępów i komentarzy między grafikami. Nie powtarzaj polecenia.
- **Kilka grafik na turę**, ile się zmieści. Gdy kończy się miejsce, przerwij po pełnym `GRAFIKA>>>` + `KATALOG` + `OPIS` i napisz „dalej”. W następnej turze zacznij od następnej grafiki z listy. Na końcu całej listy napisz „KONIEC GRAFIK”.
- Kolejność jak na liście (punkt 5). Grafiki, której nie umiesz zrobić poprawnie, nie rób — napisz w jednej linii `POMIJAM <id> — powód`.

## 4. Lista kontrolna (sprawdź przy każdej grafice)

- [ ] Blok biblioteki `VIZ` nietknięty, kod tylko między `/* >>> VIZ <id> */` i `/* <<< VIZ */`, id identyczne w `define`, w znaczniku i w `<figure data-viz>`.
- [ ] Brak zmiennych globalnych, bibliotek, obrazków, kolorów wpisanych na sztywno.
- [ ] Działa bez opcji; czytelne przy szerokości 360 px; teksty nie nachodzą na siebie.
- [ ] Klikalne elementy mają `data-k` i opis; animacja tylko przez `VIZ.fx.auto` (+ przyciski krok).
- [ ] Merytoryka sprawdzona; niepewne liczby „(orientacyjnie)”.
- [ ] Po pliku są linie `KATALOG:` i `OPIS: @opis …`.

## 5. Lista grafik do zrobienia (kolejność = priorytet)

Kolumny: **id** (nie zmieniaj) · **lekcja** · **rodzaj** · **co pokazać** · **wniosek dla ucznia**.

### Biologia — organizm człowieka (`bio`)

| id | lekcja | rodzaj | co pokazać | wniosek |
|---|---|---|---|---|
| uklad-rozrodczy | U11 | schemat do klikania + przełącznik męski/żeński | męski: jądra w mosznie, najądrze, nasieniowód, pęcherzyki nasienne, gruczoł krokowy, cewka moczowa, prącie; żeński: jajniki, jajowody (lejek), macica (błona śluzowa), szyjka macicy, pochwa; klik = funkcja; zaznaczone miejsce zapłodnienia (jajowód) | każdy narząd ma swoją rolę; zapłodnienie w jajowodzie, rozwój w macicy |
| cykl-miesiaczkowy | U11 | model z suwakiem dni 1–28 | trzy pasy jeden pod drugim: jajnik (pęcherzyk → owulacja ok. 14. dnia → ciałko żółte), błona śluzowa macicy (złuszczanie → odbudowa → grubienie), wykres estrogenów i progesteronu (dane przykładowe); suwak przesuwa pionową linię „dziś” i opisuje fazę | cykl to zsynchronizowane zmiany w jajniku i macicy sterowane hormonami; długość i dzień owulacji są orientacyjne |
| droga-zarodka | U11 | animacja „do przodu” | owulacja → komórka jajowa w jajowodzie → plemniki → zapłodnienie → zygota → bruzdkowanie (2, 4, 8 komórek, kulka) → wędrówka ok. 3–4 dni → zagnieżdżenie w ścianie macicy | rozwój zaczyna się w jajowodzie, a kończy zagnieżdżeniem w macicy |
| lozysko-wymiana | U11 | schemat do klikania | ściana macicy z krwią matki, łożysko, pępowina (2 tętnice, 1 żyła), płód; strzałki: tlen i składniki odżywcze do płodu, CO₂ i produkty przemiany do matki; podpis „krew matki i płodu się nie miesza” | łożysko wymienia substancje przez cienką barierę |
| etapy-zycia | U11 | oś czasu do klikania | okres prenatalny (zarodkowy, płodowy), noworodkowy, niemowlęcy, poniemowlęcy, przedszkolny, szkolny, dojrzewanie, dojrzałość, starość — z orientacyjnym wiekiem i 1–2 cechami | życie to kolejne okresy o charakterystycznych zmianach |
| synapsa | U08 | animacja „do przodu” (5 kroków) | zakończenie aksonu z pęcherzykami → impuls dochodzi → neuroprzekaźnik w szczelinie → łączy się z receptorami następnej komórki → nowy impuls; strzałka kierunku | przekazanie jest chemiczne i jednokierunkowe, dlatego trwa chwilę |
| droga-wzrokowa | U08 | schemat do klikania + tryb „uszkodzenie” | dwa oczy (lewa i prawa połowa siatkówki), nerwy wzrokowe, skrzyżowanie wzrokowe, pasma, kora potyliczna; przysadka pod skrzyżowaniem; wybór uszkodzenia A (nerw jednego oka), B (środek skrzyżowania), C (pasmo za skrzyżowaniem) pokazuje ubytek pola widzenia na dwóch kółkach | miejsce uszkodzenia można odczytać z kształtu ubytku pola widzenia (konkurs) |
| homunkulus-czuciowy | U08 | schemat + tabela z kliknięciem | uproszczona sylwetka z częściami ciała w rozmiarze proporcjonalnym do czułości (duże dłonie, wargi, język; małe plecy); obok najmniejsze odległości w próbie dwóch punktów (orientacyjnie: opuszek ok. 2 mm, wargi 4–5 mm, plecy ok. 40–45 mm) | czułość zależy od gęstości receptorów i wielkości obszaru w korze |
| skala-decybeli | U08 | oś do klikania | pozioma oś 0–140 dB z punktami: szept, rozmowa, ruchliwa ulica, słuchawki na pełną głośność, koncert, start samolotu; czerwona strefa od ok. 85 dB; klik = opis i bezpieczny czas słuchania (orientacyjnie) | hałas powyżej ok. 85 dB słuchany długo trwale uszkadza słuch |
| os-tarczycowa | U10 | schemat pętli z przełącznikiem stanu | podwzgórze (TRH) → przysadka (TSH) → tarczyca (T4/T3) → komórki; linie hamujące „−” od tarczycy do przysadki i podwzgórza; stany: norma, niedobór jodu (wole), nadczynność, uszkodzona przysadka — strzałki w górę/w dół przy TSH i T4 | odczyt pary TSH–T4 wskazuje, gdzie jest awaria |
| hormon-receptor | U10 | animacja „do przodu” | gruczoł wydziela hormon do krwi → krew roznosi go po ciele → komórka z pasującym receptorem odpowiada, komórka bez receptora pozostaje „głucha” | hormon działa tylko na komórki docelowe z receptorem |
| glukoza-doba | U10 | wykres liniowy 24 h do klikania | stężenie glukozy w ciągu doby z trzema posiłkami (dane przykładowe), pod spodem dwa pasy: insulina (wzrasta po posiłkach), glukagon (wzrasta między posiłkami i w nocy); pas normy | insulina i glukagon na zmianę utrzymują glukozę w normie |
| tarczyca-waga | U10 | przełącznik niedoczynność / norma / nadczynność | waga z dwiema szalkami; objawy niedoczynności (marznięcie, senność, tycie, spowolnienie) i nadczynności (uczucie gorąca, nerwowość, chudnięcie, kołatanie serca); u dziecka niedobór — zahamowanie rozwoju | zbyt mało i zbyt dużo hormonu dają przeciwne objawy |
| pompa-zylna | U04 | animacja „tam i z powrotem” | żyła w łydce z zastawkami, mięsień kurczy się i rozkurcza; przy skurczu krew płynie w górę, zastawka poniżej się zamyka, przy rozkurczu zastawka powyżej zamyka się i krew nie cofa się | ruch mięśni i zastawki pomagają krwi wracać do serca |
| odpowiedz-odpornosciowa | U04 | wykres liniowy do klikania | oś X: czas od kontaktu z antygenem, oś Y: stężenie przeciwciał (dane przykładowe); pierwsza odpowiedź niska i późna, druga (ponowny kontakt lub po szczepieniu) szybsza i wyższa; komórki pamięci | pamięć immunologiczna przyspiesza i wzmacnia drugą odpowiedź (zasada szczepień) |
| kosc-dluga | U01 | schemat do klikania | przekrój kości długiej: nasady z tkanką gąbczastą i czerwonym szpikiem, trzon z tkanką zbitą i jamą szpikową z żółtym szpikiem, okostna, chrząstka stawowa | budowa kości łączy lekkość z wytrzymałością |
| staw-budowa | U01 | schemat do klikania + ćwiczenie „podpisz” | staw: główka i panewka, chrząstka stawowa, torebka stawowa, jama z mazią, więzadła; tryb ćwiczenia: przeciągnij lub wybierz nazwę do numeru | rozpoznawanie elementów stawu na schemacie (typowe zadanie) |
| skora-temperatura | U01 | przełącznik zimno / norma / upał | przekrój skóry: naczynia zwężone lub rozszerzone, pot, mięśnie przywłosowe (gęsia skórka), dreszcze mięśni; strzałki oddawania ciepła; podwzgórze jako ośrodek | skóra jest czujnikiem i wykonawcą regulacji temperatury |
| emulgowanie | U03 | animacja „do przodu” | duża kropla tłuszczu bez żółci i z żółcią: żółć rozbija ją na wiele małych kropelek (bez zmiany chemicznej), lipazy działają na powierzchni — więcej powierzchni = szybsze trawienie | żółć nie trawi, tylko zwiększa powierzchnię dla lipazy |
| enzym-swoistosc | U03 | ćwiczenie dopasuj | trzy enzymy (amylaza, pepsyna i trypsyna — proteazy, lipaza) i trzy substraty (skrobia, białko, tłuszcz) jako klucz–zamek; wybór pary pokazuje produkt (maltoza → glukoza, aminokwasy, glicerol i kwasy tłuszczowe) albo „nie pasuje” | enzym działa tylko na swój substrat |
| bilans-energetyczny | U03 | model z dwoma suwakami | waga: energia dostarczona (posiłki) i zużyta (podstawowa przemiana materii + aktywność); wynik: nadwyżka (zapas rośnie), równowaga, niedobór; dane przykładowe w kcal/kJ | masa ciała zależy od bilansu energii w dłuższym czasie |
| objetosci-oddechowe | U06 | słupki do klikania | powietrze oddechowe (ok. 0,5 l), zapasowe wdechowe i wydechowe, pojemność życiowa (3–5 l), powietrze zalegające (orientacyjnie) | nawet po najgłębszym wydechu w płucach zostaje powietrze |
| drogi-ciepla | H01 | schemat do klikania | cztery drogi oddawania ciepła przez skórę: promieniowanie, przewodzenie, konwekcja (unoszenie), parowanie potu — z przykładem z życia każdej | organizm oddaje ciepło kilkoma drogami naraz; w upale najważniejsze jest parowanie |

### Język polski (`pol`) — grafiki tylko tam, gdzie pomagają zrozumieć

| id | lekcja | rodzaj | co pokazać | wniosek |
|---|---|---|---|---|
| imieslowy-cztery | G06, L001 | schemat do klikania | cztery imiesłowy: przymiotnikowy czynny (-ący), przymiotnikowy bierny (-ny, -ty, -ony), przysłówkowy współczesny (-ąc), przysłówkowy uprzedni (-wszy, -łszy); przykład, czy się odmienia, pisownia z „nie” (przymiotnikowe łącznie, przysłówkowe osobno) | końcówka rozpoznaje imiesłów i mówi, czy się odmienia |
| stopniowanie | G03, G07 | schemat z przełącznikiem przymiotnik/przysłówek | trzy stopnie (równy → wyższy → najwyższy) i ścieżki: regularna (-szy / -ej), nieregularna (dobry–lepszy, dobrze–lepiej), opisowa (bardziej, najbardziej); czerwone błędy podwójnego stopniowania | wybór sposobu stopniowania zależy od wyrazu |
| czas-aspekt | G02 | oś czasu z przełącznikiem | „czytam / czytałem / będę czytać” (niedokonany — czynność w toku) i „przeczytałem / przeczytam” (dokonany — skutek); brak czasu teraźniejszego w aspekcie dokonanym | czas i aspekt to różne kategorie |
| biernik-zywotnosc | G01, L005 | schemat porównawczy | „widzę psa” (rodzaj męskoosobowy/męskożywotny: biernik = dopełniacz) i „widzę stół” (męskorzeczowy: biernik = mianownik); test pytaniem kogo? co? | forma biernika zależy od żywotności rzeczownika |
| strona-komiksu | L005 | schemat do klikania (neutralne rysunki) | anatomia strony komiksu: plansza, kadr, dymek mowy, chmurka myśli, onomatopeja, narracja w ramce, kierunek czytania | komiks ma własne środki przekazu, które trzeba umieć nazwać |
| przemiana-bohatera | L001 | oś trzech kroków | stan początkowy → wydarzenie → nowy stan (bez rysowania postaci z książek; podpisy tekstowe z przykładami z lektur do wyboru) | przemiana bohatera ma przyczynę i skutek |

### Język angielski (`ang`) — przykłady po angielsku, opisy po polsku

| id | lekcja | rodzaj | co pokazać | wniosek |
|---|---|---|---|---|
| os-czasow | L004, L006 | oś czasu z przełącznikiem czasu | oś przeszłość — TERAZ — przyszłość: Past Simple = punkt, Past Continuous = odcinek, Present Perfect = strzałka do TERAZ, Present Simple = powtarzające się kropki, Present Continuous = odcinek wokół TERAZ; przykładowe zdanie do każdego | każdy czas ma swój „kształt” na osi |
| kadr-when-while | L006 | animacja „do przodu” | długa czynność w tle (I was walking — odcinek) przerwana krótką (it started to rain — błysk); dwa zdania: when + Past Simple, while + Past Continuous | when łączy się z krótkim zdarzeniem, while z czynnością w tle |
| mosty-present-perfect | L005 | schemat z trzema trybami | trzy znaczenia Present Perfect: doświadczenie (punkty „kiedyś” bez daty), skutek (zgubione klucze → nie mogę wejść), trwanie (since / for do TERAZ); kontrast z Past Simple „yesterday, in 2020, ago” jako zamknięte drzwi | Present Perfect łączy przeszłość z teraźniejszością; data zamyka drzwi i wymaga Past Simple |
| been-gone | L005 | animacja „do przodu” | mapa: dom → sklep → dom (has been — wrócił) i dom → sklep (has gone — jeszcze tam jest) | been = był i wrócił, gone = poszedł i nie wrócił |
| szuflady-przyszlosci | L012 | schemat do klikania | cztery sposoby mówienia o przyszłości: will (decyzja teraz, przewidywanie-opinia), be going to (plan, dowód), Present Continuous (ustalone spotkanie), Present Simple (rozkład jazdy); przykład do każdej szuflady | wybór formy zależy od tego, skąd wiemy o przyszłości |
| be-czy-do | L002 | drzewo decyzyjne | czy w zdaniu jest am/is/are/was/were jako czasownik główny? TAK → pytanie przez inwersję, przeczenie BE + not; NIE → do/does/did przed podmiotem, czasownik w formie podstawowej; ćwiczenie: wybierz drogę dla 6 zdań | najpierw szukamy BE, dopiero potem używamy DO |
| czynnosc-stan | L003 | przełącznik par | czasowniki czynności (run, write — mogą mieć -ing) i stanu (know, like, want — zwykle bez -ing); pary o dwóch znaczeniach: have, think, see | -ing tylko przy czynnościach, nie przy stanach |

## 6. Szablon startowy — skopiuj w całości do każdej grafiki

Zmieniasz tylko blok między `/* >>> VIZ przyklad-schemat */` a `/* <<< VIZ */` oraz `<figure data-viz="…">` na dole (możesz dodać kilka `<figure>` z różnymi `data-opt`, żeby pokazać tryby).

```html
<!doctype html>
<html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>VIZ — podgląd grafiki</title>
<style>
:root{--accent:#1d6b4f;--accent-soft:#e7f3ec;--surface:#fff;--surface-soft:#f3f7f4;--text:#1a2332;--text-soft:#5d6b7a;--border:#d5dee6;--border-strong:#b8c4cf;
--viz-ink:#1a2332;--viz-mut:#5d6b7a;--viz-line:#d5dee6;--viz-bg:#fff;--viz-bg2:#f6f8f7;
--c-basic:#2e7d32;--c-basic-bg:#e8f5e9;--c-error:#c62828;--c-error-bg:#fdecea;--c-warn:#b26a00;--c-warn-bg:#fff4e0;
--k1:#1f6fb2;--k1-bg:#e3effa;--k2:#178a6c;--k2-bg:#e0f3ec;--k3:#e09400;--k3-bg:#fff3d6;--k4:#c0392b;--k4-bg:#fdecea;--k5:#7a3fbf;--k5-bg:#f3ecfb;--k6:#5c8a3a;--k6-bg:#eef6e6;
--blood-o2:#d32f2f;--blood-o2-bg:#fde8e8;--blood-co2:#3949ab;--blood-co2-bg:#e8eaf8;--nerve:#f2a900;--bone:#efe6d2;--muscle:#c0574b;--skin:#f1c9a5;--fat:#f7e3a6}
body{font:15px/1.5 Inter,system-ui,sans-serif;color:var(--text);background:#f8faf8;margin:0;padding:16px;max-width:900px}
figure{margin:0 0 24px;background:var(--viz-bg);border:1px solid var(--border);border-radius:12px;padding:12px}
figcaption{font-weight:700;margin-bottom:8px} svg{width:100%;height:auto;display:block}
.vz-tools{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:0 0 10px}
.vz-btn{border:1px solid var(--border-strong);background:var(--surface);color:var(--text);border-radius:8px;padding:6px 11px;font:700 12.5px Inter,system-ui,sans-serif;cursor:pointer;min-height:34px}
.vz-btn:hover{border-color:var(--accent);color:var(--accent)} .vz-btn.on{background:var(--accent);border-color:var(--accent);color:#fff}
.vz-info{margin-top:10px;padding:10px 12px;border-left:3px solid var(--accent);background:var(--surface-soft);border-radius:8px;font-size:13.5px;min-height:44px}
.vz-info b{display:block;margin-bottom:2px} .vz-info.ok{border-left-color:var(--c-basic);background:var(--c-basic-bg)} .vz-info.bad{border-left-color:var(--c-error);background:var(--c-error-bg)}
.vz-hit{cursor:pointer} .vz-hit:hover,.vz-hit:focus{filter:brightness(.93);outline:none} .vz-hit.sel{filter:drop-shadow(0 0 3px var(--accent))}
input[type=range]{width:100%;accent-color:var(--accent)}
</style></head><body>
<script>
/* ===== VIZ — mała biblioteka (taka sama jak w kursie). NIE ZMIENIAJ tego bloku. ===== */
(function(){var VIZ=window.VIZ={},REG={},NS='http://www.w3.org/2000/svg';
VIZ.define=function(id,d){REG[id]=d};
function set(e,at){for(var k in at){var v=at[k];if(v==null)continue;if((k==='fill'||k==='stroke'||k==='stop-color')&&String(v).indexOf('var(')>=0)e.style.setProperty(k,v);else e.setAttribute(k,v)}}
function add(e,kids){(kids||[]).forEach(function(c){if(c==null||c===false)return;e.appendChild(typeof c==='string'||typeof c==='number'?document.createTextNode(String(c)):c)});return e}
VIZ.S=function(tag,at,kids){var e=document.createElementNS(NS,tag);set(e,at||{});return add(e,kids)};
VIZ.H=function(tag,cls,html,kids){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return add(e,kids)};
VIZ.svg=function(w,h,label,kids){return VIZ.S('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':label||'',preserveAspectRatio:'xMidYMid meet'},kids)};
VIZ.T=function(x,y,t,o){o=o||{};return VIZ.S('text',{x:x,y:y,'text-anchor':o.a||'middle','dominant-baseline':o.b||'middle','font-size':o.s||12,'font-weight':o.w||600,fill:o.f||'var(--viz-ink)'},[t])};
VIZ.btn=function(label,on){var b=VIZ.H('button','vz-btn');b.type='button';b.textContent=label;if(on)b.onclick=on;return b};
var fx=VIZ.fx={};
/* elementy z atrybutem data-k → kliknięcie / Enter pokazuje map[k] = ['Tytuł','opis'] w polu box */
fx.info=function(root,box,map,first){function show(k,el){var d=map[k];if(!d)return;root.querySelectorAll('.vz-hit.sel').forEach(function(x){x.classList.remove('sel')});if(el)el.classList.add('sel');box.className='vz-info';box.innerHTML='<b>'+d[0]+'</b>'+d[1]}
 root.querySelectorAll('[data-k]').forEach(function(el){el.classList.add('vz-hit');el.setAttribute('tabindex','0');el.setAttribute('role','button');el.addEventListener('click',function(){show(el.getAttribute('data-k'),el)});el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();show(el.getAttribute('data-k'),el)}})});
 if(first)show(first,root.querySelector('[data-k="'+first+'"]'));return show};
fx.infoBox=function(t){return VIZ.H('div','vz-info',t||'Kliknij element grafiki, aby zobaczyć wyjaśnienie.')};
/* autoodtwarzanie: step() co ms, tylko gdy grafika widoczna; klik w grafikę zatrzymuje, przycisk wznawia */
fx.auto=function(el,step,ms,o){o=o||{};var on=!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches),vis=false,tm=null,bar=VIZ.H('div','vz-tools'),b=VIZ.H('button','vz-btn');b.type='button';
 function lab(){b.textContent=on?'⏸ zatrzymaj animację':'▶ odtwarzaj automatycznie';b.classList.toggle('on',on)}function halt(){if(tm){clearInterval(tm);tm=null}}
 function run(){if(tm||!on||!vis||document.hidden)return;if(o.now)step();tm=setInterval(function(){if(document.hidden||!vis){halt();return}step()},ms)}
 b.onclick=function(){on=!on;lab();if(on)run();else halt()};bar.appendChild(b);el.insertBefore(bar,el.firstChild);lab();
 el.addEventListener('pointerdown',function(e){if(bar.contains(e.target)||!on)return;on=false;halt();lab()},true);
 if('IntersectionObserver' in window)new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;if(vis)run();else halt()})},{threshold:.35}).observe(el);else{vis=true;run()}
 return{stop:function(){on=false;halt();lab()}}};
fx.toggle=function(btns,i){btns.forEach(function(b,j){b.classList.toggle('on',j===i)})};
VIZ.mountAll=function(){document.querySelectorAll('[data-viz]').forEach(function(f){var d=REG[f.dataset.viz],body=f.querySelector('.viz-body');var opt={};try{opt=JSON.parse(f.dataset.opt||'{}')}catch(e){}
 if(!d){body.textContent='Brak grafiki '+f.dataset.viz;return}d.mount(body,opt,f)})};
})();
</script>

<script>
/* >>> VIZ przyklad-schemat */
VIZ.define('przyklad-schemat',{opis:'Wzór: trzy elementy do klikania z opisem i animacja „do przodu”.',
mount:function(el,opt){
  var S=VIZ.S,T=VIZ.T,box=VIZ.fx.infoBox(),i=0;
  var kola=[0,1,2].map(function(n){return S('circle',{cx:80+n*170,cy:90,r:40,fill:'var(--k'+(n+1)+'-bg)',stroke:'var(--k'+(n+1)+')','stroke-width':3,'data-k':'e'+n})});
  var kropka=S('circle',{cx:80,cy:90,r:9,fill:'var(--accent)'});
  var sv=VIZ.svg(500,180,'Trzy etapy procesu',kola.concat([T(80,150,'etap 1'),T(250,150,'etap 2'),T(420,150,'etap 3'),kropka]));
  el.appendChild(sv);el.appendChild(box);
  VIZ.fx.info(el,box,{e0:['Etap 1','opis…'],e1:['Etap 2','opis…'],e2:['Etap 3','opis…']});
  VIZ.fx.auto(el,function(){i=(i+1)%3;kropka.setAttribute('cx',80+i*170)},1200);
}});
/* <<< VIZ */
</script>

<figure data-viz="przyklad-schemat" data-opt='{}'><figcaption>Podgląd: przyklad-schemat</figcaption><div class="viz-body"></div></figure>
<script>VIZ.mountAll()</script>
</body></html>
```
