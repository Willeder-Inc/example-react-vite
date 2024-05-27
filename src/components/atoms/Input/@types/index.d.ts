import { InputHTMLAttributes } from "react"

export type InputProps = {
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  className?: string
  charLimit?: number
}
