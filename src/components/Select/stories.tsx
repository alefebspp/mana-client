import { Meta, StoryObj } from '@storybook/react'
import Select from '.'

const Component = () => {
  return (
    <Select.Container>
      <Select.Label>Label</Select.Label>
      <Select.Root name="test" />
    </Select.Container>
  )
}

export default {
  title: 'Select',
  component: Component
} as Meta

export const Default: StoryObj = {}
