import { Meta, StoryObj } from '@storybook/react'
import Input from '.'

const Component = () => {
  return (
    <div className="w-[20rem]">
      <Input.Container>
        <Input.Label>Label</Input.Label>
        <Input.Root name="test" />
      </Input.Container>
    </div>
  )
}

export default {
  title: 'Input',
  component: Component
} as Meta

export const Default: StoryObj = {}
