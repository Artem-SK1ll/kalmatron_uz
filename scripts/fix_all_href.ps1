Param(
    [switch]$Apply
)

# Replace absolute hrefs starting with / across entire HTML files with relative paths
# Skip common asset directories and external protocols

$root = Get-Location
$assetDirs = @('images','assets','upload','local','bitrix','static')

$hrefRe = [regex] 'href\s*=\s*"(/[^"\s]*)"'

$modified = @()

Get-ChildItem -Path $root -Recurse -Filter *.html | ForEach-Object {
    $file = $_
    try {
        $t = Get-Content -Raw -Encoding UTF8 -LiteralPath $file.FullName
    } catch {
        Write-Warning "Cannot read $($file.FullName): $_"
        return
    }

    # compute depth
    $rootPath = $root.ProviderPath.TrimEnd('\')
    $dirPath = $file.Directory.FullName
    $rel = ''
    if ($dirPath.Length -gt $rootPath.Length) {
        $rel = $dirPath.Substring($rootPath.Length).TrimStart('\')
    }
    $depth = 0
    if ([string]::IsNullOrEmpty($rel) -eq $false) { $depth = ($rel -split '\\').Length }

    $changed = $false

    $newText = $hrefRe.Replace($t, {
        param($m)
        $orig = $m.Groups[1].Value
        # ignore protocol-less absolute like //domain
        if ($orig.StartsWith('//')) { return $m.Value }
        $seg = $orig.TrimStart('/').Split('/')[0]
        if ($assetDirs -contains $seg) { return $m.Value }
        # if it's only a single slash (root), point to index.html
        $path = $orig.TrimStart('/')
        if ($path -eq '') { $path = 'index.html' }
        if ($path.EndsWith('/')) { $path = $path + 'index.html' }
        # if has a file extension like .html, .php, .pdf keep it as is (we'll still prefix)
        $relPrefix = ''
        for ($i=0; $i -lt $depth; $i++) { $relPrefix += '../' }
        $new = 'href="' + $relPrefix + $path + '"'
        $script:changed = $true
        return $new
    })

    if ($script:changed) {
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
