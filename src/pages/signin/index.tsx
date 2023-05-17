import Form from 'components/Form/Form'
import Main from 'components/Main/Main'
import { SigninFormFields } from 'components/Form/FormFields'

export default function Signin() {
  return (
    <Main textColor="#fff" backgroundColor="#06092b">
      <Form fields={SigninFormFields} />
    </Main>
  )
}
