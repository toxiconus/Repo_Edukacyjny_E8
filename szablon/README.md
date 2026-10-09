# Szablon lekcji — wspólny dla wszystkich przedmiotów

Jeden układ lekcji, pięć motywów. Podgląd: `podglad/index.html` (otwórz w przeglądarce).

## Budowa

```
python3 narzedzia/lekcja_html.py -p <che|bio|pol|ang|oli> plik.md [...] [-o katalog]
```

Wynik: jeden samodzielny plik HTML (style, skrypt i grafiki w środku) — działa offline i na telefonie. Domyślnie trafia do `<folder pliku>/../html/`. Brak `@opis` pod grafiką w nowej lekcji przerywa build (zasada z CLAUDE.md).

## Wszystkie lekcje naraz

```
python3 narzedzia/zbuduj_wszystkie.py [pol bio che oli]
```

Wynik: `polski/html/`, `biologia/html/`, `chemia/html/` (kanon `lekcje_md`), `olimpiada/html/`, w każdym `index.html`. Bloki ```…``` stają się ramkami z tekstem stałej szerokości (schematy ASCII zostają), komentarze `<!-- -->` nie połykają akapitu, poziomy nagłówków są ujednolicane.

## Pliki

| Plik | Rola | Edycja |
|---|---|---|
| `baza.css` | styl lekcji silnika CHE v0_57 (karty, minimum, spis, test, fiszki, poziomy) | nie edytować |
| `ulepszenia.css` | wspólne dla wszystkich: pasek z postępem, spis z aktywną sekcją, tryb ciemny, druk, dostępność, mity, drzewo, cytat, dialog, słówka, klinika | zmiany wspólne tutaj |
| `motywy/<p>.css` | kolor przedmiotu (jasny i ciemny), wzór w nagłówku, komponenty przedmiotu | zmiany jednego przedmiotu |
| `lekcja.js` | fiszki, test, treści akademickie, postęp, spis, tryb ciemny, montaż grafik | zachowanie wspólne |
| `przyklady/<p>.md` | wzorcowe lekcje pokazujące komponenty | — |

Kolejność stylów w lekcji: `baza.css` → `ulepszenia.css` → `motywy/<p>.css`.

## Co jest wspólne, a co przedmiotowe

Wspólne (wygląd i zachowanie identyczne): pasek u góry (przedmiot, tytuł, spis, tryb jasny/ciemny, na górę, pasek postępu czytania), nagłówek lekcji, spis treści z podświetleniem bieżącej sekcji (na telefonie zwinięty), minimum E8, karty poziomów, treści akademickie, mity, mapa pojęć, cytat, dialog, słówka, klinika błędów, fiszki, test, druk.

| Motyw | Kolor | Wzór w nagłówku | Komponenty własne |
|---|---|---|---|
| `che` chemia | morski | pierścienie heksagonalne | `div.rownanie` (równanie w osobnej linii) |
| `bio` biologia | zielony | helisa DNA | grafiki `@viz` z `bio-viz.js` |
| `pol` polski | śliwkowy, tytuły szeryfowe | cudzysłów i „Aa” | podkreślenia części zdania `z-pod`, `z-orz`, `z-prz`, `z-dop`, `z-oko`; `p.przyklad` |
| `ang` angielski | granatowy | dymki rozmowy | `span.en`, `span.ipa`, `div.wzor` (wzór zdania, `span.op` = operator) |
| `oli` olimpiada | złoto-ochrowy | gwiazda i laur | `span.poz.poz-2/3/4`, `div.zad-konk` z `span.pkt` |

## Dialekt MD (ponad SZABLON_LEKCJI chemii)

```
@viz <id> {k="v"} | Tytuł | podpis      grafika z biblioteki przedmiotu
@opis co widać + wniosek                 obowiązkowo pod każdą grafiką
::: mity | nagłówek                      mit || poprawnie
::: drzewo                               lista z wcięciami (2 spacje = poziom)
::: cytat | autor, „tytuł”               tekst cytatu (akapity oddzielone pustą linią)
::: dialog                               A: wypowiedź || tłumaczenie
::: slowka | Wyraz | Znaczenie | Przykład   wyraz || znaczenie || przykład
```

Nagłówki `## 6. Tytuł` bez `{#id}` dostają kotwicę automatycznie, a linia `# Tytuł` z treści jest pomijana (tytuł jest w nagłówku lekcji). Plakietki `[[LKO]]` bez typu stają się plakietką konkursową.

## Chemia

Lekcje gotowe z modelami i zlewkami nadal buduje `chemia/che-modular/tools/md2html.py` (silnik `che-viz.js`). Ten szablon obsługuje kanon chemii (`chemia/lekcje_md/`) i lekcje bez modeli silnika. Przeniesienie wyglądu silnika na ten szablon to osobny krok.
