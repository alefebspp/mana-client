import { Meta, StoryObj } from '@storybook/react'
import NavBar from '.'
import navBarSections from '../../utils/helpers/navBarSections'

const Component = () => {
  return (
    <NavBar.Root>
      {navBarSections.map((section) => (
        <NavBar.Section
          key={section.label}
          path={section.path}
          label={section.label}
          icon={section.icon}
          childrenSections={section.childrenSections}
        ></NavBar.Section>
      ))}
    </NavBar.Root>
  )
}

export default {
  title: 'NavBar',
  component: Component,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {}
