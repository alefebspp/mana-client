import { render, screen } from '@testing-library/react'

import CategoriesTable from '.'

describe('<CategoriesTable />', () => {
  it('should render the heading', () => {
    const { container } = render(<CategoriesTable baseCategories={[]} />)

    expect(
      screen.getByRole('heading', { name: /CategoriesTable/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
