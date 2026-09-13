# Napraw kodowanie pliku - czytaj UTF8BOM i zapisz UTF8
$path = Get-ChildItem "polski/*.html" | Where-Object {$_.Name -like "*v7*"} | Select-Object -ExpandProperty FullName
Write-Host "Naprawiam kodowanie: $path"

# Spróbuj czytać z różnymi kodowaniami aby znaleźć właściwe
$encodings = @(
    [System.Text.Encoding]::UTF8,
    [System.Text.Encoding]::GetEncoding('Windows-1252'),
    [System.Text.Encoding]::GetEncoding('ISO-8859-2'),
    [System.Text.Encoding]::Default
)

# Czytaj plik z UTF8
$bytes = [System.IO.File]::ReadAllBytes($path)
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

# Sprawdzenie - czy znaki są prawidłowe?
if ($text.Contains("Ernő")) {
    Write-Host "Znaki węgierskie: OK"
} elseif ($text.Contains("Ernó")) {
    Write-Host "Znaki węgierskie: Zniekształcone, ale dają się naprawić"
    # Zamiena zniekształconych znaków
} else {
    Write-Host "Znaki węgierskie: Nie znaleziono"
}

# Wyświetl kilka znaków
$idx = $text.IndexOf("Ernest")
if ($idx -gt 0) {
    Write-Host "Fragment:"
    $text.Substring($idx, 150)
}
