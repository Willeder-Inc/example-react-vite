import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  iconPosition?: "left" | "right" | "top" | "bottom"
  isLoading?: boolean
  loaderComponent?: ReactNode
}
