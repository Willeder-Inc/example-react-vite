import { FC } from "react"
import { InputProps } from "./@types"

const Input: FC<InputProps> = ({
  label,
  description,
  errorMessage,
  inputProps,
  className,
  placeholder,
  charLimit = 150,
}) => {
  return (
    // TODO: add char limit to input add it as a props and get that and initialize it
    <div className={`willeder-input-wrapper ${className ? className : null}`}>
      {label && <label className="willeder-input-label">{label}</label>}
      {description && (
        <p className="willeder-input-description">{description}</p>
      )}
      <input
        className={`willeder-input ${inputProps?.className}`}
        placeholder={placeholder}
        maxLength={charLimit}
        {...inputProps}
      />
      {errorMessage && <p className="willeder-input-error">{errorMessage}</p>}
    </div>
  )
}

export default Input
