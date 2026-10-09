"""Wyciąga samą treść lekcji z pliku HTML do prostego markdownu (bez skryptów, stylów, SVG)."""
import re
import sys
from bs4 import BeautifulSoup, Comment, NavigableString, Tag

DROP = {"script", "style", "svg", "noscript", "canvas", "button", "nav", "template", "iframe", "head"}
BLOCK = {"p", "div", "section", "article", "header", "footer", "main", "aside", "details",
         "summary", "figure", "figcaption", "blockquote", "form", "fieldset", "label"}


def _inline(el):
    out = []
    for c in el.children:
        if isinstance(c, Comment):
            continue
        if isinstance(c, NavigableString):
            out.append(str(c))
        elif isinstance(c, Tag):
            if c.name in DROP:
                continue
            if c.name == "br":
                out.append(" ")
            elif c.name in ("strong", "b"):
                t = _inline(c).strip()
                out.append(f"**{t}**" if t else "")
            elif c.name in ("sub",):
                out.append(_inline(c))
            elif c.name in ("sup",):
                out.append("^" + _inline(c))
            else:
                out.append(_inline(c))
    return re.sub(r"\s+", " ", "".join(out))


def _table(t):
    rows = []
    for tr in t.find_all("tr"):
        cells = [_inline(c).strip().replace("|", "/") for c in tr.find_all(["th", "td"])]
        if any(cells):
            rows.append("| " + " | ".join(cells) + " |")
    if not rows:
        return ""
    n = rows[0].count("|") - 1
    rows.insert(1, "|" + " --- |" * n)
    return "\n".join(rows)


def walk(el, out, depth=0):
    for c in el.children:
        if isinstance(c, Comment):
            t = str(c).strip()
            if t.upper().startswith("OPIS"):  # opis wizualizacji z md2html
                out.append("> [Wizualizacja] " + t.split(":", 1)[-1].strip() + "\n")
            continue
        if isinstance(c, NavigableString):
            s = re.sub(r"\s+", " ", str(c)).strip()
            if s:
                out.append(s)
            continue
        if not isinstance(c, Tag) or c.name in DROP:
            continue
        cls = " ".join(c.get("class", []))
        if c.get("hidden") is not None and "sol" not in cls:
            pass  # ukryte rozwiązania też zostawiamy — to treść
        n = c.name
        if n == "img" and c.get("alt", "").strip():
            out.append("> [Obraz] " + c["alt"].strip() + "\n")
            continue
        if re.fullmatch(r"h[1-6]", n):
            t = _inline(c).strip()
            if t:
                out.append("\n" + "#" * min(int(n[1]) + 1, 6) + " " + t + "\n")
        elif n == "table":
            out.append("\n" + _table(c) + "\n")
        elif n in ("ul", "ol"):
            for i, li in enumerate(c.find_all("li", recursive=False), 1):
                t = _inline(li).strip()
                if t:
                    out.append(("- " if n == "ul" else f"{i}. ") + t)
            out.append("")
        elif n in ("dl",):
            for d in c.find_all(["dt", "dd"]):
                t = _inline(d).strip()
                if t:
                    out.append(("- **" + t + "**") if d.name == "dt" else ("  " + t))
        elif n in BLOCK or n in ("li",):
            # blok bez dzieci blokowych → jeden akapit
            if not c.find(list(BLOCK) + ["table", "ul", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "dl"]):
                t = _inline(c).strip()
                if t:
                    out.append(t + "\n")
            else:
                walk(c, out, depth + 1)
        else:
            walk(c, out, depth + 1)


def html2md(path):
    with open(path, encoding="utf-8", errors="replace") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    body = soup.body or soup
    out = []
    walk(body, out)
    txt = "\n".join(out)
    txt = re.sub(r"\n{3,}", "\n\n", txt)
    # usuń powtórzone sąsiednie linie
    lines, prev = [], None
    for ln in txt.split("\n"):
        if ln.strip() and ln == prev:
            continue
        lines.append(ln)
        prev = ln
    return "\n".join(lines).strip() + "\n"


if __name__ == "__main__":
    sys.stdout.write(html2md(sys.argv[1]))
