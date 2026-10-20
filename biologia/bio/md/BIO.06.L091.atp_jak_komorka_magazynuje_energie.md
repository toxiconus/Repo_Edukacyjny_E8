---
kod: L091
uid: BIO.06.L091.atp_jak_komorka_magazynuje_energie
tytul: ATP — jak komórka magazynuje i przekazuje energię
opis: budowa ATP · hydroliza ATP do ADP i fosforanu · sprzężenie reakcji · skąd komórka bierze energię do syntezy ATP: fosforylacja substratowa, łańcuch oddechowy, chemiosmoza i ATP-syntaza · bilans energetyczny oddychania · zadania olimpijskie z kluczem
kicker: L091 · EXTRA · BIOLOGIA KOMÓRKI · POZIOM OLIMPIJSKI (PONAD PODSTAWĄ)
lead: Komórka nie „spala” glukozy jak ogień. Rozkłada ją w serii małych kroków i zapisuje uwolnioną energię w cząsteczkach ATP, które potem oddają ją tam, gdzie jest potrzebna. Ta lekcja pokazuje, jak to działa i dlaczego tak się dzieje.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE]][[exam:OLIMPIADA]]
uwaga: Lekcja wykraczająca poza podstawę (liceum i olimpiada). Wartości energetyczne są orientacyjne i zależą od źródła; w W1 sprawdzić liczby ATP na cząsteczkę glukozy i ΔG hydrolizy.
stopka: **BIOLOGIA L091 v1.0** · ATP i energia komórki · 2026
stan: NOWA LEKCJA (2026-10-12) — Claude Haiku 5.5; na prośbę użytkownika (biol. i chem. — ATP); W1 FULL do zrobienia
---

Ta lekcja uczy, czym jest ATP, jak komórka go wytwarza i jak wykorzystuje. Po jej przejściu opiszesz budowę ATP, wyjaśnisz reakcję hydrolizy i sprzężenia, wskażesz trzy źródła syntezy ATP w komórce i policzysz orientacyjny bilans energetyczny oddychania tlenowego.

::: minimum | Muszę umieć — 8 punktów
1. **ATP (trifosforan adenozyny)** to cząsteczka zbudowana z adeniny, rybozy i trzech reszt fosforanowych połączonych wiązaniami bezwodnikowymi.
2. **Energia ATP** jest zmagazynowana głównie w wiązaniach między fosforanami. Ich rozerwanie (hydroliza) uwalnia energię.
3. **Hydroliza ATP:** ATP + H₂O → ADP + Pᵢ (fosforan nieorganiczny); ΔG°′ ≈ −30,5 kJ/mol (w warunkach komórkowych wyraźnie więcej, ok. −50 kJ/mol).
4. **Sprzężenie:** reakcja endoergiczna (ΔG > 0) może przebiegać, jeśli jest sprzężona z hydrolizą ATP — sumaryczne ΔG < 0.
5. **Synteza ATP** wymaga energii i odbywa się trzema drogami: fosforylacja substratowa (glikoliza, cykl Krebsa), fosforylacja oksydacyjna (łańcuch oddechowy + ATP-syntaza, chemiosmoza).
6. **Chemiosmoza:** transport protonów przez błonę (w mitochondriach — do przestrzeni międzybłonowej) tworzy gradient, którego energię wykorzystuje ATP-syntaza do dodania Pᵢ do ADP.
7. **Oddychanie tlenowe glukozy** daje w sumie ok. 30–32 cząsteczki ATP; to ok. 1/3 energii spalania glukozy zachowane w ATP, reszta ucieka jako ciepło.
8. **ATP jest nośnikiem energii, nie jej magazynem długoterminowym:** komórka trzyma go w małych ilościach i stale odnawia.
:::

::: warstwy
- e8 | <b>Podstawa:</b> budowa ATP, rola jako nośnika energii, oddychanie a energia ATP
- understand | <b>Rozumienie:</b> sprzężenie reakcji; fosforylacja substratowa vs oksydacyjna; czemu hydroliza ATP jest „egzoergiczna”
- contest | <b>Olimpiada:</b> bilans energetyczny z ΔG, gradient protonowy, zadania z kluczem, sprzężenie w reakcjach enzymatycznych
- extra | <b>Ambitne:</b> stała Gibbsa w komórce, sprawność energetyczna, ATP jako bateria komórki i sygnał
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§1](#wyklad)** — wykład „od zera”: po co komórce ATP.
2. **[§2](#budowa)–[§3](#hydroliza)** — budowa i hydroliza ATP; kluczowe pojęcie to sprzężenie.
3. **[§4](#synteza)–[§5](#bilans)** — trzy drogi syntezy ATP i bilans; to najczęstszy temat zadań olimpijskich.
4. **[§8](#cwiczenia)** — zadania z kluczem.
:::

## 1 | Wykład — po co komórce ATP {#wyklad}

::: karta understand | Wykład od zera
Każda komórka wykonuje mnóstwo pracy: buduje białka, kurczy włókna mięśniowe, przepompowuje jony przez błonę, przewodzi impulsy nerwowe. Każda z tych czynności wymaga energii, a energia pochodzi z pokarmu. Problem polega na tym, że pokarm (np. glukoza) zawiera energię w zbyt dużej porcji i w postaci, której komórka nie może bezpośrednio użyć.

Gdyby komórka spaliła całą glukozę naraz, uwolniona energia byłaby wydzielona jako ciepło w jednym dużym „wybuchu” i w większości przepadłaby. Dlatego komórka rozkłada glukozę na wiele małych kroków, a w każdym z nich zapisuje część energii w cząsteczkach, które mogą ją przekazać dalej. Tą uniwersalną walutą energetyczną jest **ATP**.

Dobry obraz to bateria: glukoza to jak paliwo w zbiorniku, ATP to naładowany akumulator, z którego każda część maszyny pobiera tyle energii, ile potrzebuje. Akumulator trzeba stale ładować, ale nie trzeba go trzymać w dużej ilości.
:::

### 1.1 Mini-wykład: dlaczego akurat ATP {#historia}

::: karta understand | W skrócie: ATP jako wspólna waluta
Gdyby każda reakcja używała innego nośnika energii, komórka musiałaby magazynować i przekształcać bardzo wiele substancji. ATP działa jak wspólna waluta: wiele różnych procesów (skurcz, synteza, transport) korzysta z tej samej „monety”. Ta uniwersalność wyjaśnia, dlaczego ATP występuje we wszystkich organizmach, od bakterii po człowieka.
:::

## 2 | Budowa ATP {#budowa}

ATP to nukleotyd. Składa się z trzech części:

- **adenina** — zasada azotowa (pierścieniowa, zawierająca azot);
- **ryboza** — cukier pięciowęglowy (pentoza);
- **trzy reszty fosforanowe** połączone łańcuchem: α, β, γ.

Ważne są wiązania między fosforanami: wiązania β–γ i α–β są wiązaniami **bezwodnikowymi** (fosforanowymi wysokoenergetycznymi). Ich rozerwanie nie oznacza, że „w wiązaniu siedzi energia” w prostym sensie — wynika z różnicy między stanem wyjściowym a produktami.

::: karta core | Dlaczego hydroliza ATP uwalnia energię?
1. **Stabilizacja produktów:** ADP i fosforan nieorganiczny są stabilizowane rezonansem i solwatacją przez wodę.
2. **Odpychanie elektrostatyczne:** trzy ujemnie naładowane reszty fosforanowe w ATP odpychają się; ich odłączenie zmniejsza napięcie.
3. **Wzrost entropii:** z jednej cząsteczki powstają dwie niezależne cząsteczki.
Razem te czynniki sprawiają, że ΔG hydrolizy jest ujemne. Samo „wiązanie” nie jest magazynem energii, lecz różnicą stanów.
:::

## 3 | Hydroliza ATP i sprzężenie {#hydroliza}

Hydroliza ATP:

**ATP + H₂O → ADP + Pᵢ**   (ΔG°′ ≈ −30,5 kJ/mol)

Sprzężenie to połączenie reakcji endoergicznej (wymagającej energii) z reakcją egzoergiczną (uwalniającą energię) przez wspólny produkt lub substrat.

**Przykład:** pierwsza reakcja glikolizy — fosforylacja glukozy.

1. Glukoza + Pᵢ → glukozo-6-fosforan; ΔG°′ ≈ +13,8 kJ/mol (endoergiczna — sama nie zajdzie).
2. ATP + H₂O → ADP + Pᵢ; ΔG°′ ≈ −30,5 kJ/mol.
3. Sumarycznie: glukoza + ATP → glukozo-6-fosforan + ADP; ΔG°′ ≈ +13,8 − 30,5 ≈ −16,7 kJ/mol.

Suma jest ujemna, więc reakcja przebiega samorzutnie. To jest sprzężenie.

::: karta understand | Przykład prowadzony: obliczenie sprzężenia
**Dane:** reakcja A → B ma ΔG°′ = +20 kJ/mol. Hydroliza ATP ma ΔG°′ = −30,5 kJ/mol.

**Krok 1:** suma ΔG dla reakcji sprzężonej: +20 + (−30,5) = −10,5 kJ/mol.
**Krok 2:** ujemna wartość oznacza, że reakcja sprzężona przebiega samorzutnie.
**Wniosek:** jedna cząsteczka ATP wystarcza na reakcję o ΔG do +30,5 kJ/mol (w warunkach standardowych).
:::

::: karta warning | Pułapka: ΔG°′ a ΔG w komórce
Wartość ΔG°′ dotyczy warunków standardowych (pH 7, stężenia 1 mol/dm³). W komórce stężenia ATP, ADP i Pᵢ są inne, więc rzeczywiste ΔG hydrolizy jest bardziej ujemne (ok. −50 kJ/mol). Na olimpiadzie zwykle podaje się ΔG°′ i trzeba to uwzględnić w rachunkach.
:::

## 4 | Trzy drogi syntezy ATP {#synteza}

Komórka odbudowuje ATP z ADP i Pᵢ, a energię czerpie z utleniania substancji odżywczych.

### 4.1 Fosforylacja substratowa

ATP powstaje bezpośrednio z przeniesienia reszty fosforanowej z wysokoenergetycznego związku na ADP. W glikolizie (np. fosfoglicerynian → pirogronian) i w cyklu Krebsa (bursztynylo-CoA → bursztynian) występują takie reakcje. Ta droga jest szybka, ale daje mało ATP.

### 4.2 Łańcuch oddechowy i fosforylacja oksydacyjna

Elektrony z NADH i FADH₂ przechodzą przez kompleksy białkowe błony wewnętrznej mitochondrium. Przy każdym przeniesieniu część energii jest wykorzystywana do przepompowania protonów (H⁺) do przestrzeni międzybłonowej. Końcowym akceptorem elektronów jest tlen, który łączy się z protonami, tworząc wodę.

### 4.3 Chemiosmoza i ATP-syntaza

Przepompowanie protonów tworzy gradient elektrochemiczny: wyższe stężenie H⁺ i ładunek dodatni po stronie międzybłonowej. Protony wracają do macierzy przez **ATP-syntazę**. Przepływ napędza obrót jej podjednostki, co wymusza połączenie ADP z Pᵢ.

::: karta core | Chemiosmoza w 4 krokach
1. Łańcuch oddechowy przepompowuje H⁺ z macierzy do przestrzeni międzybłonowej.
2. Powstaje gradient protonowy (różnica stężeń i ładunku) — energia potencjalna.
3. H⁺ wraca do macierzy przez ATP-syntazę.
4. Energia przepływu napędza syntezę ATP z ADP i Pᵢ.
:::

@viz fotosynteza-oddychanie | Fotosynteza i oddychanie — przepływ energii między nimi | obserwuj, gdzie zapisuje się energia i gdzie się ją odczytuje
@opis Schemat łączy dwa procesy: fotosyntezę (światło zapisane w cukrze i ATP) oraz oddychanie (cukier i tlen → ATP, dwutlenek węgla i woda). Uczeń ma zobaczyć, że ATP jest wspólnym pośrednikiem: fotosynteza go wytwarza, a oddychanie też, ale w innym miejscu i z innego źródła energii. Wniosek: ATP to ta sama waluta w obu procesach.

## 5 | Bilans energetyczny oddychania tlenowego {#bilans}

Orientacyjny bilans glukozy (na jedną cząsteczkę):

| Etap | Miejsce | Bezpośrednio ATP | Nośniki NADH / FADH₂ |
|---|---|---|---|
| Glikoliza | cytoplazma | 2 | 2 NADH |
| Pomost (przekształcenie pirogronianu) | mitochondrium | 0 | 2 NADH |
| Cykl Krebsa | mitochondrium | 2 | 6 NADH, 2 FADH₂ |
| Łańcuch oddechowy | błona wewnętrzna | — | ok. 25–28 ATP z NADH i FADH₂ |

Suma: około 30–32 ATP na cząsteczkę glukozy (wartość zależy od przyjętej wydajności przenoszenia NADH przez błony mitochondrialne i od przyjętego stosunku H⁺/ATP).

**Porównanie energii:** spalanie glukozy: ΔH ≈ −2800 kJ/mol. Zapisane w ATP: 30 × 30,5 ≈ 915 kJ/mol. Stąd sprawność zapisu ok. 1/3 — reszta to ciepło, które utrzymuje ciało.

::: karta understand | Przykład prowadzony: ile energii zapisano w ATP?
**Dane:** ΔG°′ hydrolizy ATP = −30,5 kJ/mol; wydajność 30 ATP na glukozę; ΔH spalania glukozy = −2800 kJ/mol.

**Krok 1:** energia zapisana w ATP = 30 × 30,5 = 915 kJ/mol.
**Krok 2:** sprawność = 915 / 2800 ≈ 0,33, czyli ok. 33%.
**Wniosek:** około jednej trzeciej energii spalania trafia do ATP; reszta jest rozproszona jako ciepło i przepływa przez entropię.
:::

## 6 | Chemia w tle: ΔG, ΔH i entropia {#chemia}

Dla olimpijczyka ważny jest związek trzech wielkości:

**ΔG = ΔH − T·ΔS**

- ΔG < 0 — reakcja samorzutna (egzoergiczna w sensie swobodnej energii);
- ΔH — zmiana entalpii (ciepło reakcji przy stałym ciśnieniu);
- ΔS — zmiana entropii, T — temperatura bezwzględna.

Hydroliza ATP ma ΔH również ujemne, ale o jej samorzutności decyduje w dużej mierze wzrost entropii (dwie cząsteczki zamiast jednej). Oddychanie glukozy łączy wiele takich kroków, z których każdy ma ΔG niekorzystne lub bliskie zera, a dopiero sprzężenie z ATP i ostatecznym przepływem elektronów do tlenu zamyka bilans.

::: karta extra | Ambitnie: sprawność a termodynamika
Żadna maszyna nie zamienia całej energii na pracę. W komórce to samo: część energii jest zawsze rozproszona. Termodynamika nie zabrania komórce wysokiej sprawności, ale wymusza ciepło jako produkt uboczny każdego procesu. Dlatego organizmy stale potrzebują pokarmu, a temperatura ciała musi być utrzymywana.
:::

## 7 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| „ATP magazynuje energię w wiązaniu fosforanowym jak w zbiorniku.” | ATP przenosi energię; energię daje różnica stanów (produkty stabilniejsze) | Samo wiązanie nie jest „paliwem”. |
| „Hydroliza ATP zawsze uwalnia 30,5 kJ w komórce.” | ΔG°′ = −30,5 kJ/mol dotyczy standardu; w komórce wartość jest inna | Stężenia zmieniają ΔG. |
| „Reakcja endoergiczna nie może zajść.” | Może zajść przy sprzężeniu z hydrolizą ATP | Suma ΔG musi być ujemna. |
| „Oddychanie daje 38 ATP na glukozę.” | Wartość orientacyjna ok. 30–32 (zależy od przyjętych założeń) | Podręczniki podają różne wartości; warto to wyjaśnić. |
| „Fosforylacja oksydacyjna zachodzi w cytoplazmie.” | Zachodzi na błonie wewnętrznej mitochondrium | Potrzebny jest gradient protonowy po obu stronach błony. |
| „ATP to długoterminowy zapas energii.” | ATP to nośnik i bufor krótkoterminowy; zapas to glikogen i tłuszcze | ATP jest odnawiany w tempie zapotrzebowania. |
:::

## 8 | Zadania z kluczem (poziom olimpijski) {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — budowa
Wymień trzy części cząsteczki ATP i wskaż, które wiązania są bezwodnikowe.
::: odp | Pokaż klucz
Adenina, ryboza, trzy reszty fosforanowe. Bezwodnikowe są wiązania między fosforanami (α–β i β–γ). (1 pkt za części, 1 pkt za wiązania.)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — sprzężenie
Reakcja X → Y ma ΔG°′ = +15 kJ/mol. Czy może przebiegać samorzutnie, jeśli jest sprzężona z hydrolizą ATP (ΔG°′ = −30,5 kJ/mol)? Wykonaj rachunek.
::: odp | Pokaż klucz
ΔG sumaryczne = +15 + (−30,5) = −15,5 kJ/mol < 0, więc reakcja sprzężona przebiega samorzutnie. (1 pkt za sumę, 1 pkt za wniosek.)
:::
:::

::: karta exam | Zadanie 3 (2 pkt) — gradient
Wyjaśnij, czym jest gradient protonowy i dlaczego jest potrzebny do syntezy ATP.
::: odp | Pokaż klucz
Gradient protonowy to różnica stężeń i ładunku H⁺ po obu stronach błony mitochondrialnej. Jest zapisem energii, którą łańcuch oddechowy wykorzystał do przepompowania protonów. Przepływ H⁺ przez ATP-syntazę napędza syntezę ATP. (1 pkt za definicję, 1 pkt za rolę w syntezie ATP.)
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — bilans
Glukoza spalana w kalorymetrze daje ΔH = −2800 kJ/mol. Oblicz orientacyjną sprawność zapisu energii w ATP przy wydajności 30 ATP na cząsteczkę glukozy i ΔG°′ = −30,5 kJ/mol. Podaj wynik w procentach.
::: odp | Pokaż klucz
Energia w ATP = 30 · 30,5 = 915 kJ/mol. Sprawność = 915 / 2800 ≈ 0,327 → ok. 33%. (1 pkt za energię w ATP, 1 pkt za iloraz, 1 pkt za wynik w procentach.)
:::
:::

::: karta exam | Zadanie 5 (2 pkt) — fosforylacja substratowa
Podaj jeden przykład fosforylacji substratowej i wyjaśnij, czym różni się od fosforylacji oksydacyjnej.
::: odp | Pokaż klucz
Przykład: reakcja w glikolizie (fosfoglicerynian → pirogronian z syntezą ATP). Różnica: w fosforylacji substratowej ATP powstaje bezpośrednio z przeniesienia fosforanu z substratu; w oksydacyjnej energia z przepływu elektronów tworzy gradient protonowy napędzający ATP-syntazę. (1 pkt za przykład, 2 pkt za różnicę.)
:::
:::

::: karta exam | Zadanie 6 (3 pkt) — problem / myślenie
Dlaczego komórka, która przestała oddychać tlenowo, może przez pewien czas przeżyć na glikolizie, ale szybko wyczerpuje ATP? Odwołaj się do liczby ATP z każdego etapu.
::: odp | Pokaż klucz
Glikoliza daje tylko 2 ATP bezpośrednio na cząsteczkę glukozy, a łańcuch oddechowy (ok. 25–28 ATP) jest zablokowany. Komórka może przez pewien czas ratować się glikolizą, ale wydajność spada ok. 15 razy, więc zapotrzebowanie na ATP przekracza podaż. (1 pkt za 2 ATP glikolizy, 1 pkt za wstrzymany łańcuch, 1 pkt za wniosek o wyczerpaniu.)
:::
:::

## 9 | Fiszki {#fiszki}

::: fiszki
ATP | nukleotyd z adeniną, rybozą i trzema fosforanami | basic:atp
Hydroliza ATP | ATP + H₂O → ADP + Pᵢ; ΔG°′ ≈ −30,5 kJ/mol | basic:atp
Sprzężenie | reakcja endoergiczna z hydrolizą ATP, suma ΔG < 0 | understand:atp
Fosforylacja substratowa | ATP z bezpośredniego przeniesienia fosforanu | understand:atp
Fosforylacja oksydacyjna | ATP z gradientu protonowego i ATP-syntazy | understand:atp
Gradient protonowy | różnica stężeń i ładunku H⁺ po obu stronach błony | understand:atp
Bilans oddychania | ok. 30–32 ATP na glukozę | basic:atp
:::

## 10 | Słownik {#slownik}

::: slownik
ATP :: trifosforan adenozyny, uniwersalny nośnik energii w komórce
ADP :: difosforan adenozyny, produkt hydrolizy ATP
Pᵢ :: fosforan nieorganiczny
Hydroliza :: rozkład związku z udziałem wody
Sprzężenie reakcji :: połączenie reakcji endoergicznej z egzoergiczną przez wspólny etap
ΔG :: zmiana energii swobodnej Gibbsa, decydująca o samorzutności reakcji
ΔG°′ :: wartość ΔG w warunkach standardowych dla biochemii (pH 7)
Fosforylacja substratowa :: synteza ATP przez przeniesienie fosforanu z substratu
Fosforylacja oksydacyjna :: synteza ATP napędzana gradientem protonowym w błonie mitochondrium
ATP-syntaza :: enzym tworzący ATP z ADP i Pᵢ, napędzany przepływem protonów
Chemiosmoza :: mechanizm syntezy ATP wykorzystujący gradient protonowy
:::

## 11 | Test końcowy {#test}

::: test
? ATP przenosi energię głównie dzięki:
- temu, że wiązanie fosforanowe jest „pełne energii” jak w zbiorniku
+ różnicy stanów: produkty hydrolizy są stabilniejsze niż substraty
- wiązaniom wodorowym w adeninie
- temu, że jest gazem
! Energię daje różnica stabilności reagentów i produktów, nie samo wiązanie.
? Sprzężenie reakcji oznacza:
- zatrzymanie reakcji endoergicznej
+ połączenie reakcji endoergicznej z hydrolizą ATP tak, że suma ΔG < 0
- połączenie dwóch reakcji egzoergicznych
- wytworzenie ATP bez energii
! Suma ΔG musi być ujemna, aby reakcja przebiegła samorzutnie.
? Fosforylacja substratowa to:
- synteza ATP w łańcuchu oddechowym
+ przeniesienie fosforanu z substratu bezpośrednio na ADP
- rozkład ATP do ADP w mięśniu
- zapis energii w tłuszczu
! Np. w glikolizie fosfoglicerynian przekazuje fosforan na ADP.
? Gradient protonowy w mitochondrium powstaje, gdy:
- ATP-syntaza zużywa ATP
+ łańcuch oddechowy przepompowuje H⁺ do przestrzeni międzybłonowej
- glukoza jest fosforylowana
- cykl Krebsa tworzy bursztynian
! Przepompowanie protonów tworzy gradient, który napędza syntezę ATP.
? Orientacyjna liczba ATP z jednej cząsteczki glukozy w oddychaniu tlenowym:
- 2
- 4
+ ok. 30–32
- 100
! Glikoliza daje 2 bezpośrednio, reszta z łańcucha i cyklu Krebsa (wartość zależy od przyjętych założeń).
? Gdzie zachodzi fosforylacja oksydacyjna u eukariontów?
- w cytoplazmie
+ na wewnętrznej błonie mitochondrium
- w jądrze komórkowym
- w rybosomach
! Łańcuch oddechowy i ATP-syntaza są w błonie wewnętrznej mitochondrium.
:::

## 12 | Ciekawostki {#ciekawostki}

::: karta extra | Człowiek zużywa dziennie tyle ATP, ile waży
Ciało człowieka odnawia ogromne ilości ATP. Szacuje się, że dorosły organizm w ciągu doby przerabia masę ATP porównywalną z masą ciała, bo każda cząsteczka jest używana i odtwarzana wielokrotnie. Komórka w danej chwili trzyma tylko małą ilość ATP.
:::

::: karta extra | ATP-syntaza jako najmniejszy silnik
ATP-syntaza ma ruchomą część obracającą się podczas przepływu protonów. Działa jak silnik, w którym energia przepływu zamienia się w ruch mechaniczny, a ten w wiązanie fosforanu. Jest to jeden z najczęściej przytaczanych przykładów maszyny molekularnej w biologii.
:::

::: karta extra | ATP jako sygnał
Poza funkcją energetyczną ATP działa jako sygnał zewnątrzkomórkowy (np. w przekazywaniu impulsów między komórkami). Ta rola jest odrębna od magazynowania energii i pokazuje, że cząsteczka może pełnić wiele funkcji.
:::

## 13 | Co dalej? {#dalej}

Ta lekcja uzupełnia powtórkę komórki (REV01) i oddychanie. Dla chemii: lekcja „Energia układów żywych” w chemii (K12) pokazuje to samo od strony termodynamiki i entalpii.

## 14 | Checklista — umiem… {#checklista}

::: checklista
- [ ] opisuję budowę ATP i wskazuję wiązania bezwodnikowe
- [ ] liczę ΔG sprzężonej reakcji z ΔG°′ hydrolizy ATP
- [ ] wskazuję trzy drogi syntezy ATP i miejsce każdej z nich
- [ ] tłumaczę chemiosmozę na schemacie błony mitochondrium
- [ ] liczę orientacyjną sprawność zapisu energii w ATP
:::

## Pochodzenie i sprawdzenie treści {#zrodla}

- Lekcja nowa, na prośbę użytkownika (poziom olimpijski / liceum, dla biologii i chemii). Opiera się na standardowych danych biochemicznych: ΔG°′ hydrolizy ATP ≈ −30,5 kJ/mol, ΔH spalania glukozy ≈ −2800 kJ/mol, liczba ATP z glukozy ok. 30–32 (wartość zależy od założeń).
- Wszystkie wartości do sprawdzenia w W1 przed użyciem w zadaniach konkursowych.
