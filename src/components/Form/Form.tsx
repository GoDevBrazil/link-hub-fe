import { useState } from 'react'
import InputField from 'components/InputField/InputField'
import Button from 'components/Button/Button'
// import { getFieldError } from 'components/InputField/InputField.utils'
import { FormProps } from './Form.utils'

const Form = ({ fields }: FormProps) => {
  const [wasSubmitted, setWasSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())

    const formIsValid = Object.values(fieldValues).every((value) =>
      console.log(value)
    )

    setWasSubmitted(true)

    // if(formIsValid) {
    //   event.currentTarget.reset()
    //   console.log(`Form was Submitted`, fieldValues)
    // }

    console.log(`Form was Submitted`, fieldValues)
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {fields.map(({ name, type, isRequired }) => (
        <InputField
          key={name}
          name={name}
          type={type}
          isRequired={isRequired}
          wasSubmitted={wasSubmitted}
        />
      ))}
      <Button type="submit" label="Entrar" />
    </form>
  )
}

export default Form
