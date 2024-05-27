```bash
#!/bin/bash

# Declare an array of folder names
folders=("custom-design" "quality")

# Function to convert kebab-case to CamelCase
# convert_to_camel_case() {
#     local input="$1"
#     if [[ "$input" == *"-"* ]]; then
#         echo "$input" | awk -F'-' '{for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1' OFS=""
#     else
#         echo "$input"  # If there's no hyphen, return the original name
#     fi
# }

convert_to_camel_case() {
    echo "$1" | awk -F'-' '{for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1' OFS=""
}



for folder in "${folders[@]}"
do
  mkdir "$folder"
  converted_name=$(convert_to_camel_case "$folder")

  # Create index.tsx with React component
cat <<EOF > "$folder/Page.tsx"
import React from 'react';
import styles from './$folder.module.scss';

const $converted_name = () => {
  return (
    <div className={styles["$folder"]}>
      $converted_name Component
    </div>
  )
}

export default $converted_name;
EOF

# Create empty SCSS module
touch "$folder/$folder.module.scss"




# Create component export file
cat <<EOF > "$folder/index.ts"
import Page from './Page'

export default Page
EOF




# Create types directory and definition file
mkdir "$folder/@types"
touch "$folder/@types/index.d.ts"

touch "$folder/$converted_name.stories.ts"

cat <<EOF > "$folder/$converted_name.stories.ts"

import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import Page from "./Page"

const meta = {
  title: "$converted_name",
  component: Page,
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const $converted_name: Story = {
  args: {},
}

EOF



done

```
