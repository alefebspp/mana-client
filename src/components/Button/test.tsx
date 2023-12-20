import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button>button</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
