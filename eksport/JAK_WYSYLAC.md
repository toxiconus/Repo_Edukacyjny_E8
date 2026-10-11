# Jak i do których AI wysyłać paczki

Ranking z próby B2e (2026-10-11, szczegóły w `eksport/OCENA_MODELI.md`, automatycznie: `python3 narzedzia/ocen_odpowiedzi.py`):

| Rola | Model | Dlaczego |
|---|---|---|
| **Pisarz** (tryb ULEPSZ / BADANIE) | **GLM 5.3 Flash (chat.z.ai)** | najlepsza struktura, poprawki P1…, źródła, mało naruszeń zasad |
| **Recenzent treści** (tryb RECENZJA) | Gemini 2.5 Flash | dużo dobrej merytoryki i zadań konkursowych; słaba forma nie przeszkadza, bo w recenzji podaje tylko poprawki |
| **Recenzent zakresu i źródeł** (W1 / RECENZJA) | Perplexity | sprawdza podstawę, CKE, podaje źródła |
| pominąć jako pisarza | Grok, model „A” | Grok płytki (ok. 10 KB); „A” — błędy merytoryczne, cytowania, harmonogramy |
| **Scalanie, sprawdzenie faktów, build, testy** | Claude (ten czat) | porównanie wersji, poprawki, grafiki, HTML |

## Wariant 1 — wszyscy naraz (pasuje do Multi-AI Chat)

1. Wygeneruj paczkę (albo poproś mnie): `python3 eksport/paczka_ai.py ulepsz NAZWA plik.md` (lista gotowych poleceń: `eksport/KOLEJKA_AI.md`).
2. W Multi-AI Chat zostaw aktywne: **GLM, Gemini, Perplexity** (jeśli rozszerzenie pozwala odznaczyć czaty — odznacz Grok; jeśli nie, wyślij do wszystkich, a słabe odpowiedzi pominiemy). Wklej polecenie z początku paczki i dołącz plik (jeśli czat nie przyjmuje załączników — wklej treść).
3. Gdy model kończy turę „Gotowe: KOD. Napisz »dalej«” — wyślij „dalej” (też do wszystkich naraz).
4. Każdą odpowiedź skopiuj do osobnego pliku `odp_<model>.txt` i wyślij mi wszystkie.
5. Ja: `ocen_odpowiedzi.py` (ranking, odrzucam słabe) → scalam 1–2 najlepsze + dobre fragmenty z reszty → `porownaj_lekcje.py` (czy nic nie zginęło) → poprawki, build, test, commit.

**Zaleta:** jedna runda, mniej klikania. **Wada:** modele nie poprawiają się nawzajem — to robię ja przy scalaniu.

## Wariant 2 — sztafeta (najlepsza jakość)

1. **Runda 1 — pisarz:** paczka ULEPSZ (lub BADANIE) tylko do **GLM** (w Multi-AI Chat zostaw sam GLM albo wyślij bezpośrednio na chat.z.ai). Odpowiedź zapisz jako `odp_glm.txt` i wyślij mi.
2. Ja wyciągam z odpowiedzi nową wersję lekcji i robię paczkę recenzji z raportem porównania:
   `python3 eksport/paczka_ai.py recenzja NAZWA nowa.md stara.md`
3. **Runda 2 — recenzenci:** paczkę RECENZJA wyślij naraz do **Gemini i Perplexity** (tu Multi-AI Chat jest wygodny). Odpowiedzi → `odp_gemini.txt`, `odp_perplexity.txt` → do mnie.
4. Ja wprowadzam poprawki z recenzji (sprawdzone), buduję, testuję. Opcjonalnie runda 3: jeszcze jedna recenzja tylko tych miejsc, które recenzenci ocenili różnie.

**Zaleta:** drugi model szuka błędów pierwszego, a raport porównania pokazuje mu, gdzie mogło coś zginąć. **Wada:** dwie rundy.

## Zasady przy każdym wariancie

- Paczka ≤ ok. 100 KB (prompt + lekcje) — `KOLEJKA_AI.md` dzieli lekcje na zestawy.
- Jedna lekcja na turę, „dalej” do następnej.
- Lekcje z **W1 FULL** — nie wysyłać ponownie (lista w `KOLEJKA_AI.md`).
- Odpowiedzi zapisuję surowo w `<przedmiot>/plany/audyty/` (bez linków-cytatów), a w lekcji w sekcji „Pochodzenie i sprawdzenie treści”: co przyjęte, co poprawione, co odrzucone i dlaczego.
- Ocena automatyczna (`ocen_odpowiedzi.py`) mierzy **formę i kompletność**, nie prawdziwość — merytorykę zawsze sprawdzam przy scalaniu.

## Rozmiar paczki (ustalenie 2026-10-11)
- Część modeli (np. ten z Multi-AI Chat, który odpowiadał w paczkach G07/G12 i L004/L005) czyta **tylko ok. 50 KB załącznika** — reszta przepada, a model pisze „plik urywa się w §…”. Perplexity czyta ok. 100 KB.
- Bezpiecznie dla wszystkich: **jedna lekcja na paczkę, paczka ≤ 50 KB** (polecenie ULEPSZ ma ok. 15 KB z dodatkiem olimpijskim, więc lekcja ≤ ok. 33 KB).
- Dłuższą lekcję dzielę: `python3 eksport/podziel_lekcje.py plik.md [--max 25] [--od "nagłówek"] [--do "nagłówek"]` → `eksport/out/czesci/`, potem `paczka_ai.py ulepsz NAZWA część.md --olimpiada --uwaga "To CZĘŚĆ k…"`. Przy scalaniu odpowiedzi wstawiam część w miejsce tych samych sekcji.
- Odpowiedź, w której model pisze, że nie widział części pliku: przyjmuję tylko to, co widział; jego „rekonstrukcję” niewidzianych sekcji traktuję jako nowe propozycje i porównuję z oryginałem (oryginał zostaje).

- 2026-10-11: Perplexity przy paczce 93 KB (L001) widziała plik tylko do ok. 70 KB (prompt + ~57 KB lekcji). Paczki dla Perplexity: **≤ 60 KB** (lekcja dzielona `podziel_lekcje.py --max 45`).
