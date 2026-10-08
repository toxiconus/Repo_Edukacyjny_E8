#!/usr/bin/env python3
"""
Buduje HTML lekcji z MD + cegiełek shell (header, TOC hamburger).

  python3 tools/md_build_lesson.py N01
  python3 tools/md_build_lesson.py N01 --mode integrated  # bez inline CSS/JS, tylko mount

Wynik:
  lessons-md/<KOD>/build/lesson.html
  lessons-md/<KOD>/build/meta.json   ← tocItems, header — wspólne dla packa i labu
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MD_ROOT = ROOT / "lessons-md"
LAYOUT = ROOT / "engine" / "src" / "layout"
SHELL_CSS = LAYOUT / "lesson-shell.css"
SHELL_JS = LAYOUT / "lesson-shell.js"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end < 0:
        return {}, text
    raw = text[3:end].strip()
    body = text[end + 4 :]
    data: dict = {}
    current = None
    for line in raw.splitlines():
        if re.match(r"^\s+[\w-]+:", line) and current:
            # nested key under layout:
            km = re.match(r"^\s+([\w-]+)\s*:\s*(.*)$", line)
            if km and isinstance(data.get(current), dict):
                data[current][km.group(1)] = km.group(2).strip()
                continue
        if re.match(r"^\s*-\s+", line) and current:
            data.setdefault(current, [])
            if isinstance(data[current], list):
                data[current].append(re.sub(r"^\s*-\s+", "", line).strip())
            continue
        m = re.match(r"^([\w-]+)\s*:\s*(.*)$", line)
        if not m:
            continue
        k, v = m.group(1), m.group(2).strip()
        current = k
        if v.startswith("[") and v.endswith("]"):
            inner = v[1:-1].strip()
            data[k] = [x.strip() for x in inner.split(",") if x.strip()] if inner else []
        elif v == "":
            data[k] = {} if k == "layout" else []
        else:
            data[k] = v
    return data, body


def parse_directive(body: str, name: str) -> tuple[dict | list | None, str]:
    """Extract @name ... @end block. Returns (parsed, body_without_block)."""
    pat = re.compile(rf"@{name}\s*\n(.*?)@end\s*\n?", re.S | re.I)
    m = pat.search(body)
    if not m:
        return None, body
    block = m.group(1)
    rest = body[: m.start()] + body[m.end() :]
    if name == "toc":
        items = []
        for line in block.splitlines():
            line = line.strip()
            if not line.startswith("-"):
                continue
            line = line[1:].strip()
            if "|" in line:
                iid, label = line.split("|", 1)
                items.append({"id": iid.strip(), "label": label.strip()})
            else:
                items.append({"id": line, "label": line})
        return items, rest
    # key: value pairs
    data = {}
    for line in block.splitlines():
        if ":" in line:
            k, _, v = line.partition(":")
            data[k.strip()] = v.strip()
    return data, rest


def md_sections(body: str) -> list[dict]:
    """Split on ## headings with optional {#id}."""
    sections = []
    # normalize
    parts = re.split(r"(?m)^(##\s+.+)$", body)
    # parts[0] = preamble, then pairs (heading, content)
    preamble = parts[0].strip()
    i = 1
    while i < len(parts):
        heading = parts[i].strip()
        content = parts[i + 1] if i + 1 < len(parts) else ""
        i += 2
        # {#id} anywhere in heading; title without the tag
        idm = re.search(r"\{#([a-zA-Z0-9_-]+)\}", heading)
        title = re.sub(r"\s*\{#[a-zA-Z0-9_-]+\}", "", heading)
        title = re.sub(r"^##\s*", "", title).strip()
        if idm:
            sid = idm.group(1)
        else:
            tr = str.maketrans({
                "ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z",
                "Ą":"a","Ć":"c","Ę":"e","Ł":"l","Ń":"n","Ó":"o","Ś":"s","Ź":"z","Ż":"z",
            })
            sid = re.sub(r"[^a-z0-9]+", "-", title.lower().translate(tr)).strip("-")
        sections.append({"id": sid, "heading": title, "body": content.strip()})
    return sections, preamble


def expand_macros(text: str) -> str:
    """$fiszka / $flip / $karta / $callout / $gfx / $fiszka_talia → HTML intermediate."""
    if not text:
        return text

    def one_flash(front, back, tag="basic"):
        tag = tag or "basic"
        return (
            f'<article class="flashcard" data-tag="{tag}" tabindex="0">'
            f'<div class="front">{front}</div>'
            f'<div class="back">{back}</div>'
            f'<span class="card-tag tag-{tag}">{tag}</span>'
            f"</article>"
        )

    # talia
    def talia_repl(m):
        inner = m.group(1)
        cards = []
        for fm in re.finditer(
            r'\$(?:fiszka|flip)\s+"([^"]*)"\s*\|\s*"([^"]*)"(?:\s+tag=(\w+))?',
            inner,
        ):
            cards.append(one_flash(fm.group(1), fm.group(2), fm.group(3) or "basic"))
        return '<div class="flashcard-grid">\n' + "\n".join(cards) + "\n</div>"

    text = re.sub(r"\$fiszka_talia\s*\n(.*?)\$end", talia_repl, text, flags=re.S)

    # Panel fiszek: widoczna sekcja, karty domyślnie schowane
    def panel_repl(m):
        opts = m.group(1) or ""
        inner = m.group(2)
        title_m = re.search(r'title="([^"]*)"', opts)
        title = title_m.group(1) if title_m else "Fiszki"
        open_default = "open" if "open" in opts.split() else ""
        # expand fiszki inside first
        inner_html = expand_macros(inner) if "$fiszka" in inner or "$flip" in inner else inner
        # if still markdown-ish, leave; cards should already be HTML from nested expand
        # Nested: process cards only
        cards = []
        for fm in re.finditer(
            r'\$?(?:fiszka|flip)\s+"([^"]*)"\s*\|\s*"([^"]*)"(?:\s+tag=(\w+))?',
            inner,
        ):
            tag = fm.group(3) or "basic"
            cards.append(
                f'<article class="flashcard is-hidden" data-tag="{tag}" tabindex="0">'
                f'<div class="front">{fm.group(1)}</div>'
                f'<div class="back">{fm.group(2)}</div>'
                f'<span class="card-tag tag-{tag}">{tag}</span></article>'
            )
        if not cards:
            cards_html = inner_html
            cards_html = cards_html.replace(
                'class="flashcard"', 'class="flashcard is-hidden"'
            ).replace(
                "class='flashcard'", "class='flashcard is-hidden'"
            )
        else:
            cards_html = "\n".join(cards)
        return (
            f'<section class="che-fiszki-panel" data-fiszki-panel>'
            f'<header class="che-fiszki-panel-hd">'
            f'<h3>{title}</h3>'
            f'<button type="button" class="che-fiszki-toggle" data-fiszki-toggle aria-expanded="false">'
            f'Pokaż fiszki</button></header>'
            f'<div class="flashcard-grid che-fiszki-body is-collapsed" hidden>{cards_html}</div>'
            f'</section>'
        )

    text = re.sub(
        r"\$fiszki_panel([^\n]*)\n(.*?)\$end",
        panel_repl,
        text,
        flags=re.S,
    )



    def flash_repl(m):
        return one_flash(m.group(1), m.group(2), m.group(3) or "basic")

    text = re.sub(
        r'\$(?:fiszka|flip)\s+"([^"]*)"\s*\|\s*"([^"]*)"(?:\s+tag=(\w+))?',
        flash_repl,
        text,
    )

    def karta_repl(m):
        typ = m.group(1) or "basic"
        body = m.group(2).strip()
        return f'<div class="card card-{typ}"><div class="card-body">\n{body}\n</div></div>'

    text = re.sub(
        r"\$karta\s+typ=(\w+)\s*\n(.*?)\$end",
        karta_repl,
        text,
        flags=re.S,
    )

    def callout_repl(m):
        typ = m.group(1) or "info"
        body = m.group(2).strip()
        return f'<aside class="che-callout che-callout-{typ}">\n{body}\n</aside>'

    text = re.sub(
        r"\$callout\s+typ=(\w+)\s*\n(.*?)\$end",
        callout_repl,
        text,
        flags=re.S,
    )

    def gfx_repl(m):
        line = m.group(0)
        view = ""
        caption = ""
        vm = re.search(r"view=([\w.-]+)", line)
        if vm:
            view = vm.group(1)
        cm = re.search(r'caption="([^"]*)"', line)
        if cm:
            caption = cm.group(1)
        if not view:
            return f"<!-- gfx missing view: {line} -->"
        return (
            f'<p class="che-gfx-slot"><button type="button" data-che-open-viz="{view}">'
            f"Model: {view}</button>"
            + (f'<span class="che-caption">{caption}</span>' if caption else "")
            + "</p>"
        )


    # Tabela błędów: tylko wiersze treść | ok | zła  → HTML z kolorami
    def bledy_repl(m):
        rows_raw = m.group(1).strip().splitlines()
        rows = []
        for line in rows_raw:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "|" in line:
                parts = [x.strip().strip('"') for x in line.split("|")]
                while len(parts) < 3:
                    parts.append("")
                topic, good, bad = parts[0], parts[1], parts[2]
                rows.append(
                    f"<tr><td>{topic}</td>"
                    f'<td class="ok">{good}</td>'
                    f'<td class="bad">{bad}</td></tr>'
                )
        body = "\n".join(rows)
        return (
            '<div class="che-table-bledy-wrap"><table class="che-table-bledy">'
            "<thead><tr><th>Temat</th><th class=\"ok\">Poprawnie</th>"
            "<th class=\"bad\">Błąd</th></tr></thead>"
            f"<tbody>\n{body}\n</tbody></table></div>"
        )

    text = re.sub(
        r"\$tabela_bledy\s*\n(.*?)\$end",
        bledy_repl,
        text,
        flags=re.S,
    )

    text = re.sub(r"\$gfx\b[^\n]*", gfx_repl, text)
    return text


def simple_md_to_html(text: str) -> str:
    """Minimal markdown → HTML (paragraphs, bold, code, lists, gfx fences as pre)."""
    if not text.strip():
        return ""
    text = expand_macros(text)
    # gfx / table fences → placeholders
    def fence_repl(m):
        kind = m.group(1)
        raw = m.group(2).strip()
        if kind == "gfx":
            view = ""
            caption = ""
            for line in raw.splitlines():
                if line.strip().startswith("view:"):
                    view = line.split(":", 1)[1].strip()
                if line.strip().startswith("caption:"):
                    caption = line.split(":", 1)[1].strip().strip('"')
            if view:
                return (
                    f'<p class="che-gfx-slot"><button type="button" data-che-open-viz="{view}">'
                    f"Model: {view}</button>"
                    + (f'<span class="che-caption">{caption}</span>' if caption else "")
                    + "</p>"
                )
        return f'<pre class="che-fence" data-kind="{kind}">{raw}</pre>'

    text = re.sub(r"```(gfx|table)\s*\n(.*?)```", fence_repl, text, flags=re.S)
    lines = text.splitlines()
    out = []
    buf = []
    list_mode = None

    def flush_p():
        nonlocal buf
        if buf:
            p = " ".join(buf)
            p = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", p)
            p = re.sub(r"`([^`]+)`", r"<code>\1</code>", p)
            out.append(f"<p>{p}</p>")
            buf = []

    for line in lines:
        if re.match(r"^###\s+", line):
            flush_p()
            out.append(f"<h3>{line[4:].strip()}</h3>")
            list_mode = None
        elif re.match(r"^[-*]\s+", line):
            flush_p()
            if list_mode != "ul":
                if list_mode:
                    out.append(f"</{list_mode}>")
                out.append("<ul>")
                list_mode = "ul"
            item = re.sub(r"^[-*]\s+", "", line)
            item = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", item)
            out.append(f"<li>{item}</li>")
        elif re.match(r"^\|\s*", line) and "|" in line[1:]:
            flush_p()
            # skip crude tables for now — pre
            if list_mode:
                out.append(f"</{list_mode}>")
                list_mode = None
            out.append(f"<pre>{line}</pre>")
        elif line.strip() == "":
            flush_p()
            if list_mode:
                out.append(f"</{list_mode}>")
                list_mode = None
        else:
            if list_mode:
                out.append(f"</{list_mode}>")
                list_mode = None
            buf.append(line.strip())
    flush_p()
    if list_mode:
        out.append(f"</{list_mode}>")
    return "\n".join(out)


def build(code: str, mode: str = "standalone") -> dict:
    md_path = MD_ROOT / code / "LEKCJA.md"
    if not md_path.exists():
        raise FileNotFoundError(md_path)
    text = md_path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)

    header_dir, body = parse_directive(body, "header")
    toc_dir, body = parse_directive(body, "toc")

    sections, preamble = md_sections(body)

    meta = {
        "code": (header_dir or {}).get("code") or fm.get("code") or code,
        "title": (header_dir or {}).get("title") or fm.get("title") or code,
        "subject": (header_dir or {}).get("subject") or fm.get("subject") or "chemia",
        "layout": fm.get("layout") if isinstance(fm.get("layout"), dict) else {
            "variant": fm.get("subject") or "chemia",
            "toc": "float-hamburger",
            "header": "standard",
        },
        "tocItems": toc_dir
        or [{"id": s["id"], "label": s["heading"]} for s in sections],
        "sections": [{"id": s["id"], "heading": s["heading"]} for s in sections],
    }
    if isinstance(meta["layout"], dict):
        meta["layout"].setdefault("variant", meta["subject"])
        meta["layout"].setdefault("toc", "float-hamburger")

    # HTML sections
    # global placeholders
    def ph(s: str) -> str:
        return (
            s.replace("{{title}}", str(meta["title"]))
            .replace("{{code}}", str(meta["code"]))
        )
    preamble = ph(preamble) if preamble else preamble
    for s in sections:
        s["heading"] = ph(s["heading"])
        s["body"] = ph(s["body"])

    main_parts = []
    if preamble:
        main_parts.append(f'<div class="che-preamble">{simple_md_to_html(preamble)}</div>')
    for s in sections:
        main_parts.append(
            f'<section id="{s["id"]}" data-toc="{s["heading"]}">\n'
            f"<h2>{s['heading']}</h2>\n"
            f"{simple_md_to_html(s['body'])}\n"
            f"</section>"
        )

    css = SHELL_CSS.read_text(encoding="utf-8") if SHELL_CSS.exists() else ""
    js = SHELL_JS.read_text(encoding="utf-8") if SHELL_JS.exists() else ""

    mount = {
        "code": meta["code"],
        "title": meta["title"],
        "subject": meta["subject"],
        "variant": meta["layout"].get("variant") or meta["subject"],
        "toc": meta["layout"].get("toc") or "float-hamburger",
        "tocItems": meta["tocItems"],
    }

    if mode == "integrated":
        # lab already has shell — only meta + content + mount call
        style_block = "/* shell z labu: CHE.LessonShell */"
        script_shell = "/* expect CHE.LessonShell in lab */"
    else:
        style_block = css
        script_shell = js

    html = f"""<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>
<title>{meta["code"]} · {meta["title"]}</title>
<style id="che-lesson-shell-css">
{style_block}
</style>
</head>
<body data-lesson-code="{meta["code"]}">
<main class="che-lesson-main">
{chr(10).join(main_parts)}
</main>
<script id="che-lesson-shell-js">
{script_shell}
</script>
<script>
window.__LESSON_META__ = {json.dumps(mount, ensure_ascii=False)};
(function(){{
  var M = window.__LESSON_META__;
  if (window.CHE && CHE.LessonShell && CHE.LessonShell.mount) {{
    CHE.LessonShell.mount(M);
  }} else if (typeof CHE !== 'undefined' && CHE.LessonShell) {{
    CHE.LessonShell.mount(M);
  }} else {{
    console.warn('[lesson] CHE.LessonShell missing — header/TOC not mounted');
  }}
}})();
</script>
</body>
</html>
"""

    out_dir = MD_ROOT / code / "build"
    out_dir.mkdir(parents=True, exist_ok=True)
    html_name = "lesson.integrated.html" if mode == "integrated" else "lesson.html"
    (out_dir / html_name).write_text(html, encoding="utf-8")
    (out_dir / "meta.json").write_text(
        json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    return {"html": out_dir / html_name, "meta": out_dir / "meta.json", "meta_data": meta}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("code")
    ap.add_argument("--mode", choices=["standalone", "integrated"], default="standalone")
    args = ap.parse_args()
    r = build(args.code, mode=args.mode)
    print(f"HTML → {r['html']}")
    print(f"meta → {r['meta']}")
    print(f"tocItems: {len(r['meta_data'].get('tocItems') or [])}")
    print(f"mode: {args.mode}")


if __name__ == "__main__":
    main()
