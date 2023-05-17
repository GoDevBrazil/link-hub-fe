interface FieldsProps {
  name: string
  type?: string
  isRequired?: boolean
}

export interface FormProps {
  fields: FieldsProps[]
}
