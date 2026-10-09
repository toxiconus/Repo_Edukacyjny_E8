"""Prosta zamiana LaTeX z odpowiedzi Perplexity na zapis Unicode dialektu MD lekcji (H₂SO₄, Fe³⁺, →, ·)."""
import re
SUP = str.maketrans("0123456789+-−()nIVX", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁻⁽⁾ⁿᴵⱽˣ")
SUB = str.maketrans("0123456789+-()", "₀₁₂₃₄₅₆₇₈₉₊₋₍₎")

def _sup(t):
    return t.translate(SUP) if re.fullmatch(r"[0-9+\-−()n]+", t) else "^" + t

def conv(s):
    s = re.sub(r"\\text\{([^}]*)\}", r"\1", s)
    s = re.sub(r"\^\{?\\delta\s*([+-])\}?", lambda m: "δ" + ("⁺" if m.group(1) == "+" else "⁻"), s)
    for x, y in (("\\delta", "δ"), ("\\downarrow", "↓"), ("\\uparrow", "↑"), ("\\leftrightarrow", "⇌"), ("\\ ", " "), ("\\;", " ")):
        s = s.replace(x, y)
    for _ in range(3):
        s = re.sub(r"\\mathrm\{([^{}]*)\}", r"\1", s)
    s = s.replace("\\rightarrow", "→").replace("\\cdot", "·").replace("^\\circ", "°").replace("\\,", " ")
    s = re.sub(r"\{\}\^\{(\d+)\}_\{(\d+)\}", lambda m: m.group(1).translate(SUP) + m.group(2).translate(SUB), s)  # nuklid
    s = re.sub(r"\^\{([^{}]*)\}", lambda m: _sup(m.group(1)), s)
    s = re.sub(r"\^([0-9+\-])", lambda m: m.group(1).translate(SUP), s)
    s = re.sub(r"_\{([^{}]*)\}", lambda m: m.group(1).translate(SUB), s)
    s = re.sub(r"_(\d)", lambda m: m.group(1).translate(SUB), s)
    s = re.sub(r"\$\$\n(.*?)\n\$\$", lambda m: "$$ " + m.group(1).strip(), s, flags=re.S)  # wzór w ramce (dialekt)
    s = re.sub(r"\\mathrm\{([^{}]*)\}", r"\1", s)  # po indeksach (zagnieżdżone klamry)
    s = s.replace("$$", "")
    return s
