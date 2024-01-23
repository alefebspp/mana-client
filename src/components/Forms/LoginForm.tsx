'use client'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'
import { login } from '@/lib/actions/auth'
import Alert from '../Alert'

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Digite uma senha')
})

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    try {
      setErrorMessage(null)
      const response = await login(formData)
      if (response?.message) {
        setErrorMessage(response.message)
      }
    } catch (error) {
      console.log(error)
      setErrorMessage('Erro no servidor')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-[1rem] flex flex-col md:justify-center md:items-center gap-[1rem]"
    >
      <Input.Container className="md:w-[20rem]">
        <Input.Label>Email</Input.Label>
        <Input.Root
          register={register}
          placeholder="exemplo@email.com"
          name="email"
        />
        <Input.Error errors={errors} name="email" />
      </Input.Container>

      <Input.Container className="md:w-[20rem]">
        <Input.Label>Senha</Input.Label>
        <Input.Root
          type="password"
          register={register}
          placeholder="******"
          name="password"
        />
        <Input.Error errors={errors} name="password" />
      </Input.Container>

      <Button isLoading={isSubmitting} type="submit" className="md:w-[20rem]">
        Login
      </Button>
      {errorMessage && (
        <Alert.Root className="md:w-[20rem]" variant="error">
          <div className="flex flex-col">
            <Alert.Title>Erro</Alert.Title>
            <Alert.Description>{errorMessage}</Alert.Description>
          </div>
        </Alert.Root>
      )}
    </form>
  )
}
