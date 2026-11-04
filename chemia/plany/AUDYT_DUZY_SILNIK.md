# Audyt dużego silnika — widoki bez użycia w lekcjach (2026-11-04)

Źródło: `chemia/che-modular/engine/src/gfx/chemia/widoki/*.js` (28 widoków) zestawione z `@model` / `@klocek` we wszystkich lekcjach md (bez archiwum i planów).

## Nieużywane w żadnej lekcji (16) — kandydaci do archiwum
Wszystkie mają odpowiednik-klocek albo scalone funkcje (patrz UWSPOLNIENIE_WIZUALIZACJI.md):
- `j03-osady-v01`
- `kinetics-v01`
- `kw-bufor-v01`
- `kw-doswiadczenia-v01`
- `kw-reszty-v01`
- `kw-szereg-metali-v01`
- `kw-wlasciwosci-v01`
- `n01-doswiadczenia-v01`
- `n01-konstruktor-v01`
- `n01-reaktor-v01`
- `n01-spalanie-v01`
- `n01-tlenki-v01`
- `n01-trend-v01`
- `neutralization`
- `rownania-jonowe-v01`
- `tabela-rozpuszczalnosci-v01`

Odpowiedniki: kw-bufor→`bufor`, kw-reszty→`kwasy-reszty`, kw-wlasciwosci→`zlewki-rx {zestaw=stezone-kwasy}`, kw-szereg-metali→`probowki-wybor`, kw-doswiadczenia→zlewki-rx/pracownie, rownania-jonowe-v01→`rownania-jonowe`, tabela-rozpuszczalnosci-v01→`tabela-rozpuszczalnosci`.
Bez odpowiednika (sprawdzić przed archiwizacją, czy lekcje N01 ich nie planują): n01-doswiadczenia, n01-konstruktor, n01-reaktor, n01-spalanie, n01-tlenki, n01-trend, j03-osady, kinetics, neutralization.

## Używane w md, ale już jako klocki (4)
`acid-rain-v01`, `n02-doswiadczenia-v01`, `sole-doswiadczenia-v01` (jako `@klocek`), `stech-kalkulator-v01` występuje jeszcze w kopiach `chemia/pakiet/md/*` (przestarzałe kopie gotowych lekcji).

## Decyzja
Nic nie usunięto. Archiwizacja (przeniesienie do `chemia/archiwum/`) po akceptacji; wymaga przebudowy `gfx/index.json`.
