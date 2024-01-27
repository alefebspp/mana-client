'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Select from '../Select'

import { Category } from '@/services/types'
import { createCategory, updateCategory } from '@/lib/actions/categories'

const schema = z.object({
  description: z.string().min(1, 'Descrição necessária'),
  nature: z.enum(['contribution', 'expense'], {
    invalid_type_error: 'Selecione uma opção'
  }),
  belongs_to: z.string()
})

interface Props {
  categories: Category[]
  categoryToUpdate?: Category
  atModal?: boolean
}

export default function CreateCategoryForm({
  categories,
  categoryToUpdate,
  atModal
}: Props) {
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: categoryToUpdate && {
      description: categoryToUpdate.description,
      nature: categoryToUpdate.nature,
      belongs_to: categoryToUpdate.belongs_to || ''
    }
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    try {
      if (categoryToUpdate) {
        await updateCategory(categoryToUpdate.id, formData)
        return push('/categories')
      }
      await createCategory(formData)
      if (atModal) {
        push('/categories')
      }
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
      <Select.Container className="w-full md:w-[20rem]">
        <Select.Label>
          Pertence a <i className="opacity-70">(Opcional)</i>
        </Select.Label>
        <Select.Root
          register={register}
          placeholder="Pertence a outra categoria"
          name="belongs_to"
          options={categories
            .filter((category) => {
              if (categoryToUpdate) {
                return !category.hidden && category.id != categoryToUpdate.id
              }
              return !category.hidden
            })
            .map((category) => ({
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
        {categoryToUpdate ? 'Atualizar' : 'Criar'}
      </Button>
    </form>
  )
}
