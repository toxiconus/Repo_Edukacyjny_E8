"""Przypisanie lekcji do etapu konkursu LKO 2026/27 (po prefiksie nazwy pliku). Używane przez spis_lekcji.py i eksport/zip_przekazania.py."""
ETAP = [
    ('C1c_konfiguracje', 'I (rozszerzenie)'), ('C1c_wodorki', 'I (typy reakcji) + II (wodorki)'), ('C1c_kwasy', 'II'),
    ('C1c_masy', 'II'), ('C2m', 'III'), ('C2w', 'III (hydraty poza LKO)'), ('C3', 'II'), ('C4', 'I'),
    ('F01', 'I'), ('F02', 'I'), ('F03', 'I'), ('F04', 'I'), ('F05', 'I'), ('F06', 'I'), ('J03', 'II'),
    ('LKO_ORG', 'III'), ('N01', 'I'), ('N02', 'II'), ('N03', 'II'), ('N04', 'II'), ('N05', 'II'),
    ('R03', 'I'), ('R07', 'II'), ('REV01_powtorka', 'I'), ('X04', 'II'),
    ('B10', 'II'), ('B1b', 'III (genetyka)'), ('B2', 'II'), ('L010', 'III (DNA)'), ('REV01.org', 'I'), ('REV02', 'I'),
    ('BIO.00.REV', 'I'), ('BIO.01.B1b', 'III (genetyka)'), ('BIO.02.B10', 'II'), ('BIO.02.B2', 'II'), ('BIO.02.L010', 'III (DNA)'),
    ('BIO.02.', 'III (genetyka)'), ('BIO.03.', 'III'), ('BIO.04.', 'III (ekologia)'), ('BIO.06.', 'II'), ('BIO.07.', 'II (układy — pełna wersja)'),
]
def etap(nazwa):
    for p, e in ETAP:
        if nazwa.startswith(p): return e
    if nazwa.startswith('FIZ'): return 'poza LKO (fizyka)'
    return 'poza LKO'
