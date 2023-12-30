'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Select from '../Select'

import { Category } from '@/firebase/collections/categories'
import { createCategory } from '@/firebase/services/categories'

const schema = z.object({
  description: z.string().min(1, 'Descrição necessária'),
  nature: z.enum(['contribution', 'expense'], {
    invalid_type_error: 'Selecione uma opção'
  }),
  belongs_to: z.string().nullable().default(null)
})

interface Props {
  categories: Category[]
}

export default function CreateCategoryForm({ categories }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    try {
      const response = await createCategory(formData)

      if (!response.success) {
        throw new Error(response.message)
      }
      reset()
    } catch (error) {
      console.log(error)
      throw new Error('Erro ao criar nova categoria')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col items-start p-sm gap-4 md:items-center md:justify-center"
    >
      <Select.Container className="w-full md:w-[20rem]">
        <Select.Label>
          Pertence a <i className="opacity-70">(Opcional)</i>
        </Select.Label>
        <Select.Root
          register={register}
          placeholder="Pertence a outra categoria"
          name="belongs_to"
          options={categories.map((category) => ({
            label: `${category.code}.${category.description}`,
            value: category.id
          }))}
        />
        <Select.Error errors={errors} name="belongs_to" />
      </Select.Container>

      <Input.Container className="w-full md:w-[20rem]">
        <Input.Label>Descrição</Input.Label>
        <Input.Root
          register={register}
          placeholder="Descrição da categoria"
          name="description"
        />
        <Input.Error errors={errors} name="description" />
      </Input.Container>

      <div className="w-full md:w-[20rem] flex flex-col">
        <label className="text-gray-dark text-xs xl:text-sm font-semibold">
          Natureza
        </label>
        <div className="w-full flex items-center justify-evenly gap-2 py-2">
          <Input.Container className="flex-row items-center gap-2">
            <Input.Root
              register={register}
              name="nature"
              type="radio"
              value="contribution"
            />
            <Input.Label className="opacity-90">Contribuição</Input.Label>
          </Input.Container>

          <Input.Container className="flex-row items-center gap-2">
            <Input.Root
              register={register}
              name="nature"
              type="radio"
              value="expense"
            />
            <Input.Label className="opacity-90">Despesa</Input.Label>
          </Input.Container>
        </div>
        <Input.Error errors={errors} name="nature" />
      </div>

      <Button isLoading={isSubmitting} className="w-full  md:w-[20rem]">
        Criar
      </Button>
    </form>
  )
}
