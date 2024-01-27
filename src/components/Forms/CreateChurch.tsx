'use client'

// import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'
import { createChurch } from '@/lib/actions/churchs'

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  leader: z.string().min(1, 'Nome do líder é obrigatório'),
  email: z.string().email('Email inválido'),
  cnpj: z.string().min(1, 'CNPJ é obrigatório')
})

export default function CreateChurchForm() {
  // const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
    // defaultValues: categoryToUpdate && {
    //   description: categoryToUpdate.description,
    //   nature: categoryToUpdate.nature,
    //   belongs_to: categoryToUpdate.belongs_to || ''
    // }
  })

  const errorsNames = Object.getOwnPropertyNames(errors)

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    console.log(formData)
    try {
      // if (categoryToUpdate) {
      //   await updateCategory(categoryToUpdate.id, formData)
      //   return push('/categories')
      // }
      await createChurch(formData)
      // if (atModal) {
      //   push('/categories')
      // }
      reset()
    } catch (error) {
      console.log(error)
      throw new Error()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex flex-col items-start p-sm gap-4 md:items-center md:justify-center"
    >
      <Input.Container className="w-full md:w-[20rem]">
        <Input.Label>Nome</Input.Label>
        <Input.Root
          register={register}
          placeholder="Nome da igreja"
          name="name"
        />
      </Input.Container>

      <Input.Container className="w-full md:w-[20rem]">
        <Input.Label>Líder</Input.Label>
        <Input.Root
          register={register}
          placeholder="Líder da igreja"
          name="leader"
        />
      </Input.Container>

      <Input.Container className="md:w-[20rem]">
        <Input.Label>Email</Input.Label>
        <Input.Root
          register={register}
          placeholder="exemplo@email.com"
          name="email"
        />
      </Input.Container>

      <Input.Container className="md:w-[20rem]">
        <Input.Label>CNPJ</Input.Label>
        <Input.Root
          register={register}
          placeholder="00.000.000/0001-00"
          name="cnpj"
        />
      </Input.Container>

      <div>
        <Button isLoading={isSubmitting} className="w-full  md:w-[20rem]">
          {/* {categoryToUpdate ? 'Atualizar' : 'Criar'} */}
          Criar
        </Button>
        <Input.Error errors={errors} name={errorsNames[0]} />
      </div>
    </form>
  )
}
