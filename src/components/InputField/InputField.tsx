import { useState } from 'react'
import * as S from './InputField.styles'
import { InputFieldProps, getFieldError } from './InputField.utils'

const InputField = ({
  name,
  isRequired,
  wasSubmitted,
  type,
  options
}: InputFieldProps) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const errorMessage = getFieldError(value, isRequired, options)
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage

  return (
    <div key={name}>
      <label htmlFor={`${name}-input`}>{name}:</label>
      <input
        id={`${name}-input`}
        name={name}
        type={type}
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        required={isRequired}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`}>
          {errorMessage}
        </span>
      ) : null}
    </div>
  )
}

export default InputField
