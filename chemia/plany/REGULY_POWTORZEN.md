# Reguły powtórzeń dla generatora lekcji (chemia)

Cel: powtórzenie ma inną funkcję zamiast kopii tego samego zdania. Stosuje się je do wszystkich lekcji, zaczynając od P01.

1. **Typ treści decyduje o prawie do powtórzenia.** Wykład, przykład, klinika błędów, fiszka i test mogą powtarzać pojęcie, bo każdy typ ma inną funkcję. Nie wolno jednak kopiować pełnego wyjaśnienia.
2. **Pełne wyjaśnienie raz.** Pierwsze wystąpienie pojęcia (wykład) zawiera pełne objaśnienie i mechanizm.
3. **Kolejne wystąpienia to skrót lub odsyłacz.** Np. „zob. mechanizm wyżej” albo jedno zdanie streszczające.
4. **Fiszka = hasło i odpowiedź.** Bez ponownego wykładu.
5. **Test = pytanie bez wykładu.** Odpowiedź z kluczem, bez powtórki definicji.
6. **Równanie reakcji raz w pełni.** W kolejnych miejscach tylko wzór skrócony albo odsyłacz do pierwszego zapisu.
7. **Lista barw płomieni, wzrost reaktywności, warstwa BeO** — każda w jednym miejscu pełnej treści; reszta odsyłacz.
8. **Wzory zapisywać jednolicie** (indeksy w `<sub>`/Unicode, ładunki w `<sup>`), bo powtórzenie to także błąd zapisu.
9. **Kontrola w buildzie (do wdrożenia):** generator zlicza dosłowne powtórzenia zdań dłuższych niż 60 znaków w obrębie lekcji i zgłasza je jako ostrzeżenie.

Zakres: reguły dotyczą generatora i pisania lekcji. Nie usuwają treści rozszerzonych ani olimpijskich — te oznacza się warstwą.
