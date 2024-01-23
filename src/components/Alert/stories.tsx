import Alert from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { AlertRootProps } from './Root'
import { cn } from '@/lib/utils'

const Component = ({ variant }: AlertRootProps) => {
  return (
    <Alert.Root variant={variant}>
      <div
        className={cn('', {
          'flex flex-col': variant === 'error'
        })}
      >
        {variant === 'error' && <Alert.Title>Error</Alert.Title>}
        <Alert.Description>Default description</Alert.Description>
      </div>
    </Alert.Root>
  )
}

const meta: Meta<typeof Component> = {
  component: Component
}

export default meta
type Story = StoryObj<typeof Component>

export const Default: Story = {
  args: {
    variant: 'default'
  }
}

export const Error: Story = {
  args: {
    variant: 'error'
  }
}
