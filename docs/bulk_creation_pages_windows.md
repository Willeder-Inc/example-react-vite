```shell
# Define the folders to create
$folders = @("custom-design", "quality")

# Function to convert kebab-case string to PascalCase
function Convert-ToPascalCase {
    param (
        [string]$kebabCaseString
    )

    # Split the string by hyphens, capitalize each word, and join them
    $words = $kebabCaseString -split "-"
    $pascalCaseString = ($words | ForEach-Object { $_.Substring(0, 1).ToUpper() + $_.Substring(1) }) -join ""

    return $pascalCaseString
}



# Loop through each folder
foreach ($folder in $folders) {
    # Create the folder if it doesn't exist
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder
    }

    # Convert the folder name to PascalCase
    $pascalCaseFolder = Convert-ToPascalCase -kebabCaseString $folder

    # Create files inside the folder
    $files = @("index.ts", "Page.tsx", "$folder.module.scss")

foreach ($file in $files) {

$filePath = Join-Path $folder $file

# Create the file if it doesn't exist
if (-not (Test-Path $filePath)) {
    New-Item -ItemType File -Path $filePath
}

        # Add content to folder_name.tsx
if ($file -eq "Page.tsx") {
    $content = @"
import React from 'react';
import styles from './$folder.module.scss';

const $pascalCaseFolder = () => {
  return (
    <div className={styles['$folder']}>
      $pascalCaseFolder Component
    </div>
  );
};

export default $pascalCaseFolder;
"@

Set-Content -Path $filePath -Value $content
}
        # Add content to index.ts
if($file -eq "index.ts"){
  $content = @"
import Page from './Page'
export default Page
"@
Set-Content -Path $filePath -Value $content
}


# Add content to folder_name.module.scss
if ($file -eq "$folder.module.scss") {
$scssContent = @"
.$folder {
  /* Style your folder-specific component here */
}
"@

Set-Content -Path $filePath -Value $scssContent
}

}

# Ensure the @types directory exists and create index.d.ts
$typesDir = Join-Path $folder "@types"
if (-not (Test-Path $typesDir)) {
    New-Item -ItemType Directory -Path $typesDir
}

# Create index.d.ts inside the @types directory
$typesFilePath = Join-Path $typesDir "index.d.ts"
if (-not (Test-Path $typesFilePath)) {
    New-Item -ItemType File -Path $typesFilePath
}

}

Write-Output "Folders and files created successfully."

```
