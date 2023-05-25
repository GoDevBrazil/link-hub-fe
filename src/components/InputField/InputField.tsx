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
    <S.InputWrapper key={name}>
      <S.Label htmlFor={`${name}-input`}>{name}:</S.Label>
      <S.Input
        id={`${name}-input`}
        name={name}
        type={type}
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        required={isRequired}
      />
      {displayErrorMessage ? (
        <S.ErrorMessage role="alert" id={`${name}-error`}>
          {errorMessage}
        </S.ErrorMessage>
      ) : null}
    </S.InputWrapper>
  )
}

export default InputField
