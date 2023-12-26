'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Digite uma senha')
})

export default function LoginForm() {
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    console.log({ formData })
    push('/home')
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
        <Input.Root register={register} placeholder="******" name="password" />
        <Input.Error errors={errors} name="password" />
      </Input.Container>

      <Button type="submit" className="md:w-[20rem]">
        Login
      </Button>
    </form>
  )
}
