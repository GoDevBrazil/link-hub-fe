import Form from 'components/Form/Form'
import { SigninFormFields } from 'components/Form/FormFields'
import Main from 'components/Main/Main'

export default function Home() {
  return (
    <Main textColor="#212121" backgroundColor="#EAEAEA">
      <Form fields={SigninFormFields} />
    </Main>
  )
}
