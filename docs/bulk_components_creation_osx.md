```bash
#!/bin/bash

# Declare an array of folder names
folders=("custom-design" "quality")

convert_to_camel_case() {
    echo "$1" | awk -F'-' '{for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1' OFS=""
}



for folder in "${folders[@]}"
do
  converted_name=$(convert_to_camel_case "$folder")
  mkdir "$converted_name"

  # Create index.tsx with React component
cat <<EOF > "$converted_name/$converted_name.tsx"
import React from 'react';
import styles from './$converted_name.module.scss';

const $converted_name = () => {
  return (
    <div className={styles["$converted_name"]}>
      $converted_name Component
    </div>
  )
}

export default $converted_name;
EOF

# Create empty SCSS module
cat <<EOF > "$converted_name/$converted_name.module.scss"
.$converted_name {
}
EOF



# Create component export file
cat <<EOF > "$converted_name/index.ts"
import $converted_name from './$converted_name'

export default $converted_name
EOF




# Create types directory and definition file
mkdir "$converted_name/@types"
touch "$converted_name/@types/index.d.ts"

touch "$converted_name/$converted_name.stories.ts"

cat <<EOF > "$converted_name/$converted_name.stories.ts"

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
