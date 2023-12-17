import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NavBar from '.'
import navBarSections from '../../utils/helpers/navBarSections'
//import mockRouter from 'next-router-mock';

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

const mountComponent = () => {
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

describe('<NavBar />', () => {
  it('should render the component', () => {
    render(mountComponent())

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
  it('should open section on click', async () => {
    render(mountComponent())

    const section = screen.getAllByRole('section')[1]
    const sectionParent = section.parentNode
    userEvent.click(section)

    await waitFor(() => expect(sectionParent?.childElementCount).toBe(2))
  })
})
