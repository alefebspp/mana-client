import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NavBar from '.'
import navBarSections from '../../utils/helpers/navBarSections'

const mockUsePathname = jest.fn()
mockUsePathname.mockImplementation(() => [''])

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname()
  },
  useRouter() {
    jest.requireActual('next-router-mock')
  }
}))

let navIsHiddenMock = false

const mountSut = (hidden: boolean) => {
  return (
    <NavBar.Root hidden={hidden} closeNav={() => (navIsHiddenMock = true)}>
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

describe('<NavBar />', () => {
  it('should render the component', () => {
    render(mountSut(navIsHiddenMock))

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should not have a height if hidden is true', () => {
    render(mountSut(true))

    expect(screen.getByRole('navigation')).not.toHaveClass('h-full')
  })

  it('should have a height if hidden is false', () => {
    render(mountSut(navIsHiddenMock))

    expect(screen.getByRole('navigation')).toHaveClass('h-full')
  })

  it('should not have a defined height if button to close nav is clicked', async () => {
    const { rerender } = render(mountSut(navIsHiddenMock))

    expect(screen.getByRole('navigation')).toHaveClass('h-full')

    const navCloseButton = screen.getByRole('button')

    userEvent.click(navCloseButton)

    rerender(mountSut(true))
    expect(screen.getByRole('navigation')).not.toHaveClass('h-full')
  })

  it('should open section on click', async () => {
    render(mountSut(navIsHiddenMock))

    const section = screen.getAllByRole('section')[1]
    const sectionParent = section.parentNode
    userEvent.click(section)

    await waitFor(() => expect(sectionParent?.childElementCount).toBe(2))
  })
})
