$path = Get-ChildItem "polski/*.html" | Where-Object {$_.Name -like "*v7*"} | Select-Object -ExpandProperty FullName
Write-Host "Plik: $path"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Nowa karta - dokładnie jak podano w zadaniu
$newCard = @"
                <div class="card card-hint" style="margin-bottom:16px;">
                    <span class="card-label">UWAGA – Zapis nazwisk postaci z „Chłopców z Placu Broni"</span>
                    <p>Jeśli piszesz <strong>po polsku o lekturze</strong>, najlepiej trzymaj się form występujących w swoim wydaniu. W większości szkolnych opracowań pozostawia się węgierskie nazwiska, czasem spolszcza się tylko imiona.</p>
                    
                    <h4 style="margin-top:12px;">Najważniejsze postacie</h4>
                    <div class="table-wrap">
                        <table>
                            <thead><tr><th>W polskim napisie</th><th>W oryginale węgierskim</th><th>Uwaga</th></tr></thead>
                            <tbody>
                                <tr><td><strong>Ernest Nemeczek</strong> lub <strong>Ernő Nemecsek</strong></td><td><strong>Nemecsek Ernő</strong></td><td>Po węgiersku najpierw podaje się nazwisko, potem imię.</td></tr>
                                <tr><td><strong>Janosz Boka</strong> lub <strong>János Boka</strong></td><td><strong>Boka János</strong></td><td>Przywódca chłopców z Placu Broni.</td></tr>
                                <tr><td><strong>Deżo Gereb</strong> lub <strong>Dezső Geréb</strong></td><td><strong>Geréb Dezső</strong></td><td>W tekście oryginalnym: Geréb Dezső. Najczęściej: Gereb bez akcentu.</td></tr>
                                <tr><td><strong>Feri Acz</strong> lub <strong>Áts Feri</strong></td><td><strong>Áts Feri</strong></td><td>Przywódca Czerwonoskórych / Czerwonych Koszul.</td></tr>
                                <tr><td><strong>Czele</strong></td><td><strong>Csele</strong></td><td>Członek grupy z Placu Broni.</td></tr>
                                <tr><td><strong>Czonakos</strong></td><td><strong>Csónakos</strong></td><td>Nazwisko/przezwisko, zwykle bez imienia.</td></tr>
                                <tr><td><strong>Weiss</strong> / <strong>Weisz</strong></td><td><strong>Weisz</strong></td><td>W oryginale zapis: „Weisz".</td></tr>
                                <tr><td><strong>Kolnay</strong></td><td><strong>Kolnay Pál</strong></td><td>W oryginale podane też imię: Pál.</td></tr>
                                <tr><td><strong>Barabas</strong> / <strong>Barabás</strong></td><td><strong>Barabás</strong></td><td>Węgierski akcent nad drugim „a".</td></tr>
                                <tr><td><strong>Richter</strong></td><td><strong>Richter</strong></td><td>Forma identyczna w obu zapisach.</td></tr>
                                <tr><td><strong>Lesik</strong> lub <strong>Leszik</strong></td><td><strong>Leszik</strong></td><td>Członek „towarzystwa kitu".</td></tr>
                                <tr><td><strong>Pastorowie</strong></td><td><strong>Pásztorowie</strong></td><td>Dwaj bracia należący do Czerwonych Koszul.</td></tr>
                                <tr><td><strong>Wendauer</strong></td><td><strong>Wendauer</strong></td><td>Czerwone Koszule.</td></tr>
                                <tr><td><strong>Szebenicz</strong> lub <strong>Szebenics</strong></td><td><strong>Szebenics</strong></td><td>Czerwone Koszule.</td></tr>
                                <tr><td><strong>Jano, Słowak</strong></td><td><strong>Janó, a tót</strong></td><td>Dozorca placu; <em>tót</em> to dawne węgierskie określenie Słowaka.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h4 style="margin-top:12px;">Jak zapisywać w pracy</h4>
                    <p>Najbezpieczniejsza szkolna wersja to: <strong>Ernest Nemeczek, Janosz Boka, Deżo Gereb, Feri Acz, Czele, Czonakos, Weiss, Kolnay, Barabas, Richter, Lesik oraz Pastorowie</strong>.</p>
                    <p>Jeżeli nauczyciel wymaga <strong>oryginalnego zapisu</strong>, użyj: <strong>Nemecsek Ernő, Boka János, Geréb Dezső, Áts Feri, Csele, Csónakos, Weisz, Kolnay Pál, Barabás, Leszik, Richter, Pásztorowie, Wendauer, Szebenics oraz Janó</strong>. W języku węgierskim obowiązuje kolejność: <strong>nazwisko, potem imię</strong>.</p>
                </div>
"@

# Zamiana - użyj regex z [sS] dla new lines
$pattern = '<div class="card card-hint"[^>]*>[\s\S]*?<\/div>(?=\s*<div class="card card-correct")'
$newContent = $content -replace $pattern, $newCard

# Sprawdzenie
if ($newContent.Length -eq $content.Length) {
    Write-Host "BLAD: Zawartosc sie nie zmieniła! Czy pattern jest poprawny?"
} else {
    Write-Host "Zawartość zmieniona. Różnica: $($newContent.Length - $content.Length) znaków"
    
    # Zapis
    [System.IO.File]::WriteAllText($path, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Plik zapisany!"
    
    # Weryfikacja
    $verify = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    if ($verify.Contains("Ernest Nemeczek")) {
        Write-Host "Weryfikacja: OK - nowa karta jest w pliku"
    } else {
        Write-Host "Weryfikacja: BLAD - nowa karta nie znaleziona w pliku"
    }
}
