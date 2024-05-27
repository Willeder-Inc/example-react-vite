```shell

# Declare an array of folder names
$folders = @("custom-design", "quality")

# Function to convert a kebab-case string to CamelCase
function Convert-ToCamelCase {
    param (
        [string]$kebabCaseString
    )

    # Split the string by hyphens, capitalize each word, and join them
    $words = $kebabCaseString -split "-"
    $camelCaseString = ($words | ForEach-Object { $_.Substring(0, 1).ToUpper() + $_.Substring(1) }) -join ""

    return $camelCaseString
}



# Loop through each folder
foreach ($folder in $folders) {
    # Convert the folder name to CamelCase
    $convertedName = Convert-ToCamelCase -kebabCaseString $folder

    # Create the folder if it doesn't exist
    if (-not (Test-Path $convertedName)) {
        New-Item -ItemType Directory -Path $convertedName
    }

    # Create index.tsx with a React component
    $tsxContent = @"
import React from 'react';
import styles from './$convertedName.module.scss';

const $convertedName = () => {
  return (
    <div className={styles['$convertedName']}>
      $convertedName Component
    </div>
  );
};

export default $convertedName;
"@

    Set-Content -Path "$convertedName/$convertedName.tsx" -Value $tsxContent

    # Create empty SCSS module
    $scssContent = @"
.$convertedName {
}
"@

    Set-Content -Path "$convertedName/$convertedName.module.scss" -Value $scssContent

    # Create the component export file
    $indexContent = @"
import $convertedName from './$convertedName';

export default $convertedName;
"@

    Set-Content -Path "$convertedName/index.ts" -Value $indexContent

    # Ensure the @types directory exists
    $typesDir = Join-Path $convertedName "@types"
    if (-not (Test-Path $typesDir)) {
        New-Item -ItemType Directory -Path $typesDir
    }

    # Create definition file inside the @types directory
    $typesFilePath = Join-Path $typesDir "index.d.ts"
    if (-not (Test-Path $typesFilePath)) {
        New-Item -ItemType File -Path $typesFilePath
    }

    # Create Storybook file for the component
    $storybookContent = @"
import type { Meta, StoryObj } from '@storybook/react';
import Page from './Page';

const meta = {
  title: '$convertedName',
  component: Page,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
"@

    Set-Content -Path "$convertedName/$convertedName.stories.ts" -Value $storybookContent
}

Write-Output "Folders and files created successfully."
```
