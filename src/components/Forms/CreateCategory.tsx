'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Select from '../Select'

const schema = z.object({
  description: z.string().min(1, 'Descrição necessária'),
  nature: z.enum(['contribution', 'expense'], {
    invalid_type_error: 'Selecione uma opção'
  }),
  belongs_to: z.string()
})

export default function CreateCategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    console.log({ formData })
  }

  console.log(getValues())

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col items-start p-sm gap-4 md:items-center md:justify-center"
    >
      <Input.Container className="w-full md:w-[20rem]">
        <Input.Label>Descrição</Input.Label>
        <Input.Root
          register={register}
          placeholder="Descrição da categoria"
          name="description"
        />
        <Input.Error errors={errors} name="description" />
      </Input.Container>

      <Select.Container className="w-full md:w-[20rem]">
        <Select.Label>{'Pertence a (opcional)'}</Select.Label>
        <Select.Root
          placeholder="Pertence a outra categoria"
          name="belongs_to"
        />
        <Select.Error errors={errors} name="belongs_to" />
      </Select.Container>

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

      <Button className="w-full  md:w-[20rem]">Criar</Button>
    </form>
  )
}
