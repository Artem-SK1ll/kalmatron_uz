Param(
    [switch]$Apply,
    [string]$BasePath = '/'  # not used directly, kept for parity
)

$root = Get-Location
$assetDirs = @('images','assets','upload','local','bitrix','static')

$hrefRe = [regex] 'href="(/[^"#? ]+/?(?:[^"]*?))"'

$modified = @()

Get-ChildItem -Path $root -Recurse -Filter *.html | ForEach-Object {
    $file = $_
    try {
        $t = Get-Content -Raw -Encoding UTF8 -LiteralPath $file.FullName
    } catch {
        Write-Warning "Cannot read $($file.FullName): $_"
        return
    }

    if ($t -notmatch '<header') { return }
    $start = $t.IndexOf('<header')
    if ($start -lt 0) { return }
    $end = $t.IndexOf('</header>', $start)
    if ($end -lt 0) { return }
    $headerBlock = $t.Substring($start, $end - $start + 9)

    # compute depth relative to repo root
    $rootPath = $root.ProviderPath.TrimEnd('\')
    $dirPath = $file.Directory.FullName
    $rel = ''
    if ($dirPath.Length -gt $rootPath.Length) {
        $rel = $dirPath.Substring($rootPath.Length).TrimStart('\')
    }
    $depth = 0
    if ([string]::IsNullOrEmpty($rel) -eq $false) { $depth = ($rel -split '\\').Length }

    $replacer = {
        param($m)
        $orig = $m.Groups[1].Value
        $seg = $orig.TrimStart('/').Split('/')[0]
        if ($assetDirs -contains $seg) { return $m.Value }
        $path = $orig.TrimStart('/')
        if ($path.EndsWith('/')) { $path = $path + 'index.html' }
        # build relative prefix
        $relPrefix = ''
        for ($i=0; $i -lt $depth; $i++) { $relPrefix += '../' }
        $new = 'href="' + $relPrefix + $path + '"'
        return $new
    }

    $newHeader = $hrefRe.Replace($headerBlock, $replacer)

    if ($newHeader -ne $headerBlock) {
        $newText = $t.Substring(0, $start) + $newHeader + $t.Substring($end + 9)
        if ($Apply) {
            Copy-Item -LiteralPath $file.FullName -Destination ($file.FullName + '.bak') -ErrorAction SilentlyContinue
            Set-Content -LiteralPath $file.FullName -Value $newText -Encoding UTF8
            Write-Output "Modified: $($file.FullName)"
        } else {
            Write-Output "Would modify: $($file.FullName)"
        }
        $modified += $file.FullName
    }
}

Write-Output "Total files changed/would change: $($modified.Count)"
