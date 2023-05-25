import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 5px;
  border: 2px solid #000;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
`

export const Input = styled.input`
  margin: 10px 0 0;
  background-color: #bfbfbf;
  padding: 6px 8px;
  border: none;
  border-radius: 4px;
  width: 100%;
`

export const ErrorMessage = styled.span`
  color: red;
  align-self: flex-end;
  margin: 5px 0;
`
