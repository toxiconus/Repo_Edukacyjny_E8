# Plan: podlekcje pierwiastków w ich grupach (zapowiedź, nie dotyczy jeszcze builda)

Źródło pomysłu: użytkownik (uczył się tak na olimpiadę — osobne lekcje pierwiastków wewnątrz grup).

## Zasady
- Każdy pierwiastek ma **podlekcję** w swojej grupie (np. P01 blok s → podlekcje Li, Na, K, Rb, Cs, Fr; Be, Mg, Ca, Sr, Ba, Ra).
- Dane **ujednolicone z atlasem** (`engine/src/gfx/...` / `che-atlas-*`): liczba atomowa, masa, konfiguracja, gęstość, temperatury, reaktywność — jedno źródło, bez rozjazdów między lekcjami.
- Stała struktura podlekcji: historia odkrycia · występowanie · otrzymywanie · właściwości · zastosowania · podstawowe związki (wzory, nazwy) · ciekawostki · bezpieczeństwo · dane z atlasu.
- Doświadczenia z pierwiastkami: tylko to, co jest w klockach (`engine/src/klocki`); promieniotwórcze (Ra, Fr) — tylko animacja i znak promieniowania.

## Wyjątki i „dział od podstaw”
- **Woda** (i inne substancje wprowadzające dział, np. tlen, wodór) — osobna lekcja „substancja” na wejściu do działu: cząsteczka (wzór, budowa, kąt wiązania), wygląd i właściwości, **teoria, jak woda pojawiła się na Ziemi** (kontekst: wulkanizm, kometowe dostawy, reakcje w atmosferze), obieg wody.
- Podobnie dla gazów szlachetnych czy azotu, jeśli będą w działach jako punkt wyjścia.

## Kolejność na później
1. Ustalić szablon podlekcji pierwiastka (plik `PIERWIASTEK_SZABLON.md`) i pola atlasu do wypełnienia.
2. Zacząć od grupy 1 (Li, Na, K) — po jednej na raz, każda z sekcją historii i ciekawostek.
3. Lekcja „woda” jako pierwsza „substancja wprowadzająca dział”.
