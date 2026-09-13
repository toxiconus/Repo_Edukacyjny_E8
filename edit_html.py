#!/usr/bin/env python3
import os
import re

os.chdir(r'j:\Repo_Edukacyjny_E8\polski')

# Znajdź plik
files = [f for f in os.listdir('.') if 'v7' in f and f.endswith('.html')]
if not files:
    print("Plik nie znaleziony")
    exit(1)

filepath = files[0]
print(f"Praca z plikiem: {filepath}")

# Przeczytaj plik
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Oryginalna długość: {len(content)} znaków")

# Nowa karta
new_card = '''                <div class="card card-hint" style="margin-bottom:16px;">
                    <span class="card-label">UWAGA – zapis nazwiska</span>
                    <p><strong>W polskim przekładzie „Chłopców z Placu Broni" zapisuje się najczęściej: Gereb</strong> — bez akcentu.</p>
                    <ul style="margin-top:8px;">
                        <li><strong>W oryginale węgierskim:</strong> <em>Geréb Dezső</em> (akcent oznacza długą samogłoskę)</li>
                        <li><strong>W polskich przekładach:</strong> zwykle <em>Deżo Gereb</em> albo <em>Deżo Geréb</em> — zależnie od wydania</li>
                        <li><strong>Do pracy/sprawdzianu (bezpieczna forma):</strong> <em>Deżo Gereb</em> — spolszczona forma używana w wielu materiałach szkolnych</li>
                    </ul>
                    <p style="margin-top:8px; font-size:0.9rem; color:var(--color-text-muted);"><strong>Autor:</strong> Ferenc Molnár. <strong>Tytuł oryginału:</strong> <em>A Pál utcai fiúk</em>.</p>
                </div>
'''

# Regex: znaleź h2 dla Gereba i div card-correct, wstaw nową kartę między nimi
pattern = r'(<h2>Gereb[^<]*</h2>)\s*(<div class="card card-correct">)'
replacement = r'\1\n' + new_card + r'\2'

# Sprawdzenie czy pattern istnieje
if re.search(pattern, content, re.DOTALL):
    print("Pattern znaleziony, wykonuję zastąpienie...")
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Zapisz plik
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Nowa długość: {len(new_content)} znaków")
    print(f"Dodano {len(new_content) - len(content)} znaków")
    
    # Policz wiersze
    line_count = new_content.count('\n') + 1
    print(f"Liczba wierszy: {line_count}")
else:
    print("Pattern nie znaleziony!")
    print("Szukamy: <h2>Gereb...Gereb...</h2> następnie <div class=\"card card-correct\">")
    # Sprawdzenie czy sekcja istnieje
    if 'id="sec-gereb"' in content:
        print("Sekcja Gereba istnieje")
        # Wyświetl fragment
        start = content.find('id="sec-gereb"')
        print(content[start:start+500])
