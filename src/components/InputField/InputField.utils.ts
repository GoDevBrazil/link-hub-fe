import { CSSProperties } from 'react'

interface InputOptions {
  /**TODO:
   * Add more options and match the getFieldError function
   */
  maxLength: number
  minLength: number
}

export type InputFieldProps = {
  name: string
  type?: string
  isRequired?: boolean
  wasSubmitted: boolean
  options?: InputOptions
  customStyles?: CSSProperties
}

export function getFieldError(
  value: string | undefined,
  isRequired?: boolean,
  options?: { minLength: number; maxLength: number }
) {
  /** TODO:
   * Customize this function to call diferent validator functions
   * Not for prod env, this is only a boilerplate
   */
  if (isRequired && !value) return 'field is required'

  if (value && options) {
    const valueIsLowerCase = value === value.toLowerCase()
    const valueIsLongEnough = value.length >= options.minLength
    const valueIsShortEnough = value.length <= options.maxLength

    if (!valueIsLowerCase) {
      return 'value must be lower case'
    } else if (!valueIsLongEnough) {
      return 'value must be at least 3 characters long'
    } else if (!valueIsShortEnough) {
      return 'value must be no longer than 10 characters'
    }
  }

  return null
}
