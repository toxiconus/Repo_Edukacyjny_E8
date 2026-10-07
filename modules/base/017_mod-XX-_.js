<script id="mod-XX-...">
jest samodzielnym IIFE. Podział na paczki jest mechaniczny.

PACZKA MICRO (~25–30 KB minified, 7–9 KB gzip)
-----------------------------------------------
  mod-00-manifest
  mod-01-data-elements (rdzeń)
  mod-02-data-molecules (3 cząsteczki)
  mod-10-chem
  mod-11-molecule
  mod-12-reaction
Zastosowanie: jedna cząsteczka + jedno równanie.

PACZKA STANDARD (~70–85 KB minified, 18–22 KB gzip)
----------------------------------------------------
  MICRO +
  mod-03-data-reactions
  mod-04-data-substances
  mod-05-data-context
  mod-06-data-atomic-props
  mod-07-data-isotopes
  mod-13-equilibrium
  mod-14-stoich
  mod-15-units
  mod-18-atom
  mod-19-nucleus
  mod-20-profile
  mod-20b-ion
  mod-20c-isotope
  mod-25-dom
  mod-30-viz
Zastosowanie: E7/E8, chemia nieorganiczna, stechiometria.

PACZKA FULL (obecny plik, ~200–240 KB minified, 50–60 KB gzip)
--------------------------------------------------------------
  STANDARD +
  mod-08-data-spectra
  mod-16-thermo
  mod-17-electro
  mod-20d-spectra
  mod-20e-nuclear
  mod-21..24 (state, observer, progress, derived)
  mod-31..33 (motion, view, explain)
  mod-40..43 (registry, contract, audit, public)
  mod-90..91 (periodic, lab)
Zastosowanie: LO biol-chem, wprowadzenie uniwersyteckie.

PACZKA EXTENDED (przyszłość, >280 KB)
--------------------------------------
  FULL +
  CHE.SPECTRA_CONTRACT (IR, NMR, MS, UV-Vis) — kontrakt danych, jednostek, niepewności i provenance
  mod-51-organic (grupy funkcyjne, izomeria)
  CHE.NOMENCLATURE — deskryptor strukturalny, nie pełny IUPAC
  mod-53-crystal
  mod-54-quantum (funkcje falowe, orbitale molekularne)
Zastosowanie: chemia organiczna, spektroskopia, uniwersytet.

REGUŁA WYBORU PACZKI
-------------------------------------
  < 20% API → nie używaj silnika
  20-40%    → MICRO lub STANDARD
  > 40%     → FULL

PROJEKCJE DLA POZIOMÓW EDUKACYJNYCH
====================================
Warstwa CHE.ATOM dostarcza 4 projekcje:

  forPrimary(symbol)     — E7: powłoki K/L/M/N, protony/neutrony/elektrony
  forSecondary(symbol,charge) — E8: konfiguracja pełna/skrócona, jony
  forHighSchool(symbol)  — LO: liczby kwantowe, orbitale, hybrydyzacja
  forUniversity(symbol)  — studia: jądro, termy, izotopy, ATOMIC_PROPS

Każda projekcja to widok TYCH SAMYCH danych źródłowych. Nie duplikuje
danych — filtruje je i formatuje dla poziomu.

=================================================================
KONWENCJE NAZEWNICZE
=================================================================

MODUŁY: mod-NN-nazwa-kebab
DANE (sekcje): SCREAMING_SNAKE_CASE (ELEMENTS_118, ISOTOPES, ATOMIC_PROPS)
SUBSTANCJE: klucz = formuła (HCl, H2O)
REAKCJE: camelCase (hclNaOH, znHcl)
API: CHE.MODUŁ.metoda (camelCase)
STAŁE: CHE.ENGINE.version, CHE.ENGINE.dataVersion
CSS: kebab-case z prefiksem (eu-, pd-, lab-, el-, at-, viz-)
BŁĘDY: CHE.E.KOD

=================================================================
KONTRAKT BŁĘDÓW
=================================================================
Nowe API zwraca:
  Sukces:  { ok: true, value: <dane> }
  Błąd:    { ok: false, error: { code, message, context } }

Konstruktory: CHE.OK(value), CHE.FAIL(code, message, context)

Stare API zachowuje dotychczasowe konwencje (NaN, null, {ok:...}).

=================================================================
ZASADY UTRZYMANIA
=================================================================
1. Nowa domena = nowy mod-NN.
2. Dane źródłowe tylko dla tego, czego nie da się wyliczyć.
3. Nowe funkcje publiczne: {ok, value} lub {ok:false, error}.
4. Object.freeze (deepFreeze) na sekcjach DATA.
5. Testy mają id (ATOM-001) i group ('atom').
6. Nagłówki modułów: 8 linii.
7. Nowy widok = VIEW.define, nie osobny 