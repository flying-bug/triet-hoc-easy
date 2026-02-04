# Script to update all topic files with common header
$topicFiles = Get-ChildItem -Name "topic*.html"

foreach ($file in $topicFiles) {
    Write-Host "Updating $file"
    
    # Read file content
    $content = Get-Content $file -Raw
    
    # Replace header section
    $headerPattern = '<header>.*?</header>'
    $newHeader = '<div id="header-container" data-active="topics"></div>'
    
    $content = $content -replace $headerPattern, $newHeader, 'Singleline'
    
    # Add header.js script before closing body tag
    if ($content -notmatch 'header\.js') {
        $content = $content -replace '</body>', '    <script src="header.js"></script>
</body>'
    }
    
    # Write back to file
    Set-Content -Path $file -Value $content -Encoding UTF8
}

Write-Host "All topic files updated successfully!"