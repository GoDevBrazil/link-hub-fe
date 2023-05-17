import { CSSProperties } from 'react'

export interface ButtonProps {
  label: string
  type?: 'button' | 'reset' | 'submit'
  customStyles?: CSSProperties
}
