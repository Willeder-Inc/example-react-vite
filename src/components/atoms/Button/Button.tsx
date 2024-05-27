import React from "react"
import "./Button.scss"
import { ButtonProps } from "./@types"

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = "left",
  isLoading = false,
  loaderComponent,
  ...props
}) => {
  return (
    <div className="willeder-button-wrapper">
      <button
        {...props}
        className={`willeder-button ${iconPosition} ${props.className || ""}`}
        {...(isLoading && { disabled: true })}
      >
        {isLoading ? (
          loaderComponent || <div className="willeder-button-loader"></div>
        ) : (
          <>
            {icon && <div className="willeder-button-icon">{icon}</div>}
            {children}
          </>
        )}
      </button>
    </div>
  )
}

export default Button
