#!/usr/bin/env python3
"""scal.py — składa plik z części (katalog z _kolejnosc.txt, wynik tools/podziel.mjs)."""
from pathlib import Path


def scal(katalog) -> str:
    d = Path(katalog)
    return "".join((d / f).read_text(encoding="utf-8") for f in (d / "_kolejnosc.txt").read_text().split())
