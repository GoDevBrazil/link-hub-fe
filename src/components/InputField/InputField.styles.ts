import styled from 'styled-components'

type InputStyledProps = {
  hasError: boolean
}

export const InputWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
`

export const Input = styled.input<InputStyledProps>`
  margin: 10px 0 0;
  background-color: #bfbfbf;
  padding: 8px;
  border: 1px solid transparent;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : hasError)};
  border-radius: 4px;
  width: 100%;
`

export const ErrorMessage = styled.span`
  color: red;
  align-self: flex-end;
  margin: 5px 0 0;
`
