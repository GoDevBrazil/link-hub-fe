import React from 'react'
import * as S from './Button.styles'
import { ButtonProps } from './Button.utils'

const Button = ({ label, type, customStyles }: ButtonProps) => {
  /* const combinedStyles = { ...S.Button, ...customStyles } */

  return (
    <S.Button type={type} style={customStyles}>
      {label}
    </S.Button>
  )
}

export default Button
