import { ButtonProps } from './Button.utils'

const Button = ({ label, type, customStyles }: ButtonProps) => {
  return (
    <button type={type} style={customStyles}>
      {label}
    </button>
  )
}

export default Button
