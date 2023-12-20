'use client'

import { useRouter } from 'next/navigation'
import { Formik, Form } from 'formik'
import z, { ZodError } from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'

const ValidationSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Digite uma senha')
})

type FormValues = z.infer<typeof ValidationSchema>

export default function LoginForm() {
  const { push } = useRouter()
  const validateForm = (values: FormValues) => {
    try {
      ValidationSchema.parse(values)
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors
      }
    }
  }

  return (
    <Formik<FormValues>
      initialValues={{ email: '', password: '' }}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false)
          push('/home')
        }, 400)
      }}
    >
      <Form className="w-full px-[1rem] flex flex-col md:justify-center md:items-center gap-[1rem]">
        <Input.Container className="md:w-[20rem]">
          <Input.Label>Email</Input.Label>
          <Input.Root name="email" />
        </Input.Container>
        <Input.Container className="md:w-[20rem]">
          <Input.Label>Senha</Input.Label>
          <Input.Root name="password" />
        </Input.Container>
        <Button type="submit" className="md:w-[20rem]">
          Login
        </Button>
      </Form>
    </Formik>
  )
}
