# Katalog grafik BIO (`szablon/wizualizacje/<id>.js`)

Każda grafika to osobny plik; lekcja dołącza do swojego HTML tylko grafiki, których używa (`@viz`) plus rdzeń `szablon/bio-core.js`.
Wspólne narzędzia (S, H, svg, T, btn, chain, ICO…) są w rdzeniu jako `BIO.Lh["<grupa>.<nazwa>"]`; grafika dostaje je aliasami na górze pliku.
Użycie w md lekcji: `@viz <id> {opcja="wartość"} | Tytuł | podpis` + linia `@opis` (obowiązkowa).
Nowa grafika: plik `szablon/wizualizacje/<id>.js` z `BIO.define('<id>',{opis:'…',mount(el,opt,fig){…}})`, potem `python3 biologia/bio/narzedzia/katalog_wizualizacji.py`.
Zasady: statyczny widok + kliknięcie = wyjaśnienie (`BIO.fx.info`); ruch tylko na żądanie ucznia lub autoodtwarzanie (`BIO.fx.auto`, „animacja: tak”). Kolory tylko ze zmiennych CSS (`--nt-A`, `--sugar`, `--nucleus`…). Tylko tryb dzienny.

| id | plik | Co pokazuje | Opcje | Animacja | Lekcje |
|---|---|---|---|---|---|
| cykl-miesiaczkowy | `szablon/wizualizacje/cykl-miesiaczkowy.js` | cykl 1–28 dni: jajnik (pęcherzyk → owulacja → ciałko żółte), błona śluzowa macicy, estrogeny i progesteron; suwak dnia | dzien="1–28" | nie | U11 |
| dobor-naturalny | `szablon/wizualizacje/dobor-naturalny.js` | symulacja doboru: ćmy jasne/ciemne na korze (przełącznik tła) albo bakterie wrażliwe/oporne + antybiotyk; pokolenia, wykres udziału cechy | start="cmy\|bakterie" | nie | — |
| drabina | `szablon/wizualizacje/drabina.js` | dwie nici antyrównoległe, cukry, fosforany, pary, wiązania | seq="ATGCCA" | nie | L010 |
| droga-pokarmu | `szablon/wizualizacje/droga-pokarmu.js` | schemat układu pokarmowego: narządy przewodu i gruczoły (klik = funkcje), „krok” prowadzi kęs 9 odcinkami, wybór składnika (skrobia, białka, tłuszcze, woda i sole, błonnik) podświetla stacje trawienia i wchłaniania | — | tak | U03 |
| droga-zarodka | `szablon/wizualizacje/droga-zarodka.js` | od owulacji do zagnieżdżenia: jajnik, jajowód, macica + powiększenie komórek (10 etapów), animacja do przodu | krok="0–9" | tak | U11 |
| endosymbioza | `szablon/wizualizacje/endosymbioza.js` | teoria endosymbiozy w 4 krokach (pochłonięcie bakterii i sinicy → 2 błony → mitochondrium/chloroplast) + karty argumentów obserwacja → wniosek | — | tak | — |
| energia-glukozy | `szablon/wizualizacje/energia-glukozy.js` | oddychanie tlenowe vs fermentacja alkoholowa i mlekowa: warunki, miejsce, produkty, słupki ATP (ok. 38 / 2 / 2) | start="tl\|al\|ml" | nie | REV01 |
| energia-materia | `szablon/wizualizacje/energia-materia.js` | ekosystem: przepływ energii (Słońce → poziomy, ciepło, ok. 10%) i obieg materii (pętla przez destruentów i związki mineralne); przełącznik warstw | start="materia\|oba" | nie | — |
| enzym-warunki | `szablon/wizualizacje/enzym-warunki.js` | aktywność enzymu: tryb temperatury (amylaza, denaturacja) i pH (pepsyna, amylaza, trypsyna), suwak, probówka z Lugolem | tryb="T"\|"pH" | tak | U03 |
| etapy-zycia | `szablon/wizualizacje/etapy-zycia.js` | pionowa oś czasu 10 okresów życia (zarodkowy → starość) z wiekiem orientacyjnym, klik = cechy | start="zarodkowy|…|starosc" | nie | U11 |
| eutrofizacja | `szablon/wizualizacje/eutrofizacja.js` | jezioro w 5 etapach (suwak): biogeny z pól → zakwit → rozkład przez bakterie → przyducha; paski tlenu i przejrzystości | etap="0–4" | nie | — |
| fotosynteza-oddychanie | `szablon/wizualizacje/fotosynteza-oddychanie.js` | komórka liścia: chloroplast + mitochondrium, suwak światła → bilans gazów (noc, równowaga, przewaga fotosyntezy) | swiatlo="0–100" | nie | REV01 |
| gdzie-dna | `szablon/wizualizacje/gdzie-dna.js` | jądro z jąderkiem, mitochondria (grzebienie, mtDNA), cpDNA, nukleoid, plazmidy, rybosomy, erytrocyt (góra + profil) i leukocyt | — | nie | L010 |
| glukoza-wykres | `szablon/wizualizacje/glukoza-wykres.js` | stężenie glukozy po posiłku: osoba zdrowa vs z cukrzycą (dane przykładowe), zakres na czczo, klik w punkt = opis | — | nie | H01, U10 |
| gruczoly-mapa | `szablon/wizualizacje/gruczoly-mapa.js` | sylwetka z gruczołami dokrewnymi (podwzgórze, przysadka, szyszynka, tarczyca, przytarczyce, grasica, nadnercza, trzustka, jajniki/jądra), klik = hormony i skutki; autoprzegląd | plec="k"\|"m" | tak | U10 |
| hardy-weinberg | `szablon/wizualizacje/hardy-weinberg.js` | suwak q albo częstości chorych q² → p, p², 2pq, q² krok po kroku, słupki genotypów w populacji 10 000 | — | nie | — |
| helisa | `szablon/wizualizacje/helisa.js` | suwak drabina ↔ helisa, 2 nm, 3,4 nm / 10 par | seq, skret="0–100" | nie | L010 |
| homeostaza | `szablon/wizualizacje/homeostaza.js` | ujemne sprzężenie zwrotne: glukoza (insulina/glukagon, tryb cukrzycy t. 1) albo temperatura (pocenie/dreszcze); wykres z pasem normy + pętla regulacji | start="temperatura" | nie | — |
| klonowanie-genu | `szablon/wizualizacje/klonowanie-genu.js` | klonowanie genu w 5 krokach: wycięcie genu enzymem → otwarcie plazmidu tym samym enzymem → wklejenie ligazą → wgranie do bakterii → produkcja białka; animacja do przodu | krok="0–4" | tak | L022 |
| klucz-kregowce | `szablon/wizualizacje/klucz-kregowce.js` | klucz dwudzielny tak/nie do 5 gromad kręgowców + tryb „rozpoznaj zwierzę” (delfin, nietoperz, pingwin…) | — | nie | REV02 |
| kod-genetyczny | `szablon/wizualizacje/kod-genetyczny.js` | DNA (nić kodująca + matrycowa) → mRNA → aminokwasy; klik w zasadę = mutacja (cicha, zmiany sensu, nonsensowna, utrata START) | seq="ATG…" | nie | L020 |
| komorka-nakladki | `szablon/wizualizacje/komorka-nakladki.js` | komórka: wspólny rdzeń + nakładki (jądro, mitochondria, chloroplasty, wakuola, ściana, plazmid); przyciski typów i warstw, rozpoznanie typu | start="rdzen\|bakteria\|zwierzeca\|roslinna\|grzyb" | nie | REV01 |
| konczyny-homologiczne | `szablon/wizualizacje/konczyny-homologiczne.js` | kończyny przednie człowieka, kreta, wieloryba, nietoperza — te same grupy kości w kolorach (homologia); tryb analogii: skrzydło nietoperza vs owada | start="analogia" | nie | — |
| kontrola-podzialow | `szablon/wizualizacje/kontrola-podzialow.js` | model tkanki 70 komórek: dawki UV, naprawa DNA i apoptoza (wł./wył.), komórka z 3 mutacjami dzieli się bez kontroli → guz; liczniki | — | nie | — |
| kosmek-jelitowy | `szablon/wizualizacje/kosmek-jelitowy.js` | kosmek: nabłonek z mikrokosmkami, kapilary (→ żyła wrotna), naczynie chłonne; animacja drogi glukozy, aminokwasów, tłuszczów, wody do krwi lub limfy | — | tak | U03 |
| krazenie-obiegi | `szablon/wizualizacje/krazenie-obiegi.js` | serce od przodu (4 jamy, zastawki trójdzielna i dwudzielna), obieg mały i duży, krew odtlenowana / utlenowana; „krok” prowadzi drogą krwi (12 miejsc), przyciski podświetlają jeden obieg | start="maly\|duzy" | tak | U04 |
| lancuch | `szablon/wizualizacje/lancuch.js` | łańcuch kroków A → B → C (+ czynniki z boku) | kroki="A\|opis > B", boki="x; y", wyroznij="n", pion="nie", ikony="nie" (ikony dobierane same: DNA/gen, RNA, białko, funkcja, cecha) | nie | REV01, L010 |
| lozysko-wymiana | `szablon/wizualizacje/lozysko-wymiana.js` | łożysko: krew matki opływa kosmki płodu, strzałki wymiany O₂/składników i CO₂/produktów przemiany, pępowina (2 tętnice, 1 żyła), klik = opis | — | nie | U11 |
| luk-odruchowy | `szablon/wizualizacje/luk-odruchowy.js` | łuk odruchowy cofnięcia ręki: receptor, neuron czuciowy (zwój), pośredniczący w istocie szarej, ruchowy, mięsień, droga do mózgu; „krok” z impulsem; przełącznik przerwania drogi czuciowej/ruchowej | — | tak | U08 |
| mikroskop-model | `szablon/wizualizacje/mikroskop-model.js` | ta sama komórka: obraz z mikroskopu świetlnego (×400, barwienie) vs model szkolny z podpisami | start="mikroskop\|model" | nie | REV01 |
| nefron | `szablon/wizualizacje/nefron.js` | nefron: kłębuszek, torebka, kanalik, pętla, przewód zbiorczy, kapilary; animacja drogi 6 substancji (filtracja / wchłanianie zwrotne / mocz), przełącznik ADH z ilością i barwą moczu | — | tak | U06 |
| nukleotyd | `szablon/wizualizacje/nukleotyd.js` | fosforan + deoksyryboza + zasada, 1′/3′/5′ | zasada="A" | nie | L010 |
| od-organizmu-do-genu | `szablon/wizualizacje/od-organizmu-do-genu.js` | organizm → komórka → jądro → chromosom → DNA → gen | start="gen" | nie | L010 |
| oko-akomodacja | `szablon/wizualizacje/oko-akomodacja.js` | przekrój oka (klik = opis), akomodacja blisko/daleko z promieniami, krótko- i dalekowzroczność z korekcją okularami | tryb="budowa"\|"akom"\|"wady" | tak | U08 |
| pary-zasad | `szablon/wizualizacje/pary-zasad.js` | A–T, G–C oraz błędne A–G, C–T, A–C (pierścienie, szerokość, wiązania) | — | nie | L010 |
| podzial-komorki | `szablon/wizualizacje/podzial-komorki.js` | mitoza i mejoza krok po kroku (model 2n = 4, homologi czerwone/niebieskie, chromatydy, crossing-over, wrzeciono); liczby chromosomów i chromatyd w każdej fazie (model i człowiek) | start="mitoza\|mejoza" | tak | — |
| pojemnosc | `szablon/wizualizacje/pojemnosc.js` | 4ⁿ vs 3ⁿ, suwak długości | n | nie | L010 |
| poziomy-dna | `szablon/wizualizacje/poziomy-dna.js` | chromosom → histony → odcinek DNA (gen, regulator, niekodujące) | — | nie | L010 |
| proba-kontrolna | `szablon/wizualizacje/proba-kontrolna.js` | planowanie doświadczenia: przełączniki warunków w próbie badawczej i kontrolnej, ocena planu (jeden czynnik) | start="mocz\|drozdze" | nie | REV01 |
| przeobrazenie-owadow | `szablon/wizualizacje/przeobrazenie-owadow.js` | przeobrażenie zupełne (motyl, z poczwarką) i niezupełne (konik polny, bez poczwarki); klik = opis etapu | — | nie | REV02 |
| przeobrazenie-plaza | `szablon/wizualizacje/przeobrazenie-plaza.js` | rozwój złożony żaby: skrzek → kijanka → kijanka z kończynami → młoda żaba → żaba; suwak, oddychanie i środowisko | etap="0–4" | nie | REV02 |
| punnett | `szablon/wizualizacje/punnett.js` | szachownica Punnetta: A/a (Mendel), grupy krwi AB0, hemofilia (X); fenotypy i genotypy w % | tryb="A\|K\|X" | nie | L019 |
| relacje-ekologiczne | `szablon/wizualizacje/relacje-ekologiczne.js` | zależności międzygatunkowe jako znaki wpływu (+/−/0): konkurencja, drapieżnictwo, roślinożerność, pasożytnictwo, mutualizm, komensalizm; tryb „rozpoznaj relację” (12 przykładów, wynik) | start="quiz" | nie | — |
| sekwencje | `szablon/wizualizacje/sekwencje.js` | dwie sekwencje, różnice zaznaczone | a, b | nie | L010 |
| siec-troficzna | `szablon/wizualizacje/siec-troficzna.js` | sieć troficzna lasu: co je / kto go je, poziomy, łańcuchy; tryb „usuń gatunek” | — | nie | — |
| skora-przekroj | `szablon/wizualizacje/skora-przekroj.js` | przekrój skóry: naskórek (rogowa, melanina), skóra właściwa (naczynia, receptory, gruczoł potowy i łojowy, mieszek, włos, mięsień przywłosowy), tkanka podskórna; klik = opis | — | nie | U01 |
| sprzezenie-zwrotne | `szablon/wizualizacje/sprzezenie-zwrotne.js` | pętla bodziec → receptor → ośrodek → efektor → odpowiedź; 7 sytuacji (temperatura ↑↓, glukoza ↑↓, woda za mało/za dużo, poród — dodatnie); „krok”, wskaźnik parametru wobec normy | start="tg\|td\|gg\|gd\|wd\|wg\|po" | tak | H01, U10 |
| staw-antagonizm | `szablon/wizualizacje/staw-antagonizm.js` | staw łokciowy: suwak kąta, biceps (zginacz) i triceps (prostownik) grubieją/cienieją przy skurczu, przyczepy, opis ruchu | kat="60" | tak | U01 |
| synapsa | `szablon/wizualizacje/synapsa.js` | synapsa chemiczna w 5 krokach: impuls → pęcherzyki → neuroprzekaźnik w szczelinie → receptory → nowy impuls; animacja do przodu | krok="0–4" | tak | U08 |
| szuflady-cech | `szablon/wizualizacje/szuflady-cech.js` | sortowanie: dziedziczna / nabyta / wieloczynnikowa | cechy="nazwa:d\|wyjaśnienie; …" | nie | L010 |
| transfuzja | `szablon/wizualizacje/transfuzja.js` | zgodność dawca → biorca (ABO + Rh): antygeny na krwinkach, przeciwciała w osoczu, aglutynacja, uczulenie Rh−; tabela 4 × 4 | dawca="A", biorca="B" | nie | U04 |
| transport-blona | `szablon/wizualizacje/transport-blona.js` | przekrój błony: dyfuzja prosta, ułatwiona, transport aktywny (ATP), osmoza + tabela porównawcza | start="dp\|du\|ta\|os" | nie | REV01 |
| trener-nici | `szablon/wizualizacje/trener-nici.js` | dopisywanie nici DNA→DNA / DNA→RNA | seq, tryb="rna" | nie | L010 |
| ucho-droga | `szablon/wizualizacje/ucho-droga.js` | ucho zewnętrzne, środkowe, wewnętrzne (klik = opis), „krok” prowadzi dźwięk od małżowiny do nerwu | — | tak | U08 |
| uklad-rozrodczy | `szablon/wizualizacje/uklad-rozrodczy.js` | schemat męskiego i żeńskiego układu rozrodczego (przełącznik), klik = funkcja narządu; zaznaczone miejsce zapłodnienia | start="meski|zenski" | nie | U11 |
| wdech-wydech | `szablon/wizualizacje/wdech-wydech.js` | klatka piersiowa: przepona, żebra, płuca; animacja wdechu i wydechu, objętość klatki i ciśnienie w płucach, kroki obu faz | — | tak | U06 |
| wirus-bakteria | `szablon/wizualizacje/wirus-bakteria.js` | wirus (kapsyd, DNA/RNA, osłonka) obok bakterii (ściana, błona, rybosomy, nukleoid, plazmid, rzęska); klik = opis; antybiotyki | — | nie | REV02 |
| wymiana-gazowa | `szablon/wizualizacje/wymiana-gazowa.js` | dyfuzja O₂ i CO₂: tryb pęcherzyk–krew i krew–komórki, płynące erytrocyty, słupki ilości gazów, klik = opis (hemoglobina, transport CO₂) | tryb="pl"\|"tk" | tak | U06 |
| zrodla-zmiennosci | `szablon/wizualizacje/zrodla-zmiennosci.js` | losowanie gamet (3 pary chromosomów, 8 gamet, 64 kombinacje), zapłodnienie, crossing-over wł./wył., licznik różnych dzieci; człowiek 2²³ i ok. 70 bln | — | nie | — |
