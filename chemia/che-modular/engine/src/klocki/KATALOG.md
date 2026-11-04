# Katalog klocków (generowany: `python3 narzedzia/katalog_klockow.py`, wołany z `odswiez_wszystko.py`)

Przed napisaniem nowego klocka sprawdź tu rodzinę i użycia — nie twórz dubla, rozbuduj istniejący. Nazwa → `@klocek nazwa {opcje} | podpis` + obowiązkowy `@opis`.

## Rodziny o podobnej funkcji (kandydaci do uwspólnienia)

| Rodzina | Klocki | Uwaga |
|---|---|---|
| Skala pH i wskaźniki | `ph-indicators-v03` | scalone 2026-11-04: ph-skala usunięta, substancje z życia są zakładką „Z życia” w panelu |
| Miareczkowanie | `titration-merged` | jedna wersja (moja miareczkowanie usunięta) |
| Kwaśne deszcze | `acid-rain-v01` | scalone 2026-11-04: kwasne-deszcze usunięty, marmur dodany do acid-rain-v01 |
| Bufor | `bufor` | oryginał kw-bufor-v01 (GFX, pH-metry) jeszcze nieprzeniesiony |
| Przewodnictwo / elektroliza | `przewodnictwo` | scalone 2026-11-04: tester-przewodnictwa usunięty, N04 i FIZ01 używają przewodnictwo (N05 nadal @model gfx-scene-conductivity) |
| Probówki / zlewki z reakcją | `probowki`, `probowki-odczyn`, `probowki-wybor`, `zlewka-rx`, `zlewki-rx` | pięć klocków „naczynie + reakcja”: probówki (odczyn/wybór) i zlewki z silniczkiem rx-lite; litowce+woda = zestaw zlewki-rx |
| Wzory cząsteczek 2D | `wzor-2d` | jeden klocek (SMILES, grupy, kwaśny H, kulki, kąty); dawny molekula-2d scalony i usunięty |
| Reszty kwasowe / właściwości kwasów | `kwasy-reszty`, `kwasy-rozcienczanie` | odpowiedniki kw-reszty-v01, kw-wlasciwosci-v01 z dużego silnika (nieprzeniesione) |

## Wszystkie klocki (62)

| Klocek | Plik | Opis | Domyślne | Użycia (lekcja×liczba) |
|---|---|---|---|---|
| `acid-rain-v01` | acid_rain.js | Kwaśne deszcze — obieg SO₂/NOₓ → opad → skutki · v0.01 | (port; opcje z widoku) | N04×1 |
| `bilans-rownania` | bilans_rownania.js | Dobieranie współczynników w równaniu reakcji z tabelą bilansu atomów. | {rownanie: 'H2 + O2 -> H2O', przyklady: 'H2 + O2 -> H2O; Mg + O2 -> Mg | C1c×1, C3×1, LKO×2 |
| `bilans-spalania` | bilans_spalania.js | Bilans spalania całkowitego alkanu: współczynniki z n i liczba atomów C, H, O po obu stronach równania. | {n: 3, szer: 560, wys: 330} | LKO×1 |
| `bufor` | kwasy_modele.js | Bufor octanowy (CH₃COOH + CH₃COONa) kontra czysta woda: dodawanie kropli HCl lub NaOH, dwa pehametry z barwą wskaźnika uniwersalnego, wykres pH oraz pozostała pojemność b | {} | N04×1 |
| `czasteczki-3d` | chemia_wstep.js | Obrotowy model kulkowy cząsteczki (przeciągnij, aby obrócić): O₂, O₃, H₂O, CO₂, SO₂, SO₃, NH₃, CH₄ z kątami między wiązaniami. | {mol: 'O₂,O₃,H₂O,CO₂'} | F02×1, N02×1 |
| `destylacja` | chemia_wstep.js | Zestaw do destylacji: kolba z cieczą ogrzewana palnikiem, chłodnica Liebiga (para się skrapla) i odbieralnik; destylat zbiera się w odbieralniku. | {} | F03×1 |
| `detektor-tlenku` | okresowy_tlenki.js | Detektor tlenku: dla wybranego tlenku z bazy 38 tlenków odpowiada na trzy pytania — charakter, reakcja z wodą, reakcja z kwasem i z zasadą — i pokazuje zlewkę ze wskaźnik | {tlenek: 'SO2'} | N02×1 |
| `diagram-bohra` | diagram_bohra.js | Model Bohra atomu i jonu: jądro z liczbą protonów i powłoki K–N z elektronami; suwak Z i ładunek jonu. | {z: 11, ladunek: 0, max: 36} | C1c×1, F04×1, F06×1 |
| `doswiadczenie` | doswiadczenie.js | Opis doświadczenia: cel, sprzęt, BHP, scena z probówkami, równanie, miejsce na obserwacje. | {} | C1c×1, C4×2, X04×1 |
| `dysocjacja-vs-jonizacja` | jony_w_wodzie.js | Porównanie: kryształ NaCl dysocjuje (jony Na⁺ i Cl⁻ już istnieją), a cząsteczka HCl ulega jonizacji (jony H₃O⁺ i Cl⁻ powstają w reakcji z wodą). | {} | J03×1, N04×1 |
| `elektroskop` | fizyka_elektrostatyka.js | Elektroskop z listkami: naładowanie przez dotyk i przez indukcję w pięciu krokach; kąt listków zależy od wielkości ładunku, nie od jego znaku. | {tryb: 'indukcja'} | FIZ01×3 |
| `elektryzowanie` | fizyka_elektrostatyka.js | Pocieranie dwóch materiałów z szeregu tryboelektrycznego: elektrony przechodzą z materiału wyższego w szeregu do niższego; naładowany pręt przyciąga obojętne wahadełko, a | {a: 'szkło', b: 'jedwab'} | FIZ01×3 |
| `estryfikacja` | estryfikacja.js | Animacja estryfikacji: z grupy –OH kwasu i atomu H alkoholu powstaje woda, a reszty łączą się w ester. | {ester: 'octan-etylu', szer: 560, wys: 270} | LKO×1 |
| `gra-klasyfikacja` | gra_klasyfikacja.js | Gra: pojawia się wzór substancji, a uczeń wybiera, czy to kwas, zasada, sól czy tlenek; po odpowiedzi widać uzasadnienie. | {rund: 10} | C1c×1, N04×1 |
| `haworth` | haworth.js | Wzór Hawortha cukrów: formy α i β glukozy oraz fruktoza w pierścieniu. | {cukier: 'alfa-glukoza'} | LKO×1 |
| `izotopy` | izotopy.js | Konstruktor atomu: protony, neutrony i elektrony zmieniane przyciskami; wskazuje zmianę pierwiastka, izotopu lub ładunku oraz liczy masę atomową jako średnią ważoną. | {z: 17} | C1c×1, F05×1 |
| `kalkulator-mola` | kalkulator_mola.js | Kalkulator mola: z masy, liczby moli, masy molowej lub objętości gazu oblicza pozostałe wielkości. | {subst: 0} | C2m×1, LKO×1 |
| `karta-bhp` | karta_bhp.js | Karta BHP: zasady pracy w pracowni i pierwsza pomoc. | {otwarte: 0} | C1c×1, C2w×1, C4×1, F01×1, F02×1, F03×1, F06×1, J03×1, LKO×8, N01×1, N04×1, X04×1 |
| `konfiguracje` | konfiguracje.js | Konfiguracja elektronowa pierwiastków Z ≤ 36: kolejność podpowłok, pudełka orbitali, powłoki K–N. | {z: 19, max: 36} | C1c×1 |
| `konstruktor-tlenku` | okresowy_tlenki.js | Konstruktor wzoru tlenku metodą W–K–S–K: wartościowość pierwiastka i tlenu, krzyżowanie, skracanie, kontrola sumy stopni utlenienia; można też sprawdzić własny wzór. | {el: 'Al'} | N02×1 |
| `krzywe-rozpuszczalnosci` | krzywe_rozpuszczalnosci.js | Krzywe rozpuszczalności od temperatury (g na 100 g wody); przy wybranej T trzy strefy: nienasycony, nasycony, nasycony z osadem; opcjonalny punkt (T, m). | {subst: 'KNO3,NaCl,NH4Cl', T: 40, m: null, strefy: 1, szer: 480, wys:  | — |
| `krzyzowka-mendla` | krzyzowka_mendla.js | Szachownica Punnetta: gamety rodziców, genotypy potomstwa i stosunek fenotypów. | {krzyzowki: 'AA×aa,Aa×Aa,Aa×aa,AA×Aa', start: 1, cechy: 'gładkie:pomar | — |
| `kule-ladunek` | fizyka_elektrostatyka.js | Dwie przewodzące kule z ładunkami: po zetknięciu ładunek dzieli się proporcjonalnie do promieni (po równo dla jednakowych kul); uziemienie odprowadza ładunek; liczba elek | {q1: 8, q2: -2, r1: 1, r2: 1} | FIZ01×3 |
| `kwasy-reszty` | kwasy_modele.js | Tabela interaktywna: wybierasz wzór kwasu i widzisz jego nazwę, typ, resztę kwasową z ładunkiem, równanie dysocjacji, moc, sól sodową i zastosowanie. | {} | N04×1 |
| `kwasy-rozcienczanie` | kwasy_modele.js | Rozcieńczanie stężonego kwasu: kwas wlewany do wody nagrzewa roztwór bezpiecznie, a woda wlewana do kwasu powoduje lokalne wrzenie i pryskanie. | {} | N04×1 |
| `lancuch-poziomow` | chemia_wstep.js | Cztery poziomy opisu tego samego obiektu: atom, cząsteczka, próbka substancji, reakcja — przełączane przyciskami lub automatycznie. | {} | F01×1 |
| `lancuch-przemian` | lancuch_przemian.js | Schemat przemian: wzory substancji połączone strzałkami z literami reakcji; układ liniowy albo obieg zamknięty. | {wezly: 'Ca,CaO,Ca(OH)2,CaCO3', etyk: 'A,B,C', zamkniety: 0, szer: 480 | N02×3 |
| `linie-pola` | fizyka_elektrostatyka.js | Linie pola dwóch ładunków: wychodzą z ładunku dodatniego i wchodzą do ujemnego; gęstość linii pokazuje siłę pola. Znaki ładunków można zmieniać. | {q1: 1, q2: -1} | FIZ01×1 |
| `mapa-mysli` | chemia_wstep.js | Mapa myśli: centralne hasło i gałęzie; kliknięcie gałęzi odsłania jej pojęcia (do samodzielnego uzupełniania w pamięci przed odsłonięciem). | {centrum: 'CHEMIA', galezie: 'skład:pierwiastki,wzory;budowa:atomy,wią | F01×1 |
| `miareczkowanie-biureta` | miareczkowanie_biureta.js | Miareczkowanie 25 cm³ HCl o stężeniu 0,1 mol/dm³ roztworem NaOH z biurety: spadają krople, kolba zmienia barwę wskaźnika, pH-metr pokazuje pH i objętość titrantu; w punkc | {wskaznik: 'phph'} | N04×1 |
| `nadmiar-substratu` | nadmiar_substratu.js | Dwa substraty o podanych masach: który jest ograniczający, ile powstaje produktu i ile nadmiaru zostaje. | {reakcja: 'mg-hcl', mA: 0, mB: 0} | R07×1 |
| `osady-dwie-sole` | osady_dwie_sole.js | Dwie probówki z rozpuszczalnymi solami: model łączy jony na krzyż i sprawdza w tabeli, czy powstaje osad i jakiej barwy. | {} | J03×1 |
| `palenie` | palenie.js | Palenie metalu: płomień i iskry w barwie zależnej od metalu. | {metal: 'Mg', szer: 480, wys: 300} | N02×1 |
| `palnik-gazowy` | palnik_gazowy.js | Palnik gazowy (metan): płomień pod zlewką odwróconą z kroplami H₂O, zlewka kontrolna i woda wapienna mętniejąca od CO₂. | {etap: 2, szer: 560, wys: 340, anim: 1} | LKO×1, N01×1, N02×1 |
| `palniki` | palniki.js |  | {seria: 'plomien'} | F07×1, P01×1 |
| `petla-regulacji` | petla_regulacji.js | Pętla regulacji z pięciu elementów (bodziec, receptor, ośrodek, efektor, efekt) z krążącym impulsem. | {zestaw: 'temperatura', szer: 560, wys: 340} | — |
| `ph-indicators-v03` | ph_panel.js | Panel pH — wskaźniki, roztwory, drabinka · v0.05 | (port; opcje z widoku) | N03×1, N04×1 |
| `plomien` | plomien.js | Płomień palnika: barwa powoli zmienia się z pomarańczowej w barwę metalu. | {metal: 'Na', barwa: '#f59e0b', nazwa: 'Na — żółty', szer: 480, wys: 3 | — |
| `prawo-coulomba` | fizyka_elektrostatyka.js | Siła Coulomba F = k·q₁·q₂/(εr·r²): suwaki zmieniają ładunki, odległość i ośrodek; wykres F(r) z zaznaczonym punktem. | {q1: 2, q2: 3, r: 10} | FIZ01×2 |
| `probowki` | probowki.js |  | {metale: 'Li,K,Ca', wskaznik: 1} | N04×1, P01×1 |
| `probowki-odczyn` | probowki_odczyn.js | Probówki przed i po dodaniu odczynnika: zmiana barwy, opadający osad lub pęcherzyki gazu. | {tuby: 'Kontrola:bezbarwny:bezbarwny:brak,Woda wapienna + CO₂:bezbarwn | C2w×1, C4×3, LKO×4, N04×2 |
| `probowki-wybor` | probowki_wybor.js | Kilka probówek naraz; uczeń wybiera metale lub odczynniki, a pod spodem widzi równanie jonowe skrócone. | {zestaw: 'metale-hcl', wybrane: '', kat: 0, max: 4, szer: 480, wys: 30 | C1c×1, J03×1, N01×1, N02×1, N04×2, X04×1 |
| `profil-energii` | profil_energii.js | Profil energii reakcji: krzywa od substratów przez energię aktywacji do produktów; różnica poziomów to ΔH; katalizator obniża Eₐ. | {typ: 'egzo'} | C1c×1 |
| `przeniesienie-protonu` | jony_w_wodzie.js | Kwas w wodzie: jon H⁺ (proton) przeskakuje z cząsteczki kwasu na cząsteczkę wody, tworząc H₃O⁺ i resztę kwasową. | {kwas: 'HCl'} | FIZ01×1 |
| `przewodnictwo` | przewodnictwo.js | Tester przewodnictwa i elektroliza: wybierasz roztwór, włączasz prąd; żarówka świeci tylko dla elektrolitów, na elektrodach pojawiają się gazy, a w modelu jony wędrują do | {roztwor: 'HCl'} | FIZ01×1, N04×1, N05×1 |
| `przewodnik-izolator` | fizyka_elektrostatyka.js | Pręt z naładowanym końcem: w przewodniku ładunek rozpływa się po całej długości, w izolatorze pozostaje w miejscu dotyku. | {} | FIZ01×1 |
| `reaktor-tlenku` | okresowy_tlenki.js | Reaktor przewidywania: wybierasz tlenek i odczynnik (woda, kwas, zasada), zapisujesz przewidywanie, a model pokazuje, czy reakcja zachodzi, wraz z uzasadnieniem z charakt | {tlenek: 'CaO'} | N02×1 |
| `regula-krzyzowa` | regula_krzyzowa.js | Reguła krzyżowa i huśtawka mas: dla dwóch roztworów i stężenia docelowego pokazuje różnice po przekątnych, stosunek mas, masy w gramach i kontrolę bilansem. | {} | R03A×1 |
| `rownania-jonowe` | rownania_jonowe.js | Równania jonowe: po wyborze reakcji pokazuje zapis cząsteczkowy, jonowy pełny z jonami obserwatorowymi i jonowy skrócony. | {reakcja: 0} | C1c×1, J03×2, N04×1 |
| `schemat-przemian` | schemat_przemian.js | Schemat dróg: kilka sposobów otrzymania tego samego typu substancji, każdy jako substraty → strzałka → produkty. | {} | C1c×1 |
| `sklad-procentowy` | sklad_procentowy.js | Masa cząsteczkowa i skład procentowy związku wg wzoru; pasek proporcjonalny do mas pierwiastków. | {wzor: 'H2SO4', przyklady: 'H2O,CO2,H2SO4,Fe2O3,Ca(OH)2'} | C1c×1 |
| `tabela-rozpuszczalnosci` | tabela_rozpuszczalnosci.js | Tabela rozpuszczalności soli i wodorotlenków w 20 °C; kliknięcie komórki pokazuje wzór, nazwę i rozpuszczalność. | {} | C1c×1, J03×2 |
| `titration-merged` | miareczkowanie_tm.js | Titracja — scalony model: typ + wskaźnik + krzywa + kolba | (port; opcje z widoku) | N04×1 |
| `trend-tlenkow` | okresowy_tlenki.js | Trend charakteru tlenków: w 3. okresie od zasadowych przez amfoteryczny do kwasowych oraz dla Cr i Mn — rosnący stopień utlenienia zwiększa charakter kwasowy. | {seria: 'okres 3'} | N02×1 |
| `trojkat-przeliczen` | trojkat_przeliczen.js | Trójkąt konwersji: masa, liczba moli i cząstki (lub objętość gazu) ze strzałkami operacji ÷/× M, N_A lub Vₘ. | {wzor: 'mol', szer: 480, wys: 300} | C2m×2, LKO×2 |
| `uklad-okresowy` | uklad_okresowy.js | Tablica Mendelejewa: kafelki litowców i berylowców z opisem i przyciskami prób; pełny układ z przełącznikiem grup. | {grupa: 'oba', wybrany: 'Na'} | P01×1 |
| `uklad-okresowy-54` | okresowy_tlenki.js | Układ okresowy pierwiastków 1–54: komórki kolorowane wg okresu i grupy, bloku, elektronów walencyjnych, promienia, elektroujemności, energii jonizacji lub charakteru tlen | {tryb: 'adres', wybrany: 'Na', tryby: 'adres,blok,wal,r,en,ie,tlenki'} | F04×1, F06×1, N02×1 |
| `wzor-2d` | c2d_klocek.js | Wzór strukturalny 2D z SMILES: wiązania (pojedyncze, podwójne, potrójne), zaznaczone grupy funkcyjne; opcjonalnie model kulkowy, kąty, wolne pary, znaczniki walencji i kl | {smiles: 'CC(=O)O', grupa: 'all', kulki: 0, kat: 0, pary: 0, kwas: 1,  | C1c×5, LKO×11, N04×6 |
| `zbieranie-gazu` | zbieranie_gazu.js | Zbieranie gazu: kolba z reakcją, rurka i naczynie ustawione wylotem do góry, do dołu albo nad wodą; werdykt zależy od gęstości i rozpuszczalności gazu. | {gaz: 'H2', metoda: 'auto', gazy: 'H2,O2,CO2,NH3,HCl'} | LKO×1, N01×2, N04×1 |
| `zlewka-predykcja` | chemia_wstep.js | Najpierw wybierasz, czego spodziewasz się w zlewce, potem animacja pokazuje wynik i porównuje go z przewidywaniem. | {} | F01×1 |
| `zlewka-rx` | zlewka_rx.js | Doświadczenie w zlewce lub probówce: ciało stałe, bąbelki gazu, piana, opary, ogrzewanie i zmiana barwy cieczy; przycisk „powtórz” odtwarza animację. | {k: 'znHcl', dur: 6} | — |
| `zlewki-rx` | zlewka_rx.js | Kilka zlewek naraz (np. Mg, Zn i Cu w HCl); przycisk „wrzuć” uruchamia wszystkie animacje jednocześnie, pod każdą równanie. | {zestaw: 'metale-hcl', k: '', dur: 6} | N04×16 |
