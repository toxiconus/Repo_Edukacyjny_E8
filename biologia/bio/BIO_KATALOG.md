# Katalog grafik BIO (`szablon/wizualizacje/<id>.js`)

Każda grafika to osobny plik; lekcja dołącza do swojego HTML tylko grafiki, których używa (`@viz`) plus rdzeń `szablon/bio-core.js`.
Wspólne narzędzia (S, H, svg, T, btn, chain, ICO…) są w rdzeniu jako `BIO.Lh["<grupa>.<nazwa>"]`; grafika dostaje je aliasami na górze pliku.
Użycie w md lekcji: `@viz <id> {opcja="wartość"} | Tytuł | podpis` + linia `@opis` (obowiązkowa).
Nowa grafika: plik `szablon/wizualizacje/<id>.js` z `BIO.define('<id>',{opis:'…',mount(el,opt,fig){…}})`, potem `python3 biologia/bio/narzedzia/katalog_wizualizacji.py`.
Zasady: statyczny widok + kliknięcie = wyjaśnienie (`BIO.fx.info`); ruch tylko na żądanie ucznia lub autoodtwarzanie (`BIO.fx.auto`, „animacja: tak”). Kolory tylko ze zmiennych CSS (`--nt-A`, `--sugar`, `--nucleus`…). Tylko tryb dzienny.

| id | plik | Co pokazuje | Opcje | Animacja | Lekcje |
|---|---|---|---|---|---|
| cykl-miesiaczkowy | `szablon/wizualizacje/cykl-miesiaczkowy.js` | `szablon/wizualizacje/cykl-miesiaczkowy.js` | `szablon/wizualizacje/cykl-miesiaczkowy.js` | nie | B2f, U11 |
| dobor-naturalny | `szablon/wizualizacje/dobor-naturalny.js` | `szablon/wizualizacje/dobor-naturalny.js` | `szablon/wizualizacje/dobor-naturalny.js` | nie | L031, L032 |
| drabina | `szablon/wizualizacje/drabina.js` | `szablon/wizualizacje/drabina.js` | `szablon/wizualizacje/drabina.js` | nie | L010, L011 |
| droga-pokarmu | `szablon/wizualizacje/droga-pokarmu.js` | `szablon/wizualizacje/droga-pokarmu.js` | `szablon/wizualizacje/droga-pokarmu.js` | tak | B2b, U03 |
| droga-zarodka | `szablon/wizualizacje/droga-zarodka.js` | `szablon/wizualizacje/droga-zarodka.js` | `szablon/wizualizacje/droga-zarodka.js` | tak | B2f, U11 |
| endosymbioza | `szablon/wizualizacje/endosymbioza.js` | `szablon/wizualizacje/endosymbioza.js` | `szablon/wizualizacje/endosymbioza.js` | tak | L001A |
| energia-glukozy | `szablon/wizualizacje/energia-glukozy.js` | `szablon/wizualizacje/energia-glukozy.js` | `szablon/wizualizacje/energia-glukozy.js` | nie | REV01, L007 |
| energia-materia | `szablon/wizualizacje/energia-materia.js` | `szablon/wizualizacje/energia-materia.js` | `szablon/wizualizacje/energia-materia.js` | nie | L040, L044 |
| enzym-warunki | `szablon/wizualizacje/enzym-warunki.js` | `szablon/wizualizacje/enzym-warunki.js` | `szablon/wizualizacje/enzym-warunki.js` | tak | U03 |
| etapy-zycia | `szablon/wizualizacje/etapy-zycia.js` | `szablon/wizualizacje/etapy-zycia.js` | `szablon/wizualizacje/etapy-zycia.js` | nie | U11 |
| eutrofizacja | `szablon/wizualizacje/eutrofizacja.js` | `szablon/wizualizacje/eutrofizacja.js` | `szablon/wizualizacje/eutrofizacja.js` | nie | L043 |
| fotosynteza-oddychanie | `szablon/wizualizacje/fotosynteza-oddychanie.js` | `szablon/wizualizacje/fotosynteza-oddychanie.js` | `szablon/wizualizacje/fotosynteza-oddychanie.js` | nie | REV01, L006, L007, L091 |
| gdzie-dna | `szablon/wizualizacje/gdzie-dna.js` | `szablon/wizualizacje/gdzie-dna.js` | `szablon/wizualizacje/gdzie-dna.js` | nie | L010 |
| glukoza-wykres | `szablon/wizualizacje/glukoza-wykres.js` | `szablon/wizualizacje/glukoza-wykres.js` | `szablon/wizualizacje/glukoza-wykres.js` | nie | B2e, B2g, H01, U10 |
| gruczoly-mapa | `szablon/wizualizacje/gruczoly-mapa.js` | `szablon/wizualizacje/gruczoly-mapa.js` | `szablon/wizualizacje/gruczoly-mapa.js` | tak | B2e, U10 |
| hardy-weinberg | `szablon/wizualizacje/hardy-weinberg.js` | `szablon/wizualizacje/hardy-weinberg.js` | `szablon/wizualizacje/hardy-weinberg.js` | nie | L090 |
| helisa | `szablon/wizualizacje/helisa.js` | `szablon/wizualizacje/helisa.js` | `szablon/wizualizacje/helisa.js` | nie | L010, L011 |
| homeostaza | `szablon/wizualizacje/homeostaza.js` | `szablon/wizualizacje/homeostaza.js` | `szablon/wizualizacje/homeostaza.js` | nie | L002 |
| klonowanie-genu | `szablon/wizualizacje/klonowanie-genu.js` | `szablon/wizualizacje/klonowanie-genu.js` | `szablon/wizualizacje/klonowanie-genu.js` | tak | L022 |
| klucz-kregowce | `szablon/wizualizacje/klucz-kregowce.js` | `szablon/wizualizacje/klucz-kregowce.js` | `szablon/wizualizacje/klucz-kregowce.js` | nie | REV02 |
| kod-genetyczny | `szablon/wizualizacje/kod-genetyczny.js` | `szablon/wizualizacje/kod-genetyczny.js` | `szablon/wizualizacje/kod-genetyczny.js` | nie | L011, L020, L021, L090 |
| komorka-nakladki | `szablon/wizualizacje/komorka-nakladki.js` | `szablon/wizualizacje/komorka-nakladki.js` | `szablon/wizualizacje/komorka-nakladki.js` | nie | REV01, L001 |
| konczyny-homologiczne | `szablon/wizualizacje/konczyny-homologiczne.js` | `szablon/wizualizacje/konczyny-homologiczne.js` | `szablon/wizualizacje/konczyny-homologiczne.js` | nie | L030, L032 |
| kontrola-podzialow | `szablon/wizualizacje/kontrola-podzialow.js` | `szablon/wizualizacje/kontrola-podzialow.js` | `szablon/wizualizacje/kontrola-podzialow.js` | nie | L009, L016 |
| kosmek-jelitowy | `szablon/wizualizacje/kosmek-jelitowy.js` | `szablon/wizualizacje/kosmek-jelitowy.js` | `szablon/wizualizacje/kosmek-jelitowy.js` | tak | B2b, U03 |
| krazenie-obiegi | `szablon/wizualizacje/krazenie-obiegi.js` | `szablon/wizualizacje/krazenie-obiegi.js` | `szablon/wizualizacje/krazenie-obiegi.js` | tak | B10, U04 |
| lancuch | `szablon/wizualizacje/lancuch.js` | `szablon/wizualizacje/lancuch.js` | `szablon/wizualizacje/lancuch.js` | nie | REV01, L001, L004, L010, L015 |
| lozysko-wymiana | `szablon/wizualizacje/lozysko-wymiana.js` | `szablon/wizualizacje/lozysko-wymiana.js` | `szablon/wizualizacje/lozysko-wymiana.js` | nie | B2f, U11 |
| luk-odruchowy | `szablon/wizualizacje/luk-odruchowy.js` | `szablon/wizualizacje/luk-odruchowy.js` | `szablon/wizualizacje/luk-odruchowy.js` | tak | B2d, U08 |
| mikroskop-model | `szablon/wizualizacje/mikroskop-model.js` | `szablon/wizualizacje/mikroskop-model.js` | `szablon/wizualizacje/mikroskop-model.js` | nie | REV01, L001, L008 |
| nefron | `szablon/wizualizacje/nefron.js` | `szablon/wizualizacje/nefron.js` | `szablon/wizualizacje/nefron.js` | tak | B2c, U06 |
| nukleotyd | `szablon/wizualizacje/nukleotyd.js` | `szablon/wizualizacje/nukleotyd.js` | `szablon/wizualizacje/nukleotyd.js` | nie | L010, L011 |
| od-organizmu-do-genu | `szablon/wizualizacje/od-organizmu-do-genu.js` | `szablon/wizualizacje/od-organizmu-do-genu.js` | `szablon/wizualizacje/od-organizmu-do-genu.js` | nie | L010 |
| oko-akomodacja | `szablon/wizualizacje/oko-akomodacja.js` | `szablon/wizualizacje/oko-akomodacja.js` | `szablon/wizualizacje/oko-akomodacja.js` | tak | U08 |
| pary-zasad | `szablon/wizualizacje/pary-zasad.js` | `szablon/wizualizacje/pary-zasad.js` | `szablon/wizualizacje/pary-zasad.js` | nie | L010, L011 |
| podzial-komorki | `szablon/wizualizacje/podzial-komorki.js` | `szablon/wizualizacje/podzial-komorki.js` | `szablon/wizualizacje/podzial-komorki.js` | tak | L009, B2f, L014, L015, L050 |
| pojemnosc | `szablon/wizualizacje/pojemnosc.js` | `szablon/wizualizacje/pojemnosc.js` | `szablon/wizualizacje/pojemnosc.js` | nie | L010 |
| poziomy-dna | `szablon/wizualizacje/poziomy-dna.js` | `szablon/wizualizacje/poziomy-dna.js` | `szablon/wizualizacje/poziomy-dna.js` | nie | L010, L012 |
| proba-kontrolna | `szablon/wizualizacje/proba-kontrolna.js` | `szablon/wizualizacje/proba-kontrolna.js` | `szablon/wizualizacje/proba-kontrolna.js` | nie | REV01 |
| przeobrazenie-owadow | `szablon/wizualizacje/przeobrazenie-owadow.js` | `szablon/wizualizacje/przeobrazenie-owadow.js` | `szablon/wizualizacje/przeobrazenie-owadow.js` | nie | REV02 |
| przeobrazenie-plaza | `szablon/wizualizacje/przeobrazenie-plaza.js` | `szablon/wizualizacje/przeobrazenie-plaza.js` | `szablon/wizualizacje/przeobrazenie-plaza.js` | nie | REV02 |
| punnett | `szablon/wizualizacje/punnett.js` | `szablon/wizualizacje/punnett.js` | `szablon/wizualizacje/punnett.js` | nie | B1b, L017, L018, L019, L021 |
| relacje-ekologiczne | `szablon/wizualizacje/relacje-ekologiczne.js` | `szablon/wizualizacje/relacje-ekologiczne.js` | `szablon/wizualizacje/relacje-ekologiczne.js` | nie | L042, L044 |
| sekwencje | `szablon/wizualizacje/sekwencje.js` | `szablon/wizualizacje/sekwencje.js` | `szablon/wizualizacje/sekwencje.js` | nie | L010 |
| siec-troficzna | `szablon/wizualizacje/siec-troficzna.js` | `szablon/wizualizacje/siec-troficzna.js` | `szablon/wizualizacje/siec-troficzna.js` | nie | L041, L050 |
| skora-przekroj | `szablon/wizualizacje/skora-przekroj.js` | `szablon/wizualizacje/skora-przekroj.js` | `szablon/wizualizacje/skora-przekroj.js` | nie | B2a, U01 |
| sprzezenie-zwrotne | `szablon/wizualizacje/sprzezenie-zwrotne.js` | `szablon/wizualizacje/sprzezenie-zwrotne.js` | `szablon/wizualizacje/sprzezenie-zwrotne.js` | tak | B2e, B2g, H01, U10 |
| staw-antagonizm | `szablon/wizualizacje/staw-antagonizm.js` | `szablon/wizualizacje/staw-antagonizm.js` | `szablon/wizualizacje/staw-antagonizm.js` | tak | B2a, U01 |
| synapsa | `szablon/wizualizacje/synapsa.js` | `szablon/wizualizacje/synapsa.js` | `szablon/wizualizacje/synapsa.js` | tak | B2d, U08 |
| szuflady-cech | `szablon/wizualizacje/szuflady-cech.js` | `szablon/wizualizacje/szuflady-cech.js` | `szablon/wizualizacje/szuflady-cech.js` | nie | L010 |
| transfuzja | `szablon/wizualizacje/transfuzja.js` | `szablon/wizualizacje/transfuzja.js` | `szablon/wizualizacje/transfuzja.js` | nie | L019, U04 |
| transport-blona | `szablon/wizualizacje/transport-blona.js` | `szablon/wizualizacje/transport-blona.js` | `szablon/wizualizacje/transport-blona.js` | nie | REV01, L001, L005 |
| trener-nici | `szablon/wizualizacje/trener-nici.js` | `szablon/wizualizacje/trener-nici.js` | `szablon/wizualizacje/trener-nici.js` | nie | L010, L013 |
| ucho-droga | `szablon/wizualizacje/ucho-droga.js` | `szablon/wizualizacje/ucho-droga.js` | `szablon/wizualizacje/ucho-droga.js` | tak | U08 |
| uklad-rozrodczy | `szablon/wizualizacje/uklad-rozrodczy.js` | `szablon/wizualizacje/uklad-rozrodczy.js` | `szablon/wizualizacje/uklad-rozrodczy.js` | nie | B2f, U11 |
| wdech-wydech | `szablon/wizualizacje/wdech-wydech.js` | `szablon/wizualizacje/wdech-wydech.js` | `szablon/wizualizacje/wdech-wydech.js` | tak | B2c, U06 |
| wirus-bakteria | `szablon/wizualizacje/wirus-bakteria.js` | `szablon/wizualizacje/wirus-bakteria.js` | `szablon/wizualizacje/wirus-bakteria.js` | nie | REV02 |
| wymiana-gazowa | `szablon/wizualizacje/wymiana-gazowa.js` | `szablon/wizualizacje/wymiana-gazowa.js` | `szablon/wizualizacje/wymiana-gazowa.js` | tak | B2c, U06 |
| zrodla-zmiennosci | `szablon/wizualizacje/zrodla-zmiennosci.js` | `szablon/wizualizacje/zrodla-zmiennosci.js` | `szablon/wizualizacje/zrodla-zmiennosci.js` | nie | L016A |
